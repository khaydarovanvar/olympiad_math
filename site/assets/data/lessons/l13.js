/* Topic 13 — generated from content/lesson_13.py, do not edit by hand. */
window.LESSONS = window.LESSONS || {};
window.LESSONS[13] = {
 "n": 13,
 "cat": "comb",
 "title": {
  "ru": "Комбинаторика: как считать",
  "en": "Counting principles"
 },
 "sub": {
  "ru": "Правила суммы и произведения, перестановки и сочетания, треугольник Паскаля, включения-исключения и двойной подсчёт.",
  "en": "The sum and product rules, permutations and combinations, Pascal’s triangle, inclusion–exclusion and double counting."
 },
 "goals": {
  "ru": [
   "Различать, когда работает правило суммы, а когда — правило произведения.",
   "Считать перестановки, размещения и сочетания и понимать, чем они отличаются.",
   "Пользоваться свойствами биномиальных коэффициентов и треугольником Паскаля.",
   "Применять формулу включений-исключений и приём двойного подсчёта."
  ],
  "en": [
   "Tell when the sum rule applies and when the product rule does.",
   "Count permutations, arrangements and combinations, and see how they differ.",
   "Use the properties of binomial coefficients and Pascal’s triangle.",
   "Apply inclusion–exclusion and the double-counting technique."
  ]
 },
 "sections": [
  {
   "h": {
    "ru": "Два правила, из которых всё растёт",
    "en": "The two rules everything grows from"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Правило суммы",
      "en": "The sum rule"
     },
     "text": {
      "ru": "Если объект можно выбрать **или** одним способом из $m$ вариантов, **или** другим из $n$ вариантов, и эти множества не пересекаются, то всего вариантов $m+n$.",
      "en": "If an object can be chosen **either** in one of $m$ ways **or** in one of $n$ ways, and the two sets do not overlap, then there are $m+n$ ways in all."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Правило произведения",
      "en": "The product rule"
     },
     "text": {
      "ru": "Если выбор состоит из двух **последовательных** шагов, причём первый можно сделать $m$ способами, а второй при любом исходе первого — $n$ способами, то всего вариантов $m\\cdot n$.",
      "en": "If a choice is made in two **successive** steps, the first in $m$ ways and the second in $n$ ways whatever the first gave, then there are $m\\cdot n$ ways in all."
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Отличить их просто по союзу: **«или»** — складываем, **«и»** — умножаем.\n\n«В классе $12$ мальчиков **и** $15$ девочек. Выбрать одного дежурного» — здесь на самом деле «мальчика **или** девочку»: $12+15=27$.\n\n«Выбрать одного мальчика **и** одну девочку» — здесь два шага: $12\\cdot15=180$.",
      "en": "They are told apart by the conjunction: **\"or\"** means add, **\"and\"** means multiply.\n\n\"A class has $12$ boys **and** $15$ girls. Choose one monitor\" — this is really \"a boy **or** a girl\": $12+15=27$.\n\n\"Choose one boy **and** one girl\" — two steps: $12\\cdot15=180$."
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "В правиле суммы обязательно требуется, чтобы множества **не пересекались**. «Сколько чисел от $1$ до $100$ делится на $2$ или на $3$?» — складывать $50$ и $33$ нельзя: числа, кратные шести, попадут в оба списка. Здесь нужна формула включений-исключений.\n\nВ правиле произведения важно, чтобы количество вариантов на втором шаге **не зависело** от исхода первого. Если зависит — разбирайте случаи.",
      "en": "The sum rule insists that the sets **do not overlap**. \"How many numbers from $1$ to $100$ are divisible by $2$ or by $3$?\" — you may not add $50$ and $33$: the multiples of six land in both lists. That calls for inclusion–exclusion.\n\nThe product rule insists that the count at the second step **does not depend** on the first outcome. If it does, split into cases."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Сколько существует трёхзначных чисел, все цифры которых различны?",
      "en": "How many three-digit numbers have all three digits different?"
     },
     "steps": {
      "ru": [
       "Первая цифра — старшая, она не может быть нулём: $9$ вариантов.",
       "Вторая цифра может быть любой, кроме уже использованной: $10-1=9$ вариантов.",
       "Третья — любая, кроме двух использованных: $8$ вариантов.",
       "На каждом шаге количество вариантов не зависит от конкретного выбора на предыдущих, поэтому работает правило произведения: $$9\\cdot9\\cdot8=648 .$$"
      ],
      "en": [
       "The leading digit cannot be zero: $9$ choices.",
       "The second digit may be anything but the one already used: $10-1=9$ choices.",
       "The third: anything but the two already used: $8$ choices.",
       "At each step the count does not depend on the earlier choices, so the product rule applies: $$9\\cdot9\\cdot8=648 .$$"
      ]
     },
     "ans": {
      "ru": "$648$ чисел.",
      "en": "$648$ numbers."
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "**Когда правило произведения не работает.** Оно требует, чтобы число вариантов на каждом шаге **не зависело** от того, что выбрано раньше. Классическая ловушка: «сколько двузначных чисел с различными цифрами?» — на первое место $9$ вариантов (не $0$), на второе тоже $9$ (любая из десяти, кроме уже использованной). Здесь число вариантов на втором шаге одно и то же ($9$) при любом первом выборе, поэтому правило применимо и ответ $81$.\n\nА вот в задаче «сколько двузначных чисел, у которых вторая цифра больше первой?» число вариантов на втором шаге **зависит** от первого выбора, и перемножать нельзя — надо суммировать.",
      "en": "**When the product rule fails.** It requires the number of options at each step to be **independent** of the earlier choices. The classic trap: \"how many two-digit numbers have distinct digits?\" — nine options for the first place (not $0$) and nine for the second (any of ten except the one used). The second count is the same ($9$) whatever the first choice was, so the rule applies and the answer is $81$.\n\nBut in \"how many two-digit numbers have the second digit larger than the first?\" the number of options at the second step **depends** on the first, so multiplication is wrong — one must sum."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Правило деления",
      "en": "The division rule"
     },
     "text": {
      "ru": "Если каждый объект множества $Y$ получается ровно из $d$ объектов множества $X$ при некотором отображении $X\\to Y$, то $$\\left|Y\\right|=\\frac{\\left|X\\right|}{d}.$$",
      "en": "If under some map $X\\to Y$ every object of $Y$ comes from exactly $d$ objects of $X$, then $$\\left|Y\\right|=\\frac{\\left|X\\right|}{d}.$$"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Правило деления — главный инструмент для задач «по кругу». Сколькими способами усадить $n$ человек за круглый стол, если рассадки, отличающиеся поворотом, считаются одинаковыми? Всего линейных расстановок $n!$, каждая круговая получается из ровно $n$ линейных (по числу поворотов), значит ответ $\\dfrac{n!}{n}=\\left(n-1\\right)!$.\n\nЕсли одинаковыми считать ещё и отражения (например, для ожерелья), делим дополнительно на $2$.",
      "en": "The division rule is the main tool for problems \"around a circle\". In how many ways can $n$ people sit at a round table if seatings differing by a rotation count as the same? There are $n!$ linear arrangements, each circular one comes from exactly $n$ of them (one per rotation), so the answer is $\\dfrac{n!}{n}=\\left(n-1\\right)!$.\n\nIf reflections count as the same too (a necklace, say), divide by a further $2$."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Размещения, перестановки, сочетания: строгие формулы",
    "en": "Arrangements, permutations, combinations: the formulas proved"
   },
   "blocks": [
    {
     "t": "def",
     "name": {
      "ru": "Три вопроса, три формулы",
      "en": "Three questions, three formulas"
     },
     "text": {
      "ru": "Выбирая $k$ объектов из $n$ различных, надо ответить на два вопроса: **важен ли порядок** и **допускаются ли повторения**. Четыре ответа дают четыре формулы.",
      "en": "When choosing $k$ objects out of $n$ distinct ones, two questions decide everything: **does order matter** and **are repetitions allowed**. Four answers give four formulas."
     }
    },
    {
     "t": "table",
     "head": {
      "ru": [
       "",
       "Порядок важен",
       "Порядок не важен"
      ],
      "en": [
       "",
       "Order matters",
       "Order does not matter"
      ]
     },
     "rows": {
      "ru": [
       [
        "без повторений",
        "$A_n^{k}=\\dfrac{n!}{\\left(n-k\\right)!}$",
        "$C_n^{k}=\\dfrac{n!}{k!\\left(n-k\\right)!}$"
       ],
       [
        "с повторениями",
        "$n^{k}$",
        "$C_{n+k-1}^{k}$"
       ]
      ],
      "en": [
       [
        "no repetition",
        "$A_n^{k}=\\dfrac{n!}{\\left(n-k\\right)!}$",
        "$C_n^{k}=\\dfrac{n!}{k!\\left(n-k\\right)!}$"
       ],
       [
        "repetition allowed",
        "$n^{k}$",
        "$C_{n+k-1}^{k}$"
       ]
      ]
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Число размещений",
      "en": "The number of arrangements"
     },
     "text": {
      "ru": "Число способов выбрать $k$ объектов из $n$ различных **с учётом порядка и без повторений** равно $$A_n^{k}=n\\left(n-1\\right)\\left(n-2\\right)\\cdots\\left(n-k+1\\right)=\\frac{n!}{\\left(n-k\\right)!}.$$ В частности, число всех перестановок $n$ объектов равно $P_n=A_n^{n}=n!$.",
      "en": "The number of ways to choose $k$ objects out of $n$ distinct ones **with order and without repetition** is $$A_n^{k}=n\\left(n-1\\right)\\cdots\\left(n-k+1\\right)=\\frac{n!}{\\left(n-k\\right)!}.$$ In particular the number of permutations of $n$ objects is $P_n=A_n^{n}=n!$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Заполняем $k$ позиций слева направо. На первую позицию есть $n$ кандидатов. Какой бы объект мы ни выбрали, на вторую позицию остаётся ровно $n-1$ кандидат — **число вариантов не зависит от сделанного выбора**, а это в точности условие применимости правила произведения.\n\nПродолжая, на $k$-ю позицию остаётся $n-k+1$ кандидат. По правилу произведения общее число способов равно $$n\\left(n-1\\right)\\cdots\\left(n-k+1\\right) \\quad\\checkmark$$\n\nДомножив и разделив на $\\left(n-k\\right)!$, получаем компактную запись через факториалы ✓ $\\blacksquare$",
      "en": "Fill the $k$ positions from left to right. The first position has $n$ candidates. Whichever object we take, the second has exactly $n-1$ candidates — **the count does not depend on the earlier choice**, which is precisely what the product rule requires.\n\nContinuing, the $k$-th position has $n-k+1$ candidates. The product rule gives $$n\\left(n-1\\right)\\cdots\\left(n-k+1\\right) \\quad\\checkmark$$\n\nMultiplying and dividing by $\\left(n-k\\right)!$ gives the compact factorial form ✓ $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Число сочетаний",
      "en": "The number of combinations"
     },
     "text": {
      "ru": "Число способов выбрать $k$ объектов из $n$ **без учёта порядка и без повторений** равно $$C_n^{k}=\\binom{n}{k}=\\frac{n!}{k!\\left(n-k\\right)!}.$$",
      "en": "The number of ways to choose $k$ objects out of $n$ **without order and without repetition** is $$C_n^{k}=\\binom{n}{k}=\\frac{n!}{k!\\left(n-k\\right)!}.$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Применим **правило деления**: посчитаем одно и то же двумя способами.\n\nКаждое размещение $k$ объектов получается в два шага: сначала выбирается сам набор из $k$ объектов ($C_n^{k}$ способов), затем этот набор упорядочивается ($k!$ способов). По правилу произведения $$A_n^{k}=C_n^{k}\\cdot k! .$$\n\nВажно, что второй множитель $k!$ **один и тот же** для любого набора — только поэтому правило произведения применимо.\n\nОтсюда $$C_n^{k}=\\frac{A_n^{k}}{k!}=\\frac{n!}{k!\\left(n-k\\right)!} \\quad\\checkmark\\qquad\\blacksquare$$",
      "en": "Use the **division rule**: count the same thing twice.\n\nEvery arrangement of $k$ objects arises in two steps: first choose the set of $k$ objects ($C_n^{k}$ ways), then order it ($k!$ ways). The product rule gives $$A_n^{k}=C_n^{k}\\cdot k! .$$\n\nWhat matters is that the second factor $k!$ is **the same** for every set — only then does the product rule apply.\n\nHence $$C_n^{k}=\\frac{A_n^{k}}{k!}=\\frac{n!}{k!\\left(n-k\\right)!} \\quad\\checkmark\\qquad\\blacksquare$$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Перестановки с повторениями",
      "en": "Permutations with repetition"
     },
     "text": {
      "ru": "Число различных «слов», которые можно составить из $n$ букв, среди которых первая буква повторяется $k_1$ раз, вторая $k_2$ раз, …, $m$-я $k_m$ раз (и $k_1+\\dots+k_m=n$), равно $$\\frac{n!}{k_1!\\,k_2!\\cdots k_m!}.$$",
      "en": "The number of distinct \"words\" formed from $n$ letters in which the first letter repeats $k_1$ times, the second $k_2$ times, …, the $m$-th $k_m$ times (with $k_1+\\dots+k_m=n$) is $$\\frac{n!}{k_1!\\,k_2!\\cdots k_m!}.$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Сделаем одинаковые буквы различными, пометив их номерами. Тогда всех перестановок ровно $n!$.\n\nТеперь сотрём пометки. Каждое «настоящее» слово получилось из ровно $$k_1!\\,k_2!\\cdots k_m!$$ помеченных — переставлять одинаковые буквы между собой можно как угодно, слово от этого не меняется. Число повторений одно и то же для каждого слова, поэтому применимо правило деления ✓ $\\blacksquare$\n\n**Другой взгляд.** Выберем позиции для первой буквы ($C_n^{k_1}$ способов), затем из оставшихся — позиции для второй ($C_{n-k_1}^{k_2}$) и так далее. Произведение всех этих биномиальных коэффициентов после сокращения даёт ту же формулу.",
      "en": "Make the identical letters distinguishable by labelling them. Then there are exactly $n!$ permutations.\n\nNow erase the labels. Each genuine word arose from exactly $$k_1!\\,k_2!\\cdots k_m!$$ labelled ones — the identical letters may be permuted among themselves without changing the word. The overcount is the same for every word, so the division rule applies ✓ $\\blacksquare$\n\n**Another view.** Choose the positions of the first letter ($C_n^{k_1}$ ways), then from the rest the positions of the second ($C_{n-k_1}^{k_2}$), and so on. The product of these binomial coefficients telescopes to the same formula."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Сколько различных слов можно получить перестановкой букв слова «МАТЕМАТИКА»?",
      "en": "How many distinct words can be made by permuting the letters of MATHEMATICS?"
     },
     "steps": {
      "ru": [
       "Всего $10$ букв: М — $2$, А — $3$, Т — $2$, Е — $1$, И — $1$, К — $1$.",
       "По формуле $$\\frac{10!}{2!\\cdot3!\\cdot2!\\cdot1!\\cdot1!\\cdot1!}=\\frac{3\\,628\\,800}{2\\cdot6\\cdot2}=\\frac{3\\,628\\,800}{24}=151\\,200 .$$",
       "Проверка порядка величины: без повторений было бы $10!=3\\,628\\,800$, а повторения уменьшили ответ ровно в $24$ раза ✓"
      ],
      "en": [
       "There are $11$ letters: M — $2$, A — $2$, T — $2$, H, E, I, C, S — one each.",
       "The formula gives $$\\frac{11!}{2!\\cdot2!\\cdot2!}=\\frac{39\\,916\\,800}{8}=4\\,989\\,600 .$$",
       "A sanity check: without repetitions there would be $11!=39\\,916\\,800$, and the repetitions cut this by exactly a factor of $8$ ✓"
      ]
     },
     "ans": {
      "ru": "$151\\,200$ слов.",
      "en": "$4\\,989\\,600$ words."
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Самая частая ошибка — считать порядок там, где его нет, или наоборот. Проверочный вопрос: **«меняется ли результат, если поменять местами два выбранных объекта?»** Если да — это размещение, если нет — сочетание. «Выбрать команду из трёх человек» — сочетание; «выбрать капитана, вратаря и нападающего» — размещение.",
      "en": "The commonest error is counting order where there is none, or the reverse. The test question: **\"does swapping two chosen objects change the outcome?\"** If yes it is an arrangement, if no a combination. \"Pick a team of three\" is a combination; \"pick a captain, a keeper and a striker\" is an arrangement."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Перестановки, размещения, сочетания",
    "en": "Permutations, arrangements, combinations"
   },
   "blocks": [
    {
     "t": "table",
     "head": {
      "ru": [
       "Что считаем",
       "Формула",
       "Порядок важен?"
      ],
      "en": [
       "What is counted",
       "Formula",
       "Does order matter?"
      ]
     },
     "rows": {
      "ru": [
       [
        "**перестановки** $n$ предметов",
        "$P_n=n!$",
        "да"
       ],
       [
        "**размещения**: выбрать $k$ из $n$ по порядку",
        "$A_n^k=\\dfrac{n!}{(n-k)!}$",
        "да"
       ],
       [
        "**сочетания**: выбрать $k$ из $n$",
        "$\\dbinom{n}{k}=\\dfrac{n!}{k!\\,(n-k)!}$",
        "нет"
       ],
       [
        "выборки **с повторениями**: $k$ раз из $n$",
        "$n^{k}$",
        "да"
       ],
       [
        "сочетания **с повторениями**",
        "$\\dbinom{n+k-1}{k}$",
        "нет"
       ]
      ],
      "en": [
       [
        "**permutations** of $n$ objects",
        "$P_n=n!$",
        "yes"
       ],
       [
        "**arrangements**: choose $k$ of $n$ in order",
        "$A_n^k=\\dfrac{n!}{(n-k)!}$",
        "yes"
       ],
       [
        "**combinations**: choose $k$ of $n$",
        "$\\dbinom{n}{k}=\\dfrac{n!}{k!\\,(n-k)!}$",
        "no"
       ],
       [
        "choices **with repetition**: $k$ times from $n$",
        "$n^{k}$",
        "yes"
       ],
       [
        "combinations **with repetition**",
        "$\\dbinom{n+k-1}{k}$",
        "no"
       ]
      ]
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Главный вопрос",
      "en": "The one question to ask"
     },
     "text": {
      "ru": "Прежде чем выбирать формулу, спросите себя: **важен ли порядок?**\n\n«Сколькими способами выбрать старосту и его заместителя из $10$ человек» — порядок важен (роли разные), это размещения: $10\\cdot9=90$.\n\n«Сколькими способами выбрать двух дежурных из $10$» — порядок не важен, это сочетания: $\\binom{10}{2}=45$.\n\nОбратите внимание: ответы отличаются ровно в $2!=2$ раза — на число перестановок внутри выбранной пары.",
      "en": "Before choosing a formula ask yourself: **does order matter?**\n\n\"In how many ways can a class of $10$ pick a head and a deputy\" — order matters (the roles differ), so these are arrangements: $10\\cdot9=90$.\n\n\"In how many ways can it pick two monitors\" — order does not matter, so these are combinations: $\\binom{10}{2}=45$.\n\nNote the answers differ by exactly $2!=2$ — the number of orderings inside the chosen pair."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Почему $\\dbinom{n}{k}=\\dfrac{n!}{k!\\,(n-k)!}$.** Посчитаем двумя способами число способов выбрать $k$ предметов из $n$ **и выстроить их по порядку**.\n\n*Первый способ:* последовательно, по правилу произведения: $$n(n-1)\\cdots(n-k+1)=\\frac{n!}{(n-k)!}.$$\n\n*Второй способ:* сначала выберем набор из $k$ предметов — это можно сделать $\\binom nk$ способами, — а потом расставим выбранные по порядку, что даёт $k!$ вариантов. Итого $\\binom nk\\cdot k!$.\n\nПриравнивая, $$\\binom nk\\cdot k!=\\frac{n!}{(n-k)!}\\quad\\Longrightarrow\\quad \\binom nk=\\frac{n!}{k!\\,(n-k)!}. \\qquad\\blacksquare$$",
      "en": "**Why $\\dbinom{n}{k}=\\dfrac{n!}{k!\\,(n-k)!}$.** Count in two ways the number of ways to choose $k$ objects from $n$ **and line them up in order**.\n\n*First way:* step by step, by the product rule: $$n(n-1)\\cdots(n-k+1)=\\frac{n!}{(n-k)!}.$$\n\n*Second way:* first choose the set of $k$ objects, which can be done in $\\binom nk$ ways, then order them, which gives $k!$ ways. That is $\\binom nk\\cdot k!$ altogether.\n\nEquating, $$\\binom nk\\cdot k!=\\frac{n!}{(n-k)!}\\quad\\Longrightarrow\\quad \\binom nk=\\frac{n!}{k!\\,(n-k)!}. \\qquad\\blacksquare$$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Сколько различных «слов» (не обязательно осмысленных) можно составить, переставляя буквы слова МАТЕМАТИКА?",
      "en": "How many different \"words\" (not necessarily meaningful) can be made by rearranging the letters of МАТЕМАТИКА?"
     },
     "steps": {
      "ru": [
       "В слове $10$ букв. Если бы все были различны, ответом было бы $10!$.",
       "Но буквы повторяются: **А** встречается $3$ раза, **М** — $2$ раза, **Т** — $2$ раза, остальные (Е, И, К) — по одному.",
       "Каждое различимое слово получается из $3!\\cdot2!\\cdot2!$ разных «нумерованных» расстановок — это перестановки одинаковых букв между собой.",
       "Значит ответ: $$\\frac{10!}{3!\\,2!\\,2!}=\\frac{3\\,628\\,800}{6\\cdot2\\cdot2}=\\frac{3\\,628\\,800}{24}=151\\,200 .$$"
      ],
      "en": [
       "The word has $10$ letters. If they were all different the answer would be $10!$.",
       "But letters repeat: **А** appears $3$ times, **М** twice, **Т** twice, and Е, И, К once each.",
       "Each distinguishable word arises from $3!\\cdot2!\\cdot2!$ different \"numbered\" arrangements — the permutations of identical letters among themselves.",
       "So the answer is $$\\frac{10!}{3!\\,2!\\,2!}=\\frac{3\\,628\\,800}{6\\cdot2\\cdot2}=\\frac{3\\,628\\,800}{24}=151\\,200 .$$"
      ]
     },
     "ans": {
      "ru": "$151\\,200$ слов.",
      "en": "$151\\,200$ words."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Биномиальные коэффициенты",
    "en": "Binomial coefficients"
   },
   "blocks": [
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 400 286\" role=\"img\" aria-label=\"Pascal triangle\"><text x=\"200.0\" y=\"34\" text-anchor=\"middle\" class=\"acc\">1</text><text x=\"177.0\" y=\"70\" text-anchor=\"middle\" class=\"acc\">1</text><text x=\"223.0\" y=\"70\" text-anchor=\"middle\" class=\"acc\">1</text><text x=\"154.0\" y=\"106\" text-anchor=\"middle\" class=\"acc\">1</text><text x=\"200.0\" y=\"106\" text-anchor=\"middle\" class=\"sm\">2</text><text x=\"246.0\" y=\"106\" text-anchor=\"middle\" class=\"acc\">1</text><text x=\"131.0\" y=\"142\" text-anchor=\"middle\" class=\"acc\">1</text><text x=\"177.0\" y=\"142\" text-anchor=\"middle\" class=\"sm\">3</text><text x=\"223.0\" y=\"142\" text-anchor=\"middle\" class=\"sm\">3</text><text x=\"269.0\" y=\"142\" text-anchor=\"middle\" class=\"acc\">1</text><text x=\"108.0\" y=\"178\" text-anchor=\"middle\" class=\"acc\">1</text><text x=\"154.0\" y=\"178\" text-anchor=\"middle\" class=\"sm\">4</text><text x=\"200.0\" y=\"178\" text-anchor=\"middle\" class=\"sm\">6</text><text x=\"246.0\" y=\"178\" text-anchor=\"middle\" class=\"sm\">4</text><text x=\"292.0\" y=\"178\" text-anchor=\"middle\" class=\"acc\">1</text><text x=\"85.0\" y=\"214\" text-anchor=\"middle\" class=\"acc\">1</text><text x=\"131.0\" y=\"214\" text-anchor=\"middle\" class=\"sm\">5</text><text x=\"177.0\" y=\"214\" text-anchor=\"middle\" class=\"sm\">10</text><text x=\"223.0\" y=\"214\" text-anchor=\"middle\" class=\"sm\">10</text><text x=\"269.0\" y=\"214\" text-anchor=\"middle\" class=\"sm\">5</text><text x=\"315.0\" y=\"214\" text-anchor=\"middle\" class=\"acc\">1</text><text x=\"62.0\" y=\"250\" text-anchor=\"middle\" class=\"acc\">1</text><text x=\"108.0\" y=\"250\" text-anchor=\"middle\" class=\"sm\">6</text><text x=\"154.0\" y=\"250\" text-anchor=\"middle\" class=\"sm\">15</text><text x=\"200.0\" y=\"250\" text-anchor=\"middle\" class=\"sm\">20</text><text x=\"246.0\" y=\"250\" text-anchor=\"middle\" class=\"sm\">15</text><text x=\"292.0\" y=\"250\" text-anchor=\"middle\" class=\"sm\">6</text><text x=\"338.0\" y=\"250\" text-anchor=\"middle\" class=\"acc\">1</text></svg>",
     "cap": {
      "ru": "Треугольник Паскаля: каждое число — сумма двух стоящих над ним. По краям стоят единицы.",
      "en": "Pascal’s triangle: each number is the sum of the two above it, and the edges are ones."
     }
    },
    {
     "t": "ul",
     "items": {
      "ru": [
       "**Симметрия:** $\\dbinom nk=\\dbinom{n}{n-k}$ — выбрать $k$ предметов всё равно что выбрать, какие $n-k$ оставить.",
       "**Правило Паскаля:** $\\dbinom nk+\\dbinom{n}{k+1}=\\dbinom{n+1}{k+1}$ — именно оно строит треугольник.",
       "**Сумма строки:** $\\dbinom n0+\\dbinom n1+\\dots+\\dbinom nn=2^{n}$.",
       "**Знакопеременная сумма:** $\\dbinom n0-\\dbinom n1+\\dots\\pm\\dbinom nn=0$ при $n\\ge1$.",
       "**Бином Ньютона:** $(a+b)^{n}=\\displaystyle\\sum_{k=0}^{n}\\dbinom nk a^{\\,n-k}b^{k}$."
      ],
      "en": [
       "**Symmetry:** $\\dbinom nk=\\dbinom{n}{n-k}$ — choosing $k$ objects is the same as choosing which $n-k$ to leave.",
       "**Pascal’s rule:** $\\dbinom nk+\\dbinom{n}{k+1}=\\dbinom{n+1}{k+1}$ — this is what builds the triangle.",
       "**Row sum:** $\\dbinom n0+\\dbinom n1+\\dots+\\dbinom nn=2^{n}$.",
       "**Alternating sum:** $\\dbinom n0-\\dbinom n1+\\dots\\pm\\dbinom nn=0$ for $n\\ge1$.",
       "**The binomial theorem:** $(a+b)^{n}=\\displaystyle\\sum_{k=0}^{n}\\dbinom nk a^{\\,n-k}b^{k}$."
      ]
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Правило Паскаля — комбинаторно.** Пусть надо выбрать $k+1$ предмет из $n+1$. Отметим один предмет и назовём его особым. Все выборки делятся на два непересекающихся класса:\n\n*особый предмет взят* — тогда остальные $k$ выбираются из оставшихся $n$: $\\binom nk$ способов;\n\n*особый предмет не взят* — тогда все $k+1$ выбираются из оставшихся $n$: $\\binom{n}{k+1}$ способов.\n\nПо правилу суммы $$\\binom{n+1}{k+1}=\\binom nk+\\binom{n}{k+1}. \\qquad\\blacksquare$$\n\n**Сумма строки.** Левая часть считает все подмножества $n$-элементного множества, разбитые по числу элементов. Правая часть считает те же подмножества иначе: про каждый из $n$ элементов независимо решаем, брать его или нет, — $2^{n}$ вариантов. $\\blacksquare$",
      "en": "**Pascal’s rule, combinatorially.** Suppose we must choose $k+1$ objects out of $n+1$. Mark one object and call it special. Every choice falls into one of two disjoint classes:\n\n*the special object is taken* — then the other $k$ come from the remaining $n$: $\\binom nk$ ways;\n\n*it is not taken* — then all $k+1$ come from the remaining $n$: $\\binom{n}{k+1}$ ways.\n\nThe sum rule gives $$\\binom{n+1}{k+1}=\\binom nk+\\binom{n}{k+1}. \\qquad\\blacksquare$$\n\n**The row sum.** The left side counts all subsets of an $n$-element set, sorted by size. The right side counts the same subsets differently: for each of the $n$ elements decide independently whether to take it — $2^{n}$ ways. $\\blacksquare$"
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Двойной подсчёт",
      "en": "Double counting"
     },
     "text": {
      "ru": "Оба доказательства выше устроены одинаково: **одно и то же множество посчитано двумя способами**, и из равенства ответов получается тождество. Это самый мощный приём комбинаторики. Схема такая:\n\n**1)** придумайте множество объектов;\n**2)** посчитайте его одним способом — получится левая часть;\n**3)** посчитайте другим — получится правая.\n\nАлгебраическое доказательство через факториалы обычно тоже возможно, но комбинаторное короче и объясняет, **почему** тождество верно.",
      "en": "Both proofs above have the same shape: **one set counted in two ways**, and equating the answers gives an identity. This is the most powerful technique in combinatorics. The recipe:\n\n**1)** invent a set of objects;\n**2)** count it one way — that is the left side;\n**3)** count it another way — that is the right side.\n\nAn algebraic proof through factorials is usually available too, but the combinatorial one is shorter and explains **why** the identity holds."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Тождества с биномиальными коэффициентами",
    "en": "Identities for binomial coefficients"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Биномиальные коэффициенты связаны десятками тождеств. Ниже — те, что действительно нужны, и главное — **метод**, которым все они доказываются: посчитать одно и то же множество двумя способами.",
      "en": "Binomial coefficients satisfy dozens of identities. Below are the ones that actually matter, and more importantly the **method** that proves them all: count one set in two ways."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Основные тождества",
      "en": "The basic identities"
     },
     "text": {
      "ru": "$$\\binom{n}{k}=\\binom{n}{n-k},\\qquad \\binom{n}{k}=\\binom{n-1}{k-1}+\\binom{n-1}{k},$$ $$\\sum_{k=0}^{n}\\binom{n}{k}=2^{n},\\qquad \\sum_{k=0}^{n}\\left(-1\\right)^{k}\\binom{n}{k}=0\\ \\ \\left(n\\ge1\\right),$$ $$k\\binom{n}{k}=n\\binom{n-1}{k-1},\\qquad \\sum_{k=0}^{n}\\binom{n}{k}^{2}=\\binom{2n}{n}.$$",
      "en": "$$\\binom{n}{k}=\\binom{n}{n-k},\\qquad \\binom{n}{k}=\\binom{n-1}{k-1}+\\binom{n-1}{k},$$ $$\\sum_{k=0}^{n}\\binom{n}{k}=2^{n},\\qquad \\sum_{k=0}^{n}\\left(-1\\right)^{k}\\binom{n}{k}=0\\ \\ \\left(n\\ge1\\right),$$ $$k\\binom{n}{k}=n\\binom{n-1}{k-1},\\qquad \\sum_{k=0}^{n}\\binom{n}{k}^{2}=\\binom{2n}{n}.$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Каждое тождество доказывается **двойным подсчётом**.\n\n**Симметрия.** Выбрать $k$ объектов — то же самое, что указать, какие $n-k$ объектов останутся. Соответствие взаимно однозначное ✓\n\n**Правило Паскаля.** Выделим один объект, скажем последний. Наборы из $k$ объектов делятся на два непересекающихся класса: содержащие его (нужно добрать $k-1$ из оставшихся $n-1$) и не содержащие ($k$ из $n-1$). По правилу суммы ✓\n\n**Сумма равна $2^{n}$.** Слева — число всех подмножеств $n$-элементного множества, разбитых по размеру; справа — то же число, посчитанное по правилу произведения: каждый из $n$ объектов независимо либо входит в подмножество, либо нет ✓\n\n**Знакопеременная сумма.** Она утверждает, что подмножеств чётного размера столько же, сколько нечётного. Построим биекцию: зафиксируем объект $x$ и сопоставим каждому подмножеству то, которое получается добавлением или удалением $x$. Это соответствие меняет чётность размера и обратно самому себе, значит оно взаимно однозначно ✓\n\n**Тождество $k\\binom{n}{k}=n\\binom{n-1}{k-1}$.** Обе части считают число способов выбрать из $n$ человек комитет из $k$ человек и назначить в нём председателя: слева сначала комитет, потом председатель; справа сначала председатель из всех $n$, потом остальные $k-1$ членов ✓\n\n**Тождество Вандермонда $\\sum\\binom{n}{k}^{2}=\\binom{2n}{n}$.** Разделим $2n$ объектов на две группы по $n$. Выбирая $n$ объектов всего, мы берём $k$ из первой группы и $n-k$ из второй; число способов равно $\\binom{n}{k}\\binom{n}{n-k}=\\binom{n}{k}^{2}$. Суммируя по $k$ и пользуясь правилом суммы, получаем $\\binom{2n}{n}$ ✓ $\\blacksquare$",
      "en": "Every identity here is proved by **double counting**.\n\n**Symmetry.** Choosing $k$ objects is the same as naming the $n-k$ left behind; the correspondence is a bijection ✓\n\n**The rule of Pascal.** Single out one object, say the last. The $k$-subsets split into two disjoint classes: those containing it (choose $k-1$ from the other $n-1$) and those not (choose $k$ from $n-1$). Apply the sum rule ✓\n\n**The sum is $2^{n}$.** The left side counts all subsets of an $n$-set, grouped by size; the right counts the same by the product rule: each of the $n$ objects independently is in or out ✓\n\n**The alternating sum.** It says there are as many even subsets as odd ones. Build a bijection: fix an object $x$ and send each subset to the one obtained by adding or removing $x$. This flips the parity of the size and is its own inverse, hence a bijection ✓\n\n**The identity $k\\binom{n}{k}=n\\binom{n-1}{k-1}$.** Both sides count the ways to pick a committee of $k$ from $n$ people and name its chair: on the left the committee first, then the chair; on the right the chair from all $n$ first, then the remaining $k-1$ members ✓\n\n**The identity of Vandermonde $\\sum\\binom{n}{k}^{2}=\\binom{2n}{n}$.** Split $2n$ objects into two groups of $n$. Choosing $n$ objects means taking $k$ from the first group and $n-k$ from the second, in $\\binom{n}{k}\\binom{n}{n-k}=\\binom{n}{k}^{2}$ ways. Summing over $k$ by the sum rule gives $\\binom{2n}{n}$ ✓ $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Тождество «хоккейной клюшки»",
      "en": "The hockey stick identity"
     },
     "text": {
      "ru": "$$\\binom{r}{r}+\\binom{r+1}{r}+\\binom{r+2}{r}+\\dots+\\binom{n}{r}=\\binom{n+1}{r+1}.$$",
      "en": "$$\\binom{r}{r}+\\binom{r+1}{r}+\\binom{r+2}{r}+\\dots+\\binom{n}{r}=\\binom{n+1}{r+1}.$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Посчитаем двумя способами число подмножеств размера $r+1$ множества $\\left\\{1,2,\\dots,n+1\\right\\}$.\n\nСправа стоит ответ по определению: $\\binom{n+1}{r+1}$.\n\nСлева разобьём эти подмножества по **наибольшему** элементу. Если наибольший элемент равен $m+1$, то остальные $r$ элементов выбираются из $\\left\\{1,\\dots,m\\right\\}$, что можно сделать $\\binom{m}{r}$ способами. Значение $m$ пробегает от $r$ до $n$ (меньше $r$ невозможно). По правилу суммы получаем левую часть ✓ $\\blacksquare$\n\nНазвание объясняется видом этих клеток в треугольнике Паскаля: диагональ и одна клетка сбоку от неё образуют клюшку.",
      "en": "Count in two ways the $\\left(r+1\\right)$-subsets of $\\left\\{1,2,\\dots,n+1\\right\\}$.\n\nOn the right that is the definition: $\\binom{n+1}{r+1}$.\n\nOn the left, sort those subsets by their **largest** element. If the largest is $m+1$, the other $r$ elements come from $\\left\\{1,\\dots,m\\right\\}$, giving $\\binom{m}{r}$ choices, and $m$ runs from $r$ to $n$ (anything smaller is impossible). The sum rule gives the left side ✓ $\\blacksquare$\n\nThe name comes from the shape of those cells in the triangle of Pascal: a diagonal plus one cell beside it looks like a hockey stick."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Вычислите $1+2+3+\\dots+n$ и $1\\cdot2+2\\cdot3+\\dots+\\left(n-1\\right)n$ с помощью тождества хоккейной клюшки.",
      "en": "Use the hockey stick identity to evaluate $1+2+\\dots+n$ and $1\\cdot2+2\\cdot3+\\dots+\\left(n-1\\right)n$."
     },
     "steps": {
      "ru": [
       "Заметим, что $k=\\binom{k}{1}$. Значит $$1+2+\\dots+n=\\sum_{k=1}^{n}\\binom{k}{1}=\\binom{n+1}{2}=\\frac{n\\left(n+1\\right)}{2} \\quad\\checkmark$$",
       "Далее $\\left(k-1\\right)k=2\\binom{k}{2}$, поэтому $$\\sum_{k=2}^{n}\\left(k-1\\right)k=2\\sum_{k=2}^{n}\\binom{k}{2}=2\\binom{n+1}{3}=\\frac{\\left(n-1\\right)n\\left(n+1\\right)}{3} .$$",
       "Проверка при $n=3$: $1\\cdot2+2\\cdot3=8$, а формула даёт $\\dfrac{2\\cdot3\\cdot4}{3}=8$ ✓",
       "Тот же приём даёт и $\\sum k^{2}$: достаточно записать $k^{2}=2\\binom{k}{2}+\\binom{k}{1}$."
      ],
      "en": [
       "Note $k=\\binom{k}{1}$, so $$1+2+\\dots+n=\\sum_{k=1}^{n}\\binom{k}{1}=\\binom{n+1}{2}=\\frac{n\\left(n+1\\right)}{2} \\quad\\checkmark$$",
       "Next $\\left(k-1\\right)k=2\\binom{k}{2}$, hence $$\\sum_{k=2}^{n}\\left(k-1\\right)k=2\\binom{n+1}{3}=\\frac{\\left(n-1\\right)n\\left(n+1\\right)}{3} .$$",
       "Check at $n=3$: $1\\cdot2+2\\cdot3=8$ and the formula gives $\\dfrac{2\\cdot3\\cdot4}{3}=8$ ✓",
       "The same trick gives $\\sum k^{2}$: just write $k^{2}=2\\binom{k}{2}+\\binom{k}{1}$."
      ]
     },
     "ans": {
      "ru": "$\\dfrac{n\\left(n+1\\right)}{2}$ и $\\dfrac{\\left(n-1\\right)n\\left(n+1\\right)}{3}$.",
      "en": "$\\dfrac{n\\left(n+1\\right)}{2}$ and $\\dfrac{\\left(n-1\\right)n\\left(n+1\\right)}{3}$."
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "**Как доказывать комбинаторные тождества.** Есть три пути.\n\n1. **Двойной подсчёт**: придумать множество, которое обе части считают по-разному. Самый красивый и самый надёжный способ.\n2. **Биекция**: построить взаимно однозначное соответствие между двумя множествами.\n3. **Алгебра**: расписать факториалы или сравнить коэффициенты в подходящем произведении многочленов.\n\nЕсли тождество выглядит так, будто оно «должно что-то означать», ищите первый путь.",
      "en": "**How to prove a combinatorial identity.** There are three routes.\n\n1. **Double counting**: invent a set that both sides count differently. The prettiest and the most reliable.\n2. **Bijection**: build a one-to-one correspondence between two sets.\n3. **Algebra**: expand the factorials, or compare coefficients in a suitable product of polynomials.\n\nIf an identity looks as though it ought to *mean* something, look for the first route."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Шары и перегородки",
    "en": "Stars and bars"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Раздача одинаковых предметов",
      "en": "Handing out identical objects"
     },
     "text": {
      "ru": "Число способов раздать $n$ одинаковых предметов $k$ различным людям (кому-то может не достаться ничего) равно $$\\binom{n+k-1}{k-1}.$$ Если каждому должно достаться хотя бы по одному, ответ равен $\\dbinom{n-1}{k-1}$.",
      "en": "The number of ways to give $n$ identical objects to $k$ distinct people (some may get none) is $$\\binom{n+k-1}{k-1}.$$ If everyone must get at least one, the answer is $\\dbinom{n-1}{k-1}$."
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 380 120\" role=\"img\" aria-label=\"Stars and bars\"><circle class=\"pt\" cx=\"40\" cy=\"70\" r=\"6\"/><circle class=\"pt\" cx=\"66\" cy=\"70\" r=\"6\"/><circle class=\"pt\" cx=\"92\" cy=\"70\" r=\"6\"/><circle class=\"pt\" cx=\"118\" cy=\"70\" r=\"6\"/><circle class=\"pt\" cx=\"144\" cy=\"70\" r=\"6\"/><circle class=\"pt\" cx=\"170\" cy=\"70\" r=\"6\"/><circle class=\"pt\" cx=\"196\" cy=\"70\" r=\"6\"/><circle class=\"pt\" cx=\"222\" cy=\"70\" r=\"6\"/><circle class=\"pt\" cx=\"248\" cy=\"70\" r=\"6\"/><circle class=\"pt\" cx=\"274\" cy=\"70\" r=\"6\"/><circle class=\"pt\" cx=\"300\" cy=\"70\" r=\"6\"/><circle class=\"pt\" cx=\"326\" cy=\"70\" r=\"6\"/><path class=\"lnc\" d=\"M140 46 V94\"/><path class=\"lnc\" d=\"M244 46 V94\"/><text class=\"sm\" x=\"76\" y=\"112\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"192\" y=\"112\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"300\" y=\"112\" text-anchor=\"middle\">4</text></svg>",
     "cap": {
      "ru": "Двенадцать одинаковых конфет и две перегородки: раздача трём детям по $4$ конфеты.",
      "en": "Twelve identical sweets and two bars: a distribution of $4$ each to three children."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Случай «хотя бы по одному».** Выложим $n$ предметов в ряд. Между ними $n-1$ промежутков. Чтобы разбить ряд на $k$ непустых частей, надо выбрать $k-1$ промежутков, куда поставить перегородки: $\\binom{n-1}{k-1}$ способов. Каждому разбиению отвечает ровно одна раздача, и наоборот.\n\n**Общий случай.** Теперь части могут быть пустыми, поэтому перегородки разрешено ставить рядом. Удобно считать так: выложим в ряд $n$ предметов **и** $k-1$ перегородок — всего $n+k-1$ объектов, — и выберем, какие из мест займут перегородки: $\\binom{n+k-1}{k-1}$ способов. $\\blacksquare$\n\n**Связь между случаями.** Второй сводится к первому подстановкой: выдав сначала каждому по одному предмету, останется раздать $n-k$ предметов уже без ограничений.",
      "en": "**The \"at least one\" case.** Lay the $n$ objects in a row. There are $n-1$ gaps between them. To split the row into $k$ non-empty parts, choose $k-1$ gaps for the bars: $\\binom{n-1}{k-1}$ ways. Each split corresponds to exactly one distribution and back.\n\n**The general case.** Now parts may be empty, so bars may stand next to each other. Count like this: lay out $n$ objects **and** $k-1$ bars in a row — $n+k-1$ items in all — and choose which places the bars occupy: $\\binom{n+k-1}{k-1}$ ways. $\\blacksquare$\n\n**The link between the two.** The second reduces to the first by giving everyone one object first, leaving $n-k$ objects to hand out with no restriction."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Та же формула отвечает на вопрос: сколько решений в **неотрицательных** целых числах имеет уравнение $$x_1+x_2+\\dots+x_k=n\\ ?$$ Ответ: $\\dbinom{n+k-1}{k-1}$. А в **натуральных** — $\\dbinom{n-1}{k-1}$. Это ровно та задача, с которой мы встречались в теме о последовательностях.",
      "en": "The same formula answers: how many solutions in **non-negative** integers has $$x_1+x_2+\\dots+x_k=n\\ ?$$ The answer is $\\dbinom{n+k-1}{k-1}$; in **positive** integers it is $\\dbinom{n-1}{k-1}$. This is exactly the question met in the sequences topic."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Сколькими способами можно разложить $10$ одинаковых конфет между четырьмя детьми, если кому-то может не достаться ничего?",
      "en": "In how many ways can $10$ identical sweets be shared among four children if some may get none?"
     },
     "steps": {
      "ru": [
       "Здесь $n=10$ предметов и $k=4$ получателя.",
       "По формуле $$\\binom{n+k-1}{k-1}=\\binom{13}{3}.$$",
       "$$\\binom{13}{3}=\\frac{13\\cdot12\\cdot11}{3\\cdot2\\cdot1}=\\frac{1716}{6}=286 .$$"
      ],
      "en": [
       "Here $n=10$ objects and $k=4$ recipients.",
       "The formula gives $$\\binom{n+k-1}{k-1}=\\binom{13}{3}.$$",
       "$$\\binom{13}{3}=\\frac{13\\cdot12\\cdot11}{3\\cdot2\\cdot1}=\\frac{1716}{6}=286 .$$"
      ]
     },
     "ans": {
      "ru": "$286$ способов.",
      "en": "$286$ ways."
     }
    },
    {
     "t": "p",
     "text": {
      "ru": "Ещё одна классическая задача, сводящаяся к сочетаниям, — **пути по клеткам**. Сколько кратчайших путей ведёт из левого нижнего угла прямоугольника $m\\times n$ в правый верхний, если разрешено идти только вправо и вверх?",
      "en": "Another classic that reduces to combinations is **lattice paths**. How many shortest paths lead from the bottom-left corner of an $m\\times n$ rectangle to the top-right one if only right and up steps are allowed?"
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 340 250\" role=\"img\" aria-label=\"A monotone lattice path\"><path class=\"dsh\" d=\"M40 30 V210\"/><path class=\"dsh\" d=\"M100 30 V210\"/><path class=\"dsh\" d=\"M160 30 V210\"/><path class=\"dsh\" d=\"M220 30 V210\"/><path class=\"dsh\" d=\"M280 30 V210\"/><path class=\"dsh\" d=\"M40 30 H280\"/><path class=\"dsh\" d=\"M40 90 H280\"/><path class=\"dsh\" d=\"M40 150 H280\"/><path class=\"dsh\" d=\"M40 210 H280\"/><path class=\"lnc\" d=\"M40 210 H100 V150 H220 V90 H280 V30\"/><circle class=\"pt\" cx=\"40\" cy=\"210\" r=\"4\"/><circle class=\"ptc\" cx=\"280\" cy=\"30\" r=\"4\"/></svg>",
     "cap": {
      "ru": "Каждый путь — это последовательность из $m$ шагов вправо и $n$ шагов вверх; путей ровно $\\binom{m+n}{n}$.",
      "en": "Each path is a sequence of $m$ right steps and $n$ up steps; there are exactly $\\binom{m+n}{n}$ of them."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Любой такой путь состоит ровно из $m+n$ шагов, из которых $m$ — вправо и $n$ — вверх (иначе в нужный угол не попасть). Путь полностью определяется тем, **на каких местах** в этой последовательности стоят шаги вверх. Выбрать $n$ мест из $m+n$ можно $\\binom{m+n}{n}$ способами, и разным выборам отвечают разные пути. $\\blacksquare$\n\nНа рисунке $m=4$, $n=3$, поэтому путей $\\binom{7}{3}=35$.",
      "en": "Any such path consists of exactly $m+n$ steps, $m$ of them right and $n$ up (otherwise it misses the corner). A path is determined completely by **which positions** in the sequence hold the up steps. Choosing $n$ positions out of $m+n$ can be done in $\\binom{m+n}{n}$ ways, and different choices give different paths. $\\blacksquare$\n\nIn the figure $m=4$ and $n=3$, so there are $\\binom{7}{3}=35$ paths."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Включения и исключения",
    "en": "Inclusion and exclusion"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Формула включений-исключений",
      "en": "The inclusion–exclusion formula"
     },
     "text": {
      "ru": "Для двух множеств $$|A\\cup B|=|A|+|B|-|A\\cap B| ,$$ для трёх $$|A\\cup B\\cup C|=|A|+|B|+|C|-|A\\cap B|-|B\\cap C|-|C\\cap A|+|A\\cap B\\cap C| .$$ В общем случае складываются все одиночные, вычитаются все парные, прибавляются все тройные, и так далее — со знаком, чередующимся по числу множеств.",
      "en": "For two sets $$|A\\cup B|=|A|+|B|-|A\\cap B| ,$$ and for three $$|A\\cup B\\cup C|=|A|+|B|+|C|-|A\\cap B|-|B\\cap C|-|C\\cap A|+|A\\cap B\\cap C| .$$ In general, add all single sets, subtract all pairs, add all triples, and so on, with the sign alternating by the number of sets."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Проверим, что каждый элемент объединения посчитан ровно один раз. Пусть элемент принадлежит ровно $m$ из трёх множеств, где $1\\le m\\le3$.\n\nВ одиночных слагаемых он посчитан $\\binom m1$ раз, в парных — $\\binom m2$ раз (с минусом), в тройных — $\\binom m3$ раз. Итого его вклад равен $$\\binom m1-\\binom m2+\\binom m3 .$$ Но по формуле знакопеременной суммы $$\\binom m0-\\binom m1+\\binom m2-\\binom m3=0\\quad\\Longrightarrow\\quad \\binom m1-\\binom m2+\\binom m3=\\binom m0=1 .$$ Значит вклад каждого элемента равен единице — что и требовалось. $\\blacksquare$",
      "en": "Check that each element of the union is counted exactly once. Suppose an element belongs to exactly $m$ of the three sets, $1\\le m\\le3$.\n\nAmong the single terms it is counted $\\binom m1$ times, among the pairs $\\binom m2$ times (with a minus), among the triples $\\binom m3$ times. Its total contribution is $$\\binom m1-\\binom m2+\\binom m3 .$$ But the alternating sum formula gives $$\\binom m0-\\binom m1+\\binom m2-\\binom m3=0\\quad\\Longrightarrow\\quad \\binom m1-\\binom m2+\\binom m3=\\binom m0=1 .$$ So each element contributes exactly one — as required. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Сколько чисел от $1$ до $1000$ не делится ни на $2$, ни на $3$, ни на $5$?",
      "en": "How many numbers from $1$ to $1000$ are divisible by none of $2$, $3$, $5$?"
     },
     "steps": {
      "ru": [
       "Пусть $A$, $B$, $C$ — множества чисел, кратных $2$, $3$, $5$ соответственно.",
       "Одиночные: $|A|=500$, $|B|=\\lfloor1000/3\\rfloor=333$, $|C|=200$.",
       "Парные: кратные $6$ — $166$, кратные $10$ — $100$, кратные $15$ — $66$.",
       "Тройные: кратные $30$ — $33$.",
       "$$|A\\cup B\\cup C|=500+333+200-166-100-66+33=734 .$$",
       "Не делится ни на одно: $1000-734=266$."
      ],
      "en": [
       "Let $A$, $B$, $C$ be the sets of multiples of $2$, $3$, $5$.",
       "Singles: $|A|=500$, $|B|=\\lfloor1000/3\\rfloor=333$, $|C|=200$.",
       "Pairs: multiples of $6$ — $166$; of $10$ — $100$; of $15$ — $66$.",
       "Triple: multiples of $30$ — $33$.",
       "$$|A\\cup B\\cup C|=500+333+200-166-100-66+33=734 .$$",
       "Divisible by none: $1000-734=266$."
      ]
     },
     "ans": {
      "ru": "$266$ чисел.",
      "en": "$266$ numbers."
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Обратите внимание на приём: считать «ни одного из свойств» почти всегда проще **через дополнение** — сначала посчитать объединение, потом вычесть из общего числа. Это верно и для многих других задач: если условие звучит как «хотя бы один», часто выгоднее посчитать «ни одного».",
      "en": "Note the move: counting \"none of the properties\" is almost always easier **through the complement** — count the union first, then subtract from the total. The same applies elsewhere: when a condition reads \"at least one\", it is often cheaper to count \"none\"."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Биекции, двойной подсчёт и рекуррентные схемы",
    "en": "Bijections, double counting and recursive schemes"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Принцип биекции",
      "en": "The bijection principle"
     },
     "text": {
      "ru": "Если между конечными множествами $X$ и $Y$ существует взаимно однозначное соответствие, то $\\left|X\\right|=\\left|Y\\right|$. Поэтому трудную задачу подсчёта можно заменить лёгкой, если построить между ними биекцию.",
      "en": "If there is a one-to-one correspondence between finite sets $X$ and $Y$ then $\\left|X\\right|=\\left|Y\\right|$. So a hard counting problem may be replaced by an easy one whenever a bijection between them is built."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Пример: вывод формулы «шаров и перегородок» биекцией.** Требуется найти число способов раздать $k$ одинаковых конфет $n$ детям (кому-то может не достаться).\n\nЗакодируем раздачу строкой из $k$ звёздочек и $n-1$ палочек: звёздочки — конфеты, палочки — границы между детьми. Например, при $n=3$, $k=4$ строка $\\star\\star\\mid\\ \\mid\\star\\star$ означает «двое первому, ноль второму, двое третьему».\n\nСоответствие «раздача ↔ строка» взаимно однозначно: по строке раздача восстанавливается однозначно, и наоборот ✓\n\nОстаётся посчитать строки. Всего позиций $k+\\left(n-1\\right)$, и надо выбрать, какие $k$ из них займут звёздочки: $$\\binom{n+k-1}{k} \\quad\\checkmark\\qquad\\blacksquare$$\n\nТрудная задача превратилась в стандартное сочетание — в этом и состоит сила биекций.",
      "en": "**An example: stars and bars by a bijection.** We want the number of ways to hand $k$ identical sweets to $n$ children (some may get none).\n\nEncode a distribution as a string of $k$ stars and $n-1$ bars: stars are sweets, bars separate the children. For $n=3$, $k=4$ the string $\\star\\star\\mid\\ \\mid\\star\\star$ means \"two to the first, none to the second, two to the third\".\n\nThe correspondence between distributions and strings is one-to-one: each string reconstructs its distribution and vice versa ✓\n\nIt remains to count strings. There are $k+\\left(n-1\\right)$ positions and we choose which $k$ hold stars: $$\\binom{n+k-1}{k} \\quad\\checkmark\\qquad\\blacksquare$$\n\nA hard problem became a standard combination — that is the power of bijections."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Формула включений и исключений",
      "en": "The inclusion–exclusion formula"
     },
     "text": {
      "ru": "Для конечных множеств $A_1,\\dots,A_n$ $$\\left|A_1\\cup\\dots\\cup A_n\\right|=\\sum_i\\left|A_i\\right|-\\sum_{i<j}\\left|A_i\\cap A_j\\right|+\\sum_{i<j<k}\\left|A_i\\cap A_j\\cap A_k\\right|-\\dots+\\left(-1\\right)^{\\,n-1}\\left|A_1\\cap\\dots\\cap A_n\\right| .$$",
      "en": "For finite sets $A_1,\\dots,A_n$ $$\\left|A_1\\cup\\dots\\cup A_n\\right|=\\sum_i\\left|A_i\\right|-\\sum_{i<j}\\left|A_i\\cap A_j\\right|+\\sum_{i<j<k}\\left|A_i\\cap A_j\\cap A_k\\right|-\\dots+\\left(-1\\right)^{\\,n-1}\\left|A_1\\cap\\dots\\cap A_n\\right| .$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Проверим, что **каждый элемент** объединения посчитан справа ровно один раз.\n\nПусть элемент $x$ принадлежит ровно $m\\ge1$ из множеств $A_i$. Тогда в сумме одиночных слагаемых он учтён $\\binom{m}{1}$ раз, в сумме попарных пересечений — $\\binom{m}{2}$ раз, и вообще в сумме $j$-кратных пересечений — $\\binom{m}{j}$ раз.\n\nЗначит его суммарный вклад в правую часть равен $$\\binom{m}{1}-\\binom{m}{2}+\\binom{m}{3}-\\dots+\\left(-1\\right)^{\\,m-1}\\binom{m}{m}.$$\n\nПо знакопеременному тождеству $\\sum_{j=0}^{m}\\left(-1\\right)^{j}\\binom{m}{j}=0$, откуда $$\\sum_{j=1}^{m}\\left(-1\\right)^{\\,j-1}\\binom{m}{j}=\\binom{m}{0}=1 .$$\n\nИтак вклад равен $1$ — ровно столько, сколько нужно ✓ Элементы вне объединения не входят ни в одно слагаемое $\\blacksquare$",
      "en": "Check that **every element** of the union is counted exactly once on the right.\n\nSuppose $x$ lies in exactly $m\\ge1$ of the sets. Then it is counted $\\binom{m}{1}$ times among the single terms, $\\binom{m}{2}$ times among the pairwise intersections, and generally $\\binom{m}{j}$ times among the $j$-fold intersections.\n\nSo its total contribution to the right side is $$\\binom{m}{1}-\\binom{m}{2}+\\dots+\\left(-1\\right)^{\\,m-1}\\binom{m}{m}.$$\n\nThe alternating identity $\\sum_{j=0}^{m}\\left(-1\\right)^{j}\\binom{m}{j}=0$ turns this into $$\\sum_{j=1}^{m}\\left(-1\\right)^{\\,j-1}\\binom{m}{j}=\\binom{m}{0}=1 .$$\n\nThe contribution is $1$ — exactly right ✓ Elements outside the union appear in no term at all $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Число беспорядков",
      "en": "The number of derangements"
     },
     "text": {
      "ru": "Число перестановок $n$ объектов, при которых ни один объект не остаётся на своём месте, равно $$D_n=n!\\left(1-\\frac1{1!}+\\frac1{2!}-\\frac1{3!}+\\dots+\\frac{\\left(-1\\right)^{n}}{n!}\\right).$$ При больших $n$ доля таких перестановок стремится к $\\dfrac1e\\approx0{,}368$.",
      "en": "The number of permutations of $n$ objects leaving no object in its own place is $$D_n=n!\\left(1-\\frac1{1!}+\\frac1{2!}-\\frac1{3!}+\\dots+\\frac{\\left(-1\\right)^{n}}{n!}\\right).$$ For large $n$ the proportion of such permutations tends to $\\dfrac1e\\approx0.368$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Пусть $A_i$ — множество перестановок, оставляющих объект $i$ на месте. Нас интересует число перестановок вне объединения всех $A_i$, то есть $$D_n=n!-\\left|A_1\\cup\\dots\\cup A_n\\right| .$$\n\nПересечение любых $j$ множеств $A_i$ состоит из перестановок, фиксирующих $j$ выбранных объектов; остальные $n-j$ переставляются как угодно, значит его размер равен $\\left(n-j\\right)!$. Таких пересечений $\\binom{n}{j}$.\n\nПо формуле включений и исключений $$\\left|A_1\\cup\\dots\\cup A_n\\right|=\\sum_{j=1}^{n}\\left(-1\\right)^{\\,j-1}\\binom{n}{j}\\left(n-j\\right)! .$$\n\nПодставим и перенесём знак: $$D_n=\\sum_{j=0}^{n}\\left(-1\\right)^{j}\\binom{n}{j}\\left(n-j\\right)! =\\sum_{j=0}^{n}\\left(-1\\right)^{j}\\frac{n!}{j!} ,$$ поскольку $\\binom{n}{j}\\left(n-j\\right)!=\\dfrac{n!}{j!}$. Вынеся $n!$, получаем требуемое ✓ $\\blacksquare$\n\nСкобка — начальный отрезок ряда для $e^{-1}$, отсюда и предел.",
      "en": "Let $A_i$ be the set of permutations fixing the object $i$. We want the permutations outside the union: $$D_n=n!-\\left|A_1\\cup\\dots\\cup A_n\\right| .$$\n\nThe intersection of any $j$ of the $A_i$ consists of the permutations fixing $j$ chosen objects; the other $n-j$ move freely, so its size is $\\left(n-j\\right)!$, and there are $\\binom{n}{j}$ such intersections.\n\nInclusion–exclusion gives $$\\left|A_1\\cup\\dots\\cup A_n\\right|=\\sum_{j=1}^{n}\\left(-1\\right)^{\\,j-1}\\binom{n}{j}\\left(n-j\\right)! .$$\n\nSubstituting and absorbing the sign, $$D_n=\\sum_{j=0}^{n}\\left(-1\\right)^{j}\\binom{n}{j}\\left(n-j\\right)! =\\sum_{j=0}^{n}\\left(-1\\right)^{j}\\frac{n!}{j!} ,$$ since $\\binom{n}{j}\\left(n-j\\right)!=\\dfrac{n!}{j!}$. Factoring out $n!$ gives the claim ✓ $\\blacksquare$\n\nThe bracket is the beginning of the series for $e^{-1}$, whence the limit."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Пять писем разложили по пяти конвертам наугад. Сколькими способами могло оказаться, что ни одно письмо не попало в свой конверт?",
      "en": "Five letters are put into five envelopes at random. In how many ways can it happen that no letter is in its own envelope?"
     },
     "steps": {
      "ru": [
       "Это в точности $D_5$.",
       "$$D_5=5!\\left(1-1+\\frac12-\\frac16+\\frac1{24}-\\frac1{120}\\right)=120\\cdot\\frac{44}{120}=44 .$$",
       "Полезно знать первые значения: $D_1=0$, $D_2=1$, $D_3=2$, $D_4=9$, $D_5=44$.",
       "Вероятность такого события равна $\\dfrac{44}{120}\\approx0{,}367$ — уже почти $\\dfrac1e$ ✓"
      ],
      "en": [
       "This is exactly $D_5$.",
       "$$D_5=5!\\left(1-1+\\frac12-\\frac16+\\frac1{24}-\\frac1{120}\\right)=120\\cdot\\frac{44}{120}=44 .$$",
       "The first values are worth knowing: $D_1=0$, $D_2=1$, $D_3=2$, $D_4=9$, $D_5=44$.",
       "The probability of this event is $\\dfrac{44}{120}\\approx0.367$ — already almost $\\dfrac1e$ ✓"
      ]
     },
     "ans": {
      "ru": "$44$ способа.",
      "en": "$44$ ways."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Числа Каталана",
      "en": "The Catalan numbers"
     },
     "text": {
      "ru": "Число правильных скобочных последовательностей из $n$ пар скобок равно $$C_n=\\frac1{n+1}\\binom{2n}{n}.$$ Эти же числа считают: количество способов разбить выпуклый $\\left(n+2\\right)$-угольник диагоналями на треугольники, количество двоичных деревьев с $n$ вершинами, количество путей из $\\left(0,0\\right)$ в $\\left(n,n\\right)$ шагами вправо и вверх, не поднимающихся выше диагонали.",
      "en": "The number of balanced strings of $n$ pairs of brackets is $$C_n=\\frac1{n+1}\\binom{2n}{n}.$$ The same numbers count: the triangulations of a convex $\\left(n+2\\right)$-gon by diagonals, the binary trees on $n$ nodes, and the lattice paths from $\\left(0,0\\right)$ to $\\left(n,n\\right)$ by unit right and up steps that never rise above the diagonal."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Воспользуемся **принципом отражения**.\n\nЗакодируем скобочную последовательность путём: открывающая скобка — шаг вправо, закрывающая — шаг вверх. Всего путей из $\\left(0,0\\right)$ в $\\left(n,n\\right)$ ровно $\\binom{2n}{n}$: надо выбрать, какие $n$ из $2n$ шагов идут вправо.\n\nПоследовательность **неправильна**, если в какой-то момент закрывающих скобок стало больше, чем открывающих, то есть путь пересёк диагональ и коснулся прямой $y=x+1$.\n\nВозьмём первый такой момент и **отразим** относительно прямой $y=x+1$ весь остаток пути. Конец $\\left(n,n\\right)$ перейдёт в точку $\\left(n-1,n+1\\right)$. Это соответствие обратимо: отразив обратно от первого касания, восстанавливаем исходный путь. Значит неправильных путей ровно столько, сколько всех путей в $\\left(n-1,n+1\\right)$, то есть $\\binom{2n}{n-1}$.\n\nОтсюда $$C_n=\\binom{2n}{n}-\\binom{2n}{n-1}=\\binom{2n}{n}\\left(1-\\frac{n}{n+1}\\right)=\\frac1{n+1}\\binom{2n}{n} \\quad\\checkmark\\qquad\\blacksquare$$\n\n(Использовано $\\binom{2n}{n-1}=\\dfrac{n}{n+1}\\binom{2n}{n}$, что проверяется прямо по формуле факториалов.)",
      "en": "Use the **reflection principle**.\n\nEncode a bracket string as a path: an opening bracket is a step right, a closing one a step up. There are exactly $\\binom{2n}{n}$ paths from $\\left(0,0\\right)$ to $\\left(n,n\\right)$: choose which $n$ of the $2n$ steps go right.\n\nA string is **unbalanced** if at some moment the closing brackets outnumber the opening ones, i.e. the path crosses the diagonal and touches the line $y=x+1$.\n\nTake the first such moment and **reflect** the rest of the path in the line $y=x+1$. The endpoint $\\left(n,n\\right)$ becomes $\\left(n-1,n+1\\right)$. The map is reversible: reflecting back from the first touch restores the original path. So the bad paths are exactly as many as all paths to $\\left(n-1,n+1\\right)$, namely $\\binom{2n}{n-1}$.\n\nHence $$C_n=\\binom{2n}{n}-\\binom{2n}{n-1}=\\binom{2n}{n}\\left(1-\\frac{n}{n+1}\\right)=\\frac1{n+1}\\binom{2n}{n} \\quad\\checkmark\\qquad\\blacksquare$$\n\n(We used $\\binom{2n}{n-1}=\\dfrac{n}{n+1}\\binom{2n}{n}$, immediate from the factorial formula.)"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Первые числа Каталана: $1,1,2,5,14,42,132,429,1430,4862$. Если в олимпиадной задаче ответ на маленьких случаях выглядит как $1,2,5,14$ — почти наверняка перед вами числа Каталана, и стоит искать биекцию со скобочными последовательностями.",
      "en": "The first Catalan numbers are $1,1,2,5,14,42,132,429,1430,4862$. If the small cases of an olympiad problem come out as $1,2,5,14$, you are almost certainly looking at Catalan numbers — go and find the bijection with bracket strings."
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
    "ru": "Сколько трёхзначных чисел можно составить из цифр $1,2,3,4,5$, если цифры не повторяются? А если повторяться можно?",
    "en": "How many three-digit numbers can be made from the digits $1,2,3,4,5$ with no repetition? And with repetition allowed?"
   },
   "hint": {
    "ru": "Правило произведения в обоих случаях.",
    "en": "The product rule in both cases."
   },
   "sol": {
    "ru": "**Без повторений.** Первую цифру выбираем $5$ способами, вторую — $4$, третью — $3$: $$5\\cdot4\\cdot3=60 .$$\n\n**С повторениями.** На каждом из трёх мест независимо $5$ вариантов: $$5^{3}=125 .$$\n\n**Ответ:** $60$ и $125$.",
    "en": "**Without repetition.** The first digit in $5$ ways, the second in $4$, the third in $3$: $$5\\cdot4\\cdot3=60 .$$\n\n**With repetition.** Each of the three places has $5$ options independently: $$5^{3}=125 .$$\n\n**Answer:** $60$ and $125$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Сколькими способами можно выбрать команду из трёх человек из класса в $10$ учеников? А если в команде надо ещё назначить капитана?",
    "en": "In how many ways can a team of three be chosen from a class of $10$? And if the team must also name a captain?"
   },
   "hint": {
    "ru": "Сначала сочетания, потом умножьте на выбор капитана.",
    "en": "Combinations first, then multiply by the choice of captain."
   },
   "sol": {
    "ru": "**Команда.** Порядок не важен, поэтому это сочетания: $$\\binom{10}{3}=\\frac{10\\cdot9\\cdot8}{3\\cdot2\\cdot1}=120 .$$\n\n**С капитаном.** Сначала выбираем команду ($120$ способов), затем среди трёх выбираем капитана ($3$ способа): $$120\\cdot3=360 .$$\n\n*Проверка другим путём:* сначала капитан ($10$ способов), потом двое остальных из девяти ($\\binom92=36$): $10\\cdot36=360$ ✓\n\n**Ответ:** $120$ и $360$.",
    "en": "**The team.** Order does not matter, so these are combinations: $$\\binom{10}{3}=\\frac{10\\cdot9\\cdot8}{3\\cdot2\\cdot1}=120 .$$\n\n**With a captain.** Choose the team ($120$ ways), then the captain among the three ($3$ ways): $$120\\cdot3=360 .$$\n\n*Check the other way round:* the captain first ($10$ ways), then two others from nine ($\\binom92=36$): $10\\cdot36=360$ ✓\n\n**Answer:** $120$ and $360$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Сколько диагоналей у выпуклого двенадцатиугольника? Выведите общую формулу для $n$-угольника.",
    "en": "How many diagonals has a convex dodecagon? Derive the general formula for an $n$-gon."
   },
   "hint": {
    "ru": "Посчитайте все отрезки между вершинами и вычтите стороны.",
    "en": "Count all segments between vertices and subtract the sides."
   },
   "sol": {
    "ru": "Отрезков, соединяющих пары вершин, всего $\\dbinom n2$. Из них $n$ штук — стороны, остальные диагонали: $$D=\\binom n2-n=\\frac{n(n-1)}{2}-n=\\frac{n(n-1)-2n}{2}=\\frac{n(n-3)}{2}.$$\n\nПри $n=12$: $$D=\\frac{12\\cdot9}{2}=54 .$$\n\n**Проверка на малых случаях.** Треугольник: $\\tfrac{3\\cdot0}{2}=0$ ✓ Четырёхугольник: $\\tfrac{4\\cdot1}{2}=2$ ✓ Пятиугольник: $\\tfrac{5\\cdot2}{2}=5$ ✓\n\n**Ответ:** $54$ диагонали; в общем случае $\\dfrac{n(n-3)}{2}$.",
    "en": "The segments joining pairs of vertices number $\\dbinom n2$. Of these $n$ are sides, the rest diagonals: $$D=\\binom n2-n=\\frac{n(n-1)}{2}-n=\\frac{n(n-1)-2n}{2}=\\frac{n(n-3)}{2}.$$\n\nAt $n=12$: $$D=\\frac{12\\cdot9}{2}=54 .$$\n\n**Check on small cases.** Triangle: $\\tfrac{3\\cdot0}{2}=0$ ✓ Quadrilateral: $\\tfrac{4\\cdot1}{2}=2$ ✓ Pentagon: $\\tfrac{5\\cdot2}{2}=5$ ✓\n\n**Answer:** $54$ diagonals; in general $\\dfrac{n(n-3)}{2}$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Сколькими способами можно рассадить пятерых человек в ряд на пяти стульях? А если двое из них обязательно должны сидеть рядом?",
    "en": "In how many ways can five people be seated in a row of five chairs? And if two of them must sit next to each other?"
   },
   "hint": {
    "ru": "Склейте двоих в один блок.",
    "en": "Glue the two into a single block."
   },
   "sol": {
    "ru": "**Без ограничений.** Это перестановки пяти предметов: $$5!=120 .$$\n\n**С условием «рядом».** Склеим двоих в один блок; тогда переставляем $4$ объекта (блок и трое остальных): $4!=24$ способа. Внутри блока двое могут сидеть в двух порядках: $2!=2$. По правилу произведения $$24\\cdot2=48 .$$\n\n**Ответ:** $120$ и $48$.\n\n*Побочный вывод:* способов, где эти двое **не** рядом, ровно $120-48=72$.",
    "en": "**No restriction.** These are permutations of five objects: $$5!=120 .$$\n\n**With the \"adjacent\" condition.** Glue the two into one block; then $4$ objects are permuted (the block and the other three): $4!=24$ ways. Inside the block the two can sit in $2!=2$ orders. By the product rule $$24\\cdot2=48 .$$\n\n**Answer:** $120$ and $48$.\n\n*A by-product:* the number of seatings where those two are **not** adjacent is $120-48=72$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Сколько существует пятизначных чисел, у которых все цифры нечётные?",
    "en": "How many five-digit numbers have all their digits odd?"
   },
   "hint": {
    "ru": "Нечётных цифр пять; ноль среди них не встречается.",
    "en": "There are five odd digits, and zero is not among them."
   },
   "sol": {
    "ru": "Нечётные цифры: $1,3,5,7,9$ — их пять.\n\nВажный момент: ноль нечётной цифрой не является, поэтому ограничение «первая цифра не ноль» выполняется автоматически, и все пять мест равноправны.\n\nПо правилу произведения $$5^{5}=3125 .$$\n\n**Ответ:** $3125$ чисел.",
    "en": "The odd digits are $1,3,5,7,9$ — five of them.\n\nA point worth noting: zero is not an odd digit, so the rule \"the leading digit is not zero\" holds automatically and all five places are alike.\n\nBy the product rule $$5^{5}=3125 .$$\n\n**Answer:** $3125$ numbers."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Сколько подмножеств у множества из $n$ элементов (включая пустое и само множество)? Докажите ответ двумя способами.",
    "en": "How many subsets has a set of $n$ elements (counting the empty one and the whole set)? Prove the answer in two ways."
   },
   "hint": {
    "ru": "Первый способ — по каждому элементу; второй — по размеру подмножества.",
    "en": "One way is element by element; the other is by the size of the subset."
   },
   "sol": {
    "ru": "**Способ 1: по элементам.** Про каждый из $n$ элементов независимо принимаем решение — включать его в подмножество или нет. Это $n$ независимых выборов по $2$ варианта, значит по правилу произведения подмножеств $$2^{n}.$$\n\n**Способ 2: по размеру.** Подмножеств размера $k$ ровно $\\dbinom nk$. Складывая по всем размерам, получаем $$\\binom n0+\\binom n1+\\dots+\\binom nn .$$\n\n**Вывод.** Оба способа считают одно и то же множество, поэтому $$\\sum_{k=0}^{n}\\binom nk=2^{n} . \\qquad\\blacksquare$$\n\n*Проверка при $n=3$:* $1+3+3+1=8=2^{3}$ ✓",
    "en": "**Way 1: element by element.** For each of the $n$ elements decide independently whether to include it. That is $n$ independent choices with $2$ options each, so by the product rule there are $$2^{n}$$ subsets.\n\n**Way 2: by size.** There are exactly $\\dbinom nk$ subsets of size $k$. Summing over the sizes gives $$\\binom n0+\\binom n1+\\dots+\\binom nn .$$\n\n**Conclusion.** Both ways count the same collection, so $$\\sum_{k=0}^{n}\\binom nk=2^{n} . \\qquad\\blacksquare$$\n\n*Check at $n=3$:* $1+3+3+1=8=2^{3}$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Сколькими способами можно выбрать команду из четырёх человек из десяти, если двое конкретных участников не хотят быть в одной команде?",
    "en": "In how many ways can a team of four be chosen from ten if two particular people refuse to be on the same team?"
   },
   "hint": {
    "ru": "Проще посчитать «плохие» команды и вычесть.",
    "en": "It is easier to count the \"bad\" teams and subtract."
   },
   "sol": {
    "ru": "**Всего команд.** $$\\binom{10}{4}=\\frac{10\\cdot9\\cdot8\\cdot7}{4\\cdot3\\cdot2\\cdot1}=210 .$$\n\n**Плохие команды** — те, где присутствуют оба конфликтующих участника. Они уже занимают два места, а оставшиеся два человека выбираются из восьми: $$\\binom{8}{2}=28 .$$\n\n**Ответ.** $$210-28=182 .$$\n\n*Проверка прямым счётом:* команды, где нет ни одного из двоих, — $\\binom84=70$; где ровно один из двоих — $2\\cdot\\binom83=2\\cdot56=112$. Сумма $70+112=182$ ✓",
    "en": "**All teams.** $$\\binom{10}{4}=\\frac{10\\cdot9\\cdot8\\cdot7}{4\\cdot3\\cdot2\\cdot1}=210 .$$\n\n**Bad teams** are those containing both of the two. They fill two places, and the other two members come from the remaining eight: $$\\binom{8}{2}=28 .$$\n\n**Answer.** $$210-28=182 .$$\n\n*Check by direct count:* teams with neither of the two — $\\binom84=70$; with exactly one of them — $2\\cdot\\binom83=2\\cdot56=112$. The sum is $70+112=182$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Сколькими способами можно расставить на шахматной доске $8\\times8$ восемь ладей так, чтобы никакие две не били друг друга?",
    "en": "In how many ways can eight rooks be placed on an $8\\times8$ chessboard so that no two attack each other?"
   },
   "hint": {
    "ru": "В каждой строке ровно одна ладья; какой столбец она занимает?",
    "en": "Each row holds exactly one rook; which column does it take?"
   },
   "sol": {
    "ru": "Ладьи бьют по строкам и столбцам, поэтому в каждой строке стоит не более одной ладьи. Ладей восемь и строк восемь, значит **ровно по одной в каждой строке**.\n\nТеперь опишем расстановку набором номеров столбцов: в первой строке ладья стоит в столбце $c_1$, во второй — в $c_2$, и так далее. Условие «не бьют по столбцам» означает, что все $c_i$ различны.\n\nЗначит расстановки — это в точности перестановки чисел $1,\\dots,8$, и их $$8!=40\\,320 .$$\n\n**Ответ:** $40\\,320$ способов.\n\n*Замечание.* Если ладьи неразличимы, ответ тот же: мы считали позиции, а не «кто где стоит». Для доски $n\\times n$ ответ равен $n!$.",
    "en": "Rooks attack along rows and columns, so each row holds at most one rook. There are eight rooks and eight rows, hence **exactly one in each row**.\n\nDescribe a placement by the column numbers: the rook in row one stands in column $c_1$, in row two in column $c_2$, and so on. \"No two share a column\" means all the $c_i$ are different.\n\nSo the placements are exactly the permutations of $1,\\dots,8$, and there are $$8!=40\\,320 .$$\n\n**Answer:** $40\\,320$ ways.\n\n*Remark.* If the rooks are indistinguishable the answer is the same: we counted positions, not \"who stands where\". For an $n\\times n$ board the answer is $n!$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Сколько прямоугольников (со сторонами по линиям сетки) можно найти на шахматной доске $8\\times8$?",
    "en": "How many rectangles (with sides along the grid lines) can be found on an $8\\times8$ chessboard?"
   },
   "hint": {
    "ru": "Прямоугольник задаётся двумя вертикальными и двумя горизонтальными линиями.",
    "en": "A rectangle is determined by two vertical and two horizontal lines."
   },
   "sol": {
    "ru": "Доска $8\\times8$ ограничена $9$ вертикальными и $9$ горизонтальными линиями сетки.\n\nЛюбой прямоугольник однозначно задаётся выбором **двух** вертикальных линий (его левой и правой сторон) и **двух** горизонтальных (нижней и верхней). Обратно, любая такая пара пар даёт прямоугольник.\n\nПо правилу произведения $$\\binom92\\cdot\\binom92=36\\cdot36=1296 .$$\n\n**Ответ:** $1296$ прямоугольников.\n\n*Побочный счёт:* квадратов среди них $$1^{2}+2^{2}+\\dots+8^{2}=\\frac{8\\cdot9\\cdot17}{6}=204 .$$",
    "en": "An $8\\times8$ board is bounded by $9$ vertical and $9$ horizontal grid lines.\n\nEvery rectangle is determined uniquely by choosing **two** vertical lines (its left and right sides) and **two** horizontal ones (bottom and top). Conversely any such pair of pairs gives a rectangle.\n\nBy the product rule $$\\binom92\\cdot\\binom92=36\\cdot36=1296 .$$\n\n**Answer:** $1296$ rectangles.\n\n*A side count:* the squares among them number $$1^{2}+2^{2}+\\dots+8^{2}=\\frac{8\\cdot9\\cdot17}{6}=204 .$$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Сколько существует четырёхзначных чисел, в записи которых есть хотя бы одна цифра $7$?",
    "en": "How many four-digit numbers contain at least one digit $7$?"
   },
   "hint": {
    "ru": "Считайте через дополнение.",
    "en": "Count through the complement."
   },
   "sol": {
    "ru": "**Всего четырёхзначных чисел.** От $1000$ до $9999$, то есть $$9\\cdot10\\cdot10\\cdot10=9000 .$$\n\n**Чисел без семёрки.** Первая цифра: не ноль и не семь, значит $8$ вариантов. Остальные три: любые, кроме семёрки, — по $9$ вариантов: $$8\\cdot9^{3}=8\\cdot729=5832 .$$\n\n**Ответ.** $$9000-5832=3168 .$$\n\n*Почему через дополнение.* Прямой счёт «хотя бы одна семёрка» потребовал бы формулы включений-исключений по четырём позициям; счёт «ни одной» — одно умножение.",
    "en": "**All four-digit numbers.** From $1000$ to $9999$, that is $$9\\cdot10\\cdot10\\cdot10=9000 .$$\n\n**Numbers with no seven.** The leading digit is neither zero nor seven: $8$ options. Each of the other three is anything but seven: $9$ options: $$8\\cdot9^{3}=8\\cdot729=5832 .$$\n\n**Answer.** $$9000-5832=3168 .$$\n\n*Why the complement.* Counting \"at least one seven\" directly would need inclusion–exclusion over four positions; counting \"none\" is a single multiplication."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите комбинаторно тождества $$\\binom nk=\\binom{n}{n-k}\\qquad\\text{и}\\qquad \\binom nk+\\binom{n}{k+1}=\\binom{n+1}{k+1}.$$",
    "en": "Prove combinatorially the identities $$\\binom nk=\\binom{n}{n-k}\\qquad\\text{and}\\qquad \\binom nk+\\binom{n}{k+1}=\\binom{n+1}{k+1}.$$"
   },
   "hint": {
    "ru": "Первое — соответствие «выбранные ↔ оставленные»; второе — разбор по одному отмеченному элементу.",
    "en": "The first is the \"chosen ↔ left behind\" correspondence; the second splits on one marked element."
   },
   "sol": {
    "ru": "**Первое тождество.** Каждому набору из $k$ выбранных предметов сопоставим набор из $n-k$ **невыбранных**. Это соответствие взаимно однозначно: по выбранным однозначно восстанавливаются невыбранные и наоборот. Значит наборов размера $k$ ровно столько же, сколько наборов размера $n-k$: $$\\binom nk=\\binom{n}{n-k}. \\qquad\\square$$\n\n**Второе тождество.** Посчитаем число способов выбрать $k+1$ предмет из $n+1$. Отметим один предмет и назовём его особым; все выборки разбиваются на два непересекающихся класса.\n\n*Особый взят.* Тогда остальные $k$ предметов выбираются из $n$ обычных: $\\dbinom nk$ способов.\n\n*Особый не взят.* Тогда все $k+1$ выбираются из $n$ обычных: $\\dbinom{n}{k+1}$ способов.\n\nКлассы не пересекаются и покрывают всё, поэтому по правилу суммы $$\\binom{n+1}{k+1}=\\binom nk+\\binom{n}{k+1}. \\qquad\\blacksquare$$\n\n*Замечание.* Второе тождество и есть закон построения треугольника Паскаля: каждое число равно сумме двух соседей сверху.",
    "en": "**First identity.** To each set of $k$ chosen objects associate the set of the $n-k$ **not** chosen. This is a bijection: the chosen determine the unchosen and back. So there are as many sets of size $k$ as of size $n-k$: $$\\binom nk=\\binom{n}{n-k}. \\qquad\\square$$\n\n**Second identity.** Count the ways to choose $k+1$ objects out of $n+1$. Mark one object as special; the choices fall into two disjoint classes.\n\n*The special one is taken.* Then the other $k$ come from the $n$ ordinary ones: $\\dbinom nk$ ways.\n\n*It is not taken.* Then all $k+1$ come from the $n$ ordinary ones: $\\dbinom{n}{k+1}$ ways.\n\nThe classes are disjoint and exhaust everything, so the sum rule gives $$\\binom{n+1}{k+1}=\\binom nk+\\binom{n}{k+1}. \\qquad\\blacksquare$$\n\n*Remark.* The second identity is exactly the building law of Pascal’s triangle: each entry is the sum of its two upstairs neighbours."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Сколькими способами можно пройти по клеткам из левого нижнего угла прямоугольника $5\\times4$ в правый верхний, двигаясь только вправо и вверх? А если обязательно нужно пройти через центральный узел $(2,2)$?",
    "en": "In how many ways can one go from the bottom-left corner of a $5\\times4$ rectangle to the top-right one, moving only right and up? And if the path must pass through the node $(2,2)$?"
   },
   "hint": {
    "ru": "Путь — это слово из букв «вправо» и «вверх».",
    "en": "A path is a word made of the letters \"right\" and \"up\"."
   },
   "sol": {
    "ru": "**Все пути.** Любой путь состоит из $5$ шагов вправо и $4$ шагов вверх, всего $9$ шагов. Путь определяется тем, на каких из девяти мест стоят шаги вверх: $$\\binom94=\\frac{9\\cdot8\\cdot7\\cdot6}{4\\cdot3\\cdot2\\cdot1}=126 .$$\n\n**Через узел $(2,2)$.** Разобьём путь на две независимые части.\n\n*От $(0,0)$ до $(2,2)$:* два шага вправо и два вверх, значит $\\dbinom42=6$ путей.\n\n*От $(2,2)$ до $(5,4)$:* три шага вправо и два вверх, значит $\\dbinom52=10$ путей.\n\nПо правилу произведения $$6\\cdot10=60 .$$\n\n**Ответ:** $126$ всего и $60$ через данный узел.",
    "en": "**All paths.** Every path uses $5$ right steps and $4$ up steps, nine steps in all, and is determined by which of the nine places hold the up steps: $$\\binom94=\\frac{9\\cdot8\\cdot7\\cdot6}{4\\cdot3\\cdot2\\cdot1}=126 .$$\n\n**Through the node $(2,2)$.** Split the path into two independent halves.\n\n*From $(0,0)$ to $(2,2)$:* two right and two up steps, so $\\dbinom42=6$ paths.\n\n*From $(2,2)$ to $(5,4)$:* three right and two up steps, so $\\dbinom52=10$ paths.\n\nBy the product rule $$6\\cdot10=60 .$$\n\n**Answer:** $126$ in all, and $60$ through that node."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Сколько существует шестизначных чисел, сумма цифр которых равна $5$?",
    "en": "How many six-digit numbers have digit sum $5$?"
   },
   "hint": {
    "ru": "Первая цифра не ноль — вычтите из неё единицу и примените шары и перегородки.",
    "en": "The leading digit is non-zero — subtract one from it and use stars and bars."
   },
   "sol": {
    "ru": "Пусть цифры равны $d_1,\\dots,d_6$, причём $d_1\\ge1$ и $$d_1+d_2+\\dots+d_6=5 .$$\n\n**Убираем ограничение.** Положим $e_1=d_1-1\\ge0$, остальные $e_i=d_i$. Тогда $$e_1+e_2+\\dots+e_6=4,\\qquad e_i\\ge0 .$$\n\n**Считаем.** Число неотрицательных решений равно $$\\binom{4+6-1}{6-1}=\\binom95=\\binom94=126 .$$\n\n**Проверка на ограничение $d_i\\le9$.** Сумма всех цифр равна $5$, поэтому ни одна цифра не может превысить $5$ — условие «цифра не больше девяти» выполняется автоматически и ничего вычитать не нужно.\n\n**Ответ:** $126$ чисел.",
    "en": "Let the digits be $d_1,\\dots,d_6$ with $d_1\\ge1$ and $$d_1+d_2+\\dots+d_6=5 .$$\n\n**Remove the restriction.** Put $e_1=d_1-1\\ge0$ and $e_i=d_i$ otherwise. Then $$e_1+e_2+\\dots+e_6=4,\\qquad e_i\\ge0 .$$\n\n**Count.** The number of non-negative solutions is $$\\binom{4+6-1}{6-1}=\\binom95=\\binom94=126 .$$\n\n**Check the bound $d_i\\le9$.** The digits sum to $5$, so none can exceed $5$ — the \"at most nine\" condition holds automatically and nothing needs subtracting.\n\n**Answer:** $126$ numbers."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "В компании каждый пожал руку каждому ровно один раз, всего было $66$ рукопожатий. Сколько человек в компании?",
    "en": "In a group everybody shook hands with everybody else exactly once, making $66$ handshakes in all. How many people were there?"
   },
   "hint": {
    "ru": "Рукопожатие — это пара людей.",
    "en": "A handshake is a pair of people."
   },
   "sol": {
    "ru": "Каждое рукопожатие — это неупорядоченная пара людей, поэтому при $n$ участниках рукопожатий $$\\binom n2=\\frac{n(n-1)}{2}.$$\n\nРешаем уравнение $$\\frac{n(n-1)}{2}=66\\quad\\Longrightarrow\\quad n^{2}-n-132=0 .$$ Дискриминант $1+528=529=23^{2}$, корни $$n=\\frac{1\\pm23}{2}=12\\ \\text{или}\\ -11 .$$ Отрицательный корень отбрасываем.\n\n**Проверка:** $\\dfrac{12\\cdot11}{2}=66$ ✓\n\n**Ответ:** $12$ человек.",
    "en": "Each handshake is an unordered pair of people, so with $n$ participants there are $$\\binom n2=\\frac{n(n-1)}{2}$$ handshakes.\n\nSolve $$\\frac{n(n-1)}{2}=66\\quad\\Longrightarrow\\quad n^{2}-n-132=0 .$$ The discriminant is $1+528=529=23^{2}$ and the roots are $$n=\\frac{1\\pm23}{2}=12\\ \\text{or}\\ -11 ,$$ the negative one being discarded.\n\n**Check:** $\\dfrac{12\\cdot11}{2}=66$ ✓\n\n**Answer:** $12$ people."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Сколькими способами можно разбить группу из $8$ человек на $4$ пары?",
    "en": "In how many ways can a group of $8$ people be split into $4$ pairs?"
   },
   "hint": {
    "ru": "Считайте по очереди, начиная с человека с наименьшим номером.",
    "en": "Count step by step, starting from the person with the smallest number."
   },
   "sol": {
    "ru": "**Способ 1: по очереди.** Возьмём человека с наименьшим номером. Ему можно подобрать пару $7$ способами. Из оставшихся шести снова возьмём наименьшего — ему пара находится $5$ способами. Затем $3$ и наконец $1$. По правилу произведения $$7\\cdot5\\cdot3\\cdot1=105 .$$\n\nВажно, что мы каждый раз берём **фиксированного** человека (наименьшего из оставшихся) — тогда порядок пар не участвует в счёте и двойного учёта не возникает.\n\n**Способ 2: через факториалы.** Выстроим всех восьмерых в ряд ($8!$ способов) и объявим парами первых двух, следующих двух и так далее. Одно и то же разбиение получается многократно: пары можно переставить между собой ($4!$ способов) и внутри каждой пары поменять людей местами ($2^{4}$ способов). Значит $$\\frac{8!}{4!\\cdot2^{4}}=\\frac{40\\,320}{24\\cdot16}=\\frac{40\\,320}{384}=105\\ \\checkmark$$\n\n**Ответ:** $105$ способов. *В общем виде* для $2n$ человек ответ равен $(2n-1)!!=1\\cdot3\\cdot5\\cdots(2n-1)$.",
    "en": "**Way 1: step by step.** Take the person with the smallest number. A partner for them can be chosen in $7$ ways. Among the remaining six take the smallest again — a partner in $5$ ways. Then $3$, then $1$. By the product rule $$7\\cdot5\\cdot3\\cdot1=105 .$$\n\nThe point is that we always pick a **fixed** person (the smallest one left) — the order of the pairs then never enters the count and nothing is counted twice.\n\n**Way 2: through factorials.** Line all eight up ($8!$ ways) and declare the first two a pair, the next two a pair, and so on. Each splitting arises many times: the pairs may be permuted ($4!$ ways) and the two people inside each pair swapped ($2^{4}$ ways). So $$\\frac{8!}{4!\\cdot2^{4}}=\\frac{40\\,320}{24\\cdot16}=\\frac{40\\,320}{384}=105\\ \\checkmark$$\n\n**Answer:** $105$ ways. *In general* for $2n$ people the answer is $(2n-1)!!=1\\cdot3\\cdot5\\cdots(2n-1)$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите двойным подсчётом тождество $$\\sum_{k=0}^{n}k\\binom nk=n\\,2^{\\,n-1}.$$",
    "en": "Prove by double counting the identity $$\\sum_{k=0}^{n}k\\binom nk=n\\,2^{\\,n-1}.$$"
   },
   "hint": {
    "ru": "Считайте пары «подмножество и отмеченный в нём элемент».",
    "en": "Count pairs \"a subset together with one marked element of it\"."
   },
   "sol": {
    "ru": "Рассмотрим множество $X$ из $n$ элементов и посчитаем двумя способами количество **пар** вида $$\\bigl(S,\\ x\\bigr),\\qquad\\text{где }S\\subseteq X\\text{ и }x\\in S,$$ то есть «подмножество вместе с отмеченным элементом внутри него».\n\n**Первый способ: сначала подмножество.** Зафиксируем размер $k$. Подмножеств размера $k$ ровно $\\dbinom nk$, и в каждом можно отметить элемент $k$ способами. Складывая по всем размерам, получаем $$\\sum_{k=0}^{n}k\\binom nk .$$\n\n**Второй способ: сначала отмеченный элемент.** Выберем сперва элемент $x$ — это $n$ способов. Затем нужно выбрать остальную часть подмножества $S$ из оставшихся $n-1$ элементов: каждый из них независимо либо входит в $S$, либо нет, что даёт $2^{\\,n-1}$ вариантов. По правилу произведения пар $$n\\,2^{\\,n-1}.$$\n\n**Вывод.** Оба способа считают одно и то же множество пар, поэтому $$\\sum_{k=0}^{n}k\\binom nk=n\\,2^{\\,n-1}. \\qquad\\blacksquare$$\n\n*Проверка при $n=3$:* слева $0\\cdot1+1\\cdot3+2\\cdot3+3\\cdot1=0+3+6+3=12$; справа $3\\cdot4=12$ ✓",
    "en": "Take a set $X$ of $n$ elements and count in two ways the number of **pairs** $$\\bigl(S,\\ x\\bigr),\\qquad\\text{where }S\\subseteq X\\text{ and }x\\in S,$$ that is, \"a subset together with a marked element inside it\".\n\n**First way: the subset first.** Fix a size $k$. There are $\\dbinom nk$ subsets of that size, and in each the element can be marked in $k$ ways. Summing over the sizes gives $$\\sum_{k=0}^{n}k\\binom nk .$$\n\n**Second way: the marked element first.** Choose $x$ first — $n$ ways. Then the rest of $S$ is chosen from the remaining $n-1$ elements: each is independently in or out, giving $2^{\\,n-1}$ options. By the product rule the number of pairs is $$n\\,2^{\\,n-1}.$$\n\n**Conclusion.** Both ways count the same set of pairs, so $$\\sum_{k=0}^{n}k\\binom nk=n\\,2^{\\,n-1}. \\qquad\\blacksquare$$\n\n*Check at $n=3$:* the left side is $0\\cdot1+1\\cdot3+2\\cdot3+3\\cdot1=12$; the right side $3\\cdot4=12$ ✓"
   }
  },
  {
   "src": "Тождество Вандермонда / Vandermonde, classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите тождество Вандермонда $$\\sum_{k=0}^{r}\\binom mk\\binom{n}{r-k}=\\binom{m+n}{r},$$ и выведите из него частный случай $$\\sum_{k=0}^{n}\\binom nk^{2}=\\binom{2n}{n}.$$",
    "en": "Prove Vandermonde’s identity $$\\sum_{k=0}^{r}\\binom mk\\binom{n}{r-k}=\\binom{m+n}{r},$$ and deduce the special case $$\\sum_{k=0}^{n}\\binom nk^{2}=\\binom{2n}{n}.$$"
   },
   "hint": {
    "ru": "Разделите $m+n$ предметов на две группы и разберите случаи по числу взятых из первой.",
    "en": "Split the $m+n$ objects into two groups and split into cases by how many come from the first."
   },
   "sol": {
    "ru": "**Постановка.** Пусть в комнате $m$ мальчиков и $n$ девочек, и надо выбрать делегацию из $r$ человек. Посчитаем число способов двумя путями.\n\n**Первый способ.** Все $m+n$ человек равноправны, поэтому делегаций ровно $$\\binom{m+n}{r}.$$\n\n**Второй способ: разбор случаев.** Пусть в делегацию попало ровно $k$ мальчиков, где $k$ пробегает значения от $0$ до $r$. Тогда мальчиков выбираем $\\dbinom mk$ способами, а девочек — оставшихся $r-k$ человек — $\\dbinom{n}{r-k}$ способами. По правилу произведения в этом случае $\\dbinom mk\\dbinom{n}{r-k}$ делегаций.\n\nСлучаи с разными $k$ не пересекаются (число мальчиков определено однозначно) и покрывают все делегации, поэтому по правилу суммы $$\\sum_{k=0}^{r}\\binom mk\\binom{n}{r-k}=\\binom{m+n}{r}. \\qquad\\blacksquare$$\n\n*(Слагаемые с $k>m$ или $r-k>n$ равны нулю, потому что таких выборов не существует — формула это учитывает автоматически.)*\n\n**Частный случай.** Положим $m=n$ и $r=n$: $$\\sum_{k=0}^{n}\\binom nk\\binom{n}{n-k}=\\binom{2n}{n}.$$ По симметрии $\\dbinom{n}{n-k}=\\dbinom nk$, поэтому левая часть равна $\\displaystyle\\sum_{k=0}^{n}\\binom nk^{2}$, что и требовалось.\n\n*Проверка при $n=3$:* $1+9+9+1=20=\\dbinom63$ ✓",
    "en": "**The setting.** Suppose a room holds $m$ boys and $n$ girls, and a delegation of $r$ people is to be chosen. Count the ways twice.\n\n**First way.** All $m+n$ people are alike for this purpose, so there are $$\\binom{m+n}{r}$$ delegations.\n\n**Second way: cases.** Suppose exactly $k$ boys are chosen, where $k$ runs from $0$ to $r$. The boys can be chosen in $\\dbinom mk$ ways and the girls — the remaining $r-k$ people — in $\\dbinom{n}{r-k}$ ways. By the product rule this case gives $\\dbinom mk\\dbinom{n}{r-k}$ delegations.\n\nDifferent $k$ give disjoint cases (the number of boys is determined) covering every delegation, so the sum rule gives $$\\sum_{k=0}^{r}\\binom mk\\binom{n}{r-k}=\\binom{m+n}{r}. \\qquad\\blacksquare$$\n\n*(Terms with $k>m$ or $r-k>n$ vanish, since no such choice exists — the formula handles that automatically.)*\n\n**The special case.** Put $m=n$ and $r=n$: $$\\sum_{k=0}^{n}\\binom nk\\binom{n}{n-k}=\\binom{2n}{n}.$$ By symmetry $\\dbinom{n}{n-k}=\\dbinom nk$, so the left side is $\\displaystyle\\sum_{k=0}^{n}\\binom nk^{2}$, as required.\n\n*Check at $n=3$:* $1+9+9+1=20=\\dbinom63$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Сколько существует последовательностей из $n$ единиц и $n$ минус-единиц, у которых **все** частичные суммы неотрицательны? (Иначе: сколькими способами можно расставить $n$ открывающих и $n$ закрывающих скобок так, чтобы получилась правильная скобочная последовательность?)",
    "en": "How many sequences of $n$ ones and $n$ minus-ones have **all** partial sums non-negative? (Equivalently: in how many ways can $n$ opening and $n$ closing brackets be arranged into a correct bracket sequence?)"
   },
   "hint": {
    "ru": "Посчитайте «плохие» последовательности, отразив хвост после первого нарушения.",
    "en": "Count the \"bad\" sequences by reflecting the tail after the first violation."
   },
   "sol": {
    "ru": "**Всего последовательностей.** Расставить $n$ единиц среди $2n$ мест можно $\\dbinom{2n}{n}$ способами.\n\n**Плохие последовательности.** Назовём последовательность плохой, если в какой-то момент частичная сумма стала отрицательной. Рассмотрим **первый** такой момент — позицию $t$, на которой сумма впервые равна $-1$.\n\n**Приём отражения.** Заменим все члены на местах $1,\\dots,t$ на противоположные (единицы на минус-единицы и наоборот). Посмотрим, что стало с балансом. До отражения на первых $t$ местах сумма была $-1$; после отражения она стала $+1$. Общая сумма всей последовательности была $0$, значит стала $2$. Это означает, что в новой последовательности единиц на две больше, чем минус-единиц: $$n+1\\ \\text{единиц и}\\ n-1\\ \\text{минус-единиц}.$$\n\n**Это соответствие обратимо.** По любой последовательности из $n+1$ единиц и $n-1$ минус-единиц восстанавливается плохая: её частичная сумма в конце равна $+2>0$, поэтому найдётся первый момент, когда сумма равна $+1$; отразив начало до этого момента, получим исходную плохую последовательность. Значит соответствие взаимно однозначно, и плохих последовательностей ровно столько, сколько последовательностей из $n+1$ единиц и $n-1$ минус-единиц: $$\\binom{2n}{n+1}.$$\n\n**Ответ.** $$\\binom{2n}{n}-\\binom{2n}{n+1}=\\binom{2n}{n}\\left(1-\\frac{n}{n+1}\\right)=\\frac{1}{n+1}\\binom{2n}{n}.$$\n\nЗдесь мы воспользовались тем, что $$\\frac{\\binom{2n}{n+1}}{\\binom{2n}{n}}=\\frac{n!\\,n!}{(n+1)!\\,(n-1)!}=\\frac{n}{n+1}.$$\n\n**Ответ:** $C_n=\\dfrac{1}{n+1}\\dbinom{2n}{n}$ — это **числа Каталана**.\n\n*Первые значения:* $C_1=1$, $C_2=2$, $C_3=5$, $C_4=14$, $C_5=42$.\n\n*Проверка при $n=3$:* правильные скобочные последовательности длины $6$ — это $$((())),\\ (()()),\\ (())(),\\ ()(()),\\ ()()()$$ — ровно пять ✓",
    "en": "**All sequences.** Placing $n$ ones among $2n$ positions can be done in $\\dbinom{2n}{n}$ ways.\n\n**Bad sequences.** Call a sequence bad if at some moment a partial sum turns negative. Look at the **first** such moment — the position $t$ where the sum first equals $-1$.\n\n**The reflection trick.** Flip every term in positions $1,\\dots,t$ (ones become minus-ones and back). What happens to the balance? Before the flip the first $t$ terms summed to $-1$; afterwards they sum to $+1$. The whole sequence summed to $0$, so it now sums to $2$. That means the new sequence has two more ones than minus-ones: $$n+1\\ \\text{ones and}\\ n-1\\ \\text{minus-ones}.$$\n\n**The correspondence is reversible.** From any sequence of $n+1$ ones and $n-1$ minus-ones a bad one can be recovered: its total is $+2>0$, so there is a first moment when the partial sum equals $+1$; flipping the start up to that moment returns the original bad sequence. So the correspondence is a bijection, and the bad sequences number exactly as many as the sequences of $n+1$ ones and $n-1$ minus-ones: $$\\binom{2n}{n+1}.$$\n\n**Answer.** $$\\binom{2n}{n}-\\binom{2n}{n+1}=\\binom{2n}{n}\\left(1-\\frac{n}{n+1}\\right)=\\frac{1}{n+1}\\binom{2n}{n},$$ using $$\\frac{\\binom{2n}{n+1}}{\\binom{2n}{n}}=\\frac{n!\\,n!}{(n+1)!\\,(n-1)!}=\\frac{n}{n+1}.$$\n\n**Answer:** $C_n=\\dfrac{1}{n+1}\\dbinom{2n}{n}$ — the **Catalan numbers**.\n\n*First values:* $C_1=1$, $C_2=2$, $C_3=5$, $C_4=14$, $C_5=42$.\n\n*Check at $n=3$:* the correct bracket sequences of length $6$ are $$((())),\\ (()()),\\ (())(),\\ ()(()),\\ ()()()$$ — exactly five ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Сколько существует шестизначных чисел, в записи которых цифры идут в **строго возрастающем** порядке? А в нестрого возрастающем?",
    "en": "How many six-digit numbers have their digits in **strictly increasing** order? And in non-decreasing order?"
   },
   "hint": {
    "ru": "В строгом случае число полностью определяется набором цифр.",
    "en": "In the strict case the number is determined by the set of its digits."
   },
   "sol": {
    "ru": "**Строго возрастающие.** Цифры различны и идут по возрастанию, поэтому число полностью определяется **набором** своих цифр: порядок восстанавливается однозначно.\n\nЦифра ноль участвовать не может: она была бы наименьшей и оказалась бы первой, а старшая цифра не может быть нулём. Значит выбираем $6$ различных цифр из девяти ($1,\\dots,9$): $$\\binom96=\\binom93=\\frac{9\\cdot8\\cdot7}{6}=84 .$$\n\n**Нестрого возрастающие.** Теперь цифры могут повторяться, и число определяется тем, **сколько раз** встречается каждая из цифр $1,\\dots,9$ (ноль по-прежнему невозможен: он был бы первым). Обозначим через $x_i$ количество цифр $i$; тогда $$x_1+x_2+\\dots+x_9=6,\\qquad x_i\\ge0 .$$ По формуле шаров и перегородок число решений равно $$\\binom{6+9-1}{9-1}=\\binom{14}{8}=\\binom{14}{6}=3003 .$$\n\n**Ответ:** $84$ строго возрастающих и $3003$ нестрого возрастающих.\n\n*Замечание.* Первый ответ — это сочетания, второй — сочетания с повторениями. Разница между ними и есть разница между «выбрать набор» и «выбрать мультимножество».",
    "en": "**Strictly increasing.** The digits are distinct and increasing, so the number is determined completely by the **set** of its digits: the order is forced.\n\nThe digit zero cannot occur: it would be the smallest and hence first, but a leading digit cannot be zero. So we choose $6$ distinct digits out of nine ($1,\\dots,9$): $$\\binom96=\\binom93=\\frac{9\\cdot8\\cdot7}{6}=84 .$$\n\n**Non-decreasing.** Now digits may repeat, and the number is determined by **how many times** each of $1,\\dots,9$ occurs (zero is still impossible: it would come first). Writing $x_i$ for the number of copies of the digit $i$, $$x_1+x_2+\\dots+x_9=6,\\qquad x_i\\ge0 .$$ Stars and bars gives $$\\binom{6+9-1}{9-1}=\\binom{14}{8}=\\binom{14}{6}=3003 .$$\n\n**Answer:** $84$ strictly increasing and $3003$ non-decreasing.\n\n*Remark.* The first answer is combinations, the second combinations with repetition — the difference between choosing a set and choosing a multiset."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "В группе $40$ студентов: английский знают $25$, немецкий — $20$, французский — $15$; английский и немецкий — $12$, английский и французский — $8$, немецкий и французский — $6$, а все три языка — $4$ студента. Сколько студентов не знают ни одного из этих языков?",
    "en": "A group of $40$ students: $25$ know English, $20$ German, $15$ French; $12$ know English and German, $8$ English and French, $6$ German and French, and $4$ know all three. How many know none of the three languages?"
   },
   "hint": {
    "ru": "Формула включений-исключений для трёх множеств.",
    "en": "Inclusion–exclusion for three sets."
   },
   "sol": {
    "ru": "Обозначим через $A$, $H$, $\\Phi$ множества знающих английский, немецкий и французский.\n\nПо формуле включений-исключений $$|A\\cup H\\cup\\Phi|=|A|+|H|+|\\Phi|-|A\\cap H|-|A\\cap\\Phi|-|H\\cap\\Phi|+|A\\cap H\\cap\\Phi| .$$ Подставляем: $$25+20+15-12-8-6+4=38 .$$\n\nЗначит хотя бы один язык знают $38$ студентов, а не знают ни одного $$40-38=2 .$$\n\n**Ответ:** $2$ студента.\n\n*Проверка по частям.* Ровно три языка знают $4$ человека. Ровно два языка: по каждой паре надо вычесть тех, кто знает все три, — получаем $(12-4)+(8-4)+(6-4)=8+4+2=14$. Ровно один язык: например, только английский знают $25-12-8+4=9$ человек (вычли обе пары и вернули тройное пересечение, посчитанное дважды); аналогично только немецкий — $20-12-6+4=6$, только французский — $15-8-6+4=5$; всего $9+6+5=20$. Итог: $4+14+20=38$ ✓",
    "en": "Write $A$, $G$, $F$ for the sets of students knowing English, German and French.\n\nInclusion–exclusion gives $$|A\\cup G\\cup F|=|A|+|G|+|F|-|A\\cap G|-|A\\cap F|-|G\\cap F|+|A\\cap G\\cap F| ,$$ that is $$25+20+15-12-8-6+4=38 .$$\n\nSo $38$ students know at least one language, and $$40-38=2$$ know none.\n\n**Answer:** $2$ students.\n\n*Check by parts.* Exactly three languages: $4$ students. Exactly two: for each pair subtract those knowing all three, giving $(12-4)+(8-4)+(6-4)=8+4+2=14$. Exactly one: English only is $25-12-8+4=9$ (both pairs subtracted, the triple intersection added back once because it was removed twice); likewise German only is $20-12-6+4=6$ and French only $15-8-6+4=5$, so $9+6+5=20$. In total $4+14+20=38$ ✓"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Сколько всего двузначных чисел?",
    "en": "How many two-digit numbers are there?"
   },
   "hint": {
    "ru": "Первая цифра не может быть нулём.",
    "en": "The first digit cannot be zero."
   },
   "sol": {
    "ru": "Первая цифра выбирается из $1,\\dots,9$ — девять способов; вторая из $0,\\dots,9$ — десять способов.\n\nПо правилу произведения $$9\\cdot10=90 .$$\n\n**Проверка:** это числа от $10$ до $99$, их $99-10+1=90$ ✓\n\n**Ответ:** $90$.",
    "en": "The first digit is chosen from $1,\\dots,9$ — nine ways; the second from $0,\\dots,9$ — ten ways.\n\nBy the multiplication rule $$9\\cdot10=90 .$$\n\n**Check:** these are the numbers $10$ to $99$, and $99-10+1=90$ ✓\n\n**Answer:** $90$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Сколькими способами можно выбрать одну из $5$ рубашек и одни из $3$ брюк?",
    "en": "In how many ways can one choose one of $5$ shirts and one of $3$ pairs of trousers?"
   },
   "hint": {
    "ru": "Правило произведения.",
    "en": "The multiplication rule."
   },
   "sol": {
    "ru": "Выбор рубашки и выбор брюк независимы, поэтому по правилу произведения $$5\\cdot3=15 .$$\n\n**Ответ:** $15$.\n\n**Правило произведения:** если первый выбор делается $m$ способами, а второй (независимо от первого) $n$ способами, то вместе — $mn$ способами.",
    "en": "The two choices are independent, so by the multiplication rule $$5\\cdot3=15 .$$\n\n**Answer:** $15$.\n\n**The multiplication rule:** if the first choice can be made in $m$ ways and the second (independently) in $n$ ways, then together there are $mn$ ways."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Сколько различных «слов» можно составить, переставляя буквы слова «МИР»?",
    "en": "How many different \"words\" can be made by rearranging the letters of \"МИР\"?"
   },
   "hint": {
    "ru": "Все буквы различны.",
    "en": "All the letters are distinct."
   },
   "sol": {
    "ru": "Все три буквы различны, значит речь о числе перестановок трёх объектов: $$3!=3\\cdot2\\cdot1=6 .$$\n\n**Выпишем их:** МИР, МРИ, ИМР, ИРМ, РМИ, РИМ ✓\n\n**Ответ:** $6$.",
    "en": "All three letters are different, so we count permutations of three objects: $$3!=3\\cdot2\\cdot1=6 .$$\n\n**Listing them:** МИР, МРИ, ИМР, ИРМ, РМИ, РИМ ✓\n\n**Answer:** $6$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Сколько чётных чисел среди $1,2,\\dots,100$?",
    "en": "How many even numbers are there among $1,2,\\dots,100$?"
   },
   "hint": {
    "ru": "Чётные — это $2k$.",
    "en": "The even ones are $2k$."
   },
   "sol": {
    "ru": "Чётные числа в этом промежутке — это $$2,\\ 4,\\ 6,\\ \\dots,\\ 100 ,$$ то есть $2k$ при $k=1,2,\\dots,50$.\n\nЗначит их ровно $50$.\n\n**Ответ:** $50$.\n\n**Приём.** Чтобы посчитать элементы арифметической прогрессии, поделите разность крайних на шаг и прибавьте единицу: $\\dfrac{100-2}{2}+1=50$ ✓",
    "en": "The even numbers here are $$2,\\ 4,\\ 6,\\ \\dots,\\ 100 ,$$ i.e. $2k$ for $k=1,2,\\dots,50$.\n\nSo there are exactly $50$.\n\n**Answer:** $50$.\n\n**Technique.** To count an arithmetic progression, divide the range by the step and add one: $\\dfrac{100-2}{2}+1=50$ ✓"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Из $8$ человек надо выбрать двоих дежурных. Сколькими способами?",
    "en": "Two people on duty are to be chosen from $8$. In how many ways?"
   },
   "hint": {
    "ru": "Порядок не важен — это сочетания.",
    "en": "The order does not matter — combinations."
   },
   "sol": {
    "ru": "Дежурные не различаются по ролям, значит порядок не важен: $$\\binom82=\\frac{8\\cdot7}{2}=28 .$$\n\n**Ответ:** $28$.\n\n**Сравните.** Если бы одного назначали старшим, порядок стал бы важен, и получилось бы $8\\cdot7=56$ — ровно вдвое больше.",
    "en": "The two roles are identical, so order does not matter: $$\\binom82=\\frac{8\\cdot7}{2}=28 .$$\n\n**Answer:** $28$.\n\n**Compare.** If one of them were made senior, order would matter and the count would be $8\\cdot7=56$ — exactly twice as many."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Сколько различных результатов может дать подбрасывание трёх монет?",
    "en": "How many different outcomes are possible when tossing three coins?"
   },
   "hint": {
    "ru": "У каждой монеты два исхода.",
    "en": "Each coin has two outcomes."
   },
   "sol": {
    "ru": "Каждая монета даёт два исхода независимо от остальных, поэтому $$2\\cdot2\\cdot2=2^{3}=8 .$$\n\n**Выпишем:** ООО, ООР, ОРО, ОРР, РОО, РОР, РРО, РРР ✓\n\n**Ответ:** $8$.\n\n**Обобщение:** для $n$ монет получится $2^{n}$ исходов — столько же, сколько подмножеств у множества из $n$ элементов.",
    "en": "Each coin gives two outcomes independently of the others, so $$2\\cdot2\\cdot2=2^{3}=8 .$$\n\n**Listing:** HHH, HHT, HTH, HTT, THH, THT, TTH, TTT ✓\n\n**Answer:** $8$.\n\n**Generalisation:** for $n$ coins there are $2^{n}$ outcomes — as many as the subsets of an $n$-element set."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Сколько четырёхзначных чисел можно составить из цифр $1,2,\\dots,9$ без повторений?",
    "en": "How many four-digit numbers can be made from the digits $1,2,\\dots,9$ without repetition?"
   },
   "hint": {
    "ru": "Каждая следующая цифра выбирается из оставшихся.",
    "en": "Each next digit is chosen from those left."
   },
   "sol": {
    "ru": "Первую цифру можно выбрать девятью способами, вторую — восемью (одна уже занята), третью — семью, четвёртую — шестью: $$9\\cdot8\\cdot7\\cdot6=3024 .$$\n\n**Ответ:** $3024$.\n\n**В обозначениях размещений:** $$A_9^{4}=\\frac{9!}{5!}=3024 \\quad\\checkmark$$\n\n**Заметьте:** нуля среди цифр нет, поэтому ограничения «первая цифра не ноль» не возникает.",
    "en": "The first digit can be chosen in nine ways, the second in eight (one is used), the third in seven, the fourth in six: $$9\\cdot8\\cdot7\\cdot6=3024 .$$\n\n**Answer:** $3024$.\n\n**In arrangement notation:** $$A_9^{4}=\\frac{9!}{5!}=3024 \\quad\\checkmark$$\n\n**Note:** zero is not among the digits, so no \"leading digit\" restriction arises."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Сколькими способами можно рассадить четырёх человек за круглым столом? (Рассадки, отличающиеся поворотом, считаются одинаковыми.)",
    "en": "In how many ways can four people be seated at a round table? (Seatings differing by a rotation count as the same.)"
   },
   "hint": {
    "ru": "Зафиксируйте одного человека.",
    "en": "Fix one person in place."
   },
   "sol": {
    "ru": "Посадим одного человека на любое место — этим мы «убираем» повороты, ведь любую рассадку можно повернуть так, чтобы он оказался именно там.\n\nОстальных троих рассаживаем по оставшимся местам произвольно: $$3!=6 .$$\n\n**Ответ:** $6$.\n\n**Общая формула:** для $n$ человек за круглым столом получается $(n-1)!$ рассадок.\n\n**Осторожно:** если стол можно ещё и перевернуть (например, речь об ожерелье из бусин), число снова уменьшается вдвое.",
    "en": "Seat one person anywhere — this removes the rotations, since any seating can be rotated to put that person there.\n\nThe other three fill the remaining seats freely: $$3!=6 .$$\n\n**Answer:** $6$.\n\n**General formula:** $n$ people at a round table give $(n-1)!$ seatings.\n\n**Careful:** if the arrangement can also be flipped over (a necklace of beads, say), the count halves again."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Сколько существует трёхбуквенных «слов» из букв алфавита, содержащего $26$ букв, если буквы не повторяются?",
    "en": "How many three-letter \"words\" can be made from a $26$-letter alphabet if letters do not repeat?"
   },
   "hint": {
    "ru": "Правило произведения с уменьшающимся выбором.",
    "en": "The multiplication rule with a shrinking pool."
   },
   "sol": {
    "ru": "Первую букву выбираем $26$ способами, вторую $25$, третью $24$: $$26\\cdot25\\cdot24=15\\,600 .$$\n\n**Ответ:** $15\\,600$.\n\n**Сравните с повторениями:** если буквы можно повторять, получилось бы $26^{3}=17\\,576$ — заметно больше.",
    "en": "The first letter can be chosen in $26$ ways, the second in $25$, the third in $24$: $$26\\cdot25\\cdot24=15\\,600 .$$\n\n**Answer:** $15\\,600$.\n\n**Compare with repetition allowed:** that would give $26^{3}=17\\,576$ — noticeably more."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Сколькими способами можно пройти из левого нижнего угла сетки $3\\times3$ в правый верхний, двигаясь только вправо и вверх по линиям сетки?",
    "en": "In how many ways can one go from the bottom-left corner of a $3\\times3$ grid to the top-right corner, moving only right and up along the grid lines?"
   },
   "hint": {
    "ru": "Каждый путь — последовательность из трёх «вправо» и трёх «вверх».",
    "en": "Each path is a sequence of three \"rights\" and three \"ups\"."
   },
   "sol": {
    "ru": "Любой путь состоит ровно из шести шагов: трёх шагов вправо и трёх вверх, в каком-то порядке. Путь полностью определяется тем, **на каких местах** стоят шаги вправо.\n\nЗначит число путей равно числу способов выбрать $3$ места из $6$: $$\\binom63=\\frac{6\\cdot5\\cdot4}{3\\cdot2\\cdot1}=20 .$$\n\n**Ответ:** $20$.\n\n**Общая формула:** для сетки $m\\times n$ получается $\\dbinom{m+n}{m}$ путей.\n\n**Проверка на маленьком случае:** для сетки $1\\times1$ формула даёт $\\binom21=2$ — действительно два пути ✓",
    "en": "Every path consists of exactly six steps: three to the right and three up, in some order. A path is determined by **which positions** carry the rightward steps.\n\nSo the number of paths is the number of ways to choose $3$ positions out of $6$: $$\\binom63=20 .$$\n\n**Answer:** $20$.\n\n**General formula:** an $m\\times n$ grid gives $\\dbinom{m+n}{m}$ paths.\n\n**Check on a small case:** for a $1\\times1$ grid the formula gives $\\binom21=2$ — indeed two paths ✓"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "На окружности отмечены $8$ точек. Сколько треугольников с вершинами в этих точках можно построить?",
    "en": "Eight points are marked on a circle. How many triangles have all their vertices among these points?"
   },
   "hint": {
    "ru": "Никакие три из них не лежат на одной прямой.",
    "en": "No three of them are collinear."
   },
   "sol": {
    "ru": "Треугольник задаётся тройкой вершин, а порядок вершин неважен: $$\\binom83=\\frac{8\\cdot7\\cdot6}{3\\cdot2\\cdot1}=56 .$$\n\nНикакие три точки окружности не лежат на одной прямой, поэтому каждая тройка действительно даёт невырожденный треугольник.\n\n**Ответ:** $56$.\n\n**Важная оговорка.** Если бы точки лежали как попало, из общего числа $\\binom83$ пришлось бы вычесть коллинеарные тройки.",
    "en": "A triangle is a set of three vertices, and the order does not matter: $$\\binom83=56 .$$\n\nNo three points of a circle are collinear, so every triple really gives a non-degenerate triangle.\n\n**Answer:** $56$.\n\n**An important caveat.** For points in general position one would have to subtract the collinear triples from $\\binom83$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Сколько трёхзначных чисел делится на $5$?",
    "en": "How many three-digit numbers are divisible by $5$?"
   },
   "hint": {
    "ru": "Они образуют арифметическую прогрессию.",
    "en": "They form an arithmetic progression."
   },
   "sol": {
    "ru": "Наименьшее трёхзначное кратное пяти — $100$, наибольшее — $995$. Они образуют арифметическую прогрессию с шагом $5$: $$100,\\ 105,\\ \\dots,\\ 995 .$$\n\nЧисло членов: $$\\frac{995-100}{5}+1=179+1=180 .$$\n\n**Ответ:** $180$.\n\n**Другой подсчёт.** Такие числа — это $5k$ при $20\\le k\\le199$, то есть $199-20+1=180$ ✓",
    "en": "The smallest three-digit multiple of five is $100$ and the largest $995$. They form an arithmetic progression of step $5$: $$100,\\ 105,\\ \\dots,\\ 995 .$$\n\nThe number of terms is $$\\frac{995-100}{5}+1=180 .$$\n\n**Answer:** $180$.\n\n**Another count.** They are $5k$ with $20\\le k\\le199$, i.e. $199-20+1=180$ ✓"
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Сколькими способами можно раздать $10$ одинаковых конфет троим детям (кому-то может не достаться ничего)?",
    "en": "In how many ways can $10$ identical sweets be given to three children (some may get none)?"
   },
   "hint": {
    "ru": "Метод «шаров и перегородок».",
    "en": "Stars and bars."
   },
   "sol": {
    "ru": "Изобразим конфеты десятью звёздочками и поставим между ними две перегородки, разделяющие доли трёх детей: $$\\star\\star\\mid\\star\\star\\star\\star\\star\\mid\\star\\star\\star $$ — эта картинка означает $2$, $5$ и $3$ конфеты.\n\nЛюбая расстановка $10$ звёздочек и $2$ перегородок в ряд из $12$ мест задаёт раздачу, и наоборот. Значит достаточно выбрать $2$ места под перегородки: $$\\binom{12}{2}=\\frac{12\\cdot11}{2}=66 .$$\n\n**Ответ:** $66$.\n\n**Общая формула:** число неотрицательных целых решений уравнения $x_1+\\dots+x_k=n$ равно $\\dbinom{n+k-1}{k-1}$.",
    "en": "Draw the sweets as ten stars and insert two bars separating the three children’s shares: $$\\star\\star\\mid\\star\\star\\star\\star\\star\\mid\\star\\star\\star $$ — this picture means $2$, $5$ and $3$ sweets.\n\nEvery arrangement of $10$ stars and $2$ bars in a row of $12$ places is a distribution, and vice versa. So we just choose the $2$ places for the bars: $$\\binom{12}{2}=66 .$$\n\n**Answer:** $66$.\n\n**General formula:** the number of non-negative integer solutions of $x_1+\\dots+x_k=n$ is $\\dbinom{n+k-1}{k-1}$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Из $6$ мужчин и $4$ женщин надо выбрать комиссию из $5$ человек, в которой ровно две женщины. Сколькими способами?",
    "en": "A committee of $5$ is to be chosen from $6$ men and $4$ women, with exactly two women. In how many ways?"
   },
   "hint": {
    "ru": "Выберите женщин и мужчин по отдельности.",
    "en": "Choose the women and the men separately."
   },
   "sol": {
    "ru": "Выбираем двух женщин из четырёх и троих мужчин из шести — эти выборы независимы: $$\\binom42\\cdot\\binom63=6\\cdot20=120 .$$\n\n**Ответ:** $120$.\n\n**Проверка здравым смыслом.** Всего комиссий из пяти человек — $\\binom{10}{5}=252$; наш ответ должен быть меньше, и он меньше ✓\n\n**Полезное упражнение:** посчитайте, сколько комиссий содержат **хотя бы одну** женщину; ответ $252-\\binom65=252-6=246$.",
    "en": "Choose two women out of four and three men out of six — independent choices: $$\\binom42\\cdot\\binom63=6\\cdot20=120 .$$\n\n**Answer:** $120$.\n\n**Sanity check.** There are $\\binom{10}{5}=252$ committees of five in total, so our answer should be smaller — and it is ✓\n\n**A useful exercise:** count the committees with **at least one** woman; the answer is $252-\\binom65=246$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Сколько различных перестановок букв слова «МАТЕМАТИКА»?",
    "en": "How many distinct rearrangements does the word \"МАТЕМАТИКА\" have?"
   },
   "hint": {
    "ru": "Некоторые буквы повторяются.",
    "en": "Some letters repeat."
   },
   "sol": {
    "ru": "В слове $10$ букв, среди них $$\\text{А}\\ \\text{— трижды},\\qquad \\text{М}\\ \\text{— дважды},\\qquad \\text{Т}\\ \\text{— дважды},$$ а буквы Е, И, К встречаются по одному разу.\n\nЕсли бы все буквы были различны, перестановок было бы $10!$. Но перестановки одинаковых букв между собой ничего не меняют, поэтому надо поделить: $$\\frac{10!}{3!\\cdot2!\\cdot2!}=\\frac{3\\,628\\,800}{6\\cdot2\\cdot2}=\\frac{3\\,628\\,800}{24}=151\\,200 .$$\n\n**Ответ:** $151\\,200$.\n\n**Общая формула:** для слова длины $n$, в котором буквы встречаются $k_1,k_2,\\dots$ раз, число перестановок равно $\\dfrac{n!}{k_1!\\,k_2!\\cdots}$.",
    "en": "The word has $10$ letters, among them $$\\text{А}\\ \\text{three times},\\qquad \\text{М}\\ \\text{twice},\\qquad \\text{Т}\\ \\text{twice},$$ while Е, И, К appear once each.\n\nIf all letters were distinct there would be $10!$ arrangements. But permuting identical letters changes nothing, so we divide: $$\\frac{10!}{3!\\cdot2!\\cdot2!}=\\frac{3\\,628\\,800}{24}=151\\,200 .$$\n\n**Answer:** $151\\,200$.\n\n**General formula:** for a word of length $n$ whose letters occur $k_1,k_2,\\dots$ times, the count is $\\dfrac{n!}{k_1!\\,k_2!\\cdots}$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Из $10$ человек выбирают двоих. Сколькими способами это можно сделать так, чтобы двое конкретных людей не были выбраны оба сразу?",
    "en": "Two people are chosen from $10$. In how many ways can this be done so that two particular people are not both chosen?"
   },
   "hint": {
    "ru": "Посчитайте все способы и вычтите «плохие».",
    "en": "Count everything and subtract the bad case."
   },
   "sol": {
    "ru": "**Всего** способов выбрать двоих: $$\\binom{10}{2}=45 .$$\n\n**«Плохих»** способов, когда выбраны именно эти двое, ровно один.\n\nЗначит подходящих $$45-1=44 .$$\n\n**Ответ:** $44$.\n\n**Приём «от противного».** Часто проще посчитать все варианты и вычесть запрещённые, чем перебирать разрешённые напрямую.",
    "en": "**In total** there are $$\\binom{10}{2}=45 $$ ways to choose two.\n\n**The bad case** — choosing exactly those two — occurs once.\n\nSo the answer is $$45-1=44 .$$\n\n**Answer:** $44$.\n\n**Complementary counting.** It is often easier to count everything and subtract the forbidden cases than to enumerate the allowed ones directly."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Сколько пятизначных чисел, у которых цифры идут в неубывающем порядке?",
    "en": "How many five-digit numbers have their digits in non-decreasing order?"
   },
   "hint": {
    "ru": "Первая цифра не ноль, значит все цифры не меньше единицы; это выбор мультимножества.",
    "en": "The leading digit is non-zero, so all digits are at least one; this is a multiset choice."
   },
   "sol": {
    "ru": "Пусть цифры числа — $d_1\\le d_2\\le\\dots\\le d_5$. Первая цифра не ноль, значит $d_1\\ge1$, а тогда и все остальные не меньше единицы.\n\nЗначит нам нужно выбрать **мультимножество** из $5$ цифр из набора $\\{1,2,\\dots,9\\}$ — порядок восстанавливается однозначно (по возрастанию).\n\n**Шары и перегородки.** Число мультимножеств размера $k$ из $n$ типов равно $$\\binom{n+k-1}{k} .$$ Здесь $n=9$, $k=5$: $$\\binom{13}{5}=1287 .$$\n\n**Ответ:** $1287$.\n\n**Проверка на маленьком случае.** Двузначных чисел с неубывающими цифрами должно быть $\\binom{10}{2}=45$: и правда, это пары $1\\le d_1\\le d_2\\le9$, то есть $9+8+\\dots+1=45$ ✓\n\n**Сравните** со **строго** возрастающими: там всё проще, $\\dbinom95=126$.",
    "en": "Let the digits be $d_1\\le d_2\\le\\dots\\le d_5$. The leading digit is non-zero, so $d_1\\ge1$, and hence all digits are at least one.\n\nSo we must choose a **multiset** of $5$ digits from $\\{1,2,\\dots,9\\}$ — the order is then forced (increasing).\n\n**Stars and bars.** The number of multisets of size $k$ from $n$ types is $$\\binom{n+k-1}{k} .$$ Here $n=9$, $k=5$: $$\\binom{13}{5}=1287 .$$\n\n**Answer:** $1287$.\n\n**Check on a small case.** Two-digit numbers with non-decreasing digits should number $\\binom{10}{2}=45$: indeed these are pairs $1\\le d_1\\le d_2\\le9$, i.e. $9+8+\\dots+1=45$ ✓\n\n**Compare** with **strictly** increasing digits: simply $\\dbinom95=126$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Четверо друзей сдали в гардероб четыре шляпы, а при выходе разобрали их случайно. Сколькими способами могло случиться, что никто не получил свою шляпу?",
    "en": "Four friends leave four hats in a cloakroom and pick them up at random. In how many ways can it happen that nobody gets their own hat?"
   },
   "hint": {
    "ru": "Это число беспорядков; посчитайте включениями и исключениями.",
    "en": "This is the derangement number; count by inclusion–exclusion."
   },
   "sol": {
    "ru": "Обозначим через $A_i$ множество перестановок, в которых $i$-й человек получил **свою** шляпу. Нам нужно число перестановок вне объединения всех $A_i$.\n\n**Считаем размеры.** Если зафиксировать, что $k$ конкретных человек получили свои шляпы, остальные $4-k$ шляп распределяются как угодно: $(4-k)!$ способов. Выбрать этих $k$ человек можно $\\binom4k$ способами.\n\n**Формула включений и исключений.** $$D_4=\\sum_{k=0}^{4}(-1)^{k}\\binom4k(4-k)!=24-4\\cdot6+6\\cdot2-4\\cdot1+1 .$$\n\nПосчитаем: $$24-24+12-4+1=9 .$$\n\n**Ответ:** $9$.\n\n**Проверка перебором** для трёх человек: $D_3=6-6+3-1=2$, и действительно из шести перестановок трёх элементов ровно две не имеют неподвижных точек ✓\n\n**Общая формула:** $$D_n=n!\\sum_{k=0}^{n}\\frac{(-1)^{k}}{k!}\\ \\approx\\ \\frac{n!}{e} ,$$ то есть примерно $37\\%$ всех перестановок — беспорядки.",
    "en": "Let $A_i$ be the set of permutations in which person $i$ gets their **own** hat. We want the permutations outside the union of all $A_i$.\n\n**The sizes.** Fixing $k$ specific people to get their own hats leaves the other $4-k$ hats free: $(4-k)!$ ways, and the $k$ people can be chosen in $\\binom4k$ ways.\n\n**Inclusion–exclusion.** $$D_4=\\sum_{k=0}^{4}(-1)^{k}\\binom4k(4-k)!=24-24+12-4+1=9 .$$\n\n**Answer:** $9$.\n\n**Check by hand** for three people: $D_3=6-6+3-1=2$, and indeed exactly two of the six permutations of three elements have no fixed point ✓\n\n**General formula:** $$D_n=n!\\sum_{k=0}^{n}\\frac{(-1)^{k}}{k!}\\ \\approx\\ \\frac{n!}{e} ,$$ so roughly $37\\%$ of all permutations are derangements."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Сколькими способами можно расставить трёх ладей на шахматной доске $8\\times8$ так, чтобы они не били друг друга?",
    "en": "In how many ways can three rooks be placed on an $8\\times8$ chessboard so that no two attack each other?"
   },
   "hint": {
    "ru": "Ладьи не бьют друг друга, если все они в разных строках и разных столбцах.",
    "en": "Rooks do not attack each other iff they occupy distinct rows and distinct columns."
   },
   "sol": {
    "ru": "Ладьи не бьют друг друга ровно тогда, когда никакие две не стоят в одной строке и никакие две — в одном столбце.\n\n**Способ 1: по шагам.** Выберем три строки: $\\binom83=56$ способов. Выберем три столбца: тоже $\\binom83=56$. Теперь надо сопоставить строкам столбцы — это перестановка трёх элементов, $3!=6$ способов. Итого $$56\\cdot56\\cdot6=18\\,816 .$$\n\n**Способ 2: последовательная расстановка.** Первую ладью ставим на любую из $64$ клеток; вторая не должна попасть в её строку и столбец — остаётся $7\\cdot7=49$ клеток; третья — $6\\cdot6=36$. Ладьи неразличимы, поэтому делим на $3!$: $$\\frac{64\\cdot49\\cdot36}{6}=\\frac{112\\,896}{6}=18\\,816 \\quad\\checkmark$$\n\n**Ответ:** $18\\,816$.\n\n**Сравните** с задачей про восемь ладей: там ответ $8!=40\\,320$ — расставить их можно только «по одной в каждой строке и каждом столбце».",
    "en": "Rooks are mutually non-attacking exactly when no two share a row and no two share a column.\n\n**Method 1: step by step.** Choose three rows: $\\binom83=56$ ways. Choose three columns: another $56$. Then match rows to columns — a permutation of three elements, $3!=6$ ways. In total $$56\\cdot56\\cdot6=18\\,816 .$$\n\n**Method 2: place them in turn.** The first rook goes on any of $64$ squares; the second must avoid its row and column, leaving $7\\cdot7=49$ squares; the third leaves $6\\cdot6=36$. The rooks are indistinguishable, so divide by $3!$: $$\\frac{64\\cdot49\\cdot36}{6}=18\\,816 \\quad\\checkmark$$\n\n**Answer:** $18\\,816$.\n\n**Compare** with the eight-rook problem, where the answer is $8!=40\\,320$ — one rook per row and per column."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Сколько чисел от $1$ до $1000$ не делятся ни на $2$, ни на $3$, ни на $5$?",
    "en": "How many numbers from $1$ to $1000$ are divisible by none of $2$, $3$, $5$?"
   },
   "hint": {
    "ru": "Формула включений и исключений.",
    "en": "Inclusion–exclusion."
   },
   "sol": {
    "ru": "Обозначим через $A$, $B$, $C$ множества чисел, кратных $2$, $3$, $5$ соответственно.\n\n**Размеры.** $$|A|=\\left\\lfloor\\frac{1000}{2}\\right\\rfloor=500,\\quad |B|=333,\\quad |C|=200 ;$$ $$|A\\cap B|=\\left\\lfloor\\frac{1000}{6}\\right\\rfloor=166,\\quad |A\\cap C|=100,\\quad |B\\cap C|=66 ;$$ $$|A\\cap B\\cap C|=\\left\\lfloor\\frac{1000}{30}\\right\\rfloor=33 .$$\n\n**Объединение.** $$|A\\cup B\\cup C|=500+333+200-166-100-66+33=734 .$$\n\n**Ответ.** Искомых чисел $$1000-734=266 .$$\n\n**Проверка через функцию Эйлера.** Доля чисел, взаимно простых с $30$, равна $$\\left(1-\\frac12\\right)\\left(1-\\frac13\\right)\\left(1-\\frac15\\right)=\\frac{4}{15} ,$$ и $\\dfrac{4}{15}\\cdot1000\\approx266{,}7$ — совпадает с точностью до округления ✓",
    "en": "Let $A$, $B$, $C$ be the sets of multiples of $2$, $3$, $5$.\n\n**Sizes.** $$|A|=500,\\quad |B|=333,\\quad |C|=200 ;$$ $$|A\\cap B|=166,\\quad |A\\cap C|=100,\\quad |B\\cap C|=66 ;$$ $$|A\\cap B\\cap C|=33 .$$\n\n**The union.** $$|A\\cup B\\cup C|=500+333+200-166-100-66+33=734 .$$\n\n**Answer.** The count is $$1000-734=266 .$$\n\n**Check via Euler’s function.** The density of numbers coprime to $30$ is $$\\left(1-\\frac12\\right)\\left(1-\\frac13\\right)\\left(1-\\frac15\\right)=\\frac{4}{15} ,$$ and $\\dfrac{4}{15}\\cdot1000\\approx266.7$ — matching up to rounding ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Сколько подмножеств множества $\\{1,2,\\dots,10\\}$ не содержат двух соседних чисел?",
    "en": "How many subsets of $\\{1,2,\\dots,10\\}$ contain no two consecutive numbers?"
   },
   "hint": {
    "ru": "Обозначьте ответ $a_n$ и разберите, входит ли в подмножество число $n$.",
    "en": "Call the answer $a_n$ and split by whether $n$ is in the subset."
   },
   "sol": {
    "ru": "Пусть $a_n$ — число подмножеств множества $\\{1,\\dots,n\\}$ без двух соседних элементов.\n\n**Рекуррентность.** Разберём два случая:\n\nчисло $n$ **не входит** — тогда остаётся любое подходящее подмножество из $\\{1,\\dots,n-1\\}$: $a_{n-1}$ штук;\n\nчисло $n$ **входит** — тогда $n-1$ входить не может, и остаётся подходящее подмножество из $\\{1,\\dots,n-2\\}$: $a_{n-2}$ штук.\n\nЗначит $$a_n=a_{n-1}+a_{n-2} .$$\n\n**Начальные значения.** $a_0=1$ (пустое множество), $a_1=2$ (пустое и $\\{1\\}$).\n\n**Считаем.** $$1,\\ 2,\\ 3,\\ 5,\\ 8,\\ 13,\\ 21,\\ 34,\\ 55,\\ 89,\\ 144 .$$\n\nЗначит $a_{10}=144$.\n\n**Ответ:** $144$.\n\n**Наблюдение.** Это числа Фибоначчи: $a_n=F_{n+2}$. Задача про «несоседние подмножества» — один из самых частых способов, которым Фибоначчи возникают в комбинаторике.",
    "en": "Let $a_n$ be the number of subsets of $\\{1,\\dots,n\\}$ with no two consecutive elements.\n\n**Recursion.** Split by cases:\n\nif $n$ is **not** in the subset, what remains is any valid subset of $\\{1,\\dots,n-1\\}$: $a_{n-1}$ of them;\n\nif $n$ **is** in it, then $n-1$ cannot be, leaving a valid subset of $\\{1,\\dots,n-2\\}$: $a_{n-2}$ of them.\n\nHence $$a_n=a_{n-1}+a_{n-2} .$$\n\n**Initial values.** $a_0=1$ (the empty set), $a_1=2$ (empty and $\\{1\\}$).\n\n**Computing.** $$1,\\ 2,\\ 3,\\ 5,\\ 8,\\ 13,\\ 21,\\ 34,\\ 55,\\ 89,\\ 144 .$$\n\nSo $a_{10}=144$.\n\n**Answer:** $144$.\n\n**Observation.** These are Fibonacci numbers: $a_n=F_{n+2}$. The \"no two consecutive\" problem is one of the commonest ways Fibonacci numbers appear in combinatorics."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Сколькими способами можно рассадить $8$ человек за круглым столом, если двое из них не хотят сидеть рядом?",
    "en": "In how many ways can $8$ people sit at a round table if two of them refuse to sit next to each other?"
   },
   "hint": {
    "ru": "Посчитайте все рассадки и вычтите те, где эти двое рядом.",
    "en": "Count all seatings and subtract those with the two together."
   },
   "sol": {
    "ru": "**Все рассадки.** За круглым столом $8$ человек рассаживаются $(8-1)!=5040$ способами.\n\n**«Плохие» рассадки.** Склеим двух непримиримых в один «блок». Тогда за столом окажется $7$ объектов, и их рассадок $(7-1)!=720$. Внутри блока двое могут поменяться местами — ещё множитель $2$: $$720\\cdot2=1440 .$$\n\n**Ответ.** $$5040-1440=3600 .$$\n\n**Проверка на маленьком случае.** Для трёх человек, двое из которых не хотят сидеть рядом: всего $(3-1)!=2$ рассадки, но за круглым столом из трёх мест любые двое сидят рядом, значит «плохих» $2\\cdot1\\cdot2/2=2$, и ответ $0$ — верно, ведь такое рассадить невозможно ✓",
    "en": "**All seatings.** Eight people at a round table: $(8-1)!=5040$ ways.\n\n**Bad seatings.** Glue the two irreconcilables into one block. Then there are $7$ objects at the table, giving $(7-1)!=720$ seatings, and the two can swap inside the block — a factor of $2$: $$720\\cdot2=1440 .$$\n\n**Answer.** $$5040-1440=3600 .$$\n\n**Check on a small case.** With three people, two of whom refuse to be adjacent: at a round table of three every pair is adjacent, so the answer must be $0$ — and the computation gives $2-2=0$ ✓"
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Сколько двоичных строк длины $8$ содержат ровно три единицы, причём никакие две единицы не стоят рядом?",
    "en": "How many binary strings of length $8$ contain exactly three ones, no two of them adjacent?"
   },
   "hint": {
    "ru": "Сначала расставьте нули, потом вставьте единицы в промежутки.",
    "en": "Place the zeros first, then slot the ones into the gaps."
   },
   "sol": {
    "ru": "Единиц три, значит нулей пять. Расставим сначала пять нулей: $$\\_\\ 0\\ \\_\\ 0\\ \\_\\ 0\\ \\_\\ 0\\ \\_\\ 0\\ \\_$$\n\nМежду ними и по краям образуется **шесть** промежутков. Чтобы никакие две единицы не стояли рядом, в каждый промежуток можно поставить не больше одной единицы.\n\nЗначит надо выбрать $3$ промежутка из $6$: $$\\binom63=20 .$$\n\n**Ответ:** $20$.\n\n**Общая формула.** Число способов выбрать $k$ несоседних позиций из $n$ в ряд равно $$\\binom{n-k+1}{k} ,$$ и здесь $\\dbinom{8-3+1}{3}=\\dbinom63=20$ ✓\n\n**Связь с предыдущей задачей.** Просуммировав по всем $k$, получим как раз число «несоседних» подмножеств, то есть число Фибоначчи.",
    "en": "Three ones means five zeros. Lay out the five zeros first: $$\\_\\ 0\\ \\_\\ 0\\ \\_\\ 0\\ \\_\\ 0\\ \\_\\ 0\\ \\_$$\n\nBetween and around them there are **six** gaps. For no two ones to be adjacent, each gap may hold at most one one.\n\nSo we choose $3$ gaps out of $6$: $$\\binom63=20 .$$\n\n**Answer:** $20$.\n\n**General formula.** The number of ways to pick $k$ non-adjacent positions out of $n$ in a row is $$\\binom{n-k+1}{k} ,$$ and here $\\dbinom63=20$ ✓\n\n**Link to the previous problem.** Summing over all $k$ gives exactly the count of \"no two consecutive\" subsets — a Fibonacci number."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что натуральное число $n$ можно представить в виде **упорядоченной** суммы натуральных слагаемых ровно $2^{\\,n-1}$ способами.",
    "en": "Prove that a positive integer $n$ can be written as an **ordered** sum of positive integers in exactly $2^{\\,n-1}$ ways."
   },
   "hint": {
    "ru": "Выложите $n$ единиц в ряд и решайте, где ставить «плюсы».",
    "en": "Lay out $n$ ones in a row and decide where to put the plus signs."
   },
   "sol": {
    "ru": "Выложим $n$ единиц в ряд: $$1\\ \\ 1\\ \\ 1\\ \\ \\dots\\ \\ 1 .$$\n\nМежду соседними единицами есть ровно $n-1$ промежутков. В каждый промежуток мы либо ставим знак «$+$», либо ничего (тогда единицы сливаются в одно слагаемое).\n\n**Соответствие.** Каждому набору решений отвечает ровно одно представление, и наоборот. Например, при $n=4$ набор «$+$, нет, $+$» даёт $$1+2+1 .$$\n\n**Подсчёт.** Решений в каждом из $n-1$ промежутков по два, и они независимы: $$2^{\\,n-1} . \\qquad\\blacksquare$$\n\n**Проверка** при $n=3$: должно быть $2^{2}=4$ представления, и действительно $$3,\\quad 1+2,\\quad 2+1,\\quad 1+1+1 \\quad\\checkmark$$\n\n**Осторожно:** если порядок слагаемых **не** важен (разбиения, а не композиции), задача становится куда труднее — простой формулы для числа разбиений нет.",
    "en": "Lay out $n$ ones in a row: $$1\\ \\ 1\\ \\ 1\\ \\ \\dots\\ \\ 1 .$$\n\nThere are exactly $n-1$ gaps between neighbours. In each gap we either put a \"$+$\" or nothing (in which case the ones merge into one summand).\n\n**The correspondence.** Each set of choices gives exactly one representation and vice versa. For $n=4$, the choices \"$+$, no, $+$\" give $$1+2+1 .$$\n\n**The count.** Two choices in each of the $n-1$ gaps, independently: $$2^{\\,n-1} . \\qquad\\blacksquare$$\n\n**Check** at $n=3$: there should be $2^{2}=4$ representations, and indeed $$3,\\quad 1+2,\\quad 2+1,\\quad 1+1+1 \\quad\\checkmark$$\n\n**Careful:** if the order does **not** matter (partitions rather than compositions) the problem becomes far harder — there is no simple formula."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Сколькими способами можно разложить $12$ одинаковых шаров по $4$ различным ящикам так, чтобы ни один ящик не остался пустым?",
    "en": "In how many ways can $12$ identical balls be put into $4$ distinct boxes so that no box is empty?"
   },
   "hint": {
    "ru": "Сначала положите по одному шару в каждый ящик.",
    "en": "First put one ball in each box."
   },
   "sol": {
    "ru": "**Способ 1: убрать ограничение.** Положим сразу по одному шару в каждый ящик — это обязательное условие, и способ такой ровно один. Останется $12-4=8$ шаров, которые можно распределять уже как угодно.\n\nПо формуле «шаров и перегородок» число неотрицательных решений уравнения $y_1+y_2+y_3+y_4=8$ равно $$\\binom{8+3}{3}=\\binom{11}{3}=165 .$$\n\n**Способ 2: сразу перегородки.** Выложим $12$ шаров в ряд; между ними $11$ промежутков, и надо выбрать $3$ из них под перегородки (по одной перегородке в промежуток — тогда ни одна часть не будет пустой): $$\\binom{11}{3}=165 \\quad\\checkmark$$\n\n**Ответ:** $165$.\n\n**Общая формула:** число **положительных** целых решений уравнения $x_1+\\dots+x_k=n$ равно $\\dbinom{n-1}{k-1}$.",
    "en": "**Method 1: remove the restriction.** Put one ball into each box first — a forced move, in exactly one way. That leaves $12-4=8$ balls to distribute freely.\n\nBy stars and bars, the number of non-negative solutions of $y_1+y_2+y_3+y_4=8$ is $$\\binom{11}{3}=165 .$$\n\n**Method 2: bars directly.** Lay the $12$ balls in a row; there are $11$ gaps, and we choose $3$ of them for bars (one bar per gap, so no part is empty): $$\\binom{11}{3}=165 \\quad\\checkmark$$\n\n**Answer:** $165$.\n\n**General formula:** the number of **positive** integer solutions of $x_1+\\dots+x_k=n$ is $\\dbinom{n-1}{k-1}$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите формулу бинома Ньютона $$(a+b)^{n}=\\sum_{k=0}^{n}\\binom nk a^{\\,n-k}b^{k} .$$",
    "en": "Prove the binomial theorem $$(a+b)^{n}=\\sum_{k=0}^{n}\\binom nk a^{\\,n-k}b^{k} .$$"
   },
   "hint": {
    "ru": "Раскройте произведение $n$ скобок и посчитайте, сколько раз встречается каждый одночлен.",
    "en": "Expand the product of $n$ brackets and count how often each monomial appears."
   },
   "sol": {
    "ru": "**Комбинаторное доказательство.** Запишем $$(a+b)^{n}=\\underbrace{(a+b)(a+b)\\cdots(a+b)}_{n\\ \\text{скобок}} .$$\n\nРаскрывая скобки, мы из каждой скобки выбираем либо $a$, либо $b$, и перемножаем выбранное. Каждый такой выбор даёт одночлен вида $a^{\\,n-k}b^{k}$, где $k$ — число скобок, из которых взяли $b$.\n\n**Сколько раз встречается $a^{\\,n-k}b^{k}$?** Ровно столько, сколькими способами можно выбрать $k$ скобок из $n$, то есть $\\dbinom nk$ раз.\n\nСобирая подобные, получаем требуемую формулу. $\\blacksquare$\n\n**Доказательство индукцией** (для полноты). База $n=1$ очевидна. Переход: $$(a+b)^{\\,n+1}=(a+b)\\sum_{k}\\binom nk a^{\\,n-k}b^{k}=\\sum_k\\binom nk a^{\\,n+1-k}b^{k}+\\sum_k\\binom nk a^{\\,n-k}b^{\\,k+1} .$$ Сдвинув индекс во второй сумме и сложив, при $a^{\\,n+1-k}b^{k}$ получим коэффициент $$\\binom nk+\\binom n{k-1}=\\binom{n+1}{k} $$ — это правило треугольника Паскаля ✓\n\n**Следствия.** При $a=b=1$ получаем $\\sum_k\\binom nk=2^{n}$; при $a=1$, $b=-1$ — что знакопеременная сумма биномиальных коэффициентов равна нулю (при $n\\ge1$).",
    "en": "**Combinatorial proof.** Write $$(a+b)^{n}=\\underbrace{(a+b)(a+b)\\cdots(a+b)}_{n\\ \\text{brackets}} .$$\n\nExpanding, from each bracket we pick either $a$ or $b$ and multiply the choices. Each choice yields a monomial $a^{\\,n-k}b^{k}$, where $k$ is the number of brackets from which $b$ was taken.\n\n**How often does $a^{\\,n-k}b^{k}$ occur?** Exactly as often as one can choose $k$ brackets out of $n$, i.e. $\\dbinom nk$ times.\n\nCollecting like terms gives the formula. $\\blacksquare$\n\n**Proof by induction** (for completeness). The base $n=1$ is clear. For the step, $$(a+b)^{\\,n+1}=\\sum_k\\binom nk a^{\\,n+1-k}b^{k}+\\sum_k\\binom nk a^{\\,n-k}b^{\\,k+1} .$$ Shifting the index in the second sum, the coefficient of $a^{\\,n+1-k}b^{k}$ becomes $$\\binom nk+\\binom n{k-1}=\\binom{n+1}{k} $$ — Pascal’s rule ✓\n\n**Consequences.** With $a=b=1$ we get $\\sum_k\\binom nk=2^{n}$; with $a=1$, $b=-1$, the alternating sum of binomial coefficients is zero (for $n\\ge1$)."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите формулу включений и исключений: $$\\left|A_1\\cup\\dots\\cup A_n\\right|=\\sum_i\\left|A_i\\right|-\\sum_{i<j}\\left|A_i\\cap A_j\\right|+\\dots+(-1)^{\\,n-1}\\left|A_1\\cap\\dots\\cap A_n\\right| .$$",
    "en": "Prove the inclusion–exclusion principle: $$\\left|A_1\\cup\\dots\\cup A_n\\right|=\\sum_i\\left|A_i\\right|-\\sum_{i<j}\\left|A_i\\cap A_j\\right|+\\dots+(-1)^{\\,n-1}\\left|A_1\\cap\\dots\\cap A_n\\right| .$$"
   },
   "hint": {
    "ru": "Посчитайте, сколько раз учтён элемент, лежащий ровно в $m$ множествах.",
    "en": "Count how often an element lying in exactly $m$ of the sets is tallied."
   },
   "sol": {
    "ru": "Проверим, что каждый элемент объединения учтён в правой части ровно один раз (а элемент вне объединения — ноль раз).\n\n**Элемент вне объединения** не попадает ни в одно $A_i$, значит не даёт вклада ни в одно слагаемое ✓\n\n**Элемент, лежащий ровно в $m\\ge1$ множествах.** Посмотрим, в скольких слагаемых он учитывается.\n\nВ суммах по одиночным множествам он учтён $\\dbinom m1$ раз;\n\nв суммах по парам — $\\dbinom m2$ раз;\n\nвообще, в суммах по $k$-элементным пересечениям — $\\dbinom mk$ раз (нужно выбрать $k$ из тех $m$ множеств, которые его содержат; пересечения, включающие «чужое» множество, его не содержат).\n\nС учётом знаков суммарный вклад равен $$\\binom m1-\\binom m2+\\binom m3-\\dots=\\sum_{k=1}^{m}(-1)^{\\,k-1}\\binom mk .$$\n\n**Считаем эту сумму.** По биному Ньютона при $a=1$, $b=-1$ $$\\sum_{k=0}^{m}(-1)^{k}\\binom mk=(1-1)^{m}=0 \\qquad (m\\ge1),$$ откуда $$\\sum_{k=1}^{m}(-1)^{\\,k-1}\\binom mk=\\binom m0=1 .$$\n\nЗначит каждый элемент объединения учтён ровно один раз, что и требовалось. $\\blacksquare$\n\n**Проверка при $n=2$:** $|A\\cup B|=|A|+|B|-|A\\cap B|$ — знакомая формула ✓\n\n**Главное применение** — подсчёт «ни одного из свойств»: число элементов, не обладающих ни одним из свойств, равно $$N-\\left|A_1\\cup\\dots\\cup A_n\\right| .$$",
    "en": "We check that every element of the union is counted exactly once on the right (and every element outside, zero times).\n\n**An element outside the union** lies in no $A_i$ and contributes to no term ✓\n\n**An element lying in exactly $m\\ge1$ of the sets.** Count the terms in which it appears.\n\nIn the single-set sums it is counted $\\dbinom m1$ times;\n\nin the pairwise sums, $\\dbinom m2$ times;\n\nin general, in the $k$-fold intersections, $\\dbinom mk$ times (choose $k$ of the $m$ sets containing it; intersections involving any other set miss it).\n\nWith the signs, its total contribution is $$\\sum_{k=1}^{m}(-1)^{\\,k-1}\\binom mk .$$\n\n**Evaluating that sum.** The binomial theorem at $a=1$, $b=-1$ gives $$\\sum_{k=0}^{m}(-1)^{k}\\binom mk=(1-1)^{m}=0 \\qquad (m\\ge1),$$ hence $$\\sum_{k=1}^{m}(-1)^{\\,k-1}\\binom mk=\\binom m0=1 .$$\n\nSo every element of the union is counted exactly once. $\\blacksquare$\n\n**Check at $n=2$:** $|A\\cup B|=|A|+|B|-|A\\cap B|$ — the familiar formula ✓\n\n**The main use** is counting \"none of the properties\": the number of elements with no property is $$N-\\left|A_1\\cup\\dots\\cup A_n\\right| .$$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите формулу для числа беспорядков: $$D_n=n!\\sum_{k=0}^{n}\\frac{(-1)^{k}}{k!} .$$",
    "en": "Prove the derangement formula $$D_n=n!\\sum_{k=0}^{n}\\frac{(-1)^{k}}{k!} .$$"
   },
   "hint": {
    "ru": "Примените включения и исключения к событиям «$i$-й элемент неподвижен».",
    "en": "Apply inclusion–exclusion to the events \"element $i$ is fixed\"."
   },
   "sol": {
    "ru": "Беспорядок — это перестановка без неподвижных точек. Обозначим через $A_i$ множество перестановок, у которых $i$-й элемент **неподвижен**.\n\n**Размер пересечения.** Если зафиксировать $k$ конкретных элементов, остальные $n-k$ переставляются как угодно: $$\\left|A_{i_1}\\cap\\dots\\cap A_{i_k}\\right|=(n-k)! ,$$ и таких пересечений $\\dbinom nk$ штук.\n\n**Включения и исключения.** $$\\left|A_1\\cup\\dots\\cup A_n\\right|=\\sum_{k=1}^{n}(-1)^{\\,k-1}\\binom nk(n-k)! .$$\n\n**Беспорядки — дополнение.** $$D_n=n!-\\left|A_1\\cup\\dots\\cup A_n\\right|=\\sum_{k=0}^{n}(-1)^{k}\\binom nk(n-k)! .$$\n\n**Упрощаем.** Так как $$\\binom nk(n-k)!=\\frac{n!}{k!\\,(n-k)!}\\cdot(n-k)!=\\frac{n!}{k!} ,$$ получаем $$D_n=\\sum_{k=0}^{n}(-1)^{k}\\frac{n!}{k!}=n!\\sum_{k=0}^{n}\\frac{(-1)^{k}}{k!} . \\qquad\\blacksquare$$\n\n**Проверка.** $$D_1=0,\\quad D_2=1,\\quad D_3=2,\\quad D_4=9,\\quad D_5=44 \\quad\\checkmark$$\n\n**Асимптотика.** Сумма — это частичная сумма ряда для $e^{-1}$, поэтому $$D_n\\approx\\frac{n!}{e} ,$$ и, более того, $D_n$ — ближайшее целое к $\\dfrac{n!}{e}$ при $n\\ge1$.\n\n**Забавное следствие.** Вероятность, что при случайной раздаче шляп **никто** не получит свою, почти не зависит от числа людей и составляет примерно $0{,}368$.",
    "en": "A derangement is a permutation with no fixed point. Let $A_i$ be the set of permutations fixing element $i$.\n\n**Size of an intersection.** Fixing $k$ specific elements leaves the other $n-k$ free: $$\\left|A_{i_1}\\cap\\dots\\cap A_{i_k}\\right|=(n-k)! ,$$ and there are $\\dbinom nk$ such intersections.\n\n**Inclusion–exclusion.** $$\\left|A_1\\cup\\dots\\cup A_n\\right|=\\sum_{k=1}^{n}(-1)^{\\,k-1}\\binom nk(n-k)! .$$\n\n**Derangements are the complement.** $$D_n=n!-\\left|A_1\\cup\\dots\\cup A_n\\right|=\\sum_{k=0}^{n}(-1)^{k}\\binom nk(n-k)! .$$\n\n**Simplify.** Since $$\\binom nk(n-k)!=\\frac{n!}{k!} ,$$ we get $$D_n=n!\\sum_{k=0}^{n}\\frac{(-1)^{k}}{k!} . \\qquad\\blacksquare$$\n\n**Check.** $$D_1=0,\\quad D_2=1,\\quad D_3=2,\\quad D_4=9,\\quad D_5=44 \\quad\\checkmark$$\n\n**Asymptotics.** The sum is a partial sum of the series for $e^{-1}$, so $$D_n\\approx\\frac{n!}{e} ,$$ and in fact $D_n$ is the nearest integer to $\\dfrac{n!}{e}$ for $n\\ge1$.\n\n**An amusing consequence.** The probability that **nobody** gets their own hat barely depends on the number of people: it is about $0.368$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что число способов выбрать $k$ элементов из $n$, стоящих в ряд, так, чтобы никакие два выбранных не были соседними, равно $\\dbinom{n-k+1}{k}$.",
    "en": "Prove that the number of ways to choose $k$ elements from $n$ in a row so that no two chosen are adjacent equals $\\dbinom{n-k+1}{k}$."
   },
   "hint": {
    "ru": "Постройте взаимно однозначное соответствие: вычтите из выбранных номеров $0,1,2,\\dots$",
    "en": "Build a bijection: subtract $0,1,2,\\dots$ from the chosen indices."
   },
   "sol": {
    "ru": "Пусть выбраны номера $$1\\le i_1<i_2<\\dots<i_k\\le n ,$$ причём никакие два не соседние, то есть $$i_{j+1}\\ \\ge\\ i_j+2 \\qquad\\text{для всех } j .$$\n\n**Сжатие.** Положим $$j_1=i_1,\\quad j_2=i_2-1,\\quad j_3=i_3-2,\\quad\\dots,\\quad j_k=i_k-(k-1).$$\n\nТогда из $i_{j+1}\\ge i_j+2$ следует $$j_{m+1}=i_{m+1}-m\\ \\ge\\ i_m+2-m=j_m+1 ,$$ то есть новые числа строго возрастают — но уже без всяких дополнительных условий. Кроме того $$1\\le j_1\\quad\\text{и}\\quad j_k=i_k-(k-1)\\le n-k+1 .$$\n\n**Обратное соответствие.** По любому набору $$1\\le j_1<j_2<\\dots<j_k\\le n-k+1 $$ восстанавливаем $i_m=j_m+(m-1)$, и условие несоседства выполняется автоматически.\n\nЗначит соответствие взаимно однозначно, и искомое число равно числу способов выбрать $k$ чисел из $n-k+1$: $$\\binom{n-k+1}{k} . \\qquad\\blacksquare$$\n\n**Проверка.** При $n=8$, $k=3$ формула даёт $\\dbinom63=20$ — совпадает с ранее посчитанным числом двоичных строк ✓\n\n**Следствие.** Суммируя по всем $k$, получаем $$\\sum_k\\binom{n-k+1}{k}=F_{n+2} $$ — знакомое «диагональное» тождество для чисел Фибоначчи в треугольнике Паскаля.",
    "en": "Suppose the chosen indices are $$1\\le i_1<i_2<\\dots<i_k\\le n ,$$ with no two adjacent, i.e. $$i_{j+1}\\ \\ge\\ i_j+2 \\qquad\\text{for all } j .$$\n\n**Compression.** Put $$j_1=i_1,\\quad j_2=i_2-1,\\quad j_3=i_3-2,\\quad\\dots,\\quad j_k=i_k-(k-1).$$\n\nThen $i_{m+1}\\ge i_m+2$ gives $$j_{m+1}=i_{m+1}-m\\ \\ge\\ j_m+1 ,$$ so the new numbers are strictly increasing — with no further condition. Moreover $$1\\le j_1\\quad\\text{and}\\quad j_k=i_k-(k-1)\\le n-k+1 .$$\n\n**The inverse map.** From any $$1\\le j_1<j_2<\\dots<j_k\\le n-k+1 $$ recover $i_m=j_m+(m-1)$; the non-adjacency then holds automatically.\n\nThe correspondence is a bijection, so the count equals the number of ways to choose $k$ numbers from $n-k+1$: $$\\binom{n-k+1}{k} . \\qquad\\blacksquare$$\n\n**Check.** At $n=8$, $k=3$ the formula gives $\\dbinom63=20$ — matching the binary-string count found earlier ✓\n\n**Corollary.** Summing over $k$ gives $$\\sum_k\\binom{n-k+1}{k}=F_{n+2} ,$$ the familiar diagonal identity for Fibonacci numbers in Pascal’s triangle."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите формулу «шаров и перегородок»: число неотрицательных целых решений уравнения $x_1+x_2+\\dots+x_k=n$ равно $\\dbinom{n+k-1}{k-1}$.",
    "en": "Prove the stars-and-bars formula: the number of non-negative integer solutions of $x_1+x_2+\\dots+x_k=n$ is $\\dbinom{n+k-1}{k-1}$."
   },
   "hint": {
    "ru": "Закодируйте решение строкой из $n$ звёздочек и $k-1$ перегородок.",
    "en": "Encode a solution as a string of $n$ stars and $k-1$ bars."
   },
   "sol": {
    "ru": "**Кодирование.** Каждому решению $\\left(x_1,\\dots,x_k\\right)$ сопоставим строку из $n$ звёздочек и $k-1$ перегородок: сначала $x_1$ звёздочек, потом перегородка, потом $x_2$ звёздочек, снова перегородка, и так далее.\n\nНапример, при $k=3$, $n=5$ решение $(2,0,3)$ кодируется как $$\\star\\star\\mid\\ \\mid\\star\\star\\star $$ (между двумя перегородками пусто — это и означает $x_2=0$).\n\n**Взаимная однозначность.** По любой строке из $n$ звёздочек и $k-1$ перегородок однозначно восстанавливается решение: $x_i$ — это число звёздочек между $(i-1)$-й и $i$-й перегородками. И наоборот, разные решения дают разные строки.\n\n**Подсчёт строк.** Строка имеет длину $n+(k-1)$, и она полностью определяется тем, какие $k-1$ позиций заняты перегородками: $$\\binom{n+k-1}{k-1} . \\qquad\\blacksquare$$\n\n**Проверка** при $k=2$: решений уравнения $x_1+x_2=n$ ровно $n+1$ (значение $x_1$ пробегает $0,\\dots,n$), и формула даёт $\\dbinom{n+1}{1}=n+1$ ✓\n\n**Вариант с положительными переменными.** Если требовать $x_i\\ge1$, положим $y_i=x_i-1$; тогда $y_1+\\dots+y_k=n-k$, и ответ равен $$\\binom{n-1}{k-1} .$$\n\n**Ещё вариант.** Число мультимножеств размера $n$ из $k$ типов — это ровно то же число $\\dbinom{n+k-1}{k-1}$: «сколько раз взят $i$-й тип» и есть $x_i$.",
    "en": "**The encoding.** To a solution $\\left(x_1,\\dots,x_k\\right)$ associate a string of $n$ stars and $k-1$ bars: $x_1$ stars, a bar, $x_2$ stars, a bar, and so on.\n\nFor $k=3$, $n=5$ the solution $(2,0,3)$ becomes $$\\star\\star\\mid\\ \\mid\\star\\star\\star $$ (nothing between the two bars means $x_2=0$).\n\n**Bijectivity.** From any string of $n$ stars and $k-1$ bars the solution is recovered uniquely: $x_i$ is the number of stars between the $(i-1)$-st and $i$-th bars. Conversely, different solutions give different strings.\n\n**Counting strings.** The string has length $n+(k-1)$ and is determined by which $k-1$ positions hold bars: $$\\binom{n+k-1}{k-1} . \\qquad\\blacksquare$$\n\n**Check** at $k=2$: the equation $x_1+x_2=n$ has $n+1$ solutions, and the formula gives $\\dbinom{n+1}{1}=n+1$ ✓\n\n**The positive variant.** Requiring $x_i\\ge1$, put $y_i=x_i-1$; then $y_1+\\dots+y_k=n-k$ and the answer is $$\\binom{n-1}{k-1} .$$\n\n**Another reading.** The number of multisets of size $n$ from $k$ types is the same $\\dbinom{n+k-1}{k-1}$: \"how many times type $i$ was taken\" is precisely $x_i$."
   }
  }
 ]
};
