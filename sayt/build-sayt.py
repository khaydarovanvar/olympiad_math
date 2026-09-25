# -*- coding: utf-8 -*-
"""Butun to‘plamni bitta saytga yig‘adi.

    python3 build-sayt.py

  sayt/index.html               bosh sahifa
  sayt/mavzular.html            mavzular xaritasi (savollar/ dan)
  sayt/savollar.html            o‘tgan yillar savollari — 239 tasi, filtr bilan
  sayt/sonlar-nazariyasi.html   maʼlumotnoma (dars/ dan)
  sayt/geometriya.html          maʼlumotnoma (dars/ dan)
  sayt/assets/                  katex + sayt uslublari (bir marta, hamma sahifaga)
  sayt/yuklab/                  PDF fayllar

Maʼlumotnoma sahifalari o‘z yasovchilari bilan yasaladi; bu yerda ulardan
faqat ichiga solingan KaTeX olib tashlanadi (umumiy assetsga almashtiriladi)
va tepasiga sayt menyusi qo‘yiladi.
"""
import html as H
import importlib.util, pathlib, re, shutil, subprocess, sys
from collections import Counter, defaultdict

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent
OUT = HERE
ASSETS = OUT / 'assets'
YUK = OUT / 'yuklab'
ASSETS.mkdir(exist_ok=True); YUK.mkdir(exist_ok=True)

KATEX_CSS = (ROOT / 'reja/katex-inline.css').read_text(encoding='utf-8')
KATEX_JS = (ROOT / 'site/assets/vendor/katex/katex.min.js').read_text(encoding='utf-8')


def load(path, name):
    spec = importlib.util.spec_from_file_location(name, ROOT / path)
    mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)
    return mod


MV = load('savollar/mavzular-data.py', 'mv')
SAV = load('reja/savollar-data.py', 'sav')

T = lambda uz, ru: (uz, ru)
DISP = re.compile(r'\$\$(.+?)\$\$', re.S)
MATH = re.compile(r'\$(.+?)\$', re.S)


def M(t):
    t = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', t, flags=re.S)
    # $$...$$ oldin, aks holda ichki $...$ uni oʻrtasidan kesadi
    t = DISP.sub(lambda m: '<span class="k kdisp">%s</span>' % H.escape(m.group(1)), t)
    t = MATH.sub(lambda m: '<span class="k">%s</span>' % H.escape(m.group(1)), t)
    return re.sub(r'(?<!\*)\*([^*]+?)\*(?!\*)', r'<i>\1</i>', t, flags=re.S)


def L(pair, tag='span'):
    uz, ru = pair
    return ('<%s data-l="uz">%s</%s><%s data-l="ru">%s</%s>'
            % (tag, M(uz), tag, tag, M(ru), tag))


# ------------------------------------------------------------------- hisob --
SUB = {}
for t in MV.MAVZULAR:
    for b in t['bolim']:
        SUB[b['kod']] = (t, b)
TOTAL = len(MV.SAVOLLAR)
BY_TOPIC = Counter(SUB[q['sub']][0]['kod'] for q in MV.SAVOLLAR)
GRADE_TOTAL = Counter(q['sinf'] for q in MV.SAVOLLAR)
TOPIC_ORDER = sorted(MV.MAVZULAR, key=lambda t: -BY_TOPIC[t['kod']])
VAR_Q = defaultdict(list)
for q in MV.SAVOLLAR:
    VAR_Q[(q['sinf'], q['paper'])].append(q)
for k in VAR_Q:
    VAR_Q[k].sort(key=lambda q: q['n'])
TRANSCRIBED = sum(1 for q in MV.SAVOLLAR if (q['paper'], q['sinf'], q['n']) in SAV.q)

PAGES = [
 ('index.html', T('Bosh sahifa', 'Главная')),
 ('savollar.html', T('Savollar', 'Задачи')),
 ('mavzular.html', T('Mavzular', 'Темы')),
 ('sonlar-nazariyasi.html', T('Sonlar nazariyasi', 'Теория чисел')),
 ('geometriya.html', T('Geometriya', 'Геометрия')),
]


def nav(active):
    links = ''.join(
      '<a href="%s"%s>%s</a>' % (f, ' class="on"' if f == active else '', L(nm))
      for f, nm in PAGES)
    return ('<nav class="sitenav"><div class="nv"><a class="brand" href="index.html">'
            '<b>Olimpiada</b><span>9–11</span></a><div class="lnk">%s</div>'
            '<div class="lang" role="group">'
            '<button type="button" data-set="uz">UZ</button>'
            '<button type="button" data-set="ru">RU</button></div></div></nav>'
            % links)


HEAD = ('<meta charset="utf-8">'
        '<meta name="viewport" content="width=device-width,initial-scale=1">'
        '<link rel="preconnect" href="https://fonts.googleapis.com">'
        '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?'
        'family=Archivo:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&'
        'family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap">'
        '<link rel="stylesheet" href="assets/katex.css">'
        '<link rel="stylesheet" href="assets/site.css">')

FOOT = ('<footer class="sitefoot"><p>%s</p><p class="fsrc">%s</p></footer>'
        % (L(('Anvarbek Khaydarov · matematika oʻqituvchisi',
              'Анварбек Хайдаров · учитель математики')),
           L(('Manba: 9, 10 va 11-sinf tuman (shahar) bosqichi variantlari — '
              '2024 va 2025/26.',
              'Источник: варианты районного (городского) этапа 9, 10 и 11 '
              'классов — 2024 и 2025/26.'))))

SCRIPT = ('<script src="assets/katex.js"></script>'
          '<script src="assets/sayt.js"></script>')


def page(name, title, body, cls=''):
    return ('<!doctype html><html lang="uz" data-l="uz"><head>%s<title>%s</title>'
            '</head><body class="%s">%s<div class="wrap">%s</div>%s%s</body></html>'
            % (HEAD, H.escape(title), cls, nav(name), body, FOOT, SCRIPT))


# ========================================================== bosh sahifa ==
def hub():
    stats = [(str(TOTAL), ('savol', 'задач')), ('8', ('variant', 'вариантов')),
             ('3', ('sinf', 'класса')), (str(len(SUB)), ('kichik mavzu', 'подтем'))]
    chips = ''.join('<li><b>%s</b>%s</li>' % (v, L(t)) for v, t in stats)

    cards = [
      ('savollar.html', 'nt', ('Oʻtgan yillar savollari', 'Задачи прошлых лет'),
       ('Sakkizta variantning hamma savoli — sinf va mavzu boʻyicha filtr '
        'bilan. %d tasining toʻliq matni yozilgan.' % TRANSCRIBED,
        'Все задачи восьми вариантов — с фильтром по классу и теме. У %d из '
        'них выписан полный текст.' % TRANSCRIBED),
       ('%d ta savol' % TOTAL, '%d задач' % TOTAL)),
      ('mavzular.html', 'alg', ('Mavzular xaritasi', 'Карта тем'),
       ('Qaysi mavzu qancha savol bergani, har bir kichik mavzuda nima '
        'soʻralgani va savolma-savol xarita.',
        'Сколько задач даёт каждая тема, что спрашивают в каждой подтеме и '
        'позадачная карта.'),
       ('8 mavzu · %d kichik mavzu' % len(SUB), '8 тем · %d подтем' % len(SUB))),
      ('sonlar-nazariyasi.html', 'geo', ('Sonlar nazariyasi', 'Теория чисел'),
       ('Toʻliq maʼlumotnoma: 38 ta taʼrif va teorema, har biri misol bilan, '
        'soʻngra 32 ta masala va batafsil yechim.',
        'Полный справочник: 38 определений и теорем, каждое с примером, затем '
        '32 задачи с подробными решениями.'),
       ('23,4 % savol', '23,4 % задач')),
      ('geometriya.html', 'trig', ('Geometriya', 'Геометрия'),
       ('41 ta band — chizmalar bilan, oʻn ikkitasi isbot bilan — va toʻrt '
        'darajadagi 32 ta masala.',
        '41 пункт — с чертежами, двенадцать с доказательствами — и 32 задачи '
        'четырёх уровней.'),
       ('18,4 % savol', '18,4 % задач')),
    ]
    cc = ''.join(
      '<a class="card" href="%s" style="--hue:var(--%s);--hue-bg:var(--%s-bg)">'
      '<h3>%s</h3><p>%s</p><span class="tag">%s</span></a>'
      % (href, hue, hue, L(nom), L(izoh), L(tag)) for href, hue, nom, izoh, tag in cards)

    top = BY_TOPIC[TOPIC_ORDER[0]['kod']]
    rows = ''.join(
      '<tr style="--hue:var(--%s)"><td class="nm">%s</td><td class="num">%d</td>'
      '<td class="pc">%.1f%%</td><td class="bar"><span style="width:%.1f%%"></span></td></tr>'
      % (t['hue'], L(t['nom']), BY_TOPIC[t['kod']], BY_TOPIC[t['kod']] / TOTAL * 100,
         BY_TOPIC[t['kod']] / top * 100) for t in TOPIC_ORDER)

    dl = [
      ('yuklab/Otgan-yillar-savollari-9-10-11.pdf',
       ('Oʻtgan yillar savollari — asl varaqalar', 'Задачи прошлых лет — оригиналы'),
       ('22 bet · 8 variant', '22 страницы · 8 вариантов')),
      ('yuklab/Mavzular-xaritasi-9-10-11-UZ-RU.pdf',
       ('Mavzular xaritasi', 'Карта тем'), ('31 bet · UZ+RU', '31 страница · UZ+RU')),
      ('yuklab/Sonlar-nazariyasi-9-10-11-UZ-RU.pdf',
       ('Sonlar nazariyasi', 'Теория чисел'), ('40 bet · UZ+RU', '40 страниц · UZ+RU')),
      ('yuklab/Geometriya-9-10-11-UZ-RU.pdf',
       ('Geometriya', 'Геометрия'), ('56 bet · UZ+RU', '56 страниц · UZ+RU')),
    ]
    dls = ''.join('<li><a href="%s" download><span class="fn">%s</span>'
                  '<span class="fm">%s</span></a></li>' % (h, L(n), L(m))
                  for h, n, m in dl)

    return ('<header class="hero"><p class="eyebrow">%s</p><h1>%s</h1>'
            '<p class="sub">%s</p><ul class="stats">%s</ul></header>'
            '<section class="cards">%s</section>'
            '<section class="blk"><h2>%s</h2><table class="ov">%s</table>'
            '<p class="note">%s</p></section>'
            '<section class="blk"><h2>%s</h2><ul class="dl">%s</ul></section>'
            % (L(('Tuman (shahar) bosqichiga tayyorgarlik',
                  'Подготовка к районному (городскому) этапу')),
               L(('Olimpiada matematikasi · 9–11-sinf',
                  'Олимпиадная математика · 9–11 классы')),
               L(('Oʻtgan yillar variantlari oʻqib chiqilib mavzuga ajratildi, '
                  'va eng koʻp savol beradigan ikkita mavzu uchun toʻliq '
                  'maʼlumotnoma yozildi. Hammasi oʻzbekcha va ruscha.',
                  'Варианты прошлых лет разобраны по темам, а для двух самых '
                  'частых тем написаны полные справочники. Всё на узбекском и '
                  'русском.')),
               chips, cc,
               L(('Mavzular ulushi', 'Доля тем')), rows,
               L(('Sanoq qoidasi: savol qaysi koʻnikma bilan yechilsa, oʻsha '
                  'mavzuga kiritilgan. Toʻliq izoh — mavzular sahifasida.',
                  'Правило подсчёта: задача отнесена к теме того приёма, '
                  'которым решается. Подробнее — на странице тем.')),
               L(('Yuklab olish', 'Скачать')), dls))


# ===================================================== savollar sahifasi ==
def savol_matni(q):
    key = (q['paper'], q['sinf'], q['n'])
    return SAV.q.get(key)


def savollar():
    fil_sinf = ''.join('<button type="button" data-f="sinf" data-v="%s">%s</button>'
                       % (v, lab) for v, lab in
                       [('all', L(('Hammasi', 'Все'))), ('9', '9'),
                        ('10', '10'), ('11', '11')])
    fm = [('all', ('Hamma mavzu', 'Все темы'), 'rev')] + \
         [(t['kod'], t['nom'], t['hue']) for t in TOPIC_ORDER]
    fil_mav = ''.join('<button type="button" data-f="mavzu" data-v="%s" '
                      'style="--hue:var(--%s)">%s<em>%s</em></button>'
                      % (k, hue, L(nom), '' if k == 'all' else BY_TOPIC[k])
                      for k, nom, hue in fm)

    out = []
    for v in MV.VARIANTLAR:
        qs = VAR_Q[(v['sinf'], v['paper'])]
        cnt = Counter(SUB[q['sub']][0]['kod'] for q in qs)
        strip = ''.join('<span class="sv" style="--hue:var(--%s)">%s %d</span>'
                        % (t['hue'], L(t['nom']), cnt[t['kod']])
                        for t in TOPIC_ORDER if cnt[t['kod']])
        cards = ''
        for q in qs:
            t, b = SUB[q['sub']]
            full = savol_matni(q)
            body = ('<div class="qfull">%s</div>' % L(full)) if full else ''
            cards += ('<li class="qcard" data-sinf="%d" data-mavzu="%s" '
                      'style="--hue:var(--%s);--hue-bg:var(--%s-bg)">'
                      '<div class="qh"><span class="qn">%d</span>'
                      '<span class="qt">%s</span></div>'
                      '<div class="qs">%s</div>%s</li>'
                      % (q['sinf'], t['kod'], t['hue'], t['hue'], q['n'],
                         L(b['nom']), L(q['nima']), body))
        out.append('<section class="variant" data-sinf="%d"><div class="vh">'
                   '<h2>%s</h2><span class="chip">%d %s</span></div>'
                   '<div class="strip">%s</div><ul class="qlist">%s</ul></section>'
                   % (v['sinf'], H.escape(v['kod'].replace('·', '-sinf · ')),
                      len(qs), L(('savol', 'задач')), strip, cards))

    return ('<header class="hero small"><p class="eyebrow">%s</p><h1>%s</h1>'
            '<p class="sub">%s</p>'
            '<p class="note"><a href="yuklab/Otgan-yillar-savollari-9-10-11.pdf" '
            'download>%s</a> — %s</p></header>'
            '<div class="filters"><div class="frow"><span class="fl">%s</span>'
            '<div class="fbtns" data-group="sinf">%s</div></div>'
            '<div class="frow"><span class="fl">%s</span>'
            '<div class="fbtns wrap2" data-group="mavzu">%s</div></div>'
            '<p class="fcount"><b id="shown">%d</b> / %d %s</p></div>%s'
            % (L(('8 ta variant · 2024 va 2025/26', '8 вариантов · 2024 и 2025/26')),
               L(('Oʻtgan yillar savollari', 'Задачи прошлых лет')),
               L(('Har bir savol qaysi mavzudan ekani yozilgan. Toʻliq matni '
                  'yozib olingan %d ta savol shu yerda toʻliq koʻrinadi; '
                  'qolganlari uchun nima soʻralgani bir qatorda berilgan.'
                  % TRANSCRIBED,
                  'Для каждой задачи указана тема. %d задач приведены '
                  'полностью; для остальных в одну строку сказано, что '
                  'спрашивают.' % TRANSCRIBED)),
               L(('Asl varaqalar (PDF)', 'Оригиналы (PDF)')),
               L(('savollar aynan variantdagidek, 22 bet',
                  'задачи ровно как в вариантах, 22 страницы')),
               L(('Sinf', 'Класс')), fil_sinf,
               L(('Mavzu', 'Тема')), fil_mav,
               TOTAL, TOTAL, L(('savol', 'задач')), ''.join(out)))


# =============================================================== uslublar ==
SITE_CSS = r"""
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
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:var(--ground);color:var(--ink);
  font-family:"Source Serif 4",Georgia,serif;font-size:13.5px;line-height:1.55}
a{color:inherit}
.k{font-size:1.02em}

/* menyu */
.sitenav{position:sticky;top:0;z-index:20;background:#fff;
  border-bottom:1px solid var(--rule)}
.nv{max-width:1000px;margin:0 auto;display:flex;align-items:center;gap:14px;
  padding:9px 20px}
.brand{display:flex;align-items:baseline;gap:6px;text-decoration:none;
  font-family:Archivo,sans-serif;font-size:15px;white-space:nowrap}
.brand span{font-family:"IBM Plex Mono",monospace;font-size:10px;color:var(--muted)}
.lnk{display:flex;gap:2px;flex-wrap:wrap;margin-left:6px}
.lnk a{font-family:"IBM Plex Mono",monospace;font-size:10.5px;letter-spacing:.04em;
  text-decoration:none;color:var(--muted);padding:5px 9px;border-radius:4px}
.lnk a:hover{background:var(--surface-2);color:var(--ink)}
.lnk a.on{background:var(--accent);color:#fff}
.sitenav .lang{margin-left:auto;display:flex;border:1px solid var(--rule);
  border-radius:4px;overflow:hidden}
.sitenav .lang button{font-family:"IBM Plex Mono",monospace;font-size:10px;
  padding:4px 8px;border:0;background:#fff;color:var(--muted);cursor:pointer}
.sitenav .lang button+button{border-left:1px solid var(--rule)}
:root[data-l="uz"] .sitenav .lang button[data-set="uz"],
:root[data-l="ru"] .sitenav .lang button[data-set="ru"]{background:var(--accent);color:#fff}

.wrap{max-width:1000px;margin:0 auto;background:#fff;padding:30px 30px 46px;
  min-height:70vh}

/* hero */
.hero{border-bottom:2px solid var(--ink);padding-bottom:14px}
.eyebrow{font-family:"IBM Plex Mono",monospace;font-size:9.5px;letter-spacing:.13em;
  text-transform:uppercase;margin:0;color:var(--accent)}
.hero h1{font-family:Archivo,sans-serif;font-size:34px;font-weight:700;
  letter-spacing:-.02em;margin:10px 0 0;line-height:1.06}
.hero.small h1{font-size:27px}
.hero .sub{margin:8px 0 0;color:var(--muted);font-size:14px;max-width:70ch}
.stats{list-style:none;display:flex;flex-wrap:wrap;gap:8px;padding:0;margin:14px 0 0}
.stats li{font-family:"IBM Plex Mono",monospace;font-size:10px;color:var(--muted);
  background:var(--surface-2);border:1px solid var(--rule-soft);padding:4px 9px;
  border-radius:3px}
.stats b{color:var(--accent);font-size:13px;margin-right:5px}

/* kartochkalar */
.cards{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:22px}
.card{display:block;text-decoration:none;border:1px solid var(--rule);
  border-top:3px solid var(--hue);background:var(--surface);padding:14px 16px}
.card:hover{background:var(--hue-bg)}
.card h3{font-family:Archivo,sans-serif;font-size:17px;margin:0;color:var(--hue)}
.card p{margin:7px 0 0;color:var(--muted);font-size:12.5px}
.card .tag{display:inline-block;margin-top:9px;font-family:"IBM Plex Mono",monospace;
  font-size:9.5px;color:var(--hue);background:var(--hue-bg);padding:2px 7px;
  border-radius:3px}

.blk{margin-top:30px}
.blk>h2{font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:.14em;
  text-transform:uppercase;color:var(--muted);font-weight:500;margin:0 0 10px;
  padding-bottom:5px;border-bottom:1px solid var(--rule)}
.note{margin:12px 0 0;padding:9px 12px;background:var(--surface-2);
  border-left:2px solid var(--accent);font-size:12px;color:var(--muted)}
.note a{color:var(--accent)}

table.ov{border-collapse:collapse;width:100%}
.ov td{padding:6px 7px 6px 0;border-bottom:1px solid var(--rule-soft)}
.ov .nm{font-weight:600;color:var(--hue);width:36%}
.ov .num{text-align:right;font-family:"IBM Plex Mono",monospace;font-size:11.5px;width:46px}
.ov .pc{font-family:"IBM Plex Mono",monospace;font-size:11px;width:56px;
  text-align:right;color:var(--hue)}
.ov .bar span{display:block;height:7px;background:var(--hue)}

ul.dl{list-style:none;padding:0;margin:0;display:grid;
  grid-template-columns:repeat(2,1fr);gap:8px}
ul.dl a{display:flex;align-items:baseline;gap:10px;text-decoration:none;
  border:1px solid var(--rule);padding:9px 12px;background:var(--surface)}
ul.dl a:hover{background:var(--surface-2)}
.fn{font-weight:600}
.fm{margin-left:auto;font-family:"IBM Plex Mono",monospace;font-size:9.5px;
  color:var(--muted);white-space:nowrap}

/* filtrlar */
.filters{margin-top:18px;padding:12px 14px;background:var(--surface-2);
  border:1px solid var(--rule-soft);position:sticky;top:41px;z-index:10}
.frow{display:flex;align-items:flex-start;gap:10px;margin-bottom:7px}
.fl{font-family:"IBM Plex Mono",monospace;font-size:9px;letter-spacing:.12em;
  text-transform:uppercase;color:var(--muted);padding-top:5px;min-width:44px}
.fbtns{display:flex;gap:4px;flex-wrap:wrap}
.fbtns button{font-family:"IBM Plex Mono",monospace;font-size:10px;padding:3px 8px;
  border:1px solid var(--rule);background:#fff;color:var(--muted);cursor:pointer;
  border-radius:3px;display:flex;align-items:baseline;gap:5px}
.fbtns button em{font-style:normal;font-size:8.5px;opacity:.7}
.fbtns button:hover{border-color:var(--hue,var(--accent));color:var(--hue,var(--accent))}
.fbtns button.on{background:var(--hue,var(--accent));border-color:var(--hue,var(--accent));
  color:#fff}
.fcount{margin:4px 0 0;font-family:"IBM Plex Mono",monospace;font-size:10px;
  color:var(--muted)}

/* savollar */
.variant{margin-top:26px}
.vh{display:flex;align-items:baseline;gap:9px;border-bottom:1px solid var(--ink);
  padding-bottom:5px}
.vh h2{font-family:Archivo,sans-serif;font-size:17px;margin:0}
.vh .chip{margin-left:auto;font-family:"IBM Plex Mono",monospace;font-size:9.5px;
  color:var(--muted)}
.strip{display:flex;flex-wrap:wrap;gap:4px;margin:8px 0 10px}
.sv{font-family:"IBM Plex Mono",monospace;font-size:8.5px;color:#fff;
  background:var(--hue);padding:1px 6px;border-radius:2px}
ul.qlist{list-style:none;padding:0;margin:0;display:grid;
  grid-template-columns:repeat(2,1fr);gap:8px}
.qcard{border:1px solid var(--rule);border-left:3px solid var(--hue);
  padding:9px 12px;background:var(--surface)}
.qh{display:flex;align-items:baseline;gap:8px}
.qn{font-family:"IBM Plex Mono",monospace;font-size:13px;color:var(--hue)}
.qt{font-family:"IBM Plex Mono",monospace;font-size:9px;letter-spacing:.06em;
  color:var(--hue);background:var(--hue-bg);padding:1px 6px;border-radius:2px}
.qs{margin-top:5px;color:var(--muted);font-size:12.5px}
.qfull{margin-top:7px;padding-top:7px;border-top:1px dotted var(--rule);
  overflow-x:auto}
.kdisp{display:block;margin:7px 0;text-align:center}
.qcard.off{display:none}
.variant.off{display:none}

.sitefoot{max-width:1000px;margin:0 auto;padding:18px 30px 34px;color:var(--muted);
  font-size:11.5px}
.sitefoot p{margin:0 0 4px}
.sitefoot .fsrc{font-family:"IBM Plex Mono",monospace;font-size:10px}

/* uzun formulalar telefonda sahifani kengaytirmasin */
.qcard,.card,ul.dl>li{min-width:0}
.qs,.qfull{max-width:100%}

@media (max-width:760px){
  .wrap{padding:18px 14px 30px}
  .cards,ul.dl,ul.qlist{grid-template-columns:minmax(0,1fr)}
  .hero h1{font-size:25px}
  .nv{padding:8px 14px;gap:8px;flex-wrap:wrap}
  .lnk{margin-left:0;order:3;width:100%}
  .sitenav .lang{margin-left:auto}
  .filters{position:static}
  .qs,.qfull,.note,.hero .sub{overflow-x:auto}
  .ov .bar{display:none}
}
"""

SITE_JS = r"""
(function () {
  function setLang(v) {
    document.documentElement.dataset.l = v;
    try { localStorage.setItem('sayt-lang', v); } catch (e) {}
  }
  try {
    var s = localStorage.getItem('sayt-lang');
    if (s) document.documentElement.dataset.l = s;
  } catch (e) {}
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.set); });
  });

  document.querySelectorAll('.k').forEach(function (e) {
    try {
      katex.render(e.textContent, e, {
        throwOnError: false, displayMode: e.classList.contains('kdisp')
      });
    } catch (x) {}
  });

  // savollar sahifasining filtri
  var state = { sinf: 'all', mavzu: 'all' };
  var cards = document.querySelectorAll('.qcard');
  if (!cards.length) return;
  var shown = document.getElementById('shown');

  function apply() {
    var n = 0;
    cards.forEach(function (c) {
      var ok = (state.sinf === 'all' || c.dataset.sinf === state.sinf) &&
               (state.mavzu === 'all' || c.dataset.mavzu === state.mavzu);
      c.classList.toggle('off', !ok);
      if (ok) n++;
    });
    document.querySelectorAll('.variant').forEach(function (v) {
      v.classList.toggle('off', !v.querySelector('.qcard:not(.off)'));
    });
    if (shown) shown.textContent = n;
  }

  document.querySelectorAll('.fbtns button').forEach(function (b) {
    b.addEventListener('click', function () {
      state[b.dataset.f] = b.dataset.v;
      document.querySelectorAll('.fbtns button[data-f="' + b.dataset.f + '"]')
        .forEach(function (o) { o.classList.toggle('on', o.dataset.v === b.dataset.v); });
      apply();
    });
  });
  document.querySelectorAll('.fbtns button[data-v="all"]')
    .forEach(function (b) { b.classList.add('on'); });
  apply();
})();
"""


# ======================================================== sahifalarni yozish ==
def strip_inline_katex(html, page_name):
    """Yasovchilar KaTeX ni ichiga soladi; saytda u umumiy fayldan olinadi."""
    css_block = '<style>%s</style>' % KATEX_CSS
    js_block = '<script>%s</script>' % KATEX_JS
    assert css_block in html, 'KaTeX CSS topilmadi: ' + page_name
    assert js_block in html, 'KaTeX JS topilmadi: ' + page_name
    html = html.replace(css_block, '<link rel="stylesheet" href="assets/katex.css">')
    html = html.replace(js_block, '<script src="assets/katex.js"></script>')
    # sayt uslubi va menyu
    html = html.replace('</head>', '<link rel="stylesheet" href="assets/ref.css"></head>', 1)
    html = html.replace('<body>', '<body>' + nav(page_name), 1)
    html = html.replace('</body>', FOOT + '</body>', 1)
    # bitta til kaliti butun sayt uchun
    html = html.replace('"nz-lang"', '"sayt-lang"').replace('"mv-lang"', '"sayt-lang"')
    return html


REF_CSS = r"""
/* maʼlumotnoma sahifalarini sayt ramkasiga moslash */
.sitenav{position:sticky;top:0;z-index:20;background:#fff;
  border-bottom:1px solid var(--rule);font-family:"Source Serif 4",Georgia,serif}
.nv{max-width:1000px;margin:0 auto;display:flex;align-items:center;gap:14px;
  padding:9px 20px}
.brand{display:flex;align-items:baseline;gap:6px;text-decoration:none;
  font-family:Archivo,sans-serif;font-size:15px;white-space:nowrap;color:var(--ink)}
.brand span{font-family:"IBM Plex Mono",monospace;font-size:10px;color:var(--muted)}
.lnk{display:flex;gap:2px;flex-wrap:wrap;margin-left:6px}
.lnk a{font-family:"IBM Plex Mono",monospace;font-size:10.5px;text-decoration:none;
  color:var(--muted);padding:5px 9px;border-radius:4px}
.lnk a:hover{background:var(--surface-2);color:var(--ink)}
.lnk a.on{background:var(--accent);color:#fff}
.sitenav .lang{margin-left:auto;display:flex;border:1px solid var(--rule);
  border-radius:4px;overflow:hidden}
.sitenav .lang button{font-family:"IBM Plex Mono",monospace;font-size:10px;
  padding:4px 8px;border:0;background:#fff;color:var(--muted);cursor:pointer}
.sitenav .lang button+button{border-left:1px solid var(--rule)}
:root[data-l="uz"] .sitenav .lang button[data-set="uz"],
:root[data-l="ru"] .sitenav .lang button[data-set="ru"]{background:var(--accent);color:#fff}
.mast .lang{display:none}          /* tilni almashtirish endi menyuda */
.wrap{max-width:1000px}
.sitefoot{max-width:1000px;margin:0 auto;padding:18px 30px 34px;color:var(--muted);
  font-size:11.5px;font-family:"Source Serif 4",Georgia,serif}
.sitefoot p{margin:0 0 4px}
.sitefoot .fsrc{font-family:"IBM Plex Mono",monospace;font-size:10px}
@media print{.sitenav,.sitefoot{display:none}}
@media (max-width:760px){
  .nv{padding:8px 14px;gap:8px;flex-wrap:wrap}
  .lnk{margin-left:0;order:3;width:100%}
  .sitenav .lang{margin-left:auto}
  /* KaTeX satr ichida sinmaydi — shuning uchun blokni surib koʻrish mumkin */
  .bayon,.misol,.isbot,.qq,.body,.ans,.q,.izoh,.tnote,.masl,.vt td{overflow-x:auto}
  .it,.sol,.kb,ol.qs>li{min-width:0}
  table.ov,table.pr,table.vt{display:block;overflow-x:auto}
}
"""

# 1. maʼlumotnomalar va mavzular xaritasini qayta yigʻamiz
subprocess.run([sys.executable, str(ROOT / 'dars/build-nazariya.py'),
                'nazariya-data.py', 'Sonlar-nazariyasi-9-10-11'],
               cwd=str(ROOT / 'dars'), check=True, stdout=subprocess.DEVNULL)
subprocess.run([sys.executable, str(ROOT / 'dars/build-nazariya.py'),
                'geometriya-data.py', 'Geometriya-9-10-11'],
               cwd=str(ROOT / 'dars'), check=True, stdout=subprocess.DEVNULL)
subprocess.run([sys.executable, str(ROOT / 'savollar/build-mavzular.py'),
                'mavzular-data.py', 'Mavzular-xaritasi-9-10-11'],
               cwd=str(ROOT / 'savollar'), check=True, stdout=subprocess.DEVNULL)

SRC = {
 'sonlar-nazariyasi.html': ROOT / 'dars/Sonlar-nazariyasi-9-10-11.html',
 'geometriya.html': ROOT / 'dars/Geometriya-9-10-11.html',
 'mavzular.html': ROOT / 'savollar/Mavzular-xaritasi-9-10-11.html',
}
for name, src in SRC.items():
    (OUT / name).write_text(
        strip_inline_katex(src.read_text(encoding='utf-8'), name), encoding='utf-8')

(OUT / 'index.html').write_text(
    page('index.html', 'Olimpiada matematikasi · 9–11-sinf', hub()), encoding='utf-8')
(OUT / 'savollar.html').write_text(
    page('savollar.html', 'Oʻtgan yillar savollari · 9–11-sinf', savollar()),
    encoding='utf-8')

(ASSETS / 'katex.css').write_text(KATEX_CSS, encoding='utf-8')
(ASSETS / 'katex.js').write_text(KATEX_JS, encoding='utf-8')
(ASSETS / 'site.css').write_text(SITE_CSS, encoding='utf-8')
(ASSETS / 'ref.css').write_text(REF_CSS, encoding='utf-8')
(ASSETS / 'sayt.js').write_text(SITE_JS, encoding='utf-8')

for src in (ROOT / 'savollar/Otgan-yillar-savollari-9-10-11.pdf',
            ROOT / 'savollar/Mavzular-xaritasi-9-10-11-UZ-RU.pdf',
            ROOT / 'dars/Sonlar-nazariyasi-9-10-11-UZ-RU.pdf',
            ROOT / 'dars/Geometriya-9-10-11-UZ-RU.pdf'):
    shutil.copy2(src, YUK / src.name)

total = 0
for f in sorted(OUT.rglob('*')):
    if f.is_file() and f.suffix in ('.html', '.css', '.js', '.pdf'):
        total += f.stat().st_size
        print('%-52s %6d KB' % (f.relative_to(OUT), f.stat().st_size // 1024))
print('%-52s %6d KB' % ('JAMI', total // 1024))
