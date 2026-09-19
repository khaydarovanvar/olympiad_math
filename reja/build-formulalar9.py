# -*- coding: utf-8 -*-
import html, importlib.util, pathlib, re

HERE = pathlib.Path(__file__).resolve().parent
spec = importlib.util.spec_from_file_location('data', HERE / 'data.py')
D = importlib.util.module_from_spec(spec); spec.loader.exec_module(D)

MATH = re.compile(r'\$(.+?)\$', re.S)

def rich(t):
    """inline math + **bold**, everything else escaped"""
    slots = []
    t = MATH.sub(lambda m: slots.append(m.group(1)) or '\x00%d\x00' % (len(slots) - 1), t)
    t = html.escape(t)
    t = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', t, flags=re.S)
    return re.sub(r'\x00(\d+)\x00',
                  lambda m: '<span class="k">%s</span>' % html.escape(slots[int(m.group(1))]), t)

BADGE = {'teorema': 'Teorema', 'lemma': 'Lemma'}

def item(sec, i, it):
    kod = '%s%d' % (sec['kod'], i)
    badge = ('<span class="badge %s">%s</span>' % (it['tur'], BADGE[it['tur']])
             ) if it.get('tur') else ''
    texes = ''.join('<div class="kd">%s</div>' % html.escape(it[k])
                    for k in ('tex', 'tex2') if it.get(k))
    nega = '<p class="nega">%s</p>' % rich(it['nega']) if it.get('nega') else ''
    mis = ''
    if it.get('misol'):
        ref = ('<span class="ref">%s</span>' % html.escape(it['ref'])) if it.get('ref') else ''
        mis = ('<div class="misol"><span class="lab">Misol %s</span>%s</div>'
               % (ref, rich(it['misol'])))
    elif it.get('ref'):
        mis = ('<div class="misol"><span class="lab">Uchragan '
               '<span class="ref">%s</span></span></div>' % html.escape(it['ref']))
    return ('<article class="it" id="%s"><div class="ih"><span class="kod">%s</span>'
            '<h3>%s</h3>%s</div>%s%s%s</article>'
            % (kod, kod, html.escape(it['nom']), badge, texes, nega, mis))

secs, nav = [], []
for s in D.SECTIONS:
    nav.append('<a class="chip" style="--hue:var(--%s)" href="#s-%s">'
               '<b>%s</b> %s</a>' % (s['key'], s['kod'], s['kod'], html.escape(s['nom'])))
    body = ''.join(item(s, i, it) for i, it in enumerate(s['items'], 1))
    secs.append(
      '<section class="sec" id="s-%s" style="--hue:var(--%s);--hue-bg:var(--%s-bg)">'
      '<div class="sh"><span class="letter">%s</span><div>'
      '<h2>%s</h2><p class="meta"><span class="pc">%s</span> · %d ta formula va teorema</p>'
      '</div></div><p class="sizoh">%s</p>%s</section>'
      % (s['kod'], s['key'], s['key'], s['kod'], html.escape(s['nom']),
         s['ulush'], len(s['items']), rich(s['izoh']), body))

TOTAL = sum(len(s['items']) for s in D.SECTIONS)
WITH_EX = sum(1 for s in D.SECTIONS for i in s['items'] if i.get('misol'))

CSS = r"""
:root{
  --ground:#eceff2; --surface:#ffffff; --surface-2:#f5f7f9;
  --ink:#0f1a21; --muted:#5a6b76; --rule:#d5dde2; --rule-soft:#e4eaee;
  --accent:#0f5c72;
  --alg:#0f5c72; --nt:#8a5a00; --geo:#2a6a3f; --comb:#8a3a52; --rev:#48555f;
  --alg-bg:#e0edf1; --nt-bg:#f6ecd8; --geo-bg:#e2eee6; --comb-bg:#f6e6ea; --rev-bg:#e8ecef;
}
@media (prefers-color-scheme:dark){ :root:not([data-theme="light"]){
  --ground:#0d1317; --surface:#141c21; --surface-2:#1a242a;
  --ink:#e4ecf1; --muted:#93a5b0; --rule:#27343b; --rule-soft:#1f2b31; --accent:#56b4cc;
  --alg:#56b4cc; --nt:#d3a54e; --geo:#6cc08a; --comb:#dd8fa2; --rev:#9fb0bb;
  --alg-bg:#12303a; --nt-bg:#332713; --geo-bg:#16301f; --comb-bg:#331d24; --rev-bg:#1d262b;
}}
:root[data-theme="dark"]{
  --ground:#0d1317; --surface:#141c21; --surface-2:#1a242a;
  --ink:#e4ecf1; --muted:#93a5b0; --rule:#27343b; --rule-soft:#1f2b31; --accent:#56b4cc;
  --alg:#56b4cc; --nt:#d3a54e; --geo:#6cc08a; --comb:#dd8fa2; --rev:#9fb0bb;
  --alg-bg:#12303a; --nt-bg:#332713; --geo-bg:#16301f; --comb-bg:#331d24; --rev-bg:#1d262b;
}
*{box-sizing:border-box}
body{margin:0;background:var(--ground);color:var(--ink);
  font-family:"Source Serif 4",Georgia,"Times New Roman",serif;font-size:16px;line-height:1.6;
  -webkit-text-size-adjust:100%}
.wrap{max-width:800px;margin:0 auto;padding-inline:16px;padding-block:28px 56px}
h1,h2,h3,.ui{font-family:Archivo,"Helvetica Neue",Arial,sans-serif}

.mast{border-bottom:2px solid var(--ink);padding-bottom:14px}
.eyebrow{font-family:"IBM Plex Mono",monospace;font-size:11px;letter-spacing:.14em;
  text-transform:uppercase;color:var(--accent);margin:0 0 8px}
h1{font-size:clamp(27px,6.6vw,40px);line-height:1.08;margin:0;font-weight:700;
  letter-spacing:-.015em;text-wrap:balance}
.sub{color:var(--muted);margin:8px 0 0}
.spec{display:flex;flex-wrap:wrap;gap:0 18px;margin:14px 0 0;padding:0;list-style:none;
  font-family:"IBM Plex Mono",monospace;font-size:12.5px;color:var(--muted)}
.spec b{color:var(--ink);font-weight:500}

nav{position:sticky;top:env(safe-area-inset-top,0px);z-index:5;background:var(--ground);
  padding-block:10px;margin-bottom:6px;border-bottom:1px solid var(--rule);
  display:flex;flex-wrap:wrap;gap:6px}
.chip{font-family:Archivo,sans-serif;font-size:12.5px;text-decoration:none;color:var(--muted);
  border:1px solid var(--rule);border-radius:2px;padding:4px 9px;white-space:nowrap}
.chip b{font-family:"IBM Plex Mono",monospace;color:var(--hue);margin-right:4px}
.chip:hover,.chip:focus-visible{color:var(--ink);border-color:var(--hue)}

.sec{margin-top:40px;scroll-margin-top:72px}
.sh{display:flex;gap:13px;align-items:center;padding-bottom:9px;
  border-bottom:2px solid var(--hue)}
.letter{font-family:"IBM Plex Mono",monospace;font-size:30px;font-weight:600;line-height:1;
  color:var(--hue)}
.sh h2{font-size:21px;margin:0;font-weight:700;letter-spacing:-.01em}
.meta{margin:2px 0 0;font-family:"IBM Plex Mono",monospace;font-size:12px;color:var(--muted)}
.meta .pc{color:var(--hue);font-weight:500}
.sizoh{font-size:14.5px;color:var(--muted);margin:11px 0 16px}

.it{background:var(--surface);border:1px solid var(--rule);padding:15px 16px;
  margin-bottom:9px;scroll-margin-top:76px}
.ih{display:flex;flex-wrap:wrap;align-items:baseline;gap:5px 10px;margin-bottom:9px}
.kod{font-family:"IBM Plex Mono",monospace;font-size:12px;font-weight:600;color:var(--hue);
  background:var(--hue-bg);border-radius:2px;padding:2px 6px}
.ih h3{font-size:16.5px;margin:0;font-weight:600;letter-spacing:-.005em}
.badge{font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:.1em;
  text-transform:uppercase;border:1px solid var(--hue);color:var(--hue);
  border-radius:2px;padding:1px 5px}
.kd{background:var(--surface-2);border-left:2px solid var(--hue);padding:11px 13px;
  margin-bottom:7px;overflow-x:auto}
.nega{font-size:15px;margin:9px 0 0;color:var(--ink)}
.misol{margin:11px 0 0;padding-top:10px;border-top:1px dashed var(--rule);font-size:14.5px;
  color:var(--muted)}
.misol .lab{font-family:"IBM Plex Mono",monospace;font-size:10.5px;letter-spacing:.11em;
  text-transform:uppercase;display:block;margin-bottom:4px}
.ref{font-family:"IBM Plex Mono",monospace;font-size:10.5px;letter-spacing:0;
  background:var(--hue-bg);color:var(--hue);border-radius:2px;padding:1px 5px;
  text-transform:none;margin-left:3px}
.src{margin-top:42px;padding-top:14px;border-top:1px solid var(--rule);font-size:13px;
  color:var(--muted)}
.src b{color:var(--ink);font-weight:600}
.katex{font-size:1.04em}
.kd .katex-display{margin:0}
@media (max-width:420px){ .it{padding:13px} .ih h3{font-size:15.5px} .letter{font-size:25px} }
"""

BODY = f'''<div class="wrap">
<header class="mast">
  <p class="eyebrow">9-sinf · tuman (shahar) bosqichi</p>
  <h1>Olimpiada formulalari va teoremalari</h1>
  <p class="sub">20 kunlik rejaning nazariy qismi: kerak boʻladigan formulalar, teoremalar va
     lemmalar — har biri qayerda uchraganiga havola bilan.</p>
  <ul class="spec">
    <li><b>{TOTAL}</b> ta formula</li><li><b>{WITH_EX}</b> tasi misol bilan</li>
    <li>5 boʻlim</li><li>manba: 3 ta variant</li>
  </ul>
</header>

<nav>{''.join(nav)}</nav>

{''.join(secs)}

<p class="src"><b>Misollar manbasi:</b> 9-sinf tuman bosqichi variantlari — 2025/2026,
  2024/2025, 2024. Boshqa sinf varianti ishlatilgan joyda qavs ichida koʻrsatilgan.
  Tuzuvchi: Anvarbek Xaydarov.</p>
</div>'''

FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com">'
 '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
 '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?'
 'family=Archivo:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&'
 'family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap">')

RENDER = ('<script>document.querySelectorAll(".kd,.k").forEach(function(e){'
 'try{katex.render(e.textContent,e,{throwOnError:false,'
 'displayMode:e.classList.contains("kd")});}catch(x){}});</script>')

KCSS = (HERE / 'katex-inline.css').read_text()
KJS_CDN = ('<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/'
           'katex.min.js"></script>')
KJS_LOCAL = ('<script>%s</script>'
  % pathlib.Path('/home/user/olympiad_math/site/assets/vendor/katex/katex.min.js').read_text())

TITLE = 'Olimpiada formulalari va teoremalari'

(HERE / 'ref9.html').write_text(
  f'<title>{TITLE}</title>\n{FONTS}\n<style>{KCSS}</style>\n<style>{CSS}</style>\n'
  f'{KJS_CDN}\n{BODY}\n{RENDER}\n', encoding='utf-8')

(HERE / 'ref9-standalone.html').write_text(
  '<!doctype html><html lang="uz"><head><meta charset="utf-8">'
  '<meta name="viewport" content="width=device-width,initial-scale=1">'
  f'<title>{TITLE} — 9-sinf</title>{FONTS}<style>{KCSS}</style><style>{CSS}</style>'
  f'{KJS_LOCAL}</head><body>{BODY}{RENDER}</body></html>', encoding='utf-8')

print('items', TOTAL, '| with examples', WITH_EX)
for f in ('ref9.html', 'ref9-standalone.html'):
    print(f, '%.0f KB' % ((HERE / f).stat().st_size / 1024))
