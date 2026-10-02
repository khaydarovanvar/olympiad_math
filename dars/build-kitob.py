# -*- coding: utf-8 -*-
"""Sakkizta maʼlumotnomani tilga ajratib, ikkita kitobga yigʻadi.

    python3 build-kitob.py

Har bir <Mavzu>-UZ-RU.pdf avval toʻliq oʻzbekcha, keyin toʻliq ruscha
betlardan iborat. Chegara har bir bet matnidagi kirill harflarining ulushi
boʻyicha topiladi va toza ekani tekshiriladi — oʻzbekcha betlarda kirill
deyarli yoʻq, ruschada esa deyarli hamma harf kirill.

Natija: Olimpiada-9-10-11-UZ.pdf va Olimpiada-9-10-11-RU.pdf — har birida
muqova, mundarija, sakkizta mavzu va PDF xatcho‘plari.
"""
import html as H
import json, pathlib, re, subprocess, sys

import pymupdf

HERE = pathlib.Path(__file__).resolve().parent
CYR = re.compile(r'[Ѐ-ӿ]')

# fayl (shu papkaga nisbatan), hue, ulush, oʻzbekcha nom, ruscha nom.
# Mavzular xaritasi birinchi: u sakkizta mavzuning qaysi biri qancha savol
# berishini koʻrsatadi, shuning uchun qolganidan oldin oʻqiladi.
TOPICS = [
 ('../savollar/Mavzular-xaritasi-9-10-11-UZ-RU.pdf', '#0f5c72', '—',
  'Mavzular xaritasi',                'Карта тем'),
 ('Algebra-9-10-11-UZ-RU.pdf',          '#0f5c72', '28,0 %',
  'Algebra va ayniyatlar',            'Алгебра и тождества'),
 ('Sonlar-nazariyasi-9-10-11-UZ-RU.pdf', '#8a5a00', '23,4 %',
  'Sonlar nazariyasi',                'Теория чисел'),
 ('Geometriya-9-10-11-UZ-RU.pdf',       '#2a6a3f', '18,4 %',
  'Geometriya',                       'Геометрия'),
 ('Kombinatorika-9-10-11-UZ-RU.pdf',    '#8a3a52', '9,6 %',
  'Kombinatorika va ehtimollik',      'Комбинаторика и вероятность'),
 ('Ketma-ketliklar-9-10-11-UZ-RU.pdf',  '#8a3a52', '6,7 %',
  'Ketma-ketliklar',                  'Последовательности'),
 ('Funksiyalar-9-10-11-UZ-RU.pdf',      '#0f5c72', '5,9 %',
  'Funksiyalar',                      'Функции'),
 ('Trigonometriya-9-10-11-UZ-RU.pdf',   '#6b3e8f', '4,2 %',
  'Trigonometriya',                   'Тригонометрия'),
 ('Matn-masalalari-9-10-11-UZ-RU.pdf',  '#2a6a3f', '3,8 %',
  'Matn masalalari',                  'Текстовые задачи'),
]

CHROME = {
 'uz': dict(eyebrow='Olimpiadaga tayyorgarlik · tuman (shahar) bosqichi',
            title='Olimpiada matematikasi',
            sub='9, 10 va 11-sinf · sakkizta mavzu, bitta kitobda',
            lead='Sakkizta tuman bosqichi variantining 239 ta savoli oʻqib '
                 'chiqilib mavzuga ajratildi, soʻngra har bir mavzu uchun '
                 'toʻliq maʼlumotnoma yozildi: taʼrif va teoremalar — har biri '
                 'ishlangan misol bilan — va toʻrt darajadagi masalalar, '
                 'batafsil yechimi bilan.',
            stats=[('8', 'mavzu'), ('239', 'savol'), ('8', 'variant'),
                   ('3', 'sinf')],
            toc='Mundarija', col_topic='Mavzu', col_share='Savollar ulushi',
            col_page='Bet',
            who='Anvarbek Khaydarov · matematika oʻqituvchisi',
            src='Manba: 9, 10 va 11-sinf tuman (shahar) bosqichi variantlari — '
                '2024 va 2025/26.',
            note='Har bir son qiymati yozilishidan oldin kompyuterda '
                 'tekshirilgan.'),
 'ru': dict(eyebrow='Подготовка к олимпиаде · районный (городской) этап',
            title='Олимпиадная математика',
            sub='9, 10 и 11 классы · восемь тем в одной книге',
            lead='239 задач восьми вариантов районного этапа разобраны по '
                 'темам, и для каждой темы написан полный справочник: '
                 'определения и теоремы — каждое с разобранным примером — и '
                 'задачи четырёх уровней с подробными решениями.',
            stats=[('8', 'тем'), ('239', 'задач'), ('8', 'вариантов'),
                   ('3', 'класса')],
            toc='Содержание', col_topic='Тема', col_share='Доля задач',
            col_page='Стр.',
            who='Анварбек Хайдаров · учитель математики',
            src='Источник: варианты районного (городского) этапа 9, 10 и 11 '
                'классов — 2024 и 2025/26.',
            note='Каждое числовое значение проверено на компьютере до того, '
                 'как было записано.'),
}


def split_point(doc, name):
    """Birinchi ruscha bet. Chegara toza boʻlishi shart."""
    ratio = []
    for pg in doc:
        t = pg.get_text()
        letters = sum(1 for c in t if c.isalpha())
        ratio.append(len(CYR.findall(t)) / letters if letters else 0)
    first = next((i for i, r in enumerate(ratio) if r > 0.5), None)
    if first is None:
        sys.exit('%s: ruscha bet topilmadi' % name)
    if any(r > 0.1 for r in ratio[:first]) or any(r < 0.5 for r in ratio[first:]):
        sys.exit('%s: til chegarasi aniq emas — qoʻlda tekshiring' % name)
    return first


CSS = r"""
@page{size:A4;margin:0}
*{box-sizing:border-box}
body{margin:0;color:#0f1a21;font-family:"Source Serif 4",Georgia,serif;
  font-size:13.5px;line-height:1.55;-webkit-font-smoothing:antialiased}
.pg{width:210mm;height:297mm;padding:30mm 26mm;page-break-after:always;
  position:relative}
.eyebrow{font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:.14em;
  text-transform:uppercase;color:#0f5c72;margin:0}
h1{font-family:Archivo,sans-serif;font-size:46px;font-weight:700;letter-spacing:-.02em;
  line-height:1.04;margin:14px 0 0}
.sub{font-family:Archivo,sans-serif;font-size:17px;color:#5a6b76;margin:10px 0 0}
.rule{height:3px;background:#0f1a21;margin:20px 0 0}
.lead{margin:20px 0 0;font-size:14.5px;max-width:62ch}
ul.stats{list-style:none;display:flex;flex-wrap:wrap;gap:9px;padding:0;margin:26px 0 0}
ul.stats li{font-family:"IBM Plex Mono",monospace;font-size:11px;color:#5a6b76;
  background:#f5f7f9;border:1px solid #e4eaee;padding:6px 11px;border-radius:3px}
ul.stats b{color:#0f5c72;font-size:15px;margin-right:6px}
.foot{position:absolute;left:26mm;right:26mm;bottom:26mm;border-top:1px solid #d5dde2;
  padding-top:9px;color:#5a6b76;font-size:11.5px}
.foot .who{font-family:Archivo,sans-serif;color:#0f1a21;font-size:13px;margin:0 0 4px}
.foot p{margin:0}
.foot .src{font-family:"IBM Plex Mono",monospace;font-size:10px;margin-top:3px}
h2{font-family:"IBM Plex Mono",monospace;font-size:11px;letter-spacing:.15em;
  text-transform:uppercase;color:#5a6b76;font-weight:500;margin:0 0 14px;
  padding-bottom:6px;border-bottom:1px solid #0f1a21}
table.toc{border-collapse:collapse;width:100%}
table.toc th{font-family:"IBM Plex Mono",monospace;font-size:9.5px;letter-spacing:.1em;
  text-transform:uppercase;color:#8fa3ad;font-weight:500;text-align:right;
  padding:0 0 7px;border-bottom:1px solid #e4eaee}
table.toc th:first-child{text-align:left}
table.toc td{padding:11px 0;border-bottom:1px solid #eef2f5;vertical-align:baseline}
table.toc .nm{font-family:Archivo,sans-serif;font-size:16px;color:var(--hue)}
table.toc .nm i{display:inline-block;width:9px;height:9px;border-radius:50%;
  background:var(--hue);margin-right:9px}
table.toc .sh{font-family:"IBM Plex Mono",monospace;font-size:11.5px;color:#5a6b76;
  text-align:right;white-space:nowrap;width:22%}
table.toc .pp{font-family:"IBM Plex Mono",monospace;font-size:13px;color:#0f1a21;
  text-align:right;white-space:nowrap;width:16%}
.tnote{margin-top:16px;padding:9px 12px;background:#f5f7f9;border-left:2px solid #0f5c72;
  font-size:11.5px;color:#5a6b76}
"""


def front(lang, rows):
    c = CHROME[lang]
    stats = ''.join('<li><b>%s</b>%s</li>' % (v, H.escape(w)) for v, w in c['stats'])
    trs = ''.join(
      '<tr style="--hue:%s"><td class="nm"><i></i>%s</td>'
      '<td class="sh">%s</td><td class="pp">%d–%d</td></tr>'
      % (hue, H.escape(nm), H.escape(sh), a, b) for hue, nm, sh, a, b in rows)
    return ('<!doctype html><html lang="%s"><head><meta charset="utf-8">'
            '<title>%s</title><style>%s</style></head><body>'
            '<section class="pg"><p class="eyebrow">%s</p><h1>%s</h1>'
            '<p class="sub">%s</p><div class="rule"></div><p class="lead">%s</p>'
            '<ul class="stats">%s</ul>'
            '<div class="foot"><p class="who">%s</p><p>%s</p>'
            '<p class="src">%s</p></div></section>'
            '<section class="pg"><h2>%s</h2><table class="toc">'
            '<thead><tr><th>%s</th><th>%s</th><th>%s</th></tr></thead>'
            '<tbody>%s</tbody></table><p class="tnote">%s</p></section>'
            '</body></html>'
            % (lang, H.escape(c['title']), CSS, H.escape(c['eyebrow']),
               H.escape(c['title']), H.escape(c['sub']), H.escape(c['lead']),
               stats, H.escape(c['who']), H.escape(c['note']), H.escape(c['src']),
               H.escape(c['toc']), H.escape(c['col_topic']),
               H.escape(c['col_share']), H.escape(c['col_page']), trs,
               H.escape(c['src'])))


# ---- 1. har bir mavzuni ikkiga ajratamiz --------------------------------------
parts = []
for fn, hue, share, uz, ru in TOPICS:
    p = HERE / fn
    if not p.exists():
        sys.exit('topilmadi: %s' % fn)
    d = pymupdf.open(str(p))
    k = split_point(d, fn)
    parts.append(dict(doc=d, cut=k, hue=hue, share=share, uz=uz, ru=ru,
                      n={'uz': k, 'ru': d.page_count - k}))
    print('%-40s %3d bet  →  uz %3d  ru %3d'
          % (pathlib.Path(fn).name, d.page_count, k, d.page_count - k))

FRONT = 2   # muqova + mundarija

# ---- 2. har bir til uchun muqova, soʻng yigʻish -------------------------------
for lang, tag in (('uz', 'UZ'), ('ru', 'RU')):
    rows, at = [], FRONT + 1
    for pt in parts:
        n = pt['n'][lang]
        rows.append((pt['hue'], pt[lang], pt['share'], at, at + n - 1))
        at += n

    fh = HERE / ('_kitob-%s.html' % lang)
    fh.write_text(front(lang, rows), encoding='utf-8')
    jobs = HERE / '_kitob.json'
    jobs.write_text(json.dumps([{'html': str(fh),
                                 'pdf': str(HERE / ('_kitob-%s.pdf' % lang))}]))
    subprocess.run(['node', str(HERE.parent / 'reja/topdf.js'), str(jobs)], check=True)
    jobs.unlink()

    book = pymupdf.open()
    cover = pymupdf.open(str(HERE / ('_kitob-%s.pdf' % lang)))
    if cover.page_count != FRONT:
        sys.exit('muqova %d bet chiqdi, %d kutilgandi' % (cover.page_count, FRONT))
    book.insert_pdf(cover)
    toc = []
    for pt, row in zip(parts, rows):
        start = book.page_count + 1
        a = 0 if lang == 'uz' else pt['cut']
        b = pt['cut'] - 1 if lang == 'uz' else pt['doc'].page_count - 1
        book.insert_pdf(pt['doc'], from_page=a, to_page=b)
        toc.append([1, pt[lang], start])
        assert start == row[3], 'mundarija beti mos kelmadi: %s' % pt[lang]
    book.set_toc([[1, CHROME[lang]['toc'], 2]] + toc)

    name = HERE / ('Olimpiada-9-10-11-%s.pdf' % tag)
    book.save(str(name), deflate=True, garbage=3)
    print('%-40s %3d bet  %d KB' % (name.name, book.page_count,
                                    name.stat().st_size // 1024))

for f in HERE.glob('_kitob-*'):
    f.unlink()
