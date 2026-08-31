/* Topic 5 — generated from content/lesson_05.py, do not edit by hand. */
window.LESSONS = window.LESSONS || {};
window.LESSONS[5] = {
 "n": 5,
 "cat": "alg",
 "title": {
  "ru": "Тождества и разложение на множители",
  "en": "Identities and factoring"
 },
 "sub": {
  "ru": "Формулы сокращённого умножения, группировка, симметричные суммы и теорема Безу — инструменты, которые превращают выражение в произведение.",
  "en": "The standard identities, grouping, symmetric sums and the factor theorem — the tools that turn an expression into a product."
 },
 "goals": {
  "ru": [
   "Знать наизусть основные тождества и узнавать их в замаскированном виде.",
   "Раскладывать многочлены группировкой и приёмом «добавить и вычесть».",
   "Считать $a^2+b^2$, $a^3+b^3$ и подобное, зная только $a+b$ и $ab$.",
   "Находить корни многочлена и разлагать его по теореме Безу."
  ],
  "en": [
   "Know the core identities by heart and recognise them in disguise.",
   "Factor polynomials by grouping and by the \"add and subtract\" trick.",
   "Compute $a^2+b^2$, $a^3+b^3$ and the like knowing only $a+b$ and $ab$.",
   "Find the roots of a polynomial and factor it using the factor theorem."
  ]
 },
 "sections": [
  {
   "h": {
    "ru": "Зачем вообще раскладывать",
    "en": "Why factoring is the whole game"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Сумма почти ничего не говорит о числе. Произведение говорит всё. Если вы знаете, что $N=7\\cdot13$, вы сразу знаете делители $N$, знаете, что $N$ составное, знаете, при каких значениях переменной выражение обращается в ноль. Поэтому первое, что делают с любым выражением, — пытаются разложить его на множители.",
      "en": "A sum tells you almost nothing about a number. A product tells you everything. If you know $N=7\\cdot13$, you immediately know the divisors of $N$, you know $N$ is composite, and you know exactly when the expression vanishes. That is why the first thing done to any expression is an attempt to factor it."
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Три задачи, которые решает разложение:\n\n**Делимость.** «Докажите, что $n^{3}-n$ делится на $6$» — разложите: $n^{3}-n=(n-1)n(n+1)$, произведение трёх подряд идущих чисел.\n\n**Простота и составность.** «Докажите, что $n^{4}+4$ составное при $n>1$» — разложите на два множителя, каждый больше единицы.\n\n**Уравнения.** «Решите $x^{3}=x$» — переносим всё влево: $x(x-1)(x+1)=0$, корни видны.",
      "en": "Three kinds of problem that factoring solves:\n\n**Divisibility.** \"Prove that $n^{3}-n$ is divisible by $6$\" — factor it: $n^{3}-n=(n-1)n(n+1)$, a product of three consecutive integers.\n\n**Primality.** \"Prove that $n^{4}+4$ is composite for $n>1$\" — split it into two factors, each bigger than one.\n\n**Equations.** \"Solve $x^{3}=x$\" — move everything left: $x(x-1)(x+1)=0$, and the roots are visible."
     }
    },
    {
     "t": "p",
     "text": {
      "ru": "В олимпиадной задаче разложение почти никогда не бывает очевидным. Поэтому дальше — весь набор приёмов, от самых простых формул до теоремы Безу.",
      "en": "In an olympiad problem the factorisation is almost never obvious. So what follows is the full set of moves, from the simplest identities to the factor theorem."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Тождества, которые надо знать наизусть",
    "en": "The identities to know by heart"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Эти формулы должны узнаваться мгновенно и в обе стороны — и слева направо, и справа налево. Именно чтение справа налево и есть разложение на множители.",
      "en": "These must be recognised instantly and in both directions — left to right and right to left. Reading them right to left is exactly what factoring is."
     }
    },
    {
     "t": "table",
     "head": {
      "ru": [
       "Тождество",
       "Где встречается"
      ],
      "en": [
       "Identity",
       "Where it turns up"
      ]
     },
     "rows": {
      "ru": [
       [
        "$(a\\pm b)^{2}=a^{2}\\pm2ab+b^{2}$",
        "везде"
       ],
       [
        "$a^{2}-b^{2}=(a-b)(a+b)$",
        "самая полезная формула в теории чисел"
       ],
       [
        "$(a\\pm b)^{3}=a^{3}\\pm3a^{2}b+3ab^{2}\\pm b^{3}$",
        "кубы, бином"
       ],
       [
        "$a^{3}+b^{3}=(a+b)(a^{2}-ab+b^{2})$",
        "делимость сумм степеней"
       ],
       [
        "$a^{3}-b^{3}=(a-b)(a^{2}+ab+b^{2})$",
        "то же"
       ],
       [
        "$a^{n}-b^{n}=(a-b)(a^{n-1}+a^{n-2}b+\\dots+b^{n-1})$",
        "$a-b$ всегда делит $a^n-b^n$"
       ],
       [
        "$a^{n}+b^{n}=(a+b)(a^{n-1}-a^{n-2}b+\\dots+b^{n-1})$ при нечётном $n$",
        "$a+b$ делит $a^n+b^n$"
       ],
       [
        "$(a+b+c)^{2}=a^{2}+b^{2}+c^{2}+2(ab+bc+ca)$",
        "симметричные задачи"
       ],
       [
        "$a^{3}+b^{3}+c^{3}-3abc=(a+b+c)(a^{2}+b^{2}+c^{2}-ab-bc-ca)$",
        "условие $a+b+c=0$"
       ],
       [
        "$a^{4}+4b^{4}=(a^{2}-2ab+2b^{2})(a^{2}+2ab+2b^{2})$",
        "тождество Софи Жермен"
       ]
      ],
      "en": [
       [
        "$(a\\pm b)^{2}=a^{2}\\pm2ab+b^{2}$",
        "everywhere"
       ],
       [
        "$a^{2}-b^{2}=(a-b)(a+b)$",
        "the single most useful formula in number theory"
       ],
       [
        "$(a\\pm b)^{3}=a^{3}\\pm3a^{2}b+3ab^{2}\\pm b^{3}$",
        "cubes, binomial"
       ],
       [
        "$a^{3}+b^{3}=(a+b)(a^{2}-ab+b^{2})$",
        "divisibility of power sums"
       ],
       [
        "$a^{3}-b^{3}=(a-b)(a^{2}+ab+b^{2})$",
        "the same"
       ],
       [
        "$a^{n}-b^{n}=(a-b)(a^{n-1}+a^{n-2}b+\\dots+b^{n-1})$",
        "$a-b$ always divides $a^n-b^n$"
       ],
       [
        "$a^{n}+b^{n}=(a+b)(a^{n-1}-a^{n-2}b+\\dots+b^{n-1})$ for odd $n$",
        "$a+b$ divides $a^n+b^n$"
       ],
       [
        "$(a+b+c)^{2}=a^{2}+b^{2}+c^{2}+2(ab+bc+ca)$",
        "symmetric problems"
       ],
       [
        "$a^{3}+b^{3}+c^{3}-3abc=(a+b+c)(a^{2}+b^{2}+c^{2}-ab-bc-ca)$",
        "the condition $a+b+c=0$"
       ],
       [
        "$a^{4}+4b^{4}=(a^{2}-2ab+2b^{2})(a^{2}+2ab+2b^{2})$",
        "the Sophie Germain identity"
       ]
      ]
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Две строки с $a^{n}\\pm b^{n}$ стоит понимать как **утверждения о делимости**: $a-b$ делит $a^{n}-b^{n}$ при любом $n$, а $a+b$ делит $a^{n}+b^{n}$ при нечётном $n$. Отсюда, например, сразу видно, что $10^{k}-1$ делится на $9$, а $3^{105}+4^{105}$ делится на $7$.",
      "en": "The two rows with $a^{n}\\pm b^{n}$ are best read as **divisibility statements**: $a-b$ divides $a^{n}-b^{n}$ for every $n$, and $a+b$ divides $a^{n}+b^{n}$ for odd $n$. From this it is immediate that $10^{k}-1$ is divisible by $9$, and that $3^{105}+4^{105}$ is divisible by $7$."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Вычислите $\\dfrac{2024^{3}+1}{2024^{2}-2023}$ без калькулятора.",
      "en": "Evaluate $\\dfrac{2024^{3}+1}{2024^{2}-2023}$ without a calculator."
     },
     "steps": {
      "ru": [
       "Обозначим $a=2024$. Тогда $2023=a-1$.",
       "Числитель: $a^{3}+1=(a+1)(a^{2}-a+1)$.",
       "Знаменатель: $a^{2}-(a-1)=a^{2}-a+1$.",
       "Общий множитель $a^{2}-a+1$ сокращается (он положителен, значит не ноль).",
       "Остаётся $a+1=2025$."
      ],
      "en": [
       "Write $a=2024$. Then $2023=a-1$.",
       "Numerator: $a^{3}+1=(a+1)(a^{2}-a+1)$.",
       "Denominator: $a^{2}-(a-1)=a^{2}-a+1$.",
       "The common factor $a^{2}-a+1$ cancels (it is positive, hence non-zero).",
       "What is left is $a+1=2025$."
      ]
     },
     "ans": {
      "ru": "$2025$.",
      "en": "$2025$."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Замена буквы на букву",
      "en": "Rename the awkward number"
     },
     "text": {
      "ru": "Обратите внимание на самый первый шаг примера: громоздкое число заменили буквой. Это стоит делать **всегда**, когда в задаче фигурирует большое число вместе с соседними: $2023,2024,2025$ — это $a-1,a,a+1$. После замены задача обычно становится школьной.",
      "en": "Notice the very first step of the example: an awkward number was renamed by a letter. Do this **whenever** a problem features a large number together with its neighbours: $2023,2024,2025$ are $a-1,a,a+1$. After the rename the problem usually becomes routine."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Тождество Софи Жермен",
      "en": "The Sophie Germain identity"
     },
     "text": {
      "ru": "$$a^{4}+4b^{4}=\\left(a^{2}-2ab+2b^{2}\\right)\\left(a^{2}+2ab+2b^{2}\\right).$$",
      "en": "$$a^{4}+4b^{4}=\\left(a^{2}-2ab+2b^{2}\\right)\\left(a^{2}+2ab+2b^{2}\\right).$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Дополним до полного квадрата, прибавив и вычтя $4a^{2}b^{2}$: $$a^{4}+4b^{4}=a^{4}+4a^{2}b^{2}+4b^{4}-4a^{2}b^{2}=\\left(a^{2}+2b^{2}\\right)^{2}-(2ab)^{2} .$$\n\nТеперь это разность квадратов: $$\\left(a^{2}+2b^{2}-2ab\\right)\\left(a^{2}+2b^{2}+2ab\\right). \\qquad\\blacksquare$$",
      "en": "Complete the square by adding and subtracting $4a^{2}b^{2}$: $$a^{4}+4b^{4}=\\left(a^{2}+2b^{2}\\right)^{2}-(2ab)^{2} ,$$ a difference of squares, hence $$\\left(a^{2}+2b^{2}-2ab\\right)\\left(a^{2}+2b^{2}+2ab\\right). \\qquad\\blacksquare$$"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Приём **«прибавить и вычесть»** — главный в этом разделе. Выражение не раскладывается? Добавьте недостающий член до полного квадрата и тут же вычтите его: часто получается разность квадратов.\n\nЧастный случай $b=1$ даёт $a^{4}+4$ и объясняет, почему это число составное при $a>1$.",
      "en": "The **add-and-subtract** move is the heart of this section. An expression will not factor? Add the term missing from a perfect square and subtract it again: a difference of squares often appears.\n\nThe case $b=1$ gives $a^{4}+4$ and explains why that number is composite for $a>1$."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Тождество для трёх кубов",
      "en": "The three-cube identity"
     },
     "text": {
      "ru": "$$a^{3}+b^{3}+c^{3}-3abc=(a+b+c)\\left(a^{2}+b^{2}+c^{2}-ab-bc-ca\\right).$$",
      "en": "$$a^{3}+b^{3}+c^{3}-3abc=(a+b+c)\\left(a^{2}+b^{2}+c^{2}-ab-bc-ca\\right).$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Раскроем правую часть, умножая каждое слагаемое первой скобки на вторую.\n\nЧлены с $a$: $$a^{3}+ab^{2}+ac^{2}-a^{2}b-abc-a^{2}c .$$ Аналогично для $b$ и $c$. Сложим все девять групп.\n\nКубы дают $a^{3}+b^{3}+c^{3}$. Смешанные члены вида $a^{2}b$ встречаются дважды с противоположными знаками (один раз из группы $a$, другой из группы $b$) и уничтожаются — и так для всех шести таких членов. Остаются три члена $-abc$, по одному из каждой группы: $$-3abc .$$\n\nИтого правая часть равна $a^{3}+b^{3}+c^{3}-3abc$ ✓ $\\blacksquare$\n\n**Два важных следствия.** Если $a+b+c=0$, то $a^{3}+b^{3}+c^{3}=3abc$. А поскольку вторая скобка равна $\\tfrac12\\left[(a-b)^{2}+(b-c)^{2}+(c-a)^{2}\\right]\\ge0$, при неотрицательных $a,b,c$ получаем $a^{3}+b^{3}+c^{3}\\ge3abc$ — это неравенство о среднем для трёх чисел.",
      "en": "Expand the right-hand side, multiplying each term of the first bracket by the second.\n\nThe terms containing $a$ are $$a^{3}+ab^{2}+ac^{2}-a^{2}b-abc-a^{2}c ,$$ and similarly for $b$ and $c$. Add all nine groups.\n\nThe cubes give $a^{3}+b^{3}+c^{3}$. Mixed terms such as $a^{2}b$ occur twice with opposite signs (once from the $a$ group, once from the $b$ group) and cancel — likewise for all six of them. What remains is three copies of $-abc$: $$-3abc .$$\n\nSo the right side equals $a^{3}+b^{3}+c^{3}-3abc$ ✓ $\\blacksquare$\n\n**Two important consequences.** If $a+b+c=0$ then $a^{3}+b^{3}+c^{3}=3abc$. And since the second bracket equals $\\tfrac12\\left[(a-b)^{2}+(b-c)^{2}+(c-a)^{2}\\right]\\ge0$, for non-negative $a,b,c$ we get $a^{3}+b^{3}+c^{3}\\ge3abc$ — the AM–GM inequality for three numbers."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Разложение $a^{n}\\pm b^{n}$",
    "en": "Factoring $a^{n}\\pm b^{n}$"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Разность квадратов и сумма кубов — частные случаи двух общих формул. Стоит выучить их в общем виде: именно они превращают вопросы о делимости больших степеней в устные.",
      "en": "The difference of squares and the sum of cubes are special cases of two general formulas. They are worth learning in full: they turn questions about divisibility of large powers into one-liners."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Разность одинаковых степеней",
      "en": "Difference of equal powers"
     },
     "text": {
      "ru": "Для любого натурального $n$ $$a^{n}-b^{n}=(a-b)\\left(a^{\\,n-1}+a^{\\,n-2}b+a^{\\,n-3}b^{2}+\\dots+ab^{\\,n-2}+b^{\\,n-1}\\right).$$ В частности, $a-b$ **всегда** делит $a^{n}-b^{n}$.",
      "en": "For every positive integer $n$ $$a^{n}-b^{n}=(a-b)\\left(a^{\\,n-1}+a^{\\,n-2}b+\\dots+ab^{\\,n-2}+b^{\\,n-1}\\right).$$ In particular $a-b$ **always** divides $a^{n}-b^{n}$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Обозначим вторую скобку через $S=\\sum_{k=0}^{n-1}a^{\\,n-1-k}b^{k}$ и раскроем произведение.\n\nУмножение на $a$ даёт $$aS=a^{n}+a^{\\,n-1}b+a^{\\,n-2}b^{2}+\\dots+ab^{\\,n-1} .$$\n\nУмножение на $-b$ даёт $$-bS=-a^{\\,n-1}b-a^{\\,n-2}b^{2}-\\dots-ab^{\\,n-1}-b^{n} .$$\n\nСложим: все средние слагаемые встречаются дважды с противоположными знаками и уничтожаются, остаётся $$aS-bS=a^{n}-b^{n} . \\qquad\\blacksquare$$\n\nЭто «телескопическое» сокращение — та же идея, что и в телескопических суммах.",
      "en": "Write the second bracket as $S=\\sum_{k=0}^{n-1}a^{\\,n-1-k}b^{k}$ and expand the product.\n\nMultiplying by $a$: $$aS=a^{n}+a^{\\,n-1}b+\\dots+ab^{\\,n-1} .$$\n\nMultiplying by $-b$: $$-bS=-a^{\\,n-1}b-\\dots-ab^{\\,n-1}-b^{n} .$$\n\nAdd: every middle term appears twice with opposite signs and cancels, leaving $$aS-bS=a^{n}-b^{n} . \\qquad\\blacksquare$$\n\nThis \"telescoping\" cancellation is the same idea as in telescoping sums."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Сумма нечётных степеней",
      "en": "Sum of odd powers"
     },
     "text": {
      "ru": "Если $n$ **нечётно**, то $$a^{n}+b^{n}=(a+b)\\left(a^{\\,n-1}-a^{\\,n-2}b+a^{\\,n-3}b^{2}-\\dots-ab^{\\,n-2}+b^{\\,n-1}\\right),$$ то есть $a+b$ делит $a^{n}+b^{n}$. При **чётном** $n$ это неверно.",
      "en": "If $n$ is **odd** then $$a^{n}+b^{n}=(a+b)\\left(a^{\\,n-1}-a^{\\,n-2}b+\\dots-ab^{\\,n-2}+b^{\\,n-1}\\right),$$ so $a+b$ divides $a^{n}+b^{n}$. For **even** $n$ this fails."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Подставим $-b$ вместо $b$ в предыдущую формулу: $$a^{n}-(-b)^{n}=\\left(a-(-b)\\right)\\left(a^{\\,n-1}+a^{\\,n-2}(-b)+\\dots+(-b)^{\\,n-1}\\right).$$\n\nПри нечётном $n$ имеем $(-b)^{n}=-b^{n}$, значит слева стоит $a^{n}+b^{n}$, а первая скобка справа равна $a+b$. Знаки во второй скобке чередуются, а последний член $(-b)^{\\,n-1}=b^{\\,n-1}$ положителен, потому что $n-1$ чётно ✓\n\n**Почему для чётного $n$ не работает.** При чётном $n$ подстановка даёт $a^{n}-b^{n}$, а не сумму. И действительно, $a+b$ обычно не делит $a^{n}+b^{n}$: например, $2+1=3$ не делит $2^{2}+1^{2}=5$. $\\blacksquare$",
      "en": "Substitute $-b$ for $b$ in the previous formula: $$a^{n}-(-b)^{n}=\\left(a+b\\right)\\left(a^{\\,n-1}-a^{\\,n-2}b+\\dots+(-b)^{\\,n-1}\\right).$$\n\nFor odd $n$ we have $(-b)^{n}=-b^{n}$, so the left side is $a^{n}+b^{n}$ and the first bracket is $a+b$. The signs alternate, and the last term $(-b)^{\\,n-1}=b^{\\,n-1}$ is positive because $n-1$ is even ✓\n\n**Why even $n$ fails.** For even $n$ the substitution produces $a^{n}-b^{n}$, not the sum. And indeed $a+b$ usually does not divide $a^{n}+b^{n}$: $2+1=3$ does not divide $2^{2}+1^{2}=5$. $\\blacksquare$"
     }
    },
    {
     "t": "table",
     "head": {
      "ru": [
       "Выражение",
       "Делится на",
       "Условие"
      ],
      "en": [
       "Expression",
       "Divisible by",
       "Condition"
      ]
     },
     "rows": {
      "ru": [
       [
        "$a^{n}-b^{n}$",
        "$a-b$",
        "всегда"
       ],
       [
        "$a^{n}-b^{n}$",
        "$a+b$",
        "$n$ чётно"
       ],
       [
        "$a^{n}+b^{n}$",
        "$a+b$",
        "$n$ нечётно"
       ],
       [
        "$a^{n}+b^{n}$",
        "$a-b$",
        "никогда (при $a\\ne b$)"
       ]
      ],
      "en": [
       [
        "$a^{n}-b^{n}$",
        "$a-b$",
        "always"
       ],
       [
        "$a^{n}-b^{n}$",
        "$a+b$",
        "$n$ even"
       ],
       [
        "$a^{n}+b^{n}$",
        "$a+b$",
        "$n$ odd"
       ],
       [
        "$a^{n}+b^{n}$",
        "$a-b$",
        "never (for $a\\ne b$)"
       ]
      ]
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Докажите, что $3^{105}+4^{105}$ делится на $7$.",
      "en": "Prove that $3^{105}+4^{105}$ is divisible by $7$."
     },
     "steps": {
      "ru": [
       "Показатель $105$ нечётен, значит применима формула суммы нечётных степеней.",
       "Она даёт делимость на $a+b=3+4=7$ ✓",
       "Проверка идеи на маленьком показателе: $3^{3}+4^{3}=27+64=91=7\\cdot13$ ✓"
      ],
      "en": [
       "The exponent $105$ is odd, so the sum-of-odd-powers formula applies.",
       "It gives divisibility by $a+b=3+4=7$ ✓",
       "A small check: $3^{3}+4^{3}=27+64=91=7\\cdot13$ ✓"
      ]
     },
     "ans": {
      "ru": "Делится, поскольку $7=3+4$.",
      "en": "It is divisible, because $7=3+4$."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Критерий делимости степеней",
      "en": "When one power difference divides another"
     },
     "text": {
      "ru": "Для целого $a>1$ и натуральных $m,n$ $$\\left(a^{n}-1\\right)\\ \\big|\\ \\left(a^{m}-1\\right)\\quad\\Longleftrightarrow\\quad n\\mid m .$$",
      "en": "For an integer $a>1$ and positive integers $m,n$ $$\\left(a^{n}-1\\right)\\ \\big|\\ \\left(a^{m}-1\\right)\\quad\\Longleftrightarrow\\quad n\\mid m .$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Если $n\\mid m$,** скажем $m=nq$, то по формуле разности степеней с основанием $x=a^{n}$ $$a^{m}-1=\\left(a^{n}\\right)^{q}-1=\\left(a^{n}-1\\right)\\left(\\dots\\right) \\quad\\checkmark$$\n\n**Обратно.** Разделим с остатком: $m=nq+r$, $0\\le r<n$. Тогда $$a^{m}-1=a^{r}\\left(a^{nq}-1\\right)+\\left(a^{r}-1\\right).$$ Первое слагаемое делится на $a^{n}-1$ по уже доказанному. Значит из $\\left(a^{n}-1\\right)\\mid\\left(a^{m}-1\\right)$ следует $$\\left(a^{n}-1\\right)\\ \\big|\\ \\left(a^{r}-1\\right).$$ Но $0\\le a^{r}-1<a^{n}-1$, поэтому это возможно лишь при $a^{r}-1=0$, то есть $r=0$ ✓ $\\blacksquare$",
      "en": "**If $n\\mid m$,** say $m=nq$, apply the difference formula with base $x=a^{n}$: $$a^{m}-1=\\left(a^{n}\\right)^{q}-1=\\left(a^{n}-1\\right)\\left(\\dots\\right) \\quad\\checkmark$$\n\n**Conversely.** Divide with remainder: $m=nq+r$, $0\\le r<n$. Then $$a^{m}-1=a^{r}\\left(a^{nq}-1\\right)+\\left(a^{r}-1\\right),$$ and the first term is divisible by $a^{n}-1$ by the above. So $\\left(a^{n}-1\\right)\\mid\\left(a^{m}-1\\right)$ forces $$\\left(a^{n}-1\\right)\\ \\big|\\ \\left(a^{r}-1\\right).$$ But $0\\le a^{r}-1<a^{n}-1$, which is possible only if $a^{r}-1=0$, i.e. $r=0$ ✓ $\\blacksquare$"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Отсюда мгновенно следует, что число $2^{k}-1$ может быть простым только при простом $k$: составное $k=mn$ давало бы делитель $2^{m}-1$. Это первый шаг в охоте за простыми Мерсенна.",
      "en": "This instantly shows $2^{k}-1$ can be prime only for prime $k$: a composite $k=mn$ would produce the divisor $2^{m}-1$. It is the first step in the hunt for Mersenne primes."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Группировка и приём «добавить и вычесть»",
    "en": "Grouping, and the add-and-subtract trick"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "**Группировка** — самый простой приём: разбейте слагаемые на группы так, чтобы в каждой нашёлся общий множитель, а после вынесения общим оказалось выражение в скобках.",
      "en": "**Grouping** is the simplest move: split the terms into groups so that each group has a common factor, and after taking those out the bracket itself becomes the common factor."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Разложите на множители $x^{3}-4x^{2}-x+4$.",
      "en": "Factor $x^{3}-4x^{2}-x+4$."
     },
     "steps": {
      "ru": [
       "Группируем по два: $(x^{3}-4x^{2})-(x-4)$.",
       "Из первой скобки выносим $x^{2}$: $x^{2}(x-4)-(x-4)$.",
       "Теперь общий множитель $(x-4)$: получаем $(x-4)(x^{2}-1)$.",
       "Остаётся разность квадратов: $x^{2}-1=(x-1)(x+1)$."
      ],
      "en": [
       "Group in pairs: $(x^{3}-4x^{2})-(x-4)$.",
       "Take $x^{2}$ out of the first bracket: $x^{2}(x-4)-(x-4)$.",
       "Now $(x-4)$ is common: this gives $(x-4)(x^{2}-1)$.",
       "And a difference of squares remains: $x^{2}-1=(x-1)(x+1)$."
      ]
     },
     "ans": {
      "ru": "$(x-4)(x-1)(x+1)$.",
      "en": "$(x-4)(x-1)(x+1)$."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Добавить и вычесть",
      "en": "Add and subtract"
     },
     "text": {
      "ru": "Если группировка не идёт, попробуйте **прибавить и тут же вычесть** одно и то же слагаемое так, чтобы получился полный квадрат. Выражение не изменится, а вид станет удобным. Классика: $$x^{4}+x^{2}+1=\\underbrace{x^{4}+2x^{2}+1}_{(x^{2}+1)^{2}}-x^{2}=(x^{2}+1)^{2}-x^{2}.$$ Дальше — разность квадратов.",
      "en": "If grouping stalls, try **adding and immediately subtracting** the same term so that a complete square appears. The expression is unchanged but its shape becomes useful. The classic case: $$x^{4}+x^{2}+1=\\underbrace{x^{4}+2x^{2}+1}_{(x^{2}+1)^{2}}-x^{2}=(x^{2}+1)^{2}-x^{2}.$$ A difference of squares then finishes it."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Разложите $x^{4}+x^{2}+1$ и выведите отсюда, что $n^{4}+n^{2}+1$ составное при всех натуральных $n>1$.",
      "en": "Factor $x^{4}+x^{2}+1$, and deduce that $n^{4}+n^{2}+1$ is composite for every integer $n>1$."
     },
     "steps": {
      "ru": [
       "$x^{4}+x^{2}+1=(x^{2}+1)^{2}-x^{2}$.",
       "Разность квадратов: $=(x^{2}+1-x)(x^{2}+1+x)$.",
       "Итак, $x^{4}+x^{2}+1=(x^{2}-x+1)(x^{2}+x+1)$.",
       "При $n>1$ первый множитель равен $n(n-1)+1\\ge3$, а второй ещё больше.",
       "Оба множителя больше единицы, значит число составное."
      ],
      "en": [
       "$x^{4}+x^{2}+1=(x^{2}+1)^{2}-x^{2}$.",
       "Difference of squares: $=(x^{2}+1-x)(x^{2}+1+x)$.",
       "So $x^{4}+x^{2}+1=(x^{2}-x+1)(x^{2}+x+1)$.",
       "For $n>1$ the first factor is $n(n-1)+1\\ge3$, and the second is larger still.",
       "Both factors exceed $1$, so the number is composite."
      ]
     },
     "ans": {
      "ru": "$(x^{2}-x+1)(x^{2}+x+1)$; при $n>1$ число составное. $\\blacksquare$",
      "en": "$(x^{2}-x+1)(x^{2}+x+1)$; for $n>1$ the number is composite. $\\blacksquare$"
     }
    },
    {
     "t": "p",
     "text": {
      "ru": "Тот же приём даёт тождество Софи Жермен — прибавим и вычтем $4a^{2}b^{2}$:",
      "en": "The same trick produces the Sophie Germain identity — add and subtract $4a^{2}b^{2}$:"
     }
    },
    {
     "t": "eq",
     "tex": "a^{4}+4b^{4}=(a^{2}+2b^{2})^{2}-(2ab)^{2}=(a^{2}-2ab+2b^{2})(a^{2}+2ab+2b^{2})"
    },
    {
     "t": "note",
     "text": {
      "ru": "Проверьте первое равенство раскрытием: $(a^{2}+2b^{2})^{2}=a^{4}+4a^{2}b^{2}+4b^{4}$, и вычитание $4a^{2}b^{2}$ возвращает нас к $a^{4}+4b^{4}$. Это тождество — готовый ответ на целое семейство олимпиадных задач вида «докажите, что число составное».",
      "en": "Check the first equality by expanding: $(a^{2}+2b^{2})^{2}=a^{4}+4a^{2}b^{2}+4b^{4}$, and subtracting $4a^{2}b^{2}$ brings back $a^{4}+4b^{4}$. This identity is a ready-made answer to a whole family of \"prove this number is composite\" problems."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Симметричные суммы: всё через $a+b$ и $ab$",
    "en": "Symmetric sums: everything from $a+b$ and $ab$"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Пусть $s=a+b$ и $p=ab$. Тогда **любое** симметричное выражение от $a$ и $b$ выражается через $s$ и $p$ — и обычно за две строки. Вот рабочий набор:",
      "en": "Put $s=a+b$ and $p=ab$. Then **every** symmetric expression in $a$ and $b$ can be written in terms of $s$ and $p$ — usually in two lines. Here is the working set:"
     }
    },
    {
     "t": "eq",
     "tex": "\\begin{aligned} a^{2}+b^{2}&=s^{2}-2p,\\\\ a^{3}+b^{3}&=s^{3}-3ps,\\\\ a^{4}+b^{4}&=(s^{2}-2p)^{2}-2p^{2},\\\\ (a-b)^{2}&=s^{2}-4p. \\end{aligned}"
    },
    {
     "t": "proof",
     "text": {
      "ru": "Первая строка: $(a+b)^{2}=a^{2}+2ab+b^{2}$, вычитаем $2ab$. Вторая: $(a+b)^{3}=a^{3}+3a^{2}b+3ab^{2}+b^{3}=a^{3}+b^{3}+3ab(a+b)$, переносим. Третья: $a^{4}+b^{4}=(a^{2}+b^{2})^{2}-2a^{2}b^{2}$, подставляем первую строку. Четвёртая: $(a-b)^{2}=(a+b)^{2}-4ab$. $\\blacksquare$",
      "en": "First line: $(a+b)^{2}=a^{2}+2ab+b^{2}$, subtract $2ab$. Second: $(a+b)^{3}=a^{3}+3a^{2}b+3ab^{2}+b^{3}=a^{3}+b^{3}+3ab(a+b)$, rearrange. Third: $a^{4}+b^{4}=(a^{2}+b^{2})^{2}-2a^{2}b^{2}$, substitute the first line. Fourth: $(a-b)^{2}=(a+b)^{2}-4ab$. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Числа $a$ и $b$ удовлетворяют условиям $a+b=4$ и $ab=3$. Найдите $a^{3}+b^{3}$ и $a^{4}+b^{4}$, не находя самих $a$ и $b$.",
      "en": "Numbers $a$ and $b$ satisfy $a+b=4$ and $ab=3$. Find $a^{3}+b^{3}$ and $a^{4}+b^{4}$ without finding $a$ and $b$."
     },
     "steps": {
      "ru": [
       "$s=4$, $p=3$.",
       "$a^{2}+b^{2}=s^{2}-2p=16-6=10$.",
       "$a^{3}+b^{3}=s^{3}-3ps=64-3\\cdot3\\cdot4=64-36=28$.",
       "$a^{4}+b^{4}=(a^{2}+b^{2})^{2}-2p^{2}=100-18=82$.",
       "*Проверка:* корни уравнения $t^{2}-4t+3=0$ — это $1$ и $3$; действительно $1+27=28$ и $1+81=82$ ✓"
      ],
      "en": [
       "$s=4$, $p=3$.",
       "$a^{2}+b^{2}=s^{2}-2p=16-6=10$.",
       "$a^{3}+b^{3}=s^{3}-3ps=64-3\\cdot3\\cdot4=64-36=28$.",
       "$a^{4}+b^{4}=(a^{2}+b^{2})^{2}-2p^{2}=100-18=82$.",
       "*Check:* the roots of $t^{2}-4t+3=0$ are $1$ and $3$; indeed $1+27=28$ and $1+81=82$ ✓"
      ]
     },
     "ans": {
      "ru": "$a^{3}+b^{3}=28$, $a^{4}+b^{4}=82$.",
      "en": "$a^{3}+b^{3}=28$, $a^{4}+b^{4}=82$."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Теорема Виета",
      "en": "Vieta’s theorem"
     },
     "text": {
      "ru": "Если $t_1,t_2$ — корни уравнения $t^{2}+pt+q=0$, то $t_1+t_2=-p$ и $t_1t_2=q$. Обратно, числа с суммой $s$ и произведением $m$ — это в точности корни уравнения $t^{2}-st+m=0$.",
      "en": "If $t_1,t_2$ are the roots of $t^{2}+pt+q=0$ then $t_1+t_2=-p$ and $t_1t_2=q$. Conversely, two numbers with sum $s$ and product $m$ are exactly the roots of $t^{2}-st+m=0$."
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Обратная часть — рабочий приём. Систему $$x+y=5,\\qquad x^{3}+y^{3}=35$$ решают так: $x^{3}+y^{3}=s^{3}-3ps$ даёт $125-15p=35$, то есть $p=6$. Значит $x$ и $y$ — корни $t^{2}-5t+6=0$, то есть $2$ и $3$.",
      "en": "The converse is a working technique. To solve the system $$x+y=5,\\qquad x^{3}+y^{3}=35$$ write $x^{3}+y^{3}=s^{3}-3ps$, so $125-15p=35$ and $p=6$. Hence $x$ and $y$ are the roots of $t^{2}-5t+6=0$, namely $2$ and $3$."
     }
    },
    {
     "t": "p",
     "text": {
      "ru": "Для трёх переменных роль $s$ и $p$ играют три величины $$\\sigma_1=a+b+c,\\qquad\\sigma_2=ab+bc+ca,\\qquad\\sigma_3=abc,$$ и снова любое симметричное выражение выражается через них. Самая нужная формула: $$a^{2}+b^{2}+c^{2}=\\sigma_1^{2}-2\\sigma_2 .$$",
      "en": "For three variables the roles of $s$ and $p$ are played by $$\\sigma_1=a+b+c,\\qquad\\sigma_2=ab+bc+ca,\\qquad\\sigma_3=abc,$$ and again every symmetric expression is built from them. The formula you will need most is $$a^{2}+b^{2}+c^{2}=\\sigma_1^{2}-2\\sigma_2 .$$"
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Теорема Безу: искать корни",
    "en": "The factor theorem: hunt for roots"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Теорема Безу",
      "en": "The factor theorem"
     },
     "text": {
      "ru": "Остаток от деления многочлена $f(x)$ на $x-c$ равен $f(c)$. В частности, $$(x-c)\\mid f(x)\\quad\\Longleftrightarrow\\quad f(c)=0 .$$",
      "en": "The remainder on dividing a polynomial $f(x)$ by $x-c$ equals $f(c)$. In particular, $$(x-c)\\mid f(x)\\quad\\Longleftrightarrow\\quad f(c)=0 .$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Разделим $f$ на $x-c$ с остатком: $f(x)=(x-c)q(x)+r$, где $r$ — константа, потому что степень остатка меньше степени делителя, а она равна единице. Подставим $x=c$: правая часть даёт $0\\cdot q(c)+r=r$, значит $r=f(c)$. Если $f(c)=0$, то остаток нулевой и $x-c$ делит $f$; обратное очевидно. $\\blacksquare$",
      "en": "Divide $f$ by $x-c$ with remainder: $f(x)=(x-c)q(x)+r$ where $r$ is a constant, since the remainder has degree less than the divisor, which has degree one. Put $x=c$: the right side becomes $0\\cdot q(c)+r=r$, so $r=f(c)$. If $f(c)=0$ the remainder vanishes and $x-c$ divides $f$; the converse is clear. $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Теорема о рациональных корнях",
      "en": "The rational root theorem"
     },
     "text": {
      "ru": "Пусть $f(x)=a_nx^{n}+\\dots+a_1x+a_0$ — многочлен с целыми коэффициентами и $\\dfrac{u}{v}$ — его корень, где дробь несократима. Тогда $u\\mid a_0$ и $v\\mid a_n$. В частности, целые корни многочлена со старшим коэффициентом $1$ — это делители свободного члена.",
      "en": "Let $f(x)=a_nx^{n}+\\dots+a_1x+a_0$ have integer coefficients and let $\\dfrac{u}{v}$ be a root in lowest terms. Then $u\\mid a_0$ and $v\\mid a_n$. In particular, the integer roots of a monic polynomial are divisors of its constant term."
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Отсюда рецепт: чтобы разложить многочлен с целыми коэффициентами, **переберите делители свободного члена**. Их немного, и каждый проверяется подстановкой за секунду.",
      "en": "Hence the recipe: to factor a polynomial with integer coefficients, **run through the divisors of the constant term**. There are few of them, and each takes a second to test."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Разложите на множители $x^{3}-4x^{2}+x+6$.",
      "en": "Factor $x^{3}-4x^{2}+x+6$."
     },
     "steps": {
      "ru": [
       "Свободный член равен $6$, значит целые корни ищем среди $\\pm1,\\pm2,\\pm3,\\pm6$.",
       "$f(1)=1-4+1+6=4\\ne0$. $f(-1)=-1-4-1+6=0$ — корень найден!",
       "По теореме Безу $f(x)=(x+1)\\,q(x)$. Делим уголком: $x^{3}-4x^{2}+x+6=(x+1)(x^{2}-5x+6)$.",
       "Квадратный трёхчлен раскладываем по Виете: сумма корней $5$, произведение $6$, значит корни $2$ и $3$."
      ],
      "en": [
       "The constant term is $6$, so look for integer roots among $\\pm1,\\pm2,\\pm3,\\pm6$.",
       "$f(1)=1-4+1+6=4\\ne0$. $f(-1)=-1-4-1+6=0$ — a root!",
       "By the factor theorem $f(x)=(x+1)\\,q(x)$. Long division gives $x^{3}-4x^{2}+x+6=(x+1)(x^{2}-5x+6)$.",
       "Factor the quadratic by Vieta: the roots sum to $5$ and multiply to $6$, so they are $2$ and $3$."
      ]
     },
     "ans": {
      "ru": "$(x+1)(x-2)(x-3)$.",
      "en": "$(x+1)(x-2)(x-3)$."
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Теорема о рациональных корнях ищет только **рациональные** корни. Многочлен $x^{2}-2$ не имеет ни одного рационального корня, но это не значит, что он «не раскладывается» — просто не раскладывается на множители с рациональными коэффициентами. В олимпиадных задачах, где ответ обязан быть целым, это как раз то, что нужно.",
      "en": "The rational root theorem finds only **rational** roots. The polynomial $x^{2}-2$ has no rational root at all, which does not mean it \"does not factor\" — only that it does not factor over the rationals. In olympiad problems where the answer must be an integer, that is exactly what you want."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Бином Ньютона",
    "en": "The binomial theorem"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Формулы $(a+b)^{2}$ и $(a+b)^{3}$ — начало бесконечного списка. Общая формула не только избавляет от заучивания, но и объясняет, почему коэффициенты образуют треугольник Паскаля.",
      "en": "The formulas for $(a+b)^{2}$ and $(a+b)^{3}$ start an infinite list. The general formula saves memorisation and explains why the coefficients form Pascal’s triangle."
     }
    },
    {
     "t": "def",
     "name": {
      "ru": "Биномиальный коэффициент",
      "en": "Binomial coefficient"
     },
     "text": {
      "ru": "$$\\binom nk=\\frac{n!}{k!\\,(n-k)!}=\\frac{n(n-1)\\cdots(n-k+1)}{k!}$$ — число способов выбрать $k$ предметов из $n$ без учёта порядка. По соглашению $\\binom n0=\\binom nn=1$.",
      "en": "$$\\binom nk=\\frac{n!}{k!\\,(n-k)!}=\\frac{n(n-1)\\cdots(n-k+1)}{k!}$$ — the number of ways to choose $k$ objects from $n$ without regard to order. By convention $\\binom n0=\\binom nn=1$."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Правило Паскаля",
      "en": "Pascal’s rule"
     },
     "text": {
      "ru": "$$\\binom nk=\\binom{n-1}{k-1}+\\binom{n-1}{k}\\qquad(1\\le k\\le n-1).$$",
      "en": "$$\\binom nk=\\binom{n-1}{k-1}+\\binom{n-1}{k}\\qquad(1\\le k\\le n-1).$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Комбинаторно.** Выделим один предмет — скажем, первый. Всякий выбор $k$ предметов из $n$ либо содержит его, либо нет.\n\nЕсли содержит, остаётся выбрать $k-1$ предмет из остальных $n-1$: это $\\binom{n-1}{k-1}$ способов.\n\nЕсли не содержит, надо выбрать все $k$ предметов из остальных $n-1$: это $\\binom{n-1}{k}$ способов.\n\nСлучаи не пересекаются и покрывают всё, значит их количества складываются. $\\blacksquare$\n\n**Именно это правило** порождает треугольник Паскаля: каждое число равно сумме двух стоящих над ним.",
      "en": "**Combinatorially.** Single out one object — say the first. Every choice of $k$ objects from $n$ either contains it or not.\n\nIf it does, we still choose $k-1$ from the other $n-1$: that is $\\binom{n-1}{k-1}$ ways.\n\nIf it does not, we choose all $k$ from the other $n-1$: that is $\\binom{n-1}{k}$ ways.\n\nThe cases are disjoint and exhaustive, so the counts add. $\\blacksquare$\n\n**This rule** is what generates Pascal’s triangle: each entry is the sum of the two above it."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Формула бинома Ньютона",
      "en": "The binomial theorem"
     },
     "text": {
      "ru": "$$(a+b)^{n}=\\sum_{k=0}^{n}\\binom nk a^{\\,n-k}b^{k}=a^{n}+\\binom n1a^{\\,n-1}b+\\binom n2a^{\\,n-2}b^{2}+\\dots+b^{n} .$$",
      "en": "$$(a+b)^{n}=\\sum_{k=0}^{n}\\binom nk a^{\\,n-k}b^{k}=a^{n}+\\binom n1a^{\\,n-1}b+\\dots+b^{n} .$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Комбинаторное доказательство.** Запишем $$(a+b)^{n}=\\underbrace{(a+b)(a+b)\\cdots(a+b)}_{n\\ \\text{скобок}} .$$\n\nРаскрывая скобки, мы из каждой берём либо $a$, либо $b$, и перемножаем взятое. Каждый выбор даёт одночлен $a^{\\,n-k}b^{k}$, где $k$ — число скобок, из которых взяли $b$.\n\n**Сколько раз возникает $a^{\\,n-k}b^{k}$?** Ровно столько, сколькими способами можно выбрать $k$ скобок из $n$, то есть $\\binom nk$ раз. Собирая подобные, получаем формулу. $\\blacksquare$\n\n**Через индукцию** доказательство тоже короткое: умножая $(a+b)^{n}$ на $(a+b)$ и собирая коэффициент при $a^{\\,n+1-k}b^{k}$, получаем $\\binom nk+\\binom n{k-1}=\\binom{n+1}{k}$ — то есть в точности правило Паскаля.",
      "en": "**Combinatorial proof.** Write $$(a+b)^{n}=\\underbrace{(a+b)(a+b)\\cdots(a+b)}_{n\\ \\text{brackets}} .$$\n\nExpanding, from each bracket we take either $a$ or $b$ and multiply. Each choice gives a monomial $a^{\\,n-k}b^{k}$, where $k$ is the number of brackets contributing $b$.\n\n**How often does $a^{\\,n-k}b^{k}$ arise?** Exactly as often as one can choose $k$ brackets out of $n$, i.e. $\\binom nk$ times. Collecting like terms gives the formula. $\\blacksquare$\n\n**By induction** it is short too: multiplying $(a+b)^{n}$ by $(a+b)$ and collecting the coefficient of $a^{\\,n+1-k}b^{k}$ gives $\\binom nk+\\binom n{k-1}=\\binom{n+1}{k}$ — precisely Pascal’s rule."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Три следствия из бинома",
      "en": "Three consequences"
     },
     "text": {
      "ru": "(1) $\\displaystyle\\sum_{k=0}^{n}\\binom nk=2^{n}$; $\\;$ (2) $\\displaystyle\\sum_{k=0}^{n}(-1)^{k}\\binom nk=0$ при $n\\ge1$; $\\;$ (3) $\\displaystyle\\sum_{k\\ \\text{чётн}}\\binom nk=\\sum_{k\\ \\text{нечётн}}\\binom nk=2^{\\,n-1}$ при $n\\ge1$.",
      "en": "(1) $\\displaystyle\\sum_{k=0}^{n}\\binom nk=2^{n}$; $\\;$ (2) $\\displaystyle\\sum_{k=0}^{n}(-1)^{k}\\binom nk=0$ for $n\\ge1$; $\\;$ (3) $\\displaystyle\\sum_{k\\ \\text{even}}\\binom nk=\\sum_{k\\ \\text{odd}}\\binom nk=2^{\\,n-1}$ for $n\\ge1$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**(1)** Подставим $a=b=1$: слева $(1+1)^{n}=2^{n}$, справа сумма коэффициентов ✓ (Комбинаторно: подмножеств у $n$-элементного множества ровно $2^{n}$.)\n\n**(2)** Подставим $a=1$, $b=-1$: слева $(1-1)^{n}=0$ при $n\\ge1$ ✓\n\n**(3)** Сложив равенства (1) и (2), получаем удвоенную сумму по чётным $k$, то есть $2^{n}$; значит она равна $2^{\\,n-1}$. Вычитая — то же для нечётных. $\\blacksquare$",
      "en": "**(1)** Put $a=b=1$: the left side is $2^{n}$, the right the sum of the coefficients ✓ (Combinatorially: an $n$-element set has $2^{n}$ subsets.)\n\n**(2)** Put $a=1$, $b=-1$: the left side is $(1-1)^{n}=0$ for $n\\ge1$ ✓\n\n**(3)** Adding (1) and (2) gives twice the sum over even $k$, namely $2^{n}$; so that sum is $2^{\\,n-1}$. Subtracting gives the same for odd $k$. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите коэффициент при $x^{5}$ в разложении $\\left(2x-3\\right)^{8}$.",
      "en": "Find the coefficient of $x^{5}$ in the expansion of $\\left(2x-3\\right)^{8}$."
     },
     "steps": {
      "ru": [
       "Общий член: $\\binom8k(2x)^{\\,8-k}(-3)^{k}$.",
       "Степень $x$ равна $8-k$, значит нужно $8-k=5$, то есть $k=3$.",
       "Коэффициент: $\\binom83\\cdot2^{5}\\cdot(-3)^{3}$.",
       "$\\binom83=56$, $2^{5}=32$, $(-3)^{3}=-27$.",
       "Итого $56\\cdot32\\cdot(-27)=-48\\,384$."
      ],
      "en": [
       "The general term is $\\binom8k(2x)^{\\,8-k}(-3)^{k}$.",
       "The power of $x$ is $8-k$, so we need $8-k=5$, i.e. $k=3$.",
       "The coefficient is $\\binom83\\cdot2^{5}\\cdot(-3)^{3}$.",
       "$\\binom83=56$, $2^{5}=32$, $(-3)^{3}=-27$.",
       "Altogether $56\\cdot32\\cdot(-27)=-48\\,384$."
      ]
     },
     "ans": {
      "ru": "$-48\\,384$.",
      "en": "$-48\\,384$."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Докажите, что при простом $p$ и $0<k<p$ коэффициент $\\binom pk$ делится на $p$, и выведите отсюда малую теорему Ферма.",
      "en": "Prove that $\\binom pk$ is divisible by a prime $p$ for $0<k<p$, and deduce Fermat’s little theorem."
     },
     "steps": {
      "ru": [
       "Из определения $k!\\,(p-k)!\\cdot\\binom pk=p!$, и правая часть делится на $p$.",
       "Все множители в $k!$ и $(p-k)!$ строго меньше $p$, значит $p$ не делит их произведение (лемма Евклида).",
       "Значит $p$ обязан делить $\\binom pk$ ✓",
       "**Следствие.** Раскроем $(a+1)^{p}$ по биному: все средние слагаемые кратны $p$, поэтому $(a+1)^{p}\\equiv a^{p}+1\\pmod p$.",
       "Индукцией по $a$ (база $a=0$ очевидна) получаем $a^{p}\\equiv a\\pmod p$ для всех целых $a\\ge0$."
      ],
      "en": [
       "From the definition $k!\\,(p-k)!\\cdot\\binom pk=p!$, and the right side is divisible by $p$.",
       "All factors in $k!$ and $(p-k)!$ are strictly below $p$, so $p$ does not divide their product (Euclid’s lemma).",
       "Hence $p$ must divide $\\binom pk$ ✓",
       "**Consequence.** Expand $(a+1)^{p}$: every middle term is a multiple of $p$, so $(a+1)^{p}\\equiv a^{p}+1\\pmod p$.",
       "Induction on $a$ (the base $a=0$ is clear) gives $a^{p}\\equiv a\\pmod p$ for all integers $a\\ge0$."
      ]
     },
     "ans": {
      "ru": "$p\\mid\\binom pk$, и отсюда $a^{p}\\equiv a\\pmod p$.",
      "en": "$p\\mid\\binom pk$, and hence $a^{p}\\equiv a\\pmod p$."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Симметрические многочлены и формулы Ньютона",
    "en": "Symmetric polynomials and Newton’s identities"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Выражение вида $a^{5}+b^{5}+c^{5}$ выглядит устрашающе — пока не заметить, что оно **симметрично**. Любое симметрическое выражение выражается через три базовых, и есть рекуррентная формула, которая это делает автоматически.",
      "en": "An expression like $a^{5}+b^{5}+c^{5}$ looks forbidding — until one notices it is **symmetric**. Every symmetric expression can be written through three basic ones, and a recursion does the work automatically."
     }
    },
    {
     "t": "def",
     "name": {
      "ru": "Элементарные симметрические многочлены",
      "en": "Elementary symmetric polynomials"
     },
     "text": {
      "ru": "Для трёх переменных $$e_1=a+b+c,\\qquad e_2=ab+bc+ca,\\qquad e_3=abc .$$ Степенными суммами называют $$p_k=a^{k}+b^{k}+c^{k} .$$",
      "en": "For three variables $$e_1=a+b+c,\\qquad e_2=ab+bc+ca,\\qquad e_3=abc ,$$ and the power sums are $$p_k=a^{k}+b^{k}+c^{k} .$$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Теорема Виета для кубического уравнения",
      "en": "Vieta for a cubic"
     },
     "text": {
      "ru": "Если $a,b,c$ — корни многочлена $t^{3}+pt^{2}+qt+r$, то $$e_1=-p,\\qquad e_2=q,\\qquad e_3=-r .$$ Обратно, по любым трём числам $e_1,e_2,e_3$ многочлен восстанавливается: $$t^{3}-e_1t^{2}+e_2t-e_3 .$$",
      "en": "If $a,b,c$ are the roots of $t^{3}+pt^{2}+qt+r$ then $$e_1=-p,\\qquad e_2=q,\\qquad e_3=-r .$$ Conversely, from any $e_1,e_2,e_3$ the polynomial is recovered as $$t^{3}-e_1t^{2}+e_2t-e_3 .$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Многочлен с корнями $a,b,c$ и старшим коэффициентом $1$ раскладывается как $$(t-a)(t-b)(t-c).$$\n\nРаскроем скобки шаг за шагом: $$(t-a)(t-b)=t^{2}-(a+b)t+ab ,$$ и умножая на $(t-c)$: $$t^{3}-(a+b)t^{2}+abt-ct^{2}+(a+b)ct-abc .$$\n\nСобирая по степеням, $$t^{3}-(a+b+c)t^{2}+(ab+bc+ca)t-abc=t^{3}-e_1t^{2}+e_2t-e_3 .$$\n\nСравнение с $t^{3}+pt^{2}+qt+r$ даёт объявленные равенства. $\\blacksquare$",
      "en": "A monic polynomial with roots $a,b,c$ factors as $$(t-a)(t-b)(t-c).$$\n\nExpand step by step: $$(t-a)(t-b)=t^{2}-(a+b)t+ab ,$$ and multiplying by $(t-c)$ and collecting powers, $$t^{3}-(a+b+c)t^{2}+(ab+bc+ca)t-abc=t^{3}-e_1t^{2}+e_2t-e_3 .$$\n\nComparing with $t^{3}+pt^{2}+qt+r$ gives the stated identities. $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Формулы Ньютона",
      "en": "Newton’s identities"
     },
     "text": {
      "ru": "Для трёх переменных степенные суммы удовлетворяют рекуррентности $$p_k=e_1p_{k-1}-e_2p_{k-2}+e_3p_{k-3}\\qquad(k\\ge3),$$ с начальными значениями $$p_0=3,\\qquad p_1=e_1,\\qquad p_2=e_1^{2}-2e_2 .$$",
      "en": "For three variables the power sums satisfy the recursion $$p_k=e_1p_{k-1}-e_2p_{k-2}+e_3p_{k-3}\\qquad(k\\ge3),$$ with initial values $$p_0=3,\\qquad p_1=e_1,\\qquad p_2=e_1^{2}-2e_2 .$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Рекуррентность.** Числа $a,b,c$ — корни многочлена $t^{3}-e_1t^{2}+e_2t-e_3$, значит каждое из них удовлетворяет $$t^{3}=e_1t^{2}-e_2t+e_3 .$$\n\nУмножим это равенство на $t^{\\,k-3}$: $$t^{k}=e_1t^{\\,k-1}-e_2t^{\\,k-2}+e_3t^{\\,k-3} .$$\n\nПодставим по очереди $t=a$, $t=b$, $t=c$ и сложим три полученных равенства. Слева получится $p_k$, справа — $e_1p_{k-1}-e_2p_{k-2}+e_3p_{k-3}$ ✓\n\n**Начальные значения.** $p_0=1+1+1=3$ и $p_1=e_1$ очевидны. Для $p_2$ возведём $e_1$ в квадрат: $$e_1^{2}=(a+b+c)^{2}=a^{2}+b^{2}+c^{2}+2(ab+bc+ca)=p_2+2e_2 ,$$ откуда $p_2=e_1^{2}-2e_2$. $\\blacksquare$",
      "en": "**The recursion.** The numbers $a,b,c$ are roots of $t^{3}-e_1t^{2}+e_2t-e_3$, so each satisfies $$t^{3}=e_1t^{2}-e_2t+e_3 .$$\n\nMultiply by $t^{\\,k-3}$: $$t^{k}=e_1t^{\\,k-1}-e_2t^{\\,k-2}+e_3t^{\\,k-3} .$$\n\nSubstitute $t=a$, $t=b$, $t=c$ in turn and add the three. The left side gives $p_k$, the right $e_1p_{k-1}-e_2p_{k-2}+e_3p_{k-3}$ ✓\n\n**Initial values.** $p_0=3$ and $p_1=e_1$ are clear. For $p_2$ square $e_1$: $$e_1^{2}=p_2+2e_2 ,$$ hence $p_2=e_1^{2}-2e_2$. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Числа $a,b,c$ удовлетворяют $a+b+c=2$, $ab+bc+ca=-1$, $abc=-2$. Найдите $a^{4}+b^{4}+c^{4}$.",
      "en": "Numbers $a,b,c$ satisfy $a+b+c=2$, $ab+bc+ca=-1$, $abc=-2$. Find $a^{4}+b^{4}+c^{4}$."
     },
     "steps": {
      "ru": [
       "Здесь $e_1=2$, $e_2=-1$, $e_3=-2$.",
       "$p_0=3$, $p_1=2$, $p_2=e_1^{2}-2e_2=4+2=6$.",
       "$p_3=e_1p_2-e_2p_1+e_3p_0=2\\cdot6+1\\cdot2-2\\cdot3=12+2-6=8$.",
       "$p_4=e_1p_3-e_2p_2+e_3p_1=2\\cdot8+1\\cdot6-2\\cdot2=16+6-4=18$.",
       "**Проверка.** Многочлен $t^{3}-2t^{2}-t+2=(t-1)(t+1)(t-2)$, значит корни — это $1,-1,2$.",
       "И действительно $1^{4}+(-1)^{4}+2^{4}=1+1+16=18$ ✓"
      ],
      "en": [
       "Here $e_1=2$, $e_2=-1$, $e_3=-2$.",
       "$p_0=3$, $p_1=2$, $p_2=e_1^{2}-2e_2=6$.",
       "$p_3=e_1p_2-e_2p_1+e_3p_0=12+2-6=8$.",
       "$p_4=e_1p_3-e_2p_2+e_3p_1=16+6-4=18$.",
       "**Check.** The polynomial $t^{3}-2t^{2}-t+2=(t-1)(t+1)(t-2)$, so the roots are $1,-1,2$.",
       "And indeed $1+1+16=18$ ✓"
      ]
     },
     "ans": {
      "ru": "$a^{4}+b^{4}+c^{4}=18$.",
      "en": "$a^{4}+b^{4}+c^{4}=18$."
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "**Когда $a+b+c=0$**, рекуррентность резко упрощается: $e_1=0$, значит $$p_k=-e_2p_{k-2}+e_3p_{k-3} .$$ Отсюда мгновенно получаются знаменитые тождества $$p_3=3e_3=3abc,\\qquad \\frac{p_5}{5}=\\frac{p_2}{2}\\cdot\\frac{p_3}{3},\\qquad \\frac{p_7}{7}=\\frac{p_2}{2}\\cdot\\frac{p_5}{5} .$$ Если в задаче дано условие $a+b+c=0$ — почти наверняка нужны формулы Ньютона.",
      "en": "**When $a+b+c=0$** the recursion collapses: $e_1=0$, so $$p_k=-e_2p_{k-2}+e_3p_{k-3} .$$ The famous identities follow at once: $$p_3=3abc,\\qquad \\frac{p_5}{5}=\\frac{p_2}{2}\\cdot\\frac{p_3}{3},\\qquad \\frac{p_7}{7}=\\frac{p_2}{2}\\cdot\\frac{p_5}{5} .$$ If a problem hands you $a+b+c=0$, Newton’s identities are almost certainly the tool."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "**Основная теорема о симметрических многочленах** утверждает: любой симметрический многочлен от $a,b,c$ с целыми коэффициентами единственным образом записывается как многочлен от $e_1,e_2,e_3$ — тоже с целыми коэффициентами. Именно поэтому «страшные» симметрические выражения всегда поддаются: они лишь замаскированные комбинации трёх базовых величин.",
      "en": "**The fundamental theorem on symmetric polynomials** says: every symmetric polynomial in $a,b,c$ with integer coefficients is uniquely a polynomial in $e_1,e_2,e_3$ — again with integer coefficients. That is why frightening symmetric expressions always yield: they are disguised combinations of the three basic quantities."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Три приёма, которые решают задачи целиком",
    "en": "Three moves that finish whole problems"
   },
   "blocks": [
    {
     "t": "idea",
     "name": {
      "ru": "Приём 1: условие $a+b+c=0$",
      "en": "Move 1: the condition $a+b+c=0$"
     },
     "text": {
      "ru": "Если в задаче дано $a+b+c=0$, немедленно вспоминайте тождество $$a^{3}+b^{3}+c^{3}-3abc=(a+b+c)(a^{2}+b^{2}+c^{2}-ab-bc-ca).$$ Правая часть обнуляется, и остаётся $a^{3}+b^{3}+c^{3}=3abc$ — сильное и очень полезное равенство.",
      "en": "If a problem hands you $a+b+c=0$, recall at once the identity $$a^{3}+b^{3}+c^{3}-3abc=(a+b+c)(a^{2}+b^{2}+c^{2}-ab-bc-ca).$$ The right side vanishes and $a^{3}+b^{3}+c^{3}=3abc$ remains — a strong and very useful equality."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Приём 2: сумма квадратов равна нулю",
      "en": "Move 2: a sum of squares equals zero"
     },
     "text": {
      "ru": "Тождество $$2\\left(a^{2}+b^{2}+c^{2}-ab-bc-ca\\right)=(a-b)^{2}+(b-c)^{2}+(c-a)^{2}$$ переводит алгебраическое условие в геометрическое. Сумма квадратов равна нулю только если каждое слагаемое ноль, поэтому из $a^{2}+b^{2}+c^{2}=ab+bc+ca$ немедленно следует $a=b=c$.",
      "en": "The identity $$2\\left(a^{2}+b^{2}+c^{2}-ab-bc-ca\\right)=(a-b)^{2}+(b-c)^{2}+(c-a)^{2}$$ turns an algebraic condition into a rigid one. A sum of squares is zero only when every term is zero, so $a^{2}+b^{2}+c^{2}=ab+bc+ca$ forces $a=b=c$ immediately."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Приём 3: перенести всё в одну часть",
      "en": "Move 3: move everything to one side"
     },
     "text": {
      "ru": "Уравнение вида $A=B$ почти бесполезно; уравнение вида $(\\dots)(\\dots)=0$ решается устно. Поэтому первое действие в любой задаче на уравнение — перенести всё влево и попытаться разложить.",
      "en": "An equation $A=B$ is almost useless; an equation $(\\dots)(\\dots)=0$ solves itself. So the first action in any equation problem is to move everything to one side and try to factor."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Известно, что $\\dfrac1a+\\dfrac1b+\\dfrac1c=\\dfrac1{a+b+c}$ для ненулевых $a,b,c$ с $a+b+c\\ne0$. Докажите, что какие-то два из этих чисел противоположны.",
      "en": "Suppose $\\dfrac1a+\\dfrac1b+\\dfrac1c=\\dfrac1{a+b+c}$ for non-zero $a,b,c$ with $a+b+c\\ne0$. Prove that two of them are opposite."
     },
     "steps": {
      "ru": [
       "Переносим всё влево: $\\dfrac1a+\\dfrac1b+\\dfrac1c-\\dfrac1{a+b+c}=0$.",
       "Складываем первые две дроби и последние две: $$\\frac{a+b}{ab}+\\frac{(a+b+c)-c}{c(a+b+c)}=\\frac{a+b}{ab}+\\frac{a+b}{c(a+b+c)}=0.$$",
       "Выносим $a+b$: $$(a+b)\\left(\\frac1{ab}+\\frac1{c(a+b+c)}\\right)=0.$$",
       "Приводим скобку к общему знаменателю: $$\\frac{c(a+b+c)+ab}{ab\\,c(a+b+c)}=\\frac{ca+cb+c^{2}+ab}{ab\\,c(a+b+c)}=\\frac{(c+a)(c+b)}{ab\\,c(a+b+c)}.$$",
       "Итого $(a+b)(b+c)(c+a)=0$, значит одна из скобок нулевая."
      ],
      "en": [
       "Move everything to the left: $\\dfrac1a+\\dfrac1b+\\dfrac1c-\\dfrac1{a+b+c}=0$.",
       "Add the first two fractions, and the last two: $$\\frac{a+b}{ab}+\\frac{(a+b+c)-c}{c(a+b+c)}=\\frac{a+b}{ab}+\\frac{a+b}{c(a+b+c)}=0.$$",
       "Take out $a+b$: $$(a+b)\\left(\\frac1{ab}+\\frac1{c(a+b+c)}\\right)=0.$$",
       "Put the bracket over a common denominator: $$\\frac{c(a+b+c)+ab}{ab\\,c(a+b+c)}=\\frac{ca+cb+c^{2}+ab}{ab\\,c(a+b+c)}=\\frac{(c+a)(c+b)}{ab\\,c(a+b+c)}.$$",
       "So $(a+b)(b+c)(c+a)=0$, and one of the brackets vanishes."
      ]
     },
     "ans": {
      "ru": "$a=-b$, или $b=-c$, или $c=-a$. $\\blacksquare$",
      "en": "$a=-b$, or $b=-c$, or $c=-a$. $\\blacksquare$"
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
    "ru": "Вычислите без калькулятора: $2024^{2}-2023\\cdot2025$.",
    "en": "Evaluate without a calculator: $2024^{2}-2023\\cdot2025$."
   },
   "hint": {
    "ru": "Обозначьте $a=2024$.",
    "en": "Write $a=2024$."
   },
   "sol": {
    "ru": "Пусть $a=2024$. Тогда $2023=a-1$ и $2025=a+1$, поэтому $$a^{2}-(a-1)(a+1)=a^{2}-(a^{2}-1)=1.$$ **Ответ:** $1$. *Общий факт:* произведение соседей числа всегда на единицу меньше его квадрата.",
    "en": "Put $a=2024$. Then $2023=a-1$ and $2025=a+1$, so $$a^{2}-(a-1)(a+1)=a^{2}-(a^{2}-1)=1.$$ **Answer:** $1$. *General fact:* the product of a number’s neighbours is always one less than its square."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Разложите на множители $a^{2}-b^{2}-c^{2}+2bc$.",
    "en": "Factor $a^{2}-b^{2}-c^{2}+2bc$."
   },
   "hint": {
    "ru": "Три последних слагаемых складываются в квадрат.",
    "en": "The last three terms assemble into a square."
   },
   "sol": {
    "ru": "Сгруппируем: $$a^{2}-\\left(b^{2}-2bc+c^{2}\\right)=a^{2}-(b-c)^{2}.$$ Это разность квадратов: $$=\\bigl(a-(b-c)\\bigr)\\bigl(a+(b-c)\\bigr)=(a-b+c)(a+b-c).$$ **Ответ:** $(a-b+c)(a+b-c)$. *Замечание:* именно эти скобки появляются в формуле Герона для площади треугольника.",
    "en": "Group the terms: $$a^{2}-\\left(b^{2}-2bc+c^{2}\\right)=a^{2}-(b-c)^{2}.$$ This is a difference of squares: $$=\\bigl(a-(b-c)\\bigr)\\bigl(a+(b-c)\\bigr)=(a-b+c)(a+b-c).$$ **Answer:** $(a-b+c)(a+b-c)$. *Remark:* these are exactly the brackets that appear in Heron’s formula for the area of a triangle."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Числа $a$ и $b$ удовлетворяют условиям $a+b=7$ и $ab=10$. Найдите $a^{2}+b^{2}$, $a^{3}+b^{3}$ и $(a-b)^{2}$.",
    "en": "Numbers $a$ and $b$ satisfy $a+b=7$ and $ab=10$. Find $a^{2}+b^{2}$, $a^{3}+b^{3}$ and $(a-b)^{2}$."
   },
   "hint": {
    "ru": "$s=7$, $p=10$; пользуйтесь формулами через $s$ и $p$.",
    "en": "$s=7$, $p=10$; use the formulas in terms of $s$ and $p$."
   },
   "sol": {
    "ru": "$a^{2}+b^{2}=s^{2}-2p=49-20=29$.\n\n$a^{3}+b^{3}=s^{3}-3ps=343-3\\cdot10\\cdot7=343-210=133$.\n\n$(a-b)^{2}=s^{2}-4p=49-40=9$.\n\n*Проверка:* корни уравнения $t^{2}-7t+10=0$ — это $2$ и $5$; действительно $4+25=29$, $8+125=133$, $(5-2)^{2}=9$ ✓",
    "en": "$a^{2}+b^{2}=s^{2}-2p=49-20=29$.\n\n$a^{3}+b^{3}=s^{3}-3ps=343-3\\cdot10\\cdot7=343-210=133$.\n\n$(a-b)^{2}=s^{2}-4p=49-40=9$.\n\n*Check:* the roots of $t^{2}-7t+10=0$ are $2$ and $5$; indeed $4+25=29$, $8+125=133$, $(5-2)^{2}=9$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что $n^{3}-n$ делится на $6$ при любом целом $n$.",
    "en": "Prove that $n^{3}-n$ is divisible by $6$ for every integer $n$."
   },
   "hint": {
    "ru": "Разложите на множители.",
    "en": "Factor it."
   },
   "sol": {
    "ru": "$$n^{3}-n=n(n^{2}-1)=(n-1)\\,n\\,(n+1).$$ Это произведение трёх подряд идущих целых чисел. Среди любых двух подряд идущих есть чётное, значит произведение делится на $2$. Среди любых трёх подряд идущих есть кратное трём, значит произведение делится на $3$. Числа $2$ и $3$ взаимно просты, поэтому произведение делится на $6$. $\\blacksquare$",
    "en": "$$n^{3}-n=n(n^{2}-1)=(n-1)\\,n\\,(n+1).$$ This is a product of three consecutive integers. Any two consecutive integers include an even one, so the product is divisible by $2$. Any three consecutive integers include a multiple of three, so the product is divisible by $3$. As $2$ and $3$ are coprime, the product is divisible by $6$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Разложите на множители $x^{3}-3x+2$.",
    "en": "Factor $x^{3}-3x+2$."
   },
   "hint": {
    "ru": "Проверьте делители свободного члена $2$.",
    "en": "Test the divisors of the constant term $2$."
   },
   "sol": {
    "ru": "Свободный член $2$, целые корни ищем среди $\\pm1,\\pm2$. Подставляем: $f(1)=1-3+2=0$ — корень. Делим на $x-1$: $$x^{3}-3x+2=(x-1)(x^{2}+x-2).$$ Квадратный трёхчлен: корни с суммой $-1$ и произведением $-2$, то есть $1$ и $-2$, поэтому $x^{2}+x-2=(x-1)(x+2)$. **Ответ:** $(x-1)^{2}(x+2)$.",
    "en": "The constant term is $2$, so test $\\pm1,\\pm2$. We find $f(1)=1-3+2=0$ — a root. Dividing by $x-1$: $$x^{3}-3x+2=(x-1)(x^{2}+x-2).$$ For the quadratic, the roots sum to $-1$ and multiply to $-2$, so they are $1$ and $-2$, giving $x^{2}+x-2=(x-1)(x+2)$. **Answer:** $(x-1)^{2}(x+2)$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Упростите выражение $(a+b)^{2}-(a-b)^{2}$ и вычислите $101{,}5^{2}-98{,}5^{2}$.",
    "en": "Simplify $(a+b)^{2}-(a-b)^{2}$ and use it to evaluate $101.5^{2}-98.5^{2}$."
   },
   "hint": {
    "ru": "Разность квадратов, но в роли «квадратов» — скобки.",
    "en": "A difference of squares, where the brackets play the role of the squares."
   },
   "sol": {
    "ru": "$$(a+b)^{2}-(a-b)^{2}=\\bigl[(a+b)-(a-b)\\bigr]\\bigl[(a+b)+(a-b)\\bigr]=2b\\cdot2a=4ab.$$ Теперь возьмём $a=100$, $b=1{,}5$: тогда $a+b=101{,}5$ и $a-b=98{,}5$, поэтому $$101{,}5^{2}-98{,}5^{2}=4\\cdot100\\cdot1{,}5=600.$$ **Ответ:** $4ab$ и $600$.",
    "en": "$$(a+b)^{2}-(a-b)^{2}=\\bigl[(a+b)-(a-b)\\bigr]\\bigl[(a+b)+(a-b)\\bigr]=2b\\cdot2a=4ab.$$ Now take $a=100$, $b=1.5$: then $a+b=101.5$ and $a-b=98.5$, so $$101.5^{2}-98.5^{2}=4\\cdot100\\cdot1.5=600.$$ **Answer:** $4ab$, and $600$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $n^{4}+4$ составное при любом натуральном $n>1$.",
    "en": "Prove that $n^{4}+4$ is composite for every integer $n>1$."
   },
   "hint": {
    "ru": "Тождество Софи Жермен при $b=1$.",
    "en": "The Sophie Germain identity with $b=1$."
   },
   "sol": {
    "ru": "По тождеству Софи Жермен при $b=1$: $$n^{4}+4=(n^{2}+2)^{2}-(2n)^{2}=(n^{2}-2n+2)(n^{2}+2n+2).$$ Оценим множители при $n\\ge2$: $$n^{2}-2n+2=(n-1)^{2}+1\\ge2,\\qquad n^{2}+2n+2=(n+1)^{2}+1\\ge10 .$$ Оба больше единицы, значит число составное. $\\blacksquare$\n\n*Проверка:* $n=2$ даёт $20=2\\cdot10$ ✓, $n=3$ даёт $85=5\\cdot17$ ✓. *Почему $n>1$:* при $n=1$ первый множитель равен $1$, и $1^{4}+4=5$ — простое.",
    "en": "By the Sophie Germain identity with $b=1$: $$n^{4}+4=(n^{2}+2)^{2}-(2n)^{2}=(n^{2}-2n+2)(n^{2}+2n+2).$$ Bound the factors for $n\\ge2$: $$n^{2}-2n+2=(n-1)^{2}+1\\ge2,\\qquad n^{2}+2n+2=(n+1)^{2}+1\\ge10 .$$ Both exceed $1$, so the number is composite. $\\blacksquare$\n\n*Check:* $n=2$ gives $20=2\\cdot10$ ✓, $n=3$ gives $85=5\\cdot17$ ✓. *Why $n>1$:* at $n=1$ the first factor equals $1$, and $1^{4}+4=5$ is prime."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $3^{105}+4^{105}$ делится на $7$.",
    "en": "Prove that $3^{105}+4^{105}$ is divisible by $7$."
   },
   "hint": {
    "ru": "При нечётном $n$ число $a+b$ делит $a^{n}+b^{n}$.",
    "en": "For odd $n$, $a+b$ divides $a^{n}+b^{n}$."
   },
   "sol": {
    "ru": "Показатель $105$ нечётен, поэтому работает тождество $$a^{n}+b^{n}=(a+b)\\left(a^{n-1}-a^{n-2}b+a^{n-3}b^{2}-\\dots+b^{n-1}\\right),$$ где вторая скобка — многочлен с целыми коэффициентами. Подставим $a=3$, $b=4$, $n=105$: множитель $a+b=7$ выносится, и $$3^{105}+4^{105}=7\\cdot\\left(3^{104}-3^{103}\\cdot4+\\dots+4^{104}\\right).$$ Вторая скобка — целое число, значит всё произведение делится на $7$. $\\blacksquare$\n\n*Тот же ответ через остатки:* $3^{105}+4^{105}\\equiv3^{105}+(-3)^{105}=3^{105}-3^{105}=0\\pmod7$, поскольку $4\\equiv-3\\pmod 7$.",
    "en": "The exponent $105$ is odd, so the identity $$a^{n}+b^{n}=(a+b)\\left(a^{n-1}-a^{n-2}b+a^{n-3}b^{2}-\\dots+b^{n-1}\\right)$$ applies, the second bracket being a polynomial with integer coefficients. Put $a=3$, $b=4$, $n=105$: the factor $a+b=7$ comes out and $$3^{105}+4^{105}=7\\cdot\\left(3^{104}-3^{103}\\cdot4+\\dots+4^{104}\\right).$$ The bracket is an integer, so the whole product is divisible by $7$. $\\blacksquare$\n\n*The same answer via remainders:* $4\\equiv-3\\pmod 7$, so $3^{105}+4^{105}\\equiv3^{105}+(-3)^{105}=3^{105}-3^{105}=0\\pmod7$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите тождество $a^{3}+b^{3}+c^{3}-3abc=(a+b+c)(a^{2}+b^{2}+c^{2}-ab-bc-ca)$ и выведите: если $a+b+c=0$, то $a^{3}+b^{3}+c^{3}=3abc$.",
    "en": "Prove the identity $a^{3}+b^{3}+c^{3}-3abc=(a+b+c)(a^{2}+b^{2}+c^{2}-ab-bc-ca)$ and deduce that $a+b+c=0$ implies $a^{3}+b^{3}+c^{3}=3abc$."
   },
   "hint": {
    "ru": "Просто раскройте правую часть аккуратно.",
    "en": "Just expand the right-hand side carefully."
   },
   "sol": {
    "ru": "Раскроем правую часть, умножая каждое слагаемое первой скобки на всю вторую:\n\n$a\\cdot(a^{2}+b^{2}+c^{2}-ab-bc-ca)=a^{3}+ab^{2}+ac^{2}-a^{2}b-abc-a^{2}c$,\n\n$b\\cdot(\\dots)=a^{2}b+b^{3}+bc^{2}-ab^{2}-b^{2}c-abc$,\n\n$c\\cdot(\\dots)=a^{2}c+b^{2}c+c^{3}-abc-bc^{2}-ac^{2}$.\n\nСкладываем. Слагаемые $a^{2}b$ и $-a^{2}b$ уничтожаются, так же уничтожаются все шесть смешанных пар $ab^{2},a^{2}c,b^{2}c,bc^{2},ac^{2}$, а три слагаемых $-abc$ дают $-3abc$. Остаётся $$a^{3}+b^{3}+c^{3}-3abc,$$ что и требовалось.\n\n**Следствие.** Если $a+b+c=0$, то правая часть тождества содержит множитель $0$, значит $a^{3}+b^{3}+c^{3}-3abc=0$, то есть $a^{3}+b^{3}+c^{3}=3abc$. $\\blacksquare$\n\n*Пример:* $1+2-3=0$, и действительно $1+8-27=-18=3\\cdot1\\cdot2\\cdot(-3)$ ✓",
    "en": "Expand the right-hand side, multiplying each term of the first bracket by the whole second one:\n\n$a\\cdot(a^{2}+b^{2}+c^{2}-ab-bc-ca)=a^{3}+ab^{2}+ac^{2}-a^{2}b-abc-a^{2}c$,\n\n$b\\cdot(\\dots)=a^{2}b+b^{3}+bc^{2}-ab^{2}-b^{2}c-abc$,\n\n$c\\cdot(\\dots)=a^{2}c+b^{2}c+c^{3}-abc-bc^{2}-ac^{2}$.\n\nAdd them. The terms $a^{2}b$ and $-a^{2}b$ cancel, and so do all six mixed pairs $ab^{2},a^{2}c,b^{2}c,bc^{2},ac^{2}$, while the three copies of $-abc$ give $-3abc$. What survives is $$a^{3}+b^{3}+c^{3}-3abc,$$ as required.\n\n**Corollary.** If $a+b+c=0$ the right-hand side has a factor $0$, so $a^{3}+b^{3}+c^{3}-3abc=0$, that is $a^{3}+b^{3}+c^{3}=3abc$. $\\blacksquare$\n\n*Example:* $1+2-3=0$, and indeed $1+8-27=-18=3\\cdot1\\cdot2\\cdot(-3)$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $n^{5}-n$ делится на $30$ при любом целом $n$.",
    "en": "Prove that $n^{5}-n$ is divisible by $30$ for every integer $n$."
   },
   "hint": {
    "ru": "$30=2\\cdot3\\cdot5$; разложите и разберите делимость на $5$ отдельно.",
    "en": "$30=2\\cdot3\\cdot5$; factor, and handle divisibility by $5$ separately."
   },
   "sol": {
    "ru": "Разложим: $$n^{5}-n=n(n^{4}-1)=n(n^{2}-1)(n^{2}+1)=(n-1)n(n+1)(n^{2}+1).$$\n\n**Делимость на $6$.** Множитель $(n-1)n(n+1)$ — произведение трёх подряд идущих чисел, оно делится на $2$ и на $3$.\n\n**Делимость на $5$.** Разберём остаток $n$ по модулю $5$. Если $n\\equiv0,\\pm1$, то один из множителей $n$, $n-1$, $n+1$ делится на $5$. Если же $n\\equiv\\pm2$, то $n^{2}\\equiv4$ и $n^{2}+1\\equiv5\\equiv0$, то есть на $5$ делится последний множитель. Других остатков нет.\n\nЧисла $6$ и $5$ взаимно просты, поэтому произведение делится на $30$. $\\blacksquare$",
    "en": "Factor: $$n^{5}-n=n(n^{4}-1)=n(n^{2}-1)(n^{2}+1)=(n-1)n(n+1)(n^{2}+1).$$\n\n**Divisibility by $6$.** The factor $(n-1)n(n+1)$ is a product of three consecutive integers, so it is divisible by $2$ and by $3$.\n\n**Divisibility by $5$.** Check the remainder of $n$ modulo $5$. If $n\\equiv0,\\pm1$ then one of $n$, $n-1$, $n+1$ is divisible by $5$. If $n\\equiv\\pm2$ then $n^{2}\\equiv4$ and $n^{2}+1\\equiv5\\equiv0$, so the last factor is divisible by $5$. There are no other remainders.\n\nSince $6$ and $5$ are coprime, the product is divisible by $30$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Разложите на множители $(x+y)^{5}-x^{5}-y^{5}$.",
    "en": "Factor $(x+y)^{5}-x^{5}-y^{5}$."
   },
   "hint": {
    "ru": "Проверьте, что выражение обнуляется при $x=0$, при $y=0$ и при $y=-x$.",
    "en": "Check that the expression vanishes at $x=0$, at $y=0$ and at $y=-x$."
   },
   "sol": {
    "ru": "Раскроем по формуле бинома: $$(x+y)^{5}=x^{5}+5x^{4}y+10x^{3}y^{2}+10x^{2}y^{3}+5xy^{4}+y^{5},$$ поэтому $$(x+y)^{5}-x^{5}-y^{5}=5x^{4}y+10x^{3}y^{2}+10x^{2}y^{3}+5xy^{4}=5xy\\left(x^{3}+2x^{2}y+2xy^{2}+y^{3}\\right).$$ Скобку раскладываем группировкой: $$x^{3}+y^{3}+2xy(x+y)=(x+y)(x^{2}-xy+y^{2})+2xy(x+y)=(x+y)(x^{2}+xy+y^{2}).$$ **Ответ:** $$5xy(x+y)\\left(x^{2}+xy+y^{2}\\right).$$ *Проверка при $x=y=1$:* слева $32-1-1=30$, справа $5\\cdot1\\cdot2\\cdot3=30$ ✓",
    "en": "Expand by the binomial theorem: $$(x+y)^{5}=x^{5}+5x^{4}y+10x^{3}y^{2}+10x^{2}y^{3}+5xy^{4}+y^{5},$$ so $$(x+y)^{5}-x^{5}-y^{5}=5x^{4}y+10x^{3}y^{2}+10x^{2}y^{3}+5xy^{4}=5xy\\left(x^{3}+2x^{2}y+2xy^{2}+y^{3}\\right).$$ Factor the bracket by grouping: $$x^{3}+y^{3}+2xy(x+y)=(x+y)(x^{2}-xy+y^{2})+2xy(x+y)=(x+y)(x^{2}+xy+y^{2}).$$ **Answer:** $$5xy(x+y)\\left(x^{2}+xy+y^{2}\\right).$$ *Check at $x=y=1$:* the left side is $32-1-1=30$, the right side $5\\cdot1\\cdot2\\cdot3=30$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Решите систему $x+y=5$, $x^{3}+y^{3}=35$.",
    "en": "Solve the system $x+y=5$, $x^{3}+y^{3}=35$."
   },
   "hint": {
    "ru": "Выразите $x^{3}+y^{3}$ через $s$ и $p$, найдите $p$, затем примените Виету.",
    "en": "Express $x^{3}+y^{3}$ through $s$ and $p$, find $p$, then use Vieta."
   },
   "sol": {
    "ru": "Пусть $s=x+y=5$ и $p=xy$. Тогда $$x^{3}+y^{3}=s^{3}-3ps=125-15p .$$ Из условия $125-15p=35$ получаем $15p=90$ и $p=6$.\n\nЗначит $x$ и $y$ — корни уравнения $t^{2}-5t+6=0$, дискриминант $25-24=1$, корни $t=2$ и $t=3$.\n\n**Ответ:** $(x,y)=(2,3)$ и $(3,2)$. *Проверка:* $2+3=5$ и $8+27=35$ ✓",
    "en": "Put $s=x+y=5$ and $p=xy$. Then $$x^{3}+y^{3}=s^{3}-3ps=125-15p .$$ The condition $125-15p=35$ gives $15p=90$ and $p=6$.\n\nSo $x$ and $y$ are the roots of $t^{2}-5t+6=0$, whose discriminant is $25-24=1$ and whose roots are $t=2$ and $t=3$.\n\n**Answer:** $(x,y)=(2,3)$ and $(3,2)$. *Check:* $2+3=5$ and $8+27=35$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Разложите на множители $x^{8}+x^{4}+1$.",
    "en": "Factor $x^{8}+x^{4}+1$."
   },
   "hint": {
    "ru": "Сначала сделайте замену $t=x^{2}$, потом повторите приём «добавить и вычесть».",
    "en": "First substitute $t=x^{2}$, then repeat the add-and-subtract trick."
   },
   "sol": {
    "ru": "Положим $t=x^{2}$. Тогда $x^{8}+x^{4}+1=t^{4}+t^{2}+1$, а это выражение мы уже раскладывали: $$t^{4}+t^{2}+1=(t^{2}-t+1)(t^{2}+t+1).$$ Возвращаемся к $x$: $$x^{8}+x^{4}+1=(x^{4}-x^{2}+1)(x^{4}+x^{2}+1).$$ Второй множитель раскладывается по той же формуле: $x^{4}+x^{2}+1=(x^{2}-x+1)(x^{2}+x+1)$.\n\n**Ответ:** $$x^{8}+x^{4}+1=(x^{4}-x^{2}+1)(x^{2}-x+1)(x^{2}+x+1).$$ *Проверка при $x=1$:* слева $3$, справа $1\\cdot1\\cdot3=3$ ✓ *При $x=2$:* слева $256+16+1=273$, справа $(16-4+1)(4-2+1)(4+2+1)=13\\cdot3\\cdot7=273$ ✓",
    "en": "Put $t=x^{2}$. Then $x^{8}+x^{4}+1=t^{4}+t^{2}+1$, which we have already factored: $$t^{4}+t^{2}+1=(t^{2}-t+1)(t^{2}+t+1).$$ Back in terms of $x$: $$x^{8}+x^{4}+1=(x^{4}-x^{2}+1)(x^{4}+x^{2}+1).$$ The second factor splits by the same formula: $x^{4}+x^{2}+1=(x^{2}-x+1)(x^{2}+x+1)$.\n\n**Answer:** $$x^{8}+x^{4}+1=(x^{4}-x^{2}+1)(x^{2}-x+1)(x^{2}+x+1).$$ *Check at $x=1$:* the left side is $3$, the right side $1\\cdot1\\cdot3=3$ ✓ *At $x=2$:* the left side is $256+16+1=273$, the right side $(16-4+1)(4-2+1)(4+2+1)=13\\cdot3\\cdot7=273$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Известно, что $a+b+c=0$. Докажите, что $a^{4}+b^{4}+c^{4}=\\dfrac{\\left(a^{2}+b^{2}+c^{2}\\right)^{2}}{2}$.",
    "en": "Suppose $a+b+c=0$. Prove that $a^{4}+b^{4}+c^{4}=\\dfrac{\\left(a^{2}+b^{2}+c^{2}\\right)^{2}}{2}$."
   },
   "hint": {
    "ru": "Обозначьте $\\sigma_2=ab+bc+ca$ и заметьте, что при $a+b+c=0$ выполнено $a^{2}+b^{2}+c^{2}=-2\\sigma_2$.",
    "en": "Write $\\sigma_2=ab+bc+ca$ and note that $a+b+c=0$ gives $a^{2}+b^{2}+c^{2}=-2\\sigma_2$."
   },
   "sol": {
    "ru": "Обозначим $q=a^{2}+b^{2}+c^{2}$ и $\\sigma_2=ab+bc+ca$.\n\n**Шаг 1.** Из $(a+b+c)^{2}=q+2\\sigma_2=0$ получаем $$q=-2\\sigma_2 .$$\n\n**Шаг 2.** Возведём $q$ в квадрат другим способом: $$q^{2}=\\left(a^{2}+b^{2}+c^{2}\\right)^{2}=a^{4}+b^{4}+c^{4}+2\\left(a^{2}b^{2}+b^{2}c^{2}+c^{2}a^{2}\\right). \\tag{1}$$\n\n**Шаг 3.** Посчитаем сумму попарных квадратов через $\\sigma_2$: $$\\sigma_2^{2}=(ab+bc+ca)^{2}=a^{2}b^{2}+b^{2}c^{2}+c^{2}a^{2}+2abc\\,(a+b+c).$$ Последнее слагаемое равно нулю, поэтому $$a^{2}b^{2}+b^{2}c^{2}+c^{2}a^{2}=\\sigma_2^{2}=\\frac{q^{2}}{4},$$ где мы подставили $\\sigma_2=-q/2$ из шага 1.\n\n**Шаг 4.** Возвращаемся в $(1)$: $$q^{2}=a^{4}+b^{4}+c^{4}+2\\cdot\\frac{q^{2}}{4}=a^{4}+b^{4}+c^{4}+\\frac{q^{2}}{2},$$ откуда $$a^{4}+b^{4}+c^{4}=\\frac{q^{2}}{2}. \\qquad\\blacksquare$$\n\n*Проверка:* $a=1,b=1,c=-2$: слева $1+1+16=18$, а $q=1+1+4=6$ и $q^{2}/2=18$ ✓",
    "en": "Write $q=a^{2}+b^{2}+c^{2}$ and $\\sigma_2=ab+bc+ca$.\n\n**Step 1.** From $(a+b+c)^{2}=q+2\\sigma_2=0$ we get $$q=-2\\sigma_2 .$$\n\n**Step 2.** Square $q$ the other way: $$q^{2}=\\left(a^{2}+b^{2}+c^{2}\\right)^{2}=a^{4}+b^{4}+c^{4}+2\\left(a^{2}b^{2}+b^{2}c^{2}+c^{2}a^{2}\\right). \\tag{1}$$\n\n**Step 3.** Compute the sum of pairwise squares through $\\sigma_2$: $$\\sigma_2^{2}=(ab+bc+ca)^{2}=a^{2}b^{2}+b^{2}c^{2}+c^{2}a^{2}+2abc\\,(a+b+c).$$ The last term is zero, so $$a^{2}b^{2}+b^{2}c^{2}+c^{2}a^{2}=\\sigma_2^{2}=\\frac{q^{2}}{4},$$ substituting $\\sigma_2=-q/2$ from Step 1.\n\n**Step 4.** Back into $(1)$: $$q^{2}=a^{4}+b^{4}+c^{4}+2\\cdot\\frac{q^{2}}{4}=a^{4}+b^{4}+c^{4}+\\frac{q^{2}}{2},$$ hence $$a^{4}+b^{4}+c^{4}=\\frac{q^{2}}{2}. \\qquad\\blacksquare$$\n\n*Check:* $a=1,b=1,c=-2$: the left side is $1+1+16=18$, while $q=1+1+4=6$ and $q^{2}/2=18$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите тождество $(a+b+c)^{3}-a^{3}-b^{3}-c^{3}=3(a+b)(b+c)(c+a)$.",
    "en": "Prove the identity $(a+b+c)^{3}-a^{3}-b^{3}-c^{3}=3(a+b)(b+c)(c+a)$."
   },
   "hint": {
    "ru": "Сначала примените формулу $x^{3}+y^{3}=(x+y)(x^{2}-xy+y^{2})$ к $x=a+b$, $y=c$.",
    "en": "First apply $x^{3}+y^{3}=(x+y)(x^{2}-xy+y^{2})$ with $x=a+b$, $y=c$."
   },
   "sol": {
    "ru": "Обозначим $x=a+b$. Тогда левая часть равна $$(x+c)^{3}-a^{3}-b^{3}-c^{3}.$$\n\n**Шаг 1.** Раскроем куб суммы: $(x+c)^{3}=x^{3}+3x^{2}c+3xc^{2}+c^{3}$, поэтому левая часть равна $$x^{3}+3x^{2}c+3xc^{2}-a^{3}-b^{3}=\\left(x^{3}-a^{3}-b^{3}\\right)+3xc(x+c).$$\n\n**Шаг 2.** Первую скобку считаем отдельно: $$x^{3}-a^{3}-b^{3}=(a+b)^{3}-a^{3}-b^{3}=3a^{2}b+3ab^{2}=3ab(a+b)=3abx .$$\n\n**Шаг 3.** Складываем: $$3abx+3xc(x+c)=3x\\bigl(ab+cx+c^{2}\\bigr)=3x\\bigl(ab+c(a+b)+c^{2}\\bigr).$$\n\n**Шаг 4.** Раскладываем скобку: $$ab+ca+cb+c^{2}=a(b+c)+c(b+c)=(a+c)(b+c).$$\n\nИтого левая часть равна $3(a+b)(b+c)(c+a)$. $\\blacksquare$\n\n*Проверка при $a=b=c=1$:* слева $27-3=24$, справа $3\\cdot2\\cdot2\\cdot2=24$ ✓",
    "en": "Write $x=a+b$. Then the left side is $$(x+c)^{3}-a^{3}-b^{3}-c^{3}.$$\n\n**Step 1.** Expand the cube: $(x+c)^{3}=x^{3}+3x^{2}c+3xc^{2}+c^{3}$, so the left side equals $$x^{3}+3x^{2}c+3xc^{2}-a^{3}-b^{3}=\\left(x^{3}-a^{3}-b^{3}\\right)+3xc(x+c).$$\n\n**Step 2.** Handle the first bracket separately: $$x^{3}-a^{3}-b^{3}=(a+b)^{3}-a^{3}-b^{3}=3a^{2}b+3ab^{2}=3ab(a+b)=3abx .$$\n\n**Step 3.** Add them: $$3abx+3xc(x+c)=3x\\bigl(ab+cx+c^{2}\\bigr)=3x\\bigl(ab+c(a+b)+c^{2}\\bigr).$$\n\n**Step 4.** Factor the bracket: $$ab+ca+cb+c^{2}=a(b+c)+c(b+c)=(a+c)(b+c).$$\n\nSo the left side equals $3(a+b)(b+c)(c+a)$. $\\blacksquare$\n\n*Check at $a=b=c=1$:* the left side is $27-3=24$, the right side $3\\cdot2\\cdot2\\cdot2=24$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что $n^{4}+4^{n}$ составное при любом натуральном $n>1$.",
    "en": "Prove that $n^{4}+4^{n}$ is composite for every integer $n>1$."
   },
   "hint": {
    "ru": "Чётные $n$ разберите отдельно; при нечётном $n=2k+1$ запишите $4^{n}=4\\cdot(2^{k})^{4}$.",
    "en": "Handle even $n$ separately; for odd $n=2k+1$ write $4^{n}=4\\cdot(2^{k})^{4}$."
   },
   "sol": {
    "ru": "**Случай чётного $n$.** Тогда $n^{4}$ чётно и $4^{n}$ чётно, значит сумма чётна и больше $2$ — составное.\n\n**Случай нечётного $n=2k+1$, $k\\ge1$.** Заметим, что $$4^{n}=4^{2k+1}=4\\cdot4^{2k}=4\\cdot\\left(2^{k}\\right)^{4}.$$ Значит выражение имеет вид $a^{4}+4b^{4}$ при $a=n$ и $b=2^{k}$. По тождеству Софи Жермен $$n^{4}+4\\left(2^{k}\\right)^{4}=\\left(n^{2}-2n\\cdot2^{k}+2\\cdot4^{k}\\right)\\left(n^{2}+2n\\cdot2^{k}+2\\cdot4^{k}\\right).$$\n\nОстаётся проверить, что меньший множитель больше единицы: $$n^{2}-2^{k+1}n+2^{2k+1}=\\left(n-2^{k}\\right)^{2}+4^{k}\\ \\ge\\ 4^{k}\\ \\ge\\ 4>1$$ при $k\\ge1$. Второй множитель, очевидно, ещё больше. Значит число составное. $\\blacksquare$\n\n*Проверка при $n=3$ ($k=1$):* $81+64=145$, а формула даёт $(9-12+8)(9+12+8)=5\\cdot29=145$ ✓\n\n*Почему нужно $n>1$:* при $n=1$ получается $1+4=5$ — простое.",
    "en": "**Even $n$.** Then $n^{4}$ is even and $4^{n}$ is even, so the sum is even and larger than $2$ — composite.\n\n**Odd $n=2k+1$, $k\\ge1$.** Note that $$4^{n}=4^{2k+1}=4\\cdot4^{2k}=4\\cdot\\left(2^{k}\\right)^{4}.$$ So the expression has the form $a^{4}+4b^{4}$ with $a=n$ and $b=2^{k}$. By the Sophie Germain identity $$n^{4}+4\\left(2^{k}\\right)^{4}=\\left(n^{2}-2n\\cdot2^{k}+2\\cdot4^{k}\\right)\\left(n^{2}+2n\\cdot2^{k}+2\\cdot4^{k}\\right).$$\n\nIt remains to check that the smaller factor exceeds $1$: $$n^{2}-2^{k+1}n+2^{2k+1}=\\left(n-2^{k}\\right)^{2}+4^{k}\\ \\ge\\ 4^{k}\\ \\ge\\ 4>1$$ for $k\\ge1$. The other factor is clearly larger still. Hence the number is composite. $\\blacksquare$\n\n*Check at $n=3$ ($k=1$):* $81+64=145$, and the formula gives $(9-12+8)(9+12+8)=5\\cdot29=145$ ✓\n\n*Why $n>1$ is needed:* at $n=1$ we get $1+4=5$, which is prime."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Стороны треугольника $a,b,c$ удовлетворяют равенству $a^{2}+b^{2}+c^{2}=ab+bc+ca$. Докажите, что треугольник равносторонний.",
    "en": "The sides $a,b,c$ of a triangle satisfy $a^{2}+b^{2}+c^{2}=ab+bc+ca$. Prove that the triangle is equilateral."
   },
   "hint": {
    "ru": "Умножьте обе части на $2$ и соберите полные квадраты.",
    "en": "Multiply both sides by $2$ and assemble complete squares."
   },
   "sol": {
    "ru": "Перенесём всё в одну часть и умножим на $2$: $$2a^{2}+2b^{2}+2c^{2}-2ab-2bc-2ca=0 .$$ Теперь разложим левую часть на три полных квадрата, распределив каждый квадрат переменной поровну между двумя соседями: $$\\left(a^{2}-2ab+b^{2}\\right)+\\left(b^{2}-2bc+c^{2}\\right)+\\left(c^{2}-2ca+a^{2}\\right)=(a-b)^{2}+(b-c)^{2}+(c-a)^{2}.$$ Сумма трёх квадратов равна нулю. Каждый квадрат неотрицателен, поэтому сумма равна нулю **только** если все три слагаемых нулевые: $$a-b=0,\\qquad b-c=0,\\qquad c-a=0 .$$ Значит $a=b=c$, то есть треугольник равносторонний. $\\blacksquare$\n\n*Замечание.* Условие «треугольник» здесь даже не понадобилось: равенство $a^{2}+b^{2}+c^{2}=ab+bc+ca$ влечёт $a=b=c$ для любых вещественных чисел.",
    "en": "Move everything to one side and multiply by $2$: $$2a^{2}+2b^{2}+2c^{2}-2ab-2bc-2ca=0 .$$ Now split the left side into three complete squares, sharing each squared variable equally between its two neighbours: $$\\left(a^{2}-2ab+b^{2}\\right)+\\left(b^{2}-2bc+c^{2}\\right)+\\left(c^{2}-2ca+a^{2}\\right)=(a-b)^{2}+(b-c)^{2}+(c-a)^{2}.$$ A sum of three squares equals zero. Every square is non-negative, so the sum is zero **only** when all three terms vanish: $$a-b=0,\\qquad b-c=0,\\qquad c-a=0 .$$ Hence $a=b=c$ and the triangle is equilateral. $\\blacksquare$\n\n*Remark.* The triangle hypothesis was never used: $a^{2}+b^{2}+c^{2}=ab+bc+ca$ forces $a=b=c$ for any real numbers."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Разложите на множители $x^{4}+y^{4}+z^{4}-2x^{2}y^{2}-2y^{2}z^{2}-2z^{2}x^{2}$.",
    "en": "Factor $x^{4}+y^{4}+z^{4}-2x^{2}y^{2}-2y^{2}z^{2}-2z^{2}x^{2}$."
   },
   "hint": {
    "ru": "Соберите первые три и два из смешанных слагаемых в квадрат $(x^{2}-y^{2}-z^{2})^{2}$.",
    "en": "Assemble the first three terms and two of the mixed ones into $(x^{2}-y^{2}-z^{2})^{2}$."
   },
   "sol": {
    "ru": "**Шаг 1.** Раскроем $(x^{2}-y^{2}-z^{2})^{2}$: $$x^{4}+y^{4}+z^{4}-2x^{2}y^{2}-2x^{2}z^{2}+2y^{2}z^{2}.$$ Сравнивая с исходным выражением, видим, что оно равно $$\\left(x^{2}-y^{2}-z^{2}\\right)^{2}-4y^{2}z^{2}.$$\n\n**Шаг 2.** Разность квадратов: $$=\\left(x^{2}-y^{2}-z^{2}-2yz\\right)\\left(x^{2}-y^{2}-z^{2}+2yz\\right).$$\n\n**Шаг 3.** В каждой скобке узнаём квадрат: $$x^{2}-(y+z)^{2}\\quad\\text{и}\\quad x^{2}-(y-z)^{2},$$ и снова применяем разность квадратов: $$=(x-y-z)(x+y+z)\\,(x-y+z)(x+y-z).$$\n\n**Ответ:** $$(x+y+z)(-x+y+z)(x-y+z)(x+y-z)\\cdot(-1),$$ то есть $$x^{4}+y^{4}+z^{4}-2x^{2}y^{2}-2y^{2}z^{2}-2z^{2}x^{2}=-(x+y+z)(-x+y+z)(x-y+z)(x+y-z).$$\n\n*Проверка при $x=y=z=1$:* слева $3-6=-3$, справа $-(3)(1)(1)(1)=-3$ ✓\n\n*Замечание.* Именно это произведение стоит под корнем в формуле Герона: площадь треугольника со сторонами $x,y,z$ равна $\\tfrac14\\sqrt{(x+y+z)(-x+y+z)(x-y+z)(x+y-z)}$.",
    "en": "**Step 1.** Expand $(x^{2}-y^{2}-z^{2})^{2}$: $$x^{4}+y^{4}+z^{4}-2x^{2}y^{2}-2x^{2}z^{2}+2y^{2}z^{2}.$$ Comparing with the original expression, it equals $$\\left(x^{2}-y^{2}-z^{2}\\right)^{2}-4y^{2}z^{2}.$$\n\n**Step 2.** Difference of squares: $$=\\left(x^{2}-y^{2}-z^{2}-2yz\\right)\\left(x^{2}-y^{2}-z^{2}+2yz\\right).$$\n\n**Step 3.** Each bracket hides a square: $$x^{2}-(y+z)^{2}\\quad\\text{and}\\quad x^{2}-(y-z)^{2},$$ so a difference of squares applies again: $$=(x-y-z)(x+y+z)\\,(x-y+z)(x+y-z).$$\n\n**Answer:** $$x^{4}+y^{4}+z^{4}-2x^{2}y^{2}-2y^{2}z^{2}-2z^{2}x^{2}=-(x+y+z)(-x+y+z)(x-y+z)(x+y-z).$$\n\n*Check at $x=y=z=1$:* the left side is $3-6=-3$, the right side $-(3)(1)(1)(1)=-3$ ✓\n\n*Remark.* This product is exactly what sits under the root in Heron’s formula: the area of a triangle with sides $x,y,z$ equals $\\tfrac14\\sqrt{(x+y+z)(-x+y+z)(x-y+z)(x+y-z)}$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Найдите все натуральные $n$, при которых число $n^{4}+n^{3}+n^{2}+n+1$ является точным квадратом.",
    "en": "Find every positive integer $n$ for which $n^{4}+n^{3}+n^{2}+n+1$ is a perfect square."
   },
   "hint": {
    "ru": "Умножьте на $4$ и зажмите между $(2n^{2}+n)^{2}$ и $(2n^{2}+n+1)^{2}$.",
    "en": "Multiply by $4$ and squeeze between $(2n^{2}+n)^{2}$ and $(2n^{2}+n+1)^{2}$."
   },
   "sol": {
    "ru": "Обозначим $f(n)=n^{4}+n^{3}+n^{2}+n+1$. Число $f(n)$ — квадрат тогда и только тогда, когда квадратом является $4f(n)$ (умножение на $4=2^{2}$ не меняет этого свойства).\n\n**Оценка снизу.** $$4f(n)-\\left(2n^{2}+n\\right)^{2}=\\left(4n^{4}+4n^{3}+4n^{2}+4n+4\\right)-\\left(4n^{4}+4n^{3}+n^{2}\\right)=3n^{2}+4n+4>0 .$$\n\n**Оценка сверху.** $$\\left(2n^{2}+n+1\\right)^{2}-4f(n)=\\left(4n^{4}+4n^{3}+5n^{2}+2n+1\\right)-\\left(4n^{4}+4n^{3}+4n^{2}+4n+4\\right)=n^{2}-2n-3=(n-3)(n+1).$$ При $n>3$ это выражение положительно.\n\n**Вывод для $n>3$.** Получаем строгую цепочку $$\\left(2n^{2}+n\\right)^{2}<4f(n)<\\left(2n^{2}+n+1\\right)^{2},$$ то есть $4f(n)$ лежит строго между соседними квадратами и потому квадратом не является.\n\n**Малые случаи.** $n=1$: $f=5$ — не квадрат. $n=2$: $f=16+8+4+2+1=31$ — не квадрат. $n=3$: $f=81+27+9+3+1=121=11^{2}$ ✓\n\n**Ответ:** единственное значение $n=3$. $\\blacksquare$\n\n*Замечание.* При $n=3$ равенство $(n-3)(n+1)=0$ означает, что верхняя оценка обращается в равенство: действительно $4\\cdot121=484=22^{2}=(2\\cdot9+3+1)^{2}$.",
    "en": "Write $f(n)=n^{4}+n^{3}+n^{2}+n+1$. It is a square exactly when $4f(n)$ is a square (multiplying by $4=2^{2}$ does not change that).\n\n**Lower bound.** $$4f(n)-\\left(2n^{2}+n\\right)^{2}=\\left(4n^{4}+4n^{3}+4n^{2}+4n+4\\right)-\\left(4n^{4}+4n^{3}+n^{2}\\right)=3n^{2}+4n+4>0 .$$\n\n**Upper bound.** $$\\left(2n^{2}+n+1\\right)^{2}-4f(n)=\\left(4n^{4}+4n^{3}+5n^{2}+2n+1\\right)-\\left(4n^{4}+4n^{3}+4n^{2}+4n+4\\right)=n^{2}-2n-3=(n-3)(n+1),$$ which is positive for $n>3$.\n\n**Conclusion for $n>3$.** We get the strict chain $$\\left(2n^{2}+n\\right)^{2}<4f(n)<\\left(2n^{2}+n+1\\right)^{2},$$ so $4f(n)$ lies strictly between neighbouring squares and cannot be one.\n\n**Small cases.** $n=1$: $f=5$, not a square. $n=2$: $f=16+8+4+2+1=31$, not a square. $n=3$: $f=81+27+9+3+1=121=11^{2}$ ✓\n\n**Answer:** the single value $n=3$. $\\blacksquare$\n\n*Remark.* At $n=3$ the identity $(n-3)(n+1)=0$ says the upper bound becomes an equality: indeed $4\\cdot121=484=22^{2}=(2\\cdot9+3+1)^{2}$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Числа $a,b,c$ удовлетворяют условию $a+b+c=0$. Докажите, что $$\\frac{a^{5}+b^{5}+c^{5}}{5}=\\frac{a^{2}+b^{2}+c^{2}}{2}\\cdot\\frac{a^{3}+b^{3}+c^{3}}{3}.$$",
    "en": "Numbers $a,b,c$ satisfy $a+b+c=0$. Prove that $$\\frac{a^{5}+b^{5}+c^{5}}{5}=\\frac{a^{2}+b^{2}+c^{2}}{2}\\cdot\\frac{a^{3}+b^{3}+c^{3}}{3}.$$"
   },
   "hint": {
    "ru": "Числа $a,b,c$ — корни кубического уравнения $t^{3}+\\sigma_2 t-\\sigma_3=0$. Умножьте это равенство на $t^{2}$.",
    "en": "The numbers $a,b,c$ are the roots of $t^{3}+\\sigma_2 t-\\sigma_3=0$. Multiply that relation by $t^{2}$."
   },
   "sol": {
    "ru": "Обозначим $$\\sigma_2=ab+bc+ca,\\qquad\\sigma_3=abc,\\qquad p_k=a^{k}+b^{k}+c^{k}.$$\n\n**Шаг 1: выразим $p_2$ и $p_3$.** Из $(a+b+c)^{2}=p_2+2\\sigma_2=0$ получаем $$p_2=-2\\sigma_2 .$$ Из тождества $a^{3}+b^{3}+c^{3}-3abc=(a+b+c)(\\dots)=0$ получаем $$p_3=3\\sigma_3 .$$\n\n**Шаг 2: уравнение, которому подчиняются $a,b,c$.** По теореме Виета числа $a,b,c$ — корни многочлена $$t^{3}-(a+b+c)t^{2}+\\sigma_2 t-\\sigma_3=t^{3}+\\sigma_2 t-\\sigma_3 .$$ Значит для каждого из них $$a^{3}=-\\sigma_2 a+\\sigma_3 .$$\n\n**Шаг 3: поднимаемся до пятой степени.** Умножим последнее равенство на $a^{2}$: $$a^{5}=-\\sigma_2 a^{3}+\\sigma_3 a^{2},$$ и то же для $b$ и $c$. Сложим все три: $$p_5=-\\sigma_2 p_3+\\sigma_3 p_2=-\\sigma_2\\cdot3\\sigma_3+\\sigma_3\\cdot(-2\\sigma_2)=-5\\,\\sigma_2\\sigma_3 .$$\n\n**Шаг 4: сравниваем.** $$\\frac{p_5}{5}=-\\sigma_2\\sigma_3,\\qquad \\frac{p_2}{2}\\cdot\\frac{p_3}{3}=\\frac{-2\\sigma_2}{2}\\cdot\\frac{3\\sigma_3}{3}=(-\\sigma_2)\\cdot\\sigma_3=-\\sigma_2\\sigma_3 .$$ Обе части равны. $\\blacksquare$\n\n*Проверка:* $a=1$, $b=1$, $c=-2$. Тогда $p_2=6$, $p_3=1+1-8=-6$, $p_5=1+1-32=-30$. Слева $-30/5=-6$, справа $\\tfrac62\\cdot\\tfrac{-6}{3}=3\\cdot(-2)=-6$ ✓",
    "en": "Write $$\\sigma_2=ab+bc+ca,\\qquad\\sigma_3=abc,\\qquad p_k=a^{k}+b^{k}+c^{k}.$$\n\n**Step 1: express $p_2$ and $p_3$.** From $(a+b+c)^{2}=p_2+2\\sigma_2=0$ we get $$p_2=-2\\sigma_2 .$$ From the identity $a^{3}+b^{3}+c^{3}-3abc=(a+b+c)(\\dots)=0$ we get $$p_3=3\\sigma_3 .$$\n\n**Step 2: the equation $a,b,c$ obey.** By Vieta the numbers $a,b,c$ are the roots of $$t^{3}-(a+b+c)t^{2}+\\sigma_2 t-\\sigma_3=t^{3}+\\sigma_2 t-\\sigma_3 .$$ So each of them satisfies $$a^{3}=-\\sigma_2 a+\\sigma_3 .$$\n\n**Step 3: climb to the fifth power.** Multiply that by $a^{2}$: $$a^{5}=-\\sigma_2 a^{3}+\\sigma_3 a^{2},$$ and likewise for $b$ and $c$. Adding the three, $$p_5=-\\sigma_2 p_3+\\sigma_3 p_2=-\\sigma_2\\cdot3\\sigma_3+\\sigma_3\\cdot(-2\\sigma_2)=-5\\,\\sigma_2\\sigma_3 .$$\n\n**Step 4: compare.** $$\\frac{p_5}{5}=-\\sigma_2\\sigma_3,\\qquad \\frac{p_2}{2}\\cdot\\frac{p_3}{3}=\\frac{-2\\sigma_2}{2}\\cdot\\frac{3\\sigma_3}{3}=(-\\sigma_2)\\cdot\\sigma_3=-\\sigma_2\\sigma_3 .$$ The two sides agree. $\\blacksquare$\n\n*Check:* $a=1$, $b=1$, $c=-2$. Then $p_2=6$, $p_3=1+1-8=-6$, $p_5=1+1-32=-30$. The left side is $-30/5=-6$, the right side $\\tfrac62\\cdot\\tfrac{-6}{3}=3\\cdot(-2)=-6$ ✓"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Вычислите $99^{2}$ в уме.",
    "en": "Compute $99^{2}$ in your head."
   },
   "hint": {
    "ru": "$99=100-1$.",
    "en": "$99=100-1$."
   },
   "sol": {
    "ru": "Применим формулу квадрата разности: $$99^{2}=(100-1)^{2}=100^{2}-2\\cdot100\\cdot1+1^{2}=10000-200+1 .$$\n\n**Ответ:** $9801$.\n\n**Тот же приём** работает и для других чисел: $$98^{2}=(100-2)^{2}=10000-400+4=9604,\\qquad 102^{2}=10000+400+4=10404 .$$",
    "en": "Use the square of a difference: $$99^{2}=(100-1)^{2}=100^{2}-2\\cdot100\\cdot1+1^{2}=10000-200+1 .$$\n\n**Answer:** $9801$.\n\n**The same trick** works elsewhere: $$98^{2}=(100-2)^{2}=10000-400+4=9604,\\qquad 102^{2}=10000+400+4=10404 .$$"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Разложите на множители $x^{2}-9y^{2}$.",
    "en": "Factor $x^{2}-9y^{2}$."
   },
   "hint": {
    "ru": "$9y^{2}=(3y)^{2}$.",
    "en": "$9y^{2}=(3y)^{2}$."
   },
   "sol": {
    "ru": "Заметим, что $9y^{2}=(3y)^{2}$, поэтому перед нами разность квадратов: $$x^{2}-9y^{2}=x^{2}-(3y)^{2}=(x-3y)(x+3y).$$\n\n**Проверка** обратным раскрытием скобок: $$(x-3y)(x+3y)=x^{2}+3xy-3xy-9y^{2}=x^{2}-9y^{2} \\quad\\checkmark$$\n\n**Ответ:** $(x-3y)(x+3y)$.",
    "en": "Note that $9y^{2}=(3y)^{2}$, so this is a difference of squares: $$x^{2}-9y^{2}=x^{2}-(3y)^{2}=(x-3y)(x+3y).$$\n\n**Check** by expanding back: $$(x-3y)(x+3y)=x^{2}+3xy-3xy-9y^{2}=x^{2}-9y^{2} \\quad\\checkmark$$\n\n**Answer:** $(x-3y)(x+3y)$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Вычислите $2025^{2}-2024^{2}$ без калькулятора.",
    "en": "Compute $2025^{2}-2024^{2}$ without a calculator."
   },
   "hint": {
    "ru": "Разность квадратов.",
    "en": "Difference of squares."
   },
   "sol": {
    "ru": "$$2025^{2}-2024^{2}=(2025-2024)(2025+2024)=1\\cdot4049 .$$\n\n**Ответ:** $4049$.\n\n**Общее наблюдение.** Разность квадратов двух соседних чисел всегда равна их сумме: $$(n+1)^{2}-n^{2}=2n+1 .$$ Поэтому, например, $101^{2}-100^{2}=201$.",
    "en": "$$2025^{2}-2024^{2}=(2025-2024)(2025+2024)=1\\cdot4049 .$$\n\n**Answer:** $4049$.\n\n**General observation.** The difference of the squares of two consecutive numbers is always their sum: $$(n+1)^{2}-n^{2}=2n+1 .$$ So, for instance, $101^{2}-100^{2}=201$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Раскройте скобки: $(2x-3y)^{2}$.",
    "en": "Expand $(2x-3y)^{2}$."
   },
   "hint": {
    "ru": "$(a-b)^{2}=a^{2}-2ab+b^{2}$.",
    "en": "$(a-b)^{2}=a^{2}-2ab+b^{2}$."
   },
   "sol": {
    "ru": "Здесь $a=2x$ и $b=3y$: $$(2x-3y)^{2}=(2x)^{2}-2\\cdot2x\\cdot3y+(3y)^{2}=4x^{2}-12xy+9y^{2} .$$\n\n**Проверка** подстановкой $x=1$, $y=1$: слева $(2-3)^{2}=1$, справа $4-12+9=1$ ✓\n\n**Ответ:** $4x^{2}-12xy+9y^{2}$.",
    "en": "Here $a=2x$ and $b=3y$: $$(2x-3y)^{2}=(2x)^{2}-2\\cdot2x\\cdot3y+(3y)^{2}=4x^{2}-12xy+9y^{2} .$$\n\n**Check** at $x=1$, $y=1$: the left side is $(2-3)^{2}=1$, the right side $4-12+9=1$ ✓\n\n**Answer:** $4x^{2}-12xy+9y^{2}$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Разложите на множители $x^{3}+8$.",
    "en": "Factor $x^{3}+8$."
   },
   "hint": {
    "ru": "$8=2^{3}$; используйте сумму кубов.",
    "en": "$8=2^{3}$; use the sum of cubes."
   },
   "sol": {
    "ru": "Формула суммы кубов: $$a^{3}+b^{3}=(a+b)\\left(a^{2}-ab+b^{2}\\right).$$\n\nПри $a=x$, $b=2$: $$x^{3}+8=(x+2)\\left(x^{2}-2x+4\\right).$$\n\n**Проверка:** $$(x+2)\\left(x^{2}-2x+4\\right)=x^{3}-2x^{2}+4x+2x^{2}-4x+8=x^{3}+8 \\quad\\checkmark$$\n\n**Ответ:** $(x+2)\\left(x^{2}-2x+4\\right)$.\n\n**Замечание.** Второй множитель на действительные множители не раскладывается: его дискриминант $4-16=-12<0$.",
    "en": "The sum of cubes: $$a^{3}+b^{3}=(a+b)\\left(a^{2}-ab+b^{2}\\right).$$\n\nWith $a=x$, $b=2$: $$x^{3}+8=(x+2)\\left(x^{2}-2x+4\\right).$$\n\n**Check:** $$(x+2)\\left(x^{2}-2x+4\\right)=x^{3}-2x^{2}+4x+2x^{2}-4x+8=x^{3}+8 \\quad\\checkmark$$\n\n**Answer:** $(x+2)\\left(x^{2}-2x+4\\right)$.\n\n**Remark.** The second factor does not split over the reals: its discriminant is $4-16=-12<0$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 1,
   "q": {
    "ru": "Разложите на множители $a^{2}+6a+9-b^{2}$.",
    "en": "Factor $a^{2}+6a+9-b^{2}$."
   },
   "hint": {
    "ru": "Первые три слагаемых — полный квадрат.",
    "en": "The first three terms form a perfect square."
   },
   "sol": {
    "ru": "Свернём первые три слагаемых: $$a^{2}+6a+9=(a+3)^{2} .$$\n\nТогда всё выражение — разность квадратов: $$(a+3)^{2}-b^{2}=(a+3-b)(a+3+b).$$\n\n**Проверка** при $a=1$, $b=2$: слева $1+6+9-4=12$, справа $(1+3-2)(1+3+2)=2\\cdot6=12$ ✓\n\n**Ответ:** $(a+3-b)(a+3+b)$.",
    "en": "Fold up the first three terms: $$a^{2}+6a+9=(a+3)^{2} .$$\n\nThe whole expression is then a difference of squares: $$(a+3)^{2}-b^{2}=(a+3-b)(a+3+b).$$\n\n**Check** at $a=1$, $b=2$: the left side is $1+6+9-4=12$, the right side $(1+3-2)(1+3+2)=2\\cdot6=12$ ✓\n\n**Answer:** $(a+3-b)(a+3+b)$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Разложите $x^{4}-1$ на множители до конца (над действительными числами).",
    "en": "Factor $x^{4}-1$ completely over the reals."
   },
   "hint": {
    "ru": "Дважды примените разность квадратов.",
    "en": "Apply the difference of squares twice."
   },
   "sol": {
    "ru": "Первый шаг: $$x^{4}-1=\\left(x^{2}\\right)^{2}-1^{2}=\\left(x^{2}-1\\right)\\left(x^{2}+1\\right).$$\n\nВторой шаг — первый множитель снова разность квадратов: $$x^{2}-1=(x-1)(x+1).$$\n\nМножитель $x^{2}+1$ дальше не раскладывается: он положителен при всех действительных $x$, значит действительных корней нет.\n\n**Ответ:** $$x^{4}-1=(x-1)(x+1)\\left(x^{2}+1\\right).$$\n\n**Проверка** при $x=2$: слева $16-1=15$, справа $1\\cdot3\\cdot5=15$ ✓",
    "en": "First step: $$x^{4}-1=\\left(x^{2}\\right)^{2}-1^{2}=\\left(x^{2}-1\\right)\\left(x^{2}+1\\right).$$\n\nSecond step — the first factor is again a difference of squares: $$x^{2}-1=(x-1)(x+1).$$\n\nThe factor $x^{2}+1$ goes no further: it is positive for every real $x$, so it has no real roots.\n\n**Answer:** $$x^{4}-1=(x-1)(x+1)\\left(x^{2}+1\\right).$$\n\n**Check** at $x=2$: the left side is $16-1=15$, the right side $1\\cdot3\\cdot5=15$ ✓"
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что каждое нечётное число представимо в виде разности квадратов двух целых чисел.",
    "en": "Prove that every odd number is a difference of two squares of integers."
   },
   "hint": {
    "ru": "Посмотрите на $(n+1)^{2}-n^{2}$.",
    "en": "Look at $(n+1)^{2}-n^{2}$."
   },
   "sol": {
    "ru": "Раскроем скобки: $$(n+1)^{2}-n^{2}=n^{2}+2n+1-n^{2}=2n+1 .$$\n\nВыражение $2n+1$ при целом $n$ пробегает **все** нечётные числа. Значит для нечётного $m$ достаточно взять $$n=\\frac{m-1}{2},$$ и тогда $$m=(n+1)^{2}-n^{2}=\\left(\\frac{m+1}{2}\\right)^{2}-\\left(\\frac{m-1}{2}\\right)^{2} . \\qquad\\blacksquare$$\n\n**Пример.** $$45=23^{2}-22^{2}=529-484 \\quad\\checkmark$$\n\n**Замечание.** Чётные числа тоже иногда представимы: $8=3^{2}-1^{2}$. А вот числа вида $4k+2$ — никогда: разность квадратов сравнима с $0$, $1$ или $3$ по модулю $4$.",
    "en": "Expand: $$(n+1)^{2}-n^{2}=n^{2}+2n+1-n^{2}=2n+1 .$$\n\nAs $n$ ranges over the integers, $2n+1$ runs through **all** odd numbers. So for an odd $m$ it suffices to take $$n=\\frac{m-1}{2},$$ and then $$m=(n+1)^{2}-n^{2}=\\left(\\frac{m+1}{2}\\right)^{2}-\\left(\\frac{m-1}{2}\\right)^{2} . \\qquad\\blacksquare$$\n\n**Example.** $$45=23^{2}-22^{2}=529-484 \\quad\\checkmark$$\n\n**Remark.** Some even numbers work too: $8=3^{2}-1^{2}$. But numbers of the form $4k+2$ never do: a difference of squares is $\\equiv0$, $1$ or $3$ modulo $4$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Упростите выражение $(a+b)^{3}-(a-b)^{3}$.",
    "en": "Simplify $(a+b)^{3}-(a-b)^{3}$."
   },
   "hint": {
    "ru": "Раскройте оба куба и сложите — часть слагаемых сократится.",
    "en": "Expand both cubes and add — many terms cancel."
   },
   "sol": {
    "ru": "Раскроем оба куба: $$(a+b)^{3}=a^{3}+3a^{2}b+3ab^{2}+b^{3},$$ $$(a-b)^{3}=a^{3}-3a^{2}b+3ab^{2}-b^{3}.$$\n\nВычитая, видим, что слагаемые с $a^{3}$ и $3ab^{2}$ сокращаются, а остальные удваиваются: $$(a+b)^{3}-(a-b)^{3}=6a^{2}b+2b^{3}=2b\\left(3a^{2}+b^{2}\\right).$$\n\n**Проверка** при $a=2$, $b=1$: слева $27-1=26$, справа $2\\cdot1\\cdot(12+1)=26$ ✓\n\n**Ответ:** $2b\\left(3a^{2}+b^{2}\\right)$.",
    "en": "Expand both cubes: $$(a+b)^{3}=a^{3}+3a^{2}b+3ab^{2}+b^{3},$$ $$(a-b)^{3}=a^{3}-3a^{2}b+3ab^{2}-b^{3}.$$\n\nSubtracting, the $a^{3}$ and $3ab^{2}$ terms cancel while the others double: $$(a+b)^{3}-(a-b)^{3}=6a^{2}b+2b^{3}=2b\\left(3a^{2}+b^{2}\\right).$$\n\n**Check** at $a=2$, $b=1$: the left side is $27-1=26$, the right side $2\\cdot1\\cdot(12+1)=26$ ✓\n\n**Answer:** $2b\\left(3a^{2}+b^{2}\\right)$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Разложите на множители $x^{3}+y^{3}+x+y$.",
    "en": "Factor $x^{3}+y^{3}+x+y$."
   },
   "hint": {
    "ru": "Сгруппируйте первые два и последние два слагаемых.",
    "en": "Group the first two terms and the last two."
   },
   "sol": {
    "ru": "Сгруппируем: $$\\left(x^{3}+y^{3}\\right)+(x+y).$$\n\nПервая скобка — сумма кубов: $$x^{3}+y^{3}=(x+y)\\left(x^{2}-xy+y^{2}\\right).$$\n\nТеперь общий множитель $x+y$ виден в обеих частях: $$(x+y)\\left(x^{2}-xy+y^{2}\\right)+(x+y)=(x+y)\\left(x^{2}-xy+y^{2}+1\\right).$$\n\n**Проверка** при $x=1$, $y=1$: слева $1+1+1+1=4$, справа $2\\cdot(1-1+1+1)=2\\cdot2=4$ ✓\n\n**Ответ:** $(x+y)\\left(x^{2}-xy+y^{2}+1\\right)$.",
    "en": "Group the terms: $$\\left(x^{3}+y^{3}\\right)+(x+y).$$\n\nThe first bracket is a sum of cubes: $$x^{3}+y^{3}=(x+y)\\left(x^{2}-xy+y^{2}\\right).$$\n\nNow the common factor $x+y$ is visible in both parts: $$(x+y)\\left(x^{2}-xy+y^{2}\\right)+(x+y)=(x+y)\\left(x^{2}-xy+y^{2}+1\\right).$$\n\n**Check** at $x=1$, $y=1$: the left side is $1+1+1+1=4$, the right side $2\\cdot(1-1+1+1)=2\\cdot2=4$ ✓\n\n**Answer:** $(x+y)\\left(x^{2}-xy+y^{2}+1\\right)$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Решите уравнение $x^{4}+4x^{3}+6x^{2}+4x+1=16$.",
    "en": "Solve the equation $x^{4}+4x^{3}+6x^{2}+4x+1=16$."
   },
   "hint": {
    "ru": "Коэффициенты $1,4,6,4,1$ — это строка треугольника Паскаля.",
    "en": "The coefficients $1,4,6,4,1$ form a row of Pascal’s triangle."
   },
   "sol": {
    "ru": "Коэффициенты $1,4,6,4,1$ — это в точности биномиальные коэффициенты четвёртой степени, поэтому левая часть сворачивается: $$x^{4}+4x^{3}+6x^{2}+4x+1=(x+1)^{4} .$$\n\nУравнение превращается в $$(x+1)^{4}=16 .$$\n\nЧетвёртая степень неотрицательна, и извлекая корень четвёртой степени, получаем $$|x+1|=2\\quad\\Longrightarrow\\quad x+1=2\\ \\text{или}\\ x+1=-2 .$$\n\n**Ответ:** $x=1$ и $x=-3$.\n\n**Проверка:** при $x=1$ левая часть равна $2^{4}=16$ ✓; при $x=-3$ она равна $(-2)^{4}=16$ ✓",
    "en": "The coefficients $1,4,6,4,1$ are exactly the binomial coefficients of the fourth power, so the left side folds up: $$x^{4}+4x^{3}+6x^{2}+4x+1=(x+1)^{4} .$$\n\nThe equation becomes $$(x+1)^{4}=16 .$$\n\nA fourth power is non-negative, and taking fourth roots, $$|x+1|=2\\quad\\Longrightarrow\\quad x+1=2\\ \\text{or}\\ x+1=-2 .$$\n\n**Answer:** $x=1$ and $x=-3$.\n\n**Check:** at $x=1$ the left side is $2^{4}=16$ ✓; at $x=-3$ it is $(-2)^{4}=16$ ✓"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Известно, что $a-b=3$ и $ab=4$. Найдите $a^{3}-b^{3}$.",
    "en": "Given $a-b=3$ and $ab=4$, find $a^{3}-b^{3}$."
   },
   "hint": {
    "ru": "$a^{3}-b^{3}=(a-b)^{3}+3ab(a-b)$.",
    "en": "$a^{3}-b^{3}=(a-b)^{3}+3ab(a-b)$."
   },
   "sol": {
    "ru": "Раскроем куб разности: $$(a-b)^{3}=a^{3}-3a^{2}b+3ab^{2}-b^{3}=a^{3}-b^{3}-3ab(a-b).$$\n\nОтсюда $$a^{3}-b^{3}=(a-b)^{3}+3ab(a-b).$$\n\nПодставим данные: $$a^{3}-b^{3}=3^{3}+3\\cdot4\\cdot3=27+36=63 .$$\n\n**Проверка.** Из $a-b=3$ и $ab=4$ числа $a$ и $-b$ — корни уравнения $t^{2}-3t-4=0$, то есть $a=4$, $b=1$. И действительно $$4^{3}-1^{3}=64-1=63 \\quad\\checkmark$$\n\n**Ответ:** $63$.",
    "en": "Expand the cube of a difference: $$(a-b)^{3}=a^{3}-3a^{2}b+3ab^{2}-b^{3}=a^{3}-b^{3}-3ab(a-b).$$\n\nHence $$a^{3}-b^{3}=(a-b)^{3}+3ab(a-b).$$\n\nSubstitute the data: $$a^{3}-b^{3}=3^{3}+3\\cdot4\\cdot3=27+36=63 .$$\n\n**Check.** From $a-b=3$ and $ab=4$ the numbers $a$ and $-b$ are roots of $t^{2}-3t-4=0$, so $a=4$, $b=1$. Indeed $$4^{3}-1^{3}=64-1=63 \\quad\\checkmark$$\n\n**Answer:** $63$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Разложите на множители $a^{3}-b^{3}-a+b$.",
    "en": "Factor $a^{3}-b^{3}-a+b$."
   },
   "hint": {
    "ru": "$-a+b=-(a-b)$.",
    "en": "$-a+b=-(a-b)$."
   },
   "sol": {
    "ru": "Сгруппируем: $$\\left(a^{3}-b^{3}\\right)-(a-b).$$\n\nПервая скобка — разность кубов: $$a^{3}-b^{3}=(a-b)\\left(a^{2}+ab+b^{2}\\right).$$\n\nВыносим общий множитель $a-b$: $$(a-b)\\left(a^{2}+ab+b^{2}\\right)-(a-b)=(a-b)\\left(a^{2}+ab+b^{2}-1\\right).$$\n\n**Проверка** при $a=2$, $b=1$: слева $8-1-2+1=6$, справа $1\\cdot(4+2+1-1)=6$ ✓\n\n**Ответ:** $(a-b)\\left(a^{2}+ab+b^{2}-1\\right)$.",
    "en": "Group the terms: $$\\left(a^{3}-b^{3}\\right)-(a-b).$$\n\nThe first bracket is a difference of cubes: $$a^{3}-b^{3}=(a-b)\\left(a^{2}+ab+b^{2}\\right).$$\n\nTake out the common factor $a-b$: $$(a-b)\\left(a^{2}+ab+b^{2}\\right)-(a-b)=(a-b)\\left(a^{2}+ab+b^{2}-1\\right).$$\n\n**Check** at $a=2$, $b=1$: the left side is $8-1-2+1=6$, the right side $1\\cdot(4+2+1-1)=6$ ✓\n\n**Answer:** $(a-b)\\left(a^{2}+ab+b^{2}-1\\right)$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите разложением на множители, что $4^{n}-1$ делится на $3$ при любом целом $n\\ge1$.",
    "en": "Use a factorisation to prove that $4^{n}-1$ is divisible by $3$ for every integer $n\\ge1$."
   },
   "hint": {
    "ru": "$a^{n}-b^{n}$ всегда делится на $a-b$.",
    "en": "$a^{n}-b^{n}$ is always divisible by $a-b$."
   },
   "sol": {
    "ru": "Воспользуемся тождеством $$a^{n}-b^{n}=(a-b)\\left(a^{n-1}+a^{n-2}b+\\dots+ab^{n-2}+b^{n-1}\\right).$$\n\nПри $a=4$, $b=1$ оно даёт $$4^{n}-1=(4-1)\\left(4^{n-1}+4^{n-2}+\\dots+4+1\\right)=3\\cdot\\left(4^{n-1}+\\dots+1\\right).$$\n\nВторая скобка — целое число, значит $3\\mid4^{n}-1$. $\\blacksquare$\n\n**Проверка:** $4^{3}-1=63=3\\cdot21$ ✓\n\n**Замечание.** Та же формула сразу даёт делимость $10^{n}-1$ на $9$ и $6^{n}-1$ на $5$.",
    "en": "Use the identity $$a^{n}-b^{n}=(a-b)\\left(a^{n-1}+a^{n-2}b+\\dots+ab^{n-2}+b^{n-1}\\right).$$\n\nWith $a=4$, $b=1$ it gives $$4^{n}-1=(4-1)\\left(4^{n-1}+4^{n-2}+\\dots+4+1\\right)=3\\cdot\\left(4^{n-1}+\\dots+1\\right).$$\n\nThe second bracket is an integer, so $3\\mid4^{n}-1$. $\\blacksquare$\n\n**Check:** $4^{3}-1=63=3\\cdot21$ ✓\n\n**Remark.** The same formula immediately gives that $9\\mid10^{n}-1$ and $5\\mid6^{n}-1$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Разложите $x^{6}-y^{6}$ на множители до конца (над действительными числами).",
    "en": "Factor $x^{6}-y^{6}$ completely over the reals."
   },
   "hint": {
    "ru": "Сначала как разность квадратов, потом каждый куб.",
    "en": "First as a difference of squares, then each cube."
   },
   "sol": {
    "ru": "Сначала разность квадратов: $$x^{6}-y^{6}=\\left(x^{3}\\right)^{2}-\\left(y^{3}\\right)^{2}=\\left(x^{3}-y^{3}\\right)\\left(x^{3}+y^{3}\\right).$$\n\nТеперь разность и сумму кубов: $$x^{3}-y^{3}=(x-y)\\left(x^{2}+xy+y^{2}\\right),\\qquad x^{3}+y^{3}=(x+y)\\left(x^{2}-xy+y^{2}\\right).$$\n\nИтого $$x^{6}-y^{6}=(x-y)(x+y)\\left(x^{2}+xy+y^{2}\\right)\\left(x^{2}-xy+y^{2}\\right).$$\n\nКвадратные множители дальше не раскладываются: их дискриминанты (по $x$) равны $y^{2}-4y^{2}=-3y^{2}\\le0$.\n\n**Проверка** при $x=2$, $y=1$: слева $64-1=63$, справа $1\\cdot3\\cdot7\\cdot3=63$ ✓",
    "en": "First a difference of squares: $$x^{6}-y^{6}=\\left(x^{3}\\right)^{2}-\\left(y^{3}\\right)^{2}=\\left(x^{3}-y^{3}\\right)\\left(x^{3}+y^{3}\\right).$$\n\nNow the difference and sum of cubes: $$x^{3}-y^{3}=(x-y)\\left(x^{2}+xy+y^{2}\\right),\\qquad x^{3}+y^{3}=(x+y)\\left(x^{2}-xy+y^{2}\\right).$$\n\nAltogether $$x^{6}-y^{6}=(x-y)(x+y)\\left(x^{2}+xy+y^{2}\\right)\\left(x^{2}-xy+y^{2}\\right).$$\n\nThe quadratic factors go no further: their discriminants (in $x$) are $y^{2}-4y^{2}=-3y^{2}\\le0$.\n\n**Check** at $x=2$, $y=1$: the left side is $64-1=63$, the right side $1\\cdot3\\cdot7\\cdot3=63$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите тождество $$a^{2}+b^{2}+c^{2}-ab-bc-ca=\\tfrac12\\left[(a-b)^{2}+(b-c)^{2}+(c-a)^{2}\\right]$$ и выведите, что левая часть неотрицательна.",
    "en": "Prove the identity $$a^{2}+b^{2}+c^{2}-ab-bc-ca=\\tfrac12\\left[(a-b)^{2}+(b-c)^{2}+(c-a)^{2}\\right]$$ and deduce that the left side is non-negative."
   },
   "hint": {
    "ru": "Раскройте правую часть.",
    "en": "Expand the right-hand side."
   },
   "sol": {
    "ru": "Раскроем правую часть: $$(a-b)^{2}+(b-c)^{2}+(c-a)^{2}=\\left(a^{2}-2ab+b^{2}\\right)+\\left(b^{2}-2bc+c^{2}\\right)+\\left(c^{2}-2ca+a^{2}\\right).$$\n\nСобирая подобные, получаем $$2a^{2}+2b^{2}+2c^{2}-2ab-2bc-2ca ,$$ то есть ровно удвоенную левую часть ✓\n\n**Следствие.** Справа стоит сумма квадратов, умноженная на $\\tfrac12$, а квадраты неотрицательны, поэтому $$a^{2}+b^{2}+c^{2}\\ \\ge\\ ab+bc+ca$$ для всех действительных $a,b,c$.\n\n**Когда равенство?** Только если все три квадрата равны нулю, то есть $a=b=c$. $\\blacksquare$",
    "en": "Expand the right-hand side: $$(a-b)^{2}+(b-c)^{2}+(c-a)^{2}=\\left(a^{2}-2ab+b^{2}\\right)+\\left(b^{2}-2bc+c^{2}\\right)+\\left(c^{2}-2ca+a^{2}\\right).$$\n\nCollecting like terms gives $$2a^{2}+2b^{2}+2c^{2}-2ab-2bc-2ca ,$$ exactly twice the left-hand side ✓\n\n**Consequence.** The right side is half a sum of squares, and squares are non-negative, so $$a^{2}+b^{2}+c^{2}\\ \\ge\\ ab+bc+ca$$ for all real $a,b,c$.\n\n**Equality?** Only when all three squares vanish, i.e. $a=b=c$. $\\blacksquare$"
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Разложите на множители $x^{5}+x+1$.",
    "en": "Factor $x^{5}+x+1$."
   },
   "hint": {
    "ru": "Прибавьте и вычтите $x^{2}$, чтобы получить множитель $x^{2}+x+1$.",
    "en": "Add and subtract $x^{2}$ to bring out the factor $x^{2}+x+1$."
   },
   "sol": {
    "ru": "Добавим и вычтем $x^{2}$: $$x^{5}+x+1=x^{5}-x^{2}+\\left(x^{2}+x+1\\right).$$\n\nПервая часть раскладывается: $$x^{5}-x^{2}=x^{2}\\left(x^{3}-1\\right)=x^{2}(x-1)\\left(x^{2}+x+1\\right).$$\n\nТеперь общий множитель виден: $$x^{5}+x+1=\\left(x^{2}+x+1\\right)\\left[x^{2}(x-1)+1\\right]=\\left(x^{2}+x+1\\right)\\left(x^{3}-x^{2}+1\\right).$$\n\n**Проверка** раскрытием: $$\\left(x^{2}+x+1\\right)\\left(x^{3}-x^{2}+1\\right)=x^{5}-x^{4}+x^{2}+x^{4}-x^{3}+x+x^{3}-x^{2}+1=x^{5}+x+1 \\quad\\checkmark$$\n\n**Ответ:** $\\left(x^{2}+x+1\\right)\\left(x^{3}-x^{2}+1\\right)$.\n\n**Почему приём работает.** Корни многочлена $x^{2}+x+1$ — это комплексные кубические корни из единицы $\\omega$, и для них $\\omega^{5}+\\omega+1=\\omega^{2}+\\omega+1=0$, так что множитель обязан быть.",
    "en": "Add and subtract $x^{2}$: $$x^{5}+x+1=x^{5}-x^{2}+\\left(x^{2}+x+1\\right).$$\n\nThe first part factors: $$x^{5}-x^{2}=x^{2}\\left(x^{3}-1\\right)=x^{2}(x-1)\\left(x^{2}+x+1\\right).$$\n\nNow the common factor is visible: $$x^{5}+x+1=\\left(x^{2}+x+1\\right)\\left[x^{2}(x-1)+1\\right]=\\left(x^{2}+x+1\\right)\\left(x^{3}-x^{2}+1\\right).$$\n\n**Check** by expanding: $$\\left(x^{2}+x+1\\right)\\left(x^{3}-x^{2}+1\\right)=x^{5}-x^{4}+x^{2}+x^{4}-x^{3}+x+x^{3}-x^{2}+1=x^{5}+x+1 \\quad\\checkmark$$\n\n**Answer:** $\\left(x^{2}+x+1\\right)\\left(x^{3}-x^{2}+1\\right)$.\n\n**Why the trick works.** The roots of $x^{2}+x+1$ are the complex cube roots of unity $\\omega$, and for them $\\omega^{5}+\\omega+1=\\omega^{2}+\\omega+1=0$, so that factor has to be there."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите тождество $$\\left(a^{2}+b^{2}\\right)\\left(c^{2}+d^{2}\\right)=(ac+bd)^{2}+(ad-bc)^{2}$$ и представьте с его помощью число $65$ суммой двух квадратов двумя способами.",
    "en": "Prove the identity $$\\left(a^{2}+b^{2}\\right)\\left(c^{2}+d^{2}\\right)=(ac+bd)^{2}+(ad-bc)^{2}$$ and use it to write $65$ as a sum of two squares in two ways."
   },
   "hint": {
    "ru": "$65=5\\cdot13$, а $5=1^{2}+2^{2}$ и $13=2^{2}+3^{2}$.",
    "en": "$65=5\\cdot13$, with $5=1^{2}+2^{2}$ and $13=2^{2}+3^{2}$."
   },
   "sol": {
    "ru": "**Доказательство тождества.** Раскроем правую часть: $$(ac+bd)^{2}=a^{2}c^{2}+2abcd+b^{2}d^{2},$$ $$(ad-bc)^{2}=a^{2}d^{2}-2abcd+b^{2}c^{2}.$$ Слагаемые $\\pm2abcd$ уничтожаются, и остаётся $$a^{2}c^{2}+b^{2}d^{2}+a^{2}d^{2}+b^{2}c^{2}=a^{2}\\left(c^{2}+d^{2}\\right)+b^{2}\\left(c^{2}+d^{2}\\right)=\\left(a^{2}+b^{2}\\right)\\left(c^{2}+d^{2}\\right) \\quad\\checkmark$$\n\n**Применение.** Возьмём $5=1^{2}+2^{2}$ и $13=2^{2}+3^{2}$, то есть $a=1,b=2,c=2,d=3$: $$65=(1\\cdot2+2\\cdot3)^{2}+(1\\cdot3-2\\cdot2)^{2}=8^{2}+(-1)^{2}=64+1 .$$\n\nПоменяем местами $c$ и $d$ (то есть $c=3$, $d=2$): $$65=(1\\cdot3+2\\cdot2)^{2}+(1\\cdot2-2\\cdot3)^{2}=7^{2}+(-4)^{2}=49+16 .$$\n\n**Ответ:** $$65=8^{2}+1^{2}=7^{2}+4^{2} .$$\n\n**Замечание.** Именно это тождество объясняет, почему множество сумм двух квадратов замкнуто относительно умножения.",
    "en": "**Proof of the identity.** Expand the right side: $$(ac+bd)^{2}=a^{2}c^{2}+2abcd+b^{2}d^{2},$$ $$(ad-bc)^{2}=a^{2}d^{2}-2abcd+b^{2}c^{2}.$$ The terms $\\pm2abcd$ cancel, leaving $$a^{2}c^{2}+b^{2}d^{2}+a^{2}d^{2}+b^{2}c^{2}=a^{2}\\left(c^{2}+d^{2}\\right)+b^{2}\\left(c^{2}+d^{2}\\right)=\\left(a^{2}+b^{2}\\right)\\left(c^{2}+d^{2}\\right) \\quad\\checkmark$$\n\n**Application.** Take $5=1^{2}+2^{2}$ and $13=2^{2}+3^{2}$, i.e. $a=1,b=2,c=2,d=3$: $$65=(1\\cdot2+2\\cdot3)^{2}+(1\\cdot3-2\\cdot2)^{2}=8^{2}+(-1)^{2}=64+1 .$$\n\nSwapping $c$ and $d$ (so $c=3$, $d=2$): $$65=(1\\cdot3+2\\cdot2)^{2}+(1\\cdot2-2\\cdot3)^{2}=7^{2}+(-4)^{2}=49+16 .$$\n\n**Answer:** $$65=8^{2}+1^{2}=7^{2}+4^{2} .$$\n\n**Remark.** This identity is exactly why the set of sums of two squares is closed under multiplication."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что $a^{n}-b^{n}$ делится на $a-b$ при всех целых $a,b$ и натуральных $n$, и выведите отсюда, что $6^{100}-1$ делится на $35$.",
    "en": "Prove that $a^{n}-b^{n}$ is divisible by $a-b$ for all integers $a,b$ and positive integers $n$, and deduce that $6^{100}-1$ is divisible by $35$."
   },
   "hint": {
    "ru": "$35=5\\cdot7$; посмотрите на $6-1$ и на $6^{2}-1$.",
    "en": "$35=5\\cdot7$; look at $6-1$ and at $6^{2}-1$."
   },
   "sol": {
    "ru": "**Тождество.** Проверим прямым раскрытием скобок: $$(a-b)\\left(a^{n-1}+a^{n-2}b+\\dots+ab^{n-2}+b^{n-1}\\right)$$ — при умножении на $a$ получаем $a^{n}+a^{n-1}b+\\dots+ab^{n-1}$, при умножении на $-b$ получаем $-a^{n-1}b-\\dots-b^{n}$. Все средние слагаемые попарно уничтожаются, остаётся $$a^{n}-b^{n} . \\qquad\\checkmark$$ Вторая скобка — целое число, значит $(a-b)\\mid a^{n}-b^{n}$.\n\n**Делимость на $5$.** При $a=6$, $b=1$: $$5=6-1\\ \\big|\\ 6^{100}-1 \\quad\\checkmark$$\n\n**Делимость на $7$.** Запишем $6^{100}=\\left(6^{2}\\right)^{50}=36^{50}$ и применим тождество при $a=36$, $b=1$: $$35=36-1\\ \\big|\\ 36^{50}-1=6^{100}-1 ,$$ а $7\\mid35$ ✓\n\nЧисла $5$ и $7$ взаимно просты, значит $6^{100}-1$ делится на $35$. $\\blacksquare$\n\n**Проверка идеи** на маленьком показателе: $6^{2}-1=35$ ✓",
    "en": "**The identity.** Check by expanding: $$(a-b)\\left(a^{n-1}+a^{n-2}b+\\dots+ab^{n-2}+b^{n-1}\\right)$$ — multiplying by $a$ gives $a^{n}+a^{n-1}b+\\dots+ab^{n-1}$, multiplying by $-b$ gives $-a^{n-1}b-\\dots-b^{n}$. All middle terms cancel in pairs, leaving $$a^{n}-b^{n} . \\qquad\\checkmark$$ The second bracket is an integer, so $(a-b)\\mid a^{n}-b^{n}$.\n\n**Divisibility by $5$.** With $a=6$, $b=1$: $$5=6-1\\ \\big|\\ 6^{100}-1 \\quad\\checkmark$$\n\n**Divisibility by $7$.** Write $6^{100}=\\left(6^{2}\\right)^{50}=36^{50}$ and apply the identity with $a=36$, $b=1$: $$35=36-1\\ \\big|\\ 36^{50}-1=6^{100}-1 ,$$ and $7\\mid35$ ✓\n\nAs $5$ and $7$ are coprime, $6^{100}-1$ is divisible by $35$. $\\blacksquare$\n\n**Sanity check** on a small exponent: $6^{2}-1=35$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что произведение четырёх подряд идущих целых чисел, увеличенное на единицу, — полный квадрат.",
    "en": "Prove that the product of four consecutive integers, increased by one, is a perfect square."
   },
   "hint": {
    "ru": "Перемножьте крайние и средние: $n(n+3)$ и $(n+1)(n+2)$.",
    "en": "Multiply the outer and inner pairs: $n(n+3)$ and $(n+1)(n+2)$."
   },
   "sol": {
    "ru": "Обозначим числа $n$, $n+1$, $n+2$, $n+3$ и перемножим их «крест-накрест»: $$n(n+3)=n^{2}+3n,\\qquad (n+1)(n+2)=n^{2}+3n+2 .$$\n\nОба выражения зависят только от $t=n^{2}+3n$, поэтому $$n(n+1)(n+2)(n+3)+1=t(t+2)+1=t^{2}+2t+1=(t+1)^{2}.$$\n\nВозвращаясь к $n$: $$n(n+1)(n+2)(n+3)+1=\\left(n^{2}+3n+1\\right)^{2} . \\qquad\\blacksquare$$\n\n**Проверка** при $n=1$: $$1\\cdot2\\cdot3\\cdot4+1=25=5^{2},\\qquad n^{2}+3n+1=1+3+1=5 \\quad\\checkmark$$\n\n**Ещё пример.** $n=5$: $5\\cdot6\\cdot7\\cdot8+1=1681=41^{2}$, и $25+15+1=41$ ✓",
    "en": "Call the numbers $n$, $n+1$, $n+2$, $n+3$ and multiply them crosswise: $$n(n+3)=n^{2}+3n,\\qquad (n+1)(n+2)=n^{2}+3n+2 .$$\n\nBoth depend only on $t=n^{2}+3n$, so $$n(n+1)(n+2)(n+3)+1=t(t+2)+1=t^{2}+2t+1=(t+1)^{2}.$$\n\nBack in terms of $n$: $$n(n+1)(n+2)(n+3)+1=\\left(n^{2}+3n+1\\right)^{2} . \\qquad\\blacksquare$$\n\n**Check** at $n=1$: $$1\\cdot2\\cdot3\\cdot4+1=25=5^{2},\\qquad n^{2}+3n+1=1+3+1=5 \\quad\\checkmark$$\n\n**Another example.** $n=5$: $5\\cdot6\\cdot7\\cdot8+1=1681=41^{2}$, and $25+15+1=41$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что число $\\underbrace{11\\ldots1}_{2n}-\\underbrace{22\\ldots2}_{n}$ — полный квадрат.",
    "en": "Prove that $\\underbrace{11\\ldots1}_{2n}-\\underbrace{22\\ldots2}_{n}$ is a perfect square."
   },
   "hint": {
    "ru": "$\\underbrace{11\\ldots1}_{k}=\\dfrac{10^{k}-1}{9}$.",
    "en": "$\\underbrace{11\\ldots1}_{k}=\\dfrac{10^{k}-1}{9}$."
   },
   "sol": {
    "ru": "Запишем повторяющиеся единицы через степени десятки: $$\\underbrace{11\\ldots1}_{k}=\\frac{10^{k}-1}{9} .$$\n\nТогда $$\\underbrace{11\\ldots1}_{2n}-\\underbrace{22\\ldots2}_{n}=\\frac{10^{2n}-1}{9}-2\\cdot\\frac{10^{n}-1}{9}=\\frac{10^{2n}-1-2\\cdot10^{n}+2}{9} .$$\n\nВ числителе получился полный квадрат: $$10^{2n}-2\\cdot10^{n}+1=\\left(10^{n}-1\\right)^{2} .$$\n\nЗначит $$\\underbrace{11\\ldots1}_{2n}-\\underbrace{22\\ldots2}_{n}=\\left(\\frac{10^{n}-1}{3}\\right)^{2}=\\left(\\underbrace{33\\ldots3}_{n}\\right)^{2} ,$$ и это действительно квадрат целого числа, ведь $10^{n}-1=\\underbrace{99\\ldots9}_{n}$ делится на $3$. $\\blacksquare$\n\n**Проверка** при $n=2$: $$1111-22=1089=33^{2} \\quad\\checkmark$$\n\nПри $n=3$: $111111-222=110889=333^{2}$ ✓",
    "en": "Write the repunits through powers of ten: $$\\underbrace{11\\ldots1}_{k}=\\frac{10^{k}-1}{9} .$$\n\nThen $$\\underbrace{11\\ldots1}_{2n}-\\underbrace{22\\ldots2}_{n}=\\frac{10^{2n}-1}{9}-2\\cdot\\frac{10^{n}-1}{9}=\\frac{10^{2n}-1-2\\cdot10^{n}+2}{9} .$$\n\nThe numerator is a perfect square: $$10^{2n}-2\\cdot10^{n}+1=\\left(10^{n}-1\\right)^{2} .$$\n\nHence $$\\underbrace{11\\ldots1}_{2n}-\\underbrace{22\\ldots2}_{n}=\\left(\\frac{10^{n}-1}{3}\\right)^{2}=\\left(\\underbrace{33\\ldots3}_{n}\\right)^{2} ,$$ and this really is the square of an integer, since $10^{n}-1=\\underbrace{99\\ldots9}_{n}$ is divisible by $3$. $\\blacksquare$\n\n**Check** at $n=2$: $$1111-22=1089=33^{2} \\quad\\checkmark$$\n\nAt $n=3$: $111111-222=110889=333^{2}$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите тождество $$(a+b+c)(ab+bc+ca)-abc=(a+b)(b+c)(c+a).$$",
    "en": "Prove the identity $$(a+b+c)(ab+bc+ca)-abc=(a+b)(b+c)(c+a).$$"
   },
   "hint": {
    "ru": "Раскройте обе части и сравните.",
    "en": "Expand both sides and compare."
   },
   "sol": {
    "ru": "**Левая часть.** Раскроем произведение: $$(a+b+c)(ab+bc+ca)=a^{2}b+abc+a^{2}c+ab^{2}+b^{2}c+abc+abc+bc^{2}+ac^{2},$$ то есть $$a^{2}b+a^{2}c+ab^{2}+b^{2}c+bc^{2}+ac^{2}+3abc .$$ Вычитая $abc$, получаем $$a^{2}b+a^{2}c+ab^{2}+b^{2}c+bc^{2}+ac^{2}+2abc .$$\n\n**Правая часть.** Сначала $$(a+b)(b+c)=ab+ac+b^{2}+bc ,$$ затем умножим на $(c+a)$: $$\\left(ab+ac+b^{2}+bc\\right)(c+a)=abc+ac^{2}+b^{2}c+bc^{2}+a^{2}b+a^{2}c+ab^{2}+abc .$$\n\nСобирая, получаем $$a^{2}b+a^{2}c+ab^{2}+b^{2}c+bc^{2}+ac^{2}+2abc $$ — то же самое ✓ $\\blacksquare$\n\n**Проверка** при $a=b=c=1$: слева $3\\cdot3-1=8$, справа $2\\cdot2\\cdot2=8$ ✓\n\n**Полезное следствие.** Если $a+b+c=0$, то правая часть равна $-abc$ (подставьте $a+b=-c$ и так далее).",
    "en": "**Left side.** Expand the product: $$(a+b+c)(ab+bc+ca)=a^{2}b+abc+a^{2}c+ab^{2}+b^{2}c+abc+abc+bc^{2}+ac^{2},$$ i.e. $$a^{2}b+a^{2}c+ab^{2}+b^{2}c+bc^{2}+ac^{2}+3abc .$$ Subtracting $abc$ leaves $$a^{2}b+a^{2}c+ab^{2}+b^{2}c+bc^{2}+ac^{2}+2abc .$$\n\n**Right side.** First $$(a+b)(b+c)=ab+ac+b^{2}+bc ,$$ then multiply by $(c+a)$: $$\\left(ab+ac+b^{2}+bc\\right)(c+a)=abc+ac^{2}+b^{2}c+bc^{2}+a^{2}b+a^{2}c+ab^{2}+abc .$$\n\nCollecting gives $$a^{2}b+a^{2}c+ab^{2}+b^{2}c+bc^{2}+ac^{2}+2abc $$ — the same thing ✓ $\\blacksquare$\n\n**Check** at $a=b=c=1$: the left side is $3\\cdot3-1=8$, the right side $2\\cdot2\\cdot2=8$ ✓\n\n**A useful consequence.** If $a+b+c=0$ the right side equals $-abc$ (substitute $a+b=-c$ and so on)."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Пусть $x$ — действительное число и $x+\\dfrac1x$ — целое. Докажите, что $x^{n}+\\dfrac1{x^{n}}$ целое при всех натуральных $n$.",
    "en": "Let $x$ be real with $x+\\dfrac1x$ an integer. Prove that $x^{n}+\\dfrac1{x^{n}}$ is an integer for every positive integer $n$."
   },
   "hint": {
    "ru": "Умножьте $x^{n}+x^{-n}$ на $x+x^{-1}$ и посмотрите, что получится.",
    "en": "Multiply $x^{n}+x^{-n}$ by $x+x^{-1}$ and see what comes out."
   },
   "sol": {
    "ru": "Обозначим $$s_n=x^{n}+\\frac1{x^{n}},\\qquad s_0=2,\\qquad s_1=x+\\frac1x\\in\\mathbb{Z} .$$\n\n**Ключевое соотношение.** Перемножим: $$s_n\\cdot s_1=\\left(x^{n}+\\frac1{x^{n}}\\right)\\left(x+\\frac1x\\right)=x^{n+1}+x^{n-1}+\\frac1{x^{n-1}}+\\frac1{x^{n+1}}=s_{n+1}+s_{n-1} .$$\n\nОтсюда $$s_{n+1}=s_1\\,s_n-s_{n-1} .$$\n\n**Индукция.** База: $s_0=2$ и $s_1$ целые. Переход: если $s_{n-1}$ и $s_n$ целые, то и $s_{n+1}=s_1s_n-s_{n-1}$ целое как разность произведений целых чисел.\n\nЗначит все $s_n$ целые. $\\blacksquare$\n\n**Пример.** Пусть $x+\\tfrac1x=3$. Тогда $$s_2=3\\cdot3-2=7,\\qquad s_3=3\\cdot7-3=18,\\qquad s_4=3\\cdot18-7=47 .$$",
    "en": "Write $$s_n=x^{n}+\\frac1{x^{n}},\\qquad s_0=2,\\qquad s_1=x+\\frac1x\\in\\mathbb{Z} .$$\n\n**The key relation.** Multiply: $$s_n\\cdot s_1=\\left(x^{n}+\\frac1{x^{n}}\\right)\\left(x+\\frac1x\\right)=x^{n+1}+x^{n-1}+\\frac1{x^{n-1}}+\\frac1{x^{n+1}}=s_{n+1}+s_{n-1} .$$\n\nHence $$s_{n+1}=s_1\\,s_n-s_{n-1} .$$\n\n**Induction.** Base: $s_0=2$ and $s_1$ are integers. Step: if $s_{n-1}$ and $s_n$ are integers, so is $s_{n+1}=s_1s_n-s_{n-1}$, being a difference of products of integers.\n\nSo every $s_n$ is an integer. $\\blacksquare$\n\n**Example.** Suppose $x+\\tfrac1x=3$. Then $$s_2=3\\cdot3-2=7,\\qquad s_3=3\\cdot7-3=18,\\qquad s_4=3\\cdot18-7=47 .$$"
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что $n^{5}+n^{4}+1$ составное при любом целом $n>1$.",
    "en": "Prove that $n^{5}+n^{4}+1$ is composite for every integer $n>1$."
   },
   "hint": {
    "ru": "Множитель $n^{2}+n+1$ здесь тоже есть.",
    "en": "The factor $n^{2}+n+1$ is hiding here too."
   },
   "sol": {
    "ru": "Проверим разложение: $$\\left(n^{2}+n+1\\right)\\left(n^{3}-n+1\\right)=n^{5}-n^{3}+n^{2}+n^{4}-n^{2}+n+n^{3}-n+1 .$$\n\nСлагаемые $\\mp n^{3}$, $\\pm n^{2}$ и $\\pm n$ попарно уничтожаются, остаётся $$n^{5}+n^{4}+1 . \\qquad\\checkmark$$\n\nОсталось убедиться, что при $n\\ge2$ оба множителя больше единицы: $$n^{2}+n+1\\ge4+2+1=7>1 ,$$ $$n^{3}-n+1=n\\left(n^{2}-1\\right)+1\\ge2\\cdot3+1=7>1 .$$\n\nЗначит число раскладывается в произведение двух множителей, больших единицы, то есть составное. $\\blacksquare$\n\n**Проверка** при $n=2$: $32+16+1=49=7\\cdot7$ ✓ При $n=3$: $243+81+1=325=13\\cdot25$ ✓",
    "en": "Check the factorisation: $$\\left(n^{2}+n+1\\right)\\left(n^{3}-n+1\\right)=n^{5}-n^{3}+n^{2}+n^{4}-n^{2}+n+n^{3}-n+1 .$$\n\nThe terms $\\mp n^{3}$, $\\pm n^{2}$ and $\\pm n$ cancel in pairs, leaving $$n^{5}+n^{4}+1 . \\qquad\\checkmark$$\n\nIt remains to see both factors exceed one for $n\\ge2$: $$n^{2}+n+1\\ge4+2+1=7>1 ,$$ $$n^{3}-n+1=n\\left(n^{2}-1\\right)+1\\ge2\\cdot3+1=7>1 .$$\n\nSo the number splits into two factors greater than one — it is composite. $\\blacksquare$\n\n**Check** at $n=2$: $32+16+1=49=7\\cdot7$ ✓ At $n=3$: $243+81+1=325=13\\cdot25$ ✓"
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что при $x\\ne1$ $$(1+x)\\left(1+x^{2}\\right)\\left(1+x^{4}\\right)\\left(1+x^{8}\\right)=\\frac{1-x^{16}}{1-x} ,$$ и вычислите $3\\cdot5\\cdot17\\cdot257$.",
    "en": "Prove that for $x\\ne1$ $$(1+x)\\left(1+x^{2}\\right)\\left(1+x^{4}\\right)\\left(1+x^{8}\\right)=\\frac{1-x^{16}}{1-x} ,$$ and compute $3\\cdot5\\cdot17\\cdot257$."
   },
   "hint": {
    "ru": "Домножьте левую часть на $1-x$ и применяйте разность квадратов раз за разом.",
    "en": "Multiply the left side by $1-x$ and apply the difference of squares again and again."
   },
   "sol": {
    "ru": "**Тождество.** Домножим левую часть на $1-x$ и будем сворачивать: $$(1-x)(1+x)=1-x^{2};$$ $$\\left(1-x^{2}\\right)\\left(1+x^{2}\\right)=1-x^{4};$$ $$\\left(1-x^{4}\\right)\\left(1+x^{4}\\right)=1-x^{8};$$ $$\\left(1-x^{8}\\right)\\left(1+x^{8}\\right)=1-x^{16} .$$\n\nЗначит $$(1-x)\\cdot(1+x)\\left(1+x^{2}\\right)\\left(1+x^{4}\\right)\\left(1+x^{8}\\right)=1-x^{16} ,$$ и при $x\\ne1$ можно поделить на $1-x$ ✓\n\n**Вычисление.** Подставим $x=2$: $$3\\cdot5\\cdot17\\cdot257=(1+2)\\left(1+2^{2}\\right)\\left(1+2^{4}\\right)\\left(1+2^{8}\\right)=\\frac{1-2^{16}}{1-2}=2^{16}-1 .$$\n\n**Ответ:** $2^{16}-1=65535$.\n\n**Проверка:** $3\\cdot5=15$, $15\\cdot17=255$, $255\\cdot257=65535$ ✓",
    "en": "**The identity.** Multiply the left side by $1-x$ and collapse it step by step: $$(1-x)(1+x)=1-x^{2};$$ $$\\left(1-x^{2}\\right)\\left(1+x^{2}\\right)=1-x^{4};$$ $$\\left(1-x^{4}\\right)\\left(1+x^{4}\\right)=1-x^{8};$$ $$\\left(1-x^{8}\\right)\\left(1+x^{8}\\right)=1-x^{16} .$$\n\nSo $$(1-x)\\cdot(1+x)\\left(1+x^{2}\\right)\\left(1+x^{4}\\right)\\left(1+x^{8}\\right)=1-x^{16} ,$$ and for $x\\ne1$ we may divide by $1-x$ ✓\n\n**The computation.** Put $x=2$: $$3\\cdot5\\cdot17\\cdot257=(1+2)\\left(1+2^{2}\\right)\\left(1+2^{4}\\right)\\left(1+2^{8}\\right)=\\frac{1-2^{16}}{1-2}=2^{16}-1 .$$\n\n**Answer:** $2^{16}-1=65535$.\n\n**Check:** $3\\cdot5=15$, $15\\cdot17=255$, $255\\cdot257=65535$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Числа $a,b,c$ отличны от нуля и $a+b+c=0$. Докажите, что $$\\frac{a^{2}}{2a^{2}+bc}+\\frac{b^{2}}{2b^{2}+ca}+\\frac{c^{2}}{2c^{2}+ab}=1 .$$",
    "en": "Non-zero numbers $a,b,c$ satisfy $a+b+c=0$. Prove that $$\\frac{a^{2}}{2a^{2}+bc}+\\frac{b^{2}}{2b^{2}+ca}+\\frac{c^{2}}{2c^{2}+ab}=1 .$$"
   },
   "hint": {
    "ru": "Подставьте $c=-a-b$ в знаменатель и разложите его на множители.",
    "en": "Substitute $c=-a-b$ into a denominator and factor it."
   },
   "sol": {
    "ru": "**Шаг 1: разложим знаменатель.** Так как $c=-a-b$, $$2a^{2}+bc=2a^{2}+b(-a-b)=2a^{2}-ab-b^{2}=(a-b)(2a+b).$$ А поскольку $2a+b=a+(a+b)=a-c$, получаем красивую форму $$2a^{2}+bc=(a-b)(a-c).$$ Аналогично $$2b^{2}+ca=(b-a)(b-c),\\qquad 2c^{2}+ab=(c-a)(c-b).$$\n\n**Шаг 2: сложим дроби.** Сумма принимает вид $$S=\\frac{a^{2}}{(a-b)(a-c)}+\\frac{b^{2}}{(b-a)(b-c)}+\\frac{c^{2}}{(c-a)(c-b)} .$$\n\nПриведём к общему знаменателю $(a-b)(b-c)(c-a)$. Учитывая знаки, числитель равен $$-a^{2}(b-c)-b^{2}(c-a)-c^{2}(a-b).$$\n\n**Шаг 3: раскроем числитель.** $$a^{2}(b-c)+b^{2}(c-a)+c^{2}(a-b)=-(a-b)(b-c)(c-a)$$ — это известное тождество; проверяется прямым раскрытием обеих частей.\n\nЗначит числитель равен $(a-b)(b-c)(c-a)$, и после сокращения $$S=1 . \\qquad\\blacksquare$$\n\n**Проверка** на конкретных числах $a=1$, $b=1$, $c=-2$: $$\\frac{1}{2-2}\\ \\text{—}$$ здесь знаменатель обращается в нуль, поэтому возьмём $a=1$, $b=2$, $c=-3$: $$\\frac{1}{2-6}+\\frac{4}{8-3}+\\frac{9}{18+2}=-\\frac14+\\frac45+\\frac9{20}=\\frac{-5+16+9}{20}=1 \\quad\\checkmark$$\n\n**Замечание.** Условие «все числа различны» нужно, чтобы знаменатели не обращались в нуль.",
    "en": "**Step 1: factor a denominator.** Since $c=-a-b$, $$2a^{2}+bc=2a^{2}+b(-a-b)=2a^{2}-ab-b^{2}=(a-b)(2a+b).$$ And as $2a+b=a+(a+b)=a-c$, this takes the pretty form $$2a^{2}+bc=(a-b)(a-c).$$ Similarly $$2b^{2}+ca=(b-a)(b-c),\\qquad 2c^{2}+ab=(c-a)(c-b).$$\n\n**Step 2: add the fractions.** The sum becomes $$S=\\frac{a^{2}}{(a-b)(a-c)}+\\frac{b^{2}}{(b-a)(b-c)}+\\frac{c^{2}}{(c-a)(c-b)} .$$\n\nPut everything over $(a-b)(b-c)(c-a)$. Watching the signs, the numerator is $$-a^{2}(b-c)-b^{2}(c-a)-c^{2}(a-b).$$\n\n**Step 3: expand the numerator.** $$a^{2}(b-c)+b^{2}(c-a)+c^{2}(a-b)=-(a-b)(b-c)(c-a)$$ — a standard identity, verified by expanding both sides.\n\nSo the numerator equals $(a-b)(b-c)(c-a)$, and after cancelling $$S=1 . \\qquad\\blacksquare$$\n\n**Check** with concrete numbers: $a=1$, $b=2$, $c=-3$ gives $$\\frac{1}{2-6}+\\frac{4}{8-3}+\\frac{9}{18+2}=-\\frac14+\\frac45+\\frac9{20}=\\frac{-5+16+9}{20}=1 \\quad\\checkmark$$\n\n**Remark.** The numbers must be pairwise distinct, or a denominator vanishes."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Пусть $a+b+c=0$. Докажите, что $$\\frac{a^{7}+b^{7}+c^{7}}{7}=\\frac{a^{2}+b^{2}+c^{2}}{2}\\cdot\\frac{a^{5}+b^{5}+c^{5}}{5} .$$",
    "en": "Let $a+b+c=0$. Prove that $$\\frac{a^{7}+b^{7}+c^{7}}{7}=\\frac{a^{2}+b^{2}+c^{2}}{2}\\cdot\\frac{a^{5}+b^{5}+c^{5}}{5} .$$"
   },
   "hint": {
    "ru": "Обозначьте $q=ab+bc+ca$, $r=abc$ и получите рекуррентность $p_{n}=-q\\,p_{n-2}+r\\,p_{n-3}$.",
    "en": "Set $q=ab+bc+ca$, $r=abc$ and derive the recursion $p_{n}=-q\\,p_{n-2}+r\\,p_{n-3}$."
   },
   "sol": {
    "ru": "Обозначим степенные суммы $p_n=a^{n}+b^{n}+c^{n}$ и элементарные симметрические функции $$e_1=a+b+c=0,\\qquad e_2=ab+bc+ca=q,\\qquad e_3=abc=r .$$\n\n**Рекуррентность.** Числа $a,b,c$ — корни многочлена $$t^{3}-e_1t^{2}+e_2t-e_3=t^{3}+qt-r ,$$ значит для каждого из них $t^{3}=-qt+r$. Умножая на $t^{\\,n-3}$ и складывая по трём корням, получаем $$p_n=-q\\,p_{n-2}+r\\,p_{n-3},\\qquad n\\ge3 .$$\n\n**Считаем по очереди.** Начальные значения: $$p_0=3,\\qquad p_1=0,\\qquad p_2=e_1^{2}-2e_2=-2q .$$ Далее $$p_3=-q\\,p_1+r\\,p_0=3r ;$$ $$p_4=-q\\,p_2+r\\,p_1=2q^{2} ;$$ $$p_5=-q\\,p_3+r\\,p_2=-3qr-2qr=-5qr ;$$ $$p_6=-q\\,p_4+r\\,p_3=-2q^{3}+3r^{2} ;$$ $$p_7=-q\\,p_5+r\\,p_4=5q^{2}r+2q^{2}r=7q^{2}r .$$\n\n**Сравниваем.** $$\\frac{p_7}{7}=q^{2}r ,\\qquad \\frac{p_2}{2}\\cdot\\frac{p_5}{5}=\\frac{-2q}{2}\\cdot\\frac{-5qr}{5}=(-q)(-qr)=q^{2}r . \\qquad\\blacksquare$$\n\n**Проверка** на $a=1$, $b=1$, $c=-2$: $$p_7=1+1-128=-126,\\qquad p_2=6,\\qquad p_5=1+1-32=-30 ,$$ и $$\\frac{-126}{7}=-18,\\qquad \\frac62\\cdot\\frac{-30}{5}=3\\cdot(-6)=-18 \\quad\\checkmark$$",
    "en": "Write the power sums $p_n=a^{n}+b^{n}+c^{n}$ and the elementary symmetric functions $$e_1=a+b+c=0,\\qquad e_2=ab+bc+ca=q,\\qquad e_3=abc=r .$$\n\n**The recursion.** The numbers $a,b,c$ are the roots of $$t^{3}-e_1t^{2}+e_2t-e_3=t^{3}+qt-r ,$$ so each satisfies $t^{3}=-qt+r$. Multiplying by $t^{\\,n-3}$ and summing over the three roots, $$p_n=-q\\,p_{n-2}+r\\,p_{n-3},\\qquad n\\ge3 .$$\n\n**Compute in turn.** The initial values are $$p_0=3,\\qquad p_1=0,\\qquad p_2=e_1^{2}-2e_2=-2q .$$ Then $$p_3=-q\\,p_1+r\\,p_0=3r ;$$ $$p_4=-q\\,p_2+r\\,p_1=2q^{2} ;$$ $$p_5=-q\\,p_3+r\\,p_2=-3qr-2qr=-5qr ;$$ $$p_6=-q\\,p_4+r\\,p_3=-2q^{3}+3r^{2} ;$$ $$p_7=-q\\,p_5+r\\,p_4=5q^{2}r+2q^{2}r=7q^{2}r .$$\n\n**Compare.** $$\\frac{p_7}{7}=q^{2}r ,\\qquad \\frac{p_2}{2}\\cdot\\frac{p_5}{5}=\\frac{-2q}{2}\\cdot\\frac{-5qr}{5}=(-q)(-qr)=q^{2}r . \\qquad\\blacksquare$$\n\n**Check** with $a=1$, $b=1$, $c=-2$: $$p_7=1+1-128=-126,\\qquad p_2=6,\\qquad p_5=1+1-32=-30 ,$$ and $$\\frac{-126}{7}=-18,\\qquad \\frac62\\cdot\\frac{-30}{5}=3\\cdot(-6)=-18 \\quad\\checkmark$$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите тождество Лагранжа для трёх пар чисел $$\\left(a_1^{2}+a_2^{2}+a_3^{2}\\right)\\left(b_1^{2}+b_2^{2}+b_3^{2}\\right)-\\left(a_1b_1+a_2b_2+a_3b_3\\right)^{2}=\\sum_{i<j}\\left(a_ib_j-a_jb_i\\right)^{2}$$ и выведите из него неравенство Коши — Буняковского.",
    "en": "Prove Lagrange’s identity for three pairs $$\\left(a_1^{2}+a_2^{2}+a_3^{2}\\right)\\left(b_1^{2}+b_2^{2}+b_3^{2}\\right)-\\left(a_1b_1+a_2b_2+a_3b_3\\right)^{2}=\\sum_{i<j}\\left(a_ib_j-a_jb_i\\right)^{2}$$ and deduce the Cauchy–Schwarz inequality."
   },
   "hint": {
    "ru": "Раскройте обе части и сравните одинаковые слагаемые.",
    "en": "Expand both sides and match terms."
   },
   "sol": {
    "ru": "**Левая часть.** Произведение сумм даёт девять слагаемых: $$\\sum_{i,j}a_i^{2}b_j^{2} ,$$ а квадрат скалярного произведения — $$\\sum_i a_i^{2}b_i^{2}+2\\sum_{i<j}a_ib_ia_jb_j .$$\n\nВычитая, «диагональные» члены $a_i^{2}b_i^{2}$ уничтожаются, и остаётся $$\\sum_{i\\ne j}a_i^{2}b_j^{2}-2\\sum_{i<j}a_ib_ia_jb_j=\\sum_{i<j}\\left(a_i^{2}b_j^{2}+a_j^{2}b_i^{2}-2a_ib_ja_jb_i\\right).$$\n\n**Правая часть.** Каждое слагаемое: $$\\left(a_ib_j-a_jb_i\\right)^{2}=a_i^{2}b_j^{2}-2a_ib_ja_jb_i+a_j^{2}b_i^{2} $$ — в точности то же самое ✓ $\\blacksquare$\n\n**Неравенство Коши — Буняковского.** Правая часть — сумма квадратов, значит она неотрицательна, откуда $$\\left(a_1b_1+a_2b_2+a_3b_3\\right)^{2}\\ \\le\\ \\left(a_1^{2}+a_2^{2}+a_3^{2}\\right)\\left(b_1^{2}+b_2^{2}+b_3^{2}\\right).$$\n\n**Когда равенство?** Только если все разности $a_ib_j-a_jb_i$ равны нулю, то есть векторы $(a_1,a_2,a_3)$ и $(b_1,b_2,b_3)$ пропорциональны.\n\n**Пример.** $a=(1,2,2)$, $b=(2,1,2)$: слева $(2+2+4)^{2}=64$, справа $9\\cdot9=81$, а разность $$\\left(1\\cdot1-2\\cdot2\\right)^{2}+\\left(1\\cdot2-2\\cdot2\\right)^{2}+\\left(2\\cdot2-2\\cdot1\\right)^{2}=9+4+4=17=81-64 \\quad\\checkmark$$",
    "en": "**Left side.** The product of the sums gives nine terms $$\\sum_{i,j}a_i^{2}b_j^{2} ,$$ while the square of the dot product is $$\\sum_i a_i^{2}b_i^{2}+2\\sum_{i<j}a_ib_ia_jb_j .$$\n\nSubtracting, the diagonal terms $a_i^{2}b_i^{2}$ cancel and what remains is $$\\sum_{i\\ne j}a_i^{2}b_j^{2}-2\\sum_{i<j}a_ib_ia_jb_j=\\sum_{i<j}\\left(a_i^{2}b_j^{2}+a_j^{2}b_i^{2}-2a_ib_ja_jb_i\\right).$$\n\n**Right side.** Each term is $$\\left(a_ib_j-a_jb_i\\right)^{2}=a_i^{2}b_j^{2}-2a_ib_ja_jb_i+a_j^{2}b_i^{2} $$ — exactly the same ✓ $\\blacksquare$\n\n**Cauchy–Schwarz.** The right side is a sum of squares, hence non-negative, so $$\\left(a_1b_1+a_2b_2+a_3b_3\\right)^{2}\\ \\le\\ \\left(a_1^{2}+a_2^{2}+a_3^{2}\\right)\\left(b_1^{2}+b_2^{2}+b_3^{2}\\right).$$\n\n**Equality?** Only when every difference $a_ib_j-a_jb_i$ vanishes, i.e. the vectors $(a_1,a_2,a_3)$ and $(b_1,b_2,b_3)$ are proportional.\n\n**Example.** $a=(1,2,2)$, $b=(2,1,2)$: the left side is $(2+2+4)^{2}=64$, the right $9\\cdot9=81$, and the gap is $$\\left(1\\cdot1-2\\cdot2\\right)^{2}+\\left(1\\cdot2-2\\cdot2\\right)^{2}+\\left(2\\cdot2-2\\cdot1\\right)^{2}=9+4+4=17=81-64 \\quad\\checkmark$$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Действительные числа $a,b,c$ удовлетворяют равенству $a^{3}+b^{3}+c^{3}=3abc$. Докажите, что либо $a+b+c=0$, либо $a=b=c$.",
    "en": "Real numbers $a,b,c$ satisfy $a^{3}+b^{3}+c^{3}=3abc$. Prove that either $a+b+c=0$ or $a=b=c$."
   },
   "hint": {
    "ru": "Воспользуйтесь разложением $a^{3}+b^{3}+c^{3}-3abc$.",
    "en": "Use the factorisation of $a^{3}+b^{3}+c^{3}-3abc$."
   },
   "sol": {
    "ru": "Известное разложение: $$a^{3}+b^{3}+c^{3}-3abc=(a+b+c)\\left(a^{2}+b^{2}+c^{2}-ab-bc-ca\\right).$$\n\nПо условию левая часть равна нулю, значит нулю равен один из множителей.\n\n**Первый случай:** $a+b+c=0$ — это первая из двух возможностей ✓\n\n**Второй случай:** $$a^{2}+b^{2}+c^{2}-ab-bc-ca=0 .$$ По уже доказанному тождеству это выражение равно $$\\tfrac12\\left[(a-b)^{2}+(b-c)^{2}+(c-a)^{2}\\right],$$ то есть половине суммы трёх квадратов. Сумма квадратов действительных чисел равна нулю только если каждый квадрат нулевой, значит $$a=b,\\quad b=c,\\quad c=a\\quad\\Longrightarrow\\quad a=b=c \\quad\\checkmark$$\n\n$\\blacksquare$\n\n**Примеры.** $(1,2,-3)$: $1+8-27=-18$ и $3\\cdot1\\cdot2\\cdot(-3)=-18$ ✓ (здесь сумма нулевая). $(2,2,2)$: $24=24$ ✓ (здесь все равны).\n\n**Замечание.** Для комплексных чисел вывод другой: второй множитель может обращаться в нуль и при неравных $a,b,c$.",
    "en": "The standard factorisation: $$a^{3}+b^{3}+c^{3}-3abc=(a+b+c)\\left(a^{2}+b^{2}+c^{2}-ab-bc-ca\\right).$$\n\nBy hypothesis the left side is zero, so one of the factors vanishes.\n\n**First case:** $a+b+c=0$ — the first alternative ✓\n\n**Second case:** $$a^{2}+b^{2}+c^{2}-ab-bc-ca=0 .$$ By the identity proved earlier this equals $$\\tfrac12\\left[(a-b)^{2}+(b-c)^{2}+(c-a)^{2}\\right],$$ half a sum of three squares. A sum of squares of real numbers vanishes only if each square does, so $$a=b,\\quad b=c,\\quad c=a\\quad\\Longrightarrow\\quad a=b=c \\quad\\checkmark$$\n\n$\\blacksquare$\n\n**Examples.** $(1,2,-3)$: $1+8-27=-18$ and $3\\cdot1\\cdot2\\cdot(-3)=-18$ ✓ (here the sum is zero). $(2,2,2)$: $24=24$ ✓ (here all are equal).\n\n**Remark.** Over the complex numbers the conclusion changes: the second factor can vanish with $a,b,c$ distinct."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите тождество $$x^{4}+y^{4}+(x+y)^{4}=2\\left(x^{2}+xy+y^{2}\\right)^{2}.$$",
    "en": "Prove the identity $$x^{4}+y^{4}+(x+y)^{4}=2\\left(x^{2}+xy+y^{2}\\right)^{2}.$$"
   },
   "hint": {
    "ru": "Раскройте обе части по степеням $x$.",
    "en": "Expand both sides in powers of $x$."
   },
   "sol": {
    "ru": "**Левая часть.** Раскроем четвёртую степень суммы: $$(x+y)^{4}=x^{4}+4x^{3}y+6x^{2}y^{2}+4xy^{3}+y^{4} .$$ Значит $$x^{4}+y^{4}+(x+y)^{4}=2x^{4}+4x^{3}y+6x^{2}y^{2}+4xy^{3}+2y^{4} .$$\n\n**Правая часть.** Обозначим $u=x^{2}+xy+y^{2}$ и возведём в квадрат: $$u^{2}=x^{4}+x^{2}y^{2}+y^{4}+2x^{3}y+2x^{2}y^{2}+2xy^{3}=x^{4}+2x^{3}y+3x^{2}y^{2}+2xy^{3}+y^{4} .$$\n\nУдваивая: $$2u^{2}=2x^{4}+4x^{3}y+6x^{2}y^{2}+4xy^{3}+2y^{4} $$ — совпало ✓ $\\blacksquare$\n\n**Проверка** при $x=1$, $y=2$: слева $1+16+81=98$, справа $2\\cdot(1+2+4)^{2}=2\\cdot49=98$ ✓\n\n**Следствие.** Сумма $x^{4}+y^{4}+(x+y)^{4}$ всегда вдвое больше полного квадрата; в частности, она никогда не бывает простым числом при целых $x,y$, кроме вырожденных случаев.",
    "en": "**Left side.** Expand the fourth power of a sum: $$(x+y)^{4}=x^{4}+4x^{3}y+6x^{2}y^{2}+4xy^{3}+y^{4} .$$ Hence $$x^{4}+y^{4}+(x+y)^{4}=2x^{4}+4x^{3}y+6x^{2}y^{2}+4xy^{3}+2y^{4} .$$\n\n**Right side.** Put $u=x^{2}+xy+y^{2}$ and square: $$u^{2}=x^{4}+x^{2}y^{2}+y^{4}+2x^{3}y+2x^{2}y^{2}+2xy^{3}=x^{4}+2x^{3}y+3x^{2}y^{2}+2xy^{3}+y^{4} .$$\n\nDoubling: $$2u^{2}=2x^{4}+4x^{3}y+6x^{2}y^{2}+4xy^{3}+2y^{4} $$ — the same ✓ $\\blacksquare$\n\n**Check** at $x=1$, $y=2$: the left side is $1+16+81=98$, the right $2\\cdot(1+2+4)^{2}=2\\cdot49=98$ ✓\n\n**Consequence.** The sum $x^{4}+y^{4}+(x+y)^{4}$ is always twice a perfect square; in particular, for integer $x,y$ it is never prime except in degenerate cases."
   }
  }
 ]
};
