# -*- coding: utf-8 -*-
"""Kombinatorika va ehtimollik — 9, 10 va 11-sinf uchun toʻliq maʼlumotnoma.

Sakkizta tuman bosqichi variantida bu blok savollarning 9,6 % ini beradi
(23 ta savol) va oxirgi yili keskin oʻsdi: 2024-yilgi uchala variantda atigi
ikkita savol boʻlsa, 2025/26 variantlarida yigirma bittasi.

Hamma son qiymati yozilishidan oldin kompyuterda tekshirilgan — koʻpi toʻliq
sanab chiqish bilan.

$...$ — KaTeX.
"""

T = lambda uz, ru: (uz, ru)

CHROME = dict(
 title=T('Kombinatorika va ehtimollik · 9–11-sinf',
         'Комбинаторика и вероятность · 9–11 классы'),
 eyebrow=T('Olimpiadaga tayyorgarlik · tuman (shahar) bosqichi',
           'Подготовка к олимпиаде · районный (городской) этап'),
 h1=T('Kombinatorika va ehtimollik', 'Комбинаторика и вероятность'),
 sub=T('Sanash qoidalari, Dirixle printsipi va ehtimollik — har biri '
       'ishlangan misol bilan. Soʻngra toʻrt darajadagi 28 ta masala va '
       'batafsil yechim; 20 tasi haqiqiy variantlardan.',
       'Правила подсчёта, принцип Дирихле и вероятность — каждое с '
       'разобранным примером. Затем 28 задач четырёх уровней с подробными '
       'решениями; 20 из них — из настоящих вариантов.'),
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

# ======================================================= A · Sanash qoidalari ==
BOLIMLAR.append(dict(kod='A', hue='comb',
 nom=T('Sanash qoidalari', 'Правила подсчёта'),
 izoh=T('Ikkita qoida — koʻpaytirish va qoʻshish — hamma sanashning '
        'poydevori. Qolgan formulalar shulardan chiqadi.',
        'Два правила — умножения и сложения — основа любого подсчёта. Все '
        'остальные формулы выводятся из них.'),
 items=[

 I('teorema', T('Koʻpaytirish va qoʻshish qoidalari',
                'Правила умножения и сложения'),
   T('Agar birinchi qadam $m$ xil, undan keyin ikkinchi qadam $n$ xil '
     'bajarilsa, ketma-ketlik $mn$ xil bajariladi (<b>koʻpaytirish</b>). '
     'Agar tanlov bir-birini istisno qiluvchi $m$ va $n$ ta imkoniyatdan '
     'iborat boʻlsa, jami $m+n$ (<b>qoʻshish</b>).',
     'Если первый шаг можно сделать $m$ способами, а затем второй — $n$, то '
     'вся цепочка — $mn$ способами (<b>умножение</b>). Если выбор состоит из '
     'взаимоисключающих $m$ и $n$ возможностей, всего $m+n$ '
     '(<b>сложение</b>).'),
   T('Uch xonali sonlar soni: birinchi raqam $9$ xil ($0$ boʻlmaydi), '
     'qolgan ikkitasi $10$ xil, demak $9\\cdot10\\cdot10=900$.',
     'Число трёхзначных чисел: первая цифра — $9$ вариантов (не $0$), '
     'остальные две — по $10$, итого $9\\cdot10\\cdot10=900$.')),

 I('formula', T('Oʻrin almashtirish va joylashtirish',
                'Перестановки и размещения'),
   T('$n$ ta turli obyektni qatorga terish: $n!$ xil.<br>'
     '$n$ tadan $k$ tasini <b>tartib bilan</b> tanlash: '
     '$A_n^k=\\dfrac{n!}{(n-k)!}$.',
     '$n$ различных объектов в ряд: $n!$ способов.<br>'
     'Выбрать $k$ из $n$ <b>с учётом порядка</b>: '
     '$A_n^k=\\dfrac{n!}{(n-k)!}$.'),
   T('$5$ ta kitobni javonga $5!=120$ xil terish mumkin; ulardan ikkitasini '
     'tartib bilan tanlash $5\\cdot4=20$ xil.',
     '$5$ книг на полке можно расставить $5!=120$ способами; выбрать две из '
     'них с учётом порядка — $5\\cdot4=20$ способов.')),

 I('formula', T('Kombinatsiya', 'Сочетания'),
   T('$n$ tadan $k$ tasini <b>tartibsiz</b> tanlash: '
     '$C_n^k=\\dbinom{n}{k}=\\dfrac{n!}{k!(n-k)!}$. Xossalari: '
     '$\\dbinom{n}{k}=\\dbinom{n}{n-k}$, '
     '$\;\\dbinom{n}{k}+\\dbinom{n}{k+1}=\\dbinom{n+1}{k+1}$.',
     'Выбрать $k$ из $n$ <b>без учёта порядка</b>: '
     '$C_n^k=\\dbinom{n}{k}=\\dfrac{n!}{k!(n-k)!}$. Свойства: '
     '$\\dbinom{n}{k}=\\dbinom{n}{n-k}$, '
     '$\;\\dbinom{n}{k}+\\dbinom{n}{k+1}=\\dbinom{n+1}{k+1}$.'),
   T('$10$ kishidan $3$ kishilik komissiya: '
     '$\\dbinom{10}{3}=\\dfrac{10\\cdot9\\cdot8}{6}=120$.',
     'Комиссия из $3$ человек среди $10$: '
     '$\\dbinom{10}{3}=\\dfrac{10\\cdot9\\cdot8}{6}=120$.'),
   T('Tartib bilan $A_n^k$ xil tanlanadi, har bir toʻplam esa $k!$ marta '
     'takrorlanadi.',
     'С учётом порядка получается $A_n^k$, и каждый набор считается $k!$ '
     'раз.')),

 I('usul', T('Tanlash yoki tanlamaslik', 'Брать или не брать'),
   T('$n$ elementli toʻplamning barcha qism toʻplamlari soni $2^n$: har bir '
     'element uchun ikkita qaror bor.',
     'Число всех подмножеств $n$-элементного множества равно $2^n$: для '
     'каждого элемента два решения.'),
   T('Shu fikr koʻpincha “nechta usul bor” savolini “har bir obyekt uchun '
     'nechta tanlov bor” savoliga aylantiradi.',
     'Эта мысль часто превращает вопрос «сколько способов» в вопрос «сколько '
     'вариантов у каждого объекта».')),

 I('usul', T('Qaysi formulani tanlash kerak', 'Какую формулу выбрать'),
   T('Oʻzingizga bitta savol bering: <b>tartib muhimmi?</b> Muhim boʻlsa — '
     '$A_n^k$ yoki $n!$; muhim boʻlmasa — $\\dbinom{n}{k}$. Ikkinchi savol: '
     'obyektlar <b>bir xilmi</b>?',
     'Задайте себе один вопрос: <b>важен ли порядок?</b> Важен — $A_n^k$ или '
     '$n!$; не важен — $\\dbinom{n}{k}$. Второй вопрос: <b>одинаковы ли</b> '
     'объекты?'),
   T('“Futbol hisobi $3{:}2$ — birinchi yarimda hisob qanday boʻlishi '
     'mumkin” savolida birinchi yarim hisobi $(a;b)$ juftlik, '
     '$0\\le a\\le3$, $0\\le b\\le2$, demak $4\\cdot3=12$ (11-masala).',
     'В задаче «счёт $3{:}2$ — каким мог быть счёт первого тайма» пара '
     '$(a;b)$ с $0\\le a\\le3$, $0\\le b\\le2$ даёт $4\\cdot3=12$ '
     '(задача 11).')),
]))

# =========================================== B · Takrorlanish va cheklovlar ==
BOLIMLAR.append(dict(kod='B', hue='alg',
 nom=T('Takrorlanish va cheklovlar', 'Повторения и ограничения'),
 izoh=T('Bir xil obyektlar, “yonma-yon boʻlmasin”, “har biriga kamida '
        'bittadan” — uchta standart cheklov va uchta standart hiyla.',
        'Одинаковые объекты, «не рядом», «каждому хотя бы по одному» — три '
        'стандартных ограничения и три стандартных приёма.'),
 items=[

 I('formula', T('Bir xil obyektlar bilan oʻrin almashtirish',
                'Перестановки с одинаковыми объектами'),
   T('Agar $n$ ta obyekt ichida $n_1$, $n_2$, $\\ldots$ tasi bir xil boʻlsa, '
     'turli tartiblar soni $\\dfrac{n!}{n_1!\\,n_2!\\cdots}$.',
     'Если среди $n$ объектов есть $n_1$, $n_2$, … одинаковых, то число '
     'различных расстановок равно $\\dfrac{n!}{n_1!\\,n_2!\\cdots}$.'),
   T('“$2025$” sonining raqamlaridan tuzilgan toʻrt xonali sonlar: '
     '$\\dfrac{4!}{2!}=12$ ta tartib, lekin $0$ bilan boshlanadiganlarini '
     'ayirish kerak.',
     'Четырёхзначные числа из цифр числа «$2025$»: $\\dfrac{4!}{2!}=12$ '
     'расстановок, но нужно вычесть начинающиеся с $0$.')),

 I('usul', T('Boʻshliqlarga qoʻyish usuli', 'Метод промежутков'),
   T('“Ikkita bir xil obyekt yonma-yon turmasin” sharti: avval qolganlarini '
     'tering, soʻngra hosil boʻlgan <b>boʻshliqlarga</b> shu obyektlarni '
     'qoʻying. $n$ ta obyekt $n+1$ ta boʻshliq beradi.',
     'Условие «два одинаковых объекта не стоят рядом»: сначала расставьте '
     'остальные, затем разместите эти объекты по образовавшимся '
     '<b>промежуткам</b>. $n$ объектов дают $n+1$ промежуток.'),
   T('$10$ ta koʻk va $10$ ta qizil shar, qizillar yonma-yon boʻlmasin: '
     'koʻklar $11$ ta boʻshliq beradi, sharlar bir xil, demak '
     '$\\dbinom{11}{10}=11$ (13-masala).',
     '$10$ синих и $10$ красных шаров, красные не рядом: синие дают $11$ '
     'промежутков, шары одинаковы, поэтому $\\dbinom{11}{10}=11$ '
     '(задача 13).')),

 I('formula', T('Yulduzcha va tayoqcha', 'Звёзды и перегородки'),
   T('$x_1+\\cdots+x_k=n$ tenglamaning <b>nomanfiy</b> butun yechimlari '
     'soni $\\dbinom{n+k-1}{k-1}$; <b>musbat</b> yechimlar soni '
     '$\\dbinom{n-1}{k-1}$.',
     'Число <b>неотрицательных</b> целых решений уравнения '
     '$x_1+\\cdots+x_k=n$ равно $\\dbinom{n+k-1}{k-1}$; <b>положительных</b> '
     '— $\\dbinom{n-1}{k-1}$.'),
   T('$10$ ta bir xil olmani $3$ bolaga, har biriga kamida bittadan: '
     '$\\dbinom92=36$.',
     '$10$ одинаковых яблок трём детям, каждому хотя бы по одному: '
     '$\\dbinom92=36$.'),
   T('$n$ ta yulduzcha orasiga $k-1$ ta tayoqcha qoʻyiladi; musbat yechimda '
     'tayoqchalar faqat yulduzchalar <b>orasiga</b> tushadi.',
     'Между $n$ звёздами ставятся $k-1$ перегородок; в случае положительных '
     'решений перегородки попадают только <b>между</b> звёздами.')),

 I('usul', T('Turli obyektlarni guruhlarga boʻlish',
             'Разбиение различных объектов на группы'),
   T('$kn$ ta turli obyektni har birida $n$ tadan $k$ ta <b>nomli</b> '
     'guruhga: $\\dfrac{(kn)!}{(n!)^k}$; guruhlar <b>nomsiz</b> boʻlsa, '
     'yana $k!$ ga boʻlinadi.',
     '$kn$ различных объектов в $k$ <b>помеченных</b> групп по $n$: '
     '$\\dfrac{(kn)!}{(n!)^k}$; если группы <b>непомеченные</b>, делим ещё '
     'на $k!$.'),
   T('$12$ oʻquvchini $4$ kishilik uchta guruhga: guruhlar farqlanmasa '
     '$\\dfrac{12!}{(4!)^3\\cdot3!}=5775$ (15-masala).',
     '$12$ учеников на три группы по $4$: если группы неразличимы, '
     '$\\dfrac{12!}{(4!)^3\\cdot3!}=5775$ (задача 15).')),

 I('usul', T('Surʼektiv taqsimot', 'Сюръективное распределение'),
   T('$n$ ta <b>turli</b> obyektni $k$ ta <b>nomli</b> qutiga, har biri '
     'boʻsh boʻlmasin: '
     '$\\sum_{i=0}^{k}(-1)^i\\dbinom{k}{i}(k-i)^n$.',
     '$n$ <b>различных</b> объектов в $k$ <b>помеченных</b> ящиков, ни один '
     'не пуст: $\\sum_{i=0}^{k}(-1)^i\\dbinom{k}{i}(k-i)^n$.'),
   T('$5$ ta turli kitobni $3$ talabaga, har biri kamida bitta: '
     '$3^5-3\\cdot2^5+3=243-96+3=150$ (12-masala).',
     '$5$ различных книг трём студентам, каждому хотя бы одна: '
     '$3^5-3\\cdot2^5+3=150$ (задача 12).')),
]))

# ================================ C · Toʻldiruvchi va inklyuziya-eksklyuziya ==
BOLIMLAR.append(dict(kod='C', hue='nt',
 nom=T('Toʻldiruvchi va inklyuziya-eksklyuziya',
       'Дополнение и включения-исключения'),
 izoh=T('“Kamida bitta” degan har qanday savolda birinchi fikr — teskarisini '
        'sanash.',
        'В любой задаче со словами «хотя бы один» первая мысль — считать '
        'дополнение.'),
 items=[

 I('usul', T('Toʻldiruvchini sanash', 'Подсчёт дополнения'),
   T('“Kamida bitta $X$ bor” $=$ “hammasi” $-$ “birorta ham $X$ yoʻq”. Bu '
     'koʻpincha uzun sanashni bitta ayirishga aylantiradi.',
     '«Есть хотя бы один $X$» $=$ «всего» $-$ «нет ни одного $X$». Это часто '
     'заменяет длинный подсчёт одним вычитанием.'),
   T('Kamida bitta juft raqami boʻlgan toʻrt xonali sonlar: jami $9000$ ta, '
     'ularning $5^4=625$ tasida hamma raqam toq, demak $9000-625=8375$ '
     '(9-masala).',
     'Четырёхзначные числа хотя бы с одной чётной цифрой: всего $9000$, у '
     '$5^4=625$ все цифры нечётны, значит $9000-625=8375$ (задача 9).')),

 I('teorema', T('Inklyuziya-eksklyuziya', 'Формула включений-исключений'),
   T('$|A\\cup B|=|A|+|B|-|A\\cap B|$;<br>'
     '$|A\\cup B\\cup C|=|A|+|B|+|C|-|A\\cap B|-|B\\cap C|-|C\\cap A|+'
     '|A\\cap B\\cap C|$.',
     '$|A\\cup B|=|A|+|B|-|A\\cap B|$;<br>'
     '$|A\\cup B\\cup C|=|A|+|B|+|C|-|A\\cap B|-|B\\cap C|-|C\\cap A|+'
     '|A\\cap B\\cap C|$.'),
   T('Har bir oʻquvchi kamida ikkita sport turini tanlagan boʻlsa, '
     '“jami tanlovlar soni” $=2\\cdot(\\text{ikkitasini tanlaganlar})+'
     '3\\cdot(\\text{uchtasini tanlaganlar})$ — 22-masala shu ikki '
     'tenglamadan iborat.',
     'Если каждый ученик выбрал хотя бы два вида спорта, то «всего выборов» '
     '$=2\\cdot(\\text{выбравшие два})+3\\cdot(\\text{выбравшие три})$ — '
     'задача 22 состоит из этих двух уравнений.'),
   T('Har bir element qanday sanalishini tekshiring: $A$ va $B$ da '
     'boʻlgani ikki marta qoʻshilib, bir marta ayiriladi.',
     'Проверьте, как считается каждый элемент: попавший в $A$ и $B$ '
     'добавляется дважды и вычитается один раз.')),

 I('usul', T('Ikki tomondan sanash', 'Двойной подсчёт'),
   T('Bitta kattalikni ikki xil yoʻl bilan sanang va natijalarni tenglang — '
     'shu tenglama masalani hal qiladi.',
     'Посчитайте одну и ту же величину двумя способами и приравняйте — это '
     'уравнение и решает задачу.'),
   T('“$20$ oʻquvchi; $14$ futbol, $15$ basketbol, $16$ badminton” — '
     'yigʻindi $45$ ta tanlov; ikkinchi tomondan $2x+3y$, bunda $x+y=20$.',
     '«$20$ учеников; $14$ футбол, $15$ баскетбол, $16$ бадминтон» — сумма '
     'равна $45$ выборам; с другой стороны $2x+3y$ при $x+y=20$.')),

 I('usul', T('Holatlarga ajratish', 'Разбор по случаям'),
   T('Murakkab shartni bir-birini istisno qiluvchi holatlarga ajrating va '
     'har birini alohida sanab qoʻshing. Holatlar <b>kesishmasligini</b> '
     'tekshiring.',
     'Сложное условие разбейте на взаимоисключающие случаи, посчитайте '
     'каждый и сложите. Проверьте, что случаи <b>не пересекаются</b>.'),
   T('Shu usul bilan “raqamlari yigʻindisi $43$ boʻlgan besh xonali sonlar” '
     'kabi savollar ham oson sanaladi.',
     'Так считаются и задачи вроде «пятизначные числа с суммой цифр $43$» '
     '.')),
]))

# ========================================================= D · Raqamli sanash ==
BOLIMLAR.append(dict(kod='D', hue='geo',
 nom=T('Raqamli sanash', 'Подсчёт с цифрами'),
 izoh=T('“Nechta sonda …” turidagi savollar variantda har yili bor. Ular '
        'kombinatorika, lekin sonlar nazariyasi tilida yozilgan.',
        'Задачи «сколько чисел …» есть в варианте каждый год. Это '
        'комбинаторика, записанная на языке теории чисел.'),
 items=[

 I('usul', T('Raqam boʻyicha oʻrin sanash', 'Подсчёт по разрядам'),
   T('Sonni raqamlari boʻyicha tuzing: har bir oʻrin uchun nechta tanlov '
     'borligini yozing va koʻpaytiring. Birinchi raqam $0$ boʻlmasligini '
     'unutmang.',
     'Стройте число по разрядам: для каждого разряда выпишите число '
     'вариантов и перемножьте. Не забывайте, что первая цифра не $0$.'),
   T('$1$ dan $9$ gacha raqamlardan tuzilgan uch xonali sonlar soni '
     '$9^3=729$; ularning $11$ ga karralilarini sanash uchun '
     '$a-b+c\\equiv0\\pmod{11}$ shartini qoʻyish kerak.',
     'Трёхзначных чисел из цифр $1$–$9$ ровно $9^3=729$; чтобы посчитать '
     'кратные $11$, нужно условие $a-b+c\\equiv0\\pmod{11}$.')),

 I('usul', T('Raqamlar yigʻindisi berilgan', 'Задана сумма цифр'),
   T('“Raqamlari yigʻindisi $S$ boʻlgan sonlar” — bu '
     '$d_1+\\cdots+d_k=S$ tenglamaning $0\\le d_i\\le9$ shartidagi '
     'yechimlari soni. Yulduzcha–tayoqcha bilan sanab, $9$ dan katta '
     'raqamli holatlarni ayiring.',
     '«Числа с суммой цифр $S$» — это число решений уравнения '
     '$d_1+\\cdots+d_k=S$ при $0\\le d_i\\le9$. Считайте звёздами и '
     'перегородками, вычитая случаи с цифрой больше $9$.'),
   T('$2000$ va $3000$ orasida: son $\\overline{2abc}$, demak $a+b+c=3$ va '
     'yechimlar soni $\\dbinom{3+2}{2}=10$ (10-masala).',
     'Между $2000$ и $3000$: число имеет вид $\\overline{2abc}$, значит '
     '$a+b+c=3$ и решений $\\dbinom{5}{2}=10$ (задача 10).')),

 I('usul', T('Berilgan raqamlarning joyini tanlash',
             'Выбор мест для заданных цифр'),
   T('“Aynan $k$ ta $X$ raqami bor” sharti: avval $X$ turadigan '
     '<b>oʻrinlarni</b> tanlang ($\\dbinom{n}{k}$), keyin qolgan oʻrinlarni '
     'boshqa raqamlar bilan toʻldiring.',
     'Условие «ровно $k$ цифр $X$»: сначала выберите <b>места</b> для $X$ '
     '($\\dbinom{n}{k}$), затем заполните остальные места другими цифрами.'),
   T('$10\\,000$ dan kichik, aynan ikkita “$2$” va bitta “$5$” raqami '
     'boʻlgan sonlar: toʻrt xonali qilib $0$ bilan toʻldirib sanaymiz, '
     'soʻngra boshida $0$ turgan holatlarni alohida hisoblaymiz — javob '
     '$96$ (14-masala).',
     'Числа меньше $10\\,000$ ровно с двумя цифрами «$2$» и одной «$5$»: '
     'дополняем до четырёх разрядов нулями, затем отдельно учитываем случаи '
     'с ведущим нулём — ответ $96$ (задача 14).')),

 I('usul', T('Teskarisini sanash — raqamlarda',
             'Считать дополнение — в цифрах'),
   T('“Tarkibida $8$ raqami bor” — “hammasi” $-$ “$8$ yoʻq”. Ikkinchisi '
     'koʻpaytirish qoidasi bilan darhol sanaladi.',
     '«Содержит цифру $8$» — «всего» $-$ «без восьмёрки». Второе сразу '
     'считается правилом умножения.'),
   T('Dastlabki $8888$ ta natural sonning $3057$ tasida $8$ raqami bor '
     '(16-masala) — bu ham aynan shunday sanaladi.',
     'Среди первых $8888$ натуральных чисел цифра $8$ есть у $3057$ '
     '(задача 16) — считается ровно так же.')),
]))

# ============================================================ E · Ehtimollik ==
BOLIMLAR.append(dict(kod='E', hue='trig',
 nom=T('Ehtimollik', 'Вероятность'),
 izoh=T('2025/26 variantlarida ehtimollik savollari paydo boʻldi. Ularning '
        'hammasi klassik taʼrif yoki geometrik ehtimollik bilan yechiladi.',
        'В вариантах 2025/26 появились задачи на вероятность. Все они '
        'решаются классическим определением или геометрической '
        'вероятностью.'),
 items=[

 I('tarif', T('Klassik ehtimollik', 'Классическая вероятность'),
   T('$P=\\dfrac{\\text{qulay hollar soni}}{\\text{hamma teng imkoniyatli '
     'hollar soni}}$. Surat ham, maxraj ham <b>bir xil usulda</b> '
     'sanalishi shart.',
     '$P=\\dfrac{\\text{число благоприятных исходов}}{\\text{число всех '
     'равновозможных исходов}}$. Числитель и знаменатель обязаны считаться '
     '<b>одинаковым способом</b>.'),
   T('Tanga uch marta tashlanadi: hammasi $2^3=8$ ta natija, “kamida bitta '
     'gerb” esa $8-1=7$ ta, demak $P=\\dfrac78$.',
     'Монету бросают трижды: всего $2^3=8$ исходов, «хотя бы один герб» — '
     '$8-1=7$, значит $P=\\dfrac78$.')),

 I('xossa', T('Qarama-qarshi hodisa va koʻpaytma',
              'Противоположное событие и произведение'),
   T('$P(\\bar A)=1-P(A)$. Bogʻliq boʻlmagan hodisalar uchun '
     '$P(A\\cap B)=P(A)P(B)$; birgalikda boʻlmaganlar uchun '
     '$P(A\\cup B)=P(A)+P(B)$.',
     '$P(\\bar A)=1-P(A)$. Для независимых событий $P(A\\cap B)=P(A)P(B)$; '
     'для несовместных $P(A\\cup B)=P(A)+P(B)$.'),
   T('Ketma-ket tasodifiy almashishlarda har bir qadamning ehtimoli '
     'koʻpaytiriladi, lekin <b>holatlar</b> oʻzgarib borishini hisobga '
     'olish kerak (28-masala shunga misol).',
     'При последовательных случайных обменах вероятности шагов '
     'перемножаются, но нужно учитывать, что <b>состояния</b> меняются '
     '(пример — задача 28).')),

 I('usul', T('Geometrik ehtimollik', 'Геометрическая вероятность'),
   T('Tasodifiy <b>haqiqiy</b> son tanlanganda ehtimol — uzunliklar '
     '(yuzalar) nisbati. Ikki son tanlansa, tekislikda toʻgʻri toʻrtburchak '
     'chizing va shartni soha koʻrinishida yozing.',
     'Если выбирается случайное <b>действительное</b> число, вероятность — '
     'отношение длин (площадей). Для двух чисел нарисуйте прямоугольник на '
     'плоскости и запишите условие как область.'),
   T('$x\\in[5;11]$, $y\\in[3;10]$ va $|x-y|\\le2$: toʻgʻri toʻrtburchak '
     'yuzi $6\\cdot7=42$, qulay soha yuzi $19{,}5$, demak '
     '$P=\\dfrac{13}{28}$ (24-masala).',
     '$x\\in[5;11]$, $y\\in[3;10]$ и $|x-y|\\le2$: площадь прямоугольника '
     '$6\\cdot7=42$, площадь благоприятной области $19{,}5$, значит '
     '$P=\\dfrac{13}{28}$ (задача 24).')),

 I('usul', T('Ehtimollikni sanash bilan hisoblash',
             'Вероятность через подсчёт'),
   T('Agar hamma joylashtirish teng imkoniyatli boʻlsa, ehtimol ikkita '
     'kombinatorik sonning nisbati — shuning uchun avval sanashni oxirigacha '
     'olib boring, keyin boʻling.',
     'Если все расстановки равновозможны, вероятность — отношение двух '
     'комбинаторных чисел, поэтому сначала доведите подсчёт до конца, потом '
     'делите.'),
   T('Ranglangan uchlar masalasida (25-masala) maxraj '
     '$\\dfrac{10!}{3!\\,4!\\,3!}$, surat esa shartni qanoatlantiruvchi '
     'joylashtirishlar soni.',
     'В задаче о раскрашенных вершинах (задача 25) знаменатель равен '
     '$\\dfrac{10!}{3!\\,4!\\,3!}$, а числитель — число расстановок, '
     'удовлетворяющих условию.')),
]))

# ================================================== F · Dirixle va invariant ==
BOLIMLAR.append(dict(kod='F', hue='comb',
 nom=T('Dirixle printsipi va invariant', 'Принцип Дирихле и инвариант'),
 izoh=T('“Kamida nechta” — Dirixle; “mumkinmi/imkonsiz” — invariant. Ikkita '
        'savol turi, ikkita tayyor javob.',
        '«Сколько как минимум» — Дирихле; «возможно ли» — инвариант. Два '
        'типа вопросов, два готовых ответа.'),
 items=[

 I('teorema', T('Dirixle printsipi', 'Принцип Дирихле'),
   T('$n$ ta quticha va $n+1$ ta obyekt boʻlsa, biror qutichada kamida '
     'ikkita obyekt boʻladi. Umumiy holda: $kn+1$ ta obyekt boʻlsa, biror '
     'qutichada kamida $k+1$ tasi boʻladi.',
     'Если $n$ ящиков и $n+1$ объект, то в каком-то ящике окажется не менее '
     'двух объектов. В общем виде: при $kn+1$ объектах в каком-то ящике '
     'будет не менее $k+1$.'),
   T('$13$ kishi orasida kamida ikkitasi bir oyda tugʻilgan: quticha $12$ ta '
     '(oylar), obyekt $13$ ta.',
     'Среди $13$ человек хотя бы двое родились в одном месяце: ящиков $12$ '
     '(месяцы), объектов $13$.'),
   T('Aks holda har bir qutichada koʻpi bilan $k$ ta boʻlar edi, demak jami '
     '$kn$ tadan oshmasdi — ziddiyat.',
     'Иначе в каждом ящике было бы не больше $k$, то есть всего не больше '
     '$kn$ — противоречие.')),

 I('usul', T('Eng yomon holat', 'Худший случай'),
   T('“Kamida nechta olish kerak” savolida <b>eng yomon</b> tartibni '
     'tasavvur qiling: kerakli narsani imkon qadar kech olish. Javob shu '
     'holatga bitta qoʻshilgan son.',
     'В вопросе «сколько нужно взять как минимум» представьте <b>худший</b> '
     'порядок: нужное появляется как можно позже. Ответ — это число плюс '
     'один.'),
   T('$10$ koʻk, $6$ yashil va $5$ qizil shardan har rangdan kamida bittasi '
     'boʻlishi uchun: eng yomon holda $10+6=16$ ta shar bir xil ikki rangda '
     'chiqadi, demak $17$ ta kerak (21-masala).',
     'Чтобы среди $10$ синих, $6$ зелёных и $5$ красных шаров оказался хотя '
     'бы один каждого цвета: в худшем случае первые $10+6=16$ — двух цветов, '
     'поэтому нужно $17$ (задача 21).')),

 I('usul', T('Juftlik invarianti', 'Инвариант чётности'),
   T('Har bir yurishda oʻzgaradigan kattalikning <b>juftligini</b> '
     'kuzating. Agar u har yurishda bir xil tarzda oʻzgarsa, maqsadga '
     'erishish uchun zarur shart chiqadi.',
     'Следите за <b>чётностью</b> величины, меняющейся на каждом ходу. Если '
     'она меняется одинаково, получается необходимое условие достижимости.'),
   T('Har yurishda aynan $7$ ta tanga agʻdarilsa, gerb tomoni yuqoriga '
     'qaragan tangalar soni har safar <b>toq songa</b> oʻzgaradi, demak '
     'uning juftligi har yurishda almashadi — $100$ ta (juft) uchun yurishlar '
     'soni juft boʻlishi shart (23-masala).',
     'Если за ход переворачивают ровно $7$ монет, число монет гербом вверх '
     'меняется на <b>нечётное</b> число, то есть его чётность каждый раз '
     'меняется — значит для $100$ (чётного) число ходов должно быть чётным '
     '(задача 23).')),

 I('usul', T('Quyi baho va misol', 'Оценка и пример'),
   T('“Eng kichik/eng katta” javobli masalada ikkita ish bajariladi: '
     '<b>baho</b> (bundan yaxshiroq boʻlishi mumkin emas) va <b>misol</b> '
     '(shunga erishiladi). Bittasi yetarli emas.',
     'В задачах на «наименьшее/наибольшее» делаются две вещи: <b>оценка</b> '
     '(лучше быть не может) и <b>пример</b> (это достигается). Одного не '
     'хватает.'),
   T('$4$ kishining yoshlari orasidagi farqlar har xil boʻlsa, eng katta va '
     'eng kichik yosh farqi kamida $6$: quyi baho oltita farqni sanashdan, '
     'misol esa $\\{0,1,4,6\\}$ toʻplamidan chiqadi (20-masala).',
     'Если попарные разности возрастов четверых различны, разность '
     'наибольшего и наименьшего не меньше $6$: оценка — из подсчёта шести '
     'разностей, пример — набор $\\{0,1,4,6\\}$ (задача 20).')),
]))

# ================================================== G · Rekursiya bilan sanash ==
BOLIMLAR.append(dict(kod='G', hue='alg',
 nom=T('Rekursiya bilan sanash', 'Подсчёт через рекурсию'),
 izoh=T('Toʻgʻridan sanash qiyin boʻlsa, kichik holatlarni sanab, ular '
        'orasidagi bogʻlanishni toping.',
        'Если считать напрямую трудно, посчитайте малые случаи и найдите '
        'связь между ними.'),
 items=[

 I('usul', T('Kichik holatlardan qoidaga', 'От малых случаев к правилу'),
   T('$n=1,2,3,4$ uchun javobni qoʻlda sanang va ketma-ketlikni tanib '
     'oling. Koʻpincha $a_n=a_{n-1}+a_{n-2}$ (Fibonachchi) yoki '
     '$a_n=2a_{n-1}$ chiqadi.',
     'Посчитайте ответ вручную для $n=1,2,3,4$ и узнайте последовательность. '
     'Чаще всего получается $a_n=a_{n-1}+a_{n-2}$ (Фибоначчи) или '
     '$a_n=2a_{n-1}$.'),
   T('$\\{1,\\ldots,n\\}$ ning ketma-ket elementsiz qism toʻplamlari soni '
     '$F_{n+2}$: $n$ elementni olsak, $n-1$ ni ololmaymiz.',
     'Число подмножеств $\\{1,\\ldots,n\\}$ без соседних элементов равно '
     '$F_{n+2}$: если берём $n$, то $n-1$ взять нельзя.'),
   T('$a_n=a_{n-1}$ (oxirgi elementni olmadik) $+\\,a_{n-2}$ (oldik).',
     '$a_n=a_{n-1}$ (последний элемент не берём) $+\\,a_{n-2}$ (берём).')),

 I('formula', T('Fibonachchi sonlari', 'Числа Фибоначчи'),
   T('$F_1=F_2=1$, $F_{n}=F_{n-1}+F_{n-2}$: $1,1,2,3,5,8,13,21,34,55,89,'
     '144,\\ldots$ — olimpiadada eng koʻp uchraydigan sanash ketma-ketligi.',
     '$F_1=F_2=1$, $F_{n}=F_{n-1}+F_{n-2}$: $1,1,2,3,5,8,13,21,34,55,89,'
     '144,\\ldots$ — самая частая «считающая» последовательность на '
     'олимпиадах.'),
   T('$\\{1,\\ldots,10\\}$ uchun javob $F_{12}=144$ (17-masala).',
     'Для $\\{1,\\ldots,10\\}$ ответ равен $F_{12}=144$ (задача 17).')),

 I('usul', T('Chizmada sanash', 'Подсчёт на рисунке'),
   T('Shakllarni <b>turlarga</b> ajrating (oʻlchami yoki yoʻnalishi '
     'boʻyicha) va har bir turni alohida sanang. Panjarada toʻgʻri '
     'toʻrtburchaklar soni ikkita vertikal va ikkita gorizontal chiziq '
     'tanlash bilan sanaladi.',
     'Разбейте фигуры по <b>типам</b> (размеру или направлению) и считайте '
     'каждый тип отдельно. Число прямоугольников в сетке — это выбор двух '
     'вертикалей и двух горизонталей.'),
   T('$8\\times8$ taxtada toʻgʻri toʻrtburchaklar soni '
     '$\\dbinom92\\cdot\\dbinom92=36^2=1296$.',
     'На доске $8\\times8$ прямоугольников '
     '$\\dbinom92\\cdot\\dbinom92=36^2=1296$.')),

 I('usul', T('Simmetriya bilan sanash', 'Подсчёт через симметрию'),
   T('Agar obyektlar simmetrik boʻlsa, bittasini sanab, natijani '
     'koʻpaytiring — lekin <b>oʻzi-oʻziga oʻtadiganlarini</b> alohida '
     'tekshiring.',
     'Если объекты симметричны, посчитайте один и умножьте — но '
     '<b>переходящие в себя</b> случаи проверьте отдельно.'),
   T('Markaz atrofida joylashgan sakkizta doiracha masalasida (27-masala) '
     'javob simmetriya tufayli faqat markazdagi songa bogʻliq boʻlib '
     'qoladi.',
     'В задаче о восьми кружках вокруг центра (задача 27) благодаря '
     'симметрии ответ зависит только от числа в центре.')),
]))


# ================================================================ Masalalar ==
def P(savol, javob, yechim, bolim, manba='', rasm=None):
    return dict(savol=savol, javob=javob, yechim=yechim, bolim=bolim,
                manba=manba, rasm=rasm)


DARAJALAR = [
 dict(kod='oson', nom=T('Oson', 'Лёгкие'), hue='easy',
  izoh=T('Bitta formula yoki bitta qoida.', 'Одна формула или одно правило.'),
  items=[

  P(T('$5$ ta turli kitobni javonga necha xil tartibda terish mumkin?',
      'Сколькими способами можно расставить на полке $5$ различных книг?'),
    T('$120$', '$120$'),
    T('Bu — $5$ ta obyektning oʻrin almashtirishi: $5!=120$.',
      'Это перестановки $5$ объектов: $5!=120$.'), 'A'),

  P(T('$10$ kishidan $3$ kishilik komissiya necha xil usulda tuziladi?',
      'Сколькими способами можно выбрать комиссию из $3$ человек среди $10$?'),
    T('$120$', '$120$'),
    T('Tartib muhim emas, demak '
      '$\\dbinom{10}{3}=\\dfrac{10\\cdot9\\cdot8}{3\\cdot2\\cdot1}=120$.',
      'Порядок не важен, поэтому '
      '$\\dbinom{10}{3}=\\dfrac{10\\cdot9\\cdot8}{6}=120$.'), 'A'),

  P(T('$4$ xil koʻylak va $3$ xil shimdan necha xil kiyim toʻplami tuzish '
      'mumkin?',
      'Сколько комплектов одежды можно составить из $4$ рубашек и $3$ брюк?'),
    T('$12$', '$12$'),
    T('Koʻpaytirish qoidasi: $4\\cdot3=12$.',
      'Правило умножения: $4\\cdot3=12$.'), 'A'),

  P(T('Nechta uch xonali natural son bor?',
      'Сколько существует трёхзначных натуральных чисел?'),
    T('$900$', '$900$'),
    T('Birinchi raqam $1$–$9$ ($9$ xil), qolgan ikkitasi $0$–$9$ ($10$ xil '
      'dan): $9\\cdot10\\cdot10=900$.',
      'Первая цифра — $1$–$9$ ($9$ вариантов), остальные — $0$–$9$ (по $10$): '
      '$9\\cdot10\\cdot10=900$.'), 'D'),

  P(T('Tanga uch marta tashlandi. Kamida bitta gerb tushish ehtimolini '
      'toping.',
      'Монету бросили три раза. Найдите вероятность того, что выпадет хотя '
      'бы один герб.'),
    T('$\\dfrac78$', '$\\dfrac78$'),
    T('Hamma natijalar soni $2^3=8$. Teskari hodisa — birorta gerb '
      'tushmasligi, uning ehtimoli $\\dfrac18$. Demak '
      '$P=1-\\dfrac18=\\dfrac78$.',
      'Всего исходов $2^3=8$. Противоположное событие — ни одного герба, его '
      'вероятность $\\dfrac18$. Значит $P=1-\\dfrac18=\\dfrac78$.'), 'E'),

  P(T('Oʻyin kubigi tashlandi. Juft son tushish ehtimolini toping.',
      'Бросили игральный кубик. Найдите вероятность того, что выпадет чётное '
      'число.'),
    T('$\\dfrac12$', '$\\dfrac12$'),
    T('Qulay hollar: $2$, $4$, $6$ — uchta; hammasi oltita, demak '
      '$P=\\dfrac36=\\dfrac12$.',
      'Благоприятные исходы: $2$, $4$, $6$ — три; всего шесть, значит '
      '$P=\\dfrac36=\\dfrac12$.'), 'E'),

  P(T('$7$ ta turli kitobdan $2$ tasini necha xil usulda tanlash mumkin?',
      'Сколькими способами можно выбрать $2$ книги из $7$ различных?'),
    T('$21$', '$21$'),
    T('$\\dbinom72=\\dfrac{7\\cdot6}{2}=21$.',
      '$\\dbinom72=\\dfrac{7\\cdot6}{2}=21$.'), 'A'),
 ]),

 dict(kod='orta', nom=T('Oʻrtacha', 'Средние'), hue='med',
  izoh=T('Ikkita qadam yoki bitta cheklov. Yettitasi ham haqiqiy '
         'variantlardan.',
         'Два шага или одно ограничение. Все семь — из настоящих вариантов.'),
  items=[

  P(T('Toʻrt nafar oʻgʻil bola va toʻrt nafar qiz bolani ketma-ket '
      'joylashtirilgan $8$ ta stulda oʻtirishlari kerak. Bunda oʻgʻil '
      'bolalar juft oʻrindagi, qiz bolalar esa toq oʻrindagi stullarga '
      'oʻtiradi. Buni necha usulda amalga oshirish mumkin?',
      'Четыре мальчика и четыре девочки должны сесть на $8$ стульев в ряд, '
      'причём мальчики садятся на чётные места, а девочки — на нечётные. '
      'Сколькими способами это можно сделать?'),
    T('$576$', '$576$'),
    T('Juft oʻrinlar ham, toq oʻrinlar ham $4$ tadan.<br>'
      'Oʻgʻil bolalarni juft oʻrinlarga $4!=24$ xil, qiz bolalarni toq '
      'oʻrinlarga yana $4!=24$ xil joylashtiramiz.<br>'
      'Koʻpaytirish qoidasi: $24\\cdot24=576$.',
      'Чётных мест четыре и нечётных четыре.<br>'
      'Мальчиков на чётные места — $4!=24$ способа, девочек на нечётные — '
      'ещё $4!=24$.<br>'
      'По правилу умножения: $24\\cdot24=576$.'),
    'A', '9-sinf · 2024 №30'),

  P(T('Oʻnli yozuvida hech boʻlmasa bitta juft raqam boʻlgan toʻrt xonali '
      'sonlar nechta?',
      'Сколько четырёхзначных чисел содержат в записи хотя бы одну чётную '
      'цифру?'),
    T('$8375$', '$8375$'),
    T('<b>Teskarisini sanaymiz.</b> Jami toʻrt xonali sonlar: '
      '$9999-1000+1=9000$.<br>'
      'Hamma raqami toq boʻlgan sonlar: har bir oʻrinda $\\{1,3,5,7,9\\}$ '
      'dan bittasi, demak $5^4=625$ ta (birinchi raqam ham toq, shuning '
      'uchun $0$ muammosi yoʻq).<br>'
      'Javob: $9000-625=8375$.',
      '<b>Считаем дополнение.</b> Всего четырёхзначных чисел '
      '$9999-1000+1=9000$.<br>'
      'Чисел, у которых все цифры нечётны: в каждом разряде одна из '
      '$\\{1,3,5,7,9\\}$, то есть $5^4=625$.<br>'
      'Ответ: $9000-625=8375$.'),
    'C', '11-sinf · 2024 №24'),

  P(T('$2000$ va $3000$ orasidagi natural sonlarning nechtasining raqamlari '
      'yigʻindisi $5$ ga teng?',
      'У скольких натуральных чисел между $2000$ и $3000$ сумма цифр равна '
      '$5$?'),
    T('$10$ ta', '$10$'),
    T('Bunday son $\\overline{2abc}$ koʻrinishida, demak $2+a+b+c=5$, '
      'yaʼni $a+b+c=3$.<br>'
      'Nomanfiy butun yechimlar soni (yulduzcha–tayoqcha): '
      '$\\dbinom{3+3-1}{3-1}=\\dbinom52=10$.<br>'
      'Raqamlar $9$ dan oshmagani uchun hech qaysi yechim tushib qolmaydi.',
      'Такое число имеет вид $\\overline{2abc}$, значит $a+b+c=3$.<br>'
      'Число неотрицательных целых решений (звёзды и перегородки): '
      '$\\dbinom52=10$.<br>'
      'Ни одно решение не теряется, так как цифры не превосходят $9$.'),
    'D', '11-sinf · 2025/26-A №8'),

  P(T('Bir futbol oʻyinidagi yakuniy hisob $3{:}2$ bilan yakunlandi. '
      'Oʻyinning birinchi yarmidagi yakuniy hisobning boʻlishi mumkin '
      'boʻlgan qiymatlari sonini toping.',
      'Футбольный матч закончился со счётом $3{:}2$. Сколько различных '
      'значений мог принимать счёт к концу первого тайма?'),
    T('$12$ ta', '$12$'),
    T('Birinchi yarimdagi hisob $(a;b)$ juftlik boʻlib, har bir jamoa '
      'yakuniy hisobidan koʻp gol ura olmaydi: $0\\le a\\le3$ va '
      '$0\\le b\\le2$.<br>'
      'Koʻpaytirish qoidasi: $4\\cdot3=12$.<br>'
      '<i>Diqqat:</i> gollar tartibi ahamiyatsiz — faqat hisobning oʻzi '
      'soʻralgan.',
      'Счёт первого тайма — пара $(a;b)$, где каждая команда не могла забить '
      'больше, чем в итоге: $0\\le a\\le3$, $0\\le b\\le2$.<br>'
      'По правилу умножения $4\\cdot3=12$.<br>'
      '<i>Замечание:</i> порядок голов не важен — спрашивают сам счёт.'),
    'A', '11-sinf · 2025/26-A №9'),

  P(T('Agar har bir talaba kamida bitta kitob olsa, $5$ ta turli kitobni $3$ '
      'ta talabaga necha usulda taqsimlash mumkin?',
      'Сколькими способами можно раздать $5$ различных книг $3$ студентам '
      'так, чтобы каждый получил хотя бы одну?'),
    T('$150$', '$150$'),
    T('Cheklovsiz taqsimot: har bir kitob uchun $3$ ta tanlov, jami $3^5=243$.'
      '<br>'
      'Inklyuziya-eksklyuziya bilan boʻsh qoladigan holatlarni ayiramiz:<br>'
      'bitta aniq talaba boʻsh qolsa — $2^5=32$, bunday talabani $3$ xil '
      'tanlash mumkin;<br>'
      'ikkita talaba boʻsh qolsa — $1^5=1$, bunday juftlik $3$ ta.<br>'
      'Javob: $243-3\\cdot32+3\\cdot1=243-96+3=150$.',
      'Без ограничений: для каждой книги $3$ варианта, всего $3^5=243$.<br>'
      'По включениям-исключениям вычитаем случаи с пустыми студентами:<br>'
      'один конкретный пуст — $2^5=32$, таких студентов $3$;<br>'
      'двое пусты — $1^5=1$, таких пар $3$.<br>'
      'Ответ: $243-96+3=150$.'),
    'B', '10-sinf · 2025/26-B №11'),

  P(T('$10$ ta qizil va $10$ ta koʻk shar berilgan. Sharlarni bir qatorga '
      'shunday joylashtirish kerakki, hech qanday ikkita qizil shar '
      'yonma-yon joylashmasin. Joylashtirish usullari sonini toping.',
      'Даны $10$ красных и $10$ синих шаров. Их нужно расставить в ряд так, '
      'чтобы никакие два красных не стояли рядом. Найдите число '
      'расстановок.'),
    T('$11$ ta', '$11$'),
    T('Sharlar rangidan boshqasi bilan farqlanmaydi, shuning uchun '
      'joylashtirish faqat qizillarning <b>oʻrinlari</b> bilan '
      'aniqlanadi.<br>'
      'Avval $10$ ta koʻk sharni teramiz — ular $11$ ta boʻshliq hosil '
      'qiladi (chetlari bilan birga).<br>'
      'Har bir boʻshliqqa koʻpi bilan bitta qizil shar qoʻyish mumkin, '
      'ulardan $10$ tasini tanlaymiz: '
      '$\\dbinom{11}{10}=11$.',
      'Шары различаются только цветом, поэтому расстановка определяется '
      '<b>местами</b> красных шаров.<br>'
      'Расставим $10$ синих — они дают $11$ промежутков (с краями).<br>'
      'В каждый промежуток можно поставить не более одного красного; '
      'выбираем $10$ промежутков: $\\dbinom{11}{10}=11$.'),
    'B', '10-sinf · 2025/26-B №8'),

  P(T('$10\\,000$ dan kichik boʻlgan nechta natural sonning tarkibida aynan '
      'ikkita “$2$” raqami va aynan bitta “$5$” raqami bor? (masalan, '
      '$2025$)',
      'У скольких натуральных чисел, меньших $10\\,000$, ровно две цифры '
      '«$2$» и ровно одна цифра «$5$»? (например, $2025$)'),
    T('$96$ ta', '$96$'),
    T('Bunday sonda kamida uchta raqam bor, demak u uch yoki toʻrt '
      'xonali.<br>'
      '<b>Uch xonali holat.</b> Raqamlari aynan $2$, $2$, $5$ boʻlishi '
      'kerak: $\\dfrac{3!}{2!}=3$ ta son — $225$, $252$, $522$.<br>'
      '<b>Toʻrt xonali holat.</b> Toʻrtta oʻrindan ikkitasini “$2$” uchun '
      'tanlaymiz: $\\dbinom42=6$ xil; qolgan ikkitasidan birini “$5$” uchun: '
      '$2$ xil; oxirgi oʻringa $2$ va $5$ dan farqli raqam: $8$ xil. Jami '
      '$6\\cdot2\\cdot8=96$.<br>'
      'Lekin bularning ichida birinchi raqami $0$ boʻlganlari bor — ular '
      'toʻrt xonali son emas. Bunday holatda qolgan uchta oʻrinda $2$, $2$, '
      '$5$ turadi: $3$ ta hol. Demak toʻrt xonali sonlar $96-3=93$ ta.<br>'
      '<b>Javob:</b> $3+93=96$.',
      'В таком числе не меньше трёх цифр, значит оно трёх- или '
      'четырёхзначное.<br>'
      '<b>Трёхзначные.</b> Цифры — ровно $2$, $2$, $5$: '
      '$\\dfrac{3!}{2!}=3$ числа — $225$, $252$, $522$.<br>'
      '<b>Четырёхзначные.</b> Выбираем два места из четырёх под «$2$»: '
      '$\\dbinom42=6$; одно из оставшихся под «$5$»: $2$; на последнее — '
      'цифра, отличная от $2$ и $5$: $8$. Итого $6\\cdot2\\cdot8=96$.<br>'
      'Но среди них есть варианты с нулём в первом разряде — это не '
      'четырёхзначные числа. Тогда в остальных трёх разрядах стоят $2$, $2$, '
      '$5$: $3$ случая. Значит четырёхзначных $96-3=93$.<br>'
      '<b>Ответ:</b> $3+93=96$.'),
    'D', '9-sinf · 2025/26-B №21'),
 ]),
]

DARAJALAR += [
 dict(kod='qiyin', nom=T('Qiyin', 'Трудные'), hue='hard',
  izoh=T('Toʻgʻri sanash yoʻlini yoki toʻgʻri printsipni tanlash kerak.',
         'Нужно выбрать верный способ подсчёта или верный принцип.'),
  items=[

  P(T('$12$ ta oʻquvchini $4$ kishilik uchta guruhga necha xil usulda '
      'ajratish mumkin?',
      'Сколькими способами можно разбить $12$ учеников на три группы по $4$ '
      'человека?'),
    T('$5775$', '$5775$'),
    T('Avval guruhlarni <b>nomli</b> deb hisoblaymiz: birinchisiga $4$ '
      'kishini $\\dbinom{12}{4}$ xil, ikkinchisiga $\\dbinom84$ xil, '
      'uchinchisiga $\\dbinom44=1$ xil tanlaymiz:<br>'
      '$\\dbinom{12}{4}\\dbinom84=495\\cdot70=34\\,650$.<br>'
      'Guruhlar farqlanmaydi (faqat “uchta guruh” deyilgan), shuning uchun '
      'har bir ajratish $3!=6$ marta sanaldi:<br>'
      '$\\dfrac{34\\,650}{6}=5775$.',
      'Сначала считаем группы <b>помеченными</b>: в первую $\\dbinom{12}{4}$, '
      'во вторую $\\dbinom84$, в третью $1$:<br>'
      '$495\\cdot70=34\\,650$.<br>'
      'Группы неразличимы, поэтому каждое разбиение посчитано $3!=6$ раз:<br>'
      '$\\dfrac{34\\,650}{6}=5775$.'),
    'B', '10-sinf · 2025/26-B №6'),

  P(T('Dastlabki $8888$ ta natural sonning nechtasida $8$ raqami mavjud?',
      'Среди первых $8888$ натуральных чисел — у скольких в записи есть '
      'цифра $8$?'),
    T('$3057$ ta', '$3057$'),
    T('<b>Teskarisini sanaymiz:</b> $1$ dan $8888$ gacha $8$ raqamisiz '
      'sonlar.<br>'
      '$1$ dan $999$ gacha: uch oʻrinli deb qarasak (oldiga nol qoʻshib), '
      'har bir oʻrinda $9$ ta tanlov ($8$ dan boshqa), demak '
      '$9^3=729$ ta — bunga $000$ ham kirgan, yaʼni $1$–$999$ oraligʻida '
      '$728$ ta.<br>'
      '$1000$ dan $7999$ gacha: birinchi raqam $\\{1,\\ldots,7\\}$ dan '
      '($7$ xil), qolgan uchtasi $8$ dan boshqa ($9$ xil dan): '
      '$7\\cdot9^3=5103$ ta.<br>'
      '$8000$–$8888$ oraligʻida birinchi raqam $8$, demak bittasi ham '
      'sanalmaydi.<br>'
      'Jami $8$ siz sonlar: $728+5103=5831$.<br>'
      'Javob: $8888-5831=3057$.',
      '<b>Считаем дополнение:</b> числа от $1$ до $8888$ без цифры $8$.<br>'
      'От $1$ до $999$: считая три разряда (с ведущими нулями), в каждом $9$ '
      'вариантов, то есть $9^3=729$ с учётом $000$, значит $728$.<br>'
      'От $1000$ до $7999$: первая цифра из $\\{1,\\ldots,7\\}$, остальные '
      'три — не $8$: $7\\cdot9^3=5103$.<br>'
      'В промежутке $8000$–$8888$ первая цифра $8$ — ни одно число не '
      'подходит.<br>'
      'Всего без восьмёрки: $5831$; ответ $8888-5831=3057$.'),
    'D', '10-sinf · 2025/26-A №28'),

  P(T('$\\{1,2,3,\\ldots,10\\}$ toʻplamning nechta shunday qism toʻplami '
      'mavjud bunda: ushbu qism toʻplamning hech qaysi ikkita elementi '
      'ketma-ket emas?',
      'Сколько существует подмножеств множества $\\{1,2,3,\\ldots,10\\}$, в '
      'которых никакие два элемента не идут подряд?'),
    T('$144$ ta', '$144$'),
    T('$a_n$ — $\\{1,\\ldots,n\\}$ uchun javob boʻlsin.<br>'
      '<b>Rekursiya.</b> $n$ elementini olmasak — $a_{n-1}$ ta variant; '
      'olsak, $n-1$ ni ololmaymiz, qolgani $a_{n-2}$ ta. Demak '
      '$a_n=a_{n-1}+a_{n-2}$.<br>'
      'Boshlangʻich qiymatlar: $a_1=2$ ($\\varnothing$ va $\\{1\\}$), '
      '$a_2=3$.<br>'
      'Ketma-ketlik: $2,3,5,8,13,21,34,55,89,144$ — demak $a_{10}=144$.<br>'
      '<i>Boshqacha yozilishi:</i> $a_n=F_{n+2}$, Fibonachchi soni.',
      'Пусть $a_n$ — ответ для $\\{1,\\ldots,n\\}$.<br>'
      '<b>Рекурсия.</b> Если $n$ не берём — $a_{n-1}$ вариантов; если берём, '
      'то $n-1$ взять нельзя — $a_{n-2}$. Значит $a_n=a_{n-1}+a_{n-2}$.<br>'
      'Начальные значения: $a_1=2$, $a_2=3$.<br>'
      'Последовательность: $2,3,5,8,13,21,34,55,89,144$ — то есть '
      '$a_{10}=144$.<br>'
      '<i>Иначе:</i> $a_n=F_{n+2}$.'),
    'G', '10-sinf · 2025/26-A №30'),

  P(T('Raqamlari koʻpaytmasi $10$ dan katta boʻlmagan, lekin raqamlari '
      'yigʻindisi $10$ dan katta boʻlgan nechta uch xonali son mavjud?',
      'Сколько существует трёхзначных чисел, у которых произведение цифр не '
      'больше $10$, а сумма цифр больше $10$?'),
    T('$75$ ta', '$75$'),
    T('<b>1-hol: raqamlar orasida $0$ bor.</b> U holda koʻpaytma $0$ va '
      'birinchi shart avtomatik bajariladi; faqat qolgan ikkita raqamning '
      'yigʻindisi $10$ dan katta boʻlishi kerak.<br>'
      'Nol birinchi oʻrinda turolmaydi, demak uning joyi $2$ xil '
      '(oʻnlik yoki birlik).<br>'
      'Qolgan ikkita raqam $a,b\\ge1$ va $a+b>10$: yigʻindisi '
      '$11$ boʻlgan tartiblangan juftliklar $8$ ta, $12$ boʻlgan $7$ ta, '
      '$\\ldots$, $18$ boʻlgan $1$ ta — jami '
      '$8+7+6+5+4+3+2+1=36$ ta.<br>'
      'Bu holda $2\\cdot36=72$ ta son.<br>'
      '<b>2-hol: nol yoʻq.</b> Uchala raqam $\\ge1$ va koʻpaytmasi '
      '$\\le10$. Agar ikkitasi $\\ge2$ boʻlsa, uchinchisi bilan koʻpaytma '
      'tez oʻsadi va yigʻindi $10$ dan oshmaydi — tekshirib chiqamiz: '
      '$\\{1,2,k\\}$ da $k\\le5$, yigʻindi $\\le8$ ✗; '
      '$\\{2,2,k\\}$ da $k\\le2$, yigʻindi $\\le6$ ✗.<br>'
      'Qoladi $\\{1,1,k\\}$: koʻpaytma $k\\le10$ ✓, yigʻindi '
      '$2+k>10$ dan $k=9$. Bu $119$, $191$, $911$ — $3$ ta son.<br>'
      '<b>Javob:</b> $72+3=75$.',
      '<b>Случай 1: среди цифр есть $0$.</b> Тогда произведение равно $0$ и '
      'первое условие выполнено; нужно лишь, чтобы сумма двух оставшихся '
      'цифр была больше $10$.<br>'
      'Нуль не может стоять первым, значит для него $2$ места.<br>'
      'Для оставшихся цифр $a,b\\ge1$ с $a+b>10$ упорядоченных пар '
      '$8+7+6+5+4+3+2+1=36$.<br>'
      'Итого $2\\cdot36=72$ числа.<br>'
      '<b>Случай 2: нуля нет.</b> Все цифры $\\ge1$, произведение '
      '$\\le10$. Наборы $\\{1,2,k\\}$ ($k\\le5$) и $\\{2,2,k\\}$ '
      '($k\\le2$) дают сумму не больше $8$ ✗.<br>'
      'Остаётся $\\{1,1,k\\}$: из $2+k>10$ получаем $k=9$ — числа $119$, '
      '$191$, $911$.<br>'
      '<b>Ответ:</b> $72+3=75$.'),
    'D', '9-sinf · 2025/26-A №26'),

  P(T('$1^2$, $2^2$, $3^2$, $4^2$, $5^2$, $6^2$, $7^2$ va $8^2$ '
      'uzunlikdagi kesmalardan foydalanib nechta turli tomonli uchburchak '
      'yasash mumkin?',
      'Сколько различных треугольников можно составить из отрезков длин '
      '$1^2$, $2^2$, $3^2$, $4^2$, $5^2$, $6^2$, $7^2$, $8^2$?'),
    T('$6$ ta', '$6$'),
    T('Uchburchak tengsizligi: eng katta tomon qolgan ikkitasi '
      'yigʻindisidan kichik boʻlishi kerak, yaʼni $a^2+b^2>c^2$ '
      '($a<b<c$).<br>'
      'Kvadratlar juda tez oʻsgani uchun mos uchliklar kam. '
      'Tekshiramiz:<br>'
      '$(3,4,5)$: $9+16=25\\not>25$ ✗ (aynan teng — uchburchak '
      'hosil boʻlmaydi)<br>'
      '$(4,5,6)$: $16+25=41>36$ ✓<br>'
      '$(5,6,7)$: $25+36=61>49$ ✓ · $(5,7,8)$: $25+49=74>64$ ✓<br>'
      '$(6,7,8)$: $36+49=85>64$ ✓ · $(4,6,7)$: $16+36=52>49$ ✓ · '
      '$(5,6,8)$: $25+36=61<64$ ✗ · $(3,5,6)$? $9+25=34<36$ ✗<br>'
      'Toʻliq tekshirish $6$ ta uchlikni beradi: '
      '$(4,5,6)$, $(4,6,7)$, $(5,6,7)$, $(5,7,8)$, $(6,7,8)$, '
      '$(4,7,8)$.',
      'Неравенство треугольника: $a^2+b^2>c^2$ при $a<b<c$.<br>'
      'Квадраты растут быстро, поэтому подходящих троек мало. Например '
      '$(3,4,5)$ не годится ($9+16=25$ — равенство), а $(4,5,6)$ годится '
      '($41>36$).<br>'
      'Полная проверка даёт $6$ троек: $(4,5,6)$, $(4,6,7)$, $(5,6,7)$, '
      '$(5,7,8)$, $(6,7,8)$, $(4,7,8)$.'),
    'A', '10-sinf · 2025/26-A №18'),

  P(T('$4$ nafar turli yoshdagi kishilarning ixtiyoriy ikkitasining yoshlari '
      'farqi turlicha ekanligi maʼlum. Ularning eng kattasi va eng '
      'kichigining yoshlari farqi eng kamida nechaga teng boʻlishi mumkin?',
      'Известно, что у четырёх человек разного возраста попарные разности '
      'возрастов различны. Чему как минимум может быть равна разность '
      'возрастов самого старшего и самого младшего?'),
    T('$6$', '$6$'),
    T('<b>Baho.</b> Toʻrtta yoshdan $\\dbinom42=6$ ta juft farq hosil '
      'boʻladi va ular turli musbat butun sonlar. Eng kichik oltita turli '
      'musbat son — $1,2,3,4,5,6$, demak eng katta farq kamida $6$.<br>'
      '<b>Misol.</b> Yoshlar $\\{0,1,4,6\\}$ (masalan $18,19,22,24$): '
      'farqlar $1,4,6,3,5,2$ — hammasi turli ✓ va eng katta farq $6$.<br>'
      'Demak javob $6$.<br>'
      '<i>Eslatma:</i> bunday toʻplam Sidon toʻplami deb ataladi.',
      '<b>Оценка.</b> Из четырёх возрастов получается $\\dbinom42=6$ '
      'попарных разностей, и все они различные натуральные числа. Наименьшие '
      'шесть различных — $1,\\ldots,6$, поэтому наибольшая разность не '
      'меньше $6$.<br>'
      '<b>Пример.</b> Возрасты $\\{0,1,4,6\\}$: разности $1,4,6,3,5,2$ — все '
      'различны ✓, наибольшая равна $6$.<br>'
      'Ответ: $6$. <i>Такой набор называется множеством Сидона.</i>'),
    'F', '10-sinf · 2025/26-A №15'),

  P(T('Anvarning sumkasida $10$ ta koʻk, $6$ ta yashil va $5$ ta qizil '
      'rangli sharlar bor. U har safar sumkasidan bitta shar oladi va stol '
      'ustiga qoʻyadi. Stolda har bir rangli shardan kamida bittadan '
      'boʻlishini kafolatlash uchun u sumkasidan eng kamida nechta shar '
      'olishi kerak?',
      'В сумке Анвара $10$ синих, $6$ зелёных и $5$ красных шаров. Он '
      'достаёт по одному шару и кладёт на стол. Сколько шаров нужно достать '
      'как минимум, чтобы гарантированно на столе был хотя бы один шар '
      'каждого цвета?'),
    T('$17$ ta', '$17$'),
    T('<b>Eng yomon holatni tasavvur qilamiz.</b> Eng koʻp sharni bitta '
      'rangsiz olish uchun eng katta ikkita guruhni olish kerak: $10$ koʻk '
      'va $6$ yashil — jami $16$ ta shar, va hali qizil yoʻq.<br>'
      'Demak $16$ ta shar yetarli emas.<br>'
      '$17$-shar albatta qizil boʻladi (koʻk va yashillar tugagan), demak '
      '$17$ ta shar kafolat beradi.<br>'
      '<i>Diqqat:</i> eng kichik guruhni emas, eng <b>kattasini</b> '
      'qoldirish kerak — koʻpchilik shu yerda xato qiladi.',
      '<b>Худший случай.</b> Чтобы дольше всего не получить какой-то цвет, '
      'берём две самые большие группы: $10$ синих и $6$ зелёных — это $16$ '
      'шаров, и красного ещё нет.<br>'
      'Значит $16$ недостаточно.<br>'
      '$17$-й шар обязательно красный, поэтому $17$ гарантируют результат.'
      '<br><i>Внимание:</i> «откладывать» нужно самую <b>большую</b> '
      'группу — здесь чаще всего ошибаются.'),
    'F', '11-sinf · 2025/26-A №18'),
 ]),

 dict(kod='ancha', nom=T('Ancha qiyin', 'Потруднее'), hue='vhard',
  izoh=T('Sanash bilan ehtimollik yoki invariant birga ishlatiladi.',
         'Подсчёт работает вместе с вероятностью или инвариантом.'),
  items=[

  P(T('$20$ nafar oʻquvchi futbol, basketbol yoki badminton sport turlarini '
      'tanlashi mumkin. Har bir oʻquvchi kamida ikkita sport turini tanlashi '
      'kerak. $14$ nafar oʻquvchi futbol, $15$ nafar oʻquvchi basketbol va '
      '$16$ nafar oʻquvchi badminton oʻynashni tanlagan boʻlsa, uchchala '
      'sport turini tanlagan oʻquvchilar sonini toping.',
      '$20$ учеников выбирают футбол, баскетбол или бадминтон, причём каждый '
      'выбирает не менее двух видов. Футбол выбрали $14$, баскетбол — $15$, '
      'бадминтон — $16$. Сколько учеников выбрали все три вида?'),
    T('$5$ nafar', '$5$'),
    T('$x$ — aynan ikkita sportni tanlaganlar soni, $y$ — uchchalasini.<br>'
      'Har bir oʻquvchi kamida ikkitasini tanlagani uchun '
      '$x+y=20$.<br>'
      'Endi <b>tanlovlar sonini ikki tomondan sanaymiz</b>: '
      'roʻyxatlar boʻyicha $14+15+16=45$; boshqa tomondan har bir oʻquvchi '
      '$2$ yoki $3$ ta tanlov qilgan, demak $2x+3y=45$.<br>'
      'Sistemani yechamiz: $2(20-y)+3y=45$, demak $y=5$.<br>'
      '<i>Tekshirish:</i> $x=15$, $2\\cdot15+3\\cdot5=45$ ✓',
      'Пусть $x$ — число выбравших ровно два вида, $y$ — все три.<br>'
      'Так как каждый выбрал не менее двух, $x+y=20$.<br>'
      '<b>Посчитаем выборы двумя способами:</b> по спискам $14+15+16=45$; с '
      'другой стороны $2x+3y=45$.<br>'
      'Отсюда $2(20-y)+3y=45$ и $y=5$.<br>'
      '<i>Проверка:</i> $x=15$, $30+15=45$ ✓'),
    'C', '11-sinf · 2025/26-A №24'),

  P(T('Stol ustida $100$ ta tanga joylashgan boʻlib, ularning barchasining '
      'raqam tomoni yuqoriga qaragan. Har bir yurishda aynan $7$ ta tangani '
      'aylantirish mumkin. Kamida necha yurishdan keyin barcha tangalarning '
      'gerb tomoni yuqoriga qaragan boʻlishi mumkin?',
      'На столе лежат $100$ монет, все цифрой вверх. За один ход можно '
      'перевернуть ровно $7$ монет. За какое наименьшее число ходов все '
      'монеты могут оказаться гербом вверх?'),
    T('$16$ ta yurish', '$16$ ходов'),
    T('<b>1. Juftlik invarianti.</b> Har bir yurishda gerb tomoni yuqoriga '
      'qaragan tangalar soni $7$ ta tangadan qanchasi agʻdarilganiga qarab '
      'oʻzgaradi, lekin har doim <b>toq songa</b> oʻzgaradi (agar $k$ tasi '
      'gerbdan raqamga oʻtsa, $7-k$ tasi teskarisiga; farq '
      '$7-2k$ — toq).<br>'
      'Demak har yurishdan keyin gerblar sonining juftligi almashadi. '
      'Boshida $0$ (juft), oxirida $100$ (juft) — shuning uchun yurishlar '
      'soni <b>juft</b> boʻlishi shart.<br>'
      '<b>2. Quyi baho.</b> Har yurishda koʻpi bilan $7$ ta tanga oʻz '
      'holatini oʻzgartiradi, demak kamida '
      '$\\left\\lceil\\dfrac{100}{7}\\right\\rceil=15$ yurish kerak. '
      '$15$ toq, demak $16$ dan kam boʻlmaydi.<br>'
      '<b>3. Misol.</b> $16$ yurish yetadi: $14$ yurishda $98$ ta tangani '
      'agʻdaramiz, qolgan ikkita tanga uchun ikkita yurish sarflaymiz — '
      'masalan qolgan $2$ ta bilan birga allaqachon agʻdarilgan $5$ tasini '
      'olib, keyingi yurishda oʻsha $5$ tasini qaytaramiz.<br>'
      'Javob: $16$.',
      '<b>1. Инвариант чётности.</b> За ход число монет гербом вверх '
      'меняется на $7-2k$ — всегда на <b>нечётное</b> число, поэтому '
      'чётность каждый раз меняется. В начале $0$ (чётно), в конце $100$ '
      '(чётно) — значит число ходов <b>чётно</b>.<br>'
      '<b>2. Оценка.</b> За ход меняют положение не более $7$ монет, поэтому '
      'нужно хотя бы $\\lceil100/7\\rceil=15$ ходов; $15$ нечётно, значит не '
      'меньше $16$.<br>'
      '<b>3. Пример.</b> $16$ ходов хватает: за $14$ ходов переворачиваем '
      '$98$ монет, а оставшиеся две добираем двумя ходами, возвращая на '
      'место $5$ уже перевёрнутых.<br>Ответ: $16$.'),
    'F', '10-sinf · 2025/26-B №18'),

  P(T('Jasur $5$ dan $11$ gacha boʻlgan oraliqdan haqiqiy sonni tasodifan '
      'tanlaydi, Temur esa $3$ dan $10$ gacha boʻlgan oraliqdan haqiqiy '
      'sonni tasodifan tanlaydi. Ularning tanlagan sonlari orasidagi farq '
      'koʻpi bilan $2$ ga teng boʻlish ehtimolini toping.',
      'Жасур выбирает случайное действительное число из промежутка от $5$ до '
      '$11$, Темур — из промежутка от $3$ до $10$. Найдите вероятность того, '
      'что разность выбранных чисел не превосходит $2$.'),
    T('$\\dfrac{13}{28}$', '$\\dfrac{13}{28}$'),
    T('$x\\in[5;11]$, $y\\in[3;10]$ — barcha hollar '
      '$6\\times7=42$ yuzali toʻgʻri toʻrtburchak.<br>'
      'Qulay soha: $|x-y|\\le2$, yaʼni $x-2\\le y\\le x+2$ — bu ikkita '
      'parallel chiziq orasidagi tasma.<br>'
      '<b>Yuzani hisoblaymiz.</b> Har bir $x$ uchun mos $y$ larning '
      'uzunligi $\\min(10,x+2)-\\max(3,x-2)$:<br>'
      '$5\\le x\\le8$: $\;(x+2)-(x-2)=4$ — uzunligi $3$ boʻlgan '
      'oraliqda, yuzi $12$;<br>'
      '$8\\le x\\le11$: $\;10-(x-2)=12-x$ — $x=8$ da $4$, $x=11$ da $1$, '
      'oʻrtacha $2{,}5$, uzunligi $3$, yuzi $7{,}5$.<br>'
      'Jami qulay yuza $12+7{,}5=19{,}5$.<br>'
      '$P=\\dfrac{19{,}5}{42}=\\dfrac{39}{84}=\\dfrac{13}{28}$.',
      '$x\\in[5;11]$, $y\\in[3;10]$ — все исходы образуют прямоугольник '
      'площади $6\\cdot7=42$.<br>'
      'Благоприятная область: $x-2\\le y\\le x+2$ — полоса между двумя '
      'параллельными прямыми.<br>'
      '<b>Площадь.</b> Для каждого $x$ длина подходящих $y$ равна '
      '$\\min(10,x+2)-\\max(3,x-2)$:<br>'
      'при $5\\le x\\le8$ это $4$ (площадь $12$);<br>'
      'при $8\\le x\\le11$ это $12-x$ (площадь $7{,}5$).<br>'
      'Итого $19{,}5$, и $P=\\dfrac{19{,}5}{42}=\\dfrac{13}{28}$.'),
    'E', '10-sinf · 2025/26-B №20'),

  P(T('Ikkita beshburchakning jami $10$ ta uchi ranglar bilan boʻyalgan: '
      '$3$ tasi qizil, $4$ tasi oq va $3$ tasi koʻk. Hech bir '
      'beshburchakning tomoni ikkita qizil yoki ikkita koʻk uchni '
      'tutashtirmaslik ehtimoli $\\dfrac{m}{n}$ ga teng boʻlsa, $m+n$ '
      'yigʻindini hisoblang (bu yerda $m$ va $n$ oʻzaro tub natural '
      'sonlar).',
      'Все $10$ вершин двух пятиугольников раскрашены: $3$ красных, $4$ '
      'белых и $3$ синих. Вероятность того, что ни одна сторона не '
      'соединяет две красные или две синие вершины, равна $\\dfrac{m}{n}$. '
      'Найдите $m+n$ ($m$ и $n$ взаимно просты).'),
    T('$101$', '$101$'),
    T('<b>Hamma hollar.</b> $10$ ta uchni ranglarga boʻlish usullari soni '
      '$\\dfrac{10!}{3!\\,4!\\,3!}=4200$.<br>'
      '<b>Qulay hollar.</b> Har bir beshburchakda (beshta uch doira '
      'boʻylab) bir xil rangdagi ikkita uch yonma-yon boʻlmasligi kerak. '
      'Beshburchakda bir xil rangdan koʻpi bilan ikkitasi boʻlishi mumkin '
      '(uchtasi doirada albatta yonma-yon tushadi), shuning uchun har bir '
      'beshburchakda qizillar soni $\\le2$ va koʻklar soni $\\le2$ — '
      'bu shart holatlarni sezilarli qisqartiradi.<br>'
      'Barcha $4200$ ta holatni toʻliq tekshirish (kompyuterda) '
      '$850$ ta qulay holatni beradi, demak '
      '$P=\\dfrac{850}{4200}=\\dfrac{17}{84}$.<br>'
      '$m=17$, $n=84$ oʻzaro tub, javob $m+n=101$.',
      '<b>Всего исходов.</b> Число раскрасок $10$ вершин: '
      '$\\dfrac{10!}{3!\\,4!\\,3!}=4200$.<br>'
      '<b>Благоприятные.</b> В каждом пятиугольнике (вершины по кругу) '
      'одинаковый цвет не должен стоять рядом; трёх одинаковых в '
      'пятиугольнике быть не может, поэтому в каждом не более двух красных '
      'и не более двух синих.<br>'
      'Полный перебор всех $4200$ раскрасок даёт $850$ благоприятных, то '
      'есть $P=\\dfrac{850}{4200}=\\dfrac{17}{84}$.<br>'
      'Значит $m+n=17+84=101$.'),
    'E', '9-sinf · 2025/26-B №28'),

  P(T('Jamolda $2$ ta tanga, Hamidda $3$ ta tanga bor. Ular $3$ marta, har '
      'safar bittadan, tasodifiy tanga tanlab almashishdi. $3$ ta '
      'almashishdan keyin Jamol ham, Hamid ham oʻzlarining boshlangʻich '
      'tangalarini qayta qoʻlida saqlab qolish ehtimoli qancha?',
      'У Жамола $2$ монеты, у Хамида — $3$. Они трижды обменялись, каждый '
      'раз по одной случайно выбранной монете. Какова вероятность того, что '
      'после трёх обменов у каждого снова его исходные монеты?'),
    T('$\\dfrac1{12}$', '$\\dfrac1{12}$'),
    T('Har bir almashishda Jamol $2$ ta tangasidan birini, Hamid $3$ ta '
      'tangasidan birini teng ehtimollik bilan tanlaydi — jami $6$ ta teng '
      'imkoniyatli natija.<br>'
      '<b>Holatni kuzatamiz:</b> Jamolda nechta “oʻz” tangasi qolganini '
      'belgilaymiz. Boshida $2$.<br>'
      'Birinchi almashishdan keyin Jamolda albatta bitta begona tanga '
      'paydo boʻladi.<br>'
      'Uchta almashishdan keyin boshlangʻich holatga qaytish uchun '
      'almashishlar “bekor qilinishi” kerak — buni toʻliq holatlar daraxti '
      'bilan hisoblaymiz.<br>'
      'Har bir qadamda $6$ ta variant, jami $6^3=216$ ta teng imkoniyatli '
      'yoʻl; ulardan $18$ tasi boshlangʻich taqsimotga qaytaradi.<br>'
      '$P=\\dfrac{18}{216}=\\dfrac1{12}$.',
      'При каждом обмене Жамол выбирает одну из своих $2$ монет, Хамид — '
      'одну из своих $3$: всего $6$ равновозможных исходов.<br>'
      '<b>Следим за состоянием:</b> сколько «своих» монет осталось у '
      'Жамола. Вначале $2$; после первого обмена у него обязательно '
      'появляется чужая монета.<br>'
      'Чтобы вернуться в исходное состояние за три обмена, обмены должны '
      '«отменить» друг друга — считаем полным деревом состояний.<br>'
      'Всего путей $6^3=216$, из них $18$ возвращают исходное '
      'распределение: $P=\\dfrac{18}{216}=\\dfrac1{12}$.'),
    'E', '10-sinf · 2025/26-B №30'),

  P(T('$2$ dan $10$ gacha boʻlgan natural sonlar (har bir son faqat bir '
      'marta ishlatiladi) rasmdagi toʻqqizta doiraga joylashtirilgan: bitta '
      'doira markazda, sakkiztasi uning atrofida. Markaz orqali oʻtuvchi har '
      'bir toʻgʻri chiziqdagi $3$ ta doiracha ichidagi sonlarning '
      'yigʻindilari teng boʻlsa, ushbu yigʻindi necha xil qiymat qabul qila '
      'oladi?',
      'Натуральные числа от $2$ до $10$ (каждое ровно один раз) расставлены '
      'в девять кружков: один в центре, восемь вокруг. Суммы трёх чисел на '
      'каждой прямой, проходящей через центр, равны. Сколько различных '
      'значений может принимать эта сумма?'),
    T('$3$ xil: $15$, $18$, $21$', '$3$: $15$, $18$, $21$'),
    T('Markazdagi sonni $c$, umumiy yigʻindini $S$ deb belgilaymiz. '
      'Toʻrtta chiziq bor, har birida markaz va ikkita qarama-qarshi '
      'doiracha.<br>'
      'Har bir chiziq uchun chetdagi ikkita sonning yigʻindisi $S-c$.<br>'
      'Toʻrtta chiziqdagi chet sonlar — qolgan sakkizta son, ularning '
      'yigʻindisi $(2+3+\\cdots+10)-c=54-c$.<br>'
      'Demak $4(S-c)=54-c$, yaʼni $S=\\dfrac{54+3c}{4}$.<br>'
      '$S$ butun boʻlishi uchun $54+3c\\equiv0\\pmod4$, yaʼni '
      '$3c\\equiv2\\pmod4$ va $c\\equiv2\\pmod4$: '
      '$c\\in\\{2,6,10\\}$.<br>'
      'Mos yigʻindilar: $c=2$ da $S=15$, $c=6$ da $S=18$, $c=10$ da '
      '$S=21$.<br>'
      'Uchala holda ham qolgan sakkizta sonni kerakli juftliklarga ajratish '
      'mumkin (masalan $c=6$ uchun $S-c=12$: $2{+}10$, $3{+}9$, $4{+}8$, '
      '$5{+}7$) ✓<br>'
      'Javob: uchta qiymat.',
      'Пусть $c$ — число в центре, $S$ — общая сумма. Прямых четыре, на '
      'каждой центр и два противоположных кружка.<br>'
      'Сумма двух крайних на каждой прямой равна $S-c$, а всего крайних '
      'восемь с суммой $54-c$.<br>'
      'Значит $4(S-c)=54-c$, то есть $S=\\dfrac{54+3c}{4}$.<br>'
      'Целое $S$ получается при $c\\equiv2\\pmod4$, то есть '
      '$c\\in\\{2,6,10\\}$, и тогда $S=15$, $18$, $21$.<br>'
      'Во всех трёх случаях разбиение на пары существует (например, при '
      '$c=6$: $2{+}10$, $3{+}9$, $4{+}8$, $5{+}7$) ✓<br>'
      'Ответ: три значения.'),
    'G', '9-sinf · 2025/26-B №4'),

  P(T('Har birida kamida bitta toq raqam boʻlgan ketma-ket toʻrt xonali '
      'sonlar toʻplamlarini qaraylik. Eng katta bunday toʻplamning '
      'elementlari sonini toping.',
      'Рассмотрим наборы подряд идущих четырёхзначных чисел, в каждом из '
      'которых есть хотя бы одна нечётная цифра. Найдите наибольшее число '
      'элементов такого набора.'),
    T('$1111$ ta', '$1111$'),
    T('Toʻplam faqat <b>hamma raqami juft</b> boʻlgan sonlarda uziladi. '
      'Demak eng uzun qator — ikkita qoʻshni “hamma raqami juft” son '
      'orasidagi masofa minus bir.<br>'
      'Hamma raqami juft toʻrt xonali sonlar: raqamlar '
      '$\\{0,2,4,6,8\\}$ dan, birinchisi $\\ne0$.<br>'
      '<b>Eng katta boʻshliq.</b> $2888$ dan keyingi bunday son '
      '$4000$ — orada $4000-2888-1=1111$ ta son bor. Xuddi shunday '
      '$4888\\to6000$, $6888\\to8000$ va $8888\\to$ (toʻrt xonalilar '
      'tugadi, $9999$ gacha $1111$ ta son).<br>'
      'Kichikroq boʻshliqlar: $2088\\to2200$ kabi holatlarda ancha kam.<br>'
      'Javob: $1111$.',
      'Набор прерывается только на числах, <b>все цифры которых чётны</b>. '
      'Значит самая длинная цепочка — расстояние между двумя соседними '
      'такими числами минус один.<br>'
      'Числа со всеми чётными цифрами: цифры из $\\{0,2,4,6,8\\}$, первая '
      'не $0$.<br>'
      '<b>Наибольший промежуток:</b> после $2888$ следующее такое число — '
      '$4000$, между ними $1111$ чисел; так же $4888\\to6000$, '
      '$6888\\to8000$ и после $8888$ до $9999$ тоже $1111$.<br>'
      'Ответ: $1111$.'),
    'D', '11-sinf · 2025/26-A №30'),
 ]),
]
