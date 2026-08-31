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
  }
 ]
};
