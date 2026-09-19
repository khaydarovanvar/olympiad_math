# -*- coding: utf-8 -*-
T = lambda uz, ru: (uz, ru)
I = lambda **k: k

CHROME = dict(
 title=T('Olimpiada formulalari · 9-sinf', 'Формулы олимпиады · 9 класс'),
 eyebrow=T('9-sinf · tuman (shahar) bosqichi', '9 класс · районный (городской) этап'),
 h1=T('Olimpiada formulalari va teoremalari', 'Формулы и теоремы олимпиады'),
 sub=T('20 kunlik rejaning nazariy qismi: kerak boʻladigan formulalar, teoremalar va '
       'lemmalar — har biri qayerda uchraganiga havola bilan.',
       'Теоретическая часть 20-дневного плана: нужные формулы, теоремы и леммы — '
       'каждая со ссылкой на задачу, где она встретилась.'),
 spec=[T('<b>69</b> ta formula', '<b>69</b> формул'),
       T('<b>43</b> tasi misol bilan', '<b>43</b> с примером'),
       T('5 boʻlim', '5 разделов'), T('manba: 3 ta variant', 'источник: 3 варианта')],
 misol=T('Misol', 'Пример'), uchragan=T('Uchragan', 'Встречалась'),
 formula=T('ta formula va teorema', 'формул и теорем'),
 src=T('<b>Misollar manbasi:</b> 9-sinf tuman bosqichi variantlari — 2025/2026, 2024/2025, '
       '2024. Boshqa sinf varianti ishlatilgan joyda qavs ichida koʻrsatilgan. '
       'Tuzuvchi: Anvarbek Xaydarov.',
       '<b>Источник примеров:</b> варианты районного этапа, 9 класс — 2025/2026, 2024/2025, '
       '2024. Там, где использован вариант другого класса, это указано в скобках. '
       'Составитель: Анварбек Хайдаров.'),
)
BADGE = {'teorema': T('Teorema', 'Теорема'), 'lemma': T('Lemma', 'Лемма')}

SECTIONS = [

dict(key='alg', kod='A', ulush='31,5 %',
 nom=T('Algebra va ayniyatlar', 'Алгебра и тождества'),
 izoh=T('Savollarning eng katta qismi. Bu boʻlimdagi ayniyatlar sonlar nazariyasi va '
        'geometriya masalalarida ham qurol boʻlib xizmat qiladi.',
        'Самая большая доля задач. Тождества этого раздела работают и в теории чисел, '
        'и в геометрии.'),
 items=[

I(nom=T('Qisqa koʻpaytirish formulalari', 'Формулы сокращённого умножения'),
  tex=r'(a\pm b)^2=a^2\pm 2ab+b^2,\qquad a^2-b^2=(a-b)(a+b)',
  tex2=r'(a\pm b)^3=a^3\pm 3a^2b+3ab^2\pm b^3,\qquad a^3\pm b^3=(a\pm b)(a^2\mp ab+b^2)',
  nega=T('Olimpiadada eng koʻp ishlatiladigan toʻrtlik. $a^2-b^2$ ni koʻrganingizda '
         'darhol koʻpaytuvchilarga ajrating — bu deyarli har doim keyingi qadamni ochadi.',
         'Самая используемая четвёрка на олимпиаде. Увидев $a^2-b^2$, сразу раскладывайте '
         'на множители — это почти всегда открывает следующий шаг.'),
  misol=T(r'$22^2+44^2+66^2=22^2(1+4+9)=484\cdot14=2^3\cdot7\cdot11^2$, eng katta tub boʻluvchi $11$.',
          r'$22^2+44^2+66^2=22^2(1+4+9)=484\cdot14=2^3\cdot7\cdot11^2$, наибольший простой делитель $11$.'),
  ref='2025/26 №4'),

I(nom=T('Uch hadning kvadrati', 'Квадрат трёхчлена'),
  tex=r'(a+b+c)^2=a^2+b^2+c^2+2(ab+bc+ca)',
  nega=T('Bundan foydali natija: $a^2+b^2+c^2=(a+b+c)^2-2(ab+bc+ca)$ — '
         'simmetrik ifodalarni Viyet orqali hisoblashda kerak boʻladi.',
         'Полезное следствие: $a^2+b^2+c^2=(a+b+c)^2-2(ab+bc+ca)$ — нужно при вычислении '
         'симметрических выражений через Виета.')),

I(nom=T('Uch kub ayniyati', 'Тождество трёх кубов'),
  tex=r'a^3+b^3+c^3-3abc=(a+b+c)\left(a^2+b^2+c^2-ab-bc-ca\right)',
  nega=T('**Muhim natija:** agar $a+b+c=0$ boʻlsa, $a^3+b^3+c^3=3abc$. '
         'Shartida yigʻindi nolga teng boʻlgan masalalarda birinchi navbatda shuni sinang.',
         '**Важное следствие:** если $a+b+c=0$, то $a^3+b^3+c^3=3abc$. '
         'В задачах, где сумма равна нулю, пробуйте это в первую очередь.')),

I(nom=T('Sofi Jermen ayniyati', 'Тождество Софи Жермен'),
  tex=r'a^4+4b^4=\left(a^2+2b^2-2ab\right)\left(a^2+2b^2+2ab\right)',
  nega=T('«Koʻpaytuvchilarga ajralmaydi» koʻrinadigan ifodani ajratadi. Sonlar nazariyasida '
         '$n^4+4$ tipidagi sonning tub emasligini isbotlashda ishlatiladi.',
         'Раскладывает выражение, которое кажется неразложимым. В теории чисел — для '
         'доказательства составности чисел вида $n^4+4$.')),

I(nom=T('Simon hiylasi (SFFT)', 'Приём Симона (SFFT)'),
  tex=r'xy+ax+by=(x+b)(y+a)-ab',
  nega=T('Ikki nomaʼlumli tenglamani $(\;)(\;)=N$ shakliga keltiradi, '
         'soʻng $N$ ning boʻluvchilari saralanadi. Diofant masalalarining yarmi shu bilan yechiladi.',
         'Приводит уравнение с двумя неизвестными к виду $(\;)(\;)=N$, после чего '
         'перебираются делители $N$. Половина диофантовых задач решается этим.'),
  misol=T(r'$4a-7b+28ab=2020$. Guruhlaymiz: $4a(7b+1)-(7b+1)=2019$, yaʼni '
          r'$(4a-1)(7b+1)=2019=3\cdot673$. Bundan $a=1,\ b=96$, demak $ab=96$.',
          r'$4a-7b+28ab=2020$. Группируем: $4a(7b+1)-(7b+1)=2019$, то есть '
          r'$(4a-1)(7b+1)=2019=3\cdot673$. Отсюда $a=1,\ b=96$, значит $ab=96$.'),
  ref='2024/25 №9'),

I(nom=T('Butun qismni ajratish', 'Выделение целой части'),
  tex=r'\frac{n^2-3}{n-2}=n+2+\frac{1}{n-2}',
  nega=T('Kasr butun boʻlishi uchun maxraj qoldiqni boʻlishi kerak. '
         'Umumiy usul: suratni maxrajga boʻlib, butun qism va qoldiqni ajrating.',
         'Чтобы дробь была целой, знаменатель должен делить остаток. '
         'Общий приём: разделите числитель на знаменатель, выделив целую часть и остаток.'),
  misol=T(r'$(n-2)\mid 1$ dan $n-2=\pm1$, yaʼni $n=3$ yoki $n=1$ — $2$ ta qiymat.',
          r'Из $(n-2)\mid 1$ получаем $n-2=\pm1$, то есть $n=3$ или $n=1$ — $2$ значения.'),
  ref='2025/26 №2'),

I(nom=T('Bezu teoremasi', 'Теорема Безу'), tur='teorema',
  tex=T(r'P(x)\ \div\ (x-a)\ \Longrightarrow\ \text{qoldiq}=P(a)', r'P(x)\ \div\ (x-a)\ \Longrightarrow\ \text{остаток}=P(a)'),
  nega=T('**Natija:** $(x-a)\\mid P(x)\\iff P(a)=0$. Koʻphadni koʻpaytuvchilarga ajratishda '
         'ildizni taxmin qilib, shu teorema bilan tekshiriladi.',
         '**Следствие:** $(x-a)\\mid P(x)\\iff P(a)=0$. При разложении многочлена корень '
         'угадывают и проверяют этой теоремой.')),

I(nom=T('Viyet teoremasi — kvadrat tenglama', 'Теорема Виета — квадратное уравнение'),
  tur='teorema',
  tex=r'ax^2+bx+c=0\ \Longrightarrow\ x_1+x_2=-\frac{b}{a},\qquad x_1x_2=\frac{c}{a}',
  nega=T('Ildizlarni **topmasdan** simmetrik ifodalarni hisoblash imkonini beradi — '
         'olimpiadada deyarli har doim shu kerak.',
         'Позволяет вычислять симметрические выражения, **не находя** корней — '
         'на олимпиаде почти всегда нужно именно это.')),

I(nom=T('Simmetrik ifodalar', 'Симметрические выражения'),
  tex=r'x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2',
  tex2=r'x_1^3+x_2^3=(x_1+x_2)^3-3x_1x_2(x_1+x_2),\qquad x_1^4+x_2^4=\left(x_1^2+x_2^2\right)^2-2(x_1x_2)^2',
  nega=T('Ketma-ket qoʻllang: avval kvadratlar yigʻindisini, keyin uni yana shu ayniyatga qoʻying.',
         'Применяйте последовательно: сначала сумму квадратов, затем подставьте её в то же тождество.'),
  misol=T(r'$x^2+2x-1=0$: $x_1+x_2=-2$, $x_1x_2=-1$. Unda $x_1^2+x_2^2=4+2=6$ va $x_1^4+x_2^4=36-2=34$.',
          r'$x^2+2x-1=0$: $x_1+x_2=-2$, $x_1x_2=-1$. Тогда $x_1^2+x_2^2=4+2=6$ и $x_1^4+x_2^4=36-2=34$.'),
  ref='2025/26 №13'),

I(nom=T('Diskriminant va ildizlar soni', 'Дискриминант и число корней'),
  tex=r'D=b^2-4ac:\quad D>0\ (2),\quad D=0\ (1),\quad D<0\ (0)',
  nega=T('**Butun ildizlar uchun** $D$ toʻla kvadrat boʻlishi shart. Parametrli masalalarda '
         'aynan shu shart yechimni beradi.',
         '**Для целых корней** $D$ обязан быть полным квадратом. В задачах с параметром '
         'именно это условие даёт решение.'),
  misol=T(r'$x^2+ax+b=0$ va $x^2+ax+b+1=0$ ikkalasi butun ildizli: $m^2-n^2=4$ dan $m=2,\ n=0$, '
          r'demak $a^2=4(b+1)$ va $b\in\{0;3;8\}$ — $6$ ta juftlik.',
          r'Оба уравнения $x^2+ax+b=0$ и $x^2+ax+b+1=0$ имеют целые корни: из $m^2-n^2=4$ '
          r'следует $m=2,\ n=0$, значит $a^2=4(b+1)$ и $b\in\{0;3;8\}$ — $6$ пар.'),
  ref='2024/25 №17'),

I(nom=T('Ikki tenglamaning umumiy ildizi', 'Общий корень двух уравнений'),
  tex=r'\begin{aligned}x^2+px+q&=0\\ x^2+rx+s&=0\end{aligned}\ \Longrightarrow\ (p-r)x+(q-s)=0',
  nega=T('Tenglamalarni ayiring — kvadrat had qisqaradi va chiziqli tenglama qoladi. '
         'Umumiy ildiz $x=\\dfrac{s-q}{p-r}$.',
         'Вычтите уравнения — квадратный член сократится и останется линейное. '
         'Общий корень $x=\\dfrac{s-q}{p-r}$.'),
  ref='2024 №14'),

I(nom=T('Modul: asosiy xossalar', 'Модуль: основные свойства'),
  tex=T(r'|u|=|v|\iff u=\pm v,\qquad |x-a|=\text{masofa}', r'|u|=|v|\iff u=\pm v,\qquad |x-a|=\text{расстояние}'),
  nega=T('$|x+6|=|x+10|$ — «$-6$ va $-10$ dan teng uzoqlikdagi nuqta», yaʼni ularning oʻrtasi. '
         'Bu yerda hisoblashning hojati yoʻq.',
         '$|x+6|=|x+10|$ — «точка, равноудалённая от $-6$ и $-10$», то есть их середина. '
         'Считать здесь нечего.'),
  misol=T(r'$x=\dfrac{-6+(-10)}{2}=-8$.', r'$x=\dfrac{-6+(-10)}{2}=-8$.'),
  ref='2025/26 №6'),

I(nom=T('Ichma-ich ildizni ochish', 'Раскрытие вложенного корня'),
  tex=r'\sqrt{a\pm2\sqrt{b}}=\sqrt{x}\pm\sqrt{y},\quad x+y=a,\ xy=b',
  nega=T('$x$ va $y$ — $t^2-at+b=0$ tenglamaning ildizlari. Har doim natijani kvadratga '
         'koʻtarib tekshiring.',
         '$x$ и $y$ — корни уравнения $t^2-at+b=0$. Обязательно проверяйте результат '
         'возведением в квадрат.'),
  misol=T(r'$\sqrt{4+2\sqrt3}=\sqrt3+1$, $\sqrt{49+8\sqrt3}=1+4\sqrt3$, demak '
          r'$\left(4(\sqrt3+1)-(1+4\sqrt3)\right)^2=9$.',
          r'$\sqrt{4+2\sqrt3}=\sqrt3+1$, $\sqrt{49+8\sqrt3}=1+4\sqrt3$, значит '
          r'$\left(4(\sqrt3+1)-(1+4\sqrt3)\right)^2=9$.'),
  ref='2025/26 №10'),

I(nom=T('Qoʻshmaga koʻpaytirish', 'Умножение на сопряжённое'),
  tex=r'\frac{1}{\sqrt{a}+\sqrt{b}}=\frac{\sqrt a-\sqrt b}{a-b},\qquad '
      r'\frac{1}{\sqrt{k+1}+\sqrt{k}}=\sqrt{k+1}-\sqrt{k}',
  nega=T('Ikkinchi shakl teleskoplash uchun: shunday hadlar yigʻindisida oʻrtadagi hammasi qisqaradi.',
         'Вторая форма — для телескопирования: в сумме таких членов всё среднее сокращается.')),

I(nom=T('Proporsiya xossalari', 'Свойства пропорции'),
  tex=r'\frac{a}{b}=\frac{c}{d}\ \Longrightarrow\ \frac{a\pm b}{b}=\frac{c\pm d}{d},\qquad '
      r'\frac{a}{b}=\frac{c}{d}=\frac{e}{f}=k\ \Longrightarrow\ \frac{a+c+e}{b+d+f}=k',
  nega=T('Ikkinchisi — «birlashtirilgan nisbat»; maxrajlar yigʻindisi nolga teng boʻlmasligi shart.',
         'Второе — «объединённое отношение»; сумма знаменателей не должна равняться нулю.')),

I(nom=T('Nisbatlarga 1 qoʻshish hiylasi', 'Приём «прибавить 1» к отношениям'),
  tex=r'\frac{a+b+c}{d}=r\ \Longrightarrow\ \frac{a+b+c+d}{d}=r+1',
  nega=T('Toʻrtta bir xil koʻrinishdagi nisbat berilganda hammasiga $1$ qoʻshing: '
         'surat bir xil $S=a+b+c+d$ boʻlib qoladi. Soʻng **$S=0$ holini alohida** tekshiring — '
         'ikkinchi javob odatda shundan chiqadi.',
         'Если даны четыре однотипных отношения, прибавьте $1$ к каждому: числитель станет '
         'одним и тем же $S=a+b+c+d$. Затем **отдельно проверьте случай $S=0$** — '
         'второй ответ обычно оттуда.'),
  misol=T(r'$S\ne0$ da $a=b=c=d$ va $r=3$; $S=0$ da $r=-1$. Yigʻindi $3+(-1)=2$.',
          r'При $S\ne0$: $a=b=c=d$ и $r=3$; при $S=0$: $r=-1$. Сумма $3+(-1)=2$.'),
  ref='2025/26 №15'),

I(nom=T('Oʻrta arifmetik va oʻrta geometrik (AM–GM)',
        'Среднее арифметическое и геометрическое (AM–GM)'), tur='teorema',
  tex=r'\frac{a+b}{2}\ge\sqrt{ab},\qquad \frac{a_1+\dots+a_n}{n}\ge\sqrt[n]{a_1\cdots a_n}\quad(a_i>0)',
  nega=T('Tenglik faqat $a_1=\\dots=a_n$ da. **Natija:** $a+\\dfrac1a\\ge2$ va '
         'uning eng kichik qiymati $2$.',
         'Равенство только при $a_1=\\dots=a_n$. **Следствие:** $a+\\dfrac1a\\ge2$, '
         'и наименьшее значение равно $2$.')),

I(nom=T('Kvadrat uchhadning eng katta/kichik qiymati',
        'Наибольшее и наименьшее значение квадратного трёхчлена'),
  tex=r'f(t)=at^2+bt+c,\qquad t_0=-\frac{b}{2a},\qquad f(t_0)=c-\frac{b^2}{4a}',
  nega=T('$a>0$ da minimum, $a<0$ da maksimum. Almashtirish ($t=x^2$) bilan darajani tushiring — '
         'lekin yangi oʻzgaruvchining **sohasini** ($t\\ge0$) unutmang.',
         'При $a>0$ минимум, при $a<0$ максимум. Заменой ($t=x^2$) понижайте степень — '
         'но не забывайте **область** новой переменной ($t\\ge0$).'),
  misol=T(r'$(4-x)(2-x)(x+4)(x+2)=(16-x^2)(4-x^2)$; $t=x^2$ da $t^2-20t+64$, '
          r'minimum $t=10$ da $-36$.',
          r'$(4-x)(2-x)(x+4)(x+2)=(16-x^2)(4-x^2)$; при $t=x^2$ это $t^2-20t+64$, '
          r'минимум при $t=10$ равен $-36$.'),
  ref='2025/26 №22 (11-sinf)'),

I(nom=T('Oraliqlar usuli', 'Метод интервалов'),
  tex=r'(x-x_1)(x-x_2)\cdots(x-x_n)\ \gtrless\ 0',
  nega=T('Ildizlarni oʻqqa qoʻying, eng oʻngdan «+» bilan boshlang va har bir oddiy ildizda '
         'ishorani almashtiring (juft karrali ildizda **almashmaydi**). '
         'Kasrli tengsizlikda maxrajni koʻpaytirmang — ishorani yoʻqotasiz.',
         'Отметьте корни на оси, начните справа со знака «+» и меняйте знак в каждом простом '
         'корне (в корне чётной кратности знак **не меняется**). '
         'В дробном неравенстве не умножайте на знаменатель — потеряете знак.'),
  misol=T(r'$x-1\ge\dfrac{2024}{x+1}$: $x+1>0$ da $x^2\ge2025\Rightarrow x\ge45$; '
          r'$x+1<0$ da ishora almashib $-45\le x<-1$. Eng kichik butun yechim $-45$.',
          r'$x-1\ge\dfrac{2024}{x+1}$: при $x+1>0$ имеем $x^2\ge2025\Rightarrow x\ge45$; '
          r'при $x+1<0$ знак меняется: $-45\le x<-1$. Наименьшее целое решение $-45$.'),
  ref='2024 №7'),
]),
]

SECTIONS.append(dict(key='nt', kod='B', ulush='24,7 %',
 nom=T('Sonlar nazariyasi', 'Теория чисел'),
 izoh=T('Oxirgi ikki yilda eng koʻp savol shu boʻlimdan. Asosan boʻlinish, qoldiqlar, '
        'boʻluvchilar soni va Diofant tenglamalari.',
        'За последние два года больше всего задач именно отсюда. В основном делимость, '
        'остатки, число делителей и диофантовы уравнения.'),
 items=[

I(nom=T('Boʻlinish alomatlari', 'Признаки делимости'),
  tex=T(r'\begin{array}{ll} 2,5,10 & \text{oxirgi raqam}\\ 4,25 & \text{oxirgi }2\\'
        r' 8,125 & \text{oxirgi }3\\ 3,9 & \textstyle\sum\text{raqamlar}\\'
        r' 11 & \pm\textstyle\sum\text{raqamlar}\end{array}',
        r'\begin{array}{ll} 2,5,10 & \text{последняя цифра}\\ 4,25 & \text{последние }2\\'
        r' 8,125 & \text{последние }3\\ 3,9 & \textstyle\sum\text{цифр}\\'
        r' 11 & \pm\textstyle\sum\text{цифр}\end{array}'),
  nega=T('$7$ ga boʻlinish uchun alohida alomat oʻrniga $10^k$ ning qoldiqlaridan foydalaning: '
         '$1,3,2,6,4,5$ — soʻng davr takrorlanadi.',
         'Для делимости на $7$ вместо отдельного признака используйте остатки $10^k$: '
         '$1,3,2,6,4,5$ — далее период повторяется.')),

I(nom=T('Sonni yoyib yozish', 'Развёрнутая запись числа'),
  tex=r'\overline{abc}=100a+10b+c,\qquad \overline{ab}=10a+b',
  nega=T('Raqamli masalada **birinchi qadam** har doim shu. Soʻng shartni $a,b,c$ '
         'haqidagi tenglamaga aylantiring.',
         'В задаче с цифрами это всегда **первый шаг**. Затем переведите условие '
         'в уравнение относительно $a,b,c$.'),
  misol=T(r'$\overline{abcd}\cdot4=\overline{dcba}$: $a$ juft va $a\le2$ dan $a=2$; '
          r'$4d\equiv2\ (\mathrm{mod}\ 10)$ va $d\ge8$ dan $d=8$; natija $2178\cdot4=8712$.',
          r'$\overline{abcd}\cdot4=\overline{dcba}$: из чётности $a$ и $a\le2$ следует $a=2$; '
          r'из $4d\equiv2\ (\mathrm{mod}\ 10)$ и $d\ge8$ следует $d=8$; итог $2178\cdot4=8712$.'),
  ref='2025/26 №28'),

I(nom=T('Boʻlish algoritmi', 'Деление с остатком'),
  tex=r'a=bq+r,\qquad 0\le r<b',
  nega=T('**Qoldiq bilan berilgan shartlar hiylasi:** qoldiq boʻluvchidan $1$ ga kam boʻlsa, '
         '$a+1$ boʻluvchiga boʻlinadi.',
         '**Приём для условий с остатками:** если остаток на $1$ меньше делителя, '
         'то $a+1$ делится на этот делитель.'),
  misol=T(r'$n$: $10$ ga $9$, $11$ ga $10$, $12$ ga $11$ qoldiq $\Rightarrow$ '
          r'$n+1$ soni $\mathrm{EKUK}(10,11,12)=660$ ga karrali, eng kichigi $n=659$.',
          r'$n$ даёт остатки $9,10,11$ при делении на $10,11,12$ $\Rightarrow$ '
          r'$n+1$ кратно $\mathrm{HOK}(10,11,12)=660$, наименьшее $n=659$.'),
  ref='2025/26 №8'),

I(nom=T('EKUB va EKUK bogʻlanishi', 'Связь НОД и НОК'),
  tex=r'\mathrm{EKUB}(a,b)\cdot\mathrm{EKUK}(a,b)=a\cdot b',
  nega=T('Yevklid algoritmi: $\\gcd(a,b)=\\gcd(b,\\ a\\bmod b)$. '
         '**Foydali lemma:** $\\gcd(n,n+1)=1$ — ketma-ket sonlar har doim oʻzaro tub.',
         'Алгоритм Евклида: $\\gcd(a,b)=\\gcd(b,\\ a\\bmod b)$. '
         '**Полезная лемма:** $\\gcd(n,n+1)=1$ — соседние числа всегда взаимно просты.')),

I(nom=T('Arifmetikaning asosiy teoremasi', 'Основная теорема арифметики'), tur='teorema',
  tex=r'n=p_1^{\alpha_1}p_2^{\alpha_2}\cdots p_k^{\alpha_k}',
  nega=T('Tub koʻpaytuvchilarga yoyish **yagona** boʻlgani uchun ikki tomondagi darajalarni '
         'tenglashtirish mumkin — koʻrsatkichli tenglamalar shu bilan yechiladi.',
         'Разложение на простые **единственно**, поэтому можно приравнивать показатели '
         'в обеих частях — так решаются показательные уравнения.'),
  misol=T(r'$16^a9^a=6^b8^2$: $2^{4a}3^{2a}=2^{b+6}3^b$ dan $4a=b+6$, $2a=b$, demak $a+b=9$.',
          r'$16^a9^a=6^b8^2$: из $2^{4a}3^{2a}=2^{b+6}3^b$ следует $4a=b+6$, $2a=b$, значит $a+b=9$.'),
  ref='2025/26 №4 (10-sinf)'),

I(nom=T('Boʻluvchilar soni', 'Количество делителей'), tur='teorema',
  tex=r'\tau(n)=(\alpha_1+1)(\alpha_2+1)\cdots(\alpha_k+1)',
  nega=T('**Natijalar:** $\\tau(n)$ toq $\\iff n$ toʻla kvadrat. Aynan $3$ ta boʻluvchi '
         '$\\iff n=p^2$. Toʻla kvadrat boʻluvchilar soni — barcha $\\alpha_i$ ni '
         'juftga cheklab sanaladi.',
         '**Следствия:** $\\tau(n)$ нечётно $\\iff n$ полный квадрат. Ровно $3$ делителя '
         '$\\iff n=p^2$. Число квадратных делителей считается ограничением всех '
         '$\\alpha_i$ чётными значениями.'),
  misol=T(r'$9800=2^3\cdot5^2\cdot7^2$ ning toʻla kvadrat boʻluvchilari: '
          r'$\alpha\in\{0;2\}$ har bir tub uchun $\Rightarrow 2\cdot2\cdot2=8$ ta.',
          r'Квадратные делители $9800=2^3\cdot5^2\cdot7^2$: для каждого простого '
          r'$\alpha\in\{0;2\}$ $\Rightarrow 2\cdot2\cdot2=8$.'),
  ref='2024/25 №3 (11-sinf)'),

I(nom=T('Lежandr formulasi', 'Формула Лежандра'), tur='teorema',
  tex=r'v_p(n!)=\left\lfloor\frac{n}{p}\right\rfloor+\left\lfloor\frac{n}{p^2}\right\rfloor'
      r'+\left\lfloor\frac{n}{p^3}\right\rfloor+\cdots',
  nega=T('$n!$ dagi $p$ ning darajasi. **Nollar soni** $=v_5(n!)$ (chunki $v_2>v_5$). '
         'Boʻlinma uchun ayiring: $v_p(m!/n!)=v_p(m!)-v_p(n!)$.',
         'Степень $p$ в $n!$. **Число нулей** $=v_5(n!)$ (так как $v_2>v_5$). '
         'Для частного вычитайте: $v_p(m!/n!)=v_p(m!)-v_p(n!)$.'),
  misol=T(r'Ikki xonali sonlar koʻpaytmasi $=\dfrac{99!}{9!}$; '
          r'$v_3(99!)=48$, $v_3(9!)=4$, demak $3^{44}$ ga boʻlinadi.',
          r'Произведение двузначных $=\dfrac{99!}{9!}$; '
          r'$v_3(99!)=48$, $v_3(9!)=4$, значит делится на $3^{44}$.'),
  ref='2025/26 №17'),

I(nom=T('Modular arifmetika qoidalari', 'Правила модульной арифметики'),
  tex=r'a\equiv b,\ c\equiv d\ (\mathrm{mod}\ m)\ \Longrightarrow\ '
      r'a\pm c\equiv b\pm d,\quad ac\equiv bd,\quad a^k\equiv b^k',
  nega=T('**Boʻlishga ruxsat yoʻq** — faqat qoldiqni qisqartirish mumkin, u ham '
         '$\\gcd$ shartida. Katta darajani bosqichma-bosqich kvadratga koʻtaring.',
         '**Делить нельзя** — сокращать можно лишь при условии на $\\gcd$. '
         'Большую степень возводите в квадрат пошагово.')),

I(nom=T('Oxirgi raqam davrlari', 'Периоды последней цифры'),
  tex=T(r'\begin{array}{ll}2,3,7,8:&\text{davr }4\\ 4,9:&\text{davr }2\\ '
        r'0,1,5,6:&\text{const}\end{array}',
        r'\begin{array}{ll}2,3,7,8:&\text{период }4\\ 4,9:&\text{период }2\\ '
        r'0,1,5,6:&\text{const}\end{array}'),
  nega=T('$k^{n}$ ning oxirgi raqami $n\\bmod4$ ga qarab aniqlanadi. '
         '**Muhim:** $n\\equiv1\\ (\\mathrm{mod}\\ 4)$ va $n>1$ boʻlsa '
         '$k^n\\equiv k\\ (\\mathrm{mod}\\ 10)$ — katta yigʻindilarni shu bilan qisqartiring.',
         'Последняя цифра $k^{n}$ определяется по $n\\bmod4$. '
         '**Важно:** при $n\\equiv1\\ (\\mathrm{mod}\\ 4)$ и $n>1$ выполняется '
         '$k^n\\equiv k\\ (\\mathrm{mod}\\ 10)$ — так сокращают большие суммы.'),
  misol=T(r'$1^{2025}+\dots+2025^{2025}\equiv1+2+\dots+2025=2051325$, oxirgi raqam $5$.',
          r'$1^{2025}+\dots+2025^{2025}\equiv1+2+\dots+2025=2051325$, последняя цифра $5$.'),
  ref='2025/26 №21 (11-sinf)'),

I(nom=T('Oxirgi ikkita raqam', 'Две последние цифры'),
  tex=r'3^{20}\equiv1\ (\mathrm{mod}\ 100),\qquad 2^{20}\equiv76,\qquad 7^{4}\equiv1',
  nega=T('$\\mathrm{mod}\\ 100$ da $10$ bilan oʻzaro tub sonlar uchun davr $20$ ni boʻladi. '
         'Darajani $20$ ga boʻlib, qoldiqqa qarang.',
         'По модулю $100$ период для чисел, взаимно простых с $10$, делит $20$. '
         'Разделите показатель на $20$ и смотрите на остаток.'),
  misol=T(r'$2025=20\cdot101+5$, demak $3^{2025}\equiv3^5=243\equiv43$.',
          r'$2025=20\cdot101+5$, значит $3^{2025}\equiv3^5=243\equiv43$.'),
  ref='2025/26 №18'),

I(nom=T('Kvadratlarning qoldiqlari', 'Остатки квадратов'), tur='lemma',
  tex=r'n^2\equiv0,1\ (\mathrm{mod}\ 3),\qquad n^2\equiv0,1\ (\mathrm{mod}\ 4),'
      r'\qquad n^2\equiv0,1,4\ (\mathrm{mod}\ 8)',
  nega=T('«Bunday son toʻla kvadrat boʻla olmaydi» yoki «yechim yoʻq» tipidagi masalalar '
         'shu bilan yopiladi. Toʻla kvadrat hech qachon $2,3\\ (\\mathrm{mod}\\ 4)$ '
         'qoldiq bermaydi.',
         'Так закрываются задачи типа «такое число не может быть квадратом» или '
         '«решений нет». Полный квадрат никогда не даёт остатков $2,3\\ (\\mathrm{mod}\\ 4)$.')),

I(nom=T('Ketma-ket sonlar koʻpaytmasi', 'Произведение последовательных чисел'), tur='lemma',
  tex=T(r'k\ \text{ta ketma-ket son}\ \Longrightarrow\ k!\ \text{ga boʻlinadi}', r'k\ \text{последовательных чисел}\ \Longrightarrow\ \text{делится на }k!'),
  nega=T('Masalan $(n-1)n(n+1)$ har doim $6$ ga boʻlinadi. Koʻphadning barcha '
         'qiymatlari uchun umumiy boʻluvchi izlaganda birinchi qurol.',
         'Например, $(n-1)n(n+1)$ всегда делится на $6$. Первый инструмент, когда ищут '
         'общий делитель всех значений многочлена.'),
  misol=T(r'$F(n)=n^5+3n^3-4n=(n-1)n(n+1)(n^2+4)$ har doim $24$ ga boʻlinadi, '
          r'va $\gcd(48,312)=24$.',
          r'$F(n)=n^5+3n^3-4n=(n-1)n(n+1)(n^2+4)$ всегда делится на $24$, '
          r'и $\gcd(48,312)=24$.'),
  ref='2025/26 №24 (10-sinf)'),

I(nom=T('Kichik Ferma teoremasi', 'Малая теорема Ферма'), tur='teorema',
  tex=T(r'p\ \text{tub},\ p\nmid a\ \Longrightarrow\ a^{p-1}\equiv1\ (\mathrm{mod}\ p)', r'p\ \text{простое},\ p\nmid a\ \Longrightarrow\ a^{p-1}\equiv1\ (\mathrm{mod}\ p)'),
  nega=T('Har qanday $a$ uchun esa $a^p\\equiv a\\ (\\mathrm{mod}\\ p)$. '
         'Katta darajalarni tub modul boʻyicha qisqartirishning eng tez yoʻli.',
         'А для любого $a$ верно $a^p\\equiv a\\ (\\mathrm{mod}\\ p)$. '
         'Самый быстрый способ сокращать большие степени по простому модулю.')),

I(nom=T('Diofant tenglamasi — chiziqli', 'Диофантово уравнение — линейное'),
  tex=T(r'ax+by=c\ \text{yechimga ega}\iff \gcd(a,b)\mid c', r'ax+by=c\ \text{разрешимо}\iff \gcd(a,b)\mid c'),
  nega=T('Bitta yechim $(x_0,y_0)$ topilsa, qolganlari '
         '$x=x_0+\\dfrac{b}{d}t,\\ y=y_0-\\dfrac{a}{d}t$. '
         '**Natural** yechimlar soni chegaralangan — shu bilan sanaladi.',
         'Если найдено одно решение $(x_0,y_0)$, остальные — '
         '$x=x_0+\\dfrac{b}{d}t,\\ y=y_0-\\dfrac{a}{d}t$. '
         'Число **натуральных** решений ограничено — так их и считают.'),
  misol=T(r'$13a+31b=N$: $a\to a+31$, $b\to b-13$. Uchta yechim uchun $b\ge27$, '
          r'eng kichik $N=850$.',
          r'$13a+31b=N$: $a\to a+31$, $b\to b-13$. Для трёх решений нужно $b\ge27$, '
          r'наименьшее $N=850$.'),
  ref='2025/26 №26 (10-sinf)'),

I(nom=T('Koʻpaytuvchilarga ajratish usuli', 'Метод разложения на множители'),
  tex=T(r'(\;\cdot\;)(\;\cdot\;)=N\ \Longrightarrow\ N\ \text{ning boʻluvchilari}', r'(\;\cdot\;)(\;\cdot\;)=N\ \Longrightarrow\ \text{делители }N'),
  nega=T('Diofant masalasining asosiy usuli. Ajratgandan soʻng **juftlik va qoldiq** '
         'bilan variantlarni qisqartiring.',
         'Основной метод диофантовых задач. После разложения сокращайте варианты '
         '**чётностью и остатками**.'),
  misol=T(r'$p^2-2q^2=1\Rightarrow(p-1)(p+1)=2q^2$. $p$ toq, chap tomon $8$ ga boʻlinadi '
          r'$\Rightarrow q=2,\ p=3$ — yagona juftlik.',
          r'$p^2-2q^2=1\Rightarrow(p-1)(p+1)=2q^2$. $p$ нечётно, левая часть делится на $8$ '
          r'$\Rightarrow q=2,\ p=3$ — единственная пара.'),
  ref='2025/26 №19'),

I(nom=T('Frobenius soni (Chicken McNugget)', 'Число Фробениуса'), tur='teorema',
  tex=T(r'\gcd(a,b)=1\ \Longrightarrow\ \max\{\text{ifodalab boʻlmaydigan}\}=ab-a-b', r'\gcd(a,b)=1\ \Longrightarrow\ \max\{\text{непредставимые}\}=ab-a-b'),
  nega=T('Bunday sonlar soni $\\dfrac{(a-1)(b-1)}{2}$. '
         '«$2a+3b$ koʻrinishida yozib boʻlmaydigan nechta son bor?» degan savol shu.',
         'Количество таких чисел $\\dfrac{(a-1)(b-1)}{2}$. '
         'Это и есть вопрос «сколько чисел нельзя записать в виде $2a+3b$?».'),
  ref='2024/25 №7'),
]))

SECTIONS.append(dict(key='geo', kod='C', ulush='20,2 %',
 nom=T('Geometriya', 'Геометрия'),
 izoh=T('Tuman bosqichida faqat planimetriya: uchburchak, toʻrtburchak va aylana. '
        'Fazoviy geometriya uch yilda bir marta ham uchramadi.',
        'На районном этапе только планиметрия: треугольник, четырёхугольник и окружность. '
        'Стереометрия за три года не встретилась ни разу.'),
 items=[

I(nom=T('Uchburchak burchaklari', 'Углы треугольника'),
  tex=T(r'\alpha+\beta+\gamma=180^\circ,\qquad \text{tashqi}=\text{qoʻshni emas ikkitasi}', r'\alpha+\beta+\gamma=180^\circ,\qquad \text{внешний}=\text{два несмежных}'),
  nega=T('Tashqi burchak xossasi — burchak masalalarining yarmini yechadi. '
         '**Qavariq $n$-burchak:** ichki burchaklar yigʻindisi $(n-2)\\cdot180^\\circ$, '
         'tashqi burchaklar yigʻindisi har doim $360^\\circ$.',
         'Свойство внешнего угла решает половину задач на углы. '
         '**Выпуклый $n$-угольник:** сумма внутренних углов $(n-2)\\cdot180^\\circ$, '
         'сумма внешних всегда $360^\\circ$.'),
  misol=T(r'Qavariq koʻpburchakda eng koʻpi bilan nechta toʻgʻri burchak? $90k\le360$ dan '
          r'$k\le4$ — kvadrat.',
          r'Сколько прямых углов максимум у выпуклого многоугольника? Из $90k\le360$ '
          r'следует $k\le4$ — квадрат.'),
  ref='2025/26 №3'),

I(nom=T('Uchburchak tengsizligi', 'Неравенство треугольника'),
  tex=r'|b-c|<a<b+c',
  nega=T('«Bunday uchburchak yasash mumkinmi?» savollarida ishlatiladi. Kesmalar berilganda '
         'eng katta tomonni qolgan ikkitasining yigʻindisi bilan solishtiring.',
         'Используется в вопросах «можно ли построить такой треугольник?». Сравнивайте '
         'наибольшую сторону с суммой двух других.'),
  misol=T(r'$1,4,9,\dots,64$ kvadratlaridan faqat $6$ ta uchlik mos keladi: $(16,25,36)$ dan boshlab.',
          r'Из квадратов $1,4,9,\dots,64$ подходят лишь $6$ троек, начиная с $(16,25,36)$.'),
  ref='2025/26 №18 (10-sinf)'),

I(nom=T('Pifagor teoremasi va teskarisi', 'Теорема Пифагора и обратная'), tur='teorema',
  tex=r'c^2=a^2+b^2\iff \gamma=90^\circ',
  nega=T('**Teskarisi alohida qurol:** uzunliklar berilganda $a^2+b^2=c^2$ ni tekshirib, '
         'toʻgʻri burchak borligini **isbotlash** mumkin.',
         '**Обратная — отдельный инструмент:** проверив $a^2+b^2=c^2$, можно **доказать** '
         'наличие прямого угла.'),
  misol=T(r'Burishdan soʻng $MM\'=2\sqrt2$, $M\'C=1$, $MC=3$: $8+1=9$, demak '
          r'$\angle AMB=45^\circ+90^\circ=135^\circ$.',
          r'После поворота $MM\'=2\sqrt2$, $M\'C=1$, $MC=3$: $8+1=9$, значит '
          r'$\angle AMB=45^\circ+90^\circ=135^\circ$.'),
  ref='2025/26 №30'),

I(nom=T('Gipotenuzaga tushirilgan mediana', 'Медиана к гипотенузе'), tur='lemma',
  tex=r'\gamma=90^\circ\ \Longrightarrow\ m_c=\frac{c}{2}=R',
  nega=T('Toʻgʻri burchakli uchburchakda gipotenuzaning oʻrtasi — tashqi chizilgan aylana '
         'markazi. Trapetsiya masalalarida yon tomonlarni davom ettirib shu holga keltiriladi.',
         'Середина гипотенузы — центр описанной окружности. В задачах о трапеции к этому '
         'сводятся продолжением боковых сторон.'),
  misol=T(r'Trapetsiyada $\angle A=30^\circ,\ \angle D=60^\circ$ — yigʻindisi $90^\circ$, '
          r'demak asoslar oʻrtalarini tutashtiruvchi kesma $\dfrac{a-b}{2}$ ga teng.',
          r'В трапеции $\angle A=30^\circ,\ \angle D=60^\circ$ — в сумме $90^\circ$, значит '
          r'отрезок между серединами оснований равен $\dfrac{a-b}{2}$.'),
  ref='2025/26 №14 (10-sinf)'),

I(nom=T('Bissektrisa xossasi', 'Свойство биссектрисы'), tur='teorema',
  tex=r'\frac{AL}{LB}=\frac{CA}{CB}',
  nega=T('Bissektrisa qarama-qarshi tomonni qoʻshni tomonlarga proporsional boʻladi. '
         'Medianalar esa $2:1$ nisbatda kesishadi (ogʻirlik markazi).',
         'Биссектриса делит противоположную сторону пропорционально прилежащим. '
         'А медианы пересекаются в отношении $2:1$ (центр тяжести).')),

I(nom=T('Mediana uzunligi', 'Длина медианы'),
  tex=r'm_a^2=\frac{2b^2+2c^2-a^2}{4}',
  nega=T('Uchinchi tomon yoki yuzni topish kerak boʻlganda mediana berilgan boʻlsa. '
         'Muqobil: medianani ikki barobarga uzaytirib, parallelogramm hosil qiling.',
         'Когда дана медиана, а нужна третья сторона или площадь. '
         'Альтернатива: удвоить медиану и получить параллелограмм.'),
  ref='2024 №17'),

I(nom=T('Yuz formulalari', 'Формулы площади'),
  tex=r'S=\frac12 a h_a=\frac12 ab\sin\gamma=\sqrt{p(p-a)(p-b)(p-c)}',
  tex2=r'S=pr=\frac{abc}{4R},\qquad p=\frac{a+b+c}{2}',
  nega=T('$S=pr$ ichki chizilgan aylana radiusini, $S=\\dfrac{abc}{4R}$ esa tashqi '
         'chizilgan aylana radiusini topish uchun.',
         '$S=pr$ — для радиуса вписанной окружности, $S=\\dfrac{abc}{4R}$ — '
         'для радиуса описанной.')),

I(nom=T('Sinuslar va kosinuslar teoremalari', 'Теоремы синусов и косинусов'), tur='teorema',
  tex=r'\frac{a}{\sin\alpha}=\frac{b}{\sin\beta}=\frac{c}{\sin\gamma}=2R',
  tex2=r'c^2=a^2+b^2-2ab\cos\gamma',
  nega=T('**Ehtiyot boʻling:** sinuslar teoremasi burchakni ikki xil beradi ($\\alpha$ va '
         '$180^\\circ-\\alpha$) — qaysi biri mos kelishini burchaklar yigʻindisi bilan tekshiring.',
         '**Осторожно:** теорема синусов даёт два варианта угла ($\\alpha$ и '
         '$180^\\circ-\\alpha$) — какой подходит, проверяйте по сумме углов.'),
  misol=T(r'$\sin\angle ABC=\sin63^\circ$ dan $63^\circ$ yoki $117^\circ$; '
          r'$104^\circ+117^\circ>180^\circ$ boʻlgani uchun $\angle ABC=63^\circ$.',
          r'Из $\sin\angle ABC=\sin63^\circ$ следует $63^\circ$ или $117^\circ$; '
          r'так как $104^\circ+117^\circ>180^\circ$, то $\angle ABC=63^\circ$.'),
  ref='2025/26 №25 (11-sinf)'),

I(nom=T('Oʻrta chiziq', 'Средняя линия'),
  tex=T(r'\text{uchburchakda}\ \frac{a}{2},\qquad \text{trapetsiyada}\ \frac{a+b}{2}', r'\text{в треугольнике}\ \frac{a}{2},\qquad \text{в трапеции}\ \frac{a+b}{2}'),
  nega=T('Trapetsiya yuzi $=$ oʻrta chiziq $\\times$ balandlik. '
         'Uchburchakning oʻrta chizigʻi uchinchi tomonga parallel.',
         'Площадь трапеции $=$ средняя линия $\\times$ высота. '
         'Средняя линия треугольника параллельна третьей стороне.')),

I(nom=T('Oʻxshashlik', 'Подобие'), tur='teorema',
  tex=r'\triangle ABC\sim\triangle A_1B_1C_1\ \Longrightarrow\ \frac{S}{S_1}=k^2',
  nega=T('Alomatlari: ikki burchak boʻyicha; ikki tomon va ular orasidagi burchak; uch tomon. '
         'Olimpiadada **ikki burchak** eng koʻp ishlatiladi.',
         'Признаки: по двум углам; по двум сторонам и углу между ними; по трём сторонам. '
         'На олимпиаде чаще всего работает признак **по двум углам**.'),
  misol=T(r'$\angle MEB=\angle EAC$ va $\angle B=\angle C$ dan $\triangle MBE\sim\triangle ECA$, '
          r'demak $MB=\dfrac{2\cdot1}{4}=0{,}5$.',
          r'Из $\angle MEB=\angle EAC$ и $\angle B=\angle C$ следует '
          r'$\triangle MBE\sim\triangle ECA$, значит $MB=\dfrac{2\cdot1}{4}=0{,}5$.'),
  ref='2025/26 №27 (10-sinf)'),

I(nom=T('Ichki chizilgan burchak', 'Вписанный угол'), tur='teorema',
  tex=r'\angle ABC=\tfrac12\overset{\frown}{AC}',
  nega=T('**Natijalar:** bir yoyga tayangan burchaklar teng; diametrga tayangan burchak '
         '$90^\\circ$ (Fales teoremasi).',
         '**Следствия:** углы, опирающиеся на одну дугу, равны; угол, опирающийся '
         'на диаметр, прямой (теорема Фалеса).')),

I(nom=T('Urinma–vatar burchagi', 'Угол между касательной и хордой'), tur='teorema',
  tex=T(r'\angle(\text{urinma},\,\text{vatar})=\tfrac12\overset{\frown}{\text{yoy}}', r'\angle(\text{касательная},\,\text{хорда})=\tfrac12\overset{\frown}{\text{дуга}}'),
  nega=T('Ichki chizilgan burchak bilan bir xil qoida. Aylana masalalarida **hamma narsani '
         'yoylar orqali** yozing — soʻng yoylar yigʻindisi $360^\\circ$ tenglamasini tuzing.',
         'То же правило, что и для вписанного угла. В задачах об окружности записывайте '
         '**всё через дуги** — затем составьте уравнение «сумма дуг $=360^\\circ$».'),
  misol=T(r'Yoylar $12x,4x,6x,162^\circ$; yigʻindisi $360^\circ$ dan $x=9^\circ$, '
          r'soʻng $\angle ABC=\tfrac12(54^\circ+162^\circ)=108^\circ$.',
          r'Дуги $12x,4x,6x,162^\circ$; из суммы $360^\circ$ получаем $x=9^\circ$, '
          r'затем $\angle ABC=\tfrac12(54^\circ+162^\circ)=108^\circ$.'),
  ref='2025/26 №21'),

I(nom=T('Nuqtaning aylanaga nisbatan darajasi', 'Степень точки относительно окружности'),
  tur='teorema',
  tex=r'PA\cdot PB=PC\cdot PD,\qquad PT^2=PA\cdot PB',
  nega=T('Kesishuvchi vatarlar va sekushchiylar uchun bir xil. Urinma holi — '
         'uzunlikni topishning eng tez yoʻli.',
         'Одинаково для пересекающихся хорд и секущих. Случай касательной — '
         'самый быстрый способ найти длину.')),

I(nom=T('Ichki va tashqi chizilgan toʻrtburchak', 'Вписанный и описанный четырёхугольник'),
  tur='teorema',
  tex=T(r'\text{ichki}:\ \alpha+\gamma=180^\circ,\qquad \text{tashqi}:\ a+c=b+d', r'\text{вписанный}:\ \alpha+\gamma=180^\circ,\qquad \text{описанный}:\ a+c=b+d'),
  nega=T('Teskarisi ham oʻrinli — shu bilan toʻrtburchakning aylanaga ichki chizilganini '
         '**isbotlash** mumkin.',
         'Обратные утверждения тоже верны — так **доказывают**, что четырёхугольник вписан.')),

I(nom=T('Diagonallar hosil qilgan toʻrt uchburchak', 'Четыре треугольника от диагоналей'),
  tur='lemma',
  tex=r'[AOB]\cdot[COD]=[BOC]\cdot[AOD]',
  nega=T('Bir xil balandlikdagi uchburchaklar yuzalari asoslarga proporsional boʻlgani uchun. '
         'Qarama-qarshi uchburchaklar — faqat bitta umumiy uchga ega boʻlganlari.',
         'Потому что площади треугольников с одной высотой пропорциональны основаниям. '
         'Противоположные треугольники — те, у которых общая только одна вершина.'),
  misol=T(r'$16\cdot24=12\cdot S$ dan $S=32$.', r'Из $16\cdot24=12\cdot S$ следует $S=32$.'),
  ref='2025/26 №17 (10-sinf)'),

I(nom=T('Teng yonli trapetsiya, diagonallari perpendikulyar',
        'Равнобедренная трапеция с перпендикулярными диагоналями'), tur='lemma',
  tex=r'h=\frac{a+b}{2},\qquad S=\left(\frac{a+b}{2}\right)^2',
  nega=T('Diagonallar kesishmasida hosil boʻlgan uchburchaklar teng yonli **toʻgʻri burchakli** '
         'boʻladi, shuning uchun balandlik oʻrta chiziqqa teng.',
         'Треугольники при пересечении диагоналей — равнобедренные **прямоугольные**, '
         'поэтому высота равна средней линии.'),
  misol=T(r'Asoslari $12$ va $8$: $h=10$, $S=100$.',
          r'Основания $12$ и $8$: $h=10$, $S=100$.'),
  ref='2025/26 №9'),

I(nom=T('Varinyon parallelogrammi', 'Параллелограмм Вариньона'), tur='teorema',
  tex=T(r'\text{tomonlar oʻrtalari}\ \Longrightarrow\ \text{parallelogramm},\quad S_V=\tfrac12 S', r'\text{середины сторон}\ \Longrightarrow\ \text{параллелограмм},\quad S_V=\tfrac12 S'),
  nega=T('Tomonlari diagonallarga parallel va ularning yarmiga teng. '
         'Toʻrtburchak masalalarida oʻrtalar berilgan boʻlsa — birinchi urinish.',
         'Его стороны параллельны диагоналям и равны их половинам. '
         'Если в задаче даны середины сторон — пробуйте это первым.')),

I(nom=T('Burish usuli', 'Метод поворота'),
  tex=T(r'\text{kvadrat ichidagi nuqta}\ \Longrightarrow\ 90^\circ', r'\text{точка внутри квадрата}\ \Longrightarrow\ 90^\circ'),
  nega=T('Uchta masofa berilgan masalalarda uchalasini **bitta uchburchakka** yigʻadi. '
         'Teng tomonli uchburchakda $60^\\circ$ ga buriladi.',
         'В задачах с тремя расстояниями собирает все три **в один треугольник**. '
         'В равностороннем треугольнике поворот на $60^\\circ$.'),
  misol=T(r'$MA=1,\ MB=2,\ MC=3$: $B$ atrofida $90^\circ$ burib, $\angle AMB=135^\circ$.',
          r'$MA=1,\ MB=2,\ MC=3$: поворот на $90^\circ$ вокруг $B$ даёт $\angle AMB=135^\circ$.'),
  ref='2025/26 №30'),
]))

SECTIONS.append(dict(key='comb', kod='D', ulush='19,1 %',
 nom=T('Kombinatorika va ketma-ketliklar', 'Комбинаторика и последовательности'),
 izoh=T('Deyarli hammasi ochiq turdagi 21–30 savollar blokida, yaʼni $2{,}6$ balldan.',
        'Почти всё — в открытом блоке 21–30, то есть по $2{,}6$ балла.'),
 items=[

I(nom=T('Koʻpaytirish va qoʻshish qoidalari', 'Правила произведения и суммы'),
  tex=T(r'\text{bosqichma-bosqich}\Rightarrow\times,\qquad \text{kesishmaydigan hollar}\Rightarrow+', r'\text{по шагам}\Rightarrow\times,\qquad \text{непересекающиеся случаи}\Rightarrow+'),
  nega=T('**Teskarisini sanash** koʻpincha tezroq: «kamida bitta» shartida '
         '«umuman yoʻq» ni sanab, umumiydan ayiring.',
         '**Подсчёт дополнения** часто быстрее: для условия «хотя бы один» посчитайте '
         '«ни одного» и вычтите из общего.'),
  misol=T(r'$1$ dan $8888$ gacha $8$ raqami bor sonlar: $8$ siz sonlar $5831$ ta, '
          r'demak javob $8888-5831=3057$.',
          r'Числа от $1$ до $8888$ с цифрой $8$: без восьмёрки их $5831$, '
          r'значит ответ $8888-5831=3057$.'),
  ref='2025/26 №28 (10-sinf)'),

I(nom=T('Oʻrin almashtirish va tanlash', 'Перестановки и сочетания'),
  tex=r'P_n=n!,\qquad A_n^k=\frac{n!}{(n-k)!},\qquad C_n^k=\frac{n!}{k!\,(n-k)!}',
  nega=T('Tartib muhimmi? — ha boʻlsa $A$, yoʻq boʻlsa $C$. '
         '$C_n^k=C_n^{n-k}$ va Paskal: $C_n^k=C_{n-1}^{k-1}+C_{n-1}^{k}$.',
         'Важен ли порядок? — если да, то $A$, если нет, то $C$. '
         '$C_n^k=C_n^{n-k}$ и Паскаль: $C_n^k=C_{n-1}^{k-1}+C_{n-1}^{k}$.')),

I(nom=T('Toʻsiqlar va sharlar', 'Шары и перегородки'), tur='teorema',
  tex=r'x_1+\dots+x_k=n,\ x_i\ge0\ \Longrightarrow\ C_{n+k-1}^{\,k-1}',
  nega=T('$x_i\\ge1$ sharti boʻlsa, avval har biridan $1$ ayiring. '
         'Boʻluvchilarni taqsimlashda tub sonlar **mustaqil** taqsimlanadi.',
         'При условии $x_i\\ge1$ сначала вычтите по $1$. '
         'При распределении делителей простые распределяются **независимо**.'),
  misol=T(r'$xyz=12^4=2^8 3^4$: $C_{10}^2\cdot C_6^2=45\cdot15=675$ ta uchlik.',
          r'$xyz=12^4=2^8 3^4$: $C_{10}^2\cdot C_6^2=45\cdot15=675$ троек.'),
  ref='2025/26 №24'),

I(nom=T('Qoʻshish-ayirish prinsipi', 'Принцип включений-исключений'), tur='teorema',
  tex=r'|A\cup B\cup C|=|A|+|B|+|C|-|AB|-|BC|-|CA|+|ABC|',
  nega=T('«Har bir oʻquvchi kamida ikkita» tipidagi shartda tanlovlar sonini ikki xil '
         'sanang: $2x+3y$ va $x+y=N$.',
         'Для условия «каждый выбрал не меньше двух» посчитайте выборы двумя способами: '
         '$2x+3y$ и $x+y=N$.'),
  misol=T(r'$14+15+16=45$ va $x+y=20$ dan $2(20-y)+3y=45$, demak $y=5$.',
          r'Из $14+15+16=45$ и $x+y=20$: $2(20-y)+3y=45$, значит $y=5$.'),
  ref='2025/26 №24 (11-sinf)'),

I(nom=T('Dirixle prinsipi', 'Принцип Дирихле'), tur='teorema',
  tex=T(r'n>m\ \Longrightarrow\ \exists\ \text{quti}:\ \ge\left\lceil\tfrac{n}{m}\right\rceil', r'n>m\ \Longrightarrow\ \exists\ \text{ящик}:\ \ge\left\lceil\tfrac{n}{m}\right\rceil'),
  nega=T('«Kafolatlash» soʻzi boʻlsa — eng yomon holatni yozing. '
         'Barcha rangdan bittadan kerak boʻlsa: eng koʻp ikkita rangning **hammasini** '
         'olib, $+1$ qoʻshing.',
         'Если есть слово «гарантировать» — распишите худший случай. Если нужен хотя бы '
         'один шар каждого цвета: возьмите **все** шары двух самых частых цветов и $+1$.'),
  misol=T(r'$10$ koʻk, $6$ yashil, $5$ qizil: eng yomoni $10+6=16$, demak $17$ ta kerak.',
          r'$10$ синих, $6$ зелёных, $5$ красных: худший случай $10+6=16$, значит нужно $17$.'),
  ref='2025/26 №18 (11-sinf)'),

I(nom=T('Arifmetik progressiya', 'Арифметическая прогрессия'),
  tex=r'a_n=a_1+(n-1)d,\qquad S_n=\frac{a_1+a_n}{2}\,n',
  nega=T('**Ishlatiladigan xossa:** chetdan teng uzoqlikdagi hadlar yigʻindisi bir xil, '
         '$a_k+a_{n+1-k}=a_1+a_n$. Uchta hadning yigʻindisi oʻrtadagisining uch barobari.',
         '**Рабочее свойство:** суммы равноудалённых от концов членов равны, '
         '$a_k+a_{n+1-k}=a_1+a_n$. Сумма трёх членов — утроенный средний.'),
  misol=T(r'$a_5+a_8+a_{11}=3a_8=12\Rightarrow a_8=4$; $3a_{10}=18\Rightarrow a_{10}=6$, $d=1$.',
          r'$a_5+a_8+a_{11}=3a_8=12\Rightarrow a_8=4$; $3a_{10}=18\Rightarrow a_{10}=6$, $d=1$.'),
  ref='2025/26 №6 (11-sinf)'),

I(nom=T('Geometrik progressiya', 'Геометрическая прогрессия'),
  tex=r'b_n=b_1q^{\,n-1},\qquad S_n=b_1\frac{q^n-1}{q-1},\qquad |q|<1:\ S=\frac{b_1}{1-q}',
  nega=T('**Xarakteristik xossa:** $b_n^2=b_{n-1}b_{n+1}$. '
         'Davriy oʻnli kasrni oddiy kasrga aylantirish ham shu formula bilan.',
         '**Характеристическое свойство:** $b_n^2=b_{n-1}b_{n+1}$. '
         'Перевод периодической десятичной дроби в обыкновенную — по этой же формуле.')),

I(nom=T('Asosiy yigʻindilar', 'Основные суммы'),
  tex=r'1+2+\dots+n=\frac{n(n+1)}{2},\qquad 1+3+\dots+(2n-1)=n^2',
  tex2=r'1^2+\dots+n^2=\frac{n(n+1)(2n+1)}{6},\qquad 1^3+\dots+n^3=\left(\frac{n(n+1)}{2}\right)^2',
  nega=T('Toq sonlar yigʻindisi $n^2$ — masala shartida $1+3+\\dots+(2n-1)$ koʻrinsa, '
         'darhol $n^2$ deb yozing.',
         'Сумма нечётных равна $n^2$ — увидев $1+3+\\dots+(2n-1)$ в условии, '
         'сразу пишите $n^2$.'),
  misol=T(r'$\dfrac{n-1}{2n}=\dfrac{45}{n^2}$ dan $n(n-1)=90$, demak $n=10$.',
          r'Из $\dfrac{n-1}{2n}=\dfrac{45}{n^2}$ следует $n(n-1)=90$, значит $n=10$.'),
  ref='2025/26 №14'),

I(nom=T('Teleskoplash', 'Телескопирование'),
  tex=r'\sum_{k=1}^{n}\bigl(f(k)-f(k+1)\bigr)=f(1)-f(n+1)',
  nega=T('Hadni ayirma shaklida yozing: $\\dfrac{1}{k(k+1)}=\\dfrac1k-\\dfrac1{k+1}$, '
         '$\\dfrac{1}{k(k+m)}=\\dfrac1m\\left(\\dfrac1k-\\dfrac1{k+m}\\right)$.',
         'Запишите член в виде разности: $\\dfrac{1}{k(k+1)}=\\dfrac1k-\\dfrac1{k+1}$, '
         '$\\dfrac{1}{k(k+m)}=\\dfrac1m\\left(\\dfrac1k-\\dfrac1{k+m}\\right)$.')),

I(nom=T('Rekurrent ketma-ketlikning davriyligi', 'Периодичность рекуррентной последовательности'),
  tur='lemma',
  tex=T(r'x_n=\frac{x_{n-1}+1}{x_{n-2}}\ \Longrightarrow\ \text{davr}=5', r'x_n=\frac{x_{n-1}+1}{x_{n-2}}\ \Longrightarrow\ \text{период}=5'),
  nega=T('**Usul:** dastlabki $6$–$7$ hadni yozing. Agar $x_{k}=x_1$ va $x_{k+1}=x_2$ '
         'boʻlsa, davr $k-1$ ga teng. Soʻng indeksni davrga boʻlib, qoldiqqa qarang.',
         '**Приём:** выпишите первые $6$–$7$ членов. Если $x_{k}=x_1$ и $x_{k+1}=x_2$, '
         'то период равен $k-1$. Затем делите индекс на период и смотрите остаток.'),
  misol=T(r'$x_1=20,\ x_2=101$: $x_6=x_1$, demak $x_{2025}=x_5=\dfrac{21}{101}$.',
          r'$x_1=20,\ x_2=101$: $x_6=x_1$, значит $x_{2025}=x_5=\dfrac{21}{101}$.'),
  ref='2025/26 №28 (11-sinf)'),

I(nom=T('Funksional almashtirish', 'Функциональная замена'),
  tex=T(r'f(x)+f(-x)\quad\text{yoki}\quad f(x)+f\!\left(\tfrac1x\right)', r'f(x)+f(-x)\quad\text{или}\quad f(x)+f\!\left(\tfrac1x\right)'),
  nega=T('$f(t)$ berilib $f(-t)$ soʻralsa — yigʻindini oling, u koʻpincha **oʻzgarmas** chiqadi. '
         'Ikkinchi usul: $f(g(x))$ berilgan boʻlsa, $g(x)=u$ almashtirish.',
         'Если дано $f(t)$, а спрашивают $f(-t)$ — берите сумму, она часто оказывается '
         '**постоянной**. Второй приём: если дано $f(g(x))$, сделайте замену $g(x)=u$.'),
  misol=T(r'$u=2^x$ da $f(x)+f(-x)=6$; $f(t)=3$ boʻlsa $f(-t)=3$.',
          r'При $u=2^x$: $f(x)+f(-x)=6$; если $f(t)=3$, то $f(-t)=3$.'),
  ref='2025/26 №12'),
]))

SECTIONS.append(dict(key='trig', kod='E', ulush='4,5 %',
 nom=T('Kichik mavzular', 'Мелкие темы'),
 izoh=T('Alohida-alohida kam uchraydi, lekin birgalikda 2 ballgacha beradi — arzon ballar.',
        'По отдельности встречаются редко, но вместе дают до 2 баллов — дешёвые очки.'),
 items=[

I(nom=T('Trigonometrik asosiy ayniyatlar', 'Основные тригонометрические тождества'),
  tex=r'\sin^2\alpha+\cos^2\alpha=1,\qquad \tan\alpha=\frac{\sin\alpha}{\cos\alpha}',
  tex2=r'\sin2\alpha=2\sin\alpha\cos\alpha,\qquad \cos2\alpha=1-2\sin^2\alpha',
  nega=T('Keltirish: $\\sin(180^\\circ-\\alpha)=\\sin\\alpha$, '
         '$\\cos(180^\\circ-\\alpha)=-\\cos\\alpha$. '
         'Sinuslar teoremasidagi ikki xil javob aynan shundan kelib chiqadi.',
         'Формулы приведения: $\\sin(180^\\circ-\\alpha)=\\sin\\alpha$, '
         '$\\cos(180^\\circ-\\alpha)=-\\cos\\alpha$. '
         'Именно отсюда двойственность ответа в теореме синусов.'),
  misol=T(r'$\tan\alpha+\sin\alpha=1$ dan $\sin2\alpha=2(\sqrt2-1)$, '
          r'demak $(\sin2\alpha+2)^2=8$.',
          r'Из $\tan\alpha+\sin\alpha=1$ получаем $\sin2\alpha=2(\sqrt2-1)$, '
          r'значит $(\sin2\alpha+2)^2=8$.'),
  ref='2025/26 №25'),

I(nom=T('Ketma-ket foizlar', 'Последовательные проценты'),
  tex=r'15\%\ \text{va}\ 5\%\ \Longrightarrow\ 0{,}85\cdot0{,}95=0{,}8075',
  nega=T('**Qoʻshib $20\\%$ emas!** Umumiy chegirma $19{,}25\\%$. '
         'Oshirish uchun $1+p$, kamaytirish uchun $1-p$ koʻpaytuvchisi.',
         '**Не $20\\%$ в сумме!** Общая скидка $19{,}25\\%$. '
         'Для увеличения множитель $1+p$, для уменьшения $1-p$.'),
  misol=T(r'$4\,800\,000\cdot0{,}85\cdot0{,}95+120\,000=3\,996\,000$ soʻm.',
          r'$4\,800\,000\cdot0{,}85\cdot0{,}95+120\,000=3\,996\,000$ сумов.'),
  ref='20 masala №5'),

I(nom=T('Ish unumdorligi', 'Производительность труда'),
  tex=T(r'\text{ish}=1,\qquad \text{unum}=\frac1t,\qquad \frac1{t_1}+\frac1{t_2}', r'\text{работа}=1,\qquad \text{произв.}=\frac1t,\qquad \frac1{t_1}+\frac1{t_2}'),
  nega=T('Har doim butun ishni $1$ deb oling — shunda tenglama kasrlar bilan ishlaydi '
         'va javob tez chiqadi.',
         'Всегда принимайте всю работу за $1$ — тогда уравнение работает с дробями '
         'и ответ получается быстро.'),
  misol=T(r'$4\left(\tfrac1{12}+\tfrac1{18}\right)=\tfrac59$; qolgan $\tfrac49$ ni '
          r'ikkinchi ishchi $8$ soatda tugatadi.',
          r'$4\left(\tfrac1{12}+\tfrac1{18}\right)=\tfrac59$; оставшиеся $\tfrac49$ '
          r'второй рабочий сделает за $8$ часов.'),
  ref='20 masala №8'),

I(nom=T('Aralashma — tarozi qoidasi', 'Смесь — правило рычага'),
  tex=r'\frac{m_1}{m_2}=\frac{c_2-c}{c-c_1}',
  nega=T('Oʻrtacha narx chetlardan **teng uzoqlikda** boʻlsa, miqdorlar ham teng boʻladi.',
         'Если средняя цена **равноудалена** от крайних, то и количества равны.'),
  misol=T(r'$60\,000$ va $84\,000$ ning oʻrtasi $72\,000$, demak $15$ kg — $7{,}5+7{,}5$.',
          r'Середина между $60\,000$ и $84\,000$ — это $72\,000$, значит $15$ кг — $7{,}5+7{,}5$.'),
  ref='20 masala №7'),

I(nom=T('Butun va kasr qism', 'Целая и дробная часть'),
  tex=r'x=[x]+\{x\},\qquad [x]\in\mathbb{Z},\qquad 0\le\{x\}<1',
  nega=T('**Usul:** $[\\,\\cdot\\,]=n$ deb belgilang, $x$ ni $n$ orqali ifodalang va '
         '$n\\le\\text{ifoda}<n+1$ qoʻsh tengsizligini yeching.',
         '**Приём:** обозначьте $[\\,\\cdot\\,]=n$, выразите $x$ через $n$ и решите '
         'двойное неравенство $n\\le\\text{выражение}<n+1$.'),
  misol=T(r'$[3x+1]=2x-\tfrac12$: $x=\tfrac{2n+1}{4}$, $n\in\{-3;-2\}$, yigʻindi $-2$.',
          r'$[3x+1]=2x-\tfrac12$: $x=\tfrac{2n+1}{4}$, $n\in\{-3;-2\}$, сумма $-2$.'),
  ref='2025/26 №29 (11-sinf)'),
]))
