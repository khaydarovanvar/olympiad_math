# -*- coding: utf-8 -*-
"""The problems the reference cites, transcribed from the papers themselves.

Keyed by (paper, sinf, number) so a formula in one grade's reference can cite a
problem from another grade's paper. Paper labels:

  '2024'        tuman (shahar) bosqichi, 2024
  '2025/26-A'   2025/26 tuman bosqichi, 20 yopiq + 10 ochiq savolli variant
  '2025/26-B'   2025/26 tuman bosqichi, 30 ta yopiq savolli variant
  '20 masala'   mustaqil ishlash uchun 20 masala toʻplami

Text is authored the same way as the rest of the data: $...$ is TeX, **bold**
is markdown. Multiple-choice options are kept — knowing what the four options
look like is part of reading the question the way a student meets it.
"""

q = {}
def Q(paper, sinf, n, uz, ru):
    q[(paper, sinf, n)] = (uz, ru)


# ---------------------------------------------------------------- 2024, 9-sinf
Q('2024', 9, 7,
  r'$x-1\ge\dfrac{2024}{x+1}$ tengsizlikni qanoatlantiradigan eng kichik butun '
  r'$x$ sonini toping. **A)** $-44$ **B)** $-45$ **C)** $46$ **D)** $45$',
  r'Найдите наименьшее целое $x$, удовлетворяющее неравенству '
  r'$x-1\ge\dfrac{2024}{x+1}$. **A)** $-44$ **B)** $-45$ **C)** $46$ **D)** $45$')


# --------------------------------------------------------------- 2024, 10-sinf
Q('2024', 10, 6,
  r'$y=\dfrac{12}{\sin x+5}$ funksiyaning qiymatlari sohasini toping. '
  r'**A)** $[0;2]$ **B)** $[2;3]$ **C)** $[2;2{,}4]$ **D)** $[2{,}4;3]$',
  r'Найдите область значений функции $y=\dfrac{12}{\sin x+5}$. '
  r'**A)** $[0;2]$ **B)** $[2;3]$ **C)** $[2;2{,}4]$ **D)** $[2{,}4;3]$')

Q('2024', 10, 7,
  r'Geometrik progressiyaning birinchi, uchinchi va oʻn birinchi hadlari '
  r'koʻpaytmasi $8$ ga teng boʻlsa, progressiyaning ikkinchi va sakkizinchi '
  r'hadlari koʻpaytmasini toping. **A)** $16$ **B)** $2$ **C)** $4$ **D)** $8$',
  r'Произведение первого, третьего и одиннадцатого членов геометрической '
  r'прогрессии равно $8$. Найдите произведение второго и восьмого членов. '
  r'**A)** $16$ **B)** $2$ **C)** $4$ **D)** $8$')

Q('2024', 10, 8,
  r'$\mathrm{tg}\,\alpha=\sqrt{11}$ boʻlsa, $\sin 2\alpha$ ni toping. '
  r'**A)** $\tfrac{\sqrt{11}}{12}$ **B)** $\tfrac{\sqrt{11}}{4}$ '
  r'**C)** $\tfrac{\sqrt{11}}{11}$ **D)** $\tfrac{\sqrt{11}}{6}$',
  r'Найдите $\sin 2\alpha$, если $\mathrm{tg}\,\alpha=\sqrt{11}$. '
  r'**A)** $\tfrac{\sqrt{11}}{12}$ **B)** $\tfrac{\sqrt{11}}{4}$ '
  r'**C)** $\tfrac{\sqrt{11}}{11}$ **D)** $\tfrac{\sqrt{11}}{6}$')

Q('2024', 10, 12,
  r'$ABC$ uchburchakning $AB$ tomoniga parallel toʻgʻri chiziq $AC$ va $BC$ '
  r'tomonlarni mos ravishda $K$ va $N$ nuqtalarda kesib oʻtadi. Agar $KCN$ '
  r'uchburchak yuzi $AKNB$ trapetsiya yuzidan ikki marta katta boʻlsa, '
  r'$AK:CK$ nisbatni toping. **A)** $(2-\sqrt2):\sqrt2$ '
  r'**B)** $(2-\sqrt3):\sqrt2$ **C)** $(\sqrt3-1):1$ '
  r'**D)** $(\sqrt3-\sqrt2):\sqrt2$',
  r'Прямая, параллельная стороне $AB$ треугольника $ABC$, пересекает стороны '
  r'$AC$ и $BC$ в точках $K$ и $N$ соответственно. Площадь треугольника $KCN$ '
  r'вдвое больше площади трапеции $AKNB$. Найдите отношение $AK:CK$. '
  r'**A)** $(2-\sqrt2):\sqrt2$ **B)** $(2-\sqrt3):\sqrt2$ '
  r'**C)** $(\sqrt3-1):1$ **D)** $(\sqrt3-\sqrt2):\sqrt2$')

Q('2024', 10, 14,
  r'Arifmetik progressiyada $a_1+a_7=12$, $a_3\cdot a_5=28$ boʻlsa, '
  r'$a_3^{\,2}+a_5^{\,2}$ yigʻindini toping. '
  r'**A)** $56$ **B)** $116$ **C)** $92$ **D)** $88$',
  r'В арифметической прогрессии $a_1+a_7=12$ и $a_3\cdot a_5=28$. Найдите '
  r'сумму $a_3^{\,2}+a_5^{\,2}$. **A)** $56$ **B)** $116$ **C)** $92$ **D)** $88$')

Q('2024', 10, 15,
  r'$x_1=p+2q$, $x_2=4p+7q$ $(p\ne0)$ sonlar $x^2+px+q=0$ tenglama ildizlari '
  r'boʻlsa, $p+q$ yigʻindini toping. '
  r'**A)** $-1$ **B)** $-2$ **C)** $2$ **D)** $3$',
  r'Числа $x_1=p+2q$, $x_2=4p+7q$ $(p\ne0)$ — корни уравнения $x^2+px+q=0$. '
  r'Найдите сумму $p+q$. **A)** $-1$ **B)** $-2$ **C)** $2$ **D)** $3$')

Q('2024', 10, 16,
  r'Burchaklaridan biri $120^\circ$, yuzi esa $\sqrt3$ ga teng boʻlgan teng '
  r'yonli uchburchakka tashqi chizilgan aylana radiusini toping. '
  r'**A)** $\tfrac{1}{\sqrt3}$ **B)** $1$ **C)** $2$ **D)** $\sqrt3$',
  r'Найдите радиус окружности, описанной около равнобедренного треугольника, '
  r'один из углов которого равен $120^\circ$, а площадь — $\sqrt3$. '
  r'**A)** $\tfrac{1}{\sqrt3}$ **B)** $1$ **C)** $2$ **D)** $\sqrt3$')

Q('2024', 10, 18,
  r'$f(x)$ funksiya uchun $f(0)\cdot\bigl(f(x)+2\bigr)=4x-1$ tenglik oʻrinli '
  r'boʻlsa, $f(-1)$ ni toping. '
  r'**A)** $2$ **B)** $-1$ **C)** $-5$ **D)** $3$',
  r'Для функции $f(x)$ выполняется равенство $f(0)\cdot\bigl(f(x)+2\bigr)=4x-1$. '
  r'Найдите $f(-1)$. **A)** $2$ **B)** $-1$ **C)** $-5$ **D)** $3$')

Q('2024', 10, 19,
  r'$1\cdot2\cdot3;\ \ 2\cdot3\cdot4;\ \ 3\cdot4\cdot5;\ \ 4\cdot5\cdot6;\ '
  r'\dots;\ 98\cdot99\cdot100$ koʻpaytmalardan nechtasi $12$ ga boʻlinadi? '
  r'**A)** $72$ **B)** $73$ **C)** $74$ **D)** $75$',
  r'Сколько из произведений $1\cdot2\cdot3;\ \ 2\cdot3\cdot4;\ \ 3\cdot4\cdot5;'
  r'\ \ 4\cdot5\cdot6;\ \dots;\ 98\cdot99\cdot100$ делится на $12$? '
  r'**A)** $72$ **B)** $73$ **C)** $74$ **D)** $75$')

Q('2024', 10, 21,
  r'$a$, $b$, $c$ musbat sonlar $ab=6$ va $bc=15$ tengliklarni '
  r'qanoatlantiradi. $a+b+2c$ ifodaning eng kichik qiymatini toping.',
  r'Положительные числа $a$, $b$, $c$ удовлетворяют равенствам $ab=6$ и '
  r'$bc=15$. Найдите наименьшее значение выражения $a+b+2c$.')

Q('2024', 10, 22,
  r'Teng yonli trapetsiyaga ichki chizilgan aylana radiusi $3$ ga teng. Agar '
  r'trapetsiyaning asoslaridan biri balandligidan $2$ marta uzun boʻlsa, '
  r'trapetsiya yuzini toping.',
  r'Радиус окружности, вписанной в равнобедренную трапецию, равен $3$. Одно из '
  r'оснований трапеции вдвое длиннее её высоты. Найдите площадь трапеции.')

Q('2024', 10, 27,
  r'$\dfrac{35+2n}{3n+1}$ ifoda butun son boʻladigan barcha $n$ natural sonlar '
  r'nechta?',
  r'Сколько существует натуральных $n$, при которых выражение '
  r'$\dfrac{35+2n}{3n+1}$ — целое число?')

Q('2024', 10, 29,
  r'Yulduzchalarni raqamlarga almashtirganda $\overline{**253*}$ koʻrinishdagi '
  r'nechta son $72$ ga karrali boʻladi?',
  r'Сколько чисел вида $\overline{**253*}$ кратны $72$, если звёздочки заменить '
  r'цифрами?')

Q('2024', 10, 30,
  r'Toʻgʻri burchakli uchburchakning toʻgʻri burchagidan chiquvchi balandlik '
  r'$6$ ga, katetlarning gipotenuzadagi proyeksiyalarining farqi esa $5$ ga '
  r'teng. Berilgan uchburchak yuzini toping.',
  r'Высота прямоугольного треугольника, проведённая из прямого угла, равна $6$, '
  r'а разность проекций катетов на гипотенузу равна $5$. Найдите площадь '
  r'треугольника.')


# --------------------------------------------------------------- 2024, 11-sinf
Q('2024', 11, 3,
  r'$3x-1<\dfrac{2024}{3x+1}$ tengsizlikni qanoatlantiradigan eng katta $x$ '
  r'butun sonni toping. **A)** $15$ **B)** $14$ **C)** $-16$ **D)** $-15$',
  r'Найдите наибольшее целое $x$, удовлетворяющее неравенству '
  r'$3x-1<\dfrac{2024}{3x+1}$. **A)** $15$ **B)** $14$ **C)** $-16$ **D)** $-15$')

Q('2024', 11, 5,
  r'Ifodani soddalashtiring: $2\sin40^\circ+2\cos130^\circ+\sin160^\circ-'
  r'\cos(-110^\circ)$. **A)** $0$ **B)** $2\sin70^\circ$ '
  r'**C)** $2\sin40^\circ$ **D)** $2\sin20^\circ$',
  r'Упростите выражение $2\sin40^\circ+2\cos130^\circ+\sin160^\circ-'
  r'\cos(-110^\circ)$. **A)** $0$ **B)** $2\sin70^\circ$ '
  r'**C)** $2\sin40^\circ$ **D)** $2\sin20^\circ$')

Q('2024', 11, 6,
  r'$\log_x\tfrac{19}{8}<\log_x\tfrac{11}{5}$ tengsizlikni yeching. '
  r'**A)** $(0;1]$ **B)** $(0;1)$ **C)** $(1;+\infty)$ **D)** $(0{,}5;1)$',
  r'Решите неравенство $\log_x\tfrac{19}{8}<\log_x\tfrac{11}{5}$. '
  r'**A)** $(0;1]$ **B)** $(0;1)$ **C)** $(1;+\infty)$ **D)** $(0{,}5;1)$')

Q('2024', 11, 12,
  r'Burchaklari $15^\circ$, $60^\circ$, $105^\circ$ boʻlgan uchburchakka tashqi '
  r'chizilgan aylana radiusi $2\sqrt[4]{3}$ ga teng. Uchburchak yuzini toping. '
  r'**A)** $3$ **B)** $2\sqrt3$ **C)** $2$ **D)** $3\sqrt3$',
  r'Радиус окружности, описанной около треугольника с углами $15^\circ$, '
  r'$60^\circ$, $105^\circ$, равен $2\sqrt[4]{3}$. Найдите площадь '
  r'треугольника. **A)** $3$ **B)** $2\sqrt3$ **C)** $2$ **D)** $3\sqrt3$')

Q('2024', 11, 16,
  r'Agar $f(1-x)=1-x^2$ boʻlsa, $f(-1)+f(0)+f(1)$ yigʻindini toping. '
  r'**A)** $0$ **B)** $-1$ **C)** $1$ **D)** $-2$',
  r'Найдите сумму $f(-1)+f(0)+f(1)$, если $f(1-x)=1-x^2$. '
  r'**A)** $0$ **B)** $-1$ **C)** $1$ **D)** $-2$')

Q('2024', 11, 18,
  r'Tengsizlikning butun yechimlari sonini toping: '
  r'$\sqrt{28-x^2}+\sqrt{-x}\ge4$. '
  r'**A)** $4$ **B)** $5$ **C)** $6$ **D)** $11$',
  r'Найдите число целых решений неравенства $\sqrt{28-x^2}+\sqrt{-x}\ge4$. '
  r'**A)** $4$ **B)** $5$ **C)** $6$ **D)** $11$')

Q('2024', 11, 19,
  r'$O$ markazli aylananing $OA$, $OB$, $OC$ radiuslari oʻtkazilgan. Agar '
  r'$\overrightarrow{OA}+\overrightarrow{OB}=\overrightarrow{OC}$ boʻlsa, '
  r'$AOB$ burchakni toping. '
  r'**A)** $90^\circ$ **B)** $30^\circ$ **C)** $120^\circ$ **D)** $60^\circ$',
  r'В окружности с центром $O$ проведены радиусы $OA$, $OB$, $OC$. Найдите '
  r'угол $AOB$, если $\overrightarrow{OA}+\overrightarrow{OB}='
  r'\overrightarrow{OC}$. '
  r'**A)** $90^\circ$ **B)** $30^\circ$ **C)** $120^\circ$ **D)** $60^\circ$')

Q('2024', 11, 22,
  r'Agar $a^2+a+11=6\sqrt{a^2+a+2}$ boʻlsa, $a-\dfrac{7}{a}$ ifodaning '
  r'qiymatini toping.',
  r'Найдите значение выражения $a-\dfrac{7}{a}$, если $a^2+a+11='
  r'6\sqrt{a^2+a+2}$.')

Q('2024', 11, 23,
  r'Agar $\mathrm{tg}\,\alpha+\sin\alpha=1$ $\bigl(0<\alpha<\tfrac{\pi}{2}'
  r'\bigr)$ boʻlsa, $(\sin2\alpha+2)^2$ ni hisoblang.',
  r'Вычислите $(\sin2\alpha+2)^2$, если $\mathrm{tg}\,\alpha+\sin\alpha=1$ '
  r'$\bigl(0<\alpha<\tfrac{\pi}{2}\bigr)$.')

Q('2024', 11, 24,
  r'Oʻnli yozuvida hech boʻlmasa bitta juft raqam boʻlgan toʻrt xonali sonlar '
  r'nechta?',
  r'Сколько существует четырёхзначных чисел, в десятичной записи которых есть '
  r'хотя бы одна чётная цифра?')

Q('2024', 11, 25,
  r'Radiusi $16$ ga teng boʻlgan aylanaga ichki chizilgan qavariq '
  r'toʻrtburchakning uchta tomoni $8$ ga teng boʻlsa, uning toʻrtinchi '
  r'tomonini toping.',
  r'Три стороны выпуклого четырёхугольника, вписанного в окружность радиуса '
  r'$16$, равны $8$. Найдите его четвёртую сторону.')

Q('2024', 11, 29,
  r'$20\cdot[u]=24\cdot\{u\}$ tenglamaning ildizlari yigʻindisini toping, '
  r'bunda $[u]$ — $u$ sonining butun qismi, $\{u\}$ — $u$ sonining kasr qismi.',
  r'Найдите сумму корней уравнения $20\cdot[u]=24\cdot\{u\}$, где $[u]$ — целая '
  r'часть числа $u$, а $\{u\}$ — дробная часть числа $u$.')

Q('2024', 11, 30,
  r'Doskada $36$ soni yozilgan. Har minutda doskadagi son oʻchiriladi va uning '
  r'oʻrniga oʻchirilgan son raqamlari koʻpaytmasiga $13$ ni qoʻshib, hosil '
  r'qilingan son yoziladi. Bir soatdan keyin doskada qaysi son hosil boʻladi?',
  r'На доске написано число $36$. Каждую минуту число на доске стирают и вместо '
  r'него пишут число, полученное прибавлением $13$ к произведению цифр стёртого '
  r'числа. Какое число окажется на доске через час?')


# ----------------------------------------------------------- 2025/26-A, 9-sinf
Q('2025/26-A', 9, 2,
  r'$n$ butun sonning nechta qiymatida $\dfrac{n^2-3}{n-2}$ ifodaning qiymati '
  r'butun son boʻladi? **A)** $1$ **B)** $2$ **C)** $3$ **D)** $4$',
  r'При скольких целых значениях $n$ значение выражения $\dfrac{n^2-3}{n-2}$ — '
  r'целое число? **A)** $1$ **B)** $2$ **C)** $3$ **D)** $4$')

Q('2025/26-A', 9, 3,
  r'Qavariq koʻpburchakning toʻgʻri burchaklari eng koʻpi bilan nechta boʻlishi '
  r'mumkin? **A)** $1$ **B)** $2$ **C)** $3$ **D)** $4$',
  r'Какое наибольшее число прямых углов может быть у выпуклого многоугольника? '
  r'**A)** $1$ **B)** $2$ **C)** $3$ **D)** $4$')

Q('2025/26-A', 9, 4,
  r'$22^2+44^2+66^2$ yigʻindining eng katta tub boʻluvchisini toping. '
  r'**A)** $11$ **B)** $7$ **C)** $13$ **D)** $17$',
  r'Найдите наибольший простой делитель суммы $22^2+44^2+66^2$. '
  r'**A)** $11$ **B)** $7$ **C)** $13$ **D)** $17$')

Q('2025/26-A', 9, 6,
  r'Berilgan tenglamani qanoatlantiruvchi $x$ quyidagilardan qaysi biriga teng '
  r'boʻlishi mumkin? $$|x+6|=|x+10|$$ '
  r'**A)** $-8$ **B)** $-6$ **C)** $4$ **D)** $6$',
  r'Какому из указанных чисел может быть равен $x$, удовлетворяющий уравнению '
  r'$$|x+6|=|x+10|\,?$$ **A)** $-8$ **B)** $-6$ **C)** $4$ **D)** $6$')

Q('2025/26-A', 9, 8,
  r'$10$ ga boʻlganda $9$ qoldiq, $11$ ga boʻlganda $10$ qoldiq, $12$ ga '
  r'boʻlganda $11$ qoldiq qoladigan eng kichik natural sonni toping. '
  r'**A)** $659$ **B)** $329$ **C)** $519$ **D)** $689$',
  r'Найдите наименьшее натуральное число, которое при делении на $10$ даёт '
  r'остаток $9$, при делении на $11$ — остаток $10$, а при делении на $12$ — '
  r'остаток $11$. **A)** $659$ **B)** $329$ **C)** $519$ **D)** $689$')

Q('2025/26-A', 9, 9,
  r'Asoslari $12$ va $8$ ga teng boʻlgan teng yonli trapetsiyaning '
  r'diagonallari oʻzaro perpendikulyar boʻlsa, ushbu trapetsiyaning yuzini '
  r'toping. **A)** $150$ **B)** $75$ **C)** $100$ **D)** $200$',
  r'Диагонали равнобедренной трапеции с основаниями $12$ и $8$ взаимно '
  r'перпендикулярны. Найдите площадь этой трапеции. '
  r'**A)** $150$ **B)** $75$ **C)** $100$ **D)** $200$')

Q('2025/26-A', 9, 10,
  r'Ifodaning qiymatini toping: '
  r'$$\Bigl(4\sqrt{4+2\sqrt3}-\sqrt{49+8\sqrt3}\Bigr)^{2}$$ '
  r'**A)** $3\sqrt3$ **B)** $6$ **C)** $4\sqrt3$ **D)** $9$',
  r'Найдите значение выражения '
  r'$$\Bigl(4\sqrt{4+2\sqrt3}-\sqrt{49+8\sqrt3}\Bigr)^{2}$$ '
  r'**A)** $3\sqrt3$ **B)** $6$ **C)** $4\sqrt3$ **D)** $9$')

Q('2025/26-A', 9, 12,
  r'Berilgan $f(x)=\dfrac{2^{x+2}+2^{1-x}}{2^{x}+2^{-x}}$ funksiya uchun '
  r'$f(t)=3$ boʻlsa, $f(-t)$ ning qiymatini toping. '
  r'**A)** $2$ **B)** $3$ **C)** $4$ **D)** $5$',
  r'Для функции $f(x)=\dfrac{2^{x+2}+2^{1-x}}{2^{x}+2^{-x}}$ известно, что '
  r'$f(t)=3$. Найдите $f(-t)$. **A)** $2$ **B)** $3$ **C)** $4$ **D)** $5$')

Q('2025/26-A', 9, 13,
  r'$x_1$ va $x_2$ sonlari $x^2+2x-1=0$ tenglamaning yechimlari boʻlsa, '
  r'$x_1^{4}+x_2^{4}$ yigʻindining qiymatini toping. '
  r'**A)** $34$ **B)** $40$ **C)** $1$ **D)** $12$',
  r'Числа $x_1$ и $x_2$ — корни уравнения $x^2+2x-1=0$. Найдите значение суммы '
  r'$x_1^{4}+x_2^{4}$. **A)** $34$ **B)** $40$ **C)** $1$ **D)** $12$')

Q('2025/26-A', 9, 14,
  r'Quyidagi shartni qanoatlantiruvchi barcha musbat butun $n$ sonlarning '
  r'yigʻindisini toping. '
  r'$$\frac{n-1}{n^2}+\frac{n-2}{n^2}+\dots+\frac{1}{n^2}='
  r'\frac{45}{1+3+5+\dots 2n-1}$$ '
  r'**A)** $9$ **B)** $10$ **C)** $12$ **D)** $15$',
  r'Найдите сумму всех целых положительных $n$, удовлетворяющих условию '
  r'$$\frac{n-1}{n^2}+\frac{n-2}{n^2}+\dots+\frac{1}{n^2}='
  r'\frac{45}{1+3+5+\dots 2n-1}$$ '
  r'**A)** $9$ **B)** $10$ **C)** $12$ **D)** $15$')

Q('2025/26-A', 9, 15,
  r'$0$ dan farqli $a,b,c,d$ haqiqiy sonlar uchun '
  r'$\dfrac{a+b+c}{d}=\dfrac{a+b+d}{c}=\dfrac{a+c+d}{b}=\dfrac{b+c+d}{a}=r$ '
  r'boʻlsa, $r$ ning qabul qilishi mumkin boʻlgan barcha qiymatlari '
  r'yigʻindisini toping. **A)** $4$ **B)** $3$ **C)** $2$ **D)** $1$',
  r'Для отличных от нуля действительных чисел $a,b,c,d$ выполняется '
  r'$\dfrac{a+b+c}{d}=\dfrac{a+b+d}{c}=\dfrac{a+c+d}{b}=\dfrac{b+c+d}{a}=r$. '
  r'Найдите сумму всех возможных значений $r$. '
  r'**A)** $4$ **B)** $3$ **C)** $2$ **D)** $1$')

Q('2025/26-A', 9, 17,
  r'Barcha ikki xonali natural sonlar koʻpaytmasi $3^{n}$ soniga boʻlinsa, $n$ '
  r'natural sonning eng katta qiymatini toping. '
  r'**A)** $48$ **B)** $41$ **C)** $44$ **D)** $40$',
  r'Произведение всех двузначных натуральных чисел делится на $3^{n}$. Найдите '
  r'наибольшее натуральное $n$. **A)** $48$ **B)** $41$ **C)** $44$ **D)** $40$')

Q('2025/26-A', 9, 18,
  r'$3^{2025}$ sonining oxirgi ikkita raqamini toping. '
  r'**A)** $49$ **B)** $43$ **C)** $27$ **D)** $03$',
  r'Найдите две последние цифры числа $3^{2025}$. '
  r'**A)** $49$ **B)** $43$ **C)** $27$ **D)** $03$')

Q('2025/26-A', 9, 19,
  r'$p^2-2q^2=1$ tenglamani qanoatlantiradigan $p$ va $q$ tub sonlar uchun '
  r'nechta $(p;q)$ juftliklar mavjud? '
  r'**A)** $1$ **B)** $3$ **C)** $2$ **D)** $4$',
  r'Сколько существует пар простых чисел $(p;q)$, удовлетворяющих уравнению '
  r'$p^2-2q^2=1$? **A)** $1$ **B)** $3$ **C)** $2$ **D)** $4$')

Q('2025/26-A', 9, 21,
  r'Berilgan rasmda $\angle BAT$, $\angle BAC$ va $\angle CAD$ burchaklarning '
  r'nisbati mos ravishda $6:2:3$ kabi. Agar $AT$ toʻgʻri chiziq berilgan '
  r'aylanaga $A$ nuqtada urinsa va $\angle ACD=81^\circ$ boʻlsa, $\angle ABC$ '
  r'necha gradusga teng? '
  r'*(Rasmda: $A$, $B$, $C$, $D$ — bitta aylanada, $AT$ — $A$ dagi urinma; '
  r'$D$ va $B$ nurlarning qarama-qarshi tomonlarida.)*',
  r'На рисунке углы $\angle BAT$, $\angle BAC$ и $\angle CAD$ относятся как '
  r'$6:2:3$. Прямая $AT$ касается данной окружности в точке $A$, а '
  r'$\angle ACD=81^\circ$. Чему равен угол $\angle ABC$? '
  r'*(На рисунке: $A$, $B$, $C$, $D$ лежат на одной окружности, $AT$ — '
  r'касательная в точке $A$.)*')

Q('2025/26-A', 9, 24,
  r'$xyz=12^{4}$ tenglikni qanoatlantiradigan nechta $(x;y;z)$ natural '
  r'sonlardan iborat uchliklar mavjud? '
  r'*($(1;2;3)$ va $(1;3;2)$ ikki xil hisoblanadi.)*',
  r'Сколько существует троек натуральных чисел $(x;y;z)$, удовлетворяющих '
  r'равенству $xyz=12^{4}$? *(Тройки $(1;2;3)$ и $(1;3;2)$ считаются '
  r'различными.)*')

Q('2025/26-A', 9, 25,
  r'Agar $\mathrm{tg}\,\alpha+\sin\alpha=1$ va $\bigl(0<\alpha<\tfrac{\pi}{2}'
  r'\bigr)$ boʻlsa, $(\sin2\alpha+2)^2$ ni hisoblang.',
  r'Вычислите $(\sin2\alpha+2)^2$, если $\mathrm{tg}\,\alpha+\sin\alpha=1$ и '
  r'$\bigl(0<\alpha<\tfrac{\pi}{2}\bigr)$.')

Q('2025/26-A', 9, 28,
  r'$\overline{abcd}\times4=\overline{dcba}$ shartni qanoatlantiruvchi '
  r'$\overline{abcd}$ toʻrt xonali sonning raqamlari yigʻindisini toping.',
  r'Найдите сумму цифр четырёхзначного числа $\overline{abcd}$, '
  r'удовлетворяющего условию $\overline{abcd}\times4=\overline{dcba}$.')

Q('2025/26-A', 9, 30,
  r'$M$ nuqta $ABCD$ kvadratning ichida olingan. $MA=1$, $MB=2$ va $MC=3$ '
  r'boʻlsa, $\angle AMB$ necha gradusga teng?',
  r'Точка $M$ взята внутри квадрата $ABCD$. Найдите угол $\angle AMB$, если '
  r'$MA=1$, $MB=2$ и $MC=3$.')


# ---------------------------------------------------------- 2025/26-A, 10-sinf
Q('2025/26-A', 10, 4,
  r'$16^{a}\times9^{a}=6^{b}\times8^{2}$ tenglikdan foydalanib $a$ va $b$ '
  r'natural sonlarning yigʻindisini hisoblang. '
  r'**A)** $9$ **B)** $15$ **C)** $12$ **D)** $6$',
  r'Пользуясь равенством $16^{a}\times9^{a}=6^{b}\times8^{2}$, вычислите сумму '
  r'натуральных чисел $a$ и $b$. **A)** $9$ **B)** $15$ **C)** $12$ **D)** $6$')

Q('2025/26-A', 10, 5,
  r'Agar $x$ va $y$ musbat sonlar $\log_3(x^2y^2)=(2\log_3 y)+6$ tenglikni '
  r'qanoatlantirsa, $x$ ning qiymatini toping. '
  r'**A)** $1$ **B)** $4$ **C)** $79$ **D)** $27$',
  r'Положительные числа $x$ и $y$ удовлетворяют равенству '
  r'$\log_3(x^2y^2)=(2\log_3 y)+6$. Найдите значение $x$. '
  r'**A)** $1$ **B)** $4$ **C)** $79$ **D)** $27$')

Q('2025/26-A', 10, 9,
  r'Berilgan tengsizlikni qanoatlantiruvchi barcha butun sonlar yigʻindisini '
  r'toping. $$(x-8)(8x^2+8)(8x+8)\le0$$ '
  r'**A)** $27$ **B)** $35$ **C)** $36$ **D)** $44$',
  r'Найдите сумму всех целых чисел, удовлетворяющих неравенству '
  r'$$(x-8)(8x^2+8)(8x+8)\le0$$ '
  r'**A)** $27$ **B)** $35$ **C)** $36$ **D)** $44$')

Q('2025/26-A', 10, 12,
  r'Agar $f(x)=\dfrac{1}{1+2^{\lg x}}+\dfrac{1}{1+4^{\lg x}}+'
  r'\dfrac{1}{1+8^{\lg x}}$ boʻlsa, $f(x)+f\!\left(\tfrac1x\right)$ '
  r'yigʻindining qiymatini toping.',
  r'Найдите значение суммы $f(x)+f\!\left(\tfrac1x\right)$, если '
  r'$f(x)=\dfrac{1}{1+2^{\lg x}}+\dfrac{1}{1+4^{\lg x}}+'
  r'\dfrac{1}{1+8^{\lg x}}$.')

Q('2025/26-A', 10, 14,
  r'Trapetsiyaning oʻrta chizigʻi $14$ ga teng va katta asosidagi burchaklari '
  r'$30^\circ$ va $60^\circ$ ga teng. Asoslari oʻrtalarini tutashtiruvchi '
  r'kesma uzunligi $8$ ga teng boʻlsa, katta asosining uzunligini toping. '
  r'**A)** $18$ **B)** $20$ **C)** $22$ **D)** $24$',
  r'Средняя линия трапеции равна $14$, а углы при большем основании равны '
  r'$30^\circ$ и $60^\circ$. Отрезок, соединяющий середины оснований, равен '
  r'$8$. Найдите длину большего основания. '
  r'**A)** $18$ **B)** $20$ **C)** $22$ **D)** $24$')

Q('2025/26-A', 10, 17,
  r'$ABCD$ toʻrtburchak diagonallari orqali $4$ ta uchburchakka ajratilgan. '
  r'Ushbu $4$ ta uchburchakdan faqat bitta umumiy uchga ega boʻlgan '
  r'uchburchaklarning yuzalari $16$ va $24$ ga teng va uchinchi uchburchakning '
  r'yuzi $12$ ga teng boʻlsa, oxirgi uchburchakning yuzini toping. '
  r'**A)** $28$ **B)** $32$ **C)** $18$ **D)** $20$',
  r'Диагонали четырёхугольника $ABCD$ разбивают его на $4$ треугольника. '
  r'Площади двух треугольников, имеющих ровно одну общую вершину, равны $16$ и '
  r'$24$, площадь третьего равна $12$. Найдите площадь последнего '
  r'треугольника. **A)** $28$ **B)** $32$ **C)** $18$ **D)** $20$')

Q('2025/26-A', 10, 18,
  r'$1^2$, $2^2$, $3^2$, $4^2$, $5^2$, $6^2$, $7^2$ va $8^2$ uzunlikdagi '
  r'kesmalardan foydalanib nechta turli tomonli uchburchak yasash mumkin? '
  r'**A)** $4$ **B)** $49$ **C)** $6$ **D)** $8$',
  r'Сколько разносторонних треугольников можно построить из отрезков длиной '
  r'$1^2$, $2^2$, $3^2$, $4^2$, $5^2$, $6^2$, $7^2$ и $8^2$? '
  r'**A)** $4$ **B)** $49$ **C)** $6$ **D)** $8$')

Q('2025/26-A', 10, 21,
  r'$(x^3-2025x+1)^3$ koʻphad ochib chiqilganda $x^6$ oldidagi '
  r'koeffitsiyentini toping.',
  r'Найдите коэффициент при $x^6$ после раскрытия многочлена '
  r'$(x^3-2025x+1)^3$.')

Q('2025/26-A', 10, 24,
  r'Agar $F(n)=n^5+3n^3-4n$ boʻlsa, '
  r'$\mathrm{EKUB}\bigl(F(2);F(3);F(4);\dots F(20)\bigr)$ ifodani hisoblang.',
  r'Вычислите $\mathrm{НОД}\bigl(F(2);F(3);F(4);\dots F(20)\bigr)$, если '
  r'$F(n)=n^5+3n^3-4n$.')

Q('2025/26-A', 10, 26,
  r'$a$ va $b$ natural sonlar boʻlib, $13a+31b$ koʻrinishida kamida $3$ xil '
  r'usulda yozish mumkin boʻlgan eng kichik sonni toping.',
  r'Найдите наименьшее число, которое можно представить в виде $13a+31b$ с '
  r'натуральными $a$ и $b$ не менее чем $3$ различными способами.')

Q('2025/26-A', 10, 27,
  r'$ABC$ teng yonli uchburchakning $BC$ asosida $E$ nuqta va $AB$ yon '
  r'tomonida $M$ nuqta $\angle B=\angle C=\angle AEM$ shart oʻrinli boʻladigan '
  r'qilib tanlangan. Agar $BE=1$, $CE=2$ va $AC=4$ tengliklar oʻrinli boʻlsa, '
  r'$MA$ kesmaning uzunligini toping.',
  r'На основании $BC$ равнобедренного треугольника $ABC$ взята точка $E$, а на '
  r'боковой стороне $AB$ — точка $M$ так, что $\angle B=\angle C=\angle AEM$. '
  r'Найдите длину отрезка $MA$, если $BE=1$, $CE=2$ и $AC=4$.')

Q('2025/26-A', 10, 28,
  r'Dastlabki $8888$ ta natural sonning nechtasida $8$ raqami mavjud?',
  r'В скольких из первых $8888$ натуральных чисел встречается цифра $8$?')

Q('2025/26-A', 10, 29,
  r'$20x^{11}+bx^{10}+cx^{9}+4$ koʻphad $x^2-x+1$ koʻphadga qoldiqsiz boʻlinsa, '
  r'$bc$ koʻpaytmaning qiymatni toping.',
  r'Многочлен $20x^{11}+bx^{10}+cx^{9}+4$ делится на $x^2-x+1$ без остатка. '
  r'Найдите значение произведения $bc$.')


# ---------------------------------------------------------- 2025/26-A, 11-sinf
Q('2025/26-A', 11, 3,
  r'$9800$ sonining nechta toʻla kvadrat boʻluvchisi bor? '
  r'**A)** $4$ **B)** $8$ **C)** $12$ **D)** $36$',
  r'Сколько у числа $9800$ делителей, являющихся полными квадратами? '
  r'**A)** $4$ **B)** $8$ **C)** $12$ **D)** $36$')

Q('2025/26-A', 11, 6,
  r'$a_1$, $a_2$, $a_3$, $\dots a_n$ arifmetik progressiya uchun '
  r'$a_5+a_8+a_{11}=12$ va $a_7+a_{10}+a_{13}=18$ shartlar oʻrinli. Agar '
  r'$a_k=5$ boʻlsa, $k$ ning qiymatini toping. '
  r'**A)** $12$ **B)** $11$ **C)** $10$ **D)** $9$',
  r'Для арифметической прогрессии $a_1$, $a_2$, $a_3$, $\dots a_n$ выполняются '
  r'условия $a_5+a_8+a_{11}=12$ и $a_7+a_{10}+a_{13}=18$. Найдите $k$, если '
  r'$a_k=5$. **A)** $12$ **B)** $11$ **C)** $10$ **D)** $9$')

Q('2025/26-A', 11, 9,
  r'Bir futbol oʻyinidagi yakuniy hisob $3\!:\!2$ bilan yakunlandi. Oʻyinning '
  r'birinchi yarmidagi yakuniy hisobning boʻlishi mumkin boʻlgan qiymatlari '
  r'sonini toping. **A)** $12$ **B)** $7$ **C)** $6$ **D)** $5$',
  r'Футбольный матч завершился со счётом $3\!:\!2$. Найдите число возможных '
  r'значений счёта на конец первого тайма. '
  r'**A)** $12$ **B)** $7$ **C)** $6$ **D)** $5$')

Q('2025/26-A', 11, 10,
  r'Imtihon $20$ ta savoldan iborat. Har bir toʻgʻri javob uchun $3$ ball '
  r'beriladi, har notoʻgʻri javob uchun $1$ ball ayiriladi va belgilanmagan '
  r'javob uchun hech qanday ball ayirilmaydi va qoʻshilmaydi. Asad $15$ ta '
  r'savolga javob berdi va qolganlarini boʻsh qoldirdi. Agar u toʻplagan ball '
  r'$17$ dan past boʻlsa, u eng koʻpi bilan nechta savolga toʻgʻri javob '
  r'bergan? **A)** $7$ **B)** $8$ **C)** $9$ **D)** $10$',
  r'Экзамен состоит из $20$ вопросов. За каждый правильный ответ даётся $3$ '
  r'балла, за каждый неправильный снимается $1$ балл, за пропущенный вопрос '
  r'баллы не снимаются и не добавляются. Асад ответил на $15$ вопросов, '
  r'остальные оставил пустыми. Если он набрал меньше $17$ баллов, на какое '
  r'наибольшее число вопросов он мог ответить правильно? '
  r'**A)** $7$ **B)** $8$ **C)** $9$ **D)** $10$')

Q('2025/26-A', 11, 11,
  r'$f$ funksiya uchun $f(x)=1-f(x-1)$ va $f(4)=6$ boʻlsa, $f(10)$ ning '
  r'qiymatini toping. **A)** $6$ **B)** $-5$ **C)** $12$ **D)** $8$',
  r'Для функции $f$ выполняется $f(x)=1-f(x-1)$ и $f(4)=6$. Найдите $f(10)$. '
  r'**A)** $6$ **B)** $-5$ **C)** $12$ **D)** $8$')

Q('2025/26-A', 11, 12,
  r'$1-\sin x+\sqrt{3y-x}=0$ tenglama orqali $\dfrac{6(x-y)}{\pi}$ ning '
  r'qiymatini toping, bunda $0\le x\le\pi$. '
  r'**A)** $4$ **B)** $3$ **C)** $2$ **D)** $1$',
  r'Найдите значение $\dfrac{6(x-y)}{\pi}$ из уравнения '
  r'$1-\sin x+\sqrt{3y-x}=0$, где $0\le x\le\pi$. '
  r'**A)** $4$ **B)** $3$ **C)** $2$ **D)** $1$')

Q('2025/26-A', 11, 14,
  r'$AB$, $AC$ va $BC$ lar berilgan chizmadagi uchta aylanalarning diametrlari '
  r'ekanligi maʼlum va $AB:BC=3:2$. Boʻyalmagan qism katta aylananing necha '
  r'foizini tashkil qiladi? '
  r'**A)** $64\,\%$ **B)** $60\,\%$ **C)** $56\,\%$ **D)** $52\,\%$',
  r'Известно, что $AB$, $AC$ и $BC$ — диаметры трёх окружностей на рисунке, '
  r'причём $AB:BC=3:2$. Сколько процентов от большой окружности составляет '
  r'незакрашенная часть? '
  r'**A)** $64\,\%$ **B)** $60\,\%$ **C)** $56\,\%$ **D)** $52\,\%$')

Q('2025/26-A', 11, 16,
  r'Agar tub sonning birlar xonasidagi raqamini olib tashlashimizdan hosil '
  r'boʻlgan son ham tub son boʻlsa, biz bu sonni $tub-tub$ son deymiz. Masalan '
  r'$317$ — $tub-tub$ son, chunki $317$ ham $31$ ham tub sonlar. Nechta ikki '
  r'xonali $tub-tub$ sonlar mavjud? '
  r'**A)** $7$ **B)** $8$ **C)** $9$ **D)** $10$',
  r'Назовём число $простым{-}простым$, если оно простое и число, полученное '
  r'вычёркиванием его последней цифры, тоже простое. Например, $317$ — '
  r'$простое{-}простое$, так как и $317$, и $31$ просты. Сколько существует '
  r'двузначных $простых{-}простых$ чисел? '
  r'**A)** $7$ **B)** $8$ **C)** $9$ **D)** $10$')

Q('2025/26-A', 11, 18,
  r'Anvarning sumkasida $10$ ta koʻk, $6$ ta yashil va $5$ ta qizil rangli '
  r'sharlar bor. U har safar sumkasidan bitta shar oladi va stol ustiga '
  r'qoʻyadi. Stolda har bir rangli shardan kamida bittadan boʻlishini '
  r'kafolatlash uchun u sumkasidan eng kamida nechta shar olishi kerak? '
  r'**A)** $12$ **B)** $15$ **C)** $16$ **D)** $17$',
  r'В сумке у Анвара $10$ синих, $6$ зелёных и $5$ красных шаров. Каждый раз он '
  r'достаёт из сумки один шар и кладёт на стол. Какое наименьшее число шаров '
  r'нужно достать, чтобы гарантированно на столе оказалось хотя бы по одному '
  r'шару каждого цвета? **A)** $12$ **B)** $15$ **C)** $16$ **D)** $17$')

Q('2025/26-A', 11, 20,
  r'Agar arifmetik progressiyaning uchinchi va toʻrtinchi hadlari mos ravishda '
  r'$3$ va $8$ ga oshirilsa, progressiyaning birinchi toʻrtta hadi geometrik '
  r'progressiyani tashkil qiladi. Arifmetik progressiyaning uchinchi hadini '
  r'toping. **A)** $12$ **B)** $9$ **C)** $5{,}5$ **D)** $1{,}5$',
  r'Если третий и четвёртый члены арифметической прогрессии увеличить '
  r'соответственно на $3$ и $8$, то первые четыре члена образуют геометрическую '
  r'прогрессию. Найдите третий член арифметической прогрессии. '
  r'**A)** $12$ **B)** $9$ **C)** $5{,}5$ **D)** $1{,}5$')

Q('2025/26-A', 11, 21,
  r'$1^{2025}+2^{2025}+3^{2025}+\dots+2025^{2025}$ ifodaning oxirgi raqamini '
  r'toping.',
  r'Найдите последнюю цифру выражения '
  r'$1^{2025}+2^{2025}+3^{2025}+\dots+2025^{2025}$.')

Q('2025/26-A', 11, 22,
  r'$x$ — haqiqiy son uchun $(4-x)(2-x)(x+4)(x+2)$ ifodaning eng kichik '
  r'qiymatini toping.',
  r'Найдите наименьшее значение выражения $(4-x)(2-x)(x+4)(x+2)$ для '
  r'действительного $x$.')

Q('2025/26-A', 11, 23,
  r'$ABCD$ kvadrat tashqarisida $E$ nuqta olingan, bunda $\angle DCE=51^\circ$ '
  r'va $\angle CDE=78^\circ$. $\angle DAE$ ni toping.',
  r'Вне квадрата $ABCD$ взята точка $E$, причём $\angle DCE=51^\circ$ и '
  r'$\angle CDE=78^\circ$. Найдите $\angle DAE$.')

Q('2025/26-A', 11, 24,
  r'$20$ nafar oʻquvchi futbol, basketbol yoki badminton sport turlarini '
  r'tanlashi mumkin. Har bir oʻquvchi kamida ikkita sport turini tanlashi '
  r'kerak. $14$ nafar oʻquvchi futbol, $15$ nafar oʻquvchi basketbol va $16$ '
  r'nafar oʻquvchi badminton oʻynashni tanlagan boʻlsa, uchchala sport turini '
  r'tanlagan oʻquvchilar sonini toping.',
  r'$20$ учеников могут выбрать футбол, баскетбол или бадминтон. Каждый ученик '
  r'должен выбрать не менее двух видов спорта. Футбол выбрали $14$ учеников, '
  r'баскетбол — $15$, бадминтон — $16$. Найдите число учеников, выбравших все '
  r'три вида спорта.')

Q('2025/26-A', 11, 25,
  r'$ABCD$ toʻrtburchakda $AB=CD$, $\angle ADC=63^\circ$, $\angle DCA='
  r'41^\circ$ va $\angle ACB=104^\circ$ boʻlsa, $\angle BAC$ ni toping.',
  r'В четырёхугольнике $ABCD$ известно, что $AB=CD$, $\angle ADC=63^\circ$, '
  r'$\angle DCA=41^\circ$ и $\angle ACB=104^\circ$. Найдите $\angle BAC$.')

Q('2025/26-A', 11, 26,
  r'$\left(2-\tfrac12\right)\left(3-\tfrac13\right)\left(4-\tfrac14\right)\dots'
  r'\left(60-\tfrac1{60}\right)=\dfrac{a!}{b!}$ tenglik orqali $a+b$ ning '
  r'qiymatini toping.',
  r'Найдите значение $a+b$ из равенства '
  r'$\left(2-\tfrac12\right)\left(3-\tfrac13\right)\left(4-\tfrac14\right)\dots'
  r'\left(60-\tfrac1{60}\right)=\dfrac{a!}{b!}$.')

Q('2025/26-A', 11, 28,
  r'$x_n$ ketma-ketlik uchun $x_1=20$, $x_2=101$ va ixtiyoriy $n>2$ uchun '
  r'$x_n=\dfrac{x_{n-1}+1}{x_{n-2}}$ shartlar oʻrinli. $x_{2025}$ ning '
  r'qiymatini toping.',
  r'Для последовательности $x_n$ выполняются условия $x_1=20$, $x_2=101$ и '
  r'$x_n=\dfrac{x_{n-1}+1}{x_{n-2}}$ для любого $n>2$. Найдите $x_{2025}$.')

Q('2025/26-A', 11, 29,
  r'Tenglamaning barcha ildizlari yigʻindisini toping: $[3x+1]=2x-\tfrac12$, '
  r'bunda $[x]$ — $x$ ning butun qismi.',
  r'Найдите сумму всех корней уравнения $[3x+1]=2x-\tfrac12$, где $[x]$ — целая '
  r'часть числа $x$.')


# ----------------------------------------------------------- 2025/26-B, 9-sinf
Q('2025/26-B', 9, 9,
  r'$a$ va $b$ natural sonlar uchun $4a-7b+28ab=2020$ boʻlsa, $ab$ koʻpaytma '
  r'quyidagilardan qaysi biriga teng boʻlishi mumkin? '
  r'**A)** $96$ **B)** $102$ **C)** $106$ **D)** $108$',
  r'Для натуральных $a$ и $b$ выполняется $4a-7b+28ab=2020$. Какому из '
  r'указанных чисел может быть равно произведение $ab$? '
  r'**A)** $96$ **B)** $102$ **C)** $106$ **D)** $108$')

Q('2025/26-B', 9, 17,
  r'$a,b,c$ haqiqiy sonlar uchun $\dfrac{a}{b}=\dfrac{b}{c}=k$ va '
  r'$\dfrac{a+3b-18c}{b+6c}=\dfrac53$ boʻlsa, $k$ sonning qiymatini toping. '
  r'**A)** $-6$ **B)** $\tfrac73$ **C)** $\tfrac{14}{3}$ **D)** $\tfrac{18}{5}$',
  r'Для действительных чисел $a,b,c$ выполняется $\dfrac{a}{b}=\dfrac{b}{c}=k$ '
  r'и $\dfrac{a+3b-18c}{b+6c}=\dfrac53$. Найдите значение $k$. '
  r'**A)** $-6$ **B)** $\tfrac73$ **C)** $\tfrac{14}{3}$ **D)** $\tfrac{18}{5}$')


# ---------------------------------------------------------- 2025/26-B, 10-sinf
Q('2025/26-B', 10, 1,
  r'Quyidagi qator yigʻindisini hisoblang: '
  r'$$\sum_{k=0}^{2025}\frac{2025!\cdot(-1)^{k}2^{k}}{k!\cdot(2025-k)!}$$ '
  r'**A)** $\tfrac{1-(-2)^{2025}}{3}$ **B)** $-1$ **C)** $1$ '
  r'**D)** $3^{2025}$',
  r'Вычислите сумму ряда '
  r'$$\sum_{k=0}^{2025}\frac{2025!\cdot(-1)^{k}2^{k}}{k!\cdot(2025-k)!}$$ '
  r'**A)** $\tfrac{1-(-2)^{2025}}{3}$ **B)** $-1$ **C)** $1$ '
  r'**D)** $3^{2025}$')

Q('2025/26-B', 10, 3,
  r'$\{a\}$ — $a$ sonining kasr qismi boʻlsa, quyidagi yigʻindini hisoblang: '
  r'$$\{2-\sqrt2\}+\{2+\sqrt2\}+\{3-\sqrt3\}+\{3+\sqrt3\}+\{4-\sqrt4\}+'
  r'\{4+\sqrt4\}+\dots+\{2025-\sqrt{2025}\}+\{2025+\sqrt{2025}\}$$ '
  r'**A)** $1979$ **B)** $1980$ **C)** $2024$ **D)** $2025$',
  r'Пусть $\{a\}$ — дробная часть числа $a$. Вычислите сумму '
  r'$$\{2-\sqrt2\}+\{2+\sqrt2\}+\{3-\sqrt3\}+\{3+\sqrt3\}+\{4-\sqrt4\}+'
  r'\{4+\sqrt4\}+\dots+\{2025-\sqrt{2025}\}+\{2025+\sqrt{2025}\}$$ '
  r'**A)** $1979$ **B)** $1980$ **C)** $2024$ **D)** $2025$')

Q('2025/26-B', 10, 4,
  r'Haqiqiy musbat $a$ son uchun $f(x)=\dfrac1a-\dfrac{1}{a^{x}+1}$ funksiya '
  r'toq funksiya boʻlsa, ushbu funksiyaning qiymatlar toʻplamini aniqlang. '
  r'**A)** $(-1;1)$ **B)** $(-\infty;1)$ '
  r'**C)** $\left(-\tfrac12;\tfrac12\right)$ **D)** $(-\infty;0)$',
  r'Для положительного действительного $a$ функция $f(x)=\dfrac1a-'
  r'\dfrac{1}{a^{x}+1}$ нечётна. Определите множество значений этой функции. '
  r'**A)** $(-1;1)$ **B)** $(-\infty;1)$ '
  r'**C)** $\left(-\tfrac12;\tfrac12\right)$ **D)** $(-\infty;0)$')

Q('2025/26-B', 10, 6,
  r'$12$ ta oʻquvchini $4$ kishilik uchta guruhga necha xil usulda ajratish '
  r'mumkin. **A)** $5760$ **B)** $5775$ **C)** $34650$ **D)** $40320$',
  r'Сколькими способами можно разделить $12$ учеников на три группы по $4$ '
  r'человека? **A)** $5760$ **B)** $5775$ **C)** $34650$ **D)** $40320$')

Q('2025/26-B', 10, 7,
  r'$r$ haqiqiy son uchun $\sqrt[3]{r}-\dfrac{1}{\sqrt[3]{r}}=1$ boʻlsa, '
  r'$r^3-\dfrac{1}{r^3}$ ning qiymatini toping. '
  r'**A)** $76$ **B)** $-2$ **C)** $33$ **D)** $36$',
  r'Для действительного $r$ выполняется $\sqrt[3]{r}-\dfrac{1}{\sqrt[3]{r}}=1$. '
  r'Найдите значение $r^3-\dfrac{1}{r^3}$. '
  r'**A)** $76$ **B)** $-2$ **C)** $33$ **D)** $36$')

Q('2025/26-B', 10, 8,
  r'$10$ ta qizil va $10$ ta koʻk shar berilgan. Sharlarni bir qatorga shunday '
  r'joylashtirish kerakki, hech qanday ikkita qizil shar yonma-yon '
  r'joylashmasin. Joylashtirish usullari sonini toping. '
  r'**A)** $1$ **B)** $11$ **C)** $20$ **D)** $21$',
  r'Даны $10$ красных и $10$ синих шаров. Их нужно расставить в ряд так, чтобы '
  r'никакие два красных шара не стояли рядом. Найдите число способов '
  r'расстановки. **A)** $1$ **B)** $11$ **C)** $20$ **D)** $21$')

Q('2025/26-B', 10, 10,
  r'$20^{22}$ sonining toʻla kvadrat yoki toʻla kub boʻluvchilari nechta? '
  r'**A)** $345$ **B)** $396$ **C)** $364$ **D)** $342$',
  r'Сколько у числа $20^{22}$ делителей, являющихся полным квадратом или полным '
  r'кубом? **A)** $345$ **B)** $396$ **C)** $364$ **D)** $342$')

Q('2025/26-B', 10, 12,
  r'Quyidagi $$3x^2y-12xy-8y-7=0$$ tenglamani qanoatlantiruvchi nechta butun '
  r'$(x;y)$ juftliklar mavjud? **A)** $0$ **B)** $1$ **C)** $2$ **D)** $4$',
  r'Сколько существует целых пар $(x;y)$, удовлетворяющих уравнению '
  r'$$3x^2y-12xy-8y-7=0\,?$$ **A)** $0$ **B)** $1$ **C)** $2$ **D)** $4$')

Q('2025/26-B', 10, 15,
  r'Agar $x^2+y^2=2x+6y+6$ boʻlsa, $4x+3y$ ifodaning eng katta qiymatini '
  r'toping. **A)** $33$ **B)** $32$ **C)** $74$ **D)** $73$',
  r'Найдите наибольшее значение выражения $4x+3y$, если $x^2+y^2=2x+6y+6$. '
  r'**A)** $33$ **B)** $32$ **C)** $74$ **D)** $73$')

Q('2025/26-B', 10, 16,
  r'Agar $m$ va $n$ oʻzaro tub sonlar boʻlsa, $\mathrm{EKUB}(30m+n;\ 15n+2m)$ '
  r'eng koʻpi bilan qaysi qiymatni qabul qilishi mumkin? '
  r'**A)** $448$ **B)** $224$ **C)** $450$ **D)** $225$',
  r'Если $m$ и $n$ взаимно просты, какое наибольшее значение может принимать '
  r'$\mathrm{НОД}(30m+n;\ 15n+2m)$? '
  r'**A)** $448$ **B)** $224$ **C)** $450$ **D)** $225$')

Q('2025/26-B', 10, 18,
  r'Stol ustida $100$ ta tanga joylashgan boʻlib, ularning barchasining raqam '
  r'tomoni yuqoriga qaragan. Har bir yurishda aynan $7$ ta tangani aylantirish '
  r'mumkin (yaʼni har bir aylantirilgan tanga orqaga oʻgiriladi: raqam '
  r'tomondan gerb tomonga yoki aksincha). Kamida necha yurishdan keyin barcha '
  r'tangalarning gerb tomoni yuqoriga qaragan boʻlishi mumkin? '
  r'**A)** $15$ **B)** $16$ **C)** $18$ '
  r'**D)** barcha tangalarning gerb tomonini yuqoriga qaratish imkonsiz',
  r'На столе лежат $100$ монет, все цифрой вверх. За один ход можно перевернуть '
  r'ровно $7$ монет (каждая перевёрнутая монета меняет сторону: с цифры на герб '
  r'или наоборот). За какое наименьшее число ходов все монеты могут оказаться '
  r'гербом вверх? **A)** $15$ **B)** $16$ **C)** $18$ '
  r'**D)** повернуть все монеты гербом вверх невозможно')

Q('2025/26-B', 10, 25,
  r'$x^2-8[x]+12=0$ tenglama nechta ildizga ega. Bu yerda $[a]$ — $a$ dan '
  r'kichik eng katta butun son. **A)** $2$ **B)** $3$ **C)** $4$ **D)** $5$',
  r'Сколько корней имеет уравнение $x^2-8[x]+12=0$, где $[a]$ — наибольшее '
  r'целое, не превосходящее $a$? **A)** $2$ **B)** $3$ **C)** $4$ **D)** $5$')

Q('2025/26-B', 10, 26,
  r'Agar $x+y+z=1$, $x^2+y^2+z^2=2$ va $x^3+y^3+z^3=3$ boʻlsa, '
  r'$x^4+y^4+z^4$ ning qiymati topilsin. '
  r'**A)** $\tfrac{13}{5}$ **B)** $\tfrac{25}{6}$ **C)** $\tfrac{19}{4}$ '
  r'**D)** $\tfrac{29}{6}$',
  r'Найдите значение $x^4+y^4+z^4$, если $x+y+z=1$, $x^2+y^2+z^2=2$ и '
  r'$x^3+y^3+z^3=3$. '
  r'**A)** $\tfrac{13}{5}$ **B)** $\tfrac{25}{6}$ **C)** $\tfrac{19}{4}$ '
  r'**D)** $\tfrac{29}{6}$')

Q('2025/26-B', 10, 27,
  r'$ABC$ uchburchak ichidagi biror nuqtadan asoslarga parallel toʻgʻri '
  r'chiziqlar oʻtkazilganda yuzalari $2$, $6$ va $18$ ga teng boʻlgan '
  r'uchburchaklar hosil boʻladi *(chizma boʻyab koʻrsatilgan)*. U holda $ABC$ '
  r'uchburchak yuzini toping. '
  r'**A)** $38+16\sqrt3$ **B)** $48+12\sqrt3$ **C)** $24+16\sqrt3$ '
  r'**D)** $24+12\sqrt3$',
  r'Через некоторую точку внутри треугольника $ABC$ проведены прямые, '
  r'параллельные сторонам; образуются треугольники с площадями $2$, $6$ и $18$ '
  r'*(на рисунке они закрашены)*. Найдите площадь треугольника $ABC$. '
  r'**A)** $38+16\sqrt3$ **B)** $48+12\sqrt3$ **C)** $24+16\sqrt3$ '
  r'**D)** $24+12\sqrt3$')


# -------------------------------------------------------------------20 masala
Q('20 masala', 9, 5,
  'Noutbukning narxi $4\\,800\\,000$ soʻm edi. Doʻkon avval narxni $15\\%$ ga '
  'tushirdi, soʻngra allaqachon tushirilgan narxdan qoʻshimcha $5\\%$ chegirma '
  'berdi. Shundan keyin olingan summaga $120\\,000$ soʻm miqdoridagi yetkazib '
  'berish haqi qoʻshildi. Xaridor pirovardida qanday summa toʻlagan?',
  'Цена ноутбука составляла $4\\,800\\,000$ сумов. Магазин сначала снизил цену '
  'на $15\\%$, затем предоставил дополнительную скидку $5\\%$ от уже сниженной '
  'цены. После этого к полученной сумме добавили плату за доставку в размере '
  '$120\\,000$ сумов. Какую окончательную сумму заплатил покупатель?')

Q('20 masala', 9, 7,
  'Doʻkonda choyning ikki navi aralashtirildi. Birinchi navning kilogrammi '
  '$60\\,000$ soʻm, ikkinchisiniki — $84\\,000$ soʻm turadi. Hammasi boʻlib '
  'kilogrammining oʻrtacha narxi $72\\,000$ soʻm boʻlgan $15$ kg aralashma '
  'olindi. Har bir navdan necha kilogrammdan ishlatilgan?',
  'В магазине смешали два сорта чая. Первый сорт стоит $60\\,000$ сумов за '
  'килограмм, второй — $84\\,000$ сумов за килограмм. Всего получили $15$ кг '
  'смеси средней стоимостью $72\\,000$ сумов за килограмм. Сколько килограммов '
  'каждого сорта использовали?')

Q('20 masala', 9, 8,
  'Birinchi ishchi maʼlum bir ishni $12$ soatda, ikkinchisi esa $18$ soatda '
  'bajara oladi. Ular bir vaqtda ishga kirishdi. $4$ soatdan keyin birinchi '
  'ishchi ketdi, ikkinchisi esa ishni yolgʻiz davom ettirdi. Butun ishni '
  'tugatish uchun ikkinchi ishchiga yana necha soat kerak boʻladi?',
  'Первый рабочий может выполнить определённую работу за $12$ часов, а второй — '
  'за $18$ часов. Они начали работать одновременно. Через $4$ часа первый '
  'рабочий ушёл, а второй продолжил работу один. Сколько ещё часов понадобится '
  'второму рабочему, чтобы закончить всю работу?')


# ============================================================================
# Quyidagilar saytning "Savollar" boʻlimi uchun qoʻshildi: sakkizta
# variantning qolgan hamma savoli, aynan varaqadagidek.
# ============================================================================

# ------------------------------------------------------- 2024, 9-sinf (qolgani)
Q('2024', 9, 1,
  r'Ifodani soddalashtiring: $\dfrac{9a^2-24a+16}{9a^2-16}\cdot'
  r'\dfrac{9a^2+24a+16}{9a^2+16}$ **A)** $\dfrac{9a^2-24a+16}{9a^2+16}$ '
  r'**B)** $\dfrac{9a^2-16}{9a^2+16}$ **C)** $\dfrac{3a+4}{3a-4}$ **D)** $1$',
  r'Упростите выражение: $\dfrac{9a^2-24a+16}{9a^2-16}\cdot'
  r'\dfrac{9a^2+24a+16}{9a^2+16}$ **A)** $\dfrac{9a^2-24a+16}{9a^2+16}$ '
  r'**B)** $\dfrac{9a^2-16}{9a^2+16}$ **C)** $\dfrac{3a+4}{3a-4}$ **D)** $1$')

Q('2024', 9, 2,
  r'Tenglamaning eng katta ildizini toping: $2x^2-x\left(\sqrt5+2\right)=-\sqrt5$ '
  r'**A)** $1$ **B)** $2\sqrt5$ **C)** $\sqrt5$ **D)** $0{,}5\sqrt5$',
  r'Найдите наибольший корень уравнения: '
  r'$2x^2-x\left(\sqrt5+2\right)=-\sqrt5$ '
  r'**A)** $1$ **B)** $2\sqrt5$ **C)** $\sqrt5$ **D)** $0{,}5\sqrt5$')

Q('2024', 9, 3,
  r'$80$ ta konfet shuncha pul turadiki, $20$ soʻmga shuncha dona konfet sotib '
  r'olish mumkin. $100$ soʻmga necha dona konfet sotib olish mumkin? '
  r'**A)** $50$ **B)** $150$ **C)** $200$ **D)** $120$',
  r'$80$ конфет стоят столько денег, сколько конфет можно купить на $20$ сумов. '
  r'Сколько конфет можно купить на $100$ сумов? '
  r'**A)** $50$ **B)** $150$ **C)** $200$ **D)** $120$')

Q('2024', 9, 4,
  r'Ifodani soddalashtiring: $\dfrac{c-8}{\sqrt[3]{c^2}+2\sqrt[3]{c}+4}-'
  r'\dfrac{c+8}{\sqrt[3]{c^2}-2\sqrt[3]{c}+4}$ **A)** $2\sqrt[3]{c}$ '
  r'**B)** $4$ **C)** $-4$ **D)** $2\sqrt[3]{c}-4$',
  r'Упростите выражение: $\dfrac{c-8}{\sqrt[3]{c^2}+2\sqrt[3]{c}+4}-'
  r'\dfrac{c+8}{\sqrt[3]{c^2}-2\sqrt[3]{c}+4}$ **A)** $2\sqrt[3]{c}$ '
  r'**B)** $4$ **C)** $-4$ **D)** $2\sqrt[3]{c}-4$')

Q('2024', 9, 5,
  r'Tenglamaning haqiqiy ildizlari sonini toping. $(3x-1)(3|x|-1)=3$ '
  r'**A)** $1$ **B)** $2$ **C)** $3$ **D)** $\varnothing$',
  r'Найдите число действительных корней уравнения. $(3x-1)(3|x|-1)=3$ '
  r'**A)** $1$ **B)** $2$ **C)** $3$ **D)** $\varnothing$')

Q('2024', 9, 6,
  r'$\begin{cases}\dfrac{a-b}{b}+1=2\\[4pt]\dfrac{a^2-b^2}{b^2}+2=c\end{cases}$ '
  r'boʻlsa $c$ ni toping. **A)** $5$ **B)** $4$ **C)** $3$ **D)** $2$',
  r'$\begin{cases}\dfrac{a-b}{b}+1=2\\[4pt]\dfrac{a^2-b^2}{b^2}+2=c\end{cases}$ '
  r'Найдите $c$. **A)** $5$ **B)** $4$ **C)** $3$ **D)** $2$')

Q('2024', 9, 8,
  r'Tenglamani yeching $(12^2+6^2)(14^2+7^2)=35^2\cdot x^2$ '
  r'**A)** $\pm10$ **B)** $\pm5$ **C)** $\pm6$ **D)** $\pm7$',
  r'Решите уравнение $(12^2+6^2)(14^2+7^2)=35^2\cdot x^2$ '
  r'**A)** $\pm10$ **B)** $\pm5$ **C)** $\pm6$ **D)** $\pm7$')

Q('2024', 9, 9,
  r'Uchta ketma-ket kelgan toq natural sonlarning yigʻindisi quyidagilardan '
  r'qaysi biriga teng boʻla olmaydi? **A)** $12021$ **B)** $20103$ '
  r'**C)** $30303$ **D)** $40005$',
  r'Какому из следующих чисел не может быть равна сумма трёх подряд идущих '
  r'нечётных натуральных чисел? **A)** $12021$ **B)** $20103$ '
  r'**C)** $30303$ **D)** $40005$')

Q('2024', 9, 10,
  r'Arifmetik progressiyaning dastlabki toʻrtta hadi yigʻindisi $30$ ga teng va '
  r'$a_9-a_5=12$. Agar $a_n=93$ boʻlsa, $n$ nimaga teng? '
  r'**A)** $29$ **B)** $30$ **C)** $31$ **D)** $32$',
  r'Сумма первых четырёх членов арифметической прогрессии равна $30$ и '
  r'$a_9-a_5=12$. Если $a_n=93$, чему равно $n$? '
  r'**A)** $29$ **B)** $30$ **C)** $31$ **D)** $32$')

Q('2024', 9, 11,
  r'$\overline{xy0xy0}$ soni $x$ va $y$ ning qandaydir qiymatlarida '
  r'$\left(\overline{xyxy}+9\overline{xy}\right)$ ga boʻlinadi. Boʻlinma nechaga '
  r'teng? **A)** $91$ **B)** $90$ **C)** $110$ **D)** $101$',
  r'При некоторых значениях $x$ и $y$ число $\overline{xy0xy0}$ делится на '
  r'$\left(\overline{xyxy}+9\overline{xy}\right)$. Чему равно частное? '
  r'**A)** $91$ **B)** $90$ **C)** $110$ **D)** $101$')

Q('2024', 9, 12,
  r'$2024^{20}\cdot2025^{24}\cdot20^{24}$ koʻpaytma nechta nol bilan tugaydi? '
  r'**A)** $48$ **B)** $72$ **C)** $68$ **D)** $44$',
  r'Сколькими нулями оканчивается произведение '
  r'$2024^{20}\cdot2025^{24}\cdot20^{24}$? '
  r'**A)** $48$ **B)** $72$ **C)** $68$ **D)** $44$')

Q('2024', 9, 13,
  r'$f(1-2x)=1-2x^2$ boʻlsa, $f\left(-\tfrac12\right)+f(0)+f\left(\tfrac12\right)$ '
  r'yigʻindini hisoblang. **A)** $0$ **B)** $1\tfrac18$ **C)** $1\tfrac14$ '
  r'**D)** $3$',
  r'Пусть $f(1-2x)=1-2x^2$. Вычислите сумму '
  r'$f\left(-\tfrac12\right)+f(0)+f\left(\tfrac12\right)$. '
  r'**A)** $0$ **B)** $1\tfrac18$ **C)** $1\tfrac14$ **D)** $3$')

Q('2024', 9, 14,
  r'$x^2+ax+2024b=0$ va $x^2+bx+2024a=0$ tenglamalarning bitta ildizi umumiy. '
  r'Agar $a\ne b$ boʻlsa, umumiy ildiz nechaga teng boʻlishi mumkin? '
  r'**A)** $\tfrac{1}{2024}$ **B)** $-\tfrac{1}{2024}$ **C)** $-2024$ '
  r'**D)** $2024$',
  r'Уравнения $x^2+ax+2024b=0$ и $x^2+bx+2024a=0$ имеют общий корень. Чему '
  r'может быть равен этот корень, если $a\ne b$? '
  r'**A)** $\tfrac{1}{2024}$ **B)** $-\tfrac{1}{2024}$ **C)** $-2024$ '
  r'**D)** $2024$')

Q('2024', 9, 15,
  r'Oʻtkir burchakli $ABC$ uchburchakning balandliklari $H$ nuqtada kesishadi. '
  r'Agar $\sqrt3\,AB=CH$ ekani maʼlum boʻlsa, $\angle ACB$ burchakni toping. '
  r'**A)** $45^\circ$ **B)** $75^\circ$ **C)** $30^\circ$ **D)** $60^\circ$',
  r'Высоты остроугольного треугольника $ABC$ пересекаются в точке $H$. Найдите '
  r'угол $ACB$, если известно, что $\sqrt3\,AB=CH$. '
  r'**A)** $45^\circ$ **B)** $75^\circ$ **C)** $30^\circ$ **D)** $60^\circ$')

Q('2024', 9, 16,
  r'$A(-1;-30)$ nuqtadan $y=3(x^2-6x)$ parabola uchigacha boʻlgan masofani '
  r'toping. **A)** $\sqrt{22}$ **B)** $\sqrt{30}$ **C)** $4$ **D)** $5$',
  r'Найдите расстояние от точки $A(-1;-30)$ до вершины параболы $y=3(x^2-6x)$. '
  r'**A)** $\sqrt{22}$ **B)** $\sqrt{30}$ **C)** $4$ **D)** $5$')

Q('2024', 9, 17,
  r'Uchburchakning ikkita tomoni $15$ va $13$ ga teng, uchinchi tomoniga '
  r'tushirilgan mediana esa $7$ ga teng boʻlsa, berilgan uchburchak yuzini '
  r'toping. **A)** $80$ **B)** $72$ **C)** $65$ **D)** $84$',
  r'Две стороны треугольника равны $15$ и $13$, а медиана, проведённая к '
  r'третьей стороне, равна $7$. Найдите площадь треугольника. '
  r'**A)** $80$ **B)** $72$ **C)** $65$ **D)** $84$')

Q('2024', 9, 18,
  r'$\sqrt{-x}+\sqrt{12-x-x^2}\ge3$ tengsizlikning butun sonlardan iborat '
  r'yechimlar sonini toping. **A)** $5$ **B)** $3$ **C)** $2$ **D)** $4$',
  r'Найдите число целых решений неравенства $\sqrt{-x}+\sqrt{12-x-x^2}\ge3$. '
  r'**A)** $5$ **B)** $3$ **C)** $2$ **D)** $4$')

Q('2024', 9, 19,
  r'Gipotenuzasi $8$ ga, gipotenuzaga tushirilgan balandligi $1\tfrac1{16}$ ga '
  r'teng boʻlgan toʻgʻri burchakli uchburchak perimetrini toping. '
  r'**A)** $18$ **B)** $18\tfrac18$ **C)** $17$ **D)** $17\tfrac78$',
  r'Найдите периметр прямоугольного треугольника, у которого гипотенуза равна '
  r'$8$, а высота, опущенная на неё, равна $1\tfrac1{16}$. '
  r'**A)** $18$ **B)** $18\tfrac18$ **C)** $17$ **D)** $17\tfrac78$')

Q('2024', 9, 20,
  r'Agar Alisher $3$ kun, Anvar esa $5$ kun ishlasa ishning $36\%$ i bajariladi. '
  r'Agar Alisher $5$ kun, Anvar esa $3$ kun ishlasa ishning $46\%$ i bajariladi. '
  r'Alisher va Anvar birgalikda $4$ kun ishlasa ishning qanday qismi bajariladi? '
  r'**A)** $39\%$ **B)** $38\%$ **C)** $40\%$ **D)** $41\%$',
  r'Если Алишер работает $3$ дня, а Анвар $5$ дней, выполняется $36\%$ работы. '
  r'Если Алишер работает $5$ дней, а Анвар $3$ дня, выполняется $46\%$ работы. '
  r'Какая часть работы будет выполнена, если Алишер и Анвар проработают вместе '
  r'$4$ дня? **A)** $39\%$ **B)** $38\%$ **C)** $40\%$ **D)** $41\%$')

Q('2024', 9, 21,
  r'$x$ va $y$ sonlari $x(1+y)=y(1-x)=1$ tenglikni qanoatlantiradi. '
  r'$(x-x^2)(y+y^2)(x+y)$ ifodaning qiymatini toping.',
  r'Числа $x$ и $y$ удовлетворяют равенству $x(1+y)=y(1-x)=1$. Найдите '
  r'значение выражения $(x-x^2)(y+y^2)(x+y)$.')

Q('2024', 9, 22,
  r'$[2u]-\{u\}=20{,}24$ tenglamaning ildizlari yigʻindisini toping, bunda '
  r'$[u]$ — $u$ sonining butun qismi, $\{u\}$ — $u$ sonining kasr qismi.',
  r'Найдите сумму корней уравнения $[2u]-\{u\}=20{,}24$, где $[u]$ — целая '
  r'часть числа $u$, $\{u\}$ — его дробная часть.')

Q('2024', 9, 23,
  r'Perimetri $36$ ga va yuzi $54$ ga teng boʻlgan toʻgʻri toʻrtburchakning '
  r'diagonallari orasidagi oʻtkir burchakni toping.',
  r'Найдите острый угол между диагоналями прямоугольника с периметром $36$ и '
  r'площадью $54$.')

Q('2024', 9, 24,
  r'$a$, $b$, $c$ — turli raqamlar, $\overline{abbc}$ — toʻrt xonali son va '
  r'$\overline{abbc}=(9c+2)^2$ tenglik oʻrinli boʻlsa, $a+b+c$ ni toping.',
  r'$a$, $b$, $c$ — различные цифры, $\overline{abbc}$ — четырёхзначное число '
  r'и выполняется равенство $\overline{abbc}=(9c+2)^2$. Найдите $a+b+c$.')

Q('2024', 9, 25,
  r'$z+\sqrt{z+\tfrac12+\sqrt{z+\tfrac14}}=2025$ tenglamani yeching.',
  r'Решите уравнение $z+\sqrt{z+\tfrac12+\sqrt{z+\tfrac14}}=2025$.')

Q('2024', 9, 26,
  r'$ABC$ uchburchakning $AQ$ va $BP$ bissektrisalari $O$ nuqtada kesishadi '
  r'($P\in AC$, $Q\in BC$). Agar $\angle ACB=50^\circ$ va $AP+OP=AB$ boʻlsa, '
  r'$\angle ABC$ ni toping.',
  r'Биссектрисы $AQ$ и $BP$ треугольника $ABC$ пересекаются в точке $O$ '
  r'($P\in AC$, $Q\in BC$). Найдите $\angle ABC$, если $\angle ACB=50^\circ$ и '
  r'$AP+OP=AB$.')

Q('2024', 9, 27,
  r'$a$, $b$, $c$, $d$ — haqiqiy sonlar '
  r'$\dfrac{a}{b+c+d}+\dfrac{b}{c+d+a}+\dfrac{c}{d+a+b}+\dfrac{d}{a+b+c}=1$ '
  r'tenglikni qanoatlantirsa, '
  r'$\dfrac{a^2}{b+c+d}+\dfrac{b^2}{c+d+a}+\dfrac{c^2}{d+a+b}+\dfrac{d^2}{a+b+c}$ '
  r'ni toping.',
  r'Действительные числа $a$, $b$, $c$, $d$ удовлетворяют равенству '
  r'$\dfrac{a}{b+c+d}+\dfrac{b}{c+d+a}+\dfrac{c}{d+a+b}+\dfrac{d}{a+b+c}=1$. '
  r'Найдите '
  r'$\dfrac{a^2}{b+c+d}+\dfrac{b^2}{c+d+a}+\dfrac{c^2}{d+a+b}+\dfrac{d^2}{a+b+c}$.')

Q('2024', 9, 28,
  r'$ABCD$ qavariq toʻrtburchakda $\angle ABC=\angle ADC=90^\circ$. $E$, $F$ '
  r'nuqtalar mos ravishda $AC$ va $BD$ diagonallarning oʻrtalari. $\angle BFE$ '
  r'burchakni toping.',
  r'В выпуклом четырёхугольнике $ABCD$ углы $ABC$ и $ADC$ прямые. Точки $E$ и '
  r'$F$ — середины диагоналей $AC$ и $BD$ соответственно. Найдите угол $BFE$.')

Q('2024', 9, 29,
  r'$\dfrac{x^2-2px+p^2+p-12}{x}=0$ tenglama yagona yechimga ega boʻladigan $p$ '
  r'parametrning qiymatlari yigʻindisini toping.',
  r'Найдите сумму значений параметра $p$, при которых уравнение '
  r'$\dfrac{x^2-2px+p^2+p-12}{x}=0$ имеет единственное решение.')

Q('2024', 9, 30,
  r'Toʻrt nafar oʻgʻil bola va toʻrt nafar qiz bolani ketma-ket joylashtirilgan '
  r'$8$ ta stulda oʻtirishlari kerak. Bunda oʻgʻil bolalar juft oʻrindagi, qiz '
  r'bolalar esa toq oʻrindagi stullarga oʻtiradi. Buni necha usulda amalga '
  r'oshirish mumkin?',
  r'Четыре мальчика и четыре девочки должны сесть на $8$ стульев, стоящих в '
  r'ряд. При этом мальчики садятся на чётные места, а девочки — на нечётные. '
  r'Сколькими способами это можно сделать?')


# ------------------------------------------------------ 2024, 10-sinf (qolgani)
Q('2024', 10, 1,
  r'Ifodani soddalashtiring: $\dfrac{1-8b}{\sqrt2+4b}-\dfrac{1-8b}{\sqrt2-4b}$ '
  r'**A)** $\sqrt2$ **B)** $4b$ **C)** $-4b$ **D)** $\sqrt2-4b$',
  r'Упростите выражение: $\dfrac{1-8b}{\sqrt2+4b}-\dfrac{1-8b}{\sqrt2-4b}$ '
  r'**A)** $\sqrt2$ **B)** $4b$ **C)** $-4b$ **D)** $\sqrt2-4b$')

Q('2024', 10, 2,
  r'$A(m;n)$ nuqta $y+1=2x^2-4x$ parabola uchi boʻlsa, $m-n$ ayirmani toping. '
  r'**A)** $1$ **B)** $2$ **C)** $3$ **D)** $4$',
  r'Точка $A(m;n)$ — вершина параболы $y+1=2x^2-4x$. Найдите разность $m-n$. '
  r'**A)** $1$ **B)** $2$ **C)** $3$ **D)** $4$')

Q('2024', 10, 3,
  r'Hisoblang: $\operatorname{tg}\dfrac{2\pi}{3}\cdot'
  r'\sin\left(-\dfrac{3\pi}{4}\right)\cdot\cos\dfrac{\pi}{6}$ '
  r'**A)** $-\dfrac{3\sqrt2}{4}$ **B)** $-\dfrac{\sqrt6}{4}$ '
  r'**C)** $\dfrac{\sqrt6}{4}$ **D)** $\dfrac{3\sqrt2}{4}$',
  r'Вычислите: $\operatorname{tg}\dfrac{2\pi}{3}\cdot'
  r'\sin\left(-\dfrac{3\pi}{4}\right)\cdot\cos\dfrac{\pi}{6}$ '
  r'**A)** $-\dfrac{3\sqrt2}{4}$ **B)** $-\dfrac{\sqrt6}{4}$ '
  r'**C)** $\dfrac{\sqrt6}{4}$ **D)** $\dfrac{3\sqrt2}{4}$')

Q('2024', 10, 4,
  r'Tengsizlikni yeching: $5x-20\le x^2\le 8x$ '
  r'**A)** $[0;10]$ **B)** $[0;8]$ **C)** $[0;2]\cup[8;10]$ '
  r'**D)** $[0;1]\cup[8;10]$',
  r'Решите неравенство: $5x-20\le x^2\le 8x$ '
  r'**A)** $[0;10]$ **B)** $[0;8]$ **C)** $[0;2]\cup[8;10]$ '
  r'**D)** $[0;1]\cup[8;10]$')

Q('2024', 10, 5,
  r'$9$ ta avtobus va $12$ ta tramvay $966$ nafar yoʻlovchini tashiydi. $4$ ta '
  r'avtobus va $17$ ta tramvay esa $931$ nafar yoʻlovchi tashiydi. Bitta avtobus '
  r'va bitta tramvayga sigʻadigan yoʻlovchilar soni bir-biridan qancha farq '
  r'qiladi? **A)** $6$ **B)** $5$ **C)** $7$ **D)** $8$',
  r'$9$ автобусов и $12$ трамваев перевозят $966$ пассажиров, а $4$ автобуса и '
  r'$17$ трамваев — $931$ пассажира. На сколько отличается вместимость одного '
  r'автобуса и одного трамвая? **A)** $6$ **B)** $5$ **C)** $7$ **D)** $8$')

Q('2024', 10, 9,
  r'Markazi $O$ nuqtada boʻlgan aylananing $AB$ va $AC$ vatarlari oʻzaro '
  r'perpendikulyar. Agar $\angle AOC$ burchak $100^\circ$ boʻlsa, $\angle AOB$ '
  r'burchakni toping. **A)** $80^\circ$ **B)** $100^\circ$ **C)** $50^\circ$ '
  r'**D)** $90^\circ$',
  r'Хорды $AB$ и $AC$ окружности с центром $O$ взаимно перпендикулярны. Найдите '
  r'угол $AOB$, если $\angle AOC=100^\circ$. **A)** $80^\circ$ '
  r'**B)** $100^\circ$ **C)** $50^\circ$ **D)** $90^\circ$')

Q('2024', 10, 10,
  r'Ifodani soddalashtiring: '
  r'$\dfrac{\cos2\alpha}{\sin\alpha\cos\alpha+\sin^2\alpha}+1$ '
  r'**A)** $\operatorname{tg}\alpha$ **B)** $\operatorname{ctg}\alpha$ '
  r'**C)** $\cos\alpha$ **D)** $\sin\alpha$',
  r'Упростите выражение: '
  r'$\dfrac{\cos2\alpha}{\sin\alpha\cos\alpha+\sin^2\alpha}+1$ '
  r'**A)** $\operatorname{tg}\alpha$ **B)** $\operatorname{ctg}\alpha$ '
  r'**C)** $\cos\alpha$ **D)** $\sin\alpha$')

Q('2024', 10, 11,
  r'$\dfrac{\sqrt{\sqrt3-\sqrt{x-4}}}{\sqrt{8-x}}>0$ tengsizlikning butun '
  r'yechimlari oʻrta arifmetigini toping. **A)** $4{,}5$ **B)** $5$ '
  r'**C)** $5{,}5$ **D)** $6$',
  r'Найдите среднее арифметическое целых решений неравенства '
  r'$\dfrac{\sqrt{\sqrt3-\sqrt{x-4}}}{\sqrt{8-x}}>0$. **A)** $4{,}5$ '
  r'**B)** $5$ **C)** $5{,}5$ **D)** $6$')

Q('2024', 10, 13,
  r'Agar $(a-b)^2+(b-c)^2+(c-a)^2=6$ va $(a+b)^2+(b+c)^2+(c+a)^2=18$ boʻlsa, '
  r'$(a+b)(b+c)+(b+c)(c+a)+(c+a)(a+b)$ ni toping. '
  r'**A)** $15$ **B)** $24$ **C)** $12$ **D)** $20$',
  r'Пусть $(a-b)^2+(b-c)^2+(c-a)^2=6$ и $(a+b)^2+(b+c)^2+(c+a)^2=18$. Найдите '
  r'$(a+b)(b+c)+(b+c)(c+a)+(c+a)(a+b)$. '
  r'**A)** $15$ **B)** $24$ **C)** $12$ **D)** $20$')

Q('2024', 10, 17,
  r'Ikki sonni bir-biriga boʻlganda boʻlinma ham, qoldiq ham $4$ ga teng. '
  r'Boʻlinuvchi va boʻluvchining ayirmasiga, ularning oʻrta arifmetigini, '
  r'boʻlinmani va qoldiqni qoʻshsak $47$ hosil boʻladi. Boʻlinuvchini toping. '
  r'**A)** $28$ **B)** $32$ **C)** $24$ **D)** $26$',
  r'При делении одного числа на другое и частное, и остаток равны $4$. Если к '
  r'разности делимого и делителя прибавить их среднее арифметическое, частное и '
  r'остаток, получится $47$. Найдите делимое. '
  r'**A)** $28$ **B)** $32$ **C)** $24$ **D)** $26$')

Q('2024', 10, 20,
  r'Tenglamaning haqiqiy ildizlari sonini toping. $(x-1)|x|=|x|+1$ '
  r'**A)** $1$ **B)** $2$ **C)** $3$ **D)** $\varnothing$',
  r'Найдите число действительных корней уравнения. $(x-1)|x|=|x|+1$ '
  r'**A)** $1$ **B)** $2$ **C)** $3$ **D)** $\varnothing$')

Q('2024', 10, 23,
  r'$[2u]+2\{u\}=20{,}24$ tenglamaning ildizlari yigʻindisini toping, bunda '
  r'$[u]$ — $u$ sonining butun qismi, $\{u\}$ — $u$ sonining kasr qismi.',
  r'Найдите сумму корней уравнения $[2u]+2\{u\}=20{,}24$, где $[u]$ — целая '
  r'часть числа $u$, $\{u\}$ — его дробная часть.')

Q('2024', 10, 24,
  r'$x$ va $y$ sonlari $x(1-y)=2y(x+1)=2$ tenglikni qanoatlantiradi. '
  r'$(x+x^2)(y-y^2)(x+y)$ ifodaning qiymatini toping.',
  r'Числа $x$ и $y$ удовлетворяют равенству $x(1-y)=2y(x+1)=2$. Найдите '
  r'значение выражения $(x+x^2)(y-y^2)(x+y)$.')

Q('2024', 10, 25,
  r'$ABCD$ qavariq toʻrtburchakning $AC$ diagonali oʻrtasidan barcha '
  r'tomonlargacha masofalar bir xil $4{,}8$ ga teng. Toʻrtburchakning $BD$ '
  r'diagonali $12$ ga teng boʻlsa, toʻrtburchak yuzini toping.',
  r'Расстояния от середины диагонали $AC$ выпуклого четырёхугольника $ABCD$ до '
  r'всех сторон одинаковы и равны $4{,}8$. Найдите площадь четырёхугольника, '
  r'если его диагональ $BD$ равна $12$.')

Q('2024', 10, 26,
  r'$\dfrac{x^2-2px+p^2+8p+8}{x-1}=0$ tenglama yagona yechimga ega boʻladigan '
  r'$p$ parametrning qiymatlari yigʻindisini toping.',
  r'Найдите сумму значений параметра $p$, при которых уравнение '
  r'$\dfrac{x^2-2px+p^2+8p+8}{x-1}=0$ имеет единственное решение.')

Q('2024', 10, 28,
  r'$\begin{cases}2x^2+3y=-8{,}5\\ z^2+4x=-1\\ y^2+2z=7\end{cases}$ '
  r'tenglamalar sistemasidan $2x+3y+4z$ ni toping.',
  r'Из системы уравнений '
  r'$\begin{cases}2x^2+3y=-8{,}5\\ z^2+4x=-1\\ y^2+2z=7\end{cases}$ '
  r'найдите $2x+3y+4z$.')


# ------------------------------------------------------ 2024, 11-sinf (qolgani)
Q('2024', 11, 1,
  r'Ifodani soddalashtiring: $2\sqrt{1{,}125}-5\sqrt{1{,}62}+3\sqrt{4{,}5}$ '
  r'**A)** $0{,}75\sqrt2$ **B)** $1{,}5\sqrt2$ **C)** $0{,}5\sqrt2$ '
  r'**D)** $3\sqrt2$',
  r'Упростите выражение: $2\sqrt{1{,}125}-5\sqrt{1{,}62}+3\sqrt{4{,}5}$ '
  r'**A)** $0{,}75\sqrt2$ **B)** $1{,}5\sqrt2$ **C)** $0{,}5\sqrt2$ '
  r'**D)** $3\sqrt2$')

Q('2024', 11, 2,
  r'$p$ va $p^4+3$ sonlari tub sonlar boʻlsa, $p^3+3$ ni toping. '
  r'**A)** $35$ **B)** $128$ **C)** $30$ **D)** $11$',
  r'Числа $p$ и $p^4+3$ простые. Найдите $p^3+3$. '
  r'**A)** $35$ **B)** $128$ **C)** $30$ **D)** $11$')

Q('2024', 11, 4,
  r'$ABC$ uchburchakning $BK$ bissektrisasi oʻtkazilgan va '
  r'$\angle AKB=2\angle BKC$. $ABC$ uchburchakning $C$ va $A$ burchaklari '
  r'ayirmasini toping. **A)** $30^\circ$ **B)** $40^\circ$ **C)** $60^\circ$ '
  r'**D)** $80^\circ$',
  r'В треугольнике $ABC$ проведена биссектриса $BK$, причём '
  r'$\angle AKB=2\angle BKC$. Найдите разность углов $C$ и $A$ треугольника '
  r'$ABC$. **A)** $30^\circ$ **B)** $40^\circ$ **C)** $60^\circ$ '
  r'**D)** $80^\circ$')

Q('2024', 11, 7,
  r'$f(x)=2x^4+(a-11)x^3+1$ funksiya juft funksiya boʻlsa, $f(1)$ ning '
  r'qiymatini toping. **A)** $11$ **B)** $-8$ **C)** $2$ **D)** $3$',
  r'Функция $f(x)=2x^4+(a-11)x^3+1$ чётная. Найдите значение $f(1)$. '
  r'**A)** $11$ **B)** $-8$ **C)** $2$ **D)** $3$')

Q('2024', 11, 8,
  r'$ABC$ uchburchakda $2\sqrt3\cos A=2\cos B=\sqrt3$ tenglik oʻrinli boʻlsa, '
  r'$\angle ACB$ ni toping. **A)** $30^\circ$ **B)** $60^\circ$ '
  r'**C)** $120^\circ$ **D)** $90^\circ$',
  r'В треугольнике $ABC$ выполняется $2\sqrt3\cos A=2\cos B=\sqrt3$. Найдите '
  r'$\angle ACB$. **A)** $30^\circ$ **B)** $60^\circ$ **C)** $120^\circ$ '
  r'**D)** $90^\circ$')

Q('2024', 11, 9,
  r'$9$ raqami bilan tugaydigan $9$ ga karrali nechta uch xonali son mavjud? '
  r'**A)** $10$ **B)** $9$ **C)** $8$ **D)** $7$',
  r'Сколько существует трёхзначных чисел, кратных $9$ и оканчивающихся цифрой '
  r'$9$? **A)** $10$ **B)** $9$ **C)** $8$ **D)** $7$')

Q('2024', 11, 10,
  r'Ifodani soddalashtiring $\log_{25}\sqrt5+\log_6^2 3\cdot\log_3 6+\log_6 2$ '
  r'**A)** $1$ **B)** $1{,}25+\log_6 3$ **C)** $0{,}25+\log_6 12$ '
  r'**D)** $1{,}25$',
  r'Упростите выражение $\log_{25}\sqrt5+\log_6^2 3\cdot\log_3 6+\log_6 2$ '
  r'**A)** $1$ **B)** $1{,}25+\log_6 3$ **C)** $0{,}25+\log_6 12$ '
  r'**D)** $1{,}25$')

Q('2024', 11, 11,
  r'Tenglamaning haqiqiy ildizlari sonini toping. '
  r'$\left(2^{x-1}-1\right)\left(|x+1|-2\right)\left(\log_2 x-1\right)=0$ '
  r'**A)** $1$ **B)** $2$ **C)** $3$ **D)** $\varnothing$',
  r'Найдите число действительных корней уравнения. '
  r'$\left(2^{x-1}-1\right)\left(|x+1|-2\right)\left(\log_2 x-1\right)=0$ '
  r'**A)** $1$ **B)** $2$ **C)** $3$ **D)** $\varnothing$')

Q('2024', 11, 13,
  r'$x$ va $y$ sonlari $x(x-y)=y(x+y)=1$ tenglikni qanoatlantiradi. '
  r'$xy\left(x^4-y^4\right)$ ifodaning qiymatini toping. '
  r'**A)** $1$ **B)** $2$ **C)** $4$ **D)** $8$',
  r'Числа $x$ и $y$ удовлетворяют равенству $x(x-y)=y(x+y)=1$. Найдите значение '
  r'выражения $xy\left(x^4-y^4\right)$. **A)** $1$ **B)** $2$ **C)** $4$ '
  r'**D)** $8$')

Q('2024', 11, 14,
  r'$\cos(-2024^\circ)\cdot\sqrt{\cos^{-2}2024^\circ}=?$ '
  r'**A)** $1$ **B)** $-1$ **C)** $-\operatorname{tg}44^\circ$ '
  r'**D)** $-\operatorname{tg}56^\circ$',
  r'$\cos(-2024^\circ)\cdot\sqrt{\cos^{-2}2024^\circ}=?$ '
  r'**A)** $1$ **B)** $-1$ **C)** $-\operatorname{tg}44^\circ$ '
  r'**D)** $-\operatorname{tg}56^\circ$')

Q('2024', 11, 15,
  r'$ABCD$ kvadratning $AD$ tomonida $K$ nuqta belgilandi, $AB$ nurning $B$ dan '
  r'keyin davomida $L$ nuqta olindi. Agar $\angle KCB=60^\circ$, $KD=2\sqrt2$, '
  r'$LB=1$ ekani maʼlum boʻlsa, $LC$ ni toping. '
  r'**A)** $5$ **B)** $4$ **C)** $\sqrt{26}$ **D)** $\sqrt{33}$',
  r'На стороне $AD$ квадрата $ABCD$ отмечена точка $K$, а на продолжении луча '
  r'$AB$ за точку $B$ взята точка $L$. Известно, что $\angle KCB=60^\circ$, '
  r'$KD=2\sqrt2$, $LB=1$. Найдите $LC$. '
  r'**A)** $5$ **B)** $4$ **C)** $\sqrt{26}$ **D)** $\sqrt{33}$')

Q('2024', 11, 17,
  r'$9\cdot99\cdot999\cdot\ldots\cdot\underbrace{99\ldots9}_{2024}$ koʻpaytmani '
  r'$1000$ ga boʻlgandagi qoldiqni toping. **A)** $9$ **B)** $109$ '
  r'**C)** $891$ **D)** $991$',
  r'Найдите остаток от деления произведения '
  r'$9\cdot99\cdot999\cdot\ldots\cdot\underbrace{99\ldots9}_{2024}$ на $1000$. '
  r'**A)** $9$ **B)** $109$ **C)** $891$ **D)** $991$')

Q('2024', 11, 20,
  r'$5^{2024}-3^{2024}$ ayirmani $34$ ga boʻlgandagi qoldiqni toping. '
  r'**A)** $24$ **B)** $2$ **C)** $18$ **D)** $0$',
  r'Найдите остаток от деления разности $5^{2024}-3^{2024}$ на $34$. '
  r'**A)** $24$ **B)** $2$ **C)** $18$ **D)** $0$')

Q('2024', 11, 21,
  r'Soddalashtiring: $\left(\dfrac{3}{\sqrt[3]{64}-\sqrt[3]{25}}+'
  r'\dfrac{\sqrt[3]{40}}{\sqrt[3]{8}+\sqrt[3]{5}}-\dfrac{10}{\sqrt[3]{25}}'
  r'\right)^{-1}\cdot\left(13-4\sqrt[3]{5}-2\sqrt[3]{25}\right)+\sqrt[3]{25}$',
  r'Упростите: $\left(\dfrac{3}{\sqrt[3]{64}-\sqrt[3]{25}}+'
  r'\dfrac{\sqrt[3]{40}}{\sqrt[3]{8}+\sqrt[3]{5}}-\dfrac{10}{\sqrt[3]{25}}'
  r'\right)^{-1}\cdot\left(13-4\sqrt[3]{5}-2\sqrt[3]{25}\right)+\sqrt[3]{25}$')

Q('2024', 11, 26,
  r'$a$, $b$, $c$ — turli raqamlar, $\overline{aabc}$ — toʻrt xonali son va '
  r'$\overline{aabc}=(a+b+c)^3$ boʻlsa, $a+b-c$ ni hisoblang.',
  r'$a$, $b$, $c$ — различные цифры, $\overline{aabc}$ — четырёхзначное число и '
  r'$\overline{aabc}=(a+b+c)^3$. Вычислите $a+b-c$.')

Q('2024', 11, 27,
  r'Balandligi $\sqrt{19}+2$ ga, yoyi $120^\circ$ ga teng boʻlgan segmentga '
  r'kvadrat ichki chizilgan. Kvadrat yuzini toping.',
  r'В сегмент с высотой $\sqrt{19}+2$ и дугой $120^\circ$ вписан квадрат. '
  r'Найдите площадь квадрата.')

Q('2024', 11, 28,
  r'$\dfrac{x^2-3px+2p^2}{x+2p-6}=0$ tenglama faqat bitta ildizga ega '
  r'boʻladigan $p$ parametrning nechta qiymati mavjud?',
  r'При скольких значениях параметра $p$ уравнение '
  r'$\dfrac{x^2-3px+2p^2}{x+2p-6}=0$ имеет ровно один корень?')


# ------------------------------------------------- 2025/26-A, 9-sinf (qolgani)
Q('2025/26-A', 9, 1,
  r'Hisoblang: $\dfrac{1-3+5-7+9-\cdots-2027}{1-2+3-4+5-\cdots-2028}$ '
  r'**A)** $-0{,}5$ **B)** $-1$ **C)** $1$ **D)** $2$',
  r'Вычислите: $\dfrac{1-3+5-7+9-\cdots-2027}{1-2+3-4+5-\cdots-2028}$ '
  r'**A)** $-0{,}5$ **B)** $-1$ **C)** $1$ **D)** $2$')

Q('2025/26-A', 9, 5,
  r'Raqamlari yigʻindisi $6$ ga teng boʻlgan nechta $3$ ga boʻlinadigan ikki '
  r'xonali son bor? **A)** $6$ **B)** $5$ **C)** $4$ **D)** $3$',
  r'Сколько существует двузначных чисел, делящихся на $3$, сумма цифр которых '
  r'равна $6$? **A)** $6$ **B)** $5$ **C)** $4$ **D)** $3$')

Q('2025/26-A', 9, 7,
  r'$0$ dan farqli $a$, $b$, $c$, $d$ haqiqiy sonlar uchun '
  r'$\dfrac{a}{b}=\dfrac{c}{d}=6$ boʻlsa, '
  r'$\dfrac{b}{a+b}\times\dfrac{d}{c-d}$ koʻpaytmaning qiymatini toping. '
  r'**A)** $7$ **B)** $\dfrac{1}{35}$ **C)** $\dfrac17$ **D)** $35$',
  r'Для отличных от нуля действительных чисел $a$, $b$, $c$, $d$ выполняется '
  r'$\dfrac{a}{b}=\dfrac{c}{d}=6$. Найдите значение произведения '
  r'$\dfrac{b}{a+b}\times\dfrac{d}{c-d}$. '
  r'**A)** $7$ **B)** $\dfrac{1}{35}$ **C)** $\dfrac17$ **D)** $35$')

Q('2025/26-A', 9, 11,
  r'$60^\circ$ li burchakka bir-biriga tashqi urinuvchi ikkita aylana ichki '
  r'chizilgan. Agar ushbu aylanalardan kichigining radiusi $12$ ga teng boʻlsa '
  r'kattasining radiusini toping. **A)** $18$ **B)** $24$ **C)** $36$ '
  r'**D)** $48$',
  r'В угол $60^\circ$ вписаны две окружности, касающиеся друг друга внешним '
  r'образом. Радиус меньшей из них равен $12$. Найдите радиус большей. '
  r'**A)** $18$ **B)** $24$ **C)** $36$ **D)** $48$')

Q('2025/26-A', 9, 16,
  r'Ixtiyoriy $n$ natural son uchun $f(2n)=n\,f(n)$ shartni qanoatlantiradigan '
  r'funksiya berilgan. Agar $f(1)=1$ boʻlsa, $f\left(2^{10}\right)$ ning '
  r'qiymatini toping. **A)** $2^{45}$ **B)** $2^{55}$ **C)** $2^{50}$ '
  r'**D)** $2$',
  r'Функция удовлетворяет условию $f(2n)=n\,f(n)$ для любого натурального $n$. '
  r'Найдите $f\left(2^{10}\right)$, если $f(1)=1$. '
  r'**A)** $2^{45}$ **B)** $2^{55}$ **C)** $2^{50}$ **D)** $2$')

Q('2025/26-A', 9, 20,
  r'Agar $\dfrac{a}{b}=\dfrac{b}{c}=\dfrac{c}{d}$, $a+d=12$ va $ad=11$ shartlar '
  r'oʻrinli boʻlsa, $b^3+c^3$ yigʻindining qiymatini toping. '
  r'**A)** $6\sqrt[3]{11}$ **B)** $6\sqrt{11}$ **C)** $66$ **D)** $132$',
  r'Пусть $\dfrac{a}{b}=\dfrac{b}{c}=\dfrac{c}{d}$, $a+d=12$ и $ad=11$. Найдите '
  r'значение суммы $b^3+c^3$. '
  r'**A)** $6\sqrt[3]{11}$ **B)** $6\sqrt{11}$ **C)** $66$ **D)** $132$')

Q('2025/26-A', 9, 22,
  r'Berilgan yigʻindining oxirgi raqamini toping: '
  r'$$1+4\times2+7\times2^2+10\times2^3+\cdots+67\times2^{22}$$',
  r'Найдите последнюю цифру суммы: '
  r'$$1+4\times2+7\times2^2+10\times2^3+\cdots+67\times2^{22}$$')

Q('2025/26-A', 9, 23,
  r'$\overline{BAA2025AAB}$ soni $7$ ga boʻlinsa, $A+B$ yigʻindining eng kichik '
  r'qiymatini toping.',
  r'Число $\overline{BAA2025AAB}$ делится на $7$. Найдите наименьшее значение '
  r'суммы $A+B$.')

Q('2025/26-A', 9, 26,
  r'Raqamlari koʻpaytmasi $10$ dan katta boʻlmagan, lekin raqamlari yigʻindisi '
  r'$10$ dan katta boʻlgan nechta uch xonali son mavjud?',
  r'Сколько существует трёхзначных чисел, у которых произведение цифр не больше '
  r'$10$, а сумма цифр больше $10$?')

Q('2025/26-A', 9, 27,
  r'$ABCD$ trapetsiyada $\angle A=90^\circ$, $\angle D=30^\circ$. Markazi $AD$ '
  r'asosda boʻlgan aylana $AB$, $BC$ va $CD$ tomonlarga urinadi. Agar '
  r'trapetsiyaning oʻrta chizigʻi $6-\sqrt3$ ga teng boʻlsa, aylana radiusini '
  r'toping.',
  r'В трапеции $ABCD$ угол $A$ равен $90^\circ$, угол $D$ равен $30^\circ$. '
  r'Окружность с центром на основании $AD$ касается сторон $AB$, $BC$ и $CD$. '
  r'Найдите радиус окружности, если средняя линия трапеции равна $6-\sqrt3$.')

Q('2025/26-A', 9, 29,
  r'Berilgan rasmda nechta uchburchak mavjud?',
  r'Сколько треугольников на данном рисунке?')


# ------------------------------------------------ 2025/26-A, 10-sinf (qolgani)
Q('2025/26-A', 10, 1,
  r'$2^2+3^3+4^4+5^5+6^6$ yigʻindining oxirgi raqamini toping. '
  r'**A)** $8$ **B)** $4$ **C)** $2$ **D)** $0$',
  r'Найдите последнюю цифру суммы $2^2+3^3+4^4+5^5+6^6$. '
  r'**A)** $8$ **B)** $4$ **C)** $2$ **D)** $0$')

Q('2025/26-A', 10, 2,
  r'$0{,}9<x<9{,}5$ shartni qanoatlantiruvchi barcha natural $x$ larning '
  r'yigʻindisining turli tub boʻluvchilari sonini toping. '
  r'**A)** $1$ **B)** $2$ **C)** $3$ **D)** $4$',
  r'Найдите число различных простых делителей суммы всех натуральных $x$, '
  r'удовлетворяющих условию $0{,}9<x<9{,}5$. '
  r'**A)** $1$ **B)** $2$ **C)** $3$ **D)** $4$')

Q('2025/26-A', 10, 3,
  r'$x$, $2$, $x+2y$ va $4$ sonlari arifmetik progressiyani tashkil qilsa, '
  r'$x^2+y^2$ ning qiymatini toping. **A)** $1$ **B)** $2$ **C)** $3$ '
  r'**D)** $4$',
  r'Числа $x$, $2$, $x+2y$ и $4$ образуют арифметическую прогрессию. Найдите '
  r'значение $x^2+y^2$. **A)** $1$ **B)** $2$ **C)** $3$ **D)** $4$')

Q('2025/26-A', 10, 6,
  r'Natural boʻluvchilari soni aynan $3$ ta boʻlgan dastlabki $3$ ta natural '
  r'sonning yigʻindisni toping. **A)** $36$ **B)** $38$ **C)** $40$ '
  r'**D)** $42$',
  r'Найдите сумму первых трёх натуральных чисел, у которых ровно $3$ '
  r'натуральных делителя. **A)** $36$ **B)** $38$ **C)** $40$ **D)** $42$')

Q('2025/26-A', 10, 7,
  r'Agar $x_1$ va $x_2$ sonlar $2x^2-5x+3=0$ tenglamaning ildizlari boʻlsa, '
  r'$x_2+x_1\times x_2+x_1$ ifodaning qiymatini toping. '
  r'**A)** $4$ **B)** $5$ **C)** $6$ **D)** $7$',
  r'Числа $x_1$ и $x_2$ — корни уравнения $2x^2-5x+3=0$. Найдите значение '
  r'выражения $x_2+x_1\times x_2+x_1$. **A)** $4$ **B)** $5$ **C)** $6$ '
  r'**D)** $7$')

Q('2025/26-A', 10, 8,
  r'$p$ tub son berilgan. $24p$ sonining natural boʻluvchilari soni eng koʻpi '
  r'bilan nechta boʻlishi mumkin? **A)** $10$ **B)** $16$ **C)** $14$ '
  r'**D)** $12$',
  r'Дано простое число $p$. Сколько natural делителей может быть у числа $24p$ '
  r'самое большее? **A)** $10$ **B)** $16$ **C)** $14$ **D)** $12$')

Q('2025/26-A', 10, 10,
  r'$OY$ oʻqi, $y=x$ va $y=-x+6$ toʻgʻri chiziqlar bilan chegaralangan '
  r'uchburchak yuzini toping. **A)** $36$ **B)** $18$ **C)** $9$ '
  r'**D)** $4{,}5$',
  r'Найдите площадь треугольника, ограниченного осью $OY$ и прямыми $y=x$ и '
  r'$y=-x+6$. **A)** $36$ **B)** $18$ **C)** $9$ **D)** $4{,}5$')

Q('2025/26-A', 10, 11,
  r'$2025!$ sonining $2024!$ sonidan katta boʻluvchilari soni nechta? '
  r'**A)** $1$ **B)** $2025$ **C)** $14$ **D)** $2024$',
  r'Сколько делителей числа $2025!$ больше, чем $2024!$? '
  r'**A)** $1$ **B)** $2025$ **C)** $14$ **D)** $2024$')

Q('2025/26-A', 10, 13,
  r'Oʻsuvchi arifmetik progressiyaning dastlabki $10$ ta hadining yigʻindisi '
  r'$140$ ga teng boʻlib, ikkinchi va toʻqqizinchi hadlari koʻpaytmasi $147$ ga '
  r'teng boʻlsa, uchinchi hadni toping. '
  r'**A)** $3$ **B)** $5$ **C)** $7$ **D)** $9$',
  r'Сумма первых $10$ членов возрастающей арифметической прогрессии равна '
  r'$140$, а произведение второго и девятого членов равно $147$. Найдите третий '
  r'член. **A)** $3$ **B)** $5$ **C)** $7$ **D)** $9$')

Q('2025/26-A', 10, 15,
  r'$4$ nafar turli yoshdagi kishilarning ixtiyoriy ikkitasining yoshlari farqi '
  r'turlicha ekanligi maʼlum. Ularning eng kattasi va eng kichigining yoshlari '
  r'farqi eng kamida nechaga teng boʻlishi mumkin? '
  r'**A)** $7$ **B)** $5$ **C)** $8$ **D)** $6$',
  r'Известно, что у четырёх человек разного возраста разности возрастов любых '
  r'двух различны. Чему как минимум может быть равна разность возрастов самого '
  r'старшего и самого младшего? **A)** $7$ **B)** $5$ **C)** $8$ **D)** $6$')

Q('2025/26-A', 10, 16,
  r'$n$ natural son uchun ushbu $\dfrac{n^3-2n^2-12}{n}$ nisbatning barcha '
  r'natural qiymatlari yigʻindisni toping. **A)** $27$ **B)** $143$ '
  r'**C)** $124$ **D)** $146$',
  r'Найдите сумму всех натуральных значений выражения '
  r'$\dfrac{n^3-2n^2-12}{n}$ при натуральных $n$. **A)** $27$ **B)** $143$ '
  r'**C)** $124$ **D)** $146$')

Q('2025/26-A', 10, 19,
  r'Hozir soat $5{:}20$ boʻlsa, necha daqiqadan soʻng soat va minut mili '
  r'birinchi marta ustma-ust tushadi? **A)** $\dfrac{80}{11}$ **B)** $7$ '
  r'**C)** $\dfrac{15}{2}$ **D)** $\dfrac{25}{3}$',
  r'Сейчас $5{:}20$. Через сколько минут часовая и минутная стрелки впервые '
  r'совпадут? **A)** $\dfrac{80}{11}$ **B)** $7$ **C)** $\dfrac{15}{2}$ '
  r'**D)** $\dfrac{25}{3}$')

Q('2025/26-A', 10, 20,
  r'$ABCD$ parallelogram ichida $P$ nuqta shunday tanlanganki, bunda '
  r'$\angle APB+\angle CPD=180^\circ$ va $\angle PBC=36^\circ$. $\angle PDC$ '
  r'necha gradusga teng? **A)** $18$ **B)** $54$ **C)** $72$ **D)** $36$',
  r'Внутри параллелограмма $ABCD$ выбрана точка $P$ так, что '
  r'$\angle APB+\angle CPD=180^\circ$ и $\angle PBC=36^\circ$. Чему равен угол '
  r'$PDC$? **A)** $18$ **B)** $54$ **C)** $72$ **D)** $36$')

Q('2025/26-A', 10, 22,
  r'Berilgan tengsizlikni qanoatlantiruvchi $7$ ta butun $x$ boʻlsa, $a$ '
  r'natural sonning qiymatini toping. $$6x^2-ax-a^2<0$$',
  r'Неравенству удовлетворяют ровно $7$ целых значений $x$. Найдите натуральное '
  r'число $a$. $$6x^2-ax-a^2<0$$')

Q('2025/26-A', 10, 23,
  r'Teng yonli $ABC$ uchburchak berilgan ($AC=BC$). Ushbu uchburchakning $BD$ '
  r'bissektrisasi oʻtkazilgan ($D\in AC$). $BD$ toʻgʻri chiziqqa $D$ nuqta '
  r'orqali oʻtkazilgan perpendikulyar chiziq $BA$ toʻgʻri chiziqni $M$ nuqtada '
  r'kesib oʻtadi. Agar $AD=12$ boʻlsa, $BM$ kesmaning uzunligini toping.',
  r'Дан равнобедренный треугольник $ABC$ ($AC=BC$). Проведена биссектриса $BD$ '
  r'($D\in AC$). Прямая, проведённая через точку $D$ перпендикулярно $BD$, '
  r'пересекает прямую $BA$ в точке $M$. Найдите длину отрезка $BM$, если '
  r'$AD=12$.')

Q('2025/26-A', 10, 25,
  r'$11222333344444\ldots$ ushbu ketma-ketlikda $2$ ta $1$, $3$ ta $2$, '
  r'$\ldots$, $n+1$ ta $n$ soni bitta qatorda yozilgan. Ketma-ketlikdagi '
  r'$2025$-oʻrindagi raqamni toping.',
  r'В последовательности $11222333344444\ldots$ подряд выписаны $2$ единицы, '
  r'$3$ двойки, $\ldots$, $n+1$ чисел $n$. Найдите цифру, стоящую на '
  r'$2025$-м месте.')

Q('2025/26-A', 10, 30,
  r'$\{1,2,3,\ldots,10\}$ toʻplamning nechta shunday qism toʻplami mavjud '
  r'bunda: ushbu qism toʻplamning hech qaysi ikkita elementi ketma-ket emas?',
  r'Сколько существует подмножеств множества $\{1,2,3,\ldots,10\}$, в которых '
  r'никакие два элемента не идут подряд?')


# ------------------------------------------------ 2025/26-A, 11-sinf (qolgani)
Q('2025/26-A', 11, 1,
  r'$a$, $b$ haqiqiy sonlar uchun $\dfrac{a+2b}{a-2b}=3$ boʻlsa, '
  r'$\dfrac{a+3b}{a-3b}$ ning qiymatini toping. '
  r'**A)** $5$ **B)** $6$ **C)** $7$ **D)** $8$',
  r'Для действительных чисел $a$ и $b$ выполняется $\dfrac{a+2b}{a-2b}=3$. '
  r'Найдите значение $\dfrac{a+3b}{a-3b}$. '
  r'**A)** $5$ **B)** $6$ **C)** $7$ **D)** $8$')

Q('2025/26-A', 11, 2,
  r'Ichida $4$ ta kitob boʻlgan qutining vazni $10$ kg va ichida $6$ ta kitob '
  r'boʻlgan xuddi shu qutining vazni $13$ kg. Agar barcha kitoblarning vazni '
  r'bir xil boʻlsa, boʻsh qutining vaznini toping. '
  r'**A)** $1$ **B)** $2$ **C)** $3$ **D)** $4$',
  r'Коробка с $4$ книгами весит $10$ кг, а та же коробка с $6$ книгами — '
  r'$13$ кг. Все книги одинакового веса. Найдите вес пустой коробки. '
  r'**A)** $1$ **B)** $2$ **C)** $3$ **D)** $4$')

Q('2025/26-A', 11, 4,
  r'Bir bazmda, har bir bola bittadan olma olsa, savatda yana $7$ ta olma ortib '
  r'qoladi. Agar har bola ikkitadan olma olsa, $16$ ta olma yetmay qoladi. '
  r'Bazmda nechta bola boʻlgan? **A)** $23$ **B)** $16$ **C)** $14$ '
  r'**D)** $7$',
  r'На празднике, если каждый ребёнок возьмёт по одному яблоку, в корзине '
  r'останется ещё $7$ яблок. Если каждый возьмёт по два, не хватит $16$ яблок. '
  r'Сколько детей было на празднике? **A)** $23$ **B)** $16$ **C)** $14$ '
  r'**D)** $7$')

Q('2025/26-A', 11, 5,
  r'$x<-1$ haqiqiy son uchun quyidagi javoblardan qaysi biri toʻgʻri? '
  r'**A)** $x^3<x<x^2$ **B)** $x<x^2<x^3$ **C)** $x<x^3<x^2$ '
  r'**D)** $x^2<x^3<x$',
  r'Для действительного $x<-1$ какое из утверждений верно? '
  r'**A)** $x^3<x<x^2$ **B)** $x<x^2<x^3$ **C)** $x<x^3<x^2$ '
  r'**D)** $x^2<x^3<x$')

Q('2025/26-A', 11, 7,
  r'Bugun haftaning dushanba kuni va Asadbek bugun $290$ betli kitobni oʻqishni '
  r'boshlaydi. U haftaning dushanba kunlari $25$ bet va haftaning boshqa '
  r'kunlarida $4$ betdan kitob oʻqisa, haftaning qaysi kunida kitobni oʻqib '
  r'tugatadi? **A)** Payshanba **B)** Juma **C)** Shanba **D)** Yakshanba',
  r'Сегодня понедельник, и Асадбек начинает читать книгу в $290$ страниц. По '
  r'понедельникам он читает $25$ страниц, в остальные дни — по $4$. В какой '
  r'день недели он дочитает книгу? **A)** четверг **B)** пятница '
  r'**C)** суббота **D)** воскресенье')

Q('2025/26-A', 11, 8,
  r'$2000$ va $3000$ orasidagi natural sonlarning nechtasining raqamlari '
  r'yigʻindisi $5$ ga teng. **A)** $6$ **B)** $10$ **C)** $15$ **D)** $21$',
  r'У скольких натуральных чисел между $2000$ и $3000$ сумма цифр равна $5$? '
  r'**A)** $6$ **B)** $10$ **C)** $15$ **D)** $21$')

Q('2025/26-A', 11, 13,
  r'$x$, $y$ — musbat haqiqiy sonlar uchun '
  r'$\dfrac18<\dfrac{\sqrt x}{x}\le\dfrac13$ va '
  r'$\dfrac25<1-\dfrac{\sqrt y}{y}\le\dfrac12$ tengsizliklar oʻrinli boʻlsa, '
  r'$x-y$ ifodaning qabul qilishi mumkin boʻlgan eng kichik qiymatini toping. '
  r'**A)** $4$ **B)** $5$ **C)** $6$ **D)** $8$',
  r'Для положительных действительных $x$ и $y$ выполняются неравенства '
  r'$\dfrac18<\dfrac{\sqrt x}{x}\le\dfrac13$ и '
  r'$\dfrac25<1-\dfrac{\sqrt y}{y}\le\dfrac12$. Найдите наименьшее возможное '
  r'значение $x-y$. **A)** $4$ **B)** $5$ **C)** $6$ **D)** $8$')

Q('2025/26-A', 11, 15,
  r'$a$, $b$ va $c$ turli natural sonlar uchun '
  r'$\dfrac{6^a\cdot15^b}{9^b\cdot10^c}$ soni natural son boʻlsa, sonlarni '
  r'oʻsish tartibida joylashtiring. **A)** $c<b<a$ **B)** $c<a<b$ '
  r'**C)** $b<c<a$ **D)** $a<b<c$',
  r'Для различных натуральных $a$, $b$, $c$ число '
  r'$\dfrac{6^a\cdot15^b}{9^b\cdot10^c}$ натуральное. Расположите числа в '
  r'порядке возрастания. **A)** $c<b<a$ **B)** $c<a<b$ **C)** $b<c<a$ '
  r'**D)** $a<b<c$')

Q('2025/26-A', 11, 17,
  r'$x^2+ax+b=0$ va $x^2+ax+b+1=0$ kvadrat tenglamalar ikkalasi ham butun '
  r'ildizlarga ega boʻladigan va $0\le b\le10$ shartni qanoatlantiradigan barcha '
  r'$(a;b)$ butun juftliklar sonini toping. '
  r'**A)** $3$ **B)** $4$ **C)** $6$ **D)** $7$',
  r'Найдите число всех целых пар $(a;b)$, при которых оба уравнения '
  r'$x^2+ax+b=0$ и $x^2+ax+b+1=0$ имеют целые корни и $0\le b\le10$. '
  r'**A)** $3$ **B)** $4$ **C)** $6$ **D)** $7$')

Q('2025/26-A', 11, 19,
  r'$ABCD$ toʻgʻri toʻrtburchakda $\angle BAD$ ning bissektrisasi $BC$ tomonni '
  r'$P$ nuqtada kesadi. Agar $AP:PD=4:3$ boʻlsa, $PD:PC$ nisbatni toping. '
  r'**A)** $2{:}1$ **B)** $2{,}5{:}1$ **C)** $3{:}1$ **D)** $3{,}5{:}1$',
  r'В прямоугольнике $ABCD$ биссектриса угла $BAD$ пересекает сторону $BC$ в '
  r'точке $P$. Найдите отношение $PD:PC$, если $AP:PD=4:3$. '
  r'**A)** $2{:}1$ **B)** $2{,}5{:}1$ **C)** $3{:}1$ **D)** $3{,}5{:}1$')

Q('2025/26-A', 11, 27,
  r'Chizmada uzunligi $16$ cm boʻlgan $AC$ diametrda $P$ nuqta olingan, bunda '
  r'$PC=3$ cm. Agar aylanadagi $B$ nuqta uchun $AB=12$ cm boʻlsa, $BP$ '
  r'kesmaning uzunligini (cm) toping.',
  r'На диаметре $AC$ длины $16$ см отмечена точка $P$, причём $PC=3$ см. '
  r'Найдите длину отрезка $BP$ (в см), если для точки $B$ окружности '
  r'$AB=12$ см.')

Q('2025/26-A', 11, 30,
  r'Har birida kamida bitta toq raqam boʻlgan ketma-ket toʻrt xonali sonlar '
  r'toʻplamlarini qaraylik. Eng katta bunday toʻplamning elementlari sonini '
  r'toping.',
  r'Рассмотрим наборы подряд идущих четырёхзначных чисел, в каждом из которых '
  r'есть хотя бы одна нечётная цифра. Найдите число элементов наибольшего '
  r'такого набора.')


# ------------------------------------------------- 2025/26-B, 9-sinf (qolgani)
Q('2025/26-B', 9, 1,
  r'Quyidagi qator yigʻindisini hisoblang: '
  r'$2025\cdot2024\cdot2023\cdot\left(\dfrac14\cdot\dfrac25\cdot\dfrac36\cdot'
  r'\ldots\cdot\dfrac{2022}{2025}\right)$ '
  r'**A)** $1$ **B)** $2025$ **C)** $6$ **D)** $2022!$',
  r'Вычислите: $2025\cdot2024\cdot2023\cdot\left(\dfrac14\cdot\dfrac25\cdot'
  r'\dfrac36\cdot\ldots\cdot\dfrac{2022}{2025}\right)$ '
  r'**A)** $1$ **B)** $2025$ **C)** $6$ **D)** $2022!$')

Q('2025/26-B', 9, 2,
  r'$1\le n\le20$ shartni qanoatlantiradigan $n$ natural son uchun '
  r'$a=13\cdot13+n$ soni tub son boʻladigan nechta $n$ natural son mavjud? '
  r'**A)** $2$ **B)** $3$ **C)** $4$ **D)** $5$',
  r'Для скольких натуральных $n$, удовлетворяющих условию $1\le n\le20$, число '
  r'$a=13\cdot13+n$ простое? **A)** $2$ **B)** $3$ **C)** $4$ **D)** $5$')

Q('2025/26-B', 9, 3,
  r'$ABC$ teng yonli uchburchakda $AB=AC$ shart bajariladi. Agar $BC$ asosda '
  r'tanlangan $D$ nuqta uchun $AD=CD$ va $\angle BAD=36^\circ$ tengliklar '
  r'oʻrinli boʻlsa, $\angle ABD$ necha gradusga teng? '
  r'**A)** $36$ **B)** $42$ **C)** $48$ **D)** $54$',
  r'В равнобедренном треугольнике $ABC$ выполняется $AB=AC$. Для точки $D$, '
  r'выбранной на основании $BC$, верно $AD=CD$ и $\angle BAD=36^\circ$. Чему '
  r'равен угол $ABD$? **A)** $36$ **B)** $42$ **C)** $48$ **D)** $54$')

Q('2025/26-B', 9, 4,
  r'$2$ dan $10$ gacha boʻlgan natural sonlar (har bir son faqat bir marta '
  r'ishlatiladi) rasmdagi toʻqqizta doiraga joylashtirilgan. Bir toʻgʻri '
  r'chiziqda yotuvchi $3$ ta doiracha ichidagi sonlarning yigʻindilari teng '
  r'boʻlsa, ushbu yigʻindi necha xil qiymat qabul qila oladi? '
  r'**A)** $3$ **B)** $4$ **C)** $5$ **D)** $6$',
  r'Натуральные числа от $2$ до $10$ (каждое ровно один раз) расставлены в '
  r'девять кружков на рисунке. Суммы трёх чисел в кружках, лежащих на одной '
  r'прямой, равны. Сколько различных значений может принимать эта сумма? '
  r'**A)** $3$ **B)** $4$ **C)** $5$ **D)** $6$')

Q('2025/26-B', 9, 5,
  r'Berilgan ketma-ketlik $1,2,3,4,5,6,7,6,5,4,3,2,1,2,3,4,5,6,7,6,5,\ldots$ '
  r'koʻrinishda boʻlib, cheksiz marta $1$ dan $7$ gacha oʻsib, $7$ dan $1$ '
  r'gacha kamayadi. Ushbu ketma-ketlikning $2025$-hadini toping. '
  r'**A)** $1$ **B)** $7$ **C)** $6$ **D)** $5$',
  r'Последовательность $1,2,3,4,5,6,7,6,5,4,3,2,1,2,3,4,5,6,7,6,5,\ldots$ '
  r'бесконечно возрастает от $1$ до $7$ и убывает от $7$ до $1$. Найдите её '
  r'$2025$-й член. **A)** $1$ **B)** $7$ **C)** $6$ **D)** $5$')

Q('2025/26-B', 9, 6,
  r'$\triangle ABC$ da $\angle BAC=25^\circ$ va $\angle BCA>90^\circ$. Aytaylik '
  r'$B_1$ nuqta $B$ nuqtaning $AC$ toʻgʻri chiziqqa nisbatan simmetrigi, $C_1$ '
  r'nuqta $C$ nuqtaning $AB$ toʻgʻri chiziqqa nisbatan simmetrigi boʻlsin. Agar '
  r'$\angle B_1BC_1=100^\circ$ boʻlsa, $\angle BCA$ necha gradusga teng? '
  r'**A)** $110^\circ$ **B)** $120^\circ$ **C)** $130^\circ$ '
  r'**D)** $140^\circ$',
  r'В треугольнике $ABC$ угол $BAC$ равен $25^\circ$ и $\angle BCA>90^\circ$. '
  r'Пусть $B_1$ — точка, симметричная $B$ относительно прямой $AC$, а $C_1$ — '
  r'точка, симметричная $C$ относительно прямой $AB$. Найдите $\angle BCA$, '
  r'если $\angle B_1BC_1=100^\circ$. **A)** $110^\circ$ **B)** $120^\circ$ '
  r'**C)** $130^\circ$ **D)** $140^\circ$')

Q('2025/26-B', 9, 7,
  r'Dastlabki $100$ ta natural sondan nechtasini $2a+3b$ koʻrinishida ifodalab '
  r'boʻlmaydi? (Bunda $a$ va $b$ nomanfiy butun sonlar.) '
  r'**A)** $3$ **B)** $5$ **C)** $1$ **D)** $4$',
  r'Сколько из первых $100$ натуральных чисел нельзя представить в виде '
  r'$2a+3b$? (Здесь $a$ и $b$ — неотрицательные целые.) '
  r'**A)** $3$ **B)** $5$ **C)** $1$ **D)** $4$')

Q('2025/26-B', 9, 8,
  r'$n$ natural son uchun $n!=1\cdot2\cdot3\cdot\ldots\cdot n$ boʻlsa, '
  r'$1!+2!+3!+\cdots+2025!$ yigʻindining oxirgi ikkita raqamining yigʻindisini '
  r'toping. **A)** $3$ **B)** $13$ **C)** $4$ **D)** $6$',
  r'Пусть $n!=1\cdot2\cdot3\cdot\ldots\cdot n$. Найдите сумму двух последних '
  r'цифр суммы $1!+2!+3!+\cdots+2025!$. '
  r'**A)** $3$ **B)** $13$ **C)** $4$ **D)** $6$')

Q('2025/26-B', 9, 10,
  r'Agar $f(x)=x^2+kx+110$ va $f(1)=f(20)$ boʻlsa, $f(10)$ ning qiymatini '
  r'toping. **A)** $-21$ **B)** $0$ **C)** $100$ **D)** $420$',
  r'Пусть $f(x)=x^2+kx+110$ и $f(1)=f(20)$. Найдите значение $f(10)$. '
  r'**A)** $-21$ **B)** $0$ **C)** $100$ **D)** $420$')

Q('2025/26-B', 9, 11,
  r'Eng katta $n$ natural sonni toping bunda: $n!$ soni $7^{72}$ ga '
  r'boʻlinmasin. Bunda $n!=1\cdot2\cdot3\cdot\ldots\cdot n$. '
  r'**A)** $433$ **B)** $440$ **C)** $439$ **D)** $441$',
  r'Найдите наибольшее натуральное $n$, при котором $n!$ не делится на '
  r'$7^{72}$. Здесь $n!=1\cdot2\cdot3\cdot\ldots\cdot n$. '
  r'**A)** $433$ **B)** $440$ **C)** $439$ **D)** $441$')

Q('2025/26-B', 9, 12,
  r'Jahongir doʻkonga kirib, $10$ dollarlik mahsulotni $10\%$ chegirma bilan, '
  r'$15$ dollarlik mahsulotni $15\%$ chegirma bilan va $25$ dollarlik '
  r'mahsulotni $25\%$ chegirma bilan sotib oldi. Jahongir doʻkondagi xaridida '
  r'umumiy necha foiz chegirma oldi? **A)** $19\%$ '
  r'**B)** $\dfrac{50}{3}\%$ **C)** $50\%$ **D)** $20\%$',
  r'Джахонгир купил товар за $10$ долларов со скидкой $10\%$, товар за $15$ '
  r'долларов со скидкой $15\%$ и товар за $25$ долларов со скидкой $25\%$. '
  r'Какую суммарную скидку в процентах он получил? **A)** $19\%$ '
  r'**B)** $\dfrac{50}{3}\%$ **C)** $50\%$ **D)** $20\%$')

Q('2025/26-B', 9, 13,
  r'Tenglamaning barcha ildizlari yigʻindisini toping: '
  r'$$3\cdot\left|x^2-(2-x)^2+1\right|=10-|8x-6|$$ '
  r'**A)** $2$ **B)** $\dfrac54$ **C)** $1$ **D)** $\dfrac32$',
  r'Найдите сумму всех корней уравнения: '
  r'$$3\cdot\left|x^2-(2-x)^2+1\right|=10-|8x-6|$$ '
  r'**A)** $2$ **B)** $\dfrac54$ **C)** $1$ **D)** $\dfrac32$')

Q('2025/26-B', 9, 14,
  r'$ABC$ uchburchakda $\angle ACB=90^\circ$ va $AL$ bissektrisa, $CM$ mediana '
  r'boʻlsin ($L\in BC$ va $M\in AB$). Agar $AL\perp CM$ boʻlsa, $\angle ABC$ '
  r'necha gradusga teng? **A)** $60^\circ$ **B)** $15^\circ$ '
  r'**C)** $45^\circ$ **D)** $30^\circ$',
  r'В треугольнике $ABC$ угол $ACB$ прямой, $AL$ — биссектриса, $CM$ — медиана '
  r'($L\in BC$, $M\in AB$). Найдите угол $ABC$, если $AL\perp CM$. '
  r'**A)** $60^\circ$ **B)** $15^\circ$ **C)** $45^\circ$ **D)** $30^\circ$')

Q('2025/26-B', 9, 15,
  r'Oʻnlik va birlik raqamlari oʻrin almashtirilsa, hosil boʻlgan yangi son '
  r'bilan asl son oʻzaro tub boʻladigan $10$ dan katta va $40$ dan kichik '
  r'nechta natural son mavjud? **A)** $12$ **B)** $14$ **C)** $16$ '
  r'**D)** $10$',
  r'Сколько существует натуральных чисел, больших $10$ и меньших $40$, которые '
  r'взаимно просты с числом, полученным перестановкой цифр десятков и единиц? '
  r'**A)** $12$ **B)** $14$ **C)** $16$ **D)** $10$')

Q('2025/26-B', 9, 16,
  r'$ABC$ uchburchakda $\angle A:\angle B:\angle C=2:3:7$ va $BD$ kesma mediana '
  r'boʻlsa, $\angle ABD$ ning qiymatini toping. ($D$ nuqta $AC$ kesmada '
  r'yotadi.) **A)** $10^\circ$ **B)** $15^\circ$ **C)** $22{,}5^\circ$ '
  r'**D)** $30^\circ$',
  r'В треугольнике $ABC$ углы относятся как $\angle A:\angle B:\angle C=2:3:7$, '
  r'а $BD$ — медиана. Найдите $\angle ABD$. (Точка $D$ лежит на отрезке $AC$.) '
  r'**A)** $10^\circ$ **B)** $15^\circ$ **C)** $22{,}5^\circ$ '
  r'**D)** $30^\circ$')

Q('2025/26-B', 9, 18,
  r'$p$, $q$, $r$ tub sonlar uchun $pqr+2025=3(pq+qr+pr)$ boʻlsa, $p+q+r$ '
  r'yigʻindining qiymatini toping. **A)** $220$ **B)** $227$ **C)** $225$ '
  r'**D)** $228$',
  r'Для простых чисел $p$, $q$, $r$ выполняется $pqr+2025=3(pq+qr+pr)$. Найдите '
  r'значение суммы $p+q+r$. **A)** $220$ **B)** $227$ **C)** $225$ '
  r'**D)** $228$')

Q('2025/26-B', 9, 19,
  r'Eng katta $n$ natural sonni toping bunda $n^5-2100$ soni '
  r'$\left(n^2-n+1\right)^2+n(n-1)^2$ soniga boʻlinsin. '
  r'**A)** $2$ **B)** $11$ **C)** $7$ **D)** $5$',
  r'Найдите наибольшее натуральное $n$, при котором $n^5-2100$ делится на '
  r'$\left(n^2-n+1\right)^2+n(n-1)^2$. '
  r'**A)** $2$ **B)** $11$ **C)** $7$ **D)** $5$')

Q('2025/26-B', 9, 20,
  r'Berilgan $3\times3$ jadvalda har bir qatordagi sonlar yigʻindisi teng va '
  r'har bir ustundagi sonlar yigʻindisi teng (qator va ustundagi sonlar '
  r'yigʻindisi teng boʻlishi shart emas). Agar berilgan rasmda $a+b=18$ boʻlsa, '
  r'$x$ ning qiymatini toping. **A)** $7$ **B)** $8$ **C)** $9$ '
  r'**D)** $10$',
  r'В таблице $3\times3$ суммы чисел в каждой строке равны между собой и суммы '
  r'чисел в каждом столбце равны между собой (суммы по строке и по столбцу '
  r'равными быть не обязаны). Найдите $x$, если на рисунке $a+b=18$. '
  r'**A)** $7$ **B)** $8$ **C)** $9$ **D)** $10$')

Q('2025/26-B', 9, 21,
  r'$10\,000$ dan kichik boʻlgan nechta natural sonning tarkibida aynan ikkita '
  r'“$2$” raqami va aynan bitta “$5$” raqami bor? (masalan, $2025$). '
  r'**A)** $96$ **B)** $93$ **C)** $84$ **D)** $99$',
  r'У скольких натуральных чисел, меньших $10\,000$, ровно две цифры «$2$» и '
  r'ровно одна цифра «$5$»? (например, $2025$). '
  r'**A)** $96$ **B)** $93$ **C)** $84$ **D)** $99$')

Q('2025/26-B', 9, 22,
  r'$a<b<c$ butun sonlar quyidagi shartlarni qanoatlantiradi: $b$ soni $a$ va '
  r'$c$ sonlarning oʻrta arifmetigi, $c$ soni $a$ va $b$ sonlarning oʻrta '
  r'geometrigi. $abc$ koʻpaytmaning eng kichik qiymatini toping. '
  r'**A)** $12$ **B)** $8$ **C)** $6$ **D)** $-12$',
  r'Целые числа $a<b<c$ удовлетворяют условиям: $b$ — среднее арифметическое '
  r'$a$ и $c$, а $c$ — среднее геометрическое $a$ и $b$. Найдите наименьшее '
  r'значение произведения $abc$. '
  r'**A)** $12$ **B)** $8$ **C)** $6$ **D)** $-12$')

Q('2025/26-B', 9, 23,
  r'$f(n)$ soni $n$ ta natural boʻluvchiga ega eng kichik natural son boʻlsin. '
  r'Masalan: $f(2)=2$, $f(3)=4$ boʻlsa, $f(8)+f(9)$ yigʻindining qiymatini '
  r'toping. **A)** $384$ **B)** $54$ **C)** $260$ **D)** $60$',
  r'Пусть $f(n)$ — наименьшее натуральное число, имеющее ровно $n$ натуральных '
  r'делителей. Например, $f(2)=2$, $f(3)=4$. Найдите значение суммы '
  r'$f(8)+f(9)$. **A)** $384$ **B)** $54$ **C)** $260$ **D)** $60$')

Q('2025/26-B', 9, 24,
  r'$ABCD$ toʻrtburchak tomonlarining oʻrtalari mos ravishda $M$, $N$, $P$, $Q$ '
  r'nuqtalar boʻlsin ($M$ — $AB$ ning oʻrtasi, $N$ — $BC$ ning oʻrtasi, $P$ — '
  r'$CD$ ning oʻrtasi, $Q$ — $DA$ ning oʻrtasi). $AC$ diagonalda $S$ nuqta '
  r'shunday tanlanganki bunda $QSPD$, $AMSQ$ va $MBNS$ toʻrtburchaklarning '
  r'yuzalari mos ravishda $22$, $24$ va $32$ ga teng. $AS:SC$ nisbat nechaga '
  r'teng? **A)** $\dfrac45$ **B)** $\dfrac{8}{11}$ **C)** $\dfrac38$ '
  r'**D)** $\dfrac{6}{11}$',
  r'Пусть $M$, $N$, $P$, $Q$ — середины сторон $AB$, $BC$, $CD$, $DA$ '
  r'четырёхугольника $ABCD$. На диагонали $AC$ выбрана точка $S$ так, что '
  r'площади четырёхугольников $QSPD$, $AMSQ$ и $MBNS$ равны соответственно '
  r'$22$, $24$ и $32$. Чему равно отношение $AS:SC$? '
  r'**A)** $\dfrac45$ **B)** $\dfrac{8}{11}$ **C)** $\dfrac38$ '
  r'**D)** $\dfrac{6}{11}$')

Q('2025/26-B', 9, 25,
  r'Berilgan rasmda nechta toʻgʻri toʻrtburchak aynan bitta boʻyalgan '
  r'kvadratchani oʻz ichiga oladi? **A)** $164$ **B)** $417$ **C)** $196$ '
  r'**D)** $172$',
  r'Сколько прямоугольников на рисунке содержат ровно одну закрашенную клетку? '
  r'**A)** $164$ **B)** $417$ **C)** $196$ **D)** $172$')

Q('2025/26-B', 9, 26,
  r'$a_5=5$ va har bir $n\ge6$ natural son uchun $a_n=1000a_{n-1}+n$ tenglik '
  r'oʻrinli. $n\ge6$ da $a_n$ soni $111$ ga boʻlinadigan $n$ natural sonlarning '
  r'dastlabki ikkitasi yigʻindisining qiymatini toping. '
  r'**A)** $221$ **B)** $110$ **C)** $341$ **D)** $119$',
  r'Известно, что $a_5=5$ и для каждого натурального $n\ge6$ выполняется '
  r'$a_n=1000a_{n-1}+n$. Найдите сумму двух наименьших натуральных $n\ge6$, '
  r'при которых $a_n$ делится на $111$. '
  r'**A)** $221$ **B)** $110$ **C)** $341$ **D)** $119$')

Q('2025/26-B', 9, 27,
  r'$k$ haqiqiy sonni toping bunda: $x^3-30x^2+kx-840=0$ tenglamaning ildizlari '
  r'arifmetik progressiya tashkil qilsin. **A)** $300$ **B)** $284$ '
  r'**C)** $840$ **D)** $256$',
  r'Найдите действительное число $k$, при котором корни уравнения '
  r'$x^3-30x^2+kx-840=0$ образуют арифметическую прогрессию. '
  r'**A)** $300$ **B)** $284$ **C)** $840$ **D)** $256$')

Q('2025/26-B', 9, 28,
  r'Ikkita beshburchakning jami $10$ ta uchi ranglar bilan boʻyalgan: $3$ tasi '
  r'qizil, $4$ tasi oq va $3$ tasi koʻk. Hech bir beshburchakning tomoni ikkita '
  r'qizil yoki ikkita koʻk uchni tutashtirmaslik ehtimoli $\dfrac{m}{n}$ ga '
  r'teng boʻlsa, $m+n$ yigʻindini hisoblang (bu yerda $m$ va $n$ oʻzaro tub '
  r'natural sonlar). **A)** $101$ **B)** $97$ **C)** $93$ **D)** $85$',
  r'Все $10$ вершин двух пятиугольников раскрашены: $3$ красных, $4$ белых и '
  r'$3$ синих. Вероятность того, что ни одна сторона пятиугольников не '
  r'соединяет две красные или две синие вершины, равна $\dfrac{m}{n}$. Найдите '
  r'$m+n$ (здесь $m$ и $n$ — взаимно простые натуральные числа). '
  r'**A)** $101$ **B)** $97$ **C)** $93$ **D)** $85$')

Q('2025/26-B', 9, 29,
  r'$a$ va $b$ har xil haqiqiy sonlar uchun '
  r'$2a^3+\left(1+\sqrt3\right)ab+2b^3=\dfrac{5+3\sqrt3}{54}$ boʻlsa, '
  r'$(6a+6b-1)^6$ ning qiymatini toping. '
  r'**A)** $24$ **B)** $27$ **C)** $36$ **D)** $18$',
  r'Для различных действительных чисел $a$ и $b$ выполняется '
  r'$2a^3+\left(1+\sqrt3\right)ab+2b^3=\dfrac{5+3\sqrt3}{54}$. Найдите значение '
  r'$(6a+6b-1)^6$. **A)** $24$ **B)** $27$ **C)** $36$ **D)** $18$')


# ------------------------------------------------ 2025/26-B, 10-sinf (qolgani)
Q('2025/26-B', 10, 2,
  r'Agar $x$ va $y$ sonlar $\dfrac{x-y}{x+y}=7$ va $\dfrac{xy}{x+y}=-84$ '
  r'shartlarni qanoatlantirsa, $(x+y)+(x-y)+xy$ ifodaning qiymati topilsin. '
  r'**A)** $-532$ **B)** $-568$ **C)** $-588$ **D)** $-600$',
  r'Числа $x$ и $y$ удовлетворяют условиям $\dfrac{x-y}{x+y}=7$ и '
  r'$\dfrac{xy}{x+y}=-84$. Найдите значение выражения $(x+y)+(x-y)+xy$. '
  r'**A)** $-532$ **B)** $-568$ **C)** $-588$ **D)** $-600$')

Q('2025/26-B', 10, 5,
  r'Toʻgʻri burchakli uchburchakda ikkita boʻyalgan yuza maydonlari $15$ va $8$ '
  r'ga teng. $x$ va $y$ kesmalar chizmada koʻrsatilgan. $xy$ koʻpaytmani '
  r'toping. **A)** $2\sqrt{30}$ **B)** $14$ **C)** $11{,}5$ **D)** $12$',
  r'В прямоугольном треугольнике площади двух закрашенных фигур равны $15$ и '
  r'$8$. Отрезки $x$ и $y$ показаны на чертеже. Найдите произведение $xy$. '
  r'**A)** $2\sqrt{30}$ **B)** $14$ **C)** $11{,}5$ **D)** $12$')

Q('2025/26-B', 10, 9,
  r'$(1+\sin\alpha)^{\frac13}+(1-\sin\alpha)^{\frac13}=1{,}5$ boʻlsa, '
  r'$(1+\sin\alpha)^{\frac23}-(\cos\alpha)^{\frac23}+(1-\sin\alpha)^{\frac23}$ '
  r'ning qiymatini toping. **A)** $\dfrac23$ **B)** $\dfrac43$ '
  r'**C)** $\dfrac32$ **D)** $3$',
  r'Пусть $(1+\sin\alpha)^{\frac13}+(1-\sin\alpha)^{\frac13}=1{,}5$. Найдите '
  r'значение '
  r'$(1+\sin\alpha)^{\frac23}-(\cos\alpha)^{\frac23}+(1-\sin\alpha)^{\frac23}$. '
  r'**A)** $\dfrac23$ **B)** $\dfrac43$ **C)** $\dfrac32$ **D)** $3$')

Q('2025/26-B', 10, 11,
  r'Agar har bir talaba kamida bitta kitob olsa, $5$ ta turli kitobni $3$ ta '
  r'talabaga necha usulda taqsimlash mumkin? '
  r'**A)** $144$ **B)** $150$ **C)** $240$ **D)** $243$',
  r'Сколькими способами можно раздать $5$ различных книг $3$ студентам так, '
  r'чтобы каждый получил хотя бы одну? '
  r'**A)** $144$ **B)** $150$ **C)** $240$ **D)** $243$')

Q('2025/26-B', 10, 13,
  r'$f$ va $g$ funksiyalar jadval bilan aniqlangan, unda baʼzi qiymatlar savol '
  r'belgisi (?) bilan koʻrsatilgan. Jadvalda shuningdek, $h(x)=g(f(x))$ tenglik '
  r'bilan aniqlangan $h$ funksiyasining baʼzi qiymatlari mavjud boʻlib, ular '
  r'ham savol belgisi (?) bilan almashtirilgan. $g(2)+h(4)$ ni hisoblang. '
  r'**A)** $5$ **B)** $8$ **C)** $15$ **D)** $16$',
  r'Функции $f$ и $g$ заданы таблицей, в которой некоторые значения заменены '
  r'знаком вопроса (?). В таблице есть также некоторые значения функции '
  r'$h(x)=g(f(x))$, часть из которых тоже заменена знаком вопроса. Вычислите '
  r'$g(2)+h(4)$. **A)** $5$ **B)** $8$ **C)** $15$ **D)** $16$')

Q('2025/26-B', 10, 14,
  r'$p$ va $q$ funksiyalar uchun $p(x)=q(30x)+33$ tenglik oʻrinli. Agar '
  r'$q(5)=16$ va $p(5)=629$ boʻlib, $q$ — chiziqli funksiya boʻlsa, $p(x)$ '
  r'funksiyaning formulasini toping. **A)** $p(x)=120x+29$ '
  r'**B)** $p(x)=120x-87$ **C)** $p(x)=30x^2-60x+179$ '
  r'**D)** $p(x)=36x^2+10x-321$',
  r'Для функций $p$ и $q$ выполняется $p(x)=q(30x)+33$. Известно, что $q(5)=16$ '
  r'и $p(5)=629$, а $q$ — линейная функция. Найдите формулу функции $p(x)$. '
  r'**A)** $p(x)=120x+29$ **B)** $p(x)=120x-87$ '
  r'**C)** $p(x)=30x^2-60x+179$ **D)** $p(x)=36x^2+10x-321$')

Q('2025/26-B', 10, 17,
  r'$m^2+2n^2=3(m+n)$ tenglama butun sonlarda nechta juft $(m;n)$ yechimga ega? '
  r'**A)** $0$ **B)** $2$ **C)** $4$ **D)** cheksiz koʻp',
  r'Сколько пар целых решений $(m;n)$ имеет уравнение $m^2+2n^2=3(m+n)$? '
  r'**A)** $0$ **B)** $2$ **C)** $4$ **D)** бесконечно много')

Q('2025/26-B', 10, 19,
  r'Agar $T=\left(1+\dfrac1{5^2}\right)\left(1+\dfrac1{5^4}\right)'
  r'\left(1+\dfrac1{5^8}\right)\left(1+\dfrac1{5^{16}}\right)\cdot\ldots$ '
  r'boʻlsa, $\sqrt[5]{9^{12T}}$ ning qiymatini toping. '
  r'**A)** $9$ **B)** $27$ **C)** $81$ **D)** $243$',
  r'Пусть $T=\left(1+\dfrac1{5^2}\right)\left(1+\dfrac1{5^4}\right)'
  r'\left(1+\dfrac1{5^8}\right)\left(1+\dfrac1{5^{16}}\right)\cdot\ldots$ '
  r'Найдите значение $\sqrt[5]{9^{12T}}$. '
  r'**A)** $9$ **B)** $27$ **C)** $81$ **D)** $243$')

Q('2025/26-B', 10, 20,
  r'Jasur $5$ dan $11$ gacha boʻlgan oraliqdan haqiqiy sonni tasodifan '
  r'tanlaydi, Temur esa $3$ dan $10$ gacha boʻlgan oraliqdan haqiqiy sonni '
  r'tasodifan tanlaydi. Ularning tanlagan sonlari orasidagi farq koʻpi bilan '
  r'$2$ ga teng boʻlish ehtimolini toping. **A)** $\dfrac{29}{42}$ '
  r'**B)** $\dfrac{13}{28}$ **C)** $\dfrac{23}{42}$ **D)** $\dfrac{23}{28}$',
  r'Жасур случайно выбирает действительное число из промежутка от $5$ до $11$, '
  r'а Темур — из промежутка от $3$ до $10$. Найдите вероятность того, что '
  r'разность выбранных чисел не превосходит $2$. **A)** $\dfrac{29}{42}$ '
  r'**B)** $\dfrac{13}{28}$ **C)** $\dfrac{23}{42}$ **D)** $\dfrac{23}{28}$')

Q('2025/26-B', 10, 21,
  r'$f\colon \mathbb{N}^2\to\mathbb{N}$ funksiya uchun $f(2;1)=1$ boʻlib, '
  r'$$f(m+1;n)=f(m;n)+m,\qquad f(m;n+1)=f(m;n)-n$$ tengliklar oʻrinli. '
  r'$f(p;q)=2025$ tenglama nechta yechimga ega? Bu yerda $\mathbb{N}$ — natural '
  r'sonlar toʻplami. **A)** $15$ **B)** $20$ **C)** $30$ **D)** $45$',
  r'Для функции $f\colon \mathbb{N}^2\to\mathbb{N}$ выполняется $f(2;1)=1$ и '
  r'$$f(m+1;n)=f(m;n)+m,\qquad f(m;n+1)=f(m;n)-n.$$ Сколько решений имеет '
  r'уравнение $f(p;q)=2025$? Здесь $\mathbb{N}$ — множество натуральных чисел. '
  r'**A)** $15$ **B)** $20$ **C)** $30$ **D)** $45$')

Q('2025/26-B', 10, 22,
  r'Soha tengsizliklar bilan berilgan: $y\ge3x^2$, $y\le6-\dfrac32x$, $x\ge0$. '
  r'Bu sohada, bir tomoni $y$ oʻqida yotuvchi yuzi eng katta toʻgʻri '
  r'toʻrtburchak chizilgan. Toʻgʻri toʻrtburchakning yuzasini toping. '
  r'**A)** $\dfrac{22}{9}$ **B)** $\dfrac94$ **C)** $\dfrac{20}{9}$ '
  r'**D)** $\dfrac74$',
  r'Область задана неравенствами $y\ge3x^2$, $y\le6-\dfrac32x$, $x\ge0$. В этой '
  r'области построен прямоугольник наибольшей площади, одна сторона которого '
  r'лежит на оси $y$. Найдите площадь прямоугольника. '
  r'**A)** $\dfrac{22}{9}$ **B)** $\dfrac94$ **C)** $\dfrac{20}{9}$ '
  r'**D)** $\dfrac74$')

Q('2025/26-B', 10, 23,
  r'$\{a_k\}$ va $\{b_k\}$ ketma-ketliklar uchun $a_k=(k^2+1)k!$ va '
  r'$b_k=a_1+a_2+a_3+\cdots+a_k$ boʻlsin. $\dfrac{a_{2025}}{b_{2025}}='
  r'\dfrac{m}{n}$ boʻlib $m$ va $n$ oʻzaro tub natural sonlar boʻlsa, $n-m$ '
  r'ning qiymatini toping. **A)** $2025$ **B)** $2024$ **C)** $1012$ '
  r'**D)** $4050$',
  r'Для последовательностей $\{a_k\}$ и $\{b_k\}$ заданы $a_k=(k^2+1)k!$ и '
  r'$b_k=a_1+a_2+a_3+\cdots+a_k$. Пусть '
  r'$\dfrac{a_{2025}}{b_{2025}}=\dfrac{m}{n}$, где $m$ и $n$ — взаимно простые '
  r'натуральные числа. Найдите $n-m$. **A)** $2025$ **B)** $2024$ '
  r'**C)** $1012$ **D)** $4050$')

Q('2025/26-B', 10, 24,
  r'$f\colon\mathbb{R}\to\mathbb{R}$ va $g\colon\mathbb{R}\to\mathbb{R}$ '
  r'funksiyalar uchun $$\sin x+\cos y=f(x)+f(y)+g(x)-g(y)$$ tenglik barcha '
  r'$x$, $y\in\mathbb{R}$ lar uchun oʻrinli boʻlib, '
  r'$g\left(\dfrac{5\pi}{4}\right)=1$ boʻlsa, $g(\pi)$ ni hisoblang. '
  r'**A)** $1$ **B)** $\dfrac12$ **C)** $\dfrac32$ **D)** $\dfrac{\sqrt2}{2}$',
  r'Для функций $f\colon\mathbb{R}\to\mathbb{R}$ и '
  r'$g\colon\mathbb{R}\to\mathbb{R}$ равенство '
  r'$$\sin x+\cos y=f(x)+f(y)+g(x)-g(y)$$ выполняется для всех '
  r'$x$, $y\in\mathbb{R}$, причём $g\left(\dfrac{5\pi}{4}\right)=1$. Вычислите '
  r'$g(\pi)$. **A)** $1$ **B)** $\dfrac12$ **C)** $\dfrac32$ '
  r'**D)** $\dfrac{\sqrt2}{2}$')

Q('2025/26-B', 10, 28,
  r'Faqat $1$ dan $9$ gacha boʻlgan raqamlardan foydalangan holda ($0$ raqami '
  r'ishtirok etmaydi), $11$ ga karrali nechta uch xonali son tuzish mumkin? '
  r'*(Raqamlar takrorlanishi mumkin.)* '
  r'**A)** $81$ **B)** $70$ **C)** $66$ **D)** $64$',
  r'Сколько трёхзначных чисел, кратных $11$, можно составить, используя только '
  r'цифры от $1$ до $9$ (цифра $0$ не участвует)? *(Цифры могут '
  r'повторяться.)* **A)** $81$ **B)** $70$ **C)** $66$ **D)** $64$')

Q('2025/26-B', 10, 29,
  r'$ABCD$ kvadratda $B$ ni markaz qilib radiusi $4$ ga teng aylana va $AD$ ni '
  r'diametr qilib diametri $4$ ga teng aylana chizilgan. Boʻyalgan shakl '
  r'yuzasini toping. **A)** $8\pi-8-16\operatorname{arctg}2$ '
  r'**B)** $8\pi-4-16\operatorname{arctg}2$ '
  r'**C)** $8\pi-8-12\operatorname{arctg}2$ '
  r'**D)** $16\pi-8-12\operatorname{arctg}2$',
  r'В квадрате $ABCD$ построены окружность с центром $B$ радиуса $4$ и '
  r'окружность диаметра $4$, построенная на $AD$ как на диаметре. Найдите '
  r'площадь закрашенной фигуры. **A)** $8\pi-8-16\operatorname{arctg}2$ '
  r'**B)** $8\pi-4-16\operatorname{arctg}2$ '
  r'**C)** $8\pi-8-12\operatorname{arctg}2$ '
  r'**D)** $16\pi-8-12\operatorname{arctg}2$')

Q('2025/26-B', 10, 30,
  r'Jamolda $2$ ta tanga, Hamidda $3$ ta tanga bor. Ular $3$ marta, har safar '
  r'bittadan, tasodifiy tanga tanlab almashishdi. Har bir almashishda Jamol '
  r'ham, Hamid ham qoʻlidagi tangalardan birini teng ehtimollik bilan tanlaydi '
  r'va ularni almashtiradi. $3$ ta almashishdan keyin Jamol ham, Hamid ham '
  r'oʻzlarining boshlangʻich tangalarini qayta qoʻlida saqlab qolish ehtimoli '
  r'qancha? **A)** $\dfrac1{12}$ **B)** $\dfrac1{24}$ **C)** $\dfrac1{48}$ '
  r'**D)** $\dfrac5{48}$',
  r'У Жамола $2$ монеты, у Хамида — $3$. Они трижды обменивались, каждый раз по '
  r'одной случайно выбранной монете: при каждом обмене и Жамол, и Хамид '
  r'равновероятно выбирают одну из своих монет и меняются ими. Какова '
  r'вероятность того, что после трёх обменов у каждого снова окажутся его '
  r'исходные монеты? **A)** $\dfrac1{12}$ **B)** $\dfrac1{24}$ '
  r'**C)** $\dfrac1{48}$ **D)** $\dfrac5{48}$')


# Variantda chizma bilan berilgan savollar. Fayllar asl varaqadan kesib
# olingan, saytda savol matni ostida koʻrsatiladi (sayt/assets/rasm/).
rasm = {
 ('2025/26-A', 9, 21): '9A-21.png',
 ('2025/26-A', 9, 29): '9A-29.png',
 ('2025/26-B', 9, 4):  '9B-4.png',
 ('2025/26-B', 9, 20): '9B-20.png',
 ('2025/26-B', 9, 25): '9B-25.png',
 ('2025/26-A', 10, 27): '10A-27.png',
 ('2025/26-B', 10, 5):  '10B-5.png',
 ('2025/26-B', 10, 13): '10B-13.png',
 ('2025/26-B', 10, 27): '10B-27.png',
 ('2025/26-B', 10, 29): '10B-29.png',
 ('2025/26-A', 11, 14): '11A-14.png',
 ('2025/26-A', 11, 27): '11A-27.png',
}
