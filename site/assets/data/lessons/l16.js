/* Topic 16 — generated from content/lesson_16.py, do not edit by hand. */
window.LESSONS = window.LESSONS || {};
window.LESSONS[16] = {
 "n": 16,
 "cat": "mix",
 "title": {
  "ru": "Пробная олимпиада",
  "en": "Mock olympiad"
 },
 "sub": {
  "ru": "Как устроен тур, как распределить время и как оформить решение — и четыре пробных варианта из всех тем сразу.",
  "en": "How a round works, how to spend the time and how to write a solution — plus four mock papers drawing on every topic."
 },
 "goals": {
  "ru": [
   "Понимать формат туров и знать, за что ставят баллы.",
   "Распределять время на туре и решать, когда бросать задачу.",
   "Определять тему задачи по первым признакам и выбирать первый ход.",
   "Проверять решение так, чтобы не терять баллы на мелочах."
  ],
  "en": [
   "Understand the format of the rounds and what earns marks.",
   "Budget the time in a round and decide when to abandon a problem.",
   "Recognise a problem’s topic from its first signs and choose the opening move.",
   "Check a solution so that no marks are lost on small things."
  ]
 },
 "sections": [
  {
   "h": {
    "ru": "Как устроен тур",
    "en": "How a round works"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Олимпиада — это не контрольная. Задач мало, времени много, и оценивается не ответ, а **доказательство**. Понимание этого различия само по себе стоит нескольких баллов.",
      "en": "An olympiad is not a test. There are few problems and plenty of time, and what is marked is not the answer but the **proof**. Understanding that difference is itself worth several marks."
     }
    },
    {
     "t": "ul",
     "items": {
      "ru": [
       "**Задач обычно $4$–$6$**, а времени $3$–$4$ часа. То есть на задачу приходится около сорока минут — гораздо больше, чем на любой контрольной.",
       "**Каждая задача оценивается отдельно**, обычно по $7$ баллов. Частичное продвижение тоже оценивается: за верно доказанную лемму или разобранный случай дают баллы.",
       "**Ответ без доказательства почти ничего не стоит.** В задаче «найдите все» половина баллов — за то, что других решений нет.",
       "**Задачи расположены примерно по возрастанию сложности**, но это не закон: иногда третья оказывается легче второй. Прочитайте все задачи в первые пять минут."
      ],
      "en": [
       "**Usually $4$–$6$ problems** and $3$–$4$ hours. That is about forty minutes per problem — far more than in any school test.",
       "**Each problem is marked separately**, typically out of $7$. Partial progress counts: a correctly proved lemma or a fully handled case earns marks.",
       "**An answer without a proof is worth almost nothing.** In a \"find all\" problem half the marks are for showing there is nothing else.",
       "**Problems are roughly in order of difficulty**, but not strictly: sometimes the third is easier than the second. Read them all in the first five minutes."
      ]
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "В Узбекистане олимпиада проходит в несколько этапов: школьный, районный (городской), областной и республиканский. Уровень задач растёт от этапа к этапу, но темы остаются теми же самыми — теми, что разобраны в этом курсе. Именно поэтому подготовка окупается: одна и та же техника работает на всех этапах, меняется только глубина.",
      "en": "In Uzbekistan the olympiad runs in stages: school, district (or city), region, and republic. The difficulty grows from stage to stage, but the topics stay the same — the ones covered in this course. That is why preparation pays off: the same techniques serve at every stage, only the depth changes."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Стратегия на туре",
    "en": "Strategy during a round"
   },
   "blocks": [
    {
     "t": "idea",
     "name": {
      "ru": "Первые пятнадцать минут",
      "en": "The first fifteen minutes"
     },
     "text": {
      "ru": "Не начинайте решать первую задачу сразу. Сначала:\n\n**1)** прочитайте **все** задачи, не пытаясь их решать;\n**2)** возле каждой пометьте тему («остатки», «неравенство», «окружность») и первую идею, если она пришла;\n**3)** оцените, какая задача кажется самой лёгкой — с неё и начинайте.\n\nЭти пятнадцать минут почти всегда окупаются: обидно решить трудную третью задачу и не успеть лёгкую пятую.",
      "en": "Do not start on problem one straight away. First:\n\n**1)** read **all** the problems without trying to solve them;\n**2)** next to each note the topic (\"remainders\", \"inequality\", \"circle\") and the first idea, if one comes;\n**3)** judge which looks easiest — start there.\n\nThose fifteen minutes almost always pay off: it is painful to solve a hard third problem and run out of time on an easy fifth."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Когда бросать задачу",
      "en": "When to drop a problem"
     },
     "text": {
      "ru": "Если за **двадцать минут** не появилось ни одной идеи, переходите к другой задаче. Но перед этим **запишите то, что уже поняли**: разобранные случаи, доказанные вспомогательные утверждения, найденные примеры. Во-первых, за это дают баллы. Во-вторых, вернувшись через час, вы не начнёте с нуля.\n\nПравило «одна задача — один заход» не работает. Гораздо лучше пройти все задачи по разу, а потом вернуться к тем, где есть зацепка.",
      "en": "If **twenty minutes** bring no idea at all, move to another problem. But first **write down what you have understood**: the cases handled, the lemmas proved, the examples found. First, those earn marks. Second, coming back an hour later you will not start from nothing.\n\nThe rule \"one problem, one attempt\" does not work. It is far better to pass through every problem once and then return to the ones where you have a foothold."
     }
    },
    {
     "t": "table",
     "head": {
      "ru": [
       "Что видно в условии",
       "Скорее всего тема",
       "Первый ход"
      ],
      "en": [
       "What the statement shows",
       "The likely topic",
       "The opening move"
      ]
     },
     "rows": {
      "ru": [
       [
        "«докажите, что делится на $\\dots$»",
        "делимость, остатки",
        "разложить на множители или взять модуль"
       ],
       [
        "«найдите все целые $x,y$»",
        "диофантово уравнение",
        "разложить на множители, потом оценки"
       ],
       [
        "«докажите, что решений нет»",
        "остатки",
        "подобрать модуль по таблице квадратов и кубов"
       ],
       [
        "«докажите неравенство»",
        "AM–GM, квадраты",
        "перенести всё влево, найти точку равенства"
       ],
       [
        "«найдите наибольшее (наименьшее)»",
        "оценка $+$ пример",
        "доказать оценку, потом предъявить пример"
       ],
       [
        "«докажите, что найдётся»",
        "принцип Дирихле",
        "придумать «клетки»"
       ],
       [
        "«можно ли…» с операциями",
        "инвариант",
        "посмотреть на чётность, остаток, произведение знаков"
       ],
       [
        "клетчатая доска, фигурки",
        "раскраска",
        "покрасить в $2$, $3$ или $4$ цвета"
       ],
       [
        "вписанный четырёхугольник, углы",
        "окружность",
        "счёт углов, вписанный угол"
       ],
       [
        "отношения отрезков в треугольнике",
        "площади, подобие",
        "общая высота или общий угол"
       ]
      ],
      "en": [
       [
        "\"prove that it is divisible by $\\dots$\"",
        "divisibility, remainders",
        "factor it, or take a modulus"
       ],
       [
        "\"find all integers $x,y$\"",
        "a Diophantine equation",
        "factor, then bound"
       ],
       [
        "\"prove there are no solutions\"",
        "remainders",
        "pick a modulus from the squares/cubes table"
       ],
       [
        "\"prove the inequality\"",
        "AM–GM, squares",
        "move everything left, find the equality point"
       ],
       [
        "\"find the largest (smallest)\"",
        "a bound $+$ an example",
        "prove the bound, then exhibit the example"
       ],
       [
        "\"prove that there exists\"",
        "the pigeonhole principle",
        "invent the \"boxes\""
       ],
       [
        "\"is it possible…\" with moves",
        "an invariant",
        "look at parity, a remainder, a product of signs"
       ],
       [
        "a grid board with pieces",
        "a colouring",
        "colour in $2$, $3$ or $4$ colours"
       ],
       [
        "a cyclic quadrilateral, angles",
        "circles",
        "angle chasing, inscribed angles"
       ],
       [
        "ratios of segments in a triangle",
        "areas, similarity",
        "a common height or a common angle"
       ]
      ]
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Последние полчаса тура тратьте **не на новую задачу**, а на проверку и дописывание уже решённых. Типичная потеря — задача, решённая верно, но без разбора одного случая или без вывода. Такие баллы возвращаются за пять минут, а новая задача за полчаса, скорее всего, не решится.",
      "en": "Spend the last half hour **not on a new problem** but on checking and finishing the ones already done. The typical loss is a problem solved correctly but with one case missing or no conclusion written. Those marks come back in five minutes, whereas a new problem probably will not fall in thirty."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Проверка решения",
    "en": "Checking a solution"
   },
   "blocks": [
    {
     "t": "ul",
     "items": {
      "ru": [
       "**Ответ на месте?** Последняя строка отвечает ровно на поставленный вопрос, а не на соседний.",
       "**Все случаи разобраны?** Особенно $n=0$, $n=1$, равенство вместо неравенства, вырожденный треугольник, отрицательные делители.",
       "**Использовано ли всё условие?** Если какое-то данное ни разу не понадобилось — почти наверняка где-то ошибка (или задача решена не та).",
       "**Проверка на примере.** Подставьте маленькие числа в найденную формулу. Это не доказательство, но ошибку ловит мгновенно.",
       "**Обратный ход.** Если решали уравнение с возведением в квадрат или умножением на выражение с переменной — проверьте корни подстановкой: могли появиться посторонние.",
       "**Границы применимости.** Делили на выражение — убедились, что оно не ноль? Перемножали неравенства — все части положительны?"
      ],
      "en": [
       "**Is the answer there?** The last line answers exactly the question asked, not a neighbouring one.",
       "**Are all cases covered?** Especially $n=0$, $n=1$, equality rather than strict inequality, degenerate triangles, negative divisors.",
       "**Was the whole hypothesis used?** If some datum was never needed, there is almost certainly a mistake (or the wrong problem was solved).",
       "**Test on an example.** Put small numbers into the formula found. Not a proof, but it catches an error instantly.",
       "**Work backwards.** If the equation was squared or multiplied by an expression in the variable, substitute the roots back: extraneous ones may have appeared.",
       "**Check the licence.** Divided by an expression — is it non-zero? Multiplied inequalities — are all the parts positive?"
      ]
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "План подготовки на год",
      "en": "A year of preparation"
     },
     "text": {
      "ru": "Что работает, если готовиться всерьёз:\n\n**1)** Проходить по одной теме в неделю-две, начиная с теории и разобранных примеров, и только потом браться за задачи.\n\n**2)** Решать задачи **письменно и до конца**. «Понял, как решать» и «решил» — разные вещи; на туре оценивают второе.\n\n**3)** Разбирать разбор. После неудачной попытки читайте решение не для того, чтобы «увидеть ответ», а чтобы найти **тот шаг, до которого не додумались**, и запомнить именно его.\n\n**4)** Вести список приёмов. Одна строка на приём: «сумма кубов при $a+b+c=0$», «раскраска в три цвета для фигурок $1\\times3$». К концу года это ваш собственный учебник.\n\n**5)** Раз в месяц устраивать **полный тур** на время: четыре задачи, три часа, без подсказок. Только так тренируется распределение времени.",
      "en": "What works if you prepare seriously:\n\n**1)** Take one topic a week or two, starting from the theory and the worked examples, and only then the problems.\n\n**2)** Solve problems **in writing and to the end**. \"I see how to do it\" and \"I did it\" are different things; the round marks the second.\n\n**3)** Study the solutions properly. After a failed attempt, read the solution not to \"see the answer\" but to find **the step you did not think of**, and remember that step.\n\n**4)** Keep a list of techniques. One line each: \"sum of cubes when $a+b+c=0$\", \"three-colouring for $1\\times3$ pieces\". By the end of the year it is your own textbook.\n\n**5)** Once a month sit a **full timed round**: four problems, three hours, no hints. Nothing else trains the use of time."
     }
    },
    {
     "t": "p",
     "text": {
      "ru": "Ниже — четыре пробных варианта по пять задач. Задачи перемешаны по темам, как на настоящем туре: по условию не сказано, какой раздел применять. Решайте вариант целиком за $2$–$2{,}5$ часа, не подглядывая в подсказки, и только потом сверяйтесь с разбором.",
      "en": "Below are four mock papers of five problems each. The topics are shuffled, as in a real round: nothing in the statement says which section to use. Sit a paper whole in $2$–$2.5$ hours without looking at the hints, and only then compare with the solutions."
     }
    }
   ]
  }
 ],
 "problems": [
  {
   "src": "Пробный тур 1, задача 1 / Mock round 1, problem 1",
   "lvl": 1,
   "q": {
    "ru": "Найдите наименьшее натуральное $n$, при котором $n!$ делится на $1000$.",
    "en": "Find the smallest positive integer $n$ for which $n!$ is divisible by $1000$."
   },
   "hint": {
    "ru": "$1000=2^{3}\\cdot5^{3}$; какой из множителей набирается медленнее?",
    "en": "$1000=2^{3}\\cdot5^{3}$; which factor accumulates more slowly?"
   },
   "sol": {
    "ru": "Разложим $1000=2^{3}\\cdot5^{3}$.\n\n**Пятёрки набираются медленнее.** Показатель пятёрки в $n!$ равен $$\\left\\lfloor\\frac n5\\right\\rfloor+\\left\\lfloor\\frac n{25}\\right\\rfloor+\\dots$$ Нам нужно, чтобы он был не меньше $3$.\n\nПри $n=14$: $\\left\\lfloor\\tfrac{14}{5}\\right\\rfloor=2$ — мало.\n\nПри $n=15$: $\\left\\lfloor\\tfrac{15}{5}\\right\\rfloor=3$ ✓ (множители $5$, $10$, $15$).\n\n**Двойки.** В $15!$ показатель двойки равен $$7+3+1=11\\ \\ge\\ 3 ,$$ так что с двойками проблем нет.\n\n**Ответ:** $n=15$. Проверка: $14!$ содержит лишь $5^{2}$ и потому не делится на $1000$.",
    "en": "Factor $1000=2^{3}\\cdot5^{3}$.\n\n**Fives come more slowly.** The exponent of five in $n!$ is $$\\left\\lfloor\\frac n5\\right\\rfloor+\\left\\lfloor\\frac n{25}\\right\\rfloor+\\dots$$ and we need it to be at least $3$.\n\nAt $n=14$: $\\left\\lfloor\\tfrac{14}{5}\\right\\rfloor=2$ — not enough.\n\nAt $n=15$: $\\left\\lfloor\\tfrac{15}{5}\\right\\rfloor=3$ ✓ (the factors $5$, $10$, $15$).\n\n**Twos.** In $15!$ the exponent of two is $$7+3+1=11\\ \\ge\\ 3 ,$$ so twos are no obstacle.\n\n**Answer:** $n=15$. Check: $14!$ carries only $5^{2}$ and so is not divisible by $1000$."
   }
  },
  {
   "src": "Пробный тур 1, задача 2 / Mock round 1, problem 2",
   "lvl": 1,
   "q": {
    "ru": "Сколькими способами можно выбрать из восьми человек комиссию **нечётной** численности (комиссия не может быть пустой)?",
    "en": "In how many ways can a committee of **odd** size be chosen from eight people (the committee may not be empty)?"
   },
   "hint": {
    "ru": "Сравните число подмножеств чётного и нечётного размера.",
    "en": "Compare the number of subsets of even and of odd size."
   },
   "sol": {
    "ru": "**Способ 1: знакопеременная сумма.** Известно, что $$\\binom80-\\binom81+\\binom82-\\dots+\\binom88=0 ,$$ то есть сумма биномиальных коэффициентов чётного номера равна сумме коэффициентов нечётного номера. А вместе они дают $2^{8}=256$.\n\nЗначит каждая из сумм равна $128$. Все подмножества нечётного размера непусты автоматически, поэтому ответ $$128 .$$\n\n**Способ 2: соответствие.** Зафиксируем одного человека, скажем Азиза. Любому подмножеству сопоставим подмножество, в котором наличие Азиза изменено на противоположное (был — убрали, не было — добавили). Эта операция меняет чётность размера и обратима, значит подмножеств чётного и нечётного размера поровну: по $\\tfrac{256}{2}=128$.\n\n**Ответ:** $128$ способов.",
    "en": "**Way 1: the alternating sum.** We know that $$\\binom80-\\binom81+\\binom82-\\dots+\\binom88=0 ,$$ so the even-index binomial coefficients sum to the same as the odd-index ones, while together they give $2^{8}=256$.\n\nEach sum is therefore $128$. Every odd-sized subset is automatically non-empty, so the answer is $$128 .$$\n\n**Way 2: a bijection.** Fix one person, say Aziz. To each subset associate the subset with Aziz’s membership flipped (in becomes out, out becomes in). This changes the parity of the size and is reversible, so even- and odd-sized subsets are equally many: $\\tfrac{256}{2}=128$ each.\n\n**Answer:** $128$ ways."
   }
  },
  {
   "src": "Пробный тур 1, задача 3 / Mock round 1, problem 3",
   "lvl": 2,
   "q": {
    "ru": "Гипотенуза прямоугольного треугольника равна $10$, а высота, проведённая к ней, равна $4$. Найдите катеты.",
    "en": "A right triangle has hypotenuse $10$ and the altitude to it equal to $4$. Find the legs."
   },
   "hint": {
    "ru": "Площадь можно посчитать двумя способами; дальше — сумма и произведение.",
    "en": "Compute the area two ways; then use the sum and the product."
   },
   "sol": {
    "ru": "Обозначим катеты через $a$ и $b$.\n\n**Два уравнения.** По теореме Пифагора $$a^{2}+b^{2}=100 .$$ Площадь считаем двумя способами: через катеты и через гипотенузу с высотой: $$\\frac{ab}{2}=\\frac{10\\cdot4}{2}=20\\quad\\Longrightarrow\\quad ab=40 .$$\n\n**Сумма и разность.** $$(a+b)^{2}=a^{2}+b^{2}+2ab=100+80=180\\quad\\Longrightarrow\\quad a+b=6\\sqrt5 ,$$ $$(a-b)^{2}=a^{2}+b^{2}-2ab=100-80=20\\quad\\Longrightarrow\\quad |a-b|=2\\sqrt5 .$$\n\n**Находим катеты.** $$a=\\frac{6\\sqrt5+2\\sqrt5}{2}=4\\sqrt5,\\qquad b=\\frac{6\\sqrt5-2\\sqrt5}{2}=2\\sqrt5 .$$\n\n**Проверка.** $a^{2}+b^{2}=80+20=100$ ✓ и $ab=8\\cdot5=40$ ✓\n\n**Ответ:** катеты равны $4\\sqrt5\\approx8{,}94$ и $2\\sqrt5\\approx4{,}47$.\n\n*Замечание.* Высота к гипотенузе не может превосходить её половины: $h\\le\\tfrac{c}{2}$. Здесь $4<5$, поэтому треугольник существует; при $h=5$ он был бы равнобедренным, а при $h>5$ задача не имела бы решений.",
    "en": "Write $a$ and $b$ for the legs.\n\n**Two equations.** Pythagoras gives $$a^{2}+b^{2}=100 ,$$ and computing the area two ways — from the legs, and from the hypotenuse with its altitude — gives $$\\frac{ab}{2}=\\frac{10\\cdot4}{2}=20\\quad\\Longrightarrow\\quad ab=40 .$$\n\n**Sum and difference.** $$(a+b)^{2}=a^{2}+b^{2}+2ab=100+80=180\\quad\\Longrightarrow\\quad a+b=6\\sqrt5 ,$$ $$(a-b)^{2}=a^{2}+b^{2}-2ab=100-80=20\\quad\\Longrightarrow\\quad |a-b|=2\\sqrt5 .$$\n\n**The legs.** $$a=\\frac{6\\sqrt5+2\\sqrt5}{2}=4\\sqrt5,\\qquad b=\\frac{6\\sqrt5-2\\sqrt5}{2}=2\\sqrt5 .$$\n\n**Check.** $a^{2}+b^{2}=80+20=100$ ✓ and $ab=8\\cdot5=40$ ✓\n\n**Answer:** the legs are $4\\sqrt5\\approx8.94$ and $2\\sqrt5\\approx4.47$.\n\n*Remark.* The altitude to the hypotenuse never exceeds half of it: $h\\le\\tfrac{c}{2}$. Here $4<5$, so the triangle exists; at $h=5$ it would be isosceles, and for $h>5$ there would be no solution."
   }
  },
  {
   "src": "Пробный тур 1, задача 4 / Mock round 1, problem 4",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что для любых положительных $a$, $b$, $c$ $$\\frac{a+b}{c}+\\frac{b+c}{a}+\\frac{c+a}{b}\\ \\ge\\ 6 .$$",
    "en": "Prove that for all positive $a$, $b$, $c$ $$\\frac{a+b}{c}+\\frac{b+c}{a}+\\frac{c+a}{b}\\ \\ge\\ 6 .$$"
   },
   "hint": {
    "ru": "Разбейте каждую дробь надвое и сгруппируйте в пары.",
    "en": "Split each fraction in two and group them into pairs."
   },
   "sol": {
    "ru": "**Раскроем и перегруппируем.** $$\\frac{a+b}{c}+\\frac{b+c}{a}+\\frac{c+a}{b}=\\left(\\frac ac+\\frac bc\\right)+\\left(\\frac ba+\\frac ca\\right)+\\left(\\frac cb+\\frac ab\\right).$$ Соберём слагаемые в три пары взаимно обратных: $$=\\left(\\frac ab+\\frac ba\\right)+\\left(\\frac bc+\\frac cb\\right)+\\left(\\frac ca+\\frac ac\\right).$$\n\n**Оцениваем каждую пару.** Для положительных $x$ и $y$ $$\\frac xy+\\frac yx-2=\\frac{x^{2}+y^{2}-2xy}{xy}=\\frac{(x-y)^{2}}{xy}\\ \\ge\\ 0 ,$$ то есть каждая пара не меньше $2$.\n\n**Складываем.** $$\\left(\\frac ab+\\frac ba\\right)+\\left(\\frac bc+\\frac cb\\right)+\\left(\\frac ca+\\frac ac\\right)\\ \\ge\\ 2+2+2=6 . \\qquad\\blacksquare$$\n\n**Равенство** достигается, когда все три квадрата обращаются в ноль, то есть при $a=b=c$. Проверка: тогда каждая дробь равна $2$, и сумма равна $6$ ✓",
    "en": "**Expand and regroup.** $$\\frac{a+b}{c}+\\frac{b+c}{a}+\\frac{c+a}{b}=\\left(\\frac ac+\\frac bc\\right)+\\left(\\frac ba+\\frac ca\\right)+\\left(\\frac cb+\\frac ab\\right),$$ and collect the terms into three reciprocal pairs: $$=\\left(\\frac ab+\\frac ba\\right)+\\left(\\frac bc+\\frac cb\\right)+\\left(\\frac ca+\\frac ac\\right).$$\n\n**Bound each pair.** For positive $x$ and $y$, $$\\frac xy+\\frac yx-2=\\frac{x^{2}+y^{2}-2xy}{xy}=\\frac{(x-y)^{2}}{xy}\\ \\ge\\ 0 ,$$ so each pair is at least $2$.\n\n**Add.** $$\\left(\\frac ab+\\frac ba\\right)+\\left(\\frac bc+\\frac cb\\right)+\\left(\\frac ca+\\frac ac\\right)\\ \\ge\\ 2+2+2=6 . \\qquad\\blacksquare$$\n\n**Equality** holds when all three squares vanish, that is when $a=b=c$. Check: each fraction is then $2$ and the sum is $6$ ✓"
   }
  },
  {
   "src": "Пробный тур 1, задача 5 / Mock round 1, problem 5",
   "lvl": 3,
   "q": {
    "ru": "Числа $1,2,\\dots,100$ расставлены по кругу в произвольном порядке. Докажите, что найдутся два стоящих рядом числа, сумма которых не меньше $101$.",
    "en": "The numbers $1,2,\\dots,100$ are placed around a circle in some order. Prove that two neighbouring numbers have a sum of at least $101$."
   },
   "hint": {
    "ru": "Сложите суммы всех соседних пар.",
    "en": "Add up the sums of all neighbouring pairs."
   },
   "sol": {
    "ru": "**Считаем сумму по всем парам.** По кругу стоят $100$ чисел, значит соседних пар тоже ровно $100$ (каждое число соседствует с двумя, но каждая пара считается один раз).\n\nСложим суммы всех этих пар. Каждое число входит ровно в **две** пары — с левым и с правым соседом. Поэтому общая сумма равна $$2\\left(1+2+\\dots+100\\right)=2\\cdot\\frac{100\\cdot101}{2}=100\\cdot101=10\\,100 .$$\n\n**Рассуждение о среднем.** Мы получили сто чисел (суммы пар) с общей суммой $10\\,100$. Их среднее равно $$\\frac{10\\,100}{100}=101 .$$\n\nПо принципу среднего хотя бы одно из этих ста чисел не меньше среднего, то есть найдётся пара соседей с суммой $\\ge101$. $\\blacksquare$\n\n*Точность оценки.* Число $101$ улучшить нельзя: существует расстановка, в которой **все** соседние суммы равны в точности $101$ или близки к нему — например, чередование $$1,\\ 100,\\ 2,\\ 99,\\ 3,\\ 98,\\ \\dots$$ Здесь суммы соседних пар равны $101$, $102$, $101$, $102$, и так далее, так что минимум по всем парам равен ровно $101$.\n\n*Замечание.* Обратите внимание на приём: мы ничего не знаем о расстановке, но, сложив **все** пары сразу, получили информацию о наибольшей из них. Это стандартный ход в задачах вида «докажите, что найдётся».",
    "en": "**Sum over all pairs.** A circle of $100$ numbers has exactly $100$ neighbouring pairs (each number has two neighbours, but each pair is counted once).\n\nAdd the sums of all these pairs. Each number belongs to exactly **two** pairs — with its left and its right neighbour. So the grand total is $$2\\left(1+2+\\dots+100\\right)=2\\cdot\\frac{100\\cdot101}{2}=100\\cdot101=10\\,100 .$$\n\n**Averaging.** We have a hundred numbers (the pair sums) adding to $10\\,100$, so their average is $$\\frac{10\\,100}{100}=101 .$$\n\nBy the averaging principle at least one of them is at least the average, that is some neighbouring pair sums to $\\ge101$. $\\blacksquare$\n\n*Sharpness.* The bound $101$ cannot be improved: in the alternating arrangement $$1,\\ 100,\\ 2,\\ 99,\\ 3,\\ 98,\\ \\dots$$ the neighbouring sums are $101$, $102$, $101$, $102$, and so on, so the smallest of them is exactly $101$.\n\n*Remark.* Note the technique: we know nothing about the arrangement, yet summing over **all** pairs at once told us about the largest of them. This is the standard move in \"prove that there exists\" problems."
   }
  },
  {
   "src": "Пробный тур 2, задача 1 / Mock round 2, problem 1",
   "lvl": 1,
   "q": {
    "ru": "Упростите выражение $\\sqrt{7+4\\sqrt3}$.",
    "en": "Simplify $\\sqrt{7+4\\sqrt3}$."
   },
   "hint": {
    "ru": "Попробуйте увидеть под корнем полный квадрат вида $\\left(p+q\\sqrt3\\right)^{2}$.",
    "en": "Try to see a perfect square $\\left(p+q\\sqrt3\\right)^{2}$ under the root."
   },
   "sol": {
    "ru": "Поищем представление $$7+4\\sqrt3=\\left(p+q\\sqrt3\\right)^{2}=p^{2}+3q^{2}+2pq\\sqrt3 .$$\n\nСравнивая рациональные и иррациональные части, получаем систему $$p^{2}+3q^{2}=7,\\qquad 2pq=4 .$$ Из второго $pq=2$; пробуем $p=2$, $q=1$: тогда $p^{2}+3q^{2}=4+3=7$ ✓\n\nЗначит $$7+4\\sqrt3=\\left(2+\\sqrt3\\right)^{2},$$ и, поскольку $2+\\sqrt3>0$, $$\\sqrt{7+4\\sqrt3}=2+\\sqrt3 .$$\n\n**Ответ:** $2+\\sqrt3\\approx3{,}73$.\n\n*Проверка численно:* $4\\sqrt3\\approx6{,}93$, значит под корнем примерно $13{,}93$, и $\\sqrt{13{,}93}\\approx3{,}73$ ✓\n\n*Замечание о знаке.* Важно, что мы выбрали именно $2+\\sqrt3$, а не $-2-\\sqrt3$: арифметический квадратный корень неотрицателен.",
    "en": "Look for a representation $$7+4\\sqrt3=\\left(p+q\\sqrt3\\right)^{2}=p^{2}+3q^{2}+2pq\\sqrt3 .$$\n\nComparing rational and irrational parts gives $$p^{2}+3q^{2}=7,\\qquad 2pq=4 .$$ The second gives $pq=2$; try $p=2$, $q=1$: then $p^{2}+3q^{2}=4+3=7$ ✓\n\nSo $$7+4\\sqrt3=\\left(2+\\sqrt3\\right)^{2},$$ and since $2+\\sqrt3>0$, $$\\sqrt{7+4\\sqrt3}=2+\\sqrt3 .$$\n\n**Answer:** $2+\\sqrt3\\approx3.73$.\n\n*Numerical check:* $4\\sqrt3\\approx6.93$, so the radicand is about $13.93$ and $\\sqrt{13.93}\\approx3.73$ ✓\n\n*A note on the sign.* It matters that we chose $2+\\sqrt3$ and not $-2-\\sqrt3$: the arithmetic square root is non-negative."
   }
  },
  {
   "src": "Пробный тур 2, задача 2 / Mock round 2, problem 2",
   "lvl": 1,
   "q": {
    "ru": "Периметр прямоугольного треугольника равен $30$, а гипотенуза равна $13$. Найдите катеты.",
    "en": "A right triangle has perimeter $30$ and hypotenuse $13$. Find the legs."
   },
   "hint": {
    "ru": "Найдите сумму катетов, затем их произведение.",
    "en": "Find the sum of the legs, then their product."
   },
   "sol": {
    "ru": "Обозначим катеты через $a$ и $b$.\n\n**Сумма.** Из периметра: $$a+b=30-13=17 .$$\n\n**Произведение.** Возведём сумму в квадрат и воспользуемся теоремой Пифагора: $$(a+b)^{2}=a^{2}+b^{2}+2ab=169+2ab=289 ,$$ откуда $2ab=120$ и $ab=60$.\n\n**Находим катеты.** Числа $a$ и $b$ — корни уравнения $$t^{2}-17t+60=0 .$$ Дискриминант $289-240=49$, корни $$t=\\frac{17\\pm7}{2}=12\\ \\text{и}\\ 5 .$$\n\n**Проверка:** $5+12+13=30$ ✓ и $25+144=169$ ✓\n\n**Ответ:** катеты равны $5$ и $12$ (знакомая пифагорова тройка).",
    "en": "Write $a$ and $b$ for the legs.\n\n**Their sum.** From the perimeter, $$a+b=30-13=17 .$$\n\n**Their product.** Square the sum and use Pythagoras: $$(a+b)^{2}=a^{2}+b^{2}+2ab=169+2ab=289 ,$$ so $2ab=120$ and $ab=60$.\n\n**The legs.** So $a$ and $b$ are the roots of $$t^{2}-17t+60=0 ,$$ whose discriminant is $289-240=49$ and whose roots are $$t=\\frac{17\\pm7}{2}=12\\ \\text{and}\\ 5 .$$\n\n**Check:** $5+12+13=30$ ✓ and $25+144=169$ ✓\n\n**Answer:** the legs are $5$ and $12$ — the familiar Pythagorean triple."
   }
  },
  {
   "src": "Пробный тур 2, задача 3 / Mock round 2, problem 3",
   "lvl": 2,
   "q": {
    "ru": "Найдите последнюю цифру числа $2^{2024}+3^{2024}$.",
    "en": "Find the last digit of $2^{2024}+3^{2024}$."
   },
   "hint": {
    "ru": "Циклы последних цифр степеней двойки и тройки имеют длину $4$.",
    "en": "The cycles of last digits of powers of two and of three both have length $4$."
   },
   "sol": {
    "ru": "**Степени двойки.** Последние цифры идут циклом $$2,\\ 4,\\ 8,\\ 6,\\ 2,\\ 4,\\dots$$ длины $4$. Так как $2024=4\\cdot506$, показатель кратен четырём, и берётся **последний** элемент цикла: $2^{2024}$ оканчивается на $6$.\n\n**Степени тройки.** Цикл $$3,\\ 9,\\ 7,\\ 1,\\ 3,\\dots$$ тоже длины $4$, и по той же причине $3^{2024}$ оканчивается на $1$.\n\n**Складываем.** Последняя цифра суммы: $$6+1=7 .$$\n\n**Ответ:** $7$.\n\n*Проверка на маленьком показателе с тем же остатком.* Возьмём показатель $4$: $2^{4}+3^{4}=16+81=97$ — оканчивается на $7$ ✓ И показатель $8$: $256+6561=6817$ — снова $7$ ✓",
    "en": "**Powers of two.** Their last digits cycle as $$2,\\ 4,\\ 8,\\ 6,\\ 2,\\ 4,\\dots$$ with period $4$. Since $2024=4\\cdot506$ the exponent is a multiple of four, so we take the **last** entry of the cycle: $2^{2024}$ ends in $6$.\n\n**Powers of three.** The cycle $$3,\\ 9,\\ 7,\\ 1,\\ 3,\\dots$$ also has period $4$, so for the same reason $3^{2024}$ ends in $1$.\n\n**Add.** The last digit of the sum is $$6+1=7 .$$\n\n**Answer:** $7$.\n\n*Check on a small exponent of the same residue.* Take exponent $4$: $2^{4}+3^{4}=16+81=97$, ending in $7$ ✓ And exponent $8$: $256+6561=6817$ — again $7$ ✓"
   }
  },
  {
   "src": "Пробный тур 2, задача 4 / Mock round 2, problem 4",
   "lvl": 2,
   "q": {
    "ru": "Сколькими способами можно поставить на шахматную доску $8\\times8$ две ладьи так, чтобы они **не били** друг друга? Ладьи считаются одинаковыми.",
    "en": "In how many ways can two rooks be placed on an $8\\times8$ chessboard so that they do **not** attack each other? The rooks are identical."
   },
   "hint": {
    "ru": "Посчитайте все расстановки и вычтите «плохие».",
    "en": "Count all placements and subtract the bad ones."
   },
   "sol": {
    "ru": "**Всего расстановок.** Две неразличимые ладьи на $64$ клетках: $$\\binom{64}{2}=\\frac{64\\cdot63}{2}=2016 .$$\n\n**Плохие расстановки — ладьи бьют друг друга.** Ладьи бьют друг друга ровно тогда, когда стоят в одной строке или в одном столбце.\n\n*В одной строке:* выбираем строку ($8$ способов) и две клетки в ней ($\\binom82=28$): $8\\cdot28=224$.\n\n*В одном столбце:* столько же — $224$.\n\nЭти случаи не пересекаются: две различные клетки не могут одновременно лежать и в одной строке, и в одном столбце.\n\nИтого плохих расстановок $224+224=448$.\n\n**Ответ.** $$2016-448=1568 .$$\n\n*Проверка другим способом.* Поставим первую ладью — $64$ способа. Она бьёт $7$ клеток своей строки и $7$ своего столбца, поэтому для второй ладьи остаётся $64-1-14=49$ клеток. Получаем $64\\cdot49=3136$ **упорядоченных** пар; ладьи одинаковы, поэтому делим на $2$: $$\\frac{3136}{2}=1568\\ \\checkmark$$",
    "en": "**All placements.** Two identical rooks on $64$ squares: $$\\binom{64}{2}=\\frac{64\\cdot63}{2}=2016 .$$\n\n**Bad placements — the rooks attack.** They attack exactly when they share a row or a column.\n\n*Same row:* choose the row ($8$ ways) and two squares in it ($\\binom82=28$): $8\\cdot28=224$.\n\n*Same column:* the same again — $224$.\n\nThe two cases are disjoint: two distinct squares cannot share both a row and a column.\n\nSo there are $224+224=448$ bad placements.\n\n**Answer.** $$2016-448=1568 .$$\n\n*Check another way.* Place the first rook — $64$ ways. It attacks $7$ squares in its row and $7$ in its column, so the second rook has $64-1-14=49$ squares available. That gives $64\\cdot49=3136$ **ordered** pairs; the rooks are identical, so divide by $2$: $$\\frac{3136}{2}=1568\\ \\checkmark$$"
   }
  },
  {
   "src": "Пробный тур 2, задача 5 / Mock round 2, problem 5",
   "lvl": 3,
   "q": {
    "ru": "В треугольнике $ABC$ известно, что $AB=6$, $AC=8$, а медиана $AM$, проведённая к стороне $BC$, равна $5$. Найдите $BC$ и величину угла $A$.",
    "en": "In a triangle $ABC$ we have $AB=6$, $AC=8$, and the median $AM$ to the side $BC$ equals $5$. Find $BC$ and the angle $A$."
   },
   "hint": {
    "ru": "Формула длины медианы — или удвоение медианы.",
    "en": "The median length formula — or double the median."
   },
   "sol": {
    "ru": "**Способ 1: формула медианы.** $$m_a^{2}=\\frac{2b^{2}+2c^{2}-a^{2}}{4},$$ где $a=BC$, $b=AC=8$, $c=AB=6$. Подставляем $m_a=5$: $$25=\\frac{2\\cdot64+2\\cdot36-a^{2}}{4}=\\frac{128+72-a^{2}}{4}=\\frac{200-a^{2}}{4}.$$ Отсюда $200-a^{2}=100$ и $a^{2}=100$, то есть $$BC=10 .$$\n\n**Угол $A$.** Проверим теорему Пифагора: $$AB^{2}+AC^{2}=36+64=100=BC^{2}.$$ Значит треугольник прямоугольный, и угол $A$ равен $90^\\circ$.\n\n**Способ 2: удвоение медианы.** Продлим $AM$ за точку $M$ до точки $D$ так, что $MD=AM=5$; тогда $AD=10$. Четырёхугольник $ABDC$ — параллелограмм (диагонали делятся точкой пересечения пополам), поэтому $CD=AB=6$.\n\nВ треугольнике $ACD$ стороны равны $AC=8$, $CD=6$, $AD=10$, и $$8^{2}+6^{2}=100=10^{2},$$ значит угол при вершине $C$ прямой. В параллелограмме соседние углы дают $180^\\circ$, поэтому угол при вершине $A$ тоже прямой — то есть $\\angle BAC=90^\\circ$. Тогда по теореме Пифагора $BC=\\sqrt{36+64}=10$ ✓\n\n**Ответ:** $BC=10$ и $\\angle A=90^\\circ$.\n\n*Замечание.* Совпадение не случайно: в прямоугольном треугольнике медиана к гипотенузе равна её половине, и здесь $5=\\tfrac{10}{2}$. Задачу можно было решить и «в обратную сторону»: заметить это равенство и сразу заключить, что угол $A$ прямой.",
    "en": "**Way 1: the median formula.** $$m_a^{2}=\\frac{2b^{2}+2c^{2}-a^{2}}{4},$$ with $a=BC$, $b=AC=8$, $c=AB=6$. Putting $m_a=5$: $$25=\\frac{2\\cdot64+2\\cdot36-a^{2}}{4}=\\frac{128+72-a^{2}}{4}=\\frac{200-a^{2}}{4},$$ so $200-a^{2}=100$ and $a^{2}=100$, that is $$BC=10 .$$\n\n**The angle $A$.** Check Pythagoras: $$AB^{2}+AC^{2}=36+64=100=BC^{2},$$ so the triangle is right-angled and $\\angle A=90^\\circ$.\n\n**Way 2: doubling the median.** Extend $AM$ beyond $M$ to $D$ with $MD=AM=5$, so $AD=10$. The quadrilateral $ABDC$ is a parallelogram (its diagonals bisect each other), hence $CD=AB=6$.\n\nIn the triangle $ACD$ the sides are $AC=8$, $CD=6$, $AD=10$, and $$8^{2}+6^{2}=100=10^{2},$$ so the angle at $C$ is right. In a parallelogram adjacent angles add to $180^\\circ$, so the angle at $A$ is right too — that is $\\angle BAC=90^\\circ$. Pythagoras then gives $BC=\\sqrt{36+64}=10$ ✓\n\n**Answer:** $BC=10$ and $\\angle A=90^\\circ$.\n\n*Remark.* The coincidence is no accident: in a right triangle the median to the hypotenuse is half of it, and here $5=\\tfrac{10}{2}$. One could have run the problem backwards — spot that equality and conclude at once that $A$ is right."
   }
  },
  {
   "src": "Пробный тур 3, задача 1 / Mock round 3, problem 1",
   "lvl": 1,
   "q": {
    "ru": "Сколько существует четырёхзначных чисел, которые читаются одинаково слева направо и справа налево?",
    "en": "How many four-digit numbers read the same forwards and backwards?"
   },
   "hint": {
    "ru": "Такое число имеет вид $\\overline{abba}$.",
    "en": "Such a number has the form $\\overline{abba}$."
   },
   "sol": {
    "ru": "Четырёхзначный палиндром имеет вид $$\\overline{abba}=1000a+100b+10b+a ,$$ то есть полностью определяется двумя цифрами $a$ и $b$.\n\n**Первая цифра.** $a$ — старшая цифра, поэтому $a\\ne0$: девять вариантов ($1$–$9$).\n\n**Вторая цифра.** $b$ — любая: десять вариантов ($0$–$9$).\n\nПо правилу произведения $$9\\cdot10=90 .$$\n\n**Ответ:** $90$ чисел.\n\n*Проверка на меньшем случае.* Трёхзначных палиндромов $\\overline{aba}$ тоже $9\\cdot10=90$; двузначных ($\\overline{aa}$) — девять: $11,22,\\dots,99$.",
    "en": "A four-digit palindrome has the form $$\\overline{abba}=1000a+100b+10b+a ,$$ so it is determined completely by the two digits $a$ and $b$.\n\n**The first digit.** $a$ is the leading digit, so $a\\ne0$: nine options ($1$–$9$).\n\n**The second digit.** $b$ is unrestricted: ten options ($0$–$9$).\n\nBy the product rule $$9\\cdot10=90 .$$\n\n**Answer:** $90$ numbers.\n\n*Check on a smaller case.* Three-digit palindromes $\\overline{aba}$ also number $9\\cdot10=90$; two-digit ones ($\\overline{aa}$) number nine: $11,22,\\dots,99$."
   }
  },
  {
   "src": "Пробный тур 3, задача 2 / Mock round 3, problem 2",
   "lvl": 2,
   "q": {
    "ru": "Известно, что $x+\\dfrac1x=3$. Найдите $x^{2}+\\dfrac1{x^{2}}$ и $x^{3}+\\dfrac1{x^{3}}$.",
    "en": "Given $x+\\dfrac1x=3$, find $x^{2}+\\dfrac1{x^{2}}$ and $x^{3}+\\dfrac1{x^{3}}$."
   },
   "hint": {
    "ru": "Возведите условие в квадрат и в куб.",
    "en": "Square and cube the hypothesis."
   },
   "sol": {
    "ru": "**Квадрат.** $$\\left(x+\\frac1x\\right)^{2}=x^{2}+2\\cdot x\\cdot\\frac1x+\\frac1{x^{2}}=x^{2}+\\frac1{x^{2}}+2 .$$ Значит $$x^{2}+\\frac1{x^{2}}=3^{2}-2=7 .$$\n\n**Куб.** $$\\left(x+\\frac1x\\right)^{3}=x^{3}+3x^{2}\\cdot\\frac1x+3x\\cdot\\frac1{x^{2}}+\\frac1{x^{3}}=x^{3}+\\frac1{x^{3}}+3\\left(x+\\frac1x\\right).$$ Значит $$x^{3}+\\frac1{x^{3}}=3^{3}-3\\cdot3=27-9=18 .$$\n\n**Ответ:** $7$ и $18$.\n\n*Замечание.* Само $x$ находить не нужно — и это типично для таких задач. (Если всё же интересно: $x$ — корень уравнения $x^{2}-3x+1=0$, то есть $x=\\tfrac{3\\pm\\sqrt5}{2}$; оба корня дают тот же ответ.)\n\n*Полезная формула.* Обозначив $s=x+\\tfrac1x$, получаем $$x^{2}+\\frac1{x^{2}}=s^{2}-2,\\qquad x^{3}+\\frac1{x^{3}}=s^{3}-3s .$$ Это те же выражения через сумму и произведение, что и в теме о тождествах: здесь произведение равно $x\\cdot\\tfrac1x=1$.",
    "en": "**Square it.** $$\\left(x+\\frac1x\\right)^{2}=x^{2}+2\\cdot x\\cdot\\frac1x+\\frac1{x^{2}}=x^{2}+\\frac1{x^{2}}+2 ,$$ so $$x^{2}+\\frac1{x^{2}}=3^{2}-2=7 .$$\n\n**Cube it.** $$\\left(x+\\frac1x\\right)^{3}=x^{3}+3x^{2}\\cdot\\frac1x+3x\\cdot\\frac1{x^{2}}+\\frac1{x^{3}}=x^{3}+\\frac1{x^{3}}+3\\left(x+\\frac1x\\right),$$ so $$x^{3}+\\frac1{x^{3}}=3^{3}-3\\cdot3=27-9=18 .$$\n\n**Answer:** $7$ and $18$.\n\n*Remark.* There was no need to find $x$ itself — typical of such problems. (For the curious: $x$ solves $x^{2}-3x+1=0$, that is $x=\\tfrac{3\\pm\\sqrt5}{2}$; both roots give the same answers.)\n\n*A useful formula.* Writing $s=x+\\tfrac1x$, $$x^{2}+\\frac1{x^{2}}=s^{2}-2,\\qquad x^{3}+\\frac1{x^{3}}=s^{3}-3s .$$ These are the same sum-and-product expressions as in the identities topic; here the product is $x\\cdot\\tfrac1x=1$."
   }
  },
  {
   "src": "Пробный тур 3, задача 3 / Mock round 3, problem 3",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $n^{3}+2n$ делится на $3$ при любом целом $n$.",
    "en": "Prove that $n^{3}+2n$ is divisible by $3$ for every integer $n$."
   },
   "hint": {
    "ru": "Перепишите как $n^{3}-n+3n$.",
    "en": "Rewrite it as $n^{3}-n+3n$."
   },
   "sol": {
    "ru": "**Способ 1: разложение.** Запишем $$n^{3}+2n=\\left(n^{3}-n\\right)+3n .$$ Второе слагаемое очевидно делится на $3$. Первое разложим: $$n^{3}-n=n\\left(n^{2}-1\\right)=(n-1)\\,n\\,(n+1)$$ — произведение трёх подряд идущих целых чисел, среди которых обязательно есть кратное трём.\n\nЗначит оба слагаемых делятся на $3$, и сумма тоже. $\\blacksquare$\n\n**Способ 2: остатки.** Разберём три случая по остатку $n$ при делении на $3$.\n\n$n\\equiv0$: тогда $n^{3}+2n\\equiv0+0=0$;\n\n$n\\equiv1$: тогда $n^{3}+2n\\equiv1+2=3\\equiv0$;\n\n$n\\equiv2$: тогда $n^{3}\\equiv8\\equiv2$ и $2n\\equiv4\\equiv1$, значит сумма $\\equiv2+1=3\\equiv0$.\n\nВо всех случаях остаток нулевой. $\\blacksquare$\n\n*Замечание.* Оба способа стоит уметь. Первый короче, зато второй работает всегда — даже когда разложения не видно.",
    "en": "**Way 1: factoring.** Write $$n^{3}+2n=\\left(n^{3}-n\\right)+3n .$$ The second term is plainly divisible by $3$. The first factors as $$n^{3}-n=n\\left(n^{2}-1\\right)=(n-1)\\,n\\,(n+1),$$ a product of three consecutive integers, one of which is a multiple of three.\n\nSo both terms are divisible by $3$, and so is the sum. $\\blacksquare$\n\n**Way 2: remainders.** Split into three cases by $n$ modulo $3$.\n\n$n\\equiv0$: then $n^{3}+2n\\equiv0+0=0$;\n\n$n\\equiv1$: then $n^{3}+2n\\equiv1+2=3\\equiv0$;\n\n$n\\equiv2$: then $n^{3}\\equiv8\\equiv2$ and $2n\\equiv4\\equiv1$, so the sum is $\\equiv2+1=3\\equiv0$.\n\nIn every case the remainder is zero. $\\blacksquare$\n\n*Remark.* Both methods are worth having. The first is shorter, but the second always works — even when no factorisation is in sight."
   }
  },
  {
   "src": "Пробный тур 3, задача 4 / Mock round 3, problem 4",
   "lvl": 2,
   "q": {
    "ru": "Из точки $P$ вне окружности проведены касательная длины $8$ и секущая. Ближняя точка пересечения секущей с окружностью удалена от $P$ на $4$. Найдите длину всей секущей от $P$ до дальней точки пересечения.",
    "en": "From a point $P$ outside a circle a tangent of length $8$ and a secant are drawn. The nearer intersection point of the secant with the circle is at distance $4$ from $P$. Find the distance from $P$ to the farther intersection point."
   },
   "hint": {
    "ru": "$PT^{2}=PA\\cdot PB$.",
    "en": "$PT^{2}=PA\\cdot PB$."
   },
   "sol": {
    "ru": "Обозначим точку касания через $T$, а точки пересечения секущей с окружностью — через $A$ (ближняя) и $B$ (дальняя).\n\nПо теореме о секущей и касательной $$PT^{2}=PA\\cdot PB .$$\n\nПодставляем известные величины: $$8^{2}=4\\cdot PB\\quad\\Longrightarrow\\quad 64=4\\,PB\\quad\\Longrightarrow\\quad PB=16 .$$\n\n**Ответ:** $PB=16$ (а хорда $AB$ равна $16-4=12$).\n\n*Проверка через степень точки.* Степень точки $P$ равна $PT^{2}=64$. Она же равна $PA\\cdot PB=4\\cdot16=64$ ✓\n\n*Дополнительно.* Зная хорду $AB=12$ и расстояния, можно найти и радиус: пусть $O$ — центр, тогда $OP^{2}-R^{2}=64$. Расстояние от центра до секущей равно $d=\\sqrt{R^{2}-36}$, а проекция $P$ на секущую отстоит от середины $AB$ на $4+6=10$. Значит $OP^{2}=d^{2}+100=R^{2}-36+100=R^{2}+64$ — совпадает с первым равенством при любом $R$, то есть радиус этими данными не определяется однозначно.",
    "en": "Write $T$ for the point of contact and $A$ (nearer), $B$ (farther) for the intersections of the secant with the circle.\n\nThe secant–tangent theorem gives $$PT^{2}=PA\\cdot PB .$$\n\nSubstituting, $$8^{2}=4\\cdot PB\\quad\\Longrightarrow\\quad 64=4\\,PB\\quad\\Longrightarrow\\quad PB=16 .$$\n\n**Answer:** $PB=16$ (and the chord $AB$ is $16-4=12$).\n\n*Check via the power of a point.* The power of $P$ is $PT^{2}=64$, and also $PA\\cdot PB=4\\cdot16=64$ ✓\n\n*Extra.* With the chord $AB=12$ one might hope to find the radius; but writing $O$ for the centre, $OP^{2}=R^{2}+64$ comes out for every $R$, so the data do not determine the radius."
   }
  },
  {
   "src": "Пробный тур 3, задача 5 / Mock round 3, problem 5",
   "lvl": 3,
   "q": {
    "ru": "Даны пять произвольных целых чисел. Докажите, что из них можно выбрать три, сумма которых делится на $3$.",
    "en": "Five arbitrary integers are given. Prove that three of them have a sum divisible by $3$."
   },
   "hint": {
    "ru": "Разбейте числа по остаткам при делении на $3$ и разберите два случая.",
    "en": "Sort the numbers by remainder modulo $3$ and split into two cases."
   },
   "sol": {
    "ru": "Разложим пять чисел по трём «ящикам» — остаткам $0$, $1$, $2$ при делении на $3$. Обозначим количества чисел в ящиках через $k_0$, $k_1$, $k_2$, так что $$k_0+k_1+k_2=5 .$$\n\n**Случай 1: все три остатка встречаются**, то есть $k_0\\ge1$, $k_1\\ge1$, $k_2\\ge1$.\n\nВозьмём по одному числу из каждого ящика. Сумма их остатков равна $$0+1+2=3\\equiv0\\pmod3 ,$$ значит и сумма самих чисел делится на $3$. Готово.\n\n**Случай 2: какой-то остаток не встречается**, то есть числа распределены не более чем по **двум** ящикам.\n\nТогда пять чисел лежат в двух ящиках, и по обобщённому принципу Дирихле в одном из них не менее $$\\left\\lceil\\frac52\\right\\rceil=3$$ чисел.\n\nВозьмём три числа из этого ящика: у них одинаковый остаток $r$, поэтому сумма даёт остаток $$3r\\equiv0\\pmod3 .$$ Снова готово.\n\nДругих случаев нет. $\\blacksquare$\n\n*Точность оценки.* Для четырёх чисел утверждение неверно: возьмём $1,1,2,2$. Суммы троек равны $1+1+2=4$ и $1+2+2=5$ — ни одна не делится на $3$.\n\n*Обобщение.* Это частный случай теоремы Эрдёша–Гинзбурга–Зива: из любых $2n-1$ целых чисел можно выбрать $n$ с суммой, кратной $n$. При $n=3$ получается ровно наша задача с пятью числами.",
    "en": "Sort the five numbers into three \"boxes\" — the remainders $0$, $1$, $2$ modulo $3$ — with $k_0$, $k_1$, $k_2$ numbers in them, so $$k_0+k_1+k_2=5 .$$\n\n**Case 1: all three remainders occur**, that is $k_0\\ge1$, $k_1\\ge1$, $k_2\\ge1$.\n\nTake one number from each box. Their remainders add to $$0+1+2=3\\equiv0\\pmod3 ,$$ so the numbers themselves have a sum divisible by $3$. Done.\n\n**Case 2: some remainder is missing**, so the numbers occupy at most **two** boxes.\n\nThen five numbers sit in two boxes and by the generalised pigeonhole principle one box holds at least $$\\left\\lceil\\frac52\\right\\rceil=3$$ of them.\n\nTake three numbers from that box: they share a remainder $r$, so their sum leaves $$3r\\equiv0\\pmod3 .$$ Done again.\n\nThere are no other cases. $\\blacksquare$\n\n*Sharpness.* For four numbers it fails: take $1,1,2,2$. The triple sums are $1+1+2=4$ and $1+2+2=5$, neither divisible by $3$.\n\n*Generalisation.* This is a special case of the Erdős–Ginzburg–Ziv theorem: among any $2n-1$ integers there are $n$ whose sum is divisible by $n$. At $n=3$ it is exactly our problem with five numbers."
   }
  },
  {
   "src": "Пробный тур 4, задача 1 / Mock round 4, problem 1",
   "lvl": 1,
   "q": {
    "ru": "Сколькими нулями оканчивается число $100!$?",
    "en": "In how many zeros does $100!$ end?"
   },
   "hint": {
    "ru": "Каждый ноль — это множитель $10=2\\cdot5$; чего меньше?",
    "en": "Each zero is a factor $10=2\\cdot5$; which of the two is scarcer?"
   },
   "sol": {
    "ru": "Число нулей в конце равно показателю десятки в разложении $100!$, а $10=2\\cdot5$. Двоек в факториале заведомо больше, чем пятёрок, поэтому ответ равен **показателю пятёрки**.\n\n**Считаем пятёрки.** Среди чисел от $1$ до $100$:\n\n$\\bullet$ кратных $5$ — ровно $\\left\\lfloor\\tfrac{100}{5}\\right\\rfloor=20$; каждое даёт хотя бы одну пятёрку;\n\n$\\bullet$ кратных $25$ — ровно $\\left\\lfloor\\tfrac{100}{25}\\right\\rfloor=4$; каждое даёт **вторую** пятёрку;\n\n$\\bullet$ кратных $125$ — ни одного.\n\nИтого показатель пятёрки равен $$20+4=24 .$$\n\n**Ответ:** $24$ нуля.\n\n*Почему складываем, а не умножаем.* Число $25=5^{2}$ уже посчитано один раз среди кратных пяти; второе слагаемое добавляет ему недостающую вторую пятёрку. Общая формула: $$v_5(n!)=\\left\\lfloor\\frac n5\\right\\rfloor+\\left\\lfloor\\frac n{25}\\right\\rfloor+\\left\\lfloor\\frac n{125}\\right\\rfloor+\\dots$$",
    "en": "The number of trailing zeros is the exponent of ten in $100!$, and $10=2\\cdot5$. Twos are certainly more plentiful than fives, so the answer is the **exponent of five**.\n\n**Count the fives.** Among $1,\\dots,100$:\n\n$\\bullet$ multiples of $5$: exactly $\\left\\lfloor\\tfrac{100}{5}\\right\\rfloor=20$, each contributing at least one five;\n\n$\\bullet$ multiples of $25$: exactly $\\left\\lfloor\\tfrac{100}{25}\\right\\rfloor=4$, each contributing a **second** five;\n\n$\\bullet$ multiples of $125$: none.\n\nSo the exponent of five is $$20+4=24 .$$\n\n**Answer:** $24$ zeros.\n\n*Why we add rather than multiply.* A number like $25=5^{2}$ is already counted once among the multiples of five; the second term supplies its missing second five. The general formula is $$v_5(n!)=\\left\\lfloor\\frac n5\\right\\rfloor+\\left\\lfloor\\frac n{25}\\right\\rfloor+\\left\\lfloor\\frac n{125}\\right\\rfloor+\\dots$$"
   }
  },
  {
   "src": "Пробный тур 4, задача 2 / Mock round 4, problem 2",
   "lvl": 2,
   "q": {
    "ru": "Решите уравнение $\\sqrt{x+3}-\\sqrt{x-2}=1$.",
    "en": "Solve the equation $\\sqrt{x+3}-\\sqrt{x-2}=1$."
   },
   "hint": {
    "ru": "Перенесите один корень вправо и возведите в квадрат; не забудьте проверить корни.",
    "en": "Move one root to the right and square; do not forget to check the roots."
   },
   "sol": {
    "ru": "**Область определения.** Нужны $x+3\\ge0$ и $x-2\\ge0$, то есть $x\\ge2$.\n\n**Решаем.** Перенесём: $$\\sqrt{x+3}=1+\\sqrt{x-2}.$$ Обе части неотрицательны, поэтому возведение в квадрат равносильно: $$x+3=1+2\\sqrt{x-2}+(x-2)=x-1+2\\sqrt{x-2}.$$ Сокращаем $x$: $$3=-1+2\\sqrt{x-2}\\quad\\Longrightarrow\\quad 2\\sqrt{x-2}=4\\quad\\Longrightarrow\\quad \\sqrt{x-2}=2 .$$ Возводим ещё раз: $x-2=4$, то есть $$x=6 .$$\n\n**Проверка.** $$\\sqrt{6+3}-\\sqrt{6-2}=\\sqrt9-\\sqrt4=3-2=1\\ \\checkmark$$ И $x=6\\ge2$ — область определения соблюдена.\n\n**Ответ:** $x=6$.\n\n*Замечание о посторонних корнях.* Здесь их не возникло, потому что перед первым возведением в квадрат обе части были неотрицательны. Если бы мы возводили в квадрат исходное уравнение как есть, разность слева могла бы оказаться отрицательной, и проверка стала бы обязательной. Проверять всё равно стоит всегда.",
    "en": "**The domain.** We need $x+3\\ge0$ and $x-2\\ge0$, that is $x\\ge2$.\n\n**Solve.** Rearrange: $$\\sqrt{x+3}=1+\\sqrt{x-2}.$$ Both sides are non-negative, so squaring is an equivalence: $$x+3=1+2\\sqrt{x-2}+(x-2)=x-1+2\\sqrt{x-2}.$$ Cancel $x$: $$3=-1+2\\sqrt{x-2}\\quad\\Longrightarrow\\quad 2\\sqrt{x-2}=4\\quad\\Longrightarrow\\quad \\sqrt{x-2}=2 ,$$ and squaring again, $x-2=4$, that is $$x=6 .$$\n\n**Check.** $$\\sqrt{6+3}-\\sqrt{6-2}=\\sqrt9-\\sqrt4=3-2=1\\ \\checkmark$$ And $x=6\\ge2$, so the domain is respected.\n\n**Answer:** $x=6$.\n\n*A note on extraneous roots.* None appeared here, because both sides were non-negative before the first squaring. Squaring the original equation as it stood could have introduced one, since the left difference might be negative. Checking is worth doing regardless."
   }
  },
  {
   "src": "Пробный тур 4, задача 3 / Mock round 4, problem 3",
   "lvl": 2,
   "q": {
    "ru": "Найдите $\\gcd\\left(2^{30}-1,\\ 2^{24}-1\\right)$.",
    "en": "Find $\\gcd\\left(2^{30}-1,\\ 2^{24}-1\\right)$."
   },
   "hint": {
    "ru": "Проведите один шаг алгоритма Евклида: чему равен остаток от деления $2^{30}-1$ на $2^{24}-1$?",
    "en": "Run one step of the Euclidean algorithm: what is the remainder of $2^{30}-1$ on division by $2^{24}-1$?"
   },
   "sol": {
    "ru": "**Ключевое тождество.** Пусть $m>n$. Тогда $$2^{m}-1=2^{\\,m-n}\\left(2^{n}-1\\right)+\\left(2^{\\,m-n}-1\\right).$$ (Проверьте раскрытием: $2^{\\,m-n}\\cdot2^{n}-2^{\\,m-n}+2^{\\,m-n}-1=2^{m}-1$.)\n\nЗначит остаток от деления $2^{m}-1$ на $2^{n}-1$ — это $2^{\\,m-n}-1$, и по алгоритму Евклида $$\\gcd\\left(2^{m}-1,\\ 2^{n}-1\\right)=\\gcd\\left(2^{\\,m-n}-1,\\ 2^{n}-1\\right).$$\n\n**Показатели ведут себя как в алгоритме Евклида.** Повторяя шаг, видим, что показатели преобразуются в точности так же, как числа в алгоритме Евклида для $m$ и $n$. Поэтому $$\\gcd\\left(2^{m}-1,\\ 2^{n}-1\\right)=2^{\\gcd(m,n)}-1 .$$\n\n**Считаем.** $\\gcd(30,24)=6$, поэтому $$\\gcd\\left(2^{30}-1,\\ 2^{24}-1\\right)=2^{6}-1=63 .$$\n\n**Ответ:** $63$.\n\n*Проверка.* $2^{6}-1=63$ делит и $2^{30}-1$, и $2^{24}-1$, потому что $6\\mid30$ и $6\\mid24$, а из $d\\mid m$ следует $\\left(2^{d}-1\\right)\\mid\\left(2^{m}-1\\right)$ — это разложение $$2^{m}-1=\\left(2^{d}-1\\right)\\left(2^{\\,m-d}+2^{\\,m-2d}+\\dots+1\\right).$$",
    "en": "**The key identity.** For $m>n$, $$2^{m}-1=2^{\\,m-n}\\left(2^{n}-1\\right)+\\left(2^{\\,m-n}-1\\right).$$ (Check by expanding: $2^{\\,m-n}\\cdot2^{n}-2^{\\,m-n}+2^{\\,m-n}-1=2^{m}-1$.)\n\nSo the remainder of $2^{m}-1$ on division by $2^{n}-1$ is $2^{\\,m-n}-1$, and the Euclidean algorithm gives $$\\gcd\\left(2^{m}-1,\\ 2^{n}-1\\right)=\\gcd\\left(2^{\\,m-n}-1,\\ 2^{n}-1\\right).$$\n\n**The exponents follow the Euclidean algorithm.** Repeating the step, the exponents transform exactly as the numbers do in the Euclidean algorithm for $m$ and $n$. Hence $$\\gcd\\left(2^{m}-1,\\ 2^{n}-1\\right)=2^{\\gcd(m,n)}-1 .$$\n\n**Compute.** $\\gcd(30,24)=6$, so $$\\gcd\\left(2^{30}-1,\\ 2^{24}-1\\right)=2^{6}-1=63 .$$\n\n**Answer:** $63$.\n\n*Check.* $2^{6}-1=63$ divides both $2^{30}-1$ and $2^{24}-1$, because $6\\mid30$ and $6\\mid24$, and $d\\mid m$ implies $\\left(2^{d}-1\\right)\\mid\\left(2^{m}-1\\right)$ through the factorisation $$2^{m}-1=\\left(2^{d}-1\\right)\\left(2^{\\,m-d}+2^{\\,m-2d}+\\dots+1\\right).$$"
   }
  },
  {
   "src": "Пробный тур 4, задача 4 / Mock round 4, problem 4",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что если в треугольнике медиана и биссектриса, проведённые из одной вершины, совпадают, то треугольник равнобедренный.",
    "en": "Prove that if the median and the bisector from one vertex of a triangle coincide, the triangle is isosceles."
   },
   "hint": {
    "ru": "Воспользуйтесь свойством биссектрисы — или удвойте медиану.",
    "en": "Use the bisector property — or double the median."
   },
   "sol": {
    "ru": "Пусть в треугольнике $ABC$ отрезок $AM$ — одновременно медиана и биссектриса.\n\n**Способ 1: свойство биссектрисы.** Раз $AM$ — биссектриса, то $$\\frac{BM}{MC}=\\frac{AB}{AC}.$$ Раз $AM$ — медиана, то $BM=MC$, значит левая часть равна $1$.\n\nСледовательно $\\dfrac{AB}{AC}=1$, то есть $AB=AC$. $\\blacksquare$\n\n**Способ 2: удвоение медианы.** Продлим $AM$ за точку $M$ до точки $D$ так, что $MD=AM$. Тогда $ABDC$ — параллелограмм (диагонали делятся точкой пересечения пополам), поэтому $$CD=AB\\qquad\\text{и}\\qquad CD\\parallel AB .$$\n\nИз параллельности следует, что $\\angle ADC=\\angle DAB$ (накрест лежащие при секущей $AD$). Но $AM$ — биссектриса, поэтому $\\angle DAB=\\angle DAC$.\n\nЗначит $\\angle ADC=\\angle DAC$, и треугольник $ACD$ равнобедренный: $$AC=CD .$$\n\nСоединяя с $CD=AB$, получаем $AB=AC$. $\\blacksquare$\n\n*Замечание.* Утверждение верно и в такой форме: если **любые две** из трёх линий (медиана, биссектриса, высота) из одной вершины совпадают, треугольник равнобедренный. А вот знаменитая теорема Штейнера–Лемуса — «если равны две **биссектрисы**, то треугольник равнобедренный» — гораздо труднее и не имеет короткого прямого доказательства.",
    "en": "Let $AM$ be both a median and a bisector in a triangle $ABC$.\n\n**Way 1: the bisector property.** Since $AM$ bisects, $$\\frac{BM}{MC}=\\frac{AB}{AC}.$$ Since $AM$ is a median, $BM=MC$, so the left side is $1$.\n\nHence $\\dfrac{AB}{AC}=1$, that is $AB=AC$. $\\blacksquare$\n\n**Way 2: doubling the median.** Extend $AM$ beyond $M$ to $D$ with $MD=AM$. Then $ABDC$ is a parallelogram (its diagonals bisect each other), so $$CD=AB\\qquad\\text{and}\\qquad CD\\parallel AB .$$\n\nThe parallelism gives $\\angle ADC=\\angle DAB$ (alternate angles for the transversal $AD$). But $AM$ bisects, so $\\angle DAB=\\angle DAC$.\n\nHence $\\angle ADC=\\angle DAC$ and the triangle $ACD$ is isosceles: $$AC=CD .$$\n\nCombined with $CD=AB$ this gives $AB=AC$. $\\blacksquare$\n\n*Remark.* The statement holds more generally: if **any two** of the three lines (median, bisector, altitude) from one vertex coincide, the triangle is isosceles. The famous Steiner–Lehmus theorem — \"if two **bisectors** are equal the triangle is isosceles\" — is much harder and has no short direct proof."
   }
  },
  {
   "src": "Пробный тур 4, задача 5 / Mock round 4, problem 5",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что сумма кубов трёх последовательных натуральных чисел делится на $9$.",
    "en": "Prove that the sum of the cubes of three consecutive positive integers is divisible by $9$."
   },
   "hint": {
    "ru": "Обозначьте среднее число через $n$ и раскройте.",
    "en": "Call the middle number $n$ and expand."
   },
   "sol": {
    "ru": "**Раскрываем.** Пусть числа равны $n-1$, $n$, $n+1$. Тогда $$(n-1)^{3}+n^{3}+(n+1)^{3}.$$ Воспользуемся формулами куба суммы и разности: $$(n\\pm1)^{3}=n^{3}\\pm3n^{2}+3n\\pm1 .$$ Складывая три слагаемых, слагаемые $\\pm3n^{2}$ и $\\pm1$ взаимно уничтожаются: $$(n-1)^{3}+n^{3}+(n+1)^{3}=3n^{3}+6n=3n\\left(n^{2}+2\\right).$$\n\n**Осталось показать, что $n\\left(n^{2}+2\\right)$ делится на $3$.** Разберём остаток $n$ по модулю $3$.\n\n$n\\equiv0$: тогда сам множитель $n$ делится на $3$;\n\n$n\\equiv1$: тогда $n^{2}+2\\equiv1+2=3\\equiv0$;\n\n$n\\equiv2$: тогда $n^{2}\\equiv4\\equiv1$ и $n^{2}+2\\equiv0$.\n\nВо всех случаях произведение $n\\left(n^{2}+2\\right)$ делится на $3$.\n\n**Вывод.** Значит вся сумма равна $3\\cdot\\left(\\text{кратное трём}\\right)$, то есть делится на $9$. $\\blacksquare$\n\n*Проверка.* $1^{3}+2^{3}+3^{3}=36=9\\cdot4$ ✓ $\\quad$ $2^{3}+3^{3}+4^{3}=99=9\\cdot11$ ✓ $\\quad$ $3^{3}+4^{3}+5^{3}=216=9\\cdot24$ ✓\n\n*Замечание.* Утверждение верно и для любых трёх последовательных **целых** чисел, включая отрицательные: в доказательстве нигде не использовалась положительность.",
    "en": "**Expand.** Let the numbers be $n-1$, $n$, $n+1$, so the sum is $$(n-1)^{3}+n^{3}+(n+1)^{3}.$$ Using $$(n\\pm1)^{3}=n^{3}\\pm3n^{2}+3n\\pm1 ,$$ the $\\pm3n^{2}$ and $\\pm1$ terms cancel when the three are added: $$(n-1)^{3}+n^{3}+(n+1)^{3}=3n^{3}+6n=3n\\left(n^{2}+2\\right).$$\n\n**It remains to show $n\\left(n^{2}+2\\right)$ is divisible by $3$.** Split by $n$ modulo $3$.\n\n$n\\equiv0$: the factor $n$ itself is divisible by $3$;\n\n$n\\equiv1$: then $n^{2}+2\\equiv1+2=3\\equiv0$;\n\n$n\\equiv2$: then $n^{2}\\equiv4\\equiv1$ and $n^{2}+2\\equiv0$.\n\nIn every case the product $n\\left(n^{2}+2\\right)$ is divisible by $3$.\n\n**Conclusion.** So the whole sum is $3\\cdot\\left(\\text{a multiple of three}\\right)$ and hence divisible by $9$. $\\blacksquare$\n\n*Check.* $1^{3}+2^{3}+3^{3}=36=9\\cdot4$ ✓ $\\quad$ $2^{3}+3^{3}+4^{3}=99=9\\cdot11$ ✓ $\\quad$ $3^{3}+4^{3}+5^{3}=216=9\\cdot24$ ✓\n\n*Remark.* The statement holds for any three consecutive **integers**, negatives included: positivity was never used."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Вычислите $1-2+3-4+\\dots+99-100$.",
    "en": "Compute $1-2+3-4+\\dots+99-100$."
   },
   "hint": {
    "ru": "Сгруппируйте слагаемые по два.",
    "en": "Group the terms in pairs."
   },
   "sol": {
    "ru": "Сгруппируем по два: $$(1-2)+(3-4)+\\dots+(99-100).$$\n\nКаждая скобка равна $-1$, а скобок ровно $50$, значит сумма равна $$50\\cdot(-1)=-50 .$$\n\n**Ответ:** $-50$.",
    "en": "Group in pairs: $$(1-2)+(3-4)+\\dots+(99-100).$$\n\nEach bracket equals $-1$ and there are exactly $50$ brackets, so the sum is $$50\\cdot(-1)=-50 .$$\n\n**Answer:** $-50$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Какой цифрой оканчивается число $7^{100}$?",
    "en": "What is the last digit of $7^{100}$?"
   },
   "hint": {
    "ru": "Последние цифры степеней семёрки повторяются с периодом $4$.",
    "en": "The last digits of the powers of seven repeat with period $4$."
   },
   "sol": {
    "ru": "Выпишем последние цифры: $$7,\\ 9,\\ 3,\\ 1,\\ 7,\\ 9,\\ 3,\\ 1,\\ \\dots$$ — период равен $4$, потому что $7^{4}=2401\\equiv1\\pmod{10}$.\n\nПоказатель $100$ делится на $4$, значит $$7^{100}=\\left(7^{4}\\right)^{25}\\equiv1\\pmod{10} .$$\n\n**Ответ:** $1$.",
    "en": "List the last digits: $$7,\\ 9,\\ 3,\\ 1,\\ 7,\\ 9,\\ 3,\\ 1,\\ \\dots$$ — period $4$, since $7^{4}=2401\\equiv1\\pmod{10}$.\n\nThe exponent $100$ is a multiple of $4$, so $$7^{100}=\\left(7^{4}\\right)^{25}\\equiv1\\pmod{10} .$$\n\n**Answer:** $1$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Площадь квадрата равна $49$. Найдите его диагональ.",
    "en": "A square has area $49$. Find its diagonal."
   },
   "hint": {
    "ru": "Диагональ квадрата со стороной $a$ равна $a\\sqrt2$.",
    "en": "The diagonal of a square of side $a$ is $a\\sqrt2$."
   },
   "sol": {
    "ru": "Сторона равна $\\sqrt{49}=7$. Диагональ квадрата — гипотенуза прямоугольного треугольника с катетами $7$ и $7$: $$d=\\sqrt{7^{2}+7^{2}}=7\\sqrt2\\approx9{,}9 .$$\n\n**Ответ:** $7\\sqrt2$.",
    "en": "The side is $\\sqrt{49}=7$. The diagonal is the hypotenuse of a right triangle with legs $7$ and $7$: $$d=\\sqrt{7^{2}+7^{2}}=7\\sqrt2\\approx9.9 .$$\n\n**Answer:** $7\\sqrt2$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Вычислите $\\dfrac{2^{10}\\cdot5^{10}}{10^{8}}$.",
    "en": "Compute $\\dfrac{2^{10}\\cdot5^{10}}{10^{8}}$."
   },
   "hint": {
    "ru": "$2\\cdot5=10$.",
    "en": "$2\\cdot5=10$."
   },
   "sol": {
    "ru": "Соберём числитель: $$2^{10}\\cdot5^{10}=(2\\cdot5)^{10}=10^{10} .$$\n\nЗначит $$\\frac{10^{10}}{10^{8}}=10^{2}=100 .$$\n\n**Ответ:** $100$.",
    "en": "Combine the numerator: $$2^{10}\\cdot5^{10}=(2\\cdot5)^{10}=10^{10} .$$\n\nHence $$\\frac{10^{10}}{10^{8}}=10^{2}=100 .$$\n\n**Answer:** $100$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Сколько двузначных чисел имеют сумму цифр, равную $9$?",
    "en": "How many two-digit numbers have digit sum $9$?"
   },
   "hint": {
    "ru": "Первая цифра определяет вторую.",
    "en": "The first digit determines the second."
   },
   "sol": {
    "ru": "Пусть число равно $\\overline{ab}$ с $a\\ge1$. Условие $a+b=9$ означает $b=9-a$, и цифра $b$ определяется однозначно.\n\nОстаётся проверить, при каких $a$ значение $b=9-a$ действительно является цифрой: при $a=1,\\dots,9$ получаем $b=8,\\dots,0$ — всё в порядке.\n\nЗначит подходящих чисел девять: $$18,\\ 27,\\ 36,\\ 45,\\ 54,\\ 63,\\ 72,\\ 81,\\ 90 .$$\n\n**Ответ:** $9$.",
    "en": "Let the number be $\\overline{ab}$ with $a\\ge1$. The condition $a+b=9$ gives $b=9-a$, so $b$ is determined.\n\nIt remains to check that $b=9-a$ is a digit: for $a=1,\\dots,9$ we get $b=8,\\dots,0$ — all fine.\n\nSo there are nine such numbers: $$18,\\ 27,\\ 36,\\ 45,\\ 54,\\ 63,\\ 72,\\ 81,\\ 90 .$$\n\n**Answer:** $9$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Решите уравнение $|x-3|=5$.",
    "en": "Solve the equation $|x-3|=5$."
   },
   "hint": {
    "ru": "Модуль равен пяти в двух случаях.",
    "en": "The absolute value equals five in two cases."
   },
   "sol": {
    "ru": "Равенство $|t|=5$ означает $t=5$ или $t=-5$. Здесь $t=x-3$, поэтому $$x-3=5\\quad\\Longrightarrow\\quad x=8 ,$$ $$x-3=-5\\quad\\Longrightarrow\\quad x=-2 .$$\n\n**Проверка:** $|8-3|=5$ ✓ и $|-2-3|=|-5|=5$ ✓\n\n**Ответ:** $x=8$ и $x=-2$.\n\n**Геометрический смысл:** это точки, удалённые от $3$ ровно на $5$.",
    "en": "The equation $|t|=5$ means $t=5$ or $t=-5$. Here $t=x-3$, so $$x-3=5\\ \\Longrightarrow\\ x=8 ,\\qquad x-3=-5\\ \\Longrightarrow\\ x=-2 .$$\n\n**Check:** $|8-3|=5$ ✓ and $|-2-3|=5$ ✓\n\n**Answer:** $x=8$ and $x=-2$.\n\n**Geometric meaning:** the points at distance exactly $5$ from $3$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Решите уравнение $x^{2}-5|x|+6=0$.",
    "en": "Solve the equation $x^{2}-5|x|+6=0$."
   },
   "hint": {
    "ru": "Обозначьте $t=|x|$ и заметьте, что $x^{2}=t^{2}$.",
    "en": "Put $t=|x|$ and note $x^{2}=t^{2}$."
   },
   "sol": {
    "ru": "Так как $x^{2}=|x|^{2}$, замена $t=|x|\\ge0$ даёт $$t^{2}-5t+6=0\\quad\\Longrightarrow\\quad t=2\\ \\text{или}\\ t=3 .$$\n\nОба корня неотрицательны, значит оба подходят: $$|x|=2\\ \\Longrightarrow\\ x=\\pm2 ,\\qquad |x|=3\\ \\Longrightarrow\\ x=\\pm3 .$$\n\n**Проверка** при $x=-3$: $9-15+6=0$ ✓\n\n**Ответ:** $x=\\pm2$, $x=\\pm3$ — четыре корня.",
    "en": "Since $x^{2}=|x|^{2}$, the substitution $t=|x|\\ge0$ gives $$t^{2}-5t+6=0\\quad\\Longrightarrow\\quad t=2\\ \\text{or}\\ t=3 .$$\n\nBoth roots are non-negative, so both are admissible: $$|x|=2\\ \\Longrightarrow\\ x=\\pm2 ,\\qquad |x|=3\\ \\Longrightarrow\\ x=\\pm3 .$$\n\n**Check** at $x=-3$: $9-15+6=0$ ✓\n\n**Answer:** $x=\\pm2$ and $x=\\pm3$ — four roots."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Сколькими способами можно выбрать три книги из семи?",
    "en": "In how many ways can three books be chosen from seven?"
   },
   "hint": {
    "ru": "Порядок не важен.",
    "en": "The order does not matter."
   },
   "sol": {
    "ru": "$$\\binom73=\\frac{7\\cdot6\\cdot5}{3\\cdot2\\cdot1}=35 .$$\n\n**Ответ:** $35$.\n\n**Проверка симметрией:** выбрать три книги — то же самое, что оставить четыре, и действительно $\\binom74=35$ ✓",
    "en": "$$\\binom73=\\frac{7\\cdot6\\cdot5}{3\\cdot2\\cdot1}=35 .$$\n\n**Answer:** $35$.\n\n**Symmetry check:** choosing three books is the same as leaving four, and indeed $\\binom74=35$ ✓"
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите остаток от деления $3^{100}$ на $13$.",
    "en": "Find the remainder of $3^{100}$ on division by $13$."
   },
   "hint": {
    "ru": "Посчитайте $3^{3}$ по модулю $13$.",
    "en": "Compute $3^{3}$ modulo $13$."
   },
   "sol": {
    "ru": "Ключ: $$3^{3}=27=2\\cdot13+1\\equiv1\\pmod{13} .$$\n\nПоделим показатель на $3$ с остатком: $100=3\\cdot33+1$. Тогда $$3^{100}=\\left(3^{3}\\right)^{33}\\cdot3\\equiv1^{33}\\cdot3=3\\pmod{13} .$$\n\n**Ответ:** $3$.\n\n**Замечание.** Малая теорема Ферма дала бы $3^{12}\\equiv1$, но здесь порядок тройки равен всего $3$ — это заметно короче и удобнее.",
    "en": "The key: $$3^{3}=27=2\\cdot13+1\\equiv1\\pmod{13} .$$\n\nDivide the exponent by $3$: $100=3\\cdot33+1$. Then $$3^{100}=\\left(3^{3}\\right)^{33}\\cdot3\\equiv3\\pmod{13} .$$\n\n**Answer:** $3$.\n\n**Remark.** Fermat’s little theorem would give $3^{12}\\equiv1$, but the order of $3$ here is only $3$ — much shorter and handier."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Основания трапеции равны $5$ и $11$, высота равна $4$. Найдите площадь.",
    "en": "A trapezium has bases $5$ and $11$ and height $4$. Find its area."
   },
   "hint": {
    "ru": "Площадь равна полусумме оснований, умноженной на высоту.",
    "en": "The area is the average of the bases times the height."
   },
   "sol": {
    "ru": "$$S=\\frac{5+11}{2}\\cdot4=8\\cdot4=32 .$$\n\n**Ответ:** $32$.\n\n**Проверка правдоподобия.** Площадь трапеции лежит между площадями прямоугольников с теми же высотой и меньшим/бо́льшим основанием: $$5\\cdot4=20\\ <\\ 32\\ <\\ 11\\cdot4=44 \\quad\\checkmark$$",
    "en": "$$S=\\frac{5+11}{2}\\cdot4=32 .$$\n\n**Answer:** $32$.\n\n**Plausibility check.** The area lies between those of the rectangles on the smaller and larger base with the same height: $$5\\cdot4=20\\ <\\ 32\\ <\\ 11\\cdot4=44 \\quad\\checkmark$$"
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите сумму коэффициентов многочлена $(2x-3)^{5}$ после раскрытия скобок.",
    "en": "Find the sum of the coefficients of $(2x-3)^{5}$ after expanding."
   },
   "hint": {
    "ru": "Подставьте $x=1$.",
    "en": "Substitute $x=1$."
   },
   "sol": {
    "ru": "Если $$P(x)=a_5x^{5}+a_4x^{4}+\\dots+a_0 ,$$ то сумма коэффициентов равна $$a_5+a_4+\\dots+a_0=P(1) .$$\n\nПодставим $x=1$ в исходное выражение: $$P(1)=(2\\cdot1-3)^{5}=(-1)^{5}=-1 .$$\n\n**Ответ:** $-1$.\n\n**Полезный приём.** Подстановка $x=-1$ даёт знакопеременную сумму коэффициентов; здесь это $(-5)^{5}=-3125$.",
    "en": "If $$P(x)=a_5x^{5}+\\dots+a_0 ,$$ then the sum of the coefficients is $$a_5+\\dots+a_0=P(1) .$$\n\nSubstituting $x=1$ into the original expression, $$P(1)=(2-3)^{5}=(-1)^{5}=-1 .$$\n\n**Answer:** $-1$.\n\n**A useful trick.** Substituting $x=-1$ gives the alternating sum of the coefficients; here $(-5)^{5}=-3125$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Решите систему $$x+y=7,\\qquad x^{2}-y^{2}=21 .$$",
    "en": "Solve the system $$x+y=7,\\qquad x^{2}-y^{2}=21 .$$"
   },
   "hint": {
    "ru": "$x^{2}-y^{2}=(x-y)(x+y)$.",
    "en": "$x^{2}-y^{2}=(x-y)(x+y)$."
   },
   "sol": {
    "ru": "Разложим второе уравнение: $$(x-y)(x+y)=21 .$$\n\nПодставим $x+y=7$: $$7(x-y)=21\\quad\\Longrightarrow\\quad x-y=3 .$$\n\nТеперь система линейная: складывая и вычитая, $$x=\\frac{7+3}{2}=5,\\qquad y=\\frac{7-3}{2}=2 .$$\n\n**Проверка:** $5+2=7$ ✓ и $25-4=21$ ✓\n\n**Ответ:** $x=5$, $y=2$.",
    "en": "Factor the second equation: $$(x-y)(x+y)=21 .$$\n\nSubstituting $x+y=7$, $$7(x-y)=21\\quad\\Longrightarrow\\quad x-y=3 .$$\n\nThe system is now linear; adding and subtracting, $$x=5,\\qquad y=2 .$$\n\n**Check:** $5+2=7$ ✓ and $25-4=21$ ✓\n\n**Answer:** $x=5$, $y=2$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Сколько двузначных чисел делится на $7$?",
    "en": "How many two-digit numbers are divisible by $7$?"
   },
   "hint": {
    "ru": "Найдите наименьшее и наибольшее такие числа.",
    "en": "Find the smallest and the largest such number."
   },
   "sol": {
    "ru": "Наименьшее двузначное кратное семи — $14=7\\cdot2$, наибольшее — $98=7\\cdot14$.\n\nЗначит это числа $7k$ при $k=2,3,\\dots,14$, то есть $$14-2+1=13 $$ чисел.\n\n**Ответ:** $13$.",
    "en": "The smallest two-digit multiple of seven is $14=7\\cdot2$, the largest $98=7\\cdot14$.\n\nSo these are $7k$ for $k=2,\\dots,14$, giving $$14-2+1=13 $$ numbers.\n\n**Answer:** $13$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Углы выпуклого пятиугольника относятся как $2:3:4:5:6$. Найдите наибольший из них.",
    "en": "The angles of a convex pentagon are in the ratio $2:3:4:5:6$. Find the largest of them."
   },
   "hint": {
    "ru": "Сумма углов $n$-угольника равна $(n-2)\\cdot180^\\circ$.",
    "en": "The angles of an $n$-gon sum to $(n-2)\\cdot180^\\circ$."
   },
   "sol": {
    "ru": "Сумма углов пятиугольника равна $$(5-2)\\cdot180^\\circ=540^\\circ .$$\n\nОбозначим углы через $2k,3k,4k,5k,6k$. Тогда $$2k+3k+4k+5k+6k=20k=540^\\circ\\quad\\Longrightarrow\\quad k=27^\\circ .$$\n\nНаибольший угол равен $$6k=6\\cdot27^\\circ=162^\\circ .$$\n\n**Проверка выпуклости:** все углы меньше $180^\\circ$ ✓ (наименьший равен $54^\\circ$).\n\n**Ответ:** $162^\\circ$.",
    "en": "The angles of a pentagon sum to $$(5-2)\\cdot180^\\circ=540^\\circ .$$\n\nWrite them as $2k,3k,4k,5k,6k$. Then $$20k=540^\\circ\\quad\\Longrightarrow\\quad k=27^\\circ ,$$ and the largest angle is $$6k=162^\\circ .$$\n\n**Convexity check:** all angles are below $180^\\circ$ ✓ (the smallest is $54^\\circ$).\n\n**Answer:** $162^\\circ$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что произведение четырёх подряд идущих целых чисел делится на $24$.",
    "en": "Prove that the product of four consecutive integers is divisible by $24$."
   },
   "hint": {
    "ru": "$24=8\\cdot3$; посчитайте отдельно двойки и тройки.",
    "en": "$24=8\\cdot3$; count the factors of two and of three separately."
   },
   "sol": {
    "ru": "Пусть числа — это $n,\\ n+1,\\ n+2,\\ n+3$.\n\n**Делимость на $3$.** Среди любых трёх подряд идущих чисел есть кратное трём, тем более среди четырёх ✓\n\n**Делимость на $8$.** Среди четырёх подряд идущих чисел ровно два чётных, и они идут через одно: это $2m$ и $2m+2$ для некоторого $m$. Их произведение равно $$2m\\cdot(2m+2)=4m(m+1),$$ а из двух соседних чисел $m$ и $m+1$ одно чётно, значит $m(m+1)$ чётно и произведение делится на $8$ ✓\n\n**Итог.** Числа $8$ и $3$ взаимно просты, значит произведение делится на $24$. $\\blacksquare$\n\n**Проверка:** $1\\cdot2\\cdot3\\cdot4=24$ ✓ и $2\\cdot3\\cdot4\\cdot5=120=24\\cdot5$ ✓\n\n**Общий факт:** произведение $k$ подряд идущих чисел всегда делится на $k!$, поскольку оно равно $k!\\cdot\\dbinom{n+k-1}{k}$.",
    "en": "Let the numbers be $n,\\ n+1,\\ n+2,\\ n+3$.\n\n**Divisibility by $3$.** Among any three consecutive integers one is a multiple of three, so certainly among four ✓\n\n**Divisibility by $8$.** Among four consecutive integers exactly two are even, and they differ by two: they are $2m$ and $2m+2$. Their product is $$2m\\cdot(2m+2)=4m(m+1),$$ and one of the consecutive numbers $m$, $m+1$ is even, so $m(m+1)$ is even and the product is divisible by $8$ ✓\n\n**Conclusion.** As $8$ and $3$ are coprime, the product is divisible by $24$. $\\blacksquare$\n\n**Check:** $1\\cdot2\\cdot3\\cdot4=24$ ✓ and $2\\cdot3\\cdot4\\cdot5=120=24\\cdot5$ ✓\n\n**General fact:** a product of $k$ consecutive integers is always divisible by $k!$, being $k!\\cdot\\dbinom{n+k-1}{k}$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Вычислите $$\\left(1-\\frac1{4}\\right)\\left(1-\\frac1{9}\\right)\\left(1-\\frac1{16}\\right)\\cdots\\left(1-\\frac1{100}\\right).$$",
    "en": "Compute $$\\left(1-\\frac1{4}\\right)\\left(1-\\frac1{9}\\right)\\left(1-\\frac1{16}\\right)\\cdots\\left(1-\\frac1{100}\\right).$$"
   },
   "hint": {
    "ru": "$1-\\dfrac1{k^{2}}=\\dfrac{(k-1)(k+1)}{k^{2}}$.",
    "en": "$1-\\dfrac1{k^{2}}=\\dfrac{(k-1)(k+1)}{k^{2}}$."
   },
   "sol": {
    "ru": "Множители отвечают $k=2,3,\\dots,10$. Разложим общий множитель: $$1-\\frac1{k^{2}}=\\frac{k^{2}-1}{k^{2}}=\\frac{(k-1)(k+1)}{k^{2}} .$$\n\nЗначит всё произведение равно $$\\prod_{k=2}^{10}\\frac{k-1}{k}\\cdot\\prod_{k=2}^{10}\\frac{k+1}{k} .$$\n\n**Первое произведение** телескопируется: $$\\frac12\\cdot\\frac23\\cdots\\frac9{10}=\\frac1{10} .$$\n\n**Второе тоже:** $$\\frac32\\cdot\\frac43\\cdots\\frac{11}{10}=\\frac{11}{2} .$$\n\n**Итог:** $$\\frac1{10}\\cdot\\frac{11}{2}=\\frac{11}{20}=0{,}55 .$$\n\n**Ответ:** $\\dfrac{11}{20}$.\n\n**Общая формула:** $$\\prod_{k=2}^{n}\\left(1-\\frac1{k^{2}}\\right)=\\frac{n+1}{2n} ,$$ и при $n=10$ она даёт $\\dfrac{11}{20}$ ✓",
    "en": "The factors correspond to $k=2,3,\\dots,10$. Split the general factor: $$1-\\frac1{k^{2}}=\\frac{(k-1)(k+1)}{k^{2}} .$$\n\nSo the whole product equals $$\\prod_{k=2}^{10}\\frac{k-1}{k}\\cdot\\prod_{k=2}^{10}\\frac{k+1}{k} .$$\n\n**The first product** telescopes: $$\\frac12\\cdot\\frac23\\cdots\\frac9{10}=\\frac1{10} .$$\n\n**So does the second:** $$\\frac32\\cdot\\frac43\\cdots\\frac{11}{10}=\\frac{11}{2} .$$\n\n**Result:** $$\\frac1{10}\\cdot\\frac{11}{2}=\\frac{11}{20}=0.55 .$$\n\n**Answer:** $\\dfrac{11}{20}$.\n\n**General formula:** $$\\prod_{k=2}^{n}\\left(1-\\frac1{k^{2}}\\right)=\\frac{n+1}{2n} ,$$ giving $\\dfrac{11}{20}$ at $n=10$ ✓"
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Найдите все простые $p$, для которых число $p^{2}+2^{p}$ — простое.",
    "en": "Find all primes $p$ for which $p^{2}+2^{p}$ is prime."
   },
   "hint": {
    "ru": "Посмотрите на выражение по модулю $3$.",
    "en": "Look at the expression modulo $3$."
   },
   "sol": {
    "ru": "**Случай $p=2$.** $$2^{2}+2^{2}=8 $$ — составное ✗\n\n**Случай $p=3$.** $$3^{2}+2^{3}=9+8=17 $$ — простое ✓\n\n**Случай $p>3$.** Тогда $p$ нечётно и не делится на $3$, поэтому $$p^{2}\\equiv1\\pmod 3 .$$ Кроме того $2\\equiv-1\\pmod3$ и показатель $p$ нечётен, значит $$2^{p}\\equiv(-1)^{p}=-1\\equiv2\\pmod 3 .$$\n\nСкладывая, $$p^{2}+2^{p}\\equiv1+2=3\\equiv0\\pmod 3 ,$$ то есть число делится на $3$. При этом оно заведомо больше трёх, значит составное ✗\n\n**Ответ:** $p=3$.",
    "en": "**Case $p=2$.** $$2^{2}+2^{2}=8 $$ is composite ✗\n\n**Case $p=3$.** $$3^{2}+2^{3}=17 $$ is prime ✓\n\n**Case $p>3$.** Then $p$ is odd and not divisible by $3$, so $$p^{2}\\equiv1\\pmod 3 .$$ Also $2\\equiv-1\\pmod3$ with an odd exponent, so $$2^{p}\\equiv-1\\equiv2\\pmod 3 .$$\n\nAdding, $$p^{2}+2^{p}\\equiv0\\pmod 3 ,$$ and the number clearly exceeds three, hence is composite ✗\n\n**Answer:** $p=3$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Стороны треугольника равны $13$, $14$ и $15$. Найдите его площадь и высоту, проведённую к стороне $14$.",
    "en": "A triangle has sides $13$, $14$ and $15$. Find its area and the altitude to the side of length $14$."
   },
   "hint": {
    "ru": "Формула Герона, затем $S=\\tfrac12ah$.",
    "en": "Heron’s formula, then $S=\\tfrac12ah$."
   },
   "sol": {
    "ru": "**Площадь.** Полупериметр равен $$p=\\frac{13+14+15}{2}=21 ,$$ и по формуле Герона $$S=\\sqrt{21\\cdot8\\cdot7\\cdot6}=\\sqrt{7056}=84 .$$\n\n**Высота.** Из $S=\\tfrac12\\cdot14\\cdot h$ получаем $$h=\\frac{2\\cdot84}{14}=12 .$$\n\n**Ответ:** $S=84$, $h=12$.\n\n**Проверка.** Высота делит сторону $14$ на отрезки $$\\sqrt{13^{2}-12^{2}}=5\\qquad\\text{и}\\qquad \\sqrt{15^{2}-12^{2}}=9 ,$$ и $5+9=14$ ✓\n\n**Замечание.** Треугольник $13,14,15$ — самый известный «герonoв» треугольник: все стороны, площадь, высоты и радиусы вписанной и описанной окружностей у него рациональны ($r=4$, $R=8{,}125$).",
    "en": "**The area.** The semiperimeter is $$p=\\frac{13+14+15}{2}=21 ,$$ and Heron’s formula gives $$S=\\sqrt{21\\cdot8\\cdot7\\cdot6}=\\sqrt{7056}=84 .$$\n\n**The altitude.** From $S=\\tfrac12\\cdot14\\cdot h$, $$h=\\frac{2\\cdot84}{14}=12 .$$\n\n**Answer:** $S=84$, $h=12$.\n\n**Check.** The altitude splits the side $14$ into $$\\sqrt{13^{2}-12^{2}}=5\\qquad\\text{and}\\qquad \\sqrt{15^{2}-12^{2}}=9 ,$$ and $5+9=14$ ✓\n\n**Remark.** The $13,14,15$ triangle is the best-known Heronian triangle: sides, area, altitudes and both radii are rational ($r=4$, $R=8.125$)."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Решите уравнение $\\sqrt{x+5}+\\sqrt{x}=5$.",
    "en": "Solve the equation $\\sqrt{x+5}+\\sqrt{x}=5$."
   },
   "hint": {
    "ru": "Перенесите один корень и возведите в квадрат.",
    "en": "Move one root across and square."
   },
   "sol": {
    "ru": "**Область определения:** $x\\ge0$.\n\n**Переносим и возводим в квадрат.** $$\\sqrt{x+5}=5-\\sqrt x .$$ Правая часть должна быть неотрицательна, то есть $\\sqrt x\\le5$, что мы проверим в конце. Возводим в квадрат: $$x+5=25-10\\sqrt x+x\\quad\\Longrightarrow\\quad 10\\sqrt x=20\\quad\\Longrightarrow\\quad \\sqrt x=2 .$$\n\nЗначит $x=4$.\n\n**Проверка.** $$\\sqrt{4+5}+\\sqrt4=3+2=5 \\quad\\checkmark$$\n\n**Ответ:** $x=4$.\n\n**Почему проверка обязательна.** Возведение в квадрат — не равносильное преобразование: оно может добавить посторонние корни. Здесь корень оказался настоящим, но привычка проверять спасает во многих задачах.",
    "en": "**Domain:** $x\\ge0$.\n\n**Move and square.** $$\\sqrt{x+5}=5-\\sqrt x .$$ The right side must be non-negative, i.e. $\\sqrt x\\le5$, which we check at the end. Squaring, $$x+5=25-10\\sqrt x+x\\quad\\Longrightarrow\\quad 10\\sqrt x=20\\quad\\Longrightarrow\\quad \\sqrt x=2 ,$$ so $x=4$.\n\n**Check.** $$\\sqrt{9}+\\sqrt4=3+2=5 \\quad\\checkmark$$\n\n**Answer:** $x=4$.\n\n**Why checking is compulsory.** Squaring is not reversible and can introduce extraneous roots. Here the root is genuine, but the habit saves you elsewhere."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Сколькими нулями оканчивается число $2025!$?",
    "en": "In how many zeros does $2025!$ end?"
   },
   "hint": {
    "ru": "Считайте пятёрки в разложении факториала.",
    "en": "Count the factors of five."
   },
   "sol": {
    "ru": "Каждый нуль на конце — это множитель $10=2\\cdot5$. Двоек в разложении $2025!$ заведомо больше, чем пятёрок, поэтому число нулей равно показателю пятёрки.\n\n**Формула Лежандра.** $$\\left\\lfloor\\frac{2025}{5}\\right\\rfloor+\\left\\lfloor\\frac{2025}{25}\\right\\rfloor+\\left\\lfloor\\frac{2025}{125}\\right\\rfloor+\\left\\lfloor\\frac{2025}{625}\\right\\rfloor+\\left\\lfloor\\frac{2025}{3125}\\right\\rfloor .$$\n\nСчитаем по шагам: $$405+81+16+3+0=505 .$$\n\n**Ответ:** $505$ нулей.\n\n**Почему складываем именно так.** Числа, кратные $5$, дают по одной пятёрке; кратные $25$ — ещё по одной сверх того; кратные $125$ — ещё по одной, и так далее.",
    "en": "Each trailing zero is a factor $10=2\\cdot5$. There are far more twos than fives in $2025!$, so the number of zeros equals the exponent of five.\n\n**Legendre’s formula.** $$\\left\\lfloor\\frac{2025}{5}\\right\\rfloor+\\left\\lfloor\\frac{2025}{25}\\right\\rfloor+\\left\\lfloor\\frac{2025}{125}\\right\\rfloor+\\left\\lfloor\\frac{2025}{625}\\right\\rfloor+\\left\\lfloor\\frac{2025}{3125}\\right\\rfloor .$$\n\nStep by step: $$405+81+16+3+0=505 .$$\n\n**Answer:** $505$ zeros.\n\n**Why we add like that.** Multiples of $5$ contribute one five each; multiples of $25$ contribute an extra one; multiples of $125$ one more, and so on."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Найдите все решения уравнения $x^{2}-y^{2}=2024$ в натуральных числах.",
    "en": "Find all solutions of $x^{2}-y^{2}=2024$ in positive integers."
   },
   "hint": {
    "ru": "Множители $x-y$ и $x+y$ одной чётности.",
    "en": "The factors $x-y$ and $x+y$ have the same parity."
   },
   "sol": {
    "ru": "Разложим: $$(x-y)(x+y)=2024 .$$\n\n**Чётность.** Числа $x-y$ и $x+y$ отличаются на $2y$, то есть имеют одинаковую чётность. Произведение $2024$ чётно, значит **оба множителя чётны**: $$x-y=2a,\\qquad x+y=2b\\quad\\Longrightarrow\\quad 4ab=2024\\quad\\Longrightarrow\\quad ab=506 .$$\n\n**Разложения.** $506=2\\cdot11\\cdot23$, и пары $(a,b)$ с $a<b$: $$(1,506),\\quad(2,253),\\quad(11,46),\\quad(22,23).$$\n\n**Возвращаемся к $x,y$.** $$x=a+b,\\qquad y=b-a ,$$ откуда $$(x,y)=(507,505),\\ (255,251),\\ (57,35),\\ (45,1).$$\n\n**Проверка** для $(57,35)$: $$57^{2}-35^{2}=3249-1225=2024 \\quad\\checkmark$$\n\n**Ответ:** четыре пары, перечисленные выше.\n\n**Замечание.** Если бы справа стояло число вида $4k+2$ (например, $2026$), решений не было бы вовсе: произведение двух чётных чисел делится на $4$.",
    "en": "Factor: $$(x-y)(x+y)=2024 .$$\n\n**Parity.** The numbers $x-y$ and $x+y$ differ by $2y$, hence share a parity. Their product $2024$ is even, so **both are even**: $$x-y=2a,\\qquad x+y=2b\\quad\\Longrightarrow\\quad 4ab=2024\\quad\\Longrightarrow\\quad ab=506 .$$\n\n**Factorisations.** $506=2\\cdot11\\cdot23$, and the pairs $(a,b)$ with $a<b$ are $$(1,506),\\quad(2,253),\\quad(11,46),\\quad(22,23).$$\n\n**Back to $x,y$.** $$x=a+b,\\qquad y=b-a ,$$ giving $$(x,y)=(507,505),\\ (255,251),\\ (57,35),\\ (45,1).$$\n\n**Check** for $(57,35)$: $$3249-1225=2024 \\quad\\checkmark$$\n\n**Answer:** the four pairs above.\n\n**Remark.** Had the right side been of the form $4k+2$ (say $2026$), there would be no solutions at all: a product of two even numbers is divisible by $4$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Гипотенуза прямоугольного треугольника равна $25$, один из катетов — $15$. Найдите радиус вписанной окружности.",
    "en": "A right triangle has hypotenuse $25$ and one leg $15$. Find the radius of its inscribed circle."
   },
   "hint": {
    "ru": "Сначала найдите второй катет.",
    "en": "First find the other leg."
   },
   "sol": {
    "ru": "**Второй катет.** $$b=\\sqrt{25^{2}-15^{2}}=\\sqrt{625-225}=\\sqrt{400}=20 .$$\n\n**Радиус.** Для прямоугольного треугольника $$r=\\frac{a+b-c}{2}=\\frac{15+20-25}{2}=\\frac{10}{2}=5 .$$\n\n**Проверка через площадь.** $$S=\\frac12\\cdot15\\cdot20=150,\\qquad p=\\frac{15+20+25}{2}=30,\\qquad r=\\frac Sp=\\frac{150}{30}=5 \\quad\\checkmark$$\n\n**Ответ:** $r=5$.\n\n**Заодно:** радиус описанной окружности равен половине гипотенузы, то есть $12{,}5$; неравенство Эйлера $R\\ge2r$ здесь выполняется как $12{,}5\\ge10$ ✓",
    "en": "**The other leg.** $$b=\\sqrt{25^{2}-15^{2}}=\\sqrt{400}=20 .$$\n\n**The radius.** For a right triangle $$r=\\frac{a+b-c}{2}=\\frac{15+20-25}{2}=5 .$$\n\n**Check via the area.** $$S=\\frac12\\cdot15\\cdot20=150,\\qquad p=30,\\qquad r=\\frac Sp=5 \\quad\\checkmark$$\n\n**Answer:** $r=5$.\n\n**Also:** the circumradius is half the hypotenuse, $12.5$; Euler’s inequality $R\\ge2r$ reads $12.5\\ge10$ ✓"
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Вычислите $\\displaystyle\\sum_{k=1}^{100}\\frac{1}{\\sqrt k+\\sqrt{k+1}}$.",
    "en": "Evaluate $\\displaystyle\\sum_{k=1}^{100}\\frac{1}{\\sqrt k+\\sqrt{k+1}}$."
   },
   "hint": {
    "ru": "Домножьте каждое слагаемое на сопряжённое.",
    "en": "Multiply each term by the conjugate."
   },
   "sol": {
    "ru": "Избавимся от иррациональности в знаменателе: $$\\frac{1}{\\sqrt k+\\sqrt{k+1}}=\\frac{\\sqrt{k+1}-\\sqrt k}{\\left(\\sqrt{k+1}+\\sqrt k\\right)\\left(\\sqrt{k+1}-\\sqrt k\\right)}=\\frac{\\sqrt{k+1}-\\sqrt k}{(k+1)-k}=\\sqrt{k+1}-\\sqrt k .$$\n\nСумма телескопируется: $$\\sum_{k=1}^{100}\\left(\\sqrt{k+1}-\\sqrt k\\right)=\\sqrt{101}-\\sqrt1=\\sqrt{101}-1 .$$\n\n**Ответ:** $\\sqrt{101}-1\\approx9{,}05$.\n\n**Проверка на маленьком случае.** При суммировании до $k=3$ должно получиться $\\sqrt4-1=1$; и действительно $$\\frac{1}{1+\\sqrt2}+\\frac{1}{\\sqrt2+\\sqrt3}+\\frac{1}{\\sqrt3+2}\\approx0{,}414+0{,}318+0{,}268=1 \\quad\\checkmark$$",
    "en": "Rationalise each denominator: $$\\frac{1}{\\sqrt k+\\sqrt{k+1}}=\\frac{\\sqrt{k+1}-\\sqrt k}{(k+1)-k}=\\sqrt{k+1}-\\sqrt k .$$\n\nThe sum telescopes: $$\\sum_{k=1}^{100}\\left(\\sqrt{k+1}-\\sqrt k\\right)=\\sqrt{101}-1 .$$\n\n**Answer:** $\\sqrt{101}-1\\approx9.05$.\n\n**Check on a small case.** Summing to $k=3$ should give $\\sqrt4-1=1$, and indeed $$0.414+0.318+0.268=1 \\quad\\checkmark$$"
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Положительные числа $a,b,c$ удовлетворяют $a+b+c=1$. Докажите, что $$\\frac1a+\\frac1b+\\frac1c\\ \\ge\\ 9 .$$",
    "en": "Positive numbers $a,b,c$ satisfy $a+b+c=1$. Prove that $$\\frac1a+\\frac1b+\\frac1c\\ \\ge\\ 9 .$$"
   },
   "hint": {
    "ru": "Домножьте левую часть на $a+b+c=1$.",
    "en": "Multiply the left side by $a+b+c=1$."
   },
   "sol": {
    "ru": "Так как $a+b+c=1$, доказываемое неравенство равносильно $$(a+b+c)\\left(\\frac1a+\\frac1b+\\frac1c\\right)\\ \\ge\\ 9 .$$\n\n**Способ 1 (среднее).** По неравенству о среднем для трёх чисел $$a+b+c\\ \\ge\\ 3\\sqrt[3]{abc},\\qquad \\frac1a+\\frac1b+\\frac1c\\ \\ge\\ \\frac{3}{\\sqrt[3]{abc}} .$$ Перемножая (все части положительны), получаем $9$ ✓\n\n**Способ 2 (раскрытие скобок).** $$(a+b+c)\\left(\\frac1a+\\frac1b+\\frac1c\\right)=3+\\left(\\frac ab+\\frac ba\\right)+\\left(\\frac bc+\\frac cb\\right)+\\left(\\frac ca+\\frac ac\\right),$$ и каждая скобка не меньше $2$, потому что $t+\\tfrac1t\\ge2$ при $t>0$. Значит вся сумма не меньше $3+2+2+2=9$ ✓\n\n$\\blacksquare$\n\n**Равенство** достигается при $a=b=c=\\tfrac13$: тогда левая часть равна $3+3+3=9$ ✓\n\n**Обобщение:** для $n$ положительных чисел с суммой $1$ выполняется $\\sum\\frac1{a_i}\\ge n^{2}$.",
    "en": "Since $a+b+c=1$, the claim is equivalent to $$(a+b+c)\\left(\\frac1a+\\frac1b+\\frac1c\\right)\\ \\ge\\ 9 .$$\n\n**Method 1 (AM–GM).** $$a+b+c\\ \\ge\\ 3\\sqrt[3]{abc},\\qquad \\frac1a+\\frac1b+\\frac1c\\ \\ge\\ \\frac{3}{\\sqrt[3]{abc}} ,$$ and multiplying (all parts positive) gives $9$ ✓\n\n**Method 2 (expand).** $$(a+b+c)\\left(\\frac1a+\\frac1b+\\frac1c\\right)=3+\\left(\\frac ab+\\frac ba\\right)+\\left(\\frac bc+\\frac cb\\right)+\\left(\\frac ca+\\frac ac\\right),$$ and each bracket is at least $2$ since $t+\\tfrac1t\\ge2$ for $t>0$. So the total is at least $3+2+2+2=9$ ✓\n\n$\\blacksquare$\n\n**Equality** at $a=b=c=\\tfrac13$, where the left side is $9$ ✓\n\n**Generalisation:** for $n$ positive numbers summing to $1$, $\\sum\\frac1{a_i}\\ge n^{2}$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Сколькими способами число $100$ можно представить в виде суммы трёх натуральных слагаемых, если порядок слагаемых важен?",
    "en": "In how many ways can $100$ be written as an ordered sum of three positive integers?"
   },
   "hint": {
    "ru": "Метод перегородок между единицами.",
    "en": "Put bars into the gaps between ones."
   },
   "sol": {
    "ru": "Выложим сто единиц в ряд: $$\\underbrace{1\\ 1\\ 1\\ \\dots\\ 1}_{100} .$$\n\nМежду соседними единицами ровно $99$ промежутков. Чтобы разбить ряд на **три** непустые части, надо поставить ровно две перегородки в разные промежутки.\n\nЗначит число способов равно $$\\binom{99}{2}=\\frac{99\\cdot98}{2}=4851 .$$\n\n**Ответ:** $4851$.\n\n**Проверка на маленьком случае.** Число $4$ как упорядоченная сумма трёх натуральных: $$1+1+2,\\ 1+2+1,\\ 2+1+1 $$ — три способа, и формула даёт $\\dbinom32=3$ ✓\n\n**Общая формула:** число упорядоченных представлений числа $n$ в виде суммы $k$ натуральных слагаемых равно $\\dbinom{n-1}{k-1}$.",
    "en": "Lay out a hundred ones in a row: $$\\underbrace{1\\ 1\\ 1\\ \\dots\\ 1}_{100} .$$\n\nThere are exactly $99$ gaps between neighbours. To split the row into **three** non-empty parts we place two bars into distinct gaps.\n\nSo the count is $$\\binom{99}{2}=4851 .$$\n\n**Answer:** $4851$.\n\n**Check on a small case.** Writing $4$ as an ordered sum of three positive integers: $$1+1+2,\\ 1+2+1,\\ 2+1+1 $$ — three ways, and the formula gives $\\dbinom32=3$ ✓\n\n**General formula:** the number of ordered representations of $n$ as a sum of $k$ positive integers is $\\dbinom{n-1}{k-1}$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что число $\\underbrace{4\\ldots4}_{n}\\underbrace{8\\ldots8}_{n-1}9$ — полный квадрат при любом натуральном $n$.",
    "en": "Prove that the number $\\underbrace{4\\ldots4}_{n}\\underbrace{8\\ldots8}_{n-1}9$ is a perfect square for every positive integer $n$."
   },
   "hint": {
    "ru": "Выразите его через $10^{n}$, пользуясь тем, что $\\underbrace{1\\ldots1}_{n}=\\dfrac{10^{n}-1}{9}$.",
    "en": "Express it through $10^{n}$ using $\\underbrace{1\\ldots1}_{n}=\\dfrac{10^{n}-1}{9}$."
   },
   "sol": {
    "ru": "Обозначим $N$ наше число и $R_k=\\underbrace{1\\ldots1}_{k}=\\dfrac{10^{k}-1}{9}$.\n\n**Разложим $N$ по разрядам.** Слева стоят $n$ четвёрок, дальше $n-1$ восьмёрок, затем девятка — всего $2n$ цифр. Значит $$N=4R_n\\cdot10^{n}+8R_{\\,n-1}\\cdot10+9 .$$\n\n**Подставим формулу для репьюнитов.** $$N=\\frac{4\\left(10^{n}-1\\right)}{9}\\cdot10^{n}+\\frac{8\\left(10^{\\,n-1}-1\\right)}{9}\\cdot10+9 .$$\n\nПриведём к общему знаменателю $9$ и раскроем: $$9N=4\\cdot10^{2n}-4\\cdot10^{n}+8\\cdot10^{n}-80+81=4\\cdot10^{2n}+4\\cdot10^{n}+1 .$$\n\n**Узнаём квадрат.** Правая часть — полный квадрат: $$4\\cdot10^{2n}+4\\cdot10^{n}+1=\\left(2\\cdot10^{n}+1\\right)^{2} .$$\n\nЗначит $$N=\\left(\\frac{2\\cdot10^{n}+1}{3}\\right)^{2} ,$$ и остаётся заметить, что $2\\cdot10^{n}+1$ делится на $3$: сумма его цифр равна $2+0+\\dots+0+1=3$.\n\nБолее того, $$\\frac{2\\cdot10^{n}+1}{3}=\\underbrace{6\\ldots6}_{\\,n-1}7 ,$$ то есть $$N=\\left(\\underbrace{6\\ldots6}_{\\,n-1}7\\right)^{2} . \\qquad\\blacksquare$$\n\n**Проверка.** $$n=1:\\ 49=7^{2};\\qquad n=2:\\ 4489=67^{2};\\qquad n=3:\\ 444889=667^{2} \\quad\\checkmark$$",
    "en": "Write $N$ for our number and $R_k=\\underbrace{1\\ldots1}_{k}=\\dfrac{10^{k}-1}{9}$.\n\n**Split $N$ by place value.** It has $n$ fours, then $n-1$ eights, then a nine — $2n$ digits in all. So $$N=4R_n\\cdot10^{n}+8R_{\\,n-1}\\cdot10+9 .$$\n\n**Substitute the repunit formula.** $$N=\\frac{4\\left(10^{n}-1\\right)}{9}\\cdot10^{n}+\\frac{8\\left(10^{\\,n-1}-1\\right)}{9}\\cdot10+9 ,$$ so over the denominator $9$, $$9N=4\\cdot10^{2n}-4\\cdot10^{n}+8\\cdot10^{n}-80+81=4\\cdot10^{2n}+4\\cdot10^{n}+1 .$$\n\n**Recognise the square.** $$4\\cdot10^{2n}+4\\cdot10^{n}+1=\\left(2\\cdot10^{n}+1\\right)^{2} ,$$ hence $$N=\\left(\\frac{2\\cdot10^{n}+1}{3}\\right)^{2} ,$$ and $2\\cdot10^{n}+1$ is divisible by $3$ since its digit sum is $3$.\n\nIn fact $$\\frac{2\\cdot10^{n}+1}{3}=\\underbrace{6\\ldots6}_{\\,n-1}7 ,$$ so $$N=\\left(\\underbrace{6\\ldots6}_{\\,n-1}7\\right)^{2} . \\qquad\\blacksquare$$\n\n**Check.** $$n=1:\\ 49=7^{2};\\qquad n=2:\\ 4489=67^{2};\\qquad n=3:\\ 444889=667^{2} \\quad\\checkmark$$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Решите уравнение $(x-1)^{3}+(2x+1)^{3}=(3x)^{3}$.",
    "en": "Solve the equation $(x-1)^{3}+(2x+1)^{3}=(3x)^{3}$."
   },
   "hint": {
    "ru": "Заметьте, что $(x-1)+(2x+1)-3x=0$.",
    "en": "Note that $(x-1)+(2x+1)-3x=0$."
   },
   "sol": {
    "ru": "**Ключевое наблюдение.** Положим $$a=x-1,\\qquad b=2x+1,\\qquad c=-3x .$$ Тогда $$a+b+c=(x-1)+(2x+1)-3x=0 .$$\n\n**Тождество.** Если $a+b+c=0$, то $$a^{3}+b^{3}+c^{3}=3abc $$ (это следует из разложения $a^{3}+b^{3}+c^{3}-3abc=(a+b+c)\\left(a^{2}+b^{2}+c^{2}-ab-bc-ca\\right)$).\n\n**Переписываем уравнение.** Исходное равенство $$(x-1)^{3}+(2x+1)^{3}-(3x)^{3}=0 $$ — это в точности $a^{3}+b^{3}+c^{3}=0$, а значит $$3abc=0 .$$\n\n**Решаем.** $$3(x-1)(2x+1)(-3x)=0\\quad\\Longleftrightarrow\\quad x=1,\\ \\ x=-\\frac12,\\ \\ x=0 .$$\n\n**Проверка.**\n\n$x=1$: $\\ 0+27=27$ ✓\n\n$x=0$: $\\ -1+1=0$ ✓\n\n$x=-\\tfrac12$: $\\ \\left(-\\tfrac32\\right)^{3}+0=-\\tfrac{27}{8}$ и $\\left(-\\tfrac32\\right)^{3}=-\\tfrac{27}{8}$ ✓\n\n**Ответ:** $x=0$, $x=1$, $x=-\\dfrac12$.\n\n**Почему это красиво.** Прямое раскрытие скобок дало бы кубическое уравнение с громоздкими коэффициентами; тождество превращает задачу в устную.",
    "en": "**Key observation.** Put $$a=x-1,\\qquad b=2x+1,\\qquad c=-3x ,$$ so that $$a+b+c=0 .$$\n\n**The identity.** If $a+b+c=0$ then $$a^{3}+b^{3}+c^{3}=3abc $$ (from $a^{3}+b^{3}+c^{3}-3abc=(a+b+c)\\left(a^{2}+b^{2}+c^{2}-ab-bc-ca\\right)$).\n\n**Rewrite the equation.** The original equality says $a^{3}+b^{3}+c^{3}=0$, hence $$3abc=0 .$$\n\n**Solve.** $$3(x-1)(2x+1)(-3x)=0\\quad\\Longleftrightarrow\\quad x=1,\\ \\ x=-\\frac12,\\ \\ x=0 .$$\n\n**Check.**\n\n$x=1$: $\\ 0+27=27$ ✓\n\n$x=0$: $\\ -1+1=0$ ✓\n\n$x=-\\tfrac12$: $\\ \\left(-\\tfrac32\\right)^{3}+0=-\\tfrac{27}{8}$ and $\\left(-\\tfrac32\\right)^{3}=-\\tfrac{27}{8}$ ✓\n\n**Answer:** $x=0$, $x=1$, $x=-\\dfrac12$.\n\n**Why this is pretty.** Expanding directly would give a cubic with awkward coefficients; the identity turns the problem into a one-liner."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что в выпуклом четырёхугольнике сумма диагоналей меньше периметра, но больше его половины.",
    "en": "Prove that in a convex quadrilateral the sum of the diagonals is less than the perimeter but greater than half of it."
   },
   "hint": {
    "ru": "Для верхней оценки примените неравенство треугольника к четырём треугольникам, для нижней — к двум.",
    "en": "For the upper bound apply the triangle inequality to four triangles, for the lower one to two."
   },
   "sol": {
    "ru": "Пусть четырёхугольник $ABCD$ выпуклый, его диагонали $AC$ и $BD$ пересекаются в точке $O$; обозначим стороны $a=AB$, $b=BC$, $c=CD$, $d=DA$ и периметр $P=a+b+c+d$.\n\n**Верхняя оценка: $AC+BD<P$.**\n\nДиагональ $AC$ входит в два треугольника — $ABC$ и $ACD$ — и в каждом работает неравенство треугольника: $$AC<a+b,\\qquad AC<c+d .$$ Сложив их, получаем $$2\\,AC<(a+b)+(c+d)=P\\quad\\Longrightarrow\\quad AC<\\frac P2 .$$\n\nТочно так же диагональ $BD$ входит в треугольники $ABD$ и $BCD$: $$BD<a+d,\\qquad BD<b+c ,$$ откуда $$2\\,BD<(a+d)+(b+c)=P\\quad\\Longrightarrow\\quad BD<\\frac P2 .$$\n\nСкладывая две последние оценки, получаем $$AC+BD<P \\quad\\checkmark$$\n\n**Нижняя оценка: $AC+BD>\\dfrac P2$.**\n\nДиагонали делят четырёхугольник на четыре треугольника с общей вершиной $O$; в каждом применим неравенство треугольника: $$AO+OB>a,\\quad BO+OC>b,\\quad CO+OD>c,\\quad DO+OA>d .$$\n\nСложим все четыре. Слева каждый из отрезков $AO$, $BO$, $CO$, $DO$ встретится ровно дважды, то есть слева стоит $$2\\left(AO+OC\\right)+2\\left(BO+OD\\right)=2\\left(AC+BD\\right).$$\n\nЗначит $$2\\left(AC+BD\\right)>P\\quad\\Longrightarrow\\quad AC+BD>\\frac P2 \\quad\\checkmark$$\n\n$\\blacksquare$\n\n**Точность оценок.** Обе достигаются лишь в пределе: у сильно «сплющенного» четырёхугольника сумма диагоналей приближается к периметру, а у сильно вытянутого — к его половине.\n\n**Проверка на квадрате со стороной $1$:** $$P=4,\\qquad AC+BD=2\\sqrt2\\approx2{,}83 ,$$ и действительно $2<2{,}83<4$ ✓",
    "en": "Let $ABCD$ be convex with diagonals $AC$, $BD$ meeting at $O$; write $a=AB$, $b=BC$, $c=CD$, $d=DA$ and $P=a+b+c+d$.\n\n**Upper bound: $AC+BD<P$.**\n\nThe diagonal $AC$ sits in two triangles, $ABC$ and $ACD$, and the triangle inequality applies in each: $$AC<a+b,\\qquad AC<c+d .$$ Adding them, $$2\\,AC<(a+b)+(c+d)=P\\quad\\Longrightarrow\\quad AC<\\frac P2 .$$\n\nLikewise $BD$ sits in $ABD$ and $BCD$: $$BD<a+d,\\qquad BD<b+c ,$$ so $$2\\,BD<(a+d)+(b+c)=P\\quad\\Longrightarrow\\quad BD<\\frac P2 .$$\n\nAdding the two conclusions, $$AC+BD<P \\quad\\checkmark$$\n\n**Lower bound: $AC+BD>\\dfrac P2$.**\n\nThe diagonals cut the quadrilateral into four triangles with common vertex $O$; the triangle inequality in each gives $$AO+OB>a,\\quad BO+OC>b,\\quad CO+OD>c,\\quad DO+OA>d .$$\n\nAdd all four. On the left each of $AO$, $BO$, $CO$, $DO$ occurs exactly twice, i.e. the left side is $$2\\left(AO+OC\\right)+2\\left(BO+OD\\right)=2\\left(AC+BD\\right).$$\n\nHence $$2\\left(AC+BD\\right)>P\\quad\\Longrightarrow\\quad AC+BD>\\frac P2 \\quad\\checkmark$$\n\n$\\blacksquare$\n\n**Sharpness.** Both bounds are attained only in the limit: for a flattened quadrilateral the diagonal sum approaches the perimeter, for a very elongated one, half of it.\n\n**Check on the unit square:** $$P=4,\\qquad AC+BD=2\\sqrt2\\approx2.83 ,$$ and indeed $2<2.83<4$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что $\\sqrt[3]{2}$ — иррациональное число.",
    "en": "Prove that $\\sqrt[3]{2}$ is irrational."
   },
   "hint": {
    "ru": "Предположите $\\sqrt[3]{2}=\\frac pq$ в несократимом виде и посмотрите на чётность.",
    "en": "Assume $\\sqrt[3]{2}=\\frac pq$ in lowest terms and look at parity."
   },
   "sol": {
    "ru": "**Предположим противное:** $$\\sqrt[3]{2}=\\frac pq ,$$ где дробь несократима, то есть $\\gcd(p,q)=1$.\n\nВозведём в куб: $$p^{3}=2q^{3} .$$\n\n**Шаг 1: $p$ чётно.** Правая часть чётна, значит $p^{3}$ чётно. Куб нечётного числа нечётен, поэтому $p$ чётно; положим $p=2m$.\n\n**Шаг 2: $q$ чётно.** Подставим: $$8m^{3}=2q^{3}\\quad\\Longrightarrow\\quad q^{3}=4m^{3} .$$ Правая часть чётна, значит $q^{3}$ чётно, а с ним и $q$.\n\n**Противоречие.** Оба числа $p$ и $q$ чётны, что противоречит несократимости ✗\n\nЗначит $\\sqrt[3]{2}$ иррационально. $\\blacksquare$\n\n**Через единственность разложения** доказательство ещё короче: в равенстве $p^{3}=2q^{3}$ показатель двойки слева делится на $3$, а справа даёт остаток $1$ при делении на $3$ — противоречие.\n\n**То же самое** показывает, что $\\sqrt[k]{n}$ иррационален всегда, когда $n$ не является точной $k$-й степенью.\n\n**Историческая нота.** Задача об удвоении куба — построить ребро куба вдвое большего объёма — неразрешима циркулем и линейкой именно потому, что $\\sqrt[3]{2}$ не выражается через квадратные корни.",
    "en": "**Suppose the contrary:** $$\\sqrt[3]{2}=\\frac pq $$ in lowest terms, so $\\gcd(p,q)=1$.\n\nCubing, $$p^{3}=2q^{3} .$$\n\n**Step 1: $p$ is even.** The right side is even, so $p^{3}$ is even; the cube of an odd number is odd, hence $p$ is even. Write $p=2m$.\n\n**Step 2: $q$ is even.** Substituting, $$8m^{3}=2q^{3}\\quad\\Longrightarrow\\quad q^{3}=4m^{3} ,$$ whose right side is even, so $q^{3}$ and hence $q$ is even.\n\n**Contradiction.** Both $p$ and $q$ are even, contradicting lowest terms ✗\n\nSo $\\sqrt[3]{2}$ is irrational. $\\blacksquare$\n\n**Via unique factorisation** the proof is even shorter: in $p^{3}=2q^{3}$ the exponent of two on the left is a multiple of $3$, while on the right it leaves remainder $1$ modulo $3$ — a contradiction.\n\n**The same argument** shows $\\sqrt[k]{n}$ is irrational whenever $n$ is not a perfect $k$-th power.\n\n**Historical note.** Doubling the cube — constructing the edge of a cube of twice the volume — is impossible with ruler and compass precisely because $\\sqrt[3]{2}$ is not expressible through square roots."
   }
  },
  {
   "src": "Международный уровень / International level",
   "lvl": 4,
   "q": {
    "ru": "Найдите все пары натуральных чисел $(a,b)$, для которых $ab^{2}+b+7$ делит $a^{2}b+a+b$. **(IMO 1998, задача 4)**",
    "en": "Find all pairs of positive integers $(a,b)$ such that $ab^{2}+b+7$ divides $a^{2}b+a+b$. **(IMO 1998, Problem 4)**"
   },
   "hint": {
    "ru": "Рассмотрите комбинацию $b\\left(a^{2}b+a+b\\right)-a\\left(ab^{2}+b+7\\right)$.",
    "en": "Consider the combination $b\\left(a^{2}b+a+b\\right)-a\\left(ab^{2}+b+7\\right)$."
   },
   "sol": {
    "ru": "Обозначим $D=ab^{2}+b+7$ и предположим, что $D$ делит $N=a^{2}b+a+b$.\n\n**Шаг 1: понижаем степень.** Составим комбинацию, в которой старшие члены сокращаются: $$b\\,N-a\\,D=b\\left(a^{2}b+a+b\\right)-a\\left(ab^{2}+b+7\\right)=a^{2}b^{2}+ab+b^{2}-a^{2}b^{2}-ab-7a=b^{2}-7a .$$\n\nЕсли $D\\mid N$, то $D$ делит и эту комбинацию: $$D\\ \\big|\\ b^{2}-7a .$$\n\n**Шаг 2: разбираем знак.**\n\n**Случай $b^{2}-7a=0$.** Тогда $b^{2}=7a$, значит $7\\mid b^{2}$, а так как $7$ простое, $7\\mid b$; положим $b=7k$. Тогда $a=\\dfrac{b^{2}}{7}=7k^{2}$.\n\nПроверим, что такие пары подходят. При $a=7k^{2}$, $b=7k$: $$D=7k^{2}\\cdot49k^{2}+7k+7=7\\left(49k^{4}+k+1\\right),$$ $$N=49k^{4}\\cdot7k+7k^{2}+7k=7k\\left(49k^{4}+k+1\\right).$$ Значит $N=k\\cdot D$ ✓\n\n**Случай $b^{2}-7a>0$.** Тогда, раз $D$ делит положительное число, $$D\\ \\le\\ b^{2}-7a .$$ Но $$D=ab^{2}+b+7\\ >\\ b^{2}\\ >\\ b^{2}-7a $$ (первое неравенство верно, потому что $a\\ge1$ и $b+7>0$) ✗\n\n**Случай $b^{2}-7a<0$.** Тогда $D$ делит положительное число $7a-b^{2}$, значит $$ab^{2}+b+7\\ \\le\\ 7a-b^{2} .$$ В частности $$ab^{2}\\ <\\ 7a\\quad\\Longrightarrow\\quad b^{2}<7\\quad\\Longrightarrow\\quad b\\in\\{1,2\\} .$$\n\n**Шаг 3: перебираем $b$.**\n\n**$b=1$:** $D=a+8$, $N=a^{2}+a+1$. Условие $D\\mid N$ равносильно $D\\mid 7a-1$ (по шагу 1: $b^{2}-7a=1-7a$). Запишем $$7a-1=7(a+8)-57 ,$$ значит $a+8$ делит $57=3\\cdot19$. Так как $a\\ge1$, имеем $a+8\\ge9$, откуда $$a+8=19\\ \\Rightarrow\\ a=11 ,\\qquad a+8=57\\ \\Rightarrow\\ a=49 .$$\n\nПроверка: при $a=11$ получаем $D=19$ и $N=121+11+1=133=19\\cdot7$ ✓ При $a=49$: $D=57$ и $N=2401+49+1=2451=57\\cdot43$ ✓\n\n**$b=2$:** $D=4a+9$, и $D$ делит $7a-4$. Умножим на $4$: $$4(7a-4)=7(4a+9)-79 ,$$ значит $4a+9$ делит $79$ — простое число. Так как $4a+9\\ge13$, остаётся $4a+9=79$, то есть $a=17{,}5$ — не целое ✗\n\n**Ответ:** $$(a,b)=(11,1),\\qquad (49,1),\\qquad \\left(7k^{2},\\ 7k\\right)\\ \\ \\text{при } k=1,2,3,\\dots$$\n\n**Замечание о технике.** Приём «составить линейную комбинацию, понижающую степень» — стандартный для задач вида «$f(a,b)$ делит $g(a,b)$»: он превращает делимость двух больших выражений в делимость чего-то маленького, а дальше работают оценки.",
    "en": "Write $D=ab^{2}+b+7$ and suppose $D$ divides $N=a^{2}b+a+b$.\n\n**Step 1: lower the degree.** Form a combination in which the leading terms cancel: $$b\\,N-a\\,D=a^{2}b^{2}+ab+b^{2}-a^{2}b^{2}-ab-7a=b^{2}-7a .$$\n\nIf $D\\mid N$ then $D$ divides this combination too: $$D\\ \\big|\\ b^{2}-7a .$$\n\n**Step 2: split by sign.**\n\n**Case $b^{2}-7a=0$.** Then $b^{2}=7a$, so $7\\mid b^{2}$ and, $7$ being prime, $7\\mid b$; write $b=7k$. Then $a=\\dfrac{b^{2}}{7}=7k^{2}$.\n\nCheck these pairs work. With $a=7k^{2}$, $b=7k$: $$D=7\\left(49k^{4}+k+1\\right),\\qquad N=7k\\left(49k^{4}+k+1\\right),$$ so $N=k\\cdot D$ ✓\n\n**Case $b^{2}-7a>0$.** Then $D$ divides a positive number, so $$D\\ \\le\\ b^{2}-7a .$$ But $$D=ab^{2}+b+7\\ >\\ b^{2}\\ >\\ b^{2}-7a $$ (the first inequality since $a\\ge1$ and $b+7>0$) ✗\n\n**Case $b^{2}-7a<0$.** Then $D$ divides the positive number $7a-b^{2}$, so $$ab^{2}+b+7\\ \\le\\ 7a-b^{2} .$$ In particular $$ab^{2}\\ <\\ 7a\\quad\\Longrightarrow\\quad b^{2}<7\\quad\\Longrightarrow\\quad b\\in\\{1,2\\} .$$\n\n**Step 3: check $b=1$ and $b=2$.**\n\n**$b=1$:** $D=a+8$ and $D$ divides $7a-1$ (from Step 1). Write $$7a-1=7(a+8)-57 ,$$ so $a+8$ divides $57=3\\cdot19$. As $a\\ge1$ gives $a+8\\ge9$, $$a+8=19\\ \\Rightarrow\\ a=11 ,\\qquad a+8=57\\ \\Rightarrow\\ a=49 .$$\n\nCheck: $a=11$ gives $D=19$, $N=133=19\\cdot7$ ✓ and $a=49$ gives $D=57$, $N=2451=57\\cdot43$ ✓\n\n**$b=2$:** $D=4a+9$ divides $7a-4$. Multiplying by $4$, $$4(7a-4)=7(4a+9)-79 ,$$ so $4a+9$ divides the prime $79$. Since $4a+9\\ge13$, we would need $4a+9=79$, i.e. $a=17.5$ — not an integer ✗\n\n**Answer:** $$(a,b)=(11,1),\\qquad (49,1),\\qquad \\left(7k^{2},\\ 7k\\right)\\ \\ \\text{for } k=1,2,3,\\dots$$\n\n**A note on technique.** Forming a linear combination that lowers the degree is the standard move for problems of the shape \"$f(a,b)$ divides $g(a,b)$\": it turns a divisibility between two large expressions into one involving something small, after which size estimates finish the job."
   }
  }
 ]
};
