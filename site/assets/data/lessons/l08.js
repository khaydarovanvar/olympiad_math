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
      "ru": "**1)** Обозначайте буквой то, что спрашивают, — если только это не приводит к громоздким выражениям.\n\n**2)** Если величины связаны («на $5$ больше», «вдвое меньше»), вводите **одну** переменную, а остальные выражайте через неё.\n\n**3)** В задачах на работу удобнее обозначать не время, а **производительность** — долю работы за единицу времени.\n\n**4)** Записывайте сразу, в каких единицах меряется каждая величина: половина ошибок — это часы, сложенные с километрами.",
      "en": "**1)** Let the letter stand for what is asked — unless that makes the expressions unwieldy.\n\n**2)** If quantities are related (\"five more\", \"half as many\"), introduce **one** variable and express the rest through it.\n\n**3)** In work problems it is better to name the **rate** — the fraction of the job done per unit time — rather than the time.\n\n**4)** Write down the units of every quantity at once: half of all mistakes are hours added to kilometres."
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
    },
    {
     "t": "thm",
     "name": {
      "ru": "Что значит «решить текстовую задачу»",
      "en": "What solving a word problem means"
     },
     "text": {
      "ru": "Решение текстовой задачи всегда состоит из четырёх шагов:\n\n1. **Выбрать неизвестные** и назвать их буквами, явно указав единицы измерения.\n2. **Выразить через них все величины**, встречающиеся в условии (удобно таблицей).\n3. **Записать уравнения** — по одному на каждое утверждение условия.\n4. **Решить систему и проверить ответ по смыслу задачи**, отбросив посторонние корни.",
      "en": "Solving a word problem always has four steps:\n\n1. **Choose the unknowns** and name them, stating the units explicitly.\n2. **Express every quantity of the story through them** (a table helps).\n3. **Write the equations** — one for each statement in the text.\n4. **Solve, then check the answer against the story**, discarding roots that make no sense."
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Четвёртый шаг пропускают чаще всего, а он обязателен. Алгебра не знает, что число людей целое, что время положительно, а концентрация не превосходит $100\\%$. Отрицательный корень квадратного уравнения — не ошибка вычислений, а посторонний ответ, который нужно отбросить, **указав причину**.",
      "en": "Step four is skipped most often and is mandatory. Algebra does not know that a number of people is an integer, that a time is positive, or that a concentration is at most $100\\%$. A negative root of a quadratic is not an arithmetic slip but an extraneous answer to be discarded — **with the reason stated**."
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "**Сколько уравнений нужно?** Обычно столько же, сколько неизвестных. Но это не закон: иногда одно уравнение с двумя неизвестными решается, если добавить условие целочисленности (как в задаче про кроликов и фазанов), а иногда лишнее уравнение оказывается следствием остальных.\n\nЕсли уравнений меньше, чем неизвестных, ищите **скрытое условие**: «все числа натуральные», «время не может быть отрицательным», «в классе не больше $40$ человек».",
      "en": "**How many equations are needed?** Usually as many as there are unknowns. But that is not a law: sometimes one equation in two unknowns is solvable once integrality is added (as in the rabbits-and-pheasants problem), and sometimes an extra equation turns out to follow from the others.\n\nIf you have fewer equations than unknowns, look for a **hidden condition**: \"all numbers are positive integers\", \"a time cannot be negative\", \"a class has at most $40$ pupils\"."
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
    "ru": "Относительное движение: правила и формулы",
    "en": "Relative motion: the rules and the formulas"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Задачи на движение кажутся бесконечно разнообразными, но за ними стоит всего несколько утверждений. Если сформулировать их как теоремы и доказать один раз, дальше остаётся только подставлять числа.",
      "en": "Motion problems look endlessly varied, yet only a handful of statements lie behind them. Once these are written down as theorems and proved, everything after that is substitution."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Скорость сближения и удаления",
      "en": "Closing and separating speed"
     },
     "text": {
      "ru": "Пусть два тела движутся по прямой с постоянными скоростями $u$ и $v$.\n\n**Навстречу друг другу:** расстояние между ними убывает со скоростью $u+v$, поэтому начальное расстояние $d$ они покрывают за время $$t=\\frac{d}{u+v}.$$\n\n**В одном направлении** (догоняющий быстрее, $u>v$): разрыв сокращается со скоростью $u-v$, и на его ликвидацию нужно $$t=\\frac{d}{u-v}.$$",
      "en": "Let two bodies move along a line with constant speeds $u$ and $v$.\n\n**Towards each other:** the distance between them shrinks at rate $u+v$, so an initial gap $d$ closes in time $$t=\\frac{d}{u+v}.$$\n\n**In the same direction** (the chaser is faster, $u>v$): the gap shrinks at rate $u-v$, so it takes $$t=\\frac{d}{u-v}.$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Поместим начало координат в стартовую точку первого тела и направим ось к второму. Тогда координаты равны $$x_1(t)=ut,\\qquad x_2(t)=d-vt$$ в случае встречного движения. Расстояние между телами равно $$x_2(t)-x_1(t)=d-\\left(u+v\\right)t ,$$ то есть линейная функция с угловым коэффициентом $-\\left(u+v\\right)$: разрыв убывает именно со скоростью $u+v$. Он обращается в нуль при $t=\\dfrac{d}{u+v}$ ✓\n\nПри движении в одну сторону $x_2(t)=d+vt$, разность равна $d-\\left(u-v\\right)t$, и она обращается в нуль при $t=\\dfrac{d}{u-v}$; при $u\\le v$ разрыв не убывает и встречи не происходит ✓ $\\blacksquare$",
      "en": "Put the origin at the first body and point the axis towards the second. For a head-on approach the coordinates are $$x_1(t)=ut,\\qquad x_2(t)=d-vt .$$ The distance between them is $$x_2(t)-x_1(t)=d-\\left(u+v\\right)t ,$$ a linear function of slope $-\\left(u+v\\right)$: the gap shrinks at exactly rate $u+v$, reaching zero at $t=\\dfrac{d}{u+v}$ ✓\n\nFor motion in the same direction $x_2(t)=d+vt$, the difference is $d-\\left(u-v\\right)t$, zero at $t=\\dfrac{d}{u-v}$; if $u\\le v$ the gap never shrinks and no meeting occurs ✓ $\\blacksquare$"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "**Переход в систему отсчёта одного из тел.** Вместо двух движущихся объектов рассматривайте один: «остановите» второе тело и добавьте его скорость (со знаком) первому. Все задачи про догоняющих, встречающихся и пассажира, идущего по движущемуся эскалатору, — это одна задача.",
      "en": "**Move into the frame of one body.** Instead of two moving objects consider one: \"stop\" the second body and give its speed (with sign) to the first. Chasing problems, meeting problems and the passenger walking on a moving escalator are all one problem."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Средняя скорость — среднее гармоническое",
      "en": "Average speed is a harmonic mean"
     },
     "text": {
      "ru": "Если одну и ту же дистанцию тело прошло туда со скоростью $u$ и обратно со скоростью $v$, то средняя скорость всего пути равна $$\\bar{w}=\\frac{2uv}{u+v},$$ и всегда $\\bar{w}\\le\\dfrac{u+v}{2}$, причём равенство лишь при $u=v$.",
      "en": "If a body covers the same distance at speed $u$ one way and $v$ the other, the average speed for the whole trip is $$\\bar{w}=\\frac{2uv}{u+v},$$ and always $\\bar{w}\\le\\dfrac{u+v}{2}$, with equality only when $u=v$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Пусть длина одного участка равна $s$. Время туда — $\\dfrac{s}{u}$, обратно — $\\dfrac{s}{v}$. По определению средней скорости (весь путь, делённый на всё время) $$\\bar{w}=\\frac{2s}{\\dfrac{s}{u}+\\dfrac{s}{v}}=\\frac{2}{\\dfrac1u+\\dfrac1v}=\\frac{2uv}{u+v} \\quad\\checkmark$$\n\nЗаметим: $s$ сократилось — ответ не зависит от длины участка.\n\nВторая часть — это неравенство $H\\le A$ для двух чисел: $$\\frac{u+v}{2}-\\frac{2uv}{u+v}=\\frac{\\left(u+v\\right)^{2}-4uv}{2\\left(u+v\\right)}=\\frac{\\left(u-v\\right)^{2}}{2\\left(u+v\\right)}\\ \\ge\\ 0 \\quad\\checkmark\\qquad\\blacksquare$$",
      "en": "Let each leg have length $s$. The times are $\\dfrac{s}{u}$ and $\\dfrac{s}{v}$. By definition (total distance over total time) $$\\bar{w}=\\frac{2s}{\\dfrac{s}{u}+\\dfrac{s}{v}}=\\frac{2}{\\dfrac1u+\\dfrac1v}=\\frac{2uv}{u+v} \\quad\\checkmark$$\n\nNote that $s$ cancels — the answer does not depend on the length of the leg.\n\nThe second part is the inequality $H\\le A$ for two numbers: $$\\frac{u+v}{2}-\\frac{2uv}{u+v}=\\frac{\\left(u-v\\right)^{2}}{2\\left(u+v\\right)}\\ \\ge\\ 0 \\quad\\checkmark\\qquad\\blacksquare$$"
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Самая частая ошибка в задачах на движение — усреднить скорости арифметически. Проехать половину пути со скоростью $60$ и половину со скоростью $40$ — это **не** $50$ км/ч, а $$\\frac{2\\cdot60\\cdot40}{100}=48 \\text{ км/ч}.$$ Причина проста: с меньшей скоростью тело едет **дольше**, поэтому она весит больше.\n\nАрифметическое усреднение верно в другой задаче: если равны не расстояния, а **времена** движения.",
      "en": "The most common mistake in motion problems is averaging speeds arithmetically. Half the distance at $60$ and half at $40$ is **not** $50$ km/h but $$\\frac{2\\cdot60\\cdot40}{100}=48\\text{ km/h}.$$ The reason is simple: the body spends **longer** at the lower speed, so that speed carries more weight.\n\nArithmetic averaging is right in a different problem: when the equal quantities are the **times**, not the distances."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Задача о встрече и остатке пути",
      "en": "The meeting problem and the remaining legs"
     },
     "text": {
      "ru": "Два пешехода одновременно вышли навстречу друг другу из точек $A$ и $B$. После встречи первому осталось идти $t_1$ часов до $B$, второму — $t_2$ часов до $A$. Тогда отношение их скоростей равно $$\\frac{u}{v}=\\sqrt{\\frac{t_2}{t_1}} .$$",
      "en": "Two walkers set out simultaneously towards each other from $A$ and $B$. After meeting, the first needs $t_1$ more hours to reach $B$ and the second $t_2$ more hours to reach $A$. Then their speeds satisfy $$\\frac{u}{v}=\\sqrt{\\frac{t_2}{t_1}} .$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Пусть встреча произошла через время $T$ после старта. К этому моменту первый прошёл $uT$, второй — $vT$.\n\nПосле встречи первому остаётся ровно тот участок, который прошёл второй, то есть $vT$; он тратит на него $t_1$ часов: $$vT=u\\,t_1 .$$\n\nСимметрично второму остаётся участок $uT$, и $$uT=v\\,t_2 .$$\n\nПеремножим оба равенства: $uvT^{2}=uv\\,t_1t_2$, откуда $T=\\sqrt{t_1t_2}$.\n\nТеперь разделим второе равенство на первое: $$\\frac{u}{v}=\\frac{v\\,t_2}{u\\,t_1}\\quad\\Longrightarrow\\quad \\frac{u^{2}}{v^{2}}=\\frac{t_2}{t_1}\\quad\\Longrightarrow\\quad \\frac{u}{v}=\\sqrt{\\frac{t_2}{t_1}} \\quad\\checkmark\\qquad\\blacksquare$$",
      "en": "Say the meeting happens $T$ hours after the start. By then the first has walked $uT$ and the second $vT$.\n\nAfter the meeting the first must cover exactly what the second has walked, namely $vT$, and it takes $t_1$ hours: $$vT=u\\,t_1 .$$\n\nSymmetrically the second must cover $uT$, so $$uT=v\\,t_2 .$$\n\nMultiplying the two: $uvT^{2}=uv\\,t_1t_2$, hence $T=\\sqrt{t_1t_2}$.\n\nDividing the second by the first: $$\\frac{u}{v}=\\frac{v\\,t_2}{u\\,t_1}\\quad\\Longrightarrow\\quad \\frac{u^{2}}{v^{2}}=\\frac{t_2}{t_1}\\quad\\Longrightarrow\\quad \\frac{u}{v}=\\sqrt{\\frac{t_2}{t_1}} \\quad\\checkmark\\qquad\\blacksquare$$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Два велосипедиста выехали одновременно навстречу друг другу. После встречи первый доехал до конца за $1$ час, второй — за $4$ часа. Во сколько раз первый быстрее и через сколько часов после старта они встретились?",
      "en": "Two cyclists set out simultaneously towards each other. After meeting, the first reached the far end in $1$ hour and the second in $4$ hours. How many times faster is the first, and how long after the start did they meet?"
     },
     "steps": {
      "ru": [
       "Здесь $t_1=1$, $t_2=4$.",
       "По теореме $\\dfrac{u}{v}=\\sqrt{\\dfrac{4}{1}}=2$: первый вдвое быстрее ✓",
       "Время до встречи $T=\\sqrt{t_1t_2}=\\sqrt{4}=2$ часа.",
       "Проверка: пусть $v=1$, $u=2$. За $2$ часа первый прошёл $4$, второй $2$; всего $6$ — это вся трасса. После встречи первому осталось $2$ при скорости $2$ — ровно $1$ час ✓, второму осталось $4$ при скорости $1$ — ровно $4$ часа ✓"
      ],
      "en": [
       "Here $t_1=1$, $t_2=4$.",
       "The theorem gives $\\dfrac{u}{v}=\\sqrt{\\dfrac{4}{1}}=2$: the first is twice as fast ✓",
       "The time to the meeting is $T=\\sqrt{t_1t_2}=\\sqrt{4}=2$ hours.",
       "Check: take $v=1$, $u=2$. In $2$ hours the first covers $4$ and the second $2$; the route is $6$ long. After the meeting the first has $2$ left at speed $2$ — exactly $1$ hour ✓, the second has $4$ left at speed $1$ — exactly $4$ hours ✓"
      ]
     },
     "ans": {
      "ru": "В $2$ раза быстрее; встретились через $2$ часа.",
      "en": "Twice as fast; they met after $2$ hours."
     }
    },
    {
     "t": "table",
     "head": {
      "ru": [
       "Ситуация",
       "Что складывать",
       "Формула"
      ],
      "en": [
       "Situation",
       "What to combine",
       "Formula"
      ]
     },
     "rows": {
      "ru": [
       [
        "лодка по течению",
        "скорости складываются",
        "$v_{\\text{соб}}+v_{\\text{теч}}$"
       ],
       [
        "лодка против течения",
        "скорости вычитаются",
        "$v_{\\text{соб}}-v_{\\text{теч}}$"
       ],
       [
        "плот",
        "своей скорости нет",
        "$v_{\\text{теч}}$"
       ],
       [
        "идти по движущемуся эскалатору",
        "скорости складываются",
        "$v_{\\text{чел}}+v_{\\text{эск}}$"
       ],
       [
        "догонять",
        "разность скоростей",
        "$u-v$"
       ],
       [
        "идти навстречу",
        "сумма скоростей",
        "$u+v$"
       ],
       [
        "круговая трасса, один круг разрыва",
        "разность скоростей",
        "$t=\\dfrac{L}{u-v}$"
       ]
      ],
      "en": [
       [
        "boat downstream",
        "speeds add",
        "$v_{\\text{own}}+v_{\\text{flow}}$"
       ],
       [
        "boat upstream",
        "speeds subtract",
        "$v_{\\text{own}}-v_{\\text{flow}}$"
       ],
       [
        "a raft",
        "it has no speed of its own",
        "$v_{\\text{flow}}$"
       ],
       [
        "walking on a moving escalator",
        "speeds add",
        "$v_{\\text{walk}}+v_{\\text{esc}}$"
       ],
       [
        "chasing",
        "difference of speeds",
        "$u-v$"
       ],
       [
        "head-on",
        "sum of speeds",
        "$u+v$"
       ],
       [
        "circular track, one lap behind",
        "difference of speeds",
        "$t=\\dfrac{L}{u-v}$"
       ]
      ]
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
    },
    {
     "t": "thm",
     "name": {
      "ru": "Производительности складываются",
      "en": "Work rates add"
     },
     "text": {
      "ru": "Если первый исполнитель делает всю работу за $a$ единиц времени, а второй за $b$, то вместе они справятся за $$t=\\frac{ab}{a+b}$$ единиц времени — среднее гармоническое, делённое на $2$.",
      "en": "If the first worker finishes the whole job in $a$ units of time and the second in $b$, together they need $$t=\\frac{ab}{a+b}$$ units — half of the harmonic mean."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Примем всю работу за $1$. Тогда производительность (доля работы в единицу времени) первого равна $\\dfrac1a$, второго $\\dfrac1b$.\n\nЗа время $t$ совместной работы будет выполнено $$\\frac{t}{a}+\\frac{t}{b}$$ долей работы. Приравняем это к $1$: $$t\\left(\\frac1a+\\frac1b\\right)=1\\quad\\Longrightarrow\\quad t=\\frac{1}{\\frac1a+\\frac1b}=\\frac{ab}{a+b} \\quad\\checkmark\\qquad\\blacksquare$$\n\n**Почему производительности складываются, а времена — нет.** Работа за время $t$ аддитивна: сделанное первым плюс сделанное вторым. Время же — величина обратная, а обратные величины не складываются.",
      "en": "Call the whole job $1$. Then the rate (fraction of the job per unit time) of the first is $\\dfrac1a$ and of the second $\\dfrac1b$.\n\nIn time $t$ of joint work they complete $$\\frac{t}{a}+\\frac{t}{b}$$ of the job. Set this equal to $1$: $$t\\left(\\frac1a+\\frac1b\\right)=1\\quad\\Longrightarrow\\quad t=\\frac{ab}{a+b} \\quad\\checkmark\\qquad\\blacksquare$$\n\n**Why rates add but times do not.** Work done in time $t$ is additive: what the first did plus what the second did. Time is the reciprocal quantity, and reciprocals do not add."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Формула $t=\\dfrac{ab}{a+b}$ — та же, что для сопротивления двух параллельных проводников и для фокусного расстояния тонкой линзы. Всюду, где складываются «обратные величины», работает одна и та же арифметика.\n\nДля $n$ исполнителей: $$\\frac1t=\\frac1{a_1}+\\frac1{a_2}+\\dots+\\frac1{a_n}.$$ Если кто-то мешает (вытекающая труба), его производительность входит со знаком минус.",
      "en": "The formula $t=\\dfrac{ab}{a+b}$ is the same as for two resistors in parallel and for the focal length of a thin lens. Wherever reciprocals add, the arithmetic is identical.\n\nFor $n$ workers: $$\\frac1t=\\frac1{a_1}+\\frac1{a_2}+\\dots+\\frac1{a_n}.$$ If one of them works against the others (a draining pipe), its rate enters with a minus sign."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Первая труба наполняет бассейн за $3$ часа, вторая за $6$ часов, а третья (сливная) опорожняет полный бассейн за $4$ часа. За сколько наполнится бассейн, если открыть все три?",
      "en": "The first pipe fills a pool in $3$ hours, the second in $6$, and a third (a drain) empties a full pool in $4$. How long does filling take with all three open?"
     },
     "steps": {
      "ru": [
       "Производительности: $\\dfrac13$, $\\dfrac16$ и $-\\dfrac14$ бассейна в час.",
       "Суммарная производительность: $$\\frac13+\\frac16-\\frac14=\\frac{4+2-3}{12}=\\frac{3}{12}=\\frac14 .$$",
       "Значит бассейн наполнится за $t=\\dfrac{1}{1/4}=4$ часа ✓",
       "Проверка: за $4$ часа первая нальёт $\\tfrac43$, вторая $\\tfrac23$, третья выльет $1$; итого $\\tfrac43+\\tfrac23-1=1$ ✓"
      ],
      "en": [
       "The rates are $\\dfrac13$, $\\dfrac16$ and $-\\dfrac14$ pools per hour.",
       "Total rate: $$\\frac13+\\frac16-\\frac14=\\frac{4+2-3}{12}=\\frac14 .$$",
       "So the pool fills in $t=\\dfrac{1}{1/4}=4$ hours ✓",
       "Check: in $4$ hours the first adds $\\tfrac43$, the second $\\tfrac23$, the drain removes $1$; total $\\tfrac43+\\tfrac23-1=1$ ✓"
      ]
     },
     "ans": {
      "ru": "За $4$ часа.",
      "en": "In $4$ hours."
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
    },
    {
     "t": "thm",
     "name": {
      "ru": "Что сохраняется, а что нет",
      "en": "What is conserved and what is not"
     },
     "text": {
      "ru": "При смешивании растворов **аддитивны** масса раствора и масса чистого вещества. Концентрация **не аддитивна**: её нельзя складывать, а только усреднять с весами.",
      "en": "When solutions are mixed, the mass of the solution and the mass of the pure substance are **additive**. Concentration is **not**: it may only be averaged with weights, never added."
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "**Универсальный совет для всей темы.** Заведите таблицу с тремя столбцами: «масса раствора», «доля вещества», «масса вещества», и по строке на каждый раствор плюс строку «итого». Третий столбец есть произведение первых двух, а строка «итого» суммируется по первому и третьему столбцам — **но не по второму**. Эта таблица решает почти любую задачу на смеси.",
      "en": "**One piece of advice for the whole topic.** Draw a table with three columns — \"mass of solution\", \"fraction of substance\", \"mass of substance\" — one row per solution plus a \"total\" row. The third column is the product of the first two, and the total row sums the first and third columns — **but never the second**. This table solves nearly every mixture problem."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Смеси и проценты: правило креста и повторные операции",
    "en": "Mixtures and percentages: alligation and repeated operations"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Концентрация смеси",
      "en": "The concentration of a mixture"
     },
     "text": {
      "ru": "Если смешать $m_1$ раствора концентрации $c_1$ и $m_2$ раствора концентрации $c_2$, то концентрация смеси равна $$c=\\frac{c_1m_1+c_2m_2}{m_1+m_2},$$ то есть **взвешенному среднему** исходных концентраций. В частности, $c$ всегда лежит между $c_1$ и $c_2$.",
      "en": "Mixing $m_1$ of a solution of concentration $c_1$ with $m_2$ of concentration $c_2$ gives a mixture of concentration $$c=\\frac{c_1m_1+c_2m_2}{m_1+m_2},$$ the **weighted average** of the two. In particular $c$ always lies between $c_1$ and $c_2$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Считаем чистое вещество. В первом растворе его $c_1m_1$, во втором $c_2m_2$; при смешивании оно не исчезает и не появляется, поэтому в смеси его $c_1m_1+c_2m_2$. Общая масса смеси равна $m_1+m_2$, и концентрация есть отношение ✓\n\nТо, что $c$ лежит между $c_1$ и $c_2$, видно из записи $$c=\\lambda c_1+\\left(1-\\lambda\\right)c_2,\\qquad \\lambda=\\frac{m_1}{m_1+m_2}\\in\\left[0,1\\right],$$ — это точка отрезка с концами $c_1$ и $c_2$ ✓ $\\blacksquare$",
      "en": "Count the pure substance. The first solution holds $c_1m_1$ of it, the second $c_2m_2$; mixing neither creates nor destroys it, so the mixture holds $c_1m_1+c_2m_2$. Its total mass is $m_1+m_2$, and the concentration is the ratio ✓\n\nThat $c$ lies between $c_1$ and $c_2$ is clear from $$c=\\lambda c_1+\\left(1-\\lambda\\right)c_2,\\qquad \\lambda=\\frac{m_1}{m_1+m_2}\\in\\left[0,1\\right],$$ a point of the segment with endpoints $c_1$ and $c_2$ ✓ $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Правило креста (правило смешения)",
      "en": "The rule of alligation"
     },
     "text": {
      "ru": "Чтобы получить концентрацию $c$ из растворов с концентрациями $c_1<c<c_2$, их надо взять в отношении $$\\frac{m_1}{m_2}=\\frac{c_2-c}{c-c_1}.$$ Иначе говоря, **массы обратно пропорциональны расстояниям от искомой концентрации**.",
      "en": "To obtain a concentration $c$ from solutions of concentrations $c_1<c<c_2$, take them in the ratio $$\\frac{m_1}{m_2}=\\frac{c_2-c}{c-c_1}.$$ In words: **the masses are inversely proportional to the distances from the target concentration**."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Запишем условие $\\dfrac{c_1m_1+c_2m_2}{m_1+m_2}=c$ и умножим на знаменатель: $$c_1m_1+c_2m_2=c\\,m_1+c\\,m_2 .$$\n\nСоберём члены с $m_1$ слева, с $m_2$ справа: $$m_1\\left(c-c_1\\right)=m_2\\left(c_2-c\\right),$$ откуда и следует требуемое отношение ✓ $\\blacksquare$\n\nОбе скобки положительны, поскольку $c$ лежит строго между $c_1$ и $c_2$ — иначе задача неразрешима.",
      "en": "Write the condition $\\dfrac{c_1m_1+c_2m_2}{m_1+m_2}=c$ and clear the denominator: $$c_1m_1+c_2m_2=c\\,m_1+c\\,m_2 .$$\n\nCollect the $m_1$ terms on the left and the $m_2$ terms on the right: $$m_1\\left(c-c_1\\right)=m_2\\left(c_2-c\\right),$$ which is the stated ratio ✓ $\\blacksquare$\n\nBoth brackets are positive because $c$ lies strictly between $c_1$ and $c_2$ — otherwise the task is impossible."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Сколько литров $10\\%$-го и $40\\%$-го растворов нужно взять, чтобы получить $12$ литров $25\\%$-го?",
      "en": "How many litres of a $10\\%$ and a $40\\%$ solution are needed to make $12$ litres of a $25\\%$ solution?"
     },
     "steps": {
      "ru": [
       "Расстояния от цели: $25-10=15$ и $40-25=15$.",
       "По правилу креста $\\dfrac{m_1}{m_2}=\\dfrac{15}{15}=1$ — растворы берутся поровну.",
       "Значит по $6$ литров каждого.",
       "Проверка: чистого вещества $0{,}1\\cdot6+0{,}4\\cdot6=3$ литра, а $\\dfrac{3}{12}=0{,}25$ ✓"
      ],
      "en": [
       "Distances from the target: $25-10=15$ and $40-25=15$.",
       "Alligation gives $\\dfrac{m_1}{m_2}=\\dfrac{15}{15}=1$ — equal parts.",
       "So $6$ litres of each.",
       "Check: the pure substance is $0.1\\cdot6+0.4\\cdot6=3$ litres, and $\\dfrac{3}{12}=0.25$ ✓"
      ]
     },
     "ans": {
      "ru": "По $6$ литров каждого раствора.",
      "en": "$6$ litres of each."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Повторное разбавление",
      "en": "Repeated dilution"
     },
     "text": {
      "ru": "Из сосуда объёма $V$, полностью заполненного раствором концентрации $c_0$, отливают $k$ литров и доливают столько же чистой воды. После $n$ таких операций концентрация равна $$c_n=c_0\\left(1-\\frac{k}{V}\\right)^{n}.$$",
      "en": "A vessel of volume $V$ is full of a solution of concentration $c_0$. Each operation removes $k$ litres and replaces them with pure water. After $n$ such operations the concentration is $$c_n=c_0\\left(1-\\frac{k}{V}\\right)^{n}.$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Проследим за одной операцией. Пусть перед ней концентрация равна $c$, значит чистого вещества $cV$.\n\nОтливая $k$ литров **раствора** (а не воды!), мы убираем долю $\\dfrac{k}{V}$ всего содержимого, в том числе долю $\\dfrac{k}{V}$ вещества. Остаётся $$cV\\left(1-\\frac{k}{V}\\right).$$\n\nДоливание воды не меняет количество вещества, но возвращает объём к $V$. Значит новая концентрация равна $$c\\left(1-\\frac{k}{V}\\right).$$\n\nКаждая операция умножает концентрацию на один и тот же множитель $q=1-\\dfrac{k}{V}$: концентрации образуют геометрическую прогрессию. После $n$ шагов получаем $c_0q^{\\,n}$ ✓ $\\blacksquare$",
      "en": "Follow one operation. Before it the concentration is $c$, so the vessel holds $cV$ of the substance.\n\nRemoving $k$ litres of **solution** (not of water) removes the fraction $\\dfrac{k}{V}$ of everything inside, the substance included. What remains is $$cV\\left(1-\\frac{k}{V}\\right).$$\n\nAdding water changes no amount of substance but restores the volume to $V$. So the new concentration is $$c\\left(1-\\frac{k}{V}\\right).$$\n\nEvery operation multiplies the concentration by the same factor $q=1-\\dfrac{k}{V}$: the concentrations form a geometric progression. After $n$ steps it is $c_0q^{\\,n}$ ✓ $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Из бочки в $40$ литров спирта отлили $4$ литра и долили водой; операцию повторили ещё дважды. Какова концентрация спирта в конце?",
      "en": "From a $40$-litre barrel of pure alcohol, $4$ litres are drawn off and replaced by water; the operation is repeated twice more. What is the final concentration?"
     },
     "steps": {
      "ru": [
       "Здесь $c_0=1$, $V=40$, $k=4$, значит множитель $q=1-\\dfrac{4}{40}=0{,}9$.",
       "Операций три, поэтому $c_3=0{,}9^{3}=0{,}729$.",
       "То есть $72{,}9\\%$, в бочке осталось $40\\cdot0{,}729=29{,}16$ литра спирта.",
       "Обратите внимание: ответ **не** $100\\%-3\\cdot10\\%=70\\%$ — со второй операции вместе со спиртом отливается уже и вода."
      ],
      "en": [
       "Here $c_0=1$, $V=40$, $k=4$, so the factor is $q=1-\\dfrac{4}{40}=0.9$.",
       "Three operations give $c_3=0.9^{3}=0.729$.",
       "That is $72.9\\%$; the barrel holds $40\\cdot0.729=29.16$ litres of alcohol.",
       "Note the answer is **not** $100\\%-3\\cdot10\\%=70\\%$ — from the second operation onwards the liquid drawn off already contains water."
      ]
     },
     "ans": {
      "ru": "$72{,}9\\%$ ($29{,}16$ литра спирта).",
      "en": "$72.9\\%$ ($29.16$ litres of alcohol)."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Композиция процентных изменений",
      "en": "Composing percentage changes"
     },
     "text": {
      "ru": "Изменение величины на $p\\%$, а затем на $q\\%$ равносильно однократному изменению на $$\\left(p+q+\\frac{pq}{100}\\right)\\%.$$ В частности, повышение на $x\\%$ с последующим понижением на $x\\%$ всегда даёт **убыток** $\\dfrac{x^{2}}{100}\\%$.",
      "en": "Changing a quantity by $p\\%$ and then by $q\\%$ is the same as a single change by $$\\left(p+q+\\frac{pq}{100}\\right)\\%.$$ In particular, a rise of $x\\%$ followed by a fall of $x\\%$ always leaves a **loss** of $\\dfrac{x^{2}}{100}\\%$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Изменение на $p\\%$ — это умножение на $\\left(1+\\dfrac{p}{100}\\right)$. Два изменения подряд — умножение на произведение: $$\\left(1+\\frac{p}{100}\\right)\\left(1+\\frac{q}{100}\\right)=1+\\frac{p+q}{100}+\\frac{pq}{10000}=1+\\frac{p+q+\\frac{pq}{100}}{100} \\quad\\checkmark$$\n\nПри $q=-p$ произведение равно $$\\left(1+\\frac{p}{100}\\right)\\left(1-\\frac{p}{100}\\right)=1-\\frac{p^{2}}{10000}<1 ,$$ то есть величина уменьшилась на $\\dfrac{p^{2}}{100}\\%$ ✓ $\\blacksquare$\n\nЭто разность квадратов: убыток возникает всегда, независимо от порядка операций.",
      "en": "A change by $p\\%$ is multiplication by $\\left(1+\\dfrac{p}{100}\\right)$. Two changes multiply: $$\\left(1+\\frac{p}{100}\\right)\\left(1+\\frac{q}{100}\\right)=1+\\frac{p+q}{100}+\\frac{pq}{10000} \\quad\\checkmark$$\n\nFor $q=-p$ the product is $$\\left(1+\\frac{p}{100}\\right)\\left(1-\\frac{p}{100}\\right)=1-\\frac{p^{2}}{10000}<1 ,$$ a loss of $\\dfrac{p^{2}}{100}\\%$ ✓ $\\blacksquare$\n\nIt is a difference of squares: the loss appears whatever the order of the two operations."
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Проценты **не складываются**, потому что берутся от разных баз. Скидка $50\\%$, а затем ещё $50\\%$ — это не «бесплатно», а $$0{,}5\\cdot0{,}5=0{,}25 ,$$ то есть скидка $75\\%$. Всегда переводите проценты в множители.",
      "en": "Percentages **do not add**, because they are taken of different bases. A $50\\%$ discount followed by another $50\\%$ is not \"free\" but $$0.5\\cdot0.5=0.25 ,$$ a $75\\%$ discount. Always turn percentages into multipliers."
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
  },
  {
   "h": {
    "ru": "Системы: теория и приёмы",
    "en": "Systems: theory and techniques"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Число решений линейной системы",
      "en": "How many solutions a linear system has"
     },
     "text": {
      "ru": "Рассмотрим систему $$\\begin{cases}a_1x+b_1y=c_1,\\\\ a_2x+b_2y=c_2.\\end{cases}$$ Обозначим $D=a_1b_2-a_2b_1$.\n\n- Если $D\\ne0$, решение существует и единственно: $$x=\\frac{c_1b_2-c_2b_1}{D},\\qquad y=\\frac{a_1c_2-a_2c_1}{D}.$$\n- Если $D=0$, то система либо не имеет решений, либо имеет их бесконечно много.",
      "en": "Consider the system $$\\begin{cases}a_1x+b_1y=c_1,\\\\ a_2x+b_2y=c_2.\\end{cases}$$ Put $D=a_1b_2-a_2b_1$.\n\n- If $D\\ne0$ there is exactly one solution: $$x=\\frac{c_1b_2-c_2b_1}{D},\\qquad y=\\frac{a_1c_2-a_2c_1}{D}.$$\n- If $D=0$ the system has either no solutions or infinitely many."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Умножим первое уравнение на $b_2$, второе на $b_1$ и вычтем: члены с $y$ уничтожаются, остаётся $$\\left(a_1b_2-a_2b_1\\right)x=c_1b_2-c_2b_1 ,\\qquad\\text{то есть}\\qquad Dx=c_1b_2-c_2b_1 .$$\n\nСимметрично (умножив на $a_2$ и $a_1$ и вычтя) получаем $Dy=a_1c_2-a_2c_1$.\n\nПри $D\\ne0$ обе величины определены однозначно, и прямая подстановка показывает, что найденная пара действительно является решением ✓\n\nПри $D=0$ левые части обоих равенств равны нулю. Если хотя бы одна правая часть отлична от нуля, решений нет. Если обе равны нулю, то строки коэффициентов пропорциональны, оба уравнения задают одну и ту же прямую (или одно из них тривиально), и решений бесконечно много ✓ $\\blacksquare$\n\n**Геометрически:** два уравнения — это две прямые. Они либо пересекаются в одной точке ($D\\ne0$), либо параллельны (решений нет), либо совпадают (решений бесконечно много).",
      "en": "Multiply the first equation by $b_2$, the second by $b_1$ and subtract: the $y$ terms cancel, leaving $$\\left(a_1b_2-a_2b_1\\right)x=c_1b_2-c_2b_1 ,\\qquad\\text{i.e.}\\qquad Dx=c_1b_2-c_2b_1 .$$\n\nSymmetrically (multiplying by $a_2$ and $a_1$) we get $Dy=a_1c_2-a_2c_1$.\n\nIf $D\\ne0$ both are determined uniquely, and substituting back shows the pair really is a solution ✓\n\nIf $D=0$ the left sides both vanish. If either right side is non-zero there is no solution. If both vanish the coefficient rows are proportional, the two equations describe the same line (or one is trivial), and there are infinitely many solutions ✓ $\\blacksquare$\n\n**Geometrically:** the two equations are two lines. They either meet in one point ($D\\ne0$), or are parallel (no solutions), or coincide (infinitely many)."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Симметрические системы и теорема Виета",
      "en": "Symmetric systems and Vieta theorem"
     },
     "text": {
      "ru": "Числа $x$ и $y$ с $$x+y=s,\\qquad xy=p$$ существуют (как вещественные) тогда и только тогда, когда $s^{2}\\ge4p$, и являются корнями квадратного уравнения $$t^{2}-st+p=0 .$$",
      "en": "Numbers $x$ and $y$ with $$x+y=s,\\qquad xy=p$$ exist (as reals) if and only if $s^{2}\\ge4p$, and they are the roots of $$t^{2}-st+p=0 .$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Рассмотрим многочлен $$\\left(t-x\\right)\\left(t-y\\right)=t^{2}-\\left(x+y\\right)t+xy=t^{2}-st+p .$$ Его корни — в точности $x$ и $y$ ✓\n\nОбратно, если $t^{2}-st+p=0$ имеет корни $t_1,t_2$, то по теореме Виета $t_1+t_2=s$ и $t_1t_2=p$, то есть пара $\\left(t_1,t_2\\right)$ подходит ✓\n\nВещественные корни существуют тогда и только тогда, когда дискриминант $s^{2}-4p$ неотрицателен ✓ $\\blacksquare$",
      "en": "Consider the polynomial $$\\left(t-x\\right)\\left(t-y\\right)=t^{2}-\\left(x+y\\right)t+xy=t^{2}-st+p ,$$ whose roots are exactly $x$ and $y$ ✓\n\nConversely, if $t^{2}-st+p=0$ has roots $t_1,t_2$ then Vieta gives $t_1+t_2=s$ and $t_1t_2=p$, so the pair $\\left(t_1,t_2\\right)$ works ✓\n\nReal roots exist precisely when the discriminant $s^{2}-4p$ is non-negative ✓ $\\blacksquare$"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "**Стандартная замена.** В любой системе, симметричной относительно $x$ и $y$, вводите $s=x+y$ и $p=xy$. Все симметрические выражения через них выражаются: $$x^{2}+y^{2}=s^{2}-2p,\\qquad x^{3}+y^{3}=s^{3}-3ps,\\qquad \\frac1x+\\frac1y=\\frac{s}{p},\\qquad \\left(x-y\\right)^{2}=s^{2}-4p .$$ Система из двух уравнений с $x,y$ превращается в систему с $s,p$, обычно гораздо более простую.",
      "en": "**The standard substitution.** In any system symmetric in $x$ and $y$, introduce $s=x+y$ and $p=xy$. Every symmetric expression is a function of them: $$x^{2}+y^{2}=s^{2}-2p,\\qquad x^{3}+y^{3}=s^{3}-3ps,\\qquad \\frac1x+\\frac1y=\\frac{s}{p},\\qquad \\left(x-y\\right)^{2}=s^{2}-4p .$$ A system in $x,y$ turns into a system in $s,p$, usually far simpler."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Решите систему $$x+y+xy=11,\\qquad x^{2}y+xy^{2}=30 .$$",
      "en": "Solve the system $$x+y+xy=11,\\qquad x^{2}y+xy^{2}=30 .$$"
     },
     "steps": {
      "ru": [
       "Положим $s=x+y$, $p=xy$. Второе уравнение равно $xy\\left(x+y\\right)=ps$.",
       "Система принимает вид $$s+p=11,\\qquad sp=30 .$$",
       "Это снова симметрическая пара! По теореме Виета $s$ и $p$ — корни уравнения $t^{2}-11t+30=0$, то есть $t=5$ и $t=6$.",
       "**Случай 1:** $s=5$, $p=6$. Тогда $x,y$ — корни $t^{2}-5t+6=0$, то есть $\\left\\{2,3\\right\\}$.",
       "**Случай 2:** $s=6$, $p=5$. Тогда $x,y$ — корни $t^{2}-6t+5=0$, то есть $\\left\\{1,5\\right\\}$.",
       "Проверка пары $\\left(1,5\\right)$: $1+5+5=11$ ✓ и $1\\cdot5\\cdot6=30$ ✓"
      ],
      "en": [
       "Put $s=x+y$, $p=xy$. The second equation is $xy\\left(x+y\\right)=ps$.",
       "The system becomes $$s+p=11,\\qquad sp=30 .$$",
       "That is a symmetric pair again! By Vieta, $s$ and $p$ are the roots of $t^{2}-11t+30=0$, namely $5$ and $6$.",
       "**Case 1:** $s=5$, $p=6$. Then $x,y$ are the roots of $t^{2}-5t+6=0$, i.e. $\\left\\{2,3\\right\\}$.",
       "**Case 2:** $s=6$, $p=5$. Then $x,y$ are the roots of $t^{2}-6t+5=0$, i.e. $\\left\\{1,5\\right\\}$.",
       "Check $\\left(1,5\\right)$: $1+5+5=11$ ✓ and $1\\cdot5\\cdot6=30$ ✓"
      ]
     },
     "ans": {
      "ru": "$\\left(2,3\\right)$, $\\left(3,2\\right)$, $\\left(1,5\\right)$, $\\left(5,1\\right)$.",
      "en": "$\\left(2,3\\right)$, $\\left(3,2\\right)$, $\\left(1,5\\right)$, $\\left(5,1\\right)$."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Однородные системы",
      "en": "Homogeneous systems"
     },
     "text": {
      "ru": "Уравнение вида $$Ax^{2}+Bxy+Cy^{2}=0$$ при $y\\ne0$ равносильно квадратному уравнению относительно отношения $k=\\dfrac{x}{y}$: $$Ak^{2}+Bk+C=0 .$$ Поэтому оно задаёт не более двух прямых $x=k_1y$ и $x=k_2y$.",
      "en": "An equation of the form $$Ax^{2}+Bxy+Cy^{2}=0$$ is, for $y\\ne0$, equivalent to a quadratic in the ratio $k=\\dfrac{x}{y}$: $$Ak^{2}+Bk+C=0 .$$ Hence it describes at most two lines $x=k_1y$ and $x=k_2y$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Все слагаемые имеют одну степень $2$, поэтому деление на $y^{2}\\ne0$ даёт $$A\\left(\\frac{x}{y}\\right)^{2}+B\\frac{x}{y}+C=0 \\quad\\checkmark$$\n\nСлучай $y=0$ проверяется отдельно: тогда уравнение сводится к $Ax^{2}=0$, что при $A\\ne0$ даёт $x=0$ ✓ $\\blacksquare$",
      "en": "Every term has the same degree $2$, so dividing by $y^{2}\\ne0$ gives $$A\\left(\\frac{x}{y}\\right)^{2}+B\\frac{x}{y}+C=0 \\quad\\checkmark$$\n\nThe case $y=0$ is checked separately: the equation becomes $Ax^{2}=0$, forcing $x=0$ when $A\\ne0$ ✓ $\\blacksquare$"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "В системе из двух уравнений второй степени часто удаётся **исключить свободные члены**, умножив уравнения на подходящие числа и вычтя. Остаётся однородное уравнение, оно даёт $x=ky$, и подстановка в любое исходное уравнение заканчивает решение.",
      "en": "In a system of two quadratic equations one can often **eliminate the constant terms** by scaling and subtracting. What remains is homogeneous, it yields $x=ky$, and substituting into either original equation finishes the job."
     }
    },
    {
     "t": "table",
     "head": {
      "ru": [
       "Вид системы",
       "Приём"
      ],
      "en": [
       "Shape of the system",
       "Technique"
      ]
     },
     "rows": {
      "ru": [
       [
        "симметрична относительно $x,y$",
        "замена $s=x+y$, $p=xy$"
       ],
       [
        "меняется знак при $x\\leftrightarrow y$",
        "замена $u=x+y$, $v=x-y$"
       ],
       [
        "все члены одной степени",
        "разделить на $y^{2}$, искать $k=x/y$"
       ],
       [
        "есть свободные члены",
        "исключить их, получив однородное уравнение"
       ],
       [
        "циклическая: $f(x)=y$, $f(y)=z$, $f(z)=x$",
        "сложить или вычесть уравнения, использовать монотонность"
       ],
       [
        "произведение и сумма заданы",
        "теорема Виета"
       ]
      ],
      "en": [
       [
        "symmetric in $x,y$",
        "substitute $s=x+y$, $p=xy$"
       ],
       [
        "antisymmetric under $x\\leftrightarrow y$",
        "substitute $u=x+y$, $v=x-y$"
       ],
       [
        "all terms of the same degree",
        "divide by $y^{2}$ and solve for $k=x/y$"
       ],
       [
        "constant terms present",
        "eliminate them to get a homogeneous equation"
       ],
       [
        "cyclic: $f(x)=y$, $f(y)=z$, $f(z)=x$",
        "add or subtract the equations, use monotonicity"
       ],
       [
        "a sum and a product are given",
        "Vieta theorem"
       ]
      ]
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Решите систему $$x^{2}+xy=12,\\qquad xy+y^{2}=24 .$$",
      "en": "Solve the system $$x^{2}+xy=12,\\qquad xy+y^{2}=24 .$$"
     },
     "steps": {
      "ru": [
       "Исключим свободные члены: умножим первое уравнение на $2$ и вычтем второе: $$2x^{2}+2xy-xy-y^{2}=24-24=0 ,$$ то есть $2x^{2}+xy-y^{2}=0$.",
       "Это однородное уравнение. Разделим на $y^{2}$ (случай $y=0$ даёт $x=0$, что не подходит по второму уравнению) и обозначим $k=\\dfrac{x}{y}$: $$2k^{2}+k-1=0 .$$",
       "Корни: $k=\\dfrac12$ и $k=-1$.",
       "**Если $x=-y$,** первое уравнение даёт $y^{2}-y^{2}=0\\ne12$ — не подходит.",
       "**Если $y=2x$,** первое уравнение даёт $x^{2}+2x^{2}=12$, то есть $x^{2}=4$ и $x=\\pm2$.",
       "Ответ: $\\left(2,4\\right)$ и $\\left(-2,-4\\right)$. Проверка: $4+8=12$ ✓ и $8+16=24$ ✓"
      ],
      "en": [
       "Eliminate the constants: multiply the first equation by $2$ and subtract the second: $$2x^{2}+xy-y^{2}=0 .$$",
       "This is homogeneous. Divide by $y^{2}$ (the case $y=0$ forces $x=0$, which fails the second equation) and set $k=\\dfrac{x}{y}$: $$2k^{2}+k-1=0 .$$",
       "The roots are $k=\\dfrac12$ and $k=-1$.",
       "**If $x=-y$,** the first equation gives $y^{2}-y^{2}=0\\ne12$ — impossible.",
       "**If $y=2x$,** the first equation gives $x^{2}+2x^{2}=12$, so $x^{2}=4$ and $x=\\pm2$.",
       "Answer: $\\left(2,4\\right)$ and $\\left(-2,-4\\right)$. Check: $4+8=12$ ✓ and $8+16=24$ ✓"
      ]
     },
     "ans": {
      "ru": "$\\left(2,4\\right)$ и $\\left(-2,-4\\right)$.",
      "en": "$\\left(2,4\\right)$ and $\\left(-2,-4\\right)$."
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
    "ru": "Из второго уравнения $y=5x-7$. Подставим в первое: $$2x+3(5x-7)=13,\\qquad 2x+15x-21=13,\\qquad 17x=34,\\qquad x=2 .$$ Тогда $y=5\\cdot2-7=3$.\n\n**Проверка:** $4+9=13$ ✓ и $10-3=7$ ✓ **Ответ:** $(x,y)=(2,3)$.",
    "en": "The second equation gives $y=5x-7$. Substituting into the first: $$2x+3(5x-7)=13,\\qquad 2x+15x-21=13,\\qquad 17x=34,\\qquad x=2 .$$ Then $y=5\\cdot2-7=3$.\n\n**Check:** $4+9=13$ ✓ and $10-3=7$ ✓ **Answer:** $(x,y)=(2,3)$."
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
    "ru": "Соли в исходном растворе: $40\\cdot0{,}3=12$ литров. Вода соли не добавляет, поэтому после добавления $x$ литров воды соли по-прежнему $12$, а всего раствора $40+x$.\n\nУсловие: $$\\frac{12}{40+x}=0{,}2\\quad\\Longrightarrow\\quad 40+x=\\frac{12}{0{,}2}=60\\quad\\Longrightarrow\\quad x=20 .$$ **Ответ:** $20$ литров. *Проверка:* $\\tfrac{12}{60}=0{,}2$ ✓",
    "en": "Salt in the original solution: $40\\cdot0.3=12$ litres. Water adds no salt, so after adding $x$ litres of water there are still $12$ litres of salt in $40+x$ litres of solution.\n\nThe condition: $$\\frac{12}{40+x}=0.2\\quad\\Longrightarrow\\quad 40+x=\\frac{12}{0.2}=60\\quad\\Longrightarrow\\quad x=20 .$$ **Answer:** $20$ litres. *Check:* $\\tfrac{12}{60}=0.2$ ✓"
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
    "ru": "Пусть сыну $s$ лет, тогда отцу $3s$. Через $12$ лет им будет $s+12$ и $3s+12$, и по условию $$3s+12=2(s+12)=2s+24 .$$ Отсюда $s=12$, а отцу $36$ лет.\n\n**Проверка:** через $12$ лет будет $24$ и $48$ — ровно вдвое ✓ **Ответ:** сыну $12$ лет, отцу $36$.",
    "en": "Let the son be $s$ years old, so the father is $3s$. In $12$ years they will be $s+12$ and $3s+12$, and by hypothesis $$3s+12=2(s+12)=2s+24 .$$ Hence $s=12$ and the father is $36$.\n\n**Check:** in $12$ years they will be $24$ and $48$ — exactly double ✓ **Answer:** the son is $12$, the father $36$."
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
    "ru": "Пусть первое число равно $x$. Тогда второе равно $x+10$, третье равно $2(x+10)=2x+20$.\n\nСумма: $$x+(x+10)+(2x+20)=130,\\qquad 4x+30=130,\\qquad 4x=100,\\qquad x=25 .$$ Значит числа равны $25$, $35$ и $70$.\n\n**Проверка:** $25+35+70=130$ ✓, $35=25+10$ ✓, $70=2\\cdot35$ ✓",
    "en": "Let the first number be $x$. Then the second is $x+10$ and the third is $2(x+10)=2x+20$.\n\nTheir sum: $$x+(x+10)+(2x+20)=130,\\qquad 4x+30=130,\\qquad 4x=100,\\qquad x=25 .$$ So the numbers are $25$, $35$ and $70$.\n\n**Check:** $25+35+70=130$ ✓, $35=25+10$ ✓, $70=2\\cdot35$ ✓"
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
    "ru": "Пусть вложено $P$ сум. За каждый год сумма умножается на $1{,}1$, значит через два года на счету $P\\cdot1{,}1^{2}=1{,}21P$.\n\nИз $1{,}21P=12\\,100$ получаем $$P=\\frac{12\\,100}{1{,}21}=10\\,000 .$$ **Ответ:** $10\\,000$ сум.\n\n*Замечание.* Обратите внимание: за два года сумма выросла на $21\\%$, а не на $20\\%$ — проценты второго года начисляются уже на увеличенную сумму.",
    "en": "Let $P$ be the deposit. Each year the amount is multiplied by $1.1$, so after two years the account holds $P\\cdot1.1^{2}=1.21P$.\n\nFrom $1.21P=12{,}100$ we get $$P=\\frac{12{,}100}{1.21}=10{,}000 .$$ **Answer:** $10{,}000$ soum.\n\n*Remark.* Note that over two years the sum grew by $21\\%$, not $20\\%$ — the second year’s interest is charged on the already larger amount."
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
    "ru": "Пусть скорости равны $v_1$ и $v_2$. При встречном движении расстояние сокращается со скоростью $v_1+v_2$, поэтому $$(v_1+v_2)\\cdot3=300\\quad\\Longrightarrow\\quad v_1+v_2=100 .$$ По условию $v_1-v_2=10$.\n\nСкладывая: $2v_1=110$, значит $v_1=55$. Вычитая: $2v_2=90$, значит $v_2=45$.\n\n**Проверка:** $(55+45)\\cdot3=300$ ✓ **Ответ:** $55$ км/ч и $45$ км/ч.",
    "en": "Let the speeds be $v_1$ and $v_2$. Moving towards each other the gap closes at $v_1+v_2$, so $$(v_1+v_2)\\cdot3=300\\quad\\Longrightarrow\\quad v_1+v_2=100 .$$ By hypothesis $v_1-v_2=10$.\n\nAdding: $2v_1=110$, so $v_1=55$. Subtracting: $2v_2=90$, so $v_2=45$.\n\n**Check:** $(55+45)\\cdot3=300$ ✓ **Answer:** $55$ km/h and $45$ km/h."
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
    "ru": "Пусть собственная скорость равна $v$ км/ч. По течению катер идёт со скоростью $v+2$, против течения — со скоростью $v-2$, причём $v>2$.\n\nУравнение по времени: $$\\frac{42}{v+2}+\\frac{30}{v-2}=6 .$$ Умножим обе части на $(v+2)(v-2)=v^{2}-4$: $$42(v-2)+30(v+2)=6\\left(v^{2}-4\\right),$$ $$42v-84+30v+60=6v^{2}-24,\\qquad 72v-24=6v^{2}-24 .$$ Свободные члены сокращаются: $$6v^{2}-72v=0,\\qquad 6v(v-12)=0 .$$ Корень $v=0$ не годится, значит $v=12$.\n\n**Проверка:** по течению $\\tfrac{42}{14}=3$ часа, против течения $\\tfrac{30}{10}=3$ часа, всего $6$ часов ✓\n\n**Ответ:** собственная скорость катера равна $12$ км/ч.",
    "en": "Let the own speed be $v$ km/h. Downstream the boat moves at $v+2$ and upstream at $v-2$, with $v>2$.\n\nThe time equation: $$\\frac{42}{v+2}+\\frac{30}{v-2}=6 .$$ Multiply both sides by $(v+2)(v-2)=v^{2}-4$: $$42(v-2)+30(v+2)=6\\left(v^{2}-4\\right),$$ $$42v-84+30v+60=6v^{2}-24,\\qquad 72v-24=6v^{2}-24 .$$ The constants cancel: $$6v^{2}-72v=0,\\qquad 6v(v-12)=0 .$$ The root $v=0$ is impossible, so $v=12$.\n\n**Check:** downstream $\\tfrac{42}{14}=3$ hours, upstream $\\tfrac{30}{10}=3$ hours, six hours in all ✓\n\n**Answer:** the boat’s own speed is $12$ km/h."
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
    "ru": "Обозначим $s=x+y$ и $p=xy$. Тогда $x^{2}y+xy^{2}=xy(x+y)=ps$, и система превращается в $$s+p=11,\\qquad ps=30 .$$ Значит $s$ и $p$ — два числа с суммой $11$ и произведением $30$, то есть корни уравнения $t^{2}-11t+30=0$: это $t=5$ и $t=6$.\n\n**Случай $s=5$, $p=6$.** Числа $x,y$ — корни $t^{2}-5t+6=0$, то есть $2$ и $3$.\n\n**Случай $s=6$, $p=5$.** Числа $x,y$ — корни $t^{2}-6t+5=0$, то есть $1$ и $5$.\n\n**Проверка** для $(1,5)$: $1+5+5=11$ ✓ и $5+25=30$ ✓ Для $(2,3)$: $2+3+6=11$ ✓ и $12+18=30$ ✓\n\n**Ответ:** $(2,3),(3,2),(1,5),(5,1)$.",
    "en": "Put $s=x+y$ and $p=xy$. Then $x^{2}y+xy^{2}=xy(x+y)=ps$, and the system becomes $$s+p=11,\\qquad ps=30 .$$ So $s$ and $p$ are two numbers with sum $11$ and product $30$, that is the roots of $t^{2}-11t+30=0$: namely $5$ and $6$.\n\n**Case $s=5$, $p=6$.** Then $x,y$ are the roots of $t^{2}-5t+6=0$, namely $2$ and $3$.\n\n**Case $s=6$, $p=5$.** Then $x,y$ are the roots of $t^{2}-6t+5=0$, namely $1$ and $5$.\n\n**Check** for $(1,5)$: $1+5+5=11$ ✓ and $5+25=30$ ✓ For $(2,3)$: $2+3+6=11$ ✓ and $12+18=30$ ✓\n\n**Answer:** $(2,3),(3,2),(1,5),(5,1)$."
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
    "ru": "Пусть взяли $x$ кг первого слитка и $y$ кг второго.\n\n**Масса:** $x+y=12$.\n\n**Медь:** $0{,}7x+0{,}4y=0{,}5\\cdot12=6$.\n\nИз первого $y=12-x$; подставим: $$0{,}7x+0{,}4(12-x)=6,\\qquad 0{,}7x+4{,}8-0{,}4x=6,\\qquad 0{,}3x=1{,}2,\\qquad x=4 .$$ Тогда $y=8$.\n\n**Проверка:** меди $0{,}7\\cdot4+0{,}4\\cdot8=2{,}8+3{,}2=6$ кг из $12$ кг, то есть $50\\%$ ✓\n\n**Ответ:** $4$ кг первого и $8$ кг второго.",
    "en": "Suppose we take $x$ kg of the first ingot and $y$ kg of the second.\n\n**Mass:** $x+y=12$.\n\n**Copper:** $0.7x+0.4y=0.5\\cdot12=6$.\n\nThe first gives $y=12-x$; substituting, $$0.7x+0.4(12-x)=6,\\qquad 0.7x+4.8-0.4x=6,\\qquad 0.3x=1.2,\\qquad x=4 .$$ Then $y=8$.\n\n**Check:** copper $0.7\\cdot4+0.4\\cdot8=2.8+3.2=6$ kg out of $12$ kg, that is $50\\%$ ✓\n\n**Answer:** $4$ kg of the first and $8$ kg of the second."
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
    "ru": "Пусть по плану делали $x$ деталей в день. Тогда плановый срок равен $\\dfrac{360}{x}$ дней, а фактический — $\\dfrac{360}{x+4}$ дней.\n\nПо условию фактический срок на $3$ дня меньше: $$\\frac{360}{x}-\\frac{360}{x+4}=3 .$$ Умножим на $x(x+4)$: $$360(x+4)-360x=3x(x+4),\\qquad 1440=3x^{2}+12x .$$ Делим на $3$: $$x^{2}+4x-480=0 .$$ Дискриминант $16+1920=1936=44^{2}$, корни $$x=\\frac{-4\\pm44}{2}=20\\ \\text{или}\\ -24 .$$ Отрицательный корень отбрасываем.\n\n**Проверка:** $\\tfrac{360}{20}=18$ дней по плану, $\\tfrac{360}{24}=15$ дней фактически — на $3$ дня меньше ✓\n\n**Ответ:** планировалось $20$ деталей в день.",
    "en": "Suppose the plan was $x$ parts a day. Then the planned duration is $\\dfrac{360}{x}$ days and the actual one $\\dfrac{360}{x+4}$ days.\n\nThe actual is $3$ days shorter: $$\\frac{360}{x}-\\frac{360}{x+4}=3 .$$ Multiply by $x(x+4)$: $$360(x+4)-360x=3x(x+4),\\qquad 1440=3x^{2}+12x .$$ Divide by $3$: $$x^{2}+4x-480=0 .$$ The discriminant is $16+1920=1936=44^{2}$, so $$x=\\frac{-4\\pm44}{2}=20\\ \\text{or}\\ -24 .$$ Discard the negative root.\n\n**Check:** $\\tfrac{360}{20}=18$ planned days against $\\tfrac{360}{24}=15$ actual — three days fewer ✓\n\n**Answer:** $20$ parts a day were planned."
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
    "ru": "Пусть вторая труба наполняет бассейн за $x$ часов, тогда первая — за $\\tfrac x2$ часов (вдвое быстрее).\n\nСкладываем производительности: $$\\frac{1}{x/2}+\\frac1x=\\frac14,\\qquad \\frac2x+\\frac1x=\\frac14,\\qquad \\frac3x=\\frac14 .$$ Отсюда $x=12$.\n\n**Ответ:** первая труба наполняет бассейн за $6$ часов, вторая — за $12$.\n\n**Проверка:** $\\tfrac16+\\tfrac1{12}=\\tfrac{2+1}{12}=\\tfrac14$ ✓",
    "en": "Let the second pipe take $x$ hours; then the first takes $\\tfrac x2$ hours (twice as fast).\n\nAdd the rates: $$\\frac{1}{x/2}+\\frac1x=\\frac14,\\qquad \\frac2x+\\frac1x=\\frac14,\\qquad \\frac3x=\\frac14 .$$ Hence $x=12$.\n\n**Answer:** the first pipe takes $6$ hours, the second $12$.\n\n**Check:** $\\tfrac16+\\tfrac1{12}=\\tfrac{2+1}{12}=\\tfrac14$ ✓"
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
    "ru": "**Равные расстояния.** Пусть весь путь равен $2s$. Время равно $$\\frac{s}{60}+\\frac{s}{40}=\\frac{2s+3s}{120}=\\frac{5s}{120}=\\frac{s}{24}.$$ Значит $$v_{\\text{ср}}=\\frac{2s}{s/24}=48\\ \\text{км/ч}.$$ Это гармоническое среднее скоростей: $\\dfrac{2\\cdot60\\cdot40}{60+40}=48$.\n\n**Равные промежутки времени.** Пусть каждый длится $t$. Путь равен $60t+40t=100t$, всё время равно $2t$, поэтому $$v_{\\text{ср}}=\\frac{100t}{2t}=50\\ \\text{км/ч}$$ — теперь это обычное среднее арифметическое.\n\n**Ответ:** $48$ км/ч в первом случае и $50$ км/ч во втором. *Замечание:* гармоническое среднее всегда меньше арифметического — в первом случае автомобиль дольше едет медленно.",
    "en": "**Equal distances.** Let the whole route be $2s$. The time is $$\\frac{s}{60}+\\frac{s}{40}=\\frac{2s+3s}{120}=\\frac{5s}{120}=\\frac{s}{24},$$ so $$v_{\\text{avg}}=\\frac{2s}{s/24}=48\\ \\text{km/h}.$$ That is the harmonic mean of the speeds: $\\dfrac{2\\cdot60\\cdot40}{60+40}=48$.\n\n**Equal times.** Let each last $t$. The distance is $60t+40t=100t$ and the total time $2t$, so $$v_{\\text{avg}}=\\frac{100t}{2t}=50\\ \\text{km/h}$$ — the ordinary arithmetic mean.\n\n**Answer:** $48$ km/h in the first case and $50$ km/h in the second. *Remark:* the harmonic mean is always the smaller — in the first case the car spends longer going slowly."
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
    "ru": "Положим $u=\\dfrac1x$, $v=\\dfrac1y$. Система принимает вид $$u+v=\\frac56,\\qquad u^{2}+v^{2}=\\frac{13}{36}.$$ Обозначим $s=u+v=\\tfrac56$ и $p=uv$. Тогда $$u^{2}+v^{2}=s^{2}-2p=\\frac{25}{36}-2p=\\frac{13}{36},$$ откуда $2p=\\dfrac{12}{36}=\\dfrac13$ и $p=\\dfrac16$.\n\nЧисла $u,v$ — корни уравнения $$t^{2}-\\frac56t+\\frac16=0 .$$ Умножим на $6$: $6t^{2}-5t+1=0$, дискриминант $25-24=1$, корни $t=\\dfrac{5\\pm1}{12}$, то есть $t=\\tfrac12$ и $t=\\tfrac13$.\n\nВозвращаемся: $x=\\tfrac1u$ и $y=\\tfrac1v$, значит $\\{x,y\\}=\\{2,3\\}$.\n\n**Проверка:** $\\tfrac12+\\tfrac13=\\tfrac56$ ✓ и $\\tfrac14+\\tfrac19=\\tfrac{9+4}{36}=\\tfrac{13}{36}$ ✓",
    "en": "Put $u=\\dfrac1x$, $v=\\dfrac1y$. The system becomes $$u+v=\\frac56,\\qquad u^{2}+v^{2}=\\frac{13}{36}.$$ Write $s=u+v=\\tfrac56$ and $p=uv$. Then $$u^{2}+v^{2}=s^{2}-2p=\\frac{25}{36}-2p=\\frac{13}{36},$$ so $2p=\\dfrac{12}{36}=\\dfrac13$ and $p=\\dfrac16$.\n\nThus $u,v$ are the roots of $$t^{2}-\\frac56t+\\frac16=0 .$$ Multiplying by $6$: $6t^{2}-5t+1=0$ with discriminant $25-24=1$ and roots $t=\\dfrac{5\\pm1}{12}$, that is $t=\\tfrac12$ and $t=\\tfrac13$.\n\nGoing back, $x=\\tfrac1u$ and $y=\\tfrac1v$, so $\\{x,y\\}=\\{2,3\\}$.\n\n**Check:** $\\tfrac12+\\tfrac13=\\tfrac56$ ✓ and $\\tfrac14+\\tfrac19=\\tfrac{9+4}{36}=\\tfrac{13}{36}$ ✓"
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
    "ru": "Обозначим производительности труб через $a$, $b$, $c$ (доля бассейна в час). По условию $$a+b=\\frac1{12},\\qquad b+c=\\frac1{15},\\qquad a+c=\\frac1{20}.$$\n\n**Складываем все три:** $$2(a+b+c)=\\frac1{12}+\\frac1{15}+\\frac1{20}=\\frac{5+4+3}{60}=\\frac{12}{60}=\\frac15 .$$ Значит $$a+b+c=\\frac1{10},$$ то есть втроём трубы наполняют десятую часть бассейна за час, и весь бассейн — за $10$ часов.\n\n**Ответ:** за $10$ часов.\n\n*Дополнительно.* Вычитая из общей суммы каждое из уравнений, находим и отдельные производительности: $$c=\\frac1{10}-\\frac1{12}=\\frac1{60},\\qquad a=\\frac1{10}-\\frac1{15}=\\frac1{30},\\qquad b=\\frac1{10}-\\frac1{20}=\\frac1{20},$$ то есть трубы поодиночке наполняют бассейн за $30$, $20$ и $60$ часов.",
    "en": "Let the rates be $a$, $b$, $c$ (pools per hour). The hypotheses read $$a+b=\\frac1{12},\\qquad b+c=\\frac1{15},\\qquad a+c=\\frac1{20}.$$\n\n**Add all three:** $$2(a+b+c)=\\frac1{12}+\\frac1{15}+\\frac1{20}=\\frac{5+4+3}{60}=\\frac{12}{60}=\\frac15 .$$ Hence $$a+b+c=\\frac1{10},$$ so together they fill one tenth of the pool per hour, and the whole pool in $10$ hours.\n\n**Answer:** $10$ hours.\n\n*Extra.* Subtracting each equation from the total gives the individual rates: $$c=\\frac1{10}-\\frac1{12}=\\frac1{60},\\qquad a=\\frac1{10}-\\frac1{15}=\\frac1{30},\\qquad b=\\frac1{10}-\\frac1{20}=\\frac1{20},$$ so alone the pipes take $30$, $20$ and $60$ hours."
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
    "ru": "Пусть скорости равны $v_1$ и $v_2$, а встреча произошла через $t$ часов.\n\nК моменту встречи первый прошёл $v_1t$, второй — $v_2t$. После встречи первому остаётся ровно тот кусок, который прошёл второй, то есть $v_2t$; он проходит его за $4$ часа: $$\\frac{v_2t}{v_1}=4 .$$ Аналогично для второго: $$\\frac{v_1t}{v_2}=9 .$$\n\n**Перемножаем эти два равенства.** Дроби $\\tfrac{v_2}{v_1}$ и $\\tfrac{v_1}{v_2}$ взаимно обратны и сокращаются: $$\\frac{v_2t}{v_1}\\cdot\\frac{v_1t}{v_2}=t^{2}=4\\cdot9=36 .$$ Так как $t>0$, получаем $t=6$.\n\n**Ответ:** встреча произошла через $6$ часов.\n\n*Проверка:* из $\\tfrac{v_1}{v_2}\\cdot6=9$ следует $\\tfrac{v_1}{v_2}=\\tfrac32$. Возьмём $v_1=3$, $v_2=2$: за $6$ часов они пройдут $18$ и $12$, то есть $AB=30$. Первому останется $12$ — это $4$ часа при скорости $3$ ✓ Второму останется $18$ — это $9$ часов при скорости $2$ ✓\n\n*Общая формула:* $t=\\sqrt{t_1t_2}$ — время до встречи есть **геометрическое среднее** оставшихся времён.",
    "en": "Let the speeds be $v_1$ and $v_2$, and let the meeting happen after $t$ hours.\n\nBy the meeting the first has walked $v_1t$ and the second $v_2t$. After the meeting the first has left exactly the stretch the second had covered, namely $v_2t$, and walks it in $4$ hours: $$\\frac{v_2t}{v_1}=4 .$$ Similarly for the second: $$\\frac{v_1t}{v_2}=9 .$$\n\n**Multiply the two.** The fractions $\\tfrac{v_2}{v_1}$ and $\\tfrac{v_1}{v_2}$ are reciprocals and cancel: $$\\frac{v_2t}{v_1}\\cdot\\frac{v_1t}{v_2}=t^{2}=4\\cdot9=36 .$$ As $t>0$, we get $t=6$.\n\n**Answer:** they met after $6$ hours.\n\n*Check:* from $\\tfrac{v_1}{v_2}\\cdot6=9$ we get $\\tfrac{v_1}{v_2}=\\tfrac32$. Take $v_1=3$, $v_2=2$: in $6$ hours they cover $18$ and $12$, so $AB=30$. The first has $12$ left — four hours at speed $3$ ✓ The second has $18$ left — nine hours at speed $2$ ✓\n\n*General formula:* $t=\\sqrt{t_1t_2}$ — the time to the meeting is the **geometric mean** of the remaining times."
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
    "ru": "Примем за единицу количество травы, съедаемое одной коровой за один день. Обозначим:\n\n$a$ — запас травы на лугу в начальный момент,\n$r$ — прирост травы за один день.\n\nЗа $d$ дней $n$ коров съедают $nd$ единиц, а всего травы за это время оказывается $a+rd$. Условие «съели всю траву за $d$ дней» означает $$nd=a+rd .$$\n\n**Составляем уравнения.** $$70\\cdot24=a+24r\\ \\Longrightarrow\\ 1680=a+24r,$$ $$30\\cdot60=a+60r\\ \\Longrightarrow\\ 1800=a+60r .$$\n\n**Решаем.** Вычитаем первое из второго: $$120=36r\\quad\\Longrightarrow\\quad r=\\frac{10}{3}.$$ Тогда $$a=1680-24\\cdot\\frac{10}{3}=1680-80=1600 .$$\n\n**Отвечаем на вопрос.** Для $d=96$: $$96n=a+96r=1600+96\\cdot\\frac{10}{3}=1600+320=1920,$$ откуда $$n=\\frac{1920}{96}=20 .$$\n\n**Ответ:** $20$ коров.\n\n*Замечание.* Эта задача — из «Всеобщей арифметики» Ньютона. Её главная идея: величина, которая **пополняется во время процесса**, должна входить в баланс отдельным слагаемым, пропорциональным времени.",
    "en": "Take as the unit the amount of grass one cow eats in one day. Write:\n\n$a$ for the grass present at the start,\n$r$ for the daily growth.\n\nIn $d$ days $n$ cows eat $nd$ units, while the total grass available over that time is $a+rd$. \"They finish the grass in $d$ days\" means $$nd=a+rd .$$\n\n**Set up the equations.** $$70\\cdot24=a+24r\\ \\Longrightarrow\\ 1680=a+24r,$$ $$30\\cdot60=a+60r\\ \\Longrightarrow\\ 1800=a+60r .$$\n\n**Solve.** Subtracting the first from the second, $$120=36r\\quad\\Longrightarrow\\quad r=\\frac{10}{3},$$ and then $$a=1680-24\\cdot\\frac{10}{3}=1680-80=1600 .$$\n\n**Answer the question.** For $d=96$: $$96n=a+96r=1600+96\\cdot\\frac{10}{3}=1600+320=1920,$$ so $$n=\\frac{1920}{96}=20 .$$\n\n**Answer:** $20$ cows.\n\n*Remark.* The problem comes from Newton’s *Arithmetica Universalis*. Its main idea: a quantity that is **replenished during the process** must enter the balance as its own term, proportional to time."
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
    "ru": "По теореме Виета числа $x,y,z$ — корни кубического уравнения $$t^{3}-\\sigma_1t^{2}+\\sigma_2t-\\sigma_3=0,$$ где $\\sigma_1=6$, $\\sigma_2=11$, $\\sigma_3=6$. То есть $$t^{3}-6t^{2}+11t-6=0 .$$\n\n**Ищем корни.** Целые корни — среди делителей свободного члена $6$: это $\\pm1,\\pm2,\\pm3,\\pm6$. Подставляем: $$f(1)=1-6+11-6=0\\ \\checkmark$$ Делим на $t-1$: $$t^{3}-6t^{2}+11t-6=(t-1)\\left(t^{2}-5t+6\\right)=(t-1)(t-2)(t-3).$$\n\n**Ответ:** $\\{x,y,z\\}=\\{1,2,3\\}$ в любом порядке — всего $6$ упорядоченных троек.\n\n**Проверка:** $1+2+3=6$ ✓, $2+6+3=11$ ✓, $1\\cdot2\\cdot3=6$ ✓",
    "en": "By Vieta the numbers $x,y,z$ are the roots of the cubic $$t^{3}-\\sigma_1t^{2}+\\sigma_2t-\\sigma_3=0,$$ with $\\sigma_1=6$, $\\sigma_2=11$, $\\sigma_3=6$, that is $$t^{3}-6t^{2}+11t-6=0 .$$\n\n**Find the roots.** Integer roots lie among the divisors of the constant term $6$: $\\pm1,\\pm2,\\pm3,\\pm6$. Testing, $$f(1)=1-6+11-6=0\\ \\checkmark$$ Dividing by $t-1$: $$t^{3}-6t^{2}+11t-6=(t-1)\\left(t^{2}-5t+6\\right)=(t-1)(t-2)(t-3).$$\n\n**Answer:** $\\{x,y,z\\}=\\{1,2,3\\}$ in any order — six ordered triples in all.\n\n**Check:** $1+2+3=6$ ✓, $2+6+3=11$ ✓, $1\\cdot2\\cdot3=6$ ✓"
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
    "ru": "Пусть длина пути равна $S$.\n\n**Первый автомобиль.** Время равно $$T_1=\\frac{S/2}{40}+\\frac{S/2}{60}=\\frac S2\\left(\\frac1{40}+\\frac1{60}\\right)=\\frac S2\\cdot\\frac{3+2}{120}=\\frac{S}{48}.$$ Его средняя скорость — гармоническое среднее: $48$ км/ч.\n\n**Второй автомобиль.** Пусть весь путь занял $T_2$; тогда $$S=40\\cdot\\frac{T_2}{2}+60\\cdot\\frac{T_2}{2}=50\\,T_2\\quad\\Longrightarrow\\quad T_2=\\frac{S}{50}.$$ Его средняя скорость — арифметическое среднее: $50$ км/ч.\n\n**Сравнение.** $$\\frac{T_1}{T_2}=\\frac{S/48}{S/50}=\\frac{50}{48}=\\frac{25}{24}\\approx1{,}042 .$$ Значит первый автомобиль потратил примерно на $4{,}2\\%$ больше времени.\n\n**Ответ:** раньше приехал второй; время первого больше в $\\tfrac{25}{24}$ раза.\n\n*Почему так.* Первый автомобиль **дольше** едет с меньшей скоростью (медленный участок занимает больше времени, хотя по длине он такой же). Общий принцип: гармоническое среднее никогда не превосходит арифметическое, а равны они лишь при одинаковых скоростях.",
    "en": "Let the distance be $S$.\n\n**The first car.** Its time is $$T_1=\\frac{S/2}{40}+\\frac{S/2}{60}=\\frac S2\\left(\\frac1{40}+\\frac1{60}\\right)=\\frac S2\\cdot\\frac{3+2}{120}=\\frac{S}{48}.$$ Its average speed is the harmonic mean: $48$ km/h.\n\n**The second car.** Let the trip take $T_2$; then $$S=40\\cdot\\frac{T_2}{2}+60\\cdot\\frac{T_2}{2}=50\\,T_2\\quad\\Longrightarrow\\quad T_2=\\frac{S}{50}.$$ Its average speed is the arithmetic mean: $50$ km/h.\n\n**Compare.** $$\\frac{T_1}{T_2}=\\frac{S/48}{S/50}=\\frac{50}{48}=\\frac{25}{24}\\approx1.042 .$$ So the first car spends about $4.2\\%$ longer.\n\n**Answer:** the second car arrives first; the first car’s time is $\\tfrac{25}{24}$ times as long.\n\n*Why.* The first car spends **longer** at the lower speed (the slow stretch takes more time even though it is the same length). The general principle: the harmonic mean never exceeds the arithmetic mean, with equality only when the speeds are equal."
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
    "ru": "Пусть число равно $\\overline{ab}=10a+b$, где $a\\in\\{1,\\dots,9\\}$ и $b\\in\\{0,\\dots,9\\}$. Условие даёт $$10a+b=4(a+b)=4a+4b .$$ Переносим: $$6a=3b\\quad\\Longrightarrow\\quad b=2a .$$\n\nОстаётся перебрать $a$ так, чтобы $b=2a$ оставалось цифрой, то есть $2a\\le9$: подходят $a=1,2,3,4$.\n\n$$a=1\\Rightarrow12,\\qquad a=2\\Rightarrow24,\\qquad a=3\\Rightarrow36,\\qquad a=4\\Rightarrow48 .$$\n\n**Проверка:** $12=4\\cdot3$ ✓, $24=4\\cdot6$ ✓, $36=4\\cdot9$ ✓, $48=4\\cdot12$ ✓\n\n**Ответ:** $12,\\ 24,\\ 36,\\ 48$.",
    "en": "Let the number be $\\overline{ab}=10a+b$ with $a\\in\\{1,\\dots,9\\}$ and $b\\in\\{0,\\dots,9\\}$. The condition gives $$10a+b=4(a+b)=4a+4b .$$ Rearranging, $$6a=3b\\quad\\Longrightarrow\\quad b=2a .$$\n\nIt remains to take those $a$ for which $b=2a$ is still a digit, that is $2a\\le9$: namely $a=1,2,3,4$.\n\n$$a=1\\Rightarrow12,\\qquad a=2\\Rightarrow24,\\qquad a=3\\Rightarrow36,\\qquad a=4\\Rightarrow48 .$$\n\n**Check:** $12=4\\cdot3$ ✓, $24=4\\cdot6$ ✓, $36=4\\cdot9$ ✓, $48=4\\cdot12$ ✓\n\n**Answer:** $12,\\ 24,\\ 36,\\ 48$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Решите систему $$x+y=10,\\qquad x-y=4 .$$",
    "en": "Solve the system $$x+y=10,\\qquad x-y=4 .$$"
   },
   "hint": {
    "ru": "Сложите уравнения.",
    "en": "Add the equations."
   },
   "sol": {
    "ru": "Сложим уравнения — переменная $y$ исчезает: $$2x=14\\quad\\Longrightarrow\\quad x=7 .$$\n\nПодставим в первое: $7+y=10$, значит $y=3$.\n\n**Проверка:** $7+3=10$ ✓ и $7-3=4$ ✓\n\n**Ответ:** $x=7$, $y=3$.\n\n**Общее наблюдение.** Если известны сумма $s$ и разность $d$ двух чисел, то $$x=\\frac{s+d}{2},\\qquad y=\\frac{s-d}{2} .$$",
    "en": "Add the equations — the variable $y$ disappears: $$2x=14\\quad\\Longrightarrow\\quad x=7 .$$\n\nSubstituting into the first: $7+y=10$, so $y=3$.\n\n**Check:** $7+3=10$ ✓ and $7-3=4$ ✓\n\n**Answer:** $x=7$, $y=3$.\n\n**General observation.** Given the sum $s$ and difference $d$ of two numbers, $$x=\\frac{s+d}{2},\\qquad y=\\frac{s-d}{2} .$$"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Ручка втрое дороже карандаша, а вместе они стоят $2400$ сум. Сколько стоит каждый?",
    "en": "A pen costs three times as much as a pencil, and together they cost $2400$ soum. Find each price."
   },
   "hint": {
    "ru": "Обозначьте цену карандаша за $x$.",
    "en": "Let the pencil cost $x$."
   },
   "sol": {
    "ru": "Пусть карандаш стоит $x$ сум; тогда ручка стоит $3x$, и по условию $$x+3x=2400\\quad\\Longrightarrow\\quad 4x=2400\\quad\\Longrightarrow\\quad x=600 .$$\n\nЗначит карандаш — $600$ сум, ручка — $1800$ сум.\n\n**Проверка:** $1800=3\\cdot600$ ✓ и $600+1800=2400$ ✓\n\n**Ответ:** карандаш $600$ сум, ручка $1800$ сум.",
    "en": "Let the pencil cost $x$ soum; then the pen costs $3x$, and $$x+3x=2400\\quad\\Longrightarrow\\quad 4x=2400\\quad\\Longrightarrow\\quad x=600 .$$\n\nSo the pencil costs $600$ soum and the pen $1800$ soum.\n\n**Check:** $1800=3\\cdot600$ ✓ and $600+1800=2400$ ✓\n\n**Answer:** pencil $600$ soum, pen $1800$ soum."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Число увеличили на $20\\%$ и получили $96$. Каким было число?",
    "en": "A number increased by $20\\%$ becomes $96$. What was the number?"
   },
   "hint": {
    "ru": "Увеличение на $20\\%$ — это умножение на $1{,}2$.",
    "en": "Increasing by $20\\%$ means multiplying by $1.2$."
   },
   "sol": {
    "ru": "Пусть исходное число равно $x$. Увеличение на $20\\%$ означает умножение на $1{,}2$: $$1{,}2\\,x=96\\quad\\Longrightarrow\\quad x=\\frac{96}{1{,}2}=80 .$$\n\n**Проверка:** $20\\%$ от $80$ — это $16$, и $80+16=96$ ✓\n\n**Ответ:** $80$.\n\n**Частая ошибка.** Нельзя просто вычесть $20\\%$ от $96$: это дало бы $76{,}8$, а не $80$. Проценты всегда считаются от **исходной** величины.",
    "en": "Let the original number be $x$. Increasing by $20\\%$ means multiplying by $1.2$: $$1.2\\,x=96\\quad\\Longrightarrow\\quad x=\\frac{96}{1.2}=80 .$$\n\n**Check:** $20\\%$ of $80$ is $16$, and $80+16=96$ ✓\n\n**Answer:** $80$.\n\n**A common mistake.** One cannot simply subtract $20\\%$ of $96$: that would give $76.8$, not $80$. Percentages are always taken of the **original** quantity."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Два числа относятся как $3:5$, а их разность равна $14$. Найдите эти числа.",
    "en": "Two numbers are in the ratio $3:5$ and differ by $14$. Find them."
   },
   "hint": {
    "ru": "Обозначьте их $3k$ и $5k$.",
    "en": "Write them as $3k$ and $5k$."
   },
   "sol": {
    "ru": "Обозначим числа $3k$ и $5k$. Их разность $$5k-3k=2k=14\\quad\\Longrightarrow\\quad k=7 .$$\n\nЗначит числа равны $$3\\cdot7=21\\qquad\\text{и}\\qquad 5\\cdot7=35 .$$\n\n**Проверка:** $21:35=3:5$ ✓ и $35-21=14$ ✓\n\n**Ответ:** $21$ и $35$.",
    "en": "Write the numbers as $3k$ and $5k$. Their difference is $$5k-3k=2k=14\\quad\\Longrightarrow\\quad k=7 .$$\n\nSo the numbers are $$3\\cdot7=21\\qquad\\text{and}\\qquad 5\\cdot7=35 .$$\n\n**Check:** $21:35=3:5$ ✓ and $35-21=14$ ✓\n\n**Answer:** $21$ and $35$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Решите систему $$3x+y=11,\\qquad x-y=1 .$$",
    "en": "Solve the system $$3x+y=11,\\qquad x-y=1 .$$"
   },
   "hint": {
    "ru": "Сложите уравнения.",
    "en": "Add the equations."
   },
   "sol": {
    "ru": "Сложим уравнения: $$4x=12\\quad\\Longrightarrow\\quad x=3 .$$\n\nИз второго уравнения $y=x-1=2$.\n\n**Проверка:** $3\\cdot3+2=11$ ✓ и $3-2=1$ ✓\n\n**Ответ:** $x=3$, $y=2$.",
    "en": "Add the equations: $$4x=12\\quad\\Longrightarrow\\quad x=3 .$$\n\nThe second equation gives $y=x-1=2$.\n\n**Check:** $3\\cdot3+2=11$ ✓ and $3-2=1$ ✓\n\n**Answer:** $x=3$, $y=2$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Рубашку уценили на $20\\%$, и теперь она стоит $64\\,000$ сум. Какой была цена до уценки?",
    "en": "A shirt was discounted by $20\\%$ and now costs $64\\,000$ soum. What was the price before the discount?"
   },
   "hint": {
    "ru": "После скидки осталось $80\\%$ прежней цены.",
    "en": "After the discount $80\\%$ of the old price remains."
   },
   "sol": {
    "ru": "Пусть прежняя цена равна $x$. После скидки в $20\\%$ осталось $80\\%$, то есть $$0{,}8\\,x=64\\,000\\quad\\Longrightarrow\\quad x=\\frac{64\\,000}{0{,}8}=80\\,000 .$$\n\n**Проверка:** $20\\%$ от $80\\,000$ — это $16\\,000$, и $80\\,000-16\\,000=64\\,000$ ✓\n\n**Ответ:** $80\\,000$ сум.",
    "en": "Let the old price be $x$. After a $20\\%$ discount $80\\%$ remains, so $$0.8\\,x=64\\,000\\quad\\Longrightarrow\\quad x=\\frac{64\\,000}{0.8}=80\\,000 .$$\n\n**Check:** $20\\%$ of $80\\,000$ is $16\\,000$, and $80\\,000-16\\,000=64\\,000$ ✓\n\n**Answer:** $80\\,000$ soum."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Решите систему $$4x-3y=6,\\qquad 2x+y=8 .$$",
    "en": "Solve the system $$4x-3y=6,\\qquad 2x+y=8 .$$"
   },
   "hint": {
    "ru": "Выразите $y$ из второго уравнения.",
    "en": "Express $y$ from the second equation."
   },
   "sol": {
    "ru": "Из второго уравнения $$y=8-2x .$$\n\nПодставим в первое: $$4x-3(8-2x)=6\\quad\\Longrightarrow\\quad 4x-24+6x=6\\quad\\Longrightarrow\\quad 10x=30 ,$$ откуда $x=3$ и $y=8-6=2$.\n\n**Проверка:** $4\\cdot3-3\\cdot2=12-6=6$ ✓ и $2\\cdot3+2=8$ ✓\n\n**Ответ:** $x=3$, $y=2$.",
    "en": "From the second equation $$y=8-2x .$$\n\nSubstitute into the first: $$4x-3(8-2x)=6\\quad\\Longrightarrow\\quad 4x-24+6x=6\\quad\\Longrightarrow\\quad 10x=30 ,$$ so $x=3$ and $y=8-6=2$.\n\n**Check:** $4\\cdot3-3\\cdot2=12-6=6$ ✓ and $2\\cdot3+2=8$ ✓\n\n**Answer:** $x=3$, $y=2$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Лодка проходит $30$ км по течению за $2$ часа, а обратно — за $3$ часа. Найдите собственную скорость лодки и скорость течения.",
    "en": "A boat covers $30$ km downstream in $2$ hours and returns in $3$ hours. Find the speed of the boat in still water and the speed of the current."
   },
   "hint": {
    "ru": "По течению скорость $v+c$, против — $v-c$.",
    "en": "Downstream the speed is $v+c$, upstream $v-c$."
   },
   "sol": {
    "ru": "Обозначим собственную скорость лодки $v$, скорость течения $c$.\n\n**По течению:** $$v+c=\\frac{30}{2}=15 .$$\n\n**Против течения:** $$v-c=\\frac{30}{3}=10 .$$\n\nСложив, получаем $2v=25$, то есть $v=12{,}5$ км/ч; вычитая, $2c=5$, то есть $c=2{,}5$ км/ч.\n\n**Проверка:** по течению $15$ км/ч, за $2$ ч — ровно $30$ км ✓ Против течения $10$ км/ч, за $3$ ч — $30$ км ✓\n\n**Ответ:** $12{,}5$ км/ч и $2{,}5$ км/ч.",
    "en": "Let the boat’s own speed be $v$ and the current’s speed $c$.\n\n**Downstream:** $$v+c=\\frac{30}{2}=15 .$$\n\n**Upstream:** $$v-c=\\frac{30}{3}=10 .$$\n\nAdding gives $2v=25$, i.e. $v=12.5$ km/h; subtracting gives $2c=5$, i.e. $c=2.5$ km/h.\n\n**Check:** downstream at $15$ km/h for $2$ h is exactly $30$ km ✓ Upstream at $10$ km/h for $3$ h is $30$ km ✓\n\n**Answer:** $12.5$ km/h and $2.5$ km/h."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Сколько литров $40\\%$-го и $70\\%$-го раствора кислоты надо смешать, чтобы получить $30$ литров $50\\%$-го раствора?",
    "en": "How many litres of $40\\%$ and $70\\%$ acid must be mixed to obtain $30$ litres of $50\\%$ acid?"
   },
   "hint": {
    "ru": "Составьте два уравнения: по объёму и по количеству кислоты.",
    "en": "Write two equations: one for volume, one for the amount of acid."
   },
   "sol": {
    "ru": "Пусть взяли $x$ литров $40\\%$-го раствора и $y$ литров $70\\%$-го.\n\n**Уравнение по объёму:** $$x+y=30 .$$\n\n**Уравнение по чистой кислоте:** $$0{,}4x+0{,}7y=0{,}5\\cdot30=15 .$$\n\nПодставим $x=30-y$ во второе: $$0{,}4(30-y)+0{,}7y=15\\quad\\Longrightarrow\\quad 12+0{,}3y=15\\quad\\Longrightarrow\\quad y=10 ,$$ и тогда $x=20$.\n\n**Проверка:** кислоты $0{,}4\\cdot20+0{,}7\\cdot10=8+7=15$ литров, то есть ровно $50\\%$ от $30$ ✓\n\n**Ответ:** $20$ л сорокапроцентного и $10$ л семидесятипроцентного.",
    "en": "Let $x$ litres of the $40\\%$ solution and $y$ litres of the $70\\%$ solution be used.\n\n**Volume equation:** $$x+y=30 .$$\n\n**Pure-acid equation:** $$0.4x+0.7y=0.5\\cdot30=15 .$$\n\nSubstituting $x=30-y$ into the second, $$0.4(30-y)+0.7y=15\\quad\\Longrightarrow\\quad 12+0.3y=15\\quad\\Longrightarrow\\quad y=10 ,$$ and then $x=20$.\n\n**Check:** the acid amounts to $0.4\\cdot20+0.7\\cdot10=8+7=15$ litres, exactly $50\\%$ of $30$ ✓\n\n**Answer:** $20$ L of the $40\\%$ and $10$ L of the $70\\%$ solution."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Двое рабочих вместе выполняют работу за $6$ дней, а первый в одиночку — за $10$ дней. За сколько дней справится второй?",
    "en": "Two workers together finish a job in $6$ days; the first alone takes $10$ days. How long does the second need alone?"
   },
   "hint": {
    "ru": "Складываются не времена, а производительности.",
    "en": "Rates add, not times."
   },
   "sol": {
    "ru": "Производительность — это доля работы за день. Первый делает $\\dfrac1{10}$ работы в день, вместе они делают $\\dfrac16$.\n\nЗначит второй делает $$\\frac16-\\frac1{10}=\\frac{5-3}{30}=\\frac{2}{30}=\\frac1{15} $$ работы в день, то есть справится за $15$ дней.\n\n**Проверка:** $\\dfrac1{10}+\\dfrac1{15}=\\dfrac{3+2}{30}=\\dfrac16$ ✓\n\n**Ответ:** $15$ дней.\n\n**Частая ошибка.** Нельзя вычитать времена: $10-6=4$ — неверный ответ.",
    "en": "A rate is the fraction of the job done per day. The first does $\\dfrac1{10}$ of the job per day, together they do $\\dfrac16$.\n\nSo the second does $$\\frac16-\\frac1{10}=\\frac{5-3}{30}=\\frac{2}{30}=\\frac1{15} $$ per day, i.e. finishes in $15$ days.\n\n**Check:** $\\dfrac1{10}+\\dfrac1{15}=\\dfrac{3+2}{30}=\\dfrac16$ ✓\n\n**Answer:** $15$ days.\n\n**A common mistake.** One may not subtract times: $10-6=4$ is a wrong answer."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Сумма цифр двузначного числа равна $12$. Если цифры поменять местами, число увеличится на $18$. Найдите число.",
    "en": "The digits of a two-digit number add up to $12$. Swapping the digits increases the number by $18$. Find the number."
   },
   "hint": {
    "ru": "Запишите число как $10a+b$.",
    "en": "Write the number as $10a+b$."
   },
   "sol": {
    "ru": "Пусть число равно $10a+b$, где $a$ — цифра десятков, $b$ — цифра единиц.\n\n**Первое условие:** $a+b=12$.\n\n**Второе условие:** число с переставленными цифрами — это $10b+a$, и $$(10b+a)-(10a+b)=9(b-a)=18\\quad\\Longrightarrow\\quad b-a=2 .$$\n\nРешая систему $a+b=12$, $b-a=2$, получаем $b=7$, $a=5$.\n\n**Проверка:** число $57$, сумма цифр $12$ ✓, перестановка даёт $75=57+18$ ✓\n\n**Ответ:** $57$.",
    "en": "Let the number be $10a+b$, with $a$ the tens digit and $b$ the units digit.\n\n**First condition:** $a+b=12$.\n\n**Second condition:** the swapped number is $10b+a$, and $$(10b+a)-(10a+b)=9(b-a)=18\\quad\\Longrightarrow\\quad b-a=2 .$$\n\nSolving $a+b=12$, $b-a=2$ gives $b=7$, $a=5$.\n\n**Check:** the number is $57$, its digit sum is $12$ ✓, and swapping gives $75=57+18$ ✓\n\n**Answer:** $57$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Сумма трёх подряд идущих целых чисел равна $96$. Найдите их.",
    "en": "Three consecutive integers add up to $96$. Find them."
   },
   "hint": {
    "ru": "Обозначьте среднее число за $n$.",
    "en": "Let the middle number be $n$."
   },
   "sol": {
    "ru": "Пусть среднее число равно $n$; тогда числа — это $n-1$, $n$, $n+1$, и их сумма равна $$3n=96\\quad\\Longrightarrow\\quad n=32 .$$\n\n**Ответ:** $31$, $32$, $33$.\n\n**Проверка:** $31+32+33=96$ ✓\n\n**Замечание.** Удобство обозначения через **среднее** число в том, что крайние слагаемые сразу сокращаются. Тот же приём работает для любого нечётного количества подряд идущих чисел: их сумма всегда делится на их количество.",
    "en": "Let the middle number be $n$; the numbers are $n-1$, $n$, $n+1$ and their sum is $$3n=96\\quad\\Longrightarrow\\quad n=32 .$$\n\n**Answer:** $31$, $32$, $33$.\n\n**Check:** $31+32+33=96$ ✓\n\n**Remark.** Naming the **middle** number is convenient because the outer terms cancel at once. The same trick works for any odd count of consecutive numbers: their sum is always divisible by how many there are."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Машина проехала из $A$ в $B$ со скоростью $60$ км/ч, а обратно — со скоростью $40$ км/ч, затратив на всё $5$ часов. Найдите расстояние $AB$.",
    "en": "A car drove from $A$ to $B$ at $60$ km/h and back at $40$ km/h, taking $5$ hours in total. Find the distance $AB$."
   },
   "hint": {
    "ru": "Сложите два времени.",
    "en": "Add the two times."
   },
   "sol": {
    "ru": "Пусть расстояние равно $d$ км. Время туда — $\\dfrac d{60}$, обратно — $\\dfrac d{40}$, и по условию $$\\frac d{60}+\\frac d{40}=5 .$$\n\nПриведём к общему знаменателю $120$: $$\\frac{2d+3d}{120}=5\\quad\\Longrightarrow\\quad \\frac{5d}{120}=5\\quad\\Longrightarrow\\quad d=120 .$$\n\n**Проверка:** $\\dfrac{120}{60}=2$ ч и $\\dfrac{120}{40}=3$ ч, всего $5$ ч ✓\n\n**Ответ:** $120$ км.\n\n**Полезно заметить:** средняя скорость за всю поездку равна $\\dfrac{240}{5}=48$ км/ч, а вовсе не $50$ — это среднее гармоническое, а не арифметическое.",
    "en": "Let the distance be $d$ km. The outward time is $\\dfrac d{60}$, the return $\\dfrac d{40}$, and $$\\frac d{60}+\\frac d{40}=5 .$$\n\nOver the common denominator $120$: $$\\frac{2d+3d}{120}=5\\quad\\Longrightarrow\\quad \\frac{5d}{120}=5\\quad\\Longrightarrow\\quad d=120 .$$\n\n**Check:** $\\dfrac{120}{60}=2$ h and $\\dfrac{120}{40}=3$ h, $5$ h in all ✓\n\n**Answer:** $120$ km.\n\n**Worth noticing:** the average speed for the whole trip is $\\dfrac{240}{5}=48$ km/h, not $50$ — it is the harmonic, not the arithmetic, mean."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Решите систему $$x+y=5,\\qquad xy=6 .$$",
    "en": "Solve the system $$x+y=5,\\qquad xy=6 .$$"
   },
   "hint": {
    "ru": "Числа $x$ и $y$ — корни квадратного уравнения.",
    "en": "The numbers $x$ and $y$ are the roots of a quadratic."
   },
   "sol": {
    "ru": "По теореме, обратной теореме Виета, числа $x$ и $y$ — корни уравнения $$t^{2}-(x+y)\\,t+xy=0 ,$$ то есть $$t^{2}-5t+6=0 .$$\n\nДискриминант равен $25-24=1$, корни $$t=\\frac{5\\pm1}{2}=3\\ \\text{или}\\ 2 .$$\n\n**Ответ:** $(x,y)=(2,3)$ или $(3,2)$.\n\n**Проверка:** $2+3=5$ ✓ и $2\\cdot3=6$ ✓\n\n**Замечание.** Этот приём — превращение симметричной системы в квадратное уравнение — работает всегда, когда известны сумма и произведение.",
    "en": "By the converse of Vieta’s theorem, $x$ and $y$ are the roots of $$t^{2}-(x+y)\\,t+xy=0 ,$$ that is $$t^{2}-5t+6=0 .$$\n\nThe discriminant is $25-24=1$, and the roots are $$t=\\frac{5\\pm1}{2}=3\\ \\text{or}\\ 2 .$$\n\n**Answer:** $(x,y)=(2,3)$ or $(3,2)$.\n\n**Check:** $2+3=5$ ✓ and $2\\cdot3=6$ ✓\n\n**Remark.** Turning a symmetric system into a quadratic works whenever the sum and the product are known."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Через $6$ лет отец будет вдвое старше сына, а $4$ года назад он был вчетверо старше. Сколько им лет сейчас?",
    "en": "In $6$ years a father will be twice as old as his son; $4$ years ago he was four times as old. How old are they now?"
   },
   "hint": {
    "ru": "Обозначьте нынешние возрасты $f$ и $s$.",
    "en": "Let the present ages be $f$ and $s$."
   },
   "sol": {
    "ru": "Пусть сейчас отцу $f$ лет, сыну $s$ лет.\n\n**Через $6$ лет:** $$f+6=2(s+6)\\quad\\Longrightarrow\\quad f=2s+6 .$$\n\n**Четыре года назад:** $$f-4=4(s-4)\\quad\\Longrightarrow\\quad f=4s-12 .$$\n\nПриравняем правые части: $$2s+6=4s-12\\quad\\Longrightarrow\\quad 2s=18\\quad\\Longrightarrow\\quad s=9 ,$$ и тогда $f=2\\cdot9+6=24$.\n\n**Проверка:** через $6$ лет — $30$ и $15$, и $30=2\\cdot15$ ✓ Четыре года назад — $20$ и $5$, и $20=4\\cdot5$ ✓\n\n**Ответ:** отцу $24$ года, сыну $9$ лет.",
    "en": "Let the father be $f$ and the son $s$ years old now.\n\n**In $6$ years:** $$f+6=2(s+6)\\quad\\Longrightarrow\\quad f=2s+6 .$$\n\n**Four years ago:** $$f-4=4(s-4)\\quad\\Longrightarrow\\quad f=4s-12 .$$\n\nEquate the right sides: $$2s+6=4s-12\\quad\\Longrightarrow\\quad 2s=18\\quad\\Longrightarrow\\quad s=9 ,$$ and then $f=2\\cdot9+6=24$.\n\n**Check:** in $6$ years, $30$ and $15$, and $30=2\\cdot15$ ✓ Four years ago, $20$ and $5$, and $20=4\\cdot5$ ✓\n\n**Answer:** the father is $24$, the son is $9$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Цену товара сначала повысили на $25\\%$, а затем понизили на $20\\%$. Как изменилась цена по сравнению с первоначальной?",
    "en": "A price was first raised by $25\\%$ and then lowered by $20\\%$. How does the final price compare with the original?"
   },
   "hint": {
    "ru": "Перемножьте коэффициенты.",
    "en": "Multiply the two factors."
   },
   "sol": {
    "ru": "Пусть первоначальная цена равна $p$.\n\nПовышение на $25\\%$ — умножение на $1{,}25$; понижение на $20\\%$ — умножение на $0{,}8$. Итоговая цена: $$p\\cdot1{,}25\\cdot0{,}8=p\\cdot1=p .$$\n\n**Ответ:** цена вернулась к первоначальной, изменения нет.\n\n**Почему так.** $1{,}25=\\dfrac54$ и $0{,}8=\\dfrac45$ — взаимно обратные числа.\n\n**Осторожно:** порядок здесь не важен, но величины процентов не «складываются»: повышение на $25\\%$ и понижение на $25\\%$ дали бы $$1{,}25\\cdot0{,}75=0{,}9375 ,$$ то есть цена упала бы на $6{,}25\\%$.",
    "en": "Let the original price be $p$.\n\nA $25\\%$ rise multiplies by $1.25$; a $20\\%$ fall multiplies by $0.8$. The final price is $$p\\cdot1.25\\cdot0.8=p\\cdot1=p .$$\n\n**Answer:** the price is back to the original — no change.\n\n**Why.** $1.25=\\dfrac54$ and $0.8=\\dfrac45$ are reciprocals.\n\n**Careful:** the order does not matter here, but percentages do not simply add: a $25\\%$ rise followed by a $25\\%$ fall would give $$1.25\\cdot0.75=0.9375 ,$$ a net drop of $6.25\\%$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Решите систему $$x+y=7,\\qquad x^{2}+y^{2}=25 .$$",
    "en": "Solve the system $$x+y=7,\\qquad x^{2}+y^{2}=25 .$$"
   },
   "hint": {
    "ru": "$x^{2}+y^{2}=(x+y)^{2}-2xy$.",
    "en": "$x^{2}+y^{2}=(x+y)^{2}-2xy$."
   },
   "sol": {
    "ru": "Воспользуемся тождеством $$x^{2}+y^{2}=(x+y)^{2}-2xy .$$\n\nПодставим известные величины: $$25=49-2xy\\quad\\Longrightarrow\\quad xy=12 .$$\n\nТеперь известны сумма и произведение, значит $x$ и $y$ — корни уравнения $$t^{2}-7t+12=0 ,$$ дискриминант $49-48=1$, корни $$t=\\frac{7\\pm1}{2}=4\\ \\text{или}\\ 3 .$$\n\n**Проверка:** $3+4=7$ ✓ и $9+16=25$ ✓\n\n**Ответ:** $(3,4)$ и $(4,3)$.",
    "en": "Use the identity $$x^{2}+y^{2}=(x+y)^{2}-2xy .$$\n\nSubstituting the known values, $$25=49-2xy\\quad\\Longrightarrow\\quad xy=12 .$$\n\nNow the sum and product are known, so $x$ and $y$ are the roots of $$t^{2}-7t+12=0 ,$$ with discriminant $49-48=1$ and roots $$t=\\frac{7\\pm1}{2}=4\\ \\text{or}\\ 3 .$$\n\n**Check:** $3+4=7$ ✓ and $9+16=25$ ✓\n\n**Answer:** $(3,4)$ and $(4,3)$."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Двое рабочих вместе выполняют работу за $12$ дней. Первому в одиночку нужно на $10$ дней больше, чем второму. За сколько дней каждый справится один?",
    "en": "Two workers together finish a job in $12$ days. Alone, the first needs $10$ days more than the second. How long does each need alone?"
   },
   "hint": {
    "ru": "Обозначьте время второго за $x$ и составьте уравнение производительностей.",
    "en": "Let the second need $x$ days and write the equation of rates."
   },
   "sol": {
    "ru": "Пусть второй справляется за $x$ дней, тогда первый — за $x+10$. Производительности складываются: $$\\frac1x+\\frac1{x+10}=\\frac1{12} .$$\n\nУмножим на $12x(x+10)$: $$12(x+10)+12x=x(x+10)\\quad\\Longrightarrow\\quad 24x+120=x^{2}+10x ,$$ то есть $$x^{2}-14x-120=0 .$$\n\nДискриминант $$D=196+480=676=26^{2} ,$$ корни $$x=\\frac{14\\pm26}{2}=20\\ \\text{или}\\ -6 .$$\n\nОтрицательный корень отбрасываем: $x=20$.\n\n**Ответ:** второй — за $20$ дней, первый — за $30$.\n\n**Проверка:** $\\dfrac1{30}+\\dfrac1{20}=\\dfrac{2+3}{60}=\\dfrac1{12}$ ✓",
    "en": "Let the second need $x$ days, so the first needs $x+10$. Rates add: $$\\frac1x+\\frac1{x+10}=\\frac1{12} .$$\n\nMultiply by $12x(x+10)$: $$12(x+10)+12x=x(x+10)\\quad\\Longrightarrow\\quad 24x+120=x^{2}+10x ,$$ that is $$x^{2}-14x-120=0 .$$\n\nThe discriminant is $$D=196+480=676=26^{2} ,$$ with roots $$x=\\frac{14\\pm26}{2}=20\\ \\text{or}\\ -6 .$$\n\nDiscard the negative root: $x=20$.\n\n**Answer:** the second needs $20$ days, the first $30$.\n\n**Check:** $\\dfrac1{30}+\\dfrac1{20}=\\dfrac{2+3}{60}=\\dfrac1{12}$ ✓"
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Решите систему $$x+y=4,\\qquad x^{3}+y^{3}=28 .$$",
    "en": "Solve the system $$x+y=4,\\qquad x^{3}+y^{3}=28 .$$"
   },
   "hint": {
    "ru": "$x^{3}+y^{3}=(x+y)^{3}-3xy(x+y)$.",
    "en": "$x^{3}+y^{3}=(x+y)^{3}-3xy(x+y)$."
   },
   "sol": {
    "ru": "Воспользуемся тождеством $$x^{3}+y^{3}=(x+y)^{3}-3xy(x+y).$$\n\nПодставим $x+y=4$: $$28=64-12xy\\quad\\Longrightarrow\\quad 12xy=36\\quad\\Longrightarrow\\quad xy=3 .$$\n\nТеперь $x$ и $y$ — корни уравнения $$t^{2}-4t+3=0 ,$$ то есть $t=1$ или $t=3$.\n\n**Проверка:** $1+3=4$ ✓ и $1+27=28$ ✓\n\n**Ответ:** $(1,3)$ и $(3,1)$.",
    "en": "Use the identity $$x^{3}+y^{3}=(x+y)^{3}-3xy(x+y).$$\n\nWith $x+y=4$: $$28=64-12xy\\quad\\Longrightarrow\\quad 12xy=36\\quad\\Longrightarrow\\quad xy=3 .$$\n\nNow $x$ and $y$ are the roots of $$t^{2}-4t+3=0 ,$$ i.e. $t=1$ or $t=3$.\n\n**Check:** $1+3=4$ ✓ and $1+27=28$ ✓\n\n**Answer:** $(1,3)$ and $(3,1)$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Труба наполняет бассейн за $6$ часов, а сливное отверстие опустошает полный бассейн за $8$ часов. За какое время наполнится пустой бассейн, если открыть и то, и другое?",
    "en": "A pipe fills a pool in $6$ hours, while a drain empties a full pool in $8$ hours. How long does an empty pool take to fill with both open?"
   },
   "hint": {
    "ru": "Слив даёт отрицательную производительность.",
    "en": "The drain contributes a negative rate."
   },
   "sol": {
    "ru": "За час труба наполняет $\\dfrac16$ бассейна, а слив уносит $\\dfrac18$. Суммарная производительность: $$\\frac16-\\frac18=\\frac{4-3}{24}=\\frac1{24} $$ бассейна в час.\n\nОна положительна, значит бассейн всё-таки наполнится — за $$\\frac{1}{\\frac1{24}}=24 \\text{ часа}.$$\n\n**Проверка:** за $24$ часа труба нальёт $4$ бассейна, слив унесёт $3$ — остаётся ровно один ✓\n\n**Ответ:** $24$ часа.\n\n**Замечание.** Если бы слив опустошал бассейн быстрее, чем труба его наполняет (скажем, за $5$ часов), суммарная производительность стала бы отрицательной и бассейн не наполнился бы никогда.",
    "en": "In one hour the pipe fills $\\dfrac16$ of the pool while the drain removes $\\dfrac18$. The net rate is $$\\frac16-\\frac18=\\frac{4-3}{24}=\\frac1{24} $$ of a pool per hour.\n\nIt is positive, so the pool does fill — in $$\\frac{1}{\\frac1{24}}=24 \\text{ hours}.$$\n\n**Check:** in $24$ hours the pipe delivers $4$ poolfuls and the drain removes $3$, leaving exactly one ✓\n\n**Answer:** $24$ hours.\n\n**Remark.** Had the drain emptied the pool faster than the pipe fills it (say in $5$ hours), the net rate would be negative and the pool would never fill."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Книгу продают с прибылью $20\\%$. Если бы её купили на $10\\%$ дешевле, а продали на $6\\,000$ сум дешевле, прибыль составила бы $25\\%$. Сколько стоила книга при покупке?",
    "en": "A book is sold at a $20\\%$ profit. Had it been bought $10\\%$ cheaper and sold for $6\\,000$ soum less, the profit would have been $25\\%$. What was the purchase price?"
   },
   "hint": {
    "ru": "Обозначьте закупочную цену $c$ и выразите обе выручки.",
    "en": "Let the cost be $c$ and express both selling prices."
   },
   "sol": {
    "ru": "Пусть закупочная цена равна $c$.\n\n**Как было:** продажная цена $$S=1{,}2\\,c .$$\n\n**Как могло быть:** закупка $0{,}9\\,c$, продажа $S-6000$, прибыль $25\\%$: $$S-6000=1{,}25\\cdot0{,}9\\,c=1{,}125\\,c .$$\n\nПодставим $S=1{,}2c$: $$1{,}2\\,c-6000=1{,}125\\,c\\quad\\Longrightarrow\\quad 0{,}075\\,c=6000\\quad\\Longrightarrow\\quad c=80\\,000 .$$\n\n**Проверка.** Было: купили за $80\\,000$, продали за $96\\,000$ — прибыль $16\\,000$, то есть $20\\%$ ✓ Стало бы: купили за $72\\,000$, продали за $90\\,000$ — прибыль $18\\,000$, то есть ровно $25\\%$ от $72\\,000$ ✓\n\n**Ответ:** $80\\,000$ сум.",
    "en": "Let the purchase price be $c$.\n\n**As it happened:** the selling price is $$S=1.2\\,c .$$\n\n**As it might have been:** cost $0.9\\,c$, selling price $S-6000$, profit $25\\%$: $$S-6000=1.25\\cdot0.9\\,c=1.125\\,c .$$\n\nSubstituting $S=1.2c$: $$1.2\\,c-6000=1.125\\,c\\quad\\Longrightarrow\\quad 0.075\\,c=6000\\quad\\Longrightarrow\\quad c=80\\,000 .$$\n\n**Check.** As it was: bought at $80\\,000$, sold at $96\\,000$ — profit $16\\,000$, i.e. $20\\%$ ✓ As it might have been: bought at $72\\,000$, sold at $90\\,000$ — profit $18\\,000$, exactly $25\\%$ of $72\\,000$ ✓\n\n**Answer:** $80\\,000$ soum."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Поезд длиной $200$ м проезжает мимо столба за $10$ секунд, а мимо платформы — за $30$ секунд. Найдите скорость поезда и длину платформы.",
    "en": "A train $200$ m long passes a pole in $10$ seconds and a platform in $30$ seconds. Find the speed of the train and the length of the platform."
   },
   "hint": {
    "ru": "Мимо столба поезд проезжает свою длину, мимо платформы — свою длину плюс длину платформы.",
    "en": "Past a pole the train covers its own length; past a platform, its length plus the platform’s."
   },
   "sol": {
    "ru": "**Скорость.** Проезжая мимо столба, поезд проходит ровно свою длину: $$v=\\frac{200}{10}=20\\ \\text{м/с}\\ (=72\\ \\text{км/ч}).$$\n\n**Длина платформы.** Проезжая мимо платформы, поезд проходит свою длину плюс длину платформы: $$200+L=v\\cdot30=600\\quad\\Longrightarrow\\quad L=400\\ \\text{м}.$$\n\n**Проверка:** за $30$ с при скорости $20$ м/с поезд проходит $600$ м, из которых $200$ м — он сам ✓\n\n**Ответ:** скорость $20$ м/с, платформа $400$ м.\n\n**Почему так.** «Проехать мимо» означает: от момента, когда голова поезда поравнялась с началом объекта, до момента, когда хвост миновал его конец.",
    "en": "**The speed.** Passing a pole, the train covers exactly its own length: $$v=\\frac{200}{10}=20\\ \\text{m/s}\\ (=72\\ \\text{km/h}).$$\n\n**The platform.** Passing the platform, the train covers its own length plus the platform’s: $$200+L=v\\cdot30=600\\quad\\Longrightarrow\\quad L=400\\ \\text{m}.$$\n\n**Check:** in $30$ s at $20$ m/s the train covers $600$ m, of which $200$ m is the train itself ✓\n\n**Answer:** speed $20$ m/s, platform $400$ m.\n\n**Why.** \"Passing\" runs from the moment the front of the train reaches the start of the object until the tail clears its end."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Найдите трёхзначное число, которое в $11$ раз больше суммы своих цифр.",
    "en": "Find the three-digit number that is $11$ times the sum of its digits."
   },
   "hint": {
    "ru": "Запишите число как $100a+10b+c$ и оцените, каким может быть $a$.",
    "en": "Write it as $100a+10b+c$ and bound the digit $a$."
   },
   "sol": {
    "ru": "Пусть число равно $100a+10b+c$, где $a\\ge1$. Условие: $$100a+10b+c=11(a+b+c)\\quad\\Longleftrightarrow\\quad 89a=b+10c .$$\n\n**Оценим $a$.** Правая часть не превосходит $9+10\\cdot9=99$, значит $89a\\le99$, откуда $a=1$.\n\n**Решаем оставшееся.** $$b+10c=89 .$$ Так как $b\\le9$, число $10c$ не меньше $80$, то есть $c\\ge8$. При $c=9$ получилось бы $b=-1$ ✗ Значит $c=8$ и $b=9$.\n\n**Ответ:** $198$.\n\n**Проверка:** сумма цифр $1+9+8=18$, и $11\\cdot18=198$ ✓",
    "en": "Let the number be $100a+10b+c$ with $a\\ge1$. The condition reads $$100a+10b+c=11(a+b+c)\\quad\\Longleftrightarrow\\quad 89a=b+10c .$$\n\n**Bound $a$.** The right side is at most $9+10\\cdot9=99$, so $89a\\le99$, forcing $a=1$.\n\n**Solve the rest.** $$b+10c=89 .$$ Since $b\\le9$, we need $10c\\ge80$, i.e. $c\\ge8$. Taking $c=9$ would give $b=-1$ ✗ So $c=8$ and $b=9$.\n\n**Answer:** $198$.\n\n**Check:** the digit sum is $1+9+8=18$, and $11\\cdot18=198$ ✓"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 3,
   "q": {
    "ru": "Решите систему $$\\frac1x+\\frac1y=\\frac7{12},\\qquad \\frac1x-\\frac1y=\\frac1{12} .$$",
    "en": "Solve the system $$\\frac1x+\\frac1y=\\frac7{12},\\qquad \\frac1x-\\frac1y=\\frac1{12} .$$"
   },
   "hint": {
    "ru": "Обозначьте $u=\\frac1x$, $v=\\frac1y$ — система станет линейной.",
    "en": "Put $u=\\frac1x$, $v=\\frac1y$ — the system becomes linear."
   },
   "sol": {
    "ru": "Обозначим $u=\\dfrac1x$ и $v=\\dfrac1y$. Система превращается в линейную: $$u+v=\\frac7{12},\\qquad u-v=\\frac1{12} .$$\n\nСложив: $$2u=\\frac8{12}=\\frac23\\quad\\Longrightarrow\\quad u=\\frac13\\quad\\Longrightarrow\\quad x=3 .$$\n\nВычтя: $$2v=\\frac6{12}=\\frac12\\quad\\Longrightarrow\\quad v=\\frac14\\quad\\Longrightarrow\\quad y=4 .$$\n\n**Проверка:** $\\dfrac13+\\dfrac14=\\dfrac{7}{12}$ ✓ и $\\dfrac13-\\dfrac14=\\dfrac1{12}$ ✓\n\n**Ответ:** $x=3$, $y=4$.\n\n**Приём.** Замена переменных — самый быстрый способ свести дробную систему к линейной; главное потом не забыть вернуться к исходным переменным.",
    "en": "Put $u=\\dfrac1x$ and $v=\\dfrac1y$. The system becomes linear: $$u+v=\\frac7{12},\\qquad u-v=\\frac1{12} .$$\n\nAdding: $$2u=\\frac8{12}=\\frac23\\quad\\Longrightarrow\\quad u=\\frac13\\quad\\Longrightarrow\\quad x=3 .$$\n\nSubtracting: $$2v=\\frac6{12}=\\frac12\\quad\\Longrightarrow\\quad v=\\frac14\\quad\\Longrightarrow\\quad y=4 .$$\n\n**Check:** $\\dfrac13+\\dfrac14=\\dfrac{7}{12}$ ✓ and $\\dfrac13-\\dfrac14=\\dfrac1{12}$ ✓\n\n**Answer:** $x=3$, $y=4$.\n\n**The trick.** A change of variables is the quickest way to turn a system of fractions into a linear one; just remember to convert back at the end."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Найдите все двузначные числа, равные утроенному произведению своих цифр.",
    "en": "Find all two-digit numbers equal to three times the product of their digits."
   },
   "hint": {
    "ru": "$10a+b=3ab$; выразите $b$ через $a$.",
    "en": "$10a+b=3ab$; solve for $b$ in terms of $a$."
   },
   "sol": {
    "ru": "Пусть число равно $10a+b$, где $1\\le a\\le9$ и $0\\le b\\le9$. Условие: $$10a+b=3ab .$$\n\nСоберём слагаемые с $b$: $$10a=b(3a-1)\\quad\\Longrightarrow\\quad b=\\frac{10a}{3a-1} .$$\n\nПереберём $a$ от $1$ до $9$ и оставим случаи, когда $b$ — цифра:\n\n$a=1$: $\\ b=\\dfrac{10}{2}=5$ ✓ — число $15$;\n\n$a=2$: $\\ b=\\dfrac{20}{5}=4$ ✓ — число $24$;\n\n$a=3$: $\\ \\dfrac{30}{8}$ — не целое ✗\n\n$a=4$: $\\ \\dfrac{40}{11}$ ✗; $\\ a=5$: $\\dfrac{50}{14}$ ✗; $\\ a=6$: $\\dfrac{60}{17}$ ✗;\n\n$a=7$: $\\ \\dfrac{70}{20}=3{,}5$ ✗; $\\ a=8$: $\\dfrac{80}{23}$ ✗; $\\ a=9$: $\\dfrac{90}{26}$ ✗\n\n**Проверка:** $3\\cdot1\\cdot5=15$ ✓ и $3\\cdot2\\cdot4=24$ ✓\n\n**Ответ:** $15$ и $24$.",
    "en": "Let the number be $10a+b$ with $1\\le a\\le9$ and $0\\le b\\le9$. The condition is $$10a+b=3ab .$$\n\nCollect the $b$ terms: $$10a=b(3a-1)\\quad\\Longrightarrow\\quad b=\\frac{10a}{3a-1} .$$\n\nRun through $a=1,\\dots,9$ and keep the cases where $b$ is a digit:\n\n$a=1$: $\\ b=\\dfrac{10}{2}=5$ ✓ — the number $15$;\n\n$a=2$: $\\ b=\\dfrac{20}{5}=4$ ✓ — the number $24$;\n\n$a=3$: $\\ \\dfrac{30}{8}$ is not an integer ✗\n\n$a=4$: $\\ \\dfrac{40}{11}$ ✗; $\\ a=5$: $\\dfrac{50}{14}$ ✗; $\\ a=6$: $\\dfrac{60}{17}$ ✗;\n\n$a=7$: $\\ \\dfrac{70}{20}=3.5$ ✗; $\\ a=8$: $\\dfrac{80}{23}$ ✗; $\\ a=9$: $\\dfrac{90}{26}$ ✗\n\n**Check:** $3\\cdot1\\cdot5=15$ ✓ and $3\\cdot2\\cdot4=24$ ✓\n\n**Answer:** $15$ and $24$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Две свечи одинаковой длины сгорают полностью: первая за $4$ часа, вторая за $5$ часов. Обе зажгли одновременно. Через какое время остаток второй свечи станет вдвое длиннее остатка первой?",
    "en": "Two candles of the same length burn out in $4$ and $5$ hours respectively. Both are lit at the same moment. After how long is the remaining part of the second candle twice as long as that of the first?"
   },
   "hint": {
    "ru": "Длина остатка убывает линейно.",
    "en": "The remaining length decreases linearly."
   },
   "sol": {
    "ru": "Примем начальную длину каждой свечи за $1$. Через $t$ часов остатки равны $$\\ell_1=1-\\frac t4,\\qquad \\ell_2=1-\\frac t5 .$$\n\nУсловие $\\ell_2=2\\ell_1$ даёт $$1-\\frac t5=2\\left(1-\\frac t4\\right)=2-\\frac t2 .$$\n\nПереносим: $$\\frac t2-\\frac t5=1\\quad\\Longrightarrow\\quad \\frac{5t-2t}{10}=1\\quad\\Longrightarrow\\quad \\frac{3t}{10}=1\\quad\\Longrightarrow\\quad t=\\frac{10}{3} .$$\n\nЭто $3$ часа $20$ минут.\n\n**Проверка:** через $\\tfrac{10}3$ ч $$\\ell_1=1-\\frac{10}{12}=\\frac16,\\qquad \\ell_2=1-\\frac{10}{15}=\\frac13=2\\cdot\\frac16 \\quad\\checkmark$$\n\n**Ответ:** через $3$ часа $20$ минут.\n\n**Замечание.** Ответ не зависит от длины свечей — важны только времена сгорания.",
    "en": "Take the initial length of each candle to be $1$. After $t$ hours the remaining lengths are $$\\ell_1=1-\\frac t4,\\qquad \\ell_2=1-\\frac t5 .$$\n\nThe condition $\\ell_2=2\\ell_1$ gives $$1-\\frac t5=2\\left(1-\\frac t4\\right)=2-\\frac t2 .$$\n\nRearranging: $$\\frac t2-\\frac t5=1\\quad\\Longrightarrow\\quad \\frac{5t-2t}{10}=1\\quad\\Longrightarrow\\quad \\frac{3t}{10}=1\\quad\\Longrightarrow\\quad t=\\frac{10}{3} .$$\n\nThat is $3$ hours $20$ minutes.\n\n**Check:** at $t=\\tfrac{10}3$ h $$\\ell_1=1-\\frac{10}{12}=\\frac16,\\qquad \\ell_2=1-\\frac{10}{15}=\\frac13=2\\cdot\\frac16 \\quad\\checkmark$$\n\n**Answer:** after $3$ hours $20$ minutes.\n\n**Remark.** The answer does not depend on the candles’ length — only on the burning times."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "В какой момент между $3$ и $4$ часами часовая и минутная стрелки совпадают?",
    "en": "At what moment between $3$ and $4$ o’clock do the hour and minute hands coincide?"
   },
   "hint": {
    "ru": "Минутная стрелка проходит $6^\\circ$ в минуту, часовая — $0{,}5^\\circ$.",
    "en": "The minute hand moves $6^\\circ$ per minute, the hour hand $0.5^\\circ$."
   },
   "sol": {
    "ru": "Отсчитаем углы от отметки «$12$» по часовой стрелке и пусть прошло $t$ минут после трёх часов.\n\n**Минутная стрелка** делает полный оборот ($360^\\circ$) за $60$ минут, значит её угол равен $$6t .$$\n\n**Часовая стрелка** делает $360^\\circ$ за $12$ часов, то есть $0{,}5^\\circ$ в минуту; в три часа она стоит на $90^\\circ$, значит её угол равен $$90+0{,}5\\,t .$$\n\n**Совпадение:** $$6t=90+0{,}5\\,t\\quad\\Longrightarrow\\quad 5{,}5\\,t=90\\quad\\Longrightarrow\\quad t=\\frac{90}{5{,}5}=\\frac{180}{11}=16\\frac4{11} .$$\n\n**Ответ:** в $3$ часа $16\\dfrac4{11}$ минуты (примерно $3{:}16{:}21{,}8$).\n\n**Проверка:** минутная стрелка на $6\\cdot\\tfrac{180}{11}=\\tfrac{1080}{11}\\approx98{,}18^\\circ$; часовая на $90+\\tfrac{90}{11}\\approx98{,}18^\\circ$ ✓\n\n**Замечание.** Стрелки совпадают $11$ раз за $12$ часов, то есть каждые $\\dfrac{12}{11}$ часа.",
    "en": "Measure angles clockwise from the \"$12$\" mark, and let $t$ minutes have passed since three o’clock.\n\n**The minute hand** completes $360^\\circ$ in $60$ minutes, so its angle is $$6t .$$\n\n**The hour hand** completes $360^\\circ$ in $12$ hours, i.e. $0.5^\\circ$ per minute; at three o’clock it stands at $90^\\circ$, so its angle is $$90+0.5\\,t .$$\n\n**Coincidence:** $$6t=90+0.5\\,t\\quad\\Longrightarrow\\quad 5.5\\,t=90\\quad\\Longrightarrow\\quad t=\\frac{90}{5.5}=\\frac{180}{11}=16\\frac4{11} .$$\n\n**Answer:** at $3$ hours $16\\dfrac4{11}$ minutes (about $3{:}16{:}21.8$).\n\n**Check:** the minute hand is at $6\\cdot\\tfrac{180}{11}\\approx98.18^\\circ$; the hour hand at $90+\\tfrac{90}{11}\\approx98.18^\\circ$ ✓\n\n**Remark.** The hands coincide $11$ times in $12$ hours, i.e. every $\\dfrac{12}{11}$ of an hour."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Катер проходит расстояние между двумя пристанями по течению за $5$ часов, а против течения — за $7$ часов. За какое время то же расстояние проплывёт плот?",
    "en": "A motorboat covers the distance between two piers downstream in $5$ hours and upstream in $7$ hours. How long would a raft (drifting with the current) take?"
   },
   "hint": {
    "ru": "Плот движется со скоростью течения.",
    "en": "A raft moves at exactly the speed of the current."
   },
   "sol": {
    "ru": "Пусть расстояние равно $d$, собственная скорость катера $v$, скорость течения $c$. Плот плывёт со скоростью течения, поэтому нужно найти $\\dfrac dc$.\n\n**Из условия:** $$v+c=\\frac d5,\\qquad v-c=\\frac d7 .$$\n\nВычтем второе из первого: $$2c=\\frac d5-\\frac d7=d\\cdot\\frac{7-5}{35}=\\frac{2d}{35}\\quad\\Longrightarrow\\quad c=\\frac{d}{35} .$$\n\nЗначит плот проплывёт расстояние за $$\\frac dc=35 \\text{ часов}.$$\n\n**Проверка.** Пусть $d=35$ км. Тогда $v+c=7$ и $v-c=5$, откуда $v=6$ и $c=1$ км/ч. Плот со скоростью $1$ км/ч пройдёт $35$ км за $35$ часов ✓\n\n**Ответ:** $35$ часов.\n\n**Красивая формула.** Если по течению путь занимает $t_1$, а против — $t_2$, то плот плывёт $$\\frac{2t_1t_2}{t_2-t_1}=\\frac{2\\cdot5\\cdot7}{2}=35 $$ часов.",
    "en": "Let the distance be $d$, the boat’s own speed $v$ and the current $c$. A raft drifts at the speed of the current, so we need $\\dfrac dc$.\n\n**From the data:** $$v+c=\\frac d5,\\qquad v-c=\\frac d7 .$$\n\nSubtract the second from the first: $$2c=\\frac d5-\\frac d7=d\\cdot\\frac{7-5}{35}=\\frac{2d}{35}\\quad\\Longrightarrow\\quad c=\\frac{d}{35} .$$\n\nSo the raft covers the distance in $$\\frac dc=35 \\text{ hours}.$$\n\n**Check.** Take $d=35$ km. Then $v+c=7$ and $v-c=5$, so $v=6$ and $c=1$ km/h. A raft at $1$ km/h covers $35$ km in $35$ hours ✓\n\n**Answer:** $35$ hours.\n\n**A neat formula.** If downstream takes $t_1$ and upstream $t_2$, a raft takes $$\\frac{2t_1t_2}{t_2-t_1}=\\frac{2\\cdot5\\cdot7}{2}=35 $$ hours."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Из сосуда, полного спирта ($40$ литров), отливают $4$ литра и доливают столько же воды. Так делают три раза. Какова концентрация спирта в конце?",
    "en": "From a vessel holding $40$ litres of pure alcohol, $4$ litres are drawn off and replaced by water. This is done three times. What is the final alcohol concentration?"
   },
   "hint": {
    "ru": "После каждой операции доля спирта умножается на одно и то же число.",
    "en": "Each operation multiplies the alcohol fraction by the same factor."
   },
   "sol": {
    "ru": "**Ключевое наблюдение.** Когда мы отливаем $4$ литра из $40$, мы уносим ровно $\\dfrac{4}{40}=\\dfrac1{10}$ **всего содержимого**, в том числе десятую часть имеющегося спирта. Доливание воды объём восстанавливает, но спирта не добавляет.\n\nЗначит после каждой операции количество спирта умножается на $$1-\\frac1{10}=0{,}9 .$$\n\n**Три операции:** $$40\\cdot0{,}9^{3}=40\\cdot0{,}729=29{,}16 \\text{ литра спирта}.$$\n\nОбъём остался прежним ($40$ л), поэтому концентрация равна $$\\frac{29{,}16}{40}=0{,}729=72{,}9\\% .$$\n\n**Проверка по шагам.** После первого раза: $36$ л спирта. После второго: $36-3{,}6=32{,}4$. После третьего: $32{,}4-3{,}24=29{,}16$ ✓\n\n**Ответ:** $72{,}9\\%$.\n\n**Общая формула.** После $n$ операций концентрация равна $\\left(1-\\dfrac vV\\right)^{n}$, где $V$ — объём сосуда, $v$ — объём порции.",
    "en": "**The key observation.** Drawing $4$ litres out of $40$ removes exactly $\\dfrac{4}{40}=\\dfrac1{10}$ of **everything** in the vessel, including a tenth of the alcohol present. Adding water restores the volume but adds no alcohol.\n\nSo each operation multiplies the amount of alcohol by $$1-\\frac1{10}=0.9 .$$\n\n**Three operations:** $$40\\cdot0.9^{3}=40\\cdot0.729=29.16 \\text{ litres of alcohol}.$$\n\nThe volume is unchanged ($40$ L), so the concentration is $$\\frac{29.16}{40}=0.729=72.9\\% .$$\n\n**Step-by-step check.** After the first round: $36$ L of alcohol. After the second: $36-3.6=32.4$. After the third: $32.4-3.24=29.16$ ✓\n\n**Answer:** $72.9\\%$.\n\n**General formula.** After $n$ operations the concentration is $\\left(1-\\dfrac vV\\right)^{n}$, where $V$ is the vessel’s volume and $v$ the size of each portion."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Колонна солдат длиной $1$ км движется с постоянной скоростью. Посыльный выезжает от хвоста колонны, доезжает до её головы и сразу возвращается к хвосту. К этому моменту колонна прошла ровно $1$ км. Какой путь проделал посыльный?",
    "en": "A column of soldiers $1$ km long marches at constant speed. A messenger rides from the rear to the head of the column and immediately back to the rear. By the time he returns, the column has advanced exactly $1$ km. How far did the messenger ride?"
   },
   "hint": {
    "ru": "Считайте скорости относительными: догоняя — разность, навстречу — сумма.",
    "en": "Use relative speeds: closing on the head, the difference; coming back, the sum."
   },
   "sol": {
    "ru": "Обозначим скорость колонны $u$, скорость посыльного $v$, длину колонны $1$ км.\n\n**Общее время.** Колонна прошла $1$ км, значит всё заняло $$T=\\frac1u .$$\n\n**Вперёд.** Посыльный догоняет голову, относительная скорость $v-u$, и надо покрыть $1$ км: $$t_1=\\frac1{v-u} .$$\n\n**Назад.** Теперь он движется навстречу хвосту, относительная скорость $v+u$: $$t_2=\\frac1{v+u} .$$\n\n**Уравнение.** $$\\frac1{v-u}+\\frac1{v+u}=\\frac1u .$$ Приведём левую часть к общему знаменателю: $$\\frac{2v}{v^{2}-u^{2}}=\\frac1u\\quad\\Longrightarrow\\quad 2uv=v^{2}-u^{2}\\quad\\Longrightarrow\\quad v^{2}-2uv-u^{2}=0 .$$\n\nРешаем относительно $v$: $$v=u\\left(1\\pm\\sqrt2\\right),$$ и по смыслу $v>0$, значит $$v=u\\left(1+\\sqrt2\\right).$$\n\n**Путь посыльного.** $$vT=\\frac vu=1+\\sqrt2\\approx2{,}414 \\text{ км}.$$\n\n**Ответ:** $1+\\sqrt2$ км, то есть примерно $2$ км $414$ м.\n\n**Проверка.** При $u=1$ имеем $v=2{,}414$; тогда $t_1=\\dfrac1{1{,}414}\\approx0{,}707$ и $t_2=\\dfrac1{3{,}414}\\approx0{,}293$, в сумме ровно $1=T$ ✓",
    "en": "Let the column move at speed $u$, the messenger at speed $v$, with the column $1$ km long.\n\n**Total time.** The column advanced $1$ km, so the whole trip took $$T=\\frac1u .$$\n\n**Forward leg.** The messenger closes on the head at relative speed $v-u$ and must cover $1$ km: $$t_1=\\frac1{v-u} .$$\n\n**Return leg.** Now he meets the rear head-on, at relative speed $v+u$: $$t_2=\\frac1{v+u} .$$\n\n**The equation.** $$\\frac1{v-u}+\\frac1{v+u}=\\frac1u .$$ Over a common denominator, $$\\frac{2v}{v^{2}-u^{2}}=\\frac1u\\quad\\Longrightarrow\\quad 2uv=v^{2}-u^{2}\\quad\\Longrightarrow\\quad v^{2}-2uv-u^{2}=0 .$$\n\nSolving for $v$: $$v=u\\left(1\\pm\\sqrt2\\right),$$ and since $v>0$, $$v=u\\left(1+\\sqrt2\\right).$$\n\n**The messenger’s distance.** $$vT=\\frac vu=1+\\sqrt2\\approx2.414 \\text{ km}.$$\n\n**Answer:** $1+\\sqrt2$ km, about $2$ km $414$ m.\n\n**Check.** With $u=1$ we get $v=2.414$; then $t_1=\\dfrac1{1.414}\\approx0.707$ and $t_2=\\dfrac1{3.414}\\approx0.293$, summing to exactly $1=T$ ✓"
   }
  }
 ]
};
