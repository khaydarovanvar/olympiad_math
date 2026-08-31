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
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Простое ли число $221$?",
    "en": "Is $221$ prime?"
   },
   "hint": {
    "ru": "Достаточно проверить простые делители до $\\sqrt{221}<15$.",
    "en": "It is enough to test prime divisors up to $\\sqrt{221}<15$."
   },
   "sol": {
    "ru": "Если $221=ab$ с $1<a\\le b$, то $a\\le\\sqrt{221}$, а $\\sqrt{221}<15$ (потому что $15^{2}=225>221$). Значит хватит перебрать простые $2,3,5,7,11,13$.\n\n$221$ нечётно, сумма цифр $5$ не делится на $3$, оканчивается не на $0$ и не на $5$; $221=7\\cdot31+4$; $221=11\\cdot20+1$; наконец $$221=13\\cdot17 .$$\n\n**Ответ:** нет, $221=13\\cdot17$ — составное.",
    "en": "If $221=ab$ with $1<a\\le b$ then $a\\le\\sqrt{221}$, and $\\sqrt{221}<15$ (since $15^{2}=225>221$). So it suffices to test $2,3,5,7,11,13$.\n\n$221$ is odd, its digit sum $5$ is not a multiple of $3$, it ends in neither $0$ nor $5$; $221=7\\cdot31+4$; $221=11\\cdot20+1$; and finally $$221=13\\cdot17 .$$\n\n**Answer:** no, $221=13\\cdot17$ is composite."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Найдите все простые $p$, для которых число $p+1$ тоже простое.",
    "en": "Find all primes $p$ for which $p+1$ is also prime."
   },
   "hint": {
    "ru": "Из двух соседних чисел одно чётно.",
    "en": "One of two consecutive integers is even."
   },
   "sol": {
    "ru": "Числа $p$ и $p+1$ соседние, значит одно из них чётно. Единственное чётное простое — это $2$.\n\nЕсли чётно $p$, то $p=2$ и $p+1=3$ — оба простые ✓\n\nЕсли чётно $p+1$, то $p+1=2$, откуда $p=1$ — не простое ✗\n\n**Ответ:** $p=2$.",
    "en": "The numbers $p$ and $p+1$ are consecutive, so one of them is even, and the only even prime is $2$.\n\nIf $p$ is the even one, then $p=2$ and $p+1=3$ — both prime ✓\n\nIf $p+1$ is the even one, then $p+1=2$, so $p=1$, which is not prime ✗\n\n**Answer:** $p=2$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Сколько простых чисел не превосходит $30$?",
    "en": "How many primes are there up to $30$?"
   },
   "hint": {
    "ru": "Выпишите их решетом Эратосфена.",
    "en": "List them with the sieve of Eratosthenes."
   },
   "sol": {
    "ru": "Вычеркнем из $2,3,\\dots,30$ кратные $2$, затем кратные $3$ и $5$ (проверять больше нечего: $7^{2}=49>30$). Остаются $$2,\\;3,\\;5,\\;7,\\;11,\\;13,\\;17,\\;19,\\;23,\\;29 .$$\n\nПересчитаем: их ровно десять.\n\n**Ответ:** $10$.",
    "en": "Cross out of $2,3,\\dots,30$ the multiples of $2$, then of $3$ and of $5$ (nothing further is needed, since $7^{2}=49>30$). What survives is $$2,\\;3,\\;5,\\;7,\\;11,\\;13,\\;17,\\;19,\\;23,\\;29 .$$\n\nCounting them: exactly ten.\n\n**Answer:** $10$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Разложите $2024$ на простые множители.",
    "en": "Write $2024$ as a product of primes."
   },
   "hint": {
    "ru": "Делите на $2$, пока делится.",
    "en": "Divide by $2$ as long as you can."
   },
   "sol": {
    "ru": "$$2024=2\\cdot1012=2\\cdot2\\cdot506=2\\cdot2\\cdot2\\cdot253 .$$\n\nОсталось разложить $253$. Оно нечётно, сумма цифр $10$ не кратна $3$, на $5$ и $7$ не делится, а $$253=11\\cdot23 ,$$ и оба множителя простые.\n\n**Ответ:** $2024=2^{3}\\cdot11\\cdot23$.",
    "en": "$$2024=2\\cdot1012=2\\cdot2\\cdot506=2\\cdot2\\cdot2\\cdot253 .$$\n\nIt remains to factor $253$. It is odd, its digit sum $10$ is not a multiple of $3$, it is divisible by neither $5$ nor $7$, and $$253=11\\cdot23 ,$$ where both factors are prime.\n\n**Answer:** $2024=2^{3}\\cdot11\\cdot23$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что $91$ — составное число, не выполняя деления столбиком на все числа подряд.",
    "en": "Show that $91$ is composite without testing every divisor in turn."
   },
   "hint": {
    "ru": "$91=100-9$.",
    "en": "$91=100-9$."
   },
   "sol": {
    "ru": "Заметим разность квадратов: $$91=100-9=10^{2}-3^{2}=(10-3)(10+3)=7\\cdot13 .$$\n\nОба множителя больше единицы, значит $91$ составное.\n\n**Ответ:** $91=7\\cdot13$.",
    "en": "Spot a difference of squares: $$91=100-9=10^{2}-3^{2}=(10-3)(10+3)=7\\cdot13 .$$\n\nBoth factors exceed one, so $91$ is composite.\n\n**Answer:** $91=7\\cdot13$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Выпишите все простые числа, лежащие между $90$ и $100$.",
    "en": "List all primes strictly between $90$ and $100$."
   },
   "hint": {
    "ru": "Чётные и кратные пяти отпадают сразу; для остальных хватит делителей до $9$.",
    "en": "Evens and multiples of five go at once; for the rest divisors up to $9$ suffice."
   },
   "sol": {
    "ru": "Кандидаты — нечётные числа $91,93,95,97,99$.\n\n$91=7\\cdot13$ ✗\n\n$93$: сумма цифр $12$ делится на $3$, значит $93=3\\cdot31$ ✗\n\n$95$ оканчивается на $5$, значит $95=5\\cdot19$ ✗\n\n$99$: сумма цифр $18$ делится на $3$, значит $99=9\\cdot11$ ✗\n\n$97$: проверяем $2,3,5,7$ (дальше не надо, ведь $10^{2}=100>97$) — ни одно не делит ✓\n\n**Ответ:** только $97$.",
    "en": "The candidates are the odd numbers $91,93,95,97,99$.\n\n$91=7\\cdot13$ ✗\n\n$93$: digit sum $12$ is a multiple of $3$, so $93=3\\cdot31$ ✗\n\n$95$ ends in $5$, so $95=5\\cdot19$ ✗\n\n$99$: digit sum $18$ is a multiple of $3$, so $99=9\\cdot11$ ✗\n\n$97$: test $2,3,5,7$ (no further, since $10^{2}=100>97$) — none divides it ✓\n\n**Answer:** only $97$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите все простые $p$, для которых число $p+7$ тоже простое.",
    "en": "Find all primes $p$ for which $p+7$ is also prime."
   },
   "hint": {
    "ru": "Числа $p$ и $p+7$ разной чётности.",
    "en": "The numbers $p$ and $p+7$ have opposite parities."
   },
   "sol": {
    "ru": "Прибавление нечётного числа $7$ меняет чётность, значит из $p$ и $p+7$ ровно одно чётно. Чётное простое единственно — это $2$.\n\n**Если $p=2$:** тогда $p+7=9=3^{2}$ — составное ✗\n\n**Если $p+7=2$:** тогда $p=-5$ — не натуральное ✗\n\nДругих вариантов нет.\n\n**Ответ:** таких простых не существует.",
    "en": "Adding the odd number $7$ flips parity, so exactly one of $p$ and $p+7$ is even, and the only even prime is $2$.\n\n**If $p=2$:** then $p+7=9=3^{2}$, composite ✗\n\n**If $p+7=2$:** then $p=-5$, not a positive integer ✗\n\nThere are no other options.\n\n**Answer:** no such prime exists."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите все простые $p$, для которых числа $2p+1$ и $4p+1$ тоже простые.",
    "en": "Find all primes $p$ for which $2p+1$ and $4p+1$ are both prime."
   },
   "hint": {
    "ru": "Разберите три случая: $p\\equiv0,1,2\\pmod 3$.",
    "en": "Split into the cases $p\\equiv0,1,2\\pmod 3$."
   },
   "sol": {
    "ru": "Разберём остаток $p$ по модулю $3$.\n\n**Случай $p\\equiv1$.** Тогда $2p+1\\equiv2+1=3\\equiv0\\pmod 3$, а $2p+1>3$, значит оно составное ✗\n\n**Случай $p\\equiv2$.** Тогда $4p+1\\equiv8+1=9\\equiv0\\pmod 3$, а $4p+1>3$, значит составное ✗\n\n**Случай $p\\equiv0$.** Тогда $3\\mid p$, а $p$ простое, поэтому $p=3$.\n\nПроверка: $2\\cdot3+1=7$ и $4\\cdot3+1=13$ — оба простые ✓\n\n**Ответ:** $p=3$.",
    "en": "Split according to $p$ modulo $3$.\n\n**Case $p\\equiv1$.** Then $2p+1\\equiv2+1=3\\equiv0\\pmod 3$ while $2p+1>3$, so it is composite ✗\n\n**Case $p\\equiv2$.** Then $4p+1\\equiv8+1=9\\equiv0\\pmod 3$ while $4p+1>3$, so it is composite ✗\n\n**Case $p\\equiv0$.** Then $3\\mid p$, and since $p$ is prime, $p=3$.\n\nCheck: $2\\cdot3+1=7$ and $4\\cdot3+1=13$ are both prime ✓\n\n**Answer:** $p=3$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите все простые $p$, для которых $p^{2}+2$ — простое.",
    "en": "Find all primes $p$ for which $p^{2}+2$ is prime."
   },
   "hint": {
    "ru": "Квадрат числа, не делящегося на $3$, даёт остаток $1$.",
    "en": "The square of a number not divisible by $3$ leaves remainder $1$."
   },
   "sol": {
    "ru": "Пусть $3\\nmid p$. Тогда $p\\equiv\\pm1\\pmod 3$, а значит $$p^{2}\\equiv1\\pmod 3\\quad\\Longrightarrow\\quad p^{2}+2\\equiv0\\pmod 3 .$$ При $p\\ge2$ число $p^{2}+2\\ge6>3$, поэтому оно составное ✗\n\nОстаётся $3\\mid p$, то есть $p=3$: тогда $p^{2}+2=11$ — простое ✓\n\n**Ответ:** $p=3$.",
    "en": "Suppose $3\\nmid p$. Then $p\\equiv\\pm1\\pmod 3$, hence $$p^{2}\\equiv1\\pmod 3\\quad\\Longrightarrow\\quad p^{2}+2\\equiv0\\pmod 3 .$$ For $p\\ge2$ we have $p^{2}+2\\ge6>3$, so it is composite ✗\n\nSo $3\\mid p$, i.e. $p=3$, and then $p^{2}+2=11$ is prime ✓\n\n**Answer:** $p=3$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Сумма двух простых чисел равна $2025$. Найдите все такие пары.",
    "en": "The sum of two primes equals $2025$. Find all such pairs."
   },
   "hint": {
    "ru": "Сумма нечётна, значит одно слагаемое чётно.",
    "en": "The sum is odd, so one summand is even."
   },
   "sol": {
    "ru": "Число $2025$ нечётно. Сумма двух нечётных чисел чётна, значит одно из слагаемых чётно, то есть равно $2$.\n\nТогда второе слагаемое равно $$2025-2=2023 .$$\n\nПростое ли $2023$? Проверим: $2023=7\\cdot289$, а $289=17^{2}$, то есть $$2023=7\\cdot17^{2} .$$ Это составное число ✗\n\n**Ответ:** таких пар не существует.",
    "en": "The number $2025$ is odd. A sum of two odd numbers is even, so one summand is even, i.e. equal to $2$.\n\nThe other summand is then $$2025-2=2023 .$$\n\nIs $2023$ prime? Check: $2023=7\\cdot289$ and $289=17^{2}$, so $$2023=7\\cdot17^{2} ,$$ which is composite ✗\n\n**Answer:** no such pair exists."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 2,
   "q": {
    "ru": "Пусть $p,q,r$ — простые числа, большие $3$. Докажите, что $p^{2}+q^{2}+r^{2}$ — составное число.",
    "en": "Let $p,q,r$ be primes greater than $3$. Prove that $p^{2}+q^{2}+r^{2}$ is composite."
   },
   "hint": {
    "ru": "Каждый квадрат даёт остаток $1$ по модулю $3$.",
    "en": "Each square leaves remainder $1$ modulo $3$."
   },
   "sol": {
    "ru": "Простое, большее $3$, не делится на $3$, поэтому $p\\equiv\\pm1\\pmod 3$ и $$p^{2}\\equiv1\\pmod 3 ;$$ то же верно для $q$ и $r$. Складывая, $$p^{2}+q^{2}+r^{2}\\equiv1+1+1=3\\equiv0\\pmod 3 .$$\n\nЗначит сумма делится на $3$. При этом она не меньше $5^{2}+5^{2}+5^{2}=75>3$, поэтому у неё есть делитель $3$, отличный от единицы и от самого числа — сумма составная. $\\blacksquare$\n\n**Проверка:** $5^{2}+7^{2}+11^{2}=25+49+121=195=3\\cdot65$ ✓",
    "en": "A prime greater than $3$ is not divisible by $3$, so $p\\equiv\\pm1\\pmod 3$ and $$p^{2}\\equiv1\\pmod 3 ;$$ likewise for $q$ and $r$. Adding, $$p^{2}+q^{2}+r^{2}\\equiv1+1+1=3\\equiv0\\pmod 3 .$$\n\nSo the sum is a multiple of $3$, while it is at least $5^{2}+5^{2}+5^{2}=75>3$. Hence $3$ is a divisor other than $1$ and the number itself: the sum is composite. $\\blacksquare$\n\n**Check:** $5^{2}+7^{2}+11^{2}=25+49+121=195=3\\cdot65$ ✓"
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Сколько делителей у числа $p^{2}q$, где $p$ и $q$ — различные простые?",
    "en": "How many divisors does $p^{2}q$ have, where $p$ and $q$ are distinct primes?"
   },
   "hint": {
    "ru": "Делитель имеет вид $p^{a}q^{b}$; сколько пар $(a,b)$?",
    "en": "A divisor looks like $p^{a}q^{b}$; how many pairs $(a,b)$?"
   },
   "sol": {
    "ru": "Каждый делитель числа $N=p^{2}q$ однозначно записывается как $$p^{a}q^{b},\\qquad 0\\le a\\le2,\\quad 0\\le b\\le1 .$$\n\nПоказатель $a$ выбирается тремя способами, показатель $b$ — двумя, и разным парам отвечают разные числа (по единственности разложения). Значит делителей $$3\\cdot2=6 .$$\n\n**Проверка** на $p=2$, $q=3$: у числа $12$ делители $1,2,3,4,6,12$ — ровно шесть ✓\n\n**Ответ:** $6$.",
    "en": "Every divisor of $N=p^{2}q$ is uniquely of the form $$p^{a}q^{b},\\qquad 0\\le a\\le2,\\quad 0\\le b\\le1 .$$\n\nThere are three choices for $a$ and two for $b$, and distinct pairs give distinct numbers (by uniqueness of factorisation). So the divisor count is $$3\\cdot2=6 .$$\n\n**Check** with $p=2$, $q=3$: the divisors of $12$ are $1,2,3,4,6,12$ — exactly six ✓\n\n**Answer:** $6$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что любое простое число $p>5$ оканчивается цифрой $1$, $3$, $7$ или $9$.",
    "en": "Prove that every prime $p>5$ ends in the digit $1$, $3$, $7$ or $9$."
   },
   "hint": {
    "ru": "Что означают остальные последние цифры?",
    "en": "What do the other final digits mean?"
   },
   "sol": {
    "ru": "Последняя цифра числа — это его остаток по модулю $10$; возможных цифр десять.\n\nЕсли последняя цифра $0,2,4,6$ или $8$, число чётно, а единственное чётное простое — $2<5$ ✗\n\nЕсли последняя цифра $0$ или $5$, число делится на $5$, а единственное такое простое — $5$ ✗\n\nОстаются цифры $$1,\\;3,\\;7,\\;9 . \\qquad\\blacksquare$$\n\n**Замечание.** Обратное неверно: $21$ и $27$ оканчиваются «правильно», но составные.",
    "en": "The last digit is the remainder modulo $10$; there are ten possibilities.\n\nIf the last digit is $0,2,4,6$ or $8$, the number is even, and the only even prime is $2<5$ ✗\n\nIf the last digit is $0$ or $5$, the number is divisible by $5$, and the only such prime is $5$ ✗\n\nWhat remains is $$1,\\;3,\\;7,\\;9 . \\qquad\\blacksquare$$\n\n**Remark.** The converse fails: $21$ and $27$ end \"correctly\" yet are composite."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите наименьшее простое число, большее $100$, и обоснуйте ответ.",
    "en": "Find the smallest prime greater than $100$, with proof."
   },
   "hint": {
    "ru": "Проверяйте $101,102,\\dots$; для $101$ хватит делителей до $10$.",
    "en": "Test $101,102,\\dots$; for $101$ divisors up to $10$ suffice."
   },
   "sol": {
    "ru": "Проверим $101$. Если $101=ab$ с $1<a\\le b$, то $a\\le\\sqrt{101}<11$, значит достаточно простых $2,3,5,7$.\n\n$101$ нечётно ✓; сумма цифр $2$ не делится на $3$ ✓; оканчивается не на $0$ и $5$ ✓; $101=7\\cdot14+3$ ✓\n\nНи один из кандидатов не подошёл, значит $101$ простое. Между $100$ и $101$ других целых нет.\n\n**Ответ:** $101$.",
    "en": "Test $101$. If $101=ab$ with $1<a\\le b$, then $a\\le\\sqrt{101}<11$, so the primes $2,3,5,7$ suffice.\n\n$101$ is odd ✓; its digit sum $2$ is not a multiple of $3$ ✓; it ends in neither $0$ nor $5$ ✓; $101=7\\cdot14+3$ ✓\n\nNo candidate divides it, so $101$ is prime, and there is no integer strictly between $100$ and $101$.\n\n**Answer:** $101$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите все тройки простых чисел $p,q,r$, для которых $p+q=r$.",
    "en": "Find all triples of primes $p,q,r$ with $p+q=r$."
   },
   "hint": {
    "ru": "Сумма двух нечётных чисел чётна.",
    "en": "The sum of two odd numbers is even."
   },
   "sol": {
    "ru": "Если $p$ и $q$ оба нечётны, то $r=p+q$ чётно и $r>2$, значит $r$ составное ✗\n\nЗначит одно из слагаемых равно $2$; пусть $q=2$. Тогда $$r=p+2 ,$$ и нужны простые-близнецы: пары $(p,p+2)$.\n\nНапример, $$3+2=5,\\qquad 5+2=7,\\qquad 11+2=13,\\qquad 17+2=19,\\ \\dots$$\n\n**Ответ:** ровно тройки вида $(p,2,p+2)$ и $(2,p,p+2)$, где $p$ и $p+2$ — простые-близнецы; например $(3,2,5)$, $(5,2,7)$, $(11,2,13)$.\n\n**Замечание.** Бесконечно ли таких пар — знаменитая нерешённая гипотеза о простых-близнецах.",
    "en": "If $p$ and $q$ are both odd then $r=p+q$ is even and $r>2$, so $r$ is composite ✗\n\nHence one summand equals $2$; say $q=2$. Then $$r=p+2 ,$$ so we need a twin prime pair $(p,p+2)$.\n\nFor example $$3+2=5,\\qquad 5+2=7,\\qquad 11+2=13,\\qquad 17+2=19,\\ \\dots$$\n\n**Answer:** exactly the triples $(p,2,p+2)$ and $(2,p,p+2)$ with $p$, $p+2$ twin primes; e.g. $(3,2,5)$, $(5,2,7)$, $(11,2,13)$.\n\n**Remark.** Whether there are infinitely many such pairs is the famous unsolved twin prime conjecture."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что число $n^{2}+n+1$ ни при каком целом $n$ не делится на $5$.",
    "en": "Prove that $n^{2}+n+1$ is never divisible by $5$, for any integer $n$."
   },
   "hint": {
    "ru": "Переберите пять остатков $n$ по модулю $5$.",
    "en": "Run through the five remainders of $n$ modulo $5$."
   },
   "sol": {
    "ru": "Остаток числа $n^{2}+n+1$ по модулю $5$ зависит только от остатка $n$. Переберём все пять:\n\n$n\\equiv0$: $\\ 0+0+1=1$;\n\n$n\\equiv1$: $\\ 1+1+1=3$;\n\n$n\\equiv2$: $\\ 4+2+1=7\\equiv2$;\n\n$n\\equiv3$: $\\ 9+3+1=13\\equiv3$;\n\n$n\\equiv4$: $\\ 16+4+1=21\\equiv1$.\n\nОстатки получились $1,3,2,3,1$ — нуля среди них нет. Значит $5\\nmid n^{2}+n+1$ ни при каком $n$. $\\blacksquare$",
    "en": "The residue of $n^{2}+n+1$ modulo $5$ depends only on the residue of $n$, so check all five:\n\n$n\\equiv0$: $\\ 0+0+1=1$;\n\n$n\\equiv1$: $\\ 1+1+1=3$;\n\n$n\\equiv2$: $\\ 4+2+1=7\\equiv2$;\n\n$n\\equiv3$: $\\ 9+3+1=13\\equiv3$;\n\n$n\\equiv4$: $\\ 16+4+1=21\\equiv1$.\n\nThe residues are $1,3,2,3,1$ — never $0$. Hence $5\\nmid n^{2}+n+1$ for every $n$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что простых чисел бесконечно много.",
    "en": "Prove that there are infinitely many primes."
   },
   "hint": {
    "ru": "Предположите, что их конечное число, и рассмотрите их произведение плюс единица.",
    "en": "Assume there are finitely many and look at their product plus one."
   },
   "sol": {
    "ru": "Предположим противное: простых конечное число, и это ровно $$p_1,\\;p_2,\\;\\dots,\\;p_k .$$\n\nРассмотрим $$N=p_1p_2\\cdots p_k+1 .$$ Число $N>1$, значит у него есть простой делитель $p$ (у любого числа, большего единицы, наименьший делитель, больший единицы, прост).\n\nПо предположению $p$ — одно из $p_i$, значит $p$ делит произведение $p_1p_2\\cdots p_k$. Но $p$ делит и $N$, поэтому $p$ делит разность $$N-p_1p_2\\cdots p_k=1 .$$ Простое число не может делить единицу ✗\n\nПротиворечие показывает, что простых бесконечно много. $\\blacksquare$\n\n**Замечание.** Доказательство не утверждает, что $N$ простое: например, $2\\cdot3\\cdot5\\cdot7\\cdot11\\cdot13+1=30031=59\\cdot509$. Важно лишь, что у $N$ есть простой делитель вне списка.",
    "en": "Suppose not: let the primes be exactly $$p_1,\\;p_2,\\;\\dots,\\;p_k .$$\n\nConsider $$N=p_1p_2\\cdots p_k+1 .$$ Since $N>1$, it has a prime divisor $p$ (the least divisor greater than one of any integer $>1$ is prime).\n\nBy assumption $p$ is one of the $p_i$, so $p$ divides the product $p_1p_2\\cdots p_k$. But $p$ also divides $N$, hence $p$ divides the difference $$N-p_1p_2\\cdots p_k=1 .$$ No prime divides $1$ ✗\n\nThe contradiction proves there are infinitely many primes. $\\blacksquare$\n\n**Remark.** The argument does not claim $N$ itself is prime: e.g. $2\\cdot3\\cdot5\\cdot7\\cdot11\\cdot13+1=30031=59\\cdot509$. All that matters is that $N$ has a prime factor outside the list."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что у всякого составного числа $n$ есть простой делитель, не превосходящий $\\sqrt{n}$.",
    "en": "Prove that every composite number $n$ has a prime divisor not exceeding $\\sqrt{n}$."
   },
   "hint": {
    "ru": "Возьмите наименьший делитель, больший единицы.",
    "en": "Take the least divisor greater than one."
   },
   "sol": {
    "ru": "Пусть $n$ составное и $p$ — его **наименьший** делитель, больший единицы.\n\n**Шаг 1: $p$ простое.** Если бы $p=ab$ с $1<a<p$, то $a$ был бы делителем $n$, большим единицы и меньшим $p$, — противоречие с минимальностью ✗\n\n**Шаг 2: $p\\le\\sqrt{n}$.** Запишем $n=p\\cdot m$. Так как $n$ составное, $m>1$, значит $m$ тоже делитель $n$, больший единицы, и по минимальности $$m\\ge p .$$ Отсюда $$n=pm\\ge p\\cdot p=p^{2}\\quad\\Longrightarrow\\quad p\\le\\sqrt{n} . \\qquad\\blacksquare$$\n\n**Как этим пользуются.** Чтобы проверить простоту числа $n$, достаточно перебрать простые делители до $\\sqrt{n}$: если ни один не подошёл, число простое. Например, для $n=211$ хватает $2,3,5,7,11,13$, потому что $14^{2}=196<211<225=15^{2}$.",
    "en": "Let $n$ be composite and let $p$ be its **least** divisor greater than one.\n\n**Step 1: $p$ is prime.** If $p=ab$ with $1<a<p$, then $a$ would be a divisor of $n$ greater than one and smaller than $p$, contradicting minimality ✗\n\n**Step 2: $p\\le\\sqrt{n}$.** Write $n=p\\cdot m$. Since $n$ is composite, $m>1$, so $m$ is also a divisor of $n$ greater than one, and minimality gives $$m\\ge p .$$ Hence $$n=pm\\ge p\\cdot p=p^{2}\\quad\\Longrightarrow\\quad p\\le\\sqrt{n} . \\qquad\\blacksquare$$\n\n**How it is used.** To test $n$ for primality it is enough to try prime divisors up to $\\sqrt{n}$: if none divides, the number is prime. For $n=211$, say, the primes $2,3,5,7,11,13$ suffice, because $14^{2}=196<211<225=15^{2}$."
   }
  },
  {
   "src": "Республиканский тур · уровень / Republic-round level",
   "lvl": 3,
   "q": {
    "ru": "Найдите все простые $p$, для которых число $p^{2}+11$ имеет ровно шесть делителей.",
    "en": "Find all primes $p$ for which $p^{2}+11$ has exactly six divisors."
   },
   "hint": {
    "ru": "Если $p>3$, то $p^{2}\\equiv1\\pmod{12}$.",
    "en": "If $p>3$ then $p^{2}\\equiv1\\pmod{12}$."
   },
   "sol": {
    "ru": "**Случай $p=2$.** Тогда $p^{2}+11=15=3\\cdot5$ — четыре делителя ✗\n\n**Случай $p=3$.** Тогда $p^{2}+11=20=2^{2}\\cdot5$, делителей $$(2+1)(1+1)=6 \\quad\\checkmark$$ (а именно $1,2,4,5,10,20$).\n\n**Случай $p>3$.** Тогда $p$ нечётно и не делится на $3$. Из нечётности $p=2k+1$ следует $$p^{2}-1=4k(k+1)\\ \\vdots\\ 8 ,$$ а из $3\\nmid p$ — что $3\\mid p^{2}-1$. Значит $24\\mid p^{2}-1$, и тем более $$12\\mid p^{2}-1\\quad\\Longrightarrow\\quad 12\\mid p^{2}+11 .$$\n\nПоложим $N=p^{2}+11\\ge5^{2}+11=36$. Число $N$ делится на $12$, поэтому среди его делителей есть $$1,\\;2,\\;3,\\;4,\\;6,\\;12,\\;N ,$$ и при $N>12$ это семь различных чисел — больше шести ✗\n\n**Ответ:** $p=3$.",
    "en": "**Case $p=2$.** Then $p^{2}+11=15=3\\cdot5$, which has four divisors ✗\n\n**Case $p=3$.** Then $p^{2}+11=20=2^{2}\\cdot5$, with $$(2+1)(1+1)=6 \\quad\\checkmark$$ divisors (namely $1,2,4,5,10,20$).\n\n**Case $p>3$.** Then $p$ is odd and not divisible by $3$. Oddness $p=2k+1$ gives $$p^{2}-1=4k(k+1)\\ \\text{divisible by}\\ 8 ,$$ and $3\\nmid p$ gives $3\\mid p^{2}-1$. Hence $24\\mid p^{2}-1$, and in particular $$12\\mid p^{2}-1\\quad\\Longrightarrow\\quad 12\\mid p^{2}+11 .$$\n\nPut $N=p^{2}+11\\ge5^{2}+11=36$. Since $12\\mid N$, among its divisors are $$1,\\;2,\\;3,\\;4,\\;6,\\;12,\\;N ,$$ which for $N>12$ are seven distinct numbers — more than six ✗\n\n**Answer:** $p=3$."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Найдите все простые $p$, для которых числа $p$, $p+10$ и $p+14$ одновременно простые.",
    "en": "Find all primes $p$ such that $p$, $p+10$ and $p+14$ are all prime."
   },
   "hint": {
    "ru": "$10\\equiv1$ и $14\\equiv2$ по модулю $3$.",
    "en": "$10\\equiv1$ and $14\\equiv2$ modulo $3$."
   },
   "sol": {
    "ru": "По модулю $3$ имеем $10\\equiv1$ и $14\\equiv2$, поэтому три числа дают остатки $$p,\\qquad p+1,\\qquad p+2 \\pmod 3,$$ то есть все три остатка $0,1,2$ в каком-то порядке. Значит одно из чисел делится на $3$.\n\nПростое, кратное $3$, равно $3$; так как $p$ наименьшее из трёх, получаем $p=3$ (иначе $p+10=3$ или $p+14=3$ — невозможно).\n\nПроверка: $3$, $13$, $17$ — все простые ✓\n\n**Ответ:** $p=3$.",
    "en": "Modulo $3$ we have $10\\equiv1$ and $14\\equiv2$, so the three numbers leave residues $$p,\\qquad p+1,\\qquad p+2 \\pmod 3,$$ i.e. $0,1,2$ in some order. So one of them is divisible by $3$.\n\nA prime multiple of $3$ equals $3$, and since $p$ is the smallest of the three we get $p=3$ (otherwise $p+10=3$ or $p+14=3$, impossible).\n\nCheck: $3$, $13$, $17$ are all prime ✓\n\n**Answer:** $p=3$."
   }
  },
  {
   "src": "Республиканский тур · уровень / Republic-round level",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что не существует простых $p,q,r$ с $p^{2}+q^{2}=r^{2}$.",
    "en": "Prove that there are no primes $p,q,r$ with $p^{2}+q^{2}=r^{2}$."
   },
   "hint": {
    "ru": "Разложите $r^{2}-q^{2}=(r-q)(r+q)=p^{2}$.",
    "en": "Factor $r^{2}-q^{2}=(r-q)(r+q)=p^{2}$."
   },
   "sol": {
    "ru": "Перепишем равенство как $$p^{2}=r^{2}-q^{2}=(r-q)(r+q),\\qquad 0<r-q<r+q .$$\n\nУ числа $p^{2}$ ровно три делителя: $1,\\ p,\\ p^{2}$. Значит для пары множителей есть только две возможности.\n\n**Возможность $r-q=p$, $r+q=p$.** Вычитая, получаем $2q=0$ ✗\n\n**Возможность $r-q=1$, $r+q=p^{2}$.** Складывая и вычитая: $$r=\\frac{p^{2}+1}{2},\\qquad q=\\frac{p^{2}-1}{2}=\\frac{(p-1)(p+1)}{2} .$$\n\nЕсли $p=2$, то $q=\\tfrac32$ — не целое ✗ Если $p$ нечётно и $p\\ge3$, то $$q=\\frac{p-1}{2}\\cdot(p+1),$$ где оба множителя целые, $p+1\\ge4$, а $\\tfrac{p-1}{2}\\ge1$. При $p=3$ получаем $q=1\\cdot4=4$ — не простое; при $p\\ge5$ оба множителя больше единицы, значит $q$ составное ✗\n\nВсе случаи отпали. $\\blacksquare$\n\n**Замечание.** В тройке $(3,4,5)$ катет $4$ не простой — и это не случайность, а следствие доказанного.",
    "en": "Rewrite the equation as $$p^{2}=r^{2}-q^{2}=(r-q)(r+q),\\qquad 0<r-q<r+q .$$\n\nThe number $p^{2}$ has exactly three divisors $1,\\ p,\\ p^{2}$, so there are only two possible splittings.\n\n**Case $r-q=p$, $r+q=p$.** Subtracting gives $2q=0$ ✗\n\n**Case $r-q=1$, $r+q=p^{2}$.** Adding and subtracting, $$r=\\frac{p^{2}+1}{2},\\qquad q=\\frac{p^{2}-1}{2}=\\frac{(p-1)(p+1)}{2} .$$\n\nIf $p=2$ then $q=\\tfrac32$ is not an integer ✗ If $p$ is odd, $p\\ge3$, then $$q=\\frac{p-1}{2}\\cdot(p+1),$$ with both factors integers, $p+1\\ge4$ and $\\tfrac{p-1}{2}\\ge1$. For $p=3$ this gives $q=1\\cdot4=4$, not prime; for $p\\ge5$ both factors exceed one, so $q$ is composite ✗\n\nEvery case fails. $\\blacksquare$\n\n**Remark.** In the triple $(3,4,5)$ the leg $4$ is not prime — no accident, but a consequence of what we just proved."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что каждое простое $p>2$ представимо в виде разности двух квадратов натуральных чисел ровно одним способом.",
    "en": "Prove that every prime $p>2$ is a difference of two squares of positive integers in exactly one way."
   },
   "hint": {
    "ru": "$a^{2}-b^{2}=(a-b)(a+b)$, а у $p$ всего два делителя.",
    "en": "$a^{2}-b^{2}=(a-b)(a+b)$, and $p$ has only two divisors."
   },
   "sol": {
    "ru": "Пусть $p=a^{2}-b^{2}=(a-b)(a+b)$ с целыми $a>b\\ge0$. Тогда $a-b$ и $a+b$ — натуральные делители простого $p$, причём $a-b<a+b$. Значит $$a-b=1,\\qquad a+b=p .$$\n\nСкладывая и вычитая, получаем **единственное** решение $$a=\\frac{p+1}{2},\\qquad b=\\frac{p-1}{2},$$ и оба числа целые, так как $p$ нечётно; при $p>2$ имеем $b\\ge1$.\n\nОбратно, эта пара действительно подходит: $$\\left(\\frac{p+1}{2}\\right)^{2}-\\left(\\frac{p-1}{2}\\right)^{2}=\\frac{(p+1)^{2}-(p-1)^{2}}{4}=\\frac{4p}{4}=p . \\qquad\\blacksquare$$\n\n**Пример.** $17=9^{2}-8^{2}=81-64$ ✓",
    "en": "Let $p=a^{2}-b^{2}=(a-b)(a+b)$ with integers $a>b\\ge0$. Then $a-b$ and $a+b$ are positive divisors of the prime $p$, and $a-b<a+b$. Hence $$a-b=1,\\qquad a+b=p .$$\n\nAdding and subtracting gives the **unique** solution $$a=\\frac{p+1}{2},\\qquad b=\\frac{p-1}{2},$$ both integers because $p$ is odd, and $b\\ge1$ since $p>2$.\n\nConversely this pair does work: $$\\left(\\frac{p+1}{2}\\right)^{2}-\\left(\\frac{p-1}{2}\\right)^{2}=\\frac{(p+1)^{2}-(p-1)^{2}}{4}=\\frac{4p}{4}=p . \\qquad\\blacksquare$$\n\n**Example.** $17=9^{2}-8^{2}=81-64$ ✓"
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Найдите все пары простых чисел $(p,q)$, для которых $p+q=pq-3$.",
    "en": "Find all pairs of primes $(p,q)$ with $p+q=pq-3$."
   },
   "hint": {
    "ru": "Перенесите всё влево и разложите: $(p-1)(q-1)$.",
    "en": "Move everything to one side and factor: $(p-1)(q-1)$."
   },
   "sol": {
    "ru": "Перепишем условие: $$pq-p-q=3 .$$ Прибавим к обеим частям единицу и разложим левую часть (приём Симона): $$pq-p-q+1=4\\quad\\Longleftrightarrow\\quad (p-1)(q-1)=4 .$$\n\nЧисла $p-1$ и $q-1$ — целые и неотрицательные, их произведение равно $4$, поэтому $$(p-1,\\,q-1)\\in\\{(1,4),\\;(2,2),\\;(4,1)\\} .$$\n\nОтсюда $$(p,q)\\in\\{(2,5),\\;(3,3),\\;(5,2)\\} ,$$ и во всех трёх случаях оба числа простые ✓\n\n**Проверка** для $(2,5)$: $2+5=7$ и $2\\cdot5-3=7$ ✓ Для $(3,3)$: $3+3=6$ и $9-3=6$ ✓\n\n**Ответ:** $(2,5)$, $(5,2)$ и $(3,3)$.",
    "en": "Rewrite the condition as $$pq-p-q=3 .$$ Add one to both sides and factor the left (Simon’s trick): $$pq-p-q+1=4\\quad\\Longleftrightarrow\\quad (p-1)(q-1)=4 .$$\n\nThe numbers $p-1$ and $q-1$ are non-negative integers with product $4$, so $$(p-1,\\,q-1)\\in\\{(1,4),\\;(2,2),\\;(4,1)\\} .$$\n\nHence $$(p,q)\\in\\{(2,5),\\;(3,3),\\;(5,2)\\} ,$$ and in all three cases both numbers are prime ✓\n\n**Check** for $(2,5)$: $2+5=7$ and $2\\cdot5-3=7$ ✓ For $(3,3)$: $3+3=6$ and $9-3=6$ ✓\n\n**Answer:** $(2,5)$, $(5,2)$ and $(3,3)$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите лемму Евклида: если простое $p$ делит произведение $ab$, то $p$ делит $a$ или $p$ делит $b$.",
    "en": "Prove Euclid's lemma: if a prime $p$ divides a product $ab$, then $p$ divides $a$ or $p$ divides $b$."
   },
   "hint": {
    "ru": "Если $p\\nmid a$, то $\\gcd(p,a)=1$; примените соотношение Безу.",
    "en": "If $p\\nmid a$ then $\\gcd(p,a)=1$; use Bézout."
   },
   "sol": {
    "ru": "Пусть $p\\mid ab$ и $p\\nmid a$; докажем, что $p\\mid b$.\n\nДелители простого $p$ — только $1$ и $p$, поэтому $\\gcd(p,a)$ равен $1$ или $p$. Второе означало бы $p\\mid a$, что исключено, значит $$\\gcd(p,a)=1 .$$\n\nПо соотношению Безу найдутся целые $u,v$ с $$up+va=1 .$$ Умножим на $b$: $$upb+v\\,ab=b .$$\n\nПервое слагаемое делится на $p$ очевидно, второе — потому что $p\\mid ab$. Значит $p$ делит их сумму, то есть $p\\mid b$. $\\blacksquare$\n\n**Замечание.** Простота существенна: $6\\mid 4\\cdot9$, но $6\\nmid4$ и $6\\nmid9$.",
    "en": "Assume $p\\mid ab$ and $p\\nmid a$; we show $p\\mid b$.\n\nThe only divisors of the prime $p$ are $1$ and $p$, so $\\gcd(p,a)$ is $1$ or $p$. The latter would mean $p\\mid a$, which is excluded, hence $$\\gcd(p,a)=1 .$$\n\nBy Bézout there are integers $u,v$ with $$up+va=1 .$$ Multiply by $b$: $$upb+v\\,ab=b .$$\n\nThe first term is visibly a multiple of $p$; the second is one because $p\\mid ab$. So $p$ divides their sum, i.e. $p\\mid b$. $\\blacksquare$\n\n**Remark.** Primality matters: $6\\mid 4\\cdot9$ yet $6\\nmid4$ and $6\\nmid9$."
   }
  },
  {
   "src": "Республиканский тур · уровень / Republic-round level",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что если $n>4$ составное, то $n$ делит $(n-1)!$.",
    "en": "Prove that if $n>4$ is composite then $n$ divides $(n-1)!$."
   },
   "hint": {
    "ru": "Разберите отдельно случай $n=p^{2}$.",
    "en": "Treat the case $n=p^{2}$ separately."
   },
   "sol": {
    "ru": "Пусть $n=ab$, где $1<a\\le b<n$.\n\n**Случай $a<b$.** Тогда $a$ и $b$ — два **различных** множителя среди $1,2,\\dots,n-1$, поэтому произведение $ab=n$ входит в $(n-1)!$ целиком: $$(n-1)!=\\dots\\cdot a\\cdot\\dots\\cdot b\\cdot\\dots\\ \\vdots\\ ab=n .$$\n\n**Случай $a=b$,** то есть $n=a^{2}$. Тогда $a\\ge3$ (ведь $n>4$), и числа $$a\\quad\\text{и}\\quad 2a$$ различны, оба лежат между $1$ и $n-1$, потому что $$2a<a\\cdot a=n .$$ Значит $(n-1)!$ делится на $a\\cdot2a=2a^{2}=2n$, и тем более на $n$. $\\blacksquare$\n\n**Проверка** при $n=9$: $8!=40320=9\\cdot4480$ ✓ **Исключение** $n=4$: $3!=6$ не делится на $4$ — именно поэтому в условии $n>4$.",
    "en": "Write $n=ab$ with $1<a\\le b<n$.\n\n**Case $a<b$.** Then $a$ and $b$ are two **distinct** factors among $1,2,\\dots,n-1$, so the whole product $ab=n$ sits inside $(n-1)!$: $$(n-1)!=\\dots\\cdot a\\cdot\\dots\\cdot b\\cdot\\dots\\ \\text{is divisible by}\\ ab=n .$$\n\n**Case $a=b$,** i.e. $n=a^{2}$. Then $a\\ge3$ (because $n>4$), and the numbers $$a\\quad\\text{and}\\quad 2a$$ are distinct and both lie between $1$ and $n-1$, since $$2a<a\\cdot a=n .$$ Hence $(n-1)!$ is divisible by $a\\cdot2a=2a^{2}=2n$, and a fortiori by $n$. $\\blacksquare$\n\n**Check** at $n=9$: $8!=40320=9\\cdot4480$ ✓ **The exception** $n=4$: $3!=6$ is not divisible by $4$ — which is why the statement asks for $n>4$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что простых чисел вида $6k+5$ бесконечно много.",
    "en": "Prove that there are infinitely many primes of the form $6k+5$."
   },
   "hint": {
    "ru": "Рассмотрите $N=6p_1p_2\\cdots p_k-1$ и подумайте, каких видов бывают его простые делители.",
    "en": "Consider $N=6p_1p_2\\cdots p_k-1$ and ask what forms its prime divisors can take."
   },
   "sol": {
    "ru": "Сначала заметим: **произведение чисел вида $6k+1$ снова имеет вид $6k+1$**, ведь $$(6a+1)(6b+1)=6(6ab+a+b)+1 .$$\n\nПредположим, что простых вида $6k+5$ конечное число: $p_1=5,\\ p_2,\\ \\dots,\\ p_k$. Рассмотрим $$N=6p_1p_2\\cdots p_k-1 .$$ Тогда $N\\equiv-1\\equiv5\\pmod 6$, и в частности $N$ нечётно и не делится на $3$.\n\nВсе простые делители $N$ поэтому тоже не равны $2$ и $3$, а любое простое, отличное от $2$ и $3$, имеет вид $6k+1$ или $6k+5$. Если бы все делители были вида $6k+1$, то по замечанию выше и само $N$ было бы вида $6k+1$ ✗ Значит у $N$ есть простой делитель $q$ вида $6k+5$.\n\nПо предположению $q$ — одно из $p_i$, но тогда $q$ делит и $6p_1\\cdots p_k$, и $N$, а значит делит их разность $$6p_1\\cdots p_k-N=1 ,$$ что невозможно ✗\n\nПротиворечие. $\\blacksquare$",
    "en": "First note that **a product of numbers of the form $6k+1$ is again of that form**, since $$(6a+1)(6b+1)=6(6ab+a+b)+1 .$$\n\nSuppose the primes of the form $6k+5$ were finitely many: $p_1=5,\\ p_2,\\ \\dots,\\ p_k$. Consider $$N=6p_1p_2\\cdots p_k-1 .$$ Then $N\\equiv-1\\equiv5\\pmod 6$; in particular $N$ is odd and not divisible by $3$.\n\nSo none of its prime divisors is $2$ or $3$, and every prime other than $2,3$ has the form $6k+1$ or $6k+5$. If all divisors were of the form $6k+1$, then by the remark $N$ itself would be $\\equiv1\\pmod6$ ✗ So $N$ has a prime divisor $q\\equiv5\\pmod 6$.\n\nBy assumption $q$ is one of the $p_i$; but then $q$ divides both $6p_1\\cdots p_k$ and $N$, hence their difference $$6p_1\\cdots p_k-N=1 ,$$ which is impossible ✗\n\nContradiction. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что для простого $p$ и любого $k$ с $0<k<p$ биномиальный коэффициент $\\binom{p}{k}$ делится на $p$.",
    "en": "Prove that for a prime $p$ and any $k$ with $0<k<p$ the binomial coefficient $\\binom{p}{k}$ is divisible by $p$."
   },
   "hint": {
    "ru": "Запишите $k!\\,(p-k)!\\binom{p}{k}=p!$ и примените лемму Евклида.",
    "en": "Write $k!\\,(p-k)!\\binom{p}{k}=p!$ and apply Euclid's lemma."
   },
   "sol": {
    "ru": "По определению $$\\binom{p}{k}=\\frac{p!}{k!\\,(p-k)!},\\qquad\\text{то есть}\\qquad k!\\,(p-k)!\\cdot\\binom{p}{k}=p! .$$\n\nПравая часть делится на $p$. Посмотрим на левую: числа $1,2,\\dots,k$ и $1,2,\\dots,p-k$ все строго меньше $p$, значит $p$ не делит ни одного из них. По лемме Евклида (применённой несколько раз) $p$ не делит произведение $k!\\,(p-k)!$.\n\nНо $p$ делит произведение $k!\\,(p-k)!\\cdot\\binom{p}{k}$, значит — снова по лемме Евклида — $$p\\ \\Big|\\ \\binom{p}{k} . \\qquad\\blacksquare$$\n\n**Следствие.** Раскрывая $(a+1)^{p}$ по биному, получаем $$(a+1)^{p}\\equiv a^{p}+1\\pmod p,$$ и индукцией по $a$ отсюда следует $a^{p}\\equiv a\\pmod p$ для всех целых $a\\ge0$.\n\n**Пример.** $p=5$: коэффициенты $\\binom{5}{1},\\dots,\\binom{5}{4}$ равны $5,10,10,5$ — все кратны пяти ✓",
    "en": "By definition $$\\binom{p}{k}=\\frac{p!}{k!\\,(p-k)!},\\qquad\\text{i.e.}\\qquad k!\\,(p-k)!\\cdot\\binom{p}{k}=p! .$$\n\nThe right-hand side is divisible by $p$. Look at the left: the numbers $1,2,\\dots,k$ and $1,2,\\dots,p-k$ are all strictly less than $p$, so $p$ divides none of them. By Euclid’s lemma (applied repeatedly) $p$ does not divide the product $k!\\,(p-k)!$.\n\nYet $p$ divides $k!\\,(p-k)!\\cdot\\binom{p}{k}$, so — by Euclid’s lemma again — $$p\\ \\Big|\\ \\binom{p}{k} . \\qquad\\blacksquare$$\n\n**Corollary.** Expanding $(a+1)^{p}$ by the binomial theorem gives $$(a+1)^{p}\\equiv a^{p}+1\\pmod p,$$ and induction on $a$ yields $a^{p}\\equiv a\\pmod p$ for every integer $a\\ge0$.\n\n**Example.** $p=5$: the coefficients $\\binom{5}{1},\\dots,\\binom{5}{4}$ are $5,10,10,5$ — all multiples of five ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите малую теорему Ферма: если $p$ простое и $p\\nmid a$, то $a^{p-1}\\equiv1\\pmod p$.",
    "en": "Prove Fermat's little theorem: if $p$ is prime and $p\\nmid a$ then $a^{p-1}\\equiv1\\pmod p$."
   },
   "hint": {
    "ru": "Перемножьте все ненулевые остатки и все числа $a\\cdot1,a\\cdot2,\\dots$",
    "en": "Multiply together all nonzero residues, and also all of $a\\cdot1,a\\cdot2,\\dots$"
   },
   "sol": {
    "ru": "Рассмотрим ненулевые остатки $$1,\\;2,\\;\\dots,\\;p-1$$ и умножим каждый на $a$.\n\n**Шаг 1: числа $a\\cdot1,\\ a\\cdot2,\\ \\dots,\\ a(p-1)$ дают попарно разные ненулевые остатки.** Если $ai\\equiv aj\\pmod p$, то $p\\mid a(i-j)$; так как $p\\nmid a$, по лемме Евклида $p\\mid i-j$, а $|i-j|<p$, значит $i=j$. Ни один остаток не нулевой, потому что $p\\nmid a$ и $p\\nmid i$.\n\n**Шаг 2.** Значит эти $p-1$ чисел — те же остатки $1,2,\\dots,p-1$, лишь переставленные. Перемножим их все:\n\n$$a^{p-1}\\cdot(p-1)!\\;\\equiv\\;(p-1)!\\pmod p .$$\n\n**Шаг 3.** Число $(p-1)!$ не делится на $p$ (все множители меньше $p$), поэтому на него можно сократить: $$a^{p-1}\\equiv1\\pmod p . \\qquad\\blacksquare$$\n\n**Пример.** $p=7$, $a=3$: $3^{6}=729=7\\cdot104+1$ ✓",
    "en": "Consider the nonzero residues $$1,\\;2,\\;\\dots,\\;p-1$$ and multiply each by $a$.\n\n**Step 1: the numbers $a\\cdot1,\\ a\\cdot2,\\ \\dots,\\ a(p-1)$ leave pairwise distinct nonzero residues.** If $ai\\equiv aj\\pmod p$ then $p\\mid a(i-j)$; since $p\\nmid a$, Euclid’s lemma gives $p\\mid i-j$, and $|i-j|<p$ forces $i=j$. No residue is zero, because $p\\nmid a$ and $p\\nmid i$.\n\n**Step 2.** So these $p-1$ numbers are the residues $1,2,\\dots,p-1$ in some order. Multiplying them all:\n\n$$a^{p-1}\\cdot(p-1)!\\;\\equiv\\;(p-1)!\\pmod p .$$\n\n**Step 3.** Since $(p-1)!$ is not divisible by $p$ (all its factors are smaller than $p$), we may cancel it: $$a^{p-1}\\equiv1\\pmod p . \\qquad\\blacksquare$$\n\n**Example.** $p=7$, $a=3$: $3^{6}=729=7\\cdot104+1$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите теорему Вильсона: если $p$ простое, то $(p-1)!\\equiv-1\\pmod p$.",
    "en": "Prove Wilson's theorem: if $p$ is prime then $(p-1)!\\equiv-1\\pmod p$."
   },
   "hint": {
    "ru": "Разбейте множители на пары «число и обратное к нему»; кто остаётся без пары?",
    "en": "Pair each factor with its inverse; which factors are their own inverse?"
   },
   "sol": {
    "ru": "Для $p=2$ проверяем прямо: $1!=1\\equiv-1\\pmod 2$ ✓ Пусть далее $p$ нечётно.\n\n**Шаг 1: у каждого $a\\in\\{1,\\dots,p-1\\}$ есть единственное обратное.** Так как $\\gcd(a,p)=1$, по Безу найдутся $u,v$ с $ua+vp=1$, то есть $ua\\equiv1\\pmod p$; остаток числа $u$ и есть обратное. Оно единственно: если $u_1a\\equiv u_2a\\pmod p$, то $p\\mid a(u_1-u_2)$, и по лемме Евклида $u_1\\equiv u_2$.\n\n**Шаг 2: кто себе обратен?** Условие $a^{2}\\equiv1$ означает $p\\mid(a-1)(a+1)$, откуда по лемме Евклида $a\\equiv1$ или $a\\equiv-1$, то есть $$a=1\\quad\\text{или}\\quad a=p-1 .$$\n\n**Шаг 3.** Оставшиеся $p-3$ чисел разбиваются на $\\dfrac{p-3}{2}$ пар вида $\\{a,\\,a^{-1}\\}$ с $a\\ne a^{-1}$, и произведение в каждой паре равно $1$. Поэтому $$(p-1)!\\;\\equiv\\;1\\cdot(p-1)\\cdot1\\cdots1\\;\\equiv\\;p-1\\;\\equiv\\;-1\\pmod p . \\qquad\\blacksquare$$\n\n**Пример.** $p=5$: $4!=24=5\\cdot5-1\\equiv-1\\pmod 5$ ✓",
    "en": "For $p=2$ check directly: $1!=1\\equiv-1\\pmod 2$ ✓ From now on let $p$ be odd.\n\n**Step 1: every $a\\in\\{1,\\dots,p-1\\}$ has a unique inverse.** Since $\\gcd(a,p)=1$, Bézout gives $u,v$ with $ua+vp=1$, i.e. $ua\\equiv1\\pmod p$; the residue of $u$ is the inverse. It is unique: if $u_1a\\equiv u_2a\\pmod p$ then $p\\mid a(u_1-u_2)$, and Euclid’s lemma gives $u_1\\equiv u_2$.\n\n**Step 2: which numbers are their own inverse?** The condition $a^{2}\\equiv1$ means $p\\mid(a-1)(a+1)$, so by Euclid’s lemma $a\\equiv1$ or $a\\equiv-1$, i.e. $$a=1\\quad\\text{or}\\quad a=p-1 .$$\n\n**Step 3.** The remaining $p-3$ numbers split into $\\dfrac{p-3}{2}$ pairs $\\{a,\\,a^{-1}\\}$ with $a\\ne a^{-1}$, and each pair multiplies to $1$. Hence $$(p-1)!\\;\\equiv\\;1\\cdot(p-1)\\cdot1\\cdots1\\;\\equiv\\;p-1\\;\\equiv\\;-1\\pmod p . \\qquad\\blacksquare$$\n\n**Example.** $p=5$: $4!=24=5\\cdot5-1\\equiv-1\\pmod 5$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что если нечётное простое $p$ делит $n^{2}+1$ для некоторого целого $n$, то $p\\equiv1\\pmod 4$.",
    "en": "Prove that if an odd prime $p$ divides $n^{2}+1$ for some integer $n$, then $p\\equiv1\\pmod 4$."
   },
   "hint": {
    "ru": "Возведите сравнение $n^{2}\\equiv-1$ в степень $\\frac{p-1}{2}$ и примените малую теорему Ферма.",
    "en": "Raise $n^{2}\\equiv-1$ to the power $\\frac{p-1}{2}$ and use Fermat's little theorem."
   },
   "sol": {
    "ru": "Из $p\\mid n^{2}+1$ следует $$n^{2}\\equiv-1\\pmod p .$$ Заметим, что $p\\nmid n$ (иначе $p\\mid n^{2}$ и тогда $p\\mid1$).\n\nВозведём обе части в степень $\\dfrac{p-1}{2}$ (число целое, так как $p$ нечётно): $$n^{\\,p-1}=\\left(n^{2}\\right)^{\\frac{p-1}{2}}\\equiv(-1)^{\\frac{p-1}{2}}\\pmod p .$$\n\nПо малой теореме Ферма левая часть сравнима с $1$, значит $$(-1)^{\\frac{p-1}{2}}\\equiv1\\pmod p .$$\n\nЕсли бы $\\dfrac{p-1}{2}$ было нечётным, получилось бы $-1\\equiv1$, то есть $p\\mid2$ — невозможно для нечётного $p$. Значит $\\dfrac{p-1}{2}$ чётно, то есть $$p-1\\equiv0\\pmod 4\\quad\\Longleftrightarrow\\quad p\\equiv1\\pmod 4 . \\qquad\\blacksquare$$\n\n**Примеры.** $n=2$: $n^{2}+1=5\\equiv1\\pmod4$ ✓ $n=5$: $26=2\\cdot13$, и $13\\equiv1\\pmod4$ ✓\n\n**Следствие.** Простое $3$ никогда не делит $n^{2}+1$, потому что $3\\equiv3\\pmod4$.",
    "en": "From $p\\mid n^{2}+1$ we get $$n^{2}\\equiv-1\\pmod p ,$$ and note $p\\nmid n$ (otherwise $p\\mid n^{2}$ and then $p\\mid1$).\n\nRaise both sides to the power $\\dfrac{p-1}{2}$ (an integer, as $p$ is odd): $$n^{\\,p-1}=\\left(n^{2}\\right)^{\\frac{p-1}{2}}\\equiv(-1)^{\\frac{p-1}{2}}\\pmod p .$$\n\nBy Fermat’s little theorem the left side is $\\equiv1$, hence $$(-1)^{\\frac{p-1}{2}}\\equiv1\\pmod p .$$\n\nIf $\\dfrac{p-1}{2}$ were odd this would read $-1\\equiv1$, i.e. $p\\mid2$, impossible for an odd $p$. So $\\dfrac{p-1}{2}$ is even, that is $$p-1\\equiv0\\pmod 4\\quad\\Longleftrightarrow\\quad p\\equiv1\\pmod 4 . \\qquad\\blacksquare$$\n\n**Examples.** $n=2$: $n^{2}+1=5\\equiv1\\pmod4$ ✓ $n=5$: $26=2\\cdot13$ and $13\\equiv1\\pmod4$ ✓\n\n**Corollary.** The prime $3$ never divides $n^{2}+1$, because $3\\equiv3\\pmod4$."
   }
  }
 ]
};
