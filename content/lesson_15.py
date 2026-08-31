# -*- coding: utf-8 -*-
"""Topic 15 — Logic, proofs and invariants."""

# ---- chessboard with two opposite corners removed ----
_c = []
_S = 30
for i in range(8):
    for j in range(8):
        if (i, j) in ((0, 0), (7, 7)):
            continue
        dark = (i + j) % 2 == 1
        _c.append('<rect x="%d" y="%d" width="%d" height="%d" %s/>'
                  % (20 + j * _S, 20 + i * _S, _S, _S,
                     'fill="var(--t)" stroke="var(--line)"' if dark
                     else 'fill="var(--paper)" stroke="var(--line)"'))
for i, j in ((0, 0), (7, 7)):
    _c.append('<rect x="%d" y="%d" width="%d" height="%d" fill="none" '
              'stroke="var(--c)" stroke-width="2" stroke-dasharray="4 3"/>'
              % (20 + j * _S, 20 + i * _S, _S, _S))
FIG_BOARD = ('<svg viewBox="0 0 280 280" role="img" '
             'aria-label="Chessboard with two opposite corners removed">%s</svg>' % ''.join(_c))

FIG_UNITTRI = r'''<svg viewBox="0 0 260 200" role="img" aria-label="Unit equilateral triangle">
<path class="ln" d="M40 165 L220 165 L130 9 Z"/>
<circle class="ptc" cx="40" cy="165" r="5"/><circle class="ptc" cx="220" cy="165" r="5"/>
<circle class="ptc" cx="130" cy="9" r="5"/>
<text class="sm" x="130" y="184" text-anchor="middle">1</text>
<text class="sm" x="66" y="86">1</text><text class="sm" x="186" y="86">1</text>
</svg>'''

LESSON = {
 'n': 15,
 'cat': 'comb',
 'title': {'ru': 'Логика, доказательства и инварианты', 'en': 'Logic, proofs and invariants'},
 'sub': {'ru': 'Отрицание и импликация, доказательство от противного, индукция, инварианты и раскраски — язык, на котором пишут решения.',
         'en': 'Negation and implication, proof by contradiction, induction, invariants and colourings — the language solutions are written in.'},
 'goals': {
  'ru': [
   r'Строить отрицание утверждения и отличать обратное от противоположного.',
   r'Проводить доказательство от противного и доказательство по индукции без пробелов.',
   r'Находить инвариант — величину, не меняющуюся при разрешённых операциях.',
   r'Пользоваться раскрасками и соображениями чётности.',
  ],
  'en': [
   r'Negate a statement, and tell the converse from the contrapositive.',
   r'Run a proof by contradiction and a proof by induction with no gaps.',
   r'Find an invariant — a quantity unchanged by the allowed moves.',
   r'Use colourings and parity arguments.',
  ]},

 'sections': [

  # ------------------------------------------------------------------ 1
  {'h': {'ru': 'Язык утверждений', 'en': 'The language of statements'},
   'blocks': [
    {'t': 'p',
     'text': {
      'ru': r'Прежде чем что-то доказывать, надо точно понимать, **что именно** доказывается. Половина ошибок на олимпиадах — не в вычислениях, а в неверно понятом или неверно отрицаемом условии.',
      'en': r'Before proving anything one must know exactly **what** is being proved. Half the mistakes in competitions are not in the computation but in a misread or mis-negated statement.'}},

    {'t': 'def',
     'name': {'ru': 'Импликация', 'en': 'Implication'},
     'text': {
      'ru': r'Запись $A\Rightarrow B$ («если $A$, то $B$») означает: **всякий раз, когда** верно $A$, верно и $B$. Она ничего не говорит о случаях, когда $A$ ложно.',
      'en': r'The statement $A\Rightarrow B$ ("if $A$ then $B$") means: **whenever** $A$ holds, $B$ holds too. It says nothing about the cases where $A$ is false.'}},

    {'t': 'table',
     'head': {'ru': ['Название', 'Запись', 'Пример'],
              'en': ['Name', 'Form', 'Example']},
     'rows': {
      'ru': [
       [r'исходное', r'$A\Rightarrow B$', r'если $n$ делится на $6$, то $n$ чётно — **верно**'],
       [r'обратное', r'$B\Rightarrow A$', r'если $n$ чётно, то $n$ делится на $6$ — **неверно**'],
       [r'противоположное', r'$\lnot A\Rightarrow\lnot B$', r'если $n$ не делится на $6$, то $n$ нечётно — **неверно**'],
       [r'контрапозиция', r'$\lnot B\Rightarrow\lnot A$', r'если $n$ нечётно, то $n$ не делится на $6$ — **верно**'],
      ],
      'en': [
       [r'the statement', r'$A\Rightarrow B$', r'if $n$ is divisible by $6$ then $n$ is even — **true**'],
       [r'the converse', r'$B\Rightarrow A$', r'if $n$ is even then $n$ is divisible by $6$ — **false**'],
       [r'the inverse', r'$\lnot A\Rightarrow\lnot B$', r'if $n$ is not divisible by $6$ then $n$ is odd — **false**'],
       [r'the contrapositive', r'$\lnot B\Rightarrow\lnot A$', r'if $n$ is odd then $n$ is not divisible by $6$ — **true**'],
      ]}},

    {'t': 'idea',
     'name': {'ru': 'Контрапозиция всегда равносильна', 'en': 'The contrapositive is always equivalent'},
     'text': {
      'ru': r'Утверждение $A\Rightarrow B$ и его контрапозиция $\lnot B\Rightarrow\lnot A$ — это **одно и то же** утверждение, записанное по-разному. Обратное же и противоположное — совсем другие утверждения, и из исходного они не следуют.\n\nЭто рабочий приём: если доказать $A\Rightarrow B$ трудно, попробуйте доказать $\lnot B\Rightarrow\lnot A$. Например, «если $n^{2}$ чётно, то $n$ чётно» неудобно доказывать напрямую, зато контрапозиция «если $n$ нечётно, то $n^{2}$ нечётно» очевидна: $(2k+1)^{2}=4k^{2}+4k+1$.',
      'en': r'A statement $A\Rightarrow B$ and its contrapositive $\lnot B\Rightarrow\lnot A$ are **the same** statement written differently. The converse and the inverse are quite different statements and do not follow from the original.\n\nThis is a working technique: when $A\Rightarrow B$ is hard, try proving $\lnot B\Rightarrow\lnot A$. For instance "if $n^{2}$ is even then $n$ is even" is awkward directly, while the contrapositive "if $n$ is odd then $n^{2}$ is odd" is obvious: $(2k+1)^{2}=4k^{2}+4k+1$.'}},

    {'t': 'thm',
     'name': {'ru': 'Правила отрицания', 'en': 'The rules of negation'},
     'text': {
      'ru': r'$$\lnot\bigl(A\ \text{и}\ B\bigr)=\lnot A\ \text{или}\ \lnot B,\qquad \lnot\bigl(A\ \text{или}\ B\bigr)=\lnot A\ \text{и}\ \lnot B .$$ Для кванторов: отрицание «для всех $x$ верно $P(x)$» — это «существует $x$, для которого $P(x)$ неверно», и наоборот.',
      'en': r'$$\lnot\bigl(A\ \text{and}\ B\bigr)=\lnot A\ \text{or}\ \lnot B,\qquad \lnot\bigl(A\ \text{or}\ B\bigr)=\lnot A\ \text{and}\ \lnot B .$$ For quantifiers: the negation of "for every $x$, $P(x)$ holds" is "there exists an $x$ for which $P(x)$ fails", and back.'}},

    {'t': 'warn',
     'text': {
      'ru': r'Отрицание утверждения «**все** числа набора чётные» — это **не** «все числа набора нечётные», а «**хотя бы одно** число набора нечётно». Отрицание «квантор всеобщности» превращает в «квантор существования», а не в утверждение о противоположном свойстве для всех. Эту ошибку делают чаще всего.',
      'en': r'The negation of "**all** the numbers are even" is **not** "all the numbers are odd", but "**at least one** number is odd". Negation turns a universal quantifier into an existential one, not into the opposite property for everything. This is the commonest slip of all.'}},
   ]},

  # ------------------------------------------------------------------ 2
  {'h': {'ru': 'Доказательство от противного', 'en': 'Proof by contradiction'},
   'blocks': [
    {'t': 'idea',
     'text': {
      'ru': r'Схема такая:\n\n**1)** предположим, что доказываемое утверждение **неверно**;\n**2)** аккуратно выведем из этого предположения какое-нибудь заведомо ложное утверждение;\n**3)** значит предположение было ложным, а исходное утверждение верно.\n\nШаг **1** требует правильного отрицания — вот зачем нужен предыдущий раздел.',
      'en': r'The pattern is:\n\n**1)** suppose the statement is **false**;\n**2)** derive from that supposition something plainly false;\n**3)** hence the supposition was false and the statement true.\n\nStep **1** needs the negation done correctly — which is what the previous section was for.'}},

    {'t': 'ex',
     'q': {'ru': r'Докажите, что $\sqrt2$ — иррациональное число.',
           'en': r'Prove that $\sqrt2$ is irrational.'},
     'steps': {
      'ru': [r'**Предположим противное:** $\sqrt2$ рационально, то есть $\sqrt2=\dfrac mn$, где $m,n$ — целые, $n\ne0$, и дробь **несократима** (общие множители мы сократили заранее).',
             r'Возведём в квадрат: $2=\dfrac{m^{2}}{n^{2}}$, то есть $m^{2}=2n^{2}$.',
             r'Значит $m^{2}$ чётно. Но квадрат нечётного нечётен, поэтому $m$ чётно: $m=2k$.',
             r'Подставим: $4k^{2}=2n^{2}$, то есть $n^{2}=2k^{2}$. Значит и $n^{2}$ чётно, и по той же причине $n$ чётно.',
             r'Итак, $m$ и $n$ оба чётны — но мы предполагали дробь несократимой. Противоречие.',
             r'Значит предположение неверно: $\sqrt2$ иррационально.'],
      'en': [r'**Suppose the opposite:** $\sqrt2$ is rational, that is $\sqrt2=\dfrac mn$ with $m,n$ integers, $n\ne0$, and the fraction **in lowest terms** (common factors already cancelled).',
             r'Square it: $2=\dfrac{m^{2}}{n^{2}}$, that is $m^{2}=2n^{2}$.',
             r'So $m^{2}$ is even. But the square of an odd number is odd, hence $m$ is even: $m=2k$.',
             r'Substitute: $4k^{2}=2n^{2}$, that is $n^{2}=2k^{2}$. So $n^{2}$ is even and, for the same reason, so is $n$.',
             r'Thus $m$ and $n$ are both even — contradicting the fraction being in lowest terms.',
             r'So the supposition fails and $\sqrt2$ is irrational.']},
     'ans': {'ru': r'$\sqrt2$ иррационально. $\blacksquare$', 'en': r'$\sqrt2$ is irrational. $\blacksquare$'}},

    {'t': 'note',
     'text': {
      'ru': r'Обратите внимание, где именно возникло противоречие: не в вычислениях, а в **условии несократимости**, которое мы сами и наложили. Это типично: полезно с самого начала выбрать «минимальный» или «несократимый» вариант — тогда противоречие приходит быстрее. По сути это тот же бесконечный спуск из темы о диофантовых уравнениях.',
      'en': r'Notice where the contradiction arose: not in the arithmetic but in the **lowest-terms condition** we imposed ourselves. That is typical: choosing a "minimal" or "reduced" version at the start makes the contradiction come faster. In essence this is the infinite descent from the Diophantine topic.'}},
   ]},

  # ------------------------------------------------------------------ 3
  {'h': {'ru': 'Математическая индукция', 'en': 'Mathematical induction'},
   'blocks': [
    {'t': 'thm',
     'name': {'ru': 'Принцип индукции', 'en': 'The principle of induction'},
     'text': {
      'ru': r'Пусть утверждение $P(n)$ сформулировано для всех натуральных $n\ge n_0$. Если\n\n**(база)** $P\left(n_0\right)$ верно, и\n\n**(переход)** из $P(n)$ следует $P(n+1)$ при каждом $n\ge n_0$,\n\nто $P(n)$ верно при всех $n\ge n_0$.',
      'en': r'Let $P(n)$ be a statement for every integer $n\ge n_0$. If\n\n**(base)** $P\left(n_0\right)$ holds, and\n\n**(step)** $P(n)$ implies $P(n+1)$ for every $n\ge n_0$,\n\nthen $P(n)$ holds for all $n\ge n_0$.'}},

    {'t': 'warn',
     'text': {
      'ru': r'Две классические ошибки.\n\n**Пропущена база.** Без неё «доказывается» что угодно: например, из $P(n)$: «$n=n+1$» действительно следует $P(n+1)$, но база ложна, и утверждение неверно.\n\n**Переход проверен не при всех $n$.** Часто рассуждение работает лишь начиная с некоторого $n$; тогда и базу надо брать оттуда же. Проверяйте переход буквально: подставьте $n=n_0$ и убедитесь, что все использованные оценки верны.',
      'en': r'Two classic mistakes.\n\n**A missing base.** Without it anything is "provable": from $P(n)$: "$n=n+1$" the statement $P(n+1)$ really does follow, but the base is false and the claim is false.\n\n**The step not checked for all $n$.** Often the argument only works from some point on; the base must then start there too. Check the step literally: put $n=n_0$ and make sure every estimate used is valid.'}},

    {'t': 'ex',
     'q': {'ru': r'Докажите, что $2^{n}>n^{2}$ при всех натуральных $n\ge5$.',
           'en': r'Prove that $2^{n}>n^{2}$ for every integer $n\ge5$.'},
     'steps': {
      'ru': [r'**База $n=5$:** $2^{5}=32>25=5^{2}$ ✓',
             r'**Переход.** Пусть $2^{n}>n^{2}$ при некотором $n\ge5$. Умножим обе части на $2$: $$2^{\,n+1}>2n^{2}.$$',
             r'Достаточно показать, что $2n^{2}\ge(n+1)^{2}$ при $n\ge5$.',
             r'$$2n^{2}-(n+1)^{2}=n^{2}-2n-1=(n-1)^{2}-2 .$$ При $n\ge5$ имеем $(n-1)^{2}\ge16>2$, значит разность положительна.',
             r'Соединяя, $2^{\,n+1}>2n^{2}>(n+1)^{2}$ — утверждение верно и для $n+1$.',
             r'*Почему база именно $n=5$:* при $n=2,3,4$ неравенство неверно ($4<4$ — равенство, $8<9$, $16=16$), а при $n=1$ верно, но переход из $n=1$ не проходит.'],
      'en': [r'**Base $n=5$:** $2^{5}=32>25=5^{2}$ ✓',
             r'**Step.** Suppose $2^{n}>n^{2}$ for some $n\ge5$. Multiply by $2$: $$2^{\,n+1}>2n^{2}.$$',
             r'It suffices to show $2n^{2}\ge(n+1)^{2}$ for $n\ge5$.',
             r'$$2n^{2}-(n+1)^{2}=n^{2}-2n-1=(n-1)^{2}-2 .$$ For $n\ge5$ we have $(n-1)^{2}\ge16>2$, so the difference is positive.',
             r'Chaining, $2^{\,n+1}>2n^{2}>(n+1)^{2}$ — the claim holds at $n+1$.',
             r'*Why the base is $n=5$:* at $n=2,3,4$ the inequality fails ($4<4$ is equality, $8<9$, $16=16$), and although it holds at $n=1$, the step does not carry from there.']},
     'ans': {'ru': r'$2^{n}>n^{2}$ при всех $n\ge5$. $\blacksquare$',
             'en': r'$2^{n}>n^{2}$ for all $n\ge5$. $\blacksquare$'}},

    {'t': 'idea',
     'name': {'ru': 'Сильная индукция', 'en': 'Strong induction'},
     'text': {
      'ru': r'Иногда для доказательства $P(n+1)$ нужно знать $P(k)$ **для всех** $k\le n$, а не только для $n$. Такая схема тоже законна и называется **сильной индукцией**:\n\nесли $P\left(n_0\right)$ верно и из «$P(k)$ верно при всех $n_0\le k\le n$» следует $P(n+1)$, то $P(n)$ верно всегда.\n\nПример: каждое натуральное число, большее единицы, представимо в виде произведения простых. Если $n+1$ простое — готово; иначе $n+1=ab$ с $1<a,b\le n$, и к обоим множителям применяется предположение.',
      'en': r'Sometimes proving $P(n+1)$ needs $P(k)$ **for every** $k\le n$, not just for $n$. That scheme is legitimate too and is called **strong induction**:\n\nif $P\left(n_0\right)$ holds and "$P(k)$ for all $n_0\le k\le n$" implies $P(n+1)$, then $P(n)$ always holds.\n\nAn example: every integer greater than one is a product of primes. If $n+1$ is prime we are done; otherwise $n+1=ab$ with $1<a,b\le n$, and the hypothesis applies to both factors.'}},
   ]},

  # ------------------------------------------------------------------ 4
  {'h': {'ru': 'Инварианты', 'en': 'Invariants'},
   'blocks': [
    {'t': 'def',
     'name': {'ru': 'Инвариант', 'en': 'Invariant'},
     'text': {
      'ru': r'**Инвариант** — величина (или свойство), которая **не меняется** при каждой разрешённой операции. Если у начального и конечного состояний инвариант различен, то перейти от одного к другому невозможно.',
      'en': r'An **invariant** is a quantity (or property) **unchanged** by every allowed move. If the initial and the target states have different invariants, one cannot be reached from the other.'}},

    {'t': 'idea',
     'name': {'ru': 'Где искать инвариант', 'en': 'Where to look for one'},
     'text': {
      'ru': r'Чаще всего инвариантом оказывается одно из следующего:\n\n**чётность** какой-нибудь суммы или количества;\n**остаток** суммы по подходящему модулю;\n**произведение** знаков (если операции меняют знаки);\n**цвет** клетки при удачной раскраске;\n**количество** объектов какого-то типа.\n\nСпособ найти: выпишите, как меняется каждая величина при одной операции, и поищите комбинацию, изменение которой равно нулю.',
      'en': r'Most often the invariant is one of these:\n\nthe **parity** of some sum or count;\nthe **remainder** of a sum modulo something suitable;\nthe **product** of signs (when the moves flip signs);\nthe **colour** of a cell under a well-chosen colouring;\nthe **number** of objects of some type.\n\nHow to find it: write down how each quantity changes under one move, and look for a combination whose change is zero.'}},

    {'t': 'ex',
     'q': {'ru': r'На доске написаны числа $1,2,\dots,10$. За ход стирают любые два числа и записывают вместо них их разность (неотрицательную). Так делают, пока не останется одно число. Каким оно может быть?',
           'en': r'The numbers $1,2,\dots,10$ are written on a board. A move erases any two of them and writes their (non-negative) difference instead. This continues until one number remains. What can it be?'},
     'steps': {
      'ru': [r'Посмотрим, как меняется **сумма** всех чисел на доске. Вместо $a$ и $b$ появляется $|a-b|$, поэтому сумма меняется на $$|a-b|-(a+b).$$',
             r'Если $a\ge b$, это равно $(a-b)-(a+b)=-2b$ — чётное число. Если $a<b$, аналогично получаем $-2a$.',
             r'Значит **чётность суммы не меняется** — это и есть инвариант.',
             r'Начальная сумма: $1+2+\dots+10=55$ — нечётна.',
             r'Значит и в конце сумма нечётна. Но в конце на доске одно число, и оно равно этой сумме.',
             r'Следовательно последнее число **нечётно**. Оно лежит между $0$ и $10$ (разности не выводят за пределы наибольшего числа), поэтому это одно из $1,3,5,7,9$.',
             r'*Все ли значения достижимы?* Да. Например, $9$: сначала обнулим пары $(1,2)\to1$… проще: $10-1=9$, $9-2=7$, $8-3=5$, $7-4=3$, $6-5=1$; теперь на доске $9,7,5,3,1$, их можно свести к $9-7=2$, $5-3=2$, $2-2=0$, $0$ и $1$ дают $1$. Перебирая порядок, получают любое нечётное значение от $1$ до $9$.'],
      'en': [r'Watch how the **sum** of the numbers on the board changes. The pair $a$, $b$ is replaced by $|a-b|$, so the sum changes by $$|a-b|-(a+b).$$',
             r'If $a\ge b$ this equals $(a-b)-(a+b)=-2b$, an even number; if $a<b$ it is $-2a$, likewise even.',
             r'So the **parity of the sum never changes** — that is the invariant.',
             r'The initial sum is $1+2+\dots+10=55$, which is odd.',
             r'Hence the final sum is odd too. And at the end one number remains, equal to that sum.',
             r'So the last number is **odd**. It lies between $0$ and $10$ (differences never exceed the largest number), so it is one of $1,3,5,7,9$.',
             r'*Are all of these attainable?* Yes — arranging the order of the moves produces every odd value from $1$ to $9$.']},
     'ans': {'ru': r'Последнее число нечётно; достижимо любое из $1,3,5,7,9$.',
             'en': r'The last number is odd, and each of $1,3,5,7,9$ is attainable.'}},

    {'t': 'idea',
     'name': {'ru': 'Полуинвариант', 'en': 'Monovariant'},
     'text': {
      'ru': r'Иногда величина не сохраняется, а **монотонно меняется** — например, каждый раз строго уменьшается, оставаясь целой и неотрицательной. Такая величина называется **полуинвариантом**, и она доказывает, что процесс не может длиться бесконечно: бесконечной строго убывающей последовательности натуральных чисел не бывает.\n\nЭто главный инструмент в задачах вида «докажите, что процесс закончится».',
      'en': r'Sometimes a quantity is not preserved but changes **monotonically** — say, strictly decreases each time while staying a non-negative integer. Such a quantity is a **monovariant**, and it proves the process must stop: there is no infinite strictly decreasing sequence of positive integers.\n\nThis is the main tool in problems of the form "prove that the process terminates".'}},
   ]},

  # ------------------------------------------------------------------ 5
  {'h': {'ru': 'Раскраски', 'en': 'Colourings'},
   'blocks': [
    {'t': 'idea',
     'text': {
      'ru': r'**Раскраска** — это способ построить инвариант там, где числа сами по себе не помогают. Клетки доски (или объекты задачи) красят в несколько цветов так, чтобы каждая разрешённая операция вела себя с цветами предсказуемо, а затем считают, сколько объектов каждого цвета.',
      'en': r'A **colouring** is a way to manufacture an invariant where the numbers alone give nothing. The cells of a board (or the objects of the problem) are coloured so that every allowed move behaves predictably on colours, and then one counts objects of each colour.'}},

    {'t': 'ex',
     'q': {'ru': r'Из шахматной доски $8\times8$ вырезали две противоположные угловые клетки. Можно ли оставшиеся $62$ клетки покрыть $31$ доминошкой $1\times2$?',
           'en': r'Two opposite corner squares are cut from an $8\times8$ chessboard. Can the remaining $62$ squares be covered by $31$ dominoes of size $1\times2$?'},
     'steps': {
      'ru': [r'Раскрасим доску в шахматном порядке. На полной доске $32$ чёрные и $32$ белые клетки.',
             r'Ключевое наблюдение: **любая доминошка $1\times2$ накрывает ровно одну чёрную и одну белую клетку**, потому что соседние клетки всегда разного цвета.',
             r'Значит $31$ доминошка накрывает ровно $31$ чёрную и $31$ белую клетку.',
             r'Но две противоположные угловые клетки доски всегда **одного** цвета. Вырезав их, мы оставили $30$ клеток одного цвета и $32$ другого.',
             r'$30\ne31$ — требуемое покрытие невозможно.'],
      'en': [r'Colour the board in the usual chess pattern: the full board has $32$ black and $32$ white squares.',
             r'The key observation: **every $1\times2$ domino covers exactly one black and one white square**, since adjacent squares always differ in colour.',
             r'So $31$ dominoes cover exactly $31$ black and $31$ white squares.',
             r'But two opposite corners of a chessboard always have the **same** colour. Removing them leaves $30$ squares of one colour and $32$ of the other.',
             r'Since $30\ne31$, the covering is impossible.']},
     'ans': {'ru': r'Нельзя. $\blacksquare$', 'en': r'It cannot be done. $\blacksquare$'}},

    {'t': 'fig', 'svg': FIG_BOARD,
     'cap': {'ru': 'Вырезаны две противоположные угловые клетки — обе одного цвета, поэтому баланс цветов нарушен.',
             'en': 'Two opposite corners are removed — both of the same colour, so the colour balance is broken.'}},

    {'t': 'note',
     'text': {
      'ru': r'Полезно помнить и другие раскраски: **в три цвета** по диагоналям (для фигур $1\times3$), **в четыре цвета** по остаткам координат (для фигур $2\times2$), раскраска **строк** или **столбцов** (для ходов, меняющих строку), раскраска **по остатку от деления координаты на $k$**. Выбор раскраски — это и есть решение задачи; всё остальное — арифметика.',
      'en': r'Other colourings are worth knowing: **three colours** along diagonals (for $1\times3$ pieces), **four colours** by coordinate residues (for $2\times2$ pieces), colouring by **rows** or **columns** (for moves that change a row), colouring by the **residue of a coordinate modulo $k$**. Choosing the colouring is the solution; the rest is arithmetic.'}},

    {'t': 'ex',
     'q': {'ru': r'Каждая точка плоскости покрашена в один из двух цветов. Докажите, что найдутся две точки одного цвета на расстоянии ровно $1$.',
           'en': r'Every point of the plane is coloured in one of two colours. Prove that there are two points of the same colour at distance exactly $1$.'},
     'steps': {
      'ru': [r'Возьмём произвольный равносторонний треугольник со стороной $1$.',
             r'Его три вершины покрашены в два цвета.',
             r'По принципу Дирихле какие-то две вершины оказались одного цвета.',
             r'А расстояние между любыми двумя вершинами равно $1$.'],
      'en': [r'Take any equilateral triangle of side $1$.',
             r'Its three vertices are coloured in two colours.',
             r'By the pigeonhole principle two vertices share a colour.',
             r'And any two vertices are at distance $1$.']},
     'ans': {'ru': r'Такие две точки существуют. $\blacksquare$',
             'en': r'Two such points exist. $\blacksquare$'}},

    {'t': 'fig', 'svg': FIG_UNITTRI,
     'cap': {'ru': 'Три вершины, два цвета — по принципу Дирихле две вершины одного цвета, а расстояние между ними равно $1$.',
             'en': 'Three vertices, two colours — pigeonhole gives two of one colour, at distance $1$.'}},
   ]},

  # ------------------------------------------------------------------ 6
  {'h': {'ru': 'Как оформлять решение', 'en': 'How to write a solution'},
   'blocks': [
    {'t': 'ul',
     'items': {
      'ru': [
       r'**Начните с ответа**, если он есть: «Ответ: $12$. Докажем это.» Проверяющему сразу видно, что вы решали.',
       r'**Вводите обозначения явно.** «Пусть $n$ — число участников» стоит одной строки и снимает половину вопросов.',
       r'**Каждый шаг — со ссылкой.** «По теореме о вписанном угле», «по условию», «по доказанному выше».',
       r'**Обе стороны задачи «найдите все».** Отдельно предъявите примеры, отдельно докажите, что других нет. За половину дают половину баллов.',
       r'**Проверяйте крайние случаи.** $n=1$, вырожденный треугольник, деление на ноль, отрицательный корень.',
       r'**Пишите вывод.** Последняя строка должна отвечать ровно на поставленный вопрос.',
      ],
      'en': [
       r'**Start with the answer** when there is one: "Answer: $12$. Here is the proof." The marker sees at once that you solved it.',
       r'**Introduce notation explicitly.** "Let $n$ be the number of participants" costs one line and prevents half the questions.',
       r'**Justify each step.** "By the inscribed angle theorem", "by hypothesis", "by what was proved above".',
       r'**Both halves of a "find all" problem.** Exhibit the examples, and separately prove there are no others. Half the work earns half the marks.',
       r'**Check the edge cases.** $n=1$, a degenerate triangle, division by zero, a negative root.',
       r'**Write a conclusion.** The last line should answer exactly the question asked.',
      ]}},

    {'t': 'warn',
     'text': {
      'ru': r'Три фразы, за которые снимают баллы:\n\n«**Очевидно, что…**» — если очевидно, то напишите почему в одну строку; если не можете, значит не очевидно.\n\n«**Аналогично…**» — уместно, только если рассуждение действительно дословно повторяется; скажите, что именно на что заменяется.\n\n«**Проверено на примерах**» — примеры не доказательство. Они полезны для проверки ответа, но не заменяют аргумент.',
      'en': r'Three phrases that cost marks:\n\n"**Obviously…**" — if it is obvious, say why in one line; if you cannot, it is not obvious.\n\n"**Similarly…**" — fair only when the argument really does repeat word for word; say what is replaced by what.\n\n"**Checked on examples**" — examples are not a proof. They are useful for testing an answer but do not replace an argument.'}},
   ]},
 ],

 # ==================================================================== problems
 'problems': [

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Сформулируйте отрицания: (а) «все числа набора чётные»; (б) «существует ученик, решивший все задачи»; (в) «$x>0$ и $y>0$».',
         'en': r'Write the negations of: (a) "all the numbers are even"; (b) "some pupil solved every problem"; (c) "$x>0$ and $y>0$".'},
   'hint': {'ru': r'Квантор всеобщности меняется на квантор существования, «и» — на «или».',
            'en': r'A universal quantifier becomes existential, and "and" becomes "or".'},
   'sol': {'ru': r'**(а)** «Хотя бы одно число набора нечётно.»\n\nНе «все нечётные» — это гораздо более сильное утверждение.\n\n**(б)** «Для каждого ученика найдётся задача, которую он не решил.»\n\nОба квантора поменялись: «существует» стало «для каждого», а «все задачи решил» — «есть нерешённая».\n\n**(в)** «$x\le0$ или $y\le0$.»\n\nНе «$x\le0$ и $y\le0$»: отрицание конъюнкции — дизъюнкция отрицаний.',
           'en': r'**(a)** "At least one of the numbers is odd."\n\nNot "all are odd", which is a far stronger statement.\n\n**(b)** "For every pupil there is a problem they did not solve."\n\nBoth quantifiers flipped: "there exists" became "for every", and "solved all problems" became "there is an unsolved one".\n\n**(c)** "$x\le0$ or $y\le0$."\n\nNot "$x\le0$ and $y\le0$": the negation of a conjunction is the disjunction of the negations.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Дано утверждение: «если четырёхугольник — квадрат, то его диагонали равны». Сформулируйте обратное, противоположное и контрапозицию и выясните, какие из них верны.',
         'en': r'Given the statement "if a quadrilateral is a square then its diagonals are equal", write the converse, the inverse and the contrapositive, and say which are true.'},
   'hint': {'ru': r'Контрапозиция всегда равносильна исходному.',
            'en': r'The contrapositive is always equivalent to the original.'},
   'sol': {'ru': r'**Исходное:** если четырёхугольник — квадрат, то его диагонали равны. **Верно.**\n\n**Обратное:** если диагонали четырёхугольника равны, то он квадрат. **Неверно** — контрпример: прямоугольник со сторонами $1$ и $2$, у него диагонали равны, но это не квадрат. Ещё пример: равнобедренная трапеция.\n\n**Противоположное:** если четырёхугольник не квадрат, то его диагонали не равны. **Неверно** — тот же прямоугольник служит контрпримером.\n\n**Контрапозиция:** если диагонали четырёхугольника не равны, то он не квадрат. **Верно** — она равносильна исходному утверждению.\n\n*Наблюдение.* Обратное и противоположное оказались одновременно ложными — это не совпадение: они контрапозиции друг друга и потому всегда равносильны между собой.',
           'en': r'**Original:** if a quadrilateral is a square then its diagonals are equal. **True.**\n\n**Converse:** if the diagonals of a quadrilateral are equal then it is a square. **False** — a $1\times2$ rectangle has equal diagonals and is not a square. Another: an isosceles trapezium.\n\n**Inverse:** if a quadrilateral is not a square then its diagonals are not equal. **False** — the same rectangle is a counterexample.\n\n**Contrapositive:** if the diagonals of a quadrilateral are not equal then it is not a square. **True** — it is equivalent to the original.\n\n*An observation.* The converse and the inverse turned out false together — no accident: they are contrapositives of each other and hence always equivalent.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Докажите, что если $n^{2}$ чётно, то $n$ чётно.',
         'en': r'Prove that if $n^{2}$ is even then $n$ is even.'},
   'hint': {'ru': r'Докажите контрапозицию.', 'en': r'Prove the contrapositive.'},
   'sol': {'ru': r'Докажем равносильную контрапозицию: **если $n$ нечётно, то $n^{2}$ нечётно.**\n\nПусть $n=2k+1$. Тогда $$n^{2}=(2k+1)^{2}=4k^{2}+4k+1=2\left(2k^{2}+2k\right)+1 ,$$ то есть $n^{2}$ даёт остаток $1$ при делении на $2$ и потому нечётно.\n\nЗначит верна и исходная импликация. $\blacksquare$\n\n*Замечание.* Прямое доказательство тоже возможно, но требует основной теоремы арифметики: из $2\mid n^{2}$ и простоты двойки следует $2\mid n$. Контрапозиция обходится без неё.',
           'en': r'We prove the equivalent contrapositive: **if $n$ is odd then $n^{2}$ is odd.**\n\nLet $n=2k+1$. Then $$n^{2}=(2k+1)^{2}=4k^{2}+4k+1=2\left(2k^{2}+2k\right)+1 ,$$ so $n^{2}$ leaves remainder $1$ on division by $2$ and is odd.\n\nHence the original implication holds. $\blacksquare$\n\n*Remark.* A direct proof is possible too, but needs the fundamental theorem of arithmetic: $2\mid n^{2}$ and the primality of two give $2\mid n$. The contrapositive avoids that.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Докажите по индукции, что $2^{n}>n$ при всех натуральных $n$.',
         'en': r'Prove by induction that $2^{n}>n$ for every positive integer $n$.'},
   'hint': {'ru': r'В переходе воспользуйтесь тем, что $2^{n}\ge n+1$.',
            'en': r'In the step use that $2^{n}\ge n+1$.'},
   'sol': {'ru': r'**База $n=1$:** $2^{1}=2>1$ ✓\n\n**Переход.** Пусть $2^{n}>n$ при некотором $n\ge1$. Так как обе части целые, из строгого неравенства следует $2^{n}\ge n+1$.\n\nУмножим на $2$: $$2^{\,n+1}\ge2(n+1)=n+1+(n+1)>n+1 ,$$ поскольку $n+1>0$.\n\nЗначит $2^{\,n+1}>n+1$, то есть утверждение верно и для $n+1$.\n\nПо индукции $2^{n}>n$ при всех натуральных $n$. $\blacksquare$',
           'en': r'**Base $n=1$:** $2^{1}=2>1$ ✓\n\n**Step.** Suppose $2^{n}>n$ for some $n\ge1$. Both sides are integers, so the strict inequality gives $2^{n}\ge n+1$.\n\nMultiply by $2$: $$2^{\,n+1}\ge2(n+1)=n+1+(n+1)>n+1 ,$$ since $n+1>0$.\n\nSo $2^{\,n+1}>n+1$ and the claim holds at $n+1$.\n\nBy induction $2^{n}>n$ for every positive integer $n$. $\blacksquare$'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Докажите, что произведение любых двух последовательных целых чисел чётно, а произведение любых трёх последовательных делится на $6$.',
         'en': r'Prove that the product of any two consecutive integers is even, and the product of any three consecutive integers is divisible by $6$.'},
   'hint': {'ru': r'Разбор случаев по остатку.', 'en': r'Split into cases by the remainder.'},
   'sol': {'ru': r'**Два подряд.** Из двух последовательных чисел $n$ и $n+1$ ровно одно чётно: если $n=2k$, то чётно первое; если $n=2k+1$, то $n+1=2k+2$ чётно. В обоих случаях произведение делится на $2$.\n\n**Три подряд.** Среди $n$, $n+1$, $n+2$ есть чётное (по доказанному, даже среди первых двух), значит произведение делится на $2$.\n\nОстатки этих трёх чисел при делении на $3$ — это три подряд идущих значения, то есть $\{0,1,2\}$ в каком-то порядке. Значит одно из чисел делится на $3$, и произведение делится на $3$.\n\nЧисла $2$ и $3$ взаимно просты, поэтому произведение делится на $6$. $\blacksquare$\n\n*Обобщение.* Произведение любых $k$ подряд идущих целых делится на $k!$ — это следует из того, что $\dbinom{n+k}{k}$ целое.',
           'en': r'**Two in a row.** Of two consecutive integers $n$ and $n+1$ exactly one is even: if $n=2k$ the first is, and if $n=2k+1$ then $n+1=2k+2$ is. Either way the product is divisible by $2$.\n\n**Three in a row.** Among $n$, $n+1$, $n+2$ there is an even number (already among the first two), so the product is divisible by $2$.\n\nTheir remainders modulo $3$ are three consecutive values, that is $\{0,1,2\}$ in some order. So one of them is divisible by $3$ and the product is too.\n\nAs $2$ and $3$ are coprime, the product is divisible by $6$. $\blacksquare$\n\n*Generalisation.* A product of any $k$ consecutive integers is divisible by $k!$ — which follows from $\dbinom{n+k}{k}$ being an integer.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'На доске написаны числа $1,2,\dots,20$. За ход стирают два числа и записывают их сумму. Сколько ходов потребуется, чтобы осталось одно число, и чему оно будет равно?',
         'en': r'The numbers $1,2,\dots,20$ are on a board. A move erases two of them and writes their sum. How many moves are needed to leave one number, and what will it be?'},
   'hint': {'ru': r'Что сохраняется, а что убывает?',
            'en': r'What is preserved, and what decreases?'},
   'sol': {'ru': r'**Инвариант.** Каждый ход заменяет $a$ и $b$ на $a+b$, поэтому **сумма всех чисел на доске не меняется**. Значит в конце останется число $$1+2+\dots+20=\frac{20\cdot21}{2}=210 .$$\n\n**Полуинвариант.** Каждый ход уменьшает количество чисел ровно на единицу: два стёрли, одно записали. Сначала чисел $20$, в конце $1$, поэтому ходов ровно $$20-1=19 .$$\n\n**Ответ:** $19$ ходов, останется число $210$.\n\n*Обратите внимание,* что ответ не зависит от порядка ходов — это и есть смысл слова «инвариант».',
           'en': r'**The invariant.** Each move replaces $a$ and $b$ by $a+b$, so **the total sum never changes**. The final number is therefore $$1+2+\dots+20=\frac{20\cdot21}{2}=210 .$$\n\n**The monovariant.** Each move reduces the count of numbers by exactly one: two erased, one written. Starting from $20$ and ending at $1$, the number of moves is $$20-1=19 .$$\n\n**Answer:** $19$ moves, and the number left is $210$.\n\n*Note* that the answer does not depend on the order of moves — that is exactly what "invariant" means.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Докажите, что $\sqrt3$ иррационально. Где ломается то же рассуждение для $\sqrt4$?',
         'en': r'Prove that $\sqrt3$ is irrational. Where does the same argument break down for $\sqrt4$?'},
   'hint': {'ru': r'Повторите доказательство для $\sqrt2$, заменив двойку на тройку.',
            'en': r'Repeat the $\sqrt2$ proof with three in place of two.'},
   'sol': {'ru': r'**Доказательство.** Предположим, что $\sqrt3=\dfrac mn$, где дробь несократима. Тогда $$m^{2}=3n^{2}.$$\n\nЗначит $3\mid m^{2}$. Число $3$ простое, поэтому из $3\mid m\cdot m$ следует $3\mid m$; запишем $m=3k$.\n\nПодставим: $9k^{2}=3n^{2}$, то есть $n^{2}=3k^{2}$. По той же причине $3\mid n$.\n\nИтак, $m$ и $n$ оба делятся на $3$ — противоречие с несократимостью. $\blacksquare$\n\n**Почему не проходит для $\sqrt4$.** Ключевой шаг «из $3\mid m^{2}$ следует $3\mid m$» опирается на **простоту** тройки. Для четвёрки он неверен: например, $4\mid6^{2}=36$, но $4\nmid6$.\n\nИ это не случайность: $\sqrt4=2$ — число вполне рациональное, так что доказательство и не должно было пройти.\n\n*Общий факт.* $\sqrt n$ иррационально ровно тогда, когда $n$ не является точным квадратом.',
           'en': r'**Proof.** Suppose $\sqrt3=\dfrac mn$ in lowest terms. Then $$m^{2}=3n^{2}.$$\n\nSo $3\mid m^{2}$. Since $3$ is prime, $3\mid m\cdot m$ gives $3\mid m$; write $m=3k$.\n\nSubstituting, $9k^{2}=3n^{2}$, that is $n^{2}=3k^{2}$, and for the same reason $3\mid n$.\n\nSo $m$ and $n$ are both divisible by $3$ — contradicting lowest terms. $\blacksquare$\n\n**Why it fails for $\sqrt4$.** The key step "$3\mid m^{2}$ implies $3\mid m$" rests on the **primality** of three. For four it is false: $4\mid6^{2}=36$ but $4\nmid6$.\n\nAnd that is no accident: $\sqrt4=2$ is perfectly rational, so the proof had better fail.\n\n*The general fact.* $\sqrt n$ is irrational exactly when $n$ is not a perfect square.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Докажите неравенство Бернулли: $(1+x)^{n}\ge1+nx$ при всех натуральных $n$ и всех $x\ge-1$.',
         'en': r'Prove Bernoulli’s inequality: $(1+x)^{n}\ge1+nx$ for every positive integer $n$ and every $x\ge-1$.'},
   'hint': {'ru': r'Индукция; в переходе умножайте на $1+x\ge0$.',
            'en': r'Induct; in the step multiply by $1+x\ge0$.'},
   'sol': {'ru': r'**База $n=1$:** $(1+x)^{1}=1+x$ — равенство, значит неравенство верно ✓\n\n**Переход.** Пусть $(1+x)^{n}\ge1+nx$ при некотором $n\ge1$.\n\nПо условию $x\ge-1$, поэтому $1+x\ge0$, и умножение на $1+x$ **не меняет знака** неравенства: $$(1+x)^{\,n+1}\ \ge\ \left(1+nx\right)(1+x).$$\n\nРаскроем правую часть: $$\left(1+nx\right)(1+x)=1+x+nx+nx^{2}=1+(n+1)x+nx^{2}.$$\n\nПоследнее слагаемое неотрицательно ($n>0$ и $x^{2}\ge0$), поэтому $$(1+x)^{\,n+1}\ \ge\ 1+(n+1)x ,$$ то есть утверждение верно и для $n+1$.\n\nПо индукции неравенство верно при всех $n$. $\blacksquare$\n\n**Где важно условие $x\ge-1$.** Без него шаг с умножением ломается: при $x=-3$ множитель $1+x=-2$ отрицателен и переворачивает знак. И действительно, при $n=2$, $x=-3$ имеем $(1+x)^{2}=4$, а $1+2x=-5$ — неравенство ещё верно, но при $n=3$ получаем $-8$ и $-8$: равенство. Условие $x\ge-1$ делает доказательство корректным при всех $n$ сразу.',
           'en': r'**Base $n=1$:** $(1+x)^{1}=1+x$ — equality, so the inequality holds ✓\n\n**Step.** Suppose $(1+x)^{n}\ge1+nx$ for some $n\ge1$.\n\nSince $x\ge-1$ we have $1+x\ge0$, so multiplying by $1+x$ **preserves** the direction: $$(1+x)^{\,n+1}\ \ge\ \left(1+nx\right)(1+x).$$\n\nExpand the right side: $$\left(1+nx\right)(1+x)=1+x+nx+nx^{2}=1+(n+1)x+nx^{2}.$$\n\nThe last term is non-negative ($n>0$ and $x^{2}\ge0$), so $$(1+x)^{\,n+1}\ \ge\ 1+(n+1)x ,$$ and the claim holds at $n+1$.\n\nBy induction it holds for every $n$. $\blacksquare$\n\n**Where $x\ge-1$ matters.** Without it the multiplication step breaks: at $x=-3$ the factor $1+x=-2$ is negative and flips the sign. The hypothesis $x\ge-1$ is what makes the proof valid for all $n$ at once.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Докажите, что $n$ прямых на плоскости, никакие две из которых не параллельны и никакие три не проходят через одну точку, делят плоскость ровно на $1+\dfrac{n(n+1)}{2}$ частей.',
         'en': r'Prove that $n$ lines in the plane, no two parallel and no three concurrent, divide it into exactly $1+\dfrac{n(n+1)}{2}$ regions.'},
   'hint': {'ru': r'Посмотрите, сколько новых частей добавляет очередная прямая.',
            'en': r'See how many new regions the next line adds.'},
   'sol': {'ru': r'Обозначим искомое число через $R(n)$.\n\n**База $n=0$:** прямых нет, плоскость — одна часть, и формула даёт $1+0=1$ ✓\n\n**Переход: сколько добавляет новая прямая.** Пусть уже проведено $n$ прямых, и мы добавляем $(n+1)$-ю. Она пересекает каждую из старых ровно в одной точке (не параллельна ни одной), и все эти точки различны (никакие три прямые не проходят через одну точку). Значит на новой прямой возникает **$n$ точек пересечения**.\n\nЭти $n$ точек разбивают новую прямую на $n+1$ кусок: $n-1$ отрезок и два луча.\n\nКаждый такой кусок проходит по одной из старых частей плоскости и разрезает её ровно на две. Значит число частей увеличивается ровно на $n+1$: $$R(n+1)=R(n)+(n+1).$$\n\n**Складываем.** $$R(n)=R(0)+1+2+\dots+n=1+\frac{n(n+1)}{2}. \qquad\blacksquare$$\n\n*Проверка.* $n=1$: две части, формула даёт $1+1=2$ ✓ $n=2$: четыре части, формула $1+3=4$ ✓ $n=3$: семь частей, формула $1+6=7$ ✓\n\n*Замечание.* Условия важны. Если две прямые параллельны, новая прямая пересечёт не все старые и добавит меньше частей; если три прямые проходят через одну точку, точек пересечения на новой прямой окажется меньше $n$.',
           'en': r'Write $R(n)$ for the number of regions.\n\n**Base $n=0$:** no lines, one region, and the formula gives $1+0=1$ ✓\n\n**Step: how much a new line adds.** Suppose $n$ lines are drawn and we add the $(n+1)$-st. It meets each old line in exactly one point (being parallel to none), and all these points are distinct (no three lines concurrent). So the new line acquires **$n$ intersection points**.\n\nThose $n$ points cut the new line into $n+1$ pieces: $n-1$ segments and two rays.\n\nEach piece runs through one old region and cuts it into two. So the number of regions grows by exactly $n+1$: $$R(n+1)=R(n)+(n+1).$$\n\n**Sum up.** $$R(n)=R(0)+1+2+\dots+n=1+\frac{n(n+1)}{2}. \qquad\blacksquare$$\n\n*Check.* $n=1$: two regions, formula $1+1=2$ ✓ $n=2$: four, formula $1+3=4$ ✓ $n=3$: seven, formula $1+6=7$ ✓\n\n*Remark.* The hypotheses matter. If two lines are parallel the new line misses one of them and adds fewer regions; if three lines are concurrent the new line acquires fewer than $n$ intersection points.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Плитка шоколада состоит из $m\times n$ долек. За один ход разрешено взять любой кусок и разломить его по прямой между дольками на два куска. Докажите, что для того чтобы разломать всю плитку на отдельные дольки, потребуется ровно $mn-1$ ходов — независимо от порядка ломания.',
         'en': r'A chocolate bar consists of $m\times n$ squares. A move takes any piece and breaks it along a straight line between squares into two pieces. Prove that breaking the whole bar into separate squares takes exactly $mn-1$ moves, whatever the order.'},
   'hint': {'ru': r'Следите за числом кусков.', 'en': r'Track the number of pieces.'},
   'sol': {'ru': r'**Инвариант.** Проследим за **числом кусков** на столе.\n\nВ начале кусок один. Каждый ход берёт один кусок и превращает его в два, поэтому число кусков увеличивается **ровно на единицу** — независимо от того, какой кусок и как ломают.\n\n**Считаем.** В конце кусков ровно $mn$ (каждая долька отдельно). Значит число ходов равно $$mn-1 .$$\n\nЭто верно при любом порядке ломания — ответ не зависит от стратегии. $\blacksquare$\n\n*Что здесь важно.* Условие «ломать по прямой» не влияет на подсчёт: любой ход, превращающий один кусок в два, даёт ту же формулу. Именно поэтому задача решается за две строки, тогда как прямой перебор вариантов был бы безнадёжен.\n\n*Пример.* Для плитки $4\times6$ понадобится $24-1=23$ ломания.',
           'en': r'**The invariant.** Track the **number of pieces** on the table.\n\nAt the start there is one. Each move takes one piece and turns it into two, so the count grows by **exactly one** — whichever piece is broken and however.\n\n**Count.** At the end there are exactly $mn$ pieces (each square separate). So the number of moves is $$mn-1 .$$\n\nThis holds for any order of breaking — the answer does not depend on the strategy. $\blacksquare$\n\n*What matters here.* The "straight line" condition plays no part in the count: any move turning one piece into two gives the same formula. That is why the problem falls in two lines, while a direct search over orders would be hopeless.\n\n*Example.* A $4\times6$ bar needs $24-1=23$ breaks.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'В каждой клетке доски $5\times5$ сидит жук. По сигналу каждый жук переползает на соседнюю по стороне клетку. Докажите, что какая-то клетка останется пустой.',
         'en': r'A bug sits on every cell of a $5\times5$ board. At a signal each bug crawls to an edge-adjacent cell. Prove that some cell is left empty.'},
   'hint': {'ru': r'Раскрасьте доску в шахматном порядке и посчитайте клетки каждого цвета.',
            'en': r'Colour the board like a chessboard and count the cells of each colour.'},
   'sol': {'ru': r'**Раскраска.** Покрасим доску в шахматном порядке. На доске $5\times5$ всего $25$ клеток, и цвета распределены неровно: угловых цветов $13$, другого — $12$. Назовём их чёрными и белыми: $13$ чёрных и $12$ белых.\n\n**Что делает ход.** Соседние по стороне клетки всегда разного цвета, поэтому **каждый жук меняет цвет клетки**: с чёрной уходит на белую и наоборот.\n\n**Считаем.** До сигнала на чёрных клетках сидело $13$ жуков. После сигнала все они окажутся на белых клетках. Но белых клеток всего $12$.\n\nЗначит на белых клетках после хода находится не менее $13$ жуков (тех, что пришли с чёрных), плюс, возможно, ещё какие-то. Итого белых клеток $12$, а претендентов на них не менее $13$ — по принципу Дирихле в какой-то белой клетке окажутся два жука.\n\n**Вывод.** Всего жуков $25$, а клеток тоже $25$. Раз в какой-то клетке оказалось два жука, а всего клеток и жуков поровну, то какая-то клетка непременно осталась пустой. $\blacksquare$\n\n*Замечание.* Для доски $4\times4$ (или любой доски с чётным числом клеток каждого цвета) такое рассуждение не работает — и действительно, там все жуки могут переползти без пустых клеток, например меняясь местами парами.',
           'en': r'**The colouring.** Colour the board like a chessboard. A $5\times5$ board has $25$ cells and the colours are unequal: $13$ of the corner colour and $12$ of the other. Call them black and white: $13$ black, $12$ white.\n\n**What a move does.** Edge-adjacent cells always differ in colour, so **every bug changes colour**: from black to white and back.\n\n**Count.** Before the signal $13$ bugs sat on black cells. Afterwards all of them are on white cells. But there are only $12$ white cells.\n\nSo after the move the white cells hold at least $13$ bugs (those arriving from black), and possibly more, while there are only $12$ white cells — by the pigeonhole principle some white cell holds two bugs.\n\n**Conclusion.** There are $25$ bugs and $25$ cells. Since some cell holds two, and bugs and cells are equal in number, some cell must be left empty. $\blacksquare$\n\n*Remark.* For a $4\times4$ board (or any board with equally many cells of each colour) the argument fails — and indeed there the bugs can all move with no cell left empty, for instance by swapping in pairs.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'В трёх кучках лежат $10$, $15$ и $20$ камней. За ход разрешается взять по одному камню из двух кучек и положить два камня в третью. Можно ли добиться, чтобы во всех кучках стало поровну?',
         'en': r'Three piles hold $10$, $15$ and $20$ stones. A move takes one stone from each of two piles and adds two stones to the third. Can all three piles be made equal?'},
   'hint': {'ru': r'Посмотрите на остатки размеров кучек по модулю $3$.',
            'en': r'Look at the pile sizes modulo $3$.'},
   'sol': {'ru': r'**Инвариант.** Посмотрим на остатки размеров кучек при делении на $3$.\n\nЗа один ход две кучки уменьшаются на $1$, а одна увеличивается на $2$. По модулю $3$ увеличение на $2$ — это то же самое, что уменьшение на $1$: $$+2\equiv-1\pmod3 .$$\n\nЗначит **все три кучки уменьшаются на $1$ по модулю $3$**. Следовательно **попарные разности остатков не меняются**.\n\n**Начальное состояние.** $$10\equiv1,\qquad 15\equiv0,\qquad 20\equiv2\pmod3 .$$ Остатки попарно различны.\n\n**Требуемое состояние.** Если бы все кучки стали равны, их остатки по модулю $3$ совпали бы.\n\n**Противоречие.** Различие остатков — инвариант, а мы хотим прийти к состоянию, где остатки совпадают. Это невозможно.\n\n**Ответ:** нельзя. $\blacksquare$\n\n*Проверка инварианта на примере.* Из $(10,15,20)$ ход даёт, скажем, $(9,14,22)$: остатки $0,2,1$ — снова все различны ✓\n\n*Замечание.* Обратите внимание: общее число камней тоже сохраняется ($10+15+20=45$), и $45$ делится на $3$, так что «арифметического» препятствия нет — равные кучки по $15$ камней в сумме дают ровно $45$. Препятствие именно в остатках.',
           'en': r'**The invariant.** Look at the pile sizes modulo $3$.\n\nA move decreases two piles by $1$ and increases one by $2$. Modulo $3$, adding $2$ is the same as subtracting $1$: $$+2\equiv-1\pmod3 .$$\n\nSo **all three piles drop by $1$ modulo $3$**, and hence **the differences between their residues never change**.\n\n**The start.** $$10\equiv1,\qquad 15\equiv0,\qquad 20\equiv2\pmod3 ,$$ three pairwise different residues.\n\n**The target.** If all piles were equal, their residues modulo $3$ would coincide.\n\n**Contradiction.** The distinctness of the residues is invariant, yet we want a state where they coincide. Impossible.\n\n**Answer:** it cannot be done. $\blacksquare$\n\n*Checking the invariant.* From $(10,15,20)$ a move gives, say, $(9,14,22)$: residues $0,2,1$ — still all different ✓\n\n*Remark.* Note that the total is also preserved ($10+15+20=45$) and $45$ is divisible by $3$, so there is no "arithmetic" obstruction — three piles of $15$ would total exactly $45$. The obstruction is precisely in the residues.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'По кругу расставлены числа $+1$ и $-1$ — всего $2025$ штук. За ход разрешается изменить знак у любых двух соседних чисел. Можно ли, начав с расстановки, где ровно одно число равно $-1$, прийти к расстановке, где все числа равны $+1$?',
         'en': r'Numbers $+1$ and $-1$ are arranged in a circle — $2025$ of them. A move flips the signs of any two neighbouring numbers. Starting from an arrangement with exactly one $-1$, can one reach the arrangement where all numbers are $+1$?'},
   'hint': {'ru': r'Что происходит с произведением всех чисел?',
            'en': r'What happens to the product of all the numbers?'},
   'sol': {'ru': r'**Инвариант.** Рассмотрим произведение всех $2025$ чисел.\n\nОдин ход меняет знак у двух чисел, поэтому произведение умножается на $(-1)\cdot(-1)=1$ — то есть **не меняется**.\n\n**Считаем начальное значение.** В начале ровно одно число равно $-1$, остальные $+1$, поэтому произведение равно $$(-1)\cdot1\cdot1\cdots1=-1 .$$\n\n**Считаем требуемое значение.** Если бы все числа стали $+1$, произведение равнялось бы $$1\cdot1\cdots1=+1 .$$\n\n**Противоречие.** Произведение — инвариант, оно всё время равно $-1$ и никогда не станет $+1$.\n\n**Ответ:** нельзя. $\blacksquare$\n\n*Что если минусов было бы два?* Тогда произведение равно $+1$, и препятствия нет. И действительно, два минуса можно «свести» друг к другу последовательными ходами и уничтожить. В общем случае ответ такой: цель достижима тогда и только тогда, когда минусов чётное число.\n\n*Замечание.* Число $2025$ и то, что числа стоят по кругу, на ответ не влияют — работает только чётность количества минусов.',
           'en': r'**The invariant.** Consider the product of all $2025$ numbers.\n\nA move flips two signs, so the product is multiplied by $(-1)\cdot(-1)=1$ — that is, it **never changes**.\n\n**The starting value.** With exactly one $-1$ and the rest $+1$, the product is $$(-1)\cdot1\cdot1\cdots1=-1 .$$\n\n**The target value.** If all the numbers became $+1$ the product would be $$1\cdot1\cdots1=+1 .$$\n\n**Contradiction.** The product is invariant: it stays $-1$ forever and never becomes $+1$.\n\n**Answer:** it cannot be done. $\blacksquare$\n\n*What if there were two minuses?* Then the product is $+1$ and there is no obstruction — indeed two minuses can be brought together by successive moves and cancelled. In general the goal is reachable exactly when the number of minuses is even.\n\n*Remark.* Neither the value $2025$ nor the circular arrangement affects the answer — only the parity of the number of minuses does.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Может ли конь, выйдя из некоторой клетки шахматной доски, вернуться в неё ровно за $2025$ ходов?',
         'en': r'Can a knight leave a square of a chessboard and return to it in exactly $2025$ moves?'},
   'hint': {'ru': r'Какого цвета клетка после каждого хода коня?',
            'en': r'What colour is the square after each knight move?'},
   'sol': {'ru': r'**Наблюдение.** Ход коня всегда меняет цвет клетки: конь ходит на $1$ клетку в одном направлении и на $2$ в другом, поэтому сумма координат меняется на $1+2=3$ или на $2-1=1$ — в любом случае на **нечётное** число, а значит меняется её чётность.\n\n**Инвариант.** Отсюда: после чётного числа ходов конь стоит на клетке того же цвета, что и вначале, а после нечётного — на клетке другого цвета.\n\n**Считаем.** Число $2025$ нечётно, поэтому после $2025$ ходов конь окажется на клетке **другого** цвета, чем стартовая. Вернуться в исходную клетку он не может.\n\n**Ответ:** не может. $\blacksquare$\n\n*Следствие.* Замкнутый маршрут коня всегда состоит из чётного числа ходов. В частности, знаменитый «обход конём», проходящий через все $64$ клетки и возвращающийся в начало, состоит из $64$ ходов — числа чётного, так что препятствия нет; а вот на доске $5\times5$ замкнутого обхода не существует, потому что клеток $25$ — число нечётное.',
           'en': r'**The observation.** A knight’s move always changes the colour of the square: it moves $1$ in one direction and $2$ in the other, so the sum of the coordinates changes by $1+2=3$ or $2-1=1$ — an **odd** number in either case, and its parity flips.\n\n**The invariant.** Hence after an even number of moves the knight stands on a square of the starting colour, and after an odd number on the other colour.\n\n**Count.** The number $2025$ is odd, so after $2025$ moves the knight is on a square of the **other** colour than it started on. It cannot be back on the original square.\n\n**Answer:** it cannot. $\blacksquare$\n\n*Corollary.* A closed knight’s tour always consists of an even number of moves. The famous tour through all $64$ squares returning to the start uses $64$ moves — even, so nothing forbids it; but on a $5\times5$ board no closed tour exists, because $25$ squares is an odd number.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Докажите, что доску $8\times8$, из которой вырезаны две клетки **разного** цвета, всегда можно покрыть $31$ доминошкой.',
         'en': r'Prove that an $8\times8$ board with two squares of **different** colours removed can always be covered by $31$ dominoes.'},
   'hint': {'ru': r'Проведите по доске замкнутый маршрут, проходящий через все клетки.',
            'en': r'Draw a closed tour through all the squares of the board.'},
   'sol': {'ru': r'Мы уже знаем, что при вырезании клеток одного цвета покрытие невозможно. Здесь докажем, что при разных цветах оно **всегда** возможно.\n\n**Построение маршрута.** Проведём по доске замкнутый маршрут («змейку»), проходящий ровно один раз через каждую из $64$ клеток и возвращающийся в начало. Такой маршрут построить легко: идём по первой строке слева направо, спускаемся в конце, идём по второй строке справа налево, и так до восьмой строки; а из последней клетки восьмой строки поднимаемся по левому столбцу обратно в начало.\n\nСоседние по маршруту клетки соседствуют и на доске, поэтому пара соседних клеток маршрута — это ровно место для доминошки.\n\n**Ключевое свойство маршрута.** Клетки вдоль маршрута чередуются по цвету — ведь соседние клетки доски всегда разного цвета. Маршрут замкнут и содержит $64$ клетки, то есть чётное число, так что чередование согласовано.\n\n**Вырезаем две клетки.** Уберём с маршрута две вырезанные клетки. Замкнутый маршрут распадётся на **две дуги** (если вырезанные клетки не соседние) или на **одну дугу** (если соседние).\n\nВ каждой дуге цвета чередуются, а концы дуги — это клетки, соседние с вырезанными. Так как вырезанные клетки разного цвета, каждая дуга содержит **чётное** число клеток. (Действительно, дуга между двумя вырезанными клетками начинается и заканчивается клетками разных цветов, а вдоль дуги цвета чередуются — значит длина дуги чётна.)\n\n**Покрываем.** Каждую дугу чётной длины разобьём на пары подряд идущих клеток и положим на каждую пару доминошку. Все $62$ клетки окажутся покрыты $31$ доминошкой. $\blacksquare$\n\n*Замечание.* Это утверждение известно как теорема Гомори. Вместе с задачей о двух углах оно даёт полный ответ: покрытие возможно **тогда и только тогда**, когда вырезаны клетки разного цвета.',
           'en': r'We already know that removing two squares of the same colour makes a covering impossible. Here we show that with different colours it is **always** possible.\n\n**Build a tour.** Draw a closed "snake" through the board visiting each of the $64$ squares exactly once and returning to the start: run along the first row left to right, step down, run along the second row right to left, and so on to the eighth row; then climb the left column back to the start.\n\nSquares adjacent along the tour are adjacent on the board, so a pair of consecutive tour squares is exactly a place for a domino.\n\n**The key property.** Colours alternate along the tour, since adjacent board squares always differ in colour. The tour is closed and has $64$ squares, an even number, so the alternation is consistent.\n\n**Remove the two squares.** Delete them from the tour. The closed tour falls into **two arcs** (if the removed squares are not consecutive) or **one arc** (if they are).\n\nColours alternate along each arc, and its ends are the squares next to the removed ones. Since the removed squares have different colours, each arc contains an **even** number of squares.\n\n**Cover.** Split each even-length arc into consecutive pairs and place a domino on each. All $62$ squares are covered by $31$ dominoes. $\blacksquare$\n\n*Remark.* This is Gomory’s theorem. Together with the two-corners problem it gives the complete answer: a covering exists **if and only if** the two removed squares have different colours.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 3,
   'q': {'ru': r'**Ханойская башня.** На одном из трёх стержней надет $n$ дисков разного размера — сверху меньшие. За ход разрешается переносить верхний диск с одного стержня на другой, но нельзя класть больший диск на меньший. Докажите, что перенести всю башню на другой стержень можно ровно за $2^{n}-1$ ходов и что меньшим числом ходов обойтись нельзя.',
         'en': r'**The Tower of Hanoi.** One of three pegs carries $n$ discs of different sizes, the smaller on top. A move takes the top disc from one peg to another, never placing a larger disc on a smaller one. Prove that the whole tower can be moved to another peg in exactly $2^{n}-1$ moves, and that fewer moves are impossible.'},
   'hint': {'ru': r'Индукция: чтобы перенести $n$ дисков, надо сначала снять $n-1$ верхних.',
            'en': r'Induct: to move $n$ discs the top $n-1$ must be taken off first.'},
   'sol': {'ru': r'Обозначим через $T(n)$ наименьшее число ходов, за которое можно перенести башню из $n$ дисков на другой стержень.\n\n**Верхняя оценка: $T(n)\le2^{n}-1$.** Докажем индукцией, предъявив стратегию.\n\n*База $n=1$:* один диск переносится за один ход, и $2^{1}-1=1$ ✓\n\n*Переход:* пусть башню из $n$ дисков умеем переносить за $2^{n}-1$ ходов. Для $n+1$ дисков поступим так:\n\n$\bullet$ перенесём верхние $n$ дисков на свободный стержень — $2^{n}-1$ ходов;\n$\bullet$ перенесём самый большой диск на целевой стержень — $1$ ход;\n$\bullet$ перенесём $n$ дисков со свободного стержня на целевой — ещё $2^{n}-1$ ходов.\n\nБольшой диск лежит на дне и никому не мешает, поэтому обе «малые» задачи решаются той же стратегией. Всего $$\left(2^{n}-1\right)+1+\left(2^{n}-1\right)=2^{\,n+1}-1 . \qquad\square$$\n\n**Нижняя оценка: $T(n)\ge2^{n}-1$.** Снова индукция.\n\n*База $n=1$:* без ходов не обойтись, значит $T(1)\ge1$ ✓\n\n*Переход:* рассмотрим любую последовательность ходов, переносящую $n+1$ дисков.\n\nВ какой-то момент самый большой диск обязан переместиться (иначе он останется на исходном стержне). Рассмотрим **первый** такой момент. Чтобы сдвинуть самый большой диск, нужно, чтобы над ним ничего не лежало **и** чтобы целевой стержень был свободен. Значит все остальные $n$ дисков в этот момент собраны на **третьем** стержне — то есть перед этим ходом уже была решена задача переноса $n$ дисков, а на неё нужно не менее $T(n)$ ходов.\n\nЗатем идёт ход самого большого диска — ещё $1$.\n\nПосле этого $n$ дисков надо перенести с третьего стержня на целевой — снова не менее $T(n)$ ходов.\n\nИтого $$T(n+1)\ \ge\ 2\,T(n)+1\ \ge\ 2\left(2^{n}-1\right)+1=2^{\,n+1}-1 . \qquad\square$$\n\n**Вывод.** Обе оценки совпадают, значит $$T(n)=2^{n}-1 . \qquad\blacksquare$$\n\n*Числа.* Для $n=64$ (легендарная «башня Брахмы») это $2^{64}-1\approx1{,}8\cdot10^{19}$ ходов: даже по одному ходу в секунду понадобилось бы около $585$ миллиардов лет.',
           'en': r'Let $T(n)$ be the least number of moves needed to shift a tower of $n$ discs to another peg.\n\n**Upper bound: $T(n)\le2^{n}-1$.** Induct, exhibiting a strategy.\n\n*Base $n=1$:* one disc takes one move, and $2^{1}-1=1$ ✓\n\n*Step:* suppose a tower of $n$ discs can be moved in $2^{n}-1$ moves. For $n+1$ discs:\n\n$\bullet$ move the top $n$ discs to the free peg — $2^{n}-1$ moves;\n$\bullet$ move the largest disc to the target peg — $1$ move;\n$\bullet$ move the $n$ discs from the free peg onto the target — another $2^{n}-1$ moves.\n\nThe largest disc sits at the bottom and never obstructs anything, so both "small" tasks use the same strategy. In total $$\left(2^{n}-1\right)+1+\left(2^{n}-1\right)=2^{\,n+1}-1 . \qquad\square$$\n\n**Lower bound: $T(n)\ge2^{n}-1$.** Induct again.\n\n*Base $n=1$:* a move is unavoidable, so $T(1)\ge1$ ✓\n\n*Step:* take any sequence of moves shifting $n+1$ discs.\n\nAt some point the largest disc must move (otherwise it stays put). Consider the **first** such moment. To move the largest disc, nothing may lie on it **and** the target peg must be empty. So at that instant all the other $n$ discs sit on the **third** peg — that is, a shift of $n$ discs has already been completed, needing at least $T(n)$ moves.\n\nThen comes the move of the largest disc — one more.\n\nAfterwards the $n$ discs must go from the third peg to the target — again at least $T(n)$ moves.\n\nAltogether $$T(n+1)\ \ge\ 2\,T(n)+1\ \ge\ 2\left(2^{n}-1\right)+1=2^{\,n+1}-1 . \qquad\square$$\n\n**Conclusion.** The bounds agree, so $$T(n)=2^{n}-1 . \qquad\blacksquare$$\n\n*The numbers.* For $n=64$ (the legendary Tower of Brahma) this is $2^{64}-1\approx1.8\cdot10^{19}$ moves: even at one move a second it would take about $585$ billion years.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 3,
   'q': {'ru': r'Докажите, что каждое натуральное число, большее единицы, представимо в виде произведения простых чисел.',
         'en': r'Prove that every integer greater than one is a product of primes.'},
   'hint': {'ru': r'Сильная индукция или принцип наименьшего элемента.',
            'en': r'Strong induction, or the least-element principle.'},
   'sol': {'ru': r'**Способ 1: сильная индукция.**\n\n*База $n=2$:* число $2$ простое, значит оно само является произведением одного простого множителя ✓\n\n*Переход:* пусть утверждение верно для всех чисел от $2$ до $n$; докажем его для $n+1$.\n\n$\bullet$ Если $n+1$ простое, то оно само — искомое произведение (из одного множителя).\n\n$\bullet$ Если $n+1$ составное, то $n+1=ab$, где $1<a<n+1$ и $1<b<n+1$. Оба числа $a$ и $b$ лежат в промежутке от $2$ до $n$, поэтому по предположению индукции каждое из них разлагается в произведение простых. Перемножив эти разложения, получаем разложение для $n+1$.\n\nДругих случаев нет, значит утверждение верно для всех $n\ge2$. $\square$\n\n**Способ 2: принцип наименьшего элемента.**\n\nПредположим противное: существуют числа, большие единицы, не представимые в виде произведения простых. Среди всех таких чисел выберем **наименьшее**; обозначим его $N$. (Такое существует: любое непустое множество натуральных чисел имеет наименьший элемент.)\n\nЧисло $N$ не простое, иначе оно было бы произведением самого себя. Значит $N=ab$ с $1<a,b<N$.\n\nОба множителя меньше $N$ и больше единицы, поэтому — по выбору $N$ как наименьшего «плохого» числа — каждый из них представим в виде произведения простых. Но тогда и $N=ab$ представимо, вопреки предположению.\n\nПротиворечие. $\blacksquare$\n\n*Замечание.* Оба способа — это одно и то же рассуждение, записанное по-разному: принцип математической индукции и принцип наименьшего элемента равносильны. Заметим, что здесь доказано только **существование** разложения; его **единственность** (основная теорема арифметики) требует отдельного и более тонкого доказательства.',
           'en': r'**Way 1: strong induction.**\n\n*Base $n=2$:* the number $2$ is prime, hence itself a product of one prime ✓\n\n*Step:* suppose the claim holds for every number from $2$ to $n$; prove it for $n+1$.\n\n$\bullet$ If $n+1$ is prime it is itself the required product (of one factor).\n\n$\bullet$ If $n+1$ is composite then $n+1=ab$ with $1<a<n+1$ and $1<b<n+1$. Both $a$ and $b$ lie between $2$ and $n$, so by the induction hypothesis each is a product of primes. Multiplying those factorisations gives one for $n+1$.\n\nThere are no other cases, so the claim holds for every $n\ge2$. $\square$\n\n**Way 2: the least-element principle.**\n\nSuppose not: some integers greater than one are not products of primes. Among all such choose the **smallest**, call it $N$. (One exists: every non-empty set of positive integers has a least element.)\n\n$N$ is not prime, or it would be a product of itself. So $N=ab$ with $1<a,b<N$.\n\nBoth factors are smaller than $N$ and greater than one, so — by the choice of $N$ as the smallest "bad" number — each is a product of primes. But then so is $N=ab$, contrary to assumption.\n\nContradiction. $\blacksquare$\n\n*Remark.* The two ways are the same argument written differently: induction and the least-element principle are equivalent. Note that only the **existence** of a factorisation is proved here; its **uniqueness** (the fundamental theorem of arithmetic) needs a separate and subtler proof.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 3,
   'q': {'ru': r'Куча из $n$ камней делится на две меньшие кучи, при этом записывается произведение их размеров. С каждой получившейся кучей поступают так же, пока не останутся кучи по одному камню. Докажите, что сумма всех записанных произведений не зависит от способа деления, и найдите её.',
         'en': r'A pile of $n$ stones is split into two smaller piles and the product of their sizes is recorded. Each resulting pile is split the same way until only single stones remain. Prove that the sum of all recorded products does not depend on how the splitting is done, and find it.'},
   'hint': {'ru': r'Посчитайте, сколько пар камней «разделяется» на каждом шаге.',
            'en': r'Count how many pairs of stones get "separated" at each step.'},
   'sol': {'ru': r'**Ответ:** сумма всегда равна $\dfrac{n(n-1)}{2}$.\n\n**Способ 1: двойной подсчёт по парам.**\n\nРассмотрим всевозможные **пары камней** — их ровно $\dbinom n2=\dfrac{n(n-1)}{2}$.\n\nВ начале все камни в одной куче, значит каждая пара находится «вместе». В конце каждый камень лежит один, значит каждая пара «разделена».\n\nКогда куча размера $a+b$ делится на кучи размеров $a$ и $b$, разделяются ровно те пары, у которых один камень попал в первую кучу, а другой — во вторую. Таких пар ровно $ab$ — а это и есть записанное произведение.\n\nКаждая пара разделяется ровно один раз за весь процесс: пока камни вместе, они в одной куче, а после разделения уже никогда не встретятся.\n\nЗначит сумма всех записанных произведений равна общему числу пар: $$\sum ab=\binom n2=\frac{n(n-1)}{2}. \qquad\blacksquare$$\n\n**Способ 2: сильная индукция.**\n\nОбозначим через $S(n)$ сумму для кучи из $n$ камней (пока не зная, что она одна и та же).\n\n*База:* $S(1)=0$ — делить нечего, и $\tfrac{1\cdot0}{2}=0$ ✓\n\n*Переход:* пусть первое деление дало кучи размеров $a$ и $b$, где $a+b=n$. Тогда $$S(n)=ab+S(a)+S(b).$$ По предположению индукции $S(a)=\tfrac{a(a-1)}{2}$ и $S(b)=\tfrac{b(b-1)}{2}$, поэтому $$S(n)=ab+\frac{a^{2}-a}{2}+\frac{b^{2}-b}{2}=\frac{2ab+a^{2}+b^{2}-a-b}{2}=\frac{(a+b)^{2}-(a+b)}{2}=\frac{n^{2}-n}{2}.$$ Результат не зависит от выбора $a$ и $b$ — что и требовалось. $\blacksquare$\n\n*Пример.* Для $n=4$ сумма всегда равна $6$. Деление $4=2+2$, затем каждая двойка пополам: $4+1+1=6$. Деление $4=3+1$, затем $3=2+1$, затем $2=1+1$: $3+2+1=6$ ✓',
           'en': r'**Answer:** the sum is always $\dfrac{n(n-1)}{2}$.\n\n**Way 1: double counting over pairs.**\n\nConsider all **pairs of stones** — there are exactly $\dbinom n2=\dfrac{n(n-1)}{2}$ of them.\n\nAt the start all stones are in one pile, so every pair is "together". At the end each stone is alone, so every pair is "separated".\n\nWhen a pile of size $a+b$ splits into piles of sizes $a$ and $b$, the pairs separated are exactly those with one stone in each part. There are exactly $ab$ of them — which is the recorded product.\n\nEach pair is separated exactly once during the whole process: while together the stones share a pile, and once separated they never meet again.\n\nSo the sum of all recorded products equals the total number of pairs: $$\sum ab=\binom n2=\frac{n(n-1)}{2}. \qquad\blacksquare$$\n\n**Way 2: strong induction.**\n\nLet $S(n)$ denote the sum for a pile of $n$ stones (not yet knowing it is well defined).\n\n*Base:* $S(1)=0$ — nothing to split, and $\tfrac{1\cdot0}{2}=0$ ✓\n\n*Step:* suppose the first split gives piles of sizes $a$ and $b$ with $a+b=n$. Then $$S(n)=ab+S(a)+S(b).$$ By the induction hypothesis $S(a)=\tfrac{a(a-1)}{2}$ and $S(b)=\tfrac{b(b-1)}{2}$, so $$S(n)=ab+\frac{a^{2}-a}{2}+\frac{b^{2}-b}{2}=\frac{2ab+a^{2}+b^{2}-a-b}{2}=\frac{(a+b)^{2}-(a+b)}{2}=\frac{n^{2}-n}{2}.$$ The result does not depend on $a$ and $b$ — as required. $\blacksquare$\n\n*Example.* For $n=4$ the sum is always $6$. Splitting $4=2+2$ and then halving each two: $4+1+1=6$. Splitting $4=3+1$, then $3=2+1$, then $2=1+1$: $3+2+1=6$ ✓'}},

  {'src': 'Классическая задача / Classic', 'lvl': 3,
   'q': {'ru': r'Каждая точка плоскости покрашена в один из **трёх** цветов. Докажите, что найдутся две точки одного цвета на расстоянии ровно $1$.',
         'en': r'Every point of the plane is coloured in one of **three** colours. Prove that there are two points of the same colour at distance exactly $1$.'},
   'hint': {'ru': r'Постройте фигуру из единичных отрезков, у которой две точки удалены на $\sqrt3$, и предположите противное.',
            'en': r'Build a figure of unit segments with two points $\sqrt3$ apart, and argue by contradiction.'},
   'sol': {'ru': r'**Предположим противное:** никакие две точки на расстоянии $1$ не окрашены одинаково. Тогда концы любого единичного отрезка имеют разные цвета.\n\n**Шаг 1: ромб из двух треугольников.** Возьмём точку $A$ и построим ромб $ABCD$ из двух равносторонних треугольников со стороной $1$: $$ABD\ \text{и}\ CBD,$$ где $B$ и $D$ — общие вершины, а $A$ и $C$ — противоположные концы длинной диагонали.\n\nВ треугольнике $ABD$ все три стороны единичные, поэтому по предположению все три вершины разного цвета — а цветов ровно три, значит цвета $A$, $B$, $D$ — это все три цвета.\n\nТочно так же в треугольнике $CBD$ вершины $C$, $B$, $D$ окрашены во все три цвета. Но цвета $B$ и $D$ уже заняты, поэтому $C$ имеет **тот же цвет, что и $A$**.\n\n**Шаг 2: длина диагонали.** Посчитаем $AC$. Диагональ ромба, составленного из двух равносторонних треугольников со стороной $1$, равна удвоенной высоте такого треугольника: $$AC=2\cdot\frac{\sqrt3}{2}=\sqrt3 .$$\n\nИтак, доказано: **любые две точки на расстоянии $\sqrt3$ одноцветны.**\n\n**Шаг 3: противоречие.** Возьмём произвольную точку $O$ и окружность радиуса $\sqrt3$ с центром в ней. По шагу 2 все точки этой окружности имеют тот же цвет, что и $O$ — то есть вся окружность одноцветна.\n\nНо радиус $\sqrt3>\tfrac12$, поэтому на такой окружности найдутся две точки на расстоянии ровно $1$: хорда длины $1$ существует в любой окружности радиуса не меньше $\tfrac12$.\n\nЭти две точки одноцветны и удалены на $1$ — противоречие с предположением. $\blacksquare$\n\n*Замечание.* Утверждение верно и для трёх цветов, и, как показывает та же конструкция в усиленном виде, для четырёх — а вот для семи цветов плоскость раскрасить без одноцветных единичных пар **можно**. Точное наименьшее число цветов (так называемое хроматическое число плоскости) до сих пор неизвестно: доказано лишь, что оно лежит между $5$ и $7$.',
           'en': r'**Suppose not:** no two points at distance $1$ share a colour. Then the ends of any unit segment have different colours.\n\n**Step 1: a rhombus of two triangles.** Take a point $A$ and build a rhombus $ABCD$ from two equilateral triangles of side $1$: $$ABD\ \text{and}\ CBD,$$ where $B$ and $D$ are the shared vertices and $A$, $C$ the opposite ends of the long diagonal.\n\nIn the triangle $ABD$ all three sides are unit, so by assumption all three vertices have different colours — and there are exactly three colours, so $A$, $B$, $D$ use all of them.\n\nLikewise in $CBD$ the vertices $C$, $B$, $D$ use all three colours. But the colours of $B$ and $D$ are already taken, so $C$ has **the same colour as $A$**.\n\n**Step 2: the diagonal.** Compute $AC$. The long diagonal of a rhombus made of two equilateral triangles of side $1$ is twice the altitude of such a triangle: $$AC=2\cdot\frac{\sqrt3}{2}=\sqrt3 .$$\n\nSo we have shown: **any two points at distance $\sqrt3$ have the same colour.**\n\n**Step 3: the contradiction.** Take any point $O$ and the circle of radius $\sqrt3$ around it. By Step 2 every point of that circle has the colour of $O$ — the whole circle is monochromatic.\n\nBut the radius $\sqrt3>\tfrac12$, so that circle carries two points at distance exactly $1$: a chord of length $1$ exists in any circle of radius at least $\tfrac12$.\n\nThose two points share a colour and are $1$ apart — contradicting the assumption. $\blacksquare$\n\n*Remark.* The statement holds for three colours and, by a strengthened version of the same construction, for four — while with seven colours the plane **can** be coloured with no monochromatic unit pair. The exact minimum (the chromatic number of the plane) is still unknown: it is only known to lie between $5$ and $7$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 3,
   'q': {'ru': r'В классе $30$ учеников. Известно, что среди любых трёх из них найдутся двое знакомых. Докажите, что найдётся ученик, у которого не менее $15$ знакомых в классе.',
         'en': r'A class has $30$ pupils, and among any three of them two are acquainted. Prove that some pupil has at least $15$ acquaintances in the class.'},
   'hint': {'ru': r'Если кто-то не знаком с двумя учениками, посмотрите на этих двоих.',
            'en': r'If someone is unacquainted with two pupils, look at those two.'},
   'sol': {'ru': r'**Случай 1: все ученики попарно знакомы.** Тогда у каждого по $29$ знакомых, и утверждение очевидно.\n\n**Случай 2: есть двое незнакомых.** Пусть ученики $A$ и $B$ не знакомы.\n\nВозьмём любого третьего ученика $C$. По условию среди тройки $\{A,B,C\}$ найдутся двое знакомых. Знакомыми не могут быть $A$ и $B$, значит $C$ знаком с $A$ или с $B$ (возможно, с обоими).\n\nЗначит **каждый** из оставшихся $28$ учеников знаком хотя бы с одним из $A$, $B$.\n\nОбозначим через $x$ число знакомых у $A$ и через $y$ — у $B$. Каждый из $28$ учеников учтён хотя бы в одном из этих чисел, поэтому $$x+y\ \ge\ 28 .$$\n\nПо принципу среднего одно из чисел $x$, $y$ не меньше $\dfrac{28}{2}=14$. Если хотя бы одно из них не меньше $15$, утверждение доказано.\n\n**Остаётся случай $x=y=14$.** Тогда $x+y=28$, а значит **каждый** из $28$ учеников знаком ровно с одним из $A$, $B$ — если бы кто-то был знаком с обоими, сумма превысила бы $28$. Разобьём этих $28$ на две группы: $P$ — знакомые $A$ (их $14$) и $Q$ — знакомые $B$ (их $14$).\n\nВозьмём любого $p\in P$ и любого $q\in Q$. Рассмотрим тройку $\{p,q,A\}$: ученик $q$ не знаком с $A$ (иначе он попал бы и в $P$), поэтому знакомыми должны быть $p$ и $q$.\n\nЗначит **каждый** ученик из $P$ знаком с **каждым** из $Q$. Тогда у любого $p\in P$ есть как минимум $14$ знакомых в $Q$ плюс сам $A$ — итого не менее $15$ знакомых.\n\n**Вывод.** В любом случае найдётся ученик, у которого не менее $15$ знакомых. $\blacksquare$',
           'en': r'**Case 1: everybody knows everybody.** Then each pupil has $29$ acquaintances and the claim is clear.\n\n**Case 2: two pupils are unacquainted.** Say $A$ and $B$ do not know each other.\n\nTake any third pupil $C$. By hypothesis two of $\{A,B,C\}$ are acquainted, and it cannot be $A$ and $B$, so $C$ knows $A$ or $B$ (possibly both).\n\nSo **every** one of the remaining $28$ pupils knows at least one of $A$, $B$.\n\nLet $x$ be the number of acquaintances of $A$ and $y$ that of $B$. Each of the $28$ is counted in at least one of these, so $$x+y\ \ge\ 28 ,$$ and the averaging principle gives $\max(x,y)\ge14$. If one of them is at least $15$ we are done.\n\n**The remaining case is $x=y=14$.** Then $x+y=28$, so **each** of the $28$ knows exactly one of $A$, $B$ — anyone knowing both would push the sum above $28$. Split them into $P$, the acquaintances of $A$ ($14$ of them), and $Q$, those of $B$ ($14$ of them).\n\nTake any $p\in P$ and any $q\in Q$ and look at the triple $\{p,q,A\}$: the pupil $q$ does not know $A$ (else $q$ would be in $P$ too), so $p$ and $q$ must be acquainted.\n\nHence **every** pupil of $P$ knows **every** pupil of $Q$. So any $p\in P$ has at least $14$ acquaintances in $Q$ plus $A$ himself — at least $15$ in all.\n\n**Conclusion.** In every case some pupil has at least $15$ acquaintances. $\blacksquare$'}},
 ],
}
