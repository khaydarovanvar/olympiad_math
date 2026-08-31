# -*- coding: utf-8 -*-
"""Topic 4 — Diophantine equations."""

LESSON = {
 'n': 4,
 'cat': 'nt',
 'title': {'ru': 'Диофантовы уравнения', 'en': 'Diophantine equations'},
 'sub': {'ru': 'Уравнения, у которых ответ обязан быть целым: линейный случай, разложение на множители, оценки, остатки и бесконечный спуск.',
         'en': 'Equations whose answers must be whole numbers: the linear case, factoring, bounding, remainders and infinite descent.'},
 'goals': {
  'ru': [
   r'Решать линейное уравнение $ax+by=c$ в целых числах и выписывать все решения.',
   r'Сводить уравнение к виду «произведение равно числу» и перебирать делители.',
   r'Ограничивать переменные оценками, чтобы случаев осталось конечное число.',
   r'Доказывать отсутствие решений остатками и методом бесконечного спуска.',
  ],
  'en': [
   r'Solve the linear equation $ax+by=c$ in integers and write down every solution.',
   r'Turn an equation into "a product equals a number" and run through the divisors.',
   r'Bound the variables so that only finitely many cases are left.',
   r'Prove that no solutions exist, using remainders and infinite descent.',
  ]},

 'sections': [

  # ------------------------------------------------------------------ 1
  {'h': {'ru': 'Что это за уравнения', 'en': 'What these equations are'},
   'blocks': [
    {'t': 'p',
     'text': {
      'ru': r'Уравнение $2x+3y=12$ на уроке алгебры имеет бесконечно много решений: возьмите любое $x$ и выразите $y$. Но если потребовать, чтобы $x$ и $y$ были **целыми**, задача становится совсем другой — и гораздо интереснее. Именно такие задачи и составляют половину олимпиадной теории чисел.',
      'en': r'In an algebra lesson the equation $2x+3y=12$ has infinitely many solutions: pick any $x$ and solve for $y$. But if $x$ and $y$ are required to be **integers**, the problem becomes a completely different one — and far more interesting. Problems of exactly this kind make up half of olympiad number theory.'}},

    {'t': 'def',
     'name': {'ru': 'Диофантово уравнение', 'en': 'Diophantine equation'},
     'text': {
      'ru': r'**Диофантовым** называют уравнение (или систему) с целыми коэффициентами, решения которого ищут **среди целых чисел** — иногда среди натуральных. Само уравнение может быть каким угодно; диофантовым его делает требование к ответу.',
      'en': r'A **Diophantine** equation (or system) is one with integer coefficients whose solutions are sought **among the integers** — sometimes among the positive integers. The equation itself can be anything; what makes it Diophantine is the demand placed on the answer.'}},

    {'t': 'note',
     'text': {
      'ru': r'Название — в честь Диофанта Александрийского, математика III века. Его «Арифметика» — первая книга, где такие задачи решают систематически. На полях именно этой книги Ферма и записал свою знаменитую заметку про $x^n+y^n=z^n$.',
      'en': r'The name honours Diophantus of Alexandria, a third-century mathematician. His *Arithmetica* is the first book to treat such problems systematically. It was in the margin of that very book that Fermat wrote his famous note about $x^n+y^n=z^n$.'}},

    {'t': 'p',
     'text': {
      'ru': r'В олимпиадной задаче спрашивают одну из трёх вещей: **есть ли решения**, **сколько их**, или **найдите все**. Третий вопрос самый честный: ответ засчитывают, только если вы и предъявили решения, и доказали, что других нет.',
      'en': r'An olympiad problem asks one of three things: **are there solutions**, **how many are there**, or **find them all**. The third is the most demanding: you get the marks only if you both exhibit the solutions and prove there are no others.'}},

    {'t': 'idea',
     'text': {
      'ru': r'Весь арсенал сводится к пяти приёмам, и почти каждая задача берётся одним из них:\n\n**1)** линейное уравнение — теория НОД;\n**2)** разложить на множители и перебрать делители;\n**3)** оценить переменные сверху и снизу;\n**4)** взять остаток по удачному модулю и получить противоречие;\n**5)** бесконечный спуск.\n\nПорядок в списке — это и порядок, в котором стоит их пробовать.',
      'en': r'The whole arsenal comes down to five moves, and almost every problem falls to one of them:\n\n**1)** a linear equation — use GCD theory;\n**2)** factor it and run through the divisors;\n**3)** bound the variables above and below;\n**4)** take remainders modulo a well-chosen number and reach a contradiction;\n**5)** infinite descent.\n\nThe order of the list is also the order in which to try them.'}},
   ]},

  # ------------------------------------------------------------------ 2
  {'h': {'ru': 'Линейное уравнение $ax+by=c$', 'en': 'The linear equation $ax+by=c$'},
   'blocks': [
    {'t': 'p',
     'text': {
      'ru': r'Это единственный класс, который решён полностью: есть критерий разрешимости и формула для всех решений. Всё держится на одном факте из темы о НОД: числа вида $ax+by$ — это в точности числа, кратные $\gcd(a,b)$.',
      'en': r'This is the one class that is completely solved: there is a criterion for solvability and a formula for every solution. It all rests on one fact from the GCD topic: the numbers of the form $ax+by$ are exactly the multiples of $\gcd(a,b)$.'}},

    {'t': 'thm',
     'name': {'ru': 'Критерий разрешимости', 'en': 'Criterion for solvability'},
     'text': {
      'ru': r'Пусть $a,b$ не равны нулю одновременно и $d=\gcd(a,b)$. Уравнение $ax+by=c$ имеет решение в целых числах **тогда и только тогда, когда** $d\mid c$.',
      'en': r'Let $a,b$ be not both zero and put $d=\gcd(a,b)$. The equation $ax+by=c$ has an integer solution **if and only if** $d\mid c$.'}},

    {'t': 'proof',
     'text': {
      'ru': r'**Необходимость.** Если $ax+by=c$, то $d$ делит $a$ и $b$, значит делит и $ax+by=c$.\n\n**Достаточность.** По соотношению Безу найдутся целые $u,v$ с $au+bv=d$. Пусть $c=dk$. Умножим на $k$: $$a(uk)+b(vk)=dk=c,$$ то есть пара $x=uk$, $y=vk$ — решение. $\blacksquare$',
      'en': r'**Necessity.** If $ax+by=c$ then $d$ divides both $a$ and $b$, hence divides $ax+by=c$.\n\n**Sufficiency.** By Bezout there are integers $u,v$ with $au+bv=d$. Write $c=dk$ and multiply by $k$: $$a(uk)+b(vk)=dk=c,$$ so $x=uk$, $y=vk$ is a solution. $\blacksquare$'}},

    {'t': 'thm',
     'name': {'ru': 'Все решения сразу', 'en': 'Every solution at once'},
     'text': {
      'ru': r'Пусть $d=\gcd(a,b)$ делит $c$ и пусть $(x_0,y_0)$ — какое-нибудь одно решение. Тогда все целые решения даются формулой $$x=x_0+\frac{b}{d}\,t,\qquad y=y_0-\frac{a}{d}\,t,\qquad t\in\mathbb{Z},$$ и разным $t$ отвечают разные решения.',
      'en': r'Let $d=\gcd(a,b)$ divide $c$ and let $(x_0,y_0)$ be any one solution. Then every integer solution is given by $$x=x_0+\frac{b}{d}\,t,\qquad y=y_0-\frac{a}{d}\,t,\qquad t\in\mathbb{Z},$$ and different values of $t$ give different solutions.'}},

    {'t': 'proof',
     'text': {
      'ru': r'Подстановка показывает, что каждая такая пара подходит: $$a\Big(x_0+\frac{b}{d}t\Big)+b\Big(y_0-\frac{a}{d}t\Big)=ax_0+by_0+\frac{abt}{d}-\frac{abt}{d}=c.$$ Обратно, пусть $(x,y)$ — решение. Вычтем равенства $ax+by=c$ и $ax_0+by_0=c$: $$a(x-x_0)=-b(y-y_0).$$ Поделим на $d$ и обозначим $a_1=a/d$, $b_1=b/d$; тогда $\gcd(a_1,b_1)=1$ и $a_1(x-x_0)=-b_1(y-y_0)$. Значит $b_1$ делит $a_1(x-x_0)$, а так как $b_1$ взаимно просто с $a_1$, то $b_1\mid x-x_0$. Запишем $x-x_0=b_1t$; подставив, получаем $y-y_0=-a_1t$. Это и есть формула. $\blacksquare$',
      'en': r'Substitution shows each such pair works: $$a\Big(x_0+\frac{b}{d}t\Big)+b\Big(y_0-\frac{a}{d}t\Big)=ax_0+by_0+\frac{abt}{d}-\frac{abt}{d}=c.$$ Conversely, let $(x,y)$ be a solution. Subtract $ax_0+by_0=c$ from $ax+by=c$: $$a(x-x_0)=-b(y-y_0).$$ Divide by $d$ and write $a_1=a/d$, $b_1=b/d$; then $\gcd(a_1,b_1)=1$ and $a_1(x-x_0)=-b_1(y-y_0)$. So $b_1$ divides $a_1(x-x_0)$, and since $b_1$ is coprime to $a_1$ we get $b_1\mid x-x_0$. Write $x-x_0=b_1t$; substituting gives $y-y_0=-a_1t$, which is the formula. $\blacksquare$'}},

    {'t': 'idea',
     'text': {
      'ru': r'На олимпиаде алгоритм Евклида обычно не нужен: одно решение проще угадать, взяв остатки. Из $ax+by=c$ следует $ax\equiv c\pmod{b}$ — а это уже одно уравнение с одной неизвестной по маленькому модулю.',
      'en': r'In a competition you rarely need the Euclidean algorithm: it is quicker to spot one solution using remainders. From $ax+by=c$ we get $ax\equiv c\pmod{b}$ — one equation in one unknown, modulo something small.'}},

    {'t': 'ex',
     'q': {'ru': r'Найдите все целые решения уравнения $7x+11y=100$, а затем все решения в неотрицательных целых числах.',
           'en': r'Find all integer solutions of $7x+11y=100$, and then all solutions in non-negative integers.'},
     'steps': {
      'ru': [r'$\gcd(7,11)=1$ и $1\mid100$, значит решения есть.',
             r'Ищем одно решение по модулю $7$: $11y\equiv100\pmod 7$, то есть $4y\equiv2\pmod7$. Умножим на $2$: $8y\equiv4$, а $8\equiv1$, значит $y\equiv4\pmod7$.',
             r'Берём $y_0=4$: тогда $7x=100-44=56$, откуда $x_0=8$. Проверка: $56+44=100$ ✓',
             r'По теореме все решения: $x=8+11t$, $y=4-7t$, где $t\in\mathbb{Z}$.',
             r'Требуем $x\ge0$ и $y\ge0$: из $8+11t\ge0$ получаем $t\ge-\tfrac{8}{11}$, то есть $t\ge0$; из $4-7t\ge0$ получаем $t\le\tfrac47$, то есть $t\le0$.',
             r'Остаётся единственное $t=0$.'],
      'en': [r'$\gcd(7,11)=1$ and $1\mid100$, so solutions exist.',
             r'Find one solution modulo $7$: $11y\equiv100\pmod 7$, that is $4y\equiv2\pmod7$. Multiply by $2$: $8y\equiv4$, and $8\equiv1$, so $y\equiv4\pmod7$.',
             r'Take $y_0=4$: then $7x=100-44=56$, so $x_0=8$. Check: $56+44=100$ ✓',
             r'By the theorem every solution is $x=8+11t$, $y=4-7t$ with $t\in\mathbb{Z}$.',
             r'Ask for $x\ge0$ and $y\ge0$: from $8+11t\ge0$ we get $t\ge-\tfrac{8}{11}$, i.e. $t\ge0$; from $4-7t\ge0$ we get $t\le\tfrac47$, i.e. $t\le0$.',
             r'Only $t=0$ survives.']},
     'ans': {'ru': r'Все целые решения: $(8+11t,\;4-7t)$, $t\in\mathbb{Z}$. В неотрицательных числах решение единственно: $(8,4)$.',
             'en': r'All integer solutions: $(8+11t,\;4-7t)$, $t\in\mathbb{Z}$. In non-negative integers the solution is unique: $(8,4)$.'}},

    {'t': 'note',
     'text': {
      'ru': r'Обратите внимание на структуру ответа: целых решений бесконечно много, они идут с шагом $11$ по $x$ и $-7$ по $y$; а условие неотрицательности вырезает из этой прогрессии короткий отрезок. Почти все «денежные» задачи («сколько монет по 7 и по 11 сум») устроены именно так.',
      'en': r'Look at the shape of the answer: there are infinitely many integer solutions, spaced $11$ apart in $x$ and $-7$ in $y$; the non-negativity condition then cuts a short stretch out of that progression. Almost every "coins and change" problem works exactly like this.'}},
   ]},

  # ------------------------------------------------------------------ 3
  {'h': {'ru': 'Разложение на множители', 'en': 'Factoring'},
   'blocks': [
    {'t': 'idea',
     'text': {
      'ru': r'Главный приём всей темы. Если уравнение удалось привести к виду $$(\text{целое})\cdot(\text{целое})=N,$$ то дальше работает арифметика: множители — делители числа $N$, а делителей у $N$ конечное число. Задача превращается в перебор.',
      'en': r'The central move of the whole topic. If the equation can be brought to the form $$(\text{integer})\cdot(\text{integer})=N,$$ arithmetic takes over: the factors are divisors of $N$, and $N$ has only finitely many divisors. The problem becomes a finite check.'}},

    {'t': 'p',
     'text': {
      'ru': r'Когда в уравнении есть слагаемое $xy$ и линейные слагаемые, помогает **добавление константы**. Тождество, которое стоит выучить наизусть:',
      'en': r'When the equation has an $xy$ term together with linear terms, **adding a constant** does the job. The identity worth memorising is:'}},

    {'t': 'eq', 'tex': r'xy+ax+by=(x+b)(y+a)-ab'},

    {'t': 'p',
     'text': {
      'ru': r'Проверьте раскрытием скобок: $(x+b)(y+a)=xy+ax+by+ab$. Значит, чтобы разложить левую часть, достаточно прибавить к обеим частям уравнения число $ab$.',
      'en': r'Check by expanding: $(x+b)(y+a)=xy+ax+by+ab$. So to factor the left side it is enough to add $ab$ to both sides of the equation.'}},

    {'t': 'ex',
     'q': {'ru': r'Найдите все пары целых чисел с $xy+2x-3y=17$.',
           'en': r'Find every pair of integers with $xy+2x-3y=17$.'},
     'steps': {
      'ru': [r'Здесь $a=2$, $b=-3$, поэтому $ab=-6$ и $xy+2x-3y=(x-3)(y+2)+6$.',
             r'Уравнение превращается в $(x-3)(y+2)=11$.',
             r'Число $11$ простое, поэтому пара множителей — одна из четырёх: $(1,11),(11,1),(-1,-11),(-11,-1)$.',
             r'$x-3=1,\;y+2=11\Rightarrow(4,9)$; $x-3=11,\;y+2=1\Rightarrow(14,-1)$;',
             r'$x-3=-1,\;y+2=-11\Rightarrow(2,-13)$; $x-3=-11,\;y+2=-1\Rightarrow(-8,-3)$.',
             r'Проверим одну пару: $x=14,y=-1$ даёт $-14+28+3=17$ ✓'],
      'en': [r'Here $a=2$, $b=-3$, so $ab=-6$ and $xy+2x-3y=(x-3)(y+2)+6$.',
             r'The equation becomes $(x-3)(y+2)=11$.',
             r'Since $11$ is prime the pair of factors is one of four: $(1,11),(11,1),(-1,-11),(-11,-1)$.',
             r'$x-3=1,\;y+2=11\Rightarrow(4,9)$; $x-3=11,\;y+2=1\Rightarrow(14,-1)$;',
             r'$x-3=-1,\;y+2=-11\Rightarrow(2,-13)$; $x-3=-11,\;y+2=-1\Rightarrow(-8,-3)$.',
             r'Check one pair: $x=14,y=-1$ gives $-14+28+3=17$ ✓']},
     'ans': {'ru': r'$(4,9),\;(14,-1),\;(2,-13),\;(-8,-3)$.',
             'en': r'$(4,9),\;(14,-1),\;(2,-13),\;(-8,-3)$.'}},

    {'t': 'warn',
     'text': {
      'ru': r'Самая частая потеря баллов в этой теме: перебрали только **положительные** делители, хотя в условии сказано «в целых числах». У числа $11$ четыре делителя, а не два: $\pm1,\pm11$. Если же в условии стоит «в натуральных», отрицательные случаи, наоборот, надо отбросить — но написать, почему.',
      'en': r'The commonest way to lose marks here: running through only the **positive** divisors when the problem says "in integers". The number $11$ has four divisors, not two: $\pm1,\pm11$. If the problem says "in positive integers" then the negative cases must be discarded instead — but say why.'}},

    {'t': 'p',
     'text': {
      'ru': r'Тот же приём решает все уравнения с дробями вида $\dfrac1x+\dfrac1y=\dfrac1n$. Приведём к общему знаменателю: $n(x+y)=xy$, то есть $xy-nx-ny=0$. Прибавим $n^2$:',
      'en': r'The same move settles every fraction equation of the form $\dfrac1x+\dfrac1y=\dfrac1n$. Clear denominators: $n(x+y)=xy$, that is $xy-nx-ny=0$. Add $n^2$:'}},

    {'t': 'eq', 'tex': r'(x-n)(y-n)=n^{2}'},

    {'t': 'ex',
     'q': {'ru': r'Сколько пар натуральных чисел $(x,y)$ удовлетворяют равенству $\dfrac1x+\dfrac1y=\dfrac1{12}$?',
           'en': r'How many pairs of positive integers $(x,y)$ satisfy $\dfrac1x+\dfrac1y=\dfrac1{12}$?'},
     'steps': {
      'ru': [r'По формуле выше $(x-12)(y-12)=144$.',
             r'Если $x\le12$, то $\tfrac1x\ge\tfrac1{12}$ и на $\tfrac1y>0$ уже не остаётся места. Значит $x>12$ и $y>12$, то есть оба множителя положительны.',
             r'Каждому положительному делителю $d$ числа $144$ отвечает ровно одна пара: $x=12+d$, $y=12+\tfrac{144}{d}$.',
             r'$144=2^4\cdot3^2$, поэтому число делителей равно $(4+1)(2+1)=15$.',
             r'Например, $d=1$ даёт $(13,156)$, а $d=12$ — «квадратную» пару $(24,24)$.'],
      'en': [r'By the formula above, $(x-12)(y-12)=144$.',
             r'If $x\le12$ then $\tfrac1x\ge\tfrac1{12}$ and there is no room left for $\tfrac1y>0$. So $x>12$ and $y>12$, meaning both factors are positive.',
             r'Each positive divisor $d$ of $144$ gives exactly one pair: $x=12+d$, $y=12+\tfrac{144}{d}$.',
             r'$144=2^4\cdot3^2$, so the number of divisors is $(4+1)(2+1)=15$.',
             r'For instance $d=1$ gives $(13,156)$, and $d=12$ gives the "square" pair $(24,24)$.']},
     'ans': {'ru': r'$15$ пар (если пары $(x,y)$ и $(y,x)$ считать разными).',
             'en': r'$15$ pairs (counting $(x,y)$ and $(y,x)$ as different).'}},
   ]},

  # ------------------------------------------------------------------ 4
  {'h': {'ru': 'Оценки: как загнать переменные в клетку', 'en': 'Bounding: caging the variables'},
   'blocks': [
    {'t': 'idea',
     'text': {
      'ru': r'Если переменные симметричны, введите порядок — например $x\le y\le z$ — и оцените **самую маленькую** из них. Тогда для неё останется несколько значений, каждое из которых разбирается отдельно. Это самый надёжный способ превратить бесконечный поиск в конечный.',
      'en': r'If the variables are symmetric, impose an order — say $x\le y\le z$ — and bound the **smallest** one. Only a few values are then left for it, and each is handled separately. This is the most reliable way to turn an infinite search into a finite one.'}},

    {'t': 'ex',
     'q': {'ru': r'Найдите все тройки натуральных чисел с $\dfrac1x+\dfrac1y+\dfrac1z=1$.',
           'en': r'Find every triple of positive integers with $\dfrac1x+\dfrac1y+\dfrac1z=1$.'},
     'steps': {
      'ru': [r'Уравнение симметрично, поэтому считаем $x\le y\le z$ и в конце допишем перестановки.',
             r'Тогда $\tfrac1x$ — самая большая из трёх дробей, значит $1=\tfrac1x+\tfrac1y+\tfrac1z\le\tfrac3x$, откуда $x\le3$.',
             r'С другой стороны $\tfrac1x<1$, то есть $x\ge2$. Остаются $x=2$ и $x=3$.',
             r'**$x=3$:** тогда $\tfrac1y+\tfrac1z=\tfrac23$ и $\tfrac23\le\tfrac2y$, то есть $y\le3$; но $y\ge x=3$, значит $y=3$ и $z=3$. Тройка $(3,3,3)$.',
             r'**$x=2$:** тогда $\tfrac1y+\tfrac1z=\tfrac12$, и по формуле разложения $(y-2)(z-2)=4$.',
             r'Положительные пары делителей $4$ с $y\le z$: $(1,4)$ и $(2,2)$, что даёт $(y,z)=(3,6)$ и $(4,4)$.',
             r'Итого три тройки с точностью до порядка.'],
      'en': [r'The equation is symmetric, so assume $x\le y\le z$ and add the permutations at the end.',
             r'Then $\tfrac1x$ is the largest of the three fractions, so $1=\tfrac1x+\tfrac1y+\tfrac1z\le\tfrac3x$, giving $x\le3$.',
             r'On the other hand $\tfrac1x<1$, so $x\ge2$. Only $x=2$ and $x=3$ remain.',
             r'**$x=3$:** then $\tfrac1y+\tfrac1z=\tfrac23$ and $\tfrac23\le\tfrac2y$, so $y\le3$; but $y\ge x=3$, hence $y=3$ and $z=3$. The triple $(3,3,3)$.',
             r'**$x=2$:** then $\tfrac1y+\tfrac1z=\tfrac12$, and by the factoring formula $(y-2)(z-2)=4$.',
             r'The positive divisor pairs of $4$ with $y\le z$ are $(1,4)$ and $(2,2)$, giving $(y,z)=(3,6)$ and $(4,4)$.',
             r'So there are three triples up to order.']},
     'ans': {'ru': r'$(3,3,3)$, $(2,4,4)$, $(2,3,6)$ и их перестановки.',
             'en': r'$(3,3,3)$, $(2,4,4)$, $(2,3,6)$ and their permutations.'}},

    {'t': 'idea',
     'name': {'ru': 'Зажать между соседними квадратами', 'en': 'Squeeze between neighbouring squares'},
     'text': {
      'ru': r'Второй вид оценки. Если требуется, чтобы выражение $f(n)$ было точным квадратом, попробуйте показать, что при больших $n$ оно строго лежит **между двумя соседними квадратами**: $$k^2<f(n)<(k+1)^2 .$$ Между ними квадратов нет, значит больших $n$ не бывает — и остаётся проверить несколько маленьких.',
      'en': r'The second kind of bound. If some expression $f(n)$ is required to be a perfect square, try to show that for large $n$ it lies strictly **between two neighbouring squares**: $$k^2<f(n)<(k+1)^2 .$$ There is no square in between, so large $n$ are impossible — and only a few small ones are left to check.'}},

    {'t': 'ex',
     'q': {'ru': r'При каких натуральных $n$ число $n^{2}+2n+4$ является точным квадратом?',
           'en': r'For which positive integers $n$ is $n^{2}+2n+4$ a perfect square?'},
     'steps': {
      'ru': [r'Ближайший квадрат снизу — $(n+1)^2=n^2+2n+1$. Разность равна $3>0$, значит $n^2+2n+4>(n+1)^2$.',
             r'Ближайший сверху — $(n+2)^2=n^2+4n+4$. Разность равна $2n>0$ при $n\ge1$, значит $n^2+2n+4<(n+2)^2$.',
             r'Итак, $(n+1)^2<n^2+2n+4<(n+2)^2$ при всех $n\ge1$.',
             r'Между соседними квадратами $(n+1)^2$ и $(n+2)^2$ точных квадратов нет.'],
      'en': [r'The nearest square below is $(n+1)^2=n^2+2n+1$. The difference is $3>0$, so $n^2+2n+4>(n+1)^2$.',
             r'The nearest above is $(n+2)^2=n^2+4n+4$. The difference is $2n>0$ for $n\ge1$, so $n^2+2n+4<(n+2)^2$.',
             r'Hence $(n+1)^2<n^2+2n+4<(n+2)^2$ for every $n\ge1$.',
             r'There is no perfect square strictly between the neighbouring squares $(n+1)^2$ and $(n+2)^2$.']},
     'ans': {'ru': r'Ни при каких натуральных $n$. (При $n=0$ получается $4=2^2$.)',
             'en': r'For no positive integer $n$. (At $n=0$ it equals $4=2^2$.)'}},
   ]},

  # ------------------------------------------------------------------ 5
  {'h': {'ru': 'Остатки как сито', 'en': 'Remainders as a sieve'},
   'blocks': [
    {'t': 'p',
     'text': {
      'ru': r'Чтобы доказать, что решений **нет**, чаще всего берут остатки. Идея простая: если равенство верно в целых числах, оно верно и по любому модулю. Достаточно найти модуль, по которому левая и правая части никогда не совпадают.',
      'en': r'To prove that there are **no** solutions, remainders are the usual tool. The idea is simple: if an equality holds in the integers it holds modulo anything. It is enough to find a modulus for which the two sides never agree.'}},

    {'t': 'p',
     'text': {
      'ru': r'Работает это потому, что степени принимают очень мало остатков. Вот таблица, которую стоит держать в голове:',
      'en': r'It works because powers take very few remainders. Here is the table worth carrying in your head:'}},

    {'t': 'table',
     'head': {'ru': ['Выражение', 'Модуль', 'Какие остатки возможны'],
              'en': ['Expression', 'Modulus', 'Possible remainders']},
     'rows': {
      'ru': [
       [r'$n^2$', r'$3$', r'$0,1$'],
       [r'$n^2$', r'$4$', r'$0,1$'],
       [r'$n^2$', r'$5$', r'$0,1,4$'],
       [r'$n^2$', r'$8$', r'$0,1,4$'],
       [r'$n^2$', r'$16$', r'$0,1,4,9$'],
       [r'$n^3$', r'$7$', r'$0,1,6$'],
       [r'$n^3$', r'$9$', r'$0,1,8$'],
       [r'$n^4$', r'$16$', r'$0,1$'],
      ],
      'en': [
       [r'$n^2$', r'$3$', r'$0,1$'],
       [r'$n^2$', r'$4$', r'$0,1$'],
       [r'$n^2$', r'$5$', r'$0,1,4$'],
       [r'$n^2$', r'$8$', r'$0,1,4$'],
       [r'$n^2$', r'$16$', r'$0,1,4,9$'],
       [r'$n^3$', r'$7$', r'$0,1,6$'],
       [r'$n^3$', r'$9$', r'$0,1,8$'],
       [r'$n^4$', r'$16$', r'$0,1$'],
      ]}},

    {'t': 'note',
     'text': {
      'ru': r'Каждую строку проверяют за минуту: достаточно возвести в нужную степень числа $0,1,\dots,m-1$. Например, для $n^2$ по модулю $8$: $0,1,4,9\equiv1,16\equiv0,25\equiv1,36\equiv4,49\equiv1$ — всего три значения $0,1,4$.',
      'en': r'Each row takes a minute to verify: just raise $0,1,\dots,m-1$ to the required power. For $n^2$ modulo $8$: $0,1,4,9\equiv1,16\equiv0,25\equiv1,36\equiv4,49\equiv1$ — only the three values $0,1,4$.'}},

    {'t': 'ex',
     'q': {'ru': r'Докажите, что уравнение $x^{2}-3y^{2}=5$ не имеет решений в целых числах.',
           'en': r'Prove that $x^{2}-3y^{2}=5$ has no integer solutions.'},
     'steps': {
      'ru': [r'Возьмём модуль $3$: слагаемое $3y^2$ исчезает, и остаётся $x^2\equiv5\pmod3$.',
             r'$5=3+2$, значит требуется $x^2\equiv2\pmod3$.',
             r'Но квадрат по модулю $3$ даёт только $0$ или $1$ (таблица выше).',
             r'Остатка $2$ квадрат дать не может — противоречие.'],
      'en': [r'Take modulus $3$: the term $3y^2$ disappears and we are left with $x^2\equiv5\pmod3$.',
             r'$5=3+2$, so we need $x^2\equiv2\pmod3$.',
             r'But a square modulo $3$ is only $0$ or $1$ (see the table).',
             r'A square can never leave remainder $2$ — contradiction.']},
     'ans': {'ru': r'Решений нет. $\blacksquare$', 'en': r'There are no solutions. $\blacksquare$'}},

    {'t': 'ex',
     'q': {'ru': r'Докажите, что $2023$ нельзя представить в виде суммы двух точных квадратов.',
           'en': r'Prove that $2023$ is not a sum of two perfect squares.'},
     'steps': {
      'ru': [r'Пусть $x^2+y^2=2023$. Возьмём модуль $4$.',
             r'Каждый квадрат по модулю $4$ равен $0$ или $1$, поэтому сумма двух квадратов даёт $0$, $1$ или $2$.',
             r'Остаток $3$ по модулю $4$ недостижим.',
             r'А $2023=4\cdot505+3$, то есть $2023\equiv3\pmod4$.'],
      'en': [r'Suppose $x^2+y^2=2023$ and take modulus $4$.',
             r'Every square is $0$ or $1$ modulo $4$, so a sum of two squares is $0$, $1$ or $2$.',
             r'The remainder $3$ modulo $4$ is out of reach.',
             r'But $2023=4\cdot505+3$, that is $2023\equiv3\pmod4$.']},
     'ans': {'ru': r'Представления нет. $\blacksquare$', 'en': r'No such representation exists. $\blacksquare$'}},

    {'t': 'warn',
     'text': {
      'ru': r'Остатки умеют доказывать только **отсутствие** решений. Если по всем модулям противоречия нет, это ещё ничего не значит: уравнение $x^2-2y^2=7$ проходит любую проверку по модулю, но и решения у него есть ($x=3,y=1$). Не пишите «противоречия не нашлось, значит решения есть» — это не доказательство.',
      'en': r'Remainders can only prove that solutions are **absent**. If no modulus gives a contradiction, that alone proves nothing: the equation $x^2-2y^2=7$ survives every modular test — and it does have solutions ($x=3,y=1$). Never write "no contradiction was found, so a solution exists" — that is not a proof.'}},
   ]},

  # ------------------------------------------------------------------ 6
  {'h': {'ru': 'Бесконечный спуск', 'en': 'Infinite descent'},
   'blocks': [
    {'t': 'idea',
     'text': {
      'ru': r'Приём Ферма и самый красивый в теме. Предположим, что решение есть. Из него строим **новое решение, меньшее прежнего**. Повторяя, получаем бесконечную убывающую последовательность натуральных чисел — а такой не бывает. Значит исходное предположение ложно.',
      'en': r'Fermat’s move, and the most beautiful in the topic. Suppose a solution exists. From it, construct a **new solution smaller than the old one**. Repeating gives an infinite strictly decreasing sequence of positive integers — and no such sequence exists. So the original assumption was false.'}},

    {'t': 'p',
     'text': {
      'ru': r'На практике удобнее так: возьмём решение с **наименьшим** возможным значением какой-нибудь положительной величины (скажем, $z$) и получим из него меньшее. Противоречие с минимальностью — и доказательство закончено.',
      'en': r'In practice it is neater to say: take a solution with the **smallest** possible value of some positive quantity (say $z$) and produce a smaller one from it. That contradicts minimality and the proof is done.'}},

    {'t': 'thm',
     'name': {'ru': 'Пример спуска', 'en': 'A model descent'},
     'text': {
      'ru': r'Уравнение $x^{2}+y^{2}=3z^{2}$ имеет в целых числах единственное решение $x=y=z=0$.',
      'en': r'The equation $x^{2}+y^{2}=3z^{2}$ has exactly one solution in integers: $x=y=z=0$.'}},

    {'t': 'proof',
     'text': {
      'ru': r'Предположим, что решение с $z\ne0$ существует, и среди всех таких выберем решение с **наименьшим** $|z|$.\n\n**Шаг 1.** По модулю $3$ имеем $x^2+y^2\equiv0$. Квадрат по модулю $3$ равен $0$ или $1$, поэтому сумма двух квадратов равна $0,1$ или $2$. Ноль получается **только** когда оба слагаемых нулевые, то есть $x\equiv y\equiv0\pmod3$.\n\n**Шаг 2.** Запишем $x=3a$, $y=3b$. Тогда $$9a^{2}+9b^{2}=3z^{2}\quad\Longrightarrow\quad 3(a^{2}+b^{2})=z^{2}.$$\n\n**Шаг 3.** Значит $3\mid z^{2}$, а так как $3$ простое, то $3\mid z$. Пишем $z=3c$: $$3(a^{2}+b^{2})=9c^{2}\quad\Longrightarrow\quad a^{2}+b^{2}=3c^{2}.$$\n\n**Шаг 4.** Мы получили новое решение $(a,b,c)$ того же уравнения, причём $|c|=|z|/3<|z|$ и $c\ne0$ (иначе и $z=0$). Это противоречит минимальности $|z|$.\n\nЗначит решений с $z\ne0$ нет; а при $z=0$ из $x^2+y^2=0$ следует $x=y=0$. $\blacksquare$',
      'en': r'Suppose a solution with $z\ne0$ exists, and among all of them choose one with the **smallest** $|z|$.\n\n**Step 1.** Modulo $3$ we have $x^2+y^2\equiv0$. A square is $0$ or $1$ modulo $3$, so a sum of two squares is $0,1$ or $2$. It is zero **only** when both terms are zero, that is $x\equiv y\equiv0\pmod3$.\n\n**Step 2.** Write $x=3a$, $y=3b$. Then $$9a^{2}+9b^{2}=3z^{2}\quad\Longrightarrow\quad 3(a^{2}+b^{2})=z^{2}.$$\n\n**Step 3.** So $3\mid z^{2}$, and since $3$ is prime, $3\mid z$. Write $z=3c$: $$3(a^{2}+b^{2})=9c^{2}\quad\Longrightarrow\quad a^{2}+b^{2}=3c^{2}.$$\n\n**Step 4.** We have produced a new solution $(a,b,c)$ of the same equation with $|c|=|z|/3<|z|$ and $c\ne0$ (otherwise $z=0$ too). This contradicts the minimality of $|z|$.\n\nSo there is no solution with $z\ne0$; and when $z=0$, $x^2+y^2=0$ forces $x=y=0$. $\blacksquare$'}},

    {'t': 'note',
     'text': {
      'ru': r'Тем же спуском Ферма доказал, что $x^{4}+y^{4}=z^{2}$ не имеет решений в натуральных числах — а отсюда сразу следует его Великая теорема для показателя $4$. Эта задача стоит последней в списке ниже.',
      'en': r'The same descent is how Fermat proved that $x^{4}+y^{4}=z^{2}$ has no solution in positive integers — which immediately gives his Last Theorem for exponent $4$. That problem is waiting for you in the list below.'}},

    {'t': 'idea',
     'name': {'ru': 'Как узнать, что нужен спуск', 'en': 'How to spot that descent is needed'},
     'text': {
      'ru': r'Признаки: уравнение **однородно** (все слагаемые одной степени, как $x^2+y^2=3z^2$), либо все переменные входят симметрично, либо после взятия остатков выясняется, что все переменные делятся на одно и то же простое. Последнее — почти верный знак: делите и повторяйте.',
      'en': r'The signs: the equation is **homogeneous** (all terms of the same degree, as in $x^2+y^2=3z^2$), or the variables enter symmetrically, or a remainder argument shows that every variable is divisible by the same prime. That last one is an almost certain signal: divide and repeat.'}},
   ]},
 ],

 # ==================================================================== problems
 'problems': [

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Найдите все решения уравнения $3x+5y=47$ в натуральных числах.',
         'en': r'Find every solution of $3x+5y=47$ in positive integers.'},
   'hint': {'ru': r'Возьмите остаток по модулю $3$.', 'en': r'Take remainders modulo $3$.'},
   'sol': {'ru': r'По модулю $3$: $5y\equiv47$, то есть $2y\equiv2\pmod3$, откуда $y\equiv1\pmod3$. Значит $y\in\{1,4,7,10,\dots\}$. Из $5y<47$ следует $y\le9$, остаются $y=1,4,7$, и тогда $3x=47-5y$ даёт $3x=42,27,12$, то есть $x=14,9,4$. Все три пары натуральные. **Ответ:** $(14,1),(9,4),(4,7)$.',
           'en': r'Modulo $3$: $5y\equiv47$, that is $2y\equiv2\pmod3$, so $y\equiv1\pmod3$ and $y\in\{1,4,7,10,\dots\}$. From $5y<47$ we get $y\le9$, leaving $y=1,4,7$; then $3x=47-5y$ gives $3x=42,27,12$, so $x=14,9,4$. All three pairs are positive. **Answer:** $(14,1),(9,4),(4,7)$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Сколько существует пар неотрицательных целых чисел $(x,y)$ с $5x+7y=100$?',
         'en': r'How many pairs of non-negative integers $(x,y)$ satisfy $5x+7y=100$?'},
   'hint': {'ru': r'Что можно сказать про $y$ по модулю $5$?',
            'en': r'What does modulus $5$ say about $y$?'},
   'sol': {'ru': r'По модулю $5$: $7y\equiv100\equiv0$, то есть $2y\equiv0\pmod5$. Так как $2$ обратимо по модулю $5$, получаем $y\equiv0\pmod5$. Из $7y\le100$ следует $y\le14$, значит $y\in\{0,5,10\}$. Соответственно $5x=100,65,30$ и $x=20,13,6$ — все неотрицательные. **Ответ:** три пары: $(20,0),(13,5),(6,10)$.',
           'en': r'Modulo $5$: $7y\equiv100\equiv0$, that is $2y\equiv0\pmod5$. Since $2$ is invertible mod $5$, $y\equiv0\pmod5$. From $7y\le100$ we get $y\le14$, so $y\in\{0,5,10\}$. Then $5x=100,65,30$ and $x=20,13,6$, all non-negative. **Answer:** three pairs: $(20,0),(13,5),(6,10)$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Найдите все пары целых чисел с $xy=x+y+3$.',
         'en': r'Find all pairs of integers with $xy=x+y+3$.'},
   'hint': {'ru': r'Перенесите всё влево и прибавьте $1$.',
            'en': r'Move everything to the left and add $1$.'},
   'sol': {'ru': r'$xy-x-y+1=4$, то есть $(x-1)(y-1)=4$. Перебираем все пары делителей числа $4$, включая отрицательные: $$(1,4),(2,2),(4,1),(-1,-4),(-2,-2),(-4,-1).$$ Прибавляя единицу к каждой координате, получаем $$(2,5),(3,3),(5,2),(0,-3),(-1,-1),(-3,0).$$ Проверка $(0,-3)$: $0\cdot(-3)=0$ и $0+(-3)+3=0$ ✓. **Ответ:** шесть пар выше; из них натуральных три: $(2,5),(3,3),(5,2)$.',
           'en': r'$xy-x-y+1=4$, that is $(x-1)(y-1)=4$. Run through every divisor pair of $4$, negatives included: $$(1,4),(2,2),(4,1),(-1,-4),(-2,-2),(-4,-1).$$ Adding $1$ to each coordinate gives $$(2,5),(3,3),(5,2),(0,-3),(-1,-1),(-3,0).$$ Check $(0,-3)$: $0\cdot(-3)=0$ and $0+(-3)+3=0$ ✓. **Answer:** the six pairs above; three of them are positive: $(2,5),(3,3),(5,2)$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Найдите все пары натуральных чисел с $\dfrac1x+\dfrac1y=\dfrac16$.',
         'en': r'Find all pairs of positive integers with $\dfrac1x+\dfrac1y=\dfrac16$.'},
   'hint': {'ru': r'$(x-6)(y-6)=36$.', 'en': r'$(x-6)(y-6)=36$.'},
   'sol': {'ru': r'Приводим к общему знаменателю: $6(x+y)=xy$, то есть $xy-6x-6y+36=36$ и $(x-6)(y-6)=36$. Оба множителя положительны: если бы $x\le6$, то $\tfrac1x\ge\tfrac16$ и для $\tfrac1y>0$ не осталось бы места. Делители $36=2^2\cdot3^2$: их $(2+1)(2+1)=9$, а именно $1,2,3,4,6,9,12,18,36$. Каждому отвечает пара $x=6+d$, $y=6+36/d$: $$(7,42),(8,24),(9,18),(10,15),(12,12),(15,10),(18,9),(24,8),(42,7).$$ **Ответ:** $9$ пар.',
           'en': r'Clear denominators: $6(x+y)=xy$, so $xy-6x-6y+36=36$ and $(x-6)(y-6)=36$. Both factors are positive: if $x\le6$ then $\tfrac1x\ge\tfrac16$ and no room is left for $\tfrac1y>0$. The divisors of $36=2^2\cdot3^2$ number $(2+1)(2+1)=9$, namely $1,2,3,4,6,9,12,18,36$. Each gives $x=6+d$, $y=6+36/d$: $$(7,42),(8,24),(9,18),(10,15),(12,12),(15,10),(18,9),(24,8),(42,7).$$ **Answer:** $9$ pairs.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Найдите все пары натуральных чисел с $x^{2}-y^{2}=45$.',
         'en': r'Find all pairs of positive integers with $x^{2}-y^{2}=45$.'},
   'hint': {'ru': r'Разность квадратов.', 'en': r'Difference of squares.'},
   'sol': {'ru': r'$(x-y)(x+y)=45$. Оба множителя положительны и $x-y<x+y$, а $45$ нечётно, поэтому оба множителя нечётны — условие одинаковой чётности выполнено автоматически. Пары: $(1,45),(3,15),(5,9)$. Из $x-y=u$, $x+y=v$ получаем $x=\tfrac{u+v}2$, $y=\tfrac{v-u}2$: $$(23,22),\quad(9,6),\quad(7,2).$$ Проверка: $529-484=45$ ✓, $81-36=45$ ✓, $49-4=45$ ✓. **Ответ:** три пары.',
           'en': r'$(x-y)(x+y)=45$. Both factors are positive and $x-y<x+y$; since $45$ is odd both factors are odd, so the same-parity condition holds automatically. The pairs are $(1,45),(3,15),(5,9)$. From $x-y=u$, $x+y=v$ we get $x=\tfrac{u+v}2$, $y=\tfrac{v-u}2$: $$(23,22),\quad(9,6),\quad(7,2).$$ Check: $529-484=45$ ✓, $81-36=45$ ✓, $49-4=45$ ✓. **Answer:** three pairs.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Сколько троек натуральных чисел $(x,y,z)$ удовлетворяют равенству $x+y+z=15$?',
         'en': r'How many triples of positive integers $(x,y,z)$ satisfy $x+y+z=15$?'},
   'hint': {'ru': r'Поставьте в ряд $15$ единиц и выберите два места для перегородок.',
            'en': r'Line up $15$ ones and choose two places for the dividers.'},
   'sol': {'ru': r'Запишем $15$ единиц в ряд: между ними $14$ промежутков. Каждая тройка натуральных слагаемых — это выбор двух разных промежутков, куда ставятся перегородки: первая группа единиц даёт $x$, вторая $y$, третья $z$, и все три группы непусты, потому что промежутки различны. Значит число троек равно $$\binom{14}{2}=\frac{14\cdot13}{2}=91.$$ **Ответ:** $91$. *Замечание:* это «метод шаров и перегородок», в общем виде число решений уравнения $x_1+\dots+x_k=n$ в натуральных числах равно $\binom{n-1}{k-1}$.',
           'en': r'Write $15$ ones in a row: there are $14$ gaps between them. Each triple of positive summands is a choice of two distinct gaps for the dividers: the first block of ones is $x$, the second $y$, the third $z$, and all three blocks are non-empty because the gaps are distinct. So the number of triples is $$\binom{14}{2}=\frac{14\cdot13}{2}=91.$$ **Answer:** $91$. *Remark:* this is "stars and bars"; in general $x_1+\dots+x_k=n$ has $\binom{n-1}{k-1}$ solutions in positive integers.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Найдите все пары целых чисел с $xy+3x-5y=45$.',
         'en': r'Find all pairs of integers with $xy+3x-5y=45$.'},
   'hint': {'ru': r'$xy+3x-5y=(x-5)(y+3)+15$.',
            'en': r'$xy+3x-5y=(x-5)(y+3)+15$.'},
   'sol': {'ru': r'Здесь $a=3$, $b=-5$, значит $ab=-15$ и $xy+3x-5y=(x-5)(y+3)+15$. Уравнение превращается в $(x-5)(y+3)=30$. Число $30=2\cdot3\cdot5$ имеет $8$ положительных делителей, а с отрицательными — $16$; столько же и решений. Положительные разложения $30=1\cdot30=2\cdot15=3\cdot10=5\cdot6=6\cdot5=10\cdot3=15\cdot2=30\cdot1$ дают $$(6,27),(7,12),(8,7),(10,3),(11,2),(15,0),(20,-1),(35,-2),$$ а отрицательные $30=(-1)(-30)=\dots$ дают $$(4,-33),(3,-18),(2,-13),(0,-9),(-1,-8),(-5,-6),(-10,-5),(-25,-4).$$ Проверка $(8,7)$: $56+24-35=45$ ✓. **Ответ:** $16$ пар, перечисленных выше.',
           'en': r'Here $a=3$, $b=-5$, so $ab=-15$ and $xy+3x-5y=(x-5)(y+3)+15$. The equation becomes $(x-5)(y+3)=30$. Now $30=2\cdot3\cdot5$ has $8$ positive divisors, and $16$ divisors in all; there are as many solutions. The positive factorisations $30=1\cdot30=2\cdot15=3\cdot10=5\cdot6=6\cdot5=10\cdot3=15\cdot2=30\cdot1$ give $$(6,27),(7,12),(8,7),(10,3),(11,2),(15,0),(20,-1),(35,-2),$$ and the negative ones give $$(4,-33),(3,-18),(2,-13),(0,-9),(-1,-8),(-5,-6),(-10,-5),(-25,-4).$$ Check $(8,7)$: $56+24-35=45$ ✓. **Answer:** the $16$ pairs listed above.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Найдите все пары натуральных чисел с $x^{2}-y^{2}=2024$.',
         'en': r'Find all pairs of positive integers with $x^{2}-y^{2}=2024$.'},
   'hint': {'ru': r'Множители $x-y$ и $x+y$ имеют одинаковую чётность.',
            'en': r'The factors $x-y$ and $x+y$ have the same parity.'},
   'sol': {'ru': r'$(x-y)(x+y)=2024$. Числа $x-y$ и $x+y$ отличаются на $2y$, значит имеют **одинаковую чётность**. Их произведение чётно, поэтому оба чётны. Пишем $x-y=2u$, $x+y=2v$: тогда $4uv=2024$, то есть $uv=506=2\cdot11\cdot23$. Берём разложения с $u<v$ (нужно $y>0$): $$506=1\cdot506=2\cdot253=11\cdot46=22\cdot23.$$ Из $x=u+v$, $y=v-u$ получаем $$(507,505),\;(255,251),\;(57,35),\;(45,1).$$ Проверка последней: $2025-1=2024$ ✓. **Ответ:** четыре пары.',
           'en': r'$(x-y)(x+y)=2024$. The numbers $x-y$ and $x+y$ differ by $2y$, so they have the **same parity**. Their product is even, hence both are even. Write $x-y=2u$, $x+y=2v$: then $4uv=2024$, that is $uv=506=2\cdot11\cdot23$. Take the factorisations with $u<v$ (we need $y>0$): $$506=1\cdot506=2\cdot253=11\cdot46=22\cdot23.$$ From $x=u+v$, $y=v-u$ we get $$(507,505),\;(255,251),\;(57,35),\;(45,1).$$ Check the last: $2025-1=2024$ ✓. **Answer:** four pairs.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'При каких натуральных $n$ число $n^{2}+96$ является точным квадратом?',
         'en': r'For which positive integers $n$ is $n^{2}+96$ a perfect square?'},
   'hint': {'ru': r'Положите $n^2+96=m^2$ и разложите разность квадратов.',
            'en': r'Put $n^2+96=m^2$ and factor the difference of squares.'},
   'sol': {'ru': r'Пусть $n^2+96=m^2$, $m>0$. Тогда $(m-n)(m+n)=96$. Множители одинаковой чётности, а произведение чётно, значит оба чётны: $m-n=2u$, $m+n=2v$, $uv=24$, $u<v$. Разложения: $24=1\cdot24=2\cdot12=3\cdot8=4\cdot6$. Из $m=u+v$, $n=v-u$: $$(m,n)=(25,23),\;(14,10),\;(11,5),\;(10,2).$$ Проверка $n=2$: $4+96=100=10^2$ ✓; $n=23$: $529+96=625=25^2$ ✓. **Ответ:** $n=2,5,10,23$.',
           'en': r'Put $n^2+96=m^2$ with $m>0$. Then $(m-n)(m+n)=96$. The factors have equal parity and their product is even, so both are even: $m-n=2u$, $m+n=2v$, $uv=24$, $u<v$. The factorisations are $24=1\cdot24=2\cdot12=3\cdot8=4\cdot6$. From $m=u+v$, $n=v-u$: $$(m,n)=(25,23),\;(14,10),\;(11,5),\;(10,2).$$ Check $n=2$: $4+96=100=10^2$ ✓; $n=23$: $529+96=625=25^2$ ✓. **Answer:** $n=2,5,10,23$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Найдите все пары простых чисел $(p,q)$ с $p^{2}-2q^{2}=1$.',
         'en': r'Find all pairs of primes $(p,q)$ with $p^{2}-2q^{2}=1$.'},
   'hint': {'ru': r'Разложите $p^2-1$ и посмотрите на чётность.',
            'en': r'Factor $p^2-1$ and look at parity.'},
   'sol': {'ru': r'Если $p=2$, то $4-2q^2=1$ — левая часть чётна, правая нечётна, невозможно. Значит $p$ нечётно. Из $(p-1)(p+1)=2q^{2}$ и $p=2s+1$ получаем $2s\cdot(2s+2)=2q^2$, то есть $$4s(s+1)=2q^{2},\qquad q^{2}=2s(s+1).$$ Правая часть чётна, значит $q^2$ чётно и $q$ чётно; простое чётное число одно — $q=2$. Тогда $4=2s(s+1)$, то есть $s(s+1)=2$ и $s=1$, откуда $p=3$. Проверка: $9-8=1$ ✓. **Ответ:** единственная пара $(p,q)=(3,2)$.',
           'en': r'If $p=2$ then $4-2q^2=1$ — the left side is even and the right side odd, impossible. So $p$ is odd. From $(p-1)(p+1)=2q^{2}$ with $p=2s+1$ we get $2s\cdot(2s+2)=2q^2$, that is $$4s(s+1)=2q^{2},\qquad q^{2}=2s(s+1).$$ The right side is even, so $q^2$ is even and $q$ is even; the only even prime is $q=2$. Then $4=2s(s+1)$, so $s(s+1)=2$ and $s=1$, giving $p=3$. Check: $9-8=1$ ✓. **Answer:** the single pair $(p,q)=(3,2)$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Решите в натуральных числах уравнение $2^{x}+1=y^{2}$.',
         'en': r'Solve $2^{x}+1=y^{2}$ in positive integers.'},
   'hint': {'ru': r'$2^x=(y-1)(y+1)$: оба множителя — степени двойки.',
            'en': r'$2^x=(y-1)(y+1)$: both factors are powers of two.'},
   'sol': {'ru': r'Из $2^{x}=y^{2}-1=(y-1)(y+1)$ следует, что каждый из множителей — степень двойки (делитель степени двойки сам является степенью двойки, а оба множителя положительны, так как $y\ge2$). Пусть $y-1=2^{a}$ и $y+1=2^{b}$, где $a<b$ и $a+b=x$. Вычитая, $$2^{b}-2^{a}=2,\qquad 2^{a}\left(2^{\,b-a}-1\right)=2.$$ Множитель $2^{b-a}-1$ нечётен, значит он равен $1$, а $2^{a}=2$. Отсюда $a=1$, $b-a=1$, то есть $b=2$. Тогда $y-1=2$, $y=3$ и $x=a+b=3$. Проверка: $2^{3}+1=9=3^{2}$ ✓. **Ответ:** $(x,y)=(3,3)$.',
           'en': r'From $2^{x}=y^{2}-1=(y-1)(y+1)$ each factor is a power of two (a divisor of a power of two is itself one, and both factors are positive since $y\ge2$). Write $y-1=2^{a}$ and $y+1=2^{b}$ with $a<b$ and $a+b=x$. Subtracting, $$2^{b}-2^{a}=2,\qquad 2^{a}\left(2^{\,b-a}-1\right)=2.$$ The factor $2^{b-a}-1$ is odd, so it equals $1$ and $2^{a}=2$. Hence $a=1$, $b-a=1$, so $b=2$. Then $y-1=2$, $y=3$, and $x=a+b=3$. Check: $2^{3}+1=9=3^{2}$ ✓. **Answer:** $(x,y)=(3,3)$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Докажите, что уравнение $15x^{2}-7y^{2}=9$ не имеет решений в целых числах.',
         'en': r'Prove that $15x^{2}-7y^{2}=9$ has no integer solutions.'},
   'hint': {'ru': r'Модуль $3$ — и спуск: покажите, что $x$ и $y$ обязаны делиться на $3$.',
            'en': r'Modulus $3$, then descent: show both $x$ and $y$ must be divisible by $3$.'},
   'sol': {'ru': r'**Шаг 1.** По модулю $3$: $15x^2\equiv0$ и $9\equiv0$, значит $7y^{2}\equiv0\pmod3$. Так как $\gcd(7,3)=1$, получаем $3\mid y^{2}$, а $3$ простое, поэтому $3\mid y$. Пишем $y=3b$: $$15x^{2}-63b^{2}=9\quad\Longrightarrow\quad 5x^{2}-21b^{2}=3.$$\n\n**Шаг 2.** Снова по модулю $3$: $5x^{2}\equiv0$, откуда $3\mid x$. Пишем $x=3a$: $$45a^{2}-21b^{2}=3\quad\Longrightarrow\quad 15a^{2}-7b^{2}=1.$$\n\n**Шаг 3.** Возьмём модуль $3$ в последнем равенстве: $-7b^{2}\equiv1$, то есть $-b^{2}\equiv1$ и $b^{2}\equiv-1\equiv2\pmod3$. Но квадрат по модулю $3$ равен $0$ или $1$ — противоречие. $\blacksquare$',
           'en': r'**Step 1.** Modulo $3$: $15x^2\equiv0$ and $9\equiv0$, so $7y^{2}\equiv0\pmod3$. Since $\gcd(7,3)=1$ we get $3\mid y^{2}$, and as $3$ is prime, $3\mid y$. Write $y=3b$: $$15x^{2}-63b^{2}=9\quad\Longrightarrow\quad 5x^{2}-21b^{2}=3.$$\n\n**Step 2.** Modulo $3$ again: $5x^{2}\equiv0$, so $3\mid x$. Write $x=3a$: $$45a^{2}-21b^{2}=3\quad\Longrightarrow\quad 15a^{2}-7b^{2}=1.$$\n\n**Step 3.** Take modulus $3$ in the last equality: $-7b^{2}\equiv1$, that is $-b^{2}\equiv1$ and $b^{2}\equiv-1\equiv2\pmod3$. But a square is $0$ or $1$ modulo $3$ — contradiction. $\blacksquare$'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Докажите, что число пар натуральных чисел $(x,y)$ с $\dfrac1x+\dfrac1y=\dfrac1n$ равно числу делителей числа $n^{2}$.',
         'en': r'Prove that the number of pairs of positive integers $(x,y)$ with $\dfrac1x+\dfrac1y=\dfrac1n$ equals the number of divisors of $n^{2}$.'},
   'hint': {'ru': r'$(x-n)(y-n)=n^2$, и оба множителя положительны.',
            'en': r'$(x-n)(y-n)=n^2$, and both factors are positive.'},
   'sol': {'ru': r'Приводя к общему знаменателю, получаем $n(x+y)=xy$, то есть $xy-nx-ny=0$; прибавив $n^{2}$, приходим к $$(x-n)(y-n)=n^{2}.$$ Покажем, что оба множителя положительны. Если $x\le n$, то $\tfrac1x\ge\tfrac1n$, и тогда $\tfrac1y=\tfrac1n-\tfrac1x\le0$ — невозможно для натурального $y$. Значит $x>n$, и точно так же $y>n$.\n\nТеперь соответствие очевидно: каждому положительному делителю $d$ числа $n^{2}$ отвечает ровно одна пара $$x=n+d,\qquad y=n+\frac{n^{2}}{d},$$ и разным $d$ отвечают разные $x$, то есть разные пары. Обратно, любая пара даёт делитель $d=x-n$. Соответствие взаимно однозначно, поэтому пар ровно $\tau(n^{2})$. $\blacksquare$\n\n*Следствие.* Если $n=p$ простое, то $\tau(p^{2})=3$: пары $(p+1,p^2+p)$, $(2p,2p)$, $(p^2+p,p+1)$.',
           'en': r'Clearing denominators gives $n(x+y)=xy$, that is $xy-nx-ny=0$; adding $n^{2}$ yields $$(x-n)(y-n)=n^{2}.$$ Both factors are positive: if $x\le n$ then $\tfrac1x\ge\tfrac1n$ and $\tfrac1y=\tfrac1n-\tfrac1x\le0$, impossible for a positive integer $y$. So $x>n$, and likewise $y>n$.\n\nThe correspondence is now clear: each positive divisor $d$ of $n^{2}$ gives exactly one pair $$x=n+d,\qquad y=n+\frac{n^{2}}{d},$$ and different $d$ give different $x$, hence different pairs. Conversely every pair yields the divisor $d=x-n$. The correspondence is a bijection, so there are exactly $\tau(n^{2})$ pairs. $\blacksquare$\n\n*Corollary.* If $n=p$ is prime then $\tau(p^{2})=3$: the pairs $(p+1,p^2+p)$, $(2p,2p)$, $(p^2+p,p+1)$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Найдите все тройки натуральных чисел с $x!+y!=z!$.',
         'en': r'Find all triples of positive integers with $x!+y!=z!$.'},
   'hint': {'ru': r'Считайте $x\le y$ и сравните $z!$ с $2\cdot y!$.',
            'en': r'Assume $x\le y$ and compare $z!$ with $2\cdot y!$.'},
   'sol': {'ru': r'Не умаляя общности, $x\le y$. Тогда $z!=x!+y!>y!$, значит $z>y$ и потому $z\ge y+1$, откуда $$z!\ \ge\ (y+1)!\ =\ (y+1)\cdot y!.$$ С другой стороны $x!\le y!$, поэтому $$z!=x!+y!\ \le\ 2\cdot y!.$$ Сравнивая, получаем $(y+1)\,y!\le 2\,y!$, то есть $y+1\le2$ и $y=1$. Тогда $x\le y=1$ даёт $x=1$, и $z!=1!+1!=2$, откуда $z=2$. **Ответ:** единственная тройка $(1,1,2)$. $\blacksquare$',
           'en': r'Without loss of generality $x\le y$. Then $z!=x!+y!>y!$, so $z>y$ and therefore $z\ge y+1$, giving $$z!\ \ge\ (y+1)!\ =\ (y+1)\cdot y!.$$ On the other hand $x!\le y!$, so $$z!=x!+y!\ \le\ 2\cdot y!.$$ Comparing, $(y+1)\,y!\le 2\,y!$, that is $y+1\le2$ and $y=1$. Then $x\le y=1$ forces $x=1$, and $z!=1!+1!=2$, so $z=2$. **Answer:** the single triple $(1,1,2)$. $\blacksquare$'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Докажите, что уравнение $x^{2}+y^{2}=4z+3$ не имеет решений в целых числах.',
         'en': r'Prove that $x^{2}+y^{2}=4z+3$ has no integer solutions.'},
   'hint': {'ru': r'Сумма двух квадратов по модулю $4$.',
            'en': r'A sum of two squares modulo $4$.'},
   'sol': {'ru': r'Квадрат чётного числа равен $(2k)^2=4k^2\equiv0\pmod4$, квадрат нечётного равен $(2k+1)^2=4k(k+1)+1\equiv1\pmod4$. Значит каждый квадрат сравним с $0$ или $1$ по модулю $4$, и сумма двух квадратов принимает по модулю $4$ только значения $$0+0=0,\quad 0+1=1,\quad 1+1=2.$$ Остаток $3$ недостижим. Но правая часть $4z+3$ сравнима именно с $3$ по модулю $4$. Противоречие. $\blacksquare$\n\n*Следствие.* Числа $3,7,11,15,\dots$ — а также, например, $2023$ — не представимы суммой двух квадратов.',
           'en': r'The square of an even number is $(2k)^2=4k^2\equiv0\pmod4$, and of an odd number $(2k+1)^2=4k(k+1)+1\equiv1\pmod4$. So every square is $0$ or $1$ modulo $4$, and a sum of two squares takes only the values $$0+0=0,\quad 0+1=1,\quad 1+1=2$$ modulo $4$. The remainder $3$ is unreachable, yet the right-hand side $4z+3$ is exactly $3$ modulo $4$. Contradiction. $\blacksquare$\n\n*Corollary.* The numbers $3,7,11,15,\dots$ — and, for instance, $2023$ — are not sums of two squares.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 3,
   'q': {'ru': r'Решите в натуральных числах уравнение $3^{x}-2^{y}=1$.',
         'en': r'Solve $3^{x}-2^{y}=1$ in positive integers.'},
   'hint': {'ru': r'Разберите $y\le2$ отдельно, а при $y\ge3$ возьмите модуль $8$.',
            'en': r'Handle $y\le2$ separately; for $y\ge3$ take modulus $8$.'},
   'sol': {'ru': r'**Малые $y$.** При $y=1$: $3^{x}=3$, значит $x=1$. При $y=2$: $3^{x}=5$ — не степень тройки.\n\n**Случай $y\ge3$.** Тогда $8\mid2^{y}$, и равенство даёт $3^{x}\equiv1\pmod 8$. Но $3^{1}\equiv3$ и $3^{2}\equiv1\pmod8$, то есть степени тройки по модулю $8$ чередуются: $3,1,3,1,\dots$. Значит $x$ **чётно**, скажем $x=2m$.\n\nТеперь $$2^{y}=3^{2m}-1=(3^{m}-1)(3^{m}+1).$$ Оба множителя — делители степени двойки, значит сами степени двойки, и они отличаются на $2$. Две степени двойки, отличающиеся на $2$, — это только $2$ и $4$. Следовательно $3^{m}-1=2$, то есть $m=1$, $x=2$, и тогда $2^{y}=(3-1)(3+1)=2\cdot4=8$, откуда $y=3$.\n\n**Ответ:** $(x,y)=(1,1)$ и $(2,3)$. Проверка: $3-2=1$ ✓ и $9-8=1$ ✓. $\blacksquare$\n\n*Замечание.* Это частный случай теоремы Михайлеску (гипотезы Каталана): $8$ и $9$ — единственные соседние натуральные степени.',
           'en': r'**Small $y$.** For $y=1$: $3^{x}=3$, so $x=1$. For $y=2$: $3^{x}=5$, not a power of three.\n\n**Case $y\ge3$.** Then $8\mid2^{y}$ and the equation gives $3^{x}\equiv1\pmod 8$. But $3^{1}\equiv3$ and $3^{2}\equiv1\pmod8$, so the powers of three alternate $3,1,3,1,\dots$ modulo $8$. Hence $x$ is **even**, say $x=2m$.\n\nNow $$2^{y}=3^{2m}-1=(3^{m}-1)(3^{m}+1).$$ Both factors divide a power of two, so both are powers of two, and they differ by $2$. The only two powers of two differing by $2$ are $2$ and $4$. Therefore $3^{m}-1=2$, so $m=1$, $x=2$, and then $2^{y}=(3-1)(3+1)=2\cdot4=8$, giving $y=3$.\n\n**Answer:** $(x,y)=(1,1)$ and $(2,3)$. Check: $3-2=1$ ✓ and $9-8=1$ ✓. $\blacksquare$\n\n*Remark.* This is a special case of Mihailescu’s theorem (Catalan’s conjecture): $8$ and $9$ are the only consecutive perfect powers.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 3,
   'q': {'ru': r'Докажите, что уравнение $x^{2}+y^{2}+z^{2}=2xyz$ имеет в целых числах только решение $x=y=z=0$.',
         'en': r'Prove that $x^{2}+y^{2}+z^{2}=2xyz$ has only the solution $x=y=z=0$ in integers.'},
   'hint': {'ru': r'Сколько нечётных чисел может быть среди $x,y,z$? Считайте по модулю $4$.',
            'en': r'How many of $x,y,z$ can be odd? Count modulo $4$.'},
   'sol': {'ru': r'Докажем общее утверждение: при любом $m\ge1$ уравнение $$x^{2}+y^{2}+z^{2}=2^{m}xyz$$ имеет только нулевое решение. Исходное — случай $m=1$.\n\n**Ключевая лемма.** Квадрат чётного числа сравним с $0$, а квадрат нечётного — с $1$ по модулю $4$. Поэтому $x^{2}+y^{2}+z^{2}\equiv k\pmod 4$, где $k\in\{0,1,2,3\}$ — количество нечётных среди $x,y,z$.\n\n**Шаг 1: все три числа чётны.**\n*Если $k=1$ или $k=3$,* левая часть нечётна, а правая чётна — невозможно.\n*Если $k=2$,* то левая часть $\equiv2\pmod4$; но среди $x,y,z$ есть чётное, поэтому $xyz$ чётно и правая часть делится на $4$. Противоречие.\nОстаётся $k=0$: числа $x,y,z$ все чётны.\n\n**Шаг 2: спуск.** Пишем $x=2a$, $y=2b$, $z=2c$: $$4(a^{2}+b^{2}+c^{2})=2^{m}\cdot8abc\quad\Longrightarrow\quad a^{2}+b^{2}+c^{2}=2^{m+1}abc.$$ Получилось уравнение того же вида с показателем $m+1$.\n\n**Шаг 3: вывод.** Предположим, что существует ненулевое решение, и выберем среди всех ненулевых решений (при всех $m\ge1$) то, у которого сумма $x^{2}+y^{2}+z^{2}>0$ наименьшая. По шагам 1–2 из него строится решение $(a,b,c)$ с суммой квадратов вчетверо меньшей и по-прежнему положительной. Противоречие с минимальностью.\n\nЗначит ненулевых решений нет. $\blacksquare$',
           'en': r'We prove the general statement: for every $m\ge1$ the equation $$x^{2}+y^{2}+z^{2}=2^{m}xyz$$ has only the zero solution. The original is the case $m=1$.\n\n**Key lemma.** An even square is $0$ and an odd square is $1$ modulo $4$. Hence $x^{2}+y^{2}+z^{2}\equiv k\pmod 4$, where $k\in\{0,1,2,3\}$ is the number of odd entries among $x,y,z$.\n\n**Step 1: all three are even.**\n*If $k=1$ or $k=3$,* the left side is odd and the right side even — impossible.\n*If $k=2$,* the left side is $\equiv2\pmod4$; but one of $x,y,z$ is then even, so $xyz$ is even and the right side is divisible by $4$. Contradiction.\nOnly $k=0$ survives: $x,y,z$ are all even.\n\n**Step 2: descent.** Write $x=2a$, $y=2b$, $z=2c$: $$4(a^{2}+b^{2}+c^{2})=2^{m}\cdot8abc\quad\Longrightarrow\quad a^{2}+b^{2}+c^{2}=2^{m+1}abc.$$ This is the same equation with exponent $m+1$.\n\n**Step 3: conclusion.** Suppose a non-zero solution exists, and among all non-zero solutions (over all $m\ge1$) choose one with the smallest positive value of $x^{2}+y^{2}+z^{2}$. Steps 1–2 build from it a solution $(a,b,c)$ whose sum of squares is four times smaller and still positive. That contradicts minimality.\n\nSo there is no non-zero solution. $\blacksquare$'}},

  {'src': 'Классическая задача / Classic', 'lvl': 3,
   'q': {'ru': r'Найдите все пары различных натуральных чисел $x\ne y$ с $x^{y}=y^{x}$.',
         'en': r'Find all pairs of distinct positive integers $x\ne y$ with $x^{y}=y^{x}$.'},
   'hint': {'ru': r'Сравните $n^{n+1}$ и $(n+1)^{n}$ при $n\ge3$.',
            'en': r'Compare $n^{n+1}$ with $(n+1)^{n}$ for $n\ge3$.'},
   'sol': {'ru': r'Считаем $x<y$ (вторую пару получим перестановкой).\n\n**Лемма.** При $n\ge3$ выполняется $n^{\,n+1}>(n+1)^{n}$.\n*Доказательство.* Неравенство равносильно $n>\left(1+\tfrac1n\right)^{n}$. По формуле бинома $$\Big(1+\frac1n\Big)^{n}=\sum_{k=0}^{n}\binom{n}{k}\frac1{n^{k}},\qquad \binom{n}{k}\frac1{n^{k}}=\frac{n(n-1)\cdots(n-k+1)}{k!\,n^{k}}\le\frac1{k!},$$ поэтому $$\Big(1+\frac1n\Big)^{n}\le\sum_{k=0}^{n}\frac1{k!}<1+1+\frac12+\frac14+\frac18+\dots=3\le n. \qquad\square$$\n\n**Следствие.** Величина $\sqrt[n]{n}$ строго убывает при $n\ge3$: из $n^{\,n+1}>(n+1)^{n}$ извлекаем корень степени $n(n+1)$ и получаем $\sqrt[n]{n}>\sqrt[n+1]{n+1}$.\n\n**Решение.** Равенство $x^{y}=y^{x}$ равносильно $\sqrt[x]{x}=\sqrt[y]{y}$ (возведите обе части в степень $\tfrac1{xy}$). Выпишем первые значения: $$\sqrt[1]{1}=1,\quad\sqrt[2]{2}\approx1{,}414,\quad\sqrt[3]{3}\approx1{,}442,\quad\sqrt[4]{4}=\sqrt2\approx1{,}414 .$$ Начиная с $n=3$ последовательность строго убывает, поэтому равные значения могут дать только два индекса, один из которых меньше $3$. Индекс $1$ отпадает: $\sqrt[n]{n}>1$ при $n\ge2$. Остаётся $x=2$, и тогда нужно $\sqrt[y]{y}=\sqrt2=\sqrt[4]{4}$, то есть $y=4$ (других нет, так как при $y\ge3$ последовательность строго убывает и значение $\sqrt2$ принимается лишь при $y=4$).\n\n**Ответ:** $(x,y)=(2,4)$ и $(4,2)$. Проверка: $2^{4}=16=4^{2}$ ✓ $\blacksquare$',
           'en': r'Assume $x<y$ (the other pair comes by swapping).\n\n**Lemma.** For $n\ge3$ we have $n^{\,n+1}>(n+1)^{n}$.\n*Proof.* The inequality is equivalent to $n>\left(1+\tfrac1n\right)^{n}$. By the binomial theorem $$\Big(1+\frac1n\Big)^{n}=\sum_{k=0}^{n}\binom{n}{k}\frac1{n^{k}},\qquad \binom{n}{k}\frac1{n^{k}}=\frac{n(n-1)\cdots(n-k+1)}{k!\,n^{k}}\le\frac1{k!},$$ hence $$\Big(1+\frac1n\Big)^{n}\le\sum_{k=0}^{n}\frac1{k!}<1+1+\frac12+\frac14+\frac18+\dots=3\le n. \qquad\square$$\n\n**Corollary.** The quantity $\sqrt[n]{n}$ is strictly decreasing for $n\ge3$: take the $n(n+1)$-th root of $n^{\,n+1}>(n+1)^{n}$ to get $\sqrt[n]{n}>\sqrt[n+1]{n+1}$.\n\n**Solution.** The equality $x^{y}=y^{x}$ is equivalent to $\sqrt[x]{x}=\sqrt[y]{y}$ (raise both sides to the power $\tfrac1{xy}$). The first values are $$\sqrt[1]{1}=1,\quad\sqrt[2]{2}\approx1.414,\quad\sqrt[3]{3}\approx1.442,\quad\sqrt[4]{4}=\sqrt2\approx1.414 .$$ From $n=3$ on the sequence strictly decreases, so two indices can give equal values only if one of them is below $3$. Index $1$ is out, since $\sqrt[n]{n}>1$ for $n\ge2$. That leaves $x=2$, and we need $\sqrt[y]{y}=\sqrt2=\sqrt[4]{4}$, so $y=4$ (nothing else works, because for $y\ge3$ the sequence strictly decreases and takes the value $\sqrt2$ only at $y=4$).\n\n**Answer:** $(x,y)=(2,4)$ and $(4,2)$. Check: $2^{4}=16=4^{2}$ ✓ $\blacksquare$'}},

  {'src': 'Классическая задача Ферма / Fermat, classic', 'lvl': 3,
   'q': {'ru': r'Докажите, что уравнение $x^{4}+y^{4}=z^{2}$ не имеет решений в натуральных числах.',
         'en': r'Prove that $x^{4}+y^{4}=z^{2}$ has no solutions in positive integers.'},
   'hint': {'ru': r'Возьмите решение с наименьшим $z$ и дважды примените параметризацию пифагоровых троек.',
            'en': r'Take the solution with the smallest $z$ and use the Pythagorean parametrisation twice.'},
   'sol': {'ru': r'Нам понадобится известный факт: если $a^{2}+b^{2}=c^{2}$, числа $a,b,c$ натуральны, $\gcd(a,b)=1$ и $b$ чётно, то найдутся взаимно простые $m>n>0$ разной чётности с $$a=m^{2}-n^{2},\qquad b=2mn,\qquad c=m^{2}+n^{2}.$$\n\nПредположим, что решения есть, и выберем то, у которого $z$ **наименьшее**.\n\n**Шаг 1: $\gcd(x,y)=1$.** Если простое $p$ делит и $x$, и $y$, то $p^{4}\mid z^{2}$, значит $p^{2}\mid z$, и тройка $(x/p,\;y/p,\;z/p^{2})$ — решение с меньшим $z$. Противоречие.\n\n**Шаг 2: первая параметризация.** Равенство $(x^{2})^{2}+(y^{2})^{2}=z^{2}$ — примитивная пифагорова тройка (общий делитель $x^2$ и $y^2$ был бы общим делителем $x$ и $y$). Ровно одно из чисел $x,y$ чётно; пусть чётно $y$. Тогда $$x^{2}=m^{2}-n^{2},\qquad y^{2}=2mn,\qquad z=m^{2}+n^{2},$$ где $\gcd(m,n)=1$, $m>n>0$ и $m,n$ разной чётности.\n\n**Шаг 3: вторая параметризация.** Из первого равенства $x^{2}+n^{2}=m^{2}$ — снова примитивная тройка. Здесь $x$ нечётно (иначе $x$ и $y$ оба чётны), значит чётно $n$, и $$x=p^{2}-q^{2},\qquad n=2pq,\qquad m=p^{2}+q^{2},$$ где $\gcd(p,q)=1$, $p>q>0$.\n\n**Шаг 4: три взаимно простых сомножителя.** Подставим в $y^{2}=2mn$: $$y^{2}=2\,(p^{2}+q^{2})\cdot 2pq=4pq(p^{2}+q^{2}),\qquad\text{значит}\qquad \Big(\frac{y}{2}\Big)^{2}=pq\,(p^{2}+q^{2}).$$ Числа $p$, $q$ и $p^{2}+q^{2}$ попарно взаимно просты: $\gcd(p,q)=1$, а общий простой делитель $p$ и $p^{2}+q^{2}$ делил бы $q^{2}$. Произведение попарно взаимно простых чисел является квадратом только если каждое из них квадрат: $$p=a^{2},\qquad q=b^{2},\qquad p^{2}+q^{2}=c^{2}.$$\n\n**Шаг 5: спуск.** Тогда $$a^{4}+b^{4}=p^{2}+q^{2}=c^{2},$$ то есть $(a,b,c)$ — новое решение исходного уравнения. Оценим его: $$c\le c^{2}=p^{2}+q^{2}=m\le m^{2}<m^{2}+n^{2}=z .$$ Получили решение с меньшим $z$ — противоречие с выбором минимального $z$.\n\nЗначит решений нет. $\blacksquare$\n\n*Следствие.* Уравнение $x^{4}+y^{4}=w^{4}$ тоже неразрешимо (возьмите $z=w^{2}$) — это Великая теорема Ферма для показателя $4$, единственный случай, который доказал сам Ферма.',
           'en': r'We use a standard fact: if $a^{2}+b^{2}=c^{2}$ with $a,b,c$ positive, $\gcd(a,b)=1$ and $b$ even, then there are coprime $m>n>0$ of opposite parity with $$a=m^{2}-n^{2},\qquad b=2mn,\qquad c=m^{2}+n^{2}.$$\n\nSuppose solutions exist and pick one with the **smallest** $z$.\n\n**Step 1: $\gcd(x,y)=1$.** If a prime $p$ divides both $x$ and $y$ then $p^{4}\mid z^{2}$, so $p^{2}\mid z$, and $(x/p,\;y/p,\;z/p^{2})$ is a solution with a smaller $z$. Contradiction.\n\n**Step 2: first parametrisation.** The equality $(x^{2})^{2}+(y^{2})^{2}=z^{2}$ is a primitive Pythagorean triple (a common divisor of $x^2$ and $y^2$ would be one of $x$ and $y$). Exactly one of $x,y$ is even; say $y$ is. Then $$x^{2}=m^{2}-n^{2},\qquad y^{2}=2mn,\qquad z=m^{2}+n^{2},$$ with $\gcd(m,n)=1$, $m>n>0$ and $m,n$ of opposite parity.\n\n**Step 3: second parametrisation.** The first equality reads $x^{2}+n^{2}=m^{2}$ — again a primitive triple. Here $x$ is odd (otherwise both $x$ and $y$ would be even), so $n$ is even and $$x=p^{2}-q^{2},\qquad n=2pq,\qquad m=p^{2}+q^{2},$$ with $\gcd(p,q)=1$, $p>q>0$.\n\n**Step 4: three coprime factors.** Substituting into $y^{2}=2mn$: $$y^{2}=2\,(p^{2}+q^{2})\cdot 2pq=4pq(p^{2}+q^{2}),\qquad\text{so}\qquad \Big(\frac{y}{2}\Big)^{2}=pq\,(p^{2}+q^{2}).$$ The numbers $p$, $q$ and $p^{2}+q^{2}$ are pairwise coprime: $\gcd(p,q)=1$, and a common prime of $p$ and $p^{2}+q^{2}$ would divide $q^{2}$. A product of pairwise coprime numbers is a square only when each factor is a square: $$p=a^{2},\qquad q=b^{2},\qquad p^{2}+q^{2}=c^{2}.$$\n\n**Step 5: descent.** Then $$a^{4}+b^{4}=p^{2}+q^{2}=c^{2},$$ so $(a,b,c)$ is a new solution of the original equation, and $$c\le c^{2}=p^{2}+q^{2}=m\le m^{2}<m^{2}+n^{2}=z .$$ We have found a solution with a smaller $z$ — contradicting the choice of the minimal one.\n\nSo there are no solutions. $\blacksquare$\n\n*Corollary.* The equation $x^{4}+y^{4}=w^{4}$ is also unsolvable (take $z=w^{2}$) — Fermat’s Last Theorem for exponent $4$, the only case Fermat himself proved.'}},

  {'src': 'IMO 1988, задача 6 / IMO 1988 Problem 6', 'lvl': 3,
   'q': {'ru': r'Пусть $a$ и $b$ — натуральные числа, для которых $ab+1$ делит $a^{2}+b^{2}$. Докажите, что $\dfrac{a^{2}+b^{2}}{ab+1}$ — точный квадрат.',
         'en': r'Let $a$ and $b$ be positive integers such that $ab+1$ divides $a^{2}+b^{2}$. Prove that $\dfrac{a^{2}+b^{2}}{ab+1}$ is a perfect square.'},
   'hint': {'ru': r'Зафиксируйте $k$ и посмотрите на $a^{2}-kab+b^{2}-k=0$ как на квадратное уравнение относительно $a$: у него есть второй корень.',
            'en': r'Fix $k$ and read $a^{2}-kab+b^{2}-k=0$ as a quadratic in $a$: it has a second root.'},
   'sol': {'ru': r'Пусть $k=\dfrac{a^{2}+b^{2}}{ab+1}$ — натуральное число. Тогда $$a^{2}+b^{2}=k(ab+1),\qquad\text{то есть}\qquad a^{2}-kab+b^{2}-k=0. \tag{$\ast$}$$\n\nПредположим, что $k$ **не** является точным квадратом, и среди всех пар $(a,b)$ натуральных чисел, удовлетворяющих $(\ast)$ с этим $k$, выберем пару с наименьшей суммой $a+b$. Не умаляя общности, $a\ge b$.\n\n**Второй корень.** Зафиксируем $b$ и $k$ и будем считать $(\ast)$ квадратным уравнением относительно первой переменной: $$t^{2}-(kb)\,t+(b^{2}-k)=0 .$$ Один его корень — $t_1=a$. По теореме Виета второй корень равен $$t_{2}=kb-a=\frac{b^{2}-k}{a}.$$ Первое выражение показывает, что $t_2$ **целое**; второе — что $t_2$ вместе с $b$ тоже удовлетворяет $(\ast)$.\n\n**$t_2$ не отрицательно.** Если бы $t_{2}<0$, то $$t_{2}^{2}-kbt_{2}+b^{2}-k\ \ge\ t_2^2+kb+b^{2}-k\ >\ 0,$$ так как $-kbt_2\ge kb$ при $t_2\le-1$ и $kb-k=k(b-1)\ge0$. Но это выражение равно нулю — противоречие. Значит $t_{2}\ge0$.\n\n**$t_2$ не равно нулю.** Если $t_{2}=0$, то из $(\ast)$ получаем $b^{2}=k$, то есть $k$ — точный квадрат, вопреки предположению.\n\n**Спуск.** Итак, $t_{2}$ — натуральное число и $(t_{2},b)$ — решение с тем же $k$. Оценим его: из $t_{2}=\dfrac{b^{2}-k}{a}$ и $a\ge b$ следует $$t_{2}\le\frac{b^{2}-k}{b}<b\le a,$$ поэтому $t_{2}+b<a+b$. Это противоречит минимальности выбранной пары.\n\nЗначит предположение неверно: $k$ обязан быть точным квадратом. $\blacksquare$\n\n*Замечание.* Приём называется **прыжком Виеты** (Vieta jumping) и родился именно на этой задаче. Пример: $a=8$, $b=2$ дают $\dfrac{64+4}{17}=4=2^{2}$.',
           'en': r'Let $k=\dfrac{a^{2}+b^{2}}{ab+1}$ be a positive integer. Then $$a^{2}+b^{2}=k(ab+1),\qquad\text{that is}\qquad a^{2}-kab+b^{2}-k=0. \tag{$\ast$}$$\n\nSuppose $k$ is **not** a perfect square, and among all pairs $(a,b)$ of positive integers satisfying $(\ast)$ with this $k$, choose one with the smallest sum $a+b$. Without loss of generality $a\ge b$.\n\n**The second root.** Fix $b$ and $k$ and read $(\ast)$ as a quadratic in the first variable: $$t^{2}-(kb)\,t+(b^{2}-k)=0 .$$ One root is $t_1=a$. By Vieta the other root is $$t_{2}=kb-a=\frac{b^{2}-k}{a}.$$ The first expression shows $t_2$ is an **integer**; the second shows that $t_2$ together with $b$ also satisfies $(\ast)$.\n\n**$t_2$ is not negative.** If $t_{2}<0$ then $$t_{2}^{2}-kbt_{2}+b^{2}-k\ \ge\ t_2^2+kb+b^{2}-k\ >\ 0,$$ since $-kbt_2\ge kb$ when $t_2\le-1$ and $kb-k=k(b-1)\ge0$. But that expression is zero — contradiction. So $t_{2}\ge0$.\n\n**$t_2$ is not zero.** If $t_{2}=0$ then $(\ast)$ gives $b^{2}=k$, making $k$ a perfect square, against our assumption.\n\n**Descent.** So $t_{2}$ is a positive integer and $(t_{2},b)$ is a solution with the same $k$. Bounding it: from $t_{2}=\dfrac{b^{2}-k}{a}$ and $a\ge b$, $$t_{2}\le\frac{b^{2}-k}{b}<b\le a,$$ hence $t_{2}+b<a+b$. This contradicts the minimality of the chosen pair.\n\nSo the assumption fails and $k$ must be a perfect square. $\blacksquare$\n\n*Remark.* The technique is called **Vieta jumping**, and it was born on this very problem. Example: $a=8$, $b=2$ give $\dfrac{64+4}{17}=4=2^{2}$.'}},
 ],
}
