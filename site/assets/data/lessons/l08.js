/* Topic 8 — generated from content/lesson_08.py, do not edit by hand. */
window.LESSONS = window.LESSONS || {};
window.LESSONS[8] = {
 "n": 8,
 "cat": "alg",
 "title": {
  "ru": "Текстовые задачи и системы",
  "en": "Word problems and systems"
 },
 "sub": {
  "ru": "Движение, работа, смеси и проценты: как перевести условие в уравнения и как решать получившиеся системы.",
  "en": "Motion, work, mixtures and percentages: how to turn a story into equations, and how to solve the systems that come out."
 },
 "goals": {
  "ru": [
   "Правильно выбирать неизвестные и составлять уравнения по условию.",
   "Решать задачи на движение, совместную работу, смеси и проценты.",
   "Решать системы подстановкой, сложением и заменой переменных.",
   "Узнавать симметричные системы и сводить их к $s=x+y$ и $p=xy$."
  ],
  "en": [
   "Choose the unknowns well and build the equations from the story.",
   "Solve problems on motion, joint work, mixtures and percentages.",
   "Solve systems by substitution, by adding, and by changing variables.",
   "Recognise symmetric systems and reduce them to $s=x+y$ and $p=xy$."
  ]
 },
 "sections": [
  {
   "h": {
    "ru": "Как переводить условие в уравнения",
    "en": "Turning a story into equations"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Текстовая задача решается в три хода: **обозначить**, **составить**, **решить**. Самый важный — первый: удачный выбор неизвестной делает задачу лёгкой, неудачный — превращает её в мучение.",
      "en": "A word problem is solved in three moves: **name**, **build**, **solve**. The first matters most: a good choice of unknown makes the problem easy, a bad one turns it into a slog."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Правила выбора неизвестной",
      "en": "Choosing the unknown"
     },
     "text": {
      "ru": "**1)** Обозначайте буквой то, что спрашивают, — если только это не приводит к громоздким выражениям.\\n\\n**2)** Если величины связаны («на $5$ больше», «вдвое меньше»), вводите **одну** переменную, а остальные выражайте через неё.\\n\\n**3)** В задачах на работу удобнее обозначать не время, а **производительность** — долю работы за единицу времени.\\n\\n**4)** Записывайте сразу, в каких единицах меряется каждая величина: половина ошибок — это часы, сложенные с километрами.",
      "en": "**1)** Let the letter stand for what is asked — unless that makes the expressions unwieldy.\\n\\n**2)** If quantities are related (\"five more\", \"half as many\"), introduce **one** variable and express the rest through it.\\n\\n**3)** In work problems it is better to name the **rate** — the fraction of the job done per unit time — rather than the time.\\n\\n**4)** Write down the units of every quantity at once: half of all mistakes are hours added to kilometres."
     }
    },
    {
     "t": "table",
     "head": {
      "ru": [
       "Тип задачи",
       "Основное соотношение",
       "Что удобно обозначить"
      ],
      "en": [
       "Kind of problem",
       "The governing relation",
       "What to name"
      ]
     },
     "rows": {
      "ru": [
       [
        "движение",
        "$s=v\\,t$",
        "скорость или время"
       ],
       [
        "совместная работа",
        "$A=p\\,t$, где $p$ — производительность",
        "производительность $p=\\frac1t$"
       ],
       [
        "смеси и растворы",
        "масса вещества $=$ концентрация $\\times$ масса раствора",
        "массу чистого вещества"
       ],
       [
        "проценты",
        "$p\\%$ от $A$ равно $\\frac{p}{100}A$",
        "исходную величину"
       ],
       [
        "части и доли",
        "сумма частей равна целому",
        "величину одной части"
       ]
      ],
      "en": [
       [
        "motion",
        "$s=v\\,t$",
        "a speed or a time"
       ],
       [
        "joint work",
        "$A=p\\,t$, where $p$ is the rate",
        "the rate $p=\\frac1t$"
       ],
       [
        "mixtures",
        "amount of substance $=$ concentration $\\times$ total mass",
        "the mass of pure substance"
       ],
       [
        "percentages",
        "$p\\%$ of $A$ equals $\\frac{p}{100}A$",
        "the original quantity"
       ],
       [
        "parts and shares",
        "the parts add up to the whole",
        "the size of one part"
       ]
      ]
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "В клетке сидят кролики и фазаны. Всего у них $35$ голов и $94$ ноги. Сколько в клетке кроликов?",
      "en": "A cage holds rabbits and pheasants. Together they have $35$ heads and $94$ legs. How many rabbits are there?"
     },
     "steps": {
      "ru": [
       "Пусть кроликов $x$, фазанов $y$. У кролика $4$ ноги, у фазана $2$.",
       "Голов: $x+y=35$. Ног: $4x+2y=94$.",
       "Из первого уравнения $y=35-x$; подставим во второе: $4x+2(35-x)=94$.",
       "$4x+70-2x=94$, то есть $2x=24$ и $x=12$.",
       "Тогда $y=23$. Проверка: $12+23=35$ ✓ и $48+46=94$ ✓"
      ],
      "en": [
       "Let there be $x$ rabbits and $y$ pheasants. A rabbit has $4$ legs, a pheasant $2$.",
       "Heads: $x+y=35$. Legs: $4x+2y=94$.",
       "From the first, $y=35-x$; substitute into the second: $4x+2(35-x)=94$.",
       "$4x+70-2x=94$, so $2x=24$ and $x=12$.",
       "Then $y=23$. Check: $12+23=35$ ✓ and $48+46=94$ ✓"
      ]
     },
     "ans": {
      "ru": "$12$ кроликов (и $23$ фазана).",
      "en": "$12$ rabbits (and $23$ pheasants)."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Приём «поставим всех на две ноги»",
      "en": "The \"everyone stand on two legs\" trick"
     },
     "text": {
      "ru": "Ту же задачу решают устно. Если бы все $35$ животных были фазанами, ног было бы $70$. Лишних ног $94-70=24$, и каждый кролик добавляет ровно две лишние ноги. Значит кроликов $24:2=12$. Такие рассуждения «от избытка» часто заменяют целую систему.",
      "en": "The same problem can be done in your head. If all $35$ animals were pheasants there would be $70$ legs. The surplus is $94-70=24$, and each rabbit contributes exactly two extra legs. So there are $24:2=12$ rabbits. Arguments \"from the surplus\" often replace a whole system."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Задачи на движение",
    "en": "Motion problems"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Всё держится на одной формуле $s=vt$. Разница между задачами — в том, какие именно скорости надо складывать.",
      "en": "Everything rests on the single formula $s=vt$. What differs between problems is which speeds have to be combined."
     }
    },
    {
     "t": "ul",
     "items": {
      "ru": [
       "**Навстречу друг другу.** Расстояние сокращается со скоростью $v_1+v_2$; время до встречи равно $\\dfrac{s}{v_1+v_2}$.",
       "**Вдогонку.** Разрыв сокращается со скоростью $v_1-v_2$; время догона равно $\\dfrac{s_0}{v_1-v_2}$, где $s_0$ — начальный разрыв.",
       "**По реке.** По течению скорость равна $v+u$, против течения $v-u$, где $v$ — собственная скорость, $u$ — скорость течения.",
       "**Средняя скорость** — это **не** среднее арифметическое скоростей: $v_{\\text{ср}}=\\dfrac{\\text{весь путь}}{\\text{всё время}}$."
      ],
      "en": [
       "**Towards each other.** The gap shrinks at speed $v_1+v_2$; the time to meet is $\\dfrac{s}{v_1+v_2}$.",
       "**Chasing.** The gap shrinks at speed $v_1-v_2$; the catch-up time is $\\dfrac{s_0}{v_1-v_2}$, where $s_0$ is the head start.",
       "**On a river.** Downstream the speed is $v+u$, upstream $v-u$, where $v$ is the still-water speed and $u$ the current.",
       "**Average speed** is **not** the average of the speeds: $v_{\\text{avg}}=\\dfrac{\\text{whole distance}}{\\text{whole time}}$."
      ]
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Лодка проходит $20$ км по течению за $2$ часа, а те же $20$ км против течения — за $4$ часа. Найдите собственную скорость лодки и скорость течения.",
      "en": "A boat covers $20$ km downstream in $2$ hours and the same $20$ km upstream in $4$ hours. Find the boat’s own speed and the speed of the current."
     },
     "steps": {
      "ru": [
       "Пусть $v$ — собственная скорость лодки, $u$ — скорость течения (км/ч).",
       "По течению: $\\dfrac{20}{v+u}=2$, то есть $v+u=10$.",
       "Против течения: $\\dfrac{20}{v-u}=4$, то есть $v-u=5$.",
       "Складываем: $2v=15$, значит $v=7{,}5$.",
       "Вычитаем: $2u=5$, значит $u=2{,}5$.",
       "Проверка: $\\tfrac{20}{10}=2$ ✓ и $\\tfrac{20}{5}=4$ ✓"
      ],
      "en": [
       "Let $v$ be the boat’s own speed and $u$ the current (km/h).",
       "Downstream: $\\dfrac{20}{v+u}=2$, so $v+u=10$.",
       "Upstream: $\\dfrac{20}{v-u}=4$, so $v-u=5$.",
       "Adding: $2v=15$, hence $v=7.5$.",
       "Subtracting: $2u=5$, hence $u=2.5$.",
       "Check: $\\tfrac{20}{10}=2$ ✓ and $\\tfrac{20}{5}=4$ ✓"
      ]
     },
     "ans": {
      "ru": "Скорость лодки $7{,}5$ км/ч, скорость течения $2{,}5$ км/ч.",
      "en": "The boat’s speed is $7.5$ km/h and the current is $2.5$ km/h."
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Классическая ловушка: «половину пути автомобиль ехал со скоростью $60$, вторую половину — со скоростью $40$; какова средняя скорость?» Ответ **не** $50$. Пусть весь путь равен $2s$. Время равно $\\tfrac{s}{60}+\\tfrac{s}{40}=\\tfrac{2s+3s}{120}=\\tfrac{5s}{120}$, поэтому $$v_{\\text{ср}}=\\frac{2s}{\\frac{5s}{120}}=\\frac{240}{5}=48 .$$ Это гармоническое среднее — а оно всегда меньше арифметического.",
      "en": "The classic trap: \"a car drove half the distance at $60$ and the other half at $40$; what is the average speed?\" The answer is **not** $50$. Let the whole distance be $2s$. The time is $\\tfrac{s}{60}+\\tfrac{s}{40}=\\tfrac{2s+3s}{120}=\\tfrac{5s}{120}$, so $$v_{\\text{avg}}=\\frac{2s}{\\frac{5s}{120}}=\\frac{240}{5}=48 .$$ That is the harmonic mean — always less than the arithmetic one."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Задачи на совместную работу",
    "en": "Joint work problems"
   },
   "blocks": [
    {
     "t": "idea",
     "name": {
      "ru": "Главный приём",
      "en": "The main move"
     },
     "text": {
      "ru": "Всю работу принимают за **единицу**. Если рабочий выполняет её за $t$ часов, то за час он делает $\\dfrac1t$ работы — это его **производительность**. Производительности при совместной работе **складываются**: $$\\frac1{t_1}+\\frac1{t_2}=\\frac1{T}.$$ Обратите внимание: складываются именно $\\tfrac1t$, а не $t$.",
      "en": "Take the whole job to be **one unit**. If a worker finishes it in $t$ hours, then in one hour they do $\\dfrac1t$ of it — that is their **rate**. Rates **add** when people work together: $$\\frac1{t_1}+\\frac1{t_2}=\\frac1{T}.$$ Note it is the $\\tfrac1t$ that add, not the $t$."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Один рабочий выполняет заказ за $6$ часов, второй — за $12$. За какое время они выполнят заказ вместе?",
      "en": "One worker completes an order in $6$ hours and another in $12$. How long do they take working together?"
     },
     "steps": {
      "ru": [
       "Производительность первого $\\tfrac16$ заказа в час, второго $\\tfrac1{12}$.",
       "Вместе за час: $\\tfrac16+\\tfrac1{12}=\\tfrac{2+1}{12}=\\tfrac14$ заказа.",
       "Значит весь заказ — за $T=4$ часа."
      ],
      "en": [
       "The first has rate $\\tfrac16$ of the order per hour, the second $\\tfrac1{12}$.",
       "Together, per hour: $\\tfrac16+\\tfrac1{12}=\\tfrac{2+1}{12}=\\tfrac14$ of the order.",
       "So the whole order takes $T=4$ hours."
      ]
     },
     "ans": {
      "ru": "За $4$ часа.",
      "en": "In $4$ hours."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Общая формула для двоих: $T=\\dfrac{t_1t_2}{t_1+t_2}$ — то есть половина гармонического среднего. Проверьте на примере: $\\dfrac{6\\cdot12}{18}=4$ ✓",
      "en": "The general formula for two: $T=\\dfrac{t_1t_2}{t_1+t_2}$ — half the harmonic mean. Check it on the example: $\\dfrac{6\\cdot12}{18}=4$ ✓"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Две трубы, работая вместе, наполняют бассейн за $6$ часов. Первая труба наполняет бассейн на $5$ часов быстрее второй. За какое время наполнит бассейн каждая труба в отдельности?",
      "en": "Two pipes together fill a pool in $6$ hours. The first fills it $5$ hours faster than the second. How long does each pipe take alone?"
     },
     "steps": {
      "ru": [
       "Пусть первая труба наполняет бассейн за $x$ часов, тогда вторая — за $x+5$.",
       "Складываем производительности: $$\\frac1x+\\frac1{x+5}=\\frac16 .$$",
       "Умножаем обе части на $6x(x+5)$: $$6(x+5)+6x=x(x+5),\\qquad 12x+30=x^{2}+5x .$$",
       "$x^{2}-7x-30=0$; дискриминант $49+120=169$, корни $x=\\dfrac{7\\pm13}{2}$, то есть $x=10$ или $x=-3$.",
       "Отрицательное время не годится, значит $x=10$.",
       "Проверка: $\\tfrac1{10}+\\tfrac1{15}=\\tfrac{3+2}{30}=\\tfrac16$ ✓"
      ],
      "en": [
       "Let the first pipe take $x$ hours, so the second takes $x+5$.",
       "Add the rates: $$\\frac1x+\\frac1{x+5}=\\frac16 .$$",
       "Multiply both sides by $6x(x+5)$: $$6(x+5)+6x=x(x+5),\\qquad 12x+30=x^{2}+5x .$$",
       "$x^{2}-7x-30=0$; the discriminant is $49+120=169$ and the roots are $x=\\dfrac{7\\pm13}{2}$, that is $x=10$ or $x=-3$.",
       "A negative time is impossible, so $x=10$.",
       "Check: $\\tfrac1{10}+\\tfrac1{15}=\\tfrac{3+2}{30}=\\tfrac16$ ✓"
      ]
     },
     "ans": {
      "ru": "Первая труба — за $10$ часов, вторая — за $15$.",
      "en": "The first pipe takes $10$ hours, the second $15$."
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Найдя корни квадратного уравнения, **всегда** проверяйте их на осмысленность. Отрицательное время, отрицательная масса, концентрация больше $100\\%$ — всё это посторонние корни, и за неотброшенный посторонний корень снимают баллы.",
      "en": "Having found the roots of a quadratic, **always** test them against the story. A negative time, a negative mass, a concentration above $100\\%$ — these are extraneous roots, and leaving one in costs marks."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Смеси, растворы и проценты",
    "en": "Mixtures, solutions and percentages"
   },
   "blocks": [
    {
     "t": "idea",
     "name": {
      "ru": "Считайте чистое вещество",
      "en": "Count the pure substance"
     },
     "text": {
      "ru": "В задачах на растворы почти всегда работает одно правило: **масса чистого вещества сохраняется**. Составьте два столбца — «всего раствора» и «чистого вещества» — и запишите баланс по второму столбцу. Вода при этом добавляет массу раствору и ничего не добавляет веществу.",
      "en": "In solution problems one rule almost always does the work: **the mass of pure substance is conserved**. Make two columns — \"total solution\" and \"pure substance\" — and write the balance for the second. Water adds to the total and nothing to the substance."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Смешали $3$ литра $20$-процентного раствора и $2$ литра $45$-процентного. Какова концентрация полученной смеси?",
      "en": "Three litres of a $20\\%$ solution are mixed with two litres of a $45\\%$ solution. What is the concentration of the mixture?"
     },
     "steps": {
      "ru": [
       "Чистого вещества в первом растворе: $3\\cdot0{,}20=0{,}6$ л.",
       "Во втором: $2\\cdot0{,}45=0{,}9$ л.",
       "Всего вещества $0{,}6+0{,}9=1{,}5$ л, всего раствора $3+2=5$ л.",
       "Концентрация: $\\dfrac{1{,}5}{5}=0{,}3$, то есть $30\\%$."
      ],
      "en": [
       "Pure substance in the first solution: $3\\cdot0.20=0.6$ L.",
       "In the second: $2\\cdot0.45=0.9$ L.",
       "Total substance $0.6+0.9=1.5$ L, total solution $3+2=5$ L.",
       "Concentration: $\\dfrac{1.5}{5}=0.3$, that is $30\\%$."
      ]
     },
     "ans": {
      "ru": "$30\\%$.",
      "en": "$30\\%$."
     }
    },
    {
     "t": "p",
     "text": {
      "ru": "С процентами связана самая частая ошибка школьных задач: **проценты нельзя складывать, если они берутся от разных величин**.",
      "en": "Percentages carry the commonest mistake in school problems: **percentages cannot be added when they are taken from different quantities**."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Цену товара сначала повысили на $20\\%$, а затем новую цену снизили на $20\\%$. Как изменилась цена по сравнению с исходной?",
      "en": "A price is first raised by $20\\%$ and then the new price is cut by $20\\%$. How does the final price compare with the original?"
     },
     "steps": {
      "ru": [
       "Пусть исходная цена равна $P$.",
       "После повышения: $P\\cdot1{,}2$.",
       "После снижения: $P\\cdot1{,}2\\cdot0{,}8=P\\cdot0{,}96$.",
       "Значит цена стала на $4\\%$ **меньше** исходной.",
       "Причина: $20\\%$ прибавляли от $P$, а вычитали уже от большей величины $1{,}2P$."
      ],
      "en": [
       "Let the original price be $P$.",
       "After the rise: $P\\cdot1.2$.",
       "After the cut: $P\\cdot1.2\\cdot0.8=P\\cdot0.96$.",
       "So the price is $4\\%$ **lower** than at the start.",
       "The reason: the $20\\%$ was added to $P$ but subtracted from the larger quantity $1.2P$."
      ]
     },
     "ans": {
      "ru": "Цена уменьшилась на $4\\%$.",
      "en": "The price fell by $4\\%$."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Удобный язык: изменение на $p\\%$ — это умножение на коэффициент $1+\\tfrac{p}{100}$. Несколько изменений подряд — это произведение коэффициентов. Например, три подорожания по $10\\%$ дают коэффициент $1{,}1^{3}=1{,}331$, то есть рост на $33{,}1\\%$, а вовсе не на $30\\%$.",
      "en": "A convenient language: a change of $p\\%$ means multiplying by the factor $1+\\tfrac{p}{100}$. Several changes in a row multiply their factors. Three successive rises of $10\\%$ give the factor $1.1^{3}=1.331$, a rise of $33.1\\%$ rather than $30\\%$."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Системы уравнений",
    "en": "Systems of equations"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Три основных способа: **подстановка**, **сложение (или вычитание)** уравнений и **замена переменных**. Выбор зависит от вида системы.",
      "en": "Three main methods: **substitution**, **adding or subtracting** the equations, and **changing variables**. Which to use depends on the shape of the system."
     }
    },
    {
     "t": "ul",
     "items": {
      "ru": [
       "**Подстановка** — когда из одного уравнения легко выразить переменную.",
       "**Сложение/вычитание** — когда коэффициенты при какой-то переменной удаётся сделать противоположными.",
       "**Замена** — когда в системе повторяются одинаковые выражения; их и обозначают новой буквой."
      ],
      "en": [
       "**Substitution** — when one equation easily gives one variable in terms of the other.",
       "**Adding/subtracting** — when the coefficients of some variable can be made opposite.",
       "**Changing variables** — when the same expression recurs; give it a new letter."
      ]
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Симметричные системы",
      "en": "Symmetric systems"
     },
     "text": {
      "ru": "Если система не меняется при перестановке $x$ и $y$, введите $$s=x+y,\\qquad p=xy .$$ Любое симметричное выражение записывается через $s$ и $p$, а сами $x$ и $y$ восстанавливаются как корни уравнения $$t^{2}-st+p=0 .$$",
      "en": "If a system is unchanged when $x$ and $y$ are swapped, introduce $$s=x+y,\\qquad p=xy .$$ Every symmetric expression is expressible through $s$ and $p$, and $x,y$ themselves are recovered as the roots of $$t^{2}-st+p=0 .$$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Решите систему $$x^{2}+y^{2}=25,\\qquad x+y=7 .$$",
      "en": "Solve the system $$x^{2}+y^{2}=25,\\qquad x+y=7 .$$"
     },
     "steps": {
      "ru": [
       "Система симметрична, поэтому переходим к $s=x+y=7$ и $p=xy$.",
       "$x^{2}+y^{2}=s^{2}-2p=49-2p$, а по условию это $25$.",
       "Значит $2p=24$ и $p=12$.",
       "Числа $x,y$ — корни уравнения $t^{2}-7t+12=0$, то есть $t=3$ и $t=4$.",
       "Проверка: $9+16=25$ ✓ и $3+4=7$ ✓"
      ],
      "en": [
       "The system is symmetric, so pass to $s=x+y=7$ and $p=xy$.",
       "$x^{2}+y^{2}=s^{2}-2p=49-2p$, and this equals $25$.",
       "Hence $2p=24$ and $p=12$.",
       "So $x,y$ are the roots of $t^{2}-7t+12=0$, that is $t=3$ and $t=4$.",
       "Check: $9+16=25$ ✓ and $3+4=7$ ✓"
      ]
     },
     "ans": {
      "ru": "$(x,y)=(3,4)$ и $(4,3)$.",
      "en": "$(x,y)=(3,4)$ and $(4,3)$."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Системы с тремя переменными",
      "en": "Systems in three variables"
     },
     "text": {
      "ru": "Для симметричных систем от трёх переменных работают величины $$\\sigma_1=x+y+z,\\qquad\\sigma_2=xy+yz+zx,\\qquad\\sigma_3=xyz,$$ а сами числа восстанавливаются как корни кубического уравнения $$t^{3}-\\sigma_1t^{2}+\\sigma_2t-\\sigma_3=0 .$$ Если коэффициенты целые, целые корни ищут среди делителей $\\sigma_3$.",
      "en": "For symmetric systems in three variables the working quantities are $$\\sigma_1=x+y+z,\\qquad\\sigma_2=xy+yz+zx,\\qquad\\sigma_3=xyz,$$ and the numbers themselves are the roots of the cubic $$t^{3}-\\sigma_1t^{2}+\\sigma_2t-\\sigma_3=0 .$$ With integer coefficients, look for integer roots among the divisors of $\\sigma_3$."
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
    "ru": "Из города выехал велосипедист со скоростью $12$ км/ч. Через час вслед за ним выехал мотоциклист со скоростью $40$ км/ч. Через сколько часов после своего выезда мотоциклист догонит велосипедиста?",
    "en": "A cyclist leaves a town at $12$ km/h. An hour later a motorcyclist sets off after them at $40$ km/h. How many hours after starting does the motorcyclist catch up?"
   },
   "hint": {
    "ru": "Начальный разрыв равен $12$ км, разрыв сокращается со скоростью $40-12$.",
    "en": "The head start is $12$ km and the gap shrinks at $40-12$ km/h."
   },
   "sol": {
    "ru": "За час велосипедист успел проехать $12$ км — это начальный разрыв. Дальше разрыв сокращается со скоростью $$40-12=28\\ \\text{км/ч}.$$ Время догона: $$t=\\frac{12}{28}=\\frac37\\ \\text{часа}\\approx26\\ \\text{минут}.$$ **Проверка:** мотоциклист проедет $40\\cdot\\tfrac37=\\tfrac{120}{7}$ км, а велосипедист к этому моменту будет в пути $1+\\tfrac37=\\tfrac{10}{7}$ часа и проедет $12\\cdot\\tfrac{10}{7}=\\tfrac{120}{7}$ км ✓",
    "en": "In one hour the cyclist covers $12$ km — that is the head start. After that the gap shrinks at $$40-12=28\\ \\text{km/h}.$$ The catch-up time is $$t=\\frac{12}{28}=\\frac37\\ \\text{hours}\\approx26\\ \\text{minutes}.$$ **Check:** the motorcyclist covers $40\\cdot\\tfrac37=\\tfrac{120}{7}$ km, while the cyclist has then been riding $1+\\tfrac37=\\tfrac{10}{7}$ hours and covered $12\\cdot\\tfrac{10}{7}=\\tfrac{120}{7}$ km ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Решите систему $$2x+3y=13,\\qquad 5x-y=7 .$$",
    "en": "Solve the system $$2x+3y=13,\\qquad 5x-y=7 .$$"
   },
   "hint": {
    "ru": "Из второго уравнения легко выразить $y$.",
    "en": "The second equation gives $y$ at once."
   },
   "sol": {
    "ru": "Из второго уравнения $y=5x-7$. Подставим в первое: $$2x+3(5x-7)=13,\\qquad 2x+15x-21=13,\\qquad 17x=34,\\qquad x=2 .$$ Тогда $y=5\\cdot2-7=3$.\\n\\n**Проверка:** $4+9=13$ ✓ и $10-3=7$ ✓ **Ответ:** $(x,y)=(2,3)$.",
    "en": "The second equation gives $y=5x-7$. Substituting into the first: $$2x+3(5x-7)=13,\\qquad 2x+15x-21=13,\\qquad 17x=34,\\qquad x=2 .$$ Then $y=5\\cdot2-7=3$.\\n\\n**Check:** $4+9=13$ ✓ and $10-3=7$ ✓ **Answer:** $(x,y)=(2,3)$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Сколько литров воды нужно добавить к $40$ литрам $30$-процентного раствора соли, чтобы получить $20$-процентный?",
    "en": "How many litres of water must be added to $40$ litres of a $30\\%$ salt solution to obtain a $20\\%$ one?"
   },
   "hint": {
    "ru": "Соли в растворе не прибавится.",
    "en": "The amount of salt does not change."
   },
   "sol": {
    "ru": "Соли в исходном растворе: $40\\cdot0{,}3=12$ литров. Вода соли не добавляет, поэтому после добавления $x$ литров воды соли по-прежнему $12$, а всего раствора $40+x$.\\n\\nУсловие: $$\\frac{12}{40+x}=0{,}2\\quad\\Longrightarrow\\quad 40+x=\\frac{12}{0{,}2}=60\\quad\\Longrightarrow\\quad x=20 .$$ **Ответ:** $20$ литров. *Проверка:* $\\tfrac{12}{60}=0{,}2$ ✓",
    "en": "Salt in the original solution: $40\\cdot0.3=12$ litres. Water adds no salt, so after adding $x$ litres of water there are still $12$ litres of salt in $40+x$ litres of solution.\\n\\nThe condition: $$\\frac{12}{40+x}=0.2\\quad\\Longrightarrow\\quad 40+x=\\frac{12}{0.2}=60\\quad\\Longrightarrow\\quad x=20 .$$ **Answer:** $20$ litres. *Check:* $\\tfrac{12}{60}=0.2$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Отцу сейчас втрое больше лет, чем сыну, а через $12$ лет будет вдвое больше. Сколько лет каждому сейчас?",
    "en": "A father is now three times as old as his son, and in $12$ years he will be twice as old. How old is each now?"
   },
   "hint": {
    "ru": "Обозначьте возраст сына через $s$.",
    "en": "Let the son’s age be $s$."
   },
   "sol": {
    "ru": "Пусть сыну $s$ лет, тогда отцу $3s$. Через $12$ лет им будет $s+12$ и $3s+12$, и по условию $$3s+12=2(s+12)=2s+24 .$$ Отсюда $s=12$, а отцу $36$ лет.\\n\\n**Проверка:** через $12$ лет будет $24$ и $48$ — ровно вдвое ✓ **Ответ:** сыну $12$ лет, отцу $36$.",
    "en": "Let the son be $s$ years old, so the father is $3s$. In $12$ years they will be $s+12$ and $3s+12$, and by hypothesis $$3s+12=2(s+12)=2s+24 .$$ Hence $s=12$ and the father is $36$.\\n\\n**Check:** in $12$ years they will be $24$ and $48$ — exactly double ✓ **Answer:** the son is $12$, the father $36$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Сумма трёх чисел равна $130$. Второе на $10$ больше первого, а третье вдвое больше второго. Найдите эти числа.",
    "en": "Three numbers add up to $130$. The second is $10$ more than the first, and the third is twice the second. Find the numbers."
   },
   "hint": {
    "ru": "Введите одну переменную — первое число.",
    "en": "Introduce one variable — the first number."
   },
   "sol": {
    "ru": "Пусть первое число равно $x$. Тогда второе равно $x+10$, третье равно $2(x+10)=2x+20$.\\n\\nСумма: $$x+(x+10)+(2x+20)=130,\\qquad 4x+30=130,\\qquad 4x=100,\\qquad x=25 .$$ Значит числа равны $25$, $35$ и $70$.\\n\\n**Проверка:** $25+35+70=130$ ✓, $35=25+10$ ✓, $70=2\\cdot35$ ✓",
    "en": "Let the first number be $x$. Then the second is $x+10$ and the third is $2(x+10)=2x+20$.\\n\\nTheir sum: $$x+(x+10)+(2x+20)=130,\\qquad 4x+30=130,\\qquad 4x=100,\\qquad x=25 .$$ So the numbers are $25$, $35$ and $70$.\\n\\n**Check:** $25+35+70=130$ ✓, $35=25+10$ ✓, $70=2\\cdot35$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Вклад положили в банк под $10\\%$ годовых. Через два года на счету оказалось $12\\,100$ сум. Какая сумма была вложена?",
    "en": "A deposit earns $10\\%$ a year. After two years the account holds $12{,}100$ soum. How much was deposited?"
   },
   "hint": {
    "ru": "Каждый год сумма умножается на $1{,}1$.",
    "en": "Each year the amount is multiplied by $1.1$."
   },
   "sol": {
    "ru": "Пусть вложено $P$ сум. За каждый год сумма умножается на $1{,}1$, значит через два года на счету $P\\cdot1{,}1^{2}=1{,}21P$.\\n\\nИз $1{,}21P=12\\,100$ получаем $$P=\\frac{12\\,100}{1{,}21}=10\\,000 .$$ **Ответ:** $10\\,000$ сум.\\n\\n*Замечание.* Обратите внимание: за два года сумма выросла на $21\\%$, а не на $20\\%$ — проценты второго года начисляются уже на увеличенную сумму.",
    "en": "Let $P$ be the deposit. Each year the amount is multiplied by $1.1$, so after two years the account holds $P\\cdot1.1^{2}=1.21P$.\\n\\nFrom $1.21P=12{,}100$ we get $$P=\\frac{12{,}100}{1.21}=10{,}000 .$$ **Answer:** $10{,}000$ soum.\\n\\n*Remark.* Note that over two years the sum grew by $21\\%$, not $20\\%$ — the second year’s interest is charged on the already larger amount."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Два города соединены дорогой длиной $300$ км. Из них навстречу друг другу одновременно выехали два автомобиля и встретились через $3$ часа. Скорость одного на $10$ км/ч больше скорости другого. Найдите обе скорости.",
    "en": "Two towns are $300$ km apart. Two cars set off towards each other at the same moment and meet after $3$ hours. One car is $10$ km/h faster than the other. Find both speeds."
   },
   "hint": {
    "ru": "При встречном движении складываются скорости.",
    "en": "Moving towards each other, the speeds add."
   },
   "sol": {
    "ru": "Пусть скорости равны $v_1$ и $v_2$. При встречном движении расстояние сокращается со скоростью $v_1+v_2$, поэтому $$(v_1+v_2)\\cdot3=300\\quad\\Longrightarrow\\quad v_1+v_2=100 .$$ По условию $v_1-v_2=10$.\\n\\nСкладывая: $2v_1=110$, значит $v_1=55$. Вычитая: $2v_2=90$, значит $v_2=45$.\\n\\n**Проверка:** $(55+45)\\cdot3=300$ ✓ **Ответ:** $55$ км/ч и $45$ км/ч.",
    "en": "Let the speeds be $v_1$ and $v_2$. Moving towards each other the gap closes at $v_1+v_2$, so $$(v_1+v_2)\\cdot3=300\\quad\\Longrightarrow\\quad v_1+v_2=100 .$$ By hypothesis $v_1-v_2=10$.\\n\\nAdding: $2v_1=110$, so $v_1=55$. Subtracting: $2v_2=90$, so $v_2=45$.\\n\\n**Check:** $(55+45)\\cdot3=300$ ✓ **Answer:** $55$ km/h and $45$ km/h."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Катер прошёл $42$ км по течению реки и $30$ км против течения, затратив на весь путь $6$ часов. Скорость течения равна $2$ км/ч. Найдите собственную скорость катера.",
    "en": "A motorboat travels $42$ km downstream and $30$ km upstream, spending $6$ hours in all. The current is $2$ km/h. Find the boat’s own speed."
   },
   "hint": {
    "ru": "Сложите два времени и умножьте уравнение на $(v+2)(v-2)$.",
    "en": "Add the two times and multiply the equation by $(v+2)(v-2)$."
   },
   "sol": {
    "ru": "Пусть собственная скорость равна $v$ км/ч. По течению катер идёт со скоростью $v+2$, против течения — со скоростью $v-2$, причём $v>2$.\\n\\nУравнение по времени: $$\\frac{42}{v+2}+\\frac{30}{v-2}=6 .$$ Умножим обе части на $(v+2)(v-2)=v^{2}-4$: $$42(v-2)+30(v+2)=6\\left(v^{2}-4\\right),$$ $$42v-84+30v+60=6v^{2}-24,\\qquad 72v-24=6v^{2}-24 .$$ Свободные члены сокращаются: $$6v^{2}-72v=0,\\qquad 6v(v-12)=0 .$$ Корень $v=0$ не годится, значит $v=12$.\\n\\n**Проверка:** по течению $\\tfrac{42}{14}=3$ часа, против течения $\\tfrac{30}{10}=3$ часа, всего $6$ часов ✓\\n\\n**Ответ:** собственная скорость катера равна $12$ км/ч.",
    "en": "Let the own speed be $v$ km/h. Downstream the boat moves at $v+2$ and upstream at $v-2$, with $v>2$.\\n\\nThe time equation: $$\\frac{42}{v+2}+\\frac{30}{v-2}=6 .$$ Multiply both sides by $(v+2)(v-2)=v^{2}-4$: $$42(v-2)+30(v+2)=6\\left(v^{2}-4\\right),$$ $$42v-84+30v+60=6v^{2}-24,\\qquad 72v-24=6v^{2}-24 .$$ The constants cancel: $$6v^{2}-72v=0,\\qquad 6v(v-12)=0 .$$ The root $v=0$ is impossible, so $v=12$.\\n\\n**Check:** downstream $\\tfrac{42}{14}=3$ hours, upstream $\\tfrac{30}{10}=3$ hours, six hours in all ✓\\n\\n**Answer:** the boat’s own speed is $12$ km/h."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Решите систему $$x+y+xy=11,\\qquad x^{2}y+xy^{2}=30 .$$",
    "en": "Solve the system $$x+y+xy=11,\\qquad x^{2}y+xy^{2}=30 .$$"
   },
   "hint": {
    "ru": "Обозначьте $s=x+y$, $p=xy$; второе уравнение — это $ps$.",
    "en": "Put $s=x+y$, $p=xy$; the second equation is $ps$."
   },
   "sol": {
    "ru": "Обозначим $s=x+y$ и $p=xy$. Тогда $x^{2}y+xy^{2}=xy(x+y)=ps$, и система превращается в $$s+p=11,\\qquad ps=30 .$$ Значит $s$ и $p$ — два числа с суммой $11$ и произведением $30$, то есть корни уравнения $t^{2}-11t+30=0$: это $t=5$ и $t=6$.\\n\\n**Случай $s=5$, $p=6$.** Числа $x,y$ — корни $t^{2}-5t+6=0$, то есть $2$ и $3$.\\n\\n**Случай $s=6$, $p=5$.** Числа $x,y$ — корни $t^{2}-6t+5=0$, то есть $1$ и $5$.\\n\\n**Проверка** для $(1,5)$: $1+5+5=11$ ✓ и $5+25=30$ ✓ Для $(2,3)$: $2+3+6=11$ ✓ и $12+18=30$ ✓\\n\\n**Ответ:** $(2,3),(3,2),(1,5),(5,1)$.",
    "en": "Put $s=x+y$ and $p=xy$. Then $x^{2}y+xy^{2}=xy(x+y)=ps$, and the system becomes $$s+p=11,\\qquad ps=30 .$$ So $s$ and $p$ are two numbers with sum $11$ and product $30$, that is the roots of $t^{2}-11t+30=0$: namely $5$ and $6$.\\n\\n**Case $s=5$, $p=6$.** Then $x,y$ are the roots of $t^{2}-5t+6=0$, namely $2$ and $3$.\\n\\n**Case $s=6$, $p=5$.** Then $x,y$ are the roots of $t^{2}-6t+5=0$, namely $1$ and $5$.\\n\\n**Check** for $(1,5)$: $1+5+5=11$ ✓ and $5+25=30$ ✓ For $(2,3)$: $2+3+6=11$ ✓ and $12+18=30$ ✓\\n\\n**Answer:** $(2,3),(3,2),(1,5),(5,1)$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Имеется два слитка сплава меди и цинка. В первом меди $70\\%$, во втором $40\\%$. Сколько килограммов каждого слитка нужно взять, чтобы получить $12$ кг сплава с содержанием меди $50\\%$?",
    "en": "Two ingots of a copper–zinc alloy contain $70\\%$ and $40\\%$ copper. How many kilograms of each are needed to obtain $12$ kg of an alloy containing $50\\%$ copper?"
   },
   "hint": {
    "ru": "Составьте два уравнения: по общей массе и по массе меди.",
    "en": "Write two equations: total mass and copper mass."
   },
   "sol": {
    "ru": "Пусть взяли $x$ кг первого слитка и $y$ кг второго.\\n\\n**Масса:** $x+y=12$.\\n\\n**Медь:** $0{,}7x+0{,}4y=0{,}5\\cdot12=6$.\\n\\nИз первого $y=12-x$; подставим: $$0{,}7x+0{,}4(12-x)=6,\\qquad 0{,}7x+4{,}8-0{,}4x=6,\\qquad 0{,}3x=1{,}2,\\qquad x=4 .$$ Тогда $y=8$.\\n\\n**Проверка:** меди $0{,}7\\cdot4+0{,}4\\cdot8=2{,}8+3{,}2=6$ кг из $12$ кг, то есть $50\\%$ ✓\\n\\n**Ответ:** $4$ кг первого и $8$ кг второго.",
    "en": "Suppose we take $x$ kg of the first ingot and $y$ kg of the second.\\n\\n**Mass:** $x+y=12$.\\n\\n**Copper:** $0.7x+0.4y=0.5\\cdot12=6$.\\n\\nThe first gives $y=12-x$; substituting, $$0.7x+0.4(12-x)=6,\\qquad 0.7x+4.8-0.4x=6,\\qquad 0.3x=1.2,\\qquad x=4 .$$ Then $y=8$.\\n\\n**Check:** copper $0.7\\cdot4+0.4\\cdot8=2.8+3.2=6$ kg out of $12$ kg, that is $50\\%$ ✓\\n\\n**Answer:** $4$ kg of the first and $8$ kg of the second."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Бригада должна была изготовить $360$ деталей за определённое время. Изготавливая ежедневно на $4$ детали больше плана, бригада закончила работу на $3$ дня раньше срока. Сколько деталей в день планировалось изготавливать?",
    "en": "A team was to make $360$ parts in a certain number of days. Making $4$ parts a day more than planned, the team finished $3$ days early. How many parts a day were planned?"
   },
   "hint": {
    "ru": "Выразите оба срока через дневную норму.",
    "en": "Express both durations through the daily output."
   },
   "sol": {
    "ru": "Пусть по плану делали $x$ деталей в день. Тогда плановый срок равен $\\dfrac{360}{x}$ дней, а фактический — $\\dfrac{360}{x+4}$ дней.\\n\\nПо условию фактический срок на $3$ дня меньше: $$\\frac{360}{x}-\\frac{360}{x+4}=3 .$$ Умножим на $x(x+4)$: $$360(x+4)-360x=3x(x+4),\\qquad 1440=3x^{2}+12x .$$ Делим на $3$: $$x^{2}+4x-480=0 .$$ Дискриминант $16+1920=1936=44^{2}$, корни $$x=\\frac{-4\\pm44}{2}=20\\ \\text{или}\\ -24 .$$ Отрицательный корень отбрасываем.\\n\\n**Проверка:** $\\tfrac{360}{20}=18$ дней по плану, $\\tfrac{360}{24}=15$ дней фактически — на $3$ дня меньше ✓\\n\\n**Ответ:** планировалось $20$ деталей в день.",
    "en": "Suppose the plan was $x$ parts a day. Then the planned duration is $\\dfrac{360}{x}$ days and the actual one $\\dfrac{360}{x+4}$ days.\\n\\nThe actual is $3$ days shorter: $$\\frac{360}{x}-\\frac{360}{x+4}=3 .$$ Multiply by $x(x+4)$: $$360(x+4)-360x=3x(x+4),\\qquad 1440=3x^{2}+12x .$$ Divide by $3$: $$x^{2}+4x-480=0 .$$ The discriminant is $16+1920=1936=44^{2}$, so $$x=\\frac{-4\\pm44}{2}=20\\ \\text{or}\\ -24 .$$ Discard the negative root.\\n\\n**Check:** $\\tfrac{360}{20}=18$ planned days against $\\tfrac{360}{24}=15$ actual — three days fewer ✓\\n\\n**Answer:** $20$ parts a day were planned."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Первая труба наполняет бассейн вдвое быстрее второй. Работая вместе, они наполняют бассейн за $4$ часа. За какое время наполнит бассейн каждая труба в отдельности?",
    "en": "The first pipe fills a pool twice as fast as the second. Together they fill it in $4$ hours. How long does each pipe take alone?"
   },
   "hint": {
    "ru": "«Вдвое быстрее» — это про производительность, а не про время... впрочем, и про время тоже: время вдвое меньше.",
    "en": "\"Twice as fast\" refers to the rate — and hence to half the time."
   },
   "sol": {
    "ru": "Пусть вторая труба наполняет бассейн за $x$ часов, тогда первая — за $\\tfrac x2$ часов (вдвое быстрее).\\n\\nСкладываем производительности: $$\\frac{1}{x/2}+\\frac1x=\\frac14,\\qquad \\frac2x+\\frac1x=\\frac14,\\qquad \\frac3x=\\frac14 .$$ Отсюда $x=12$.\\n\\n**Ответ:** первая труба наполняет бассейн за $6$ часов, вторая — за $12$.\\n\\n**Проверка:** $\\tfrac16+\\tfrac1{12}=\\tfrac{2+1}{12}=\\tfrac14$ ✓",
    "en": "Let the second pipe take $x$ hours; then the first takes $\\tfrac x2$ hours (twice as fast).\\n\\nAdd the rates: $$\\frac{1}{x/2}+\\frac1x=\\frac14,\\qquad \\frac2x+\\frac1x=\\frac14,\\qquad \\frac3x=\\frac14 .$$ Hence $x=12$.\\n\\n**Answer:** the first pipe takes $6$ hours, the second $12$.\\n\\n**Check:** $\\tfrac16+\\tfrac1{12}=\\tfrac{2+1}{12}=\\tfrac14$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Автомобиль проехал первую половину пути со скоростью $60$ км/ч, а вторую — со скоростью $40$ км/ч. Найдите среднюю скорость на всём пути. Изменится ли ответ, если он ехал с этими скоростями **равные промежутки времени**?",
    "en": "A car covered the first half of a route at $60$ km/h and the second half at $40$ km/h. Find the average speed. Does the answer change if instead it drove at those speeds for **equal times**?"
   },
   "hint": {
    "ru": "Средняя скорость — это весь путь, делённый на всё время.",
    "en": "Average speed is the whole distance over the whole time."
   },
   "sol": {
    "ru": "**Равные расстояния.** Пусть весь путь равен $2s$. Время равно $$\\frac{s}{60}+\\frac{s}{40}=\\frac{2s+3s}{120}=\\frac{5s}{120}=\\frac{s}{24}.$$ Значит $$v_{\\text{ср}}=\\frac{2s}{s/24}=48\\ \\text{км/ч}.$$ Это гармоническое среднее скоростей: $\\dfrac{2\\cdot60\\cdot40}{60+40}=48$.\\n\\n**Равные промежутки времени.** Пусть каждый длится $t$. Путь равен $60t+40t=100t$, всё время равно $2t$, поэтому $$v_{\\text{ср}}=\\frac{100t}{2t}=50\\ \\text{км/ч}$$ — теперь это обычное среднее арифметическое.\\n\\n**Ответ:** $48$ км/ч в первом случае и $50$ км/ч во втором. *Замечание:* гармоническое среднее всегда меньше арифметического — в первом случае автомобиль дольше едет медленно.",
    "en": "**Equal distances.** Let the whole route be $2s$. The time is $$\\frac{s}{60}+\\frac{s}{40}=\\frac{2s+3s}{120}=\\frac{5s}{120}=\\frac{s}{24},$$ so $$v_{\\text{avg}}=\\frac{2s}{s/24}=48\\ \\text{km/h}.$$ That is the harmonic mean of the speeds: $\\dfrac{2\\cdot60\\cdot40}{60+40}=48$.\\n\\n**Equal times.** Let each last $t$. The distance is $60t+40t=100t$ and the total time $2t$, so $$v_{\\text{avg}}=\\frac{100t}{2t}=50\\ \\text{km/h}$$ — the ordinary arithmetic mean.\\n\\n**Answer:** $48$ km/h in the first case and $50$ km/h in the second. *Remark:* the harmonic mean is always the smaller — in the first case the car spends longer going slowly."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Решите систему $$\\frac1x+\\frac1y=\\frac56,\\qquad \\frac1{x^{2}}+\\frac1{y^{2}}=\\frac{13}{36}.$$",
    "en": "Solve the system $$\\frac1x+\\frac1y=\\frac56,\\qquad \\frac1{x^{2}}+\\frac1{y^{2}}=\\frac{13}{36}.$$"
   },
   "hint": {
    "ru": "Замена $u=\\tfrac1x$, $v=\\tfrac1y$ делает систему симметричной и привычной.",
    "en": "The substitution $u=\\tfrac1x$, $v=\\tfrac1y$ makes it a familiar symmetric system."
   },
   "sol": {
    "ru": "Положим $u=\\dfrac1x$, $v=\\dfrac1y$. Система принимает вид $$u+v=\\frac56,\\qquad u^{2}+v^{2}=\\frac{13}{36}.$$ Обозначим $s=u+v=\\tfrac56$ и $p=uv$. Тогда $$u^{2}+v^{2}=s^{2}-2p=\\frac{25}{36}-2p=\\frac{13}{36},$$ откуда $2p=\\dfrac{12}{36}=\\dfrac13$ и $p=\\dfrac16$.\\n\\nЧисла $u,v$ — корни уравнения $$t^{2}-\\frac56t+\\frac16=0 .$$ Умножим на $6$: $6t^{2}-5t+1=0$, дискриминант $25-24=1$, корни $t=\\dfrac{5\\pm1}{12}$, то есть $t=\\tfrac12$ и $t=\\tfrac13$.\\n\\nВозвращаемся: $x=\\tfrac1u$ и $y=\\tfrac1v$, значит $\\{x,y\\}=\\{2,3\\}$.\\n\\n**Проверка:** $\\tfrac12+\\tfrac13=\\tfrac56$ ✓ и $\\tfrac14+\\tfrac19=\\tfrac{9+4}{36}=\\tfrac{13}{36}$ ✓",
    "en": "Put $u=\\dfrac1x$, $v=\\dfrac1y$. The system becomes $$u+v=\\frac56,\\qquad u^{2}+v^{2}=\\frac{13}{36}.$$ Write $s=u+v=\\tfrac56$ and $p=uv$. Then $$u^{2}+v^{2}=s^{2}-2p=\\frac{25}{36}-2p=\\frac{13}{36},$$ so $2p=\\dfrac{12}{36}=\\dfrac13$ and $p=\\dfrac16$.\\n\\nThus $u,v$ are the roots of $$t^{2}-\\frac56t+\\frac16=0 .$$ Multiplying by $6$: $6t^{2}-5t+1=0$ with discriminant $25-24=1$ and roots $t=\\dfrac{5\\pm1}{12}$, that is $t=\\tfrac12$ and $t=\\tfrac13$.\\n\\nGoing back, $x=\\tfrac1u$ and $y=\\tfrac1v$, so $\\{x,y\\}=\\{2,3\\}$.\\n\\n**Check:** $\\tfrac12+\\tfrac13=\\tfrac56$ ✓ and $\\tfrac14+\\tfrac19=\\tfrac{9+4}{36}=\\tfrac{13}{36}$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Первая и вторая трубы наполняют бассейн за $12$ часов, вторая и третья — за $15$ часов, первая и третья — за $20$ часов. За какое время наполнят бассейн все три трубы вместе?",
    "en": "Pipes one and two fill a pool in $12$ hours, pipes two and three in $15$ hours, pipes one and three in $20$ hours. How long do all three take together?"
   },
   "hint": {
    "ru": "Сложите все три уравнения для производительностей.",
    "en": "Add all three rate equations."
   },
   "sol": {
    "ru": "Обозначим производительности труб через $a$, $b$, $c$ (доля бассейна в час). По условию $$a+b=\\frac1{12},\\qquad b+c=\\frac1{15},\\qquad a+c=\\frac1{20}.$$\\n\\n**Складываем все три:** $$2(a+b+c)=\\frac1{12}+\\frac1{15}+\\frac1{20}=\\frac{5+4+3}{60}=\\frac{12}{60}=\\frac15 .$$ Значит $$a+b+c=\\frac1{10},$$ то есть втроём трубы наполняют десятую часть бассейна за час, и весь бассейн — за $10$ часов.\\n\\n**Ответ:** за $10$ часов.\\n\\n*Дополнительно.* Вычитая из общей суммы каждое из уравнений, находим и отдельные производительности: $$c=\\frac1{10}-\\frac1{12}=\\frac1{60},\\qquad a=\\frac1{10}-\\frac1{15}=\\frac1{30},\\qquad b=\\frac1{10}-\\frac1{20}=\\frac1{20},$$ то есть трубы поодиночке наполняют бассейн за $30$, $20$ и $60$ часов.",
    "en": "Let the rates be $a$, $b$, $c$ (pools per hour). The hypotheses read $$a+b=\\frac1{12},\\qquad b+c=\\frac1{15},\\qquad a+c=\\frac1{20}.$$\\n\\n**Add all three:** $$2(a+b+c)=\\frac1{12}+\\frac1{15}+\\frac1{20}=\\frac{5+4+3}{60}=\\frac{12}{60}=\\frac15 .$$ Hence $$a+b+c=\\frac1{10},$$ so together they fill one tenth of the pool per hour, and the whole pool in $10$ hours.\\n\\n**Answer:** $10$ hours.\\n\\n*Extra.* Subtracting each equation from the total gives the individual rates: $$c=\\frac1{10}-\\frac1{12}=\\frac1{60},\\qquad a=\\frac1{10}-\\frac1{15}=\\frac1{30},\\qquad b=\\frac1{10}-\\frac1{20}=\\frac1{20},$$ so alone the pipes take $30$, $20$ and $60$ hours."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Два пешехода одновременно вышли навстречу друг другу из пунктов $A$ и $B$. После встречи первый дошёл до $B$ ещё за $4$ часа, а второй дошёл до $A$ ещё за $9$ часов. Через сколько часов после выхода произошла встреча?",
    "en": "Two walkers set off at the same moment from $A$ and $B$ towards each other. After meeting, the first needed $4$ more hours to reach $B$ and the second $9$ more hours to reach $A$. How many hours after the start did they meet?"
   },
   "hint": {
    "ru": "После встречи каждый проходит тот путь, который до встречи прошёл другой.",
    "en": "After the meeting each walks the distance the other had already covered."
   },
   "sol": {
    "ru": "Пусть скорости равны $v_1$ и $v_2$, а встреча произошла через $t$ часов.\\n\\nК моменту встречи первый прошёл $v_1t$, второй — $v_2t$. После встречи первому остаётся ровно тот кусок, который прошёл второй, то есть $v_2t$; он проходит его за $4$ часа: $$\\frac{v_2t}{v_1}=4 .$$ Аналогично для второго: $$\\frac{v_1t}{v_2}=9 .$$\\n\\n**Перемножаем эти два равенства.** Дроби $\\tfrac{v_2}{v_1}$ и $\\tfrac{v_1}{v_2}$ взаимно обратны и сокращаются: $$\\frac{v_2t}{v_1}\\cdot\\frac{v_1t}{v_2}=t^{2}=4\\cdot9=36 .$$ Так как $t>0$, получаем $t=6$.\\n\\n**Ответ:** встреча произошла через $6$ часов.\\n\\n*Проверка:* из $\\tfrac{v_1}{v_2}\\cdot6=9$ следует $\\tfrac{v_1}{v_2}=\\tfrac32$. Возьмём $v_1=3$, $v_2=2$: за $6$ часов они пройдут $18$ и $12$, то есть $AB=30$. Первому останется $12$ — это $4$ часа при скорости $3$ ✓ Второму останется $18$ — это $9$ часов при скорости $2$ ✓\\n\\n*Общая формула:* $t=\\sqrt{t_1t_2}$ — время до встречи есть **геометрическое среднее** оставшихся времён.",
    "en": "Let the speeds be $v_1$ and $v_2$, and let the meeting happen after $t$ hours.\\n\\nBy the meeting the first has walked $v_1t$ and the second $v_2t$. After the meeting the first has left exactly the stretch the second had covered, namely $v_2t$, and walks it in $4$ hours: $$\\frac{v_2t}{v_1}=4 .$$ Similarly for the second: $$\\frac{v_1t}{v_2}=9 .$$\\n\\n**Multiply the two.** The fractions $\\tfrac{v_2}{v_1}$ and $\\tfrac{v_1}{v_2}$ are reciprocals and cancel: $$\\frac{v_2t}{v_1}\\cdot\\frac{v_1t}{v_2}=t^{2}=4\\cdot9=36 .$$ As $t>0$, we get $t=6$.\\n\\n**Answer:** they met after $6$ hours.\\n\\n*Check:* from $\\tfrac{v_1}{v_2}\\cdot6=9$ we get $\\tfrac{v_1}{v_2}=\\tfrac32$. Take $v_1=3$, $v_2=2$: in $6$ hours they cover $18$ and $12$, so $AB=30$. The first has $12$ left — four hours at speed $3$ ✓ The second has $18$ left — nine hours at speed $2$ ✓\\n\\n*General formula:* $t=\\sqrt{t_1t_2}$ — the time to the meeting is the **geometric mean** of the remaining times."
   }
  },
  {
   "src": "Задача Ньютона / Newton, classic",
   "lvl": 3,
   "q": {
    "ru": "Трава на лугу растёт равномерно и одинаково быстро. Известно, что $70$ коров съели бы всю траву за $24$ дня, а $30$ коров — за $60$ дней. Сколько коров съели бы всю траву за $96$ дней?",
    "en": "Grass grows on a meadow uniformly and at a constant rate. It is known that $70$ cows would eat all the grass in $24$ days, and $30$ cows in $60$ days. How many cows would eat all the grass in $96$ days?"
   },
   "hint": {
    "ru": "Не забудьте, что трава продолжает расти, пока коровы едят.",
    "en": "Remember that the grass keeps growing while the cows eat."
   },
   "sol": {
    "ru": "Примем за единицу количество травы, съедаемое одной коровой за один день. Обозначим:\\n\\n$a$ — запас травы на лугу в начальный момент,\\n$r$ — прирост травы за один день.\\n\\nЗа $d$ дней $n$ коров съедают $nd$ единиц, а всего травы за это время оказывается $a+rd$. Условие «съели всю траву за $d$ дней» означает $$nd=a+rd .$$\\n\\n**Составляем уравнения.** $$70\\cdot24=a+24r\\ \\Longrightarrow\\ 1680=a+24r,$$ $$30\\cdot60=a+60r\\ \\Longrightarrow\\ 1800=a+60r .$$\\n\\n**Решаем.** Вычитаем первое из второго: $$120=36r\\quad\\Longrightarrow\\quad r=\\frac{10}{3}.$$ Тогда $$a=1680-24\\cdot\\frac{10}{3}=1680-80=1600 .$$\\n\\n**Отвечаем на вопрос.** Для $d=96$: $$96n=a+96r=1600+96\\cdot\\frac{10}{3}=1600+320=1920,$$ откуда $$n=\\frac{1920}{96}=20 .$$\\n\\n**Ответ:** $20$ коров.\\n\\n*Замечание.* Эта задача — из «Всеобщей арифметики» Ньютона. Её главная идея: величина, которая **пополняется во время процесса**, должна входить в баланс отдельным слагаемым, пропорциональным времени.",
    "en": "Take as the unit the amount of grass one cow eats in one day. Write:\\n\\n$a$ for the grass present at the start,\\n$r$ for the daily growth.\\n\\nIn $d$ days $n$ cows eat $nd$ units, while the total grass available over that time is $a+rd$. \"They finish the grass in $d$ days\" means $$nd=a+rd .$$\\n\\n**Set up the equations.** $$70\\cdot24=a+24r\\ \\Longrightarrow\\ 1680=a+24r,$$ $$30\\cdot60=a+60r\\ \\Longrightarrow\\ 1800=a+60r .$$\\n\\n**Solve.** Subtracting the first from the second, $$120=36r\\quad\\Longrightarrow\\quad r=\\frac{10}{3},$$ and then $$a=1680-24\\cdot\\frac{10}{3}=1680-80=1600 .$$\\n\\n**Answer the question.** For $d=96$: $$96n=a+96r=1600+96\\cdot\\frac{10}{3}=1600+320=1920,$$ so $$n=\\frac{1920}{96}=20 .$$\\n\\n**Answer:** $20$ cows.\\n\\n*Remark.* The problem comes from Newton’s *Arithmetica Universalis*. Its main idea: a quantity that is **replenished during the process** must enter the balance as its own term, proportional to time."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Решите систему $$x+y+z=6,\\qquad xy+yz+zx=11,\\qquad xyz=6 .$$",
    "en": "Solve the system $$x+y+z=6,\\qquad xy+yz+zx=11,\\qquad xyz=6 .$$"
   },
   "hint": {
    "ru": "Это в точности коэффициенты кубического уравнения по теореме Виета.",
    "en": "These are exactly the coefficients of a cubic, by Vieta."
   },
   "sol": {
    "ru": "По теореме Виета числа $x,y,z$ — корни кубического уравнения $$t^{3}-\\sigma_1t^{2}+\\sigma_2t-\\sigma_3=0,$$ где $\\sigma_1=6$, $\\sigma_2=11$, $\\sigma_3=6$. То есть $$t^{3}-6t^{2}+11t-6=0 .$$\\n\\n**Ищем корни.** Целые корни — среди делителей свободного члена $6$: это $\\pm1,\\pm2,\\pm3,\\pm6$. Подставляем: $$f(1)=1-6+11-6=0\\ \\checkmark$$ Делим на $t-1$: $$t^{3}-6t^{2}+11t-6=(t-1)\\left(t^{2}-5t+6\\right)=(t-1)(t-2)(t-3).$$\\n\\n**Ответ:** $\\{x,y,z\\}=\\{1,2,3\\}$ в любом порядке — всего $6$ упорядоченных троек.\\n\\n**Проверка:** $1+2+3=6$ ✓, $2+6+3=11$ ✓, $1\\cdot2\\cdot3=6$ ✓",
    "en": "By Vieta the numbers $x,y,z$ are the roots of the cubic $$t^{3}-\\sigma_1t^{2}+\\sigma_2t-\\sigma_3=0,$$ with $\\sigma_1=6$, $\\sigma_2=11$, $\\sigma_3=6$, that is $$t^{3}-6t^{2}+11t-6=0 .$$\\n\\n**Find the roots.** Integer roots lie among the divisors of the constant term $6$: $\\pm1,\\pm2,\\pm3,\\pm6$. Testing, $$f(1)=1-6+11-6=0\\ \\checkmark$$ Dividing by $t-1$: $$t^{3}-6t^{2}+11t-6=(t-1)\\left(t^{2}-5t+6\\right)=(t-1)(t-2)(t-3).$$\\n\\n**Answer:** $\\{x,y,z\\}=\\{1,2,3\\}$ in any order — six ordered triples in all.\\n\\n**Check:** $1+2+3=6$ ✓, $2+6+3=11$ ✓, $1\\cdot2\\cdot3=6$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Из пункта $A$ в пункт $B$ выехали одновременно два автомобиля. Первый проехал первую половину **пути** со скоростью $40$ км/ч, а вторую — со скоростью $60$ км/ч. Второй же половину **времени** ехал со скоростью $40$ км/ч, а другую половину — со скоростью $60$ км/ч. Кто приехал раньше и во сколько раз отличаются их времена в пути?",
    "en": "Two cars leave $A$ for $B$ at the same moment. The first drives half the **distance** at $40$ km/h and the other half at $60$ km/h. The second drives half the **time** at $40$ km/h and the other half at $60$ km/h. Which arrives first, and what is the ratio of their travel times?"
   },
   "hint": {
    "ru": "Посчитайте среднюю скорость каждого: одна из них гармоническое среднее, другая арифметическое.",
    "en": "Compute each average speed: one is the harmonic mean, the other the arithmetic mean."
   },
   "sol": {
    "ru": "Пусть длина пути равна $S$.\\n\\n**Первый автомобиль.** Время равно $$T_1=\\frac{S/2}{40}+\\frac{S/2}{60}=\\frac S2\\left(\\frac1{40}+\\frac1{60}\\right)=\\frac S2\\cdot\\frac{3+2}{120}=\\frac{S}{48}.$$ Его средняя скорость — гармоническое среднее: $48$ км/ч.\\n\\n**Второй автомобиль.** Пусть весь путь занял $T_2$; тогда $$S=40\\cdot\\frac{T_2}{2}+60\\cdot\\frac{T_2}{2}=50\\,T_2\\quad\\Longrightarrow\\quad T_2=\\frac{S}{50}.$$ Его средняя скорость — арифметическое среднее: $50$ км/ч.\\n\\n**Сравнение.** $$\\frac{T_1}{T_2}=\\frac{S/48}{S/50}=\\frac{50}{48}=\\frac{25}{24}\\approx1{,}042 .$$ Значит первый автомобиль потратил примерно на $4{,}2\\%$ больше времени.\\n\\n**Ответ:** раньше приехал второй; время первого больше в $\\tfrac{25}{24}$ раза.\\n\\n*Почему так.* Первый автомобиль **дольше** едет с меньшей скоростью (медленный участок занимает больше времени, хотя по длине он такой же). Общий принцип: гармоническое среднее никогда не превосходит арифметическое, а равны они лишь при одинаковых скоростях.",
    "en": "Let the distance be $S$.\\n\\n**The first car.** Its time is $$T_1=\\frac{S/2}{40}+\\frac{S/2}{60}=\\frac S2\\left(\\frac1{40}+\\frac1{60}\\right)=\\frac S2\\cdot\\frac{3+2}{120}=\\frac{S}{48}.$$ Its average speed is the harmonic mean: $48$ km/h.\\n\\n**The second car.** Let the trip take $T_2$; then $$S=40\\cdot\\frac{T_2}{2}+60\\cdot\\frac{T_2}{2}=50\\,T_2\\quad\\Longrightarrow\\quad T_2=\\frac{S}{50}.$$ Its average speed is the arithmetic mean: $50$ km/h.\\n\\n**Compare.** $$\\frac{T_1}{T_2}=\\frac{S/48}{S/50}=\\frac{50}{48}=\\frac{25}{24}\\approx1.042 .$$ So the first car spends about $4.2\\%$ longer.\\n\\n**Answer:** the second car arrives first; the first car’s time is $\\tfrac{25}{24}$ times as long.\\n\\n*Why.* The first car spends **longer** at the lower speed (the slow stretch takes more time even though it is the same length). The general principle: the harmonic mean never exceeds the arithmetic mean, with equality only when the speeds are equal."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Найдите все двузначные числа, которые вчетверо больше суммы своих цифр.",
    "en": "Find every two-digit number that is four times the sum of its digits."
   },
   "hint": {
    "ru": "Запишите число как $10a+b$.",
    "en": "Write the number as $10a+b$."
   },
   "sol": {
    "ru": "Пусть число равно $\\overline{ab}=10a+b$, где $a\\in\\{1,\\dots,9\\}$ и $b\\in\\{0,\\dots,9\\}$. Условие даёт $$10a+b=4(a+b)=4a+4b .$$ Переносим: $$6a=3b\\quad\\Longrightarrow\\quad b=2a .$$\\n\\nОстаётся перебрать $a$ так, чтобы $b=2a$ оставалось цифрой, то есть $2a\\le9$: подходят $a=1,2,3,4$.\\n\\n$$a=1\\Rightarrow12,\\qquad a=2\\Rightarrow24,\\qquad a=3\\Rightarrow36,\\qquad a=4\\Rightarrow48 .$$\\n\\n**Проверка:** $12=4\\cdot3$ ✓, $24=4\\cdot6$ ✓, $36=4\\cdot9$ ✓, $48=4\\cdot12$ ✓\\n\\n**Ответ:** $12,\\ 24,\\ 36,\\ 48$.",
    "en": "Let the number be $\\overline{ab}=10a+b$ with $a\\in\\{1,\\dots,9\\}$ and $b\\in\\{0,\\dots,9\\}$. The condition gives $$10a+b=4(a+b)=4a+4b .$$ Rearranging, $$6a=3b\\quad\\Longrightarrow\\quad b=2a .$$\\n\\nIt remains to take those $a$ for which $b=2a$ is still a digit, that is $2a\\le9$: namely $a=1,2,3,4$.\\n\\n$$a=1\\Rightarrow12,\\qquad a=2\\Rightarrow24,\\qquad a=3\\Rightarrow36,\\qquad a=4\\Rightarrow48 .$$\\n\\n**Check:** $12=4\\cdot3$ ✓, $24=4\\cdot6$ ✓, $36=4\\cdot9$ ✓, $48=4\\cdot12$ ✓\\n\\n**Answer:** $12,\\ 24,\\ 36,\\ 48$."
   }
  }
 ]
};
