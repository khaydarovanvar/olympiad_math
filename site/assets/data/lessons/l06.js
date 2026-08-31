/* Topic 6 — generated from content/lesson_06.py, do not edit by hand. */
window.LESSONS = window.LESSONS || {};
window.LESSONS[6] = {
 "n": 6,
 "cat": "alg",
 "title": {
  "ru": "Неравенства",
  "en": "Inequalities"
 },
 "sub": {
  "ru": "От «квадрат неотрицателен» до Коши–Буняковского: как доказывать неравенства, а не угадывать их.",
  "en": "From \"a square is non-negative\" to Cauchy–Schwarz: how to prove inequalities rather than guess them."
 },
 "goals": {
  "ru": [
   "Пользоваться правилами работы с неравенствами и не терять знак при умножении.",
   "Доказывать неравенства методом «перенести всё влево и собрать квадраты».",
   "Уверенно применять неравенство о средних (AM–GM) для двух, трёх и $n$ чисел.",
   "Знать неравенство Коши–Буняковского и его форму Энгеля, видеть, когда достигается равенство."
  ],
  "en": [
   "Use the rules for inequalities and never lose a sign when multiplying.",
   "Prove inequalities by moving everything left and assembling squares.",
   "Apply the AM–GM inequality confidently for two, three and $n$ numbers.",
   "Know Cauchy–Schwarz and its Engel form, and see when equality is attained."
  ]
 },
 "sections": [
  {
   "h": {
    "ru": "Правила игры",
    "en": "The rules of the game"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Доказать неравенство — значит вывести его из уже известных, применяя разрешённые действия. Разрешённых действий немного, и одно из них — с ловушкой.",
      "en": "To prove an inequality means to derive it from known ones using permitted moves. There are few permitted moves, and one of them has a trap."
     }
    },
    {
     "t": "ul",
     "items": {
      "ru": [
       "**Прибавление.** Если $a>b$, то $a+c>b+c$ при любом $c$.",
       "**Сложение неравенств одного знака.** Из $a>b$ и $c>d$ следует $a+c>b+d$.",
       "**Умножение на положительное.** Если $a>b$ и $c>0$, то $ac>bc$.",
       "**Умножение на отрицательное меняет знак.** Если $a>b$ и $c<0$, то $ac<bc$.",
       "**Транзитивность.** Из $a>b$ и $b>c$ следует $a>c$.",
       "**Возведение в квадрат — только для неотрицательных.** Если $a>b\\ge0$, то $a^{2}>b^{2}$."
      ],
      "en": [
       "**Adding.** If $a>b$ then $a+c>b+c$ for any $c$.",
       "**Adding inequalities of the same direction.** From $a>b$ and $c>d$ it follows that $a+c>b+d$.",
       "**Multiplying by a positive number.** If $a>b$ and $c>0$ then $ac>bc$.",
       "**Multiplying by a negative number flips the sign.** If $a>b$ and $c<0$ then $ac<bc$.",
       "**Transitivity.** From $a>b$ and $b>c$ it follows that $a>c$.",
       "**Squaring — only for non-negative numbers.** If $a>b\\ge0$ then $a^{2}>b^{2}$."
      ]
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "**Вычитать неравенства нельзя.** Из $5>3$ и $10>1$ не следует $5-10>3-1$. Если нужно вычесть, разверните второе неравенство и складывайте: из $c>d$ следует $-c<-d$, и тогда $a-d>b-c$. Точно так же нельзя делить неравенства друг на друга.",
      "en": "**You may not subtract inequalities.** From $5>3$ and $10>1$ it does not follow that $5-10>3-1$. If you need to subtract, flip the second one and add: $c>d$ gives $-c<-d$, and then $a-d>b-c$. Likewise you may not divide one inequality by another."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Главный приём всей темы",
      "en": "The one move behind everything"
     },
     "text": {
      "ru": "Чтобы доказать $A\\ge B$, перенесите всё в одну часть и покажите, что $A-B\\ge0$. А чтобы показать, что выражение неотрицательно, представьте его **суммой квадратов** — возможно, умноженной на что-то положительное. Почти все школьные неравенства доказываются именно так.",
      "en": "To prove $A\\ge B$, move everything to one side and show $A-B\\ge0$. And to show an expression is non-negative, write it as a **sum of squares** — possibly multiplied by something positive. Almost every school-level inequality is proved exactly this way."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Базовое неравенство",
      "en": "The base inequality"
     },
     "text": {
      "ru": "Для любых вещественных $a$ и $b$ выполнено $$a^{2}+b^{2}\\ge2ab,$$ причём равенство достигается тогда и только тогда, когда $a=b$.",
      "en": "For all real $a$ and $b$, $$a^{2}+b^{2}\\ge2ab,$$ with equality if and only if $a=b$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Перенесём всё влево: $a^{2}-2ab+b^{2}\\ge0$, то есть $(a-b)^{2}\\ge0$. Квадрат вещественного числа неотрицателен, значит неравенство верно. Равенство достигается ровно тогда, когда $(a-b)^{2}=0$, то есть $a=b$. $\\blacksquare$",
      "en": "Move everything left: $a^{2}-2ab+b^{2}\\ge0$, that is $(a-b)^{2}\\ge0$. The square of a real number is non-negative, so the inequality holds. Equality occurs exactly when $(a-b)^{2}=0$, that is $a=b$. $\\blacksquare$"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Из этого одного неравенства получаются десятки других. Подставьте $a=\\sqrt{x}$, $b=\\sqrt{y}$ при $x,y\\ge0$ — получите $x+y\\ge2\\sqrt{xy}$. Подставьте $a=\\sqrt{x}$, $b=\\tfrac1{\\sqrt{x}}$ — получите $x+\\tfrac1x\\ge2$ при $x>0$. Разделите обе части на $ab>0$ — получите $\\tfrac ab+\\tfrac ba\\ge2$.",
      "en": "Dozens of other inequalities come out of this one. Substitute $a=\\sqrt{x}$, $b=\\sqrt{y}$ with $x,y\\ge0$ to get $x+y\\ge2\\sqrt{xy}$. Substitute $a=\\sqrt{x}$, $b=\\tfrac1{\\sqrt{x}}$ to get $x+\\tfrac1x\\ge2$ for $x>0$. Divide both sides by $ab>0$ to get $\\tfrac ab+\\tfrac ba\\ge2$."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Докажите, что $a^{2}+b^{2}+c^{2}\\ge ab+bc+ca$ для любых вещественных $a,b,c$.",
      "en": "Prove that $a^{2}+b^{2}+c^{2}\\ge ab+bc+ca$ for all real $a,b,c$."
     },
     "steps": {
      "ru": [
       "Перенесём всё влево и умножим на $2$ (это не меняет знака): $$2a^{2}+2b^{2}+2c^{2}-2ab-2bc-2ca\\ge0 .$$",
       "Распределим каждый квадрат поровну между двумя соседями: $$\\left(a^{2}-2ab+b^{2}\\right)+\\left(b^{2}-2bc+c^{2}\\right)+\\left(c^{2}-2ca+a^{2}\\right).$$",
       "Это ровно $(a-b)^{2}+(b-c)^{2}+(c-a)^{2}\\ge0$.",
       "Равенство — когда все три квадрата нулевые, то есть $a=b=c$."
      ],
      "en": [
       "Move everything left and multiply by $2$ (which does not change the direction): $$2a^{2}+2b^{2}+2c^{2}-2ab-2bc-2ca\\ge0 .$$",
       "Share each square equally between its two neighbours: $$\\left(a^{2}-2ab+b^{2}\\right)+\\left(b^{2}-2bc+c^{2}\\right)+\\left(c^{2}-2ca+a^{2}\\right).$$",
       "This is exactly $(a-b)^{2}+(b-c)^{2}+(c-a)^{2}\\ge0$.",
       "Equality holds when all three squares vanish, that is $a=b=c$."
      ]
     },
     "ans": {
      "ru": "Неравенство доказано; равенство при $a=b=c$. $\\blacksquare$",
      "en": "Proved; equality when $a=b=c$. $\\blacksquare$"
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Неравенство о средних (AM–GM)",
    "en": "The AM–GM inequality"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "AM–GM для двух чисел",
      "en": "AM–GM for two numbers"
     },
     "text": {
      "ru": "Для неотрицательных $x,y$ $$\\frac{x+y}{2}\\ \\ge\\ \\sqrt{xy},$$ и равенство достигается только при $x=y$.",
      "en": "For non-negative $x,y$, $$\\frac{x+y}{2}\\ \\ge\\ \\sqrt{xy},$$ with equality only when $x=y$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Положим $a=\\sqrt{x}$, $b=\\sqrt{y}$ (это законно, так как $x,y\\ge0$). Тогда $(a-b)^{2}\\ge0$ даёт $a^{2}+b^{2}\\ge2ab$, то есть $x+y\\ge2\\sqrt{xy}$. Делим на $2$. $\\blacksquare$",
      "en": "Put $a=\\sqrt{x}$, $b=\\sqrt{y}$ (legitimate since $x,y\\ge0$). Then $(a-b)^{2}\\ge0$ gives $a^{2}+b^{2}\\ge2ab$, that is $x+y\\ge2\\sqrt{xy}$. Divide by $2$. $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "AM–GM для трёх чисел",
      "en": "AM–GM for three numbers"
     },
     "text": {
      "ru": "Для неотрицательных $x,y,z$ $$\\frac{x+y+z}{3}\\ \\ge\\ \\sqrt[3]{xyz},$$ и равенство достигается только при $x=y=z$.",
      "en": "For non-negative $x,y,z$, $$\\frac{x+y+z}{3}\\ \\ge\\ \\sqrt[3]{xyz},$$ with equality only when $x=y=z$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Воспользуемся тождеством из темы о разложении: $$a^{3}+b^{3}+c^{3}-3abc=(a+b+c)\\left(a^{2}+b^{2}+c^{2}-ab-bc-ca\\right)=\\tfrac12(a+b+c)\\left[(a-b)^{2}+(b-c)^{2}+(c-a)^{2}\\right].$$ Если $a,b,c\\ge0$, то оба сомножителя справа неотрицательны, значит $$a^{3}+b^{3}+c^{3}\\ge3abc .$$ Теперь подставим $a=\\sqrt[3]{x}$, $b=\\sqrt[3]{y}$, $c=\\sqrt[3]{z}$: получаем $x+y+z\\ge3\\sqrt[3]{xyz}$. Равенство требует $a=b=c$, то есть $x=y=z$. $\\blacksquare$",
      "en": "Use the identity from the factoring topic: $$a^{3}+b^{3}+c^{3}-3abc=(a+b+c)\\left(a^{2}+b^{2}+c^{2}-ab-bc-ca\\right)=\\tfrac12(a+b+c)\\left[(a-b)^{2}+(b-c)^{2}+(c-a)^{2}\\right].$$ If $a,b,c\\ge0$ then both factors on the right are non-negative, so $$a^{3}+b^{3}+c^{3}\\ge3abc .$$ Now substitute $a=\\sqrt[3]{x}$, $b=\\sqrt[3]{y}$, $c=\\sqrt[3]{z}$ to get $x+y+z\\ge3\\sqrt[3]{xyz}$. Equality needs $a=b=c$, that is $x=y=z$. $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "AM–GM для $n$ чисел",
      "en": "AM–GM for $n$ numbers"
     },
     "text": {
      "ru": "Для неотрицательных $x_1,\\dots,x_n$ $$\\frac{x_1+x_2+\\dots+x_n}{n}\\ \\ge\\ \\sqrt[n]{x_1x_2\\cdots x_n},$$ и равенство достигается только тогда, когда все числа равны.",
      "en": "For non-negative $x_1,\\dots,x_n$, $$\\frac{x_1+x_2+\\dots+x_n}{n}\\ \\ge\\ \\sqrt[n]{x_1x_2\\cdots x_n},$$ with equality only when all the numbers are equal."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Как этим пользоваться",
      "en": "How to use it"
     },
     "text": {
      "ru": "AM–GM превращает **сумму** в **произведение** и обратно. Поэтому она особенно хороша, когда произведение — константа. Например, если $xy=16$, то $x+y\\ge2\\sqrt{16}=8$: сумма минимальна при $x=y=4$.\n\nИ наоборот: если сумма фиксирована, максимально произведение при равных слагаемых. Отсюда классический факт: среди всех прямоугольников данного периметра наибольшую площадь имеет квадрат.",
      "en": "AM–GM turns a **sum** into a **product** and back. So it is at its best when the product is a constant. For instance, if $xy=16$ then $x+y\\ge2\\sqrt{16}=8$: the sum is smallest when $x=y=4$.\n\nAnd conversely: with a fixed sum the product is largest when the terms are equal. Hence the classical fact that among all rectangles of a given perimeter the square has the largest area."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Докажите, что $x^{2}+\\dfrac{2}{x}\\ge3$ при всех $x>0$, и найдите, когда достигается равенство.",
      "en": "Prove that $x^{2}+\\dfrac{2}{x}\\ge3$ for every $x>0$, and find when equality holds."
     },
     "steps": {
      "ru": [
       "Хитрость: разбить $\\tfrac2x$ на два равных слагаемых, чтобы произведение стало красивым.",
       "$$x^{2}+\\frac{2}{x}=x^{2}+\\frac1x+\\frac1x .$$",
       "Применяем AM–GM к трём положительным числам: $$x^{2}+\\frac1x+\\frac1x\\ \\ge\\ 3\\sqrt[3]{x^{2}\\cdot\\frac1x\\cdot\\frac1x}=3\\sqrt[3]{1}=3 .$$",
       "Равенство требует равенства всех трёх слагаемых: $x^{2}=\\tfrac1x$, то есть $x^{3}=1$ и $x=1$.",
       "Проверка: при $x=1$ левая часть равна $1+2=3$ ✓"
      ],
      "en": [
       "The trick: split $\\tfrac2x$ into two equal terms so that the product comes out clean.",
       "$$x^{2}+\\frac{2}{x}=x^{2}+\\frac1x+\\frac1x .$$",
       "Apply AM–GM to the three positive numbers: $$x^{2}+\\frac1x+\\frac1x\\ \\ge\\ 3\\sqrt[3]{x^{2}\\cdot\\frac1x\\cdot\\frac1x}=3\\sqrt[3]{1}=3 .$$",
       "Equality needs all three terms equal: $x^{2}=\\tfrac1x$, that is $x^{3}=1$ and $x=1$.",
       "Check: at $x=1$ the left side is $1+2=3$ ✓"
      ]
     },
     "ans": {
      "ru": "Неравенство доказано; равенство только при $x=1$. $\\blacksquare$",
      "en": "Proved; equality only at $x=1$. $\\blacksquare$"
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Разбивать слагаемые надо так, чтобы **произведение оказалось константой**. Если бы мы применили AM–GM к двум слагаемым $x^{2}$ и $\\tfrac2x$, получилось бы $2\\sqrt{2x}$ — выражение с переменной, из которого ничего не следует. Умение выбрать правильное разбиение и есть главный навык в этой теме.",
      "en": "The split must make the **product a constant**. Applying AM–GM to the two terms $x^{2}$ and $\\tfrac2x$ would give $2\\sqrt{2x}$ — an expression still containing the variable, from which nothing follows. Choosing the right split is the real skill here."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Цепочка средних",
    "en": "The chain of means"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "У набора положительных чисел есть четыре классических «средних». Для двух чисел $a,b>0$ они выглядят так:",
      "en": "A set of positive numbers has four classical \"means\". For two numbers $a,b>0$ they look like this:"
     }
    },
    {
     "t": "table",
     "head": {
      "ru": [
       "Среднее",
       "Обозначение",
       "Формула для двух чисел"
      ],
      "en": [
       "Mean",
       "Symbol",
       "Formula for two numbers"
      ]
     },
     "rows": {
      "ru": [
       [
        "квадратичное",
        "QM",
        "$\\sqrt{\\dfrac{a^{2}+b^{2}}{2}}$"
       ],
       [
        "арифметическое",
        "AM",
        "$\\dfrac{a+b}{2}$"
       ],
       [
        "геометрическое",
        "GM",
        "$\\sqrt{ab}$"
       ],
       [
        "гармоническое",
        "HM",
        "$\\dfrac{2}{\\frac1a+\\frac1b}=\\dfrac{2ab}{a+b}$"
       ]
      ],
      "en": [
       [
        "quadratic",
        "QM",
        "$\\sqrt{\\dfrac{a^{2}+b^{2}}{2}}$"
       ],
       [
        "arithmetic",
        "AM",
        "$\\dfrac{a+b}{2}$"
       ],
       [
        "geometric",
        "GM",
        "$\\sqrt{ab}$"
       ],
       [
        "harmonic",
        "HM",
        "$\\dfrac{2}{\\frac1a+\\frac1b}=\\dfrac{2ab}{a+b}$"
       ]
      ]
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Цепочка неравенств",
      "en": "The chain"
     },
     "text": {
      "ru": "Для положительных чисел всегда $$\\mathrm{QM}\\ \\ge\\ \\mathrm{AM}\\ \\ge\\ \\mathrm{GM}\\ \\ge\\ \\mathrm{HM},$$ и все четыре совпадают тогда и только тогда, когда все числа равны.",
      "en": "For positive numbers we always have $$\\mathrm{QM}\\ \\ge\\ \\mathrm{AM}\\ \\ge\\ \\mathrm{GM}\\ \\ge\\ \\mathrm{HM},$$ and all four coincide if and only if all the numbers are equal."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Докажем для двух чисел; общий случай доказывается теми же приёмами.\n\n**QM $\\ge$ AM.** Обе части положительны, поэтому можно возвести в квадрат: надо проверить $\\tfrac{a^{2}+b^{2}}{2}\\ge\\tfrac{(a+b)^{2}}{4}$, то есть $2(a^{2}+b^{2})\\ge(a+b)^{2}$, то есть $a^{2}-2ab+b^{2}\\ge0$ — снова $(a-b)^{2}\\ge0$.\n\n**AM $\\ge$ GM.** Доказано выше.\n\n**GM $\\ge$ HM.** Заметим, что $\\mathrm{HM}=\\dfrac{ab}{\\mathrm{AM}}$ и $\\mathrm{GM}^{2}=ab$, поэтому $$\\frac{\\mathrm{GM}}{\\mathrm{HM}}=\\frac{\\mathrm{GM}\\cdot\\mathrm{AM}}{ab}=\\frac{\\mathrm{AM}}{\\mathrm{GM}}\\ \\ge\\ 1 .$$ $\\blacksquare$",
      "en": "We prove it for two numbers; the general case uses the same moves.\n\n**QM $\\ge$ AM.** Both sides are positive, so we may square: we must check $\\tfrac{a^{2}+b^{2}}{2}\\ge\\tfrac{(a+b)^{2}}{4}$, that is $2(a^{2}+b^{2})\\ge(a+b)^{2}$, that is $a^{2}-2ab+b^{2}\\ge0$ — once again $(a-b)^{2}\\ge0$.\n\n**AM $\\ge$ GM.** Proved above.\n\n**GM $\\ge$ HM.** Note that $\\mathrm{HM}=\\dfrac{ab}{\\mathrm{AM}}$ and $\\mathrm{GM}^{2}=ab$, so $$\\frac{\\mathrm{GM}}{\\mathrm{HM}}=\\frac{\\mathrm{GM}\\cdot\\mathrm{AM}}{ab}=\\frac{\\mathrm{AM}}{\\mathrm{GM}}\\ \\ge\\ 1 .$$ $\\blacksquare$"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Неравенство AM $\\ge$ HM для $n$ чисел удобнее помнить в виде $$(x_1+\\dots+x_n)\\left(\\frac1{x_1}+\\dots+\\frac1{x_n}\\right)\\ \\ge\\ n^{2}.$$ При $n=2$ это $(a+b)\\left(\\tfrac1a+\\tfrac1b\\right)\\ge4$, при $n=3$ — $\\ge9$. Встречается на олимпиадах постоянно.",
      "en": "The AM $\\ge$ HM inequality for $n$ numbers is easier to remember as $$(x_1+\\dots+x_n)\\left(\\frac1{x_1}+\\dots+\\frac1{x_n}\\right)\\ \\ge\\ n^{2}.$$ For $n=2$ this is $(a+b)\\left(\\tfrac1a+\\tfrac1b\\right)\\ge4$, for $n=3$ it is $\\ge9$. It comes up constantly."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Неравенство Коши–Буняковского",
    "en": "The Cauchy–Schwarz inequality"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Коши–Буняковский",
      "en": "Cauchy–Schwarz"
     },
     "text": {
      "ru": "Для любых вещественных чисел $$\\left(a_1^{2}+\\dots+a_n^{2}\\right)\\left(b_1^{2}+\\dots+b_n^{2}\\right)\\ \\ge\\ \\left(a_1b_1+\\dots+a_nb_n\\right)^{2},$$ и равенство достигается тогда и только тогда, когда наборы пропорциональны.",
      "en": "For all real numbers $$\\left(a_1^{2}+\\dots+a_n^{2}\\right)\\left(b_1^{2}+\\dots+b_n^{2}\\right)\\ \\ge\\ \\left(a_1b_1+\\dots+a_nb_n\\right)^{2},$$ with equality if and only if the two lists are proportional."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Рассмотрим функцию $$f(t)=\\sum_{i=1}^{n}\\left(a_i t-b_i\\right)^{2}\\ \\ge\\ 0\\qquad\\text{при всех }t .$$ Раскроем скобки: $$f(t)=\\left(\\sum a_i^{2}\\right)t^{2}-2\\left(\\sum a_ib_i\\right)t+\\sum b_i^{2}=At^{2}-2Bt+C .$$ Это квадратный трёхчлен с $A\\ge0$, неотрицательный при всех $t$. Если $A>0$, то его дискриминант неположителен: $$4B^{2}-4AC\\le0\\quad\\Longrightarrow\\quad B^{2}\\le AC,$$ что и требовалось. Если же $A=0$, то все $a_i=0$ и обе части нулевые.\n\nРавенство означает, что дискриминант равен нулю, то есть $f$ имеет корень $t_0$; тогда $a_it_0=b_i$ при всех $i$ — наборы пропорциональны. $\\blacksquare$",
      "en": "Consider the function $$f(t)=\\sum_{i=1}^{n}\\left(a_i t-b_i\\right)^{2}\\ \\ge\\ 0\\qquad\\text{for every }t .$$ Expanding, $$f(t)=\\left(\\sum a_i^{2}\\right)t^{2}-2\\left(\\sum a_ib_i\\right)t+\\sum b_i^{2}=At^{2}-2Bt+C .$$ This is a quadratic with $A\\ge0$, non-negative for all $t$. If $A>0$ its discriminant is non-positive: $$4B^{2}-4AC\\le0\\quad\\Longrightarrow\\quad B^{2}\\le AC,$$ which is the claim. If $A=0$ then every $a_i=0$ and both sides vanish.\n\nEquality means the discriminant is zero, so $f$ has a root $t_0$; then $a_it_0=b_i$ for all $i$ — the lists are proportional. $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Форма Энгеля (лемма о дробях)",
      "en": "Engel form (the fractions lemma)"
     },
     "text": {
      "ru": "Для вещественных $x_i$ и **положительных** $p_i$ $$\\frac{x_1^{2}}{p_1}+\\frac{x_2^{2}}{p_2}+\\dots+\\frac{x_n^{2}}{p_n}\\ \\ge\\ \\frac{\\left(x_1+x_2+\\dots+x_n\\right)^{2}}{p_1+p_2+\\dots+p_n}.$$",
      "en": "For real $x_i$ and **positive** $p_i$, $$\\frac{x_1^{2}}{p_1}+\\frac{x_2^{2}}{p_2}+\\dots+\\frac{x_n^{2}}{p_n}\\ \\ge\\ \\frac{\\left(x_1+x_2+\\dots+x_n\\right)^{2}}{p_1+p_2+\\dots+p_n}.$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Сначала случай $n=2$. Требуется $$\\frac{x^{2}}{p}+\\frac{y^{2}}{q}\\ \\ge\\ \\frac{(x+y)^{2}}{p+q}.$$ Умножим обе части на положительное число $pq(p+q)$: $$x^{2}q(p+q)+y^{2}p(p+q)\\ \\ge\\ pq(x+y)^{2}.$$ Раскроем и перенесём всё влево: $$x^{2}pq+x^{2}q^{2}+y^{2}p^{2}+y^{2}pq-pqx^{2}-2pqxy-pqy^{2}=x^{2}q^{2}-2pqxy+y^{2}p^{2}=(xq-yp)^{2}\\ \\ge\\ 0 .$$\n\nОбщий случай — индукция: применяя доказанное дважды, объединяем первые две дроби, затем результат с третьей, и так далее. $\\blacksquare$",
      "en": "First the case $n=2$. We need $$\\frac{x^{2}}{p}+\\frac{y^{2}}{q}\\ \\ge\\ \\frac{(x+y)^{2}}{p+q}.$$ Multiply both sides by the positive number $pq(p+q)$: $$x^{2}q(p+q)+y^{2}p(p+q)\\ \\ge\\ pq(x+y)^{2}.$$ Expand and move everything left: $$x^{2}pq+x^{2}q^{2}+y^{2}p^{2}+y^{2}pq-pqx^{2}-2pqxy-pqy^{2}=x^{2}q^{2}-2pqxy+y^{2}p^{2}=(xq-yp)^{2}\\ \\ge\\ 0 .$$\n\nThe general case follows by induction: apply the two-term case to merge the first two fractions, then merge the result with the third, and so on. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Докажите, что для положительных $a,b,c$ $$\\frac{a}{b+c}+\\frac{b}{c+a}+\\frac{c}{a+b}\\ \\ge\\ \\frac32 .$$",
      "en": "Prove that for positive $a,b,c$ $$\\frac{a}{b+c}+\\frac{b}{c+a}+\\frac{c}{a+b}\\ \\ge\\ \\frac32 .$$"
     },
     "steps": {
      "ru": [
       "Домножим каждую дробь на $\\tfrac{a}{a}$, чтобы в числителе появился квадрат: $$\\frac{a}{b+c}=\\frac{a^{2}}{a(b+c)} .$$",
       "Применяем форму Энгеля: $$\\sum\\frac{a^{2}}{a(b+c)}\\ \\ge\\ \\frac{(a+b+c)^{2}}{a(b+c)+b(c+a)+c(a+b)} .$$",
       "Знаменатель равен $2(ab+bc+ca)$.",
       "Осталось проверить, что $(a+b+c)^{2}\\ge3(ab+bc+ca)$: раскрывая, это $a^{2}+b^{2}+c^{2}\\ge ab+bc+ca$ — уже доказанное неравенство.",
       "Значит $$\\frac{(a+b+c)^{2}}{2(ab+bc+ca)}\\ \\ge\\ \\frac{3(ab+bc+ca)}{2(ab+bc+ca)}=\\frac32 .$$"
      ],
      "en": [
       "Multiply each fraction by $\\tfrac{a}{a}$ so that a square appears on top: $$\\frac{a}{b+c}=\\frac{a^{2}}{a(b+c)} .$$",
       "Apply the Engel form: $$\\sum\\frac{a^{2}}{a(b+c)}\\ \\ge\\ \\frac{(a+b+c)^{2}}{a(b+c)+b(c+a)+c(a+b)} .$$",
       "The denominator equals $2(ab+bc+ca)$.",
       "It remains to check $(a+b+c)^{2}\\ge3(ab+bc+ca)$: expanding, this is $a^{2}+b^{2}+c^{2}\\ge ab+bc+ca$, already proved.",
       "Therefore $$\\frac{(a+b+c)^{2}}{2(ab+bc+ca)}\\ \\ge\\ \\frac{3(ab+bc+ca)}{2(ab+bc+ca)}=\\frac32 .$$"
      ]
     },
     "ans": {
      "ru": "Неравенство Несбитта доказано; равенство при $a=b=c$. $\\blacksquare$",
      "en": "Nesbitt’s inequality is proved; equality when $a=b=c$. $\\blacksquare$"
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Приёмы, которые решают задачи",
    "en": "The moves that finish problems"
   },
   "blocks": [
    {
     "t": "idea",
     "name": {
      "ru": "Приём 1: угадайте точку равенства",
      "en": "Move 1: guess the equality point"
     },
     "text": {
      "ru": "Прежде чем что-то доказывать, найдите, при каких значениях достигается равенство. Обычно это $a=b=c$ или значения, подсказанные условием. Точка равенства говорит, **какое** неравенство применять: любое ваше промежуточное неравенство должно обращаться в равенство в той же точке, иначе оценка будет слишком грубой.",
      "en": "Before proving anything, find where equality is attained. Usually that is $a=b=c$, or values suggested by the hypothesis. The equality point tells you **which** inequality to use: every intermediate step must become an equality at the same point, otherwise the bound is too weak."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Приём 2: используйте условие до конца",
      "en": "Move 2: spend the hypothesis"
     },
     "text": {
      "ru": "Если дано $abc=1$ или $a+b+c=1$, это не украшение, а инструмент. Условие $a+b+c=1$ позволяет заменить единицу на $a+b+c$ в любом месте — и наоборот. Условие $abc=1$ позволяет писать $\\tfrac1a=bc$.",
      "en": "A hypothesis like $abc=1$ or $a+b+c=1$ is not decoration, it is a tool. The condition $a+b+c=1$ lets you replace $1$ by $a+b+c$ anywhere — and back. The condition $abc=1$ lets you write $\\tfrac1a=bc$."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Приём 3: складывайте однотипные неравенства",
      "en": "Move 3: add up parallel inequalities"
     },
     "text": {
      "ru": "Симметричное неравенство часто разбивается на три одинаковых куска. Например, из $a^{2}+b^{2}\\ge2ab$, $b^{2}+c^{2}\\ge2bc$, $c^{2}+a^{2}\\ge2ca$ сложением получаем $2(a^{2}+b^{2}+c^{2})\\ge2(ab+bc+ca)$ — то самое неравенство из первого раздела, но за одну строку.",
      "en": "A symmetric inequality often splits into three identical pieces. From $a^{2}+b^{2}\\ge2ab$, $b^{2}+c^{2}\\ge2bc$, $c^{2}+a^{2}\\ge2ca$, adding gives $2(a^{2}+b^{2}+c^{2})\\ge2(ab+bc+ca)$ — the inequality from the first section, in one line."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Докажите, что $(a+b)(b+c)(c+a)\\ge8abc$ для положительных $a,b,c$.",
      "en": "Prove that $(a+b)(b+c)(c+a)\\ge8abc$ for positive $a,b,c$."
     },
     "steps": {
      "ru": [
       "Равенство ожидаем при $a=b=c$ — проверим: $2a\\cdot2a\\cdot2a=8a^{3}$ ✓",
       "По AM–GM для двух чисел: $a+b\\ge2\\sqrt{ab}$, $b+c\\ge2\\sqrt{bc}$, $c+a\\ge2\\sqrt{ca}$.",
       "Все три части положительны, поэтому неравенства можно перемножить: $$(a+b)(b+c)(c+a)\\ \\ge\\ 8\\sqrt{ab}\\cdot\\sqrt{bc}\\cdot\\sqrt{ca}=8\\sqrt{a^{2}b^{2}c^{2}}=8abc .$$",
       "Равенство требует $a=b$, $b=c$, $c=a$ одновременно, то есть $a=b=c$."
      ],
      "en": [
       "Expect equality at $a=b=c$ — check: $2a\\cdot2a\\cdot2a=8a^{3}$ ✓",
       "By AM–GM for two numbers: $a+b\\ge2\\sqrt{ab}$, $b+c\\ge2\\sqrt{bc}$, $c+a\\ge2\\sqrt{ca}$.",
       "All parts are positive, so the three may be multiplied: $$(a+b)(b+c)(c+a)\\ \\ge\\ 8\\sqrt{ab}\\cdot\\sqrt{bc}\\cdot\\sqrt{ca}=8\\sqrt{a^{2}b^{2}c^{2}}=8abc .$$",
       "Equality needs $a=b$, $b=c$ and $c=a$ at once, that is $a=b=c$."
      ]
     },
     "ans": {
      "ru": "Доказано; равенство при $a=b=c$. $\\blacksquare$",
      "en": "Proved; equality when $a=b=c$. $\\blacksquare$"
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Перемножать неравенства можно **только когда все части положительны**. Из $-5>-7$ и $2>1$ перемножением получилось бы $-10>-7$ — неверно. В олимпиадных задачах об этом почти всегда сказано («для положительных $a,b,c$»), но написать «все части положительны, поэтому перемножаем» стоит: это строчка, за которую дают балл.",
      "en": "Inequalities may be multiplied **only when all parts are positive**. From $-5>-7$ and $2>1$, multiplying would give $-10>-7$, which is false. Olympiad problems almost always say \"for positive $a,b,c$\", but write out \"all parts are positive, so we may multiply\" — that is a line worth a mark."
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
    "ru": "Докажите, что $x+\\dfrac1x\\ge2$ при всех $x>0$, и выясните, когда достигается равенство. Что происходит при $x<0$?",
    "en": "Prove that $x+\\dfrac1x\\ge2$ for every $x>0$ and find when equality holds. What happens when $x<0$?"
   },
   "hint": {
    "ru": "Умножьте на $x>0$ и соберите квадрат.",
    "en": "Multiply by $x>0$ and assemble a square."
   },
   "sol": {
    "ru": "Так как $x>0$, умножение на $x$ не меняет знака неравенства: надо доказать $x^{2}+1\\ge2x$, то есть $x^{2}-2x+1\\ge0$, то есть $(x-1)^{2}\\ge0$ — верно всегда. Равенство при $x=1$.\n\nПри $x<0$ положим $x=-y$, $y>0$: тогда $x+\\tfrac1x=-\\left(y+\\tfrac1y\\right)\\le-2$. То есть для отрицательных $x$ выражение не превосходит $-2$. $\\blacksquare$",
    "en": "Since $x>0$, multiplying by $x$ preserves the direction: we must prove $x^{2}+1\\ge2x$, that is $x^{2}-2x+1\\ge0$, that is $(x-1)^{2}\\ge0$ — always true. Equality at $x=1$.\n\nFor $x<0$ put $x=-y$ with $y>0$: then $x+\\tfrac1x=-\\left(y+\\tfrac1y\\right)\\le-2$. So for negative $x$ the expression never exceeds $-2$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что $\\dfrac{a}{b}+\\dfrac{b}{a}\\ge2$ для любых положительных $a$ и $b$.",
    "en": "Prove that $\\dfrac{a}{b}+\\dfrac{b}{a}\\ge2$ for all positive $a$ and $b$."
   },
   "hint": {
    "ru": "Приведите к общему знаменателю.",
    "en": "Put it over a common denominator."
   },
   "sol": {
    "ru": "Приводим к общему знаменателю: $$\\frac ab+\\frac ba-2=\\frac{a^{2}+b^{2}-2ab}{ab}=\\frac{(a-b)^{2}}{ab}.$$ Числитель неотрицателен как квадрат, знаменатель положителен, значит дробь неотрицательна. Равенство — при $a=b$. $\\blacksquare$",
    "en": "Over a common denominator, $$\\frac ab+\\frac ba-2=\\frac{a^{2}+b^{2}-2ab}{ab}=\\frac{(a-b)^{2}}{ab}.$$ The numerator is a square and hence non-negative, the denominator is positive, so the fraction is non-negative. Equality when $a=b$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что $(a+b)\\left(\\dfrac1a+\\dfrac1b\\right)\\ge4$ для положительных $a,b$.",
    "en": "Prove that $(a+b)\\left(\\dfrac1a+\\dfrac1b\\right)\\ge4$ for positive $a,b$."
   },
   "hint": {
    "ru": "Раскройте скобки — и вы уже видели это неравенство.",
    "en": "Expand the brackets — you have seen the result already."
   },
   "sol": {
    "ru": "Раскроем: $$(a+b)\\left(\\frac1a+\\frac1b\\right)=1+\\frac ab+\\frac ba+1=2+\\left(\\frac ab+\\frac ba\\right)\\ \\ge\\ 2+2=4,$$ по предыдущей задаче. Равенство при $a=b$. $\\blacksquare$\n\n*Другой путь:* по AM–GM $a+b\\ge2\\sqrt{ab}$ и $\\tfrac1a+\\tfrac1b\\ge\\tfrac2{\\sqrt{ab}}$; перемножая (обе части положительны), получаем $4$.",
    "en": "Expand: $$(a+b)\\left(\\frac1a+\\frac1b\\right)=1+\\frac ab+\\frac ba+1=2+\\left(\\frac ab+\\frac ba\\right)\\ \\ge\\ 2+2=4,$$ by the previous problem. Equality when $a=b$. $\\blacksquare$\n\n*Another route:* by AM–GM $a+b\\ge2\\sqrt{ab}$ and $\\tfrac1a+\\tfrac1b\\ge\\tfrac2{\\sqrt{ab}}$; multiplying (all parts positive) gives $4$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Периметр прямоугольника равен $20$. Какую наибольшую площадь он может иметь?",
    "en": "A rectangle has perimeter $20$. What is the largest possible area?"
   },
   "hint": {
    "ru": "Если стороны $a$ и $b$, то $a+b=10$; примените AM–GM.",
    "en": "If the sides are $a$ and $b$ then $a+b=10$; apply AM–GM."
   },
   "sol": {
    "ru": "Пусть стороны равны $a$ и $b$, тогда $2(a+b)=20$, то есть $a+b=10$. По AM–GM $$\\sqrt{ab}\\ \\le\\ \\frac{a+b}{2}=5\\quad\\Longrightarrow\\quad ab\\le25 .$$ Значение $25$ достигается при $a=b=5$, то есть у квадрата. **Ответ:** наибольшая площадь равна $25$, у квадрата со стороной $5$.",
    "en": "Let the sides be $a$ and $b$; then $2(a+b)=20$, so $a+b=10$. By AM–GM $$\\sqrt{ab}\\ \\le\\ \\frac{a+b}{2}=5\\quad\\Longrightarrow\\quad ab\\le25 .$$ The value $25$ is attained at $a=b=5$, that is for the square. **Answer:** the largest area is $25$, achieved by the square of side $5$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что $(a+b+c)^{2}\\le3\\left(a^{2}+b^{2}+c^{2}\\right)$ для любых вещественных $a,b,c$.",
    "en": "Prove that $(a+b+c)^{2}\\le3\\left(a^{2}+b^{2}+c^{2}\\right)$ for all real $a,b,c$."
   },
   "hint": {
    "ru": "Раскройте квадрат и вспомните $a^{2}+b^{2}+c^{2}\\ge ab+bc+ca$.",
    "en": "Expand the square and recall $a^{2}+b^{2}+c^{2}\\ge ab+bc+ca$."
   },
   "sol": {
    "ru": "Раскроем левую часть: $$(a+b+c)^{2}=a^{2}+b^{2}+c^{2}+2(ab+bc+ca).$$ По уже доказанному $ab+bc+ca\\le a^{2}+b^{2}+c^{2}$, поэтому $$(a+b+c)^{2}\\le a^{2}+b^{2}+c^{2}+2\\left(a^{2}+b^{2}+c^{2}\\right)=3\\left(a^{2}+b^{2}+c^{2}\\right).$$ Равенство — при $a=b=c$. $\\blacksquare$\n\n*Замечание.* Это в точности неравенство QM $\\ge$ AM для трёх чисел, а также случай Коши–Буняковского с набором $(1,1,1)$.",
    "en": "Expand the left side: $$(a+b+c)^{2}=a^{2}+b^{2}+c^{2}+2(ab+bc+ca).$$ Since $ab+bc+ca\\le a^{2}+b^{2}+c^{2}$, $$(a+b+c)^{2}\\le a^{2}+b^{2}+c^{2}+2\\left(a^{2}+b^{2}+c^{2}\\right)=3\\left(a^{2}+b^{2}+c^{2}\\right).$$ Equality when $a=b=c$. $\\blacksquare$\n\n*Remark.* This is exactly QM $\\ge$ AM for three numbers, and also Cauchy–Schwarz against the list $(1,1,1)$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что $\\sqrt{a}+\\sqrt{b}\\le\\sqrt{2(a+b)}$ для неотрицательных $a,b$.",
    "en": "Prove that $\\sqrt{a}+\\sqrt{b}\\le\\sqrt{2(a+b)}$ for non-negative $a,b$."
   },
   "hint": {
    "ru": "Обе части неотрицательны — возводите в квадрат.",
    "en": "Both sides are non-negative — square them."
   },
   "sol": {
    "ru": "Обе части неотрицательны, поэтому неравенство равносильно квадрату: $$\\left(\\sqrt a+\\sqrt b\\right)^{2}\\le2(a+b)\\quad\\Longleftrightarrow\\quad a+2\\sqrt{ab}+b\\le2a+2b\\quad\\Longleftrightarrow\\quad 2\\sqrt{ab}\\le a+b .$$ Последнее — это AM–GM. Равенство при $a=b$. $\\blacksquare$",
    "en": "Both sides are non-negative, so the inequality is equivalent to its square: $$\\left(\\sqrt a+\\sqrt b\\right)^{2}\\le2(a+b)\\quad\\Longleftrightarrow\\quad a+2\\sqrt{ab}+b\\le2a+2b\\quad\\Longleftrightarrow\\quad 2\\sqrt{ab}\\le a+b .$$ The last is AM–GM. Equality when $a=b$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $(a+b+c)\\left(\\dfrac1a+\\dfrac1b+\\dfrac1c\\right)\\ge9$ для положительных $a,b,c$.",
    "en": "Prove that $(a+b+c)\\left(\\dfrac1a+\\dfrac1b+\\dfrac1c\\right)\\ge9$ for positive $a,b,c$."
   },
   "hint": {
    "ru": "Примените AM–GM к каждой скобке отдельно.",
    "en": "Apply AM–GM to each bracket separately."
   },
   "sol": {
    "ru": "По AM–GM для трёх чисел $$a+b+c\\ \\ge\\ 3\\sqrt[3]{abc},\\qquad \\frac1a+\\frac1b+\\frac1c\\ \\ge\\ 3\\sqrt[3]{\\frac1{abc}} .$$ Обе части каждого неравенства положительны, поэтому их можно перемножить: $$(a+b+c)\\left(\\frac1a+\\frac1b+\\frac1c\\right)\\ \\ge\\ 9\\sqrt[3]{abc}\\cdot\\sqrt[3]{\\frac1{abc}}=9 .$$ Равенство требует $a=b=c$. $\\blacksquare$\n\n*Другой путь:* раскрыть скобки и сгруппировать в три пары: $$3+\\left(\\frac ab+\\frac ba\\right)+\\left(\\frac bc+\\frac cb\\right)+\\left(\\frac ca+\\frac ac\\right)\\ \\ge\\ 3+2+2+2=9 .$$",
    "en": "By AM–GM for three numbers, $$a+b+c\\ \\ge\\ 3\\sqrt[3]{abc},\\qquad \\frac1a+\\frac1b+\\frac1c\\ \\ge\\ 3\\sqrt[3]{\\frac1{abc}} .$$ Both sides of each are positive, so they may be multiplied: $$(a+b+c)\\left(\\frac1a+\\frac1b+\\frac1c\\right)\\ \\ge\\ 9\\sqrt[3]{abc}\\cdot\\sqrt[3]{\\frac1{abc}}=9 .$$ Equality needs $a=b=c$. $\\blacksquare$\n\n*Another route:* expand and group into three pairs: $$3+\\left(\\frac ab+\\frac ba\\right)+\\left(\\frac bc+\\frac cb\\right)+\\left(\\frac ca+\\frac ac\\right)\\ \\ge\\ 3+2+2+2=9 .$$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $a^{3}+b^{3}+c^{3}\\ge3abc$ для неотрицательных $a,b,c$, и укажите, когда достигается равенство.",
    "en": "Prove that $a^{3}+b^{3}+c^{3}\\ge3abc$ for non-negative $a,b,c$, and state when equality holds."
   },
   "hint": {
    "ru": "Тождество $a^{3}+b^{3}+c^{3}-3abc=(a+b+c)(\\dots)$.",
    "en": "The identity $a^{3}+b^{3}+c^{3}-3abc=(a+b+c)(\\dots)$."
   },
   "sol": {
    "ru": "Воспользуемся тождеством $$a^{3}+b^{3}+c^{3}-3abc=(a+b+c)\\left(a^{2}+b^{2}+c^{2}-ab-bc-ca\\right)$$ и преобразуем вторую скобку: $$a^{2}+b^{2}+c^{2}-ab-bc-ca=\\tfrac12\\left[(a-b)^{2}+(b-c)^{2}+(c-a)^{2}\\right]\\ \\ge\\ 0 .$$ Первая скобка $a+b+c\\ge0$ по условию. Произведение двух неотрицательных чисел неотрицательно, значит $a^{3}+b^{3}+c^{3}-3abc\\ge0$.\n\n**Равенство.** Произведение равно нулю, если ноль хотя бы один сомножитель. Либо $a=b=c$ (вторая скобка ноль), либо $a+b+c=0$, что при неотрицательных числах означает $a=b=c=0$ — частный случай первого. **Ответ:** равенство ровно при $a=b=c$. $\\blacksquare$",
    "en": "Use the identity $$a^{3}+b^{3}+c^{3}-3abc=(a+b+c)\\left(a^{2}+b^{2}+c^{2}-ab-bc-ca\\right)$$ and rewrite the second bracket: $$a^{2}+b^{2}+c^{2}-ab-bc-ca=\\tfrac12\\left[(a-b)^{2}+(b-c)^{2}+(c-a)^{2}\\right]\\ \\ge\\ 0 .$$ The first bracket $a+b+c\\ge0$ by hypothesis. A product of two non-negative numbers is non-negative, so $a^{3}+b^{3}+c^{3}-3abc\\ge0$.\n\n**Equality.** The product vanishes when a factor does. Either $a=b=c$ (second bracket zero), or $a+b+c=0$, which for non-negative numbers means $a=b=c=0$ — a special case of the first. **Answer:** equality exactly when $a=b=c$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Положительные числа $a,b,c$ удовлетворяют условию $a+b+c=1$. Докажите, что $$\\left(\\frac1a-1\\right)\\left(\\frac1b-1\\right)\\left(\\frac1c-1\\right)\\ \\ge\\ 8 .$$",
    "en": "Positive numbers $a,b,c$ satisfy $a+b+c=1$. Prove that $$\\left(\\frac1a-1\\right)\\left(\\frac1b-1\\right)\\left(\\frac1c-1\\right)\\ \\ge\\ 8 .$$"
   },
   "hint": {
    "ru": "Замените единицу на $a+b+c$ в каждой скобке.",
    "en": "Replace $1$ by $a+b+c$ inside each bracket."
   },
   "sol": {
    "ru": "Используем условие: $$\\frac1a-1=\\frac{1-a}{a}=\\frac{(a+b+c)-a}{a}=\\frac{b+c}{a},$$ и аналогично для остальных. Значит доказываемое неравенство равносильно $$\\frac{(b+c)(c+a)(a+b)}{abc}\\ \\ge\\ 8,\\qquad\\text{то есть}\\qquad (a+b)(b+c)(c+a)\\ge8abc .$$ А это уже разобранный пример: перемножаем три неравенства AM–GM $$a+b\\ge2\\sqrt{ab},\\quad b+c\\ge2\\sqrt{bc},\\quad c+a\\ge2\\sqrt{ca}$$ (все части положительны) и получаем $8abc$.\n\nРавенство при $a=b=c=\\tfrac13$; проверка: $(3-1)^{3}=8$ ✓ $\\blacksquare$",
    "en": "Use the hypothesis: $$\\frac1a-1=\\frac{1-a}{a}=\\frac{(a+b+c)-a}{a}=\\frac{b+c}{a},$$ and likewise for the others. So the inequality is equivalent to $$\\frac{(b+c)(c+a)(a+b)}{abc}\\ \\ge\\ 8,\\qquad\\text{that is}\\qquad (a+b)(b+c)(c+a)\\ge8abc .$$ That is the worked example above: multiply the three AM–GM inequalities $$a+b\\ge2\\sqrt{ab},\\quad b+c\\ge2\\sqrt{bc},\\quad c+a\\ge2\\sqrt{ca}$$ (all parts positive) to get $8abc$.\n\nEquality at $a=b=c=\\tfrac13$; check: $(3-1)^{3}=8$ ✓ $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $\\dfrac1{1^{2}}+\\dfrac1{2^{2}}+\\dots+\\dfrac1{n^{2}}<2$ при любом натуральном $n$.",
    "en": "Prove that $\\dfrac1{1^{2}}+\\dfrac1{2^{2}}+\\dots+\\dfrac1{n^{2}}<2$ for every positive integer $n$."
   },
   "hint": {
    "ru": "При $k\\ge2$ оцените $\\dfrac1{k^{2}}<\\dfrac1{k(k-1)}$ и вспомните про телескопирование.",
    "en": "For $k\\ge2$ bound $\\dfrac1{k^{2}}<\\dfrac1{k(k-1)}$ and telescope."
   },
   "sol": {
    "ru": "При $k\\ge2$ имеем $k^{2}>k(k-1)>0$, поэтому $$\\frac1{k^{2}}<\\frac1{k(k-1)}=\\frac1{k-1}-\\frac1{k}.$$ (Последнее равенство проверяется приведением к общему знаменателю.) Складываем от $k=2$ до $n$: $$\\sum_{k=2}^{n}\\frac1{k^{2}}\\ <\\ \\left(\\frac11-\\frac12\\right)+\\left(\\frac12-\\frac13\\right)+\\dots+\\left(\\frac1{n-1}-\\frac1n\\right)=1-\\frac1n .$$ Все внутренние слагаемые сократились — это и есть телескопирование. Добавляя первое слагаемое суммы, получаем $$\\sum_{k=1}^{n}\\frac1{k^{2}}\\ <\\ 1+1-\\frac1n=2-\\frac1n\\ <\\ 2 . \\qquad\\blacksquare$$\n\n*Замечание.* Точное значение бесконечной суммы равно $\\tfrac{\\pi^{2}}{6}\\approx1{,}645$ — это знаменитая базельская задача, решённая Эйлером.",
    "en": "For $k\\ge2$ we have $k^{2}>k(k-1)>0$, so $$\\frac1{k^{2}}<\\frac1{k(k-1)}=\\frac1{k-1}-\\frac1{k}.$$ (The last equality is checked over a common denominator.) Summing from $k=2$ to $n$: $$\\sum_{k=2}^{n}\\frac1{k^{2}}\\ <\\ \\left(\\frac11-\\frac12\\right)+\\left(\\frac12-\\frac13\\right)+\\dots+\\left(\\frac1{n-1}-\\frac1n\\right)=1-\\frac1n .$$ Every interior term cancels — that is telescoping. Adding the first term of the sum, $$\\sum_{k=1}^{n}\\frac1{k^{2}}\\ <\\ 1+1-\\frac1n=2-\\frac1n\\ <\\ 2 . \\qquad\\blacksquare$$\n\n*Remark.* The exact value of the infinite sum is $\\tfrac{\\pi^{2}}{6}\\approx1.645$ — the famous Basel problem solved by Euler."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $n!<\\left(\\dfrac{n+1}{2}\\right)^{n}$ при любом натуральном $n\\ge2$.",
    "en": "Prove that $n!<\\left(\\dfrac{n+1}{2}\\right)^{n}$ for every integer $n\\ge2$."
   },
   "hint": {
    "ru": "Примените AM–GM к числам $1,2,\\dots,n$.",
    "en": "Apply AM–GM to the numbers $1,2,\\dots,n$."
   },
   "sol": {
    "ru": "Применим AM–GM к $n$ числам $1,2,\\dots,n$: $$\\sqrt[n]{1\\cdot2\\cdots n}\\ \\le\\ \\frac{1+2+\\dots+n}{n}=\\frac{\\frac{n(n+1)}{2}}{n}=\\frac{n+1}{2}.$$ Возводя в $n$-ю степень (обе части положительны), получаем $n!\\le\\left(\\tfrac{n+1}{2}\\right)^{n}$.\n\nОсталось показать, что неравенство **строгое** при $n\\ge2$. Равенство в AM–GM достигается только когда все числа равны, а среди $1,2,\\dots,n$ при $n\\ge2$ есть различные ($1\\ne2$). Значит неравенство строгое. $\\blacksquare$\n\n*Проверка при $n=3$:* $6<\\left(\\tfrac42\\right)^{3}=8$ ✓",
    "en": "Apply AM–GM to the $n$ numbers $1,2,\\dots,n$: $$\\sqrt[n]{1\\cdot2\\cdots n}\\ \\le\\ \\frac{1+2+\\dots+n}{n}=\\frac{\\frac{n(n+1)}{2}}{n}=\\frac{n+1}{2}.$$ Raising to the $n$-th power (both sides positive) gives $n!\\le\\left(\\tfrac{n+1}{2}\\right)^{n}$.\n\nIt remains to see the inequality is **strict** for $n\\ge2$. Equality in AM–GM requires all the numbers to be equal, and among $1,2,\\dots,n$ with $n\\ge2$ there are different ones ($1\\ne2$). So the inequality is strict. $\\blacksquare$\n\n*Check at $n=3$:* $6<\\left(\\tfrac42\\right)^{3}=8$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Положительные числа удовлетворяют условию $abc=1$. Докажите, что $a+b+c\\ge3$ и $ab+bc+ca\\ge3$.",
    "en": "Positive numbers satisfy $abc=1$. Prove that $a+b+c\\ge3$ and $ab+bc+ca\\ge3$."
   },
   "hint": {
    "ru": "AM–GM для трёх чисел, во втором случае — для произведений.",
    "en": "AM–GM for three numbers; in the second case apply it to the products."
   },
   "sol": {
    "ru": "**Первое неравенство.** По AM–GM $$a+b+c\\ \\ge\\ 3\\sqrt[3]{abc}=3\\sqrt[3]{1}=3 .$$\n\n**Второе неравенство.** Применим AM–GM к трём положительным числам $ab$, $bc$, $ca$: $$ab+bc+ca\\ \\ge\\ 3\\sqrt[3]{ab\\cdot bc\\cdot ca}=3\\sqrt[3]{(abc)^{2}}=3\\sqrt[3]{1}=3 .$$\n\nВ обоих случаях равенство требует равенства слагаемых, то есть $a=b=c$, а вместе с $abc=1$ это даёт $a=b=c=1$. $\\blacksquare$",
    "en": "**First inequality.** By AM–GM $$a+b+c\\ \\ge\\ 3\\sqrt[3]{abc}=3\\sqrt[3]{1}=3 .$$\n\n**Second inequality.** Apply AM–GM to the three positive numbers $ab$, $bc$, $ca$: $$ab+bc+ca\\ \\ge\\ 3\\sqrt[3]{ab\\cdot bc\\cdot ca}=3\\sqrt[3]{(abc)^{2}}=3\\sqrt[3]{1}=3 .$$\n\nIn both cases equality forces the terms to be equal, that is $a=b=c$, and together with $abc=1$ this gives $a=b=c=1$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что для положительных $a,b,c$ $$\\frac{a^{2}}{b}+\\frac{b^{2}}{c}+\\frac{c^{2}}{a}\\ \\ge\\ a+b+c .$$",
    "en": "Prove that for positive $a,b,c$ $$\\frac{a^{2}}{b}+\\frac{b^{2}}{c}+\\frac{c^{2}}{a}\\ \\ge\\ a+b+c .$$"
   },
   "hint": {
    "ru": "Форма Энгеля — или сложите три неравенства вида $\\tfrac{a^{2}}{b}+b\\ge2a$.",
    "en": "Use the Engel form — or add three inequalities of the shape $\\tfrac{a^{2}}{b}+b\\ge2a$."
   },
   "sol": {
    "ru": "**Способ 1 (форма Энгеля).** $$\\frac{a^{2}}{b}+\\frac{b^{2}}{c}+\\frac{c^{2}}{a}\\ \\ge\\ \\frac{(a+b+c)^{2}}{a+b+c}=a+b+c .$$\n\n**Способ 2 (без готовых лемм).** Для каждого слагаемого по AM–GM $$\\frac{a^{2}}{b}+b\\ \\ge\\ 2\\sqrt{\\frac{a^{2}}{b}\\cdot b}=2a,$$ и аналогично $\\tfrac{b^{2}}{c}+c\\ge2b$, $\\tfrac{c^{2}}{a}+a\\ge2c$. Складываем все три: $$\\left(\\frac{a^{2}}{b}+\\frac{b^{2}}{c}+\\frac{c^{2}}{a}\\right)+(a+b+c)\\ \\ge\\ 2(a+b+c),$$ откуда после переноса и получается требуемое. Равенство при $a=b=c$. $\\blacksquare$",
    "en": "**Method 1 (Engel form).** $$\\frac{a^{2}}{b}+\\frac{b^{2}}{c}+\\frac{c^{2}}{a}\\ \\ge\\ \\frac{(a+b+c)^{2}}{a+b+c}=a+b+c .$$\n\n**Method 2 (no ready-made lemma).** For each term, AM–GM gives $$\\frac{a^{2}}{b}+b\\ \\ge\\ 2\\sqrt{\\frac{a^{2}}{b}\\cdot b}=2a,$$ and likewise $\\tfrac{b^{2}}{c}+c\\ge2b$, $\\tfrac{c^{2}}{a}+a\\ge2c$. Adding all three, $$\\left(\\frac{a^{2}}{b}+\\frac{b^{2}}{c}+\\frac{c^{2}}{a}\\right)+(a+b+c)\\ \\ge\\ 2(a+b+c),$$ and moving the bracket across gives the claim. Equality when $a=b=c$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $\\dfrac{a^{2}}{b+c}+\\dfrac{b^{2}}{c+a}+\\dfrac{c^{2}}{a+b}\\ \\ge\\ \\dfrac{a+b+c}{2}$ для положительных $a,b,c$.",
    "en": "Prove that $\\dfrac{a^{2}}{b+c}+\\dfrac{b^{2}}{c+a}+\\dfrac{c^{2}}{a+b}\\ \\ge\\ \\dfrac{a+b+c}{2}$ for positive $a,b,c$."
   },
   "hint": {
    "ru": "Знаменатели в сумме дают $2(a+b+c)$.",
    "en": "The denominators add up to $2(a+b+c)$."
   },
   "sol": {
    "ru": "Все знаменатели положительны, поэтому применима форма Энгеля: $$\\frac{a^{2}}{b+c}+\\frac{b^{2}}{c+a}+\\frac{c^{2}}{a+b}\\ \\ge\\ \\frac{(a+b+c)^{2}}{(b+c)+(c+a)+(a+b)}=\\frac{(a+b+c)^{2}}{2(a+b+c)}=\\frac{a+b+c}{2}.$$ Равенство достигается, когда наборы пропорциональны, то есть $\\tfrac{a}{b+c}=\\tfrac{b}{c+a}=\\tfrac{c}{a+b}$, что даёт $a=b=c$. $\\blacksquare$\n\n*Замечание.* Разделив обе части на $a+b+c$, снова получаем неравенство Несбитта.",
    "en": "All denominators are positive, so the Engel form applies: $$\\frac{a^{2}}{b+c}+\\frac{b^{2}}{c+a}+\\frac{c^{2}}{a+b}\\ \\ge\\ \\frac{(a+b+c)^{2}}{(b+c)+(c+a)+(a+b)}=\\frac{(a+b+c)^{2}}{2(a+b+c)}=\\frac{a+b+c}{2}.$$ Equality occurs when the lists are proportional, that is $\\tfrac{a}{b+c}=\\tfrac{b}{c+a}=\\tfrac{c}{a+b}$, which forces $a=b=c$. $\\blacksquare$\n\n*Remark.* Dividing both sides by $a+b+c$ recovers Nesbitt’s inequality."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Найдите наименьшее значение выражения $\\dfrac{(x+4)(x+9)}{x}$ при $x>0$.",
    "en": "Find the smallest value of $\\dfrac{(x+4)(x+9)}{x}$ for $x>0$."
   },
   "hint": {
    "ru": "Раскройте скобки и разделите на $x$.",
    "en": "Expand and divide by $x$."
   },
   "sol": {
    "ru": "Раскроем и разделим почленно: $$\\frac{(x+4)(x+9)}{x}=\\frac{x^{2}+13x+36}{x}=x+\\frac{36}{x}+13 .$$ По AM–GM для двух положительных чисел $$x+\\frac{36}{x}\\ \\ge\\ 2\\sqrt{x\\cdot\\frac{36}{x}}=2\\cdot6=12 ,$$ причём равенство достигается при $x=\\tfrac{36}{x}$, то есть $x^{2}=36$ и (так как $x>0$) $x=6$.\n\nЗначит выражение не меньше $12+13=25$, а при $x=6$ равно $\\tfrac{10\\cdot15}{6}=25$. **Ответ:** наименьшее значение $25$, достигается при $x=6$.",
    "en": "Expand and divide term by term: $$\\frac{(x+4)(x+9)}{x}=\\frac{x^{2}+13x+36}{x}=x+\\frac{36}{x}+13 .$$ By AM–GM for two positive numbers $$x+\\frac{36}{x}\\ \\ge\\ 2\\sqrt{x\\cdot\\frac{36}{x}}=2\\cdot6=12 ,$$ with equality when $x=\\tfrac{36}{x}$, that is $x^{2}=36$ and (since $x>0$) $x=6$.\n\nSo the expression is at least $12+13=25$, and at $x=6$ it equals $\\tfrac{10\\cdot15}{6}=25$. **Answer:** the minimum is $25$, attained at $x=6$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите неравенство Коши–Буняковского для двух пар чисел: $$\\left(a^{2}+b^{2}\\right)\\left(x^{2}+y^{2}\\right)\\ \\ge\\ (ax+by)^{2},$$ и выясните, когда достигается равенство.",
    "en": "Prove the Cauchy–Schwarz inequality for two pairs: $$\\left(a^{2}+b^{2}\\right)\\left(x^{2}+y^{2}\\right)\\ \\ge\\ (ax+by)^{2},$$ and determine when equality holds."
   },
   "hint": {
    "ru": "Раскройте разность — получится один квадрат.",
    "en": "Expand the difference — a single square appears."
   },
   "sol": {
    "ru": "**Прямой счёт.** Раскроем обе части: $$\\left(a^{2}+b^{2}\\right)\\left(x^{2}+y^{2}\\right)=a^{2}x^{2}+a^{2}y^{2}+b^{2}x^{2}+b^{2}y^{2},$$ $$(ax+by)^{2}=a^{2}x^{2}+2abxy+b^{2}y^{2}.$$ Вычитая, получаем $$\\left(a^{2}+b^{2}\\right)\\left(x^{2}+y^{2}\\right)-(ax+by)^{2}=a^{2}y^{2}-2abxy+b^{2}x^{2}=(ay-bx)^{2}\\ \\ge\\ 0 .$$ Это тождество Лагранжа для двух пар.\n\n**Равенство.** Достигается тогда и только тогда, когда $ay=bx$, то есть когда пары $(a,b)$ и $(x,y)$ пропорциональны (при ненулевых наборах это в точности $\\tfrac ax=\\tfrac by$). $\\blacksquare$\n\n*Пример применения.* При $x=y=1$ получаем $2\\left(a^{2}+b^{2}\\right)\\ge(a+b)^{2}$ — то есть QM $\\ge$ AM.",
    "en": "**Direct computation.** Expand both sides: $$\\left(a^{2}+b^{2}\\right)\\left(x^{2}+y^{2}\\right)=a^{2}x^{2}+a^{2}y^{2}+b^{2}x^{2}+b^{2}y^{2},$$ $$(ax+by)^{2}=a^{2}x^{2}+2abxy+b^{2}y^{2}.$$ Subtracting, $$\\left(a^{2}+b^{2}\\right)\\left(x^{2}+y^{2}\\right)-(ax+by)^{2}=a^{2}y^{2}-2abxy+b^{2}x^{2}=(ay-bx)^{2}\\ \\ge\\ 0 .$$ This is Lagrange’s identity for two pairs.\n\n**Equality.** It holds exactly when $ay=bx$, that is when the pairs $(a,b)$ and $(x,y)$ are proportional (for non-zero lists, precisely $\\tfrac ax=\\tfrac by$). $\\blacksquare$\n\n*A use.* Taking $x=y=1$ gives $2\\left(a^{2}+b^{2}\\right)\\ge(a+b)^{2}$, which is QM $\\ge$ AM."
   }
  },
  {
   "src": "IMO 1964, задача 2 / IMO 1964 Problem 2",
   "lvl": 3,
   "q": {
    "ru": "Пусть $a,b,c$ — стороны треугольника. Докажите, что $$a^{2}(b+c-a)+b^{2}(c+a-b)+c^{2}(a+b-c)\\ \\le\\ 3abc .$$",
    "en": "Let $a,b,c$ be the sides of a triangle. Prove that $$a^{2}(b+c-a)+b^{2}(c+a-b)+c^{2}(a+b-c)\\ \\le\\ 3abc .$$"
   },
   "hint": {
    "ru": "Сделайте замену Равви: $a=y+z$, $b=z+x$, $c=x+y$ с положительными $x,y,z$.",
    "en": "Use the Ravi substitution: $a=y+z$, $b=z+x$, $c=x+y$ with positive $x,y,z$."
   },
   "sol": {
    "ru": "**Замена.** Из неравенств треугольника числа $$x=\\frac{b+c-a}{2},\\qquad y=\\frac{c+a-b}{2},\\qquad z=\\frac{a+b-c}{2}$$ положительны, и обратно $a=y+z$, $b=z+x$, $c=x+y$. Такая замена (её называют заменой Равви) превращает «условие треугольника» в обычную положительность.\n\n**Переписываем неравенство.** Заметим, что $b+c-a=2x$ и так далее, поэтому доказать надо $$2\\left[x(y+z)^{2}+y(z+x)^{2}+z(x+y)^{2}\\right]\\ \\le\\ 3(y+z)(z+x)(x+y).$$\n\n**Раскрываем обе части.** Слева: $$x(y^{2}+2yz+z^{2})+y(z^{2}+2zx+x^{2})+z(x^{2}+2xy+y^{2})=\\left(xy^{2}+xz^{2}+yz^{2}+x^{2}y+x^{2}z+y^{2}z\\right)+6xyz .$$ Справа: $$(y+z)(z+x)(x+y)=\\left(xy^{2}+xz^{2}+yz^{2}+x^{2}y+x^{2}z+y^{2}z\\right)+2xyz .$$ Обозначим $S$ сумму шести смешанных членов. Неравенство принимает вид $$2\\left(S+6xyz\\right)\\ \\le\\ 3\\left(S+2xyz\\right),\\qquad\\text{то есть}\\qquad 6xyz\\le S .$$\n\n**Последний шаг.** По AM–GM для шести положительных чисел $$S=xy^{2}+xz^{2}+yz^{2}+x^{2}y+x^{2}z+y^{2}z\\ \\ge\\ 6\\sqrt[6]{x^{6}y^{6}z^{6}}=6xyz .$$\n\nЗначит исходное неравенство верно, а равенство достигается при $x=y=z$, то есть при $a=b=c$ — для равностороннего треугольника. $\\blacksquare$",
    "en": "**Substitution.** By the triangle inequalities the numbers $$x=\\frac{b+c-a}{2},\\qquad y=\\frac{c+a-b}{2},\\qquad z=\\frac{a+b-c}{2}$$ are positive, and conversely $a=y+z$, $b=z+x$, $c=x+y$. This substitution (the Ravi substitution) turns \"being a triangle\" into plain positivity.\n\n**Rewrite the inequality.** Note $b+c-a=2x$ and so on, so we must prove $$2\\left[x(y+z)^{2}+y(z+x)^{2}+z(x+y)^{2}\\right]\\ \\le\\ 3(y+z)(z+x)(x+y).$$\n\n**Expand both sides.** On the left, $x(y^2+2yz+z^2)+y(z^2+2zx+x^2)+z(x^2+2xy+y^2)$ equals $$\\left(xy^{2}+xz^{2}+yz^{2}+x^{2}y+x^{2}z+y^{2}z\\right)+6xyz .$$ On the right, $$(y+z)(z+x)(x+y)=\\left(xy^{2}+xz^{2}+yz^{2}+x^{2}y+x^{2}z+y^{2}z\\right)+2xyz .$$ Write $S$ for the sum of the six mixed terms. The inequality becomes $$2\\left(S+6xyz\\right)\\ \\le\\ 3\\left(S+2xyz\\right),\\qquad\\text{that is}\\qquad 6xyz\\le S .$$\n\n**Last step.** By AM–GM for six positive numbers $$S=xy^{2}+xz^{2}+yz^{2}+x^{2}y+x^{2}z+y^{2}z\\ \\ge\\ 6\\sqrt[6]{x^{6}y^{6}z^{6}}=6xyz .$$\n\nSo the original inequality holds, with equality when $x=y=z$, that is when $a=b=c$ — the equilateral triangle. $\\blacksquare$"
   }
  },
  {
   "src": "IMO 1995, задача 2 / IMO 1995 Problem 2",
   "lvl": 3,
   "q": {
    "ru": "Положительные числа $a,b,c$ удовлетворяют условию $abc=1$. Докажите, что $$\\frac{1}{a^{3}(b+c)}+\\frac{1}{b^{3}(c+a)}+\\frac{1}{c^{3}(a+b)}\\ \\ge\\ \\frac32 .$$",
    "en": "Positive numbers $a,b,c$ satisfy $abc=1$. Prove that $$\\frac{1}{a^{3}(b+c)}+\\frac{1}{b^{3}(c+a)}+\\frac{1}{c^{3}(a+b)}\\ \\ge\\ \\frac32 .$$"
   },
   "hint": {
    "ru": "Сделайте замену $x=\\tfrac1a$, $y=\\tfrac1b$, $z=\\tfrac1c$ и примените форму Энгеля.",
    "en": "Substitute $x=\\tfrac1a$, $y=\\tfrac1b$, $z=\\tfrac1c$ and apply the Engel form."
   },
   "sol": {
    "ru": "**Шаг 1: замена.** Положим $x=\\tfrac1a$, $y=\\tfrac1b$, $z=\\tfrac1c$; тогда $x,y,z>0$ и $xyz=\\tfrac1{abc}=1$. Преобразуем одно слагаемое: $$\\frac1{a^{3}(b+c)}=\\frac{x^{3}}{\\frac1y+\\frac1z}=\\frac{x^{3}}{\\frac{y+z}{yz}}=\\frac{x^{3}yz}{y+z}.$$ Так как $xyz=1$, имеем $yz=\\tfrac1x$, поэтому $$\\frac1{a^{3}(b+c)}=\\frac{x^{3}\\cdot\\frac1x}{y+z}=\\frac{x^{2}}{y+z}.$$\n\n**Шаг 2: что осталось доказать.** Сумма приняла вид $$\\frac{x^{2}}{y+z}+\\frac{y^{2}}{z+x}+\\frac{z^{2}}{x+y}\\ \\ge\\ \\frac32 .$$\n\n**Шаг 3: форма Энгеля.** Знаменатели положительны, поэтому $$\\frac{x^{2}}{y+z}+\\frac{y^{2}}{z+x}+\\frac{z^{2}}{x+y}\\ \\ge\\ \\frac{(x+y+z)^{2}}{2(x+y+z)}=\\frac{x+y+z}{2}.$$\n\n**Шаг 4: используем условие.** По AM–GM $$x+y+z\\ \\ge\\ 3\\sqrt[3]{xyz}=3 .$$ Значит вся сумма не меньше $\\tfrac32$.\n\nРавенство требует $x=y=z$ и $xyz=1$, то есть $x=y=z=1$, что отвечает $a=b=c=1$. Проверка: каждое слагаемое равно $\\tfrac1{1\\cdot2}=\\tfrac12$, сумма $\\tfrac32$ ✓ $\\blacksquare$",
    "en": "**Step 1: substitute.** Put $x=\\tfrac1a$, $y=\\tfrac1b$, $z=\\tfrac1c$; then $x,y,z>0$ and $xyz=\\tfrac1{abc}=1$. Transform one term: $$\\frac1{a^{3}(b+c)}=\\frac{x^{3}}{\\frac1y+\\frac1z}=\\frac{x^{3}}{\\frac{y+z}{yz}}=\\frac{x^{3}yz}{y+z}.$$ Since $xyz=1$ we have $yz=\\tfrac1x$, so $$\\frac1{a^{3}(b+c)}=\\frac{x^{3}\\cdot\\frac1x}{y+z}=\\frac{x^{2}}{y+z}.$$\n\n**Step 2: what is left to prove.** The sum has become $$\\frac{x^{2}}{y+z}+\\frac{y^{2}}{z+x}+\\frac{z^{2}}{x+y}\\ \\ge\\ \\frac32 .$$\n\n**Step 3: the Engel form.** The denominators are positive, so $$\\frac{x^{2}}{y+z}+\\frac{y^{2}}{z+x}+\\frac{z^{2}}{x+y}\\ \\ge\\ \\frac{(x+y+z)^{2}}{2(x+y+z)}=\\frac{x+y+z}{2}.$$\n\n**Step 4: spend the hypothesis.** By AM–GM $$x+y+z\\ \\ge\\ 3\\sqrt[3]{xyz}=3 .$$ Hence the whole sum is at least $\\tfrac32$.\n\nEquality needs $x=y=z$ together with $xyz=1$, that is $x=y=z=1$, which corresponds to $a=b=c=1$. Check: each term equals $\\tfrac1{1\\cdot2}=\\tfrac12$ and the sum is $\\tfrac32$ ✓ $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача Коши / Cauchy, classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите неравенство AM–GM для четырёх неотрицательных чисел, а затем выведите из него случай трёх чисел.",
    "en": "Prove the AM–GM inequality for four non-negative numbers, and then deduce the case of three numbers from it."
   },
   "hint": {
    "ru": "Для четырёх — примените случай двух чисел трижды. Для трёх — возьмите четвёртым числом среднее первых трёх.",
    "en": "For four, apply the two-number case three times. For three, take the fourth number to be the mean of the first three."
   },
   "sol": {
    "ru": "**Случай четырёх чисел.** Пусть $a,b,c,d\\ge0$. Применим AM–GM для двух чисел трижды: $$\\frac{a+b}{2}\\ge\\sqrt{ab},\\qquad \\frac{c+d}{2}\\ge\\sqrt{cd},$$ и затем к полученным величинам: $$\\frac{a+b+c+d}{4}=\\frac{\\frac{a+b}{2}+\\frac{c+d}{2}}{2}\\ \\ge\\ \\sqrt{\\frac{a+b}{2}\\cdot\\frac{c+d}{2}}\\ \\ge\\ \\sqrt{\\sqrt{ab}\\cdot\\sqrt{cd}}=\\sqrt[4]{abcd}.$$ (Во втором переходе мы воспользовались тем, что функция $\\sqrt{\\cdot}$ монотонна, а обе оценённые скобки неотрицательны.)\n\n**Случай трёх чисел.** Пусть $a,b,c\\ge0$ и $$m=\\frac{a+b+c}{3}.$$ Возьмём в доказанном неравенстве четвёртым числом само $m$: $$\\frac{a+b+c+m}{4}\\ \\ge\\ \\sqrt[4]{abc\\,m}.$$ Но числитель слева равен $3m+m=4m$, поэтому левая часть равна $m$: $$m\\ \\ge\\ \\sqrt[4]{abc\\,m}.$$ Обе части неотрицательны, возведём в четвёртую степень: $$m^{4}\\ \\ge\\ abc\\cdot m .$$ Если $m=0$, то $a=b=c=0$ и утверждение тривиально. Если $m>0$, делим на $m$: $$m^{3}\\ \\ge\\ abc\\quad\\Longrightarrow\\quad m\\ \\ge\\ \\sqrt[3]{abc},$$ то есть $\\dfrac{a+b+c}{3}\\ge\\sqrt[3]{abc}$. $\\blacksquare$\n\n*Замечание.* Этот приём Коши — «вперёд по степеням двойки, назад по одному» — доказывает AM–GM сразу для всех $n$: сначала для $n=2,4,8,16,\\dots$, а затем спуском от $n$ к $n-1$.",
    "en": "**Four numbers.** Let $a,b,c,d\\ge0$. Apply the two-number case three times: $$\\frac{a+b}{2}\\ge\\sqrt{ab},\\qquad \\frac{c+d}{2}\\ge\\sqrt{cd},$$ and then to the results: $$\\frac{a+b+c+d}{4}=\\frac{\\frac{a+b}{2}+\\frac{c+d}{2}}{2}\\ \\ge\\ \\sqrt{\\frac{a+b}{2}\\cdot\\frac{c+d}{2}}\\ \\ge\\ \\sqrt{\\sqrt{ab}\\cdot\\sqrt{cd}}=\\sqrt[4]{abcd}.$$ (In the second step we used that the square root is increasing and both bracketed quantities are non-negative.)\n\n**Three numbers.** Let $a,b,c\\ge0$ and put $$m=\\frac{a+b+c}{3}.$$ Use $m$ itself as the fourth number in the inequality just proved: $$\\frac{a+b+c+m}{4}\\ \\ge\\ \\sqrt[4]{abc\\,m}.$$ The numerator on the left is $3m+m=4m$, so the left side equals $m$: $$m\\ \\ge\\ \\sqrt[4]{abc\\,m}.$$ Both sides are non-negative, so raise to the fourth power: $$m^{4}\\ \\ge\\ abc\\cdot m .$$ If $m=0$ then $a=b=c=0$ and the claim is trivial. If $m>0$, divide by $m$: $$m^{3}\\ \\ge\\ abc\\quad\\Longrightarrow\\quad m\\ \\ge\\ \\sqrt[3]{abc},$$ that is $\\dfrac{a+b+c}{3}\\ge\\sqrt[3]{abc}$. $\\blacksquare$\n\n*Remark.* This trick of Cauchy — \"forward along powers of two, backward one at a time\" — proves AM–GM for every $n$ at once: first for $n=2,4,8,16,\\dots$, then by descending from $n$ to $n-1$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $a^{4}+b^{4}+c^{4}\\ge abc\\,(a+b+c)$ для любых вещественных $a,b,c$.",
    "en": "Prove that $a^{4}+b^{4}+c^{4}\\ge abc\\,(a+b+c)$ for all real $a,b,c$."
   },
   "hint": {
    "ru": "Сделайте два шага: сначала до $a^{2}b^{2}+b^{2}c^{2}+c^{2}a^{2}$, потом дальше.",
    "en": "Take two steps: first down to $a^{2}b^{2}+b^{2}c^{2}+c^{2}a^{2}$, then onward."
   },
   "sol": {
    "ru": "**Шаг 1.** Применим неравенство $x^{2}+y^{2}+z^{2}\\ge xy+yz+zx$ к числам $x=a^{2}$, $y=b^{2}$, $z=c^{2}$: $$a^{4}+b^{4}+c^{4}\\ \\ge\\ a^{2}b^{2}+b^{2}c^{2}+c^{2}a^{2}.$$\n\n**Шаг 2.** Применим то же неравенство ещё раз, теперь к числам $x=ab$, $y=bc$, $z=ca$: $$a^{2}b^{2}+b^{2}c^{2}+c^{2}a^{2}\\ \\ge\\ ab\\cdot bc+bc\\cdot ca+ca\\cdot ab=ab^{2}c+abc^{2}+a^{2}bc=abc\\,(a+b+c).$$\n\nСоединяя два шага по транзитивности, получаем требуемое. Заметим, что оба шага верны для **любых** вещественных чисел, так как неравенство $x^{2}+y^{2}+z^{2}\\ge xy+yz+zx$ не требует положительности.\n\nРавенство достигается при $a^{2}=b^{2}=c^{2}$ и $ab=bc=ca$ одновременно, то есть при $a=b=c$. $\\blacksquare$",
    "en": "**Step 1.** Apply $x^{2}+y^{2}+z^{2}\\ge xy+yz+zx$ to $x=a^{2}$, $y=b^{2}$, $z=c^{2}$: $$a^{4}+b^{4}+c^{4}\\ \\ge\\ a^{2}b^{2}+b^{2}c^{2}+c^{2}a^{2}.$$\n\n**Step 2.** Apply the same inequality again, now to $x=ab$, $y=bc$, $z=ca$: $$a^{2}b^{2}+b^{2}c^{2}+c^{2}a^{2}\\ \\ge\\ ab\\cdot bc+bc\\cdot ca+ca\\cdot ab=ab^{2}c+abc^{2}+a^{2}bc=abc\\,(a+b+c).$$\n\nChaining the two steps by transitivity gives the claim. Note that both steps hold for **all** real numbers, because $x^{2}+y^{2}+z^{2}\\ge xy+yz+zx$ needs no positivity.\n\nEquality requires $a^{2}=b^{2}=c^{2}$ and $ab=bc=ca$ at once, that is $a=b=c$. $\\blacksquare$"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что $a^{2}+b^{2}\\ge2ab$ для любых действительных $a,b$. Когда достигается равенство?",
    "en": "Prove that $a^{2}+b^{2}\\ge2ab$ for all real $a,b$. When does equality hold?"
   },
   "hint": {
    "ru": "Перенесите всё в одну сторону.",
    "en": "Move everything to one side."
   },
   "sol": {
    "ru": "Перенесём всё влево: $$a^{2}+b^{2}-2ab=(a-b)^{2} .$$\n\nКвадрат действительного числа неотрицателен, значит $$(a-b)^{2}\\ge0\\quad\\Longleftrightarrow\\quad a^{2}+b^{2}\\ge2ab . \\qquad\\blacksquare$$\n\n**Равенство** достигается ровно тогда, когда $(a-b)^{2}=0$, то есть при $a=b$.\n\n**Замечание.** Это самое базовое неравенство: почти все дальнейшие — его переодетые варианты.",
    "en": "Move everything to the left: $$a^{2}+b^{2}-2ab=(a-b)^{2} .$$\n\nThe square of a real number is non-negative, so $$(a-b)^{2}\\ge0\\quad\\Longleftrightarrow\\quad a^{2}+b^{2}\\ge2ab . \\qquad\\blacksquare$$\n\n**Equality** holds exactly when $(a-b)^{2}=0$, i.e. when $a=b$.\n\n**Remark.** This is the most basic inequality of all: almost every later one is a disguised version of it."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Докажите неравенство между средним арифметическим и средним геометрическим: $\\dfrac{a+b}{2}\\ge\\sqrt{ab}$ при $a,b\\ge0$.",
    "en": "Prove the AM–GM inequality $\\dfrac{a+b}{2}\\ge\\sqrt{ab}$ for $a,b\\ge0$."
   },
   "hint": {
    "ru": "Обозначьте $a=x^{2}$, $b=y^{2}$.",
    "en": "Put $a=x^{2}$, $b=y^{2}$."
   },
   "sol": {
    "ru": "Так как $a,b\\ge0$, можно записать $a=x^{2}$ и $b=y^{2}$, где $x=\\sqrt a\\ge0$, $y=\\sqrt b\\ge0$.\n\nНеравенство превращается в $$\\frac{x^{2}+y^{2}}{2}\\ge xy\\quad\\Longleftrightarrow\\quad x^{2}+y^{2}-2xy\\ge0\\quad\\Longleftrightarrow\\quad (x-y)^{2}\\ge0 ,$$ что верно всегда. $\\blacksquare$\n\n**Равенство** — при $x=y$, то есть при $a=b$.\n\n**Геометрический смысл.** В прямоугольнике со сторонами $a$ и $b$ полупериметр не меньше стороны квадрата той же площади.",
    "en": "Since $a,b\\ge0$ we may write $a=x^{2}$ and $b=y^{2}$ with $x=\\sqrt a\\ge0$, $y=\\sqrt b\\ge0$.\n\nThe inequality becomes $$\\frac{x^{2}+y^{2}}{2}\\ge xy\\quad\\Longleftrightarrow\\quad x^{2}+y^{2}-2xy\\ge0\\quad\\Longleftrightarrow\\quad (x-y)^{2}\\ge0 ,$$ which always holds. $\\blacksquare$\n\n**Equality** at $x=y$, i.e. $a=b$.\n\n**Geometric meaning.** For a rectangle with sides $a$ and $b$, the half-perimeter is at least the side of the square of the same area."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Найдите наименьшее значение выражения $x^{2}-6x+11$.",
    "en": "Find the smallest value of $x^{2}-6x+11$."
   },
   "hint": {
    "ru": "Выделите полный квадрат.",
    "en": "Complete the square."
   },
   "sol": {
    "ru": "Выделим полный квадрат: $$x^{2}-6x+11=\\left(x^{2}-6x+9\\right)+2=(x-3)^{2}+2 .$$\n\nПервое слагаемое неотрицательно, поэтому $$x^{2}-6x+11\\ge2 ,$$ причём равенство достигается при $x=3$.\n\n**Ответ:** наименьшее значение равно $2$ (при $x=3$).",
    "en": "Complete the square: $$x^{2}-6x+11=\\left(x^{2}-6x+9\\right)+2=(x-3)^{2}+2 .$$\n\nThe first term is non-negative, so $$x^{2}-6x+11\\ge2 ,$$ with equality at $x=3$.\n\n**Answer:** the smallest value is $2$, attained at $x=3$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что $x^{2}+4\\ge4x$ для любого действительного $x$.",
    "en": "Prove that $x^{2}+4\\ge4x$ for every real $x$."
   },
   "hint": {
    "ru": "$x^{2}-4x+4$ — знакомый квадрат.",
    "en": "$x^{2}-4x+4$ is a familiar square."
   },
   "sol": {
    "ru": "Перенесём всё влево: $$x^{2}-4x+4=(x-2)^{2}\\ge0 . \\qquad\\blacksquare$$\n\n**Равенство** при $x=2$.\n\n**Проверка** при $x=1$: слева $1+4=5$, справа $4$ ✓ При $x=5$: $25+4=29\\ge20$ ✓",
    "en": "Move everything to the left: $$x^{2}-4x+4=(x-2)^{2}\\ge0 . \\qquad\\blacksquare$$\n\n**Equality** at $x=2$.\n\n**Check** at $x=1$: the left side is $1+4=5$, the right $4$ ✓ At $x=5$: $25+4=29\\ge20$ ✓"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что $a^{2}+1\\ge2|a|$ для любого действительного $a$.",
    "en": "Prove that $a^{2}+1\\ge2|a|$ for every real $a$."
   },
   "hint": {
    "ru": "$a^{2}=|a|^{2}$.",
    "en": "$a^{2}=|a|^{2}$."
   },
   "sol": {
    "ru": "Заметим, что $a^{2}=|a|^{2}$, поэтому неравенство равносильно $$|a|^{2}-2|a|+1\\ge0\\quad\\Longleftrightarrow\\quad \\left(|a|-1\\right)^{2}\\ge0 ,$$ что верно всегда. $\\blacksquare$\n\n**Равенство** при $|a|=1$, то есть при $a=1$ или $a=-1$.\n\n**Следствие.** Для $a\\ne0$ отсюда получается знакомое $\\left|a+\\dfrac1a\\right|\\ge2$ — достаточно поделить обе части на $|a|$.",
    "en": "Note $a^{2}=|a|^{2}$, so the inequality is equivalent to $$|a|^{2}-2|a|+1\\ge0\\quad\\Longleftrightarrow\\quad \\left(|a|-1\\right)^{2}\\ge0 ,$$ which always holds. $\\blacksquare$\n\n**Equality** at $|a|=1$, i.e. $a=1$ or $a=-1$.\n\n**Consequence.** For $a\\ne0$ this gives the familiar $\\left|a+\\dfrac1a\\right|\\ge2$ — just divide both sides by $|a|$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 1,
   "q": {
    "ru": "Площадь прямоугольника равна $36$. Каков наименьший возможный периметр?",
    "en": "A rectangle has area $36$. What is the smallest possible perimeter?"
   },
   "hint": {
    "ru": "Примените неравенство о среднем к сторонам.",
    "en": "Apply AM–GM to the sides."
   },
   "sol": {
    "ru": "Пусть стороны равны $a$ и $b$, тогда $ab=36$ и периметр равен $P=2(a+b)$.\n\nПо неравенству о среднем $$\\frac{a+b}{2}\\ge\\sqrt{ab}=\\sqrt{36}=6\\quad\\Longrightarrow\\quad a+b\\ge12\\quad\\Longrightarrow\\quad P\\ge24 .$$\n\nРавенство достигается при $a=b$, то есть у квадрата со стороной $6$: его периметр действительно равен $24$.\n\n**Ответ:** $24$ (квадрат $6\\times6$).\n\n**Наблюдение.** Максимального периметра не существует: при $a=100$, $b=0{,}36$ площадь та же, а периметр больше $200$.",
    "en": "Let the sides be $a$ and $b$, so $ab=36$ and the perimeter is $P=2(a+b)$.\n\nBy AM–GM $$\\frac{a+b}{2}\\ge\\sqrt{ab}=\\sqrt{36}=6\\quad\\Longrightarrow\\quad a+b\\ge12\\quad\\Longrightarrow\\quad P\\ge24 .$$\n\nEquality holds when $a=b$, i.e. for the $6\\times6$ square, whose perimeter is indeed $24$.\n\n**Answer:** $24$ (the $6\\times6$ square).\n\n**Observation.** There is no largest perimeter: with $a=100$, $b=0.36$ the area is the same but the perimeter exceeds $200$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $a^{2}+b^{2}+c^{2}+3\\ge2(a+b+c)$ для любых действительных $a,b,c$.",
    "en": "Prove that $a^{2}+b^{2}+c^{2}+3\\ge2(a+b+c)$ for all real $a,b,c$."
   },
   "hint": {
    "ru": "Разбейте на три отдельных неравенства.",
    "en": "Split into three separate inequalities."
   },
   "sol": {
    "ru": "Перенесём всё влево и сгруппируем по переменным: $$a^{2}-2a+1+b^{2}-2b+1+c^{2}-2c+1=(a-1)^{2}+(b-1)^{2}+(c-1)^{2} .$$\n\nСумма трёх квадратов неотрицательна, значит неравенство верно. $\\blacksquare$\n\n**Равенство** — только при $a=b=c=1$.\n\n**Проверка** при $a=b=c=0$: слева $3$, справа $0$ ✓ При $a=b=c=2$: слева $12+3=15$, справа $12$ ✓",
    "en": "Move everything to the left and group by variable: $$a^{2}-2a+1+b^{2}-2b+1+c^{2}-2c+1=(a-1)^{2}+(b-1)^{2}+(c-1)^{2} .$$\n\nA sum of three squares is non-negative, so the inequality holds. $\\blacksquare$\n\n**Equality** only at $a=b=c=1$.\n\n**Check** at $a=b=c=0$: the left side is $3$, the right $0$ ✓ At $a=b=c=2$: $12+3=15$ versus $12$ ✓"
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $\\dfrac ab+\\dfrac bc+\\dfrac ca\\ge3$ для любых положительных $a,b,c$.",
    "en": "Prove that $\\dfrac ab+\\dfrac bc+\\dfrac ca\\ge3$ for all positive $a,b,c$."
   },
   "hint": {
    "ru": "Произведение трёх дробей равно единице.",
    "en": "The product of the three fractions equals one."
   },
   "sol": {
    "ru": "Обозначим $$x=\\frac ab,\\qquad y=\\frac bc,\\qquad z=\\frac ca .$$ Все три числа положительны, и их произведение равно $$xyz=\\frac ab\\cdot\\frac bc\\cdot\\frac ca=1 .$$\n\nПо неравенству о среднем для трёх чисел $$\\frac{x+y+z}{3}\\ge\\sqrt[3]{xyz}=1\\quad\\Longrightarrow\\quad x+y+z\\ge3 . \\qquad\\blacksquare$$\n\n**Равенство** — при $x=y=z=1$, то есть при $a=b=c$.\n\n**Проверка** при $a=1$, $b=2$, $c=4$: $$\\frac12+\\frac12+4=5\\ge3 \\quad\\checkmark$$",
    "en": "Put $$x=\\frac ab,\\qquad y=\\frac bc,\\qquad z=\\frac ca .$$ All three are positive and their product is $$xyz=\\frac ab\\cdot\\frac bc\\cdot\\frac ca=1 .$$\n\nBy AM–GM for three numbers $$\\frac{x+y+z}{3}\\ge\\sqrt[3]{xyz}=1\\quad\\Longrightarrow\\quad x+y+z\\ge3 . \\qquad\\blacksquare$$\n\n**Equality** at $x=y=z=1$, i.e. $a=b=c$.\n\n**Check** at $a=1$, $b=2$, $c=4$: $$\\frac12+\\frac12+4=5\\ge3 \\quad\\checkmark$$"
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $(a+b+c)^{2}\\ge3(ab+bc+ca)$ для любых действительных $a,b,c$.",
    "en": "Prove that $(a+b+c)^{2}\\ge3(ab+bc+ca)$ for all real $a,b,c$."
   },
   "hint": {
    "ru": "Раскройте квадрат и вспомните $a^{2}+b^{2}+c^{2}\\ge ab+bc+ca$.",
    "en": "Expand the square and recall $a^{2}+b^{2}+c^{2}\\ge ab+bc+ca$."
   },
   "sol": {
    "ru": "Раскроем квадрат суммы: $$(a+b+c)^{2}=a^{2}+b^{2}+c^{2}+2(ab+bc+ca).$$\n\nЗначит неравенство равносильно $$a^{2}+b^{2}+c^{2}+2(ab+bc+ca)\\ge3(ab+bc+ca)\\quad\\Longleftrightarrow\\quad a^{2}+b^{2}+c^{2}\\ge ab+bc+ca .$$\n\nПоследнее — известное неравенство: его левая минус правая часть равна $$\\tfrac12\\left[(a-b)^{2}+(b-c)^{2}+(c-a)^{2}\\right]\\ \\ge\\ 0 . \\qquad\\blacksquare$$\n\n**Равенство** — при $a=b=c$.\n\n**Полезное следствие.** Если $a+b+c=3$, то $ab+bc+ca\\le3$.",
    "en": "Expand the square of the sum: $$(a+b+c)^{2}=a^{2}+b^{2}+c^{2}+2(ab+bc+ca).$$\n\nSo the inequality is equivalent to $$a^{2}+b^{2}+c^{2}+2(ab+bc+ca)\\ge3(ab+bc+ca)\\quad\\Longleftrightarrow\\quad a^{2}+b^{2}+c^{2}\\ge ab+bc+ca .$$\n\nThe latter is standard: left minus right equals $$\\tfrac12\\left[(a-b)^{2}+(b-c)^{2}+(c-a)^{2}\\right]\\ \\ge\\ 0 . \\qquad\\blacksquare$$\n\n**Equality** at $a=b=c$.\n\n**Useful consequence.** If $a+b+c=3$ then $ab+bc+ca\\le3$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $a^{2}+b^{2}+1\\ge ab+a+b$ для любых действительных $a,b$.",
    "en": "Prove that $a^{2}+b^{2}+1\\ge ab+a+b$ for all real $a,b$."
   },
   "hint": {
    "ru": "Домножьте обе части на $2$.",
    "en": "Multiply both sides by $2$."
   },
   "sol": {
    "ru": "Домножим на $2$ и перенесём всё влево: $$2a^{2}+2b^{2}+2-2ab-2a-2b .$$\n\nСгруппируем в три квадрата: $$\\left(a^{2}-2ab+b^{2}\\right)+\\left(a^{2}-2a+1\\right)+\\left(b^{2}-2b+1\\right)=(a-b)^{2}+(a-1)^{2}+(b-1)^{2} .$$\n\nЭто сумма квадратов, значит она неотрицательна, а с ней и исходная разность. $\\blacksquare$\n\n**Равенство** — когда все три квадрата нулевые, то есть $a=b=1$.\n\n**Проверка** при $a=2$, $b=0$: слева $4+0+1=5$, справа $0+2+0=2$ ✓",
    "en": "Multiply by $2$ and move everything to the left: $$2a^{2}+2b^{2}+2-2ab-2a-2b .$$\n\nGroup into three squares: $$\\left(a^{2}-2ab+b^{2}\\right)+\\left(a^{2}-2a+1\\right)+\\left(b^{2}-2b+1\\right)=(a-b)^{2}+(a-1)^{2}+(b-1)^{2} .$$\n\nThis is a sum of squares, hence non-negative, and so is the original difference. $\\blacksquare$\n\n**Equality** when all three squares vanish, i.e. $a=b=1$.\n\n**Check** at $a=2$, $b=0$: the left side is $4+0+1=5$, the right $0+2+0=2$ ✓"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите наибольшее значение выражения $x(10-x)$ при действительном $x$.",
    "en": "Find the largest value of $x(10-x)$ over the reals."
   },
   "hint": {
    "ru": "Выделите полный квадрат или примените неравенство о среднем.",
    "en": "Complete the square, or apply AM–GM."
   },
   "sol": {
    "ru": "**Способ 1 (полный квадрат).** $$x(10-x)=10x-x^{2}=25-\\left(x^{2}-10x+25\\right)=25-(x-5)^{2}\\le25 ,$$ причём равенство достигается при $x=5$.\n\n**Способ 2 (среднее).** Если $0<x<10$, оба множителя положительны, а их сумма постоянна: $$x+(10-x)=10 .$$ По неравенству о среднем $$\\sqrt{x(10-x)}\\le\\frac{x+(10-x)}{2}=5\\quad\\Longrightarrow\\quad x(10-x)\\le25 .$$ Вне отрезка $[0,10]$ произведение отрицательно, так что максимум там не достигается.\n\n**Ответ:** $25$ (при $x=5$).",
    "en": "**Method 1 (completing the square).** $$x(10-x)=10x-x^{2}=25-\\left(x^{2}-10x+25\\right)=25-(x-5)^{2}\\le25 ,$$ with equality at $x=5$.\n\n**Method 2 (AM–GM).** For $0<x<10$ both factors are positive and their sum is constant: $$x+(10-x)=10 .$$ AM–GM gives $$\\sqrt{x(10-x)}\\le\\frac{x+(10-x)}{2}=5\\quad\\Longrightarrow\\quad x(10-x)\\le25 .$$ Outside $[0,10]$ the product is negative, so the maximum is not there.\n\n**Answer:** $25$, attained at $x=5$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $x+\\dfrac4x\\ge4$ при $x>0$, и найдите, когда достигается равенство.",
    "en": "Prove that $x+\\dfrac4x\\ge4$ for $x>0$, and find when equality holds."
   },
   "hint": {
    "ru": "Среднее арифметическое и среднее геометрическое двух слагаемых.",
    "en": "AM–GM on the two terms."
   },
   "sol": {
    "ru": "Оба слагаемых положительны, а их произведение постоянно: $$x\\cdot\\frac4x=4 .$$\n\nПо неравенству о среднем $$\\frac{x+\\frac4x}{2}\\ \\ge\\ \\sqrt{x\\cdot\\frac4x}=2\\quad\\Longrightarrow\\quad x+\\frac4x\\ge4 . \\qquad\\blacksquare$$\n\n**Равенство** — при $x=\\dfrac4x$, то есть $x^{2}=4$ и (с учётом $x>0$) $x=2$.\n\n**Проверка:** при $x=2$ сумма равна $2+2=4$ ✓ При $x=1$: $1+4=5>4$ ✓\n\n**Другой путь.** $$x+\\frac4x-4=\\frac{x^{2}-4x+4}{x}=\\frac{(x-2)^{2}}{x}\\ \\ge\\ 0\\quad\\text{при }x>0 .$$",
    "en": "Both terms are positive and their product is constant: $$x\\cdot\\frac4x=4 .$$\n\nAM–GM gives $$\\frac{x+\\frac4x}{2}\\ \\ge\\ \\sqrt{x\\cdot\\frac4x}=2\\quad\\Longrightarrow\\quad x+\\frac4x\\ge4 . \\qquad\\blacksquare$$\n\n**Equality** when $x=\\dfrac4x$, i.e. $x^{2}=4$, and since $x>0$, $x=2$.\n\n**Check:** at $x=2$ the sum is $2+2=4$ ✓ At $x=1$: $1+4=5>4$ ✓\n\n**Another route.** $$x+\\frac4x-4=\\frac{x^{2}-4x+4}{x}=\\frac{(x-2)^{2}}{x}\\ \\ge\\ 0\\quad\\text{for }x>0 .$$"
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $(1+a)(1+b)\\ge\\left(1+\\sqrt{ab}\\right)^{2}$ при $a,b\\ge0$.",
    "en": "Prove that $(1+a)(1+b)\\ge\\left(1+\\sqrt{ab}\\right)^{2}$ for $a,b\\ge0$."
   },
   "hint": {
    "ru": "Раскройте обе части.",
    "en": "Expand both sides."
   },
   "sol": {
    "ru": "Раскроем обе части: $$(1+a)(1+b)=1+a+b+ab ,$$ $$\\left(1+\\sqrt{ab}\\right)^{2}=1+2\\sqrt{ab}+ab .$$\n\nВычитая, видим, что неравенство равносильно $$a+b\\ \\ge\\ 2\\sqrt{ab} ,$$ а это в точности неравенство о среднем для $a$ и $b$ (равносильно $\\left(\\sqrt a-\\sqrt b\\right)^{2}\\ge0$). $\\blacksquare$\n\n**Равенство** — при $a=b$.\n\n**Проверка** при $a=1$, $b=4$: слева $2\\cdot5=10$, справа $(1+2)^{2}=9$ ✓",
    "en": "Expand both sides: $$(1+a)(1+b)=1+a+b+ab ,$$ $$\\left(1+\\sqrt{ab}\\right)^{2}=1+2\\sqrt{ab}+ab .$$\n\nSubtracting, the inequality is equivalent to $$a+b\\ \\ge\\ 2\\sqrt{ab} ,$$ which is exactly AM–GM for $a$ and $b$ (equivalent to $\\left(\\sqrt a-\\sqrt b\\right)^{2}\\ge0$). $\\blacksquare$\n\n**Equality** at $a=b$.\n\n**Check** at $a=1$, $b=4$: the left side is $2\\cdot5=10$, the right $(1+2)^{2}=9$ ✓"
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $a^{4}+b^{4}\\ge a^{3}b+ab^{3}$ для любых действительных $a,b$.",
    "en": "Prove that $a^{4}+b^{4}\\ge a^{3}b+ab^{3}$ for all real $a,b$."
   },
   "hint": {
    "ru": "Сгруппируйте так, чтобы вынести $a-b$.",
    "en": "Group so that $a-b$ comes out."
   },
   "sol": {
    "ru": "Перенесём всё влево и сгруппируем: $$a^{4}+b^{4}-a^{3}b-ab^{3}=a^{3}(a-b)-b^{3}(a-b)=(a-b)\\left(a^{3}-b^{3}\\right).$$\n\nРазложим разность кубов: $$(a-b)\\left(a^{3}-b^{3}\\right)=(a-b)^{2}\\left(a^{2}+ab+b^{2}\\right).$$\n\nПервый множитель — квадрат, значит неотрицателен. Второй тоже: $$a^{2}+ab+b^{2}=\\left(a+\\frac b2\\right)^{2}+\\frac{3b^{2}}{4}\\ \\ge\\ 0 .$$\n\nПроизведение двух неотрицательных чисел неотрицательно. $\\blacksquare$\n\n**Равенство** — при $a=b$ (или при $a=b=0$).\n\n**Проверка** при $a=2$, $b=1$: слева $16+1=17$, справа $8+2=10$ ✓",
    "en": "Move everything to the left and group: $$a^{4}+b^{4}-a^{3}b-ab^{3}=a^{3}(a-b)-b^{3}(a-b)=(a-b)\\left(a^{3}-b^{3}\\right).$$\n\nFactor the difference of cubes: $$(a-b)\\left(a^{3}-b^{3}\\right)=(a-b)^{2}\\left(a^{2}+ab+b^{2}\\right).$$\n\nThe first factor is a square, hence non-negative. So is the second: $$a^{2}+ab+b^{2}=\\left(a+\\frac b2\\right)^{2}+\\frac{3b^{2}}{4}\\ \\ge\\ 0 .$$\n\nA product of two non-negative numbers is non-negative. $\\blacksquare$\n\n**Equality** at $a=b$ (or $a=b=0$).\n\n**Check** at $a=2$, $b=1$: the left side is $16+1=17$, the right $8+2=10$ ✓"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Положительные числа $a,b,c$ удовлетворяют $a+b+c=3$. Докажите, что $ab+bc+ca\\le3$.",
    "en": "Positive numbers $a,b,c$ satisfy $a+b+c=3$. Prove that $ab+bc+ca\\le3$."
   },
   "hint": {
    "ru": "Воспользуйтесь неравенством $(a+b+c)^{2}\\ge3(ab+bc+ca)$.",
    "en": "Use $(a+b+c)^{2}\\ge3(ab+bc+ca)$."
   },
   "sol": {
    "ru": "Из неравенства $$(a+b+c)^{2}\\ \\ge\\ 3(ab+bc+ca)$$ (оно равносильно $a^{2}+b^{2}+c^{2}\\ge ab+bc+ca$) подставим условие $a+b+c=3$: $$9\\ \\ge\\ 3(ab+bc+ca)\\quad\\Longrightarrow\\quad ab+bc+ca\\ \\le\\ 3 . \\qquad\\blacksquare$$\n\n**Равенство** — при $a=b=c=1$: тогда $ab+bc+ca=3$ ✓\n\n**Проверка** на другой тройке: $a=2$, $b=0{,}5$, $c=0{,}5$ даёт $$1+0{,}25+1=2{,}25\\le3 \\quad\\checkmark$$",
    "en": "From the inequality $$(a+b+c)^{2}\\ \\ge\\ 3(ab+bc+ca)$$ (equivalent to $a^{2}+b^{2}+c^{2}\\ge ab+bc+ca$), substitute $a+b+c=3$: $$9\\ \\ge\\ 3(ab+bc+ca)\\quad\\Longrightarrow\\quad ab+bc+ca\\ \\le\\ 3 . \\qquad\\blacksquare$$\n\n**Equality** at $a=b=c=1$, where $ab+bc+ca=3$ ✓\n\n**Check** on another triple: $a=2$, $b=0.5$, $c=0.5$ gives $$1+0.25+1=2.25\\le3 \\quad\\checkmark$$"
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $(a+b)(b+c)(c+a)\\ge8abc$ для положительных $a,b,c$.",
    "en": "Prove that $(a+b)(b+c)(c+a)\\ge8abc$ for positive $a,b,c$."
   },
   "hint": {
    "ru": "Оцените каждую скобку по отдельности.",
    "en": "Estimate each bracket separately."
   },
   "sol": {
    "ru": "Применим неравенство о среднем к каждой скобке: $$a+b\\ \\ge\\ 2\\sqrt{ab},\\qquad b+c\\ \\ge\\ 2\\sqrt{bc},\\qquad c+a\\ \\ge\\ 2\\sqrt{ca} .$$\n\nВсе части положительны, поэтому неравенства можно перемножить: $$(a+b)(b+c)(c+a)\\ \\ge\\ 8\\sqrt{ab}\\cdot\\sqrt{bc}\\cdot\\sqrt{ca}=8\\sqrt{a^{2}b^{2}c^{2}}=8abc . \\qquad\\blacksquare$$\n\n**Равенство** — когда равенство в каждом из трёх мест, то есть $a=b=c$.\n\n**Проверка** при $a=b=c=1$: слева $2\\cdot2\\cdot2=8$, справа $8$ ✓ При $a=2$, $b=c=1$: слева $3\\cdot2\\cdot3=18$, справа $16$ ✓",
    "en": "Apply AM–GM to each bracket: $$a+b\\ \\ge\\ 2\\sqrt{ab},\\qquad b+c\\ \\ge\\ 2\\sqrt{bc},\\qquad c+a\\ \\ge\\ 2\\sqrt{ca} .$$\n\nAll sides are positive, so the inequalities may be multiplied: $$(a+b)(b+c)(c+a)\\ \\ge\\ 8\\sqrt{ab}\\cdot\\sqrt{bc}\\cdot\\sqrt{ca}=8\\sqrt{a^{2}b^{2}c^{2}}=8abc . \\qquad\\blacksquare$$\n\n**Equality** when each of the three is tight, i.e. $a=b=c$.\n\n**Check** at $a=b=c=1$: the left side is $2\\cdot2\\cdot2=8$, the right $8$ ✓ At $a=2$, $b=c=1$: $3\\cdot2\\cdot3=18$ versus $16$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите неравенство Несбитта: для положительных $a,b,c$ $$\\frac{a}{b+c}+\\frac{b}{c+a}+\\frac{c}{a+b}\\ \\ge\\ \\frac32 .$$",
    "en": "Prove Nesbitt’s inequality: for positive $a,b,c$ $$\\frac{a}{b+c}+\\frac{b}{c+a}+\\frac{c}{a+b}\\ \\ge\\ \\frac32 .$$"
   },
   "hint": {
    "ru": "Прибавьте по единице к каждой дроби.",
    "en": "Add one to each fraction."
   },
   "sol": {
    "ru": "Прибавим к каждой дроби единицу: $$\\frac{a}{b+c}+1=\\frac{a+b+c}{b+c} ,$$ и аналогично для двух других. Обозначив $s=a+b+c$, получаем, что доказываемое неравенство равносильно $$s\\left(\\frac1{b+c}+\\frac1{c+a}+\\frac1{a+b}\\right)\\ \\ge\\ \\frac32+3=\\frac92 .$$\n\nЗаметим, что $$(b+c)+(c+a)+(a+b)=2s ,$$ поэтому достаточно доказать $$\\bigl(u+v+w\\bigr)\\left(\\frac1u+\\frac1v+\\frac1w\\right)\\ \\ge\\ 9 ,\\qquad u=b+c,\\ v=c+a,\\ w=a+b ,$$ ведь тогда левая часть будет не меньше $\\dfrac{9}{2s}\\cdot s=\\dfrac92$.\n\n**Доказательство вспомогательного неравенства.** По неравенству о среднем $$u+v+w\\ \\ge\\ 3\\sqrt[3]{uvw},\\qquad \\frac1u+\\frac1v+\\frac1w\\ \\ge\\ \\frac{3}{\\sqrt[3]{uvw}} ,$$ и перемножение даёт $9$ ✓\n\n$\\blacksquare$\n\n**Равенство** — при $u=v=w$, то есть при $a=b=c$; тогда каждая дробь равна $\\tfrac12$.\n\n**Проверка** при $a=2$, $b=c=1$: $$\\frac22+\\frac13+\\frac13=1{,}666\\ldots\\ \\ge\\ 1{,}5 \\quad\\checkmark$$",
    "en": "Add one to each fraction: $$\\frac{a}{b+c}+1=\\frac{a+b+c}{b+c} ,$$ and likewise for the other two. Writing $s=a+b+c$, the inequality to prove becomes $$s\\left(\\frac1{b+c}+\\frac1{c+a}+\\frac1{a+b}\\right)\\ \\ge\\ \\frac32+3=\\frac92 .$$\n\nNote that $$(b+c)+(c+a)+(a+b)=2s ,$$ so it suffices to prove $$\\bigl(u+v+w\\bigr)\\left(\\frac1u+\\frac1v+\\frac1w\\right)\\ \\ge\\ 9 ,\\qquad u=b+c,\\ v=c+a,\\ w=a+b ,$$ since then the left side is at least $\\dfrac{9}{2s}\\cdot s=\\dfrac92$.\n\n**Proof of the auxiliary inequality.** By AM–GM $$u+v+w\\ \\ge\\ 3\\sqrt[3]{uvw},\\qquad \\frac1u+\\frac1v+\\frac1w\\ \\ge\\ \\frac{3}{\\sqrt[3]{uvw}} ,$$ and multiplying gives $9$ ✓\n\n$\\blacksquare$\n\n**Equality** at $u=v=w$, i.e. $a=b=c$, where each fraction equals $\\tfrac12$.\n\n**Check** at $a=2$, $b=c=1$: $$\\frac22+\\frac13+\\frac13=1.666\\ldots\\ \\ge\\ 1.5 \\quad\\checkmark$$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что для положительных $a,b$ среднее геометрическое не меньше среднего гармонического: $$\\sqrt{ab}\\ \\ge\\ \\frac{2ab}{a+b} .$$",
    "en": "Prove that for positive $a,b$ the geometric mean is at least the harmonic mean: $$\\sqrt{ab}\\ \\ge\\ \\frac{2ab}{a+b} .$$"
   },
   "hint": {
    "ru": "Разделите обе части на $\\sqrt{ab}$.",
    "en": "Divide both sides by $\\sqrt{ab}$."
   },
   "sol": {
    "ru": "Обе части положительны, поэтому неравенство равносильно (после умножения на $a+b$ и деления на $\\sqrt{ab}$) $$a+b\\ \\ge\\ 2\\sqrt{ab} ,$$ то есть неравенству о среднем арифметическом и геометрическом, которое равносильно $\\left(\\sqrt a-\\sqrt b\\right)^{2}\\ge0$. $\\blacksquare$\n\n**Равенство** — при $a=b$.\n\n**Полная цепочка средних.** Для положительных $a,b$ $$\\frac{2ab}{a+b}\\ \\le\\ \\sqrt{ab}\\ \\le\\ \\frac{a+b}{2}\\ \\le\\ \\sqrt{\\frac{a^{2}+b^{2}}{2}} ,$$ и всюду равенство только при $a=b$.\n\n**Проверка** при $a=1$, $b=4$: $$\\frac{2\\cdot4}{5}=1{,}6\\ \\le\\ 2\\ \\le\\ 2{,}5 \\quad\\checkmark$$",
    "en": "Both sides are positive, so (multiplying by $a+b$ and dividing by $\\sqrt{ab}$) the inequality is equivalent to $$a+b\\ \\ge\\ 2\\sqrt{ab} ,$$ i.e. to AM–GM, which in turn is $\\left(\\sqrt a-\\sqrt b\\right)^{2}\\ge0$. $\\blacksquare$\n\n**Equality** at $a=b$.\n\n**The full chain of means.** For positive $a,b$ $$\\frac{2ab}{a+b}\\ \\le\\ \\sqrt{ab}\\ \\le\\ \\frac{a+b}{2}\\ \\le\\ \\sqrt{\\frac{a^{2}+b^{2}}{2}} ,$$ with equality everywhere only at $a=b$.\n\n**Check** at $a=1$, $b=4$: $$\\frac{2\\cdot4}{5}=1.6\\ \\le\\ 2\\ \\le\\ 2.5 \\quad\\checkmark$$"
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что $(a+b+c)\\left(a^{2}+b^{2}+c^{2}\\right)\\ge9abc$ для положительных $a,b,c$.",
    "en": "Prove that $(a+b+c)\\left(a^{2}+b^{2}+c^{2}\\right)\\ge9abc$ for positive $a,b,c$."
   },
   "hint": {
    "ru": "Оцените каждую скобку неравенством о среднем.",
    "en": "Bound each bracket by AM–GM."
   },
   "sol": {
    "ru": "Применим неравенство о среднем к каждой скобке отдельно: $$a+b+c\\ \\ge\\ 3\\sqrt[3]{abc} ,$$ $$a^{2}+b^{2}+c^{2}\\ \\ge\\ 3\\sqrt[3]{a^{2}b^{2}c^{2}} .$$\n\nОбе части положительны, значит неравенства можно перемножить: $$(a+b+c)\\left(a^{2}+b^{2}+c^{2}\\right)\\ \\ge\\ 9\\sqrt[3]{abc}\\cdot\\sqrt[3]{a^{2}b^{2}c^{2}}=9\\sqrt[3]{a^{3}b^{3}c^{3}}=9abc . \\qquad\\blacksquare$$\n\n**Равенство** — при $a=b=c$.\n\n**Проверка** при $a=b=c=1$: слева $3\\cdot3=9$, справа $9$ ✓ При $a=2$, $b=c=1$: слева $4\\cdot6=24$, справа $18$ ✓",
    "en": "Apply AM–GM to each bracket separately: $$a+b+c\\ \\ge\\ 3\\sqrt[3]{abc} ,$$ $$a^{2}+b^{2}+c^{2}\\ \\ge\\ 3\\sqrt[3]{a^{2}b^{2}c^{2}} .$$\n\nBoth sides are positive, so the inequalities may be multiplied: $$(a+b+c)\\left(a^{2}+b^{2}+c^{2}\\right)\\ \\ge\\ 9\\sqrt[3]{abc}\\cdot\\sqrt[3]{a^{2}b^{2}c^{2}}=9\\sqrt[3]{a^{3}b^{3}c^{3}}=9abc . \\qquad\\blacksquare$$\n\n**Equality** at $a=b=c$.\n\n**Check** at $a=b=c=1$: the left side is $3\\cdot3=9$, the right $9$ ✓ At $a=2$, $b=c=1$: $4\\cdot6=24$ versus $18$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Пусть $a,b,c$ — стороны треугольника. Докажите, что $$(a+b-c)(b+c-a)(c+a-b)\\ \\le\\ abc .$$",
    "en": "Let $a,b,c$ be the sides of a triangle. Prove that $$(a+b-c)(b+c-a)(c+a-b)\\ \\le\\ abc .$$"
   },
   "hint": {
    "ru": "Обозначьте $x=b+c-a$, $y=c+a-b$, $z=a+b-c$ и выразите $a,b,c$ через них.",
    "en": "Put $x=b+c-a$, $y=c+a-b$, $z=a+b-c$ and express $a,b,c$ through them."
   },
   "sol": {
    "ru": "**Замена Равви.** Положим $$x=b+c-a,\\qquad y=c+a-b,\\qquad z=a+b-c .$$ По неравенству треугольника все три числа положительны, и обратная замена даёт $$a=\\frac{y+z}{2},\\qquad b=\\frac{z+x}{2},\\qquad c=\\frac{x+y}{2} .$$\n\nДоказываемое неравенство превращается в $$xyz\\ \\le\\ \\frac{(y+z)(z+x)(x+y)}{8} ,$$ то есть в $$(x+y)(y+z)(z+x)\\ \\ge\\ 8xyz ,$$ а это уже знакомое неравенство: по среднему $$x+y\\ge2\\sqrt{xy},\\quad y+z\\ge2\\sqrt{yz},\\quad z+x\\ge2\\sqrt{zx} ,$$ и перемножение даёт $8xyz$ ✓\n\n$\\blacksquare$\n\n**Равенство** — при $x=y=z$, то есть у равностороннего треугольника.\n\n**Проверка** для треугольника $3,4,5$: слева $(3+4-5)(4+5-3)(5+3-4)=2\\cdot6\\cdot4=48$, справа $60$ ✓",
    "en": "**Ravi substitution.** Put $$x=b+c-a,\\qquad y=c+a-b,\\qquad z=a+b-c .$$ The triangle inequality makes all three positive, and inverting, $$a=\\frac{y+z}{2},\\qquad b=\\frac{z+x}{2},\\qquad c=\\frac{x+y}{2} .$$\n\nThe inequality becomes $$xyz\\ \\le\\ \\frac{(y+z)(z+x)(x+y)}{8} ,$$ i.e. $$(x+y)(y+z)(z+x)\\ \\ge\\ 8xyz ,$$ which is familiar: AM–GM gives $$x+y\\ge2\\sqrt{xy},\\quad y+z\\ge2\\sqrt{yz},\\quad z+x\\ge2\\sqrt{zx} ,$$ and multiplying yields $8xyz$ ✓\n\n$\\blacksquare$\n\n**Equality** at $x=y=z$, i.e. for an equilateral triangle.\n\n**Check** for the $3,4,5$ triangle: the left side is $(3+4-5)(4+5-3)(5+3-4)=2\\cdot6\\cdot4=48$, the right $60$ ✓"
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Найдите наименьшее значение выражения $\\dfrac{x^{2}+2}{\\sqrt{x^{2}+1}}$ при действительном $x$.",
    "en": "Find the smallest value of $\\dfrac{x^{2}+2}{\\sqrt{x^{2}+1}}$ over the reals."
   },
   "hint": {
    "ru": "Обозначьте $t=\\sqrt{x^{2}+1}$.",
    "en": "Put $t=\\sqrt{x^{2}+1}$."
   },
   "sol": {
    "ru": "Обозначим $$t=\\sqrt{x^{2}+1}\\ \\ge\\ 1 ,$$ тогда $x^{2}=t^{2}-1$ и выражение принимает вид $$\\frac{t^{2}-1+2}{t}=\\frac{t^{2}+1}{t}=t+\\frac1t .$$\n\nПо неравенству о среднем при $t>0$ $$t+\\frac1t\\ \\ge\\ 2 ,$$ причём равенство достигается при $t=1$ — а это допустимое значение, ведь $t=1$ отвечает $x=0$.\n\n**Ответ:** наименьшее значение равно $2$ (при $x=0$).\n\n**Проверка:** при $x=0$ выражение равно $\\tfrac21=2$ ✓ При $x=1$: $\\tfrac{3}{\\sqrt2}\\approx2{,}12>2$ ✓",
    "en": "Put $$t=\\sqrt{x^{2}+1}\\ \\ge\\ 1 ,$$ so that $x^{2}=t^{2}-1$ and the expression becomes $$\\frac{t^{2}-1+2}{t}=\\frac{t^{2}+1}{t}=t+\\frac1t .$$\n\nBy AM–GM, for $t>0$, $$t+\\frac1t\\ \\ge\\ 2 ,$$ with equality at $t=1$ — an admissible value, since $t=1$ corresponds to $x=0$.\n\n**Answer:** the smallest value is $2$, attained at $x=0$.\n\n**Check:** at $x=0$ the expression equals $\\tfrac21=2$ ✓ At $x=1$: $\\tfrac{3}{\\sqrt2}\\approx2.12>2$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что $2^{n}>n^{2}$ при всех целых $n\\ge5$.",
    "en": "Prove that $2^{n}>n^{2}$ for every integer $n\\ge5$."
   },
   "hint": {
    "ru": "Индукция; в переходе оцените $(n+1)^{2}$ через $2n^{2}$.",
    "en": "Induct; in the step bound $(n+1)^{2}$ by $2n^{2}$."
   },
   "sol": {
    "ru": "**База $n=5$.** $2^{5}=32>25=5^{2}$ ✓\n\n**Переход.** Пусть $2^{n}>n^{2}$ для некоторого $n\\ge5$. Тогда $$2^{n+1}=2\\cdot2^{n}>2n^{2} .$$ Осталось проверить, что $$2n^{2}\\ \\ge\\ (n+1)^{2}\\quad\\Longleftrightarrow\\quad 2n^{2}-n^{2}-2n-1\\ge0\\quad\\Longleftrightarrow\\quad n^{2}-2n-1\\ge0 .$$\n\nПоследнее верно при $n\\ge3$, ведь $$n^{2}-2n-1=(n-1)^{2}-2\\ \\ge\\ 4^{2}-2=14>0\\quad\\text{при }n\\ge5 .$$\n\nЗначит $2^{n+1}>(n+1)^{2}$, и по индукции неравенство верно при всех $n\\ge5$. $\\blacksquare$\n\n**Почему нужен старт с пятёрки.** При $n=2$: $4=4$; при $n=3$: $8<9$; при $n=4$: $16=16$ — неравенство ещё не выполняется.",
    "en": "**Base $n=5$.** $2^{5}=32>25=5^{2}$ ✓\n\n**Step.** Suppose $2^{n}>n^{2}$ for some $n\\ge5$. Then $$2^{n+1}=2\\cdot2^{n}>2n^{2} .$$ It remains to check that $$2n^{2}\\ \\ge\\ (n+1)^{2}\\quad\\Longleftrightarrow\\quad 2n^{2}-n^{2}-2n-1\\ge0\\quad\\Longleftrightarrow\\quad n^{2}-2n-1\\ge0 .$$\n\nThis holds for $n\\ge3$, since $$n^{2}-2n-1=(n-1)^{2}-2\\ \\ge\\ 4^{2}-2=14>0\\quad\\text{for }n\\ge5 .$$\n\nSo $2^{n+1}>(n+1)^{2}$, and by induction the inequality holds for all $n\\ge5$. $\\blacksquare$\n\n**Why the start at five.** At $n=2$: $4=4$; at $n=3$: $8<9$; at $n=4$: $16=16$ — the inequality is not yet true."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что среди всех треугольников с данным периметром наибольшую площадь имеет равносторонний.",
    "en": "Prove that among all triangles with a given perimeter the equilateral one has the largest area."
   },
   "hint": {
    "ru": "Формула Герона плюс неравенство о среднем для трёх чисел.",
    "en": "Heron’s formula plus AM–GM for three numbers."
   },
   "sol": {
    "ru": "Пусть периметр равен $2p$, стороны — $a,b,c$, полупериметр — $p$. По формуле Герона $$S=\\sqrt{p(p-a)(p-b)(p-c)} .$$\n\nЧисла $p-a$, $p-b$, $p-c$ положительны (неравенство треугольника), и их сумма постоянна: $$(p-a)+(p-b)+(p-c)=3p-2p=p .$$\n\nПо неравенству о среднем для трёх чисел с фиксированной суммой произведение наибольшее, когда они равны: $$(p-a)(p-b)(p-c)\\ \\le\\ \\left(\\frac{p}{3}\\right)^{3}=\\frac{p^{3}}{27} .$$\n\nЗначит $$S\\ \\le\\ \\sqrt{p\\cdot\\frac{p^{3}}{27}}=\\frac{p^{2}}{3\\sqrt3} ,$$ и равенство достигается ровно при $$p-a=p-b=p-c\\quad\\Longleftrightarrow\\quad a=b=c=\\frac{2p}{3} . \\qquad\\blacksquare$$\n\n**Проверка.** При периметре $12$ равносторонний треугольник со стороной $4$ даёт $$S=\\frac{\\sqrt3}{4}\\cdot16=4\\sqrt3\\approx6{,}93 ,$$ а треугольник $3,4,5$ того же периметра — всего $6$ ✓",
    "en": "Let the perimeter be $2p$, the sides $a,b,c$, and the semiperimeter $p$. Heron’s formula gives $$S=\\sqrt{p(p-a)(p-b)(p-c)} .$$\n\nThe numbers $p-a$, $p-b$, $p-c$ are positive (triangle inequality) and their sum is fixed: $$(p-a)+(p-b)+(p-c)=3p-2p=p .$$\n\nBy AM–GM, three numbers with a fixed sum have the largest product when they are equal: $$(p-a)(p-b)(p-c)\\ \\le\\ \\left(\\frac{p}{3}\\right)^{3}=\\frac{p^{3}}{27} .$$\n\nHence $$S\\ \\le\\ \\sqrt{p\\cdot\\frac{p^{3}}{27}}=\\frac{p^{2}}{3\\sqrt3} ,$$ with equality exactly when $$p-a=p-b=p-c\\quad\\Longleftrightarrow\\quad a=b=c=\\frac{2p}{3} . \\qquad\\blacksquare$$\n\n**Check.** With perimeter $12$ the equilateral triangle of side $4$ gives $$S=\\frac{\\sqrt3}{4}\\cdot16=4\\sqrt3\\approx6.93 ,$$ while the $3,4,5$ triangle of the same perimeter gives only $6$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что $\\left(1+\\dfrac1n\\right)^{n}<3$ при любом натуральном $n$.",
    "en": "Prove that $\\left(1+\\dfrac1n\\right)^{n}<3$ for every positive integer $n$."
   },
   "hint": {
    "ru": "Раскройте по биному и оцените каждое слагаемое сверху дробью $\\dfrac1{2^{k-1}}$.",
    "en": "Expand by the binomial theorem and bound each term above by $\\dfrac1{2^{k-1}}$."
   },
   "sol": {
    "ru": "Раскроем по формуле бинома: $$\\left(1+\\frac1n\\right)^{n}=\\sum_{k=0}^{n}\\binom nk\\frac1{n^{k}} .$$\n\n**Оценим слагаемое с номером $k\\ge1$.** $$\\binom nk\\frac1{n^{k}}=\\frac{n(n-1)\\cdots(n-k+1)}{k!\\,n^{k}}\\ \\le\\ \\frac{n^{k}}{k!\\,n^{k}}=\\frac1{k!} ,$$ ведь в числителе каждый из $k$ множителей не больше $n$.\n\n**Оценим факториал.** При $k\\ge1$ $$k!=1\\cdot2\\cdot3\\cdots k\\ \\ge\\ 1\\cdot2\\cdot2\\cdots2=2^{\\,k-1} ,$$ значит $\\dfrac1{k!}\\le\\dfrac1{2^{\\,k-1}}$.\n\n**Складываем.** $$\\left(1+\\frac1n\\right)^{n}\\ \\le\\ 1+\\sum_{k=1}^{n}\\frac1{2^{\\,k-1}}=1+\\left(1+\\frac12+\\frac14+\\dots+\\frac1{2^{\\,n-1}}\\right)<1+2=3 ,$$ потому что сумма геометрической прогрессии со знаменателем $\\tfrac12$ строго меньше $2$. $\\blacksquare$\n\n**Проверка:** $n=1$ даёт $2$; $n=2$ даёт $2{,}25$; $n=10$ даёт примерно $2{,}594$ — всё меньше трёх ✓\n\n**Замечание.** С ростом $n$ эта последовательность возрастает и стремится к числу $e\\approx2{,}71828$.",
    "en": "Expand by the binomial theorem: $$\\left(1+\\frac1n\\right)^{n}=\\sum_{k=0}^{n}\\binom nk\\frac1{n^{k}} .$$\n\n**Bound the term of index $k\\ge1$.** $$\\binom nk\\frac1{n^{k}}=\\frac{n(n-1)\\cdots(n-k+1)}{k!\\,n^{k}}\\ \\le\\ \\frac{n^{k}}{k!\\,n^{k}}=\\frac1{k!} ,$$ since each of the $k$ factors in the numerator is at most $n$.\n\n**Bound the factorial.** For $k\\ge1$ $$k!=1\\cdot2\\cdot3\\cdots k\\ \\ge\\ 1\\cdot2\\cdot2\\cdots2=2^{\\,k-1} ,$$ so $\\dfrac1{k!}\\le\\dfrac1{2^{\\,k-1}}$.\n\n**Add up.** $$\\left(1+\\frac1n\\right)^{n}\\ \\le\\ 1+\\sum_{k=1}^{n}\\frac1{2^{\\,k-1}}=1+\\left(1+\\frac12+\\frac14+\\dots+\\frac1{2^{\\,n-1}}\\right)<1+2=3 ,$$ because the geometric sum with ratio $\\tfrac12$ is strictly below $2$. $\\blacksquare$\n\n**Check:** $n=1$ gives $2$; $n=2$ gives $2.25$; $n=10$ gives about $2.594$ — all below three ✓\n\n**Remark.** As $n$ grows this sequence increases and tends to $e\\approx2.71828$."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что $a^{3}+b^{3}+c^{3}\\ge a^{2}b+b^{2}c+c^{2}a$ для положительных $a,b,c$.",
    "en": "Prove that $a^{3}+b^{3}+c^{3}\\ge a^{2}b+b^{2}c+c^{2}a$ for positive $a,b,c$."
   },
   "hint": {
    "ru": "Примените среднее к тройке $a^{3},a^{3},b^{3}$.",
    "en": "Apply AM–GM to the triple $a^{3},a^{3},b^{3}$."
   },
   "sol": {
    "ru": "По неравенству о среднем для трёх чисел $$\\frac{a^{3}+a^{3}+b^{3}}{3}\\ \\ge\\ \\sqrt[3]{a^{3}\\cdot a^{3}\\cdot b^{3}}=a^{2}b ,$$ то есть $$2a^{3}+b^{3}\\ \\ge\\ 3a^{2}b .$$\n\nАналогично $$2b^{3}+c^{3}\\ \\ge\\ 3b^{2}c,\\qquad 2c^{3}+a^{3}\\ \\ge\\ 3c^{2}a .$$\n\nСложим все три неравенства. Слева получим $$\\left(2a^{3}+a^{3}\\right)+\\left(2b^{3}+b^{3}\\right)+\\left(2c^{3}+c^{3}\\right)=3\\left(a^{3}+b^{3}+c^{3}\\right),$$ справа — $3\\left(a^{2}b+b^{2}c+c^{2}a\\right)$. Деля на $3$, получаем требуемое. $\\blacksquare$\n\n**Равенство** — при $a=b=c$.\n\n**Проверка** при $a=2$, $b=1$, $c=1$: слева $8+1+1=10$, справа $4+1+2=7$ ✓",
    "en": "By AM–GM for three numbers $$\\frac{a^{3}+a^{3}+b^{3}}{3}\\ \\ge\\ \\sqrt[3]{a^{3}\\cdot a^{3}\\cdot b^{3}}=a^{2}b ,$$ that is $$2a^{3}+b^{3}\\ \\ge\\ 3a^{2}b .$$\n\nSimilarly $$2b^{3}+c^{3}\\ \\ge\\ 3b^{2}c,\\qquad 2c^{3}+a^{3}\\ \\ge\\ 3c^{2}a .$$\n\nAdd the three. On the left we get $$\\left(2a^{3}+a^{3}\\right)+\\left(2b^{3}+b^{3}\\right)+\\left(2c^{3}+c^{3}\\right)=3\\left(a^{3}+b^{3}+c^{3}\\right),$$ on the right $3\\left(a^{2}b+b^{2}c+c^{2}a\\right)$. Dividing by $3$ gives the claim. $\\blacksquare$\n\n**Equality** at $a=b=c$.\n\n**Check** at $a=2$, $b=1$, $c=1$: the left side is $8+1+1=10$, the right $4+1+2=7$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите неравенство о среднем арифметическом и геометрическом для любого числа слагаемых: $$\\frac{a_1+a_2+\\dots+a_n}{n}\\ \\ge\\ \\sqrt[n]{a_1a_2\\cdots a_n}\\qquad (a_i\\ge0).$$",
    "en": "Prove the AM–GM inequality for any number of terms: $$\\frac{a_1+a_2+\\dots+a_n}{n}\\ \\ge\\ \\sqrt[n]{a_1a_2\\cdots a_n}\\qquad (a_i\\ge0).$$"
   },
   "hint": {
    "ru": "Индукция Коши: сначала для степеней двойки (удвоение), потом «вниз» от $n$ к $n-1$.",
    "en": "Cauchy induction: first for powers of two (doubling), then downward from $n$ to $n-1$."
   },
   "sol": {
    "ru": "**Шаг 1: случай $n=2$.** Это $\\left(\\sqrt{a_1}-\\sqrt{a_2}\\right)^{2}\\ge0$ ✓\n\n**Шаг 2: удвоение.** Пусть неравенство верно для $n$ чисел; докажем для $2n$. Разобьём числа на две половины и обозначим их средние арифметические $A$ и $B$, а средние геометрические — $G$ и $H$. По предположению $A\\ge G$ и $B\\ge H$, а по случаю $n=2$ $$\\frac{A+B}{2}\\ \\ge\\ \\sqrt{AB}\\ \\ge\\ \\sqrt{GH} .$$ Слева стоит среднее арифметическое всех $2n$ чисел, справа — их среднее геометрическое, ведь $$\\sqrt{GH}=\\sqrt{\\sqrt[n]{a_1\\cdots a_n}\\cdot\\sqrt[n]{a_{n+1}\\cdots a_{2n}}}=\\sqrt[2n]{a_1\\cdots a_{2n}} . \\qquad\\checkmark$$\n\nЗначит неравенство верно при всех $n=2^{k}$.\n\n**Шаг 3: спуск от $n$ к $n-1$.** Пусть неравенство верно для $n$ чисел, и даны $n-1$ чисел $a_1,\\dots,a_{n-1}$ со средним арифметическим $$A=\\frac{a_1+\\dots+a_{n-1}}{n-1} .$$ Применим предположение к набору из $n$ чисел $a_1,\\dots,a_{n-1},A$: $$\\frac{a_1+\\dots+a_{n-1}+A}{n}\\ \\ge\\ \\sqrt[n]{a_1\\cdots a_{n-1}\\,A} .$$ Слева стоит $$\\frac{(n-1)A+A}{n}=A ,$$ поэтому $$A^{n}\\ \\ge\\ a_1\\cdots a_{n-1}\\,A\\quad\\Longrightarrow\\quad A^{\\,n-1}\\ \\ge\\ a_1\\cdots a_{n-1} ,$$ то есть $A\\ge\\sqrt[n-1]{a_1\\cdots a_{n-1}}$ ✓ (случай $A=0$ тривиален).\n\n**Итог.** Из шага 2 неравенство верно для сколь угодно больших степеней двойки, а шаг 3 позволяет спуститься от любой такой степени к любому меньшему $n$. $\\blacksquare$\n\n**Равенство** — только когда все числа равны.",
    "en": "**Step 1: the case $n=2$.** This is $\\left(\\sqrt{a_1}-\\sqrt{a_2}\\right)^{2}\\ge0$ ✓\n\n**Step 2: doubling.** Suppose the inequality holds for $n$ numbers; prove it for $2n$. Split the numbers into two halves with arithmetic means $A$, $B$ and geometric means $G$, $H$. By hypothesis $A\\ge G$ and $B\\ge H$, and by the case $n=2$ $$\\frac{A+B}{2}\\ \\ge\\ \\sqrt{AB}\\ \\ge\\ \\sqrt{GH} .$$ The left side is the arithmetic mean of all $2n$ numbers, the right their geometric mean, since $$\\sqrt{GH}=\\sqrt{\\sqrt[n]{a_1\\cdots a_n}\\cdot\\sqrt[n]{a_{n+1}\\cdots a_{2n}}}=\\sqrt[2n]{a_1\\cdots a_{2n}} . \\qquad\\checkmark$$\n\nSo the inequality holds for every $n=2^{k}$.\n\n**Step 3: descent from $n$ to $n-1$.** Suppose it holds for $n$ numbers, and take $n-1$ numbers $a_1,\\dots,a_{n-1}$ with arithmetic mean $$A=\\frac{a_1+\\dots+a_{n-1}}{n-1} .$$ Apply the hypothesis to the $n$ numbers $a_1,\\dots,a_{n-1},A$: $$\\frac{a_1+\\dots+a_{n-1}+A}{n}\\ \\ge\\ \\sqrt[n]{a_1\\cdots a_{n-1}\\,A} .$$ The left side equals $$\\frac{(n-1)A+A}{n}=A ,$$ so $$A^{n}\\ \\ge\\ a_1\\cdots a_{n-1}\\,A\\quad\\Longrightarrow\\quad A^{\\,n-1}\\ \\ge\\ a_1\\cdots a_{n-1} ,$$ i.e. $A\\ge\\sqrt[n-1]{a_1\\cdots a_{n-1}}$ ✓ (the case $A=0$ is trivial).\n\n**Conclusion.** Step 2 gives the inequality for arbitrarily large powers of two, and step 3 lets us descend from any such power to any smaller $n$. $\\blacksquare$\n\n**Equality** only when all the numbers are equal."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите неравенство Коши — Буняковского в форме Энгеля («лемма о дробях»): для положительных $b_i$ $$\\frac{a_1^{2}}{b_1}+\\frac{a_2^{2}}{b_2}+\\dots+\\frac{a_n^{2}}{b_n}\\ \\ge\\ \\frac{\\left(a_1+a_2+\\dots+a_n\\right)^{2}}{b_1+b_2+\\dots+b_n} ,$$ и выведите из него неравенство Несбитта.",
    "en": "Prove the Cauchy–Schwarz inequality in Engel form (the \"fraction lemma\"): for positive $b_i$ $$\\frac{a_1^{2}}{b_1}+\\frac{a_2^{2}}{b_2}+\\dots+\\frac{a_n^{2}}{b_n}\\ \\ge\\ \\frac{\\left(a_1+a_2+\\dots+a_n\\right)^{2}}{b_1+b_2+\\dots+b_n} ,$$ and deduce Nesbitt’s inequality from it."
   },
   "hint": {
    "ru": "Сначала случай $n=2$; он равносилен $(a_1b_2-a_2b_1)^{2}\\ge0$.",
    "en": "Start with $n=2$; it is equivalent to $(a_1b_2-a_2b_1)^{2}\\ge0$."
   },
   "sol": {
    "ru": "**Случай $n=2$.** Требуется $$\\frac{a_1^{2}}{b_1}+\\frac{a_2^{2}}{b_2}\\ \\ge\\ \\frac{(a_1+a_2)^{2}}{b_1+b_2} .$$ Умножим на положительное $b_1b_2(b_1+b_2)$ и раскроем: слева $$\\left(a_1^{2}b_2+a_2^{2}b_1\\right)(b_1+b_2),$$ справа $$(a_1+a_2)^{2}b_1b_2 .$$ Разность равна $$a_1^{2}b_2^{2}+a_2^{2}b_1^{2}-2a_1a_2b_1b_2=\\left(a_1b_2-a_2b_1\\right)^{2}\\ \\ge\\ 0 . \\qquad\\checkmark$$\n\n**Общий случай.** Индукция по $n$: применяем случай $n=2$ к первой дроби и «свёрнутому остатку». Именно, по предположению $$\\sum_{i=2}^{n}\\frac{a_i^{2}}{b_i}\\ \\ge\\ \\frac{\\left(a_2+\\dots+a_n\\right)^{2}}{b_2+\\dots+b_n} ,$$ а затем $$\\frac{a_1^{2}}{b_1}+\\frac{\\left(a_2+\\dots+a_n\\right)^{2}}{b_2+\\dots+b_n}\\ \\ge\\ \\frac{\\left(a_1+\\dots+a_n\\right)^{2}}{b_1+\\dots+b_n} \\quad\\checkmark$$\n\n**Вывод неравенства Несбитта.** Запишем каждую дробь так, чтобы в числителе оказался квадрат: $$\\frac{a}{b+c}=\\frac{a^{2}}{a(b+c)} ,$$ и аналогично для остальных. Тогда $$\\frac{a}{b+c}+\\frac{b}{c+a}+\\frac{c}{a+b}\\ \\ge\\ \\frac{(a+b+c)^{2}}{a(b+c)+b(c+a)+c(a+b)}=\\frac{(a+b+c)^{2}}{2(ab+bc+ca)} .$$\n\nОстаётся вспомнить, что $(a+b+c)^{2}\\ge3(ab+bc+ca)$, откуда правая часть не меньше $\\dfrac32$. $\\blacksquare$\n\n**Равенство** — при $\\dfrac{a_1}{b_1}=\\dots=\\dfrac{a_n}{b_n}$; в неравенстве Несбитта это даёт $a=b=c$.",
    "en": "**The case $n=2$.** We need $$\\frac{a_1^{2}}{b_1}+\\frac{a_2^{2}}{b_2}\\ \\ge\\ \\frac{(a_1+a_2)^{2}}{b_1+b_2} .$$ Multiply by the positive number $b_1b_2(b_1+b_2)$ and expand: the left side gives $$\\left(a_1^{2}b_2+a_2^{2}b_1\\right)(b_1+b_2),$$ the right $$(a_1+a_2)^{2}b_1b_2 .$$ Their difference is $$a_1^{2}b_2^{2}+a_2^{2}b_1^{2}-2a_1a_2b_1b_2=\\left(a_1b_2-a_2b_1\\right)^{2}\\ \\ge\\ 0 . \\qquad\\checkmark$$\n\n**The general case.** Induct on $n$: apply the case $n=2$ to the first fraction and the folded-up remainder. Namely, by the induction hypothesis $$\\sum_{i=2}^{n}\\frac{a_i^{2}}{b_i}\\ \\ge\\ \\frac{\\left(a_2+\\dots+a_n\\right)^{2}}{b_2+\\dots+b_n} ,$$ and then $$\\frac{a_1^{2}}{b_1}+\\frac{\\left(a_2+\\dots+a_n\\right)^{2}}{b_2+\\dots+b_n}\\ \\ge\\ \\frac{\\left(a_1+\\dots+a_n\\right)^{2}}{b_1+\\dots+b_n} \\quad\\checkmark$$\n\n**Deducing Nesbitt.** Rewrite each fraction so that a square sits on top: $$\\frac{a}{b+c}=\\frac{a^{2}}{a(b+c)} ,$$ and similarly for the others. Then $$\\frac{a}{b+c}+\\frac{b}{c+a}+\\frac{c}{a+b}\\ \\ge\\ \\frac{(a+b+c)^{2}}{a(b+c)+b(c+a)+c(a+b)}=\\frac{(a+b+c)^{2}}{2(ab+bc+ca)} .$$\n\nIt remains to recall $(a+b+c)^{2}\\ge3(ab+bc+ca)$, whence the right side is at least $\\dfrac32$. $\\blacksquare$\n\n**Equality** when $\\dfrac{a_1}{b_1}=\\dots=\\dfrac{a_n}{b_n}$; in Nesbitt this gives $a=b=c$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите неравенство о перестановках: если $a_1\\le a_2\\le\\dots\\le a_n$ и $b_1\\le b_2\\le\\dots\\le b_n$, то для любой перестановки $\\sigma$ $$\\sum_i a_ib_{\\sigma(i)}\\ \\le\\ \\sum_i a_ib_i .$$",
    "en": "Prove the rearrangement inequality: if $a_1\\le a_2\\le\\dots\\le a_n$ and $b_1\\le b_2\\le\\dots\\le b_n$, then for every permutation $\\sigma$ $$\\sum_i a_ib_{\\sigma(i)}\\ \\le\\ \\sum_i a_ib_i .$$"
   },
   "hint": {
    "ru": "Если в перестановке есть «инверсия», поменяйте два слагаемых местами и сравните суммы.",
    "en": "If the permutation has an inversion, swap two terms and compare the sums."
   },
   "sol": {
    "ru": "**Ключевая лемма о двух слагаемых.** Пусть $i<j$, то есть $a_i\\le a_j$, и пусть в перестановке этим местам отвечают $b_p$ и $b_q$ с $b_p\\ge b_q$ («инверсия»). Сравним два варианта: $$\\left(a_ib_q+a_jb_p\\right)-\\left(a_ib_p+a_jb_q\\right)=\\left(a_j-a_i\\right)\\left(b_p-b_q\\right)\\ \\ge\\ 0 .$$\n\nЗначит, поменяв местами $b_p$ и $b_q$ (то есть поставив большее $b$ к большему $a$), мы **не уменьшили** сумму.\n\n**Завершение.** Любую перестановку можно превратить в тождественную конечным числом таких обменов: каждый обмен убирает хотя бы одну инверсию, а инверсий конечное число. На каждом шаге сумма не убывает, значит $$\\sum_i a_ib_{\\sigma(i)}\\ \\le\\ \\sum_i a_ib_i . \\qquad\\blacksquare$$\n\n**Симметрично** наименьшая сумма получается при противоположном порядке: $\\sum a_ib_{n+1-i}$.\n\n**Пример применения.** Для положительных $a,b,c$ наборы $(a,b,c)$ и $(a,b,c)$ упорядочены одинаково, поэтому $$a^{2}+b^{2}+c^{2}\\ \\ge\\ ab+bc+ca ,$$ — правая часть отвечает циклической перестановке.\n\n**Проверка леммы** на числах: $a_i=1$, $a_j=3$, $b_q=2$, $b_p=5$: «правильно» $1\\cdot2+3\\cdot5=17$, «наоборот» $1\\cdot5+3\\cdot2=11$ ✓",
    "en": "**The key two-term lemma.** Let $i<j$, so $a_i\\le a_j$, and suppose these places carry $b_p$ and $b_q$ with $b_p\\ge b_q$ (an \"inversion\"). Compare the two arrangements: $$\\left(a_ib_q+a_jb_p\\right)-\\left(a_ib_p+a_jb_q\\right)=\\left(a_j-a_i\\right)\\left(b_p-b_q\\right)\\ \\ge\\ 0 .$$\n\nSo swapping $b_p$ and $b_q$ — putting the larger $b$ with the larger $a$ — does **not decrease** the sum.\n\n**Finishing.** Any permutation can be turned into the identity by finitely many such swaps: each swap removes at least one inversion, and there are finitely many. At every step the sum does not decrease, so $$\\sum_i a_ib_{\\sigma(i)}\\ \\le\\ \\sum_i a_ib_i . \\qquad\\blacksquare$$\n\n**Symmetrically** the smallest sum comes from the opposite order: $\\sum a_ib_{n+1-i}$.\n\n**A sample application.** For positive $a,b,c$ the tuples $(a,b,c)$ and $(a,b,c)$ are ordered alike, hence $$a^{2}+b^{2}+c^{2}\\ \\ge\\ ab+bc+ca ,$$ the right side coming from a cyclic permutation.\n\n**Check of the lemma** on numbers: $a_i=1$, $a_j=3$, $b_q=2$, $b_p=5$: \"aligned\" gives $1\\cdot2+3\\cdot5=17$, \"reversed\" gives $1\\cdot5+3\\cdot2=11$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите неравенство Шура (при $t=1$): для неотрицательных $a,b,c$ $$a(a-b)(a-c)+b(b-a)(b-c)+c(c-a)(c-b)\\ \\ge\\ 0 ,$$ и выведите из него, что $$a^{3}+b^{3}+c^{3}+abc\\cdot 3\\ \\ge\\ ab(a+b)+bc(b+c)+ca(c+a)-3abc .$$",
    "en": "Prove Schur’s inequality (for $t=1$): for non-negative $a,b,c$ $$a(a-b)(a-c)+b(b-a)(b-c)+c(c-a)(c-b)\\ \\ge\\ 0 ,$$ and deduce that $$a^{3}+b^{3}+c^{3}+3abc\\ \\ge\\ ab(a+b)+bc(b+c)+ca(c+a)-3abc .$$"
   },
   "hint": {
    "ru": "Считайте, что $a\\ge b\\ge c$, и сгруппируйте первые два слагаемых.",
    "en": "Assume $a\\ge b\\ge c$ and group the first two terms."
   },
   "sol": {
    "ru": "Выражение симметрично относительно перестановок $a,b,c$, поэтому без ограничения общности $$a\\ \\ge\\ b\\ \\ge\\ c\\ \\ge\\ 0 .$$\n\n**Группируем первые два слагаемых.** $$a(a-b)(a-c)+b(b-a)(b-c)=(a-b)\\left[a(a-c)-b(b-c)\\right].$$\n\nВнутри скобки: $$a(a-c)-b(b-c)=a^{2}-ac-b^{2}+bc=(a-b)(a+b)-c(a-b)=(a-b)(a+b-c).$$\n\nЗначит первые два слагаемых дают $$(a-b)^{2}(a+b-c) .$$\n\n**Третье слагаемое.** $$c(c-a)(c-b)=c\\,(a-c)(b-c)\\ \\ge\\ 0 ,$$ ведь при нашем порядке $a-c\\ge0$ и $b-c\\ge0$.\n\n**Итог.** Первое слагаемое неотрицательно, если $a+b-c\\ge0$ — а это верно, ведь $a\\ge c$ и $b\\ge0$. Значит вся сумма неотрицательна. $\\blacksquare$\n\n**Раскрытие.** Разложив скобки в исходном выражении, получаем $$a^{3}+b^{3}+c^{3}+3abc\\ \\ge\\ a^{2}b+a^{2}c+b^{2}a+b^{2}c+c^{2}a+c^{2}b-3abc+3abc ,$$ то есть в точности требуемое неравенство между суммой кубов с $3abc$ и суммой смешанных членов.\n\n**Проверка** при $a=2$, $b=1$, $c=0$: слева $8+1+0+0=9$, справа $2\\cdot1\\cdot3=6$ ✓ При $a=b=c$ обе части равны.\n\n**Замечание.** Неотрицательность существенна: при отрицательных числах неравенство может нарушаться.",
    "en": "The expression is symmetric under permuting $a,b,c$, so without loss of generality $$a\\ \\ge\\ b\\ \\ge\\ c\\ \\ge\\ 0 .$$\n\n**Group the first two terms.** $$a(a-b)(a-c)+b(b-a)(b-c)=(a-b)\\left[a(a-c)-b(b-c)\\right].$$\n\nInside the bracket: $$a(a-c)-b(b-c)=a^{2}-ac-b^{2}+bc=(a-b)(a+b)-c(a-b)=(a-b)(a+b-c).$$\n\nSo the first two terms give $$(a-b)^{2}(a+b-c) .$$\n\n**The third term.** $$c(c-a)(c-b)=c\\,(a-c)(b-c)\\ \\ge\\ 0 ,$$ since under our ordering $a-c\\ge0$ and $b-c\\ge0$.\n\n**Conclusion.** The first piece is non-negative provided $a+b-c\\ge0$ — true because $a\\ge c$ and $b\\ge0$. Hence the whole sum is non-negative. $\\blacksquare$\n\n**Expanding.** Multiplying out the original expression gives $$a^{3}+b^{3}+c^{3}+3abc\\ \\ge\\ a^{2}b+a^{2}c+b^{2}a+b^{2}c+c^{2}a+c^{2}b-3abc+3abc ,$$ exactly the stated inequality between the cubes plus $3abc$ and the mixed terms.\n\n**Check** at $a=2$, $b=1$, $c=0$: the left side is $8+1+0+0=9$, the right $2\\cdot1\\cdot3=6$ ✓ At $a=b=c$ both sides are equal.\n\n**Remark.** Non-negativity matters: with negative numbers the inequality can fail."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите неравенство Минковского для двух слагаемых: $$\\sqrt{a^{2}+b^{2}}+\\sqrt{c^{2}+d^{2}}\\ \\ge\\ \\sqrt{(a+c)^{2}+(b+d)^{2}} .$$",
    "en": "Prove Minkowski’s inequality for two terms: $$\\sqrt{a^{2}+b^{2}}+\\sqrt{c^{2}+d^{2}}\\ \\ge\\ \\sqrt{(a+c)^{2}+(b+d)^{2}} .$$"
   },
   "hint": {
    "ru": "Возведите обе части в квадрат; останется неравенство Коши — Буняковского.",
    "en": "Square both sides; what remains is Cauchy–Schwarz."
   },
   "sol": {
    "ru": "Обе части неотрицательны, поэтому можно возвести в квадрат. Слева: $$\\left(a^{2}+b^{2}\\right)+\\left(c^{2}+d^{2}\\right)+2\\sqrt{\\left(a^{2}+b^{2}\\right)\\left(c^{2}+d^{2}\\right)} .$$ Справа: $$(a+c)^{2}+(b+d)^{2}=\\left(a^{2}+b^{2}\\right)+\\left(c^{2}+d^{2}\\right)+2(ac+bd).$$\n\nЗначит неравенство равносильно $$\\sqrt{\\left(a^{2}+b^{2}\\right)\\left(c^{2}+d^{2}\\right)}\\ \\ge\\ ac+bd .$$\n\nЕсли правая часть отрицательна, всё очевидно. Если неотрицательна, возведём в квадрат ещё раз: $$\\left(a^{2}+b^{2}\\right)\\left(c^{2}+d^{2}\\right)\\ \\ge\\ (ac+bd)^{2} ,$$ а это неравенство Коши — Буняковского для двух пар: его разность равна $$(ad-bc)^{2}\\ \\ge\\ 0 . \\qquad\\blacksquare$$\n\n**Равенство** — когда $ad=bc$ и $ac+bd\\ge0$, то есть когда векторы $(a,b)$ и $(c,d)$ сонаправлены.\n\n**Геометрический смысл.** Это неравенство треугольника: длина суммы векторов не превосходит суммы длин.\n\n**Проверка** при $(a,b)=(3,0)$, $(c,d)=(0,4)$: слева $3+4=7$, справа $\\sqrt{9+16}=5$ ✓",
    "en": "Both sides are non-negative, so we may square. On the left: $$\\left(a^{2}+b^{2}\\right)+\\left(c^{2}+d^{2}\\right)+2\\sqrt{\\left(a^{2}+b^{2}\\right)\\left(c^{2}+d^{2}\\right)} .$$ On the right: $$(a+c)^{2}+(b+d)^{2}=\\left(a^{2}+b^{2}\\right)+\\left(c^{2}+d^{2}\\right)+2(ac+bd).$$\n\nSo the inequality is equivalent to $$\\sqrt{\\left(a^{2}+b^{2}\\right)\\left(c^{2}+d^{2}\\right)}\\ \\ge\\ ac+bd .$$\n\nIf the right side is negative this is clear. If it is non-negative, square once more: $$\\left(a^{2}+b^{2}\\right)\\left(c^{2}+d^{2}\\right)\\ \\ge\\ (ac+bd)^{2} ,$$ which is Cauchy–Schwarz for two pairs: the difference equals $$(ad-bc)^{2}\\ \\ge\\ 0 . \\qquad\\blacksquare$$\n\n**Equality** when $ad=bc$ and $ac+bd\\ge0$, i.e. when the vectors $(a,b)$ and $(c,d)$ point the same way.\n\n**Geometric meaning.** This is the triangle inequality: the length of a sum of vectors is at most the sum of the lengths.\n\n**Check** at $(a,b)=(3,0)$, $(c,d)=(0,4)$: the left side is $3+4=7$, the right $\\sqrt{9+16}=5$ ✓"
   }
  }
 ]
};
