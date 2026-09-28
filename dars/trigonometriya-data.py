# -*- coding: utf-8 -*-
"""Trigonometriya — 9, 10 va 11-sinf uchun toʻliq maʼlumotnoma.

Sakkizta tuman bosqichi variantida trigonometriya savollarning 4,2 % ini
beradi (10 ta savol) va deyarli hammasi 10–11-sinf variantlarida. Savollar
ikki turga boʻlinadi: keltirish formulalari bilan sof hisob, va bitta
shartdan boshqa ifodani chiqarish. Ikkalasiga ham kerakli formulalar shu
yerda toʻliq keltirilgan.

Hamma son qiymati yozilishidan oldin kompyuterda tekshirilgan.

$...$ — KaTeX.
"""

T = lambda uz, ru: (uz, ru)

CHROME = dict(
 title=T('Trigonometriya · 9–11-sinf', 'Тригонометрия · 9–11 классы'),
 eyebrow=T('Olimpiadaga tayyorgarlik · tuman (shahar) bosqichi',
           'Подготовка к олимпиаде · районный (городской) этап'),
 h1=T('Trigonometriya', 'Тригонометрия'),
 sub=T('Birlik aylana, keltirish formulalari, asosiy ayniyatlar, qoʻshish va '
       'karrali burchak formulalari, soddalashtirish usullari — har biri '
       'ishlangan misol bilan. Soʻngra toʻrt darajadagi 26 ta masala va '
       'batafsil yechim; 10 tasi haqiqiy variantlardan.',
       'Единичная окружность, формулы приведения, основные тождества, формулы '
       'сложения и кратных углов, приёмы упрощения — каждое с разобранным '
       'примером. Затем 26 задач четырёх уровней с подробными решениями; '
       '10 задач вариантов разобраны здесь.'),
)


def I(tur, nom, bayon, misol, isbot=None, rasm=None):
    return dict(tur=tur, nom=nom, bayon=bayon, misol=misol, isbot=isbot, rasm=rasm)


TUR = {
 'tarif':   T('taʼrif', 'определение'),
 'teorema': T('teorema', 'теорема'),
 'xossa':   T('xossa', 'свойство'),
 'natija':  T('natija', 'следствие'),
 'usul':    T('usul', 'приём'),
 'formula': T('formula', 'формула'),
}

INK, ACC, SOFT = '#0f1a21', '#a34430', '#8fa3ad'


def FIG(vb, body, w=300):
    return ('<svg class="fig" viewBox="%s" width="%d" '
            'xmlns="http://www.w3.org/2000/svg" fill="none" stroke="%s" '
            'stroke-width="1.3" stroke-linejoin="round">%s</svg>'
            % (vb, w, INK, body))


def txt(x, y, s, fill=INK, size=12.5):
    return ('<text x="%s" y="%s" fill="%s" stroke="none" font-size="%s" '
            'font-family="Georgia,serif">%s</text>' % (x, y, fill, size, s))


# Birlik aylana — choraklardagi ishoralar
AYLANA = FIG('0 0 240 240',
 '<circle cx="120" cy="120" r="92" stroke="%s"/>' % SOFT +
 '<path d="M12 120H228M120 12V228" stroke="%s" stroke-width="1"/>' % SOFT +
 txt(150, 58, 'I: + + +', ACC, 12) +
 txt(38, 58, 'II: sin +', INK, 12) +
 txt(34, 196, 'III: tg +', INK, 12) +
 txt(150, 196, 'IV: cos +', INK, 12) +
 txt(206, 136, 'x', SOFT, 12) + txt(126, 24, 'y', SOFT, 12),
 260)

BOLIMLAR = []

# ============================================ A · Birlik aylana va qiymatlar ==
BOLIMLAR.append(dict(kod='A', hue='trig',
 nom=T('Birlik aylana va asosiy qiymatlar',
       'Единичная окружность и основные значения'),
 izoh=T('Variantlardagi yarim savol shu boʻlimdan hal boʻladi: burchakni '
        'birinchi chorakka keltirish va ishorani toʻgʻri qoʻyish.',
        'Половина задач вариантов решается этим разделом: привести угол к '
        'первой четверти и правильно поставить знак.'),
 items=[

 I('tarif', T('Birlik aylanadagi taʼrif', 'Определение на единичной окружности'),
   T('$M$ nuqta birlik aylanada $\\alpha$ burchakka mos kelsa, '
     '$\\cos\\alpha$ — uning abssissasi, $\\sin\\alpha$ — ordinatasi. '
     'Shundan $\\operatorname{tg}\\alpha=\\dfrac{\\sin\\alpha}{\\cos\\alpha}$, '
     '$\\operatorname{ctg}\\alpha=\\dfrac{\\cos\\alpha}{\\sin\\alpha}$.',
     'Если точка $M$ единичной окружности отвечает углу $\\alpha$, то '
     '$\\cos\\alpha$ — её абсцисса, $\\sin\\alpha$ — ордината. Отсюда '
     '$\\operatorname{tg}\\alpha=\\dfrac{\\sin\\alpha}{\\cos\\alpha}$ и '
     '$\\operatorname{ctg}\\alpha=\\dfrac{\\cos\\alpha}{\\sin\\alpha}$.'),
   T('Ishoralar choraklar boʻyicha: I da hammasi musbat, II da faqat '
     '$\\sin$, III da faqat $\\operatorname{tg}$ va '
     '$\\operatorname{ctg}$, IV da faqat $\\cos$.',
     'Знаки по четвертям: в I все положительны, во II — только $\\sin$, '
     'в III — только $\\operatorname{tg}$ и $\\operatorname{ctg}$, в IV — '
     'только $\\cos$.'),
   rasm=AYLANA),

 I('formula', T('Jadval qiymatlari', 'Табличные значения'),
   T('$$\\begin{array}{c|ccccc}'
     '\\alpha&0^\\circ&30^\\circ&45^\\circ&60^\\circ&90^\\circ\\\\\\hline'
     '\\sin&0&\\frac12&\\frac{\\sqrt2}{2}&\\frac{\\sqrt3}{2}&1\\\\'
     '\\cos&1&\\frac{\\sqrt3}{2}&\\frac{\\sqrt2}{2}&\\frac12&0\\\\'
     '\\operatorname{tg}&0&\\frac{\\sqrt3}{3}&1&\\sqrt3&-'
     '\\end{array}$$',
     '$$\\begin{array}{c|ccccc}'
     '\\alpha&0^\\circ&30^\\circ&45^\\circ&60^\\circ&90^\\circ\\\\\\hline'
     '\\sin&0&\\frac12&\\frac{\\sqrt2}{2}&\\frac{\\sqrt3}{2}&1\\\\'
     '\\cos&1&\\frac{\\sqrt3}{2}&\\frac{\\sqrt2}{2}&\\frac12&0\\\\'
     '\\operatorname{tg}&0&\\frac{\\sqrt3}{3}&1&\\sqrt3&-'
     '\\end{array}$$'),
   T('Radianda: $30^\\circ=\\dfrac{\\pi}{6}$, $45^\\circ=\\dfrac{\\pi}{4}$, '
     '$60^\\circ=\\dfrac{\\pi}{3}$, $90^\\circ=\\dfrac{\\pi}{2}$, '
     '$120^\\circ=\\dfrac{2\\pi}{3}$, $135^\\circ=\\dfrac{3\\pi}{4}$.',
     'В радианах: $30^\\circ=\\dfrac{\\pi}{6}$, '
     '$45^\\circ=\\dfrac{\\pi}{4}$, $60^\\circ=\\dfrac{\\pi}{3}$, '
     '$120^\\circ=\\dfrac{2\\pi}{3}$, $135^\\circ=\\dfrac{3\\pi}{4}$.')),

 I('xossa', T('Davriylik', 'Периодичность'),
   T('$\\sin$ va $\\cos$ ning davri $2\\pi$ ($360^\\circ$), '
     '$\\operatorname{tg}$ va $\\operatorname{ctg}$ niki $\\pi$ '
     '($180^\\circ$).',
     'Период $\\sin$ и $\\cos$ равен $2\\pi$ ($360^\\circ$), а '
     '$\\operatorname{tg}$ и $\\operatorname{ctg}$ — $\\pi$ '
     '($180^\\circ$).'),
   T('$2024^\\circ$ ni keltiramiz: $2024=5\\cdot360+224$, demak '
     '$2024^\\circ$ va $224^\\circ$ bir xil — bu uchinchi chorak, '
     '$\\cos<0$ (14-masala).',
     'Приведём $2024^\\circ$: $2024=5\\cdot360+224$, значит $2024^\\circ$ и '
     '$224^\\circ$ совпадают — это третья четверть, где $\\cos<0$ '
     '(задача 14).')),

 I('xossa', T('Juftlik va toqlik', 'Чётность и нечётность'),
   T('$\\cos(-\\alpha)=\\cos\\alpha$ — juft; '
     '$\\sin(-\\alpha)=-\\sin\\alpha$, '
     '$\\operatorname{tg}(-\\alpha)=-\\operatorname{tg}\\alpha$ — toq.',
     '$\\cos(-\\alpha)=\\cos\\alpha$ — чётная; '
     '$\\sin(-\\alpha)=-\\sin\\alpha$, '
     '$\\operatorname{tg}(-\\alpha)=-\\operatorname{tg}\\alpha$ — '
     'нечётные.'),
   T('Shu sababli $\\cos(-2024^\\circ)=\\cos2024^\\circ$ va '
     '$\\sin\\left(-\\dfrac{3\\pi}{4}\\right)=-\\dfrac{\\sqrt2}{2}$ '
     '(7 va 14-masalalar).',
     'Поэтому $\\cos(-2024^\\circ)=\\cos2024^\\circ$ и '
     '$\\sin\\left(-\\dfrac{3\\pi}{4}\\right)=-\\dfrac{\\sqrt2}{2}$ '
     '(задачи 7 и 14).')),

 I('formula', T('Chegaralar', 'Границы'),
   T('$-1\\le\\sin\\alpha\\le1$ va $-1\\le\\cos\\alpha\\le1$; '
     '$\\operatorname{tg}\\alpha$ esa har qanday haqiqiy qiymatni oladi.',
     '$-1\\le\\sin\\alpha\\le1$ и $-1\\le\\cos\\alpha\\le1$; а '
     '$\\operatorname{tg}\\alpha$ принимает любое действительное '
     'значение.'),
   T('$1-\\sin x\\ge0$ — shu chegara tufayli. Bu «ikki nomanfiy son '
     'yigʻindisi nol» usulining kaliti (20-masala).',
     '$1-\\sin x\\ge0$ — именно из-за этой границы. Это ключ к приёму '
     '«сумма двух неотрицательных равна нулю» (задача 20).')),
]))

# =================================================== B · Keltirish formulalari ==
BOLIMLAR.append(dict(kod='B', hue='trig',
 nom=T('Keltirish formulalari', 'Формулы приведения'),
 izoh=T('Toʻrtta variant savoli faqat shu qoidaga tayanadi. Uni yodlash '
        'shart emas — ikki qadamli qoida yetarli.',
        'Четыре задачи вариантов опираются только на это правило. Заучивать '
        'его не нужно — хватает правила из двух шагов.'),
 items=[

 I('usul', T('Ikki qadamli qoida', 'Правило из двух шагов'),
   T('<b>1-qadam (nom).</b> Burchak $90^\\circ\\pm\\alpha$ yoki '
     '$270^\\circ\\pm\\alpha$ boʻlsa nom <b>almashadi</b> '
     '($\\sin\\leftrightarrow\\cos$); $180^\\circ\\pm\\alpha$ yoki '
     '$360^\\circ\\pm\\alpha$ boʻlsa <b>almashmaydi</b>.<br>'
     '<b>2-qadam (ishora).</b> $\\alpha$ ni oʻtkir deb olib, '
     '<b>asl</b> funksiyaning shu chorakdagi ishorasini qoʻying.',
     '<b>Шаг 1 (имя).</b> Если угол вида $90^\\circ\\pm\\alpha$ или '
     '$270^\\circ\\pm\\alpha$, имя <b>меняется</b> '
     '($\\sin\\leftrightarrow\\cos$); если $180^\\circ\\pm\\alpha$ или '
     '$360^\\circ\\pm\\alpha$ — <b>не меняется</b>.<br>'
     '<b>Шаг 2 (знак).</b> Считая $\\alpha$ острым, поставьте знак '
     '<b>исходной</b> функции в этой четверти.'),
   T('$\\cos130^\\circ=\\cos(90^\\circ+40^\\circ)$: nom almashadi '
     '$\\to\\sin40^\\circ$; $130^\\circ$ — II chorak, u yerda $\\cos<0$, '
     'demak $\\cos130^\\circ=-\\sin40^\\circ$ (10-masala).',
     '$\\cos130^\\circ=\\cos(90^\\circ+40^\\circ)$: имя меняется на '
     '$\\sin40^\\circ$; $130^\\circ$ — вторая четверть, где $\\cos<0$, '
     'значит $\\cos130^\\circ=-\\sin40^\\circ$ (задача 10).')),

 I('formula', T('Eng koʻp ishlatiladiganlari', 'Самые частые'),
   T('$\\sin(180^\\circ-\\alpha)=\\sin\\alpha$, '
     '$\\cos(180^\\circ-\\alpha)=-\\cos\\alpha$,<br>'
     '$\\sin(90^\\circ+\\alpha)=\\cos\\alpha$, '
     '$\\cos(90^\\circ+\\alpha)=-\\sin\\alpha$,<br>'
     '$\\operatorname{tg}(180^\\circ-\\alpha)='
     '-\\operatorname{tg}\\alpha$.',
     '$\\sin(180^\\circ-\\alpha)=\\sin\\alpha$, '
     '$\\cos(180^\\circ-\\alpha)=-\\cos\\alpha$,<br>'
     '$\\sin(90^\\circ+\\alpha)=\\cos\\alpha$, '
     '$\\cos(90^\\circ+\\alpha)=-\\sin\\alpha$,<br>'
     '$\\operatorname{tg}(180^\\circ-\\alpha)='
     '-\\operatorname{tg}\\alpha$.'),
   T('$\\operatorname{tg}\\dfrac{2\\pi}{3}='
     '\\operatorname{tg}(180^\\circ-60^\\circ)=-\\sqrt3$ '
     '(7-masala).',
     '$\\operatorname{tg}\\dfrac{2\\pi}{3}=-\\operatorname{tg}60^\\circ='
     '-\\sqrt3$ (задача 7).')),

 I('usul', T('Katta burchakni kichraytirish', 'Уменьшение большого угла'),
   T('Avval $360^\\circ$ ga boʻlib qoldiqni oling, keyin keltirish '
     'formulasini qoʻllang.',
     'Сначала возьмите остаток по модулю $360^\\circ$, затем применяйте '
     'формулу приведения.'),
   T('$\\cos2024^\\circ=\\cos224^\\circ=\\cos(180^\\circ+44^\\circ)='
     '-\\cos44^\\circ<0$ (14-masala).',
     '$\\cos2024^\\circ=\\cos224^\\circ=-\\cos44^\\circ<0$ '
     '(задача 14).')),

 I('usul', T('Toʻldiruvchi burchaklar juftligi', 'Пары дополнительных углов'),
   T('$\\alpha+\\beta=90^\\circ$ boʻlsa $\\sin\\alpha=\\cos\\beta$; '
     '$\\alpha+\\beta=180^\\circ$ boʻlsa $\\sin\\alpha=\\sin\\beta$ va '
     '$\\cos\\alpha=-\\cos\\beta$.',
     'Если $\\alpha+\\beta=90^\\circ$, то $\\sin\\alpha=\\cos\\beta$; если '
     '$\\alpha+\\beta=180^\\circ$, то $\\sin\\alpha=\\sin\\beta$ и '
     '$\\cos\\alpha=-\\cos\\beta$.'),
   T('$\\sin160^\\circ=\\sin20^\\circ$ va '
     '$\\cos110^\\circ=-\\cos70^\\circ=-\\sin20^\\circ$ — shu ikki '
     'kuzatuv butun ifodani yigʻadi (10-masala).',
     '$\\sin160^\\circ=\\sin20^\\circ$ и '
     '$\\cos110^\\circ=-\\sin20^\\circ$ — эти два наблюдения и сворачивают '
     'всё выражение (задача 10).')),
]))

# ====================================================== C · Asosiy ayniyatlar ==
BOLIMLAR.append(dict(kod='C', hue='alg',
 nom=T('Asosiy ayniyatlar', 'Основные тождества'),
 izoh=T('«$\\operatorname{tg}\\alpha$ berilgan, $\\sin2\\alpha$ ni toping» '
        'tipidagi savollar shu boʻlimda bir qatorda yechiladi.',
        'Задачи вида «дан $\\operatorname{tg}\\alpha$, найдите '
        '$\\sin2\\alpha$» решаются здесь в одну строку.'),
 items=[

 I('formula', T('Pifagor ayniyati va oilasi', 'Тождество Пифагора и его семья'),
   T('$\\sin^2\\alpha+\\cos^2\\alpha=1$;<br>'
     '$1+\\operatorname{tg}^2\\alpha=\\dfrac{1}{\\cos^2\\alpha}$;<br>'
     '$1+\\operatorname{ctg}^2\\alpha=\\dfrac{1}{\\sin^2\\alpha}$.',
     '$\\sin^2\\alpha+\\cos^2\\alpha=1$;<br>'
     '$1+\\operatorname{tg}^2\\alpha=\\dfrac{1}{\\cos^2\\alpha}$;<br>'
     '$1+\\operatorname{ctg}^2\\alpha=\\dfrac{1}{\\sin^2\\alpha}$.'),
   T('$\\operatorname{tg}\\alpha=\\sqrt{11}$ boʻlsa '
     '$\\dfrac{1}{\\cos^2\\alpha}=12$ — bu $\\sin2\\alpha$ uchun eng qisqa '
     'yoʻl (8-masala).',
     'Если $\\operatorname{tg}\\alpha=\\sqrt{11}$, то '
     '$\\dfrac{1}{\\cos^2\\alpha}=12$ — кратчайший путь к $\\sin2\\alpha$ '
     '(задача 8).'),
   T('Ikkinchi ayniyat birinchisini $\\cos^2\\alpha$ ga boʻlishdan, '
     'uchinchisi $\\sin^2\\alpha$ ga boʻlishdan chiqadi.',
     'Второе тождество получается делением первого на $\\cos^2\\alpha$, '
     'третье — на $\\sin^2\\alpha$.')),

 I('formula', T('Universal almashtirish', 'Универсальная подстановка'),
   T('$t=\\operatorname{tg}\\alpha$ boʻlsa '
     '$\\sin2\\alpha=\\dfrac{2t}{1+t^2}$, '
     '$\\cos2\\alpha=\\dfrac{1-t^2}{1+t^2}$.',
     'Если $t=\\operatorname{tg}\\alpha$, то '
     '$\\sin2\\alpha=\\dfrac{2t}{1+t^2}$, '
     '$\\cos2\\alpha=\\dfrac{1-t^2}{1+t^2}$.'),
   T('$t=\\sqrt{11}$: $\\sin2\\alpha=\\dfrac{2\\sqrt{11}}{12}='
     '\\dfrac{\\sqrt{11}}{6}$ (8-masala).',
     '$t=\\sqrt{11}$: $\\sin2\\alpha=\\dfrac{2\\sqrt{11}}{12}='
     '\\dfrac{\\sqrt{11}}{6}$ (задача 8).'),
   T('$\\sin2\\alpha=2\\sin\\alpha\\cos\\alpha='
     '2\\operatorname{tg}\\alpha\\cos^2\\alpha='
     '\\dfrac{2t}{1+t^2}$.',
     '$\\sin2\\alpha=2\\sin\\alpha\\cos\\alpha='
     '2\\operatorname{tg}\\alpha\\cos^2\\alpha=\\dfrac{2t}{1+t^2}$.')),

 I('usul', T('$\\sin\\pm\\cos$ va $\\sin\\cos$ bogʻlanishi',
             'Связь $\\sin\\pm\\cos$ и $\\sin\\cos$'),
   T('$(\\sin\\alpha\\pm\\cos\\alpha)^2=1\\pm\\sin2\\alpha$. Demak '
     'yigʻindi maʼlum boʻlsa koʻpaytma ham maʼlum, va aksincha.',
     '$(\\sin\\alpha\\pm\\cos\\alpha)^2=1\\pm\\sin2\\alpha$. Значит зная '
     'сумму, знаем произведение, и наоборот.'),
   T('Bu ayniyat «$\\operatorname{tg}\\alpha+\\sin\\alpha=1$» '
     'masalasining kaliti: $(\\cos\\alpha-\\sin\\alpha)^2=1-\\sin2\\alpha$ '
     '(22-masala).',
     'Это тождество — ключ к задаче «$\\operatorname{tg}\\alpha+'
     '\\sin\\alpha=1$»: $(\\cos\\alpha-\\sin\\alpha)^2=1-\\sin2\\alpha$ '
     '(задача 22).')),

 I('usul', T('$1$ ni $\\sin^2+\\cos^2$ bilan almashtirish',
             'Заменить $1$ на $\\sin^2+\\cos^2$'),
   T('Ifodada yolgʻiz $1$ tursa, uni $\\sin^2\\alpha+\\cos^2\\alpha$ bilan '
     'almashtiring — koʻpincha darhol koʻpaytuvchilarga ajraladi.',
     'Если в выражении стоит одинокая $1$, замените её на '
     '$\\sin^2\\alpha+\\cos^2\\alpha$ — часто сразу раскладывается на '
     'множители.'),
   T('Teskari yoʻl ham foydali: '
     '$\\cos2\\alpha=\\cos^2\\alpha-\\sin^2\\alpha='
     '(\\cos\\alpha-\\sin\\alpha)(\\cos\\alpha+\\sin\\alpha)$ '
     '(9-masala).',
     'Обратный ход тоже полезен: '
     '$\\cos2\\alpha=(\\cos\\alpha-\\sin\\alpha)(\\cos\\alpha+'
     '\\sin\\alpha)$ (задача 9).')),
]))

# ============================== D · Qoʻshish va karrali burchak formulalari ====
BOLIMLAR.append(dict(kod='D', hue='trig',
 nom=T('Qoʻshish va karrali burchak formulalari',
       'Формулы сложения и кратных углов'),
 izoh=T('Bu formulalarni yodlash shart; qolganlarining hammasi ulardan '
        'chiqariladi.',
        'Эти формулы надо знать наизусть; все остальные выводятся из них.'),
 items=[

 I('formula', T('Qoʻshish formulalari', 'Формулы сложения'),
   T('$\\sin(\\alpha\\pm\\beta)=\\sin\\alpha\\cos\\beta\\pm'
     '\\cos\\alpha\\sin\\beta$;<br>'
     '$\\cos(\\alpha\\pm\\beta)=\\cos\\alpha\\cos\\beta\\mp'
     '\\sin\\alpha\\sin\\beta$;<br>'
     '$\\operatorname{tg}(\\alpha\\pm\\beta)='
     '\\dfrac{\\operatorname{tg}\\alpha\\pm\\operatorname{tg}\\beta}'
     '{1\\mp\\operatorname{tg}\\alpha\\operatorname{tg}\\beta}$.',
     '$\\sin(\\alpha\\pm\\beta)=\\sin\\alpha\\cos\\beta\\pm'
     '\\cos\\alpha\\sin\\beta$;<br>'
     '$\\cos(\\alpha\\pm\\beta)=\\cos\\alpha\\cos\\beta\\mp'
     '\\sin\\alpha\\sin\\beta$;<br>'
     '$\\operatorname{tg}(\\alpha\\pm\\beta)='
     '\\dfrac{\\operatorname{tg}\\alpha\\pm\\operatorname{tg}\\beta}'
     '{1\\mp\\operatorname{tg}\\alpha\\operatorname{tg}\\beta}$.'),
   T('$\\cos$ dagi ishora <b>teskari</b> — eng koʻp uchraydigan xato shu.',
     'В формуле для $\\cos$ знак <b>меняется на противоположный</b> — это '
     'самая частая ошибка.')),

 I('formula', T('Ikkilangan burchak', 'Двойной угол'),
   T('$\\sin2\\alpha=2\\sin\\alpha\\cos\\alpha$;<br>'
     '$\\cos2\\alpha=\\cos^2\\alpha-\\sin^2\\alpha=2\\cos^2\\alpha-1='
     '1-2\\sin^2\\alpha$.',
     '$\\sin2\\alpha=2\\sin\\alpha\\cos\\alpha$;<br>'
     '$\\cos2\\alpha=\\cos^2\\alpha-\\sin^2\\alpha=2\\cos^2\\alpha-1='
     '1-2\\sin^2\\alpha$.'),
   T('$\\cos2\\alpha$ ning uchta koʻrinishidan masalaga <b>mos</b> kelganini '
     'tanlang: koʻpaytuvchilarga ajratish kerak boʻlsa birinchisi, '
     '$\\cos\\alpha$ qoldirish kerak boʻlsa ikkinchisi.',
     'Из трёх видов $\\cos2\\alpha$ выбирайте <b>подходящий</b>: для '
     'разложения на множители — первый, чтобы оставить только '
     '$\\cos\\alpha$ — второй.')),

 I('formula', T('Yarim burchak va daraja pasaytirish',
                'Половинный угол и понижение степени'),
   T('$\\sin^2\\alpha=\\dfrac{1-\\cos2\\alpha}{2}$, '
     '$\\cos^2\\alpha=\\dfrac{1+\\cos2\\alpha}{2}$.',
     '$\\sin^2\\alpha=\\dfrac{1-\\cos2\\alpha}{2}$, '
     '$\\cos^2\\alpha=\\dfrac{1+\\cos2\\alpha}{2}$.'),
   T('Kvadratlar yigʻindisini hisoblashda bu formulalar uzun ifodani '
     'chiziqli qiladi va teleskoplashga yoʻl ochadi (17-masala).',
     'При подсчёте суммы квадратов эти формулы делают длинное выражение '
     'линейным и открывают путь к телескопированию (задача 17).')),

 I('formula', T('Uchlangan burchak', 'Тройной угол'),
   T('$\\sin3\\alpha=3\\sin\\alpha-4\\sin^3\\alpha$;<br>'
     '$\\cos3\\alpha=4\\cos^3\\alpha-3\\cos\\alpha$.',
     '$\\sin3\\alpha=3\\sin\\alpha-4\\sin^3\\alpha$;<br>'
     '$\\cos3\\alpha=4\\cos^3\\alpha-3\\cos\\alpha$.'),
   T('$\\sin3\\alpha$ ni $\\sin(2\\alpha+\\alpha)$ deb yozib chiqaring — '
     'yodlashdan koʻra tez.',
     'Выводите $\\sin3\\alpha$ как $\\sin(2\\alpha+\\alpha)$ — это быстрее, '
     'чем вспоминать.')),
]))

# ================================== E · Yigʻindi ↔ koʻpaytma va yordamchi burchak
BOLIMLAR.append(dict(kod='E', hue='alg',
 nom=T('Yigʻindi ↔ koʻpaytma va yordamchi burchak',
       'Сумма ↔ произведение и вспомогательный угол'),
 izoh=T('Ifodani soddalashtirish savollarida bu ikki usul deyarli har doim '
        'kerak boʻladi.',
        'В задачах на упрощение эти два приёма нужны почти всегда.'),
 items=[

 I('formula', T('Yigʻindini koʻpaytmaga', 'Сумма в произведение'),
   T('$\\sin\\alpha+\\sin\\beta=2\\sin\\dfrac{\\alpha+\\beta}{2}'
     '\\cos\\dfrac{\\alpha-\\beta}{2}$;<br>'
     '$\\cos\\alpha+\\cos\\beta=2\\cos\\dfrac{\\alpha+\\beta}{2}'
     '\\cos\\dfrac{\\alpha-\\beta}{2}$;<br>'
     '$\\cos\\alpha-\\cos\\beta=-2\\sin\\dfrac{\\alpha+\\beta}{2}'
     '\\sin\\dfrac{\\alpha-\\beta}{2}$.',
     '$\\sin\\alpha+\\sin\\beta=2\\sin\\dfrac{\\alpha+\\beta}{2}'
     '\\cos\\dfrac{\\alpha-\\beta}{2}$;<br>'
     '$\\cos\\alpha+\\cos\\beta=2\\cos\\dfrac{\\alpha+\\beta}{2}'
     '\\cos\\dfrac{\\alpha-\\beta}{2}$;<br>'
     '$\\cos\\alpha-\\cos\\beta=-2\\sin\\dfrac{\\alpha+\\beta}{2}'
     '\\sin\\dfrac{\\alpha-\\beta}{2}$.'),
   T('$\\cos\\alpha-\\cos\\beta$ dagi <b>minus</b> ni unutmang.',
     'Не забывайте <b>минус</b> в $\\cos\\alpha-\\cos\\beta$.')),

 I('formula', T('Koʻpaytmani yigʻindiga', 'Произведение в сумму'),
   T('$2\\sin\\alpha\\cos\\beta=\\sin(\\alpha+\\beta)+'
     '\\sin(\\alpha-\\beta)$;<br>'
     '$2\\cos\\alpha\\cos\\beta=\\cos(\\alpha+\\beta)+'
     '\\cos(\\alpha-\\beta)$.',
     '$2\\sin\\alpha\\cos\\beta=\\sin(\\alpha+\\beta)+'
     '\\sin(\\alpha-\\beta)$;<br>'
     '$2\\cos\\alpha\\cos\\beta=\\cos(\\alpha+\\beta)+'
     '\\cos(\\alpha-\\beta)$.'),
   T('Bu formulalar uzun koʻpaytmalarni teleskopik yigʻindiga aylantiradi '
     '(21-masala).',
     'Эти формулы превращают длинные произведения в телескопическую сумму '
     '(задача 21).')),

 I('usul', T('Yordamchi burchak', 'Вспомогательный угол'),
   T('$a\\sin x+b\\cos x=\\sqrt{a^2+b^2}\\,\\sin(x+\\varphi)$, bunda '
     '$\\operatorname{tg}\\varphi=\\dfrac{b}{a}$.',
     '$a\\sin x+b\\cos x=\\sqrt{a^2+b^2}\\,\\sin(x+\\varphi)$, где '
     '$\\operatorname{tg}\\varphi=\\dfrac{b}{a}$.'),
   T('Shundan darhol: $a\\sin x+b\\cos x$ ning eng katta qiymati '
     '$\\sqrt{a^2+b^2}$, eng kichigi $-\\sqrt{a^2+b^2}$ (16-masala).',
     'Отсюда сразу: наибольшее значение $a\\sin x+b\\cos x$ равно '
     '$\\sqrt{a^2+b^2}$, наименьшее — $-\\sqrt{a^2+b^2}$ (задача 16).'),
   T('$\\sqrt{a^2+b^2}$ ni qavsdan chiqarsak, qoʻshiluvchilarning '
     'kvadratlari yigʻindisi $1$ boʻladi — demak ularni '
     '$\\cos\\varphi$ va $\\sin\\varphi$ deb olish mumkin.',
     'Вынеся $\\sqrt{a^2+b^2}$, получаем коэффициенты, сумма квадратов '
     'которых равна $1$ — их и берут за $\\cos\\varphi$ и '
     '$\\sin\\varphi$.')),
]))

# ================================== F · Soddalashtirish va shartli hisoblash ===
BOLIMLAR.append(dict(kod='F', hue='nt',
 nom=T('Soddalashtirish va shartli hisoblash',
       'Упрощение и вычисление по условию'),
 izoh=T('Variantlarning eng qiyin trigonometriya savollari shu yerda: '
        'berilgan bitta shartdan soʻralgan ifodani chiqarish.',
        'Самые трудные тригонометрические задачи вариантов — здесь: из одного '
        'данного условия вывести искомое выражение.'),
 items=[

 I('usul', T('Ildiz ostidagi kvadratni modul bilan ochish',
             'Корень из квадрата — через модуль'),
   T('$\\sqrt{A^2}=|A|$, shuning uchun '
     '$\\sqrt{\\cos^{-2}\\alpha}=\\dfrac{1}{|\\cos\\alpha|}$ — ishorani '
     'alohida aniqlash kerak.',
     '$\\sqrt{A^2}=|A|$, поэтому '
     '$\\sqrt{\\cos^{-2}\\alpha}=\\dfrac{1}{|\\cos\\alpha|}$ — знак надо '
     'определять отдельно.'),
   T('$\\cos\\alpha\\cdot\\dfrac{1}{|\\cos\\alpha|}$ — bu '
     '$\\cos\\alpha$ ning <b>ishorasi</b>: $\\cos\\alpha>0$ da $+1$, '
     '$\\cos\\alpha<0$ da $-1$ (14-masala).',
     '$\\cos\\alpha\\cdot\\dfrac{1}{|\\cos\\alpha|}$ — это <b>знак</b> '
     '$\\cos\\alpha$: $+1$ при $\\cos\\alpha>0$ и $-1$ при '
     '$\\cos\\alpha<0$ (задача 14).')),

 I('usul', T('Umumiy koʻpaytuvchini qidirish',
             'Искать общий множитель'),
   T('Kasrli ifodada surat va maxrajni koʻpaytuvchilarga ajrating: '
     'deyarli har doim bittasi qisqaradi.',
     'В дробном выражении разложите числитель и знаменатель на множители: '
     'почти всегда один сокращается.'),
   T('$\\dfrac{\\cos2\\alpha}{\\sin\\alpha\\cos\\alpha+\\sin^2\\alpha}='
     '\\dfrac{(\\cos\\alpha-\\sin\\alpha)(\\cos\\alpha+\\sin\\alpha)}'
     '{\\sin\\alpha(\\cos\\alpha+\\sin\\alpha)}='
     '\\operatorname{ctg}\\alpha-1$ (9-masala).',
     '$\\dfrac{\\cos2\\alpha}{\\sin\\alpha\\cos\\alpha+\\sin^2\\alpha}='
     '\\operatorname{ctg}\\alpha-1$ (задача 9).')),

 I('usul', T('Kub ildizlarni yangi harf bilan belgilash',
             'Обозначить кубические корни новыми буквами'),
   T('$u=(1+\\sin\\alpha)^{1/3}$, $v=(1-\\sin\\alpha)^{1/3}$ deb olsak '
     '$u^3+v^3=2$ va $uv=(\\cos^2\\alpha)^{1/3}$ — masala simmetrik '
     'koʻphadga aylanadi.',
     'Положив $u=(1+\\sin\\alpha)^{1/3}$ и $v=(1-\\sin\\alpha)^{1/3}$, '
     'получаем $u^3+v^3=2$ и $uv=(\\cos^2\\alpha)^{1/3}$ — задача '
     'становится симметрическим многочленом.'),
   T('Soʻralgan ifoda aynan $u^2-uv+v^2=(u+v)^2-3uv$ '
     '(15-masala).',
     'Искомое выражение — ровно $u^2-uv+v^2=(u+v)^2-3uv$ '
     '(задача 15).'),
   T('$uv=\\bigl((1+\\sin\\alpha)(1-\\sin\\alpha)\\bigr)^{1/3}='
     '\\left(\\cos^2\\alpha\\right)^{1/3}=(\\cos\\alpha)^{2/3}$.',
     '$uv=\\bigl((1-\\sin^2\\alpha)\\bigr)^{1/3}=(\\cos\\alpha)^{2/3}$.')),

 I('usul', T('Shartni koʻpaytma koʻrinishiga keltirish',
             'Привести условие к виду произведения'),
   T('$\\operatorname{tg}\\alpha+\\sin\\alpha=1$ ni '
     '$\\cos\\alpha$ ga koʻpaytiring: '
     '$\\sin\\alpha+\\sin\\alpha\\cos\\alpha=\\cos\\alpha$, yaʼni '
     '$\\sin\\alpha\\cos\\alpha=\\cos\\alpha-\\sin\\alpha$.',
     'Умножьте $\\operatorname{tg}\\alpha+\\sin\\alpha=1$ на '
     '$\\cos\\alpha$: $\\sin\\alpha+\\sin\\alpha\\cos\\alpha=\\cos\\alpha$, '
     'то есть $\\sin\\alpha\\cos\\alpha=\\cos\\alpha-\\sin\\alpha$.'),
   T('Chap tomon $\\dfrac{\\sin2\\alpha}{2}$ — demak '
     '$\\sin2\\alpha=2(\\cos\\alpha-\\sin\\alpha)$, va bundan javob bir '
     'qatorda chiqadi (22-masala).',
     'Слева стоит $\\dfrac{\\sin2\\alpha}{2}$, значит '
     '$\\sin2\\alpha=2(\\cos\\alpha-\\sin\\alpha)$ — и ответ получается в '
     'одну строку (задача 22).')),
]))

# ========================================= G · Uchburchak va tenglamalar =======
BOLIMLAR.append(dict(kod='G', hue='geo',
 nom=T('Trigonometriya uchburchakda va tenglamalar',
       'Тригонометрия в треугольнике и уравнения'),
 izoh=T('Uchburchak burchaklarining yigʻindisi $180^\\circ$ ekani — koʻpincha '
        'yechimning butun mazmuni.',
        'То, что сумма углов треугольника равна $180^\\circ$, часто и есть '
        'всё решение.'),
 items=[

 I('usul', T('Ikki burchakdan uchinchisini topish',
             'Третий угол по двум'),
   T('Uchburchakda $A+B+C=180^\\circ$. Ikkita kosinus berilsa, ikki '
     'burchak, undan uchinchisi topiladi.',
     'В треугольнике $A+B+C=180^\\circ$. По двум косинусам находятся два '
     'угла, а по ним — третий.'),
   T('$2\\sqrt3\\cos A=\\sqrt3\\Rightarrow\\cos A=\\dfrac12\\Rightarrow '
     'A=60^\\circ$; $2\\cos B=\\sqrt3\\Rightarrow B=30^\\circ$; demak '
     '$C=90^\\circ$ (11-masala).',
     '$\\cos A=\\dfrac12\\Rightarrow A=60^\\circ$; '
     '$\\cos B=\\dfrac{\\sqrt3}{2}\\Rightarrow B=30^\\circ$; значит '
     '$C=90^\\circ$ (задача 11).')),

 I('formula', T('Sinuslar va kosinuslar teoremasi',
                'Теоремы синусов и косинусов'),
   T('$\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}=2R$;<br>'
     '$c^2=a^2+b^2-2ab\\cos C$.',
     '$\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}=2R$;<br>'
     '$c^2=a^2+b^2-2ab\\cos C$.'),
   T('Uchburchak yuzi: $S=\\dfrac12ab\\sin C$ — ikki tomon va ular '
     'orasidagi burchak boʻyicha.',
     'Площадь: $S=\\dfrac12ab\\sin C$ — по двум сторонам и углу между '
     'ними.')),

 I('usul', T('Eng oddiy tenglamalar', 'Простейшие уравнения'),
   T('$\\sin x=a$: $x=(-1)^k\\arcsin a+\\pi k$;<br>'
     '$\\cos x=a$: $x=\\pm\\arccos a+2\\pi k$;<br>'
     '$\\operatorname{tg}x=a$: $x=\\operatorname{arctg}a+\\pi k$.',
     '$\\sin x=a$: $x=(-1)^k\\arcsin a+\\pi k$;<br>'
     '$\\cos x=a$: $x=\\pm\\arccos a+2\\pi k$;<br>'
     '$\\operatorname{tg}x=a$: $x=\\operatorname{arctg}a+\\pi k$.'),
   T('Kesma berilgan boʻlsa ($0\\le x\\le\\pi$ kabi), umumiy yechimdan '
     'kerakli $k$ larni tanlang — koʻpincha bitta ildiz qoladi '
     '(20-masala).',
     'Если дан отрезок (например $0\\le x\\le\\pi$), выберите из общего '
     'решения подходящие $k$ — часто остаётся один корень '
     '(задача 20).')),

 I('usul', T('Baholash bilan yechish', 'Решение оценкой'),
   T('$\\sin x\\le1$ va $\\cos x\\le1$ chegaralaridan foydalanib, tenglamani '
     '«har bir qoʻshiluvchi oʻz maksimumida» holatiga keltiring.',
     'Пользуясь границами $\\sin x\\le1$ и $\\cos x\\le1$, сведите уравнение '
     'к случаю «каждое слагаемое в своём максимуме».'),
   T('$1-\\sin x+\\sqrt{3y-x}=0$: ikkala qoʻshiluvchi nomanfiy, demak '
     'ikkalasi ham nol — $\\sin x=1$ va $3y=x$ (20-masala).',
     '$1-\\sin x+\\sqrt{3y-x}=0$: оба слагаемых неотрицательны, значит оба '
     'равны нулю — $\\sin x=1$ и $3y=x$ (задача 20).')),
]))


def P(savol, javob, yechim, bolim, manba='', rasm=None):
    return dict(savol=savol, javob=javob, yechim=yechim, bolim=bolim,
                manba=manba, rasm=rasm)


DARAJALAR = [
 dict(kod='oson', nom=T('Oson', 'Лёгкие'), hue='easy',
  izoh=T('Jadval va bitta formula.', 'Таблица и одна формула.'),
  items=[

  P(T('$\\sin150^\\circ$ ni hisoblang.', 'Вычислите $\\sin150^\\circ$.'),
    T('$\\dfrac12$', '$\\dfrac12$'),
    T('$\\sin150^\\circ=\\sin(180^\\circ-30^\\circ)=\\sin30^\\circ='
      '\\dfrac12$.',
      '$\\sin150^\\circ=\\sin30^\\circ=\\dfrac12$.'), 'B'),

  P(T('$\\cos\\alpha=\\dfrac35$ va $0<\\alpha<\\dfrac{\\pi}{2}$ boʻlsa, '
      '$\\sin\\alpha$ ni toping.',
      'Пусть $\\cos\\alpha=\\dfrac35$ и $0<\\alpha<\\dfrac{\\pi}{2}$. '
      'Найдите $\\sin\\alpha$.'),
    T('$\\dfrac45$', '$\\dfrac45$'),
    T('$\\sin^2\\alpha=1-\\dfrac9{25}=\\dfrac{16}{25}$; birinchi chorakda '
      '$\\sin\\alpha>0$, demak $\\sin\\alpha=\\dfrac45$.',
      '$\\sin^2\\alpha=\\dfrac{16}{25}$, и в первой четверти '
      '$\\sin\\alpha=\\dfrac45$.'), 'C'),

  P(T('$\\operatorname{tg}\\alpha=\\dfrac34$ boʻlsa, '
      '$\\operatorname{ctg}\\alpha$ ni toping.',
      'Пусть $\\operatorname{tg}\\alpha=\\dfrac34$. Найдите '
      '$\\operatorname{ctg}\\alpha$.'),
    T('$\\dfrac43$', '$\\dfrac43$'),
    T('$\\operatorname{ctg}\\alpha=\\dfrac{1}{\\operatorname{tg}\\alpha}='
      '\\dfrac43$.',
      '$\\operatorname{ctg}\\alpha=\\dfrac43$.'), 'A'),

  P(T('$\\sin2\\alpha$ ni toping, agar $\\sin\\alpha\\cos\\alpha='
      '\\dfrac14$ boʻlsa.',
      'Найдите $\\sin2\\alpha$, если $\\sin\\alpha\\cos\\alpha=\\dfrac14$.'),
    T('$\\dfrac12$', '$\\dfrac12$'),
    T('$\\sin2\\alpha=2\\sin\\alpha\\cos\\alpha=\\dfrac12$.',
      '$\\sin2\\alpha=2\\sin\\alpha\\cos\\alpha=\\dfrac12$.'), 'D'),

  P(T('$\\cos750^\\circ$ ni hisoblang.', 'Вычислите $\\cos750^\\circ$.'),
    T('$\\dfrac{\\sqrt3}{2}$', '$\\dfrac{\\sqrt3}{2}$'),
    T('$750=2\\cdot360+30$, demak $\\cos750^\\circ=\\cos30^\\circ='
      '\\dfrac{\\sqrt3}{2}$.',
      '$750=2\\cdot360+30$, значит $\\cos750^\\circ=\\dfrac{\\sqrt3}{2}$.'),
    'A'),

  P(T('$\\sin^2 17^\\circ+\\cos^2 17^\\circ$ ni hisoblang.',
      'Вычислите $\\sin^2 17^\\circ+\\cos^2 17^\\circ$.'),
    T('$1$', '$1$'),
    T('Pifagor ayniyati: har qanday burchak uchun yigʻindi $1$ ga teng.',
      'Тождество Пифагора: сумма равна $1$ при любом угле.'), 'C'),
 ]),

 dict(kod='orta', nom=T('Oʻrtacha', 'Средние'), hue='med',
  izoh=T('Keltirish formulalari va asosiy ayniyatlar birga.',
         'Формулы приведения вместе с основными тождествами.'),
  items=[

  P(T('Hisoblang: $\\operatorname{tg}\\dfrac{2\\pi}{3}\\cdot'
      '\\sin\\left(-\\dfrac{3\\pi}{4}\\right)\\cdot\\cos\\dfrac{\\pi}{6}$',
      'Вычислите: $\\operatorname{tg}\\dfrac{2\\pi}{3}\\cdot'
      '\\sin\\left(-\\dfrac{3\\pi}{4}\\right)\\cdot\\cos\\dfrac{\\pi}{6}$'),
    T('$\\dfrac{3\\sqrt2}{4}$', '$\\dfrac{3\\sqrt2}{4}$'),
    T('Har bir koʻpaytuvchini alohida keltiramiz:<br>'
      '$\\operatorname{tg}\\dfrac{2\\pi}{3}='
      '\\operatorname{tg}(180^\\circ-60^\\circ)=-\\sqrt3$;<br>'
      '$\\sin\\left(-\\dfrac{3\\pi}{4}\\right)=-\\sin135^\\circ='
      '-\\dfrac{\\sqrt2}{2}$;<br>'
      '$\\cos\\dfrac{\\pi}{6}=\\dfrac{\\sqrt3}{2}$.<br>'
      'Koʻpaytma: '
      '$(-\\sqrt3)\\cdot\\left(-\\dfrac{\\sqrt2}{2}\\right)\\cdot'
      '\\dfrac{\\sqrt3}{2}=\\dfrac{\\sqrt3\\cdot\\sqrt2\\cdot\\sqrt3}{4}='
      '\\dfrac{3\\sqrt2}{4}$.<br>'
      '<i>Ishora:</i> ikkita minus — natija <b>musbat</b>.',
      'Приводим каждый множитель:<br>'
      '$\\operatorname{tg}\\dfrac{2\\pi}{3}=-\\sqrt3$, '
      '$\\sin\\left(-\\dfrac{3\\pi}{4}\\right)=-\\dfrac{\\sqrt2}{2}$, '
      '$\\cos\\dfrac{\\pi}{6}=\\dfrac{\\sqrt3}{2}$.<br>'
      'Произведение: $\\dfrac{3\\sqrt2}{4}$ — два минуса дают '
      '<b>плюс</b>.'),
    'B', '10-sinf · 2024 №3'),

  P(T('$\\operatorname{tg}\\alpha=\\sqrt{11}$ boʻlsa, $\\sin2\\alpha$ ni '
      'toping.',
      'Пусть $\\operatorname{tg}\\alpha=\\sqrt{11}$. Найдите '
      '$\\sin2\\alpha$.'),
    T('$\\dfrac{\\sqrt{11}}{6}$', '$\\dfrac{\\sqrt{11}}{6}$'),
    T('<b>Universal formula.</b> '
      '$\\sin2\\alpha=\\dfrac{2\\operatorname{tg}\\alpha}'
      '{1+\\operatorname{tg}^2\\alpha}='
      '\\dfrac{2\\sqrt{11}}{1+11}=\\dfrac{2\\sqrt{11}}{12}='
      '\\dfrac{\\sqrt{11}}{6}$.<br>'
      '<i>Ikkinchi yoʻl:</i> $\\cos^2\\alpha=\\dfrac1{12}$, '
      '$\\sin^2\\alpha=\\dfrac{11}{12}$, demak '
      '$\\sin\\alpha\\cos\\alpha=\\dfrac{\\sqrt{11}}{12}$ va '
      '$\\sin2\\alpha=\\dfrac{\\sqrt{11}}{6}$ ✓',
      '<b>Универсальная формула.</b> '
      '$\\sin2\\alpha=\\dfrac{2\\sqrt{11}}{12}=\\dfrac{\\sqrt{11}}{6}$.<br>'
      '<i>Второй путь:</i> $\\cos^2\\alpha=\\dfrac1{12}$, '
      '$\\sin^2\\alpha=\\dfrac{11}{12}$ ✓'),
    'C', '10-sinf · 2024 №8'),

  P(T('Ifodani soddalashtiring: '
      '$\\dfrac{\\cos2\\alpha}{\\sin\\alpha\\cos\\alpha+\\sin^2\\alpha}+1$',
      'Упростите: '
      '$\\dfrac{\\cos2\\alpha}{\\sin\\alpha\\cos\\alpha+\\sin^2\\alpha}+1$'),
    T('$\\operatorname{ctg}\\alpha$', '$\\operatorname{ctg}\\alpha$'),
    T('<b>Koʻpaytuvchilarga ajratamiz.</b><br>'
      'Surat: $\\cos2\\alpha=\\cos^2\\alpha-\\sin^2\\alpha='
      '(\\cos\\alpha-\\sin\\alpha)(\\cos\\alpha+\\sin\\alpha)$.<br>'
      'Maxraj: $\\sin\\alpha\\cos\\alpha+\\sin^2\\alpha='
      '\\sin\\alpha(\\cos\\alpha+\\sin\\alpha)$.<br>'
      'Umumiy koʻpaytuvchi $(\\cos\\alpha+\\sin\\alpha)$ qisqaradi:<br>'
      '$\\dfrac{\\cos\\alpha-\\sin\\alpha}{\\sin\\alpha}+1='
      '\\operatorname{ctg}\\alpha-1+1=\\operatorname{ctg}\\alpha$.<br>'
      '<i>Tekshirish ($\\alpha=45^\\circ$):</i> surat $0$, demak ifoda $1$, '
      'va $\\operatorname{ctg}45^\\circ=1$ ✓',
      '<b>Разложение на множители.</b><br>'
      'Числитель $=(\\cos\\alpha-\\sin\\alpha)(\\cos\\alpha+\\sin\\alpha)$, '
      'знаменатель $=\\sin\\alpha(\\cos\\alpha+\\sin\\alpha)$.<br>'
      'После сокращения: '
      '$\\operatorname{ctg}\\alpha-1+1=\\operatorname{ctg}\\alpha$.<br>'
      '<i>Проверка при $\\alpha=45^\\circ$:</i> выражение равно $1$ ✓'),
    'F', '10-sinf · 2024 №10'),

  P(T('Ifodani soddalashtiring: '
      '$2\\sin40^\\circ+2\\cos130^\\circ+\\sin160^\\circ-'
      '\\cos(-110^\\circ)$.',
      'Упростите: $2\\sin40^\\circ+2\\cos130^\\circ+\\sin160^\\circ-'
      '\\cos(-110^\\circ)$.'),
    T('$2\\sin20^\\circ$', '$2\\sin20^\\circ$'),
    T('<b>Har bir hadni $20^\\circ$–$40^\\circ$ ga keltiramiz.</b><br>'
      '$\\cos130^\\circ=\\cos(90^\\circ+40^\\circ)=-\\sin40^\\circ$, demak '
      'dastlabki ikki had oʻzaro yoʻqoladi: '
      '$2\\sin40^\\circ-2\\sin40^\\circ=0$.<br>'
      '$\\sin160^\\circ=\\sin(180^\\circ-20^\\circ)=\\sin20^\\circ$.<br>'
      '$\\cos(-110^\\circ)=\\cos110^\\circ=\\cos(90^\\circ+20^\\circ)='
      '-\\sin20^\\circ$, demak '
      '$-\\cos(-110^\\circ)=+\\sin20^\\circ$.<br>'
      'Natija: $0+\\sin20^\\circ+\\sin20^\\circ=2\\sin20^\\circ$.',
      '<b>Приводим каждое слагаемое.</b><br>'
      '$\\cos130^\\circ=-\\sin40^\\circ$, поэтому первые два слагаемых '
      'взаимно уничтожаются.<br>'
      '$\\sin160^\\circ=\\sin20^\\circ$, а '
      '$\\cos(-110^\\circ)=-\\sin20^\\circ$, значит '
      '$-\\cos(-110^\\circ)=\\sin20^\\circ$.<br>'
      'Итого $2\\sin20^\\circ$.'),
    'B', '11-sinf · 2024 №5'),

  P(T('$ABC$ uchburchakda $2\\sqrt3\\cos A=2\\cos B=\\sqrt3$ tenglik '
      'oʻrinli boʻlsa, $\\angle ACB$ ni toping.',
      'В треугольнике $ABC$ выполнено $2\\sqrt3\\cos A=2\\cos B=\\sqrt3$. '
      'Найдите $\\angle ACB$.'),
    T('$90^\\circ$', '$90^\\circ$'),
    T('<b>Ikki burchakni topamiz.</b><br>'
      '$2\\sqrt3\\cos A=\\sqrt3\\Rightarrow\\cos A=\\dfrac12\\Rightarrow '
      'A=60^\\circ$.<br>'
      '$2\\cos B=\\sqrt3\\Rightarrow\\cos B=\\dfrac{\\sqrt3}{2}\\Rightarrow '
      'B=30^\\circ$.<br>'
      '<b>Uchinchisi.</b> $\\angle ACB=180^\\circ-60^\\circ-30^\\circ='
      '90^\\circ$.<br>'
      '<i>Izoh:</i> uchburchakda burchak $0^\\circ$ dan $180^\\circ$ gacha, '
      'shuning uchun har bir kosinus bitta burchakni beradi.',
      '<b>Два угла.</b> $\\cos A=\\dfrac12\\Rightarrow A=60^\\circ$; '
      '$\\cos B=\\dfrac{\\sqrt3}{2}\\Rightarrow B=30^\\circ$.<br>'
      '<b>Третий.</b> $\\angle ACB=180^\\circ-90^\\circ=90^\\circ$.<br>'
      '<i>Замечание:</i> угол треугольника лежит в $(0^\\circ;180^\\circ)$, '
      'поэтому каждый косинус определяет угол однозначно.'),
    'G', '11-sinf · 2024 №8'),

  P(T('$\\sin\\alpha+\\cos\\alpha=\\dfrac15$ boʻlsa, '
      '$\\sin\\alpha\\cos\\alpha$ ni toping.',
      'Пусть $\\sin\\alpha+\\cos\\alpha=\\dfrac15$. Найдите '
      '$\\sin\\alpha\\cos\\alpha$.'),
    T('$-\\dfrac{12}{25}$', '$-\\dfrac{12}{25}$'),
    T('Kvadratga koʻtaramiz: '
      '$(\\sin\\alpha+\\cos\\alpha)^2=1+2\\sin\\alpha\\cos\\alpha='
      '\\dfrac1{25}$.<br>'
      '$2\\sin\\alpha\\cos\\alpha=\\dfrac1{25}-1=-\\dfrac{24}{25}$, demak '
      '$\\sin\\alpha\\cos\\alpha=-\\dfrac{12}{25}$.<br>'
      '<i>Izoh:</i> manfiy chiqishi tabiiy — burchak ikkinchi yoki '
      'toʻrtinchi chorakda.',
      'Возводим в квадрат: $1+2\\sin\\alpha\\cos\\alpha=\\dfrac1{25}$, '
      'откуда $\\sin\\alpha\\cos\\alpha=-\\dfrac{12}{25}$.<br>'
      '<i>Замечание:</i> отрицательный ответ естественен — угол во второй '
      'или четвёртой четверти.'),
    'C'),

  P(T('$\\dfrac{\\sin3\\alpha+\\sin\\alpha}{\\cos3\\alpha+\\cos\\alpha}$ '
      'ni soddalashtiring.',
      'Упростите '
      '$\\dfrac{\\sin3\\alpha+\\sin\\alpha}{\\cos3\\alpha+\\cos\\alpha}$.'),
    T('$\\operatorname{tg}2\\alpha$', '$\\operatorname{tg}2\\alpha$'),
    T('Yigʻindilarni koʻpaytmaga aylantiramiz:<br>'
      '$\\sin3\\alpha+\\sin\\alpha=2\\sin2\\alpha\\cos\\alpha$,<br>'
      '$\\cos3\\alpha+\\cos\\alpha=2\\cos2\\alpha\\cos\\alpha$.<br>'
      '$2\\cos\\alpha$ qisqaradi: '
      '$\\dfrac{\\sin2\\alpha}{\\cos2\\alpha}='
      '\\operatorname{tg}2\\alpha$.',
      'Суммы в произведения: '
      '$2\\sin2\\alpha\\cos\\alpha$ и $2\\cos2\\alpha\\cos\\alpha$; после '
      'сокращения получаем $\\operatorname{tg}2\\alpha$.'),
    'E'),
 ]),
]

DARAJALAR += [
 dict(kod='qiyin', nom=T('Qiyin', 'Трудные'), hue='hard',
  izoh=T('Bir necha formulani ketma-ket qoʻllash kerak.',
         'Нужно применить несколько формул подряд.'),
  items=[

  P(T('$\\cos(-2024^\\circ)\\cdot\\sqrt{\\cos^{-2}2024^\\circ}$ '
      'ni hisoblang.',
      'Вычислите $\\cos(-2024^\\circ)\\cdot'
      '\\sqrt{\\cos^{-2}2024^\\circ}$.'),
    T('$-1$', '$-1$'),
    T('<b>1. Juftlik.</b> $\\cos(-2024^\\circ)=\\cos2024^\\circ$.<br>'
      '<b>2. Ildiz.</b> '
      '$\\sqrt{\\cos^{-2}2024^\\circ}='
      '\\sqrt{\\dfrac{1}{\\cos^2 2024^\\circ}}='
      '\\dfrac{1}{|\\cos2024^\\circ|}$.<br>'
      'Demak koʻpaytma $=\\dfrac{\\cos2024^\\circ}{|\\cos2024^\\circ|}$ — '
      'bu $\\cos2024^\\circ$ ning <b>ishorasi</b>.<br>'
      '<b>3. Ishorani aniqlaymiz.</b> '
      '$2024=5\\cdot360+224$, demak burchak $224^\\circ$ ga teng — '
      'uchinchi chorak ($180^\\circ<224^\\circ<270^\\circ$), u yerda '
      '$\\cos<0$.<br>'
      '<b>Javob: $-1$.</b><br>'
      '<i>Xato ogohlantirishi:</i> $\\sqrt{A^2}=A$ deb yozish bu yerda '
      'aynan $+1$ degan notoʻgʻri javobni beradi.',
      '<b>1. Чётность.</b> $\\cos(-2024^\\circ)=\\cos2024^\\circ$.<br>'
      '<b>2. Корень.</b> '
      '$\\sqrt{\\cos^{-2}2024^\\circ}=\\dfrac{1}{|\\cos2024^\\circ|}$, '
      'поэтому произведение равно <b>знаку</b> $\\cos2024^\\circ$.<br>'
      '<b>3. Знак.</b> $2024=5\\cdot360+224$, а $224^\\circ$ — третья '
      'четверть, где $\\cos<0$.<br>'
      '<b>Ответ: $-1$.</b><br>'
      '<i>Осторожно:</i> запись $\\sqrt{A^2}=A$ даёт здесь неверный '
      'ответ $+1$.'),
    'F', '11-sinf · 2024 №14'),

  P(T('$(1+\\sin\\alpha)^{\\frac13}+(1-\\sin\\alpha)^{\\frac13}=1{,}5$ '
      'boʻlsa, $(1+\\sin\\alpha)^{\\frac23}-(\\cos\\alpha)^{\\frac23}+'
      '(1-\\sin\\alpha)^{\\frac23}$ ning qiymatini toping.',
      'Пусть $(1+\\sin\\alpha)^{\\frac13}+(1-\\sin\\alpha)^{\\frac13}=1{,}5$. '
      'Найдите $(1+\\sin\\alpha)^{\\frac23}-(\\cos\\alpha)^{\\frac23}+'
      '(1-\\sin\\alpha)^{\\frac23}$.'),
    T('$\\dfrac43$', '$\\dfrac43$'),
    T('<b>Belgilash.</b> '
      '$u=(1+\\sin\\alpha)^{1/3}$, $v=(1-\\sin\\alpha)^{1/3}$.<br>'
      'Shart: $u+v=\\dfrac32$.<br>'
      '<b>Ikki asosiy kattalik.</b><br>'
      '$u^3+v^3=(1+\\sin\\alpha)+(1-\\sin\\alpha)=2$;<br>'
      '$uv=\\bigl((1+\\sin\\alpha)(1-\\sin\\alpha)\\bigr)^{1/3}='
      '\\left(\\cos^2\\alpha\\right)^{1/3}=(\\cos\\alpha)^{2/3}$.<br>'
      '<b>$uv$ ni topamiz.</b> '
      '$(u+v)^3=u^3+v^3+3uv(u+v)$:<br>'
      '$\\dfrac{27}{8}=2+3uv\\cdot\\dfrac32$, demak '
      '$\\dfrac92uv=\\dfrac{27}{8}-2=\\dfrac{11}{8}$ va '
      '$uv=\\dfrac{11}{36}$.<br>'
      '<b>Soʻralgan ifoda.</b> U aynan '
      '$u^2-uv+v^2=(u+v)^2-3uv$:<br>'
      '$\\dfrac94-3\\cdot\\dfrac{11}{36}=\\dfrac94-\\dfrac{11}{12}='
      '\\dfrac{27-11}{12}=\\dfrac{16}{12}=\\dfrac43$.',
      '<b>Обозначения.</b> $u=(1+\\sin\\alpha)^{1/3}$, '
      '$v=(1-\\sin\\alpha)^{1/3}$, причём $u+v=\\dfrac32$.<br>'
      '<b>Две величины.</b> $u^3+v^3=2$ и '
      '$uv=(\\cos\\alpha)^{2/3}$.<br>'
      '<b>Находим $uv$.</b> Из $(u+v)^3=u^3+v^3+3uv(u+v)$: '
      '$\\dfrac{27}{8}=2+\\dfrac92uv$, то есть $uv=\\dfrac{11}{36}$.<br>'
      '<b>Ответ.</b> Искомое равно $u^2-uv+v^2=(u+v)^2-3uv='
      '\\dfrac94-\\dfrac{11}{12}=\\dfrac43$.'),
    'F', '10-sinf · 2025/26-B №9'),

  P(T('$y=3\\sin x+4\\cos x$ funksiyaning eng katta qiymatini toping.',
      'Найдите наибольшее значение функции $y=3\\sin x+4\\cos x$.'),
    T('$5$', '$5$'),
    T('<b>Yordamchi burchak.</b> '
      '$3\\sin x+4\\cos x=5\\left(\\dfrac35\\sin x+\\dfrac45\\cos x\\right)$.'
      '<br>$\\left(\\dfrac35\\right)^2+\\left(\\dfrac45\\right)^2=1$, '
      'shuning uchun $\\cos\\varphi=\\dfrac35$, $\\sin\\varphi=\\dfrac45$ '
      'deb olish mumkin.<br>'
      'U holda ifoda $5\\sin(x+\\varphi)$ ga teng, va '
      '$\\sin\\le1$, demak eng katta qiymat $5$.<br>'
      '<i>Erishiladimi?</i> Ha: $x+\\varphi=\\dfrac{\\pi}{2}$ boʻlganda.',
      '<b>Вспомогательный угол.</b> '
      '$3\\sin x+4\\cos x=5\\sin(x+\\varphi)$, где $\\cos\\varphi=\\dfrac35$ '
      'и $\\sin\\varphi=\\dfrac45$.<br>'
      'Так как $\\sin\\le1$, наибольшее значение равно $5$ и достигается '
      'при $x+\\varphi=\\dfrac{\\pi}{2}$.'),
    'E'),

  P(T('$\\cos^2 10^\\circ+\\cos^2 50^\\circ+\\cos^2 70^\\circ$ '
      'ni hisoblang.',
      'Вычислите $\\cos^2 10^\\circ+\\cos^2 50^\\circ+\\cos^2 70^\\circ$.'),
    T('$\\dfrac32$', '$\\dfrac32$'),
    T('<b>Daraja pasaytirish.</b> '
      '$\\cos^2\\alpha=\\dfrac{1+\\cos2\\alpha}{2}$, demak yigʻindi '
      '$=\\dfrac32+\\dfrac12\\bigl(\\cos20^\\circ+\\cos100^\\circ+'
      '\\cos140^\\circ\\bigr)$.<br>'
      '<b>Qavs ichi nolga teng.</b> '
      '$\\cos100^\\circ+\\cos140^\\circ='
      '2\\cos120^\\circ\\cos20^\\circ=-\\cos20^\\circ$, chunki '
      '$\\cos120^\\circ=-\\dfrac12$.<br>'
      'Demak qavs $\\cos20^\\circ-\\cos20^\\circ=0$ va javob '
      '$\\dfrac32$.<br>'
      '<i>Izoh:</i> $20^\\circ$, $100^\\circ$, $140^\\circ$ — bular '
      '$120^\\circ$ ga teng qadamli emas, lekin juftlash baribir ishladi.',
      '<b>Понижение степени.</b> Сумма равна '
      '$\\dfrac32+\\dfrac12\\bigl(\\cos20^\\circ+\\cos100^\\circ+'
      '\\cos140^\\circ\\bigr)$.<br>'
      '<b>Скобка равна нулю:</b> '
      '$\\cos100^\\circ+\\cos140^\\circ=2\\cos120^\\circ\\cos20^\\circ='
      '-\\cos20^\\circ$.<br>'
      'Ответ: $\\dfrac32$.'),
    'D'),

  P(T('$\\sin x=\\dfrac{\\sqrt3}{2}$ tenglamaning $[0;2\\pi]$ kesmadagi '
      'barcha ildizlari yigʻindisini toping.',
      'Найдите сумму всех корней уравнения $\\sin x=\\dfrac{\\sqrt3}{2}$ на '
      'отрезке $[0;2\\pi]$.'),
    T('$\\pi$', '$\\pi$'),
    T('$[0;2\\pi]$ da ildizlar: $x=\\dfrac{\\pi}{3}$ va '
      '$x=\\pi-\\dfrac{\\pi}{3}=\\dfrac{2\\pi}{3}$.<br>'
      'Boshqa yechim yoʻq: $\\sin x>0$ faqat $(0;\\pi)$ da.<br>'
      'Yigʻindi: $\\dfrac{\\pi}{3}+\\dfrac{2\\pi}{3}=\\pi$.',
      'На $[0;2\\pi]$ корни: $\\dfrac{\\pi}{3}$ и $\\dfrac{2\\pi}{3}$ '
      '(других нет, так как $\\sin x>0$ только на $(0;\\pi)$).<br>'
      'Сумма равна $\\pi$.'),
    'G'),

  P(T('$\\cos20^\\circ\\cos40^\\circ\\cos80^\\circ$ ni hisoblang.',
      'Вычислите $\\cos20^\\circ\\cos40^\\circ\\cos80^\\circ$.'),
    T('$\\dfrac18$', '$\\dfrac18$'),
    T('<b>$\\sin20^\\circ$ ga koʻpaytirish hiylasi.</b> Ifodani '
      '$\\sin20^\\circ$ ga koʻpaytirib boʻlamiz va har qadamda '
      '$2\\sin\\theta\\cos\\theta=\\sin2\\theta$ ni qoʻllaymiz:<br>'
      '$2\\sin20^\\circ\\cos20^\\circ=\\sin40^\\circ$;<br>'
      '$2\\sin40^\\circ\\cos40^\\circ=\\sin80^\\circ$;<br>'
      '$2\\sin80^\\circ\\cos80^\\circ=\\sin160^\\circ$.<br>'
      'Demak $8\\sin20^\\circ\\cdot P=\\sin160^\\circ=\\sin20^\\circ$, '
      'bunda $P$ — soʻralgan koʻpaytma.<br>'
      '$\\sin20^\\circ\\ne0$ ga qisqartiramiz: $P=\\dfrac18$.',
      '<b>Приём: домножить на $\\sin20^\\circ$.</b> Трижды применяя '
      '$2\\sin\\theta\\cos\\theta=\\sin2\\theta$, получаем '
      '$8\\sin20^\\circ\\cdot P=\\sin160^\\circ=\\sin20^\\circ$.<br>'
      'Сокращая на $\\sin20^\\circ\\ne0$, находим $P=\\dfrac18$.'),
    'E'),
 ]),
]

DARAJALAR += [
 dict(kod='ancha', nom=T('Ancha qiyin', 'Потруднее'), hue='vhard',
  izoh=T('Variantlarning oxirgi savollari darajasi.',
         'Уровень последних задач варианта.'),
  items=[

  P(T('$1-\\sin x+\\sqrt{3y-x}=0$ tenglik orqali '
      '$\\dfrac{6(x-y)}{\\pi}$ ning qiymatini toping, bunda '
      '$0\\le x\\le\\pi$.',
      'Из равенства $1-\\sin x+\\sqrt{3y-x}=0$ при $0\\le x\\le\\pi$ '
      'найдите $\\dfrac{6(x-y)}{\\pi}$.'),
    T('$2$', '$2$'),
    T('<b>Baholash.</b> $\\sin x\\le1$, demak $1-\\sin x\\ge0$; ildiz '
      'ham $\\ge0$. Ikki nomanfiy sonning yigʻindisi nol boʻlsa, '
      '<b>har ikkisi</b> nolga teng:<br>'
      '$\\sin x=1$ va $3y-x=0$.<br>'
      '<b>Ildizlarni tanlaymiz.</b> $0\\le x\\le\\pi$ da '
      '$\\sin x=1$ faqat $x=\\dfrac{\\pi}{2}$ da.<br>'
      'Shundan $y=\\dfrac{x}{3}=\\dfrac{\\pi}{6}$.<br>'
      '<b>Javob.</b> '
      '$x-y=\\dfrac{\\pi}{2}-\\dfrac{\\pi}{6}=\\dfrac{\\pi}{3}$, demak '
      '$\\dfrac{6(x-y)}{\\pi}=\\dfrac{6}{\\pi}\\cdot\\dfrac{\\pi}{3}=2$.',
      '<b>Оценка.</b> Оба слагаемых неотрицательны, а их сумма равна нулю, '
      'значит $\\sin x=1$ и $3y=x$.<br>'
      '<b>Выбор корня.</b> На $[0;\\pi]$ равенство $\\sin x=1$ даёт '
      '$x=\\dfrac{\\pi}{2}$, откуда $y=\\dfrac{\\pi}{6}$.<br>'
      '<b>Ответ.</b> $x-y=\\dfrac{\\pi}{3}$, поэтому '
      '$\\dfrac{6(x-y)}{\\pi}=2$.'),
    'G', '11-sinf · 2025/26-A №12'),

  P(T('$\\sin20^\\circ\\sin40^\\circ\\sin80^\\circ$ ni hisoblang.',
      'Вычислите $\\sin20^\\circ\\sin40^\\circ\\sin80^\\circ$.'),
    T('$\\dfrac{\\sqrt3}{8}$', '$\\dfrac{\\sqrt3}{8}$'),
    T('<b>Juftlab yigʻindiga oʻtamiz.</b> '
      '$2\\sin20^\\circ\\sin40^\\circ=\\cos20^\\circ-\\cos60^\\circ='
      '\\cos20^\\circ-\\dfrac12$.<br>'
      'Demak $2P=\\left(\\cos20^\\circ-\\dfrac12\\right)\\sin80^\\circ$, '
      'bunda $P$ — soʻralgan koʻpaytma.<br>'
      '$\\cos20^\\circ\\sin80^\\circ=\\dfrac12\\bigl(\\sin100^\\circ+'
      '\\sin60^\\circ\\bigr)=\\dfrac12\\left(\\sin80^\\circ+'
      '\\dfrac{\\sqrt3}{2}\\right)$.<br>'
      'Shundan '
      '$2P=\\dfrac12\\sin80^\\circ+\\dfrac{\\sqrt3}{4}-'
      '\\dfrac12\\sin80^\\circ=\\dfrac{\\sqrt3}{4}$, demak '
      '$P=\\dfrac{\\sqrt3}{8}$.<br>'
      '<i>Tekshirish:</i> '
      '$0{,}342\\cdot0{,}643\\cdot0{,}985\\approx0{,}2165$ va '
      '$\\dfrac{\\sqrt3}{8}\\approx0{,}2165$ ✓',
      '<b>Переходим к суммам.</b> '
      '$2\\sin20^\\circ\\sin40^\\circ=\\cos20^\\circ-\\dfrac12$, поэтому '
      '$2P=\\left(\\cos20^\\circ-\\dfrac12\\right)\\sin80^\\circ$.<br>'
      'Далее $\\cos20^\\circ\\sin80^\\circ=\\dfrac12\\left(\\sin80^\\circ+'
      '\\dfrac{\\sqrt3}{2}\\right)$, и после сокращения '
      '$2P=\\dfrac{\\sqrt3}{4}$, то есть $P=\\dfrac{\\sqrt3}{8}$.<br>'
      '<i>Проверка:</i> $\\approx0{,}2165$ ✓'),
    'E'),

  P(T('Agar $\\operatorname{tg}\\alpha+\\sin\\alpha=1$ va '
      '$0<\\alpha<\\dfrac{\\pi}{2}$ boʻlsa, $(\\sin2\\alpha+2)^2$ ni '
      'hisoblang.',
      'Пусть $\\operatorname{tg}\\alpha+\\sin\\alpha=1$ и '
      '$0<\\alpha<\\dfrac{\\pi}{2}$. Вычислите $(\\sin2\\alpha+2)^2$.'),
    T('$8$', '$8$'),
    T('<b>1. Shartni koʻpaytmaga keltiramiz.</b> Birinchi chorakda '
      '$\\cos\\alpha\\ne0$, shuning uchun shartni $\\cos\\alpha$ ga '
      'koʻpaytirish mumkin:<br>'
      '$\\sin\\alpha+\\sin\\alpha\\cos\\alpha=\\cos\\alpha$,<br>'
      'yaʼni $\\sin\\alpha\\cos\\alpha=\\cos\\alpha-\\sin\\alpha$.<br>'
      '<b>2. Chap tomon — yarim sinus.</b> '
      '$\\sin\\alpha\\cos\\alpha=\\dfrac{\\sin2\\alpha}{2}$, demak<br>'
      '$$\\sin2\\alpha=2(\\cos\\alpha-\\sin\\alpha).$$'
      '<b>3. Endi kvadratga koʻtaramiz.</b> '
      '$D=\\cos\\alpha-\\sin\\alpha$ deb belgilaymiz; u holda '
      '$\\sin2\\alpha=2D$ va<br>'
      '$(\\sin2\\alpha+2)^2=(2D+2)^2=4(D+1)^2$.<br>'
      '<b>4. Kalit hisob.</b> '
      '$D^2=(\\cos\\alpha-\\sin\\alpha)^2=1-\\sin2\\alpha=1-2D$, '
      'shuning uchun<br>'
      '$(D+1)^2=D^2+2D+1=(1-2D)+2D+1=2$.<br>'
      '<b>Javob:</b> $(\\sin2\\alpha+2)^2=4\\cdot2=8$.<br>'
      '<i>Tekshirish:</i> shartdan $\\alpha\\approx0{,}48815$, '
      '$\\sin2\\alpha\\approx0{,}82843=2\\sqrt2-2$, va '
      '$(2\\sqrt2)^2=8$ ✓',
      '<b>1. Приводим условие к произведению.</b> В первой четверти '
      '$\\cos\\alpha\\ne0$, умножаем на него:<br>'
      '$\\sin\\alpha\\cos\\alpha=\\cos\\alpha-\\sin\\alpha$.<br>'
      '<b>2. Слева — половина синуса двойного угла:</b> '
      '$$\\sin2\\alpha=2(\\cos\\alpha-\\sin\\alpha).$$'
      '<b>3. Обозначим</b> $D=\\cos\\alpha-\\sin\\alpha$; тогда '
      '$\\sin2\\alpha=2D$ и $(\\sin2\\alpha+2)^2=4(D+1)^2$.<br>'
      '<b>4. Ключевой шаг.</b> $D^2=1-\\sin2\\alpha=1-2D$, поэтому '
      '$(D+1)^2=(1-2D)+2D+1=2$.<br>'
      '<b>Ответ:</b> $4\\cdot2=8$.<br>'
      '<i>Проверка:</i> $\\alpha\\approx0{,}48815$, '
      '$\\sin2\\alpha\\approx2\\sqrt2-2$, и $(2\\sqrt2)^2=8$ ✓'),
    'F', '9-sinf · 2025/26-A №25 · 11-sinf · 2024 №23'),

  P(T('$\\operatorname{tg}9^\\circ-\\operatorname{tg}27^\\circ-'
      '\\operatorname{tg}63^\\circ+\\operatorname{tg}81^\\circ$ '
      'ni hisoblang.',
      'Вычислите $\\operatorname{tg}9^\\circ-\\operatorname{tg}27^\\circ-'
      '\\operatorname{tg}63^\\circ+\\operatorname{tg}81^\\circ$.'),
    T('$4$', '$4$'),
    T('<b>Juftlab guruhlaymiz.</b> '
      '$\\operatorname{tg}81^\\circ=\\operatorname{ctg}9^\\circ$ va '
      '$\\operatorname{tg}63^\\circ=\\operatorname{ctg}27^\\circ$ '
      '(chunki $9^\\circ+81^\\circ=27^\\circ+63^\\circ=90^\\circ$).<br>'
      'Demak ifoda '
      '$\\bigl(\\operatorname{tg}9^\\circ+\\operatorname{ctg}9^\\circ\\bigr)-'
      '\\bigl(\\operatorname{tg}27^\\circ+'
      '\\operatorname{ctg}27^\\circ\\bigr)$ ga teng.<br>'
      '<b>Asosiy ayniyat.</b> '
      '$\\operatorname{tg}\\theta+\\operatorname{ctg}\\theta='
      '\\dfrac{\\sin^2\\theta+\\cos^2\\theta}{\\sin\\theta\\cos\\theta}='
      '\\dfrac{2}{\\sin2\\theta}$.<br>'
      'Shundan ifoda '
      '$\\dfrac{2}{\\sin18^\\circ}-\\dfrac{2}{\\sin54^\\circ}$.<br>'
      '<b>Maʼlum qiymatlar.</b> '
      '$\\sin18^\\circ=\\dfrac{\\sqrt5-1}{4}$, '
      '$\\sin54^\\circ=\\dfrac{\\sqrt5+1}{4}$, demak<br>'
      '$\\dfrac{8}{\\sqrt5-1}-\\dfrac{8}{\\sqrt5+1}='
      '\\dfrac{8\\bigl((\\sqrt5+1)-(\\sqrt5-1)\\bigr)}{5-1}='
      '\\dfrac{16}{4}=4$.<br>'
      '<i>Tekshirish:</i> $0{,}1584-0{,}5095-1{,}9626+6{,}3138=4{,}0001$ ✓',
      '<b>Группируем в пары.</b> '
      '$\\operatorname{tg}81^\\circ=\\operatorname{ctg}9^\\circ$, '
      '$\\operatorname{tg}63^\\circ=\\operatorname{ctg}27^\\circ$, поэтому '
      'выражение равно '
      '$\\bigl(\\operatorname{tg}9^\\circ+\\operatorname{ctg}9^\\circ\\bigr)-'
      '\\bigl(\\operatorname{tg}27^\\circ+'
      '\\operatorname{ctg}27^\\circ\\bigr)$.<br>'
      '<b>Тождество.</b> '
      '$\\operatorname{tg}\\theta+\\operatorname{ctg}\\theta='
      '\\dfrac{2}{\\sin2\\theta}$, значит выражение равно '
      '$\\dfrac{2}{\\sin18^\\circ}-\\dfrac{2}{\\sin54^\\circ}$.<br>'
      '<b>Значения.</b> $\\sin18^\\circ=\\dfrac{\\sqrt5-1}{4}$, '
      '$\\sin54^\\circ=\\dfrac{\\sqrt5+1}{4}$, откуда '
      '$\\dfrac{16}{4}=4$.<br>'
      '<i>Проверка:</i> $\\approx4{,}0$ ✓'),
    'E'),

  P(T('$\\sin x+\\cos x=\\dfrac{\\sqrt2}{2}$ boʻlsa, '
      '$\\sin^4x+\\cos^4x$ ni toping.',
      'Пусть $\\sin x+\\cos x=\\dfrac{\\sqrt2}{2}$. Найдите '
      '$\\sin^4x+\\cos^4x$.'),
    T('$\\dfrac78$', '$\\dfrac78$'),
    T('<b>1. Koʻpaytma.</b> '
      '$(\\sin x+\\cos x)^2=1+2\\sin x\\cos x=\\dfrac12$, demak '
      '$\\sin x\\cos x=-\\dfrac14$.<br>'
      '<b>2. Toʻrtinchi darajalar.</b> '
      '$\\sin^4x+\\cos^4x=(\\sin^2x+\\cos^2x)^2-2\\sin^2x\\cos^2x='
      '1-2\\left(-\\dfrac14\\right)^2$.<br>'
      '$=1-2\\cdot\\dfrac1{16}=1-\\dfrac18=\\dfrac78$.',
      '<b>1. Произведение.</b> $1+2\\sin x\\cos x=\\dfrac12$, значит '
      '$\\sin x\\cos x=-\\dfrac14$.<br>'
      '<b>2. Четвёртые степени.</b> '
      '$\\sin^4x+\\cos^4x=1-2\\sin^2x\\cos^2x=1-\\dfrac18=\\dfrac78$.'),
    'C'),

  P(T('Uchburchakning tomonlari $7$, $8$ va $9$. Eng katta burchakning '
      'kosinusini toping.',
      'Стороны треугольника равны $7$, $8$ и $9$. Найдите косинус '
      'наибольшего угла.'),
    T('$\\dfrac27$', '$\\dfrac27$'),
    T('Eng katta burchak eng katta tomon ($9$) qarshisida yotadi.<br>'
      '<b>Kosinuslar teoremasi:</b> '
      '$9^2=7^2+8^2-2\\cdot7\\cdot8\\cos C$, yaʼni '
      '$81=113-112\\cos C$.<br>'
      '$112\\cos C=32$, demak '
      '$\\cos C=\\dfrac{32}{112}=\\dfrac{2}{7}$.<br>'
      '<i>Tekshirish:</i> $\\cos C>0$ — burchak oʻtkir, va haqiqatan '
      '$7^2+8^2=113>81=9^2$ ✓',
      'Наибольший угол лежит против стороны $9$.<br>'
      '<b>Теорема косинусов:</b> $81=113-112\\cos C$, откуда '
      '$\\cos C=\\dfrac{32}{112}=\\dfrac27$.<br>'
      '<i>Проверка:</i> $\\cos C>0$, угол острый, и действительно '
      '$7^2+8^2>9^2$ ✓'),
    'G'),

  P(T('$\\dfrac{\\sin^2 70^\\circ-\\sin^2 20^\\circ}'
      '{\\cos^2 25^\\circ-\\sin^2 25^\\circ}$ ni hisoblang.',
      'Вычислите $\\dfrac{\\sin^2 70^\\circ-\\sin^2 20^\\circ}'
      '{\\cos^2 25^\\circ-\\sin^2 25^\\circ}$.'),
    T('$\\operatorname{tg}50^\\circ$', '$\\operatorname{tg}50^\\circ$'),
    T('<b>Surat.</b> Daraja pasaytiramiz:<br>'
      '$\\sin^2 A-\\sin^2 B='
      '\\dfrac{1-\\cos2A}{2}-\\dfrac{1-\\cos2B}{2}='
      '\\dfrac{\\cos2B-\\cos2A}{2}$.<br>'
      'Ayirmani koʻpaytmaga aylantiramiz: '
      '$\\dfrac{\\cos40^\\circ-\\cos140^\\circ}{2}='
      '\\sin90^\\circ\\sin50^\\circ=\\sin50^\\circ$.<br>'
      '<b>Maxraj.</b> $\\cos^2 25^\\circ-\\sin^2 25^\\circ='
      '\\cos50^\\circ$.<br>'
      '<b>Nisbat.</b> '
      '$\\dfrac{\\sin50^\\circ}{\\cos50^\\circ}='
      '\\operatorname{tg}50^\\circ$.<br>'
      '<i>Tekshirish:</i> '
      '$\\dfrac{0{,}8830-0{,}1170}{0{,}8213-0{,}1787}='
      '\\dfrac{0{,}7660}{0{,}6428}\\approx1{,}1918$, va '
      '$\\operatorname{tg}50^\\circ\\approx1{,}1918$ ✓',
      '<b>Числитель.</b> '
      '$\\sin^2 A-\\sin^2 B=\\dfrac{\\cos2B-\\cos2A}{2}='
      '\\sin(A+B)\\sin(A-B)$, поэтому он равен '
      '$\\sin90^\\circ\\sin50^\\circ=\\sin50^\\circ$.<br>'
      '<b>Знаменатель.</b> $\\cos^2 25^\\circ-\\sin^2 25^\\circ='
      '\\cos50^\\circ$.<br>'
      '<b>Отношение:</b> $\\operatorname{tg}50^\\circ$.<br>'
      '<i>Проверка:</i> $\\approx1{,}1918$ ✓'),
    'E'),
 ]),
]
