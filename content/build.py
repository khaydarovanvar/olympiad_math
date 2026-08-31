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
    return lesson


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
    index = []

    for n in wanted:
        lesson = load(n)
        if lesson is None:
            continue
        check_structure(lesson, issues)
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
    if issues:
        print('ISSUES (%d):' % len(issues))
        for i in issues[:60]:
            print('  ' + i)
        sys.exit(1)
    print('all checks pass')


if __name__ == '__main__':
    main()
