# -*- coding: utf-8 -*-
"""Birlashgan darsdan ikkita hujjat yasaydi.

    python3 build-dars.py dars01-data.py Birlashgan-dars-9-10-11

  <stem>-dars.pdf      oʻqituvchi uchun: reja, toʻrtta harakat, toʻliq yechimlar
  <stem>-masalalar.pdf oʻquvchi uchun: 14 ta masala, yechish uchun joy bilan
  <stem>.html          ikkalasi ham, oʻzbekcha/ruscha almashtirgichi bilan
"""
import html as H
import importlib.util, json, pathlib, re, subprocess, sys

HERE = pathlib.Path(__file__).resolve().parent
DATA = sys.argv[1] if len(sys.argv) > 1 else 'dars01-data.py'
STEM = sys.argv[2] if len(sys.argv) > 2 else 'Birlashgan-dars-9-10-11'

spec = importlib.util.spec_from_file_location('dars', HERE / DATA)
D = importlib.util.module_from_spec(spec); spec.loader.exec_module(D)
C = D.CHROME

KATEX_CSS = (HERE.parent / 'reja/katex-inline.css').read_text(encoding='utf-8')
KATEX_JS = (HERE.parent / 'site/assets/vendor/katex/katex.min.js').read_text(encoding='utf-8')

MATH = re.compile(r'\$(.+?)\$', re.S)

def M(t):
    """$...$ goes to KaTeX; the rest is authored HTML and passes through."""
    t = MATH.sub(lambda m: '<span class="k">%s</span>' % H.escape(m.group(1)), t)
    return re.sub(r'\*(.+?)\*', r'<i>\1</i>', t, flags=re.S)

def L(pair, tag='span'):
    uz, ru = pair
    return ('<%s data-l="uz">%s</%s><%s data-l="ru">%s</%s>'
            % (tag, M(uz), tag, tag, M(ru), tag))

HUE = {'nt': 'nt', 'alg': 'alg', 'geo': 'geo', 'comb': 'comb'}


def mast(kind):
    spec = ''.join('<li>%s</li>' % L(s) for s in C['spec'])
    return ('<header class="mast"><div class="topline">'
            '<p class="eyebrow">%s</p><p class="kind">%s</p></div>'
            '<h1>%s</h1><p class="sub">%s</p><ul class="spec">%s</ul></header>'
            % (L(C['eyebrow']), kind, L(C['h1']), L(C['sub']), spec))


def weights_block():
    top = max(w[2] for w in D.WEIGHTS)
    rows = ''.join(
      '<li><span class="nm">%s</span><span class="pc">%.1f%% · %d</span>'
      '<span class="track"><span class="fill" style="width:%.1f%%"></span></span></li>'
      % (L(w[0]), w[2], w[1], w[2] / top * 100) for w in D.WEIGHTS)
    return ('<section class="blk"><h2>%s</h2><ul class="wbar">%s</ul>'
            '<p class="why">%s</p></section>'
            % (L(('Sonlar nazariyasining ulushi', 'Доля теории чисел')),
               rows, L(D.WHY)))


def moves_block():
    out = []
    for mv in D.MOVES:
        out.append(
          '<article class="move" style="--hue:var(--%s);--hue-bg:var(--%s-bg)">'
          '<div class="mh"><span class="num">%s</span><h3>%s</h3></div>'
          '<p class="qoida">%s</p>'
          '<div class="misol"><span class="lab">%s</span>%s</div>'
          '<p class="hiyla"><span class="lab2">%s</span>%s</p></article>'
          % (HUE[mv['hue']], HUE[mv['hue']], mv['kod'], L(mv['nom']),
             L(mv['qoida']),
             L(('Namuna', 'Образец')), L(mv['misol']),
             L(('Yana', 'Ещё')), L(mv['hiyla'])))
    return ('<section class="blk"><h2>%s</h2>%s</section>'
            % (L(('Toʻrtta harakat', 'Четыре приёма')), ''.join(out)))


def plan_block():
    rows = ''.join('<tr><td class="t">%s</td><td class="n">%s</td><td>%s</td></tr>'
                   % (L(a), L(b), L(c)) for a, b, c in D.REJA)
    return ('<section class="blk"><h2>%s</h2><table class="reja">%s</table>'
            '<p class="note">%s</p><p class="note">%s</p></section>'
            % (L(('Dars rejasi · 90 daqiqa', 'План урока · 90 минут')),
               rows, L(D.QISQA), L(D.BIRGA)))


def band(items, label, cls, start, solutions):
    out = ['<section class="blk band %s"><div class="bh"><h2>%s</h2>'
           '<span class="chip">%d</span></div><ol class="qs" start="%d">'
           % (cls, L(label), len(items), start)]
    for p in items:
        src = ('<span class="src">%s</span>' % H.escape(p['manba'])) if p['manba'] else ''
        tag = '<span class="mv">%s%s</span>' % (
            L(('harakat ', 'приём ')), p['harakat'])
        body = '<div class="q">%s %s %s</div>' % (L(p['savol']), tag, src)
        if solutions:
            body += ('<div class="ans"><span class="lab">%s</span>%s</div>'
                     '<div class="sol"><span class="lab">%s</span>%s</div>'
                     % (L(('Javob', 'Ответ')), L(p['javob']),
                        L(('Yechim', 'Решение')), L(p['yechim'])))
        out.append('<li>%s</li>' % body)
    out.append('</ol></section>')
    return ''.join(out)


def page(kind, body, space=0, lang='uz'):
    return ('<!doctype html><html lang="%s" data-l="%s"><head><meta charset="utf-8">'
            '<meta name="viewport" content="width=device-width,initial-scale=1">'
            '<title>%s</title>'
            '<link rel="preconnect" href="https://fonts.googleapis.com">'
            '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?'
            'family=Archivo:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&'
            'family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap">'
            '<style>%s</style><style>%s</style>'
            # same specificity as the rule it overrides, or it loses
            '<style>ol.qs>li{padding-bottom:%dpx}</style></head><body>'
            '<div class="wrap">%s%s</div>%s</body></html>'
            % (lang, lang, H.escape(C['title'][0]), KATEX_CSS, CSS, space,
               mast(kind), body, JS))


def teacher(lang='uz'):
    return page('Oʻqituvchi uchun' if lang == 'uz' else 'Для учителя',
                weights_block() + moves_block() + plan_block()
                + band(D.QIYIN, ('Qiyin', 'Трудные'), 'b-hard', 1, True)
                + band(D.ANCHA_QIYIN, ('Ancha qiyin', 'Потруднее'), 'b-vhard',
                       len(D.QIYIN) + 1, True), lang=lang)


def student(lang='uz'):
    return page('Masalalar' if lang == 'uz' else 'Задачи',
                '<p class="lead">%s</p>' % L((
                  'Hamma <b>Qiyin</b> qatordan boshlaydi. Toʻrttasini yechganingizdan '
                  'keyin <b>Ancha qiyin</b> qatoriga oʻting. Har bir masala tagida '
                  'qaysi harakat kerakligi yozilgan.',
                  'Все начинают с ряда <b>Трудные</b>. Решив четыре, переходите к ряду '
                  '<b>Потруднее</b>. Под каждой задачей указано, какой приём нужен.'))
                + band(D.QIYIN, ('Qiyin', 'Трудные'), 'b-hard', 1, False)
                + band(D.ANCHA_QIYIN, ('Ancha qiyin', 'Потруднее'), 'b-vhard',
                       len(D.QIYIN) + 1, False),
                space=96, lang=lang)


CSS = r"""
:root{
  --ground:#eceff2; --surface:#ffffff; --surface-2:#f5f7f9;
  --ink:#0f1a21; --muted:#5a6b76; --rule:#d5dde2; --rule-soft:#e4eaee;
  --accent:#0f5c72; --accent-soft:#e0edf1;
  --alg:#0f5c72; --nt:#8a5a00; --geo:#2a6a3f; --comb:#8a3a52;
  --alg-bg:#e0edf1; --nt-bg:#f6ecd8; --geo-bg:#e2eee6; --comb-bg:#f6e6ea;
  --hard:#a34430; --hard-bg:#f8e9e4; --vhard:#6b3e8f; --vhard-bg:#f0e9f6;
}
:root[data-l="uz"] [data-l="ru"], :root[data-l="ru"] [data-l="uz"]{display:none}
@page{size:A4;margin:14mm 13mm 15mm}
*{box-sizing:border-box}
body{margin:0;background:#fff;color:var(--ink);
  font-family:"Source Serif 4",Georgia,serif;font-size:13.5px;line-height:1.55}
.wrap{max-width:820px;margin:0 auto}
.k{font-size:1.02em}

.mast{border-bottom:2px solid var(--ink);padding-bottom:10px}
.topline{display:flex;justify-content:space-between;align-items:baseline;gap:14px}
.eyebrow,.kind{font-family:"IBM Plex Mono",monospace;font-size:9.5px;
  letter-spacing:.14em;text-transform:uppercase;margin:0}
.eyebrow{color:var(--accent)} .kind{color:var(--muted)}
h1{font-family:Archivo,sans-serif;font-size:27px;font-weight:700;letter-spacing:-.015em;
  margin:7px 0 0;line-height:1.1}
.sub{margin:6px 0 0;color:var(--muted);font-size:14px}
.spec{list-style:none;display:flex;flex-wrap:wrap;gap:15px;padding:0;margin:8px 0 0;
  font-family:"IBM Plex Mono",monospace;font-size:10.5px;color:var(--muted)}
.spec b{color:var(--ink);font-weight:500}

.blk{margin-top:22px;break-inside:auto}
.blk>h2{font-family:"IBM Plex Mono",monospace;font-size:10.5px;letter-spacing:.14em;
  text-transform:uppercase;color:var(--muted);font-weight:500;margin:0 0 9px;
  padding-bottom:5px;border-bottom:1px solid var(--rule);break-after:avoid}
.lead{margin:13px 0 0;color:var(--muted)}

.wbar{list-style:none;padding:0;margin:0}
.wbar li{padding:6px 0 0;border-bottom:1px solid var(--rule-soft)}
.wbar .nm{font-size:14px}
.wbar .pc{float:right;font-family:"IBM Plex Mono",monospace;font-size:11px;color:var(--muted)}
.wbar .track{display:block;height:4px;background:var(--rule);margin:5px 0 7px}
.wbar .fill{display:block;height:100%;background:var(--accent)}
.why{margin:11px 0 0;color:var(--muted)}

.move{background:var(--surface);border:1px solid var(--rule);border-top:3px solid var(--hue);
  padding:13px 15px;margin-bottom:11px;break-inside:avoid}
.mh{display:flex;align-items:baseline;gap:10px}
.mh .num{font-family:"IBM Plex Mono",monospace;font-size:19px;color:var(--hue)}
.mh h3{font-family:Archivo,sans-serif;font-size:16px;margin:0}
.qoida{margin:8px 0 0}
.misol{margin:9px 0 0;padding:9px 11px;background:var(--hue-bg)}
.hiyla{margin:8px 0 0;font-size:12.5px;color:var(--muted)}
.lab,.lab2{display:block;font-family:"IBM Plex Mono",monospace;font-size:9px;
  letter-spacing:.13em;text-transform:uppercase;color:var(--hue);margin-bottom:3px}
.lab2{display:inline;margin-right:6px;color:var(--muted)}

table.reja{border-collapse:collapse;width:100%;font-size:13px}
.reja td{padding:7px 9px 7px 0;border-bottom:1px solid var(--rule-soft);vertical-align:top}
.reja .t{font-family:"IBM Plex Mono",monospace;font-size:11px;color:var(--accent);
  white-space:nowrap;width:62px}
.reja .n{font-weight:600;width:152px}
.note{margin:11px 0 0;padding:9px 12px;background:var(--surface-2);
  border-left:2px solid var(--accent);font-size:12.5px;color:var(--muted)}

.band{--hue:var(--hard);--hue-bg:var(--hard-bg)}
.band.b-vhard{--hue:var(--vhard);--hue-bg:var(--vhard-bg)}
.bh{display:flex;align-items:baseline;gap:9px;margin:0 0 9px;padding-bottom:5px;
  border-bottom:1px solid var(--hue);break-after:avoid}
.bh h2{font-family:Archivo,sans-serif;font-size:16px;color:var(--hue);margin:0;
  border:0;padding:0;letter-spacing:0;text-transform:none}
.bh .chip{font-family:"IBM Plex Mono",monospace;font-size:9.5px;padding:1px 6px;
  border-radius:3px;color:var(--hue);background:var(--hue-bg)}
ol.qs{padding-left:22px;margin:0}
ol.qs>li{padding:8px 0;border-bottom:1px solid var(--rule-soft);break-inside:avoid}
ol.qs>li::marker{font-family:"IBM Plex Mono",monospace;font-size:11px;color:var(--hue)}
.mv,.src{font-family:"IBM Plex Mono",monospace;font-size:9.5px;white-space:nowrap;
  border-radius:2px;padding:1px 5px;margin-left:4px}
.mv{color:var(--hue);background:var(--hue-bg)}
.src{color:var(--muted);background:var(--surface-2)}
.ans{margin:7px 0 0;padding:6px 10px;background:var(--hue-bg)}
.ans .lab{color:var(--hue)}
.sol{margin:6px 0 0;padding-left:11px;border-left:2px solid var(--rule);
  font-size:12.5px;color:var(--muted)}
.sol .lab{color:var(--muted)}
"""

JS = ('<script>%s</script>'
      '<script>document.querySelectorAll(".k").forEach(function(e){'
      'try{katex.render(e.textContent,e,{throwOnError:false});}catch(x){}});</script>'
      % KATEX_JS)

DOCS = (('-dars', teacher), ('-masalalar', student))

parts = []
for tag, make in DOCS:
    for lang in ('uz', 'ru'):
        f = HERE / ('_%s-%s.html' % (tag.strip('-'), lang))
        f.write_text(make(lang), encoding='utf-8')
        parts.append({'html': str(f), 'pdf': str(HERE / ('_%s-%s.pdf' % (tag.strip('-'), lang)))})

jobs = HERE / '_jobs.json'; jobs.write_text(json.dumps(parts))
subprocess.run(['node', str(HERE.parent / 'reja/topdf.js'), str(jobs)], check=True)
jobs.unlink()

# the page that anyone can open, with the language switch kept
(HERE / (STEM + '.html')).write_text(teacher('uz'), encoding='utf-8')

import pymupdf
for tag, _ in DOCS:
    out = pymupdf.open()
    for lang in ('uz', 'ru'):
        out.insert_pdf(pymupdf.open(str(HERE / ('_%s-%s.pdf' % (tag.strip('-'), lang)))))
    name = HERE / (STEM + tag + '-UZ-RU.pdf')
    out.save(str(name), deflate=True, garbage=3)
    print('%-44s %d bet  %d KB' % (name.name, out.page_count, name.stat().st_size // 1024))

for f in HERE.glob('_*.html'): f.unlink()
for f in HERE.glob('_*.pdf'): f.unlink()
