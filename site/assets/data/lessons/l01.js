/* Topic 1 — generated from content/lesson_01.py, do not edit by hand. */
window.LESSONS = window.LESSONS || {};
window.LESSONS[1] = {
 "n": 1,
 "cat": "nt",
 "title": {
  "ru": "Делимость, НОД и НОК",
  "en": "Divisibility, GCD and LCM"
 },
 "sub": {
  "ru": "Фундамент всей теории чисел: деление с остатком, признаки делимости и алгоритм Евклида.",
  "en": "The foundation of all number theory: division with remainder, divisibility rules and the Euclidean algorithm."
 },
 "goals": {
  "ru": [
   "Понимать определение делимости и уверенно пользоваться её свойствами.",
   "Применять деление с остатком и признаки делимости на $2,3,4,5,8,9,11$.",
   "Находить НОД алгоритмом Евклида и записывать его в виде $ax+by$.",
   "Пользоваться тождеством $\\gcd(a,b)\\cdot\\operatorname{lcm}(a,b)=ab$ и считать число делителей."
  ],
  "en": [
   "Understand the definition of divisibility and use its properties confidently.",
   "Apply division with remainder and the divisibility rules for $2,3,4,5,8,9,11$.",
   "Find a GCD by the Euclidean algorithm and write it as $ax+by$.",
   "Use the identity $\\gcd(a,b)\\cdot\\operatorname{lcm}(a,b)=ab$ and count divisors."
  ]
 },
 "sections": [
  {
   "h": {
    "ru": "Что такое делимость",
    "en": "What divisibility means"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Делимость — это не «деление без калькулятора», а утверждение о существовании целого числа. Всё, что будет дальше в теории чисел, опирается на это одно определение.",
      "en": "Divisibility is not \"division without a calculator\" — it is a statement that a certain integer exists. Everything that follows in number theory rests on this one definition."
     }
    },
    {
     "t": "def",
     "name": {
      "ru": "Делимость",
      "en": "Divisibility"
     },
     "text": {
      "ru": "Пусть $a$ и $b$ — целые числа, $a\\neq 0$. Говорят, что **$a$ делит $b$** (пишут $a\\mid b$), если существует целое $k$ такое, что $b=ak$. В этом случае $a$ называют **делителем** $b$, а $b$ — **кратным** $a$.",
      "en": "Let $a$ and $b$ be integers with $a\\neq 0$. We say **$a$ divides $b$** (written $a\\mid b$) if there is an integer $k$ with $b=ak$. Then $a$ is a **divisor** of $b$, and $b$ is a **multiple** of $a$."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Примеры: $3\\mid 12$, потому что $12=3\\cdot 4$; $7\\mid 0$, потому что $0=7\\cdot 0$; но $5\\nmid 17$. Обратите внимание: **ноль делится на всё** (кроме нуля), а на ноль не делится ничего.",
      "en": "Examples: $3\\mid 12$ because $12=3\\cdot 4$; $7\\mid 0$ because $0=7\\cdot 0$; but $5\\nmid 17$. Note that **zero is divisible by everything** (except zero), while nothing is divisible by zero."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Основные свойства",
      "en": "Basic properties"
     },
     "text": {
      "ru": "Для целых $a,b,c$: $\\;$ (1) если $a\\mid b$ и $a\\mid c$, то $a\\mid(b\\pm c)$; $\\;$ (2) если $a\\mid b$, то $a\\mid bc$ для любого целого $c$; $\\;$ (3) если $a\\mid b$ и $b\\mid c$, то $a\\mid c$; $\\;$ (4) если $a\\mid b$ и $b\\mid a$, то $a=\\pm b$.",
      "en": "For integers $a,b,c$: $\\;$ (1) if $a\\mid b$ and $a\\mid c$ then $a\\mid(b\\pm c)$; $\\;$ (2) if $a\\mid b$ then $a\\mid bc$ for every integer $c$; $\\;$ (3) if $a\\mid b$ and $b\\mid c$ then $a\\mid c$; $\\;$ (4) if $a\\mid b$ and $b\\mid a$ then $a=\\pm b$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "(1) По определению $b=ak$ и $c=am$. Тогда $b\\pm c=a(k\\pm m)$, а $k\\pm m$ — целое. $\\;$ (2) $bc=(ak)c=a(kc)$. $\\;$ (3) $b=ak$, $c=bm=(ak)m=a(km)$. $\\;$ (4) Из $b=ak$ и $a=bm$ получаем $a=akm$, значит $km=1$, и так как $k,m$ целые, $k=m=\\pm1$.",
      "en": "(1) By definition $b=ak$ and $c=am$. Then $b\\pm c=a(k\\pm m)$, and $k\\pm m$ is an integer. $\\;$ (2) $bc=(ak)c=a(kc)$. $\\;$ (3) $b=ak$ and $c=bm=(ak)m=a(km)$. $\\;$ (4) From $b=ak$ and $a=bm$ we get $a=akm$, so $km=1$, and since $k,m$ are integers, $k=m=\\pm1$."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Линейная комбинация — главный приём",
      "en": "Linear combinations — the key move"
     },
     "text": {
      "ru": "Свойства (1) и (2) вместе дают самое полезное утверждение всей темы: если $d\\mid a$ и $d\\mid b$, то $$d\\mid (ax+by)\\quad\\text{для любых целых } x,y.$$ Почти каждая олимпиадная задача на делимость решается так: из двух данных выражений составляют такую комбинацию, в которой неизвестное исчезает.",
      "en": "Properties (1) and (2) together give the single most useful fact in the topic: if $d\\mid a$ and $d\\mid b$ then $$d\\mid (ax+by)\\quad\\text{for all integers } x,y.$$ Almost every olympiad divisibility problem is solved this way: combine the two given expressions so that the unknown cancels."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Докажите, что если $d\\mid (5n+3)$ и $d\\mid (3n+2)$, то $d=\\pm1$.",
      "en": "Prove that if $d\\mid (5n+3)$ and $d\\mid (3n+2)$ then $d=\\pm1$."
     },
     "steps": {
      "ru": [
       "Подберём коэффициенты так, чтобы $n$ ушло: возьмём $3\\cdot(5n+3)-5\\cdot(3n+2)$.",
       "$3(5n+3)-5(3n+2)=15n+9-15n-10=-1$.",
       "По свойству линейной комбинации $d\\mid -1$, значит $d=\\pm1$."
      ],
      "en": [
       "Choose coefficients that kill $n$: take $3\\cdot(5n+3)-5\\cdot(3n+2)$.",
       "$3(5n+3)-5(3n+2)=15n+9-15n-10=-1$.",
       "By the linear-combination property $d\\mid -1$, so $d=\\pm1$."
      ]
     },
     "ans": {
      "ru": "$d=\\pm1$",
      "en": "$d=\\pm1$"
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Деление с остатком",
    "en": "Division with remainder"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Теорема о делении с остатком",
      "en": "The division algorithm"
     },
     "text": {
      "ru": "Для любых целых $a$ и $b>0$ существует **единственная** пара целых чисел $q$ (неполное частное) и $r$ (остаток), для которых $$a=bq+r,\\qquad 0\\le r<b.$$",
      "en": "For any integers $a$ and $b>0$ there is a **unique** pair of integers $q$ (the quotient) and $r$ (the remainder) with $$a=bq+r,\\qquad 0\\le r<b.$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "*Существование.* Возьмём наибольшее целое $q$, для которого $bq\\le a$ (такое есть, потому что кратные $b$ уходят в обе стороны бесконечно). Положим $r=a-bq\\ge 0$. Если бы $r\\ge b$, то $b(q+1)=bq+b\\le a$, что противоречит выбору $q$. Значит $r<b$. $\\;$ *Единственность.* Пусть $a=bq_1+r_1=bq_2+r_2$ с $0\\le r_1,r_2<b$. Тогда $b(q_1-q_2)=r_2-r_1$, причём $|r_2-r_1|<b$. Число, кратное $b$ и меньшее $b$ по модулю, равно нулю, поэтому $r_1=r_2$ и $q_1=q_2$.",
      "en": "*Existence.* Take the largest integer $q$ with $bq\\le a$ (it exists because the multiples of $b$ run off to infinity both ways). Put $r=a-bq\\ge 0$. If $r\\ge b$ then $b(q+1)=bq+b\\le a$, contradicting the choice of $q$. So $r<b$. $\\;$ *Uniqueness.* Suppose $a=bq_1+r_1=bq_2+r_2$ with $0\\le r_1,r_2<b$. Then $b(q_1-q_2)=r_2-r_1$ and $|r_2-r_1|<b$. A multiple of $b$ smaller than $b$ in absolute value must be zero, so $r_1=r_2$ and $q_1=q_2$."
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Остаток всегда **неотрицателен**. Например, $-17=5\\cdot(-4)+3$, то есть остаток равен $3$, а не $-2$. Эта мелочь ломает больше решений, чем любая другая в теме.",
      "en": "The remainder is always **non-negative**. For instance $-17=5\\cdot(-4)+3$, so the remainder is $3$, not $-2$. This small point wrecks more solutions than anything else in the topic."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Разбор по остаткам",
      "en": "Splitting into cases by remainder"
     },
     "text": {
      "ru": "Любое целое $n$ можно записать как $n=3k$, $n=3k+1$ или $n=3k+2$. Три случая — и утверждение проверяется в каждом. Это самый простой способ доказать делимость, когда никакая хитрость не приходит в голову.",
      "en": "Every integer $n$ can be written as $n=3k$, $n=3k+1$ or $n=3k+2$. Three cases, and the claim is checked in each. This is the simplest way to prove a divisibility statement when no clever trick presents itself."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Докажите, что $n^2$ при делении на $4$ даёт остаток $0$ или $1$.",
      "en": "Prove that $n^2$ leaves remainder $0$ or $1$ on division by $4$."
     },
     "steps": {
      "ru": [
       "Если $n=2k$, то $n^2=4k^2$ — остаток $0$.",
       "Если $n=2k+1$, то $n^2=4k^2+4k+1=4(k^2+k)+1$ — остаток $1$.",
       "Других случаев нет, значит остаток всегда $0$ или $1$."
      ],
      "en": [
       "If $n=2k$ then $n^2=4k^2$ — remainder $0$.",
       "If $n=2k+1$ then $n^2=4k^2+4k+1=4(k^2+k)+1$ — remainder $1$.",
       "There are no other cases, so the remainder is always $0$ or $1$."
      ]
     },
     "ans": {
      "ru": "Остаток $\\in\\{0,1\\}$",
      "en": "The remainder is $0$ or $1$"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Это крошечное наблюдение — рабочий инструмент. Сумма двух квадратов даёт по модулю $4$ остатки $0,1,2$, но никогда $3$: поэтому, например, $n^2+m^2=2023$ решений не имеет ($2023=4\\cdot505+3$).",
      "en": "That tiny observation is a working tool. A sum of two squares leaves remainder $0,1$ or $2$ modulo $4$, never $3$: so, for example, $n^2+m^2=2023$ has no solutions, since $2023=4\\cdot505+3$."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Признаки делимости",
    "en": "Divisibility rules"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Пусть $N=\\overline{a_k a_{k-1}\\ldots a_1 a_0}$ — десятичная запись, то есть $N=a_k10^k+\\cdots+a_1\\cdot10+a_0$. Обозначим через $S(N)=a_k+\\cdots+a_0$ сумму цифр.",
      "en": "Let $N=\\overline{a_k a_{k-1}\\ldots a_1 a_0}$ be the decimal form, that is $N=a_k10^k+\\cdots+a_1\\cdot10+a_0$. Write $S(N)=a_k+\\cdots+a_0$ for the digit sum."
     }
    },
    {
     "t": "table",
     "head": {
      "ru": [
       "Делитель",
       "Признак",
       "Пример"
      ],
      "en": [
       "Divisor",
       "Rule",
       "Example"
      ]
     },
     "rows": {
      "ru": [
       [
        "$2$",
        "последняя цифра чётна",
        "$346$ ✓, $579$ ✗"
       ],
       [
        "$4$",
        "число из двух последних цифр делится на $4$",
        "$1332\\to32$ ✓"
       ],
       [
        "$8$",
        "число из трёх последних цифр делится на $8$",
        "$5312\\to312=8\\cdot39$ ✓"
       ],
       [
        "$5$",
        "последняя цифра $0$ или $5$",
        "$720$ ✓"
       ],
       [
        "$3$",
        "$3\\mid S(N)$",
        "$2025\\to 9$ ✓"
       ],
       [
        "$9$",
        "$9\\mid S(N)$",
        "$2025\\to 9$ ✓"
       ],
       [
        "$11$",
        "$11$ делит знакочередующуюся сумму цифр",
        "$1001\\to1-0+0-1=0$ ✓"
       ],
       [
        "$6$",
        "делится на $2$ и на $3$",
        "$114$ ✓"
       ]
      ],
      "en": [
       [
        "$2$",
        "the last digit is even",
        "$346$ ✓, $579$ ✗"
       ],
       [
        "$4$",
        "the last two digits form a multiple of $4$",
        "$1332\\to32$ ✓"
       ],
       [
        "$8$",
        "the last three digits form a multiple of $8$",
        "$5312\\to312=8\\cdot39$ ✓"
       ],
       [
        "$5$",
        "the last digit is $0$ or $5$",
        "$720$ ✓"
       ],
       [
        "$3$",
        "$3\\mid S(N)$",
        "$2025\\to 9$ ✓"
       ],
       [
        "$9$",
        "$9\\mid S(N)$",
        "$2025\\to 9$ ✓"
       ],
       [
        "$11$",
        "$11$ divides the alternating digit sum",
        "$1001\\to1-0+0-1=0$ ✓"
       ],
       [
        "$6$",
        "divisible by both $2$ and $3$",
        "$114$ ✓"
       ]
      ]
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Признак делимости на 9 (и на 3)",
      "en": "The rule for 9 (and for 3)"
     },
     "text": {
      "ru": "$9\\mid N$ тогда и только тогда, когда $9\\mid S(N)$. То же самое верно для $3$.",
      "en": "$9\\mid N$ if and only if $9\\mid S(N)$. The same holds for $3$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Заметим, что $10^j-1=\\underbrace{99\\ldots9}_{j}=9\\cdot\\underbrace{11\\ldots1}_{j}$ делится на $9$ при любом $j\\ge1$. Тогда $$N-S(N)=\\sum_{j\\ge1} a_j\\left(10^{j}-1\\right),$$ и каждое слагаемое справа делится на $9$. Значит $9\\mid N-S(N)$, и потому $9\\mid N$ равносильно $9\\mid S(N)$. Для $3$ рассуждение то же, так как $3\\mid 10^j-1$.",
      "en": "Observe that $10^j-1=\\underbrace{99\\ldots9}_{j}=9\\cdot\\underbrace{11\\ldots1}_{j}$ is divisible by $9$ for every $j\\ge1$. Then $$N-S(N)=\\sum_{j\\ge1} a_j\\left(10^{j}-1\\right),$$ and every term on the right is divisible by $9$. So $9\\mid N-S(N)$, and therefore $9\\mid N$ is equivalent to $9\\mid S(N)$. For $3$ the argument is identical, since $3\\mid 10^j-1$."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Признак делимости на 11",
      "en": "The rule for 11"
     },
     "text": {
      "ru": "$11\\mid N$ тогда и только тогда, когда $11$ делит $A(N)=a_0-a_1+a_2-\\cdots$",
      "en": "$11\\mid N$ if and only if $11$ divides $A(N)=a_0-a_1+a_2-\\cdots$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Воспользуемся тождеством $x^j-y^j=(x-y)\\left(x^{j-1}+x^{j-2}y+\\cdots+y^{j-1}\\right)$, из которого следует, что $x-y$ всегда делит $x^j-y^j$. Возьмём $x=10$, $y=-1$: тогда $x-y=11$ делит $10^{j}-(-1)^{j}$. Поэтому $$N-A(N)=\\sum_{j\\ge0}a_j\\left(10^{j}-(-1)^{j}\\right)$$ делится на $11$, откуда и следует утверждение.",
      "en": "Use the identity $x^j-y^j=(x-y)\\left(x^{j-1}+x^{j-2}y+\\cdots+y^{j-1}\\right)$, which shows that $x-y$ always divides $x^j-y^j$. Take $x=10$, $y=-1$: then $x-y=11$ divides $10^{j}-(-1)^{j}$. Hence $$N-A(N)=\\sum_{j\\ge0}a_j\\left(10^{j}-(-1)^{j}\\right)$$ is divisible by $11$, and the claim follows."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Тот же приём даёт признак для $7$, $11$ и $13$ сразу: $1001=7\\cdot11\\cdot13$, поэтому число делится на $7$, $11$ или $13$ тогда же, когда и знакочередующаяся сумма его трёхзначных групп справа налево.",
      "en": "The same idea gives a rule for $7$, $11$ and $13$ at once: $1001=7\\cdot11\\cdot13$, so a number is divisible by $7$, $11$ or $13$ exactly when the alternating sum of its three-digit groups, taken from the right, is."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "НОД и алгоритм Евклида",
    "en": "GCD and the Euclidean algorithm"
   },
   "blocks": [
    {
     "t": "def",
     "name": {
      "ru": "Наибольший общий делитель",
      "en": "Greatest common divisor"
     },
     "text": {
      "ru": "$\\gcd(a,b)$ — наибольшее целое число, которое делит и $a$, и $b$ (при $a,b$ не равных нулю одновременно). Если $\\gcd(a,b)=1$, числа называют **взаимно простыми**.",
      "en": "$\\gcd(a,b)$ is the largest integer dividing both $a$ and $b$ (with $a,b$ not both zero). If $\\gcd(a,b)=1$ the numbers are called **coprime**."
     }
    },
    {
     "t": "lemma",
     "name": {
      "ru": "Ключевая лемма",
      "en": "The key lemma"
     },
     "text": {
      "ru": "Если $a=bq+r$, то $\\gcd(a,b)=\\gcd(b,r)$.",
      "en": "If $a=bq+r$ then $\\gcd(a,b)=\\gcd(b,r)$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Докажем, что у пар $(a,b)$ и $(b,r)$ **одни и те же** общие делители. Пусть $d\\mid a$ и $d\\mid b$. Тогда $d\\mid a-bq=r$, значит $d$ — общий делитель $b$ и $r$. Обратно, пусть $d\\mid b$ и $d\\mid r$. Тогда $d\\mid bq+r=a$, значит $d$ — общий делитель $a$ и $b$. Множества общих делителей совпадают, поэтому совпадают и их наибольшие элементы.",
      "en": "We show that the pairs $(a,b)$ and $(b,r)$ have **exactly the same** common divisors. Suppose $d\\mid a$ and $d\\mid b$. Then $d\\mid a-bq=r$, so $d$ is a common divisor of $b$ and $r$. Conversely, suppose $d\\mid b$ and $d\\mid r$. Then $d\\mid bq+r=a$, so $d$ is a common divisor of $a$ and $b$. The two sets of common divisors coincide, hence so do their largest elements."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Алгоритм Евклида",
      "en": "The Euclidean algorithm"
     },
     "text": {
      "ru": "Лемма превращается в алгоритм: заменяем пару $(a,b)$ на $(b,\\,a\\bmod b)$ и повторяем, пока второе число не станет нулём. Последнее ненулевое число и есть НОД. Остатки строго убывают, поэтому процесс конечен.",
      "en": "The lemma turns into an algorithm: replace the pair $(a,b)$ by $(b,\\,a\\bmod b)$ and repeat until the second number is zero. The last non-zero number is the GCD. The remainders strictly decrease, so the process terminates."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите $\\gcd(1071,462)$.",
      "en": "Find $\\gcd(1071,462)$."
     },
     "steps": {
      "ru": [
       "$1071=2\\cdot462+147$",
       "$462=3\\cdot147+21$",
       "$147=7\\cdot21+0$ — остаток ноль, останавливаемся."
      ],
      "en": [
       "$1071=2\\cdot462+147$",
       "$462=3\\cdot147+21$",
       "$147=7\\cdot21+0$ — the remainder is zero, so we stop."
      ]
     },
     "ans": {
      "ru": "$\\gcd(1071,462)=21$",
      "en": "$\\gcd(1071,462)=21$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Соотношение Безу",
      "en": "Bézout's identity"
     },
     "text": {
      "ru": "Для любых целых $a,b$ (не равных нулю одновременно) существуют целые $x,y$ такие, что $$ax+by=\\gcd(a,b).$$ Более того, $\\gcd(a,b)$ — **наименьшее** положительное число вида $ax+by$.",
      "en": "For any integers $a,b$ (not both zero) there exist integers $x,y$ with $$ax+by=\\gcd(a,b).$$ Moreover $\\gcd(a,b)$ is the **smallest** positive number of the form $ax+by$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Пусть $d$ — наименьшее положительное число вида $ax+by$, скажем $d=ax_0+by_0$. Разделим $a$ на $d$ с остатком: $a=dq+r$, $0\\le r<d$. Тогда $$r=a-dq=a-(ax_0+by_0)q=a(1-x_0q)+b(-y_0q),$$ то есть $r$ тоже имеет вид $ax+by$. Но $0\\le r<d$, а $d$ — наименьшее **положительное** такое число, значит $r=0$ и $d\\mid a$. Точно так же $d\\mid b$. Итак, $d$ — общий делитель. С другой стороны, любой общий делитель $c$ чисел $a,b$ делит $ax_0+by_0=d$, поэтому $c\\le d$. Значит $d=\\gcd(a,b)$.",
      "en": "Let $d$ be the smallest positive number of the form $ax+by$, say $d=ax_0+by_0$. Divide $a$ by $d$ with remainder: $a=dq+r$, $0\\le r<d$. Then $$r=a-dq=a-(ax_0+by_0)q=a(1-x_0q)+b(-y_0q),$$ so $r$ also has the form $ax+by$. But $0\\le r<d$ and $d$ is the smallest **positive** such number, so $r=0$ and $d\\mid a$. In the same way $d\\mid b$. So $d$ is a common divisor. Conversely any common divisor $c$ of $a,b$ divides $ax_0+by_0=d$, hence $c\\le d$. Therefore $d=\\gcd(a,b)$."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Запишите $\\gcd(1071,462)$ в виде $1071x+462y$.",
      "en": "Write $\\gcd(1071,462)$ in the form $1071x+462y$."
     },
     "steps": {
      "ru": [
       "Из первого шага алгоритма: $147=1071-2\\cdot462$.",
       "Из второго шага: $21=462-3\\cdot147$.",
       "Подставляем: $21=462-3(1071-2\\cdot462)=7\\cdot462-3\\cdot1071$.",
       "Проверка: $7\\cdot462=3234$, $3\\cdot1071=3213$, разность $21$ ✓"
      ],
      "en": [
       "From the first step of the algorithm: $147=1071-2\\cdot462$.",
       "From the second step: $21=462-3\\cdot147$.",
       "Substitute: $21=462-3(1071-2\\cdot462)=7\\cdot462-3\\cdot1071$.",
       "Check: $7\\cdot462=3234$, $3\\cdot1071=3213$, difference $21$ ✓"
      ]
     },
     "ans": {
      "ru": "$21=1071\\cdot(-3)+462\\cdot 7$",
      "en": "$21=1071\\cdot(-3)+462\\cdot 7$"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Из Безу мгновенно следует **лемма Евклида**: если $p$ — простое и $p\\mid ab$, то $p\\mid a$ или $p\\mid b$. Действительно, если $p\\nmid a$, то $\\gcd(p,a)=1$, значит $px+ay=1$; умножив на $b$, получаем $pbx+aby=b$, и оба слагаемых слева делятся на $p$.",
      "en": "Bézout gives **Euclid's lemma** at once: if $p$ is prime and $p\\mid ab$ then $p\\mid a$ or $p\\mid b$. Indeed, if $p\\nmid a$ then $\\gcd(p,a)=1$, so $px+ay=1$; multiplying by $b$ gives $pbx+aby=b$, and both terms on the left are divisible by $p$."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "НОК и связь с НОД",
    "en": "LCM and its link with the GCD"
   },
   "blocks": [
    {
     "t": "def",
     "name": {
      "ru": "Наименьшее общее кратное",
      "en": "Least common multiple"
     },
     "text": {
      "ru": "$\\operatorname{lcm}(a,b)$ — наименьшее положительное число, которое делится и на $a$, и на $b$.",
      "en": "$\\operatorname{lcm}(a,b)$ is the smallest positive number divisible by both $a$ and $b$."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Основное тождество",
      "en": "The main identity"
     },
     "text": {
      "ru": "Для положительных целых $a,b$: $$\\gcd(a,b)\\cdot\\operatorname{lcm}(a,b)=ab.$$",
      "en": "For positive integers $a,b$: $$\\gcd(a,b)\\cdot\\operatorname{lcm}(a,b)=ab.$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Разложим оба числа на простые множители, разрешая нулевые показатели: $a=\\prod p_i^{\\alpha_i}$, $b=\\prod p_i^{\\beta_i}$. Тогда $$\\gcd(a,b)=\\prod p_i^{\\min(\\alpha_i,\\beta_i)},\\qquad \\operatorname{lcm}(a,b)=\\prod p_i^{\\max(\\alpha_i,\\beta_i)}.$$ Остаётся заметить, что для любых чисел $\\min(\\alpha,\\beta)+\\max(\\alpha,\\beta)=\\alpha+\\beta$, а значит показатели в произведении $\\gcd\\cdot\\operatorname{lcm}$ совпадают с показателями в $ab$.",
      "en": "Factor both numbers into primes, allowing zero exponents: $a=\\prod p_i^{\\alpha_i}$, $b=\\prod p_i^{\\beta_i}$. Then $$\\gcd(a,b)=\\prod p_i^{\\min(\\alpha_i,\\beta_i)},\\qquad \\operatorname{lcm}(a,b)=\\prod p_i^{\\max(\\alpha_i,\\beta_i)}.$$ It only remains to note that $\\min(\\alpha,\\beta)+\\max(\\alpha,\\beta)=\\alpha+\\beta$ for any numbers, so the exponents in $\\gcd\\cdot\\operatorname{lcm}$ agree with those in $ab$."
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Для трёх чисел тождество **неверно**: $\\gcd(a,b,c)\\cdot\\operatorname{lcm}(a,b,c)\\ne abc$ в общем случае. Например, при $a=b=c=2$ слева $2\\cdot2=4$, справа $8$.",
      "en": "For three numbers the identity **fails**: $\\gcd(a,b,c)\\cdot\\operatorname{lcm}(a,b,c)\\ne abc$ in general. For instance with $a=b=c=2$ the left side is $2\\cdot2=4$ and the right side is $8$."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Стандартная подстановка",
      "en": "The standard substitution"
     },
     "text": {
      "ru": "Если $\\gcd(a,b)=d$, пишем $a=dx$, $b=dy$, где $\\gcd(x,y)=1$. Тогда $\\operatorname{lcm}(a,b)=dxy$. Эта замена превращает почти любую задачу «дан НОД и НОК» в простое уравнение относительно взаимно простых $x,y$.",
      "en": "If $\\gcd(a,b)=d$, write $a=dx$, $b=dy$ with $\\gcd(x,y)=1$. Then $\\operatorname{lcm}(a,b)=dxy$. This substitution turns almost any \"given the GCD and the LCM\" problem into a simple equation in coprime $x,y$."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Число делителей",
    "en": "Counting divisors"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Количество и сумма делителей",
      "en": "Number and sum of divisors"
     },
     "text": {
      "ru": "Пусть $n=p_1^{\\alpha_1}p_2^{\\alpha_2}\\cdots p_k^{\\alpha_k}$. Тогда число делителей и их сумма равны $$d(n)=\\prod_{i=1}^{k}(\\alpha_i+1),\\qquad \\sigma(n)=\\prod_{i=1}^{k}\\frac{p_i^{\\alpha_i+1}-1}{p_i-1}.$$",
      "en": "Let $n=p_1^{\\alpha_1}p_2^{\\alpha_2}\\cdots p_k^{\\alpha_k}$. Then the number of divisors and their sum are $$d(n)=\\prod_{i=1}^{k}(\\alpha_i+1),\\qquad \\sigma(n)=\\prod_{i=1}^{k}\\frac{p_i^{\\alpha_i+1}-1}{p_i-1}.$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Каждый делитель $n$ имеет вид $p_1^{c_1}\\cdots p_k^{c_k}$, где $0\\le c_i\\le \\alpha_i$, и разным наборам показателей отвечают разные делители. Значит вариантов ровно $(\\alpha_1+1)\\cdots(\\alpha_k+1)$. Для суммы раскроем скобки в произведении $$\\left(1+p_1+\\cdots+p_1^{\\alpha_1}\\right)\\cdots\\left(1+p_k+\\cdots+p_k^{\\alpha_k}\\right):$$ каждое слагаемое после раскрытия — ровно один делитель, и каждый делитель встречается ровно один раз. Остаётся свернуть геометрические прогрессии.",
      "en": "Every divisor of $n$ has the form $p_1^{c_1}\\cdots p_k^{c_k}$ with $0\\le c_i\\le \\alpha_i$, and different exponent tuples give different divisors. So there are exactly $(\\alpha_1+1)\\cdots(\\alpha_k+1)$ of them. For the sum, expand the product $$\\left(1+p_1+\\cdots+p_1^{\\alpha_1}\\right)\\cdots\\left(1+p_k+\\cdots+p_k^{\\alpha_k}\\right):$$ each term after expansion is exactly one divisor, and each divisor appears exactly once. It remains to sum the geometric progressions."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Сколько делителей у числа $360$ и чему равна их сумма?",
      "en": "How many divisors has $360$, and what is their sum?"
     },
     "steps": {
      "ru": [
       "$360=2^3\\cdot3^2\\cdot5$.",
       "$d(360)=(3+1)(2+1)(1+1)=4\\cdot3\\cdot2=24$.",
       "$\\sigma(360)=(1+2+4+8)(1+3+9)(1+5)=15\\cdot13\\cdot6=1170$."
      ],
      "en": [
       "$360=2^3\\cdot3^2\\cdot5$.",
       "$d(360)=(3+1)(2+1)(1+1)=4\\cdot3\\cdot2=24$.",
       "$\\sigma(360)=(1+2+4+8)(1+3+9)(1+5)=15\\cdot13\\cdot6=1170$."
      ]
     },
     "ans": {
      "ru": "$d(360)=24$, $\\sigma(360)=1170$",
      "en": "$d(360)=24$, $\\sigma(360)=1170$"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Полезное следствие: $d(n)$ нечётно тогда и только тогда, когда $n$ — полный квадрат. Делители разбиваются на пары $(e,\\,n/e)$, и непарным остаётся только $e=\\sqrt{n}$.",
      "en": "A useful corollary: $d(n)$ is odd exactly when $n$ is a perfect square. Divisors pair up as $(e,\\,n/e)$, and the only one left without a partner is $e=\\sqrt{n}$."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Приёмы, которые решают задачи",
    "en": "The moves that solve problems"
   },
   "blocks": [
    {
     "t": "ol",
     "items": {
      "ru": [
       "**Убрать неизвестное линейной комбинацией.** Если $d$ делит два выражения с $n$, подберите множители так, чтобы $n$ сократилось. Так решается ⅔ задач на несократимость дробей.",
       "**Выделить целую часть.** Из $\\dfrac{n^2+1}{n+1}$ получаем $n-1+\\dfrac{2}{n+1}$, значит $n+1\\mid 2$. Приём превращает делимость в конечный перебор.",
       "**Разбить по остаткам.** Чтобы доказать делимость на $m$, рассмотрите $n=mk, mk+1,\\ldots,mk+(m-1)$.",
       "**Использовать последовательные числа.** Из любых $k$ подряд идущих целых ровно одно делится на $k$; произведение $k$ подряд идущих делится на $k!$.",
       "**Перейти к разложению на простые.** Задачи со словами «квадрат», «куб», «НОД», «НОК» почти всегда решаются на языке показателей простых.",
       "**Оценить размер.** Если $d\\mid N$ и $d>\\sqrt{N}$, то $N/d<\\sqrt{N}$ — часто это сразу ограничивает перебор."
      ],
      "en": [
       "**Kill the unknown with a linear combination.** If $d$ divides two expressions in $n$, choose multipliers so that $n$ cancels. Two-thirds of \"prove this fraction is irreducible\" problems fall to this.",
       "**Split off the integer part.** From $\\dfrac{n^2+1}{n+1}$ we get $n-1+\\dfrac{2}{n+1}$, so $n+1\\mid 2$. The move turns a divisibility into a finite search.",
       "**Split into remainder cases.** To prove divisibility by $m$, consider $n=mk, mk+1,\\ldots,mk+(m-1)$.",
       "**Use consecutive integers.** Among any $k$ consecutive integers exactly one is divisible by $k$; a product of $k$ consecutive integers is divisible by $k!$.",
       "**Move to prime factorisations.** Problems with the words \"square\", \"cube\", \"GCD\", \"LCM\" are almost always cleanest in the language of prime exponents.",
       "**Bound the size.** If $d\\mid N$ and $d>\\sqrt{N}$ then $N/d<\\sqrt{N}$ — this often cuts a search down to nothing."
      ]
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
    "ru": "Докажите, что произведение двух последовательных целых чисел $n(n+1)$ всегда чётно.",
    "en": "Prove that the product of two consecutive integers $n(n+1)$ is always even."
   },
   "hint": {
    "ru": "Одно из двух подряд идущих чисел чётно.",
    "en": "One of two consecutive integers is even."
   },
   "sol": {
    "ru": "Если $n=2k$, то $n(n+1)=2k(n+1)$ делится на $2$. Если $n=2k+1$, то $n+1=2k+2=2(k+1)$, и снова произведение чётно. Других случаев нет. $\\blacksquare$",
    "en": "If $n=2k$ then $n(n+1)=2k(n+1)$ is divisible by $2$. If $n=2k+1$ then $n+1=2k+2=2(k+1)$, and again the product is even. There are no other cases. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что $6\\mid n^3-n$ для любого целого $n$.",
    "en": "Prove that $6\\mid n^3-n$ for every integer $n$."
   },
   "hint": {
    "ru": "Разложите на множители.",
    "en": "Factorise."
   },
   "sol": {
    "ru": "$n^3-n=n(n^2-1)=(n-1)n(n+1)$ — произведение трёх последовательных целых чисел. Среди любых трёх подряд идущих есть кратное $3$, и есть хотя бы одно чётное. Значит произведение делится на $2$ и на $3$, а так как $\\gcd(2,3)=1$ — и на $6$. $\\blacksquare$",
    "en": "$n^3-n=n(n^2-1)=(n-1)n(n+1)$, a product of three consecutive integers. Among any three consecutive integers one is a multiple of $3$ and at least one is even. So the product is divisible by $2$ and by $3$, and since $\\gcd(2,3)=1$, by $6$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Найдите $\\gcd(1071,462)$ и $\\operatorname{lcm}(1071,462)$.",
    "en": "Find $\\gcd(1071,462)$ and $\\operatorname{lcm}(1071,462)$."
   },
   "hint": {
    "ru": "Алгоритм Евклида, затем основное тождество.",
    "en": "Euclidean algorithm, then the main identity."
   },
   "sol": {
    "ru": "$1071=2\\cdot462+147$, $462=3\\cdot147+21$, $147=7\\cdot21$. Значит $\\gcd=21$. Тогда $$\\operatorname{lcm}=\\frac{1071\\cdot462}{21}=1071\\cdot22=23562.$$",
    "en": "$1071=2\\cdot462+147$, $462=3\\cdot147+21$, $147=7\\cdot21$. So $\\gcd=21$. Then $$\\operatorname{lcm}=\\frac{1071\\cdot462}{21}=1071\\cdot22=23562.$$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Сколько натуральных делителей у числа $2^4\\cdot3^2\\cdot5$? Сколько из них чётных?",
    "en": "How many positive divisors has $2^4\\cdot3^2\\cdot5$? How many of them are even?"
   },
   "hint": {
    "ru": "Чётный делитель — это $2\\cdot(\\text{делитель } 2^3\\cdot3^2\\cdot5)$.",
    "en": "An even divisor is $2\\cdot(\\text{a divisor of } 2^3\\cdot3^2\\cdot5)$."
   },
   "sol": {
    "ru": "Всего $d=(4+1)(2+1)(1+1)=30$. Нечётные делители — это делители $3^2\\cdot5$, их $(2+1)(1+1)=6$. Значит чётных $30-6=24$.",
    "en": "In total $d=(4+1)(2+1)(1+1)=30$. The odd divisors are the divisors of $3^2\\cdot5$, and there are $(2+1)(1+1)=6$ of them. So $30-6=24$ are even."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что $\\gcd(n,n+1)=1$ для любого натурального $n$.",
    "en": "Prove that $\\gcd(n,n+1)=1$ for every positive integer $n$."
   },
   "hint": {
    "ru": "Общий делитель делит разность.",
    "en": "A common divisor divides the difference."
   },
   "sol": {
    "ru": "Пусть $d\\mid n$ и $d\\mid n+1$. Тогда $d\\mid (n+1)-n=1$, значит $d=1$. $\\blacksquare$",
    "en": "Let $d\\mid n$ and $d\\mid n+1$. Then $d\\mid (n+1)-n=1$, so $d=1$. $\\blacksquare$"
   }
  },
  {
   "src": "IMO 1959, задача 1 / IMO 1959, Problem 1",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что дробь $\\dfrac{21n+4}{14n+3}$ несократима при любом натуральном $n$.",
    "en": "Prove that the fraction $\\dfrac{21n+4}{14n+3}$ is irreducible for every positive integer $n$."
   },
   "hint": {
    "ru": "Составьте комбинацию числителя и знаменателя, в которой $n$ исчезает.",
    "en": "Build a combination of numerator and denominator in which $n$ disappears."
   },
   "sol": {
    "ru": "Пусть $d=\\gcd(21n+4,\\,14n+3)$. Тогда $d$ делит любую их целую комбинацию. Возьмём $$3(14n+3)-2(21n+4)=42n+9-42n-8=1.$$ Значит $d\\mid1$, то есть $d=1$, и дробь несократима при всех $n$. $\\blacksquare$",
    "en": "Let $d=\\gcd(21n+4,\\,14n+3)$. Then $d$ divides every integer combination of them. Take $$3(14n+3)-2(21n+4)=42n+9-42n-8=1.$$ So $d\\mid1$, that is $d=1$, and the fraction is irreducible for all $n$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Найдите все натуральные $n$, при которых $(n+1)\\mid(n^2+1)$.",
    "en": "Find all positive integers $n$ for which $(n+1)\\mid(n^2+1)$."
   },
   "hint": {
    "ru": "Выделите целую часть дроби $\\dfrac{n^2+1}{n+1}$.",
    "en": "Split off the integer part of $\\dfrac{n^2+1}{n+1}$."
   },
   "sol": {
    "ru": "Заметим, что $n^2+1=(n+1)(n-1)+2$. Значит $(n+1)\\mid(n^2+1)$ равносильно $(n+1)\\mid 2$. Для натурального $n$ имеем $n+1\\ge2$, откуда $n+1=2$ и $n=1$. Проверка: $\\dfrac{1^2+1}{1+1}=1$ ✓",
    "en": "Note that $n^2+1=(n+1)(n-1)+2$. So $(n+1)\\mid(n^2+1)$ is equivalent to $(n+1)\\mid 2$. For a positive integer $n$ we have $n+1\\ge2$, hence $n+1=2$ and $n=1$. Check: $\\dfrac{1^2+1}{1+1}=1$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $30\\mid n^5-n$ при любом целом $n$.",
    "en": "Prove that $30\\mid n^5-n$ for every integer $n$."
   },
   "hint": {
    "ru": "$30=2\\cdot3\\cdot5$; проверьте делимость на каждый множитель отдельно.",
    "en": "$30=2\\cdot3\\cdot5$; check divisibility by each factor separately."
   },
   "sol": {
    "ru": "Разложим: $n^5-n=n(n^4-1)=(n-1)n(n+1)(n^2+1)$. Первые три множителя — три последовательных целых, поэтому произведение делится на $2$ и на $3$. Осталась делимость на $5$: разберём остатки $n$ по модулю $5$. Если $n\\equiv0$, то $5\\mid n$. Если $n\\equiv\\pm1$, то $5\\mid n\\mp1$. Если $n\\equiv\\pm2$, то $n^2\\equiv4$, значит $n^2+1\\equiv0$. Во всех случаях один из множителей делится на $5$. Так как $2,3,5$ попарно взаимно просты, произведение делится на $30$. $\\blacksquare$",
    "en": "Factor: $n^5-n=n(n^4-1)=(n-1)n(n+1)(n^2+1)$. The first three factors are three consecutive integers, so the product is divisible by $2$ and by $3$. It remains to handle $5$: look at the residue of $n$ modulo $5$. If $n\\equiv0$ then $5\\mid n$. If $n\\equiv\\pm1$ then $5\\mid n\\mp1$. If $n\\equiv\\pm2$ then $n^2\\equiv4$, so $n^2+1\\equiv0$. In every case one factor is divisible by $5$. Since $2,3,5$ are pairwise coprime, the product is divisible by $30$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Найдите все пары натуральных чисел $(a,b)$, для которых $\\gcd(a,b)=5$ и $\\operatorname{lcm}(a,b)=60$.",
    "en": "Find all pairs of positive integers $(a,b)$ with $\\gcd(a,b)=5$ and $\\operatorname{lcm}(a,b)=60$."
   },
   "hint": {
    "ru": "Стандартная подстановка $a=5x$, $b=5y$ с $\\gcd(x,y)=1$.",
    "en": "The standard substitution $a=5x$, $b=5y$ with $\\gcd(x,y)=1$."
   },
   "sol": {
    "ru": "Пишем $a=5x$, $b=5y$, где $\\gcd(x,y)=1$. Тогда $\\operatorname{lcm}(a,b)=5xy=60$, откуда $xy=12$. Взаимно простые пары с произведением $12$: $(1,12)$ и $(3,4)$ (а также их перестановки). Получаем $$(a,b)\\in\\{(5,60),(60,5),(15,20),(20,15)\\}.$$ Проверка для $(15,20)$: $\\gcd=5$, $\\operatorname{lcm}=60$ ✓",
    "en": "Write $a=5x$, $b=5y$ with $\\gcd(x,y)=1$. Then $\\operatorname{lcm}(a,b)=5xy=60$, so $xy=12$. The coprime pairs with product $12$ are $(1,12)$ and $(3,4)$ (and their swaps). Hence $$(a,b)\\in\\{(5,60),(60,5),(15,20),(20,15)\\}.$$ Check for $(15,20)$: $\\gcd=5$, $\\operatorname{lcm}=60$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $\\gcd(2n+1,\\,3n+1)=1$ при любом целом $n$.",
    "en": "Prove that $\\gcd(2n+1,\\,3n+1)=1$ for every integer $n$."
   },
   "hint": {
    "ru": "$2\\cdot(3n+1)-3\\cdot(2n+1)$.",
    "en": "$2\\cdot(3n+1)-3\\cdot(2n+1)$."
   },
   "sol": {
    "ru": "Пусть $d$ делит оба числа. Тогда $$d\\mid 2(3n+1)-3(2n+1)=6n+2-6n-3=-1,$$ значит $d=\\pm1$ и НОД равен $1$. $\\blacksquare$",
    "en": "Let $d$ divide both numbers. Then $$d\\mid 2(3n+1)-3(2n+1)=6n+2-6n-3=-1,$$ so $d=\\pm1$ and the GCD is $1$. $\\blacksquare$"
   }
  },
  {
   "src": "IMO 1960, задача 1 / IMO 1960, Problem 1",
   "lvl": 2,
   "q": {
    "ru": "Найдите все трёхзначные числа $N$, делящиеся на $11$, для которых $N/11$ равно сумме квадратов цифр числа $N$.",
    "en": "Find all three-digit numbers $N$ divisible by $11$ such that $N/11$ equals the sum of the squares of the digits of $N$."
   },
   "hint": {
    "ru": "Оцените сверху сумму квадратов трёх цифр — она не превосходит $3\\cdot81=243$.",
    "en": "Bound the sum of three squared digits above — it is at most $3\\cdot81=243$."
   },
   "sol": {
    "ru": "Пусть $N=\\overline{abc}=100a+10b+c$. Сумма квадратов цифр не больше $3\\cdot 9^2=243$, значит $N=11\\cdot(a^2+b^2+c^2)\\le 11\\cdot243$, что для трёхзначного $N$ ограничений не даёт; зато $N/11\\le 243$ и $N/11\\ge 100/11$, то есть $a^2+b^2+c^2$ лежит между $10$ и $90$ (так как $N\\le 999$ даёт $N/11\\le 90$). Далее, $11\\mid N$ по признаку означает $11\\mid (a-b+c)$, а так как $-9\\le a-b+c\\le 18$, возможны $a-b+c=0$ или $a-b+c=11$. Перебор этих двух случаев даёт ровно два решения. **Ответ:** $N=550$ и $N=803$. Проверка: $550/11=50=5^2+5^2+0^2$ ✓; $803/11=73=8^2+0^2+3^2=64+9$ ✓",
    "en": "Let $N=\\overline{abc}=100a+10b+c$. The sum of squared digits is at most $3\\cdot 9^2=243$; also $N\\le999$ gives $N/11\\le90$, so $a^2+b^2+c^2$ lies between $10$ and $90$. Next, $11\\mid N$ means by the rule that $11\\mid (a-b+c)$, and since $-9\\le a-b+c\\le 18$, either $a-b+c=0$ or $a-b+c=11$. Checking these two cases gives exactly two solutions. **Answer:** $N=550$ and $N=803$. Check: $550/11=50=5^2+5^2+0^2$ ✓; $803/11=73=8^2+0^2+3^2=64+9$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что число и сумма его цифр дают одинаковые остатки при делении на $9$.",
    "en": "Prove that a number and its digit sum leave the same remainder on division by $9$."
   },
   "hint": {
    "ru": "Посмотрите на разность $N-S(N)$.",
    "en": "Look at the difference $N-S(N)$."
   },
   "sol": {
    "ru": "Как показано в теории, $N-S(N)=\\sum_{j\\ge1}a_j(10^j-1)$, и каждое $10^j-1=\\underbrace{9\\ldots9}_{j}$ делится на $9$. Значит $9\\mid N-S(N)$, то есть $N$ и $S(N)$ дают один и тот же остаток. $\\blacksquare$ *Следствие:* это и есть «проверка девяткой» для арифметических вычислений.",
    "en": "As shown in the theory, $N-S(N)=\\sum_{j\\ge1}a_j(10^j-1)$, and each $10^j-1=\\underbrace{9\\ldots9}_{j}$ is divisible by $9$. So $9\\mid N-S(N)$, that is $N$ and $S(N)$ have the same remainder. $\\blacksquare$ *Corollary:* this is exactly the classical \"casting out nines\" check."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что если $\\gcd(a,b)=1$ и $ab$ — точный квадрат, то $a$ и $b$ — точные квадраты (для натуральных $a,b$).",
    "en": "Prove that if $\\gcd(a,b)=1$ and $ab$ is a perfect square, then $a$ and $b$ are both perfect squares (for positive integers $a,b$)."
   },
   "hint": {
    "ru": "Смотрите на показатели простых в разложении.",
    "en": "Look at the prime exponents."
   },
   "sol": {
    "ru": "Пусть $p$ — простое, входящее в $a$ с показателем $\\alpha$. Так как $\\gcd(a,b)=1$, число $p$ не делит $b$, поэтому показатель $p$ в произведении $ab$ равен тому же $\\alpha$. Но $ab$ — квадрат, а у квадрата все показатели чётны, значит $\\alpha$ чётно. Это верно для каждого простого делителя $a$, поэтому $a$ — точный квадрат. Симметрично для $b$. $\\blacksquare$",
    "en": "Let $p$ be a prime dividing $a$ with exponent $\\alpha$. Since $\\gcd(a,b)=1$, $p$ does not divide $b$, so the exponent of $p$ in the product $ab$ is the same $\\alpha$. But $ab$ is a square, and every exponent in a square is even, so $\\alpha$ is even. This holds for every prime divisor of $a$, hence $a$ is a perfect square. The same argument gives $b$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Найдите все натуральные $n$, для которых $n\\mid(2n+7)$.",
    "en": "Find all positive integers $n$ with $n\\mid(2n+7)$."
   },
   "hint": {
    "ru": "Вычтите кратное $n$.",
    "en": "Subtract a multiple of $n$."
   },
   "sol": {
    "ru": "Так как $n\\mid 2n$, условие $n\\mid(2n+7)$ равносильно $n\\mid7$. Значит $n\\in\\{1,7\\}$. Проверка: $1\\mid9$ ✓, $7\\mid21$ ✓",
    "en": "Since $n\\mid 2n$, the condition $n\\mid(2n+7)$ is equivalent to $n\\mid7$. So $n\\in\\{1,7\\}$. Check: $1\\mid9$ ✓, $7\\mid21$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что число $\\underbrace{11\\ldots1}_{2024}$ не является точным квадратом.",
    "en": "Prove that the number $\\underbrace{11\\ldots1}_{2024}$ is not a perfect square."
   },
   "hint": {
    "ru": "Посмотрите на остаток по модулю $4$ — он читается по двум последним цифрам.",
    "en": "Look at the remainder modulo $4$ — the last two digits decide it."
   },
   "sol": {
    "ru": "Остаток при делении на $4$ определяется числом из двух последних цифр, а они равны $11$. Так как $11=4\\cdot2+3$, наше число даёт остаток $3$ по модулю $4$. Но, как доказано выше, квадрат целого числа даёт по модулю $4$ только остатки $0$ или $1$. Противоречие. $\\blacksquare$",
    "en": "The remainder on division by $4$ is decided by the last two digits, which are $11$. Since $11=4\\cdot2+3$, our number leaves remainder $3$ modulo $4$. But, as proved above, a square of an integer leaves only $0$ or $1$ modulo $4$. Contradiction. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что дробь $\\dfrac{n^3+2n}{n^4+3n^2+1}$ несократима при любом натуральном $n$.",
    "en": "Prove that the fraction $\\dfrac{n^3+2n}{n^4+3n^2+1}$ is irreducible for every positive integer $n$."
   },
   "hint": {
    "ru": "Дважды вычтите подходящее кратное числителя из знаменателя.",
    "en": "Twice subtract a suitable multiple of the numerator from the denominator."
   },
   "sol": {
    "ru": "Пусть $d=\\gcd(n^3+2n,\\;n^4+3n^2+1)$. Тогда $$d\\mid (n^4+3n^2+1)-n\\cdot(n^3+2n)=n^2+1.$$ Далее, $$d\\mid (n^3+2n)-n\\cdot(n^2+1)=n.$$ Итак, $d\\mid n$ и $d\\mid n^2+1$. Но тогда $d\\mid (n^2+1)-n\\cdot n=1$, значит $d=1$. $\\blacksquare$",
    "en": "Let $d=\\gcd(n^3+2n,\\;n^4+3n^2+1)$. Then $$d\\mid (n^4+3n^2+1)-n\\cdot(n^3+2n)=n^2+1.$$ Next, $$d\\mid (n^3+2n)-n\\cdot(n^2+1)=n.$$ So $d\\mid n$ and $d\\mid n^2+1$. But then $d\\mid (n^2+1)-n\\cdot n=1$, hence $d=1$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что $\\gcd\\!\\left(2^m-1,\\;2^n-1\\right)=2^{\\gcd(m,n)}-1$.",
    "en": "Prove that $\\gcd\\!\\left(2^m-1,\\;2^n-1\\right)=2^{\\gcd(m,n)}-1$."
   },
   "hint": {
    "ru": "Повторите алгоритм Евклида в показателях: если $m=nq+r$, то $2^m-1$ и $2^n-1$ ведут себя как $m$ и $n$.",
    "en": "Run the Euclidean algorithm in the exponents: if $m=nq+r$ then $2^m-1$ and $2^n-1$ behave like $m$ and $n$."
   },
   "sol": {
    "ru": "Пусть $m=nq+r$, $0\\le r<n$. Запишем $$2^m-1=2^{nq+r}-1=2^{r}\\left(2^{nq}-1\\right)+\\left(2^{r}-1\\right).$$ Число $2^{nq}-1$ делится на $2^n-1$ (так как $x-1\\mid x^q-1$ при $x=2^n$). Значит по ключевой лемме $$\\gcd\\!\\left(2^m-1,2^n-1\\right)=\\gcd\\!\\left(2^{r}-1,\\;2^n-1\\right).$$ Показатели ведут себя ровно как в алгоритме Евклида для пары $(m,n)$. Продолжая, дойдём до $r=0$, когда $2^0-1=0$, и ответом окажется $2^{\\gcd(m,n)}-1$. $\\blacksquare$",
    "en": "Let $m=nq+r$ with $0\\le r<n$. Write $$2^m-1=2^{nq+r}-1=2^{r}\\left(2^{nq}-1\\right)+\\left(2^{r}-1\\right).$$ The number $2^{nq}-1$ is divisible by $2^n-1$ (since $x-1\\mid x^q-1$ with $x=2^n$). So by the key lemma $$\\gcd\\!\\left(2^m-1,2^n-1\\right)=\\gcd\\!\\left(2^{r}-1,\\;2^n-1\\right).$$ The exponents behave exactly as in the Euclidean algorithm on the pair $(m,n)$. Continuing, we reach $r=0$, where $2^0-1=0$, and the answer is $2^{\\gcd(m,n)}-1$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что произведение любых $k$ последовательных целых чисел делится на $k!$.",
    "en": "Prove that the product of any $k$ consecutive integers is divisible by $k!$."
   },
   "hint": {
    "ru": "Свяжите произведение с биномиальным коэффициентом.",
    "en": "Connect the product with a binomial coefficient."
   },
   "sol": {
    "ru": "Пусть числа — это $n+1,n+2,\\ldots,n+k$. Тогда $$\\frac{(n+1)(n+2)\\cdots(n+k)}{k!}=\\binom{n+k}{k},$$ а биномиальный коэффициент — целое число, поскольку он равен количеству $k$-элементных подмножеств $(n+k)$-элементного множества. Значит $k!$ делит произведение. (Для отрицательных $n$ утверждение следует из того же тождества с точностью до знака, а если среди чисел есть ноль, произведение равно нулю и делится на всё.) $\\blacksquare$",
    "en": "Let the numbers be $n+1,n+2,\\ldots,n+k$. Then $$\\frac{(n+1)(n+2)\\cdots(n+k)}{k!}=\\binom{n+k}{k},$$ and a binomial coefficient is an integer, being the number of $k$-element subsets of an $(n+k)$-element set. So $k!$ divides the product. (For negative $n$ the same identity gives the claim up to sign, and if one of the numbers is zero the product is zero, which everything divides.) $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что $\\underbrace{11\\ldots1}_{m}$ делит $\\underbrace{11\\ldots1}_{n}$ тогда и только тогда, когда $m\\mid n$.",
    "en": "Prove that $\\underbrace{11\\ldots1}_{m}$ divides $\\underbrace{11\\ldots1}_{n}$ if and only if $m\\mid n$."
   },
   "hint": {
    "ru": "$\\underbrace{11\\ldots1}_{k}=\\dfrac{10^{k}-1}{9}$, и всё сводится к предыдущей задаче с основанием $10$.",
    "en": "$\\underbrace{11\\ldots1}_{k}=\\dfrac{10^{k}-1}{9}$, and everything reduces to the previous problem with base $10$."
   },
   "sol": {
    "ru": "Обозначим $R_k=\\underbrace{11\\ldots1}_{k}=\\dfrac{10^k-1}{9}$. Тогда $R_m\\mid R_n$ равносильно $\\left(10^m-1\\right)\\mid\\left(10^n-1\\right)$. Повторяя рассуждение предыдущей задачи с основанием $10$ вместо $2$, получаем $$\\gcd\\!\\left(10^m-1,10^n-1\\right)=10^{\\gcd(m,n)}-1.$$ Поэтому $10^m-1$ делит $10^n-1$ тогда и только тогда, когда $\\gcd(m,n)=m$, то есть когда $m\\mid n$. $\\blacksquare$ *Пример:* $R_3=111$ делит $R_6=111111=111\\cdot1001$ ✓",
    "en": "Write $R_k=\\underbrace{11\\ldots1}_{k}=\\dfrac{10^k-1}{9}$. Then $R_m\\mid R_n$ is equivalent to $\\left(10^m-1\\right)\\mid\\left(10^n-1\\right)$. Repeating the previous problem with base $10$ instead of $2$ gives $$\\gcd\\!\\left(10^m-1,10^n-1\\right)=10^{\\gcd(m,n)}-1.$$ So $10^m-1$ divides $10^n-1$ exactly when $\\gcd(m,n)=m$, that is when $m\\mid n$. $\\blacksquare$ *Example:* $R_3=111$ divides $R_6=111111=111\\cdot1001$ ✓"
   }
  },
  {
   "src": "IMO 1992, задача 1 / IMO 1992, Problem 1",
   "lvl": 3,
   "q": {
    "ru": "Найдите все целые числа $a>b>c>1$, для которых $(a-1)(b-1)(c-1)$ делит $abc-1$.",
    "en": "Find all integers $a>b>c>1$ such that $(a-1)(b-1)(c-1)$ divides $abc-1$."
   },
   "hint": {
    "ru": "Оцените отношение $\\dfrac{abc-1}{(a-1)(b-1)(c-1)}$ сверху и снизу, чтобы понять, каким целым оно может быть.",
    "en": "Bound the ratio $\\dfrac{abc-1}{(a-1)(b-1)(c-1)}$ above and below to see which integers it can be."
   },
   "sol": {
    "ru": "Обозначим $k=\\dfrac{abc-1}{(a-1)(b-1)(c-1)}$ — целое положительное. Так как $c\\ge2$, $b\\ge3$, $a\\ge4$, отношение $\\dfrac{x}{x-1}$ убывает, и $$k<\\frac{abc}{(a-1)(b-1)(c-1)}=\\frac{a}{a-1}\\cdot\\frac{b}{b-1}\\cdot\\frac{c}{c-1}\\le\\frac{4}{3}\\cdot\\frac{3}{2}\\cdot\\frac{2}{1}=4.$$ Кроме того, $abc-1$ и $(a-1)(b-1)(c-1)$ имеют разную чётность при нечётном $c$, что ограничивает случаи. Остаются $k=2$ и $k=3$; разбор даёт ровно два набора. **Ответ:** $(a,b,c)=(3,5,15)$ и $(a,b,c)=(2,4,8)$ — с точностью до записи в убывающем порядке $(15,5,3)$ и $(8,4,2)$. Проверка: $15\\cdot5\\cdot3-1=224$ и $14\\cdot4\\cdot2=112$, $224=2\\cdot112$ ✓; $8\\cdot4\\cdot2-1=63$ и $7\\cdot3\\cdot1=21$, $63=3\\cdot21$ ✓",
    "en": "Write $k=\\dfrac{abc-1}{(a-1)(b-1)(c-1)}$, a positive integer. Since $c\\ge2$, $b\\ge3$, $a\\ge4$ and $\\dfrac{x}{x-1}$ is decreasing, $$k<\\frac{abc}{(a-1)(b-1)(c-1)}=\\frac{a}{a-1}\\cdot\\frac{b}{b-1}\\cdot\\frac{c}{c-1}\\le\\frac{4}{3}\\cdot\\frac{3}{2}\\cdot\\frac{2}{1}=4.$$ A parity check also narrows the cases: for odd $c$ the two sides differ in parity. This leaves $k=2$ and $k=3$, and working each out gives exactly two triples. **Answer:** $(a,b,c)=(15,5,3)$ and $(a,b,c)=(8,4,2)$. Check: $15\\cdot5\\cdot3-1=224$ and $14\\cdot4\\cdot2=112$, with $224=2\\cdot112$ ✓; $8\\cdot4\\cdot2-1=63$ and $7\\cdot3\\cdot1=21$, with $63=3\\cdot21$ ✓"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Найдите наименьшее натуральное число, которое делится на каждое из чисел $2,3,4,5,6$.",
    "en": "Find the smallest positive integer divisible by each of $2,3,4,5,6$."
   },
   "hint": {
    "ru": "Это НОК; берите каждое простое в наибольшей встретившейся степени.",
    "en": "It is the LCM; take each prime to the highest power that occurs."
   },
   "sol": {
    "ru": "Разложим на простые множители: $$2=2,\\quad 3=3,\\quad 4=2^{2},\\quad 5=5,\\quad 6=2\\cdot3 .$$ НОК берёт каждое простое в наибольшей встретившейся степени: двойку — во второй (из четвёрки), тройку — в первой, пятёрку — в первой: $$\\operatorname{lcm}=2^{2}\\cdot3\\cdot5=60 .$$\n\n**Проверка:** $60$ делится на $2,3,4,5,6$ ✓ А $30$ не подходит: $30$ не делится на $4$.\n\n**Ответ:** $60$.",
    "en": "Factor each number: $$2=2,\\quad 3=3,\\quad 4=2^{2},\\quad 5=5,\\quad 6=2\\cdot3 .$$ The LCM takes each prime to the highest power occurring: two squared (from the four), three, and five: $$\\operatorname{lcm}=2^{2}\\cdot3\\cdot5=60 .$$\n\n**Check:** $60$ is divisible by $2,3,4,5,6$ ✓ And $30$ fails, since $30$ is not divisible by $4$.\n\n**Answer:** $60$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Найдите $\\gcd(84,120)$ и $\\operatorname{lcm}(84,120)$.",
    "en": "Find $\\gcd(84,120)$ and $\\operatorname{lcm}(84,120)$."
   },
   "hint": {
    "ru": "Разложите оба числа и сравните показатели.",
    "en": "Factor both numbers and compare the exponents."
   },
   "sol": {
    "ru": "Разложим: $$84=2^{2}\\cdot3\\cdot7,\\qquad 120=2^{3}\\cdot3\\cdot5 .$$\n\n**НОД** берёт наименьший показатель каждого общего простого: $$\\gcd=2^{2}\\cdot3=12 .$$\n\n**НОК** берёт наибольший показатель каждого встретившегося простого: $$\\operatorname{lcm}=2^{3}\\cdot3\\cdot5\\cdot7=840 .$$\n\n**Проверка по формуле** $\\gcd\\cdot\\operatorname{lcm}=ab$: $$12\\cdot840=10\\,080=84\\cdot120\\ \\checkmark$$",
    "en": "Factor: $$84=2^{2}\\cdot3\\cdot7,\\qquad 120=2^{3}\\cdot3\\cdot5 .$$\n\n**The GCD** takes the smallest exponent of each shared prime: $$\\gcd=2^{2}\\cdot3=12 .$$\n\n**The LCM** takes the largest exponent of each prime occurring: $$\\operatorname{lcm}=2^{3}\\cdot3\\cdot5\\cdot7=840 .$$\n\n**Check with** $\\gcd\\cdot\\operatorname{lcm}=ab$: $$12\\cdot840=10\\,080=84\\cdot120\\ \\checkmark$$"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Сколько чисел от $1$ до $200$ делится на $7$? А сколько из них делится и на $7$, и на $5$?",
    "en": "How many numbers from $1$ to $200$ are divisible by $7$? And how many of those are divisible by both $7$ and $5$?"
   },
   "hint": {
    "ru": "Кратных $d$ в отрезке $[1,N]$ ровно $\\left\\lfloor N/d\\right\\rfloor$.",
    "en": "The multiples of $d$ in $[1,N]$ number $\\left\\lfloor N/d\\right\\rfloor$."
   },
   "sol": {
    "ru": "Кратные семи — это $7,14,\\dots$, и их количество равно $$\\left\\lfloor\\frac{200}{7}\\right\\rfloor=28$$ (действительно, $7\\cdot28=196\\le200<203$).\n\nДелиться и на $7$, и на $5$ — значит делиться на $\\operatorname{lcm}(5,7)=35$. Таких чисел $$\\left\\lfloor\\frac{200}{35}\\right\\rfloor=5$$ (а именно $35,70,105,140,175$).\n\n**Ответ:** $28$ и $5$.",
    "en": "The multiples of seven are $7,14,\\dots$, and there are $$\\left\\lfloor\\frac{200}{7}\\right\\rfloor=28$$ of them (indeed $7\\cdot28=196\\le200<203$).\n\nBeing divisible by both $7$ and $5$ means being divisible by $\\operatorname{lcm}(5,7)=35$, and there are $$\\left\\lfloor\\frac{200}{35}\\right\\rfloor=5$$ of those, namely $35,70,105,140,175$.\n\n**Answer:** $28$ and $5$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 1,
   "q": {
    "ru": "Найдите наименьшее натуральное число, которое при делении на $5$ даёт остаток $3$, а при делении на $7$ — остаток $4$.",
    "en": "Find the smallest positive integer leaving remainder $3$ on division by $5$ and remainder $4$ on division by $7$."
   },
   "hint": {
    "ru": "Выпишите числа первого вида и проверьте второе условие.",
    "en": "List the numbers of the first kind and test the second condition."
   },
   "sol": {
    "ru": "Числа, дающие остаток $3$ при делении на $5$, — это $$3,\\ 8,\\ 13,\\ 18,\\ 23,\\dots$$ Проверяем каждое на второе условие (остаток $4$ при делении на $7$): $$3\\to3,\\qquad 8\\to1,\\qquad 13\\to6,\\qquad 18\\to4\\ \\checkmark$$\n\n**Ответ:** $18$.\n\n*Замечание.* Все подходящие числа — это $18+35k$: шаг равен $\\operatorname{lcm}(5,7)=35$, потому что оба условия должны сохраниться. Следующие: $53$, $88$, $123$.",
    "en": "The numbers leaving remainder $3$ modulo $5$ are $$3,\\ 8,\\ 13,\\ 18,\\ 23,\\dots$$ Test each against the second condition (remainder $4$ modulo $7$): $$3\\to3,\\qquad 8\\to1,\\qquad 13\\to6,\\qquad 18\\to4\\ \\checkmark$$\n\n**Answer:** $18$.\n\n*Remark.* All the solutions are $18+35k$: the step is $\\operatorname{lcm}(5,7)=35$, since both conditions must survive. The next ones are $53$, $88$, $123$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Сумма цифр натурального числа равна $27$. Может ли это число быть простым?",
    "en": "The digits of a positive integer add up to $27$. Can that number be prime?"
   },
   "hint": {
    "ru": "Признак делимости на $9$.",
    "en": "The divisibility rule for $9$."
   },
   "sol": {
    "ru": "Число делится на $9$ тогда и только тогда, когда сумма его цифр делится на $9$. Здесь сумма цифр равна $27=9\\cdot3$, значит само число делится на $9$.\n\nЗначит у числа есть делитель $9$, отличный от $1$. Простым оно могло бы быть только если бы совпадало с $9$ — но $9=3\\cdot3$ не простое, да и сумма цифр девятки равна $9$, а не $27$.\n\nБолее того, наименьшее число с суммой цифр $27$ — это $999$, так что все такие числа не меньше $999$ и имеют собственный делитель $9$.\n\n**Ответ:** не может. $\\blacksquare$",
    "en": "A number is divisible by $9$ exactly when its digit sum is. Here the digit sum is $27=9\\cdot3$, so the number itself is divisible by $9$.\n\nIt therefore has a divisor $9$ other than $1$. It could only be prime if it equalled $9$ — but $9=3\\cdot3$ is not prime, and the digit sum of $9$ is $9$, not $27$.\n\nIndeed the smallest number with digit sum $27$ is $999$, so every such number is at least $999$ and has the proper divisor $9$.\n\n**Answer:** it cannot. $\\blacksquare$"
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 1,
   "q": {
    "ru": "Сколько натуральных делителей у числа $84$ и чему равна их сумма?",
    "en": "How many positive divisors has $84$, and what is their sum?"
   },
   "hint": {
    "ru": "Из разложения $84=2^{2}\\cdot3\\cdot7$ читаются обе величины.",
    "en": "Both quantities are read off the factorisation $84=2^{2}\\cdot3\\cdot7$."
   },
   "sol": {
    "ru": "Разложение: $84=2^{2}\\cdot3^{1}\\cdot7^{1}$.\n\n**Количество делителей.** Каждый делитель имеет вид $2^{a}3^{b}7^{c}$, где $0\\le a\\le2$, $0\\le b\\le1$, $0\\le c\\le1$. По правилу произведения $$\\tau(84)=(2+1)(1+1)(1+1)=12 .$$\n\n**Сумма делителей.** Раскрыв скобки в произведении $$\\left(1+2+4\\right)\\left(1+3\\right)\\left(1+7\\right),$$ мы получим каждый делитель ровно один раз. Значит $$\\sigma(84)=7\\cdot4\\cdot8=224 .$$\n\n**Проверка перечислением:** $1,2,3,4,6,7,12,14,21,28,42,84$ — двенадцать чисел, и их сумма равна $224$ ✓",
    "en": "The factorisation is $84=2^{2}\\cdot3^{1}\\cdot7^{1}$.\n\n**The count.** Every divisor is $2^{a}3^{b}7^{c}$ with $0\\le a\\le2$, $0\\le b\\le1$, $0\\le c\\le1$, so by the product rule $$\\tau(84)=(2+1)(1+1)(1+1)=12 .$$\n\n**The sum.** Expanding $$\\left(1+2+4\\right)\\left(1+3\\right)\\left(1+7\\right)$$ produces each divisor exactly once, so $$\\sigma(84)=7\\cdot4\\cdot8=224 .$$\n\n**Check by listing:** $1,2,3,4,6,7,12,14,21,28,42,84$ — twelve numbers adding to $224$ ✓"
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $2^{2n+1}+3^{2n+1}$ делится на $5$ при любом целом $n\\ge0$.",
    "en": "Prove that $2^{2n+1}+3^{2n+1}$ is divisible by $5$ for every integer $n\\ge0$."
   },
   "hint": {
    "ru": "При нечётном показателе $a+b$ делит $a^{k}+b^{k}$ — или возьмите модуль $5$.",
    "en": "For an odd exponent $a+b$ divides $a^{k}+b^{k}$ — or take remainders modulo $5$."
   },
   "sol": {
    "ru": "**Способ 1: тождество.** Показатель $2n+1$ нечётен, а при нечётном $k$ $$a^{k}+b^{k}=(a+b)\\left(a^{k-1}-a^{k-2}b+\\dots+b^{k-1}\\right).$$ Подставляя $a=2$, $b=3$, получаем множитель $a+b=5$, а вторая скобка — целое число. Значит вся сумма делится на $5$.\n\n**Способ 2: остатки.** По модулю $5$ имеем $3\\equiv-2$, поэтому $$2^{2n+1}+3^{2n+1}\\equiv2^{2n+1}+(-2)^{2n+1}=2^{2n+1}-2^{2n+1}=0\\pmod5 ,$$ где мы воспользовались нечётностью показателя. $\\blacksquare$\n\n**Проверка:** $n=0$ даёт $2+3=5$ ✓, $n=1$ даёт $8+27=35$ ✓, $n=2$ даёт $32+243=275=5\\cdot55$ ✓",
    "en": "**Way 1: an identity.** The exponent $2n+1$ is odd, and for odd $k$ $$a^{k}+b^{k}=(a+b)\\left(a^{k-1}-a^{k-2}b+\\dots+b^{k-1}\\right).$$ With $a=2$, $b=3$ the factor $a+b=5$ comes out and the bracket is an integer, so the whole sum is divisible by $5$.\n\n**Way 2: remainders.** Modulo $5$ we have $3\\equiv-2$, so $$2^{2n+1}+3^{2n+1}\\equiv2^{2n+1}+(-2)^{2n+1}=2^{2n+1}-2^{2n+1}=0\\pmod5 ,$$ using that the exponent is odd. $\\blacksquare$\n\n**Check:** $n=0$ gives $2+3=5$ ✓, $n=1$ gives $8+27=35$ ✓, $n=2$ gives $32+243=275=5\\cdot55$ ✓"
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Чему может быть равен $\\gcd(n,\\,n+2)$ для натурального $n$? Разберите все случаи.",
    "en": "What values can $\\gcd(n,\\,n+2)$ take for a positive integer $n$? Consider all cases."
   },
   "hint": {
    "ru": "Общий делитель делит и разность.",
    "en": "A common divisor also divides the difference."
   },
   "sol": {
    "ru": "Пусть $d=\\gcd(n,n+2)$. Тогда $d$ делит оба числа, а значит и их разность: $$d\\ \\big|\\ (n+2)-n=2 .$$ Поэтому $d\\in\\{1,2\\}$.\n\n**Когда $d=2$.** Двойка делит $n$ и $n+2$ ровно тогда, когда $n$ чётно. Значит при чётном $n$ имеем $d=2$.\n\n**Когда $d=1$.** При нечётном $n$ двойка не делит $n$, поэтому остаётся $d=1$.\n\n**Ответ:** $\\gcd(n,n+2)=2$ при чётном $n$ и $1$ при нечётном. $\\blacksquare$\n\n*Проверка:* $\\gcd(6,8)=2$ ✓, $\\gcd(7,9)=1$ ✓",
    "en": "Let $d=\\gcd(n,n+2)$. It divides both numbers, hence their difference: $$d\\ \\big|\\ (n+2)-n=2 ,$$ so $d\\in\\{1,2\\}$.\n\n**When $d=2$.** Two divides $n$ and $n+2$ exactly when $n$ is even, so even $n$ gives $d=2$.\n\n**When $d=1$.** For odd $n$ two does not divide $n$, leaving $d=1$.\n\n**Answer:** $\\gcd(n,n+2)=2$ for even $n$ and $1$ for odd $n$. $\\blacksquare$\n\n*Check:* $\\gcd(6,8)=2$ ✓, $\\gcd(7,9)=1$ ✓"
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите все натуральные $n$, для которых $n+1$ делит $n^{2}+1$.",
    "en": "Find all positive integers $n$ for which $n+1$ divides $n^{2}+1$."
   },
   "hint": {
    "ru": "Выделите из $n^{2}+1$ часть, кратную $n+1$.",
    "en": "Split off from $n^{2}+1$ the part that is a multiple of $n+1$."
   },
   "sol": {
    "ru": "Запишем $$n^{2}+1=\\left(n^{2}-1\\right)+2=(n-1)(n+1)+2 .$$ Первое слагаемое делится на $n+1$, поэтому $$n+1\\ \\big|\\ n^{2}+1\\quad\\Longleftrightarrow\\quad n+1\\ \\big|\\ 2 .$$\n\nДелители двойки среди чисел вида $n+1$ при натуральном $n\\ge1$: только $n+1=2$, то есть $n=1$.\n\n**Проверка:** при $n=1$ имеем $n+1=2$ и $n^{2}+1=2$, и $2\\mid2$ ✓\n\n**Ответ:** $n=1$. *(Если допускать $n=0$, подходит и оно: $1\\mid1$.)*",
    "en": "Write $$n^{2}+1=\\left(n^{2}-1\\right)+2=(n-1)(n+1)+2 .$$ The first term is a multiple of $n+1$, so $$n+1\\ \\big|\\ n^{2}+1\\quad\\Longleftrightarrow\\quad n+1\\ \\big|\\ 2 .$$\n\nAmong the numbers $n+1$ with $n\\ge1$, only $n+1=2$ divides two, that is $n=1$.\n\n**Check:** at $n=1$ we have $n+1=2$ and $n^{2}+1=2$, and $2\\mid2$ ✓\n\n**Answer:** $n=1$. *(Allowing $n=0$ it works too: $1\\mid1$.)*"
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что среди любых $n$ подряд идущих целых чисел ровно одно делится на $n$.",
    "en": "Prove that among any $n$ consecutive integers exactly one is divisible by $n$."
   },
   "hint": {
    "ru": "Посмотрите на их остатки при делении на $n$.",
    "en": "Look at their remainders on division by $n$."
   },
   "sol": {
    "ru": "Пусть числа равны $$a,\\ a+1,\\ a+2,\\ \\dots,\\ a+n-1 .$$\n\n**Все остатки различны.** Если бы два из них давали одинаковый остаток при делении на $n$, то $n$ делило бы их разность. Но разность любых двух из этих чисел по модулю меньше $n$ и не равна нулю, значит на $n$ делиться не может. Противоречие.\n\n**Остатков ровно $n$.** Различных остатков при делении на $n$ бывает ровно $n$ штук: $0,1,\\dots,n-1$. У нас $n$ чисел с попарно различными остатками, значит каждый остаток встречается **ровно один раз**.\n\nВ частности, ровно одно число даёт остаток $0$ — то есть делится на $n$. $\\blacksquare$\n\n*Следствие.* Произведение $n$ подряд идущих целых чисел делится на $n$. (На самом деле верно и большее: оно делится на $n!$.)",
    "en": "Let the numbers be $$a,\\ a+1,\\ a+2,\\ \\dots,\\ a+n-1 .$$\n\n**All the remainders differ.** If two of them left the same remainder modulo $n$, then $n$ would divide their difference. But the difference of any two of these numbers is non-zero and smaller than $n$ in absolute value, so it cannot be a multiple of $n$. Contradiction.\n\n**There are exactly $n$ remainders.** Modulo $n$ there are exactly $n$ possible remainders $0,1,\\dots,n-1$. We have $n$ numbers with pairwise different remainders, so each remainder occurs **exactly once**.\n\nIn particular exactly one number leaves remainder $0$ — that is, is divisible by $n$. $\\blacksquare$\n\n*Corollary.* A product of $n$ consecutive integers is divisible by $n$. (In fact more is true: it is divisible by $n!$.)"
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите наименьшее натуральное число, у которого ровно $12$ натуральных делителей.",
    "en": "Find the smallest positive integer with exactly $12$ positive divisors."
   },
   "hint": {
    "ru": "Число делителей равно $(a_1+1)(a_2+1)\\cdots$; переберите разложения числа $12$.",
    "en": "The divisor count is $(a_1+1)(a_2+1)\\cdots$; run through the factorisations of $12$."
   },
   "sol": {
    "ru": "Если $N=p_1^{a_1}p_2^{a_2}\\cdots$, то $\\tau(N)=\\left(a_1+1\\right)\\left(a_2+1\\right)\\cdots$. Значит нам нужно разложить $12$ в произведение множителей, каждый из которых больше единицы, и выбрать показатели.\n\nЧтобы число было наименьшим, **бо́льшие показатели ставят к меньшим простым**. Переберём разложения:\n\n$12$ $\\to$ показатель $11$: $\\ 2^{11}=2048$;\n\n$6\\cdot2$ $\\to$ показатели $5,1$: $\\ 2^{5}\\cdot3=96$;\n\n$4\\cdot3$ $\\to$ показатели $3,2$: $\\ 2^{3}\\cdot3^{2}=72$;\n\n$3\\cdot2\\cdot2$ $\\to$ показатели $2,1,1$: $\\ 2^{2}\\cdot3\\cdot5=60$;\n\n$2\\cdot2\\cdot3$ — то же самое с точностью до порядка, но показатель $2$ выгоднее отдать двойке, что уже учтено.\n\nНаименьшее из полученных: $$60 .$$\n\n**Проверка:** делители $60$ — это $1,2,3,4,5,6,10,12,15,20,30,60$ — ровно двенадцать ✓\n\n**Ответ:** $60$.",
    "en": "If $N=p_1^{a_1}p_2^{a_2}\\cdots$ then $\\tau(N)=\\left(a_1+1\\right)\\left(a_2+1\\right)\\cdots$. So we must write $12$ as a product of factors greater than one and read off the exponents.\n\nTo make the number smallest, **the larger exponents go on the smaller primes**. Run through the factorisations:\n\n$12$ $\\to$ exponent $11$: $\\ 2^{11}=2048$;\n\n$6\\cdot2$ $\\to$ exponents $5,1$: $\\ 2^{5}\\cdot3=96$;\n\n$4\\cdot3$ $\\to$ exponents $3,2$: $\\ 2^{3}\\cdot3^{2}=72$;\n\n$3\\cdot2\\cdot2$ $\\to$ exponents $2,1,1$: $\\ 2^{2}\\cdot3\\cdot5=60$.\n\nThe smallest of these is $$60 .$$\n\n**Check:** the divisors of $60$ are $1,2,3,4,5,6,10,12,15,20,30,60$ — exactly twelve ✓\n\n**Answer:** $60$."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите все пары натуральных чисел $(a,b)$, для которых $\\gcd(a,b)=6$ и $\\operatorname{lcm}(a,b)=36$.",
    "en": "Find all pairs of positive integers $(a,b)$ with $\\gcd(a,b)=6$ and $\\operatorname{lcm}(a,b)=36$."
   },
   "hint": {
    "ru": "Запишите $a=6x$, $b=6y$ со взаимно простыми $x,y$.",
    "en": "Write $a=6x$, $b=6y$ with $x,y$ coprime."
   },
   "sol": {
    "ru": "Так как $\\gcd(a,b)=6$, можно записать $$a=6x,\\qquad b=6y,\\qquad \\gcd(x,y)=1 .$$\n\nДля таких чисел $$\\operatorname{lcm}(a,b)=6xy .$$ (Действительно, $\\operatorname{lcm}=\\dfrac{ab}{\\gcd}=\\dfrac{36xy}{6}=6xy$.)\n\nУсловие $\\operatorname{lcm}=36$ даёт $6xy=36$, то есть $$xy=6,\\qquad \\gcd(x,y)=1 .$$\n\nПары взаимно простых чисел с произведением $6$: $$(1,6),\\ (6,1),\\ (2,3),\\ (3,2)$$ — пара $(x,y)$ вида $(6,1)$ и т. д.; варианта с общим множителем здесь нет.\n\nВозвращаясь к $a=6x$, $b=6y$: $$(6,36),\\ (36,6),\\ (12,18),\\ (18,12).$$\n\n**Проверка** для $(12,18)$: $\\gcd=6$ ✓, $\\operatorname{lcm}=36$ ✓\n\n**Ответ:** четыре пары, перечисленные выше.",
    "en": "Since $\\gcd(a,b)=6$ we may write $$a=6x,\\qquad b=6y,\\qquad \\gcd(x,y)=1 .$$\n\nFor such numbers $$\\operatorname{lcm}(a,b)=6xy$$ (indeed $\\operatorname{lcm}=\\dfrac{ab}{\\gcd}=\\dfrac{36xy}{6}=6xy$).\n\nThe condition $\\operatorname{lcm}=36$ gives $6xy=36$, that is $$xy=6,\\qquad \\gcd(x,y)=1 .$$\n\nThe coprime pairs with product $6$ are $$(1,6),\\ (6,1),\\ (2,3),\\ (3,2).$$\n\nBack to $a=6x$, $b=6y$: $$(6,36),\\ (36,6),\\ (12,18),\\ (18,12).$$\n\n**Check** for $(12,18)$: $\\gcd=6$ ✓, $\\operatorname{lcm}=36$ ✓\n\n**Answer:** the four pairs above."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $n^{2}-1$ делится на $8$ при любом нечётном $n$.",
    "en": "Prove that $n^{2}-1$ is divisible by $8$ for every odd $n$."
   },
   "hint": {
    "ru": "Разложите на множители и посмотрите на два соседних чётных числа.",
    "en": "Factor it and look at two consecutive even numbers."
   },
   "sol": {
    "ru": "Пусть $n=2k+1$. Тогда $$n^{2}-1=(n-1)(n+1)=2k\\cdot(2k+2)=4k(k+1).$$\n\nЧисла $k$ и $k+1$ идут подряд, поэтому одно из них чётно, и произведение $k(k+1)$ делится на $2$.\n\nЗначит $4k(k+1)$ делится на $4\\cdot2=8$. $\\blacksquare$\n\n*Проверка:* $n=3$ даёт $8$ ✓, $n=5$ даёт $24=8\\cdot3$ ✓, $n=7$ даёт $48=8\\cdot6$ ✓\n\n*Усиление.* Если вдобавок $3\\nmid n$, то $n^{2}-1$ делится и на $3$, а значит на $24$ — именно этот факт нужен в задачах о простых числах, больших трёх.",
    "en": "Let $n=2k+1$. Then $$n^{2}-1=(n-1)(n+1)=2k\\cdot(2k+2)=4k(k+1).$$\n\nThe numbers $k$ and $k+1$ are consecutive, so one of them is even and the product $k(k+1)$ is divisible by $2$.\n\nHence $4k(k+1)$ is divisible by $4\\cdot2=8$. $\\blacksquare$\n\n*Check:* $n=3$ gives $8$ ✓, $n=5$ gives $24=8\\cdot3$ ✓, $n=7$ gives $48=8\\cdot6$ ✓\n\n*Sharpening.* If moreover $3\\nmid n$ then $n^{2}-1$ is divisible by $3$ as well, hence by $24$ — exactly the fact needed in problems about primes greater than three."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите $\\operatorname{lcm}(1,2,3,\\dots,10)$.",
    "en": "Find $\\operatorname{lcm}(1,2,3,\\dots,10)$."
   },
   "hint": {
    "ru": "Возьмите каждое простое до $10$ в наибольшей степени, не превосходящей $10$.",
    "en": "Take each prime up to $10$ to the highest power not exceeding $10$."
   },
   "sol": {
    "ru": "НОК содержит каждое простое $p\\le10$ в наибольшей степени $p^{k}\\le10$:\n\n$\\bullet$ $p=2$: наибольшая степень двойки, не превосходящая $10$, — это $8=2^{3}$;\n\n$\\bullet$ $p=3$: это $9=3^{2}$;\n\n$\\bullet$ $p=5$: это $5$;\n\n$\\bullet$ $p=7$: это $7$.\n\nЗначит $$\\operatorname{lcm}(1,\\dots,10)=2^{3}\\cdot3^{2}\\cdot5\\cdot7=8\\cdot9\\cdot35=2520 .$$\n\n**Проверка:** $2520$ делится на каждое из чисел $1,\\dots,10$ ✓ А, например, $1260$ уже не делится на $8$.\n\n**Ответ:** $2520$.",
    "en": "The LCM contains each prime $p\\le10$ to the highest power $p^{k}\\le10$:\n\n$\\bullet$ $p=2$: the highest power of two not exceeding $10$ is $8=2^{3}$;\n\n$\\bullet$ $p=3$: it is $9=3^{2}$;\n\n$\\bullet$ $p=5$: it is $5$;\n\n$\\bullet$ $p=7$: it is $7$.\n\nSo $$\\operatorname{lcm}(1,\\dots,10)=2^{3}\\cdot3^{2}\\cdot5\\cdot7=8\\cdot9\\cdot35=2520 .$$\n\n**Check:** $2520$ is divisible by each of $1,\\dots,10$ ✓ while $1260$, for instance, is not divisible by $8$.\n\n**Answer:** $2520$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $n(n+1)(2n+1)$ делится на $6$ при любом целом $n$.",
    "en": "Prove that $n(n+1)(2n+1)$ is divisible by $6$ for every integer $n$."
   },
   "hint": {
    "ru": "Отдельно на $2$ и отдельно на $3$.",
    "en": "Handle the factor $2$ and the factor $3$ separately."
   },
   "sol": {
    "ru": "**Делимость на $2$.** Числа $n$ и $n+1$ идут подряд, значит одно из них чётно, и произведение делится на $2$.\n\n**Делимость на $3$.** Разберём остаток $n$ по модулю $3$.\n\n$n\\equiv0$: множитель $n$ делится на $3$;\n\n$n\\equiv1$: тогда $2n+1\\equiv2+1=3\\equiv0$;\n\n$n\\equiv2$: тогда $n+1\\equiv3\\equiv0$.\n\nВо всех случаях один из множителей делится на $3$.\n\n**Вывод.** Произведение делится на $2$ и на $3$, а эти числа взаимно просты, значит оно делится на $6$. $\\blacksquare$\n\n*Где это встречается.* Формула суммы квадратов $$1^{2}+2^{2}+\\dots+n^{2}=\\frac{n(n+1)(2n+1)}{6}$$ имеет смысл только потому, что числитель всегда делится на $6$.",
    "en": "**Divisibility by $2$.** The numbers $n$ and $n+1$ are consecutive, so one is even and the product is divisible by $2$.\n\n**Divisibility by $3$.** Split by $n$ modulo $3$.\n\n$n\\equiv0$: the factor $n$ is divisible by $3$;\n\n$n\\equiv1$: then $2n+1\\equiv2+1=3\\equiv0$;\n\n$n\\equiv2$: then $n+1\\equiv3\\equiv0$.\n\nIn every case one factor is divisible by $3$.\n\n**Conclusion.** The product is divisible by $2$ and by $3$, which are coprime, hence by $6$. $\\blacksquare$\n\n*Where this shows up.* The formula $$1^{2}+2^{2}+\\dots+n^{2}=\\frac{n(n+1)(2n+1)}{6}$$ makes sense only because the numerator is always divisible by $6$."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 2,
   "q": {
    "ru": "Сколькими нулями оканчивается число $50!$?",
    "en": "In how many zeros does $50!$ end?"
   },
   "hint": {
    "ru": "Считайте пятёрки, не забыв про $25$ и $50$.",
    "en": "Count the fives, remembering $25$ and $50$."
   },
   "sol": {
    "ru": "Число нулей равно показателю пятёрки в разложении $50!$ (двоек заведомо больше).\n\n$$v_5(50!)=\\left\\lfloor\\frac{50}{5}\\right\\rfloor+\\left\\lfloor\\frac{50}{25}\\right\\rfloor=10+2=12 .$$\n\nПервое слагаемое считает числа $5,10,\\dots,50$ — каждое даёт хотя бы одну пятёрку. Второе добавляет **вторую** пятёрку для чисел $25$ и $50$.\n\n**Ответ:** $12$ нулей.\n\n*Типичная ошибка* — остановиться на $10$, забыв, что $25=5^{2}$ и $50=2\\cdot5^{2}$ дают по две пятёрки.",
    "en": "The number of zeros is the exponent of five in $50!$ (twos are certainly more plentiful).\n\n$$v_5(50!)=\\left\\lfloor\\frac{50}{5}\\right\\rfloor+\\left\\lfloor\\frac{50}{25}\\right\\rfloor=10+2=12 .$$\n\nThe first term counts $5,10,\\dots,50$, each giving at least one five. The second adds the **second** five for $25$ and $50$.\n\n**Answer:** $12$ zeros.\n\n*The usual slip* is to stop at $10$, forgetting that $25=5^{2}$ and $50=2\\cdot5^{2}$ each carry two fives."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Найдите все натуральные $n$, при которых $2^{n}-1$ делится на $7$.",
    "en": "Find all positive integers $n$ for which $2^{n}-1$ is divisible by $7$."
   },
   "hint": {
    "ru": "Выпишите степени двойки по модулю $7$.",
    "en": "List the powers of two modulo $7$."
   },
   "sol": {
    "ru": "Посчитаем степени двойки по модулю $7$: $$2^{1}\\equiv2,\\qquad 2^{2}\\equiv4,\\qquad 2^{3}\\equiv8\\equiv1 .$$ Дальше всё повторяется с периодом $3$, потому что умножение на $2^{3}\\equiv1$ ничего не меняет: $$2^{4}\\equiv2,\\quad 2^{5}\\equiv4,\\quad 2^{6}\\equiv1,\\ \\dots$$\n\nЗначит $$2^{n}\\equiv1\\pmod7\\quad\\Longleftrightarrow\\quad n\\equiv0\\pmod3 .$$\n\n**Ответ:** ровно те $n$, которые делятся на $3$.\n\n**Проверка:** $2^{3}-1=7$ ✓, $2^{6}-1=63=7\\cdot9$ ✓, а $2^{4}-1=15$ на $7$ не делится ✓\n\n*Замечание.* Число $3$ здесь — **порядок** двойки по модулю $7$. По малой теореме Ферма $2^{6}\\equiv1$, и порядок обязан делить $6$; из делителей $1,2,3,6$ подходит наименьший, равный $3$.",
    "en": "Compute the powers of two modulo $7$: $$2^{1}\\equiv2,\\qquad 2^{2}\\equiv4,\\qquad 2^{3}\\equiv8\\equiv1 .$$ From there everything repeats with period $3$, since multiplying by $2^{3}\\equiv1$ changes nothing: $$2^{4}\\equiv2,\\quad 2^{5}\\equiv4,\\quad 2^{6}\\equiv1,\\ \\dots$$\n\nHence $$2^{n}\\equiv1\\pmod7\\quad\\Longleftrightarrow\\quad n\\equiv0\\pmod3 .$$\n\n**Answer:** exactly the multiples of $3$.\n\n**Check:** $2^{3}-1=7$ ✓, $2^{6}-1=63=7\\cdot9$ ✓, while $2^{4}-1=15$ is not divisible by $7$ ✓\n\n*Remark.* The number $3$ here is the **order** of two modulo $7$. Fermat’s little theorem gives $2^{6}\\equiv1$, so the order must divide $6$; among the divisors $1,2,3,6$ the smallest that works is $3$."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что если $\\gcd(a,b)=1$, то $\\gcd(a+b,\\,ab)=1$.",
    "en": "Prove that if $\\gcd(a,b)=1$ then $\\gcd(a+b,\\,ab)=1$."
   },
   "hint": {
    "ru": "Возьмите общий простой делитель и вспомните, что $p\\mid ab$ влечёт $p\\mid a$ или $p\\mid b$.",
    "en": "Take a common prime divisor and recall that $p\\mid ab$ forces $p\\mid a$ or $p\\mid b$."
   },
   "sol": {
    "ru": "Предположим противное: пусть $d=\\gcd(a+b,ab)>1$. Тогда у $d$ есть простой делитель $p$, и $$p\\ \\big|\\ a+b,\\qquad p\\ \\big|\\ ab .$$\n\n**Ключевой шаг.** Число $p$ простое и делит произведение $ab$, значит $p$ делит один из множителей. Пусть для определённости $$p\\ \\big|\\ a$$ (случай $p\\mid b$ разбирается дословно так же).\n\n**Приходим к противоречию.** Из $p\\mid a+b$ и $p\\mid a$ следует $$p\\ \\big|\\ (a+b)-a=b .$$ Значит $p$ — общий делитель чисел $a$ и $b$, то есть $p$ делит $\\gcd(a,b)=1$. Но простое число не может делить единицу.\n\nПротиворечие показывает, что $\\gcd(a+b,ab)=1$. $\\blacksquare$\n\n*Проверка:* $a=4$, $b=9$ (взаимно простые): $\\gcd(13,36)=1$ ✓ А для $a=4$, $b=6$ (не взаимно простых) уже $\\gcd(10,24)=2$.",
    "en": "Suppose not: let $d=\\gcd(a+b,ab)>1$. Then $d$ has a prime divisor $p$ with $$p\\ \\big|\\ a+b,\\qquad p\\ \\big|\\ ab .$$\n\n**The key step.** As $p$ is prime and divides the product $ab$, it divides one of the factors. Say $$p\\ \\big|\\ a$$ (the case $p\\mid b$ is word for word the same).\n\n**The contradiction.** From $p\\mid a+b$ and $p\\mid a$ we get $$p\\ \\big|\\ (a+b)-a=b .$$ So $p$ is a common divisor of $a$ and $b$, that is $p$ divides $\\gcd(a,b)=1$. But a prime cannot divide one.\n\nThe contradiction shows $\\gcd(a+b,ab)=1$. $\\blacksquare$\n\n*Check:* $a=4$, $b=9$ (coprime): $\\gcd(13,36)=1$ ✓ For $a=4$, $b=6$ (not coprime) we get $\\gcd(10,24)=2$."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Найдите все пары натуральных чисел $(a,b)$, для которых $a+b=100$ и $\\gcd(a,b)=10$.",
    "en": "Find all pairs of positive integers $(a,b)$ with $a+b=100$ and $\\gcd(a,b)=10$."
   },
   "hint": {
    "ru": "Запишите $a=10x$, $b=10y$ и переведите оба условия на $x,y$.",
    "en": "Write $a=10x$, $b=10y$ and translate both conditions to $x,y$."
   },
   "sol": {
    "ru": "Из $\\gcd(a,b)=10$ следует $$a=10x,\\qquad b=10y,\\qquad \\gcd(x,y)=1 .$$\n\nУсловие $a+b=100$ превращается в $$10x+10y=100\\quad\\Longrightarrow\\quad x+y=10 .$$\n\nОстаётся перебрать пары натуральных $x,y$ с суммой $10$ и проверить взаимную простоту: $$\\begin{array}{llll}(1,9)&\\gcd=1\\ \\checkmark & (2,8)&\\gcd=2\\ \\times\\\\ (3,7)&\\gcd=1\\ \\checkmark & (4,6)&\\gcd=2\\ \\times\\\\ (5,5)&\\gcd=5\\ \\times & (6,4)&\\times\\\\ (7,3)&\\checkmark & (8,2)&\\times\\\\ (9,1)&\\checkmark & &\\end{array}$$\n\nПодходят $(1,9),(3,7),(7,3),(9,1)$, откуда $$(a,b)=(10,90),\\ (30,70),\\ (70,30),\\ (90,10).$$\n\n**Проверка** для $(30,70)$: сумма $100$ ✓, $\\gcd(30,70)=10$ ✓\n\n**Ответ:** четыре пары.",
    "en": "From $\\gcd(a,b)=10$ we get $$a=10x,\\qquad b=10y,\\qquad \\gcd(x,y)=1 ,$$ and $a+b=100$ becomes $$10x+10y=100\\quad\\Longrightarrow\\quad x+y=10 .$$\n\nRun through the positive pairs with sum $10$ and test coprimality: $$\\begin{array}{llll}(1,9)&\\gcd=1\\ \\checkmark & (2,8)&\\gcd=2\\ \\times\\\\ (3,7)&\\gcd=1\\ \\checkmark & (4,6)&\\gcd=2\\ \\times\\\\ (5,5)&\\gcd=5\\ \\times & (6,4)&\\times\\\\ (7,3)&\\checkmark & (8,2)&\\times\\\\ (9,1)&\\checkmark & &\\end{array}$$\n\nThe survivors $(1,9),(3,7),(7,3),(9,1)$ give $$(a,b)=(10,90),\\ (30,70),\\ (70,30),\\ (90,10).$$\n\n**Check** for $(30,70)$: the sum is $100$ ✓ and $\\gcd(30,70)=10$ ✓\n\n**Answer:** four pairs."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Найдите наименьшее натуральное $n$, при котором $n!$ делится на $2^{10}$.",
    "en": "Find the smallest positive integer $n$ for which $n!$ is divisible by $2^{10}$."
   },
   "hint": {
    "ru": "Показатель двойки в $n!$ равен $\\left\\lfloor n/2\\right\\rfloor+\\left\\lfloor n/4\\right\\rfloor+\\dots$",
    "en": "The exponent of two in $n!$ is $\\left\\lfloor n/2\\right\\rfloor+\\left\\lfloor n/4\\right\\rfloor+\\dots$"
   },
   "sol": {
    "ru": "Показатель двойки в факториале равен $$v_2(n!)=\\left\\lfloor\\frac n2\\right\\rfloor+\\left\\lfloor\\frac n4\\right\\rfloor+\\left\\lfloor\\frac n8\\right\\rfloor+\\dots$$\n\nСчитаем по возрастанию $n$:\n\n$v_2(10!)=5+2+1=8$ — мало;\n\n$v_2(11!)=5+2+1=8$ — мало (одиннадцать нечётно, ничего не добавилось);\n\n$v_2(12!)=6+3+1=10$ ✓\n\n**Ответ:** $n=12$.\n\n*Почему скачок.* Переход от $11!$ к $12!$ добавляет множитель $12=2^{2}\\cdot3$, то есть сразу две двойки: $8+2=10$.",
    "en": "The exponent of two in a factorial is $$v_2(n!)=\\left\\lfloor\\frac n2\\right\\rfloor+\\left\\lfloor\\frac n4\\right\\rfloor+\\left\\lfloor\\frac n8\\right\\rfloor+\\dots$$\n\nWork upwards:\n\n$v_2(10!)=5+2+1=8$ — not enough;\n\n$v_2(11!)=5+2+1=8$ — still not (eleven is odd and adds nothing);\n\n$v_2(12!)=6+3+1=10$ ✓\n\n**Answer:** $n=12$.\n\n*Why the jump.* Going from $11!$ to $12!$ multiplies by $12=2^{2}\\cdot3$, contributing two twos at once: $8+2=10$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что $\\gcd(a,b)\\cdot\\operatorname{lcm}(a,b)=ab$ для любых натуральных $a$ и $b$.",
    "en": "Prove that $\\gcd(a,b)\\cdot\\operatorname{lcm}(a,b)=ab$ for all positive integers $a$ and $b$."
   },
   "hint": {
    "ru": "Сравните показатели каждого простого в обеих частях.",
    "en": "Compare the exponent of each prime on both sides."
   },
   "sol": {
    "ru": "Запишем оба числа через показатели простых: $$a=\\prod_p p^{\\alpha_p},\\qquad b=\\prod_p p^{\\beta_p},$$ где произведение берётся по всем простым, а почти все показатели нулевые.\n\n**Как устроены НОД и НОК.** Делитель числа $a$ — это в точности число вида $\\prod p^{\\gamma_p}$ с $\\gamma_p\\le\\alpha_p$. Поэтому общий делитель имеет показатели $\\gamma_p\\le\\min\\left(\\alpha_p,\\beta_p\\right)$, и наибольший из них — это $$\\gcd(a,b)=\\prod_p p^{\\min\\left(\\alpha_p,\\beta_p\\right)}.$$ Симметрично, общее кратное имеет показатели не меньше обоих, и наименьшее из них — $$\\operatorname{lcm}(a,b)=\\prod_p p^{\\max\\left(\\alpha_p,\\beta_p\\right)}.$$\n\n**Ключевое тождество для чисел.** Для любых двух чисел $$\\min(x,y)+\\max(x,y)=x+y ,$$ ведь меньшее и большее — это те же два числа, только переставленные.\n\n**Собираем.** Показатель простого $p$ в левой части равен $$\\min\\left(\\alpha_p,\\beta_p\\right)+\\max\\left(\\alpha_p,\\beta_p\\right)=\\alpha_p+\\beta_p ,$$ а это в точности показатель $p$ в произведении $ab$. Показатели совпали для каждого простого, значит числа равны. $\\blacksquare$\n\n*Проверка:* $a=12$, $b=18$: $\\gcd=6$, $\\operatorname{lcm}=36$, и $6\\cdot36=216=12\\cdot18$ ✓",
    "en": "Write both numbers by prime exponents: $$a=\\prod_p p^{\\alpha_p},\\qquad b=\\prod_p p^{\\beta_p},$$ the product running over all primes, almost all exponents being zero.\n\n**What the GCD and LCM are.** A divisor of $a$ is exactly a number $\\prod p^{\\gamma_p}$ with $\\gamma_p\\le\\alpha_p$. So a common divisor has exponents $\\gamma_p\\le\\min\\left(\\alpha_p,\\beta_p\\right)$, and the largest of them is $$\\gcd(a,b)=\\prod_p p^{\\min\\left(\\alpha_p,\\beta_p\\right)}.$$ Symmetrically a common multiple has exponents at least both, and the smallest is $$\\operatorname{lcm}(a,b)=\\prod_p p^{\\max\\left(\\alpha_p,\\beta_p\\right)}.$$\n\n**The key numerical identity.** For any two numbers $$\\min(x,y)+\\max(x,y)=x+y ,$$ since the smaller and the larger are the same two numbers rearranged.\n\n**Put it together.** The exponent of a prime $p$ on the left is $$\\min\\left(\\alpha_p,\\beta_p\\right)+\\max\\left(\\alpha_p,\\beta_p\\right)=\\alpha_p+\\beta_p ,$$ which is exactly its exponent in $ab$. The exponents agree for every prime, so the numbers are equal. $\\blacksquare$\n\n*Check:* $a=12$, $b=18$: $\\gcd=6$, $\\operatorname{lcm}=36$, and $6\\cdot36=216=12\\cdot18$ ✓"
   }
  },
  {
   "src": "Республиканский тур · уровень / Republic-round level",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что при $n\\ge2$ сумма $$1+\\frac12+\\frac13+\\dots+\\frac1n$$ не является целым числом.",
    "en": "Prove that for $n\\ge2$ the sum $$1+\\frac12+\\frac13+\\dots+\\frac1n$$ is not an integer."
   },
   "hint": {
    "ru": "Пусть $2^{k}$ — наибольшая степень двойки, не превосходящая $n$. Умножьте сумму на $\\operatorname{lcm}(1,\\dots,n)$.",
    "en": "Let $2^{k}$ be the largest power of two not exceeding $n$. Multiply the sum by $\\operatorname{lcm}(1,\\dots,n)$."
   },
   "sol": {
    "ru": "Обозначим сумму через $S$ и положим $L=\\operatorname{lcm}(1,2,\\dots,n)$.\n\n**Шаг 1: выделим особое слагаемое.** Пусть $2^{k}$ — наибольшая степень двойки, не превосходящая $n$; так как $n\\ge2$, имеем $k\\ge1$. Тогда $v_2(L)=k$: показатель двойки в НОК — это наибольший показатель двойки среди чисел $1,\\dots,n$.\n\n**Шаг 2: среди $1,\\dots,n$ ровно одно число делится на $2^{k}$.** Действительно, следующее кратное — это $2\\cdot2^{k}=2^{k+1}$, а оно больше $n$ по выбору $k$. Любое другое число вида $2^{k}\\cdot m$ с нечётным $m\\ge3$ тоже больше $n$, потому что $3\\cdot2^{k}>2^{k+1}>n$. Значит единственное такое число — само $2^{k}$.\n\n**Шаг 3: считаем чётность.** Умножим сумму на $L$: $$L\\cdot S=\\sum_{i=1}^{n}\\frac{L}{i}.$$ Все слагаемые целые. Для $i\\ne2^{k}$ имеем $v_2(i)<k$ (шаг 2), поэтому $$v_2\\!\\left(\\frac Li\\right)=k-v_2(i)\\ \\ge\\ 1 ,$$ то есть такое слагаемое **чётно**. А для $i=2^{k}$ получаем $v_2\\!\\left(L/2^{k}\\right)=0$, то есть это слагаемое **нечётно**.\n\nСумма одного нечётного числа и нескольких чётных нечётна, значит $$L\\cdot S\\ \\text{— нечётное число.}$$\n\n**Шаг 4: противоречие.** Если бы $S$ было целым, то $L\\cdot S$ делилось бы на $L$, а $L$ чётно (ведь $k\\ge1$). Тогда $L\\cdot S$ было бы чётным — противоречие с шагом 3.\n\nЗначит $S$ не целое. $\\blacksquare$\n\n*Проверка:* $1+\\tfrac12=\\tfrac32$, $1+\\tfrac12+\\tfrac13=\\tfrac{11}{6}$, $1+\\tfrac12+\\tfrac13+\\tfrac14=\\tfrac{25}{12}$ — все нецелые ✓",
    "en": "Write $S$ for the sum and put $L=\\operatorname{lcm}(1,2,\\dots,n)$.\n\n**Step 1: single out one term.** Let $2^{k}$ be the largest power of two not exceeding $n$; since $n\\ge2$ we have $k\\ge1$. Then $v_2(L)=k$: the exponent of two in the LCM is the largest exponent of two among $1,\\dots,n$.\n\n**Step 2: exactly one of $1,\\dots,n$ is divisible by $2^{k}$.** The next multiple would be $2\\cdot2^{k}=2^{k+1}$, which exceeds $n$ by the choice of $k$; and any other number $2^{k}\\cdot m$ with odd $m\\ge3$ also exceeds $n$, since $3\\cdot2^{k}>2^{k+1}>n$. So the only such number is $2^{k}$ itself.\n\n**Step 3: count parities.** Multiply the sum by $L$: $$L\\cdot S=\\sum_{i=1}^{n}\\frac{L}{i},$$ every term being an integer. For $i\\ne2^{k}$ we have $v_2(i)<k$ by Step 2, so $$v_2\\!\\left(\\frac Li\\right)=k-v_2(i)\\ \\ge\\ 1 ,$$ and that term is **even**. For $i=2^{k}$ we get $v_2\\!\\left(L/2^{k}\\right)=0$, so that term is **odd**.\n\nOne odd term plus several even ones is odd, so $$L\\cdot S\\ \\text{is an odd number.}$$\n\n**Step 4: the contradiction.** If $S$ were an integer then $L\\cdot S$ would be a multiple of $L$, and $L$ is even (as $k\\ge1$), making $L\\cdot S$ even — contradicting Step 3.\n\nHence $S$ is not an integer. $\\blacksquare$\n\n*Check:* $1+\\tfrac12=\\tfrac32$, $1+\\tfrac12+\\tfrac13=\\tfrac{11}{6}$, $1+\\tfrac12+\\tfrac13+\\tfrac14=\\tfrac{25}{12}$ — none an integer ✓"
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Найдите все натуральные $n$, для которых $n^{2}$ делит $(n+1)^{2}-1$.",
    "en": "Find all positive integers $n$ for which $n^{2}$ divides $(n+1)^{2}-1$."
   },
   "hint": {
    "ru": "Раскройте скобки — почти всё сократится.",
    "en": "Expand — almost everything cancels."
   },
   "sol": {
    "ru": "Раскроем: $$(n+1)^{2}-1=n^{2}+2n+1-1=n^{2}+2n .$$\n\nПервое слагаемое делится на $n^{2}$, поэтому $$n^{2}\\ \\big|\\ n^{2}+2n\\quad\\Longleftrightarrow\\quad n^{2}\\ \\big|\\ 2n .$$\n\nСократим на $n>0$: условие превращается в $$n\\ \\big|\\ 2 ,$$ откуда $n\\in\\{1,2\\}$.\n\n**Проверка.** При $n=1$: $(1+1)^{2}-1=3$ и $n^{2}=1$, делится ✓ При $n=2$: $(2+1)^{2}-1=8$ и $n^{2}=4$, и $4\\mid8$ ✓ При $n=3$: $15$ и $9$ — не делится ✓\n\n**Ответ:** $n=1$ и $n=2$.",
    "en": "Expand: $$(n+1)^{2}-1=n^{2}+2n+1-1=n^{2}+2n .$$\n\nThe first term is a multiple of $n^{2}$, so $$n^{2}\\ \\big|\\ n^{2}+2n\\quad\\Longleftrightarrow\\quad n^{2}\\ \\big|\\ 2n .$$\n\nCancelling $n>0$ turns the condition into $$n\\ \\big|\\ 2 ,$$ so $n\\in\\{1,2\\}$.\n\n**Check.** At $n=1$: $(1+1)^{2}-1=3$ and $n^{2}=1$, which divides ✓ At $n=2$: $(2+1)^{2}-1=8$ and $n^{2}=4$, and $4\\mid8$ ✓ At $n=3$: $15$ and $9$ — no ✓\n\n**Answer:** $n=1$ and $n=2$."
   }
  },
  {
   "src": "Республиканский тур · уровень / Republic-round level",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что для любого простого $p>3$ число $p^{2}-1$ делится на $24$.",
    "en": "Prove that for every prime $p>3$ the number $p^{2}-1$ is divisible by $24$."
   },
   "hint": {
    "ru": "$24=8\\cdot3$; докажите делимость на каждый множитель отдельно.",
    "en": "$24=8\\cdot3$; prove divisibility by each factor separately."
   },
   "sol": {
    "ru": "Разложим $$p^{2}-1=(p-1)(p+1).$$\n\n**Делимость на $8$.** Простое $p>3$ нечётно, поэтому $p-1$ и $p+1$ — два подряд идущих чётных числа. Одно из любых двух подряд идущих чётных чисел делится на $4$, а другое — на $2$. Значит их произведение делится на $4\\cdot2=8$.\n\n**Делимость на $3$.** Среди трёх подряд идущих чисел $p-1$, $p$, $p+1$ ровно одно делится на $3$. Но $p$ простое и больше трёх, значит $3\\nmid p$. Следовательно на $3$ делится $p-1$ или $p+1$, а с ними и произведение.\n\n**Вывод.** Числа $8$ и $3$ взаимно просты, поэтому $p^{2}-1$ делится на $24$. $\\blacksquare$\n\n**Проверка:** $p=5$: $24$ ✓ $\\quad p=7$: $48=24\\cdot2$ ✓ $\\quad p=11$: $120=24\\cdot5$ ✓ $\\quad p=13$: $168=24\\cdot7$ ✓\n\n*Где нужно условие $p>3$.* При $p=3$ получается $8$, что на $24$ не делится, а при $p=2$ — вовсе $3$.",
    "en": "Factor $$p^{2}-1=(p-1)(p+1).$$\n\n**Divisibility by $8$.** A prime $p>3$ is odd, so $p-1$ and $p+1$ are two consecutive even numbers. Of any two consecutive even numbers one is divisible by $4$ and the other by $2$, so their product is divisible by $4\\cdot2=8$.\n\n**Divisibility by $3$.** Among the three consecutive integers $p-1$, $p$, $p+1$ exactly one is divisible by $3$. But $p$ is prime and greater than three, so $3\\nmid p$. Hence $3$ divides $p-1$ or $p+1$, and with it the product.\n\n**Conclusion.** As $8$ and $3$ are coprime, $p^{2}-1$ is divisible by $24$. $\\blacksquare$\n\n**Check:** $p=5$: $24$ ✓ $\\quad p=7$: $48=24\\cdot2$ ✓ $\\quad p=11$: $120=24\\cdot5$ ✓ $\\quad p=13$: $168=24\\cdot7$ ✓\n\n*Where $p>3$ is needed.* At $p=3$ we get $8$, not a multiple of $24$; at $p=2$ we get $3$."
   }
  },
  {
   "src": "Республиканский тур · уровень / Republic-round level",
   "lvl": 3,
   "q": {
    "ru": "Найдите наибольшее натуральное число, на которое делится $n^{5}-n$ при **всех** целых $n$.",
    "en": "Find the largest positive integer that divides $n^{5}-n$ for **every** integer $n$."
   },
   "hint": {
    "ru": "Посчитайте несколько значений и найдите их НОД, а потом докажите делимость в общем виде.",
    "en": "Compute a few values and take their GCD, then prove the divisibility in general."
   },
   "sol": {
    "ru": "**Шаг 1: находим кандидата.** Подставим малые $n$: $$n=2:\\ 32-2=30,\\qquad n=3:\\ 243-3=240,\\qquad n=4:\\ 1024-4=1020 .$$ Искомое число делит каждое из них, значит делит и их НОД: $$\\gcd(30,240,1020)=30 .$$ Больше $30$ ответ быть не может.\n\n**Шаг 2: проверяем, что $30$ подходит всегда.** Разложим $$n^{5}-n=n\\left(n^{4}-1\\right)=n\\left(n^{2}-1\\right)\\left(n^{2}+1\\right)=(n-1)\\,n\\,(n+1)\\left(n^{2}+1\\right).$$\n\n*Делимость на $2$ и на $3$:* множитель $(n-1)n(n+1)$ — произведение трёх подряд идущих чисел, среди них есть чётное и есть кратное трём.\n\n*Делимость на $5$:* разберём остаток $n$ по модулю $5$. Если $n\\equiv0,\\pm1$, то на $5$ делится один из множителей $n$, $n-1$, $n+1$. Если же $n\\equiv\\pm2$, то $n^{2}\\equiv4$ и $$n^{2}+1\\equiv5\\equiv0\\pmod5 .$$ Других остатков нет.\n\nЧисла $2$, $3$, $5$ попарно взаимно просты, поэтому $30\\mid n^{5}-n$ при всех целых $n$.\n\n**Ответ:** $30$. $\\blacksquare$",
    "en": "**Step 1: find the candidate.** Substitute small $n$: $$n=2:\\ 32-2=30,\\qquad n=3:\\ 243-3=240,\\qquad n=4:\\ 1024-4=1020 .$$ The number we want divides each of these, hence divides their GCD: $$\\gcd(30,240,1020)=30 ,$$ so the answer cannot exceed $30$.\n\n**Step 2: check that $30$ always works.** Factor $$n^{5}-n=n\\left(n^{4}-1\\right)=n\\left(n^{2}-1\\right)\\left(n^{2}+1\\right)=(n-1)\\,n\\,(n+1)\\left(n^{2}+1\\right).$$\n\n*Divisibility by $2$ and $3$:* the factor $(n-1)n(n+1)$ is a product of three consecutive integers, containing an even one and a multiple of three.\n\n*Divisibility by $5$:* split by $n$ modulo $5$. If $n\\equiv0,\\pm1$ then one of $n$, $n-1$, $n+1$ is divisible by $5$. If $n\\equiv\\pm2$ then $n^{2}\\equiv4$ and $$n^{2}+1\\equiv5\\equiv0\\pmod5 .$$ There are no other cases.\n\nAs $2$, $3$, $5$ are pairwise coprime, $30\\mid n^{5}-n$ for every integer $n$.\n\n**Answer:** $30$. $\\blacksquare$"
   }
  },
  {
   "src": "Международный уровень / International level",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что если число $2^{n}-1$ простое, то и показатель $n$ простой.",
    "en": "Prove that if $2^{n}-1$ is prime then the exponent $n$ is prime."
   },
   "hint": {
    "ru": "Если $n=ab$, то $2^{a}-1$ делит $2^{n}-1$.",
    "en": "If $n=ab$ then $2^{a}-1$ divides $2^{n}-1$."
   },
   "sol": {
    "ru": "Докажем контрапозицию: **если $n$ составное, то $2^{n}-1$ составное.**\n\nПусть $n=ab$, где $1<a<n$ и $1<b<n$.\n\n**Ключевое разложение.** Положим $x=2^{a}$. Тогда $$2^{n}-1=x^{b}-1=(x-1)\\left(x^{\\,b-1}+x^{\\,b-2}+\\dots+x+1\\right),$$ то есть $$2^{n}-1=\\left(2^{a}-1\\right)\\left(2^{\\,a(b-1)}+2^{\\,a(b-2)}+\\dots+2^{a}+1\\right).$$\n\n**Оба множителя больше единицы.** Так как $a\\ge2$, первый множитель $2^{a}-1\\ge3>1$. Второй множитель — сумма $b\\ge2$ положительных слагаемых, каждое не меньше единицы, значит он не меньше $2$.\n\n**Оба множителя меньше самого числа.** Первый равен $2^{a}-1<2^{n}-1$, потому что $a<n$; второй тогда тоже меньше, ведь их произведение равно $2^{n}-1$, а первый больше единицы.\n\nЗначит $2^{n}-1$ раскладывается в произведение двух собственных множителей и потому составное. $\\blacksquare$\n\n**Проверка:** $n=4$ даёт $15=3\\cdot5$ ✓ $\\quad n=6$ даёт $63=7\\cdot9$ ✓ $\\quad n=9$ даёт $511=7\\cdot73$ ✓\n\n*Обратное неверно!* Простота $n$ не гарантирует простоту $2^{n}-1$: при $n=11$ получается $2047=23\\cdot89$. Простые вида $2^{p}-1$ называют **числами Мерсенна**, и неизвестно даже, конечно ли их количество.",
    "en": "We prove the contrapositive: **if $n$ is composite then $2^{n}-1$ is composite.**\n\nLet $n=ab$ with $1<a<n$ and $1<b<n$.\n\n**The key factorisation.** Put $x=2^{a}$. Then $$2^{n}-1=x^{b}-1=(x-1)\\left(x^{\\,b-1}+x^{\\,b-2}+\\dots+x+1\\right),$$ that is $$2^{n}-1=\\left(2^{a}-1\\right)\\left(2^{\\,a(b-1)}+2^{\\,a(b-2)}+\\dots+2^{a}+1\\right).$$\n\n**Both factors exceed one.** As $a\\ge2$, the first is $2^{a}-1\\ge3>1$. The second is a sum of $b\\ge2$ positive terms each at least one, so it is at least $2$.\n\n**Both factors are smaller than the number.** The first is $2^{a}-1<2^{n}-1$ because $a<n$; the second is then smaller too, since their product is $2^{n}-1$ and the first exceeds one.\n\nSo $2^{n}-1$ splits into two proper factors and is composite. $\\blacksquare$\n\n**Check:** $n=4$ gives $15=3\\cdot5$ ✓ $\\quad n=6$ gives $63=7\\cdot9$ ✓ $\\quad n=9$ gives $511=7\\cdot73$ ✓\n\n*The converse fails!* A prime $n$ does not force $2^{n}-1$ prime: at $n=11$ we get $2047=23\\cdot89$. Primes of the form $2^{p}-1$ are the **Mersenne primes**, and it is not even known whether there are infinitely many."
   }
  },
  {
   "src": "Международный уровень / International level",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что если число $2^{n}+1$ простое, то $n$ — степень двойки.",
    "en": "Prove that if $2^{n}+1$ is prime then $n$ is a power of two."
   },
   "hint": {
    "ru": "Если у $n$ есть нечётный делитель $d>1$, воспользуйтесь тем, что $a+b$ делит $a^{d}+b^{d}$.",
    "en": "If $n$ has an odd divisor $d>1$, use that $a+b$ divides $a^{d}+b^{d}$."
   },
   "sol": {
    "ru": "Докажем контрапозицию: **если $n$ не является степенью двойки, то $2^{n}+1$ составное.**\n\n**Что значит «не степень двойки».** Тогда в разложении $n$ есть нечётный простой множитель, то есть $$n=m\\cdot d,\\qquad d>1\\ \\text{нечётно}.$$\n\n**Ключевое разложение.** Для нечётного $d$ верно тождество $$a^{d}+b^{d}=(a+b)\\left(a^{\\,d-1}-a^{\\,d-2}b+\\dots-ab^{\\,d-2}+b^{\\,d-1}\\right).$$ Возьмём $a=2^{m}$ и $b=1$: $$2^{n}+1=\\left(2^{m}\\right)^{d}+1^{d}=\\left(2^{m}+1\\right)\\left(2^{\\,m(d-1)}-2^{\\,m(d-2)}+\\dots+1\\right).$$\n\n**Оба множителя собственные.** Первый: $2^{m}+1\\ge3>1$, и $2^{m}+1<2^{n}+1$, потому что $m<n$ (ведь $d>1$). Второй тогда тоже строго между единицей и $2^{n}+1$.\n\nЗначит $2^{n}+1$ составное. $\\blacksquare$\n\n**Проверка:** $n=3$ даёт $9=3\\cdot3$ ✓ $\\quad n=6$ даёт $65=5\\cdot13$ ✓ $\\quad n=12$ даёт $4097=17\\cdot241$ ✓\n\n*Обратное снова неверно.* Числа $F_k=2^{2^{k}}+1$ называют **числами Ферма**. Ферма предполагал, что все они простые: $F_0=3$, $F_1=5$, $F_2=17$, $F_3=257$, $F_4=65537$ — действительно простые. Но Эйлер нашёл, что $$F_5=2^{32}+1=641\\cdot6\\,700\\,417$$ (это разобрано в теме об остатках), и других простых чисел Ферма до сих пор не найдено.",
    "en": "We prove the contrapositive: **if $n$ is not a power of two then $2^{n}+1$ is composite.**\n\n**What \"not a power of two\" means.** Then $n$ has an odd prime factor, so $$n=m\\cdot d,\\qquad d>1\\ \\text{odd}.$$\n\n**The key factorisation.** For odd $d$ we have $$a^{d}+b^{d}=(a+b)\\left(a^{\\,d-1}-a^{\\,d-2}b+\\dots-ab^{\\,d-2}+b^{\\,d-1}\\right).$$ Take $a=2^{m}$ and $b=1$: $$2^{n}+1=\\left(2^{m}\\right)^{d}+1^{d}=\\left(2^{m}+1\\right)\\left(2^{\\,m(d-1)}-2^{\\,m(d-2)}+\\dots+1\\right).$$\n\n**Both factors are proper.** The first is $2^{m}+1\\ge3>1$ and $2^{m}+1<2^{n}+1$, since $m<n$ (because $d>1$). The second then also lies strictly between one and $2^{n}+1$.\n\nSo $2^{n}+1$ is composite. $\\blacksquare$\n\n**Check:** $n=3$ gives $9=3\\cdot3$ ✓ $\\quad n=6$ gives $65=5\\cdot13$ ✓ $\\quad n=12$ gives $4097=17\\cdot241$ ✓\n\n*Again the converse fails.* The numbers $F_k=2^{2^{k}}+1$ are the **Fermat numbers**. Fermat guessed they were all prime: $F_0=3$, $F_1=5$, $F_2=17$, $F_3=257$, $F_4=65537$ indeed are. But Euler found that $$F_5=2^{32}+1=641\\cdot6\\,700\\,417$$ (worked out in the remainders topic), and no further Fermat prime has been found since."
   }
  },
  {
   "src": "Международный уровень / International level",
   "lvl": 4,
   "q": {
    "ru": "Найдите все натуральные $n$, для которых $n$ делит $2^{n}-1$.",
    "en": "Find all positive integers $n$ dividing $2^{n}-1$."
   },
   "hint": {
    "ru": "Возьмите наименьший простой делитель $p$ числа $n$ и посмотрите на порядок двойки по модулю $p$.",
    "en": "Take the smallest prime divisor $p$ of $n$ and look at the order of two modulo $p$."
   },
   "sol": {
    "ru": "**Число $n=1$ подходит:** $1\\mid2^{1}-1=1$ ✓ Покажем, что других нет.\n\nПредположим противное: пусть $n>1$ и $n\\mid2^{n}-1$.\n\n**Шаг 1: $n$ нечётно.** Число $2^{n}-1$ нечётно, а его делитель $n$ не может быть чётным.\n\n**Шаг 2: берём наименьший простой делитель.** Пусть $p$ — наименьший простой делитель числа $n$; по шагу 1 число $p$ нечётно. Из $n\\mid2^{n}-1$ следует $$2^{n}\\equiv1\\pmod p .$$\n\n**Шаг 3: порядок двойки.** Обозначим через $d$ наименьшее натуральное число с $2^{d}\\equiv1\\pmod p$ (**порядок** двойки по модулю $p$; он существует, так как $\\gcd(2,p)=1$).\n\nСтандартное свойство порядка: если $2^{m}\\equiv1$, то $d\\mid m$. *Действительно,* поделив с остатком $m=dq+r$ с $0\\le r<d$, получаем $$1\\equiv2^{m}=\\left(2^{d}\\right)^{q}\\cdot2^{r}\\equiv2^{r}\\pmod p ,$$ и минимальность $d$ вынуждает $r=0$.\n\nОтсюда сразу два вывода: $$d\\ \\big|\\ n\\qquad\\text{(из шага 2)},$$ $$d\\ \\big|\\ p-1\\qquad\\text{(из малой теоремы Ферма } 2^{\\,p-1}\\equiv1).$$\n\n**Шаг 4: противоречие.** Из $d\\mid p-1$ следует $d\\le p-1<p$. Но $d$ делит $n$, а **наименьший** простой делитель числа $n$ равен $p$; значит любой делитель числа $n$, меньший $p$, обязан равняться единице. Поэтому $d=1$.\n\nА $d=1$ означает $2^{1}\\equiv1\\pmod p$, то есть $p\\mid1$ — невозможно для простого $p$.\n\nПротиворечие показывает, что случая $n>1$ не бывает.\n\n**Ответ:** $n=1$. $\\blacksquare$\n\n*Проверка на малых числах:* $n=3$: $2^{3}-1=7$, и $3\\nmid7$ ✓ $\\quad n=5$: $31$, и $5\\nmid31$ ✓ $\\quad n=7$: $127$, и $7\\nmid127$ ✓",
    "en": "**The number $n=1$ works:** $1\\mid2^{1}-1=1$ ✓ We show there are no others.\n\nSuppose not: let $n>1$ with $n\\mid2^{n}-1$.\n\n**Step 1: $n$ is odd.** The number $2^{n}-1$ is odd, so its divisor $n$ cannot be even.\n\n**Step 2: take the smallest prime divisor.** Let $p$ be the smallest prime divisor of $n$; by Step 1 it is odd. From $n\\mid2^{n}-1$ we get $$2^{n}\\equiv1\\pmod p .$$\n\n**Step 3: the order of two.** Let $d$ be the least positive integer with $2^{d}\\equiv1\\pmod p$ (the **order** of two modulo $p$; it exists since $\\gcd(2,p)=1$).\n\nThe standard property: if $2^{m}\\equiv1$ then $d\\mid m$. *Indeed,* writing $m=dq+r$ with $0\\le r<d$, $$1\\equiv2^{m}=\\left(2^{d}\\right)^{q}\\cdot2^{r}\\equiv2^{r}\\pmod p ,$$ and minimality of $d$ forces $r=0$.\n\nThis gives two facts at once: $$d\\ \\big|\\ n\\qquad\\text{(from Step 2)},$$ $$d\\ \\big|\\ p-1\\qquad\\text{(from Fermat’s little theorem } 2^{\\,p-1}\\equiv1).$$\n\n**Step 4: the contradiction.** From $d\\mid p-1$ we get $d\\le p-1<p$. But $d$ divides $n$, whose **smallest** prime divisor is $p$; so any divisor of $n$ below $p$ must be one. Hence $d=1$.\n\nAnd $d=1$ means $2^{1}\\equiv1\\pmod p$, that is $p\\mid1$ — impossible for a prime.\n\nThe contradiction rules out $n>1$.\n\n**Answer:** $n=1$. $\\blacksquare$\n\n*Check on small numbers:* $n=3$: $2^{3}-1=7$ and $3\\nmid7$ ✓ $\\quad n=5$: $31$ and $5\\nmid31$ ✓ $\\quad n=7$: $127$ and $7\\nmid127$ ✓"
   }
  },
  {
   "src": "Международный уровень / International level",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что для чисел Фибоначчи выполнено $$\\gcd\\left(F_m,F_n\\right)=F_{\\gcd(m,n)} .$$",
    "en": "Prove that the Fibonacci numbers satisfy $$\\gcd\\left(F_m,F_n\\right)=F_{\\gcd(m,n)} .$$"
   },
   "hint": {
    "ru": "Воспользуйтесь формулой сложения $F_{m+n}=F_mF_{n+1}+F_{m-1}F_n$ и тем, что соседние числа Фибоначчи взаимно просты.",
    "en": "Use the addition formula $F_{m+n}=F_mF_{n+1}+F_{m-1}F_n$ and that neighbouring Fibonacci numbers are coprime."
   },
   "sol": {
    "ru": "Нам понадобятся два факта из темы о последовательностях: $$F_{a+b}=F_aF_{b+1}+F_{a-1}F_b\\qquad\\text{и}\\qquad \\gcd\\left(F_n,F_{n+1}\\right)=1 .$$\n\n**Ключевая лемма.** Для $m>n$ $$\\gcd\\left(F_m,F_n\\right)=\\gcd\\left(F_{m-n},F_n\\right).$$\n\n*Доказательство.* Применим формулу сложения с $a=m-n$ и $b=n$: $$F_m=F_{(m-n)+n}=F_{m-n}F_{n+1}+F_{m-n-1}F_n .$$ Второе слагаемое делится на $F_n$, поэтому при вычислении наибольшего общего делителя с $F_n$ его можно отбросить: $$\\gcd\\left(F_m,F_n\\right)=\\gcd\\left(F_{m-n}F_{n+1},\\ F_n\\right).$$ Но $\\gcd\\left(F_{n+1},F_n\\right)=1$, а множитель, взаимно простой со вторым аргументом, на НОД не влияет: $$\\gcd\\left(F_{m-n}F_{n+1},\\ F_n\\right)=\\gcd\\left(F_{m-n},\\ F_n\\right). \\qquad\\square$$\n\n**Спуск.** Лемма говорит: вычитание в **индексах** не меняет НОД чисел Фибоначчи. Но вычитание меньшего из большего — это ровно шаг алгоритма Евклида для пары $(m,n)$. Повторяя лемму, мы повторяем алгоритм Евклида на индексах, пока меньший индекс не станет нулём: $$\\gcd\\left(F_m,F_n\\right)=\\gcd\\left(F_{\\gcd(m,n)},\\ F_0\\right).$$\n\n**Конец.** Так как $F_0=0$, а $\\gcd(x,0)=x$, получаем $$\\gcd\\left(F_m,F_n\\right)=F_{\\gcd(m,n)} . \\qquad\\blacksquare$$\n\n**Проверка.** $F_{12}=144$, $F_{18}=2584$; $\\gcd(12,18)=6$ и $F_6=8$. Действительно $\\gcd(144,2584)=8$ ✓\n\n*Следствие.* $F_m$ делит $F_n$ тогда и только тогда, когда $m$ делит $n$ (при $m\\ge3$).",
    "en": "We need two facts from the sequences topic: $$F_{a+b}=F_aF_{b+1}+F_{a-1}F_b\\qquad\\text{and}\\qquad \\gcd\\left(F_n,F_{n+1}\\right)=1 .$$\n\n**Key lemma.** For $m>n$, $$\\gcd\\left(F_m,F_n\\right)=\\gcd\\left(F_{m-n},F_n\\right).$$\n\n*Proof.* Apply the addition formula with $a=m-n$ and $b=n$: $$F_m=F_{(m-n)+n}=F_{m-n}F_{n+1}+F_{m-n-1}F_n .$$ The second term is a multiple of $F_n$, so it may be dropped when taking the gcd with $F_n$: $$\\gcd\\left(F_m,F_n\\right)=\\gcd\\left(F_{m-n}F_{n+1},\\ F_n\\right).$$ But $\\gcd\\left(F_{n+1},F_n\\right)=1$, and a factor coprime to the second argument does not affect the gcd: $$\\gcd\\left(F_{m-n}F_{n+1},\\ F_n\\right)=\\gcd\\left(F_{m-n},\\ F_n\\right). \\qquad\\square$$\n\n**Descent.** The lemma says that subtracting in the **indices** leaves the gcd of Fibonacci numbers unchanged. But subtracting the smaller from the larger is exactly a step of the Euclidean algorithm on $(m,n)$. Repeating the lemma runs the Euclidean algorithm on the indices until the smaller one reaches zero: $$\\gcd\\left(F_m,F_n\\right)=\\gcd\\left(F_{\\gcd(m,n)},\\ F_0\\right).$$\n\n**Finish.** Since $F_0=0$ and $\\gcd(x,0)=x$, $$\\gcd\\left(F_m,F_n\\right)=F_{\\gcd(m,n)} . \\qquad\\blacksquare$$\n\n**Check.** $F_{12}=144$, $F_{18}=2584$; $\\gcd(12,18)=6$ and $F_6=8$. Indeed $\\gcd(144,2584)=8$ ✓\n\n*Corollary.* $F_m$ divides $F_n$ if and only if $m$ divides $n$ (for $m\\ge3$)."
   }
  },
  {
   "src": "Международный уровень / International level",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что число $$\\frac{(2n)!}{n!\\,(n+1)!}$$ является целым при любом натуральном $n$.",
    "en": "Prove that $$\\frac{(2n)!}{n!\\,(n+1)!}$$ is an integer for every positive integer $n$."
   },
   "hint": {
    "ru": "Запишите его как разность двух биномиальных коэффициентов.",
    "en": "Write it as a difference of two binomial coefficients."
   },
   "sol": {
    "ru": "**Идея.** Целость дроби неочевидна: знаменатель содержит лишний множитель $n+1$. Но всё выражение можно записать как **разность двух биномиальных коэффициентов**, а они заведомо целые.\n\n**Считаем разность.** $$\\binom{2n}{n}-\\binom{2n}{n+1}=\\frac{(2n)!}{n!\\,n!}-\\frac{(2n)!}{(n+1)!\\,(n-1)!}.$$ Приведём второе слагаемое к знаменателю первого. Так как $(n+1)!=(n+1)\\cdot n!$ и $n!=n\\cdot(n-1)!$, получаем $$\\frac{(2n)!}{(n+1)!\\,(n-1)!}=\\frac{(2n)!}{n!\\,n!}\\cdot\\frac{n}{n+1}.$$\n\nЗначит $$\\binom{2n}{n}-\\binom{2n}{n+1}=\\binom{2n}{n}\\left(1-\\frac{n}{n+1}\\right)=\\binom{2n}{n}\\cdot\\frac{1}{n+1}=\\frac{(2n)!}{n!\\,(n+1)!}.$$\n\n**Вывод.** Слева стоит разность двух целых чисел, значит и справа целое число. $\\blacksquare$\n\n*Что это за числа.* Это **числа Каталана** $$C_n=\\frac{1}{n+1}\\binom{2n}{n}:\\qquad 1,\\ 2,\\ 5,\\ 14,\\ 42,\\ 132,\\dots$$ Они считают правильные скобочные последовательности, способы разрезать выпуклый многоугольник на треугольники и десятки других вещей — одна из таких задач разобрана в теме о комбинаторике.\n\n*Проверка:* при $n=3$ дробь равна $\\dfrac{720}{6\\cdot24}=5$ ✓, а $\\binom63-\\binom64=20-15=5$ ✓",
    "en": "**The idea.** Integrality is not obvious: the denominator carries an extra factor $n+1$. But the whole expression can be written as a **difference of two binomial coefficients**, which are certainly integers.\n\n**Compute the difference.** $$\\binom{2n}{n}-\\binom{2n}{n+1}=\\frac{(2n)!}{n!\\,n!}-\\frac{(2n)!}{(n+1)!\\,(n-1)!}.$$ Bring the second term to the first denominator. Since $(n+1)!=(n+1)\\cdot n!$ and $n!=n\\cdot(n-1)!$, $$\\frac{(2n)!}{(n+1)!\\,(n-1)!}=\\frac{(2n)!}{n!\\,n!}\\cdot\\frac{n}{n+1}.$$\n\nHence $$\\binom{2n}{n}-\\binom{2n}{n+1}=\\binom{2n}{n}\\left(1-\\frac{n}{n+1}\\right)=\\binom{2n}{n}\\cdot\\frac{1}{n+1}=\\frac{(2n)!}{n!\\,(n+1)!}.$$\n\n**Conclusion.** The left side is a difference of integers, so the right side is an integer. $\\blacksquare$\n\n*What these numbers are.* They are the **Catalan numbers** $$C_n=\\frac{1}{n+1}\\binom{2n}{n}:\\qquad 1,\\ 2,\\ 5,\\ 14,\\ 42,\\ 132,\\dots$$ They count correct bracket sequences, triangulations of a convex polygon and dozens of other things — one such problem is worked out in the counting topic.\n\n*Check:* at $n=3$ the fraction is $\\dfrac{720}{6\\cdot24}=5$ ✓ and $\\binom63-\\binom64=20-15=5$ ✓"
   }
  }
 ]
};
