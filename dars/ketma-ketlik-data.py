# -*- coding: utf-8 -*-
"""Ketma-ketliklar — 9, 10 va 11-sinf uchun toʻliq maʼlumotnoma.

Sakkizta tuman bosqichi variantida ketma-ketliklar savollarning 6,7 % ini
beradi (16 ta savol) va deyarli har variantda kamida bittasi bor: koʻpincha
arifmetik yoki geometrik progressiya, oxirgi yillarda esa rekurrent
ketma-ketliklar va uzun yigʻindilar ham qoʻshildi.

Hamma son qiymati yozilishidan oldin kompyuterda tekshirilgan.

$...$ — KaTeX.
"""

T = lambda uz, ru: (uz, ru)

CHROME = dict(
 title=T('Ketma-ketliklar · 9–11-sinf', 'Последовательности · 9–11 классы'),
 eyebrow=T('Olimpiadaga tayyorgarlik · tuman (shahar) bosqichi',
           'Подготовка к олимпиаде · районный (городской) этап'),
 h1=T('Ketma-ketliklar', 'Последовательности'),
 sub=T('Progressiyalar, yigʻindilar va rekurrent ketma-ketliklar — har biri '
       'ishlangan misol bilan. Soʻngra toʻrt darajadagi 28 ta masala va '
       'batafsil yechim; 16 tasi haqiqiy variantlardan.',
       'Прогрессии, суммы и рекуррентные последовательности — каждое с '
       'разобранным примером. Затем 28 задач четырёх уровней с подробными '
       'решениями; 16 из них — из настоящих вариантов.'),
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

# ================================================== A · Arifmetik progressiya ==
BOLIMLAR.append(dict(kod='A', hue='alg',
 nom=T('Arifmetik progressiya', 'Арифметическая прогрессия'),
 izoh=T('Har variantda kamida bitta savol. Hammasi $a_1$ va $d$ uchun ikkita '
        'tenglama tuzishga tushadi.',
        'Хотя бы одна задача в каждом варианте. Всё сводится к двум '
        'уравнениям на $a_1$ и $d$.'),
 items=[

 I('tarif', T('Taʼrif va umumiy had', 'Определение и общий член'),
   T('$a_{n+1}=a_n+d$, demak $a_n=a_1+(n-1)d$. Ayirma '
     '$d=a_{n+1}-a_n$ hamma joyda bir xil.',
     '$a_{n+1}=a_n+d$, поэтому $a_n=a_1+(n-1)d$. Разность '
     '$d=a_{n+1}-a_n$ всюду одна и та же.'),
   T('$a_9-a_5=4d$ — indekslar farqi $4$, demak ayirma $4d$ ga teng. '
     'Shu kuzatuv $d$ ni bir qatorda topadi (8-masala).',
     '$a_9-a_5=4d$ — разность индексов равна $4$, поэтому разность членов '
     'равна $4d$. Это сразу даёт $d$ (задача 8).')),

 I('formula', T('Hadlar yigʻindisi', 'Сумма членов'),
   T('$S_n=\\dfrac{a_1+a_n}{2}\\cdot n=\\dfrac{2a_1+(n-1)d}{2}\\cdot n$.',
     '$S_n=\\dfrac{a_1+a_n}{2}\\cdot n=\\dfrac{2a_1+(n-1)d}{2}\\cdot n$.'),
   T('Dastlabki $10$ ta had yigʻindisi $140$ boʻlsa, '
     '$\\dfrac{2a_1+9d}{2}\\cdot10=140$, yaʼni $2a_1+9d=28$ — bu esa '
     'aynan $a_2+a_9$ (12-masala).',
     'Если сумма первых $10$ членов равна $140$, то $2a_1+9d=28$, а это как '
     'раз $a_2+a_9$ (задача 12).'),
   T('Yigʻindini ikki marta, toʻgʻri va teskari tartibda yozib qoʻshing: '
     'har bir juft $a_1+a_n$ ni beradi.',
     'Запишите сумму дважды — в прямом и обратном порядке — и сложите: '
     'каждая пара даёт $a_1+a_n$.')),

 I('xossa', T('Oʻrta had xossasi', 'Свойство среднего члена'),
   T('$a_n=\\dfrac{a_{n-1}+a_{n+1}}{2}$, va umuman '
     '$a_{k}+a_{m}=a_{p}+a_{q}$ agar $k+m=p+q$ boʻlsa.',
     '$a_n=\\dfrac{a_{n-1}+a_{n+1}}{2}$, и вообще $a_k+a_m=a_p+a_q$, если '
     '$k+m=p+q$.'),
   T('$a_5+a_8+a_{11}=3a_8$, chunki $5+11=2\\cdot8$. Shu bilan uchta '
     'nomaʼlumli shart bitta hadni beradi (13-masala).',
     '$a_5+a_8+a_{11}=3a_8$, так как $5+11=2\\cdot8$. Так условие с тремя '
     'членами даёт один член (задача 13).')),

 I('usul', T('Viyet bilan birga ishlatish', 'Вместе с Виетом'),
   T('Agar ikkita hadning <b>yigʻindisi va koʻpaytmasi</b> berilgan boʻlsa, '
     'ular kvadrat tenglamaning ildizlari: $t^2-St+P=0$.',
     'Если даны <b>сумма и произведение</b> двух членов, они — корни '
     'квадратного уравнения $t^2-St+P=0$.'),
   T('$a_2+a_9=28$ va $a_2a_9=147$ boʻlsa, $t^2-28t+147=0$ dan '
     '$t=7$ va $t=21$; oʻsuvchi progressiyada $a_2=7$, $a_9=21$, demak '
     '$d=2$ (12-masala).',
     'Если $a_2+a_9=28$ и $a_2a_9=147$, то из $t^2-28t+147=0$ получаем $7$ и '
     '$21$; в возрастающей прогрессии $a_2=7$, $a_9=21$, значит $d=2$ '
     '(задача 12).')),

 I('usul', T('Progressiya tashkil qilgan ildizlar',
             'Корни, образующие прогрессию'),
   T('Uchta had arifmetik progressiya tashkil qilsa, ularni '
     '$m-d$, $m$, $m+d$ deb belgilang — Viyet formulalari darhol '
     'soddalashadi.',
     'Если три члена образуют арифметическую прогрессию, обозначьте их '
     '$m-d$, $m$, $m+d$ — формулы Виета сразу упрощаются.'),
   T('$x^3-30x^2+kx-840=0$ da ildizlar yigʻindisi $30$, demak oʻrtasi '
     '$m=10$; koʻpaytmasi $10(100-d^2)=840$ dan $d=4$ — ildizlar '
     '$6,10,14$ (19-masala).',
     'В уравнении $x^3-30x^2+kx-840=0$ сумма корней $30$, поэтому средний '
     '$m=10$; из произведения $10(100-d^2)=840$ находим $d=4$ — корни '
     '$6,10,14$ (задача 19).')),
]))

# ================================================== B · Geometrik progressiya ==
BOLIMLAR.append(dict(kod='B', hue='nt',
 nom=T('Geometrik progressiya', 'Геометрическая прогрессия'),
 izoh=T('Arifmetikning koʻpaytmali nusxasi: qoʻshish oʻrniga koʻpaytirish, '
        'oʻrta arifmetik oʻrniga oʻrta geometrik.',
        'Мультипликативная копия арифметической: вместо сложения умножение, '
        'вместо среднего арифметического — среднее геометрическое.'),
 items=[

 I('tarif', T('Taʼrif va umumiy had', 'Определение и общий член'),
   T('$b_{n+1}=b_nq$, demak $b_n=b_1q^{\\,n-1}$ ($q\\ne0$).',
     '$b_{n+1}=b_nq$, поэтому $b_n=b_1q^{\\,n-1}$ ($q\\ne0$).'),
   T('$b_1b_3b_{11}=b_1^3q^{0+2+10}=\\left(b_1q^4\\right)^3=b_5^3$ — '
     'indekslar yigʻindisi $15=3\\cdot5$ boʻlgani uchun hammasi '
     '$b_5$ orqali yoziladi (9-masala).',
     '$b_1b_3b_{11}=\\left(b_1q^4\\right)^3=b_5^3$ — так как сумма индексов '
     '$15=3\\cdot5$, всё выражается через $b_5$ (задача 9).')),

 I('xossa', T('Oʻrta geometrik xossasi', 'Свойство среднего геометрического'),
   T('$b_n^2=b_{n-1}b_{n+1}$, va umuman $b_kb_m=b_pb_q$ agar '
     '$k+m=p+q$ boʻlsa.',
     '$b_n^2=b_{n-1}b_{n+1}$, и вообще $b_kb_m=b_pb_q$, если $k+m=p+q$.'),
   T('$b_2b_8=b_1q\\cdot b_1q^7=\\left(b_1q^4\\right)^2=b_5^2$ — '
     'yuqoridagi misolda $b_5=2$ chiqqani uchun javob $4$.',
     '$b_2b_8=\\left(b_1q^4\\right)^2=b_5^2$ — в примере выше $b_5=2$, '
     'поэтому ответ $4$.')),

 I('formula', T('Yigʻindi va cheksiz yigʻindi', 'Сумма и бесконечная сумма'),
   T('$S_n=b_1\\dfrac{q^n-1}{q-1}$ ($q\\ne1$). $|q|<1$ boʻlganda cheksiz '
     'yigʻindi mavjud: $S=\\dfrac{b_1}{1-q}$.',
     '$S_n=b_1\\dfrac{q^n-1}{q-1}$ ($q\\ne1$). При $|q|<1$ существует '
     'бесконечная сумма: $S=\\dfrac{b_1}{1-q}$.'),
   T('$1+\\dfrac13+\\dfrac19+\\cdots=\\dfrac{1}{1-\\frac13}=\\dfrac32$.',
     '$1+\\dfrac13+\\dfrac19+\\cdots=\\dfrac{1}{1-\\frac13}=\\dfrac32$.'),
   T('$S_n$ ni $q$ ga koʻpaytirib ayiring: oʻrtadagi hamma had qisqaradi.',
     'Умножьте $S_n$ на $q$ и вычтите: все средние члены сократятся.')),

 I('usul', T('Arifmetikdan geometrikka oʻtish',
             'Переход от арифметической к геометрической'),
   T('“Progressiyaning baʼzi hadlariga son qoʻshilsa, geometrik progressiya '
     'hosil boʻladi” turidagi shart: yangi hadlarni yozib, '
     '$b_2^2=b_1b_3$ tengligini qoʻying.',
     'Условие вида «если к некоторым членам прибавить числа, получится '
     'геометрическая прогрессия»: выпишите новые члены и запишите '
     '$b_2^2=b_1b_3$.'),
   T('Nolga teng had chiqib qolgan yechimni tashlab yuboring — geometrik '
     'progressiyada had nol boʻlolmaydi (20-masala).',
     'Решение, в котором появляется нулевой член, отбрасывается — в '
     'геометрической прогрессии член не может быть нулём (задача 20).')),
]))

# ============================================================== C · Yigʻindilar ==
BOLIMLAR.append(dict(kod='C', hue='geo',
 nom=T('Yigʻindilar', 'Суммы'),
 izoh=T('Uzun yigʻindini hisoblashning uchta yoʻli: formula, teleskop yoki '
        'juftlab guruhlash.',
        'Три способа посчитать длинную сумму: формула, телескопирование или '
        'группировка по парам.'),
 items=[

 I('formula', T('Asosiy yigʻindilar', 'Основные суммы'),
   T('$1+2+\\cdots+n=\\dfrac{n(n+1)}{2}$; '
     '$\;1+3+5+\\cdots+(2n-1)=n^2$; '
     '$\;1^2+2^2+\\cdots+n^2=\\dfrac{n(n+1)(2n+1)}{6}$.',
     '$1+2+\\cdots+n=\\dfrac{n(n+1)}{2}$; '
     '$\;1+3+5+\\cdots+(2n-1)=n^2$; '
     '$\;1^2+2^2+\\cdots+n^2=\\dfrac{n(n+1)(2n+1)}{6}$.'),
   T('Toq sonlar yigʻindisi $n^2$ ekanini bilish '
     '$\\dfrac{45}{1+3+5+\\cdots+(2n-1)}=\\dfrac{45}{n^2}$ deb yozish '
     'imkonini beradi (16-masala).',
     'Зная, что сумма нечётных равна $n^2$, можно записать '
     '$\\dfrac{45}{1+3+\\cdots+(2n-1)}=\\dfrac{45}{n^2}$ (задача 16).')),

 I('usul', T('Juftlab guruhlash', 'Группировка по парам'),
   T('Ishorasi almashib turadigan yigʻindini qoʻshni hadlarni juftlab '
     'guruhlab hisoblang: har bir juft bir xil son beradi.',
     'Знакочередующуюся сумму считайте, группируя соседние члены попарно: '
     'каждая пара даёт одно и то же число.'),
   T('$1-3+5-7+\\cdots-2027$: har bir juft $-2$ beradi, juftlar soni '
     '$507$, demak yigʻindi $-1014$ (15-masala).',
     '$1-3+5-7+\\cdots-2027$: каждая пара даёт $-2$, пар $507$, значит сумма '
     'равна $-1014$ (задача 15).')),

 I('usul', T('Teleskopik yigʻindi', 'Телескопическая сумма'),
   T('Har bir hadni $f(k+1)-f(k)$ koʻrinishida yozing — qoʻshnilar '
     'qisqaradi. Masalan '
     '$\\dfrac1{k(k+1)}=\\dfrac1k-\\dfrac1{k+1}$.',
     'Запишите каждое слагаемое как $f(k+1)-f(k)$ — соседние сократятся. '
     'Например, $\\dfrac1{k(k+1)}=\\dfrac1k-\\dfrac1{k+1}$.'),
   T('$\\sum_{k=1}^{99}\\dfrac1{k(k+1)}=1-\\dfrac1{100}=\\dfrac{99}{100}$.',
     '$\\sum_{k=1}^{99}\\dfrac1{k(k+1)}=1-\\dfrac1{100}=\\dfrac{99}{100}$.')),

 I('usul', T('Arifmetik-geometrik yigʻindi',
             'Арифметико-геометрическая сумма'),
   T('$\\sum k\\,q^k$ turidagi yigʻindini $q$ ga koʻpaytirib ayiring — '
     'oddiy geometrik progressiya qoladi.',
     'Сумму вида $\\sum k\\,q^k$ умножьте на $q$ и вычтите — останется '
     'обычная геометрическая прогрессия.'),
   T('$S=1+4\\cdot2+7\\cdot2^2+\\cdots+67\\cdot2^{22}$ da hadlar '
     '$(3k+1)2^k$ koʻrinishida; $2S-S$ ayirmasi yigʻindini yopiq '
     'koʻrinishga keltiradi (17-masala).',
     'В сумме $S=1+4\\cdot2+7\\cdot2^2+\\cdots+67\\cdot2^{22}$ слагаемые '
     'имеют вид $(3k+1)2^k$; разность $2S-S$ даёт замкнутую форму '
     '(задача 17).')),

 I('usul', T('Faktorialli teleskop', 'Телескоп с факториалами'),
   T('$(k^2+1)k!$ kabi hadlarni $f(k+1)-f(k)$ koʻrinishida izlang: '
     '$\\sum_{i=1}^{k}(i^2+1)i!=k\\,(k+1)!$.',
     'Слагаемые вида $(k^2+1)k!$ ищите в форме $f(k+1)-f(k)$: '
     '$\\sum_{i=1}^{k}(i^2+1)i!=k\\,(k+1)!$.'),
   T('Bu ayniyat $k=1,2,3$ da tekshiriladi va induksiya bilan isbotlanadi; '
     'u 27-masalaning butun mohiyati.',
     'Тождество проверяется при $k=1,2,3$ и доказывается индукцией; в нём вся '
     'суть задачи 27.'),
   T('$k(k+1)!-(k-1)k!=k!\\,\\big(k(k+1)-(k-1)\\big)=k!\\,(k^2+1)$.',
     '$k(k+1)!-(k-1)k!=k!\\,\\big(k(k+1)-(k-1)\\big)=k!\\,(k^2+1)$.')),
]))

# ====================================== D · Rekurrent ketma-ketlik va davriylik ==
BOLIMLAR.append(dict(kod='D', hue='comb',
 nom=T('Rekurrent ketma-ketlik va davriylik',
       'Рекуррентные последовательности и периодичность'),
 izoh=T('“$x_{2025}$ ni toping” degan savol deyarli har doim davriylik '
        'haqida: dastlabki bir necha hadni yozib chiqish yetarli.',
        'Вопрос «найдите $x_{2025}$» почти всегда про период: достаточно '
        'выписать несколько первых членов.'),
 items=[

 I('usul', T('Dastlabki hadlarni yozib chiqish', 'Выписать первые члены'),
   T('Rekurrent qoida berilgan boʻlsa, $5$–$8$ ta hadni hisoblang. Agar '
     'takrorlanish paydo boʻlsa, ketma-ketlik <b>davriy</b> — keyingisi '
     'qoldiq boʻyicha topiladi.',
     'Если задано рекуррентное правило, посчитайте $5$–$8$ членов. Если '
     'появилось повторение, последовательность <b>периодическая</b> — дальше '
     'всё определяется остатком.'),
   T('$x_n=\\dfrac{x_{n-1}+1}{x_{n-2}}$ uchun davr $5$ ga teng: '
     '$x_6=x_1$ va $x_7=x_2$. Demak $x_{2025}$ ni topish uchun '
     '$2024\\bmod5$ ni hisoblash kifoya (23-masala).',
     'Для $x_n=\\dfrac{x_{n-1}+1}{x_{n-2}}$ период равен $5$: $x_6=x_1$, '
     '$x_7=x_2$. Поэтому для $x_{2025}$ достаточно посчитать '
     '$2024\\bmod5$ (задача 23).')),

 I('usul', T('Davriylik va qoldiq', 'Период и остаток'),
   T('Davr $T$ boʻlsa, $a_n$ faqat $n$ ning $T$ ga boʻlgandagi qoldigʻiga '
     'bogʻliq. Indeksni $1$ dan sanashni unutmang: '
     '$a_n=a_{((n-1)\\bmod T)+1}$.',
     'Если период равен $T$, то $a_n$ зависит только от остатка $n$ по '
     'модулю $T$. Не забывайте, что нумерация с $1$: '
     '$a_n=a_{((n-1)\\bmod T)+1}$.'),
   T('$1,2,3,4,5,6,7,6,5,4,3,2$ davri $12$; $2024\\bmod12=8$, demak '
     '$2025$-had $9$-hadga teng, yaʼni $5$ (14-masala).',
     'У последовательности $1,2,3,4,5,6,7,6,5,4,3,2$ период $12$; '
     '$2024\\bmod12=8$, значит $2025$-й член равен $9$-му, то есть $5$ '
     '(задача 14).')),

 I('usul', T('Rekursiya va boʻlinish', 'Рекурсия и делимость'),
   T('Rekurrent qoidani <b>modul boʻyicha</b> yozing: katta sonlarni '
     'hisoblash shart emas.',
     'Записывайте рекуррентное правило <b>по модулю</b>: большие числа '
     'считать не нужно.'),
   T('$a_n=1000a_{n-1}+n$ va $1000\\equiv1\\pmod{111}$ boʻlgani uchun '
     '$a_n\\equiv a_{n-1}+n$, demak '
     '$a_n\\equiv\\dfrac{n(n+1)}{2}-10\\pmod{111}$ (24-masala).',
     'Так как $a_n=1000a_{n-1}+n$ и $1000\\equiv1\\pmod{111}$, получаем '
     '$a_n\\equiv a_{n-1}+n$, то есть '
     '$a_n\\equiv\\dfrac{n(n+1)}{2}-10\\pmod{111}$ (задача 24).')),

 I('formula', T('Fibonachchi va shunga oʻxshash qoidalar',
                'Фибоначчи и похожие правила'),
   T('$F_1=F_2=1$, $F_n=F_{n-1}+F_{n-2}$. Sanash masalalarida shu '
     'ketma-ketlik juda tez-tez chiqadi.',
     '$F_1=F_2=1$, $F_n=F_{n-1}+F_{n-2}$. В задачах на подсчёт эта '
     'последовательность возникает очень часто.'),
   T('$a_1=1$, $a_2=2$ va $a_n=a_{n-1}+a_{n-2}$ boʻlsa, '
     '$a_{10}=89$ — bu Fibonachchi sonlarining siljigan nusxasi.',
     'Если $a_1=1$, $a_2=2$ и $a_n=a_{n-1}+a_{n-2}$, то $a_{10}=89$ — это '
     'сдвинутая копия чисел Фибоначчи.')),
]))

# ============================================= E · Raqamli ketma-ketliklar ==
BOLIMLAR.append(dict(kod='E', hue='trig',
 nom=T('Raqamli ketma-ketliklar', 'Цифровые последовательности'),
 izoh=T('“$2025$-oʻrindagi raqamni toping” turidagi savol: bloklarni sanab, '
        'kerakli blokni topish kerak.',
        'Задача «найдите цифру на $2025$-м месте»: нужно посчитать блоки и '
        'найти нужный.'),
 items=[

 I('usul', T('Bloklab sanash', 'Подсчёт по блокам'),
   T('Ketma-ketlikni <b>bloklarga</b> ajrating va har bir blok nechta '
     '<b>raqam</b> berishini yozing. Soʻngra yigʻindini oʻrin nomeriga '
     'yetguncha qoʻshib boring.',
     'Разбейте последовательность на <b>блоки</b> и запишите, сколько '
     '<b>цифр</b> даёт каждый блок. Затем накапливайте сумму, пока не '
     'дойдёте до нужного места.'),
   T('$k$ soni $k+1$ marta yozilsa, blok $(k+1)\\cdot\\ell(k)$ ta raqam '
     'beradi, bunda $\\ell(k)$ — $k$ dagi raqamlar soni. $k\\ge10$ dan '
     'boshlab $\\ell(k)=2$ boʻlishini unutmang (18-masala).',
     'Если число $k$ выписано $k+1$ раз, блок даёт $(k+1)\\cdot\\ell(k)$ '
     'цифр, где $\\ell(k)$ — количество цифр в $k$. Начиная с $k\\ge10$, '
     '$\\ell(k)=2$ (задача 18).')),

 I('usul', T('Sonlar emas, raqamlar sanaladi', 'Считаем цифры, а не числа'),
   T('Eng koʻp uchraydigan xato — sonlarni sanab, raqamlarni sanaganday '
     'javob berish. Har doim savolda “raqam” yoki “son” soʻralganini '
     'tekshiring.',
     'Самая частая ошибка — посчитать числа, а ответить так, будто считали '
     'цифры. Всегда проверяйте, что спрашивают: «цифру» или «число».'),
   T('$11222333344444\\ldots$ ketma-ketligida $2025$-oʻrinda $45$ sonining '
     'birinchi raqami turadi — javob $4$, $45$ emas.',
     'В последовательности $11222333344444\\ldots$ на $2025$-м месте стоит '
     'первая цифра числа $45$ — ответ $4$, а не $45$.')),

 I('usul', T('Oxirgi raqamni topish', 'Поиск последней цифры'),
   T('Uzun yigʻindining oxirgi raqami kerak boʻlsa, hammasini modul $10$ '
     'boʻyicha hisoblang; darajalarning oxirgi raqami davriy.',
     'Если нужна последняя цифра длинной суммы, считайте всё по модулю $10$; '
     'последние цифры степеней периодичны.'),
   T('$2$ ning darajalari $2,4,8,6$ davrini takrorlaydi — shuning uchun '
     '$\\sum(3k+1)2^k$ ning oxirgi raqami ham davriy hisob bilan topiladi '
     '(17-masala).',
     'Степени $2$ дают период $2,4,8,6$ — поэтому последняя цифра суммы '
     '$\\sum(3k+1)2^k$ находится тем же периодическим счётом (задача 17).')),
]))

# ================================================ F · Progressiya va boshqalar ==
BOLIMLAR.append(dict(kod='F', hue='alg',
 nom=T('Progressiya boshqa mavzular bilan', 'Прогрессия вместе с другими темами'),
 izoh=T('Variantda progressiya kamdan-kam yolgʻiz keladi: u geometriya, '
        'tenglama yoki sonlar nazariyasi bilan birga ishlaydi.',
        'В варианте прогрессия редко приходит одна: она работает вместе с '
        'геометрией, уравнением или теорией чисел.'),
 items=[

 I('usul', T('Progressiya va tenglama', 'Прогрессия и уравнение'),
   T('Hadlarni $a_1$ va $d$ (yoki $b_1$ va $q$) orqali yozib, shartlarni '
     'tenglamaga aylantiring — qolgani oddiy algebra.',
     'Выразите члены через $a_1$ и $d$ (или $b_1$ и $q$) и превратите '
     'условия в уравнения — дальше обычная алгебра.'),
   T('$x$, $2$, $x+2y$, $4$ arifmetik progressiya boʻlsa, ayirmalar teng: '
     '$2-x=(x+2y)-2=4-(x+2y)$ — sistemadan $x=y=1$ (11-masala).',
     'Если $x$, $2$, $x+2y$, $4$ — арифметическая прогрессия, разности '
     'равны: $2-x=(x+2y)-2=4-(x+2y)$ — из системы $x=y=1$ (задача 11).')),

 I('usul', T('Progressiya va nisbat', 'Прогрессия и отношение'),
   T('$\\dfrac ab=\\dfrac bc=\\dfrac cd$ shartidagi sonlar geometrik '
     'progressiya tashkil qiladi — ularni $a$, $aq$, $aq^2$, $aq^3$ deb '
     'yozing.',
     'Числа с условием $\\dfrac ab=\\dfrac bc=\\dfrac cd$ образуют '
     'геометрическую прогрессию — запишите их как $a$, $aq$, $aq^2$, '
     '$aq^3$.'),
   T('Bu almashtirish “$b^3+c^3$ ni toping” turidagi savolni ikki '
     'nomaʼlumli oddiy masalaga aylantiradi.',
     'Такая замена превращает вопрос «найдите $b^3+c^3$» в простую задачу с '
     'двумя неизвестными.')),

 I('usul', T('Yigʻindi orqali tenglama', 'Уравнение через сумму'),
   T('Ikkala tomonda uzun yigʻindi boʻlsa, ikkalasini ham yopiq formulaga '
     'keltiring — shundan keyin tenglama bir necha qatorda yechiladi.',
     'Если в обеих частях длинные суммы, приведите обе к замкнутой форме — '
     'после этого уравнение решается в несколько строк.'),
   T('$\\dfrac{n-1}{n^2}+\\dfrac{n-2}{n^2}+\\cdots+\\dfrac1{n^2}='
     '\\dfrac{n(n-1)}{2n^2}=\\dfrac{n-1}{2n}$ — chap tomon shu qadar '
     'soddalashadi (16-masala).',
     '$\\dfrac{n-1}{n^2}+\\cdots+\\dfrac1{n^2}=\\dfrac{n-1}{2n}$ — настолько '
     'упрощается левая часть (задача 16).')),

 I('usul', T('Kasrni qisqartirish va oʻzaro tublik',
             'Сокращение дроби и взаимная простота'),
   T('Javob $\\dfrac mn$ koʻrinishida soʻralsa, kasrni albatta '
     'qisqartiring: $\\gcd$ ni topish koʻpincha bitta qatorlik ish.',
     'Если ответ просят в виде $\\dfrac mn$, обязательно сократите дробь: '
     'найти $\\gcd$ обычно дело одной строки.'),
   T('$\\dfrac{2025^2+1}{2025\\cdot2026}$ da $\\gcd(2025^2+1,2025)=1$ va '
     '$2025\\equiv-1\\pmod{2026}$ boʻlgani uchun '
     '$2025^2+1\\equiv2$, demak faqat $2$ ga qisqaradi (22-masala).',
     'В дроби $\\dfrac{2025^2+1}{2025\\cdot2026}$ имеем '
     '$\\gcd(2025^2+1,2025)=1$, а так как $2025\\equiv-1\\pmod{2026}$, то '
     '$2025^2+1\\equiv2$ — сокращается только на $2$ (задача 22).')),
]))


# ================================================================ Masalalar ==
def P(savol, javob, yechim, bolim, manba='', rasm=None):
    return dict(savol=savol, javob=javob, yechim=yechim, bolim=bolim,
                manba=manba, rasm=rasm)


DARAJALAR = [
 dict(kod='oson', nom=T('Oson', 'Лёгкие'), hue='easy',
  izoh=T('Bitta formula.', 'Одна формула.'),
  items=[

  P(T('Arifmetik progressiyada $a_1=5$ va $d=3$. $a_{10}$ ni toping.',
      'В арифметической прогрессии $a_1=5$ и $d=3$. Найдите $a_{10}$.'),
    T('$32$', '$32$'),
    T('$a_{10}=a_1+9d=5+27=32$.', '$a_{10}=a_1+9d=5+27=32$.'), 'A'),

  P(T('Geometrik progressiyada $b_1=3$ va $q=2$. $b_5$ ni toping.',
      'В геометрической прогрессии $b_1=3$ и $q=2$. Найдите $b_5$.'),
    T('$48$', '$48$'),
    T('$b_5=b_1q^4=3\\cdot16=48$.', '$b_5=b_1q^4=3\\cdot16=48$.'), 'B'),

  P(T('$1+2+3+\\cdots+100$ yigʻindini hisoblang.',
      'Вычислите сумму $1+2+3+\\cdots+100$.'),
    T('$5050$', '$5050$'),
    T('$\\dfrac{100\\cdot101}{2}=5050$.', '$\\dfrac{100\\cdot101}{2}=5050$.'),
    'C'),

  P(T('Dastlabki $20$ ta toq natural sonning yigʻindisini toping.',
      'Найдите сумму первых $20$ нечётных натуральных чисел.'),
    T('$400$', '$400$'),
    T('$1+3+\\cdots+(2n-1)=n^2$, demak $20^2=400$.',
      '$1+3+\\cdots+(2n-1)=n^2$, значит $20^2=400$.'), 'C'),

  P(T('$1+\\dfrac13+\\dfrac19+\\dfrac1{27}+\\cdots$ cheksiz yigʻindini '
      'toping.',
      'Найдите сумму бесконечного ряда '
      '$1+\\dfrac13+\\dfrac19+\\dfrac1{27}+\\cdots$'),
    T('$\\dfrac32$', '$\\dfrac32$'),
    T('$|q|=\\dfrac13<1$, demak '
      '$S=\\dfrac{b_1}{1-q}=\\dfrac{1}{1-\\frac13}=\\dfrac32$.',
      '$|q|=\\dfrac13<1$, поэтому $S=\\dfrac{1}{1-\\frac13}=\\dfrac32$.'),
    'B'),

  P(T('$a_1=1$, $a_2=2$ va $a_n=a_{n-1}+a_{n-2}$ boʻlsa, $a_{10}$ ni toping.',
      'Пусть $a_1=1$, $a_2=2$ и $a_n=a_{n-1}+a_{n-2}$. Найдите $a_{10}$.'),
    T('$89$', '$89$'),
    T('Hadlarni yozib chiqamiz: '
      '$1,2,3,5,8,13,21,34,55,89$ — demak $a_{10}=89$.',
      'Выпишем члены: $1,2,3,5,8,13,21,34,55,89$ — значит $a_{10}=89$.'),
    'D'),

  P(T('Arifmetik progressiyada $a_3=7$ va $a_7=19$. Ayirmani toping.',
      'В арифметической прогрессии $a_3=7$ и $a_7=19$. Найдите разность.'),
    T('$d=3$', '$d=3$'),
    T('$a_7-a_3=4d=12$, demak $d=3$.',
      '$a_7-a_3=4d=12$, значит $d=3$.'), 'A'),
 ]),

 dict(kod='orta', nom=T('Oʻrtacha', 'Средние'), hue='med',
  izoh=T('Ikkita tenglama tuzish kerak. Yettitasi ham haqiqiy variantlardan.',
         'Нужно составить два уравнения. Все семь — из настоящих вариантов.'),
  items=[

  P(T('Arifmetik progressiyaning dastlabki toʻrtta hadi yigʻindisi $30$ ga '
      'teng va $a_9-a_5=12$. Agar $a_n=93$ boʻlsa, $n$ nimaga teng?',
      'Сумма первых четырёх членов арифметической прогрессии равна $30$ и '
      '$a_9-a_5=12$. Чему равно $n$, если $a_n=93$?'),
    T('$n=31$', '$n=31$'),
    T('$a_9-a_5=4d=12$, demak $d=3$.<br>'
      'Dastlabki toʻrtta had yigʻindisi: $4a_1+6d=30$, yaʼni '
      '$4a_1=30-18=12$ va $a_1=3$.<br>'
      '$a_n=3+3(n-1)=3n$, demak $3n=93$ va $n=31$.',
      '$a_9-a_5=4d=12$, значит $d=3$.<br>'
      'Сумма первых четырёх: $4a_1+6d=30$, откуда $a_1=3$.<br>'
      '$a_n=3n$, поэтому $3n=93$ и $n=31$.'),
    'A', '9-sinf · 2024 №10'),

  P(T('Geometrik progressiyaning birinchi, uchinchi va oʻn birinchi hadlari '
      'koʻpaytmasi $8$ ga teng boʻlsa, progressiyaning ikkinchi va '
      'sakkizinchi hadlari koʻpaytmasini toping.',
      'Произведение первого, третьего и одиннадцатого членов геометрической '
      'прогрессии равно $8$. Найдите произведение второго и восьмого членов.'),
    T('$4$', '$4$'),
    T('$b_1b_3b_{11}=b_1^3q^{0+2+10}=b_1^3q^{12}='
      '\\left(b_1q^4\\right)^3=b_5^3$.<br>'
      'Demak $b_5^3=8$ va $b_5=2$.<br>'
      '$b_2b_8=b_1q\\cdot b_1q^7=\\left(b_1q^4\\right)^2=b_5^2=4$.<br>'
      '<i>Kaliti:</i> indekslar yigʻindisi $1+3+11=15=3\\cdot5$ va '
      '$2+8=2\\cdot5$ — ikkalasi ham $b_5$ ga olib keladi.',
      '$b_1b_3b_{11}=\\left(b_1q^4\\right)^3=b_5^3=8$, значит $b_5=2$.<br>'
      '$b_2b_8=\\left(b_1q^4\\right)^2=b_5^2=4$.<br>'
      '<i>Ключ:</i> $1+3+11=3\\cdot5$ и $2+8=2\\cdot5$ — оба выражения '
      'сводятся к $b_5$.'),
    'B', '10-sinf · 2024 №7'),

  P(T('Arifmetik progressiyada $a_1+a_7=12$, $a_3\\cdot a_5=28$ boʻlsa, '
      '$a_3^2+a_5^2$ yigʻindini toping.',
      'В арифметической прогрессии $a_1+a_7=12$ и $a_3\\cdot a_5=28$. '
      'Найдите $a_3^2+a_5^2$.'),
    T('$88$', '$88$'),
    T('Indekslar yigʻindisi teng: $1+7=3+5$, demak '
      '$a_3+a_5=a_1+a_7=12$.<br>'
      '$a_3^2+a_5^2=\\left(a_3+a_5\\right)^2-2a_3a_5=144-56=88$.',
      'Суммы индексов равны: $1+7=3+5$, поэтому $a_3+a_5=12$.<br>'
      '$a_3^2+a_5^2=12^2-2\\cdot28=88$.'),
    'A', '10-sinf · 2024 №14'),

  P(T('$x$, $2$, $x+2y$ va $4$ sonlari arifmetik progressiyani tashkil '
      'qilsa, $x^2+y^2$ ning qiymatini toping.',
      'Числа $x$, $2$, $x+2y$ и $4$ образуют арифметическую прогрессию. '
      'Найдите $x^2+y^2$.'),
    T('$2$', '$2$'),
    T('Ketma-ket ayirmalar teng:<br>'
      '$2-x=(x+2y)-2$ va $(x+2y)-2=4-(x+2y)$.<br>'
      'Ikkinchisidan $2(x+2y)=6$, yaʼni $x+2y=3$.<br>'
      'Birinchisidan $2-x=3-2=1$, demak $x=1$ va $y=1$.<br>'
      'Progressiya $1,2,3,4$ ✓, javob $x^2+y^2=2$.',
      'Разности равны: $2-x=(x+2y)-2$ и $(x+2y)-2=4-(x+2y)$.<br>'
      'Из второго $x+2y=3$; из первого $2-x=1$, то есть $x=1$ и $y=1$.<br>'
      'Прогрессия $1,2,3,4$ ✓, ответ $x^2+y^2=2$.'),
    'F', '10-sinf · 2025/26-A №3'),

  P(T('Oʻsuvchi arifmetik progressiyaning dastlabki $10$ ta hadining '
      'yigʻindisi $140$ ga teng boʻlib, ikkinchi va toʻqqizinchi hadlari '
      'koʻpaytmasi $147$ ga teng boʻlsa, uchinchi hadni toping.',
      'Сумма первых $10$ членов возрастающей арифметической прогрессии '
      'равна $140$, а произведение второго и девятого членов равно $147$. '
      'Найдите третий член.'),
    T('$9$', '$9$'),
    T('$S_{10}=\\dfrac{a_2+a_9}{2}\\cdot10=140$ (chunki '
      '$a_1+a_{10}=a_2+a_9$), demak $a_2+a_9=28$.<br>'
      'Koʻpaytmasi $147$, shuning uchun $a_2$ va $a_9$ — '
      '$t^2-28t+147=0$ tenglamaning ildizlari: $t=7$ va $t=21$.<br>'
      'Progressiya oʻsuvchi, demak $a_2=7$, $a_9=21$ va '
      '$7d=14$, $d=2$.<br>'
      '$a_3=a_2+d=9$.',
      '$S_{10}=\\dfrac{a_2+a_9}{2}\\cdot10=140$, значит $a_2+a_9=28$.<br>'
      'Вместе с произведением $147$ получаем корни $t^2-28t+147=0$: $7$ и '
      '$21$.<br>'
      'Прогрессия возрастающая, поэтому $a_2=7$, $a_9=21$, $d=2$ и '
      '$a_3=9$.'),
    'A', '10-sinf · 2025/26-A №13'),

  P(T('$a_1$, $a_2$, $a_3$, $\\ldots$, $a_n$ arifmetik progressiya uchun '
      '$a_5+a_8+a_{11}=12$ va $a_7+a_{10}+a_{13}=18$ shartlar oʻrinli. Agar '
      '$a_k=5$ boʻlsa, $k$ ning qiymatini toping.',
      'Для арифметической прогрессии выполняется $a_5+a_8+a_{11}=12$ и '
      '$a_7+a_{10}+a_{13}=18$. Найдите $k$, если $a_k=5$.'),
    T('$k=9$', '$k=9$'),
    T('$5+11=2\\cdot8$, demak $a_5+a_8+a_{11}=3a_8=12$ va $a_8=4$.<br>'
      'Xuddi shunday $a_7+a_{10}+a_{13}=3a_{10}=18$, demak '
      '$a_{10}=6$.<br>'
      '$a_{10}-a_8=2d=2$, yaʼni $d=1$.<br>'
      '$a_k=5=a_8+1=a_9$, demak $k=9$.',
      '$5+11=2\\cdot8$, поэтому $3a_8=12$ и $a_8=4$.<br>'
      'Аналогично $3a_{10}=18$, то есть $a_{10}=6$.<br>'
      'Из $a_{10}-a_8=2d$ получаем $d=1$, значит $5=a_9$ и $k=9$.'),
    'A', '11-sinf · 2025/26-A №6'),

  P(T('Berilgan ketma-ketlik $1,2,3,4,5,6,7,6,5,4,3,2,1,2,3,\\ldots$ '
      'koʻrinishda boʻlib, cheksiz marta $1$ dan $7$ gacha oʻsib, $7$ dan '
      '$1$ gacha kamayadi. Ushbu ketma-ketlikning $2025$-hadini toping.',
      'Последовательность $1,2,3,4,5,6,7,6,5,4,3,2,1,2,3,\\ldots$ '
      'бесконечно возрастает от $1$ до $7$ и убывает от $7$ до $1$. Найдите '
      'её $2025$-й член.'),
    T('$5$', '$5$'),
    T('Davr: $1,2,3,4,5,6,7,6,5,4,3,2$ — uzunligi $12$ (keyin yana $1$ '
      'bilan boshlanadi).<br>'
      '$2025-1=2024$ va $2024=12\\cdot168+8$, demak $2025$-had davrning '
      '$9$-hadi.<br>'
      'Davrning $9$-hadi $5$ ga teng.',
      'Период: $1,2,3,4,5,6,7,6,5,4,3,2$ длины $12$.<br>'
      '$2024=12\\cdot168+8$, поэтому $2025$-й член — это $9$-й член '
      'периода.<br>'
      'Девятый член периода равен $5$.'),
    'D', '9-sinf · 2025/26-B №5'),
 ]),
]

DARAJALAR += [
 dict(kod='qiyin', nom=T('Qiyin', 'Трудные'), hue='hard',
  izoh=T('Yigʻindini yopiq koʻrinishga keltirish yoki davrni topish kerak.',
         'Нужно привести сумму к замкнутому виду или найти период.'),
  items=[

  P(T('Hisoblang: '
      '$\\dfrac{1-3+5-7+9-\\cdots-2027}{1-2+3-4+5-\\cdots-2028}$',
      'Вычислите: '
      '$\\dfrac{1-3+5-7+9-\\cdots-2027}{1-2+3-4+5-\\cdots-2028}$'),
    T('$1$', '$1$'),
    T('<b>Surat.</b> Hadlar $1,3,5,\\ldots,2027$ — toq sonlar, ularning '
      'soni $\\dfrac{2027+1}{2}=1014$ ta.<br>'
      'Juftlab guruhlaymiz: $(1-3)+(5-7)+\\cdots=(-2)\\cdot507=-1014$.<br>'
      '<b>Maxraj.</b> Hadlar $1,2,\\ldots,2028$ — $2028$ ta, juftlab '
      'guruhlansa $(1-2)+(3-4)+\\cdots=(-1)\\cdot1014=-1014$.<br>'
      'Nisbat: $\\dfrac{-1014}{-1014}=1$.',
      '<b>Числитель.</b> Слагаемые $1,3,\\ldots,2027$ — их $1014$; попарно '
      '$(1-3)+(5-7)+\\cdots=(-2)\\cdot507=-1014$.<br>'
      '<b>Знаменатель.</b> Слагаемых $2028$; попарно '
      '$(-1)\\cdot1014=-1014$.<br>'
      'Отношение равно $1$.'),
    'C', '9-sinf · 2025/26-A №1'),

  P(T('Quyidagi shartni qanoatlantiruvchi barcha musbat butun $n$ sonlarning '
      'yigʻindisini toping: '
      '$$\\frac{n-1}{n^2}+\\frac{n-2}{n^2}+\\cdots+\\frac{1}{n^2}='
      '\\frac{45}{1+3+5+\\cdots+(2n-1)}$$',
      'Найдите сумму всех натуральных $n$, удовлетворяющих условию: '
      '$$\\frac{n-1}{n^2}+\\frac{n-2}{n^2}+\\cdots+\\frac{1}{n^2}='
      '\\frac{45}{1+3+5+\\cdots+(2n-1)}$$'),
    T('$n=10$', '$n=10$'),
    T('<b>Chap tomon.</b> Suratlar $1+2+\\cdots+(n-1)='
      '\\dfrac{n(n-1)}{2}$, demak chap tomon '
      '$\\dfrac{n(n-1)}{2n^2}=\\dfrac{n-1}{2n}$.<br>'
      '<b>Oʻng tomon.</b> $1+3+\\cdots+(2n-1)=n^2$, demak oʻng tomon '
      '$\\dfrac{45}{n^2}$.<br>'
      'Tenglama: $\\dfrac{n-1}{2n}=\\dfrac{45}{n^2}$, bundan '
      '$n(n-1)=90$.<br>'
      '$n^2-n-90=0$, ildizlari $n=10$ va $n=-9$; musbat butun yechim '
      '$n=10$.',
      '<b>Левая часть.</b> Числители дают $\\dfrac{n(n-1)}{2}$, поэтому она '
      'равна $\\dfrac{n-1}{2n}$.<br>'
      '<b>Правая часть.</b> $1+3+\\cdots+(2n-1)=n^2$, то есть '
      '$\\dfrac{45}{n^2}$.<br>'
      'Из $\\dfrac{n-1}{2n}=\\dfrac{45}{n^2}$ следует $n(n-1)=90$, откуда '
      '$n=10$.'),
    'C', '9-sinf · 2025/26-A №14'),

  P(T('Berilgan yigʻindining oxirgi raqamini toping: '
      '$$1+4\\times2+7\\times2^2+10\\times2^3+\\cdots+67\\times2^{22}$$',
      'Найдите последнюю цифру суммы: '
      '$$1+4\\times2+7\\times2^2+10\\times2^3+\\cdots+67\\times2^{22}$$'),
    T('$7$', '$7$'),
    T('Hadlar $(3k+1)2^k$ koʻrinishida, $k=0,1,\\ldots,22$.<br>'
      '<b>Yopiq koʻrinish.</b> '
      '$S=3\\sum_{k=0}^{22}k2^k+\\sum_{k=0}^{22}2^k$.<br>'
      '$\\sum_{k=0}^{n}2^k=2^{n+1}-1$ va '
      '$\\sum_{k=0}^{n}k2^k=(n-1)2^{n+1}+2$.<br>'
      '$n=22$ da: $S=3\\big(21\\cdot2^{23}+2\\big)+2^{23}-1='
      '64\\cdot2^{23}+5=2^{29}+5$.<br>'
      '<b>Oxirgi raqam.</b> $2$ ning darajalari $2,4,8,6$ davrini '
      'takrorlaydi; $29\\equiv1\\pmod4$, demak $2^{29}$ ning oxirgi raqami '
      '$2$.<br>'
      'Javob: $2+5=7$.',
      'Слагаемые имеют вид $(3k+1)2^k$, $k=0,\\ldots,22$.<br>'
      '$S=3\\sum k2^k+\\sum 2^k$, где $\\sum_{k=0}^{n}2^k=2^{n+1}-1$ и '
      '$\\sum_{k=0}^{n}k2^k=(n-1)2^{n+1}+2$.<br>'
      'При $n=22$: $S=2^{29}+5$.<br>'
      'Последние цифры степеней $2$ дают период $2,4,8,6$; '
      '$29\\equiv1\\pmod4$, поэтому последняя цифра $2^{29}$ равна $2$.<br>'
      'Ответ: $2+5=7$.'),
    'E', '9-sinf · 2025/26-A №22'),

  P(T('$11222333344444\\ldots$ ushbu ketma-ketlikda $2$ ta $1$, $3$ ta $2$, '
      '$\\ldots$, $n+1$ ta $n$ soni bitta qatorda yozilgan. '
      'Ketma-ketlikdagi $2025$-oʻrindagi raqamni toping.',
      'В последовательности $11222333344444\\ldots$ подряд выписаны $2$ '
      'единицы, $3$ двойки, …, $n+1$ чисел $n$. Найдите цифру, стоящую на '
      '$2025$-м месте.'),
    T('$4$', '$4$'),
    T('<b>Bloklarni sanaymiz.</b> $k$ soni $k+1$ marta yoziladi va uning '
      'oʻzi $\\ell(k)$ ta raqamdan iborat, demak blok '
      '$(k+1)\\ell(k)$ ta raqam beradi.<br>'
      '$k=1,\\ldots,9$ uchun: $\\sum_{k=1}^{9}(k+1)=2+3+\\cdots+10=54$ ta '
      'raqam.<br>'
      '$k\\ge10$ uchun $\\ell(k)=2$, demak blok $2(k+1)$ ta raqam beradi. '
      '$k=10$ dan $k=44$ gacha: '
      '$2\\sum_{k=10}^{44}(k+1)=2\\cdot\\dfrac{(11+45)\\cdot35}{2}=1960$.<br>'
      'Shu yergacha $54+1960=2014$ ta raqam yozildi.<br>'
      '<b>Keyingi blok.</b> $k=45$: $46$ marta “$45$” yoziladi, yaʼni '
      '$92$ ta raqam — $2015$-oʻrindan $2106$-oʻringacha.<br>'
      '$2025$-oʻrin shu blokda: $2025-2014=11$-raqam. Blok '
      '$4545\\ldots$ koʻrinishida, toq oʻrinlarda $4$, juft oʻrinlarda '
      '$5$. $11$ toq, demak javob $4$.',
      '<b>Считаем блоки.</b> Число $k$ выписано $k+1$ раз и само состоит из '
      '$\\ell(k)$ цифр, то есть блок даёт $(k+1)\\ell(k)$ цифр.<br>'
      'Для $k=1,\\ldots,9$: $2+3+\\cdots+10=54$ цифры.<br>'
      'Для $k=10,\\ldots,44$ (по две цифры): '
      '$2\\cdot(11+12+\\cdots+45)=1960$.<br>'
      'Итого до конца блока $k=44$ — $2014$ цифр.<br>'
      '<b>Следующий блок.</b> $k=45$ даёт $46\\cdot2=92$ цифры, места '
      '$2015$–$2106$.<br>'
      'Место $2025$ — это $11$-я цифра блока «$4545\\ldots$»; на нечётных '
      'местах стоит $4$, значит ответ $4$.'),
    'E', '10-sinf · 2025/26-A №25'),

  P(T('$k$ haqiqiy sonni toping bunda: $x^3-30x^2+kx-840=0$ tenglamaning '
      'ildizlari arifmetik progressiya tashkil qilsin.',
      'Найдите действительное $k$, при котором корни уравнения '
      '$x^3-30x^2+kx-840=0$ образуют арифметическую прогрессию.'),
    T('$k=284$', '$k=284$'),
    T('Ildizlarni $m-d$, $m$, $m+d$ deb olamiz.<br>'
      '<b>Yigʻindi.</b> Viyet boʻyicha $3m=30$, demak $m=10$.<br>'
      '<b>Koʻpaytma.</b> $(10-d)\\cdot10\\cdot(10+d)=840$, yaʼni '
      '$10\\left(100-d^2\\right)=840$ va $d^2=16$, $d=4$.<br>'
      'Ildizlar: $6$, $10$, $14$.<br>'
      '<b>$k$ — juft koʻpaytmalar yigʻindisi:</b> '
      '$6\\cdot10+10\\cdot14+6\\cdot14=60+140+84=284$.<br>'
      '<i>Tekshirish:</i> $6+10+14=30$ ✓, $6\\cdot10\\cdot14=840$ ✓',
      'Обозначим корни $m-d$, $m$, $m+d$.<br>'
      '<b>Сумма.</b> По Виету $3m=30$, значит $m=10$.<br>'
      '<b>Произведение.</b> $10(100-d^2)=840$, откуда $d=4$, корни $6$, '
      '$10$, $14$.<br>'
      '<b>$k$ — сумма попарных произведений:</b> $60+140+84=284$.<br>'
      '<i>Проверка:</i> $6+10+14=30$ ✓, $6\\cdot10\\cdot14=840$ ✓'),
    'A', '9-sinf · 2025/26-B №27'),

  P(T('Agar arifmetik progressiyaning uchinchi va toʻrtinchi hadlari mos '
      'ravishda $3$ va $8$ ga oshirilsa, progressiyaning birinchi toʻrtta '
      'hadi geometrik progressiyani tashkil qiladi. Arifmetik '
      'progressiyaning uchinchi hadini toping.',
      'Если третий и четвёртый члены арифметической прогрессии увеличить '
      'соответственно на $3$ и $8$, то первые четыре члена образуют '
      'геометрическую прогрессию. Найдите третий член арифметической '
      'прогрессии.'),
    T('$9$', '$9$'),
    T('Arifmetik progressiya: $a$, $a+d$, $a+2d$, $a+3d$.<br>'
      'Yangi toʻrtlik: $a$, $a+d$, $a+2d+3$, $a+3d+8$ — geometrik '
      'progressiya.<br>'
      '<b>Birinchi shart:</b> $(a+d)^2=a(a+2d+3)$, bundan '
      '$d^2=3a$.<br>'
      '<b>Ikkinchi shart:</b> $(a+2d+3)^2=(a+d)(a+3d+8)$.<br>'
      'Sistemani yechib, ikkita yechim topamiz: $a=27$, $d=-9$ va '
      '$a=3$, $d=-3$.<br>'
      'Ikkinchisida yangi ketma-ketlik $3,0,0,2$ boʻlib qoladi — geometrik '
      'progressiyada nol had boʻlmaydi, demak u yaroqsiz.<br>'
      'Birinchisida: arifmetik progressiya $27,18,9,0$, yangi toʻrtlik '
      '$27,18,12,8$ — haqiqatan geometrik ($q=\\tfrac23$) ✓<br>'
      'Uchinchi had: $a+2d=9$.',
      'Арифметическая прогрессия: $a$, $a+d$, $a+2d$, $a+3d$.<br>'
      'Новая четвёрка: $a$, $a+d$, $a+2d+3$, $a+3d+8$ — геометрическая.<br>'
      'Из $(a+d)^2=a(a+2d+3)$ получаем $d^2=3a$; вместе со вторым условием '
      'система даёт $a=27$, $d=-9$ и $a=3$, $d=-3$.<br>'
      'Во втором случае новая четвёрка $3,0,0,2$ — нулевых членов в '
      'геометрической прогрессии быть не может.<br>'
      'В первом: $27,18,9,0$ и $27,18,12,8$ с $q=\\tfrac23$ ✓<br>'
      'Третий член равен $a+2d=9$.'),
    'B', '11-sinf · 2025/26-A №20'),

  P(T('$\\sum_{k=1}^{99}\\dfrac1{k(k+1)}$ yigʻindini hisoblang.',
      'Вычислите сумму $\\sum_{k=1}^{99}\\dfrac1{k(k+1)}$.'),
    T('$\\dfrac{99}{100}$', '$\\dfrac{99}{100}$'),
    T('Har bir hadni ayirmaga ajratamiz: '
      '$\\dfrac1{k(k+1)}=\\dfrac1k-\\dfrac1{k+1}$.<br>'
      'Yigʻindi teleskopik: '
      '$\\left(1-\\tfrac12\\right)+\\left(\\tfrac12-\\tfrac13\\right)+'
      '\\cdots+\\left(\\tfrac1{99}-\\tfrac1{100}\\right)='
      '1-\\dfrac1{100}=\\dfrac{99}{100}$.',
      'Разложим каждое слагаемое: '
      '$\\dfrac1{k(k+1)}=\\dfrac1k-\\dfrac1{k+1}$.<br>'
      'Сумма телескопируется: $1-\\dfrac1{100}=\\dfrac{99}{100}$.'),
    'C'),
 ]),

 dict(kod='ancha', nom=T('Ancha qiyin', 'Потруднее'), hue='vhard',
  izoh=T('Ketma-ketlik boshqa mavzu bilan birga ishlaydi: boʻlinish, '
         'faktorial yoki oʻzaro tublik.',
         'Последовательность работает вместе с другой темой: делимость, '
         'факториал или взаимная простота.'),
  items=[

  P(T('$\\{a_k\\}$ va $\\{b_k\\}$ ketma-ketliklar uchun $a_k=(k^2+1)k!$ va '
      '$b_k=a_1+a_2+\\cdots+a_k$ boʻlsin. '
      '$\\dfrac{a_{2025}}{b_{2025}}=\\dfrac{m}{n}$ boʻlib $m$ va $n$ oʻzaro '
      'tub natural sonlar boʻlsa, $n-m$ ning qiymatini toping.',
      'Для последовательностей $a_k=(k^2+1)k!$ и '
      '$b_k=a_1+a_2+\\cdots+a_k$ известно, что '
      '$\\dfrac{a_{2025}}{b_{2025}}=\\dfrac{m}{n}$, где $m$ и $n$ взаимно '
      'просты. Найдите $n-m$.'),
    T('$1012$', '$1012$'),
    T('<b>Teleskop.</b> $k(k+1)!-(k-1)k!=k!\\big(k(k+1)-(k-1)\\big)='
      'k!\\left(k^2+1\\right)=a_k$.<br>'
      'Demak $b_k=\\sum_{i=1}^{k}a_i=k\\,(k+1)!$ (qisqarish natijasida).<br>'
      '<i>Tekshirish:</i> $b_1=2=1\\cdot2!$ ✓, $b_2=2+10=12=2\\cdot3!$ ✓<br>'
      '<b>Nisbat.</b> '
      '$\\dfrac{a_{2025}}{b_{2025}}='
      '\\dfrac{\\left(2025^2+1\\right)2025!}{2025\\cdot2026!}='
      '\\dfrac{2025^2+1}{2025\\cdot2026}$.<br>'
      '<b>Qisqartirish.</b> $\\gcd(2025^2+1,\\,2025)=1$. '
      '$2025\\equiv-1\\pmod{2026}$, demak '
      '$2025^2+1\\equiv2\\pmod{2026}$ — umumiy boʻluvchi faqat $2$.<br>'
      '$m=\\dfrac{2025^2+1}{2}=2\\,050\\,313$, '
      '$n=\\dfrac{2025\\cdot2026}{2}=2025\\cdot1013=2\\,051\\,325$.<br>'
      '$n-m=2\\,051\\,325-2\\,050\\,313=1012$.',
      '<b>Телескоп.</b> $k(k+1)!-(k-1)k!=k!\\left(k^2+1\\right)=a_k$, '
      'поэтому $b_k=k\\,(k+1)!$.<br>'
      '<i>Проверка:</i> $b_1=2=1\\cdot2!$ ✓, $b_2=12=2\\cdot3!$ ✓<br>'
      '<b>Отношение.</b> '
      '$\\dfrac{a_{2025}}{b_{2025}}=\\dfrac{2025^2+1}{2025\\cdot2026}$.<br>'
      '<b>Сокращение.</b> $\\gcd(2025^2+1,2025)=1$; так как '
      '$2025\\equiv-1\\pmod{2026}$, то $2025^2+1\\equiv2$ — общий делитель '
      'только $2$.<br>'
      '$m=2\\,050\\,313$, $n=2\\,051\\,325$ и $n-m=1012$.'),
    'F', '10-sinf · 2025/26-B №23'),

  P(T('$x_n$ ketma-ketlik uchun $x_1=20$, $x_2=101$ va ixtiyoriy $n>2$ uchun '
      '$x_n=\\dfrac{x_{n-1}+1}{x_{n-2}}$ shartlar oʻrinli. $x_{2025}$ ning '
      'qiymatini toping.',
      'Для последовательности $x_1=20$, $x_2=101$ и '
      '$x_n=\\dfrac{x_{n-1}+1}{x_{n-2}}$ при $n>2$. Найдите $x_{2025}$.'),
    T('$\\dfrac{21}{101}$', '$\\dfrac{21}{101}$'),
    T('<b>Dastlabki hadlarni yozamiz.</b><br>'
      '$x_3=\\dfrac{101+1}{20}=\\dfrac{51}{10}$;<br>'
      '$x_4=\\dfrac{\\frac{51}{10}+1}{101}=\\dfrac{61}{1010}$;<br>'
      '$x_5=\\dfrac{\\frac{61}{1010}+1}{\\frac{51}{10}}='
      '\\dfrac{1071}{1010}\\cdot\\dfrac{10}{51}=\\dfrac{21}{101}$;<br>'
      '$x_6=\\dfrac{\\frac{21}{101}+1}{\\frac{61}{1010}}='
      '\\dfrac{122}{101}\\cdot\\dfrac{1010}{61}=20=x_1$;<br>'
      '$x_7=\\dfrac{20+1}{\\frac{21}{101}}=101=x_2$.<br>'
      '<b>Demak davr $5$ ga teng.</b><br>'
      '$2025-1=2024$ va $2024=5\\cdot404+4$, demak $x_{2025}=x_5='
      '\\dfrac{21}{101}$.',
      '<b>Выпишем первые члены.</b><br>'
      '$x_3=\\dfrac{51}{10}$, $x_4=\\dfrac{61}{1010}$, '
      '$x_5=\\dfrac{21}{101}$, $x_6=20=x_1$, $x_7=101=x_2$.<br>'
      '<b>Значит период равен $5$.</b><br>'
      '$2024=5\\cdot404+4$, поэтому $x_{2025}=x_5=\\dfrac{21}{101}$.'),
    'D', '11-sinf · 2025/26-A №28'),

  P(T('$a_5=5$ va har bir $n\\ge6$ natural son uchun $a_n=1000a_{n-1}+n$ '
      'tenglik oʻrinli. $n\\ge6$ da $a_n$ soni $111$ ga boʻlinadigan $n$ '
      'natural sonlarning dastlabki ikkitasi yigʻindisining qiymatini '
      'toping.',
      'Известно, что $a_5=5$ и для каждого натурального $n\\ge6$ выполняется '
      '$a_n=1000a_{n-1}+n$. Найдите сумму двух наименьших натуральных '
      '$n\\ge6$, при которых $a_n$ делится на $111$.'),
    T('$221$', '$221$'),
    T('<b>Modulga oʻtamiz.</b> $1000=9\\cdot111+1$, demak '
      '$1000\\equiv1\\pmod{111}$ va rekursiya '
      '$a_n\\equiv a_{n-1}+n\\pmod{111}$ koʻrinishini oladi.<br>'
      '<b>Yopiq formula.</b> $a_5=5$ dan boshlab:<br>'
      '$a_n\\equiv5+(6+7+\\cdots+n)=5+\\left(\\dfrac{n(n+1)}{2}-15\\right)='
      '\\dfrac{n(n+1)}{2}-10\\pmod{111}$.<br>'
      '<b>Shart.</b> $\\dfrac{n(n+1)}{2}\\equiv10\\pmod{111}$, yaʼni '
      '$n(n+1)\\equiv20\\pmod{222}$.<br>'
      'Bu taqqoslamani yechib (yoki $n$ ni $6$ dan boshlab tekshirib), '
      'dastlabki ikkita yechim $n=106$ va $n=115$ ekanini topamiz.<br>'
      '<i>Tekshirish:</i> $106\\cdot107/2=5671=111\\cdot51+10$ ✓ va '
      '$115\\cdot116/2=6670=111\\cdot60+10$ ✓<br>'
      'Javob: $106+115=221$.',
      '<b>Переходим к модулю.</b> $1000\\equiv1\\pmod{111}$, поэтому '
      '$a_n\\equiv a_{n-1}+n$.<br>'
      '<b>Замкнутая форма.</b> '
      '$a_n\\equiv\\dfrac{n(n+1)}{2}-10\\pmod{111}$.<br>'
      '<b>Условие.</b> $\\dfrac{n(n+1)}{2}\\equiv10\\pmod{111}$, то есть '
      '$n(n+1)\\equiv20\\pmod{222}$.<br>'
      'Наименьшие решения: $n=106$ и $n=115$.<br>'
      '<i>Проверка:</i> $5671=111\\cdot51+10$ ✓ и $6670=111\\cdot60+10$ ✓<br>'
      'Ответ: $106+115=221$.'),
    'D', '9-sinf · 2025/26-B №26'),

  P(T('$S=1\\cdot2^1+2\\cdot2^2+3\\cdot2^3+\\cdots+10\\cdot2^{10}$ '
      'yigʻindini hisoblang.',
      'Вычислите сумму '
      '$S=1\\cdot2^1+2\\cdot2^2+3\\cdot2^3+\\cdots+10\\cdot2^{10}$.'),
    T('$18434$', '$18434$'),
    T('<b>Ikki baravar qilib ayiramiz.</b><br>'
      '$2S=1\\cdot2^2+2\\cdot2^3+\\cdots+10\\cdot2^{11}$.<br>'
      '$2S-S=10\\cdot2^{11}-\\left(2^1+2^2+\\cdots+2^{10}\\right)$.<br>'
      'Qavsdagi geometrik progressiya: $2^{11}-2=2046$.<br>'
      '$S=10\\cdot2048-2046=20480-2046=18434$.',
      '<b>Удвоим и вычтем.</b><br>'
      '$2S-S=10\\cdot2^{11}-\\left(2^1+\\cdots+2^{10}\\right)$.<br>'
      'В скобках $2^{11}-2=2046$, поэтому $S=20480-2046=18434$.'),
    'C'),

  P(T('$a_1=1$ va $a_{n+1}=\\dfrac{a_n}{1+a_n}$ boʻlsa, $a_{2025}$ ni '
      'toping.',
      'Пусть $a_1=1$ и $a_{n+1}=\\dfrac{a_n}{1+a_n}$. Найдите $a_{2025}$.'),
    T('$\\dfrac1{2025}$', '$\\dfrac1{2025}$'),
    T('<b>Teskarisiga oʻtamiz.</b> $b_n=\\dfrac1{a_n}$ deb olamiz. U '
      'holda<br>'
      '$b_{n+1}=\\dfrac{1+a_n}{a_n}=1+b_n$.<br>'
      'Demak $\\{b_n\\}$ — ayirmasi $1$ boʻlgan arifmetik progressiya, '
      '$b_1=1$, shuning uchun $b_n=n$.<br>'
      'Javob: $a_n=\\dfrac1n$, yaʼni $a_{2025}=\\dfrac1{2025}$.<br>'
      '<i>Tekshirish:</i> $a_2=\\dfrac{1}{2}$ ✓, '
      '$a_3=\\dfrac{1/2}{3/2}=\\dfrac13$ ✓',
      '<b>Перейдём к обратным.</b> Пусть $b_n=\\dfrac1{a_n}$; тогда '
      '$b_{n+1}=1+b_n$.<br>'
      'Значит $\\{b_n\\}$ — арифметическая прогрессия с разностью $1$ и '
      '$b_1=1$, то есть $b_n=n$.<br>'
      'Ответ: $a_{2025}=\\dfrac1{2025}$.<br>'
      '<i>Проверка:</i> $a_2=\\tfrac12$ ✓, $a_3=\\tfrac13$ ✓'),
    'D'),

  P(T('Arifmetik progressiyaning dastlabki $n$ ta hadi yigʻindisi '
      '$S_n=3n^2+2n$ ga teng. Progressiyaning $10$-hadini toping.',
      'Сумма первых $n$ членов арифметической прогрессии равна '
      '$S_n=3n^2+2n$. Найдите её $10$-й член.'),
    T('$a_{10}=59$', '$a_{10}=59$'),
    T('<b>Had — ikkita yigʻindining ayirmasi:</b> '
      '$a_n=S_n-S_{n-1}$.<br>'
      '$a_{10}=S_{10}-S_9=\\left(300+20\\right)-\\left(243+18\\right)='
      '320-261=59$.<br>'
      '<i>Tekshirish:</i> umumiy holda '
      '$a_n=3n^2+2n-3(n-1)^2-2(n-1)=6n-1$, demak $a_{10}=59$ ✓ va '
      'bu haqiqatan arifmetik progressiya ($d=6$).',
      '<b>Член — разность двух сумм:</b> $a_n=S_n-S_{n-1}$.<br>'
      '$a_{10}=320-261=59$.<br>'
      '<i>Проверка:</i> в общем виде $a_n=6n-1$, то есть прогрессия с '
      '$d=6$ ✓'),
    'A'),

  P(T('$b_1+b_2+\\cdots+b_n=2^n-1$ boʻlsa, $\\{b_n\\}$ geometrik '
      'progressiya ekanini koʻrsating va $b_{10}$ ni toping.',
      'Пусть $b_1+b_2+\\cdots+b_n=2^n-1$. Покажите, что $\\{b_n\\}$ — '
      'геометрическая прогрессия, и найдите $b_{10}$.'),
    T('$b_{10}=512$', '$b_{10}=512$'),
    T('$b_n=S_n-S_{n-1}=\\left(2^n-1\\right)-\\left(2^{n-1}-1\\right)='
      '2^{n-1}$ ($n\\ge2$), va $b_1=S_1=1=2^0$ — formula $n=1$ da ham '
      'toʻgʻri.<br>'
      'Demak $\\dfrac{b_{n+1}}{b_n}=2$ — geometrik progressiya, '
      '$q=2$.<br>'
      '$b_{10}=2^9=512$.',
      '$b_n=S_n-S_{n-1}=2^{n-1}$ при $n\\ge2$, и $b_1=1=2^0$ — формула верна '
      'и при $n=1$.<br>'
      'Значит $\\dfrac{b_{n+1}}{b_n}=2$ — геометрическая прогрессия с '
      '$q=2$, и $b_{10}=2^9=512$.'),
    'B'),
 ]),
]
