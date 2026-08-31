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
  }
 ]
};
