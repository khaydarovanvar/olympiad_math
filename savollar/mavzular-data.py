# -*- coding: utf-8 -*-
"""Oʻtgan yillar savollarining mavzular boʻyicha xaritasi.

Sakkizta variantning hamma savoli (9-sinf 89 ta, 10-sinf 90 ta, 11-sinf 60 ta —
jami 239 ta) bitta-bitta oʻqib chiqilib, mavzu va kichik mavzuga ajratilgan.
Har bir savol uchun nima soʻralgani bir qatorda yozilgan.

Qoidalar — chegaradagi savollarni bir xil joylashtirish uchun:
  · savol qaysi *koʻnikma* bilan yechilsa, oʻsha mavzuga kiradi, mavzusi
    nomiga qarab emas;
  · [x] va {x} bilan tenglamalar — sonlar nazariyasi (butun va kasr qism);
  · raqamlar ustidagi sanash (masalan “nechta toʻrt xonali sonda …”) —
    kombinatorika, chunki ish sanashdan iborat;
  · boʻluvchilar sonini sanash — sonlar nazariyasi.

$...$ — KaTeX.
"""

T = lambda uz, ru: (uz, ru)

CHROME = dict(
 title=T('Mavzular xaritasi · 9–11-sinf', 'Карта тем · 9–11 классы'),
 eyebrow=T('Tuman (shahar) bosqichi · 8 ta variant · 239 ta savol',
           'Районный (городской) этап · 8 вариантов · 239 задач'),
 h1=T('Oʻtgan yillar savollari — mavzular boʻyicha',
      'Задачи прошлых лет — по темам'),
 sub=T('Sakkizta variantning har bir savoli oʻqib chiqilib mavzuga ajratildi. '
       'Quyida: qaysi mavzu qancha savol bergani, har bir mavzu ichida nima '
       'soʻralgani, va har bir variantning savolma-savol xaritasi.',
       'Каждая задача восьми вариантов прочитана и отнесена к теме. Ниже: '
       'сколько задач даёт каждая тема, что именно в ней спрашивают и '
       'позадачная карта каждого варианта.'),
)

# Variantlar — ustunlar tartibi shu yerdan olinadi.
VARIANTLAR = [
 dict(kod='9·2024',      sinf=9,  paper='2024',      soni=30),
 dict(kod='9·2025/26-A', sinf=9,  paper='2025/26-A', soni=30),
 dict(kod='9·2025/26-B', sinf=9,  paper='2025/26-B', soni=29),
 dict(kod='10·2024',     sinf=10, paper='2024',      soni=30),
 dict(kod='10·2025/26-A',sinf=10, paper='2025/26-A', soni=30),
 dict(kod='10·2025/26-B',sinf=10, paper='2025/26-B', soni=30),
 dict(kod='11·2024',     sinf=11, paper='2024',      soni=30),
 dict(kod='11·2025/26-A',sinf=11, paper='2025/26-A', soni=30),
]

IZOH_B = T('9-sinf 2025/26-B variantining 4-sahifasi qoʻlda yoʻq, shuning uchun '
           '30-savol sanalmagan. 11-sinf uchun B varianti umuman yoʻq.',
           'Четвёртой страницы варианта 2025/26-B для 9 класса нет, поэтому '
           'задача 30 не учтена. Варианта B для 11 класса нет вовсе.')


def S(kod, nom, maslahat):
    return dict(kod=kod, nom=nom, maslahat=maslahat)


MAVZULAR = [

 dict(kod='alg', hue='alg', nom=T('Algebra va ayniyatlar', 'Алгебра и тождества'),
  izoh=T('Eng katta blok va ayni paytda boshqa hamma mavzuning tili: '
         'koʻpaytuvchilarga ajratish, Viyet va nisbatlar geometriyada ham, '
         'sonlar nazariyasida ham qayta-qayta ishlatiladi.',
         'Самый большой блок и одновременно язык всех остальных тем: '
         'разложение на множители, Виет и пропорции работают и в геометрии, '
         'и в теории чисел.'),
  bolim=[
  S('a1', T('Ayniy almashtirishlar va ildizlar', 'Тождественные преобразования и радикалы'),
    T('Har bir variantning <b>1-savoli</b> deyarli har doim shu yerdan. '
      'Ichma-ich ildiz, kub ildiz va $a^2-b^2$ ni koʻrish — bepul ball.',
      'Задача <b>№1</b> почти в каждом варианте отсюда. Вложенные радикалы, '
      'кубические корни и умение увидеть $a^2-b^2$ — бесплатный балл.')),
  S('a2', T('Kvadrat tenglama va Viyet', 'Квадратное уравнение и Виет'),
    T('Ildizlarni topmasdan $x_1+x_2$ va $x_1x_2$ orqali ishlash. '
      '$x_1^4+x_2^4$ kabi ifodalar har yili chiqadi.',
      'Работа через $x_1+x_2$ и $x_1x_2$ без нахождения корней. Выражения '
      'вида $x_1^4+x_2^4$ встречаются каждый год.')),
  S('a3', T('Tengsizliklar', 'Неравенства'),
    T('Ratsional va irratsional tengsizliklar, “nechta butun yechim bor” '
      'turi. Aniqlanish sohasini yozish — yarim yechim.',
      'Рациональные и иррациональные неравенства, тип «сколько целых '
      'решений». Записать ОДЗ — половина решения.')),
  S('a4', T('Modul', 'Модуль'),
    T('$|x+6|=|x+10|$ dan tortib $(x-1)|x|=|x|+1$ gacha. Modulni ochish '
      'oʻrniga geometrik maʼnosini (masofa) ishlatish tezroq.',
      'От $|x+6|=|x+10|$ до $(x-1)|x|=|x|+1$. Быстрее использовать '
      'геометрический смысл (расстояние), чем раскрывать модуль.')),
  S('a5', T('Parametr', 'Параметр'),
    T('Uchala sinfda ham deyarli har variantda bitta parametrli savol bor, '
      'odatda “yagona yechim” shartida. Maxraj nolga teng boʻlgan holni '
      'tekshirishni unutmang.',
      'Во всех трёх классах почти в каждом варианте есть задача с '
      'параметром, обычно на «единственное решение». Не забывайте про случай '
      'нулевого знаменателя.')),
  S('a6', T('Sistemalar va simmetrik ifodalar', 'Системы и симметричные выражения'),
    T('$x+y+z$, $xy+yz+zx$, $xyz$ orqali ishlash. Koʻpincha nomaʼlumlarni '
      'alohida topish shart emas — faqat simmetrik yigʻindilar kerak.',
      'Работа через $x+y+z$, $xy+yz+zx$, $xyz$. Часто не нужно находить сами '
      'неизвестные — достаточно симметрических сумм.')),
  S('a7', T('Nisbat va proporsiya', 'Отношения и пропорции'),
    T('$\\frac{a}{b}=\\frac{c}{d}=k$ turidagi zanjir. Bitta $k$ kiritib, '
      'hamma harfni $k$ orqali yozish — standart harakat.',
      'Цепочка вида $\\frac{a}{b}=\\frac{c}{d}=k$. Ввести одно $k$ и выразить '
      'через него все буквы — стандартный приём.')),
  S('a8', T('Daraja va logarifm', 'Степени и логарифмы'),
    T('Asosan 10 va 11-sinfda. Logarifmik tengsizlikda asos $1$ dan katta '
      'yoki kichikligini ajratish — eng koʻp xato shu yerda.',
      'В основном 10 и 11 класс. В логарифмическом неравенстве главное — '
      'разобрать основание больше или меньше $1$; тут больше всего ошибок.')),
  S('a9', T('Teleskop va binom', 'Телескопирование и бином'),
    T('Uzun koʻpaytma yoki yigʻindi qisqaradi. Birinchi va oxirgi ikki hadni '
      'yozib koʻrish — nima qisqarishini darhol koʻrsatadi.',
      'Длинное произведение или сумма сокращается. Выписать первые и '
      'последние два члена — и видно, что сокращается.')),
  S('a10', T('Eng katta va eng kichik qiymat', 'Наибольшее и наименьшее значение'),
    T('AM–GM, toʻliq kvadrat ajratish yoki almashtirish. Javob koʻpincha '
      'tenglik holatidan chiqadi.',
      'AM–GM, выделение полного квадрата или замена. Ответ обычно даёт '
      'случай равенства.')),
 ]),

 dict(kod='nt', hue='nt', nom=T('Sonlar nazariyasi', 'Теория чисел'),
  izoh=T('Ikkinchi eng katta blok va eng “oʻrgatiladigan” blok: toʻrt-besh '
         'harakat savollarning deyarli hammasini yopadi.',
         'Второй по величине блок и самый «обучаемый»: четыре-пять приёмов '
         'закрывают почти все задачи.'),
  bolim=[
  S('n1', T('Boʻlinish va qoldiqlar', 'Делимость и остатки'),
    T('Boʻlinish alomatlari, qoldiq boʻyicha holatlarni koʻrib chiqish, '
      'chiziqli birikma. Toʻliq maʼlumotnoma: <i>dars/</i> papkasida.',
      'Признаки делимости, перебор по остаткам, линейная комбинация. '
      'Полный справочник — в папке <i>dars/</i>.')),
  S('n2', T('Tub sonlar', 'Простые числа'),
    T('“Tub boʻlishi uchun …” turidagi savol. $2$ va $3$ ni alohida qarash '
      'va $3k, 3k\\pm1$ boʻyicha ajratish deyarli har doim yetadi.',
      'Задачи типа «чтобы число было простым …». Почти всегда достаточно '
      'отдельно разобрать $2$ и $3$ и разбить по $3k, 3k\\pm1$.')),
  S('n3', T('Boʻluvchilar soni', 'Количество делителей'),
    T('$\\tau(n)=(\\alpha_1+1)\\cdots(\\alpha_k+1)$. Kvadrat yoki kub '
      'boʻluvchilarni sanash ham shu formuladan chiqadi.',
      '$\\tau(n)=(\\alpha_1+1)\\cdots(\\alpha_k+1)$. Подсчёт делителей-'
      'квадратов и кубов выводится из неё же.')),
  S('n4', T('Raqamlar bilan ishlash', 'Работа с цифрами'),
    T('Sonni $10$ ning darajalari orqali yozib chiqish — bu turdagi hamma '
      'savolning kaliti: $\\overline{abab}=101(10a+b)$.',
      'Запись числа через степени $10$ — ключ ко всем таким задачам: '
      '$\\overline{abab}=101(10a+b)$.')),
  S('n5', T('Oxirgi raqamlar va katta darajalar', 'Последние цифры и большие степени'),
    T('Davriylik yoki Fermaning kichik teoremasi. Oxirgi ikkita raqam uchun '
      'modul $100$, oxirgi uchtasi uchun $1000$.',
      'Периодичность или малая теорема Ферма. Для двух последних цифр — '
      'модуль $100$, для трёх — $1000$.')),
  S('n6', T('Faktorial va tub darajalari', 'Факториал и степени простых'),
    T('Lejandr formulasi $v_p(n!)=\\sum\\lfloor n/p^k\\rfloor$. Faktoriallar '
      'yigʻindisining oxirgi raqamlari ham shu qatorda.',
      'Формула Лежандра $v_p(n!)=\\sum\\lfloor n/p^k\\rfloor$. Последние '
      'цифры суммы факториалов — сюда же.')),
  S('n7', T('Diofant tenglamalar', 'Диофантовы уравнения'),
    T('Koʻpaytmaga keltirish — asosiy harakat: $4a-7b+28ab=2020$ '
      '$\\Rightarrow$ $(4a-7)(7b+1)$ koʻrinishiga keladi.',
      'Разложение на множители — главный приём: $4a-7b+28ab=2020$ '
      '$\\Rightarrow$ приводится к виду $(4a-7)(7b+1)$.')),
  S('n8', T('EKUB va EKUK', 'НОД и НОК'),
    T('Evklid algoritmi va $\\gcd(a,b)=\\gcd(a,b-ka)$ xossasi. Parametrli '
      'EKUB savollari 10-sinfda ikki marta chiqqan.',
      'Алгоритм Евклида и свойство $\\gcd(a,b)=\\gcd(a,b-ka)$. Задачи на НОД '
      'с параметром в 10 классе встретились дважды.')),
  S('n9', T('Butun va kasr qism', 'Целая и дробная часть'),
    T('<b>Har uchala sinfda, deyarli har yili.</b> $x=[x]+\\{x\\}$ deb '
      'yozib, $0\\le\\{x\\}<1$ dan baho chiqarish — bitta usul hammasini '
      'yechadi.',
      '<b>Во всех трёх классах, почти каждый год.</b> Записать '
      '$x=[x]+\\{x\\}$ и оценить из $0\\le\\{x\\}<1$ — один приём решает все.')),
 ]),

 dict(kod='geo', hue='geo', nom=T('Geometriya', 'Геометрия'),
  izoh=T('Uchdan bir qismi burchak sanash, qolgani yuz va metrik '
         'munosabatlar. Chizmani toʻgʻri chizish yechimning yarmi.',
         'Треть — счёт углов, остальное — площади и метрические '
         'соотношения. Правильный чертёж — половина решения.'),
  bolim=[
  S('g1', T('Uchburchak: burchaklar, bissektrisa, mediana', 'Треугольник: углы, биссектриса, медиана'),
    T('Burchak sanash zanjiri. Teng yonli uchburchak va bissektrisa '
      'uchrashsa — deyarli har doim teng yonli uchburchak paydo boʻladi.',
      'Цепочка счёта углов. Если встретились равнобедренный треугольник и '
      'биссектриса — почти всегда появляется ещё один равнобедренный.')),
  S('g2', T('Yuz va oʻxshashlik', 'Площадь и подобие'),
    T('Oʻxshash uchburchaklar yuzlari nisbati — koeffitsiyent kvadrati. '
      'Umumiy balandlikli uchburchaklar yuzi asoslarga proporsional.',
      'Отношение площадей подобных треугольников — квадрат коэффициента. '
      'При общей высоте площади пропорциональны основаниям.')),
  S('g3', T('Aylana', 'Окружность'),
    T('Ichki chizilgan burchak, urinma va vatar burchagi, urinuvchi '
      'aylanalar. Markazlarni tutashtirish — birinchi harakat.',
      'Вписанный угол, угол между касательной и хордой, касающиеся '
      'окружности. Первый шаг — соединить центры.')),
  S('g4', T('Toʻrtburchak va trapetsiya', 'Четырёхугольник и трапеция'),
    T('Trapetsiyaga ichki/tashqi chizilgan aylana, diagonallar, oʻrta '
      'chiziq. Diagonal oʻrtalarini tutashtirish koʻp savolni ochadi.',
      'Вписанная и описанная окружность трапеции, диагонали, средняя линия. '
      'Соединение середин диагоналей открывает многие задачи.')),
  S('g5', T('Toʻgʻri burchakli uchburchak', 'Прямоугольный треугольник'),
    T('Balandlik va proyeksiyalar: $h^2=pq$, $a^2=pc$. Gipotenuza va '
      'balandlik berilsa — perimetr shu ikki munosabatdan chiqadi.',
      'Высота и проекции: $h^2=pq$, $a^2=pc$. Если даны гипотенуза и высота — '
      'периметр находится из этих двух соотношений.')),
  S('g6', T('Koordinata va vektorlar', 'Координаты и векторы'),
    T('Parabola uchi, toʻgʻri chiziqlar bilan chegaralangan yuz, vektor '
      'yigʻindisi. Kam, lekin deyarli bepul ball.',
      'Вершина параболы, площадь, ограниченная прямыми, сумма векторов. '
      'Редко, но это почти бесплатный балл.')),
 ]),

 dict(kod='comb', hue='comb', nom=T('Kombinatorika va ehtimollik', 'Комбинаторика и вероятность'),
  izoh=T('Oxirgi yili kuchli oʻsdi: 2025/26 variantlarida bu blok 2024-yilgiga '
         'qaraganda uch barobar koʻp savol berdi.',
         'В последний год блок сильно вырос: в вариантах 2025/26 задач втрое '
         'больше, чем в 2024-м.'),
  bolim=[
  S('k1', T('Sanash: joylashtirish va taqsimlash', 'Подсчёт: размещения и распределения'),
    T('Oʻrinlashtirish, guruhlarga boʻlish, “yonma-yon boʻlmasin” sharti. '
      'Oxirgisi — boʻsh joylarga qoʻyish usuli bilan.',
      'Размещения, разбиение на группы, условие «не рядом». Последнее — '
      'методом расстановки по промежуткам.')),
  S('k2', T('Raqamli sanash', 'Подсчёт с цифрами'),
    T('“Nechta sonda … raqami bor” turi. Toʻgʻridan sanash qiyin boʻlsa, '
      'teskarisini sanang: hammasi minus kerakmaslari.',
      'Тип «в скольких числах есть цифра …». Если считать напрямую трудно — '
      'считайте дополнение: всего минус ненужные.')),
  S('k3', T('Ehtimollik', 'Вероятность'),
    T('2025/26 dan beri har ikkala B variantida bor. Qulay hollarni sanash — '
      'oddiy kombinatorika, qiyini shart toʻgʻri tushunish.',
      'С 2025/26 есть в обоих вариантах B. Подсчёт благоприятных исходов — '
      'обычная комбинаторика, трудность в правильном понимании условия.')),
  S('k4', T('Dirixle va invariant', 'Принцип Дирихле и инвариант'),
    T('“Kamida nechta …” degan savol — deyarli har doim Dirixle. Invariant '
      'esa “imkonsiz” javobini asoslash uchun.',
      'Вопрос «сколько как минимум …» — почти всегда Дирихле. Инвариант — '
      'для обоснования ответа «невозможно».')),
  S('k5', T('Chizmada sanash', 'Подсчёт на рисунке'),
    T('Rasmda nechta uchburchak yoki toʻrtburchak bor. Turlarga ajratib '
      'sanash — yagona ishonchli yoʻl.',
      'Сколько треугольников или прямоугольников на рисунке. Разбить по '
      'типам — единственный надёжный путь.')),
 ]),

 dict(kod='seq', hue='comb', nom=T('Ketma-ketliklar', 'Последовательности'),
  izoh=T('Arifmetik va geometrik progressiya har variantda deyarli bir marta. '
         'Rekurrent ketma-ketliklarda esa asosiy savol — davriylik.',
         'Арифметическая и геометрическая прогрессии — почти в каждом '
         'варианте. В рекуррентных главный вопрос — периодичность.'),
  bolim=[
  S('s1', T('Arifmetik progressiya', 'Арифметическая прогрессия'),
    T('$a_1$ va $d$ orqali ikkita tenglama tuzish. Hadlar yigʻindisi '
      'shartlari deyarli har doim shunga keltiriladi.',
      'Составить два уравнения через $a_1$ и $d$. Условия на суммы членов '
      'почти всегда сводятся к этому.')),
  S('s2', T('Geometrik progressiya', 'Геометрическая прогрессия'),
    T('Hadlar koʻpaytmasi berilsa — oʻrta had orqali yozing: '
      '$a_1a_3a_{11}=a_?^3$ koʻrinishiga keladi.',
      'Если дано произведение членов — выражайте через средний: сводится к '
      'виду $a_1a_3a_{11}=a_?^3$.')),
  S('s3', T('Rekurrent va davriy ketma-ketliklar', 'Рекуррентные и периодические'),
    T('Dastlabki 5–6 hadni yozib chiqing: davr deyarli har doim koʻrinadi. '
      '$x_{2025}$ soʻralsa — javob davrdan chiqadi.',
      'Выпишите первые 5–6 членов: период почти всегда виден. Если спрашивают '
      '$x_{2025}$ — ответ из периода.')),
  S('s4', T('Yigʻindilar va raqamli ketma-ketliklar', 'Суммы и цифровые последовательности'),
    T('Ishorasi almashadigan yigʻindilar, $\\sum k\\cdot 2^k$ turi va '
      '“$2025$-oʻrindagi raqam” savollari.',
      'Знакопеременные суммы, тип $\\sum k\\cdot 2^k$ и вопросы про '
      '«цифру на $2025$-м месте».')),
 ]),

 dict(kod='func', hue='alg', nom=T('Funksiyalar', 'Функции'),
  izoh=T('Ikkita tur: funksional tenglama va funksiya xossasi. Ikkalasi ham '
         'oʻrgatilsa darhol yechiladigan, oʻrgatilmasa boshi berk savollar.',
         'Два типа: функциональное уравнение и свойство функции. Оба — '
         'задачи, которые после объяснения решаются сразу, а без него ставят '
         'в тупик.'),
  bolim=[
  S('f1', T('Funksional tenglamalar', 'Функциональные уравнения'),
    T('Ikkita harakat yetadi: kerakli $x$ ni qoʻyish, yoki $x$ oʻrniga '
      '$1/x$, $-x$, $x-1$ qoʻyib ikkinchi tenglama olish.',
      'Хватает двух приёмов: подставить нужный $x$ или подставить вместо $x$ '
      'выражения $1/x$, $-x$, $x-1$ и получить второе уравнение.')),
  S('f2', T('Funksiya xossalari va qiymatlar sohasi', 'Свойства функции и область значений'),
    T('Juftlik/toqlik, qiymatlar sohasi, jadval bilan berilgan funksiya. '
      'Juft funksiyada toq darajali hadlar koeffitsiyenti nolga teng.',
      'Чётность, область значений, функция, заданная таблицей. У чётной '
      'функции коэффициенты при нечётных степенях равны нулю.')),
 ]),

 dict(kod='trig', hue='trig', nom=T('Trigonometriya', 'Тригонометрия'),
  izoh=T('9-sinfda deyarli yoʻq, 10 va 11-sinfda har variantda 2–4 ta. '
         'Asosan keltirish formulalari va bitta ayniyat.',
         'В 9 классе почти нет, в 10 и 11 — по 2–4 задачи в варианте. В '
         'основном формулы приведения и одно тождество.'),
  bolim=[
  S('t1', T('Ayniy almashtirishlar va keltirish', 'Преобразования и формулы приведения'),
    T('$\\sin^2+\\cos^2=1$ va keltirish formulalari. Katta burchakni '
      '$360°$ ga boʻlib qoldiqqa keltirish — birinchi qadam.',
      '$\\sin^2+\\cos^2=1$ и формулы приведения. Первый шаг — свести большой '
      'угол к остатку по $360°$.')),
  S('t2', T('Tenglama va qiymat topish', 'Уравнения и нахождение значения'),
    T('$\\operatorname{tg}\\alpha+\\sin\\alpha=1$ turidagi savolda '
      'ikkala tomonni kvadratga koʻtarib $\\sin 2\\alpha$ ni chiqaring.',
      'В задачах вида $\\operatorname{tg}\\alpha+\\sin\\alpha=1$ возведите '
      'обе части в квадрат и выразите $\\sin 2\\alpha$.')),
 ]),

 dict(kod='word', hue='rev', nom=T('Matn masalalari', 'Текстовые задачи'),
  izoh=T('Kam, lekin arzon ball: sistema tuzib yechiladi. 11-sinf 2025/26 '
         'variantida esa toʻrttasi birdan chiqdi.',
         'Немного, но это дешёвые баллы: решаются составлением системы. В '
         'варианте 11 класса 2025/26 их сразу четыре.'),
  bolim=[
  S('w1', T('Foiz va narx', 'Проценты и цена'),
    T('Chegirma ustiga chegirma — koʻpaytiriladi, qoʻshilmaydi. Eng koʻp '
      'xato shu yerda.',
      'Скидка на скидку — умножается, а не складывается. Здесь больше всего '
      'ошибок.')),
  S('w2', T('Ish va harakat', 'Работа и движение'),
    T('Bir kunlik ishni $1/t$ deb belgilang. Soat strelkalari ham shu '
      'turdagi masala.',
      'Обозначьте дневную работу как $1/t$. Задачи про стрелки часов — того '
      'же типа.')),
  S('w3', T('Sistemaga keltiriladigan matn masalalari', 'Текстовые задачи на системы'),
    T('Ikki nomaʼlum, ikki shart. Savol koʻpincha nomaʼlumlarning oʻzini '
      'emas, ularning ayirmasini soʻraydi.',
      'Два неизвестных, два условия. Вопрос часто про разность неизвестных, '
      'а не про них самих.')),
  S('w4', T('Mantiqiy matn masalalari', 'Логические текстовые задачи'),
    T('Hafta kunlari, test ballari, baholash. Javobni oxirigacha '
      'tekshirib koʻrish — bu turdagi savolda shart.',
      'Дни недели, баллы за тест, оценивание. В таких задачах обязательно '
      'проверять ответ до конца.')),
 ]),
]


# =========================================================== Savollar xaritasi ==
SAVOLLAR = []


def q(paper, sinf, n, sub, uz, ru):
    SAVOLLAR.append(dict(paper=paper, sinf=sinf, n=n, sub=sub, nima=T(uz, ru)))


# ------------------------------------------------------------- 9-sinf · 2024 --
q('2024', 9, 1, 'a1', 'ratsional ifodani soddalashtirish', 'упрощение рационального выражения')
q('2024', 9, 2, 'a2', 'kvadrat tenglamaning eng katta ildizi', 'наибольший корень квадратного уравнения')
q('2024', 9, 3, 'w1', 'konfet narxi — proporsiya', 'цена конфет — пропорция')
q('2024', 9, 4, 'a1', 'kub ildizli ifodani soddalashtirish', 'упрощение выражения с кубическими корнями')
q('2024', 9, 5, 'a4', 'modulli tenglama ildizlari soni', 'число корней уравнения с модулем')
q('2024', 9, 6, 'a6', 'sistemadan ifoda qiymatini topish', 'значение выражения из системы')
q('2024', 9, 7, 'a3', 'ratsional tengsizlik, eng kichik butun yechim', 'рациональное неравенство, наименьшее целое решение')
q('2024', 9, 8, 'a1', 'kvadratlar yigʻindisi koʻpaytmasi bilan tenglama', 'уравнение с произведением сумм квадратов')
q('2024', 9, 9, 'n1', 'uchta ketma-ket toq sonning yigʻindisi', 'сумма трёх подряд идущих нечётных чисел')
q('2024', 9, 10, 's1', 'arifmetik progressiyada had raqamini topish', 'номер члена арифметической прогрессии')
q('2024', 9, 11, 'n4', '$\\overline{xy0xy0}$ ni raqamli songa boʻlish', 'деление $\\overline{xy0xy0}$ на цифровое число')
q('2024', 9, 12, 'n5', 'koʻpaytma oxiridagi nollar soni', 'число нулей в конце произведения')
q('2024', 9, 13, 'f1', '$f(1-2x)=1-2x^2$ funksional tenglamasi', 'функциональное уравнение $f(1-2x)=1-2x^2$')
q('2024', 9, 14, 'a2', 'ikki kvadrat tenglamaning umumiy ildizi', 'общий корень двух квадратных уравнений')
q('2024', 9, 15, 'g1', 'balandliklar kesishmasi orqali burchak', 'угол через точку пересечения высот')
q('2024', 9, 16, 'g6', 'nuqtadan parabola uchigacha masofa', 'расстояние от точки до вершины параболы')
q('2024', 9, 17, 'g2', 'mediana berilgan uchburchak yuzi', 'площадь треугольника по медиане')
q('2024', 9, 18, 'a3', 'irratsional tengsizlikning butun yechimlari', 'целые решения иррационального неравенства')
q('2024', 9, 19, 'g5', 'gipotenuza va balandlik boʻyicha perimetr', 'периметр по гипотенузе и высоте')
q('2024', 9, 20, 'w2', 'birgalikdagi ish — foizda', 'совместная работа — в процентах')
q('2024', 9, 21, 'a6', '$x(1+y)=y(1-x)=1$ sistemasi', 'система $x(1+y)=y(1-x)=1$')
q('2024', 9, 22, 'n9', '$[2u]-\\{u\\}=20{,}24$', '$[2u]-\\{u\\}=20{,}24$')
q('2024', 9, 23, 'g4', 'toʻgʻri toʻrtburchak diagonallari orasidagi burchak', 'угол между диагоналями прямоугольника')
q('2024', 9, 24, 'n4', '$\\overline{abbc}=(9c+2)^2$ raqamli tenglik', 'цифровое равенство $\\overline{abbc}=(9c+2)^2$')
q('2024', 9, 25, 'a1', 'ichma-ich ildizli tenglama', 'уравнение с вложенными радикалами')
q('2024', 9, 26, 'g1', 'bissektrisalar va $AP+OP=AB$ sharti', 'биссектрисы и условие $AP+OP=AB$')
q('2024', 9, 27, 'a6', 'kasrlar yigʻindisidan kvadratlar yigʻindisiga', 'от суммы дробей к сумме квадратов')
q('2024', 9, 28, 'g4', 'qavariq toʻrtburchak, diagonallar oʻrtalari', 'выпуклый четырёхугольник, середины диагоналей')
q('2024', 9, 29, 'a5', 'parametr: tenglama yagona yechimga ega', 'параметр: уравнение с единственным решением')
q('2024', 9, 30, 'k1', 'oʻgʻil va qiz bolalarni oʻrindiqlarga joylashtirish', 'рассадка мальчиков и девочек')

# -------------------------------------------------------- 9-sinf · 2025/26-A --
q('2025/26-A', 9, 1, 's4', 'ishorasi almashadigan ikki yigʻindi nisbati', 'отношение двух знакопеременных сумм')
q('2025/26-A', 9, 2, 'n1', '$\\dfrac{n^2-3}{n-2}$ butun boʻlishi', 'целочисленность $\\dfrac{n^2-3}{n-2}$')
q('2025/26-A', 9, 3, 'g4', 'qavariq koʻpburchakdagi toʻgʻri burchaklar soni', 'число прямых углов выпуклого многоугольника')
q('2025/26-A', 9, 4, 'n2', '$22^2+44^2+66^2$ ning eng katta tub boʻluvchisi', 'наибольший простой делитель $22^2+44^2+66^2$')
q('2025/26-A', 9, 5, 'n4', 'raqamlar yigʻindisi $6$ boʻlgan ikki xonali sonlar', 'двузначные числа с суммой цифр $6$')
q('2025/26-A', 9, 6, 'a4', '$|x+6|=|x+10|$', '$|x+6|=|x+10|$')
q('2025/26-A', 9, 7, 'a7', 'nisbatlar zanjiri boʻyicha koʻpaytma', 'произведение по цепочке отношений')
q('2025/26-A', 9, 8, 'n1', 'qoldiqlar boʻyicha eng kichik natural son', 'наименьшее натуральное число по остаткам')
q('2025/26-A', 9, 9, 'g4', 'diagonallari perpendikulyar trapetsiya yuzi', 'площадь трапеции с перпендикулярными диагоналями')
q('2025/26-A', 9, 10, 'a1', 'ichma-ich ildizlarni ochish', 'раскрытие вложенных радикалов')
q('2025/26-A', 9, 11, 'g3', 'burchakka ichki chizilgan urinuvchi aylanalar', 'вписанные в угол касающиеся окружности')
q('2025/26-A', 9, 12, 'f2', '$f(t)=3$ boʻlsa $f(-t)$', 'найти $f(-t)$, если $f(t)=3$')
q('2025/26-A', 9, 13, 'a2', 'Viyet formulalari bilan $x_1^4+x_2^4$', 'по формулам Виета $x_1^4+x_2^4$')
q('2025/26-A', 9, 14, 's4', 'ikki yigʻindining tengligidan $n$ ni topish', 'найти $n$ из равенства двух сумм')
q('2025/26-A', 9, 15, 'a7', 'toʻrtta teng nisbat va ularning qiymati', 'четыре равных отношения и их значение')
q('2025/26-A', 9, 16, 'f1', '$f(2n)=n\\,f(n)$ dan $f(2^{10})$', 'из $f(2n)=n\\,f(n)$ найти $f(2^{10})$')
q('2025/26-A', 9, 17, 'n6', 'ikki xonali sonlar koʻpaytmasida $3$ ning darajasi', 'степень тройки в произведении двузначных чисел')
q('2025/26-A', 9, 18, 'n5', '$3^{2025}$ ning oxirgi ikkita raqami', 'последние две цифры $3^{2025}$')
q('2025/26-A', 9, 19, 'n7', '$p^2-2q^2=1$ tub sonlarda', '$p^2-2q^2=1$ в простых числах')
q('2025/26-A', 9, 20, 'a7', '$a/b=b/c=c/d$ va $b^3+c^3$', '$a/b=b/c=c/d$ и $b^3+c^3$')
q('2025/26-A', 9, 21, 'g3', 'urinma va vatar hosil qilgan burchaklar', 'углы между касательной и хордами')
q('2025/26-A', 9, 22, 's4', '$\\sum(3k+1)2^k$ yigʻindining oxirgi raqami', 'последняя цифра суммы $\\sum(3k+1)2^k$')
q('2025/26-A', 9, 23, 'n1', '$\\overline{BAA2025AAB}$ ning $7$ ga boʻlinishi', 'делимость $\\overline{BAA2025AAB}$ на $7$')
q('2025/26-A', 9, 24, 'n3', '$xyz=12^4$ natural uchliklar soni', 'число натуральных троек $xyz=12^4$')
q('2025/26-A', 9, 25, 't2', '$\\operatorname{tg}\\alpha+\\sin\\alpha=1$ dan $(\\sin2\\alpha+2)^2$', 'из $\\operatorname{tg}\\alpha+\\sin\\alpha=1$ найти $(\\sin2\\alpha+2)^2$')
q('2025/26-A', 9, 26, 'k2', 'raqamlariga shart qoʻyilgan uch xonali sonlar', 'трёхзначные числа с условиями на цифры')
q('2025/26-A', 9, 27, 'g4', 'trapetsiya tomonlariga urinuvchi aylana radiusi', 'радиус окружности, касающейся сторон трапеции')
q('2025/26-A', 9, 28, 'n4', '$\\overline{abcd}\\cdot4=\\overline{dcba}$', '$\\overline{abcd}\\cdot4=\\overline{dcba}$')
q('2025/26-A', 9, 29, 'k5', 'chizmadagi uchburchaklar soni', 'число треугольников на рисунке')
q('2025/26-A', 9, 30, 'g4', 'kvadrat ichidagi nuqta va $\\angle AMB$', 'точка внутри квадрата и $\\angle AMB$')

# -------------------------------------------------------- 9-sinf · 2025/26-B --
q('2025/26-B', 9, 1, 'a9', 'teleskopik koʻpaytmani hisoblash', 'вычисление телескопического произведения')
q('2025/26-B', 9, 2, 'n2', '$169+n$ tub boʻladigan $n$ lar soni', 'число $n$, при которых $169+n$ простое')
q('2025/26-B', 9, 3, 'g1', 'teng yonli uchburchakda burchak sanash', 'счёт углов в равнобедренном треугольнике')
q('2025/26-B', 9, 4, 'k1', 'doirachalarga sonlarni joylashtirish', 'расстановка чисел по кружкам')
q('2025/26-B', 9, 5, 's3', 'davriy ketma-ketlikning $2025$-hadi', '$2025$-й член периодической последовательности')
q('2025/26-B', 9, 6, 'g1', 'simmetrik nuqtalar va burchak', 'симметричные точки и угол')
q('2025/26-B', 9, 7, 'n7', '$2a+3b$ koʻrinishida ifodalanmaydigan sonlar', 'числа, не представимые как $2a+3b$')
q('2025/26-B', 9, 8, 'n6', '$1!+2!+\\dots+2025!$ oxirgi ikki raqami', 'последние две цифры $1!+2!+\\dots+2025!$')
q('2025/26-B', 9, 9, 'n7', '$4a-7b+28ab=2020$', '$4a-7b+28ab=2020$')
q('2025/26-B', 9, 10, 'a2', '$f(1)=f(20)$ shartli kvadrat uchhad', 'квадратный трёхчлен с условием $f(1)=f(20)$')
q('2025/26-B', 9, 11, 'n6', '$n!$ va $7^{72}$ — Lejandr formulasi', '$n!$ и $7^{72}$ — формула Лежандра')
q('2025/26-B', 9, 12, 'w1', 'uchta chegirmaning umumiy foizi', 'общий процент трёх скидок')
q('2025/26-B', 9, 13, 'a4', 'ikkita modulli tenglama ildizlari yigʻindisi', 'сумма корней уравнения с двумя модулями')
q('2025/26-B', 9, 14, 'g1', 'bissektrisa medianaga perpendikulyar', 'биссектриса перпендикулярна медиане')
q('2025/26-B', 9, 15, 'n4', 'raqamlari almashtirilgan son bilan oʻzaro tublik', 'взаимная простота с числом из переставленных цифр')
q('2025/26-B', 9, 16, 'g1', 'burchaklar nisbati va mediana', 'отношение углов и медиана')
q('2025/26-B', 9, 17, 'a7', '$a/b=b/c=k$ va ikkinchi shart', '$a/b=b/c=k$ и второе условие')
q('2025/26-B', 9, 18, 'n2', '$pqr+2025=3(pq+qr+pr)$ tub sonlarda', '$pqr+2025=3(pq+qr+pr)$ в простых числах')
q('2025/26-B', 9, 19, 'n1', '$n^5-2100$ ning berilgan ifodaga boʻlinishi', 'делимость $n^5-2100$ на данное выражение')
q('2025/26-B', 9, 20, 'a6', '$3\\times3$ jadvalda qator va ustun yigʻindilari', 'суммы строк и столбцов таблицы $3\\times3$')
q('2025/26-B', 9, 21, 'k2', 'aynan ikkita $2$ va bitta $5$ raqami', 'ровно две цифры $2$ и одна $5$')
q('2025/26-B', 9, 22, 'a10', 'oʻrta arifmetik va oʻrta geometrik sharti', 'условие на среднее арифметическое и геометрическое')
q('2025/26-B', 9, 23, 'n3', 'aynan $n$ ta boʻluvchili eng kichik son', 'наименьшее число ровно с $n$ делителями')
q('2025/26-B', 9, 24, 'g2', 'tomonlar oʻrtalari va yuzalar nisbati', 'середины сторон и отношение площадей')
q('2025/26-B', 9, 25, 'k5', 'bitta boʻyalgan katakli toʻgʻri toʻrtburchaklar', 'прямоугольники ровно с одной закрашенной клеткой')
q('2025/26-B', 9, 26, 's3', '$a_n=1000a_{n-1}+n$ va $111$ ga boʻlinish', '$a_n=1000a_{n-1}+n$ и делимость на $111$')
q('2025/26-B', 9, 27, 's1', 'ildizlari progressiya tashkil qilgan kub tenglama', 'кубическое уравнение с корнями в прогрессии')
q('2025/26-B', 9, 28, 'k3', 'boʻyalgan uchlar bilan bogʻliq ehtimollik', 'вероятность для раскрашенных вершин')
q('2025/26-B', 9, 29, 'a1', 'kublar yigʻindisi orqali ifoda qiymati', 'значение выражения через сумму кубов')

# ------------------------------------------------------------ 10-sinf · 2024 --
q('2024', 10, 1, 'a1', 'ildizli ifodani soddalashtirish', 'упрощение выражения с радикалами')
q('2024', 10, 2, 'a2', 'parabola uchi koordinatalari', 'координаты вершины параболы')
q('2024', 10, 3, 't1', 'keltirish formulalari bilan hisoblash', 'вычисление по формулам приведения')
q('2024', 10, 4, 'a3', 'ikki tomonlama kvadrat tengsizlik', 'двойное квадратное неравенство')
q('2024', 10, 5, 'w3', 'avtobus va tramvay — sistema tuzish', 'автобусы и трамваи — составление системы')
q('2024', 10, 6, 'f2', 'kasr funksiyaning qiymatlari sohasi', 'область значений дробной функции')
q('2024', 10, 7, 's2', 'geometrik progressiya hadlari koʻpaytmasi', 'произведение членов геометрической прогрессии')
q('2024', 10, 8, 't1', '$\\operatorname{tg}\\alpha$ boʻyicha $\\sin2\\alpha$', '$\\sin2\\alpha$ по $\\operatorname{tg}\\alpha$')
q('2024', 10, 9, 'g3', 'aylanadagi perpendikulyar vatarlar', 'перпендикулярные хорды окружности')
q('2024', 10, 10, 't1', 'trigonometrik ifodani soddalashtirish', 'упрощение тригонометрического выражения')
q('2024', 10, 11, 'a3', 'irratsional tengsizlikning butun yechimlari', 'целые решения иррационального неравенства')
q('2024', 10, 12, 'g2', 'parallel chiziq va yuzalar nisbati', 'параллельная прямая и отношение площадей')
q('2024', 10, 13, 'a6', 'simmetrik ifodalarning qiymati', 'значение симметрических выражений')
q('2024', 10, 14, 's1', 'arifmetik progressiyada $a_3^2+a_5^2$', '$a_3^2+a_5^2$ в арифметической прогрессии')
q('2024', 10, 15, 'a2', 'Viyet formulalari orqali $p+q$', '$p+q$ по формулам Виета')
q('2024', 10, 16, 'g3', 'tashqi chizilgan aylana radiusi', 'радиус описанной окружности')
q('2024', 10, 17, 'n1', 'boʻlinma ham, qoldiq ham $4$ ga teng', 'и частное, и остаток равны $4$')
q('2024', 10, 18, 'f1', '$f(0)\\,(f(x)+2)=4x-1$', '$f(0)\\,(f(x)+2)=4x-1$')
q('2024', 10, 19, 'n1', '$k(k+1)(k+2)$ larning $12$ ga boʻlinishi', 'делимость $k(k+1)(k+2)$ на $12$')
q('2024', 10, 20, 'a4', '$(x-1)|x|=|x|+1$ ildizlari soni', 'число корней $(x-1)|x|=|x|+1$')
q('2024', 10, 21, 'a10', '$ac=6$, $bc=15$ da $a+b+2c$ minimumi', 'минимум $a+b+2c$ при $ac=6$, $bc=15$')
q('2024', 10, 22, 'g4', 'trapetsiyaga ichki chizilgan aylana', 'окружность, вписанная в трапецию')
q('2024', 10, 23, 'n9', '$[2u]+2\\{u\\}=20{,}24$', '$[2u]+2\\{u\\}=20{,}24$')
q('2024', 10, 24, 'a6', '$x(1-y)=2y(x+1)=2$ sistemasi', 'система $x(1-y)=2y(x+1)=2$')
q('2024', 10, 25, 'g4', 'diagonal oʻrtasidan tomonlargacha teng masofa', 'равные расстояния от середины диагонали до сторон')
q('2024', 10, 26, 'a5', 'parametr: yagona yechim sharti', 'параметр: условие единственного решения')
q('2024', 10, 27, 'n1', '$\\dfrac{35+2n}{3n+1}$ butun boʻlishi', 'целочисленность $\\dfrac{35+2n}{3n+1}$')
q('2024', 10, 28, 'a6', 'uchta kvadratli sistemadan chiziqli ifoda', 'линейное выражение из системы трёх квадратов')
q('2024', 10, 29, 'n4', '$\\overline{*253*}$ soni $72$ ga karrali', 'число $\\overline{*253*}$ кратно $72$')
q('2024', 10, 30, 'g5', 'balandlik va katetlar proyeksiyalari', 'высота и проекции катетов')

# ------------------------------------------------------- 10-sinf · 2025/26-A --
q('2025/26-A', 10, 1, 'n5', '$2^2+3^3+4^4+5^5+6^6$ oxirgi raqami', 'последняя цифра $2^2+3^3+4^4+5^5+6^6$')
q('2025/26-A', 10, 2, 'n2', 'turli tub boʻluvchilar soni', 'число различных простых делителей')
q('2025/26-A', 10, 3, 's1', 'arifmetik progressiyadan $x^2+y^2$', '$x^2+y^2$ из арифметической прогрессии')
q('2025/26-A', 10, 4, 'a8', '$16^a\\cdot9^a=6^b\\cdot8^2$ — darajalar', '$16^a\\cdot9^a=6^b\\cdot8^2$ — степени')
q('2025/26-A', 10, 5, 'a8', 'logarifmik tenglikdan $x$ ni topish', 'найти $x$ из логарифмического равенства')
q('2025/26-A', 10, 6, 'n3', 'aynan $3$ ta boʻluvchili sonlar', 'числа ровно с $3$ делителями')
q('2025/26-A', 10, 7, 'a2', 'Viyet: $x_2+x_1x_2+x_1$', 'Виет: $x_2+x_1x_2+x_1$')
q('2025/26-A', 10, 8, 'n3', '$24p$ ning boʻluvchilari soni', 'число делителей $24p$')
q('2025/26-A', 10, 9, 'a3', 'koʻpaytmali tengsizlikning butun yechimlari', 'целые решения неравенства с произведением')
q('2025/26-A', 10, 10, 'g6', 'toʻgʻri chiziqlar chegaralagan uchburchak yuzi', 'площадь треугольника, ограниченного прямыми')
q('2025/26-A', 10, 11, 'n3', '$2025!$ va $2024!$ boʻluvchilari farqi', 'разность числа делителей $2025!$ и $2024!$')
q('2025/26-A', 10, 12, 'f2', '$f(x)+f(1/x)$ yigʻindisi', 'сумма $f(x)+f(1/x)$')
q('2025/26-A', 10, 13, 's1', 'arifmetik progressiyaning uchinchi hadi', 'третий член арифметической прогрессии')
q('2025/26-A', 10, 14, 'g4', 'trapetsiya: oʻrta chiziq va asos burchaklari', 'трапеция: средняя линия и углы при основании')
q('2025/26-A', 10, 15, 'k4', 'yoshlar farqi — Dirixle printsipi', 'разность возрастов — принцип Дирихле')
q('2025/26-A', 10, 16, 'n1', '$\\dfrac{n^3-2n^2-12}{n}$ natural qiymatlari', 'натуральные значения $\\dfrac{n^3-2n^2-12}{n}$')
q('2025/26-A', 10, 17, 'g2', 'diagonallar hosil qilgan uchburchaklar yuzi', 'площади треугольников, образованных диагоналями')
q('2025/26-A', 10, 18, 'k1', 'kvadrat uzunlikli kesmalardan uchburchak', 'треугольники из отрезков квадратной длины')
q('2025/26-A', 10, 19, 'w2', 'soat strelkalari qachon ustma-ust tushadi', 'когда совпадут стрелки часов')
q('2025/26-A', 10, 20, 'g4', 'parallelogramm ichidagi nuqta va burchaklar', 'точка внутри параллелограмма и углы')
q('2025/26-A', 10, 21, 'a9', '$(x^3-2025x+1)^3$ da $x^6$ koeffitsiyenti', 'коэффициент при $x^6$ в $(x^3-2025x+1)^3$')
q('2025/26-A', 10, 22, 'a5', 'tengsizlikda aynan $7$ ta butun yechim', 'ровно $7$ целых решений неравенства')
q('2025/26-A', 10, 23, 'g1', 'bissektrisa va unga perpendikulyar', 'биссектриса и перпендикуляр к ней')
q('2025/26-A', 10, 24, 'n8', '$F(n)=n^5+3n^3-4n$ larning EKUBi', 'НОД чисел $F(n)=n^5+3n^3-4n$')
q('2025/26-A', 10, 25, 's4', 'raqamli ketma-ketlikda $2025$-oʻrin', '$2025$-е место в цифровой последовательности')
q('2025/26-A', 10, 26, 'n7', '$13a+31b$ koʻrinishida kamida $3$ xil usulda', '$13a+31b$ не менее чем тремя способами')
q('2025/26-A', 10, 27, 'g1', '$\\angle B=\\angle C=\\angle AEM$ shartli uchburchak', 'треугольник с условием $\\angle B=\\angle C=\\angle AEM$')
q('2025/26-A', 10, 28, 'k2', 'tarkibida $8$ raqami bor sonlar soni', 'сколько чисел содержат цифру $8$')
q('2025/26-A', 10, 29, 'a9', '$x^2-x+1$ ga boʻlinuvchi koʻphad', 'многочлен, делящийся на $x^2-x+1$')
q('2025/26-A', 10, 30, 'k1', 'ketma-ket elementsiz qism toʻplamlar', 'подмножества без соседних элементов')

# ------------------------------------------------------- 10-sinf · 2025/26-B --
q('2025/26-B', 10, 1, 'a9', 'binom yoyilmasidagi ishorali yigʻindi', 'знакопеременная сумма биномиального разложения')
q('2025/26-B', 10, 2, 'a6', '$\\frac{x-y}{x+y}=7$ shartli sistema', 'система с условием $\\frac{x-y}{x+y}=7$')
q('2025/26-B', 10, 3, 'n9', 'kasr qismlar yigʻindisi', 'сумма дробных частей')
q('2025/26-B', 10, 4, 'f2', 'toq funksiya va uning qiymatlar toʻplami', 'нечётная функция и её множество значений')
q('2025/26-B', 10, 5, 'g2', 'boʻyalgan yuzalar orqali $xy$', '$xy$ через закрашенные площади')
q('2025/26-B', 10, 6, 'k1', '$12$ oʻquvchini uchta guruhga boʻlish', 'разбиение $12$ учеников на три группы')
q('2025/26-B', 10, 7, 'a1', '$\\sqrt[3]{r}-1/\\sqrt[3]{r}=1$ dan $r^3-1/r^3$', 'из $\\sqrt[3]{r}-1/\\sqrt[3]{r}=1$ найти $r^3-1/r^3$')
q('2025/26-B', 10, 8, 'k1', 'qizil sharlar yonma-yon boʻlmasin', 'красные шары не должны стоять рядом')
q('2025/26-B', 10, 9, 't1', 'kub ildizli trigonometrik ifoda', 'тригонометрическое выражение с кубическими корнями')
q('2025/26-B', 10, 10, 'n3', '$20^{22}$ ning kvadrat yoki kub boʻluvchilari', 'делители-квадраты или кубы числа $20^{22}$')
q('2025/26-B', 10, 11, 'k1', '$5$ ta kitobni $3$ talabaga taqsimlash', 'распределение $5$ книг между $3$ студентами')
q('2025/26-B', 10, 12, 'n7', '$3x^2y-12xy-8y-7=0$ butun yechimlari', 'целые решения $3x^2y-12xy-8y-7=0$')
q('2025/26-B', 10, 13, 'f2', 'jadval bilan berilgan funksiyalar kompozitsiyasi', 'композиция функций, заданных таблицей')
q('2025/26-B', 10, 14, 'f2', 'chiziqli $q(x)$ orqali $p(x)$ ni tiklash', 'восстановить $p(x)$ через линейную $q(x)$')
q('2025/26-B', 10, 15, 'a10', 'aylana shartida $4x+3y$ maksimumi', 'максимум $4x+3y$ при условии окружности')
q('2025/26-B', 10, 16, 'n8', '$\\gcd(30m+n,\;15n+2m)$ eng katta qiymati', 'наибольшее значение $\\gcd(30m+n,\;15n+2m)$')
q('2025/26-B', 10, 17, 'n7', '$m^2+2n^2=3(m+n)$ butun yechimlari', 'целые решения $m^2+2n^2=3(m+n)$')
q('2025/26-B', 10, 18, 'k4', 'tangalarni agʻdarish — invariant', 'переворачивание монет — инвариант')
q('2025/26-B', 10, 19, 'a9', 'teleskopik koʻpaytma $T$ va daraja', 'телескопическое произведение $T$ и степень')
q('2025/26-B', 10, 20, 'k3', 'ikki tasodifiy sonning farqi ehtimoli', 'вероятность разности двух случайных чисел')
q('2025/26-B', 10, 21, 'f1', 'ikki oʻzgaruvchili funksional rekurrent', 'функциональная рекуррента от двух переменных')
q('2025/26-B', 10, 22, 'a10', 'sohaga ichki chizilgan toʻrtburchak yuzi maksimumi', 'максимум площади вписанного в область прямоугольника')
q('2025/26-B', 10, 23, 's4', '$a_k=(k^2+1)k!$ va qismiy yigʻindi', '$a_k=(k^2+1)k!$ и частичная сумма')
q('2025/26-B', 10, 24, 'f1', '$\\sin x+\\cos y=f(x)+f(y)+g(x)-g(y)$', '$\\sin x+\\cos y=f(x)+f(y)+g(x)-g(y)$')
q('2025/26-B', 10, 25, 'n9', '$x^2-8[x]+12=0$ ildizlari soni', 'число корней $x^2-8[x]+12=0$')
q('2025/26-B', 10, 26, 'a6', 'simmetrik yigʻindilardan $x^4+y^4+z^4$', '$x^4+y^4+z^4$ через симметрические суммы')
q('2025/26-B', 10, 27, 'g2', 'parallel chiziqlar va uchta yuz', 'параллельные прямые и три площади')
q('2025/26-B', 10, 28, 'n1', '$1$–$9$ raqamlaridan $11$ ga karrali sonlar', 'числа из цифр $1$–$9$, кратные $11$')
q('2025/26-B', 10, 29, 'g3', 'kvadrat va ikkita aylana yoyi yuzasi', 'площадь фигуры из квадрата и двух дуг')
q('2025/26-B', 10, 30, 'k3', 'tangalarni almashtirish ehtimoli', 'вероятность при обмене монет')

# ------------------------------------------------------------ 11-sinf · 2024 --
q('2024', 11, 1, 'a1', 'ildizli ifodani soddalashtirish', 'упрощение выражения с радикалами')
q('2024', 11, 2, 'n2', '$p$ va $p^4+3$ tub boʻlsa', 'если $p$ и $p^4+3$ простые')
q('2024', 11, 3, 'a3', 'ratsional tengsizlik, eng katta butun yechim', 'рациональное неравенство, наибольшее целое решение')
q('2024', 11, 4, 'g1', 'bissektrisa va burchaklar ayirmasi', 'биссектриса и разность углов')
q('2024', 11, 5, 't1', 'keltirish formulalari bilan soddalashtirish', 'упрощение по формулам приведения')
q('2024', 11, 6, 'a8', 'logarifmik tengsizlik — asosga qarab', 'логарифмическое неравенство — по основанию')
q('2024', 11, 7, 'f2', 'juft funksiya sharti', 'условие чётности функции')
q('2024', 11, 8, 't2', '$2\\sqrt3\\cos A=2\\cos B=\\sqrt3$', '$2\\sqrt3\\cos A=2\\cos B=\\sqrt3$')
q('2024', 11, 9, 'n4', '$9$ bilan tugaydigan $9$ ga karrali sonlar', 'числа, кратные $9$ и оканчивающиеся на $9$')
q('2024', 11, 10, 'a8', 'logarifmik ifodani soddalashtirish', 'упрощение логарифмического выражения')
q('2024', 11, 11, 'a4', 'koʻpaytma nolga teng: ildizlar soni', 'произведение равно нулю: число корней')
q('2024', 11, 12, 'g2', 'burchaklari $15°,60°,105°$ uchburchak yuzi', 'площадь треугольника с углами $15°,60°,105°$')
q('2024', 11, 13, 'a6', '$x(x-y)=y(x+y)=1$ sistemasi', 'система $x(x-y)=y(x+y)=1$')
q('2024', 11, 14, 't1', '$\\cos(-2024°)$ va ildiz ostidagi daraja', '$\\cos(-2024°)$ и степень под корнем')
q('2024', 11, 15, 'g4', 'kvadrat, $60°$ burchak va kesma uzunligi', 'квадрат, угол $60°$ и длина отрезка')
q('2024', 11, 16, 'f1', '$f(1-x)=1-x^2$ dan yigʻindi', 'сумма из $f(1-x)=1-x^2$')
q('2024', 11, 17, 'n5', '$9\\cdot99\\cdot999\\cdots$ ning $1000$ ga qoldigʻi', 'остаток $9\\cdot99\\cdot999\\cdots$ по модулю $1000$')
q('2024', 11, 18, 'a3', '$\\sqrt{28-x^2}+\\sqrt{-x}\\ge4$ butun yechimlari', 'целые решения $\\sqrt{28-x^2}+\\sqrt{-x}\\ge4$')
q('2024', 11, 19, 'g6', 'vektorlar: $\\vec{OA}+\\vec{OB}=\\vec{OC}$', 'векторы: $\\vec{OA}+\\vec{OB}=\\vec{OC}$')
q('2024', 11, 20, 'n5', '$5^{2024}-3^{2024}$ ning $34$ ga qoldigʻi', 'остаток $5^{2024}-3^{2024}$ по модулю $34$')
q('2024', 11, 21, 'a1', 'kub ildizli uzun ifodani soddalashtirish', 'упрощение длинного выражения с кубическими корнями')
q('2024', 11, 22, 'a1', '$a^2+a+11=6\\sqrt{a^2+a+2}$ almashtirish bilan', '$a^2+a+11=6\\sqrt{a^2+a+2}$ заменой')
q('2024', 11, 23, 't2', '$\\operatorname{tg}\\alpha+\\sin\\alpha=1$ dan hisoblash', 'вычисление из $\\operatorname{tg}\\alpha+\\sin\\alpha=1$')
q('2024', 11, 24, 'k2', 'kamida bitta juft raqamli toʻrt xonali sonlar', 'четырёхзначные числа хотя бы с одной чётной цифрой')
q('2024', 11, 25, 'g3', 'ichki chizilgan toʻrtburchakning toʻrtinchi tomoni', 'четвёртая сторона вписанного четырёхугольника')
q('2024', 11, 26, 'n4', '$\\overline{aabc}=(a+b+c)^3$', '$\\overline{aabc}=(a+b+c)^3$')
q('2024', 11, 27, 'g3', 'segmentga ichki chizilgan kvadrat', 'квадрат, вписанный в сегмент')
q('2024', 11, 28, 'a5', 'parametr: faqat bitta ildiz', 'параметр: ровно один корень')
q('2024', 11, 29, 'n9', '$20[u]=24\\{u\\}$', '$20[u]=24\\{u\\}$')
q('2024', 11, 30, 'n4', 'raqamlar koʻpaytmasi $+13$ jarayoni', 'процесс «произведение цифр $+13$»')

# ------------------------------------------------------- 11-sinf · 2025/26-A --
q('2025/26-A', 11, 1, 'a7', '$\\frac{a+2b}{a-2b}=3$ dan ikkinchi nisbat', 'второе отношение из $\\frac{a+2b}{a-2b}=3$')
q('2025/26-A', 11, 2, 'w3', 'qutidagi kitoblar — boʻsh quti vazni', 'книги в коробке — вес пустой коробки')
q('2025/26-A', 11, 3, 'n3', '$9800$ ning toʻla kvadrat boʻluvchilari', 'делители-квадраты числа $9800$')
q('2025/26-A', 11, 4, 'w3', 'olmalarni bolalarga taqsimlash', 'раздача яблок детям')
q('2025/26-A', 11, 5, 'a3', '$x<-1$ da $x$, $x^2$, $x^3$ tartibi', 'порядок $x$, $x^2$, $x^3$ при $x<-1$')
q('2025/26-A', 11, 6, 's1', 'arifmetik progressiyada $a_k=5$', '$a_k=5$ в арифметической прогрессии')
q('2025/26-A', 11, 7, 'w4', 'hafta kunlari boʻyicha kitob oʻqish', 'чтение книги по дням недели')
q('2025/26-A', 11, 8, 'k2', 'raqamlari yigʻindisi $5$ boʻlgan sonlar', 'числа с суммой цифр $5$')
q('2025/26-A', 11, 9, 'k1', 'futbol hisobi $3{:}2$ — birinchi yarim', 'счёт $3{:}2$ — первый тайм')
q('2025/26-A', 11, 10, 'w4', 'test ballari boʻyicha baholash', 'оценка по баллам теста')
q('2025/26-A', 11, 11, 'f1', '$f(x)=1-f(x-1)$ rekurrenti', 'рекуррента $f(x)=1-f(x-1)$')
q('2025/26-A', 11, 12, 't2', '$1-\\sin x+\\sqrt{3y-x}=0$', '$1-\\sin x+\\sqrt{3y-x}=0$')
q('2025/26-A', 11, 13, 'a3', 'tengsizliklardan $x-y$ ning eng kichik qiymati', 'наименьшее значение $x-y$ из неравенств')
q('2025/26-A', 11, 14, 'g3', 'uchta aylana va boʻyalmagan qism foizi', 'три окружности и процент незакрашенной части')
q('2025/26-A', 11, 15, 'n1', '$\\dfrac{6^a\\cdot15^b}{9^b\\cdot10^c}$ natural boʻlishi', 'натуральность $\\dfrac{6^a\\cdot15^b}{9^b\\cdot10^c}$')
q('2025/26-A', 11, 16, 'n2', '“tub–tub” ikki xonali sonlar', 'двузначные «простое–простое» числа')
q('2025/26-A', 11, 17, 'a2', 'ikkala tenglama butun ildizli boʻlsin', 'оба уравнения с целыми корнями')
q('2025/26-A', 11, 18, 'k4', 'sumkadan shar olish — Dirixle', 'вынимание шаров — Дирихле')
q('2025/26-A', 11, 19, 'g4', 'toʻgʻri toʻrtburchakda bissektrisa va nisbat', 'биссектриса в прямоугольнике и отношение')
q('2025/26-A', 11, 20, 's2', 'arifmetikdan geometrik progressiyaga', 'от арифметической прогрессии к геометрической')
q('2025/26-A', 11, 21, 'n5', '$1^{2025}+2^{2025}+\\dots+2025^{2025}$ oxirgi raqami', 'последняя цифра $1^{2025}+\\dots+2025^{2025}$')
q('2025/26-A', 11, 22, 'a10', '$(4-x)(2-x)(x+4)(x+2)$ minimumi', 'минимум $(4-x)(2-x)(x+4)(x+2)$')
q('2025/26-A', 11, 23, 'g4', 'kvadrat tashqarisidagi nuqta va burchaklar', 'точка вне квадрата и углы')
q('2025/26-A', 11, 24, 'k1', 'uchta sport — inklyuziya-eksklyuziya', 'три вида спорта — включения-исключения')
q('2025/26-A', 11, 25, 'g4', '$AB=CD$ boʻlgan toʻrtburchakda burchak', 'угол в четырёхугольнике с $AB=CD$')
q('2025/26-A', 11, 26, 'a9', 'teleskopik koʻpaytma $=\\dfrac{a!}{b!}$', 'телескопическое произведение $=\\dfrac{a!}{b!}$')
q('2025/26-A', 11, 27, 'g5', 'diametr va vatar — metrik munosabat', 'диаметр и хорда — метрическое соотношение')
q('2025/26-A', 11, 28, 's3', 'rekurrent ketma-ketlikning davri', 'период рекуррентной последовательности')
q('2025/26-A', 11, 29, 'n9', '$[3x+1]=2x-\\tfrac12$', '$[3x+1]=2x-\\tfrac12$')
q('2025/26-A', 11, 30, 'k2', 'kamida bitta toq raqamli ketma-ket sonlar', 'подряд идущие числа хотя бы с одной нечётной цифрой')
