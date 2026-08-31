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
    },
    {
     "t": "thm",
     "name": {
      "ru": "Делитель не больше числа",
      "en": "A divisor is no larger than the number"
     },
     "text": {
      "ru": "Если $d\\mid a$ и $a\\ne0$, то $|d|\\le|a|$. В частности, у всякого ненулевого числа **конечное** число делителей.",
      "en": "If $d\\mid a$ and $a\\ne0$ then $|d|\\le|a|$. In particular every non-zero number has **finitely many** divisors."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Пусть $a=dk$. Число $a$ ненулевое, значит и $k\\ne0$, а тогда $|k|\\ge1$. Отсюда $$|a|=|d|\\cdot|k|\\ \\ge\\ |d| .$$\n\nЗначит все делители лежат в конечном промежутке от $-|a|$ до $|a|$, и их конечное число. $\\blacksquare$",
      "en": "Let $a=dk$. Since $a\\ne0$ we have $k\\ne0$, hence $|k|\\ge1$ and $$|a|=|d|\\cdot|k|\\ \\ge\\ |d| .$$\n\nSo every divisor lies in the finite range from $-|a|$ to $|a|$, and there are finitely many. $\\blacksquare$"
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Оговорка $a\\ne0$ существенна: у нуля делителей бесконечно много, ведь $d\\mid0$ при любом $d\\ne0$. Поэтому в задачах вида «найдите все $d$, делящие …» первым делом убеждаются, что делимое не обращается в нуль.",
      "en": "The hypothesis $a\\ne0$ matters: zero has infinitely many divisors, since $d\\mid0$ for every $d\\ne0$. So in problems of the form \"find all $d$ dividing …\" the first move is to make sure the dividend is not zero."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "У каждого числа есть простой делитель",
      "en": "Every number has a prime divisor"
     },
     "text": {
      "ru": "Всякое целое $n>1$ имеет простой делитель; более того, его **наименьший** делитель, больший единицы, прост, и если $n$ составное, то этот делитель не превосходит $\\sqrt n$.",
      "en": "Every integer $n>1$ has a prime divisor; moreover its **least** divisor greater than one is prime, and if $n$ is composite that divisor is at most $\\sqrt n$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Множество делителей числа $n$, больших единицы, непусто (в нём есть само $n$), значит в нём есть наименьший элемент $p$.\n\n**$p$ простое.** Если бы $p=ab$ с $1<a<p$, то $a$ делил бы $n$ и был бы меньше $p$ — противоречие с минимальностью.\n\n**Оценка для составного $n$.** Запишем $n=pm$. Если $n$ составное, то $m>1$, значит $m$ тоже делитель, больший единицы, и по минимальности $m\\ge p$. Тогда $$n=pm\\ \\ge\\ p^{2}\\quad\\Longrightarrow\\quad p\\le\\sqrt n . \\qquad\\blacksquare$$",
      "en": "The set of divisors of $n$ greater than one is non-empty (it contains $n$), so it has a least element $p$.\n\n**$p$ is prime.** If $p=ab$ with $1<a<p$, then $a$ would divide $n$ and be smaller than $p$, contradicting minimality.\n\n**The bound for composite $n$.** Write $n=pm$. If $n$ is composite then $m>1$, so $m$ is also a divisor greater than one and minimality gives $m\\ge p$. Hence $$n=pm\\ \\ge\\ p^{2}\\quad\\Longrightarrow\\quad p\\le\\sqrt n . \\qquad\\blacksquare$$"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Отсюда берётся стандартная проверка на простоту: чтобы убедиться, что $n$ простое, достаточно перебрать простые делители до $\\sqrt n$. Для $n=211$ хватает $2,3,5,7,11,13$, потому что $14^{2}=196<211<225=15^{2}$.",
      "en": "This gives the standard primality check: to see that $n$ is prime it suffices to test prime divisors up to $\\sqrt n$. For $n=211$ the primes $2,3,5,7,11,13$ suffice, since $14^{2}=196<211<225=15^{2}$."
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
    },
    {
     "t": "thm",
     "name": {
      "ru": "Частное — это целая часть",
      "en": "The quotient is a floor"
     },
     "text": {
      "ru": "В записи $a=bq+r$ с $0\\le r<b$ и $b>0$ частное и остаток выражаются явно: $$q=\\left\\lfloor\\frac ab\\right\\rfloor,\\qquad r=a-b\\left\\lfloor\\frac ab\\right\\rfloor .$$",
      "en": "In $a=bq+r$ with $0\\le r<b$ and $b>0$, the quotient and remainder are given explicitly by $$q=\\left\\lfloor\\frac ab\\right\\rfloor,\\qquad r=a-b\\left\\lfloor\\frac ab\\right\\rfloor .$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Условие $0\\le r<b$ равносильно $0\\le a-bq<b$, то есть $$bq\\le a<bq+b\\quad\\Longleftrightarrow\\quad q\\le\\frac ab<q+1 .$$\n\nА последнее и означает по определению, что $q=\\left\\lfloor\\tfrac ab\\right\\rfloor$. Формула для $r$ получается подстановкой. $\\blacksquare$",
      "en": "The condition $0\\le r<b$ is equivalent to $0\\le a-bq<b$, that is $$bq\\le a<bq+b\\quad\\Longleftrightarrow\\quad q\\le\\frac ab<q+1 ,$$ which by definition says $q=\\left\\lfloor\\tfrac ab\\right\\rfloor$. The formula for $r$ follows by substitution. $\\blacksquare$"
     }
    },
    {
     "t": "def",
     "name": {
      "ru": "Полная система вычетов",
      "en": "Complete residue system"
     },
     "text": {
      "ru": "Набор из $n$ целых чисел называется **полной системой вычетов** по модулю $n$, если они дают попарно различные остатки при делении на $n$ — то есть покрывают все остатки $0,1,\\dots,n-1$ ровно по разу.",
      "en": "A set of $n$ integers is a **complete residue system** modulo $n$ if they leave pairwise different remainders on division by $n$ — that is, they cover each of $0,1,\\dots,n-1$ exactly once."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Самый привычный пример — сами числа $0,1,\\dots,n-1$. Но полезны и другие: например, $n$ подряд идущих целых чисел всегда образуют полную систему вычетов. Именно поэтому «среди любых $n$ подряд идущих чисел ровно одно делится на $n$».",
      "en": "The familiar example is $0,1,\\dots,n-1$ itself. Others are useful too: any $n$ consecutive integers form a complete residue system. That is exactly why \"among any $n$ consecutive integers exactly one is divisible by $n$\"."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Докажите, что произведение любых трёх подряд идущих целых чисел делится на $6$.",
      "en": "Prove that the product of any three consecutive integers is divisible by $6$."
     },
     "steps": {
      "ru": [
       "Обозначим числа $n,\\ n+1,\\ n+2$.",
       "Три подряд идущих числа образуют полную систему вычетов по модулю $3$, значит ровно одно из них делится на $3$.",
       "Среди трёх подряд идущих есть хотя бы одно чётное (даже два, если $n$ чётно), значит произведение делится на $2$.",
       "Числа $2$ и $3$ взаимно просты, поэтому произведение делится на $6$."
      ],
      "en": [
       "Call the numbers $n,\\ n+1,\\ n+2$.",
       "Three consecutive integers form a complete residue system modulo $3$, so exactly one of them is divisible by $3$.",
       "Among three consecutive integers at least one is even, so the product is divisible by $2$.",
       "As $2$ and $3$ are coprime, the product is divisible by $6$."
      ]
     },
     "ans": {
      "ru": "Делится, и это частный случай общего факта: произведение $k$ подряд идущих чисел делится на $k!$.",
      "en": "It is divisible — a special case of the general fact that a product of $k$ consecutive integers is divisible by $k!$."
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
    },
    {
     "t": "thm",
     "name": {
      "ru": "Правила по последним цифрам",
      "en": "Rules that read the last digits"
     },
     "text": {
      "ru": "Для любого $k\\ge1$ и любого числа $N$ с «хвостом» $T_k$ из последних $k$ цифр $$2^{k}\\mid N\\ \\Longleftrightarrow\\ 2^{k}\\mid T_k ,\\qquad 5^{k}\\mid N\\ \\Longleftrightarrow\\ 5^{k}\\mid T_k .$$ В частности: на $2$ и на $5$ смотрит последняя цифра, на $4$ и на $25$ — две последние, на $8$ и на $125$ — три последние.",
      "en": "For every $k\\ge1$ and every number $N$ with tail $T_k$ formed by its last $k$ digits, $$2^{k}\\mid N\\ \\Longleftrightarrow\\ 2^{k}\\mid T_k ,\\qquad 5^{k}\\mid N\\ \\Longleftrightarrow\\ 5^{k}\\mid T_k .$$ In particular $2$ and $5$ read the last digit, $4$ and $25$ the last two, $8$ and $125$ the last three."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Запишем число, отделив хвост: $$N=10^{k}\\,q+T_k ,$$ где $q$ — то, что осталось слева.\n\nКлючевое наблюдение: $$10^{k}=2^{k}\\cdot5^{k} ,$$ поэтому $10^{k}$ делится и на $2^{k}$, и на $5^{k}$. Значит первое слагаемое кратно каждому из этих чисел, и $$N\\equiv T_k \\pmod{2^{k}},\\qquad N\\equiv T_k \\pmod{5^{k}} .$$\n\nОтсюда обе равносильности. $\\blacksquare$",
      "en": "Split off the tail: $$N=10^{k}\\,q+T_k ,$$ where $q$ is whatever stands to the left.\n\nThe key observation is $$10^{k}=2^{k}\\cdot5^{k} ,$$ so $10^{k}$ is divisible by both $2^{k}$ and $5^{k}$. Hence the first term is a multiple of each, and $$N\\equiv T_k \\pmod{2^{k}},\\qquad N\\equiv T_k \\pmod{5^{k}} .$$\n\nBoth equivalences follow. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Делится ли $37\\,516$ на $4$? А на $8$?",
      "en": "Is $37\\,516$ divisible by $4$? By $8$?"
     },
     "steps": {
      "ru": [
       "Для четвёрки смотрим две последние цифры: $16=4\\cdot4$ — делится ✓",
       "Для восьмёрки смотрим три последние: $516=8\\cdot64+4$ — не делится ✗",
       "Проверка: $37\\,516=4\\cdot9379$, а $9379$ нечётно, значит на $8$ число действительно не делится."
      ],
      "en": [
       "For $4$ read the last two digits: $16=4\\cdot4$ — divisible ✓",
       "For $8$ read the last three: $516=8\\cdot64+4$ — not divisible ✗",
       "Check: $37\\,516=4\\cdot9379$ and $9379$ is odd, so $8$ indeed does not divide it."
      ]
     },
     "ans": {
      "ru": "На $4$ делится, на $8$ — нет.",
      "en": "Divisible by $4$, not by $8$."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Признак для 7, 11 и 13 сразу",
      "en": "One rule for 7, 11 and 13"
     },
     "text": {
      "ru": "Разобьём десятичную запись на группы по три цифры справа налево и обозначим их значения $g_0,g_1,g_2,\\dots$ Тогда для $m\\in\\{7,11,13\\}$ $$m\\mid N\\quad\\Longleftrightarrow\\quad m\\ \\big|\\ g_0-g_1+g_2-\\cdots$$",
      "en": "Split the decimal expansion into three-digit groups from the right, with values $g_0,g_1,g_2,\\dots$ Then for $m\\in\\{7,11,13\\}$ $$m\\mid N\\quad\\Longleftrightarrow\\quad m\\ \\big|\\ g_0-g_1+g_2-\\cdots$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "По построению групп $$N=\\sum_{j\\ge0}g_j\\cdot1000^{\\,j} .$$\n\nКлючевое разложение: $$1001=7\\cdot11\\cdot13 ,$$ поэтому $1000\\equiv-1$ по каждому из модулей $7$, $11$, $13$. Возводя в степень, $$1000^{\\,j}\\equiv(-1)^{j} ,$$ откуда $$N\\equiv\\sum_{j\\ge0}(-1)^{j}g_j=g_0-g_1+g_2-\\cdots$$ по каждому из трёх модулей. $\\blacksquare$",
      "en": "By construction $$N=\\sum_{j\\ge0}g_j\\cdot1000^{\\,j} .$$\n\nThe key factorisation is $$1001=7\\cdot11\\cdot13 ,$$ so $1000\\equiv-1$ modulo each of $7$, $11$, $13$. Raising to powers, $$1000^{\\,j}\\equiv(-1)^{j} ,$$ hence $$N\\equiv g_0-g_1+g_2-\\cdots$$ modulo each of the three. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Проверьте, делится ли $1\\,234\\,569$ на $7$, на $11$ и на $13$.",
      "en": "Test whether $1\\,234\\,569$ is divisible by $7$, by $11$ and by $13$."
     },
     "steps": {
      "ru": [
       "Группы по три справа: $569$, $234$, $1$.",
       "Знакопеременная сумма: $569-234+1=336$.",
       "$336=7\\cdot48$ — значит на $7$ делится ✓",
       "$336=11\\cdot30+6$ — на $11$ не делится ✗",
       "$336=13\\cdot25+11$ — на $13$ не делится ✗"
      ],
      "en": [
       "Groups of three from the right: $569$, $234$, $1$.",
       "Alternating sum: $569-234+1=336$.",
       "$336=7\\cdot48$, so it is divisible by $7$ ✓",
       "$336=11\\cdot30+6$, not divisible by $11$ ✗",
       "$336=13\\cdot25+11$, not divisible by $13$ ✗"
      ]
     },
     "ans": {
      "ru": "Делится на $7$; на $11$ и $13$ — нет.",
      "en": "Divisible by $7$; not by $11$ or $13$."
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
    },
    {
     "t": "thm",
     "name": {
      "ru": "Свойства НОД",
      "en": "Properties of the gcd"
     },
     "text": {
      "ru": "Для целых $a,b$ (не равных нулю одновременно) и натурального $m$: $\\;$ (1) $\\gcd(a,b)=\\gcd(b,a)=\\gcd(|a|,|b|)$; $\\;$ (2) $\\gcd(a+kb,\\ b)=\\gcd(a,b)$ при любом целом $k$; $\\;$ (3) $\\gcd(ma,mb)=m\\gcd(a,b)$; $\\;$ (4) если $d=\\gcd(a,b)$, то $\\gcd\\!\\left(\\tfrac ad,\\tfrac bd\\right)=1$.",
      "en": "For integers $a,b$ (not both zero) and a positive integer $m$: $\\;$ (1) $\\gcd(a,b)=\\gcd(b,a)=\\gcd(|a|,|b|)$; $\\;$ (2) $\\gcd(a+kb,\\ b)=\\gcd(a,b)$ for every integer $k$; $\\;$ (3) $\\gcd(ma,mb)=m\\gcd(a,b)$; $\\;$ (4) if $d=\\gcd(a,b)$ then $\\gcd\\!\\left(\\tfrac ad,\\tfrac bd\\right)=1$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**(1)** Делители числа и его модуля совпадают, а определение НОД симметрично.\n\n**(2)** Это ключевая лемма в чистом виде: если $d\\mid a$ и $d\\mid b$, то $d\\mid a+kb$; обратно, если $d\\mid a+kb$ и $d\\mid b$, то $d\\mid(a+kb)-kb=a$. Значит пары $(a,b)$ и $(a+kb,\\,b)$ имеют одни и те же общие делители, а с ними и один и тот же наибольший.\n\n**(3)** По соотношению Безу $\\gcd(a,b)$ — наименьшее положительное число вида $ax+by$. Тогда наименьшее положительное число вида $(ma)x+(mb)y=m(ax+by)$ равно $m\\gcd(a,b)$.\n\n**(4)** Применим (3) с $m=d$ к числам $\\tfrac ad$ и $\\tfrac bd$: $$d=\\gcd(a,b)=\\gcd\\left(d\\cdot\\tfrac ad,\\ d\\cdot\\tfrac bd\\right)=d\\cdot\\gcd\\left(\\tfrac ad,\\tfrac bd\\right),$$ откуда $\\gcd\\left(\\tfrac ad,\\tfrac bd\\right)=1$. $\\blacksquare$",
      "en": "**(1)** A number and its absolute value have the same divisors, and the definition is symmetric.\n\n**(2)** This is the key lemma in bare form: if $d\\mid a$ and $d\\mid b$ then $d\\mid a+kb$; conversely if $d\\mid a+kb$ and $d\\mid b$ then $d\\mid(a+kb)-kb=a$. So the pairs $(a,b)$ and $(a+kb,\\,b)$ have exactly the same common divisors, hence the same greatest one.\n\n**(3)** By Bézout, $\\gcd(a,b)$ is the least positive number of the form $ax+by$. The least positive number of the form $(ma)x+(mb)y=m(ax+by)$ is then $m\\gcd(a,b)$.\n\n**(4)** Apply (3) with $m=d$ to $\\tfrac ad$ and $\\tfrac bd$: $$d=\\gcd(a,b)=d\\cdot\\gcd\\left(\\tfrac ad,\\tfrac bd\\right),$$ so $\\gcd\\left(\\tfrac ad,\\tfrac bd\\right)=1$. $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Универсальное свойство НОД",
      "en": "The universal property of the gcd"
     },
     "text": {
      "ru": "Каждый общий делитель чисел $a$ и $b$ делит $\\gcd(a,b)$. Иначе говоря, НОД — не просто самый большой из общих делителей, а тот, через который «проходят» все остальные.",
      "en": "Every common divisor of $a$ and $b$ divides $\\gcd(a,b)$. In other words the gcd is not merely the largest common divisor: it is the one all the others pass through."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Пусть $c\\mid a$ и $c\\mid b$. По соотношению Безу $$\\gcd(a,b)=ax+by $$ для некоторых целых $x,y$. Число $c$ делит оба слагаемых справа, значит делит и сумму, то есть $c\\mid\\gcd(a,b)$. $\\blacksquare$",
      "en": "Let $c\\mid a$ and $c\\mid b$. Bézout gives $$\\gcd(a,b)=ax+by $$ for some integers $x,y$. Since $c$ divides both terms on the right, it divides the sum, i.e. $c\\mid\\gcd(a,b)$. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите $\\gcd\\left(n,\\ n+6\\right)$ для всех натуральных $n$.",
      "en": "Find $\\gcd\\left(n,\\ n+6\\right)$ for every positive integer $n$."
     },
     "steps": {
      "ru": [
       "По свойству (2) $\\gcd(n,\\ n+6)=\\gcd(n,\\ 6)$.",
       "Значит ответ зависит только от остатка $n$ по модулю $6$.",
       "Если $6\\mid n$, то НОД равен $6$; если $n$ кратно $3$, но не $2$ — равен $3$; если кратно $2$, но не $3$ — равен $2$; иначе равен $1$.",
       "Проверка: $\\gcd(9,15)=3$ ✓ и $\\gcd(8,14)=2$ ✓"
      ],
      "en": [
       "By property (2), $\\gcd(n,\\ n+6)=\\gcd(n,\\ 6)$.",
       "So the answer depends only on $n$ modulo $6$.",
       "If $6\\mid n$ the gcd is $6$; if $n$ is a multiple of $3$ but not $2$, it is $3$; a multiple of $2$ but not $3$, it is $2$; otherwise $1$.",
       "Check: $\\gcd(9,15)=3$ ✓ and $\\gcd(8,14)=2$ ✓"
      ]
     },
     "ans": {
      "ru": "$\\gcd(n,n+6)=\\gcd(n,6)\\in\\{1,2,3,6\\}$.",
      "en": "$\\gcd(n,n+6)=\\gcd(n,6)\\in\\{1,2,3,6\\}$."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Приём «$\\gcd(n,\\ n+k)=\\gcd(n,k)$» решает целый класс задач: разность двух чисел ограничивает их общий делитель. Например, соседние числа всегда взаимно просты, ведь $\\gcd(n,n+1)=\\gcd(n,1)=1$.",
      "en": "The move \"$\\gcd(n,\\ n+k)=\\gcd(n,k)$\" settles a whole class of problems: the difference of two numbers bounds their common divisor. Consecutive integers are always coprime, since $\\gcd(n,n+1)=\\gcd(n,1)=1$."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Линейные уравнения в целых числах",
    "en": "Linear equations in integers"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Соотношение Безу — не просто красивый факт: оно полностью решает вопрос о том, когда уравнение $ax+by=c$ имеет целые решения, и позволяет выписать их все.",
      "en": "Bézout’s identity is not just a pretty fact: it settles completely when the equation $ax+by=c$ has integer solutions, and lets us write down every one of them."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Критерий разрешимости",
      "en": "When a solution exists"
     },
     "text": {
      "ru": "Пусть $a,b$ — целые, не равные нулю одновременно, и $d=\\gcd(a,b)$. Уравнение $$ax+by=c$$ имеет решение в целых числах **тогда и только тогда**, когда $d\\mid c$.",
      "en": "Let $a,b$ be integers, not both zero, and $d=\\gcd(a,b)$. The equation $$ax+by=c$$ has a solution in integers **if and only if** $d\\mid c$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Необходимость.** Пусть $ax+by=c$ при некоторых целых $x,y$. Число $d$ делит и $a$, и $b$, значит делит любую их целую комбинацию, в частности $ax+by=c$.\n\n**Достаточность.** Пусть $d\\mid c$, скажем $c=dk$. По соотношению Безу найдутся $x_0,y_0$ с $ax_0+by_0=d$. Умножив это равенство на $k$, получаем $$a\\left(kx_0\\right)+b\\left(ky_0\\right)=dk=c ,$$ то есть пара $\\left(kx_0,\\ ky_0\\right)$ — решение. $\\blacksquare$",
      "en": "**Necessity.** Suppose $ax+by=c$ for some integers $x,y$. The number $d$ divides both $a$ and $b$, hence every integer combination of them, in particular $ax+by=c$.\n\n**Sufficiency.** Suppose $d\\mid c$, say $c=dk$. Bézout gives $x_0,y_0$ with $ax_0+by_0=d$. Multiplying by $k$, $$a\\left(kx_0\\right)+b\\left(ky_0\\right)=dk=c ,$$ so the pair $\\left(kx_0,\\ ky_0\\right)$ is a solution. $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Все решения сразу",
      "en": "The whole family of solutions"
     },
     "text": {
      "ru": "Пусть $d=\\gcd(a,b)$ делит $c$ и пусть $\\left(x_0,y_0\\right)$ — какое-нибудь одно решение уравнения $ax+by=c$. Тогда **все** целые решения задаются формулами $$x=x_0+\\frac bd\\,t,\\qquad y=y_0-\\frac ad\\,t,\\qquad t\\in\\mathbb{Z},$$ и разным $t$ отвечают разные решения.",
      "en": "Let $d=\\gcd(a,b)$ divide $c$ and let $\\left(x_0,y_0\\right)$ be one solution of $ax+by=c$. Then **all** integer solutions are given by $$x=x_0+\\frac bd\\,t,\\qquad y=y_0-\\frac ad\\,t,\\qquad t\\in\\mathbb{Z},$$ and different $t$ give different solutions."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Эти пары — решения.** Подставим: $$a\\left(x_0+\\frac bd t\\right)+b\\left(y_0-\\frac ad t\\right)=ax_0+by_0+\\frac{ab}{d}t-\\frac{ab}{d}t=c \\quad\\checkmark$$\n\n**Других нет.** Пусть $(x,y)$ — произвольное решение. Вычтем из него исходное: $$a\\left(x-x_0\\right)+b\\left(y-y_0\\right)=0\\quad\\Longrightarrow\\quad a\\left(x-x_0\\right)=-b\\left(y-y_0\\right).$$\n\nПоделим обе части на $d$ и обозначим $a=d\\alpha$, $b=d\\beta$, где $\\gcd(\\alpha,\\beta)=1$: $$\\alpha\\left(x-x_0\\right)=-\\beta\\left(y-y_0\\right).$$\n\nЛевая часть делится на $\\alpha$, значит и правая; но $\\gcd(\\alpha,\\beta)=1$, поэтому $\\alpha\\mid y-y_0$ — точнее, из взаимной простоты следует $\\beta\\mid x-x_0$. Запишем $x-x_0=\\beta t$ для некоторого целого $t$; подставив, получаем $\\alpha\\beta t=-\\beta\\left(y-y_0\\right)$, откуда $y-y_0=-\\alpha t$.\n\nЭто в точности объявленные формулы, ведь $\\beta=\\tfrac bd$ и $\\alpha=\\tfrac ad$. $\\blacksquare$",
      "en": "**These pairs are solutions.** Substitute: $$a\\left(x_0+\\frac bd t\\right)+b\\left(y_0-\\frac ad t\\right)=ax_0+by_0+\\frac{ab}{d}t-\\frac{ab}{d}t=c \\quad\\checkmark$$\n\n**There are no others.** Let $(x,y)$ be any solution and subtract the given one: $$a\\left(x-x_0\\right)+b\\left(y-y_0\\right)=0\\quad\\Longrightarrow\\quad a\\left(x-x_0\\right)=-b\\left(y-y_0\\right).$$\n\nDivide by $d$ and write $a=d\\alpha$, $b=d\\beta$ with $\\gcd(\\alpha,\\beta)=1$: $$\\alpha\\left(x-x_0\\right)=-\\beta\\left(y-y_0\\right).$$\n\nThe right side is a multiple of $\\beta$, hence so is the left; since $\\gcd(\\alpha,\\beta)=1$, coprimality forces $\\beta\\mid x-x_0$. Write $x-x_0=\\beta t$; substituting gives $\\alpha\\beta t=-\\beta\\left(y-y_0\\right)$, so $y-y_0=-\\alpha t$.\n\nThese are exactly the stated formulas, since $\\beta=\\tfrac bd$ and $\\alpha=\\tfrac ad$. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Решите в целых числах $6x+15y=27$.",
      "en": "Solve $6x+15y=27$ in integers."
     },
     "steps": {
      "ru": [
       "$\\gcd(6,15)=3$, и $3\\mid27$ — решения есть.",
       "Поделим всё уравнение на $3$: $\\ 2x+5y=9$.",
       "Одно решение видно сразу: $x_0=2$, $y_0=1$ (ведь $4+5=9$).",
       "По теореме все решения: $x=2+5t$, $y=1-2t$.",
       "Проверка при $t=1$: $x=7$, $y=-1$, и $6\\cdot7+15\\cdot(-1)=42-15=27$ ✓"
      ],
      "en": [
       "$\\gcd(6,15)=3$ and $3\\mid27$, so solutions exist.",
       "Divide the whole equation by $3$: $\\ 2x+5y=9$.",
       "One solution is visible: $x_0=2$, $y_0=1$ (since $4+5=9$).",
       "By the theorem all solutions are $x=2+5t$, $y=1-2t$.",
       "Check at $t=1$: $x=7$, $y=-1$, and $6\\cdot7+15\\cdot(-1)=27$ ✓"
      ]
     },
     "ans": {
      "ru": "$x=2+5t$, $y=1-2t$ при $t\\in\\mathbb{Z}$.",
      "en": "$x=2+5t$, $y=1-2t$ for $t\\in\\mathbb{Z}$."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Сколько решений в **натуральных** числах у уравнения $7x+11y=100$?",
      "en": "How many solutions in **positive** integers does $7x+11y=100$ have?"
     },
     "steps": {
      "ru": [
       "$\\gcd(7,11)=1$ делит $100$, значит целые решения есть.",
       "Подберём одно: $y=4$ даёт $7x=56$, то есть $x=8$.",
       "Все целые решения: $x=8+11t$, $y=4-7t$.",
       "Условие $x\\ge1$ даёт $t\\ge-\\tfrac{7}{11}$, то есть $t\\ge0$; условие $y\\ge1$ даёт $t\\le\\tfrac37$, то есть $t\\le0$.",
       "Остаётся единственное значение $t=0$."
      ],
      "en": [
       "$\\gcd(7,11)=1$ divides $100$, so integer solutions exist.",
       "Find one: $y=4$ gives $7x=56$, i.e. $x=8$.",
       "All integer solutions: $x=8+11t$, $y=4-7t$.",
       "Requiring $x\\ge1$ gives $t\\ge0$; requiring $y\\ge1$ gives $t\\le0$.",
       "Only $t=0$ survives."
      ]
     },
     "ans": {
      "ru": "Ровно одно решение: $(x,y)=(8,4)$.",
      "en": "Exactly one solution: $(x,y)=(8,4)$."
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Схема всегда одна и та же: **проверить делимость** $\\gcd(a,b)\\mid c$, **найти одно** решение (перебором или обратным ходом алгоритма Евклида), **выписать семейство**, и лишь потом накладывать дополнительные условия вроде положительности — они превращаются в неравенства на параметр $t$.",
      "en": "The routine never changes: **check** that $\\gcd(a,b)\\mid c$, **find one** solution (by inspection or by running the Euclidean algorithm backwards), **write the family**, and only then impose extra conditions such as positivity — they turn into inequalities on the parameter $t$."
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
     "t": "p",
     "text": {
      "ru": "Мы уже пользовались разложением на простые множители — пора доказать, что оно существует и единственно. Именно единственность превращает разложение в инструмент: она позволяет сравнивать показатели и делать выводы о делимости.",
      "en": "We have already used prime factorisation — it is time to prove that it exists and is unique. Uniqueness is what turns factorisation into a tool: it lets us compare exponents and read off divisibility."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Лемма Евклида",
      "en": "Euclid’s lemma"
     },
     "text": {
      "ru": "Если простое $p$ делит произведение $ab$, то $p\\mid a$ или $p\\mid b$.",
      "en": "If a prime $p$ divides a product $ab$, then $p\\mid a$ or $p\\mid b$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Пусть $p\\mid ab$ и $p\\nmid a$. Делители простого $p$ — только $1$ и $p$, поэтому $\\gcd(p,a)$ равен $1$ или $p$; второе означало бы $p\\mid a$, что исключено. Значит $\\gcd(p,a)=1$.\n\nПо соотношению Безу найдутся целые $u,v$ с $$up+va=1 .$$ Умножим на $b$: $$upb+v\\,ab=b .$$ Первое слагаемое делится на $p$ очевидно, второе — потому что $p\\mid ab$. Значит $p$ делит их сумму, то есть $p\\mid b$. $\\blacksquare$",
      "en": "Suppose $p\\mid ab$ and $p\\nmid a$. The only divisors of the prime $p$ are $1$ and $p$, so $\\gcd(p,a)$ is $1$ or $p$; the latter would mean $p\\mid a$, which is excluded. Hence $\\gcd(p,a)=1$.\n\nBézout gives integers $u,v$ with $$up+va=1 .$$ Multiply by $b$: $$upb+v\\,ab=b .$$ The first term is visibly a multiple of $p$, the second because $p\\mid ab$. So $p$ divides their sum, i.e. $p\\mid b$. $\\blacksquare$"
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Простота здесь необходима. Число $6$ делит $4\\cdot9=36$, но не делит ни $4$, ни $9$. Именно поэтому лемма Евклида — утверждение о **простых**, а не о любых делителях.",
      "en": "Primality is essential here. The number $6$ divides $4\\cdot9=36$ but divides neither $4$ nor $9$. That is exactly why Euclid’s lemma is a statement about **primes**, not about divisors in general."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Основная теорема арифметики",
      "en": "The fundamental theorem of arithmetic"
     },
     "text": {
      "ru": "Каждое целое число $n>1$ раскладывается в произведение простых, и притом **единственным** образом с точностью до порядка сомножителей: $$n=p_1^{\\alpha_1}p_2^{\\alpha_2}\\cdots p_k^{\\alpha_k},\\qquad p_1<p_2<\\dots<p_k,\\quad \\alpha_i\\ge1 .$$",
      "en": "Every integer $n>1$ is a product of primes, and the factorisation is **unique** up to the order of the factors: $$n=p_1^{\\alpha_1}p_2^{\\alpha_2}\\cdots p_k^{\\alpha_k},\\qquad p_1<p_2<\\dots<p_k,\\quad \\alpha_i\\ge1 .$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Существование (сильная индукция).** Пусть утверждение верно для всех чисел, меньших $n$. Если $n$ простое, разложение состоит из одного множителя. Иначе $n=ab$ с $1<a,b<n$; по предположению индукции $a$ и $b$ раскладываются на простые, и произведение их разложений даёт разложение для $n$ ✓\n\n**Единственность (индукция и лемма Евклида).** Пусть $$n=p_1p_2\\cdots p_s=q_1q_2\\cdots q_t $$ — два разложения на простые (не обязательно различные). Простое $p_1$ делит правую часть, значит по лемме Евклида делит один из множителей $q_j$; но $q_j$ простое, поэтому $p_1=q_j$. Сократим обе части на $p_1$ и получим два разложения меньшего числа $n/p_1$. По индукции они совпадают с точностью до порядка, а значит совпадают и исходные. $\\blacksquare$",
      "en": "**Existence (strong induction).** Assume the claim for all numbers below $n$. If $n$ is prime, the factorisation is a single factor. Otherwise $n=ab$ with $1<a,b<n$; by the induction hypothesis $a$ and $b$ factor into primes, and multiplying the two factorisations gives one for $n$ ✓\n\n**Uniqueness (induction plus Euclid’s lemma).** Suppose $$n=p_1p_2\\cdots p_s=q_1q_2\\cdots q_t $$ are two prime factorisations. The prime $p_1$ divides the right-hand side, so by Euclid’s lemma it divides some $q_j$; as $q_j$ is prime, $p_1=q_j$. Cancel $p_1$ from both sides to get two factorisations of the smaller number $n/p_1$. By induction they agree up to order, hence so do the originals. $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Делимость на языке показателей",
      "en": "Divisibility in the language of exponents"
     },
     "text": {
      "ru": "Пусть $$a=\\prod_i p_i^{\\alpha_i},\\qquad b=\\prod_i p_i^{\\beta_i}$$ (по одному и тому же набору простых, нулевые показатели разрешены). Тогда $$a\\mid b\\quad\\Longleftrightarrow\\quad \\alpha_i\\le\\beta_i\\ \\text{для всех } i ,$$ $$\\gcd(a,b)=\\prod_i p_i^{\\min\\left(\\alpha_i,\\beta_i\\right)},\\qquad \\operatorname{lcm}(a,b)=\\prod_i p_i^{\\max\\left(\\alpha_i,\\beta_i\\right)} .$$",
      "en": "Let $$a=\\prod_i p_i^{\\alpha_i},\\qquad b=\\prod_i p_i^{\\beta_i}$$ over the same list of primes, zero exponents allowed. Then $$a\\mid b\\quad\\Longleftrightarrow\\quad \\alpha_i\\le\\beta_i\\ \\text{for every } i ,$$ $$\\gcd(a,b)=\\prod_i p_i^{\\min\\left(\\alpha_i,\\beta_i\\right)},\\qquad \\operatorname{lcm}(a,b)=\\prod_i p_i^{\\max\\left(\\alpha_i,\\beta_i\\right)} .$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Критерий делимости.** Если $\\alpha_i\\le\\beta_i$ при всех $i$, то $b=a\\cdot\\prod_i p_i^{\\beta_i-\\alpha_i}$, и второй множитель целый — значит $a\\mid b$. Обратно, пусть $b=ac$. Разложим $c$ на простые; по единственности разложения показатель простого $p_i$ в правой части равен $\\alpha_i+(\\text{показатель в } c)\\ge\\alpha_i$, а слева он равен $\\beta_i$. Значит $\\beta_i\\ge\\alpha_i$ ✓\n\n**Формула для НОД.** Число $d=\\prod p_i^{\\gamma_i}$ делит и $a$, и $b$ тогда и только тогда, когда $\\gamma_i\\le\\alpha_i$ и $\\gamma_i\\le\\beta_i$, то есть $\\gamma_i\\le\\min\\left(\\alpha_i,\\beta_i\\right)$. Наибольшее такое $d$ получается при $\\gamma_i=\\min\\left(\\alpha_i,\\beta_i\\right)$ ✓\n\n**Формула для НОК** доказывается симметрично: кратные $a$ и $b$ — это числа с показателями не меньше $\\alpha_i$ и не меньше $\\beta_i$. $\\blacksquare$",
      "en": "**The divisibility test.** If $\\alpha_i\\le\\beta_i$ for all $i$ then $b=a\\cdot\\prod_i p_i^{\\beta_i-\\alpha_i}$ with an integer second factor, so $a\\mid b$. Conversely let $b=ac$ and factor $c$; by uniqueness the exponent of $p_i$ on the right is $\\alpha_i+(\\text{its exponent in } c)\\ge\\alpha_i$, while on the left it is $\\beta_i$. So $\\beta_i\\ge\\alpha_i$ ✓\n\n**The gcd formula.** A number $d=\\prod p_i^{\\gamma_i}$ divides both $a$ and $b$ exactly when $\\gamma_i\\le\\alpha_i$ and $\\gamma_i\\le\\beta_i$, i.e. $\\gamma_i\\le\\min\\left(\\alpha_i,\\beta_i\\right)$. The largest such $d$ takes $\\gamma_i=\\min\\left(\\alpha_i,\\beta_i\\right)$ ✓\n\n**The lcm formula** is symmetric: common multiples are the numbers whose exponents are at least $\\alpha_i$ and at least $\\beta_i$. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите $\\gcd$ и $\\operatorname{lcm}$ чисел $600$ и $540$ через разложения.",
      "en": "Find the gcd and lcm of $600$ and $540$ from their factorisations."
     },
     "steps": {
      "ru": [
       "$600=2^{3}\\cdot3\\cdot5^{2}$ и $540=2^{2}\\cdot3^{3}\\cdot5$.",
       "Минимумы показателей: $2^{\\min(3,2)}=2^{2}$, $3^{\\min(1,3)}=3$, $5^{\\min(2,1)}=5$.",
       "Значит $\\gcd=4\\cdot3\\cdot5=60$.",
       "Максимумы: $2^{3}\\cdot3^{3}\\cdot5^{2}=8\\cdot27\\cdot25=5400$.",
       "Проверка тождеством: $60\\cdot5400=324\\,000$ и $600\\cdot540=324\\,000$ ✓"
      ],
      "en": [
       "$600=2^{3}\\cdot3\\cdot5^{2}$ and $540=2^{2}\\cdot3^{3}\\cdot5$.",
       "Minimum exponents: $2^{\\min(3,2)}=2^{2}$, $3^{\\min(1,3)}=3$, $5^{\\min(2,1)}=5$.",
       "So $\\gcd=4\\cdot3\\cdot5=60$.",
       "Maxima: $2^{3}\\cdot3^{3}\\cdot5^{2}=8\\cdot27\\cdot25=5400$.",
       "Check against the identity: $60\\cdot5400=324\\,000=600\\cdot540$ ✓"
      ]
     },
     "ans": {
      "ru": "$\\gcd=60$, $\\operatorname{lcm}=5400$.",
      "en": "$\\gcd=60$, $\\operatorname{lcm}=5400$."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Степень делит степень",
      "en": "Powers inherit divisibility"
     },
     "text": {
      "ru": "Если $\\gcd(a,b)=1$ и $ab$ — точный $n$-й степень, то каждый из множителей $a$ и $b$ сам является точной $n$-й степенью (с точностью до знака при чётном $n$).",
      "en": "If $\\gcd(a,b)=1$ and $ab$ is a perfect $n$-th power, then each of $a$ and $b$ is itself a perfect $n$-th power (up to sign when $n$ is even)."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Возьмём любое простое $p$ и обозначим через $\\alpha$ и $\\beta$ его показатели в $a$ и в $b$. Так как $\\gcd(a,b)=1$, простое $p$ не может делить оба числа, значит одно из чисел $\\alpha,\\beta$ равно нулю.\n\nПоказатель $p$ в произведении равен $\\alpha+\\beta$, а произведение — точная $n$-я степень, поэтому $n\\mid\\alpha+\\beta$. Но одно из слагаемых нулевое, значит $n$ делит и $\\alpha$, и $\\beta$.\n\nЭто верно для каждого простого, поэтому все показатели в $a$ (и в $b$) кратны $n$, то есть каждое из чисел — точная $n$-я степень. $\\blacksquare$",
      "en": "Take any prime $p$ and let $\\alpha$, $\\beta$ be its exponents in $a$ and $b$. Since $\\gcd(a,b)=1$, the prime $p$ cannot divide both, so one of $\\alpha,\\beta$ is zero.\n\nThe exponent of $p$ in the product is $\\alpha+\\beta$, and the product is a perfect $n$-th power, so $n\\mid\\alpha+\\beta$. As one summand vanishes, $n$ divides both $\\alpha$ and $\\beta$.\n\nThis holds for every prime, so all exponents in $a$ (and in $b$) are multiples of $n$: each number is a perfect $n$-th power. $\\blacksquare$"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Это одна из самых частых «рабочих лошадок» олимпиадной теории чисел. Например, из $xy=z^{2}$ при $\\gcd(x,y)=1$ сразу следует, что $x$ и $y$ — квадраты; именно так описывают все пифагоровы тройки.",
      "en": "This is one of the great workhorses of olympiad number theory. From $xy=z^{2}$ with $\\gcd(x,y)=1$ it follows at once that $x$ and $y$ are squares — precisely the step that describes all Pythagorean triples."
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
    },
    {
     "t": "thm",
     "name": {
      "ru": "Универсальное свойство НОК",
      "en": "The universal property of the lcm"
     },
     "text": {
      "ru": "Каждое общее кратное чисел $a$ и $b$ делится на $\\operatorname{lcm}(a,b)$. Симметрично к НОД: наименьшее общее кратное — то, которое делит все остальные.",
      "en": "Every common multiple of $a$ and $b$ is divisible by $\\operatorname{lcm}(a,b)$. Symmetric to the gcd: the least common multiple is the one dividing all the others."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Обозначим $L=\\operatorname{lcm}(a,b)$ и пусть $M$ — произвольное общее кратное. Разделим с остатком: $$M=Lq+r,\\qquad 0\\le r<L .$$\n\nЧисло $a$ делит и $M$, и $L$, значит делит $r=M-Lq$; то же верно для $b$. Значит $r$ — общее кратное чисел $a$ и $b$, причём $0\\le r<L$.\n\nНо $L$ — **наименьшее положительное** общее кратное, поэтому $r$ не может быть положительным. Значит $r=0$, то есть $L\\mid M$. $\\blacksquare$",
      "en": "Write $L=\\operatorname{lcm}(a,b)$ and let $M$ be any common multiple. Divide with remainder: $$M=Lq+r,\\qquad 0\\le r<L .$$\n\nThe number $a$ divides both $M$ and $L$, hence divides $r=M-Lq$; the same holds for $b$. So $r$ is a common multiple of $a$ and $b$ with $0\\le r<L$.\n\nBut $L$ is the **least positive** common multiple, so $r$ cannot be positive. Hence $r=0$, i.e. $L\\mid M$. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Автобусы трёх маршрутов отходят от вокзала каждые $12$, $18$ и $30$ минут и вышли одновременно в $6{:}00$. Когда они снова отойдут вместе?",
      "en": "Buses on three routes leave the station every $12$, $18$ and $30$ minutes and departed together at $6{:}00$. When do they next leave together?"
     },
     "steps": {
      "ru": [
       "Момент совместного отправления — это общее кратное чисел $12$, $18$, $30$.",
       "По универсальному свойству все такие моменты кратны наименьшему, поэтому достаточно найти $\\operatorname{lcm}(12,18,30)$.",
       "Разложим: $12=2^{2}\\cdot3$, $18=2\\cdot3^{2}$, $30=2\\cdot3\\cdot5$.",
       "Берём каждое простое в наибольшей степени: $2^{2}\\cdot3^{2}\\cdot5=180$.",
       "$180$ минут — это ровно три часа."
      ],
      "en": [
       "A joint departure happens at a common multiple of $12$, $18$, $30$.",
       "By the universal property every such moment is a multiple of the least one, so we need $\\operatorname{lcm}(12,18,30)$.",
       "Factor: $12=2^{2}\\cdot3$, $18=2\\cdot3^{2}$, $30=2\\cdot3\\cdot5$.",
       "Take each prime to its highest power: $2^{2}\\cdot3^{2}\\cdot5=180$.",
       "$180$ minutes is exactly three hours."
      ]
     },
     "ans": {
      "ru": "В $9{:}00$, и далее каждые три часа.",
      "en": "At $9{:}00$, and every three hours after that."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Для трёх и более чисел формулы через показатели по-прежнему работают: $$\\gcd=\\prod p^{\\min},\\qquad \\operatorname{lcm}=\\prod p^{\\max},$$ где минимум и максимум берутся по всем числам набора. А вот тождество $\\gcd\\cdot\\operatorname{lcm}=$ произведение остаётся верным только для **двух** чисел.",
      "en": "For three or more numbers the exponent formulas still hold: $$\\gcd=\\prod p^{\\min},\\qquad \\operatorname{lcm}=\\prod p^{\\max},$$ with the minimum and maximum over the whole list. The identity $\\gcd\\cdot\\operatorname{lcm}=$ product, however, survives only for **two** numbers."
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
    },
    {
     "t": "def",
     "name": {
      "ru": "Мультипликативная функция",
      "en": "Multiplicative function"
     },
     "text": {
      "ru": "Функция $f$, определённая на натуральных числах, называется **мультипликативной**, если $f(1)=1$ и $$f(mn)=f(m)f(n)\\quad\\text{для всех взаимно простых } m,n .$$",
      "en": "A function $f$ on the positive integers is **multiplicative** if $f(1)=1$ and $$f(mn)=f(m)f(n)\\quad\\text{for all coprime } m,n .$$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Мультипликативность $d$ и $\\sigma$",
      "en": "Multiplicativity of $d$ and $\\sigma$"
     },
     "text": {
      "ru": "Функции $d(n)$ (число делителей) и $\\sigma(n)$ (их сумма) мультипликативны: при $\\gcd(m,n)=1$ $$d(mn)=d(m)\\,d(n),\\qquad \\sigma(mn)=\\sigma(m)\\,\\sigma(n).$$",
      "en": "The functions $d(n)$ (number of divisors) and $\\sigma(n)$ (their sum) are multiplicative: for $\\gcd(m,n)=1$ $$d(mn)=d(m)\\,d(n),\\qquad \\sigma(mn)=\\sigma(m)\\,\\sigma(n).$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Пусть $\\gcd(m,n)=1$. Ключевое наблюдение: делители произведения $mn$ находятся во взаимно однозначном соответствии с **парами** делителей $$e\\mid m,\\qquad f\\mid n ,$$ причём соответствие задаётся произведением $e f$.\n\n**Почему это биекция.** Каждая пара даёт делитель $ef$ числа $mn$ — это очевидно. Обратно, пусть $g\\mid mn$; положим $$e=\\gcd(g,m),\\qquad f=\\gcd(g,n).$$ Из взаимной простоты $m$ и $n$ следует (сравнением показателей простых), что $g=ef$, и такое представление единственно: каждое простое числа $g$ делит ровно одно из чисел $m$, $n$ и потому попадает целиком либо в $e$, либо в $f$.\n\n**Считаем.** Число пар равно $d(m)d(n)$, откуда первая формула. Сумма всех произведений равна $$\\sum_{e\\mid m}\\ \\sum_{f\\mid n} ef=\\left(\\sum_{e\\mid m}e\\right)\\left(\\sum_{f\\mid n}f\\right)=\\sigma(m)\\sigma(n),$$ откуда вторая. $\\blacksquare$",
      "en": "Let $\\gcd(m,n)=1$. The key observation is that the divisors of $mn$ correspond one-to-one with **pairs** of divisors $$e\\mid m,\\qquad f\\mid n ,$$ the correspondence being $(e,f)\\mapsto ef$.\n\n**Why it is a bijection.** Each pair clearly gives a divisor $ef$ of $mn$. Conversely, given $g\\mid mn$ put $$e=\\gcd(g,m),\\qquad f=\\gcd(g,n).$$ Coprimality of $m$ and $n$ shows (by comparing prime exponents) that $g=ef$, and the representation is unique: every prime of $g$ divides exactly one of $m$, $n$ and so lands entirely in $e$ or entirely in $f$.\n\n**Counting.** The number of pairs is $d(m)d(n)$, giving the first formula. The sum of all the products is $$\\sum_{e\\mid m}\\ \\sum_{f\\mid n} ef=\\left(\\sum_{e\\mid m}e\\right)\\left(\\sum_{f\\mid n}f\\right)=\\sigma(m)\\sigma(n),$$ giving the second. $\\blacksquare$"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Мультипликативность — причина, по которой формулы для $d(n)$ и $\\sigma(n)$ выглядят как **произведения по простым**: достаточно понять функцию на степенях простых, а дальше она собирается сама.",
      "en": "Multiplicativity is why the formulas for $d(n)$ and $\\sigma(n)$ look like **products over primes**: understand the function on prime powers and it assembles itself."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Произведение всех делителей",
      "en": "The product of all divisors"
     },
     "text": {
      "ru": "Произведение всех натуральных делителей числа $n>1$ равно $$\\prod_{e\\mid n}e=n^{\\,d(n)/2} .$$",
      "en": "The product of all positive divisors of $n>1$ equals $$\\prod_{e\\mid n}e=n^{\\,d(n)/2} .$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Обозначим искомое произведение через $P$ и запишем его дважды — в возрастающем и в убывающем порядке делителей. Делители разбиваются на пары $\\left(e,\\ \\tfrac ne\\right)$, и произведение в каждой паре равно $n$.\n\nФормально: $$P^{2}=\\prod_{e\\mid n}e\\ \\cdot\\ \\prod_{e\\mid n}\\frac ne=\\prod_{e\\mid n}\\left(e\\cdot\\frac ne\\right)=n^{\\,d(n)} ,$$ где мы воспользовались тем, что при пробегании $e$ по всем делителям величина $\\tfrac ne$ тоже пробегает все делители.\n\nИзвлекая корень, получаем $P=n^{\\,d(n)/2}$. $\\blacksquare$\n\n**Заметьте:** показатель $\\tfrac{d(n)}2$ может быть полуцелым — это происходит ровно тогда, когда $n$ полный квадрат, и тогда «непарным» остаётся делитель $\\sqrt n$.",
      "en": "Call the product $P$ and write it twice, once in increasing and once in decreasing order of divisors. The divisors pair up as $\\left(e,\\ \\tfrac ne\\right)$, each pair multiplying to $n$.\n\nFormally $$P^{2}=\\prod_{e\\mid n}e\\ \\cdot\\ \\prod_{e\\mid n}\\frac ne=\\prod_{e\\mid n}\\left(e\\cdot\\frac ne\\right)=n^{\\,d(n)} ,$$ using that as $e$ runs over all divisors so does $\\tfrac ne$.\n\nTaking square roots, $P=n^{\\,d(n)/2}$. $\\blacksquare$\n\n**Note:** the exponent $\\tfrac{d(n)}2$ may be a half-integer — exactly when $n$ is a perfect square, in which case the unpaired divisor is $\\sqrt n$."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите наименьшее натуральное число, имеющее ровно $10$ делителей.",
      "en": "Find the smallest positive integer with exactly $10$ divisors."
     },
     "steps": {
      "ru": [
       "Если $n=\\prod p_i^{\\alpha_i}$, то $d(n)=\\prod\\left(\\alpha_i+1\\right)$, значит надо разложить $10$ в произведение множителей, больших единицы.",
       "Варианты: $10$ и $5\\cdot2$.",
       "Разложению $10$ отвечают показатели $(9)$: наименьшее такое число $2^{9}=512$.",
       "Разложению $5\\cdot2$ отвечают показатели $(4,1)$; бо́льший показатель ставим к меньшему простому: $2^{4}\\cdot3=48$.",
       "Сравниваем: $48<512$."
      ],
      "en": [
       "If $n=\\prod p_i^{\\alpha_i}$ then $d(n)=\\prod\\left(\\alpha_i+1\\right)$, so write $10$ as a product of factors greater than one.",
       "The options are $10$ and $5\\cdot2$.",
       "The factorisation $10$ gives exponents $(9)$: the smallest such number is $2^{9}=512$.",
       "The factorisation $5\\cdot2$ gives exponents $(4,1)$; put the larger exponent on the smaller prime: $2^{4}\\cdot3=48$.",
       "Compare: $48<512$."
      ]
     },
     "ans": {
      "ru": "$48$; его делители $1,2,3,4,6,8,12,16,24,48$ — ровно десять.",
      "en": "$48$; its divisors are $1,2,3,4,6,8,12,16,24,48$ — exactly ten."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Функция $\\sigma$ стоит за старинным понятием: число называют **совершенным**, если $\\sigma(n)=2n$, то есть оно равно сумме своих собственных делителей. Первые совершенные числа — $6$, $28$, $496$, $8128$; все чётные совершенные числа имеют вид $2^{p-1}\\left(2^{p}-1\\right)$ с простым $2^{p}-1$, а существуют ли нечётные — не известно до сих пор.",
      "en": "The function $\\sigma$ sits behind an ancient notion: $n$ is **perfect** if $\\sigma(n)=2n$, i.e. it equals the sum of its proper divisors. The first perfect numbers are $6$, $28$, $496$, $8128$; every even perfect number has the form $2^{p-1}\\left(2^{p}-1\\right)$ with $2^{p}-1$ prime, and whether an odd one exists is still unknown."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Простые внутри факториала",
    "en": "Primes inside a factorial"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Факториал $n!$ — произведение всех чисел до $n$, и часто нужно знать не сам факториал, а **сколько раз** в него входит данное простое. Ответ даёт формула Лежандра.",
      "en": "The factorial $n!$ multiplies everything up to $n$, and one often needs not the factorial itself but **how many times** a given prime sits inside it. Legendre’s formula answers that."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Формула Лежандра",
      "en": "Legendre’s formula"
     },
     "text": {
      "ru": "Показатель простого $p$ в разложении числа $n!$ равен $$v_p(n!)=\\left\\lfloor\\frac np\\right\\rfloor+\\left\\lfloor\\frac n{p^{2}}\\right\\rfloor+\\left\\lfloor\\frac n{p^{3}}\\right\\rfloor+\\cdots$$ (сумма конечна: слагаемые обращаются в нуль, как только $p^{k}>n$).",
      "en": "The exponent of a prime $p$ in $n!$ equals $$v_p(n!)=\\left\\lfloor\\frac np\\right\\rfloor+\\left\\lfloor\\frac n{p^{2}}\\right\\rfloor+\\left\\lfloor\\frac n{p^{3}}\\right\\rfloor+\\cdots$$ (a finite sum: the terms vanish once $p^{k}>n$)."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Посчитаем вклад каждого сомножителя двумя способами — «по этажам».\n\nСреди чисел $1,2,\\dots,n$ ровно $\\left\\lfloor\\tfrac np\\right\\rfloor$ кратны $p$: это $p,2p,3p,\\dots$ Каждое из них вносит в произведение хотя бы одну степень $p$.\n\nСреди тех же чисел ровно $\\left\\lfloor\\tfrac n{p^{2}}\\right\\rfloor$ кратны $p^{2}$; каждое такое число вносит **ещё одну** степень сверх уже посчитанной.\n\nВообще, кратные $p^{k}$ вносят по одной дополнительной степени на $k$-м этаже, и их $\\left\\lfloor\\tfrac n{p^{k}}\\right\\rfloor$ штук.\n\nСложив вклады всех этажей, получаем ровно объявленную сумму: число, делящееся на $p^{m}$ и не более, будет посчитано ровно $m$ раз — по разу на каждом из первых $m$ этажей. $\\blacksquare$",
      "en": "Count the contribution of each factor \"floor by floor\".\n\nAmong $1,2,\\dots,n$ exactly $\\left\\lfloor\\tfrac np\\right\\rfloor$ are multiples of $p$, namely $p,2p,3p,\\dots$; each contributes at least one power of $p$.\n\nAmong the same numbers exactly $\\left\\lfloor\\tfrac n{p^{2}}\\right\\rfloor$ are multiples of $p^{2}$; each of those contributes **one more** power beyond the one already counted.\n\nIn general the multiples of $p^{k}$ contribute one extra power each on the $k$-th floor, and there are $\\left\\lfloor\\tfrac n{p^{k}}\\right\\rfloor$ of them.\n\nAdding the floors gives exactly the stated sum: a number divisible by $p^{m}$ and no further is counted exactly $m$ times, once on each of the first $m$ floors. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Сколькими нулями оканчивается $100!$?",
      "en": "In how many zeros does $100!$ end?"
     },
     "steps": {
      "ru": [
       "Нуль на конце — это множитель $10=2\\cdot5$, а двоек в факториале заведомо больше, чем пятёрок.",
       "Значит ответ равен $v_5(100!)$.",
       "$\\left\\lfloor\\tfrac{100}{5}\\right\\rfloor=20$, $\\left\\lfloor\\tfrac{100}{25}\\right\\rfloor=4$, $\\left\\lfloor\\tfrac{100}{125}\\right\\rfloor=0$.",
       "Итого $20+4=24$."
      ],
      "en": [
       "A trailing zero is a factor $10=2\\cdot5$, and a factorial always has more twos than fives.",
       "So the answer is $v_5(100!)$.",
       "$\\left\\lfloor\\tfrac{100}{5}\\right\\rfloor=20$, $\\left\\lfloor\\tfrac{100}{25}\\right\\rfloor=4$, $\\left\\lfloor\\tfrac{100}{125}\\right\\rfloor=0$.",
       "Total $20+4=24$."
      ]
     },
     "ans": {
      "ru": "$24$ нуля.",
      "en": "$24$ zeros."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите наибольшее $k$, для которого $3^{k}$ делит $50!$.",
      "en": "Find the largest $k$ with $3^{k}\\mid50!$."
     },
     "steps": {
      "ru": [
       "$\\left\\lfloor\\tfrac{50}{3}\\right\\rfloor=16$ — кратные трёх.",
       "$\\left\\lfloor\\tfrac{50}{9}\\right\\rfloor=5$ — кратные девяти дают ещё по одной тройке.",
       "$\\left\\lfloor\\tfrac{50}{27}\\right\\rfloor=1$, а $\\left\\lfloor\\tfrac{50}{81}\\right\\rfloor=0$.",
       "Складываем: $16+5+1=22$."
      ],
      "en": [
       "$\\left\\lfloor\\tfrac{50}{3}\\right\\rfloor=16$ multiples of three.",
       "$\\left\\lfloor\\tfrac{50}{9}\\right\\rfloor=5$ multiples of nine give one more three each.",
       "$\\left\\lfloor\\tfrac{50}{27}\\right\\rfloor=1$, and $\\left\\lfloor\\tfrac{50}{81}\\right\\rfloor=0$.",
       "Adding: $16+5+1=22$."
      ]
     },
     "ans": {
      "ru": "$k=22$.",
      "en": "$k=22$."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Отсюда же следует, что биномиальный коэффициент $\\dbinom nk=\\dfrac{n!}{k!\\,(n-k)!}$ всегда целый: показатель каждого простого в знаменателе не превосходит показателя в числителе, потому что $$\\left\\lfloor x+y\\right\\rfloor\\ \\ge\\ \\left\\lfloor x\\right\\rfloor+\\left\\lfloor y\\right\\rfloor .$$",
      "en": "The same formula shows the binomial coefficient $\\dbinom nk=\\dfrac{n!}{k!\\,(n-k)!}$ is always an integer: every prime’s exponent in the denominator is at most its exponent in the numerator, because $$\\left\\lfloor x+y\\right\\rfloor\\ \\ge\\ \\left\\lfloor x\\right\\rfloor+\\left\\lfloor y\\right\\rfloor .$$"
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Функция Эйлера и три классические теоремы",
    "en": "Euler’s totient and three classical theorems"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "До сих пор мы считали делители. Теперь посчитаем числа, **взаимно простые** с данным, — и обнаружим, что этот счёт управляет степенями по модулю $n$.",
      "en": "So far we have counted divisors. Now we count the numbers **coprime** to a given one — and find that this count governs how powers behave modulo $n$."
     }
    },
    {
     "t": "def",
     "name": {
      "ru": "Функция Эйлера",
      "en": "Euler’s totient function"
     },
     "text": {
      "ru": "$\\varphi(n)$ — количество чисел из набора $1,2,\\dots,n$, взаимно простых с $n$. Например, $$\\varphi(1)=1,\\quad\\varphi(6)=2\\ (\\text{это } 1,5),\\quad\\varphi(7)=6,\\quad\\varphi(12)=4\\ (\\text{это } 1,5,7,11).$$",
      "en": "$\\varphi(n)$ counts the numbers among $1,2,\\dots,n$ that are coprime to $n$. For instance $$\\varphi(1)=1,\\quad\\varphi(6)=2\\ (\\text{namely } 1,5),\\quad\\varphi(7)=6,\\quad\\varphi(12)=4\\ (\\text{namely } 1,5,7,11).$$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Формула Эйлера",
      "en": "Euler’s product formula"
     },
     "text": {
      "ru": "Если $n=p_1^{\\alpha_1}\\cdots p_k^{\\alpha_k}$, то $$\\varphi(n)=n\\prod_{i=1}^{k}\\left(1-\\frac1{p_i}\\right)=\\prod_{i=1}^{k}p_i^{\\alpha_i-1}\\left(p_i-1\\right).$$ В частности $\\varphi(p)=p-1$ и $\\varphi\\left(p^{\\alpha}\\right)=p^{\\alpha}-p^{\\alpha-1}$ для простого $p$.",
      "en": "If $n=p_1^{\\alpha_1}\\cdots p_k^{\\alpha_k}$ then $$\\varphi(n)=n\\prod_{i=1}^{k}\\left(1-\\frac1{p_i}\\right)=\\prod_{i=1}^{k}p_i^{\\alpha_i-1}\\left(p_i-1\\right).$$ In particular $\\varphi(p)=p-1$ and $\\varphi\\left(p^{\\alpha}\\right)=p^{\\alpha}-p^{\\alpha-1}$ for a prime $p$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Шаг 1: степень простого.** Среди чисел $1,\\dots,p^{\\alpha}$ не взаимно просты с $p^{\\alpha}$ ровно кратные $p$, а их $p^{\\alpha-1}$ штук. Значит $$\\varphi\\left(p^{\\alpha}\\right)=p^{\\alpha}-p^{\\alpha-1}=p^{\\alpha}\\left(1-\\frac1p\\right) \\quad\\checkmark$$\n\n**Шаг 2: мультипликативность.** Пусть $\\gcd(m,n)=1$; докажем $\\varphi(mn)=\\varphi(m)\\varphi(n)$. Выпишем числа $1,\\dots,mn$ в таблицу из $m$ строк и $n$ столбцов, поставив число $x$ в клетку с координатами $\\left(x\\bmod m,\\ x\\bmod n\\right)$. По китайской теореме об остатках это соответствие взаимно однозначно: каждая пара остатков встречается ровно один раз.\n\nЧисло $x$ взаимно просто с $mn$ тогда и только тогда, когда оно взаимно просто и с $m$, и с $n$, то есть когда **обе** его координаты взаимно просты со своими модулями. Первых координат подходит $\\varphi(m)$, вторых $\\varphi(n)$, и выбираются они независимо: $$\\varphi(mn)=\\varphi(m)\\varphi(n) \\quad\\checkmark$$\n\n**Шаг 3: сборка.** Степени разных простых попарно взаимно просты, поэтому $$\\varphi(n)=\\prod_i\\varphi\\left(p_i^{\\alpha_i}\\right)=\\prod_i p_i^{\\alpha_i}\\left(1-\\frac1{p_i}\\right)=n\\prod_i\\left(1-\\frac1{p_i}\\right). \\qquad\\blacksquare$$",
      "en": "**Step 1: a prime power.** Among $1,\\dots,p^{\\alpha}$ the numbers *not* coprime to $p^{\\alpha}$ are exactly the multiples of $p$, and there are $p^{\\alpha-1}$ of them. Hence $$\\varphi\\left(p^{\\alpha}\\right)=p^{\\alpha}-p^{\\alpha-1}=p^{\\alpha}\\left(1-\\frac1p\\right) \\quad\\checkmark$$\n\n**Step 2: multiplicativity.** Let $\\gcd(m,n)=1$; we show $\\varphi(mn)=\\varphi(m)\\varphi(n)$. Arrange $1,\\dots,mn$ in a table of $m$ rows and $n$ columns, placing $x$ at the cell $\\left(x\\bmod m,\\ x\\bmod n\\right)$. By the Chinese remainder theorem this is a bijection: each pair of residues occurs exactly once.\n\nNow $x$ is coprime to $mn$ exactly when it is coprime to both $m$ and $n$, i.e. when **both** coordinates are coprime to their moduli. There are $\\varphi(m)$ admissible first coordinates and $\\varphi(n)$ second ones, chosen independently: $$\\varphi(mn)=\\varphi(m)\\varphi(n) \\quad\\checkmark$$\n\n**Step 3: assembling.** Powers of distinct primes are pairwise coprime, so $$\\varphi(n)=\\prod_i\\varphi\\left(p_i^{\\alpha_i}\\right)=n\\prod_i\\left(1-\\frac1{p_i}\\right). \\qquad\\blacksquare$$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Вычислите $\\varphi(360)$.",
      "en": "Compute $\\varphi(360)$."
     },
     "steps": {
      "ru": [
       "$360=2^{3}\\cdot3^{2}\\cdot5$.",
       "По формуле $\\varphi(360)=360\\left(1-\\tfrac12\\right)\\left(1-\\tfrac13\\right)\\left(1-\\tfrac15\\right)$.",
       "Считаем: $360\\cdot\\tfrac12=180$, затем $180\\cdot\\tfrac23=120$, затем $120\\cdot\\tfrac45=96$.",
       "Проверка вторым видом формулы: $2^{2}\\cdot1\\ \\cdot\\ 3^{1}\\cdot2\\ \\cdot\\ 5^{0}\\cdot4=4\\cdot6\\cdot4=96$ ✓"
      ],
      "en": [
       "$360=2^{3}\\cdot3^{2}\\cdot5$.",
       "The formula gives $\\varphi(360)=360\\left(1-\\tfrac12\\right)\\left(1-\\tfrac13\\right)\\left(1-\\tfrac15\\right)$.",
       "Step by step: $360\\cdot\\tfrac12=180$, then $180\\cdot\\tfrac23=120$, then $120\\cdot\\tfrac45=96$.",
       "Check with the other form: $2^{2}\\cdot1\\ \\cdot\\ 3^{1}\\cdot2\\ \\cdot\\ 5^{0}\\cdot4=4\\cdot6\\cdot4=96$ ✓"
      ]
     },
     "ans": {
      "ru": "$\\varphi(360)=96$.",
      "en": "$\\varphi(360)=96$."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Свойства функции Эйлера",
      "en": "Properties of the totient"
     },
     "text": {
      "ru": "(1) $\\varphi(n)$ чётно при всех $n>2$; $\\;$ (2) $\\displaystyle\\sum_{d\\mid n}\\varphi(d)=n$; $\\;$ (3) $\\varphi(mn)=\\varphi(m)\\varphi(n)$ при $\\gcd(m,n)=1$.",
      "en": "(1) $\\varphi(n)$ is even for every $n>2$; $\\;$ (2) $\\displaystyle\\sum_{d\\mid n}\\varphi(d)=n$; $\\;$ (3) $\\varphi(mn)=\\varphi(m)\\varphi(n)$ whenever $\\gcd(m,n)=1$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**(1)** Если $n$ имеет нечётный простой делитель $p$, то множитель $p-1$ в формуле чётен, значит чётно и произведение. Иначе $n=2^{\\alpha}$ с $\\alpha\\ge2$ (случай $n>2$), и $\\varphi(n)=2^{\\alpha-1}$ чётно ✓\n\n**(2)** Разобьём числа $1,2,\\dots,n$ по значению $\\gcd$ с $n$. Числа с $\\gcd(x,n)=d$ — это в точности $x=d\\,y$, где $1\\le y\\le\\tfrac nd$ и $\\gcd\\left(y,\\tfrac nd\\right)=1$; таких $y$ ровно $\\varphi\\left(\\tfrac nd\\right)$.\n\nЗначит $$n=\\sum_{d\\mid n}\\varphi\\!\\left(\\frac nd\\right)=\\sum_{d\\mid n}\\varphi(d),$$ поскольку при пробегании $d$ по всем делителям величина $\\tfrac nd$ тоже пробегает все делители ✓\n\n**(3)** Доказано выше при выводе формулы. $\\blacksquare$",
      "en": "**(1)** If $n$ has an odd prime divisor $p$, the factor $p-1$ in the formula is even, hence so is the product. Otherwise $n=2^{\\alpha}$ with $\\alpha\\ge2$ (as $n>2$), and $\\varphi(n)=2^{\\alpha-1}$ is even ✓\n\n**(2)** Sort $1,2,\\dots,n$ by the value of $\\gcd$ with $n$. The numbers with $\\gcd(x,n)=d$ are exactly $x=d\\,y$ with $1\\le y\\le\\tfrac nd$ and $\\gcd\\left(y,\\tfrac nd\\right)=1$; there are $\\varphi\\left(\\tfrac nd\\right)$ such $y$.\n\nHence $$n=\\sum_{d\\mid n}\\varphi\\!\\left(\\frac nd\\right)=\\sum_{d\\mid n}\\varphi(d),$$ since as $d$ runs over the divisors so does $\\tfrac nd$ ✓\n\n**(3)** Proved above while deriving the formula. $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Малая теорема Ферма",
      "en": "Fermat’s little theorem"
     },
     "text": {
      "ru": "Если $p$ простое и $p\\nmid a$, то $$a^{\\,p-1}\\equiv1\\pmod p .$$ Без условия $p\\nmid a$ верна форма $a^{p}\\equiv a\\pmod p$, справедливая для **всех** целых $a$.",
      "en": "If $p$ is prime and $p\\nmid a$ then $$a^{\\,p-1}\\equiv1\\pmod p .$$ Without the hypothesis $p\\nmid a$ the form $a^{p}\\equiv a\\pmod p$ holds for **every** integer $a$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Рассмотрим ненулевые остатки $1,2,\\dots,p-1$ и умножим каждый на $a$.\n\n**Шаг 1: получается тот же набор.** Числа $a\\cdot1,\\ a\\cdot2,\\ \\dots,\\ a(p-1)$ дают попарно различные ненулевые остатки: если $ai\\equiv aj$, то $p\\mid a(i-j)$, а так как $p\\nmid a$, по лемме Евклида $p\\mid i-j$, откуда $i=j$ (ведь $|i-j|<p$). Нулевых остатков нет, потому что $p\\nmid a$ и $p\\nmid i$.\n\nЗначит эти $p-1$ чисел — те же остатки $1,\\dots,p-1$, лишь переставленные.\n\n**Шаг 2: перемножаем.** $$a^{\\,p-1}(p-1)!\\ \\equiv\\ (p-1)!\\pmod p .$$\n\n**Шаг 3: сокращаем.** Число $(p-1)!$ не делится на $p$ (все множители меньше $p$), поэтому на него можно сократить: $$a^{\\,p-1}\\equiv1\\pmod p . \\qquad\\blacksquare$$",
      "en": "Consider the non-zero residues $1,2,\\dots,p-1$ and multiply each by $a$.\n\n**Step 1: the same set comes back.** The numbers $a\\cdot1,\\dots,a(p-1)$ leave pairwise distinct non-zero residues: if $ai\\equiv aj$ then $p\\mid a(i-j)$, and since $p\\nmid a$ Euclid’s lemma gives $p\\mid i-j$, so $i=j$ (as $|i-j|<p$). None is zero because $p\\nmid a$ and $p\\nmid i$.\n\nSo these $p-1$ numbers are the residues $1,\\dots,p-1$ in some order.\n\n**Step 2: multiply them all.** $$a^{\\,p-1}(p-1)!\\ \\equiv\\ (p-1)!\\pmod p .$$\n\n**Step 3: cancel.** Since $(p-1)!$ is not divisible by $p$ (all its factors are smaller), we may cancel it: $$a^{\\,p-1}\\equiv1\\pmod p . \\qquad\\blacksquare$$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите остаток от деления $2^{1000}$ на $13$.",
      "en": "Find the remainder of $2^{1000}$ on division by $13$."
     },
     "steps": {
      "ru": [
       "$13$ простое и $13\\nmid2$, значит $2^{12}\\equiv1\\pmod{13}$.",
       "Поделим показатель на $12$ с остатком: $1000=12\\cdot83+4$.",
       "Тогда $2^{1000}=\\left(2^{12}\\right)^{83}\\cdot2^{4}\\equiv2^{4}=16\\equiv3\\pmod{13}$."
      ],
      "en": [
       "$13$ is prime and $13\\nmid2$, so $2^{12}\\equiv1\\pmod{13}$.",
       "Divide the exponent by $12$: $1000=12\\cdot83+4$.",
       "Then $2^{1000}=\\left(2^{12}\\right)^{83}\\cdot2^{4}\\equiv16\\equiv3\\pmod{13}$."
      ]
     },
     "ans": {
      "ru": "Остаток $3$.",
      "en": "The remainder is $3$."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Теорема Эйлера",
      "en": "Euler’s theorem"
     },
     "text": {
      "ru": "Если $\\gcd(a,n)=1$, то $$a^{\\varphi(n)}\\equiv1\\pmod n .$$ При простом $n=p$ это в точности малая теорема Ферма, ведь $\\varphi(p)=p-1$.",
      "en": "If $\\gcd(a,n)=1$ then $$a^{\\varphi(n)}\\equiv1\\pmod n .$$ For a prime $n=p$ this is exactly Fermat’s little theorem, since $\\varphi(p)=p-1$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Пусть $r_1,\\dots,r_{\\varphi(n)}$ — все остатки от $1$ до $n$, взаимно простые с $n$.\n\n**Шаг 1: умножение на $a$ переставляет их.** Каждое $ar_i$ взаимно просто с $n$ (общий простой делитель делил бы $a$ или $r_i$), и они попарно различны по модулю $n$: из $ar_i\\equiv ar_j$ следует $n\\mid a\\left(r_i-r_j\\right)$, а при $\\gcd(a,n)=1$ отсюда $n\\mid r_i-r_j$, то есть $r_i=r_j$.\n\nЗначит набор $ar_1,\\dots,ar_{\\varphi(n)}$ — тот же самый набор остатков, лишь переставленный.\n\n**Шаг 2: перемножаем и сокращаем.** $$a^{\\varphi(n)}\\prod_i r_i\\ \\equiv\\ \\prod_i r_i\\pmod n ,$$ а произведение $\\prod_i r_i$ взаимно просто с $n$, поэтому на него можно сократить: $$a^{\\varphi(n)}\\equiv1\\pmod n . \\qquad\\blacksquare$$",
      "en": "Let $r_1,\\dots,r_{\\varphi(n)}$ be the residues from $1$ to $n$ coprime to $n$.\n\n**Step 1: multiplying by $a$ permutes them.** Each $ar_i$ is coprime to $n$ (a common prime divisor would divide $a$ or $r_i$), and they are pairwise distinct mod $n$: from $ar_i\\equiv ar_j$ we get $n\\mid a\\left(r_i-r_j\\right)$, and $\\gcd(a,n)=1$ gives $n\\mid r_i-r_j$, i.e. $r_i=r_j$.\n\nSo $ar_1,\\dots,ar_{\\varphi(n)}$ is the same set of residues, permuted.\n\n**Step 2: multiply and cancel.** $$a^{\\varphi(n)}\\prod_i r_i\\ \\equiv\\ \\prod_i r_i\\pmod n ,$$ and $\\prod_i r_i$ is coprime to $n$, so it cancels: $$a^{\\varphi(n)}\\equiv1\\pmod n . \\qquad\\blacksquare$$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите две последние цифры числа $7^{2024}$.",
      "en": "Find the last two digits of $7^{2024}$."
     },
     "steps": {
      "ru": [
       "Две последние цифры — это остаток по модулю $100$.",
       "$\\gcd(7,100)=1$, и $\\varphi(100)=100\\left(1-\\tfrac12\\right)\\left(1-\\tfrac15\\right)=40$.",
       "По теореме Эйлера $7^{40}\\equiv1\\pmod{100}$.",
       "$2024=40\\cdot50+24$, значит $7^{2024}\\equiv7^{24}$.",
       "Считаем: $7^{2}=49$, $7^{4}=49^{2}=2401\\equiv1\\pmod{100}$.",
       "Значит $7^{24}=\\left(7^{4}\\right)^{6}\\equiv1$."
      ],
      "en": [
       "The last two digits are the remainder modulo $100$.",
       "$\\gcd(7,100)=1$ and $\\varphi(100)=100\\left(1-\\tfrac12\\right)\\left(1-\\tfrac15\\right)=40$.",
       "Euler’s theorem gives $7^{40}\\equiv1\\pmod{100}$.",
       "$2024=40\\cdot50+24$, so $7^{2024}\\equiv7^{24}$.",
       "Compute: $7^{2}=49$ and $7^{4}=2401\\equiv1\\pmod{100}$.",
       "Hence $7^{24}=\\left(7^{4}\\right)^{6}\\equiv1$."
      ]
     },
     "ans": {
      "ru": "Оканчивается на $01$.",
      "en": "It ends in $01$."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Заметьте: настоящий порядок семёрки по модулю $100$ равен $4$, а не $40$. Теорема Эйлера даёт **верхнюю** оценку показателя, после которой степень «зацикливается»; истинный период всегда делит $\\varphi(n)$, но может быть заметно меньше.",
      "en": "Note that the true order of $7$ modulo $100$ is $4$, not $40$. Euler’s theorem gives an **upper bound** for the exponent after which powers repeat; the real period always divides $\\varphi(n)$ but may be much smaller."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Теорема Вильсона",
      "en": "Wilson’s theorem"
     },
     "text": {
      "ru": "Целое число $p>1$ простое **тогда и только тогда**, когда $$(p-1)!\\ \\equiv\\ -1\\pmod p .$$",
      "en": "An integer $p>1$ is prime **if and only if** $$(p-1)!\\ \\equiv\\ -1\\pmod p .$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Пусть $p$ простое.** При $p=2$ проверяем прямо: $1!\\equiv-1\\pmod2$ ✓ Пусть $p$ нечётно.\n\nУ каждого $a\\in\\{1,\\dots,p-1\\}$ есть единственное обратное $a^{-1}$ в том же наборе: по Безу найдутся $u,v$ с $ua+vp=1$, то есть $ua\\equiv1$.\n\nКакие числа обратны сами себе? Условие $a^{2}\\equiv1$ означает $p\\mid(a-1)(a+1)$, откуда по лемме Евклида $a\\equiv1$ или $a\\equiv-1$, то есть $a=1$ или $a=p-1$.\n\nОстальные $p-3$ чисел разбиваются на $\\tfrac{p-3}{2}$ пар $\\left\\{a,a^{-1}\\right\\}$ с произведением $1$. Поэтому $$(p-1)!\\equiv1\\cdot(p-1)\\equiv-1\\pmod p \\quad\\checkmark$$\n\n**Пусть $p$ составное,** $p=ab$ с $1<a<p$. Тогда $a$ входит множителем в $(p-1)!$, значит $a\\mid(p-1)!$. Если бы выполнялось $(p-1)!\\equiv-1\\pmod p$, то $a$ делило бы и $(p-1)!+1$, а значит делило бы разность — единицу ✗ (Отдельный случай $p=4$ проверяется прямо: $3!=6\\equiv2\\pmod4$.) $\\blacksquare$",
      "en": "**Suppose $p$ is prime.** For $p=2$ check directly: $1!\\equiv-1\\pmod2$ ✓ Let $p$ be odd.\n\nEvery $a\\in\\{1,\\dots,p-1\\}$ has a unique inverse $a^{-1}$ in the same range: Bézout gives $u,v$ with $ua+vp=1$, i.e. $ua\\equiv1$.\n\nWhich numbers are their own inverse? The condition $a^{2}\\equiv1$ means $p\\mid(a-1)(a+1)$, so Euclid’s lemma gives $a\\equiv1$ or $a\\equiv-1$, i.e. $a=1$ or $a=p-1$.\n\nThe remaining $p-3$ numbers split into $\\tfrac{p-3}{2}$ pairs $\\left\\{a,a^{-1}\\right\\}$ with product $1$. Hence $$(p-1)!\\equiv1\\cdot(p-1)\\equiv-1\\pmod p \\quad\\checkmark$$\n\n**Suppose $p$ is composite,** $p=ab$ with $1<a<p$. Then $a$ is one of the factors of $(p-1)!$, so $a\\mid(p-1)!$. If $(p-1)!\\equiv-1\\pmod p$ held, then $a$ would divide $(p-1)!+1$ too, hence their difference $1$ ✗ (The case $p=4$ is checked directly: $3!=6\\equiv2\\pmod4$.) $\\blacksquare$"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Теорема Вильсона — единственный из школьных признаков простоты, который является **критерием**: он и необходим, и достаточен. Практической пользы для проверки больших чисел от него нет (считать $(p-1)!$ дороже, чем перебрать делители), зато в задачах он бывает решающим.\n\n**Следствие.** При простом $p>2$ произведение $(p-2)!\\equiv1\\pmod p$, ведь $(p-1)!=(p-1)\\cdot(p-2)!\\equiv-(p-2)!$.",
      "en": "Wilson’s theorem is the one elementary primality statement that is a genuine **criterion**: necessary and sufficient. It is useless for testing large numbers (computing $(p-1)!$ costs more than trial division), but in problems it is sometimes decisive.\n\n**Corollary.** For a prime $p>2$ we get $(p-2)!\\equiv1\\pmod p$, since $(p-1)!=(p-1)\\cdot(p-2)!\\equiv-(p-2)!$."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Тождества с НОД, которые стоит знать",
    "en": "GCD identities worth knowing"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Алгоритм Евклида работает не только с числами. Если последовательность устроена «как повторное вычитание», её НОД тоже подчиняется алгоритму Евклида — но уже на уровне **индексов**.",
      "en": "The Euclidean algorithm is not confined to plain numbers. When a sequence behaves like repeated subtraction, its gcd obeys the Euclidean algorithm too — but on the level of **indices**."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "НОД чисел Мерсенна",
      "en": "The gcd of Mersenne numbers"
     },
     "text": {
      "ru": "Для любых натуральных $m,n$ и любого целого $a>1$ $$\\gcd\\left(a^{m}-1,\\ a^{n}-1\\right)=a^{\\gcd(m,n)}-1 .$$",
      "en": "For all positive integers $m,n$ and any integer $a>1$ $$\\gcd\\left(a^{m}-1,\\ a^{n}-1\\right)=a^{\\gcd(m,n)}-1 .$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Пусть $m>n$ и $m=nq+r$ — деление с остатком. Ключевое тождество: $$a^{m}-1=a^{\\,m-n}\\left(a^{n}-1\\right)+\\left(a^{\\,m-n}-1\\right).$$\n\nОно означает, что при вычислении НОД показатель можно уменьшать на $n$, не меняя ответа: $$\\gcd\\left(a^{m}-1,\\ a^{n}-1\\right)=\\gcd\\left(a^{\\,m-n}-1,\\ a^{n}-1\\right).$$\n\nПовторяя этот шаг $q$ раз, приходим к $$\\gcd\\left(a^{r}-1,\\ a^{n}-1\\right),$$ то есть показатели ведут себя ровно как числа в алгоритме Евклида: $(m,n)\\to(n,r)$.\n\nАлгоритм заканчивается, когда один из показателей обращается в нуль, а второй равен $\\gcd(m,n)$; при этом $a^{0}-1=0$, и $$\\gcd\\left(a^{\\gcd(m,n)}-1,\\ 0\\right)=a^{\\gcd(m,n)}-1 . \\qquad\\blacksquare$$",
      "en": "Let $m>n$ and let $m=nq+r$ be division with remainder. The key identity is $$a^{m}-1=a^{\\,m-n}\\left(a^{n}-1\\right)+\\left(a^{\\,m-n}-1\\right).$$\n\nIt says the exponent may be lowered by $n$ without changing the gcd: $$\\gcd\\left(a^{m}-1,\\ a^{n}-1\\right)=\\gcd\\left(a^{\\,m-n}-1,\\ a^{n}-1\\right).$$\n\nRepeating $q$ times leads to $$\\gcd\\left(a^{r}-1,\\ a^{n}-1\\right),$$ so the exponents behave exactly like the numbers in the Euclidean algorithm: $(m,n)\\to(n,r)$.\n\nThe algorithm stops when one exponent hits zero and the other equals $\\gcd(m,n)$; since $a^{0}-1=0$, $$\\gcd\\left(a^{\\gcd(m,n)}-1,\\ 0\\right)=a^{\\gcd(m,n)}-1 . \\qquad\\blacksquare$$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите $\\gcd\\left(2^{30}-1,\\ 2^{24}-1\\right)$.",
      "en": "Find $\\gcd\\left(2^{30}-1,\\ 2^{24}-1\\right)$."
     },
     "steps": {
      "ru": [
       "По теореме ответ равен $2^{\\gcd(30,24)}-1$.",
       "$\\gcd(30,24)=6$.",
       "Значит $\\gcd=2^{6}-1=63$.",
       "Проверка: $2^{30}-1=1\\,073\\,741\\,823=63\\cdot17\\,043\\,521$ ✓"
      ],
      "en": [
       "The theorem gives $2^{\\gcd(30,24)}-1$.",
       "$\\gcd(30,24)=6$.",
       "So the gcd is $2^{6}-1=63$.",
       "Check: $2^{30}-1=1\\,073\\,741\\,823=63\\cdot17\\,043\\,521$ ✓"
      ]
     },
     "ans": {
      "ru": "$63$.",
      "en": "$63$."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "НОД чисел Фибоначчи",
      "en": "The gcd of Fibonacci numbers"
     },
     "text": {
      "ru": "Для чисел Фибоначчи $F_1=F_2=1$, $F_{k+1}=F_k+F_{k-1}$ выполняется $$\\gcd\\left(F_m,F_n\\right)=F_{\\gcd(m,n)} .$$",
      "en": "For the Fibonacci numbers $F_1=F_2=1$, $F_{k+1}=F_k+F_{k-1}$, $$\\gcd\\left(F_m,F_n\\right)=F_{\\gcd(m,n)} .$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Шаг 1: соседние числа Фибоначчи взаимно просты.** Из $F_{k+1}=F_k+F_{k-1}$ следует $\\gcd\\left(F_{k+1},F_k\\right)=\\gcd\\left(F_k,F_{k-1}\\right)$, и спускаясь до начала, получаем $\\gcd\\left(F_2,F_1\\right)=1$.\n\n**Шаг 2: формула сложения.** Индукцией по $n$ проверяется тождество $$F_{m+n}=F_mF_{n+1}+F_{m-1}F_n .$$\n\n**Шаг 3: шаг алгоритма Евклида.** Возьмём $m>n$ и применим формулу к $F_m=F_{(m-n)+n}$: $$F_m=F_{m-n}F_{n+1}+F_{m-n-1}F_n .$$\n\nВторое слагаемое кратно $F_n$, поэтому $$\\gcd\\left(F_m,F_n\\right)=\\gcd\\left(F_{m-n}F_{n+1},\\ F_n\\right).$$\n\nПо шагу 1 числа $F_{n+1}$ и $F_n$ взаимно просты, значит множитель $F_{n+1}$ можно выбросить: $$\\gcd\\left(F_m,F_n\\right)=\\gcd\\left(F_{m-n},\\ F_n\\right).$$\n\n**Шаг 4: спуск.** Индексы ведут себя как числа в алгоритме Евклида, поэтому процесс приводит к паре $\\left(F_{\\gcd(m,n)},\\ F_0\\right)$, где $F_0=0$, и ответ равен $F_{\\gcd(m,n)}$. $\\blacksquare$",
      "en": "**Step 1: consecutive Fibonacci numbers are coprime.** From $F_{k+1}=F_k+F_{k-1}$ we get $\\gcd\\left(F_{k+1},F_k\\right)=\\gcd\\left(F_k,F_{k-1}\\right)$, and descending to the start gives $\\gcd\\left(F_2,F_1\\right)=1$.\n\n**Step 2: the addition formula.** Induction on $n$ verifies $$F_{m+n}=F_mF_{n+1}+F_{m-1}F_n .$$\n\n**Step 3: one Euclidean step.** Take $m>n$ and apply the formula to $F_m=F_{(m-n)+n}$: $$F_m=F_{m-n}F_{n+1}+F_{m-n-1}F_n .$$\n\nThe second term is a multiple of $F_n$, so $$\\gcd\\left(F_m,F_n\\right)=\\gcd\\left(F_{m-n}F_{n+1},\\ F_n\\right).$$\n\nBy Step 1 the numbers $F_{n+1}$ and $F_n$ are coprime, so the factor $F_{n+1}$ may be dropped: $$\\gcd\\left(F_m,F_n\\right)=\\gcd\\left(F_{m-n},\\ F_n\\right).$$\n\n**Step 4: descent.** The indices now behave exactly like numbers in the Euclidean algorithm, so the process reaches the pair $\\left(F_{\\gcd(m,n)},\\ F_0\\right)$ with $F_0=0$, and the answer is $F_{\\gcd(m,n)}$. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите $\\gcd\\left(F_{12},F_{18}\\right)$.",
      "en": "Find $\\gcd\\left(F_{12},F_{18}\\right)$."
     },
     "steps": {
      "ru": [
       "$\\gcd(12,18)=6$, значит ответ равен $F_6$.",
       "Выпишем: $F_1=1$, $F_2=1$, $F_3=2$, $F_4=3$, $F_5=5$, $F_6=8$.",
       "Проверка: $F_{12}=144$, $F_{18}=2584$, и $\\gcd(144,2584)=8$ ✓"
      ],
      "en": [
       "$\\gcd(12,18)=6$, so the answer is $F_6$.",
       "List them: $F_1=1$, $F_2=1$, $F_3=2$, $F_4=3$, $F_5=5$, $F_6=8$.",
       "Check: $F_{12}=144$, $F_{18}=2584$, and $\\gcd(144,2584)=8$ ✓"
      ]
     },
     "ans": {
      "ru": "$F_6=8$.",
      "en": "$F_6=8$."
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Обе теоремы устроены одинаково: находим тождество, позволяющее заменить пару $(m,n)$ на $(m-n,\\ n)$, и запускаем алгоритм Евклида по индексам. Этот приём переносится на многие последовательности — важно лишь, чтобы «соседние» члены были взаимно просты.",
      "en": "Both theorems work the same way: find an identity that replaces the pair $(m,n)$ by $(m-n,\\ n)$, then run the Euclidean algorithm on the indices. The trick transfers to many sequences — all that is needed is that neighbouring terms be coprime."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Из первой теоремы получается изящное следствие: **$a^{m}-1$ делится на $a^{n}-1$ тогда и только тогда, когда $m$ делится на $n$.** Именно поэтому число $2^{p}-1$ может быть простым только при простом $p$ — это первый шаг в теории чисел Мерсенна.",
      "en": "The first theorem has an elegant corollary: **$a^{m}-1$ is divisible by $a^{n}-1$ exactly when $m$ is divisible by $n$.** That is why $2^{p}-1$ can be prime only for prime $p$ — the first step in the theory of Mersenne numbers."
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
