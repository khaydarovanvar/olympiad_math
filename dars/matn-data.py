# -*- coding: utf-8 -*-
"""Matn masalalari — 9, 10 va 11-sinf uchun toʻliq maʼlumotnoma.

Sakkizta tuman bosqichi variantida matn masalalari savollarning 3,8 % ini
beradi (9 ta savol). Ular eng kam formula talab qiladigan, lekin eng koʻp
diqqat talab qiladigan guruh: butun ish nomaʼlumni <b>toʻgʻri</b> tanlashga
va shartni tenglamaga aynan koʻchirishga tushadi.

Hamma son qiymati yozilishidan oldin kompyuterda tekshirilgan.

$...$ — KaTeX.
"""

T = lambda uz, ru: (uz, ru)

CHROME = dict(
 title=T('Matn masalalari · 9–11-sinf', 'Текстовые задачи · 9–11 классы'),
 eyebrow=T('Olimpiadaga tayyorgarlik · tuman (shahar) bosqichi',
           'Подготовка к олимпиаде · районный (городской) этап'),
 h1=T('Matn masalalari', 'Текстовые задачи'),
 sub=T('Nomaʼlumni tanlash, proporsiya va foiz, birgalikdagi ish, harakat, '
       'aralashma, taqsimlash, soat va kalendar — har biri ishlangan misol '
       'bilan. Soʻngra toʻrt darajadagi 26 ta masala va batafsil yechim; '
       '9 tasi haqiqiy variantlardan.',
       'Выбор неизвестного, пропорция и проценты, совместная работа, '
       'движение, смеси, распределение, часы и календарь — каждое с '
       'разобранным примером. Затем 26 задач четырёх уровней с подробными '
       'решениями; 9 из них — из настоящих вариантов.'),
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

BOLIMLAR = []

# ======================================== A · Shartni tenglamaga koʻchirish ====
BOLIMLAR.append(dict(kod='A', hue='alg',
 nom=T('Shartni tenglamaga koʻchirish', 'Перевод условия в уравнение'),
 izoh=T('Matn masalasining butun qiyinligi shu boʻlimda. Qolgan hamma narsa '
        'oddiy algebra.',
        'Вся трудность текстовой задачи — здесь. Всё остальное — обычная '
        'алгебра.'),
 items=[

 I('usul', T('Nomaʼlumni toʻgʻri tanlash', 'Правильный выбор неизвестного'),
   T('Soʻralgan kattalikni emas, <b>eng koʻp gapirilgan</b> kattalikni '
     '$x$ deb oling. Koʻpincha shundan keyin tenglama chiziqli boʻlib '
     'qoladi.',
     'Обозначайте через $x$ не искомую величину, а ту, о которой в условии '
     '<b>говорится чаще всего</b>. Часто после этого уравнение становится '
     'линейным.'),
   T('«Har bola bittadan olsa $7$ ta ortadi, ikkitadan olsa $16$ ta '
     'yetmaydi»: $x$ — <b>bolalar soni</b>, olmalar soni esa ikki xil '
     'yoziladi: $x+7$ va $2x-16$ (12-masala).',
     '«Если каждый берёт по одному — остаётся $7$, по два — не хватает '
     '$16$»: за $x$ берём <b>число детей</b>, а число яблок записываем '
     'двумя способами: $x+7$ и $2x-16$ (задача 12).')),

 I('usul', T('Bir kattalikni ikki xil yozish',
             'Записать одну величину двумя способами'),
   T('Masalada bitta kattalik ikki marta tilga olinsa, uni ikki xil '
     'ifodalab tenglashtiring — tenglama tayyor.',
     'Если одна величина упомянута дважды, выразите её двумя способами и '
     'приравняйте — уравнение готово.'),
   T('Olmalar soni: $x+7=2x-16\\Rightarrow x=23$ — bolalar soni '
     '(12-masala).',
     'Число яблок: $x+7=2x-16\\Rightarrow x=23$ — столько детей '
     '(задача 12).')),

 I('usul', T('Ikki nomaʼlum — ikki tenglama',
             'Два неизвестных — два уравнения'),
   T('Shartda ikkita holat tasvirlansa, har biri bitta tenglama beradi. '
     'Sistemani yechishdan oldin <b>nima soʻralganiga</b> qarang: '
     'koʻpincha $x$ va $y$ alohida emas, ularning yigʻindisi yoki ayirmasi '
     'kerak.',
     'Если в условии описаны две ситуации, каждая даёт уравнение. Прежде чем '
     'решать систему, посмотрите, <b>что спрашивают</b>: часто нужны не $x$ '
     'и $y$ по отдельности, а их сумма или разность.'),
   T('$3a+5b=36$ va $5a+3b=46$: qoʻshsak $8(a+b)=82$, demak '
     '$a+b=10{,}25$ va $4$ kunda $41\\%$ — $a$, $b$ ni alohida topish '
     'shart emas (9-masala).',
     '$3a+5b=36$ и $5a+3b=46$: сложив, получаем $8(a+b)=82$, то есть '
     '$a+b=10{,}25$ и за $4$ дня $41\\%$ — находить $a$ и $b$ по '
     'отдельности не нужно (задача 9).')),

 I('usul', T('Yigʻish va ayirish hiylasi', 'Приём сложения и вычитания'),
   T('$\\begin{cases}px+qy=A\\\\qx+py=B\\end{cases}$ — simmetrik sistemada '
     'tenglamalarni qoʻshing va ayiring: '
     '$(p+q)(x+y)=A+B$, $(p-q)(x-y)=A-B$.',
     'В симметричной системе '
     '$\\begin{cases}px+qy=A\\\\qx+py=B\\end{cases}$ сложите и вычтите '
     'уравнения: $(p+q)(x+y)=A+B$ и $(p-q)(x-y)=A-B$.'),
   T('Shu ikki natijadan $x+y$ va $x-y$ darhol chiqadi — koʻpincha aynan '
     'shular soʻraladi (9 va 10-masalalar).',
     'Из этих двух равенств сразу получаются $x+y$ и $x-y$ — как раз их '
     'обычно и спрашивают (задачи 9 и 10).')),

 I('usul', T('Javobni shartga qaytarib tekshirish',
             'Проверка ответа подстановкой в условие'),
   T('Matn masalasida javobni <b>soʻzlar bilan</b> tekshiring, tenglamaga '
     'emas: tenglamani notoʻgʻri tuzgan boʻlsangiz, u baribir «toʻgʻri» '
     'chiqadi.',
     'Проверяйте ответ <b>по тексту</b>, а не по уравнению: если уравнение '
     'составлено неверно, оно всё равно «сойдётся».'),
   T('$23$ bola: bittadan olsa $30-23=7$ ta ortadi ✓, ikkitadan olsa '
     '$46-30=16$ ta yetmaydi ✓ (12-masala).',
     '$23$ ребёнка: по одному — остаётся $30-23=7$ ✓, по два — не хватает '
     '$46-30=16$ ✓ (задача 12).')),
]))

# ================================================= B · Nisbat, proporsiya, foiz
BOLIMLAR.append(dict(kod='B', hue='nt',
 nom=T('Nisbat, proporsiya va foiz', 'Отношение, пропорция и проценты'),
 izoh=T('Foiz savollarida eng koʻp uchraydigan xato — foizlarni '
        '<b>oʻrtacha</b> olish. Toʻgʻri yoʻl: har doim pulga (yoki '
        'miqdorga) oʻtish.',
        'Самая частая ошибка в процентных задачах — <b>усреднять</b> '
        'проценты. Верный путь: всегда переходить к деньгам (или '
        'количеству).'),
 items=[

 I('tarif', T('Foiz — yuzdan bir ulush', 'Процент — сотая доля'),
   T('$p\\%$ dan $A$ = $\\dfrac{p}{100}A$. $A$ ni $p\\%$ ga oshirish — '
     '$A\\left(1+\\dfrac{p}{100}\\right)$, kamaytirish — '
     '$A\\left(1-\\dfrac{p}{100}\\right)$.',
     '$p\\%$ от $A$ равно $\\dfrac{p}{100}A$. Увеличить $A$ на $p\\%$ — '
     '$A\\left(1+\\dfrac{p}{100}\\right)$, уменьшить — '
     '$A\\left(1-\\dfrac{p}{100}\\right)$.'),
   T('$25$ dollarlik mahsulotga $25\\%$ chegirma — chegirma summasi '
     '$6{,}25$ dollar, narxi esa $18{,}75$ dollar.',
     'Скидка $25\\%$ на товар за $25$ долларов — сама скидка $6{,}25$, '
     'цена $18{,}75$.')),

 I('usul', T('Umumiy chegirma foizi', 'Общий процент скидки'),
   T('Bir necha xariddagi <b>umumiy</b> chegirma foizi = '
     '$\\dfrac{\\text{chegirmalar yigʻindisi}}'
     '{\\text{asl narxlar yigʻindisi}}\\cdot100\\%$. '
     'Foizlarning oʻrtachasi emas!',
     'Общий процент скидки по нескольким покупкам = '
     '$\\dfrac{\\text{сумма скидок}}{\\text{сумма исходных цен}}\\cdot'
     '100\\%$. Не среднее процентов!'),
   T('$10$ ga $10\\%$, $15$ ga $15\\%$, $25$ ga $25\\%$: chegirmalar '
     '$1+2{,}25+6{,}25=9{,}5$, asl narx $50$, demak '
     '$\\dfrac{9{,}5}{50}=19\\%$ — foizlar oʻrtachasi '
     '$\\dfrac{10+15+25}{3}\\approx16{,}7\\%$ boʻlardi, bu '
     '<b>notoʻgʻri</b> (8-masala).',
     '$10$ со скидкой $10\\%$, $15$ — $15\\%$, $25$ — $25\\%$: скидки '
     '$1+2{,}25+6{,}25=9{,}5$ при исходных $50$, то есть $19\\%$. Среднее '
     'процентов дало бы $\\approx16{,}7\\%$ — это <b>неверно</b> '
     '(задача 8).'),
   T('Chegirmalar yigʻindisi $\\sum p_ia_i$, asl narx $\\sum a_i$, demak '
     'umumiy foiz $\\dfrac{\\sum p_ia_i}{\\sum a_i}$ — bu '
     '$p_i$ larning <b>narxlar bilan ogʻirlangan</b> oʻrtachasi. '
     'Oddiy oʻrtacha $\\dfrac{\\sum p_i}{n}$ ga u faqat hamma '
     '$a_i$ teng boʻlgandagina teng boʻladi.',
     'Сумма скидок равна $\\sum p_ia_i$, исходная сумма $\\sum a_i$, '
     'поэтому общий процент равен $\\dfrac{\\sum p_ia_i}{\\sum a_i}$ — '
     'это среднее $p_i$, <b>взвешенное ценами</b>. Обычному среднему '
     '$\\dfrac{\\sum p_i}{n}$ оно равно только при равных $a_i$.')),

 I('usul', T('Proporsiya va teskari proporsiya',
             'Прямая и обратная пропорциональность'),
   T('Toʻgʻri proporsional: $\\dfrac{y_1}{x_1}=\\dfrac{y_2}{x_2}$. '
     'Teskari proporsional: $x_1y_1=x_2y_2$.',
     'Прямая пропорциональность: $\\dfrac{y_1}{x_1}=\\dfrac{y_2}{x_2}$. '
     'Обратная: $x_1y_1=x_2y_2$.'),
   T('Konfet masalasida narx $p$ ni kiritsak: «$80$ ta konfet narxi» '
     '$=80p$, «$20$ soʻmga olinadigan konfet soni» '
     '$=\\dfrac{20}{p}$; ular teng, demak $p=\\dfrac12$ '
     '(7-masala).',
     'В задаче о конфетах вводим цену $p$: «цена $80$ конфет» $=80p$, '
     '«сколько конфет на $20$ сум» $=\\dfrac{20}{p}$; они равны, откуда '
     '$p=\\dfrac12$ (задача 7).')),

 I('usul', T('Butunni $1$ deb olish', 'Принять целое за $1$'),
   T('Qismlar haqida gap ketsa, butunni $1$ (yoki $100\\%$) deb oling — '
     'aniq son bilmasa ham boʻladi.',
     'Если речь о частях, примите целое за $1$ (или $100\\%$) — конкретное '
     'число знать не обязательно.'),
   T('«Ishning qanday qismi bajariladi» — bu yerda ishning oʻzi $1$, '
     'kunlik unum esa $a$ va $b$ (9-masala).',
     '«Какая часть работы выполнена» — здесь вся работа равна $1$, а '
     'дневные производительности — $a$ и $b$ (задача 9).')),
]))

# ================================================== C · Birgalikdagi ish =======
BOLIMLAR.append(dict(kod='C', hue='alg',
 nom=T('Birgalikdagi ish', 'Совместная работа'),
 izoh=T('Ish masalalarining kaliti bitta: <b>vaqtni emas, unumni</b> '
        'qoʻshing.',
        'Ключ к задачам о работе один: складывайте <b>не время, а '
        'производительность</b>.'),
 items=[

 I('formula', T('Unum — vaqtning teskarisi',
                'Производительность — обратная величина времени'),
   T('Ishchi ishni $t$ kunda bajarsa, uning bir kunlik unumi '
     '$\\dfrac1t$. Birgalikda ishlaganda unumlar <b>qoʻshiladi</b>.',
     'Если работник выполняет работу за $t$ дней, его дневная '
     'производительность равна $\\dfrac1t$. При совместной работе '
     'производительности <b>складываются</b>.'),
   T('Ikkovi birga $\\dfrac1{t_1}+\\dfrac1{t_2}$ unum bilan ishlaydi, demak '
     'vaqt $\\dfrac{t_1t_2}{t_1+t_2}$.',
     'Вместе они работают с производительностью '
     '$\\dfrac1{t_1}+\\dfrac1{t_2}$, поэтому время равно '
     '$\\dfrac{t_1t_2}{t_1+t_2}$.'),
   T('Birgalikdagi unum '
     '$\\dfrac1{t_1}+\\dfrac1{t_2}=\\dfrac{t_1+t_2}{t_1t_2}$; vaqt — '
     'unumning teskarisi, demak $\\dfrac{t_1t_2}{t_1+t_2}$.',
     'Совместная производительность равна '
     '$\\dfrac{t_1+t_2}{t_1t_2}$; время — обратная к ней величина, то есть '
     '$\\dfrac{t_1t_2}{t_1+t_2}$.')),

 I('usul', T('Ikki holat — ikki tenglama',
             'Две ситуации — два уравнения'),
   T('«$m$ kun birinchi, $n$ kun ikkinchi ishlasa ishning $P$ qismi '
     'bajariladi» degan har bir gap $ma+nb=P$ tenglamasini beradi '
     '($a$, $b$ — kunlik unumlar).',
     'Каждая фраза «$m$ дней первый, $n$ дней второй — выполнено $P$ '
     'работы» даёт уравнение $ma+nb=P$, где $a$, $b$ — дневные '
     'производительности.'),
   T('$3a+5b=0{,}36$ va $5a+3b=0{,}46$ — soʻralgani $4(a+b)$, demak '
     'faqat $a+b$ kerak (9-masala).',
     '$3a+5b=0{,}36$ и $5a+3b=0{,}46$; спрашивают $4(a+b)$, значит нужна '
     'только сумма (задача 9).')),

 I('usul', T('Faqat kerakli kombinatsiyani topish',
             'Находить только нужную комбинацию'),
   T('Sistemani toʻliq yechmang: tenglamalarni shunday qoʻshing yoki '
     'ayiringki, darhol soʻralgan ifoda chiqsin. Vaqt tejaladi va xato '
     'kamayadi.',
     'Не решайте систему полностью: складывайте или вычитайте уравнения '
     'так, чтобы сразу получилось искомое. Быстрее и с меньшим риском '
     'ошибки.'),
   T('$3a+5b$ va $5a+3b$ ni qoʻshsak $8a+8b$ — bu aynan $8(a+b)$, '
     'ayirsak $2(a-b)$ (9-masala).',
     'Сумма $3a+5b$ и $5a+3b$ равна $8(a+b)$, а разность — $2(a-b)$ '
     '(задача 9).')),

 I('usul', T('Quvur va hovuz — manfiy unum',
             'Трубы и бассейн — отрицательная производительность'),
   T('Boʻshatuvchi quvurning unumi <b>manfiy</b>: toʻldiruvchi $\\dfrac1p$, '
     'boʻshatuvchi $-\\dfrac1q$, birgalikda '
     '$\\dfrac1p-\\dfrac1q$.',
     'У сливной трубы производительность <b>отрицательна</b>: наполняющая '
     'даёт $\\dfrac1p$, сливная $-\\dfrac1q$, вместе '
     '$\\dfrac1p-\\dfrac1q$.'),
   T('$\\dfrac1p<\\dfrac1q$ boʻlsa hovuz hech qachon toʻlmaydi — javobni '
     'yozishdan oldin shuni tekshiring.',
     'Если $\\dfrac1p<\\dfrac1q$, бассейн не наполнится никогда — проверьте '
     'это, прежде чем писать ответ.')),
]))

# ===================================================== D · Harakat masalalari ==
BOLIMLAR.append(dict(kod='D', hue='geo',
 nom=T('Harakat masalalari', 'Задачи на движение'),
 izoh=T('$s=vt$ dan boshqa hech narsa kerak emas; qiyinligi — qaysi '
        'kattalikni tenglashtirishni tanlashda.',
        'Ничего, кроме $s=vt$, не нужно; трудность — выбрать, что '
        'приравнивать.'),
 items=[

 I('formula', T('Asosiy formula', 'Основная формула'),
   T('$s=vt$; $v=\\dfrac{s}{t}$; $t=\\dfrac{s}{v}$. Birliklar bir xil '
     'boʻlishi shart (km va soat, yoki m va sekund).',
     '$s=vt$; $v=\\dfrac{s}{t}$; $t=\\dfrac{s}{v}$. Единицы должны быть '
     'согласованы (км и часы либо м и секунды).'),
   T('$20$ daqiqa $=\\dfrac13$ soat — bu almashtirishni unutish eng koʻp '
     'uchraydigan xato.',
     '$20$ минут $=\\dfrac13$ часа — забыть этот перевод проще всего.')),

 I('formula', T('Qarama-qarshi va bir tomonga harakat',
                'Встречное движение и движение в одну сторону'),
   T('Qarshi tomonga: yaqinlashish tezligi $v_1+v_2$.<br>'
     'Bir tomonga (quvish): yaqinlashish tezligi $v_1-v_2$.',
     'Навстречу: скорость сближения $v_1+v_2$.<br>'
     'В одну сторону (догоняет): скорость сближения $v_1-v_2$.'),
   T('Soat strelkalari ham shunday: minut mili soat milini '
     '$6-0{,}5=5{,}5$ daraja/daqiqa tezlik bilan quvadi (13-masala).',
     'Стрелки часов — тот же случай: минутная догоняет часовую со '
     'скоростью $6-0{,}5=5{,}5$ градуса в минуту (задача 13).')),

 I('usul', T('Daryo boʻylab', 'Движение по реке'),
   T('Oqim boʻylab $v+u$, oqimga qarshi $v-u$ ($v$ — qayiq, $u$ — oqim '
     'tezligi). Sol (oʻzi suzmaydigan jism) oqim tezligi bilan '
     'harakatlanadi.',
     'По течению $v+u$, против течения $v-u$ ($v$ — скорость лодки, $u$ — '
     'течения). Плот движется со скоростью течения.'),
   T('$v-u>0$ boʻlishi shart, aks holda qayiq oqimga qarshi yura '
     'olmaydi.',
     'Обязательно $v-u>0$, иначе лодка не сможет идти против течения.')),

 I('usul', T('Oʻrtacha tezlik', 'Средняя скорость'),
   T('Oʻrtacha tezlik $=\\dfrac{\\text{umumiy yoʻl}}'
     '{\\text{umumiy vaqt}}$ — tezliklarning oʻrta arifmetigi '
     '<b>emas</b>.',
     'Средняя скорость $=\\dfrac{\\text{весь путь}}{\\text{всё время}}$ — '
     '<b>не</b> среднее арифметическое скоростей.'),
   T('Yoʻlning yarmini $v_1$, yarmini $v_2$ tezlikda yursa, oʻrtacha tezlik '
     '$\\dfrac{2v_1v_2}{v_1+v_2}$ — garmonik oʻrta (20-masala).',
     'Если половина пути пройдена со скоростью $v_1$, половина — $v_2$, '
     'средняя равна $\\dfrac{2v_1v_2}{v_1+v_2}$ — среднее гармоническое '
     '(задача 20).'),
   T('Yoʻl $2s$ boʻlsin. Vaqt '
     '$\\dfrac{s}{v_1}+\\dfrac{s}{v_2}=\\dfrac{s(v_1+v_2)}{v_1v_2}$, '
     'demak '
     '$v_{\\text{oʻrt}}=\\dfrac{2s}{\\frac{s(v_1+v_2)}{v_1v_2}}='
     '\\dfrac{2v_1v_2}{v_1+v_2}$ — $s$ qisqaradi.',
     'Пусть путь равен $2s$. Время '
     '$\\dfrac{s}{v_1}+\\dfrac{s}{v_2}=\\dfrac{s(v_1+v_2)}{v_1v_2}$, '
     'поэтому '
     '$v=\\dfrac{2s}{\\frac{s(v_1+v_2)}{v_1v_2}}='
     '\\dfrac{2v_1v_2}{v_1+v_2}$ — $s$ сокращается.')),
]))

# ======================================== E · Aralashma va konsentratsiya ======
BOLIMLAR.append(dict(kod='E', hue='nt',
 nom=T('Aralashma va konsentratsiya', 'Смеси и концентрация'),
 izoh=T('Bitta qoida: <b>sof moddani</b> hisoblang, foizni emas.',
        'Одно правило: считайте <b>чистое вещество</b>, а не проценты.'),
 items=[

 I('usul', T('Sof modda saqlanadi', 'Чистое вещество сохраняется'),
   T('Aralashtirganda sof moddalar miqdori qoʻshiladi: '
     '$c_1m_1+c_2m_2=c(m_1+m_2)$, bunda $c$ — ulush.',
     'При смешивании количества чистого вещества складываются: '
     '$c_1m_1+c_2m_2=c(m_1+m_2)$, где $c$ — доля.'),
   T('Suv qoʻshilsa sof modda <b>oʻzgarmaydi</b>, faqat massa ortadi — '
     'tenglama bir qatorda tuziladi.',
     'При доливании воды количество чистого вещества <b>не меняется</b>, '
     'растёт только масса — уравнение пишется в одну строку.')),

 I('usul', T('Quritish va bugʻlatish', 'Сушка и выпаривание'),
   T('Mevani quritganda <b>quruq qism</b> oʻzgarmaydi. Shuning uchun '
     'hisobni suv boʻyicha emas, quruq modda boʻyicha oling.',
     'При сушке фруктов не меняется <b>сухая часть</b>. Поэтому считайте '
     'по сухому веществу, а не по воде.'),
   T('$10$ kg mevada $99\\%$ suv, quritilgach $98\\%$ suv qolsa: quruq '
     'qism $0{,}1$ kg oʻzgarmaydi, u endi $2\\%$, demak yangi massa '
     '$5$ kg (14-masala).',
     'В $10$ кг фруктов $99\\%$ воды; после сушки воды $98\\%$: сухая часть '
     '$0{,}1$ кг не изменилась и составляет теперь $2\\%$, значит масса '
     'стала $5$ кг (задача 14).')),

 I('usul', T('Aralashtirish qoidasi («krest»)',
             'Правило смешения («крест»)'),
   T('$c_1$ va $c_2$ konsentratsiyali eritmalardan $c$ olish uchun '
     'massalar nisbati $m_1:m_2=(c_2-c):(c-c_1)$.',
     'Чтобы из растворов с концентрациями $c_1$ и $c_2$ получить $c$, массы '
     'берут в отношении $m_1:m_2=(c_2-c):(c-c_1)$.'),
   T('Bu qoida yuqoridagi tenglamani oʻzgartirib yozishdan boshqa narsa '
     'emas — ishonchsiz boʻlsangiz, sof moddadan boshlang.',
     'Это правило — лишь переписанное уравнение выше; если сомневаетесь, '
     'начинайте с чистого вещества.'),
   T('$c_1m_1+c_2m_2=c(m_1+m_2)$ dan '
     '$m_1(c-c_1)=m_2(c_2-c)$.',
     'Из $c_1m_1+c_2m_2=c(m_1+m_2)$ следует '
     '$m_1(c-c_1)=m_2(c_2-c)$.')),
]))

# ========================================== F · Taqsimlash va baholash =========
BOLIMLAR.append(dict(kod='F', hue='comb',
 nom=T('Taqsimlash, ball va tengsizlik bilan baholash',
       'Распределение, баллы и оценка неравенством'),
 izoh=T('«Eng koʻpi bilan nechta» degan savollarda tenglama emas, '
        '<b>tengsizlik</b> tuziladi — soʻng butun sonlarga oʻtiladi.',
        'В вопросах «какое наибольшее число» составляют не уравнение, а '
        '<b>неравенство</b>, после чего переходят к целым числам.'),
 items=[

 I('usul', T('Ball hisobini chiziqli ifodaga aylantirish',
             'Счёт баллов как линейное выражение'),
   T('$c$ ta toʻgʻri, $n$ ta notoʻgʻri javob boʻlsa va har toʻgʻrisi $p$ '
     'ball, har notoʻgʻrisi $-q$ ball bersa, ball $=pc-qn$. '
     'Javob berilganlar soni maʼlum boʻlsa, $n$ ni $c$ orqali yozing.',
     'Если $c$ ответов верны, $n$ неверны, за верный дают $p$, за неверный '
     'снимают $q$, то балл равен $pc-qn$. Если известно число данных '
     'ответов, выразите $n$ через $c$.'),
   T('$15$ ta javob, $c$ tasi toʻgʻri: ball '
     '$=3c-(15-c)=4c-15$ — bitta oʻzgaruvchili chiziqli ifoda '
     '(15-masala).',
     '$15$ ответов, из них $c$ верных: балл $=3c-(15-c)=4c-15$ — линейное '
     'выражение с одной переменной (задача 15).')),

 I('usul', T('Tengsizlikdan butun songa', 'От неравенства к целому числу'),
   T('$4c-15<17$ dan $c<8$; $c$ butun, demak $c\\le7$ va eng katta qiymat '
     '$c=7$.',
     'Из $4c-15<17$ следует $c<8$; так как $c$ целое, $c\\le7$, и '
     'наибольшее значение $c=7$.'),
   T('«$<$» va «$\\le$» ni farqlang: $c<8$ da $c=8$ <b>yaroqsiz</b>. '
     'Chegarani tekshirish — javobning yarmi (15-masala).',
     'Различайте «$<$» и «$\\le$»: при $c<8$ значение $c=8$ '
     '<b>не подходит</b>. Проверка границы — половина ответа '
     '(задача 15).')),

 I('usul', T('Ortiqcha va yetishmovchilik', 'Избыток и недостаток'),
   T('«$a$ ta ortadi» va «$b$ ta yetmaydi» gaplari bir xil miqdorni '
     'ikki xil yozadi: $kx+a$ va $mx-b$.',
     'Фразы «остаётся $a$» и «не хватает $b$» описывают одно и то же '
     'количество двумя способами: $kx+a$ и $mx-b$.'),
   T('Bu klassik «ortiqcha-kamchilik» sxemasi: '
     '$x=\\dfrac{a+b}{m-k}$ (12-masala).',
     'Это классическая схема «избыток — недостаток»: '
     '$x=\\dfrac{a+b}{m-k}$ (задача 12).')),

 I('usul', T('Idish va ichidagisi', 'Сосуд и содержимое'),
   T('«Ichida $n$ ta narsa boʻlgan qutining vazni» tipidagi masalada '
     'ikki holatni ayiring: quti vazni <b>qisqaradi</b>.',
     'В задачах «вес коробки с $n$ предметами» вычтите одну ситуацию из '
     'другой: вес коробки <b>сокращается</b>.'),
   T('$4$ kitob $\\to10$ kg, $6$ kitob $\\to13$ kg: ayirma '
     '$2$ kitob $=3$ kg, demak kitob $1{,}5$ kg va quti '
     '$10-4\\cdot1{,}5=4$ kg (11-masala).',
     '$4$ книги — $10$ кг, $6$ книг — $13$ кг: разность $2$ книги $=3$ кг, '
     'значит книга $1{,}5$ кг, а коробка $10-6=4$ кг (задача 11).')),
]))

# ============================================== G · Soat va kalendar ==========
BOLIMLAR.append(dict(kod='G', hue='comb',
 nom=T('Soat va kalendar', 'Часы и календарь'),
 izoh=T('Bu ikki mavzu ham qoldiqqa tushadi: soatda — burchakka, kalendarda '
        '— $7$ ga boʻlgandagi qoldiqqa.',
        'Обе темы сводятся к остаткам: в часах — к углам, в календаре — к '
        'остатку по модулю $7$.'),
 items=[

 I('formula', T('Strelkalar tezligi', 'Скорости стрелок'),
   T('Minut mili $1$ daqiqada $6^\\circ$, soat mili $0{,}5^\\circ$ '
     'buriladi. Yaqinlashish tezligi $5{,}5^\\circ$/daqiqa.',
     'Минутная стрелка проходит $6^\\circ$ в минуту, часовая — '
     '$0{,}5^\\circ$. Скорость сближения $5{,}5^\\circ$ в минуту.'),
   T('$h$ soat $m$ daqiqada soat mili $30h+0{,}5m$ darajada, minut mili '
     '$6m$ darajada (nol — soat $12$ tomonda).',
     'В $h$ часов $m$ минут часовая стрелка на $30h+0{,}5m$ градусах, '
     'минутная — на $6m$ (нуль — направление на $12$).')),

 I('usul', T('Strelkalar qachon ustma-ust tushadi',
             'Когда стрелки совпадают'),
   T('Boshlangʻich burchak farqini $5{,}5$ ga boʻling — shuncha daqiqadan '
     'soʻng ustma-ust tushadi.',
     'Разделите начальную разность углов на $5{,}5$ — через столько минут '
     'они совпадут.'),
   T('Soat $5{:}20$: soat mili $150+10=160^\\circ$, minut mili '
     '$120^\\circ$, farq $40^\\circ$, demak '
     '$\\dfrac{40}{5{,}5}=\\dfrac{80}{11}$ daqiqa (13-masala).',
     '$5{:}20$: часовая на $160^\\circ$, минутная на $120^\\circ$, разность '
     '$40^\\circ$, значит $\\dfrac{40}{5{,}5}=\\dfrac{80}{11}$ минуты '
     '(задача 13).')),

 I('usul', T('Hafta kunlari — $7$ ga qoldiq',
             'Дни недели — остаток по модулю $7$'),
   T('Boshlangʻich kundan $k$ kun oʻtgach hafta kuni $k\\bmod7$ bilan '
     'aniqlanadi. Dushanbadan boshlansa, $k$-kun '
     '$k\\bmod7$ ga qarab: $1$ — dushanba, …, $0$ — yakshanba.',
     'Через $k$ дней день недели определяется остатком $k\\bmod7$. Если '
     'отсчёт с понедельника, то $k$-й день: $1$ — понедельник, …, $0$ — '
     'воскресенье.'),
   T('Hafta davomiy jarayonlarda avval bir <b>toʻliq haftada</b> qancha '
     'bajarilishini hisoblang, keyin qolganini kun-baqun sanang '
     '(16-masala).',
     'В недельных процессах сначала посчитайте, сколько делается за '
     '<b>полную неделю</b>, а остаток досчитайте по дням (задача 16).')),

 I('usul', T('Haftalik davr bilan sanash', 'Счёт недельными циклами'),
   T('Har hafta bir xil miqdor bajarilsa, umumiy miqdorni haftalik '
     'miqdorga boʻling: butun qismi — toʻliq haftalar, qoldigʻi esa '
     'kun-baqun sanaladi.',
     'Если за каждую неделю делается одно и то же, разделите общее '
     'количество на недельное: целая часть — полные недели, остаток '
     'досчитывается по дням.'),
   T('Dushanba $25$ bet, qolgan kunlari $4$ betdan: haftasiga '
     '$25+6\\cdot4=49$ bet (16-masala).',
     'По понедельникам $25$ страниц, в прочие дни по $4$: за неделю '
     '$25+6\\cdot4=49$ страниц (задача 16).')),
]))


def P(savol, javob, yechim, bolim, manba='', rasm=None):
    return dict(savol=savol, javob=javob, yechim=yechim, bolim=bolim,
                manba=manba, rasm=rasm)


DARAJALAR = [
 dict(kod='oson', nom=T('Oson', 'Лёгкие'), hue='easy',
  izoh=T('Bitta tenglama.', 'Одно уравнение.'),
  items=[

  P(T('Sonning $30\\%$ i $24$ ga teng. Shu sonni toping.',
      '$30\\%$ числа равны $24$. Найдите это число.'),
    T('$80$', '$80$'),
    T('$0{,}3x=24\\Rightarrow x=\\dfrac{24}{0{,}3}=80$.',
      '$0{,}3x=24\\Rightarrow x=80$.'), 'B'),

  P(T('Narx $200$ soʻmdan $250$ soʻmga koʻtarildi. Necha foizga?',
      'Цена выросла с $200$ до $250$ сум. На сколько процентов?'),
    T('$25\\%$', '$25\\%$'),
    T('Oʻsish $50$ soʻm, asl narxga nisbatan '
      '$\\dfrac{50}{200}=0{,}25=25\\%$.',
      'Рост на $50$ сум, то есть $\\dfrac{50}{200}=25\\%$.'), 'B'),

  P(T('Ishchi ishni $6$ soatda, ikkinchisi $12$ soatda bajaradi. Birgalikda '
      'necha soatda bajarishadi?',
      'Первый выполняет работу за $6$ часов, второй — за $12$. За сколько '
      'часов они сделают её вместе?'),
    T('$4$ soat', '$4$ часа'),
    T('Unumlar: $\\dfrac16+\\dfrac1{12}=\\dfrac{3}{12}=\\dfrac14$, demak '
      'vaqt $4$ soat.',
      'Производительности: $\\dfrac16+\\dfrac1{12}=\\dfrac14$, значит $4$ '
      'часа.'), 'C'),

  P(T('Avtomobil $180$ km yoʻlni $2{,}5$ soatda bosdi. Oʻrtacha tezligini '
      'toping.',
      'Автомобиль проехал $180$ км за $2{,}5$ часа. Найдите среднюю '
      'скорость.'),
    T('$72$ km/soat', '$72$ км/ч'),
    T('$v=\\dfrac{180}{2{,}5}=72$ km/soat.',
      '$v=\\dfrac{180}{2{,}5}=72$ км/ч.'), 'D'),

  P(T('$40$ kg $15\\%$ li eritmada necha kg tuz bor?',
      'Сколько килограммов соли в $40$ кг $15\\%$-го раствора?'),
    T('$6$ kg', '$6$ кг'),
    T('$0{,}15\\cdot40=6$ kg.', '$0{,}15\\cdot40=6$ кг.'), 'E'),

  P(T('Bugun seshanba. $30$ kundan keyin hafta kuni qaysi boʻladi?',
      'Сегодня вторник. Какой день недели будет через $30$ дней?'),
    T('Payshanba', 'Четверг'),
    T('$30=4\\cdot7+2$, demak seshanbadan $2$ kun keyin — payshanba.',
      '$30=4\\cdot7+2$, значит через два дня после вторника — четверг.'),
    'G'),
 ]),

 dict(kod='orta', nom=T('Oʻrtacha', 'Средние'), hue='med',
  izoh=T('Variantlardagi asosiy daraja.', 'Основной уровень вариантов.'),
  items=[

  P(T('$80$ ta konfet shuncha pul turadiki, $20$ soʻmga shuncha dona '
      'konfet sotib olish mumkin. $100$ soʻmga necha dona konfet sotib '
      'olish mumkin?',
      '$80$ конфет стоят столько сум, сколько конфет можно купить на $20$ '
      'сум. Сколько конфет можно купить на $100$ сум?'),
    T('$200$ ta', '$200$'),
    T('<b>Nomaʼlum — narx.</b> Bitta konfet $p$ soʻm boʻlsin.<br>'
      '«$80$ ta konfetning narxi» $=80p$ soʻm.<br>'
      '«$20$ soʻmga olinadigan konfetlar soni» $=\\dfrac{20}{p}$ ta.<br>'
      'Shart boʻyicha bu ikki <b>son</b> teng:<br>'
      '$80p=\\dfrac{20}{p}\\Rightarrow p^2=\\dfrac{20}{80}=\\dfrac14'
      '\\Rightarrow p=\\dfrac12$ (narx musbat).<br>'
      '<b>Javob.</b> $100$ soʻmga '
      '$\\dfrac{100}{0{,}5}=200$ ta konfet.<br>'
      '<i>Tekshirish:</i> $80$ ta konfet $40$ soʻm; $20$ soʻmga $40$ ta — '
      'va haqiqatan $80\\cdot0{,}5=40$ ✓',
      '<b>Неизвестное — цена.</b> Пусть конфета стоит $p$ сум.<br>'
      'Тогда «цена $80$ конфет» $=80p$, а «число конфет на $20$ сум» '
      '$=\\dfrac{20}{p}$, и по условию они равны:<br>'
      '$80p=\\dfrac{20}{p}\\Rightarrow p=\\dfrac12$.<br>'
      '<b>Ответ.</b> На $100$ сум — $200$ конфет.<br>'
      '<i>Проверка:</i> $80$ конфет стоят $40$ сум, и на $20$ сум берут '
      '$40$ конфет ✓'),
    'B', '9-sinf · 2024 №3'),

  P(T('Jahongir doʻkonda $10$ dollarlik mahsulotni $10\\%$ chegirma bilan, '
      '$15$ dollarlikni $15\\%$ chegirma bilan va $25$ dollarlikni '
      '$25\\%$ chegirma bilan sotib oldi. U umumiy necha foiz chegirma '
      'oldi?',
      'Покупатель взял товар за $10$ долларов со скидкой $10\\%$, за $15$ '
      'долларов со скидкой $15\\%$ и за $25$ долларов со скидкой $25\\%$. '
      'Какой процент скидки он получил в целом?'),
    T('$19\\%$', '$19\\%$'),
    T('<b>Chegirmalarni dollarda hisoblaymiz.</b><br>'
      '$10$ dan $10\\%$: $1$ dollar;<br>'
      '$15$ dan $15\\%$: $2{,}25$ dollar;<br>'
      '$25$ dan $25\\%$: $6{,}25$ dollar.<br>'
      'Jami chegirma $1+2{,}25+6{,}25=9{,}5$ dollar.<br>'
      '<b>Asl narx</b> $10+15+25=50$ dollar.<br>'
      'Umumiy chegirma: $\\dfrac{9{,}5}{50}=0{,}19=19\\%$.<br>'
      '<i>Xato ogohlantirishi:</i> foizlarning oʻrtachasi '
      '$\\dfrac{10+15+25}{3}\\approx16{,}7\\%$ — bu <b>notoʻgʻri</b>, '
      'chunki xaridlar har xil summada.',
      '<b>Считаем скидки в долларах:</b> $1$, $2{,}25$ и $6{,}25$, всего '
      '$9{,}5$.<br>'
      '<b>Исходная сумма</b> $50$ долларов, поэтому скидка равна '
      '$\\dfrac{9{,}5}{50}=19\\%$.<br>'
      '<i>Осторожно:</i> среднее процентов даёт $\\approx16{,}7\\%$ — это '
      '<b>неверно</b>, покупки разной величины.'),
    'B', '9-sinf · 2025/26-B №12'),

  P(T('Agar Alisher $3$ kun, Anvar $5$ kun ishlasa ishning $36\\%$ i '
      'bajariladi. Agar Alisher $5$ kun, Anvar $3$ kun ishlasa ishning '
      '$46\\%$ i bajariladi. Ikkovi birgalikda $4$ kun ishlasa ishning '
      'qanday qismi bajariladi?',
      'Если первый работает $3$ дня, а второй $5$ дней, выполняется $36\\%$ '
      'работы. Если первый $5$ дней, а второй $3$ дня — $46\\%$. Какая '
      'часть работы будет выполнена, если оба проработают $4$ дня?'),
    T('$41\\%$', '$41\\%$'),
    T('<b>Unumlarni belgilaymiz.</b> $a$ — Alisherning bir kunlik unumi, '
      '$b$ — Anvarniki (ishning ulushida).<br>'
      '$\\begin{cases}3a+5b=0{,}36\\\\5a+3b=0{,}46\\end{cases}$<br>'
      '<b>Qoʻshamiz.</b> $8a+8b=0{,}82$, demak $a+b=0{,}1025$.<br>'
      '<b>Soʻralgani.</b> $4$ kun birgalikda: '
      '$4(a+b)=4\\cdot0{,}1025=0{,}41=41\\%$.<br>'
      '<i>Izoh:</i> $a$ va $b$ ni alohida topish shart emas — bu yechimni '
      'ancha qisqartiradi.<br>'
      '<i>Tekshirish:</i> ayirsak $2a-2b=0{,}10$, demak $a-b=0{,}05$, '
      '$a=0{,}07625$, $b=0{,}02625$; u holda '
      '$3a+5b=0{,}22875+0{,}13125=0{,}36$ ✓',
      '<b>Производительности.</b> $a$ и $b$ — дневные доли работы:<br>'
      '$\\begin{cases}3a+5b=0{,}36\\\\5a+3b=0{,}46\\end{cases}$<br>'
      '<b>Складываем:</b> $8(a+b)=0{,}82$, то есть $a+b=0{,}1025$.<br>'
      '<b>Ответ:</b> $4(a+b)=0{,}41=41\\%$.<br>'
      '<i>Проверка:</i> из разности $a-b=0{,}05$, откуда '
      '$a=0{,}07625$, $b=0{,}02625$ и $3a+5b=0{,}36$ ✓'),
    'C', '9-sinf · 2024 №20'),

  P(T('$9$ ta avtobus va $12$ ta tramvay $966$ nafar yoʻlovchini tashiydi. '
      '$4$ ta avtobus va $17$ ta tramvay esa $931$ nafarni tashiydi. Bitta '
      'avtobus va bitta tramvayga sigʻadigan yoʻlovchilar soni bir-biridan '
      'qancha farq qiladi?',
      '$9$ автобусов и $12$ трамваев перевозят $966$ пассажиров, а $4$ '
      'автобуса и $17$ трамваев — $931$. На сколько различается '
      'вместимость автобуса и трамвая?'),
    T('$7$ ta', '$7$'),
    T('<b>Sistema.</b> $a$ — avtobus sigʻimi, $t$ — tramvayniki:<br>'
      '$\\begin{cases}9a+12t=966\\\\4a+17t=931\\end{cases}$<br>'
      '<b>Yechamiz.</b> Birinchisini $3$ ga qisqartiramiz: '
      '$3a+4t=322$.<br>'
      '$a$ ni yoʻqotamiz: birinchi tenglamani $17$ ga, ikkinchisini '
      '$12$ ga koʻpaytirib ayiramiz:<br>'
      '$17\\cdot966-12\\cdot931=16422-11172=5250$ va '
      '$17\\cdot9a-12\\cdot4a=105a$, demak $a=50$.<br>'
      '$12t=966-450=516\\Rightarrow t=43$.<br>'
      '<b>Farq:</b> $50-43=7$.<br>'
      '<i>Tekshirish:</i> $4\\cdot50+17\\cdot43=200+731=931$ ✓',
      '<b>Система.</b> $a$ — вместимость автобуса, $t$ — трамвая:<br>'
      '$\\begin{cases}9a+12t=966\\\\4a+17t=931\\end{cases}$<br>'
      'Исключая $a$, получаем $105a=5250$, то есть $a=50$, и тогда '
      '$t=43$.<br>'
      '<b>Разность:</b> $7$.<br>'
      '<i>Проверка:</i> $4\\cdot50+17\\cdot43=931$ ✓'),
    'A', '10-sinf · 2024 №5'),

  P(T('Ichida $4$ ta kitob boʻlgan qutining vazni $10$ kg, ichida $6$ ta '
      'kitob boʻlgan xuddi shu qutining vazni $13$ kg. Barcha kitoblar '
      'bir xil vaznda boʻlsa, boʻsh qutining vaznini toping.',
      'Коробка с $4$ книгами весит $10$ кг, та же коробка с $6$ книгами — '
      '$13$ кг. Все книги одинаковы. Найдите вес пустой коробки.'),
    T('$4$ kg', '$4$ кг'),
    T('<b>Ikki holatni ayiramiz</b> — quti vazni qisqaradi:<br>'
      '$6$ kitob $-$ $4$ kitob $=13-10$, yaʼni $2$ kitob $=3$ kg, demak '
      'bitta kitob $1{,}5$ kg.<br>'
      '<b>Quti.</b> $10-4\\cdot1{,}5=10-6=4$ kg.<br>'
      '<i>Tekshirish:</i> $4+6\\cdot1{,}5=4+9=13$ ✓',
      '<b>Вычитаем одну ситуацию из другой</b> — вес коробки сокращается:<br>'
      '$2$ книги $=3$ кг, значит книга весит $1{,}5$ кг.<br>'
      '<b>Коробка:</b> $10-6=4$ кг.<br>'
      '<i>Проверка:</i> $4+9=13$ ✓'),
    'F', '11-sinf · 2025/26-A №2'),

  P(T('Bir bazmda har bir bola bittadan olma olsa, savatda yana $7$ ta olma '
      'ortib qoladi. Agar har bola ikkitadan olsa, $16$ ta olma yetmay '
      'qoladi. Bazmda nechta bola boʻlgan?',
      'Если каждый ребёнок возьмёт по одному яблоку, в корзине останется '
      'ещё $7$. Если по два — не хватит $16$ яблок. Сколько было детей?'),
    T('$23$ ta', '$23$'),
    T('<b>Olmalar sonini ikki xil yozamiz.</b> $x$ — bolalar soni.<br>'
      'Bittadan olishganda: olmalar $=x+7$.<br>'
      'Ikkitadan olishganda $16$ ta yetmaydi: olmalar $=2x-16$.<br>'
      '<b>Tenglashtiramiz.</b> $x+7=2x-16\\Rightarrow x=23$.<br>'
      '<b>Tekshirish.</b> Olmalar $23+7=30$ ta; ikkitadan kerak boʻlsa '
      '$46$ ta kerak, yetmaydigani $46-30=16$ ✓',
      '<b>Число яблок — двумя способами.</b> Пусть детей $x$.<br>'
      'По одному: яблок $x+7$. По два: яблок $2x-16$.<br>'
      '<b>Приравниваем:</b> $x+7=2x-16\\Rightarrow x=23$.<br>'
      '<b>Проверка.</b> Яблок $30$; на двоих каждому нужно $46$, не хватает '
      '$16$ ✓'),
    'F', '11-sinf · 2025/26-A №4'),

  P(T('Hozir soat $5{:}20$ boʻlsa, necha daqiqadan soʻng soat va minut mili '
      'birinchi marta ustma-ust tushadi?',
      'Сейчас $5{:}20$. Через сколько минут часовая и минутная стрелки '
      'впервые совпадут?'),
    T('$\\dfrac{80}{11}$ daqiqa', '$\\dfrac{80}{11}$ минуты'),
    T('<b>Burchaklarni hisoblaymiz</b> ($12$ tomoni — nol, soat yoʻnalishi '
      'boʻyicha).<br>'
      'Soat mili: $30\\cdot5+0{,}5\\cdot20=150+10=160^\\circ$.<br>'
      'Minut mili: $6\\cdot20=120^\\circ$.<br>'
      'Farq: $160-120=40^\\circ$ — minut mili orqada.<br>'
      '<b>Yaqinlashish tezligi.</b> Minut mili $6^\\circ$/daq, soat mili '
      '$0{,}5^\\circ$/daq, demak farq $5{,}5^\\circ$/daq tezlikda '
      'kamayadi.<br>'
      '<b>Vaqt.</b> '
      '$t=\\dfrac{40}{5{,}5}=\\dfrac{400}{55}=\\dfrac{80}{11}$ daqiqa '
      '($\\approx7$ daq $16$ s).<br>'
      '<i>Tekshirish:</i> $t=\\dfrac{80}{11}$ da minut mili '
      '$120+6t=120+\\dfrac{480}{11}$, soat mili '
      '$160+0{,}5t=160+\\dfrac{40}{11}$; ikkalasi ham '
      '$\\dfrac{1800}{11}$ ✓',
      '<b>Углы</b> (нуль — на $12$, по часовой стрелке).<br>'
      'Часовая: $150+10=160^\\circ$; минутная: $120^\\circ$; разность '
      '$40^\\circ$.<br>'
      '<b>Сближение</b> идёт со скоростью $6-0{,}5=5{,}5^\\circ$ в '
      'минуту.<br>'
      '<b>Время:</b> $t=\\dfrac{40}{5{,}5}=\\dfrac{80}{11}$ минуты '
      '($\\approx7$ мин $16$ с).<br>'
      '<i>Проверка:</i> обе стрелки оказываются на '
      '$\\dfrac{1800}{11}$ градусах ✓'),
    'G', '10-sinf · 2025/26-A №19'),
 ]),
]

DARAJALAR += [
 dict(kod='qiyin', nom=T('Qiyin', 'Трудные'), hue='hard',
  izoh=T('Nomaʼlumni tanlash yoki baholash kerak.',
         'Нужно выбрать неизвестное или оценивать.'),
  items=[

  P(T('$10$ kg mevaning $99\\%$ i suv. Uni quritgandan soʻng suv ulushi '
      '$98\\%$ boʻldi. Quritilgan mevaning massasini toping.',
      'В $10$ кг фруктов $99\\%$ воды. После сушки доля воды стала $98\\%$. '
      'Найдите массу высушенных фруктов.'),
    T('$5$ kg', '$5$ кг'),
    T('<b>Oʻzgarmas kattalik — quruq modda.</b> Boshida quruq qism '
      '$1\\%$, yaʼni $0{,}1$ kg. Quritishda faqat suv chiqadi, quruq '
      'modda <b>oʻzgarmaydi</b>.<br>'
      '<b>Yangi massa.</b> Endi quruq modda $2\\%$ ni tashkil qiladi:<br>'
      '$0{,}02m=0{,}1\\Rightarrow m=5$ kg.<br>'
      '<i>Tekshirish:</i> $5$ kg da suv $4{,}9$ kg — bu $98\\%$ ✓<br>'
      '<i>Izoh:</i> javob gʻalati tuyuladi ($1\\%$ oʻzgarish massani ikki '
      'barobar kamaytirdi), lekin quruq moddaning ulushi $1\\%$ dan '
      '$2\\%$ ga — ikki barobar oshdi.',
      '<b>Неизменная величина — сухое вещество.</b> Сначала это $1\\%$, то '
      'есть $0{,}1$ кг; при сушке уходит только вода.<br>'
      '<b>Новая масса.</b> Теперь сухое вещество составляет $2\\%$: '
      '$0{,}02m=0{,}1\\Rightarrow m=5$ кг.<br>'
      '<i>Проверка:</i> в $5$ кг воды $4{,}9$ кг — это $98\\%$ ✓<br>'
      '<i>Замечание:</i> доля сухого вещества выросла с $1\\%$ до $2\\%$, '
      'то есть вдвое — отсюда и вдвое меньшая масса.'),
    'E'),

  P(T('Imtihon $20$ ta savoldan iborat. Har toʻgʻri javob $3$ ball beradi, '
      'har notoʻgʻri javob uchun $1$ ball ayiriladi, belgilanmagan javob '
      'uchun ball oʻzgarmaydi. Asad $15$ ta savolga javob berdi va '
      'qolganlarini boʻsh qoldirdi. Agar u toʻplagan ball $17$ dan past '
      'boʻlsa, u eng koʻpi bilan nechta savolga toʻgʻri javob bergan?',
      'В экзамене $20$ вопросов. За верный ответ дают $3$ балла, за неверный '
      'снимают $1$, за пропущенный — ноль. Ученик ответил на $15$ вопросов, '
      'остальные пропустил. Если он набрал меньше $17$ баллов, на какое '
      'наибольшее число вопросов он ответил верно?'),
    T('$7$ ta', '$7$'),
    T('<b>Ballni bitta oʻzgaruvchi bilan yozamiz.</b> $c$ — toʻgʻri '
      'javoblar soni; javob berilganlari $15$ ta, demak notoʻgʻrilari '
      '$15-c$ ta.<br>'
      'Ball $=3c-(15-c)=4c-15$.<br>'
      '<b>Tengsizlik.</b> $4c-15<17\\Rightarrow4c<32\\Rightarrow c<8$.<br>'
      '$c$ butun son, demak $c\\le7$ va eng katta qiymat '
      '$c=7$.<br>'
      '<b>Tekshirish.</b> $c=7$: ball $=21-8=13<17$ ✓<br>'
      '$c=8$: ball $=24-7=17$ — «$17$ dan past» sharti '
      '<b>bajarilmaydi</b> ✗',
      '<b>Балл через одну переменную.</b> Пусть $c$ ответов верны, тогда '
      'неверных $15-c$, и балл равен $3c-(15-c)=4c-15$.<br>'
      '<b>Неравенство.</b> $4c-15<17\\Rightarrow c<8$, а так как $c$ целое, '
      '$c\\le7$.<br>'
      '<b>Проверка.</b> При $c=7$ балл $13<17$ ✓; при $c=8$ балл ровно '
      '$17$ — условие «меньше $17$» <b>не выполнено</b> ✗'),
    'F', '11-sinf · 2025/26-A №10'),

  P(T('Bugun dushanba va Asadbek $290$ betli kitobni oʻqishni boshlaydi. U '
      'dushanba kunlari $25$ bet, boshqa kunlari $4$ betdan oʻqisa, '
      'haftaning qaysi kunida kitobni oʻqib tugatadi?',
      'Сегодня понедельник, и школьник начинает книгу в $290$ страниц. По '
      'понедельникам он читает $25$ страниц, в остальные дни — по $4$. В '
      'какой день недели он дочитает книгу?'),
    T('Shanba', 'Суббота'),
    T('<b>1. Haftalik norma.</b> $25+6\\cdot4=25+24=49$ bet.<br>'
      '<b>2. Toʻliq haftalar.</b> '
      '$290=49\\cdot5+45$, demak $5$ hafta ($35$ kun) davomida $245$ bet '
      'oʻqiladi, $45$ bet qoladi.<br>'
      '<b>3. Oltinchi haftani kun-baqun sanaymiz.</b><br>'
      '$36$-kun (dushanba): $+25\\to270$, qoldi $20$;<br>'
      '$37$-kun (seshanba): $274$; $38$: $278$; $39$: $282$; '
      '$40$ (juma): $286$;<br>'
      '$41$-kun (shanba): $286+4=290$ — kitob tugadi.<br>'
      '<b>4. Hafta kuni.</b> $41=5\\cdot7+6$, demak $41$-kun dushanbadan '
      'boshlab oltinchi kun — <b>shanba</b>.<br>'
      '<i>Tekshirish:</i> jumagacha $286<290$, shanba kuni $290$ ga '
      'yetdi ✓',
      '<b>1. Недельная норма:</b> $25+6\\cdot4=49$ страниц.<br>'
      '<b>2. Полные недели:</b> $290=49\\cdot5+45$, то есть за $35$ дней '
      'прочитано $245$ страниц, осталось $45$.<br>'
      '<b>3. Шестая неделя по дням:</b> понедельник $+25\\to270$; далее по '
      '$4$: $274$, $278$, $282$, $286$ (пятница); в субботу '
      '$286+4=290$.<br>'
      '<b>4. День недели:</b> $41=5\\cdot7+6$ — шестой день от '
      'понедельника, то есть <b>суббота</b>.<br>'
      '<i>Проверка:</i> к пятнице $286<290$ ✓'),
    'G', '11-sinf · 2025/26-A №7'),

  P(T('Qayiq oqim boʻylab $30$ km yoʻlni $2$ soatda, qaytishda esa '
      '$3$ soatda bosdi. Oqim tezligini toping.',
      'Лодка прошла $30$ км по течению за $2$ часа, а обратно — за $3$ '
      'часа. Найдите скорость течения.'),
    T('$2{,}5$ km/soat', '$2{,}5$ км/ч'),
    T('Oqim boʻylab tezlik $\\dfrac{30}{2}=15$ km/soat, qarshi '
      '$\\dfrac{30}{3}=10$ km/soat.<br>'
      '$v+u=15$ va $v-u=10$, demak '
      '$u=\\dfrac{15-10}{2}=2{,}5$ km/soat (va $v=12{,}5$).<br>'
      '<i>Tekshirish:</i> $12{,}5+2{,}5=15$ ✓, $12{,}5-2{,}5=10$ ✓',
      'По течению $15$ км/ч, против — $10$ км/ч.<br>'
      'Из $v+u=15$ и $v-u=10$ получаем $u=2{,}5$ км/ч и $v=12{,}5$.<br>'
      '<i>Проверка:</i> $15$ и $10$ ✓'),
    'D'),

  P(T('Bir necha bolaga konfet ulashildi. Har biriga $5$ tadan berilsa '
      '$3$ ta ortadi, $6$ tadan berilsa $4$ ta yetmaydi. Konfetlar soni '
      'nechta?',
      'Конфеты раздали детям. По $5$ — остаётся $3$, по $6$ — не хватает '
      '$4$. Сколько конфет?'),
    T('$38$ ta', '$38$'),
    T('$x$ — bolalar soni. Konfetlar: $5x+3=6x-4$, demak $x=7$.<br>'
      'Konfetlar soni $5\\cdot7+3=38$.<br>'
      '<i>Tekshirish:</i> $6\\cdot7=42$, yetmaydigani $42-38=4$ ✓',
      'Пусть детей $x$. Тогда $5x+3=6x-4$, откуда $x=7$ и конфет '
      '$38$.<br>'
      '<i>Проверка:</i> $42-38=4$ ✓'),
    'F'),

  P(T('$40\\%$ li $6$ litr eritmaga necha litr suv qoʻshilsa $30\\%$ li '
      'eritma hosil boʻladi?',
      'Сколько литров воды надо добавить к $6$ литрам $40\\%$-го раствора, '
      'чтобы получить $30\\%$-й?'),
    T('$2$ litr', '$2$ литра'),
    T('<b>Sof modda oʻzgarmaydi:</b> $0{,}4\\cdot6=2{,}4$ litr.<br>'
      'Yangi hajm $6+x$, yangi ulush $0{,}3$:<br>'
      '$0{,}3(6+x)=2{,}4\\Rightarrow6+x=8\\Rightarrow x=2$.<br>'
      '<i>Tekshirish:</i> $8$ litrda $2{,}4$ litr — bu $30\\%$ ✓',
      '<b>Чистое вещество не меняется:</b> $0{,}4\\cdot6=2{,}4$ л.<br>'
      'Из $0{,}3(6+x)=2{,}4$ получаем $x=2$.<br>'
      '<i>Проверка:</i> в $8$ л ровно $2{,}4$ л — это $30\\%$ ✓'),
    'E'),
 ]),
]

DARAJALAR += [
 dict(kod='ancha', nom=T('Ancha qiyin', 'Потруднее'), hue='vhard',
  izoh=T('Bir necha bosqich yoki nostandart baholash.',
         'Несколько этапов или нестандартная оценка.'),
  items=[

  P(T('Poyezd yoʻlning yarmini $60$ km/soat, qolgan yarmini $40$ km/soat '
      'tezlik bilan bosdi. Butun yoʻldagi oʻrtacha tezligini toping.',
      'Поезд прошёл половину пути со скоростью $60$ км/ч, вторую половину — '
      '$40$ км/ч. Найдите среднюю скорость на всём пути.'),
    T('$48$ km/soat', '$48$ км/ч'),
    T('<b>Oʻrtacha tezlik — yoʻlning vaqtga nisbati.</b> Butun yoʻl '
      '$2s$ boʻlsin.<br>'
      'Vaqt: $\\dfrac{s}{60}+\\dfrac{s}{40}='
      '\\dfrac{2s+3s}{120}=\\dfrac{5s}{120}=\\dfrac{s}{24}$.<br>'
      '$v_{\\text{oʻrt}}=\\dfrac{2s}{s/24}=48$ km/soat.<br>'
      '<i>Xato ogohlantirishi:</i> '
      '$\\dfrac{60+40}{2}=50$ — bu <b>notoʻgʻri</b>, chunki sekin '
      'tezlikda koʻproq vaqt sarflanadi.<br>'
      '<i>Umumiy formula:</i> '
      '$\\dfrac{2v_1v_2}{v_1+v_2}=\\dfrac{2\\cdot60\\cdot40}{100}=48$ ✓',
      '<b>Средняя скорость — путь, делённый на время.</b> Пусть весь путь '
      '$2s$.<br>Время: $\\dfrac{s}{60}+\\dfrac{s}{40}=\\dfrac{s}{24}$, '
      'поэтому $v=\\dfrac{2s}{s/24}=48$ км/ч.<br>'
      '<i>Осторожно:</i> $\\dfrac{60+40}{2}=50$ — <b>неверно</b>: на '
      'медленной половине тратится больше времени.<br>'
      '<i>Формула:</i> $\\dfrac{2v_1v_2}{v_1+v_2}=48$ ✓'),
    'D'),

  P(T('Tovar narxi avval $20\\%$ ga oshirildi, soʻng yangi narxdan '
      '$20\\%$ ga tushirildi. Natijada narx boshlangʻichdan necha foizga '
      'farq qiladi?',
      'Цену повысили на $20\\%$, затем новую цену снизили на $20\\%$. На '
      'сколько процентов итоговая цена отличается от исходной?'),
    T('$4\\%$ ga past', 'ниже на $4\\%$'),
    T('$p\\cdot1{,}2\\cdot0{,}8=0{,}96p$, demak narx '
      '$4\\%$ ga <b>pasaydi</b>.<br>'
      '<i>Nega?</i> Oshirish $p$ dan, tushirish esa kattaroq sondan '
      'hisoblanadi — shuning uchun ular teng emas.<br>'
      '<i>Umumiy holda:</i> $+p\\%$ va $-p\\%$ ketma-ket qoʻllansa, natija '
      'har doim $\\dfrac{p^2}{100}\\%$ ga past.',
      '$p\\cdot1{,}2\\cdot0{,}8=0{,}96p$ — цена <b>снизилась</b> на '
      '$4\\%$.<br>'
      '<i>Почему?</i> Повышение считается от $p$, а снижение — от большего '
      'числа.<br>'
      '<i>В общем случае:</i> после $+p\\%$ и $-p\\%$ цена ниже исходной на '
      '$\\dfrac{p^2}{100}\\%$.'),
    'B'),

  P(T('Ikki ishchi birgalikda ishni $12$ kunda bajaradi. Birinchisi yolgʻiz '
      'ikkinchisiga qaraganda $10$ kun kam vaqt sarflaydi. Har biri '
      'yolgʻiz necha kunda bajaradi?',
      'Двое рабочих вместе выполняют работу за $12$ дней. Первый в одиночку '
      'тратит на $10$ дней меньше второго. За сколько дней каждый выполнит '
      'работу один?'),
    T('$20$ va $30$ kun', '$20$ и $30$ дней'),
    T('$x$ — birinchisining vaqti, ikkinchisiniki $x+10$:<br>'
      '$\\dfrac1x+\\dfrac1{x+10}=\\dfrac1{12}$.<br>'
      '$12(x+10)+12x=x(x+10)$, yaʼni '
      '$x^2+10x-24x-120=0$, demak '
      '$x^2-14x-120=0$.<br>'
      '$x=\\dfrac{14\\pm\\sqrt{196+480}}{2}='
      '\\dfrac{14\\pm26}{2}$; musbat ildiz $x=20$.<br>'
      'Demak $20$ va $30$ kun.<br>'
      '<i>Tekshirish:</i> '
      '$\\dfrac1{20}+\\dfrac1{30}=\\dfrac{3+2}{60}=\\dfrac1{12}$ ✓',
      'Пусть первый тратит $x$ дней, второй $x+10$:<br>'
      '$\\dfrac1x+\\dfrac1{x+10}=\\dfrac1{12}$, откуда '
      '$x^2-14x-120=0$ и $x=20$.<br>'
      'Значит $20$ и $30$ дней.<br>'
      '<i>Проверка:</i> $\\dfrac1{20}+\\dfrac1{30}=\\dfrac1{12}$ ✓'),
    'C'),

  P(T('Kitobning birinchi kuni $\\dfrac13$ qismi, ikkinchi kuni qolganining '
      '$\\dfrac25$ qismi oʻqildi. Uchinchi kuni qolgan $72$ bet oʻqildi. '
      'Kitobda nechta bet bor?',
      'В первый день прочитана $\\dfrac13$ книги, во второй — $\\dfrac25$ '
      'остатка. В третий день дочитаны оставшиеся $72$ страницы. Сколько '
      'страниц в книге?'),
    T('$180$ bet', '$180$ страниц'),
    T('<b>Ulushlar bilan ishlaymiz.</b> Butun kitob $1$.<br>'
      'Birinchi kundan keyin qoldi: $1-\\dfrac13=\\dfrac23$.<br>'
      'Ikkinchi kuni shundan $\\dfrac25$ i oʻqildi, demak qoldi '
      '$\\dfrac23\\cdot\\dfrac35=\\dfrac25$.<br>'
      '<b>Tenglama.</b> $\\dfrac25x=72\\Rightarrow x=180$.<br>'
      '<i>Tekshirish:</i> $1$-kun $60$ bet, qoldi $120$; $2$-kun '
      '$\\dfrac25\\cdot120=48$; qoldi $72$ ✓',
      '<b>Работаем с долями.</b> После первого дня осталось $\\dfrac23$; '
      'во второй прочитано $\\dfrac25$ остатка, значит осталось '
      '$\\dfrac23\\cdot\\dfrac35=\\dfrac25$ книги.<br>'
      '<b>Уравнение:</b> $\\dfrac25x=72\\Rightarrow x=180$.<br>'
      '<i>Проверка:</i> $60$, затем $48$, затем $72$ — всего $180$ ✓'),
    'B'),

  P(T('Ikki shahar orasidagi masofa $300$ km. Ikki avtomobil bir vaqtda '
      'qarama-qarshi yoʻlga chiqdi va $2$ soatdan soʻng uchrashdi. '
      'Birinchisining tezligi ikkinchisinikidan $20$ km/soat katta '
      'boʻlsa, tezliklarni toping.',
      'Расстояние между городами $300$ км. Два автомобиля выехали навстречу '
      'одновременно и встретились через $2$ часа. Скорость первого на $20$ '
      'км/ч больше. Найдите скорости.'),
    T('$85$ va $65$ km/soat', '$85$ и $65$ км/ч'),
    T('<b>Yaqinlashish tezligi.</b> '
      '$v_1+v_2=\\dfrac{300}{2}=150$ km/soat.<br>'
      '$v_1-v_2=20$, demak '
      '$v_1=\\dfrac{150+20}{2}=85$, $v_2=65$.<br>'
      '<i>Tekshirish:</i> $2\\cdot(85+65)=300$ ✓',
      '<b>Скорость сближения:</b> $v_1+v_2=150$ км/ч, и $v_1-v_2=20$, '
      'откуда $v_1=85$, $v_2=65$.<br>'
      '<i>Проверка:</i> $2\\cdot150=300$ ✓'),
    'D'),

  P(T('Sinfda oʻgʻillar soni qizlar sonidan $25\\%$ ga koʻp. Agar $3$ ta '
      'oʻgʻil kelmasa va $3$ ta qiz qoʻshilsa, ularning soni tenglashadi. '
      'Sinfda nechta oʻquvchi bor?',
      'Мальчиков в классе на $25\\%$ больше, чем девочек. Если трое '
      'мальчиков не придут, а три девочки добавятся, их станет поровну. '
      'Сколько учеников в классе?'),
    T('$54$ ta', '$54$'),
    T('$q$ — qizlar soni, oʻgʻillar $1{,}25q$.<br>'
      'Shart: $1{,}25q-3=q+3$, demak $0{,}25q=6$ va '
      '$q=24$.<br>'
      'Oʻgʻillar $1{,}25\\cdot24=30$; jami $24+30=54$.<br>'
      '<i>Tekshirish:</i> $30-3=27$ va $24+3=27$ ✓',
      'Пусть девочек $q$, мальчиков $1{,}25q$.<br>'
      'Из $1{,}25q-3=q+3$ получаем $q=24$, мальчиков $30$, всего '
      '$54$.<br>'
      '<i>Проверка:</i> $27=27$ ✓'),
    'A'),

  P(T('Ikki qotishmada mis ulushi $30\\%$ va $70\\%$. $45\\%$ li $20$ kg '
      'qotishma olish uchun har biridan qancha olish kerak?',
      'В двух сплавах доля меди $30\\%$ и $70\\%$. Сколько нужно взять '
      'каждого, чтобы получить $20$ кг сплава с $45\\%$ меди?'),
    T('$12{,}5$ kg va $7{,}5$ kg', '$12{,}5$ кг и $7{,}5$ кг'),
    T('<b>Sof mis boʻyicha tenglama.</b> Birinchisidan $x$ kg olaylik, '
      'ikkinchisidan $20-x$ kg.<br>'
      'Kerakli mis miqdori: $0{,}45\\cdot20=9$ kg.<br>'
      '$0{,}3x+0{,}7(20-x)=9$<br>'
      '$14-0{,}4x=9\\Rightarrow0{,}4x=5\\Rightarrow x=12{,}5$.<br>'
      'Demak $12{,}5$ kg birinchi qotishmadan va $7{,}5$ kg '
      'ikkinchisidan.<br>'
      '<i>Tekshirish:</i> $3{,}75+5{,}25=9$ kg mis, '
      '$\\dfrac{9}{20}=45\\%$ ✓<br>'
      '<i>«Krest» bilan:</i> $x:(20-x)=(70-45):(45-30)=25:15=5:3$, va '
      '$20$ ni $5:3$ nisbatda boʻlsak $12{,}5$ va $7{,}5$ ✓',
      '<b>Уравнение по чистой меди.</b> Пусть первого сплава $x$ кг, '
      'второго $20-x$ кг; меди нужно $0{,}45\\cdot20=9$ кг:<br>'
      '$0{,}3x+0{,}7(20-x)=9\\Rightarrow x=12{,}5$.<br>'
      'Значит $12{,}5$ кг и $7{,}5$ кг.<br>'
      '<i>Проверка:</i> $3{,}75+5{,}25=9$ кг, то есть $45\\%$ ✓<br>'
      '<i>По «кресту»:</i> $x:(20-x)=(70-45):(45-30)=5:3$ ✓'),
    'E'),
 ]),
]
