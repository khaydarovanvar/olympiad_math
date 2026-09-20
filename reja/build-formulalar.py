# -*- coding: utf-8 -*-
import html, importlib.util, pathlib, re

HERE = pathlib.Path(__file__).resolve().parent
import sys
DATA = sys.argv[1] if len(sys.argv) > 1 else 'data_ru.py'
OUT = sys.argv[2] if len(sys.argv) > 2 else 'ref9'
spec = importlib.util.spec_from_file_location('data', HERE / DATA)
D = importlib.util.module_from_spec(spec); spec.loader.exec_module(D)

DISP = re.compile(r'\$\$(.+?)\$\$', re.S)
MATH = re.compile(r'\$(.+?)\$', re.S)

def rich(t):
    """display math, inline math and **bold**; everything else escaped"""
    slots = []
    def stash(tex, cls):
        slots.append((tex, cls))
        return '\x00%d\x00' % (len(slots) - 1)
    # $$...$$ first, so the inline pass cannot split it down the middle
    t = DISP.sub(lambda m: stash(m.group(1), 'k kdisp'), t)
    t = MATH.sub(lambda m: stash(m.group(1), 'k'), t)
    t = html.escape(t)
    t = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', t, flags=re.S)
    def put(m):
        tex, cls = slots[int(m.group(1))]
        return '<span class="%s">%s</span>' % (cls, html.escape(tex))
    return re.sub(r'\x00(\d+)\x00', put, t)

C = D.CHROME

# the grade this reference belongs to; a citation without a "(N-sinf)" suffix
# means that grade's own paper
SINF = int(re.search(r'(\d+)', DATA).group(1))

_sp = importlib.util.spec_from_file_location('savollar', HERE / 'savollar-data.py')
SAV = importlib.util.module_from_spec(_sp); _sp.loader.exec_module(SAV)
_REF = re.compile(r'^(.*?) \u2116(\d+)(?: \((\d+)-sinf\))?$')

def savol(ref):
    """the cited problem, as it is printed on the paper"""
    mo = _REF.match(ref or '')
    if not mo:
        return None
    paper, n, other = mo.group(1), int(mo.group(2)), mo.group(3)
    return SAV.q.get((paper, int(other) if other else SINF, n))

def L(pair, tag='span'):
    uz, ru = pair
    return '<%s data-l="uz">%s</%s><%s data-l="ru">%s</%s>' % (tag, uz, tag, tag, ru, tag)

def LR(pair):
    return L((rich(pair[0]), rich(pair[1])))

def item(sec, i, it):
    kod = '%s%d' % (sec['kod'], i)
    badge = ('<span class="badge %s">%s</span>' % (it['tur'], L(D.BADGE[it['tur']]))
             ) if it.get('tur') else ''
    def kd(v):
        if isinstance(v, tuple):
            return ('<div class="kd" data-l="uz">%s</div><div class="kd" data-l="ru">%s</div>'
                    % (html.escape(v[0]), html.escape(v[1])))
        return '<div class="kd">%s</div>' % html.escape(v)
    texes = ''.join(kd(it[k]) for k in ('tex', 'tex2') if it.get(k))
    nega = '<p class="nega">%s</p>' % LR(it['nega']) if it.get('nega') else ''
    mis = ''
    if it.get('misol'):
        ref = ('<span class="ref">%s</span>' % html.escape(it['ref'])) if it.get('ref') else ''
        sav = savol(it.get('ref'))
        ask = ('<div class="savol">%s</div><span class="lab ylab">%s</span>'
               % (LR(sav), L(C.get('yechim', ('Yechim', 'Решение'))))) if sav else ''
        mis = ('<div class="misol"><span class="lab">%s %s</span>%s%s</div>'
               % (L(C['misol']), ref, ask, LR(it['misol'])))
    elif it.get('ref'):
        mis = ('<div class="misol"><span class="lab">%s '
               '<span class="ref">%s</span></span></div>'
               % (L(C['uchragan']), html.escape(it['ref'])))
    return ('<article class="it" id="%s"><div class="ih"><span class="kod">%s</span>'
            '<h3>%s</h3>%s</div>%s%s%s</article>'
            % (kod, kod, LR(it['nom']), badge, texes, nega, mis))

secs, nav = [], []
for s in D.SECTIONS:
    nav.append('<a class="chip" style="--hue:var(--%s)" href="#s-%s">'
               '<b>%s</b> %s</a>' % (s['key'], s['kod'], s['kod'], L(s['nom'])))
    body = ''.join(item(s, i, it) for i, it in enumerate(s['items'], 1))
    secs.append(
      '<section class="sec" id="s-%s" style="--hue:var(--%s);--hue-bg:var(--%s-bg)">'
      '<div class="sh"><span class="letter">%s</span><div>'
      '<h2>%s</h2><p class="meta"><span class="pc">%s</span> · %d %s</p>'
      '</div></div><p class="sizoh">%s</p>%s</section>'
      % (s['kod'], s['key'], s['key'], s['kod'], L(s['nom']),
         s['ulush'], len(s['items']), L(C['formula']), LR(s['izoh']), body))

TOTAL = sum(len(s['items']) for s in D.SECTIONS)
WITH_EX = sum(1 for s in D.SECTIONS for i in s['items'] if i.get('misol'))

CSS = r"""
:root{
  --ground:#eceff2; --surface:#ffffff; --surface-2:#f5f7f9;
  --ink:#0f1a21; --muted:#5a6b76; --rule:#d5dde2; --rule-soft:#e4eaee;
  --accent:#0f5c72;
  --alg:#0f5c72; --nt:#8a5a00; --geo:#2a6a3f; --comb:#8a3a52; --trig:#7a4b9c; --rev:#48555f;
  --alg-bg:#e0edf1; --nt-bg:#f6ecd8; --geo-bg:#e2eee6; --comb-bg:#f6e6ea; --trig-bg:#efe8f5; --rev-bg:#e8ecef;
}
@media (prefers-color-scheme:dark){ :root:not([data-theme="light"]){
  --ground:#0d1317; --surface:#141c21; --surface-2:#1a242a;
  --ink:#e4ecf1; --muted:#93a5b0; --rule:#27343b; --rule-soft:#1f2b31; --accent:#56b4cc;
  --alg:#56b4cc; --nt:#d3a54e; --geo:#6cc08a; --comb:#dd8fa2; --trig:#b795d9; --rev:#9fb0bb;
  --alg-bg:#12303a; --nt-bg:#332713; --geo-bg:#16301f; --comb-bg:#331d24; --trig-bg:#2a1f38; --rev-bg:#1d262b;
}}
:root[data-theme="dark"]{
  --ground:#0d1317; --surface:#141c21; --surface-2:#1a242a;
  --ink:#e4ecf1; --muted:#93a5b0; --rule:#27343b; --rule-soft:#1f2b31; --accent:#56b4cc;
  --alg:#56b4cc; --nt:#d3a54e; --geo:#6cc08a; --comb:#dd8fa2; --trig:#b795d9; --rev:#9fb0bb;
  --alg-bg:#12303a; --nt-bg:#332713; --geo-bg:#16301f; --comb-bg:#331d24; --trig-bg:#2a1f38; --rev-bg:#1d262b;
}
:root[data-l="uz"] [data-l="ru"],
:root[data-l="ru"] [data-l="uz"]{display:none}
.topline{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;
  margin-bottom:8px}
.lang{display:flex;flex:0 0 auto;border:1px solid var(--rule);border-radius:2px;
  overflow:hidden;background:var(--surface)}
.lang button{font-family:"IBM Plex Mono",monospace;font-size:11px;letter-spacing:.06em;
  padding:4px 9px;border:0;background:transparent;color:var(--muted);cursor:pointer}
.lang button[aria-pressed="true"]{background:var(--accent);color:var(--surface)}
.lang button:focus-visible{outline:2px solid var(--accent);outline-offset:-2px}
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
.savol{background:var(--hue-bg);border-left:2px solid var(--hue);padding:9px 11px;
  margin:0 0 9px;color:var(--ink);overflow-x:auto}
.kdisp{display:block;margin:7px 0;overflow-x:auto;overflow-y:hidden}
.kdisp .katex-display{margin:0}
.misol .ylab{margin-top:9px;color:var(--hue)}
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
  <div class="topline">
    <p class="eyebrow">{L(C["eyebrow"])}</p>
    <div class="lang" role="group" aria-label="Til · Язык">
      <button id="btn-uz" type="button" aria-pressed="true">OʻZB</button>
      <button id="btn-ru" type="button" aria-pressed="false">РУС</button>
    </div>
  </div>
  <h1>{L(C["h1"])}</h1>
  <p class="sub">{L(C["sub"])}</p>
  <ul class="spec">{''.join('<li>%s</li>' % L(x) for x in C['spec'])}</ul>
</header>

<nav>{''.join(nav)}</nav>

{''.join(secs)}

<p class="src">{L(C["src"])}</p>
</div>'''

FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com">'
 '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
 '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?'
 'family=Archivo:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&'
 'family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap">')

RENDER = ('<script>document.querySelectorAll(".kd,.k").forEach(function(e){'
 'try{katex.render(e.textContent,e,{throwOnError:false,'
 'displayMode:e.classList.contains("kd")||e.classList.contains("kdisp")});}catch(x){}});'
 '(function(){var r=document.documentElement,'
 'u=document.getElementById("btn-uz"),v=document.getElementById("btn-ru");'
 'function set(l,save){r.setAttribute("data-l",l);'
 'u.setAttribute("aria-pressed",String(l==="uz"));'
 'v.setAttribute("aria-pressed",String(l==="ru"));'
 'if(save){try{localStorage.setItem("reja-lang",l);}catch(e){}}}'
 'var s=null;try{s=localStorage.getItem("reja-lang");}catch(e){}'
 'set(s==="ru"?"ru":"uz",false);'
 'u.addEventListener("click",function(){set("uz",true);});'
 'v.addEventListener("click",function(){set("ru",true);});})();</script>')

KCSS = (HERE / 'katex-inline.css').read_text()
KJS_CDN = ('<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/'
           'katex.min.js"></script>')
KJS_LOCAL = ('<script>%s</script>'
  % pathlib.Path('/home/user/olympiad_math/site/assets/vendor/katex/katex.min.js').read_text())

TITLE = C.get('title', (C['h1'][0], C['h1'][1]))[0]

(HERE / (OUT + '.html')).write_text(
  f'<title>{TITLE}</title>\n{FONTS}\n<style>{KCSS}</style>\n<style>{CSS}</style>\n'
  f'{KJS_CDN}\n{BODY}\n{RENDER}\n', encoding='utf-8')

(HERE / (OUT + '-standalone.html')).write_text(
  '<!doctype html><html lang="uz" data-l="uz"><head><meta charset="utf-8">'
  '<meta name="viewport" content="width=device-width,initial-scale=1">'
  f'<title>{TITLE}</title>{FONTS}<style>{KCSS}</style><style>{CSS}</style>'
  f'{KJS_LOCAL}</head><body>{BODY}{RENDER}</body></html>', encoding='utf-8')

print('items', TOTAL, '| with examples', WITH_EX)
for f in (OUT + '.html', OUT + '-standalone.html'):
    print(f, '%.0f KB' % ((HERE / f).stat().st_size / 1024))


# --- fragment mode for the merged page -------------------------------------
if len(sys.argv) > 3 and sys.argv[3] == '--frag':
    (HERE / (OUT + '.frag.html')).write_text(BODY, encoding='utf-8')
    (HERE / (OUT + '.frag.css')).write_text(CSS, encoding='utf-8')
    print('frag', OUT)
