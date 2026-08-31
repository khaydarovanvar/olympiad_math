/* Topic 2 — generated from content/lesson_02.py, do not edit by hand. */
window.LESSONS = window.LESSONS || {};
window.LESSONS[2] = {
 "n": 2,
 "cat": "nt",
 "title": {
  "ru": "Простые числа",
  "en": "Prime numbers"
 },
 "sub": {
  "ru": "Кирпичи, из которых сложены все целые числа: разложение, бесконечность простых и приём «$p>3$ значит $p=6k\\pm1$».",
  "en": "The bricks every integer is built from: factorisation, the infinitude of primes, and the move \"$p>3$ means $p=6k\\pm1$\"."
 },
 "goals": {
  "ru": [
   "Понимать основную теорему арифметики и пользоваться показателями простых.",
   "Проверять число на простоту делением до $\\sqrt{n}$ и строить решето.",
   "Знать доказательство Евклида о бесконечности простых и повторять его приёмом.",
   "Использовать вид $6k\\pm1$ и малые модули, чтобы отсекать случаи в задачах."
  ],
  "en": [
   "Understand the fundamental theorem of arithmetic and work with prime exponents.",
   "Test a number for primality by trial division up to $\\sqrt{n}$, and build a sieve.",
   "Know Euclid's proof that there are infinitely many primes, and reuse the trick.",
   "Use the $6k\\pm1$ form and small moduli to kill cases in problems."
  ]
 },
 "sections": [
  {
   "h": {
    "ru": "Определение и первые наблюдения",
    "en": "Definition and first observations"
   },
   "blocks": [
    {
     "t": "def",
     "name": {
      "ru": "Простое и составное",
      "en": "Prime and composite"
     },
     "text": {
      "ru": "Натуральное число $p>1$ называется **простым**, если его единственные натуральные делители — $1$ и $p$. Число $n>1$, не являющееся простым, называется **составным**. Число $1$ не является ни простым, ни составным.",
      "en": "A positive integer $p>1$ is **prime** if its only positive divisors are $1$ and $p$. An integer $n>1$ that is not prime is **composite**. The number $1$ is neither prime nor composite."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Почему $1$ исключают? Чтобы разложение на простые множители было **единственным**. Иначе $6=2\\cdot3=1\\cdot2\\cdot3=1\\cdot1\\cdot2\\cdot3$ — и никакой единственности.",
      "en": "Why exclude $1$? So that factorisation into primes is **unique**. Otherwise $6=2\\cdot3=1\\cdot2\\cdot3=1\\cdot1\\cdot2\\cdot3$, and uniqueness is gone."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Наименьший делитель",
      "en": "The smallest divisor"
     },
     "text": {
      "ru": "Наименьший делитель $d>1$ составного числа $n$ — простое число, и $d\\le\\sqrt{n}$.",
      "en": "The smallest divisor $d>1$ of a composite number $n$ is prime, and $d\\le\\sqrt{n}$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Если бы $d$ было составным, у него нашёлся бы делитель $1<e<d$, который делил бы и $n$ — противоречие с минимальностью $d$. Значит $d$ простое. Далее, $n=d\\cdot m$, где $m\\ge d$ (иначе $m$ был бы меньшим делителем). Тогда $n=dm\\ge d^2$, то есть $d\\le\\sqrt{n}$.",
      "en": "If $d$ were composite it would have a divisor $1<e<d$, which would also divide $n$ — contradicting the minimality of $d$. So $d$ is prime. Next, $n=d\\cdot m$ with $m\\ge d$ (otherwise $m$ would be a smaller divisor). Then $n=dm\\ge d^2$, that is $d\\le\\sqrt{n}$."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Как проверить простоту",
      "en": "How to test for primality"
     },
     "text": {
      "ru": "Из теоремы следует практический рецепт: чтобы проверить $n$ на простоту, достаточно перебрать простые делители до $\\sqrt{n}$. Для $n=323$ хватает простых до $17$: $2,3,5,7,11,13,17$. Находим $323=17\\cdot19$ — составное.",
      "en": "The theorem gives a practical recipe: to test $n$, it is enough to try the primes up to $\\sqrt{n}$. For $n=323$ the primes up to $17$ suffice: $2,3,5,7,11,13,17$. We find $323=17\\cdot19$ — composite."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Простое ли число $221$?",
      "en": "Is $221$ prime?"
     },
     "steps": {
      "ru": [
       "$\\sqrt{221}\\approx14.9$, значит достаточно проверить простые $2,3,5,7,11,13$.",
       "$221$ нечётно, сумма цифр $5$ — не делится на $3$, не оканчивается на $0$ или $5$.",
       "$221=7\\cdot31+4$; $221=11\\cdot20+1$; $221=13\\cdot17$ — делится!"
      ],
      "en": [
       "$\\sqrt{221}\\approx14.9$, so it is enough to try $2,3,5,7,11,13$.",
       "$221$ is odd, its digit sum is $5$ — not divisible by $3$ — and it does not end in $0$ or $5$.",
       "$221=7\\cdot31+4$; $221=11\\cdot20+1$; $221=13\\cdot17$ — it divides!"
      ]
     },
     "ans": {
      "ru": "Составное: $221=13\\cdot17$",
      "en": "Composite: $221=13\\cdot17$"
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Основная теорема арифметики",
    "en": "The fundamental theorem of arithmetic"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Единственность разложения",
      "en": "Unique factorisation"
     },
     "text": {
      "ru": "Каждое натуральное число $n>1$ единственным образом (с точностью до порядка сомножителей) записывается в виде $$n=p_1^{\\alpha_1}p_2^{\\alpha_2}\\cdots p_k^{\\alpha_k},$$ где $p_1<p_2<\\cdots<p_k$ — простые, а $\\alpha_i\\ge1$.",
      "en": "Every integer $n>1$ can be written, in exactly one way up to the order of the factors, as $$n=p_1^{\\alpha_1}p_2^{\\alpha_2}\\cdots p_k^{\\alpha_k},$$ where $p_1<p_2<\\cdots<p_k$ are primes and $\\alpha_i\\ge1$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "*Существование* — индукцией: если $n$ простое, готово; иначе $n=ab$ с $1<a,b<n$, и оба множителя раскладываются по предположению индукции. *Единственность* опирается на лемму Евклида (см. тему 1): если $p$ простое и $p\\mid ab$, то $p\\mid a$ или $p\\mid b$. Пусть у $n$ есть два разложения. Простое $p_1$ из первого делит произведение во втором, значит делит один из его сомножителей, а тот простой — значит равен $p_1$. Сокращаем на $p_1$ и повторяем.",
      "en": "*Existence* by induction: if $n$ is prime we are done; otherwise $n=ab$ with $1<a,b<n$, and both factors split by the induction hypothesis. *Uniqueness* rests on Euclid\\'s lemma (topic 1): if $p$ is prime and $p\\mid ab$ then $p\\mid a$ or $p\\mid b$. Suppose $n$ has two factorisations. The prime $p_1$ from the first divides the product in the second, hence divides one of its factors, which is prime — so that factor equals $p_1$. Cancel $p_1$ and repeat."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Язык показателей",
      "en": "The language of exponents"
     },
     "text": {
      "ru": "Обозначим через $v_p(n)$ показатель простого $p$ в разложении $n$. Тогда всё становится арифметикой показателей: $$v_p(ab)=v_p(a)+v_p(b),\\qquad a\\mid b\\iff v_p(a)\\le v_p(b)\\ \\text{для всех } p.$$ Число — точный квадрат тогда и только тогда, когда все $v_p$ чётны; точный куб — когда все делятся на $3$.",
      "en": "Write $v_p(n)$ for the exponent of the prime $p$ in $n$. Everything becomes arithmetic of exponents: $$v_p(ab)=v_p(a)+v_p(b),\\qquad a\\mid b\\iff v_p(a)\\le v_p(b)\\ \\text{for every } p.$$ A number is a perfect square exactly when every $v_p$ is even, and a perfect cube exactly when every $v_p$ is a multiple of $3$."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите наименьшее натуральное $k$, при котором $2^5\\cdot3^3\\cdot5\\cdot k$ — точный квадрат.",
      "en": "Find the smallest positive integer $k$ for which $2^5\\cdot3^3\\cdot5\\cdot k$ is a perfect square."
     },
     "steps": {
      "ru": [
       "Показатели сейчас: $v_2=5$, $v_3=3$, $v_5=1$ — все нечётные.",
       "Чтобы все стали чётными, не хватает по одной степени каждого простого.",
       "$k=2\\cdot3\\cdot5=30$. Проверка: $2^6\\cdot3^4\\cdot5^2=(2^3\\cdot3^2\\cdot5)^2=360^2$."
      ],
      "en": [
       "The exponents now are $v_2=5$, $v_3=3$, $v_5=1$ — all odd.",
       "To make them all even, one more copy of each prime is needed.",
       "$k=2\\cdot3\\cdot5=30$. Check: $2^6\\cdot3^4\\cdot5^2=(2^3\\cdot3^2\\cdot5)^2=360^2$."
      ]
     },
     "ans": {
      "ru": "$k=30$",
      "en": "$k=30$"
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Простых бесконечно много",
    "en": "There are infinitely many primes"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Теорема Евклида",
      "en": "Euclid's theorem"
     },
     "text": {
      "ru": "Простых чисел бесконечно много.",
      "en": "There are infinitely many primes."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Предположим противное: простых конечное число, скажем $p_1,p_2,\\ldots,p_k$ — все они. Рассмотрим $$N=p_1p_2\\cdots p_k+1.$$ Число $N>1$, значит у него есть простой делитель $p$. Но $p$ — одно из $p_i$, и тогда $p$ делит и произведение $p_1\\cdots p_k$, и $N$, а значит делит их разность, равную $1$. Противоречие. $\\blacksquare$",
      "en": "Suppose not: there are finitely many primes, say $p_1,p_2,\\ldots,p_k$, and those are all of them. Consider $$N=p_1p_2\\cdots p_k+1.$$ Since $N>1$ it has a prime divisor $p$. But $p$ is one of the $p_i$, so $p$ divides both the product $p_1\\cdots p_k$ and $N$, hence their difference, which is $1$. Contradiction. $\\blacksquare$"
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Частая ошибка: думать, что $p_1p_2\\cdots p_k+1$ **само** простое. Это неверно: $$2\\cdot3\\cdot5\\cdot7\\cdot11\\cdot13+1=30031=59\\cdot509.$$ Доказательство утверждает лишь, что у этого числа есть простой делитель вне списка.",
      "en": "A common slip is to think $p_1p_2\\cdots p_k+1$ is **itself** prime. It need not be: $$2\\cdot3\\cdot5\\cdot7\\cdot11\\cdot13+1=30031=59\\cdot509.$$ The proof only claims that this number has a prime divisor outside the list."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Тот же приём с поправкой даёт больше. Чтобы доказать бесконечность простых вида $4k+3$, берут $N=4p_1p_2\\cdots p_k-1$: такое $N$ даёт остаток $3$ по модулю $4$, а произведение простых вида $4k+1$ снова имеет вид $4k+1$ — значит у $N$ есть простой делитель вида $4k+3$, и он не из списка.",
      "en": "The same trick, adjusted, gives more. To prove there are infinitely many primes of the form $4k+3$, take $N=4p_1p_2\\cdots p_k-1$: this $N$ leaves remainder $3$ modulo $4$, and a product of primes of the form $4k+1$ is again of the form $4k+1$ — so $N$ has a prime divisor of the form $4k+3$, and it is not on the list."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Сколь угодно длинные промежутки без простых",
      "en": "Arbitrarily long prime-free gaps"
     },
     "text": {
      "ru": "Числа $$n!+2,\\;n!+3,\\;\\ldots,\\;n!+n$$ составные: $k$ делит $n!+k$ при $2\\le k\\le n$. Значит существует промежуток длины $n-1$ вообще без простых — простые распределены крайне неравномерно.",
      "en": "The numbers $$n!+2,\\;n!+3,\\;\\ldots,\\;n!+n$$ are all composite: $k$ divides $n!+k$ for $2\\le k\\le n$. So there is a run of $n-1$ consecutive integers containing no prime at all — primes are spread very unevenly."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Форма $6k\\pm1$ и малые модули",
    "en": "The $6k\\pm1$ form and small moduli"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Вид простого числа",
      "en": "The shape of a prime"
     },
     "text": {
      "ru": "Каждое простое $p>3$ имеет вид $6k+1$ или $6k-1$.",
      "en": "Every prime $p>3$ has the form $6k+1$ or $6k-1$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Любое целое имеет вид $6k,6k\\pm1,6k\\pm2,6k+3$. Числа $6k$, $6k\\pm2$ чётны, а $6k+3$ делится на $3$; при $p>3$ ни то, ни другое невозможно. Остаются $6k\\pm1$. $\\blacksquare$",
      "en": "Every integer has one of the forms $6k,6k\\pm1,6k\\pm2,6k+3$. The numbers $6k$ and $6k\\pm2$ are even, and $6k+3$ is divisible by $3$; for $p>3$ neither is possible. Only $6k\\pm1$ remains. $\\blacksquare$"
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Главный приём темы",
      "en": "The main move of the topic"
     },
     "text": {
      "ru": "Если в задаче есть простое $p$, спросите: **что будет, если $p$ мало?** Обычно случаи $p=2$ и $p=3$ разбираются вручную, а для $p>3$ работает $p^2\\equiv1\\pmod{24}$ или сравнение по модулю $3$. Так решается огромное число задач вида «найдите все простые, для которых…».",
      "en": "When a prime $p$ appears in a problem, ask: **what if $p$ is small?** Usually $p=2$ and $p=3$ are handled by hand, and for $p>3$ either $p^2\\equiv1\\pmod{24}$ or a congruence modulo $3$ does the work. A great many \"find all primes such that…\" problems fall to exactly this."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите все простые $p$, при которых $p^2+2$ тоже простое.",
      "en": "Find all primes $p$ for which $p^2+2$ is also prime."
     },
     "steps": {
      "ru": [
       "Проверим малые: $p=2$ даёт $6$ — составное; $p=3$ даёт $11$ — простое.",
       "Пусть $p>3$. Тогда $p$ не делится на $3$, значит $p^2$ даёт остаток $1$ при делении на $3$.",
       "Тогда $p^2+2$ делится на $3$ и больше $3$ — составное."
      ],
      "en": [
       "Try the small ones: $p=2$ gives $6$, composite; $p=3$ gives $11$, prime.",
       "Now let $p>3$. Then $3\\nmid p$, so $p^2$ leaves remainder $1$ on division by $3$.",
       "Hence $p^2+2$ is divisible by $3$ and larger than $3$ — composite."
      ]
     },
     "ans": {
      "ru": "Только $p=3$",
      "en": "Only $p=3$"
     }
    },
    {
     "t": "table",
     "head": {
      "ru": [
       "Модуль",
       "Что даёт",
       "Когда применять"
      ],
      "en": [
       "Modulus",
       "What it gives",
       "When to use it"
      ]
     },
     "rows": {
      "ru": [
       [
        "$2$",
        "чётность",
        "суммы, произведения, «одно из двух»"
       ],
       [
        "$3$",
        "$p^2\\equiv1$ при $3\\nmid p$",
        "выражения с $p^2$"
       ],
       [
        "$4$",
        "$n^2\\equiv0,1$",
        "суммы квадратов"
       ],
       [
        "$8$",
        "нечётный квадрат $\\equiv1$",
        "уравнения с $2q^2$"
       ],
       [
        "$9$",
        "сумма цифр",
        "десятичная запись"
       ]
      ],
      "en": [
       [
        "$2$",
        "parity",
        "sums, products, \"one of the two\""
       ],
       [
        "$3$",
        "$p^2\\equiv1$ when $3\\nmid p$",
        "expressions with $p^2$"
       ],
       [
        "$4$",
        "$n^2\\equiv0,1$",
        "sums of squares"
       ],
       [
        "$8$",
        "an odd square is $\\equiv1$",
        "equations with $2q^2$"
       ],
       [
        "$9$",
        "the digit sum",
        "decimal representation"
       ]
      ]
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Решето Эратосфена",
    "en": "The sieve of Eratosthenes"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Чтобы выписать все простые до $N$, выпишите числа от $2$ до $N$ и последовательно вычёркивайте кратные каждого нового невычеркнутого числа, начиная с его квадрата. Остановиться можно, как только текущее простое превысит $\\sqrt{N}$.",
      "en": "To list every prime up to $N$, write the numbers from $2$ to $N$ and cross out the multiples of each new uncrossed number, starting from its square. You may stop as soon as the current prime exceeds $\\sqrt{N}$."
     }
    },
    {
     "t": "ol",
     "items": {
      "ru": [
       "Вычёркиваем кратные $2$, начиная с $4$.",
       "Следующее невычеркнутое — $3$; вычёркиваем с $9$.",
       "Далее $5$ (с $25$), $7$ (с $49$). Для $N=100$ этого достаточно, так как $11^2=121>100$.",
       "Оставшиеся числа — простые: их $25$ штук до $100$."
      ],
      "en": [
       "Cross out the multiples of $2$, starting at $4$.",
       "The next uncrossed number is $3$; cross out from $9$.",
       "Then $5$ (from $25$) and $7$ (from $49$). For $N=100$ that is enough, since $11^2=121>100$.",
       "What is left is prime: there are $25$ primes below $100$."
      ]
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Первые простые стоит знать наизусть: $2,3,5,7,11,13,17,19,23,29,31,37,41,43,47$. На олимпиаде это экономит минуты.",
      "en": "The first primes are worth knowing by heart: $2,3,5,7,11,13,17,19,23,29,31,37,41,43,47$. In a contest this saves minutes."
     }
    }
   ]
  }
 ],
 "problems": [
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что $2$ — единственное чётное простое число.",
    "en": "Prove that $2$ is the only even prime."
   },
   "hint": {
    "ru": "У чётного числа есть делитель $2$.",
    "en": "An even number has $2$ as a divisor."
   },
   "sol": {
    "ru": "Пусть $p$ — чётное простое. Тогда $2\\mid p$, а у простого числа делители только $1$ и $p$. Значит $2=p$. $\\blacksquare$",
    "en": "Let $p$ be an even prime. Then $2\\mid p$, and the only divisors of a prime are $1$ and $p$. Hence $2=p$. $\\blacksquare$"
   }
  },
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "Простое ли число $323$? А $331$?",
    "en": "Is $323$ prime? Is $331$?"
   },
   "hint": {
    "ru": "Перебирайте простые до $\\sqrt{n}$.",
    "en": "Try the primes up to $\\sqrt{n}$."
   },
   "sol": {
    "ru": "$\\sqrt{323}\\approx18$: проверяем $2,3,5,7,11,13,17$ и находим $323=17\\cdot19$ — составное. $\\sqrt{331}\\approx18.2$: ни одно из $2,3,5,7,11,13,17$ не делит $331$, значит оно простое.",
    "en": "$\\sqrt{323}\\approx18$: trying $2,3,5,7,11,13,17$ we find $323=17\\cdot19$ — composite. $\\sqrt{331}\\approx18.2$: none of $2,3,5,7,11,13,17$ divides $331$, so it is prime."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Найдите все натуральные числа, имеющие ровно три натуральных делителя.",
    "en": "Find all positive integers with exactly three positive divisors."
   },
   "hint": {
    "ru": "Вспомните формулу $d(n)=\\prod(\\alpha_i+1)$.",
    "en": "Recall the formula $d(n)=\\prod(\\alpha_i+1)$."
   },
   "sol": {
    "ru": "Пусть $n=p_1^{\\alpha_1}\\cdots p_k^{\\alpha_k}$. Тогда $d(n)=(\\alpha_1+1)\\cdots(\\alpha_k+1)=3$. Так как $3$ простое, произведение состоит из одного множителя, равного $3$: значит $k=1$ и $\\alpha_1=2$. **Ответ:** $n=p^2$ для простого $p$ — то есть $4,9,25,49,\\ldots$",
    "en": "Let $n=p_1^{\\alpha_1}\\cdots p_k^{\\alpha_k}$. Then $d(n)=(\\alpha_1+1)\\cdots(\\alpha_k+1)=3$. Since $3$ is prime the product has a single factor equal to $3$: so $k=1$ and $\\alpha_1=2$. **Answer:** $n=p^2$ for a prime $p$ — that is $4,9,25,49,\\ldots$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Найдите наименьшее $k$, при котором $2^3\\cdot3^5\\cdot7\\cdot k$ — точный куб.",
    "en": "Find the smallest $k$ for which $2^3\\cdot3^5\\cdot7\\cdot k$ is a perfect cube."
   },
   "hint": {
    "ru": "Все показатели должны делиться на $3$.",
    "en": "Every exponent must be a multiple of $3$."
   },
   "sol": {
    "ru": "Показатели: $v_2=3$ (уже кратен $3$), $v_3=5$ (нужно ещё $1$ до $6$), $v_7=1$ (нужно ещё $2$ до $3$). Значит $k=3\\cdot7^2=147$. Проверка: $2^3\\cdot3^6\\cdot7^3=(2\\cdot3^2\\cdot7)^3=126^3$.",
    "en": "The exponents are $v_2=3$ (already a multiple of $3$), $v_3=5$ (one more reaches $6$), $v_7=1$ (two more reach $3$). So $k=3\\cdot7^2=147$. Check: $2^3\\cdot3^6\\cdot7^3=(2\\cdot3^2\\cdot7)^3=126^3$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что каждое простое $p>3$ имеет вид $6k\\pm1$, и приведите пример числа вида $6k+1$, которое не является простым.",
    "en": "Prove that every prime $p>3$ has the form $6k\\pm1$, and give an example of a number of the form $6k+1$ that is not prime."
   },
   "hint": {
    "ru": "Разберите шесть остатков по модулю $6$.",
    "en": "Look at the six remainders modulo $6$."
   },
   "sol": {
    "ru": "Любое целое имеет один из видов $6k,6k+1,6k+2,6k+3,6k+4,6k+5$. Формы $6k,6k+2,6k+4$ дают чётные числа, $6k+3$ делится на $3$. При $p>3$ это исключено, остаются $6k+1$ и $6k+5=6(k+1)-1$. Обратное неверно: $25=6\\cdot4+1$ составное. $\\blacksquare$",
    "en": "Every integer is of one of the forms $6k,6k+1,6k+2,6k+3,6k+4,6k+5$. The forms $6k,6k+2,6k+4$ are even and $6k+3$ is divisible by $3$. For $p>3$ that is impossible, leaving $6k+1$ and $6k+5=6(k+1)-1$. The converse fails: $25=6\\cdot4+1$ is composite. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Найдите все простые $p$, для которых $p$, $p+2$ и $p+4$ одновременно простые.",
    "en": "Find all primes $p$ for which $p$, $p+2$ and $p+4$ are all prime."
   },
   "hint": {
    "ru": "Одно из трёх чисел обязательно делится на $3$.",
    "en": "One of the three numbers must be divisible by $3$."
   },
   "sol": {
    "ru": "Числа $p,p+2,p+4$ дают по модулю $3$ остатки $p,\\;p+2,\\;p+1$ — то есть все три различных остатка $0,1,2$ в каком-то порядке. Значит ровно одно из них делится на $3$. Чтобы оно было простым, оно должно равняться $3$. Случай $p=3$ даёт тройку $3,5,7$ — все простые ✓. Случай $p+2=3$ даёт $p=1$ — не простое; $p+4=3$ даёт отрицательное $p$. **Ответ:** $p=3$.",
    "en": "Modulo $3$ the numbers $p,p+2,p+4$ leave the remainders of $p,\\;p+2,\\;p+1$ — that is, all three distinct remainders $0,1,2$ in some order. So exactly one of them is divisible by $3$. For it to be prime it must equal $3$. The case $p=3$ gives the triple $3,5,7$, all prime ✓. The case $p+2=3$ gives $p=1$, not prime; $p+4=3$ gives a negative $p$. **Answer:** $p=3$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Найдите все простые $p$, при которых $8p^2+1$ тоже простое.",
    "en": "Find all primes $p$ for which $8p^2+1$ is also prime."
   },
   "hint": {
    "ru": "Что даёт $p^2$ по модулю $3$?",
    "en": "What is $p^2$ modulo $3$?"
   },
   "sol": {
    "ru": "При $p=3$ получаем $8\\cdot9+1=73$ — простое ✓. Пусть $p\\ne3$; тогда $3\\nmid p$ и $p^2$ даёт остаток $1$ по модулю $3$. Значит $8p^2+1$ даёт остаток $8+1=9\\equiv0$, то есть делится на $3$ и больше $3$ — составное. **Ответ:** $p=3$.",
    "en": "For $p=3$ we get $8\\cdot9+1=73$, prime ✓. Now let $p\\ne3$; then $3\\nmid p$ and $p^2$ leaves remainder $1$ modulo $3$. So $8p^2+1$ leaves remainder $8+1=9\\equiv0$, that is, it is divisible by $3$ and larger than $3$ — composite. **Answer:** $p=3$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $n^4+4$ составное при любом натуральном $n>1$.",
    "en": "Prove that $n^4+4$ is composite for every integer $n>1$."
   },
   "hint": {
    "ru": "Добавьте и вычтите $4n^2$.",
    "en": "Add and subtract $4n^2$."
   },
   "sol": {
    "ru": "Это тождество Софи Жермен: $$n^4+4=n^4+4n^2+4-4n^2=(n^2+2)^2-(2n)^2=(n^2-2n+2)(n^2+2n+2).$$ При $n>1$ меньший множитель $n^2-2n+2=(n-1)^2+1\\ge2$, а больший строго больше него, значит оба множителя больше $1$ — число составное. $\\blacksquare$ (При $n=1$ получается $5$ — простое.)",
    "en": "This is Sophie Germain's identity: $$n^4+4=n^4+4n^2+4-4n^2=(n^2+2)^2-(2n)^2=(n^2-2n+2)(n^2+2n+2).$$ For $n>1$ the smaller factor $n^2-2n+2=(n-1)^2+1\\ge2$, and the larger is strictly bigger, so both factors exceed $1$ and the number is composite. $\\blacksquare$ (For $n=1$ it equals $5$, which is prime.)"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Найдите все пары простых чисел $(p,q)$ с $p-q=3$.",
    "en": "Find all pairs of primes $(p,q)$ with $p-q=3$."
   },
   "hint": {
    "ru": "Чётность.",
    "en": "Parity."
   },
   "sol": {
    "ru": "Если оба простых нечётны, их разность чётна и не может равняться $3$. Значит одно из них равно $2$. Так как $p>q$, имеем $q=2$ и $p=5$. Оба простые ✓. **Ответ:** $(5,2)$.",
    "en": "If both primes are odd their difference is even and cannot equal $3$. So one of them is $2$. Since $p>q$ we get $q=2$ and $p=5$. Both are prime ✓. **Answer:** $(5,2)$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что среди любых трёх последовательных нечётных чисел, больших $3$, есть составное.",
    "en": "Prove that among any three consecutive odd numbers greater than $3$ there is a composite one."
   },
   "hint": {
    "ru": "Модуль $3$.",
    "en": "Work modulo $3$."
   },
   "sol": {
    "ru": "Пусть числа — $n,n+2,n+4$. По модулю $3$ они дают остатки $n,\\,n+2,\\,n+1$, то есть все три различных остатка. Значит одно из них делится на $3$. Так как все три больше $3$, это число больше $3$ и делится на $3$ — оно составное. $\\blacksquare$",
    "en": "Let the numbers be $n,n+2,n+4$. Modulo $3$ they leave the remainders of $n,\\,n+2,\\,n+1$, that is, all three distinct remainders. So one of them is divisible by $3$. Since all three exceed $3$, that number is larger than $3$ and divisible by $3$ — hence composite. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что для любого $n$ существуют $n$ подряд идущих составных чисел.",
    "en": "Prove that for every $n$ there exist $n$ consecutive composite numbers."
   },
   "hint": {
    "ru": "Рассмотрите $(n+1)!+k$.",
    "en": "Consider $(n+1)!+k$."
   },
   "sol": {
    "ru": "Возьмём числа $$(n+1)!+2,\\;(n+1)!+3,\\;\\ldots,\\;(n+1)!+(n+1).$$ Их ровно $n$. Для каждого $k$ из промежутка $2\\le k\\le n+1$ число $k$ делит $(n+1)!$, значит делит и $(n+1)!+k$. При этом $(n+1)!+k>k>1$, поэтому каждое из чисел составное. $\\blacksquare$",
    "en": "Take the numbers $$(n+1)!+2,\\;(n+1)!+3,\\;\\ldots,\\;(n+1)!+(n+1).$$ There are exactly $n$ of them. For each $k$ with $2\\le k\\le n+1$ the number $k$ divides $(n+1)!$, hence divides $(n+1)!+k$ as well. Since $(n+1)!+k>k>1$, each of them is composite. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что если $2^n-1$ простое, то $n$ простое.",
    "en": "Prove that if $2^n-1$ is prime then $n$ is prime."
   },
   "hint": {
    "ru": "Если $n=ab$, воспользуйтесь тем, что $x-1$ делит $x^b-1$.",
    "en": "If $n=ab$, use the fact that $x-1$ divides $x^b-1$."
   },
   "sol": {
    "ru": "Докажем контрапозицию: пусть $n$ составное, $n=ab$ с $1<a,b<n$. Положим $x=2^a$. Тогда $$2^n-1=x^b-1=(x-1)\\left(x^{b-1}+x^{b-2}+\\cdots+1\\right),$$ то есть $2^a-1$ делит $2^n-1$. При $1<a<n$ имеем $1<2^a-1<2^n-1$, значит найден нетривиальный делитель и $2^n-1$ составное. $\\blacksquare$ *Обратное неверно:* $n=11$ простое, но $2^{11}-1=2047=23\\cdot89$.",
    "en": "We prove the contrapositive: suppose $n$ is composite, $n=ab$ with $1<a,b<n$. Put $x=2^a$. Then $$2^n-1=x^b-1=(x-1)\\left(x^{b-1}+x^{b-2}+\\cdots+1\\right),$$ so $2^a-1$ divides $2^n-1$. Since $1<a<n$ we have $1<2^a-1<2^n-1$, a non-trivial divisor, so $2^n-1$ is composite. $\\blacksquare$ *The converse fails:* $n=11$ is prime but $2^{11}-1=2047=23\\cdot89$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Найдите все простые $p$ и $q$, для которых $p^2-2q^2=1$.",
    "en": "Find all primes $p$ and $q$ with $p^2-2q^2=1$."
   },
   "hint": {
    "ru": "Посмотрите на равенство по модулю $8$, предположив $q$ нечётным.",
    "en": "Look at the equation modulo $8$, assuming $q$ is odd."
   },
   "sol": {
    "ru": "Из $p^2=2q^2+1$ видно, что $p$ нечётно. Пусть $q$ нечётно; тогда $q^2$ даёт остаток $1$ по модулю $8$ (квадрат нечётного всегда $\\equiv1\\pmod 8$), значит $p^2=2q^2+1\\equiv3\\pmod 8$. Но квадрат нечётного числа $\\equiv1\\pmod8$ — противоречие. Значит $q$ чётно, а единственное чётное простое — $q=2$. Тогда $p^2=9$, $p=3$. **Ответ:** $(p,q)=(3,2)$.",
    "en": "From $p^2=2q^2+1$ we see $p$ is odd. Suppose $q$ is odd; then $q^2\\equiv1\\pmod8$ (an odd square always is), so $p^2=2q^2+1\\equiv3\\pmod8$. But an odd square is $\\equiv1\\pmod8$ — contradiction. So $q$ is even, and the only even prime is $q=2$. Then $p^2=9$ and $p=3$. **Answer:** $(p,q)=(3,2)$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $p^2\\equiv1\\pmod{24}$ для любого простого $p>3$.",
    "en": "Prove that $p^2\\equiv1\\pmod{24}$ for every prime $p>3$."
   },
   "hint": {
    "ru": "Запишите $p=6k\\pm1$ и раскройте квадрат.",
    "en": "Write $p=6k\\pm1$ and expand the square."
   },
   "sol": {
    "ru": "По доказанному $p=6k\\pm1$, поэтому $$p^2=36k^2\\pm12k+1=12k(3k\\pm1)+1.$$ Осталось проверить, что $k(3k\\pm1)$ чётно. Если $k$ чётно — очевидно. Если $k$ нечётно, то $3k$ нечётно, значит $3k\\pm1$ чётно. В обоих случаях $12k(3k\\pm1)$ делится на $24$, откуда $p^2\\equiv1\\pmod{24}$. $\\blacksquare$",
    "en": "We showed $p=6k\\pm1$, so $$p^2=36k^2\\pm12k+1=12k(3k\\pm1)+1.$$ It remains to check that $k(3k\\pm1)$ is even. If $k$ is even this is clear. If $k$ is odd then $3k$ is odd, so $3k\\pm1$ is even. In both cases $12k(3k\\pm1)$ is divisible by $24$, hence $p^2\\equiv1\\pmod{24}$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Найдите наименьший простой делитель числа $2^{2025}+1$.",
    "en": "Find the smallest prime divisor of $2^{2025}+1$."
   },
   "hint": {
    "ru": "$x+1$ делит $x^m+1$ при нечётном $m$.",
    "en": "$x+1$ divides $x^m+1$ when $m$ is odd."
   },
   "sol": {
    "ru": "Число $2^{2025}+1$ нечётно, значит $2$ не подходит. Показатель $2025$ нечётен, а при нечётном $m$ выполняется $$x^m+1=(x+1)\\left(x^{m-1}-x^{m-2}+\\cdots+1\\right).$$ При $x=2$ получаем, что $3$ делит $2^{2025}+1$. Меньших простых делителей быть не может. **Ответ:** $3$.",
    "en": "The number $2^{2025}+1$ is odd, so $2$ is out. The exponent $2025$ is odd, and for odd $m$ $$x^m+1=(x+1)\\left(x^{m-1}-x^{m-2}+\\cdots+1\\right).$$ With $x=2$ this shows $3$ divides $2^{2025}+1$. No smaller prime can divide it. **Answer:** $3$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что если $2^n+1$ простое $(n\\ge1)$, то $n$ — степень двойки.",
    "en": "Prove that if $2^n+1$ is prime $(n\\ge1)$ then $n$ is a power of two."
   },
   "hint": {
    "ru": "Выделите нечётный множитель показателя.",
    "en": "Split off an odd factor of the exponent."
   },
   "sol": {
    "ru": "Предположим, что $n$ не степень двойки. Тогда $n=2^s\\cdot m$ с нечётным $m>1$. Положим $x=2^{2^s}$. Так как $m$ нечётно, $$2^n+1=x^m+1=(x+1)\\left(x^{m-1}-x^{m-2}+\\cdots-x+1\\right),$$ то есть $x+1=2^{2^s}+1$ делит $2^n+1$. При $m>1$ этот делитель строго меньше $2^n+1$ и больше $1$, значит $2^n+1$ составное. $\\blacksquare$ *Замечание:* обратное неверно — $2^{32}+1$ составное (см. задачу про $641$ в теме 3).",
    "en": "Suppose $n$ is not a power of two. Then $n=2^s\\cdot m$ with $m>1$ odd. Put $x=2^{2^s}$. Since $m$ is odd, $$2^n+1=x^m+1=(x+1)\\left(x^{m-1}-x^{m-2}+\\cdots-x+1\\right),$$ so $x+1=2^{2^s}+1$ divides $2^n+1$. For $m>1$ this divisor is strictly between $1$ and $2^n+1$, hence $2^n+1$ is composite. $\\blacksquare$ *Note:* the converse fails — $2^{32}+1$ is composite (see the $641$ problem in topic 3)."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что простых вида $4k+3$ бесконечно много.",
    "en": "Prove that there are infinitely many primes of the form $4k+3$."
   },
   "hint": {
    "ru": "Повторите Евклида, но возьмите $N=4p_1\\cdots p_k-1$.",
    "en": "Repeat Euclid, but take $N=4p_1\\cdots p_k-1$."
   },
   "sol": {
    "ru": "Сначала заметим: произведение чисел вида $4k+1$ снова имеет вид $4k+1$, потому что $(4a+1)(4b+1)=4(4ab+a+b)+1$. Предположим, что простых вида $4k+3$ конечное число: $p_1,\\ldots,p_k$ (все они нечётны). Рассмотрим $$N=4p_1p_2\\cdots p_k-1.$$ Число $N$ нечётно и даёт остаток $3$ по модулю $4$. Все его простые делители нечётны; если бы все они имели вид $4k+1$, то и $N$ имело бы вид $4k+1$ — противоречие. Значит у $N$ есть простой делитель $p$ вида $4k+3$. Но $p$ не может быть ни одним из $p_i$: иначе $p$ делило бы $4p_1\\cdots p_k$ и $N$, а значит и их разность $1$. Противоречие. $\\blacksquare$",
    "en": "First note that a product of numbers of the form $4k+1$ is again of that form, since $(4a+1)(4b+1)=4(4ab+a+b)+1$. Suppose there were finitely many primes of the form $4k+3$: $p_1,\\ldots,p_k$ (all odd). Consider $$N=4p_1p_2\\cdots p_k-1.$$ $N$ is odd and leaves remainder $3$ modulo $4$. All its prime divisors are odd; if every one had the form $4k+1$ then $N$ itself would — contradiction. So $N$ has a prime divisor $p$ of the form $4k+3$. But $p$ cannot be any of the $p_i$: otherwise $p$ would divide both $4p_1\\cdots p_k$ and $N$, hence their difference $1$. Contradiction. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что не существует многочлена $f$ с целыми коэффициентами, непостоянного, у которого $f(n)$ простое при всех натуральных $n$.",
    "en": "Prove that no non-constant polynomial $f$ with integer coefficients gives a prime value $f(n)$ for every positive integer $n$."
   },
   "hint": {
    "ru": "Если $f(1)=p$, посмотрите на $f(1+kp)$.",
    "en": "If $f(1)=p$, look at $f(1+kp)$."
   },
   "sol": {
    "ru": "Пусть $f(1)=p$ — простое. Ключевое свойство многочленов с целыми коэффициентами: $a-b$ делит $f(a)-f(b)$. Возьмём $a=1+kp$, $b=1$: тогда $kp$ делит $f(1+kp)-p$, значит $p$ делит $f(1+kp)$. По условию $f(1+kp)$ простое, а делится на $p$, поэтому $f(1+kp)=\\pm p$ для всех $k$. Итак, многочлен $f$ принимает одно из двух значений бесконечно много раз, значит один из многочленов $f-p$ или $f+p$ имеет бесконечно много корней и потому тождественно равен нулю. Тогда $f$ постоянен — противоречие. $\\blacksquare$",
    "en": "Let $f(1)=p$ be prime. The key property of integer polynomials is that $a-b$ divides $f(a)-f(b)$. Take $a=1+kp$, $b=1$: then $kp$ divides $f(1+kp)-p$, so $p$ divides $f(1+kp)$. By hypothesis $f(1+kp)$ is prime and divisible by $p$, hence $f(1+kp)=\\pm p$ for every $k$. So $f$ takes one of two values infinitely often, which means one of $f-p$ or $f+p$ has infinitely many roots and is therefore identically zero. Then $f$ is constant — a contradiction. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что если $p$ и $p^2+8$ простые, то $p^3+4$ тоже простое.",
    "en": "Prove that if $p$ and $p^2+8$ are prime then $p^3+4$ is prime as well."
   },
   "hint": {
    "ru": "Сначала выясните, каким может быть $p$.",
    "en": "First work out what $p$ can be."
   },
   "sol": {
    "ru": "Пусть $p\\ne3$. Тогда $3\\nmid p$, значит $p^2$ даёт остаток $1$ по модулю $3$, и $p^2+8$ даёт остаток $1+8=9\\equiv0$ — делится на $3$ и больше $3$, то есть составное. Противоречие. Значит $p=3$. Проверяем: $p^2+8=17$ — простое ✓, и $p^3+4=27+4=31$ — простое ✓. $\\blacksquare$",
    "en": "Suppose $p\\ne3$. Then $3\\nmid p$, so $p^2$ leaves remainder $1$ modulo $3$ and $p^2+8$ leaves $1+8=9\\equiv0$ — divisible by $3$ and larger than $3$, hence composite. Contradiction. So $p=3$. Check: $p^2+8=17$ is prime ✓, and $p^3+4=27+4=31$ is prime ✓. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что при $n>1$ число $n^4+n^2+1$ составное.",
    "en": "Prove that $n^4+n^2+1$ is composite for every integer $n>1$."
   },
   "hint": {
    "ru": "Добавьте и вычтите $n^2$, чтобы получить разность квадратов.",
    "en": "Add and subtract $n^2$ to make a difference of squares."
   },
   "sol": {
    "ru": "$$n^4+n^2+1=n^4+2n^2+1-n^2=(n^2+1)^2-n^2=(n^2-n+1)(n^2+n+1).$$ При $n>1$ имеем $n^2-n+1=n(n-1)+1\\ge3$, а $n^2+n+1>n^2-n+1$, значит оба множителя больше $1$ — число составное. $\\blacksquare$ (При $n=1$ получается $3$ — простое.)",
    "en": "$$n^4+n^2+1=n^4+2n^2+1-n^2=(n^2+1)^2-n^2=(n^2-n+1)(n^2+n+1).$$ For $n>1$ we have $n^2-n+1=n(n-1)+1\\ge3$, and $n^2+n+1>n^2-n+1$, so both factors exceed $1$ and the number is composite. $\\blacksquare$ (For $n=1$ it equals $3$, which is prime.)"
   }
  }
 ]
};
