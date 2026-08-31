/* Topic 14 — generated from content/lesson_14.py, do not edit by hand. */
window.LESSONS = window.LESSONS || {};
window.LESSONS[14] = {
 "n": 14,
 "cat": "comb",
 "title": {
  "ru": "Принцип Дирихле",
  "en": "The pigeonhole principle"
 },
 "sub": {
  "ru": "Самое простое утверждение в математике — и одно из самых сильных: как выбрать «клетки» так, чтобы задача решилась сама.",
  "en": "The simplest statement in mathematics and one of the most powerful: how to choose the \"boxes\" so the problem solves itself."
 },
 "goals": {
  "ru": [
   "Знать простую и обобщённую формулировки принципа Дирихле.",
   "Придумывать «клетки» — остатки, области, наборы признаков.",
   "Применять принцип в задачах о делимости, геометрии и знакомствах.",
   "Пользоваться усиленным вариантом — рассуждением о среднем значении."
  ],
  "en": [
   "Know the simple and the generalised form of the pigeonhole principle.",
   "Invent the \"boxes\" — remainders, regions, sets of features.",
   "Apply the principle to divisibility, geometry and acquaintance problems.",
   "Use the strengthened form — the averaging argument."
  ]
 },
 "sections": [
  {
   "h": {
    "ru": "Формулировка",
    "en": "The statement"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Принцип Дирихле",
      "en": "The pigeonhole principle"
     },
     "text": {
      "ru": "Если $n$ предметов разложены по $k$ ящикам и $n>k$, то найдётся ящик, в котором лежит **хотя бы два** предмета.",
      "en": "If $n$ objects are placed into $k$ boxes and $n>k$, then some box contains **at least two** objects."
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 380 150\" role=\"img\" aria-label=\"Six objects in four boxes\"><rect class=\"ln\" x=\"20\" y=\"40\" width=\"70\" height=\"80\" rx=\"6\" fill=\"none\"/><rect class=\"ln\" x=\"110\" y=\"40\" width=\"70\" height=\"80\" rx=\"6\" fill=\"none\"/><rect class=\"ln\" x=\"200\" y=\"40\" width=\"70\" height=\"80\" rx=\"6\" fill=\"none\"/><rect class=\"ln\" x=\"290\" y=\"40\" width=\"70\" height=\"80\" rx=\"6\" fill=\"none\"/><circle class=\"ptc\" cx=\"48\" cy=\"80\" r=\"8\"/><circle class=\"ptc\" cx=\"75\" cy=\"80\" r=\"8\"/><circle class=\"ptc\" cx=\"138\" cy=\"80\" r=\"8\"/><circle class=\"ptc\" cx=\"228\" cy=\"80\" r=\"8\"/><circle class=\"ptc\" cx=\"255\" cy=\"80\" r=\"8\"/><circle class=\"ptc\" cx=\"318\" cy=\"80\" r=\"8\"/><text class=\"sm\" x=\"190\" y=\"142\" text-anchor=\"middle\">6 &gt; 4</text></svg>",
     "cap": {
      "ru": "Шесть предметов и четыре ящика: как ни раскладывай, где-то окажется больше одного.",
      "en": "Six objects and four boxes: however they are placed, some box gets more than one."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "От противного. Пусть в каждом ящике не более одного предмета. Тогда всего предметов не больше $k$, что противоречит условию $n>k$. $\\blacksquare$",
      "en": "By contradiction. Suppose every box holds at most one object. Then there are at most $k$ objects in all, contradicting $n>k$. $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Обобщённый принцип",
      "en": "The generalised principle"
     },
     "text": {
      "ru": "Если $n$ предметов разложены по $k$ ящикам, то найдётся ящик, в котором **не менее** $\\left\\lceil\\dfrac nk\\right\\rceil$ предметов, и найдётся ящик, в котором **не более** $\\left\\lfloor\\dfrac nk\\right\\rfloor$.",
      "en": "If $n$ objects are placed into $k$ boxes, then some box holds **at least** $\\left\\lceil\\dfrac nk\\right\\rceil$ objects, and some box holds **at most** $\\left\\lfloor\\dfrac nk\\right\\rfloor$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Снова от противного. Пусть в каждом ящике не более $m$ предметов, где $m=\\left\\lceil\\tfrac nk\\right\\rceil-1$. Тогда $$n\\le km=k\\left(\\left\\lceil\\frac nk\\right\\rceil-1\\right)<k\\cdot\\frac nk+k-k=n,$$ где мы воспользовались тем, что $\\left\\lceil x\\right\\rceil<x+1$. Получилось $n<n$ — противоречие. $\\blacksquare$",
      "en": "Again by contradiction. Suppose every box holds at most $m$ objects with $m=\\left\\lceil\\tfrac nk\\right\\rceil-1$. Then $$n\\le km=k\\left(\\left\\lceil\\frac nk\\right\\rceil-1\\right)<k\\cdot\\frac nk+k-k=n,$$ using $\\left\\lceil x\\right\\rceil<x+1$. So $n<n$ — a contradiction. $\\blacksquare$"
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Почему это работает",
      "en": "Why this works"
     },
     "text": {
      "ru": "Утверждение звучит тривиально — и в этом его сила. Оно позволяет доказать **существование** объекта, ни разу его не предъявив. Схема решения всегда одна и та же:\n\n**1)** назовите, что будет «предметами»;\n**2)** придумайте «ящики»;\n**3)** проверьте, что предметов больше, чем ящиков;\n**4)** переведите вывод «два предмета в одном ящике» обратно на язык задачи.\n\nВся трудность — в шаге **2**. Всё остальное — арифметика.",
      "en": "The statement sounds trivial — and that is its strength. It proves the **existence** of an object without ever exhibiting one. The plan is always the same:\n\n**1)** say what the \"objects\" are;\n**2)** invent the \"boxes\";\n**3)** check that objects outnumber boxes;\n**4)** translate \"two objects in one box\" back into the language of the problem.\n\nAll the difficulty is in step **2**. The rest is arithmetic."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "В ящике лежат носки трёх цветов. Сколько носков нужно вынуть наугад, чтобы наверняка получить пару одного цвета? А чтобы наверняка получить две пары?",
      "en": "A drawer holds socks of three colours. How many must be taken at random to be sure of one matching pair? And of two matching pairs?"
     },
     "steps": {
      "ru": [
       "**Одна пара.** Предметы — вынутые носки, ящики — три цвета.",
       "Трёх носков может не хватить: они могут оказаться всех трёх цветов.",
       "Четыре носка при трёх цветах — по принципу Дирихле два попадут в один цвет.",
       "**Две пары.** Возьмём $6$ носков. В худшем случае цвета распределятся как $4+1+1$ — тогда пар всего две (из четвёрки), этого хватает.",
       "Проверим, что пяти мало: распределение $3+1+1$ даёт только одну пару. Значит нужно шесть."
      ],
      "en": [
       "**One pair.** The objects are the socks taken out, the boxes are the three colours.",
       "Three socks may fail: they can be one of each colour.",
       "Four socks into three colours — by the pigeonhole principle two share a colour.",
       "**Two pairs.** Take $6$ socks. In the worst case the colours split as $4+1+1$ — that still yields two pairs from the four, which is enough.",
       "Check that five is not enough: a split $3+1+1$ gives only one pair. So six are needed."
      ]
     },
     "ans": {
      "ru": "$4$ носка для одной пары и $6$ для двух.",
      "en": "$4$ socks for one pair and $6$ for two."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Клетки — это остатки",
    "en": "The boxes are remainders"
   },
   "blocks": [
    {
     "t": "idea",
     "text": {
      "ru": "В задачах о делимости «ящиками» почти всегда служат **остатки**. Остатков по модулю $m$ ровно $m$ штук, поэтому среди любых $m+1$ чисел найдутся два с одинаковым остатком — а значит, их **разность** делится на $m$.\n\nЭто и есть перевод с шага 4: «два предмета в одном ящике» означает «разность делится на $m$».",
      "en": "In divisibility problems the \"boxes\" are almost always **remainders**. There are exactly $m$ remainders modulo $m$, so among any $m+1$ numbers two share a remainder — and hence their **difference** is divisible by $m$.\n\nThat is the step-4 translation: \"two objects in one box\" means \"the difference is divisible by $m$\"."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Докажите, что среди любых семи целых чисел найдутся два, разность которых делится на $6$.",
      "en": "Prove that among any seven integers there are two whose difference is divisible by $6$."
     },
     "steps": {
      "ru": [
       "Предметы — семь данных чисел.",
       "Ящики — шесть возможных остатков при делении на $6$: $0,1,2,3,4,5$.",
       "$7>6$, значит по принципу Дирихле два числа попадут в один ящик, то есть дадут одинаковый остаток.",
       "Если $a\\equiv b\\pmod6$, то $6\\mid a-b$."
      ],
      "en": [
       "The objects are the seven given numbers.",
       "The boxes are the six possible remainders on division by $6$: $0,1,2,3,4,5$.",
       "Since $7>6$, two numbers land in one box, that is they share a remainder.",
       "And $a\\equiv b\\pmod6$ means $6\\mid a-b$."
      ]
     },
     "ans": {
      "ru": "Такие два числа обязательно найдутся. $\\blacksquare$",
      "en": "Two such numbers must exist. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Докажите, что существует число вида $\\underbrace{11\\ldots1}_{k}$, делящееся на $2023$.",
      "en": "Prove that some number of the form $\\underbrace{11\\ldots1}_{k}$ is divisible by $2023$."
     },
     "steps": {
      "ru": [
       "Рассмотрим $2024$ числа $$R_1=1,\\quad R_2=11,\\quad \\dots,\\quad R_{2024}=\\underbrace{11\\ldots1}_{2024}.$$",
       "Ящики — остатки по модулю $2023$; их ровно $2023$.",
       "Чисел $2024>2023$, значит два из них дают одинаковый остаток: $R_i\\equiv R_j$ при $i>j$.",
       "Тогда $2023$ делит разность $$R_i-R_j=\\underbrace{11\\ldots1}_{i-j}\\underbrace{00\\ldots0}_{j}=R_{\\,i-j}\\cdot10^{\\,j}.$$",
       "Разложим $2023=7\\cdot17^{2}$: среди простых множителей нет ни $2$, ни $5$, поэтому $\\gcd(2023,10)=1$, а значит и $\\gcd\\left(2023,10^{j}\\right)=1$.",
       "Следовательно $2023$ делит именно $R_{\\,i-j}$ — число из одних единиц."
      ],
      "en": [
       "Consider the $2024$ numbers $$R_1=1,\\quad R_2=11,\\quad \\dots,\\quad R_{2024}=\\underbrace{11\\ldots1}_{2024}.$$",
       "The boxes are the remainders modulo $2023$, and there are exactly $2023$ of them.",
       "Since $2024>2023$, two of the numbers share a remainder: $R_i\\equiv R_j$ with $i>j$.",
       "Then $2023$ divides the difference $$R_i-R_j=\\underbrace{11\\ldots1}_{i-j}\\underbrace{00\\ldots0}_{j}=R_{\\,i-j}\\cdot10^{\\,j}.$$",
       "Factor $2023=7\\cdot17^{2}$: neither $2$ nor $5$ occurs, so $\\gcd(2023,10)=1$ and hence $\\gcd\\left(2023,10^{j}\\right)=1$.",
       "Therefore $2023$ divides $R_{\\,i-j}$ itself — a number made of ones."
      ]
     },
     "ans": {
      "ru": "Такое число существует. $\\blacksquare$ *Замечание:* тот же довод работает для любого $n$, взаимно простого с $10$.",
      "en": "Such a number exists. $\\blacksquare$ *Remark:* the same argument works for any $n$ coprime to $10$."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Клетки — это области",
    "en": "The boxes are regions"
   },
   "blocks": [
    {
     "t": "idea",
     "text": {
      "ru": "В геометрических задачах «ящиками» служат **части фигуры**. Разрежьте фигуру на куски малого размера, и точки, попавшие в один кусок, окажутся близко друг к другу.\n\nГлавное — правильно выбрать разрез: кусков должно быть меньше, чем точек, а сами куски — достаточно мелкими, чтобы полученная оценка расстояния была нужной.",
      "en": "In geometry problems the \"boxes\" are **pieces of the figure**. Cut the figure into small pieces, and points landing in one piece are close to each other.\n\nThe art is in the cut: there must be fewer pieces than points, and the pieces must be small enough for the resulting distance bound to be the one you want."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "В квадрате со стороной $2$ отмечены пять точек. Докажите, что какие-то две из них находятся на расстоянии не больше $\\sqrt2$.",
      "en": "Five points are marked in a square of side $2$. Prove that two of them are at distance at most $\\sqrt2$."
     },
     "steps": {
      "ru": [
       "Разрежем квадрат на четыре одинаковых квадрата со стороной $1$.",
       "Предметы — пять точек, ящики — четыре маленьких квадрата. $5>4$, значит две точки попали в один квадратик.",
       "Наибольшее расстояние между двумя точками квадрата со стороной $1$ — это его диагональ, то есть $\\sqrt2$.",
       "Значит расстояние между найденными двумя точками не превосходит $\\sqrt2$."
      ],
      "en": [
       "Cut the square into four equal squares of side $1$.",
       "The objects are the five points, the boxes the four small squares. As $5>4$, two points land in one small square.",
       "The largest distance between two points of a unit square is its diagonal, $\\sqrt2$.",
       "So the two points found are at distance at most $\\sqrt2$."
      ]
     },
     "ans": {
      "ru": "Такие две точки найдутся. $\\blacksquare$",
      "en": "Two such points exist. $\\blacksquare$"
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 260 260\" role=\"img\" aria-label=\"Five points in a square cut into four cells\">\n<rect class=\"ln\" x=\"20\" y=\"20\" width=\"220\" height=\"220\" fill=\"none\"/>\n<path class=\"dsh\" d=\"M130 20 V240 M20 130 H240\"/>\n<circle class=\"ptc\" cx=\"62\" cy=\"70\" r=\"5\"/><circle class=\"ptc\" cx=\"98\" cy=\"104\" r=\"5\"/>\n<circle class=\"ptc\" cx=\"188\" cy=\"62\" r=\"5\"/><circle class=\"ptc\" cx=\"70\" cy=\"190\" r=\"5\"/>\n<circle class=\"ptc\" cx=\"192\" cy=\"196\" r=\"5\"/>\n<text class=\"sm\" x=\"130\" y=\"256\" text-anchor=\"middle\">2</text>\n<text class=\"sm\" x=\"8\" y=\"134\">2</text>\n</svg>",
     "cap": {
      "ru": "Квадрат со стороной $2$ разрезан на четыре единичных; пять точек не могут разойтись по четырём клеткам.",
      "en": "A square of side $2$ cut into four unit cells; five points cannot spread over four cells."
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Аккуратность с границами. Точка может попасть ровно на линию разреза — тогда она принадлежит сразу двум кускам. Это не мешает: договоритесь заранее, к какому куску относить такие точки (например, к левому нижнему), и рассуждение останется верным. Главное — сказать об этом в решении одной строкой.",
      "en": "Mind the boundaries. A point may land exactly on a cutting line, belonging to two pieces at once. This does no harm: agree in advance which piece such points go to (say, the lower-left one) and the argument stands. Just say so in one line of the solution."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "В квадрате со стороной $1$ отмечено $51$ точка. Докажите, что какие-то три из них лежат внутри круга радиуса $\\tfrac17$.",
      "en": "Fifty-one points are marked in a unit square. Prove that some three of them lie inside a circle of radius $\\tfrac17$."
     },
     "steps": {
      "ru": [
       "Разрежем квадрат на $25$ одинаковых квадратиков со стороной $\\tfrac15$.",
       "Точек $51$, клеток $25$, и $51>2\\cdot25=50$. По обобщённому принципу Дирихле в какой-то клетке окажется не менее $\\left\\lceil\\tfrac{51}{25}\\right\\rceil=3$ точек.",
       "Все точки такой клетки лежат в круге, описанном около неё. Его радиус равен половине диагонали квадратика: $$R=\\frac12\\cdot\\frac{\\sqrt2}{5}=\\frac{\\sqrt2}{10}.$$",
       "Сравним с $\\tfrac17$: $$\\frac{\\sqrt2}{10}\\approx0{,}1414<0{,}1429\\approx\\frac17 .$$",
       "Значит три точки лежат в круге радиуса $\\tfrac{\\sqrt2}{10}$, а он целиком помещается в круг радиуса $\\tfrac17$."
      ],
      "en": [
       "Cut the square into $25$ equal cells of side $\\tfrac15$.",
       "There are $51$ points and $25$ cells, and $51>2\\cdot25=50$. By the generalised principle some cell holds at least $\\left\\lceil\\tfrac{51}{25}\\right\\rceil=3$ points.",
       "All points of a cell lie in its circumscribed circle, whose radius is half the diagonal: $$R=\\frac12\\cdot\\frac{\\sqrt2}{5}=\\frac{\\sqrt2}{10}.$$",
       "Compare with $\\tfrac17$: $$\\frac{\\sqrt2}{10}\\approx0.1414<0.1429\\approx\\frac17 .$$",
       "So three points lie in a circle of radius $\\tfrac{\\sqrt2}{10}$, which fits inside one of radius $\\tfrac17$."
      ]
     },
     "ans": {
      "ru": "Такие три точки найдутся. $\\blacksquare$",
      "en": "Three such points exist. $\\blacksquare$"
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Клетки — это признаки",
    "en": "The boxes are features"
   },
   "blocks": [
    {
     "t": "idea",
     "text": {
      "ru": "Иногда «ящик» — это не остаток и не область, а **набор характеристик** объекта: чётность координат, цвет, степень вершины, разложение на множители. Если характеристик мало, а объектов много, два объекта окажутся одинаковыми по всем характеристикам — и это даст нужный вывод.",
      "en": "Sometimes a \"box\" is neither a remainder nor a region but a **set of features** of the object: the parity of its coordinates, its colour, the degree of a vertex, a factorisation. If there are few feature-patterns and many objects, two objects agree on every feature — and that gives the conclusion."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "На плоскости отмечены пять точек с целыми координатами. Докажите, что середина какого-то из отрезков между ними тоже имеет целые координаты.",
      "en": "Five points with integer coordinates are marked in the plane. Prove that the midpoint of some segment between two of them also has integer coordinates."
     },
     "steps": {
      "ru": [
       "Середина отрезка с концами $\\left(x_1,y_1\\right)$ и $\\left(x_2,y_2\\right)$ имеет координаты $\\left(\\tfrac{x_1+x_2}{2},\\tfrac{y_1+y_2}{2}\\right)$.",
       "Они целые тогда и только тогда, когда $x_1+x_2$ и $y_1+y_2$ чётны, то есть когда $x_1,x_2$ одинаковой чётности и $y_1,y_2$ тоже.",
       "Ящики — четыре пары чётностей: $(\\text{чёт},\\text{чёт})$, $(\\text{чёт},\\text{нечёт})$, $(\\text{нечёт},\\text{чёт})$, $(\\text{нечёт},\\text{нечёт})$.",
       "Точек пять, ящиков четыре, значит две точки попадут в один ящик.",
       "У них совпадают чётности обеих координат — а это ровно условие целочисленности середины."
      ],
      "en": [
       "The midpoint of a segment with ends $\\left(x_1,y_1\\right)$ and $\\left(x_2,y_2\\right)$ is $\\left(\\tfrac{x_1+x_2}{2},\\tfrac{y_1+y_2}{2}\\right)$.",
       "These are integers exactly when $x_1+x_2$ and $y_1+y_2$ are even, that is when $x_1,x_2$ have the same parity and so do $y_1,y_2$.",
       "The boxes are the four parity patterns: $(\\text{even},\\text{even})$, $(\\text{even},\\text{odd})$, $(\\text{odd},\\text{even})$, $(\\text{odd},\\text{odd})$.",
       "With five points and four boxes, two points share a box.",
       "They agree in the parity of both coordinates — exactly the condition for an integer midpoint."
      ]
     },
     "ans": {
      "ru": "Такая пара точек найдётся. $\\blacksquare$",
      "en": "Such a pair exists. $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Задача о шести знакомых",
      "en": "The party of six"
     },
     "text": {
      "ru": "В любой компании из шести человек найдутся либо трое попарно знакомых, либо трое попарно незнакомых.",
      "en": "In any group of six people there are either three mutual acquaintances or three mutual strangers."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Возьмём одного человека — назовём его $A$. Остальных пятеро, и с каждым из них $A$ либо знаком, либо нет. Два варианта, пять человек: по обобщённому принципу Дирихле найдётся вариант, встречающийся не менее $\\left\\lceil\\tfrac52\\right\\rceil=3$ раз.\n\nПусть для определённости $A$ знаком по крайней мере с тремя людьми; обозначим троих из них $B$, $C$, $D$. (Случай «незнаком с тремя» разбирается дословно так же с заменой слова «знаком» на «незнаком».)\n\n**Случай 1.** Какие-то двое из $B,C,D$ знакомы между собой — скажем, $B$ и $C$. Тогда $A$, $B$, $C$ попарно знакомы, и тройка найдена.\n\n**Случай 2.** Никакие двое из $B,C,D$ не знакомы. Тогда $B$, $C$, $D$ попарно незнакомы — и тройка снова найдена.\n\nДругих случаев нет. $\\blacksquare$\n\n*Замечание.* Для пяти человек утверждение неверно: рассадите пятерых по кругу и объявите знакомыми только соседей — тогда ни трёх попарно знакомых, ни трёх попарно незнакомых не найдётся. Поэтому число шесть здесь точное.",
      "en": "Take one person and call them $A$. The other five are each either known to $A$ or not. Two options, five people: by the generalised principle one option occurs at least $\\left\\lceil\\tfrac52\\right\\rceil=3$ times.\n\nSay $A$ knows at least three of them, and call three of these $B$, $C$, $D$. (The \"does not know three\" case runs word for word the same, with \"knows\" replaced by \"does not know\".)\n\n**Case 1.** Two of $B,C,D$ know each other — say $B$ and $C$. Then $A$, $B$, $C$ are mutual acquaintances, and we are done.\n\n**Case 2.** No two of $B,C,D$ know each other. Then $B$, $C$, $D$ are mutual strangers — done again.\n\nThere are no other cases. $\\blacksquare$\n\n*Remark.* For five people the statement fails: seat five in a circle and declare only neighbours acquainted — then there are neither three mutual acquaintances nor three mutual strangers. So six is exactly the right number."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Усиленный вариант: рассуждение о среднем",
    "en": "The strengthened form: averaging"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Принцип среднего",
      "en": "The averaging principle"
     },
     "text": {
      "ru": "Если сумма $n$ чисел равна $S$, то среди них есть число, **не меньшее** $\\dfrac Sn$, и есть число, **не большее** $\\dfrac Sn$.",
      "en": "If $n$ numbers add up to $S$, then one of them is **at least** $\\dfrac Sn$ and one is **at most** $\\dfrac Sn$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Если бы все числа были строго меньше $\\tfrac Sn$, их сумма была бы строго меньше $n\\cdot\\tfrac Sn=S$ — противоречие. Второе утверждение доказывается так же. $\\blacksquare$",
      "en": "If every number were strictly less than $\\tfrac Sn$, their sum would be strictly less than $n\\cdot\\tfrac Sn=S$ — a contradiction. The second statement is proved the same way. $\\blacksquare$"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Это тот же принцип Дирихле, только с числами вместо предметов. Он особенно полезен, когда нужно доказать существование объекта «не хуже среднего»: например, что найдётся строка таблицы с большой суммой, или сектор круга с большим числом точек.\n\nТипичная формулировка: «докажите, что найдётся $\\dots$, для которого величина не меньше $\\dots$». Почти всегда достаточно посчитать сумму по всем объектам и поделить на их количество.",
      "en": "This is the pigeonhole principle again, with numbers instead of objects. It is especially useful for proving that something \"no worse than average\" exists: a row of a table with a large sum, say, or a sector of a disc with many points.\n\nThe typical wording is \"prove that there is a $\\dots$ for which the quantity is at least $\\dots$\". Almost always it suffices to sum over all the objects and divide by their number."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "В таблице $10\\times10$ расставлены числа так, что сумма всех чисел равна $1000$. Докажите, что найдётся строка, сумма чисел которой не меньше $100$.",
      "en": "A $10\\times10$ table is filled with numbers adding up to $1000$. Prove that some row has a sum of at least $100$."
     },
     "steps": {
      "ru": [
       "Обозначим суммы строк через $s_1,\\dots,s_{10}$.",
       "Каждое число таблицы попадает ровно в одну строку, поэтому $$s_1+s_2+\\dots+s_{10}=1000 .$$",
       "Это сумма десяти чисел, равная $1000$; их среднее равно $\\tfrac{1000}{10}=100$.",
       "По принципу среднего одно из чисел $s_i$ не меньше $100$."
      ],
      "en": [
       "Write $s_1,\\dots,s_{10}$ for the row sums.",
       "Each entry lies in exactly one row, so $$s_1+s_2+\\dots+s_{10}=1000 .$$",
       "These are ten numbers adding to $1000$, so their average is $\\tfrac{1000}{10}=100$.",
       "By the averaging principle some $s_i$ is at least $100$."
      ]
     },
     "ans": {
      "ru": "Такая строка найдётся. $\\blacksquare$ (Точно так же найдётся строка с суммой не больше $100$.)",
      "en": "Such a row exists. $\\blacksquare$ (Equally, some row has sum at most $100$.)"
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
    "ru": "В классе $30$ учеников. Докажите, что найдутся трое, родившиеся в один месяц.",
    "en": "A class has $30$ pupils. Prove that three of them were born in the same month."
   },
   "hint": {
    "ru": "Обобщённый принцип: $30$ предметов, $12$ ящиков.",
    "en": "The generalised principle: $30$ objects, $12$ boxes."
   },
   "sol": {
    "ru": "Предметы — ученики, ящики — двенадцать месяцев.\n\nПо обобщённому принципу Дирихле найдётся месяц, в который родились не менее $$\\left\\lceil\\frac{30}{12}\\right\\rceil=\\left\\lceil2{,}5\\right\\rceil=3$$ учеников. $\\blacksquare$\n\n*Замечание.* Для двоих хватило бы $13$ учеников, для четверых понадобилось бы $37$: чтобы гарантировать $k$ человек в одном месяце, нужно $12(k-1)+1$ учеников.",
    "en": "The objects are the pupils, the boxes the twelve months.\n\nBy the generalised principle some month has at least $$\\left\\lceil\\frac{30}{12}\\right\\rceil=\\left\\lceil2.5\\right\\rceil=3$$ pupils born in it. $\\blacksquare$\n\n*Remark.* Two would need only $13$ pupils, four would need $37$: to force $k$ people into one month you need $12(k-1)+1$ pupils."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "В коробке лежат $10$ красных, $8$ синих и $6$ зелёных шаров. Сколько шаров нужно вынуть наугад, чтобы наверняка среди них оказались четыре шара одного цвета?",
    "en": "A box holds $10$ red, $8$ blue and $6$ green balls. How many must be drawn at random to be sure of four balls of one colour?"
   },
   "hint": {
    "ru": "Посмотрите на самый неудачный расклад.",
    "en": "Look at the worst possible draw."
   },
   "sol": {
    "ru": "**Худший случай.** Можно вынуть по три шара каждого цвета — всего $3\\cdot3=9$ шаров — и не получить четвёрки одного цвета. Значит девяти шаров недостаточно.\n\n**Десять шаров хватает.** Если бы среди десяти вынутых каждого цвета было не более трёх, всего было бы не более $9$ шаров — противоречие. Значит какого-то цвета не менее четырёх.\n\n(Проверим, что такой набор вообще возможен: каждого цвета в коробке хотя бы четыре шара, так что условие осмысленно.)\n\n**Ответ:** $10$ шаров.",
    "en": "**The worst case.** One can draw three of each colour — $3\\cdot3=9$ balls — without getting four of any colour. So nine are not enough.\n\n**Ten suffice.** If among ten drawn balls every colour appeared at most three times, there would be at most $9$ balls — a contradiction. So some colour appears at least four times.\n\n(And such a draw is possible at all: the box holds at least four of each colour, so the question makes sense.)\n\n**Answer:** $10$ balls."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что среди любых восьми целых чисел найдутся два, разность которых делится на $7$.",
    "en": "Prove that among any eight integers there are two whose difference is divisible by $7$."
   },
   "hint": {
    "ru": "Остатки по модулю $7$.",
    "en": "Remainders modulo $7$."
   },
   "sol": {
    "ru": "Ящики — семь остатков при делении на $7$: $0,1,2,3,4,5,6$. Предметы — восемь данных чисел.\n\nТак как $8>7$, по принципу Дирихле два числа $a$ и $b$ дают одинаковый остаток, то есть $a\\equiv b\\pmod7$. Тогда $7$ делит $a-b$. $\\blacksquare$\n\n*Обобщение.* Среди любых $m+1$ целых чисел найдутся два, разность которых делится на $m$. Число $m+1$ здесь точное: числа $1,2,\\dots,m$ дают попарно различные остатки, и ни одна их разность на $m$ не делится.",
    "en": "The boxes are the seven remainders modulo $7$: $0,1,2,3,4,5,6$. The objects are the eight given numbers.\n\nSince $8>7$, two numbers $a$ and $b$ share a remainder, that is $a\\equiv b\\pmod7$, and then $7$ divides $a-b$. $\\blacksquare$\n\n*Generalisation.* Among any $m+1$ integers two have a difference divisible by $m$. The bound $m+1$ is sharp: the numbers $1,2,\\dots,m$ have pairwise different remainders and no difference of theirs is divisible by $m$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "В равностороннем треугольнике со стороной $1$ отмечены пять точек. Докажите, что какие-то две находятся на расстоянии не больше $\\tfrac12$.",
    "en": "Five points are marked in an equilateral triangle of side $1$. Prove that two of them are at distance at most $\\tfrac12$."
   },
   "hint": {
    "ru": "Разрежьте треугольник средними линиями.",
    "en": "Cut the triangle by its midlines."
   },
   "sol": {
    "ru": "Проведём три средние линии. Они разрежут треугольник на **четыре** равносторонних треугольника со стороной $\\tfrac12$ каждый.\n\nПредметы — пять точек, ящики — четыре маленьких треугольника. Так как $5>4$, две точки попадут в один треугольник (точки на границах отнесём к любому из содержащих их кусков, зафиксировав правило заранее).\n\nВ равностороннем треугольнике наибольшее расстояние между точками равно его стороне, то есть $\\tfrac12$. Значит найденные две точки удалены не более чем на $\\tfrac12$. $\\blacksquare$",
    "en": "Draw the three midlines. They cut the triangle into **four** equilateral triangles of side $\\tfrac12$.\n\nThe objects are the five points, the boxes the four small triangles. As $5>4$, two points land in one triangle (points on a boundary are assigned to one of the pieces containing them by a rule fixed in advance).\n\nIn an equilateral triangle the greatest distance between points is its side, here $\\tfrac12$. So the two points found are at distance at most $\\tfrac12$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что в любой компании найдутся двое, имеющие одинаковое число знакомых внутри этой компании.",
    "en": "Prove that in any group two people have the same number of acquaintances within the group."
   },
   "hint": {
    "ru": "Числа знакомых лежат от $0$ до $n-1$, но крайние значения не могут встретиться одновременно.",
    "en": "The counts lie between $0$ and $n-1$, but the two extremes cannot occur together."
   },
   "sol": {
    "ru": "Пусть в компании $n\\ge2$ человек. Число знакомых каждого — целое от $0$ до $n-1$, то есть $n$ возможных значений при $n$ людях. Этого мало для прямого применения принципа Дирихле, поэтому заметим важное:\n\n**Значения $0$ и $n-1$ не могут встретиться одновременно.** Если кто-то знаком со всеми ($n-1$ знакомых), то у каждого есть хотя бы один знакомый, и значения $0$ ни у кого быть не может. Наоборот, если кто-то ни с кем не знаком, то никто не может быть знаком со всеми.\n\nЗначит фактически используется не более $n-1$ значений: либо $\\{0,1,\\dots,n-2\\}$, либо $\\{1,2,\\dots,n-1\\}$.\n\nТеперь предметов $n$, а ящиков не более $n-1$, и по принципу Дирихле два человека имеют одинаковое число знакомых. $\\blacksquare$\n\n*На языке графов:* в любом графе с $n\\ge2$ вершинами найдутся две вершины одинаковой степени.",
    "en": "Let the group have $n\\ge2$ people. Each person’s number of acquaintances is an integer from $0$ to $n-1$ — $n$ possible values for $n$ people, too many for the principle to bite directly. So note something important:\n\n**The values $0$ and $n-1$ cannot both occur.** If someone knows everybody ($n-1$ acquaintances), then everyone has at least one acquaintance and nobody can have $0$. Conversely, if someone knows nobody, then nobody can know everybody.\n\nSo at most $n-1$ values actually occur: either $\\{0,1,\\dots,n-2\\}$ or $\\{1,2,\\dots,n-1\\}$.\n\nNow there are $n$ objects and at most $n-1$ boxes, so two people have equal counts. $\\blacksquare$\n\n*In graph language:* every graph with $n\\ge2$ vertices has two vertices of equal degree."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Из чисел $1,2,\\dots,100$ выбрали $51$ число. Докажите, что среди выбранных найдутся два, сумма которых равна $101$.",
    "en": "Fifty-one numbers are chosen from $1,2,\\dots,100$. Prove that two of them add up to $101$."
   },
   "hint": {
    "ru": "Разбейте все сто чисел на пары с суммой $101$.",
    "en": "Split the hundred numbers into pairs summing to $101$."
   },
   "sol": {
    "ru": "Разобьём числа от $1$ до $100$ на пары с суммой $101$: $$\\{1,100\\},\\ \\{2,99\\},\\ \\{3,98\\},\\ \\dots,\\ \\{50,51\\}.$$ Пар ровно $50$, и каждое число попадает ровно в одну пару.\n\nПредметы — $51$ выбранное число, ящики — эти $50$ пар. Так как $51>50$, два выбранных числа лежат в одной паре — а значит, их сумма равна $101$. $\\blacksquare$\n\n*Точность оценки.* Для $50$ чисел утверждение неверно: возьмите $1,2,\\dots,50$ — никакие два из них не дают в сумме $101$.",
    "en": "Split the numbers $1$ to $100$ into pairs summing to $101$: $$\\{1,100\\},\\ \\{2,99\\},\\ \\{3,98\\},\\ \\dots,\\ \\{50,51\\}.$$ There are exactly $50$ pairs, and every number lies in exactly one.\n\nThe objects are the $51$ chosen numbers, the boxes these $50$ pairs. Since $51>50$, two chosen numbers lie in one pair — so they add up to $101$. $\\blacksquare$\n\n*Sharpness.* For $50$ numbers the statement fails: take $1,2,\\dots,50$, no two of which sum to $101$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Из чисел $1,2,\\dots,2n$ выбрали $n+1$ число. Докажите, что среди выбранных найдутся два, одно из которых делится на другое.",
    "en": "From $1,2,\\dots,2n$ choose $n+1$ numbers. Prove that one of the chosen numbers divides another."
   },
   "hint": {
    "ru": "Запишите каждое число в виде $2^{k}\\cdot m$ с нечётным $m$.",
    "en": "Write each number as $2^{k}\\cdot m$ with $m$ odd."
   },
   "sol": {
    "ru": "**Ящики.** Каждое натуральное число однозначно записывается в виде $$a=2^{k}\\cdot m,\\qquad k\\ge0,\\quad m\\ \\text{нечётно}.$$ Назовём $m$ **нечётной частью** числа $a$. Для чисел из отрезка $[1,2n]$ нечётная часть — это одно из чисел $$1,3,5,\\dots,2n-1,$$ то есть одно из $n$ значений.\n\n**Применяем принцип.** Предметы — $n+1$ выбранное число, ящики — $n$ возможных нечётных частей. По принципу Дирихле найдутся два выбранных числа с одинаковой нечётной частью: $$a=2^{i}m,\\qquad b=2^{j}m,\\qquad i\\ne j .$$\n\n**Вывод.** Пусть для определённости $i<j$. Тогда $$b=a\\cdot2^{\\,j-i},$$ то есть $a$ делит $b$. $\\blacksquare$\n\n*Точность оценки.* Для $n$ чисел утверждение неверно: возьмите $n+1, n+2,\\dots,2n$. Ни одно из них не делится на другое, потому что удвоение наименьшего из них уже выходит за $2n$.",
    "en": "**The boxes.** Every positive integer is written uniquely as $$a=2^{k}\\cdot m,\\qquad k\\ge0,\\quad m\\ \\text{odd}.$$ Call $m$ the **odd part** of $a$. For numbers in $[1,2n]$ the odd part is one of $$1,3,5,\\dots,2n-1,$$ that is one of $n$ values.\n\n**Apply the principle.** The objects are the $n+1$ chosen numbers, the boxes the $n$ possible odd parts. So two chosen numbers share an odd part: $$a=2^{i}m,\\qquad b=2^{j}m,\\qquad i\\ne j .$$\n\n**Conclusion.** Say $i<j$. Then $$b=a\\cdot2^{\\,j-i},$$ so $a$ divides $b$. $\\blacksquare$\n\n*Sharpness.* For $n$ numbers the statement fails: take $n+1, n+2,\\dots,2n$. None divides another, since doubling the smallest of them already exceeds $2n$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Из чисел $1,2,\\dots,2n$ выбрали $n+1$ число. Докажите, что среди выбранных найдутся два взаимно простых.",
    "en": "From $1,2,\\dots,2n$ choose $n+1$ numbers. Prove that two of them are coprime."
   },
   "hint": {
    "ru": "Разбейте отрезок на пары соседних чисел.",
    "en": "Split the range into pairs of consecutive numbers."
   },
   "sol": {
    "ru": "**Ящики.** Разобьём числа $1,2,\\dots,2n$ на $n$ пар соседних: $$\\{1,2\\},\\ \\{3,4\\},\\ \\{5,6\\},\\ \\dots,\\ \\{2n-1,2n\\}.$$\n\n**Применяем принцип.** Выбрано $n+1$ число, а пар $n$, поэтому какие-то два выбранных числа лежат в одной паре — то есть являются **соседними**: $a$ и $a+1$.\n\n**Соседние числа взаимно просты.** Пусть $d$ делит и $a$, и $a+1$. Тогда $d$ делит их разность $(a+1)-a=1$, значит $d=1$.\n\nЗначит найденные два числа взаимно просты. $\\blacksquare$\n\n*Точность оценки.* Для $n$ чисел утверждение неверно: возьмите все чётные числа $2,4,\\dots,2n$ — любые два из них делятся на $2$.",
    "en": "**The boxes.** Split $1,2,\\dots,2n$ into $n$ pairs of consecutive numbers: $$\\{1,2\\},\\ \\{3,4\\},\\ \\{5,6\\},\\ \\dots,\\ \\{2n-1,2n\\}.$$\n\n**Apply the principle.** With $n+1$ numbers chosen and $n$ pairs, two chosen numbers lie in one pair — that is, they are **consecutive**: $a$ and $a+1$.\n\n**Consecutive numbers are coprime.** If $d$ divides both $a$ and $a+1$ then $d$ divides $(a+1)-a=1$, so $d=1$.\n\nHence the two numbers found are coprime. $\\blacksquare$\n\n*Sharpness.* For $n$ numbers the statement fails: take all the even numbers $2,4,\\dots,2n$, any two of which share the factor $2$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что существует число, записываемое только цифрами $0$ и $1$ и делящееся на $2025$.",
    "en": "Prove that some number written only with the digits $0$ and $1$ is divisible by $2025$."
   },
   "hint": {
    "ru": "Рассмотрите числа $1,11,111,\\dots$ и их остатки, а потом умножьте на подходящую степень десяти.",
    "en": "Look at $1,11,111,\\dots$ and their remainders, then multiply by a suitable power of ten."
   },
   "sol": {
    "ru": "Разложим $2025=81\\cdot25=3^{4}\\cdot5^{2}$.\n\n**Шаг 1: числа из одних единиц.** Рассмотрим $2026$ чисел $$R_1=1,\\ R_2=11,\\ \\dots,\\ R_{2026}=\\underbrace{11\\ldots1}_{2026},$$ и их остатки по модулю $81$. Остатков $81$, чисел больше, значит два дают одинаковый остаток: $R_i\\equiv R_j$ при $i>j$. Тогда $$81\\ \\big|\\ R_i-R_j=R_{\\,i-j}\\cdot10^{\\,j}.$$ Число $81=3^{4}$ взаимно просто с $10$, поэтому $81\\mid R_{\\,i-j}$. Обозначим $N=R_{\\,i-j}$ — это число из одних единиц, кратное $81$.\n\n**Шаг 2: добираем множитель $25$.** Рассмотрим число $$M=N\\cdot100 .$$ Оно записывается теми же единицами и двумя нулями в конце, то есть только цифрами $0$ и $1$. При этом $M$ делится на $81$ (так как на него делится $N$) и на $100$, а значит и на $25$.\n\nЧисла $81$ и $25$ взаимно просты, поэтому $M$ делится на их произведение $2025$. $\\blacksquare$\n\n*Замечание.* Тот же приём работает для любого $n$: сначала «набираем» ту часть $n$, которая взаимно проста с $10$, приписыванием единиц, а потом ту часть, что состоит из двоек и пятёрок, — приписыванием нулей.",
    "en": "Factor $2025=81\\cdot25=3^{4}\\cdot5^{2}$.\n\n**Step 1: repunits.** Consider the $2026$ numbers $$R_1=1,\\ R_2=11,\\ \\dots,\\ R_{2026}=\\underbrace{11\\ldots1}_{2026},$$ and their remainders modulo $81$. There are $81$ remainders and more numbers, so two share one: $R_i\\equiv R_j$ with $i>j$. Then $$81\\ \\big|\\ R_i-R_j=R_{\\,i-j}\\cdot10^{\\,j}.$$ Since $81=3^{4}$ is coprime to $10$, we get $81\\mid R_{\\,i-j}$. Write $N=R_{\\,i-j}$ — a repunit divisible by $81$.\n\n**Step 2: bring in the factor $25$.** Consider $$M=N\\cdot100 .$$ It is written with the same ones and two trailing zeros, so only with the digits $0$ and $1$. It is divisible by $81$ (because $N$ is) and by $100$, hence by $25$.\n\nAs $81$ and $25$ are coprime, $M$ is divisible by their product $2025$. $\\blacksquare$\n\n*Remark.* The same trick works for any $n$: first pick up the part of $n$ coprime to $10$ by appending ones, then the part made of twos and fives by appending zeros."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "В компании из шести человек любые двое либо знакомы, либо нет. Докажите, что найдутся трое попарно знакомых или трое попарно незнакомых.",
    "en": "In a group of six people any two are either acquainted or not. Prove that there are three mutual acquaintances or three mutual strangers."
   },
   "hint": {
    "ru": "Возьмите одного человека и посмотрите на пятерых остальных.",
    "en": "Take one person and look at the other five."
   },
   "sol": {
    "ru": "Возьмём произвольного человека $A$. С каждым из остальных пятерых он либо знаком, либо нет — два варианта на пять человек.\n\nПо обобщённому принципу Дирихле один из вариантов встречается не менее $\\left\\lceil\\tfrac52\\right\\rceil=3$ раз. Разберём случай, когда $A$ **знаком** по крайней мере с тремя (второй случай получается заменой слова «знаком» на «незнаком» во всём рассуждении).\n\nПусть $A$ знаком с $B$, $C$, $D$.\n\n**Случай 1.** Какие-то двое из $B,C,D$ знакомы между собой — пусть это $B$ и $C$. Тогда $A$, $B$, $C$ попарно знакомы: искомая тройка найдена.\n\n**Случай 2.** Никакие двое из $B,C,D$ не знакомы. Тогда сами $B$, $C$, $D$ образуют тройку попарно незнакомых.\n\nВ обоих случаях утверждение верно. $\\blacksquare$\n\n*Точность.* Для пяти человек утверждение неверно: рассадим пятерых по кругу и объявим знакомыми ровно соседей. Тогда любые трое включают двух несоседей (незнакомых) и двух соседей (знакомых), так что ни одной однородной тройки нет.\n\n*Название.* На языке теории Рамсея доказанное означает $R(3,3)=6$.",
    "en": "Take any person $A$. With each of the other five they are either acquainted or not — two options across five people.\n\nBy the generalised principle one option occurs at least $\\left\\lceil\\tfrac52\\right\\rceil=3$ times. Take the case where $A$ **knows** at least three (the other case is the same argument with \"knows\" replaced throughout by \"does not know\").\n\nSay $A$ knows $B$, $C$, $D$.\n\n**Case 1.** Two of $B,C,D$ know each other — say $B$ and $C$. Then $A$, $B$, $C$ are mutual acquaintances: done.\n\n**Case 2.** No two of $B,C,D$ know each other. Then $B$, $C$, $D$ themselves are three mutual strangers.\n\nEither way the claim holds. $\\blacksquare$\n\n*Sharpness.* For five people it fails: seat five in a circle and let exactly the neighbours be acquainted. Any three then contain two non-neighbours (strangers) and two neighbours (acquaintances), so no homogeneous triple exists.\n\n*The name.* In Ramsey theory this says $R(3,3)=6$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "В квадрате со стороной $1$ расположено $101$ точка. Докажите, что какие-то три из них лежат в треугольнике площади не больше $\\tfrac1{100}$.",
    "en": "A unit square contains $101$ points. Prove that some three of them lie in a triangle of area at most $\\tfrac1{100}$."
   },
   "hint": {
    "ru": "Разрежьте квадрат на $50$ горизонтальных полос.",
    "en": "Cut the square into $50$ horizontal strips."
   },
   "sol": {
    "ru": "Разрежем квадрат на $50$ горизонтальных полос высотой $\\tfrac1{50}$ каждая.\n\nПредметов $101$, полос $50$, и $101>2\\cdot50=100$. По обобщённому принципу Дирихле в какой-то полосе окажется не менее $\\left\\lceil\\tfrac{101}{50}\\right\\rceil=3$ точек.\n\nВозьмём три такие точки и рассмотрим треугольник с вершинами в них. Он целиком лежит в полосе размером $1\\times\\tfrac1{50}$.\n\n**Оценим площадь.** Примем за основание ту сторону треугольника, которая имеет наибольшую горизонтальную протяжённость; её длина не превосходит... удобнее оценить иначе. Треугольник вписан в прямоугольник $1\\times\\tfrac1{50}$, а площадь треугольника, лежащего внутри прямоугольника, не превосходит **половины** площади этого прямоугольника. Значит $$S\\le\\frac12\\cdot1\\cdot\\frac1{50}=\\frac1{100}. \\qquad\\blacksquare$$\n\n*Почему треугольник в прямоугольнике не больше половины.* Проведём через вершину, лежащую между двумя другими по горизонтали, вертикальную прямую. Она делит треугольник на два, у каждого из которых основание вертикально и не длиннее высоты прямоугольника, а высота не превосходит соответствующей части ширины. Сумма их площадей не больше $\\tfrac12\\cdot\\text{высота}\\cdot\\text{ширина}$.",
    "en": "Cut the square into $50$ horizontal strips of height $\\tfrac1{50}$.\n\nThere are $101$ points and $50$ strips, and $101>2\\cdot50=100$. By the generalised principle some strip holds at least $\\left\\lceil\\tfrac{101}{50}\\right\\rceil=3$ points.\n\nTake three such points and the triangle they span. It lies entirely inside a $1\\times\\tfrac1{50}$ rectangle.\n\n**Bound the area.** A triangle contained in a rectangle has area at most **half** the rectangle’s area. Hence $$S\\le\\frac12\\cdot1\\cdot\\frac1{50}=\\frac1{100}. \\qquad\\blacksquare$$\n\n*Why a triangle in a rectangle is at most half.* Draw the vertical line through the vertex that lies horizontally between the other two. It splits the triangle into two, each with a vertical base no longer than the rectangle’s height and a horizontal height no larger than its share of the width. Their areas add up to at most $\\tfrac12\\cdot\\text{height}\\cdot\\text{width}$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Даны десять различных двузначных чисел. Докажите, что из них можно выбрать два непересекающихся непустых подмножества с одинаковой суммой.",
    "en": "Ten distinct two-digit numbers are given. Prove that two disjoint non-empty subsets of them have equal sums."
   },
   "hint": {
    "ru": "Сравните число подмножеств с числом возможных сумм.",
    "en": "Compare the number of subsets with the number of possible sums."
   },
   "sol": {
    "ru": "**Считаем предметы.** У множества из десяти чисел ровно $2^{10}-1=1023$ непустых подмножества.\n\n**Считаем ящики.** Сумма элементов любого подмножества не меньше наименьшего двузначного числа, то есть $10$, и не больше суммы десяти наибольших двузначных чисел: $$90+91+\\dots+99=\\frac{90+99}{2}\\cdot10=945 .$$ Значит сумма принимает одно из значений $10,11,\\dots,945$ — всего $936$ значений.\n\n**Принцип Дирихле.** $1023>936$, поэтому найдутся два **различных** подмножества $A\\ne B$ с одинаковой суммой.\n\n**Делаем их непересекающимися.** Выбросим из обоих их общую часть: положим $$A^{\\prime}=A\\setminus B,\\qquad B^{\\prime}=B\\setminus A .$$ Суммы уменьшились на одну и ту же величину (сумму общей части), поэтому по-прежнему равны. Множества $A^{\\prime}$ и $B^{\\prime}$ не пересекаются по построению.\n\nОстаётся проверить, что они непусты. Если бы, скажем, $A^{\\prime}$ было пустым, то $A\\subseteq B$, а из равенства сумм следовало бы, что сумма элементов $B\\setminus A$ равна нулю. Но все числа положительны, значит $B\\setminus A$ пусто и $A=B$ — противоречие с $A\\ne B$. $\\blacksquare$",
    "en": "**Count the objects.** A ten-element set has exactly $2^{10}-1=1023$ non-empty subsets.\n\n**Count the boxes.** The sum of a subset is at least the smallest two-digit number, $10$, and at most the sum of the ten largest two-digit numbers: $$90+91+\\dots+99=\\frac{90+99}{2}\\cdot10=945 .$$ So the sum takes one of the values $10,11,\\dots,945$ — $936$ values in all.\n\n**Pigeonhole.** As $1023>936$, two **different** subsets $A\\ne B$ have equal sums.\n\n**Make them disjoint.** Remove their common part from both: $$A^{\\prime}=A\\setminus B,\\qquad B^{\\prime}=B\\setminus A .$$ Both sums dropped by the same amount (the sum of the common part), so they are still equal, and $A^{\\prime}$, $B^{\\prime}$ are disjoint by construction.\n\nIt remains to check they are non-empty. If, say, $A^{\\prime}$ were empty then $A\\subseteq B$, and equality of sums would force the elements of $B\\setminus A$ to add to zero. But all the numbers are positive, so $B\\setminus A$ is empty and $A=B$ — contradicting $A\\ne B$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Каждая клетка таблицы $3\\times7$ покрашена в белый или чёрный цвет. Докажите, что найдётся прямоугольник (со сторонами по линиям таблицы), все четыре угловые клетки которого одного цвета.",
    "en": "Each cell of a $3\\times7$ table is coloured white or black. Prove that there is a rectangle (with sides along the grid) whose four corner cells all have the same colour."
   },
   "hint": {
    "ru": "В каждом столбце три клетки и два цвета — значит, есть повторение.",
    "en": "Each column has three cells and two colours — so some colour repeats."
   },
   "sol": {
    "ru": "**Шаг 1: в каждом столбце есть одноцветная пара.** В столбце три клетки и два цвета, поэтому по принципу Дирихле какие-то две клетки столбца одного цвета.\n\nПоставим каждому столбцу в соответствие такую пару: запишем её как (цвет; номера двух строк).\n\n**Шаг 2: сколько таких пометок бывает.** Цветов два. Пар строк из трёх: $\\dbinom32=3$, а именно $\\{1,2\\}$, $\\{1,3\\}$, $\\{2,3\\}$. Итого различных пометок $$2\\cdot3=6 .$$\n\n**Шаг 3: применяем принцип.** Столбцов семь, пометок шесть, и $7>6$ — значит два столбца получили одинаковую пометку.\n\nЭто означает: в этих двух столбцах **одни и те же две строки** содержат клетки **одного и того же цвета**. Четыре такие клетки и образуют углы искомого прямоугольника. $\\blacksquare$\n\n*Точность.* Для таблицы $3\\times6$ утверждение уже неверно: можно взять по одному столбцу каждой из шести пометок, и одноцветного прямоугольника не возникнет.",
    "en": "**Step 1: every column has a monochromatic pair.** A column has three cells and two colours, so by the pigeonhole principle two of its cells share a colour.\n\nLabel each column by such a pair: record it as (colour; the two row numbers).\n\n**Step 2: how many labels there are.** Two colours; and $\\dbinom32=3$ pairs of rows, namely $\\{1,2\\}$, $\\{1,3\\}$, $\\{2,3\\}$. So there are $$2\\cdot3=6$$ different labels.\n\n**Step 3: apply the principle.** There are seven columns and six labels, and $7>6$ — so two columns carry the same label.\n\nThat means: in those two columns the **same two rows** hold cells of the **same colour**. Those four cells are the corners of the required rectangle. $\\blacksquare$\n\n*Sharpness.* For a $3\\times6$ table the statement already fails: take one column of each of the six labels and no monochromatic rectangle appears."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что среди любых $n+1$ чисел, выбранных из $\\{1,2,\\dots,3n\\}$, найдутся два, разность которых не превосходит $2$.",
    "en": "Prove that among any $n+1$ numbers chosen from $\\{1,2,\\dots,3n\\}$ there are two whose difference is at most $2$."
   },
   "hint": {
    "ru": "Разбейте отрезок на тройки подряд идущих чисел.",
    "en": "Split the range into blocks of three consecutive numbers."
   },
   "sol": {
    "ru": "Разобьём числа $1,2,\\dots,3n$ на $n$ блоков по три подряд идущих: $$\\{1,2,3\\},\\ \\{4,5,6\\},\\ \\dots,\\ \\{3n-2,3n-1,3n\\}.$$\n\nПредметы — $n+1$ выбранное число, ящики — $n$ блоков. Так как $n+1>n$, два выбранных числа попали в один блок.\n\nВнутри блока разность наибольшего и наименьшего чисел равна $2$, поэтому разность любых двух чисел блока не превосходит $2$. $\\blacksquare$\n\n*Точность оценки.* Для $n$ чисел утверждение неверно: возьмите $1,4,7,\\dots,3n-2$ — по одному из каждого блока. Разность любых двух из них не меньше $3$.",
    "en": "Split $1,2,\\dots,3n$ into $n$ blocks of three consecutive numbers: $$\\{1,2,3\\},\\ \\{4,5,6\\},\\ \\dots,\\ \\{3n-2,3n-1,3n\\}.$$\n\nThe objects are the $n+1$ chosen numbers, the boxes the $n$ blocks. Since $n+1>n$, two chosen numbers land in one block.\n\nInside a block the largest and smallest differ by $2$, so any two of its numbers differ by at most $2$. $\\blacksquare$\n\n*Sharpness.* For $n$ numbers the statement fails: take $1,4,7,\\dots,3n-2$, one from each block; any two of them differ by at least $3$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Даны $100$ целых чисел. Докажите, что среди них можно выбрать несколько подряд идущих (в данном порядке), сумма которых делится на $100$.",
    "en": "One hundred integers are given. Prove that some block of consecutive ones (in the given order) has a sum divisible by $100$."
   },
   "hint": {
    "ru": "Рассмотрите частичные суммы $S_1,\\dots,S_{100}$ и их остатки.",
    "en": "Look at the partial sums $S_1,\\dots,S_{100}$ and their remainders."
   },
   "sol": {
    "ru": "Пусть числа равны $a_1,a_2,\\dots,a_{100}$. Рассмотрим **частичные суммы** $$S_1=a_1,\\quad S_2=a_1+a_2,\\quad \\dots,\\quad S_{100}=a_1+\\dots+a_{100}.$$\n\n**Случай 1: какая-то $S_i$ делится на $100$.** Тогда искомый блок — это первые $i$ чисел, и всё доказано.\n\n**Случай 2: ни одна $S_i$ не делится на $100$.** Тогда каждая из ста сумм $S_1,\\dots,S_{100}$ даёт при делении на $100$ один из **ненулевых** остатков $1,2,\\dots,99$ — всего $99$ возможностей.\n\nПредметов сто, ящиков девяносто девять, и по принципу Дирихле найдутся $i<j$ с $$S_i\\equiv S_j\\pmod{100}.$$\n\nТогда $100$ делит разность $$S_j-S_i=a_{i+1}+a_{i+2}+\\dots+a_j ,$$ то есть сумму подряд идущих чисел с номерами от $i+1$ до $j$. Этот блок непуст, потому что $i<j$. $\\blacksquare$\n\n*Обобщение.* Тот же довод показывает: среди любых $n$ целых чисел найдётся блок подряд идущих с суммой, кратной $n$.\n\n*Точность.* Для $n-1$ чисел утверждение неверно: возьмите $n-1$ единиц — суммы блоков равны $1,2,\\dots,n-1$, и ни одна не делится на $n$.",
    "en": "Let the numbers be $a_1,a_2,\\dots,a_{100}$ and form the **partial sums** $$S_1=a_1,\\quad S_2=a_1+a_2,\\quad \\dots,\\quad S_{100}=a_1+\\dots+a_{100}.$$\n\n**Case 1: some $S_i$ is divisible by $100$.** Then the block is the first $i$ numbers and we are done.\n\n**Case 2: no $S_i$ is.** Then each of the hundred sums $S_1,\\dots,S_{100}$ leaves one of the **non-zero** remainders $1,2,\\dots,99$ modulo $100$ — $99$ possibilities.\n\nWith a hundred objects and ninety-nine boxes, the pigeonhole principle gives $i<j$ with $$S_i\\equiv S_j\\pmod{100}.$$\n\nThen $100$ divides the difference $$S_j-S_i=a_{i+1}+a_{i+2}+\\dots+a_j ,$$ the sum of the consecutive numbers from $i+1$ to $j$. That block is non-empty because $i<j$. $\\blacksquare$\n\n*Generalisation.* The same argument shows: among any $n$ integers some block of consecutive ones has a sum divisible by $n$.\n\n*Sharpness.* For $n-1$ numbers it fails: take $n-1$ ones — the block sums are $1,2,\\dots,n-1$ and none is divisible by $n$."
   }
  },
  {
   "src": "Теорема Эрдёша–Секереша / Erdős–Szekeres",
   "lvl": 3,
   "q": {
    "ru": "Дана последовательность из $n^{2}+1$ попарно различных чисел. Докажите, что из неё можно выбрать подпоследовательность длины $n+1$, которая либо строго возрастает, либо строго убывает.",
    "en": "A sequence of $n^{2}+1$ pairwise distinct numbers is given. Prove that it contains a subsequence of length $n+1$ that is either strictly increasing or strictly decreasing."
   },
   "hint": {
    "ru": "Каждому члену сопоставьте пару чисел: длины наибольших возрастающей и убывающей подпоследовательностей, **оканчивающихся** на нём.",
    "en": "To each term attach a pair: the lengths of the longest increasing and longest decreasing subsequences **ending** at it."
   },
   "sol": {
    "ru": "Обозначим последовательность через $a_1,a_2,\\dots,a_N$, где $N=n^{2}+1$.\n\n**Пометки.** Каждому члену $a_i$ сопоставим пару чисел $$\\left(u_i,\\ d_i\\right),$$ где $u_i$ — длина самой длинной строго **возрастающей** подпоследовательности, оканчивающейся на $a_i$, а $d_i$ — длина самой длинной строго **убывающей**, оканчивающейся на $a_i$. Обе величины не меньше $1$ (сам член образует подпоследовательность длины один).\n\n**Ключевое наблюдение: пометки различны.** Пусть $i<j$. Числа различны, поэтому либо $a_i<a_j$, либо $a_i>a_j$.\n\n*Если $a_i<a_j$,* то любую возрастающую подпоследовательность, оканчивающуюся на $a_i$, можно продлить членом $a_j$, поэтому $u_j\\ge u_i+1>u_i$.\n\n*Если $a_i>a_j$,* то точно так же $d_j\\ge d_i+1>d_i$.\n\nВ обоих случаях пары $\\left(u_i,d_i\\right)$ и $\\left(u_j,d_j\\right)$ различаются. Значит **все $N$ пометок попарно различны**.\n\n**Применяем принцип Дирихле.** Предположим, что утверждение неверно: и возрастающих, и убывающих подпоследовательностей длины $n+1$ не существует. Тогда для всех $i$ $$1\\le u_i\\le n,\\qquad 1\\le d_i\\le n ,$$ и различных пар $\\left(u_i,d_i\\right)$ бывает не более $n\\cdot n=n^{2}$.\n\nНо пометок $N=n^{2}+1$ штук, и все они различны — противоречие.\n\nЗначит найдётся либо возрастающая, либо убывающая подпоследовательность длины $n+1$. $\\blacksquare$\n\n*Точность оценки.* Для $n^{2}$ чисел утверждение неверно. Возьмём при $n=3$ последовательность $$3,2,1,\\ 6,5,4,\\ 9,8,7 .$$ Возрастающая подпоследовательность берёт не более одного члена из каждой тройки, значит её длина не больше $3$; убывающая целиком лежит внутри одной тройки, значит тоже не длиннее $3$.",
    "en": "Write the sequence as $a_1,a_2,\\dots,a_N$ with $N=n^{2}+1$.\n\n**Labels.** To each term $a_i$ attach the pair $$\\left(u_i,\\ d_i\\right),$$ where $u_i$ is the length of the longest strictly **increasing** subsequence ending at $a_i$ and $d_i$ that of the longest strictly **decreasing** one ending at $a_i$. Both are at least $1$ (the term alone is a subsequence of length one).\n\n**The key observation: the labels are distinct.** Let $i<j$. The numbers differ, so either $a_i<a_j$ or $a_i>a_j$.\n\n*If $a_i<a_j$,* any increasing subsequence ending at $a_i$ extends by $a_j$, so $u_j\\ge u_i+1>u_i$.\n\n*If $a_i>a_j$,* the same reasoning gives $d_j\\ge d_i+1>d_i$.\n\nEither way the pairs $\\left(u_i,d_i\\right)$ and $\\left(u_j,d_j\\right)$ differ. So **all $N$ labels are pairwise distinct**.\n\n**Apply the principle.** Suppose the claim fails: there is no increasing and no decreasing subsequence of length $n+1$. Then for every $i$ $$1\\le u_i\\le n,\\qquad 1\\le d_i\\le n ,$$ and there are at most $n\\cdot n=n^{2}$ possible pairs.\n\nBut there are $N=n^{2}+1$ labels, all distinct — a contradiction.\n\nHence an increasing or a decreasing subsequence of length $n+1$ exists. $\\blacksquare$\n\n*Sharpness.* For $n^{2}$ numbers it fails. At $n=3$ take $$3,2,1,\\ 6,5,4,\\ 9,8,7 .$$ An increasing subsequence takes at most one term from each block, so its length is at most $3$; a decreasing one lies inside a single block, so it is no longer than $3$ either."
   }
  },
  {
   "src": "Теорема Дирихле о приближениях / Dirichlet approximation",
   "lvl": 3,
   "q": {
    "ru": "Пусть $\\alpha$ — вещественное число и $N$ — натуральное. Докажите, что найдутся целые $p$ и $q$ с $1\\le q\\le N$, для которых $$\\left|\\alpha-\\frac pq\\right|<\\frac1{qN}.$$",
    "en": "Let $\\alpha$ be real and $N$ a positive integer. Prove that there are integers $p$ and $q$ with $1\\le q\\le N$ such that $$\\left|\\alpha-\\frac pq\\right|<\\frac1{qN}.$$"
   },
   "hint": {
    "ru": "Разбейте отрезок $[0,1)$ на $N$ равных частей и посмотрите на дробные части чисел $k\\alpha$.",
    "en": "Split $[0,1)$ into $N$ equal parts and look at the fractional parts of $k\\alpha$."
   },
   "sol": {
    "ru": "Обозначим через $\\{x\\}$ дробную часть числа $x$, то есть $\\{x\\}=x-\\lfloor x\\rfloor\\in[0,1)$.\n\n**Предметы.** Рассмотрим $N+1$ число $$\\{0\\cdot\\alpha\\},\\ \\{1\\cdot\\alpha\\},\\ \\{2\\cdot\\alpha\\},\\ \\dots,\\ \\{N\\alpha\\} .$$ Все они лежат в промежутке $[0,1)$.\n\n**Ящики.** Разобьём $[0,1)$ на $N$ полуинтервалов равной длины: $$\\left[0,\\tfrac1N\\right),\\ \\left[\\tfrac1N,\\tfrac2N\\right),\\ \\dots,\\ \\left[\\tfrac{N-1}{N},1\\right).$$\n\n**Принцип Дирихле.** Чисел $N+1$, промежутков $N$, значит два числа попали в один промежуток: найдутся $0\\le i<j\\le N$ с $$\\left|\\{j\\alpha\\}-\\{i\\alpha\\}\\right|<\\frac1N$$ (строгое неравенство — потому что длина промежутка равна $\\tfrac1N$, а концы в него входят не оба).\n\n**Переписываем.** По определению дробной части $$\\{j\\alpha\\}-\\{i\\alpha\\}=(j-i)\\alpha-\\left(\\lfloor j\\alpha\\rfloor-\\lfloor i\\alpha\\rfloor\\right).$$ Положим $$q=j-i,\\qquad p=\\lfloor j\\alpha\\rfloor-\\lfloor i\\alpha\\rfloor .$$ Оба числа целые, и $1\\le q\\le N$, поскольку $0\\le i<j\\le N$.\n\nПолученное неравенство принимает вид $$\\left|q\\alpha-p\\right|<\\frac1N .$$\n\n**Делим на $q>0$.** $$\\left|\\alpha-\\frac pq\\right|<\\frac1{qN}. \\qquad\\blacksquare$$\n\n*Следствие.* Если $\\alpha$ иррационально, то, беря всё большие $N$, получаем бесконечно много различных дробей $\\tfrac pq$ с $$\\left|\\alpha-\\frac pq\\right|<\\frac1{q^{2}}$$ (ведь $q\\le N$ даёт $\\tfrac1{qN}\\le\\tfrac1{q^{2}}$). Именно этот факт лежит в основе теории приближения иррациональных чисел рациональными.",
    "en": "Write $\\{x\\}$ for the fractional part of $x$, so $\\{x\\}=x-\\lfloor x\\rfloor\\in[0,1)$.\n\n**The objects.** Consider the $N+1$ numbers $$\\{0\\cdot\\alpha\\},\\ \\{1\\cdot\\alpha\\},\\ \\{2\\cdot\\alpha\\},\\ \\dots,\\ \\{N\\alpha\\} ,$$ all lying in $[0,1)$.\n\n**The boxes.** Split $[0,1)$ into $N$ half-open intervals of equal length: $$\\left[0,\\tfrac1N\\right),\\ \\left[\\tfrac1N,\\tfrac2N\\right),\\ \\dots,\\ \\left[\\tfrac{N-1}{N},1\\right).$$\n\n**Pigeonhole.** With $N+1$ numbers and $N$ intervals, two numbers land in one interval: there are $0\\le i<j\\le N$ with $$\\left|\\{j\\alpha\\}-\\{i\\alpha\\}\\right|<\\frac1N$$ (strictly, because the interval has length $\\tfrac1N$ and does not contain both endpoints).\n\n**Rewrite.** By definition of the fractional part, $$\\{j\\alpha\\}-\\{i\\alpha\\}=(j-i)\\alpha-\\left(\\lfloor j\\alpha\\rfloor-\\lfloor i\\alpha\\rfloor\\right).$$ Put $$q=j-i,\\qquad p=\\lfloor j\\alpha\\rfloor-\\lfloor i\\alpha\\rfloor .$$ Both are integers and $1\\le q\\le N$, since $0\\le i<j\\le N$.\n\nThe inequality becomes $$\\left|q\\alpha-p\\right|<\\frac1N .$$\n\n**Divide by $q>0$.** $$\\left|\\alpha-\\frac pq\\right|<\\frac1{qN}. \\qquad\\blacksquare$$\n\n*Corollary.* If $\\alpha$ is irrational then, letting $N$ grow, one gets infinitely many distinct fractions $\\tfrac pq$ with $$\\left|\\alpha-\\frac pq\\right|<\\frac1{q^{2}}$$ (since $q\\le N$ gives $\\tfrac1{qN}\\le\\tfrac1{q^{2}}$). This fact underlies the whole theory of approximating irrationals by rationals."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что существует натуральная степень тройки, десятичная запись которой оканчивается на $001$.",
    "en": "Prove that some positive power of three ends in the digits $001$."
   },
   "hint": {
    "ru": "Достаточно найти $k$ с $3^{k}\\equiv1\\pmod{1000}$.",
    "en": "It suffices to find $k$ with $3^{k}\\equiv1\\pmod{1000}$."
   },
   "sol": {
    "ru": "Оканчиваться на $001$ — значит давать остаток $1$ при делении на $1000$. Достаточно найти натуральное $k$ с $$3^{k}\\equiv1\\pmod{1000}.$$\n\n**Предметы и ящики.** Рассмотрим $1001$ число $$3^{1},\\ 3^{2},\\ \\dots,\\ 3^{1001}$$ и их остатки по модулю $1000$. Остатков ровно $1000$, а чисел больше, значит по принципу Дирихле найдутся показатели $a<b$ с $$3^{a}\\equiv3^{b}\\pmod{1000}.$$\n\n**Сокращаем.** Разность делится на $1000$: $$1000\\ \\big|\\ 3^{b}-3^{a}=3^{a}\\left(3^{\\,b-a}-1\\right).$$ Число $1000=2^{3}\\cdot5^{3}$ взаимно просто с тройкой, а значит и со степенью $3^{a}$. Поэтому $$1000\\ \\big|\\ 3^{\\,b-a}-1,$$ то есть $3^{k}\\equiv1\\pmod{1000}$ при $k=b-a\\ge1$.\n\nЗначит $3^{k}$ оканчивается на $001$. $\\blacksquare$\n\n*Что это за $k$ на самом деле.* Наименьшее такое значение равно $100$: действительно, $3^{100}$ оканчивается на $001$. Но принцип Дирихле доказал существование, ничего не вычисляя, — в этом и состоит его сила.\n\n*Обобщение.* Тот же довод показывает: для любых взаимно простых $a$ и $m$ найдётся $k\\ge1$ с $a^{k}\\equiv1\\pmod m$. Это существование **порядка** элемента — отправная точка всей теории вычетов.",
    "en": "Ending in $001$ means leaving remainder $1$ on division by $1000$. So it suffices to find a positive $k$ with $$3^{k}\\equiv1\\pmod{1000}.$$\n\n**Objects and boxes.** Consider the $1001$ numbers $$3^{1},\\ 3^{2},\\ \\dots,\\ 3^{1001}$$ and their remainders modulo $1000$. There are exactly $1000$ remainders and more numbers, so by the pigeonhole principle there are exponents $a<b$ with $$3^{a}\\equiv3^{b}\\pmod{1000}.$$\n\n**Cancel.** The difference is divisible by $1000$: $$1000\\ \\big|\\ 3^{b}-3^{a}=3^{a}\\left(3^{\\,b-a}-1\\right).$$ Since $1000=2^{3}\\cdot5^{3}$ is coprime to three, and hence to $3^{a}$, we get $$1000\\ \\big|\\ 3^{\\,b-a}-1,$$ that is $3^{k}\\equiv1\\pmod{1000}$ with $k=b-a\\ge1$.\n\nSo $3^{k}$ ends in $001$. $\\blacksquare$\n\n*What $k$ actually is.* The smallest such value is $100$: indeed $3^{100}$ ends in $001$. But the pigeonhole principle proved existence without computing anything — that is exactly its strength.\n\n*Generalisation.* The same argument shows that for coprime $a$ and $m$ there is a $k\\ge1$ with $a^{k}\\equiv1\\pmod m$. This is the existence of the **order** of an element — the starting point of the whole theory of residues."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "В круге радиуса $1$ отмечено семь точек. Докажите, что какие-то две из них находятся на расстоянии не больше $1$.",
    "en": "Seven points are marked in a disc of radius $1$. Prove that two of them are at distance at most $1$."
   },
   "hint": {
    "ru": "Разрежьте круг на шесть секторов по $60^\\circ$ и оцените расстояние между двумя точками одного сектора.",
    "en": "Cut the disc into six $60^\\circ$ sectors and bound the distance between two points of one sector."
   },
   "sol": {
    "ru": "**Лемма.** Если точки $P$ и $Q$ лежат в круге радиуса $1$ с центром $O$ и угол $\\angle POQ\\le60^\\circ$, то $PQ\\le1$.\n\n*Доказательство.* Обозначим $x=OP$ и $y=OQ$; по условию $0\\le x,y\\le1$. Если одна из точек совпала с центром, то $PQ$ равно $x$ или $y$ и не превосходит $1$. Иначе по теореме косинусов $$PQ^{2}=x^{2}+y^{2}-2xy\\cos\\angle POQ .$$ Из $\\angle POQ\\le60^\\circ$ следует $\\cos\\angle POQ\\ge\\tfrac12$, поэтому $$PQ^{2}\\le x^{2}+y^{2}-xy .$$ Пусть для определённости $x\\ge y$. Тогда $$x^{2}+y^{2}-xy=x^{2}-y\\left(x-y\\right)\\le x^{2}\\le1 ,$$ так как $y\\ge0$ и $x-y\\ge0$. Значит $PQ\\le1$. $\\square$\n\n**Разрез.** Разобьём круг на шесть равных секторов с углом $60^\\circ$ лучами из центра. Точки, попавшие на разделяющий луч, отнесём к одному из двух соседних секторов по заранее выбранному правилу; центр отнесём к любому одному сектору.\n\n**Принцип Дирихле.** Точек семь, секторов шесть, и $7>6$ — значит какие-то две точки попали в один сектор.\n\n**Заключение.** Для двух точек одного сектора угол между направлениями на них из центра не превосходит $60^\\circ$, поэтому по лемме расстояние между ними не больше $1$. $\\blacksquare$\n\n*Замечание о точности.* Для **пяти** точек утверждение неверно: вершины правильного пятиугольника, вписанного в граничную окружность, попарно удалены на $2\\sin36^\\circ\\approx1{,}176>1$. Наш разрез на шесть секторов доказывает утверждение для семи точек; для шести оно тоже верно, но требует более тонкого рассуждения.",
    "en": "**Lemma.** If $P$ and $Q$ lie in a disc of radius $1$ centred at $O$ and $\\angle POQ\\le60^\\circ$, then $PQ\\le1$.\n\n*Proof.* Write $x=OP$ and $y=OQ$, so $0\\le x,y\\le1$. If one of the points is the centre then $PQ$ equals $x$ or $y$ and is at most $1$. Otherwise the law of cosines gives $$PQ^{2}=x^{2}+y^{2}-2xy\\cos\\angle POQ .$$ From $\\angle POQ\\le60^\\circ$ we get $\\cos\\angle POQ\\ge\\tfrac12$, hence $$PQ^{2}\\le x^{2}+y^{2}-xy .$$ Say $x\\ge y$. Then $$x^{2}+y^{2}-xy=x^{2}-y\\left(x-y\\right)\\le x^{2}\\le1 ,$$ since $y\\ge0$ and $x-y\\ge0$. So $PQ\\le1$. $\\square$\n\n**The cut.** Split the disc into six equal $60^\\circ$ sectors by rays from the centre. Points falling on a dividing ray are assigned to one of the two neighbouring sectors by a rule fixed in advance; the centre goes to any one sector.\n\n**Pigeonhole.** Seven points, six sectors, $7>6$ — so two points share a sector.\n\n**Conclusion.** For two points of one sector the angle between the directions from the centre is at most $60^\\circ$, so by the lemma their distance is at most $1$. $\\blacksquare$\n\n*Sharpness.* For **five** points the statement fails: the vertices of a regular pentagon inscribed in the boundary circle are pairwise $2\\sin36^\\circ\\approx1.176>1$ apart. Our cut into six sectors proves the claim for seven points; it also holds for six, but that needs a finer argument."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Внутри квадрата со стороной $1$ расположено несколько кругов, сумма длин граничных окружностей которых равна $10$. Докажите, что найдётся прямая, пересекающая по крайней мере четыре из этих кругов.",
    "en": "Several discs lie inside a unit square, the total circumference of their boundaries being $10$. Prove that some line meets at least four of the discs."
   },
   "hint": {
    "ru": "Спроецируйте круги на сторону квадрата и посчитайте суммарную длину проекций.",
    "en": "Project the discs onto a side of the square and add up the lengths of the projections."
   },
   "sol": {
    "ru": "**Проекции.** Спроецируем все круги на нижнюю сторону квадрата (то есть на отрезок длины $1$). Проекция круга диаметра $d$ — это отрезок длины ровно $d$.\n\nЕсли длина граничной окружности круга равна $c$, то его диаметр равен $d=\\dfrac{c}{\\pi}$. Значит суммарная длина всех проекций равна $$\\sum d_i=\\frac{1}{\\pi}\\sum c_i=\\frac{10}{\\pi}.$$\n\n**Оценка.** $\\pi<3{,}15$, поэтому $$\\frac{10}{\\pi}>\\frac{10}{3{,}15}>3{,}17>3 .$$ Итак, суммарная длина проекций строго больше $3$.\n\n**Рассуждение о среднем.** Все проекции лежат внутри отрезка длины $1$. Пусть $f(t)$ — количество проекций, покрывающих точку $t$ этого отрезка. Тогда $$\\int_0^1 f(t)\\,dt=\\sum d_i>3 ,$$ потому что интеграл по отрезку от «кратности покрытия» равен сумме длин покрывающих отрезков.\n\nЕсли бы во всех точках было $f(t)\\le3$, то интеграл не превзошёл бы $3\\cdot1=3$. Значит найдётся точка $t_0$, в которой $f\\left(t_0\\right)\\ge4$.\n\n*Без интеграла.* То же можно сказать так: если каждая точка отрезка покрыта не более чем тремя проекциями, то суммарная длина проекций не больше $3$ (каждая из трёх «слоёв» покрытия имеет длину не больше $1$). Раз суммарная длина больше $3$, какая-то точка покрыта хотя бы четырьмя проекциями.\n\n**Заключение.** Проведём через точку $t_0$ прямую, перпендикулярную стороне, на которую мы проецировали. Она пересекает каждый круг, чья проекция накрывает $t_0$, — а таких кругов не менее четырёх. $\\blacksquare$\n\n*Замечание.* Это типичное «рассуждение о среднем»: мы не указали прямую явно, но доказали, что она существует, сравнив суммарную длину с длиной отрезка.",
    "en": "**Projections.** Project every disc onto the bottom side of the square, a segment of length $1$. The projection of a disc of diameter $d$ is a segment of length exactly $d$.\n\nIf the boundary circle has length $c$ then the diameter is $d=\\dfrac{c}{\\pi}$, so the total length of the projections is $$\\sum d_i=\\frac{1}{\\pi}\\sum c_i=\\frac{10}{\\pi}.$$\n\n**A bound.** Since $\\pi<3.15$, $$\\frac{10}{\\pi}>\\frac{10}{3.15}>3.17>3 .$$ So the projections have total length strictly greater than $3$.\n\n**The averaging argument.** All the projections lie inside a segment of length $1$. Let $f(t)$ be the number of projections covering the point $t$. Then $$\\int_0^1 f(t)\\,dt=\\sum d_i>3 ,$$ since integrating the covering multiplicity gives the total length of the covering segments.\n\nIf $f(t)\\le3$ everywhere, the integral would be at most $3\\cdot1=3$. So there is a point $t_0$ with $f\\left(t_0\\right)\\ge4$.\n\n*Without integration.* The same in words: if every point of the segment were covered by at most three projections, the total length of the projections would be at most $3$ (each of the three \"layers\" has length at most $1$). As the total exceeds $3$, some point is covered by at least four.\n\n**Conclusion.** Draw through $t_0$ the line perpendicular to the side we projected onto. It meets every disc whose projection covers $t_0$ — and there are at least four of them. $\\blacksquare$\n\n*Remark.* This is a typical averaging argument: the line is never exhibited, but its existence follows from comparing a total length with the length of the segment."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что среди любых $13$ человек найдутся двое, родившихся в один и тот же месяц.",
    "en": "Prove that among any $13$ people two were born in the same month."
   },
   "hint": {
    "ru": "Месяцев двенадцать.",
    "en": "There are twelve months."
   },
   "sol": {
    "ru": "«Клетки» — это $12$ месяцев, «зайцы» — $13$ человек.\n\nЕсли бы все родились в разные месяцы, людей было бы не больше $12$ — противоречие с тем, что их $13$.\n\nЗначит какие-то двое родились в один месяц. $\\blacksquare$\n\n**Принцип Дирихле:** если $n+1$ предметов разложить по $n$ ящикам, то в каком-то ящике окажется не менее двух предметов.",
    "en": "The \"boxes\" are the $12$ months and the \"objects\" are the $13$ people.\n\nIf all were born in different months there would be at most $12$ people — contradicting that there are $13$.\n\nSo two share a birth month. $\\blacksquare$\n\n**The pigeonhole principle:** if $n+1$ objects are placed in $n$ boxes, some box holds at least two."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "В ящике лежат носки трёх цветов. Сколько носков надо вытащить не глядя, чтобы наверняка получить пару одного цвета?",
    "en": "A drawer contains socks of three colours. How many must be drawn blindly to be sure of a matching pair?"
   },
   "hint": {
    "ru": "Три носка могут оказаться разных цветов.",
    "en": "Three socks could be three different colours."
   },
   "sol": {
    "ru": "**Трёх носков мало:** они могут оказаться трёх разных цветов.\n\n**Четырёх хватает:** цветов всего три, значит среди четырёх носков какие-то два одного цвета (принцип Дирихле).\n\n**Ответ:** $4$.\n\n**Обобщение:** при $k$ цветах достаточно $k+1$ носка.",
    "en": "**Three is not enough:** they could be three different colours.\n\n**Four suffices:** there are only three colours, so among four socks two share a colour (pigeonhole).\n\n**Answer:** $4$.\n\n**Generalisation:** with $k$ colours, $k+1$ socks suffice."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 1,
   "q": {
    "ru": "В квадрате со стороной $1$ отмечены пять точек. Докажите, что какие-то две из них удалены друг от друга не более чем на $\\dfrac{\\sqrt2}{2}$.",
    "en": "Five points are marked in a unit square. Prove that two of them are at distance at most $\\dfrac{\\sqrt2}{2}$."
   },
   "hint": {
    "ru": "Разрежьте квадрат на четыре части.",
    "en": "Cut the square into four pieces."
   },
   "sol": {
    "ru": "Разрежем квадрат на четыре маленьких квадрата со стороной $\\tfrac12$.\n\nТочек пять, квадратиков четыре, значит по принципу Дирихле в какой-то квадратик попали хотя бы две точки (точку на границе относим к любому из соседних квадратиков).\n\nДва любых расстояния внутри квадрата со стороной $\\tfrac12$ не превосходят его диагонали: $$\\sqrt{\\left(\\tfrac12\\right)^{2}+\\left(\\tfrac12\\right)^{2}}=\\frac{\\sqrt2}{2} . \\qquad\\blacksquare$$\n\n**Оценка точна:** для четырёх вершин квадрата и его центра минимальное расстояние как раз равно $\\tfrac{\\sqrt2}{2}$.",
    "en": "Cut the square into four small squares of side $\\tfrac12$.\n\nThere are five points and four small squares, so by the pigeonhole principle some small square contains at least two points (a point on a boundary may be assigned to either neighbour).\n\nAny two points inside a square of side $\\tfrac12$ are at most its diagonal apart: $$\\sqrt{\\left(\\tfrac12\\right)^{2}+\\left(\\tfrac12\\right)^{2}}=\\frac{\\sqrt2}{2} . \\qquad\\blacksquare$$\n\n**The bound is sharp:** for the four corners plus the centre the minimum distance is exactly $\\tfrac{\\sqrt2}{2}$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что среди любых трёх целых чисел найдутся два одинаковой чётности.",
    "en": "Prove that among any three integers two have the same parity."
   },
   "hint": {
    "ru": "Чётностей всего две.",
    "en": "There are only two parities."
   },
   "sol": {
    "ru": "Каждое целое число либо чётно, либо нечётно — это две «клетки». Чисел три.\n\nПо принципу Дирихле какие-то два попадут в одну клетку, то есть будут одинаковой чётности. $\\blacksquare$\n\n**Следствие.** Разность этих двух чисел чётна. Значит **среди любых трёх целых чисел найдутся два с чётной разностью**.",
    "en": "Every integer is either even or odd — two \"boxes\", and there are three numbers.\n\nBy the pigeonhole principle two land in the same box, i.e. share a parity. $\\blacksquare$\n\n**Corollary.** Their difference is even. So **among any three integers two have an even difference**."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "В классе $25$ учеников. Докажите, что четверо из них родились в один и тот же день недели.",
    "en": "A class has $25$ pupils. Prove that four of them were born on the same day of the week."
   },
   "hint": {
    "ru": "Что если в каждый день недели родилось не больше троих?",
    "en": "What if at most three were born on each day?"
   },
   "sol": {
    "ru": "Предположим противное: на каждый из семи дней недели приходится не более трёх учеников.\n\nТогда всего учеников было бы не больше $$7\\cdot3=21<25 ,$$ что неверно ✗\n\nЗначит какой-то день недели «набрал» хотя бы четверых. $\\blacksquare$\n\n**Обобщённый принцип Дирихле:** если $N$ предметов разложены по $n$ ящикам, то в каком-то ящике не менее $\\left\\lceil\\dfrac Nn\\right\\rceil$ предметов; здесь $\\left\\lceil\\tfrac{25}{7}\\right\\rceil=4$.",
    "en": "Suppose not: each of the seven days accounts for at most three pupils.\n\nThen there would be at most $$7\\cdot3=21<25 $$ pupils — false ✗\n\nSo some day of the week collects at least four. $\\blacksquare$\n\n**Generalised pigeonhole:** if $N$ objects go into $n$ boxes, some box holds at least $\\left\\lceil\\dfrac Nn\\right\\rceil$ of them; here $\\left\\lceil\\tfrac{25}{7}\\right\\rceil=4$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Десять шаров разложили по трём ящикам. Докажите, что в каком-то ящике не менее четырёх шаров.",
    "en": "Ten balls are put into three boxes. Prove that some box holds at least four."
   },
   "hint": {
    "ru": "Что будет, если в каждом ящике не больше трёх?",
    "en": "What if every box holds at most three?"
   },
   "sol": {
    "ru": "Если бы в каждом ящике было не более трёх шаров, всего шаров оказалось бы не больше $$3\\cdot3=9<10 \\quad ✗$$\n\nЗначит в каком-то ящике не менее четырёх. $\\blacksquare$\n\n**Точность оценки:** больше утверждать нельзя — раскладка $4+3+3$ показывает, что ящика с пятью шарами может и не быть.",
    "en": "If every box held at most three balls, there would be at most $$3\\cdot3=9<10 \\quad ✗$$\n\nSo some box holds at least four. $\\blacksquare$\n\n**Sharpness:** nothing stronger is true — the split $4+3+3$ shows there need be no box with five."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что среди любых пяти целых чисел найдутся два, разность которых делится на $4$.",
    "en": "Prove that among any five integers two have a difference divisible by $4$."
   },
   "hint": {
    "ru": "Остатков по модулю $4$ всего четыре.",
    "en": "There are only four residues modulo $4$."
   },
   "sol": {
    "ru": "При делении на $4$ бывает четыре остатка: $0,1,2,3$ — это наши «клетки». Чисел пять.\n\nПо принципу Дирихле какие-то два числа дают один и тот же остаток, скажем $$a=4q_1+r,\\qquad b=4q_2+r .$$\n\nТогда $$a-b=4\\left(q_1-q_2\\right) $$ делится на $4$. $\\blacksquare$\n\n**Общее правило:** среди любых $n+1$ целых чисел найдутся два с разностью, кратной $n$.",
    "en": "Division by $4$ leaves one of four remainders $0,1,2,3$ — our boxes. There are five numbers.\n\nBy the pigeonhole principle two share a remainder, say $$a=4q_1+r,\\qquad b=4q_2+r .$$\n\nThen $$a-b=4\\left(q_1-q_2\\right) $$ is divisible by $4$. $\\blacksquare$\n\n**General rule:** among any $n+1$ integers two have a difference divisible by $n$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что среди любых семи различных целых чисел найдутся два, сумма или разность которых делится на $10$.",
    "en": "Prove that among any seven distinct integers two have a sum or a difference divisible by $10$."
   },
   "hint": {
    "ru": "Объедините остатки в пары $\\{r,10-r\\}$.",
    "en": "Group the residues into pairs $\\{r,10-r\\}$."
   },
   "sol": {
    "ru": "Разобьём остатки по модулю $10$ на группы, объединяя $r$ и $10-r$: $$\\{0\\},\\quad\\{1,9\\},\\quad\\{2,8\\},\\quad\\{3,7\\},\\quad\\{4,6\\},\\quad\\{5\\} .$$\n\nГрупп ровно **шесть**, а чисел семь, значит какие-то два числа попали в одну группу.\n\n**Разбор.** Если их остатки равны ($r$ и $r$), разность делится на $10$. Если остатки разные ($r$ и $10-r$), сумма даёт остаток $$r+(10-r)=10\\equiv0\\pmod{10} ,$$ то есть делится на $10$. $\\blacksquare$\n\n**Точность.** Шести чисел не хватает: например, у чисел $0,1,2,3,4,5$ никакие два не дают ни суммы, ни разности, кратной $10$.",
    "en": "Split the residues modulo $10$ into groups, pairing $r$ with $10-r$: $$\\{0\\},\\quad\\{1,9\\},\\quad\\{2,8\\},\\quad\\{3,7\\},\\quad\\{4,6\\},\\quad\\{5\\} .$$\n\nThere are exactly **six** groups and seven numbers, so two numbers land in one group.\n\n**Two cases.** If their residues are equal, the difference is divisible by $10$. If the residues are $r$ and $10-r$, the sum is $\\equiv0\\pmod{10}$. $\\blacksquare$\n\n**Sharpness.** Six numbers are not enough: for $0,1,2,3,4,5$ no two give a sum or difference divisible by $10$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "В прямоугольнике $3\\times4$ отмечены $13$ точек. Докажите, что какие-то две из них удалены не более чем на $\\sqrt2$.",
    "en": "Thirteen points are marked in a $3\\times4$ rectangle. Prove that two of them are at distance at most $\\sqrt2$."
   },
   "hint": {
    "ru": "Разрежьте прямоугольник на единичные квадраты.",
    "en": "Cut the rectangle into unit squares."
   },
   "sol": {
    "ru": "Разрежем прямоугольник на $3\\cdot4=12$ единичных квадратов.\n\nТочек $13$, квадратов $12$, значит по принципу Дирихле в какой-то квадрат попали хотя бы две точки.\n\nРасстояние между двумя точками единичного квадрата не превосходит его диагонали: $$\\sqrt{1^{2}+1^{2}}=\\sqrt2 . \\qquad\\blacksquare$$\n\n**Замечание.** Оценку можно улучшить, если резать не на квадраты, а на более «круглые» части — но тогда рассуждение усложняется.",
    "en": "Cut the rectangle into $3\\cdot4=12$ unit squares.\n\nThere are $13$ points and $12$ squares, so by the pigeonhole principle some square contains at least two points.\n\nTwo points of a unit square are at most its diagonal apart: $$\\sqrt{1^{2}+1^{2}}=\\sqrt2 . \\qquad\\blacksquare$$\n\n**Remark.** The bound improves if one cuts into rounder pieces instead of squares — at the price of a harder argument."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что среди любых $19$ двузначных чисел найдутся два с одинаковой суммой цифр.",
    "en": "Prove that among any $19$ two-digit numbers two have the same digit sum."
   },
   "hint": {
    "ru": "Какие значения принимает сумма цифр двузначного числа?",
    "en": "What values can the digit sum of a two-digit number take?"
   },
   "sol": {
    "ru": "У двузначного числа $\\overline{ab}$ первая цифра $a$ лежит между $1$ и $9$, вторая $b$ — между $0$ и $9$. Значит сумма цифр $a+b$ принимает значения от $$1+0=1\\qquad\\text{до}\\qquad 9+9=18 ,$$ то есть не более $18$ различных значений.\n\nЧисел $19$, «клеток» $18$, значит по принципу Дирихле у каких-то двух чисел суммы цифр совпадают. $\\blacksquare$\n\n**Точность.** Восемнадцати чисел не хватило бы: например, у чисел $$10,\\ 11,\\ 12,\\ \\dots,\\ 19,\\ 29,\\ 39,\\ \\dots,\\ 99 $$ суммы цифр $1,2,\\dots,18$ попарно различны.",
    "en": "For a two-digit number $\\overline{ab}$ the first digit $a$ runs from $1$ to $9$ and the second $b$ from $0$ to $9$. So the digit sum $a+b$ takes values from $$1+0=1\\qquad\\text{to}\\qquad 9+9=18 ,$$ at most $18$ different values.\n\nWith $19$ numbers and $18$ boxes, the pigeonhole principle gives two with equal digit sums. $\\blacksquare$\n\n**Sharpness.** Eighteen numbers would not suffice: the numbers $$10,\\ 11,\\ \\dots,\\ 19,\\ 29,\\ 39,\\ \\dots,\\ 99 $$ have digit sums $1,2,\\dots,18$, pairwise distinct."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что найдётся число вида $\\underbrace{11\\ldots1}_{k}$, делящееся на $7$.",
    "en": "Prove that some number of the form $\\underbrace{11\\ldots1}_{k}$ is divisible by $7$."
   },
   "hint": {
    "ru": "Рассмотрите остатки первых восьми таких чисел.",
    "en": "Look at the remainders of the first eight such numbers."
   },
   "sol": {
    "ru": "Рассмотрим восемь чисел $$1,\\ 11,\\ 111,\\ \\dots,\\ \\underbrace{11\\ldots1}_{8} .$$\n\nОстатков по модулю $7$ всего семь, а чисел восемь, значит какие-то два дают одинаковый остаток: $$\\underbrace{11\\ldots1}_{m}\\equiv\\underbrace{11\\ldots1}_{n}\\pmod 7,\\qquad m>n .$$\n\n**Вычтем.** Разность равна $$\\underbrace{11\\ldots1}_{m}-\\underbrace{11\\ldots1}_{n}=\\underbrace{11\\ldots1}_{m-n}\\cdot10^{n} ,$$ и она делится на $7$.\n\nТак как $\\gcd(10^{n},7)=1$, отсюда $$7\\ \\Big|\\ \\underbrace{11\\ldots1}_{m-n} . \\qquad\\blacksquare$$\n\n**Ответ на практике:** наименьшее такое число — $111111=7\\cdot15873$.\n\n**Обобщение.** То же рассуждение работает для любого $n$, взаимно простого с $10$.",
    "en": "Consider the eight numbers $$1,\\ 11,\\ 111,\\ \\dots,\\ \\underbrace{11\\ldots1}_{8} .$$\n\nThere are only seven residues modulo $7$ and eight numbers, so two share a residue: $$\\underbrace{11\\ldots1}_{m}\\equiv\\underbrace{11\\ldots1}_{n}\\pmod 7,\\qquad m>n .$$\n\n**Subtract.** The difference is $$\\underbrace{11\\ldots1}_{m}-\\underbrace{11\\ldots1}_{n}=\\underbrace{11\\ldots1}_{m-n}\\cdot10^{n} ,$$ divisible by $7$.\n\nSince $\\gcd(10^{n},7)=1$, we get $$7\\ \\Big|\\ \\underbrace{11\\ldots1}_{m-n} . \\qquad\\blacksquare$$\n\n**In practice:** the smallest example is $111111=7\\cdot15873$.\n\n**Generalisation.** The same argument works for any $n$ coprime to $10$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "В шкафу лежат $10$ пар ботинок (все пары различны). Сколько ботинок надо вытащить не глядя, чтобы наверняка получить хотя бы одну подходящую пару?",
    "en": "A cupboard holds $10$ pairs of shoes (all pairs different). How many shoes must be taken blindly to be sure of getting a matching pair?"
   },
   "hint": {
    "ru": "Можно вытащить по одному ботинку из каждой пары.",
    "en": "One could pick one shoe from each pair."
   },
   "sol": {
    "ru": "**Десяти мало.** Можно неудачно вытащить ровно по одному ботинку из каждой из десяти пар — тогда подходящей пары не будет.\n\n**Одиннадцати хватает.** Пар всего $10$; если вытащено $11$ ботинок, то по принципу Дирихле какие-то два принадлежат одной паре.\n\n**Ответ:** $11$.\n\n**Осторожно с формулировкой.** Если бы спрашивали про пару **одинакового размера** (а не именно «парные»), ответ зависел бы от того, сколько размеров встречается.",
    "en": "**Ten is not enough.** One might unluckily draw exactly one shoe from each of the ten pairs, with no match.\n\n**Eleven suffices.** There are only $10$ pairs, so among $11$ shoes two belong to the same pair by the pigeonhole principle.\n\n**Answer:** $11$.\n\n**A wording caution.** Had the question asked for two shoes of the same **size** rather than a genuine pair, the answer would depend on how many sizes occur."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что в любой последовательности из пяти попарно различных чисел есть возрастающая или убывающая подпоследовательность длины $3$.",
    "en": "Prove that any sequence of five pairwise distinct numbers contains an increasing or a decreasing subsequence of length $3$."
   },
   "hint": {
    "ru": "Каждому члену сопоставьте пару чисел: длины самых длинных возрастающей и убывающей подпоследовательностей, начинающихся в нём.",
    "en": "To each term attach a pair: the lengths of the longest increasing and decreasing subsequences starting there."
   },
   "sol": {
    "ru": "Пусть последовательность $a_1,\\dots,a_5$, и пусть для каждого $i$ $$x_i=\\text{длина самой длинной возрастающей подпоследовательности, начинающейся с } a_i ,$$ $$y_i=\\text{длина самой длинной убывающей подпоследовательности, начинающейся с } a_i .$$\n\n**Предположим противное:** нет ни возрастающей, ни убывающей длины $3$. Тогда $$x_i\\in\\{1,2\\},\\qquad y_i\\in\\{1,2\\} $$ для всех $i$, то есть пара $\\left(x_i,y_i\\right)$ принимает не более $2\\cdot2=4$ значений.\n\nИндексов пять, значений четыре, значит по принципу Дирихле найдутся $i<j$ с $$\\left(x_i,y_i\\right)=\\left(x_j,y_j\\right).$$\n\n**Противоречие.** Числа различны, значит либо $a_i<a_j$, либо $a_i>a_j$.\n\nЕсли $a_i<a_j$, то, приписав $a_i$ к возрастающей подпоследовательности, начинающейся с $a_j$, получим $x_i\\ge x_j+1>x_j$ ✗\n\nЕсли $a_i>a_j$, то аналогично $y_i>y_j$ ✗\n\nВ обоих случаях пары не могли совпасть. $\\blacksquare$\n\n**Точность.** Для четырёх чисел утверждение неверно: например, $2,1,4,3$.\n\n**Общая теорема (Эрдёша — Секереша):** в любой последовательности длины $mn+1$ есть возрастающая подпоследовательность длины $m+1$ или убывающая длины $n+1$.",
    "en": "Let the sequence be $a_1,\\dots,a_5$ and for each $i$ put $$x_i=\\text{length of the longest increasing subsequence starting at } a_i ,$$ $$y_i=\\text{length of the longest decreasing subsequence starting at } a_i .$$\n\n**Suppose not:** there is no monotone subsequence of length $3$. Then $$x_i\\in\\{1,2\\},\\qquad y_i\\in\\{1,2\\} ,$$ so the pair $\\left(x_i,y_i\\right)$ takes at most $2\\cdot2=4$ values.\n\nWith five indices and four values, the pigeonhole principle gives $i<j$ with $$\\left(x_i,y_i\\right)=\\left(x_j,y_j\\right).$$\n\n**Contradiction.** The numbers are distinct, so either $a_i<a_j$ or $a_i>a_j$.\n\nIf $a_i<a_j$, prepending $a_i$ to an increasing subsequence starting at $a_j$ gives $x_i\\ge x_j+1>x_j$ ✗\n\nIf $a_i>a_j$, likewise $y_i>y_j$ ✗\n\nEither way the pairs could not have coincided. $\\blacksquare$\n\n**Sharpness.** For four numbers the claim fails: e.g. $2,1,4,3$.\n\n**The general theorem (Erdős–Szekeres):** any sequence of length $mn+1$ has an increasing subsequence of length $m+1$ or a decreasing one of length $n+1$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что среди любых пяти точек с целыми координатами найдутся две, середина отрезка между которыми тоже имеет целые координаты.",
    "en": "Prove that among any five points with integer coordinates two have a midpoint with integer coordinates."
   },
   "hint": {
    "ru": "Посмотрите на чётности координат.",
    "en": "Look at the parities of the coordinates."
   },
   "sol": {
    "ru": "Каждой точке $(x,y)$ сопоставим пару чётностей $$\\left(x\\bmod 2,\\ y\\bmod 2\\right)\\in\\{(0,0),(0,1),(1,0),(1,1)\\} .$$\n\nВозможных пар четыре, точек пять, значит по принципу Дирихле у каких-то двух точек $\\left(x_1,y_1\\right)$ и $\\left(x_2,y_2\\right)$ обе координаты совпадают по чётности.\n\n**Тогда середина целая.** Разности $x_1-x_2$ и $y_1-y_2$ чётны, а значит суммы $x_1+x_2$ и $y_1+y_2$ тоже чётны, и $$\\left(\\frac{x_1+x_2}{2},\\ \\frac{y_1+y_2}{2}\\right)$$ — точка с целыми координатами. $\\blacksquare$\n\n**В пространстве** классов чётности $2^{3}=8$, поэтому там нужно $9$ точек.\n\n**Точность.** Четырёх точек мало: у точек $(0,0)$, $(0,1)$, $(1,0)$, $(1,1)$ все середины полуцелые.",
    "en": "To each point $(x,y)$ attach its parity pair $$\\left(x\\bmod 2,\\ y\\bmod 2\\right)\\in\\{(0,0),(0,1),(1,0),(1,1)\\} .$$\n\nThere are four possible pairs and five points, so by the pigeonhole principle two points $\\left(x_1,y_1\\right)$, $\\left(x_2,y_2\\right)$ agree in both parities.\n\n**Then the midpoint is integral.** The differences $x_1-x_2$ and $y_1-y_2$ are even, hence so are the sums $x_1+x_2$ and $y_1+y_2$, and $$\\left(\\frac{x_1+x_2}{2},\\ \\frac{y_1+y_2}{2}\\right)$$ has integer coordinates. $\\blacksquare$\n\n**In space** there are $2^{3}=8$ parity classes, so $9$ points are needed.\n\n**Sharpness.** Four points do not suffice: for $(0,0)$, $(0,1)$, $(1,0)$, $(1,1)$ every midpoint is half-integral."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Из чисел $1,2,\\dots,10$ выбрали шесть. Докажите, что какие-то два из выбранных в сумме дают $11$.",
    "en": "Six numbers are chosen from $1,2,\\dots,10$. Prove that two of them add up to $11$."
   },
   "hint": {
    "ru": "Разбейте числа на пары с суммой $11$.",
    "en": "Split the numbers into pairs summing to $11$."
   },
   "sol": {
    "ru": "Разобьём числа на пары с суммой $11$: $$\\{1,10\\},\\quad\\{2,9\\},\\quad\\{3,8\\},\\quad\\{4,7\\},\\quad\\{5,6\\} .$$\n\nПар ровно пять, а выбрано шесть чисел, значит по принципу Дирихле какие-то два выбранных числа лежат в одной паре — и их сумма равна $11$. $\\blacksquare$\n\n**Точность.** Пяти чисел мало: набор $\\{1,2,3,4,5\\}$ не содержит пары с суммой $11$.",
    "en": "Split the numbers into pairs summing to $11$: $$\\{1,10\\},\\quad\\{2,9\\},\\quad\\{3,8\\},\\quad\\{4,7\\},\\quad\\{5,6\\} .$$\n\nThere are exactly five pairs and six chosen numbers, so two chosen numbers lie in the same pair — and they sum to $11$. $\\blacksquare$\n\n**Sharpness.** Five numbers do not suffice: $\\{1,2,3,4,5\\}$ contains no pair summing to $11$."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 2,
   "q": {
    "ru": "Каждая клетка таблицы $4\\times4$ заполнена числом $-1$, $0$ или $1$. Докажите, что среди четырёх сумм по строкам, четырёх сумм по столбцам и двух сумм по диагоналям какие-то две равны.",
    "en": "Every cell of a $4\\times4$ table holds $-1$, $0$ or $1$. Prove that among the four row sums, four column sums and two diagonal sums, two are equal."
   },
   "hint": {
    "ru": "Оцените, какие значения могут принимать эти суммы.",
    "en": "Bound the possible values of these sums."
   },
   "sol": {
    "ru": "Каждая из указанных сумм — это сумма **четырёх** чисел, каждое из которых равно $-1$, $0$ или $1$.\n\n**Диапазон значений.** Наименьшая возможная сумма равна $-4$, наибольшая $4$, и все значения целые. Значит вариантов не больше $$4-(-4)+1=9 .$$\n\n**Сколько сумм.** Строк четыре, столбцов четыре, диагоналей две — всего $$4+4+2=10 $$ сумм.\n\nСумм десять, возможных значений девять, значит по принципу Дирихле какие-то две суммы совпадают. $\\blacksquare$\n\n**Замечание.** Для таблицы $n\\times n$ рассуждение даёт то же: сумм $2n+2$, значений $2n+1$ — и вывод сохраняется при любом $n$.",
    "en": "Each of these sums adds **four** numbers, each $-1$, $0$ or $1$.\n\n**The range.** The smallest possible sum is $-4$ and the largest $4$, all values integers, so there are at most $$4-(-4)+1=9 $$ possibilities.\n\n**How many sums.** Four rows, four columns and two diagonals: $$4+4+2=10 .$$\n\nTen sums and nine possible values, so by the pigeonhole principle two coincide. $\\blacksquare$\n\n**Remark.** For an $n\\times n$ table the same count gives $2n+2$ sums and $2n+1$ values — the conclusion survives for every $n$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Шахматист играет каждый день хотя бы одну партию, а за $77$ дней сыграл не более $132$ партий. Докажите, что найдётся несколько дней подряд, за которые он сыграл ровно $21$ партию.",
    "en": "A chess player plays at least one game a day and at most $132$ games over $77$ days. Prove that there is a run of consecutive days in which exactly $21$ games were played."
   },
   "hint": {
    "ru": "Рассмотрите частичные суммы $a_k$ и числа $a_k+21$.",
    "en": "Consider the partial sums $a_k$ and the numbers $a_k+21$."
   },
   "sol": {
    "ru": "Пусть $a_k$ — общее число партий за первые $k$ дней. Каждый день сыграна хотя бы одна партия, значит последовательность **строго возрастает**: $$1\\le a_1<a_2<\\dots<a_{77}\\le132 .$$\n\n**Рассмотрим удвоенный набор.** Возьмём $154$ числа $$a_1,\\ a_2,\\ \\dots,\\ a_{77},\\qquad a_1+21,\\ a_2+21,\\ \\dots,\\ a_{77}+21 .$$\n\nВсе они лежат в промежутке от $1$ до $132+21=153$, то есть принимают не более $153$ значений.\n\n**Принцип Дирихле.** Чисел $154$, значений $153$, значит какие-то два числа совпадают. Внутри каждой из двух половин все числа различны (обе последовательности строго возрастают), значит совпадение может быть только между половинами: $$a_j=a_i+21 $$ для некоторых $i<j$.\n\n**Вывод.** Это означает, что за дни с $i+1$-го по $j$-й сыграно ровно $$a_j-a_i=21 $$ партий. $\\blacksquare$\n\n**Замечание.** Числа $77$, $132$ и $21$ подобраны так, чтобы «сумма помещалась»: важно неравенство $132+21<2\\cdot77$.",
    "en": "Let $a_k$ be the total number of games in the first $k$ days. At least one game a day makes the sequence **strictly increasing**: $$1\\le a_1<a_2<\\dots<a_{77}\\le132 .$$\n\n**Double the list.** Take the $154$ numbers $$a_1,\\ \\dots,\\ a_{77},\\qquad a_1+21,\\ \\dots,\\ a_{77}+21 .$$\n\nThey all lie between $1$ and $132+21=153$, i.e. take at most $153$ values.\n\n**Pigeonhole.** With $154$ numbers and $153$ values, two coincide. Within each half all numbers are distinct (both sequences strictly increase), so the coincidence is across the halves: $$a_j=a_i+21 $$ for some $i<j$.\n\n**Conclusion.** So on days $i+1$ through $j$ exactly $$a_j-a_i=21 $$ games were played. $\\blacksquare$\n\n**Remark.** The numbers $77$, $132$, $21$ are chosen so the count fits: what matters is $132+21<2\\cdot77$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что найдутся две различные степени тройки, разность которых делится на $1000$.",
    "en": "Prove that there exist two different powers of three whose difference is divisible by $1000$."
   },
   "hint": {
    "ru": "Рассмотрите $1001$ степень и их остатки.",
    "en": "Look at $1001$ powers and their remainders."
   },
   "sol": {
    "ru": "Рассмотрим $1001$ число $$3^{0},\\ 3^{1},\\ 3^{2},\\ \\dots,\\ 3^{1000} .$$\n\nОстатков по модулю $1000$ ровно $1000$, а чисел $1001$, значит по принципу Дирихле какие-то две степени дают одинаковый остаток: $$3^{m}\\equiv3^{n}\\pmod{1000},\\qquad m>n .$$\n\nТогда $$1000\\ \\big|\\ 3^{m}-3^{n} . \\qquad\\blacksquare$$\n\n**Больше того.** Вынесем общий множитель: $$3^{m}-3^{n}=3^{n}\\left(3^{\\,m-n}-1\\right),$$ и так как $\\gcd\\left(3^{n},1000\\right)=1$, получаем $$1000\\ \\big|\\ 3^{\\,m-n}-1 ,$$ то есть **некоторая степень тройки оканчивается на $001$**.\n\n**Проверка:** наименьшая такая степень — $3^{100}$; уже $3^{20}=3\\,486\\,784\\,401$ оканчивается на $401$, а не на $001$.",
    "en": "Consider the $1001$ numbers $$3^{0},\\ 3^{1},\\ \\dots,\\ 3^{1000} .$$\n\nThere are exactly $1000$ residues modulo $1000$, so by the pigeonhole principle two powers share a residue: $$3^{m}\\equiv3^{n}\\pmod{1000},\\qquad m>n ,$$ hence $$1000\\ \\big|\\ 3^{m}-3^{n} . \\qquad\\blacksquare$$\n\n**Moreover.** Factoring, $$3^{m}-3^{n}=3^{n}\\left(3^{\\,m-n}-1\\right),$$ and since $\\gcd\\left(3^{n},1000\\right)=1$ we get $$1000\\ \\big|\\ 3^{\\,m-n}-1 ,$$ i.e. **some power of three ends in $001$**.\n\n**Check:** the smallest such power is $3^{100}$; already $3^{20}=3\\,486\\,784\\,401$ ends in $401$, not $001$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Каждая клетка таблицы $3\\times9$ покрашена в один из двух цветов. Докажите, что найдётся прямоугольник (со сторонами по линиям сетки), все четыре угловые клетки которого одного цвета.",
    "en": "Every cell of a $3\\times9$ table is coloured in one of two colours. Prove that some rectangle (with sides along the grid lines) has all four corner cells of the same colour."
   },
   "hint": {
    "ru": "В каждом столбце найдите две клетки одного цвета.",
    "en": "In each column find two cells of the same colour."
   },
   "sol": {
    "ru": "**Шаг 1: в каждом столбце есть одноцветная пара.** В столбце три клетки и два цвета, значит по принципу Дирихле какие-то две клетки столбца одного цвета.\n\nСопоставим столбцу «метку»: какая именно пара строк оказалась одноцветной и какого она цвета. Пар строк три: $$\\{1,2\\},\\quad\\{1,3\\},\\quad\\{2,3\\} ,$$ цветов два, значит меток не больше $$3\\cdot2=6 .$$\n\n**Шаг 2: два столбца с одной меткой.** Столбцов девять, меток шесть, значит по принципу Дирихле у каких-то двух столбцов метки совпадают.\n\n**Шаг 3: прямоугольник найден.** У этих двух столбцов одна и та же пара строк окрашена в один и тот же цвет. Четыре клетки на пересечении этих двух столбцов и этих двух строк — вершины прямоугольника, и все они одного цвета. $\\blacksquare$\n\n**Точность оценки.** Уже семи столбцов достаточно (шесть меток плюс один), а вот при шести столбцах можно раскрасить без одноцветного прямоугольника — по одному столбцу на каждую метку.",
    "en": "**Step 1: every column has a monochromatic pair.** A column has three cells and there are two colours, so two cells of the column share a colour.\n\nLabel each column by which pair of rows is monochromatic and in which colour. There are three pairs of rows, $$\\{1,2\\},\\quad\\{1,3\\},\\quad\\{2,3\\} ,$$ and two colours, so at most $$3\\cdot2=6 $$ labels.\n\n**Step 2: two columns share a label.** With nine columns and six labels, two columns get the same label.\n\n**Step 3: the rectangle.** For those two columns the same pair of rows carries the same colour. The four cells where these two columns meet these two rows are the corners of a rectangle, all of one colour. $\\blacksquare$\n\n**Sharpness.** Seven columns already suffice (six labels plus one), while with six columns one can colour without a monochromatic rectangle — one column per label."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "В группе из $100$ человек каждый знаком по крайней мере с $51$ другим. Докажите, что у любых двух человек есть общий знакомый.",
    "en": "In a group of $100$ people everybody knows at least $51$ others. Prove that any two people have a common acquaintance."
   },
   "hint": {
    "ru": "Посчитайте размер объединения двух множеств знакомых.",
    "en": "Count the size of the union of two acquaintance sets."
   },
   "sol": {
    "ru": "Возьмём любых двух человек $A$ и $B$ и обозначим через $N(A)$ и $N(B)$ множества их знакомых.\n\n**Предположим противное:** общего знакомого нет, то есть $$N(A)\\cap N(B)=\\varnothing .$$\n\n**Считаем объединение.** Тогда $$\\left|N(A)\\cup N(B)\\right|=|N(A)|+|N(B)|\\ \\ge\\ 51+51=102 .$$\n\n**Противоречие.** Но все знакомые — это люди из той же группы, в которой всего $100$ человек, значит $$\\left|N(A)\\cup N(B)\\right|\\le100<102 \\quad ✗$$\n\nЗначит общий знакомый есть. $\\blacksquare$\n\n**Точность.** Число $51$ существенно: если бы каждый был знаком ровно с $50$ другими, группа могла бы распасться на две «половины» по $50$ человек, знакомых только внутри своей половины (плюс себя не считаем) — и у людей из разных половин общих знакомых не было бы.",
    "en": "Take any two people $A$ and $B$, and let $N(A)$, $N(B)$ be their sets of acquaintances.\n\n**Suppose not:** there is no common acquaintance, i.e. $$N(A)\\cap N(B)=\\varnothing .$$\n\n**Count the union.** Then $$\\left|N(A)\\cup N(B)\\right|=|N(A)|+|N(B)|\\ \\ge\\ 51+51=102 .$$\n\n**Contradiction.** But all acquaintances live in the same group of $100$ people, so $$\\left|N(A)\\cup N(B)\\right|\\le100<102 \\quad ✗$$\n\nHence a common acquaintance exists. $\\blacksquare$\n\n**Sharpness.** The number $51$ matters: if everyone knew exactly $50$ others, the group could split into two halves of $50$ acquainted only within themselves, and people from different halves would share no acquaintance."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что из любых $n$ целых чисел можно выбрать несколько (хотя бы одно), сумма которых делится на $n$.",
    "en": "Prove that from any $n$ integers one can choose several (at least one) whose sum is divisible by $n$."
   },
   "hint": {
    "ru": "Рассмотрите частичные суммы $S_0,S_1,\\dots,S_n$.",
    "en": "Consider the partial sums $S_0,S_1,\\dots,S_n$."
   },
   "sol": {
    "ru": "Пусть даны числа $a_1,a_2,\\dots,a_n$. Определим частичные суммы $$S_0=0,\\qquad S_k=a_1+a_2+\\dots+a_k\\quad (k=1,\\dots,n).$$\n\n**Сколько их и какие остатки.** Всего сумм $n+1$ штука, а остатков по модулю $n$ ровно $n$.\n\nПо принципу Дирихле найдутся индексы $0\\le i<j\\le n$ с $$S_i\\equiv S_j\\pmod n .$$\n\n**Вычтем.** $$S_j-S_i=a_{i+1}+a_{i+2}+\\dots+a_j $$ делится на $n$, и это сумма хотя бы одного слагаемого (ведь $i<j$). $\\blacksquare$\n\n**Сильнее, чем кажется.** Выбранные числа идут **подряд** — это блок последовательных членов, а не произвольное подмножество.\n\n**Точность.** Из $n-1$ чисел выбрать так не всегда можно: возьмите $n-1$ единиц — любая сумма нескольких из них лежит между $1$ и $n-1$ и на $n$ не делится.",
    "en": "Let the numbers be $a_1,\\dots,a_n$ and define the partial sums $$S_0=0,\\qquad S_k=a_1+\\dots+a_k\\quad (k=1,\\dots,n).$$\n\n**Counting.** There are $n+1$ such sums and exactly $n$ residues modulo $n$.\n\nBy the pigeonhole principle there are indices $0\\le i<j\\le n$ with $$S_i\\equiv S_j\\pmod n .$$\n\n**Subtract.** $$S_j-S_i=a_{i+1}+\\dots+a_j $$ is divisible by $n$, and it is a sum of at least one term (since $i<j$). $\\blacksquare$\n\n**Stronger than stated.** The chosen numbers are **consecutive** — a block, not an arbitrary subset.\n\n**Sharpness.** With $n-1$ numbers this can fail: take $n-1$ ones — any sum of some of them lies between $1$ and $n-1$ and is not divisible by $n$."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "В каждой клетке таблицы $10\\times10$ записано целое число, причём числа в клетках, имеющих общую сторону, отличаются не более чем на $5$. Докажите, что какие-то два числа в таблице равны.",
    "en": "Each cell of a $10\\times10$ table holds an integer, and numbers in cells sharing a side differ by at most $5$. Prove that two numbers in the table are equal."
   },
   "hint": {
    "ru": "Оцените разность самого большого и самого маленького чисел.",
    "en": "Bound the difference between the largest and the smallest entries."
   },
   "sol": {
    "ru": "Пусть $M$ — наибольшее число в таблице, $m$ — наименьшее.\n\n**Оценим $M-m$.** От клетки с числом $m$ до клетки с числом $M$ можно дойти по клеткам, каждый раз переходя в соседнюю по стороне. В таблице $10\\times10$ такой путь занимает не более $$9+9=18 $$ шагов (сначала по горизонтали, потом по вертикали).\n\nНа каждом шаге число меняется не более чем на $5$, значит $$M-m\\ \\le\\ 18\\cdot5=90 .$$\n\n**Сколько различных значений.** Все числа целые и лежат между $m$ и $M$, значит различных значений не больше $$90+1=91 .$$\n\n**Принцип Дирихле.** Клеток $100$, возможных значений не более $91$, значит какие-то две клетки содержат одно и то же число. $\\blacksquare$\n\n**Замечание.** Условие «отличаются не более чем на $5$» можно ослабить до $10$: тогда $M-m\\le180$, значений $181$ — и вывод уже неверен. Так что запас здесь невелик.",
    "en": "Let $M$ be the largest entry and $m$ the smallest.\n\n**Bound $M-m$.** One can walk from the cell holding $m$ to the cell holding $M$ through side-adjacent cells. In a $10\\times10$ table such a path takes at most $$9+9=18 $$ steps (horizontally, then vertically).\n\nEach step changes the number by at most $5$, so $$M-m\\ \\le\\ 18\\cdot5=90 .$$\n\n**How many values.** All entries are integers between $m$ and $M$, so at most $$90+1=91 $$ distinct values occur.\n\n**Pigeonhole.** There are $100$ cells and at most $91$ values, so two cells hold the same number. $\\blacksquare$\n\n**Remark.** Relaxing \"at most $5$\" to \"at most $10$\" gives $M-m\\le180$ and $181$ values — and the conclusion fails. So there is little slack here."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что среди чисел Фибоначчи найдётся ненулевое, делящееся на $2024$.",
    "en": "Prove that some non-zero Fibonacci number is divisible by $2024$."
   },
   "hint": {
    "ru": "Рассмотрите пары соседних членов по модулю $2024$.",
    "en": "Consider pairs of consecutive terms modulo $2024$."
   },
   "sol": {
    "ru": "Работаем по модулю $n=2024$ и рассматриваем **пары соседних членов** $$P_k=\\left(F_k,\\ F_{k+1}\\right)\\bmod n .$$\n\n**Шаг 1: пары повторяются.** Различных пар остатков не больше $n^{2}$, значит среди $P_0,P_1,\\dots,P_{n^{2}}$ какие-то две совпадают: $$P_i=P_j,\\qquad i<j .$$\n\n**Шаг 2: последовательность периодична.** Из $F_{k+2}=F_{k+1}+F_k$ следует, что пара $P_{k+1}$ однозначно определяется парой $P_k$. Значит из $P_i=P_j$ вытекает $P_{i+1}=P_{j+1}$, и далее по индукции — совпадение всех последующих пар.\n\n**Шаг 3: можно «отмотать назад».** Соотношение $$F_{k-1}=F_{k+1}-F_k$$ показывает, что пара $P_{k-1}$ тоже однозначно восстанавливается по $P_k$. Значит из $P_i=P_j$ следует и $P_{i-1}=P_{j-1}$, и так до самого начала: $$P_0=P_{\\,j-i} .$$\n\n**Шаг 4: вывод.** Итак, $$F_{\\,j-i}\\equiv F_0=0\\pmod{2024} ,$$ причём $j-i>0$. Значит член $F_{\\,j-i}$ (он не равен нулю как число, ведь $F_k>0$ при $k\\ge1$) делится на $2024$. $\\blacksquare$\n\n**Замечание.** Длина периода последовательности Фибоначчи по модулю $n$ называется **периодом Пизано**; наше рассуждение показывает лишь, что он конечен.\n\n**Пример поменьше:** по модулю $10$ период равен $60$, и первое кратное десяти — это $F_{15}=610$.",
    "en": "Work modulo $n=2024$ and consider **pairs of consecutive terms** $$P_k=\\left(F_k,\\ F_{k+1}\\right)\\bmod n .$$\n\n**Step 1: pairs repeat.** There are at most $n^{2}$ distinct pairs of residues, so among $P_0,\\dots,P_{n^{2}}$ two coincide: $$P_i=P_j,\\qquad i<j .$$\n\n**Step 2: the sequence is periodic.** From $F_{k+2}=F_{k+1}+F_k$ the pair $P_{k+1}$ is determined by $P_k$. So $P_i=P_j$ forces $P_{i+1}=P_{j+1}$ and, by induction, all later pairs.\n\n**Step 3: one can run backwards.** The relation $$F_{k-1}=F_{k+1}-F_k$$ shows $P_{k-1}$ is also determined by $P_k$. So $P_i=P_j$ gives $P_{i-1}=P_{j-1}$ and, going all the way back, $$P_0=P_{\\,j-i} .$$\n\n**Step 4: conclusion.** Hence $$F_{\\,j-i}\\equiv F_0=0\\pmod{2024} $$ with $j-i>0$. So the term $F_{\\,j-i}$ (non-zero as a number, since $F_k>0$ for $k\\ge1$) is divisible by $2024$. $\\blacksquare$\n\n**Remark.** The period of the Fibonacci sequence modulo $n$ is the **Pisano period**; our argument only shows it is finite.\n\n**A smaller example:** modulo $10$ the period is $60$, and the first multiple of ten is $F_{15}=610$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "В равностороннем треугольнике со стороной $2$ отмечены пять точек. Докажите, что какие-то две из них удалены не более чем на $1$.",
    "en": "Five points are marked in an equilateral triangle of side $2$. Prove that two of them are at distance at most $1$."
   },
   "hint": {
    "ru": "Разрежьте треугольник на четыре равных.",
    "en": "Cut the triangle into four congruent ones."
   },
   "sol": {
    "ru": "Соединим середины сторон — треугольник разобьётся на **четыре** равносторонних треугольника со стороной $1$.\n\nТочек пять, треугольничков четыре, значит по принципу Дирихле в какой-то из них попали хотя бы две точки (точку на общей границе относим к любому из соседей).\n\n**Оценка расстояния.** Расстояние между двумя точками равностороннего треугольника со стороной $1$ не превосходит его наибольшей стороны, то есть $$1 . \\qquad\\blacksquare$$\n\n**Точность.** Оценку нельзя улучшить: четыре вершины разбиения плюс центр... точнее, три вершины большого треугольника и три середины сторон дают шесть точек с попарными расстояниями ровно $1$ — то есть при пяти точках расстояние $1$ действительно может достигаться.",
    "en": "Join the midpoints of the sides — the triangle splits into **four** equilateral triangles of side $1$.\n\nThere are five points and four small triangles, so some small triangle contains at least two points (points on a shared boundary may go to either neighbour).\n\n**The distance.** Two points of an equilateral triangle of side $1$ are at most its side apart, i.e. $$1 . \\qquad\\blacksquare$$\n\n**Sharpness.** The bound cannot be improved: the three vertices of the big triangle together with the three side midpoints give six points at pairwise distances exactly $1$, so a distance of exactly $1$ really can occur."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "Из чисел $1,2,\\dots,200$ выбрали $101$ число. Докажите, что среди выбранных найдутся два, одно из которых делится на другое.",
    "en": "From the numbers $1,2,\\dots,200$, one hundred and one are chosen. Prove that among them one divides another."
   },
   "hint": {
    "ru": "Запишите каждое число как $2^{k}\\cdot(\\text{нечётное})$.",
    "en": "Write each number as $2^{k}\\cdot(\\text{odd})$."
   },
   "sol": {
    "ru": "Каждое натуральное число единственным образом записывается в виде $$m=2^{k}\\cdot q ,$$ где $q$ нечётно. Назовём $q$ **нечётной частью** числа.\n\n**Сколько бывает нечётных частей.** Для чисел от $1$ до $200$ нечётная часть — это нечётное число, не превосходящее $200$, то есть одно из $$1,\\ 3,\\ 5,\\ \\dots,\\ 199 $$ — ровно $100$ вариантов.\n\n**Принцип Дирихле.** Выбрано $101$ число, нечётных частей $100$, значит у каких-то двух выбранных чисел нечётные части совпадают: $$a=2^{k}q,\\qquad b=2^{\\ell}q,\\qquad k\\ne\\ell .$$\n\n**Вывод.** Если $k<\\ell$, то $$b=a\\cdot2^{\\,\\ell-k} ,$$ то есть $a$ делит $b$. $\\blacksquare$\n\n**Точность.** Ста чисел мало: набор $$101,\\ 102,\\ \\dots,\\ 200 $$ состоит из ста чисел, и ни одно из них не делит другое (частное было бы не меньше двух, а $2\\cdot101>200$).",
    "en": "Every positive integer is uniquely $$m=2^{k}\\cdot q $$ with $q$ odd; call $q$ its **odd part**.\n\n**How many odd parts.** For numbers up to $200$ the odd part is an odd number at most $200$, i.e. one of $$1,\\ 3,\\ 5,\\ \\dots,\\ 199 $$ — exactly $100$ possibilities.\n\n**Pigeonhole.** With $101$ chosen numbers and $100$ odd parts, two chosen numbers share an odd part: $$a=2^{k}q,\\qquad b=2^{\\ell}q,\\qquad k\\ne\\ell .$$\n\n**Conclusion.** If $k<\\ell$ then $$b=a\\cdot2^{\\,\\ell-k} ,$$ so $a$ divides $b$. $\\blacksquare$\n\n**Sharpness.** A hundred numbers do not suffice: the set $$101,\\ 102,\\ \\dots,\\ 200 $$ has a hundred elements and none divides another (a quotient would be at least two, but $2\\cdot101>200$)."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Каждая пара из $17$ учёных переписывается ровно по одной из трёх тем. Докажите, что найдутся трое, переписывающиеся между собой по одной и той же теме.",
    "en": "Every pair among $17$ scientists corresponds on exactly one of three topics. Prove that some three of them correspond with one another on the same topic."
   },
   "hint": {
    "ru": "Зафиксируйте одного учёного и посмотрите, по какой теме он пишет чаще всего.",
    "en": "Fix one scientist and look at their most frequent topic."
   },
   "sol": {
    "ru": "**Шаг 1: у кого-то шесть собеседников по одной теме.** Возьмём учёного $A$. У него $16$ собеседников, а тем три. Если бы по каждой теме он переписывался не более чем с пятью, всего собеседников было бы не больше $$3\\cdot5=15<16 \\quad ✗$$\n\nЗначит есть тема (скажем, первая), по которой $A$ переписывается по крайней мере с шестью учёными. Обозначим этих шестерых через $M$.\n\n**Шаг 2: разбираем группу $M$.** Если какие-то двое из $M$ переписываются между собой **по первой теме**, то они вместе с $A$ дают искомую тройку ✓\n\nИначе все пары внутри $M$ используют только **две** оставшиеся темы.\n\n**Шаг 3: применяем случай двух тем.** Известно, что среди любых шести человек, каждая пара которых окрашена в один из двух цветов, найдётся одноцветная тройка (это утверждение $R(3,3)\\le6$).\n\nЗначит внутри $M$ найдутся трое, переписывающиеся между собой по одной теме ✓\n\nВ обоих случаях искомая тройка существует. $\\blacksquare$\n\n**Точность.** Число $17$ нельзя уменьшить: существует раскраска пар из $16$ учёных в три темы без одноцветной тройки, то есть $R(3,3,3)=17$.\n\n**Заодно напомним** доказательство для двух тем: у одного из шести есть три собеседника по одной теме; если какие-то двое из них переписываются по ней же — тройка готова, иначе эти трое образуют тройку по другой теме.",
    "en": "**Step 1: someone has six partners on one topic.** Take a scientist $A$. They have $16$ partners and there are three topics. If each topic accounted for at most five, there would be at most $$3\\cdot5=15<16 \\quad ✗$$\n\nSo some topic (say the first) is shared by $A$ with at least six scientists; call this set $M$.\n\n**Step 2: examine $M$.** If two members of $M$ correspond with each other **on the first topic**, they and $A$ form the required triple ✓\n\nOtherwise all pairs inside $M$ use only the other **two** topics.\n\n**Step 3: apply the two-topic case.** Among any six people whose pairs are coloured in two colours there is a monochromatic triple (the statement $R(3,3)\\le6$).\n\nSo $M$ contains three scientists corresponding on one topic ✓\n\nIn both cases the triple exists. $\\blacksquare$\n\n**Sharpness.** The number $17$ cannot be lowered: there is a three-colouring of the pairs among $16$ scientists with no monochromatic triple, so $R(3,3,3)=17$.\n\n**Recall the two-colour proof:** one of six people has three partners in one colour; if two of those three are joined in that colour, done; otherwise those three form a triple in the other colour."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Числа $1,2,\\dots,9$ покрашены в два цвета. Докажите, что найдутся три числа одного цвета, образующие арифметическую прогрессию.",
    "en": "The numbers $1,2,\\dots,9$ are coloured in two colours. Prove that three numbers of the same colour form an arithmetic progression."
   },
   "hint": {
    "ru": "Начните с цвета числа $5$ и разберите случаи.",
    "en": "Start from the colour of $5$ and split into cases."
   },
   "sol": {
    "ru": "Предположим противное: одноцветной прогрессии из трёх членов нет. Цвета назовём К и С.\n\n**Симметрия.** Отражение $x\\mapsto10-x$ переводит арифметические прогрессии в арифметические прогрессии, поэтому им можно пользоваться для сокращения перебора. Кроме того, цвета равноправны.\n\n**Считаем, что $5$ — красное.**\n\nПрогрессии $\\{4,5,6\\}$, $\\{3,5,7\\}$, $\\{2,5,8\\}$, $\\{1,5,9\\}$ не могут быть одноцветными, значит в каждой из пар $$\\{4,6\\},\\quad\\{3,7\\},\\quad\\{2,8\\},\\quad\\{1,9\\} $$ есть хотя бы одно синее число.\n\n**Случай 1: $4$ — красное.**\n\nИз $\\{4,5,6\\}$: $6$ синее. Из $\\{3,4,5\\}$: $3$ синее.\n\nИз $\\{3,6,9\\}$ (оба крайних пока синие): $9$ красное.\n\nИз $\\{1,5,9\\}$: $1$ синее. Из $\\{5,7,9\\}$: $7$ синее.\n\nИз $\\{1,2,3\\}$ (числа $1$ и $3$ синие): $2$ красное.\n\nИз $\\{2,5,8\\}$ (числа $2$ и $5$ красные): $8$ синее.\n\nНо теперь $6$, $7$, $8$ — все синие, и это арифметическая прогрессия ✗\n\n**Случай 2: $4$ — синее, $6$ — красное.**\n\nПрименим отражение $x\\mapsto10-x$: оно меняет местами $4$ и $6$, оставляет $5$ на месте и переводит прогрессии в прогрессии. Полученная раскраска попадает в случай 1, где мы уже нашли одноцветную прогрессию; отражая её обратно, получаем прогрессию и в исходной раскраске ✗\n\n**Случай 3: и $4$, и $6$ — синие.**\n\nИз $\\{2,4,6\\}$: $2$ красное. Из $\\{4,6,8\\}$: $8$ красное.\n\nНо тогда $2$, $5$, $8$ — все красные, и это прогрессия ✗\n\nВо всех случаях получено противоречие. $\\blacksquare$\n\n**Точность.** Для чисел $1,\\dots,8$ утверждение неверно: раскраска $$\\text{К С С К К С С К}$$ (то есть $1,4,5,8$ — красные, $2,3,6,7$ — синие) не содержит одноцветной прогрессии из трёх членов. Значит нужное число ровно $9$.\n\n**Общая теорема Ван дер Вардена** утверждает, что для любых $k$ цветов и любой длины $\\ell$ найдётся $N$, при котором любая раскраска чисел $1,\\dots,N$ в $k$ цветов содержит одноцветную прогрессию длины $\\ell$.",
    "en": "Suppose not: no three-term monochromatic progression exists. Call the colours R and B.\n\n**Symmetry.** The reflection $x\\mapsto10-x$ maps arithmetic progressions to arithmetic progressions, so it can be used to shorten the case analysis; the two colours are also interchangeable.\n\n**Assume $5$ is red.**\n\nThe progressions $\\{4,5,6\\}$, $\\{3,5,7\\}$, $\\{2,5,8\\}$, $\\{1,5,9\\}$ cannot be monochromatic, so each of the pairs $$\\{4,6\\},\\quad\\{3,7\\},\\quad\\{2,8\\},\\quad\\{1,9\\} $$ contains at least one blue number.\n\n**Case 1: $4$ is red.**\n\nFrom $\\{4,5,6\\}$: $6$ is blue. From $\\{3,4,5\\}$: $3$ is blue.\n\nFrom $\\{3,6,9\\}$ (the first two blue): $9$ is red.\n\nFrom $\\{1,5,9\\}$: $1$ is blue. From $\\{5,7,9\\}$: $7$ is blue.\n\nFrom $\\{1,2,3\\}$ ($1$ and $3$ blue): $2$ is red.\n\nFrom $\\{2,5,8\\}$ ($2$ and $5$ red): $8$ is blue.\n\nBut now $6$, $7$, $8$ are all blue — an arithmetic progression ✗\n\n**Case 2: $4$ blue, $6$ red.**\n\nApply the reflection $x\\mapsto10-x$: it swaps $4$ and $6$, fixes $5$ and preserves progressions. The reflected colouring falls into Case 1, where a monochromatic progression was found; reflecting it back gives one in the original colouring ✗\n\n**Case 3: both $4$ and $6$ blue.**\n\nFrom $\\{2,4,6\\}$: $2$ is red. From $\\{4,6,8\\}$: $8$ is red.\n\nBut then $2$, $5$, $8$ are all red — a progression ✗\n\nEvery case gives a contradiction. $\\blacksquare$\n\n**Sharpness.** For $1,\\dots,8$ the claim fails: colouring $1,4,5,8$ red and $2,3,6,7$ blue contains no monochromatic three-term progression. So $9$ is exactly the threshold.\n\n**Van der Waerden’s general theorem** says that for any $k$ colours and any length $\\ell$ there is an $N$ such that every $k$-colouring of $1,\\dots,N$ contains a monochromatic progression of length $\\ell$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что среди любых $10$ человек найдутся трое попарно знакомых или четверо попарно незнакомых.",
    "en": "Prove that among any $10$ people there are three who all know one another, or four who are all mutual strangers."
   },
   "hint": {
    "ru": "Зафиксируйте человека и разберите два случая: у него много знакомых или много незнакомых.",
    "en": "Fix a person and split: they have many acquaintances, or many strangers."
   },
   "sol": {
    "ru": "Возьмём человека $A$; у него $9$ «партнёров», каждый из которых ему знаком или незнаком. Обозначим через $K$ множество знакомых $A$, через $S$ — множество незнакомых, так что $$|K|+|S|=9 .$$\n\n**Ключевое наблюдение.** Либо $|K|\\ge4$, либо $|S|\\ge6$: если $|K|\\le3$, то $|S|\\ge6$.\n\n**Случай 1: $|K|\\ge4$.** Рассмотрим четверых знакомых $A$.\n\nЕсли какие-то двое из них знакомы между собой, то они вместе с $A$ дают **троих попарно знакомых** ✓\n\nИначе эти четверо попарно незнакомы — искомая четвёрка ✓\n\n**Случай 2: $|S|\\ge6$.** Рассмотрим шестерых незнакомых с $A$.\n\nСреди любых шести человек есть трое попарно знакомых или трое попарно незнакомых (это $R(3,3)\\le6$).\n\nЕсли есть трое попарно знакомых — готово ✓\n\nЕсли есть трое попарно незнакомых, то они все незнакомы ещё и с $A$, значит вместе с ним образуют **четвёрку попарно незнакомых** ✓\n\nВо всех случаях требуемая конфигурация найдена. $\\blacksquare$\n\n**Что это за число.** Мы доказали $R(3,4)\\le10$; на самом деле $R(3,4)=9$, но доказательство точной оценки заметно тоньше.\n\n**Схема рассуждения** типична для чисел Рамсея: $$R(s,t)\\ \\le\\ R(s-1,t)+R(s,t-1) ,$$ и здесь мы применили её в виде $R(3,4)\\le R(2,4)+R(3,3)=4+6=10$.",
    "en": "Take a person $A$; they have $9$ others, each either an acquaintance or a stranger. Let $K$ be the acquaintances of $A$ and $S$ the strangers, so $$|K|+|S|=9 .$$\n\n**Key observation.** Either $|K|\\ge4$ or $|S|\\ge6$: if $|K|\\le3$ then $|S|\\ge6$.\n\n**Case 1: $|K|\\ge4$.** Look at four acquaintances of $A$.\n\nIf two of them know each other, they together with $A$ give **three mutual acquaintances** ✓\n\nOtherwise those four are pairwise strangers — the required foursome ✓\n\n**Case 2: $|S|\\ge6$.** Look at six strangers to $A$.\n\nAmong any six people there are three mutual acquaintances or three mutual strangers ($R(3,3)\\le6$).\n\nThree mutual acquaintances — done ✓\n\nThree mutual strangers are also strangers to $A$, so with $A$ they form **four mutual strangers** ✓\n\nIn every case the configuration exists. $\\blacksquare$\n\n**Which number is this.** We proved $R(3,4)\\le10$; in fact $R(3,4)=9$, but the exact bound needs a subtler argument.\n\n**The scheme** is typical for Ramsey numbers: $$R(s,t)\\ \\le\\ R(s-1,t)+R(s,t-1) ,$$ used here as $R(3,4)\\le R(2,4)+R(3,3)=4+6=10$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "На плоскости отмечены пять точек, никакие три из которых не лежат на одной прямой. Докажите, что какие-то четыре из них — вершины выпуклого четырёхугольника.",
    "en": "Five points are marked in the plane, no three collinear. Prove that four of them are the vertices of a convex quadrilateral."
   },
   "hint": {
    "ru": "Рассмотрите выпуклую оболочку пяти точек.",
    "en": "Consider the convex hull of the five points."
   },
   "sol": {
    "ru": "Рассмотрим **выпуклую оболочку** данных пяти точек — наименьший выпуклый многоугольник, их содержащий. Так как никакие три точки не лежат на одной прямой, его вершинами являются какие-то из наших точек, и их может быть $3$, $4$ или $5$.\n\n**Случай A: оболочка — пятиугольник.** Тогда любые четыре его вершины образуют выпуклый четырёхугольник ✓\n\n**Случай B: оболочка — четырёхугольник.** Он сам и есть искомый ✓\n\n**Случай C: оболочка — треугольник $ABC$.** Тогда две оставшиеся точки $D$ и $E$ лежат строго внутри треугольника.\n\nПроведём прямую через $D$ и $E$. Она делит плоскость на две полуплоскости, а вершины $A$, $B$, $C$ на этой прямой не лежат (иначе три точки были бы коллинеарны). Значит по принципу Дирихле какие-то **две** вершины, скажем $A$ и $B$, попали в одну полуплоскость.\n\n**Утверждение:** тогда $A$, $B$, $D$, $E$ — вершины выпуклого четырёхугольника (в подходящем порядке).\n\nДействительно, отрезок $DE$ лежит на прямой, а точки $A$ и $B$ — по одну сторону от неё. Рассмотрим четырёхугольник с вершинами $A$, $B$ и $D$, $E$, взятыми в порядке обхода. Его диагонали — это отрезок, соединяющий $A$ или $B$ с одной из точек $D$, $E$, и они пересекаются: одна пара противоположных вершин ($D$ и $E$) лежит на прямой, вторая пара ($A$ и $B$) — по одну сторону, и обход по границе не имеет самопересечений.\n\nФормально: четырёхугольник выпуклый тогда и только тогда, когда его диагонали пересекаются внутри; здесь это выполняется по построению, если занумеровать вершины в порядке обхода выпуклой оболочки набора $\\{A,B,D,E\\}$ — а её вершинами являются все четыре точки, поскольку ни одна из них не лежит внутри треугольника, образованного тремя другими (точки $D$ и $E$ лежат внутри $ABC$, но не внутри треугольников, составленных из $A$, $B$ и одной из них, — иначе прямая $DE$ разделила бы $A$ и $B$). ✓\n\n$\\blacksquare$\n\n**История.** Это задача Эстер Клейн, известная как «задача о счастливом конце»: обсуждение привело к женитьбе Дьёрдя Секереша и Эстер Клейн.\n\n**Обобщение (гипотеза Эрдёша — Секереша).** Для выпуклого $n$-угольника достаточно $2^{\\,n-2}+1$ точек в общем положении; при $n=5$ это $9$ точек, и это доказано.",
    "en": "Consider the **convex hull** of the five points — the smallest convex polygon containing them. Since no three are collinear, its vertices are among our points, and there are $3$, $4$ or $5$ of them.\n\n**Case A: the hull is a pentagon.** Any four of its vertices form a convex quadrilateral ✓\n\n**Case B: the hull is a quadrilateral.** It is the required one ✓\n\n**Case C: the hull is a triangle $ABC$.** The remaining two points $D$ and $E$ lie strictly inside it.\n\nDraw the line through $D$ and $E$. It splits the plane into two half-planes, and none of $A$, $B$, $C$ lies on it (else three points would be collinear). By the pigeonhole principle **two** vertices, say $A$ and $B$, lie in the same half-plane.\n\n**Claim:** then $A$, $B$, $D$, $E$ are the vertices of a convex quadrilateral (in a suitable order).\n\nIndeed, the segment $DE$ lies on the line while $A$ and $B$ are on one side of it. Take the convex hull of $\\{A,B,D,E\\}$: all four points are its vertices, since none lies inside the triangle formed by the other three (the points $D$, $E$ lie inside $ABC$, but neither lies inside a triangle made from $A$, $B$ and the other — that would force the line $DE$ to separate $A$ from $B$). A four-point set all of whose points are hull vertices is exactly a convex quadrilateral ✓\n\n$\\blacksquare$\n\n**History.** This is Esther Klein’s problem, known as the \"happy ending problem\": the discussion around it led to the marriage of George Szekeres and Esther Klein.\n\n**Generalisation (Erdős–Szekeres conjecture).** For a convex $n$-gon, $2^{\\,n-2}+1$ points in general position should suffice; for $n=5$ this means $9$ points, and that case is proved."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Числа $1,2,3,4,5$ покрашены в два цвета. Докажите, что найдутся числа $x$, $y$, $z$ одного цвета (не обязательно различные) с $x+y=z$.",
    "en": "The numbers $1,2,3,4,5$ are coloured in two colours. Prove that there exist $x$, $y$, $z$ of the same colour (not necessarily distinct) with $x+y=z$."
   },
   "hint": {
    "ru": "Начните с цвета единицы и последовательно выводите цвета остальных.",
    "en": "Start from the colour of $1$ and deduce the rest step by step."
   },
   "sol": {
    "ru": "Предположим противное: одноцветного решения уравнения $x+y=z$ нет. Цвета назовём К и С; они равноправны, поэтому можно считать, что $$1\\ \\text{— красное}.$$\n\n**Шаг 1: цвет двойки.** Если бы $2$ было красным, то тройка $$1+1=2 $$ была бы одноцветной ✗ Значит $2$ — синее.\n\n**Шаг 2: цвет четвёрки.** Если бы $4$ было синим, то $$2+2=4 $$ дало бы одноцветную тройку ✗ Значит $4$ — красное.\n\n**Шаг 3: цвет тройки.** Если бы $3$ было красным, то $$1+3=4 $$ — все три числа красные ✗ Значит $3$ — синее.\n\n**Шаг 4: цвет пятёрки.** Числа $2$ и $3$ синие, и $$2+3=5 ,$$ поэтому $5$ не может быть синим. Значит $5$ — красное.\n\n**Противоречие.** Теперь $1$, $4$ и $5$ — все красные, а $$1+4=5 \\quad ✗$$\n\nПротиворечие завершает доказательство. $\\blacksquare$\n\n**Точность.** Для чисел $1,\\dots,4$ утверждение неверно: покрасив $1,4$ в красный, а $2,3$ — в синий, одноцветного решения не получим (проверьте: $1+1=2$ разноцветно, $2+2=4$ разноцветно, $1+3=4$ разноцветно).\n\n**Теорема Шура.** Для любого числа цветов $k$ существует $N$, при котором любая раскраска чисел $1,\\dots,N$ в $k$ цветов содержит одноцветное решение уравнения $x+y=z$. Мы разобрали случай $k=2$, где минимальное $N$ равно $5$.",
    "en": "Suppose not: there is no monochromatic solution of $x+y=z$. Call the colours R and B; they are interchangeable, so we may assume $$1\\ \\text{is red}.$$\n\n**Step 1: the colour of $2$.** If $2$ were red, then $$1+1=2 $$ would be monochromatic ✗ So $2$ is blue.\n\n**Step 2: the colour of $4$.** If $4$ were blue, then $$2+2=4 $$ would be monochromatic ✗ So $4$ is red.\n\n**Step 3: the colour of $3$.** If $3$ were red, then $$1+3=4 $$ would be all red ✗ So $3$ is blue.\n\n**Step 4: the colour of $5$.** Both $2$ and $3$ are blue and $$2+3=5 ,$$ so $5$ cannot be blue. Hence $5$ is red.\n\n**Contradiction.** Now $1$, $4$, $5$ are all red while $$1+4=5 \\quad ✗$$\n\nThe contradiction completes the proof. $\\blacksquare$\n\n**Sharpness.** For $1,\\dots,4$ the claim fails: colour $1,4$ red and $2,3$ blue and check that $1+1=2$, $2+2=4$, $1+3=4$ all mix colours.\n\n**Schur’s theorem.** For any number of colours $k$ there is an $N$ such that every $k$-colouring of $1,\\dots,N$ has a monochromatic solution of $x+y=z$. We treated $k=2$, where the least such $N$ is $5$."
   }
  }
 ]
};
