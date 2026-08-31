# -*- coding: utf-8 -*-
"""Topic 16 — Mock olympiad: strategy and a full mixed set."""

def _src(r, p):
    return 'Пробный тур %d, задача %d / Mock round %d, problem %d' % (r, p, r, p)

LESSON = {
 'n': 16,
 'cat': 'mix',
 'title': {'ru': 'Пробная олимпиада', 'en': 'Mock olympiad'},
 'sub': {'ru': 'Как устроен тур, как распределить время и как оформить решение — и четыре пробных варианта из всех тем сразу.',
         'en': 'How a round works, how to spend the time and how to write a solution — plus four mock papers drawing on every topic.'},
 'goals': {
  'ru': [
   r'Понимать формат туров и знать, за что ставят баллы.',
   r'Распределять время на туре и решать, когда бросать задачу.',
   r'Определять тему задачи по первым признакам и выбирать первый ход.',
   r'Проверять решение так, чтобы не терять баллы на мелочах.',
  ],
  'en': [
   r'Understand the format of the rounds and what earns marks.',
   r'Budget the time in a round and decide when to abandon a problem.',
   r'Recognise a problem’s topic from its first signs and choose the opening move.',
   r'Check a solution so that no marks are lost on small things.',
  ]},

 'sections': [

  # ------------------------------------------------------------------ 1
  {'h': {'ru': 'Как устроен тур', 'en': 'How a round works'},
   'blocks': [
    {'t': 'p',
     'text': {
      'ru': r'Олимпиада — это не контрольная. Задач мало, времени много, и оценивается не ответ, а **доказательство**. Понимание этого различия само по себе стоит нескольких баллов.',
      'en': r'An olympiad is not a test. There are few problems and plenty of time, and what is marked is not the answer but the **proof**. Understanding that difference is itself worth several marks.'}},

    {'t': 'ul',
     'items': {
      'ru': [
       r'**Задач обычно $4$–$6$**, а времени $3$–$4$ часа. То есть на задачу приходится около сорока минут — гораздо больше, чем на любой контрольной.',
       r'**Каждая задача оценивается отдельно**, обычно по $7$ баллов. Частичное продвижение тоже оценивается: за верно доказанную лемму или разобранный случай дают баллы.',
       r'**Ответ без доказательства почти ничего не стоит.** В задаче «найдите все» половина баллов — за то, что других решений нет.',
       r'**Задачи расположены примерно по возрастанию сложности**, но это не закон: иногда третья оказывается легче второй. Прочитайте все задачи в первые пять минут.',
      ],
      'en': [
       r'**Usually $4$–$6$ problems** and $3$–$4$ hours. That is about forty minutes per problem — far more than in any school test.',
       r'**Each problem is marked separately**, typically out of $7$. Partial progress counts: a correctly proved lemma or a fully handled case earns marks.',
       r'**An answer without a proof is worth almost nothing.** In a "find all" problem half the marks are for showing there is nothing else.',
       r'**Problems are roughly in order of difficulty**, but not strictly: sometimes the third is easier than the second. Read them all in the first five minutes.',
      ]}},

    {'t': 'note',
     'text': {
      'ru': r'В Узбекистане олимпиада проходит в несколько этапов: школьный, районный (городской), областной и республиканский. Уровень задач растёт от этапа к этапу, но темы остаются теми же самыми — теми, что разобраны в этом курсе. Именно поэтому подготовка окупается: одна и та же техника работает на всех этапах, меняется только глубина.',
      'en': r'In Uzbekistan the olympiad runs in stages: school, district (or city), region, and republic. The difficulty grows from stage to stage, but the topics stay the same — the ones covered in this course. That is why preparation pays off: the same techniques serve at every stage, only the depth changes.'}},
   ]},

  # ------------------------------------------------------------------ 2
  {'h': {'ru': 'Стратегия на туре', 'en': 'Strategy during a round'},
   'blocks': [
    {'t': 'idea',
     'name': {'ru': 'Первые пятнадцать минут', 'en': 'The first fifteen minutes'},
     'text': {
      'ru': r'Не начинайте решать первую задачу сразу. Сначала:\n\n**1)** прочитайте **все** задачи, не пытаясь их решать;\n**2)** возле каждой пометьте тему («остатки», «неравенство», «окружность») и первую идею, если она пришла;\n**3)** оцените, какая задача кажется самой лёгкой — с неё и начинайте.\n\nЭти пятнадцать минут почти всегда окупаются: обидно решить трудную третью задачу и не успеть лёгкую пятую.',
      'en': r'Do not start on problem one straight away. First:\n\n**1)** read **all** the problems without trying to solve them;\n**2)** next to each note the topic ("remainders", "inequality", "circle") and the first idea, if one comes;\n**3)** judge which looks easiest — start there.\n\nThose fifteen minutes almost always pay off: it is painful to solve a hard third problem and run out of time on an easy fifth.'}},

    {'t': 'idea',
     'name': {'ru': 'Когда бросать задачу', 'en': 'When to drop a problem'},
     'text': {
      'ru': r'Если за **двадцать минут** не появилось ни одной идеи, переходите к другой задаче. Но перед этим **запишите то, что уже поняли**: разобранные случаи, доказанные вспомогательные утверждения, найденные примеры. Во-первых, за это дают баллы. Во-вторых, вернувшись через час, вы не начнёте с нуля.\n\nПравило «одна задача — один заход» не работает. Гораздо лучше пройти все задачи по разу, а потом вернуться к тем, где есть зацепка.',
      'en': r'If **twenty minutes** bring no idea at all, move to another problem. But first **write down what you have understood**: the cases handled, the lemmas proved, the examples found. First, those earn marks. Second, coming back an hour later you will not start from nothing.\n\nThe rule "one problem, one attempt" does not work. It is far better to pass through every problem once and then return to the ones where you have a foothold.'}},

    {'t': 'table',
     'head': {'ru': ['Что видно в условии', 'Скорее всего тема', 'Первый ход'],
              'en': ['What the statement shows', 'The likely topic', 'The opening move']},
     'rows': {
      'ru': [
       [r'«докажите, что делится на $\dots$»', r'делимость, остатки', r'разложить на множители или взять модуль'],
       [r'«найдите все целые $x,y$»', r'диофантово уравнение', r'разложить на множители, потом оценки'],
       [r'«докажите, что решений нет»', r'остатки', r'подобрать модуль по таблице квадратов и кубов'],
       [r'«докажите неравенство»', r'AM–GM, квадраты', r'перенести всё влево, найти точку равенства'],
       [r'«найдите наибольшее (наименьшее)»', r'оценка $+$ пример', r'доказать оценку, потом предъявить пример'],
       [r'«докажите, что найдётся»', r'принцип Дирихле', r'придумать «клетки»'],
       [r'«можно ли…» с операциями', r'инвариант', r'посмотреть на чётность, остаток, произведение знаков'],
       [r'клетчатая доска, фигурки', r'раскраска', r'покрасить в $2$, $3$ или $4$ цвета'],
       [r'вписанный четырёхугольник, углы', r'окружность', r'счёт углов, вписанный угол'],
       [r'отношения отрезков в треугольнике', r'площади, подобие', r'общая высота или общий угол'],
      ],
      'en': [
       [r'"prove that it is divisible by $\dots$"', r'divisibility, remainders', r'factor it, or take a modulus'],
       [r'"find all integers $x,y$"', r'a Diophantine equation', r'factor, then bound'],
       [r'"prove there are no solutions"', r'remainders', r'pick a modulus from the squares/cubes table'],
       [r'"prove the inequality"', r'AM–GM, squares', r'move everything left, find the equality point'],
       [r'"find the largest (smallest)"', r'a bound $+$ an example', r'prove the bound, then exhibit the example'],
       [r'"prove that there exists"', r'the pigeonhole principle', r'invent the "boxes"'],
       [r'"is it possible…" with moves', r'an invariant', r'look at parity, a remainder, a product of signs'],
       [r'a grid board with pieces', r'a colouring', r'colour in $2$, $3$ or $4$ colours'],
       [r'a cyclic quadrilateral, angles', r'circles', r'angle chasing, inscribed angles'],
       [r'ratios of segments in a triangle', r'areas, similarity', r'a common height or a common angle'],
      ]}},

    {'t': 'warn',
     'text': {
      'ru': r'Последние полчаса тура тратьте **не на новую задачу**, а на проверку и дописывание уже решённых. Типичная потеря — задача, решённая верно, но без разбора одного случая или без вывода. Такие баллы возвращаются за пять минут, а новая задача за полчаса, скорее всего, не решится.',
      'en': r'Spend the last half hour **not on a new problem** but on checking and finishing the ones already done. The typical loss is a problem solved correctly but with one case missing or no conclusion written. Those marks come back in five minutes, whereas a new problem probably will not fall in thirty.'}},
   ]},

  # ------------------------------------------------------------------ 3
  {'h': {'ru': 'Проверка решения', 'en': 'Checking a solution'},
   'blocks': [
    {'t': 'ul',
     'items': {
      'ru': [
       r'**Ответ на месте?** Последняя строка отвечает ровно на поставленный вопрос, а не на соседний.',
       r'**Все случаи разобраны?** Особенно $n=0$, $n=1$, равенство вместо неравенства, вырожденный треугольник, отрицательные делители.',
       r'**Использовано ли всё условие?** Если какое-то данное ни разу не понадобилось — почти наверняка где-то ошибка (или задача решена не та).',
       r'**Проверка на примере.** Подставьте маленькие числа в найденную формулу. Это не доказательство, но ошибку ловит мгновенно.',
       r'**Обратный ход.** Если решали уравнение с возведением в квадрат или умножением на выражение с переменной — проверьте корни подстановкой: могли появиться посторонние.',
       r'**Границы применимости.** Делили на выражение — убедились, что оно не ноль? Перемножали неравенства — все части положительны?',
      ],
      'en': [
       r'**Is the answer there?** The last line answers exactly the question asked, not a neighbouring one.',
       r'**Are all cases covered?** Especially $n=0$, $n=1$, equality rather than strict inequality, degenerate triangles, negative divisors.',
       r'**Was the whole hypothesis used?** If some datum was never needed, there is almost certainly a mistake (or the wrong problem was solved).',
       r'**Test on an example.** Put small numbers into the formula found. Not a proof, but it catches an error instantly.',
       r'**Work backwards.** If the equation was squared or multiplied by an expression in the variable, substitute the roots back: extraneous ones may have appeared.',
       r'**Check the licence.** Divided by an expression — is it non-zero? Multiplied inequalities — are all the parts positive?',
      ]}},

    {'t': 'idea',
     'name': {'ru': 'План подготовки на год', 'en': 'A year of preparation'},
     'text': {
      'ru': r'Что работает, если готовиться всерьёз:\n\n**1)** Проходить по одной теме в неделю-две, начиная с теории и разобранных примеров, и только потом браться за задачи.\n\n**2)** Решать задачи **письменно и до конца**. «Понял, как решать» и «решил» — разные вещи; на туре оценивают второе.\n\n**3)** Разбирать разбор. После неудачной попытки читайте решение не для того, чтобы «увидеть ответ», а чтобы найти **тот шаг, до которого не додумались**, и запомнить именно его.\n\n**4)** Вести список приёмов. Одна строка на приём: «сумма кубов при $a+b+c=0$», «раскраска в три цвета для фигурок $1\times3$». К концу года это ваш собственный учебник.\n\n**5)** Раз в месяц устраивать **полный тур** на время: четыре задачи, три часа, без подсказок. Только так тренируется распределение времени.',
      'en': r'What works if you prepare seriously:\n\n**1)** Take one topic a week or two, starting from the theory and the worked examples, and only then the problems.\n\n**2)** Solve problems **in writing and to the end**. "I see how to do it" and "I did it" are different things; the round marks the second.\n\n**3)** Study the solutions properly. After a failed attempt, read the solution not to "see the answer" but to find **the step you did not think of**, and remember that step.\n\n**4)** Keep a list of techniques. One line each: "sum of cubes when $a+b+c=0$", "three-colouring for $1\times3$ pieces". By the end of the year it is your own textbook.\n\n**5)** Once a month sit a **full timed round**: four problems, three hours, no hints. Nothing else trains the use of time.'}},

    {'t': 'p',
     'text': {
      'ru': r'Ниже — четыре пробных варианта по пять задач. Задачи перемешаны по темам, как на настоящем туре: по условию не сказано, какой раздел применять. Решайте вариант целиком за $2$–$2{,}5$ часа, не подглядывая в подсказки, и только потом сверяйтесь с разбором.',
      'en': r'Below are four mock papers of five problems each. The topics are shuffled, as in a real round: nothing in the statement says which section to use. Sit a paper whole in $2$–$2.5$ hours without looking at the hints, and only then compare with the solutions.'}},
   ]},
 ],

 # ==================================================================== problems
 'problems': [

  # ---------------- round 1 ----------------
  {'src': _src(1, 1), 'lvl': 1,
   'q': {'ru': r'Найдите наименьшее натуральное $n$, при котором $n!$ делится на $1000$.',
         'en': r'Find the smallest positive integer $n$ for which $n!$ is divisible by $1000$.'},
   'hint': {'ru': r'$1000=2^{3}\cdot5^{3}$; какой из множителей набирается медленнее?',
            'en': r'$1000=2^{3}\cdot5^{3}$; which factor accumulates more slowly?'},
   'sol': {'ru': r'Разложим $1000=2^{3}\cdot5^{3}$.\n\n**Пятёрки набираются медленнее.** Показатель пятёрки в $n!$ равен $$\left\lfloor\frac n5\right\rfloor+\left\lfloor\frac n{25}\right\rfloor+\dots$$ Нам нужно, чтобы он был не меньше $3$.\n\nПри $n=14$: $\left\lfloor\tfrac{14}{5}\right\rfloor=2$ — мало.\n\nПри $n=15$: $\left\lfloor\tfrac{15}{5}\right\rfloor=3$ ✓ (множители $5$, $10$, $15$).\n\n**Двойки.** В $15!$ показатель двойки равен $$7+3+1=11\ \ge\ 3 ,$$ так что с двойками проблем нет.\n\n**Ответ:** $n=15$. Проверка: $14!$ содержит лишь $5^{2}$ и потому не делится на $1000$.',
           'en': r'Factor $1000=2^{3}\cdot5^{3}$.\n\n**Fives come more slowly.** The exponent of five in $n!$ is $$\left\lfloor\frac n5\right\rfloor+\left\lfloor\frac n{25}\right\rfloor+\dots$$ and we need it to be at least $3$.\n\nAt $n=14$: $\left\lfloor\tfrac{14}{5}\right\rfloor=2$ — not enough.\n\nAt $n=15$: $\left\lfloor\tfrac{15}{5}\right\rfloor=3$ ✓ (the factors $5$, $10$, $15$).\n\n**Twos.** In $15!$ the exponent of two is $$7+3+1=11\ \ge\ 3 ,$$ so twos are no obstacle.\n\n**Answer:** $n=15$. Check: $14!$ carries only $5^{2}$ and so is not divisible by $1000$.'}},

  {'src': _src(1, 2), 'lvl': 1,
   'q': {'ru': r'Сколькими способами можно выбрать из восьми человек комиссию **нечётной** численности (комиссия не может быть пустой)?',
         'en': r'In how many ways can a committee of **odd** size be chosen from eight people (the committee may not be empty)?'},
   'hint': {'ru': r'Сравните число подмножеств чётного и нечётного размера.',
            'en': r'Compare the number of subsets of even and of odd size.'},
   'sol': {'ru': r'**Способ 1: знакопеременная сумма.** Известно, что $$\binom80-\binom81+\binom82-\dots+\binom88=0 ,$$ то есть сумма биномиальных коэффициентов чётного номера равна сумме коэффициентов нечётного номера. А вместе они дают $2^{8}=256$.\n\nЗначит каждая из сумм равна $128$. Все подмножества нечётного размера непусты автоматически, поэтому ответ $$128 .$$\n\n**Способ 2: соответствие.** Зафиксируем одного человека, скажем Азиза. Любому подмножеству сопоставим подмножество, в котором наличие Азиза изменено на противоположное (был — убрали, не было — добавили). Эта операция меняет чётность размера и обратима, значит подмножеств чётного и нечётного размера поровну: по $\tfrac{256}{2}=128$.\n\n**Ответ:** $128$ способов.',
           'en': r'**Way 1: the alternating sum.** We know that $$\binom80-\binom81+\binom82-\dots+\binom88=0 ,$$ so the even-index binomial coefficients sum to the same as the odd-index ones, while together they give $2^{8}=256$.\n\nEach sum is therefore $128$. Every odd-sized subset is automatically non-empty, so the answer is $$128 .$$\n\n**Way 2: a bijection.** Fix one person, say Aziz. To each subset associate the subset with Aziz’s membership flipped (in becomes out, out becomes in). This changes the parity of the size and is reversible, so even- and odd-sized subsets are equally many: $\tfrac{256}{2}=128$ each.\n\n**Answer:** $128$ ways.'}},

  {'src': _src(1, 3), 'lvl': 2,
   'q': {'ru': r'Гипотенуза прямоугольного треугольника равна $10$, а высота, проведённая к ней, равна $4$. Найдите катеты.',
         'en': r'A right triangle has hypotenuse $10$ and the altitude to it equal to $4$. Find the legs.'},
   'hint': {'ru': r'Площадь можно посчитать двумя способами; дальше — сумма и произведение.',
            'en': r'Compute the area two ways; then use the sum and the product.'},
   'sol': {'ru': r'Обозначим катеты через $a$ и $b$.\n\n**Два уравнения.** По теореме Пифагора $$a^{2}+b^{2}=100 .$$ Площадь считаем двумя способами: через катеты и через гипотенузу с высотой: $$\frac{ab}{2}=\frac{10\cdot4}{2}=20\quad\Longrightarrow\quad ab=40 .$$\n\n**Сумма и разность.** $$(a+b)^{2}=a^{2}+b^{2}+2ab=100+80=180\quad\Longrightarrow\quad a+b=6\sqrt5 ,$$ $$(a-b)^{2}=a^{2}+b^{2}-2ab=100-80=20\quad\Longrightarrow\quad |a-b|=2\sqrt5 .$$\n\n**Находим катеты.** $$a=\frac{6\sqrt5+2\sqrt5}{2}=4\sqrt5,\qquad b=\frac{6\sqrt5-2\sqrt5}{2}=2\sqrt5 .$$\n\n**Проверка.** $a^{2}+b^{2}=80+20=100$ ✓ и $ab=8\cdot5=40$ ✓\n\n**Ответ:** катеты равны $4\sqrt5\approx8{,}94$ и $2\sqrt5\approx4{,}47$.\n\n*Замечание.* Высота к гипотенузе не может превосходить её половины: $h\le\tfrac{c}{2}$. Здесь $4<5$, поэтому треугольник существует; при $h=5$ он был бы равнобедренным, а при $h>5$ задача не имела бы решений.',
           'en': r'Write $a$ and $b$ for the legs.\n\n**Two equations.** Pythagoras gives $$a^{2}+b^{2}=100 ,$$ and computing the area two ways — from the legs, and from the hypotenuse with its altitude — gives $$\frac{ab}{2}=\frac{10\cdot4}{2}=20\quad\Longrightarrow\quad ab=40 .$$\n\n**Sum and difference.** $$(a+b)^{2}=a^{2}+b^{2}+2ab=100+80=180\quad\Longrightarrow\quad a+b=6\sqrt5 ,$$ $$(a-b)^{2}=a^{2}+b^{2}-2ab=100-80=20\quad\Longrightarrow\quad |a-b|=2\sqrt5 .$$\n\n**The legs.** $$a=\frac{6\sqrt5+2\sqrt5}{2}=4\sqrt5,\qquad b=\frac{6\sqrt5-2\sqrt5}{2}=2\sqrt5 .$$\n\n**Check.** $a^{2}+b^{2}=80+20=100$ ✓ and $ab=8\cdot5=40$ ✓\n\n**Answer:** the legs are $4\sqrt5\approx8.94$ and $2\sqrt5\approx4.47$.\n\n*Remark.* The altitude to the hypotenuse never exceeds half of it: $h\le\tfrac{c}{2}$. Here $4<5$, so the triangle exists; at $h=5$ it would be isosceles, and for $h>5$ there would be no solution.'}},

  {'src': _src(1, 4), 'lvl': 2,
   'q': {'ru': r'Докажите, что для любых положительных $a$, $b$, $c$ $$\frac{a+b}{c}+\frac{b+c}{a}+\frac{c+a}{b}\ \ge\ 6 .$$',
         'en': r'Prove that for all positive $a$, $b$, $c$ $$\frac{a+b}{c}+\frac{b+c}{a}+\frac{c+a}{b}\ \ge\ 6 .$$'},
   'hint': {'ru': r'Разбейте каждую дробь надвое и сгруппируйте в пары.',
            'en': r'Split each fraction in two and group them into pairs.'},
   'sol': {'ru': r'**Раскроем и перегруппируем.** $$\frac{a+b}{c}+\frac{b+c}{a}+\frac{c+a}{b}=\left(\frac ac+\frac bc\right)+\left(\frac ba+\frac ca\right)+\left(\frac cb+\frac ab\right).$$ Соберём слагаемые в три пары взаимно обратных: $$=\left(\frac ab+\frac ba\right)+\left(\frac bc+\frac cb\right)+\left(\frac ca+\frac ac\right).$$\n\n**Оцениваем каждую пару.** Для положительных $x$ и $y$ $$\frac xy+\frac yx-2=\frac{x^{2}+y^{2}-2xy}{xy}=\frac{(x-y)^{2}}{xy}\ \ge\ 0 ,$$ то есть каждая пара не меньше $2$.\n\n**Складываем.** $$\left(\frac ab+\frac ba\right)+\left(\frac bc+\frac cb\right)+\left(\frac ca+\frac ac\right)\ \ge\ 2+2+2=6 . \qquad\blacksquare$$\n\n**Равенство** достигается, когда все три квадрата обращаются в ноль, то есть при $a=b=c$. Проверка: тогда каждая дробь равна $2$, и сумма равна $6$ ✓',
           'en': r'**Expand and regroup.** $$\frac{a+b}{c}+\frac{b+c}{a}+\frac{c+a}{b}=\left(\frac ac+\frac bc\right)+\left(\frac ba+\frac ca\right)+\left(\frac cb+\frac ab\right),$$ and collect the terms into three reciprocal pairs: $$=\left(\frac ab+\frac ba\right)+\left(\frac bc+\frac cb\right)+\left(\frac ca+\frac ac\right).$$\n\n**Bound each pair.** For positive $x$ and $y$, $$\frac xy+\frac yx-2=\frac{x^{2}+y^{2}-2xy}{xy}=\frac{(x-y)^{2}}{xy}\ \ge\ 0 ,$$ so each pair is at least $2$.\n\n**Add.** $$\left(\frac ab+\frac ba\right)+\left(\frac bc+\frac cb\right)+\left(\frac ca+\frac ac\right)\ \ge\ 2+2+2=6 . \qquad\blacksquare$$\n\n**Equality** holds when all three squares vanish, that is when $a=b=c$. Check: each fraction is then $2$ and the sum is $6$ ✓'}},

  {'src': _src(1, 5), 'lvl': 3,
   'q': {'ru': r'Числа $1,2,\dots,100$ расставлены по кругу в произвольном порядке. Докажите, что найдутся два стоящих рядом числа, сумма которых не меньше $101$.',
         'en': r'The numbers $1,2,\dots,100$ are placed around a circle in some order. Prove that two neighbouring numbers have a sum of at least $101$.'},
   'hint': {'ru': r'Сложите суммы всех соседних пар.',
            'en': r'Add up the sums of all neighbouring pairs.'},
   'sol': {'ru': r'**Считаем сумму по всем парам.** По кругу стоят $100$ чисел, значит соседних пар тоже ровно $100$ (каждое число соседствует с двумя, но каждая пара считается один раз).\n\nСложим суммы всех этих пар. Каждое число входит ровно в **две** пары — с левым и с правым соседом. Поэтому общая сумма равна $$2\left(1+2+\dots+100\right)=2\cdot\frac{100\cdot101}{2}=100\cdot101=10\,100 .$$\n\n**Рассуждение о среднем.** Мы получили сто чисел (суммы пар) с общей суммой $10\,100$. Их среднее равно $$\frac{10\,100}{100}=101 .$$\n\nПо принципу среднего хотя бы одно из этих ста чисел не меньше среднего, то есть найдётся пара соседей с суммой $\ge101$. $\blacksquare$\n\n*Точность оценки.* Число $101$ улучшить нельзя: существует расстановка, в которой **все** соседние суммы равны в точности $101$ или близки к нему — например, чередование $$1,\ 100,\ 2,\ 99,\ 3,\ 98,\ \dots$$ Здесь суммы соседних пар равны $101$, $102$, $101$, $102$, и так далее, так что минимум по всем парам равен ровно $101$.\n\n*Замечание.* Обратите внимание на приём: мы ничего не знаем о расстановке, но, сложив **все** пары сразу, получили информацию о наибольшей из них. Это стандартный ход в задачах вида «докажите, что найдётся».',
           'en': r'**Sum over all pairs.** A circle of $100$ numbers has exactly $100$ neighbouring pairs (each number has two neighbours, but each pair is counted once).\n\nAdd the sums of all these pairs. Each number belongs to exactly **two** pairs — with its left and its right neighbour. So the grand total is $$2\left(1+2+\dots+100\right)=2\cdot\frac{100\cdot101}{2}=100\cdot101=10\,100 .$$\n\n**Averaging.** We have a hundred numbers (the pair sums) adding to $10\,100$, so their average is $$\frac{10\,100}{100}=101 .$$\n\nBy the averaging principle at least one of them is at least the average, that is some neighbouring pair sums to $\ge101$. $\blacksquare$\n\n*Sharpness.* The bound $101$ cannot be improved: in the alternating arrangement $$1,\ 100,\ 2,\ 99,\ 3,\ 98,\ \dots$$ the neighbouring sums are $101$, $102$, $101$, $102$, and so on, so the smallest of them is exactly $101$.\n\n*Remark.* Note the technique: we know nothing about the arrangement, yet summing over **all** pairs at once told us about the largest of them. This is the standard move in "prove that there exists" problems.'}},

  # ---------------- round 2 ----------------
  {'src': _src(2, 1), 'lvl': 1,
   'q': {'ru': r'Упростите выражение $\sqrt{7+4\sqrt3}$.',
         'en': r'Simplify $\sqrt{7+4\sqrt3}$.'},
   'hint': {'ru': r'Попробуйте увидеть под корнем полный квадрат вида $\left(p+q\sqrt3\right)^{2}$.',
            'en': r'Try to see a perfect square $\left(p+q\sqrt3\right)^{2}$ under the root.'},
   'sol': {'ru': r'Поищем представление $$7+4\sqrt3=\left(p+q\sqrt3\right)^{2}=p^{2}+3q^{2}+2pq\sqrt3 .$$\n\nСравнивая рациональные и иррациональные части, получаем систему $$p^{2}+3q^{2}=7,\qquad 2pq=4 .$$ Из второго $pq=2$; пробуем $p=2$, $q=1$: тогда $p^{2}+3q^{2}=4+3=7$ ✓\n\nЗначит $$7+4\sqrt3=\left(2+\sqrt3\right)^{2},$$ и, поскольку $2+\sqrt3>0$, $$\sqrt{7+4\sqrt3}=2+\sqrt3 .$$\n\n**Ответ:** $2+\sqrt3\approx3{,}73$.\n\n*Проверка численно:* $4\sqrt3\approx6{,}93$, значит под корнем примерно $13{,}93$, и $\sqrt{13{,}93}\approx3{,}73$ ✓\n\n*Замечание о знаке.* Важно, что мы выбрали именно $2+\sqrt3$, а не $-2-\sqrt3$: арифметический квадратный корень неотрицателен.',
           'en': r'Look for a representation $$7+4\sqrt3=\left(p+q\sqrt3\right)^{2}=p^{2}+3q^{2}+2pq\sqrt3 .$$\n\nComparing rational and irrational parts gives $$p^{2}+3q^{2}=7,\qquad 2pq=4 .$$ The second gives $pq=2$; try $p=2$, $q=1$: then $p^{2}+3q^{2}=4+3=7$ ✓\n\nSo $$7+4\sqrt3=\left(2+\sqrt3\right)^{2},$$ and since $2+\sqrt3>0$, $$\sqrt{7+4\sqrt3}=2+\sqrt3 .$$\n\n**Answer:** $2+\sqrt3\approx3.73$.\n\n*Numerical check:* $4\sqrt3\approx6.93$, so the radicand is about $13.93$ and $\sqrt{13.93}\approx3.73$ ✓\n\n*A note on the sign.* It matters that we chose $2+\sqrt3$ and not $-2-\sqrt3$: the arithmetic square root is non-negative.'}},

  {'src': _src(2, 2), 'lvl': 1,
   'q': {'ru': r'Периметр прямоугольного треугольника равен $30$, а гипотенуза равна $13$. Найдите катеты.',
         'en': r'A right triangle has perimeter $30$ and hypotenuse $13$. Find the legs.'},
   'hint': {'ru': r'Найдите сумму катетов, затем их произведение.',
            'en': r'Find the sum of the legs, then their product.'},
   'sol': {'ru': r'Обозначим катеты через $a$ и $b$.\n\n**Сумма.** Из периметра: $$a+b=30-13=17 .$$\n\n**Произведение.** Возведём сумму в квадрат и воспользуемся теоремой Пифагора: $$(a+b)^{2}=a^{2}+b^{2}+2ab=169+2ab=289 ,$$ откуда $2ab=120$ и $ab=60$.\n\n**Находим катеты.** Числа $a$ и $b$ — корни уравнения $$t^{2}-17t+60=0 .$$ Дискриминант $289-240=49$, корни $$t=\frac{17\pm7}{2}=12\ \text{и}\ 5 .$$\n\n**Проверка:** $5+12+13=30$ ✓ и $25+144=169$ ✓\n\n**Ответ:** катеты равны $5$ и $12$ (знакомая пифагорова тройка).',
           'en': r'Write $a$ and $b$ for the legs.\n\n**Their sum.** From the perimeter, $$a+b=30-13=17 .$$\n\n**Their product.** Square the sum and use Pythagoras: $$(a+b)^{2}=a^{2}+b^{2}+2ab=169+2ab=289 ,$$ so $2ab=120$ and $ab=60$.\n\n**The legs.** So $a$ and $b$ are the roots of $$t^{2}-17t+60=0 ,$$ whose discriminant is $289-240=49$ and whose roots are $$t=\frac{17\pm7}{2}=12\ \text{and}\ 5 .$$\n\n**Check:** $5+12+13=30$ ✓ and $25+144=169$ ✓\n\n**Answer:** the legs are $5$ and $12$ — the familiar Pythagorean triple.'}},

  {'src': _src(2, 3), 'lvl': 2,
   'q': {'ru': r'Найдите последнюю цифру числа $2^{2024}+3^{2024}$.',
         'en': r'Find the last digit of $2^{2024}+3^{2024}$.'},
   'hint': {'ru': r'Циклы последних цифр степеней двойки и тройки имеют длину $4$.',
            'en': r'The cycles of last digits of powers of two and of three both have length $4$.'},
   'sol': {'ru': r'**Степени двойки.** Последние цифры идут циклом $$2,\ 4,\ 8,\ 6,\ 2,\ 4,\dots$$ длины $4$. Так как $2024=4\cdot506$, показатель кратен четырём, и берётся **последний** элемент цикла: $2^{2024}$ оканчивается на $6$.\n\n**Степени тройки.** Цикл $$3,\ 9,\ 7,\ 1,\ 3,\dots$$ тоже длины $4$, и по той же причине $3^{2024}$ оканчивается на $1$.\n\n**Складываем.** Последняя цифра суммы: $$6+1=7 .$$\n\n**Ответ:** $7$.\n\n*Проверка на маленьком показателе с тем же остатком.* Возьмём показатель $4$: $2^{4}+3^{4}=16+81=97$ — оканчивается на $7$ ✓ И показатель $8$: $256+6561=6817$ — снова $7$ ✓',
           'en': r'**Powers of two.** Their last digits cycle as $$2,\ 4,\ 8,\ 6,\ 2,\ 4,\dots$$ with period $4$. Since $2024=4\cdot506$ the exponent is a multiple of four, so we take the **last** entry of the cycle: $2^{2024}$ ends in $6$.\n\n**Powers of three.** The cycle $$3,\ 9,\ 7,\ 1,\ 3,\dots$$ also has period $4$, so for the same reason $3^{2024}$ ends in $1$.\n\n**Add.** The last digit of the sum is $$6+1=7 .$$\n\n**Answer:** $7$.\n\n*Check on a small exponent of the same residue.* Take exponent $4$: $2^{4}+3^{4}=16+81=97$, ending in $7$ ✓ And exponent $8$: $256+6561=6817$ — again $7$ ✓'}},

  {'src': _src(2, 4), 'lvl': 2,
   'q': {'ru': r'Сколькими способами можно поставить на шахматную доску $8\times8$ две ладьи так, чтобы они **не били** друг друга? Ладьи считаются одинаковыми.',
         'en': r'In how many ways can two rooks be placed on an $8\times8$ chessboard so that they do **not** attack each other? The rooks are identical.'},
   'hint': {'ru': r'Посчитайте все расстановки и вычтите «плохие».',
            'en': r'Count all placements and subtract the bad ones.'},
   'sol': {'ru': r'**Всего расстановок.** Две неразличимые ладьи на $64$ клетках: $$\binom{64}{2}=\frac{64\cdot63}{2}=2016 .$$\n\n**Плохие расстановки — ладьи бьют друг друга.** Ладьи бьют друг друга ровно тогда, когда стоят в одной строке или в одном столбце.\n\n*В одной строке:* выбираем строку ($8$ способов) и две клетки в ней ($\binom82=28$): $8\cdot28=224$.\n\n*В одном столбце:* столько же — $224$.\n\nЭти случаи не пересекаются: две различные клетки не могут одновременно лежать и в одной строке, и в одном столбце.\n\nИтого плохих расстановок $224+224=448$.\n\n**Ответ.** $$2016-448=1568 .$$\n\n*Проверка другим способом.* Поставим первую ладью — $64$ способа. Она бьёт $7$ клеток своей строки и $7$ своего столбца, поэтому для второй ладьи остаётся $64-1-14=49$ клеток. Получаем $64\cdot49=3136$ **упорядоченных** пар; ладьи одинаковы, поэтому делим на $2$: $$\frac{3136}{2}=1568\ \checkmark$$',
           'en': r'**All placements.** Two identical rooks on $64$ squares: $$\binom{64}{2}=\frac{64\cdot63}{2}=2016 .$$\n\n**Bad placements — the rooks attack.** They attack exactly when they share a row or a column.\n\n*Same row:* choose the row ($8$ ways) and two squares in it ($\binom82=28$): $8\cdot28=224$.\n\n*Same column:* the same again — $224$.\n\nThe two cases are disjoint: two distinct squares cannot share both a row and a column.\n\nSo there are $224+224=448$ bad placements.\n\n**Answer.** $$2016-448=1568 .$$\n\n*Check another way.* Place the first rook — $64$ ways. It attacks $7$ squares in its row and $7$ in its column, so the second rook has $64-1-14=49$ squares available. That gives $64\cdot49=3136$ **ordered** pairs; the rooks are identical, so divide by $2$: $$\frac{3136}{2}=1568\ \checkmark$$'}},

  {'src': _src(2, 5), 'lvl': 3,
   'q': {'ru': r'В треугольнике $ABC$ известно, что $AB=6$, $AC=8$, а медиана $AM$, проведённая к стороне $BC$, равна $5$. Найдите $BC$ и величину угла $A$.',
         'en': r'In a triangle $ABC$ we have $AB=6$, $AC=8$, and the median $AM$ to the side $BC$ equals $5$. Find $BC$ and the angle $A$.'},
   'hint': {'ru': r'Формула длины медианы — или удвоение медианы.',
            'en': r'The median length formula — or double the median.'},
   'sol': {'ru': r'**Способ 1: формула медианы.** $$m_a^{2}=\frac{2b^{2}+2c^{2}-a^{2}}{4},$$ где $a=BC$, $b=AC=8$, $c=AB=6$. Подставляем $m_a=5$: $$25=\frac{2\cdot64+2\cdot36-a^{2}}{4}=\frac{128+72-a^{2}}{4}=\frac{200-a^{2}}{4}.$$ Отсюда $200-a^{2}=100$ и $a^{2}=100$, то есть $$BC=10 .$$\n\n**Угол $A$.** Проверим теорему Пифагора: $$AB^{2}+AC^{2}=36+64=100=BC^{2}.$$ Значит треугольник прямоугольный, и угол $A$ равен $90^\circ$.\n\n**Способ 2: удвоение медианы.** Продлим $AM$ за точку $M$ до точки $D$ так, что $MD=AM=5$; тогда $AD=10$. Четырёхугольник $ABDC$ — параллелограмм (диагонали делятся точкой пересечения пополам), поэтому $CD=AB=6$.\n\nВ треугольнике $ACD$ стороны равны $AC=8$, $CD=6$, $AD=10$, и $$8^{2}+6^{2}=100=10^{2},$$ значит угол при вершине $C$ прямой. В параллелограмме соседние углы дают $180^\circ$, поэтому угол при вершине $A$ тоже прямой — то есть $\angle BAC=90^\circ$. Тогда по теореме Пифагора $BC=\sqrt{36+64}=10$ ✓\n\n**Ответ:** $BC=10$ и $\angle A=90^\circ$.\n\n*Замечание.* Совпадение не случайно: в прямоугольном треугольнике медиана к гипотенузе равна её половине, и здесь $5=\tfrac{10}{2}$. Задачу можно было решить и «в обратную сторону»: заметить это равенство и сразу заключить, что угол $A$ прямой.',
           'en': r'**Way 1: the median formula.** $$m_a^{2}=\frac{2b^{2}+2c^{2}-a^{2}}{4},$$ with $a=BC$, $b=AC=8$, $c=AB=6$. Putting $m_a=5$: $$25=\frac{2\cdot64+2\cdot36-a^{2}}{4}=\frac{128+72-a^{2}}{4}=\frac{200-a^{2}}{4},$$ so $200-a^{2}=100$ and $a^{2}=100$, that is $$BC=10 .$$\n\n**The angle $A$.** Check Pythagoras: $$AB^{2}+AC^{2}=36+64=100=BC^{2},$$ so the triangle is right-angled and $\angle A=90^\circ$.\n\n**Way 2: doubling the median.** Extend $AM$ beyond $M$ to $D$ with $MD=AM=5$, so $AD=10$. The quadrilateral $ABDC$ is a parallelogram (its diagonals bisect each other), hence $CD=AB=6$.\n\nIn the triangle $ACD$ the sides are $AC=8$, $CD=6$, $AD=10$, and $$8^{2}+6^{2}=100=10^{2},$$ so the angle at $C$ is right. In a parallelogram adjacent angles add to $180^\circ$, so the angle at $A$ is right too — that is $\angle BAC=90^\circ$. Pythagoras then gives $BC=\sqrt{36+64}=10$ ✓\n\n**Answer:** $BC=10$ and $\angle A=90^\circ$.\n\n*Remark.* The coincidence is no accident: in a right triangle the median to the hypotenuse is half of it, and here $5=\tfrac{10}{2}$. One could have run the problem backwards — spot that equality and conclude at once that $A$ is right.'}},

  # ---------------- round 3 ----------------
  {'src': _src(3, 1), 'lvl': 1,
   'q': {'ru': r'Сколько существует четырёхзначных чисел, которые читаются одинаково слева направо и справа налево?',
         'en': r'How many four-digit numbers read the same forwards and backwards?'},
   'hint': {'ru': r'Такое число имеет вид $\overline{abba}$.',
            'en': r'Such a number has the form $\overline{abba}$.'},
   'sol': {'ru': r'Четырёхзначный палиндром имеет вид $$\overline{abba}=1000a+100b+10b+a ,$$ то есть полностью определяется двумя цифрами $a$ и $b$.\n\n**Первая цифра.** $a$ — старшая цифра, поэтому $a\ne0$: девять вариантов ($1$–$9$).\n\n**Вторая цифра.** $b$ — любая: десять вариантов ($0$–$9$).\n\nПо правилу произведения $$9\cdot10=90 .$$\n\n**Ответ:** $90$ чисел.\n\n*Проверка на меньшем случае.* Трёхзначных палиндромов $\overline{aba}$ тоже $9\cdot10=90$; двузначных ($\overline{aa}$) — девять: $11,22,\dots,99$.',
           'en': r'A four-digit palindrome has the form $$\overline{abba}=1000a+100b+10b+a ,$$ so it is determined completely by the two digits $a$ and $b$.\n\n**The first digit.** $a$ is the leading digit, so $a\ne0$: nine options ($1$–$9$).\n\n**The second digit.** $b$ is unrestricted: ten options ($0$–$9$).\n\nBy the product rule $$9\cdot10=90 .$$\n\n**Answer:** $90$ numbers.\n\n*Check on a smaller case.* Three-digit palindromes $\overline{aba}$ also number $9\cdot10=90$; two-digit ones ($\overline{aa}$) number nine: $11,22,\dots,99$.'}},

  {'src': _src(3, 2), 'lvl': 2,
   'q': {'ru': r'Известно, что $x+\dfrac1x=3$. Найдите $x^{2}+\dfrac1{x^{2}}$ и $x^{3}+\dfrac1{x^{3}}$.',
         'en': r'Given $x+\dfrac1x=3$, find $x^{2}+\dfrac1{x^{2}}$ and $x^{3}+\dfrac1{x^{3}}$.'},
   'hint': {'ru': r'Возведите условие в квадрат и в куб.',
            'en': r'Square and cube the hypothesis.'},
   'sol': {'ru': r'**Квадрат.** $$\left(x+\frac1x\right)^{2}=x^{2}+2\cdot x\cdot\frac1x+\frac1{x^{2}}=x^{2}+\frac1{x^{2}}+2 .$$ Значит $$x^{2}+\frac1{x^{2}}=3^{2}-2=7 .$$\n\n**Куб.** $$\left(x+\frac1x\right)^{3}=x^{3}+3x^{2}\cdot\frac1x+3x\cdot\frac1{x^{2}}+\frac1{x^{3}}=x^{3}+\frac1{x^{3}}+3\left(x+\frac1x\right).$$ Значит $$x^{3}+\frac1{x^{3}}=3^{3}-3\cdot3=27-9=18 .$$\n\n**Ответ:** $7$ и $18$.\n\n*Замечание.* Само $x$ находить не нужно — и это типично для таких задач. (Если всё же интересно: $x$ — корень уравнения $x^{2}-3x+1=0$, то есть $x=\tfrac{3\pm\sqrt5}{2}$; оба корня дают тот же ответ.)\n\n*Полезная формула.* Обозначив $s=x+\tfrac1x$, получаем $$x^{2}+\frac1{x^{2}}=s^{2}-2,\qquad x^{3}+\frac1{x^{3}}=s^{3}-3s .$$ Это те же выражения через сумму и произведение, что и в теме о тождествах: здесь произведение равно $x\cdot\tfrac1x=1$.',
           'en': r'**Square it.** $$\left(x+\frac1x\right)^{2}=x^{2}+2\cdot x\cdot\frac1x+\frac1{x^{2}}=x^{2}+\frac1{x^{2}}+2 ,$$ so $$x^{2}+\frac1{x^{2}}=3^{2}-2=7 .$$\n\n**Cube it.** $$\left(x+\frac1x\right)^{3}=x^{3}+3x^{2}\cdot\frac1x+3x\cdot\frac1{x^{2}}+\frac1{x^{3}}=x^{3}+\frac1{x^{3}}+3\left(x+\frac1x\right),$$ so $$x^{3}+\frac1{x^{3}}=3^{3}-3\cdot3=27-9=18 .$$\n\n**Answer:** $7$ and $18$.\n\n*Remark.* There was no need to find $x$ itself — typical of such problems. (For the curious: $x$ solves $x^{2}-3x+1=0$, that is $x=\tfrac{3\pm\sqrt5}{2}$; both roots give the same answers.)\n\n*A useful formula.* Writing $s=x+\tfrac1x$, $$x^{2}+\frac1{x^{2}}=s^{2}-2,\qquad x^{3}+\frac1{x^{3}}=s^{3}-3s .$$ These are the same sum-and-product expressions as in the identities topic; here the product is $x\cdot\tfrac1x=1$.'}},

  {'src': _src(3, 3), 'lvl': 2,
   'q': {'ru': r'Докажите, что $n^{3}+2n$ делится на $3$ при любом целом $n$.',
         'en': r'Prove that $n^{3}+2n$ is divisible by $3$ for every integer $n$.'},
   'hint': {'ru': r'Перепишите как $n^{3}-n+3n$.',
            'en': r'Rewrite it as $n^{3}-n+3n$.'},
   'sol': {'ru': r'**Способ 1: разложение.** Запишем $$n^{3}+2n=\left(n^{3}-n\right)+3n .$$ Второе слагаемое очевидно делится на $3$. Первое разложим: $$n^{3}-n=n\left(n^{2}-1\right)=(n-1)\,n\,(n+1)$$ — произведение трёх подряд идущих целых чисел, среди которых обязательно есть кратное трём.\n\nЗначит оба слагаемых делятся на $3$, и сумма тоже. $\blacksquare$\n\n**Способ 2: остатки.** Разберём три случая по остатку $n$ при делении на $3$.\n\n$n\equiv0$: тогда $n^{3}+2n\equiv0+0=0$;\n\n$n\equiv1$: тогда $n^{3}+2n\equiv1+2=3\equiv0$;\n\n$n\equiv2$: тогда $n^{3}\equiv8\equiv2$ и $2n\equiv4\equiv1$, значит сумма $\equiv2+1=3\equiv0$.\n\nВо всех случаях остаток нулевой. $\blacksquare$\n\n*Замечание.* Оба способа стоит уметь. Первый короче, зато второй работает всегда — даже когда разложения не видно.',
           'en': r'**Way 1: factoring.** Write $$n^{3}+2n=\left(n^{3}-n\right)+3n .$$ The second term is plainly divisible by $3$. The first factors as $$n^{3}-n=n\left(n^{2}-1\right)=(n-1)\,n\,(n+1),$$ a product of three consecutive integers, one of which is a multiple of three.\n\nSo both terms are divisible by $3$, and so is the sum. $\blacksquare$\n\n**Way 2: remainders.** Split into three cases by $n$ modulo $3$.\n\n$n\equiv0$: then $n^{3}+2n\equiv0+0=0$;\n\n$n\equiv1$: then $n^{3}+2n\equiv1+2=3\equiv0$;\n\n$n\equiv2$: then $n^{3}\equiv8\equiv2$ and $2n\equiv4\equiv1$, so the sum is $\equiv2+1=3\equiv0$.\n\nIn every case the remainder is zero. $\blacksquare$\n\n*Remark.* Both methods are worth having. The first is shorter, but the second always works — even when no factorisation is in sight.'}},

  {'src': _src(3, 4), 'lvl': 2,
   'q': {'ru': r'Из точки $P$ вне окружности проведены касательная длины $8$ и секущая. Ближняя точка пересечения секущей с окружностью удалена от $P$ на $4$. Найдите длину всей секущей от $P$ до дальней точки пересечения.',
         'en': r'From a point $P$ outside a circle a tangent of length $8$ and a secant are drawn. The nearer intersection point of the secant with the circle is at distance $4$ from $P$. Find the distance from $P$ to the farther intersection point.'},
   'hint': {'ru': r'$PT^{2}=PA\cdot PB$.', 'en': r'$PT^{2}=PA\cdot PB$.'},
   'sol': {'ru': r'Обозначим точку касания через $T$, а точки пересечения секущей с окружностью — через $A$ (ближняя) и $B$ (дальняя).\n\nПо теореме о секущей и касательной $$PT^{2}=PA\cdot PB .$$\n\nПодставляем известные величины: $$8^{2}=4\cdot PB\quad\Longrightarrow\quad 64=4\,PB\quad\Longrightarrow\quad PB=16 .$$\n\n**Ответ:** $PB=16$ (а хорда $AB$ равна $16-4=12$).\n\n*Проверка через степень точки.* Степень точки $P$ равна $PT^{2}=64$. Она же равна $PA\cdot PB=4\cdot16=64$ ✓\n\n*Дополнительно.* Зная хорду $AB=12$ и расстояния, можно найти и радиус: пусть $O$ — центр, тогда $OP^{2}-R^{2}=64$. Расстояние от центра до секущей равно $d=\sqrt{R^{2}-36}$, а проекция $P$ на секущую отстоит от середины $AB$ на $4+6=10$. Значит $OP^{2}=d^{2}+100=R^{2}-36+100=R^{2}+64$ — совпадает с первым равенством при любом $R$, то есть радиус этими данными не определяется однозначно.',
           'en': r'Write $T$ for the point of contact and $A$ (nearer), $B$ (farther) for the intersections of the secant with the circle.\n\nThe secant–tangent theorem gives $$PT^{2}=PA\cdot PB .$$\n\nSubstituting, $$8^{2}=4\cdot PB\quad\Longrightarrow\quad 64=4\,PB\quad\Longrightarrow\quad PB=16 .$$\n\n**Answer:** $PB=16$ (and the chord $AB$ is $16-4=12$).\n\n*Check via the power of a point.* The power of $P$ is $PT^{2}=64$, and also $PA\cdot PB=4\cdot16=64$ ✓\n\n*Extra.* With the chord $AB=12$ one might hope to find the radius; but writing $O$ for the centre, $OP^{2}=R^{2}+64$ comes out for every $R$, so the data do not determine the radius.'}},

  {'src': _src(3, 5), 'lvl': 3,
   'q': {'ru': r'Даны пять произвольных целых чисел. Докажите, что из них можно выбрать три, сумма которых делится на $3$.',
         'en': r'Five arbitrary integers are given. Prove that three of them have a sum divisible by $3$.'},
   'hint': {'ru': r'Разбейте числа по остаткам при делении на $3$ и разберите два случая.',
            'en': r'Sort the numbers by remainder modulo $3$ and split into two cases.'},
   'sol': {'ru': r'Разложим пять чисел по трём «ящикам» — остаткам $0$, $1$, $2$ при делении на $3$. Обозначим количества чисел в ящиках через $k_0$, $k_1$, $k_2$, так что $$k_0+k_1+k_2=5 .$$\n\n**Случай 1: все три остатка встречаются**, то есть $k_0\ge1$, $k_1\ge1$, $k_2\ge1$.\n\nВозьмём по одному числу из каждого ящика. Сумма их остатков равна $$0+1+2=3\equiv0\pmod3 ,$$ значит и сумма самих чисел делится на $3$. Готово.\n\n**Случай 2: какой-то остаток не встречается**, то есть числа распределены не более чем по **двум** ящикам.\n\nТогда пять чисел лежат в двух ящиках, и по обобщённому принципу Дирихле в одном из них не менее $$\left\lceil\frac52\right\rceil=3$$ чисел.\n\nВозьмём три числа из этого ящика: у них одинаковый остаток $r$, поэтому сумма даёт остаток $$3r\equiv0\pmod3 .$$ Снова готово.\n\nДругих случаев нет. $\blacksquare$\n\n*Точность оценки.* Для четырёх чисел утверждение неверно: возьмём $1,1,2,2$. Суммы троек равны $1+1+2=4$ и $1+2+2=5$ — ни одна не делится на $3$.\n\n*Обобщение.* Это частный случай теоремы Эрдёша–Гинзбурга–Зива: из любых $2n-1$ целых чисел можно выбрать $n$ с суммой, кратной $n$. При $n=3$ получается ровно наша задача с пятью числами.',
           'en': r'Sort the five numbers into three "boxes" — the remainders $0$, $1$, $2$ modulo $3$ — with $k_0$, $k_1$, $k_2$ numbers in them, so $$k_0+k_1+k_2=5 .$$\n\n**Case 1: all three remainders occur**, that is $k_0\ge1$, $k_1\ge1$, $k_2\ge1$.\n\nTake one number from each box. Their remainders add to $$0+1+2=3\equiv0\pmod3 ,$$ so the numbers themselves have a sum divisible by $3$. Done.\n\n**Case 2: some remainder is missing**, so the numbers occupy at most **two** boxes.\n\nThen five numbers sit in two boxes and by the generalised pigeonhole principle one box holds at least $$\left\lceil\frac52\right\rceil=3$$ of them.\n\nTake three numbers from that box: they share a remainder $r$, so their sum leaves $$3r\equiv0\pmod3 .$$ Done again.\n\nThere are no other cases. $\blacksquare$\n\n*Sharpness.* For four numbers it fails: take $1,1,2,2$. The triple sums are $1+1+2=4$ and $1+2+2=5$, neither divisible by $3$.\n\n*Generalisation.* This is a special case of the Erdős–Ginzburg–Ziv theorem: among any $2n-1$ integers there are $n$ whose sum is divisible by $n$. At $n=3$ it is exactly our problem with five numbers.'}},

  # ---------------- round 4 ----------------
  {'src': _src(4, 1), 'lvl': 1,
   'q': {'ru': r'Сколькими нулями оканчивается число $100!$?',
         'en': r'In how many zeros does $100!$ end?'},
   'hint': {'ru': r'Каждый ноль — это множитель $10=2\cdot5$; чего меньше?',
            'en': r'Each zero is a factor $10=2\cdot5$; which of the two is scarcer?'},
   'sol': {'ru': r'Число нулей в конце равно показателю десятки в разложении $100!$, а $10=2\cdot5$. Двоек в факториале заведомо больше, чем пятёрок, поэтому ответ равен **показателю пятёрки**.\n\n**Считаем пятёрки.** Среди чисел от $1$ до $100$:\n\n$\bullet$ кратных $5$ — ровно $\left\lfloor\tfrac{100}{5}\right\rfloor=20$; каждое даёт хотя бы одну пятёрку;\n\n$\bullet$ кратных $25$ — ровно $\left\lfloor\tfrac{100}{25}\right\rfloor=4$; каждое даёт **вторую** пятёрку;\n\n$\bullet$ кратных $125$ — ни одного.\n\nИтого показатель пятёрки равен $$20+4=24 .$$\n\n**Ответ:** $24$ нуля.\n\n*Почему складываем, а не умножаем.* Число $25=5^{2}$ уже посчитано один раз среди кратных пяти; второе слагаемое добавляет ему недостающую вторую пятёрку. Общая формула: $$v_5(n!)=\left\lfloor\frac n5\right\rfloor+\left\lfloor\frac n{25}\right\rfloor+\left\lfloor\frac n{125}\right\rfloor+\dots$$',
           'en': r'The number of trailing zeros is the exponent of ten in $100!$, and $10=2\cdot5$. Twos are certainly more plentiful than fives, so the answer is the **exponent of five**.\n\n**Count the fives.** Among $1,\dots,100$:\n\n$\bullet$ multiples of $5$: exactly $\left\lfloor\tfrac{100}{5}\right\rfloor=20$, each contributing at least one five;\n\n$\bullet$ multiples of $25$: exactly $\left\lfloor\tfrac{100}{25}\right\rfloor=4$, each contributing a **second** five;\n\n$\bullet$ multiples of $125$: none.\n\nSo the exponent of five is $$20+4=24 .$$\n\n**Answer:** $24$ zeros.\n\n*Why we add rather than multiply.* A number like $25=5^{2}$ is already counted once among the multiples of five; the second term supplies its missing second five. The general formula is $$v_5(n!)=\left\lfloor\frac n5\right\rfloor+\left\lfloor\frac n{25}\right\rfloor+\left\lfloor\frac n{125}\right\rfloor+\dots$$'}},

  {'src': _src(4, 2), 'lvl': 2,
   'q': {'ru': r'Решите уравнение $\sqrt{x+3}-\sqrt{x-2}=1$.',
         'en': r'Solve the equation $\sqrt{x+3}-\sqrt{x-2}=1$.'},
   'hint': {'ru': r'Перенесите один корень вправо и возведите в квадрат; не забудьте проверить корни.',
            'en': r'Move one root to the right and square; do not forget to check the roots.'},
   'sol': {'ru': r'**Область определения.** Нужны $x+3\ge0$ и $x-2\ge0$, то есть $x\ge2$.\n\n**Решаем.** Перенесём: $$\sqrt{x+3}=1+\sqrt{x-2}.$$ Обе части неотрицательны, поэтому возведение в квадрат равносильно: $$x+3=1+2\sqrt{x-2}+(x-2)=x-1+2\sqrt{x-2}.$$ Сокращаем $x$: $$3=-1+2\sqrt{x-2}\quad\Longrightarrow\quad 2\sqrt{x-2}=4\quad\Longrightarrow\quad \sqrt{x-2}=2 .$$ Возводим ещё раз: $x-2=4$, то есть $$x=6 .$$\n\n**Проверка.** $$\sqrt{6+3}-\sqrt{6-2}=\sqrt9-\sqrt4=3-2=1\ \checkmark$$ И $x=6\ge2$ — область определения соблюдена.\n\n**Ответ:** $x=6$.\n\n*Замечание о посторонних корнях.* Здесь их не возникло, потому что перед первым возведением в квадрат обе части были неотрицательны. Если бы мы возводили в квадрат исходное уравнение как есть, разность слева могла бы оказаться отрицательной, и проверка стала бы обязательной. Проверять всё равно стоит всегда.',
           'en': r'**The domain.** We need $x+3\ge0$ and $x-2\ge0$, that is $x\ge2$.\n\n**Solve.** Rearrange: $$\sqrt{x+3}=1+\sqrt{x-2}.$$ Both sides are non-negative, so squaring is an equivalence: $$x+3=1+2\sqrt{x-2}+(x-2)=x-1+2\sqrt{x-2}.$$ Cancel $x$: $$3=-1+2\sqrt{x-2}\quad\Longrightarrow\quad 2\sqrt{x-2}=4\quad\Longrightarrow\quad \sqrt{x-2}=2 ,$$ and squaring again, $x-2=4$, that is $$x=6 .$$\n\n**Check.** $$\sqrt{6+3}-\sqrt{6-2}=\sqrt9-\sqrt4=3-2=1\ \checkmark$$ And $x=6\ge2$, so the domain is respected.\n\n**Answer:** $x=6$.\n\n*A note on extraneous roots.* None appeared here, because both sides were non-negative before the first squaring. Squaring the original equation as it stood could have introduced one, since the left difference might be negative. Checking is worth doing regardless.'}},

  {'src': _src(4, 3), 'lvl': 2,
   'q': {'ru': r'Найдите $\gcd\left(2^{30}-1,\ 2^{24}-1\right)$.',
         'en': r'Find $\gcd\left(2^{30}-1,\ 2^{24}-1\right)$.'},
   'hint': {'ru': r'Проведите один шаг алгоритма Евклида: чему равен остаток от деления $2^{30}-1$ на $2^{24}-1$?',
            'en': r'Run one step of the Euclidean algorithm: what is the remainder of $2^{30}-1$ on division by $2^{24}-1$?'},
   'sol': {'ru': r'**Ключевое тождество.** Пусть $m>n$. Тогда $$2^{m}-1=2^{\,m-n}\left(2^{n}-1\right)+\left(2^{\,m-n}-1\right).$$ (Проверьте раскрытием: $2^{\,m-n}\cdot2^{n}-2^{\,m-n}+2^{\,m-n}-1=2^{m}-1$.)\n\nЗначит остаток от деления $2^{m}-1$ на $2^{n}-1$ — это $2^{\,m-n}-1$, и по алгоритму Евклида $$\gcd\left(2^{m}-1,\ 2^{n}-1\right)=\gcd\left(2^{\,m-n}-1,\ 2^{n}-1\right).$$\n\n**Показатели ведут себя как в алгоритме Евклида.** Повторяя шаг, видим, что показатели преобразуются в точности так же, как числа в алгоритме Евклида для $m$ и $n$. Поэтому $$\gcd\left(2^{m}-1,\ 2^{n}-1\right)=2^{\gcd(m,n)}-1 .$$\n\n**Считаем.** $\gcd(30,24)=6$, поэтому $$\gcd\left(2^{30}-1,\ 2^{24}-1\right)=2^{6}-1=63 .$$\n\n**Ответ:** $63$.\n\n*Проверка.* $2^{6}-1=63$ делит и $2^{30}-1$, и $2^{24}-1$, потому что $6\mid30$ и $6\mid24$, а из $d\mid m$ следует $\left(2^{d}-1\right)\mid\left(2^{m}-1\right)$ — это разложение $$2^{m}-1=\left(2^{d}-1\right)\left(2^{\,m-d}+2^{\,m-2d}+\dots+1\right).$$',
           'en': r'**The key identity.** For $m>n$, $$2^{m}-1=2^{\,m-n}\left(2^{n}-1\right)+\left(2^{\,m-n}-1\right).$$ (Check by expanding: $2^{\,m-n}\cdot2^{n}-2^{\,m-n}+2^{\,m-n}-1=2^{m}-1$.)\n\nSo the remainder of $2^{m}-1$ on division by $2^{n}-1$ is $2^{\,m-n}-1$, and the Euclidean algorithm gives $$\gcd\left(2^{m}-1,\ 2^{n}-1\right)=\gcd\left(2^{\,m-n}-1,\ 2^{n}-1\right).$$\n\n**The exponents follow the Euclidean algorithm.** Repeating the step, the exponents transform exactly as the numbers do in the Euclidean algorithm for $m$ and $n$. Hence $$\gcd\left(2^{m}-1,\ 2^{n}-1\right)=2^{\gcd(m,n)}-1 .$$\n\n**Compute.** $\gcd(30,24)=6$, so $$\gcd\left(2^{30}-1,\ 2^{24}-1\right)=2^{6}-1=63 .$$\n\n**Answer:** $63$.\n\n*Check.* $2^{6}-1=63$ divides both $2^{30}-1$ and $2^{24}-1$, because $6\mid30$ and $6\mid24$, and $d\mid m$ implies $\left(2^{d}-1\right)\mid\left(2^{m}-1\right)$ through the factorisation $$2^{m}-1=\left(2^{d}-1\right)\left(2^{\,m-d}+2^{\,m-2d}+\dots+1\right).$$'}},

  {'src': _src(4, 4), 'lvl': 3,
   'q': {'ru': r'Докажите, что если в треугольнике медиана и биссектриса, проведённые из одной вершины, совпадают, то треугольник равнобедренный.',
         'en': r'Prove that if the median and the bisector from one vertex of a triangle coincide, the triangle is isosceles.'},
   'hint': {'ru': r'Воспользуйтесь свойством биссектрисы — или удвойте медиану.',
            'en': r'Use the bisector property — or double the median.'},
   'sol': {'ru': r'Пусть в треугольнике $ABC$ отрезок $AM$ — одновременно медиана и биссектриса.\n\n**Способ 1: свойство биссектрисы.** Раз $AM$ — биссектриса, то $$\frac{BM}{MC}=\frac{AB}{AC}.$$ Раз $AM$ — медиана, то $BM=MC$, значит левая часть равна $1$.\n\nСледовательно $\dfrac{AB}{AC}=1$, то есть $AB=AC$. $\blacksquare$\n\n**Способ 2: удвоение медианы.** Продлим $AM$ за точку $M$ до точки $D$ так, что $MD=AM$. Тогда $ABDC$ — параллелограмм (диагонали делятся точкой пересечения пополам), поэтому $$CD=AB\qquad\text{и}\qquad CD\parallel AB .$$\n\nИз параллельности следует, что $\angle ADC=\angle DAB$ (накрест лежащие при секущей $AD$). Но $AM$ — биссектриса, поэтому $\angle DAB=\angle DAC$.\n\nЗначит $\angle ADC=\angle DAC$, и треугольник $ACD$ равнобедренный: $$AC=CD .$$\n\nСоединяя с $CD=AB$, получаем $AB=AC$. $\blacksquare$\n\n*Замечание.* Утверждение верно и в такой форме: если **любые две** из трёх линий (медиана, биссектриса, высота) из одной вершины совпадают, треугольник равнобедренный. А вот знаменитая теорема Штейнера–Лемуса — «если равны две **биссектрисы**, то треугольник равнобедренный» — гораздо труднее и не имеет короткого прямого доказательства.',
           'en': r'Let $AM$ be both a median and a bisector in a triangle $ABC$.\n\n**Way 1: the bisector property.** Since $AM$ bisects, $$\frac{BM}{MC}=\frac{AB}{AC}.$$ Since $AM$ is a median, $BM=MC$, so the left side is $1$.\n\nHence $\dfrac{AB}{AC}=1$, that is $AB=AC$. $\blacksquare$\n\n**Way 2: doubling the median.** Extend $AM$ beyond $M$ to $D$ with $MD=AM$. Then $ABDC$ is a parallelogram (its diagonals bisect each other), so $$CD=AB\qquad\text{and}\qquad CD\parallel AB .$$\n\nThe parallelism gives $\angle ADC=\angle DAB$ (alternate angles for the transversal $AD$). But $AM$ bisects, so $\angle DAB=\angle DAC$.\n\nHence $\angle ADC=\angle DAC$ and the triangle $ACD$ is isosceles: $$AC=CD .$$\n\nCombined with $CD=AB$ this gives $AB=AC$. $\blacksquare$\n\n*Remark.* The statement holds more generally: if **any two** of the three lines (median, bisector, altitude) from one vertex coincide, the triangle is isosceles. The famous Steiner–Lehmus theorem — "if two **bisectors** are equal the triangle is isosceles" — is much harder and has no short direct proof.'}},

  {'src': _src(4, 5), 'lvl': 3,
   'q': {'ru': r'Докажите, что сумма кубов трёх последовательных натуральных чисел делится на $9$.',
         'en': r'Prove that the sum of the cubes of three consecutive positive integers is divisible by $9$.'},
   'hint': {'ru': r'Обозначьте среднее число через $n$ и раскройте.',
            'en': r'Call the middle number $n$ and expand.'},
   'sol': {'ru': r'**Раскрываем.** Пусть числа равны $n-1$, $n$, $n+1$. Тогда $$(n-1)^{3}+n^{3}+(n+1)^{3}.$$ Воспользуемся формулами куба суммы и разности: $$(n\pm1)^{3}=n^{3}\pm3n^{2}+3n\pm1 .$$ Складывая три слагаемых, слагаемые $\pm3n^{2}$ и $\pm1$ взаимно уничтожаются: $$(n-1)^{3}+n^{3}+(n+1)^{3}=3n^{3}+6n=3n\left(n^{2}+2\right).$$\n\n**Осталось показать, что $n\left(n^{2}+2\right)$ делится на $3$.** Разберём остаток $n$ по модулю $3$.\n\n$n\equiv0$: тогда сам множитель $n$ делится на $3$;\n\n$n\equiv1$: тогда $n^{2}+2\equiv1+2=3\equiv0$;\n\n$n\equiv2$: тогда $n^{2}\equiv4\equiv1$ и $n^{2}+2\equiv0$.\n\nВо всех случаях произведение $n\left(n^{2}+2\right)$ делится на $3$.\n\n**Вывод.** Значит вся сумма равна $3\cdot\left(\text{кратное трём}\right)$, то есть делится на $9$. $\blacksquare$\n\n*Проверка.* $1^{3}+2^{3}+3^{3}=36=9\cdot4$ ✓ $\quad$ $2^{3}+3^{3}+4^{3}=99=9\cdot11$ ✓ $\quad$ $3^{3}+4^{3}+5^{3}=216=9\cdot24$ ✓\n\n*Замечание.* Утверждение верно и для любых трёх последовательных **целых** чисел, включая отрицательные: в доказательстве нигде не использовалась положительность.',
           'en': r'**Expand.** Let the numbers be $n-1$, $n$, $n+1$, so the sum is $$(n-1)^{3}+n^{3}+(n+1)^{3}.$$ Using $$(n\pm1)^{3}=n^{3}\pm3n^{2}+3n\pm1 ,$$ the $\pm3n^{2}$ and $\pm1$ terms cancel when the three are added: $$(n-1)^{3}+n^{3}+(n+1)^{3}=3n^{3}+6n=3n\left(n^{2}+2\right).$$\n\n**It remains to show $n\left(n^{2}+2\right)$ is divisible by $3$.** Split by $n$ modulo $3$.\n\n$n\equiv0$: the factor $n$ itself is divisible by $3$;\n\n$n\equiv1$: then $n^{2}+2\equiv1+2=3\equiv0$;\n\n$n\equiv2$: then $n^{2}\equiv4\equiv1$ and $n^{2}+2\equiv0$.\n\nIn every case the product $n\left(n^{2}+2\right)$ is divisible by $3$.\n\n**Conclusion.** So the whole sum is $3\cdot\left(\text{a multiple of three}\right)$ and hence divisible by $9$. $\blacksquare$\n\n*Check.* $1^{3}+2^{3}+3^{3}=36=9\cdot4$ ✓ $\quad$ $2^{3}+3^{3}+4^{3}=99=9\cdot11$ ✓ $\quad$ $3^{3}+4^{3}+5^{3}=216=9\cdot24$ ✓\n\n*Remark.* The statement holds for any three consecutive **integers**, negatives included: positivity was never used.'}},
 ],
}
