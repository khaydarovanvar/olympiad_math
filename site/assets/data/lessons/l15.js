/* Topic 15 — generated from content/lesson_15.py, do not edit by hand. */
window.LESSONS = window.LESSONS || {};
window.LESSONS[15] = {
 "n": 15,
 "cat": "comb",
 "title": {
  "ru": "Логика, доказательства и инварианты",
  "en": "Logic, proofs and invariants"
 },
 "sub": {
  "ru": "Отрицание и импликация, доказательство от противного, индукция, инварианты и раскраски — язык, на котором пишут решения.",
  "en": "Negation and implication, proof by contradiction, induction, invariants and colourings — the language solutions are written in."
 },
 "goals": {
  "ru": [
   "Строить отрицание утверждения и отличать обратное от противоположного.",
   "Проводить доказательство от противного и доказательство по индукции без пробелов.",
   "Находить инвариант — величину, не меняющуюся при разрешённых операциях.",
   "Пользоваться раскрасками и соображениями чётности."
  ],
  "en": [
   "Negate a statement, and tell the converse from the contrapositive.",
   "Run a proof by contradiction and a proof by induction with no gaps.",
   "Find an invariant — a quantity unchanged by the allowed moves.",
   "Use colourings and parity arguments."
  ]
 },
 "sections": [
  {
   "h": {
    "ru": "Язык утверждений",
    "en": "The language of statements"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Прежде чем что-то доказывать, надо точно понимать, **что именно** доказывается. Половина ошибок на олимпиадах — не в вычислениях, а в неверно понятом или неверно отрицаемом условии.",
      "en": "Before proving anything one must know exactly **what** is being proved. Half the mistakes in competitions are not in the computation but in a misread or mis-negated statement."
     }
    },
    {
     "t": "def",
     "name": {
      "ru": "Импликация",
      "en": "Implication"
     },
     "text": {
      "ru": "Запись $A\\Rightarrow B$ («если $A$, то $B$») означает: **всякий раз, когда** верно $A$, верно и $B$. Она ничего не говорит о случаях, когда $A$ ложно.",
      "en": "The statement $A\\Rightarrow B$ (\"if $A$ then $B$\") means: **whenever** $A$ holds, $B$ holds too. It says nothing about the cases where $A$ is false."
     }
    },
    {
     "t": "table",
     "head": {
      "ru": [
       "Название",
       "Запись",
       "Пример"
      ],
      "en": [
       "Name",
       "Form",
       "Example"
      ]
     },
     "rows": {
      "ru": [
       [
        "исходное",
        "$A\\Rightarrow B$",
        "если $n$ делится на $6$, то $n$ чётно — **верно**"
       ],
       [
        "обратное",
        "$B\\Rightarrow A$",
        "если $n$ чётно, то $n$ делится на $6$ — **неверно**"
       ],
       [
        "противоположное",
        "$\\lnot A\\Rightarrow\\lnot B$",
        "если $n$ не делится на $6$, то $n$ нечётно — **неверно**"
       ],
       [
        "контрапозиция",
        "$\\lnot B\\Rightarrow\\lnot A$",
        "если $n$ нечётно, то $n$ не делится на $6$ — **верно**"
       ]
      ],
      "en": [
       [
        "the statement",
        "$A\\Rightarrow B$",
        "if $n$ is divisible by $6$ then $n$ is even — **true**"
       ],
       [
        "the converse",
        "$B\\Rightarrow A$",
        "if $n$ is even then $n$ is divisible by $6$ — **false**"
       ],
       [
        "the inverse",
        "$\\lnot A\\Rightarrow\\lnot B$",
        "if $n$ is not divisible by $6$ then $n$ is odd — **false**"
       ],
       [
        "the contrapositive",
        "$\\lnot B\\Rightarrow\\lnot A$",
        "if $n$ is odd then $n$ is not divisible by $6$ — **true**"
       ]
      ]
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Контрапозиция всегда равносильна",
      "en": "The contrapositive is always equivalent"
     },
     "text": {
      "ru": "Утверждение $A\\Rightarrow B$ и его контрапозиция $\\lnot B\\Rightarrow\\lnot A$ — это **одно и то же** утверждение, записанное по-разному. Обратное же и противоположное — совсем другие утверждения, и из исходного они не следуют.\n\nЭто рабочий приём: если доказать $A\\Rightarrow B$ трудно, попробуйте доказать $\\lnot B\\Rightarrow\\lnot A$. Например, «если $n^{2}$ чётно, то $n$ чётно» неудобно доказывать напрямую, зато контрапозиция «если $n$ нечётно, то $n^{2}$ нечётно» очевидна: $(2k+1)^{2}=4k^{2}+4k+1$.",
      "en": "A statement $A\\Rightarrow B$ and its contrapositive $\\lnot B\\Rightarrow\\lnot A$ are **the same** statement written differently. The converse and the inverse are quite different statements and do not follow from the original.\n\nThis is a working technique: when $A\\Rightarrow B$ is hard, try proving $\\lnot B\\Rightarrow\\lnot A$. For instance \"if $n^{2}$ is even then $n$ is even\" is awkward directly, while the contrapositive \"if $n$ is odd then $n^{2}$ is odd\" is obvious: $(2k+1)^{2}=4k^{2}+4k+1$."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Правила отрицания",
      "en": "The rules of negation"
     },
     "text": {
      "ru": "$$\\lnot\\bigl(A\\ \\text{и}\\ B\\bigr)=\\lnot A\\ \\text{или}\\ \\lnot B,\\qquad \\lnot\\bigl(A\\ \\text{или}\\ B\\bigr)=\\lnot A\\ \\text{и}\\ \\lnot B .$$ Для кванторов: отрицание «для всех $x$ верно $P(x)$» — это «существует $x$, для которого $P(x)$ неверно», и наоборот.",
      "en": "$$\\lnot\\bigl(A\\ \\text{and}\\ B\\bigr)=\\lnot A\\ \\text{or}\\ \\lnot B,\\qquad \\lnot\\bigl(A\\ \\text{or}\\ B\\bigr)=\\lnot A\\ \\text{and}\\ \\lnot B .$$ For quantifiers: the negation of \"for every $x$, $P(x)$ holds\" is \"there exists an $x$ for which $P(x)$ fails\", and back."
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Отрицание утверждения «**все** числа набора чётные» — это **не** «все числа набора нечётные», а «**хотя бы одно** число набора нечётно». Отрицание «квантор всеобщности» превращает в «квантор существования», а не в утверждение о противоположном свойстве для всех. Эту ошибку делают чаще всего.",
      "en": "The negation of \"**all** the numbers are even\" is **not** \"all the numbers are odd\", but \"**at least one** number is odd\". Negation turns a universal quantifier into an existential one, not into the opposite property for everything. This is the commonest slip of all."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Доказательство от противного",
    "en": "Proof by contradiction"
   },
   "blocks": [
    {
     "t": "idea",
     "text": {
      "ru": "Схема такая:\n\n**1)** предположим, что доказываемое утверждение **неверно**;\n**2)** аккуратно выведем из этого предположения какое-нибудь заведомо ложное утверждение;\n**3)** значит предположение было ложным, а исходное утверждение верно.\n\nШаг **1** требует правильного отрицания — вот зачем нужен предыдущий раздел.",
      "en": "The pattern is:\n\n**1)** suppose the statement is **false**;\n**2)** derive from that supposition something plainly false;\n**3)** hence the supposition was false and the statement true.\n\nStep **1** needs the negation done correctly — which is what the previous section was for."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Докажите, что $\\sqrt2$ — иррациональное число.",
      "en": "Prove that $\\sqrt2$ is irrational."
     },
     "steps": {
      "ru": [
       "**Предположим противное:** $\\sqrt2$ рационально, то есть $\\sqrt2=\\dfrac mn$, где $m,n$ — целые, $n\\ne0$, и дробь **несократима** (общие множители мы сократили заранее).",
       "Возведём в квадрат: $2=\\dfrac{m^{2}}{n^{2}}$, то есть $m^{2}=2n^{2}$.",
       "Значит $m^{2}$ чётно. Но квадрат нечётного нечётен, поэтому $m$ чётно: $m=2k$.",
       "Подставим: $4k^{2}=2n^{2}$, то есть $n^{2}=2k^{2}$. Значит и $n^{2}$ чётно, и по той же причине $n$ чётно.",
       "Итак, $m$ и $n$ оба чётны — но мы предполагали дробь несократимой. Противоречие.",
       "Значит предположение неверно: $\\sqrt2$ иррационально."
      ],
      "en": [
       "**Suppose the opposite:** $\\sqrt2$ is rational, that is $\\sqrt2=\\dfrac mn$ with $m,n$ integers, $n\\ne0$, and the fraction **in lowest terms** (common factors already cancelled).",
       "Square it: $2=\\dfrac{m^{2}}{n^{2}}$, that is $m^{2}=2n^{2}$.",
       "So $m^{2}$ is even. But the square of an odd number is odd, hence $m$ is even: $m=2k$.",
       "Substitute: $4k^{2}=2n^{2}$, that is $n^{2}=2k^{2}$. So $n^{2}$ is even and, for the same reason, so is $n$.",
       "Thus $m$ and $n$ are both even — contradicting the fraction being in lowest terms.",
       "So the supposition fails and $\\sqrt2$ is irrational."
      ]
     },
     "ans": {
      "ru": "$\\sqrt2$ иррационально. $\\blacksquare$",
      "en": "$\\sqrt2$ is irrational. $\\blacksquare$"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Обратите внимание, где именно возникло противоречие: не в вычислениях, а в **условии несократимости**, которое мы сами и наложили. Это типично: полезно с самого начала выбрать «минимальный» или «несократимый» вариант — тогда противоречие приходит быстрее. По сути это тот же бесконечный спуск из темы о диофантовых уравнениях.",
      "en": "Notice where the contradiction arose: not in the arithmetic but in the **lowest-terms condition** we imposed ourselves. That is typical: choosing a \"minimal\" or \"reduced\" version at the start makes the contradiction come faster. In essence this is the infinite descent from the Diophantine topic."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Математическая индукция",
    "en": "Mathematical induction"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Принцип индукции",
      "en": "The principle of induction"
     },
     "text": {
      "ru": "Пусть утверждение $P(n)$ сформулировано для всех натуральных $n\\ge n_0$. Если\n\n**(база)** $P\\left(n_0\\right)$ верно, и\n\n**(переход)** из $P(n)$ следует $P(n+1)$ при каждом $n\\ge n_0$,\n\nто $P(n)$ верно при всех $n\\ge n_0$.",
      "en": "Let $P(n)$ be a statement for every integer $n\\ge n_0$. If\n\n**(base)** $P\\left(n_0\\right)$ holds, and\n\n**(step)** $P(n)$ implies $P(n+1)$ for every $n\\ge n_0$,\n\nthen $P(n)$ holds for all $n\\ge n_0$."
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Две классические ошибки.\n\n**Пропущена база.** Без неё «доказывается» что угодно: например, из $P(n)$: «$n=n+1$» действительно следует $P(n+1)$, но база ложна, и утверждение неверно.\n\n**Переход проверен не при всех $n$.** Часто рассуждение работает лишь начиная с некоторого $n$; тогда и базу надо брать оттуда же. Проверяйте переход буквально: подставьте $n=n_0$ и убедитесь, что все использованные оценки верны.",
      "en": "Two classic mistakes.\n\n**A missing base.** Without it anything is \"provable\": from $P(n)$: \"$n=n+1$\" the statement $P(n+1)$ really does follow, but the base is false and the claim is false.\n\n**The step not checked for all $n$.** Often the argument only works from some point on; the base must then start there too. Check the step literally: put $n=n_0$ and make sure every estimate used is valid."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Докажите, что $2^{n}>n^{2}$ при всех натуральных $n\\ge5$.",
      "en": "Prove that $2^{n}>n^{2}$ for every integer $n\\ge5$."
     },
     "steps": {
      "ru": [
       "**База $n=5$:** $2^{5}=32>25=5^{2}$ ✓",
       "**Переход.** Пусть $2^{n}>n^{2}$ при некотором $n\\ge5$. Умножим обе части на $2$: $$2^{\\,n+1}>2n^{2}.$$",
       "Достаточно показать, что $2n^{2}\\ge(n+1)^{2}$ при $n\\ge5$.",
       "$$2n^{2}-(n+1)^{2}=n^{2}-2n-1=(n-1)^{2}-2 .$$ При $n\\ge5$ имеем $(n-1)^{2}\\ge16>2$, значит разность положительна.",
       "Соединяя, $2^{\\,n+1}>2n^{2}>(n+1)^{2}$ — утверждение верно и для $n+1$.",
       "*Почему база именно $n=5$:* при $n=2,3,4$ неравенство неверно ($4<4$ — равенство, $8<9$, $16=16$), а при $n=1$ верно, но переход из $n=1$ не проходит."
      ],
      "en": [
       "**Base $n=5$:** $2^{5}=32>25=5^{2}$ ✓",
       "**Step.** Suppose $2^{n}>n^{2}$ for some $n\\ge5$. Multiply by $2$: $$2^{\\,n+1}>2n^{2}.$$",
       "It suffices to show $2n^{2}\\ge(n+1)^{2}$ for $n\\ge5$.",
       "$$2n^{2}-(n+1)^{2}=n^{2}-2n-1=(n-1)^{2}-2 .$$ For $n\\ge5$ we have $(n-1)^{2}\\ge16>2$, so the difference is positive.",
       "Chaining, $2^{\\,n+1}>2n^{2}>(n+1)^{2}$ — the claim holds at $n+1$.",
       "*Why the base is $n=5$:* at $n=2,3,4$ the inequality fails ($4<4$ is equality, $8<9$, $16=16$), and although it holds at $n=1$, the step does not carry from there."
      ]
     },
     "ans": {
      "ru": "$2^{n}>n^{2}$ при всех $n\\ge5$. $\\blacksquare$",
      "en": "$2^{n}>n^{2}$ for all $n\\ge5$. $\\blacksquare$"
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Сильная индукция",
      "en": "Strong induction"
     },
     "text": {
      "ru": "Иногда для доказательства $P(n+1)$ нужно знать $P(k)$ **для всех** $k\\le n$, а не только для $n$. Такая схема тоже законна и называется **сильной индукцией**:\n\nесли $P\\left(n_0\\right)$ верно и из «$P(k)$ верно при всех $n_0\\le k\\le n$» следует $P(n+1)$, то $P(n)$ верно всегда.\n\nПример: каждое натуральное число, большее единицы, представимо в виде произведения простых. Если $n+1$ простое — готово; иначе $n+1=ab$ с $1<a,b\\le n$, и к обоим множителям применяется предположение.",
      "en": "Sometimes proving $P(n+1)$ needs $P(k)$ **for every** $k\\le n$, not just for $n$. That scheme is legitimate too and is called **strong induction**:\n\nif $P\\left(n_0\\right)$ holds and \"$P(k)$ for all $n_0\\le k\\le n$\" implies $P(n+1)$, then $P(n)$ always holds.\n\nAn example: every integer greater than one is a product of primes. If $n+1$ is prime we are done; otherwise $n+1=ab$ with $1<a,b\\le n$, and the hypothesis applies to both factors."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Инварианты",
    "en": "Invariants"
   },
   "blocks": [
    {
     "t": "def",
     "name": {
      "ru": "Инвариант",
      "en": "Invariant"
     },
     "text": {
      "ru": "**Инвариант** — величина (или свойство), которая **не меняется** при каждой разрешённой операции. Если у начального и конечного состояний инвариант различен, то перейти от одного к другому невозможно.",
      "en": "An **invariant** is a quantity (or property) **unchanged** by every allowed move. If the initial and the target states have different invariants, one cannot be reached from the other."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Где искать инвариант",
      "en": "Where to look for one"
     },
     "text": {
      "ru": "Чаще всего инвариантом оказывается одно из следующего:\n\n**чётность** какой-нибудь суммы или количества;\n**остаток** суммы по подходящему модулю;\n**произведение** знаков (если операции меняют знаки);\n**цвет** клетки при удачной раскраске;\n**количество** объектов какого-то типа.\n\nСпособ найти: выпишите, как меняется каждая величина при одной операции, и поищите комбинацию, изменение которой равно нулю.",
      "en": "Most often the invariant is one of these:\n\nthe **parity** of some sum or count;\nthe **remainder** of a sum modulo something suitable;\nthe **product** of signs (when the moves flip signs);\nthe **colour** of a cell under a well-chosen colouring;\nthe **number** of objects of some type.\n\nHow to find it: write down how each quantity changes under one move, and look for a combination whose change is zero."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "На доске написаны числа $1,2,\\dots,10$. За ход стирают любые два числа и записывают вместо них их разность (неотрицательную). Так делают, пока не останется одно число. Каким оно может быть?",
      "en": "The numbers $1,2,\\dots,10$ are written on a board. A move erases any two of them and writes their (non-negative) difference instead. This continues until one number remains. What can it be?"
     },
     "steps": {
      "ru": [
       "Посмотрим, как меняется **сумма** всех чисел на доске. Вместо $a$ и $b$ появляется $|a-b|$, поэтому сумма меняется на $$|a-b|-(a+b).$$",
       "Если $a\\ge b$, это равно $(a-b)-(a+b)=-2b$ — чётное число. Если $a<b$, аналогично получаем $-2a$.",
       "Значит **чётность суммы не меняется** — это и есть инвариант.",
       "Начальная сумма: $1+2+\\dots+10=55$ — нечётна.",
       "Значит и в конце сумма нечётна. Но в конце на доске одно число, и оно равно этой сумме.",
       "Следовательно последнее число **нечётно**. Оно лежит между $0$ и $10$ (разности не выводят за пределы наибольшего числа), поэтому это одно из $1,3,5,7,9$.",
       "*Все ли значения достижимы?* Да. Например, $9$: сначала обнулим пары $(1,2)\\to1$… проще: $10-1=9$, $9-2=7$, $8-3=5$, $7-4=3$, $6-5=1$; теперь на доске $9,7,5,3,1$, их можно свести к $9-7=2$, $5-3=2$, $2-2=0$, $0$ и $1$ дают $1$. Перебирая порядок, получают любое нечётное значение от $1$ до $9$."
      ],
      "en": [
       "Watch how the **sum** of the numbers on the board changes. The pair $a$, $b$ is replaced by $|a-b|$, so the sum changes by $$|a-b|-(a+b).$$",
       "If $a\\ge b$ this equals $(a-b)-(a+b)=-2b$, an even number; if $a<b$ it is $-2a$, likewise even.",
       "So the **parity of the sum never changes** — that is the invariant.",
       "The initial sum is $1+2+\\dots+10=55$, which is odd.",
       "Hence the final sum is odd too. And at the end one number remains, equal to that sum.",
       "So the last number is **odd**. It lies between $0$ and $10$ (differences never exceed the largest number), so it is one of $1,3,5,7,9$.",
       "*Are all of these attainable?* Yes — arranging the order of the moves produces every odd value from $1$ to $9$."
      ]
     },
     "ans": {
      "ru": "Последнее число нечётно; достижимо любое из $1,3,5,7,9$.",
      "en": "The last number is odd, and each of $1,3,5,7,9$ is attainable."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Полуинвариант",
      "en": "Monovariant"
     },
     "text": {
      "ru": "Иногда величина не сохраняется, а **монотонно меняется** — например, каждый раз строго уменьшается, оставаясь целой и неотрицательной. Такая величина называется **полуинвариантом**, и она доказывает, что процесс не может длиться бесконечно: бесконечной строго убывающей последовательности натуральных чисел не бывает.\n\nЭто главный инструмент в задачах вида «докажите, что процесс закончится».",
      "en": "Sometimes a quantity is not preserved but changes **monotonically** — say, strictly decreases each time while staying a non-negative integer. Such a quantity is a **monovariant**, and it proves the process must stop: there is no infinite strictly decreasing sequence of positive integers.\n\nThis is the main tool in problems of the form \"prove that the process terminates\"."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Раскраски",
    "en": "Colourings"
   },
   "blocks": [
    {
     "t": "idea",
     "text": {
      "ru": "**Раскраска** — это способ построить инвариант там, где числа сами по себе не помогают. Клетки доски (или объекты задачи) красят в несколько цветов так, чтобы каждая разрешённая операция вела себя с цветами предсказуемо, а затем считают, сколько объектов каждого цвета.",
      "en": "A **colouring** is a way to manufacture an invariant where the numbers alone give nothing. The cells of a board (or the objects of the problem) are coloured so that every allowed move behaves predictably on colours, and then one counts objects of each colour."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Из шахматной доски $8\\times8$ вырезали две противоположные угловые клетки. Можно ли оставшиеся $62$ клетки покрыть $31$ доминошкой $1\\times2$?",
      "en": "Two opposite corner squares are cut from an $8\\times8$ chessboard. Can the remaining $62$ squares be covered by $31$ dominoes of size $1\\times2$?"
     },
     "steps": {
      "ru": [
       "Раскрасим доску в шахматном порядке. На полной доске $32$ чёрные и $32$ белые клетки.",
       "Ключевое наблюдение: **любая доминошка $1\\times2$ накрывает ровно одну чёрную и одну белую клетку**, потому что соседние клетки всегда разного цвета.",
       "Значит $31$ доминошка накрывает ровно $31$ чёрную и $31$ белую клетку.",
       "Но две противоположные угловые клетки доски всегда **одного** цвета. Вырезав их, мы оставили $30$ клеток одного цвета и $32$ другого.",
       "$30\\ne31$ — требуемое покрытие невозможно."
      ],
      "en": [
       "Colour the board in the usual chess pattern: the full board has $32$ black and $32$ white squares.",
       "The key observation: **every $1\\times2$ domino covers exactly one black and one white square**, since adjacent squares always differ in colour.",
       "So $31$ dominoes cover exactly $31$ black and $31$ white squares.",
       "But two opposite corners of a chessboard always have the **same** colour. Removing them leaves $30$ squares of one colour and $32$ of the other.",
       "Since $30\\ne31$, the covering is impossible."
      ]
     },
     "ans": {
      "ru": "Нельзя. $\\blacksquare$",
      "en": "It cannot be done. $\\blacksquare$"
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 280 280\" role=\"img\" aria-label=\"Chessboard with two opposite corners removed\"><rect x=\"50\" y=\"20\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"80\" y=\"20\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"110\" y=\"20\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"140\" y=\"20\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"170\" y=\"20\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"200\" y=\"20\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"230\" y=\"20\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"20\" y=\"50\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"50\" y=\"50\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"80\" y=\"50\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"110\" y=\"50\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"140\" y=\"50\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"170\" y=\"50\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"200\" y=\"50\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"230\" y=\"50\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"20\" y=\"80\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"50\" y=\"80\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"80\" y=\"80\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"110\" y=\"80\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"140\" y=\"80\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"170\" y=\"80\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"200\" y=\"80\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"230\" y=\"80\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"20\" y=\"110\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"50\" y=\"110\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"80\" y=\"110\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"110\" y=\"110\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"140\" y=\"110\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"170\" y=\"110\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"200\" y=\"110\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"230\" y=\"110\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"20\" y=\"140\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"50\" y=\"140\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"80\" y=\"140\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"110\" y=\"140\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"140\" y=\"140\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"170\" y=\"140\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"200\" y=\"140\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"230\" y=\"140\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"20\" y=\"170\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"50\" y=\"170\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"80\" y=\"170\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"110\" y=\"170\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"140\" y=\"170\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"170\" y=\"170\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"200\" y=\"170\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"230\" y=\"170\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"20\" y=\"200\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"50\" y=\"200\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"80\" y=\"200\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"110\" y=\"200\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"140\" y=\"200\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"170\" y=\"200\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"200\" y=\"200\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"230\" y=\"200\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"20\" y=\"230\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"50\" y=\"230\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"80\" y=\"230\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"110\" y=\"230\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"140\" y=\"230\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"170\" y=\"230\" width=\"30\" height=\"30\" fill=\"var(--paper)\" stroke=\"var(--line)\"/><rect x=\"200\" y=\"230\" width=\"30\" height=\"30\" fill=\"var(--t)\" stroke=\"var(--line)\"/><rect x=\"20\" y=\"20\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"var(--c)\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><rect x=\"230\" y=\"230\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"var(--c)\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/></svg>",
     "cap": {
      "ru": "Вырезаны две противоположные угловые клетки — обе одного цвета, поэтому баланс цветов нарушен.",
      "en": "Two opposite corners are removed — both of the same colour, so the colour balance is broken."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Полезно помнить и другие раскраски: **в три цвета** по диагоналям (для фигур $1\\times3$), **в четыре цвета** по остаткам координат (для фигур $2\\times2$), раскраска **строк** или **столбцов** (для ходов, меняющих строку), раскраска **по остатку от деления координаты на $k$**. Выбор раскраски — это и есть решение задачи; всё остальное — арифметика.",
      "en": "Other colourings are worth knowing: **three colours** along diagonals (for $1\\times3$ pieces), **four colours** by coordinate residues (for $2\\times2$ pieces), colouring by **rows** or **columns** (for moves that change a row), colouring by the **residue of a coordinate modulo $k$**. Choosing the colouring is the solution; the rest is arithmetic."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Каждая точка плоскости покрашена в один из двух цветов. Докажите, что найдутся две точки одного цвета на расстоянии ровно $1$.",
      "en": "Every point of the plane is coloured in one of two colours. Prove that there are two points of the same colour at distance exactly $1$."
     },
     "steps": {
      "ru": [
       "Возьмём произвольный равносторонний треугольник со стороной $1$.",
       "Его три вершины покрашены в два цвета.",
       "По принципу Дирихле какие-то две вершины оказались одного цвета.",
       "А расстояние между любыми двумя вершинами равно $1$."
      ],
      "en": [
       "Take any equilateral triangle of side $1$.",
       "Its three vertices are coloured in two colours.",
       "By the pigeonhole principle two vertices share a colour.",
       "And any two vertices are at distance $1$."
      ]
     },
     "ans": {
      "ru": "Такие две точки существуют. $\\blacksquare$",
      "en": "Two such points exist. $\\blacksquare$"
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 260 200\" role=\"img\" aria-label=\"Unit equilateral triangle\">\n<path class=\"ln\" d=\"M40 165 L220 165 L130 9 Z\"/>\n<circle class=\"ptc\" cx=\"40\" cy=\"165\" r=\"5\"/><circle class=\"ptc\" cx=\"220\" cy=\"165\" r=\"5\"/>\n<circle class=\"ptc\" cx=\"130\" cy=\"9\" r=\"5\"/>\n<text class=\"sm\" x=\"130\" y=\"184\" text-anchor=\"middle\">1</text>\n<text class=\"sm\" x=\"66\" y=\"86\">1</text><text class=\"sm\" x=\"186\" y=\"86\">1</text>\n</svg>",
     "cap": {
      "ru": "Три вершины, два цвета — по принципу Дирихле две вершины одного цвета, а расстояние между ними равно $1$.",
      "en": "Three vertices, two colours — pigeonhole gives two of one colour, at distance $1$."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Как оформлять решение",
    "en": "How to write a solution"
   },
   "blocks": [
    {
     "t": "ul",
     "items": {
      "ru": [
       "**Начните с ответа**, если он есть: «Ответ: $12$. Докажем это.» Проверяющему сразу видно, что вы решали.",
       "**Вводите обозначения явно.** «Пусть $n$ — число участников» стоит одной строки и снимает половину вопросов.",
       "**Каждый шаг — со ссылкой.** «По теореме о вписанном угле», «по условию», «по доказанному выше».",
       "**Обе стороны задачи «найдите все».** Отдельно предъявите примеры, отдельно докажите, что других нет. За половину дают половину баллов.",
       "**Проверяйте крайние случаи.** $n=1$, вырожденный треугольник, деление на ноль, отрицательный корень.",
       "**Пишите вывод.** Последняя строка должна отвечать ровно на поставленный вопрос."
      ],
      "en": [
       "**Start with the answer** when there is one: \"Answer: $12$. Here is the proof.\" The marker sees at once that you solved it.",
       "**Introduce notation explicitly.** \"Let $n$ be the number of participants\" costs one line and prevents half the questions.",
       "**Justify each step.** \"By the inscribed angle theorem\", \"by hypothesis\", \"by what was proved above\".",
       "**Both halves of a \"find all\" problem.** Exhibit the examples, and separately prove there are no others. Half the work earns half the marks.",
       "**Check the edge cases.** $n=1$, a degenerate triangle, division by zero, a negative root.",
       "**Write a conclusion.** The last line should answer exactly the question asked."
      ]
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Три фразы, за которые снимают баллы:\n\n«**Очевидно, что…**» — если очевидно, то напишите почему в одну строку; если не можете, значит не очевидно.\n\n«**Аналогично…**» — уместно, только если рассуждение действительно дословно повторяется; скажите, что именно на что заменяется.\n\n«**Проверено на примерах**» — примеры не доказательство. Они полезны для проверки ответа, но не заменяют аргумент.",
      "en": "Three phrases that cost marks:\n\n\"**Obviously…**\" — if it is obvious, say why in one line; if you cannot, it is not obvious.\n\n\"**Similarly…**\" — fair only when the argument really does repeat word for word; say what is replaced by what.\n\n\"**Checked on examples**\" — examples are not a proof. They are useful for testing an answer but do not replace an argument."
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
    "ru": "Сформулируйте отрицания: (а) «все числа набора чётные»; (б) «существует ученик, решивший все задачи»; (в) «$x>0$ и $y>0$».",
    "en": "Write the negations of: (a) \"all the numbers are even\"; (b) \"some pupil solved every problem\"; (c) \"$x>0$ and $y>0$\"."
   },
   "hint": {
    "ru": "Квантор всеобщности меняется на квантор существования, «и» — на «или».",
    "en": "A universal quantifier becomes existential, and \"and\" becomes \"or\"."
   },
   "sol": {
    "ru": "**(а)** «Хотя бы одно число набора нечётно.»\n\nНе «все нечётные» — это гораздо более сильное утверждение.\n\n**(б)** «Для каждого ученика найдётся задача, которую он не решил.»\n\nОба квантора поменялись: «существует» стало «для каждого», а «все задачи решил» — «есть нерешённая».\n\n**(в)** «$x\\le0$ или $y\\le0$.»\n\nНе «$x\\le0$ и $y\\le0$»: отрицание конъюнкции — дизъюнкция отрицаний.",
    "en": "**(a)** \"At least one of the numbers is odd.\"\n\nNot \"all are odd\", which is a far stronger statement.\n\n**(b)** \"For every pupil there is a problem they did not solve.\"\n\nBoth quantifiers flipped: \"there exists\" became \"for every\", and \"solved all problems\" became \"there is an unsolved one\".\n\n**(c)** \"$x\\le0$ or $y\\le0$.\"\n\nNot \"$x\\le0$ and $y\\le0$\": the negation of a conjunction is the disjunction of the negations."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Дано утверждение: «если четырёхугольник — квадрат, то его диагонали равны». Сформулируйте обратное, противоположное и контрапозицию и выясните, какие из них верны.",
    "en": "Given the statement \"if a quadrilateral is a square then its diagonals are equal\", write the converse, the inverse and the contrapositive, and say which are true."
   },
   "hint": {
    "ru": "Контрапозиция всегда равносильна исходному.",
    "en": "The contrapositive is always equivalent to the original."
   },
   "sol": {
    "ru": "**Исходное:** если четырёхугольник — квадрат, то его диагонали равны. **Верно.**\n\n**Обратное:** если диагонали четырёхугольника равны, то он квадрат. **Неверно** — контрпример: прямоугольник со сторонами $1$ и $2$, у него диагонали равны, но это не квадрат. Ещё пример: равнобедренная трапеция.\n\n**Противоположное:** если четырёхугольник не квадрат, то его диагонали не равны. **Неверно** — тот же прямоугольник служит контрпримером.\n\n**Контрапозиция:** если диагонали четырёхугольника не равны, то он не квадрат. **Верно** — она равносильна исходному утверждению.\n\n*Наблюдение.* Обратное и противоположное оказались одновременно ложными — это не совпадение: они контрапозиции друг друга и потому всегда равносильны между собой.",
    "en": "**Original:** if a quadrilateral is a square then its diagonals are equal. **True.**\n\n**Converse:** if the diagonals of a quadrilateral are equal then it is a square. **False** — a $1\\times2$ rectangle has equal diagonals and is not a square. Another: an isosceles trapezium.\n\n**Inverse:** if a quadrilateral is not a square then its diagonals are not equal. **False** — the same rectangle is a counterexample.\n\n**Contrapositive:** if the diagonals of a quadrilateral are not equal then it is not a square. **True** — it is equivalent to the original.\n\n*An observation.* The converse and the inverse turned out false together — no accident: they are contrapositives of each other and hence always equivalent."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что если $n^{2}$ чётно, то $n$ чётно.",
    "en": "Prove that if $n^{2}$ is even then $n$ is even."
   },
   "hint": {
    "ru": "Докажите контрапозицию.",
    "en": "Prove the contrapositive."
   },
   "sol": {
    "ru": "Докажем равносильную контрапозицию: **если $n$ нечётно, то $n^{2}$ нечётно.**\n\nПусть $n=2k+1$. Тогда $$n^{2}=(2k+1)^{2}=4k^{2}+4k+1=2\\left(2k^{2}+2k\\right)+1 ,$$ то есть $n^{2}$ даёт остаток $1$ при делении на $2$ и потому нечётно.\n\nЗначит верна и исходная импликация. $\\blacksquare$\n\n*Замечание.* Прямое доказательство тоже возможно, но требует основной теоремы арифметики: из $2\\mid n^{2}$ и простоты двойки следует $2\\mid n$. Контрапозиция обходится без неё.",
    "en": "We prove the equivalent contrapositive: **if $n$ is odd then $n^{2}$ is odd.**\n\nLet $n=2k+1$. Then $$n^{2}=(2k+1)^{2}=4k^{2}+4k+1=2\\left(2k^{2}+2k\\right)+1 ,$$ so $n^{2}$ leaves remainder $1$ on division by $2$ and is odd.\n\nHence the original implication holds. $\\blacksquare$\n\n*Remark.* A direct proof is possible too, but needs the fundamental theorem of arithmetic: $2\\mid n^{2}$ and the primality of two give $2\\mid n$. The contrapositive avoids that."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Докажите по индукции, что $2^{n}>n$ при всех натуральных $n$.",
    "en": "Prove by induction that $2^{n}>n$ for every positive integer $n$."
   },
   "hint": {
    "ru": "В переходе воспользуйтесь тем, что $2^{n}\\ge n+1$.",
    "en": "In the step use that $2^{n}\\ge n+1$."
   },
   "sol": {
    "ru": "**База $n=1$:** $2^{1}=2>1$ ✓\n\n**Переход.** Пусть $2^{n}>n$ при некотором $n\\ge1$. Так как обе части целые, из строгого неравенства следует $2^{n}\\ge n+1$.\n\nУмножим на $2$: $$2^{\\,n+1}\\ge2(n+1)=n+1+(n+1)>n+1 ,$$ поскольку $n+1>0$.\n\nЗначит $2^{\\,n+1}>n+1$, то есть утверждение верно и для $n+1$.\n\nПо индукции $2^{n}>n$ при всех натуральных $n$. $\\blacksquare$",
    "en": "**Base $n=1$:** $2^{1}=2>1$ ✓\n\n**Step.** Suppose $2^{n}>n$ for some $n\\ge1$. Both sides are integers, so the strict inequality gives $2^{n}\\ge n+1$.\n\nMultiply by $2$: $$2^{\\,n+1}\\ge2(n+1)=n+1+(n+1)>n+1 ,$$ since $n+1>0$.\n\nSo $2^{\\,n+1}>n+1$ and the claim holds at $n+1$.\n\nBy induction $2^{n}>n$ for every positive integer $n$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что произведение любых двух последовательных целых чисел чётно, а произведение любых трёх последовательных делится на $6$.",
    "en": "Prove that the product of any two consecutive integers is even, and the product of any three consecutive integers is divisible by $6$."
   },
   "hint": {
    "ru": "Разбор случаев по остатку.",
    "en": "Split into cases by the remainder."
   },
   "sol": {
    "ru": "**Два подряд.** Из двух последовательных чисел $n$ и $n+1$ ровно одно чётно: если $n=2k$, то чётно первое; если $n=2k+1$, то $n+1=2k+2$ чётно. В обоих случаях произведение делится на $2$.\n\n**Три подряд.** Среди $n$, $n+1$, $n+2$ есть чётное (по доказанному, даже среди первых двух), значит произведение делится на $2$.\n\nОстатки этих трёх чисел при делении на $3$ — это три подряд идущих значения, то есть $\\{0,1,2\\}$ в каком-то порядке. Значит одно из чисел делится на $3$, и произведение делится на $3$.\n\nЧисла $2$ и $3$ взаимно просты, поэтому произведение делится на $6$. $\\blacksquare$\n\n*Обобщение.* Произведение любых $k$ подряд идущих целых делится на $k!$ — это следует из того, что $\\dbinom{n+k}{k}$ целое.",
    "en": "**Two in a row.** Of two consecutive integers $n$ and $n+1$ exactly one is even: if $n=2k$ the first is, and if $n=2k+1$ then $n+1=2k+2$ is. Either way the product is divisible by $2$.\n\n**Three in a row.** Among $n$, $n+1$, $n+2$ there is an even number (already among the first two), so the product is divisible by $2$.\n\nTheir remainders modulo $3$ are three consecutive values, that is $\\{0,1,2\\}$ in some order. So one of them is divisible by $3$ and the product is too.\n\nAs $2$ and $3$ are coprime, the product is divisible by $6$. $\\blacksquare$\n\n*Generalisation.* A product of any $k$ consecutive integers is divisible by $k!$ — which follows from $\\dbinom{n+k}{k}$ being an integer."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "На доске написаны числа $1,2,\\dots,20$. За ход стирают два числа и записывают их сумму. Сколько ходов потребуется, чтобы осталось одно число, и чему оно будет равно?",
    "en": "The numbers $1,2,\\dots,20$ are on a board. A move erases two of them and writes their sum. How many moves are needed to leave one number, and what will it be?"
   },
   "hint": {
    "ru": "Что сохраняется, а что убывает?",
    "en": "What is preserved, and what decreases?"
   },
   "sol": {
    "ru": "**Инвариант.** Каждый ход заменяет $a$ и $b$ на $a+b$, поэтому **сумма всех чисел на доске не меняется**. Значит в конце останется число $$1+2+\\dots+20=\\frac{20\\cdot21}{2}=210 .$$\n\n**Полуинвариант.** Каждый ход уменьшает количество чисел ровно на единицу: два стёрли, одно записали. Сначала чисел $20$, в конце $1$, поэтому ходов ровно $$20-1=19 .$$\n\n**Ответ:** $19$ ходов, останется число $210$.\n\n*Обратите внимание,* что ответ не зависит от порядка ходов — это и есть смысл слова «инвариант».",
    "en": "**The invariant.** Each move replaces $a$ and $b$ by $a+b$, so **the total sum never changes**. The final number is therefore $$1+2+\\dots+20=\\frac{20\\cdot21}{2}=210 .$$\n\n**The monovariant.** Each move reduces the count of numbers by exactly one: two erased, one written. Starting from $20$ and ending at $1$, the number of moves is $$20-1=19 .$$\n\n**Answer:** $19$ moves, and the number left is $210$.\n\n*Note* that the answer does not depend on the order of moves — that is exactly what \"invariant\" means."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $\\sqrt3$ иррационально. Где ломается то же рассуждение для $\\sqrt4$?",
    "en": "Prove that $\\sqrt3$ is irrational. Where does the same argument break down for $\\sqrt4$?"
   },
   "hint": {
    "ru": "Повторите доказательство для $\\sqrt2$, заменив двойку на тройку.",
    "en": "Repeat the $\\sqrt2$ proof with three in place of two."
   },
   "sol": {
    "ru": "**Доказательство.** Предположим, что $\\sqrt3=\\dfrac mn$, где дробь несократима. Тогда $$m^{2}=3n^{2}.$$\n\nЗначит $3\\mid m^{2}$. Число $3$ простое, поэтому из $3\\mid m\\cdot m$ следует $3\\mid m$; запишем $m=3k$.\n\nПодставим: $9k^{2}=3n^{2}$, то есть $n^{2}=3k^{2}$. По той же причине $3\\mid n$.\n\nИтак, $m$ и $n$ оба делятся на $3$ — противоречие с несократимостью. $\\blacksquare$\n\n**Почему не проходит для $\\sqrt4$.** Ключевой шаг «из $3\\mid m^{2}$ следует $3\\mid m$» опирается на **простоту** тройки. Для четвёрки он неверен: например, $4\\mid6^{2}=36$, но $4\\nmid6$.\n\nИ это не случайность: $\\sqrt4=2$ — число вполне рациональное, так что доказательство и не должно было пройти.\n\n*Общий факт.* $\\sqrt n$ иррационально ровно тогда, когда $n$ не является точным квадратом.",
    "en": "**Proof.** Suppose $\\sqrt3=\\dfrac mn$ in lowest terms. Then $$m^{2}=3n^{2}.$$\n\nSo $3\\mid m^{2}$. Since $3$ is prime, $3\\mid m\\cdot m$ gives $3\\mid m$; write $m=3k$.\n\nSubstituting, $9k^{2}=3n^{2}$, that is $n^{2}=3k^{2}$, and for the same reason $3\\mid n$.\n\nSo $m$ and $n$ are both divisible by $3$ — contradicting lowest terms. $\\blacksquare$\n\n**Why it fails for $\\sqrt4$.** The key step \"$3\\mid m^{2}$ implies $3\\mid m$\" rests on the **primality** of three. For four it is false: $4\\mid6^{2}=36$ but $4\\nmid6$.\n\nAnd that is no accident: $\\sqrt4=2$ is perfectly rational, so the proof had better fail.\n\n*The general fact.* $\\sqrt n$ is irrational exactly when $n$ is not a perfect square."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите неравенство Бернулли: $(1+x)^{n}\\ge1+nx$ при всех натуральных $n$ и всех $x\\ge-1$.",
    "en": "Prove Bernoulli’s inequality: $(1+x)^{n}\\ge1+nx$ for every positive integer $n$ and every $x\\ge-1$."
   },
   "hint": {
    "ru": "Индукция; в переходе умножайте на $1+x\\ge0$.",
    "en": "Induct; in the step multiply by $1+x\\ge0$."
   },
   "sol": {
    "ru": "**База $n=1$:** $(1+x)^{1}=1+x$ — равенство, значит неравенство верно ✓\n\n**Переход.** Пусть $(1+x)^{n}\\ge1+nx$ при некотором $n\\ge1$.\n\nПо условию $x\\ge-1$, поэтому $1+x\\ge0$, и умножение на $1+x$ **не меняет знака** неравенства: $$(1+x)^{\\,n+1}\\ \\ge\\ \\left(1+nx\\right)(1+x).$$\n\nРаскроем правую часть: $$\\left(1+nx\\right)(1+x)=1+x+nx+nx^{2}=1+(n+1)x+nx^{2}.$$\n\nПоследнее слагаемое неотрицательно ($n>0$ и $x^{2}\\ge0$), поэтому $$(1+x)^{\\,n+1}\\ \\ge\\ 1+(n+1)x ,$$ то есть утверждение верно и для $n+1$.\n\nПо индукции неравенство верно при всех $n$. $\\blacksquare$\n\n**Где важно условие $x\\ge-1$.** Без него шаг с умножением ломается: при $x=-3$ множитель $1+x=-2$ отрицателен и переворачивает знак. И действительно, при $n=2$, $x=-3$ имеем $(1+x)^{2}=4$, а $1+2x=-5$ — неравенство ещё верно, но при $n=3$ получаем $-8$ и $-8$: равенство. Условие $x\\ge-1$ делает доказательство корректным при всех $n$ сразу.",
    "en": "**Base $n=1$:** $(1+x)^{1}=1+x$ — equality, so the inequality holds ✓\n\n**Step.** Suppose $(1+x)^{n}\\ge1+nx$ for some $n\\ge1$.\n\nSince $x\\ge-1$ we have $1+x\\ge0$, so multiplying by $1+x$ **preserves** the direction: $$(1+x)^{\\,n+1}\\ \\ge\\ \\left(1+nx\\right)(1+x).$$\n\nExpand the right side: $$\\left(1+nx\\right)(1+x)=1+x+nx+nx^{2}=1+(n+1)x+nx^{2}.$$\n\nThe last term is non-negative ($n>0$ and $x^{2}\\ge0$), so $$(1+x)^{\\,n+1}\\ \\ge\\ 1+(n+1)x ,$$ and the claim holds at $n+1$.\n\nBy induction it holds for every $n$. $\\blacksquare$\n\n**Where $x\\ge-1$ matters.** Without it the multiplication step breaks: at $x=-3$ the factor $1+x=-2$ is negative and flips the sign. The hypothesis $x\\ge-1$ is what makes the proof valid for all $n$ at once."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $n$ прямых на плоскости, никакие две из которых не параллельны и никакие три не проходят через одну точку, делят плоскость ровно на $1+\\dfrac{n(n+1)}{2}$ частей.",
    "en": "Prove that $n$ lines in the plane, no two parallel and no three concurrent, divide it into exactly $1+\\dfrac{n(n+1)}{2}$ regions."
   },
   "hint": {
    "ru": "Посмотрите, сколько новых частей добавляет очередная прямая.",
    "en": "See how many new regions the next line adds."
   },
   "sol": {
    "ru": "Обозначим искомое число через $R(n)$.\n\n**База $n=0$:** прямых нет, плоскость — одна часть, и формула даёт $1+0=1$ ✓\n\n**Переход: сколько добавляет новая прямая.** Пусть уже проведено $n$ прямых, и мы добавляем $(n+1)$-ю. Она пересекает каждую из старых ровно в одной точке (не параллельна ни одной), и все эти точки различны (никакие три прямые не проходят через одну точку). Значит на новой прямой возникает **$n$ точек пересечения**.\n\nЭти $n$ точек разбивают новую прямую на $n+1$ кусок: $n-1$ отрезок и два луча.\n\nКаждый такой кусок проходит по одной из старых частей плоскости и разрезает её ровно на две. Значит число частей увеличивается ровно на $n+1$: $$R(n+1)=R(n)+(n+1).$$\n\n**Складываем.** $$R(n)=R(0)+1+2+\\dots+n=1+\\frac{n(n+1)}{2}. \\qquad\\blacksquare$$\n\n*Проверка.* $n=1$: две части, формула даёт $1+1=2$ ✓ $n=2$: четыре части, формула $1+3=4$ ✓ $n=3$: семь частей, формула $1+6=7$ ✓\n\n*Замечание.* Условия важны. Если две прямые параллельны, новая прямая пересечёт не все старые и добавит меньше частей; если три прямые проходят через одну точку, точек пересечения на новой прямой окажется меньше $n$.",
    "en": "Write $R(n)$ for the number of regions.\n\n**Base $n=0$:** no lines, one region, and the formula gives $1+0=1$ ✓\n\n**Step: how much a new line adds.** Suppose $n$ lines are drawn and we add the $(n+1)$-st. It meets each old line in exactly one point (being parallel to none), and all these points are distinct (no three lines concurrent). So the new line acquires **$n$ intersection points**.\n\nThose $n$ points cut the new line into $n+1$ pieces: $n-1$ segments and two rays.\n\nEach piece runs through one old region and cuts it into two. So the number of regions grows by exactly $n+1$: $$R(n+1)=R(n)+(n+1).$$\n\n**Sum up.** $$R(n)=R(0)+1+2+\\dots+n=1+\\frac{n(n+1)}{2}. \\qquad\\blacksquare$$\n\n*Check.* $n=1$: two regions, formula $1+1=2$ ✓ $n=2$: four, formula $1+3=4$ ✓ $n=3$: seven, formula $1+6=7$ ✓\n\n*Remark.* The hypotheses matter. If two lines are parallel the new line misses one of them and adds fewer regions; if three lines are concurrent the new line acquires fewer than $n$ intersection points."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Плитка шоколада состоит из $m\\times n$ долек. За один ход разрешено взять любой кусок и разломить его по прямой между дольками на два куска. Докажите, что для того чтобы разломать всю плитку на отдельные дольки, потребуется ровно $mn-1$ ходов — независимо от порядка ломания.",
    "en": "A chocolate bar consists of $m\\times n$ squares. A move takes any piece and breaks it along a straight line between squares into two pieces. Prove that breaking the whole bar into separate squares takes exactly $mn-1$ moves, whatever the order."
   },
   "hint": {
    "ru": "Следите за числом кусков.",
    "en": "Track the number of pieces."
   },
   "sol": {
    "ru": "**Инвариант.** Проследим за **числом кусков** на столе.\n\nВ начале кусок один. Каждый ход берёт один кусок и превращает его в два, поэтому число кусков увеличивается **ровно на единицу** — независимо от того, какой кусок и как ломают.\n\n**Считаем.** В конце кусков ровно $mn$ (каждая долька отдельно). Значит число ходов равно $$mn-1 .$$\n\nЭто верно при любом порядке ломания — ответ не зависит от стратегии. $\\blacksquare$\n\n*Что здесь важно.* Условие «ломать по прямой» не влияет на подсчёт: любой ход, превращающий один кусок в два, даёт ту же формулу. Именно поэтому задача решается за две строки, тогда как прямой перебор вариантов был бы безнадёжен.\n\n*Пример.* Для плитки $4\\times6$ понадобится $24-1=23$ ломания.",
    "en": "**The invariant.** Track the **number of pieces** on the table.\n\nAt the start there is one. Each move takes one piece and turns it into two, so the count grows by **exactly one** — whichever piece is broken and however.\n\n**Count.** At the end there are exactly $mn$ pieces (each square separate). So the number of moves is $$mn-1 .$$\n\nThis holds for any order of breaking — the answer does not depend on the strategy. $\\blacksquare$\n\n*What matters here.* The \"straight line\" condition plays no part in the count: any move turning one piece into two gives the same formula. That is why the problem falls in two lines, while a direct search over orders would be hopeless.\n\n*Example.* A $4\\times6$ bar needs $24-1=23$ breaks."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "В каждой клетке доски $5\\times5$ сидит жук. По сигналу каждый жук переползает на соседнюю по стороне клетку. Докажите, что какая-то клетка останется пустой.",
    "en": "A bug sits on every cell of a $5\\times5$ board. At a signal each bug crawls to an edge-adjacent cell. Prove that some cell is left empty."
   },
   "hint": {
    "ru": "Раскрасьте доску в шахматном порядке и посчитайте клетки каждого цвета.",
    "en": "Colour the board like a chessboard and count the cells of each colour."
   },
   "sol": {
    "ru": "**Раскраска.** Покрасим доску в шахматном порядке. На доске $5\\times5$ всего $25$ клеток, и цвета распределены неровно: угловых цветов $13$, другого — $12$. Назовём их чёрными и белыми: $13$ чёрных и $12$ белых.\n\n**Что делает ход.** Соседние по стороне клетки всегда разного цвета, поэтому **каждый жук меняет цвет клетки**: с чёрной уходит на белую и наоборот.\n\n**Считаем.** До сигнала на чёрных клетках сидело $13$ жуков. После сигнала все они окажутся на белых клетках. Но белых клеток всего $12$.\n\nЗначит на белых клетках после хода находится не менее $13$ жуков (тех, что пришли с чёрных), плюс, возможно, ещё какие-то. Итого белых клеток $12$, а претендентов на них не менее $13$ — по принципу Дирихле в какой-то белой клетке окажутся два жука.\n\n**Вывод.** Всего жуков $25$, а клеток тоже $25$. Раз в какой-то клетке оказалось два жука, а всего клеток и жуков поровну, то какая-то клетка непременно осталась пустой. $\\blacksquare$\n\n*Замечание.* Для доски $4\\times4$ (или любой доски с чётным числом клеток каждого цвета) такое рассуждение не работает — и действительно, там все жуки могут переползти без пустых клеток, например меняясь местами парами.",
    "en": "**The colouring.** Colour the board like a chessboard. A $5\\times5$ board has $25$ cells and the colours are unequal: $13$ of the corner colour and $12$ of the other. Call them black and white: $13$ black, $12$ white.\n\n**What a move does.** Edge-adjacent cells always differ in colour, so **every bug changes colour**: from black to white and back.\n\n**Count.** Before the signal $13$ bugs sat on black cells. Afterwards all of them are on white cells. But there are only $12$ white cells.\n\nSo after the move the white cells hold at least $13$ bugs (those arriving from black), and possibly more, while there are only $12$ white cells — by the pigeonhole principle some white cell holds two bugs.\n\n**Conclusion.** There are $25$ bugs and $25$ cells. Since some cell holds two, and bugs and cells are equal in number, some cell must be left empty. $\\blacksquare$\n\n*Remark.* For a $4\\times4$ board (or any board with equally many cells of each colour) the argument fails — and indeed there the bugs can all move with no cell left empty, for instance by swapping in pairs."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "В трёх кучках лежат $10$, $15$ и $20$ камней. За ход разрешается взять по одному камню из двух кучек и положить два камня в третью. Можно ли добиться, чтобы во всех кучках стало поровну?",
    "en": "Three piles hold $10$, $15$ and $20$ stones. A move takes one stone from each of two piles and adds two stones to the third. Can all three piles be made equal?"
   },
   "hint": {
    "ru": "Посмотрите на остатки размеров кучек по модулю $3$.",
    "en": "Look at the pile sizes modulo $3$."
   },
   "sol": {
    "ru": "**Инвариант.** Посмотрим на остатки размеров кучек при делении на $3$.\n\nЗа один ход две кучки уменьшаются на $1$, а одна увеличивается на $2$. По модулю $3$ увеличение на $2$ — это то же самое, что уменьшение на $1$: $$+2\\equiv-1\\pmod3 .$$\n\nЗначит **все три кучки уменьшаются на $1$ по модулю $3$**. Следовательно **попарные разности остатков не меняются**.\n\n**Начальное состояние.** $$10\\equiv1,\\qquad 15\\equiv0,\\qquad 20\\equiv2\\pmod3 .$$ Остатки попарно различны.\n\n**Требуемое состояние.** Если бы все кучки стали равны, их остатки по модулю $3$ совпали бы.\n\n**Противоречие.** Различие остатков — инвариант, а мы хотим прийти к состоянию, где остатки совпадают. Это невозможно.\n\n**Ответ:** нельзя. $\\blacksquare$\n\n*Проверка инварианта на примере.* Из $(10,15,20)$ ход даёт, скажем, $(9,14,22)$: остатки $0,2,1$ — снова все различны ✓\n\n*Замечание.* Обратите внимание: общее число камней тоже сохраняется ($10+15+20=45$), и $45$ делится на $3$, так что «арифметического» препятствия нет — равные кучки по $15$ камней в сумме дают ровно $45$. Препятствие именно в остатках.",
    "en": "**The invariant.** Look at the pile sizes modulo $3$.\n\nA move decreases two piles by $1$ and increases one by $2$. Modulo $3$, adding $2$ is the same as subtracting $1$: $$+2\\equiv-1\\pmod3 .$$\n\nSo **all three piles drop by $1$ modulo $3$**, and hence **the differences between their residues never change**.\n\n**The start.** $$10\\equiv1,\\qquad 15\\equiv0,\\qquad 20\\equiv2\\pmod3 ,$$ three pairwise different residues.\n\n**The target.** If all piles were equal, their residues modulo $3$ would coincide.\n\n**Contradiction.** The distinctness of the residues is invariant, yet we want a state where they coincide. Impossible.\n\n**Answer:** it cannot be done. $\\blacksquare$\n\n*Checking the invariant.* From $(10,15,20)$ a move gives, say, $(9,14,22)$: residues $0,2,1$ — still all different ✓\n\n*Remark.* Note that the total is also preserved ($10+15+20=45$) and $45$ is divisible by $3$, so there is no \"arithmetic\" obstruction — three piles of $15$ would total exactly $45$. The obstruction is precisely in the residues."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "По кругу расставлены числа $+1$ и $-1$ — всего $2025$ штук. За ход разрешается изменить знак у любых двух соседних чисел. Можно ли, начав с расстановки, где ровно одно число равно $-1$, прийти к расстановке, где все числа равны $+1$?",
    "en": "Numbers $+1$ and $-1$ are arranged in a circle — $2025$ of them. A move flips the signs of any two neighbouring numbers. Starting from an arrangement with exactly one $-1$, can one reach the arrangement where all numbers are $+1$?"
   },
   "hint": {
    "ru": "Что происходит с произведением всех чисел?",
    "en": "What happens to the product of all the numbers?"
   },
   "sol": {
    "ru": "**Инвариант.** Рассмотрим произведение всех $2025$ чисел.\n\nОдин ход меняет знак у двух чисел, поэтому произведение умножается на $(-1)\\cdot(-1)=1$ — то есть **не меняется**.\n\n**Считаем начальное значение.** В начале ровно одно число равно $-1$, остальные $+1$, поэтому произведение равно $$(-1)\\cdot1\\cdot1\\cdots1=-1 .$$\n\n**Считаем требуемое значение.** Если бы все числа стали $+1$, произведение равнялось бы $$1\\cdot1\\cdots1=+1 .$$\n\n**Противоречие.** Произведение — инвариант, оно всё время равно $-1$ и никогда не станет $+1$.\n\n**Ответ:** нельзя. $\\blacksquare$\n\n*Что если минусов было бы два?* Тогда произведение равно $+1$, и препятствия нет. И действительно, два минуса можно «свести» друг к другу последовательными ходами и уничтожить. В общем случае ответ такой: цель достижима тогда и только тогда, когда минусов чётное число.\n\n*Замечание.* Число $2025$ и то, что числа стоят по кругу, на ответ не влияют — работает только чётность количества минусов.",
    "en": "**The invariant.** Consider the product of all $2025$ numbers.\n\nA move flips two signs, so the product is multiplied by $(-1)\\cdot(-1)=1$ — that is, it **never changes**.\n\n**The starting value.** With exactly one $-1$ and the rest $+1$, the product is $$(-1)\\cdot1\\cdot1\\cdots1=-1 .$$\n\n**The target value.** If all the numbers became $+1$ the product would be $$1\\cdot1\\cdots1=+1 .$$\n\n**Contradiction.** The product is invariant: it stays $-1$ forever and never becomes $+1$.\n\n**Answer:** it cannot be done. $\\blacksquare$\n\n*What if there were two minuses?* Then the product is $+1$ and there is no obstruction — indeed two minuses can be brought together by successive moves and cancelled. In general the goal is reachable exactly when the number of minuses is even.\n\n*Remark.* Neither the value $2025$ nor the circular arrangement affects the answer — only the parity of the number of minuses does."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Может ли конь, выйдя из некоторой клетки шахматной доски, вернуться в неё ровно за $2025$ ходов?",
    "en": "Can a knight leave a square of a chessboard and return to it in exactly $2025$ moves?"
   },
   "hint": {
    "ru": "Какого цвета клетка после каждого хода коня?",
    "en": "What colour is the square after each knight move?"
   },
   "sol": {
    "ru": "**Наблюдение.** Ход коня всегда меняет цвет клетки: конь ходит на $1$ клетку в одном направлении и на $2$ в другом, поэтому сумма координат меняется на $1+2=3$ или на $2-1=1$ — в любом случае на **нечётное** число, а значит меняется её чётность.\n\n**Инвариант.** Отсюда: после чётного числа ходов конь стоит на клетке того же цвета, что и вначале, а после нечётного — на клетке другого цвета.\n\n**Считаем.** Число $2025$ нечётно, поэтому после $2025$ ходов конь окажется на клетке **другого** цвета, чем стартовая. Вернуться в исходную клетку он не может.\n\n**Ответ:** не может. $\\blacksquare$\n\n*Следствие.* Замкнутый маршрут коня всегда состоит из чётного числа ходов. В частности, знаменитый «обход конём», проходящий через все $64$ клетки и возвращающийся в начало, состоит из $64$ ходов — числа чётного, так что препятствия нет; а вот на доске $5\\times5$ замкнутого обхода не существует, потому что клеток $25$ — число нечётное.",
    "en": "**The observation.** A knight’s move always changes the colour of the square: it moves $1$ in one direction and $2$ in the other, so the sum of the coordinates changes by $1+2=3$ or $2-1=1$ — an **odd** number in either case, and its parity flips.\n\n**The invariant.** Hence after an even number of moves the knight stands on a square of the starting colour, and after an odd number on the other colour.\n\n**Count.** The number $2025$ is odd, so after $2025$ moves the knight is on a square of the **other** colour than it started on. It cannot be back on the original square.\n\n**Answer:** it cannot. $\\blacksquare$\n\n*Corollary.* A closed knight’s tour always consists of an even number of moves. The famous tour through all $64$ squares returning to the start uses $64$ moves — even, so nothing forbids it; but on a $5\\times5$ board no closed tour exists, because $25$ squares is an odd number."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что доску $8\\times8$, из которой вырезаны две клетки **разного** цвета, всегда можно покрыть $31$ доминошкой.",
    "en": "Prove that an $8\\times8$ board with two squares of **different** colours removed can always be covered by $31$ dominoes."
   },
   "hint": {
    "ru": "Проведите по доске замкнутый маршрут, проходящий через все клетки.",
    "en": "Draw a closed tour through all the squares of the board."
   },
   "sol": {
    "ru": "Мы уже знаем, что при вырезании клеток одного цвета покрытие невозможно. Здесь докажем, что при разных цветах оно **всегда** возможно.\n\n**Построение маршрута.** Проведём по доске замкнутый маршрут («змейку»), проходящий ровно один раз через каждую из $64$ клеток и возвращающийся в начало. Такой маршрут построить легко: идём по первой строке слева направо, спускаемся в конце, идём по второй строке справа налево, и так до восьмой строки; а из последней клетки восьмой строки поднимаемся по левому столбцу обратно в начало.\n\nСоседние по маршруту клетки соседствуют и на доске, поэтому пара соседних клеток маршрута — это ровно место для доминошки.\n\n**Ключевое свойство маршрута.** Клетки вдоль маршрута чередуются по цвету — ведь соседние клетки доски всегда разного цвета. Маршрут замкнут и содержит $64$ клетки, то есть чётное число, так что чередование согласовано.\n\n**Вырезаем две клетки.** Уберём с маршрута две вырезанные клетки. Замкнутый маршрут распадётся на **две дуги** (если вырезанные клетки не соседние) или на **одну дугу** (если соседние).\n\nВ каждой дуге цвета чередуются, а концы дуги — это клетки, соседние с вырезанными. Так как вырезанные клетки разного цвета, каждая дуга содержит **чётное** число клеток. (Действительно, дуга между двумя вырезанными клетками начинается и заканчивается клетками разных цветов, а вдоль дуги цвета чередуются — значит длина дуги чётна.)\n\n**Покрываем.** Каждую дугу чётной длины разобьём на пары подряд идущих клеток и положим на каждую пару доминошку. Все $62$ клетки окажутся покрыты $31$ доминошкой. $\\blacksquare$\n\n*Замечание.* Это утверждение известно как теорема Гомори. Вместе с задачей о двух углах оно даёт полный ответ: покрытие возможно **тогда и только тогда**, когда вырезаны клетки разного цвета.",
    "en": "We already know that removing two squares of the same colour makes a covering impossible. Here we show that with different colours it is **always** possible.\n\n**Build a tour.** Draw a closed \"snake\" through the board visiting each of the $64$ squares exactly once and returning to the start: run along the first row left to right, step down, run along the second row right to left, and so on to the eighth row; then climb the left column back to the start.\n\nSquares adjacent along the tour are adjacent on the board, so a pair of consecutive tour squares is exactly a place for a domino.\n\n**The key property.** Colours alternate along the tour, since adjacent board squares always differ in colour. The tour is closed and has $64$ squares, an even number, so the alternation is consistent.\n\n**Remove the two squares.** Delete them from the tour. The closed tour falls into **two arcs** (if the removed squares are not consecutive) or **one arc** (if they are).\n\nColours alternate along each arc, and its ends are the squares next to the removed ones. Since the removed squares have different colours, each arc contains an **even** number of squares.\n\n**Cover.** Split each even-length arc into consecutive pairs and place a domino on each. All $62$ squares are covered by $31$ dominoes. $\\blacksquare$\n\n*Remark.* This is Gomory’s theorem. Together with the two-corners problem it gives the complete answer: a covering exists **if and only if** the two removed squares have different colours."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "**Ханойская башня.** На одном из трёх стержней надет $n$ дисков разного размера — сверху меньшие. За ход разрешается переносить верхний диск с одного стержня на другой, но нельзя класть больший диск на меньший. Докажите, что перенести всю башню на другой стержень можно ровно за $2^{n}-1$ ходов и что меньшим числом ходов обойтись нельзя.",
    "en": "**The Tower of Hanoi.** One of three pegs carries $n$ discs of different sizes, the smaller on top. A move takes the top disc from one peg to another, never placing a larger disc on a smaller one. Prove that the whole tower can be moved to another peg in exactly $2^{n}-1$ moves, and that fewer moves are impossible."
   },
   "hint": {
    "ru": "Индукция: чтобы перенести $n$ дисков, надо сначала снять $n-1$ верхних.",
    "en": "Induct: to move $n$ discs the top $n-1$ must be taken off first."
   },
   "sol": {
    "ru": "Обозначим через $T(n)$ наименьшее число ходов, за которое можно перенести башню из $n$ дисков на другой стержень.\n\n**Верхняя оценка: $T(n)\\le2^{n}-1$.** Докажем индукцией, предъявив стратегию.\n\n*База $n=1$:* один диск переносится за один ход, и $2^{1}-1=1$ ✓\n\n*Переход:* пусть башню из $n$ дисков умеем переносить за $2^{n}-1$ ходов. Для $n+1$ дисков поступим так:\n\n$\\bullet$ перенесём верхние $n$ дисков на свободный стержень — $2^{n}-1$ ходов;\n$\\bullet$ перенесём самый большой диск на целевой стержень — $1$ ход;\n$\\bullet$ перенесём $n$ дисков со свободного стержня на целевой — ещё $2^{n}-1$ ходов.\n\nБольшой диск лежит на дне и никому не мешает, поэтому обе «малые» задачи решаются той же стратегией. Всего $$\\left(2^{n}-1\\right)+1+\\left(2^{n}-1\\right)=2^{\\,n+1}-1 . \\qquad\\square$$\n\n**Нижняя оценка: $T(n)\\ge2^{n}-1$.** Снова индукция.\n\n*База $n=1$:* без ходов не обойтись, значит $T(1)\\ge1$ ✓\n\n*Переход:* рассмотрим любую последовательность ходов, переносящую $n+1$ дисков.\n\nВ какой-то момент самый большой диск обязан переместиться (иначе он останется на исходном стержне). Рассмотрим **первый** такой момент. Чтобы сдвинуть самый большой диск, нужно, чтобы над ним ничего не лежало **и** чтобы целевой стержень был свободен. Значит все остальные $n$ дисков в этот момент собраны на **третьем** стержне — то есть перед этим ходом уже была решена задача переноса $n$ дисков, а на неё нужно не менее $T(n)$ ходов.\n\nЗатем идёт ход самого большого диска — ещё $1$.\n\nПосле этого $n$ дисков надо перенести с третьего стержня на целевой — снова не менее $T(n)$ ходов.\n\nИтого $$T(n+1)\\ \\ge\\ 2\\,T(n)+1\\ \\ge\\ 2\\left(2^{n}-1\\right)+1=2^{\\,n+1}-1 . \\qquad\\square$$\n\n**Вывод.** Обе оценки совпадают, значит $$T(n)=2^{n}-1 . \\qquad\\blacksquare$$\n\n*Числа.* Для $n=64$ (легендарная «башня Брахмы») это $2^{64}-1\\approx1{,}8\\cdot10^{19}$ ходов: даже по одному ходу в секунду понадобилось бы около $585$ миллиардов лет.",
    "en": "Let $T(n)$ be the least number of moves needed to shift a tower of $n$ discs to another peg.\n\n**Upper bound: $T(n)\\le2^{n}-1$.** Induct, exhibiting a strategy.\n\n*Base $n=1$:* one disc takes one move, and $2^{1}-1=1$ ✓\n\n*Step:* suppose a tower of $n$ discs can be moved in $2^{n}-1$ moves. For $n+1$ discs:\n\n$\\bullet$ move the top $n$ discs to the free peg — $2^{n}-1$ moves;\n$\\bullet$ move the largest disc to the target peg — $1$ move;\n$\\bullet$ move the $n$ discs from the free peg onto the target — another $2^{n}-1$ moves.\n\nThe largest disc sits at the bottom and never obstructs anything, so both \"small\" tasks use the same strategy. In total $$\\left(2^{n}-1\\right)+1+\\left(2^{n}-1\\right)=2^{\\,n+1}-1 . \\qquad\\square$$\n\n**Lower bound: $T(n)\\ge2^{n}-1$.** Induct again.\n\n*Base $n=1$:* a move is unavoidable, so $T(1)\\ge1$ ✓\n\n*Step:* take any sequence of moves shifting $n+1$ discs.\n\nAt some point the largest disc must move (otherwise it stays put). Consider the **first** such moment. To move the largest disc, nothing may lie on it **and** the target peg must be empty. So at that instant all the other $n$ discs sit on the **third** peg — that is, a shift of $n$ discs has already been completed, needing at least $T(n)$ moves.\n\nThen comes the move of the largest disc — one more.\n\nAfterwards the $n$ discs must go from the third peg to the target — again at least $T(n)$ moves.\n\nAltogether $$T(n+1)\\ \\ge\\ 2\\,T(n)+1\\ \\ge\\ 2\\left(2^{n}-1\\right)+1=2^{\\,n+1}-1 . \\qquad\\square$$\n\n**Conclusion.** The bounds agree, so $$T(n)=2^{n}-1 . \\qquad\\blacksquare$$\n\n*The numbers.* For $n=64$ (the legendary Tower of Brahma) this is $2^{64}-1\\approx1.8\\cdot10^{19}$ moves: even at one move a second it would take about $585$ billion years."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что каждое натуральное число, большее единицы, представимо в виде произведения простых чисел.",
    "en": "Prove that every integer greater than one is a product of primes."
   },
   "hint": {
    "ru": "Сильная индукция или принцип наименьшего элемента.",
    "en": "Strong induction, or the least-element principle."
   },
   "sol": {
    "ru": "**Способ 1: сильная индукция.**\n\n*База $n=2$:* число $2$ простое, значит оно само является произведением одного простого множителя ✓\n\n*Переход:* пусть утверждение верно для всех чисел от $2$ до $n$; докажем его для $n+1$.\n\n$\\bullet$ Если $n+1$ простое, то оно само — искомое произведение (из одного множителя).\n\n$\\bullet$ Если $n+1$ составное, то $n+1=ab$, где $1<a<n+1$ и $1<b<n+1$. Оба числа $a$ и $b$ лежат в промежутке от $2$ до $n$, поэтому по предположению индукции каждое из них разлагается в произведение простых. Перемножив эти разложения, получаем разложение для $n+1$.\n\nДругих случаев нет, значит утверждение верно для всех $n\\ge2$. $\\square$\n\n**Способ 2: принцип наименьшего элемента.**\n\nПредположим противное: существуют числа, большие единицы, не представимые в виде произведения простых. Среди всех таких чисел выберем **наименьшее**; обозначим его $N$. (Такое существует: любое непустое множество натуральных чисел имеет наименьший элемент.)\n\nЧисло $N$ не простое, иначе оно было бы произведением самого себя. Значит $N=ab$ с $1<a,b<N$.\n\nОба множителя меньше $N$ и больше единицы, поэтому — по выбору $N$ как наименьшего «плохого» числа — каждый из них представим в виде произведения простых. Но тогда и $N=ab$ представимо, вопреки предположению.\n\nПротиворечие. $\\blacksquare$\n\n*Замечание.* Оба способа — это одно и то же рассуждение, записанное по-разному: принцип математической индукции и принцип наименьшего элемента равносильны. Заметим, что здесь доказано только **существование** разложения; его **единственность** (основная теорема арифметики) требует отдельного и более тонкого доказательства.",
    "en": "**Way 1: strong induction.**\n\n*Base $n=2$:* the number $2$ is prime, hence itself a product of one prime ✓\n\n*Step:* suppose the claim holds for every number from $2$ to $n$; prove it for $n+1$.\n\n$\\bullet$ If $n+1$ is prime it is itself the required product (of one factor).\n\n$\\bullet$ If $n+1$ is composite then $n+1=ab$ with $1<a<n+1$ and $1<b<n+1$. Both $a$ and $b$ lie between $2$ and $n$, so by the induction hypothesis each is a product of primes. Multiplying those factorisations gives one for $n+1$.\n\nThere are no other cases, so the claim holds for every $n\\ge2$. $\\square$\n\n**Way 2: the least-element principle.**\n\nSuppose not: some integers greater than one are not products of primes. Among all such choose the **smallest**, call it $N$. (One exists: every non-empty set of positive integers has a least element.)\n\n$N$ is not prime, or it would be a product of itself. So $N=ab$ with $1<a,b<N$.\n\nBoth factors are smaller than $N$ and greater than one, so — by the choice of $N$ as the smallest \"bad\" number — each is a product of primes. But then so is $N=ab$, contrary to assumption.\n\nContradiction. $\\blacksquare$\n\n*Remark.* The two ways are the same argument written differently: induction and the least-element principle are equivalent. Note that only the **existence** of a factorisation is proved here; its **uniqueness** (the fundamental theorem of arithmetic) needs a separate and subtler proof."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Куча из $n$ камней делится на две меньшие кучи, при этом записывается произведение их размеров. С каждой получившейся кучей поступают так же, пока не останутся кучи по одному камню. Докажите, что сумма всех записанных произведений не зависит от способа деления, и найдите её.",
    "en": "A pile of $n$ stones is split into two smaller piles and the product of their sizes is recorded. Each resulting pile is split the same way until only single stones remain. Prove that the sum of all recorded products does not depend on how the splitting is done, and find it."
   },
   "hint": {
    "ru": "Посчитайте, сколько пар камней «разделяется» на каждом шаге.",
    "en": "Count how many pairs of stones get \"separated\" at each step."
   },
   "sol": {
    "ru": "**Ответ:** сумма всегда равна $\\dfrac{n(n-1)}{2}$.\n\n**Способ 1: двойной подсчёт по парам.**\n\nРассмотрим всевозможные **пары камней** — их ровно $\\dbinom n2=\\dfrac{n(n-1)}{2}$.\n\nВ начале все камни в одной куче, значит каждая пара находится «вместе». В конце каждый камень лежит один, значит каждая пара «разделена».\n\nКогда куча размера $a+b$ делится на кучи размеров $a$ и $b$, разделяются ровно те пары, у которых один камень попал в первую кучу, а другой — во вторую. Таких пар ровно $ab$ — а это и есть записанное произведение.\n\nКаждая пара разделяется ровно один раз за весь процесс: пока камни вместе, они в одной куче, а после разделения уже никогда не встретятся.\n\nЗначит сумма всех записанных произведений равна общему числу пар: $$\\sum ab=\\binom n2=\\frac{n(n-1)}{2}. \\qquad\\blacksquare$$\n\n**Способ 2: сильная индукция.**\n\nОбозначим через $S(n)$ сумму для кучи из $n$ камней (пока не зная, что она одна и та же).\n\n*База:* $S(1)=0$ — делить нечего, и $\\tfrac{1\\cdot0}{2}=0$ ✓\n\n*Переход:* пусть первое деление дало кучи размеров $a$ и $b$, где $a+b=n$. Тогда $$S(n)=ab+S(a)+S(b).$$ По предположению индукции $S(a)=\\tfrac{a(a-1)}{2}$ и $S(b)=\\tfrac{b(b-1)}{2}$, поэтому $$S(n)=ab+\\frac{a^{2}-a}{2}+\\frac{b^{2}-b}{2}=\\frac{2ab+a^{2}+b^{2}-a-b}{2}=\\frac{(a+b)^{2}-(a+b)}{2}=\\frac{n^{2}-n}{2}.$$ Результат не зависит от выбора $a$ и $b$ — что и требовалось. $\\blacksquare$\n\n*Пример.* Для $n=4$ сумма всегда равна $6$. Деление $4=2+2$, затем каждая двойка пополам: $4+1+1=6$. Деление $4=3+1$, затем $3=2+1$, затем $2=1+1$: $3+2+1=6$ ✓",
    "en": "**Answer:** the sum is always $\\dfrac{n(n-1)}{2}$.\n\n**Way 1: double counting over pairs.**\n\nConsider all **pairs of stones** — there are exactly $\\dbinom n2=\\dfrac{n(n-1)}{2}$ of them.\n\nAt the start all stones are in one pile, so every pair is \"together\". At the end each stone is alone, so every pair is \"separated\".\n\nWhen a pile of size $a+b$ splits into piles of sizes $a$ and $b$, the pairs separated are exactly those with one stone in each part. There are exactly $ab$ of them — which is the recorded product.\n\nEach pair is separated exactly once during the whole process: while together the stones share a pile, and once separated they never meet again.\n\nSo the sum of all recorded products equals the total number of pairs: $$\\sum ab=\\binom n2=\\frac{n(n-1)}{2}. \\qquad\\blacksquare$$\n\n**Way 2: strong induction.**\n\nLet $S(n)$ denote the sum for a pile of $n$ stones (not yet knowing it is well defined).\n\n*Base:* $S(1)=0$ — nothing to split, and $\\tfrac{1\\cdot0}{2}=0$ ✓\n\n*Step:* suppose the first split gives piles of sizes $a$ and $b$ with $a+b=n$. Then $$S(n)=ab+S(a)+S(b).$$ By the induction hypothesis $S(a)=\\tfrac{a(a-1)}{2}$ and $S(b)=\\tfrac{b(b-1)}{2}$, so $$S(n)=ab+\\frac{a^{2}-a}{2}+\\frac{b^{2}-b}{2}=\\frac{2ab+a^{2}+b^{2}-a-b}{2}=\\frac{(a+b)^{2}-(a+b)}{2}=\\frac{n^{2}-n}{2}.$$ The result does not depend on $a$ and $b$ — as required. $\\blacksquare$\n\n*Example.* For $n=4$ the sum is always $6$. Splitting $4=2+2$ and then halving each two: $4+1+1=6$. Splitting $4=3+1$, then $3=2+1$, then $2=1+1$: $3+2+1=6$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Каждая точка плоскости покрашена в один из **трёх** цветов. Докажите, что найдутся две точки одного цвета на расстоянии ровно $1$.",
    "en": "Every point of the plane is coloured in one of **three** colours. Prove that there are two points of the same colour at distance exactly $1$."
   },
   "hint": {
    "ru": "Постройте фигуру из единичных отрезков, у которой две точки удалены на $\\sqrt3$, и предположите противное.",
    "en": "Build a figure of unit segments with two points $\\sqrt3$ apart, and argue by contradiction."
   },
   "sol": {
    "ru": "**Предположим противное:** никакие две точки на расстоянии $1$ не окрашены одинаково. Тогда концы любого единичного отрезка имеют разные цвета.\n\n**Шаг 1: ромб из двух треугольников.** Возьмём точку $A$ и построим ромб $ABCD$ из двух равносторонних треугольников со стороной $1$: $$ABD\\ \\text{и}\\ CBD,$$ где $B$ и $D$ — общие вершины, а $A$ и $C$ — противоположные концы длинной диагонали.\n\nВ треугольнике $ABD$ все три стороны единичные, поэтому по предположению все три вершины разного цвета — а цветов ровно три, значит цвета $A$, $B$, $D$ — это все три цвета.\n\nТочно так же в треугольнике $CBD$ вершины $C$, $B$, $D$ окрашены во все три цвета. Но цвета $B$ и $D$ уже заняты, поэтому $C$ имеет **тот же цвет, что и $A$**.\n\n**Шаг 2: длина диагонали.** Посчитаем $AC$. Диагональ ромба, составленного из двух равносторонних треугольников со стороной $1$, равна удвоенной высоте такого треугольника: $$AC=2\\cdot\\frac{\\sqrt3}{2}=\\sqrt3 .$$\n\nИтак, доказано: **любые две точки на расстоянии $\\sqrt3$ одноцветны.**\n\n**Шаг 3: противоречие.** Возьмём произвольную точку $O$ и окружность радиуса $\\sqrt3$ с центром в ней. По шагу 2 все точки этой окружности имеют тот же цвет, что и $O$ — то есть вся окружность одноцветна.\n\nНо радиус $\\sqrt3>\\tfrac12$, поэтому на такой окружности найдутся две точки на расстоянии ровно $1$: хорда длины $1$ существует в любой окружности радиуса не меньше $\\tfrac12$.\n\nЭти две точки одноцветны и удалены на $1$ — противоречие с предположением. $\\blacksquare$\n\n*Замечание.* Утверждение верно и для трёх цветов, и, как показывает та же конструкция в усиленном виде, для четырёх — а вот для семи цветов плоскость раскрасить без одноцветных единичных пар **можно**. Точное наименьшее число цветов (так называемое хроматическое число плоскости) до сих пор неизвестно: доказано лишь, что оно лежит между $5$ и $7$.",
    "en": "**Suppose not:** no two points at distance $1$ share a colour. Then the ends of any unit segment have different colours.\n\n**Step 1: a rhombus of two triangles.** Take a point $A$ and build a rhombus $ABCD$ from two equilateral triangles of side $1$: $$ABD\\ \\text{and}\\ CBD,$$ where $B$ and $D$ are the shared vertices and $A$, $C$ the opposite ends of the long diagonal.\n\nIn the triangle $ABD$ all three sides are unit, so by assumption all three vertices have different colours — and there are exactly three colours, so $A$, $B$, $D$ use all of them.\n\nLikewise in $CBD$ the vertices $C$, $B$, $D$ use all three colours. But the colours of $B$ and $D$ are already taken, so $C$ has **the same colour as $A$**.\n\n**Step 2: the diagonal.** Compute $AC$. The long diagonal of a rhombus made of two equilateral triangles of side $1$ is twice the altitude of such a triangle: $$AC=2\\cdot\\frac{\\sqrt3}{2}=\\sqrt3 .$$\n\nSo we have shown: **any two points at distance $\\sqrt3$ have the same colour.**\n\n**Step 3: the contradiction.** Take any point $O$ and the circle of radius $\\sqrt3$ around it. By Step 2 every point of that circle has the colour of $O$ — the whole circle is monochromatic.\n\nBut the radius $\\sqrt3>\\tfrac12$, so that circle carries two points at distance exactly $1$: a chord of length $1$ exists in any circle of radius at least $\\tfrac12$.\n\nThose two points share a colour and are $1$ apart — contradicting the assumption. $\\blacksquare$\n\n*Remark.* The statement holds for three colours and, by a strengthened version of the same construction, for four — while with seven colours the plane **can** be coloured with no monochromatic unit pair. The exact minimum (the chromatic number of the plane) is still unknown: it is only known to lie between $5$ and $7$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "В классе $30$ учеников. Известно, что среди любых трёх из них найдутся двое знакомых. Докажите, что найдётся ученик, у которого не менее $15$ знакомых в классе.",
    "en": "A class has $30$ pupils, and among any three of them two are acquainted. Prove that some pupil has at least $15$ acquaintances in the class."
   },
   "hint": {
    "ru": "Если кто-то не знаком с двумя учениками, посмотрите на этих двоих.",
    "en": "If someone is unacquainted with two pupils, look at those two."
   },
   "sol": {
    "ru": "**Случай 1: все ученики попарно знакомы.** Тогда у каждого по $29$ знакомых, и утверждение очевидно.\n\n**Случай 2: есть двое незнакомых.** Пусть ученики $A$ и $B$ не знакомы.\n\nВозьмём любого третьего ученика $C$. По условию среди тройки $\\{A,B,C\\}$ найдутся двое знакомых. Знакомыми не могут быть $A$ и $B$, значит $C$ знаком с $A$ или с $B$ (возможно, с обоими).\n\nЗначит **каждый** из оставшихся $28$ учеников знаком хотя бы с одним из $A$, $B$.\n\nОбозначим через $x$ число знакомых у $A$ и через $y$ — у $B$. Каждый из $28$ учеников учтён хотя бы в одном из этих чисел, поэтому $$x+y\\ \\ge\\ 28 .$$\n\nПо принципу среднего одно из чисел $x$, $y$ не меньше $\\dfrac{28}{2}=14$. Если хотя бы одно из них не меньше $15$, утверждение доказано.\n\n**Остаётся случай $x=y=14$.** Тогда $x+y=28$, а значит **каждый** из $28$ учеников знаком ровно с одним из $A$, $B$ — если бы кто-то был знаком с обоими, сумма превысила бы $28$. Разобьём этих $28$ на две группы: $P$ — знакомые $A$ (их $14$) и $Q$ — знакомые $B$ (их $14$).\n\nВозьмём любого $p\\in P$ и любого $q\\in Q$. Рассмотрим тройку $\\{p,q,A\\}$: ученик $q$ не знаком с $A$ (иначе он попал бы и в $P$), поэтому знакомыми должны быть $p$ и $q$.\n\nЗначит **каждый** ученик из $P$ знаком с **каждым** из $Q$. Тогда у любого $p\\in P$ есть как минимум $14$ знакомых в $Q$ плюс сам $A$ — итого не менее $15$ знакомых.\n\n**Вывод.** В любом случае найдётся ученик, у которого не менее $15$ знакомых. $\\blacksquare$",
    "en": "**Case 1: everybody knows everybody.** Then each pupil has $29$ acquaintances and the claim is clear.\n\n**Case 2: two pupils are unacquainted.** Say $A$ and $B$ do not know each other.\n\nTake any third pupil $C$. By hypothesis two of $\\{A,B,C\\}$ are acquainted, and it cannot be $A$ and $B$, so $C$ knows $A$ or $B$ (possibly both).\n\nSo **every** one of the remaining $28$ pupils knows at least one of $A$, $B$.\n\nLet $x$ be the number of acquaintances of $A$ and $y$ that of $B$. Each of the $28$ is counted in at least one of these, so $$x+y\\ \\ge\\ 28 ,$$ and the averaging principle gives $\\max(x,y)\\ge14$. If one of them is at least $15$ we are done.\n\n**The remaining case is $x=y=14$.** Then $x+y=28$, so **each** of the $28$ knows exactly one of $A$, $B$ — anyone knowing both would push the sum above $28$. Split them into $P$, the acquaintances of $A$ ($14$ of them), and $Q$, those of $B$ ($14$ of them).\n\nTake any $p\\in P$ and any $q\\in Q$ and look at the triple $\\{p,q,A\\}$: the pupil $q$ does not know $A$ (else $q$ would be in $P$ too), so $p$ and $q$ must be acquainted.\n\nHence **every** pupil of $P$ knows **every** pupil of $Q$. So any $p\\in P$ has at least $14$ acquaintances in $Q$ plus $A$ himself — at least $15$ in all.\n\n**Conclusion.** In every case some pupil has at least $15$ acquaintances. $\\blacksquare$"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что сумма двух чётных чисел чётна.",
    "en": "Prove that the sum of two even numbers is even."
   },
   "hint": {
    "ru": "Чётное число имеет вид $2k$.",
    "en": "An even number has the form $2k$."
   },
   "sol": {
    "ru": "Пусть числа чётные: $$a=2m,\\qquad b=2n ,$$ где $m$ и $n$ целые.\n\nТогда $$a+b=2m+2n=2(m+n),$$ и множитель $m+n$ целый. Значит сумма делится на $2$, то есть чётна. $\\blacksquare$\n\n**Заметьте**, как устроено доказательство: мы **записали** определение чётности, а не проверяли отдельные примеры. Одна такая выкладка заменяет бесконечный перебор.",
    "en": "Let the numbers be even: $$a=2m,\\qquad b=2n $$ with $m$, $n$ integers.\n\nThen $$a+b=2m+2n=2(m+n),$$ and $m+n$ is an integer. So the sum is divisible by $2$, i.e. even. $\\blacksquare$\n\n**Note** the shape of the proof: we **wrote out** the definition rather than checking examples. One such line replaces an infinite search."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Запишите отрицание утверждения «каждый ученик сдал экзамен».",
    "en": "Write the negation of \"every student passed the exam\"."
   },
   "hint": {
    "ru": "Отрицание «для всех» — это «существует такой, что не…».",
    "en": "The negation of \"for all\" is \"there exists one that does not…\"."
   },
   "sol": {
    "ru": "Исходное утверждение имеет вид «для **каждого** ученика верно: он сдал».\n\nЕго отрицание — «**существует** ученик, для которого неверно, что он сдал», то есть $$\\textbf{«некоторый ученик не сдал экзамен»} .$$\n\n**Частая ошибка.** Отрицанием **не** является «ни один ученик не сдал» — это гораздо более сильное утверждение.\n\n**Схема.** $$\\neg\\bigl(\\forall x\\ P(x)\\bigr)\\ \\equiv\\ \\exists x\\ \\neg P(x) ,$$ $$\\neg\\bigl(\\exists x\\ P(x)\\bigr)\\ \\equiv\\ \\forall x\\ \\neg P(x) .$$",
    "en": "The original says \"for **every** student: they passed\".\n\nIts negation is \"**there exists** a student for whom it is false that they passed\", i.e. $$\\textbf{\"some student did not pass the exam\"} .$$\n\n**A common mistake.** The negation is **not** \"no student passed\" — that is a far stronger claim.\n\n**The scheme.** $$\\neg\\bigl(\\forall x\\ P(x)\\bigr)\\ \\equiv\\ \\exists x\\ \\neg P(x) ,$$ $$\\neg\\bigl(\\exists x\\ P(x)\\bigr)\\ \\equiv\\ \\forall x\\ \\neg P(x) .$$"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Равносильны ли утверждения «если идёт дождь, то земля мокрая» и «если земля мокрая, то идёт дождь»?",
    "en": "Are the statements \"if it rains, the ground is wet\" and \"if the ground is wet, it rains\" equivalent?"
   },
   "hint": {
    "ru": "Второе — это обратное утверждение, а не противоположное.",
    "en": "The second is the converse, not the contrapositive."
   },
   "sol": {
    "ru": "Нет, не равносильны. Второе утверждение — **обратное** к первому, а обратное вовсе не обязано быть верным.\n\n**Контрпример.** Землю могли полить из шланга: земля мокрая, а дождя нет. Значит первое утверждение может быть истинным, а второе — ложным.\n\n**Что действительно равносильно первому** — это **противоположное к обратному** (контрапозиция): $$\\textbf{«если земля не мокрая, то дождя нет»} .$$\n\n**Схема.** $$\\left(P\\Rightarrow Q\\right)\\ \\equiv\\ \\left(\\neg Q\\Rightarrow\\neg P\\right),\\qquad\\text{но}\\qquad \\left(P\\Rightarrow Q\\right)\\ \\not\\equiv\\ \\left(Q\\Rightarrow P\\right).$$",
    "en": "No. The second is the **converse** of the first, and a converse need not hold.\n\n**Counterexample.** Someone watered the ground with a hose: it is wet, yet there is no rain. So the first can be true while the second is false.\n\n**What really is equivalent to the first** is the **contrapositive**: $$\\textbf{\"if the ground is not wet, it is not raining\"} .$$\n\n**The scheme.** $$\\left(P\\Rightarrow Q\\right)\\ \\equiv\\ \\left(\\neg Q\\Rightarrow\\neg P\\right),\\qquad\\text{but}\\qquad \\left(P\\Rightarrow Q\\right)\\ \\not\\equiv\\ \\left(Q\\Rightarrow P\\right).$$"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что сумма чётного и нечётного числа нечётна.",
    "en": "Prove that the sum of an even and an odd number is odd."
   },
   "hint": {
    "ru": "Нечётное число имеет вид $2k+1$.",
    "en": "An odd number has the form $2k+1$."
   },
   "sol": {
    "ru": "Пусть $a=2m$ чётно, а $b=2n+1$ нечётно. Тогда $$a+b=2m+2n+1=2(m+n)+1 ,$$ а число вида $2k+1$ по определению нечётно. $\\blacksquare$\n\n**Полная таблица чётности сложения:** $$\\text{ч}+\\text{ч}=\\text{ч},\\qquad \\text{ч}+\\text{н}=\\text{н},\\qquad \\text{н}+\\text{н}=\\text{ч} .$$\n\n**Зачем это нужно.** Чётность — простейший **инвариант**: величина, которая не меняется (или меняется предсказуемо) при разрешённых операциях. Именно на ней держится большинство задач «докажите, что нельзя».",
    "en": "Let $a=2m$ be even and $b=2n+1$ odd. Then $$a+b=2m+2n+1=2(m+n)+1 ,$$ and a number of the form $2k+1$ is odd by definition. $\\blacksquare$\n\n**The full parity table for addition:** $$\\text{even}+\\text{even}=\\text{even},\\qquad \\text{even}+\\text{odd}=\\text{odd},\\qquad \\text{odd}+\\text{odd}=\\text{even} .$$\n\n**Why it matters.** Parity is the simplest **invariant** — a quantity unchanged (or changed predictably) by the allowed moves. Most \"prove it is impossible\" problems rest on one."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Докажите по индукции, что $1+2+\\dots+n=\\dfrac{n(n+1)}{2}$.",
    "en": "Prove by induction that $1+2+\\dots+n=\\dfrac{n(n+1)}{2}$."
   },
   "hint": {
    "ru": "База и переход.",
    "en": "Base case and inductive step."
   },
   "sol": {
    "ru": "**База $n=1$.** Слева $1$, справа $\\dfrac{1\\cdot2}{2}=1$ ✓\n\n**Переход.** Пусть формула верна для $n$. Тогда $$1+2+\\dots+n+(n+1)=\\frac{n(n+1)}{2}+(n+1).$$\n\nВынесем общий множитель $n+1$: $$(n+1)\\left(\\frac n2+1\\right)=(n+1)\\cdot\\frac{n+2}{2}=\\frac{(n+1)(n+2)}{2} ,$$ а это в точности формула при $n+1$ ✓\n\nПо принципу математической индукции формула верна при всех натуральных $n$. $\\blacksquare$\n\n**Из чего состоит индукция.** База (утверждение верно в начальной точке) и переход (из верности для $n$ следует верность для $n+1$). Пропуск любого из двух шагов делает доказательство недействительным.",
    "en": "**Base $n=1$.** The left side is $1$, the right $\\dfrac{1\\cdot2}{2}=1$ ✓\n\n**Step.** Suppose the formula holds for $n$. Then $$1+2+\\dots+n+(n+1)=\\frac{n(n+1)}{2}+(n+1).$$\n\nTake out $n+1$: $$(n+1)\\left(\\frac n2+1\\right)=\\frac{(n+1)(n+2)}{2} ,$$ exactly the formula at $n+1$ ✓\n\nBy induction the formula holds for all positive integers. $\\blacksquare$\n\n**What induction consists of.** A base (the statement holds at the start) and a step (from $n$ to $n+1$). Skipping either invalidates the proof."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что если $n$ нечётно, то $n^{2}$ нечётно.",
    "en": "Prove that if $n$ is odd then $n^{2}$ is odd."
   },
   "hint": {
    "ru": "Подставьте $n=2k+1$.",
    "en": "Substitute $n=2k+1$."
   },
   "sol": {
    "ru": "Пусть $n=2k+1$. Тогда $$n^{2}=(2k+1)^{2}=4k^{2}+4k+1=2\\left(2k^{2}+2k\\right)+1 ,$$ то есть $n^{2}$ имеет вид «чётное плюс один» — нечётно. $\\blacksquare$\n\n**Контрапозиция.** Это же утверждение можно прочитать так: «если $n^{2}$ чётно, то $n$ чётно» — и именно в такой форме оно используется в доказательстве иррациональности $\\sqrt2$.",
    "en": "Let $n=2k+1$. Then $$n^{2}=(2k+1)^{2}=4k^{2}+4k+1=2\\left(2k^{2}+2k\\right)+1 ,$$ so $n^{2}$ is \"even plus one\" — odd. $\\blacksquare$\n\n**Contrapositive.** The same statement reads: \"if $n^{2}$ is even then $n$ is even\" — and it is in this form that it is used to prove $\\sqrt2$ irrational."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите по индукции, что $6^{n}-1$ делится на $5$ при всех целых $n\\ge1$.",
    "en": "Prove by induction that $6^{n}-1$ is divisible by $5$ for every integer $n\\ge1$."
   },
   "hint": {
    "ru": "В переходе выделите $6^{n}-1$.",
    "en": "In the step, isolate $6^{n}-1$."
   },
   "sol": {
    "ru": "**База $n=1$.** $6-1=5$ делится на $5$ ✓\n\n**Переход.** Пусть $5\\mid6^{n}-1$. Тогда $$6^{\\,n+1}-1=6\\cdot6^{n}-1=6\\left(6^{n}-1\\right)+5 .$$\n\nПервое слагаемое делится на $5$ по предположению индукции, второе — очевидно. Значит и вся сумма делится на $5$ ✓\n\nПо индукции утверждение верно при всех $n\\ge1$. $\\blacksquare$\n\n**Тот же результат без индукции:** $$6^{n}-1=(6-1)\\left(6^{\\,n-1}+6^{\\,n-2}+\\dots+1\\right)=5\\cdot(\\dots) .$$\n\n**Полезно уметь и так, и так:** индукция работает всегда, а разложение на множители — быстрее, когда оно есть.",
    "en": "**Base $n=1$.** $6-1=5$ is divisible by $5$ ✓\n\n**Step.** Suppose $5\\mid6^{n}-1$. Then $$6^{\\,n+1}-1=6\\cdot6^{n}-1=6\\left(6^{n}-1\\right)+5 .$$\n\nThe first term is divisible by $5$ by the induction hypothesis and the second obviously is, so the whole sum is ✓\n\nBy induction the claim holds for all $n\\ge1$. $\\blacksquare$\n\n**The same without induction:** $$6^{n}-1=(6-1)\\left(6^{\\,n-1}+\\dots+1\\right)=5\\cdot(\\dots) .$$\n\n**Both are worth knowing:** induction always works, while a factorisation is faster when one exists."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $\\log_2 3$ — иррациональное число.",
    "en": "Prove that $\\log_2 3$ is irrational."
   },
   "hint": {
    "ru": "Предположите $\\log_2 3=\\frac pq$ и избавьтесь от логарифма.",
    "en": "Assume $\\log_2 3=\\frac pq$ and clear the logarithm."
   },
   "sol": {
    "ru": "Заметим сразу, что $\\log_2 3>0$ (ведь $3>1$).\n\n**Предположим противное:** $$\\log_2 3=\\frac pq $$ с натуральными $p$ и $q$.\n\nПо определению логарифма это означает $$2^{\\,p/q}=3\\quad\\Longleftrightarrow\\quad 2^{p}=3^{q} .$$\n\n**Противоречие.** Левая часть чётна (ведь $p\\ge1$), а правая нечётна как степень нечётного числа ✗\n\nМожно и иначе: по основной теореме арифметики разложение числа на простые единственно, а слева стоят только двойки, справа — только тройки; равенство невозможно при $p,q\\ge1$.\n\nЗначит $\\log_2 3$ иррационально. $\\blacksquare$\n\n**То же рассуждение** показывает, что $\\log_a b$ иррационален всегда, когда $a$ и $b$ — натуральные числа больше единицы с разными наборами простых делителей.",
    "en": "Note first that $\\log_2 3>0$ (since $3>1$).\n\n**Suppose the contrary:** $$\\log_2 3=\\frac pq $$ with $p$, $q$ positive integers.\n\nBy the definition of the logarithm this means $$2^{\\,p/q}=3\\quad\\Longleftrightarrow\\quad 2^{p}=3^{q} .$$\n\n**Contradiction.** The left side is even (as $p\\ge1$) while the right is odd, being a power of an odd number ✗\n\nAlternatively: by unique factorisation the left side has only twos and the right only threes, so equality is impossible for $p,q\\ge1$.\n\nHence $\\log_2 3$ is irrational. $\\blacksquare$\n\n**The same argument** shows $\\log_a b$ is irrational whenever $a$ and $b$ are integers greater than one with different sets of prime divisors."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "На доске написаны числа $1,2,\\dots,10$. За один ход разрешается стереть два числа и написать их разность (в любом порядке). Может ли в конце остаться число $0$?",
    "en": "The numbers $1,2,\\dots,10$ are on a board. A move erases two of them and writes their difference (in either order). Can the final number be $0$?"
   },
   "hint": {
    "ru": "Следите за чётностью суммы всех чисел.",
    "en": "Track the parity of the total sum."
   },
   "sol": {
    "ru": "**Инвариант — чётность суммы.** Пусть на доске стёрли числа $a$ и $b$, а написали $a-b$. Сумма всех чисел изменилась на $$(a-b)-(a+b)=-2b ,$$ то есть на чётную величину. Значит **чётность суммы не меняется** ни при каком ходе.\n\n**Начальная сумма.** $$1+2+\\dots+10=\\frac{10\\cdot11}{2}=55 $$ — нечётна.\n\n**Вывод.** Сумма остаётся нечётной всё время, значит и последнее оставшееся число нечётно. А $0$ чётно ✗\n\n**Ответ:** нет, нельзя.\n\n**А что может остаться?** Любое нечётное число от $1$ до $55$ подходящей чётности — например, единицу получить легко: $2-1=1$, затем $4-3=1$ и так далее, а из полученных единиц собрать нужное.",
    "en": "**The invariant is the parity of the sum.** If $a$ and $b$ are erased and $a-b$ written, the total changes by $$(a-b)-(a+b)=-2b ,$$ an even amount. So **the parity of the sum never changes**.\n\n**The initial sum.** $$1+2+\\dots+10=\\frac{10\\cdot11}{2}=55 $$ is odd.\n\n**Conclusion.** The sum stays odd throughout, so the last remaining number is odd. But $0$ is even ✗\n\n**Answer:** no, it is impossible.\n\n**What can remain?** Any odd number of the right size — for instance $1$ is easy: $2-1=1$, $4-3=1$, and so on."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Может ли конь обойти все клетки доски $5\\times5$, побывав в каждой ровно один раз, и вернуться в исходную клетку?",
    "en": "Can a knight tour all squares of a $5\\times5$ board, visiting each exactly once, and return to the starting square?"
   },
   "hint": {
    "ru": "Конь всегда меняет цвет клетки.",
    "en": "A knight always changes the colour of its square."
   },
   "sol": {
    "ru": "Покрасим доску $5\\times5$ в шахматном порядке, начиная с чёрного угла. Тогда чёрных клеток $13$, а белых $12$ (всего $25$).\n\n**Ключевое свойство коня.** Любой ход коня переводит его с клетки одного цвета на клетку другого цвета.\n\n**Замкнутый обход.** Он состоит из $25$ ходов (по одному на каждый переход, включая возвращение). Цвета вдоль обхода чередуются, значит после $25$ ходов — нечётного числа — конь окажется на клетке **другого** цвета, чем стартовая ✗\n\nНо он должен вернуться в исходную клетку того же цвета. Противоречие.\n\n**Ответ:** нельзя.\n\n**Другой способ увидеть то же.** В замкнутом обходе клетки двух цветов чередуются, значит их должно быть поровну; а у нас $13\\ne12$.\n\n**Замечание.** Незамкнутый обход доски $5\\times5$ существует — он обязан начинаться и заканчиваться на клетках «многочисленного» цвета.",
    "en": "Colour the $5\\times5$ board like a chessboard, starting from a black corner. Then there are $13$ black and $12$ white squares.\n\n**The knight’s key property.** Every knight move changes the colour of the square.\n\n**A closed tour.** It consists of $25$ moves (one per step, including the return). The colours alternate along the tour, so after $25$ moves — an odd number — the knight stands on a square of the **opposite** colour to the start ✗\n\nBut it must return to the starting square, of the same colour. Contradiction.\n\n**Answer:** it is impossible.\n\n**Another way to see it.** In a closed tour the two colours alternate, so their counts must be equal; here $13\\ne12$.\n\n**Remark.** An open tour of the $5\\times5$ board does exist — it must begin and end on squares of the majority colour."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что в любой компании число людей, имеющих нечётное количество знакомых внутри компании, чётно.",
    "en": "Prove that in any company the number of people having an odd number of acquaintances inside the company is even."
   },
   "hint": {
    "ru": "Посчитайте сумму всех «количеств знакомых».",
    "en": "Add up everybody’s number of acquaintances."
   },
   "sol": {
    "ru": "Обозначим через $d_i$ число знакомых $i$-го человека и посчитаем сумму $$S=d_1+d_2+\\dots+d_n .$$\n\n**Ключевое наблюдение.** Каждое знакомство — это пара людей, и оно вносит в сумму ровно $2$ (по единице каждому из двоих). Значит $$S=2\\cdot(\\text{число знакомств}) $$ — **чётное** число.\n\n**Вывод.** В сумме $S$ чётные слагаемые чётности не портят, значит чётность $S$ совпадает с чётностью количества **нечётных** слагаемых. Раз $S$ чётно, нечётных слагаемых чётное число. $\\blacksquare$\n\n**Это «лемма о рукопожатиях».** Из неё, например, следует, что в компании не может быть ровно один человек с нечётным числом знакомых.\n\n**Следствие.** Если в стране каждый город соединён дорогами ровно с тремя другими, то городов чётное число: сумма степеней $3n$ должна быть чётной.",
    "en": "Let $d_i$ be the number of acquaintances of person $i$ and consider $$S=d_1+d_2+\\dots+d_n .$$\n\n**Key observation.** Each acquaintance is a pair of people and contributes exactly $2$ to the sum (one to each). So $$S=2\\cdot(\\text{number of acquaintanceships}) $$ is **even**.\n\n**Conclusion.** Even summands do not affect parity, so the parity of $S$ equals the parity of the number of **odd** summands. As $S$ is even, that number is even. $\\blacksquare$\n\n**This is the handshake lemma.** It implies, for instance, that a company cannot contain exactly one person with an odd number of acquaintances.\n\n**Corollary.** If in a country every city is joined by roads to exactly three others, the number of cities is even: the degree sum $3n$ must be even."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что доску $6\\times6$ нельзя разрезать на прямоугольники $1\\times4$.",
    "en": "Prove that a $6\\times6$ board cannot be cut into $1\\times4$ rectangles."
   },
   "hint": {
    "ru": "Покрасьте клетку $(i,j)$ в цвет $(i+j)\\bmod 4$.",
    "en": "Colour the cell $(i,j)$ with $(i+j)\\bmod 4$."
   },
   "sol": {
    "ru": "Пронумеруем строки и столбцы числами $0,1,\\dots,5$ и покрасим клетку $(i,j)$ в цвет $$c(i,j)=(i+j)\\bmod 4 .$$\n\n**Что делает деталь $1\\times4$.** Горизонтальная деталь занимает клетки $(i,j),(i,j+1),(i,j+2),(i,j+3)$, их цвета — четыре подряд идущих остатка, то есть **все четыре цвета по одному разу**. То же верно и для вертикальной детали.\n\n**Считаем клетки каждого цвета.** В строке $i$ столбцы $j=0,\\dots,5$ дают цвета $$i,\\ i+1,\\ i+2,\\ i+3,\\ i,\\ i+1 \\pmod 4 ,$$ то есть цвета $i$ и $i+1$ встречаются дважды, а $i+2$ и $i+3$ — по одному разу.\n\nПросуммировав по всем шести строкам, получаем количества $$9,\\quad 10,\\quad 9,\\quad 8 $$ клеток цветов $0,1,2,3$ соответственно.\n\n**Противоречие.** Если бы разрезание существовало, деталей было бы $\\dfrac{36}{4}=9$, и каждая покрывала бы по одной клетке каждого цвета — значит всех цветов было бы ровно по $9$. Но у нас $10$ и $8$ ✗\n\n**Ответ:** разрезать нельзя. $\\blacksquare$\n\n**Сравните:** доску $4\\times4$ на такие детали разрезать можно, а $6\\times6$ — нет, хотя площадь и делится на $4$. Делимость площади необходима, но не достаточна.",
    "en": "Number the rows and columns $0,1,\\dots,5$ and colour the cell $(i,j)$ with $$c(i,j)=(i+j)\\bmod 4 .$$\n\n**What a $1\\times4$ piece does.** A horizontal piece covers $(i,j),(i,j+1),(i,j+2),(i,j+3)$, whose colours are four consecutive residues — **all four colours once each**. The same holds for a vertical piece.\n\n**Count the cells of each colour.** In row $i$ the columns $j=0,\\dots,5$ give colours $$i,\\ i+1,\\ i+2,\\ i+3,\\ i,\\ i+1 \\pmod 4 ,$$ so colours $i$ and $i+1$ occur twice while $i+2$, $i+3$ occur once.\n\nSumming over the six rows gives $$9,\\quad 10,\\quad 9,\\quad 8 $$ cells of colours $0,1,2,3$.\n\n**Contradiction.** A tiling would use $\\dfrac{36}{4}=9$ pieces, each covering one cell of every colour — so every colour would appear exactly $9$ times. But we have $10$ and $8$ ✗\n\n**Answer:** no such cutting exists. $\\blacksquare$\n\n**Compare:** a $4\\times4$ board *can* be cut into such pieces, a $6\\times6$ cannot, even though the area is divisible by $4$. Divisibility of the area is necessary but not sufficient."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что если $a^{2}+b^{2}$ делится на $3$, то и $a$, и $b$ делятся на $3$.",
    "en": "Prove that if $a^{2}+b^{2}$ is divisible by $3$ then both $a$ and $b$ are divisible by $3$."
   },
   "hint": {
    "ru": "Какие остатки даёт квадрат по модулю $3$?",
    "en": "What remainders can a square leave modulo $3$?"
   },
   "sol": {
    "ru": "**Квадраты по модулю $3$.** Если $3\\mid a$, то $a^{2}\\equiv0$. Если $a\\equiv\\pm1$, то $a^{2}\\equiv1$. Значит $$a^{2}\\in\\{0,1\\}\\pmod 3 ,$$ и то же для $b^{2}$.\n\n**Разбор сумм.** Возможные значения $a^{2}+b^{2}$ по модулю $3$: $$0+0=0,\\qquad 0+1=1,\\qquad 1+0=1,\\qquad 1+1=2 .$$\n\nНоль получается **только** в первом случае, то есть когда $a^{2}\\equiv0$ и $b^{2}\\equiv0$, а это и означает $3\\mid a$ и $3\\mid b$. $\\blacksquare$\n\n**Следствие.** Уравнение $a^{2}+b^{2}=3c^{2}$ не имеет решений в натуральных числах: из доказанного $3\\mid a$ и $3\\mid b$, откуда после подстановки получается меньшее решение — бесконечный спуск.\n\n**Осторожно:** для модуля $5$ аналогичное утверждение неверно: $1^{2}+2^{2}=5$, но ни $1$, ни $2$ на $5$ не делятся.",
    "en": "**Squares modulo $3$.** If $3\\mid a$ then $a^{2}\\equiv0$; if $a\\equiv\\pm1$ then $a^{2}\\equiv1$. So $$a^{2}\\in\\{0,1\\}\\pmod 3 ,$$ and likewise for $b^{2}$.\n\n**The possible sums.** Modulo $3$, $a^{2}+b^{2}$ can be $$0+0=0,\\qquad 0+1=1,\\qquad 1+0=1,\\qquad 1+1=2 .$$\n\nZero arises **only** in the first case, i.e. when $a^{2}\\equiv0$ and $b^{2}\\equiv0$, which means $3\\mid a$ and $3\\mid b$. $\\blacksquare$\n\n**Corollary.** The equation $a^{2}+b^{2}=3c^{2}$ has no positive solutions: the statement forces $3\\mid a$, $3\\mid b$, and substituting produces a smaller solution — infinite descent.\n\n**Careful:** the analogue for the modulus $5$ is false: $1^{2}+2^{2}=5$, yet neither $1$ nor $2$ is divisible by $5$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "На столе стоят семь стаканов вверх дном. За один ход разрешается перевернуть ровно два стакана. Можно ли поставить все стаканы правильно?",
    "en": "Seven glasses stand upside down on a table. A move turns over exactly two glasses. Can all the glasses be made to stand upright?"
   },
   "hint": {
    "ru": "Следите за чётностью числа перевёрнутых стаканов.",
    "en": "Track the parity of the number of upside-down glasses."
   },
   "sol": {
    "ru": "**Инвариант — чётность числа стаканов, стоящих вверх дном.** За один ход мы переворачиваем два стакана, и число «неправильных» меняется на $$+2,\\qquad 0\\qquad\\text{или}\\qquad -2 $$ (в зависимости от того, были ли перевёрнутые стаканы правильными, разными или неправильными).\n\nВо всех случаях изменение чётное, значит **чётность этого числа сохраняется**.\n\n**Начало и цель.** В начале неправильных стаканов $7$ — нечётное число. В цели их должно быть $0$ — чётное ✗\n\n**Ответ:** нельзя.\n\n**А если стаканов восемь?** Тогда всё получается: разбейте их на четыре пары и переверните каждую пару.\n\n**Общее правило:** задача разрешима ровно тогда, когда число перевёрнутых стаканов чётно.",
    "en": "**The invariant is the parity of the number of upside-down glasses.** A move turns two glasses, so that count changes by $$+2,\\qquad 0\\qquad\\text{or}\\qquad -2 ,$$ depending on how the two were standing.\n\nIn every case the change is even, so **the parity is preserved**.\n\n**Start and goal.** Initially $7$ glasses are wrong — an odd number. The goal has $0$ — even ✗\n\n**Answer:** it is impossible.\n\n**What if there were eight glasses?** Then it works: split them into four pairs and flip each pair.\n\n**General rule:** the task is solvable exactly when the number of upside-down glasses is even."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите по индукции, что $n!>2^{n}$ при всех целых $n\\ge4$.",
    "en": "Prove by induction that $n!>2^{n}$ for every integer $n\\ge4$."
   },
   "hint": {
    "ru": "В переходе воспользуйтесь тем, что $n+1>2$.",
    "en": "In the step use that $n+1>2$."
   },
   "sol": {
    "ru": "**База $n=4$.** $$4!=24>16=2^{4} \\quad\\checkmark$$\n\n**Переход.** Пусть $n!>2^{n}$ для некоторого $n\\ge4$. Тогда $$(n+1)!=(n+1)\\cdot n!\\ >\\ (n+1)\\cdot2^{n} .$$\n\nТак как $n\\ge4$, имеем $n+1\\ge5>2$, поэтому $$(n+1)\\cdot2^{n}\\ >\\ 2\\cdot2^{n}=2^{\\,n+1} .$$\n\nЗначит $(n+1)!>2^{\\,n+1}$ ✓\n\nПо индукции неравенство верно при всех $n\\ge4$. $\\blacksquare$\n\n**Почему нельзя начать раньше.** При $n=1,2,3$ неравенство неверно: $1<2$, $2<4$, $6<8$. Именно поэтому база берётся при $n=4$.\n\n**Заодно видно**, насколько быстро факториал обгоняет показательную функцию: $10!=3\\,628\\,800$, а $2^{10}=1024$.",
    "en": "**Base $n=4$.** $$4!=24>16=2^{4} \\quad\\checkmark$$\n\n**Step.** Suppose $n!>2^{n}$ for some $n\\ge4$. Then $$(n+1)!=(n+1)\\cdot n!\\ >\\ (n+1)\\cdot2^{n} .$$\n\nSince $n\\ge4$ we have $n+1\\ge5>2$, so $$(n+1)\\cdot2^{n}\\ >\\ 2\\cdot2^{n}=2^{\\,n+1} ,$$ giving $(n+1)!>2^{\\,n+1}$ ✓\n\nBy induction the inequality holds for all $n\\ge4$. $\\blacksquare$\n\n**Why not start earlier.** For $n=1,2,3$ it fails: $1<2$, $2<4$, $6<8$. That is exactly why the base is at $n=4$.\n\n**It also shows** how fast the factorial overtakes the exponential: $10!=3\\,628\\,800$ against $2^{10}=1024$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите от противного: если произведение двух целых чисел нечётно, то оба множителя нечётны.",
    "en": "Prove by contradiction: if the product of two integers is odd, both factors are odd."
   },
   "hint": {
    "ru": "Предположите, что хотя бы один множитель чётен.",
    "en": "Suppose at least one factor is even."
   },
   "sol": {
    "ru": "**Предположим противное:** хотя бы один множитель чётен, скажем $a=2k$.\n\nТогда $$ab=2kb=2(kb) ,$$ то есть произведение чётно — противоречие с условием ✗\n\nЗначит оба множителя нечётны. $\\blacksquare$\n\n**Заметьте:** отрицанием утверждения «оба нечётны» является «хотя бы один чётен» (а не «оба чётны»). Правильно построить отрицание — половина дела в доказательстве от противного.\n\n**Прямое доказательство** тоже возможно, через контрапозицию: если хотя бы один множитель чётен, то произведение чётно.",
    "en": "**Suppose the contrary:** at least one factor is even, say $a=2k$.\n\nThen $$ab=2kb=2(kb) ,$$ so the product is even — contradicting the hypothesis ✗\n\nHence both factors are odd. $\\blacksquare$\n\n**Note:** the negation of \"both are odd\" is \"at least one is even\" (not \"both are even\"). Getting the negation right is half the work in a proof by contradiction.\n\n**A direct proof** is possible too, via the contrapositive: if at least one factor is even then the product is even."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что $\\sqrt2+\\sqrt3$ — иррациональное число.",
    "en": "Prove that $\\sqrt2+\\sqrt3$ is irrational."
   },
   "hint": {
    "ru": "Возведите в квадрат и сведите к иррациональности $\\sqrt6$.",
    "en": "Square it and reduce to the irrationality of $\\sqrt6$."
   },
   "sol": {
    "ru": "**Шаг 1: сведение.** Предположим противное: $$r=\\sqrt2+\\sqrt3 $$ рационально. Возведём в квадрат: $$r^{2}=2+2\\sqrt6+3=5+2\\sqrt6 ,$$ откуда $$\\sqrt6=\\frac{r^{2}-5}{2} .$$ Правая часть рациональна, значит и $\\sqrt6$ рационально.\n\n**Шаг 2: $\\sqrt6$ иррационально.** Предположим $$\\sqrt6=\\frac pq $$ — несократимая дробь. Тогда $$p^{2}=6q^{2} .$$\n\nЛевая часть делится на $2$, значит $p$ чётно (квадрат нечётного нечётен); положим $p=2m$: $$4m^{2}=6q^{2}\\quad\\Longrightarrow\\quad 2m^{2}=3q^{2} .$$\n\nТеперь левая часть чётна, значит $3q^{2}$ чётно, а поскольку $3$ нечётно, чётно $q^{2}$, а с ним и $q$.\n\nНо тогда $p$ и $q$ оба чётны — противоречие с несократимостью ✗\n\n**Вывод.** $\\sqrt6$ иррационально, значит и исходное предположение неверно: число $\\sqrt2+\\sqrt3$ иррационально. $\\blacksquare$\n\n**Замечание.** Само по себе «сумма двух иррациональных иррациональна» — **неверно**: $\\sqrt2+\\left(-\\sqrt2\\right)=0$. Поэтому нужен именно такой обходной путь.",
    "en": "**Step 1: reduction.** Suppose $$r=\\sqrt2+\\sqrt3 $$ is rational. Squaring, $$r^{2}=2+2\\sqrt6+3=5+2\\sqrt6 ,$$ so $$\\sqrt6=\\frac{r^{2}-5}{2} ,$$ a rational number.\n\n**Step 2: $\\sqrt6$ is irrational.** Suppose $$\\sqrt6=\\frac pq $$ in lowest terms. Then $$p^{2}=6q^{2} .$$\n\nThe left side is even, so $p$ is even (an odd square is odd); write $p=2m$: $$4m^{2}=6q^{2}\\quad\\Longrightarrow\\quad 2m^{2}=3q^{2} .$$\n\nNow the left side is even, so $3q^{2}$ is even, and since $3$ is odd, $q^{2}$ is even and so is $q$.\n\nBut then $p$ and $q$ are both even, contradicting lowest terms ✗\n\n**Conclusion.** $\\sqrt6$ is irrational, so the original assumption fails: $\\sqrt2+\\sqrt3$ is irrational. $\\blacksquare$\n\n**Remark.** \"A sum of two irrationals is irrational\" is **false** in general: $\\sqrt2+\\left(-\\sqrt2\\right)=0$. Hence the detour above is genuinely needed."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Из доски $8\\times8$ вырезали две противоположные угловые клетки. Докажите, что оставшуюся фигуру нельзя замостить костями домино $1\\times2$.",
    "en": "Two opposite corner squares are cut from an $8\\times8$ board. Prove that the rest cannot be tiled by $1\\times2$ dominoes."
   },
   "hint": {
    "ru": "Противоположные углы одного цвета.",
    "en": "Opposite corners have the same colour."
   },
   "sol": {
    "ru": "Покрасим доску в шахматном порядке: $32$ белых и $32$ чёрных клетки.\n\n**Шаг 1: какого цвета вырезанные клетки.** Противоположные углы доски всегда одного цвета (скажем, оба чёрные). Значит после вырезания остаётся $$32\\ \\text{белых}\\qquad\\text{и}\\qquad 30\\ \\text{чёрных} $$ клеток.\n\n**Шаг 2: что покрывает домино.** Любая кость $1\\times2$ занимает две соседние по стороне клетки, а соседние клетки всегда разного цвета. Значит каждая кость покрывает ровно одну белую и одну чёрную клетку.\n\n**Шаг 3: противоречие.** Если бы замощение существовало, оно состояло бы из $\\dfrac{62}{2}=31$ кости и покрывало бы поровну белых и чёрных клеток — по $31$. Но белых $32$, а чёрных $30$ ✗\n\n**Ответ:** замостить нельзя. $\\blacksquare$\n\n**Сравните с обратным фактом:** если вырезать две клетки **разных** цветов, замощение всегда существует (это уже более трудная теорема).\n\n**Мораль.** Раскраска — самый частый способ строить инвариант в задачах о замощениях.",
    "en": "Colour the board like a chessboard: $32$ white and $32$ black squares.\n\n**Step 1: the colour of the removed squares.** Opposite corners always share a colour (say both black). So what remains is $$32\\ \\text{white}\\qquad\\text{and}\\qquad 30\\ \\text{black} $$ squares.\n\n**Step 2: what a domino covers.** A $1\\times2$ domino occupies two side-adjacent squares, and adjacent squares always differ in colour. So each domino covers exactly one white and one black square.\n\n**Step 3: contradiction.** A tiling would consist of $\\dfrac{62}{2}=31$ dominoes covering $31$ squares of each colour. But there are $32$ white and $30$ black ✗\n\n**Answer:** no tiling exists. $\\blacksquare$\n\n**Compare with the converse fact:** removing two squares of **different** colours always leaves a tileable region (a harder theorem).\n\n**Moral.** Colouring is the commonest way to build an invariant in tiling problems."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что доску $2^{n}\\times2^{n}$ с одной вырезанной клеткой всегда можно замостить уголками из трёх клеток.",
    "en": "Prove that a $2^{n}\\times2^{n}$ board with one square removed can always be tiled by L-shaped trominoes."
   },
   "hint": {
    "ru": "Индукция: разрежьте доску на четыре четверти.",
    "en": "Induct: split the board into four quarters."
   },
   "sol": {
    "ru": "**База $n=1$.** Доска $2\\times2$ без одной клетки — это ровно уголок из трёх клеток ✓\n\n**Переход.** Пусть утверждение верно для доски $2^{n}\\times2^{n}$; докажем его для $2^{\\,n+1}\\times2^{\\,n+1}$.\n\nРазрежем большую доску на **четыре** квадранта размером $2^{n}\\times2^{n}$. Вырезанная клетка попала ровно в один из них.\n\n**Ключевой ход.** Положим один уголок в центр доски так, чтобы он занял по одной клетке в каждом из **трёх остальных** квадрантов (уголок как раз накрывает три из четырёх центральных клеток).\n\nТеперь в каждом квадранте ровно одна клетка «занята»: в первом — вырезанная, в остальных трёх — клетка, накрытая центральным уголком.\n\n**Применяем предположение индукции.** Каждый квадрант — это доска $2^{n}\\times2^{n}$ с одной недостающей клеткой, значит он замощается уголками ✓\n\nСобирая четыре замощения вместе с центральным уголком, получаем замощение всей доски. $\\blacksquare$\n\n**Проверка по площади:** $$\\frac{4^{n}-1}{3} $$ — целое число при любом $n$, ведь $4^{n}-1$ делится на $3$. Это необходимое условие, и индукция показывает, что оно ещё и достаточно.\n\n**Пример.** Доска $4\\times4$ без одной клетки замощается пятью уголками: $\\dfrac{16-1}{3}=5$ ✓",
    "en": "**Base $n=1$.** A $2\\times2$ board minus one square *is* an L-tromino ✓\n\n**Step.** Assume the claim for $2^{n}\\times2^{n}$ and prove it for $2^{\\,n+1}\\times2^{\\,n+1}$.\n\nCut the big board into **four** quadrants of size $2^{n}\\times2^{n}$. The removed square lies in exactly one of them.\n\n**The key move.** Place one tromino at the centre so that it occupies one square in each of the **other three** quadrants (an L covers exactly three of the four central squares).\n\nNow every quadrant has exactly one occupied square: the removed one in the first, and the tromino’s square in the other three.\n\n**Apply the induction hypothesis.** Each quadrant is a $2^{n}\\times2^{n}$ board with one square missing, hence tileable ✓\n\nCombining the four tilings with the central tromino tiles the whole board. $\\blacksquare$\n\n**Area check:** $$\\frac{4^{n}-1}{3} $$ is an integer for every $n$, since $3\\mid4^{n}-1$. That is a necessary condition, and the induction shows it is sufficient too.\n\n**Example.** A $4\\times4$ board minus a square takes five trominoes: $\\dfrac{16-1}{3}=5$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "В турнире каждые двое сыграли ровно одну партию, ничьих не было. Докажите, что найдётся участник, который каждого из остальных либо обыграл сам, либо обыграл того, кто обыграл этого остальных (то есть победил его «в один или два хода»).",
    "en": "In a tournament every two players met exactly once and there were no draws. Prove that some player beat every other player either directly or through one intermediate player."
   },
   "hint": {
    "ru": "Возьмите участника с наибольшим числом побед.",
    "en": "Take a player with the most wins."
   },
   "sol": {
    "ru": "Возьмём участника $A$ с **наибольшим** числом побед (если таких несколько — любого из них). Докажем, что он и есть искомый.\n\n**Предположим противное:** найдётся участник $B$, которого $A$ не побеждает ни напрямую, ни через одного посредника. Это значит:\n\n$B$ обыграл $A$;\n\n$B$ обыграл **каждого**, кого обыграл $A$ (иначе нашёлся бы посредник).\n\n**Считаем победы $B$.** Он выиграл у всех, у кого выиграл $A$ — это $k$ побед, где $k$ — число побед $A$; и сверх того он выиграл у самого $A$. Значит у $B$ не менее $$k+1 $$ побед.\n\n**Противоречие.** Но $A$ был выбран как участник с наибольшим числом побед, то есть $k\\ge k+1$ ✗\n\nЗначит такого $B$ нет, и участник $A$ подходит. $\\blacksquare$\n\n**Такого участника называют «королём» турнира.** Королей может быть несколько, и король вовсе не обязан быть победителем турнира по числу очков — он лишь «достаёт» каждого не более чем за два шага.\n\n**Пример.** Если трое игроков победили друг друга по кругу, то каждый из них — король.",
    "en": "Take a player $A$ with the **greatest** number of wins (any one, if several tie). We claim $A$ works.\n\n**Suppose not:** some player $B$ is beaten by $A$ neither directly nor through one intermediary. That means:\n\n$B$ beat $A$;\n\n$B$ beat **everyone** whom $A$ beat (otherwise there would be an intermediary).\n\n**Count $B$’s wins.** $B$ beat everyone $A$ beat — that is $k$ wins, where $k$ is $A$’s total — and in addition beat $A$ itself. So $B$ has at least $$k+1 $$ wins.\n\n**Contradiction.** But $A$ was chosen with the most wins, so $k\\ge k+1$ ✗\n\nHence no such $B$ exists and $A$ works. $\\blacksquare$\n\n**Such a player is called a \"king\".** There may be several kings, and a king need not be the tournament winner on points — it merely reaches everyone in at most two steps.\n\n**Example.** If three players beat one another cyclically, each of them is a king."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "В куче лежит $20$ камней. Двое по очереди берут $1$, $2$ или $3$ камня; берущий последний камень выигрывает. Кто выигрывает при правильной игре?",
    "en": "A pile has $20$ stones. Two players alternately take $1$, $2$ or $3$ stones; whoever takes the last stone wins. Who wins with correct play?"
   },
   "hint": {
    "ru": "Какие количества камней проигрышны для того, кто ходит?",
    "en": "Which pile sizes are losing for the player to move?"
   },
   "sol": {
    "ru": "**Идея: найти проигрышные позиции.** Назовём позицию **проигрышной**, если игрок, которому ходить, при правильной игре соперника проигрывает.\n\n**Утверждение:** проигрышны ровно те позиции, где число камней кратно $4$.\n\n**Доказательство индукцией по числу камней.**\n\nПозиция $0$ проигрышна: ходящему нечего брать, значит последний камень взял соперник ✓\n\nЕсли камней $4k$, то любой ход оставляет $4k-1$, $4k-2$ или $4k-3$ — ни одно из этих чисел не кратно четырём, то есть соперник получает выигрышную позицию.\n\nЕсли камней **не** кратно четырём, то, взяв остаток от деления на $4$ (это $1$, $2$ или $3$ камня), можно оставить сопернику кратное четырём число — то есть проигрышную позицию.\n\n**Применяем.** $20=4\\cdot5$ кратно четырём, значит начальная позиция **проигрышна для первого игрока**.\n\n**Ответ:** выигрывает второй.\n\n**Его стратегия.** Каждым своим ходом дополнять ход соперника до четырёх камней: взял тот $1$ — берём $3$, взял $2$ — берём $2$, взял $3$ — берём $1$. Тогда после каждой пары ходов из кучи уходит ровно $4$ камня, и второй игрок в итоге забирает последний. $\\blacksquare$\n\n**Обобщение.** В игре с кучей из $n$ камней и разрешёнными ходами $1,\\dots,k$ проигрышны ровно позиции, кратные $k+1$.",
    "en": "**The idea: find the losing positions.** Call a position **losing** if the player to move loses against correct play.\n\n**Claim:** the losing positions are exactly those where the number of stones is a multiple of $4$.\n\n**Proof by induction on the pile size.**\n\nPosition $0$ is losing: there is nothing to take, so the opponent took the last stone ✓\n\nIf there are $4k$ stones, every move leaves $4k-1$, $4k-2$ or $4k-3$ — none a multiple of four, so the opponent gets a winning position.\n\nIf the number is **not** a multiple of four, taking its remainder mod $4$ (that is $1$, $2$ or $3$ stones) leaves the opponent a multiple of four — a losing position.\n\n**Apply it.** $20=4\\cdot5$ is a multiple of four, so the initial position is **losing for the first player**.\n\n**Answer:** the second player wins.\n\n**The strategy.** Always complete the opponent’s move to four stones: they take $1$, you take $3$; they take $2$, you take $2$; they take $3$, you take $1$. Each pair of moves removes exactly $4$ stones, and the second player takes the last one. $\\blacksquare$\n\n**Generalisation.** With moves $1,\\dots,k$ allowed, the losing positions are exactly the multiples of $k+1$."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "В таблице $4\\times4$ расставлены числа $+1$ и $-1$. Разрешается менять знак у всех чисел любой строки или любого столбца. Докажите, что можно добиться того, чтобы сумма всех чисел таблицы стала неотрицательной.",
    "en": "A $4\\times4$ table is filled with $+1$ and $-1$. One may flip the sign of every entry in a chosen row or column. Prove that one can make the total sum non-negative."
   },
   "hint": {
    "ru": "Следите за общей суммой: она может только расти.",
    "en": "Track the total sum: it can only increase."
   },
   "sol": {
    "ru": "Обозначим через $S$ сумму всех $16$ чисел таблицы.\n\n**Монотонная величина.** Пусть у какой-то строки сумма её элементов равна $s<0$. Поменяв знаки в этой строке, мы заменим её вклад $s$ на $-s$, то есть общая сумма изменится на $$-s-s=-2s>0 .$$\n\nЗначит **каждая такая операция строго увеличивает $S$**. То же верно для столбца.\n\n**Процесс конечен.** Величина $S$ принимает лишь конечное число значений (это целые числа от $-16$ до $16$) и при каждой операции строго растёт. Значит операций можно сделать лишь конечное число, и процесс обязательно остановится.\n\n**Что означает остановка.** Останавливаемся мы ровно тогда, когда **ни у одной строки и ни у одного столбца сумма не отрицательна**.\n\n**Вывод.** В этот момент $$S=\\sum_{\\text{строки}}\\left(\\text{сумма строки}\\right)\\ \\ge\\ 0 ,$$ поскольку каждое слагаемое неотрицательно. $\\blacksquare$\n\n**Что здесь работает.** Это приём **монотонной величины** (монова́рианта): мы не описываем алгоритм явно, а лишь показываем, что «жадные» шаги не могут продолжаться вечно.\n\n**Замечание.** Тот же довод работает для любой таблицы $m\\times n$ с любыми вещественными числами — важна только конечность числа возможных значений суммы, которую даёт конечность числа расстановок знаков.",
    "en": "Let $S$ be the sum of all $16$ entries.\n\n**A monotone quantity.** Suppose some row has entry-sum $s<0$. Flipping that row replaces its contribution $s$ by $-s$, so the total changes by $$-s-s=-2s>0 .$$\n\nSo **each such operation strictly increases $S$**. The same holds for a column.\n\n**The process is finite.** The value $S$ takes only finitely many values (integers from $-16$ to $16$) and strictly increases at each operation, so only finitely many operations are possible and the process must stop.\n\n**What stopping means.** We stop exactly when **no row and no column has a negative sum**.\n\n**Conclusion.** At that moment $$S=\\sum_{\\text{rows}}\\left(\\text{row sum}\\right)\\ \\ge\\ 0 ,$$ every summand being non-negative. $\\blacksquare$\n\n**The technique.** This is a **monovariant** argument: instead of describing an algorithm we merely show that greedy steps cannot go on forever.\n\n**Remark.** The same reasoning works for any $m\\times n$ table — all that matters is that there are finitely many sign patterns."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что каждое натуральное число представимо в двоичной системе счисления, и притом единственным образом.",
    "en": "Prove that every positive integer has a binary representation, and that it is unique."
   },
   "hint": {
    "ru": "Существование — сильная индукция; единственность — сравнение с суммой геометрической прогрессии.",
    "en": "Existence: strong induction. Uniqueness: compare with a geometric sum."
   },
   "sol": {
    "ru": "**Существование (сильная индукция).** Пусть утверждение верно для всех чисел, меньших $n$; докажем его для $n$.\n\nЕсли $n=1$, то $n=2^{0}$ ✓ Пусть $n\\ge2$ и $2^{k}$ — наибольшая степень двойки, не превосходящая $n$. Рассмотрим $$m=n-2^{k} .$$ По максимальности $2^{k}$ имеем $n<2^{\\,k+1}$, значит $$0\\le m=n-2^{k}<2^{\\,k+1}-2^{k}=2^{k} .$$\n\nЕсли $m=0$, то $n=2^{k}$ ✓ Иначе $m<n$, и по предположению индукции $m$ раскладывается в сумму различных степеней двойки, причём все они меньше $2^{k}$. Добавив $2^{k}$, получаем разложение для $n$ ✓\n\n**Единственность.** Предположим, что у числа два разных разложения в сумму различных степеней двойки. Выбросим общие слагаемые — останутся два **непустых** набора без общих элементов и с равными суммами (непустых, потому что иначе один из наборов был бы пуст, а его сумма — нулём, что невозможно при непустом втором).\n\nПусть $2^{k}$ — наибольшая степень, встречающаяся в первом наборе. Все элементы второго набора строго меньше $2^{k}$ (они отличны от $2^{k}$, а больших там быть не может — иначе взяли бы их), значит его сумма не превосходит $$2^{\\,k-1}+2^{\\,k-2}+\\dots+2^{0}=2^{k}-1\\ <\\ 2^{k} .$$\n\nНо сумма первого набора не меньше $2^{k}$ ✗\n\nПротиворечие завершает доказательство. $\\blacksquare$\n\n**Пример.** $$100=64+32+4=2^{6}+2^{5}+2^{2}\\ \\longrightarrow\\ 1100100_2 .$$\n\n**Ключевое неравенство** $2^{0}+\\dots+2^{\\,k-1}<2^{k}$ — то же самое, что делает двоичную запись «жадной»: старший разряд всегда важнее всех младших вместе взятых.",
    "en": "**Existence (strong induction).** Assume the claim for all numbers below $n$ and prove it for $n$.\n\nIf $n=1$ then $n=2^{0}$ ✓ Let $n\\ge2$ and let $2^{k}$ be the largest power of two not exceeding $n$. Put $$m=n-2^{k} .$$ Maximality gives $n<2^{\\,k+1}$, so $$0\\le m<2^{\\,k+1}-2^{k}=2^{k} .$$\n\nIf $m=0$ then $n=2^{k}$ ✓ Otherwise $m<n$, and by the induction hypothesis $m$ is a sum of distinct powers of two, all below $2^{k}$. Adding $2^{k}$ gives a representation of $n$ ✓\n\n**Uniqueness.** Suppose a number has two different representations as sums of distinct powers of two. Discard the common terms — two **non-empty** sets with no common element and equal sums remain.\n\nLet $2^{k}$ be the largest power in the first set. Every element of the second set is strictly below $2^{k}$, so its sum is at most $$2^{\\,k-1}+\\dots+2^{0}=2^{k}-1\\ <\\ 2^{k} ,$$ while the first set sums to at least $2^{k}$ ✗\n\nThe contradiction finishes the proof. $\\blacksquare$\n\n**Example.** $$100=64+32+4=2^{6}+2^{5}+2^{2}\\ \\longrightarrow\\ 1100100_2 .$$\n\n**The key inequality** $2^{0}+\\dots+2^{\\,k-1}<2^{k}$ is exactly what makes binary greedy: the leading digit outweighs all the lower ones together."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что у любого выпуклого многогранника есть грань, у которой не более пяти сторон.",
    "en": "Prove that every convex polyhedron has a face with at most five edges."
   },
   "hint": {
    "ru": "Воспользуйтесь формулой Эйлера $V-E+F=2$ и подсчётом «грань — ребро».",
    "en": "Use Euler’s formula $V-E+F=2$ and a face–edge count."
   },
   "sol": {
    "ru": "**Предположим противное:** у каждой грани не менее шести сторон.\n\n**Подсчёт «грань — ребро».** Каждое ребро принадлежит ровно двум граням, поэтому $$2E=\\sum_{\\text{грани}}\\left(\\text{число сторон грани}\\right)\\ \\ge\\ 6F\\quad\\Longrightarrow\\quad F\\ \\le\\ \\frac E3 .$$\n\n**Подсчёт «вершина — ребро».** В каждой вершине выпуклого многогранника сходятся не менее трёх рёбер, а каждое ребро имеет два конца, значит $$2E\\ \\ge\\ 3V\\quad\\Longrightarrow\\quad V\\ \\le\\ \\frac{2E}{3} .$$\n\n**Формула Эйлера.** $$2=V-E+F\\ \\le\\ \\frac{2E}{3}-E+\\frac E3=E\\left(\\frac23-1+\\frac13\\right)=0 ,$$ то есть $2\\le0$ ✗\n\nПротиворечие показывает, что грань с не более чем пятью сторонами обязательно найдётся. $\\blacksquare$\n\n**Примеры «на грани».** У додекаэдра все грани пятиугольные — оценка достигается. У куба грани квадратные, у тетраэдра — треугольные.\n\n**Двойственное утверждение.** Точно так же доказывается, что есть вершина, в которой сходится не более пяти рёбер.\n\n**Зачем это нужно.** Именно этот факт лежит в основе доказательства того, что любую карту можно раскрасить в шесть (а на самом деле в четыре) цвета.",
    "en": "**Suppose the contrary:** every face has at least six edges.\n\n**A face–edge count.** Each edge belongs to exactly two faces, so $$2E=\\sum_{\\text{faces}}\\left(\\text{edges of the face}\\right)\\ \\ge\\ 6F\\quad\\Longrightarrow\\quad F\\ \\le\\ \\frac E3 .$$\n\n**A vertex–edge count.** At every vertex of a convex polyhedron at least three edges meet, and each edge has two ends, so $$2E\\ \\ge\\ 3V\\quad\\Longrightarrow\\quad V\\ \\le\\ \\frac{2E}{3} .$$\n\n**Euler’s formula.** $$2=V-E+F\\ \\le\\ \\frac{2E}{3}-E+\\frac E3=0 ,$$ i.e. $2\\le0$ ✗\n\nThe contradiction shows that a face with at most five edges must exist. $\\blacksquare$\n\n**Sharp examples.** The dodecahedron has all faces pentagonal — the bound is attained. The cube has squares, the tetrahedron triangles.\n\n**The dual statement.** The same argument shows there is a vertex where at most five edges meet.\n\n**Why it matters.** This is precisely the fact behind the proof that any map can be coloured in six (in fact four) colours."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Числа $1,2,\\dots,2025$ выписаны на доске. За ход стирают два числа $a$ и $b$ и пишут $a+b$. Так делают, пока не останется одно число. Может ли оно быть чётным?",
    "en": "The numbers $1,2,\\dots,2025$ are on a board. A move erases two numbers $a$, $b$ and writes $a+b$. This continues until one number remains. Can it be even?"
   },
   "hint": {
    "ru": "Что происходит с суммой всех чисел на доске?",
    "en": "What happens to the sum of all the numbers on the board?"
   },
   "sol": {
    "ru": "**Инвариант — сумма всех чисел.** При замене $a$ и $b$ на $a+b$ сумма всех чисел на доске **не меняется вовсе**: мы убрали $a+b$ и добавили $a+b$.\n\n**Начальная сумма.** $$1+2+\\dots+2025=\\frac{2025\\cdot2026}{2}=2025\\cdot1013 .$$\n\nОба множителя нечётны, значит произведение нечётно.\n\n**Вывод.** Сумма всё время остаётся равной этому нечётному числу. Когда останется одно число, оно и будет этой суммой, то есть **нечётным**.\n\n**Ответ:** нет, чётным оно быть не может — последнее число обязательно равно $2025\\cdot1013=2\\,051\\,325$.\n\n**Сравните** с задачей, где вместо суммы пишут **разность**: там сохраняется лишь чётность суммы, и результат может быть любым числом нужной чётности. Полезно всегда спрашивать себя: сохраняется сама величина или только её остаток?",
    "en": "**The invariant is the total sum.** Replacing $a$ and $b$ by $a+b$ leaves the total **completely unchanged**: we removed $a+b$ and added $a+b$.\n\n**The initial sum.** $$1+2+\\dots+2025=\\frac{2025\\cdot2026}{2}=2025\\cdot1013 .$$\n\nBoth factors are odd, so the product is odd.\n\n**Conclusion.** The total stays equal to that odd number throughout. When one number is left it *is* the total, hence **odd**.\n\n**Answer:** no — the final number is necessarily $2025\\cdot1013=2\\,051\\,325$.\n\n**Compare** with the variant where the **difference** is written: there only the parity of the sum is preserved, and the result can be any number of that parity. Always ask: is the quantity itself invariant, or only its residue?"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите формулу Эйлера $V-E+F=2$ для выпуклого многогранника (или, что то же самое, для связного плоского графа с учётом внешней области).",
    "en": "Prove Euler’s formula $V-E+F=2$ for a convex polyhedron (equivalently, for a connected plane graph counting the outer region)."
   },
   "hint": {
    "ru": "Спроецируйте многогранник на плоскость и ведите индукцию по числу рёбер.",
    "en": "Project the polyhedron onto the plane and induct on the number of edges."
   },
   "sol": {
    "ru": "**Шаг 1: сведение к плоскости.** Выберем точку внутри многогранника и спроецируем его поверхность на плоскость (или, что нагляднее, «раздуем» многогранник в сферу и проколем её в одной точке внутри какой-нибудь грани). Получится связный **плоский граф**: вершины и рёбра сохранятся, а грани превратятся в области плоскости, причём проколотая грань станет внешней бесконечной областью.\n\nТаким образом, $V$, $E$ и $F$ не изменились, и достаточно доказать формулу для связного плоского графа.\n\n**Шаг 2: индукция по числу рёбер.**\n\n**База:** у связного графа без циклов (дерева) $$E=V-1,\\qquad F=1 $$ (единственная область — внешняя), и $$V-E+F=V-(V-1)+1=2 \\quad\\checkmark$$\n\n**Переход.** Пусть в графе есть цикл. Возьмём любое ребро $e$, лежащее на цикле. Оно разделяет две **разные** области (внутреннюю и внешнюю по отношению к циклу). Удалим $e$:\n\nграф останется связным (концы $e$ по-прежнему соединены остатком цикла);\n\nчисло рёбер уменьшится на $1$;\n\nдве области сольются в одну, значит число граней уменьшится на $1$;\n\nчисло вершин не изменится.\n\nВыражение $V-E+F$ при этом не меняется: $$V-(E-1)+(F-1)=V-E+F .$$\n\nПовторяя удаления, доберёмся до дерева, для которого формула уже доказана. $\\blacksquare$\n\n**Проверка на примерах.** Куб: $8-12+6=2$ ✓ Тетраэдр: $4-6+4=2$ ✓ Додекаэдр: $20-30+12=2$ ✓\n\n**Где это работает и где нет.** Формула верна для многогранников, «похожих на сферу». Для тора (баранки) получается $V-E+F=0$ — число $2$ здесь не универсально, а отражает форму поверхности.",
    "en": "**Step 1: reduce to the plane.** Pick a point inside the polyhedron and project its surface onto a plane (equivalently, inflate the polyhedron into a sphere and puncture it inside one face). The result is a connected **plane graph**: vertices and edges survive, faces become regions of the plane, and the punctured face becomes the outer infinite region.\n\nSo $V$, $E$, $F$ are unchanged and it suffices to prove the formula for a connected plane graph.\n\n**Step 2: induct on the number of edges.**\n\n**Base:** a connected acyclic graph (a tree) has $$E=V-1,\\qquad F=1 $$ (only the outer region), and $$V-E+F=V-(V-1)+1=2 \\quad\\checkmark$$\n\n**Step.** Suppose the graph has a cycle. Take an edge $e$ on that cycle. It separates two **different** regions (inside and outside the cycle). Delete $e$:\n\nthe graph stays connected (the ends of $e$ are still joined by the rest of the cycle);\n\nthe edge count drops by $1$;\n\nthe two regions merge, so the face count drops by $1$;\n\nthe vertex count is unchanged.\n\nThe expression $V-E+F$ is therefore unchanged: $$V-(E-1)+(F-1)=V-E+F .$$\n\nRepeating the deletions reaches a tree, where the formula is already proved. $\\blacksquare$\n\n**Examples.** Cube: $8-12+6=2$ ✓ Tetrahedron: $4-6+4=2$ ✓ Dodecahedron: $20-30+12=2$ ✓\n\n**Scope.** The formula holds for polyhedra \"shaped like a sphere\". For a torus one gets $V-E+F=0$ — the $2$ is not universal but reflects the shape of the surface."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что принцип математической индукции и принцип наименьшего числа (всякое непустое множество натуральных чисел имеет наименьший элемент) равносильны.",
    "en": "Prove that the principle of mathematical induction and the least-number principle (every non-empty set of positive integers has a least element) are equivalent."
   },
   "hint": {
    "ru": "В обе стороны рассуждайте от противного, рассматривая множество «плохих» чисел.",
    "en": "In both directions argue by contradiction, looking at the set of \"bad\" numbers."
   },
   "sol": {
    "ru": "**Из индукции следует принцип наименьшего числа.**\n\nПусть $M$ — непустое множество натуральных чисел, и предположим, что наименьшего элемента у него нет. Обозначим через $P(n)$ утверждение «ни одно из чисел $1,2,\\dots,n$ не лежит в $M$».\n\n$P(1)$ верно: иначе $1$ лежало бы в $M$ и было бы наименьшим.\n\nПусть верно $P(n)$. Если бы $n+1$ лежало в $M$, оно было бы наименьшим элементом (все меньшие не в $M$) — противоречие. Значит верно $P(n+1)$.\n\nПо индукции $P(n)$ верно при всех $n$, то есть $M$ не содержит **ни одного** натурального числа — противоречие с непустотой ✗\n\n**Из принципа наименьшего числа следует индукция.**\n\nПусть $P(1)$ верно и из $P(n)$ следует $P(n+1)$. Обозначим $$M=\\{n:\\ P(n)\\ \\text{ложно}\\} .$$\n\nЕсли $M$ непусто, у него есть наименьший элемент $m$. Так как $P(1)$ верно, $m\\ne1$, значит $m\\ge2$ и число $m-1$ натуральное. По минимальности $m$ утверждение $P(m-1)$ верно, а тогда по условию перехода верно и $P(m)$ — противоречие с $m\\in M$ ✗\n\nЗначит $M$ пусто, то есть $P(n)$ верно при всех $n$. $\\blacksquare$\n\n**Практический смысл.** Это объясняет, почему «спуск Ферма» (взять наименьшее решение и построить меньшее) и обычная индукция — по сути один и тот же инструмент, только повёрнутый разными сторонами.\n\n**Осторожно:** принцип наименьшего числа неверен для целых чисел (у множества всех целых нет наименьшего) и для положительных рациональных — именно дискретность натурального ряда делает его работоспособным.",
    "en": "**Induction implies the least-number principle.**\n\nLet $M$ be a non-empty set of positive integers and suppose it has no least element. Let $P(n)$ be \"none of $1,2,\\dots,n$ lies in $M$\".\n\n$P(1)$ holds: otherwise $1$ would be in $M$ and would be least.\n\nSuppose $P(n)$ holds. If $n+1$ were in $M$ it would be the least element (all smaller numbers are outside) — a contradiction. So $P(n+1)$ holds.\n\nBy induction $P(n)$ holds for all $n$, so $M$ contains **no** positive integer — contradicting non-emptiness ✗\n\n**The least-number principle implies induction.**\n\nSuppose $P(1)$ holds and $P(n)$ implies $P(n+1)$. Let $$M=\\{n:\\ P(n)\\ \\text{is false}\\} .$$\n\nIf $M$ is non-empty it has a least element $m$. Since $P(1)$ holds, $m\\ne1$, so $m\\ge2$ and $m-1$ is a positive integer. By minimality $P(m-1)$ holds, and the inductive step then gives $P(m)$ — contradicting $m\\in M$ ✗\n\nSo $M$ is empty and $P(n)$ holds for all $n$. $\\blacksquare$\n\n**Practical meaning.** This explains why Fermat descent (take a least solution and build a smaller one) and ordinary induction are the same tool seen from two sides.\n\n**Careful:** the least-number principle fails for the integers (no least element) and for the positive rationals — it is the discreteness of the positive integers that makes it work."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Игра «ним»: несколько куч камней, за ход берут любое положительное число камней из одной кучи, берущий последний камень выигрывает. Докажите, что позиция проигрышна для того, кто ходит, тогда и только тогда, когда «исключающее ИЛИ» размеров куч (побитовая сумма по модулю $2$) равно нулю.",
    "en": "The game of Nim: several piles of stones; a move takes any positive number of stones from one pile, and whoever takes the last stone wins. Prove that a position is losing for the player to move exactly when the bitwise XOR of the pile sizes is zero."
   },
   "hint": {
    "ru": "Проверьте два свойства: из нулевой суммы любой ход выводит, а из ненулевой всегда можно попасть в нулевую.",
    "en": "Check two properties: from XOR zero every move leaves it non-zero, and from non-zero one can always reach zero."
   },
   "sol": {
    "ru": "Обозначим через $x_1,\\dots,x_k$ размеры куч, а через $$N=x_1\\oplus x_2\\oplus\\dots\\oplus x_k $$ их побитовую сумму по модулю $2$ («ним-сумму»).\n\n**Свойство 1: если $N=0$, то любой ход делает её ненулевой.**\n\nХод меняет одну кучу с $x_i$ на $y_i<x_i$. Новая ним-сумма равна $$N\\oplus x_i\\oplus y_i=0\\oplus x_i\\oplus y_i=x_i\\oplus y_i ,$$ и она равна нулю только при $x_i=y_i$, что запрещено (надо взять хотя бы один камень). Значит она ненулевая ✓\n\n**Свойство 2: если $N\\ne0$, то есть ход, делающий её нулевой.**\n\nПусть $2^{m}$ — старший разряд, в котором у $N$ стоит единица. Тогда хотя бы у одной кучи $x_i$ в этом разряде тоже единица (иначе единица в $N$ не появилась бы). Положим $$y_i=x_i\\oplus N .$$\n\nВ разряде $2^{m}$ у $x_i$ была единица, а у $N$ единица, значит у $y_i$ там ноль; в старших разрядах $N$ нулей, поэтому они не изменились. Следовательно $$y_i<x_i ,$$ то есть ход законен. При этом новая ним-сумма равна $$N\\oplus x_i\\oplus y_i=N\\oplus x_i\\oplus\\left(x_i\\oplus N\\right)=0 \\quad\\checkmark$$\n\n**Свойство 3: конечная позиция.** Позиция без камней имеет $N=0$ и проигрышна для того, кто ходит (он уже проиграл — камни забрал соперник) ✓\n\n**Вывод.** Позиции с $N=0$ проигрышны: из них любой ход ведёт в позицию с $N\\ne0$, откуда соперник вернёт вас в $N=0$ (свойство 2), и так до пустой позиции. Позиции с $N\\ne0$ выигрышны: одним ходом переводим соперника в $N=0$. $\\blacksquare$\n\n**Пример.** Кучи $3,4,5$: $$3\\oplus4\\oplus5=(011)\\oplus(100)\\oplus(101)=(010)=2\\ne0 ,$$ значит первый выигрывает. Правильный ход: заменить кучу $3$ на $3\\oplus2=1$, то есть взять из неё $2$ камня; останутся кучи $1,4,5$ с ним-суммой $0$.\n\n**Историческая справка.** Эту теорию построил Чарльз Бутон в $1901$ году; она стала отправной точкой всей комбинаторной теории игр.",
    "en": "Write $x_1,\\dots,x_k$ for the pile sizes and $$N=x_1\\oplus x_2\\oplus\\dots\\oplus x_k $$ for their bitwise XOR (the \"Nim-sum\").\n\n**Property 1: if $N=0$, every move makes it non-zero.**\n\nA move changes one pile from $x_i$ to $y_i<x_i$. The new Nim-sum is $$N\\oplus x_i\\oplus y_i=x_i\\oplus y_i ,$$ which vanishes only if $x_i=y_i$ — forbidden, since at least one stone must be taken ✓\n\n**Property 2: if $N\\ne0$, some move makes it zero.**\n\nLet $2^{m}$ be the highest bit set in $N$. Then some pile $x_i$ also has that bit set (otherwise the bit could not appear in $N$). Put $$y_i=x_i\\oplus N .$$\n\nAt the bit $2^{m}$ both $x_i$ and $N$ have a one, so $y_i$ has a zero there; higher bits of $N$ are zero, so they are unchanged. Hence $$y_i<x_i ,$$ a legal move, and the new Nim-sum is $$N\\oplus x_i\\oplus\\left(x_i\\oplus N\\right)=0 \\quad\\checkmark$$\n\n**Property 3: the terminal position.** The empty position has $N=0$ and is losing for the player to move (the opponent took the last stone) ✓\n\n**Conclusion.** Positions with $N=0$ are losing: every move leaves $N\\ne0$, from which the opponent restores $N=0$ (Property 2), down to the empty position. Positions with $N\\ne0$ are winning: one move hands the opponent $N=0$. $\\blacksquare$\n\n**Example.** Piles $3,4,5$: $$3\\oplus4\\oplus5=(011)\\oplus(100)\\oplus(101)=(010)=2\\ne0 ,$$ so the first player wins. The correct move: change the pile $3$ into $3\\oplus2=1$, i.e. take $2$ stones; the piles $1,4,5$ have Nim-sum $0$.\n\n**Historical note.** Charles Bouton developed this theory in $1901$; it became the starting point of all combinatorial game theory."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Игра «шоколадка»: есть прямоугольник $m\\times n$ клеток, левая нижняя клетка «отравлена». За ход игрок выбирает клетку и съедает её вместе со всеми клетками правее и выше; съевший отравленную клетку проигрывает. Докажите, что при $m,n\\ge1$ и $(m,n)\\ne(1,1)$ у первого игрока есть выигрышная стратегия.",
    "en": "The game of Chomp: an $m\\times n$ rectangle of cells, the bottom-left cell being poisoned. A move picks a cell and eats it together with all cells to the right and above; whoever eats the poisoned cell loses. Prove that for $m,n\\ge1$ with $(m,n)\\ne(1,1)$ the first player has a winning strategy."
   },
   "hint": {
    "ru": "Приём «кражи стратегии»: посмотрите на ход, съедающий одну верхнюю правую клетку.",
    "en": "Strategy stealing: consider the move that eats just the top-right cell."
   },
   "sol": {
    "ru": "**Шаг 1: игра конечна и без ничьих.** Каждый ход строго уменьшает число клеток, значит партия обрывается. Ничьих нет: кто-то обязательно съест отравленную клетку. Значит по теореме Цермело у одного из игроков есть выигрышная стратегия.\n\n**Шаг 2: кража стратегии.** Предположим противное — выигрышная стратегия есть у **второго** игрока.\n\nРассмотрим ход первого игрока «съесть только правую верхнюю клетку». По предположению у второго есть выигрышный ответ; пусть это ход $H$, то есть выбор некоторой клетки.\n\n**Ключевое наблюдение.** Ход $H$, сделанный **из начальной позиции**, съедает все те же клетки, что и в описанном сценарии, **плюс, возможно, правую верхнюю клетку** — но её и так уже не было. Точнее: позиция после «съесть правую верхнюю, затем $H$» совпадает с позицией после одного хода $H$ из начальной позиции. (Ведь правая верхняя клетка либо съедается ходом $H$ сама, либо была съедена раньше.)\n\n**Шаг 3: противоречие.** Значит первый игрок мог **сразу** сделать ход $H$ и оказаться в той же позиции, которую по предположению выигрывает тот, чья очередь **не** ходить. То есть первый игрок получил бы выигрышную позицию — противоречие с тем, что выигрывает второй ✗\n\nЗначит выигрышная стратегия есть у первого игрока. $\\blacksquare$\n\n**Что мы НЕ узнали.** Доказательство **неконструктивно**: оно гарантирует существование выигрышной стратегии, но не даёт её. Для квадратной шоколадки $n\\times n$ первый ход известен (съесть клетку, соседнюю с отравленной по диагонали), а для общего прямоугольника выигрышная стратегия в явном виде не описана до сих пор.\n\n**Почему исключён случай $1\\times1$.** Там единственная клетка отравлена, и первый игрок обязан её съесть, то есть сразу проигрывает.",
    "en": "**Step 1: the game is finite with no draws.** Every move strictly decreases the number of cells, so play terminates, and someone must eat the poisoned cell. By Zermelo’s theorem one of the players has a winning strategy.\n\n**Step 2: stealing the strategy.** Suppose, for contradiction, that the **second** player has one.\n\nConsider the first player’s move \"eat only the top-right cell\". By assumption the second player has a winning reply; call it $H$, the choice of some cell.\n\n**Key observation.** The move $H$ played **from the initial position** eats exactly the same cells as in that scenario, possibly together with the top-right cell — which was gone anyway. Precisely: the position after \"eat the top-right cell, then $H$\" coincides with the position after the single move $H$ from the start.\n\n**Step 3: contradiction.** So the first player could have played $H$ **immediately** and reached a position that, by assumption, is winning for the player **not** to move. That makes the position winning for the first player — contradicting that the second player wins ✗\n\nHence the first player has a winning strategy. $\\blacksquare$\n\n**What we did NOT learn.** The proof is **non-constructive**: it guarantees a winning strategy without exhibiting one. For a square $n\\times n$ bar the first move is known (eat the cell diagonally adjacent to the poison), but for a general rectangle no explicit winning strategy is known to this day.\n\n**Why $1\\times1$ is excluded.** There the only cell is poisoned and the first player must eat it, losing at once."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "В «пятнашках» фишки $1,\\dots,15$ стоят в коробке $4\\times4$ по порядку, а правый нижний угол пуст. Докажите, что из позиции, отличающейся от исходной лишь тем, что фишки $14$ и $15$ поменяны местами, вернуться к исходной невозможно.",
    "en": "In the 15-puzzle the tiles $1,\\dots,15$ sit in a $4\\times4$ box in order, with the bottom-right corner empty. Prove that from the position differing only by swapping the tiles $14$ and $15$ it is impossible to reach the ordered one."
   },
   "hint": {
    "ru": "Следите за суммой: чётность перестановки плюс номер строки пустой клетки.",
    "en": "Track the sum: the parity of the permutation plus the row of the empty cell."
   },
   "sol": {
    "ru": "**Инвариант.** Каждой позиции сопоставим число $$J=\\varepsilon+d ,$$ где $\\varepsilon$ — чётность перестановки шестнадцати позиций (пустую клетку считаем шестнадцатой «фишкой»), а $d$ — расстояние по клеткам от пустой клетки до её «домашнего» правого нижнего угла (сумма разностей координат). Утверждаем: **чётность $J$ не меняется ни при каком ходе**.\n\n**Почему.** Любой ход меняет местами пустую клетку и соседнюю фишку. Как перестановка это ровно одна **транспозиция**, поэтому $\\varepsilon$ меняется на $1$. Одновременно пустая клетка сдвигается в соседнюю клетку, значит её расстояние $d$ до угла меняется ровно на $1$.\n\nОба слагаемых меняются на единицу, значит их сумма меняется на $2$ или на $0$ — в любом случае чётность $J$ сохраняется ✓\n\n**Применяем.** В исходной позиции $\\varepsilon=0$ (тождественная перестановка) и $d=0$, значит $J$ чётно.\n\nВ позиции с переставленными $14$ и $15$ пустая клетка на месте, значит $d=0$, а перестановка отличается от тождественной ровно одной транспозицией, значит $\\varepsilon=1$ и $J$ нечётно.\n\n**Вывод.** Чётности $J$ у двух позиций разные, а ходы её сохраняют. Значит одна позиция из другой недостижима. $\\blacksquare$\n\n**Следствие.** Ровно половина из $16!$ расстановок достижима из исходной; вторая половина образует «параллельный мир».\n\n**История.** Сэм Лойд в $1880$-х объявил награду в $1000$ долларов за решение именно этой позиции — награда была абсолютно безопасна.",
    "en": "**The invariant.** To each position attach $$J=\\varepsilon+d ,$$ where $\\varepsilon$ is the parity of the permutation of the sixteen positions (treating the empty cell as a sixteenth tile), and $d$ is the taxicab distance from the empty cell to its home square in the bottom-right corner. We claim **the parity of $J$ never changes**.\n\n**Why.** Every move swaps the empty cell with a neighbouring tile. As a permutation this is exactly one **transposition**, so $\\varepsilon$ changes by $1$. At the same time the empty cell moves to an adjacent square, so its taxicab distance $d$ to the corner changes by exactly $1$.\n\nBoth terms change by $1$, hence their sum changes by $2$ or $0$ — in either case the parity of $J$ is preserved ✓\n\n**Applying it.** In the ordered position $\\varepsilon=0$ (the identity permutation) and $d=0$, so $J$ is even.\n\nIn the position with $14$ and $15$ swapped the empty cell is at home, so $d=0$, while the permutation differs from the identity by a single transposition, so $\\varepsilon=1$ and $J$ is odd.\n\n**Conclusion.** The two positions have different parities of $J$, and moves preserve it. So neither is reachable from the other. $\\blacksquare$\n\n**Corollary.** Exactly half of the $16!$ arrangements are reachable from the ordered one; the other half form a \"parallel world\".\n\n**History.** In the 1880s Sam Loyd offered a $1000$-dollar prize for solving precisely this position — an entirely safe offer."
   }
  }
 ]
};
