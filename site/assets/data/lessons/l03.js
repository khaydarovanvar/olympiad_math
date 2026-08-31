/* Topic 3 — generated from content/lesson_03.py, do not edit by hand. */
window.LESSONS = window.LESSONS || {};
window.LESSONS[3] = {
 "n": 3,
 "cat": "nt",
 "title": {
  "ru": "Арифметика остатков",
  "en": "Modular arithmetic"
 },
 "sub": {
  "ru": "Сравнения превращают громоздкие вычисления в короткие: последние цифры, циклы степеней и малая теорема Ферма.",
  "en": "Congruences turn heavy computations into short ones: last digits, cycles of powers and Fermat's little theorem."
 },
 "goals": {
  "ru": [
   "Понимать запись $a\\equiv b\\pmod m$ и свободно складывать, вычитать и умножать сравнения.",
   "Знать, что делить сравнение нельзя, и уметь обойти это ограничение.",
   "Находить последние цифры больших степеней через цикличность.",
   "Применять малую теорему Ферма и осознанно выбирать модуль в задаче."
  ],
  "en": [
   "Understand the notation $a\\equiv b\\pmod m$ and add, subtract and multiply congruences freely.",
   "Know that a congruence may not simply be divided, and know how to work around it.",
   "Find the last digits of large powers using cycles.",
   "Apply Fermat's little theorem and choose a modulus deliberately."
  ]
 },
 "sections": [
  {
   "h": {
    "ru": "Сравнения",
    "en": "Congruences"
   },
   "blocks": [
    {
     "t": "def",
     "name": {
      "ru": "Сравнение по модулю",
      "en": "Congruence modulo m"
     },
     "text": {
      "ru": "Пусть $m>0$ — целое. Пишут $$a\\equiv b \\pmod m$$ и говорят «$a$ сравнимо с $b$ по модулю $m$», если $m\\mid(a-b)$ — равносильно, если $a$ и $b$ дают одинаковый остаток при делении на $m$.",
      "en": "Let $m>0$ be an integer. We write $$a\\equiv b \\pmod m$$ and say \"$a$ is congruent to $b$ modulo $m$\" if $m\\mid(a-b)$ — equivalently, if $a$ and $b$ leave the same remainder on division by $m$."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Примеры: $17\\equiv2\\pmod5$, $-3\\equiv4\\pmod 7$, $100\\equiv0\\pmod{25}$. Сравнение — это способ сказать «меня интересует только остаток», и потому оно так удобно.",
      "en": "Examples: $17\\equiv2\\pmod5$, $-3\\equiv4\\pmod 7$, $100\\equiv0\\pmod{25}$. A congruence is a way of saying \"only the remainder matters to me\", which is exactly why it is so convenient."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Что можно делать со сравнениями",
      "en": "What you may do with congruences"
     },
     "text": {
      "ru": "Если $a\\equiv b$ и $c\\equiv d$ по модулю $m$, то $$a+c\\equiv b+d,\\qquad a-c\\equiv b-d,\\qquad ac\\equiv bd \\pmod m,$$ и, как следствие, $a^{k}\\equiv b^{k}\\pmod m$ для любого натурального $k$.",
      "en": "If $a\\equiv b$ and $c\\equiv d$ modulo $m$, then $$a+c\\equiv b+d,\\qquad a-c\\equiv b-d,\\qquad ac\\equiv bd \\pmod m,$$ and consequently $a^{k}\\equiv b^{k}\\pmod m$ for every positive integer $k$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "По условию $m\\mid a-b$ и $m\\mid c-d$. Тогда $m$ делит сумму $(a-b)+(c-d)=(a+c)-(b+d)$, что и есть первое утверждение; для разности так же. Для произведения запишем $$ac-bd=ac-bc+bc-bd=c(a-b)+b(c-d),$$ и оба слагаемых делятся на $m$. Степени получаются повторным применением правила для произведения. $\\blacksquare$",
      "en": "By hypothesis $m\\mid a-b$ and $m\\mid c-d$. Then $m$ divides the sum $(a-b)+(c-d)=(a+c)-(b+d)$, which is the first claim; the difference is the same. For the product write $$ac-bd=ac-bc+bc-bd=c(a-b)+b(c-d),$$ and both terms are divisible by $m$. Powers follow by applying the product rule repeatedly. $\\blacksquare$"
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "**Делить сравнение нельзя.** Из $6\\equiv 0\\pmod 6$ и $2\\ne0\\pmod 6$ видно, что из $2\\cdot3\\equiv2\\cdot0$ не следует $3\\equiv0$. Сокращать на $c$ разрешено только когда $\\gcd(c,m)=1$; тогда из $ca\\equiv cb$ действительно следует $a\\equiv b$.",
      "en": "**You may not divide a congruence.** From $6\\equiv 0\\pmod 6$ and $2\\not\\equiv0\\pmod 6$ we see that $2\\cdot3\\equiv2\\cdot0$ does not give $3\\equiv0$. Cancelling $c$ is allowed only when $\\gcd(c,m)=1$; then $ca\\equiv cb$ really does give $a\\equiv b$."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите остаток от деления $2^{100}$ на $7$.",
      "en": "Find the remainder of $2^{100}$ on division by $7$."
     },
     "steps": {
      "ru": [
       "$2^3=8\\equiv1\\pmod 7$ — нашли короткий цикл.",
       "$100=3\\cdot33+1$, поэтому $2^{100}=\\left(2^{3}\\right)^{33}\\cdot2$.",
       "$\\left(2^{3}\\right)^{33}\\equiv1^{33}=1$, значит $2^{100}\\equiv2\\pmod 7$."
      ],
      "en": [
       "$2^3=8\\equiv1\\pmod 7$ — a short cycle.",
       "$100=3\\cdot33+1$, so $2^{100}=\\left(2^{3}\\right)^{33}\\cdot2$.",
       "$\\left(2^{3}\\right)^{33}\\equiv1^{33}=1$, hence $2^{100}\\equiv2\\pmod 7$."
      ]
     },
     "ans": {
      "ru": "Остаток $2$",
      "en": "The remainder is $2$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Арифметика сравнений корректна",
      "en": "Congruences respect arithmetic"
     },
     "text": {
      "ru": "Если $a\\equiv b$ и $c\\equiv d$ по модулю $m$, то $$a+c\\equiv b+d,\\qquad a-c\\equiv b-d,\\qquad ac\\equiv bd\\pmod m .$$ Следовательно $a^{n}\\equiv b^{n}$ при любом натуральном $n$, и вообще $P(a)\\equiv P(b)$ для любого многочлена $P$ с целыми коэффициентами.",
      "en": "If $a\\equiv b$ and $c\\equiv d$ modulo $m$ then $$a+c\\equiv b+d,\\qquad a-c\\equiv b-d,\\qquad ac\\equiv bd\\pmod m .$$ Consequently $a^{n}\\equiv b^{n}$ for every positive integer $n$, and more generally $P(a)\\equiv P(b)$ for any polynomial $P$ with integer coefficients."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "По определению $m\\mid a-b$ и $m\\mid c-d$.\n\n**Сложение.** $$(a+c)-(b+d)=(a-b)+(c-d)$$ — сумма двух кратных $m$, значит кратна $m$ ✓ Вычитание аналогично.\n\n**Умножение.** Хитрость в том, чтобы разность разложить: $$ac-bd=ac-bc+bc-bd=c(a-b)+b(c-d).$$ Оба слагаемых кратны $m$ ✓\n\n**Степени.** Индукция: из $a^{n}\\equiv b^{n}$ и $a\\equiv b$ умножением получаем $a^{n+1}\\equiv b^{n+1}$ ✓\n\n**Многочлены.** Каждый одночлен $c_ka^{k}$ сравним с $c_kb^{k}$ по доказанному, и остаётся сложить. $\\blacksquare$",
      "en": "By definition $m\\mid a-b$ and $m\\mid c-d$.\n\n**Addition.** $$(a+c)-(b+d)=(a-b)+(c-d)$$ is a sum of two multiples of $m$ ✓ Subtraction is the same.\n\n**Multiplication.** The trick is to split the difference: $$ac-bd=ac-bc+bc-bd=c(a-b)+b(c-d),$$ and both terms are multiples of $m$ ✓\n\n**Powers.** Induction: from $a^{n}\\equiv b^{n}$ and $a\\equiv b$, multiplying gives $a^{n+1}\\equiv b^{n+1}$ ✓\n\n**Polynomials.** Each monomial $c_ka^{k}$ is congruent to $c_kb^{k}$ by the above; add them up. $\\blacksquare$"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Именно последний пункт делает сравнения таким мощным инструментом: чтобы проверить утверждение о многочлене для **всех** целых чисел, достаточно проверить его для $m$ остатков. Бесконечная задача становится конечной.",
      "en": "That last point is what makes congruences so powerful: to check a polynomial statement for **all** integers it suffices to check it for $m$ residues. An infinite task becomes a finite one."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Линейные сравнения и обратные элементы",
    "en": "Linear congruences and inverses"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Складывать и умножать по модулю мы умеем. А что значит **разделить**? Ответ на этот вопрос — теория линейных сравнений, и она полностью повторяет историю с уравнением $ax+by=c$.",
      "en": "Adding and multiplying modulo $m$ is settled. But what does it mean to **divide**? The answer is the theory of linear congruences, and it repeats the story of the equation $ax+by=c$ word for word."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Критерий разрешимости",
      "en": "When a linear congruence is solvable"
     },
     "text": {
      "ru": "Пусть $d=\\gcd(a,m)$. Сравнение $$ax\\equiv b\\pmod m$$ имеет решение **тогда и только тогда**, когда $d\\mid b$. В этом случае решений ровно $d$ штук по модулю $m$, и они образуют один класс по модулю $\\tfrac md$.",
      "en": "Let $d=\\gcd(a,m)$. The congruence $$ax\\equiv b\\pmod m$$ is solvable **if and only if** $d\\mid b$. In that case it has exactly $d$ solutions modulo $m$, forming a single class modulo $\\tfrac md$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Сравнение $ax\\equiv b\\pmod m$ по определению означает, что $m\\mid ax-b$, то есть что найдётся целое $y$ с $$ax-b=my\\quad\\Longleftrightarrow\\quad ax-my=b .$$\n\nЭто линейное уравнение в целых числах, и по известному критерию оно разрешимо ровно тогда, когда $\\gcd(a,m)\\mid b$ ✓\n\n**Сколько решений.** Пусть $x_0$ — одно решение. Все решения уравнения даются формулой $$x=x_0+\\frac md\\,t,\\qquad t\\in\\mathbb{Z} .$$ По модулю $m$ различными оказываются те из них, у которых $t$ пробегает $0,1,\\dots,d-1$: дальше значения повторяются, ведь сдвиг на $d\\cdot\\tfrac md=m$ ничего не меняет.\n\nЗначит решений ровно $d$, и все они сравнимы между собой по модулю $\\tfrac md$. $\\blacksquare$",
      "en": "By definition $ax\\equiv b\\pmod m$ says $m\\mid ax-b$, i.e. that some integer $y$ satisfies $$ax-b=my\\quad\\Longleftrightarrow\\quad ax-my=b .$$\n\nThis is a linear equation in integers, solvable exactly when $\\gcd(a,m)\\mid b$ ✓\n\n**How many solutions.** Let $x_0$ be one. All solutions of the equation are $$x=x_0+\\frac md\\,t,\\qquad t\\in\\mathbb{Z} .$$ Modulo $m$ the distinct ones come from $t=0,1,\\dots,d-1$: beyond that the values repeat, since a shift by $d\\cdot\\tfrac md=m$ changes nothing.\n\nSo there are exactly $d$ solutions, all congruent to one another modulo $\\tfrac md$. $\\blacksquare$"
     }
    },
    {
     "t": "def",
     "name": {
      "ru": "Обратный элемент",
      "en": "Modular inverse"
     },
     "text": {
      "ru": "Число $a^{-1}$ называется **обратным** к $a$ по модулю $m$, если $$a\\cdot a^{-1}\\equiv1\\pmod m .$$",
      "en": "A number $a^{-1}$ is an **inverse** of $a$ modulo $m$ if $$a\\cdot a^{-1}\\equiv1\\pmod m .$$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Когда обратный существует",
      "en": "When an inverse exists"
     },
     "text": {
      "ru": "Обратный к $a$ по модулю $m$ существует **тогда и только тогда**, когда $\\gcd(a,m)=1$; при этом он единствен по модулю $m$.",
      "en": "An inverse of $a$ modulo $m$ exists **if and only if** $\\gcd(a,m)=1$, and it is then unique modulo $m$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Существование.** Это частный случай предыдущей теоремы при $b=1$: сравнение $ax\\equiv1$ разрешимо ровно тогда, когда $\\gcd(a,m)\\mid1$, то есть когда $\\gcd(a,m)=1$.\n\n**Единственность.** Пусть $au\\equiv1$ и $av\\equiv1$. Умножим первое на $v$: $$v\\equiv v(au)=(av)u\\equiv u\\pmod m . \\qquad\\blacksquare$$",
      "en": "**Existence.** A special case of the previous theorem with $b=1$: the congruence $ax\\equiv1$ is solvable exactly when $\\gcd(a,m)\\mid1$, i.e. $\\gcd(a,m)=1$.\n\n**Uniqueness.** Suppose $au\\equiv1$ and $av\\equiv1$. Multiply the first by $v$: $$v\\equiv v(au)=(av)u\\equiv u\\pmod m . \\qquad\\blacksquare$$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Закон сокращения",
      "en": "The cancellation law"
     },
     "text": {
      "ru": "Если $\\gcd(c,m)=1$, то из $ca\\equiv cb\\pmod m$ следует $a\\equiv b\\pmod m$. В общем случае из $ca\\equiv cb\\pmod m$ следует лишь $$a\\equiv b\\ \\left(\\bmod\\ \\frac m{\\gcd(c,m)}\\right).$$",
      "en": "If $\\gcd(c,m)=1$ then $ca\\equiv cb\\pmod m$ implies $a\\equiv b\\pmod m$. In general $ca\\equiv cb\\pmod m$ only gives $$a\\equiv b\\ \\left(\\bmod\\ \\frac m{\\gcd(c,m)}\\right).$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Условие $ca\\equiv cb$ означает $m\\mid c(a-b)$. Обозначим $d=\\gcd(c,m)$ и запишем $c=dc_1$, $m=dm_1$, где $\\gcd\\left(c_1,m_1\\right)=1$.\n\nТогда $dm_1\\mid dc_1(a-b)$, то есть $m_1\\mid c_1(a-b)$. Так как $\\gcd\\left(c_1,m_1\\right)=1$, множитель $c_1$ можно выбросить: $$m_1\\mid a-b ,$$ то есть $a\\equiv b\\pmod{m_1}$, где $m_1=\\tfrac md$.\n\nПри $d=1$ получаем $m_1=m$ — первое утверждение. $\\blacksquare$",
      "en": "The hypothesis $ca\\equiv cb$ says $m\\mid c(a-b)$. Put $d=\\gcd(c,m)$ and write $c=dc_1$, $m=dm_1$ with $\\gcd\\left(c_1,m_1\\right)=1$.\n\nThen $dm_1\\mid dc_1(a-b)$, i.e. $m_1\\mid c_1(a-b)$. As $\\gcd\\left(c_1,m_1\\right)=1$ the factor $c_1$ drops out: $$m_1\\mid a-b ,$$ that is $a\\equiv b\\pmod{m_1}$ with $m_1=\\tfrac md$.\n\nFor $d=1$ this gives $m_1=m$, the first statement. $\\blacksquare$"
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Вот классическая ловушка: $$6\\equiv16\\pmod{10} ,$$ но сократить на $2$ **нельзя**: $3\\not\\equiv8\\pmod{10}$. Модуль обязан уменьшиться: $3\\equiv8\\pmod5$ ✓ Прежде чем «делить» сравнение, всегда проверяйте $\\gcd$ с модулем.",
      "en": "A classic trap: $$6\\equiv16\\pmod{10} ,$$ but one may **not** cancel the $2$: $3\\not\\equiv8\\pmod{10}$. The modulus must shrink: $3\\equiv8\\pmod5$ ✓ Before \"dividing\" a congruence, always check the gcd with the modulus."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Решите сравнение $14x\\equiv30\\pmod{100}$.",
      "en": "Solve $14x\\equiv30\\pmod{100}$."
     },
     "steps": {
      "ru": [
       "$d=\\gcd(14,100)=2$, и $2\\mid30$ — решения есть, и их будет ровно $2$ по модулю $100$.",
       "Сократим всё сравнение вместе с модулем на $2$: $\\ 7x\\equiv15\\pmod{50}$.",
       "Теперь $\\gcd(7,50)=1$, значит есть обратный элемент. Подберём его: $7\\cdot43=301=6\\cdot50+1$, значит $7^{-1}\\equiv43\\pmod{50}$.",
       "Умножаем: $x\\equiv43\\cdot15=645\\equiv645-12\\cdot50=45\\pmod{50}$.",
       "По модулю $100$ это даёт два решения: $x\\equiv45$ и $x\\equiv95$.",
       "Проверка: $14\\cdot45=630=6\\cdot100+30$ ✓ и $14\\cdot95=1330=13\\cdot100+30$ ✓"
      ],
      "en": [
       "$d=\\gcd(14,100)=2$ and $2\\mid30$, so solutions exist — exactly $2$ of them modulo $100$.",
       "Cancel the whole congruence, modulus included, by $2$: $\\ 7x\\equiv15\\pmod{50}$.",
       "Now $\\gcd(7,50)=1$, so an inverse exists: $7\\cdot43=301=6\\cdot50+1$, hence $7^{-1}\\equiv43\\pmod{50}$.",
       "Multiply: $x\\equiv43\\cdot15=645\\equiv45\\pmod{50}$.",
       "Modulo $100$ this gives two solutions: $x\\equiv45$ and $x\\equiv95$.",
       "Check: $14\\cdot45=630=6\\cdot100+30$ ✓ and $14\\cdot95=1330=13\\cdot100+30$ ✓"
      ]
     },
     "ans": {
      "ru": "$x\\equiv45$ и $x\\equiv95\\pmod{100}$.",
      "en": "$x\\equiv45$ and $x\\equiv95\\pmod{100}$."
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Обратный элемент находят двумя способами: **обратным ходом алгоритма Евклида** (всегда работает) или **по теореме Эйлера**: $$a^{-1}\\equiv a^{\\varphi(m)-1}\\pmod m ,$$ поскольку $a\\cdot a^{\\varphi(m)-1}=a^{\\varphi(m)}\\equiv1$. Второй способ короче записывается, первый быстрее считается.",
      "en": "There are two ways to find an inverse: **running the Euclidean algorithm backwards** (always works), or **Euler’s theorem**: $$a^{-1}\\equiv a^{\\varphi(m)-1}\\pmod m ,$$ since $a\\cdot a^{\\varphi(m)-1}=a^{\\varphi(m)}\\equiv1$. The second is shorter to write, the first faster to compute."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Последние цифры и циклы степеней",
    "en": "Last digits and cycles of powers"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Последняя цифра числа — это его остаток по модулю $10$; две последние цифры — остаток по модулю $100$. Степени любого числа по фиксированному модулю рано или поздно начинают повторяться, и обычно очень быстро.",
      "en": "The last digit of a number is its remainder modulo $10$; the last two digits are the remainder modulo $100$. The powers of any number, to a fixed modulus, start repeating sooner or later — and usually very soon."
     }
    },
    {
     "t": "table",
     "head": {
      "ru": [
       "Основание",
       "Цикл последних цифр",
       "Длина"
      ],
      "en": [
       "Base",
       "Cycle of last digits",
       "Length"
      ]
     },
     "rows": {
      "ru": [
       [
        "$2$",
        "$2,4,8,6$",
        "$4$"
       ],
       [
        "$3$",
        "$3,9,7,1$",
        "$4$"
       ],
       [
        "$7$",
        "$7,9,3,1$",
        "$4$"
       ],
       [
        "$8$",
        "$8,4,2,6$",
        "$4$"
       ],
       [
        "$4$",
        "$4,6$",
        "$2$"
       ],
       [
        "$9$",
        "$9,1$",
        "$2$"
       ],
       [
        "$5,6$",
        "$5$; $6$",
        "$1$"
       ]
      ],
      "en": [
       [
        "$2$",
        "$2,4,8,6$",
        "$4$"
       ],
       [
        "$3$",
        "$3,9,7,1$",
        "$4$"
       ],
       [
        "$7$",
        "$7,9,3,1$",
        "$4$"
       ],
       [
        "$8$",
        "$8,4,2,6$",
        "$4$"
       ],
       [
        "$4$",
        "$4,6$",
        "$2$"
       ],
       [
        "$9$",
        "$9,1$",
        "$2$"
       ],
       [
        "$5,6$",
        "$5$; $6$",
        "$1$"
       ]
      ]
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Как пользоваться циклом",
      "en": "How to use a cycle"
     },
     "text": {
      "ru": "Если цикл имеет длину $L$, то показатель нужен только **по модулю $L$**. Осторожно с нулевым остатком: если показатель делится на $L$, берут **последний** элемент цикла, а не первый.",
      "en": "If the cycle has length $L$, only the exponent **modulo $L$** matters. Take care with a zero remainder: if the exponent is a multiple of $L$, take the **last** element of the cycle, not the first."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите последнюю цифру числа $7^{2025}$.",
      "en": "Find the last digit of $7^{2025}$."
     },
     "steps": {
      "ru": [
       "Цикл для $7$: $7,9,3,1$ — длина $4$.",
       "$2025=4\\cdot506+1$, остаток $1$.",
       "Значит последняя цифра совпадает с первой в цикле: $7$."
      ],
      "en": [
       "The cycle for $7$ is $7,9,3,1$ — length $4$.",
       "$2025=4\\cdot506+1$, remainder $1$.",
       "So the last digit is the first entry of the cycle: $7$."
      ]
     },
     "ans": {
      "ru": "$7$",
      "en": "$7$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите две последние цифры числа $3^{2025}$.",
      "en": "Find the last two digits of $3^{2025}$."
     },
     "steps": {
      "ru": [
       "Работаем по модулю $100$. Считаем: $3^4=81$, $3^5=243\\equiv43$.",
       "$3^{10}\\equiv43^2=1849\\equiv49$, значит $3^{20}\\equiv49^2=2401\\equiv1\\pmod{100}$.",
       "$2025=20\\cdot101+5$, поэтому $3^{2025}\\equiv3^{5}\\equiv43\\pmod{100}$."
      ],
      "en": [
       "Work modulo $100$. Compute $3^4=81$ and $3^5=243\\equiv43$.",
       "$3^{10}\\equiv43^2=1849\\equiv49$, so $3^{20}\\equiv49^2=2401\\equiv1\\pmod{100}$.",
       "$2025=20\\cdot101+5$, hence $3^{2025}\\equiv3^{5}\\equiv43\\pmod{100}$."
      ]
     },
     "ans": {
      "ru": "$43$",
      "en": "$43$"
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Малая теорема Ферма",
    "en": "Fermat's little theorem"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Малая теорема Ферма",
      "en": "Fermat's little theorem"
     },
     "text": {
      "ru": "Пусть $p$ — простое и $p\\nmid a$. Тогда $$a^{p-1}\\equiv1\\pmod p.$$ Без условия $p\\nmid a$ верна форма $a^{p}\\equiv a\\pmod p$ для **любого** целого $a$.",
      "en": "Let $p$ be prime with $p\\nmid a$. Then $$a^{p-1}\\equiv1\\pmod p.$$ Without the condition $p\\nmid a$ the form $a^{p}\\equiv a\\pmod p$ holds for **every** integer $a$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Рассмотрим числа $a,2a,3a,\\ldots,(p-1)a$ и их остатки по модулю $p$. Все остатки ненулевые (иначе $p\\mid ka$, но $p\\nmid a$ и $p\\nmid k$). Все они различны: если $ia\\equiv ja$, то $p\\mid a(i-j)$, значит $p\\mid i-j$, а $|i-j|<p$ даёт $i=j$. Итак, наши $p-1$ остатков — это в точности $1,2,\\ldots,p-1$ в каком-то порядке. Перемножим: $$a\\cdot2a\\cdots(p-1)a\\equiv1\\cdot2\\cdots(p-1)\\pmod p,$$ то есть $a^{p-1}(p-1)!\\equiv(p-1)!$. Число $(p-1)!$ взаимно просто с $p$, поэтому на него можно сократить: $a^{p-1}\\equiv1$. $\\blacksquare$",
      "en": "Consider the numbers $a,2a,3a,\\ldots,(p-1)a$ and their remainders modulo $p$. No remainder is zero (otherwise $p\\mid ka$, but $p\\nmid a$ and $p\\nmid k$). They are pairwise distinct: if $ia\\equiv ja$ then $p\\mid a(i-j)$, so $p\\mid i-j$, and $|i-j|<p$ forces $i=j$. So our $p-1$ remainders are exactly $1,2,\\ldots,p-1$ in some order. Multiply them: $$a\\cdot2a\\cdots(p-1)a\\equiv1\\cdot2\\cdots(p-1)\\pmod p,$$ that is $a^{p-1}(p-1)!\\equiv(p-1)!$. Since $(p-1)!$ is coprime to $p$ we may cancel it: $a^{p-1}\\equiv1$. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите остаток от деления $3^{100}$ на $7$.",
      "en": "Find the remainder of $3^{100}$ on division by $7$."
     },
     "steps": {
      "ru": [
       "$7$ простое и $7\\nmid3$, значит $3^{6}\\equiv1\\pmod 7$.",
       "$100=6\\cdot16+4$, поэтому $3^{100}\\equiv3^{4}$.",
       "$3^4=81=7\\cdot11+4\\equiv4\\pmod 7$."
      ],
      "en": [
       "$7$ is prime and $7\\nmid3$, so $3^{6}\\equiv1\\pmod 7$.",
       "$100=6\\cdot16+4$, hence $3^{100}\\equiv3^{4}$.",
       "$3^4=81=7\\cdot11+4\\equiv4\\pmod 7$."
      ]
     },
     "ans": {
      "ru": "Остаток $4$",
      "en": "The remainder is $4$"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Ферма даёт показатель $p-1$, но настоящий период может быть **меньше**: он всегда делит $p-1$. Так, $2^3\\equiv1\\pmod 7$, хотя Ферма обещает лишь $2^6\\equiv1$. Ищите короткий цикл руками — считать станет легче.",
      "en": "Fermat gives the exponent $p-1$, but the true period may be **shorter**: it always divides $p-1$. For instance $2^3\\equiv1\\pmod 7$, although Fermat only promises $2^6\\equiv1$. Look for the short cycle by hand — the arithmetic gets easier."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Теорема Эйлера",
      "en": "Euler’s theorem"
     },
     "text": {
      "ru": "Если $\\gcd(a,m)=1$, то $$a^{\\varphi(m)}\\equiv1\\pmod m ,$$ где $\\varphi(m)$ — количество чисел от $1$ до $m$, взаимно простых с $m$.",
      "en": "If $\\gcd(a,m)=1$ then $$a^{\\varphi(m)}\\equiv1\\pmod m ,$$ where $\\varphi(m)$ counts the integers from $1$ to $m$ coprime to $m$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Пусть $r_1,\\dots,r_{\\varphi(m)}$ — все вычеты, взаимно простые с $m$. Умножение на $a$ переставляет их: каждое $ar_i$ взаимно просто с $m$, и из $ar_i\\equiv ar_j$ по закону сокращения следует $r_i=r_j$.\n\nПеремножив весь набор, получаем $$a^{\\varphi(m)}\\prod_i r_i\\equiv\\prod_i r_i\\pmod m ,$$ а произведение $\\prod r_i$ взаимно просто с $m$ и потому сокращается: $$a^{\\varphi(m)}\\equiv1\\pmod m . \\qquad\\blacksquare$$",
      "en": "Let $r_1,\\dots,r_{\\varphi(m)}$ be the residues coprime to $m$. Multiplication by $a$ permutes them: each $ar_i$ is coprime to $m$, and $ar_i\\equiv ar_j$ forces $r_i=r_j$ by the cancellation law.\n\nMultiplying the whole set, $$a^{\\varphi(m)}\\prod_i r_i\\equiv\\prod_i r_i\\pmod m ,$$ and $\\prod r_i$ is coprime to $m$, hence cancels: $$a^{\\varphi(m)}\\equiv1\\pmod m . \\qquad\\blacksquare$$"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Малая теорема Ферма — частный случай при простом $m=p$, ведь тогда $\\varphi(p)=p-1$. Теорема Эйлера работает и для составных модулей, а именно они чаще всего встречаются в задачах про последние цифры ($m=10$, $100$, $1000$).",
      "en": "Fermat’s little theorem is the special case $m=p$ prime, where $\\varphi(p)=p-1$. Euler’s version also handles composite moduli — and those are exactly what \"last digits\" problems need ($m=10$, $100$, $1000$)."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите последнюю цифру числа $7^{7^{7}}$.",
      "en": "Find the last digit of $7^{7^{7}}$."
     },
     "steps": {
      "ru": [
       "Нужен остаток по модулю $10$; $\\varphi(10)=4$, и $\\gcd(7,10)=1$, значит $7^{4}\\equiv1\\pmod{10}$.",
       "Значит достаточно знать показатель $7^{7}$ по модулю $4$.",
       "$7\\equiv-1\\pmod4$, поэтому $7^{7}\\equiv(-1)^{7}=-1\\equiv3\\pmod4$.",
       "Следовательно $7^{7^{7}}\\equiv7^{3}\\pmod{10}$.",
       "$7^{3}=343$, последняя цифра $3$."
      ],
      "en": [
       "We need the residue mod $10$; $\\varphi(10)=4$ and $\\gcd(7,10)=1$, so $7^{4}\\equiv1\\pmod{10}$.",
       "So it suffices to know the exponent $7^{7}$ modulo $4$.",
       "$7\\equiv-1\\pmod4$, hence $7^{7}\\equiv-1\\equiv3\\pmod4$.",
       "Therefore $7^{7^{7}}\\equiv7^{3}\\pmod{10}$.",
       "$7^{3}=343$, whose last digit is $3$."
      ]
     },
     "ans": {
      "ru": "Последняя цифра $3$.",
      "en": "The last digit is $3$."
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "В «башнях степеней» показатель приводят по модулю $\\varphi(m)$, а **не** по модулю $m$. Это самая частая ошибка в таких задачах. И приём законен лишь при $\\gcd(a,m)=1$: например, для $2^{2^{n}}$ по модулю $10$ так рассуждать нельзя.",
      "en": "In a tower of exponents the exponent is reduced modulo $\\varphi(m)$, **not** modulo $m$. That is the commonest mistake in such problems. And the move is legitimate only when $\\gcd(a,m)=1$: for $2^{2^{n}}$ modulo $10$, for instance, it does not apply."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Китайская теорема об остатках",
    "en": "The Chinese remainder theorem"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Часто про число известны его остатки по нескольким модулям сразу. Китайская теорема говорит, что если модули попарно взаимно просты, то эти сведения **полностью** определяют число по модулю их произведения — и что любой набор остатков достижим.",
      "en": "Often one knows a number’s remainders modulo several moduli at once. The Chinese remainder theorem says that if the moduli are pairwise coprime, this information determines the number **completely** modulo their product — and that every combination of remainders occurs."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Китайская теорема об остатках",
      "en": "The Chinese remainder theorem"
     },
     "text": {
      "ru": "Пусть $m_1,m_2,\\dots,m_k$ попарно взаимно просты и $M=m_1m_2\\cdots m_k$. Тогда для любых $a_1,\\dots,a_k$ система $$x\\equiv a_1\\pmod{m_1},\\quad x\\equiv a_2\\pmod{m_2},\\quad\\dots,\\quad x\\equiv a_k\\pmod{m_k}$$ имеет решение, и оно единственно по модулю $M$.",
      "en": "Let $m_1,\\dots,m_k$ be pairwise coprime with $M=m_1\\cdots m_k$. Then for any $a_1,\\dots,a_k$ the system $$x\\equiv a_1\\pmod{m_1},\\quad \\dots,\\quad x\\equiv a_k\\pmod{m_k}$$ has a solution, unique modulo $M$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Единственность.** Пусть $x$ и $y$ — два решения. Тогда $m_i\\mid x-y$ при каждом $i$. Модули попарно взаимно просты, поэтому их произведение тоже делит разность: $M\\mid x-y$, то есть $x\\equiv y\\pmod M$ ✓\n\n**Существование (явная формула).** Для каждого $i$ положим $$M_i=\\frac M{m_i}=\\prod_{j\\ne i}m_j .$$ Число $M_i$ взаимно просто с $m_i$: любой общий простой делитель делил бы $m_i$ и какое-то $m_j$, что противоречит попарной взаимной простоте. Значит существует обратный $N_i$ с $$M_iN_i\\equiv1\\pmod{m_i} .$$\n\nПоложим $$x=\\sum_{i=1}^{k}a_i M_i N_i .$$\n\nПроверим $i$-е сравнение. Все слагаемые с номером $j\\ne i$ содержат множитель $m_i$ (он входит в $M_j$), значит по модулю $m_i$ они исчезают. Остаётся $$x\\equiv a_iM_iN_i\\equiv a_i\\cdot1=a_i\\pmod{m_i} \\quad\\checkmark$$\n\nЗначит решение построено. $\\blacksquare$",
      "en": "**Uniqueness.** Let $x,y$ be two solutions. Then $m_i\\mid x-y$ for every $i$. The moduli are pairwise coprime, so their product divides the difference too: $M\\mid x-y$, i.e. $x\\equiv y\\pmod M$ ✓\n\n**Existence (an explicit formula).** For each $i$ put $$M_i=\\frac M{m_i}=\\prod_{j\\ne i}m_j .$$ The number $M_i$ is coprime to $m_i$: a common prime divisor would divide $m_i$ and some $m_j$, contradicting pairwise coprimality. So there is an inverse $N_i$ with $$M_iN_i\\equiv1\\pmod{m_i} .$$\n\nSet $$x=\\sum_{i=1}^{k}a_i M_i N_i .$$\n\nCheck the $i$-th congruence. Every term with $j\\ne i$ contains the factor $m_i$ (it sits inside $M_j$), so it vanishes mod $m_i$. What is left is $$x\\equiv a_iM_iN_i\\equiv a_i\\pmod{m_i} \\quad\\checkmark$$\n\nThe solution is built. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите наименьшее натуральное $x$ с $x\\equiv2\\pmod3$, $x\\equiv3\\pmod5$, $x\\equiv2\\pmod7$.",
      "en": "Find the least positive $x$ with $x\\equiv2\\pmod3$, $x\\equiv3\\pmod5$, $x\\equiv2\\pmod7$."
     },
     "steps": {
      "ru": [
       "Модули $3,5,7$ попарно взаимно просты, $M=105$; решение единственно по модулю $105$.",
       "**Приём попроще.** Первое и третье условия дают $3\\mid x-2$ и $7\\mid x-2$, значит $21\\mid x-2$, то есть $x\\equiv2\\pmod{21}$.",
       "Ищем среди $2,\\ 23,\\ 44,\\ 65,\\ 86$ то, что даёт остаток $3$ по модулю $5$.",
       "Остатки: $2,\\ 3,\\ 4,\\ 0,\\ 1$ — подходит $x=23$.",
       "Проверка: $23=3\\cdot7+2$ ✓, $23=5\\cdot4+3$ ✓, $23=7\\cdot3+2$ ✓"
      ],
      "en": [
       "The moduli $3,5,7$ are pairwise coprime with $M=105$; the solution is unique mod $105$.",
       "**A shortcut.** The first and third conditions give $3\\mid x-2$ and $7\\mid x-2$, hence $21\\mid x-2$, i.e. $x\\equiv2\\pmod{21}$.",
       "Look through $2,\\ 23,\\ 44,\\ 65,\\ 86$ for one leaving remainder $3$ mod $5$.",
       "Their residues are $2,\\ 3,\\ 4,\\ 0,\\ 1$ — so $x=23$.",
       "Check: $23=3\\cdot7+2$ ✓, $23=5\\cdot4+3$ ✓, $23=7\\cdot3+2$ ✓"
      ]
     },
     "ans": {
      "ru": "$x=23$; все решения — $x\\equiv23\\pmod{105}$.",
      "en": "$x=23$; all solutions are $x\\equiv23\\pmod{105}$."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите последние две цифры числа $3^{1000}$, разложив задачу по модулям $4$ и $25$.",
      "en": "Find the last two digits of $3^{1000}$ by splitting the modulus $100$ into $4$ and $25$."
     },
     "steps": {
      "ru": [
       "$100=4\\cdot25$, и $\\gcd(4,25)=1$ — китайская теорема применима.",
       "**По модулю $4$:** $3\\equiv-1$, значит $3^{1000}\\equiv(-1)^{1000}=1$.",
       "**По модулю $25$:** $\\varphi(25)=20$, и по теореме Эйлера $3^{20}\\equiv1$; так как $20\\mid1000$, получаем $3^{1000}\\equiv1$.",
       "Ищем $x$ с $x\\equiv1\\pmod4$ и $x\\equiv1\\pmod{25}$.",
       "Оба условия выполняет $x\\equiv1\\pmod{100}$, и по единственности других решений нет."
      ],
      "en": [
       "$100=4\\cdot25$ with $\\gcd(4,25)=1$, so the theorem applies.",
       "**Mod $4$:** $3\\equiv-1$, so $3^{1000}\\equiv(-1)^{1000}=1$.",
       "**Mod $25$:** $\\varphi(25)=20$, and Euler gives $3^{20}\\equiv1$; since $20\\mid1000$, $3^{1000}\\equiv1$.",
       "We need $x\\equiv1\\pmod4$ and $x\\equiv1\\pmod{25}$.",
       "Both hold for $x\\equiv1\\pmod{100}$, and by uniqueness there is nothing else."
      ]
     },
     "ans": {
      "ru": "Оканчивается на $01$.",
      "en": "It ends in $01$."
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Китайская теорема — это **стратегия разложения**: трудную задачу по составному модулю разбивают на лёгкие по степеням простых, решают по отдельности и собирают обратно. Так считают последние цифры, так устроены быстрые алгоритмы арифметики больших чисел.",
      "en": "The Chinese remainder theorem is a **divide-and-conquer strategy**: a hard question modulo a composite number splits into easy ones modulo prime powers, solved separately and reassembled. That is how last digits are computed and how fast big-number arithmetic works."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "**Условие попарной взаимной простоты существенно.** Система $$x\\equiv1\\pmod2,\\qquad x\\equiv0\\pmod4$$ решений не имеет: первое требует нечётности, второе — чётности. Когда модули не взаимно просты, система разрешима лишь при условии согласованности: $\\gcd\\left(m_i,m_j\\right)\\mid a_i-a_j$ для всех пар.",
      "en": "**Pairwise coprimality matters.** The system $$x\\equiv1\\pmod2,\\qquad x\\equiv0\\pmod4$$ has no solution: the first demands an odd number, the second an even one. For non-coprime moduli the system is solvable exactly under the compatibility condition $\\gcd\\left(m_i,m_j\\right)\\mid a_i-a_j$ for every pair."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Порядок вычета: почему степени зацикливаются",
    "en": "The order of a residue: why powers cycle"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Мы видели, что последние цифры степеней повторяются с некоторым периодом. Теорема Эйлера объясняет, **почему** период существует. Понятие порядка объясняет, **чему именно** он равен.",
      "en": "We have seen that the last digits of powers repeat with some period. Euler’s theorem explains **why** a period exists. The notion of order explains **what** it is."
     }
    },
    {
     "t": "def",
     "name": {
      "ru": "Порядок вычета",
      "en": "Order of a residue"
     },
     "text": {
      "ru": "Пусть $\\gcd(a,m)=1$. **Порядком** $a$ по модулю $m$ называется наименьшее натуральное $k$ с $$a^{k}\\equiv1\\pmod m .$$ Обозначение: $\\operatorname{ord}_m(a)$.",
      "en": "Let $\\gcd(a,m)=1$. The **order** of $a$ modulo $m$ is the least positive $k$ with $$a^{k}\\equiv1\\pmod m ,$$ written $\\operatorname{ord}_m(a)$."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Порядок существует: по теореме Эйлера показатель $\\varphi(m)$ уже годится, а значит непустое множество подходящих показателей имеет наименьший элемент.",
      "en": "The order exists: Euler’s theorem shows the exponent $\\varphi(m)$ already works, so the non-empty set of valid exponents has a least element."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Порядок делит показатель",
      "en": "The order divides every exponent that works"
     },
     "text": {
      "ru": "Пусть $d=\\operatorname{ord}_m(a)$. Тогда $$a^{n}\\equiv1\\pmod m\\quad\\Longleftrightarrow\\quad d\\mid n .$$ В частности $d\\mid\\varphi(m)$, а при простом модуле $p$ — $d\\mid p-1$.",
      "en": "Let $d=\\operatorname{ord}_m(a)$. Then $$a^{n}\\equiv1\\pmod m\\quad\\Longleftrightarrow\\quad d\\mid n .$$ In particular $d\\mid\\varphi(m)$, and for a prime modulus $p$, $d\\mid p-1$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Если $d\\mid n$,** скажем $n=dq$, то $$a^{n}=\\left(a^{d}\\right)^{q}\\equiv1^{q}=1 \\quad\\checkmark$$\n\n**Обратно,** пусть $a^{n}\\equiv1$. Разделим с остатком: $n=dq+r$, где $0\\le r<d$. Тогда $$1\\equiv a^{n}=\\left(a^{d}\\right)^{q}a^{r}\\equiv a^{r}\\pmod m .$$\n\nНо $d$ — **наименьший** положительный показатель с таким свойством, а $0\\le r<d$. Значит $r$ не может быть положительным, то есть $r=0$ и $d\\mid n$ ✓\n\nПоследнее утверждение получается подстановкой $n=\\varphi(m)$: теорема Эйлера даёт $a^{\\varphi(m)}\\equiv1$, значит $d\\mid\\varphi(m)$. $\\blacksquare$",
      "en": "**If $d\\mid n$,** say $n=dq$, then $$a^{n}=\\left(a^{d}\\right)^{q}\\equiv1 \\quad\\checkmark$$\n\n**Conversely,** suppose $a^{n}\\equiv1$. Divide with remainder: $n=dq+r$ with $0\\le r<d$. Then $$1\\equiv a^{n}=\\left(a^{d}\\right)^{q}a^{r}\\equiv a^{r}\\pmod m .$$\n\nBut $d$ is the **least** positive exponent with this property and $0\\le r<d$, so $r$ cannot be positive: $r=0$ and $d\\mid n$ ✓\n\nThe last claim follows by taking $n=\\varphi(m)$: Euler gives $a^{\\varphi(m)}\\equiv1$, hence $d\\mid\\varphi(m)$. $\\blacksquare$"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Эта теорема — самый мощный инструмент в задачах «докажите, что $p$ делит…». Схема: находим, что $a^{n}\\equiv1\\pmod p$, заключаем $d\\mid n$; отдельно из малой теоремы Ферма $d\\mid p-1$. Значит $d$ делит $\\gcd(n,\\ p-1)$ — и часто это сразу даёт $d=1$ или $d=2$, а с ними и ответ.",
      "en": "This theorem is the sharpest tool in \"prove that $p$ divides…\" problems. The pattern: show $a^{n}\\equiv1\\pmod p$, conclude $d\\mid n$; separately Fermat gives $d\\mid p-1$. So $d$ divides $\\gcd(n,\\ p-1)$ — which often forces $d=1$ or $d=2$, and the answer follows."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите порядок числа $2$ по модулю $7$ и по модулю $15$.",
      "en": "Find the order of $2$ modulo $7$ and modulo $15$."
     },
     "steps": {
      "ru": [
       "**По модулю $7$:** $\\varphi(7)=6$, значит порядок делит $6$, то есть равен $1,2,3$ или $6$.",
       "$2^{1}=2$, $2^{2}=4$, $2^{3}=8\\equiv1$ — порядок равен $3$.",
       "**По модулю $15$:** $\\varphi(15)=8$, значит порядок делит $8$.",
       "$2^{1}=2$, $2^{2}=4$, $2^{4}=16\\equiv1$ — порядок равен $4$.",
       "Заметьте: в обоих случаях порядок строго меньше $\\varphi(m)$."
      ],
      "en": [
       "**Mod $7$:** $\\varphi(7)=6$, so the order divides $6$, i.e. is $1,2,3$ or $6$.",
       "$2^{1}=2$, $2^{2}=4$, $2^{3}=8\\equiv1$ — the order is $3$.",
       "**Mod $15$:** $\\varphi(15)=8$, so the order divides $8$.",
       "$2^{1}=2$, $2^{2}=4$, $2^{4}=16\\equiv1$ — the order is $4$.",
       "Note that in both cases the order is strictly less than $\\varphi(m)$."
      ]
     },
     "ans": {
      "ru": "$\\operatorname{ord}_7(2)=3$, $\\operatorname{ord}_{15}(2)=4$.",
      "en": "$\\operatorname{ord}_7(2)=3$, $\\operatorname{ord}_{15}(2)=4$."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Докажите, что всякий простой делитель числа $2^{n}-1$ при простом $n$ имеет вид $2nk+1$.",
      "en": "Prove that every prime divisor of $2^{n}-1$, with $n$ prime, has the form $2nk+1$."
     },
     "steps": {
      "ru": [
       "Пусть $p\\mid2^{n}-1$, то есть $2^{n}\\equiv1\\pmod p$. Обозначим $d=\\operatorname{ord}_p(2)$.",
       "По теореме $d\\mid n$. Число $n$ простое, значит $d=1$ или $d=n$.",
       "Случай $d=1$ означал бы $2\\equiv1\\pmod p$, то есть $p\\mid1$ ✗ Значит $d=n$.",
       "По малой теореме Ферма $d\\mid p-1$, то есть $n\\mid p-1$.",
       "Кроме того $p$ нечётно (ведь $2^{n}-1$ нечётно), значит $p-1$ чётно.",
       "Итак, $p-1$ делится и на $n$, и на $2$, а $n$ нечётно, поэтому $2n\\mid p-1$."
      ],
      "en": [
       "Let $p\\mid2^{n}-1$, i.e. $2^{n}\\equiv1\\pmod p$, and put $d=\\operatorname{ord}_p(2)$.",
       "The theorem gives $d\\mid n$. As $n$ is prime, $d=1$ or $d=n$.",
       "If $d=1$ then $2\\equiv1\\pmod p$, so $p\\mid1$ ✗ Hence $d=n$.",
       "Fermat gives $d\\mid p-1$, so $n\\mid p-1$.",
       "Also $p$ is odd (since $2^{n}-1$ is odd), so $p-1$ is even.",
       "Thus $p-1$ is divisible by $n$ and by $2$, and $n$ is odd, so $2n\\mid p-1$."
      ]
     },
     "ans": {
      "ru": "$p=2nk+1$. Например, делители $2^{11}-1=2047$ ищутся среди $23,\\ 67,\\ 89,\\dots$ — и действительно $2047=23\\cdot89$.",
      "en": "$p=2nk+1$. For instance the divisors of $2^{11}-1=2047$ are sought among $23,\\ 67,\\ 89,\\dots$ — and indeed $2047=23\\cdot89$."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "**Первообразные корни.** Иногда порядок достигает максимума: $\\operatorname{ord}_m(a)=\\varphi(m)$. Такое $a$ называют **первообразным корнем** по модулю $m$; его степени пробегают вообще все обратимые вычеты. Первообразные корни существуют ровно при $m=1,2,4,p^{k},2p^{k}$ с нечётным простым $p$. Например, $3$ — первообразный корень по модулю $7$: его степени дают $3,2,6,4,5,1$ — все шесть ненулевых вычетов.",
      "en": "**Primitive roots.** Sometimes the order is as large as possible: $\\operatorname{ord}_m(a)=\\varphi(m)$. Such an $a$ is a **primitive root** modulo $m$, and its powers run through every invertible residue. Primitive roots exist exactly for $m=1,2,4,p^{k},2p^{k}$ with $p$ an odd prime. For instance $3$ is a primitive root mod $7$: its powers give $3,2,6,4,5,1$ — all six non-zero residues."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Квадраты по простому модулю",
    "en": "Squares modulo a prime"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Приём «посмотрим на квадраты по модулю» мы уже применяли не раз. Пора выяснить, сколько вообще бывает квадратов по данному модулю и как узнать, является ли число квадратом, не перебирая всё подряд.",
      "en": "We have used the move \"look at squares modulo $m$\" more than once. Time to find out how many squares there are altogether, and how to tell whether a number is one without checking everything."
     }
    },
    {
     "t": "def",
     "name": {
      "ru": "Квадратичный вычет",
      "en": "Quadratic residue"
     },
     "text": {
      "ru": "Пусть $p$ — нечётное простое и $p\\nmid a$. Число $a$ называется **квадратичным вычетом** по модулю $p$, если сравнение $$x^{2}\\equiv a\\pmod p$$ имеет решение, и **невычетом** в противном случае.",
      "en": "Let $p$ be an odd prime with $p\\nmid a$. The number $a$ is a **quadratic residue** mod $p$ if $$x^{2}\\equiv a\\pmod p$$ has a solution, and a **non-residue** otherwise."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Вычетов ровно половина",
      "en": "Exactly half are residues"
     },
     "text": {
      "ru": "Среди ненулевых вычетов $1,2,\\dots,p-1$ ровно $\\dfrac{p-1}{2}$ квадратичных вычетов и столько же невычетов. При этом каждое сравнение $x^{2}\\equiv a$ имеет либо два решения, либо ни одного.",
      "en": "Among the non-zero residues $1,2,\\dots,p-1$ exactly $\\dfrac{p-1}{2}$ are quadratic residues and equally many are non-residues. Moreover $x^{2}\\equiv a$ has either two solutions or none."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Рассмотрим отображение $x\\mapsto x^{2}$ на множестве $\\{1,2,\\dots,p-1\\}$.\n\n**Каждое значение достигается дважды.** Если $x^{2}\\equiv y^{2}$, то $p\\mid(x-y)(x+y)$, и по лемме Евклида $x\\equiv y$ или $x\\equiv-y$. Значит числа $x$ и $p-x$ дают один и тот же квадрат, и других совпадений нет.\n\n**Эти два числа различны.** Равенство $x\\equiv-x$ означало бы $p\\mid2x$, что при нечётном $p$ и $p\\nmid x$ невозможно.\n\nЗначит $p-1$ чисел разбиваются на $\\tfrac{p-1}2$ пар, каждая из которых даёт свой квадрат, и все эти квадраты различны. Итого вычетов ровно $\\tfrac{p-1}2$, а остальные $\\tfrac{p-1}2$ ненулевых вычетов — невычеты. $\\blacksquare$",
      "en": "Consider the map $x\\mapsto x^{2}$ on $\\{1,2,\\dots,p-1\\}$.\n\n**Every value is hit twice.** If $x^{2}\\equiv y^{2}$ then $p\\mid(x-y)(x+y)$, so Euclid’s lemma gives $x\\equiv y$ or $x\\equiv-y$. Thus $x$ and $p-x$ give the same square, and there are no other coincidences.\n\n**These two are distinct.** $x\\equiv-x$ would mean $p\\mid2x$, impossible for odd $p$ with $p\\nmid x$.\n\nSo the $p-1$ numbers split into $\\tfrac{p-1}2$ pairs, each producing its own square, all distinct. Hence there are exactly $\\tfrac{p-1}2$ residues, and the remaining $\\tfrac{p-1}2$ are non-residues. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Выпишите все квадратичные вычеты по модулю $11$.",
      "en": "List all quadratic residues modulo $11$."
     },
     "steps": {
      "ru": [
       "Достаточно возвести в квадрат числа $1,\\dots,5$ — дальше квадраты повторяются.",
       "$1^{2}=1$, $2^{2}=4$, $3^{2}=9$, $4^{2}=16\\equiv5$, $5^{2}=25\\equiv3$.",
       "Получили $\\tfrac{11-1}{2}=5$ вычетов ✓",
       "Невычеты — оставшиеся: $2,\\ 6,\\ 7,\\ 8,\\ 10$."
      ],
      "en": [
       "It is enough to square $1,\\dots,5$ — beyond that the squares repeat.",
       "$1^{2}=1$, $2^{2}=4$, $3^{2}=9$, $4^{2}=16\\equiv5$, $5^{2}=25\\equiv3$.",
       "That is $\\tfrac{11-1}{2}=5$ residues ✓",
       "The non-residues are the rest: $2,\\ 6,\\ 7,\\ 8,\\ 10$."
      ]
     },
     "ans": {
      "ru": "Вычеты: $1,3,4,5,9$.",
      "en": "Residues: $1,3,4,5,9$."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Критерий Эйлера",
      "en": "Euler’s criterion"
     },
     "text": {
      "ru": "Пусть $p$ — нечётное простое и $p\\nmid a$. Тогда $$a^{\\frac{p-1}{2}}\\equiv\\begin{cases}\\ \\ 1\\pmod p, & \\text{если } a\\ \\text{— квадратичный вычет},\\\\[2pt] -1\\pmod p, & \\text{если } a\\ \\text{— невычет}.\\end{cases}$$",
      "en": "Let $p$ be an odd prime with $p\\nmid a$. Then $$a^{\\frac{p-1}{2}}\\equiv\\begin{cases}\\ \\ 1\\pmod p, & \\text{if } a\\ \\text{is a quadratic residue},\\\\[2pt] -1\\pmod p, & \\text{if } a\\ \\text{is a non-residue}.\\end{cases}$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Шаг 1: значение всегда $\\pm1$.** По малой теореме Ферма $$\\left(a^{\\frac{p-1}{2}}\\right)^{2}=a^{\\,p-1}\\equiv1\\pmod p ,$$ значит $p$ делит $\\left(a^{\\frac{p-1}{2}}-1\\right)\\left(a^{\\frac{p-1}{2}}+1\\right)$, и по лемме Евклида один из множителей делится на $p$.\n\n**Шаг 2: вычеты дают $+1$.** Пусть $a\\equiv x^{2}$. Тогда $$a^{\\frac{p-1}{2}}\\equiv x^{\\,p-1}\\equiv1\\pmod p \\quad\\checkmark$$\n\n**Шаг 3: невычеты дают $-1$.** Многочлен $t^{\\frac{p-1}{2}}-1$ имеет по модулю простого $p$ не более $\\tfrac{p-1}2$ корней. По шагу 2 все $\\tfrac{p-1}2$ квадратичных вычетов уже являются его корнями, значит других корней нет. Поэтому для невычета $a$ значение $a^{\\frac{p-1}{2}}$ не равно $1$, а по шагу 1 оно равно $-1$. $\\blacksquare$",
      "en": "**Step 1: the value is always $\\pm1$.** Fermat gives $$\\left(a^{\\frac{p-1}{2}}\\right)^{2}=a^{\\,p-1}\\equiv1\\pmod p ,$$ so $p$ divides $\\left(a^{\\frac{p-1}{2}}-1\\right)\\left(a^{\\frac{p-1}{2}}+1\\right)$, and Euclid’s lemma puts $p$ into one of the factors.\n\n**Step 2: residues give $+1$.** If $a\\equiv x^{2}$ then $$a^{\\frac{p-1}{2}}\\equiv x^{\\,p-1}\\equiv1\\pmod p \\quad\\checkmark$$\n\n**Step 3: non-residues give $-1$.** The polynomial $t^{\\frac{p-1}{2}}-1$ has at most $\\tfrac{p-1}2$ roots modulo the prime $p$. By Step 2 all $\\tfrac{p-1}2$ quadratic residues are already roots, so there are no others. Hence for a non-residue $a$ the value $a^{\\frac{p-1}{2}}$ is not $1$, and by Step 1 it is $-1$. $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Когда $-1$ является квадратом",
      "en": "When $-1$ is a square"
     },
     "text": {
      "ru": "Для нечётного простого $p$ сравнение $x^{2}\\equiv-1\\pmod p$ разрешимо **тогда и только тогда**, когда $p\\equiv1\\pmod4$.",
      "en": "For an odd prime $p$ the congruence $x^{2}\\equiv-1\\pmod p$ is solvable **if and only if** $p\\equiv1\\pmod4$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "По критерию Эйлера разрешимость равносильна равенству $$(-1)^{\\frac{p-1}{2}}\\equiv1\\pmod p .$$\n\nЛевая часть равна $+1$, если $\\tfrac{p-1}2$ чётно, и $-1$, если нечётно. А $-1\\not\\equiv1$ при $p>2$.\n\nЗначит разрешимость равносильна чётности $\\tfrac{p-1}2$, то есть условию $4\\mid p-1$. $\\blacksquare$\n\n**Проверка.** При $p=5$: $2^{2}=4\\equiv-1$ ✓ При $p=7$: квадраты по модулю $7$ — это $1,4,2$, и числа $6\\equiv-1$ среди них нет ✓",
      "en": "By Euler’s criterion solvability is equivalent to $$(-1)^{\\frac{p-1}{2}}\\equiv1\\pmod p .$$\n\nThe left side is $+1$ when $\\tfrac{p-1}2$ is even and $-1$ when it is odd, and $-1\\not\\equiv1$ for $p>2$.\n\nSo solvability is equivalent to $\\tfrac{p-1}2$ being even, i.e. $4\\mid p-1$. $\\blacksquare$\n\n**Check.** For $p=5$: $2^{2}=4\\equiv-1$ ✓ For $p=7$: the squares mod $7$ are $1,4,2$, and $6\\equiv-1$ is not among them ✓"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Отсюда мгновенно следуют многие «невозможности». Например, уравнение $x^{2}+1=7y$ решений не имеет, потому что $7\\equiv3\\pmod4$. А сумма двух квадратов никогда не делится на простое $p\\equiv3\\pmod4$ в нечётной степени — на этом стоит вся теория представления чисел суммой двух квадратов.",
      "en": "Many \"impossibility\" results follow instantly. The equation $x^{2}+1=7y$ has no solutions because $7\\equiv3\\pmod4$. And a sum of two squares is never divisible by a prime $p\\equiv3\\pmod4$ to an odd power — the whole theory of representing numbers as sums of two squares rests on this."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "**Квадратичный закон взаимности** (Гаусс, $1796$) идёт дальше и связывает разрешимость $x^{2}\\equiv q\\pmod p$ с разрешимостью $x^{2}\\equiv p\\pmod q$: для различных нечётных простых $$\\left(\\frac pq\\right)\\left(\\frac qp\\right)=(-1)^{\\frac{p-1}2\\cdot\\frac{q-1}2} .$$ Гаусс называл её «золотой теоремой» и дал восемь разных доказательств.",
      "en": "**Quadratic reciprocity** (Gauss, $1796$) goes further and links the solvability of $x^{2}\\equiv q\\pmod p$ to that of $x^{2}\\equiv p\\pmod q$: for distinct odd primes $$\\left(\\frac pq\\right)\\left(\\frac qp\\right)=(-1)^{\\frac{p-1}2\\cdot\\frac{q-1}2} .$$ Gauss called it the \"golden theorem\" and gave eight different proofs."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Как выбирать модуль",
    "en": "Choosing the modulus"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Главный вопрос любой задачи «докажите, что решений нет» — **по какому модулю смотреть**. Выбор не случаен: модуль подбирают так, чтобы у одной части уравнения было мало возможных остатков, а у другой нужного остатка не было вовсе.",
      "en": "The central question in any \"prove there are no solutions\" problem is **which modulus to look at**. The choice is not random: pick a modulus for which one side of the equation has few possible remainders and the other side never hits them."
     }
    },
    {
     "t": "table",
     "head": {
      "ru": [
       "Что в задаче",
       "Модуль",
       "Почему"
      ],
      "en": [
       "What appears",
       "Modulus",
       "Why"
      ]
     },
     "rows": {
      "ru": [
       [
        "квадраты",
        "$4$ или $8$",
        "$n^2\\equiv0,1\\pmod4$; нечётный квадрат $\\equiv1\\pmod8$"
       ],
       [
        "сумма двух квадратов",
        "$4$",
        "даёт только $0,1,2$ — никогда $3$"
       ],
       [
        "кубы",
        "$9$",
        "$n^3\\equiv0,\\pm1\\pmod9$"
       ],
       [
        "степени двойки",
        "$3$ или $7$",
        "короткие циклы $2$ и $3$"
       ],
       [
        "десятичная запись",
        "$9$ или $11$",
        "сумма цифр, знакочередующаяся сумма"
       ],
       [
        "простое $p$ в показателе",
        "$p$",
        "малая теорема Ферма"
       ]
      ],
      "en": [
       [
        "squares",
        "$4$ or $8$",
        "$n^2\\equiv0,1\\pmod4$; an odd square is $\\equiv1\\pmod8$"
       ],
       [
        "a sum of two squares",
        "$4$",
        "gives only $0,1,2$ — never $3$"
       ],
       [
        "cubes",
        "$9$",
        "$n^3\\equiv0,\\pm1\\pmod9$"
       ],
       [
        "powers of two",
        "$3$ or $7$",
        "short cycles of length $2$ and $3$"
       ],
       [
        "decimal digits",
        "$9$ or $11$",
        "digit sum, alternating digit sum"
       ],
       [
        "a prime $p$ in an exponent",
        "$p$",
        "Fermat's little theorem"
       ]
      ]
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Докажите, что уравнение $x^2+y^2=2023$ не имеет решений в целых числах.",
      "en": "Prove that the equation $x^2+y^2=2023$ has no integer solutions."
     },
     "steps": {
      "ru": [
       "Квадрат целого даёт по модулю $4$ остаток $0$ или $1$.",
       "Значит сумма двух квадратов даёт остаток $0$, $1$ или $2$ — но не $3$.",
       "$2023=4\\cdot505+3$, то есть $2023\\equiv3\\pmod 4$. Решений нет."
      ],
      "en": [
       "A square leaves remainder $0$ or $1$ modulo $4$.",
       "So a sum of two squares leaves $0$, $1$ or $2$ — never $3$.",
       "$2023=4\\cdot505+3$, that is $2023\\equiv3\\pmod 4$. There are no solutions."
      ]
     },
     "ans": {
      "ru": "Решений нет",
      "en": "No solutions"
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Приём: подставить малое вместо большого",
      "en": "The move: swap a big number for a small one"
     },
     "text": {
      "ru": "Прежде чем возводить в степень, замените основание на его остаток. Вместо $15^{15}\\pmod{13}$ считайте $2^{15}\\pmod{13}$ — арифметика становится устной.",
      "en": "Before taking a power, replace the base by its remainder. Instead of $15^{15}\\pmod{13}$ compute $2^{15}\\pmod{13}$ — the arithmetic becomes mental."
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
    "ru": "Найдите последнюю цифру числа $2^{2025}$.",
    "en": "Find the last digit of $2^{2025}$."
   },
   "hint": {
    "ru": "Цикл $2,4,8,6$.",
    "en": "The cycle is $2,4,8,6$."
   },
   "sol": {
    "ru": "Длина цикла $4$; $2025=4\\cdot506+1$, остаток $1$, значит последняя цифра — первая в цикле. **Ответ:** $2$.",
    "en": "The cycle has length $4$; $2025=4\\cdot506+1$ with remainder $1$, so the last digit is the first entry of the cycle. **Answer:** $2$."
   }
  },
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "Найдите остаток от деления $15^{15}$ на $13$.",
    "en": "Find the remainder of $15^{15}$ on division by $13$."
   },
   "hint": {
    "ru": "Сначала уменьшите основание.",
    "en": "Reduce the base first."
   },
   "sol": {
    "ru": "$15\\equiv2\\pmod{13}$, значит $15^{15}\\equiv2^{15}$. По Ферма $2^{12}\\equiv1$, поэтому $2^{15}=2^{12}\\cdot2^{3}\\equiv8$. **Ответ:** $8$.",
    "en": "$15\\equiv2\\pmod{13}$, so $15^{15}\\equiv2^{15}$. By Fermat $2^{12}\\equiv1$, hence $2^{15}=2^{12}\\cdot2^{3}\\equiv8$. **Answer:** $8$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что точный квадрат никогда не оканчивается цифрой $2,3,7$ или $8$.",
    "en": "Prove that a perfect square never ends in $2,3,7$ or $8$."
   },
   "hint": {
    "ru": "Переберите последнюю цифру основания.",
    "en": "Run through the last digit of the base."
   },
   "sol": {
    "ru": "Последняя цифра квадрата зависит только от последней цифры числа. Перебирая $0,\\ldots,9$, получаем последние цифры квадратов: $0,1,4,9,6,5,6,9,4,1$. Множество возможных цифр — $\\{0,1,4,5,6,9\\}$; цифр $2,3,7,8$ среди них нет. $\\blacksquare$",
    "en": "The last digit of a square depends only on the last digit of the number. Running through $0,\\ldots,9$ gives the last digits of the squares: $0,1,4,9,6,5,6,9,4,1$. The possible digits are $\\{0,1,4,5,6,9\\}$, and $2,3,7,8$ are not among them. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Найдите остаток от деления $1!+2!+3!+\\cdots+100!$ на $12$.",
    "en": "Find the remainder of $1!+2!+3!+\\cdots+100!$ on division by $12$."
   },
   "hint": {
    "ru": "Начиная с какого $n$ факториал делится на $12$?",
    "en": "From which $n$ onwards is $n!$ divisible by $12$?"
   },
   "sol": {
    "ru": "При $n\\ge4$ факториал $n!$ содержит множители $3$ и $4$, значит делится на $12$ и не влияет на остаток. Остаётся $$1!+2!+3!=1+2+6=9.$$ **Ответ:** $9$.",
    "en": "For $n\\ge4$ the factorial $n!$ contains the factors $3$ and $4$, so it is divisible by $12$ and does not affect the remainder. What is left is $$1!+2!+3!=1+2+6=9.$$ **Answer:** $9$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Найдите две последние цифры числа $7^{2024}$.",
    "en": "Find the last two digits of $7^{2024}$."
   },
   "hint": {
    "ru": "Найдите наименьшее $k$ с $7^k\\equiv1\\pmod{100}$.",
    "en": "Find the smallest $k$ with $7^k\\equiv1\\pmod{100}$."
   },
   "sol": {
    "ru": "Считаем по модулю $100$: $7^2=49$, $7^4=49^2=2401\\equiv1$. Значит период равен $4$. Так как $2024=4\\cdot506$, получаем $7^{2024}\\equiv1\\pmod{100}$. **Ответ:** последние две цифры — $01$.",
    "en": "Work modulo $100$: $7^2=49$ and $7^4=49^2=2401\\equiv1$. So the period is $4$. Since $2024=4\\cdot506$ we get $7^{2024}\\equiv1\\pmod{100}$. **Answer:** the last two digits are $01$."
   }
  },
  {
   "src": "IMO 1964, задача 1 / IMO 1964, Problem 1",
   "lvl": 2,
   "q": {
    "ru": "(a) Найдите все натуральные $n$, при которых $7\\mid 2^n-1$. (b) Докажите, что $7\\nmid 2^n+1$ ни при каком натуральном $n$.",
    "en": "(a) Find all positive integers $n$ for which $7\\mid 2^n-1$. (b) Prove that $7\\nmid 2^n+1$ for every positive integer $n$."
   },
   "hint": {
    "ru": "Выпишите $2^n\\pmod 7$ — цикл очень короткий.",
    "en": "Write out $2^n\\pmod 7$ — the cycle is very short."
   },
   "sol": {
    "ru": "Степени двойки по модулю $7$: $2^1\\equiv2$, $2^2\\equiv4$, $2^3\\equiv1$, дальше всё повторяется с периодом $3$. Значит $2^n\\pmod 7$ принимает только значения $2,4,1$. (a) $2^n\\equiv1$ тогда и только тогда, когда $n$ делится на $3$. (b) $2^n\\equiv-1\\equiv6$ невозможно, так как $6$ не входит в множество $\\{1,2,4\\}$. $\\blacksquare$",
    "en": "The powers of two modulo $7$ are $2^1\\equiv2$, $2^2\\equiv4$, $2^3\\equiv1$, and then everything repeats with period $3$. So $2^n\\pmod 7$ takes only the values $2,4,1$. (a) $2^n\\equiv1$ exactly when $3\\mid n$. (b) $2^n\\equiv-1\\equiv6$ is impossible, since $6$ is not in $\\{1,2,4\\}$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $7\\mid 3^{2n+1}+2^{n+2}$ при любом целом $n\\ge0$.",
    "en": "Prove that $7\\mid 3^{2n+1}+2^{n+2}$ for every integer $n\\ge0$."
   },
   "hint": {
    "ru": "Приведите обе степени к основанию $2$ по модулю $7$.",
    "en": "Bring both powers to base $2$ modulo $7$."
   },
   "sol": {
    "ru": "Запишем $3^{2n+1}=3\\cdot9^{n}$ и $2^{n+2}=4\\cdot2^{n}$. По модулю $7$ имеем $9\\equiv2$, поэтому $$3^{2n+1}+2^{n+2}\\equiv3\\cdot2^{n}+4\\cdot2^{n}=7\\cdot2^{n}\\equiv0\\pmod 7.$$ $\\blacksquare$ *Проверка:* при $n=1$ получаем $27+8=35=5\\cdot7$ ✓",
    "en": "Write $3^{2n+1}=3\\cdot9^{n}$ and $2^{n+2}=4\\cdot2^{n}$. Modulo $7$ we have $9\\equiv2$, so $$3^{2n+1}+2^{n+2}\\equiv3\\cdot2^{n}+4\\cdot2^{n}=7\\cdot2^{n}\\equiv0\\pmod 7.$$ $\\blacksquare$ *Check:* for $n=1$ this is $27+8=35=5\\cdot7$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что сумма квадратов трёх последовательных целых чисел никогда не является точным квадратом.",
    "en": "Prove that the sum of the squares of three consecutive integers is never a perfect square."
   },
   "hint": {
    "ru": "Посчитайте сумму и посмотрите на модуль $3$.",
    "en": "Compute the sum and look modulo $3$."
   },
   "sol": {
    "ru": "Сумма равна $$(n-1)^2+n^2+(n+1)^2=3n^2+2.$$ По модулю $3$ это даёт остаток $2$. Но квадрат целого числа даёт по модулю $3$ только остатки $0$ или $1$ (проверяется подстановкой $n=3k,3k\\pm1$). Значит $3n^2+2$ квадратом быть не может. $\\blacksquare$",
    "en": "The sum equals $$(n-1)^2+n^2+(n+1)^2=3n^2+2.$$ Modulo $3$ this leaves remainder $2$. But a square leaves only $0$ or $1$ modulo $3$ (check $n=3k,3k\\pm1$). So $3n^2+2$ cannot be a square. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $n^2\\equiv1\\pmod 8$ для любого нечётного $n$.",
    "en": "Prove that $n^2\\equiv1\\pmod 8$ for every odd $n$."
   },
   "hint": {
    "ru": "Запишите $n=2k+1$ и разложите на множители.",
    "en": "Write $n=2k+1$ and factor."
   },
   "sol": {
    "ru": "Пусть $n=2k+1$. Тогда $$n^2-1=(n-1)(n+1)=2k\\cdot(2k+2)=4k(k+1).$$ Из двух последовательных чисел $k$ и $k+1$ одно чётно, значит $k(k+1)$ чётно и $4k(k+1)$ делится на $8$. $\\blacksquare$",
    "en": "Let $n=2k+1$. Then $$n^2-1=(n-1)(n+1)=2k\\cdot(2k+2)=4k(k+1).$$ One of the consecutive integers $k$ and $k+1$ is even, so $k(k+1)$ is even and $4k(k+1)$ is divisible by $8$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $13\\mid 2^{70}+3^{70}$.",
    "en": "Prove that $13\\mid 2^{70}+3^{70}$."
   },
   "hint": {
    "ru": "Найдите короткие циклы для $2$ и для $3$ по модулю $13$.",
    "en": "Find the short cycles of $2$ and of $3$ modulo $13$."
   },
   "sol": {
    "ru": "По модулю $13$: $3^3=27\\equiv1$, значит период тройки равен $3$; из $70=3\\cdot23+1$ получаем $3^{70}\\equiv3$. Для двойки $2^{12}\\equiv1$ по Ферма, и $70=12\\cdot5+10$, поэтому $2^{70}\\equiv2^{10}=1024$. Так как $1024=13\\cdot78+10$, имеем $2^{70}\\equiv10$. Итого $$2^{70}+3^{70}\\equiv10+3=13\\equiv0\\pmod{13}.$$ $\\blacksquare$",
    "en": "Modulo $13$: $3^3=27\\equiv1$, so the period of $3$ is $3$; from $70=3\\cdot23+1$ we get $3^{70}\\equiv3$. For $2$, Fermat gives $2^{12}\\equiv1$, and $70=12\\cdot5+10$, so $2^{70}\\equiv2^{10}=1024$. Since $1024=13\\cdot78+10$ we have $2^{70}\\equiv10$. Altogether $$2^{70}+3^{70}\\equiv10+3=13\\equiv0\\pmod{13}.$$ $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Найдите последнюю цифру числа $7^{7^{7}}$.",
    "en": "Find the last digit of $7^{7^{7}}$."
   },
   "hint": {
    "ru": "Показатель нужен только по модулю $4$.",
    "en": "Only the exponent modulo $4$ matters."
   },
   "sol": {
    "ru": "Цикл последних цифр семёрки — $7,9,3,1$, длина $4$. Значит нужен остаток числа $7^7$ по модулю $4$. Так как $7\\equiv-1\\pmod4$, получаем $7^{7}\\equiv(-1)^{7}=-1\\equiv3\\pmod 4$. Остаток $3$ — берём третий элемент цикла. **Ответ:** $3$.",
    "en": "The cycle of last digits of $7$ is $7,9,3,1$, of length $4$. So we need $7^7$ modulo $4$. Since $7\\equiv-1\\pmod4$ we get $7^{7}\\equiv(-1)^{7}=-1\\equiv3\\pmod 4$. Remainder $3$, so take the third entry of the cycle. **Answer:** $3$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что число $\\underbrace{11\\ldots1}_{n}$ при $n>1$ не является точным квадратом.",
    "en": "Prove that the number $\\underbrace{11\\ldots1}_{n}$ is not a perfect square for $n>1$."
   },
   "hint": {
    "ru": "Две последние цифры дают остаток по модулю $4$.",
    "en": "The last two digits give the remainder modulo $4$."
   },
   "sol": {
    "ru": "При $n>1$ число оканчивается на $11$, а остаток по модулю $4$ определяется двумя последними цифрами: $11=4\\cdot2+3$, значит число $\\equiv3\\pmod 4$. Но квадрат целого даёт по модулю $4$ только $0$ или $1$. Противоречие. $\\blacksquare$",
    "en": "For $n>1$ the number ends in $11$, and the remainder modulo $4$ is decided by the last two digits: $11=4\\cdot2+3$, so the number is $\\equiv3\\pmod 4$. But a square is $0$ or $1$ modulo $4$. Contradiction. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что при $n\\ge2$ число $2^{2^{n}}+1$ оканчивается цифрой $7$.",
    "en": "Prove that for $n\\ge2$ the number $2^{2^{n}}+1$ ends in the digit $7$."
   },
   "hint": {
    "ru": "Показатель $2^n$ при $n\\ge2$ делится на $4$.",
    "en": "For $n\\ge2$ the exponent $2^n$ is a multiple of $4$."
   },
   "sol": {
    "ru": "Цикл последних цифр двойки — $2,4,8,6$ длины $4$. При $n\\ge2$ показатель $2^{n}$ делится на $4$, значит остаток равен нулю и берётся **последний** элемент цикла: $2^{2^{n}}$ оканчивается на $6$. Тогда $2^{2^{n}}+1$ оканчивается на $7$. $\\blacksquare$ *Проверка:* $2^4+1=17$, $2^8+1=257$, $2^{16}+1=65537$ ✓",
    "en": "The cycle of last digits of $2$ is $2,4,8,6$, of length $4$. For $n\\ge2$ the exponent $2^{n}$ is a multiple of $4$, so the remainder is zero and we take the **last** entry of the cycle: $2^{2^{n}}$ ends in $6$. Hence $2^{2^{n}}+1$ ends in $7$. $\\blacksquare$ *Check:* $2^4+1=17$, $2^8+1=257$, $2^{16}+1=65537$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что уравнение $x^3+y^3+z^3=2020$ не имеет решений в целых числах.",
    "en": "Prove that the equation $x^3+y^3+z^3=2020$ has no integer solutions."
   },
   "hint": {
    "ru": "Посмотрите на кубы по модулю $9$.",
    "en": "Look at cubes modulo $9$."
   },
   "sol": {
    "ru": "**Шаг 1. Какие остатки бывают у куба по модулю $9$.** Любое целое $x$ сравнимо с одним из чисел $0,\\pm1,\\pm2,\\pm3,\\pm4$ по модулю $9$. Возведём в куб: $$0^3=0,\\quad(\\pm1)^3=\\pm1,\\quad(\\pm2)^3=\\pm8\\equiv\\mp1,\\quad(\\pm3)^3=\\pm27\\equiv0,\\quad(\\pm4)^3=\\pm64\\equiv\\pm1.$$ Значит **куб любого целого числа сравним с $0$, $1$ или $-1$ по модулю $9$** — других вариантов нет.\n\n**Шаг 2. Сумма трёх кубов.** Каждое из трёх слагаемых даёт $0$, $1$ или $-1$, поэтому их сумма лежит в промежутке от $-3$ до $3$, то есть $$x^3+y^3+z^3\\equiv-3,-2,-1,0,1,2\\ \\text{или}\\ 3\\pmod 9.$$ В привычной записи остатков это множество $\\{0,1,2,3,6,7,8\\}$; остатки $4$ и $5$ **недостижимы**.\n\n**Шаг 3. Считаем правую часть.** Сумма цифр $2020$ равна $2+0+2+0=4$, значит $2020\\equiv4\\pmod 9$ (можно и напрямую: $2020=9\\cdot224+4$).\n\n**Вывод.** Левая часть никогда не даёт остатка $4$, а правая даёт его всегда. Противоречие, решений нет. $\\blacksquare$\n\n*Замечание.* Тот же счёт показывает, что ни одно число вида $9k\\pm4$ не представимо суммой трёх кубов. А вот для остальных остатков вопрос очень труден: представление $33=8866128975287528^3+(-8778405442862239)^3+(-2736111468807040)^3$ нашли только в 2019 году.",
    "en": "**Step 1. Which remainders can a cube have modulo $9$.** Every integer $x$ is congruent to one of $0,\\pm1,\\pm2,\\pm3,\\pm4$ modulo $9$. Cube them: $$0^3=0,\\quad(\\pm1)^3=\\pm1,\\quad(\\pm2)^3=\\pm8\\equiv\\mp1,\\quad(\\pm3)^3=\\pm27\\equiv0,\\quad(\\pm4)^3=\\pm64\\equiv\\pm1.$$ So **the cube of any integer is congruent to $0$, $1$ or $-1$ modulo $9$** — there is nothing else.\n\n**Step 2. A sum of three cubes.** Each of the three terms contributes $0$, $1$ or $-1$, so the sum lies between $-3$ and $3$: $$x^3+y^3+z^3\\equiv-3,-2,-1,0,1,2\\ \\text{or}\\ 3\\pmod 9.$$ Written as ordinary remainders that is $\\{0,1,2,3,6,7,8\\}$; the remainders $4$ and $5$ are **out of reach**.\n\n**Step 3. The right-hand side.** The digit sum of $2020$ is $2+0+2+0=4$, so $2020\\equiv4\\pmod 9$ (or directly: $2020=9\\cdot224+4$).\n\n**Conclusion.** The left side never leaves remainder $4$ and the right side always does. Contradiction, so there are no solutions. $\\blacksquare$\n\n*Remark.* The same count shows that no number of the form $9k\\pm4$ is a sum of three cubes. For the other remainders the question is genuinely hard: the representation $33=8866128975287528^3+(-8778405442862239)^3+(-2736111468807040)^3$ was only found in 2019."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что $641\\mid 2^{32}+1$.",
    "en": "Prove that $641\\mid 2^{32}+1$."
   },
   "hint": {
    "ru": "Заметьте, что $641=5\\cdot2^7+1=2^4+5^4$.",
    "en": "Note that $641=5\\cdot2^7+1=2^4+5^4$."
   },
   "sol": {
    "ru": "Обозначим $p=641$ и воспользуемся двумя его записями. Из $641=5\\cdot2^{7}+1$ следует $$5\\cdot2^{7}\\equiv-1\\pmod{641},$$ а возведя в четвёртую степень, $5^{4}\\cdot2^{28}\\equiv1$. Из $641=2^{4}+5^{4}$ следует $5^{4}\\equiv-2^{4}$. Подставим: $$-2^{4}\\cdot2^{28}\\equiv1,\\quad\\text{то есть}\\quad -2^{32}\\equiv1,\\quad 2^{32}\\equiv-1\\pmod{641}.$$ Значит $641\\mid 2^{32}+1$. $\\blacksquare$ *Исторически* именно так Эйлер опроверг гипотезу Ферма о том, что все числа $2^{2^{n}}+1$ простые.",
    "en": "Write $p=641$ and use its two forms. From $641=5\\cdot2^{7}+1$ we get $$5\\cdot2^{7}\\equiv-1\\pmod{641},$$ and raising to the fourth power, $5^{4}\\cdot2^{28}\\equiv1$. From $641=2^{4}+5^{4}$ we get $5^{4}\\equiv-2^{4}$. Substituting, $$-2^{4}\\cdot2^{28}\\equiv1,\\quad\\text{that is}\\quad -2^{32}\\equiv1,\\quad 2^{32}\\equiv-1\\pmod{641}.$$ So $641\\mid 2^{32}+1$. $\\blacksquare$ *Historically* this is how Euler refuted Fermat\\'s guess that every $2^{2^{n}}+1$ is prime."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что $n^5-n$ делится на $30$, пользуясь малой теоремой Ферма.",
    "en": "Prove that $n^5-n$ is divisible by $30$, using Fermat\\'s little theorem."
   },
   "hint": {
    "ru": "$30=2\\cdot3\\cdot5$, и для каждого простого работает форма $a^p\\equiv a$.",
    "en": "$30=2\\cdot3\\cdot5$, and for each prime the form $a^p\\equiv a$ applies."
   },
   "sol": {
    "ru": "По малой теореме Ферма в форме $a^{p}\\equiv a\\pmod p$: при $p=5$ сразу $n^5\\equiv n\\pmod 5$, значит $5\\mid n^5-n$. Далее, $n^5-n=n(n^4-1)=n(n^2-1)(n^2+1)$, и множитель $n(n^2-1)=(n-1)n(n+1)$ — произведение трёх последовательных чисел, поэтому делится на $2$ и на $3$. Так как $2,3,5$ попарно взаимно просты, произведение делится на $30$. $\\blacksquare$",
    "en": "By Fermat's little theorem in the form $a^{p}\\equiv a\\pmod p$: with $p=5$ we get $n^5\\equiv n\\pmod 5$ at once, so $5\\mid n^5-n$. Next, $n^5-n=n(n^4-1)=n(n^2-1)(n^2+1)$, and the factor $n(n^2-1)=(n-1)n(n+1)$ is a product of three consecutive integers, hence divisible by $2$ and by $3$. As $2,3,5$ are pairwise coprime, the product is divisible by $30$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Найдите остаток от деления $2^{2^{2025}}$ на $13$.",
    "en": "Find the remainder of $2^{2^{2025}}$ on division by $13$."
   },
   "hint": {
    "ru": "Сначала найдите период двойки по модулю $13$, затем считайте показатель по модулю этого периода.",
    "en": "First find the period of $2$ modulo $13$, then reduce the exponent modulo that period."
   },
   "sol": {
    "ru": "По модулю $13$: $2^{12}\\equiv1$ (Ферма), и меньший период проверяется прямо: $2^6=64\\equiv12\\equiv-1$, значит период ровно $12$. Нужен остаток числа $2^{2025}$ по модулю $12$. Так как $2^{2025}$ делится на $4$, запишем $2^{2025}=4\\cdot2^{2023}$; по модулю $3$ имеем $2\\equiv-1$, поэтому $2^{2025}\\equiv(-1)^{2025}=-1\\equiv2\\pmod 3$. Числа, кратные $4$ и сравнимые с $2$ по модулю $3$: это $8\\pmod{12}$. Значит $2^{2025}\\equiv8\\pmod{12}$, и $$2^{2^{2025}}\\equiv2^{8}=256=13\\cdot19+9\\equiv9\\pmod{13}.$$ **Ответ:** $9$.",
    "en": "Modulo $13$: $2^{12}\\equiv1$ (Fermat), and a shorter period is ruled out directly since $2^6=64\\equiv12\\equiv-1$, so the period is exactly $12$. We need $2^{2025}$ modulo $12$. As $2^{2025}$ is a multiple of $4$, write $2^{2025}=4\\cdot2^{2023}$; modulo $3$ we have $2\\equiv-1$, so $2^{2025}\\equiv(-1)^{2025}=-1\\equiv2\\pmod 3$. A multiple of $4$ that is $\\equiv2\\pmod3$ is $\\equiv8\\pmod{12}$. Hence $2^{2025}\\equiv8\\pmod{12}$ and $$2^{2^{2025}}\\equiv2^{8}=256=13\\cdot19+9\\equiv9\\pmod{13}.$$ **Answer:** $9$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что для любого простого $p>5$ число $\\underbrace{11\\ldots1}_{p-1}$ делится на $p$.",
    "en": "Prove that for every prime $p>5$ the number $\\underbrace{11\\ldots1}_{p-1}$ is divisible by $p$."
   },
   "hint": {
    "ru": "$\\underbrace{11\\ldots1}_{k}=\\dfrac{10^{k}-1}{9}$ и малая теорема Ферма.",
    "en": "$\\underbrace{11\\ldots1}_{k}=\\dfrac{10^{k}-1}{9}$ and Fermat."
   },
   "sol": {
    "ru": "Обозначим $R_{k}=\\dfrac{10^{k}-1}{9}$. Так как $p>5$, число $p$ не делит $10$, значит по малой теореме Ферма $$10^{\\,p-1}\\equiv1\\pmod p,\\qquad\\text{то есть}\\qquad p\\mid 10^{\\,p-1}-1.$$ Кроме того $p>5$ означает $p\\ne3$, поэтому $\\gcd(p,9)=1$. Из $p\\mid 9R_{p-1}$ и взаимной простоты $p$ и $9$ следует $p\\mid R_{p-1}$. $\\blacksquare$ *Пример:* $p=7$ даёт $111111=7\\cdot15873$ ✓",
    "en": "Write $R_{k}=\\dfrac{10^{k}-1}{9}$. Since $p>5$, $p$ does not divide $10$, so by Fermat $$10^{\\,p-1}\\equiv1\\pmod p,\\qquad\\text{that is}\\qquad p\\mid 10^{\\,p-1}-1.$$ Also $p>5$ means $p\\ne3$, so $\\gcd(p,9)=1$. From $p\\mid 9R_{p-1}$ and the coprimality of $p$ and $9$ it follows that $p\\mid R_{p-1}$. $\\blacksquare$ *Example:* $p=7$ gives $111111=7\\cdot15873$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что $n^2+n+1$ не делится на $5$ ни при каком целом $n$.",
    "en": "Prove that $n^2+n+1$ is never divisible by $5$."
   },
   "hint": {
    "ru": "Переберите пять остатков.",
    "en": "Run through the five remainders."
   },
   "sol": {
    "ru": "Достаточно проверить $n\\equiv0,1,2,3,4\\pmod 5$: $$0+0+1=1,\\quad1+1+1=3,\\quad4+2+1=7\\equiv2,\\quad9+3+1=13\\equiv3,\\quad16+4+1=21\\equiv1.$$ Ни в одном случае не получается $0$, значит $5\\nmid n^2+n+1$. $\\blacksquare$",
    "en": "It is enough to check $n\\equiv0,1,2,3,4\\pmod 5$: $$0+0+1=1,\\quad1+1+1=3,\\quad4+2+1=7\\equiv2,\\quad9+3+1=13\\equiv3,\\quad16+4+1=21\\equiv1.$$ None gives $0$, so $5\\nmid n^2+n+1$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Найдите все целые $n$, при которых $n^2+n+1$ делится на $7$.",
    "en": "Find all integers $n$ for which $n^2+n+1$ is divisible by $7$."
   },
   "hint": {
    "ru": "Переберите семь остатков.",
    "en": "Run through the seven remainders."
   },
   "sol": {
    "ru": "Проверяем $n\\equiv0,\\ldots,6\\pmod 7$: значения $n^2+n+1$ равны $$1,\\;3,\\;7\\equiv0,\\;13\\equiv6,\\;21\\equiv0,\\;31\\equiv3,\\;43\\equiv1.$$ Нуль получается при $n\\equiv2$ и $n\\equiv4\\pmod 7$. **Ответ:** $n\\equiv2$ или $n\\equiv4\\pmod 7$. *Проверка:* $n=2$ даёт $7$ ✓, $n=4$ даёт $21=3\\cdot7$ ✓",
    "en": "Check $n\\equiv0,\\ldots,6\\pmod 7$: the values of $n^2+n+1$ are $$1,\\;3,\\;7\\equiv0,\\;13\\equiv6,\\;21\\equiv0,\\;31\\equiv3,\\;43\\equiv1.$$ Zero occurs for $n\\equiv2$ and $n\\equiv4\\pmod 7$. **Answer:** $n\\equiv2$ or $n\\equiv4\\pmod 7$. *Check:* $n=2$ gives $7$ ✓ and $n=4$ gives $21=3\\cdot7$ ✓"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Найдите остаток от деления $2^{100}$ на $3$.",
    "en": "Find the remainder of $2^{100}$ on division by $3$."
   },
   "hint": {
    "ru": "$2\\equiv-1\\pmod 3$.",
    "en": "$2\\equiv-1\\pmod 3$."
   },
   "sol": {
    "ru": "Заменим основание на удобное: $$2\\equiv-1\\pmod 3 .$$\n\nТогда $$2^{100}\\equiv(-1)^{100}=1\\pmod 3 ,$$ ведь показатель чётный.\n\n**Проверка** на маленьком показателе: $2^{2}=4=3+1$ ✓\n\n**Ответ:** $1$.",
    "en": "Replace the base by a convenient one: $$2\\equiv-1\\pmod 3 .$$\n\nThen $$2^{100}\\equiv(-1)^{100}=1\\pmod 3 ,$$ since the exponent is even.\n\n**Check** on a small exponent: $2^{2}=4=3+1$ ✓\n\n**Answer:** $1$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Найдите остаток от деления числа $1234567$ на $9$.",
    "en": "Find the remainder of $1234567$ on division by $9$."
   },
   "hint": {
    "ru": "Число сравнимо со своей суммой цифр по модулю $9$.",
    "en": "A number is congruent to its digit sum modulo $9$."
   },
   "sol": {
    "ru": "Так как $10\\equiv1\\pmod 9$, любая степень десятки тоже сравнима с единицей, поэтому число сравнимо с суммой своих цифр: $$1234567\\equiv1+2+3+4+5+6+7=28\\pmod 9 .$$\n\nПовторим приём: $$28\\equiv2+8=10\\equiv1+0=1\\pmod 9 .$$\n\n**Проверка:** $1234567=9\\cdot137174+1$ ✓\n\n**Ответ:** $1$.",
    "en": "Since $10\\equiv1\\pmod 9$, every power of ten is congruent to one as well, so a number is congruent to its digit sum: $$1234567\\equiv1+2+3+4+5+6+7=28\\pmod 9 .$$\n\nRepeat the trick: $$28\\equiv2+8=10\\equiv1+0=1\\pmod 9 .$$\n\n**Check:** $1234567=9\\cdot137174+1$ ✓\n\n**Answer:** $1$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Какой последней цифрой оканчивается число $3^{100}$?",
    "en": "What is the last digit of $3^{100}$?"
   },
   "hint": {
    "ru": "Последние цифры степеней тройки повторяются с периодом $4$.",
    "en": "The last digits of the powers of three repeat with period $4$."
   },
   "sol": {
    "ru": "Выпишем последние цифры: $$3^{1}\\to3,\\quad 3^{2}\\to9,\\quad 3^{3}\\to7,\\quad 3^{4}\\to1,\\quad 3^{5}\\to3,\\ \\dots$$ — период равен $4$, потому что $3^{4}=81\\equiv1\\pmod{10}$.\n\nЗначит $$3^{100}=\\left(3^{4}\\right)^{25}\\equiv1^{25}=1\\pmod{10} .$$\n\n**Ответ:** $1$.",
    "en": "List the last digits: $$3^{1}\\to3,\\quad 3^{2}\\to9,\\quad 3^{3}\\to7,\\quad 3^{4}\\to1,\\quad 3^{5}\\to3,\\ \\dots$$ — the period is $4$, because $3^{4}=81\\equiv1\\pmod{10}$.\n\nHence $$3^{100}=\\left(3^{4}\\right)^{25}\\equiv1^{25}=1\\pmod{10} .$$\n\n**Answer:** $1$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Найдите остаток от деления $3^{2024}$ на $8$.",
    "en": "Find the remainder of $3^{2024}$ on division by $8$."
   },
   "hint": {
    "ru": "$3^{2}=9\\equiv1\\pmod 8$.",
    "en": "$3^{2}=9\\equiv1\\pmod 8$."
   },
   "sol": {
    "ru": "Заметим, что $$3^{2}=9=8+1\\equiv1\\pmod 8 .$$\n\nПоказатель $2024$ чётный, поэтому $$3^{2024}=\\left(3^{2}\\right)^{1012}\\equiv1^{1012}=1\\pmod 8 .$$\n\n**Проверка:** $3^{4}=81=8\\cdot10+1$ ✓\n\n**Ответ:** $1$.",
    "en": "Note that $$3^{2}=9=8+1\\equiv1\\pmod 8 .$$\n\nThe exponent $2024$ is even, so $$3^{2024}=\\left(3^{2}\\right)^{1012}\\equiv1^{1012}=1\\pmod 8 .$$\n\n**Check:** $3^{4}=81=8\\cdot10+1$ ✓\n\n**Answer:** $1$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что $10^{n}\\equiv1\\pmod 9$ при любом $n\\ge0$, и выведите отсюда признак делимости на $9$.",
    "en": "Prove that $10^{n}\\equiv1\\pmod 9$ for every $n\\ge0$, and deduce the digit-sum test for divisibility by $9$."
   },
   "hint": {
    "ru": "$10=9+1$.",
    "en": "$10=9+1$."
   },
   "sol": {
    "ru": "Так как $10=9+1\\equiv1\\pmod 9$, возведение в степень даёт $$10^{n}\\equiv1^{n}=1\\pmod 9 .$$\n\nТеперь пусть число записано цифрами $a_k\\ldots a_1a_0$, то есть $$N=a_k10^{k}+\\dots+a_110+a_0 .$$ Заменяя каждую степень десятки на единицу, получаем $$N\\equiv a_k+\\dots+a_1+a_0\\pmod 9 .$$\n\nЗначит $N$ и сумма его цифр дают **одинаковые остатки** при делении на $9$; в частности $$9\\mid N\\quad\\Longleftrightarrow\\quad 9\\mid a_k+\\dots+a_0 . \\qquad\\blacksquare$$\n\n**Пример.** $N=8127$: сумма цифр $18$ делится на $9$, значит и $8127=9\\cdot903$ делится ✓",
    "en": "Since $10=9+1\\equiv1\\pmod 9$, raising to a power gives $$10^{n}\\equiv1^{n}=1\\pmod 9 .$$\n\nNow let a number have digits $a_k\\ldots a_1a_0$, i.e. $$N=a_k10^{k}+\\dots+a_110+a_0 .$$ Replacing every power of ten by one, $$N\\equiv a_k+\\dots+a_1+a_0\\pmod 9 .$$\n\nSo $N$ and its digit sum leave the **same remainder** on division by $9$; in particular $$9\\mid N\\quad\\Longleftrightarrow\\quad 9\\mid a_k+\\dots+a_0 . \\qquad\\blacksquare$$\n\n**Example.** $N=8127$: the digit sum $18$ is a multiple of $9$, and indeed $8127=9\\cdot903$ ✓"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Найдите остаток от деления $100!$ на $7$.",
    "en": "Find the remainder of $100!$ on division by $7$."
   },
   "hint": {
    "ru": "Посмотрите, входит ли семёрка в произведение.",
    "en": "Ask whether $7$ appears among the factors."
   },
   "sol": {
    "ru": "По определению $$100!=1\\cdot2\\cdot3\\cdots7\\cdots100 ,$$ и множитель $7$ здесь присутствует.\n\nЗначит $7\\mid100!$, то есть остаток равен нулю.\n\n**Замечание.** Точно так же $n!$ делится на любое простое $p\\le n$; более того, показатель семёрки в $100!$ равен $$\\left\\lfloor\\frac{100}{7}\\right\\rfloor+\\left\\lfloor\\frac{100}{49}\\right\\rfloor=14+2=16 .$$\n\n**Ответ:** $0$.",
    "en": "By definition $$100!=1\\cdot2\\cdot3\\cdots7\\cdots100 ,$$ and the factor $7$ is present.\n\nSo $7\\mid100!$, i.e. the remainder is zero.\n\n**Remark.** In the same way $n!$ is divisible by every prime $p\\le n$; in fact the exponent of $7$ in $100!$ is $$\\left\\lfloor\\frac{100}{7}\\right\\rfloor+\\left\\lfloor\\frac{100}{49}\\right\\rfloor=14+2=16 .$$\n\n**Answer:** $0$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $9\\mid4^{n}+15n-1$ при любом целом $n\\ge0$.",
    "en": "Prove that $9\\mid4^{n}+15n-1$ for every integer $n\\ge0$."
   },
   "hint": {
    "ru": "Индукция: посмотрите на разность соседних значений.",
    "en": "Induct: look at the difference of consecutive values."
   },
   "sol": {
    "ru": "Обозначим $A_n=4^{n}+15n-1$.\n\n**База.** $A_0=1+0-1=0$ делится на $9$ ✓\n\n**Переход.** Вычтем: $$A_{n+1}-A_n=4^{n+1}-4^{n}+15=3\\cdot4^{n}+15=3\\left(4^{n}+5\\right).$$\n\nОсталось проверить, что $3\\mid4^{n}+5$. Действительно, $4\\equiv1\\pmod 3$, поэтому $$4^{n}+5\\equiv1+5=6\\equiv0\\pmod 3 .$$\n\nЗначит $A_{n+1}-A_n$ делится на $3\\cdot3=9$. Если $9\\mid A_n$, то и $9\\mid A_{n+1}$.\n\nПо индукции $9\\mid A_n$ при всех $n\\ge0$. $\\blacksquare$\n\n**Проверка:** $A_1=4+15-1=18=9\\cdot2$ ✓ $A_2=16+30-1=45=9\\cdot5$ ✓",
    "en": "Write $A_n=4^{n}+15n-1$.\n\n**Base.** $A_0=1+0-1=0$ is divisible by $9$ ✓\n\n**Step.** Subtract: $$A_{n+1}-A_n=4^{n+1}-4^{n}+15=3\\cdot4^{n}+15=3\\left(4^{n}+5\\right).$$\n\nIt remains to check $3\\mid4^{n}+5$. Indeed $4\\equiv1\\pmod 3$, so $$4^{n}+5\\equiv1+5=6\\equiv0\\pmod 3 .$$\n\nHence $A_{n+1}-A_n$ is divisible by $3\\cdot3=9$. So $9\\mid A_n$ implies $9\\mid A_{n+1}$.\n\nBy induction $9\\mid A_n$ for all $n\\ge0$. $\\blacksquare$\n\n**Check:** $A_1=4+15-1=18=9\\cdot2$ ✓ $A_2=16+30-1=45=9\\cdot5$ ✓"
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите две последние цифры числа $3^{100}$.",
    "en": "Find the last two digits of $3^{100}$."
   },
   "hint": {
    "ru": "Посчитайте $3^{10}$, затем $3^{20}$ по модулю $100$.",
    "en": "Compute $3^{10}$, then $3^{20}$, modulo $100$."
   },
   "sol": {
    "ru": "Две последние цифры — это остаток по модулю $100$. Будем возводить в квадрат.\n\n$$3^{5}=243\\equiv43\\pmod{100};$$\n\n$$3^{10}\\equiv43^{2}=1849\\equiv49\\pmod{100};$$\n\n$$3^{20}\\equiv49^{2}=2401\\equiv1\\pmod{100} .$$\n\nПолучили $3^{20}\\equiv1$, поэтому $$3^{100}=\\left(3^{20}\\right)^{5}\\equiv1^{5}=1\\pmod{100} .$$\n\n**Ответ:** $01$, то есть число оканчивается на $\\ldots01$.",
    "en": "The last two digits are the remainder modulo $100$. Square step by step.\n\n$$3^{5}=243\\equiv43\\pmod{100};$$\n\n$$3^{10}\\equiv43^{2}=1849\\equiv49\\pmod{100};$$\n\n$$3^{20}\\equiv49^{2}=2401\\equiv1\\pmod{100} .$$\n\nSince $3^{20}\\equiv1$, $$3^{100}=\\left(3^{20}\\right)^{5}\\equiv1^{5}=1\\pmod{100} .$$\n\n**Answer:** $01$ — the number ends in $\\ldots01$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $11\\mid10^{n}-(-1)^{n}$, и выведите признак делимости на $11$ по знакопеременной сумме цифр.",
    "en": "Prove that $11\\mid10^{n}-(-1)^{n}$, and deduce the alternating-digit-sum test for divisibility by $11$."
   },
   "hint": {
    "ru": "$10\\equiv-1\\pmod{11}$.",
    "en": "$10\\equiv-1\\pmod{11}$."
   },
   "sol": {
    "ru": "Так как $10=11-1\\equiv-1\\pmod{11}$, возведение в степень даёт $$10^{n}\\equiv(-1)^{n}\\pmod{11},$$ то есть $11\\mid10^{n}-(-1)^{n}$ ✓\n\nТеперь пусть $$N=a_k10^{k}+\\dots+a_110+a_0 .$$ Заменяя $10^{j}$ на $(-1)^{j}$, получаем $$N\\equiv a_0-a_1+a_2-a_3+\\dots\\pmod{11} .$$\n\nЗначит $N$ делится на $11$ тогда и только тогда, когда знакопеременная сумма цифр делится на $11$. $\\blacksquare$\n\n**Пример.** $N=918082$: $$2-8+0-8+1-9=-22 ,$$ и $11\\mid-22$, значит $11\\mid918082$ ✓ (действительно $918082=11\\cdot83462$).",
    "en": "Since $10=11-1\\equiv-1\\pmod{11}$, raising to a power gives $$10^{n}\\equiv(-1)^{n}\\pmod{11},$$ i.e. $11\\mid10^{n}-(-1)^{n}$ ✓\n\nNow let $$N=a_k10^{k}+\\dots+a_110+a_0 .$$ Replacing $10^{j}$ by $(-1)^{j}$, $$N\\equiv a_0-a_1+a_2-a_3+\\dots\\pmod{11} .$$\n\nSo $N$ is divisible by $11$ exactly when the alternating digit sum is. $\\blacksquare$\n\n**Example.** $N=918082$: $$2-8+0-8+1-9=-22 ,$$ and $11\\mid-22$, so $11\\mid918082$ ✓ (indeed $918082=11\\cdot83462$)."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите все натуральные $n$, для которых $3\\mid2^{n}+1$.",
    "en": "Find all positive integers $n$ for which $3\\mid2^{n}+1$."
   },
   "hint": {
    "ru": "$2\\equiv-1\\pmod 3$.",
    "en": "$2\\equiv-1\\pmod 3$."
   },
   "sol": {
    "ru": "Так как $2\\equiv-1\\pmod 3$, имеем $$2^{n}+1\\equiv(-1)^{n}+1\\pmod 3 .$$\n\n**Если $n$ чётно:** $(-1)^{n}+1=2\\not\\equiv0$ ✗\n\n**Если $n$ нечётно:** $(-1)^{n}+1=0$ ✓\n\n**Проверка:** $2^{1}+1=3$ ✓, $2^{2}+1=5$ ✗, $2^{3}+1=9$ ✓\n\n**Ответ:** ровно нечётные $n$.",
    "en": "Since $2\\equiv-1\\pmod 3$, $$2^{n}+1\\equiv(-1)^{n}+1\\pmod 3 .$$\n\n**If $n$ is even:** $(-1)^{n}+1=2\\not\\equiv0$ ✗\n\n**If $n$ is odd:** $(-1)^{n}+1=0$ ✓\n\n**Check:** $2^{1}+1=3$ ✓, $2^{2}+1=5$ ✗, $2^{3}+1=9$ ✓\n\n**Answer:** exactly the odd $n$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что квадрат целого числа даёт по модулю $4$ остаток $0$ или $1$, и выведите отсюда, что $2023$ не представимо в виде суммы двух квадратов.",
    "en": "Prove that a perfect square leaves remainder $0$ or $1$ modulo $4$, and deduce that $2023$ is not a sum of two squares."
   },
   "hint": {
    "ru": "Разберите чётное и нечётное основание.",
    "en": "Treat an even and an odd base separately."
   },
   "sol": {
    "ru": "**Шаг 1.** Если $n=2k$, то $n^{2}=4k^{2}\\equiv0\\pmod 4$. Если $n=2k+1$, то $$n^{2}=4k^{2}+4k+1=4k(k+1)+1\\equiv1\\pmod 4 .$$ Значит квадрат сравним с $0$ или с $1$ ✓\n\n**Шаг 2.** Сумма двух квадратов может быть сравнима только с $$0+0=0,\\qquad 0+1=1,\\qquad 1+1=2 \\pmod 4,$$ то есть **никогда не даёт остаток $3$**.\n\n**Шаг 3.** Но $$2023=4\\cdot505+3\\equiv3\\pmod 4 .$$\n\nЗначит $2023$ не является суммой двух квадратов. $\\blacksquare$",
    "en": "**Step 1.** If $n=2k$ then $n^{2}=4k^{2}\\equiv0\\pmod 4$. If $n=2k+1$ then $$n^{2}=4k^{2}+4k+1=4k(k+1)+1\\equiv1\\pmod 4 .$$ So a square is congruent to $0$ or $1$ ✓\n\n**Step 2.** A sum of two squares can therefore only be congruent to $$0+0=0,\\qquad 0+1=1,\\qquad 1+1=2 \\pmod 4,$$ i.e. it **never leaves remainder $3$**.\n\n**Step 3.** But $$2023=4\\cdot505+3\\equiv3\\pmod 4 .$$\n\nHence $2023$ is not a sum of two squares. $\\blacksquare$"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите остаток от деления $2^{1000}$ на $7$.",
    "en": "Find the remainder of $2^{1000}$ on division by $7$."
   },
   "hint": {
    "ru": "$2^{3}=8\\equiv1\\pmod 7$.",
    "en": "$2^{3}=8\\equiv1\\pmod 7$."
   },
   "sol": {
    "ru": "Ключ: $$2^{3}=8=7+1\\equiv1\\pmod 7 .$$\n\nПоделим показатель на $3$ с остатком: $$1000=3\\cdot333+1 .$$\n\nТогда $$2^{1000}=\\left(2^{3}\\right)^{333}\\cdot2^{1}\\equiv1^{333}\\cdot2=2\\pmod 7 .$$\n\n**Проверка** на маленьком показателе того же вида: $2^{4}=16=7\\cdot2+2$ ✓\n\n**Ответ:** $2$.",
    "en": "The key: $$2^{3}=8=7+1\\equiv1\\pmod 7 .$$\n\nDivide the exponent by $3$ with remainder: $$1000=3\\cdot333+1 .$$\n\nThen $$2^{1000}=\\left(2^{3}\\right)^{333}\\cdot2^{1}\\equiv1^{333}\\cdot2=2\\pmod 7 .$$\n\n**Check** on a small exponent of the same shape: $2^{4}=16=7\\cdot2+2$ ✓\n\n**Answer:** $2$."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите все целые $n$, для которых $9\\mid n^{2}+n+1$.",
    "en": "Find all integers $n$ for which $9\\mid n^{2}+n+1$."
   },
   "hint": {
    "ru": "Достаточно перебрать девять остатков.",
    "en": "Nine residues are enough to check."
   },
   "sol": {
    "ru": "Остаток $n^{2}+n+1$ по модулю $9$ зависит только от остатка $n$; переберём все девять.\n\n$n\\equiv0$: $1$; $\\ n\\equiv1$: $3$; $\\ n\\equiv2$: $7$;\n\n$n\\equiv3$: $13\\equiv4$; $\\ n\\equiv4$: $21\\equiv3$; $\\ n\\equiv5$: $31\\equiv4$;\n\n$n\\equiv6$: $43\\equiv7$; $\\ n\\equiv7$: $57\\equiv3$; $\\ n\\equiv8$: $73\\equiv1$.\n\nПолучились остатки $$1,\\;3,\\;7,\\;4,\\;3,\\;4,\\;7,\\;3,\\;1 ,$$ и нуля среди них нет.\n\n**Ответ:** таких $n$ не существует.\n\n**Замечание.** Заметьте: остаток $3$ встречается, то есть на $3$ число делиться может (например, при $n=1$ получаем $3$), а вот на $9$ — никогда.",
    "en": "The residue of $n^{2}+n+1$ modulo $9$ depends only on that of $n$, so check all nine.\n\n$n\\equiv0$: $1$; $\\ n\\equiv1$: $3$; $\\ n\\equiv2$: $7$;\n\n$n\\equiv3$: $13\\equiv4$; $\\ n\\equiv4$: $21\\equiv3$; $\\ n\\equiv5$: $31\\equiv4$;\n\n$n\\equiv6$: $43\\equiv7$; $\\ n\\equiv7$: $57\\equiv3$; $\\ n\\equiv8$: $73\\equiv1$.\n\nThe residues are $$1,\\;3,\\;7,\\;4,\\;3,\\;4,\\;7,\\;3,\\;1 ,$$ and $0$ never occurs.\n\n**Answer:** there is no such $n$.\n\n**Remark.** Note the residue $3$ does occur, so the number can be divisible by $3$ (at $n=1$ it equals $3$) — but never by $9$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что $n^{2}+1$ ни при каком целом $n$ не делится на $7$.",
    "en": "Prove that $n^{2}+1$ is never divisible by $7$, for any integer $n$."
   },
   "hint": {
    "ru": "Выпишите все квадратичные вычеты по модулю $7$.",
    "en": "List all quadratic residues modulo $7$."
   },
   "sol": {
    "ru": "Квадраты по модулю $7$ принимают лишь такие значения: $$0^{2}=0,\\ \\ (\\pm1)^{2}=1,\\ \\ (\\pm2)^{2}=4,\\ \\ (\\pm3)^{2}=9\\equiv2 ,$$ то есть $$n^{2}\\in\\{0,1,2,4\\}\\pmod 7 .$$\n\nПрибавив единицу, получаем $$n^{2}+1\\in\\{1,2,3,5\\}\\pmod 7 ,$$ и нуля здесь нет. Значит $7\\nmid n^{2}+1$ ни при каком $n$. $\\blacksquare$\n\n**Замечание.** Это частный случай общего факта: нечётное простое $p$ делит $n^{2}+1$ только при $p\\equiv1\\pmod4$, а $7\\equiv3\\pmod4$.",
    "en": "Modulo $7$ the squares take only these values: $$0^{2}=0,\\ \\ (\\pm1)^{2}=1,\\ \\ (\\pm2)^{2}=4,\\ \\ (\\pm3)^{2}=9\\equiv2 ,$$ that is $$n^{2}\\in\\{0,1,2,4\\}\\pmod 7 .$$\n\nAdding one, $$n^{2}+1\\in\\{1,2,3,5\\}\\pmod 7 ,$$ which never contains $0$. Hence $7\\nmid n^{2}+1$ for any $n$. $\\blacksquare$\n\n**Remark.** This is a special case of a general fact: an odd prime $p$ divides some $n^{2}+1$ only when $p\\equiv1\\pmod4$, and $7\\equiv3\\pmod4$."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите остаток от деления суммы $1!+2!+3!+\\dots+2025!$ на $15$.",
    "en": "Find the remainder of $1!+2!+3!+\\dots+2025!$ on division by $15$."
   },
   "hint": {
    "ru": "Начиная с некоторого места факториалы делятся на $15$.",
    "en": "From some point on the factorials are multiples of $15$."
   },
   "sol": {
    "ru": "Заметим, что $$5!=120=15\\cdot8 ,$$ поэтому $15\\mid5!$, а значит $15\\mid n!$ при всех $n\\ge5$ (ведь $n!$ содержит $5!$ множителем).\n\nЗначит вся «хвостовая» часть суммы даёт нулевой остаток, и остаётся сложить лишь первые четыре слагаемых: $$1!+2!+3!+4!=1+2+6+24=33 .$$\n\nНаконец $$33=15\\cdot2+3 .$$\n\n**Ответ:** $3$.",
    "en": "Note that $$5!=120=15\\cdot8 ,$$ so $15\\mid5!$, hence $15\\mid n!$ for every $n\\ge5$ (as $n!$ contains $5!$ as a factor).\n\nThe whole tail therefore contributes nothing, and only the first four terms remain: $$1!+2!+3!+4!=1+2+6+24=33 .$$\n\nFinally $$33=15\\cdot2+3 .$$\n\n**Answer:** $3$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что число делится на $8$ тогда и только тогда, когда на $8$ делится число, составленное из трёх его последних цифр.",
    "en": "Prove that a number is divisible by $8$ if and only if the number formed by its last three digits is."
   },
   "hint": {
    "ru": "$1000=8\\cdot125$.",
    "en": "$1000=8\\cdot125$."
   },
   "sol": {
    "ru": "Запишем число как $$N=1000\\,q+r ,$$ где $r$ — трёхзначный «хвост» (число, образованное последними тремя цифрами, $0\\le r<1000$), а $q$ — всё остальное.\n\nТак как $$1000=8\\cdot125 ,$$ первое слагаемое всегда делится на $8$, то есть $$N\\equiv r\\pmod 8 .$$\n\nЗначит $8\\mid N$ равносильно $8\\mid r$. $\\blacksquare$\n\n**Пример.** $N=17\\,584$: хвост $584=8\\cdot73$ делится на $8$, значит и $17\\,584$ делится ✓\n\n**Замечание.** Точно так же признак делимости на $4$ читает две последние цифры ($100=4\\cdot25$), а на $16$ — четыре последние ($10000=16\\cdot625$).",
    "en": "Write the number as $$N=1000\\,q+r ,$$ where $r$ is the three-digit tail (the number formed by the last three digits, $0\\le r<1000$) and $q$ is everything else.\n\nSince $$1000=8\\cdot125 ,$$ the first term is always a multiple of $8$, so $$N\\equiv r\\pmod 8 .$$\n\nHence $8\\mid N$ is equivalent to $8\\mid r$. $\\blacksquare$\n\n**Example.** $N=17\\,584$: the tail $584=8\\cdot73$ is divisible by $8$, so $17\\,584$ is too ✓\n\n**Remark.** In the same way the test for $4$ reads the last two digits ($100=4\\cdot25$), and the test for $16$ the last four ($10000=16\\cdot625$)."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Найдите наименьшее натуральное $n$, дающее остаток $2$ при делении на $3$, остаток $3$ при делении на $5$ и остаток $2$ при делении на $7$.",
    "en": "Find the smallest positive integer $n$ leaving remainder $2$ on division by $3$, remainder $3$ on division by $5$, and remainder $2$ on division by $7$."
   },
   "hint": {
    "ru": "Первое и третье условия объединяются в одно по модулю $21$.",
    "en": "The first and third conditions merge into one modulo $21$."
   },
   "sol": {
    "ru": "**Шаг 1.** Условия $n\\equiv2\\pmod 3$ и $n\\equiv2\\pmod 7$ означают, что $n-2$ делится и на $3$, и на $7$, а значит на $21$: $$n\\equiv2\\pmod{21} .$$\n\n**Шаг 2.** Ищем $n$ среди чисел $$2,\\;23,\\;44,\\;65,\\;86,\\;107,\\ \\dots$$ и требуем $n\\equiv3\\pmod 5$.\n\nОстатки по модулю $5$: $2,\\ 3,\\ 4,\\ 0,\\ 1,\\ 2,\\dots$ — подходит второе число, $$n=23 .$$\n\n**Проверка:** $23=3\\cdot7+2$ ✓, $23=5\\cdot4+3$ ✓, $23=7\\cdot3+2$ ✓\n\n**Ответ:** $n=23$ (а все решения — это $n\\equiv23\\pmod{105}$).",
    "en": "**Step 1.** The conditions $n\\equiv2\\pmod 3$ and $n\\equiv2\\pmod 7$ say that $n-2$ is divisible by both $3$ and $7$, hence by $21$: $$n\\equiv2\\pmod{21} .$$\n\n**Step 2.** Look among $$2,\\;23,\\;44,\\;65,\\;86,\\;107,\\ \\dots$$ for one with $n\\equiv3\\pmod 5$.\n\nTheir residues mod $5$ are $2,\\ 3,\\ 4,\\ 0,\\ 1,\\ 2,\\dots$ — the second one works: $$n=23 .$$\n\n**Check:** $23=3\\cdot7+2$ ✓, $23=5\\cdot4+3$ ✓, $23=7\\cdot3+2$ ✓\n\n**Answer:** $n=23$ (and all solutions are $n\\equiv23\\pmod{105}$)."
   }
  },
  {
   "src": "Республиканский тур · уровень / Republic-round level",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что $23\\mid5^{2n+1}+2^{n+4}+2^{n+1}$ при любом целом $n\\ge0$.",
    "en": "Prove that $23\\mid5^{2n+1}+2^{n+4}+2^{n+1}$ for every integer $n\\ge0$."
   },
   "hint": {
    "ru": "Вынесите $2^{n}$ из двух последних слагаемых и заметьте, что $25\\equiv2\\pmod{23}$.",
    "en": "Factor $2^{n}$ out of the last two terms and note $25\\equiv2\\pmod{23}$."
   },
   "sol": {
    "ru": "Преобразуем выражение. Первое слагаемое: $$5^{2n+1}=5\\cdot\\left(5^{2}\\right)^{n}=5\\cdot25^{n} .$$ Два последних: $$2^{n+4}+2^{n+1}=2^{n}\\left(2^{4}+2\\right)=18\\cdot2^{n} .$$\n\nЗначит $$5^{2n+1}+2^{n+4}+2^{n+1}=5\\cdot25^{n}+18\\cdot2^{n} .$$\n\nТеперь работаем по модулю $23$. Так как $25=23+2\\equiv2$, получаем $25^{n}\\equiv2^{n}$, поэтому $$5\\cdot25^{n}+18\\cdot2^{n}\\equiv5\\cdot2^{n}+18\\cdot2^{n}=23\\cdot2^{n}\\equiv0\\pmod{23} . \\qquad\\blacksquare$$\n\n**Проверка** при $n=0$: $5+16+2=23$ ✓ При $n=1$: $125+32+4=161=23\\cdot7$ ✓",
    "en": "Rewrite the expression. The first term: $$5^{2n+1}=5\\cdot\\left(5^{2}\\right)^{n}=5\\cdot25^{n} .$$ The last two: $$2^{n+4}+2^{n+1}=2^{n}\\left(2^{4}+2\\right)=18\\cdot2^{n} .$$\n\nSo $$5^{2n+1}+2^{n+4}+2^{n+1}=5\\cdot25^{n}+18\\cdot2^{n} .$$\n\nNow work modulo $23$. Since $25=23+2\\equiv2$, we get $25^{n}\\equiv2^{n}$, hence $$5\\cdot25^{n}+18\\cdot2^{n}\\equiv5\\cdot2^{n}+18\\cdot2^{n}=23\\cdot2^{n}\\equiv0\\pmod{23} . \\qquad\\blacksquare$$\n\n**Check** at $n=0$: $5+16+2=23$ ✓ At $n=1$: $125+32+4=161=23\\cdot7$ ✓"
   }
  },
  {
   "src": "Международный уровень / International level",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что $n^{2}+3n+5$ ни при каком целом $n$ не делится на $121$.",
    "en": "Prove that $n^{2}+3n+5$ is never divisible by $121$, for any integer $n$."
   },
   "hint": {
    "ru": "Умножьте на $4$ и выделите полный квадрат: $4\\left(n^{2}+3n+5\\right)=(2n+3)^{2}+11$.",
    "en": "Multiply by $4$ and complete the square: $4\\left(n^{2}+3n+5\\right)=(2n+3)^{2}+11$."
   },
   "sol": {
    "ru": "Умножение на $4$ ничего не портит, потому что $\\gcd(4,121)=1$. Выделим полный квадрат: $$4\\left(n^{2}+3n+5\\right)=4n^{2}+12n+20=(2n+3)^{2}+11 .$$\n\n**Шаг 1.** Пусть $121\\mid n^{2}+3n+5$. Тогда тем более $11\\mid(2n+3)^{2}+11$, откуда $$11\\mid(2n+3)^{2} .$$ Так как $11$ простое, по лемме Евклида $11\\mid2n+3$, то есть $$2n+3=11k$$ для некоторого целого $k$.\n\n**Шаг 2.** Подставим: $$4\\left(n^{2}+3n+5\\right)=(11k)^{2}+11=121k^{2}+11 .$$\n\nПо предположению левая часть делится на $121$, и $121k^{2}$ тоже, значит $$121\\mid11 ,$$ что неверно ✗\n\nПротиворечие. $\\blacksquare$\n\n**Замечание.** На $11$ выражение делиться может: при $n=4$ получаем $16+12+5=33=11\\cdot3$ — но не на $121$.",
    "en": "Multiplying by $4$ loses nothing, since $\\gcd(4,121)=1$. Complete the square: $$4\\left(n^{2}+3n+5\\right)=4n^{2}+12n+20=(2n+3)^{2}+11 .$$\n\n**Step 1.** Suppose $121\\mid n^{2}+3n+5$. Then in particular $11\\mid(2n+3)^{2}+11$, so $$11\\mid(2n+3)^{2} .$$ As $11$ is prime, Euclid’s lemma gives $11\\mid2n+3$, i.e. $$2n+3=11k$$ for some integer $k$.\n\n**Step 2.** Substitute: $$4\\left(n^{2}+3n+5\\right)=(11k)^{2}+11=121k^{2}+11 .$$\n\nBy assumption the left side is divisible by $121$, and so is $121k^{2}$, hence $$121\\mid11 ,$$ which is false ✗\n\nContradiction. $\\blacksquare$\n\n**Remark.** Divisibility by $11$ does happen: at $n=4$ the value is $16+12+5=33=11\\cdot3$ — but never by $121$."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Найдите остаток от деления $3^{100}$ на $101$.",
    "en": "Find the remainder of $3^{100}$ on division by $101$."
   },
   "hint": {
    "ru": "$101$ — простое; примените малую теорему Ферма.",
    "en": "$101$ is prime; use Fermat's little theorem."
   },
   "sol": {
    "ru": "Число $101$ простое: оно не делится на $2,3,5,7$, а $11^{2}=121>101$.\n\nОснование $3$ не делится на $101$, поэтому применима малая теорема Ферма: $$a^{p-1}\\equiv1\\pmod p\\quad\\text{при}\\quad p\\nmid a .$$\n\nЗдесь $p=101$, значит $p-1=100$ и $$3^{100}\\equiv1\\pmod{101} .$$\n\n**Ответ:** $1$.\n\n**Замечание.** Прямое возведение в степень тут было бы утомительным — теорема Ферма заменяет его одной строкой.",
    "en": "The number $101$ is prime: it is divisible by none of $2,3,5,7$, and $11^{2}=121>101$.\n\nThe base $3$ is not divisible by $101$, so Fermat’s little theorem applies: $$a^{p-1}\\equiv1\\pmod p\\quad\\text{whenever}\\quad p\\nmid a .$$\n\nHere $p=101$, so $p-1=100$ and $$3^{100}\\equiv1\\pmod{101} .$$\n\n**Answer:** $1$.\n\n**Remark.** Direct exponentiation would be tedious — Fermat’s theorem replaces it by a single line."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что $42\\mid n^{7}-n$ при любом целом $n$.",
    "en": "Prove that $42\\mid n^{7}-n$ for every integer $n$."
   },
   "hint": {
    "ru": "$42=2\\cdot3\\cdot7$; для каждого простого примените малую теорему Ферма.",
    "en": "$42=2\\cdot3\\cdot7$; apply Fermat's little theorem for each prime."
   },
   "sol": {
    "ru": "Разложим модуль: $$42=2\\cdot3\\cdot7 ,$$ и множители попарно взаимно просты, поэтому достаточно доказать делимость на каждый из них.\n\n**Делимость на $7$.** По малой теореме Ферма $n^{7}\\equiv n\\pmod 7$ при любом $n$ (при $7\\mid n$ обе части нули, иначе $n^{6}\\equiv1$ и умножаем на $n$). Значит $7\\mid n^{7}-n$ ✓\n\n**Делимость на $3$.** По той же теореме $n^{3}\\equiv n\\pmod 3$. Тогда $$n^{7}=\\left(n^{3}\\right)^{2}\\cdot n\\equiv n^{2}\\cdot n=n^{3}\\equiv n\\pmod 3 \\quad\\checkmark$$\n\n**Делимость на $2$.** Числа $n$ и $n^{7}$ имеют одинаковую чётность, значит их разность чётна ✓\n\nИтак, $n^{7}-n$ делится на $2$, $3$ и $7$, а потому и на их произведение $42$. $\\blacksquare$\n\n**Проверка** при $n=2$: $2^{7}-2=126=42\\cdot3$ ✓",
    "en": "Factor the modulus: $$42=2\\cdot3\\cdot7 ,$$ with pairwise coprime factors, so it suffices to prove divisibility by each.\n\n**By $7$.** Fermat’s little theorem gives $n^{7}\\equiv n\\pmod 7$ for every $n$ (if $7\\mid n$ both sides vanish; otherwise $n^{6}\\equiv1$ and multiply by $n$). So $7\\mid n^{7}-n$ ✓\n\n**By $3$.** The same theorem gives $n^{3}\\equiv n\\pmod 3$, hence $$n^{7}=\\left(n^{3}\\right)^{2}\\cdot n\\equiv n^{2}\\cdot n=n^{3}\\equiv n\\pmod 3 \\quad\\checkmark$$\n\n**By $2$.** The numbers $n$ and $n^{7}$ have the same parity, so their difference is even ✓\n\nThus $n^{7}-n$ is divisible by $2$, $3$ and $7$, hence by their product $42$. $\\blacksquare$\n\n**Check** at $n=2$: $2^{7}-2=126=42\\cdot3$ ✓"
   }
  },
  {
   "src": "Республиканский тур · уровень / Republic-round level",
   "lvl": 3,
   "q": {
    "ru": "Найдите две последние цифры числа $2^{2024}$.",
    "en": "Find the last two digits of $2^{2024}$."
   },
   "hint": {
    "ru": "Считайте отдельно по модулю $4$ и по модулю $25$, затем соберите ответ.",
    "en": "Work modulo $4$ and modulo $25$ separately, then combine."
   },
   "sol": {
    "ru": "Нужен остаток по модулю $100=4\\cdot25$; посчитаем его отдельно по каждому множителю.\n\n**По модулю $4$.** Показатель большой, поэтому $$2^{2024}\\equiv0\\pmod 4 .$$\n\n**По модулю $25$.** Числа $2$ и $25$ взаимно просты, и $$2^{10}=1024=25\\cdot41-1\\equiv-1\\pmod{25}\\ \\Longrightarrow\\ 2^{20}\\equiv1\\pmod{25} .$$ Так как $2024=20\\cdot101+4$, получаем $$2^{2024}\\equiv2^{4}=16\\pmod{25} .$$\n\n**Сборка.** Ищем $x$ с $x\\equiv0\\pmod 4$ и $x\\equiv16\\pmod{25}$. Числа вида $16+25k$: $$16,\\;41,\\;66,\\;91,\\;116,\\dots$$ и первое из них, кратное четырём, — это $16$.\n\nЗначит $2^{2024}\\equiv16\\pmod{100}$.\n\n**Ответ:** $16$.",
    "en": "We need the remainder modulo $100=4\\cdot25$; compute it modulo each factor.\n\n**Modulo $4$.** The exponent is large, so $$2^{2024}\\equiv0\\pmod 4 .$$\n\n**Modulo $25$.** Here $2$ and $25$ are coprime, and $$2^{10}=1024=25\\cdot41-1\\equiv-1\\pmod{25}\\ \\Longrightarrow\\ 2^{20}\\equiv1\\pmod{25} .$$ Since $2024=20\\cdot101+4$, $$2^{2024}\\equiv2^{4}=16\\pmod{25} .$$\n\n**Combining.** We want $x$ with $x\\equiv0\\pmod 4$ and $x\\equiv16\\pmod{25}$. The numbers $16+25k$ are $$16,\\;41,\\;66,\\;91,\\;116,\\dots$$ and the first multiple of four among them is $16$.\n\nHence $2^{2024}\\equiv16\\pmod{100}$.\n\n**Answer:** $16$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Решите сравнение $8x\\equiv12\\pmod{20}$ — найдите все целые $x$.",
    "en": "Solve the congruence $8x\\equiv12\\pmod{20}$ — find all integers $x$."
   },
   "hint": {
    "ru": "Сократите всё сравнение (вместе с модулем) на общий делитель.",
    "en": "Divide the whole congruence, modulus included, by the common divisor."
   },
   "sol": {
    "ru": "Сравнение $8x\\equiv12\\pmod{20}$ означает $$20\\mid 8x-12 .$$\n\nВсе три числа $8$, $12$ и $20$ делятся на $4$; сокращая, получаем **равносильное** сравнение с меньшим модулем: $$2x\\equiv3\\pmod 5 .$$ (Именно так: при сокращении делится и модуль тоже.)\n\nТеперь домножим на обратное к двойке. Так как $2\\cdot3=6\\equiv1\\pmod 5$, обратным служит $3$: $$x\\equiv3\\cdot3=9\\equiv4\\pmod 5 .$$\n\n**Проверка:** $x=4$ даёт $8\\cdot4=32=20+12$ ✓ $x=9$ даёт $72=20\\cdot3+12$ ✓\n\n**Ответ:** $x\\equiv4\\pmod 5$, то есть $x\\in\\{\\dots,-1,4,9,14,19,\\dots\\}$; по модулю $20$ это четыре класса $4,9,14,19$.",
    "en": "The congruence $8x\\equiv12\\pmod{20}$ means $$20\\mid 8x-12 .$$\n\nAll three of $8$, $12$, $20$ are divisible by $4$; cancelling gives an **equivalent** congruence with a smaller modulus: $$2x\\equiv3\\pmod 5 .$$ (Note that the modulus is divided too.)\n\nNow multiply by the inverse of two. Since $2\\cdot3=6\\equiv1\\pmod 5$, the inverse is $3$: $$x\\equiv3\\cdot3=9\\equiv4\\pmod 5 .$$\n\n**Check:** $x=4$ gives $8\\cdot4=32=20+12$ ✓ $x=9$ gives $72=20\\cdot3+12$ ✓\n\n**Answer:** $x\\equiv4\\pmod 5$, i.e. $x\\in\\{\\dots,-1,4,9,14,19,\\dots\\}$; modulo $20$ these are the four classes $4,9,14,19$."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Найдите все простые $p$, для которых $p\\mid2^{p}+1$.",
    "en": "Find all primes $p$ with $p\\mid2^{p}+1$."
   },
   "hint": {
    "ru": "По малой теореме Ферма $2^{p}\\equiv2\\pmod p$.",
    "en": "By Fermat's little theorem $2^{p}\\equiv2\\pmod p$."
   },
   "sol": {
    "ru": "По малой теореме Ферма для любого простого $p$ и любого целого $a$ верно $a^{p}\\equiv a\\pmod p$. В частности $$2^{p}\\equiv2\\pmod p ,$$ поэтому $$2^{p}+1\\equiv3\\pmod p .$$\n\nЗначит условие $p\\mid2^{p}+1$ равносильно $p\\mid3$, то есть $p=3$.\n\n**Проверка:** $2^{3}+1=9=3\\cdot3$ ✓ (а, скажем, $p=5$ даёт $33$, что на $5$ не делится).\n\n**Ответ:** $p=3$.",
    "en": "Fermat’s little theorem gives $a^{p}\\equiv a\\pmod p$ for every prime $p$ and every integer $a$. In particular $$2^{p}\\equiv2\\pmod p ,$$ hence $$2^{p}+1\\equiv3\\pmod p .$$\n\nSo the condition $p\\mid2^{p}+1$ is equivalent to $p\\mid3$, i.e. $p=3$.\n\n**Check:** $2^{3}+1=9=3\\cdot3$ ✓ (whereas $p=5$ gives $33$, not a multiple of $5$).\n\n**Answer:** $p=3$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что десятичная запись дроби $\\dfrac17$ периодична с периодом $6$, и объясните связь длины периода с порядком числа $10$ по модулю $7$.",
    "en": "Prove that the decimal expansion of $\\dfrac17$ is periodic with period $6$, and explain how the period length relates to the order of $10$ modulo $7$."
   },
   "hint": {
    "ru": "Ищите наименьшее $k$ с $10^{k}\\equiv1\\pmod 7$.",
    "en": "Look for the least $k$ with $10^{k}\\equiv1\\pmod 7$."
   },
   "sol": {
    "ru": "**Шаг 1: порядок десятки.** Выпишем степени по модулю $7$ (помня, что $10\\equiv3$): $$10^{1}\\equiv3,\\ \\ 10^{2}\\equiv2,\\ \\ 10^{3}\\equiv6,\\ \\ 10^{4}\\equiv4,\\ \\ 10^{5}\\equiv5,\\ \\ 10^{6}\\equiv1 .$$ Наименьшее $k$ с $10^{k}\\equiv1$ равно $6$ — это и есть **порядок** десятки по модулю $7$.\n\n**Шаг 2: откуда период.** Из $10^{6}\\equiv1\\pmod 7$ следует, что $7$ делит $10^{6}-1=999999$, а именно $$999999=7\\cdot142857 .$$ Поэтому $$\\frac17=\\frac{142857}{999999}=0{,}(142857) ,$$ ведь дробь со знаменателем $\\underbrace{9\\ldots9}_{k}$ — это в точности чисто периодическая дробь с периодом длины $k$.\n\n**Шаг 3: почему не короче.** Если бы период имел длину $k<6$, то по той же причине $7$ делило бы $10^{k}-1$, то есть $10^{k}\\equiv1\\pmod 7$ — а мы проверили, что при $k<6$ это неверно ✗\n\nЗначит длина периода ровно $6$. $\\blacksquare$\n\n**Общий вывод.** Для знаменателя $n$, взаимно простого с $10$, длина периода дроби $\\tfrac1n$ равна порядку числа $10$ по модулю $n$.",
    "en": "**Step 1: the order of ten.** List the powers modulo $7$ (recall $10\\equiv3$): $$10^{1}\\equiv3,\\ \\ 10^{2}\\equiv2,\\ \\ 10^{3}\\equiv6,\\ \\ 10^{4}\\equiv4,\\ \\ 10^{5}\\equiv5,\\ \\ 10^{6}\\equiv1 .$$ The least $k$ with $10^{k}\\equiv1$ is $6$ — this is the **order** of ten modulo $7$.\n\n**Step 2: where the period comes from.** From $10^{6}\\equiv1\\pmod 7$ we get that $7$ divides $10^{6}-1=999999$, namely $$999999=7\\cdot142857 .$$ Hence $$\\frac17=\\frac{142857}{999999}=0.\\overline{142857} ,$$ because a fraction with denominator $\\underbrace{9\\ldots9}_{k}$ is exactly a purely periodic decimal of period length $k$.\n\n**Step 3: why not shorter.** If the period had length $k<6$, then by the same reasoning $7$ would divide $10^{k}-1$, i.e. $10^{k}\\equiv1\\pmod 7$ — and we checked this fails for $k<6$ ✗\n\nSo the period is exactly $6$. $\\blacksquare$\n\n**General moral.** For a denominator $n$ coprime to $10$, the period length of $\\tfrac1n$ equals the order of $10$ modulo $n$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите китайскую теорему об остатках для двух взаимно простых модулей: если $\\gcd(m,n)=1$, то система $x\\equiv a\\pmod m$, $x\\equiv b\\pmod n$ имеет решение, единственное по модулю $mn$.",
    "en": "Prove the Chinese remainder theorem for two coprime moduli: if $\\gcd(m,n)=1$, the system $x\\equiv a\\pmod m$, $x\\equiv b\\pmod n$ has a solution, unique modulo $mn$."
   },
   "hint": {
    "ru": "Возьмите $x=a+m t$ и подберите $t$; для этого нужно обратить $m$ по модулю $n$.",
    "en": "Set $x=a+m t$ and solve for $t$; this needs the inverse of $m$ modulo $n$."
   },
   "sol": {
    "ru": "**Существование.** Любое $x$ с $x\\equiv a\\pmod m$ имеет вид $$x=a+mt,\\qquad t\\in\\mathbb{Z} .$$ Подставим во второе условие: $$a+mt\\equiv b\\pmod n\\quad\\Longleftrightarrow\\quad mt\\equiv b-a\\pmod n .$$\n\nТак как $\\gcd(m,n)=1$, по соотношению Безу найдутся $u,v$ с $um+vn=1$, то есть $um\\equiv1\\pmod n$: у числа $m$ есть обратное по модулю $n$. Домножив на $u$, получаем $$t\\equiv u(b-a)\\pmod n ,$$ и любое такое $t$ подходит. Значит решение существует ✓\n\n**Единственность.** Пусть $x_1$ и $x_2$ — два решения. Тогда $$m\\mid x_1-x_2\\quad\\text{и}\\quad n\\mid x_1-x_2 .$$ Так как $m$ и $n$ взаимно просты, отсюда $mn\\mid x_1-x_2$, то есть $$x_1\\equiv x_2\\pmod{mn} . \\qquad\\blacksquare$$\n\n**Пример.** $x\\equiv2\\pmod 3$, $x\\equiv3\\pmod 5$: берём $x=2+3t$ и требуем $3t\\equiv1\\pmod 5$, откуда $t\\equiv2$, значит $x=8$ и все решения — $x\\equiv8\\pmod{15}$ ✓",
    "en": "**Existence.** Every $x$ with $x\\equiv a\\pmod m$ has the form $$x=a+mt,\\qquad t\\in\\mathbb{Z} .$$ Substituting into the second condition, $$a+mt\\equiv b\\pmod n\\quad\\Longleftrightarrow\\quad mt\\equiv b-a\\pmod n .$$\n\nSince $\\gcd(m,n)=1$, Bézout gives $u,v$ with $um+vn=1$, i.e. $um\\equiv1\\pmod n$: the number $m$ is invertible modulo $n$. Multiplying by $u$, $$t\\equiv u(b-a)\\pmod n ,$$ and any such $t$ works. So a solution exists ✓\n\n**Uniqueness.** Let $x_1,x_2$ be two solutions. Then $$m\\mid x_1-x_2\\quad\\text{and}\\quad n\\mid x_1-x_2 .$$ As $m$ and $n$ are coprime, this forces $mn\\mid x_1-x_2$, i.e. $$x_1\\equiv x_2\\pmod{mn} . \\qquad\\blacksquare$$\n\n**Example.** $x\\equiv2\\pmod 3$, $x\\equiv3\\pmod 5$: put $x=2+3t$ and require $3t\\equiv1\\pmod 5$, so $t\\equiv2$, giving $x=8$ and all solutions $x\\equiv8\\pmod{15}$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите теорему Эйлера: если $\\gcd(a,n)=1$, то $a^{\\varphi(n)}\\equiv1\\pmod n$, где $\\varphi(n)$ — количество чисел от $1$ до $n$, взаимно простых с $n$.",
    "en": "Prove Euler's theorem: if $\\gcd(a,n)=1$ then $a^{\\varphi(n)}\\equiv1\\pmod n$, where $\\varphi(n)$ counts the integers from $1$ to $n$ coprime to $n$."
   },
   "hint": {
    "ru": "Умножение на $a$ переставляет обратимые остатки.",
    "en": "Multiplication by $a$ permutes the invertible residues."
   },
   "sol": {
    "ru": "Пусть $$r_1,\\;r_2,\\;\\dots,\\;r_{\\varphi(n)}$$ — все остатки от $1$ до $n$, взаимно простые с $n$.\n\n**Шаг 1: числа $ar_1,\\dots,ar_{\\varphi(n)}$ — те же остатки, лишь переставленные.**\n\nВо-первых, каждое $ar_i$ взаимно просто с $n$: общий простой делитель $ar_i$ и $n$ делил бы либо $a$, либо $r_i$, что противоречит взаимной простоте.\n\nВо-вторых, они попарно различны по модулю $n$: если $ar_i\\equiv ar_j$, то $n\\mid a(r_i-r_j)$, а так как $\\gcd(a,n)=1$, то $n\\mid r_i-r_j$, откуда $r_i=r_j$.\n\nИтак, $\\varphi(n)$ попарно различных обратимых остатков — это в точности весь набор $r_1,\\dots,r_{\\varphi(n)}$.\n\n**Шаг 2.** Перемножим все элементы обоих наборов: $$\\prod_{i}\\left(ar_i\\right)\\equiv\\prod_i r_i\\pmod n\\quad\\Longleftrightarrow\\quad a^{\\varphi(n)}\\prod_i r_i\\equiv\\prod_i r_i\\pmod n .$$\n\n**Шаг 3.** Произведение $\\prod_i r_i$ взаимно просто с $n$, значит на него можно сократить: $$a^{\\varphi(n)}\\equiv1\\pmod n . \\qquad\\blacksquare$$\n\n**Частный случай.** При простом $n=p$ имеем $\\varphi(p)=p-1$, и получается малая теорема Ферма.\n\n**Пример.** $n=10$, $\\varphi(10)=4$, $a=3$: $3^{4}=81\\equiv1\\pmod{10}$ ✓",
    "en": "Let $$r_1,\\;r_2,\\;\\dots,\\;r_{\\varphi(n)}$$ be all residues from $1$ to $n$ coprime to $n$.\n\n**Step 1: the numbers $ar_1,\\dots,ar_{\\varphi(n)}$ are the same residues, permuted.**\n\nFirst, each $ar_i$ is coprime to $n$: a common prime divisor of $ar_i$ and $n$ would divide $a$ or $r_i$, contradicting coprimality.\n\nSecond, they are pairwise distinct modulo $n$: if $ar_i\\equiv ar_j$ then $n\\mid a(r_i-r_j)$, and since $\\gcd(a,n)=1$ we get $n\\mid r_i-r_j$, so $r_i=r_j$.\n\nThus $\\varphi(n)$ pairwise distinct invertible residues — exactly the whole set $r_1,\\dots,r_{\\varphi(n)}$.\n\n**Step 2.** Multiply all elements of both sets: $$\\prod_{i}\\left(ar_i\\right)\\equiv\\prod_i r_i\\pmod n\\quad\\Longleftrightarrow\\quad a^{\\varphi(n)}\\prod_i r_i\\equiv\\prod_i r_i\\pmod n .$$\n\n**Step 3.** The product $\\prod_i r_i$ is coprime to $n$, so it may be cancelled: $$a^{\\varphi(n)}\\equiv1\\pmod n . \\qquad\\blacksquare$$\n\n**Special case.** For a prime $n=p$ we have $\\varphi(p)=p-1$, recovering Fermat’s little theorem.\n\n**Example.** $n=10$, $\\varphi(10)=4$, $a=3$: $3^{4}=81\\equiv1\\pmod{10}$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что для нечётного простого $p$ $$1^{\\,p-1}+2^{\\,p-1}+\\dots+(p-1)^{\\,p-1}\\equiv-1\\pmod p .$$",
    "en": "Prove that for an odd prime $p$ $$1^{\\,p-1}+2^{\\,p-1}+\\dots+(p-1)^{\\,p-1}\\equiv-1\\pmod p .$$"
   },
   "hint": {
    "ru": "Каждое слагаемое посчитайте по малой теореме Ферма.",
    "en": "Evaluate each summand by Fermat's little theorem."
   },
   "sol": {
    "ru": "Возьмём любое $k$ с $1\\le k\\le p-1$. Тогда $p\\nmid k$, и по малой теореме Ферма $$k^{\\,p-1}\\equiv1\\pmod p .$$\n\nСлагаемых ровно $p-1$, поэтому вся сумма сравнима с $$\\underbrace{1+1+\\dots+1}_{p-1}=p-1\\equiv-1\\pmod p . \\qquad\\blacksquare$$\n\n**Проверка** при $p=5$: $$1^{4}+2^{4}+3^{4}+4^{4}=1+16+81+256=354=5\\cdot71-1\\equiv-1\\pmod 5 \\quad\\checkmark$$\n\n**Замечание.** Если показатель заменить на $p-1-1=p-2$ или любой другой, не кратный $p-1$, ответ станет другим — здесь важно именно значение $p-1$.",
    "en": "Take any $k$ with $1\\le k\\le p-1$. Then $p\\nmid k$, so Fermat’s little theorem gives $$k^{\\,p-1}\\equiv1\\pmod p .$$\n\nThere are exactly $p-1$ summands, so the whole sum is congruent to $$\\underbrace{1+1+\\dots+1}_{p-1}=p-1\\equiv-1\\pmod p . \\qquad\\blacksquare$$\n\n**Check** at $p=5$: $$1^{4}+2^{4}+3^{4}+4^{4}=1+16+81+256=354=5\\cdot71-1\\equiv-1\\pmod 5 \\quad\\checkmark$$\n\n**Remark.** Replacing the exponent by $p-2$, or by anything not a multiple of $p-1$, changes the answer — the value $p-1$ is what matters here."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Числа Ферма определяются как $F_n=2^{2^{n}}+1$. Докажите, что при $m\\ne n$ числа $F_m$ и $F_n$ взаимно просты, и выведите отсюда бесконечность множества простых.",
    "en": "The Fermat numbers are $F_n=2^{2^{n}}+1$. Prove that $F_m$ and $F_n$ are coprime for $m\\ne n$, and deduce that there are infinitely many primes."
   },
   "hint": {
    "ru": "Докажите тождество $F_0F_1\\cdots F_{n-1}=F_n-2$.",
    "en": "Prove the identity $F_0F_1\\cdots F_{n-1}=F_n-2$."
   },
   "sol": {
    "ru": "**Шаг 1: тождество $F_0F_1\\cdots F_{n-1}=F_n-2$.** Индукция по $n$.\n\nБаза $n=1$: слева $F_0=3$, справа $F_1-2=5-2=3$ ✓\n\nПереход: пусть $F_0\\cdots F_{n-1}=F_n-2=2^{2^{n}}-1$. Тогда $$F_0\\cdots F_{n-1}F_n=\\left(2^{2^{n}}-1\\right)\\left(2^{2^{n}}+1\\right)=2^{2^{n+1}}-1=F_{n+1}-2 \\quad\\checkmark$$\n\n**Шаг 2: взаимная простота.** Пусть $m<n$ и $d\\mid F_m$, $d\\mid F_n$. По шагу 1 число $F_m$ входит множителем в произведение $F_0\\cdots F_{n-1}=F_n-2$, значит $$d\\mid F_n-2 .$$ Вместе с $d\\mid F_n$ это даёт $d\\mid2$. Но все числа $F_k$ нечётны, поэтому $d$ нечётно, откуда $$d=1 . \\qquad\\checkmark$$\n\n**Шаг 3: бесконечность простых.** У каждого $F_n>1$ есть простой делитель $p_n$. По шагу 2 разные $F_n$ не имеют общих делителей, больших единицы, значит все $p_n$ попарно различны. Получаем бесконечную последовательность различных простых. $\\blacksquare$\n\n**Замечание.** Сами числа $F_n$ простыми быть не обязаны: $F_5=4294967297=641\\cdot6700417$ — это и обнаружил Эйлер.",
    "en": "**Step 1: the identity $F_0F_1\\cdots F_{n-1}=F_n-2$.** Induct on $n$.\n\nBase $n=1$: the left side is $F_0=3$, the right side $F_1-2=5-2=3$ ✓\n\nStep: suppose $F_0\\cdots F_{n-1}=F_n-2=2^{2^{n}}-1$. Then $$F_0\\cdots F_{n-1}F_n=\\left(2^{2^{n}}-1\\right)\\left(2^{2^{n}}+1\\right)=2^{2^{n+1}}-1=F_{n+1}-2 \\quad\\checkmark$$\n\n**Step 2: coprimality.** Let $m<n$ and let $d\\mid F_m$, $d\\mid F_n$. By Step 1 the number $F_m$ is a factor of the product $F_0\\cdots F_{n-1}=F_n-2$, so $$d\\mid F_n-2 .$$ Together with $d\\mid F_n$ this gives $d\\mid2$. But every $F_k$ is odd, so $d$ is odd, hence $$d=1 . \\qquad\\checkmark$$\n\n**Step 3: infinitude of primes.** Each $F_n>1$ has a prime divisor $p_n$. By Step 2 distinct $F_n$ share no divisor greater than one, so all the $p_n$ are pairwise distinct — an infinite supply of distinct primes. $\\blacksquare$\n\n**Remark.** The $F_n$ themselves need not be prime: $F_5=4294967297=641\\cdot6700417$, as Euler discovered."
   }
  },
  {
   "src": "Республиканский тур · уровень / Republic-round level",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что $p^{4}\\equiv1\\pmod{240}$ для любого простого $p>5$.",
    "en": "Prove that $p^{4}\\equiv1\\pmod{240}$ for every prime $p>5$."
   },
   "hint": {
    "ru": "$240=16\\cdot3\\cdot5$; разберите каждый множитель отдельно.",
    "en": "$240=16\\cdot3\\cdot5$; treat each factor separately."
   },
   "sol": {
    "ru": "Разложим модуль на попарно взаимно простые множители: $$240=16\\cdot3\\cdot5 .$$ Достаточно доказать сравнение по каждому из них. Заметим, что $p>5$, поэтому $p$ не делится ни на $2$, ни на $3$, ни на $5$.\n\n**По модулю $16$.** Число $p$ нечётно, значит $p^{2}=8k+1$ для некоторого целого $k$ (мы уже знаем, что квадрат нечётного даёт остаток $1$ по модулю $8$). Тогда $$p^{4}=(8k+1)^{2}=64k^{2}+16k+1\\equiv1\\pmod{16} \\quad\\checkmark$$\n\n**По модулю $3$.** По малой теореме Ферма $p^{2}\\equiv1\\pmod 3$, откуда $p^{4}=\\left(p^{2}\\right)^{2}\\equiv1$ ✓\n\n**По модулю $5$.** По малой теореме Ферма сразу $p^{4}\\equiv1\\pmod 5$ ✓\n\nЧисло $p^{4}-1$ делится на $16$, $3$ и $5$, а эти числа попарно взаимно просты, значит оно делится на их произведение $240$. $\\blacksquare$\n\n**Проверка** при $p=7$: $7^{4}-1=2400=240\\cdot10$ ✓ При $p=11$: $11^{4}-1=14640=240\\cdot61$ ✓",
    "en": "Split the modulus into pairwise coprime factors: $$240=16\\cdot3\\cdot5 .$$ It suffices to prove the congruence modulo each. Note $p>5$, so $p$ is divisible by none of $2$, $3$, $5$.\n\n**Modulo $16$.** As $p$ is odd, $p^{2}=8k+1$ for some integer $k$ (the square of an odd number leaves remainder $1$ modulo $8$). Then $$p^{4}=(8k+1)^{2}=64k^{2}+16k+1\\equiv1\\pmod{16} \\quad\\checkmark$$\n\n**Modulo $3$.** Fermat’s little theorem gives $p^{2}\\equiv1\\pmod 3$, so $p^{4}=\\left(p^{2}\\right)^{2}\\equiv1$ ✓\n\n**Modulo $5$.** Fermat’s little theorem gives $p^{4}\\equiv1\\pmod 5$ directly ✓\n\nSo $p^{4}-1$ is divisible by $16$, $3$ and $5$, which are pairwise coprime, hence by their product $240$. $\\blacksquare$\n\n**Check** at $p=7$: $7^{4}-1=2400=240\\cdot10$ ✓ At $p=11$: $11^{4}-1=14640=240\\cdot61$ ✓"
   }
  }
 ]
};
