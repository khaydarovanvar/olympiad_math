/* Topic 4 — generated from content/lesson_04.py, do not edit by hand. */
window.LESSONS = window.LESSONS || {};
window.LESSONS[4] = {
 "n": 4,
 "cat": "nt",
 "title": {
  "ru": "Диофантовы уравнения",
  "en": "Diophantine equations"
 },
 "sub": {
  "ru": "Уравнения, у которых ответ обязан быть целым: линейный случай, разложение на множители, оценки, остатки и бесконечный спуск.",
  "en": "Equations whose answers must be whole numbers: the linear case, factoring, bounding, remainders and infinite descent."
 },
 "goals": {
  "ru": [
   "Решать линейное уравнение $ax+by=c$ в целых числах и выписывать все решения.",
   "Сводить уравнение к виду «произведение равно числу» и перебирать делители.",
   "Ограничивать переменные оценками, чтобы случаев осталось конечное число.",
   "Доказывать отсутствие решений остатками и методом бесконечного спуска."
  ],
  "en": [
   "Solve the linear equation $ax+by=c$ in integers and write down every solution.",
   "Turn an equation into \"a product equals a number\" and run through the divisors.",
   "Bound the variables so that only finitely many cases are left.",
   "Prove that no solutions exist, using remainders and infinite descent."
  ]
 },
 "sections": [
  {
   "h": {
    "ru": "Что это за уравнения",
    "en": "What these equations are"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Уравнение $2x+3y=12$ на уроке алгебры имеет бесконечно много решений: возьмите любое $x$ и выразите $y$. Но если потребовать, чтобы $x$ и $y$ были **целыми**, задача становится совсем другой — и гораздо интереснее. Именно такие задачи и составляют половину олимпиадной теории чисел.",
      "en": "In an algebra lesson the equation $2x+3y=12$ has infinitely many solutions: pick any $x$ and solve for $y$. But if $x$ and $y$ are required to be **integers**, the problem becomes a completely different one — and far more interesting. Problems of exactly this kind make up half of olympiad number theory."
     }
    },
    {
     "t": "def",
     "name": {
      "ru": "Диофантово уравнение",
      "en": "Diophantine equation"
     },
     "text": {
      "ru": "**Диофантовым** называют уравнение (или систему) с целыми коэффициентами, решения которого ищут **среди целых чисел** — иногда среди натуральных. Само уравнение может быть каким угодно; диофантовым его делает требование к ответу.",
      "en": "A **Diophantine** equation (or system) is one with integer coefficients whose solutions are sought **among the integers** — sometimes among the positive integers. The equation itself can be anything; what makes it Diophantine is the demand placed on the answer."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Название — в честь Диофанта Александрийского, математика III века. Его «Арифметика» — первая книга, где такие задачи решают систематически. На полях именно этой книги Ферма и записал свою знаменитую заметку про $x^n+y^n=z^n$.",
      "en": "The name honours Diophantus of Alexandria, a third-century mathematician. His *Arithmetica* is the first book to treat such problems systematically. It was in the margin of that very book that Fermat wrote his famous note about $x^n+y^n=z^n$."
     }
    },
    {
     "t": "p",
     "text": {
      "ru": "В олимпиадной задаче спрашивают одну из трёх вещей: **есть ли решения**, **сколько их**, или **найдите все**. Третий вопрос самый честный: ответ засчитывают, только если вы и предъявили решения, и доказали, что других нет.",
      "en": "An olympiad problem asks one of three things: **are there solutions**, **how many are there**, or **find them all**. The third is the most demanding: you get the marks only if you both exhibit the solutions and prove there are no others."
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Весь арсенал сводится к пяти приёмам, и почти каждая задача берётся одним из них:\n\n**1)** линейное уравнение — теория НОД;\n**2)** разложить на множители и перебрать делители;\n**3)** оценить переменные сверху и снизу;\n**4)** взять остаток по удачному модулю и получить противоречие;\n**5)** бесконечный спуск.\n\nПорядок в списке — это и порядок, в котором стоит их пробовать.",
      "en": "The whole arsenal comes down to five moves, and almost every problem falls to one of them:\n\n**1)** a linear equation — use GCD theory;\n**2)** factor it and run through the divisors;\n**3)** bound the variables above and below;\n**4)** take remainders modulo a well-chosen number and reach a contradiction;\n**5)** infinite descent.\n\nThe order of the list is also the order in which to try them."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Линейное уравнение $ax+by=c$",
    "en": "The linear equation $ax+by=c$"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Это единственный класс, который решён полностью: есть критерий разрешимости и формула для всех решений. Всё держится на одном факте из темы о НОД: числа вида $ax+by$ — это в точности числа, кратные $\\gcd(a,b)$.",
      "en": "This is the one class that is completely solved: there is a criterion for solvability and a formula for every solution. It all rests on one fact from the GCD topic: the numbers of the form $ax+by$ are exactly the multiples of $\\gcd(a,b)$."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Критерий разрешимости",
      "en": "Criterion for solvability"
     },
     "text": {
      "ru": "Пусть $a,b$ не равны нулю одновременно и $d=\\gcd(a,b)$. Уравнение $ax+by=c$ имеет решение в целых числах **тогда и только тогда, когда** $d\\mid c$.",
      "en": "Let $a,b$ be not both zero and put $d=\\gcd(a,b)$. The equation $ax+by=c$ has an integer solution **if and only if** $d\\mid c$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Необходимость.** Если $ax+by=c$, то $d$ делит $a$ и $b$, значит делит и $ax+by=c$.\n\n**Достаточность.** По соотношению Безу найдутся целые $u,v$ с $au+bv=d$. Пусть $c=dk$. Умножим на $k$: $$a(uk)+b(vk)=dk=c,$$ то есть пара $x=uk$, $y=vk$ — решение. $\\blacksquare$",
      "en": "**Necessity.** If $ax+by=c$ then $d$ divides both $a$ and $b$, hence divides $ax+by=c$.\n\n**Sufficiency.** By Bezout there are integers $u,v$ with $au+bv=d$. Write $c=dk$ and multiply by $k$: $$a(uk)+b(vk)=dk=c,$$ so $x=uk$, $y=vk$ is a solution. $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Все решения сразу",
      "en": "Every solution at once"
     },
     "text": {
      "ru": "Пусть $d=\\gcd(a,b)$ делит $c$ и пусть $(x_0,y_0)$ — какое-нибудь одно решение. Тогда все целые решения даются формулой $$x=x_0+\\frac{b}{d}\\,t,\\qquad y=y_0-\\frac{a}{d}\\,t,\\qquad t\\in\\mathbb{Z},$$ и разным $t$ отвечают разные решения.",
      "en": "Let $d=\\gcd(a,b)$ divide $c$ and let $(x_0,y_0)$ be any one solution. Then every integer solution is given by $$x=x_0+\\frac{b}{d}\\,t,\\qquad y=y_0-\\frac{a}{d}\\,t,\\qquad t\\in\\mathbb{Z},$$ and different values of $t$ give different solutions."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Подстановка показывает, что каждая такая пара подходит: $$a\\Big(x_0+\\frac{b}{d}t\\Big)+b\\Big(y_0-\\frac{a}{d}t\\Big)=ax_0+by_0+\\frac{abt}{d}-\\frac{abt}{d}=c.$$ Обратно, пусть $(x,y)$ — решение. Вычтем равенства $ax+by=c$ и $ax_0+by_0=c$: $$a(x-x_0)=-b(y-y_0).$$ Поделим на $d$ и обозначим $a_1=a/d$, $b_1=b/d$; тогда $\\gcd(a_1,b_1)=1$ и $a_1(x-x_0)=-b_1(y-y_0)$. Значит $b_1$ делит $a_1(x-x_0)$, а так как $b_1$ взаимно просто с $a_1$, то $b_1\\mid x-x_0$. Запишем $x-x_0=b_1t$; подставив, получаем $y-y_0=-a_1t$. Это и есть формула. $\\blacksquare$",
      "en": "Substitution shows each such pair works: $$a\\Big(x_0+\\frac{b}{d}t\\Big)+b\\Big(y_0-\\frac{a}{d}t\\Big)=ax_0+by_0+\\frac{abt}{d}-\\frac{abt}{d}=c.$$ Conversely, let $(x,y)$ be a solution. Subtract $ax_0+by_0=c$ from $ax+by=c$: $$a(x-x_0)=-b(y-y_0).$$ Divide by $d$ and write $a_1=a/d$, $b_1=b/d$; then $\\gcd(a_1,b_1)=1$ and $a_1(x-x_0)=-b_1(y-y_0)$. So $b_1$ divides $a_1(x-x_0)$, and since $b_1$ is coprime to $a_1$ we get $b_1\\mid x-x_0$. Write $x-x_0=b_1t$; substituting gives $y-y_0=-a_1t$, which is the formula. $\\blacksquare$"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "На олимпиаде алгоритм Евклида обычно не нужен: одно решение проще угадать, взяв остатки. Из $ax+by=c$ следует $ax\\equiv c\\pmod{b}$ — а это уже одно уравнение с одной неизвестной по маленькому модулю.",
      "en": "In a competition you rarely need the Euclidean algorithm: it is quicker to spot one solution using remainders. From $ax+by=c$ we get $ax\\equiv c\\pmod{b}$ — one equation in one unknown, modulo something small."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите все целые решения уравнения $7x+11y=100$, а затем все решения в неотрицательных целых числах.",
      "en": "Find all integer solutions of $7x+11y=100$, and then all solutions in non-negative integers."
     },
     "steps": {
      "ru": [
       "$\\gcd(7,11)=1$ и $1\\mid100$, значит решения есть.",
       "Ищем одно решение по модулю $7$: $11y\\equiv100\\pmod 7$, то есть $4y\\equiv2\\pmod7$. Умножим на $2$: $8y\\equiv4$, а $8\\equiv1$, значит $y\\equiv4\\pmod7$.",
       "Берём $y_0=4$: тогда $7x=100-44=56$, откуда $x_0=8$. Проверка: $56+44=100$ ✓",
       "По теореме все решения: $x=8+11t$, $y=4-7t$, где $t\\in\\mathbb{Z}$.",
       "Требуем $x\\ge0$ и $y\\ge0$: из $8+11t\\ge0$ получаем $t\\ge-\\tfrac{8}{11}$, то есть $t\\ge0$; из $4-7t\\ge0$ получаем $t\\le\\tfrac47$, то есть $t\\le0$.",
       "Остаётся единственное $t=0$."
      ],
      "en": [
       "$\\gcd(7,11)=1$ and $1\\mid100$, so solutions exist.",
       "Find one solution modulo $7$: $11y\\equiv100\\pmod 7$, that is $4y\\equiv2\\pmod7$. Multiply by $2$: $8y\\equiv4$, and $8\\equiv1$, so $y\\equiv4\\pmod7$.",
       "Take $y_0=4$: then $7x=100-44=56$, so $x_0=8$. Check: $56+44=100$ ✓",
       "By the theorem every solution is $x=8+11t$, $y=4-7t$ with $t\\in\\mathbb{Z}$.",
       "Ask for $x\\ge0$ and $y\\ge0$: from $8+11t\\ge0$ we get $t\\ge-\\tfrac{8}{11}$, i.e. $t\\ge0$; from $4-7t\\ge0$ we get $t\\le\\tfrac47$, i.e. $t\\le0$.",
       "Only $t=0$ survives."
      ]
     },
     "ans": {
      "ru": "Все целые решения: $(8+11t,\\;4-7t)$, $t\\in\\mathbb{Z}$. В неотрицательных числах решение единственно: $(8,4)$.",
      "en": "All integer solutions: $(8+11t,\\;4-7t)$, $t\\in\\mathbb{Z}$. In non-negative integers the solution is unique: $(8,4)$."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Обратите внимание на структуру ответа: целых решений бесконечно много, они идут с шагом $11$ по $x$ и $-7$ по $y$; а условие неотрицательности вырезает из этой прогрессии короткий отрезок. Почти все «денежные» задачи («сколько монет по 7 и по 11 сум») устроены именно так.",
      "en": "Look at the shape of the answer: there are infinitely many integer solutions, spaced $11$ apart in $x$ and $-7$ in $y$; the non-negativity condition then cuts a short stretch out of that progression. Almost every \"coins and change\" problem works exactly like this."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Разложение на множители",
    "en": "Factoring"
   },
   "blocks": [
    {
     "t": "idea",
     "text": {
      "ru": "Главный приём всей темы. Если уравнение удалось привести к виду $$(\\text{целое})\\cdot(\\text{целое})=N,$$ то дальше работает арифметика: множители — делители числа $N$, а делителей у $N$ конечное число. Задача превращается в перебор.",
      "en": "The central move of the whole topic. If the equation can be brought to the form $$(\\text{integer})\\cdot(\\text{integer})=N,$$ arithmetic takes over: the factors are divisors of $N$, and $N$ has only finitely many divisors. The problem becomes a finite check."
     }
    },
    {
     "t": "p",
     "text": {
      "ru": "Когда в уравнении есть слагаемое $xy$ и линейные слагаемые, помогает **добавление константы**. Тождество, которое стоит выучить наизусть:",
      "en": "When the equation has an $xy$ term together with linear terms, **adding a constant** does the job. The identity worth memorising is:"
     }
    },
    {
     "t": "eq",
     "tex": "xy+ax+by=(x+b)(y+a)-ab"
    },
    {
     "t": "p",
     "text": {
      "ru": "Проверьте раскрытием скобок: $(x+b)(y+a)=xy+ax+by+ab$. Значит, чтобы разложить левую часть, достаточно прибавить к обеим частям уравнения число $ab$.",
      "en": "Check by expanding: $(x+b)(y+a)=xy+ax+by+ab$. So to factor the left side it is enough to add $ab$ to both sides of the equation."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите все пары целых чисел с $xy+2x-3y=17$.",
      "en": "Find every pair of integers with $xy+2x-3y=17$."
     },
     "steps": {
      "ru": [
       "Здесь $a=2$, $b=-3$, поэтому $ab=-6$ и $xy+2x-3y=(x-3)(y+2)+6$.",
       "Уравнение превращается в $(x-3)(y+2)=11$.",
       "Число $11$ простое, поэтому пара множителей — одна из четырёх: $(1,11),(11,1),(-1,-11),(-11,-1)$.",
       "$x-3=1,\\;y+2=11\\Rightarrow(4,9)$; $x-3=11,\\;y+2=1\\Rightarrow(14,-1)$;",
       "$x-3=-1,\\;y+2=-11\\Rightarrow(2,-13)$; $x-3=-11,\\;y+2=-1\\Rightarrow(-8,-3)$.",
       "Проверим одну пару: $x=14,y=-1$ даёт $-14+28+3=17$ ✓"
      ],
      "en": [
       "Here $a=2$, $b=-3$, so $ab=-6$ and $xy+2x-3y=(x-3)(y+2)+6$.",
       "The equation becomes $(x-3)(y+2)=11$.",
       "Since $11$ is prime the pair of factors is one of four: $(1,11),(11,1),(-1,-11),(-11,-1)$.",
       "$x-3=1,\\;y+2=11\\Rightarrow(4,9)$; $x-3=11,\\;y+2=1\\Rightarrow(14,-1)$;",
       "$x-3=-1,\\;y+2=-11\\Rightarrow(2,-13)$; $x-3=-11,\\;y+2=-1\\Rightarrow(-8,-3)$.",
       "Check one pair: $x=14,y=-1$ gives $-14+28+3=17$ ✓"
      ]
     },
     "ans": {
      "ru": "$(4,9),\\;(14,-1),\\;(2,-13),\\;(-8,-3)$.",
      "en": "$(4,9),\\;(14,-1),\\;(2,-13),\\;(-8,-3)$."
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Самая частая потеря баллов в этой теме: перебрали только **положительные** делители, хотя в условии сказано «в целых числах». У числа $11$ четыре делителя, а не два: $\\pm1,\\pm11$. Если же в условии стоит «в натуральных», отрицательные случаи, наоборот, надо отбросить — но написать, почему.",
      "en": "The commonest way to lose marks here: running through only the **positive** divisors when the problem says \"in integers\". The number $11$ has four divisors, not two: $\\pm1,\\pm11$. If the problem says \"in positive integers\" then the negative cases must be discarded instead — but say why."
     }
    },
    {
     "t": "p",
     "text": {
      "ru": "Тот же приём решает все уравнения с дробями вида $\\dfrac1x+\\dfrac1y=\\dfrac1n$. Приведём к общему знаменателю: $n(x+y)=xy$, то есть $xy-nx-ny=0$. Прибавим $n^2$:",
      "en": "The same move settles every fraction equation of the form $\\dfrac1x+\\dfrac1y=\\dfrac1n$. Clear denominators: $n(x+y)=xy$, that is $xy-nx-ny=0$. Add $n^2$:"
     }
    },
    {
     "t": "eq",
     "tex": "(x-n)(y-n)=n^{2}"
    },
    {
     "t": "ex",
     "q": {
      "ru": "Сколько пар натуральных чисел $(x,y)$ удовлетворяют равенству $\\dfrac1x+\\dfrac1y=\\dfrac1{12}$?",
      "en": "How many pairs of positive integers $(x,y)$ satisfy $\\dfrac1x+\\dfrac1y=\\dfrac1{12}$?"
     },
     "steps": {
      "ru": [
       "По формуле выше $(x-12)(y-12)=144$.",
       "Если $x\\le12$, то $\\tfrac1x\\ge\\tfrac1{12}$ и на $\\tfrac1y>0$ уже не остаётся места. Значит $x>12$ и $y>12$, то есть оба множителя положительны.",
       "Каждому положительному делителю $d$ числа $144$ отвечает ровно одна пара: $x=12+d$, $y=12+\\tfrac{144}{d}$.",
       "$144=2^4\\cdot3^2$, поэтому число делителей равно $(4+1)(2+1)=15$.",
       "Например, $d=1$ даёт $(13,156)$, а $d=12$ — «квадратную» пару $(24,24)$."
      ],
      "en": [
       "By the formula above, $(x-12)(y-12)=144$.",
       "If $x\\le12$ then $\\tfrac1x\\ge\\tfrac1{12}$ and there is no room left for $\\tfrac1y>0$. So $x>12$ and $y>12$, meaning both factors are positive.",
       "Each positive divisor $d$ of $144$ gives exactly one pair: $x=12+d$, $y=12+\\tfrac{144}{d}$.",
       "$144=2^4\\cdot3^2$, so the number of divisors is $(4+1)(2+1)=15$.",
       "For instance $d=1$ gives $(13,156)$, and $d=12$ gives the \"square\" pair $(24,24)$."
      ]
     },
     "ans": {
      "ru": "$15$ пар (если пары $(x,y)$ и $(y,x)$ считать разными).",
      "en": "$15$ pairs (counting $(x,y)$ and $(y,x)$ as different)."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Оценки: как загнать переменные в клетку",
    "en": "Bounding: caging the variables"
   },
   "blocks": [
    {
     "t": "idea",
     "text": {
      "ru": "Если переменные симметричны, введите порядок — например $x\\le y\\le z$ — и оцените **самую маленькую** из них. Тогда для неё останется несколько значений, каждое из которых разбирается отдельно. Это самый надёжный способ превратить бесконечный поиск в конечный.",
      "en": "If the variables are symmetric, impose an order — say $x\\le y\\le z$ — and bound the **smallest** one. Only a few values are then left for it, and each is handled separately. This is the most reliable way to turn an infinite search into a finite one."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите все тройки натуральных чисел с $\\dfrac1x+\\dfrac1y+\\dfrac1z=1$.",
      "en": "Find every triple of positive integers with $\\dfrac1x+\\dfrac1y+\\dfrac1z=1$."
     },
     "steps": {
      "ru": [
       "Уравнение симметрично, поэтому считаем $x\\le y\\le z$ и в конце допишем перестановки.",
       "Тогда $\\tfrac1x$ — самая большая из трёх дробей, значит $1=\\tfrac1x+\\tfrac1y+\\tfrac1z\\le\\tfrac3x$, откуда $x\\le3$.",
       "С другой стороны $\\tfrac1x<1$, то есть $x\\ge2$. Остаются $x=2$ и $x=3$.",
       "**$x=3$:** тогда $\\tfrac1y+\\tfrac1z=\\tfrac23$ и $\\tfrac23\\le\\tfrac2y$, то есть $y\\le3$; но $y\\ge x=3$, значит $y=3$ и $z=3$. Тройка $(3,3,3)$.",
       "**$x=2$:** тогда $\\tfrac1y+\\tfrac1z=\\tfrac12$, и по формуле разложения $(y-2)(z-2)=4$.",
       "Положительные пары делителей $4$ с $y\\le z$: $(1,4)$ и $(2,2)$, что даёт $(y,z)=(3,6)$ и $(4,4)$.",
       "Итого три тройки с точностью до порядка."
      ],
      "en": [
       "The equation is symmetric, so assume $x\\le y\\le z$ and add the permutations at the end.",
       "Then $\\tfrac1x$ is the largest of the three fractions, so $1=\\tfrac1x+\\tfrac1y+\\tfrac1z\\le\\tfrac3x$, giving $x\\le3$.",
       "On the other hand $\\tfrac1x<1$, so $x\\ge2$. Only $x=2$ and $x=3$ remain.",
       "**$x=3$:** then $\\tfrac1y+\\tfrac1z=\\tfrac23$ and $\\tfrac23\\le\\tfrac2y$, so $y\\le3$; but $y\\ge x=3$, hence $y=3$ and $z=3$. The triple $(3,3,3)$.",
       "**$x=2$:** then $\\tfrac1y+\\tfrac1z=\\tfrac12$, and by the factoring formula $(y-2)(z-2)=4$.",
       "The positive divisor pairs of $4$ with $y\\le z$ are $(1,4)$ and $(2,2)$, giving $(y,z)=(3,6)$ and $(4,4)$.",
       "So there are three triples up to order."
      ]
     },
     "ans": {
      "ru": "$(3,3,3)$, $(2,4,4)$, $(2,3,6)$ и их перестановки.",
      "en": "$(3,3,3)$, $(2,4,4)$, $(2,3,6)$ and their permutations."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Зажать между соседними квадратами",
      "en": "Squeeze between neighbouring squares"
     },
     "text": {
      "ru": "Второй вид оценки. Если требуется, чтобы выражение $f(n)$ было точным квадратом, попробуйте показать, что при больших $n$ оно строго лежит **между двумя соседними квадратами**: $$k^2<f(n)<(k+1)^2 .$$ Между ними квадратов нет, значит больших $n$ не бывает — и остаётся проверить несколько маленьких.",
      "en": "The second kind of bound. If some expression $f(n)$ is required to be a perfect square, try to show that for large $n$ it lies strictly **between two neighbouring squares**: $$k^2<f(n)<(k+1)^2 .$$ There is no square in between, so large $n$ are impossible — and only a few small ones are left to check."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "При каких натуральных $n$ число $n^{2}+2n+4$ является точным квадратом?",
      "en": "For which positive integers $n$ is $n^{2}+2n+4$ a perfect square?"
     },
     "steps": {
      "ru": [
       "Ближайший квадрат снизу — $(n+1)^2=n^2+2n+1$. Разность равна $3>0$, значит $n^2+2n+4>(n+1)^2$.",
       "Ближайший сверху — $(n+2)^2=n^2+4n+4$. Разность равна $2n>0$ при $n\\ge1$, значит $n^2+2n+4<(n+2)^2$.",
       "Итак, $(n+1)^2<n^2+2n+4<(n+2)^2$ при всех $n\\ge1$.",
       "Между соседними квадратами $(n+1)^2$ и $(n+2)^2$ точных квадратов нет."
      ],
      "en": [
       "The nearest square below is $(n+1)^2=n^2+2n+1$. The difference is $3>0$, so $n^2+2n+4>(n+1)^2$.",
       "The nearest above is $(n+2)^2=n^2+4n+4$. The difference is $2n>0$ for $n\\ge1$, so $n^2+2n+4<(n+2)^2$.",
       "Hence $(n+1)^2<n^2+2n+4<(n+2)^2$ for every $n\\ge1$.",
       "There is no perfect square strictly between the neighbouring squares $(n+1)^2$ and $(n+2)^2$."
      ]
     },
     "ans": {
      "ru": "Ни при каких натуральных $n$. (При $n=0$ получается $4=2^2$.)",
      "en": "For no positive integer $n$. (At $n=0$ it equals $4=2^2$.)"
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Остатки как сито",
    "en": "Remainders as a sieve"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Чтобы доказать, что решений **нет**, чаще всего берут остатки. Идея простая: если равенство верно в целых числах, оно верно и по любому модулю. Достаточно найти модуль, по которому левая и правая части никогда не совпадают.",
      "en": "To prove that there are **no** solutions, remainders are the usual tool. The idea is simple: if an equality holds in the integers it holds modulo anything. It is enough to find a modulus for which the two sides never agree."
     }
    },
    {
     "t": "p",
     "text": {
      "ru": "Работает это потому, что степени принимают очень мало остатков. Вот таблица, которую стоит держать в голове:",
      "en": "It works because powers take very few remainders. Here is the table worth carrying in your head:"
     }
    },
    {
     "t": "table",
     "head": {
      "ru": [
       "Выражение",
       "Модуль",
       "Какие остатки возможны"
      ],
      "en": [
       "Expression",
       "Modulus",
       "Possible remainders"
      ]
     },
     "rows": {
      "ru": [
       [
        "$n^2$",
        "$3$",
        "$0,1$"
       ],
       [
        "$n^2$",
        "$4$",
        "$0,1$"
       ],
       [
        "$n^2$",
        "$5$",
        "$0,1,4$"
       ],
       [
        "$n^2$",
        "$8$",
        "$0,1,4$"
       ],
       [
        "$n^2$",
        "$16$",
        "$0,1,4,9$"
       ],
       [
        "$n^3$",
        "$7$",
        "$0,1,6$"
       ],
       [
        "$n^3$",
        "$9$",
        "$0,1,8$"
       ],
       [
        "$n^4$",
        "$16$",
        "$0,1$"
       ]
      ],
      "en": [
       [
        "$n^2$",
        "$3$",
        "$0,1$"
       ],
       [
        "$n^2$",
        "$4$",
        "$0,1$"
       ],
       [
        "$n^2$",
        "$5$",
        "$0,1,4$"
       ],
       [
        "$n^2$",
        "$8$",
        "$0,1,4$"
       ],
       [
        "$n^2$",
        "$16$",
        "$0,1,4,9$"
       ],
       [
        "$n^3$",
        "$7$",
        "$0,1,6$"
       ],
       [
        "$n^3$",
        "$9$",
        "$0,1,8$"
       ],
       [
        "$n^4$",
        "$16$",
        "$0,1$"
       ]
      ]
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Каждую строку проверяют за минуту: достаточно возвести в нужную степень числа $0,1,\\dots,m-1$. Например, для $n^2$ по модулю $8$: $0,1,4,9\\equiv1,16\\equiv0,25\\equiv1,36\\equiv4,49\\equiv1$ — всего три значения $0,1,4$.",
      "en": "Each row takes a minute to verify: just raise $0,1,\\dots,m-1$ to the required power. For $n^2$ modulo $8$: $0,1,4,9\\equiv1,16\\equiv0,25\\equiv1,36\\equiv4,49\\equiv1$ — only the three values $0,1,4$."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Докажите, что уравнение $x^{2}-3y^{2}=5$ не имеет решений в целых числах.",
      "en": "Prove that $x^{2}-3y^{2}=5$ has no integer solutions."
     },
     "steps": {
      "ru": [
       "Возьмём модуль $3$: слагаемое $3y^2$ исчезает, и остаётся $x^2\\equiv5\\pmod3$.",
       "$5=3+2$, значит требуется $x^2\\equiv2\\pmod3$.",
       "Но квадрат по модулю $3$ даёт только $0$ или $1$ (таблица выше).",
       "Остатка $2$ квадрат дать не может — противоречие."
      ],
      "en": [
       "Take modulus $3$: the term $3y^2$ disappears and we are left with $x^2\\equiv5\\pmod3$.",
       "$5=3+2$, so we need $x^2\\equiv2\\pmod3$.",
       "But a square modulo $3$ is only $0$ or $1$ (see the table).",
       "A square can never leave remainder $2$ — contradiction."
      ]
     },
     "ans": {
      "ru": "Решений нет. $\\blacksquare$",
      "en": "There are no solutions. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Докажите, что $2023$ нельзя представить в виде суммы двух точных квадратов.",
      "en": "Prove that $2023$ is not a sum of two perfect squares."
     },
     "steps": {
      "ru": [
       "Пусть $x^2+y^2=2023$. Возьмём модуль $4$.",
       "Каждый квадрат по модулю $4$ равен $0$ или $1$, поэтому сумма двух квадратов даёт $0$, $1$ или $2$.",
       "Остаток $3$ по модулю $4$ недостижим.",
       "А $2023=4\\cdot505+3$, то есть $2023\\equiv3\\pmod4$."
      ],
      "en": [
       "Suppose $x^2+y^2=2023$ and take modulus $4$.",
       "Every square is $0$ or $1$ modulo $4$, so a sum of two squares is $0$, $1$ or $2$.",
       "The remainder $3$ modulo $4$ is out of reach.",
       "But $2023=4\\cdot505+3$, that is $2023\\equiv3\\pmod4$."
      ]
     },
     "ans": {
      "ru": "Представления нет. $\\blacksquare$",
      "en": "No such representation exists. $\\blacksquare$"
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Остатки умеют доказывать только **отсутствие** решений. Если по всем модулям противоречия нет, это ещё ничего не значит: уравнение $x^2-2y^2=7$ проходит любую проверку по модулю, но и решения у него есть ($x=3,y=1$). Не пишите «противоречия не нашлось, значит решения есть» — это не доказательство.",
      "en": "Remainders can only prove that solutions are **absent**. If no modulus gives a contradiction, that alone proves nothing: the equation $x^2-2y^2=7$ survives every modular test — and it does have solutions ($x=3,y=1$). Never write \"no contradiction was found, so a solution exists\" — that is not a proof."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Пифагоровы тройки",
    "en": "Pythagorean triples"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Уравнение $x^{2}+y^{2}=z^{2}$ — самое знаменитое диофантово уравнение. Его решения известны полностью, и вывод формулы — образец того, как разложение на множители и взаимная простота вместе решают задачу.",
      "en": "The equation $x^{2}+y^{2}=z^{2}$ is the most famous Diophantine equation of all. Its solutions are known completely, and deriving them shows how factorisation and coprimality together finish a problem."
     }
    },
    {
     "t": "def",
     "name": {
      "ru": "Примитивная тройка",
      "en": "Primitive triple"
     },
     "text": {
      "ru": "Тройка натуральных чисел $(x,y,z)$ с $x^{2}+y^{2}=z^{2}$ называется **примитивной**, если $\\gcd(x,y,z)=1$. Любая тройка получается из примитивной умножением на общий множитель, поэтому достаточно описать примитивные.",
      "en": "A triple of positive integers $(x,y,z)$ with $x^{2}+y^{2}=z^{2}$ is **primitive** if $\\gcd(x,y,z)=1$. Every triple is a primitive one scaled by a common factor, so it suffices to describe the primitive ones."
     }
    },
    {
     "t": "lemma",
     "name": {
      "ru": "Чётности в примитивной тройке",
      "en": "Parities in a primitive triple"
     },
     "text": {
      "ru": "В примитивной тройке ровно одно из чисел $x,y$ чётно, а $z$ нечётно.",
      "en": "In a primitive triple exactly one of $x,y$ is even, and $z$ is odd."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Оба чётными быть не могут:** тогда $z^{2}=x^{2}+y^{2}$ было бы чётно, значит и $z$ чётно, и $\\gcd(x,y,z)\\ge2$ ✗\n\n**Оба нечётными тоже:** квадрат нечётного числа даёт остаток $1$ по модулю $4$, поэтому $$z^{2}=x^{2}+y^{2}\\equiv1+1=2\\pmod4 .$$ Но квадрат сравним с $0$ или $1$ по модулю $4$, а не с $2$ ✗\n\nЗначит ровно одно из $x,y$ чётно, и тогда $z^{2}\\equiv0+1=1\\pmod4$, то есть $z$ нечётно. $\\blacksquare$",
      "en": "**They cannot both be even:** then $z^{2}=x^{2}+y^{2}$ would be even, so $z$ would be even and $\\gcd(x,y,z)\\ge2$ ✗\n\n**Nor both odd:** the square of an odd number is $1$ mod $4$, so $$z^{2}=x^{2}+y^{2}\\equiv2\\pmod4 .$$ But a square is $0$ or $1$ mod $4$, never $2$ ✗\n\nSo exactly one of $x,y$ is even, and then $z^{2}\\equiv1\\pmod4$, making $z$ odd. $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Описание всех примитивных троек",
      "en": "All primitive triples"
     },
     "text": {
      "ru": "Примитивные тройки с чётным $x$ — это в точности $$x=2mn,\\qquad y=m^{2}-n^{2},\\qquad z=m^{2}+n^{2},$$ где $m>n>0$, $\\gcd(m,n)=1$ и числа $m,n$ разной чётности. Разным парам $(m,n)$ отвечают разные тройки.",
      "en": "The primitive triples with $x$ even are exactly $$x=2mn,\\qquad y=m^{2}-n^{2},\\qquad z=m^{2}+n^{2},$$ with $m>n>0$, $\\gcd(m,n)=1$ and $m,n$ of opposite parity. Different pairs $(m,n)$ give different triples."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Эти тройки подходят.** Проверим прямо: $$(2mn)^{2}+\\left(m^{2}-n^{2}\\right)^{2}=4m^{2}n^{2}+m^{4}-2m^{2}n^{2}+n^{4}=m^{4}+2m^{2}n^{2}+n^{4}=\\left(m^{2}+n^{2}\\right)^{2} \\quad\\checkmark$$\n\n**Других нет.** Пусть $(x,y,z)$ примитивна и $x$ чётно. Перепишем уравнение: $$x^{2}=z^{2}-y^{2}=(z-y)(z+y).$$\n\nПо лемме $y$ и $z$ нечётны, значит $z-y$ и $z+y$ чётны. Положим $$u=\\frac{z-y}{2},\\qquad v=\\frac{z+y}{2},\\qquad\\text{тогда}\\qquad uv=\\left(\\frac x2\\right)^{2} .$$\n\n**Числа $u$ и $v$ взаимно просты.** Общий делитель $d$ делит их сумму $z$ и разность $y$. Но $\\gcd(y,z)=1$: общий делитель $y$ и $z$ делил бы и $x^{2}=z^{2}-y^{2}$, а значит и $x$, вопреки примитивности. Значит $d=1$.\n\n**Взаимно простые множители полного квадрата — сами квадраты.** Отсюда $$u=n^{2},\\qquad v=m^{2}$$ для некоторых натуральных $m>n>0$ с $\\gcd(m,n)=1$.\n\nВозвращаясь, $$z=v+u=m^{2}+n^{2},\\qquad y=v-u=m^{2}-n^{2},\\qquad x=2\\sqrt{uv}=2mn .$$\n\nНаконец, нечётность $y=m^{2}-n^{2}$ требует, чтобы $m$ и $n$ имели разную чётность. $\\blacksquare$",
      "en": "**These triples work.** Check directly: $$(2mn)^{2}+\\left(m^{2}-n^{2}\\right)^{2}=m^{4}+2m^{2}n^{2}+n^{4}=\\left(m^{2}+n^{2}\\right)^{2} \\quad\\checkmark$$\n\n**There are no others.** Let $(x,y,z)$ be primitive with $x$ even. Rewrite the equation: $$x^{2}=z^{2}-y^{2}=(z-y)(z+y).$$\n\nBy the lemma $y$ and $z$ are odd, so $z-y$ and $z+y$ are even. Put $$u=\\frac{z-y}{2},\\qquad v=\\frac{z+y}{2},\\qquad\\text{so}\\qquad uv=\\left(\\frac x2\\right)^{2} .$$\n\n**The numbers $u,v$ are coprime.** A common divisor $d$ divides their sum $z$ and difference $y$. But $\\gcd(y,z)=1$: a common divisor of $y$ and $z$ would divide $x^{2}=z^{2}-y^{2}$, hence $x$, against primitivity. So $d=1$.\n\n**Coprime factors of a perfect square are themselves squares.** Hence $$u=n^{2},\\qquad v=m^{2}$$ for some $m>n>0$ with $\\gcd(m,n)=1$.\n\nGoing back, $$z=m^{2}+n^{2},\\qquad y=m^{2}-n^{2},\\qquad x=2mn .$$\n\nFinally, $y=m^{2}-n^{2}$ being odd forces $m$ and $n$ to have opposite parity. $\\blacksquare$"
     }
    },
    {
     "t": "table",
     "head": {
      "ru": [
       "$m$",
       "$n$",
       "$x=2mn$",
       "$y=m^2-n^2$",
       "$z=m^2+n^2$"
      ],
      "en": [
       "$m$",
       "$n$",
       "$x=2mn$",
       "$y=m^2-n^2$",
       "$z=m^2+n^2$"
      ]
     },
     "rows": {
      "ru": [
       [
        "$2$",
        "$1$",
        "$4$",
        "$3$",
        "$5$"
       ],
       [
        "$3$",
        "$2$",
        "$12$",
        "$5$",
        "$13$"
       ],
       [
        "$4$",
        "$1$",
        "$8$",
        "$15$",
        "$17$"
       ],
       [
        "$4$",
        "$3$",
        "$24$",
        "$7$",
        "$25$"
       ],
       [
        "$5$",
        "$2$",
        "$20$",
        "$21$",
        "$29$"
       ]
      ],
      "en": [
       [
        "$2$",
        "$1$",
        "$4$",
        "$3$",
        "$5$"
       ],
       [
        "$3$",
        "$2$",
        "$12$",
        "$5$",
        "$13$"
       ],
       [
        "$4$",
        "$1$",
        "$8$",
        "$15$",
        "$17$"
       ],
       [
        "$4$",
        "$3$",
        "$24$",
        "$7$",
        "$25$"
       ],
       [
        "$5$",
        "$2$",
        "$20$",
        "$21$",
        "$29$"
       ]
      ]
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите все пифагоровы треугольники, у которых один из катетов равен $15$.",
      "en": "Find all Pythagorean triangles with a leg equal to $15$."
     },
     "steps": {
      "ru": [
       "Катет $15$ нечётен, значит это «нечётный» катет; запишем $z^{2}-b^{2}=225$.",
       "Разложим: $(z-b)(z+b)=225$, причём оба множителя нечётны и $z-b<z+b$.",
       "Разложения $225=3^{2}\\cdot5^{2}$ на такие пары: $1\\cdot225$, $3\\cdot75$, $5\\cdot45$, $9\\cdot25$.",
       "Считаем $z=\\tfrac{(z-b)+(z+b)}2$ и $b=\\tfrac{(z+b)-(z-b)}2$.",
       "Получаем $(b,z)=(112,113),\\ (36,39),\\ (20,25),\\ (8,17)$.",
       "Проверка для $(8,15,17)$: $64+225=289=17^{2}$ ✓"
      ],
      "en": [
       "The leg $15$ is odd, so it is the \"odd\" leg; write $z^{2}-b^{2}=225$.",
       "Factor: $(z-b)(z+b)=225$ with both factors odd and $z-b<z+b$.",
       "The factorisations of $225=3^{2}\\cdot5^{2}$ into such pairs are $1\\cdot225$, $3\\cdot75$, $5\\cdot45$, $9\\cdot25$.",
       "Compute $z=\\tfrac{(z-b)+(z+b)}2$ and $b=\\tfrac{(z+b)-(z-b)}2$.",
       "This gives $(b,z)=(112,113),\\ (36,39),\\ (20,25),\\ (8,17)$.",
       "Check for $(8,15,17)$: $64+225=289=17^{2}$ ✓"
      ]
     },
     "ans": {
      "ru": "Четыре треугольника: $(15,8,17)$, $(15,20,25)$, $(15,36,39)$, $(15,112,113)$.",
      "en": "Four triangles: $(15,8,17)$, $(15,20,25)$, $(15,36,39)$, $(15,112,113)$."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "**Великая теорема Ферма.** При показателе $2$ решений бесконечно много, а при $n\\ge3$ уравнение $$x^{n}+y^{n}=z^{n}$$ не имеет решений в натуральных числах. Ферма записал это на полях книги в $1637$ году, добавив, что нашёл «поистине чудесное доказательство», для которого не хватило полей. Доказательство нашли лишь в $1995$ году (Эндрю Уайлс), и оно занимает более сотни страниц. Случай $n=4$ доступен школьными средствами — он разбирается методом спуска.",
      "en": "**Fermat’s Last Theorem.** With exponent $2$ there are infinitely many solutions, but for $n\\ge3$ the equation $$x^{n}+y^{n}=z^{n}$$ has no solutions in positive integers. Fermat wrote this in a book margin in $1637$, adding that he had a \"truly marvellous proof\" that the margin was too small to hold. A proof appeared only in $1995$ (Andrew Wiles) and runs to well over a hundred pages. The case $n=4$ is within reach of school methods — by infinite descent."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Суммы двух квадратов",
    "en": "Sums of two squares"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Какие числа представимы в виде $a^{2}+b^{2}$? Ответ красив и полностью известен, и главную роль в нём играют остатки простых по модулю $4$.",
      "en": "Which numbers can be written as $a^{2}+b^{2}$? The answer is beautiful and completely known, and the leading role is played by the residues of primes modulo $4$."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Тождество Брахмагупты — Фибоначчи",
      "en": "The Brahmagupta–Fibonacci identity"
     },
     "text": {
      "ru": "$$\\left(a^{2}+b^{2}\\right)\\left(c^{2}+d^{2}\\right)=(ac+bd)^{2}+(ad-bc)^{2}=(ac-bd)^{2}+(ad+bc)^{2} .$$ Значит **произведение двух сумм двух квадратов снова является суммой двух квадратов**.",
      "en": "$$\\left(a^{2}+b^{2}\\right)\\left(c^{2}+d^{2}\\right)=(ac+bd)^{2}+(ad-bc)^{2}=(ac-bd)^{2}+(ad+bc)^{2} .$$ So **a product of two sums of two squares is again a sum of two squares**."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Раскроем правую часть первого равенства: $$(ac+bd)^{2}=a^{2}c^{2}+2abcd+b^{2}d^{2} ,$$ $$(ad-bc)^{2}=a^{2}d^{2}-2abcd+b^{2}c^{2} .$$\n\nСлагаемые $\\pm2abcd$ уничтожаются, и остаётся $$a^{2}c^{2}+b^{2}d^{2}+a^{2}d^{2}+b^{2}c^{2}=a^{2}\\left(c^{2}+d^{2}\\right)+b^{2}\\left(c^{2}+d^{2}\\right)=\\left(a^{2}+b^{2}\\right)\\left(c^{2}+d^{2}\\right) \\quad\\checkmark$$\n\nВторое равенство получается заменой $d\\to-d$. $\\blacksquare$",
      "en": "Expand the first right-hand side: $$(ac+bd)^{2}=a^{2}c^{2}+2abcd+b^{2}d^{2} ,$$ $$(ad-bc)^{2}=a^{2}d^{2}-2abcd+b^{2}c^{2} .$$\n\nThe terms $\\pm2abcd$ cancel, leaving $$a^{2}c^{2}+b^{2}d^{2}+a^{2}d^{2}+b^{2}c^{2}=\\left(a^{2}+b^{2}\\right)\\left(c^{2}+d^{2}\\right) \\quad\\checkmark$$\n\nThe second identity comes from replacing $d$ by $-d$. $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Препятствие по модулю 4",
      "en": "The obstruction modulo 4"
     },
     "text": {
      "ru": "Сумма двух квадратов никогда не даёт остаток $3$ при делении на $4$. Значит ни одно число вида $4k+3$ не представимо в виде $a^{2}+b^{2}$.",
      "en": "A sum of two squares never leaves remainder $3$ on division by $4$. So no number of the form $4k+3$ is a sum of two squares."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Квадрат целого числа сравним с $0$ или $1$ по модулю $4$: чётное даёт $(2k)^{2}=4k^{2}\\equiv0$, нечётное — $(2k+1)^{2}=4k(k+1)+1\\equiv1$.\n\nЗначит сумма двух квадратов сравнима с одним из чисел $$0+0=0,\\qquad 0+1=1,\\qquad 1+1=2 ,$$ то есть с $0$, $1$ или $2$, но не с $3$. $\\blacksquare$",
      "en": "A square is $0$ or $1$ mod $4$: an even number gives $(2k)^{2}\\equiv0$, an odd one $(2k+1)^{2}=4k(k+1)+1\\equiv1$.\n\nSo a sum of two squares is congruent to one of $$0+0=0,\\qquad 0+1=1,\\qquad 1+1=2 ,$$ never to $3$. $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Теорема Ферма о двух квадратах",
      "en": "Fermat’s two-square theorem"
     },
     "text": {
      "ru": "Нечётное простое $p$ представимо в виде $p=a^{2}+b^{2}$ **тогда и только тогда**, когда $p\\equiv1\\pmod4$. Такое представление единственно с точностью до порядка и знаков.",
      "en": "An odd prime $p$ is a sum of two squares $p=a^{2}+b^{2}$ **if and only if** $p\\equiv1\\pmod4$, and the representation is unique up to order and signs."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Необходимость** — это предыдущая теорема: при $p\\equiv3\\pmod4$ представления нет.\n\n**Достаточность (набросок).** Пусть $p\\equiv1\\pmod4$. По критерию Эйлера сравнение $x^{2}\\equiv-1\\pmod p$ разрешимо; возьмём такое $x$, то есть $p\\mid x^{2}+1$.\n\nДалее применяют **лемму Туэ**: если $p\\mid x^{2}+1$, то найдутся целые $a,b$ с $0<|a|,|b|<\\sqrt p$ и $a\\equiv xb\\pmod p$. (Лемма доказывается принципом Дирихле: пар $(u,v)$ с $0\\le u,v<\\sqrt p$ больше, чем $p$ вычетов, значит две пары дают одинаковое $u-xv$.)\n\nТогда $$a^{2}+b^{2}\\equiv x^{2}b^{2}+b^{2}=b^{2}\\left(x^{2}+1\\right)\\equiv0\\pmod p ,$$ то есть $p\\mid a^{2}+b^{2}$. Но $$0<a^{2}+b^{2}<p+p=2p ,$$ значит $a^{2}+b^{2}=p$ ✓ $\\blacksquare$",
      "en": "**Necessity** is the previous theorem: for $p\\equiv3\\pmod4$ no representation exists.\n\n**Sufficiency (sketch).** Let $p\\equiv1\\pmod4$. Euler’s criterion makes $x^{2}\\equiv-1\\pmod p$ solvable; take such an $x$, so $p\\mid x^{2}+1$.\n\nNow apply **Thue’s lemma**: if $p\\mid x^{2}+1$ there are integers $a,b$ with $0<|a|,|b|<\\sqrt p$ and $a\\equiv xb\\pmod p$. (The lemma follows from the pigeonhole principle: there are more pairs $(u,v)$ with $0\\le u,v<\\sqrt p$ than there are $p$ residues, so two pairs give the same $u-xv$.)\n\nThen $$a^{2}+b^{2}\\equiv x^{2}b^{2}+b^{2}=b^{2}\\left(x^{2}+1\\right)\\equiv0\\pmod p ,$$ so $p\\mid a^{2}+b^{2}$. But $$0<a^{2}+b^{2}<2p ,$$ hence $a^{2}+b^{2}=p$ ✓ $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Какие числа вообще представимы",
      "en": "Which numbers are sums of two squares"
     },
     "text": {
      "ru": "Натуральное число $n$ представимо в виде суммы двух квадратов **тогда и только тогда**, когда в его разложении каждое простое вида $4k+3$ входит в **чётной** степени.",
      "en": "A positive integer $n$ is a sum of two squares **if and only if** every prime of the form $4k+3$ occurs in its factorisation to an **even** power."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Представимы ли числа $45$, $2025$ и $2023$ в виде суммы двух квадратов?",
      "en": "Are $45$, $2025$ and $2023$ sums of two squares?"
     },
     "steps": {
      "ru": [
       "$45=3^{2}\\cdot5$. Простое $3\\equiv3\\pmod4$ входит в чётной степени ✓ Значит представимо.",
       "Найдём явно: $5=1^{2}+2^{2}$, умножим на $9=3^{2}$: $45=3^{2}+6^{2}=9+36$ ✓",
       "$2025=3^{4}\\cdot5^{2}$. Показатель тройки равен $4$ — чётный ✓ И действительно $2025=27^{2}+36^{2}=729+1296$.",
       "$2023=7\\cdot17^{2}$. Простое $7\\equiv3\\pmod4$ входит в **первой** степени ✗ Значит не представимо.",
       "Проверка для $2023$ иначе: $2023=4\\cdot505+3\\equiv3\\pmod4$ — уже этого достаточно."
      ],
      "en": [
       "$45=3^{2}\\cdot5$. The prime $3\\equiv3\\pmod4$ appears to an even power ✓ So it is representable.",
       "Explicitly: $5=1^{2}+2^{2}$, and multiplying by $9=3^{2}$ gives $45=3^{2}+6^{2}=9+36$ ✓",
       "$2025=3^{4}\\cdot5^{2}$. The exponent of $3$ is $4$, even ✓ And indeed $2025=27^{2}+36^{2}$.",
       "$2023=7\\cdot17^{2}$. The prime $7\\equiv3\\pmod4$ appears to the **first** power ✗ So it is not representable.",
       "A shortcut for $2023$: it is $\\equiv3\\pmod4$, which already settles it."
      ]
     },
     "ans": {
      "ru": "$45$ и $2025$ представимы, $2023$ — нет.",
      "en": "$45$ and $2025$ are; $2023$ is not."
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "В олимпиадных задачах чаще нужна **отрицательная** часть теории: чтобы доказать, что уравнение не имеет решений, достаточно найти простое $p\\equiv3\\pmod4$, входящее в нечётной степени, — или просто посмотреть на остаток по модулю $4$.",
      "en": "In olympiad problems the **negative** half is what is usually needed: to show an equation has no solutions it is enough to find a prime $p\\equiv3\\pmod4$ occurring to an odd power — or simply to look at the residue mod $4$."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Уравнение Пелля",
    "en": "The Pell equation"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Уравнение $x^{2}-Dy^{2}=1$ с неквадратным натуральным $D$ ведёт себя удивительно: у него либо нет нетривиальных решений, либо их сразу бесконечно много, и все они порождаются одним-единственным.",
      "en": "The equation $x^{2}-Dy^{2}=1$ with $D$ a non-square positive integer behaves remarkably: it either has no non-trivial solution or infinitely many at once, all generated by a single one."
     }
    },
    {
     "t": "def",
     "name": {
      "ru": "Уравнение Пелля",
      "en": "Pell’s equation"
     },
     "text": {
      "ru": "$$x^{2}-Dy^{2}=1 ,$$ где $D$ — натуральное число, не являющееся полным квадратом. Решение $(x,y)=(1,0)$ называют тривиальным; наименьшее решение с $y>0$ — **фундаментальным**.",
      "en": "$$x^{2}-Dy^{2}=1 ,$$ with $D$ a positive non-square integer. The solution $(x,y)=(1,0)$ is called trivial; the smallest solution with $y>0$ is the **fundamental** one."
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Условие «$D$ не квадрат» существенно. При $D=k^{2}$ уравнение превращается в $$(x-ky)(x+ky)=1 ,$$ откуда $x=\\pm1$, $y=0$ — только тривиальные решения.",
      "en": "The hypothesis that $D$ is not a square matters. For $D=k^{2}$ the equation becomes $$(x-ky)(x+ky)=1 ,$$ forcing $x=\\pm1$, $y=0$ — only the trivial solutions."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Из одного решения — бесконечно много",
      "en": "One solution breeds infinitely many"
     },
     "text": {
      "ru": "Пусть $\\left(x_1,y_1\\right)$ — решение уравнения $x^{2}-Dy^{2}=1$ с $y_1>0$. Тогда пара $$x_{k+1}=x_1x_k+Dy_1y_k,\\qquad y_{k+1}=x_1y_k+y_1x_k$$ тоже является решением, и все получаемые решения попарно различны.",
      "en": "Let $\\left(x_1,y_1\\right)$ solve $x^{2}-Dy^{2}=1$ with $y_1>0$. Then $$x_{k+1}=x_1x_k+Dy_1y_k,\\qquad y_{k+1}=x_1y_k+y_1x_k$$ is again a solution, and all the solutions produced are pairwise distinct."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Это решение.** Подставим и раскроем: $$x_{k+1}^{2}-Dy_{k+1}^{2}=\\left(x_1x_k+Dy_1y_k\\right)^{2}-D\\left(x_1y_k+y_1x_k\\right)^{2}.$$\n\nПервая скобка даёт $$x_1^{2}x_k^{2}+2Dx_1x_ky_1y_k+D^{2}y_1^{2}y_k^{2} ,$$ вторая, умноженная на $D$, — $$D x_1^{2}y_k^{2}+2Dx_1y_ky_1x_k+Dy_1^{2}x_k^{2} .$$\n\nСредние члены одинаковы и уничтожаются, остаётся $$x_1^{2}x_k^{2}+D^{2}y_1^{2}y_k^{2}-Dx_1^{2}y_k^{2}-Dy_1^{2}x_k^{2}=\\left(x_1^{2}-Dy_1^{2}\\right)\\left(x_k^{2}-Dy_k^{2}\\right)=1\\cdot1=1 \\quad\\checkmark$$\n\n**Решения различны.** При $x_k,y_k>0$ имеем $y_{k+1}=x_1y_k+y_1x_k>y_k$, значит вторая координата строго растёт, и повторений нет. $\\blacksquare$\n\n**Откуда взялась формула.** Она отвечает умножению в кольце $\\mathbb{Z}\\left[\\sqrt D\\right]$: если $x_k+y_k\\sqrt D$ имеет норму $1$, то и произведение $$\\left(x_1+y_1\\sqrt D\\right)\\left(x_k+y_k\\sqrt D\\right)=\\left(x_1x_k+Dy_1y_k\\right)+\\left(x_1y_k+y_1x_k\\right)\\sqrt D$$ имеет норму $1\\cdot1=1$.",
      "en": "**It is a solution.** Substitute and expand: $$x_{k+1}^{2}-Dy_{k+1}^{2}=\\left(x_1x_k+Dy_1y_k\\right)^{2}-D\\left(x_1y_k+y_1x_k\\right)^{2}.$$\n\nThe cross terms match and cancel, leaving $$\\left(x_1^{2}-Dy_1^{2}\\right)\\left(x_k^{2}-Dy_k^{2}\\right)=1\\cdot1=1 \\quad\\checkmark$$\n\n**The solutions are distinct.** For $x_k,y_k>0$ we get $y_{k+1}=x_1y_k+y_1x_k>y_k$, so the second coordinate strictly increases and nothing repeats. $\\blacksquare$\n\n**Where the formula comes from.** It is multiplication in the ring $\\mathbb{Z}\\left[\\sqrt D\\right]$: if $x_k+y_k\\sqrt D$ has norm $1$, so does $$\\left(x_1+y_1\\sqrt D\\right)\\left(x_k+y_k\\sqrt D\\right)=\\left(x_1x_k+Dy_1y_k\\right)+\\left(x_1y_k+y_1x_k\\right)\\sqrt D .$$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Теорема Лагранжа",
      "en": "Lagrange’s theorem"
     },
     "text": {
      "ru": "Для любого неквадратного натурального $D$ уравнение $x^{2}-Dy^{2}=1$ имеет решение с $y>0$. Более того, **все** решения в натуральных числах получаются из фундаментального по формуле $$x_k+y_k\\sqrt D=\\left(x_1+y_1\\sqrt D\\right)^{k},\\qquad k=1,2,3,\\dots$$",
      "en": "For every non-square positive integer $D$ the equation $x^{2}-Dy^{2}=1$ has a solution with $y>0$. Moreover **every** solution in positive integers arises from the fundamental one as $$x_k+y_k\\sqrt D=\\left(x_1+y_1\\sqrt D\\right)^{k},\\qquad k=1,2,3,\\dots$$"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Доказательство существования опирается на приближение иррационального числа $\\sqrt D$ рациональными дробями (теорема Дирихле о приближениях) и на принцип Дирихле — оно вполне элементарно, но длиннее, чем уместно здесь. Фундаментальное решение находят разложением $\\sqrt D$ в цепную дробь.\n\n**Осторожно:** фундаментальное решение может быть неожиданно огромным. Для $D=61$ это $$x_1=1\\,766\\,319\\,049,\\qquad y_1=226\\,153\\,980 .$$",
      "en": "The existence proof rests on approximating the irrational $\\sqrt D$ by rationals (Dirichlet’s approximation theorem) together with the pigeonhole principle — elementary, but longer than fits here. The fundamental solution is found from the continued fraction of $\\sqrt D$.\n\n**Careful:** it can be startlingly large. For $D=61$ it is $$x_1=1\\,766\\,319\\,049,\\qquad y_1=226\\,153\\,980 .$$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите три наименьших решения уравнения $x^{2}-2y^{2}=1$ в натуральных числах.",
      "en": "Find the three smallest positive solutions of $x^{2}-2y^{2}=1$."
     },
     "steps": {
      "ru": [
       "Подбираем фундаментальное: $y=1$ даёт $x^{2}=3$ ✗; $y=2$ даёт $x^{2}=9$, то есть $x=3$ ✓",
       "Значит $\\left(x_1,y_1\\right)=(3,2)$.",
       "Рекуррентность: $x_{k+1}=3x_k+4y_k$, $y_{k+1}=3y_k+2x_k$ (здесь $D=2$).",
       "$(3,2)\\to(3\\cdot3+4\\cdot2,\\ 3\\cdot2+2\\cdot3)=(17,12)$.",
       "$(17,12)\\to(3\\cdot17+4\\cdot12,\\ 3\\cdot12+2\\cdot17)=(99,70)$.",
       "Проверка: $17^{2}-2\\cdot12^{2}=289-288=1$ ✓ и $99^{2}-2\\cdot70^{2}=9801-9800=1$ ✓"
      ],
      "en": [
       "Search for the fundamental one: $y=1$ gives $x^{2}=3$ ✗; $y=2$ gives $x^{2}=9$, i.e. $x=3$ ✓",
       "So $\\left(x_1,y_1\\right)=(3,2)$.",
       "The recursion with $D=2$: $x_{k+1}=3x_k+4y_k$, $y_{k+1}=3y_k+2x_k$.",
       "$(3,2)\\to(17,12)$.",
       "$(17,12)\\to(99,70)$.",
       "Check: $17^{2}-2\\cdot12^{2}=1$ ✓ and $99^{2}-2\\cdot70^{2}=1$ ✓"
      ]
     },
     "ans": {
      "ru": "$(3,2)$, $(17,12)$, $(99,70)$.",
      "en": "$(3,2)$, $(17,12)$, $(99,70)$."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "**Откуда название.** Эйлер по ошибке приписал уравнение английскому математику Джону Пеллю, который к нему отношения почти не имел; впервые его систематически изучали индийские математики — Брахмагупта в VII веке и Бхаскара II в XII-м. Историческая несправедливость закрепилась в названии.\n\n**Где встречается.** Уравнение Пелля возникает всюду, где нужно «почти равенство» двух величин: треугольные числа, являющиеся квадратами; приближения $\\sqrt2\\approx\\tfrac{99}{70}$; задача Архимеда о быках.",
      "en": "**About the name.** Euler mistakenly attributed the equation to the English mathematician John Pell, who had little to do with it; it was studied systematically much earlier by Indian mathematicians — Brahmagupta in the seventh century and Bhāskara II in the twelfth. The historical injustice stuck.\n\n**Where it appears.** Pell’s equation turns up wherever two quantities must be \"almost equal\": triangular numbers that are squares, approximations such as $\\sqrt2\\approx\\tfrac{99}{70}$, and Archimedes’ cattle problem."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Бесконечный спуск",
    "en": "Infinite descent"
   },
   "blocks": [
    {
     "t": "idea",
     "text": {
      "ru": "Приём Ферма и самый красивый в теме. Предположим, что решение есть. Из него строим **новое решение, меньшее прежнего**. Повторяя, получаем бесконечную убывающую последовательность натуральных чисел — а такой не бывает. Значит исходное предположение ложно.",
      "en": "Fermat’s move, and the most beautiful in the topic. Suppose a solution exists. From it, construct a **new solution smaller than the old one**. Repeating gives an infinite strictly decreasing sequence of positive integers — and no such sequence exists. So the original assumption was false."
     }
    },
    {
     "t": "p",
     "text": {
      "ru": "На практике удобнее так: возьмём решение с **наименьшим** возможным значением какой-нибудь положительной величины (скажем, $z$) и получим из него меньшее. Противоречие с минимальностью — и доказательство закончено.",
      "en": "In practice it is neater to say: take a solution with the **smallest** possible value of some positive quantity (say $z$) and produce a smaller one from it. That contradicts minimality and the proof is done."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Пример спуска",
      "en": "A model descent"
     },
     "text": {
      "ru": "Уравнение $x^{2}+y^{2}=3z^{2}$ имеет в целых числах единственное решение $x=y=z=0$.",
      "en": "The equation $x^{2}+y^{2}=3z^{2}$ has exactly one solution in integers: $x=y=z=0$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Предположим, что решение с $z\\ne0$ существует, и среди всех таких выберем решение с **наименьшим** $|z|$.\n\n**Шаг 1.** По модулю $3$ имеем $x^2+y^2\\equiv0$. Квадрат по модулю $3$ равен $0$ или $1$, поэтому сумма двух квадратов равна $0,1$ или $2$. Ноль получается **только** когда оба слагаемых нулевые, то есть $x\\equiv y\\equiv0\\pmod3$.\n\n**Шаг 2.** Запишем $x=3a$, $y=3b$. Тогда $$9a^{2}+9b^{2}=3z^{2}\\quad\\Longrightarrow\\quad 3(a^{2}+b^{2})=z^{2}.$$\n\n**Шаг 3.** Значит $3\\mid z^{2}$, а так как $3$ простое, то $3\\mid z$. Пишем $z=3c$: $$3(a^{2}+b^{2})=9c^{2}\\quad\\Longrightarrow\\quad a^{2}+b^{2}=3c^{2}.$$\n\n**Шаг 4.** Мы получили новое решение $(a,b,c)$ того же уравнения, причём $|c|=|z|/3<|z|$ и $c\\ne0$ (иначе и $z=0$). Это противоречит минимальности $|z|$.\n\nЗначит решений с $z\\ne0$ нет; а при $z=0$ из $x^2+y^2=0$ следует $x=y=0$. $\\blacksquare$",
      "en": "Suppose a solution with $z\\ne0$ exists, and among all of them choose one with the **smallest** $|z|$.\n\n**Step 1.** Modulo $3$ we have $x^2+y^2\\equiv0$. A square is $0$ or $1$ modulo $3$, so a sum of two squares is $0,1$ or $2$. It is zero **only** when both terms are zero, that is $x\\equiv y\\equiv0\\pmod3$.\n\n**Step 2.** Write $x=3a$, $y=3b$. Then $$9a^{2}+9b^{2}=3z^{2}\\quad\\Longrightarrow\\quad 3(a^{2}+b^{2})=z^{2}.$$\n\n**Step 3.** So $3\\mid z^{2}$, and since $3$ is prime, $3\\mid z$. Write $z=3c$: $$3(a^{2}+b^{2})=9c^{2}\\quad\\Longrightarrow\\quad a^{2}+b^{2}=3c^{2}.$$\n\n**Step 4.** We have produced a new solution $(a,b,c)$ of the same equation with $|c|=|z|/3<|z|$ and $c\\ne0$ (otherwise $z=0$ too). This contradicts the minimality of $|z|$.\n\nSo there is no solution with $z\\ne0$; and when $z=0$, $x^2+y^2=0$ forces $x=y=0$. $\\blacksquare$"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Тем же спуском Ферма доказал, что $x^{4}+y^{4}=z^{2}$ не имеет решений в натуральных числах — а отсюда сразу следует его Великая теорема для показателя $4$. Эта задача стоит последней в списке ниже.",
      "en": "The same descent is how Fermat proved that $x^{4}+y^{4}=z^{2}$ has no solution in positive integers — which immediately gives his Last Theorem for exponent $4$. That problem is waiting for you in the list below."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Как узнать, что нужен спуск",
      "en": "How to spot that descent is needed"
     },
     "text": {
      "ru": "Признаки: уравнение **однородно** (все слагаемые одной степени, как $x^2+y^2=3z^2$), либо все переменные входят симметрично, либо после взятия остатков выясняется, что все переменные делятся на одно и то же простое. Последнее — почти верный знак: делите и повторяйте.",
      "en": "The signs: the equation is **homogeneous** (all terms of the same degree, as in $x^2+y^2=3z^2$), or the variables enter symmetrically, or a remainder argument shows that every variable is divisible by the same prime. That last one is an almost certain signal: divide and repeat."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Принцип бесконечного спуска",
      "en": "The principle of infinite descent"
     },
     "text": {
      "ru": "Пусть из каждого решения задачи в натуральных числах можно построить **строго меньшее** решение. Тогда решений нет вовсе.",
      "en": "Suppose that from every solution in positive integers one can build a **strictly smaller** solution. Then there are no solutions at all."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Предположим, что решение существует. Рассмотрим множество всех натуральных значений некоторой выбранной величины (например, $z$ или суммы $x+y+z$) по всем решениям. Это непустое множество натуральных чисел, значит по принципу наименьшего числа в нём есть наименьший элемент.\n\nВозьмём отвечающее ему решение. По условию из него строится решение со строго меньшим значением той же величины — противоречие с минимальностью ✗ $\\blacksquare$",
      "en": "Suppose a solution exists. Consider the set of positive values taken by some chosen quantity (say $z$, or the sum $x+y+z$) over all solutions. This is a non-empty set of positive integers, so by the least-number principle it has a smallest element.\n\nTake the corresponding solution. By hypothesis it yields a solution with a strictly smaller value of that quantity — contradicting minimality ✗ $\\blacksquare$"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Спуск — это индукция, повёрнутая наоборот. Практически он выглядит так: показываем, что все неизвестные обязаны делиться на некоторое $d>1$, делим на $d$ и получаем решение поменьше. Если делимость выводится **всегда**, спуск не останавливается — значит решений нет.",
      "en": "Descent is induction turned around. In practice it looks like this: show that every unknown must be divisible by some $d>1$, divide through by $d$ and obtain a smaller solution. If the divisibility follows **every** time, the descent never stops — so there is no solution."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Докажите, что уравнение $x^{2}+y^{2}=3z^{2}$ не имеет решений в натуральных числах.",
      "en": "Prove that $x^{2}+y^{2}=3z^{2}$ has no solutions in positive integers."
     },
     "steps": {
      "ru": [
       "Возьмём решение с наименьшим $z$.",
       "Квадраты по модулю $3$ дают только $0$ и $1$, поэтому $x^{2}+y^{2}\\equiv0\\pmod3$ возможно лишь при $x^{2}\\equiv y^{2}\\equiv0$.",
       "Значит $3\\mid x$ и $3\\mid y$; запишем $x=3a$, $y=3b$.",
       "Подставим: $9a^{2}+9b^{2}=3z^{2}$, то есть $3\\left(a^{2}+b^{2}\\right)=z^{2}$.",
       "Отсюда $3\\mid z^{2}$, значит $3\\mid z$; запишем $z=3c$ и сократим: $a^{2}+b^{2}=3c^{2}$.",
       "Получили решение с $c=\\tfrac z3<z$ — противоречие с минимальностью ✗"
      ],
      "en": [
       "Take a solution with the smallest $z$.",
       "Squares mod $3$ are only $0$ and $1$, so $x^{2}+y^{2}\\equiv0\\pmod3$ forces $x^{2}\\equiv y^{2}\\equiv0$.",
       "Hence $3\\mid x$ and $3\\mid y$; write $x=3a$, $y=3b$.",
       "Substituting, $9a^{2}+9b^{2}=3z^{2}$, i.e. $3\\left(a^{2}+b^{2}\\right)=z^{2}$.",
       "So $3\\mid z^{2}$ and $3\\mid z$; write $z=3c$ and cancel: $a^{2}+b^{2}=3c^{2}$.",
       "This is a solution with $c=\\tfrac z3<z$ — contradicting minimality ✗"
      ]
     },
     "ans": {
      "ru": "Решений нет.",
      "en": "There are no solutions."
     }
    }
   ]
  }
 ],
 "problems": [
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Найдите все решения уравнения $3x+5y=47$ в натуральных числах.",
    "en": "Find every solution of $3x+5y=47$ in positive integers."
   },
   "hint": {
    "ru": "Возьмите остаток по модулю $3$.",
    "en": "Take remainders modulo $3$."
   },
   "sol": {
    "ru": "По модулю $3$: $5y\\equiv47$, то есть $2y\\equiv2\\pmod3$, откуда $y\\equiv1\\pmod3$. Значит $y\\in\\{1,4,7,10,\\dots\\}$. Из $5y<47$ следует $y\\le9$, остаются $y=1,4,7$, и тогда $3x=47-5y$ даёт $3x=42,27,12$, то есть $x=14,9,4$. Все три пары натуральные. **Ответ:** $(14,1),(9,4),(4,7)$.",
    "en": "Modulo $3$: $5y\\equiv47$, that is $2y\\equiv2\\pmod3$, so $y\\equiv1\\pmod3$ and $y\\in\\{1,4,7,10,\\dots\\}$. From $5y<47$ we get $y\\le9$, leaving $y=1,4,7$; then $3x=47-5y$ gives $3x=42,27,12$, so $x=14,9,4$. All three pairs are positive. **Answer:** $(14,1),(9,4),(4,7)$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Сколько существует пар неотрицательных целых чисел $(x,y)$ с $5x+7y=100$?",
    "en": "How many pairs of non-negative integers $(x,y)$ satisfy $5x+7y=100$?"
   },
   "hint": {
    "ru": "Что можно сказать про $y$ по модулю $5$?",
    "en": "What does modulus $5$ say about $y$?"
   },
   "sol": {
    "ru": "По модулю $5$: $7y\\equiv100\\equiv0$, то есть $2y\\equiv0\\pmod5$. Так как $2$ обратимо по модулю $5$, получаем $y\\equiv0\\pmod5$. Из $7y\\le100$ следует $y\\le14$, значит $y\\in\\{0,5,10\\}$. Соответственно $5x=100,65,30$ и $x=20,13,6$ — все неотрицательные. **Ответ:** три пары: $(20,0),(13,5),(6,10)$.",
    "en": "Modulo $5$: $7y\\equiv100\\equiv0$, that is $2y\\equiv0\\pmod5$. Since $2$ is invertible mod $5$, $y\\equiv0\\pmod5$. From $7y\\le100$ we get $y\\le14$, so $y\\in\\{0,5,10\\}$. Then $5x=100,65,30$ and $x=20,13,6$, all non-negative. **Answer:** three pairs: $(20,0),(13,5),(6,10)$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Найдите все пары целых чисел с $xy=x+y+3$.",
    "en": "Find all pairs of integers with $xy=x+y+3$."
   },
   "hint": {
    "ru": "Перенесите всё влево и прибавьте $1$.",
    "en": "Move everything to the left and add $1$."
   },
   "sol": {
    "ru": "$xy-x-y+1=4$, то есть $(x-1)(y-1)=4$. Перебираем все пары делителей числа $4$, включая отрицательные: $$(1,4),(2,2),(4,1),(-1,-4),(-2,-2),(-4,-1).$$ Прибавляя единицу к каждой координате, получаем $$(2,5),(3,3),(5,2),(0,-3),(-1,-1),(-3,0).$$ Проверка $(0,-3)$: $0\\cdot(-3)=0$ и $0+(-3)+3=0$ ✓. **Ответ:** шесть пар выше; из них натуральных три: $(2,5),(3,3),(5,2)$.",
    "en": "$xy-x-y+1=4$, that is $(x-1)(y-1)=4$. Run through every divisor pair of $4$, negatives included: $$(1,4),(2,2),(4,1),(-1,-4),(-2,-2),(-4,-1).$$ Adding $1$ to each coordinate gives $$(2,5),(3,3),(5,2),(0,-3),(-1,-1),(-3,0).$$ Check $(0,-3)$: $0\\cdot(-3)=0$ and $0+(-3)+3=0$ ✓. **Answer:** the six pairs above; three of them are positive: $(2,5),(3,3),(5,2)$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Найдите все пары натуральных чисел с $\\dfrac1x+\\dfrac1y=\\dfrac16$.",
    "en": "Find all pairs of positive integers with $\\dfrac1x+\\dfrac1y=\\dfrac16$."
   },
   "hint": {
    "ru": "$(x-6)(y-6)=36$.",
    "en": "$(x-6)(y-6)=36$."
   },
   "sol": {
    "ru": "Приводим к общему знаменателю: $6(x+y)=xy$, то есть $xy-6x-6y+36=36$ и $(x-6)(y-6)=36$. Оба множителя положительны: если бы $x\\le6$, то $\\tfrac1x\\ge\\tfrac16$ и для $\\tfrac1y>0$ не осталось бы места. Делители $36=2^2\\cdot3^2$: их $(2+1)(2+1)=9$, а именно $1,2,3,4,6,9,12,18,36$. Каждому отвечает пара $x=6+d$, $y=6+36/d$: $$(7,42),(8,24),(9,18),(10,15),(12,12),(15,10),(18,9),(24,8),(42,7).$$ **Ответ:** $9$ пар.",
    "en": "Clear denominators: $6(x+y)=xy$, so $xy-6x-6y+36=36$ and $(x-6)(y-6)=36$. Both factors are positive: if $x\\le6$ then $\\tfrac1x\\ge\\tfrac16$ and no room is left for $\\tfrac1y>0$. The divisors of $36=2^2\\cdot3^2$ number $(2+1)(2+1)=9$, namely $1,2,3,4,6,9,12,18,36$. Each gives $x=6+d$, $y=6+36/d$: $$(7,42),(8,24),(9,18),(10,15),(12,12),(15,10),(18,9),(24,8),(42,7).$$ **Answer:** $9$ pairs."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Найдите все пары натуральных чисел с $x^{2}-y^{2}=45$.",
    "en": "Find all pairs of positive integers with $x^{2}-y^{2}=45$."
   },
   "hint": {
    "ru": "Разность квадратов.",
    "en": "Difference of squares."
   },
   "sol": {
    "ru": "$(x-y)(x+y)=45$. Оба множителя положительны и $x-y<x+y$, а $45$ нечётно, поэтому оба множителя нечётны — условие одинаковой чётности выполнено автоматически. Пары: $(1,45),(3,15),(5,9)$. Из $x-y=u$, $x+y=v$ получаем $x=\\tfrac{u+v}2$, $y=\\tfrac{v-u}2$: $$(23,22),\\quad(9,6),\\quad(7,2).$$ Проверка: $529-484=45$ ✓, $81-36=45$ ✓, $49-4=45$ ✓. **Ответ:** три пары.",
    "en": "$(x-y)(x+y)=45$. Both factors are positive and $x-y<x+y$; since $45$ is odd both factors are odd, so the same-parity condition holds automatically. The pairs are $(1,45),(3,15),(5,9)$. From $x-y=u$, $x+y=v$ we get $x=\\tfrac{u+v}2$, $y=\\tfrac{v-u}2$: $$(23,22),\\quad(9,6),\\quad(7,2).$$ Check: $529-484=45$ ✓, $81-36=45$ ✓, $49-4=45$ ✓. **Answer:** three pairs."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Сколько троек натуральных чисел $(x,y,z)$ удовлетворяют равенству $x+y+z=15$?",
    "en": "How many triples of positive integers $(x,y,z)$ satisfy $x+y+z=15$?"
   },
   "hint": {
    "ru": "Поставьте в ряд $15$ единиц и выберите два места для перегородок.",
    "en": "Line up $15$ ones and choose two places for the dividers."
   },
   "sol": {
    "ru": "Запишем $15$ единиц в ряд: между ними $14$ промежутков. Каждая тройка натуральных слагаемых — это выбор двух разных промежутков, куда ставятся перегородки: первая группа единиц даёт $x$, вторая $y$, третья $z$, и все три группы непусты, потому что промежутки различны. Значит число троек равно $$\\binom{14}{2}=\\frac{14\\cdot13}{2}=91.$$ **Ответ:** $91$. *Замечание:* это «метод шаров и перегородок», в общем виде число решений уравнения $x_1+\\dots+x_k=n$ в натуральных числах равно $\\binom{n-1}{k-1}$.",
    "en": "Write $15$ ones in a row: there are $14$ gaps between them. Each triple of positive summands is a choice of two distinct gaps for the dividers: the first block of ones is $x$, the second $y$, the third $z$, and all three blocks are non-empty because the gaps are distinct. So the number of triples is $$\\binom{14}{2}=\\frac{14\\cdot13}{2}=91.$$ **Answer:** $91$. *Remark:* this is \"stars and bars\"; in general $x_1+\\dots+x_k=n$ has $\\binom{n-1}{k-1}$ solutions in positive integers."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Найдите все пары целых чисел с $xy+3x-5y=45$.",
    "en": "Find all pairs of integers with $xy+3x-5y=45$."
   },
   "hint": {
    "ru": "$xy+3x-5y=(x-5)(y+3)+15$.",
    "en": "$xy+3x-5y=(x-5)(y+3)+15$."
   },
   "sol": {
    "ru": "Здесь $a=3$, $b=-5$, значит $ab=-15$ и $xy+3x-5y=(x-5)(y+3)+15$. Уравнение превращается в $(x-5)(y+3)=30$. Число $30=2\\cdot3\\cdot5$ имеет $8$ положительных делителей, а с отрицательными — $16$; столько же и решений. Положительные разложения $30=1\\cdot30=2\\cdot15=3\\cdot10=5\\cdot6=6\\cdot5=10\\cdot3=15\\cdot2=30\\cdot1$ дают $$(6,27),(7,12),(8,7),(10,3),(11,2),(15,0),(20,-1),(35,-2),$$ а отрицательные $30=(-1)(-30)=\\dots$ дают $$(4,-33),(3,-18),(2,-13),(0,-9),(-1,-8),(-5,-6),(-10,-5),(-25,-4).$$ Проверка $(8,7)$: $56+24-35=45$ ✓. **Ответ:** $16$ пар, перечисленных выше.",
    "en": "Here $a=3$, $b=-5$, so $ab=-15$ and $xy+3x-5y=(x-5)(y+3)+15$. The equation becomes $(x-5)(y+3)=30$. Now $30=2\\cdot3\\cdot5$ has $8$ positive divisors, and $16$ divisors in all; there are as many solutions. The positive factorisations $30=1\\cdot30=2\\cdot15=3\\cdot10=5\\cdot6=6\\cdot5=10\\cdot3=15\\cdot2=30\\cdot1$ give $$(6,27),(7,12),(8,7),(10,3),(11,2),(15,0),(20,-1),(35,-2),$$ and the negative ones give $$(4,-33),(3,-18),(2,-13),(0,-9),(-1,-8),(-5,-6),(-10,-5),(-25,-4).$$ Check $(8,7)$: $56+24-35=45$ ✓. **Answer:** the $16$ pairs listed above."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Найдите все пары натуральных чисел с $x^{2}-y^{2}=2024$.",
    "en": "Find all pairs of positive integers with $x^{2}-y^{2}=2024$."
   },
   "hint": {
    "ru": "Множители $x-y$ и $x+y$ имеют одинаковую чётность.",
    "en": "The factors $x-y$ and $x+y$ have the same parity."
   },
   "sol": {
    "ru": "$(x-y)(x+y)=2024$. Числа $x-y$ и $x+y$ отличаются на $2y$, значит имеют **одинаковую чётность**. Их произведение чётно, поэтому оба чётны. Пишем $x-y=2u$, $x+y=2v$: тогда $4uv=2024$, то есть $uv=506=2\\cdot11\\cdot23$. Берём разложения с $u<v$ (нужно $y>0$): $$506=1\\cdot506=2\\cdot253=11\\cdot46=22\\cdot23.$$ Из $x=u+v$, $y=v-u$ получаем $$(507,505),\\;(255,251),\\;(57,35),\\;(45,1).$$ Проверка последней: $2025-1=2024$ ✓. **Ответ:** четыре пары.",
    "en": "$(x-y)(x+y)=2024$. The numbers $x-y$ and $x+y$ differ by $2y$, so they have the **same parity**. Their product is even, hence both are even. Write $x-y=2u$, $x+y=2v$: then $4uv=2024$, that is $uv=506=2\\cdot11\\cdot23$. Take the factorisations with $u<v$ (we need $y>0$): $$506=1\\cdot506=2\\cdot253=11\\cdot46=22\\cdot23.$$ From $x=u+v$, $y=v-u$ we get $$(507,505),\\;(255,251),\\;(57,35),\\;(45,1).$$ Check the last: $2025-1=2024$ ✓. **Answer:** four pairs."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "При каких натуральных $n$ число $n^{2}+96$ является точным квадратом?",
    "en": "For which positive integers $n$ is $n^{2}+96$ a perfect square?"
   },
   "hint": {
    "ru": "Положите $n^2+96=m^2$ и разложите разность квадратов.",
    "en": "Put $n^2+96=m^2$ and factor the difference of squares."
   },
   "sol": {
    "ru": "Пусть $n^2+96=m^2$, $m>0$. Тогда $(m-n)(m+n)=96$. Множители одинаковой чётности, а произведение чётно, значит оба чётны: $m-n=2u$, $m+n=2v$, $uv=24$, $u<v$. Разложения: $24=1\\cdot24=2\\cdot12=3\\cdot8=4\\cdot6$. Из $m=u+v$, $n=v-u$: $$(m,n)=(25,23),\\;(14,10),\\;(11,5),\\;(10,2).$$ Проверка $n=2$: $4+96=100=10^2$ ✓; $n=23$: $529+96=625=25^2$ ✓. **Ответ:** $n=2,5,10,23$.",
    "en": "Put $n^2+96=m^2$ with $m>0$. Then $(m-n)(m+n)=96$. The factors have equal parity and their product is even, so both are even: $m-n=2u$, $m+n=2v$, $uv=24$, $u<v$. The factorisations are $24=1\\cdot24=2\\cdot12=3\\cdot8=4\\cdot6$. From $m=u+v$, $n=v-u$: $$(m,n)=(25,23),\\;(14,10),\\;(11,5),\\;(10,2).$$ Check $n=2$: $4+96=100=10^2$ ✓; $n=23$: $529+96=625=25^2$ ✓. **Answer:** $n=2,5,10,23$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Найдите все пары простых чисел $(p,q)$ с $p^{2}-2q^{2}=1$.",
    "en": "Find all pairs of primes $(p,q)$ with $p^{2}-2q^{2}=1$."
   },
   "hint": {
    "ru": "Разложите $p^2-1$ и посмотрите на чётность.",
    "en": "Factor $p^2-1$ and look at parity."
   },
   "sol": {
    "ru": "Если $p=2$, то $4-2q^2=1$ — левая часть чётна, правая нечётна, невозможно. Значит $p$ нечётно. Из $(p-1)(p+1)=2q^{2}$ и $p=2s+1$ получаем $2s\\cdot(2s+2)=2q^2$, то есть $$4s(s+1)=2q^{2},\\qquad q^{2}=2s(s+1).$$ Правая часть чётна, значит $q^2$ чётно и $q$ чётно; простое чётное число одно — $q=2$. Тогда $4=2s(s+1)$, то есть $s(s+1)=2$ и $s=1$, откуда $p=3$. Проверка: $9-8=1$ ✓. **Ответ:** единственная пара $(p,q)=(3,2)$.",
    "en": "If $p=2$ then $4-2q^2=1$ — the left side is even and the right side odd, impossible. So $p$ is odd. From $(p-1)(p+1)=2q^{2}$ with $p=2s+1$ we get $2s\\cdot(2s+2)=2q^2$, that is $$4s(s+1)=2q^{2},\\qquad q^{2}=2s(s+1).$$ The right side is even, so $q^2$ is even and $q$ is even; the only even prime is $q=2$. Then $4=2s(s+1)$, so $s(s+1)=2$ and $s=1$, giving $p=3$. Check: $9-8=1$ ✓. **Answer:** the single pair $(p,q)=(3,2)$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Решите в натуральных числах уравнение $2^{x}+1=y^{2}$.",
    "en": "Solve $2^{x}+1=y^{2}$ in positive integers."
   },
   "hint": {
    "ru": "$2^x=(y-1)(y+1)$: оба множителя — степени двойки.",
    "en": "$2^x=(y-1)(y+1)$: both factors are powers of two."
   },
   "sol": {
    "ru": "Из $2^{x}=y^{2}-1=(y-1)(y+1)$ следует, что каждый из множителей — степень двойки (делитель степени двойки сам является степенью двойки, а оба множителя положительны, так как $y\\ge2$). Пусть $y-1=2^{a}$ и $y+1=2^{b}$, где $a<b$ и $a+b=x$. Вычитая, $$2^{b}-2^{a}=2,\\qquad 2^{a}\\left(2^{\\,b-a}-1\\right)=2.$$ Множитель $2^{b-a}-1$ нечётен, значит он равен $1$, а $2^{a}=2$. Отсюда $a=1$, $b-a=1$, то есть $b=2$. Тогда $y-1=2$, $y=3$ и $x=a+b=3$. Проверка: $2^{3}+1=9=3^{2}$ ✓. **Ответ:** $(x,y)=(3,3)$.",
    "en": "From $2^{x}=y^{2}-1=(y-1)(y+1)$ each factor is a power of two (a divisor of a power of two is itself one, and both factors are positive since $y\\ge2$). Write $y-1=2^{a}$ and $y+1=2^{b}$ with $a<b$ and $a+b=x$. Subtracting, $$2^{b}-2^{a}=2,\\qquad 2^{a}\\left(2^{\\,b-a}-1\\right)=2.$$ The factor $2^{b-a}-1$ is odd, so it equals $1$ and $2^{a}=2$. Hence $a=1$, $b-a=1$, so $b=2$. Then $y-1=2$, $y=3$, and $x=a+b=3$. Check: $2^{3}+1=9=3^{2}$ ✓. **Answer:** $(x,y)=(3,3)$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что уравнение $15x^{2}-7y^{2}=9$ не имеет решений в целых числах.",
    "en": "Prove that $15x^{2}-7y^{2}=9$ has no integer solutions."
   },
   "hint": {
    "ru": "Модуль $3$ — и спуск: покажите, что $x$ и $y$ обязаны делиться на $3$.",
    "en": "Modulus $3$, then descent: show both $x$ and $y$ must be divisible by $3$."
   },
   "sol": {
    "ru": "**Шаг 1.** По модулю $3$: $15x^2\\equiv0$ и $9\\equiv0$, значит $7y^{2}\\equiv0\\pmod3$. Так как $\\gcd(7,3)=1$, получаем $3\\mid y^{2}$, а $3$ простое, поэтому $3\\mid y$. Пишем $y=3b$: $$15x^{2}-63b^{2}=9\\quad\\Longrightarrow\\quad 5x^{2}-21b^{2}=3.$$\n\n**Шаг 2.** Снова по модулю $3$: $5x^{2}\\equiv0$, откуда $3\\mid x$. Пишем $x=3a$: $$45a^{2}-21b^{2}=3\\quad\\Longrightarrow\\quad 15a^{2}-7b^{2}=1.$$\n\n**Шаг 3.** Возьмём модуль $3$ в последнем равенстве: $-7b^{2}\\equiv1$, то есть $-b^{2}\\equiv1$ и $b^{2}\\equiv-1\\equiv2\\pmod3$. Но квадрат по модулю $3$ равен $0$ или $1$ — противоречие. $\\blacksquare$",
    "en": "**Step 1.** Modulo $3$: $15x^2\\equiv0$ and $9\\equiv0$, so $7y^{2}\\equiv0\\pmod3$. Since $\\gcd(7,3)=1$ we get $3\\mid y^{2}$, and as $3$ is prime, $3\\mid y$. Write $y=3b$: $$15x^{2}-63b^{2}=9\\quad\\Longrightarrow\\quad 5x^{2}-21b^{2}=3.$$\n\n**Step 2.** Modulo $3$ again: $5x^{2}\\equiv0$, so $3\\mid x$. Write $x=3a$: $$45a^{2}-21b^{2}=3\\quad\\Longrightarrow\\quad 15a^{2}-7b^{2}=1.$$\n\n**Step 3.** Take modulus $3$ in the last equality: $-7b^{2}\\equiv1$, that is $-b^{2}\\equiv1$ and $b^{2}\\equiv-1\\equiv2\\pmod3$. But a square is $0$ or $1$ modulo $3$ — contradiction. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что число пар натуральных чисел $(x,y)$ с $\\dfrac1x+\\dfrac1y=\\dfrac1n$ равно числу делителей числа $n^{2}$.",
    "en": "Prove that the number of pairs of positive integers $(x,y)$ with $\\dfrac1x+\\dfrac1y=\\dfrac1n$ equals the number of divisors of $n^{2}$."
   },
   "hint": {
    "ru": "$(x-n)(y-n)=n^2$, и оба множителя положительны.",
    "en": "$(x-n)(y-n)=n^2$, and both factors are positive."
   },
   "sol": {
    "ru": "Приводя к общему знаменателю, получаем $n(x+y)=xy$, то есть $xy-nx-ny=0$; прибавив $n^{2}$, приходим к $$(x-n)(y-n)=n^{2}.$$ Покажем, что оба множителя положительны. Если $x\\le n$, то $\\tfrac1x\\ge\\tfrac1n$, и тогда $\\tfrac1y=\\tfrac1n-\\tfrac1x\\le0$ — невозможно для натурального $y$. Значит $x>n$, и точно так же $y>n$.\n\nТеперь соответствие очевидно: каждому положительному делителю $d$ числа $n^{2}$ отвечает ровно одна пара $$x=n+d,\\qquad y=n+\\frac{n^{2}}{d},$$ и разным $d$ отвечают разные $x$, то есть разные пары. Обратно, любая пара даёт делитель $d=x-n$. Соответствие взаимно однозначно, поэтому пар ровно $\\tau(n^{2})$. $\\blacksquare$\n\n*Следствие.* Если $n=p$ простое, то $\\tau(p^{2})=3$: пары $(p+1,p^2+p)$, $(2p,2p)$, $(p^2+p,p+1)$.",
    "en": "Clearing denominators gives $n(x+y)=xy$, that is $xy-nx-ny=0$; adding $n^{2}$ yields $$(x-n)(y-n)=n^{2}.$$ Both factors are positive: if $x\\le n$ then $\\tfrac1x\\ge\\tfrac1n$ and $\\tfrac1y=\\tfrac1n-\\tfrac1x\\le0$, impossible for a positive integer $y$. So $x>n$, and likewise $y>n$.\n\nThe correspondence is now clear: each positive divisor $d$ of $n^{2}$ gives exactly one pair $$x=n+d,\\qquad y=n+\\frac{n^{2}}{d},$$ and different $d$ give different $x$, hence different pairs. Conversely every pair yields the divisor $d=x-n$. The correspondence is a bijection, so there are exactly $\\tau(n^{2})$ pairs. $\\blacksquare$\n\n*Corollary.* If $n=p$ is prime then $\\tau(p^{2})=3$: the pairs $(p+1,p^2+p)$, $(2p,2p)$, $(p^2+p,p+1)$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Найдите все тройки натуральных чисел с $x!+y!=z!$.",
    "en": "Find all triples of positive integers with $x!+y!=z!$."
   },
   "hint": {
    "ru": "Считайте $x\\le y$ и сравните $z!$ с $2\\cdot y!$.",
    "en": "Assume $x\\le y$ and compare $z!$ with $2\\cdot y!$."
   },
   "sol": {
    "ru": "Не умаляя общности, $x\\le y$. Тогда $z!=x!+y!>y!$, значит $z>y$ и потому $z\\ge y+1$, откуда $$z!\\ \\ge\\ (y+1)!\\ =\\ (y+1)\\cdot y!.$$ С другой стороны $x!\\le y!$, поэтому $$z!=x!+y!\\ \\le\\ 2\\cdot y!.$$ Сравнивая, получаем $(y+1)\\,y!\\le 2\\,y!$, то есть $y+1\\le2$ и $y=1$. Тогда $x\\le y=1$ даёт $x=1$, и $z!=1!+1!=2$, откуда $z=2$. **Ответ:** единственная тройка $(1,1,2)$. $\\blacksquare$",
    "en": "Without loss of generality $x\\le y$. Then $z!=x!+y!>y!$, so $z>y$ and therefore $z\\ge y+1$, giving $$z!\\ \\ge\\ (y+1)!\\ =\\ (y+1)\\cdot y!.$$ On the other hand $x!\\le y!$, so $$z!=x!+y!\\ \\le\\ 2\\cdot y!.$$ Comparing, $(y+1)\\,y!\\le 2\\,y!$, that is $y+1\\le2$ and $y=1$. Then $x\\le y=1$ forces $x=1$, and $z!=1!+1!=2$, so $z=2$. **Answer:** the single triple $(1,1,2)$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что уравнение $x^{2}+y^{2}=4z+3$ не имеет решений в целых числах.",
    "en": "Prove that $x^{2}+y^{2}=4z+3$ has no integer solutions."
   },
   "hint": {
    "ru": "Сумма двух квадратов по модулю $4$.",
    "en": "A sum of two squares modulo $4$."
   },
   "sol": {
    "ru": "Квадрат чётного числа равен $(2k)^2=4k^2\\equiv0\\pmod4$, квадрат нечётного равен $(2k+1)^2=4k(k+1)+1\\equiv1\\pmod4$. Значит каждый квадрат сравним с $0$ или $1$ по модулю $4$, и сумма двух квадратов принимает по модулю $4$ только значения $$0+0=0,\\quad 0+1=1,\\quad 1+1=2.$$ Остаток $3$ недостижим. Но правая часть $4z+3$ сравнима именно с $3$ по модулю $4$. Противоречие. $\\blacksquare$\n\n*Следствие.* Числа $3,7,11,15,\\dots$ — а также, например, $2023$ — не представимы суммой двух квадратов.",
    "en": "The square of an even number is $(2k)^2=4k^2\\equiv0\\pmod4$, and of an odd number $(2k+1)^2=4k(k+1)+1\\equiv1\\pmod4$. So every square is $0$ or $1$ modulo $4$, and a sum of two squares takes only the values $$0+0=0,\\quad 0+1=1,\\quad 1+1=2$$ modulo $4$. The remainder $3$ is unreachable, yet the right-hand side $4z+3$ is exactly $3$ modulo $4$. Contradiction. $\\blacksquare$\n\n*Corollary.* The numbers $3,7,11,15,\\dots$ — and, for instance, $2023$ — are not sums of two squares."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Решите в натуральных числах уравнение $3^{x}-2^{y}=1$.",
    "en": "Solve $3^{x}-2^{y}=1$ in positive integers."
   },
   "hint": {
    "ru": "Разберите $y\\le2$ отдельно, а при $y\\ge3$ возьмите модуль $8$.",
    "en": "Handle $y\\le2$ separately; for $y\\ge3$ take modulus $8$."
   },
   "sol": {
    "ru": "**Малые $y$.** При $y=1$: $3^{x}=3$, значит $x=1$. При $y=2$: $3^{x}=5$ — не степень тройки.\n\n**Случай $y\\ge3$.** Тогда $8\\mid2^{y}$, и равенство даёт $3^{x}\\equiv1\\pmod 8$. Но $3^{1}\\equiv3$ и $3^{2}\\equiv1\\pmod8$, то есть степени тройки по модулю $8$ чередуются: $3,1,3,1,\\dots$. Значит $x$ **чётно**, скажем $x=2m$.\n\nТеперь $$2^{y}=3^{2m}-1=(3^{m}-1)(3^{m}+1).$$ Оба множителя — делители степени двойки, значит сами степени двойки, и они отличаются на $2$. Две степени двойки, отличающиеся на $2$, — это только $2$ и $4$. Следовательно $3^{m}-1=2$, то есть $m=1$, $x=2$, и тогда $2^{y}=(3-1)(3+1)=2\\cdot4=8$, откуда $y=3$.\n\n**Ответ:** $(x,y)=(1,1)$ и $(2,3)$. Проверка: $3-2=1$ ✓ и $9-8=1$ ✓. $\\blacksquare$\n\n*Замечание.* Это частный случай теоремы Михайлеску (гипотезы Каталана): $8$ и $9$ — единственные соседние натуральные степени.",
    "en": "**Small $y$.** For $y=1$: $3^{x}=3$, so $x=1$. For $y=2$: $3^{x}=5$, not a power of three.\n\n**Case $y\\ge3$.** Then $8\\mid2^{y}$ and the equation gives $3^{x}\\equiv1\\pmod 8$. But $3^{1}\\equiv3$ and $3^{2}\\equiv1\\pmod8$, so the powers of three alternate $3,1,3,1,\\dots$ modulo $8$. Hence $x$ is **even**, say $x=2m$.\n\nNow $$2^{y}=3^{2m}-1=(3^{m}-1)(3^{m}+1).$$ Both factors divide a power of two, so both are powers of two, and they differ by $2$. The only two powers of two differing by $2$ are $2$ and $4$. Therefore $3^{m}-1=2$, so $m=1$, $x=2$, and then $2^{y}=(3-1)(3+1)=2\\cdot4=8$, giving $y=3$.\n\n**Answer:** $(x,y)=(1,1)$ and $(2,3)$. Check: $3-2=1$ ✓ and $9-8=1$ ✓. $\\blacksquare$\n\n*Remark.* This is a special case of Mihailescu’s theorem (Catalan’s conjecture): $8$ and $9$ are the only consecutive perfect powers."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что уравнение $x^{2}+y^{2}+z^{2}=2xyz$ имеет в целых числах только решение $x=y=z=0$.",
    "en": "Prove that $x^{2}+y^{2}+z^{2}=2xyz$ has only the solution $x=y=z=0$ in integers."
   },
   "hint": {
    "ru": "Сколько нечётных чисел может быть среди $x,y,z$? Считайте по модулю $4$.",
    "en": "How many of $x,y,z$ can be odd? Count modulo $4$."
   },
   "sol": {
    "ru": "Докажем общее утверждение: при любом $m\\ge1$ уравнение $$x^{2}+y^{2}+z^{2}=2^{m}xyz$$ имеет только нулевое решение. Исходное — случай $m=1$.\n\n**Ключевая лемма.** Квадрат чётного числа сравним с $0$, а квадрат нечётного — с $1$ по модулю $4$. Поэтому $x^{2}+y^{2}+z^{2}\\equiv k\\pmod 4$, где $k\\in\\{0,1,2,3\\}$ — количество нечётных среди $x,y,z$.\n\n**Шаг 1: все три числа чётны.**\n*Если $k=1$ или $k=3$,* левая часть нечётна, а правая чётна — невозможно.\n*Если $k=2$,* то левая часть $\\equiv2\\pmod4$; но среди $x,y,z$ есть чётное, поэтому $xyz$ чётно и правая часть делится на $4$. Противоречие.\nОстаётся $k=0$: числа $x,y,z$ все чётны.\n\n**Шаг 2: спуск.** Пишем $x=2a$, $y=2b$, $z=2c$: $$4(a^{2}+b^{2}+c^{2})=2^{m}\\cdot8abc\\quad\\Longrightarrow\\quad a^{2}+b^{2}+c^{2}=2^{m+1}abc.$$ Получилось уравнение того же вида с показателем $m+1$.\n\n**Шаг 3: вывод.** Предположим, что существует ненулевое решение, и выберем среди всех ненулевых решений (при всех $m\\ge1$) то, у которого сумма $x^{2}+y^{2}+z^{2}>0$ наименьшая. По шагам 1–2 из него строится решение $(a,b,c)$ с суммой квадратов вчетверо меньшей и по-прежнему положительной. Противоречие с минимальностью.\n\nЗначит ненулевых решений нет. $\\blacksquare$",
    "en": "We prove the general statement: for every $m\\ge1$ the equation $$x^{2}+y^{2}+z^{2}=2^{m}xyz$$ has only the zero solution. The original is the case $m=1$.\n\n**Key lemma.** An even square is $0$ and an odd square is $1$ modulo $4$. Hence $x^{2}+y^{2}+z^{2}\\equiv k\\pmod 4$, where $k\\in\\{0,1,2,3\\}$ is the number of odd entries among $x,y,z$.\n\n**Step 1: all three are even.**\n*If $k=1$ or $k=3$,* the left side is odd and the right side even — impossible.\n*If $k=2$,* the left side is $\\equiv2\\pmod4$; but one of $x,y,z$ is then even, so $xyz$ is even and the right side is divisible by $4$. Contradiction.\nOnly $k=0$ survives: $x,y,z$ are all even.\n\n**Step 2: descent.** Write $x=2a$, $y=2b$, $z=2c$: $$4(a^{2}+b^{2}+c^{2})=2^{m}\\cdot8abc\\quad\\Longrightarrow\\quad a^{2}+b^{2}+c^{2}=2^{m+1}abc.$$ This is the same equation with exponent $m+1$.\n\n**Step 3: conclusion.** Suppose a non-zero solution exists, and among all non-zero solutions (over all $m\\ge1$) choose one with the smallest positive value of $x^{2}+y^{2}+z^{2}$. Steps 1–2 build from it a solution $(a,b,c)$ whose sum of squares is four times smaller and still positive. That contradicts minimality.\n\nSo there is no non-zero solution. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Найдите все пары различных натуральных чисел $x\\ne y$ с $x^{y}=y^{x}$.",
    "en": "Find all pairs of distinct positive integers $x\\ne y$ with $x^{y}=y^{x}$."
   },
   "hint": {
    "ru": "Сравните $n^{n+1}$ и $(n+1)^{n}$ при $n\\ge3$.",
    "en": "Compare $n^{n+1}$ with $(n+1)^{n}$ for $n\\ge3$."
   },
   "sol": {
    "ru": "Считаем $x<y$ (вторую пару получим перестановкой).\n\n**Лемма.** При $n\\ge3$ выполняется $n^{\\,n+1}>(n+1)^{n}$.\n*Доказательство.* Неравенство равносильно $n>\\left(1+\\tfrac1n\\right)^{n}$. По формуле бинома $$\\Big(1+\\frac1n\\Big)^{n}=\\sum_{k=0}^{n}\\binom{n}{k}\\frac1{n^{k}},\\qquad \\binom{n}{k}\\frac1{n^{k}}=\\frac{n(n-1)\\cdots(n-k+1)}{k!\\,n^{k}}\\le\\frac1{k!},$$ поэтому $$\\Big(1+\\frac1n\\Big)^{n}\\le\\sum_{k=0}^{n}\\frac1{k!}<1+1+\\frac12+\\frac14+\\frac18+\\dots=3\\le n. \\qquad\\square$$\n\n**Следствие.** Величина $\\sqrt[n]{n}$ строго убывает при $n\\ge3$: из $n^{\\,n+1}>(n+1)^{n}$ извлекаем корень степени $n(n+1)$ и получаем $\\sqrt[n]{n}>\\sqrt[n+1]{n+1}$.\n\n**Решение.** Равенство $x^{y}=y^{x}$ равносильно $\\sqrt[x]{x}=\\sqrt[y]{y}$ (возведите обе части в степень $\\tfrac1{xy}$). Выпишем первые значения: $$\\sqrt[1]{1}=1,\\quad\\sqrt[2]{2}\\approx1{,}414,\\quad\\sqrt[3]{3}\\approx1{,}442,\\quad\\sqrt[4]{4}=\\sqrt2\\approx1{,}414 .$$ Начиная с $n=3$ последовательность строго убывает, поэтому равные значения могут дать только два индекса, один из которых меньше $3$. Индекс $1$ отпадает: $\\sqrt[n]{n}>1$ при $n\\ge2$. Остаётся $x=2$, и тогда нужно $\\sqrt[y]{y}=\\sqrt2=\\sqrt[4]{4}$, то есть $y=4$ (других нет, так как при $y\\ge3$ последовательность строго убывает и значение $\\sqrt2$ принимается лишь при $y=4$).\n\n**Ответ:** $(x,y)=(2,4)$ и $(4,2)$. Проверка: $2^{4}=16=4^{2}$ ✓ $\\blacksquare$",
    "en": "Assume $x<y$ (the other pair comes by swapping).\n\n**Lemma.** For $n\\ge3$ we have $n^{\\,n+1}>(n+1)^{n}$.\n*Proof.* The inequality is equivalent to $n>\\left(1+\\tfrac1n\\right)^{n}$. By the binomial theorem $$\\Big(1+\\frac1n\\Big)^{n}=\\sum_{k=0}^{n}\\binom{n}{k}\\frac1{n^{k}},\\qquad \\binom{n}{k}\\frac1{n^{k}}=\\frac{n(n-1)\\cdots(n-k+1)}{k!\\,n^{k}}\\le\\frac1{k!},$$ hence $$\\Big(1+\\frac1n\\Big)^{n}\\le\\sum_{k=0}^{n}\\frac1{k!}<1+1+\\frac12+\\frac14+\\frac18+\\dots=3\\le n. \\qquad\\square$$\n\n**Corollary.** The quantity $\\sqrt[n]{n}$ is strictly decreasing for $n\\ge3$: take the $n(n+1)$-th root of $n^{\\,n+1}>(n+1)^{n}$ to get $\\sqrt[n]{n}>\\sqrt[n+1]{n+1}$.\n\n**Solution.** The equality $x^{y}=y^{x}$ is equivalent to $\\sqrt[x]{x}=\\sqrt[y]{y}$ (raise both sides to the power $\\tfrac1{xy}$). The first values are $$\\sqrt[1]{1}=1,\\quad\\sqrt[2]{2}\\approx1.414,\\quad\\sqrt[3]{3}\\approx1.442,\\quad\\sqrt[4]{4}=\\sqrt2\\approx1.414 .$$ From $n=3$ on the sequence strictly decreases, so two indices can give equal values only if one of them is below $3$. Index $1$ is out, since $\\sqrt[n]{n}>1$ for $n\\ge2$. That leaves $x=2$, and we need $\\sqrt[y]{y}=\\sqrt2=\\sqrt[4]{4}$, so $y=4$ (nothing else works, because for $y\\ge3$ the sequence strictly decreases and takes the value $\\sqrt2$ only at $y=4$).\n\n**Answer:** $(x,y)=(2,4)$ and $(4,2)$. Check: $2^{4}=16=4^{2}$ ✓ $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача Ферма / Fermat, classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что уравнение $x^{4}+y^{4}=z^{2}$ не имеет решений в натуральных числах.",
    "en": "Prove that $x^{4}+y^{4}=z^{2}$ has no solutions in positive integers."
   },
   "hint": {
    "ru": "Возьмите решение с наименьшим $z$ и дважды примените параметризацию пифагоровых троек.",
    "en": "Take the solution with the smallest $z$ and use the Pythagorean parametrisation twice."
   },
   "sol": {
    "ru": "Нам понадобится известный факт: если $a^{2}+b^{2}=c^{2}$, числа $a,b,c$ натуральны, $\\gcd(a,b)=1$ и $b$ чётно, то найдутся взаимно простые $m>n>0$ разной чётности с $$a=m^{2}-n^{2},\\qquad b=2mn,\\qquad c=m^{2}+n^{2}.$$\n\nПредположим, что решения есть, и выберем то, у которого $z$ **наименьшее**.\n\n**Шаг 1: $\\gcd(x,y)=1$.** Если простое $p$ делит и $x$, и $y$, то $p^{4}\\mid z^{2}$, значит $p^{2}\\mid z$, и тройка $(x/p,\\;y/p,\\;z/p^{2})$ — решение с меньшим $z$. Противоречие.\n\n**Шаг 2: первая параметризация.** Равенство $(x^{2})^{2}+(y^{2})^{2}=z^{2}$ — примитивная пифагорова тройка (общий делитель $x^2$ и $y^2$ был бы общим делителем $x$ и $y$). Ровно одно из чисел $x,y$ чётно; пусть чётно $y$. Тогда $$x^{2}=m^{2}-n^{2},\\qquad y^{2}=2mn,\\qquad z=m^{2}+n^{2},$$ где $\\gcd(m,n)=1$, $m>n>0$ и $m,n$ разной чётности.\n\n**Шаг 3: вторая параметризация.** Из первого равенства $x^{2}+n^{2}=m^{2}$ — снова примитивная тройка. Здесь $x$ нечётно (иначе $x$ и $y$ оба чётны), значит чётно $n$, и $$x=p^{2}-q^{2},\\qquad n=2pq,\\qquad m=p^{2}+q^{2},$$ где $\\gcd(p,q)=1$, $p>q>0$.\n\n**Шаг 4: три взаимно простых сомножителя.** Подставим в $y^{2}=2mn$: $$y^{2}=2\\,(p^{2}+q^{2})\\cdot 2pq=4pq(p^{2}+q^{2}),\\qquad\\text{значит}\\qquad \\Big(\\frac{y}{2}\\Big)^{2}=pq\\,(p^{2}+q^{2}).$$ Числа $p$, $q$ и $p^{2}+q^{2}$ попарно взаимно просты: $\\gcd(p,q)=1$, а общий простой делитель $p$ и $p^{2}+q^{2}$ делил бы $q^{2}$. Произведение попарно взаимно простых чисел является квадратом только если каждое из них квадрат: $$p=a^{2},\\qquad q=b^{2},\\qquad p^{2}+q^{2}=c^{2}.$$\n\n**Шаг 5: спуск.** Тогда $$a^{4}+b^{4}=p^{2}+q^{2}=c^{2},$$ то есть $(a,b,c)$ — новое решение исходного уравнения. Оценим его: $$c\\le c^{2}=p^{2}+q^{2}=m\\le m^{2}<m^{2}+n^{2}=z .$$ Получили решение с меньшим $z$ — противоречие с выбором минимального $z$.\n\nЗначит решений нет. $\\blacksquare$\n\n*Следствие.* Уравнение $x^{4}+y^{4}=w^{4}$ тоже неразрешимо (возьмите $z=w^{2}$) — это Великая теорема Ферма для показателя $4$, единственный случай, который доказал сам Ферма.",
    "en": "We use a standard fact: if $a^{2}+b^{2}=c^{2}$ with $a,b,c$ positive, $\\gcd(a,b)=1$ and $b$ even, then there are coprime $m>n>0$ of opposite parity with $$a=m^{2}-n^{2},\\qquad b=2mn,\\qquad c=m^{2}+n^{2}.$$\n\nSuppose solutions exist and pick one with the **smallest** $z$.\n\n**Step 1: $\\gcd(x,y)=1$.** If a prime $p$ divides both $x$ and $y$ then $p^{4}\\mid z^{2}$, so $p^{2}\\mid z$, and $(x/p,\\;y/p,\\;z/p^{2})$ is a solution with a smaller $z$. Contradiction.\n\n**Step 2: first parametrisation.** The equality $(x^{2})^{2}+(y^{2})^{2}=z^{2}$ is a primitive Pythagorean triple (a common divisor of $x^2$ and $y^2$ would be one of $x$ and $y$). Exactly one of $x,y$ is even; say $y$ is. Then $$x^{2}=m^{2}-n^{2},\\qquad y^{2}=2mn,\\qquad z=m^{2}+n^{2},$$ with $\\gcd(m,n)=1$, $m>n>0$ and $m,n$ of opposite parity.\n\n**Step 3: second parametrisation.** The first equality reads $x^{2}+n^{2}=m^{2}$ — again a primitive triple. Here $x$ is odd (otherwise both $x$ and $y$ would be even), so $n$ is even and $$x=p^{2}-q^{2},\\qquad n=2pq,\\qquad m=p^{2}+q^{2},$$ with $\\gcd(p,q)=1$, $p>q>0$.\n\n**Step 4: three coprime factors.** Substituting into $y^{2}=2mn$: $$y^{2}=2\\,(p^{2}+q^{2})\\cdot 2pq=4pq(p^{2}+q^{2}),\\qquad\\text{so}\\qquad \\Big(\\frac{y}{2}\\Big)^{2}=pq\\,(p^{2}+q^{2}).$$ The numbers $p$, $q$ and $p^{2}+q^{2}$ are pairwise coprime: $\\gcd(p,q)=1$, and a common prime of $p$ and $p^{2}+q^{2}$ would divide $q^{2}$. A product of pairwise coprime numbers is a square only when each factor is a square: $$p=a^{2},\\qquad q=b^{2},\\qquad p^{2}+q^{2}=c^{2}.$$\n\n**Step 5: descent.** Then $$a^{4}+b^{4}=p^{2}+q^{2}=c^{2},$$ so $(a,b,c)$ is a new solution of the original equation, and $$c\\le c^{2}=p^{2}+q^{2}=m\\le m^{2}<m^{2}+n^{2}=z .$$ We have found a solution with a smaller $z$ — contradicting the choice of the minimal one.\n\nSo there are no solutions. $\\blacksquare$\n\n*Corollary.* The equation $x^{4}+y^{4}=w^{4}$ is also unsolvable (take $z=w^{2}$) — Fermat’s Last Theorem for exponent $4$, the only case Fermat himself proved."
   }
  },
  {
   "src": "IMO 1988, задача 6 / IMO 1988 Problem 6",
   "lvl": 3,
   "q": {
    "ru": "Пусть $a$ и $b$ — натуральные числа, для которых $ab+1$ делит $a^{2}+b^{2}$. Докажите, что $\\dfrac{a^{2}+b^{2}}{ab+1}$ — точный квадрат.",
    "en": "Let $a$ and $b$ be positive integers such that $ab+1$ divides $a^{2}+b^{2}$. Prove that $\\dfrac{a^{2}+b^{2}}{ab+1}$ is a perfect square."
   },
   "hint": {
    "ru": "Зафиксируйте $k$ и посмотрите на $a^{2}-kab+b^{2}-k=0$ как на квадратное уравнение относительно $a$: у него есть второй корень.",
    "en": "Fix $k$ and read $a^{2}-kab+b^{2}-k=0$ as a quadratic in $a$: it has a second root."
   },
   "sol": {
    "ru": "Пусть $k=\\dfrac{a^{2}+b^{2}}{ab+1}$ — натуральное число. Тогда $$a^{2}+b^{2}=k(ab+1),\\qquad\\text{то есть}\\qquad a^{2}-kab+b^{2}-k=0. \\tag{$\\ast$}$$\n\nПредположим, что $k$ **не** является точным квадратом, и среди всех пар $(a,b)$ натуральных чисел, удовлетворяющих $(\\ast)$ с этим $k$, выберем пару с наименьшей суммой $a+b$. Не умаляя общности, $a\\ge b$.\n\n**Второй корень.** Зафиксируем $b$ и $k$ и будем считать $(\\ast)$ квадратным уравнением относительно первой переменной: $$t^{2}-(kb)\\,t+(b^{2}-k)=0 .$$ Один его корень — $t_1=a$. По теореме Виета второй корень равен $$t_{2}=kb-a=\\frac{b^{2}-k}{a}.$$ Первое выражение показывает, что $t_2$ **целое**; второе — что $t_2$ вместе с $b$ тоже удовлетворяет $(\\ast)$.\n\n**$t_2$ не отрицательно.** Если бы $t_{2}<0$, то $$t_{2}^{2}-kbt_{2}+b^{2}-k\\ \\ge\\ t_2^2+kb+b^{2}-k\\ >\\ 0,$$ так как $-kbt_2\\ge kb$ при $t_2\\le-1$ и $kb-k=k(b-1)\\ge0$. Но это выражение равно нулю — противоречие. Значит $t_{2}\\ge0$.\n\n**$t_2$ не равно нулю.** Если $t_{2}=0$, то из $(\\ast)$ получаем $b^{2}=k$, то есть $k$ — точный квадрат, вопреки предположению.\n\n**Спуск.** Итак, $t_{2}$ — натуральное число и $(t_{2},b)$ — решение с тем же $k$. Оценим его: из $t_{2}=\\dfrac{b^{2}-k}{a}$ и $a\\ge b$ следует $$t_{2}\\le\\frac{b^{2}-k}{b}<b\\le a,$$ поэтому $t_{2}+b<a+b$. Это противоречит минимальности выбранной пары.\n\nЗначит предположение неверно: $k$ обязан быть точным квадратом. $\\blacksquare$\n\n*Замечание.* Приём называется **прыжком Виеты** (Vieta jumping) и родился именно на этой задаче. Пример: $a=8$, $b=2$ дают $\\dfrac{64+4}{17}=4=2^{2}$.",
    "en": "Let $k=\\dfrac{a^{2}+b^{2}}{ab+1}$ be a positive integer. Then $$a^{2}+b^{2}=k(ab+1),\\qquad\\text{that is}\\qquad a^{2}-kab+b^{2}-k=0. \\tag{$\\ast$}$$\n\nSuppose $k$ is **not** a perfect square, and among all pairs $(a,b)$ of positive integers satisfying $(\\ast)$ with this $k$, choose one with the smallest sum $a+b$. Without loss of generality $a\\ge b$.\n\n**The second root.** Fix $b$ and $k$ and read $(\\ast)$ as a quadratic in the first variable: $$t^{2}-(kb)\\,t+(b^{2}-k)=0 .$$ One root is $t_1=a$. By Vieta the other root is $$t_{2}=kb-a=\\frac{b^{2}-k}{a}.$$ The first expression shows $t_2$ is an **integer**; the second shows that $t_2$ together with $b$ also satisfies $(\\ast)$.\n\n**$t_2$ is not negative.** If $t_{2}<0$ then $$t_{2}^{2}-kbt_{2}+b^{2}-k\\ \\ge\\ t_2^2+kb+b^{2}-k\\ >\\ 0,$$ since $-kbt_2\\ge kb$ when $t_2\\le-1$ and $kb-k=k(b-1)\\ge0$. But that expression is zero — contradiction. So $t_{2}\\ge0$.\n\n**$t_2$ is not zero.** If $t_{2}=0$ then $(\\ast)$ gives $b^{2}=k$, making $k$ a perfect square, against our assumption.\n\n**Descent.** So $t_{2}$ is a positive integer and $(t_{2},b)$ is a solution with the same $k$. Bounding it: from $t_{2}=\\dfrac{b^{2}-k}{a}$ and $a\\ge b$, $$t_{2}\\le\\frac{b^{2}-k}{b}<b\\le a,$$ hence $t_{2}+b<a+b$. This contradicts the minimality of the chosen pair.\n\nSo the assumption fails and $k$ must be a perfect square. $\\blacksquare$\n\n*Remark.* The technique is called **Vieta jumping**, and it was born on this very problem. Example: $a=8$, $b=2$ give $\\dfrac{64+4}{17}=4=2^{2}$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Решите уравнение $7x+11y=100$ в неотрицательных целых числах.",
    "en": "Solve $7x+11y=100$ in non-negative integers."
   },
   "hint": {
    "ru": "Переберите $y$: их немного, ведь $11y\\le100$.",
    "en": "Run through $y$: there are few, since $11y\\le100$."
   },
   "sol": {
    "ru": "Из $11y\\le100$ следует $y\\le9$. Для каждого такого $y$ проверим, делится ли $100-11y$ на $7$:\n\n$y=0:\\ 100$ ✗; $\\ y=1:\\ 89$ ✗; $\\ y=2:\\ 78$ ✗; $\\ y=3:\\ 67$ ✗;\n\n$y=4:\\ 56=7\\cdot8$ ✓; $\\ y=5:\\ 45$ ✗; $\\ y=6:\\ 34$ ✗;\n\n$y=7:\\ 23$ ✗; $\\ y=8:\\ 12$ ✗; $\\ y=9:\\ 1$ ✗.\n\nПодошло единственное значение $y=4$, при нём $x=8$.\n\n**Проверка:** $7\\cdot8+11\\cdot4=56+44=100$ ✓\n\n**Ответ:** $(x,y)=(8,4)$.",
    "en": "From $11y\\le100$ we get $y\\le9$. For each such $y$ check whether $100-11y$ is divisible by $7$:\n\n$y=0:\\ 100$ ✗; $\\ y=1:\\ 89$ ✗; $\\ y=2:\\ 78$ ✗; $\\ y=3:\\ 67$ ✗;\n\n$y=4:\\ 56=7\\cdot8$ ✓; $\\ y=5:\\ 45$ ✗; $\\ y=6:\\ 34$ ✗;\n\n$y=7:\\ 23$ ✗; $\\ y=8:\\ 12$ ✗; $\\ y=9:\\ 1$ ✗.\n\nOnly $y=4$ works, and then $x=8$.\n\n**Check:** $7\\cdot8+11\\cdot4=56+44=100$ ✓\n\n**Answer:** $(x,y)=(8,4)$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что уравнение $2x+4y=7$ не имеет решений в целых числах.",
    "en": "Prove that $2x+4y=7$ has no solutions in integers."
   },
   "hint": {
    "ru": "Посмотрите на чётность.",
    "en": "Look at parity."
   },
   "sol": {
    "ru": "Левая часть $$2x+4y=2(x+2y)$$ при целых $x,y$ всегда чётна.\n\nПравая часть равна $7$ — нечётное число.\n\nЧётное число не может равняться нечётному, значит решений нет. $\\blacksquare$\n\n**Общее правило.** Уравнение $ax+by=c$ разрешимо в целых числах тогда и только тогда, когда $\\gcd(a,b)$ делит $c$. Здесь $\\gcd(2,4)=2$, а $2\\nmid7$.",
    "en": "The left-hand side $$2x+4y=2(x+2y)$$ is always even for integers $x,y$.\n\nThe right-hand side is $7$, an odd number.\n\nAn even number cannot equal an odd one, so there are no solutions. $\\blacksquare$\n\n**General rule.** The equation $ax+by=c$ is solvable in integers exactly when $\\gcd(a,b)$ divides $c$. Here $\\gcd(2,4)=2$ while $2\\nmid7$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Найдите все пары натуральных чисел $(x,y)$, для которых $x+y=xy$.",
    "en": "Find all pairs of positive integers $(x,y)$ with $x+y=xy$."
   },
   "hint": {
    "ru": "Перенесите всё влево и прибавьте единицу.",
    "en": "Move everything to one side and add one."
   },
   "sol": {
    "ru": "Перепишем: $$xy-x-y=0 .$$ Прибавим $1$ к обеим частям и разложим: $$xy-x-y+1=1\\quad\\Longleftrightarrow\\quad (x-1)(y-1)=1 .$$\n\nПроизведение двух целых чисел равно единице только если оба равны $1$ (случай $-1$ и $-1$ дал бы $x=y=0$, что не натурально). Значит $$x-1=1,\\qquad y-1=1 .$$\n\n**Проверка:** $x=y=2$, тогда $2+2=4$ и $2\\cdot2=4$ ✓\n\n**Ответ:** $(2,2)$.",
    "en": "Rewrite: $$xy-x-y=0 .$$ Add $1$ to both sides and factor: $$xy-x-y+1=1\\quad\\Longleftrightarrow\\quad (x-1)(y-1)=1 .$$\n\nA product of two integers equals one only if both equal $1$ (taking $-1$ and $-1$ would give $x=y=0$, not positive). So $$x-1=1,\\qquad y-1=1 .$$\n\n**Check:** $x=y=2$ gives $2+2=4$ and $2\\cdot2=4$ ✓\n\n**Answer:** $(2,2)$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 1,
   "q": {
    "ru": "Найдите все пары натуральных чисел $(x,y)$, для которых $x^{2}=y^{2}+21$.",
    "en": "Find all pairs of positive integers $(x,y)$ with $x^{2}=y^{2}+21$."
   },
   "hint": {
    "ru": "$(x-y)(x+y)=21$.",
    "en": "$(x-y)(x+y)=21$."
   },
   "sol": {
    "ru": "Перенесём и разложим: $$x^{2}-y^{2}=21\\quad\\Longleftrightarrow\\quad (x-y)(x+y)=21 .$$\n\nОба множителя натуральные (ведь $x>y>0$), причём $x-y<x+y$. Разложения числа $21$: $$1\\cdot21\\qquad\\text{и}\\qquad 3\\cdot7 .$$\n\n**Первое:** $x-y=1$, $x+y=21$ $\\Rightarrow$ $x=11$, $y=10$.\n\n**Второе:** $x-y=3$, $x+y=7$ $\\Rightarrow$ $x=5$, $y=2$.\n\n**Проверка:** $11^{2}-10^{2}=121-100=21$ ✓ и $5^{2}-2^{2}=25-4=21$ ✓\n\n**Ответ:** $(11,10)$ и $(5,2)$.",
    "en": "Move and factor: $$x^{2}-y^{2}=21\\quad\\Longleftrightarrow\\quad (x-y)(x+y)=21 .$$\n\nBoth factors are positive (as $x>y>0$) and $x-y<x+y$. The factorisations of $21$ are $$1\\cdot21\\qquad\\text{and}\\qquad 3\\cdot7 .$$\n\n**First:** $x-y=1$, $x+y=21$ $\\Rightarrow$ $x=11$, $y=10$.\n\n**Second:** $x-y=3$, $x+y=7$ $\\Rightarrow$ $x=5$, $y=2$.\n\n**Check:** $11^{2}-10^{2}=121-100=21$ ✓ and $5^{2}-2^{2}=25-4=21$ ✓\n\n**Answer:** $(11,10)$ and $(5,2)$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Найдите все пары натуральных чисел $(x,y)$ с $x<y$ и $xy=24$.",
    "en": "Find all pairs of positive integers $(x,y)$ with $x<y$ and $xy=24$."
   },
   "hint": {
    "ru": "Выпишите делители числа $24$.",
    "en": "List the divisors of $24$."
   },
   "sol": {
    "ru": "Делители числа $24=2^{3}\\cdot3$: $$1,\\;2,\\;3,\\;4,\\;6,\\;8,\\;12,\\;24 $$ — всего $(3+1)(1+1)=8$ штук.\n\nОни разбиваются на пары с произведением $24$: $$1\\cdot24,\\qquad 2\\cdot12,\\qquad 3\\cdot8,\\qquad 4\\cdot6 .$$\n\nУсловие $x<y$ означает, что в каждой паре меньшее число берём за $x$.\n\n**Ответ:** $(1,24)$, $(2,12)$, $(3,8)$, $(4,6)$ — четыре пары.",
    "en": "The divisors of $24=2^{3}\\cdot3$ are $$1,\\;2,\\;3,\\;4,\\;6,\\;8,\\;12,\\;24 $$ — that is $(3+1)(1+1)=8$ of them.\n\nThey pair up with product $24$: $$1\\cdot24,\\qquad 2\\cdot12,\\qquad 3\\cdot8,\\qquad 4\\cdot6 .$$\n\nThe condition $x<y$ just means taking the smaller member of each pair as $x$.\n\n**Answer:** $(1,24)$, $(2,12)$, $(3,8)$, $(4,6)$ — four pairs."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Решите уравнение $3x+4y=25$ в натуральных числах.",
    "en": "Solve $3x+4y=25$ in positive integers."
   },
   "hint": {
    "ru": "Из $4y<25$ следует $y\\le6$.",
    "en": "From $4y<25$ we get $y\\le6$."
   },
   "sol": {
    "ru": "Так как $x\\ge1$, имеем $4y\\le22$, то есть $y\\le5$. Переберём:\n\n$y=1:\\ 3x=21$, $x=7$ ✓\n\n$y=2:\\ 3x=17$ ✗\n\n$y=3:\\ 3x=13$ ✗\n\n$y=4:\\ 3x=9$, $x=3$ ✓\n\n$y=5:\\ 3x=5$ ✗\n\n**Проверка:** $3\\cdot7+4=25$ ✓ и $3\\cdot3+4\\cdot4=9+16=25$ ✓\n\n**Ответ:** $(7,1)$ и $(3,4)$.\n\n**Замечание.** Решения идут с шагом: $x$ уменьшается на $4$, $y$ увеличивается на $3$ — это общий вид решений линейного уравнения.",
    "en": "Since $x\\ge1$ we have $4y\\le22$, i.e. $y\\le5$. Run through:\n\n$y=1:\\ 3x=21$, $x=7$ ✓\n\n$y=2:\\ 3x=17$ ✗\n\n$y=3:\\ 3x=13$ ✗\n\n$y=4:\\ 3x=9$, $x=3$ ✓\n\n$y=5:\\ 3x=5$ ✗\n\n**Check:** $3\\cdot7+4=25$ ✓ and $3\\cdot3+4\\cdot4=9+16=25$ ✓\n\n**Answer:** $(7,1)$ and $(3,4)$.\n\n**Remark.** Note the step: $x$ drops by $4$ while $y$ rises by $3$ — the general shape of the solutions of a linear equation."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите все пары целых чисел $(x,y)$, для которых $x^{2}+y^{2}=25$.",
    "en": "Find all pairs of integers $(x,y)$ with $x^{2}+y^{2}=25$."
   },
   "hint": {
    "ru": "Оба квадрата не превосходят $25$, значит $|x|\\le5$.",
    "en": "Both squares are at most $25$, so $|x|\\le5$."
   },
   "sol": {
    "ru": "Из $x^{2}\\le25$ следует $|x|\\le5$; переберём неотрицательные $x$ и найдём $y^{2}=25-x^{2}$:\n\n$x=0:\\ y^{2}=25$, $y=\\pm5$ ✓\n\n$x=1:\\ y^{2}=24$ ✗\n\n$x=2:\\ y^{2}=21$ ✗\n\n$x=3:\\ y^{2}=16$, $y=\\pm4$ ✓\n\n$x=4:\\ y^{2}=9$, $y=\\pm3$ ✓\n\n$x=5:\\ y^{2}=0$, $y=0$ ✓\n\nУчитывая ещё и отрицательные $x$, получаем список $$(0,\\pm5),\\ (\\pm5,0),\\ (\\pm3,\\pm4),\\ (\\pm4,\\pm3).$$\n\n**Ответ:** всего $12$ пар: четыре «осевых» и восемь с $\\{|x|,|y|\\}=\\{3,4\\}$.",
    "en": "From $x^{2}\\le25$ we get $|x|\\le5$; run through non-negative $x$ and solve $y^{2}=25-x^{2}$:\n\n$x=0:\\ y^{2}=25$, $y=\\pm5$ ✓\n\n$x=1:\\ y^{2}=24$ ✗\n\n$x=2:\\ y^{2}=21$ ✗\n\n$x=3:\\ y^{2}=16$, $y=\\pm4$ ✓\n\n$x=4:\\ y^{2}=9$, $y=\\pm3$ ✓\n\n$x=5:\\ y^{2}=0$, $y=0$ ✓\n\nIncluding negative $x$ as well, the list is $$(0,\\pm5),\\ (\\pm5,0),\\ (\\pm3,\\pm4),\\ (\\pm4,\\pm3).$$\n\n**Answer:** $12$ pairs in all — four on the axes and eight with $\\{|x|,|y|\\}=\\{3,4\\}$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что уравнение $4x+6y=2025$ не имеет решений в целых числах.",
    "en": "Prove that $4x+6y=2025$ has no integer solutions."
   },
   "hint": {
    "ru": "Что общего у коэффициентов?",
    "en": "What do the coefficients have in common?"
   },
   "sol": {
    "ru": "Оба коэффициента делятся на $2$: $$4x+6y=2(2x+3y).$$\n\nЗначит левая часть чётна при любых целых $x,y$, а $2025$ нечётно ✗\n\n**Ответ:** решений нет. $\\blacksquare$\n\n**Замечание.** Признак разрешимости: $ax+by=c$ решается в целых числах ровно тогда, когда $\\gcd(a,b)\\mid c$. Здесь $\\gcd(4,6)=2$, а $2025$ нечётно. Заметьте, что уравнение $4x+6y=2024$ решения имеет — например, $x=506$, $y=0$.",
    "en": "Both coefficients are even: $$4x+6y=2(2x+3y).$$\n\nSo the left side is even for all integers $x,y$, whereas $2025$ is odd ✗\n\n**Answer:** there are no solutions. $\\blacksquare$\n\n**Remark.** The solvability test: $ax+by=c$ has integer solutions exactly when $\\gcd(a,b)\\mid c$. Here $\\gcd(4,6)=2$ while $2025$ is odd. Note that $4x+6y=2024$ does have solutions — e.g. $x=506$, $y=0$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите все натуральные $n$, при которых $n^{2}+2n+12$ — полный квадрат.",
    "en": "Find all positive integers $n$ for which $n^{2}+2n+12$ is a perfect square."
   },
   "hint": {
    "ru": "$n^{2}+2n+12=(n+1)^{2}+11$.",
    "en": "$n^{2}+2n+12=(n+1)^{2}+11$."
   },
   "sol": {
    "ru": "Выделим полный квадрат: $$n^{2}+2n+12=(n+1)^{2}+11 .$$\n\nПусть это равно $m^{2}$ с $m>0$. Тогда $$m^{2}-(n+1)^{2}=11\\quad\\Longleftrightarrow\\quad \\bigl(m-(n+1)\\bigr)\\bigl(m+(n+1)\\bigr)=11 .$$\n\nЧисло $11$ простое, оба множителя положительны (второй больше первого), поэтому $$m-(n+1)=1,\\qquad m+(n+1)=11 .$$\n\nСкладывая: $2m=12$, $m=6$; вычитая: $2(n+1)=10$, $n=4$.\n\n**Проверка:** $4^{2}+2\\cdot4+12=16+8+12=36=6^{2}$ ✓\n\n**Ответ:** $n=4$.",
    "en": "Complete the square: $$n^{2}+2n+12=(n+1)^{2}+11 .$$\n\nSuppose this equals $m^{2}$ with $m>0$. Then $$m^{2}-(n+1)^{2}=11\\quad\\Longleftrightarrow\\quad \\bigl(m-(n+1)\\bigr)\\bigl(m+(n+1)\\bigr)=11 .$$\n\nAs $11$ is prime and both factors are positive with the second larger, $$m-(n+1)=1,\\qquad m+(n+1)=11 .$$\n\nAdding: $2m=12$, $m=6$; subtracting: $2(n+1)=10$, $n=4$.\n\n**Check:** $4^{2}+2\\cdot4+12=16+8+12=36=6^{2}$ ✓\n\n**Answer:** $n=4$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Решите уравнение $x^{2}-4y^{2}=21$ в натуральных числах.",
    "en": "Solve $x^{2}-4y^{2}=21$ in positive integers."
   },
   "hint": {
    "ru": "$x^{2}-4y^{2}=(x-2y)(x+2y)$.",
    "en": "$x^{2}-4y^{2}=(x-2y)(x+2y)$."
   },
   "sol": {
    "ru": "Разложим левую часть как разность квадратов: $$(x-2y)(x+2y)=21 .$$\n\nОба множителя целые, второй положителен и больше первого, значит оба положительны. Разложения: $1\\cdot21$ и $3\\cdot7$.\n\n**Случай $x-2y=1$, $x+2y=21$.** Сложив: $2x=22$, $x=11$; вычтя: $4y=20$, $y=5$ ✓\n\n**Случай $x-2y=3$, $x+2y=7$.** Сложив: $2x=10$, $x=5$; вычтя: $4y=4$, $y=1$ ✓\n\n**Проверка:** $121-4\\cdot25=121-100=21$ ✓ и $25-4=21$ ✓\n\n**Ответ:** $(11,5)$ и $(5,1)$.",
    "en": "Factor the left side as a difference of squares: $$(x-2y)(x+2y)=21 .$$\n\nBoth factors are integers, the second positive and larger, so both are positive. The factorisations are $1\\cdot21$ and $3\\cdot7$.\n\n**Case $x-2y=1$, $x+2y=21$.** Adding: $2x=22$, $x=11$; subtracting: $4y=20$, $y=5$ ✓\n\n**Case $x-2y=3$, $x+2y=7$.** Adding: $2x=10$, $x=5$; subtracting: $4y=4$, $y=1$ ✓\n\n**Check:** $121-4\\cdot25=121-100=21$ ✓ and $25-4=21$ ✓\n\n**Answer:** $(11,5)$ and $(5,1)$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите все пары целых чисел $(x,y)$, для которых $xy-2x+3y=10$.",
    "en": "Find all pairs of integers $(x,y)$ with $xy-2x+3y=10$."
   },
   "hint": {
    "ru": "Сгруппируйте так, чтобы получилось произведение двух скобок.",
    "en": "Group the terms so that a product of two brackets appears."
   },
   "sol": {
    "ru": "Сгруппируем по $x$: $$x(y-2)+3y=10 .$$ Чтобы вторая часть тоже содержала $y-2$, вычтем и прибавим $6$: $$x(y-2)+3(y-2)=10-6=4 ,$$ то есть $$(x+3)(y-2)=4 .$$\n\nТеперь переберём все разложения четвёрки на два целых множителя: $$(1,4),\\ (2,2),\\ (4,1),\\ (-1,-4),\\ (-2,-2),\\ (-4,-1).$$\n\nПолучаем $$(x,y)=(-2,6),\\ (-1,4),\\ (1,3),\\ (-4,-2),\\ (-5,0),\\ (-7,1).$$\n\n**Проверка** для $(1,3)$: $1\\cdot3-2\\cdot1+3\\cdot3=3-2+9=10$ ✓ Для $(-5,0)$: $0+10+0=10$ ✓\n\n**Ответ:** шесть пар, перечисленных выше.",
    "en": "Group by $x$: $$x(y-2)+3y=10 .$$ To make the rest contain $y-2$ as well, subtract and add $6$: $$x(y-2)+3(y-2)=10-6=4 ,$$ that is $$(x+3)(y-2)=4 .$$\n\nNow run through all factorisations of $4$ into two integers: $$(1,4),\\ (2,2),\\ (4,1),\\ (-1,-4),\\ (-2,-2),\\ (-4,-1).$$\n\nThese give $$(x,y)=(-2,6),\\ (-1,4),\\ (1,3),\\ (-4,-2),\\ (-5,0),\\ (-7,1).$$\n\n**Check** for $(1,3)$: $1\\cdot3-2\\cdot1+3\\cdot3=3-2+9=10$ ✓ For $(-5,0)$: $0+10+0=10$ ✓\n\n**Answer:** the six pairs listed above."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите все пары натуральных чисел $(x,y)$, для которых $\\dfrac1x-\\dfrac1y=\\dfrac1{12}$.",
    "en": "Find all pairs of positive integers $(x,y)$ with $\\dfrac1x-\\dfrac1y=\\dfrac1{12}$."
   },
   "hint": {
    "ru": "Приведите к общему знаменателю и разложите на множители.",
    "en": "Clear denominators and factor."
   },
   "sol": {
    "ru": "Умножим на $12xy$: $$12y-12x=xy\\quad\\Longleftrightarrow\\quad xy+12x-12y=0 .$$\n\nЧтобы разложить, вычтем $144$: $$x(y+12)-12(y+12)=-144\\quad\\Longleftrightarrow\\quad (x-12)(y+12)=-144 .$$\n\nТак как $y>0$, множитель $y+12>0$, значит $x-12<0$, то есть $x<12$. Положим $a=12-x>0$; тогда $$a\\,(y+12)=144 .$$\n\nЗначит $a$ — делитель $144$, и $y=\\dfrac{144}{a}-12>0$ требует $\\dfrac{144}{a}>12$, то есть $a<12$. Делители $144$, меньшие $12$: $$1,\\;2,\\;3,\\;4,\\;6,\\;8,\\;9 .$$\n\nСоответствующие пары $(x,y)=(12-a,\\ \\tfrac{144}{a}-12)$: $$(11,132),\\ (10,60),\\ (9,36),\\ (8,24),\\ (6,12),\\ (4,6),\\ (3,4).$$\n\n**Проверка** для $(4,6)$: $\\tfrac14-\\tfrac16=\\tfrac{3-2}{12}=\\tfrac1{12}$ ✓\n\n**Ответ:** семь пар, перечисленных выше.",
    "en": "Multiply by $12xy$: $$12y-12x=xy\\quad\\Longleftrightarrow\\quad xy+12x-12y=0 .$$\n\nTo factor, subtract $144$: $$x(y+12)-12(y+12)=-144\\quad\\Longleftrightarrow\\quad (x-12)(y+12)=-144 .$$\n\nSince $y>0$ the factor $y+12>0$, so $x-12<0$, i.e. $x<12$. Put $a=12-x>0$; then $$a\\,(y+12)=144 .$$\n\nSo $a$ divides $144$, and $y=\\dfrac{144}{a}-12>0$ forces $\\dfrac{144}{a}>12$, i.e. $a<12$. The divisors of $144$ below $12$ are $$1,\\;2,\\;3,\\;4,\\;6,\\;8,\\;9 .$$\n\nThe corresponding pairs $(x,y)=(12-a,\\ \\tfrac{144}{a}-12)$ are $$(11,132),\\ (10,60),\\ (9,36),\\ (8,24),\\ (6,12),\\ (4,6),\\ (3,4).$$\n\n**Check** for $(4,6)$: $\\tfrac14-\\tfrac16=\\tfrac{3-2}{12}=\\tfrac1{12}$ ✓\n\n**Answer:** the seven pairs above."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Сколько решений в натуральных числах имеет уравнение $2x+3y=100$?",
    "en": "How many solutions in positive integers does $2x+3y=100$ have?"
   },
   "hint": {
    "ru": "Из чётности следует, что $y$ чётно.",
    "en": "Parity forces $y$ to be even."
   },
   "sol": {
    "ru": "Числа $100$ и $2x$ чётны, значит $3y$ чётно, а с ним и $y$. Положим $y=2t$ с натуральным $t$: $$2x+6t=100\\quad\\Longleftrightarrow\\quad x=50-3t .$$\n\nУсловие $x\\ge1$ даёт $3t\\le49$, то есть $t\\le16$; условие $y\\ge1$ даёт $t\\ge1$.\n\nЗначит $t$ пробегает $1,2,\\dots,16$ — ровно $16$ значений, и каждому отвечает ровно одно решение $$(x,y)=(50-3t,\\ 2t).$$\n\n**Крайние случаи:** $t=1$ даёт $(47,2)$ ✓, $t=16$ даёт $(2,32)$ ✓\n\n**Ответ:** $16$.",
    "en": "Both $100$ and $2x$ are even, so $3y$ is even and hence $y$ is. Put $y=2t$ with $t$ a positive integer: $$2x+6t=100\\quad\\Longleftrightarrow\\quad x=50-3t .$$\n\nThe condition $x\\ge1$ gives $3t\\le49$, i.e. $t\\le16$; the condition $y\\ge1$ gives $t\\ge1$.\n\nSo $t$ runs over $1,2,\\dots,16$ — exactly $16$ values, each giving one solution $$(x,y)=(50-3t,\\ 2t).$$\n\n**Extremes:** $t=1$ gives $(47,2)$ ✓ and $t=16$ gives $(2,32)$ ✓\n\n**Answer:** $16$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Решите уравнение $x+y+xy=7$ в натуральных числах.",
    "en": "Solve $x+y+xy=7$ in positive integers."
   },
   "hint": {
    "ru": "Прибавьте единицу и разложите на множители.",
    "en": "Add one and factor."
   },
   "sol": {
    "ru": "Прибавим $1$ к обеим частям: $$xy+x+y+1=8\\quad\\Longleftrightarrow\\quad (x+1)(y+1)=8 .$$\n\nТак как $x,y\\ge1$, оба множителя не меньше $2$. Разложения восьмёрки на два множителя, каждый $\\ge2$: $$2\\cdot4\\qquad\\text{и}\\qquad 4\\cdot2 .$$ (Вариант $8\\cdot1$ отпадает: множитель $1$ дал бы $y=0$.)\n\nОтсюда $$(x,y)=(1,3)\\quad\\text{или}\\quad (3,1).$$\n\n**Проверка:** $1+3+1\\cdot3=7$ ✓\n\n**Ответ:** $(1,3)$ и $(3,1)$.",
    "en": "Add $1$ to both sides: $$xy+x+y+1=8\\quad\\Longleftrightarrow\\quad (x+1)(y+1)=8 .$$\n\nSince $x,y\\ge1$, both factors are at least $2$. The factorisations of $8$ into two factors each $\\ge2$ are $$2\\cdot4\\qquad\\text{and}\\qquad 4\\cdot2 .$$ (The option $8\\cdot1$ fails: the factor $1$ would give $y=0$.)\n\nHence $$(x,y)=(1,3)\\quad\\text{or}\\quad (3,1).$$\n\n**Check:** $1+3+1\\cdot3=7$ ✓\n\n**Answer:** $(1,3)$ and $(3,1)$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что уравнение $x^{2}-3y^{2}=2$ не имеет решений в целых числах.",
    "en": "Prove that $x^{2}-3y^{2}=2$ has no integer solutions."
   },
   "hint": {
    "ru": "Посмотрите на уравнение по модулю $3$.",
    "en": "Look at the equation modulo $3$."
   },
   "sol": {
    "ru": "Перейдём к модулю $3$. Слагаемое $3y^{2}$ исчезает, и уравнение превращается в $$x^{2}\\equiv2\\pmod 3 .$$\n\nНо квадраты по модулю $3$ дают только два значения: $$0^{2}\\equiv0,\\qquad(\\pm1)^{2}\\equiv1 .$$\n\nОстатка $2$ среди них нет, значит решений нет. $\\blacksquare$\n\n**Замечание.** Тот же приём показывает, что $x^{2}-3y^{2}=-1$ тоже нерешаемо, а вот $x^{2}-3y^{2}=1$ решения имеет: $(x,y)=(2,1)$, $(7,4)$, $(26,15),\\dots$",
    "en": "Reduce modulo $3$. The term $3y^{2}$ vanishes and the equation becomes $$x^{2}\\equiv2\\pmod 3 .$$\n\nBut squares modulo $3$ take only two values: $$0^{2}\\equiv0,\\qquad(\\pm1)^{2}\\equiv1 .$$\n\nThe residue $2$ never occurs, so there are no solutions. $\\blacksquare$\n\n**Remark.** The same trick shows $x^{2}-3y^{2}=-1$ is unsolvable too, whereas $x^{2}-3y^{2}=1$ does have solutions: $(x,y)=(2,1)$, $(7,4)$, $(26,15),\\dots$"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите все натуральные $n$, при которых дробь $\\dfrac{n+7}{n-1}$ — целое число.",
    "en": "Find all positive integers $n$ for which $\\dfrac{n+7}{n-1}$ is an integer."
   },
   "hint": {
    "ru": "$n+7=(n-1)+8$.",
    "en": "$n+7=(n-1)+8$."
   },
   "sol": {
    "ru": "Выделим целую часть: $$\\frac{n+7}{n-1}=\\frac{(n-1)+8}{n-1}=1+\\frac{8}{n-1} .$$\n\nДробь целая ровно тогда, когда $n-1$ — делитель восьмёрки. Так как $n$ натуральное и $n\\ne1$, число $n-1$ положительно, значит $$n-1\\in\\{1,2,4,8\\}\\quad\\Longrightarrow\\quad n\\in\\{2,3,5,9\\} .$$\n\n**Проверка:** $$\\frac{9}{1}=9,\\qquad\\frac{10}{2}=5,\\qquad\\frac{12}{4}=3,\\qquad\\frac{16}{8}=2 \\quad\\checkmark$$\n\n**Ответ:** $n=2,3,5,9$.",
    "en": "Split off the integer part: $$\\frac{n+7}{n-1}=\\frac{(n-1)+8}{n-1}=1+\\frac{8}{n-1} .$$\n\nThe fraction is an integer exactly when $n-1$ divides $8$. Since $n$ is a positive integer with $n\\ne1$, the number $n-1$ is positive, so $$n-1\\in\\{1,2,4,8\\}\\quad\\Longrightarrow\\quad n\\in\\{2,3,5,9\\} .$$\n\n**Check:** $$\\frac{9}{1}=9,\\qquad\\frac{10}{2}=5,\\qquad\\frac{12}{4}=3,\\qquad\\frac{16}{8}=2 \\quad\\checkmark$$\n\n**Answer:** $n=2,3,5,9$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Найдите все тройки натуральных чисел $x\\le y\\le z$, для которых $\\dfrac1x+\\dfrac1y+\\dfrac1z=1$.",
    "en": "Find all triples of positive integers $x\\le y\\le z$ with $\\dfrac1x+\\dfrac1y+\\dfrac1z=1$."
   },
   "hint": {
    "ru": "Из $x\\le y\\le z$ следует $\\dfrac3x\\ge1$, то есть $x\\le3$.",
    "en": "From $x\\le y\\le z$ we get $\\dfrac3x\\ge1$, so $x\\le3$."
   },
   "sol": {
    "ru": "**Шаг 1: ограничим $x$.** Наибольшее из трёх слагаемых — это $\\tfrac1x$, поэтому $$1=\\frac1x+\\frac1y+\\frac1z\\le\\frac3x\\quad\\Longrightarrow\\quad x\\le3 .$$ Кроме того $\\tfrac1x<1$, значит $x\\ge2$.\n\n**Случай $x=2$.** Тогда $\\tfrac1y+\\tfrac1z=\\tfrac12$, и так же $\\tfrac2y\\ge\\tfrac12$, то есть $y\\le4$; вместе с $y>2$ получаем $y\\in\\{3,4\\}$.\n\n$y=3$: $\\ \\tfrac1z=\\tfrac12-\\tfrac13=\\tfrac16$, значит $z=6$ ✓\n\n$y=4$: $\\ \\tfrac1z=\\tfrac12-\\tfrac14=\\tfrac14$, значит $z=4$ ✓\n\n**Случай $x=3$.** Тогда $\\tfrac1y+\\tfrac1z=\\tfrac23$, откуда $\\tfrac2y\\ge\\tfrac23$, то есть $y\\le3$; вместе с $y\\ge3$ получаем $y=3$ и $\\tfrac1z=\\tfrac13$, то есть $z=3$ ✓\n\n**Ответ:** $(2,3,6)$, $(2,4,4)$, $(3,3,3)$.\n\n**Проверка:** $\\tfrac12+\\tfrac13+\\tfrac16=1$ ✓, $\\tfrac12+\\tfrac14+\\tfrac14=1$ ✓, $\\tfrac13\\cdot3=1$ ✓",
    "en": "**Step 1: bound $x$.** The largest of the three terms is $\\tfrac1x$, so $$1=\\frac1x+\\frac1y+\\frac1z\\le\\frac3x\\quad\\Longrightarrow\\quad x\\le3 .$$ Also $\\tfrac1x<1$, so $x\\ge2$.\n\n**Case $x=2$.** Then $\\tfrac1y+\\tfrac1z=\\tfrac12$, and likewise $\\tfrac2y\\ge\\tfrac12$, i.e. $y\\le4$; together with $y>2$ this gives $y\\in\\{3,4\\}$.\n\n$y=3$: $\\ \\tfrac1z=\\tfrac12-\\tfrac13=\\tfrac16$, so $z=6$ ✓\n\n$y=4$: $\\ \\tfrac1z=\\tfrac12-\\tfrac14=\\tfrac14$, so $z=4$ ✓\n\n**Case $x=3$.** Then $\\tfrac1y+\\tfrac1z=\\tfrac23$, so $\\tfrac2y\\ge\\tfrac23$, i.e. $y\\le3$; with $y\\ge3$ this forces $y=3$ and $\\tfrac1z=\\tfrac13$, so $z=3$ ✓\n\n**Answer:** $(2,3,6)$, $(2,4,4)$, $(3,3,3)$.\n\n**Check:** $\\tfrac12+\\tfrac13+\\tfrac16=1$ ✓, $\\tfrac12+\\tfrac14+\\tfrac14=1$ ✓, $\\tfrac13\\cdot3=1$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что уравнение $x^{2}+y^{2}=3z^{2}$ не имеет решений в натуральных числах.",
    "en": "Prove that $x^{2}+y^{2}=3z^{2}$ has no solutions in positive integers."
   },
   "hint": {
    "ru": "Возьмите решение с наименьшим $z$ и посмотрите по модулю $3$.",
    "en": "Take a solution with the smallest $z$ and look modulo $3$."
   },
   "sol": {
    "ru": "Предположим, что решения есть, и выберем среди них то, у которого $z$ **наименьшее**.\n\n**Шаг 1.** По модулю $3$ квадраты дают только остатки $0$ и $1$. Условие $$x^{2}+y^{2}\\equiv0\\pmod 3$$ выполнимо только при $$x^{2}\\equiv y^{2}\\equiv0\\pmod 3$$ (варианты $0+1$, $1+0$, $1+1$ дают $1$, $1$, $2$). Значит $3\\mid x$ и $3\\mid y$.\n\n**Шаг 2.** Запишем $x=3a$, $y=3b$: $$9a^{2}+9b^{2}=3z^{2}\\quad\\Longleftrightarrow\\quad 3\\left(a^{2}+b^{2}\\right)=z^{2} .$$ Отсюда $3\\mid z^{2}$, а значит $3\\mid z$; положим $z=3c$: $$3\\left(a^{2}+b^{2}\\right)=9c^{2}\\quad\\Longleftrightarrow\\quad a^{2}+b^{2}=3c^{2} .$$\n\n**Шаг 3.** Получилась тройка $(a,b,c)$ — тоже решение, причём $c=\\tfrac z3<z$. Это противоречит выбору наименьшего $z$ ✗\n\nЗначит решений в натуральных числах нет. $\\blacksquare$\n\n**Замечание.** Это классический **спуск Ферма**: из любого решения строится меньшее, чего в натуральных числах быть не может.",
    "en": "Suppose solutions exist, and choose one with the **smallest** $z$.\n\n**Step 1.** Modulo $3$ squares leave only the residues $0$ and $1$. The condition $$x^{2}+y^{2}\\equiv0\\pmod 3$$ can hold only when $$x^{2}\\equiv y^{2}\\equiv0\\pmod 3$$ (the options $0+1$, $1+0$, $1+1$ give $1$, $1$, $2$). So $3\\mid x$ and $3\\mid y$.\n\n**Step 2.** Write $x=3a$, $y=3b$: $$9a^{2}+9b^{2}=3z^{2}\\quad\\Longleftrightarrow\\quad 3\\left(a^{2}+b^{2}\\right)=z^{2} .$$ Hence $3\\mid z^{2}$, so $3\\mid z$; put $z=3c$: $$3\\left(a^{2}+b^{2}\\right)=9c^{2}\\quad\\Longleftrightarrow\\quad a^{2}+b^{2}=3c^{2} .$$\n\n**Step 3.** So $(a,b,c)$ is a solution too, with $c=\\tfrac z3<z$ — contradicting the choice of the smallest $z$ ✗\n\nHence there are no solutions in positive integers. $\\blacksquare$\n\n**Remark.** This is the classical **Fermat descent**: from any solution one builds a smaller one, which positive integers do not allow."
   }
  },
  {
   "src": "Международный уровень / International level",
   "lvl": 3,
   "q": {
    "ru": "Решите уравнение $x^{2}+615=2^{y}$ в натуральных числах.",
    "en": "Solve $x^{2}+615=2^{y}$ in positive integers."
   },
   "hint": {
    "ru": "Сначала докажите по модулю $3$, что $y$ чётно.",
    "en": "First show modulo $3$ that $y$ is even."
   },
   "sol": {
    "ru": "**Шаг 1: $y$ чётно.** Так как $615=3\\cdot205$, по модулю $3$ уравнение даёт $$x^{2}\\equiv2^{y}\\equiv(-1)^{y}\\pmod 3 .$$ Квадраты по модулю $3$ равны $0$ или $1$, а $(-1)^{y}$ при нечётном $y$ равно $-1\\equiv2$ ✗ Значит $y$ чётно.\n\n**Шаг 2: разложение.** Пусть $y=2m$. Тогда $$2^{2m}-x^{2}=615\\quad\\Longleftrightarrow\\quad \\left(2^{m}-x\\right)\\left(2^{m}+x\\right)=615 .$$\n\n**Шаг 3: перебор.** Разложим $615=3\\cdot5\\cdot41$ на пары множителей и заметим, что **сумма** множителей равна $2\\cdot2^{m}=2^{m+1}$, то есть должна быть степенью двойки:\n\n$1\\cdot615$: сумма $616$ ✗\n\n$3\\cdot205$: сумма $208$ ✗\n\n$5\\cdot123$: сумма $128=2^{7}$ ✓\n\n$15\\cdot41$: сумма $56$ ✗\n\n**Шаг 4.** Из $2^{m+1}=128$ получаем $m=6$, значит $2^{m}=64$ и $$x=\\frac{123-5}{2}=59,\\qquad y=2m=12 .$$\n\n**Проверка:** $59^{2}+615=3481+615=4096=2^{12}$ ✓\n\n**Ответ:** $(x,y)=(59,12)$.",
    "en": "**Step 1: $y$ is even.** Since $615=3\\cdot205$, reducing modulo $3$ gives $$x^{2}\\equiv2^{y}\\equiv(-1)^{y}\\pmod 3 .$$ Squares modulo $3$ are $0$ or $1$, while $(-1)^{y}$ for odd $y$ equals $-1\\equiv2$ ✗ So $y$ is even.\n\n**Step 2: factor.** Put $y=2m$. Then $$2^{2m}-x^{2}=615\\quad\\Longleftrightarrow\\quad \\left(2^{m}-x\\right)\\left(2^{m}+x\\right)=615 .$$\n\n**Step 3: search.** Factor $615=3\\cdot5\\cdot41$ into pairs and note that the **sum** of the two factors equals $2\\cdot2^{m}=2^{m+1}$, so it must be a power of two:\n\n$1\\cdot615$: sum $616$ ✗\n\n$3\\cdot205$: sum $208$ ✗\n\n$5\\cdot123$: sum $128=2^{7}$ ✓\n\n$15\\cdot41$: sum $56$ ✗\n\n**Step 4.** From $2^{m+1}=128$ we get $m=6$, so $2^{m}=64$ and $$x=\\frac{123-5}{2}=59,\\qquad y=2m=12 .$$\n\n**Check:** $59^{2}+615=3481+615=4096=2^{12}$ ✓\n\n**Answer:** $(x,y)=(59,12)$."
   }
  },
  {
   "src": "Республиканский тур · уровень / Republic-round level",
   "lvl": 3,
   "q": {
    "ru": "Решите уравнение $2^{x}-3^{y}=1$ в натуральных числах.",
    "en": "Solve $2^{x}-3^{y}=1$ in positive integers."
   },
   "hint": {
    "ru": "При $x\\ge3$ посмотрите на уравнение по модулю $8$.",
    "en": "For $x\\ge3$ look at the equation modulo $8$."
   },
   "sol": {
    "ru": "Перепишем: $2^{x}=3^{y}+1$.\n\n**Малые $x$.** При $x=1$: $2=3^{y}+1$ даёт $3^{y}=1$, то есть $y=0$ — не натуральное ✗ При $x=2$: $4=3^{y}+1$ даёт $3^{y}=3$, то есть $y=1$ ✓\n\n**Случай $x\\ge3$.** Тогда $8\\mid2^{x}$, значит $$3^{y}\\equiv-1\\equiv7\\pmod 8 .$$ Но степени тройки по модулю $8$ принимают лишь два значения: $$3^{1}\\equiv3,\\quad 3^{2}=9\\equiv1,\\quad 3^{3}\\equiv3,\\quad 3^{4}\\equiv1,\\ \\dots$$ то есть $3^{y}\\in\\{1,3\\}\\pmod 8$, и семёрки среди них нет ✗\n\n**Проверка ответа:** $2^{2}-3^{1}=4-3=1$ ✓\n\n**Ответ:** $(x,y)=(2,1)$.",
    "en": "Rewrite as $2^{x}=3^{y}+1$.\n\n**Small $x$.** For $x=1$: $2=3^{y}+1$ gives $3^{y}=1$, i.e. $y=0$, not positive ✗ For $x=2$: $4=3^{y}+1$ gives $3^{y}=3$, i.e. $y=1$ ✓\n\n**Case $x\\ge3$.** Then $8\\mid2^{x}$, so $$3^{y}\\equiv-1\\equiv7\\pmod 8 .$$ But the powers of three modulo $8$ take only two values: $$3^{1}\\equiv3,\\quad 3^{2}=9\\equiv1,\\quad 3^{3}\\equiv3,\\quad 3^{4}\\equiv1,\\ \\dots$$ i.e. $3^{y}\\in\\{1,3\\}\\pmod 8$, and $7$ is not among them ✗\n\n**Check:** $2^{2}-3^{1}=4-3=1$ ✓\n\n**Answer:** $(x,y)=(2,1)$."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что уравнение $x^{2}+y^{2}+z^{2}=1999$ не имеет решений в целых числах.",
    "en": "Prove that $x^{2}+y^{2}+z^{2}=1999$ has no integer solutions."
   },
   "hint": {
    "ru": "Квадраты по модулю $8$ дают только $0$, $1$ и $4$.",
    "en": "Squares modulo $8$ are only $0$, $1$ and $4$."
   },
   "sol": {
    "ru": "**Шаг 1: квадраты по модулю $8$.** Если $n=2k$, то $n^{2}=4k^{2}$, и $4k^{2}\\equiv0$ или $4$ в зависимости от чётности $k$. Если $n$ нечётно, то $n^{2}\\equiv1\\pmod 8$. Итого $$n^{2}\\in\\{0,\\,1,\\,4\\}\\pmod 8 .$$\n\n**Шаг 2: какие суммы трёх таких чисел бывают.** Переберём все наборы из трёх элементов множества $\\{0,1,4\\}$ и посчитаем суммы по модулю $8$: $$0,\\ 1,\\ 2,\\ 3,\\ 4,\\ 5,\\ 6\\ (=4+1+1),\\ 0\\ (=4+4+0),\\ 1\\ (=4+4+1),\\ 4\\ (=4+4+4).$$ Собирая, получаем множество возможных остатков $$\\{0,1,2,3,4,5,6\\} ,$$ то есть остаток $7$ **невозможен**.\n\n**Шаг 3.** Но $$1999=8\\cdot249+7\\equiv7\\pmod 8 .$$\n\nЗначит решений нет. $\\blacksquare$\n\n**Замечание.** Это частный случай теоремы Лежандра: целое число представимо суммой трёх квадратов тогда и только тогда, когда оно не имеет вида $4^{a}(8b+7)$.",
    "en": "**Step 1: squares modulo $8$.** If $n=2k$ then $n^{2}=4k^{2}$, which is $\\equiv0$ or $4$ according to the parity of $k$. If $n$ is odd then $n^{2}\\equiv1\\pmod 8$. So $$n^{2}\\in\\{0,\\,1,\\,4\\}\\pmod 8 .$$\n\n**Step 2: which sums of three such numbers occur.** Run through all triples from $\\{0,1,4\\}$ and take sums modulo $8$: $$0,\\ 1,\\ 2,\\ 3,\\ 4,\\ 5,\\ 6\\ (=4+1+1),\\ 0\\ (=4+4+0),\\ 1\\ (=4+4+1),\\ 4\\ (=4+4+4).$$ Collecting, the possible residues are $$\\{0,1,2,3,4,5,6\\} ,$$ so the residue $7$ is **impossible**.\n\n**Step 3.** But $$1999=8\\cdot249+7\\equiv7\\pmod 8 .$$\n\nHence there are no solutions. $\\blacksquare$\n\n**Remark.** This is a special case of Legendre’s theorem: an integer is a sum of three squares exactly when it is not of the form $4^{a}(8b+7)$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Найдите все тройки натуральных чисел $x\\le y\\le z$, для которых $xyz=x+y+z$.",
    "en": "Find all triples of positive integers $x\\le y\\le z$ with $xyz=x+y+z$."
   },
   "hint": {
    "ru": "Оцените: $x+y+z\\le3z$.",
    "en": "Estimate: $x+y+z\\le3z$."
   },
   "sol": {
    "ru": "**Шаг 1: ограничим произведение $xy$.** Так как $x\\le y\\le z$, имеем $$xyz=x+y+z\\le3z\\quad\\Longrightarrow\\quad xy\\le3 .$$\n\n**Случай $xy=1$:** тогда $x=y=1$ и уравнение даёт $z=2+z$ ✗\n\n**Случай $xy=2$:** тогда $x=1$, $y=2$ и $$2z=3+z\\quad\\Longrightarrow\\quad z=3 \\quad\\checkmark$$ (и действительно $1\\le2\\le3$).\n\n**Случай $xy=3$:** тогда $x=1$, $y=3$ и $$3z=4+z\\quad\\Longrightarrow\\quad z=2 ,$$ но тогда $z<y$ — нарушено упорядочение ✗\n\n**Проверка:** $1\\cdot2\\cdot3=6$ и $1+2+3=6$ ✓\n\n**Ответ:** единственная тройка $(1,2,3)$.",
    "en": "**Step 1: bound the product $xy$.** Since $x\\le y\\le z$, $$xyz=x+y+z\\le3z\\quad\\Longrightarrow\\quad xy\\le3 .$$\n\n**Case $xy=1$:** then $x=y=1$ and the equation reads $z=2+z$ ✗\n\n**Case $xy=2$:** then $x=1$, $y=2$ and $$2z=3+z\\quad\\Longrightarrow\\quad z=3 \\quad\\checkmark$$ (and indeed $1\\le2\\le3$).\n\n**Case $xy=3$:** then $x=1$, $y=3$ and $$3z=4+z\\quad\\Longrightarrow\\quad z=2 ,$$ but then $z<y$, breaking the ordering ✗\n\n**Check:** $1\\cdot2\\cdot3=6$ and $1+2+3=6$ ✓\n\n**Answer:** the single triple $(1,2,3)$."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Найдите все целые $n$, при которых $n^{2}+19n+92$ — полный квадрат.",
    "en": "Find all integers $n$ for which $n^{2}+19n+92$ is a perfect square."
   },
   "hint": {
    "ru": "Умножьте на $4$ и выделите полный квадрат.",
    "en": "Multiply by $4$ and complete the square."
   },
   "sol": {
    "ru": "Пусть $n^{2}+19n+92=k^{2}$ с целым $k\\ge0$. Умножим на $4$ и выделим квадрат: $$4n^{2}+76n+368=(2n+19)^{2}-361+368=(2n+19)^{2}+7 .$$\n\nЗначит $$(2k)^{2}-(2n+19)^{2}=7\\quad\\Longleftrightarrow\\quad \\bigl(2k-t\\bigr)\\bigl(2k+t\\bigr)=7,\\qquad t=2n+19 .$$\n\nЧисло $7$ простое, поэтому пара множителей — это $(1,7)$ или $(7,1)$ (отрицательные варианты дают $k<0$ и те же $n$). В обоих случаях сумма множителей равна $4k=8$, то есть $k=2$, а разность даёт $|t|=3$.\n\nИтак, $$2n+19=3\\ \\Rightarrow\\ n=-8,\\qquad 2n+19=-3\\ \\Rightarrow\\ n=-11 .$$\n\n**Проверка:** $$(-8)^{2}+19(-8)+92=64-152+92=4=2^{2} \\quad\\checkmark$$ $$(-11)^{2}+19(-11)+92=121-209+92=4=2^{2} \\quad\\checkmark$$\n\n**Ответ:** $n=-8$ и $n=-11$; натуральных решений нет.",
    "en": "Let $n^{2}+19n+92=k^{2}$ with an integer $k\\ge0$. Multiply by $4$ and complete the square: $$4n^{2}+76n+368=(2n+19)^{2}-361+368=(2n+19)^{2}+7 .$$\n\nHence $$(2k)^{2}-(2n+19)^{2}=7\\quad\\Longleftrightarrow\\quad \\bigl(2k-t\\bigr)\\bigl(2k+t\\bigr)=7,\\qquad t=2n+19 .$$\n\nSince $7$ is prime, the pair of factors is $(1,7)$ or $(7,1)$ (the negative options give $k<0$ and the same $n$). In both cases the sum of the factors is $4k=8$, so $k=2$, and the difference gives $|t|=3$.\n\nTherefore $$2n+19=3\\ \\Rightarrow\\ n=-8,\\qquad 2n+19=-3\\ \\Rightarrow\\ n=-11 .$$\n\n**Check:** $$(-8)^{2}+19(-8)+92=64-152+92=4=2^{2} \\quad\\checkmark$$ $$(-11)^{2}+19(-11)+92=121-209+92=4=2^{2} \\quad\\checkmark$$\n\n**Answer:** $n=-8$ and $n=-11$; there are no positive solutions."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 3,
   "q": {
    "ru": "У прямоугольника стороны — натуральные числа, а его площадь численно равна периметру. Найдите все такие прямоугольники.",
    "en": "A rectangle has positive integer sides and its area is numerically equal to its perimeter. Find all such rectangles."
   },
   "hint": {
    "ru": "$ab=2a+2b$; прибавьте $4$ и разложите на множители.",
    "en": "$ab=2a+2b$; add $4$ and factor."
   },
   "sol": {
    "ru": "Пусть стороны равны $a$ и $b$. Условие: $$ab=2a+2b .$$\n\nПеренесём и прибавим $4$: $$ab-2a-2b+4=4\\quad\\Longleftrightarrow\\quad (a-2)(b-2)=4 .$$\n\nСтороны положительны, и множители $a-2$, $b-2$ должны быть целыми с произведением $4$. Отрицательные варианты отпадают: например, $a-2=-1$, $b-2=-4$ дало бы $b=-2<0$ ✗\n\nОстаются положительные разложения четвёрки: $$(1,4),\\qquad(2,2),\\qquad(4,1),$$ откуда $$(a,b)=(3,6),\\quad(4,4),\\quad(6,3).$$\n\n**Проверка:** $3\\cdot6=18$ и $2(3+6)=18$ ✓; $4\\cdot4=16$ и $2(4+4)=16$ ✓\n\n**Ответ:** прямоугольник $3\\times6$ и квадрат $4\\times4$.",
    "en": "Let the sides be $a$ and $b$. The condition is $$ab=2a+2b .$$\n\nMove everything over and add $4$: $$ab-2a-2b+4=4\\quad\\Longleftrightarrow\\quad (a-2)(b-2)=4 .$$\n\nThe sides are positive, and $a-2$, $b-2$ must be integers with product $4$. Negative options fail: e.g. $a-2=-1$, $b-2=-4$ would give $b=-2<0$ ✗\n\nSo the positive factorisations of $4$ remain: $$(1,4),\\qquad(2,2),\\qquad(4,1),$$ giving $$(a,b)=(3,6),\\quad(4,4),\\quad(6,3).$$\n\n**Check:** $3\\cdot6=18$ and $2(3+6)=18$ ✓; $4\\cdot4=16$ and $2(4+4)=16$ ✓\n\n**Answer:** the $3\\times6$ rectangle and the $4\\times4$ square."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Стороны прямоугольного треугольника — целые числа, один из катетов равен $15$. Найдите все такие треугольники.",
    "en": "A right triangle has integer sides and one leg equal to $15$. Find all such triangles."
   },
   "hint": {
    "ru": "$c^{2}-b^{2}=225$; оба множителя нечётны.",
    "en": "$c^{2}-b^{2}=225$; both factors are odd."
   },
   "sol": {
    "ru": "Пусть второй катет равен $b$, гипотенуза — $c$. Тогда $$15^{2}+b^{2}=c^{2}\\quad\\Longleftrightarrow\\quad (c-b)(c+b)=225 .$$\n\nЧисло $225=3^{2}\\cdot5^{2}$ нечётно, значит оба множителя нечётны, и их произведение автоматически даёт целые $$c=\\frac{(c-b)+(c+b)}{2},\\qquad b=\\frac{(c+b)-(c-b)}{2} .$$\n\nПереберём разложения $225=d\\cdot D$ с $d<D$:\n\n$1\\cdot225$: $\\ c=113$, $b=112$ ✓\n\n$3\\cdot75$: $\\ c=39$, $b=36$ ✓\n\n$5\\cdot45$: $\\ c=25$, $b=20$ ✓\n\n$9\\cdot25$: $\\ c=17$, $b=8$ ✓\n\n$15\\cdot15$: $\\ c=15$, $b=0$ ✗ (вырожденный)\n\n**Проверка** для $(8,15,17)$: $64+225=289=17^{2}$ ✓\n\n**Ответ:** четыре треугольника со сторонами $$(15,8,17),\\quad(15,20,25),\\quad(15,36,39),\\quad(15,112,113).$$",
    "en": "Let the other leg be $b$ and the hypotenuse $c$. Then $$15^{2}+b^{2}=c^{2}\\quad\\Longleftrightarrow\\quad (c-b)(c+b)=225 .$$\n\nThe number $225=3^{2}\\cdot5^{2}$ is odd, so both factors are odd, and then $$c=\\frac{(c-b)+(c+b)}{2},\\qquad b=\\frac{(c+b)-(c-b)}{2}$$ come out as integers automatically.\n\nRun through the factorisations $225=d\\cdot D$ with $d<D$:\n\n$1\\cdot225$: $\\ c=113$, $b=112$ ✓\n\n$3\\cdot75$: $\\ c=39$, $b=36$ ✓\n\n$5\\cdot45$: $\\ c=25$, $b=20$ ✓\n\n$9\\cdot25$: $\\ c=17$, $b=8$ ✓\n\n$15\\cdot15$: $\\ c=15$, $b=0$ ✗ (degenerate)\n\n**Check** for $(8,15,17)$: $64+225=289=17^{2}$ ✓\n\n**Answer:** four triangles, with sides $$(15,8,17),\\quad(15,20,25),\\quad(15,36,39),\\quad(15,112,113).$$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Опишите все примитивные пифагоровы тройки: найдите все решения уравнения $x^{2}+y^{2}=z^{2}$ в натуральных числах с $\\gcd(x,y,z)=1$.",
    "en": "Describe all primitive Pythagorean triples: find every solution of $x^{2}+y^{2}=z^{2}$ in positive integers with $\\gcd(x,y,z)=1$."
   },
   "hint": {
    "ru": "Покажите, что ровно одно из $x,y$ чётно, и разложите $\\left(\\tfrac{z-y}2\\right)\\left(\\tfrac{z+y}2\\right)=\\left(\\tfrac x2\\right)^{2}$.",
    "en": "Show exactly one of $x,y$ is even, then factor $\\left(\\tfrac{z-y}2\\right)\\left(\\tfrac{z+y}2\\right)=\\left(\\tfrac x2\\right)^{2}$."
   },
   "sol": {
    "ru": "**Шаг 1: ровно одно из $x,y$ чётно.** Если бы оба были чётны, то и $z$ было бы чётным, вопреки $\\gcd=1$. Если бы оба были нечётны, то $$z^{2}=x^{2}+y^{2}\\equiv1+1=2\\pmod 4 ,$$ а квадрат не бывает сравним с $2$ по модулю $4$ ✗ Пусть для определённости $x$ чётно, $y$ и $z$ нечётны.\n\n**Шаг 2: разложение.** Запишем $$x^{2}=z^{2}-y^{2}=(z-y)(z+y) .$$ Числа $z-y$ и $z+y$ чётны; положим $$u=\\frac{z-y}{2},\\qquad v=\\frac{z+y}{2},\\qquad\\text{тогда}\\qquad uv=\\left(\\frac x2\\right)^{2} .$$\n\n**Шаг 3: $u$ и $v$ взаимно просты.** Общий делитель $d$ чисел $u,v$ делит их сумму $z$ и разность $y$, а $\\gcd(y,z)=1$ (иначе общий делитель вошёл бы и в $x$). Значит $d=1$.\n\n**Шаг 4.** Произведение двух взаимно простых чисел — полный квадрат, значит каждое из них полный квадрат: $$u=n^{2},\\qquad v=m^{2},\\qquad \\gcd(m,n)=1,\\ m>n>0 .$$\n\nВозвращаясь, $$z=v+u=m^{2}+n^{2},\\qquad y=v-u=m^{2}-n^{2},\\qquad x=2\\sqrt{uv}=2mn .$$\n\nНаконец, $y$ нечётно требует, чтобы $m$ и $n$ имели **разную чётность**.\n\n**Ответ.** Все примитивные тройки — это в точности $$x=2mn,\\qquad y=m^{2}-n^{2},\\qquad z=m^{2}+n^{2},$$ где $m>n>0$, $\\gcd(m,n)=1$ и $m,n$ разной чётности (и обратно, любая такая пара даёт примитивную тройку). $\\blacksquare$\n\n**Примеры.** $(m,n)=(2,1)\\to(4,3,5)$; $(3,2)\\to(12,5,13)$; $(4,1)\\to(8,15,17)$.",
    "en": "**Step 1: exactly one of $x,y$ is even.** If both were even, $z$ would be too, contradicting $\\gcd=1$. If both were odd, then $$z^{2}=x^{2}+y^{2}\\equiv1+1=2\\pmod 4 ,$$ and no square is $\\equiv2$ modulo $4$ ✗ Say $x$ is even and $y$, $z$ are odd.\n\n**Step 2: factor.** Write $$x^{2}=z^{2}-y^{2}=(z-y)(z+y) .$$ Both $z-y$ and $z+y$ are even; put $$u=\\frac{z-y}{2},\\qquad v=\\frac{z+y}{2},\\qquad\\text{so that}\\qquad uv=\\left(\\frac x2\\right)^{2} .$$\n\n**Step 3: $u$ and $v$ are coprime.** A common divisor $d$ of $u,v$ divides their sum $z$ and difference $y$, and $\\gcd(y,z)=1$ (otherwise a common divisor would also divide $x$). So $d=1$.\n\n**Step 4.** A product of two coprime numbers being a perfect square forces each of them to be a perfect square: $$u=n^{2},\\qquad v=m^{2},\\qquad \\gcd(m,n)=1,\\ m>n>0 .$$\n\nGoing back, $$z=v+u=m^{2}+n^{2},\\qquad y=v-u=m^{2}-n^{2},\\qquad x=2\\sqrt{uv}=2mn .$$\n\nFinally, $y$ being odd requires $m$ and $n$ to have **opposite parity**.\n\n**Answer.** The primitive triples are exactly $$x=2mn,\\qquad y=m^{2}-n^{2},\\qquad z=m^{2}+n^{2},$$ with $m>n>0$, $\\gcd(m,n)=1$ and $m,n$ of opposite parity (and conversely every such pair gives a primitive triple). $\\blacksquare$\n\n**Examples.** $(m,n)=(2,1)\\to(4,3,5)$; $(3,2)\\to(12,5,13)$; $(4,1)\\to(8,15,17)$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что уравнение Пелля $x^{2}-2y^{2}=1$ имеет бесконечно много решений в натуральных числах.",
    "en": "Prove that the Pell equation $x^{2}-2y^{2}=1$ has infinitely many solutions in positive integers."
   },
   "hint": {
    "ru": "Из решения $(x,y)$ постройте новое: $(3x+4y,\\ 2x+3y)$.",
    "en": "From a solution $(x,y)$ build a new one: $(3x+4y,\\ 2x+3y)$."
   },
   "sol": {
    "ru": "**Шаг 1: начальное решение.** $$3^{2}-2\\cdot2^{2}=9-8=1 ,$$ то есть $(x_1,y_1)=(3,2)$ подходит ✓\n\n**Шаг 2: как из решения сделать новое.** Положим $$X=3x+4y,\\qquad Y=2x+3y .$$ Тогда $$X^{2}-2Y^{2}=(3x+4y)^{2}-2(2x+3y)^{2} .$$ Раскроем скобки: $$(9x^{2}+24xy+16y^{2})-2\\left(4x^{2}+12xy+9y^{2}\\right)=9x^{2}+24xy+16y^{2}-8x^{2}-24xy-18y^{2},$$ то есть $$X^{2}-2Y^{2}=x^{2}-2y^{2}=1 . \\qquad\\checkmark$$\n\n**Шаг 3: решения не повторяются.** При $x,y>0$ имеем $Y=2x+3y>y$, значит вторая координата строго растёт, и все получаемые пары попарно различны.\n\nЗначит из $(3,2)$ рождается бесконечная цепочка $$(3,2)\\to(17,12)\\to(99,70)\\to(577,408)\\to\\cdots \\qquad\\blacksquare$$\n\n**Проверка:** $17^{2}-2\\cdot12^{2}=289-288=1$ ✓ и $99^{2}-2\\cdot70^{2}=9801-9800=1$ ✓\n\n**Откуда берётся преобразование.** Оно отвечает умножению на $3+2\\sqrt2$: если $x+y\\sqrt2$ даёт норму $1$, то и $(x+y\\sqrt2)(3+2\\sqrt2)=(3x+4y)+(2x+3y)\\sqrt2$ тоже.",
    "en": "**Step 1: a starting solution.** $$3^{2}-2\\cdot2^{2}=9-8=1 ,$$ so $(x_1,y_1)=(3,2)$ works ✓\n\n**Step 2: turning a solution into a new one.** Put $$X=3x+4y,\\qquad Y=2x+3y .$$ Then $$X^{2}-2Y^{2}=(3x+4y)^{2}-2(2x+3y)^{2} .$$ Expanding, $$(9x^{2}+24xy+16y^{2})-2\\left(4x^{2}+12xy+9y^{2}\\right)=9x^{2}+24xy+16y^{2}-8x^{2}-24xy-18y^{2},$$ that is $$X^{2}-2Y^{2}=x^{2}-2y^{2}=1 . \\qquad\\checkmark$$\n\n**Step 3: the solutions never repeat.** For $x,y>0$ we have $Y=2x+3y>y$, so the second coordinate strictly increases and all the pairs produced are distinct.\n\nHence $(3,2)$ generates an infinite chain $$(3,2)\\to(17,12)\\to(99,70)\\to(577,408)\\to\\cdots \\qquad\\blacksquare$$\n\n**Check:** $17^{2}-2\\cdot12^{2}=289-288=1$ ✓ and $99^{2}-2\\cdot70^{2}=9801-9800=1$ ✓\n\n**Where the map comes from.** It is multiplication by $3+2\\sqrt2$: if $x+y\\sqrt2$ has norm $1$, so does $(x+y\\sqrt2)(3+2\\sqrt2)=(3x+4y)+(2x+3y)\\sqrt2$."
   }
  },
  {
   "src": "Международный уровень / International level",
   "lvl": 4,
   "q": {
    "ru": "Решите уравнение $3^{x}+4^{y}=5^{z}$ в натуральных числах.",
    "en": "Solve $3^{x}+4^{y}=5^{z}$ in positive integers."
   },
   "hint": {
    "ru": "Модуль $3$ даёт чётность $z$, модуль $4$ — чётность $x$; потом разложите разность квадратов.",
    "en": "Modulo $3$ gives the parity of $z$, modulo $4$ that of $x$; then factor a difference of squares."
   },
   "sol": {
    "ru": "**Шаг 1: $z$ чётно.** По модулю $3$: $4\\equiv1$ и $5\\equiv-1$, поэтому $$0+1\\equiv(-1)^{z}\\pmod 3\\quad\\Longrightarrow\\quad (-1)^{z}=1 ,$$ то есть $z$ чётно.\n\n**Шаг 2: $x$ чётно.** По модулю $4$: $3\\equiv-1$, $4^{y}\\equiv0$ (при $y\\ge1$), $5\\equiv1$, поэтому $$(-1)^{x}\\equiv1\\pmod 4\\quad\\Longrightarrow\\quad x\\ \\text{чётно}.$$\n\n**Шаг 3: разложение.** Пусть $x=2m$, $z=2n$. Тогда $$2^{2y}=4^{y}=5^{2n}-3^{2m}=\\left(5^{n}-3^{m}\\right)\\left(5^{n}+3^{m}\\right).$$ Оба множителя — степени двойки, скажем $2^{s}$ и $2^{t}$ с $s<t$.\n\n**Шаг 4: $s=1$.** Сложив, получаем $$2\\cdot5^{n}=2^{s}+2^{t}=2^{s}\\left(1+2^{t-s}\\right).$$ Скобка нечётна, а $5^{n}$ нечётно, значит степень двойки слева и справа совпадает: $s=1$.\n\n**Шаг 5.** Итак $5^{n}-3^{m}=2$ и $2\\cdot5^{n}=2+2^{t}$, откуда $$5^{n}=1+2^{\\,t-1} ,\\qquad\\text{то есть}\\qquad 2^{\\,t-1}=5^{n}-1 .$$\n\nРазложим: $$5^{n}-1=(5-1)\\left(5^{n-1}+5^{n-2}+\\dots+1\\right)=4\\cdot S ,$$ где $S$ — сумма $n$ нечётных слагаемых, значит $S$ имеет ту же чётность, что и $n$. Чтобы $4S$ было степенью двойки, нужно $S$ нечётной степенью двойки, то есть $S=1$, а это даёт $n=1$.\n\n**Шаг 6.** При $n=1$: $5-3^{m}=2$ даёт $3^{m}=3$, то есть $m=1$; тогда $2^{t-1}=4$, $t=3$, и $2y=s+t=1+3=4$, значит $y=2$.\n\nИтого $$x=2m=2,\\qquad y=2,\\qquad z=2n=2 .$$\n\n**Проверка:** $3^{2}+4^{2}=9+16=25=5^{2}$ ✓\n\n**Ответ:** $(x,y,z)=(2,2,2)$.",
    "en": "**Step 1: $z$ is even.** Modulo $3$: $4\\equiv1$ and $5\\equiv-1$, so $$0+1\\equiv(-1)^{z}\\pmod 3\\quad\\Longrightarrow\\quad (-1)^{z}=1 ,$$ i.e. $z$ is even.\n\n**Step 2: $x$ is even.** Modulo $4$: $3\\equiv-1$, $4^{y}\\equiv0$ (for $y\\ge1$), $5\\equiv1$, so $$(-1)^{x}\\equiv1\\pmod 4\\quad\\Longrightarrow\\quad x\\ \\text{is even}.$$\n\n**Step 3: factor.** Put $x=2m$, $z=2n$. Then $$2^{2y}=4^{y}=5^{2n}-3^{2m}=\\left(5^{n}-3^{m}\\right)\\left(5^{n}+3^{m}\\right).$$ Both factors are powers of two, say $2^{s}$ and $2^{t}$ with $s<t$.\n\n**Step 4: $s=1$.** Adding them, $$2\\cdot5^{n}=2^{s}+2^{t}=2^{s}\\left(1+2^{t-s}\\right).$$ The bracket is odd and $5^{n}$ is odd, so the powers of two on the two sides must match: $s=1$.\n\n**Step 5.** Thus $5^{n}-3^{m}=2$ and $2\\cdot5^{n}=2+2^{t}$, giving $$5^{n}=1+2^{\\,t-1} ,\\qquad\\text{i.e.}\\qquad 2^{\\,t-1}=5^{n}-1 .$$\n\nFactor: $$5^{n}-1=(5-1)\\left(5^{n-1}+5^{n-2}+\\dots+1\\right)=4\\cdot S ,$$ where $S$ is a sum of $n$ odd terms, hence has the same parity as $n$. For $4S$ to be a power of two, $S$ must be one as well, and being odd it forces $S=1$, i.e. $n=1$.\n\n**Step 6.** With $n=1$: $5-3^{m}=2$ gives $3^{m}=3$, so $m=1$; then $2^{t-1}=4$, $t=3$, and $2y=s+t=1+3=4$, so $y=2$.\n\nAltogether $$x=2m=2,\\qquad y=2,\\qquad z=2n=2 .$$\n\n**Check:** $3^{2}+4^{2}=9+16=25=5^{2}$ ✓\n\n**Answer:** $(x,y,z)=(2,2,2)$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что уравнение $x^{3}+2y^{3}=4z^{3}$ имеет в целых числах только решение $x=y=z=0$.",
    "en": "Prove that $x^{3}+2y^{3}=4z^{3}$ has only the solution $x=y=z=0$ in integers."
   },
   "hint": {
    "ru": "Возьмите решение с наименьшим $|x|+|y|+|z|>0$ и покажите, что все три числа чётны.",
    "en": "Take a solution with the smallest $|x|+|y|+|z|>0$ and show all three are even."
   },
   "sol": {
    "ru": "Предположим, что есть ненулевое решение, и выберем из всех таких то, у которого сумма $|x|+|y|+|z|$ **наименьшая**.\n\n**Шаг 1: $x$ чётно.** Из уравнения $x^{3}=4z^{3}-2y^{3}=2\\left(2z^{3}-y^{3}\\right)$ видно, что $x^{3}$ чётно, а значит и $x$ чётно (куб нечётного числа нечётен). Положим $x=2a$.\n\n**Шаг 2: $y$ чётно.** Подставим: $$8a^{3}+2y^{3}=4z^{3}\\quad\\Longleftrightarrow\\quad 4a^{3}+y^{3}=2z^{3} .$$ Отсюда $y^{3}=2z^{3}-4a^{3}$ чётно, значит $y$ чётно; положим $y=2b$.\n\n**Шаг 3: $z$ чётно.** Подставим снова: $$4a^{3}+8b^{3}=2z^{3}\\quad\\Longleftrightarrow\\quad 2a^{3}+4b^{3}=z^{3} .$$ Отсюда $z^{3}$ чётно, значит $z$ чётно; положим $z=2c$.\n\n**Шаг 4: спуск.** Подставим в последнее равенство: $$2a^{3}+4b^{3}=8c^{3}\\quad\\Longleftrightarrow\\quad a^{3}+2b^{3}=4c^{3} .$$\n\nЗначит $(a,b,c)=\\left(\\tfrac x2,\\tfrac y2,\\tfrac z2\\right)$ — тоже решение, и оно ненулевое, но $$|a|+|b|+|c|=\\frac{|x|+|y|+|z|}{2}<|x|+|y|+|z| ,$$ что противоречит выбору наименьшей суммы ✗\n\nЗначит ненулевых решений нет. $\\blacksquare$",
    "en": "Suppose a non-zero solution exists, and among all of them choose one with the **smallest** sum $|x|+|y|+|z|$.\n\n**Step 1: $x$ is even.** From $x^{3}=4z^{3}-2y^{3}=2\\left(2z^{3}-y^{3}\\right)$ we see $x^{3}$ is even, hence so is $x$ (the cube of an odd number is odd). Put $x=2a$.\n\n**Step 2: $y$ is even.** Substituting, $$8a^{3}+2y^{3}=4z^{3}\\quad\\Longleftrightarrow\\quad 4a^{3}+y^{3}=2z^{3} .$$ So $y^{3}=2z^{3}-4a^{3}$ is even and $y$ is even; put $y=2b$.\n\n**Step 3: $z$ is even.** Substituting again, $$4a^{3}+8b^{3}=2z^{3}\\quad\\Longleftrightarrow\\quad 2a^{3}+4b^{3}=z^{3} .$$ So $z^{3}$ is even and $z$ is even; put $z=2c$.\n\n**Step 4: the descent.** Substituting into the last identity, $$2a^{3}+4b^{3}=8c^{3}\\quad\\Longleftrightarrow\\quad a^{3}+2b^{3}=4c^{3} .$$\n\nSo $(a,b,c)=\\left(\\tfrac x2,\\tfrac y2,\\tfrac z2\\right)$ is a solution too, still non-zero, yet $$|a|+|b|+|c|=\\frac{|x|+|y|+|z|}{2}<|x|+|y|+|z| ,$$ contradicting the minimality ✗\n\nHence no non-zero solution exists. $\\blacksquare$"
   }
  },
  {
   "src": "Международный уровень / International level",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что уравнение $y^{2}=x^{3}+7$ не имеет решений в целых числах.",
    "en": "Prove that $y^{2}=x^{3}+7$ has no integer solutions."
   },
   "hint": {
    "ru": "Покажите, что $x$ нечётно, прибавьте единицу к обеим частям и найдите простой делитель вида $4k+3$.",
    "en": "Show $x$ is odd, add one to both sides, and find a prime divisor of the form $4k+3$."
   },
   "sol": {
    "ru": "**Шаг 1: $x$ нечётно.** Пусть $x$ чётно. Тогда $8\\mid x^{3}$, поэтому $$y^{2}\\equiv7\\pmod 8 .$$ Но квадраты по модулю $8$ дают только $0$, $1$ и $4$ ✗ Значит $x$ нечётно.\n\n**Шаг 2: прибавим единицу.** $$y^{2}+1=x^{3}+8=(x+2)\\left(x^{2}-2x+4\\right).$$\n\n**Шаг 3: у второго множителя есть простой делитель вида $4k+3$.** Так как $x$ нечётно, число $x-1$ чётно, поэтому $(x-1)^{2}$ делится на $4$, и $$x^{2}-2x+4=(x-1)^{2}+3\\equiv3\\pmod 4 .$$ Число, сравнимое с $3$ по модулю $4$, нечётно и не может быть произведением одних лишь простых вида $4k+1$ (такое произведение само сравнимо с $1$). Значит у него есть простой делитель $p\\equiv3\\pmod 4$. Заметим также, что $x^{2}-2x+4=(x-1)^{2}+3\\ge3$, так что делитель действительно существует.\n\n**Шаг 4: противоречие.** Этот $p$ делит $y^{2}+1$, то есть $$y^{2}\\equiv-1\\pmod p .$$ Но нечётное простое $p$, делящее $y^{2}+1$, обязано быть сравнимо с $1$ по модулю $4$ (возведите сравнение в степень $\\tfrac{p-1}2$ и примените малую теорему Ферма) ✗\n\nПротиворечие. $\\blacksquare$\n\n**Замечание.** Это одно из уравнений Морделла $y^{2}=x^{3}+k$. При других $k$ решения бывают: например, $y^{2}=x^{3}+1$ имеет решения $(x,y)=(0,\\pm1)$, $(-1,0)$, $(2,\\pm3)$.",
    "en": "**Step 1: $x$ is odd.** Suppose $x$ were even. Then $8\\mid x^{3}$, so $$y^{2}\\equiv7\\pmod 8 .$$ But squares modulo $8$ are only $0$, $1$ and $4$ ✗ So $x$ is odd.\n\n**Step 2: add one.** $$y^{2}+1=x^{3}+8=(x+2)\\left(x^{2}-2x+4\\right).$$\n\n**Step 3: the second factor has a prime divisor of the form $4k+3$.** Since $x$ is odd, $x-1$ is even, so $(x-1)^{2}$ is a multiple of $4$ and $$x^{2}-2x+4=(x-1)^{2}+3\\equiv3\\pmod 4 .$$ A number $\\equiv3\\pmod4$ is odd and cannot be a product of primes all of the form $4k+1$ (such a product is itself $\\equiv1$). So it has a prime divisor $p\\equiv3\\pmod 4$. Note also $x^{2}-2x+4=(x-1)^{2}+3\\ge3$, so such a divisor really exists.\n\n**Step 4: contradiction.** This $p$ divides $y^{2}+1$, i.e. $$y^{2}\\equiv-1\\pmod p .$$ But an odd prime $p$ dividing $y^{2}+1$ must be $\\equiv1\\pmod 4$ (raise the congruence to the power $\\tfrac{p-1}2$ and use Fermat’s little theorem) ✗\n\nContradiction. $\\blacksquare$\n\n**Remark.** This is one of the Mordell equations $y^{2}=x^{3}+k$. For other $k$ solutions do exist: e.g. $y^{2}=x^{3}+1$ has $(x,y)=(0,\\pm1)$, $(-1,0)$, $(2,\\pm3)$."
   }
  }
 ]
};
