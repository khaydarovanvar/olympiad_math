# -*- coding: utf-8 -*-
"""Birlashgan olimpiada darsi — 9, 10 va 11-sinflar birga.

Mavzu: boʻlinish masalalarini koʻpaytmaga keltirib yechish. Uchala sinfning
variantlarida sonlar nazariyasi savollarning beshdan birini beradi (9-sinf
24,7 %, 10-sinf 20,0 %, 11-sinf 18,3 %), va oʻsha savollarning deyarli
hammasini toʻrtta harakat yopadi. Harakatlarning hammasi 9-sinf algebrasidan
nariga chiqmaydi — shuning uchun uch sinfni bitta xonada oʻqitish mumkin:
qiyinlik mavzudan emas, masaladan keladi.

Har bir javob yozilishidan oldin kompyuterda tekshirilgan.

$...$ — KaTeX.
"""

T = lambda uz, ru: (uz, ru)

CHROME = dict(
 title=T('Birlashgan dars · 9–11-sinf', 'Объединённый урок · 9–11 классы'),
 eyebrow=T('Olimpiadaga tayyorgarlik · tuman (shahar) bosqichi',
           'Подготовка к олимпиаде · районный (городской) этап'),
 h1=T('Koʻpaytmaga keltiring', 'Сведите к произведению'),
 sub=T('Boʻlinish masalalarining toʻrtta harakati — 9-, 10- va 11-sinf uchun '
       'bitta dars.',
       'Четыре приёма для задач на делимость — один урок для 9, 10 и 11 классов.'),
 spec=[T('<b>90</b> daqiqa', '<b>90</b> минут'),
       T('<b>4</b> ta harakat', '<b>4</b> приёма'),
       T('<b>14</b> masala', '<b>14</b> задач'),
       T('9–11-sinf birga', '9–11 классы вместе')],
)

# Why the three grades merge here: number theory's share of each real paper.
WEIGHTS = [
 (T('9-sinf', '9 класс'), 22, 24.7),
 (T('10-sinf', '10 класс'), 18, 20.0),
 (T('11-sinf', '11 класс'), 11, 18.3),
]

WHY = T(
 'Uchala variantda ham sonlar nazariyasi — savollarning beshdan biri. Lekin '
 'muhimi shu: bu savollarning deyarli hammasi <b>bitta gʻoyaga</b> boʻysunadi — '
 'ifodani koʻpaytmaga keltir, keyin boʻluvchilarni sanab chiq. Bu gʻoya uchun '
 'logarifm ham, hosila ham kerak emas; 9-sinf algebrasi yetarli. Shuning uchun '
 'uch sinfni birga oʻtirgizish mumkin: <b>nazariya bitta, masala turlicha.</b> '
 '11-sinf oʻquvchisi 9-sinf masalasini tez yechadi va oʻzining “ancha qiyin” '
 'qatoriga oʻtadi; 9-sinf oʻquvchisi esa 11-sinf variantidagi masala oʻzi '
 'bilgan harakatga tushishini koʻradi — bu eng kuchli motivatsiya.',
 'Во всех трёх вариантах теория чисел — пятая часть задач. Но важнее другое: '
 'почти все они подчиняются <b>одной идее</b> — свести выражение к произведению, '
 'а дальше перебрать делители. Для этой идеи не нужны ни логарифмы, ни '
 'производная; хватает алгебры 9 класса. Поэтому три класса можно посадить '
 'вместе: <b>теория одна, задачи разные.</b> Одиннадцатиклассник быстро решит '
 'задачу 9 класса и перейдёт к своему ряду «потруднее»; девятиклассник увидит, '
 'что задача из варианта 11 класса сводится к уже знакомому приёму — сильнее '
 'мотивации не бывает.')

# The four moves. Each is taught once from a worked model taken from a real
# paper of one grade, then practised on a problem from another grade.
MOVES = [
 dict(kod='1', hue='nt',
  nom=T('Butun qismni ajrating', 'Выделите целую часть'),
  qoida=T(
   'Agar $\\dfrac{A(n)}{B(n)}$ butun boʻlishi kerak boʻlsa, boʻlishni bajaring: '
   '$\\dfrac{A}{B} = Q + \\dfrac{r}{B}$. Endi $B \\mid r$ — va $r$ '
   '<b>oʻzgarmas son</b>. Boʻluvchilar roʻyxati chekli, demak javob ham chekli.',
   'Если $\\dfrac{A(n)}{B(n)}$ должно быть целым, выполните деление: '
   '$\\dfrac{A}{B} = Q + \\dfrac{r}{B}$. Тогда $B \\mid r$, где $r$ — '
   '<b>константа</b>. Список делителей конечен, значит и ответ конечен.'),
  misol=T(
   '<b>9-sinf, 2025/26-A №2.</b> $\\dfrac{n^2-3}{n-2}$ qachon butun? '
   'Boʻlamiz: $\\dfrac{n^2-3}{n-2} = n+2+\\dfrac{1}{n-2}$. Demak '
   '$n-2 \\mid 1$, yaʼni $n-2=\\pm1$ va $n \\in \\{1;\\,3\\}$ — <b>2 ta</b> qiymat.',
   '<b>9 класс, 2025/26-A №2.</b> Когда $\\dfrac{n^2-3}{n-2}$ целое? '
   'Делим: $\\dfrac{n^2-3}{n-2} = n+2+\\dfrac{1}{n-2}$. Значит '
   '$n-2 \\mid 1$, то есть $n-2=\\pm1$ и $n \\in \\{1;\\,3\\}$ — <b>2</b> значения.'),
  hiyla=T(
   'Agar boʻluvchida koeffitsiyent turgan boʻlsa, avval butun songa koʻpaytiring: '
   '$\\dfrac{35+2n}{3n+1}$ da uchga koʻpaytirsak $2+\\dfrac{103}{3n+1}$ chiqadi, '
   'va $103$ tub son. Bu — 10-sinf 2024 №27.',
   'Если в знаменателе стоит коэффициент, сначала домножьте на целое: в '
   '$\\dfrac{35+2n}{3n+1}$ умножение на три даёт $2+\\dfrac{103}{3n+1}$, а '
   '$103$ — простое. Это задача 10 класса, 2024 №27.')),

 dict(kod='2', hue='alg',
  nom=T('Guruhlab koʻpaytma yasang', 'Сгруппируйте в произведение'),
  qoida=T(
   'Ikki nomaʼlumli tenglamada hadlarni shunday guruhlangki, '
   '$(\\,\\cdot\\,)(\\,\\cdot\\,) = N$ koʻrinish chiqsin. Koʻpincha ikkala '
   'tomonga kichik bir son qoʻshish kifoya. Keyin $N$ ning har bir boʻluvchisi — '
   'bitta holat.',
   'В уравнении с двумя неизвестными сгруппируйте слагаемые так, чтобы получилось '
   '$(\\,\\cdot\\,)(\\,\\cdot\\,) = N$. Часто достаточно прибавить к обеим частям '
   'небольшое число. Затем каждый делитель $N$ — отдельный случай.'),
  misol=T(
   '<b>9-sinf, 2025/26-B №9.</b> $4a-7b+28ab=2020$. Guruhlaymiz: '
   '$4a(7b+1)-(7b+1)=2019$, yaʼni $(4a-1)(7b+1)=2019=3\\cdot673$. '
   '$4a-1$ har doim $4$ ga boʻlganda $3$ qoldiq beradi, shuning uchun faqat '
   '$4a-1=3$ mos keladi: $a=1$, $7b+1=673$, $b=96$. Demak $ab=\\mathbf{96}$.',
   '<b>9 класс, 2025/26-B №9.</b> $4a-7b+28ab=2020$. Группируем: '
   '$4a(7b+1)-(7b+1)=2019$, то есть $(4a-1)(7b+1)=2019=3\\cdot673$. '
   'Число $4a-1$ всегда даёт остаток $3$ при делении на $4$, поэтому подходит '
   'только $4a-1=3$: $a=1$, $7b+1=673$, $b=96$. Значит $ab=\\mathbf{96}$.'),
  hiyla=T(
   'Agar bitta nomaʼlum faqat birinchi darajada kirsa, uni qavsga chiqaring: '
   '$3x^2y-12xy-8y=7$ dan $y(3x^2-12x-8)=7$, va $7$ tub. Bu — 10-sinf '
   '2025/26-B №12.',
   'Если одно неизвестное входит только в первой степени, вынесите его: из '
   '$3x^2y-12xy-8y=7$ получаем $y(3x^2-12x-8)=7$, а $7$ простое. Это 10 класс, '
   '2025/26-B №12.')),

 dict(kod='3', hue='geo',
  nom=T('Boʻluvchilarni sanang', 'Сосчитайте делители'),
  qoida=T(
   'Agar $n=p_1^{\\alpha_1}\\cdots p_k^{\\alpha_k}$ boʻlsa, '
   '$\\tau(n)=(\\alpha_1+1)\\cdots(\\alpha_k+1)$. Shartli boʻluvchilar ham '
   'shu yerdan: <b>toʻla kvadrat</b> boʻluvchi uchun har bir daraja juft, '
   '<b>toʻla kub</b> uchun $3$ ga karrali.',
   'Если $n=p_1^{\\alpha_1}\\cdots p_k^{\\alpha_k}$, то '
   '$\\tau(n)=(\\alpha_1+1)\\cdots(\\alpha_k+1)$. Отсюда же и условные делители: '
   'у делителя-<b>квадрата</b> каждый показатель чётный, у делителя-<b>куба</b> '
   'кратен $3$.'),
  misol=T(
   '<b>11-sinf, 2025/26-A №3.</b> $9800=2^3\\cdot5^2\\cdot7^2$. Toʻla kvadrat '
   'boʻluvchida darajalar juft: $2$ uchun $\\{0;2\\}$, $5$ uchun $\\{0;2\\}$, '
   '$7$ uchun $\\{0;2\\}$ — jami $2\\cdot2\\cdot2=\\mathbf{8}$ ta.',
   '<b>11 класс, 2025/26-A №3.</b> $9800=2^3\\cdot5^2\\cdot7^2$. У делителя-'
   'квадрата показатели чётные: для $2$ это $\\{0;2\\}$, для $5$ — $\\{0;2\\}$, '
   'для $7$ — $\\{0;2\\}$ — всего $2\\cdot2\\cdot2=\\mathbf{8}$.'),
  hiyla=T(
   '“Kvadrat <b>yoki</b> kub” soʻralsa — qoʻshib, oltinchi darajalarni ayiring '
   '(ular ikki marta sanaladi). Bu — 10-sinf 2025/26-B №10.',
   'Если спрашивают «квадрат <b>или</b> куб» — сложите и вычтите шестые степени '
   '(они посчитаны дважды). Это 10 класс, 2025/26-B №10.')),

 dict(kod='4', hue='comb',
  nom=T('Koʻpaytmadagi tub darajani sanang', 'Считайте степень простого в произведении'),
  qoida=T(
   'Lejandr formulasi: $n!$ da $p$ tub sonning darajasi '
   '$v_p(n!)=\\left\\lfloor\\frac{n}{p}\\right\\rfloor+'
   '\\left\\lfloor\\frac{n}{p^2}\\right\\rfloor+\\cdots$ — boʻlinmalar nolga '
   'aylanguncha. Koʻpaytma $n!$ koʻrinishida boʻlmasa, uni ikkita faktorialning '
   'nisbati sifatida yozing.',
   'Формула Лежандра: степень простого $p$ в $n!$ равна '
   '$v_p(n!)=\\left\\lfloor\\frac{n}{p}\\right\\rfloor+'
   '\\left\\lfloor\\frac{n}{p^2}\\right\\rfloor+\\cdots$ — пока частные не станут '
   'нулём. Если произведение не есть $n!$, запишите его как отношение двух '
   'факториалов.'),
  misol=T(
   '<b>9-sinf, 2025/26-A №17.</b> Barcha ikki xonali sonlar koʻpaytmasi '
   '$=\\dfrac{99!}{9!}$. Unda '
   '$v_3=\\bigl(33+11+3+1\\bigr)-\\bigl(3+1\\bigr)=48-4=\\mathbf{44}$.',
   '<b>9 класс, 2025/26-A №17.</b> Произведение всех двузначных чисел равно '
   '$\\dfrac{99!}{9!}$. Тогда '
   '$v_3=\\bigl(33+11+3+1\\bigr)-\\bigl(3+1\\bigr)=48-4=\\mathbf{44}$.'),
  hiyla=T(
   'Oxiridagi nollar soni — bu $v_5(n!)$, chunki ikkiliklar har doim koʻproq.',
   'Число нулей на конце — это $v_5(n!)$, потому что двоек всегда больше.')),
]

# 90 minutes, and how to cut it to 60.
REJA = [
 (T('0–10', '0–10'), T('Nega birga', 'Почему вместе'),
  T('Uchala variantdagi ulushni doskaga chizing. Savol bering: “bu uchta masala '
    'qaysi sinfniki?” — hech kim ajrata olmaydi. Dars shu yerdan boshlanadi.',
    'Нарисуйте на доске доли по трём вариантам. Задайте вопрос: «из какого класса '
    'эти три задачи?» — никто не различит. С этого урок и начинается.')),
 (T('10–30', '10–30'), T('1- va 2-harakat', 'Приёмы 1 и 2'),
  T('Ikkala namunani toʻliq yozing. 2-harakatda guruhlashni <b>oʻquvchilar</b> '
    'topsin — faqat “ikkala tomonga nima qoʻshsak koʻpaytma chiqadi?” deb soʻrang.',
    'Разберите оба образца полностью. В приёме 2 пусть группировку найдут '
    '<b>ученики</b> — просто спросите: «что прибавить к обеим частям, чтобы вышло '
    'произведение?»')),
 (T('30–45', '30–45'), T('3- va 4-harakat', 'Приёмы 3 и 4'),
  T('$\\tau(n)$ ni bir marta chiqaring, keyin darhol shartli boʻluvchilarga '
    'oʻting. Lejandr formulasiga $10$ daqiqa yetadi.',
    'Выведите $\\tau(n)$ один раз и сразу переходите к условным делителям. На '
    'Лежандра хватит $10$ минут.')),
 (T('45–75', '45–75'), T('Mustaqil ish', 'Самостоятельная работа'),
  T('Varaqani tarqating. <b>Hamma</b> “Qiyin” qatordan boshlaydi — 9-sinf ham, '
    '11-sinf ham. Kim 4 tasini yechdi, “Ancha qiyin” ga oʻtadi.',
    'Раздайте листок. <b>Все</b> начинают с ряда «Трудные» — и 9, и 11 класс. Кто '
    'решил 4 задачи, переходит к ряду «Потруднее».')),
 (T('75–90', '75–90'), T('Tahlil', 'Разбор'),
  T('V1 va V2 ni doskada yeching — ular 3-harakatning eng toʻliq koʻrinishi. '
    'Qolganini uyga bering.',
    'Разберите у доски V1 и V2 — это самое полное применение приёма 3. Остальное '
    'задайте на дом.')),
]

QISQA = T(
 '<b>60 daqiqada oʻtish kerak boʻlsa:</b> 4-harakatni (Lejandr) tashlab keting '
 'va H6, V5 ni uyga bering. Qolgan uchta harakat variantdagi sonlar nazariyasi '
 'savollarining taxminan $80\\,\\%$ ini yopadi.',
 '<b>Если урок только 60 минут:</b> пропустите приём 4 (Лежандр) и задайте H6 и '
 'V5 на дом. Оставшиеся три приёма закрывают около $80\\,\\%$ задач по теории '
 'чисел в варианте.')

BIRGA = T(
 'Bitta xonada uch sinf: <b>juftlab oʻtqazing</b> — har bir 9-sinf oʻquvchisi '
 'yoniga bitta 10- yoki 11-sinf. Kattasi yechib bermaydi, faqat “qaysi harakat?” '
 'degan savolga javob beradi. Shunda kuchli oʻquvchi ham ishlaydi: tushuntirish '
 'yechishdan qiyinroq.',
 'Три класса в одной комнате: <b>рассадите парами</b> — рядом с каждым '
 'девятиклассником один ученик 10 или 11 класса. Старший не решает за младшего, '
 'а только отвечает на вопрос «какой приём?». Тогда и сильный ученик работает: '
 'объяснить труднее, чем решить.')


# ---------------------------------------------------------------- masalalar --
# Har bir masalada: savol, javob, yechim, va qaysi harakat kerakligi.
# "manba" — haqiqiy variantdan olingan boʻlsa, oʻsha variant.

def P(savol, javob, yechim, harakat, manba=''):
    return dict(savol=savol, javob=javob, yechim=yechim, harakat=harakat, manba=manba)


QIYIN = [
 P(T('$n$ butun sonning nechta qiymatida $\\dfrac{n^2-3}{n-2}$ butun boʻladi?',
     'При скольких целых $n$ значение $\\dfrac{n^2-3}{n-2}$ целое?'),
   T('$2$ ta: $n=1$ va $n=3$', '$2$: $n=1$ и $n=3$'),
   T('$\\dfrac{n^2-3}{n-2}=n+2+\\dfrac{1}{n-2}$, demak $n-2\\mid 1$ va '
     '$n-2=\\pm1$.',
     '$\\dfrac{n^2-3}{n-2}=n+2+\\dfrac{1}{n-2}$, значит $n-2\\mid 1$ и '
     '$n-2=\\pm1$.'), '1', '9-sinf · 2025/26-A №2'),

 P(T('$\\dfrac{35+2n}{3n+1}$ ifoda butun son boʻladigan barcha natural $n$ lar '
     'nechta?',
     'Сколько существует натуральных $n$, при которых $\\dfrac{35+2n}{3n+1}$ — '
     'целое число?'),
   T('$1$ ta: $n=34$', '$1$: $n=34$'),
   T('Uchga koʻpaytiramiz: $\\dfrac{105+6n}{3n+1}=2+\\dfrac{103}{3n+1}$. '
     '$103$ tub, shuning uchun $3n+1=103$, $n=34$. ($3n+1=1$ da $n=0$ — natural '
     'emas.)',
     'Умножаем на три: $\\dfrac{105+6n}{3n+1}=2+\\dfrac{103}{3n+1}$. Число $103$ '
     'простое, поэтому $3n+1=103$, $n=34$. (При $3n+1=1$ выходит $n=0$ — не '
     'натуральное.)'), '1', '10-sinf · 2024 №27'),

 P(T('$a$ va $b$ natural sonlar uchun $4a-7b+28ab=2020$. $ab$ ni toping.',
     'Для натуральных $a$ и $b$ выполнено $4a-7b+28ab=2020$. Найдите $ab$.'),
   T('$ab=96$', '$ab=96$'),
   T('$4a(7b+1)-(7b+1)=2019$, yaʼni $(4a-1)(7b+1)=2019=3\\cdot673$. '
     '$4a-1\\equiv3\\pmod 4$, shuning uchun $4a-1=3$: $a=1$, $b=96$.',
     '$4a(7b+1)-(7b+1)=2019$, то есть $(4a-1)(7b+1)=2019=3\\cdot673$. '
     '$4a-1\\equiv3\\pmod 4$, поэтому $4a-1=3$: $a=1$, $b=96$.'),
   '2', '9-sinf · 2025/26-B №9'),

 P(T('$9800$ sonining nechta toʻla kvadrat boʻluvchisi bor?',
     'Сколько у числа $9800$ делителей, являющихся полными квадратами?'),
   T('$8$ ta', '$8$'),
   T('$9800=2^3\\cdot5^2\\cdot7^2$. Kvadrat boʻluvchida darajalar juft: har bir '
     'tub uchun $\\{0;2\\}$ — $2\\cdot2\\cdot2=8$.',
     '$9800=2^3\\cdot5^2\\cdot7^2$. У делителя-квадрата показатели чётные: для '
     'каждого простого $\\{0;2\\}$ — $2\\cdot2\\cdot2=8$.'),
   '3', '11-sinf · 2025/26-A №3'),

 P(T('$648\\,000$ sonining nechta toʻla kub boʻluvchisi bor?',
     'Сколько у числа $648\\,000$ делителей, являющихся полными кубами?'),
   T('$12$ ta', '$12$'),
   T('$648\\,000=2^6\\cdot3^4\\cdot5^3$. Kub boʻluvchida darajalar $3$ ga '
     'karrali: $2$ uchun $\\{0;3;6\\}$, $3$ uchun $\\{0;3\\}$, $5$ uchun '
     '$\\{0;3\\}$ — $3\\cdot2\\cdot2=12$.',
     '$648\\,000=2^6\\cdot3^4\\cdot5^3$. У делителя-куба показатели кратны $3$: '
     'для $2$ это $\\{0;3;6\\}$, для $3$ — $\\{0;3\\}$, для $5$ — $\\{0;3\\}$ — '
     '$3\\cdot2\\cdot2=12$.'), '3'),

 P(T('Barcha ikki xonali natural sonlar koʻpaytmasi $3^{\\,n}$ ga boʻlinadi. '
     '$n$ ning eng katta qiymatini toping.',
     'Произведение всех двузначных натуральных чисел делится на $3^{\\,n}$. '
     'Найдите наибольшее $n$.'),
   T('$n=44$', '$n=44$'),
   T('Koʻpaytma $=\\dfrac{99!}{9!}$, demak '
     '$v_3=(33+11+3+1)-(3+1)=48-4=44$.',
     'Произведение равно $\\dfrac{99!}{9!}$, поэтому '
     '$v_3=(33+11+3+1)-(3+1)=48-4=44$.'), '4', '9-sinf · 2025/26-A №17'),

 P(T('$3x^2y-12xy-8y-7=0$ tenglamani qanoatlantiruvchi nechta butun $(x;y)$ '
     'juftlik bor?',
     'Сколько целых пар $(x;y)$ удовлетворяют уравнению $3x^2y-12xy-8y-7=0$?'),
   T('$2$ ta: $(5;1)$ va $(-1;1)$', '$2$: $(5;1)$ и $(-1;1)$'),
   T('$y(3x^2-12x-8)=7$. $7$ tub, shuning uchun $3x^2-12x-8\\in\\{\\pm1;\\pm7\\}$. '
     'Faqat $3x^2-12x-8=7$ butun ildiz beradi: $x^2-4x-5=0$, $x=5$ yoki $x=-1$, '
     'har ikkalasida $y=1$.',
     '$y(3x^2-12x-8)=7$. Число $7$ простое, поэтому '
     '$3x^2-12x-8\\in\\{\\pm1;\\pm7\\}$. Целые корни даёт только '
     '$3x^2-12x-8=7$: $x^2-4x-5=0$, $x=5$ или $x=-1$, и в обоих случаях $y=1$.'),
   '2', '10-sinf · 2025/26-B №12'),

 P(T('$\\dfrac{n^3+5}{n+1}$ butun boʻladigan barcha butun $n$ larni toping.',
     'Найдите все целые $n$, при которых $\\dfrac{n^3+5}{n+1}$ — целое число.'),
   T('$n\\in\\{-5;-3;-2;0;1;3\\}$ — $6$ ta',
     '$n\\in\\{-5;-3;-2;0;1;3\\}$ — $6$ значений'),
   T('$n^3+5=(n+1)(n^2-n+1)+4$, demak $n+1\\mid 4$ va '
     '$n+1\\in\\{\\pm1;\\pm2;\\pm4\\}$.',
     '$n^3+5=(n+1)(n^2-n+1)+4$, значит $n+1\\mid 4$ и '
     '$n+1\\in\\{\\pm1;\\pm2;\\pm4\\}$.'), '1'),
]

ANCHA_QIYIN = [
 P(T('$xyz=12^4$ tenglikni qanoatlantiruvchi nechta $(x;y;z)$ natural uchlik '
     'bor? *($(1;2;3)$ va $(1;3;2)$ ikki xil hisoblanadi.)*',
     'Сколько троек натуральных чисел $(x;y;z)$ удовлетворяют равенству '
     '$xyz=12^4$? *(Тройки $(1;2;3)$ и $(1;3;2)$ считаются различными.)*'),
   T('$675$ ta', '$675$'),
   T('$12^4=2^8\\cdot3^4$. Har bir tubning darajasini uchta koʻpaytuvchiga '
     'taqsimlaymiz: $2$ uchun $\\binom{8+2}{2}=45$, $3$ uchun '
     '$\\binom{4+2}{2}=15$. Jami $45\\cdot15=675$.',
     '$12^4=2^8\\cdot3^4$. Распределяем показатель каждого простого между тремя '
     'множителями: для $2$ это $\\binom{8+2}{2}=45$, для $3$ — '
     '$\\binom{4+2}{2}=15$. Всего $45\\cdot15=675$.'),
   '3', '9-sinf · 2025/26-A №24'),

 P(T('$20^{22}$ sonining toʻla kvadrat <b>yoki</b> toʻla kub boʻluvchilari '
     'nechta?',
     'Сколько у числа $20^{22}$ делителей, являющихся полным квадратом '
     '<b>или</b> полным кубом?'),
   T('$364$ ta', '$364$'),
   T('$20^{22}=2^{44}\\cdot5^{22}$. Kvadratlar: $23\\cdot12=276$. Kublar: '
     '$15\\cdot8=120$. Ikkalasi ham — oltinchi darajalar: $8\\cdot4=32$. '
     'Qoʻshib, kesishmani ayiramiz: $276+120-32=364$.',
     '$20^{22}=2^{44}\\cdot5^{22}$. Квадратов: $23\\cdot12=276$. Кубов: '
     '$15\\cdot8=120$. И то и другое — шестые степени: $8\\cdot4=32$. Складываем '
     'и вычитаем пересечение: $276+120-32=364$.'),
   '3', '10-sinf · 2025/26-B №10'),

 P(T('$p^2-2q^2=1$ tenglamani qanoatlantiradigan nechta $(p;q)$ tub sonlar '
     'juftligi bor?',
     'Сколько пар простых чисел $(p;q)$ удовлетворяют уравнению $p^2-2q^2=1$?'),
   T('$1$ ta: $(3;2)$', '$1$: $(3;2)$'),
   T('$(p-1)(p+1)=2q^2$. $p$ toq, shuning uchun chap tomon $8$ ga boʻlinadi, '
     'demak $q^2$ juft va $q=2$. Unda $p^2=9$, $p=3$.',
     '$(p-1)(p+1)=2q^2$. Число $p$ нечётно, поэтому левая часть делится на $8$, '
     'значит $q^2$ чётно и $q=2$. Тогда $p^2=9$, $p=3$.'),
   '2', '9-sinf · 2025/26-A №19'),

 P(T('Barcha natural $(x;y)$ juftliklarni toping: $xy-3x+2y=17$.',
     'Найдите все пары натуральных чисел $(x;y)$: $xy-3x+2y=17$.'),
   T('Yagona juftlik: $(9;4)$', 'Единственная пара: $(9;4)$'),
   T('$x(y-3)+2(y-3)=17-6=11$, yaʼni $(x+2)(y-3)=11$. $x\\ge1$ dan '
     '$x+2\\ge3$, shuning uchun $x+2=11$ va $y-3=1$: $x=9$, $y=4$.',
     '$x(y-3)+2(y-3)=17-6=11$, то есть $(x+2)(y-3)=11$. Из $x\\ge1$ следует '
     '$x+2\\ge3$, поэтому $x+2=11$ и $y-3=1$: $x=9$, $y=4$.'), '2'),

 P(T('$2025!$ sonining oxirida nechta nol bor?',
     'Сколько нулей на конце числа $2025!$?'),
   T('$505$ ta', '$505$'),
   T('Nollar soni $=v_5(2025!)$, chunki ikkiliklar koʻproq: '
     '$405+81+16+3=505$.',
     'Число нулей равно $v_5(2025!)$, так как двоек больше: '
     '$405+81+16+3=505$.'), '4'),

 P(T('$n$ natural son uchun $(n+7)\\mid(n^2+5)$ boʻlsin. Barcha shunday $n$ '
     'larni toping.',
     'Пусть $n$ натуральное и $(n+7)\\mid(n^2+5)$. Найдите все такие $n$.'),
   T('$n\\in\\{2;11;20;47\\}$', '$n\\in\\{2;11;20;47\\}$'),
   T('$n^2+5=(n+7)(n-7)+54$, demak $n+7\\mid 54$. $n\\ge1$ dan $n+7\\ge8$, '
     'shuning uchun $n+7\\in\\{9;18;27;54\\}$.',
     '$n^2+5=(n+7)(n-7)+54$, значит $n+7\\mid 54$. Из $n\\ge1$ следует '
     '$n+7\\ge8$, поэтому $n+7\\in\\{9;18;27;54\\}$.'), '1'),
]
