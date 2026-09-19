# -*- coding: utf-8 -*-
T = lambda uz, ru: (uz, ru)
I = lambda **k: k

CHROME = dict(
 title=T('Olimpiada formulalari · 10-sinf', 'Формулы олимпиады · 10 класс'),
 eyebrow=T('10-sinf · tuman (shahar) bosqichi', '10 класс · районный (городской) этап'),
 h1=T('Olimpiada formulalari va teoremalari', 'Формулы и теоремы олимпиады'),
 sub=T('20 kunlik rejaning nazariy qismi: kerak boʻladigan formulalar, teoremalar va '
       'lemmalar — har biri qayerda uchraganiga havola bilan.',
       'Теоретическая часть 20-дневного плана: нужные формулы, теоремы и леммы — '
       'каждая со ссылкой на задачу, где она встретилась.'),
 spec=None,  # filled in at the end of this file
 misol=T('Misol', 'Пример'), uchragan=T('Uchragan', 'Встречалась'),
 formula=T('ta formula va teorema', 'формул и теорем'),
 src=T('<b>Misollar manbasi:</b> 10-sinf tuman bosqichi variantlari — 2025/2026, 2024/2025, '
       '2024. Tuzuvchi: Anvarbek Xaydarov.',
       '<b>Источник примеров:</b> варианты районного этапа, 10 класс — 2025/2026, 2024/2025, '
       '2024. Составитель: Анварбек Хайдаров.'),
)
BADGE = {'teorema': T('Teorema', 'Теорема'), 'lemma': T('Lemma', 'Лемма')}

SECTIONS = [

dict(key='alg', kod='A', ulush='28,9 %',
 nom=T('Algebra va ayniyatlar', 'Алгебра и тождества'),
 izoh=T('Eng katta blok. 10-sinfda bu yerga logarifm, koʻphadlar va Nyuton ayniyatlari '
        'qoʻshiladi.',
        'Самый большой блок. В 10 классе сюда добавляются логарифмы, многочлены '
        'и тождества Ньютона.'),
 items=[

I(nom=T('Qisqa koʻpaytirish formulalari', 'Формулы сокращённого умножения'),
  tex=r'(a\pm b)^2=a^2\pm 2ab+b^2,\qquad a^2-b^2=(a-b)(a+b)',
  tex2=r'(a\pm b)^3=a^3\pm 3a^2b+3ab^2\pm b^3,\qquad a^3\pm b^3=(a\pm b)(a^2\mp ab+b^2)',
  nega=T('Eng koʻp ishlatiladigan toʻrtlik. $a^2-b^2$ ni koʻrganingizda darhol '
         'koʻpaytuvchilarga ajrating.',
         'Самая используемая четвёрка. Увидев $a^2-b^2$, сразу раскладывайте на множители.')),

I(nom=T('Kub ayirmasi hiylasi', 'Приём с кубом разности'),
  tex=r'(a-b)^3=a^3-b^3-3ab(a-b),\qquad ab=1\ \Longrightarrow\ a^3-b^3=(a-b)^3+3(a-b)',
  nega=T('$r-\\tfrac1r$ va $\\sqrt[3]{r}-\\tfrac1{\\sqrt[3]{r}}$ tipidagi masalalarning '
         'kaliti: koʻpaytma $1$ ga teng boʻlgani uchun ayniyat qisqaradi.',
         'Ключ к задачам вида $r-\\tfrac1r$ и $\\sqrt[3]{r}-\\tfrac1{\\sqrt[3]{r}}$: '
         'так как произведение равно $1$, тождество упрощается.'),
  misol=T('$\\sqrt[3]{r}-\\tfrac1{\\sqrt[3]{r}}=1$ dan $r-\\tfrac1r=1^3+3=4$, '
          'soʻng $r^3-\\tfrac1{r^3}=4^3+3\\cdot4=76$.',
          'Из $\\sqrt[3]{r}-\\tfrac1{\\sqrt[3]{r}}=1$ следует $r-\\tfrac1r=1^3+3=4$, '
          'затем $r^3-\\tfrac1{r^3}=4^3+3\\cdot4=76$.'),
  ref='2024/25 №7'),

I(nom=T('Uch hadning kvadrati', 'Квадрат трёхчлена'),
  tex=r'(a+b+c)^2=a^2+b^2+c^2+2(ab+bc+ca)',
  nega=T('$e_1=a+b+c$ va $e_2=ab+bc+ca$ ni bogʻlaydi — simmetrik masalada birinchi qadam.',
         'Связывает $e_1=a+b+c$ и $e_2=ab+bc+ca$ — первый шаг в симметрической задаче.')),

I(nom=T('Nyuton ayniyatlari', 'Тождества Ньютона'), tur='teorema',
  tex=r'p_k=e_1p_{k-1}-e_2p_{k-2}+e_3p_{k-3},\qquad p_k=x^k+y^k+z^k',
  nega=T('$e_1,e_2,e_3$ — elementar simmetrik koʻphadlar. Bu rekurrensiya yuqori '
         'darajalarga zinapoya boʻladi: $p_1=e_1$, $p_2=e_1^2-2e_2$.',
         '$e_1,e_2,e_3$ — элементарные симметрические многочлены. Эта рекуррентность — '
         'лестница к высшим степеням: $p_1=e_1$, $p_2=e_1^2-2e_2$.'),
  misol=T('$e_1=1$, $p_2=2\\Rightarrow e_2=-\\tfrac12$, $p_3=3\\Rightarrow e_3=\\tfrac16$. '
          'Unda $p_4=1\\cdot3+\\tfrac12\\cdot2+\\tfrac16\\cdot1=\\tfrac{25}{6}$.',
          '$e_1=1$, $p_2=2\\Rightarrow e_2=-\\tfrac12$, $p_3=3\\Rightarrow e_3=\\tfrac16$. '
          'Тогда $p_4=1\\cdot3+\\tfrac12\\cdot2+\\tfrac16\\cdot1=\\tfrac{25}{6}$.'),
  ref='2024/25 №26'),

I(nom=T('Uch kub ayniyati', 'Тождество трёх кубов'),
  tex=r'a^3+b^3+c^3-3abc=(a+b+c)\left(a^2+b^2+c^2-ab-bc-ca\right)',
  nega=T('**Natija:** $a+b+c=0$ boʻlsa $a^3+b^3+c^3=3abc$.',
         '**Следствие:** если $a+b+c=0$, то $a^3+b^3+c^3=3abc$.')),

I(nom=T('Simon hiylasi (SFFT)', 'Приём Симона (SFFT)'),
  tex=r'xy+ax+by=(x+b)(y+a)-ab',
  nega=T('Ikki nomaʼlumli tenglamani $(\;)(\;)=N$ shakliga keltiradi. '
         'Diofant masalalarining yarmi shu bilan yechiladi.',
         'Приводит уравнение с двумя неизвестными к виду $(\;)(\;)=N$. '
         'Половина диофантовых задач решается этим.')),

I(nom=T('Viyet teoremasi', 'Теорема Виета'), tur='teorema',
  tex=r'ax^2+bx+c=0\ \Longrightarrow\ x_1+x_2=-\frac{b}{a},\qquad x_1x_2=\frac{c}{a}',
  tex2=r'x^3+px^2+qx+r=0\ \Longrightarrow\ \sum x_i=-p,\quad \sum x_ix_j=q,\quad x_1x_2x_3=-r',
  nega=T('Ildizlar **parametrlar orqali** berilsa, Viyetdan ikki tenglama tuziladi — '
         'bu 10-sinfning tipik savoli.',
         'Если корни заданы **через параметры**, из Виета получаются два уравнения — '
         'типичная задача 10 класса.'),
  misol=T('$x_1=p+2q$, $x_2=4p+7q$ — $x^2+px+q=0$ ildizlari. Yigʻindidan $2p+3q=0$, '
          'koʻpaytmadan $\\tfrac{q^2}{2}=q$; $p\\ne0$ da $q=2$, $p=-3$.',
          '$x_1=p+2q$, $x_2=4p+7q$ — корни $x^2+px+q=0$. Из суммы $2p+3q=0$, '
          'из произведения $\\tfrac{q^2}{2}=q$; при $p\\ne0$ получаем $q=2$, $p=-3$.'),
  ref='2024 №15'),

I(nom=T('Simmetrik ifodalar', 'Симметрические выражения'),
  tex=r'x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2,\qquad x_1^4+x_2^4=\left(x_1^2+x_2^2\right)^2-2(x_1x_2)^2',
  nega=T('Ketma-ket qoʻllang: avval kvadratlar yigʻindisini, keyin uni yana shu ayniyatga qoʻying.',
         'Применяйте последовательно: сначала сумму квадратов, затем её же в то же тождество.'),
  misol=T('AP da $a_1+a_7=12\\Rightarrow a_3+a_5=12$, $a_3a_5=28$; demak '
          '$a_3^2+a_5^2=144-56=88$.',
          'В АП $a_1+a_7=12\\Rightarrow a_3+a_5=12$, $a_3a_5=28$; значит '
          '$a_3^2+a_5^2=144-56=88$.'),
  ref='2024 №14'),

I(nom=T('Diskriminant va parametr', 'Дискриминант и параметр'),
  tex=r'D=b^2-4ac:\quad D>0\ (2),\quad D=0\ (1),\quad D<0\ (0)',
  nega=T('**Kasrli tenglamada** «yagona yechim» — $D=0$ dan tashqari, ODZ ikkita ildizdan '
         'bittasini oʻchirgan hol ham boʻladi. Ikkalasini ham tekshiring.',
         '**В дробном уравнении** «единственное решение» — это не только $D=0$, но и случай, '
         'когда ОДЗ убирает один из двух корней. Проверяйте оба.'),
  ref='2024 №26'),

I(nom=T('Modul: asosiy xossalar', 'Модуль: основные свойства'),
  tex=r'|u|=|v|\iff u=\pm v,\qquad |x-a|=\text{masofa}',
  nega=T('Modulli tenglamada $x\\ge0$ va $x<0$ hollariga boʻling; har bir holda '
         'topilgan ildiz **oʻsha oraliqqa tushishini** tekshiring.',
         'В уравнении с модулем разбейте на случаи $x\\ge0$ и $x<0$; в каждом проверьте, '
         '**попадает ли** найденный корень в свой промежуток.'),
  ref='2024 №20'),

I(nom=T('Butun va kasr qism', 'Целая и дробная часть'),
  tex=r'x=[x]+\{x\},\qquad [x]\in\mathbb{Z},\qquad 0\le\{x\}<1',
  nega=T('**Usul:** $[\\,\\cdot\\,]=n$ deb belgilang, $x$ ni $n$ orqali ifodalang va '
         '$n\\le\\text{ifoda}<n+1$ qoʻsh tengsizligini yeching.',
         '**Приём:** обозначьте $[\\,\\cdot\\,]=n$, выразите $x$ через $n$ и решите '
         'двойное неравенство $n\\le\\text{выражение}<n+1$.'),
  misol=T('$x^2-8\\lfloor x\\rfloor+12=0$ da $\\lfloor x\\rfloor=n$ deb, '
          '$x=\\sqrt{8n-12}$ va $n\\le\\sqrt{8n-12}<n+1$ ni yeching.',
          'В $x^2-8\\lfloor x\\rfloor+12=0$ положите $\\lfloor x\\rfloor=n$, тогда '
          '$x=\\sqrt{8n-12}$, и решайте $n\\le\\sqrt{8n-12}<n+1$.'),
  ref='2024/25 №25'),

I(nom=T('Kasr qism juftligi', 'Пара дробных частей'), tur='lemma',
  tex=r'\{n-\sqrt n\}+\{n+\sqrt n\}=\begin{cases}1,& n\ \text{--- }\square\ \text{emas}\\'
      r'0,& n=k^2\end{cases}',
  nega=T('$\\{-t\\}=1-\\{t\\}$ ($t$ butun boʻlmasa) boʻlgani uchun. '
         'Uzun yigʻindida faqat toʻla kvadratlarni sanash qoladi.',
         'Потому что $\\{-t\\}=1-\\{t\\}$ (если $t$ не целое). '
         'В длинной сумме остаётся лишь посчитать полные квадраты.'),
  misol=T('$n=2\\dots2025$ — $2024$ ta son, ulardan $2^2\\dots45^2$ — $44$ tasi kvadrat. '
          'Yigʻindi $2024-44=1980$.',
          'Среди $n=2\\dots2025$ ($2024$ чисел) полных квадратов $2^2\\dots45^2$ — их $44$. '
          'Сумма $2024-44=1980$.'),
  ref='2024/25 №3'),

I(nom=T('Ichma-ich ildizni ochish', 'Раскрытие вложенного корня'),
  tex=r'\sqrt{a\pm2\sqrt{b}}=\sqrt{x}\pm\sqrt{y},\quad x+y=a,\ xy=b',
  nega=T('$x$ va $y$ — $t^2-at+b=0$ ning ildizlari. Natijani kvadratga koʻtarib tekshiring.',
         '$x$ и $y$ — корни $t^2-at+b=0$. Проверяйте результат возведением в квадрат.')),

I(nom=T('Logarifm xossalari', 'Свойства логарифма'),
  tex=r'\log_a(xy)=\log_a x+\log_a y,\qquad \log_a x^k=k\log_a x',
  tex2=r'\log_a b=\frac{\log_c b}{\log_c a},\qquad a^{\log_a x}=x,\qquad \log_a b=\frac{1}{\log_b a}',
  nega=T('Tenglamada avval **bitta logarifmga** yigʻing, soʻng asosga koʻtaring. '
         'ODZ: logarifm ostidagi ifoda musbat.',
         'В уравнении сначала сверните **в один логарифм**, затем возведите в основание. '
         'ОДЗ: подлогарифмическое выражение положительно.'),
  misol=T('$\\log_3(x^2y^2)=2\\log_3 y+6$ dan $\\log_3 x^2=6$, demak $x^2=729$, $x=27$.',
          'Из $\\log_3(x^2y^2)=2\\log_3 y+6$ следует $\\log_3 x^2=6$, значит $x^2=729$, $x=27$.'),
  ref='2025/26 №5'),

I(nom=T('Proporsiya va nisbatlar', 'Пропорции и отношения'),
  tex=r'\frac{a}{b}=\frac{c}{d}=k\ \Longrightarrow\ \frac{a+c}{b+d}=k,\qquad '
      r'\frac{a\pm b}{b}=\frac{c\pm d}{d}',
  nega=T('$\\dfrac{x-y}{x+y}$ va $\\dfrac{xy}{x+y}$ berilganda: ikkalasini $s=x+y$, '
         '$d=x-y$, $p=xy$ orqali yozing — sistema chiziqlilashadi.',
         'Если даны $\\dfrac{x-y}{x+y}$ и $\\dfrac{xy}{x+y}$: выразите всё через $s=x+y$, '
         '$d=x-y$, $p=xy$ — система становится линейной.'),
  ref='2024/25 №2'),

I(nom=T('Oʻrta arifmetik va oʻrta geometrik (AM–GM)',
        'Среднее арифметическое и геометрическое (AM–GM)'), tur='teorema',
  tex=r'a+\frac{k}{a}\ge2\sqrt{k}\quad(a>0),\qquad \frac{a_1+\dots+a_n}{n}\ge\sqrt[n]{a_1\cdots a_n}',
  nega=T('Tenglik $a=\\sqrt k$ da. **Usul:** shartlardan foydalanib hammasini '
         '**bitta** oʻzgaruvchiga keltiring, keyin AM–GM qoʻllang.',
         'Равенство при $a=\\sqrt k$. **Приём:** пользуясь условиями, сведите всё '
         'к **одной** переменной, затем применяйте AM–GM.'),
  misol=T('$ab=6$, $bc=15$ dan $a+b+2c=b+\\tfrac{36}{b}\\ge12$, tenglik $b=6$ da.',
          'Из $ab=6$, $bc=15$: $a+b+2c=b+\\tfrac{36}{b}\\ge12$, равенство при $b=6$.'),
  ref='2024 №21'),

I(nom=T('Oraliqlar usuli', 'Метод интервалов'),
  tex=r'(x-x_1)(x-x_2)\cdots(x-x_n)\ \gtrless\ 0',
  nega=T('Eng oʻngdan «+» bilan boshlang, har bir oddiy ildizda ishorani almashtiring. '
         'Kasrli yoki ildizli tengsizlikda maxrajni koʻpaytirmang.',
         'Начните справа со знака «+», меняйте знак в каждом простом корне. '
         'В дробном или иррациональном неравенстве не умножайте на знаменатель.'),
  misol=T('$(x-8)(8x^2+8)(8x+8)\\le0$ da $8x^2+8>0$ ni qisqartirib, '
          '$(x-8)(x+1)\\le0$, yaʼni $-1\\le x\\le8$.',
          'В $(x-8)(8x^2+8)(8x+8)\\le0$ сократим $8x^2+8>0$: '
          '$(x-8)(x+1)\\le0$, то есть $-1\\le x\\le8$.'),
  ref='2025/26 №9'),

I(nom=T('Kvadrat uchhadning ekstremumi', 'Экстремум квадратного трёхчлена'),
  tex=r'f(t)=at^2+bt+c,\qquad t_0=-\frac{b}{2a},\qquad f(t_0)=c-\frac{b^2}{4a}',
  nega=T('Almashtirish ($t=x^2$) bilan darajani tushiring, lekin yangi oʻzgaruvchining '
         'sohasini ($t\\ge0$) unutmang.',
         'Заменой ($t=x^2$) понижайте степень, но не забывайте область новой переменной ($t\\ge0$).')),

I(nom=T('Koʻphadga boʻlinish', 'Делимость многочленов'),
  tex=r'x^2-x+1=0\ \Longrightarrow\ \omega^3=-1,\quad \omega^6=1',
  nega=T('$P(x)$ koʻphad $Q(x)$ ga qoldiqsiz boʻlinsa, $Q$ ning har bir ildizi $P$ ning '
         'ham ildizi. Darajalarni $\\omega^3=-1$ bilan qisqartiring, soʻng $1$ va $\\omega$ '
         'oldidagi koeffitsiyentlarni nolga tenglang.',
         'Если $P(x)$ делится на $Q(x)$ нацело, каждый корень $Q$ — корень $P$. '
         'Понижайте степени через $\\omega^3=-1$, затем приравняйте нулю коэффициенты '
         'при $1$ и $\\omega$.'),
  misol=T('$20x^{11}+bx^{10}+cx^9+4$ uchun $(24-c)-(20+b)\\omega=0$, demak '
          '$c=24$, $b=-20$, $bc=-480$.',
          'Для $20x^{11}+bx^{10}+cx^9+4$ получаем $(24-c)-(20+b)\\omega=0$, значит '
          '$c=24$, $b=-20$, $bc=-480$.'),
  ref='2025/26 №29'),

I(nom=T('Multinomial koeffitsiyent', 'Мультиномиальный коэффициент'),
  tex=r'(A+B+C)^n=\sum\frac{n!}{i!\,j!\,k!}A^iB^jC^k,\qquad i+j+k=n',
  nega=T('Kerakli darajani beradigan $(i,j,k)$ uchliklarini saralang — odatda bittasi mos keladi.',
         'Переберите тройки $(i,j,k)$, дающие нужную степень — обычно подходит одна.'),
  misol=T('$(x^3-2025x+1)^3$ da $x^6$: $3i+j=6$ va $i+j\\le3$ dan faqat $i=2,j=0,k=1$, '
          'koeffitsiyent $\\tfrac{3!}{2!\\,1!}=3$.',
          'В $(x^3-2025x+1)^3$ для $x^6$: из $3i+j=6$ и $i+j\\le3$ подходит лишь '
          '$i=2,j=0,k=1$, коэффициент $\\tfrac{3!}{2!\\,1!}=3$.'),
  ref='2025/26 №21'),
]),
]

SECTIONS.append(dict(key='nt', kod='B', ulush='20,0 %',
 nom=T('Sonlar nazariyasi', 'Теория чисел'),
 izoh=T('Boʻlinish, boʻluvchilar soni, EKUB va Diofant tenglamalari. Ulush yildan yilga '
        'sezilarli tebranadi ($2025/26$ da $9$ ta savol).',
        'Делимость, число делителей, НОД и диофантовы уравнения. Доля сильно колеблется '
        'по годам (в $2025/26$ — $9$ задач).'),
 items=[

I(nom=T('Boʻlinish alomatlari', 'Признаки делимости'),
  tex=T(r'\begin{array}{ll} 4,25 & \text{oxirgi }2\\ 8,125 & \text{oxirgi }3\\'
        r' 3,9 & \textstyle\sum\text{raqamlar}\\ 11 & \pm\textstyle\sum\text{raqamlar}\end{array}',
        r'\begin{array}{ll} 4,25 & \text{последние }2\\ 8,125 & \text{последние }3\\'
        r' 3,9 & \textstyle\sum\text{цифр}\\ 11 & \pm\textstyle\sum\text{цифр}\end{array}'),
  nega=T('**Murakkab boʻluvchini ajrating:** $72=8\\cdot9$, $36=4\\cdot9$ — oʻzaro tub '
         'koʻpaytuvchilarga boʻlib, har birini alohida tekshiring.',
         '**Разложите составной делитель:** $72=8\\cdot9$, $36=4\\cdot9$ — разбейте '
         'на взаимно простые множители и проверяйте каждый отдельно.'),
  misol=T('$\\overline{*253*}$ soni $72$ ga karrali: $8\\mid\\overline{53*}$ dan oxirgi '
          'raqam aniqlanadi, soʻng $9\\mid$ raqamlar yigʻindisi birinchisini beradi.',
          'Число $\\overline{*253*}$ кратно $72$: из $8\\mid\\overline{53*}$ находится '
          'последняя цифра, затем $9\\mid$ сумма цифр даёт первую.'),
  ref='2024 №29'),

I(nom=T('Boʻlish algoritmi', 'Деление с остатком'),
  tex=r'a=bq+r,\qquad 0\le r<b',
  nega=T('Qoldiq boʻluvchidan $1$ ga kam boʻlsa, $a+1$ boʻluvchiga boʻlinadi — '
         'shartlarni birlashtirishning eng tez yoʻli.',
         'Если остаток на $1$ меньше делителя, то $a+1$ делится на делитель — '
         'самый быстрый способ объединить условия.')),

I(nom=T('Boʻluvchilar soni', 'Количество делителей'), tur='teorema',
  tex=r'\tau(n)=(\alpha_1+1)\cdots(\alpha_k+1)',
  nega=T('**Toʻla kvadrat boʻluvchilar:** $\\alpha_i$ juft; **toʻla kub:** $\\alpha_i$ '
         '$3$ ga karrali. «Kvadrat **yoki** kub» — qoʻshish-ayirish, kesishma '
         '$6$-darajalar.',
         '**Квадратные делители:** $\\alpha_i$ чётные; **кубические:** $\\alpha_i$ кратны $3$. '
         '«Квадрат **или** куб» — включения-исключения, пересечение — шестые степени.'),
  misol=T('$20^{22}=2^{44}5^{22}$: kvadratlar $23\\cdot12=276$, kublar $15\\cdot8=120$, '
          'kesishma $8\\cdot4=32$; jami $276+120-32=364$.',
          '$20^{22}=2^{44}5^{22}$: квадратов $23\\cdot12=276$, кубов $15\\cdot8=120$, '
          'пересечение $8\\cdot4=32$; всего $276+120-32=364$.'),
  ref='2024/25 №10'),

I(nom=T('EKUB: chiziqli kombinatsiya hiylasi', 'НОД: приём линейной комбинации'), tur='lemma',
  tex=r'd\mid A,\ d\mid B\ \Longrightarrow\ d\mid \alpha A+\beta B',
  nega=T('$\\alpha,\\beta$ ni shunday tanlangki, bitta oʻzgaruvchi **yoʻqolsin**. '
         '$\\gcd(m,n)=1$ shartida natija sonli chegarani beradi.',
         'Подберите $\\alpha,\\beta$ так, чтобы одна переменная **исчезла**. '
         'При $\\gcd(m,n)=1$ результат даёт числовую границу.'),
  misol=T('$d=\\gcd(30m+n,\\ 15n+2m)$: $15(30m+n)-(15n+2m)=448m$ va '
          '$30(15n+2m)-2(30m+n)=448n$, demak $d\\mid448$.',
          '$d=\\gcd(30m+n,\\ 15n+2m)$: $15(30m+n)-(15n+2m)=448m$ и '
          '$30(15n+2m)-2(30m+n)=448n$, значит $d\\mid448$.'),
  ref='2024/25 №16'),

I(nom=T('Lежandr formulasi', 'Формула Лежандра'), tur='teorema',
  tex=r'v_p(n!)=\left\lfloor\frac{n}{p}\right\rfloor+\left\lfloor\frac{n}{p^2}\right\rfloor+\cdots',
  nega=T('$n!$ dagi $p$ ning darajasi; nollar soni $=v_5(n!)$.',
         'Степень $p$ в $n!$; число нулей $=v_5(n!)$.')),

I(nom=T('Ketma-ket sonlar koʻpaytmasi', 'Произведение последовательных чисел'), tur='lemma',
  tex=T(r'n(n+1)\cdots(n+k-1)\ \vdots\ k!',
        r'n(n+1)\cdots(n+k-1)\ \vdots\ k!'),
  nega=T('$n(n+1)(n+2)$ har doim $6$ ga boʻlinadi. $12$ ga boʻlinish uchun qoʻshimcha '
         '$4\\mid$ koʻpaytma kerak — bu $n\\not\\equiv1\\ (\\mathrm{mod}\\ 4)$ da bajariladi.',
         '$n(n+1)(n+2)$ всегда делится на $6$. Для делимости на $12$ нужно дополнительно '
         '$4\\mid$ произведение — это выполняется при $n\\not\\equiv1\\ (\\mathrm{mod}\\ 4)$.'),
  misol=T('$n=1\\dots98$ dan $n\\equiv1\\ (\\mathrm{mod}\\ 4)$ boʻlganlari $24$ ta, '
          'demak $98-24=74$ ta koʻpaytma $12$ ga boʻlinadi.',
          'Среди $n=1\\dots98$ чисел с $n\\equiv1\\ (\\mathrm{mod}\\ 4)$ ровно $24$, '
          'значит $98-24=74$ произведения делятся на $12$.'),
  ref='2024 №19'),

I(nom=T('Oxirgi raqam va oxirgi ikki raqam', 'Последняя цифра и две последние'),
  tex=r'\text{mod }10:\ \text{davr}\mid4,\qquad \text{mod }100:\ \text{davr}\mid20',
  nega=T('$n\\equiv1\\ (\\mathrm{mod}\\ 4)$, $n>1$ boʻlsa $k^n\\equiv k\\ (\\mathrm{mod}\\ 10)$ — '
         'uzun yigʻindilarni shu bilan qisqartiring.',
         'При $n\\equiv1\\ (\\mathrm{mod}\\ 4)$, $n>1$ верно $k^n\\equiv k\\ (\\mathrm{mod}\\ 10)$ — '
         'так сокращают длинные суммы.')),

I(nom=T('Kvadratlarning qoldiqlari', 'Остатки квадратов'), tur='lemma',
  tex=r'n^2\equiv0,1\ (\mathrm{mod}\ 3),\qquad n^2\equiv0,1\ (\mathrm{mod}\ 4),'
      r'\qquad n^2\equiv0,1,4\ (\mathrm{mod}\ 8)',
  nega=T('«Yechim yoʻq» tipidagi masalalarni yopadi.',
         'Закрывает задачи типа «решений нет».')),

I(nom=T('Diofant: butun qismni ajratish', 'Диофант: выделение целой части'),
  tex=r'\frac{an+b}{cn+d}\ \text{butun}\ \Longrightarrow\ (cn+d)\mid(ad-bc)\ \text{tipidagi shart}',
  nega=T('Suratni maxrajga **mos koeffitsiyent bilan** koʻpaytirib, butun qismni ajrating: '
         'qoldiq oʻzgarmas son boʻlib qoladi, soʻng uning boʻluvchilari saralanadi.',
         'Умножьте числитель на **подходящий коэффициент** и выделите целую часть: '
         'в остатке останется константа, далее перебираются её делители.'),
  misol=T('$\\dfrac{35+2n}{3n+1}$: $3$ ga koʻpaytirsak '
          '$\\dfrac{105+6n}{3n+1}=2+\\dfrac{103}{3n+1}$; $103$ tub, demak $n=34$ — $1$ ta.',
          '$\\dfrac{35+2n}{3n+1}$: умножив на $3$, получим '
          '$\\dfrac{105+6n}{3n+1}=2+\\dfrac{103}{3n+1}$; $103$ простое, значит $n=34$ — $1$.'),
  ref='2024 №27'),

I(nom=T('Diofant: koʻpaytuvchilarga ajratish', 'Диофант: разложение на множители'),
  tex=r'(\;\cdot\;)(\;\cdot\;)=N\ \Longrightarrow\ N\ \text{---}\ ?',
  nega=T('Bitta oʻzgaruvchini ajratib, ikkinchisini qavsga yigʻing. Soʻng $N$ ning '
         'boʻluvchilari saralanadi va juftlik bilan cheklanadi.',
         'Выразите одну переменную, вторую соберите в скобку. Затем перебираются '
         'делители $N$ с ограничением по чётности.'),
  misol=T('$3x^2y-12xy-8y=7$ dan $y(3x^2-12x-8)=7$, demak $y\\mid7$ va '
          '$3x^2-12x-8\\in\\{7;1;-1;-7\\}$ — har birini butun $x$ uchun tekshiring.',
          'Из $3x^2y-12xy-8y=7$ следует $y(3x^2-12x-8)=7$, значит $y\\mid7$ и '
          '$3x^2-12x-8\\in\\{7;1;-1;-7\\}$ — проверьте каждый на целое $x$.'),
  ref='2024/25 №12'),

I(nom=T('Diofant: kvadratni toʻldirib chegaralash', 'Диофант: оценка выделением квадрата'),
  tex=r'm^2+2n^2=3(m+n)\ \Longrightarrow\ (2m-3)^2+2(2n-3)^2=27',
  nega=T('Ikkala tomonni $4$ ga koʻpaytirib toʻla kvadrat ajrating — chap tomon '
         'manfiy emas, demak har bir had chegaralangan va variantlar sanoqli.',
         'Умножьте обе части на $4$ и выделите полные квадраты — левая часть неотрицательна, '
         'значит каждое слагаемое ограничено и вариантов конечное число.'),
  ref='2024/25 №17'),

I(nom=T('Chiziqli Diofant tenglamasi', 'Линейное диофантово уравнение'),
  tex=r'ax+by=c\ \text{yechimga ega}\iff \gcd(a,b)\mid c',
  nega=T('Yechimlar $x\\to x+\\tfrac{b}{d}$, $y\\to y-\\tfrac{a}{d}$ qadam bilan oʻzgaradi — '
         'natural yechimlar soni shu bilan sanaladi.',
         'Решения меняются шагом $x\\to x+\\tfrac{b}{d}$, $y\\to y-\\tfrac{a}{d}$ — '
         'так и считают число натуральных решений.'),
  ref='2025/26 №26'),

I(nom=T('Boʻluvchilarni taqsimlash', 'Распределение делителей'),
  tex=r'xyz=p^{\alpha}q^{\beta}\ \Longrightarrow\ C_{\alpha+2}^{2}\cdot C_{\beta+2}^{2}',
  nega=T('Har bir tub sonning darajasi $x,y,z$ orasida **mustaqil** taqsimlanadi; '
         'har biri «toʻsiqlar va sharlar» masalasi.',
         'Степень каждого простого распределяется между $x,y,z$ **независимо**; '
         'каждое — задача о шарах и перегородках.')),

I(nom=T('Sonning oshkor koʻrinishi', 'Развёрнутая запись числа'),
  tex=r'\overline{abc}=100a+10b+c',
  nega=T('Raqamli masalada birinchi qadam. $11$ ga boʻlinish uchun $a-b+c$ ni qarang.',
         'Первый шаг в задаче с цифрами. Для делимости на $11$ смотрите $a-b+c$.'),
  ref='2024/25 №28'),
]))

SECTIONS.append(dict(key='geo', kod='C', ulush='17,8 %',
 nom=T('Geometriya', 'Геометрия'),
 izoh=T('Planimetriya. 10-sinfda yuzalar nisbati va koordinata usuli 9-sinfdagidan '
        'koʻproq soʻraladi.',
        'Планиметрия. В 10 классе чаще, чем в 9, спрашивают отношения площадей '
        'и координатный метод.'),
 items=[

I(nom=T('Yuz formulalari', 'Формулы площади'),
  tex=r'S=\tfrac12ah_a=\tfrac12ab\sin\gamma=\sqrt{p(p-a)(p-b)(p-c)}',
  tex2=r'S=pr=\frac{abc}{4R},\qquad p=\frac{a+b+c}{2}',
  nega=T('$S=\\tfrac{abc}{4R}$ — burchak va yuz berilganda $R$ ni topadi; '
         '$S=pr$ — ichki chizilgan aylana uchun.',
         '$S=\\tfrac{abc}{4R}$ — находит $R$, когда даны угол и площадь; '
         '$S=pr$ — для вписанной окружности.'),
  misol=T('$120^\\circ$ li teng yonli uchburchak, $S=\\sqrt3$: tomonlardan '
          '$a=b=2$, $c=2\\sqrt3$, va $R=\\tfrac{abc}{4S}=2$.',
          'Равнобедренный треугольник с углом $120^\\circ$ и $S=\\sqrt3$: '
          'стороны $a=b=2$, $c=2\\sqrt3$, и $R=\\tfrac{abc}{4S}=2$.'),
  ref='2024 №16'),

I(nom=T('Toʻgʻri burchakli uchburchakdagi metrik munosabatlar',
        'Метрические соотношения в прямоугольном треугольнике'), tur='teorema',
  tex=r'h^2=pq,\qquad a^2=c\,p,\qquad b^2=c\,q,\qquad c=p+q',
  nega=T('$p$ va $q$ — katetlarning gipotenuzadagi proyeksiyalari. '
         '$p-q$ va $pq$ berilsa, $(p+q)^2=(p-q)^2+4pq$ dan gipotenuza chiqadi.',
         '$p$ и $q$ — проекции катетов на гипотенузу. Если даны $p-q$ и $pq$, '
         'гипотенуза находится из $(p+q)^2=(p-q)^2+4pq$.'),
  misol=T('$h=6\\Rightarrow pq=36$; $p-q=5$ dan $(p+q)^2=25+144=169$, $c=13$, '
          'demak $S=\\tfrac12\\cdot13\\cdot6=39$.',
          '$h=6\\Rightarrow pq=36$; из $p-q=5$ получаем $(p+q)^2=169$, $c=13$, '
          'значит $S=\\tfrac12\\cdot13\\cdot6=39$.'),
  ref='2024 №30'),

I(nom=T('Sinuslar va kosinuslar teoremalari', 'Теоремы синусов и косинусов'), tur='teorema',
  tex=r'\frac{a}{\sin\alpha}=2R,\qquad c^2=a^2+b^2-2ab\cos\gamma',
  nega=T('Sinuslar teoremasi burchakni ikki xil beradi — burchaklar yigʻindisi bilan tekshiring.',
         'Теорема синусов даёт два варианта угла — проверяйте по сумме углов.')),

I(nom=T('Oʻxshashlik va yuzalar nisbati', 'Подобие и отношение площадей'), tur='teorema',
  tex=r'k=\frac{a_1}{a_2}\ \Longrightarrow\ \frac{S_1}{S_2}=k^2',
  nega=T('Asosga parallel chiziq oʻxshash uchburchak kesadi. Yuzlar nisbati berilsa, '
         'tomonlar nisbati — uning **kvadrat ildizi**.',
         'Прямая, параллельная основанию, отсекает подобный треугольник. Если дано отношение '
         'площадей, отношение сторон — **квадратный корень** из него.'),
  misol=T('$S_{KCN}=2S_{AKNB}$ boʻlsa $S_{KCN}=\\tfrac23 S_{ABC}$, demak '
          '$\\tfrac{CK}{CA}=\\sqrt{\\tfrac23}$ va $AK:CK=(\\sqrt3-\\sqrt2):\\sqrt2$.',
          'Если $S_{KCN}=2S_{AKNB}$, то $S_{KCN}=\\tfrac23 S_{ABC}$, значит '
          '$\\tfrac{CK}{CA}=\\sqrt{\\tfrac23}$ и $AK:CK=(\\sqrt3-\\sqrt2):\\sqrt2$.'),
  ref='2024 №12'),

I(nom=T('Ichki nuqtadan parallel chiziqlar', 'Параллельные через внутреннюю точку'), tur='lemma',
  tex=r'\sqrt{S}=\sqrt{S_1}+\sqrt{S_2}+\sqrt{S_3}',
  nega=T('Uchburchak ichidagi nuqtadan tomonlarga parallel uchta chiziq oʻtkazilsa, '
         'hosil boʻlgan uchta kichik uchburchak asosiy uchburchakka **oʻxshash**, '
         'va ularning chiziqli oʻlchamlari yigʻindisi asosiynikiga teng.',
         'Если через точку внутри треугольника провести три прямые, параллельные сторонам, '
         'три малых треугольника **подобны** исходному, а сумма их линейных размеров '
         'равна размеру исходного.'),
  misol=T('$S_1,S_2,S_3=2,6,18$: $\\sqrt S=\\sqrt2+\\sqrt6+3\\sqrt2=4\\sqrt2+\\sqrt6$, '
          'demak $S=38+16\\sqrt3$.',
          '$S_1,S_2,S_3=2,6,18$: $\\sqrt S=\\sqrt2+\\sqrt6+3\\sqrt2=4\\sqrt2+\\sqrt6$, '
          'значит $S=38+16\\sqrt3$.'),
  ref='2024/25 №27'),

I(nom=T('Bir xil balandlikdagi uchburchaklar', 'Треугольники с общей высотой'), tur='lemma',
  tex=r'\frac{S_1}{S_2}=\frac{a_1}{a_2}',
  nega=T('Diagonallar hosil qilgan toʻrt uchburchakda '
         '$[AOB]\\cdot[COD]=[BOC]\\cdot[AOD]$ shundan kelib chiqadi.',
         'Отсюда следует, что для четырёх треугольников от диагоналей '
         '$[AOB]\\cdot[COD]=[BOC]\\cdot[AOD]$.'),
  ref='2025/26 №17'),

I(nom=T('Ichki chizilgan burchak va Fales', 'Вписанный угол и Фалес'), tur='teorema',
  tex=r'\angle ABC=\tfrac12\overset{\frown}{AC},\qquad \text{diametr}\Rightarrow90^\circ',
  nega=T('Perpendikulyar vatarlar masalasida burchaklarni **yoylar orqali** yozing: '
         'kesishgan vatarlar burchagi $=\\tfrac12$(ikki yoy yigʻindisi).',
         'В задаче о перпендикулярных хордах записывайте углы **через дуги**: '
         'угол между пересекающимися хордами $=\\tfrac12$(сумма двух дуг).'),
  ref='2024 №9'),

I(nom=T('Trapetsiyaga ichki chizilgan aylana', 'Окружность, вписанная в трапецию'), tur='teorema',
  tex=r'a+c=b+d,\qquad h=2r',
  nega=T('Teng yonli trapetsiyada bundan yon tomon $=\\dfrac{a+b}{2}$ kelib chiqadi, '
         'yaʼni yon tomon **oʻrta chiziqqa teng**. Yuzi $S=\\dfrac{a+b}{2}\\cdot h$.',
         'В равнобедренной трапеции отсюда боковая сторона $=\\dfrac{a+b}{2}$, то есть '
         'она **равна средней линии**. Площадь $S=\\dfrac{a+b}{2}\\cdot h$.'),
  misol=T('$r=3\\Rightarrow h=6$; bitta asos $a=2h=12$. Oʻrta chiziq va $h$ orqali $S=54$.',
          '$r=3\\Rightarrow h=6$; одно основание $a=2h=12$. Через среднюю линию и $h$: $S=54$.'),
  ref='2024 №22'),

I(nom=T('Nuqtaning aylanaga nisbatan darajasi', 'Степень точки относительно окружности'),
  tur='teorema',
  tex=r'PA\cdot PB=PC\cdot PD,\qquad PT^2=PA\cdot PB',
  nega=T('Kesishuvchi vatarlar va sekushchiylar uchun bir xil.',
         'Одинаково для пересекающихся хорд и секущих.')),

I(nom=T('Ichki va tashqi chizilgan toʻrtburchak', 'Вписанный и описанный четырёхугольник'),
  tur='teorema',
  tex=T(r'\text{ichki}:\ \alpha+\gamma=180^\circ,\qquad \text{tashqi}:\ a+c=b+d',
        r'\text{вписанный}:\ \alpha+\gamma=180^\circ,\qquad \text{описанный}:\ a+c=b+d'),
  nega=T('Teskarisi ham oʻrinli — isbotlash uchun ishlatiladi.',
         'Обратные утверждения тоже верны — используются для доказательства.')),

I(nom=T('Diagonal oʻrtasidan tomonlargacha teng masofa',
        'Равные расстояния от середины диагонали до сторон'), tur='lemma',
  tex=r'\text{AC oʻrtasidan barcha tomonlargacha}\ =r\ \Longrightarrow\ \text{aylana ichki chizilgan}',
  nega=T('Bunday toʻrtburchakka aylana ichki chizilgan va uning markazi $AC$ oʻrtasida. '
         'Demak $AC$ — diametr boʻlmagan, lekin markaz undadir: $S=\\tfrac12 d_1d_2$ '
         'ni tekshiring.',
         'В такой четырёхугольник вписана окружность, и её центр — середина $AC$. '
         'Проверьте формулу $S=\\tfrac12 d_1d_2$ для случая перпендикулярных диагоналей.'),
  ref='2024 №25'),

I(nom=T('Aylana tenglamasi', 'Уравнение окружности'),
  tex=r'x^2+y^2+Dx+Ey+F=0\ \Longrightarrow\ (x-x_0)^2+(y-y_0)^2=R^2',
  nega=T('Toʻla kvadrat ajrating: $x^2-2x=(x-1)^2-1$. Markaz va radius shundan chiqadi.',
         'Выделите полный квадрат: $x^2-2x=(x-1)^2-1$. Отсюда центр и радиус.'),
  misol=T('$x^2+y^2=2x+6y+6$ dan $(x-1)^2+(y-3)^2=16$: markaz $(1;3)$, $R=4$.',
          'Из $x^2+y^2=2x+6y+6$: $(x-1)^2+(y-3)^2=16$, центр $(1;3)$, $R=4$.'),
  ref='2024/25 №15'),

I(nom=T('Aylanada chiziqli ifodaning ekstremumi',
        'Экстремум линейного выражения на окружности'), tur='teorema',
  tex=r'\max(ax+by)=ax_0+by_0+R\sqrt{a^2+b^2}',
  nega=T('$ax+by=c$ — toʻgʻri chiziqlar oilasi; $c$ ning eng katta qiymati chiziq '
         'aylanaga **uringanda** boʻladi, masofa $=R$.',
         '$ax+by=c$ — семейство прямых; наибольшее $c$ достигается, когда прямая '
         '**касается** окружности, расстояние $=R$.'),
  misol=T('Markaz $(1;3)$, $R=4$: $\\max(4x+3y)=4+9+4\\cdot5=33$.',
          'Центр $(1;3)$, $R=4$: $\\max(4x+3y)=4+9+4\\cdot5=33$.'),
  ref='2024/25 №15'),

I(nom=T('Parabola uchi', 'Вершина параболы'),
  tex=r'y=ax^2+bx+c\ \Longrightarrow\ x_0=-\frac{b}{2a},\quad y_0=c-\frac{b^2}{4a}',
  nega=T('Koordinatali masalada avval uchni toping, soʻng masofa formulasini qoʻllang.',
         'В координатной задаче сначала найдите вершину, затем применяйте формулу расстояния.'),
  ref='2024 №2'),

I(nom=T('Sektor va segment yuzi', 'Площадь сектора и сегмента'),
  tex=r'S_{\text{sek}}=\frac{\alpha}{2}R^2\ (\alpha\ \text{rad}),\qquad '
      r'S_{\text{seg}}=\frac{R^2}{2}\left(\alpha-\sin\alpha\right)',
  nega=T('Murakkab boʻyalgan shakl — sektor, uchburchak va segmentlarning '
         '**yigʻindisi/ayirmasi** sifatida yoziladi. Burchak $\\arctan$ orqali chiqishi mumkin.',
         'Сложная закрашенная фигура записывается как **сумма/разность** секторов, '
         'треугольников и сегментов. Угол может выражаться через $\\arctan$.'),
  ref='2024/25 №29'),

I(nom=T('Uchburchak tengsizligi', 'Неравенство треугольника'),
  tex=r'|b-c|<a<b+c',
  nega=T('Kesmalar berilganda eng katta tomonni qolgan ikkitasining yigʻindisi bilan solishtiring.',
         'При заданных отрезках сравнивайте наибольшую сторону с суммой двух других.'),
  ref='2025/26 №18'),
]))

SECTIONS.append(dict(key='comb', kod='D', ulush='15,6 %',
 nom=T('Funksiyalar va ketma-ketliklar', 'Функции и последовательности'),
 izoh=T('<b>10-sinfning asosiy yangiligi.</b> Funksional tenglamalar ulushi 9-sinfdagidan '
        '$2{,}5$ barobar katta va deyarli hammasi ochiq blokda.',
        '<b>Главное новшество 10 класса.</b> Доля функциональных уравнений в $2{,}5$ раза '
        'больше, чем в 9 классе, и почти все они в открытом блоке.'),
 items=[

I(nom=T('Funksional tenglama: qiymat qoʻyish', 'Функциональное уравнение: подстановка'),
  tex=r'x=0,\quad x=1,\quad x\to-x,\quad x\to\tfrac1x',
  nega=T('**Asosiy usul.** Shartda $f(0)$ yoki boshqa noaniq kattalik qatnashsa, '
         '$x=0$ qoʻyib avval **oʻsha kattalikni** toping, keyin umumiy formulani chiqaring.',
         '**Основной приём.** Если в условии участвует $f(0)$ или другая неизвестная '
         'величина, подстановкой $x=0$ сначала найдите **её**, потом выводите общую формулу.'),
  misol=T('$f(0)\\bigl(f(x)+2\\bigr)=4x-1$. $x=0$: $f(0)^2+2f(0)+1=0\\Rightarrow f(0)=-1$. '
          'Unda $f(x)=-4x-1$ va $f(-1)=3$.',
          '$f(0)\\bigl(f(x)+2\\bigr)=4x-1$. При $x=0$: $f(0)^2+2f(0)+1=0\\Rightarrow f(0)=-1$. '
          'Тогда $f(x)=-4x-1$ и $f(-1)=3$.'),
  ref='2024 №18'),

I(nom=T('Oʻzgaruvchilarni ajratish', 'Разделение переменных'), tur='lemma',
  tex=r'A(x)+B(y)=C(x)+D(y)\ \Longrightarrow\ A(x)-C(x)=D(y)-B(y)=\text{const}',
  nega=T('Ikki tomonda **har xil oʻzgaruvchilar** qolsa, ikkalasi ham oʻzgarmasga teng. '
         'Bu $\\sin x+\\cos y=f(x)+f(y)+g(x)-g(y)$ tipidagi tenglamalarning kaliti.',
         'Если по разные стороны остаются **разные переменные**, обе части равны константе. '
         'Это ключ к уравнениям вида $\\sin x+\\cos y=f(x)+f(y)+g(x)-g(y)$.'),
  ref='2024/25 №24'),

I(nom=T('Juft va toq funksiya', 'Чётная и нечётная функция'),
  tex=r'\text{toq}:\ f(-x)=-f(x)\ \Longrightarrow\ f(0)=0;\qquad \text{juft}:\ f(-x)=f(x)',
  nega=T('Toqlik sharti parametrni bir zumda beradi: $f(0)=0$ tenglamasini yozing. '
         'Soʻng qiymatlar sohasini topish uchun $a^x+1>1$ kabi chegaralardan foydalaning.',
         'Условие нечётности мгновенно даёт параметр: запишите $f(0)=0$. '
         'Затем для области значений пользуйтесь оценками вида $a^x+1>1$.'),
  misol=T('$f(x)=\\tfrac1a-\\tfrac1{a^x+1}$ toq boʻlsa $f(0)=\\tfrac1a-\\tfrac12=0$, '
          'demak $a=2$ va qiymatlar sohasi $\\left(-\\tfrac12;\\tfrac12\\right)$.',
          'Если $f(x)=\\tfrac1a-\\tfrac1{a^x+1}$ нечётна, то $f(0)=\\tfrac1a-\\tfrac12=0$, '
          'значит $a=2$, а область значений $\\left(-\\tfrac12;\\tfrac12\\right)$.'),
  ref='2024/25 №4'),

I(nom=T('Yigʻindi hiylasi', 'Приём суммирования'),
  tex=r'f(x)+f(-x)=\text{const},\qquad f(x)+f\!\left(\tfrac1x\right)=\text{const}',
  nega=T('$\\dfrac{1}{1+a^{t}}+\\dfrac{1}{1+a^{-t}}=1$ — bu ayniyatni yodda saqlang; '
         'bir necha bunday had boʻlsa yigʻindi butun songa teng boʻladi.',
         'Запомните тождество $\\dfrac{1}{1+a^{t}}+\\dfrac{1}{1+a^{-t}}=1$; '
         'при нескольких таких слагаемых сумма оказывается целым числом.'),
  misol=T('$f(x)=\\sum_{a\\in\\{2,4,8\\}}\\dfrac{1}{1+a^{\\lg x}}$ uchun '
          '$f(x)+f\\!\\left(\\tfrac1x\\right)=3$.',
          'Для $f(x)=\\sum_{a\\in\\{2,4,8\\}}\\dfrac{1}{1+a^{\\lg x}}$ верно '
          '$f(x)+f\\!\\left(\\tfrac1x\\right)=3$.'),
  ref='2025/26 №12'),

I(nom=T('Ikki oʻzgaruvchili rekurrensiya', 'Рекуррентность от двух переменных'),
  tex=r'f(m+1,n)=f(m,n)+m,\quad f(m,n+1)=f(m,n)-n',
  nega=T('Har bir yoʻnalish boʻyicha **yigʻindiga** aylantiring: '
         '$f(p,q)=f(1,1)+\\sum_{m=1}^{p-1}m-\\sum_{n=1}^{q-1}n$. '
         'Natija $\\tfrac{p(p-1)}{2}-\\tfrac{q(q-1)}{2}$ tipidagi ifoda boʻladi.',
         'Превратите каждое направление в **сумму**: '
         '$f(p,q)=f(1,1)+\\sum_{m=1}^{p-1}m-\\sum_{n=1}^{q-1}n$. '
         'Получится выражение вида $\\tfrac{p(p-1)}{2}-\\tfrac{q(q-1)}{2}$.'),
  ref='2024/25 №21'),

I(nom=T('Chiziqli funksiyani tiklash', 'Восстановление линейной функции'),
  tex=r'q(x)=kx+b,\qquad p(x)=q(30x)+33',
  nega=T('Ikki qiymat berilsa, $k$ va $b$ uchun ikki chiziqli tenglama chiqadi. '
         'Kompozitsiyada argumentni **oʻrniga qoʻyishni** unutmang.',
         'По двум значениям получаются два линейных уравнения на $k$ и $b$. '
         'В композиции не забудьте **подставить** аргумент.'),
  ref='2024/25 №14'),

I(nom=T('Arifmetik progressiya', 'Арифметическая прогрессия'),
  tex=r'a_n=a_1+(n-1)d,\qquad S_n=\frac{a_1+a_n}{2}\,n',
  nega=T('**Asosiy xossa:** indekslar yigʻindisi teng boʻlsa, hadlar yigʻindisi ham teng: '
         '$a_1+a_7=a_3+a_5$. Uchta hadning yigʻindisi oʻrtadagisining uch barobari.',
         '**Ключевое свойство:** при равных суммах индексов равны и суммы членов: '
         '$a_1+a_7=a_3+a_5$. Сумма трёх членов — утроенный средний.'),
  misol=T('$a_1+a_7=12\\Rightarrow a_3+a_5=12$; $a_3a_5=28$ bilan '
          '$a_3^2+a_5^2=144-56=88$.',
          'Из $a_1+a_7=12$ следует $a_3+a_5=12$; вместе с $a_3a_5=28$ '
          'получаем $a_3^2+a_5^2=88$.'),
  ref='2024 №14'),

I(nom=T('Geometrik progressiya', 'Геометрическая прогрессия'),
  tex=r'b_n=b_1q^{\,n-1},\qquad b_k\cdot b_{n+1-k}=b_1b_n,\qquad b_n^2=b_{n-1}b_{n+1}',
  nega=T('**Indekslar yigʻindisi** bir xil boʻlsa, koʻpaytmalar teng. Uchta had berilganda '
         'ularning koʻpaytmasi oʻrtadagisining kubiga teng.',
         'При равных **суммах индексов** равны произведения. Для трёх членов их произведение '
         'равно кубу среднего.'),
  misol=T('$b_1b_3b_{11}=b_5^3=8\\Rightarrow b_5=2$; $b_2b_8=b_5^2=4$.',
          '$b_1b_3b_{11}=b_5^3=8\\Rightarrow b_5=2$; $b_2b_8=b_5^2=4$.'),
  ref='2024 №7'),

I(nom=T('Asosiy yigʻindilar', 'Основные суммы'),
  tex=r'\sum_{k=1}^{n}k=\frac{n(n+1)}{2},\qquad \sum_{k=1}^{n}(2k-1)=n^2',
  tex2=r'\sum_{k=1}^{n}k^2=\frac{n(n+1)(2n+1)}{6},\qquad \sum_{k=1}^{n}k^3=\left(\frac{n(n+1)}{2}\right)^2',
  nega=T('Toq sonlar yigʻindisi $n^2$ — shartda koʻrinsa darhol almashtiring.',
         'Сумма нечётных равна $n^2$ — увидев в условии, сразу заменяйте.')),

I(nom=T('Teleskoplash', 'Телескопирование'),
  tex=r'\sum_{k=1}^{n}\bigl(f(k+1)-f(k)\bigr)=f(n+1)-f(1)',
  nega=T('Faktorialli hadlarda $f(k)=k\\cdot k!$ yoki $f(k)=k^2\\cdot k!$ ni sinang: '
         '$(k^2+1)k!=(k+1)!\\,(k+1)-k!\\,k$ kabi ajralish topilsa, yigʻindi bir hadga siqiladi.',
         'Для членов с факториалом пробуйте $f(k)=k\\cdot k!$ или $f(k)=k^2\\cdot k!$: '
         'если найдётся разложение вида $(k^2+1)k!=(k+1)!\\,(k+1)-k!\\,k$, сумма сворачивается.'),
  ref='2024/25 №23'),

I(nom=T('Funksiya qiymatlar sohasi', 'Область значений функции'),
  tex=r'y=\frac{k}{\sin x+c}\ \Longrightarrow\ \sin x\in[-1;1]\ \Rightarrow\ '
      r'y\in\left[\frac{k}{c+1};\frac{k}{c-1}\right]',
  nega=T('Maxrajning chegaralarini oling, soʻng kasr **kamayuvchi** boʻlgani uchun '
         'chegaralar oʻrin almashadi.',
         'Возьмите границы знаменателя; так как дробь **убывает**, границы меняются местами.'),
  misol=T('$y=\\tfrac{12}{\\sin x+5}$: maxraj $[4;6]$, demak $y\\in[2;3]$.',
          '$y=\\tfrac{12}{\\sin x+5}$: знаменатель $[4;6]$, значит $y\\in[2;3]$.'),
  ref='2024 №6'),
]))

SECTIONS.append(dict(key='comb', kod='E', ulush='11,1 %',
 nom=T('Kombinatorika va ehtimollik', 'Комбинаторика и вероятность'),
 izoh=T('Ehtimollik 9-sinfda umuman yoʻq edi. 10-sinfda uch yilda $3$ ta savol berdi — '
        'hammasi ochiq blokda.',
        'Вероятности в 9 классе не было вовсе. В 10 классе — $3$ задачи за три года, '
        'все в открытом блоке.'),
 items=[

I(nom=T('Oʻrin almashtirish va tanlash', 'Перестановки и сочетания'),
  tex=r'P_n=n!,\qquad A_n^k=\frac{n!}{(n-k)!},\qquad C_n^k=\frac{n!}{k!\,(n-k)!}',
  nega=T('Tartib muhimmi? — ha boʻlsa $A$, yoʻq boʻlsa $C$.',
         'Важен ли порядок? — если да, то $A$, если нет, то $C$.')),

I(nom=T('Teng guruhlarga ajratish', 'Разбиение на равные группы'), tur='lemma',
  tex=r'\frac{n!}{(m!)^k\,k!}\quad (n=mk,\ \text{guruhlar farqlanmaydi})',
  nega=T('$k!$ ga boʻlish — guruhlarning **tartibi muhim emasligi** uchun. '
         'Agar guruhlar nomlangan boʻlsa, $k!$ ga boʻlmang.',
         'Деление на $k!$ — потому что **порядок групп не важен**. '
         'Если группы именованы, на $k!$ делить не нужно.'),
  misol=T('$12$ oʻquvchini $4$ kishilik $3$ guruhga: '
          '$\\dfrac{12!}{(4!)^3\\,3!}=5775$.',
          '$12$ учеников на $3$ группы по $4$: $\\dfrac{12!}{(4!)^3\\,3!}=5775$.'),
  ref='2024/25 №6'),

I(nom=T('«Yonma-yon boʻlmasin» usuli', 'Приём «не рядом»'), tur='lemma',
  tex=r'n\ \text{ta boshqa}\ \Longrightarrow\ n+1\ \text{ta boʻshliq}\ \Longrightarrow\ C_{n+1}^{k}',
  nega=T('Avval cheklovsiz buyumlarni tering, soʻng qolganlarni **ular orasidagi '
         'boʻshliqlarga** qoʻying — shunda hech ikkitasi yonma-yon tushmaydi.',
         'Сначала расставьте предметы без ограничений, затем остальные вставляйте '
         '**в промежутки между ними** — тогда никакие два не окажутся рядом.'),
  misol=T('$10$ koʻk shar $11$ ta boʻshliq beradi; $10$ qizilni ularga qoʻyish '
          '$C_{11}^{10}=11$ usulda.',
          '$10$ синих шаров дают $11$ промежутков; разместить $10$ красных можно '
          '$C_{11}^{10}=11$ способами.'),
  ref='2024/25 №8'),

I(nom=T('Toʻsiqlar va sharlar', 'Шары и перегородки'), tur='teorema',
  tex=r'x_1+\dots+x_k=n,\ x_i\ge0\ \Longrightarrow\ C_{n+k-1}^{\,k-1}',
  nega=T('$x_i\\ge1$ boʻlsa, avval har biridan $1$ ayiring. Turli buyumlarni taqsimlashda '
         'esa bu formula **ishlamaydi** — u yerda $k^n$ yoki Stirling sonlari kerak.',
         'При $x_i\\ge1$ сначала вычтите по единице. Для **различимых** предметов эта '
         'формула не годится — там нужны $k^n$ или числа Стирлинга.'),
  ref='2024/25 №11'),

I(nom=T('Nyuton binomi', 'Бином Ньютона'), tur='teorema',
  tex=r'(1+a)^n=\sum_{k=0}^{n}C_n^k a^k,\qquad \sum_k C_n^k=2^n,\qquad \sum_k(-1)^kC_n^k=0',
  nega=T('Uzun yigʻindida $\\dfrac{n!}{k!\\,(n-k)!}$ koʻrsangiz — bu $C_n^k$, '
         'va butun yigʻindi $(1+a)^n$ ga yigʻiladi.',
         'Если в длинной сумме видите $\\dfrac{n!}{k!\\,(n-k)!}$ — это $C_n^k$, '
         'и вся сумма сворачивается в $(1+a)^n$.'),
  misol=T('$\\displaystyle\\sum_{k=0}^{2025}\\frac{2025!\\,(-1)^k2^k}{k!\\,(2025-k)!}'
          '=(1-2)^{2025}=-1$.',
          '$\\displaystyle\\sum_{k=0}^{2025}\\frac{2025!\\,(-1)^k2^k}{k!\\,(2025-k)!}'
          '=(1-2)^{2025}=-1$.'),
  ref='2024/25 №1'),

I(nom=T('Teskarisini sanash', 'Подсчёт дополнения'),
  tex=r'N_{\text{kerakli}}=N_{\text{jami}}-N_{\text{teskari}}',
  nega=T('«Kamida bitta» shartida «umuman yoʻq» ni sanash deyarli har doim tezroq.',
         'При условии «хотя бы один» считать «ни одного» почти всегда быстрее.'),
  misol=T('$1\\dots8888$ orasida $8$ raqami bor sonlar: $8888-5831=3057$.',
          'Среди $1\\dots8888$ чисел с цифрой $8$: $8888-5831=3057$.'),
  ref='2025/26 №28'),

I(nom=T('Klassik ehtimollik', 'Классическая вероятность'),
  tex=r'P=\frac{m}{n}=\frac{\text{qulay hollar}}{\text{barcha hollar}}',
  nega=T('Bosqichli tasodifiy jarayonda **holatlar daraxti**ni chizing yoki har bir '
         'qadam uchun oʻtish ehtimolini yozib, koʻpaytiring.',
         'В пошаговом случайном процессе нарисуйте **дерево состояний** или выпишите '
         'вероятности перехода на каждом шаге и перемножьте.'),
  ref='2024/25 №30'),

I(nom=T('Geometrik ehtimollik', 'Геометрическая вероятность'),
  tex=r'P=\frac{S_{\text{qulay}}}{S_{\text{jami}}}',
  nega=T('Ikki tasodifiy son $(x;y)$ — toʻgʻri toʻrtburchak ichidagi nuqta. '
         '$|x-y|\\le d$ sharti diagonal boʻylab **tasma** hosil qiladi; '
         'qulay yuzni butun yuzdan burchaklardagi ikki uchburchakni ayirib toping.',
         'Два случайных числа $(x;y)$ — точка в прямоугольнике. Условие $|x-y|\\le d$ '
         'задаёт **полосу** вдоль диагонали; благоприятную площадь находите, вычитая '
         'из всей площади два угловых треугольника.'),
  ref='2024/25 №20'),

I(nom=T('Invariant va juftlik', 'Инвариант и чётность'), tur='lemma',
  tex=r'\text{har bir amalda oʻzgarmaydigan kattalik}\ \Longrightarrow\ \text{imkonsizlik isboti}',
  nega=T('Toq sondagi obyekt aylantirilsa, «gerb tomoni yuqorida» boʻlganlar sonining '
         '**juftligi har safar oʻzgaradi**. Boshlangʻich va kerakli holatning juftligini '
         'solishtiring — shu bilan minimal qadamlar soni ham chiqadi.',
         'Если переворачивается нечётное число объектов, **чётность** количества «гербом '
         'вверх» меняется каждый раз. Сравните чётность начального и требуемого состояния — '
         'отсюда же получается и минимальное число ходов.'),
  misol=T('Har yurishda $7$ ta tanga aylantiriladi; $100$ dan $0$ ga oʻtish uchun '
          'juft sondagi yurish kerak, eng kamida $16$.',
          'За ход переворачивают $7$ монет; для перехода от $100$ к $0$ нужно чётное '
          'число ходов, минимум $16$.'),
  ref='2024/25 №18'),
]))

SECTIONS.append(dict(key='trig', kod='F', ulush='6,6 %',
 nom=T('Trigonometriya va matn masalalari', 'Тригонометрия и текстовые задачи'),
 izoh=T('Trigonometriya 9-sinfdagidan $4$ barobar koʻp. Asosan soddalashtirish va '
        '$\\tan$ orqali hisoblash.',
        'Тригонометрии в $4$ раза больше, чем в 9 классе. В основном упрощение '
        'и вычисление через $\\tan$.'),
 items=[

I(nom=T('Asosiy ayniyatlar', 'Основные тождества'),
  tex=r'\sin^2\alpha+\cos^2\alpha=1,\qquad \tan\alpha=\frac{\sin\alpha}{\cos\alpha},'
      r'\qquad 1+\tan^2\alpha=\frac{1}{\cos^2\alpha}',
  nega=T('Uchinchi ayniyat $\\tan$ berilganda $\\cos$ ni topishning eng tez yoʻli.',
         'Третье тождество — самый быстрый способ найти $\\cos$, когда дан $\\tan$.')),

I(nom=T('Ikkilangan burchak', 'Двойной угол'),
  tex=r'\sin2\alpha=2\sin\alpha\cos\alpha,\qquad \cos2\alpha=1-2\sin^2\alpha=2\cos^2\alpha-1',
  tex2=r'\sin2\alpha=\frac{2\tan\alpha}{1+\tan^2\alpha},\qquad '
       r'\cos2\alpha=\frac{1-\tan^2\alpha}{1+\tan^2\alpha}',
  nega=T('**Ikkinchi qator muhim:** $\\tan\\alpha$ berilgan boʻlsa, $\\sin$ va $\\cos$ ni '
         'alohida topmasdan darhol javobga chiqasiz.',
         '**Вторая строка важна:** если дан $\\tan\\alpha$, ответ получается сразу, '
         'без отдельного вычисления $\\sin$ и $\\cos$.'),
  misol=T('$\\tan t=\\sqrt{11}$: $\\sin2t=\\dfrac{2\\sqrt{11}}{1+11}=\\dfrac{\\sqrt{11}}{6}$.',
          '$\\tan t=\\sqrt{11}$: $\\sin2t=\\dfrac{2\\sqrt{11}}{1+11}=\\dfrac{\\sqrt{11}}{6}$.'),
  ref='2024 №8'),

I(nom=T('Keltirish formulalari', 'Формулы приведения'),
  tex=r'\sin(180^\circ-\alpha)=\sin\alpha,\quad \cos(180^\circ-\alpha)=-\cos\alpha,'
      r'\quad \sin(-\alpha)=-\sin\alpha',
  nega=T('$\\tan\\tfrac{2\\pi}{3}$, $\\sin\\left(-\\tfrac{3\\pi}{4}\\right)$ kabi '
         'qiymatlarni birinchi chorakka keltirib hisoblang.',
         'Значения вроде $\\tan\\tfrac{2\\pi}{3}$, $\\sin\\left(-\\tfrac{3\\pi}{4}\\right)$ '
         'приводите к первой четверти.'),
  ref='2024 №3'),

I(nom=T('Ifodani soddalashtirish', 'Упрощение выражения'),
  tex=r'\frac{\cos2\alpha}{\sin\alpha\cos\alpha+\sin^2\alpha}'
      r'=\frac{(\cos\alpha-\sin\alpha)(\cos\alpha+\sin\alpha)}{\sin\alpha(\cos\alpha+\sin\alpha)}',
  nega=T('$\\cos2\\alpha=\\cos^2\\alpha-\\sin^2\\alpha$ ni **koʻpaytuvchilarga ajrating** — '
         'maxrajdagi qavs bilan qisqaradi. Bu soddalashtirish savollarining standart yoʻli.',
         '**Разложите** $\\cos2\\alpha=\\cos^2\\alpha-\\sin^2\\alpha$ на множители — '
         'сократится со скобкой в знаменателе. Это стандартный путь в задачах на упрощение.'),
  ref='2024 №10'),

I(nom=T('Kub ildizli trigonometrik shart', 'Условие с кубическими корнями'),
  tex=r'u+v=s,\ uv=p\ \Longrightarrow\ u^2+v^2=s^2-2p,\quad u^3+v^3=s^3-3ps',
  nega=T('$(1+\\sin\\alpha)^{1/3}$ va $(1-\\sin\\alpha)^{1/3}$ ni $u,v$ deb belgilang: '
         '$u^3+v^3=2$ va $uv=(\\cos^2\\alpha)^{1/3}$ — sistema soddalashadi.',
         'Обозначьте $(1+\\sin\\alpha)^{1/3}$ и $(1-\\sin\\alpha)^{1/3}$ через $u,v$: '
         'тогда $u^3+v^3=2$ и $uv=(\\cos^2\\alpha)^{1/3}$ — система упрощается.'),
  ref='2024/25 №9'),

I(nom=T('Soat millari', 'Часовые стрелки'),
  tex=r'v_{\text{min}}=6^\circ/\text{daq},\quad v_{\text{soat}}=0{,}5^\circ/\text{daq},'
      r'\quad \Delta v=5{,}5^\circ/\text{daq}',
  nega=T('Burchak farqini $5{,}5$ ga boʻling — quvib yetish vaqti chiqadi.',
         'Разделите разность углов на $5{,}5$ — получится время догона.'),
  ref='2025/26 №19'),

I(nom=T('Chiziqli sistemalar', 'Линейные системы'),
  tex=r'\begin{cases}a_1x+b_1y=c_1\\ a_2x+b_2y=c_2\end{cases}',
  nega=T('Savol $x-y$ yoki $x+y$ ni soʻrasa, tenglamalarni **qoʻshish yoki ayirish** '
         'kifoya — $x$ va $y$ ni alohida topish shart emas.',
         'Если спрашивают $x-y$ или $x+y$, достаточно **сложить или вычесть** уравнения — '
         'находить $x$ и $y$ по отдельности не нужно.'),
  ref='2024 №5'),
]))


_N = sum(len(x['items']) for x in SECTIONS)
_E = sum(1 for x in SECTIONS for i in x['items'] if i.get('misol'))
CHROME['spec'] = [
 T('<b>%d</b> ta formula' % _N, '<b>%d</b> формул' % _N),
 T('<b>%d</b> tasi misol bilan' % _E, '<b>%d</b> с примером' % _E),
 T('%d boʻlim' % len(SECTIONS), '%d разделов' % len(SECTIONS)),
 T('manba: 3 ta variant', 'источник: 3 варианта'),
]
