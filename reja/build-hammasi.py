# -*- coding: utf-8 -*-
"""One page holding all six documents, with a preloader and grade/view/language switches.

Build the six fragments first, then merge:

    for g in 9 10 11; do
      python3 build-reja.py       reja$g-data.py      plan$g --frag
      python3 build-formulalar.py formulalar$g-data.py ref$g  --frag
    done
    python3 build-hammasi.py

Writes hub.html (a fragment, for embedding) and hub-standalone.html
(self-contained: KaTeX CSS and JS inlined).
"""
import pathlib, re

HERE = pathlib.Path(__file__).resolve().parent
GRADES = ['9', '10', '11']

def read(n): return (HERE / n).read_text(encoding='utf-8')

# the six documents, with their per-document mastheads stripped (the shell carries one)
MAST = re.compile(r'<header class="mast">.*?</header>', re.S)
docs = []
for g in GRADES:
    for v, stem in (('reja', 'plan'), ('form', 'ref')):
        frag = read('%s%s.frag.html' % (stem, g))
        frag = MAST.sub('', frag, count=1)   # the shell carries the masthead; .wrap stays,
                                             # it is what keeps the column at page width
        docs.append('<section class="doc g%s v%s">%s</section>' % (g, v, frag))

PLAN_CSS = read('plan9.frag.css')
REF_CSS = read('ref9.frag.css')
KATEX = read('katex-inline.css')

SHELL_CSS = r"""
/* ---- merged shell ---- */
:root[data-l="uz"] [data-l="ru"],
:root[data-l="ru"] [data-l="uz"]{display:none}
.doc{display:none}
:root[data-g="9"][data-v="reja"]  .doc.g9.vreja,
:root[data-g="9"][data-v="form"]  .doc.g9.vform,
:root[data-g="10"][data-v="reja"] .doc.g10.vreja,
:root[data-g="10"][data-v="form"] .doc.g10.vform,
:root[data-g="11"][data-v="reja"] .doc.g11.vreja,
:root[data-g="11"][data-v="form"] .doc.g11.vform{display:block}

.shell{max-width:800px;margin:0 auto;padding-inline:16px;padding-block:24px 0}
.brand{border-bottom:2px solid var(--ink);padding-bottom:13px}
.brandtop{display:flex;justify-content:space-between;align-items:flex-start;gap:12px}
.brand .who{font-family:"IBM Plex Mono",monospace;font-size:11px;letter-spacing:.14em;
  text-transform:uppercase;color:var(--accent);margin:0 0 7px}
.brand h1{font-size:clamp(25px,6vw,36px);line-height:1.08;margin:0;font-weight:700;
  letter-spacing:-.015em;text-wrap:balance}
.brand .tag{color:var(--muted);margin:7px 0 0;font-size:15px}

.picker{display:flex;flex-wrap:wrap;gap:16px;margin-top:15px;align-items:flex-end}
.grp{display:flex;flex-direction:column;gap:5px}
.grp .cap{font-family:"IBM Plex Mono",monospace;font-size:9.5px;letter-spacing:.14em;
  text-transform:uppercase;color:var(--muted)}
.tabs{display:flex;border:1px solid var(--rule);border-radius:2px;overflow:hidden;
  background:var(--surface)}
.tabs button{font-family:Archivo,sans-serif;font-size:13px;font-weight:600;
  padding:6px 13px;border:0;border-right:1px solid var(--rule);background:transparent;
  color:var(--muted);cursor:pointer;white-space:nowrap}
.tabs button:last-child{border-right:0}
.tabs button[aria-pressed="true"]{background:var(--accent);color:var(--surface)}
.tabs button:focus-visible{outline:2px solid var(--accent);outline-offset:-2px}
.doc .wrap{max-width:800px;padding-block:0 48px}  /* same column as .shell */

/* ---- preloader ---- */
#pre{position:fixed;inset:0;z-index:50;display:grid;place-items:center;
  background:var(--ground);
  animation:preout .55s ease 3.2s forwards}
#pre.done{animation:preout .45s ease forwards}
@keyframes preout{to{opacity:0;visibility:hidden;pointer-events:none}}
.pre-in{text-align:center;padding-inline:20px}
.pre-name{font-family:Archivo,sans-serif;font-size:clamp(21px,5.4vw,31px);font-weight:700;
  letter-spacing:-.01em;color:var(--ink);margin:0;
  display:flex;justify-content:center;gap:.28em;flex-wrap:wrap}
.pre-name span{opacity:0;animation:rise .5s ease forwards}
@keyframes rise{from{opacity:0;transform:translateY(7px)}to{opacity:1;transform:none}}
.pre-rule{height:2px;background:var(--accent);margin:13px auto 0;width:0;
  animation:draw .9s ease .35s forwards}
@keyframes draw{to{width:min(190px,54vw)}}
.pre-sub{font-family:"IBM Plex Mono",monospace;font-size:10.5px;letter-spacing:.16em;
  text-transform:uppercase;color:var(--muted);margin:12px 0 0;opacity:0;
  animation:rise .5s ease .75s forwards}
@media (prefers-reduced-motion:reduce){
  #pre{animation:preout .01s linear .35s forwards}
  .pre-name span,.pre-sub{animation-duration:.01s}
  .pre-rule{animation:draw .01s linear forwards}
}
.foot{max-width:800px;margin:0 auto;padding:16px;border-top:1px solid var(--rule);
  font-size:12.5px;color:var(--muted);text-align:center}
@media (max-width:420px){ .picker{gap:11px} .tabs button{padding:6px 11px;font-size:12.5px} }
"""

NAME_UZ = 'Anvarbek Xaydarov'
NAME_RU = 'Анварбек Хайдаров'
def letters(name):
    out, i = [], 0
    for w in name.split(' '):
        chunk = []
        for ch in w:
            chunk.append('<span style="animation-delay:%.2fs">%s</span>' % (0.05 + i * 0.035, ch))
            i += 1
        out.append(''.join(chunk))
        i += 1
    return '<span style="width:.28em"></span>'.join(out)

L = lambda uz, ru: ('<span data-l="uz">%s</span><span data-l="ru">%s</span>' % (uz, ru))

BODY = f'''<div id="pre" aria-hidden="true"><div class="pre-in">
  <p class="pre-name" data-l="uz">{letters(NAME_UZ)}</p>
  <p class="pre-name" data-l="ru">{letters(NAME_RU)}</p>
  <div class="pre-rule"></div>
  <p class="pre-sub">{L("Olimpiadaga tayyorgarlik", "Подготовка к олимпиаде")}</p>
</div></div>

<div class="shell">
<header class="brand">
  <div class="brandtop">
    <p class="who">{L("Anvarbek Xaydarov · matematika", "Анварбек Хайдаров · математика")}</p>
    <div class="lang" role="group" aria-label="Til · Язык">
      <button id="btn-uz" type="button" aria-pressed="true">OʻZB</button>
      <button id="btn-ru" type="button" aria-pressed="false">РУС</button>
    </div>
  </div>
  <h1>{L("Tuman bosqichiga tayyorgarlik", "Подготовка к районному этапу")}</h1>
  <p class="tag">{L(
    "9-, 10- va 11-sinflar uchun 20 kunlik reja va formulalar toʻplami — "
    "oʻtgan yillar variantlari tahliliga asoslangan.",
    "20-дневный план и свод формул для 9, 10 и 11 классов — на основе разбора "
    "вариантов прошлых лет.")}</p>
  <div class="picker">
    <div class="grp"><span class="cap">{L("Sinf", "Класс")}</span>
      <div class="tabs" role="group" aria-label="Sinf · Класс">
        <button id="g-9"  type="button" aria-pressed="true">9</button>
        <button id="g-10" type="button" aria-pressed="false">10</button>
        <button id="g-11" type="button" aria-pressed="false">11</button>
      </div></div>
    <div class="grp"><span class="cap">{L("Boʻlim", "Раздел")}</span>
      <div class="tabs" role="group" aria-label="Boʻlim · Раздел">
        <button id="v-reja" type="button" aria-pressed="true">{L("Reja", "План")}</button>
        <button id="v-form" type="button" aria-pressed="false">{L("Formulalar", "Формулы")}</button>
      </div></div>
  </div>
</header>
</div>

{''.join(docs)}

<p class="foot">{L(
  "Tuzuvchi: Anvarbek Xaydarov · manba: tuman (shahar) bosqichi variantlari, "
  "2024 – 2025/2026",
  "Составитель: Анварбек Хайдаров · источник: варианты районного (городского) этапа, "
  "2024 – 2025/2026")}</p>'''

JS = r'''<script>
(function(){
  var r=document.documentElement;
  function pick(k,v,ids,save){
    r.setAttribute(k,v);
    ids.forEach(function(id){
      var b=document.getElementById(id);
      if(b) b.setAttribute("aria-pressed",String(id.split("-")[1]===v));
    });
    if(save){try{localStorage.setItem("reja-"+k,v);}catch(e){}}
  }
  function get(k,d){try{return localStorage.getItem("reja-"+k)||d;}catch(e){return d;}}
  var G=["g-9","g-10","g-11"], V=["v-reja","v-form"], La=["btn-uz","btn-ru"];
  function setLang(v,save){
    r.setAttribute("data-l",v);
    La.forEach(function(id){
      document.getElementById(id).setAttribute("aria-pressed",
        String(id==="btn-"+v));
    });
    if(save){try{localStorage.setItem("reja-lang",v);}catch(e){}}
  }
  var g=get("data-g","9"), v=get("data-v","reja"), l=get("lang","uz");
  if(["9","10","11"].indexOf(g)<0) g="9";
  if(["reja","form"].indexOf(v)<0) v="reja";
  pick("data-g",g,G,false); pick("data-v",v,V,false); setLang(l==="ru"?"ru":"uz",false);
  G.forEach(function(id){document.getElementById(id).addEventListener("click",function(){
    pick("data-g",id.slice(2),G,true); window.scrollTo(0,0);});});
  V.forEach(function(id){document.getElementById(id).addEventListener("click",function(){
    pick("data-v",id.slice(2),V,true); window.scrollTo(0,0);});});
  La.forEach(function(id){document.getElementById(id).addEventListener("click",function(){
    setLang(id.slice(4),true);});});

  // the name animation runs ~1.55s; never cut it short, even on a fast machine
  var T0=Date.now(), HOLD=1650;
  function dismiss(){
    var p=document.getElementById("pre"); if(!p) return;
    var wait=Math.max(0,HOLD-(Date.now()-T0));
    setTimeout(function(){p.className="done";},wait);
  }

  // typeset every formula on the page while the preloader is up
  var nodes=[].slice.call(document.querySelectorAll(".kd,.k")), i=0;
  function chunk(){
    var end=Math.min(i+150,nodes.length);
    for(;i<end;i++){
      var e=nodes[i];
      try{katex.render(e.textContent,e,{throwOnError:false,
        displayMode:e.classList.contains("kd")});}catch(x){}
    }
    if(i<nodes.length) requestAnimationFrame(chunk);
    else dismiss();
  }
  if(window.katex) chunk(); else dismiss();
})();
</script>'''

FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com">'
 '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
 '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?'
 'family=Archivo:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&'
 'family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap">')

BOOT = ('<script>(function(d){var r=d.documentElement;'
        'try{r.setAttribute("data-g",localStorage.getItem("reja-data-g")||"9");'
        'r.setAttribute("data-v",localStorage.getItem("reja-data-v")||"reja");'
        'r.setAttribute("data-l",localStorage.getItem("reja-lang")||"uz");}'
        'catch(e){r.setAttribute("data-g","9");r.setAttribute("data-v","reja");'
        'r.setAttribute("data-l","uz");}})(document);</script>')

KJS_CDN = ('<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/'
           'katex.min.js"></script>')
KJS_LOCAL = ('<script>%s</script>'
  % (HERE.parent / 'site/assets/vendor/katex/katex.min.js').read_text())

TITLE = 'Tuman bosqichiga tayyorgarlik'
STYLE = KATEX + PLAN_CSS + REF_CSS + SHELL_CSS

(HERE / 'hub.html').write_text(
  f'<title>{TITLE}</title>\n{FONTS}\n<style>{STYLE}</style>\n{BOOT}\n{KJS_CDN}\n{BODY}\n{JS}\n',
  encoding='utf-8')
(HERE / 'hub-standalone.html').write_text(
  '<!doctype html><html lang="uz" data-g="9" data-v="reja" data-l="uz"><head>'
  '<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
  f'<title>{TITLE} · Подготовка к районному этапу</title>{FONTS}<style>{STYLE}</style>'
  f'{KJS_LOCAL}</head><body>{BOOT}{BODY}{JS}</body></html>', encoding='utf-8')

for f in ('hub.html', 'hub-standalone.html'):
    print(f, '%.0f KB' % ((HERE / f).stat().st_size / 1024))
