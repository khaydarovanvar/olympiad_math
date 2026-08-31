# -*- coding: utf-8 -*-
"""Topic 13 — Counting principles."""

from math import comb

# ---- Pascal's triangle, generated rather than typed ----
_ROWS = 7
_DX, _DY, _TOP, _CX = 46, 36, 34, 200
_pascal = []
for r in range(_ROWS):
    for k in range(r + 1):
        x = _CX + (k - r / 2) * _DX
        y = _TOP + r * _DY
        _pascal.append('<text x="%.1f" y="%d" text-anchor="middle" class="%s">%d</text>'
                       % (x, y, 'acc' if k in (0, r) else 'sm', comb(r, k)))
FIG_PASCAL = ('<svg viewBox="0 0 400 %d" role="img" aria-label="Pascal triangle">%s</svg>'
              % (_TOP + _ROWS * _DY, ''.join(_pascal)))

# ---- stars and bars ----
_cells = []
for i in range(12):
    _cells.append('<circle class="pt" cx="%d" cy="70" r="6"/>' % (40 + i * 26))
for x in (140, 244):
    _cells.append('<path class="lnc" d="M%d 46 V94"/>' % x)
FIG_BARS = ('<svg viewBox="0 0 380 120" role="img" aria-label="Stars and bars">'
            '%s<text class="sm" x="76" y="112" text-anchor="middle">4</text>'
            '<text class="sm" x="192" y="112" text-anchor="middle">4</text>'
            '<text class="sm" x="300" y="112" text-anchor="middle">4</text></svg>' % ''.join(_cells))

# ---- lattice paths ----
_grid = []
_W, _H, _U = 4, 3, 60
for i in range(_W + 1):
    _grid.append('<path class="dsh" d="M%d 30 V%d"/>' % (40 + i * _U, 30 + _H * _U))
for j in range(_H + 1):
    _grid.append('<path class="dsh" d="M40 %d H%d"/>' % (30 + j * _U, 40 + _W * _U))
_path = 'M40 210 H100 V150 H220 V90 H280 V30'
FIG_PATHS = ('<svg viewBox="0 0 340 250" role="img" aria-label="A monotone lattice path">'
             '%s<path class="lnc" d="%s"/>'
             '<circle class="pt" cx="40" cy="210" r="4"/><circle class="ptc" cx="280" cy="30" r="4"/>'
             '</svg>' % (''.join(_grid), _path))

LESSON = {
 'n': 13,
 'cat': 'comb',
 'title': {'ru': 'Комбинаторика: как считать', 'en': 'Counting principles'},
 'sub': {'ru': 'Правила суммы и произведения, перестановки и сочетания, треугольник Паскаля, включения-исключения и двойной подсчёт.',
         'en': 'The sum and product rules, permutations and combinations, Pascal’s triangle, inclusion–exclusion and double counting.'},
 'goals': {
  'ru': [
   r'Различать, когда работает правило суммы, а когда — правило произведения.',
   r'Считать перестановки, размещения и сочетания и понимать, чем они отличаются.',
   r'Пользоваться свойствами биномиальных коэффициентов и треугольником Паскаля.',
   r'Применять формулу включений-исключений и приём двойного подсчёта.',
  ],
  'en': [
   r'Tell when the sum rule applies and when the product rule does.',
   r'Count permutations, arrangements and combinations, and see how they differ.',
   r'Use the properties of binomial coefficients and Pascal’s triangle.',
   r'Apply inclusion–exclusion and the double-counting technique.',
  ]},

 'sections': [

  # ------------------------------------------------------------------ 1
  {'h': {'ru': 'Два правила, из которых всё растёт', 'en': 'The two rules everything grows from'},
   'blocks': [
    {'t': 'thm',
     'name': {'ru': 'Правило суммы', 'en': 'The sum rule'},
     'text': {
      'ru': r'Если объект можно выбрать **или** одним способом из $m$ вариантов, **или** другим из $n$ вариантов, и эти множества не пересекаются, то всего вариантов $m+n$.',
      'en': r'If an object can be chosen **either** in one of $m$ ways **or** in one of $n$ ways, and the two sets do not overlap, then there are $m+n$ ways in all.'}},

    {'t': 'thm',
     'name': {'ru': 'Правило произведения', 'en': 'The product rule'},
     'text': {
      'ru': r'Если выбор состоит из двух **последовательных** шагов, причём первый можно сделать $m$ способами, а второй при любом исходе первого — $n$ способами, то всего вариантов $m\cdot n$.',
      'en': r'If a choice is made in two **successive** steps, the first in $m$ ways and the second in $n$ ways whatever the first gave, then there are $m\cdot n$ ways in all.'}},

    {'t': 'idea',
     'text': {
      'ru': r'Отличить их просто по союзу: **«или»** — складываем, **«и»** — умножаем.\n\n«В классе $12$ мальчиков **и** $15$ девочек. Выбрать одного дежурного» — здесь на самом деле «мальчика **или** девочку»: $12+15=27$.\n\n«Выбрать одного мальчика **и** одну девочку» — здесь два шага: $12\cdot15=180$.',
      'en': r'They are told apart by the conjunction: **"or"** means add, **"and"** means multiply.\n\n"A class has $12$ boys **and** $15$ girls. Choose one monitor" — this is really "a boy **or** a girl": $12+15=27$.\n\n"Choose one boy **and** one girl" — two steps: $12\cdot15=180$.'}},

    {'t': 'warn',
     'text': {
      'ru': r'В правиле суммы обязательно требуется, чтобы множества **не пересекались**. «Сколько чисел от $1$ до $100$ делится на $2$ или на $3$?» — складывать $50$ и $33$ нельзя: числа, кратные шести, попадут в оба списка. Здесь нужна формула включений-исключений.\n\nВ правиле произведения важно, чтобы количество вариантов на втором шаге **не зависело** от исхода первого. Если зависит — разбирайте случаи.',
      'en': r'The sum rule insists that the sets **do not overlap**. "How many numbers from $1$ to $100$ are divisible by $2$ or by $3$?" — you may not add $50$ and $33$: the multiples of six land in both lists. That calls for inclusion–exclusion.\n\nThe product rule insists that the count at the second step **does not depend** on the first outcome. If it does, split into cases.'}},

    {'t': 'ex',
     'q': {'ru': r'Сколько существует трёхзначных чисел, все цифры которых различны?',
           'en': r'How many three-digit numbers have all three digits different?'},
     'steps': {
      'ru': [r'Первая цифра — старшая, она не может быть нулём: $9$ вариантов.',
             r'Вторая цифра может быть любой, кроме уже использованной: $10-1=9$ вариантов.',
             r'Третья — любая, кроме двух использованных: $8$ вариантов.',
             r'На каждом шаге количество вариантов не зависит от конкретного выбора на предыдущих, поэтому работает правило произведения: $$9\cdot9\cdot8=648 .$$'],
      'en': [r'The leading digit cannot be zero: $9$ choices.',
             r'The second digit may be anything but the one already used: $10-1=9$ choices.',
             r'The third: anything but the two already used: $8$ choices.',
             r'At each step the count does not depend on the earlier choices, so the product rule applies: $$9\cdot9\cdot8=648 .$$']},
     'ans': {'ru': r'$648$ чисел.', 'en': r'$648$ numbers.'}},
   ]},

  # ------------------------------------------------------------------ 2
  {'h': {'ru': 'Перестановки, размещения, сочетания', 'en': 'Permutations, arrangements, combinations'},
   'blocks': [
    {'t': 'table',
     'head': {'ru': ['Что считаем', 'Формула', 'Порядок важен?'],
              'en': ['What is counted', 'Formula', 'Does order matter?']},
     'rows': {
      'ru': [
       [r'**перестановки** $n$ предметов', r'$P_n=n!$', r'да'],
       [r'**размещения**: выбрать $k$ из $n$ по порядку', r'$A_n^k=\dfrac{n!}{(n-k)!}$', r'да'],
       [r'**сочетания**: выбрать $k$ из $n$', r'$\dbinom{n}{k}=\dfrac{n!}{k!\,(n-k)!}$', r'нет'],
       [r'выборки **с повторениями**: $k$ раз из $n$', r'$n^{k}$', r'да'],
       [r'сочетания **с повторениями**', r'$\dbinom{n+k-1}{k}$', r'нет'],
      ],
      'en': [
       [r'**permutations** of $n$ objects', r'$P_n=n!$', r'yes'],
       [r'**arrangements**: choose $k$ of $n$ in order', r'$A_n^k=\dfrac{n!}{(n-k)!}$', r'yes'],
       [r'**combinations**: choose $k$ of $n$', r'$\dbinom{n}{k}=\dfrac{n!}{k!\,(n-k)!}$', r'no'],
       [r'choices **with repetition**: $k$ times from $n$', r'$n^{k}$', r'yes'],
       [r'combinations **with repetition**', r'$\dbinom{n+k-1}{k}$', r'no'],
      ]}},

    {'t': 'idea',
     'name': {'ru': 'Главный вопрос', 'en': 'The one question to ask'},
     'text': {
      'ru': r'Прежде чем выбирать формулу, спросите себя: **важен ли порядок?**\n\n«Сколькими способами выбрать старосту и его заместителя из $10$ человек» — порядок важен (роли разные), это размещения: $10\cdot9=90$.\n\n«Сколькими способами выбрать двух дежурных из $10$» — порядок не важен, это сочетания: $\binom{10}{2}=45$.\n\nОбратите внимание: ответы отличаются ровно в $2!=2$ раза — на число перестановок внутри выбранной пары.',
      'en': r'Before choosing a formula ask yourself: **does order matter?**\n\n"In how many ways can a class of $10$ pick a head and a deputy" — order matters (the roles differ), so these are arrangements: $10\cdot9=90$.\n\n"In how many ways can it pick two monitors" — order does not matter, so these are combinations: $\binom{10}{2}=45$.\n\nNote the answers differ by exactly $2!=2$ — the number of orderings inside the chosen pair.'}},

    {'t': 'proof',
     'text': {
      'ru': r'**Почему $\dbinom{n}{k}=\dfrac{n!}{k!\,(n-k)!}$.** Посчитаем двумя способами число способов выбрать $k$ предметов из $n$ **и выстроить их по порядку**.\n\n*Первый способ:* последовательно, по правилу произведения: $$n(n-1)\cdots(n-k+1)=\frac{n!}{(n-k)!}.$$\n\n*Второй способ:* сначала выберем набор из $k$ предметов — это можно сделать $\binom nk$ способами, — а потом расставим выбранные по порядку, что даёт $k!$ вариантов. Итого $\binom nk\cdot k!$.\n\nПриравнивая, $$\binom nk\cdot k!=\frac{n!}{(n-k)!}\quad\Longrightarrow\quad \binom nk=\frac{n!}{k!\,(n-k)!}. \qquad\blacksquare$$',
      'en': r'**Why $\dbinom{n}{k}=\dfrac{n!}{k!\,(n-k)!}$.** Count in two ways the number of ways to choose $k$ objects from $n$ **and line them up in order**.\n\n*First way:* step by step, by the product rule: $$n(n-1)\cdots(n-k+1)=\frac{n!}{(n-k)!}.$$\n\n*Second way:* first choose the set of $k$ objects, which can be done in $\binom nk$ ways, then order them, which gives $k!$ ways. That is $\binom nk\cdot k!$ altogether.\n\nEquating, $$\binom nk\cdot k!=\frac{n!}{(n-k)!}\quad\Longrightarrow\quad \binom nk=\frac{n!}{k!\,(n-k)!}. \qquad\blacksquare$$'}},

    {'t': 'ex',
     'q': {'ru': r'Сколько различных «слов» (не обязательно осмысленных) можно составить, переставляя буквы слова МАТЕМАТИКА?',
           'en': r'How many different "words" (not necessarily meaningful) can be made by rearranging the letters of МАТЕМАТИКА?'},
     'steps': {
      'ru': [r'В слове $10$ букв. Если бы все были различны, ответом было бы $10!$.',
             r'Но буквы повторяются: **А** встречается $3$ раза, **М** — $2$ раза, **Т** — $2$ раза, остальные (Е, И, К) — по одному.',
             r'Каждое различимое слово получается из $3!\cdot2!\cdot2!$ разных «нумерованных» расстановок — это перестановки одинаковых букв между собой.',
             r'Значит ответ: $$\frac{10!}{3!\,2!\,2!}=\frac{3\,628\,800}{6\cdot2\cdot2}=\frac{3\,628\,800}{24}=151\,200 .$$'],
      'en': [r'The word has $10$ letters. If they were all different the answer would be $10!$.',
             r'But letters repeat: **А** appears $3$ times, **М** twice, **Т** twice, and Е, И, К once each.',
             r'Each distinguishable word arises from $3!\cdot2!\cdot2!$ different "numbered" arrangements — the permutations of identical letters among themselves.',
             r'So the answer is $$\frac{10!}{3!\,2!\,2!}=\frac{3\,628\,800}{6\cdot2\cdot2}=\frac{3\,628\,800}{24}=151\,200 .$$']},
     'ans': {'ru': r'$151\,200$ слов.', 'en': r'$151\,200$ words.'}},
   ]},

  # ------------------------------------------------------------------ 3
  {'h': {'ru': 'Биномиальные коэффициенты', 'en': 'Binomial coefficients'},
   'blocks': [
    {'t': 'fig', 'svg': FIG_PASCAL,
     'cap': {'ru': 'Треугольник Паскаля: каждое число — сумма двух стоящих над ним. По краям стоят единицы.',
             'en': 'Pascal’s triangle: each number is the sum of the two above it, and the edges are ones.'}},

    {'t': 'ul',
     'items': {
      'ru': [
       r'**Симметрия:** $\dbinom nk=\dbinom{n}{n-k}$ — выбрать $k$ предметов всё равно что выбрать, какие $n-k$ оставить.',
       r'**Правило Паскаля:** $\dbinom nk+\dbinom{n}{k+1}=\dbinom{n+1}{k+1}$ — именно оно строит треугольник.',
       r'**Сумма строки:** $\dbinom n0+\dbinom n1+\dots+\dbinom nn=2^{n}$.',
       r'**Знакопеременная сумма:** $\dbinom n0-\dbinom n1+\dots\pm\dbinom nn=0$ при $n\ge1$.',
       r'**Бином Ньютона:** $(a+b)^{n}=\displaystyle\sum_{k=0}^{n}\dbinom nk a^{\,n-k}b^{k}$.',
      ],
      'en': [
       r'**Symmetry:** $\dbinom nk=\dbinom{n}{n-k}$ — choosing $k$ objects is the same as choosing which $n-k$ to leave.',
       r'**Pascal’s rule:** $\dbinom nk+\dbinom{n}{k+1}=\dbinom{n+1}{k+1}$ — this is what builds the triangle.',
       r'**Row sum:** $\dbinom n0+\dbinom n1+\dots+\dbinom nn=2^{n}$.',
       r'**Alternating sum:** $\dbinom n0-\dbinom n1+\dots\pm\dbinom nn=0$ for $n\ge1$.',
       r'**The binomial theorem:** $(a+b)^{n}=\displaystyle\sum_{k=0}^{n}\dbinom nk a^{\,n-k}b^{k}$.',
      ]}},

    {'t': 'proof',
     'text': {
      'ru': r'**Правило Паскаля — комбинаторно.** Пусть надо выбрать $k+1$ предмет из $n+1$. Отметим один предмет и назовём его особым. Все выборки делятся на два непересекающихся класса:\n\n*особый предмет взят* — тогда остальные $k$ выбираются из оставшихся $n$: $\binom nk$ способов;\n\n*особый предмет не взят* — тогда все $k+1$ выбираются из оставшихся $n$: $\binom{n}{k+1}$ способов.\n\nПо правилу суммы $$\binom{n+1}{k+1}=\binom nk+\binom{n}{k+1}. \qquad\blacksquare$$\n\n**Сумма строки.** Левая часть считает все подмножества $n$-элементного множества, разбитые по числу элементов. Правая часть считает те же подмножества иначе: про каждый из $n$ элементов независимо решаем, брать его или нет, — $2^{n}$ вариантов. $\blacksquare$',
      'en': r'**Pascal’s rule, combinatorially.** Suppose we must choose $k+1$ objects out of $n+1$. Mark one object and call it special. Every choice falls into one of two disjoint classes:\n\n*the special object is taken* — then the other $k$ come from the remaining $n$: $\binom nk$ ways;\n\n*it is not taken* — then all $k+1$ come from the remaining $n$: $\binom{n}{k+1}$ ways.\n\nThe sum rule gives $$\binom{n+1}{k+1}=\binom nk+\binom{n}{k+1}. \qquad\blacksquare$$\n\n**The row sum.** The left side counts all subsets of an $n$-element set, sorted by size. The right side counts the same subsets differently: for each of the $n$ elements decide independently whether to take it — $2^{n}$ ways. $\blacksquare$'}},

    {'t': 'idea',
     'name': {'ru': 'Двойной подсчёт', 'en': 'Double counting'},
     'text': {
      'ru': r'Оба доказательства выше устроены одинаково: **одно и то же множество посчитано двумя способами**, и из равенства ответов получается тождество. Это самый мощный приём комбинаторики. Схема такая:\n\n**1)** придумайте множество объектов;\n**2)** посчитайте его одним способом — получится левая часть;\n**3)** посчитайте другим — получится правая.\n\nАлгебраическое доказательство через факториалы обычно тоже возможно, но комбинаторное короче и объясняет, **почему** тождество верно.',
      'en': r'Both proofs above have the same shape: **one set counted in two ways**, and equating the answers gives an identity. This is the most powerful technique in combinatorics. The recipe:\n\n**1)** invent a set of objects;\n**2)** count it one way — that is the left side;\n**3)** count it another way — that is the right side.\n\nAn algebraic proof through factorials is usually available too, but the combinatorial one is shorter and explains **why** the identity holds.'}},
   ]},

  # ------------------------------------------------------------------ 4
  {'h': {'ru': 'Шары и перегородки', 'en': 'Stars and bars'},
   'blocks': [
    {'t': 'thm',
     'name': {'ru': 'Раздача одинаковых предметов', 'en': 'Handing out identical objects'},
     'text': {
      'ru': r'Число способов раздать $n$ одинаковых предметов $k$ различным людям (кому-то может не достаться ничего) равно $$\binom{n+k-1}{k-1}.$$ Если каждому должно достаться хотя бы по одному, ответ равен $\dbinom{n-1}{k-1}$.',
      'en': r'The number of ways to give $n$ identical objects to $k$ distinct people (some may get none) is $$\binom{n+k-1}{k-1}.$$ If everyone must get at least one, the answer is $\dbinom{n-1}{k-1}$.'}},

    {'t': 'fig', 'svg': FIG_BARS,
     'cap': {'ru': 'Двенадцать одинаковых конфет и две перегородки: раздача трём детям по $4$ конфеты.',
             'en': 'Twelve identical sweets and two bars: a distribution of $4$ each to three children.'}},

    {'t': 'proof',
     'text': {
      'ru': r'**Случай «хотя бы по одному».** Выложим $n$ предметов в ряд. Между ними $n-1$ промежутков. Чтобы разбить ряд на $k$ непустых частей, надо выбрать $k-1$ промежутков, куда поставить перегородки: $\binom{n-1}{k-1}$ способов. Каждому разбиению отвечает ровно одна раздача, и наоборот.\n\n**Общий случай.** Теперь части могут быть пустыми, поэтому перегородки разрешено ставить рядом. Удобно считать так: выложим в ряд $n$ предметов **и** $k-1$ перегородок — всего $n+k-1$ объектов, — и выберем, какие из мест займут перегородки: $\binom{n+k-1}{k-1}$ способов. $\blacksquare$\n\n**Связь между случаями.** Второй сводится к первому подстановкой: выдав сначала каждому по одному предмету, останется раздать $n-k$ предметов уже без ограничений.',
      'en': r'**The "at least one" case.** Lay the $n$ objects in a row. There are $n-1$ gaps between them. To split the row into $k$ non-empty parts, choose $k-1$ gaps for the bars: $\binom{n-1}{k-1}$ ways. Each split corresponds to exactly one distribution and back.\n\n**The general case.** Now parts may be empty, so bars may stand next to each other. Count like this: lay out $n$ objects **and** $k-1$ bars in a row — $n+k-1$ items in all — and choose which places the bars occupy: $\binom{n+k-1}{k-1}$ ways. $\blacksquare$\n\n**The link between the two.** The second reduces to the first by giving everyone one object first, leaving $n-k$ objects to hand out with no restriction.'}},

    {'t': 'note',
     'text': {
      'ru': r'Та же формула отвечает на вопрос: сколько решений в **неотрицательных** целых числах имеет уравнение $$x_1+x_2+\dots+x_k=n\ ?$$ Ответ: $\dbinom{n+k-1}{k-1}$. А в **натуральных** — $\dbinom{n-1}{k-1}$. Это ровно та задача, с которой мы встречались в теме о последовательностях.',
      'en': r'The same formula answers: how many solutions in **non-negative** integers has $$x_1+x_2+\dots+x_k=n\ ?$$ The answer is $\dbinom{n+k-1}{k-1}$; in **positive** integers it is $\dbinom{n-1}{k-1}$. This is exactly the question met in the sequences topic.'}},

    {'t': 'ex',
     'q': {'ru': r'Сколькими способами можно разложить $10$ одинаковых конфет между четырьмя детьми, если кому-то может не достаться ничего?',
           'en': r'In how many ways can $10$ identical sweets be shared among four children if some may get none?'},
     'steps': {
      'ru': [r'Здесь $n=10$ предметов и $k=4$ получателя.',
             r'По формуле $$\binom{n+k-1}{k-1}=\binom{13}{3}.$$',
             r'$$\binom{13}{3}=\frac{13\cdot12\cdot11}{3\cdot2\cdot1}=\frac{1716}{6}=286 .$$'],
      'en': [r'Here $n=10$ objects and $k=4$ recipients.',
             r'The formula gives $$\binom{n+k-1}{k-1}=\binom{13}{3}.$$',
             r'$$\binom{13}{3}=\frac{13\cdot12\cdot11}{3\cdot2\cdot1}=\frac{1716}{6}=286 .$$']},
     'ans': {'ru': r'$286$ способов.', 'en': r'$286$ ways.'}},

    {'t': 'p',
     'text': {
      'ru': r'Ещё одна классическая задача, сводящаяся к сочетаниям, — **пути по клеткам**. Сколько кратчайших путей ведёт из левого нижнего угла прямоугольника $m\times n$ в правый верхний, если разрешено идти только вправо и вверх?',
      'en': r'Another classic that reduces to combinations is **lattice paths**. How many shortest paths lead from the bottom-left corner of an $m\times n$ rectangle to the top-right one if only right and up steps are allowed?'}},

    {'t': 'fig', 'svg': FIG_PATHS,
     'cap': {'ru': 'Каждый путь — это последовательность из $m$ шагов вправо и $n$ шагов вверх; путей ровно $\\binom{m+n}{n}$.',
             'en': 'Each path is a sequence of $m$ right steps and $n$ up steps; there are exactly $\\binom{m+n}{n}$ of them.'}},

    {'t': 'proof',
     'text': {
      'ru': r'Любой такой путь состоит ровно из $m+n$ шагов, из которых $m$ — вправо и $n$ — вверх (иначе в нужный угол не попасть). Путь полностью определяется тем, **на каких местах** в этой последовательности стоят шаги вверх. Выбрать $n$ мест из $m+n$ можно $\binom{m+n}{n}$ способами, и разным выборам отвечают разные пути. $\blacksquare$\n\nНа рисунке $m=4$, $n=3$, поэтому путей $\binom{7}{3}=35$.',
      'en': r'Any such path consists of exactly $m+n$ steps, $m$ of them right and $n$ up (otherwise it misses the corner). A path is determined completely by **which positions** in the sequence hold the up steps. Choosing $n$ positions out of $m+n$ can be done in $\binom{m+n}{n}$ ways, and different choices give different paths. $\blacksquare$\n\nIn the figure $m=4$ and $n=3$, so there are $\binom{7}{3}=35$ paths.'}},
   ]},

  # ------------------------------------------------------------------ 5
  {'h': {'ru': 'Включения и исключения', 'en': 'Inclusion and exclusion'},
   'blocks': [
    {'t': 'thm',
     'name': {'ru': 'Формула включений-исключений', 'en': 'The inclusion–exclusion formula'},
     'text': {
      'ru': r'Для двух множеств $$|A\cup B|=|A|+|B|-|A\cap B| ,$$ для трёх $$|A\cup B\cup C|=|A|+|B|+|C|-|A\cap B|-|B\cap C|-|C\cap A|+|A\cap B\cap C| .$$ В общем случае складываются все одиночные, вычитаются все парные, прибавляются все тройные, и так далее — со знаком, чередующимся по числу множеств.',
      'en': r'For two sets $$|A\cup B|=|A|+|B|-|A\cap B| ,$$ and for three $$|A\cup B\cup C|=|A|+|B|+|C|-|A\cap B|-|B\cap C|-|C\cap A|+|A\cap B\cap C| .$$ In general, add all single sets, subtract all pairs, add all triples, and so on, with the sign alternating by the number of sets.'}},

    {'t': 'proof',
     'text': {
      'ru': r'Проверим, что каждый элемент объединения посчитан ровно один раз. Пусть элемент принадлежит ровно $m$ из трёх множеств, где $1\le m\le3$.\n\nВ одиночных слагаемых он посчитан $\binom m1$ раз, в парных — $\binom m2$ раз (с минусом), в тройных — $\binom m3$ раз. Итого его вклад равен $$\binom m1-\binom m2+\binom m3 .$$ Но по формуле знакопеременной суммы $$\binom m0-\binom m1+\binom m2-\binom m3=0\quad\Longrightarrow\quad \binom m1-\binom m2+\binom m3=\binom m0=1 .$$ Значит вклад каждого элемента равен единице — что и требовалось. $\blacksquare$',
      'en': r'Check that each element of the union is counted exactly once. Suppose an element belongs to exactly $m$ of the three sets, $1\le m\le3$.\n\nAmong the single terms it is counted $\binom m1$ times, among the pairs $\binom m2$ times (with a minus), among the triples $\binom m3$ times. Its total contribution is $$\binom m1-\binom m2+\binom m3 .$$ But the alternating sum formula gives $$\binom m0-\binom m1+\binom m2-\binom m3=0\quad\Longrightarrow\quad \binom m1-\binom m2+\binom m3=\binom m0=1 .$$ So each element contributes exactly one — as required. $\blacksquare$'}},

    {'t': 'ex',
     'q': {'ru': r'Сколько чисел от $1$ до $1000$ не делится ни на $2$, ни на $3$, ни на $5$?',
           'en': r'How many numbers from $1$ to $1000$ are divisible by none of $2$, $3$, $5$?'},
     'steps': {
      'ru': [r'Пусть $A$, $B$, $C$ — множества чисел, кратных $2$, $3$, $5$ соответственно.',
             r'Одиночные: $|A|=500$, $|B|=\lfloor1000/3\rfloor=333$, $|C|=200$.',
             r'Парные: кратные $6$ — $166$, кратные $10$ — $100$, кратные $15$ — $66$.',
             r'Тройные: кратные $30$ — $33$.',
             r'$$|A\cup B\cup C|=500+333+200-166-100-66+33=734 .$$',
             r'Не делится ни на одно: $1000-734=266$.'],
      'en': [r'Let $A$, $B$, $C$ be the sets of multiples of $2$, $3$, $5$.',
             r'Singles: $|A|=500$, $|B|=\lfloor1000/3\rfloor=333$, $|C|=200$.',
             r'Pairs: multiples of $6$ — $166$; of $10$ — $100$; of $15$ — $66$.',
             r'Triple: multiples of $30$ — $33$.',
             r'$$|A\cup B\cup C|=500+333+200-166-100-66+33=734 .$$',
             r'Divisible by none: $1000-734=266$.']},
     'ans': {'ru': r'$266$ чисел.', 'en': r'$266$ numbers.'}},

    {'t': 'idea',
     'text': {
      'ru': r'Обратите внимание на приём: считать «ни одного из свойств» почти всегда проще **через дополнение** — сначала посчитать объединение, потом вычесть из общего числа. Это верно и для многих других задач: если условие звучит как «хотя бы один», часто выгоднее посчитать «ни одного».',
      'en': r'Note the move: counting "none of the properties" is almost always easier **through the complement** — count the union first, then subtract from the total. The same applies elsewhere: when a condition reads "at least one", it is often cheaper to count "none".'}},
   ]},
 ],

 # ==================================================================== problems
 'problems': [

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Сколько трёхзначных чисел можно составить из цифр $1,2,3,4,5$, если цифры не повторяются? А если повторяться можно?',
         'en': r'How many three-digit numbers can be made from the digits $1,2,3,4,5$ with no repetition? And with repetition allowed?'},
   'hint': {'ru': r'Правило произведения в обоих случаях.',
            'en': r'The product rule in both cases.'},
   'sol': {'ru': r'**Без повторений.** Первую цифру выбираем $5$ способами, вторую — $4$, третью — $3$: $$5\cdot4\cdot3=60 .$$\n\n**С повторениями.** На каждом из трёх мест независимо $5$ вариантов: $$5^{3}=125 .$$\n\n**Ответ:** $60$ и $125$.',
           'en': r'**Without repetition.** The first digit in $5$ ways, the second in $4$, the third in $3$: $$5\cdot4\cdot3=60 .$$\n\n**With repetition.** Each of the three places has $5$ options independently: $$5^{3}=125 .$$\n\n**Answer:** $60$ and $125$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Сколькими способами можно выбрать команду из трёх человек из класса в $10$ учеников? А если в команде надо ещё назначить капитана?',
         'en': r'In how many ways can a team of three be chosen from a class of $10$? And if the team must also name a captain?'},
   'hint': {'ru': r'Сначала сочетания, потом умножьте на выбор капитана.',
            'en': r'Combinations first, then multiply by the choice of captain.'},
   'sol': {'ru': r'**Команда.** Порядок не важен, поэтому это сочетания: $$\binom{10}{3}=\frac{10\cdot9\cdot8}{3\cdot2\cdot1}=120 .$$\n\n**С капитаном.** Сначала выбираем команду ($120$ способов), затем среди трёх выбираем капитана ($3$ способа): $$120\cdot3=360 .$$\n\n*Проверка другим путём:* сначала капитан ($10$ способов), потом двое остальных из девяти ($\binom92=36$): $10\cdot36=360$ ✓\n\n**Ответ:** $120$ и $360$.',
           'en': r'**The team.** Order does not matter, so these are combinations: $$\binom{10}{3}=\frac{10\cdot9\cdot8}{3\cdot2\cdot1}=120 .$$\n\n**With a captain.** Choose the team ($120$ ways), then the captain among the three ($3$ ways): $$120\cdot3=360 .$$\n\n*Check the other way round:* the captain first ($10$ ways), then two others from nine ($\binom92=36$): $10\cdot36=360$ ✓\n\n**Answer:** $120$ and $360$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Сколько диагоналей у выпуклого двенадцатиугольника? Выведите общую формулу для $n$-угольника.',
         'en': r'How many diagonals has a convex dodecagon? Derive the general formula for an $n$-gon.'},
   'hint': {'ru': r'Посчитайте все отрезки между вершинами и вычтите стороны.',
            'en': r'Count all segments between vertices and subtract the sides.'},
   'sol': {'ru': r'Отрезков, соединяющих пары вершин, всего $\dbinom n2$. Из них $n$ штук — стороны, остальные диагонали: $$D=\binom n2-n=\frac{n(n-1)}{2}-n=\frac{n(n-1)-2n}{2}=\frac{n(n-3)}{2}.$$\n\nПри $n=12$: $$D=\frac{12\cdot9}{2}=54 .$$\n\n**Проверка на малых случаях.** Треугольник: $\tfrac{3\cdot0}{2}=0$ ✓ Четырёхугольник: $\tfrac{4\cdot1}{2}=2$ ✓ Пятиугольник: $\tfrac{5\cdot2}{2}=5$ ✓\n\n**Ответ:** $54$ диагонали; в общем случае $\dfrac{n(n-3)}{2}$.',
           'en': r'The segments joining pairs of vertices number $\dbinom n2$. Of these $n$ are sides, the rest diagonals: $$D=\binom n2-n=\frac{n(n-1)}{2}-n=\frac{n(n-1)-2n}{2}=\frac{n(n-3)}{2}.$$\n\nAt $n=12$: $$D=\frac{12\cdot9}{2}=54 .$$\n\n**Check on small cases.** Triangle: $\tfrac{3\cdot0}{2}=0$ ✓ Quadrilateral: $\tfrac{4\cdot1}{2}=2$ ✓ Pentagon: $\tfrac{5\cdot2}{2}=5$ ✓\n\n**Answer:** $54$ diagonals; in general $\dfrac{n(n-3)}{2}$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Сколькими способами можно рассадить пятерых человек в ряд на пяти стульях? А если двое из них обязательно должны сидеть рядом?',
         'en': r'In how many ways can five people be seated in a row of five chairs? And if two of them must sit next to each other?'},
   'hint': {'ru': r'Склейте двоих в один блок.', 'en': r'Glue the two into a single block.'},
   'sol': {'ru': r'**Без ограничений.** Это перестановки пяти предметов: $$5!=120 .$$\n\n**С условием «рядом».** Склеим двоих в один блок; тогда переставляем $4$ объекта (блок и трое остальных): $4!=24$ способа. Внутри блока двое могут сидеть в двух порядках: $2!=2$. По правилу произведения $$24\cdot2=48 .$$\n\n**Ответ:** $120$ и $48$.\n\n*Побочный вывод:* способов, где эти двое **не** рядом, ровно $120-48=72$.',
           'en': r'**No restriction.** These are permutations of five objects: $$5!=120 .$$\n\n**With the "adjacent" condition.** Glue the two into one block; then $4$ objects are permuted (the block and the other three): $4!=24$ ways. Inside the block the two can sit in $2!=2$ orders. By the product rule $$24\cdot2=48 .$$\n\n**Answer:** $120$ and $48$.\n\n*A by-product:* the number of seatings where those two are **not** adjacent is $120-48=72$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Сколько существует пятизначных чисел, у которых все цифры нечётные?',
         'en': r'How many five-digit numbers have all their digits odd?'},
   'hint': {'ru': r'Нечётных цифр пять; ноль среди них не встречается.',
            'en': r'There are five odd digits, and zero is not among them.'},
   'sol': {'ru': r'Нечётные цифры: $1,3,5,7,9$ — их пять.\n\nВажный момент: ноль нечётной цифрой не является, поэтому ограничение «первая цифра не ноль» выполняется автоматически, и все пять мест равноправны.\n\nПо правилу произведения $$5^{5}=3125 .$$\n\n**Ответ:** $3125$ чисел.',
           'en': r'The odd digits are $1,3,5,7,9$ — five of them.\n\nA point worth noting: zero is not an odd digit, so the rule "the leading digit is not zero" holds automatically and all five places are alike.\n\nBy the product rule $$5^{5}=3125 .$$\n\n**Answer:** $3125$ numbers.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Сколько подмножеств у множества из $n$ элементов (включая пустое и само множество)? Докажите ответ двумя способами.',
         'en': r'How many subsets has a set of $n$ elements (counting the empty one and the whole set)? Prove the answer in two ways.'},
   'hint': {'ru': r'Первый способ — по каждому элементу; второй — по размеру подмножества.',
            'en': r'One way is element by element; the other is by the size of the subset.'},
   'sol': {'ru': r'**Способ 1: по элементам.** Про каждый из $n$ элементов независимо принимаем решение — включать его в подмножество или нет. Это $n$ независимых выборов по $2$ варианта, значит по правилу произведения подмножеств $$2^{n}.$$\n\n**Способ 2: по размеру.** Подмножеств размера $k$ ровно $\dbinom nk$. Складывая по всем размерам, получаем $$\binom n0+\binom n1+\dots+\binom nn .$$\n\n**Вывод.** Оба способа считают одно и то же множество, поэтому $$\sum_{k=0}^{n}\binom nk=2^{n} . \qquad\blacksquare$$\n\n*Проверка при $n=3$:* $1+3+3+1=8=2^{3}$ ✓',
           'en': r'**Way 1: element by element.** For each of the $n$ elements decide independently whether to include it. That is $n$ independent choices with $2$ options each, so by the product rule there are $$2^{n}$$ subsets.\n\n**Way 2: by size.** There are exactly $\dbinom nk$ subsets of size $k$. Summing over the sizes gives $$\binom n0+\binom n1+\dots+\binom nn .$$\n\n**Conclusion.** Both ways count the same collection, so $$\sum_{k=0}^{n}\binom nk=2^{n} . \qquad\blacksquare$$\n\n*Check at $n=3$:* $1+3+3+1=8=2^{3}$ ✓'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Сколькими способами можно выбрать команду из четырёх человек из десяти, если двое конкретных участников не хотят быть в одной команде?',
         'en': r'In how many ways can a team of four be chosen from ten if two particular people refuse to be on the same team?'},
   'hint': {'ru': r'Проще посчитать «плохие» команды и вычесть.',
            'en': r'It is easier to count the "bad" teams and subtract.'},
   'sol': {'ru': r'**Всего команд.** $$\binom{10}{4}=\frac{10\cdot9\cdot8\cdot7}{4\cdot3\cdot2\cdot1}=210 .$$\n\n**Плохие команды** — те, где присутствуют оба конфликтующих участника. Они уже занимают два места, а оставшиеся два человека выбираются из восьми: $$\binom{8}{2}=28 .$$\n\n**Ответ.** $$210-28=182 .$$\n\n*Проверка прямым счётом:* команды, где нет ни одного из двоих, — $\binom84=70$; где ровно один из двоих — $2\cdot\binom83=2\cdot56=112$. Сумма $70+112=182$ ✓',
           'en': r'**All teams.** $$\binom{10}{4}=\frac{10\cdot9\cdot8\cdot7}{4\cdot3\cdot2\cdot1}=210 .$$\n\n**Bad teams** are those containing both of the two. They fill two places, and the other two members come from the remaining eight: $$\binom{8}{2}=28 .$$\n\n**Answer.** $$210-28=182 .$$\n\n*Check by direct count:* teams with neither of the two — $\binom84=70$; with exactly one of them — $2\cdot\binom83=2\cdot56=112$. The sum is $70+112=182$ ✓'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Сколькими способами можно расставить на шахматной доске $8\times8$ восемь ладей так, чтобы никакие две не били друг друга?',
         'en': r'In how many ways can eight rooks be placed on an $8\times8$ chessboard so that no two attack each other?'},
   'hint': {'ru': r'В каждой строке ровно одна ладья; какой столбец она занимает?',
            'en': r'Each row holds exactly one rook; which column does it take?'},
   'sol': {'ru': r'Ладьи бьют по строкам и столбцам, поэтому в каждой строке стоит не более одной ладьи. Ладей восемь и строк восемь, значит **ровно по одной в каждой строке**.\n\nТеперь опишем расстановку набором номеров столбцов: в первой строке ладья стоит в столбце $c_1$, во второй — в $c_2$, и так далее. Условие «не бьют по столбцам» означает, что все $c_i$ различны.\n\nЗначит расстановки — это в точности перестановки чисел $1,\dots,8$, и их $$8!=40\,320 .$$\n\n**Ответ:** $40\,320$ способов.\n\n*Замечание.* Если ладьи неразличимы, ответ тот же: мы считали позиции, а не «кто где стоит». Для доски $n\times n$ ответ равен $n!$.',
           'en': r'Rooks attack along rows and columns, so each row holds at most one rook. There are eight rooks and eight rows, hence **exactly one in each row**.\n\nDescribe a placement by the column numbers: the rook in row one stands in column $c_1$, in row two in column $c_2$, and so on. "No two share a column" means all the $c_i$ are different.\n\nSo the placements are exactly the permutations of $1,\dots,8$, and there are $$8!=40\,320 .$$\n\n**Answer:** $40\,320$ ways.\n\n*Remark.* If the rooks are indistinguishable the answer is the same: we counted positions, not "who stands where". For an $n\times n$ board the answer is $n!$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Сколько прямоугольников (со сторонами по линиям сетки) можно найти на шахматной доске $8\times8$?',
         'en': r'How many rectangles (with sides along the grid lines) can be found on an $8\times8$ chessboard?'},
   'hint': {'ru': r'Прямоугольник задаётся двумя вертикальными и двумя горизонтальными линиями.',
            'en': r'A rectangle is determined by two vertical and two horizontal lines.'},
   'sol': {'ru': r'Доска $8\times8$ ограничена $9$ вертикальными и $9$ горизонтальными линиями сетки.\n\nЛюбой прямоугольник однозначно задаётся выбором **двух** вертикальных линий (его левой и правой сторон) и **двух** горизонтальных (нижней и верхней). Обратно, любая такая пара пар даёт прямоугольник.\n\nПо правилу произведения $$\binom92\cdot\binom92=36\cdot36=1296 .$$\n\n**Ответ:** $1296$ прямоугольников.\n\n*Побочный счёт:* квадратов среди них $$1^{2}+2^{2}+\dots+8^{2}=\frac{8\cdot9\cdot17}{6}=204 .$$',
           'en': r'An $8\times8$ board is bounded by $9$ vertical and $9$ horizontal grid lines.\n\nEvery rectangle is determined uniquely by choosing **two** vertical lines (its left and right sides) and **two** horizontal ones (bottom and top). Conversely any such pair of pairs gives a rectangle.\n\nBy the product rule $$\binom92\cdot\binom92=36\cdot36=1296 .$$\n\n**Answer:** $1296$ rectangles.\n\n*A side count:* the squares among them number $$1^{2}+2^{2}+\dots+8^{2}=\frac{8\cdot9\cdot17}{6}=204 .$$'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Сколько существует четырёхзначных чисел, в записи которых есть хотя бы одна цифра $7$?',
         'en': r'How many four-digit numbers contain at least one digit $7$?'},
   'hint': {'ru': r'Считайте через дополнение.', 'en': r'Count through the complement.'},
   'sol': {'ru': r'**Всего четырёхзначных чисел.** От $1000$ до $9999$, то есть $$9\cdot10\cdot10\cdot10=9000 .$$\n\n**Чисел без семёрки.** Первая цифра: не ноль и не семь, значит $8$ вариантов. Остальные три: любые, кроме семёрки, — по $9$ вариантов: $$8\cdot9^{3}=8\cdot729=5832 .$$\n\n**Ответ.** $$9000-5832=3168 .$$\n\n*Почему через дополнение.* Прямой счёт «хотя бы одна семёрка» потребовал бы формулы включений-исключений по четырём позициям; счёт «ни одной» — одно умножение.',
           'en': r'**All four-digit numbers.** From $1000$ to $9999$, that is $$9\cdot10\cdot10\cdot10=9000 .$$\n\n**Numbers with no seven.** The leading digit is neither zero nor seven: $8$ options. Each of the other three is anything but seven: $9$ options: $$8\cdot9^{3}=8\cdot729=5832 .$$\n\n**Answer.** $$9000-5832=3168 .$$\n\n*Why the complement.* Counting "at least one seven" directly would need inclusion–exclusion over four positions; counting "none" is a single multiplication.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Докажите комбинаторно тождества $$\binom nk=\binom{n}{n-k}\qquad\text{и}\qquad \binom nk+\binom{n}{k+1}=\binom{n+1}{k+1}.$$',
         'en': r'Prove combinatorially the identities $$\binom nk=\binom{n}{n-k}\qquad\text{and}\qquad \binom nk+\binom{n}{k+1}=\binom{n+1}{k+1}.$$'},
   'hint': {'ru': r'Первое — соответствие «выбранные ↔ оставленные»; второе — разбор по одному отмеченному элементу.',
            'en': r'The first is the "chosen ↔ left behind" correspondence; the second splits on one marked element.'},
   'sol': {'ru': r'**Первое тождество.** Каждому набору из $k$ выбранных предметов сопоставим набор из $n-k$ **невыбранных**. Это соответствие взаимно однозначно: по выбранным однозначно восстанавливаются невыбранные и наоборот. Значит наборов размера $k$ ровно столько же, сколько наборов размера $n-k$: $$\binom nk=\binom{n}{n-k}. \qquad\square$$\n\n**Второе тождество.** Посчитаем число способов выбрать $k+1$ предмет из $n+1$. Отметим один предмет и назовём его особым; все выборки разбиваются на два непересекающихся класса.\n\n*Особый взят.* Тогда остальные $k$ предметов выбираются из $n$ обычных: $\dbinom nk$ способов.\n\n*Особый не взят.* Тогда все $k+1$ выбираются из $n$ обычных: $\dbinom{n}{k+1}$ способов.\n\nКлассы не пересекаются и покрывают всё, поэтому по правилу суммы $$\binom{n+1}{k+1}=\binom nk+\binom{n}{k+1}. \qquad\blacksquare$$\n\n*Замечание.* Второе тождество и есть закон построения треугольника Паскаля: каждое число равно сумме двух соседей сверху.',
           'en': r'**First identity.** To each set of $k$ chosen objects associate the set of the $n-k$ **not** chosen. This is a bijection: the chosen determine the unchosen and back. So there are as many sets of size $k$ as of size $n-k$: $$\binom nk=\binom{n}{n-k}. \qquad\square$$\n\n**Second identity.** Count the ways to choose $k+1$ objects out of $n+1$. Mark one object as special; the choices fall into two disjoint classes.\n\n*The special one is taken.* Then the other $k$ come from the $n$ ordinary ones: $\dbinom nk$ ways.\n\n*It is not taken.* Then all $k+1$ come from the $n$ ordinary ones: $\dbinom{n}{k+1}$ ways.\n\nThe classes are disjoint and exhaust everything, so the sum rule gives $$\binom{n+1}{k+1}=\binom nk+\binom{n}{k+1}. \qquad\blacksquare$$\n\n*Remark.* The second identity is exactly the building law of Pascal’s triangle: each entry is the sum of its two upstairs neighbours.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Сколькими способами можно пройти по клеткам из левого нижнего угла прямоугольника $5\times4$ в правый верхний, двигаясь только вправо и вверх? А если обязательно нужно пройти через центральный узел $(2,2)$?',
         'en': r'In how many ways can one go from the bottom-left corner of a $5\times4$ rectangle to the top-right one, moving only right and up? And if the path must pass through the node $(2,2)$?'},
   'hint': {'ru': r'Путь — это слово из букв «вправо» и «вверх».',
            'en': r'A path is a word made of the letters "right" and "up".'},
   'sol': {'ru': r'**Все пути.** Любой путь состоит из $5$ шагов вправо и $4$ шагов вверх, всего $9$ шагов. Путь определяется тем, на каких из девяти мест стоят шаги вверх: $$\binom94=\frac{9\cdot8\cdot7\cdot6}{4\cdot3\cdot2\cdot1}=126 .$$\n\n**Через узел $(2,2)$.** Разобьём путь на две независимые части.\n\n*От $(0,0)$ до $(2,2)$:* два шага вправо и два вверх, значит $\dbinom42=6$ путей.\n\n*От $(2,2)$ до $(5,4)$:* три шага вправо и два вверх, значит $\dbinom52=10$ путей.\n\nПо правилу произведения $$6\cdot10=60 .$$\n\n**Ответ:** $126$ всего и $60$ через данный узел.',
           'en': r'**All paths.** Every path uses $5$ right steps and $4$ up steps, nine steps in all, and is determined by which of the nine places hold the up steps: $$\binom94=\frac{9\cdot8\cdot7\cdot6}{4\cdot3\cdot2\cdot1}=126 .$$\n\n**Through the node $(2,2)$.** Split the path into two independent halves.\n\n*From $(0,0)$ to $(2,2)$:* two right and two up steps, so $\dbinom42=6$ paths.\n\n*From $(2,2)$ to $(5,4)$:* three right and two up steps, so $\dbinom52=10$ paths.\n\nBy the product rule $$6\cdot10=60 .$$\n\n**Answer:** $126$ in all, and $60$ through that node.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Сколько существует шестизначных чисел, сумма цифр которых равна $5$?',
         'en': r'How many six-digit numbers have digit sum $5$?'},
   'hint': {'ru': r'Первая цифра не ноль — вычтите из неё единицу и примените шары и перегородки.',
            'en': r'The leading digit is non-zero — subtract one from it and use stars and bars.'},
   'sol': {'ru': r'Пусть цифры равны $d_1,\dots,d_6$, причём $d_1\ge1$ и $$d_1+d_2+\dots+d_6=5 .$$\n\n**Убираем ограничение.** Положим $e_1=d_1-1\ge0$, остальные $e_i=d_i$. Тогда $$e_1+e_2+\dots+e_6=4,\qquad e_i\ge0 .$$\n\n**Считаем.** Число неотрицательных решений равно $$\binom{4+6-1}{6-1}=\binom95=\binom94=126 .$$\n\n**Проверка на ограничение $d_i\le9$.** Сумма всех цифр равна $5$, поэтому ни одна цифра не может превысить $5$ — условие «цифра не больше девяти» выполняется автоматически и ничего вычитать не нужно.\n\n**Ответ:** $126$ чисел.',
           'en': r'Let the digits be $d_1,\dots,d_6$ with $d_1\ge1$ and $$d_1+d_2+\dots+d_6=5 .$$\n\n**Remove the restriction.** Put $e_1=d_1-1\ge0$ and $e_i=d_i$ otherwise. Then $$e_1+e_2+\dots+e_6=4,\qquad e_i\ge0 .$$\n\n**Count.** The number of non-negative solutions is $$\binom{4+6-1}{6-1}=\binom95=\binom94=126 .$$\n\n**Check the bound $d_i\le9$.** The digits sum to $5$, so none can exceed $5$ — the "at most nine" condition holds automatically and nothing needs subtracting.\n\n**Answer:** $126$ numbers.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'В компании каждый пожал руку каждому ровно один раз, всего было $66$ рукопожатий. Сколько человек в компании?',
         'en': r'In a group everybody shook hands with everybody else exactly once, making $66$ handshakes in all. How many people were there?'},
   'hint': {'ru': r'Рукопожатие — это пара людей.',
            'en': r'A handshake is a pair of people.'},
   'sol': {'ru': r'Каждое рукопожатие — это неупорядоченная пара людей, поэтому при $n$ участниках рукопожатий $$\binom n2=\frac{n(n-1)}{2}.$$\n\nРешаем уравнение $$\frac{n(n-1)}{2}=66\quad\Longrightarrow\quad n^{2}-n-132=0 .$$ Дискриминант $1+528=529=23^{2}$, корни $$n=\frac{1\pm23}{2}=12\ \text{или}\ -11 .$$ Отрицательный корень отбрасываем.\n\n**Проверка:** $\dfrac{12\cdot11}{2}=66$ ✓\n\n**Ответ:** $12$ человек.',
           'en': r'Each handshake is an unordered pair of people, so with $n$ participants there are $$\binom n2=\frac{n(n-1)}{2}$$ handshakes.\n\nSolve $$\frac{n(n-1)}{2}=66\quad\Longrightarrow\quad n^{2}-n-132=0 .$$ The discriminant is $1+528=529=23^{2}$ and the roots are $$n=\frac{1\pm23}{2}=12\ \text{or}\ -11 ,$$ the negative one being discarded.\n\n**Check:** $\dfrac{12\cdot11}{2}=66$ ✓\n\n**Answer:** $12$ people.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Сколькими способами можно разбить группу из $8$ человек на $4$ пары?',
         'en': r'In how many ways can a group of $8$ people be split into $4$ pairs?'},
   'hint': {'ru': r'Считайте по очереди, начиная с человека с наименьшим номером.',
            'en': r'Count step by step, starting from the person with the smallest number.'},
   'sol': {'ru': r'**Способ 1: по очереди.** Возьмём человека с наименьшим номером. Ему можно подобрать пару $7$ способами. Из оставшихся шести снова возьмём наименьшего — ему пара находится $5$ способами. Затем $3$ и наконец $1$. По правилу произведения $$7\cdot5\cdot3\cdot1=105 .$$\n\nВажно, что мы каждый раз берём **фиксированного** человека (наименьшего из оставшихся) — тогда порядок пар не участвует в счёте и двойного учёта не возникает.\n\n**Способ 2: через факториалы.** Выстроим всех восьмерых в ряд ($8!$ способов) и объявим парами первых двух, следующих двух и так далее. Одно и то же разбиение получается многократно: пары можно переставить между собой ($4!$ способов) и внутри каждой пары поменять людей местами ($2^{4}$ способов). Значит $$\frac{8!}{4!\cdot2^{4}}=\frac{40\,320}{24\cdot16}=\frac{40\,320}{384}=105\ \checkmark$$\n\n**Ответ:** $105$ способов. *В общем виде* для $2n$ человек ответ равен $(2n-1)!!=1\cdot3\cdot5\cdots(2n-1)$.',
           'en': r'**Way 1: step by step.** Take the person with the smallest number. A partner for them can be chosen in $7$ ways. Among the remaining six take the smallest again — a partner in $5$ ways. Then $3$, then $1$. By the product rule $$7\cdot5\cdot3\cdot1=105 .$$\n\nThe point is that we always pick a **fixed** person (the smallest one left) — the order of the pairs then never enters the count and nothing is counted twice.\n\n**Way 2: through factorials.** Line all eight up ($8!$ ways) and declare the first two a pair, the next two a pair, and so on. Each splitting arises many times: the pairs may be permuted ($4!$ ways) and the two people inside each pair swapped ($2^{4}$ ways). So $$\frac{8!}{4!\cdot2^{4}}=\frac{40\,320}{24\cdot16}=\frac{40\,320}{384}=105\ \checkmark$$\n\n**Answer:** $105$ ways. *In general* for $2n$ people the answer is $(2n-1)!!=1\cdot3\cdot5\cdots(2n-1)$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 3,
   'q': {'ru': r'Докажите двойным подсчётом тождество $$\sum_{k=0}^{n}k\binom nk=n\,2^{\,n-1}.$$',
         'en': r'Prove by double counting the identity $$\sum_{k=0}^{n}k\binom nk=n\,2^{\,n-1}.$$'},
   'hint': {'ru': r'Считайте пары «подмножество и отмеченный в нём элемент».',
            'en': r'Count pairs "a subset together with one marked element of it".'},
   'sol': {'ru': r'Рассмотрим множество $X$ из $n$ элементов и посчитаем двумя способами количество **пар** вида $$\bigl(S,\ x\bigr),\qquad\text{где }S\subseteq X\text{ и }x\in S,$$ то есть «подмножество вместе с отмеченным элементом внутри него».\n\n**Первый способ: сначала подмножество.** Зафиксируем размер $k$. Подмножеств размера $k$ ровно $\dbinom nk$, и в каждом можно отметить элемент $k$ способами. Складывая по всем размерам, получаем $$\sum_{k=0}^{n}k\binom nk .$$\n\n**Второй способ: сначала отмеченный элемент.** Выберем сперва элемент $x$ — это $n$ способов. Затем нужно выбрать остальную часть подмножества $S$ из оставшихся $n-1$ элементов: каждый из них независимо либо входит в $S$, либо нет, что даёт $2^{\,n-1}$ вариантов. По правилу произведения пар $$n\,2^{\,n-1}.$$\n\n**Вывод.** Оба способа считают одно и то же множество пар, поэтому $$\sum_{k=0}^{n}k\binom nk=n\,2^{\,n-1}. \qquad\blacksquare$$\n\n*Проверка при $n=3$:* слева $0\cdot1+1\cdot3+2\cdot3+3\cdot1=0+3+6+3=12$; справа $3\cdot4=12$ ✓',
           'en': r'Take a set $X$ of $n$ elements and count in two ways the number of **pairs** $$\bigl(S,\ x\bigr),\qquad\text{where }S\subseteq X\text{ and }x\in S,$$ that is, "a subset together with a marked element inside it".\n\n**First way: the subset first.** Fix a size $k$. There are $\dbinom nk$ subsets of that size, and in each the element can be marked in $k$ ways. Summing over the sizes gives $$\sum_{k=0}^{n}k\binom nk .$$\n\n**Second way: the marked element first.** Choose $x$ first — $n$ ways. Then the rest of $S$ is chosen from the remaining $n-1$ elements: each is independently in or out, giving $2^{\,n-1}$ options. By the product rule the number of pairs is $$n\,2^{\,n-1}.$$\n\n**Conclusion.** Both ways count the same set of pairs, so $$\sum_{k=0}^{n}k\binom nk=n\,2^{\,n-1}. \qquad\blacksquare$$\n\n*Check at $n=3$:* the left side is $0\cdot1+1\cdot3+2\cdot3+3\cdot1=12$; the right side $3\cdot4=12$ ✓'}},

  {'src': 'Тождество Вандермонда / Vandermonde, classic', 'lvl': 3,
   'q': {'ru': r'Докажите тождество Вандермонда $$\sum_{k=0}^{r}\binom mk\binom{n}{r-k}=\binom{m+n}{r},$$ и выведите из него частный случай $$\sum_{k=0}^{n}\binom nk^{2}=\binom{2n}{n}.$$',
         'en': r'Prove Vandermonde’s identity $$\sum_{k=0}^{r}\binom mk\binom{n}{r-k}=\binom{m+n}{r},$$ and deduce the special case $$\sum_{k=0}^{n}\binom nk^{2}=\binom{2n}{n}.$$'},
   'hint': {'ru': r'Разделите $m+n$ предметов на две группы и разберите случаи по числу взятых из первой.',
            'en': r'Split the $m+n$ objects into two groups and split into cases by how many come from the first.'},
   'sol': {'ru': r'**Постановка.** Пусть в комнате $m$ мальчиков и $n$ девочек, и надо выбрать делегацию из $r$ человек. Посчитаем число способов двумя путями.\n\n**Первый способ.** Все $m+n$ человек равноправны, поэтому делегаций ровно $$\binom{m+n}{r}.$$\n\n**Второй способ: разбор случаев.** Пусть в делегацию попало ровно $k$ мальчиков, где $k$ пробегает значения от $0$ до $r$. Тогда мальчиков выбираем $\dbinom mk$ способами, а девочек — оставшихся $r-k$ человек — $\dbinom{n}{r-k}$ способами. По правилу произведения в этом случае $\dbinom mk\dbinom{n}{r-k}$ делегаций.\n\nСлучаи с разными $k$ не пересекаются (число мальчиков определено однозначно) и покрывают все делегации, поэтому по правилу суммы $$\sum_{k=0}^{r}\binom mk\binom{n}{r-k}=\binom{m+n}{r}. \qquad\blacksquare$$\n\n*(Слагаемые с $k>m$ или $r-k>n$ равны нулю, потому что таких выборов не существует — формула это учитывает автоматически.)*\n\n**Частный случай.** Положим $m=n$ и $r=n$: $$\sum_{k=0}^{n}\binom nk\binom{n}{n-k}=\binom{2n}{n}.$$ По симметрии $\dbinom{n}{n-k}=\dbinom nk$, поэтому левая часть равна $\displaystyle\sum_{k=0}^{n}\binom nk^{2}$, что и требовалось.\n\n*Проверка при $n=3$:* $1+9+9+1=20=\dbinom63$ ✓',
           'en': r'**The setting.** Suppose a room holds $m$ boys and $n$ girls, and a delegation of $r$ people is to be chosen. Count the ways twice.\n\n**First way.** All $m+n$ people are alike for this purpose, so there are $$\binom{m+n}{r}$$ delegations.\n\n**Second way: cases.** Suppose exactly $k$ boys are chosen, where $k$ runs from $0$ to $r$. The boys can be chosen in $\dbinom mk$ ways and the girls — the remaining $r-k$ people — in $\dbinom{n}{r-k}$ ways. By the product rule this case gives $\dbinom mk\dbinom{n}{r-k}$ delegations.\n\nDifferent $k$ give disjoint cases (the number of boys is determined) covering every delegation, so the sum rule gives $$\sum_{k=0}^{r}\binom mk\binom{n}{r-k}=\binom{m+n}{r}. \qquad\blacksquare$$\n\n*(Terms with $k>m$ or $r-k>n$ vanish, since no such choice exists — the formula handles that automatically.)*\n\n**The special case.** Put $m=n$ and $r=n$: $$\sum_{k=0}^{n}\binom nk\binom{n}{n-k}=\binom{2n}{n}.$$ By symmetry $\dbinom{n}{n-k}=\dbinom nk$, so the left side is $\displaystyle\sum_{k=0}^{n}\binom nk^{2}$, as required.\n\n*Check at $n=3$:* $1+9+9+1=20=\dbinom63$ ✓'}},

  {'src': 'Классическая задача / Classic', 'lvl': 3,
   'q': {'ru': r'Сколько существует последовательностей из $n$ единиц и $n$ минус-единиц, у которых **все** частичные суммы неотрицательны? (Иначе: сколькими способами можно расставить $n$ открывающих и $n$ закрывающих скобок так, чтобы получилась правильная скобочная последовательность?)',
         'en': r'How many sequences of $n$ ones and $n$ minus-ones have **all** partial sums non-negative? (Equivalently: in how many ways can $n$ opening and $n$ closing brackets be arranged into a correct bracket sequence?)'},
   'hint': {'ru': r'Посчитайте «плохие» последовательности, отразив хвост после первого нарушения.',
            'en': r'Count the "bad" sequences by reflecting the tail after the first violation.'},
   'sol': {'ru': r'**Всего последовательностей.** Расставить $n$ единиц среди $2n$ мест можно $\dbinom{2n}{n}$ способами.\n\n**Плохие последовательности.** Назовём последовательность плохой, если в какой-то момент частичная сумма стала отрицательной. Рассмотрим **первый** такой момент — позицию $t$, на которой сумма впервые равна $-1$.\n\n**Приём отражения.** Заменим все члены на местах $1,\dots,t$ на противоположные (единицы на минус-единицы и наоборот). Посмотрим, что стало с балансом. До отражения на первых $t$ местах сумма была $-1$; после отражения она стала $+1$. Общая сумма всей последовательности была $0$, значит стала $2$. Это означает, что в новой последовательности единиц на две больше, чем минус-единиц: $$n+1\ \text{единиц и}\ n-1\ \text{минус-единиц}.$$\n\n**Это соответствие обратимо.** По любой последовательности из $n+1$ единиц и $n-1$ минус-единиц восстанавливается плохая: её частичная сумма в конце равна $+2>0$, поэтому найдётся первый момент, когда сумма равна $+1$; отразив начало до этого момента, получим исходную плохую последовательность. Значит соответствие взаимно однозначно, и плохих последовательностей ровно столько, сколько последовательностей из $n+1$ единиц и $n-1$ минус-единиц: $$\binom{2n}{n+1}.$$\n\n**Ответ.** $$\binom{2n}{n}-\binom{2n}{n+1}=\binom{2n}{n}\left(1-\frac{n}{n+1}\right)=\frac{1}{n+1}\binom{2n}{n}.$$\n\nЗдесь мы воспользовались тем, что $$\frac{\binom{2n}{n+1}}{\binom{2n}{n}}=\frac{n!\,n!}{(n+1)!\,(n-1)!}=\frac{n}{n+1}.$$\n\n**Ответ:** $C_n=\dfrac{1}{n+1}\dbinom{2n}{n}$ — это **числа Каталана**.\n\n*Первые значения:* $C_1=1$, $C_2=2$, $C_3=5$, $C_4=14$, $C_5=42$.\n\n*Проверка при $n=3$:* правильные скобочные последовательности длины $6$ — это $$((())),\ (()()),\ (())(),\ ()(()),\ ()()()$$ — ровно пять ✓',
           'en': r'**All sequences.** Placing $n$ ones among $2n$ positions can be done in $\dbinom{2n}{n}$ ways.\n\n**Bad sequences.** Call a sequence bad if at some moment a partial sum turns negative. Look at the **first** such moment — the position $t$ where the sum first equals $-1$.\n\n**The reflection trick.** Flip every term in positions $1,\dots,t$ (ones become minus-ones and back). What happens to the balance? Before the flip the first $t$ terms summed to $-1$; afterwards they sum to $+1$. The whole sequence summed to $0$, so it now sums to $2$. That means the new sequence has two more ones than minus-ones: $$n+1\ \text{ones and}\ n-1\ \text{minus-ones}.$$\n\n**The correspondence is reversible.** From any sequence of $n+1$ ones and $n-1$ minus-ones a bad one can be recovered: its total is $+2>0$, so there is a first moment when the partial sum equals $+1$; flipping the start up to that moment returns the original bad sequence. So the correspondence is a bijection, and the bad sequences number exactly as many as the sequences of $n+1$ ones and $n-1$ minus-ones: $$\binom{2n}{n+1}.$$\n\n**Answer.** $$\binom{2n}{n}-\binom{2n}{n+1}=\binom{2n}{n}\left(1-\frac{n}{n+1}\right)=\frac{1}{n+1}\binom{2n}{n},$$ using $$\frac{\binom{2n}{n+1}}{\binom{2n}{n}}=\frac{n!\,n!}{(n+1)!\,(n-1)!}=\frac{n}{n+1}.$$\n\n**Answer:** $C_n=\dfrac{1}{n+1}\dbinom{2n}{n}$ — the **Catalan numbers**.\n\n*First values:* $C_1=1$, $C_2=2$, $C_3=5$, $C_4=14$, $C_5=42$.\n\n*Check at $n=3$:* the correct bracket sequences of length $6$ are $$((())),\ (()()),\ (())(),\ ()(()),\ ()()()$$ — exactly five ✓'}},

  {'src': 'Классическая задача / Classic', 'lvl': 3,
   'q': {'ru': r'Сколько существует шестизначных чисел, в записи которых цифры идут в **строго возрастающем** порядке? А в нестрого возрастающем?',
         'en': r'How many six-digit numbers have their digits in **strictly increasing** order? And in non-decreasing order?'},
   'hint': {'ru': r'В строгом случае число полностью определяется набором цифр.',
            'en': r'In the strict case the number is determined by the set of its digits.'},
   'sol': {'ru': r'**Строго возрастающие.** Цифры различны и идут по возрастанию, поэтому число полностью определяется **набором** своих цифр: порядок восстанавливается однозначно.\n\nЦифра ноль участвовать не может: она была бы наименьшей и оказалась бы первой, а старшая цифра не может быть нулём. Значит выбираем $6$ различных цифр из девяти ($1,\dots,9$): $$\binom96=\binom93=\frac{9\cdot8\cdot7}{6}=84 .$$\n\n**Нестрого возрастающие.** Теперь цифры могут повторяться, и число определяется тем, **сколько раз** встречается каждая из цифр $1,\dots,9$ (ноль по-прежнему невозможен: он был бы первым). Обозначим через $x_i$ количество цифр $i$; тогда $$x_1+x_2+\dots+x_9=6,\qquad x_i\ge0 .$$ По формуле шаров и перегородок число решений равно $$\binom{6+9-1}{9-1}=\binom{14}{8}=\binom{14}{6}=3003 .$$\n\n**Ответ:** $84$ строго возрастающих и $3003$ нестрого возрастающих.\n\n*Замечание.* Первый ответ — это сочетания, второй — сочетания с повторениями. Разница между ними и есть разница между «выбрать набор» и «выбрать мультимножество».',
           'en': r'**Strictly increasing.** The digits are distinct and increasing, so the number is determined completely by the **set** of its digits: the order is forced.\n\nThe digit zero cannot occur: it would be the smallest and hence first, but a leading digit cannot be zero. So we choose $6$ distinct digits out of nine ($1,\dots,9$): $$\binom96=\binom93=\frac{9\cdot8\cdot7}{6}=84 .$$\n\n**Non-decreasing.** Now digits may repeat, and the number is determined by **how many times** each of $1,\dots,9$ occurs (zero is still impossible: it would come first). Writing $x_i$ for the number of copies of the digit $i$, $$x_1+x_2+\dots+x_9=6,\qquad x_i\ge0 .$$ Stars and bars gives $$\binom{6+9-1}{9-1}=\binom{14}{8}=\binom{14}{6}=3003 .$$\n\n**Answer:** $84$ strictly increasing and $3003$ non-decreasing.\n\n*Remark.* The first answer is combinations, the second combinations with repetition — the difference between choosing a set and choosing a multiset.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'В группе $40$ студентов: английский знают $25$, немецкий — $20$, французский — $15$; английский и немецкий — $12$, английский и французский — $8$, немецкий и французский — $6$, а все три языка — $4$ студента. Сколько студентов не знают ни одного из этих языков?',
         'en': r'A group of $40$ students: $25$ know English, $20$ German, $15$ French; $12$ know English and German, $8$ English and French, $6$ German and French, and $4$ know all three. How many know none of the three languages?'},
   'hint': {'ru': r'Формула включений-исключений для трёх множеств.',
            'en': r'Inclusion–exclusion for three sets.'},
   'sol': {'ru': r'Обозначим через $A$, $H$, $\Phi$ множества знающих английский, немецкий и французский.\n\nПо формуле включений-исключений $$|A\cup H\cup\Phi|=|A|+|H|+|\Phi|-|A\cap H|-|A\cap\Phi|-|H\cap\Phi|+|A\cap H\cap\Phi| .$$ Подставляем: $$25+20+15-12-8-6+4=38 .$$\n\nЗначит хотя бы один язык знают $38$ студентов, а не знают ни одного $$40-38=2 .$$\n\n**Ответ:** $2$ студента.\n\n*Проверка по частям.* Ровно три языка знают $4$ человека. Ровно два языка: по каждой паре надо вычесть тех, кто знает все три, — получаем $(12-4)+(8-4)+(6-4)=8+4+2=14$. Ровно один язык: например, только английский знают $25-12-8+4=9$ человек (вычли обе пары и вернули тройное пересечение, посчитанное дважды); аналогично только немецкий — $20-12-6+4=6$, только французский — $15-8-6+4=5$; всего $9+6+5=20$. Итог: $4+14+20=38$ ✓',
           'en': r'Write $A$, $G$, $F$ for the sets of students knowing English, German and French.\n\nInclusion–exclusion gives $$|A\cup G\cup F|=|A|+|G|+|F|-|A\cap G|-|A\cap F|-|G\cap F|+|A\cap G\cap F| ,$$ that is $$25+20+15-12-8-6+4=38 .$$\n\nSo $38$ students know at least one language, and $$40-38=2$$ know none.\n\n**Answer:** $2$ students.\n\n*Check by parts.* Exactly three languages: $4$ students. Exactly two: for each pair subtract those knowing all three, giving $(12-4)+(8-4)+(6-4)=8+4+2=14$. Exactly one: English only is $25-12-8+4=9$ (both pairs subtracted, the triple intersection added back once because it was removed twice); likewise German only is $20-12-6+4=6$ and French only $15-8-6+4=5$, so $9+6+5=20$. In total $4+14+20=38$ ✓'}},
 ],
}
