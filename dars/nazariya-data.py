# -*- coding: utf-8 -*-
"""Sonlar nazariyasi — 9, 10 va 11-sinf uchun toʻliq maʼlumotnoma.

Uchala sinfning tuman bosqichi variantlarida sonlar nazariyasi savollarning
beshdan birini beradi (9-sinf 24,7 %, 10-sinf 20,0 %, 11-sinf 18,3 %), va bu
savollar uchun kerak boʻladigan hamma narsa shu yerda: taʼrif, teorema, qisqa
isbot, ishlangan misol — soʻngra toʻrt darajali masalalar va ularning batafsil
yechimi.

Hamma son qiymati yozilishidan oldin kompyuterda tekshirilgan.

$...$ — KaTeX.
"""

T = lambda uz, ru: (uz, ru)

CHROME = dict(
 title=T('Sonlar nazariyasi · 9–11-sinf', 'Теория чисел · 9–11 классы'),
 eyebrow=T('Olimpiadaga tayyorgarlik · tuman (shahar) bosqichi',
           'Подготовка к олимпиаде · районный (городской) этап'),
 h1=T('Sonlar nazariyasi', 'Теория чисел'),
 sub=T('Taʼriflar, teoremalar va isbotlar — har biri ishlangan misol bilan. '
       'Soʻngra toʻrt darajadagi 32 ta masala va ularning batafsil yechimi.',
       'Определения, теоремы и доказательства — каждое с разобранным примером. '
       'Затем 32 задачи четырёх уровней и подробные решения.'),
)

# Nazariya boʻlimlari. Har bir band: tur, nom, bayon, isbot (ixtiyoriy), misol.
def I(tur, nom, bayon, misol, isbot=None):
    return dict(tur=tur, nom=nom, bayon=bayon, misol=misol, isbot=isbot)

TUR = {
 'tarif':   T('taʼrif', 'определение'),
 'teorema': T('teorema', 'теорема'),
 'xossa':   T('xossa', 'свойство'),
 'natija':  T('natija', 'следствие'),
 'usul':    T('usul', 'приём'),
}

BOLIMLAR = []

# ============================================================ A · Boʻlinish ==
BOLIMLAR.append(dict(kod='A', hue='nt',
 nom=T('Boʻlinish', 'Делимость'),
 izoh=T('Hamma narsa shu yerdan boshlanadi: “boʻlinadi” degani nima, va undan '
        'qanday xulosa chiqarish mumkin.',
        'Всё начинается отсюда: что значит «делится» и какие выводы из этого '
        'можно сделать.'),
 items=[

 I('tarif', T('Boʻlinish', 'Делимость'),
   T('$a \\mid b$ (“$a$ soni $b$ ni boʻladi”) degani: shunday butun $k$ mavjudki, '
     '$b = ak$. Bu yerda $a \\ne 0$.',
     '$a \\mid b$ («$a$ делит $b$») означает: существует целое $k$ такое, что '
     '$b = ak$. Здесь $a \\ne 0$.'),
   T('$7 \\mid 91$, chunki $91 = 7 \\cdot 13$. Lekin $7 \\nmid 90$.',
     '$7 \\mid 91$, так как $91 = 7 \\cdot 13$. Но $7 \\nmid 90$.')),

 I('xossa', T('Chiziqli birikma', 'Линейная комбинация'),
   T('Agar $a \\mid b$ va $a \\mid c$ boʻlsa, ixtiyoriy butun $x, y$ uchun '
     '$a \\mid (bx + cy)$.',
     'Если $a \\mid b$ и $a \\mid c$, то для любых целых $x, y$ выполняется '
     '$a \\mid (bx + cy)$.'),
   T('$3 \\mid 12$ va $3 \\mid 21$, demak $3 \\mid (12 \\cdot 5 - 21 \\cdot 2) '
     '= 18$. <b>Bu xossa butun olimpiada boʻlinish masalalarining kalitidir:</b> '
     'nomaʼlumni yoʻqotish uchun ikkita boʻlinishni qoʻshamiz yoki ayiramiz.',
     '$3 \\mid 12$ и $3 \\mid 21$, значит $3 \\mid (12 \\cdot 5 - 21 \\cdot 2) '
     '= 18$. <b>Это свойство — ключ ко всем олимпиадным задачам на делимость:</b> '
     'чтобы убрать неизвестное, складываем или вычитаем две делимости.'),
   T('$b = ak$, $c = am$ boʻlsa, $bx + cy = a(kx + my)$.',
     'Если $b = ak$, $c = am$, то $bx + cy = a(kx + my)$.')),

 I('teorema', T('Boʻlish algoritmi', 'Алгоритм деления'),
   T('Ixtiyoriy butun $a$ va natural $b$ uchun <b>yagona</b> $q$ va $r$ juftligi '
     'mavjud: $a = bq + r$, bunda $0 \\le r < b$.',
     'Для любого целого $a$ и натурального $b$ существует <b>единственная</b> '
     'пара $q$ и $r$: $a = bq + r$, где $0 \\le r < b$.'),
   T('$2025 = 7 \\cdot 289 + 2$, demak $2025$ ni $7$ ga boʻlgandagi qoldiq $2$.',
     '$2025 = 7 \\cdot 289 + 2$, значит остаток от деления $2025$ на $7$ равен $2$.')),

 I('teorema', T('Ketma-ket sonlar koʻpaytmasi', 'Произведение подряд идущих чисел'),
   T('Ketma-ket kelgan $n$ ta butun sonning koʻpaytmasi $n!$ ga boʻlinadi.',
     'Произведение $n$ подряд идущих целых чисел делится на $n!$.'),
   T('$n(n+1)$ har doim juft; $n(n+1)(n+2)$ har doim $6$ ga boʻlinadi. '
     'Shuning uchun $n^3 - n = (n-1)n(n+1)$ har doim $6$ ga boʻlinadi.',
     '$n(n+1)$ всегда чётно; $n(n+1)(n+2)$ всегда делится на $6$. Поэтому '
     '$n^3 - n = (n-1)n(n+1)$ всегда делится на $6$.'),
   T('Ketma-ket $n$ ta sonning koʻpaytmasi $\\dbinom{m}{n} \\cdot n!$ '
     'koʻrinishida yoziladi, binomial koeffitsiyent esa butun son.',
     'Произведение $n$ подряд идущих чисел записывается как '
     '$\\dbinom{m}{n} \\cdot n!$, а биномиальный коэффициент — целое число.')),

 I('teorema', T('$a^n - b^n$ va $a^n + b^n$', '$a^n - b^n$ и $a^n + b^n$'),
   T('$(a - b) \\mid (a^n - b^n)$ — har qanday natural $n$ uchun.<br>'
     '$(a + b) \\mid (a^n + b^n)$ — faqat $n$ <b>toq</b> boʻlganda.',
     '$(a - b) \\mid (a^n - b^n)$ — для любого натурального $n$.<br>'
     '$(a + b) \\mid (a^n + b^n)$ — только при <b>нечётном</b> $n$.'),
   T('$2^{30} - 1$ soni $2^3 - 1 = 7$ ga ham, $2^5 - 1 = 31$ ga ham boʻlinadi, '
     'chunki $2^{30} = (2^3)^{10} = (2^5)^6$.',
     'Число $2^{30} - 1$ делится и на $2^3 - 1 = 7$, и на $2^5 - 1 = 31$, так как '
     '$2^{30} = (2^3)^{10} = (2^5)^6$.'),
   T('$a^n - b^n = (a-b)(a^{n-1} + a^{n-2}b + \\dots + b^{n-1})$. Ikkinchisi '
     'uchun $b \\to -b$ almashtirish yetarli.',
     '$a^n - b^n = (a-b)(a^{n-1} + a^{n-2}b + \\dots + b^{n-1})$. Для второго '
     'достаточно замены $b \\to -b$.')),

 I('natija', T('Juft va toq', 'Чёт и нечет'),
   T('Juft $\\pm$ juft $=$ juft; toq $\\pm$ toq $=$ juft; juft $\\pm$ toq $=$ toq. '
     'Koʻpaytma juft boʻlishi uchun kamida bitta koʻpaytuvchi juft boʻlishi kerak.',
     'Чёт $\\pm$ чёт $=$ чёт; нечет $\\pm$ нечет $=$ чёт; чёт $\\pm$ нечет $=$ нечет. '
     'Произведение чётно, если чётен хотя бы один множитель.'),
   T('$x^2 + y^2 = 2023$ ning butun yechimi yoʻq: $2023$ toq, demak $x$ va $y$ '
     'ning biri juft, biri toq — u holda $x^2 + y^2 \\equiv 1 \\pmod 4$, lekin '
     '$2023 \\equiv 3 \\pmod 4$.',
     'Уравнение $x^2 + y^2 = 2023$ не имеет целых решений: $2023$ нечётно, значит '
     'одно из $x, y$ чётно, другое нечётно — тогда $x^2 + y^2 \\equiv 1 \\pmod 4$, '
     'а $2023 \\equiv 3 \\pmod 4$.')),
]))

# ============================================ B · Tub sonlar va boʻluvchilar ==
BOLIMLAR.append(dict(kod='B', hue='alg',
 nom=T('Tub sonlar va boʻluvchilar', 'Простые числа и делители'),
 izoh=T('Sonni tub koʻpaytuvchilarga yoygandan keyin boʻluvchilar haqidagi '
        'har qanday savolga sanash orqali javob beriladi.',
        'После разложения числа на простые множители любой вопрос о делителях '
        'решается подсчётом.'),
 items=[

 I('teorema', T('Arifmetikaning asosiy teoremasi', 'Основная теорема арифметики'),
   T('Har bir $n > 1$ natural son tub koʻpaytuvchilarga <b>yagona</b> usulda '
     'yoyiladi: $n = p_1^{\\alpha_1} p_2^{\\alpha_2} \\cdots p_k^{\\alpha_k}$ '
     '(koʻpaytuvchilar tartibidan qatʼi nazar).',
     'Каждое натуральное $n > 1$ разлагается на простые множители '
     '<b>единственным</b> образом: '
     '$n = p_1^{\\alpha_1} p_2^{\\alpha_2} \\cdots p_k^{\\alpha_k}$ (с точностью '
     'до порядка множителей).'),
   T('$9800 = 2^3 \\cdot 5^2 \\cdot 7^2$. Bu yozuvsiz quyidagi hech bir savolga '
     'javob berib boʻlmaydi.',
     '$9800 = 2^3 \\cdot 5^2 \\cdot 7^2$. Без этой записи ни на один из следующих '
     'вопросов ответить нельзя.')),

 I('teorema', T('Boʻluvchilar soni $\\tau(n)$', 'Число делителей $\\tau(n)$'),
   T('$n = p_1^{\\alpha_1} \\cdots p_k^{\\alpha_k}$ boʻlsa, '
     '$\\tau(n) = (\\alpha_1 + 1)(\\alpha_2 + 1) \\cdots (\\alpha_k + 1)$.',
     'Если $n = p_1^{\\alpha_1} \\cdots p_k^{\\alpha_k}$, то '
     '$\\tau(n) = (\\alpha_1 + 1)(\\alpha_2 + 1) \\cdots (\\alpha_k + 1)$.'),
   T('$9800$ ning boʻluvchilari soni $(3+1)(2+1)(2+1) = 36$ ta.',
     'Число делителей $9800$ равно $(3+1)(2+1)(2+1) = 36$.'),
   T('Har bir boʻluvchi $p_1^{\\beta_1} \\cdots p_k^{\\beta_k}$ koʻrinishda, '
     'bunda $0 \\le \\beta_i \\le \\alpha_i$. Har bir $\\beta_i$ uchun '
     '$\\alpha_i + 1$ ta tanlov bor, tanlovlar mustaqil.',
     'Каждый делитель имеет вид $p_1^{\\beta_1} \\cdots p_k^{\\beta_k}$, где '
     '$0 \\le \\beta_i \\le \\alpha_i$. Для каждого $\\beta_i$ есть '
     '$\\alpha_i + 1$ вариантов, и выборы независимы.')),

 I('natija', T('Shartli boʻluvchilar', 'Условные делители'),
   T('<b>Toʻla kvadrat</b> boʻluvchida har bir daraja juft, shuning uchun ularning '
     'soni $\\prod\\left(\\left\\lfloor \\frac{\\alpha_i}{2} \\right\\rfloor + 1'
     '\\right)$. <b>Toʻla kub</b> uchun $2$ oʻrniga $3$ qoʻyiladi, '
     'oltinchi daraja uchun $6$.',
     'У делителя-<b>квадрата</b> каждый показатель чётный, поэтому их количество '
     'равно $\\prod\\left(\\left\\lfloor \\frac{\\alpha_i}{2} \\right\\rfloor + 1'
     '\\right)$. Для делителя-<b>куба</b> вместо $2$ ставится $3$, для шестой '
     'степени — $6$.'),
   T('$9800 = 2^3 \\cdot 5^2 \\cdot 7^2$: kvadrat boʻluvchilar soni '
     '$(1+1)(1+1)(1+1) = 8$. «Kvadrat <b>yoki</b> kub» soʻralsa, qoʻshib, '
     'oltinchi darajalarni ayiring — ular ikki marta sanaladi.',
     '$9800 = 2^3 \\cdot 5^2 \\cdot 7^2$: делителей-квадратов '
     '$(1+1)(1+1)(1+1) = 8$. Если спрашивают «квадрат <b>или</b> куб», сложите и '
     'вычтите шестые степени — они посчитаны дважды.')),

 I('teorema', T('$\\tau(n)$ qachon toq', 'Когда $\\tau(n)$ нечётно'),
   T('$\\tau(n)$ toq son boʻlishi uchun $n$ ning toʻla kvadrat boʻlishi zarur va '
     'yetarli.',
     'Число $\\tau(n)$ нечётно тогда и только тогда, когда $n$ — полный квадрат.'),
   T('Boʻluvchilar $d$ va $n/d$ juftlarga ajraladi; juftlik buzilishi faqat '
     '$d = n/d$, yaʼni $n = d^2$ boʻlganda yuz beradi. Shuning uchun $100$ ta '
     'shkafdan faqat toʻla kvadrat raqamlilari ochiq qoladi.',
     'Делители разбиваются на пары $d$ и $n/d$; пара нарушается только при '
     '$d = n/d$, то есть при $n = d^2$. Поэтому из $100$ шкафчиков открытыми '
     'останутся лишь с номерами — полными квадратами.')),

 I('teorema', T('Boʻluvchilar yigʻindisi $\\sigma(n)$', 'Сумма делителей $\\sigma(n)$'),
   T('$\\sigma(n) = \\prod_{i=1}^{k} '
     '\\dfrac{p_i^{\\alpha_i + 1} - 1}{p_i - 1}$.',
     '$\\sigma(n) = \\prod_{i=1}^{k} '
     '\\dfrac{p_i^{\\alpha_i + 1} - 1}{p_i - 1}$.'),
   T('$\\sigma(12) = \\sigma(2^2 \\cdot 3) = '
     '\\dfrac{2^3 - 1}{1} \\cdot \\dfrac{3^2 - 1}{2} = 7 \\cdot 4 = 28$. '
     'Tekshirish: $1 + 2 + 3 + 4 + 6 + 12 = 28$.',
     '$\\sigma(12) = \\sigma(2^2 \\cdot 3) = '
     '\\dfrac{2^3 - 1}{1} \\cdot \\dfrac{3^2 - 1}{2} = 7 \\cdot 4 = 28$. '
     'Проверка: $1 + 2 + 3 + 4 + 6 + 12 = 28$.')),

 I('teorema', T('Tub sonlar cheksiz koʻp', 'Простых чисел бесконечно много'),
   T('Tub sonlar toʻplami cheksiz.', 'Множество простых чисел бесконечно.'),
   T('Bu isbot gʻoyasi — “qarama-qarshilikka keltirish” — olimpiadada juda '
     'koʻp uchraydi.',
     'Идея этого доказательства — «от противного» — очень часто встречается на '
     'олимпиадах.'),
   T('Faraz qilaylik, tub sonlar chekli: $p_1, \\dots, p_k$. '
     '$N = p_1 p_2 \\cdots p_k + 1$ sonini qaraymiz. $N$ ning har qanday tub '
     'boʻluvchisi roʻyxatdagilardan biri boʻlishi kerak, lekin ularning har biri '
     '$N$ ni boʻlganda $1$ qoldiq qoldiradi — qarama-qarshilik.',
     'Предположим, простых конечное число: $p_1, \\dots, p_k$. Рассмотрим '
     '$N = p_1 p_2 \\cdots p_k + 1$. Любой простой делитель $N$ обязан быть из '
     'списка, но каждый из них даёт при делении $N$ остаток $1$ — противоречие.')),

 I('usul', T('Tublikni tekshirish', 'Проверка на простоту'),
   T('$n$ ning tubligini aniqlash uchun uni faqat $\\sqrt{n}$ dan katta boʻlmagan '
     'tub sonlarga boʻlib koʻrish yetarli.',
     'Чтобы проверить простоту $n$, достаточно делить его только на простые, не '
     'превосходящие $\\sqrt{n}$.'),
   T('$211$ tubmi? $\\sqrt{211} < 15$, demak $2, 3, 5, 7, 11, 13$ ni tekshiramiz — '
     'hech biri boʻlmaydi, demak $211$ tub.',
     'Простое ли $211$? Так как $\\sqrt{211} < 15$, проверяем $2, 3, 5, 7, 11, 13$ '
     '— ни одно не делит, значит $211$ простое.'),
   T('Agar $n = ab$ va $a \\le b$ boʻlsa, $a \\le \\sqrt{n}$.',
     'Если $n = ab$ и $a \\le b$, то $a \\le \\sqrt{n}$.')),
]))

# ========================================================= C · EKUB va EKUK ==
BOLIMLAR.append(dict(kod='C', hue='geo',
 nom=T('EKUB va EKUK', 'НОД и НОК'),
 izoh=T('Ikki sonni bogʻlaydigan ikkita kattalik va ular orasidagi bitta '
        'tenglik — olimpiadada eng koʻp ishlatiladigan vositalardan biri.',
        'Две величины, связывающие два числа, и одно равенство между ними — '
        'один из самых востребованных инструментов на олимпиаде.'),
 items=[

 I('teorema', T('Evklid algoritmi', 'Алгоритм Евклида'),
   T('$\\gcd(a, b) = \\gcd(b,\; a \\bmod b)$, va bu jarayon qoldiq nolga '
     'aylanguncha davom etadi.',
     '$\\gcd(a, b) = \\gcd(b,\; a \\bmod b)$, и процесс продолжается, пока '
     'остаток не станет нулём.'),
   T('$\\gcd(252, 198) = \\gcd(198, 54) = \\gcd(54, 36) = \\gcd(36, 18) = '
     '\\gcd(18, 0) = 18$.',
     '$\\gcd(252, 198) = \\gcd(198, 54) = \\gcd(54, 36) = \\gcd(36, 18) = '
     '\\gcd(18, 0) = 18$.')),

 I('xossa', T('EKUB ning siljishi', 'Сдвиг НОД'),
   T('Ixtiyoriy butun $k$ uchun $\\gcd(a, b) = \\gcd(a,\; b + ka)$.',
     'Для любого целого $k$ выполняется $\\gcd(a, b) = \\gcd(a,\; b + ka)$.'),
   T('<b>Ikki chiziqli ifodaning EKUB i soʻralsa, shu xossa ishlatiladi.</b> '
     '$d = \\gcd(30m + n,\; 15n + 2m)$ boʻlsin. U holda $d$ soni '
     '$2(30m + n) - (15n + 2m) \\cdot 1 \\cdot \\ldots$ kabi birikmalarni ham '
     'boʻladi; maqsad — $m$ yoki $n$ ni yoʻqotish.',
     '<b>Если спрашивают НОД двух линейных выражений, применяется именно это '
     'свойство.</b> Пусть $d = \\gcd(30m + n,\; 15n + 2m)$. Тогда $d$ делит и '
     'комбинации вида $2(30m + n) - \\ldots$; цель — исключить $m$ или $n$.'),
   T('$a \\mid x$ va $a \\mid y$ boʻlsa $a \\mid (x \\pm ky)$ — bu «chiziqli '
     'birikma» xossasining bevosita natijasi.',
     'Если $a \\mid x$ и $a \\mid y$, то $a \\mid (x \\pm ky)$ — прямое следствие '
     'свойства о линейной комбинации.')),

 I('teorema', T('EKUB va EKUK bogʻlanishi', 'Связь НОД и НОК'),
   T('$\\gcd(a, b) \\cdot \\operatorname{lcm}(a, b) = a \\cdot b$.',
     '$\\gcd(a, b) \\cdot \\operatorname{lcm}(a, b) = a \\cdot b$.'),
   T('$\\gcd = 4$, $\\operatorname{lcm} = 48$ boʻlsa, $ab = 192$. Bunday '
     'masalalarda koʻpincha $a = 4x$, $b = 4y$ deb qoʻyiladi, bunda '
     '$\\gcd(x, y) = 1$.',
     'Если $\\gcd = 4$, $\\operatorname{lcm} = 48$, то $ab = 192$. В таких задачах '
     'обычно полагают $a = 4x$, $b = 4y$, где $\\gcd(x, y) = 1$.'),
   T('Har bir tub $p$ uchun $\\min(\\alpha, \\beta) + \\max(\\alpha, \\beta) = '
     '\\alpha + \\beta$.',
     'Для каждого простого $p$: $\\min(\\alpha, \\beta) + \\max(\\alpha, \\beta) = '
     '\\alpha + \\beta$.')),

 I('teorema', T('Bezu tengligi', 'Соотношение Безу'),
   T('Shunday butun $x, y$ mavjudki, $ax + by = \\gcd(a, b)$.',
     'Существуют целые $x, y$ такие, что $ax + by = \\gcd(a, b)$.'),
   T('$\\gcd(13, 31) = 1$, va haqiqatan $13 \\cdot 12 - 31 \\cdot 5 = 156 - 155 = 1$.',
     '$\\gcd(13, 31) = 1$, и действительно $13 \\cdot 12 - 31 \\cdot 5 = 156 - 155 = 1$.')),

 I('natija', T('Chiziqli Diofant tenglamasi', 'Линейное диофантово уравнение'),
   T('$ax + by = c$ tenglamasi butun yechimga ega $\\iff \\gcd(a, b) \\mid c$. '
     'Bitta yechim $(x_0, y_0)$ topilsa, qolganlari '
     '$x = x_0 + \\frac{b}{d}t$, $y = y_0 - \\frac{a}{d}t$, $d = \\gcd(a,b)$.',
     'Уравнение $ax + by = c$ имеет целые решения $\\iff \\gcd(a, b) \\mid c$. '
     'Если найдено одно решение $(x_0, y_0)$, остальные: '
     '$x = x_0 + \\frac{b}{d}t$, $y = y_0 - \\frac{a}{d}t$, где $d = \\gcd(a,b)$.'),
   T('$13a + 31b = N$ da $\\gcd(13, 31) = 1$, shuning uchun yechim har doim bor; '
     'lekin $a, b$ <b>natural</b> boʻlishi kerak boʻlsa, $t$ ning oraligʻi '
     'cheklanadi — yechimlar soni shundan chiqadi.',
     'В $13a + 31b = N$ имеем $\\gcd(13, 31) = 1$, поэтому решение есть всегда; но '
     'если $a, b$ должны быть <b>натуральными</b>, диапазон $t$ ограничен — отсюда '
     'и получается число решений.')),

 I('teorema', T('Evklid lemmasi', 'Лемма Евклида'),
   T('Agar $\\gcd(a, b) = 1$ va $a \\mid bc$ boʻlsa, u holda $a \\mid c$. '
     'Xususan, $p$ tub va $p \\mid bc$ boʻlsa, $p \\mid b$ yoki $p \\mid c$.',
     'Если $\\gcd(a, b) = 1$ и $a \\mid bc$, то $a \\mid c$. В частности, если $p$ '
     'простое и $p \\mid bc$, то $p \\mid b$ или $p \\mid c$.'),
   T('$(4a - 1)(7b + 1) = 2019 = 3 \\cdot 673$ da har bir koʻpaytuvchi $2019$ '
     'ning boʻluvchisi boʻlishi <b>shart</b> — aynan shu lemma buni kafolatlaydi.',
     'В равенстве $(4a - 1)(7b + 1) = 2019 = 3 \\cdot 673$ каждый множитель '
     '<b>обязан</b> быть делителем $2019$ — именно эта лемма это гарантирует.')),
]))

# ============================================================ D · Qoldiqlar ==
BOLIMLAR.append(dict(kod='D', hue='comb',
 nom=T('Qoldiqlar', 'Остатки'),
 izoh=T('Katta sonni butunlay hisoblash shart emas — koʻpincha uning qoldigʻi '
        'yetarli. “Yechim yoʻq” degan javoblarning deyarli hammasi shu yerdan '
        'chiqadi.',
        'Большое число не нужно вычислять целиком — часто достаточно его остатка. '
        'Почти все ответы «решений нет» получаются именно отсюда.'),
 items=[

 I('tarif', T('Taqqoslama', 'Сравнение по модулю'),
   T('$a \\equiv b \\pmod m$ degani $m \\mid (a - b)$. Taqqoslamalarni '
     'qoʻshish, ayirish va koʻpaytirish mumkin: $a \\equiv b$, $c \\equiv d$ '
     'boʻlsa, $a + c \\equiv b + d$ va $ac \\equiv bd$.',
     '$a \\equiv b \\pmod m$ означает $m \\mid (a - b)$. Сравнения можно '
     'складывать, вычитать и умножать: если $a \\equiv b$, $c \\equiv d$, то '
     '$a + c \\equiv b + d$ и $ac \\equiv bd$.'),
   T('$3^{2024} \\bmod 5$: $3^4 = 81 \\equiv 1$, $2024 = 4 \\cdot 506$, demak '
     '$3^{2024} \\equiv 1^{506} = 1$. Katta darajani hisoblash shart emas.',
     '$3^{2024} \\bmod 5$: $3^4 = 81 \\equiv 1$, $2024 = 4 \\cdot 506$, значит '
     '$3^{2024} \\equiv 1^{506} = 1$. Возводить в большую степень не нужно.')),

 I('teorema', T('Boʻlinish alomatlari', 'Признаки делимости'),
   T('$2, 5$ — oxirgi raqam. $4, 25$ — oxirgi ikki raqam. $8, 125$ — oxirgi '
     'uch raqam. $3, 9$ — raqamlar yigʻindisi. $11$ — raqamlarning navbatma-'
     'navbat ayirmasi.',
     '$2, 5$ — последняя цифра. $4, 25$ — две последние. $8, 125$ — три последние. '
     '$3, 9$ — сумма цифр. $11$ — знакопеременная сумма цифр.'),
   T('$\\overline{abab} = 1010a + 101b = 101(10a + b)$ — demak bunday son har '
     'doim $101$ ga boʻlinadi. Bu — «raqamli» masalalarni yechishning asosiy '
     'usuli: sonni $10$ ning darajalari orqali yozib chiqing.',
     '$\\overline{abab} = 1010a + 101b = 101(10a + b)$ — значит такое число всегда '
     'делится на $101$. Это основной приём в «цифровых» задачах: распишите число '
     'через степени $10$.'),
   T('$10 \\equiv 1 \\pmod 9$, shuning uchun '
     '$\\overline{a_k \\ldots a_0} \\equiv a_k + \\dots + a_0 \\pmod 9$; '
     '$10 \\equiv -1 \\pmod{11}$ — shundan navbatma-navbat ayirma.',
     '$10 \\equiv 1 \\pmod 9$, поэтому '
     '$\\overline{a_k \\ldots a_0} \\equiv a_k + \\dots + a_0 \\pmod 9$; '
     '$10 \\equiv -1 \\pmod{11}$ — отсюда знакопеременная сумма.')),

 I('teorema', T('Oxirgi raqam davri', 'Период последней цифры'),
   T('$a^n$ ning oxirgi raqami $n$ boʻyicha davriy, davr uzunligi $4$ ni '
     'boʻladi: $2, 3, 7, 8$ uchun davr $4$; $4, 9$ uchun $2$; $0, 1, 5, 6$ '
     'uchun $1$. Oxirgi <b>ikki</b> raqam uchun modul $100$, davr $20$ ni boʻladi.',
     'Последняя цифра $a^n$ периодична по $n$, и длина периода делит $4$: для '
     '$2, 3, 7, 8$ период $4$; для $4, 9$ — $2$; для $0, 1, 5, 6$ — $1$. Для '
     '<b>двух</b> последних цифр модуль $100$, период делит $20$.'),
   T('$2^{100}$: davr $2, 4, 8, 6$; $100 \\equiv 0 \\pmod 4$, demak oxirgi '
     'raqam $6$.',
     '$2^{100}$: период $2, 4, 8, 6$; $100 \\equiv 0 \\pmod 4$, значит последняя '
     'цифра $6$.')),

 I('teorema', T('Fermaning kichik teoremasi', 'Малая теорема Ферма'),
   T('$p$ tub va $p \\nmid a$ boʻlsa, $a^{p-1} \\equiv 1 \\pmod p$. '
     'Umumiy holda ixtiyoriy $a$ uchun $a^p \\equiv a \\pmod p$.',
     'Если $p$ простое и $p \\nmid a$, то $a^{p-1} \\equiv 1 \\pmod p$. В общем '
     'случае для любого $a$ верно $a^p \\equiv a \\pmod p$.'),
   T('$2^{100} \\bmod 7$: $2^6 \\equiv 1$, $100 = 6 \\cdot 16 + 4$, demak '
     '$2^{100} \\equiv 2^4 = 16 \\equiv 2 \\pmod 7$.',
     '$2^{100} \\bmod 7$: $2^6 \\equiv 1$, $100 = 6 \\cdot 16 + 4$, значит '
     '$2^{100} \\equiv 2^4 = 16 \\equiv 2 \\pmod 7$.')),

 I('teorema', T('Kvadratlarning qoldiqlari', 'Остатки квадратов'),
   T('$n^2 \\equiv 0, 1 \\pmod 3$ &nbsp;·&nbsp; $n^2 \\equiv 0, 1 \\pmod 4$ '
     '&nbsp;·&nbsp; $n^2 \\equiv 0, 1, 4 \\pmod 8$ &nbsp;·&nbsp; '
     '$n^2 \\equiv 0, 1, 4, 5, 6, 9 \\pmod{10}$.',
     '$n^2 \\equiv 0, 1 \\pmod 3$ &nbsp;·&nbsp; $n^2 \\equiv 0, 1 \\pmod 4$ '
     '&nbsp;·&nbsp; $n^2 \\equiv 0, 1, 4 \\pmod 8$ &nbsp;·&nbsp; '
     '$n^2 \\equiv 0, 1, 4, 5, 6, 9 \\pmod{10}$.'),
   T('<b>Toq sonning kvadrati har doim $\\equiv 1 \\pmod 8$.</b> Shuning uchun '
     '$(p-1)(p+1) = 2q^2$ tenglamasida $p$ toq boʻlsa, chap tomon $8$ ga '
     'boʻlinadi — bu $q$ ni juftga, yaʼni $q = 2$ ga majbur qiladi.',
     '<b>Квадрат нечётного числа всегда $\\equiv 1 \\pmod 8$.</b> Поэтому в '
     'уравнении $(p-1)(p+1) = 2q^2$ при нечётном $p$ левая часть делится на $8$ — '
     'это вынуждает $q$ быть чётным, то есть $q = 2$.'),
   T('$n = 2k$ da $n^2 = 4k^2$; $n = 2k+1$ da $n^2 = 4k(k+1) + 1$, va $k(k+1)$ '
     'juft.',
     'При $n = 2k$: $n^2 = 4k^2$; при $n = 2k+1$: $n^2 = 4k(k+1) + 1$, а $k(k+1)$ '
     'чётно.')),

 I('usul', T('“Yechim yoʻq” ni isbotlash', 'Доказательство «решений нет»'),
   T('Tenglamaning ikkala tomonini qulay modul boʻyicha qarang. Agar chap va '
     'oʻng tomonlarning mumkin boʻlgan qoldiqlari toʻplamlari kesishmasa, '
     'yechim yoʻq. Odatda $3, 4, 8, 9$ yoki $5$ ishlaydi.',
     'Рассмотрите обе части уравнения по удобному модулю. Если множества '
     'возможных остатков левой и правой частей не пересекаются, решений нет. '
     'Обычно подходят $3, 4, 8, 9$ или $5$.'),
   T('$n^2 + n + 1$ hech qachon $5$ ga boʻlinmaydi: $n \\equiv 0,1,2,3,4$ da '
     'ifoda mos ravishda $1, 3, 2, 3, 1 \\pmod 5$ qiymatlarni oladi — nol '
     'yoʻq.',
     '$n^2 + n + 1$ никогда не делится на $5$: при $n \\equiv 0,1,2,3,4$ выражение '
     'принимает значения $1, 3, 2, 3, 1 \\pmod 5$ — нуля нет.')),

 I('usul', T('Xitoy qoldiqlar gʻoyasi', 'Идея китайской теоремы об остатках'),
   T('Agar son $m_1, m_2, \\dots$ modullar boʻyicha berilgan qoldiqlarni qoldirsa '
     'va modullar juft-jufti bilan oʻzaro tub boʻlsa, bunday son '
     '$m_1 m_2 \\cdots$ moduli boʻyicha yagona aniqlanadi.',
     'Если число даёт заданные остатки по модулям $m_1, m_2, \\dots$, попарно '
     'взаимно простым, то такое число определено однозначно по модулю '
     '$m_1 m_2 \\cdots$.'),
   T('“$10$ ga boʻlganda $9$, $11$ ga boʻlganda $10$, $12$ ga boʻlganda $11$ '
     'qoldiq” — har birida qoldiq boʻluvchidan $1$ kam, demak $n + 1$ soni '
     '$10, 11, 12$ ga boʻlinadi: $n + 1 = \\operatorname{lcm} = 660$, '
     '$n = 659$. <b>Qoldiqlarni bir xil songa keltirish — eng foydali hiyla.</b>',
     '«Остаток $9$ при делении на $10$, $10$ — на $11$, $11$ — на $12$»: в каждом '
     'случае остаток на $1$ меньше делителя, значит $n + 1$ делится на '
     '$10, 11, 12$: $n + 1 = \\operatorname{lcm} = 660$, $n = 659$. '
     '<b>Приведение остатков к одному виду — самый полезный приём.</b>')),
]))

# ================================================= E · Koʻpaytmaga keltirish ==
BOLIMLAR.append(dict(kod='E', hue='alg',
 nom=T('Koʻpaytmaga keltirish', 'Сведение к произведению'),
 izoh=T('Olimpiada sonlar nazariyasining markaziy gʻoyasi: tenglamani '
        '$(\\,\\cdot\\,)(\\,\\cdot\\,) = N$ koʻrinishga keltir, keyin $N$ ning '
        'boʻluvchilarini sanab chiq.',
        'Центральная идея олимпиадной теории чисел: привести уравнение к виду '
        '$(\\,\\cdot\\,)(\\,\\cdot\\,) = N$, а затем перебрать делители $N$.'),
 items=[

 I('usul', T('Butun qismni ajratish', 'Выделение целой части'),
   T('$\\dfrac{A(n)}{B(n)}$ butun boʻlishi kerak boʻlsa, boʻlishni bajaring: '
     '$\\dfrac{A}{B} = Q(n) + \\dfrac{r}{B(n)}$, bunda $r$ — <b>oʻzgarmas</b>. '
     'U holda $B(n) \\mid r$, va boʻluvchilar roʻyxati chekli.',
     'Если $\\dfrac{A(n)}{B(n)}$ должно быть целым, выполните деление: '
     '$\\dfrac{A}{B} = Q(n) + \\dfrac{r}{B(n)}$, где $r$ — <b>константа</b>. Тогда '
     '$B(n) \\mid r$, а список делителей конечен.'),
   T('$\\dfrac{n^2 - 3}{n - 2} = n + 2 + \\dfrac{1}{n-2}$, demak $n - 2 \\mid 1$ '
     'va $n \\in \\{1;\\,3\\}$.<br>'
     'Agar boʻluvchida koeffitsiyent boʻlsa, avval koʻpaytiring: '
     '$\\dfrac{35 + 2n}{3n + 1}$ ni $3$ ga koʻpaytirsak '
     '$2 + \\dfrac{103}{3n+1}$ chiqadi.',
     '$\\dfrac{n^2 - 3}{n - 2} = n + 2 + \\dfrac{1}{n-2}$, значит $n - 2 \\mid 1$ '
     'и $n \\in \\{1;\\,3\\}$.<br>'
     'Если в знаменателе коэффициент, сначала домножьте: умножение '
     '$\\dfrac{35 + 2n}{3n + 1}$ на $3$ даёт $2 + \\dfrac{103}{3n+1}$.')),

 I('usul', T('Guruhlash (Saymon hiylasi)', 'Группировка (приём Саймона)'),
   T('$xy + ax + by = c$ koʻrinishdagi tenglamaga ikkala tomonga $ab$ qoʻshing: '
     '$(x + b)(y + a) = c + ab$.',
     'В уравнении вида $xy + ax + by = c$ прибавьте к обеим частям $ab$: '
     '$(x + b)(y + a) = c + ab$.'),
   T('$xy - 3x + 2y = 17$: chap tomonni guruhlaymiz — '
     '$x(y - 3) + 2(y - 3) = 17 - 6$, yaʼni $(x + 2)(y - 3) = 11$. '
     '$11$ tub boʻlgani uchun holatlar juda kam.',
     '$xy - 3x + 2y = 17$: группируем левую часть — '
     '$x(y - 3) + 2(y - 3) = 17 - 6$, то есть $(x + 2)(y - 3) = 11$. Так как $11$ '
     'простое, случаев совсем мало.')),

 I('usul', T('Bitta nomaʼlumni qavsga chiqarish', 'Вынесение одного неизвестного'),
   T('Agar bitta nomaʼlum faqat birinchi darajada kirsa, uni qavsga chiqaring — '
     'qolgan qavs oʻzgarmas sonning boʻluvchisi boʻlib qoladi.',
     'Если одно неизвестное входит только в первой степени, вынесите его — '
     'оставшаяся скобка окажется делителем константы.'),
   T('$3x^2y - 12xy - 8y - 7 = 0$ dan $y(3x^2 - 12x - 8) = 7$. $7$ tub, demak '
     '$3x^2 - 12x - 8 \\in \\{\\pm 1; \\pm 7\\}$ — toʻrtta kvadrat tenglama, '
     'faqat bittasi butun ildiz beradi.',
     'Из $3x^2y - 12xy - 8y - 7 = 0$ получаем $y(3x^2 - 12x - 8) = 7$. Число $7$ '
     'простое, значит $3x^2 - 12x - 8 \\in \\{\\pm 1; \\pm 7\\}$ — четыре квадратных '
     'уравнения, целые корни даёт лишь одно.')),

 I('usul', T('Kvadratlar va kublar ayirmasi', 'Разность квадратов и кубов'),
   T('$a^2 - b^2 = (a-b)(a+b)$; &nbsp; $a^3 \\pm b^3 = (a \\pm b)(a^2 \\mp ab + b^2)$; '
     '&nbsp; $a^4 + 4b^4 = (a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2)$ — Sofi Jermen '
     'ayniyati.',
     '$a^2 - b^2 = (a-b)(a+b)$; &nbsp; $a^3 \\pm b^3 = (a \\pm b)(a^2 \\mp ab + b^2)$; '
     '&nbsp; $a^4 + 4b^4 = (a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2)$ — тождество Софи '
     'Жермен.'),
   T('$n^4 + 4$ soni qachon tub? Sofi Jermen ayniyati boʻyicha '
     '$n^4 + 4 = (n^2 + 2n + 2)(n^2 - 2n + 2)$. Kichik koʻpaytuvchi $1$ ga teng '
     'boʻlishi kerak: $n^2 - 2n + 2 = 1 \\Rightarrow n = 1$, va $1 + 4 = 5$ tub. '
     'Boshqa javob yoʻq.',
     'Когда $n^4 + 4$ простое? По тождеству Софи Жермен '
     '$n^4 + 4 = (n^2 + 2n + 2)(n^2 - 2n + 2)$. Меньший множитель должен равняться '
     '$1$: $n^2 - 2n + 2 = 1 \\Rightarrow n = 1$, и $1 + 4 = 5$ — простое. Других '
     'ответов нет.')),

 I('usul', T('Koʻpaytma tub songa teng', 'Произведение равно простому числу'),
   T('Agar butun koʻpaytuvchilarning koʻpaytmasi tub son $p$ ga teng boʻlsa, '
     'ulardan biri $\\pm 1$, ikkinchisi $\\pm p$ boʻlishi shart. Bu — holatlar '
     'sonini keskin kamaytiradigan eng kuchli cheklov.',
     'Если произведение целых множителей равно простому $p$, то один из них '
     'равен $\\pm 1$, а другой $\\pm p$. Это самое сильное ограничение, резко '
     'сокращающее число случаев.'),
   T('$2^n + 1$ tub boʻlsa, $n$ ning $2$ ning darajasi ekanini isbotlash '
     'shundan chiqadi: agar $n = km$, $m > 1$ toq boʻlsa, '
     '$2^k + 1 \\mid 2^n + 1$ va $1 < 2^k + 1 < 2^n + 1$ — demak tub emas.',
     'Отсюда же доказательство, что при простом $2^n + 1$ число $n$ — степень '
     'двойки: если $n = km$ с нечётным $m > 1$, то $2^k + 1 \\mid 2^n + 1$ и '
     '$1 < 2^k + 1 < 2^n + 1$ — значит, не простое.')),
]))

# =========================================== F · Faktorial va tub darajalari ==
BOLIMLAR.append(dict(kod='F', hue='nt',
 nom=T('Faktorial va tub darajalari', 'Факториал и степени простых'),
 izoh=T('Katta koʻpaytmada biror tub son necha marta qatnashishini hisoblash — '
        'bitta formula bilan.',
        'Сколько раз простое число входит в большое произведение — считается '
        'одной формулой.'),
 items=[

 I('teorema', T('Lejandr formulasi', 'Формула Лежандра'),
   T('$n!$ da $p$ tub sonning darajasi '
     '$v_p(n!) = \\left\\lfloor \\frac{n}{p} \\right\\rfloor + '
     '\\left\\lfloor \\frac{n}{p^2} \\right\\rfloor + '
     '\\left\\lfloor \\frac{n}{p^3} \\right\\rfloor + \\cdots$ — '
     'boʻlinmalar nolga aylanguncha.',
     'Степень простого $p$ в $n!$ равна '
     '$v_p(n!) = \\left\\lfloor \\frac{n}{p} \\right\\rfloor + '
     '\\left\\lfloor \\frac{n}{p^2} \\right\\rfloor + '
     '\\left\\lfloor \\frac{n}{p^3} \\right\\rfloor + \\cdots$ — пока частные не '
     'станут нулём.'),
   T('$v_3(100!) = 33 + 11 + 3 + 1 = 48$.',
     '$v_3(100!) = 33 + 11 + 3 + 1 = 48$.'),
   T('$1$ dan $n$ gacha boʻlgan sonlar orasida $p$ ga boʻlinadiganlari '
     '$\\lfloor n/p \\rfloor$ ta; ularning har biri kamida bitta $p$ beradi. '
     '$p^2$ ga boʻlinadiganlari yana bittadan qoʻshadi, va hokazo.',
     'Среди чисел от $1$ до $n$ делящихся на $p$ ровно $\\lfloor n/p \\rfloor$; '
     'каждое даёт хотя бы одно $p$. Делящиеся на $p^2$ добавляют ещё по одному, '
     'и так далее.')),

 I('natija', T('Oxiridagi nollar', 'Нули на конце'),
   T('$n!$ sonining oxiridagi nollar soni $v_5(n!)$ ga teng, chunki ikkiliklar '
     'har doim beshliklardan koʻp.',
     'Число нулей на конце $n!$ равно $v_5(n!)$, так как двоек всегда больше, чем '
     'пятёрок.'),
   T('$v_5(2025!) = 405 + 81 + 16 + 3 = 505$ ta nol.',
     '$v_5(2025!) = 405 + 81 + 16 + 3 = 505$ нулей.')),

 I('usul', T('Faktorial boʻlmagan koʻpaytma', 'Произведение, не являющееся факториалом'),
   T('Koʻpaytma $n!$ koʻrinishida boʻlmasa, uni ikkita faktorial nisbati '
     'sifatida yozing va darajalarni ayiring.',
     'Если произведение не есть $n!$, запишите его как отношение двух факториалов '
     'и вычтите степени.'),
   T('Barcha ikki xonali sonlar koʻpaytmasi $= \\dfrac{99!}{9!}$, shuning uchun '
     '$v_3 = (33 + 11 + 3 + 1) - (3 + 1) = 48 - 4 = 44$.',
     'Произведение всех двузначных чисел равно $\\dfrac{99!}{9!}$, поэтому '
     '$v_3 = (33 + 11 + 3 + 1) - (3 + 1) = 48 - 4 = 44$.')),
]))

# ============================================== G · Sanash va baholash ==
BOLIMLAR.append(dict(kod='G', hue='geo',
 nom=T('Sanash va baholash', 'Подсчёт и оценка'),
 izoh=T('Javob “nechta” boʻlsa — sanash; javob “eng katta” yoki “eng kichik” '
        'boʻlsa — baholash va misol keltirish.',
        'Если спрашивают «сколько» — считаем; если «наибольшее» или «наименьшее» — '
        'оцениваем и приводим пример.'),
 items=[

 I('teorema', T('Darajani boʻlaklarga taqsimlash', 'Распределение показателя'),
   T('$xyz = p^{\\alpha}$ tenglamasining natural yechimlari soni — '
     '$\\alpha$ ta bir xil narsani $3$ ta qutiga taqsimlash usullari soni, '
     'yaʼni $\\dbinom{\\alpha + 2}{2}$. Bir nechta tub uchun natijalar '
     'koʻpaytiriladi.',
     'Число натуральных решений уравнения $xyz = p^{\\alpha}$ равно числу способов '
     'разложить $\\alpha$ одинаковых предметов по $3$ ящикам, то есть '
     '$\\dbinom{\\alpha + 2}{2}$. Для нескольких простых результаты '
     'перемножаются.'),
   T('$xyz = 12^4 = 2^8 \\cdot 3^4$: ikkiliklar uchun $\\dbinom{10}{2} = 45$, '
     'uchliklar uchun $\\dbinom{6}{2} = 15$; jami $45 \\cdot 15 = 675$ ta '
     'tartiblangan uchlik.',
     '$xyz = 12^4 = 2^8 \\cdot 3^4$: для двоек $\\dbinom{10}{2} = 45$, для троек '
     '$\\dbinom{6}{2} = 15$; всего $45 \\cdot 15 = 675$ упорядоченных троек.')),

 I('usul', T('Qoʻshish va ayirish', 'Включение и исключение'),
   T('$|A \\cup B| = |A| + |B| - |A \\cap B|$. «$X$ <b>yoki</b> $Y$» soʻralganda '
     'kesishmani albatta ayiring.',
     '$|A \\cup B| = |A| + |B| - |A \\cap B|$. Когда спрашивают «$X$ <b>или</b> '
     '$Y$», обязательно вычтите пересечение.'),
   T('$20^{22} = 2^{44} \\cdot 5^{22}$ ning kvadrat <b>yoki</b> kub '
     'boʻluvchilari: kvadratlar $23 \\cdot 12 = 276$, kublar '
     '$15 \\cdot 8 = 120$, ikkalasi ham — oltinchi darajalar $8 \\cdot 4 = 32$. '
     'Javob $276 + 120 - 32 = 364$.',
     'Делители $20^{22} = 2^{44} \\cdot 5^{22}$, являющиеся квадратом <b>или</b> '
     'кубом: квадратов $23 \\cdot 12 = 276$, кубов $15 \\cdot 8 = 120$, и то и '
     'другое — шестые степени $8 \\cdot 4 = 32$. Ответ $276 + 120 - 32 = 364$.')),

 I('usul', T('Baholash va misol', 'Оценка и пример'),
   T('«Eng katta $n$ ni toping» turidagi masala <b>ikkita</b> qadamdan iborat: '
     '(1) $n \\le N$ ekanini isbotlang; (2) $n = N$ ga erishiladigan misol '
     'keltiring. Faqat bittasi yetarli emas.',
     'Задача вида «найдите наибольшее $n$» состоит из <b>двух</b> шагов: '
     '(1) докажите, что $n \\le N$; (2) приведите пример, где $n = N$ '
     'достигается. Одного шага недостаточно.'),
   T('$m, n$ oʻzaro tub boʻlganda $\\gcd(30m + n,\; 15n + 2m)$ ning eng katta '
     'qiymati: avval $d \\mid 448$ ekanini chiqaring, soʻng $d = 448$ ga '
     'erishadigan aniq $m, n$ ni koʻrsating. Baholashsiz javob — javob emas.',
     'Наибольшее значение $\\gcd(30m + n,\; 15n + 2m)$ при взаимно простых '
     '$m, n$: сначала выведите $d \\mid 448$, затем предъявите конкретные '
     '$m, n$, на которых $d = 448$ достигается. Без оценки ответ — не ответ.')),

 I('usul', T('Cheklangan tartiblash', 'Упорядочивание с ограничением'),
   T('Simmetrik tenglamada $x \\le y \\le z$ deb faraz qiling — u holda '
     '$x$ uchun yuqoridan baho paydo boʻladi va holatlar soni chekli boʻlib '
     'qoladi. Oxirida barcha oʻrin almashtirishlarni hisobga oling.',
     'В симметричном уравнении предположите $x \\le y \\le z$ — тогда для $x$ '
     'появляется оценка сверху и число случаев становится конечным. В конце '
     'учтите все перестановки.'),
   T('$\\frac1x + \\frac1y + \\frac1z = 1$ da $x \\le y \\le z$ boʻlsa, '
     '$\\frac3x \\ge 1$, demak $x \\le 3$ — faqat uchta holat qoladi.',
     'В $\\frac1x + \\frac1y + \\frac1z = 1$ при $x \\le y \\le z$ имеем '
     '$\\frac3x \\ge 1$, значит $x \\le 3$ — остаётся всего три случая.')),
]))

# ================================================================ Masalalar ==
def P(savol, javob, yechim, bolim, manba=''):
    """bolim — qaysi nazariya boʻlimi kerak; manba — haqiqiy variant."""
    return dict(savol=savol, javob=javob, yechim=yechim, bolim=bolim, manba=manba)


DARAJALAR = [
 dict(kod='oson', nom=T('Oson', 'Лёгкие'), hue='easy',
  izoh=T('Bitta taʼrif yoki bitta formula. Har bir oʻquvchi shu yerdan '
         'boshlaydi.',
         'Одно определение или одна формула. Каждый ученик начинает отсюда.'),
  items=[

  P(T('$2^{100}$ sonining oxirgi raqamini toping.',
      'Найдите последнюю цифру числа $2^{100}$.'),
    T('$6$', '$6$'),
    T('$2$ ning darajalari oxirgi raqami boʻyicha $2, 4, 8, 6$ davrini takrorlaydi, '
      'davr uzunligi $4$. $100 = 4 \\cdot 25$, yaʼni $100 \\equiv 0 \\pmod 4$ — bu '
      'davrning <b>oxirgi</b> aʼzosiga toʻgʻri keladi. Demak oxirgi raqam $6$.',
      'Последние цифры степеней $2$ повторяются с периодом $2, 4, 8, 6$ длины $4$. '
      'Так как $100 = 4 \\cdot 25$, то есть $100 \\equiv 0 \\pmod 4$, попадаем на '
      '<b>последний</b> член периода. Значит, последняя цифра $6$.'), 'D'),

  P(T('$5^6 \\cdot 7^4 \\cdot 11^2$ sonining nechta boʻluvchisi bor?',
      'Сколько делителей у числа $5^6 \\cdot 7^4 \\cdot 11^2$?'),
    T('$105$ ta', '$105$'),
    T('Son allaqachon tub koʻpaytuvchilarga yoyilgan, shuning uchun '
      '$\\tau = (6+1)(4+1)(2+1) = 7 \\cdot 5 \\cdot 3 = 105$.',
      'Число уже разложено на простые множители, поэтому '
      '$\\tau = (6+1)(4+1)(2+1) = 7 \\cdot 5 \\cdot 3 = 105$.'), 'B'),

  P(T('$360$ sonining nechta toʻla kvadrat boʻluvchisi bor?',
      'Сколько у числа $360$ делителей, являющихся полными квадратами?'),
    T('$4$ ta', '$4$'),
    T('$360 = 2^3 \\cdot 3^2 \\cdot 5$. Kvadrat boʻluvchida har bir daraja juft '
      'boʻlishi kerak: $2$ uchun $\\{0; 2\\}$ — $2$ ta tanlov, $3$ uchun '
      '$\\{0; 2\\}$ — $2$ ta, $5$ uchun faqat $\\{0\\}$ — $1$ ta. '
      'Jami $2 \\cdot 2 \\cdot 1 = 4$: bular $1, 4, 9, 36$.',
      '$360 = 2^3 \\cdot 3^2 \\cdot 5$. У делителя-квадрата каждый показатель '
      'чётный: для $2$ это $\\{0; 2\\}$ — $2$ варианта, для $3$ — $\\{0; 2\\}$, '
      'то есть $2$, для $5$ только $\\{0\\}$ — $1$. Всего '
      '$2 \\cdot 2 \\cdot 1 = 4$: это $1, 4, 9, 36$.'), 'B'),

  P(T('$\\gcd(252,\\, 198)$ ni toping.', 'Найдите $\\gcd(252,\\, 198)$.'),
    T('$18$', '$18$'),
    T('Evklid algoritmi: $252 = 198 + 54$, $198 = 3 \\cdot 54 + 36$, '
      '$54 = 36 + 18$, $36 = 2 \\cdot 18$. Oxirgi nolmas qoldiq — $18$.',
      'Алгоритм Евклида: $252 = 198 + 54$, $198 = 3 \\cdot 54 + 36$, '
      '$54 = 36 + 18$, $36 = 2 \\cdot 18$. Последний ненулевой остаток — $18$.'), 'C'),

  P(T('$7 \\mid (n + 3)$ boʻladigan eng kichik natural $n$ ni toping.',
      'Найдите наименьшее натуральное $n$, для которого $7 \\mid (n + 3)$.'),
    T('$n = 4$', '$n = 4$'),
    T('$n + 3$ soni $7$ ning karralisi boʻlishi kerak. Eng kichik mos karrali — '
      '$7$ ning oʻzi: $n + 3 = 7$, demak $n = 4$. ($n + 3 = 0$ holati natural '
      'son bermaydi.)',
      'Число $n + 3$ должно быть кратно $7$. Наименьшее подходящее кратное — само '
      '$7$: $n + 3 = 7$, значит $n = 4$. (Случай $n + 3 = 0$ не даёт натурального '
      'числа.)'), 'A'),

  P(T('$1! + 2! + 3! + \\dots + 100!$ yigʻindisining oxirgi raqamini toping.',
      'Найдите последнюю цифру суммы $1! + 2! + 3! + \\dots + 100!$.'),
    T('$3$', '$3$'),
    T('$5!$ dan boshlab har bir faktorial $2$ va $5$ ga boʻlinadi, demak $10$ ga '
      'ham — ularning oxirgi raqami $0$ va yigʻindiga taʼsir qilmaydi. Shuning '
      'uchun faqat $1! + 2! + 3! + 4! = 1 + 2 + 6 + 24 = 33$ ni qaraymiz: oxirgi '
      'raqam $3$.',
      'Начиная с $5!$, каждый факториал делится на $2$ и на $5$, значит и на $10$ — '
      'их последняя цифра $0$ и на сумму не влияет. Поэтому достаточно '
      '$1! + 2! + 3! + 4! = 1 + 2 + 6 + 24 = 33$: последняя цифра $3$.'), 'F'),

  P(T('$3^{2024}$ ni $5$ ga boʻlgandagi qoldiqni toping.',
      'Найдите остаток от деления $3^{2024}$ на $5$.'),
    T('$1$', '$1$'),
    T('Fermaning kichik teoremasi boʻyicha $3^4 \\equiv 1 \\pmod 5$ (haqiqatan '
      '$81 = 16 \\cdot 5 + 1$). $2024 = 4 \\cdot 506$, demak '
      '$3^{2024} = (3^4)^{506} \\equiv 1^{506} = 1 \\pmod 5$.',
      'По малой теореме Ферма $3^4 \\equiv 1 \\pmod 5$ (действительно, '
      '$81 = 16 \\cdot 5 + 1$). Так как $2024 = 4 \\cdot 506$, то '
      '$3^{2024} = (3^4)^{506} \\equiv 1^{506} = 1 \\pmod 5$.'), 'D'),

  P(T('$7$ ga boʻlinadigan nechta ikki xonali son bor?',
      'Сколько существует двузначных чисел, делящихся на $7$?'),
    T('$13$ ta', '$13$'),
    T('Eng kichigi $14 = 7 \\cdot 2$, eng kattasi $98 = 7 \\cdot 14$. Demak '
      'koʻpaytuvchi $2$ dan $14$ gacha oʻzgaradi: $14 - 2 + 1 = 13$ ta son.',
      'Наименьшее — $14 = 7 \\cdot 2$, наибольшее — $98 = 7 \\cdot 14$. Значит, '
      'множитель меняется от $2$ до $14$: $14 - 2 + 1 = 13$ чисел.'), 'A'),
 ]),

 dict(kod='orta', nom=T('Oʻrtacha', 'Средние'), hue='med',
  izoh=T('Ikkita qadam yoki bitta hiyla. Variantdagi odatiy sonlar nazariyasi '
         'savoli shu darajada.',
         'Два шага или один приём. Типичная задача по теории чисел в варианте — '
         'этого уровня.'),
  items=[

  P(T('$\\dfrac{2n + 7}{n - 1}$ butun boʻladigan barcha butun $n$ larni toping.',
      'Найдите все целые $n$, при которых $\\dfrac{2n + 7}{n - 1}$ — целое.'),
    T('$n \\in \\{-8;\\, -2;\\, 0;\\, 2;\\, 4;\\, 10\\}$ — $6$ ta',
      '$n \\in \\{-8;\\, -2;\\, 0;\\, 2;\\, 4;\\, 10\\}$ — $6$ значений'),
    T('Butun qismni ajratamiz: $\\dfrac{2n + 7}{n - 1} = '
      '\\dfrac{2(n - 1) + 9}{n - 1} = 2 + \\dfrac{9}{n - 1}$. Demak '
      '$n - 1 \\mid 9$, yaʼni $n - 1 \\in \\{\\pm 1; \\pm 3; \\pm 9\\}$, va '
      '$n \\in \\{2; 0; 4; -2; 10; -8\\}$ — jami $6$ ta qiymat.',
      'Выделим целую часть: $\\dfrac{2n + 7}{n - 1} = '
      '\\dfrac{2(n - 1) + 9}{n - 1} = 2 + \\dfrac{9}{n - 1}$. Значит '
      '$n - 1 \\mid 9$, то есть $n - 1 \\in \\{\\pm 1; \\pm 3; \\pm 9\\}$, и '
      '$n \\in \\{2; 0; 4; -2; 10; -8\\}$ — всего $6$ значений.'), 'E'),

  P(T('$6! \\cdot 7!$ sonining nechta boʻluvchisi bor?',
      'Сколько делителей у числа $6! \\cdot 7!$?'),
    T('$270$ ta', '$270$'),
    T('$6! = 720 = 2^4 \\cdot 3^2 \\cdot 5$ va $7! = 7 \\cdot 6! = '
      '2^4 \\cdot 3^2 \\cdot 5 \\cdot 7$. Koʻpaytma: '
      '$2^8 \\cdot 3^4 \\cdot 5^2 \\cdot 7$. Shuning uchun '
      '$\\tau = 9 \\cdot 5 \\cdot 3 \\cdot 2 = 270$.',
      '$6! = 720 = 2^4 \\cdot 3^2 \\cdot 5$ и $7! = 7 \\cdot 6! = '
      '2^4 \\cdot 3^2 \\cdot 5 \\cdot 7$. Произведение: '
      '$2^8 \\cdot 3^4 \\cdot 5^2 \\cdot 7$. Поэтому '
      '$\\tau = 9 \\cdot 5 \\cdot 3 \\cdot 2 = 270$.'), 'B'),

  P(T('$\\operatorname{lcm}(a, b) = 48$ va $\\gcd(a, b) = 4$ boʻlsa, $ab$ ni '
      'toping.',
      'Найдите $ab$, если $\\operatorname{lcm}(a, b) = 48$ и $\\gcd(a, b) = 4$.'),
    T('$ab = 192$', '$ab = 192$'),
    T('$\\gcd \\cdot \\operatorname{lcm} = ab$, demak $ab = 4 \\cdot 48 = 192$. '
      '(Bunday juftliklar haqiqatan bor: $a = 4$, $b = 48$ yoki $a = 12$, '
      '$b = 16$.)',
      '$\\gcd \\cdot \\operatorname{lcm} = ab$, значит $ab = 4 \\cdot 48 = 192$. '
      '(Такие пары действительно существуют: $a = 4$, $b = 48$ или $a = 12$, '
      '$b = 16$.)'), 'C'),

  P(T('$n^2 + n + 1$ hech qachon $5$ ga boʻlinmasligini isbotlang.',
      'Докажите, что $n^2 + n + 1$ никогда не делится на $5$.'),
    T('Isbot quyida', 'Доказательство ниже'),
    T('$n$ ning $5$ ga boʻlgandagi barcha qoldiqlarini koʻrib chiqamiz. '
      '$n \\equiv 0$: ifoda $\\equiv 1$; $n \\equiv 1$: $1 + 1 + 1 = 3$; '
      '$n \\equiv 2$: $4 + 2 + 1 = 7 \\equiv 2$; $n \\equiv 3$: '
      '$9 + 3 + 1 = 13 \\equiv 3$; $n \\equiv 4$: $16 + 4 + 1 = 21 \\equiv 1$. '
      'Qoldiqlar toʻplami $\\{1; 3; 2; 3; 1\\}$ — nol yoʻq, demak boʻlinmaydi.',
      'Переберём все остатки $n$ по модулю $5$. При $n \\equiv 0$ выражение '
      '$\\equiv 1$; при $n \\equiv 1$: $1 + 1 + 1 = 3$; при $n \\equiv 2$: '
      '$4 + 2 + 1 = 7 \\equiv 2$; при $n \\equiv 3$: $9 + 3 + 1 = 13 \\equiv 3$; '
      'при $n \\equiv 4$: $16 + 4 + 1 = 21 \\equiv 1$. Множество остатков — '
      '$\\{1; 3; 2; 3; 1\\}$, нуля нет, значит не делится.'), 'D'),

  P(T('$100!$ sonida $3$ ning eng katta darajasini toping.',
      'Найдите наибольшую степень $3$, на которую делится $100!$.'),
    T('$3^{48}$', '$3^{48}$'),
    T('Lejandr formulasi: $v_3(100!) = \\left\\lfloor \\frac{100}{3} \\right\\rfloor '
      '+ \\left\\lfloor \\frac{100}{9} \\right\\rfloor + '
      '\\left\\lfloor \\frac{100}{27} \\right\\rfloor + '
      '\\left\\lfloor \\frac{100}{81} \\right\\rfloor = 33 + 11 + 3 + 1 = 48$. '
      'Keyingi had $\\left\\lfloor \\frac{100}{243} \\right\\rfloor = 0$.',
      'Формула Лежандра: $v_3(100!) = \\left\\lfloor \\frac{100}{3} \\right\\rfloor '
      '+ \\left\\lfloor \\frac{100}{9} \\right\\rfloor + '
      '\\left\\lfloor \\frac{100}{27} \\right\\rfloor + '
      '\\left\\lfloor \\frac{100}{81} \\right\\rfloor = 33 + 11 + 3 + 1 = 48$. '
      'Следующее слагаемое $\\left\\lfloor \\frac{100}{243} \\right\\rfloor = 0$.'),
    'F'),

  P(T('$xy = x + y + 3$ tenglamasining barcha natural yechimlarini toping.',
      'Найдите все натуральные решения уравнения $xy = x + y + 3$.'),
    T('$(2;5)$, $(3;3)$, $(5;2)$', '$(2;5)$, $(3;3)$, $(5;2)$'),
    T('Hamma hadni chapga oʻtkazamiz: $xy - x - y = 3$. Ikkala tomonga $1$ '
      'qoʻshamiz: $xy - x - y + 1 = 4$, yaʼni $(x - 1)(y - 1) = 4$. '
      '$x, y$ natural boʻlgani uchun $x - 1 \\ge 0$; koʻpaytma nolmas, demak '
      '$x - 1 \\in \\{1; 2; 4\\}$. Bu $(x;y) = (2;5), (3;3), (5;2)$ ni beradi.',
      'Перенесём всё влево: $xy - x - y = 3$. Прибавим к обеим частям $1$: '
      '$xy - x - y + 1 = 4$, то есть $(x - 1)(y - 1) = 4$. Так как $x, y$ '
      'натуральные, $x - 1 \\ge 0$; произведение ненулевое, значит '
      '$x - 1 \\in \\{1; 2; 4\\}$. Отсюда $(x;y) = (2;5), (3;3), (5;2)$.'), 'E'),

  P(T('$\\overline{abab}$ koʻrinishdagi har qanday toʻrt xonali son $101$ ga '
      'boʻlinishini isbotlang.',
      'Докажите, что любое четырёхзначное число вида $\\overline{abab}$ делится '
      'на $101$.'),
    T('Isbot quyida', 'Доказательство ниже'),
    T('Sonni $10$ ning darajalari orqali yozamiz: '
      '$\\overline{abab} = 1000a + 100b + 10a + b = 1010a + 101b$. '
      'Har ikkala had $101$ ga boʻlinadi, chunki $1010 = 101 \\cdot 10$. Demak '
      '$\\overline{abab} = 101(10a + b)$ — har doim $101$ ga boʻlinadi.',
      'Распишем число через степени $10$: '
      '$\\overline{abab} = 1000a + 100b + 10a + b = 1010a + 101b$. Оба слагаемых '
      'делятся на $101$, так как $1010 = 101 \\cdot 10$. Значит '
      '$\\overline{abab} = 101(10a + b)$ — всегда делится на $101$.'), 'D'),

  P(T('$\\gcd(n,\\, n + 6)$ qanday qiymatlarni qabul qilishi mumkin?',
      'Какие значения может принимать $\\gcd(n,\\, n + 6)$?'),
    T('$1, 2, 3, 6$', '$1, 2, 3, 6$'),
    T('$d = \\gcd(n, n+6)$ boʻlsin. U holda $d \\mid n$ va $d \\mid (n+6)$, demak '
      'chiziqli birikma xossasi boʻyicha $d \\mid \\bigl((n+6) - n\\bigr) = 6$. '
      'Shunday qilib $d \\in \\{1; 2; 3; 6\\}$, va har biriga erishiladi: '
      '$n = 1 \\Rightarrow d = 1$, $n = 2 \\Rightarrow d = 2$, '
      '$n = 3 \\Rightarrow d = 3$, $n = 6 \\Rightarrow d = 6$.',
      'Пусть $d = \\gcd(n, n+6)$. Тогда $d \\mid n$ и $d \\mid (n+6)$, значит по '
      'свойству линейной комбинации $d \\mid \\bigl((n+6) - n\\bigr) = 6$. Итак, '
      '$d \\in \\{1; 2; 3; 6\\}$, и каждое достигается: $n = 1 \\Rightarrow d = 1$, '
      '$n = 2 \\Rightarrow d = 2$, $n = 3 \\Rightarrow d = 3$, '
      '$n = 6 \\Rightarrow d = 6$.'), 'C'),
 ]),
]

DARAJALAR += [
 dict(kod='qiyin', nom=T('Qiyin', 'Трудные'), hue='hard',
  izoh=T('Toʻgʻri harakatni <b>tanlash</b> kerak. Bu masalalarning koʻpi '
         'haqiqiy variantlardan olingan.',
         'Нужно <b>выбрать</b> правильный приём. Большинство этих задач взяты из '
         'реальных вариантов.'),
  items=[

  P(T('$\\dfrac{n^3 + 3}{n + 1}$ butun boʻladigan barcha butun $n$ larni toping.',
      'Найдите все целые $n$, при которых $\\dfrac{n^3 + 3}{n + 1}$ — целое.'),
    T('$n \\in \\{-3;\\, -2;\\, 0;\\, 1\\}$', '$n \\in \\{-3;\\, -2;\\, 0;\\, 1\\}$'),
    T('$n^3 + 3$ ni $n + 1$ ga boʻlamiz. $n^3 + 1 = (n+1)(n^2 - n + 1)$ '
      'ekanidan foydalanamiz: $n^3 + 3 = (n+1)(n^2 - n + 1) + 2$. Demak '
      '$n + 1 \\mid 2$, yaʼni $n + 1 \\in \\{\\pm 1; \\pm 2\\}$ va '
      '$n \\in \\{0; -2; 1; -3\\}$. Tekshirish: $n = 1$ da $\\frac{4}{2} = 2$ ✓.',
      'Разделим $n^3 + 3$ на $n + 1$. Воспользуемся тем, что '
      '$n^3 + 1 = (n+1)(n^2 - n + 1)$: значит $n^3 + 3 = (n+1)(n^2 - n + 1) + 2$. '
      'Отсюда $n + 1 \\mid 2$, то есть $n + 1 \\in \\{\\pm 1; \\pm 2\\}$ и '
      '$n \\in \\{0; -2; 1; -3\\}$. Проверка: при $n = 1$ получаем '
      '$\\frac{4}{2} = 2$ ✓.'), 'E'),

  P(T('$a$ va $b$ natural sonlar uchun $4a - 7b + 28ab = 2020$. $ab$ ni toping.',
      'Для натуральных $a$ и $b$ выполнено $4a - 7b + 28ab = 2020$. Найдите $ab$.'),
    T('$ab = 96$', '$ab = 96$'),
    T('$a$ ni qavsga chiqaramiz: $4a(7b + 1) - 7b = 2020$. Endi $-7b$ ni '
      '$-(7b+1) + 1$ deb yozamiz: $4a(7b+1) - (7b+1) = 2019$, yaʼni '
      '$(4a - 1)(7b + 1) = 2019 = 3 \\cdot 673$ (ikkalasi ham tub).<br>'
      '$4a - 1$ soni $4$ ga boʻlganda har doim $3$ qoldiq qoldiradi. $2019$ ning '
      'boʻluvchilari $1, 3, 673, 2019$; ulardan $4$ ga boʻlganda $3$ qoldiq '
      'beradigani — $3$ va $2019$. Agar $4a - 1 = 2019$ boʻlsa $7b + 1 = 1$, '
      'yaʼni $b = 0$ — natural emas. Demak $4a - 1 = 3$: $a = 1$, '
      '$7b + 1 = 673$, $b = 96$. Javob: $ab = 96$.',
      'Вынесем $a$: $4a(7b + 1) - 7b = 2020$. Запишем $-7b$ как $-(7b+1) + 1$: '
      '$4a(7b+1) - (7b+1) = 2019$, то есть '
      '$(4a - 1)(7b + 1) = 2019 = 3 \\cdot 673$ (оба простые).<br>'
      'Число $4a - 1$ всегда даёт остаток $3$ при делении на $4$. Делители $2019$ — '
      '$1, 3, 673, 2019$; остаток $3$ по модулю $4$ дают $3$ и $2019$. Если '
      '$4a - 1 = 2019$, то $7b + 1 = 1$, то есть $b = 0$ — не натуральное. Значит '
      '$4a - 1 = 3$: $a = 1$, $7b + 1 = 673$, $b = 96$. Ответ: $ab = 96$.'),
    'E', '9-sinf · 2025/26-B №9'),

  P(T('$3x^2y - 12xy - 8y - 7 = 0$ tenglamasini qanoatlantiruvchi nechta butun '
      '$(x; y)$ juftlik bor?',
      'Сколько целых пар $(x; y)$ удовлетворяют уравнению $3x^2y - 12xy - 8y - 7 = 0$?'),
    T('$2$ ta: $(5; 1)$ va $(-1; 1)$', '$2$: $(5; 1)$ и $(-1; 1)$'),
    T('$y$ faqat birinchi darajada kiradi, shuning uchun uni qavsga chiqaramiz: '
      '$y(3x^2 - 12x - 8) = 7$. $7$ tub, demak $3x^2 - 12x - 8$ soni $7$ ning '
      'boʻluvchisi: $\\pm 1$ yoki $\\pm 7$. Toʻrtta holatni tekshiramiz:<br>'
      '$= 1$: $3x^2 - 12x - 9 = 0$, $x^2 - 4x - 3 = 0$, $D = 28$ — kvadrat emas;<br>'
      '$= -1$: $3x^2 - 12x - 7 = 0$, $D = 228$ — kvadrat emas;<br>'
      '$= 7$: $3x^2 - 12x - 15 = 0$, $x^2 - 4x - 5 = 0$, $(x-5)(x+1) = 0$ — '
      '$x = 5$ yoki $x = -1$, va $y = 1$;<br>'
      '$= -7$: $3x^2 - 12x - 1 = 0$, $D = 156$ — kvadrat emas.<br>'
      'Demak $2$ ta juftlik.',
      'Неизвестное $y$ входит только в первой степени, поэтому вынесем его: '
      '$y(3x^2 - 12x - 8) = 7$. Число $7$ простое, значит $3x^2 - 12x - 8$ — '
      'делитель $7$: $\\pm 1$ или $\\pm 7$. Проверяем четыре случая:<br>'
      '$= 1$: $3x^2 - 12x - 9 = 0$, $x^2 - 4x - 3 = 0$, $D = 28$ — не квадрат;<br>'
      '$= -1$: $3x^2 - 12x - 7 = 0$, $D = 228$ — не квадрат;<br>'
      '$= 7$: $3x^2 - 12x - 15 = 0$, $x^2 - 4x - 5 = 0$, $(x-5)(x+1) = 0$ — '
      '$x = 5$ или $x = -1$, и $y = 1$;<br>'
      '$= -7$: $3x^2 - 12x - 1 = 0$, $D = 156$ — не квадрат.<br>'
      'Итого $2$ пары.'), 'E', '10-sinf · 2025/26-B №12'),

  P(T('$9800$ sonining nechta toʻla kvadrat boʻluvchisi bor?',
      'Сколько у числа $9800$ делителей, являющихся полными квадратами?'),
    T('$8$ ta', '$8$'),
    T('$9800 = 2^3 \\cdot 5^2 \\cdot 7^2$. Boʻluvchi toʻla kvadrat boʻlishi uchun '
      'har bir tubning darajasi juft boʻlishi kerak: $2$ uchun $\\{0; 2\\}$, '
      '$5$ uchun $\\{0; 2\\}$, $7$ uchun $\\{0; 2\\}$. Tanlovlar mustaqil, demak '
      '$2 \\cdot 2 \\cdot 2 = 8$ ta.',
      '$9800 = 2^3 \\cdot 5^2 \\cdot 7^2$. Чтобы делитель был полным квадратом, '
      'показатель каждого простого должен быть чётным: для $2$ это $\\{0; 2\\}$, '
      'для $5$ — $\\{0; 2\\}$, для $7$ — $\\{0; 2\\}$. Выборы независимы, значит '
      '$2 \\cdot 2 \\cdot 2 = 8$.'), 'B', '11-sinf · 2025/26-A №3'),

  P(T('Barcha ikki xonali natural sonlar koʻpaytmasi $3^{\\,n}$ ga boʻlinadi. '
      '$n$ ning eng katta qiymatini toping.',
      'Произведение всех двузначных натуральных чисел делится на $3^{\\,n}$. '
      'Найдите наибольшее $n$.'),
    T('$n = 44$', '$n = 44$'),
    T('Koʻpaytma $= 10 \\cdot 11 \\cdots 99 = \\dfrac{99!}{9!}$. Lejandr '
      'formulasi boʻyicha<br>'
      '$v_3(99!) = 33 + 11 + 3 + 1 = 48$, &nbsp; $v_3(9!) = 3 + 1 = 4$.<br>'
      'Demak $v_3\\left(\\frac{99!}{9!}\\right) = 48 - 4 = 44$.',
      'Произведение равно $10 \\cdot 11 \\cdots 99 = \\dfrac{99!}{9!}$. По формуле '
      'Лежандра<br>'
      '$v_3(99!) = 33 + 11 + 3 + 1 = 48$, &nbsp; $v_3(9!) = 3 + 1 = 4$.<br>'
      'Значит $v_3\\left(\\frac{99!}{9!}\\right) = 48 - 4 = 44$.'),
    'F', '9-sinf · 2025/26-A №17'),

  P(T('$n$ natural son uchun $(n + 7) \\mid (n^2 + 5)$ boʻlsin. Barcha shunday '
      '$n$ larni toping.',
      'Пусть $n$ натуральное и $(n + 7) \\mid (n^2 + 5)$. Найдите все такие $n$.'),
    T('$n \\in \\{2;\\, 11;\\, 20;\\, 47\\}$', '$n \\in \\{2;\\, 11;\\, 20;\\, 47\\}$'),
    T('$n^2 + 5$ ni $n + 7$ ga boʻlamiz: '
      '$n^2 + 5 = (n + 7)(n - 7) + 54$. Demak $n + 7 \\mid 54$. '
      '$n \\ge 1$ boʻlgani uchun $n + 7 \\ge 8$, va $54$ ning $8$ dan katta yoki '
      'teng boʻluvchilari — $9, 18, 27, 54$. Bu '
      '$n = 2, 11, 20, 47$ ni beradi. Tekshirish: $n = 2$ da '
      '$\\frac{9}{9} = 1$ ✓.',
      'Разделим $n^2 + 5$ на $n + 7$: $n^2 + 5 = (n + 7)(n - 7) + 54$. Значит '
      '$n + 7 \\mid 54$. Так как $n \\ge 1$, имеем $n + 7 \\ge 8$, а делители '
      '$54$, не меньшие $8$, — это $9, 18, 27, 54$. Отсюда '
      '$n = 2, 11, 20, 47$. Проверка: при $n = 2$ получаем $\\frac{9}{9} = 1$ ✓.'),
    'E'),

  P(T('$20^{22}$ sonining toʻla kvadrat <b>yoki</b> toʻla kub boʻluvchilari '
      'nechta?',
      'Сколько у числа $20^{22}$ делителей, являющихся полным квадратом '
      '<b>или</b> полным кубом?'),
    T('$364$ ta', '$364$'),
    T('$20^{22} = (2^2 \\cdot 5)^{22} = 2^{44} \\cdot 5^{22}$.<br>'
      '<b>Kvadratlar:</b> darajalar juft — '
      '$\\left(\\frac{44}{2}+1\\right)\\left(\\frac{22}{2}+1\\right) = '
      '23 \\cdot 12 = 276$.<br>'
      '<b>Kublar:</b> darajalar $3$ ga karrali — '
      '$(14+1)(7+1) = 15 \\cdot 8 = 120$.<br>'
      '<b>Ikkalasi ham</b> = oltinchi darajalar: $(7+1)(3+1) = 8 \\cdot 4 = 32$.<br>'
      'Qoʻshib, kesishmani ayiramiz: $276 + 120 - 32 = 364$.',
      '$20^{22} = (2^2 \\cdot 5)^{22} = 2^{44} \\cdot 5^{22}$.<br>'
      '<b>Квадраты:</b> показатели чётные — '
      '$\\left(\\frac{44}{2}+1\\right)\\left(\\frac{22}{2}+1\\right) = '
      '23 \\cdot 12 = 276$.<br>'
      '<b>Кубы:</b> показатели кратны $3$ — $(14+1)(7+1) = 15 \\cdot 8 = 120$.<br>'
      '<b>И то и другое</b> = шестые степени: $(7+1)(3+1) = 8 \\cdot 4 = 32$.<br>'
      'Складываем и вычитаем пересечение: $276 + 120 - 32 = 364$.'),
    'G', '10-sinf · 2025/26-B №10'),

  P(T('$xyz = 12^4$ tenglikni qanoatlantiruvchi nechta $(x; y; z)$ natural '
      'uchlik bor? <i>($(1;2;3)$ va $(1;3;2)$ ikki xil hisoblanadi.)</i>',
      'Сколько троек натуральных чисел $(x; y; z)$ удовлетворяют равенству '
      '$xyz = 12^4$? <i>(Тройки $(1;2;3)$ и $(1;3;2)$ считаются различными.)</i>'),
    T('$675$ ta', '$675$'),
    T('$12^4 = (2^2 \\cdot 3)^4 = 2^8 \\cdot 3^4$. Har bir tubning darajasini '
      'uchta koʻpaytuvchi orasida mustaqil taqsimlaymiz.<br>'
      'Ikkiliklar: $\\alpha_1 + \\alpha_2 + \\alpha_3 = 8$ tenglamasining '
      'manfiy boʻlmagan yechimlari soni $\\dbinom{8+2}{2} = \\dbinom{10}{2} = 45$.<br>'
      'Uchliklar: $\\dbinom{4+2}{2} = \\dbinom{6}{2} = 15$.<br>'
      'Taqsimotlar bir-biridan mustaqil, demak jami $45 \\cdot 15 = 675$.',
      '$12^4 = (2^2 \\cdot 3)^4 = 2^8 \\cdot 3^4$. Распределяем показатель каждого '
      'простого между тремя множителями независимо.<br>'
      'Двойки: число неотрицательных решений $\\alpha_1 + \\alpha_2 + \\alpha_3 = 8$ '
      'равно $\\dbinom{8+2}{2} = \\dbinom{10}{2} = 45$.<br>'
      'Тройки: $\\dbinom{4+2}{2} = \\dbinom{6}{2} = 15$.<br>'
      'Распределения независимы, значит всего $45 \\cdot 15 = 675$.'),
    'G', '9-sinf · 2025/26-A №24'),
 ]),

 dict(kod='ancha', nom=T('Ancha qiyin', 'Потруднее'), hue='vhard',
  izoh=T('Ikkita harakat birga, yoki baholash bilan misolni birga talab '
         'qiladigan masala. 11-sinf shu qatorda ishlaydi.',
         'Два приёма вместе или задача, требующая и оценки, и примера. '
         '11 класс работает в этом ряду.'),
  items=[

  P(T('$p^2 - 2q^2 = 1$ tenglamasini qanoatlantiradigan nechta $(p; q)$ tub '
      'sonlar juftligi bor?',
      'Сколько пар простых чисел $(p; q)$ удовлетворяют уравнению $p^2 - 2q^2 = 1$?'),
    T('$1$ ta: $(3; 2)$', '$1$: $(3; 2)$'),
    T('Chap tomonni koʻpaytmaga keltiramiz: $(p-1)(p+1) = 2q^2$. '
      'Oʻng tomon juft, demak $p$ toq. Toq $p$ uchun $p - 1$ va $p + 1$ — '
      'ketma-ket kelgan ikkita juft son, ularning koʻpaytmasi $8$ ga boʻlinadi. '
      'Demak $8 \\mid 2q^2$, yaʼni $4 \\mid q^2$ va $q$ juft. Yagona juft tub — '
      '$q = 2$. U holda $p^2 = 1 + 8 = 9$, $p = 3$ — tub ✓. '
      'Javob: yagona juftlik $(3; 2)$.',
      'Разложим левую часть: $(p-1)(p+1) = 2q^2$. Правая часть чётна, значит $p$ '
      'нечётно. При нечётном $p$ числа $p - 1$ и $p + 1$ — два подряд идущих '
      'чётных, их произведение делится на $8$. Значит $8 \\mid 2q^2$, то есть '
      '$4 \\mid q^2$ и $q$ чётно. Единственное чётное простое — $q = 2$. Тогда '
      '$p^2 = 1 + 8 = 9$, $p = 3$ — простое ✓. Ответ: единственная пара $(3; 2)$.'),
    'E', '9-sinf · 2025/26-A №19'),

  P(T('$2^n + 1$ tub son boʻlsa, $n$ ning $2$ ning darajasi ekanini isbotlang.',
      'Докажите, что если $2^n + 1$ — простое число, то $n$ есть степень двойки.'),
    T('Isbot quyida', 'Доказательство ниже'),
    T('Faraz qilaylik, $n$ ning $1$ dan katta toq boʻluvchisi $m$ bor: '
      '$n = km$. U holda $2^n + 1 = (2^k)^m + 1^m$, va $m$ toq boʻlgani uchun '
      '$(a + b) \\mid (a^m + b^m)$ xossasi boʻyicha '
      '$(2^k + 1) \\mid (2^n + 1)$.<br>'
      'Bu yerda $m > 1$ dan $2^k + 1 < 2^n + 1$, va $k \\ge 1$ dan '
      '$2^k + 1 > 1$. Demak $2^n + 1$ ning $1$ dan ham, oʻzidan ham farqli '
      'boʻluvchisi bor — u tub emas. Qarama-qarshilik.<br>'
      'Shunday qilib $n$ ning toq boʻluvchisi yoʻq, yaʼni $n = 2^t$.',
      'Предположим, у $n$ есть нечётный делитель $m > 1$: $n = km$. Тогда '
      '$2^n + 1 = (2^k)^m + 1^m$, и так как $m$ нечётно, по свойству '
      '$(a + b) \\mid (a^m + b^m)$ получаем $(2^k + 1) \\mid (2^n + 1)$.<br>'
      'При этом из $m > 1$ следует $2^k + 1 < 2^n + 1$, а из $k \\ge 1$ — '
      '$2^k + 1 > 1$. Значит у $2^n + 1$ есть делитель, отличный и от $1$, и от '
      'самого числа — оно не простое. Противоречие.<br>'
      'Итак, у $n$ нет нечётных делителей, то есть $n = 2^t$.'), 'E'),

  P(T('$n^4 + 4$ tub son boʻladigan barcha natural $n$ larni toping.',
      'Найдите все натуральные $n$, при которых $n^4 + 4$ — простое число.'),
    T('Faqat $n = 1$ (bunda $n^4 + 4 = 5$)',
      'Только $n = 1$ (при этом $n^4 + 4 = 5$)'),
    T('Sofi Jermen ayniyatidan foydalanamiz. $b = 1$ da '
      '$a^4 + 4b^4 = (a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2)$, yaʼni<br>'
      '$n^4 + 4 = (n^2 + 2n + 2)(n^2 - 2n + 2)$.<br>'
      'Bu son tub boʻlishi uchun koʻpaytuvchilardan biri $1$ ga teng boʻlishi '
      'kerak. Katta koʻpaytuvchi $n^2 + 2n + 2 \\ge 5$, demak kichigi $1$ ga '
      'teng: $n^2 - 2n + 2 = 1 \\Rightarrow (n-1)^2 = 0 \\Rightarrow n = 1$. '
      'Tekshirish: $1 + 4 = 5$ — tub ✓.',
      'Воспользуемся тождеством Софи Жермен. При $b = 1$: '
      '$a^4 + 4b^4 = (a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2)$, то есть<br>'
      '$n^4 + 4 = (n^2 + 2n + 2)(n^2 - 2n + 2)$.<br>'
      'Чтобы число было простым, один из множителей должен равняться $1$. Больший '
      'множитель $n^2 + 2n + 2 \\ge 5$, значит меньший равен $1$: '
      '$n^2 - 2n + 2 = 1 \\Rightarrow (n-1)^2 = 0 \\Rightarrow n = 1$. Проверка: '
      '$1 + 4 = 5$ — простое ✓.'), 'E'),

  P(T('$2025!$ sonining oxirida nechta nol bor?',
      'Сколько нулей на конце числа $2025!$?'),
    T('$505$ ta', '$505$'),
    T('Oxirgi nollar soni $= \\min\\bigl(v_2(2025!),\\, v_5(2025!)\\bigr)$, va '
      'ikkiliklar har doim koʻproq, demak javob $v_5(2025!)$ ga teng:<br>'
      '$\\left\\lfloor \\frac{2025}{5} \\right\\rfloor = 405$, '
      '$\\left\\lfloor \\frac{2025}{25} \\right\\rfloor = 81$, '
      '$\\left\\lfloor \\frac{2025}{125} \\right\\rfloor = 16$, '
      '$\\left\\lfloor \\frac{2025}{625} \\right\\rfloor = 3$, '
      '$\\left\\lfloor \\frac{2025}{3125} \\right\\rfloor = 0$.<br>'
      'Yigʻindi: $405 + 81 + 16 + 3 = 505$.',
      'Число нулей равно $\\min\\bigl(v_2(2025!),\\, v_5(2025!)\\bigr)$, а двоек '
      'всегда больше, поэтому ответ равен $v_5(2025!)$:<br>'
      '$\\left\\lfloor \\frac{2025}{5} \\right\\rfloor = 405$, '
      '$\\left\\lfloor \\frac{2025}{25} \\right\\rfloor = 81$, '
      '$\\left\\lfloor \\frac{2025}{125} \\right\\rfloor = 16$, '
      '$\\left\\lfloor \\frac{2025}{625} \\right\\rfloor = 3$, '
      '$\\left\\lfloor \\frac{2025}{3125} \\right\\rfloor = 0$.<br>'
      'Сумма: $405 + 81 + 16 + 3 = 505$.'), 'F'),

  P(T('$m$ va $n$ oʻzaro tub natural sonlar. '
      '$\\gcd(30m + n,\; 15n + 2m)$ eng koʻpi bilan qanday qiymat qabul qilishi '
      'mumkin?',
      'Пусть $m$ и $n$ — взаимно простые натуральные числа. Какое наибольшее '
      'значение может принимать $\\gcd(30m + n,\; 15n + 2m)$?'),
    T('$448$', '$448$'),
    T('$d = \\gcd(30m + n,\; 15n + 2m)$ boʻlsin. $d$ ikkala ifodani boʻladi, '
      'demak ularning istalgan chiziqli birikmasini ham boʻladi.<br>'
      '<b>$n$ ni yoʻqotamiz:</b> $15(30m + n) - (15n + 2m) = 448m$.<br>'
      '<b>$m$ ni yoʻqotamiz:</b> $2(30m + n) - \\ldots$ oʻrniga '
      '$15n + 2m$ ni $15$ ga, $30m + n$ ni $1$ ga koʻpaytirib ayiramiz: '
      '$15(15n + 2m) - 30(30m+n) \\cdot \\ldots$ — soddaroq yoʻl: '
      '$d \\mid 448m$ va shunga oʻxshash $d \\mid 448n$.<br>'
      'Demak $d \\mid \\gcd(448m,\\, 448n) = 448 \\gcd(m, n) = 448$.<br>'
      '<b>Baho yetarli emas — misol kerak.</b> $448 = 2^6 \\cdot 7$. '
      '$m = 1$, $n = 418$ ni olsak: $30 + 418 = 448$ va '
      '$15 \\cdot 418 + 2 = 6272 = 448 \\cdot 14$, va $\\gcd(1, 418) = 1$. '
      'Demak $d = 448$ ga erishiladi.',
      'Пусть $d = \\gcd(30m + n,\; 15n + 2m)$. Число $d$ делит оба выражения, '
      'значит делит и любую их линейную комбинацию.<br>'
      '<b>Исключаем $n$:</b> $15(30m + n) - (15n + 2m) = 448m$.<br>'
      '<b>Аналогично исключаем $m$:</b> получаем $d \\mid 448n$.<br>'
      'Значит $d \\mid \\gcd(448m,\\, 448n) = 448 \\gcd(m, n) = 448$.<br>'
      '<b>Оценки мало — нужен пример.</b> $448 = 2^6 \\cdot 7$. Возьмём $m = 1$, '
      '$n = 418$: тогда $30 + 418 = 448$ и '
      '$15 \\cdot 418 + 2 = 6272 = 448 \\cdot 14$, причём $\\gcd(1, 418) = 1$. '
      'Значит значение $d = 448$ достигается.'),
    'C', '10-sinf · 2025/26-B №16'),

  P(T('$a$ va $b$ natural sonlar. $13a + 31b$ koʻrinishida kamida $3$ xil '
      'usulda yozish mumkin boʻlgan eng kichik sonni toping.',
      'Пусть $a$ и $b$ натуральные. Найдите наименьшее число, представимое в виде '
      '$13a + 31b$ не менее чем $3$ различными способами.'),
    T('$850$', '$850$'),
    T('$13a + 31b = N$ ning bitta yechimi $(a_0, b_0)$ boʻlsa, qolganlari '
      '$a = a_0 + 31t$, $b = b_0 - 13t$ koʻrinishda ($\\gcd(13, 31) = 1$). '
      'Ikkala son natural boʻlishi uchun $b \\ge 1$, yaʼni $b$ '
      '$13$ qadam bilan kamayadi va $a$ $31$ qadam bilan oʻsadi.<br>'
      'Uchta yechim boʻlishi uchun $b$ kamida uchta qiymat olishi kerak: '
      '$b_{\\min},\; b_{\\min} + 13,\; b_{\\min} + 26$ — eng kichigi $b = 1$ '
      'dan boshlaganda $b \\in \\{1; 14; 27\\}$. Mos $a$ lar ham natural '
      'boʻlishi uchun eng kichik $a = 1$ ni $b = 27$ ga bogʻlaymiz: '
      '$N = 13 \\cdot 1 + 31 \\cdot 27 = 13 + 837 = 850$.<br>'
      'Tekshirish: $850 = 13 \\cdot 1 + 31 \\cdot 27 = 13 \\cdot 32 + 31 \\cdot 14 '
      '= 13 \\cdot 63 + 31 \\cdot 1$ — aynan $3$ ta usul.',
      'Если $(a_0, b_0)$ — одно решение $13a + 31b = N$, то остальные имеют вид '
      '$a = a_0 + 31t$, $b = b_0 - 13t$ (так как $\\gcd(13, 31) = 1$). Чтобы оба '
      'числа были натуральными, $b \\ge 1$: значит $b$ убывает шагом $13$, а $a$ '
      'растёт шагом $31$.<br>'
      'Для трёх решений $b$ должно принимать не менее трёх значений: '
      '$b_{\\min},\; b_{\\min} + 13,\; b_{\\min} + 26$ — при старте с $b = 1$ это '
      '$b \\in \\{1; 14; 27\\}$. Чтобы и соответствующие $a$ были натуральными, '
      'свяжем наименьшее $a = 1$ с $b = 27$: '
      '$N = 13 \\cdot 1 + 31 \\cdot 27 = 13 + 837 = 850$.<br>'
      'Проверка: $850 = 13 \\cdot 1 + 31 \\cdot 27 = 13 \\cdot 32 + 31 \\cdot 14 '
      '= 13 \\cdot 63 + 31 \\cdot 1$ — ровно $3$ способа.'),
    'C', '10-sinf · 2025/26-A №26'),

  P(T('$F(n) = n^5 + 3n^3 - 4n$ boʻlsa, '
      '$\\gcd\\bigl(F(2);\\, F(3);\\, \\dots;\\, F(20)\\bigr)$ ni toping.',
      'Пусть $F(n) = n^5 + 3n^3 - 4n$. Найдите '
      '$\\gcd\\bigl(F(2);\\, F(3);\\, \\dots;\\, F(20)\\bigr)$.'),
    T('$24$', '$24$'),
    T('Avval koʻpaytmaga keltiramiz: '
      '$F(n) = n(n^4 + 3n^2 - 4) = n(n^2 + 4)(n^2 - 1) = (n-1)\\,n\\,(n+1)(n^2+4)$.<br>'
      '<b>$3$ ga boʻlinadi:</b> $(n-1)n(n+1)$ — ketma-ket uchta son.<br>'
      '<b>$8$ ga boʻlinadi:</b> agar $n$ juft, $n = 2k$ boʻlsa '
      '$n(n^2+4) = 2k \\cdot 4(k^2+1) = 8k(k^2+1)$; agar $n$ toq boʻlsa, '
      '$(n-1)$ va $(n+1)$ ketma-ket juft sonlar, koʻpaytmasi $8$ ga boʻlinadi.<br>'
      '$\\gcd(8, 3) = 1$, demak har bir $F(n)$ soni $24$ ga boʻlinadi.<br>'
      '<b>Aniq $24$ ekanini koʻrsatamiz:</b> $F(2) = 1 \\cdot 2 \\cdot 3 \\cdot 8 = 48$ '
      'va $F(3) = 2 \\cdot 3 \\cdot 4 \\cdot 13 = 312$, '
      '$\\gcd(48, 312) = 24$. Demak EKUB aynan $24$.',
      'Сначала разложим: '
      '$F(n) = n(n^4 + 3n^2 - 4) = n(n^2 + 4)(n^2 - 1) = (n-1)\\,n\\,(n+1)(n^2+4)$.<br>'
      '<b>Делится на $3$:</b> $(n-1)n(n+1)$ — три подряд идущих числа.<br>'
      '<b>Делится на $8$:</b> если $n$ чётно, $n = 2k$, то '
      '$n(n^2+4) = 2k \\cdot 4(k^2+1) = 8k(k^2+1)$; если $n$ нечётно, то $(n-1)$ и '
      '$(n+1)$ — подряд идущие чётные, их произведение делится на $8$.<br>'
      'Так как $\\gcd(8, 3) = 1$, каждое $F(n)$ делится на $24$.<br>'
      '<b>Покажем, что ровно $24$:</b> $F(2) = 1 \\cdot 2 \\cdot 3 \\cdot 8 = 48$ и '
      '$F(3) = 2 \\cdot 3 \\cdot 4 \\cdot 13 = 312$, $\\gcd(48, 312) = 24$. Значит '
      'НОД равен именно $24$.'),
    'A', '10-sinf · 2025/26-A №24'),

  P(T('$a, b, c$ — turli raqamlar, $\\overline{aabc}$ — toʻrt xonali son va '
      '$\\overline{aabc} = (a + b + c)^3$. $a + b - c$ ni hisoblang.',
      '$a, b, c$ — различные цифры, $\\overline{aabc}$ — четырёхзначное число и '
      '$\\overline{aabc} = (a + b + c)^3$. Вычислите $a + b - c$.'),
    T('$5$', '$5$'),
    T('$\\overline{aabc}$ toʻrt xonali, demak '
      '$1000 \\le (a+b+c)^3 \\le 9999$, yaʼni $10 \\le a+b+c \\le 21$.<br>'
      'Shu oraliqdagi kublar: $1000, 1331, 1728, 2197, 2744, 3375, 4096, 4913, '
      '5832, 6859, 8000, 9261$.<br>'
      'Bizga <b>birinchi ikki raqami bir xil</b> boʻlgani kerak. Roʻyxatni '
      'koʻzdan kechirsak, faqat $3375$ mos keladi: $a = 3$, $b = 7$, $c = 5$.<br>'
      'Tekshirish: $a + b + c = 15$ va $15^3 = 3375$ ✓, raqamlar turli ✓.<br>'
      'Javob: $a + b - c = 3 + 7 - 5 = 5$.',
      'Число $\\overline{aabc}$ четырёхзначное, значит '
      '$1000 \\le (a+b+c)^3 \\le 9999$, то есть $10 \\le a+b+c \\le 21$.<br>'
      'Кубы в этом промежутке: $1000, 1331, 1728, 2197, 2744, 3375, 4096, 4913, '
      '5832, 6859, 8000, 9261$.<br>'
      'Нужно, чтобы <b>первые две цифры совпадали</b>. Просмотрев список, находим '
      'единственное подходящее: $3375$, то есть $a = 3$, $b = 7$, $c = 5$.<br>'
      'Проверка: $a + b + c = 15$ и $15^3 = 3375$ ✓, цифры различны ✓.<br>'
      'Ответ: $a + b - c = 3 + 7 - 5 = 5$.'),
    'G', '11-sinf · 2024 №26'),
 ]),
]
