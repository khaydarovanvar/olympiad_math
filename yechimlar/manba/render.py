# -*- coding: utf-8 -*-
"""Build a bilingual solutions PDF from a gNN.py data module."""
import html, importlib.util, pathlib, re, sys

HERE = pathlib.Path(__file__).resolve().parent

def load(path):
    spec = importlib.util.spec_from_file_location('sol', path)
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m); return m

MATH = re.compile(r'\$\$(.+?)\$\$|\$(.+?)\$', re.S)

def body(text):
    """Markdown-lite -> HTML, protecting math spans from escaping."""
    slots = []
    def stash(m):
        disp = m.group(1) is not None
        slots.append((disp, m.group(1) if disp else m.group(2)))
        return '\x00%d\x00' % (len(slots) - 1)
    text = MATH.sub(stash, text)
    text = html.escape(text)
    text = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', text, flags=re.S)
    text = re.sub(r'(?<!\*)\*([^*\n]+?)\*(?!\*)', r'<i>\1</i>', text)
    paras = [p.strip() for p in text.split('\n\n') if p.strip()]
    out = []
    for p in paras:
        if p.startswith('- '):
            items = ''.join('<li>%s</li>' % l[2:].strip() for l in p.split('\n') if l.strip().startswith('- '))
            out.append('<ul>%s</ul>' % items)
        else:
            out.append('<p>%s</p>' % p.replace('\n', ' '))
    h = '\n'.join(out)
    def put(m):
        disp, tex = slots[int(m.group(1))]
        tag = 'display' if disp else 'inline'
        return '<span class="tex %s">%s</span>' % (tag, html.escape(tex))
    return re.sub(r'\x00(\d+)\x00', put, h)

CSS = r'''
@page { size: A4; margin: 15mm 14mm 13mm; }
*{box-sizing:border-box}
body{margin:0;font-family:'DejaVu Sans',sans-serif;font-size:9.7pt;line-height:1.5;color:#14181c}
h1{font-size:15pt;margin:0 0 1mm;text-align:center;letter-spacing:.02em}
h2{font-size:10.5pt;font-weight:normal;color:#4a6b70;margin:0 0 2mm;text-align:center;letter-spacing:.04em}
.meta{text-align:center;font-size:8.4pt;color:#7b898b;margin:0 0 4mm}
hr.rule{border:0;border-top:1.6pt solid #0E5C63;margin:0 0 5mm}
.key{margin:0 0 6mm;padding:3mm 4mm;border:.7pt solid #cfdadb;border-radius:2mm;background:#f6f9f9}
.key h3{margin:0 0 2mm;font-size:9.6pt;color:#0E5C63;letter-spacing:.05em;text-transform:uppercase}
.key table{width:100%;border-collapse:collapse;font-size:8.8pt}
.key td{padding:.7mm 1.5mm;border-bottom:.4pt solid #e3eaeb;vertical-align:top}
.key td.n{white-space:nowrap}
.key td.n{color:#0E5C63;font-weight:bold;width:7mm;text-align:right}
.q{margin:0 0 5mm}
.qh{display:flex;align-items:baseline;gap:2.5mm;margin-bottom:1.5mm;break-after:avoid;page-break-after:avoid;
    border-bottom:.7pt solid #dde5e6;padding-bottom:1mm}
.qh .num{font-weight:bold;color:#0E5C63;font-size:11pt}
.qh .ball{font-size:8pt;color:#8b9899}
.qh .ans{margin-left:auto;font-size:9.4pt;font-weight:bold;color:#A34430;text-align:right;max-width:62%}
.lang{margin:0 0 2mm;padding-left:3.2mm;border-left:1.8pt solid #B0801F;break-inside:avoid-page}
.lang.ru{border-left-color:#2B4C7E}
.tag{font-size:7.4pt;letter-spacing:.12em;color:#8b9899;text-transform:uppercase;
     display:block;margin-bottom:.6mm}
.lang p{margin:0 0 1.4mm}
.lang ul{margin:.8mm 0 1.4mm;padding-left:5mm}
.lang li{margin:0 0 .6mm}
.tex.display{display:block;text-align:center;margin:1.6mm 0}
.foot{margin-top:5mm;padding-top:2mm;border-top:.5pt solid #d4dcdd;
      font-size:8.2pt;color:#7b898b;text-align:center}
.katex{font-size:1.02em}
'''

def build(mod, out_html):
    rows = []
    for p in mod.P:
        rows.append(
          '<div class="q"><div class="qh"><span class="num">%d.</span>'
          '%s'
          '<span class="ans">%s</span></div>'
          '<div class="lang uz"><span class="tag">Oʻzbekcha</span>%s</div>'
          '<div class="lang ru"><span class="tag">По-русски</span>%s</div></div>'
          % (p['n'],
             ('<span class="ball">[%s ball]</span>' % p['pts']) if p.get('pts') else '',
             body(p['ans']), body(p['uz']), body(p['ru'])))
    key = ''.join('<td class="n">%d</td><td>%s</td>' % (p['n'], body(p['ans']))
                  for p in mod.P)
    cells = ['<td class="n">%d</td><td>%s</td>' % (p['n'], body(p['ans'])) for p in mod.P]
    per = getattr(mod, 'KEY_COLS', 5)
    krows = ''.join('<tr>%s</tr>' % ''.join(cells[i:i+per]) for i in range(0, len(cells), per))
    doc = ('<!doctype html><html lang="uz"><head><meta charset="utf-8">'
      '<title>%s</title>'
      '<link rel="stylesheet" href="katex/katex.min.css">'
      '<style>%s</style></head><body>'
      '<h1>%s</h1><h2>%s</h2>'
      '<div class="meta">%s</div><hr class="rule">'
      '<div class="key"><h3>Javoblar · Ответы</h3><table>%s</table></div>'
      '%s'
      '<div class="foot">Yechimlar: Anvarbek Xaydarov · Решения: Анварбек Хайдаров</div>'
      '<script src="katex/katex.min.js"></script><script>'
      'document.querySelectorAll(".tex").forEach(function(e){'
      ' try{katex.render(e.textContent,e,{throwOnError:true,'
      '  displayMode:e.classList.contains("display")});}'
      ' catch(err){e.style.color="red";e.textContent="[TeX] "+e.textContent;'
      '  (window.__texerr=window.__texerr||[]).push(e.textContent);}});'
      'window.__ready=1;</script></body></html>'
      % (mod.TITLE_UZ, CSS, mod.TITLE_UZ, mod.TITLE_RU,
         getattr(mod, 'META', '2025/2026 · Asosiy olimpiadaning tuman (shahar) bosqichi · '
                 'Основной этап олимпиады, районный (городской) тур'),
         krows, ''.join(rows)))
    pathlib.Path(out_html).write_text(doc, encoding='utf-8')
    return out_html

if __name__ == '__main__':
    mod = load(sys.argv[1])
    print(build(mod, sys.argv[2]))
