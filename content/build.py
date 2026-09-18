#!/usr/bin/env python3
"""Build the lesson data files, and check every formula in them.

Lessons are authored as Python modules (``lesson_01.py`` and so on) so that TeX
can be written in raw strings — ``r"\\gcd(a,b)"`` rather than the doubled
backslashes a hand-written .js or .json would need.  This script turns them
into ``site/assets/data/lessons/lNN.js`` and, on the way, hands every formula
to KaTeX so a typo fails the build instead of rendering red on the page.

    python3 content/build.py            # build and check everything
    python3 content/build.py 1 6        # only those topics
"""
import importlib.util
import json
import pathlib
import re
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'site' / 'assets' / 'data' / 'lessons'
KATEX = ROOT / 'site' / 'assets' / 'vendor' / 'katex' / 'katex.min.js'

LANGS = ('ru', 'en')

# Uzbek is translated separately, in content/uz/uz_NN.py, so that the lesson
# files stay exactly as they were written.  It is therefore not in LANGS: a
# missing Uzbek string is reported as a count, not as a build failure, and the
# renderer falls back to English for anything still outstanding.
UZ_LANG = 'uz'

# Every block type the renderer knows, with the fields it must carry.
BLOCK_FIELDS = {
    'p':     ('text',),
    'def':   ('name', 'text'),
    'thm':   ('name', 'text'),
    'lemma': ('name', 'text'),
    'proof': ('text',),
    'note':  ('text',),
    'warn':  ('text',),
    'idea':  ('text',),
    'ul':    ('items',),
    'ol':    ('items',),
    'table': ('head', 'rows'),
    'ex':    ('q', 'steps', 'ans'),
    'eq':    ('tex',),
    'fig':   ('svg', 'cap'),
}


def _module(path, name):
    spec = importlib.util.spec_from_file_location(name, path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def load(n):
    path = ROOT / 'content' / ('lesson_%02d.py' % n)
    if not path.exists():
        return None
    lesson = _module(path, 'lesson_%02d' % n).LESSON

    # A topic's problem set grows past what fits comfortably in one file, so the
    # extra rounds live beside it in problems_NN.py and are appended here.
    extra = ROOT / 'content' / ('problems_%02d.py' % n)
    if extra.exists():
        lesson['problems'] = lesson['problems'] + _module(extra, 'problems_%02d' % n).EXTRA

    # The theory grows the same way.  theory_NN.py may add whole sections and
    # may append blocks to sections the lesson file already defines, so the
    # deeper material can sit exactly where it belongs rather than in a heap
    # at the end.
    deep = ROOT / 'content' / ('theory_%02d.py' % n)
    if deep.exists():
        lesson['sections'] = merge_theory(lesson['sections'],
                                          _module(deep, 'theory_%02d' % n))

    split_sources(lesson)
    return lesson


def split_sources(lesson):
    """Turn a problem's `src` label into a per-language triple.

    The label is authored as one string, 'Разминка / Warm-up', because it is
    the same fact said twice.  The renderer wants the same {ru, en, uz} shape
    as everything else, so it is split here and the Uzbek half looked up in
    content/uz/sources.py."""
    table = uz_sources()
    for p in lesson.get('problems', []):
        src = p.get('src')
        if not isinstance(src, str):
            continue
        ru, _, en = src.partition(' / ')
        en = en or ru
        p['src'] = {'ru': ru, 'en': en, UZ_LANG: table.get(en, en)}


_SOURCES = None


def uz_sources():
    global _SOURCES
    if _SOURCES is None:
        path = ROOT / 'content' / 'uz' / 'sources.py'
        _SOURCES = _module(path, 'uz_sources').SOURCES if path.exists() else {}
    return _SOURCES


# --------------------------------------------------------------------------
# Uzbek
#
# Every translatable string in a built lesson gets a short, stable address —
# 's3.b7.text', 'p12.hint', 's0.b2.steps.1' — and content/uz/uz_NN.py is a flat
# {address: Uzbek} table.  Addressing rather than mirroring the file structure
# means the translation survives an edit to the surrounding prose, and it makes
# "what is still missing" a set difference rather than a diff.

LIST_FIELDS = ('items', 'steps', 'head')
SKIP_FIELDS = ('tex', 'svg', 't', 'n', 'cat', 'lvl')


def uz_slots(lesson):
    """Yield (address, dict, english) for every translatable pair in a lesson."""
    out = []

    def pair(addr, d):
        if isinstance(d, dict) and 'en' in d:
            out.append((addr, d, d['en']))

    def field(addr, d):
        """A {ru, en} value that may hold a string, a list or a table body."""
        if not isinstance(d, dict) or 'en' not in d:
            return
        en = d['en']
        if isinstance(en, str):
            out.append((addr, d, en))
        elif isinstance(en, list) and en and isinstance(en[0], list):
            for r, row in enumerate(en):           # table rows
                for c, cell in enumerate(row):
                    out.append(('%s.%d.%d' % (addr, r, c), (d, r, c), cell))
        elif isinstance(en, list):
            for i, item in enumerate(en):
                out.append(('%s.%d' % (addr, i), (d, i), item))

    pair('title', lesson.get('title'))
    pair('sub', lesson.get('sub'))
    field('goals', lesson.get('goals'))
    for si, sec in enumerate(lesson.get('sections', [])):
        pair('s%d.h' % si, sec.get('h'))
        for bi, b in enumerate(sec.get('blocks', [])):
            for f, v in b.items():
                if f in SKIP_FIELDS:
                    continue
                field('s%d.b%d.%s' % (si, bi, f), v)
    for pi, p in enumerate(lesson.get('problems', [])):
        for f in ('q', 'hint', 'sol'):
            field('p%d.%s' % (pi, f), p.get(f))
    return out


def apply_uz(lesson, n):
    """Fill in the Uzbek half wherever content/uz/uz_NN.py has it.

    Returns (translated, total) so the build can report how far along the
    translation is."""
    path = ROOT / 'content' / 'uz' / ('uz_%02d.py' % n)
    table = _module(path, 'uz_%02d' % n).UZ if path.exists() else {}
    slots = uz_slots(lesson)
    done = 0
    for addr, target, _en in slots:
        text = table.get(addr)
        if text is None:
            continue
        done += 1
        if isinstance(target, dict):
            target[UZ_LANG] = text
        elif len(target) == 2:                     # (dict, index) — a list item
            d, i = target
            d.setdefault(UZ_LANG, list(d['en']))
            d[UZ_LANG][i] = text
        else:                                      # (dict, row, col) — a table
            d, r, c = target
            d.setdefault(UZ_LANG, [list(row) for row in d['en']])
            d[UZ_LANG][r][c] = text
    return done, len(slots)


def merge_theory(sections, mod):
    """Weave theory_NN.py into a lesson's own sections.

    INTO     {index: [block, ...]}   blocks appended to an existing section
    SECTIONS [(index, section), ...] a new section inserted *before* index
                                     (an index past the end appends)
    """
    into = getattr(mod, 'INTO', {})
    added = getattr(mod, 'SECTIONS', [])
    out = []
    for i, sec in enumerate(sections):
        for at, new_sec in added:
            if at == i:
                out.append(new_sec)
        if i in into:
            sec = dict(sec, blocks=sec['blocks'] + into[i])
        out.append(sec)
    for at, new_sec in added:
        if at >= len(sections):
            out.append(new_sec)
    return out


# --------------------------------------------------------------------------
# validation

def walk_strings(node, path='', out=None):
    """Yield (path, string) for every string anywhere in the lesson."""
    if out is None:
        out = []
    if isinstance(node, str):
        out.append((path, node))
    elif isinstance(node, dict):
        for k, v in node.items():
            walk_strings(v, path + '.' + str(k), out)
    elif isinstance(node, (list, tuple)):
        for i, v in enumerate(node):
            walk_strings(v, path + '[%d]' % i, out)
    return out


MATH = re.compile(r'\$\$(.+?)\$\$|\$(.+?)\$', re.S)

# Lessons are authored in raw strings so that TeX needs no doubled backslashes.
# The cost is that a paragraph break written as \n stays two literal characters,
# so it has to be turned into a real newline here — outside the maths, where a
# backslash always starts a TeX command and must be left exactly as it is.
MATH_SPAN = re.compile(r'\$\$[\s\S]+?\$\$|\$[^$]+?\$')


def real_newlines(text):
    out, last = [], 0
    for m in MATH_SPAN.finditer(text):
        out.append(text[last:m.start()].replace('\\n', '\n'))
        out.append(m.group(0))
        last = m.end()
    out.append(text[last:].replace('\\n', '\n'))
    return ''.join(out)


def normalise(node, key=None):
    """Walk the lesson, fixing newlines in every string except raw TeX and SVG."""
    if isinstance(node, str):
        return node if key in ('tex', 'svg') else real_newlines(node)
    if isinstance(node, dict):
        return {k: normalise(v, k) for k, v in node.items()}
    if isinstance(node, list):
        return [normalise(v, key) for v in node]
    return node



def formulas(text):
    for m in MATH.finditer(text):
        yield (m.group(1) or m.group(2)), bool(m.group(1))


def check_structure(lesson, issues):
    tag = 'topic %s' % lesson.get('n')
    for key in ('n', 'cat', 'title', 'sub', 'goals', 'sections', 'problems'):
        if key not in lesson:
            issues.append('%s: missing %s' % (tag, key))
    for key in ('title', 'sub'):
        for lang in LANGS:
            if not lesson.get(key, {}).get(lang):
                issues.append('%s: %s has no %s' % (tag, key, lang))
    for lang in LANGS:
        if len(lesson.get('goals', {}).get(lang, [])) < 3:
            issues.append('%s: fewer than 3 goals in %s' % (tag, lang))

    for si, sec in enumerate(lesson.get('sections', [])):
        where = '%s section %d' % (tag, si)
        for lang in LANGS:
            if not sec.get('h', {}).get(lang):
                issues.append('%s: no heading in %s' % (where, lang))
        for bi, b in enumerate(sec.get('blocks', [])):
            t = b.get('t')
            if t not in BLOCK_FIELDS:
                issues.append('%s block %d: unknown type %r' % (where, bi, t))
                continue
            for f in BLOCK_FIELDS[t]:
                if f not in b:
                    issues.append('%s block %d (%s): missing %s' % (where, bi, t, f))
                    continue
                val = b[f]
                if f in ('tex', 'svg'):
                    continue          # shared across languages, not translated
                if not isinstance(val, dict):
                    issues.append('%s block %d (%s): %s is not per-language' % (where, bi, t, f))
                    continue
                for lang in LANGS:
                    if lang not in val or val[lang] in (None, '', [], {}):
                        issues.append('%s block %d (%s): %s has no %s' % (where, bi, t, f, lang))

    seen = set()
    for pi, p in enumerate(lesson.get('problems', [])):
        where = '%s problem %d' % (tag, pi)
        if not p.get('src'):
            issues.append('%s: no source' % where)
        if p.get('lvl') not in (1, 2, 3, 4):
            issues.append('%s: level must be 1, 2, 3 or 4' % where)
        for f in ('q', 'hint', 'sol'):
            for lang in LANGS:
                if not p.get(f, {}).get(lang):
                    issues.append('%s: %s has no %s' % (where, f, lang))
        # Compare the whole statement, not a prefix: two different problems
        # can legitimately open with the same wording ('Find all pairs of
        # positive integers (a,b) with ...').  Punctuation and spacing are
        # dropped so a reformatted copy still counts as a duplicate.
        key = re.sub(r'[^0-9a-z]+', '', p.get('q', {}).get('en', '').lower())
        if key in seen:
            issues.append('%s: looks like a duplicate of an earlier problem' % where)
        seen.add(key)


def check_math(lesson, issues):
    """Hand every formula to KaTeX; anything it refuses is a build failure."""
    items = []
    for path, text in walk_strings(lesson):
        if '$' not in text:
            continue
        # an odd number of unescaped $ means a delimiter was left open
        if text.count('$') % 2:
            issues.append('topic %s%s: unbalanced $ in %r' % (lesson['n'], path, text[:70]))
        for tex, display in formulas(text):
            items.append({'path': '%s%s' % (lesson['n'], path), 'tex': tex, 'display': display})
    if not items:
        return
    script = r'''
/* with `node -e code a b`, argv is [node, a, b] — the code is not an entry */
const katex = require(process.argv[1]);
const items = JSON.parse(require('fs').readFileSync(process.argv[2], 'utf8'));
const bad = [];
for (const it of items) {
  try { katex.renderToString(it.tex, { displayMode: it.display, throwOnError: true, strict: false }); }
  catch (e) { bad.push(it.path + ' :: ' + it.tex.slice(0, 60) + ' :: ' + e.message.split('\n')[0]); }
}
console.log(JSON.stringify(bad));
'''
    tmp = ROOT / 'content' / '.formulas.json'
    tmp.write_text(json.dumps(items), encoding='utf-8')
    try:
        res = subprocess.run(['node', '-e', script, str(KATEX), str(tmp)],
                             capture_output=True, text=True)
        if res.returncode:
            issues.append('KaTeX check failed to run: %s' % res.stderr.strip()[:200])
        else:
            for line in json.loads(res.stdout):
                issues.append('bad formula ' + line)
    finally:
        tmp.unlink(missing_ok=True)
    return len(items)


# --------------------------------------------------------------------------

def main():
    wanted = [int(a) for a in sys.argv[1:]] or list(range(1, 17))
    OUT.mkdir(parents=True, exist_ok=True)
    issues, built, total_formulas, total_problems = [], [], 0, 0
    index, uz_counts = [], []

    for n in wanted:
        lesson = load(n)
        if lesson is None:
            continue
        check_structure(lesson, issues)
        uz_done, uz_total = apply_uz(lesson, n)
        uz_counts.append((n, uz_done, uz_total))
        total_formulas += check_math(lesson, issues) or 0
        total_problems += len(lesson.get('problems', []))

        lesson = normalise(lesson)
        js = ('/* Topic %d — generated from content/lesson_%02d.py, do not edit by hand. */\n'
              'window.LESSONS = window.LESSONS || {};\n'
              'window.LESSONS[%d] = %s;\n') % (
            n, n, n, json.dumps(lesson, ensure_ascii=False, indent=1))
        (OUT / ('l%02d.js' % n)).write_text(js, encoding='utf-8')
        built.append(n)
        index.append({'n': n, 'cat': lesson['cat'],
                      'title': lesson['title'],
                      'sub': lesson['sub'],
                      'problems': len(lesson.get('problems', [])),
                      'sections': len(lesson.get('sections', []))})

    if index:
        # merge into any index already written for topics built earlier
        idx_path = OUT / 'index.js'
        old = {}
        if idx_path.exists():
            m = re.search(r'= (\[.*\]);', idx_path.read_text(encoding='utf-8'), re.S)
            if m:
                for e in json.loads(m.group(1)):
                    old[e['n']] = e
        for e in index:
            old[e['n']] = e
        merged = [old[k] for k in sorted(old)]
        idx_path.write_text(
            '/* Which topics have a written lesson. Generated by content/build.py. */\n'
            'window.LESSON_INDEX = %s;\n' % json.dumps(merged, ensure_ascii=False, indent=1),
            encoding='utf-8')

    print('built lessons: %s' % (', '.join(str(b) for b in built) or 'none'))
    print('%d formulas checked · %d problems' % (total_formulas, total_problems))
    if uz_counts:
        done = sum(d for _, d, _ in uz_counts)
        tot = sum(t for _, _, t in uz_counts)
        print('uzbek: %d/%d strings (%d%%)%s' % (
            done, tot, round(100 * done / tot) if tot else 0,
            '' if done == tot else ' — the rest falls back to English'))
    if issues:
        print('ISSUES (%d):' % len(issues))
        for i in issues[:60]:
            print('  ' + i)
        sys.exit(1)
    print('all checks pass')


if __name__ == '__main__':
    main()
