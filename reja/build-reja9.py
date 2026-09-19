# -*- coding: utf-8 -*-
import importlib.util, pathlib
HERE = pathlib.Path(__file__).resolve().parent
sp = importlib.util.spec_from_file_location('d', HERE / 'data_ru.py')
D = importlib.util.module_from_spec(sp); sp.loader.exec_module(D)
C = D.CHROME

def L(pair, tag='span'):
    """emit both languages; CSS hides the inactive one"""
    uz, ru = pair
    return ('<%s data-l="uz">%s</%s><%s data-l="ru">%s</%s>' % (tag, uz, tag, tag, ru, tag))

def day(d):
    hue, bg = 'var(--%s)' % d['ph'], 'var(--%s-bg)' % d['ph']
    gaps = ''.join('<li>%s</li>' % L(g) for g in d['gap'])
    ex = ('<div class="ex"><span class="lab">%s</span>%s</div>'
          % (L(C['namuna']), L(d['misol']))) if d['misol'][0] else ''
    refs = ''.join('<span class="ref">%s</span>' % r for r in d['mashq'])
    return ('<article class="day" style="--hue:%s;--hue-bg:%s">'
            '<div class="day-head"><span class="num">%02d</span><div>'
            '<h4>%s</h4><p class="why">%s</p></div></div>'
            '<div class="body"><ul class="gap">%s</ul>%s'
            '<div class="refs"><span class="lab">%s</span>%s</div></div></article>'
            % (hue, bg, d['n'], L(d['mavzu']), L(d['nega']), gaps, ex, L(C['mashq']), refs))

bars = ''.join(
  '<li><span class="nm">%s</span><span class="pc">%s%% · %d</span>'
  '<span class="track"><span class="fill" style="width:%.1f%%;background:var(--%s)"></span></span></li>'
  % (L(nm), ('%.1f' % pc).replace('.', ','), n, pc / 31.5 * 100, hue)
  for nm, n, pc, hue in D.WEIGHTS)

phases = ''.join(
  '<section class="phase"><div class="phase-head"><h3>%s</h3><span class="rng">%s</span></div>'
  '<p class="phase-why">%s</p>%s</section>'
  % (L(p['nom']), L(p['kunlar']), L(p['izoh']),
     ''.join(day(d) for d in D.KUNLAR if d['ph'] == p['key']))
  for p in D.PHASES)

tac = ''.join('<div><dt>%s</dt><dd>%s</dd></div>' % (L(t), L(b)) for t, b in D.TACTICS)
spec = ''.join('<li>%s</li>' % L(s) for s in C['spec'])

CSS = r"""
:root{
  --ground:#eceff2; --surface:#ffffff; --surface-2:#f5f7f9;
  --ink:#0f1a21; --muted:#5a6b76; --rule:#d5dde2; --rule-soft:#e4eaee;
  --accent:#0f5c72; --accent-soft:#e0edf1;
  --alg:#0f5c72; --nt:#8a5a00; --geo:#2a6a3f; --comb:#8a3a52; --rev:#48555f;
  --alg-bg:#e0edf1; --nt-bg:#f6ecd8; --geo-bg:#e2eee6; --comb-bg:#f6e6ea; --rev-bg:#e8ecef;
}
@media (prefers-color-scheme:dark){ :root:not([data-theme="light"]){
  --ground:#0d1317; --surface:#141c21; --surface-2:#1a242a;
  --ink:#e4ecf1; --muted:#93a5b0; --rule:#27343b; --rule-soft:#1f2b31;
  --accent:#56b4cc; --accent-soft:#14323c;
  --alg:#56b4cc; --nt:#d3a54e; --geo:#6cc08a; --comb:#dd8fa2; --rev:#9fb0bb;
  --alg-bg:#12303a; --nt-bg:#332713; --geo-bg:#16301f; --comb-bg:#331d24; --rev-bg:#1d262b;
}}
:root[data-theme="dark"]{
  --ground:#0d1317; --surface:#141c21; --surface-2:#1a242a;
  --ink:#e4ecf1; --muted:#93a5b0; --rule:#27343b; --rule-soft:#1f2b31;
  --accent:#56b4cc; --accent-soft:#14323c;
  --alg:#56b4cc; --nt:#d3a54e; --geo:#6cc08a; --comb:#dd8fa2; --rev:#9fb0bb;
  --alg-bg:#12303a; --nt-bg:#332713; --geo-bg:#16301f; --comb-bg:#331d24; --rev-bg:#1d262b;
}
/* language switch */
:root[data-l="uz"] [data-l="ru"],
:root[data-l="ru"] [data-l="uz"]{display:none}
*{box-sizing:border-box}
body{margin:0;background:var(--ground);color:var(--ink);
  font-family:"Source Serif 4",Georgia,"Times New Roman",serif;
  font-size:16px;line-height:1.6;-webkit-text-size-adjust:100%}
.wrap{max-width:780px;margin:0 auto;padding-inline:16px;padding-block:28px 56px}
h1,h2,h3,.ui{font-family:Archivo,"Helvetica Neue",Arial,sans-serif}

.mast{border-bottom:2px solid var(--ink);padding-bottom:14px;margin-bottom:10px}
.topline{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;
  margin-bottom:8px}
.eyebrow{font-family:"IBM Plex Mono",monospace;font-size:11px;letter-spacing:.14em;
  text-transform:uppercase;color:var(--accent);margin:0}
.lang{display:flex;flex:0 0 auto;border:1px solid var(--rule);border-radius:2px;
  overflow:hidden;background:var(--surface)}
.lang button{font-family:"IBM Plex Mono",monospace;font-size:11px;letter-spacing:.06em;
  padding:4px 9px;border:0;background:transparent;color:var(--muted);cursor:pointer}
.lang button[aria-pressed="true"]{background:var(--accent);color:var(--surface)}
.lang button:focus-visible{outline:2px solid var(--accent);outline-offset:-2px}
h1{font-size:clamp(28px,7vw,42px);line-height:1.08;margin:0;font-weight:700;
  letter-spacing:-.015em;text-wrap:balance}
.sub{color:var(--muted);margin:8px 0 0;font-size:16px}
.spec{display:flex;flex-wrap:wrap;gap:0 18px;margin:14px 0 0;padding:0;list-style:none;
  font-family:"IBM Plex Mono",monospace;font-size:12.5px;color:var(--muted)}
.spec b{color:var(--ink);font-weight:500}

h2{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);
  font-weight:600;margin:44px 0 14px;padding-bottom:7px;border-bottom:1px solid var(--rule)}

.bars{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:9px}
.bars li{display:grid;grid-template-columns:1fr auto;gap:2px 10px;align-items:baseline}
.bars .nm{font-family:Archivo,sans-serif;font-size:14.5px;font-weight:500}
.bars .pc{font-family:"IBM Plex Mono",monospace;font-size:13px;color:var(--muted);
  font-variant-numeric:tabular-nums}
.bars .track{grid-column:1/-1;height:7px;background:var(--rule);border-radius:1px;
  overflow:hidden}
.bars .fill{display:block;height:100%;border-radius:1px}
.note{font-size:14px;color:var(--muted);margin:16px 0 0;padding-left:13px;
  border-left:2px solid var(--rule)}

.phase{margin-top:34px}
.phase-head{display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 12px;margin-bottom:4px}
.phase-head h3{font-size:19px;margin:0;font-weight:700;letter-spacing:-.01em}
.phase-head .rng{font-family:"IBM Plex Mono",monospace;font-size:12px;color:var(--muted);
  padding:2px 7px;border:1px solid var(--rule);border-radius:2px}
.phase-why{font-size:14.5px;color:var(--muted);margin:0 0 14px}

.day{background:var(--surface);border:1px solid var(--rule);border-top:3px solid var(--hue);
  padding:16px 16px 14px;margin-bottom:10px}
.day-head{display:flex;gap:14px;align-items:flex-start}
.num{font-family:"IBM Plex Mono",monospace;font-size:26px;font-weight:600;line-height:1;
  color:var(--hue);min-width:2.1ch;padding-top:1px;font-variant-numeric:tabular-nums}
.day-head h4{font-family:Archivo,sans-serif;font-size:17px;font-weight:600;margin:0;
  line-height:1.3;letter-spacing:-.005em;text-wrap:balance}
.why{font-size:14px;color:var(--muted);margin:3px 0 0}
.body{padding-top:12px}
ul.gap{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:6px}
ul.gap li{font-size:15px;padding-left:15px;position:relative}
ul.gap li::before{content:"";position:absolute;left:0;top:.62em;width:6px;height:1.5px;
  background:var(--hue)}
.ex{margin:13px 0 0;padding:11px 13px;background:var(--surface-2);
  border-left:2px solid var(--hue);font-size:14.5px}
.ex .lab,.refs .lab{font-family:"IBM Plex Mono",monospace;font-size:10.5px;letter-spacing:.12em;
  text-transform:uppercase;color:var(--muted);display:block;margin-bottom:4px}
.refs{display:flex;flex-wrap:wrap;gap:6px;margin:13px 0 0;padding:11px 0 0;
  border-top:1px dashed var(--rule)}
.refs .lab{width:100%;margin-bottom:1px}
.ref{font-family:"IBM Plex Mono",monospace;font-size:12px;padding:3px 7px;
  background:var(--hue-bg);color:var(--hue);border-radius:2px;white-space:nowrap}

.tac{margin:0;padding:0}
.tac div{padding:13px 0;border-bottom:1px solid var(--rule-soft)}
.tac div:last-child{border-bottom:0}
.tac dt{font-family:Archivo,sans-serif;font-weight:600;font-size:15.5px;margin-bottom:3px}
.tac dd{margin:0;font-size:15px;color:var(--muted)}

.src{margin-top:44px;padding-top:14px;border-top:1px solid var(--rule);
  font-size:13px;color:var(--muted)}
.src b{color:var(--ink);font-weight:600}
@media (max-width:420px){
  .day{padding:14px 13px 12px} .num{font-size:22px} .day-head h4{font-size:16px}
}
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
  <ul class="spec">{spec}</ul>
</header>

<h2>{L(C["h2a"])}</h2>
<ul class="bars">{bars}</ul>
<p class="note">{L(C["note"])}</p>

<h2>{L(C["h2b"])}</h2>
{phases}

<h2>{L(C["h2c"])}</h2>
<dl class="tac">{tac}</dl>

<p class="src">{L(C["src"])}</p>
</div>'''

JS = '''<script>
(function(){
  var root=document.documentElement, b={uz:document.getElementById("btn-uz"),
      ru:document.getElementById("btn-ru")};
  function set(l,save){
    root.setAttribute("data-l",l);
    b.uz.setAttribute("aria-pressed",String(l==="uz"));
    b.ru.setAttribute("aria-pressed",String(l==="ru"));
    if(save){try{localStorage.setItem("reja-lang",l);}catch(e){}}
  }
  var saved=null; try{saved=localStorage.getItem("reja-lang");}catch(e){}
  set(saved==="ru"?"ru":"uz",false);
  b.uz.addEventListener("click",function(){set("uz",true);});
  b.ru.addEventListener("click",function(){set("ru",true);});
})();
</script>'''

FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com">'
 '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
 '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?'
 'family=Archivo:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&'
 'family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap">')

TITLE = '20 kunda tuman bosqichiga'
(HERE / 'plan9.html').write_text(
  f'<title>{TITLE}</title>\n{FONTS}\n<style>{CSS}</style>\n{BODY}\n{JS}\n', encoding='utf-8')
(HERE / 'plan9-standalone.html').write_text(
  '<!doctype html><html lang="uz" data-l="uz"><head><meta charset="utf-8">'
  '<meta name="viewport" content="width=device-width,initial-scale=1">'
  f'<title>{TITLE} · К районному этапу за 20 дней</title>{FONTS}<style>{CSS}</style>'
  f'</head><body>{BODY}{JS}</body></html>', encoding='utf-8')
print('ok', (HERE/'plan9.html').stat().st_size//1024, 'KB')
