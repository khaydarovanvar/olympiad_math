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
