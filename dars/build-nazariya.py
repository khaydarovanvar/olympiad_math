# -*- coding: utf-8 -*-
"""Sonlar nazariyasi maʼlumotnomasini yasaydi (HTML + PDF).

    python3 build-nazariya.py nazariya-data.py Sonlar-nazariyasi-9-10-11

  <stem>.html            bitta sahifa: nazariya + masalalar + yechimlar,
                         oʻzbekcha/ruscha almashtirgichi bilan
  <stem>-UZ-RU.pdf       avval toʻliq oʻzbekcha, keyin toʻliq ruscha
"""
import html as H
import importlib.util, json, pathlib, re, subprocess, sys

HERE = pathlib.Path(__file__).resolve().parent
DATA = sys.argv[1] if len(sys.argv) > 1 else 'nazariya-data.py'
STEM = sys.argv[2] if len(sys.argv) > 2 else 'Sonlar-nazariyasi-9-10-11'

spec = importlib.util.spec_from_file_location('nz', HERE / DATA)
D = importlib.util.module_from_spec(spec); spec.loader.exec_module(D)
C = D.CHROME

KATEX_CSS = (HERE.parent / 'reja/katex-inline.css').read_text(encoding='utf-8')
KATEX_JS = (HERE.parent / 'site/assets/vendor/katex/katex.min.js').read_text(encoding='utf-8')

DISP = re.compile(r'\$\$(.+?)\$\$', re.S)
MATH = re.compile(r'\$(.+?)\$', re.S)


def M(t):
    """$$...$$ first, so the inline pass cannot split it down the middle."""
    t = DISP.sub(lambda m: '<span class="k kdisp">%s</span>' % H.escape(m.group(1)), t)
    t = MATH.sub(lambda m: '<span class="k">%s</span>' % H.escape(m.group(1)), t)
    return re.sub(r'\*(.+?)\*', r'<i>\1</i>', t, flags=re.S)


def L(pair, tag='span'):
    uz, ru = pair
    return ('<%s data-l="uz">%s</%s><%s data-l="ru">%s</%s>'
            % (tag, M(uz), tag, tag, M(ru), tag))


N_THEORY = sum(len(b['items']) for b in D.BOLIMLAR)
N_PROOF = sum(1 for b in D.BOLIMLAR for i in b['items'] if i['isbot'])
N_PROB = sum(len(b['items']) for b in D.DARAJALAR)
SECTION = {b['kod']: b for b in D.BOLIMLAR}


def numbered():
    """Masalalar 1..N — bir xil raqam savolda ham, yechimda ham."""
    n, out = 0, []
    for band in D.DARAJALAR:
        first = n + 1
        for p in band['items']:
            n += 1
            out.append((n, p, band))
    return out


NUM = numbered()


# ------------------------------------------------------------------ masthead --
def mast():
    stats = [
      (str(N_THEORY), ('taʼrif, teorema va xossa', 'определений, теорем и свойств')),
      (str(N_PROOF), ('isbot bilan', 'с доказательством')),
      (str(N_THEORY), ('ishlangan misol', 'разобранных примеров')),
      (str(N_PROB), ('masala va yechim', 'задач с решениями')),
    ]
    cells = ''.join('<li><b>%s</b>%s</li>' % (v, L(t)) for v, t in stats)
    return ('<header class="mast"><div class="topline">'
            '<p class="eyebrow">%s</p>'
            '<div class="lang" role="group">'
            '<button type="button" data-set="uz">O‘zbekcha</button>'
            '<button type="button" data-set="ru">Русский</button></div></div>'
            '<h1>%s</h1><p class="sub">%s</p><ul class="stats">%s</ul></header>'
            % (L(C['eyebrow']), L(C['h1']), L(C['sub']), cells))


def contents():
    th = ''.join('<li><a href="#b-%s"><span class="kod">%s</span>%s'
                 '<span class="ct">%d</span></a></li>'
                 % (b['kod'], b['kod'], L(b['nom']), len(b['items']))
                 for b in D.BOLIMLAR)
    pr = ''.join('<li><a href="#d-%s"><span class="kod">%d–%d</span>%s'
                 '<span class="ct">%d</span></a></li>'
                 % (b['kod'],
                    min(n for n, _, bb in NUM if bb is b),
                    max(n for n, _, bb in NUM if bb is b),
                    L(b['nom']), len(b['items']))
                 for b in D.DARAJALAR)
    return ('<nav class="toc"><div class="tcol"><h2>%s</h2><ol class="tl">%s</ol></div>'
            '<div class="tcol"><h2>%s</h2><ol class="tl">%s</ol>'
            '<p class="tnote">%s</p></div></nav>'
            % (L(('Nazariya', 'Теория')), th,
               L(('Masalalar', 'Задачи')), pr,
               L(('Har bir masala tagida qaysi nazariya boʻlimi kerakligi '
                  'yozilgan. Yechimlar oxirida, shu raqamlar boʻyicha.',
                  'Под каждой задачей указан нужный раздел теории. Решения — '
                  'в конце, по тем же номерам.'))))


# -------------------------------------------------------------------- theory --
def item(it):
    tur = '<span class="tur t-%s">%s</span>' % (it['tur'], L(D.TUR[it['tur']]))
    out = ['<article class="it"><div class="ih">%s<h4>%s</h4></div>' % (tur, L(it['nom']))]
    out.append('<div class="bayon">%s</div>' % L(it['bayon']))
    if it['isbot']:
        out.append('<div class="isbot"><span class="lab">%s</span>%s</div>'
                   % (L(('Isbot', 'Доказательство')), L(it['isbot'])))
    out.append('<div class="misol"><span class="lab">%s</span>%s</div></article>'
               % (L(('Misol', 'Пример')), L(it['misol'])))
    return ''.join(out)


def theory():
    out = ['<section class="part" id="nazariya"><div class="ph"><h2>%s</h2>'
           '<span class="chip">%d</span></div>'
           % (L(('Nazariya', 'Теория')), N_THEORY)]
    for b in D.BOLIMLAR:
        out.append('<section class="bolim" id="b-%s" '
                   'style="--hue:var(--%s);--hue-bg:var(--%s-bg)">'
                   '<div class="bh"><span class="kod">%s</span><h3>%s</h3></div>'
                   '<p class="izoh">%s</p>%s</section>'
                   % (b['kod'], b['hue'], b['hue'], b['kod'], L(b['nom']),
                      L(b['izoh']), ''.join(item(i) for i in b['items'])))
    out.append('</section>')
    return ''.join(out)


# ------------------------------------------------------------------ problems --
SINF = re.compile(r'(\d+)-sinf')


def manba(t):
    """“9-sinf · 2024 №17” — rus tilida sinf soʻzi ham ruscha boʻlsin."""
    return (t, SINF.sub(r'\1 класс', t))


def tags(p):
    s = SECTION[p['bolim']]
    t = ('<a class="xref" href="#b-%s">%s · %s</a>'
         % (p['bolim'], p['bolim'], L(s['nom'])))
    if p['manba']:
        uz, ru = manba(p['manba'])
        t += ('<span class="src"><span data-l="uz">%s</span>'
              '<span data-l="ru">%s</span></span>'
              % (H.escape(uz), H.escape(ru)))
    return t


def problems():
    out = ['<section class="part" id="masalalar"><div class="ph"><h2>%s</h2>'
           '<span class="chip">%d</span></div>' % (L(('Masalalar', 'Задачи')), N_PROB)]
    for band in D.DARAJALAR:
        rows = ''
        for n, p, bb in NUM:
            if bb is not band:
                continue
            rows += ('<li id="m-%d"><div class="q">%s</div>'
                     '<div class="meta">%s<a class="goto" href="#y-%d">%s</a></div></li>'
                     % (n, L(p['savol']), tags(p), n,
                        L(('yechim ↓', 'решение ↓'))))
        out.append('<section class="daraja" id="d-%s" '
                   'style="--hue:var(--%s);--hue-bg:var(--%s-bg)">'
                   '<div class="bh"><h3>%s</h3><span class="chip">%d</span></div>'
                   '<p class="izoh">%s</p><ol class="qs" start="%d">%s</ol></section>'
                   % (band['kod'], band['hue'], band['hue'], L(band['nom']),
                      len(band['items']), L(band['izoh']),
                      min(n for n, _, bb in NUM if bb is band), rows))
    out.append('</section>')
    return ''.join(out)


def solutions():
    out = ['<section class="part" id="yechimlar"><div class="ph"><h2>%s</h2>'
           '<span class="chip">%d</span></div>'
           % (L(('Batafsil yechimlar', 'Подробные решения')), N_PROB)]
    for n, p, band in NUM:
        out.append('<article class="sol" id="y-%d" '
                   'style="--hue:var(--%s);--hue-bg:var(--%s-bg)">'
                   '<div class="sh"><span class="num">%d</span>'
                   '<span class="lvl">%s</span>%s</div>'
                   '<div class="qq">%s</div>'
                   '<div class="ans"><span class="lab">%s</span>%s</div>'
                   '<div class="body">%s</div>'
                   '<a class="back" href="#m-%d">%s</a></article>'
                   % (n, band['hue'], band['hue'], n, L(band['nom']), tags(p),
                      L(p['savol']), L(('Javob', 'Ответ')), L(p['javob']),
                      L(p['yechim']), n, L(('↑ masalaga', '↑ к задаче'))))
    out.append('</section>')
    return ''.join(out)


# ---------------------------------------------------------------------- page --
def page(lang='uz', web=True):
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
               mast(), contents(), theory(), problems(), solutions(), JS))


CSS = r"""
:root{
  --ground:#eceff2; --surface:#ffffff; --surface-2:#f5f7f9;
  --ink:#0f1a21; --muted:#5a6b76; --rule:#d5dde2; --rule-soft:#e4eaee;
  --accent:#0f5c72; --accent-soft:#e0edf1;
  --alg:#0f5c72; --nt:#8a5a00; --geo:#2a6a3f; --comb:#8a3a52;
  --alg-bg:#e0edf1; --nt-bg:#f6ecd8; --geo-bg:#e2eee6; --comb-bg:#f6e6ea;
  --easy:#2a6a3f; --easy-bg:#e2eee6; --med:#8a5a00; --med-bg:#f6ecd8;
  --hard:#a34430; --hard-bg:#f8e9e4; --vhard:#6b3e8f; --vhard-bg:#f0e9f6;
}
:root[data-l="uz"] [data-l="ru"], :root[data-l="ru"] [data-l="uz"]{display:none}
@page{size:A4;margin:14mm 13mm 15mm}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:var(--ground);color:var(--ink);
  font-family:"Source Serif 4",Georgia,serif;font-size:13.5px;line-height:1.58}
.wrap{max-width:860px;margin:0 auto;background:#fff;padding:26px 30px 40px}
.k{font-size:1.02em}
.kdisp{display:block;margin:7px 0;text-align:center}
a{color:inherit}

/* masthead */
.mast{border-bottom:2px solid var(--ink);padding-bottom:11px}
.topline{display:flex;justify-content:space-between;align-items:center;gap:14px}
.eyebrow{font-family:"IBM Plex Mono",monospace;font-size:9.5px;letter-spacing:.14em;
  text-transform:uppercase;margin:0;color:var(--accent)}
.lang{display:flex;gap:0;border:1px solid var(--rule);border-radius:4px;overflow:hidden}
.lang button{font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:.08em;
  padding:4px 9px;border:0;background:#fff;color:var(--muted);cursor:pointer}
.lang button+button{border-left:1px solid var(--rule)}
:root[data-l="uz"] .lang button[data-set="uz"],
:root[data-l="ru"] .lang button[data-set="ru"]{background:var(--accent);color:#fff}
h1{font-family:Archivo,sans-serif;font-size:30px;font-weight:700;letter-spacing:-.015em;
  margin:9px 0 0;line-height:1.08}
.sub{margin:7px 0 0;color:var(--muted);font-size:14px;max-width:62ch}
.stats{list-style:none;display:flex;flex-wrap:wrap;gap:8px;padding:0;margin:12px 0 0}
.stats li{font-family:"IBM Plex Mono",monospace;font-size:10px;color:var(--muted);
  background:var(--surface-2);border:1px solid var(--rule-soft);padding:4px 9px;
  border-radius:3px}
.stats b{color:var(--accent);font-size:13px;margin-right:5px}

/* contents */
.toc{display:grid;grid-template-columns:1fr 1fr;gap:18px 26px;margin-top:20px;
  padding:15px 0 16px;border-bottom:1px solid var(--rule)}
.toc h2{font-family:"IBM Plex Mono",monospace;font-size:9.5px;letter-spacing:.14em;
  text-transform:uppercase;color:var(--muted);font-weight:500;margin:0 0 7px}
ol.tl{list-style:none;padding:0;margin:0}
ol.tl a{display:flex;align-items:baseline;gap:8px;text-decoration:none;
  padding:3px 0;border-bottom:1px dotted var(--rule-soft)}
ol.tl .kod{font-family:"IBM Plex Mono",monospace;font-size:10px;color:var(--accent);
  min-width:34px}
ol.tl .ct{margin-left:auto;font-family:"IBM Plex Mono",monospace;font-size:10px;
  color:var(--muted)}
.tnote{margin:9px 0 0;font-size:12px;color:var(--muted)}

/* parts */
.part{margin-top:30px}
.ph{display:flex;align-items:baseline;gap:9px;border-bottom:2px solid var(--ink);
  padding-bottom:6px;margin-bottom:4px;break-after:avoid}
.ph h2{font-family:Archivo,sans-serif;font-size:21px;margin:0}
.ph .chip{font-family:"IBM Plex Mono",monospace;font-size:10px;color:var(--muted)}

/* theory */
.bolim{margin-top:20px;break-before:auto}
.bh{display:flex;align-items:baseline;gap:10px;border-bottom:1px solid var(--hue);
  padding-bottom:5px;break-after:avoid}
.bh .kod{font-family:"IBM Plex Mono",monospace;font-size:15px;color:var(--hue)}
.bh h3{font-family:Archivo,sans-serif;font-size:17px;margin:0;color:var(--hue)}
.bh .chip{margin-left:auto;font-family:"IBM Plex Mono",monospace;font-size:9.5px;
  color:var(--hue);background:var(--hue-bg);padding:1px 6px;border-radius:3px}
.izoh{margin:7px 0 11px;color:var(--muted);font-size:12.5px}
.it{border:1px solid var(--rule);border-left:3px solid var(--hue);
  padding:11px 14px;margin-bottom:10px;break-inside:avoid}
.ih{display:flex;align-items:baseline;gap:9px;flex-wrap:wrap}
.ih h4{font-family:Archivo,sans-serif;font-size:14.5px;margin:0}
.tur{font-family:"IBM Plex Mono",monospace;font-size:8.5px;letter-spacing:.11em;
  text-transform:uppercase;padding:2px 6px;border-radius:2px;
  color:var(--hue);background:var(--hue-bg);white-space:nowrap}
.t-teorema{color:#fff;background:var(--hue)}
.bayon{margin:7px 0 0}
.isbot{margin:8px 0 0;padding-left:11px;border-left:2px solid var(--rule);
  font-size:12.5px;color:var(--muted)}
.misol{margin:8px 0 0;padding:8px 11px;background:var(--hue-bg)}
.lab{display:block;font-family:"IBM Plex Mono",monospace;font-size:8.5px;
  letter-spacing:.13em;text-transform:uppercase;margin-bottom:3px;color:var(--hue)}
.isbot .lab{color:var(--muted)}

/* problems */
.daraja{margin-top:20px}
ol.qs{padding-left:24px;margin:0}
ol.qs>li{padding:8px 0;border-bottom:1px solid var(--rule-soft);break-inside:avoid}
ol.qs>li::marker{font-family:"IBM Plex Mono",monospace;font-size:11.5px;color:var(--hue)}
.meta{margin-top:5px;display:flex;align-items:baseline;gap:6px;flex-wrap:wrap}
.xref,.src,.goto{font-family:"IBM Plex Mono",monospace;font-size:9px;padding:1px 6px;
  border-radius:2px;text-decoration:none;white-space:nowrap}
.xref{color:var(--hue);background:var(--hue-bg)}
.src{color:var(--muted);background:var(--surface-2)}
.goto{margin-left:auto;color:var(--accent)}

/* solutions */
.sol{border-top:1px solid var(--rule);padding:12px 0 13px;break-inside:avoid}
.sh{display:flex;align-items:baseline;gap:9px;flex-wrap:wrap}
.sh .num{font-family:"IBM Plex Mono",monospace;font-size:17px;color:var(--hue);
  min-width:26px}
.sh .lvl{font-family:"IBM Plex Mono",monospace;font-size:8.5px;letter-spacing:.11em;
  text-transform:uppercase;color:var(--hue);background:var(--hue-bg);
  padding:2px 6px;border-radius:2px}
.qq{margin:6px 0 0 35px;font-weight:600}
.ans{margin:7px 0 0 35px;padding:5px 10px;background:var(--hue-bg);display:inline-block}
.ans .lab{display:inline;margin-right:7px}
.body{margin:8px 0 0 35px;color:#26323a}
.back{display:block;margin:7px 0 0 35px;font-family:"IBM Plex Mono",monospace;
  font-size:9px;color:var(--muted);text-decoration:none}

@media (max-width:640px){
  .wrap{padding:18px 15px 30px}
  .toc{grid-template-columns:1fr}
  h1{font-size:24px}
  .qq,.ans,.body,.back{margin-left:0}
}
@media print{
  body{background:#fff}
  .wrap{max-width:none;padding:0}
  .lang,.goto,.back{display:none}
  .part{break-before:page}
  .part#nazariya{break-before:auto}
  a{text-decoration:none}
}
"""

JS = ('<script>%s</script>'
      '<script>'
      'document.querySelectorAll(".k").forEach(function(e){try{'
      'katex.render(e.textContent,e,{throwOnError:false,'
      'displayMode:e.classList.contains("kdisp")});}catch(x){}});'
      'document.querySelectorAll(".lang button").forEach(function(b){'
      'b.addEventListener("click",function(){'
      'document.documentElement.dataset.l=b.dataset.set;'
      'try{localStorage.setItem("nz-lang",b.dataset.set);}catch(x){}});});'
      'try{var s=localStorage.getItem("nz-lang");'
      'if(s)document.documentElement.dataset.l=s;}catch(x){}'
      '</script>' % KATEX_JS)


# --------------------------------------------------------------------- write --
out_html = HERE / (STEM + '.html')
out_html.write_text(page('uz'), encoding='utf-8')
print('%-46s %d KB' % (out_html.name, out_html.stat().st_size // 1024))

parts = []
for lang in ('uz', 'ru'):
    f = HERE / ('_nz-%s.html' % lang)
    f.write_text(page(lang), encoding='utf-8')
    parts.append({'html': str(f), 'pdf': str(HERE / ('_nz-%s.pdf' % lang))})

jobs = HERE / '_jobs.json'; jobs.write_text(json.dumps(parts))
subprocess.run(['node', str(HERE.parent / 'reja/topdf.js'), str(jobs)], check=True)
jobs.unlink()

import pymupdf
doc = pymupdf.open()
for lang in ('uz', 'ru'):
    doc.insert_pdf(pymupdf.open(str(HERE / ('_nz-%s.pdf' % lang))))
name = HERE / (STEM + '-UZ-RU.pdf')
doc.save(str(name), deflate=True, garbage=3)
print('%-46s %d bet  %d KB' % (name.name, doc.page_count, name.stat().st_size // 1024))

for f in HERE.glob('_nz-*.html'): f.unlink()
for f in HERE.glob('_nz-*.pdf'): f.unlink()
