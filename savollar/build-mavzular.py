# -*- coding: utf-8 -*-
"""Mavzular xaritasini yasaydi (HTML + PDF).

    python3 build-mavzular.py mavzular-data.py Mavzular-xaritasi-9-10-11

  <stem>.html         bitta sahifa, oʻzbekcha/ruscha almashtirgichi bilan
  <stem>-UZ-RU.pdf    avval toʻliq oʻzbekcha, keyin toʻliq ruscha
"""
import html as H
import importlib.util, json, pathlib, re, subprocess, sys
from collections import Counter, defaultdict

HERE = pathlib.Path(__file__).resolve().parent
DATA = sys.argv[1] if len(sys.argv) > 1 else 'mavzular-data.py'
STEM = sys.argv[2] if len(sys.argv) > 2 else 'Mavzular-xaritasi-9-10-11'

spec = importlib.util.spec_from_file_location('mv', HERE / DATA)
D = importlib.util.module_from_spec(spec); spec.loader.exec_module(D)
C = D.CHROME

KATEX_CSS = (HERE.parent / 'reja/katex-inline.css').read_text(encoding='utf-8')
KATEX_JS = (HERE.parent / 'site/assets/vendor/katex/katex.min.js').read_text(encoding='utf-8')

MATH = re.compile(r'\$(.+?)\$', re.S)


def M(t):
    t = MATH.sub(lambda m: '<span class="k">%s</span>' % H.escape(m.group(1)), t)
    return re.sub(r'\*(.+?)\*', r'<i>\1</i>', t, flags=re.S)


def L(pair, tag='span'):
    uz, ru = pair
    return ('<%s data-l="uz">%s</%s><%s data-l="ru">%s</%s>'
            % (tag, M(uz), tag, tag, M(ru), tag))


# ------------------------------------------------------------------ hisoblar --
SUB = {}          # kichik mavzu kodi -> (mavzu, bolim)
for t in D.MAVZULAR:
    for b in t['bolim']:
        SUB[b['kod']] = (t, b)

TOTAL = len(D.SAVOLLAR)
BY_TOPIC = Counter(SUB[q['sub']][0]['kod'] for q in D.SAVOLLAR)
BY_SUB = Counter(q['sub'] for q in D.SAVOLLAR)
BY_TOPIC_GRADE = Counter((SUB[q['sub']][0]['kod'], q['sinf']) for q in D.SAVOLLAR)
GRADE_TOTAL = Counter(q['sinf'] for q in D.SAVOLLAR)
SUB_Q = defaultdict(list)
for q in sorted(D.SAVOLLAR, key=lambda q: (q['sinf'], q['paper'], q['n'])):
    SUB_Q[q['sub']].append(q)
VAR_Q = defaultdict(list)
for q in D.SAVOLLAR:
    VAR_Q[(q['sinf'], q['paper'])].append(q)
for k in VAR_Q:
    VAR_Q[k].sort(key=lambda q: q['n'])

TOPIC_ORDER = sorted(D.MAVZULAR, key=lambda t: -BY_TOPIC[t['kod']])


def ref(q):
    """9·2024 №17 — variantni qisqa yozish."""
    p = q['paper'].replace('2025/26-', '')
    return '%d·%s' % (q['sinf'], '2024' if p == '2024' else '26' + p)


# ------------------------------------------------------------------ masthead --
def mast():
    stats = [
      (str(TOTAL), ('savol oʻqib chiqilgan', 'задач разобрано')),
      ('8', ('ta variant', 'вариантов')),
      (str(len(D.MAVZULAR)), ('mavzu', 'тем')),
      (str(len(SUB)), ('kichik mavzu', 'подтем')),
    ]
    cells = ''.join('<li><b>%s</b>%s</li>' % (v, L(t)) for v, t in stats)
    return ('<header class="mast"><div class="topline">'
            '<p class="eyebrow">%s</p>'
            '<div class="lang" role="group">'
            '<button type="button" data-set="uz">O‘zbekcha</button>'
            '<button type="button" data-set="ru">Русский</button></div></div>'
            '<h1>%s</h1><p class="sub">%s</p><ul class="stats">%s</ul></header>'
            % (L(C['eyebrow']), L(C['h1']), L(C['sub']), cells))


# ------------------------------------------------------------ umumiy manzara --
def overview():
    top = BY_TOPIC[TOPIC_ORDER[0]['kod']]
    rows = ''
    for t in TOPIC_ORDER:
        n = BY_TOPIC[t['kod']]
        cells = ''.join('<td class="num">%d</td>' % BY_TOPIC_GRADE[(t['kod'], s)]
                        for s in (9, 10, 11))
        rows += ('<tr style="--hue:var(--%s)"><td class="nm"><a href="#m-%s">%s</a></td>'
                 '%s<td class="num tot">%d</td><td class="pc">%.1f%%</td>'
                 '<td class="bar"><span style="width:%.1f%%"></span></td></tr>'
                 % (t['hue'], t['kod'], L(t['nom']), cells, n,
                    n / TOTAL * 100, n / top * 100))
    head = ('<tr><th>%s</th><th class="num">9</th><th class="num">10</th>'
            '<th class="num">11</th><th class="num">%s</th><th colspan="2">%s</th></tr>'
            % (L(('Mavzu', 'Тема')), L(('jami', 'всего')), L(('ulush', 'доля'))))
    foot = ('<tr class="ft"><td>%s</td><td class="num">%d</td><td class="num">%d</td>'
            '<td class="num">%d</td><td class="num tot">%d</td><td colspan="2"></td></tr>'
            % (L(('Jami savol', 'Всего задач')), GRADE_TOTAL[9], GRADE_TOTAL[10],
               GRADE_TOTAL[11], TOTAL))
    return ('<section class="part" id="manzara"><div class="ph"><h2>%s</h2></div>'
            '<table class="ov">%s%s%s</table><p class="note">%s</p></section>'
            % (L(('Umumiy manzara', 'Общая картина')), head, rows, foot, L(D.IZOH_B)))


# ------------------------------------------------------------ mavzular ------
def topic_section(t):
    out = ['<section class="mavzu" id="m-%s" style="--hue:var(--%s);--hue-bg:var(--%s-bg)">'
           '<div class="mh"><h3>%s</h3><span class="chip">%d %s</span></div>'
           '<p class="izoh">%s</p>'
           % (t['kod'], t['hue'], t['hue'], L(t['nom']), BY_TOPIC[t['kod']],
              L(('savol', 'задач')), L(t['izoh']))]
    for b in sorted(t['bolim'], key=lambda b: -BY_SUB[b['kod']]):
        chips = ''.join('<span class="qr">%s <b>№%d</b></span>' % (ref(q), q['n'])
                        for q in SUB_Q[b['kod']])
        out.append('<article class="kb"><div class="kh"><h4>%s</h4>'
                   '<span class="cnt">%d</span></div>'
                   '<p class="masl">%s</p><div class="refs">%s</div></article>'
                   % (L(b['nom']), BY_SUB[b['kod']], L(b['maslahat']), chips))
    out.append('</section>')
    return ''.join(out)


def topics():
    return ('<section class="part" id="mavzular"><div class="ph"><h2>%s</h2>'
            '<span class="chip">%d</span></div>%s</section>'
            % (L(('Mavzular ichida nima soʻraladi', 'Что спрашивают внутри тем')),
               len(SUB), ''.join(topic_section(t) for t in TOPIC_ORDER)))


# --------------------------------------------------------- variantlar xaritasi --
def variant_table(v):
    rows = ''
    for q in VAR_Q[(v['sinf'], v['paper'])]:
        t, b = SUB[q['sub']]
        rows += ('<tr style="--hue:var(--%s)"><td class="n">%d</td>'
                 '<td class="tg"><a href="#m-%s">%s</a></td><td>%s</td></tr>'
                 % (t['hue'], q['n'], t['kod'], L(b['nom']), L(q['nima'])))
    cnt = Counter(SUB[q['sub']][0]['kod'] for q in VAR_Q[(v['sinf'], v['paper'])])
    strip = ''.join('<span class="sv" style="--hue:var(--%s)">%s %d</span>'
                    % (t['hue'], L(t['nom']), cnt[t['kod']])
                    for t in TOPIC_ORDER if cnt[t['kod']])
    return ('<section class="variant"><div class="vh"><h3>%s</h3>'
            '<span class="chip">%d %s</span></div><div class="strip">%s</div>'
            '<table class="vt">%s</table></section>'
            % (H.escape(v['kod'].replace('·', '-sinf · ')), len(VAR_Q[(v['sinf'], v['paper'])]),
               L(('savol', 'задач')), strip, rows))


def variants():
    return ('<section class="part" id="variantlar"><div class="ph"><h2>%s</h2>'
            '<span class="chip">%d</span></div><p class="lead">%s</p>%s</section>'
            % (L(('Variantlar xaritasi — savolma-savol',
                  'Карта вариантов — по задачам')), TOTAL,
               L(('Har bir savol qaysi kichik mavzudan ekani va nima '
                  'soʻralgani. Mavzu nomiga bosilsa, oʻsha mavzuga oʻtadi.',
                  'Для каждой задачи — подтема и что именно спрашивают. '
                  'Нажатие на название темы ведёт к ней.')),
               ''.join(variant_table(v) for v in D.VARIANTLAR)))


# ----------------------------------------------------------------- xulosalar --
def priorities():
    tops = sorted(SUB, key=lambda k: -BY_SUB[k])[:12]
    rows = ''
    for i, k in enumerate(tops, 1):
        t, b = SUB[k]
        gr = Counter(q['sinf'] for q in SUB_Q[k])
        rows += ('<tr style="--hue:var(--%s)"><td class="n">%d</td>'
                 '<td class="nm">%s</td><td class="tp">%s</td>'
                 '<td class="num">%d</td><td class="gr">%s</td></tr>'
                 % (t['hue'], i, L(b['nom']), L(t['nom']), BY_SUB[k],
                    ' · '.join('%d:%d' % (s, gr[s]) for s in (9, 10, 11) if gr[s])))
    head = ('<tr><th></th><th>%s</th><th>%s</th><th class="num">%s</th>'
            '<th>%s</th></tr>' % (L(('Kichik mavzu', 'Подтема')),
                                  L(('Mavzu', 'Тема')), L(('Savol', 'Задач')),
                                  L(('Sinf boʻyicha', 'По классам'))))
    return ('<section class="part" id="xulosa"><div class="ph"><h2>%s</h2></div>'
            '<p class="lead">%s</p><table class="pr">%s%s</table>'
            '<p class="note">%s</p></section>'
            % (L(('Eng koʻp takrorlangan oʻn ikki kichik mavzu',
                  'Двенадцать самых частых подтем')),
               L(('Dars rejasini shu roʻyxatdan boshlash mumkin: bu oʻn ikki '
                  'kichik mavzu uchala sinfda ham qayta-qayta chiqadi.',
                  'С этого списка можно начинать план занятий: эти двенадцать '
                  'подтем повторяются во всех трёх классах.')),
               head, rows,
               L(('Sanoq bitta qoida bilan olingan: savol qaysi koʻnikma bilan '
                  'yechilsa, oʻsha mavzuga kiritilgan. Shuning uchun, masalan, '
                  '“nechta toʻrt xonali sonda …” savoli kombinatorikada, '
                  'boʻluvchilar sonini sanash esa sonlar nazariyasida turadi.',
                  'Подсчёт сделан по одному правилу: задача отнесена к теме '
                  'того приёма, которым решается. Поэтому, например, вопрос '
                  '«сколько четырёхзначных чисел …» — в комбинаторике, а '
                  'подсчёт делителей — в теории чисел.'))))


# ---------------------------------------------------------------------- page --
def page(lang='uz'):
    fonts = ('<link rel="preconnect" href="https://fonts.googleapis.com">'
             '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?'
             'family=Archivo:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&'
             'family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap">')
    return ('<!doctype html><html lang="%s" data-l="%s"><head><meta charset="utf-8">'
            '<meta name="viewport" content="width=device-width,initial-scale=1">'
            '<title>%s</title>%s<style>%s</style><style>%s</style></head><body>'
            '<div class="wrap">%s%s%s%s%s</div>%s</body></html>'
            % (lang, lang, H.escape(C['title'][0] if lang == 'uz' else C['title'][1]),
               fonts, KATEX_CSS, CSS,
               mast(), overview(), priorities(), topics(), variants(), JS))


CSS = r"""
:root{
  --ground:#eceff2; --surface:#ffffff; --surface-2:#f5f7f9;
  --ink:#0f1a21; --muted:#5a6b76; --rule:#d5dde2; --rule-soft:#e4eaee;
  --accent:#0f5c72;
  --alg:#0f5c72; --nt:#8a5a00; --geo:#2a6a3f; --comb:#8a3a52;
  --trig:#6b3e8f; --rev:#5a6b76;
  --alg-bg:#e0edf1; --nt-bg:#f6ecd8; --geo-bg:#e2eee6; --comb-bg:#f6e6ea;
  --trig-bg:#f0e9f6; --rev-bg:#eef1f3;
}
:root[data-l="uz"] [data-l="ru"], :root[data-l="ru"] [data-l="uz"]{display:none}
@page{size:A4;margin:13mm 12mm 14mm}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:var(--ground);color:var(--ink);
  font-family:"Source Serif 4",Georgia,serif;font-size:13px;line-height:1.5}
.wrap{max-width:900px;margin:0 auto;background:#fff;padding:26px 30px 40px}
.k{font-size:1.02em}
a{color:inherit}

.mast{border-bottom:2px solid var(--ink);padding-bottom:11px}
.topline{display:flex;justify-content:space-between;align-items:center;gap:14px}
.eyebrow{font-family:"IBM Plex Mono",monospace;font-size:9.5px;letter-spacing:.13em;
  text-transform:uppercase;margin:0;color:var(--accent)}
.lang{display:flex;border:1px solid var(--rule);border-radius:4px;overflow:hidden}
.lang button{font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:.08em;
  padding:4px 9px;border:0;background:#fff;color:var(--muted);cursor:pointer}
.lang button+button{border-left:1px solid var(--rule)}
:root[data-l="uz"] .lang button[data-set="uz"],
:root[data-l="ru"] .lang button[data-set="ru"]{background:var(--accent);color:#fff}
h1{font-family:Archivo,sans-serif;font-size:29px;font-weight:700;letter-spacing:-.015em;
  margin:9px 0 0;line-height:1.08}
.sub{margin:7px 0 0;color:var(--muted);font-size:13.5px;max-width:66ch}
.stats{list-style:none;display:flex;flex-wrap:wrap;gap:8px;padding:0;margin:12px 0 0}
.stats li{font-family:"IBM Plex Mono",monospace;font-size:10px;color:var(--muted);
  background:var(--surface-2);border:1px solid var(--rule-soft);padding:4px 9px;
  border-radius:3px}
.stats b{color:var(--accent);font-size:13px;margin-right:5px}

.part{margin-top:28px}
.ph{display:flex;align-items:baseline;gap:9px;border-bottom:2px solid var(--ink);
  padding-bottom:6px;margin-bottom:10px;break-after:avoid}
.ph h2{font-family:Archivo,sans-serif;font-size:20px;margin:0}
.ph .chip{font-family:"IBM Plex Mono",monospace;font-size:10px;color:var(--muted)}
.lead{margin:0 0 12px;color:var(--muted);font-size:12.5px}
.note{margin:12px 0 0;padding:9px 12px;background:var(--surface-2);
  border-left:2px solid var(--accent);font-size:12px;color:var(--muted)}

/* umumiy jadval */
table.ov,table.pr,table.vt{border-collapse:collapse;width:100%}
.ov th,.pr th{font-family:"IBM Plex Mono",monospace;font-size:9px;letter-spacing:.11em;
  text-transform:uppercase;color:var(--muted);font-weight:500;text-align:left;
  padding:0 7px 5px 0;border-bottom:1px solid var(--rule)}
.ov td,.pr td{padding:6px 7px 6px 0;border-bottom:1px solid var(--rule-soft);
  vertical-align:middle}
.ov .nm{font-weight:600;color:var(--hue);width:32%}
.ov .nm a,.pr .nm{text-decoration:none}
.num{text-align:right;font-family:"IBM Plex Mono",monospace;font-size:11.5px;
  width:42px;color:var(--muted)}
.ov .tot{color:var(--ink);font-weight:600}
.ov .pc{font-family:"IBM Plex Mono",monospace;font-size:11px;width:50px;
  text-align:right;color:var(--hue)}
.ov .bar{width:26%;padding-left:10px}
.ov .bar span{display:block;height:7px;background:var(--hue)}
.ov .ft td{border-bottom:0;padding-top:8px;font-family:"IBM Plex Mono",monospace;
  font-size:11px;color:var(--muted)}

/* eng koʻp takrorlangan */
.pr .n{font-family:"IBM Plex Mono",monospace;font-size:11px;color:var(--hue);width:24px}
.pr .nm{font-weight:600;width:38%}
.pr .tp{color:var(--hue);font-size:12px;width:24%}
.pr .gr{font-family:"IBM Plex Mono",monospace;font-size:10.5px;color:var(--muted)}

/* mavzular */
.mavzu{margin-top:18px;break-inside:auto}
.mh{display:flex;align-items:baseline;gap:10px;border-bottom:1px solid var(--hue);
  padding-bottom:5px;break-after:avoid}
.mh h3{font-family:Archivo,sans-serif;font-size:17px;margin:0;color:var(--hue)}
.mh .chip{margin-left:auto;font-family:"IBM Plex Mono",monospace;font-size:9.5px;
  color:var(--hue);background:var(--hue-bg);padding:1px 6px;border-radius:3px}
.izoh{margin:7px 0 10px;color:var(--muted);font-size:12.5px}
.kb{border:1px solid var(--rule);border-left:3px solid var(--hue);padding:9px 12px;
  margin-bottom:8px;break-inside:avoid}
.kh{display:flex;align-items:baseline;gap:8px}
.kh h4{font-family:Archivo,sans-serif;font-size:13.5px;margin:0}
.kh .cnt{margin-left:auto;font-family:"IBM Plex Mono",monospace;font-size:10px;
  color:var(--hue)}
.masl{margin:5px 0 0;font-size:12.5px}
.refs{margin:7px 0 0;display:flex;flex-wrap:wrap;gap:4px}
.qr{font-family:"IBM Plex Mono",monospace;font-size:8.5px;color:var(--muted);
  background:var(--surface-2);border:1px solid var(--rule-soft);padding:1px 5px;
  border-radius:2px;white-space:nowrap}
.qr b{color:var(--hue);font-weight:500}

/* variantlar */
.variant{margin-top:18px;break-inside:auto}
.vh{display:flex;align-items:baseline;gap:9px;border-bottom:1px solid var(--ink);
  padding-bottom:4px;break-after:avoid}
.vh h3{font-family:Archivo,sans-serif;font-size:15px;margin:0}
.vh .chip{margin-left:auto;font-family:"IBM Plex Mono",monospace;font-size:9.5px;
  color:var(--muted)}
.strip{display:flex;flex-wrap:wrap;gap:4px;margin:7px 0 6px;break-after:avoid}
.sv{font-family:"IBM Plex Mono",monospace;font-size:8.5px;color:#fff;
  background:var(--hue);padding:1px 6px;border-radius:2px}
.vt td{padding:3.5px 7px 3.5px 0;border-bottom:1px solid var(--rule-soft);
  vertical-align:top;break-inside:avoid}
.vt .n{font-family:"IBM Plex Mono",monospace;font-size:10.5px;color:var(--hue);
  width:26px;text-align:right}
.vt .tg{width:30%;color:var(--hue);font-size:11.5px}
.vt .tg a{text-decoration:none}

@media (max-width:640px){
  .wrap{padding:16px 13px 28px}
  h1{font-size:23px}
  .ov .bar{display:none}
  .vt .tg{width:36%}
}
@media print{
  body{background:#fff}
  .wrap{max-width:none;padding:0}
  .lang{display:none}
  .part{break-before:page}
  .part#manzara{break-before:auto}
  a{text-decoration:none}
}
"""

JS = ('<script>%s</script>'
      '<script>'
      'document.querySelectorAll(".k").forEach(function(e){try{'
      'katex.render(e.textContent,e,{throwOnError:false});}catch(x){}});'
      'document.querySelectorAll(".lang button").forEach(function(b){'
      'b.addEventListener("click",function(){'
      'document.documentElement.dataset.l=b.dataset.set;'
      'try{localStorage.setItem("mv-lang",b.dataset.set);}catch(x){}});});'
      'try{var s=localStorage.getItem("mv-lang");'
      'if(s)document.documentElement.dataset.l=s;}catch(x){}'
      '</script>' % KATEX_JS)


out_html = HERE / (STEM + '.html')
out_html.write_text(page('uz'), encoding='utf-8')
print('%-46s %d KB' % (out_html.name, out_html.stat().st_size // 1024))

parts = []
for lang in ('uz', 'ru'):
    f = HERE / ('_mv-%s.html' % lang)
    f.write_text(page(lang), encoding='utf-8')
    parts.append({'html': str(f), 'pdf': str(HERE / ('_mv-%s.pdf' % lang))})

jobs = HERE / '_jobs.json'; jobs.write_text(json.dumps(parts))
subprocess.run(['node', str(HERE.parent / 'reja/topdf.js'), str(jobs)], check=True)
jobs.unlink()

import pymupdf
doc = pymupdf.open()
for lang in ('uz', 'ru'):
    doc.insert_pdf(pymupdf.open(str(HERE / ('_mv-%s.pdf' % lang))))
name = HERE / (STEM + '-UZ-RU.pdf')
doc.save(str(name), deflate=True, garbage=3)
print('%-46s %d bet  %d KB' % (name.name, doc.page_count, name.stat().st_size // 1024))

for f in HERE.glob('_mv-*.html'): f.unlink()
for f in HERE.glob('_mv-*.pdf'): f.unlink()
