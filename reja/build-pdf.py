# -*- coding: utf-8 -*-
"""One printable PDF per grade: that grade's 20-day plan, then its formula
reference, in Uzbek and then the whole thing again in Russian.

    python3 build-pdf.py           # all three grades
    python3 build-pdf.py 11        # just one

Needs the fragments, so run the two builders with --frag first (see
build-hammasi.py for the loop). Rendering goes through Chromium.
"""
import json, pathlib, subprocess, sys

HERE = pathlib.Path(__file__).resolve().parent
GRADES = sys.argv[1:] or ['9', '10', '11']

def read(n): return (HERE / n).read_text(encoding='utf-8')

KATEX_CSS = read('katex-inline.css')
KATEX_JS = (HERE.parent / 'site/assets/vendor/katex/katex.min.js').read_text()

# Print styling. Screen chrome (language buttons, the sticky section nav) has no
# job on paper, and the dark theme must never reach a printer.
PRINT_CSS = r"""
:root, :root[data-theme="dark"]{
  --ground:#ffffff; --surface:#ffffff; --surface-2:#f4f6f8;
  --ink:#10191f; --muted:#4d5b65; --rule:#c9d3d9; --rule-soft:#e2e8ec;
}
@page{size:A4;margin:14mm 13mm 15mm}
html,body{background:#fff}
.wrap{max-width:none;padding:0;margin:0}
.lang,nav.secnav,nav{display:none !important}
/* both languages print, one after the other, not run together on a line */
:root[data-l="uz"] [data-l="ru"], :root[data-l="ru"] [data-l="uz"]{display:none}
.day,.it,.phase,.sec > .sh,.wbar li{break-inside:avoid}
h1,h2,h3,h4,.sh,.ih{break-after:avoid}
.sec{break-before:auto}
.misol,.savol,.kd{break-inside:avoid}
.mast{break-after:avoid}
.doc-break{break-before:page}
a{color:inherit;text-decoration:none}
"""

def page(g, lang):
    plan, ref = read('plan%s.frag.html' % g), read('ref%s.frag.html' % g)
    css = read('plan%s.frag.css' % g) + read('ref%s.frag.css' % g)
    return (
      '<!doctype html><html lang="%s" data-l="%s"><head><meta charset="utf-8">'
      '<title>%s-sinf</title>'
      '<link rel="preconnect" href="https://fonts.googleapis.com">'
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?'
      'family=Archivo:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&'
      'family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap">'
      '<style>%s</style><style>%s</style><style>%s</style></head><body>'
      '%s<div class="doc-break">%s</div>'
      '<script>%s</script>'
      '<script>document.querySelectorAll(".kd,.k").forEach(function(e){'
      'try{katex.render(e.textContent,e,{throwOnError:false,'
      'displayMode:e.classList.contains("kd")||e.classList.contains("kdisp")});'
      '}catch(x){}});</script></body></html>'
      % (lang, lang, g, KATEX_CSS, css, PRINT_CSS, plan, ref, KATEX_JS))

jobs = []
for g in GRADES:
    for lang in ('uz', 'ru'):
        f = HERE / ('_print-%s-%s.html' % (g, lang))
        f.write_text(page(g, lang), encoding='utf-8')
        jobs.append({'html': str(f), 'pdf': str(HERE / ('_part-%s-%s.pdf' % (g, lang)))})

(HERE / '_pdfjobs.json').write_text(json.dumps(jobs), encoding='utf-8')
subprocess.run(['node', str(HERE / 'topdf.js'), str(HERE / '_pdfjobs.json')], check=True)

import pymupdf
for g in GRADES:
    out = pymupdf.open()
    for lang in ('uz', 'ru'):
        part = pymupdf.open(str(HERE / ('_part-%s-%s.pdf' % (g, lang))))
        out.insert_pdf(part)
    name = HERE / ('%s-sinf-olimpiada-UZ-RU.pdf' % g)
    out.save(str(name), deflate=True, garbage=3)
    print('%s  %d bet  %d KB' % (name.name, out.page_count, name.stat().st_size // 1024))

for f in HERE.glob('_print-*.html'): f.unlink()
for f in HERE.glob('_part-*.pdf'): f.unlink()
(HERE / '_pdfjobs.json').unlink()
