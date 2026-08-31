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
  }
 ]
};
