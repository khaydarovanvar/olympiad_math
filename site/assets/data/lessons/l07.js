/* Topic 7 — generated from content/lesson_07.py, do not edit by hand. */
window.LESSONS = window.LESSONS || {};
window.LESSONS[7] = {
 "n": 7,
 "cat": "alg",
 "title": {
  "ru": "Последовательности и суммы",
  "en": "Sequences and series"
 },
 "sub": {
  "ru": "Арифметическая и геометрическая прогрессии, телескопические суммы, рекуррентные формулы и числа Фибоначчи.",
  "en": "Arithmetic and geometric progressions, telescoping sums, recurrences and the Fibonacci numbers."
 },
 "goals": {
  "ru": [
   "Свободно пользоваться формулами $n$-го члена и суммы для обеих прогрессий.",
   "Считать суммы телескопированием, разбивая слагаемое на разность.",
   "Доказывать формулы для сумм методом математической индукции.",
   "Работать с рекуррентными последовательностями, в том числе с числами Фибоначчи."
  ],
  "en": [
   "Use the $n$-th term and sum formulas for both progressions fluently.",
   "Evaluate sums by telescoping, splitting each term into a difference.",
   "Prove summation formulas by mathematical induction.",
   "Handle recurrences, the Fibonacci numbers included."
  ]
 },
 "sections": [
  {
   "h": {
    "ru": "Два способа задать последовательность",
    "en": "Two ways to define a sequence"
   },
   "blocks": [
    {
     "t": "def",
     "name": {
      "ru": "Последовательность",
      "en": "Sequence"
     },
     "text": {
      "ru": "**Последовательность** — это занумерованный набор чисел $a_1,a_2,a_3,\\dots$ Задать её можно двумя способами: **формулой общего члена** (например, $a_n=n^{2}$) или **рекуррентно** — указав первые члены и правило, по которому каждый следующий получается из предыдущих (например, $a_1=1$, $a_{n+1}=2a_n+1$).",
      "en": "A **sequence** is a numbered list of numbers $a_1,a_2,a_3,\\dots$ It can be given in two ways: by a **closed formula** (for example $a_n=n^{2}$) or **recursively** — by naming the first terms and the rule producing each next one from the previous ones (for example $a_1=1$, $a_{n+1}=2a_n+1$)."
     }
    },
    {
     "t": "p",
     "text": {
      "ru": "Рекуррентное задание считать легко, но неудобно: чтобы узнать $a_{100}$, придётся пройти сто шагов. Поэтому типичная задача звучит так: **дана рекуррента — найдите формулу общего члена**. Иногда её удаётся угадать по первым членам, а затем доказать индукцией.",
      "en": "A recursive definition is easy to compute with but awkward: to reach $a_{100}$ you must take a hundred steps. So the typical problem reads: **given a recurrence, find the closed formula**. Often it can be guessed from the first few terms and then proved by induction."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Последовательность задана условиями $a_1=1$ и $a_{n+1}=2a_n+1$. Найдите формулу общего члена.",
      "en": "A sequence is given by $a_1=1$ and $a_{n+1}=2a_n+1$. Find a closed formula."
     },
     "steps": {
      "ru": [
       "Выпишем первые члены: $1,\\ 3,\\ 7,\\ 15,\\ 31,\\ 63,\\dots$",
       "Каждое из них на единицу меньше степени двойки: $2-1,\\ 4-1,\\ 8-1,\\ 16-1,\\dots$",
       "Гипотеза: $a_n=2^{n}-1$.",
       "**База.** $a_1=2^{1}-1=1$ ✓",
       "**Переход.** Пусть $a_n=2^{n}-1$. Тогда $$a_{n+1}=2\\left(2^{n}-1\\right)+1=2^{n+1}-2+1=2^{n+1}-1,$$ то есть формула верна и для $n+1$.",
       "По индукции она верна при всех $n$."
      ],
      "en": [
       "Write out the first terms: $1,\\ 3,\\ 7,\\ 15,\\ 31,\\ 63,\\dots$",
       "Each is one less than a power of two: $2-1,\\ 4-1,\\ 8-1,\\ 16-1,\\dots$",
       "Guess: $a_n=2^{n}-1$.",
       "**Base.** $a_1=2^{1}-1=1$ ✓",
       "**Step.** Suppose $a_n=2^{n}-1$. Then $$a_{n+1}=2\\left(2^{n}-1\\right)+1=2^{n+1}-2+1=2^{n+1}-1,$$ so the formula holds for $n+1$ too.",
       "By induction it holds for every $n$."
      ]
     },
     "ans": {
      "ru": "$a_n=2^{n}-1$.",
      "en": "$a_n=2^{n}-1$."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Схема индукции",
      "en": "The shape of an induction"
     },
     "text": {
      "ru": "Доказательство по индукции всегда состоит ровно из двух частей.\n\n**База.** Проверяем утверждение при наименьшем $n$ (обычно $n=1$).\n\n**Переход.** Предполагаем, что утверждение верно при $n$, и **выводим** его для $n+1$.\n\nЕсли оба шага сделаны, утверждение верно для всех $n$. Пропуск базы — самая частая ошибка: без неё «доказать» можно и заведомо ложное.",
      "en": "An induction proof always has exactly two parts.\n\n**Base.** Check the statement at the smallest $n$ (usually $n=1$).\n\n**Step.** Assume it holds for $n$ and **derive** it for $n+1$.\n\nWith both parts done, the statement holds for every $n$. Skipping the base is the commonest mistake: without it one can \"prove\" something plainly false."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Арифметическая прогрессия",
    "en": "Arithmetic progressions"
   },
   "blocks": [
    {
     "t": "def",
     "name": {
      "ru": "Арифметическая прогрессия",
      "en": "Arithmetic progression"
     },
     "text": {
      "ru": "Последовательность, в которой каждый следующий член получается прибавлением одного и того же числа $d$ — **разности** прогрессии: $$a_{n+1}=a_n+d .$$",
      "en": "A sequence in which each term is obtained from the previous one by adding the same number $d$, the **common difference**: $$a_{n+1}=a_n+d .$$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Формулы прогрессии",
      "en": "The progression formulas"
     },
     "text": {
      "ru": "$$a_n=a_1+(n-1)d,\\qquad S_n=a_1+a_2+\\dots+a_n=\\frac{a_1+a_n}{2}\\cdot n=\\frac{2a_1+(n-1)d}{2}\\cdot n .$$",
      "en": "$$a_n=a_1+(n-1)d,\\qquad S_n=a_1+a_2+\\dots+a_n=\\frac{a_1+a_n}{2}\\cdot n=\\frac{2a_1+(n-1)d}{2}\\cdot n .$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Первая формула очевидна: от $a_1$ до $a_n$ сделано $n-1$ шагов по $d$.\n\nВторую доказывают приёмом Гаусса: запишем сумму дважды, во второй раз в обратном порядке, и сложим по столбцам: $$\\begin{aligned} S_n&=a_1+a_2+\\dots+a_{n-1}+a_n\\\\ S_n&=a_n+a_{n-1}+\\dots+a_2+a_1 \\end{aligned}$$ В каждом столбце стоит пара вида $a_k+a_{n+1-k}$. Но $$a_k+a_{n+1-k}=\\bigl(a_1+(k-1)d\\bigr)+\\bigl(a_1+(n-k)d\\bigr)=2a_1+(n-1)d=a_1+a_n$$ — одно и то же число для всех столбцов. Столбцов $n$, поэтому $2S_n=n(a_1+a_n)$. $\\blacksquare$",
      "en": "The first formula is clear: getting from $a_1$ to $a_n$ takes $n-1$ steps of size $d$.\n\nThe second is proved by Gauss’s trick: write the sum twice, the second time backwards, and add column by column: $$\\begin{aligned} S_n&=a_1+a_2+\\dots+a_{n-1}+a_n\\\\ S_n&=a_n+a_{n-1}+\\dots+a_2+a_1 \\end{aligned}$$ Each column is a pair $a_k+a_{n+1-k}$. But $$a_k+a_{n+1-k}=\\bigl(a_1+(k-1)d\\bigr)+\\bigl(a_1+(n-k)d\\bigr)=2a_1+(n-1)d=a_1+a_n$$ — the same number in every column. There are $n$ columns, so $2S_n=n(a_1+a_n)$. $\\blacksquare$"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Самый нужный частный случай: при $a_1=1$, $d=1$ получаем $$1+2+3+\\dots+n=\\frac{n(n+1)}{2}.$$ Эту формулу надо знать так же твёрдо, как таблицу умножения.",
      "en": "The case you will use most: $a_1=1$, $d=1$ gives $$1+2+3+\\dots+n=\\frac{n(n+1)}{2}.$$ Know this as solidly as the multiplication table."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Характеристическое свойство",
      "en": "The characteristic property"
     },
     "text": {
      "ru": "Последовательность является арифметической прогрессией тогда и только тогда, когда каждый её член (кроме крайних) — среднее арифметическое соседей: $$a_n=\\frac{a_{n-1}+a_{n+1}}{2}.$$",
      "en": "A sequence is an arithmetic progression if and only if every term (except the end ones) is the average of its neighbours: $$a_n=\\frac{a_{n-1}+a_{n+1}}{2}.$$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Сколько трёхзначных чисел делится на $7$, и чему равна их сумма?",
      "en": "How many three-digit numbers are divisible by $7$, and what is their sum?"
     },
     "steps": {
      "ru": [
       "Наименьшее трёхзначное кратное семи: $100=7\\cdot14+2$, значит это $7\\cdot15=105$.",
       "Наибольшее: $999=7\\cdot142+5$, значит это $7\\cdot142=994$.",
       "Числа $105,112,\\dots,994$ образуют арифметическую прогрессию с $d=7$.",
       "Количество: из $994=105+(n-1)\\cdot7$ получаем $n-1=\\tfrac{889}{7}=127$, то есть $n=128$.",
       "Сумма: $S=\\dfrac{105+994}{2}\\cdot128=\\dfrac{1099}{2}\\cdot128=1099\\cdot64=70\\,336$."
      ],
      "en": [
       "The smallest three-digit multiple of seven: $100=7\\cdot14+2$, so it is $7\\cdot15=105$.",
       "The largest: $999=7\\cdot142+5$, so it is $7\\cdot142=994$.",
       "The numbers $105,112,\\dots,994$ form an arithmetic progression with $d=7$.",
       "Count: from $994=105+(n-1)\\cdot7$ we get $n-1=\\tfrac{889}{7}=127$, so $n=128$.",
       "Sum: $S=\\dfrac{105+994}{2}\\cdot128=\\dfrac{1099}{2}\\cdot128=1099\\cdot64=70\\,336$."
      ]
     },
     "ans": {
      "ru": "$128$ чисел, их сумма равна $70\\,336$.",
      "en": "$128$ numbers, with sum $70\\,336$."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Геометрическая прогрессия",
    "en": "Geometric progressions"
   },
   "blocks": [
    {
     "t": "def",
     "name": {
      "ru": "Геометрическая прогрессия",
      "en": "Geometric progression"
     },
     "text": {
      "ru": "Последовательность, в которой каждый следующий член получается умножением на одно и то же число $q\\ne0$ — **знаменатель** прогрессии: $$b_{n+1}=b_n\\cdot q .$$",
      "en": "A sequence in which each term comes from the previous one by multiplying by the same number $q\\ne0$, the **common ratio**: $$b_{n+1}=b_n\\cdot q .$$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Формулы прогрессии",
      "en": "The progression formulas"
     },
     "text": {
      "ru": "$$b_n=b_1q^{\\,n-1},\\qquad S_n=b_1\\cdot\\frac{q^{n}-1}{q-1}\\quad(q\\ne1),$$ а при $|q|<1$ сумма всех членов бесконечной прогрессии равна $$S=\\frac{b_1}{1-q}.$$",
      "en": "$$b_n=b_1q^{\\,n-1},\\qquad S_n=b_1\\cdot\\frac{q^{n}-1}{q-1}\\quad(q\\ne1),$$ and when $|q|<1$ the sum of the whole infinite progression is $$S=\\frac{b_1}{1-q}.$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Умножим сумму на $q$ и вычтем: $$\\begin{aligned} S_n&=b_1+b_1q+b_1q^{2}+\\dots+b_1q^{\\,n-1},\\\\ qS_n&=\\hphantom{b_1+{}}b_1q+b_1q^{2}+\\dots+b_1q^{\\,n-1}+b_1q^{n}. \\end{aligned}$$ Почти все слагаемые совпадают, поэтому $$qS_n-S_n=b_1q^{n}-b_1,\\qquad S_n(q-1)=b_1\\left(q^{n}-1\\right),$$ откуда и получается формула. При $|q|<1$ величина $q^{n}$ становится сколь угодно малой с ростом $n$, и сумма стремится к $\\dfrac{b_1}{1-q}$. $\\blacksquare$",
      "en": "Multiply the sum by $q$ and subtract: $$\\begin{aligned} S_n&=b_1+b_1q+b_1q^{2}+\\dots+b_1q^{\\,n-1},\\\\ qS_n&=\\hphantom{b_1+{}}b_1q+b_1q^{2}+\\dots+b_1q^{\\,n-1}+b_1q^{n}. \\end{aligned}$$ Almost every term matches, so $$qS_n-S_n=b_1q^{n}-b_1,\\qquad S_n(q-1)=b_1\\left(q^{n}-1\\right),$$ which gives the formula. When $|q|<1$ the quantity $q^{n}$ becomes arbitrarily small as $n$ grows, and the sum tends to $\\dfrac{b_1}{1-q}$. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Переведите бесконечную десятичную дробь $0{,}(27)=0{,}272727\\dots$ в обыкновенную.",
      "en": "Convert the repeating decimal $0.(27)=0.272727\\dots$ into a fraction."
     },
     "steps": {
      "ru": [
       "Запишем дробь как сумму: $$0{,}272727\\dots=\\frac{27}{100}+\\frac{27}{100^{2}}+\\frac{27}{100^{3}}+\\dots$$",
       "Это бесконечная геометрическая прогрессия с $b_1=\\tfrac{27}{100}$ и $q=\\tfrac1{100}$, причём $|q|<1$.",
       "$$S=\\frac{b_1}{1-q}=\\frac{\\frac{27}{100}}{1-\\frac1{100}}=\\frac{\\frac{27}{100}}{\\frac{99}{100}}=\\frac{27}{99}=\\frac{3}{11}.$$",
       "Проверка делением: $3:11=0{,}2727\\dots$ ✓"
      ],
      "en": [
       "Write the decimal as a sum: $$0.272727\\dots=\\frac{27}{100}+\\frac{27}{100^{2}}+\\frac{27}{100^{3}}+\\dots$$",
       "This is an infinite geometric progression with $b_1=\\tfrac{27}{100}$ and $q=\\tfrac1{100}$, and $|q|<1$.",
       "$$S=\\frac{b_1}{1-q}=\\frac{\\frac{27}{100}}{1-\\frac1{100}}=\\frac{\\frac{27}{100}}{\\frac{99}{100}}=\\frac{27}{99}=\\frac{3}{11}.$$",
       "Check by division: $3:11=0.2727\\dots$ ✓"
      ]
     },
     "ans": {
      "ru": "$0{,}(27)=\\dfrac{3}{11}$.",
      "en": "$0.(27)=\\dfrac{3}{11}$."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Тот же счёт объясняет знаменитое равенство $0{,}(9)=1$: это прогрессия с $b_1=\\tfrac9{10}$ и $q=\\tfrac1{10}$, её сумма равна $\\tfrac{9/10}{9/10}=1$.",
      "en": "The same computation explains the famous equality $0.(9)=1$: it is a progression with $b_1=\\tfrac9{10}$ and $q=\\tfrac1{10}$, whose sum is $\\tfrac{9/10}{9/10}=1$."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Телескопические суммы",
    "en": "Telescoping sums"
   },
   "blocks": [
    {
     "t": "idea",
     "text": {
      "ru": "Самый сильный приём для сумм. Если каждое слагаемое удаётся записать как **разность** соседних значений одной и той же величины, $$c_k=f(k)-f(k+1),$$ то при сложении всё внутри сокращается: $$\\sum_{k=1}^{n}c_k=f(1)-f(n+1).$$ Сумма из $n$ слагаемых считается за одну строку.",
      "en": "The most powerful move for sums. If each term can be written as a **difference** of neighbouring values of one quantity, $$c_k=f(k)-f(k+1),$$ then everything in the middle cancels on adding: $$\\sum_{k=1}^{n}c_k=f(1)-f(n+1).$$ A sum of $n$ terms collapses to one line."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Вычислите $\\dfrac1{1\\cdot2}+\\dfrac1{2\\cdot3}+\\dots+\\dfrac1{n(n+1)}$.",
      "en": "Evaluate $\\dfrac1{1\\cdot2}+\\dfrac1{2\\cdot3}+\\dots+\\dfrac1{n(n+1)}$."
     },
     "steps": {
      "ru": [
       "Разложим общее слагаемое: $$\\frac1{k(k+1)}=\\frac{(k+1)-k}{k(k+1)}=\\frac1k-\\frac1{k+1}.$$",
       "Складываем: $$\\left(\\frac11-\\frac12\\right)+\\left(\\frac12-\\frac13\\right)+\\dots+\\left(\\frac1n-\\frac1{n+1}\\right).$$",
       "Все внутренние слагаемые встречаются дважды с противоположными знаками и сокращаются.",
       "Остаются только края: $1-\\dfrac1{n+1}=\\dfrac{n}{n+1}$."
      ],
      "en": [
       "Split the general term: $$\\frac1{k(k+1)}=\\frac{(k+1)-k}{k(k+1)}=\\frac1k-\\frac1{k+1}.$$",
       "Add them up: $$\\left(\\frac11-\\frac12\\right)+\\left(\\frac12-\\frac13\\right)+\\dots+\\left(\\frac1n-\\frac1{n+1}\\right).$$",
       "Every interior term appears twice with opposite signs and cancels.",
       "Only the ends survive: $1-\\dfrac1{n+1}=\\dfrac{n}{n+1}$."
      ]
     },
     "ans": {
      "ru": "$\\dfrac{n}{n+1}$.",
      "en": "$\\dfrac{n}{n+1}$."
     }
    },
    {
     "t": "p",
     "text": {
      "ru": "Три суммы степеней стоит просто помнить. Все они доказываются индукцией (или телескопированием подходящего выражения):",
      "en": "Three power sums are worth memorising. All are proved by induction (or by telescoping a suitable expression):"
     }
    },
    {
     "t": "eq",
     "tex": "\\begin{aligned} 1+2+\\dots+n&=\\frac{n(n+1)}{2},\\\\[2pt] 1^{2}+2^{2}+\\dots+n^{2}&=\\frac{n(n+1)(2n+1)}{6},\\\\[2pt] 1^{3}+2^{3}+\\dots+n^{3}&=\\left(\\frac{n(n+1)}{2}\\right)^{2}. \\end{aligned}"
    },
    {
     "t": "note",
     "text": {
      "ru": "Третья формула — красивый факт: **сумма кубов равна квадрату суммы**. Например, $1+8+27+64=100=(1+2+3+4)^{2}$.",
      "en": "The third one is a beautiful fact: **the sum of cubes is the square of the sum**. For example $1+8+27+64=100=(1+2+3+4)^{2}$."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Как искать разложение",
      "en": "How to find the splitting"
     },
     "text": {
      "ru": "Если слагаемое — дробь вида $\\dfrac{1}{k(k+m)}$, помогает тождество $$\\frac1{k(k+m)}=\\frac1m\\left(\\frac1k-\\frac1{k+m}\\right).$$ Если слагаемое содержит корни, помогает домножение на сопряжённое: $$\\frac1{\\sqrt{k}+\\sqrt{k+1}}=\\frac{\\sqrt{k+1}-\\sqrt{k}}{\\left(\\sqrt{k+1}+\\sqrt k\\right)\\left(\\sqrt{k+1}-\\sqrt k\\right)}=\\sqrt{k+1}-\\sqrt{k}.$$",
      "en": "If the term is a fraction $\\dfrac{1}{k(k+m)}$, use $$\\frac1{k(k+m)}=\\frac1m\\left(\\frac1k-\\frac1{k+m}\\right).$$ If the term contains roots, multiply by the conjugate: $$\\frac1{\\sqrt{k}+\\sqrt{k+1}}=\\frac{\\sqrt{k+1}-\\sqrt{k}}{\\left(\\sqrt{k+1}+\\sqrt k\\right)\\left(\\sqrt{k+1}-\\sqrt k\\right)}=\\sqrt{k+1}-\\sqrt{k}.$$"
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Числа Фибоначчи",
    "en": "The Fibonacci numbers"
   },
   "blocks": [
    {
     "t": "def",
     "name": {
      "ru": "Числа Фибоначчи",
      "en": "Fibonacci numbers"
     },
     "text": {
      "ru": "$$F_0=0,\\qquad F_1=1,\\qquad F_{n+1}=F_n+F_{n-1}.$$ Первые члены: $0,1,1,2,3,5,8,13,21,34,55,89,144,\\dots$",
      "en": "$$F_0=0,\\qquad F_1=1,\\qquad F_{n+1}=F_n+F_{n-1}.$$ The first terms are $0,1,1,2,3,5,8,13,21,34,55,89,144,\\dots$"
     }
    },
    {
     "t": "p",
     "text": {
      "ru": "Эти числа появляются в олимпиадах постоянно — в задачах о разбиениях, о путях по клеткам, о делимости. Полезно знать несколько их свойств.",
      "en": "These numbers appear constantly in competitions — in problems about tilings, lattice paths and divisibility. A few of their properties are worth knowing."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Сумма первых чисел Фибоначчи",
      "en": "The sum of the first Fibonacci numbers"
     },
     "text": {
      "ru": "$$F_1+F_2+\\dots+F_n=F_{n+2}-1 .$$",
      "en": "$$F_1+F_2+\\dots+F_n=F_{n+2}-1 .$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Телескопирование. Из рекурренты $F_{k+2}=F_{k+1}+F_k$ получаем $$F_k=F_{k+2}-F_{k+1}.$$ Складываем по $k$ от $1$ до $n$: $$\\sum_{k=1}^{n}F_k=\\sum_{k=1}^{n}\\left(F_{k+2}-F_{k+1}\\right)=F_{n+2}-F_{2}=F_{n+2}-1 . \\qquad\\blacksquare$$",
      "en": "Telescoping. The recurrence $F_{k+2}=F_{k+1}+F_k$ gives $$F_k=F_{k+2}-F_{k+1}.$$ Summing over $k$ from $1$ to $n$: $$\\sum_{k=1}^{n}F_k=\\sum_{k=1}^{n}\\left(F_{k+2}-F_{k+1}\\right)=F_{n+2}-F_{2}=F_{n+2}-1 . \\qquad\\blacksquare$$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Соседние числа Фибоначчи взаимно просты",
      "en": "Neighbouring Fibonacci numbers are coprime"
     },
     "text": {
      "ru": "$\\gcd\\left(F_n,F_{n+1}\\right)=1$ при всех $n\\ge1$.",
      "en": "$\\gcd\\left(F_n,F_{n+1}\\right)=1$ for every $n\\ge1$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Пусть $d$ делит и $F_n$, и $F_{n+1}$. Тогда $d$ делит их разность $F_{n+1}-F_n=F_{n-1}$. Повторяя, получаем, что $d$ делит $F_{n-2}$, затем $F_{n-3}$, и так до $F_1=1$. Значит $d=1$. $\\blacksquare$\n\nОбратите внимание: это в точности алгоритм Евклида, применённый к паре соседних чисел Фибоначчи. Именно на таких парах он работает **дольше всего** — это и есть худший случай алгоритма.",
      "en": "Let $d$ divide both $F_n$ and $F_{n+1}$. Then $d$ divides their difference $F_{n+1}-F_n=F_{n-1}$. Repeating, $d$ divides $F_{n-2}$, then $F_{n-3}$, and so on down to $F_1=1$. Hence $d=1$. $\\blacksquare$\n\nNotice that this is precisely the Euclidean algorithm run on a pair of neighbouring Fibonacci numbers. On such pairs it takes the **longest** — they are its worst case."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Сколькими способами можно подняться по лестнице из $n$ ступенек, если за один шаг разрешено подниматься на одну или на две ступеньки?",
      "en": "In how many ways can one climb a staircase of $n$ steps if each move goes up either one step or two?"
     },
     "steps": {
      "ru": [
       "Обозначим искомое число через $c_n$.",
       "Последний шаг был либо на одну ступеньку — тогда до него мы стояли на $(n-1)$-й, — либо на две, и тогда на $(n-2)$-й.",
       "Эти два случая не пересекаются и покрывают всё, поэтому $c_n=c_{n-1}+c_{n-2}$.",
       "Начальные значения: $c_1=1$ (один шаг), $c_2=2$ (два по одной или сразу две).",
       "Значит $c_n$ — сдвинутые числа Фибоначчи: $c_n=F_{n+1}$.",
       "Проверка: $c_3=3$, $c_4=5$, $c_5=8$ — действительно $F_4=3$, $F_5=5$, $F_6=8$ ✓"
      ],
      "en": [
       "Call the answer $c_n$.",
       "The last move was either one step — and then we stood on step $n-1$ — or two, and then on step $n-2$.",
       "The two cases are disjoint and cover everything, so $c_n=c_{n-1}+c_{n-2}$.",
       "Initial values: $c_1=1$ (one move), $c_2=2$ (two singles, or one double).",
       "So $c_n$ is the Fibonacci sequence shifted: $c_n=F_{n+1}$.",
       "Check: $c_3=3$, $c_4=5$, $c_5=8$ — indeed $F_4=3$, $F_5=5$, $F_6=8$ ✓"
      ]
     },
     "ans": {
      "ru": "$c_n=F_{n+1}$ способов.",
      "en": "$c_n=F_{n+1}$ ways."
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Приём из примера — **разбор по последнему шагу** — универсален для рекуррент. Спрашивайте себя: «каким мог быть последний ход, и что осталось до него?» Ответ и даёт рекуррентную формулу.",
      "en": "The move used in the example — **split by the last step** — is the universal way to build a recurrence. Ask: \"what could the last move have been, and what was left before it?\" The answer is the recurrence."
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
    "ru": "В арифметической прогрессии $a_1=5$ и $d=3$. Найдите $a_{20}$ и сумму первых двадцати членов.",
    "en": "An arithmetic progression has $a_1=5$ and $d=3$. Find $a_{20}$ and the sum of the first twenty terms."
   },
   "hint": {
    "ru": "$a_n=a_1+(n-1)d$.",
    "en": "$a_n=a_1+(n-1)d$."
   },
   "sol": {
    "ru": "$a_{20}=5+19\\cdot3=5+57=62$.\n\n$$S_{20}=\\frac{a_1+a_{20}}{2}\\cdot20=\\frac{5+62}{2}\\cdot20=\\frac{67}{2}\\cdot20=67\\cdot10=670 .$$ **Ответ:** $a_{20}=62$, $S_{20}=670$.",
    "en": "$a_{20}=5+19\\cdot3=5+57=62$.\n\n$$S_{20}=\\frac{a_1+a_{20}}{2}\\cdot20=\\frac{5+62}{2}\\cdot20=\\frac{67}{2}\\cdot20=67\\cdot10=670 .$$ **Answer:** $a_{20}=62$, $S_{20}=670$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Вычислите сумму $2+4+8+\\dots+2^{10}$.",
    "en": "Evaluate the sum $2+4+8+\\dots+2^{10}$."
   },
   "hint": {
    "ru": "Геометрическая прогрессия с $b_1=2$, $q=2$.",
    "en": "A geometric progression with $b_1=2$, $q=2$."
   },
   "sol": {
    "ru": "Это геометрическая прогрессия: $b_1=2$, $q=2$, число членов $n=10$. По формуле $$S_{10}=b_1\\cdot\\frac{q^{10}-1}{q-1}=2\\cdot\\frac{1024-1}{1}=2046 .$$ **Ответ:** $2046$. *Полезно помнить:* $1+2+4+\\dots+2^{n}=2^{n+1}-1$.",
    "en": "A geometric progression with $b_1=2$, $q=2$ and $n=10$ terms: $$S_{10}=b_1\\cdot\\frac{q^{10}-1}{q-1}=2\\cdot\\frac{1024-1}{1}=2046 .$$ **Answer:** $2046$. *Worth remembering:* $1+2+4+\\dots+2^{n}=2^{n+1}-1$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Найдите сумму бесконечной прогрессии $1+\\dfrac13+\\dfrac19+\\dfrac1{27}+\\dots$",
    "en": "Find the sum of the infinite progression $1+\\dfrac13+\\dfrac19+\\dfrac1{27}+\\dots$"
   },
   "hint": {
    "ru": "$S=\\dfrac{b_1}{1-q}$ при $|q|<1$.",
    "en": "$S=\\dfrac{b_1}{1-q}$ when $|q|<1$."
   },
   "sol": {
    "ru": "Здесь $b_1=1$ и $q=\\tfrac13$, причём $|q|<1$, значит сумма существует: $$S=\\frac{1}{1-\\frac13}=\\frac{1}{\\frac23}=\\frac32 .$$ **Ответ:** $\\tfrac32$.",
    "en": "Here $b_1=1$ and $q=\\tfrac13$ with $|q|<1$, so the sum exists: $$S=\\frac{1}{1-\\frac13}=\\frac{1}{\\frac23}=\\frac32 .$$ **Answer:** $\\tfrac32$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Вычислите $\\dfrac1{1\\cdot3}+\\dfrac1{3\\cdot5}+\\dfrac1{5\\cdot7}+\\dots+\\dfrac1{(2n-1)(2n+1)}$.",
    "en": "Evaluate $\\dfrac1{1\\cdot3}+\\dfrac1{3\\cdot5}+\\dfrac1{5\\cdot7}+\\dots+\\dfrac1{(2n-1)(2n+1)}$."
   },
   "hint": {
    "ru": "$\\dfrac1{k(k+2)}=\\dfrac12\\left(\\dfrac1k-\\dfrac1{k+2}\\right)$.",
    "en": "$\\dfrac1{k(k+2)}=\\dfrac12\\left(\\dfrac1k-\\dfrac1{k+2}\\right)$."
   },
   "sol": {
    "ru": "Разложим общее слагаемое: $$\\frac1{(2k-1)(2k+1)}=\\frac12\\left(\\frac1{2k-1}-\\frac1{2k+1}\\right),$$ что проверяется приведением к общему знаменателю: разность в скобках равна $\\tfrac{2}{(2k-1)(2k+1)}$.\n\nСкладываем от $k=1$ до $n$; внутренние слагаемые сокращаются: $$\\frac12\\left(\\frac11-\\frac1{2n+1}\\right)=\\frac12\\cdot\\frac{2n}{2n+1}=\\frac{n}{2n+1}.$$ **Ответ:** $\\dfrac{n}{2n+1}$. *Проверка при $n=2$:* $\\tfrac13+\\tfrac1{15}=\\tfrac{5+1}{15}=\\tfrac25$, и $\\tfrac{2}{5}$ ✓",
    "en": "Split the general term: $$\\frac1{(2k-1)(2k+1)}=\\frac12\\left(\\frac1{2k-1}-\\frac1{2k+1}\\right),$$ verified over a common denominator: the bracketed difference equals $\\tfrac{2}{(2k-1)(2k+1)}$.\n\nSum from $k=1$ to $n$; the interior terms cancel: $$\\frac12\\left(\\frac11-\\frac1{2n+1}\\right)=\\frac12\\cdot\\frac{2n}{2n+1}=\\frac{n}{2n+1}.$$ **Answer:** $\\dfrac{n}{2n+1}$. *Check at $n=2$:* $\\tfrac13+\\tfrac1{15}=\\tfrac{5+1}{15}=\\tfrac25$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Найдите сумму всех двузначных чисел, которые при делении на $5$ дают остаток $2$.",
    "en": "Find the sum of all two-digit numbers that leave remainder $2$ on division by $5$."
   },
   "hint": {
    "ru": "Это арифметическая прогрессия с $d=5$.",
    "en": "They form an arithmetic progression with $d=5$."
   },
   "sol": {
    "ru": "Такие числа: $12,17,22,\\dots,97$ — арифметическая прогрессия с $a_1=12$, $d=5$, $a_n=97$.\n\nКоличество: $97=12+(n-1)\\cdot5$ даёт $n-1=17$, то есть $n=18$.\n\nСумма: $$S=\\frac{12+97}{2}\\cdot18=\\frac{109}{2}\\cdot18=109\\cdot9=981 .$$ **Ответ:** $981$.",
    "en": "These numbers are $12,17,22,\\dots,97$ — an arithmetic progression with $a_1=12$, $d=5$, $a_n=97$.\n\nCount: $97=12+(n-1)\\cdot5$ gives $n-1=17$, so $n=18$.\n\nSum: $$S=\\frac{12+97}{2}\\cdot18=\\frac{109}{2}\\cdot18=109\\cdot9=981 .$$ **Answer:** $981$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что $1+3+5+\\dots+(2n-1)=n^{2}$.",
    "en": "Prove that $1+3+5+\\dots+(2n-1)=n^{2}$."
   },
   "hint": {
    "ru": "Это арифметическая прогрессия — или воспользуйтесь индукцией.",
    "en": "It is an arithmetic progression — or use induction."
   },
   "sol": {
    "ru": "**Способ 1 (прогрессия).** Слагаемые образуют арифметическую прогрессию с $a_1=1$, $a_n=2n-1$, число членов $n$. Значит $$S=\\frac{a_1+a_n}{2}\\cdot n=\\frac{1+(2n-1)}{2}\\cdot n=\\frac{2n}{2}\\cdot n=n^{2}.$$\n\n**Способ 2 (индукция).** База: при $n=1$ сумма равна $1=1^{2}$ ✓ Переход: если $1+3+\\dots+(2n-1)=n^{2}$, то $$1+3+\\dots+(2n-1)+(2n+1)=n^{2}+2n+1=(n+1)^{2}. \\qquad\\blacksquare$$\n\n*Геометрический смысл:* квадрат $n\\times n$ достраивается до квадрата $(n+1)\\times(n+1)$ уголком из $2n+1$ клеток.",
    "en": "**Method 1 (progression).** The terms form an arithmetic progression with $a_1=1$, $a_n=2n-1$ and $n$ terms, so $$S=\\frac{a_1+a_n}{2}\\cdot n=\\frac{1+(2n-1)}{2}\\cdot n=\\frac{2n}{2}\\cdot n=n^{2}.$$\n\n**Method 2 (induction).** Base: at $n=1$ the sum is $1=1^{2}$ ✓ Step: if $1+3+\\dots+(2n-1)=n^{2}$ then $$1+3+\\dots+(2n-1)+(2n+1)=n^{2}+2n+1=(n+1)^{2}. \\qquad\\blacksquare$$\n\n*Geometric meaning:* an $n\\times n$ square grows into an $(n+1)\\times(n+1)$ square by adding an L-shaped strip of $2n+1$ cells."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $1^{2}+2^{2}+\\dots+n^{2}=\\dfrac{n(n+1)(2n+1)}{6}$.",
    "en": "Prove that $1^{2}+2^{2}+\\dots+n^{2}=\\dfrac{n(n+1)(2n+1)}{6}$."
   },
   "hint": {
    "ru": "Индукция по $n$.",
    "en": "Induction on $n$."
   },
   "sol": {
    "ru": "**База.** При $n=1$ левая часть равна $1$, правая — $\\dfrac{1\\cdot2\\cdot3}{6}=1$ ✓\n\n**Переход.** Пусть формула верна для $n$. Тогда $$1^{2}+\\dots+n^{2}+(n+1)^{2}=\\frac{n(n+1)(2n+1)}{6}+(n+1)^{2}.$$ Вынесем общий множитель $\\dfrac{n+1}{6}$: $$=\\frac{n+1}{6}\\Bigl(n(2n+1)+6(n+1)\\Bigr)=\\frac{n+1}{6}\\left(2n^{2}+7n+6\\right).$$ Разложим квадратный трёхчлен: его корни $-2$ и $-\\tfrac32$, поэтому $$2n^{2}+7n+6=(n+2)(2n+3).$$ Значит сумма равна $$\\frac{(n+1)(n+2)(2n+3)}{6}=\\frac{(n+1)\\bigl((n+1)+1\\bigr)\\bigl(2(n+1)+1\\bigr)}{6},$$ то есть та же формула для $n+1$. $\\blacksquare$",
    "en": "**Base.** At $n=1$ the left side is $1$ and the right side $\\dfrac{1\\cdot2\\cdot3}{6}=1$ ✓\n\n**Step.** Assume the formula for $n$. Then $$1^{2}+\\dots+n^{2}+(n+1)^{2}=\\frac{n(n+1)(2n+1)}{6}+(n+1)^{2}.$$ Take out the common factor $\\dfrac{n+1}{6}$: $$=\\frac{n+1}{6}\\Bigl(n(2n+1)+6(n+1)\\Bigr)=\\frac{n+1}{6}\\left(2n^{2}+7n+6\\right).$$ Factor the quadratic: its roots are $-2$ and $-\\tfrac32$, so $$2n^{2}+7n+6=(n+2)(2n+3).$$ Hence the sum equals $$\\frac{(n+1)(n+2)(2n+3)}{6}=\\frac{(n+1)\\bigl((n+1)+1\\bigr)\\bigl(2(n+1)+1\\bigr)}{6},$$ the same formula at $n+1$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $1^{3}+2^{3}+\\dots+n^{3}=\\left(\\dfrac{n(n+1)}{2}\\right)^{2}$.",
    "en": "Prove that $1^{3}+2^{3}+\\dots+n^{3}=\\left(\\dfrac{n(n+1)}{2}\\right)^{2}$."
   },
   "hint": {
    "ru": "Обозначьте $T_n=\\tfrac{n(n+1)}2$ и посчитайте $T_{n+1}^{2}-T_n^{2}$.",
    "en": "Write $T_n=\\tfrac{n(n+1)}2$ and compute $T_{n+1}^{2}-T_n^{2}$."
   },
   "sol": {
    "ru": "Обозначим $T_n=\\dfrac{n(n+1)}{2}=1+2+\\dots+n$. Требуется доказать, что сумма кубов равна $T_n^{2}$.\n\n**База.** При $n=1$: $1=T_1^{2}=1$ ✓\n\n**Переход.** Достаточно проверить, что добавление куба увеличивает $T_n^{2}$ ровно на $(n+1)^{3}$, то есть что $$T_{n+1}^{2}-T_n^{2}=(n+1)^{3}.$$ Считаем как разность квадратов: $$T_{n+1}^{2}-T_n^{2}=\\left(T_{n+1}-T_n\\right)\\left(T_{n+1}+T_n\\right).$$ Но $T_{n+1}-T_n=n+1$, а $$T_{n+1}+T_n=\\frac{(n+1)(n+2)}{2}+\\frac{n(n+1)}{2}=\\frac{(n+1)(n+2+n)}{2}=\\frac{(n+1)\\cdot2(n+1)}{2}=(n+1)^{2}.$$ Значит разность равна $(n+1)\\cdot(n+1)^{2}=(n+1)^{3}$ — ровно то, что нужно. $\\blacksquare$\n\n*Проверка:* $1+8+27+64=100$, и $T_4^{2}=10^{2}=100$ ✓",
    "en": "Write $T_n=\\dfrac{n(n+1)}{2}=1+2+\\dots+n$. We must show that the sum of cubes equals $T_n^{2}$.\n\n**Base.** At $n=1$: $1=T_1^{2}=1$ ✓\n\n**Step.** It suffices to check that adding the next cube increases $T_n^{2}$ by exactly $(n+1)^{3}$, that is $$T_{n+1}^{2}-T_n^{2}=(n+1)^{3}.$$ Compute it as a difference of squares: $$T_{n+1}^{2}-T_n^{2}=\\left(T_{n+1}-T_n\\right)\\left(T_{n+1}+T_n\\right).$$ Now $T_{n+1}-T_n=n+1$, and $$T_{n+1}+T_n=\\frac{(n+1)(n+2)}{2}+\\frac{n(n+1)}{2}=\\frac{(n+1)(n+2+n)}{2}=\\frac{(n+1)\\cdot2(n+1)}{2}=(n+1)^{2}.$$ So the difference is $(n+1)\\cdot(n+1)^{2}=(n+1)^{3}$, exactly as needed. $\\blacksquare$\n\n*Check:* $1+8+27+64=100$ and $T_4^{2}=10^{2}=100$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "В арифметической прогрессии сумма первых $m$ членов равна $n$, а сумма первых $n$ членов равна $m$ (причём $m\\ne n$). Найдите сумму первых $m+n$ членов.",
    "en": "In an arithmetic progression the sum of the first $m$ terms is $n$ and the sum of the first $n$ terms is $m$ (with $m\\ne n$). Find the sum of the first $m+n$ terms."
   },
   "hint": {
    "ru": "$S_k$ — квадратичный многочлен от $k$ без свободного члена.",
    "en": "$S_k$ is a quadratic in $k$ with zero constant term."
   },
   "sol": {
    "ru": "Запишем сумму в общем виде: $$S_k=\\frac{2a_1+(k-1)d}{2}\\cdot k=\\frac{d}{2}k^{2}+\\left(a_1-\\frac d2\\right)k=Ak^{2}+Bk,$$ где $A=\\tfrac d2$ и $B=a_1-\\tfrac d2$ — константы.\n\nПо условию $$Am^{2}+Bm=n,\\qquad An^{2}+Bn=m .$$ Вычтем второе из первого: $$A\\left(m^{2}-n^{2}\\right)+B(m-n)=n-m .$$ Так как $m\\ne n$, можно поделить на $m-n$: $$A(m+n)+B=-1 .$$\n\nТеперь считаем искомую сумму: $$S_{m+n}=A(m+n)^{2}+B(m+n)=(m+n)\\bigl[A(m+n)+B\\bigr]=(m+n)\\cdot(-1)=-(m+n).$$ **Ответ:** $S_{m+n}=-(m+n)$. $\\blacksquare$",
    "en": "Write the sum in general form: $$S_k=\\frac{2a_1+(k-1)d}{2}\\cdot k=\\frac{d}{2}k^{2}+\\left(a_1-\\frac d2\\right)k=Ak^{2}+Bk,$$ where $A=\\tfrac d2$ and $B=a_1-\\tfrac d2$ are constants.\n\nBy hypothesis $$Am^{2}+Bm=n,\\qquad An^{2}+Bn=m .$$ Subtract the second from the first: $$A\\left(m^{2}-n^{2}\\right)+B(m-n)=n-m .$$ Since $m\\ne n$ we may divide by $m-n$: $$A(m+n)+B=-1 .$$\n\nNow compute the required sum: $$S_{m+n}=A(m+n)^{2}+B(m+n)=(m+n)\\bigl[A(m+n)+B\\bigr]=(m+n)\\cdot(-1)=-(m+n).$$ **Answer:** $S_{m+n}=-(m+n)$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $1\\cdot1!+2\\cdot2!+\\dots+n\\cdot n!=(n+1)!-1$.",
    "en": "Prove that $1\\cdot1!+2\\cdot2!+\\dots+n\\cdot n!=(n+1)!-1$."
   },
   "hint": {
    "ru": "$k\\cdot k!=(k+1)!-k!$.",
    "en": "$k\\cdot k!=(k+1)!-k!$."
   },
   "sol": {
    "ru": "Ключевое наблюдение: $$(k+1)!-k!=k!\\bigl((k+1)-1\\bigr)=k!\\cdot k=k\\cdot k! .$$ Значит каждое слагаемое — разность соседних факториалов, и сумма телескопируется: $$\\sum_{k=1}^{n}k\\cdot k!=\\sum_{k=1}^{n}\\Bigl((k+1)!-k!\\Bigr)=(n+1)!-1! =(n+1)!-1 . \\qquad\\blacksquare$$ *Проверка при $n=3$:* $1+4+18=23$, и $4!-1=23$ ✓",
    "en": "The key observation: $$(k+1)!-k!=k!\\bigl((k+1)-1\\bigr)=k!\\cdot k=k\\cdot k! .$$ So every term is a difference of neighbouring factorials and the sum telescopes: $$\\sum_{k=1}^{n}k\\cdot k!=\\sum_{k=1}^{n}\\Bigl((k+1)!-k!\\Bigr)=(n+1)!-1! =(n+1)!-1 . \\qquad\\blacksquare$$ *Check at $n=3$:* $1+4+18=23$ and $4!-1=23$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Найдите сумму $1+11+111+\\dots+\\underbrace{11\\ldots1}_{n}$.",
    "en": "Find the sum $1+11+111+\\dots+\\underbrace{11\\ldots1}_{n}$."
   },
   "hint": {
    "ru": "Число из $k$ единиц равно $\\dfrac{10^{k}-1}{9}$.",
    "en": "The number made of $k$ ones equals $\\dfrac{10^{k}-1}{9}$."
   },
   "sol": {
    "ru": "Число из $k$ единиц — это $\\underbrace{11\\ldots1}_{k}=\\dfrac{10^{k}-1}{9}$ (проверьте: $\\tfrac{999}{9}=111$).\n\nСкладываем: $$\\sum_{k=1}^{n}\\frac{10^{k}-1}{9}=\\frac19\\left(\\sum_{k=1}^{n}10^{k}-n\\right).$$ Внутренняя сумма — геометрическая прогрессия: $$\\sum_{k=1}^{n}10^{k}=10\\cdot\\frac{10^{n}-1}{9}=\\frac{10^{\\,n+1}-10}{9}.$$ Значит $$S=\\frac19\\left(\\frac{10^{\\,n+1}-10}{9}-n\\right)=\\frac{10^{\\,n+1}-9n-10}{81}.$$ **Ответ:** $\\dfrac{10^{\\,n+1}-9n-10}{81}$.\n\n*Проверка при $n=3$:* $1+11+111=123$, а формула даёт $\\tfrac{10000-27-10}{81}=\\tfrac{9963}{81}=123$ ✓",
    "en": "The number made of $k$ ones is $\\underbrace{11\\ldots1}_{k}=\\dfrac{10^{k}-1}{9}$ (check: $\\tfrac{999}{9}=111$).\n\nAdding up, $$\\sum_{k=1}^{n}\\frac{10^{k}-1}{9}=\\frac19\\left(\\sum_{k=1}^{n}10^{k}-n\\right).$$ The inner sum is a geometric progression: $$\\sum_{k=1}^{n}10^{k}=10\\cdot\\frac{10^{n}-1}{9}=\\frac{10^{\\,n+1}-10}{9}.$$ Hence $$S=\\frac19\\left(\\frac{10^{\\,n+1}-10}{9}-n\\right)=\\frac{10^{\\,n+1}-9n-10}{81}.$$ **Answer:** $\\dfrac{10^{\\,n+1}-9n-10}{81}$.\n\n*Check at $n=3$:* $1+11+111=123$, and the formula gives $\\tfrac{10000-27-10}{81}=\\tfrac{9963}{81}=123$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Три числа образуют арифметическую прогрессию, их сумма равна $15$. Если к первому прибавить $1$, ко второму $1$, а к третьему $4$, получится геометрическая прогрессия. Найдите исходные числа.",
    "en": "Three numbers form an arithmetic progression with sum $15$. Adding $1$ to the first, $1$ to the second and $4$ to the third turns them into a geometric progression. Find the original numbers."
   },
   "hint": {
    "ru": "Обозначьте числа как $a-d$, $a$, $a+d$.",
    "en": "Write the numbers as $a-d$, $a$, $a+d$."
   },
   "sol": {
    "ru": "Обозначим числа $a-d,\\ a,\\ a+d$. Из условия $3a=15$, то есть $a=5$, и числа равны $5-d,\\ 5,\\ 5+d$.\n\nПосле прибавления получаем $6-d,\\ 6,\\ 9+d$. Условие геометрической прогрессии — квадрат среднего равен произведению крайних: $$36=(6-d)(9+d)=54-3d-d^{2}.$$ Отсюда $$d^{2}+3d-18=0,\\qquad d=\\frac{-3\\pm\\sqrt{9+72}}{2}=\\frac{-3\\pm9}{2},$$ то есть $d=3$ или $d=-6$.\n\n**При $d=3$:** числа $2,\\ 5,\\ 8$; после прибавления $3,\\ 6,\\ 12$ — прогрессия со знаменателем $2$ ✓\n\n**При $d=-6$:** числа $11,\\ 5,\\ -1$; после прибавления $12,\\ 6,\\ 3$ — прогрессия со знаменателем $\\tfrac12$ ✓\n\n**Ответ:** $2,5,8$ или $11,5,-1$.",
    "en": "Write the numbers as $a-d,\\ a,\\ a+d$. The condition $3a=15$ gives $a=5$, so they are $5-d,\\ 5,\\ 5+d$.\n\nAfter the additions they become $6-d,\\ 6,\\ 9+d$. Being a geometric progression means the middle squared equals the product of the ends: $$36=(6-d)(9+d)=54-3d-d^{2}.$$ Hence $$d^{2}+3d-18=0,\\qquad d=\\frac{-3\\pm\\sqrt{9+72}}{2}=\\frac{-3\\pm9}{2},$$ that is $d=3$ or $d=-6$.\n\n**For $d=3$:** the numbers are $2,\\ 5,\\ 8$; after the additions $3,\\ 6,\\ 12$ — ratio $2$ ✓\n\n**For $d=-6$:** the numbers are $11,\\ 5,\\ -1$; after the additions $12,\\ 6,\\ 3$ — ratio $\\tfrac12$ ✓\n\n**Answer:** $2,5,8$ or $11,5,-1$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $F_1+F_3+F_5+\\dots+F_{2n-1}=F_{2n}$.",
    "en": "Prove that $F_1+F_3+F_5+\\dots+F_{2n-1}=F_{2n}$."
   },
   "hint": {
    "ru": "Запишите $F_{2k-1}=F_{2k}-F_{2k-2}$.",
    "en": "Write $F_{2k-1}=F_{2k}-F_{2k-2}$."
   },
   "sol": {
    "ru": "Из рекурренты $F_{2k}=F_{2k-1}+F_{2k-2}$ получаем $$F_{2k-1}=F_{2k}-F_{2k-2}.$$ Складываем по $k$ от $1$ до $n$ — сумма телескопируется: $$\\sum_{k=1}^{n}F_{2k-1}=\\sum_{k=1}^{n}\\left(F_{2k}-F_{2k-2}\\right)=F_{2n}-F_{0}=F_{2n},$$ поскольку $F_0=0$. $\\blacksquare$\n\n*Проверка при $n=3$:* $F_1+F_3+F_5=1+2+5=8=F_6$ ✓",
    "en": "The recurrence $F_{2k}=F_{2k-1}+F_{2k-2}$ gives $$F_{2k-1}=F_{2k}-F_{2k-2}.$$ Summing over $k$ from $1$ to $n$, the sum telescopes: $$\\sum_{k=1}^{n}F_{2k-1}=\\sum_{k=1}^{n}\\left(F_{2k}-F_{2k-2}\\right)=F_{2n}-F_{0}=F_{2n},$$ since $F_0=0$. $\\blacksquare$\n\n*Check at $n=3$:* $F_1+F_3+F_5=1+2+5=8=F_6$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Последовательность задана условиями $a_1=1$ и $a_{n+1}=\\dfrac{a_n}{1+a_n}$. Найдите формулу общего члена.",
    "en": "A sequence is given by $a_1=1$ and $a_{n+1}=\\dfrac{a_n}{1+a_n}$. Find a closed formula."
   },
   "hint": {
    "ru": "Посмотрите на последовательность $b_n=\\dfrac1{a_n}$.",
    "en": "Look at the sequence $b_n=\\dfrac1{a_n}$."
   },
   "sol": {
    "ru": "Все члены положительны (по индукции: если $a_n>0$, то и $a_{n+1}>0$), поэтому можно перейти к обратным величинам. Положим $b_n=\\dfrac1{a_n}$. Тогда $$b_{n+1}=\\frac{1+a_n}{a_n}=\\frac1{a_n}+1=b_n+1 .$$ Значит $b_n$ — арифметическая прогрессия с $b_1=1$ и разностью $1$, то есть $b_n=n$.\n\nВозвращаясь, получаем $$a_n=\\frac1n .$$ *Проверка:* $a_2=\\tfrac{1}{1+1}=\\tfrac12$, $a_3=\\tfrac{1/2}{3/2}=\\tfrac13$ ✓ $\\blacksquare$\n\n*Общий приём:* если рекуррента имеет вид $a_{n+1}=\\dfrac{a_n}{pa_n+q}$, переход к $1/a_n$ превращает её в линейную.",
    "en": "All terms are positive (by induction: if $a_n>0$ then $a_{n+1}>0$), so we may pass to reciprocals. Put $b_n=\\dfrac1{a_n}$. Then $$b_{n+1}=\\frac{1+a_n}{a_n}=\\frac1{a_n}+1=b_n+1 .$$ So $b_n$ is an arithmetic progression with $b_1=1$ and difference $1$, that is $b_n=n$.\n\nGoing back, $$a_n=\\frac1n .$$ *Check:* $a_2=\\tfrac{1}{1+1}=\\tfrac12$, $a_3=\\tfrac{1/2}{3/2}=\\tfrac13$ ✓ $\\blacksquare$\n\n*General move:* whenever the recurrence looks like $a_{n+1}=\\dfrac{a_n}{pa_n+q}$, passing to $1/a_n$ makes it linear."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Вычислите сумму $\\dfrac1{\\sqrt1+\\sqrt2}+\\dfrac1{\\sqrt2+\\sqrt3}+\\dots+\\dfrac1{\\sqrt{n}+\\sqrt{n+1}}$.",
    "en": "Evaluate $\\dfrac1{\\sqrt1+\\sqrt2}+\\dfrac1{\\sqrt2+\\sqrt3}+\\dots+\\dfrac1{\\sqrt{n}+\\sqrt{n+1}}$."
   },
   "hint": {
    "ru": "Домножьте каждое слагаемое на сопряжённое.",
    "en": "Multiply each term by the conjugate."
   },
   "sol": {
    "ru": "Домножим числитель и знаменатель на $\\sqrt{k+1}-\\sqrt{k}$: $$\\frac1{\\sqrt k+\\sqrt{k+1}}=\\frac{\\sqrt{k+1}-\\sqrt k}{\\left(\\sqrt{k+1}+\\sqrt k\\right)\\left(\\sqrt{k+1}-\\sqrt k\\right)}=\\frac{\\sqrt{k+1}-\\sqrt k}{(k+1)-k}=\\sqrt{k+1}-\\sqrt{k}.$$ Сумма телескопируется: $$\\sum_{k=1}^{n}\\left(\\sqrt{k+1}-\\sqrt k\\right)=\\sqrt{n+1}-\\sqrt1=\\sqrt{n+1}-1 .$$ **Ответ:** $\\sqrt{n+1}-1$. *Проверка при $n=3$:* сумма равна $\\sqrt4-1=1$; численно $0{,}414+0{,}318+0{,}268\\approx1$ ✓",
    "en": "Multiply numerator and denominator by $\\sqrt{k+1}-\\sqrt{k}$: $$\\frac1{\\sqrt k+\\sqrt{k+1}}=\\frac{\\sqrt{k+1}-\\sqrt k}{\\left(\\sqrt{k+1}+\\sqrt k\\right)\\left(\\sqrt{k+1}-\\sqrt k\\right)}=\\frac{\\sqrt{k+1}-\\sqrt k}{(k+1)-k}=\\sqrt{k+1}-\\sqrt{k}.$$ The sum telescopes: $$\\sum_{k=1}^{n}\\left(\\sqrt{k+1}-\\sqrt k\\right)=\\sqrt{n+1}-\\sqrt1=\\sqrt{n+1}-1 .$$ **Answer:** $\\sqrt{n+1}-1$. *Check at $n=3$:* the sum is $\\sqrt4-1=1$; numerically $0.414+0.318+0.268\\approx1$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите формулу сложения для чисел Фибоначчи: $$F_{m+n}=F_mF_{n+1}+F_{m-1}F_n\\qquad(m\\ge1,\\ n\\ge0).$$",
    "en": "Prove the Fibonacci addition formula: $$F_{m+n}=F_mF_{n+1}+F_{m-1}F_n\\qquad(m\\ge1,\\ n\\ge0).$$"
   },
   "hint": {
    "ru": "Индукция по $n$ при фиксированном $m$; в переходе понадобятся два предыдущих случая.",
    "en": "Induct on $n$ with $m$ fixed; the step needs the two previous cases."
   },
   "sol": {
    "ru": "Зафиксируем $m\\ge1$ и проведём индукцию по $n$.\n\n**База $n=0$.** Правая часть равна $F_mF_1+F_{m-1}F_0=F_m\\cdot1+F_{m-1}\\cdot0=F_m$, а левая — $F_{m}$ ✓\n\n**База $n=1$.** Правая часть равна $F_mF_2+F_{m-1}F_1=F_m+F_{m-1}=F_{m+1}$, а левая — $F_{m+1}$ ✓\n\n**Переход.** Пусть формула верна для $n-1$ и для $n$. Тогда $$\\begin{aligned} F_{m+n+1}&=F_{m+n}+F_{m+n-1}\\\\ &=\\left(F_mF_{n+1}+F_{m-1}F_n\\right)+\\left(F_mF_{n}+F_{m-1}F_{n-1}\\right)\\\\ &=F_m\\left(F_{n+1}+F_n\\right)+F_{m-1}\\left(F_n+F_{n-1}\\right)\\\\ &=F_mF_{n+2}+F_{m-1}F_{n+1}, \\end{aligned}$$ то есть формула верна и для $n+1$. По индукции она верна при всех $n\\ge0$. $\\blacksquare$\n\n*Проверка:* $m=n=4$: $F_8=21$, а $F_4F_5+F_3F_4=3\\cdot5+2\\cdot3=15+6=21$ ✓",
    "en": "Fix $m\\ge1$ and induct on $n$.\n\n**Base $n=0$.** The right side is $F_mF_1+F_{m-1}F_0=F_m\\cdot1+F_{m-1}\\cdot0=F_m$, and the left side is $F_{m}$ ✓\n\n**Base $n=1$.** The right side is $F_mF_2+F_{m-1}F_1=F_m+F_{m-1}=F_{m+1}$, matching the left ✓\n\n**Step.** Suppose the formula holds for $n-1$ and for $n$. Then $$\\begin{aligned} F_{m+n+1}&=F_{m+n}+F_{m+n-1}\\\\ &=\\left(F_mF_{n+1}+F_{m-1}F_n\\right)+\\left(F_mF_{n}+F_{m-1}F_{n-1}\\right)\\\\ &=F_m\\left(F_{n+1}+F_n\\right)+F_{m-1}\\left(F_n+F_{n-1}\\right)\\\\ &=F_mF_{n+2}+F_{m-1}F_{n+1}, \\end{aligned}$$ so the formula holds at $n+1$. By induction it holds for all $n\\ge0$. $\\blacksquare$\n\n*Check:* $m=n=4$: $F_8=21$, while $F_4F_5+F_3F_4=3\\cdot5+2\\cdot3=15+6=21$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что $F_n^{2}+F_{n+1}^{2}=F_{2n+1}$.",
    "en": "Prove that $F_n^{2}+F_{n+1}^{2}=F_{2n+1}$."
   },
   "hint": {
    "ru": "Возьмите в формуле сложения $m=n+1$.",
    "en": "Take $m=n+1$ in the addition formula."
   },
   "sol": {
    "ru": "В формуле сложения $$F_{m+n}=F_mF_{n+1}+F_{m-1}F_n$$ положим $m=n+1$. Слева получится $F_{2n+1}$, а справа $$F_{n+1}F_{n+1}+F_{n}F_n=F_{n+1}^{2}+F_n^{2}. \\qquad\\blacksquare$$\n\n*Проверка при $n=4$:* $F_4^{2}+F_5^{2}=9+25=34=F_9$ ✓\n\n*Замечание.* Эта формула позволяет считать числа Фибоначчи «прыжками»: зная пару $(F_n,F_{n+1})$, можно сразу получить пару с номерами около $2n$, а не идти по одному шагу. Так вычисляют $F_{1000000}$ за несколько десятков операций.",
    "en": "In the addition formula $$F_{m+n}=F_mF_{n+1}+F_{m-1}F_n$$ put $m=n+1$. The left side becomes $F_{2n+1}$ and the right side $$F_{n+1}F_{n+1}+F_{n}F_n=F_{n+1}^{2}+F_n^{2}. \\qquad\\blacksquare$$\n\n*Check at $n=4$:* $F_4^{2}+F_5^{2}=9+25=34=F_9$ ✓\n\n*Remark.* This lets one compute Fibonacci numbers in leaps: from the pair $(F_n,F_{n+1})$ one jumps straight to indices near $2n$ instead of stepping one at a time. That is how $F_{1000000}$ is computed in a few dozen operations."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Последовательность задана условиями $a_1=2$ и $a_{n+1}=a_n^{2}-a_n+1$. Докажите, что $$\\frac1{a_1}+\\frac1{a_2}+\\dots+\\frac1{a_n}=1-\\frac1{a_{n+1}-1},$$ и выведите отсюда, что все члены попарно взаимно просты.",
    "en": "A sequence is given by $a_1=2$ and $a_{n+1}=a_n^{2}-a_n+1$. Prove that $$\\frac1{a_1}+\\frac1{a_2}+\\dots+\\frac1{a_n}=1-\\frac1{a_{n+1}-1},$$ and deduce that the terms are pairwise coprime."
   },
   "hint": {
    "ru": "Заметьте, что $a_{n+1}-1=a_n\\left(a_n-1\\right)$.",
    "en": "Note that $a_{n+1}-1=a_n\\left(a_n-1\\right)$."
   },
   "sol": {
    "ru": "**Шаг 1: ключевое равенство.** $$a_{n+1}-1=a_n^{2}-a_n=a_n\\left(a_n-1\\right).$$\n\n**Шаг 2: слагаемое как разность.** Проверим, что $$\\frac1{a_n-1}-\\frac1{a_{n+1}-1}=\\frac1{a_n}.$$ Действительно, подставляя шаг 1, $$\\frac1{a_n-1}-\\frac1{a_n(a_n-1)}=\\frac{a_n-1}{a_n(a_n-1)}=\\frac1{a_n}.$$\n\n**Шаг 3: телескопирование.** Складываем по $n$ от $1$ до $n$: $$\\sum_{k=1}^{n}\\frac1{a_k}=\\frac1{a_1-1}-\\frac1{a_{n+1}-1}=1-\\frac1{a_{n+1}-1},$$ так как $a_1-1=1$. Формула доказана.\n\n**Шаг 4: взаимная простота.** Из шага 1 по индукции $$a_{n+1}=a_1a_2\\cdots a_n+1 .$$ (База: $a_2=a_1(a_1-1)+1=2\\cdot1+1=3=a_1+1$ ✓ Переход: $a_{n+2}=a_{n+1}(a_{n+1}-1)+1=a_{n+1}\\cdot a_1\\cdots a_n+1$.)\n\nПусть теперь $i<j$ и простое $p$ делит $a_i$ и $a_j$. Так как $j\\ge i+1$, число $a_j$ равно $a_1\\cdots a_{j-1}+1$, а произведение $a_1\\cdots a_{j-1}$ содержит множитель $a_i$ и потому делится на $p$. Значит $p$ делит разность $a_j-a_1\\cdots a_{j-1}=1$ — противоречие. $\\blacksquare$\n\n*Первые члены:* $2,\\ 3,\\ 7,\\ 43,\\ 1807,\\dots$ — последовательность Сильвестра. Из шага 4 следует ещё одно доказательство бесконечности множества простых чисел.",
    "en": "**Step 1: the key identity.** $$a_{n+1}-1=a_n^{2}-a_n=a_n\\left(a_n-1\\right).$$\n\n**Step 2: each term as a difference.** Check that $$\\frac1{a_n-1}-\\frac1{a_{n+1}-1}=\\frac1{a_n}.$$ Indeed, substituting Step 1, $$\\frac1{a_n-1}-\\frac1{a_n(a_n-1)}=\\frac{a_n-1}{a_n(a_n-1)}=\\frac1{a_n}.$$\n\n**Step 3: telescoping.** Summing from $1$ to $n$: $$\\sum_{k=1}^{n}\\frac1{a_k}=\\frac1{a_1-1}-\\frac1{a_{n+1}-1}=1-\\frac1{a_{n+1}-1},$$ since $a_1-1=1$. The formula is proved.\n\n**Step 4: coprimality.** From Step 1, by induction, $$a_{n+1}=a_1a_2\\cdots a_n+1 .$$ (Base: $a_2=a_1(a_1-1)+1=2\\cdot1+1=3=a_1+1$ ✓ Step: $a_{n+2}=a_{n+1}(a_{n+1}-1)+1=a_{n+1}\\cdot a_1\\cdots a_n+1$.)\n\nNow suppose $i<j$ and a prime $p$ divides both $a_i$ and $a_j$. Since $j\\ge i+1$, we have $a_j=a_1\\cdots a_{j-1}+1$, and the product $a_1\\cdots a_{j-1}$ contains the factor $a_i$ and is therefore divisible by $p$. So $p$ divides the difference $a_j-a_1\\cdots a_{j-1}=1$ — a contradiction. $\\blacksquare$\n\n*First terms:* $2,\\ 3,\\ 7,\\ 43,\\ 1807,\\dots$ — Sylvester’s sequence. Step 4 gives yet another proof that there are infinitely many primes."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что при любом натуральном $n$ выполнено $$\\frac{1}{2}\\cdot\\frac{3}{4}\\cdot\\frac{5}{6}\\cdots\\frac{2n-1}{2n}\\ \\le\\ \\frac1{\\sqrt{3n+1}},$$ причём равенство достигается только при $n=1$.",
    "en": "Prove that for every positive integer $n$ $$\\frac{1}{2}\\cdot\\frac{3}{4}\\cdot\\frac{5}{6}\\cdots\\frac{2n-1}{2n}\\ \\le\\ \\frac1{\\sqrt{3n+1}},$$ with equality only at $n=1$."
   },
   "hint": {
    "ru": "Индукция; в переходе достаточно проверить неравенство $\\left(\\tfrac{2n+1}{2n+2}\\right)^{2}<\\tfrac{3n+1}{3n+4}$.",
    "en": "Induct; the step reduces to checking $\\left(\\tfrac{2n+1}{2n+2}\\right)^{2}<\\tfrac{3n+1}{3n+4}$."
   },
   "sol": {
    "ru": "Обозначим $P_n=\\dfrac12\\cdot\\dfrac34\\cdots\\dfrac{2n-1}{2n}$.\n\n**База.** При $n=1$: $P_1=\\tfrac12$, а $\\tfrac1{\\sqrt4}=\\tfrac12$ — это и есть случай равенства.\n\n**Переход.** Пусть $P_n<\\dfrac1{\\sqrt{3n+1}}$. Тогда $$P_{n+1}=P_n\\cdot\\frac{2n+1}{2n+2}\\ <\\ \\frac{1}{\\sqrt{3n+1}}\\cdot\\frac{2n+1}{2n+2}.$$ Достаточно показать, что $$\\frac{1}{\\sqrt{3n+1}}\\cdot\\frac{2n+1}{2n+2}\\ \\le\\ \\frac1{\\sqrt{3n+4}},$$ то есть (обе части положительны, возводим в квадрат) $$\\frac{(2n+1)^{2}}{(2n+2)^{2}}\\ \\le\\ \\frac{3n+1}{3n+4}.$$ Перемножая крест-накрест (знаменатели положительны), надо проверить $$(2n+1)^{2}(3n+4)\\ \\le\\ (2n+2)^{2}(3n+1).$$ Раскроем обе части: $$\\left(4n^{2}+4n+1\\right)(3n+4)=12n^{3}+28n^{2}+19n+4,$$ $$\\left(4n^{2}+8n+4\\right)(3n+1)=12n^{3}+28n^{2}+20n+4 .$$ Разность правой и левой равна $n\\ge0$, значит неравенство верно (и строго при $n\\ge1$).\n\n**Строгость.** При $n\\ge1$ разность равна $n>0$, значит уже первый переход (от $n=1$ к $n=2$) даёт **строгое** неравенство, и дальше оно только строгое: $P_2=\\tfrac38=0{,}375<\\tfrac1{\\sqrt7}\\approx0{,}378$ ✓ Итак, равенство достигается ровно при $n=1$. $\\blacksquare$",
    "en": "Write $P_n=\\dfrac12\\cdot\\dfrac34\\cdots\\dfrac{2n-1}{2n}$.\n\n**Base.** At $n=1$: $P_1=\\tfrac12$ and $\\tfrac1{\\sqrt4}=\\tfrac12$ — this is exactly the equality case.\n\n**Step.** Suppose $P_n<\\dfrac1{\\sqrt{3n+1}}$. Then $$P_{n+1}=P_n\\cdot\\frac{2n+1}{2n+2}\\ <\\ \\frac{1}{\\sqrt{3n+1}}\\cdot\\frac{2n+1}{2n+2}.$$ It suffices to show $$\\frac{1}{\\sqrt{3n+1}}\\cdot\\frac{2n+1}{2n+2}\\ \\le\\ \\frac1{\\sqrt{3n+4}},$$ that is (both sides positive, so square) $$\\frac{(2n+1)^{2}}{(2n+2)^{2}}\\ \\le\\ \\frac{3n+1}{3n+4}.$$ Cross-multiplying (the denominators are positive), we must check $$(2n+1)^{2}(3n+4)\\ \\le\\ (2n+2)^{2}(3n+1).$$ Expand both sides: $$\\left(4n^{2}+4n+1\\right)(3n+4)=12n^{3}+28n^{2}+19n+4,$$ $$\\left(4n^{2}+8n+4\\right)(3n+1)=12n^{3}+28n^{2}+20n+4 .$$ The right minus the left equals $n\\ge0$, so the inequality holds (strictly for $n\\ge1$).\n\n**Strictness.** Since the difference is $n>0$ already at $n=1$, the very first step turns the equality into a **strict** inequality, and it stays strict: $P_2=\\tfrac38=0.375<\\tfrac1{\\sqrt7}\\approx0.378$ ✓ So equality holds exactly at $n=1$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Найдите сумму $\\displaystyle\\sum_{k=1}^{n}\\frac{k}{(k+1)!}$.",
    "en": "Evaluate $\\displaystyle\\sum_{k=1}^{n}\\frac{k}{(k+1)!}$."
   },
   "hint": {
    "ru": "Запишите $k=(k+1)-1$.",
    "en": "Write $k=(k+1)-1$."
   },
   "sol": {
    "ru": "Разложим общее слагаемое, воспользовавшись подстановкой $k=(k+1)-1$: $$\\frac{k}{(k+1)!}=\\frac{(k+1)-1}{(k+1)!}=\\frac{k+1}{(k+1)!}-\\frac1{(k+1)!}=\\frac1{k!}-\\frac1{(k+1)!}.$$ Сумма телескопируется: $$\\sum_{k=1}^{n}\\left(\\frac1{k!}-\\frac1{(k+1)!}\\right)=\\frac1{1!}-\\frac1{(n+1)!}=1-\\frac1{(n+1)!}.$$ **Ответ:** $1-\\dfrac1{(n+1)!}$.\n\n*Проверка при $n=3$:* $\\tfrac12+\\tfrac26+\\tfrac3{24}=\\tfrac12+\\tfrac13+\\tfrac18=\\tfrac{12+8+3}{24}=\\tfrac{23}{24}$, и $1-\\tfrac1{24}=\\tfrac{23}{24}$ ✓\n\n*Замечание.* С ростом $n$ сумма стремится к $1$, но никогда его не достигает.",
    "en": "Split the general term using $k=(k+1)-1$: $$\\frac{k}{(k+1)!}=\\frac{(k+1)-1}{(k+1)!}=\\frac{k+1}{(k+1)!}-\\frac1{(k+1)!}=\\frac1{k!}-\\frac1{(k+1)!}.$$ The sum telescopes: $$\\sum_{k=1}^{n}\\left(\\frac1{k!}-\\frac1{(k+1)!}\\right)=\\frac1{1!}-\\frac1{(n+1)!}=1-\\frac1{(n+1)!}.$$ **Answer:** $1-\\dfrac1{(n+1)!}$.\n\n*Check at $n=3$:* $\\tfrac12+\\tfrac26+\\tfrac3{24}=\\tfrac12+\\tfrac13+\\tfrac18=\\tfrac{12+8+3}{24}=\\tfrac{23}{24}$, and $1-\\tfrac1{24}=\\tfrac{23}{24}$ ✓\n\n*Remark.* As $n$ grows the sum approaches $1$ but never reaches it."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "В арифметической прогрессии $a_1=7$ и $d=-2$. Найдите $a_{10}$.",
    "en": "An arithmetic progression has $a_1=7$ and $d=-2$. Find $a_{10}$."
   },
   "hint": {
    "ru": "$a_n=a_1+(n-1)d$.",
    "en": "$a_n=a_1+(n-1)d$."
   },
   "sol": {
    "ru": "Формула общего члена: $$a_n=a_1+(n-1)d .$$\n\nПодставим $n=10$: $$a_{10}=7+9\\cdot(-2)=7-18=-11 .$$\n\n**Проверка** прямым счётом: $7,5,3,1,-1,-3,-5,-7,-9,-11$ — десятый член действительно $-11$ ✓\n\n**Ответ:** $-11$.",
    "en": "The formula for the general term: $$a_n=a_1+(n-1)d .$$\n\nWith $n=10$: $$a_{10}=7+9\\cdot(-2)=7-18=-11 .$$\n\n**Check** by listing: $7,5,3,1,-1,-3,-5,-7,-9,-11$ — the tenth term is indeed $-11$ ✓\n\n**Answer:** $-11$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Найдите сумму $1+2+3+\\dots+100$.",
    "en": "Find the sum $1+2+3+\\dots+100$."
   },
   "hint": {
    "ru": "Сложите первое слагаемое с последним, второе с предпоследним и так далее.",
    "en": "Pair the first term with the last, the second with the second-to-last, and so on."
   },
   "sol": {
    "ru": "Разобьём слагаемые на пары: $$(1+100)+(2+99)+(3+98)+\\dots+(50+51).$$\n\nКаждая пара даёт $101$, а пар ровно $50$, поэтому $$1+2+\\dots+100=50\\cdot101=5050 .$$\n\n**Общая формула:** $$1+2+\\dots+n=\\frac{n(n+1)}{2} ,$$ и при $n=100$ она даёт $\\dfrac{100\\cdot101}{2}=5050$ ✓\n\n**Ответ:** $5050$.",
    "en": "Split the terms into pairs: $$(1+100)+(2+99)+(3+98)+\\dots+(50+51).$$\n\nEach pair gives $101$ and there are exactly $50$ pairs, so $$1+2+\\dots+100=50\\cdot101=5050 .$$\n\n**The general formula:** $$1+2+\\dots+n=\\frac{n(n+1)}{2} ,$$ which at $n=100$ gives $\\dfrac{100\\cdot101}{2}=5050$ ✓\n\n**Answer:** $5050$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Геометрическая прогрессия начинается с $b_1=3$ и имеет знаменатель $q=2$. Найдите $b_6$ и сумму первых шести членов.",
    "en": "A geometric progression has $b_1=3$ and ratio $q=2$. Find $b_6$ and the sum of the first six terms."
   },
   "hint": {
    "ru": "$b_n=b_1q^{\\,n-1}$ и $S_n=b_1\\dfrac{q^{n}-1}{q-1}$.",
    "en": "$b_n=b_1q^{\\,n-1}$ and $S_n=b_1\\dfrac{q^{n}-1}{q-1}$."
   },
   "sol": {
    "ru": "**Шестой член:** $$b_6=b_1q^{5}=3\\cdot2^{5}=3\\cdot32=96 .$$\n\n**Сумма шести членов:** $$S_6=b_1\\frac{q^{6}-1}{q-1}=3\\cdot\\frac{64-1}{1}=3\\cdot63=189 .$$\n\n**Проверка** прямым сложением: $$3+6+12+24+48+96=189 \\quad\\checkmark$$\n\n**Ответ:** $b_6=96$, $S_6=189$.",
    "en": "**The sixth term:** $$b_6=b_1q^{5}=3\\cdot2^{5}=3\\cdot32=96 .$$\n\n**The sum of six terms:** $$S_6=b_1\\frac{q^{6}-1}{q-1}=3\\cdot\\frac{64-1}{1}=3\\cdot63=189 .$$\n\n**Check** by adding directly: $$3+6+12+24+48+96=189 \\quad\\checkmark$$\n\n**Answer:** $b_6=96$, $S_6=189$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Сколько членов в прогрессии $5,\\ 9,\\ 13,\\ \\dots,\\ 101$?",
    "en": "How many terms are there in the progression $5,\\ 9,\\ 13,\\ \\dots,\\ 101$?"
   },
   "hint": {
    "ru": "Решите уравнение $a_1+(n-1)d=101$.",
    "en": "Solve $a_1+(n-1)d=101$."
   },
   "sol": {
    "ru": "Это арифметическая прогрессия с $a_1=5$ и $d=4$. Из формулы общего члена $$5+(n-1)\\cdot4=101 $$ получаем $$(n-1)\\cdot4=96\\quad\\Longrightarrow\\quad n-1=24\\quad\\Longrightarrow\\quad n=25 .$$\n\n**Проверка:** $a_{25}=5+24\\cdot4=5+96=101$ ✓\n\n**Ответ:** $25$ членов.",
    "en": "This is an arithmetic progression with $a_1=5$ and $d=4$. From the general term $$5+(n-1)\\cdot4=101 $$ we get $$(n-1)\\cdot4=96\\quad\\Longrightarrow\\quad n-1=24\\quad\\Longrightarrow\\quad n=25 .$$\n\n**Check:** $a_{25}=5+24\\cdot4=5+96=101$ ✓\n\n**Answer:** $25$ terms."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Найдите сумму первых двадцати чётных натуральных чисел.",
    "en": "Find the sum of the first twenty positive even numbers."
   },
   "hint": {
    "ru": "Вынесите двойку за скобку.",
    "en": "Factor out the two."
   },
   "sol": {
    "ru": "Речь идёт о сумме $$2+4+6+\\dots+40=2(1+2+3+\\dots+20).$$\n\nВнутри скобки — сумма первых двадцати натуральных чисел: $$1+2+\\dots+20=\\frac{20\\cdot21}{2}=210 .$$\n\nЗначит искомая сумма равна $2\\cdot210=420$.\n\n**Проверка** по формуле суммы прогрессии: $$S=\\frac{(2+40)\\cdot20}{2}=\\frac{42\\cdot20}{2}=420 \\quad\\checkmark$$\n\n**Ответ:** $420$.",
    "en": "The sum in question is $$2+4+6+\\dots+40=2(1+2+3+\\dots+20).$$\n\nInside the bracket is the sum of the first twenty positive integers: $$1+2+\\dots+20=\\frac{20\\cdot21}{2}=210 .$$\n\nSo the sum equals $2\\cdot210=420$.\n\n**Check** by the progression-sum formula: $$S=\\frac{(2+40)\\cdot20}{2}=\\frac{42\\cdot20}{2}=420 \\quad\\checkmark$$\n\n**Answer:** $420$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "При каких $x$ числа $3$, $x$, $27$ образуют геометрическую прогрессию?",
    "en": "For which $x$ do the numbers $3$, $x$, $27$ form a geometric progression?"
   },
   "hint": {
    "ru": "Средний член — среднее геометрическое соседей: $x^{2}=3\\cdot27$.",
    "en": "The middle term is the geometric mean of its neighbours: $x^{2}=3\\cdot27$."
   },
   "sol": {
    "ru": "В геометрической прогрессии отношения соседних членов равны: $$\\frac x3=\\frac{27}{x}\\quad\\Longrightarrow\\quad x^{2}=81 .$$\n\nОтсюда $x=9$ или $x=-9$.\n\n**Проверка.** При $x=9$: прогрессия $3,9,27$ со знаменателем $3$ ✓ При $x=-9$: прогрессия $3,-9,27$ со знаменателем $-3$ ✓\n\n**Ответ:** $x=9$ и $x=-9$.\n\n**Замечание.** Часто в задачах требуют положительный знаменатель — тогда остаётся только $x=9$.",
    "en": "In a geometric progression consecutive ratios agree: $$\\frac x3=\\frac{27}{x}\\quad\\Longrightarrow\\quad x^{2}=81 .$$\n\nHence $x=9$ or $x=-9$.\n\n**Check.** For $x=9$: the progression $3,9,27$ with ratio $3$ ✓ For $x=-9$: the progression $3,-9,27$ with ratio $-3$ ✓\n\n**Answer:** $x=9$ and $x=-9$.\n\n**Remark.** Problems often ask for a positive ratio — then only $x=9$ survives."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите сумму всех трёхзначных чисел, кратных $7$.",
    "en": "Find the sum of all three-digit multiples of $7$."
   },
   "hint": {
    "ru": "Это арифметическая прогрессия от $105$ до $994$.",
    "en": "It is an arithmetic progression from $105$ to $994$."
   },
   "sol": {
    "ru": "**Границы.** Наименьшее трёхзначное кратное семи: $7\\cdot15=105$. Наибольшее: $7\\cdot142=994$ (ведь $7\\cdot143=1001$ уже четырёхзначное).\n\n**Количество членов.** Это все $7k$ при $k=15,16,\\dots,142$, то есть $$142-15+1=128 $$ чисел.\n\n**Сумма.** По формуле суммы арифметической прогрессии $$S=\\frac{(105+994)\\cdot128}{2}=\\frac{1099\\cdot128}{2}=1099\\cdot64=70336 .$$\n\n**Ответ:** $70\\,336$.\n\n**Проверка через вынесение семёрки:** $$S=7(15+16+\\dots+142)=7\\cdot\\frac{(15+142)\\cdot128}{2}=7\\cdot10048=70336 \\quad\\checkmark$$",
    "en": "**The range.** The smallest three-digit multiple of seven is $7\\cdot15=105$; the largest is $7\\cdot142=994$ (since $7\\cdot143=1001$ has four digits).\n\n**How many terms.** They are $7k$ for $k=15,16,\\dots,142$, that is $$142-15+1=128 $$ numbers.\n\n**The sum.** By the arithmetic-progression formula $$S=\\frac{(105+994)\\cdot128}{2}=\\frac{1099\\cdot128}{2}=1099\\cdot64=70336 .$$\n\n**Answer:** $70\\,336$.\n\n**Check by factoring out the seven:** $$S=7(15+16+\\dots+142)=7\\cdot\\frac{(15+142)\\cdot128}{2}=7\\cdot10048=70336 \\quad\\checkmark$$"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "В геометрической прогрессии $b_2=6$ и $b_5=48$. Найдите $b_1$ и знаменатель.",
    "en": "A geometric progression has $b_2=6$ and $b_5=48$. Find $b_1$ and the ratio."
   },
   "hint": {
    "ru": "Поделите $b_5$ на $b_2$.",
    "en": "Divide $b_5$ by $b_2$."
   },
   "sol": {
    "ru": "Запишем оба члена через $b_1$ и $q$: $$b_2=b_1q,\\qquad b_5=b_1q^{4} .$$\n\nПоделим второе на первое (члены ненулевые): $$\\frac{b_5}{b_2}=q^{3}=\\frac{48}{6}=8\\quad\\Longrightarrow\\quad q=2 .$$\n\nТогда из $b_1q=6$ получаем $b_1=3$.\n\n**Проверка:** прогрессия $3,6,12,24,48$ — действительно $b_2=6$ и $b_5=48$ ✓\n\n**Ответ:** $b_1=3$, $q=2$.",
    "en": "Write both terms through $b_1$ and $q$: $$b_2=b_1q,\\qquad b_5=b_1q^{4} .$$\n\nDivide the second by the first (the terms are non-zero): $$\\frac{b_5}{b_2}=q^{3}=\\frac{48}{6}=8\\quad\\Longrightarrow\\quad q=2 .$$\n\nThen $b_1q=6$ gives $b_1=3$.\n\n**Check:** the progression $3,6,12,24,48$ indeed has $b_2=6$ and $b_5=48$ ✓\n\n**Answer:** $b_1=3$, $q=2$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что в арифметической прогрессии каждый член (кроме первого) равен полусумме соседей: $a_n=\\dfrac{a_{n-1}+a_{n+1}}{2}$.",
    "en": "Prove that in an arithmetic progression every term (except the first) is the average of its neighbours: $a_n=\\dfrac{a_{n-1}+a_{n+1}}{2}$."
   },
   "hint": {
    "ru": "Соседние члены отличаются на $d$.",
    "en": "Neighbouring terms differ by $d$."
   },
   "sol": {
    "ru": "По определению арифметической прогрессии $$a_{n-1}=a_n-d,\\qquad a_{n+1}=a_n+d .$$\n\nСложим: $$a_{n-1}+a_{n+1}=(a_n-d)+(a_n+d)=2a_n ,$$ откуда $$a_n=\\frac{a_{n-1}+a_{n+1}}{2} . \\qquad\\blacksquare$$\n\n**Обратное тоже верно:** если каждый член равен полусумме соседей, то $a_{n+1}-a_n=a_n-a_{n-1}$, то есть разность постоянна, и последовательность — арифметическая прогрессия.\n\n**Отсюда и название** «арифметическая»: каждый член — среднее арифметическое соседей. У геометрической прогрессии аналогично $b_n^{2}=b_{n-1}b_{n+1}$.",
    "en": "By definition of an arithmetic progression $$a_{n-1}=a_n-d,\\qquad a_{n+1}=a_n+d .$$\n\nAdding, $$a_{n-1}+a_{n+1}=(a_n-d)+(a_n+d)=2a_n ,$$ hence $$a_n=\\frac{a_{n-1}+a_{n+1}}{2} . \\qquad\\blacksquare$$\n\n**The converse holds too:** if every term is the average of its neighbours then $a_{n+1}-a_n=a_n-a_{n-1}$, so the difference is constant and the sequence is arithmetic.\n\n**Hence the name** \"arithmetic\": every term is the arithmetic mean of its neighbours. For a geometric progression the analogue is $b_n^{2}=b_{n-1}b_{n+1}$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Вычислите $\\dfrac1{1\\cdot2}+\\dfrac1{2\\cdot3}+\\dots+\\dfrac1{n(n+1)}$.",
    "en": "Evaluate $\\dfrac1{1\\cdot2}+\\dfrac1{2\\cdot3}+\\dots+\\dfrac1{n(n+1)}$."
   },
   "hint": {
    "ru": "$\\dfrac1{k(k+1)}=\\dfrac1k-\\dfrac1{k+1}$.",
    "en": "$\\dfrac1{k(k+1)}=\\dfrac1k-\\dfrac1{k+1}$."
   },
   "sol": {
    "ru": "Разложим общее слагаемое: $$\\frac1{k(k+1)}=\\frac{(k+1)-k}{k(k+1)}=\\frac1k-\\frac1{k+1} .$$\n\nСумма «телескопируется»: $$\\left(\\frac11-\\frac12\\right)+\\left(\\frac12-\\frac13\\right)+\\dots+\\left(\\frac1n-\\frac1{n+1}\\right).$$\n\nВсе промежуточные слагаемые взаимно уничтожаются, остаётся $$1-\\frac1{n+1}=\\frac{n}{n+1} .$$\n\n**Проверка** при $n=2$: $\\tfrac12+\\tfrac16=\\tfrac23$, и формула даёт $\\tfrac23$ ✓\n\n**Ответ:** $\\dfrac{n}{n+1}$.",
    "en": "Split the general term: $$\\frac1{k(k+1)}=\\frac{(k+1)-k}{k(k+1)}=\\frac1k-\\frac1{k+1} .$$\n\nThe sum telescopes: $$\\left(\\frac11-\\frac12\\right)+\\left(\\frac12-\\frac13\\right)+\\dots+\\left(\\frac1n-\\frac1{n+1}\\right).$$\n\nAll intermediate terms cancel, leaving $$1-\\frac1{n+1}=\\frac{n}{n+1} .$$\n\n**Check** at $n=2$: $\\tfrac12+\\tfrac16=\\tfrac23$, and the formula gives $\\tfrac23$ ✓\n\n**Answer:** $\\dfrac{n}{n+1}$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Вычислите сумму $1\\cdot2+2\\cdot3+3\\cdot4+\\dots+n(n+1)$.",
    "en": "Evaluate the sum $1\\cdot2+2\\cdot3+3\\cdot4+\\dots+n(n+1)$."
   },
   "hint": {
    "ru": "$k(k+1)=k^{2}+k$; воспользуйтесь известными формулами.",
    "en": "$k(k+1)=k^{2}+k$; use the known formulas."
   },
   "sol": {
    "ru": "Раскроем каждое слагаемое: $$k(k+1)=k^{2}+k .$$\n\nЗначит вся сумма распадается на две известные: $$\\sum_{k=1}^{n}k^{2}+\\sum_{k=1}^{n}k=\\frac{n(n+1)(2n+1)}{6}+\\frac{n(n+1)}{2} .$$\n\nВынесем общий множитель $\\dfrac{n(n+1)}{6}$: $$\\frac{n(n+1)}{6}\\Bigl[(2n+1)+3\\Bigr]=\\frac{n(n+1)(2n+4)}{6}=\\frac{n(n+1)(n+2)}{3} .$$\n\n**Проверка** при $n=3$: слева $2+6+12=20$, справа $\\dfrac{3\\cdot4\\cdot5}{3}=20$ ✓\n\n**Ответ:** $\\dfrac{n(n+1)(n+2)}{3}$.",
    "en": "Expand each term: $$k(k+1)=k^{2}+k .$$\n\nThe sum then splits into two known ones: $$\\sum_{k=1}^{n}k^{2}+\\sum_{k=1}^{n}k=\\frac{n(n+1)(2n+1)}{6}+\\frac{n(n+1)}{2} .$$\n\nTake out the common factor $\\dfrac{n(n+1)}{6}$: $$\\frac{n(n+1)}{6}\\Bigl[(2n+1)+3\\Bigr]=\\frac{n(n+1)(2n+4)}{6}=\\frac{n(n+1)(n+2)}{3} .$$\n\n**Check** at $n=3$: the left side is $2+6+12=20$, the right $\\dfrac{3\\cdot4\\cdot5}{3}=20$ ✓\n\n**Answer:** $\\dfrac{n(n+1)(n+2)}{3}$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Сумма бесконечной геометрической прогрессии равна $9$, а её первый член равен $6$. Найдите знаменатель.",
    "en": "An infinite geometric progression has sum $9$ and first term $6$. Find its ratio."
   },
   "hint": {
    "ru": "$S=\\dfrac{b_1}{1-q}$ при $|q|<1$.",
    "en": "$S=\\dfrac{b_1}{1-q}$ when $|q|<1$."
   },
   "sol": {
    "ru": "Формула суммы бесконечной прогрессии (она применима при $|q|<1$): $$S=\\frac{b_1}{1-q} .$$\n\nПодставим данные: $$9=\\frac{6}{1-q}\\quad\\Longrightarrow\\quad 1-q=\\frac69=\\frac23\\quad\\Longrightarrow\\quad q=\\frac13 .$$\n\nУсловие $|q|<1$ выполнено ✓\n\n**Проверка:** $$6+2+\\frac23+\\frac29+\\dots=\\frac{6}{1-\\frac13}=\\frac{6}{\\frac23}=9 \\quad\\checkmark$$\n\n**Ответ:** $q=\\dfrac13$.",
    "en": "The sum of an infinite progression (valid for $|q|<1$) is $$S=\\frac{b_1}{1-q} .$$\n\nSubstituting, $$9=\\frac{6}{1-q}\\quad\\Longrightarrow\\quad 1-q=\\frac69=\\frac23\\quad\\Longrightarrow\\quad q=\\frac13 .$$\n\nThe condition $|q|<1$ holds ✓\n\n**Check:** $$6+2+\\frac23+\\frac29+\\dots=\\frac{6}{1-\\frac13}=\\frac{6}{\\frac23}=9 \\quad\\checkmark$$\n\n**Answer:** $q=\\dfrac13$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $1+2+4+\\dots+2^{\\,n-1}=2^{n}-1$.",
    "en": "Prove that $1+2+4+\\dots+2^{\\,n-1}=2^{n}-1$."
   },
   "hint": {
    "ru": "Умножьте сумму на $2$ и вычтите исходную.",
    "en": "Multiply the sum by $2$ and subtract the original."
   },
   "sol": {
    "ru": "Обозначим $$S=1+2+4+\\dots+2^{\\,n-1} .$$\n\nУмножим на $2$: $$2S=2+4+8+\\dots+2^{n} .$$\n\nВычтем первое из второго: почти все слагаемые уничтожаются, остаются крайние $$2S-S=2^{n}-1 ,$$ то есть $S=2^{n}-1$. $\\blacksquare$\n\n**Проверка** при $n=4$: $1+2+4+8=15=2^{4}-1$ ✓\n\n**Наглядно.** Это и означает, что в двоичной записи число $\\underbrace{11\\ldots1}_{n}$ равно $2^{n}-1$.",
    "en": "Write $$S=1+2+4+\\dots+2^{\\,n-1} .$$\n\nMultiply by $2$: $$2S=2+4+8+\\dots+2^{n} .$$\n\nSubtract the first from the second: almost everything cancels, leaving the extreme terms $$2S-S=2^{n}-1 ,$$ i.e. $S=2^{n}-1$. $\\blacksquare$\n\n**Check** at $n=4$: $1+2+4+8=15=2^{4}-1$ ✓\n\n**Pictorially.** This is exactly why the binary number $\\underbrace{11\\ldots1}_{n}$ equals $2^{n}-1$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Сколько членов в прогрессии $100,\\ 97,\\ 94,\\ \\dots$, если все они положительны, и чему равна их сумма?",
    "en": "How many terms does the progression $100,\\ 97,\\ 94,\\ \\dots$ have while all of them stay positive, and what is their sum?"
   },
   "hint": {
    "ru": "Требуется $a_n=100-3(n-1)>0$.",
    "en": "We need $a_n=100-3(n-1)>0$."
   },
   "sol": {
    "ru": "Здесь $a_1=100$, $d=-3$, значит $$a_n=100-3(n-1)=103-3n .$$\n\n**Условие положительности:** $$103-3n>0\\quad\\Longleftrightarrow\\quad n<\\frac{103}{3}=34\\tfrac13 ,$$ то есть $n\\le34$. Последний положительный член $$a_{34}=103-102=1 .$$\n\n**Сумма.** $$S_{34}=\\frac{(100+1)\\cdot34}{2}=\\frac{101\\cdot34}{2}=101\\cdot17=1717 .$$\n\n**Ответ:** $34$ члена, сумма $1717$.\n\n**Проверка:** следующий член был бы $a_{35}=103-105=-2<0$ ✓",
    "en": "Here $a_1=100$, $d=-3$, so $$a_n=100-3(n-1)=103-3n .$$\n\n**Positivity:** $$103-3n>0\\quad\\Longleftrightarrow\\quad n<\\frac{103}{3}=34\\tfrac13 ,$$ i.e. $n\\le34$. The last positive term is $$a_{34}=103-102=1 .$$\n\n**The sum.** $$S_{34}=\\frac{(100+1)\\cdot34}{2}=\\frac{101\\cdot34}{2}=101\\cdot17=1717 .$$\n\n**Answer:** $34$ terms, sum $1717$.\n\n**Check:** the next term would be $a_{35}=103-105=-2<0$ ✓"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите формулу суммы арифметической прогрессии $S_n=\\dfrac{\\left(a_1+a_n\\right)n}{2}$.",
    "en": "Prove the formula for the sum of an arithmetic progression, $S_n=\\dfrac{\\left(a_1+a_n\\right)n}{2}$."
   },
   "hint": {
    "ru": "Запишите сумму дважды — в прямом и в обратном порядке.",
    "en": "Write the sum twice — forwards and backwards."
   },
   "sol": {
    "ru": "Запишем сумму дважды, второй раз в обратном порядке: $$S_n=a_1+a_2+\\dots+a_{n-1}+a_n ,$$ $$S_n=a_n+a_{n-1}+\\dots+a_2+a_1 .$$\n\nСложим их **по столбцам**. Ключевое наблюдение: в каждом столбце сумма одна и та же, ведь $$a_k+a_{n+1-k}=\\left[a_1+(k-1)d\\right]+\\left[a_1+(n-k)d\\right]=2a_1+(n-1)d=a_1+a_n .$$\n\nСтолбцов ровно $n$, поэтому $$2S_n=n\\left(a_1+a_n\\right)\\quad\\Longrightarrow\\quad S_n=\\frac{\\left(a_1+a_n\\right)n}{2} . \\qquad\\blacksquare$$\n\n**Это и есть приём Гаусса**, которым он в детстве сложил числа от $1$ до $100$.",
    "en": "Write the sum twice, the second time backwards: $$S_n=a_1+a_2+\\dots+a_{n-1}+a_n ,$$ $$S_n=a_n+a_{n-1}+\\dots+a_2+a_1 .$$\n\nAdd them **column by column**. The key observation is that every column has the same total, since $$a_k+a_{n+1-k}=\\left[a_1+(k-1)d\\right]+\\left[a_1+(n-k)d\\right]=2a_1+(n-1)d=a_1+a_n .$$\n\nThere are exactly $n$ columns, so $$2S_n=n\\left(a_1+a_n\\right)\\quad\\Longrightarrow\\quad S_n=\\frac{\\left(a_1+a_n\\right)n}{2} . \\qquad\\blacksquare$$\n\n**This is Gauss’s trick**, with which as a child he added the numbers from $1$ to $100$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $1^{2}+3^{2}+5^{2}+\\dots+(2n-1)^{2}=\\dfrac{n(2n-1)(2n+1)}{3}$.",
    "en": "Prove that $1^{2}+3^{2}+5^{2}+\\dots+(2n-1)^{2}=\\dfrac{n(2n-1)(2n+1)}{3}$."
   },
   "hint": {
    "ru": "Из суммы квадратов всех чисел до $2n$ вычтите сумму квадратов чётных.",
    "en": "Subtract the sum of the even squares from the sum of all squares up to $2n$."
   },
   "sol": {
    "ru": "Сумма квадратов **всех** чисел от $1$ до $2n$: $$\\sum_{k=1}^{2n}k^{2}=\\frac{2n(2n+1)(4n+1)}{6} .$$\n\nСумма квадратов **чётных** чисел: $$\\sum_{k=1}^{n}(2k)^{2}=4\\sum_{k=1}^{n}k^{2}=4\\cdot\\frac{n(n+1)(2n+1)}{6} .$$\n\nВычитаем и выносим общий множитель $\\dfrac{n(2n+1)}{6}$: $$\\frac{n(2n+1)}{6}\\Bigl[2(4n+1)-4(n+1)\\Bigr]=\\frac{n(2n+1)}{6}\\cdot(8n+2-4n-4)=\\frac{n(2n+1)(4n-2)}{6} .$$\n\nНаконец $4n-2=2(2n-1)$, поэтому сумма равна $$\\frac{n(2n+1)(2n-1)}{3} . \\qquad\\blacksquare$$\n\n**Проверка** при $n=3$: слева $1+9+25=35$, справа $\\dfrac{3\\cdot5\\cdot7}{3}=35$ ✓",
    "en": "The sum of **all** squares from $1$ to $2n$: $$\\sum_{k=1}^{2n}k^{2}=\\frac{2n(2n+1)(4n+1)}{6} .$$\n\nThe sum of the **even** squares: $$\\sum_{k=1}^{n}(2k)^{2}=4\\sum_{k=1}^{n}k^{2}=4\\cdot\\frac{n(n+1)(2n+1)}{6} .$$\n\nSubtract and take out the common factor $\\dfrac{n(2n+1)}{6}$: $$\\frac{n(2n+1)}{6}\\Bigl[2(4n+1)-4(n+1)\\Bigr]=\\frac{n(2n+1)}{6}\\cdot(8n+2-4n-4)=\\frac{n(2n+1)(4n-2)}{6} .$$\n\nFinally $4n-2=2(2n-1)$, so the sum equals $$\\frac{n(2n+1)(2n-1)}{3} . \\qquad\\blacksquare$$\n\n**Check** at $n=3$: the left side is $1+9+25=35$, the right $\\dfrac{3\\cdot5\\cdot7}{3}=35$ ✓"
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Вычислите $\\displaystyle\\sum_{k=1}^{n}\\frac1{k(k+2)}$.",
    "en": "Evaluate $\\displaystyle\\sum_{k=1}^{n}\\frac1{k(k+2)}$."
   },
   "hint": {
    "ru": "$\\dfrac1{k(k+2)}=\\dfrac12\\left(\\dfrac1k-\\dfrac1{k+2}\\right)$.",
    "en": "$\\dfrac1{k(k+2)}=\\dfrac12\\left(\\dfrac1k-\\dfrac1{k+2}\\right)$."
   },
   "sol": {
    "ru": "Разложим общее слагаемое: $$\\frac1{k(k+2)}=\\frac12\\cdot\\frac{(k+2)-k}{k(k+2)}=\\frac12\\left(\\frac1k-\\frac1{k+2}\\right).$$\n\nСумма телескопируется **через одно звено**: уцелеют первые два положительных и последние два отрицательных слагаемых: $$\\sum_{k=1}^{n}\\frac1{k(k+2)}=\\frac12\\left(1+\\frac12-\\frac1{n+1}-\\frac1{n+2}\\right)=\\frac34-\\frac12\\left(\\frac1{n+1}+\\frac1{n+2}\\right).$$\n\nПриведя к общему знаменателю, $$=\\frac34-\\frac{2n+3}{2(n+1)(n+2)} .$$\n\n**Проверка** при $n=1$: слева $\\tfrac13$; справа $\\tfrac34-\\tfrac{5}{12}=\\tfrac{9-5}{12}=\\tfrac13$ ✓\n\n**Замечание.** При $n\\to\\infty$ сумма стремится к $\\tfrac34$.",
    "en": "Split the general term: $$\\frac1{k(k+2)}=\\frac12\\cdot\\frac{(k+2)-k}{k(k+2)}=\\frac12\\left(\\frac1k-\\frac1{k+2}\\right).$$\n\nThe sum telescopes **with a gap of two**: the first two positive and the last two negative terms survive: $$\\sum_{k=1}^{n}\\frac1{k(k+2)}=\\frac12\\left(1+\\frac12-\\frac1{n+1}-\\frac1{n+2}\\right)=\\frac34-\\frac12\\left(\\frac1{n+1}+\\frac1{n+2}\\right).$$\n\nOver a common denominator, $$=\\frac34-\\frac{2n+3}{2(n+1)(n+2)} .$$\n\n**Check** at $n=1$: the left side is $\\tfrac13$; the right $\\tfrac34-\\tfrac{5}{12}=\\tfrac{9-5}{12}=\\tfrac13$ ✓\n\n**Remark.** As $n\\to\\infty$ the sum tends to $\\tfrac34$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что $F_1+F_2+\\dots+F_n=F_{n+2}-1$ для чисел Фибоначчи.",
    "en": "Prove that $F_1+F_2+\\dots+F_n=F_{n+2}-1$ for the Fibonacci numbers."
   },
   "hint": {
    "ru": "Запишите каждое $F_k$ как $F_{k+2}-F_{k+1}$.",
    "en": "Write each $F_k$ as $F_{k+2}-F_{k+1}$."
   },
   "sol": {
    "ru": "Из рекуррентного соотношения $F_{k+2}=F_{k+1}+F_k$ получаем $$F_k=F_{k+2}-F_{k+1} .$$\n\nПодставим это в сумму — она телескопируется: $$\\sum_{k=1}^{n}F_k=\\sum_{k=1}^{n}\\left(F_{k+2}-F_{k+1}\\right)=F_{n+2}-F_2 .$$\n\nТак как $F_2=1$, получаем $$F_1+\\dots+F_n=F_{n+2}-1 . \\qquad\\blacksquare$$\n\n**Проверка** при $n=5$: слева $1+1+2+3+5=12$; справа $F_7-1=13-1=12$ ✓\n\n**Похожие тождества.** Тем же приёмом доказываются $$F_2+F_4+\\dots+F_{2n}=F_{2n+1}-1 $$ и $$F_1^{2}+F_2^{2}+\\dots+F_n^{2}=F_nF_{n+1} .$$",
    "en": "From the recursion $F_{k+2}=F_{k+1}+F_k$ we get $$F_k=F_{k+2}-F_{k+1} .$$\n\nSubstituting into the sum makes it telescope: $$\\sum_{k=1}^{n}F_k=\\sum_{k=1}^{n}\\left(F_{k+2}-F_{k+1}\\right)=F_{n+2}-F_2 .$$\n\nSince $F_2=1$, $$F_1+\\dots+F_n=F_{n+2}-1 . \\qquad\\blacksquare$$\n\n**Check** at $n=5$: the left side is $1+1+2+3+5=12$; the right $F_7-1=13-1=12$ ✓\n\n**Similar identities.** The same trick proves $$F_2+F_4+\\dots+F_{2n}=F_{2n+1}-1 $$ and $$F_1^{2}+F_2^{2}+\\dots+F_n^{2}=F_nF_{n+1} .$$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите тождество Кассини: $F_{n-1}F_{n+1}-F_n^{2}=(-1)^{n}$.",
    "en": "Prove Cassini’s identity: $F_{n-1}F_{n+1}-F_n^{2}=(-1)^{n}$."
   },
   "hint": {
    "ru": "Индукция: посмотрите, как связаны выражения для $n$ и $n+1$.",
    "en": "Induct: relate the expressions for $n$ and $n+1$."
   },
   "sol": {
    "ru": "Обозначим $$D_n=F_{n-1}F_{n+1}-F_n^{2} .$$\n\n**База $n=2$.** $$D_2=F_1F_3-F_2^{2}=1\\cdot2-1=1=(-1)^{2} \\quad\\checkmark$$\n\n**Переход.** Подставим $F_{n+2}=F_{n+1}+F_n$: $$D_{n+1}=F_nF_{n+2}-F_{n+1}^{2}=F_n\\left(F_{n+1}+F_n\\right)-F_{n+1}^{2}=F_nF_{n+1}+F_n^{2}-F_{n+1}^{2} .$$\n\nТеперь заменим $F_{n+1}=F_n+F_{n-1}$ в последнем квадрате: $$F_{n+1}^{2}=F_{n+1}\\left(F_n+F_{n-1}\\right)=F_nF_{n+1}+F_{n-1}F_{n+1} .$$\n\nПодставляя, получаем $$D_{n+1}=F_nF_{n+1}+F_n^{2}-F_nF_{n+1}-F_{n-1}F_{n+1}=-\\left(F_{n-1}F_{n+1}-F_n^{2}\\right)=-D_n .$$\n\nЗначит знак чередуется, и вместе с базой это даёт $D_n=(-1)^{n}$. $\\blacksquare$\n\n**Проверка** при $n=5$: $$F_4F_6-F_5^{2}=3\\cdot8-25=-1=(-1)^{5} \\quad\\checkmark$$\n\n**Забавное следствие.** Тождество Кассини лежит в основе известной «геометрической» головоломки, где квадрат $8\\times8$ якобы превращается в прямоугольник $5\\times13$: разница площадей ровно $\\pm1$.",
    "en": "Write $$D_n=F_{n-1}F_{n+1}-F_n^{2} .$$\n\n**Base $n=2$.** $$D_2=F_1F_3-F_2^{2}=1\\cdot2-1=1=(-1)^{2} \\quad\\checkmark$$\n\n**Step.** Substitute $F_{n+2}=F_{n+1}+F_n$: $$D_{n+1}=F_nF_{n+2}-F_{n+1}^{2}=F_n\\left(F_{n+1}+F_n\\right)-F_{n+1}^{2}=F_nF_{n+1}+F_n^{2}-F_{n+1}^{2} .$$\n\nNow replace $F_{n+1}=F_n+F_{n-1}$ inside the last square: $$F_{n+1}^{2}=F_{n+1}\\left(F_n+F_{n-1}\\right)=F_nF_{n+1}+F_{n-1}F_{n+1} .$$\n\nSubstituting gives $$D_{n+1}=F_nF_{n+1}+F_n^{2}-F_nF_{n+1}-F_{n-1}F_{n+1}=-\\left(F_{n-1}F_{n+1}-F_n^{2}\\right)=-D_n .$$\n\nSo the sign alternates, and with the base this gives $D_n=(-1)^{n}$. $\\blacksquare$\n\n**Check** at $n=5$: $$F_4F_6-F_5^{2}=3\\cdot8-25=-1=(-1)^{5} \\quad\\checkmark$$\n\n**An amusing consequence.** Cassini’s identity underlies the famous dissection puzzle in which an $8\\times8$ square apparently becomes a $5\\times13$ rectangle: the areas differ by exactly $\\pm1$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Последовательность задана условиями $a_1=2$ и $a_{n+1}=2a_n+1$. Найдите формулу общего члена.",
    "en": "A sequence is given by $a_1=2$ and $a_{n+1}=2a_n+1$. Find a closed formula for $a_n$."
   },
   "hint": {
    "ru": "Прибавьте единицу к обеим частям.",
    "en": "Add one to both sides."
   },
   "sol": {
    "ru": "Прибавим $1$ к обеим частям рекуррентного соотношения: $$a_{n+1}+1=2a_n+2=2\\left(a_n+1\\right).$$\n\nЗначит последовательность $b_n=a_n+1$ — геометрическая прогрессия со знаменателем $2$ и первым членом $$b_1=a_1+1=3 .$$\n\nПоэтому $$b_n=3\\cdot2^{\\,n-1}\\quad\\Longrightarrow\\quad a_n=3\\cdot2^{\\,n-1}-1 .$$\n\n**Проверка:** $a_1=3-1=2$ ✓, $a_2=6-1=5$ и по формуле рекуррентности $2\\cdot2+1=5$ ✓, $a_3=12-1=11=2\\cdot5+1$ ✓\n\n**Ответ:** $a_n=3\\cdot2^{\\,n-1}-1$.\n\n**Общий приём.** Для $a_{n+1}=qa_n+c$ при $q\\ne1$ ищут «неподвижную точку» $x=qx+c$, то есть $x=\\dfrac{c}{1-q}$, и рассматривают $b_n=a_n-x$: она уже чисто геометрическая. Здесь $x=-1$.",
    "en": "Add $1$ to both sides of the recursion: $$a_{n+1}+1=2a_n+2=2\\left(a_n+1\\right).$$\n\nSo the sequence $b_n=a_n+1$ is a geometric progression with ratio $2$ and first term $$b_1=a_1+1=3 .$$\n\nHence $$b_n=3\\cdot2^{\\,n-1}\\quad\\Longrightarrow\\quad a_n=3\\cdot2^{\\,n-1}-1 .$$\n\n**Check:** $a_1=3-1=2$ ✓, $a_2=6-1=5$ and the recursion gives $2\\cdot2+1=5$ ✓, $a_3=12-1=11=2\\cdot5+1$ ✓\n\n**Answer:** $a_n=3\\cdot2^{\\,n-1}-1$.\n\n**The general trick.** For $a_{n+1}=qa_n+c$ with $q\\ne1$ one finds the fixed point $x=qx+c$, i.e. $x=\\dfrac{c}{1-q}$, and looks at $b_n=a_n-x$, which is purely geometric. Here $x=-1$."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Вычислите $\\displaystyle\\sum_{k=1}^{n}k\\cdot2^{k}$.",
    "en": "Evaluate $\\displaystyle\\sum_{k=1}^{n}k\\cdot2^{k}$."
   },
   "hint": {
    "ru": "Умножьте сумму на $2$ и вычтите исходную.",
    "en": "Multiply the sum by $2$ and subtract the original."
   },
   "sol": {
    "ru": "Обозначим $$S=1\\cdot2+2\\cdot2^{2}+3\\cdot2^{3}+\\dots+n\\cdot2^{n} .$$\n\nУмножим на $2$: $$2S=1\\cdot2^{2}+2\\cdot2^{3}+\\dots+(n-1)\\cdot2^{n}+n\\cdot2^{\\,n+1} .$$\n\nВычтем первое из второго. Коэффициент при $2^{k}$ (для $2\\le k\\le n$) равен $(k-1)-k=-1$, коэффициент при $2^{1}$ равен $-1$, а член $n\\cdot2^{\\,n+1}$ остаётся: $$S=n\\cdot2^{\\,n+1}-\\left(2+2^{2}+\\dots+2^{n}\\right).$$\n\nВ скобке — геометрическая прогрессия: $$2+2^{2}+\\dots+2^{n}=2^{\\,n+1}-2 .$$\n\nЗначит $$S=n\\cdot2^{\\,n+1}-2^{\\,n+1}+2=(n-1)\\,2^{\\,n+1}+2 .$$\n\n**Проверка** при $n=3$: слева $2+8+24=34$; справа $2\\cdot16+2=34$ ✓\n\n**Ответ:** $(n-1)\\,2^{\\,n+1}+2$.",
    "en": "Write $$S=1\\cdot2+2\\cdot2^{2}+3\\cdot2^{3}+\\dots+n\\cdot2^{n} .$$\n\nMultiply by $2$: $$2S=1\\cdot2^{2}+2\\cdot2^{3}+\\dots+(n-1)\\cdot2^{n}+n\\cdot2^{\\,n+1} .$$\n\nSubtract the first from the second. The coefficient of $2^{k}$ (for $2\\le k\\le n$) is $(k-1)-k=-1$, the coefficient of $2^{1}$ is $-1$, and the term $n\\cdot2^{\\,n+1}$ survives: $$S=n\\cdot2^{\\,n+1}-\\left(2+2^{2}+\\dots+2^{n}\\right).$$\n\nThe bracket is a geometric progression: $$2+2^{2}+\\dots+2^{n}=2^{\\,n+1}-2 .$$\n\nHence $$S=n\\cdot2^{\\,n+1}-2^{\\,n+1}+2=(n-1)\\,2^{\\,n+1}+2 .$$\n\n**Check** at $n=3$: the left side is $2+8+24=34$; the right $2\\cdot16+2=34$ ✓\n\n**Answer:** $(n-1)\\,2^{\\,n+1}+2$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что $\\displaystyle\\sum_{k=1}^{n}\\frac1{k^{2}}\\ \\le\\ 2-\\frac1n$ при всех натуральных $n$.",
    "en": "Prove that $\\displaystyle\\sum_{k=1}^{n}\\frac1{k^{2}}\\ \\le\\ 2-\\frac1n$ for every positive integer $n$."
   },
   "hint": {
    "ru": "Индукция; в переходе достаточно проверить $\\dfrac1{(n+1)^{2}}\\le\\dfrac1n-\\dfrac1{n+1}$.",
    "en": "Induct; in the step it suffices to check $\\dfrac1{(n+1)^{2}}\\le\\dfrac1n-\\dfrac1{n+1}$."
   },
   "sol": {
    "ru": "**База $n=1$.** Слева $1$, справа $2-1=1$ — равенство ✓\n\n**Переход.** Пусть неравенство верно для $n$. Тогда $$\\sum_{k=1}^{n+1}\\frac1{k^{2}}\\ \\le\\ 2-\\frac1n+\\frac1{(n+1)^{2}} ,$$ и достаточно проверить, что правая часть не превосходит $2-\\dfrac1{n+1}$, то есть что $$\\frac1{(n+1)^{2}}\\ \\le\\ \\frac1n-\\frac1{n+1}=\\frac{1}{n(n+1)} .$$\n\nПоследнее равносильно (после умножения на положительное $n(n+1)^{2}$) неравенству $$n\\ \\le\\ n+1 ,$$ которое очевидно верно ✓\n\nПо индукции неравенство доказано. $\\blacksquare$\n\n**Проверка** при $n=3$: слева $1+\\tfrac14+\\tfrac19=\\tfrac{49}{36}\\approx1{,}36$; справа $2-\\tfrac13\\approx1{,}67$ ✓\n\n**Замечание.** Отсюда сразу следует ограниченность суммы двойкой; на самом деле при $n\\to\\infty$ она стремится к $\\dfrac{\\pi^{2}}{6}\\approx1{,}6449$ — это знаменитый результат Эйлера.",
    "en": "**Base $n=1$.** The left side is $1$, the right $2-1=1$ — equality ✓\n\n**Step.** Suppose the inequality holds for $n$. Then $$\\sum_{k=1}^{n+1}\\frac1{k^{2}}\\ \\le\\ 2-\\frac1n+\\frac1{(n+1)^{2}} ,$$ and it suffices to check that the right side is at most $2-\\dfrac1{n+1}$, i.e. that $$\\frac1{(n+1)^{2}}\\ \\le\\ \\frac1n-\\frac1{n+1}=\\frac{1}{n(n+1)} .$$\n\nMultiplying by the positive number $n(n+1)^{2}$, this is equivalent to $$n\\ \\le\\ n+1 ,$$ which is obvious ✓\n\nThe induction is complete. $\\blacksquare$\n\n**Check** at $n=3$: the left side is $1+\\tfrac14+\\tfrac19=\\tfrac{49}{36}\\approx1.36$; the right $2-\\tfrac13\\approx1.67$ ✓\n\n**Remark.** This immediately bounds the sum by two; in fact as $n\\to\\infty$ it tends to $\\dfrac{\\pi^{2}}{6}\\approx1.6449$ — Euler’s famous result."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Вычислите $\\displaystyle\\sum_{k=1}^{n}\\frac1{k(k+1)(k+2)}$.",
    "en": "Evaluate $\\displaystyle\\sum_{k=1}^{n}\\frac1{k(k+1)(k+2)}$."
   },
   "hint": {
    "ru": "$\\dfrac1{k(k+1)(k+2)}=\\dfrac12\\left(\\dfrac1{k(k+1)}-\\dfrac1{(k+1)(k+2)}\\right)$.",
    "en": "$\\dfrac1{k(k+1)(k+2)}=\\dfrac12\\left(\\dfrac1{k(k+1)}-\\dfrac1{(k+1)(k+2)}\\right)$."
   },
   "sol": {
    "ru": "Проверим указанное разложение: $$\\frac1{k(k+1)}-\\frac1{(k+1)(k+2)}=\\frac{(k+2)-k}{k(k+1)(k+2)}=\\frac{2}{k(k+1)(k+2)} ,$$ то есть общее слагаемое равно половине этой разности ✓\n\nТеперь сумма телескопируется: $$\\sum_{k=1}^{n}\\frac1{k(k+1)(k+2)}=\\frac12\\left(\\frac1{1\\cdot2}-\\frac1{(n+1)(n+2)}\\right)=\\frac14-\\frac1{2(n+1)(n+2)} .$$\n\n**Проверка** при $n=1$: слева $\\tfrac16$; справа $\\tfrac14-\\tfrac1{12}=\\tfrac{3-1}{12}=\\tfrac16$ ✓\n\n**Ответ:** $\\dfrac14-\\dfrac1{2(n+1)(n+2)}$; при $n\\to\\infty$ сумма стремится к $\\dfrac14$.",
    "en": "Verify the stated splitting: $$\\frac1{k(k+1)}-\\frac1{(k+1)(k+2)}=\\frac{(k+2)-k}{k(k+1)(k+2)}=\\frac{2}{k(k+1)(k+2)} ,$$ so the general term is half this difference ✓\n\nNow the sum telescopes: $$\\sum_{k=1}^{n}\\frac1{k(k+1)(k+2)}=\\frac12\\left(\\frac1{1\\cdot2}-\\frac1{(n+1)(n+2)}\\right)=\\frac14-\\frac1{2(n+1)(n+2)} .$$\n\n**Check** at $n=1$: the left side is $\\tfrac16$; the right $\\tfrac14-\\tfrac1{12}=\\tfrac{3-1}{12}=\\tfrac16$ ✓\n\n**Answer:** $\\dfrac14-\\dfrac1{2(n+1)(n+2)}$; as $n\\to\\infty$ the sum tends to $\\dfrac14$."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Вычислите $\\displaystyle\\sum_{k=1}^{n}\\frac{2k+1}{k^{2}(k+1)^{2}}$.",
    "en": "Evaluate $\\displaystyle\\sum_{k=1}^{n}\\frac{2k+1}{k^{2}(k+1)^{2}}$."
   },
   "hint": {
    "ru": "$2k+1=(k+1)^{2}-k^{2}$.",
    "en": "$2k+1=(k+1)^{2}-k^{2}$."
   },
   "sol": {
    "ru": "Заметим, что числитель — разность квадратов знаменателей: $$2k+1=(k+1)^{2}-k^{2} .$$\n\nЗначит $$\\frac{2k+1}{k^{2}(k+1)^{2}}=\\frac{(k+1)^{2}-k^{2}}{k^{2}(k+1)^{2}}=\\frac1{k^{2}}-\\frac1{(k+1)^{2}} .$$\n\nСумма телескопируется: $$\\sum_{k=1}^{n}\\left(\\frac1{k^{2}}-\\frac1{(k+1)^{2}}\\right)=1-\\frac1{(n+1)^{2}} .$$\n\n**Проверка** при $n=1$: слева $\\dfrac{3}{1\\cdot4}=\\dfrac34$; справа $1-\\dfrac14=\\dfrac34$ ✓ При $n=2$: слева $\\tfrac34+\\tfrac{5}{36}=\\tfrac{27+5}{36}=\\tfrac{32}{36}=\\tfrac89$; справа $1-\\tfrac19=\\tfrac89$ ✓\n\n**Ответ:** $1-\\dfrac1{(n+1)^{2}}$.",
    "en": "Note that the numerator is the difference of the squares in the denominator: $$2k+1=(k+1)^{2}-k^{2} .$$\n\nHence $$\\frac{2k+1}{k^{2}(k+1)^{2}}=\\frac{(k+1)^{2}-k^{2}}{k^{2}(k+1)^{2}}=\\frac1{k^{2}}-\\frac1{(k+1)^{2}} .$$\n\nThe sum telescopes: $$\\sum_{k=1}^{n}\\left(\\frac1{k^{2}}-\\frac1{(k+1)^{2}}\\right)=1-\\frac1{(n+1)^{2}} .$$\n\n**Check** at $n=1$: the left side is $\\dfrac{3}{1\\cdot4}=\\dfrac34$; the right $1-\\dfrac14=\\dfrac34$ ✓ At $n=2$: the left is $\\tfrac34+\\tfrac{5}{36}=\\tfrac{32}{36}=\\tfrac89$; the right $1-\\tfrac19=\\tfrac89$ ✓\n\n**Answer:** $1-\\dfrac1{(n+1)^{2}}$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что $\\displaystyle\\sum_{k=1}^{n}\\frac1{\\sqrt k}\\ >\\ 2\\left(\\sqrt{n+1}-1\\right)$.",
    "en": "Prove that $\\displaystyle\\sum_{k=1}^{n}\\frac1{\\sqrt k}\\ >\\ 2\\left(\\sqrt{n+1}-1\\right)$."
   },
   "hint": {
    "ru": "Сравните $\\dfrac1{\\sqrt k}$ с $2\\left(\\sqrt{k+1}-\\sqrt k\\right)$.",
    "en": "Compare $\\dfrac1{\\sqrt k}$ with $2\\left(\\sqrt{k+1}-\\sqrt k\\right)$."
   },
   "sol": {
    "ru": "**Ключевая оценка.** Домножим разность корней на сопряжённое: $$2\\left(\\sqrt{k+1}-\\sqrt k\\right)=\\frac{2\\left(\\sqrt{k+1}-\\sqrt k\\right)\\left(\\sqrt{k+1}+\\sqrt k\\right)}{\\sqrt{k+1}+\\sqrt k}=\\frac{2}{\\sqrt{k+1}+\\sqrt k} .$$\n\nВ знаменателе $\\sqrt{k+1}+\\sqrt k>2\\sqrt k$, поэтому $$2\\left(\\sqrt{k+1}-\\sqrt k\\right)<\\frac{2}{2\\sqrt k}=\\frac1{\\sqrt k} .$$\n\n**Складываем.** Просуммировав по $k=1,\\dots,n$, слева получаем телескопическую сумму: $$\\sum_{k=1}^{n}2\\left(\\sqrt{k+1}-\\sqrt k\\right)=2\\left(\\sqrt{n+1}-1\\right),$$ и она строго меньше $\\displaystyle\\sum_{k=1}^{n}\\frac1{\\sqrt k}$. $\\blacksquare$\n\n**Проверка** при $n=3$: слева $1+\\tfrac1{\\sqrt2}+\\tfrac1{\\sqrt3}\\approx1+0{,}707+0{,}577=2{,}284$; справа $2(2-1)=2$ ✓\n\n**Следствие.** Сумма неограниченно растёт: при $n=10^{6}$ она больше $2\\left(\\sqrt{10^{6}+1}-1\\right)\\approx1998$.",
    "en": "**The key estimate.** Multiply the difference of roots by its conjugate: $$2\\left(\\sqrt{k+1}-\\sqrt k\\right)=\\frac{2\\left(\\sqrt{k+1}-\\sqrt k\\right)\\left(\\sqrt{k+1}+\\sqrt k\\right)}{\\sqrt{k+1}+\\sqrt k}=\\frac{2}{\\sqrt{k+1}+\\sqrt k} .$$\n\nIn the denominator $\\sqrt{k+1}+\\sqrt k>2\\sqrt k$, so $$2\\left(\\sqrt{k+1}-\\sqrt k\\right)<\\frac{2}{2\\sqrt k}=\\frac1{\\sqrt k} .$$\n\n**Add up.** Summing over $k=1,\\dots,n$, the left side telescopes: $$\\sum_{k=1}^{n}2\\left(\\sqrt{k+1}-\\sqrt k\\right)=2\\left(\\sqrt{n+1}-1\\right),$$ and it is strictly less than $\\displaystyle\\sum_{k=1}^{n}\\frac1{\\sqrt k}$. $\\blacksquare$\n\n**Check** at $n=3$: the left side is $1+\\tfrac1{\\sqrt2}+\\tfrac1{\\sqrt3}\\approx2.284$; the right $2(2-1)=2$ ✓\n\n**Consequence.** The sum grows without bound: at $n=10^{6}$ it exceeds $2\\left(\\sqrt{10^{6}+1}-1\\right)\\approx1998$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Выведите формулу Бине для чисел Фибоначчи: $$F_n=\\frac{1}{\\sqrt5}\\left[\\left(\\frac{1+\\sqrt5}{2}\\right)^{n}-\\left(\\frac{1-\\sqrt5}{2}\\right)^{n}\\right].$$",
    "en": "Derive Binet’s formula for the Fibonacci numbers: $$F_n=\\frac{1}{\\sqrt5}\\left[\\left(\\frac{1+\\sqrt5}{2}\\right)^{n}-\\left(\\frac{1-\\sqrt5}{2}\\right)^{n}\\right].$$"
   },
   "hint": {
    "ru": "Ищите решения вида $x^{n}$: подстановка даёт $x^{2}=x+1$.",
    "en": "Look for solutions of the form $x^{n}$: substitution gives $x^{2}=x+1$."
   },
   "sol": {
    "ru": "**Шаг 1: характеристическое уравнение.** Попробуем подобрать решение вида $a_n=x^{n}$. Подставив в $a_{n+2}=a_{n+1}+a_n$, получаем $$x^{\\,n+2}=x^{\\,n+1}+x^{n}\\quad\\Longrightarrow\\quad x^{2}=x+1 .$$\n\nКорни: $$\\varphi=\\frac{1+\\sqrt5}{2},\\qquad \\psi=\\frac{1-\\sqrt5}{2} .$$\n\n**Шаг 2: общее решение.** Рекуррентность линейна, поэтому любая комбинация $$a_n=A\\varphi^{n}+B\\psi^{n}$$ тоже ей удовлетворяет; и наоборот, коэффициенты $A,B$ однозначно определяются двумя начальными значениями (система из двух линейных уравнений с ненулевым определителем, ведь $\\varphi\\ne\\psi$).\n\n**Шаг 3: подбираем $A$ и $B$.** Из $F_0=0$ и $F_1=1$: $$A+B=0,\\qquad A\\varphi+B\\psi=1 .$$ Первое даёт $B=-A$, второе — $$A(\\varphi-\\psi)=1,\\qquad \\varphi-\\psi=\\sqrt5\\quad\\Longrightarrow\\quad A=\\frac1{\\sqrt5} .$$\n\nЗначит $$F_n=\\frac{\\varphi^{n}-\\psi^{n}}{\\sqrt5} . \\qquad\\blacksquare$$\n\n**Проверка** при $n=5$: $$\\varphi^{5}\\approx11{,}0902,\\quad \\psi^{5}\\approx-0{,}0902,\\quad \\frac{11{,}0902+0{,}0902}{2{,}2360}\\approx5=F_5 \\quad\\checkmark$$\n\n**Следствие.** Так как $|\\psi|<1$, при больших $n$ число $F_n$ — это ближайшее целое к $\\dfrac{\\varphi^{n}}{\\sqrt5}$.",
    "en": "**Step 1: the characteristic equation.** Try a solution of the form $a_n=x^{n}$. Substituting into $a_{n+2}=a_{n+1}+a_n$ gives $$x^{\\,n+2}=x^{\\,n+1}+x^{n}\\quad\\Longrightarrow\\quad x^{2}=x+1 .$$\n\nThe roots are $$\\varphi=\\frac{1+\\sqrt5}{2},\\qquad \\psi=\\frac{1-\\sqrt5}{2} .$$\n\n**Step 2: the general solution.** The recursion is linear, so any combination $$a_n=A\\varphi^{n}+B\\psi^{n}$$ satisfies it too; conversely $A,B$ are determined uniquely by two initial values (a $2\\times2$ linear system with non-zero determinant, since $\\varphi\\ne\\psi$).\n\n**Step 3: fit $A$ and $B$.** From $F_0=0$ and $F_1=1$: $$A+B=0,\\qquad A\\varphi+B\\psi=1 .$$ The first gives $B=-A$, the second $$A(\\varphi-\\psi)=1,\\qquad \\varphi-\\psi=\\sqrt5\\quad\\Longrightarrow\\quad A=\\frac1{\\sqrt5} .$$\n\nHence $$F_n=\\frac{\\varphi^{n}-\\psi^{n}}{\\sqrt5} . \\qquad\\blacksquare$$\n\n**Check** at $n=5$: $$\\varphi^{5}\\approx11.0902,\\quad \\psi^{5}\\approx-0.0902,\\quad \\frac{11.0902+0.0902}{2.2360}\\approx5=F_5 \\quad\\checkmark$$\n\n**Consequence.** Since $|\\psi|<1$, for large $n$ the number $F_n$ is the nearest integer to $\\dfrac{\\varphi^{n}}{\\sqrt5}$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что гармоническая сумма $1+\\dfrac12+\\dfrac13+\\dots+\\dfrac1n$ неограниченно растёт.",
    "en": "Prove that the harmonic sum $1+\\dfrac12+\\dfrac13+\\dots+\\dfrac1n$ grows without bound."
   },
   "hint": {
    "ru": "Сгруппируйте слагаемые блоками длины $1,2,4,8,\\dots$",
    "en": "Group the terms into blocks of lengths $1,2,4,8,\\dots$"
   },
   "sol": {
    "ru": "Разобьём слагаемые на блоки, границы которых — степени двойки: $$\\underbrace{\\frac12}_{1\\ \\text{слаг.}}\\ +\\ \\underbrace{\\frac13+\\frac14}_{2}\\ +\\ \\underbrace{\\frac15+\\dots+\\frac18}_{4}\\ +\\ \\underbrace{\\frac19+\\dots+\\frac1{16}}_{8}+\\dots$$\n\n**Оценим каждый блок снизу.** В блоке от $\\dfrac1{2^{m}+1}$ до $\\dfrac1{2^{\\,m+1}}$ ровно $2^{m}$ слагаемых, и каждое не меньше наименьшего, то есть $\\dfrac1{2^{\\,m+1}}$. Значит блок не меньше $$2^{m}\\cdot\\frac1{2^{\\,m+1}}=\\frac12 .$$\n\n**Складываем.** Взяв $n=2^{k}$, получаем $$1+\\frac12+\\dots+\\frac1{2^{k}}\\ \\ge\\ 1+\\underbrace{\\frac12+\\frac12+\\dots+\\frac12}_{k}=1+\\frac k2 .$$\n\nПравая часть растёт неограниченно, значит и сумма тоже. $\\blacksquare$\n\n**Насколько медленно.** Чтобы сумма превысила $10$, нужно около $n=12\\,367$ слагаемых; чтобы превысить $20$ — уже больше $2\\cdot10^{8}$.\n\n**Замечание.** Это доказательство придумал Николай Орем в XIV веке.",
    "en": "Split the terms into blocks whose boundaries are powers of two: $$\\underbrace{\\frac12}_{1\\ \\text{term}}\\ +\\ \\underbrace{\\frac13+\\frac14}_{2}\\ +\\ \\underbrace{\\frac15+\\dots+\\frac18}_{4}\\ +\\ \\underbrace{\\frac19+\\dots+\\frac1{16}}_{8}+\\dots$$\n\n**Bound each block from below.** The block from $\\dfrac1{2^{m}+1}$ to $\\dfrac1{2^{\\,m+1}}$ has exactly $2^{m}$ terms, each at least the smallest one, $\\dfrac1{2^{\\,m+1}}$. So the block is at least $$2^{m}\\cdot\\frac1{2^{\\,m+1}}=\\frac12 .$$\n\n**Add up.** Taking $n=2^{k}$, $$1+\\frac12+\\dots+\\frac1{2^{k}}\\ \\ge\\ 1+\\underbrace{\\frac12+\\frac12+\\dots+\\frac12}_{k}=1+\\frac k2 .$$\n\nThe right side grows without bound, and so does the sum. $\\blacksquare$\n\n**How slowly.** To pass $10$ takes about $n=12\\,367$ terms; to pass $20$ takes more than $2\\cdot10^{8}$.\n\n**Remark.** This proof is due to Nicole Oresme in the fourteenth century."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что последовательность $a_n=\\left(1+\\dfrac1n\\right)^{n}$ возрастает.",
    "en": "Prove that the sequence $a_n=\\left(1+\\dfrac1n\\right)^{n}$ is increasing."
   },
   "hint": {
    "ru": "Примените неравенство о среднем к $n$ копиям числа $1+\\frac1n$ и одной единице.",
    "en": "Apply AM–GM to $n$ copies of $1+\\frac1n$ together with one $1$."
   },
   "sol": {
    "ru": "Возьмём $n+1$ чисел: $n$ копий числа $1+\\dfrac1n$ и ещё одну единицу.\n\n**Среднее геометрическое** этого набора равно $$\\sqrt[\\,n+1\\,]{\\left(1+\\frac1n\\right)^{n}\\cdot1}=a_n^{\\frac1{n+1}} .$$\n\n**Среднее арифметическое** равно $$\\frac{n\\left(1+\\frac1n\\right)+1}{n+1}=\\frac{n+1+1}{n+1}=1+\\frac1{n+1} .$$\n\nЧисла набора не все равны (единица отличается от $1+\\tfrac1n$), поэтому неравенство о среднем **строгое**: $$a_n^{\\frac1{n+1}}\\ <\\ 1+\\frac1{n+1} .$$\n\nВозведём обе (положительные) части в степень $n+1$: $$a_n\\ <\\ \\left(1+\\frac1{n+1}\\right)^{\\,n+1}=a_{n+1} . \\qquad\\blacksquare$$\n\n**Проверка:** $$a_1=2,\\quad a_2=2{,}25,\\quad a_3\\approx2{,}370,\\quad a_4\\approx2{,}441,\\quad a_{10}\\approx2{,}594 \\quad\\checkmark$$\n\n**Замечание.** Вместе с доказанной ранее оценкой $a_n<3$ это означает, что последовательность возрастает и ограничена, а значит имеет предел — это и есть число $e$.",
    "en": "Take $n+1$ numbers: $n$ copies of $1+\\dfrac1n$ together with a single $1$.\n\n**The geometric mean** of this list is $$\\sqrt[\\,n+1\\,]{\\left(1+\\frac1n\\right)^{n}\\cdot1}=a_n^{\\frac1{n+1}} .$$\n\n**The arithmetic mean** is $$\\frac{n\\left(1+\\frac1n\\right)+1}{n+1}=\\frac{n+1+1}{n+1}=1+\\frac1{n+1} .$$\n\nThe numbers are not all equal (the $1$ differs from $1+\\tfrac1n$), so AM–GM is **strict**: $$a_n^{\\frac1{n+1}}\\ <\\ 1+\\frac1{n+1} .$$\n\nRaise both (positive) sides to the power $n+1$: $$a_n\\ <\\ \\left(1+\\frac1{n+1}\\right)^{\\,n+1}=a_{n+1} . \\qquad\\blacksquare$$\n\n**Check:** $$a_1=2,\\quad a_2=2.25,\\quad a_3\\approx2.370,\\quad a_4\\approx2.441,\\quad a_{10}\\approx2.594 \\quad\\checkmark$$\n\n**Remark.** Together with the earlier bound $a_n<3$ this says the sequence is increasing and bounded, hence convergent — its limit is the number $e$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите теорему Цекендорфа: каждое натуральное число единственным образом представимо суммой различных чисел Фибоначчи, среди которых нет двух соседних.",
    "en": "Prove Zeckendorf’s theorem: every positive integer has a unique representation as a sum of distinct Fibonacci numbers, no two of them consecutive."
   },
   "hint": {
    "ru": "Существование — жадный алгоритм; единственность — сравнение сумм по величине.",
    "en": "Existence: the greedy algorithm. Uniqueness: compare the sizes of the sums."
   },
   "sol": {
    "ru": "Считаем числами Фибоначчи $$F_2=1,\\ F_3=2,\\ F_4=3,\\ F_5=5,\\ F_6=8,\\dots$$ (единицу берём один раз).\n\n**Существование (жадный алгоритм).** Индукция по $n$. Пусть $F_k$ — наибольшее число Фибоначчи, не превосходящее $n$. Рассмотрим остаток $r=n-F_k$.\n\nКлючевая оценка: $r<F_{\\,k-1}$. Действительно, из максимальности $F_k$ следует $n<F_{\\,k+1}=F_k+F_{\\,k-1}$, откуда $r=n-F_k<F_{\\,k-1}$.\n\nЗначит по предположению индукции $r$ раскладывается в такую сумму, и все её слагаемые строго меньше $F_{\\,k-1}$, то есть не соседствуют с $F_k$ ✓\n\n**Единственность.** Достаточно доказать, что сумма любого «правильного» набора со старшим членом $F_k$ строго меньше $F_{\\,k+1}$. Индукция: сумма не превосходит $$F_k+F_{\\,k-2}+F_{\\,k-4}+\\dots ,$$ а для этой суммы известно тождество $$F_k+F_{\\,k-2}+F_{\\,k-4}+\\dots\\ <\\ F_{\\,k+1} $$ (оно проверяется индукцией: $F_k+F_{k-2}+\\dots\\le F_k+F_{k-1}-1=F_{k+1}-1$).\n\nТеперь пусть у числа $n$ есть два разных правильных представления. Выбросим общие слагаемые; у оставшихся наборов старшие члены различны, скажем $F_k>F_m$. Тогда одна сумма не меньше $F_k$, а другая строго меньше $F_{\\,m+1}\\le F_k$ — противоречие ✗\n\n$\\blacksquare$\n\n**Пример.** $$100=89+8+3=F_{11}+F_6+F_4 ,$$ и никакие два из индексов $11,6,4$ не соседние ✓",
    "en": "Take the Fibonacci numbers to be $$F_2=1,\\ F_3=2,\\ F_4=3,\\ F_5=5,\\ F_6=8,\\dots$$ (using the value $1$ only once).\n\n**Existence (greedy algorithm).** Induct on $n$. Let $F_k$ be the largest Fibonacci number not exceeding $n$, and consider the remainder $r=n-F_k$.\n\nThe key estimate is $r<F_{\\,k-1}$: maximality of $F_k$ gives $n<F_{\\,k+1}=F_k+F_{\\,k-1}$, hence $r=n-F_k<F_{\\,k-1}$.\n\nSo by the induction hypothesis $r$ has such a representation, and all its terms are strictly below $F_{\\,k-1}$, hence not adjacent to $F_k$ ✓\n\n**Uniqueness.** It suffices to show that any admissible set with largest member $F_k$ sums to strictly less than $F_{\\,k+1}$. Indeed the sum is at most $$F_k+F_{\\,k-2}+F_{\\,k-4}+\\dots ,$$ and induction gives $$F_k+F_{\\,k-2}+F_{\\,k-4}+\\dots\\ \\le\\ F_k+F_{\\,k-1}-1=F_{\\,k+1}-1\\ <\\ F_{\\,k+1} .$$\n\nNow suppose $n$ had two different admissible representations. Discard the common terms; the remaining sets have different largest members, say $F_k>F_m$. Then one sum is at least $F_k$ while the other is strictly less than $F_{\\,m+1}\\le F_k$ — a contradiction ✗\n\n$\\blacksquare$\n\n**Example.** $$100=89+8+3=F_{11}+F_6+F_4 ,$$ and no two of the indices $11,6,4$ are consecutive ✓"
   }
  },
  {
   "src": "Международный уровень / International level",
   "lvl": 4,
   "q": {
    "ru": "Последовательность задана условиями $a_1=1$ и $a_{n+1}=a_n+\\dfrac1{a_n}$. Докажите, что $a_{100}>14$.",
    "en": "A sequence is given by $a_1=1$ and $a_{n+1}=a_n+\\dfrac1{a_n}$. Prove that $a_{100}>14$."
   },
   "hint": {
    "ru": "Работайте не с $a_n$, а с $a_n^{2}$.",
    "en": "Work with $a_n^{2}$ rather than $a_n$."
   },
   "sol": {
    "ru": "Все члены положительны (это видно по индукции), поэтому можно возводить в квадрат.\n\n**Ключевой шаг.** Возведём рекуррентное соотношение в квадрат: $$a_{n+1}^{2}=\\left(a_n+\\frac1{a_n}\\right)^{2}=a_n^{2}+2+\\frac1{a_n^{2}}\\ >\\ a_n^{2}+2 .$$\n\n**Накапливаем.** Применяя это $n-1$ раз, получаем $$a_n^{2}\\ >\\ a_1^{2}+2(n-1)=1+2(n-1)=2n-1 .$$\n\n**Подставляем $n=100$.** $$a_{100}^{2}\\ >\\ 199\\quad\\Longrightarrow\\quad a_{100}\\ >\\ \\sqrt{199}\\ >\\ \\sqrt{196}=14 . \\qquad\\blacksquare$$\n\n**Насколько оценка точна.** Верхняя оценка получается так же: $$a_{n+1}^{2}=a_n^{2}+2+\\frac1{a_n^{2}}\\ \\le\\ a_n^{2}+2+1 ,$$ откуда $a_{100}^{2}\\le1+3\\cdot99=298$ и $a_{100}<17{,}3$. На самом деле $a_{100}\\approx14{,}61$.\n\n**Замечание.** Тот же приём показывает, что $a_n$ растёт примерно как $\\sqrt{2n}$.",
    "en": "All terms are positive (an easy induction), so we may square.\n\n**The key step.** Square the recursion: $$a_{n+1}^{2}=\\left(a_n+\\frac1{a_n}\\right)^{2}=a_n^{2}+2+\\frac1{a_n^{2}}\\ >\\ a_n^{2}+2 .$$\n\n**Accumulate.** Applying this $n-1$ times, $$a_n^{2}\\ >\\ a_1^{2}+2(n-1)=1+2(n-1)=2n-1 .$$\n\n**Set $n=100$.** $$a_{100}^{2}\\ >\\ 199\\quad\\Longrightarrow\\quad a_{100}\\ >\\ \\sqrt{199}\\ >\\ \\sqrt{196}=14 . \\qquad\\blacksquare$$\n\n**How sharp is this.** An upper bound comes the same way: $$a_{n+1}^{2}=a_n^{2}+2+\\frac1{a_n^{2}}\\ \\le\\ a_n^{2}+3 ,$$ so $a_{100}^{2}\\le1+3\\cdot99=298$ and $a_{100}<17.3$. In fact $a_{100}\\approx14.61$.\n\n**Remark.** The same trick shows $a_n$ grows roughly like $\\sqrt{2n}$."
   }
  }
 ]
};
