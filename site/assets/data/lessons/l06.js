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
      "ru": "AM–GM превращает **сумму** в **произведение** и обратно. Поэтому она особенно хороша, когда произведение — константа. Например, если $xy=16$, то $x+y\\ge2\\sqrt{16}=8$: сумма минимальна при $x=y=4$.\\n\\nИ наоборот: если сумма фиксирована, максимально произведение при равных слагаемых. Отсюда классический факт: среди всех прямоугольников данного периметра наибольшую площадь имеет квадрат.",
      "en": "AM–GM turns a **sum** into a **product** and back. So it is at its best when the product is a constant. For instance, if $xy=16$ then $x+y\\ge2\\sqrt{16}=8$: the sum is smallest when $x=y=4$.\\n\\nAnd conversely: with a fixed sum the product is largest when the terms are equal. Hence the classical fact that among all rectangles of a given perimeter the square has the largest area."
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
      "ru": "Докажем для двух чисел; общий случай доказывается теми же приёмами.\\n\\n**QM $\\ge$ AM.** Обе части положительны, поэтому можно возвести в квадрат: надо проверить $\\tfrac{a^{2}+b^{2}}{2}\\ge\\tfrac{(a+b)^{2}}{4}$, то есть $2(a^{2}+b^{2})\\ge(a+b)^{2}$, то есть $a^{2}-2ab+b^{2}\\ge0$ — снова $(a-b)^{2}\\ge0$.\\n\\n**AM $\\ge$ GM.** Доказано выше.\\n\\n**GM $\\ge$ HM.** Заметим, что $\\mathrm{HM}=\\dfrac{ab}{\\mathrm{AM}}$ и $\\mathrm{GM}^{2}=ab$, поэтому $$\\frac{\\mathrm{GM}}{\\mathrm{HM}}=\\frac{\\mathrm{GM}\\cdot\\mathrm{AM}}{ab}=\\frac{\\mathrm{AM}}{\\mathrm{GM}}\\ \\ge\\ 1 .$$ $\\blacksquare$",
      "en": "We prove it for two numbers; the general case uses the same moves.\\n\\n**QM $\\ge$ AM.** Both sides are positive, so we may square: we must check $\\tfrac{a^{2}+b^{2}}{2}\\ge\\tfrac{(a+b)^{2}}{4}$, that is $2(a^{2}+b^{2})\\ge(a+b)^{2}$, that is $a^{2}-2ab+b^{2}\\ge0$ — once again $(a-b)^{2}\\ge0$.\\n\\n**AM $\\ge$ GM.** Proved above.\\n\\n**GM $\\ge$ HM.** Note that $\\mathrm{HM}=\\dfrac{ab}{\\mathrm{AM}}$ and $\\mathrm{GM}^{2}=ab$, so $$\\frac{\\mathrm{GM}}{\\mathrm{HM}}=\\frac{\\mathrm{GM}\\cdot\\mathrm{AM}}{ab}=\\frac{\\mathrm{AM}}{\\mathrm{GM}}\\ \\ge\\ 1 .$$ $\\blacksquare$"
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
      "ru": "Рассмотрим функцию $$f(t)=\\sum_{i=1}^{n}\\left(a_i t-b_i\\right)^{2}\\ \\ge\\ 0\\qquad\\text{при всех }t .$$ Раскроем скобки: $$f(t)=\\left(\\sum a_i^{2}\\right)t^{2}-2\\left(\\sum a_ib_i\\right)t+\\sum b_i^{2}=At^{2}-2Bt+C .$$ Это квадратный трёхчлен с $A\\ge0$, неотрицательный при всех $t$. Если $A>0$, то его дискриминант неположителен: $$4B^{2}-4AC\\le0\\quad\\Longrightarrow\\quad B^{2}\\le AC,$$ что и требовалось. Если же $A=0$, то все $a_i=0$ и обе части нулевые.\\n\\nРавенство означает, что дискриминант равен нулю, то есть $f$ имеет корень $t_0$; тогда $a_it_0=b_i$ при всех $i$ — наборы пропорциональны. $\\blacksquare$",
      "en": "Consider the function $$f(t)=\\sum_{i=1}^{n}\\left(a_i t-b_i\\right)^{2}\\ \\ge\\ 0\\qquad\\text{for every }t .$$ Expanding, $$f(t)=\\left(\\sum a_i^{2}\\right)t^{2}-2\\left(\\sum a_ib_i\\right)t+\\sum b_i^{2}=At^{2}-2Bt+C .$$ This is a quadratic with $A\\ge0$, non-negative for all $t$. If $A>0$ its discriminant is non-positive: $$4B^{2}-4AC\\le0\\quad\\Longrightarrow\\quad B^{2}\\le AC,$$ which is the claim. If $A=0$ then every $a_i=0$ and both sides vanish.\\n\\nEquality means the discriminant is zero, so $f$ has a root $t_0$; then $a_it_0=b_i$ for all $i$ — the lists are proportional. $\\blacksquare$"
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
      "ru": "Сначала случай $n=2$. Требуется $$\\frac{x^{2}}{p}+\\frac{y^{2}}{q}\\ \\ge\\ \\frac{(x+y)^{2}}{p+q}.$$ Умножим обе части на положительное число $pq(p+q)$: $$x^{2}q(p+q)+y^{2}p(p+q)\\ \\ge\\ pq(x+y)^{2}.$$ Раскроем и перенесём всё влево: $$x^{2}pq+x^{2}q^{2}+y^{2}p^{2}+y^{2}pq-pqx^{2}-2pqxy-pqy^{2}=x^{2}q^{2}-2pqxy+y^{2}p^{2}=(xq-yp)^{2}\\ \\ge\\ 0 .$$\\n\\nОбщий случай — индукция: применяя доказанное дважды, объединяем первые две дроби, затем результат с третьей, и так далее. $\\blacksquare$",
      "en": "First the case $n=2$. We need $$\\frac{x^{2}}{p}+\\frac{y^{2}}{q}\\ \\ge\\ \\frac{(x+y)^{2}}{p+q}.$$ Multiply both sides by the positive number $pq(p+q)$: $$x^{2}q(p+q)+y^{2}p(p+q)\\ \\ge\\ pq(x+y)^{2}.$$ Expand and move everything left: $$x^{2}pq+x^{2}q^{2}+y^{2}p^{2}+y^{2}pq-pqx^{2}-2pqxy-pqy^{2}=x^{2}q^{2}-2pqxy+y^{2}p^{2}=(xq-yp)^{2}\\ \\ge\\ 0 .$$\\n\\nThe general case follows by induction: apply the two-term case to merge the first two fractions, then merge the result with the third, and so on. $\\blacksquare$"
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
    "ru": "Так как $x>0$, умножение на $x$ не меняет знака неравенства: надо доказать $x^{2}+1\\ge2x$, то есть $x^{2}-2x+1\\ge0$, то есть $(x-1)^{2}\\ge0$ — верно всегда. Равенство при $x=1$.\\n\\nПри $x<0$ положим $x=-y$, $y>0$: тогда $x+\\tfrac1x=-\\left(y+\\tfrac1y\\right)\\le-2$. То есть для отрицательных $x$ выражение не превосходит $-2$. $\\blacksquare$",
    "en": "Since $x>0$, multiplying by $x$ preserves the direction: we must prove $x^{2}+1\\ge2x$, that is $x^{2}-2x+1\\ge0$, that is $(x-1)^{2}\\ge0$ — always true. Equality at $x=1$.\\n\\nFor $x<0$ put $x=-y$ with $y>0$: then $x+\\tfrac1x=-\\left(y+\\tfrac1y\\right)\\le-2$. So for negative $x$ the expression never exceeds $-2$. $\\blacksquare$"
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
    "ru": "Раскроем: $$(a+b)\\left(\\frac1a+\\frac1b\\right)=1+\\frac ab+\\frac ba+1=2+\\left(\\frac ab+\\frac ba\\right)\\ \\ge\\ 2+2=4,$$ по предыдущей задаче. Равенство при $a=b$. $\\blacksquare$\\n\\n*Другой путь:* по AM–GM $a+b\\ge2\\sqrt{ab}$ и $\\tfrac1a+\\tfrac1b\\ge\\tfrac2{\\sqrt{ab}}$; перемножая (обе части положительны), получаем $4$.",
    "en": "Expand: $$(a+b)\\left(\\frac1a+\\frac1b\\right)=1+\\frac ab+\\frac ba+1=2+\\left(\\frac ab+\\frac ba\\right)\\ \\ge\\ 2+2=4,$$ by the previous problem. Equality when $a=b$. $\\blacksquare$\\n\\n*Another route:* by AM–GM $a+b\\ge2\\sqrt{ab}$ and $\\tfrac1a+\\tfrac1b\\ge\\tfrac2{\\sqrt{ab}}$; multiplying (all parts positive) gives $4$."
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
    "ru": "Раскроем левую часть: $$(a+b+c)^{2}=a^{2}+b^{2}+c^{2}+2(ab+bc+ca).$$ По уже доказанному $ab+bc+ca\\le a^{2}+b^{2}+c^{2}$, поэтому $$(a+b+c)^{2}\\le a^{2}+b^{2}+c^{2}+2\\left(a^{2}+b^{2}+c^{2}\\right)=3\\left(a^{2}+b^{2}+c^{2}\\right).$$ Равенство — при $a=b=c$. $\\blacksquare$\\n\\n*Замечание.* Это в точности неравенство QM $\\ge$ AM для трёх чисел, а также случай Коши–Буняковского с набором $(1,1,1)$.",
    "en": "Expand the left side: $$(a+b+c)^{2}=a^{2}+b^{2}+c^{2}+2(ab+bc+ca).$$ Since $ab+bc+ca\\le a^{2}+b^{2}+c^{2}$, $$(a+b+c)^{2}\\le a^{2}+b^{2}+c^{2}+2\\left(a^{2}+b^{2}+c^{2}\\right)=3\\left(a^{2}+b^{2}+c^{2}\\right).$$ Equality when $a=b=c$. $\\blacksquare$\\n\\n*Remark.* This is exactly QM $\\ge$ AM for three numbers, and also Cauchy–Schwarz against the list $(1,1,1)$."
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
    "ru": "По AM–GM для трёх чисел $$a+b+c\\ \\ge\\ 3\\sqrt[3]{abc},\\qquad \\frac1a+\\frac1b+\\frac1c\\ \\ge\\ 3\\sqrt[3]{\\frac1{abc}} .$$ Обе части каждого неравенства положительны, поэтому их можно перемножить: $$(a+b+c)\\left(\\frac1a+\\frac1b+\\frac1c\\right)\\ \\ge\\ 9\\sqrt[3]{abc}\\cdot\\sqrt[3]{\\frac1{abc}}=9 .$$ Равенство требует $a=b=c$. $\\blacksquare$\\n\\n*Другой путь:* раскрыть скобки и сгруппировать в три пары: $$3+\\left(\\frac ab+\\frac ba\\right)+\\left(\\frac bc+\\frac cb\\right)+\\left(\\frac ca+\\frac ac\\right)\\ \\ge\\ 3+2+2+2=9 .$$",
    "en": "By AM–GM for three numbers, $$a+b+c\\ \\ge\\ 3\\sqrt[3]{abc},\\qquad \\frac1a+\\frac1b+\\frac1c\\ \\ge\\ 3\\sqrt[3]{\\frac1{abc}} .$$ Both sides of each are positive, so they may be multiplied: $$(a+b+c)\\left(\\frac1a+\\frac1b+\\frac1c\\right)\\ \\ge\\ 9\\sqrt[3]{abc}\\cdot\\sqrt[3]{\\frac1{abc}}=9 .$$ Equality needs $a=b=c$. $\\blacksquare$\\n\\n*Another route:* expand and group into three pairs: $$3+\\left(\\frac ab+\\frac ba\\right)+\\left(\\frac bc+\\frac cb\\right)+\\left(\\frac ca+\\frac ac\\right)\\ \\ge\\ 3+2+2+2=9 .$$"
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
    "ru": "Воспользуемся тождеством $$a^{3}+b^{3}+c^{3}-3abc=(a+b+c)\\left(a^{2}+b^{2}+c^{2}-ab-bc-ca\\right)$$ и преобразуем вторую скобку: $$a^{2}+b^{2}+c^{2}-ab-bc-ca=\\tfrac12\\left[(a-b)^{2}+(b-c)^{2}+(c-a)^{2}\\right]\\ \\ge\\ 0 .$$ Первая скобка $a+b+c\\ge0$ по условию. Произведение двух неотрицательных чисел неотрицательно, значит $a^{3}+b^{3}+c^{3}-3abc\\ge0$.\\n\\n**Равенство.** Произведение равно нулю, если ноль хотя бы один сомножитель. Либо $a=b=c$ (вторая скобка ноль), либо $a+b+c=0$, что при неотрицательных числах означает $a=b=c=0$ — частный случай первого. **Ответ:** равенство ровно при $a=b=c$. $\\blacksquare$",
    "en": "Use the identity $$a^{3}+b^{3}+c^{3}-3abc=(a+b+c)\\left(a^{2}+b^{2}+c^{2}-ab-bc-ca\\right)$$ and rewrite the second bracket: $$a^{2}+b^{2}+c^{2}-ab-bc-ca=\\tfrac12\\left[(a-b)^{2}+(b-c)^{2}+(c-a)^{2}\\right]\\ \\ge\\ 0 .$$ The first bracket $a+b+c\\ge0$ by hypothesis. A product of two non-negative numbers is non-negative, so $a^{3}+b^{3}+c^{3}-3abc\\ge0$.\\n\\n**Equality.** The product vanishes when a factor does. Either $a=b=c$ (second bracket zero), or $a+b+c=0$, which for non-negative numbers means $a=b=c=0$ — a special case of the first. **Answer:** equality exactly when $a=b=c$. $\\blacksquare$"
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
    "ru": "Используем условие: $$\\frac1a-1=\\frac{1-a}{a}=\\frac{(a+b+c)-a}{a}=\\frac{b+c}{a},$$ и аналогично для остальных. Значит доказываемое неравенство равносильно $$\\frac{(b+c)(c+a)(a+b)}{abc}\\ \\ge\\ 8,\\qquad\\text{то есть}\\qquad (a+b)(b+c)(c+a)\\ge8abc .$$ А это уже разобранный пример: перемножаем три неравенства AM–GM $$a+b\\ge2\\sqrt{ab},\\quad b+c\\ge2\\sqrt{bc},\\quad c+a\\ge2\\sqrt{ca}$$ (все части положительны) и получаем $8abc$.\\n\\nРавенство при $a=b=c=\\tfrac13$; проверка: $(3-1)^{3}=8$ ✓ $\\blacksquare$",
    "en": "Use the hypothesis: $$\\frac1a-1=\\frac{1-a}{a}=\\frac{(a+b+c)-a}{a}=\\frac{b+c}{a},$$ and likewise for the others. So the inequality is equivalent to $$\\frac{(b+c)(c+a)(a+b)}{abc}\\ \\ge\\ 8,\\qquad\\text{that is}\\qquad (a+b)(b+c)(c+a)\\ge8abc .$$ That is the worked example above: multiply the three AM–GM inequalities $$a+b\\ge2\\sqrt{ab},\\quad b+c\\ge2\\sqrt{bc},\\quad c+a\\ge2\\sqrt{ca}$$ (all parts positive) to get $8abc$.\\n\\nEquality at $a=b=c=\\tfrac13$; check: $(3-1)^{3}=8$ ✓ $\\blacksquare$"
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
    "ru": "При $k\\ge2$ имеем $k^{2}>k(k-1)>0$, поэтому $$\\frac1{k^{2}}<\\frac1{k(k-1)}=\\frac1{k-1}-\\frac1{k}.$$ (Последнее равенство проверяется приведением к общему знаменателю.) Складываем от $k=2$ до $n$: $$\\sum_{k=2}^{n}\\frac1{k^{2}}\\ <\\ \\left(\\frac11-\\frac12\\right)+\\left(\\frac12-\\frac13\\right)+\\dots+\\left(\\frac1{n-1}-\\frac1n\\right)=1-\\frac1n .$$ Все внутренние слагаемые сократились — это и есть телескопирование. Добавляя первое слагаемое суммы, получаем $$\\sum_{k=1}^{n}\\frac1{k^{2}}\\ <\\ 1+1-\\frac1n=2-\\frac1n\\ <\\ 2 . \\qquad\\blacksquare$$\\n\\n*Замечание.* Точное значение бесконечной суммы равно $\\tfrac{\\pi^{2}}{6}\\approx1{,}645$ — это знаменитая базельская задача, решённая Эйлером.",
    "en": "For $k\\ge2$ we have $k^{2}>k(k-1)>0$, so $$\\frac1{k^{2}}<\\frac1{k(k-1)}=\\frac1{k-1}-\\frac1{k}.$$ (The last equality is checked over a common denominator.) Summing from $k=2$ to $n$: $$\\sum_{k=2}^{n}\\frac1{k^{2}}\\ <\\ \\left(\\frac11-\\frac12\\right)+\\left(\\frac12-\\frac13\\right)+\\dots+\\left(\\frac1{n-1}-\\frac1n\\right)=1-\\frac1n .$$ Every interior term cancels — that is telescoping. Adding the first term of the sum, $$\\sum_{k=1}^{n}\\frac1{k^{2}}\\ <\\ 1+1-\\frac1n=2-\\frac1n\\ <\\ 2 . \\qquad\\blacksquare$$\\n\\n*Remark.* The exact value of the infinite sum is $\\tfrac{\\pi^{2}}{6}\\approx1.645$ — the famous Basel problem solved by Euler."
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
    "ru": "Применим AM–GM к $n$ числам $1,2,\\dots,n$: $$\\sqrt[n]{1\\cdot2\\cdots n}\\ \\le\\ \\frac{1+2+\\dots+n}{n}=\\frac{\\frac{n(n+1)}{2}}{n}=\\frac{n+1}{2}.$$ Возводя в $n$-ю степень (обе части положительны), получаем $n!\\le\\left(\\tfrac{n+1}{2}\\right)^{n}$.\\n\\nОсталось показать, что неравенство **строгое** при $n\\ge2$. Равенство в AM–GM достигается только когда все числа равны, а среди $1,2,\\dots,n$ при $n\\ge2$ есть различные ($1\\ne2$). Значит неравенство строгое. $\\blacksquare$\\n\\n*Проверка при $n=3$:* $6<\\left(\\tfrac42\\right)^{3}=8$ ✓",
    "en": "Apply AM–GM to the $n$ numbers $1,2,\\dots,n$: $$\\sqrt[n]{1\\cdot2\\cdots n}\\ \\le\\ \\frac{1+2+\\dots+n}{n}=\\frac{\\frac{n(n+1)}{2}}{n}=\\frac{n+1}{2}.$$ Raising to the $n$-th power (both sides positive) gives $n!\\le\\left(\\tfrac{n+1}{2}\\right)^{n}$.\\n\\nIt remains to see the inequality is **strict** for $n\\ge2$. Equality in AM–GM requires all the numbers to be equal, and among $1,2,\\dots,n$ with $n\\ge2$ there are different ones ($1\\ne2$). So the inequality is strict. $\\blacksquare$\\n\\n*Check at $n=3$:* $6<\\left(\\tfrac42\\right)^{3}=8$ ✓"
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
    "ru": "**Первое неравенство.** По AM–GM $$a+b+c\\ \\ge\\ 3\\sqrt[3]{abc}=3\\sqrt[3]{1}=3 .$$\\n\\n**Второе неравенство.** Применим AM–GM к трём положительным числам $ab$, $bc$, $ca$: $$ab+bc+ca\\ \\ge\\ 3\\sqrt[3]{ab\\cdot bc\\cdot ca}=3\\sqrt[3]{(abc)^{2}}=3\\sqrt[3]{1}=3 .$$\\n\\nВ обоих случаях равенство требует равенства слагаемых, то есть $a=b=c$, а вместе с $abc=1$ это даёт $a=b=c=1$. $\\blacksquare$",
    "en": "**First inequality.** By AM–GM $$a+b+c\\ \\ge\\ 3\\sqrt[3]{abc}=3\\sqrt[3]{1}=3 .$$\\n\\n**Second inequality.** Apply AM–GM to the three positive numbers $ab$, $bc$, $ca$: $$ab+bc+ca\\ \\ge\\ 3\\sqrt[3]{ab\\cdot bc\\cdot ca}=3\\sqrt[3]{(abc)^{2}}=3\\sqrt[3]{1}=3 .$$\\n\\nIn both cases equality forces the terms to be equal, that is $a=b=c$, and together with $abc=1$ this gives $a=b=c=1$. $\\blacksquare$"
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
    "ru": "**Способ 1 (форма Энгеля).** $$\\frac{a^{2}}{b}+\\frac{b^{2}}{c}+\\frac{c^{2}}{a}\\ \\ge\\ \\frac{(a+b+c)^{2}}{a+b+c}=a+b+c .$$\\n\\n**Способ 2 (без готовых лемм).** Для каждого слагаемого по AM–GM $$\\frac{a^{2}}{b}+b\\ \\ge\\ 2\\sqrt{\\frac{a^{2}}{b}\\cdot b}=2a,$$ и аналогично $\\tfrac{b^{2}}{c}+c\\ge2b$, $\\tfrac{c^{2}}{a}+a\\ge2c$. Складываем все три: $$\\left(\\frac{a^{2}}{b}+\\frac{b^{2}}{c}+\\frac{c^{2}}{a}\\right)+(a+b+c)\\ \\ge\\ 2(a+b+c),$$ откуда после переноса и получается требуемое. Равенство при $a=b=c$. $\\blacksquare$",
    "en": "**Method 1 (Engel form).** $$\\frac{a^{2}}{b}+\\frac{b^{2}}{c}+\\frac{c^{2}}{a}\\ \\ge\\ \\frac{(a+b+c)^{2}}{a+b+c}=a+b+c .$$\\n\\n**Method 2 (no ready-made lemma).** For each term, AM–GM gives $$\\frac{a^{2}}{b}+b\\ \\ge\\ 2\\sqrt{\\frac{a^{2}}{b}\\cdot b}=2a,$$ and likewise $\\tfrac{b^{2}}{c}+c\\ge2b$, $\\tfrac{c^{2}}{a}+a\\ge2c$. Adding all three, $$\\left(\\frac{a^{2}}{b}+\\frac{b^{2}}{c}+\\frac{c^{2}}{a}\\right)+(a+b+c)\\ \\ge\\ 2(a+b+c),$$ and moving the bracket across gives the claim. Equality when $a=b=c$. $\\blacksquare$"
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
    "ru": "Все знаменатели положительны, поэтому применима форма Энгеля: $$\\frac{a^{2}}{b+c}+\\frac{b^{2}}{c+a}+\\frac{c^{2}}{a+b}\\ \\ge\\ \\frac{(a+b+c)^{2}}{(b+c)+(c+a)+(a+b)}=\\frac{(a+b+c)^{2}}{2(a+b+c)}=\\frac{a+b+c}{2}.$$ Равенство достигается, когда наборы пропорциональны, то есть $\\tfrac{a}{b+c}=\\tfrac{b}{c+a}=\\tfrac{c}{a+b}$, что даёт $a=b=c$. $\\blacksquare$\\n\\n*Замечание.* Разделив обе части на $a+b+c$, снова получаем неравенство Несбитта.",
    "en": "All denominators are positive, so the Engel form applies: $$\\frac{a^{2}}{b+c}+\\frac{b^{2}}{c+a}+\\frac{c^{2}}{a+b}\\ \\ge\\ \\frac{(a+b+c)^{2}}{(b+c)+(c+a)+(a+b)}=\\frac{(a+b+c)^{2}}{2(a+b+c)}=\\frac{a+b+c}{2}.$$ Equality occurs when the lists are proportional, that is $\\tfrac{a}{b+c}=\\tfrac{b}{c+a}=\\tfrac{c}{a+b}$, which forces $a=b=c$. $\\blacksquare$\\n\\n*Remark.* Dividing both sides by $a+b+c$ recovers Nesbitt’s inequality."
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
    "ru": "Раскроем и разделим почленно: $$\\frac{(x+4)(x+9)}{x}=\\frac{x^{2}+13x+36}{x}=x+\\frac{36}{x}+13 .$$ По AM–GM для двух положительных чисел $$x+\\frac{36}{x}\\ \\ge\\ 2\\sqrt{x\\cdot\\frac{36}{x}}=2\\cdot6=12 ,$$ причём равенство достигается при $x=\\tfrac{36}{x}$, то есть $x^{2}=36$ и (так как $x>0$) $x=6$.\\n\\nЗначит выражение не меньше $12+13=25$, а при $x=6$ равно $\\tfrac{10\\cdot15}{6}=25$. **Ответ:** наименьшее значение $25$, достигается при $x=6$.",
    "en": "Expand and divide term by term: $$\\frac{(x+4)(x+9)}{x}=\\frac{x^{2}+13x+36}{x}=x+\\frac{36}{x}+13 .$$ By AM–GM for two positive numbers $$x+\\frac{36}{x}\\ \\ge\\ 2\\sqrt{x\\cdot\\frac{36}{x}}=2\\cdot6=12 ,$$ with equality when $x=\\tfrac{36}{x}$, that is $x^{2}=36$ and (since $x>0$) $x=6$.\\n\\nSo the expression is at least $12+13=25$, and at $x=6$ it equals $\\tfrac{10\\cdot15}{6}=25$. **Answer:** the minimum is $25$, attained at $x=6$."
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
    "ru": "**Прямой счёт.** Раскроем обе части: $$\\left(a^{2}+b^{2}\\right)\\left(x^{2}+y^{2}\\right)=a^{2}x^{2}+a^{2}y^{2}+b^{2}x^{2}+b^{2}y^{2},$$ $$(ax+by)^{2}=a^{2}x^{2}+2abxy+b^{2}y^{2}.$$ Вычитая, получаем $$\\left(a^{2}+b^{2}\\right)\\left(x^{2}+y^{2}\\right)-(ax+by)^{2}=a^{2}y^{2}-2abxy+b^{2}x^{2}=(ay-bx)^{2}\\ \\ge\\ 0 .$$ Это тождество Лагранжа для двух пар.\\n\\n**Равенство.** Достигается тогда и только тогда, когда $ay=bx$, то есть когда пары $(a,b)$ и $(x,y)$ пропорциональны (при ненулевых наборах это в точности $\\tfrac ax=\\tfrac by$). $\\blacksquare$\\n\\n*Пример применения.* При $x=y=1$ получаем $2\\left(a^{2}+b^{2}\\right)\\ge(a+b)^{2}$ — то есть QM $\\ge$ AM.",
    "en": "**Direct computation.** Expand both sides: $$\\left(a^{2}+b^{2}\\right)\\left(x^{2}+y^{2}\\right)=a^{2}x^{2}+a^{2}y^{2}+b^{2}x^{2}+b^{2}y^{2},$$ $$(ax+by)^{2}=a^{2}x^{2}+2abxy+b^{2}y^{2}.$$ Subtracting, $$\\left(a^{2}+b^{2}\\right)\\left(x^{2}+y^{2}\\right)-(ax+by)^{2}=a^{2}y^{2}-2abxy+b^{2}x^{2}=(ay-bx)^{2}\\ \\ge\\ 0 .$$ This is Lagrange’s identity for two pairs.\\n\\n**Equality.** It holds exactly when $ay=bx$, that is when the pairs $(a,b)$ and $(x,y)$ are proportional (for non-zero lists, precisely $\\tfrac ax=\\tfrac by$). $\\blacksquare$\\n\\n*A use.* Taking $x=y=1$ gives $2\\left(a^{2}+b^{2}\\right)\\ge(a+b)^{2}$, which is QM $\\ge$ AM."
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
    "ru": "**Замена.** Из неравенств треугольника числа $$x=\\frac{b+c-a}{2},\\qquad y=\\frac{c+a-b}{2},\\qquad z=\\frac{a+b-c}{2}$$ положительны, и обратно $a=y+z$, $b=z+x$, $c=x+y$. Такая замена (её называют заменой Равви) превращает «условие треугольника» в обычную положительность.\\n\\n**Переписываем неравенство.** Заметим, что $b+c-a=2x$ и так далее, поэтому доказать надо $$2\\left[x(y+z)^{2}+y(z+x)^{2}+z(x+y)^{2}\\right]\\ \\le\\ 3(y+z)(z+x)(x+y).$$\\n\\n**Раскрываем обе части.** Слева: $$x(y^{2}+2yz+z^{2})+y(z^{2}+2zx+x^{2})+z(x^{2}+2xy+y^{2})=\\left(xy^{2}+xz^{2}+yz^{2}+x^{2}y+x^{2}z+y^{2}z\\right)+6xyz .$$ Справа: $$(y+z)(z+x)(x+y)=\\left(xy^{2}+xz^{2}+yz^{2}+x^{2}y+x^{2}z+y^{2}z\\right)+2xyz .$$ Обозначим $S$ сумму шести смешанных членов. Неравенство принимает вид $$2\\left(S+6xyz\\right)\\ \\le\\ 3\\left(S+2xyz\\right),\\qquad\\text{то есть}\\qquad 6xyz\\le S .$$\\n\\n**Последний шаг.** По AM–GM для шести положительных чисел $$S=xy^{2}+xz^{2}+yz^{2}+x^{2}y+x^{2}z+y^{2}z\\ \\ge\\ 6\\sqrt[6]{x^{6}y^{6}z^{6}}=6xyz .$$\\n\\nЗначит исходное неравенство верно, а равенство достигается при $x=y=z$, то есть при $a=b=c$ — для равностороннего треугольника. $\\blacksquare$",
    "en": "**Substitution.** By the triangle inequalities the numbers $$x=\\frac{b+c-a}{2},\\qquad y=\\frac{c+a-b}{2},\\qquad z=\\frac{a+b-c}{2}$$ are positive, and conversely $a=y+z$, $b=z+x$, $c=x+y$. This substitution (the Ravi substitution) turns \"being a triangle\" into plain positivity.\\n\\n**Rewrite the inequality.** Note $b+c-a=2x$ and so on, so we must prove $$2\\left[x(y+z)^{2}+y(z+x)^{2}+z(x+y)^{2}\\right]\\ \\le\\ 3(y+z)(z+x)(x+y).$$\\n\\n**Expand both sides.** On the left, $x(y^2+2yz+z^2)+y(z^2+2zx+x^2)+z(x^2+2xy+y^2)$ equals $$\\left(xy^{2}+xz^{2}+yz^{2}+x^{2}y+x^{2}z+y^{2}z\\right)+6xyz .$$ On the right, $$(y+z)(z+x)(x+y)=\\left(xy^{2}+xz^{2}+yz^{2}+x^{2}y+x^{2}z+y^{2}z\\right)+2xyz .$$ Write $S$ for the sum of the six mixed terms. The inequality becomes $$2\\left(S+6xyz\\right)\\ \\le\\ 3\\left(S+2xyz\\right),\\qquad\\text{that is}\\qquad 6xyz\\le S .$$\\n\\n**Last step.** By AM–GM for six positive numbers $$S=xy^{2}+xz^{2}+yz^{2}+x^{2}y+x^{2}z+y^{2}z\\ \\ge\\ 6\\sqrt[6]{x^{6}y^{6}z^{6}}=6xyz .$$\\n\\nSo the original inequality holds, with equality when $x=y=z$, that is when $a=b=c$ — the equilateral triangle. $\\blacksquare$"
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
    "ru": "**Шаг 1: замена.** Положим $x=\\tfrac1a$, $y=\\tfrac1b$, $z=\\tfrac1c$; тогда $x,y,z>0$ и $xyz=\\tfrac1{abc}=1$. Преобразуем одно слагаемое: $$\\frac1{a^{3}(b+c)}=\\frac{x^{3}}{\\frac1y+\\frac1z}=\\frac{x^{3}}{\\frac{y+z}{yz}}=\\frac{x^{3}yz}{y+z}.$$ Так как $xyz=1$, имеем $yz=\\tfrac1x$, поэтому $$\\frac1{a^{3}(b+c)}=\\frac{x^{3}\\cdot\\frac1x}{y+z}=\\frac{x^{2}}{y+z}.$$\\n\\n**Шаг 2: что осталось доказать.** Сумма приняла вид $$\\frac{x^{2}}{y+z}+\\frac{y^{2}}{z+x}+\\frac{z^{2}}{x+y}\\ \\ge\\ \\frac32 .$$\\n\\n**Шаг 3: форма Энгеля.** Знаменатели положительны, поэтому $$\\frac{x^{2}}{y+z}+\\frac{y^{2}}{z+x}+\\frac{z^{2}}{x+y}\\ \\ge\\ \\frac{(x+y+z)^{2}}{2(x+y+z)}=\\frac{x+y+z}{2}.$$\\n\\n**Шаг 4: используем условие.** По AM–GM $$x+y+z\\ \\ge\\ 3\\sqrt[3]{xyz}=3 .$$ Значит вся сумма не меньше $\\tfrac32$.\\n\\nРавенство требует $x=y=z$ и $xyz=1$, то есть $x=y=z=1$, что отвечает $a=b=c=1$. Проверка: каждое слагаемое равно $\\tfrac1{1\\cdot2}=\\tfrac12$, сумма $\\tfrac32$ ✓ $\\blacksquare$",
    "en": "**Step 1: substitute.** Put $x=\\tfrac1a$, $y=\\tfrac1b$, $z=\\tfrac1c$; then $x,y,z>0$ and $xyz=\\tfrac1{abc}=1$. Transform one term: $$\\frac1{a^{3}(b+c)}=\\frac{x^{3}}{\\frac1y+\\frac1z}=\\frac{x^{3}}{\\frac{y+z}{yz}}=\\frac{x^{3}yz}{y+z}.$$ Since $xyz=1$ we have $yz=\\tfrac1x$, so $$\\frac1{a^{3}(b+c)}=\\frac{x^{3}\\cdot\\frac1x}{y+z}=\\frac{x^{2}}{y+z}.$$\\n\\n**Step 2: what is left to prove.** The sum has become $$\\frac{x^{2}}{y+z}+\\frac{y^{2}}{z+x}+\\frac{z^{2}}{x+y}\\ \\ge\\ \\frac32 .$$\\n\\n**Step 3: the Engel form.** The denominators are positive, so $$\\frac{x^{2}}{y+z}+\\frac{y^{2}}{z+x}+\\frac{z^{2}}{x+y}\\ \\ge\\ \\frac{(x+y+z)^{2}}{2(x+y+z)}=\\frac{x+y+z}{2}.$$\\n\\n**Step 4: spend the hypothesis.** By AM–GM $$x+y+z\\ \\ge\\ 3\\sqrt[3]{xyz}=3 .$$ Hence the whole sum is at least $\\tfrac32$.\\n\\nEquality needs $x=y=z$ together with $xyz=1$, that is $x=y=z=1$, which corresponds to $a=b=c=1$. Check: each term equals $\\tfrac1{1\\cdot2}=\\tfrac12$ and the sum is $\\tfrac32$ ✓ $\\blacksquare$"
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
    "ru": "**Случай четырёх чисел.** Пусть $a,b,c,d\\ge0$. Применим AM–GM для двух чисел трижды: $$\\frac{a+b}{2}\\ge\\sqrt{ab},\\qquad \\frac{c+d}{2}\\ge\\sqrt{cd},$$ и затем к полученным величинам: $$\\frac{a+b+c+d}{4}=\\frac{\\frac{a+b}{2}+\\frac{c+d}{2}}{2}\\ \\ge\\ \\sqrt{\\frac{a+b}{2}\\cdot\\frac{c+d}{2}}\\ \\ge\\ \\sqrt{\\sqrt{ab}\\cdot\\sqrt{cd}}=\\sqrt[4]{abcd}.$$ (Во втором переходе мы воспользовались тем, что функция $\\sqrt{\\cdot}$ монотонна, а обе оценённые скобки неотрицательны.)\\n\\n**Случай трёх чисел.** Пусть $a,b,c\\ge0$ и $$m=\\frac{a+b+c}{3}.$$ Возьмём в доказанном неравенстве четвёртым числом само $m$: $$\\frac{a+b+c+m}{4}\\ \\ge\\ \\sqrt[4]{abc\\,m}.$$ Но числитель слева равен $3m+m=4m$, поэтому левая часть равна $m$: $$m\\ \\ge\\ \\sqrt[4]{abc\\,m}.$$ Обе части неотрицательны, возведём в четвёртую степень: $$m^{4}\\ \\ge\\ abc\\cdot m .$$ Если $m=0$, то $a=b=c=0$ и утверждение тривиально. Если $m>0$, делим на $m$: $$m^{3}\\ \\ge\\ abc\\quad\\Longrightarrow\\quad m\\ \\ge\\ \\sqrt[3]{abc},$$ то есть $\\dfrac{a+b+c}{3}\\ge\\sqrt[3]{abc}$. $\\blacksquare$\\n\\n*Замечание.* Этот приём Коши — «вперёд по степеням двойки, назад по одному» — доказывает AM–GM сразу для всех $n$: сначала для $n=2,4,8,16,\\dots$, а затем спуском от $n$ к $n-1$.",
    "en": "**Four numbers.** Let $a,b,c,d\\ge0$. Apply the two-number case three times: $$\\frac{a+b}{2}\\ge\\sqrt{ab},\\qquad \\frac{c+d}{2}\\ge\\sqrt{cd},$$ and then to the results: $$\\frac{a+b+c+d}{4}=\\frac{\\frac{a+b}{2}+\\frac{c+d}{2}}{2}\\ \\ge\\ \\sqrt{\\frac{a+b}{2}\\cdot\\frac{c+d}{2}}\\ \\ge\\ \\sqrt{\\sqrt{ab}\\cdot\\sqrt{cd}}=\\sqrt[4]{abcd}.$$ (In the second step we used that the square root is increasing and both bracketed quantities are non-negative.)\\n\\n**Three numbers.** Let $a,b,c\\ge0$ and put $$m=\\frac{a+b+c}{3}.$$ Use $m$ itself as the fourth number in the inequality just proved: $$\\frac{a+b+c+m}{4}\\ \\ge\\ \\sqrt[4]{abc\\,m}.$$ The numerator on the left is $3m+m=4m$, so the left side equals $m$: $$m\\ \\ge\\ \\sqrt[4]{abc\\,m}.$$ Both sides are non-negative, so raise to the fourth power: $$m^{4}\\ \\ge\\ abc\\cdot m .$$ If $m=0$ then $a=b=c=0$ and the claim is trivial. If $m>0$, divide by $m$: $$m^{3}\\ \\ge\\ abc\\quad\\Longrightarrow\\quad m\\ \\ge\\ \\sqrt[3]{abc},$$ that is $\\dfrac{a+b+c}{3}\\ge\\sqrt[3]{abc}$. $\\blacksquare$\\n\\n*Remark.* This trick of Cauchy — \"forward along powers of two, backward one at a time\" — proves AM–GM for every $n$ at once: first for $n=2,4,8,16,\\dots$, then by descending from $n$ to $n-1$."
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
    "ru": "**Шаг 1.** Применим неравенство $x^{2}+y^{2}+z^{2}\\ge xy+yz+zx$ к числам $x=a^{2}$, $y=b^{2}$, $z=c^{2}$: $$a^{4}+b^{4}+c^{4}\\ \\ge\\ a^{2}b^{2}+b^{2}c^{2}+c^{2}a^{2}.$$\\n\\n**Шаг 2.** Применим то же неравенство ещё раз, теперь к числам $x=ab$, $y=bc$, $z=ca$: $$a^{2}b^{2}+b^{2}c^{2}+c^{2}a^{2}\\ \\ge\\ ab\\cdot bc+bc\\cdot ca+ca\\cdot ab=ab^{2}c+abc^{2}+a^{2}bc=abc\\,(a+b+c).$$\\n\\nСоединяя два шага по транзитивности, получаем требуемое. Заметим, что оба шага верны для **любых** вещественных чисел, так как неравенство $x^{2}+y^{2}+z^{2}\\ge xy+yz+zx$ не требует положительности.\\n\\nРавенство достигается при $a^{2}=b^{2}=c^{2}$ и $ab=bc=ca$ одновременно, то есть при $a=b=c$. $\\blacksquare$",
    "en": "**Step 1.** Apply $x^{2}+y^{2}+z^{2}\\ge xy+yz+zx$ to $x=a^{2}$, $y=b^{2}$, $z=c^{2}$: $$a^{4}+b^{4}+c^{4}\\ \\ge\\ a^{2}b^{2}+b^{2}c^{2}+c^{2}a^{2}.$$\\n\\n**Step 2.** Apply the same inequality again, now to $x=ab$, $y=bc$, $z=ca$: $$a^{2}b^{2}+b^{2}c^{2}+c^{2}a^{2}\\ \\ge\\ ab\\cdot bc+bc\\cdot ca+ca\\cdot ab=ab^{2}c+abc^{2}+a^{2}bc=abc\\,(a+b+c).$$\\n\\nChaining the two steps by transitivity gives the claim. Note that both steps hold for **all** real numbers, because $x^{2}+y^{2}+z^{2}\\ge xy+yz+zx$ needs no positivity.\\n\\nEquality requires $a^{2}=b^{2}=c^{2}$ and $ab=bc=ca$ at once, that is $a=b=c$. $\\blacksquare$"
   }
  }
 ]
};
