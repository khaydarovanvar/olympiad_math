# -*- coding: utf-8 -*-
"""Every past paper we hold, bound into one printable PDF.

The pages are the originals, not a re-typesetting: exact wording, exact
figures. What the script does is trim the browser print header and footer off
the pages that were saved from a web page, put everything on one A4 sheet size,
stamp a running label in the bottom margin, and add a cover, a contents page
and PDF bookmarks.

    python3 build.py
"""
import pathlib, subprocess, sys
import pymupdf

HERE = pathlib.Path(__file__).resolve().parent
SRC = HERE / 'manba'
A4 = pymupdf.paper_rect('a4')
BOX = pymupdf.Rect(34, 30, A4.x1 - 34, A4.y1 - 46)   # content area; the rest is margin

T = lambda uz, ru: (uz, ru)

# Each paper: where its pages come from, and the facts its own cover states.
PAPERS = [
 dict(sinf=9, yil='2024', pdf='g09-2024.pdf', pages=[0, 1],
      format=T('1–10: 0,9 ball · 11–20: 1,5 · 21–30: 2,6 — 21–30 ochiq javobli',
               '1–10: 0,9 балла · 11–20: 1,5 · 21–30: 2,6 — 21–30 с открытым ответом')),
 dict(sinf=9, yil='2025/26-A', pdf='g09-2526a.pdf', pages=[2, 3, 4], crop=True,
      format=T('1–20 yopiq (A–D) · 21–30 ochiq javobli',
               '1–20 закрытые (A–D) · 21–30 с открытым ответом')),
 dict(sinf=9, yil='2025/26-B', images=['g09-2526b-p1.jpg', 'g09-2526b-p2.jpg'],
      format=T('1–30 yopiq (A–D)', '1–30 закрытые (A–D)'),
      izoh=T('Qoʻlda 3 sahifa bor, 4-sahifasi yoʻq — 30-savol tushib qolgan.',
             'В наличии 3 страницы, 4-й нет — задача 30 отсутствует.')),

 dict(sinf=10, yil='2024', pdf='g10-2024.pdf', pages=[0, 1],
      format=T('1–10: 0,9 ball · 11–20: 1,5 · 21–30: 2,6 — 21–30 ochiq javobli',
               '1–10: 0,9 балла · 11–20: 1,5 · 21–30: 2,6 — 21–30 с открытым ответом')),
 dict(sinf=10, yil='2025/26-A', pdf='g10-2526a.pdf', pages=[2, 3, 4], crop=True,
      format=T('1–20 yopiq (A–D) · 21–30 ochiq javobli',
               '1–20 закрытые (A–D) · 21–30 с открытым ответом')),
 dict(sinf=10, yil='2025/26-B',
      images=['g10-2526b-p1.jpg', 'g10-2526b-p2.jpg', 'g10-2526b-p3.jpg'],
      format=T('1–30 yopiq (A–D)', '1–30 закрытые (A–D)')),

 dict(sinf=11, yil='2024', pdf='g11-2024.pdf', pages=[0, 1],
      format=T('1–10: 0,9 ball · 11–20: 1,5 · 21–30: 2,6 — 21–30 ochiq javobli',
               '1–10: 0,9 балла · 11–20: 1,5 · 21–30: 2,6 — 21–30 с открытым ответом')),
 dict(sinf=11, yil='2025/26-A', pdf='g11-2526a.pdf', pages=[2, 3, 4], crop=True,
      format=T('1–20 yopiq (A–D) · 21–30 ochiq javobli',
               '1–20 закрытые (A–D) · 21–30 с открытым ответом')),
]

# The web printouts carry a date/title line at the top and a URL plus page
# number at the foot; both sit outside this band, so clipping to it drops them.
WEB_CLIP = pymupdf.Rect(0, 28, 612, 766)


def fit(box, w, h):
    """the largest rect inside box with the source's proportions, centred"""
    s = min(box.width / w, box.height / h)
    w, h = w * s, h * s
    x = box.x0 + (box.width - w) / 2
    y = box.y0 + (box.height - h) / 2
    return pymupdf.Rect(x, y, x + w, y + h)


def stamp(page, text):
    page.insert_text((34, A4.y1 - 26), text, fontname='helv', fontsize=7.5,
                     color=(0.35, 0.42, 0.46))


# ---- front matter, typeset like the rest of the material --------------------
def front_matter(counts):
    rows = []
    for p, first in zip(PAPERS, counts):
        izoh = ('<p class="izoh"><span data-l="uz">%s</span>'
                '<span data-l="ru">%s</span></p>' % p['izoh']) if p.get('izoh') else ''
        rows.append(
          '<li><span class="n">%d-sinf</span><span class="y">%s</span>'
          '<span class="f"><span data-l="uz">%s</span><span data-l="ru">%s</span>%s</span>'
          '<span class="p">%d</span></li>'
          % (p['sinf'], p['yil'], p['format'][0], p['format'][1], izoh, first))
    return TEMPLATE % {'rows': ''.join(rows), 'total': sum(
        len(p.get('pages') or p.get('images')) for p in PAPERS)}


TEMPLATE = r"""<!doctype html><html lang="uz"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap">
<style>
@page{size:A4;margin:0}
:root{--ink:#0f1a21;--muted:#5a6b76;--rule:#d5dde2;--accent:#0f5c72;--soft:#e0edf1}
*{box-sizing:border-box}
body{margin:0;font-family:"Source Serif 4",Georgia,serif;color:var(--ink);background:#fff}
section{width:210mm;height:297mm;padding:26mm 20mm 20mm;display:flex;flex-direction:column}
.eyebrow{font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:.17em;
  text-transform:uppercase;color:var(--accent);margin:0}
h1{font-family:Archivo,sans-serif;font-size:37px;line-height:1.08;letter-spacing:-.02em;
  margin:12px 0 0;text-wrap:balance}
.sub{font-size:15px;color:var(--muted);margin:12px 0 0;max-width:46ch}
.sub.ru{margin-top:7px;opacity:.78}
.ru-title{font-family:Archivo,sans-serif;font-size:17px;font-weight:500;
  color:var(--muted);margin:7px 0 0}
.rule{height:2px;background:var(--ink);margin:18px 0 0}
.facts{list-style:none;padding:0;margin:26px 0 0;font-family:"IBM Plex Mono",monospace;
  font-size:11.5px;color:var(--muted)}
.facts li{padding:5px 0;border-bottom:1px solid var(--rule)}
.facts b{color:var(--ink)}
.by{margin-top:auto;font-family:"IBM Plex Mono",monospace;font-size:10px;
  letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
h2{font-family:Archivo,sans-serif;font-size:23px;margin:0;letter-spacing:-.01em}
.toc{list-style:none;padding:0;margin:20px 0 0}
.toc li{display:grid;grid-template-columns:62px 92px 1fr 34px;gap:10px;align-items:baseline;
  padding:11px 0;border-bottom:1px solid var(--rule)}
.toc .n{font-family:Archivo,sans-serif;font-weight:700;font-size:15px}
.toc .y{font-family:"IBM Plex Mono",monospace;font-size:11.5px;color:var(--accent);
  background:var(--soft);border-radius:2px;padding:2px 6px;justify-self:start}
.toc .f{font-size:13px;color:var(--muted)}
.toc .p{font-family:"IBM Plex Mono",monospace;font-size:12px;text-align:right;color:var(--ink)}
.izoh{margin:4px 0 0;font-size:12px;color:#8a3a52}
.f [data-l],.izoh [data-l]{display:block}
.f [data-l="ru"],.izoh [data-l="ru"]{opacity:.72;font-size:.94em;margin-top:2px}
.note{margin-top:22px;padding:12px 14px;background:#f5f7f9;border-left:2px solid var(--accent);
  font-size:13px;color:var(--muted)}
.note b{color:var(--ink)}
</style></head><body>

<section>
  <p class="eyebrow">Fan olimpiadalari · tuman (shahar) bosqichi</p>
  <h1>Oʻtgan yillar savollari<br>9-, 10- va 11-sinf</h1>
  <p class="ru-title">Задачи прошлых лет · 9, 10 и 11 классы</p>
  <p class="sub">Qoʻlimizdagi barcha variantlar bitta faylda — asl sahifalari
  bilan, qayta terilmagan. Savollar matni ham, chizmalari ham original.</p>
  <p class="sub ru">Все имеющиеся варианты в одном файле — оригинальные страницы,
  без перенабора. И текст задач, и чертежи — подлинные.</p>
  <div class="rule"></div>
  <ul class="facts">
    <li><b>8</b> ta variant · <b>%(total)d</b> sahifa savol</li>
    <li>2024-yil · 2025/26 tuman bosqichi (A va B variantlari)</li>
    <li>Har bir variant: <b>30</b> savol · <b>90</b> daqiqa · <b>50</b> ball</li>
  </ul>
  <p class="by">Toʻplovchi: Anvarbek Khaydarov</p>
</section>

<section>
  <p class="eyebrow">Mundarija · Содержание</p>
  <h2>Variantlar</h2>
  <ul class="toc">%(rows)s</ul>
  <p class="note"><b>Eslatma.</b> 2025/26-A va 2025/26-B — oʻsha tuman bosqichining
  ikki xil varianti: A da 20 ta yopiq va 10 ta ochiq savol, B da esa 30 tasi ham
  yopiq. Ikkalasining muqovasida ham 2025–2026-oʻquv yili yozilgan.
  Javoblar va toʻliq yechimlar alohida fayllarda:
  <b>Matematika-9/10/11-yechimlar-UZ-RU.pdf</b>.</p>
</section>
</body></html>"""


# ---- assemble ---------------------------------------------------------------
# first pass: where each paper starts, so the contents page can print page numbers
FRONT = 2
first_pages, n = [], FRONT + 1
for p in PAPERS:
    first_pages.append(n)
    n += len(p.get('pages') or p.get('images'))

import json
html = HERE / '_front.html'
html.write_text(front_matter(first_pages), encoding='utf-8')
jobs = HERE / '_front.json'
jobs.write_text(json.dumps([{'html': str(html), 'pdf': str(HERE / '_front.pdf')}]))
subprocess.run(['node', str(HERE.parent / 'reja/topdf.js'), str(jobs)], check=True)

out = pymupdf.open()
toc = [[1, 'Oʻtgan yillar savollari', 1], [1, 'Mundarija', 2]]
front = pymupdf.open(str(HERE / '_front.pdf'))
out.insert_pdf(front)

sinf_seen = set()
for p, first in zip(PAPERS, first_pages):
    if p['sinf'] not in sinf_seen:
        toc.append([1, '%d-sinf' % p['sinf'], first])
        sinf_seen.add(p['sinf'])
    toc.append([2, '%d-sinf · %s' % (p['sinf'], p['yil']), first])

    if p.get('pdf'):
        src = pymupdf.open(str(SRC / p['pdf']))
        clip = WEB_CLIP if p.get('crop') else None
        for k, pno in enumerate(p['pages'], 1):
            sp = src[pno]
            r = clip if clip else sp.rect
            page = out.new_page(width=A4.width, height=A4.height)
            page.show_pdf_page(fit(BOX, r.width, r.height), src, pno, clip=clip)
            stamp(page, '%d-SINF  ·  %s  ·  %d/%d'
                  % (p['sinf'], p['yil'], k, len(p['pages'])))
    else:
        for k, name in enumerate(p['images'], 1):
            im = pymupdf.Pixmap(str(SRC / name))
            page = out.new_page(width=A4.width, height=A4.height)
            page.insert_image(fit(BOX, im.width, im.height), filename=str(SRC / name))
            stamp(page, '%d-SINF  ·  %s  ·  %d/%d'
                  % (p['sinf'], p['yil'], k, len(p['images'])))

out.set_toc(toc)
out.set_metadata({'title': 'Oʻtgan yillar savollari · 9-11-sinf',
                  'author': 'Anvarbek Khaydarov',
                  'subject': 'Matematika olimpiadasi, tuman (shahar) bosqichi'})
name = HERE / 'Otgan-yillar-savollari-9-10-11.pdf'
out.save(str(name), deflate=True, garbage=3)
print('%s  %d bet  %d KB' % (name.name, out.page_count, name.stat().st_size // 1024))
for f in (html, jobs, HERE / '_front.pdf'):
    f.unlink()
