/* Topic 12 — generated from content/lesson_12.py, do not edit by hand. */
window.LESSONS = window.LESSONS || {};
window.LESSONS[12] = {
 "n": 12,
 "cat": "geo",
 "title": {
  "ru": "Координатный метод",
  "en": "Coordinate geometry"
 },
 "sub": {
  "ru": "Расстояния, прямые, окружности и площади в координатах — и умение выбрать систему так, чтобы задача стала вычислением.",
  "en": "Distances, lines, circles and areas in coordinates — and the knack of choosing a frame that turns a problem into arithmetic."
 },
 "goals": {
  "ru": [
   "Считать расстояния, середины и точки, делящие отрезок в данном отношении.",
   "Писать уравнение прямой и окружности, проверять параллельность и перпендикулярность.",
   "Находить расстояние от точки до прямой и площадь треугольника по координатам.",
   "Выбирать удобную систему координат и доказывать геометрические факты вычислением."
  ],
  "en": [
   "Compute distances, midpoints and points dividing a segment in a given ratio.",
   "Write the equation of a line and of a circle, and test parallelism and perpendicularity.",
   "Find the distance from a point to a line and the area of a triangle from coordinates.",
   "Choose a convenient frame and prove geometric facts by computation."
  ]
 },
 "sections": [
  {
   "h": {
    "ru": "Точки, расстояния, середины",
    "en": "Points, distances, midpoints"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Расстояние между точками",
      "en": "The distance between two points"
     },
     "text": {
      "ru": "Для точек $A\\left(x_1,y_1\\right)$ и $B\\left(x_2,y_2\\right)$ $$AB=\\sqrt{\\left(x_2-x_1\\right)^{2}+\\left(y_2-y_1\\right)^{2}} .$$",
      "en": "For points $A\\left(x_1,y_1\\right)$ and $B\\left(x_2,y_2\\right)$, $$AB=\\sqrt{\\left(x_2-x_1\\right)^{2}+\\left(y_2-y_1\\right)^{2}} .$$"
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 400 300\" role=\"img\" aria-label=\"Two points, the distance between them and the midpoint\">\n<path class=\"dsh\" d=\"M60 200 H310 M310 200 V50\"/>\n<path class=\"ln\" d=\"M40 250 H375 M60 270 V25\"/>\n<path class=\"ln\" d=\"M368 245 L375 250 L368 255 M55 32 L60 25 L65 32\"/>\n<path class=\"lnc\" d=\"M110 200 L310 50\"/>\n<circle class=\"pt\" cx=\"110\" cy=\"200\" r=\"3.5\"/><circle class=\"pt\" cx=\"310\" cy=\"50\" r=\"3.5\"/>\n<circle class=\"ptc\" cx=\"210\" cy=\"125\" r=\"3.5\"/>\n<text x=\"96\" y=\"220\">A</text><text x=\"318\" y=\"44\">B</text>\n<text class=\"acc\" x=\"216\" y=\"118\">M</text>\n<text class=\"sm\" x=\"200\" y=\"216\">x&#8322;&#8722;x&#8321;</text><text class=\"sm\" x=\"318\" y=\"130\">y&#8322;&#8722;y&#8321;</text>\n<text class=\"sm\" x=\"372\" y=\"266\">x</text><text class=\"sm\" x=\"42\" y=\"30\">y</text>\n<text class=\"sm\" x=\"42\" y=\"266\">O</text>\n</svg>",
     "cap": {
      "ru": "Отрезок $AB$ — гипотенуза прямоугольного треугольника с катетами $x_2-x_1$ и $y_2-y_1$; точка $M$ — середина.",
      "en": "The segment $AB$ is the hypotenuse of a right triangle with legs $x_2-x_1$ and $y_2-y_1$; the point $M$ is the midpoint."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Проведём через $A$ горизонтальную прямую, а через $B$ вертикальную; они пересекутся в точке $C\\left(x_2,y_1\\right)$. Треугольник $ACB$ прямоугольный с катетами $$AC=\\left|x_2-x_1\\right|,\\qquad CB=\\left|y_2-y_1\\right|,$$ и по теореме Пифагора $AB^{2}=AC^{2}+CB^{2}$. Модули под квадратом можно опустить. $\\blacksquare$",
      "en": "Draw a horizontal line through $A$ and a vertical one through $B$; they meet at $C\\left(x_2,y_1\\right)$. The triangle $ACB$ is right-angled with legs $$AC=\\left|x_2-x_1\\right|,\\qquad CB=\\left|y_2-y_1\\right|,$$ and Pythagoras gives $AB^{2}=AC^{2}+CB^{2}$. The absolute values may be dropped under the squares. $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Середина и деление в отношении",
      "en": "Midpoint and division in a ratio"
     },
     "text": {
      "ru": "Середина отрезка $AB$ имеет координаты $$M\\left(\\frac{x_1+x_2}{2},\\ \\frac{y_1+y_2}{2}\\right).$$ Более общо, точка $P$, делящая отрезок в отношении $AP:PB=m:n$, имеет координаты $$P\\left(\\frac{n\\,x_1+m\\,x_2}{m+n},\\ \\frac{n\\,y_1+m\\,y_2}{m+n}\\right).$$",
      "en": "The midpoint of $AB$ is $$M\\left(\\frac{x_1+x_2}{2},\\ \\frac{y_1+y_2}{2}\\right).$$ More generally, the point $P$ with $AP:PB=m:n$ is $$P\\left(\\frac{n\\,x_1+m\\,x_2}{m+n},\\ \\frac{n\\,y_1+m\\,y_2}{m+n}\\right).$$"
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Обратите внимание на порядок в формуле деления: при отношении $m:n$ координата **первой** точки умножается на $n$, а не на $m$. Проверяйте формулу на крайних случаях: при $m=0$ должна получиться точка $A$ — и действительно получается.",
      "en": "Mind the order in the division formula: for a ratio $m:n$ the coordinate of the **first** point is multiplied by $n$, not by $m$. Test it at the extremes: $m=0$ must give the point $A$ — and it does."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Даны точки $A(3,-1)$ и $B(-2,11)$. Найдите длину $AB$, середину отрезка и точку, делящую $AB$ в отношении $2:3$ от $A$.",
      "en": "Given $A(3,-1)$ and $B(-2,11)$, find the length $AB$, the midpoint, and the point dividing $AB$ in the ratio $2:3$ from $A$."
     },
     "steps": {
      "ru": [
       "Разности координат: $x_2-x_1=-5$ и $y_2-y_1=12$.",
       "$AB=\\sqrt{(-5)^{2}+12^{2}}=\\sqrt{25+144}=\\sqrt{169}=13$.",
       "Середина: $\\left(\\dfrac{3+(-2)}{2},\\dfrac{-1+11}{2}\\right)=\\left(\\dfrac12,5\\right)$.",
       "Деление в отношении $2:3$: $$x=\\frac{3\\cdot3+2\\cdot(-2)}{5}=\\frac{9-4}{5}=1,\\qquad y=\\frac{3\\cdot(-1)+2\\cdot11}{5}=\\frac{-3+22}{5}=\\frac{19}{5}.$$"
      ],
      "en": [
       "The coordinate differences are $x_2-x_1=-5$ and $y_2-y_1=12$.",
       "$AB=\\sqrt{(-5)^{2}+12^{2}}=\\sqrt{25+144}=\\sqrt{169}=13$.",
       "Midpoint: $\\left(\\dfrac{3+(-2)}{2},\\dfrac{-1+11}{2}\\right)=\\left(\\dfrac12,5\\right)$.",
       "Division in the ratio $2:3$: $$x=\\frac{3\\cdot3+2\\cdot(-2)}{5}=\\frac{9-4}{5}=1,\\qquad y=\\frac{3\\cdot(-1)+2\\cdot11}{5}=\\frac{-3+22}{5}=\\frac{19}{5}.$$"
      ]
     },
     "ans": {
      "ru": "$AB=13$, середина $\\left(\\tfrac12,5\\right)$, искомая точка $\\left(1,\\tfrac{19}{5}\\right)$.",
      "en": "$AB=13$, midpoint $\\left(\\tfrac12,5\\right)$, and the point is $\\left(1,\\tfrac{19}{5}\\right)$."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Из формулы середины сразу получается координата **центроида** треугольника: $$G\\left(\\frac{x_A+x_B+x_C}{3},\\ \\frac{y_A+y_B+y_C}{3}\\right).$$ Это среднее арифметическое координат вершин — самый быстрый способ найти точку пересечения медиан.",
      "en": "The midpoint formula immediately gives the **centroid** of a triangle: $$G\\left(\\frac{x_A+x_B+x_C}{3},\\ \\frac{y_A+y_B+y_C}{3}\\right),$$ the average of the vertices — the fastest way to locate the meeting point of the medians."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Прямая",
    "en": "The line"
   },
   "blocks": [
    {
     "t": "ul",
     "items": {
      "ru": [
       "**С угловым коэффициентом:** $y=kx+b$, где $k$ — тангенс угла наклона, $b$ — точка пересечения с осью $Oy$. Не описывает вертикальные прямые.",
       "**Общее уравнение:** $ax+by+c=0$ (при $a,b$ не равных нулю одновременно). Описывает **любую** прямую.",
       "**Через две точки:** $\\dfrac{x-x_1}{x_2-x_1}=\\dfrac{y-y_1}{y_2-y_1}$, а в виде без дробей — $\\left(y_2-y_1\\right)(x-x_1)=\\left(x_2-x_1\\right)(y-y_1)$.",
       "**Параллельность:** $k_1=k_2$, в общем виде $a_1b_2=a_2b_1$.",
       "**Перпендикулярность:** $k_1k_2=-1$, в общем виде $a_1a_2+b_1b_2=0$."
      ],
      "en": [
       "**Slope form:** $y=kx+b$, where $k$ is the slope and $b$ the $y$-intercept. It cannot describe vertical lines.",
       "**General form:** $ax+by+c=0$ (with $a,b$ not both zero). It describes **every** line.",
       "**Through two points:** $\\dfrac{x-x_1}{x_2-x_1}=\\dfrac{y-y_1}{y_2-y_1}$, or free of fractions, $\\left(y_2-y_1\\right)(x-x_1)=\\left(x_2-x_1\\right)(y-y_1)$.",
       "**Parallel:** $k_1=k_2$, or in general form $a_1b_2=a_2b_1$.",
       "**Perpendicular:** $k_1k_2=-1$, or in general form $a_1a_2+b_1b_2=0$."
      ]
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Почему условие перпендикулярности выглядит как $k_1k_2=-1$? Прямая с коэффициентом $k$ имеет направляющий вектор $(1,k)$. Перпендикулярность означает, что скалярное произведение направляющих векторов равно нулю: $$1\\cdot1+k_1k_2=0\\quad\\Longrightarrow\\quad k_1k_2=-1 .$$",
      "en": "Why does perpendicularity read $k_1k_2=-1$? A line of slope $k$ has direction vector $(1,k)$. Being perpendicular means the dot product of the direction vectors vanishes: $$1\\cdot1+k_1k_2=0\\quad\\Longrightarrow\\quad k_1k_2=-1 .$$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Напишите уравнение прямой, проходящей через точки $A(1,2)$ и $B(3,8)$, и уравнение прямой, проходящей через $A$ перпендикулярно $AB$.",
      "en": "Write the equation of the line through $A(1,2)$ and $B(3,8)$, and of the line through $A$ perpendicular to $AB$."
     },
     "steps": {
      "ru": [
       "Угловой коэффициент: $k=\\dfrac{8-2}{3-1}=\\dfrac62=3$.",
       "Прямая через $A$: $y-2=3(x-1)$, то есть $y=3x-1$.",
       "Проверка: при $x=3$ получаем $y=8$ ✓",
       "Для перпендикулярной прямой $k^{\\prime}=-\\dfrac13$.",
       "$y-2=-\\dfrac13(x-1)$, то есть $y=-\\dfrac{x}{3}+\\dfrac73$, или $x+3y-7=0$."
      ],
      "en": [
       "The slope: $k=\\dfrac{8-2}{3-1}=\\dfrac62=3$.",
       "The line through $A$: $y-2=3(x-1)$, that is $y=3x-1$.",
       "Check: at $x=3$ we get $y=8$ ✓",
       "For the perpendicular line $k^{\\prime}=-\\dfrac13$.",
       "$y-2=-\\dfrac13(x-1)$, that is $y=-\\dfrac{x}{3}+\\dfrac73$, or $x+3y-7=0$."
      ]
     },
     "ans": {
      "ru": "$y=3x-1$ и $x+3y-7=0$.",
      "en": "$y=3x-1$ and $x+3y-7=0$."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Расстояние от точки до прямой",
      "en": "Distance from a point to a line"
     },
     "text": {
      "ru": "Расстояние от точки $P\\left(x_0,y_0\\right)$ до прямой $ax+by+c=0$ равно $$d=\\frac{\\left|ax_0+by_0+c\\right|}{\\sqrt{a^{2}+b^{2}}}.$$",
      "en": "The distance from a point $P\\left(x_0,y_0\\right)$ to the line $ax+by+c=0$ equals $$d=\\frac{\\left|ax_0+by_0+c\\right|}{\\sqrt{a^{2}+b^{2}}}.$$"
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 400 280\" role=\"img\" aria-label=\"Distance from a point to a line\">\n<path class=\"lnc\" d=\"M40 220 L360 80\"/>\n<path class=\"dsh\" d=\"M150 90 L180 159\"/>\n<path class=\"ln\" d=\"M172 152 L179 141 L189 148\"/>\n<circle class=\"pt\" cx=\"150\" cy=\"90\" r=\"4\"/><circle class=\"ptc\" cx=\"180\" cy=\"159\" r=\"3.5\"/>\n<text x=\"130\" y=\"82\">P</text>\n<text class=\"acc\" x=\"188\" y=\"176\">H</text>\n<text class=\"sm\" x=\"332\" y=\"72\">ax+by+c=0</text>\n<text class=\"sm\" x=\"146\" y=\"132\">d</text>\n</svg>",
     "cap": {
      "ru": "Расстояние $d=PH$ — длина перпендикуляра из точки $P$ на прямую.",
      "en": "The distance $d=PH$ is the length of the perpendicular from $P$ to the line."
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Числитель — это левая часть уравнения прямой, в которую подставлены координаты точки. Он равен нулю ровно тогда, когда точка лежит на прямой, а его знак говорит, по какую сторону от прямой находится точка. Знаменатель — нормировка: он делает величину именно расстоянием, а не «расстоянием, умноженным на масштаб».",
      "en": "The numerator is the left-hand side of the line’s equation with the point substituted in. It is zero exactly when the point lies on the line, and its sign tells which side of the line the point is on. The denominator normalises: it turns the quantity into an actual distance rather than a scaled one."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Площадь и окружность",
    "en": "Area and the circle"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Площадь треугольника по координатам",
      "en": "The area of a triangle from coordinates"
     },
     "text": {
      "ru": "Для треугольника с вершинами $A\\left(x_1,y_1\\right)$, $B\\left(x_2,y_2\\right)$, $C\\left(x_3,y_3\\right)$ $$S=\\frac12\\Bigl|\\left(x_2-x_1\\right)\\left(y_3-y_1\\right)-\\left(x_3-x_1\\right)\\left(y_2-y_1\\right)\\Bigr| .$$",
      "en": "For a triangle with vertices $A\\left(x_1,y_1\\right)$, $B\\left(x_2,y_2\\right)$, $C\\left(x_3,y_3\\right)$, $$S=\\frac12\\Bigl|\\left(x_2-x_1\\right)\\left(y_3-y_1\\right)-\\left(x_3-x_1\\right)\\left(y_2-y_1\\right)\\Bigr| .$$"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Формулу удобно запоминать так: перенесите вершину $A$ в начало координат, и тогда $$S=\\frac12\\left|x_By_C-x_Cy_B\\right| .$$ Выражение под модулем называют **косым произведением** векторов $\\vec{AB}$ и $\\vec{AC}$; его знак говорит, по часовой стрелке или против обходятся вершины.",
      "en": "A handy way to remember it: move $A$ to the origin, and then $$S=\\frac12\\left|x_By_C-x_Cy_B\\right| .$$ The expression inside the modulus is the **cross product** of the vectors $\\vec{AB}$ and $\\vec{AC}$; its sign says whether the vertices are traversed clockwise or anticlockwise."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите площадь треугольника с вершинами $A(1,1)$, $B(6,3)$, $C(4,7)$.",
      "en": "Find the area of the triangle with vertices $A(1,1)$, $B(6,3)$, $C(4,7)$."
     },
     "steps": {
      "ru": [
       "Перенесём $A$ в начало координат, вычитая $(1,1)$ из всех вершин: $$A^{\\prime}(0,0),\\qquad B^{\\prime}(5,2),\\qquad C^{\\prime}(3,6).$$",
       "Площадь не меняется при переносе.",
       "$$S=\\frac12\\left|5\\cdot6-3\\cdot2\\right|=\\frac12\\left|30-6\\right|=\\frac{24}{2}=12 .$$"
      ],
      "en": [
       "Move $A$ to the origin by subtracting $(1,1)$ from every vertex: $$A^{\\prime}(0,0),\\qquad B^{\\prime}(5,2),\\qquad C^{\\prime}(3,6).$$",
       "A translation does not change the area.",
       "$$S=\\frac12\\left|5\\cdot6-3\\cdot2\\right|=\\frac12\\left|30-6\\right|=\\frac{24}{2}=12 .$$"
      ]
     },
     "ans": {
      "ru": "$S=12$.",
      "en": "$S=12$."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Уравнение окружности",
      "en": "The equation of a circle"
     },
     "text": {
      "ru": "Окружность с центром $\\left(x_0,y_0\\right)$ и радиусом $R$ задаётся уравнением $$\\left(x-x_0\\right)^{2}+\\left(y-y_0\\right)^{2}=R^{2}.$$",
      "en": "The circle with centre $\\left(x_0,y_0\\right)$ and radius $R$ is given by $$\\left(x-x_0\\right)^{2}+\\left(y-y_0\\right)^{2}=R^{2}.$$"
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Выделение полного квадрата",
      "en": "Completing the square"
     },
     "text": {
      "ru": "Уравнение вида $x^{2}+y^{2}+Dx+Ey+F=0$ всегда приводится к каноническому виду выделением полных квадратов: $$x^{2}+Dx=\\left(x+\\frac D2\\right)^{2}-\\frac{D^{2}}{4},$$ и так же по $y$. В итоге $$\\left(x+\\frac D2\\right)^{2}+\\left(y+\\frac E2\\right)^{2}=\\frac{D^{2}+E^{2}}{4}-F .$$ Если правая часть положительна — это окружность, если ноль — одна точка, если отрицательна — пустое множество.",
      "en": "An equation $x^{2}+y^{2}+Dx+Ey+F=0$ always reduces to the canonical form by completing squares: $$x^{2}+Dx=\\left(x+\\frac D2\\right)^{2}-\\frac{D^{2}}{4},$$ and likewise in $y$. This gives $$\\left(x+\\frac D2\\right)^{2}+\\left(y+\\frac E2\\right)^{2}=\\frac{D^{2}+E^{2}}{4}-F .$$ If the right side is positive it is a circle, if zero a single point, if negative the empty set."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Координатный метод как приём",
    "en": "Coordinates as a technique"
   },
   "blocks": [
    {
     "t": "idea",
     "name": {
      "ru": "Как выбирать систему координат",
      "en": "How to choose the frame"
     },
     "text": {
      "ru": "Половина успеха — удачные оси. Правила:\n\n**1)** Начало координат — в вершине, где сходится больше всего условий, или в центре симметрии.\n\n**2)** Ось $Ox$ — вдоль стороны или вдоль оси симметрии фигуры.\n\n**3)** Если есть прямой угол, поставьте его в начало координат: тогда две стороны лягут на оси и координаты станут вида $(a,0)$ и $(0,b)$.\n\n**4)** Пользуйтесь масштабом: если в задаче нет заданных длин, можно положить сторону равной $1$ или $2$ (чётные числа удобнее — середины окажутся целыми).",
      "en": "Half the work is choosing the axes well. The rules:\n\n**1)** Put the origin at the vertex where most conditions meet, or at a centre of symmetry.\n\n**2)** Put the $x$-axis along a side or along an axis of symmetry.\n\n**3)** If there is a right angle, place it at the origin: two sides then lie on the axes and coordinates become $(a,0)$ and $(0,b)$.\n\n**4)** Use the freedom of scale: with no lengths prescribed, set a side to $1$ or $2$ (even numbers are handier — midpoints come out whole)."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Докажите координатным методом, что диагонали параллелограмма делятся точкой пересечения пополам.",
      "en": "Prove by coordinates that the diagonals of a parallelogram bisect each other."
     },
     "steps": {
      "ru": [
       "Поставим вершину $A$ в начало координат, а сторону $AB$ — вдоль оси $Ox$: $$A(0,0),\\qquad B(a,0),\\qquad D(p,q).$$",
       "Так как $ABCD$ — параллелограмм, вектор $\\vec{BC}$ равен $\\vec{AD}$, поэтому $C=B+(p,q)=(a+p,\\ q)$.",
       "Середина диагонали $AC$: $$\\left(\\frac{0+a+p}{2},\\ \\frac{0+q}{2}\\right)=\\left(\\frac{a+p}{2},\\ \\frac q2\\right).$$",
       "Середина диагонали $BD$: $$\\left(\\frac{a+p}{2},\\ \\frac{0+q}{2}\\right)=\\left(\\frac{a+p}{2},\\ \\frac q2\\right).$$",
       "Середины совпали, значит диагонали пересекаются именно в этой точке и делятся ею пополам."
      ],
      "en": [
       "Put the vertex $A$ at the origin and the side $AB$ along the $x$-axis: $$A(0,0),\\qquad B(a,0),\\qquad D(p,q).$$",
       "Since $ABCD$ is a parallelogram, $\\vec{BC}=\\vec{AD}$, so $C=B+(p,q)=(a+p,\\ q)$.",
       "Midpoint of the diagonal $AC$: $$\\left(\\frac{0+a+p}{2},\\ \\frac{0+q}{2}\\right)=\\left(\\frac{a+p}{2},\\ \\frac q2\\right).$$",
       "Midpoint of the diagonal $BD$: $$\\left(\\frac{a+p}{2},\\ \\frac{0+q}{2}\\right)=\\left(\\frac{a+p}{2},\\ \\frac q2\\right).$$",
       "The midpoints coincide, so the diagonals meet exactly there and bisect each other."
      ]
     },
     "ans": {
      "ru": "Диагонали делятся точкой пересечения пополам. $\\blacksquare$",
      "en": "The diagonals bisect each other. $\\blacksquare$"
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Выбирая координаты, следите за **общностью**. Записать $A(0,0)$, $B(a,0)$ и $C(p,q)$ — законно: любой треугольник можно так расположить поворотом и переносом. А вот записать $C(0,q)$ уже нельзя — это молча добавляет условие, что угол $A$ прямой.",
      "en": "When choosing coordinates, watch out for **generality**. Writing $A(0,0)$, $B(a,0)$, $C(p,q)$ is legitimate: any triangle can be placed like that by a rotation and a translation. Writing $C(0,q)$ is not — it silently adds the assumption that the angle $A$ is right."
     }
    },
    {
     "t": "p",
     "text": {
      "ru": "Полезно помнить и векторный язык. Для векторов $\\vec{u}=\\left(u_1,u_2\\right)$ и $\\vec{v}=\\left(v_1,v_2\\right)$ **скалярное произведение** равно $$\\vec{u}\\cdot\\vec{v}=u_1v_1+u_2v_2=\\left|\\vec u\\right|\\left|\\vec v\\right|\\cos\\varphi .$$ Отсюда: векторы перпендикулярны тогда и только тогда, когда их скалярное произведение равно нулю, а угол между ними находится делением.",
      "en": "The vector language is worth having too. For $\\vec{u}=\\left(u_1,u_2\\right)$ and $\\vec{v}=\\left(v_1,v_2\\right)$ the **dot product** is $$\\vec{u}\\cdot\\vec{v}=u_1v_1+u_2v_2=\\left|\\vec u\\right|\\left|\\vec v\\right|\\cos\\varphi .$$ Hence: two vectors are perpendicular exactly when their dot product vanishes, and the angle between them is found by dividing."
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
    "ru": "Найдите расстояние между точками $A(-2,5)$ и $B(4,-3)$, а также середину отрезка $AB$.",
    "en": "Find the distance between $A(-2,5)$ and $B(4,-3)$, and the midpoint of $AB$."
   },
   "hint": {
    "ru": "Формула расстояния и формула середины.",
    "en": "The distance formula and the midpoint formula."
   },
   "sol": {
    "ru": "Разности координат: $4-(-2)=6$ и $-3-5=-8$. Тогда $$AB=\\sqrt{6^{2}+(-8)^{2}}=\\sqrt{36+64}=\\sqrt{100}=10 .$$\n\nСередина: $$\\left(\\frac{-2+4}{2},\\ \\frac{5+(-3)}{2}\\right)=(1,\\ 1).$$\n\n**Ответ:** $AB=10$, середина $(1,1)$.",
    "en": "The coordinate differences are $4-(-2)=6$ and $-3-5=-8$. So $$AB=\\sqrt{6^{2}+(-8)^{2}}=\\sqrt{36+64}=\\sqrt{100}=10 .$$\n\nThe midpoint is $$\\left(\\frac{-2+4}{2},\\ \\frac{5+(-3)}{2}\\right)=(1,\\ 1).$$\n\n**Answer:** $AB=10$, midpoint $(1,1)$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Точка $M(4,-1)$ — середина отрезка $AB$, причём $A(-2,3)$. Найдите координаты точки $B$.",
    "en": "The point $M(4,-1)$ is the midpoint of $AB$, and $A(-2,3)$. Find the coordinates of $B$."
   },
   "hint": {
    "ru": "$x_B=2x_M-x_A$.",
    "en": "$x_B=2x_M-x_A$."
   },
   "sol": {
    "ru": "Из формулы середины $x_M=\\dfrac{x_A+x_B}{2}$ следует $$x_B=2x_M-x_A=2\\cdot4-(-2)=10 ,$$ и точно так же $$y_B=2y_M-y_A=2\\cdot(-1)-3=-5 .$$\n\n**Проверка:** середина отрезка от $(-2,3)$ до $(10,-5)$ равна $\\left(\\tfrac{8}{2},\\tfrac{-2}{2}\\right)=(4,-1)$ ✓\n\n**Ответ:** $B(10,-5)$.",
    "en": "From $x_M=\\dfrac{x_A+x_B}{2}$ we get $$x_B=2x_M-x_A=2\\cdot4-(-2)=10 ,$$ and likewise $$y_B=2y_M-y_A=2\\cdot(-1)-3=-5 .$$\n\n**Check:** the midpoint of $(-2,3)$ and $(10,-5)$ is $\\left(\\tfrac{8}{2},\\tfrac{-2}{2}\\right)=(4,-1)$ ✓\n\n**Answer:** $B(10,-5)$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Найдите площадь треугольника с вершинами $A(0,0)$, $B(5,2)$, $C(3,6)$, и проверьте, не является ли он прямоугольным.",
    "en": "Find the area of the triangle with vertices $A(0,0)$, $B(5,2)$, $C(3,6)$, and check whether it is right-angled."
   },
   "hint": {
    "ru": "Площадь по косому произведению; прямой угол — по скалярному.",
    "en": "Area from the cross product; a right angle from the dot product."
   },
   "sol": {
    "ru": "**Площадь.** Вершина $A$ уже в начале координат, поэтому $$S=\\frac12\\left|x_By_C-x_Cy_B\\right|=\\frac12\\left|5\\cdot6-3\\cdot2\\right|=\\frac{24}{2}=12 .$$\n\n**Прямой угол.** Проверим все три скалярных произведения:\n\n$\\vec{AB}\\cdot\\vec{AC}=5\\cdot3+2\\cdot6=27\\ne0$;\n\n$\\vec{BA}\\cdot\\vec{BC}=(-5)(-2)+(-2)(4)=10-8=2\\ne0$;\n\n$\\vec{CA}\\cdot\\vec{CB}=(-3)(2)+(-6)(-4)=-6+24=18\\ne0$.\n\nНи одно не равно нулю, значит прямых углов нет.\n\n**Ответ:** $S=12$; треугольник не прямоугольный.",
    "en": "**Area.** The vertex $A$ is already at the origin, so $$S=\\frac12\\left|x_By_C-x_Cy_B\\right|=\\frac12\\left|5\\cdot6-3\\cdot2\\right|=\\frac{24}{2}=12 .$$\n\n**A right angle.** Check all three dot products:\n\n$\\vec{AB}\\cdot\\vec{AC}=5\\cdot3+2\\cdot6=27\\ne0$;\n\n$\\vec{BA}\\cdot\\vec{BC}=(-5)(-2)+(-2)(4)=10-8=2\\ne0$;\n\n$\\vec{CA}\\cdot\\vec{CB}=(-3)(2)+(-6)(-4)=-6+24=18\\ne0$.\n\nNone vanishes, so there is no right angle.\n\n**Answer:** $S=12$; the triangle is not right-angled."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Напишите уравнение окружности с центром $(2,-3)$ и радиусом $5$. Лежит ли на ней точка $(5,1)$? А точка $(6,0)$?",
    "en": "Write the equation of the circle with centre $(2,-3)$ and radius $5$. Does the point $(5,1)$ lie on it? And $(6,0)$?"
   },
   "hint": {
    "ru": "Подставьте координаты и сравните с $R^{2}$.",
    "en": "Substitute the coordinates and compare with $R^{2}$."
   },
   "sol": {
    "ru": "Уравнение окружности: $$(x-2)^{2}+(y+3)^{2}=25 .$$\n\n**Точка $(5,1)$:** $(5-2)^{2}+(1+3)^{2}=9+16=25$ — равно $R^{2}$, значит точка лежит **на** окружности.\n\n**Точка $(6,0)$:** $(6-2)^{2}+(0+3)^{2}=16+9=25$ — тоже лежит на окружности.\n\n**Ответ:** обе точки лежат на окружности. *Замечание:* это неудивительно — обе дают египетскую тройку $(3,4,5)$.",
    "en": "The equation is $$(x-2)^{2}+(y+3)^{2}=25 .$$\n\n**The point $(5,1)$:** $(5-2)^{2}+(1+3)^{2}=9+16=25$ — equal to $R^{2}$, so it lies **on** the circle.\n\n**The point $(6,0)$:** $(6-2)^{2}+(0+3)^{2}=16+9=25$ — on the circle as well.\n\n**Answer:** both points lie on the circle. *Remark:* no surprise — each gives the $(3,4,5)$ triple."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Прямые заданы уравнениями $y=2x+1$ и $y=kx-3$. При каком $k$ они параллельны, а при каком перпендикулярны?",
    "en": "Two lines are given by $y=2x+1$ and $y=kx-3$. For which $k$ are they parallel, and for which perpendicular?"
   },
   "hint": {
    "ru": "$k_1=k_2$ и $k_1k_2=-1$.",
    "en": "$k_1=k_2$ and $k_1k_2=-1$."
   },
   "sol": {
    "ru": "**Параллельность.** Угловые коэффициенты должны совпасть: $k=2$. (Свободные члены различны, поэтому прямые действительно параллельны, а не совпадают.)\n\n**Перпендикулярность.** Должно выполняться $2k=-1$, откуда $$k=-\\frac12 .$$\n\n**Ответ:** $k=2$ для параллельности и $k=-\\tfrac12$ для перпендикулярности.",
    "en": "**Parallel.** The slopes must agree: $k=2$. (The intercepts differ, so the lines really are parallel rather than identical.)\n\n**Perpendicular.** We need $2k=-1$, so $$k=-\\frac12 .$$\n\n**Answer:** $k=2$ for parallel, $k=-\\tfrac12$ for perpendicular."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Найдите расстояние от точки $P(3,4)$ до прямой $3x-4y+5=0$.",
    "en": "Find the distance from the point $P(3,4)$ to the line $3x-4y+5=0$."
   },
   "hint": {
    "ru": "$d=\\dfrac{\\left|ax_0+by_0+c\\right|}{\\sqrt{a^{2}+b^{2}}}$.",
    "en": "$d=\\dfrac{\\left|ax_0+by_0+c\\right|}{\\sqrt{a^{2}+b^{2}}}$."
   },
   "sol": {
    "ru": "Подставляем координаты в левую часть уравнения: $$3\\cdot3-4\\cdot4+5=9-16+5=-2 .$$ Нормировка: $$\\sqrt{3^{2}+(-4)^{2}}=\\sqrt{25}=5 .$$ Значит $$d=\\frac{|-2|}{5}=\\frac25=0{,}4 .$$\n\n**Ответ:** $d=0{,}4$. *Знак минус* в числителе говорит, что точка лежит с той стороны прямой, где выражение $3x-4y+5$ отрицательно.",
    "en": "Substitute into the left side of the equation: $$3\\cdot3-4\\cdot4+5=9-16+5=-2 .$$ The normalising factor is $$\\sqrt{3^{2}+(-4)^{2}}=\\sqrt{25}=5 ,$$ so $$d=\\frac{|-2|}{5}=\\frac25=0.4 .$$\n\n**Answer:** $d=0.4$. *The minus sign* in the numerator says the point is on the side of the line where $3x-4y+5$ is negative."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Найдите центр и радиус окружности, заданной уравнением $$x^{2}+y^{2}-6x+8y-11=0 .$$",
    "en": "Find the centre and radius of the circle $$x^{2}+y^{2}-6x+8y-11=0 .$$"
   },
   "hint": {
    "ru": "Выделите полные квадраты.",
    "en": "Complete the squares."
   },
   "sol": {
    "ru": "Группируем и выделяем полные квадраты: $$\\left(x^{2}-6x\\right)+\\left(y^{2}+8y\\right)=11 ,$$ $$\\left(x-3\\right)^{2}-9+\\left(y+4\\right)^{2}-16=11 ,$$ $$\\left(x-3\\right)^{2}+\\left(y+4\\right)^{2}=36 .$$\n\n**Ответ:** центр $(3,-4)$, радиус $R=6$.\n\n**Проверка:** точка $(9,-4)$ должна лежать на окружности: $81+16-54-32-11=0$ ✓",
    "en": "Group and complete the squares: $$\\left(x^{2}-6x\\right)+\\left(y^{2}+8y\\right)=11 ,$$ $$\\left(x-3\\right)^{2}-9+\\left(y+4\\right)^{2}-16=11 ,$$ $$\\left(x-3\\right)^{2}+\\left(y+4\\right)^{2}=36 .$$\n\n**Answer:** centre $(3,-4)$, radius $R=6$.\n\n**Check:** the point $(9,-4)$ should be on the circle: $81+16-54-32-11=0$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Найдите точку, равноудалённую от трёх точек $A(0,0)$, $B(6,0)$, $C(0,8)$, и радиус описанной около треугольника $ABC$ окружности.",
    "en": "Find the point equidistant from $A(0,0)$, $B(6,0)$, $C(0,8)$, and the circumradius of the triangle $ABC$."
   },
   "hint": {
    "ru": "Треугольник прямоугольный — но найдите центр и напрямую, через серединные перпендикуляры.",
    "en": "The triangle is right-angled — but find the centre directly, via perpendicular bisectors, as well."
   },
   "sol": {
    "ru": "**Через серединные перпендикуляры.** Серединный перпендикуляр к отрезку $AB$ (он лежит на оси $Ox$) — вертикальная прямая $x=3$. Серединный перпендикуляр к $AC$ (на оси $Oy$) — горизонтальная прямая $y=4$.\n\nОни пересекаются в точке $O(3,4)$.\n\n**Проверка равноудалённости:** $$OA=\\sqrt{9+16}=5,\\qquad OB=\\sqrt{9+16}=5,\\qquad OC=\\sqrt{9+16}=5\\ \\checkmark$$\n\n**Через прямой угол.** Угол при вершине $A$ прямой (стороны лежат на осях), поэтому центр описанной окружности — середина гипотенузы $BC$: $$\\left(\\frac{6+0}{2},\\ \\frac{0+8}{2}\\right)=(3,4),$$ и радиус равен половине гипотенузы: $BC=\\sqrt{36+64}=10$, значит $R=5$.\n\n**Ответ:** центр $(3,4)$, радиус $5$.",
    "en": "**By perpendicular bisectors.** The perpendicular bisector of $AB$ (which lies on the $x$-axis) is the vertical line $x=3$. The perpendicular bisector of $AC$ (on the $y$-axis) is the horizontal line $y=4$.\n\nThey meet at $O(3,4)$.\n\n**Check equidistance:** $$OA=\\sqrt{9+16}=5,\\qquad OB=\\sqrt{9+16}=5,\\qquad OC=\\sqrt{9+16}=5\\ \\checkmark$$\n\n**By the right angle.** The angle at $A$ is right (its sides lie on the axes), so the circumcentre is the midpoint of the hypotenuse $BC$: $$\\left(\\frac{6+0}{2},\\ \\frac{0+8}{2}\\right)=(3,4),$$ and the radius is half the hypotenuse: $BC=\\sqrt{36+64}=10$, so $R=5$.\n\n**Answer:** centre $(3,4)$, radius $5$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Прямая $y=x+1$ пересекает окружность $x^{2}+y^{2}=25$. Найдите длину получившейся хорды.",
    "en": "The line $y=x+1$ meets the circle $x^{2}+y^{2}=25$. Find the length of the chord."
   },
   "hint": {
    "ru": "Либо решите систему, либо найдите расстояние от центра до прямой.",
    "en": "Either solve the system, or find the distance from the centre to the line."
   },
   "sol": {
    "ru": "**Способ 1: через расстояние.** Запишем прямую как $x-y+1=0$. Расстояние от центра $(0,0)$: $$d=\\frac{|0-0+1|}{\\sqrt{1+1}}=\\frac1{\\sqrt2}.$$ Половина хорды равна $\\sqrt{R^{2}-d^{2}}$, поэтому $$\\ell=2\\sqrt{25-\\tfrac12}=2\\sqrt{\\tfrac{49}{2}}=\\frac{2\\cdot7}{\\sqrt2}=7\\sqrt2 .$$\n\n**Способ 2: решить систему.** Подставим $y=x+1$: $$x^{2}+(x+1)^{2}=25,\\qquad 2x^{2}+2x-24=0,\\qquad x^{2}+x-12=0 .$$ Корни $x=3$ и $x=-4$, значит точки пересечения $(3,4)$ и $(-4,-3)$. Тогда $$\\ell=\\sqrt{7^{2}+7^{2}}=7\\sqrt2\\ \\checkmark$$\n\n**Ответ:** $\\ell=7\\sqrt2\\approx9{,}9$.",
    "en": "**Method 1: via the distance.** Write the line as $x-y+1=0$. The distance from the centre $(0,0)$ is $$d=\\frac{|0-0+1|}{\\sqrt{1+1}}=\\frac1{\\sqrt2}.$$ Half the chord is $\\sqrt{R^{2}-d^{2}}$, so $$\\ell=2\\sqrt{25-\\tfrac12}=2\\sqrt{\\tfrac{49}{2}}=\\frac{2\\cdot7}{\\sqrt2}=7\\sqrt2 .$$\n\n**Method 2: solve the system.** Substituting $y=x+1$: $$x^{2}+(x+1)^{2}=25,\\qquad 2x^{2}+2x-24=0,\\qquad x^{2}+x-12=0 .$$ The roots are $x=3$ and $x=-4$, giving the points $(3,4)$ and $(-4,-3)$. Then $$\\ell=\\sqrt{7^{2}+7^{2}}=7\\sqrt2\\ \\checkmark$$\n\n**Answer:** $\\ell=7\\sqrt2\\approx9.9$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите координатным методом, что медианы треугольника пересекаются в одной точке, и найдите её координаты.",
    "en": "Prove by coordinates that the medians of a triangle are concurrent, and find the coordinates of the meeting point."
   },
   "hint": {
    "ru": "Проверьте, что точка со средними координатами лежит на каждой медиане.",
    "en": "Check that the point with the average coordinates lies on every median."
   },
   "sol": {
    "ru": "Пусть вершины имеют координаты $A\\left(x_1,y_1\\right)$, $B\\left(x_2,y_2\\right)$, $C\\left(x_3,y_3\\right)$, и рассмотрим точку $$G\\left(\\frac{x_1+x_2+x_3}{3},\\ \\frac{y_1+y_2+y_3}{3}\\right).$$\n\n**Утверждение.** Точка $G$ лежит на медиане из вершины $A$ и делит её в отношении $2:1$.\n\n*Доказательство.* Середина стороны $BC$ имеет координаты $$M\\left(\\frac{x_2+x_3}{2},\\ \\frac{y_2+y_3}{2}\\right).$$ Точка, делящая отрезок $AM$ в отношении $AP:PM=2:1$, по формуле деления равна $$\\left(\\frac{1\\cdot x_1+2\\cdot\\frac{x_2+x_3}{2}}{3},\\ \\frac{1\\cdot y_1+2\\cdot\\frac{y_2+y_3}{2}}{3}\\right)=\\left(\\frac{x_1+x_2+x_3}{3},\\ \\frac{y_1+y_2+y_3}{3}\\right)=G .$$\n\n**Вывод.** Выражение для $G$ **симметрично** относительно вершин: оно не изменится, если поменять $A$, $B$, $C$ местами. Значит то же самое вычисление, проведённое для медианы из $B$ и для медианы из $C$, даст ту же точку $G$.\n\nСледовательно все три медианы проходят через $G$ и делятся ею в отношении $2:1$. $\\blacksquare$\n\n*Пример.* Для треугольника $(0,0)$, $(6,0)$, $(3,9)$ центроид равен $(3,3)$.",
    "en": "Let the vertices be $A\\left(x_1,y_1\\right)$, $B\\left(x_2,y_2\\right)$, $C\\left(x_3,y_3\\right)$, and consider the point $$G\\left(\\frac{x_1+x_2+x_3}{3},\\ \\frac{y_1+y_2+y_3}{3}\\right).$$\n\n**Claim.** $G$ lies on the median from $A$ and divides it in the ratio $2:1$.\n\n*Proof.* The midpoint of $BC$ is $$M\\left(\\frac{x_2+x_3}{2},\\ \\frac{y_2+y_3}{2}\\right),$$ and the point dividing $AM$ with $AP:PM=2:1$ is, by the division formula, $$\\left(\\frac{1\\cdot x_1+2\\cdot\\frac{x_2+x_3}{2}}{3},\\ \\frac{1\\cdot y_1+2\\cdot\\frac{y_2+y_3}{2}}{3}\\right)=\\left(\\frac{x_1+x_2+x_3}{3},\\ \\frac{y_1+y_2+y_3}{3}\\right)=G .$$\n\n**Conclusion.** The expression for $G$ is **symmetric** in the vertices: swapping $A$, $B$, $C$ changes nothing. So the same computation for the median from $B$ and from $C$ produces the same point $G$.\n\nHence all three medians pass through $G$ and are divided by it in the ratio $2:1$. $\\blacksquare$\n\n*Example.* For the triangle $(0,0)$, $(6,0)$, $(3,9)$ the centroid is $(3,3)$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Найдите уравнение серединного перпендикуляра к отрезку с концами $A(1,3)$ и $B(7,-1)$.",
    "en": "Find the equation of the perpendicular bisector of the segment with ends $A(1,3)$ and $B(7,-1)$."
   },
   "hint": {
    "ru": "Он проходит через середину и перпендикулярен $AB$.",
    "en": "It passes through the midpoint and is perpendicular to $AB$."
   },
   "sol": {
    "ru": "**Середина:** $$M\\left(\\frac{1+7}{2},\\ \\frac{3+(-1)}{2}\\right)=(4,\\ 1).$$\n\n**Направление $AB$:** угловой коэффициент $$k=\\frac{-1-3}{7-1}=\\frac{-4}{6}=-\\frac23 .$$\n\n**Перпендикуляр:** его коэффициент $k^{\\prime}$ удовлетворяет $kk^{\\prime}=-1$, откуда $k^{\\prime}=\\tfrac32$.\n\n**Уравнение:** $$y-1=\\frac32(x-4)\\quad\\Longrightarrow\\quad y=\\frac32x-5\\quad\\Longrightarrow\\quad 3x-2y-10=0 .$$\n\n**Проверка.** Точка $M(4,1)$ подходит: $12-2-10=0$ ✓ И расстояния от произвольной точки прямой, скажем $(6,4)$, до концов: $$\\sqrt{25+1}=\\sqrt{26},\\qquad \\sqrt{1+25}=\\sqrt{26}\\ \\checkmark$$",
    "en": "**Midpoint:** $$M\\left(\\frac{1+7}{2},\\ \\frac{3+(-1)}{2}\\right)=(4,\\ 1).$$\n\n**Direction of $AB$:** the slope is $$k=\\frac{-1-3}{7-1}=\\frac{-4}{6}=-\\frac23 .$$\n\n**The perpendicular:** its slope $k^{\\prime}$ satisfies $kk^{\\prime}=-1$, so $k^{\\prime}=\\tfrac32$.\n\n**Equation:** $$y-1=\\frac32(x-4)\\quad\\Longrightarrow\\quad y=\\frac32x-5\\quad\\Longrightarrow\\quad 3x-2y-10=0 .$$\n\n**Check.** The point $M(4,1)$ fits: $12-2-10=0$ ✓ And from another point of the line, say $(6,4)$, the distances to the ends are $$\\sqrt{25+1}=\\sqrt{26},\\qquad \\sqrt{1+25}=\\sqrt{26}\\ \\checkmark$$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите формулу длины медианы: если $a$, $b$, $c$ — стороны треугольника, а $m_a$ — медиана к стороне $a$, то $$m_a^{2}=\\frac{2b^{2}+2c^{2}-a^{2}}{4}.$$",
    "en": "Prove the median length formula: if $a$, $b$, $c$ are the sides of a triangle and $m_a$ is the median to the side $a$, then $$m_a^{2}=\\frac{2b^{2}+2c^{2}-a^{2}}{4}.$$"
   },
   "hint": {
    "ru": "Поставьте сторону $a$ на ось $Ox$ симметрично относительно начала координат.",
    "en": "Put the side $a$ on the $x$-axis, symmetric about the origin."
   },
   "sol": {
    "ru": "**Выбор координат.** Поместим середину стороны $BC$ в начало координат, а саму сторону — на ось $Ox$: $$B\\left(-\\frac a2,\\ 0\\right),\\qquad C\\left(\\frac a2,\\ 0\\right),\\qquad A\\left(p,\\ q\\right).$$ Тогда медиана из $A$ идёт в начало координат, и $$m_a^{2}=p^{2}+q^{2}.$$\n\n**Выражаем стороны.** $$c^{2}=AB^{2}=\\left(p+\\frac a2\\right)^{2}+q^{2},\\qquad b^{2}=AC^{2}=\\left(p-\\frac a2\\right)^{2}+q^{2}.$$\n\n**Складываем.** $$b^{2}+c^{2}=\\left(p-\\frac a2\\right)^{2}+\\left(p+\\frac a2\\right)^{2}+2q^{2}=2p^{2}+\\frac{a^{2}}{2}+2q^{2},$$ поскольку перекрёстные слагаемые $\\pm pa$ уничтожаются.\n\n**Выражаем медиану.** $$2\\left(p^{2}+q^{2}\\right)=b^{2}+c^{2}-\\frac{a^{2}}{2}\\quad\\Longrightarrow\\quad m_a^{2}=p^{2}+q^{2}=\\frac{b^{2}+c^{2}}{2}-\\frac{a^{2}}{4}=\\frac{2b^{2}+2c^{2}-a^{2}}{4}. \\qquad\\blacksquare$$\n\n*Проверка.* В равностороннем треугольнике со стороной $1$ формула даёт $m^{2}=\\tfrac{2+2-1}{4}=\\tfrac34$, то есть $m=\\tfrac{\\sqrt3}{2}$ — верная высота ✓",
    "en": "**Choice of frame.** Put the midpoint of $BC$ at the origin and the side itself on the $x$-axis: $$B\\left(-\\frac a2,\\ 0\\right),\\qquad C\\left(\\frac a2,\\ 0\\right),\\qquad A\\left(p,\\ q\\right).$$ The median from $A$ then goes to the origin, so $$m_a^{2}=p^{2}+q^{2}.$$\n\n**The sides.** $$c^{2}=AB^{2}=\\left(p+\\frac a2\\right)^{2}+q^{2},\\qquad b^{2}=AC^{2}=\\left(p-\\frac a2\\right)^{2}+q^{2}.$$\n\n**Add them.** $$b^{2}+c^{2}=\\left(p-\\frac a2\\right)^{2}+\\left(p+\\frac a2\\right)^{2}+2q^{2}=2p^{2}+\\frac{a^{2}}{2}+2q^{2},$$ the cross terms $\\pm pa$ cancelling.\n\n**Solve for the median.** $$2\\left(p^{2}+q^{2}\\right)=b^{2}+c^{2}-\\frac{a^{2}}{2}\\quad\\Longrightarrow\\quad m_a^{2}=p^{2}+q^{2}=\\frac{b^{2}+c^{2}}{2}-\\frac{a^{2}}{4}=\\frac{2b^{2}+2c^{2}-a^{2}}{4}. \\qquad\\blacksquare$$\n\n*Check.* For the equilateral triangle of side $1$ the formula gives $m^{2}=\\tfrac{2+2-1}{4}=\\tfrac34$, so $m=\\tfrac{\\sqrt3}{2}$ — the correct altitude ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Найдите геометрическое место точек $M$, для которых $MA^{2}+MB^{2}=20$, где $A(0,0)$ и $B(4,0)$.",
    "en": "Find the locus of points $M$ with $MA^{2}+MB^{2}=20$, where $A(0,0)$ and $B(4,0)$."
   },
   "hint": {
    "ru": "Запишите условие в координатах и выделите полный квадрат.",
    "en": "Write the condition in coordinates and complete the square."
   },
   "sol": {
    "ru": "Пусть $M(x,y)$. Тогда $$MA^{2}=x^{2}+y^{2},\\qquad MB^{2}=(x-4)^{2}+y^{2}.$$\n\nУсловие даёт $$x^{2}+y^{2}+(x-4)^{2}+y^{2}=20 ,$$ $$2x^{2}-8x+16+2y^{2}=20 ,$$ $$x^{2}-4x+y^{2}=2 .$$\n\nВыделяем полный квадрат: $$(x-2)^{2}+y^{2}=6 .$$\n\n**Ответ:** это окружность с центром в **середине** отрезка $AB$, то есть в точке $(2,0)$, и радиусом $\\sqrt6$.\n\n*Общий факт.* Для любых точек $A$, $B$ множество точек с $MA^{2}+MB^{2}=k$ — это окружность с центром в середине $AB$ (при достаточно большом $k$), потому что $$MA^{2}+MB^{2}=2\\,MO^{2}+\\frac{AB^{2}}{2},$$ где $O$ — середина $AB$. Здесь: $2MO^{2}+8=20$ даёт $MO^{2}=6$ ✓",
    "en": "Let $M(x,y)$. Then $$MA^{2}=x^{2}+y^{2},\\qquad MB^{2}=(x-4)^{2}+y^{2}.$$\n\nThe condition reads $$x^{2}+y^{2}+(x-4)^{2}+y^{2}=20 ,$$ $$2x^{2}-8x+16+2y^{2}=20 ,$$ $$x^{2}-4x+y^{2}=2 .$$\n\nCompleting the square, $$(x-2)^{2}+y^{2}=6 .$$\n\n**Answer:** a circle centred at the **midpoint** of $AB$, that is $(2,0)$, of radius $\\sqrt6$.\n\n*General fact.* For any $A$, $B$ the set of points with $MA^{2}+MB^{2}=k$ is a circle centred at the midpoint of $AB$ (for $k$ large enough), because $$MA^{2}+MB^{2}=2\\,MO^{2}+\\frac{AB^{2}}{2},$$ with $O$ the midpoint. Here $2MO^{2}+8=20$ gives $MO^{2}=6$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что четырёхугольник с вершинами $A(1,1)$, $B(5,2)$, $C(6,6)$, $D(2,5)$ — параллелограмм, и найдите его площадь.",
    "en": "Prove that the quadrilateral with vertices $A(1,1)$, $B(5,2)$, $C(6,6)$, $D(2,5)$ is a parallelogram, and find its area."
   },
   "hint": {
    "ru": "Сравните векторы $\\vec{AB}$ и $\\vec{DC}$; площадь — через косое произведение.",
    "en": "Compare the vectors $\\vec{AB}$ and $\\vec{DC}$; the area comes from the cross product."
   },
   "sol": {
    "ru": "**Параллелограмм.** $$\\vec{AB}=(5-1,\\ 2-1)=(4,1),\\qquad \\vec{DC}=(6-2,\\ 6-5)=(4,1).$$ Векторы равны, значит стороны $AB$ и $DC$ параллельны и равны — этого достаточно для параллелограмма.\n\n(Для проверки: $\\vec{AD}=(1,4)$ и $\\vec{BC}=(1,4)$ — тоже совпадают ✓)\n\n**Площадь.** Площадь параллелограмма равна модулю косого произведения сторон, выходящих из одной вершины: $$S=\\left|\\,4\\cdot4-1\\cdot1\\,\\right|=16-1=15 .$$\n\n*Проверка через треугольники:* диагональ $AC$ делит параллелограмм на два равных треугольника; площадь треугольника $ABC$ равна $$\\frac12\\left|4\\cdot5-5\\cdot1\\right|=\\frac{15}{2},$$ где $\\vec{AB}=(4,1)$ и $\\vec{AC}=(5,5)$. Удвоив, получаем $15$ ✓\n\n**Ответ:** $S=15$.",
    "en": "**A parallelogram.** $$\\vec{AB}=(5-1,\\ 2-1)=(4,1),\\qquad \\vec{DC}=(6-2,\\ 6-5)=(4,1).$$ The vectors are equal, so the sides $AB$ and $DC$ are parallel and equal — enough for a parallelogram.\n\n(As a check, $\\vec{AD}=(1,4)$ and $\\vec{BC}=(1,4)$ agree too ✓)\n\n**Area.** The area of a parallelogram is the modulus of the cross product of two sides at one vertex: $$S=\\left|\\,4\\cdot4-1\\cdot1\\,\\right|=16-1=15 .$$\n\n*Check via triangles:* the diagonal $AC$ splits it into two congruent triangles, and the area of $ABC$ is $$\\frac12\\left|4\\cdot5-5\\cdot1\\right|=\\frac{15}{2},$$ using $\\vec{AB}=(4,1)$ and $\\vec{AC}=(5,5)$. Doubling gives $15$ ✓\n\n**Answer:** $S=15$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите координатным методом, что высоты треугольника пересекаются в одной точке.",
    "en": "Prove by coordinates that the altitudes of a triangle are concurrent."
   },
   "hint": {
    "ru": "Поставьте сторону $BC$ на ось $Ox$, а вершину $A$ — над началом координат.",
    "en": "Put the side $BC$ on the $x$-axis and the vertex $A$ above the origin."
   },
   "sol": {
    "ru": "**Выбор координат.** Поместим сторону $BC$ на ось $Ox$, а основание высоты из вершины $A$ — в начало координат: $$B(b,0),\\qquad C(c,0),\\qquad A(0,a),\\qquad a\\ne0 .$$ Тогда высота из $A$ — это сама ось $Oy$, то есть прямая $x=0$.\n\n**Высота из $B$.** Она перпендикулярна стороне $AC$. Направляющий вектор $AC$ равен $(c,-a)$. Точка $(x,y)$ лежит на этой высоте тогда и только тогда, когда вектор от $B$ до неё перпендикулярен $AC$: $$\\left(x-b,\\ y\\right)\\cdot(c,-a)=0\\quad\\Longleftrightarrow\\quad c(x-b)-ay=0 .$$\n\n**Точка пересечения с высотой из $A$.** Подставим $x=0$: $$-cb-ay=0\\quad\\Longrightarrow\\quad y=-\\frac{bc}{a}.$$ Итак, высоты из $A$ и из $B$ пересекаются в точке $$H\\left(0,\\ -\\frac{bc}{a}\\right).$$\n\n**Проверяем третью высоту.** Высота из $C$ перпендикулярна $AB$, направляющий вектор которого $(b,-a)$. Её уравнение: $$b(x-c)-ay=0 .$$ Подставим координаты точки $H$: $$b(0-c)-a\\left(-\\frac{bc}{a}\\right)=-bc+bc=0\\ \\checkmark$$\n\nЗначит $H$ лежит и на третьей высоте: все три проходят через одну точку. $\\blacksquare$\n\n*Замечание.* Выражение $-\\tfrac{bc}{a}$ показывает, где именно оказывается ортоцентр. Если начало координат лежит **внутри** отрезка $BC$, то числа $b$ и $c$ разных знаков, произведение $bc$ отрицательно, и точка $H$ оказывается по ту же сторону от прямой $BC$, что и вершина $A$. Если же основание высоты вышло за отрезок (угол $B$ или $C$ тупой), знаки совпадают и $H$ уходит на другую сторону.",
    "en": "**Choice of frame.** Put the side $BC$ on the $x$-axis and the foot of the altitude from $A$ at the origin: $$B(b,0),\\qquad C(c,0),\\qquad A(0,a),\\qquad a\\ne0 .$$ The altitude from $A$ is then the $y$-axis itself, the line $x=0$.\n\n**The altitude from $B$.** It is perpendicular to $AC$, whose direction vector is $(c,-a)$. A point $(x,y)$ lies on this altitude exactly when the vector from $B$ to it is perpendicular to $AC$: $$\\left(x-b,\\ y\\right)\\cdot(c,-a)=0\\quad\\Longleftrightarrow\\quad c(x-b)-ay=0 .$$\n\n**Intersection with the altitude from $A$.** Substituting $x=0$: $$-cb-ay=0\\quad\\Longrightarrow\\quad y=-\\frac{bc}{a},$$ so the altitudes from $A$ and $B$ meet at $$H\\left(0,\\ -\\frac{bc}{a}\\right).$$\n\n**Check the third altitude.** The altitude from $C$ is perpendicular to $AB$, whose direction is $(b,-a)$, so its equation is $$b(x-c)-ay=0 .$$ Substituting $H$: $$b(0-c)-a\\left(-\\frac{bc}{a}\\right)=-bc+bc=0\\ \\checkmark$$\n\nSo $H$ lies on the third altitude as well: all three pass through one point. $\\blacksquare$\n\n*Remark.* The expression $-\\tfrac{bc}{a}$ shows where the orthocentre lands: when $b$ and $c$ have the same sign — that is, when the origin falls outside the segment $BC$ — the point $H$ goes to the other side of the line $BC$."
   }
  },
  {
   "src": "Окружность Аполлония / The Apollonius circle",
   "lvl": 3,
   "q": {
    "ru": "Даны две точки $A$ и $B$ и число $k>0$, $k\\ne1$. Найдите геометрическое место точек $M$, для которых $\\dfrac{MA}{MB}=k$.",
    "en": "Two points $A$ and $B$ are given, and a number $k>0$ with $k\\ne1$. Find the locus of points $M$ with $\\dfrac{MA}{MB}=k$."
   },
   "hint": {
    "ru": "Возведите условие в квадрат, запишите в координатах и выделите полный квадрат.",
    "en": "Square the condition, write it in coordinates and complete the square."
   },
   "sol": {
    "ru": "**Выбор координат.** Поставим $A$ в начало координат, а $B$ — на ось $Ox$: $$A(0,0),\\qquad B(d,0),\\qquad d>0 .$$ Пусть $M(x,y)$.\n\n**Условие в координатах.** Возведём равенство $MA=k\\,MB$ в квадрат: $$x^{2}+y^{2}=k^{2}\\left[(x-d)^{2}+y^{2}\\right].$$ Раскроем и соберём: $$x^{2}+y^{2}=k^{2}x^{2}-2k^{2}dx+k^{2}d^{2}+k^{2}y^{2},$$ $$\\left(1-k^{2}\\right)\\left(x^{2}+y^{2}\\right)+2k^{2}dx-k^{2}d^{2}=0 .$$\n\n**Делим на $1-k^{2}\\ne0$.** $$x^{2}+y^{2}+\\frac{2k^{2}d}{1-k^{2}}\\,x-\\frac{k^{2}d^{2}}{1-k^{2}}=0 .$$\n\n**Выделяем полный квадрат.** Обозначим $$x_0=-\\frac{k^{2}d}{1-k^{2}}=\\frac{k^{2}d}{k^{2}-1}.$$ Тогда $$\\left(x-x_0\\right)^{2}+y^{2}=x_0^{2}+\\frac{k^{2}d^{2}}{1-k^{2}}=\\frac{k^{4}d^{2}}{\\left(k^{2}-1\\right)^{2}}-\\frac{k^{2}d^{2}}{k^{2}-1}=\\frac{k^{2}d^{2}\\left[k^{2}-\\left(k^{2}-1\\right)\\right]}{\\left(k^{2}-1\\right)^{2}}=\\frac{k^{2}d^{2}}{\\left(k^{2}-1\\right)^{2}}.$$\n\n**Ответ.** Это окружность с центром $\\left(\\dfrac{k^{2}d}{k^{2}-1},\\ 0\\right)$ и радиусом $$R=\\frac{k\\,d}{\\left|k^{2}-1\\right|}.$$ Её называют **окружностью Аполлония** для точек $A$, $B$ и отношения $k$.\n\n*Проверка при $k=2$, $d=3$:* центр $(4,0)$, радиус $2$. Точка $(2,0)$ на окружности даёт $MA=2$, $MB=1$, отношение $2$ ✓ Точка $(6,0)$ даёт $MA=6$, $MB=3$, отношение $2$ ✓\n\n*Замечание.* При $k=1$ уравнение вырождается: коэффициент при $x^{2}+y^{2}$ обращается в ноль, и остаётся уравнение прямой — серединного перпендикуляра к $AB$. Именно поэтому случай $k=1$ исключён из условия.",
    "en": "**Choice of frame.** Put $A$ at the origin and $B$ on the $x$-axis: $$A(0,0),\\qquad B(d,0),\\qquad d>0 ,$$ and let $M(x,y)$.\n\n**The condition in coordinates.** Squaring $MA=k\\,MB$: $$x^{2}+y^{2}=k^{2}\\left[(x-d)^{2}+y^{2}\\right].$$ Expanding and collecting, $$x^{2}+y^{2}=k^{2}x^{2}-2k^{2}dx+k^{2}d^{2}+k^{2}y^{2},$$ $$\\left(1-k^{2}\\right)\\left(x^{2}+y^{2}\\right)+2k^{2}dx-k^{2}d^{2}=0 .$$\n\n**Divide by $1-k^{2}\\ne0$.** $$x^{2}+y^{2}+\\frac{2k^{2}d}{1-k^{2}}\\,x-\\frac{k^{2}d^{2}}{1-k^{2}}=0 .$$\n\n**Complete the square.** Write $$x_0=-\\frac{k^{2}d}{1-k^{2}}=\\frac{k^{2}d}{k^{2}-1}.$$ Then $$\\left(x-x_0\\right)^{2}+y^{2}=x_0^{2}+\\frac{k^{2}d^{2}}{1-k^{2}}=\\frac{k^{4}d^{2}}{\\left(k^{2}-1\\right)^{2}}-\\frac{k^{2}d^{2}}{k^{2}-1}=\\frac{k^{2}d^{2}\\left[k^{2}-\\left(k^{2}-1\\right)\\right]}{\\left(k^{2}-1\\right)^{2}}=\\frac{k^{2}d^{2}}{\\left(k^{2}-1\\right)^{2}}.$$\n\n**Answer.** A circle with centre $\\left(\\dfrac{k^{2}d}{k^{2}-1},\\ 0\\right)$ and radius $$R=\\frac{k\\,d}{\\left|k^{2}-1\\right|},$$ known as the **Apollonius circle** of $A$, $B$ and the ratio $k$.\n\n*Check with $k=2$, $d=3$:* centre $(4,0)$, radius $2$. The point $(2,0)$ gives $MA=2$, $MB=1$, ratio $2$ ✓ The point $(6,0)$ gives $MA=6$, $MB=3$, ratio $2$ ✓\n\n*Remark.* At $k=1$ the equation degenerates: the coefficient of $x^{2}+y^{2}$ vanishes and a line remains — the perpendicular bisector of $AB$. That is why $k=1$ was excluded."
   }
  },
  {
   "src": "Теорема Стюарта / Stewart, classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите теорему Стюарта: если точка $D$ лежит на стороне $BC$ треугольника $ABC$, причём $BD=m$ и $DC=n$, то $$AD^{2}\\cdot a=b^{2}m+c^{2}n-a\\,mn,$$ где $a=BC=m+n$, $b=AC$, $c=AB$.",
    "en": "Prove Stewart’s theorem: if $D$ lies on the side $BC$ of a triangle $ABC$ with $BD=m$ and $DC=n$, then $$AD^{2}\\cdot a=b^{2}m+c^{2}n-a\\,mn,$$ where $a=BC=m+n$, $b=AC$, $c=AB$."
   },
   "hint": {
    "ru": "Поставьте $B$ в начало координат, а $BC$ — на ось $Ox$.",
    "en": "Put $B$ at the origin and $BC$ on the $x$-axis."
   },
   "sol": {
    "ru": "**Выбор координат.** Поместим $$B(0,0),\\qquad C(a,0),\\qquad D(m,0),\\qquad A(p,q).$$ (Точка $D$ лежит на отрезке $BC$ на расстоянии $m$ от $B$.)\n\n**Три расстояния.** $$c^{2}=AB^{2}=p^{2}+q^{2},$$ $$b^{2}=AC^{2}=(p-a)^{2}+q^{2}=p^{2}+q^{2}-2ap+a^{2}=c^{2}-2ap+a^{2},$$ $$AD^{2}=(p-m)^{2}+q^{2}=c^{2}-2mp+m^{2}.$$\n\n**Исключаем $p$.** Из второго равенства $$2ap=c^{2}+a^{2}-b^{2}\\quad\\Longrightarrow\\quad p=\\frac{c^{2}+a^{2}-b^{2}}{2a}.$$ Подставим в третье: $$AD^{2}=c^{2}-\\frac{m\\left(c^{2}+a^{2}-b^{2}\\right)}{a}+m^{2}.$$\n\n**Умножаем на $a$.** $$AD^{2}\\,a=c^{2}a-m c^{2}-ma^{2}+mb^{2}+m^{2}a .$$ Сгруппируем: $$=c^{2}(a-m)+b^{2}m-ma\\left(a-m\\right).$$ Но $a-m=n$, поэтому $$AD^{2}\\,a=c^{2}n+b^{2}m-a\\,mn . \\qquad\\blacksquare$$\n\n**Следствие: формула медианы.** При $m=n=\\tfrac a2$ получаем $$AD^{2}\\,a=\\frac a2\\left(b^{2}+c^{2}\\right)-a\\cdot\\frac{a^{2}}{4}\\quad\\Longrightarrow\\quad AD^{2}=\\frac{b^{2}+c^{2}}{2}-\\frac{a^{2}}{4}=\\frac{2b^{2}+2c^{2}-a^{2}}{4},$$ то есть в точности формула длины медианы.\n\n**Следствие: формула биссектрисы.** Если $AD$ — биссектриса, то $m:n=c:b$, откуда $m=\\tfrac{ac}{b+c}$ и $n=\\tfrac{ab}{b+c}$. Подставляя, после сокращений получается $$AD^{2}=bc-mn=bc\\left(1-\\frac{a^{2}}{(b+c)^{2}}\\right).$$",
    "en": "**Choice of frame.** Put $$B(0,0),\\qquad C(a,0),\\qquad D(m,0),\\qquad A(p,q),$$ so $D$ sits on $BC$ at distance $m$ from $B$.\n\n**Three distances.** $$c^{2}=AB^{2}=p^{2}+q^{2},$$ $$b^{2}=AC^{2}=(p-a)^{2}+q^{2}=p^{2}+q^{2}-2ap+a^{2}=c^{2}-2ap+a^{2},$$ $$AD^{2}=(p-m)^{2}+q^{2}=c^{2}-2mp+m^{2}.$$\n\n**Eliminate $p$.** The second gives $$2ap=c^{2}+a^{2}-b^{2}\\quad\\Longrightarrow\\quad p=\\frac{c^{2}+a^{2}-b^{2}}{2a},$$ and substituting into the third, $$AD^{2}=c^{2}-\\frac{m\\left(c^{2}+a^{2}-b^{2}\\right)}{a}+m^{2}.$$\n\n**Multiply by $a$.** $$AD^{2}\\,a=c^{2}a-m c^{2}-ma^{2}+mb^{2}+m^{2}a=c^{2}(a-m)+b^{2}m-ma\\left(a-m\\right).$$ Since $a-m=n$, $$AD^{2}\\,a=c^{2}n+b^{2}m-a\\,mn . \\qquad\\blacksquare$$\n\n**Corollary: the median formula.** With $m=n=\\tfrac a2$, $$AD^{2}\\,a=\\frac a2\\left(b^{2}+c^{2}\\right)-a\\cdot\\frac{a^{2}}{4}\\quad\\Longrightarrow\\quad AD^{2}=\\frac{b^{2}+c^{2}}{2}-\\frac{a^{2}}{4}=\\frac{2b^{2}+2c^{2}-a^{2}}{4},$$ exactly the median length formula.\n\n**Corollary: the bisector formula.** If $AD$ bisects the angle, then $m:n=c:b$, so $m=\\tfrac{ac}{b+c}$ and $n=\\tfrac{ab}{b+c}$; substituting and simplifying gives $$AD^{2}=bc-mn=bc\\left(1-\\frac{a^{2}}{(b+c)^{2}}\\right).$$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Треугольник $ABC$ равносторонний и вписан в окружность радиуса $R$ с центром $O$. Докажите, что для любой точки $M$ плоскости $$MA^{2}+MB^{2}+MC^{2}=3\\,MO^{2}+3R^{2},$$ и выведите отсюда, что для точек $M$ на окружности эта сумма постоянна и равна $6R^{2}$.",
    "en": "An equilateral triangle $ABC$ is inscribed in a circle of radius $R$ centred at $O$. Prove that for every point $M$ of the plane $$MA^{2}+MB^{2}+MC^{2}=3\\,MO^{2}+3R^{2},$$ and deduce that for $M$ on the circle the sum is constant and equals $6R^{2}$."
   },
   "hint": {
    "ru": "Поставьте $O$ в начало координат и воспользуйтесь тем, что $O$ — центроид.",
    "en": "Put $O$ at the origin and use that $O$ is the centroid."
   },
   "sol": {
    "ru": "**Выбор координат.** Поместим центр $O$ в начало координат. Пусть $$A\\left(x_1,y_1\\right),\\quad B\\left(x_2,y_2\\right),\\quad C\\left(x_3,y_3\\right),\\quad M(x,y).$$\n\n**Два свойства равностороннего треугольника.**\n\n*(i)* Все вершины лежат на окружности радиуса $R$: $$x_i^{2}+y_i^{2}=R^{2}\\quad(i=1,2,3).$$\n\n*(ii)* Для равностороннего треугольника центр описанной окружности совпадает с центроидом, а координаты центроида — среднее координат вершин. Значит $$x_1+x_2+x_3=0,\\qquad y_1+y_2+y_3=0 .$$\n\n**Счёт.** $$\\sum_{i=1}^{3}MA_i^{2}=\\sum_{i=1}^{3}\\left[\\left(x-x_i\\right)^{2}+\\left(y-y_i\\right)^{2}\\right]$$ $$=3\\left(x^{2}+y^{2}\\right)-2x\\sum x_i-2y\\sum y_i+\\sum\\left(x_i^{2}+y_i^{2}\\right).$$\n\nПо свойству *(ii)* обе средние суммы равны нулю, а по свойству *(i)* последняя сумма равна $3R^{2}$. Значит $$MA^{2}+MB^{2}+MC^{2}=3\\left(x^{2}+y^{2}\\right)+3R^{2}=3\\,MO^{2}+3R^{2}. \\qquad\\blacksquare$$\n\n**Следствие.** Если точка $M$ лежит на описанной окружности, то $MO=R$, поэтому $$MA^{2}+MB^{2}+MC^{2}=3R^{2}+3R^{2}=6R^{2}$$ — величина, не зависящая от положения точки $M$ на окружности.\n\n*Проверка.* Возьмём $M=A$. Тогда $MA=0$, а $MB=MC=a$ — стороне треугольника. Для равностороннего треугольника, вписанного в окружность радиуса $R$, сторона равна $a=R\\sqrt3$, поэтому сумма равна $0+3R^{2}+3R^{2}=6R^{2}$ ✓\n\n*Замечание.* Первое равенство верно для любого треугольника, если заменить $3R^{2}$ на $OA^{2}+OB^{2}+OC^{2}$ и брать $O$ в центроиде; это тождество Лейбница.",
    "en": "**Choice of frame.** Put the centre $O$ at the origin, and let $$A\\left(x_1,y_1\\right),\\quad B\\left(x_2,y_2\\right),\\quad C\\left(x_3,y_3\\right),\\quad M(x,y).$$\n\n**Two properties of an equilateral triangle.**\n\n*(i)* All vertices lie on the circle of radius $R$: $$x_i^{2}+y_i^{2}=R^{2}\\quad(i=1,2,3).$$\n\n*(ii)* For an equilateral triangle the circumcentre coincides with the centroid, and the centroid is the average of the vertices. Hence $$x_1+x_2+x_3=0,\\qquad y_1+y_2+y_3=0 .$$\n\n**The computation.** $$\\sum_{i=1}^{3}MA_i^{2}=\\sum_{i=1}^{3}\\left[\\left(x-x_i\\right)^{2}+\\left(y-y_i\\right)^{2}\\right]$$ $$=3\\left(x^{2}+y^{2}\\right)-2x\\sum x_i-2y\\sum y_i+\\sum\\left(x_i^{2}+y_i^{2}\\right).$$\n\nBy *(ii)* both middle sums vanish, and by *(i)* the last sum is $3R^{2}$. So $$MA^{2}+MB^{2}+MC^{2}=3\\left(x^{2}+y^{2}\\right)+3R^{2}=3\\,MO^{2}+3R^{2}. \\qquad\\blacksquare$$\n\n**Corollary.** If $M$ lies on the circumcircle then $MO=R$, so $$MA^{2}+MB^{2}+MC^{2}=3R^{2}+3R^{2}=6R^{2},$$ independent of where $M$ sits on the circle.\n\n*Check.* Take $M=A$. Then $MA=0$ and $MB=MC=a$, the side. For an equilateral triangle in a circle of radius $R$ the side is $a=R\\sqrt3$, so the sum is $0+3R^{2}+3R^{2}=6R^{2}$ ✓\n\n*Remark.* The first identity holds for any triangle if $3R^{2}$ is replaced by $OA^{2}+OB^{2}+OC^{2}$ and $O$ is taken at the centroid; this is Leibniz’s identity."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите формулу расстояния от точки до прямой: расстояние от $P\\left(x_0,y_0\\right)$ до прямой $ax+by+c=0$ равно $\\dfrac{\\left|ax_0+by_0+c\\right|}{\\sqrt{a^{2}+b^{2}}}$.",
    "en": "Prove the point-to-line distance formula: the distance from $P\\left(x_0,y_0\\right)$ to the line $ax+by+c=0$ equals $\\dfrac{\\left|ax_0+by_0+c\\right|}{\\sqrt{a^{2}+b^{2}}}$."
   },
   "hint": {
    "ru": "Вектор $(a,b)$ перпендикулярен прямой — идите из точки вдоль него.",
    "en": "The vector $(a,b)$ is perpendicular to the line — travel from the point along it."
   },
   "sol": {
    "ru": "**Шаг 1: вектор $(a,b)$ перпендикулярен прямой.** Пусть $M_1\\left(x_1,y_1\\right)$ и $M_2\\left(x_2,y_2\\right)$ — две точки прямой. Вычитая их уравнения, $$a\\left(x_2-x_1\\right)+b\\left(y_2-y_1\\right)=0 ,$$ то есть скалярное произведение вектора $(a,b)$ на направляющий вектор прямой равно нулю. Значит $(a,b)$ — нормаль к прямой.\n\n**Шаг 2: идём из точки по нормали.** Основание перпендикуляра $H$ имеет вид $$H=\\left(x_0+ta,\\ y_0+tb\\right)$$ при некотором вещественном $t$ — мы просто сдвигаемся из $P$ вдоль нормали.\n\n**Шаг 3: находим $t$.** Точка $H$ лежит на прямой, поэтому $$a\\left(x_0+ta\\right)+b\\left(y_0+tb\\right)+c=0 ,$$ $$\\left(ax_0+by_0+c\\right)+t\\left(a^{2}+b^{2}\\right)=0 ,$$ откуда $$t=-\\frac{ax_0+by_0+c}{a^{2}+b^{2}}.$$\n\n**Шаг 4: считаем длину.** Вектор от $P$ до $H$ равен $t\\,(a,b)$, поэтому $$PH=|t|\\cdot\\sqrt{a^{2}+b^{2}}=\\frac{\\left|ax_0+by_0+c\\right|}{a^{2}+b^{2}}\\cdot\\sqrt{a^{2}+b^{2}}=\\frac{\\left|ax_0+by_0+c\\right|}{\\sqrt{a^{2}+b^{2}}}. \\qquad\\blacksquare$$\n\n**Почему $PH$ и есть расстояние.** Для любой другой точки $Q$ прямой треугольник $PHQ$ прямоугольный с прямым углом при $H$, поэтому $PQ$ — гипотенуза и $PQ>PH$. Значит перпендикуляр действительно самый короткий.\n\n*Проверка.* Для прямой $x=0$ (то есть $a=1$, $b=0$, $c=0$) формула даёт $d=\\left|x_0\\right|$ — верно.",
    "en": "**Step 1: the vector $(a,b)$ is perpendicular to the line.** Let $M_1\\left(x_1,y_1\\right)$ and $M_2\\left(x_2,y_2\\right)$ be two points of the line. Subtracting their equations, $$a\\left(x_2-x_1\\right)+b\\left(y_2-y_1\\right)=0 ,$$ that is, the dot product of $(a,b)$ with the direction vector of the line vanishes. So $(a,b)$ is a normal.\n\n**Step 2: travel from the point along the normal.** The foot of the perpendicular has the form $$H=\\left(x_0+ta,\\ y_0+tb\\right)$$ for some real $t$ — we simply move from $P$ along the normal.\n\n**Step 3: find $t$.** The point $H$ lies on the line, so $$a\\left(x_0+ta\\right)+b\\left(y_0+tb\\right)+c=0 ,$$ $$\\left(ax_0+by_0+c\\right)+t\\left(a^{2}+b^{2}\\right)=0 ,$$ hence $$t=-\\frac{ax_0+by_0+c}{a^{2}+b^{2}}.$$\n\n**Step 4: the length.** The vector from $P$ to $H$ is $t\\,(a,b)$, so $$PH=|t|\\cdot\\sqrt{a^{2}+b^{2}}=\\frac{\\left|ax_0+by_0+c\\right|}{a^{2}+b^{2}}\\cdot\\sqrt{a^{2}+b^{2}}=\\frac{\\left|ax_0+by_0+c\\right|}{\\sqrt{a^{2}+b^{2}}}. \\qquad\\blacksquare$$\n\n**Why $PH$ is the distance.** For any other point $Q$ of the line the triangle $PHQ$ has a right angle at $H$, so $PQ$ is its hypotenuse and $PQ>PH$. The perpendicular really is shortest.\n\n*Check.* For the line $x=0$ (that is $a=1$, $b=0$, $c=0$) the formula gives $d=\\left|x_0\\right|$ — correct."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Даны вершины треугольника $A(-1,2)$, $B(5,4)$, $C(3,-2)$. Найдите координаты точки пересечения медиан, длину медианы из вершины $A$ и уравнение прямой $BC$.",
    "en": "A triangle has vertices $A(-1,2)$, $B(5,4)$, $C(3,-2)$. Find the centroid, the length of the median from $A$, and the equation of the line $BC$."
   },
   "hint": {
    "ru": "Центроид — среднее координат вершин.",
    "en": "The centroid is the average of the vertices."
   },
   "sol": {
    "ru": "**Центроид.** $$G\\left(\\frac{-1+5+3}{3},\\ \\frac{2+4-2}{3}\\right)=\\left(\\frac73,\\ \\frac43\\right).$$\n\n**Медиана из $A$.** Середина стороны $BC$: $$M\\left(\\frac{5+3}{2},\\ \\frac{4+(-2)}{2}\\right)=(4,\\ 1).$$ Тогда $$AM=\\sqrt{\\left(4-(-1)\\right)^{2}+\\left(1-2\\right)^{2}}=\\sqrt{25+1}=\\sqrt{26}\\approx5{,}10 .$$\n\n**Прямая $BC$.** Угловой коэффициент: $$k=\\frac{-2-4}{3-5}=\\frac{-6}{-2}=3 .$$ Уравнение через точку $B(5,4)$: $$y-4=3(x-5)\\quad\\Longrightarrow\\quad y=3x-11\\quad\\Longrightarrow\\quad 3x-y-11=0 .$$\n\n**Проверка.** Точка $C(3,-2)$: $9+2-11=0$ ✓ Точка $G$ должна лежать на медиане $AM$: из $A(-1,2)$ в $M(4,1)$ ровно на $\\tfrac23$ пути получаем $$\\left(-1+\\tfrac23\\cdot5,\\ 2-\\tfrac23\\cdot1\\right)=\\left(\\tfrac73,\\ \\tfrac43\\right)\\ \\checkmark$$",
    "en": "**Centroid.** $$G\\left(\\frac{-1+5+3}{3},\\ \\frac{2+4-2}{3}\\right)=\\left(\\frac73,\\ \\frac43\\right).$$\n\n**Median from $A$.** The midpoint of $BC$ is $$M\\left(\\frac{5+3}{2},\\ \\frac{4+(-2)}{2}\\right)=(4,\\ 1),$$ so $$AM=\\sqrt{\\left(4-(-1)\\right)^{2}+\\left(1-2\\right)^{2}}=\\sqrt{25+1}=\\sqrt{26}\\approx5.10 .$$\n\n**The line $BC$.** Its slope is $$k=\\frac{-2-4}{3-5}=\\frac{-6}{-2}=3 ,$$ and through $B(5,4)$: $$y-4=3(x-5)\\quad\\Longrightarrow\\quad y=3x-11\\quad\\Longrightarrow\\quad 3x-y-11=0 .$$\n\n**Check.** The point $C(3,-2)$: $9+2-11=0$ ✓ And $G$ should lie on the median $AM$: going from $A(-1,2)$ towards $M(4,1)$ exactly $\\tfrac23$ of the way gives $$\\left(-1+\\tfrac23\\cdot5,\\ 2-\\tfrac23\\cdot1\\right)=\\left(\\tfrac73,\\ \\tfrac43\\right)\\ \\checkmark$$"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Найдите расстояние между точками $A(1,2)$ и $B(4,6)$.",
    "en": "Find the distance between $A(1,2)$ and $B(4,6)$."
   },
   "hint": {
    "ru": "$AB=\\sqrt{\\left(x_2-x_1\\right)^{2}+\\left(y_2-y_1\\right)^{2}}$.",
    "en": "$AB=\\sqrt{\\left(x_2-x_1\\right)^{2}+\\left(y_2-y_1\\right)^{2}}$."
   },
   "sol": {
    "ru": "$$AB=\\sqrt{(4-1)^{2}+(6-2)^{2}}=\\sqrt{9+16}=\\sqrt{25}=5 .$$\n\n**Ответ:** $5$.\n\n**Откуда формула.** Отрезок $AB$ — гипотенуза прямоугольного треугольника с катетами $\\left|x_2-x_1\\right|$ и $\\left|y_2-y_1\\right|$, параллельными осям.",
    "en": "$$AB=\\sqrt{(4-1)^{2}+(6-2)^{2}}=\\sqrt{9+16}=\\sqrt{25}=5 .$$\n\n**Answer:** $5$.\n\n**Where the formula comes from.** The segment $AB$ is the hypotenuse of a right triangle with legs $\\left|x_2-x_1\\right|$ and $\\left|y_2-y_1\\right|$ parallel to the axes."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Найдите середину отрезка с концами $(-3,7)$ и $(5,1)$.",
    "en": "Find the midpoint of the segment with endpoints $(-3,7)$ and $(5,1)$."
   },
   "hint": {
    "ru": "Координаты середины — средние арифметические.",
    "en": "The midpoint coordinates are the averages."
   },
   "sol": {
    "ru": "$$x_M=\\frac{-3+5}{2}=1,\\qquad y_M=\\frac{7+1}{2}=4 .$$\n\n**Ответ:** $(1,4)$.\n\n**Проверка:** расстояния от $(1,4)$ до обоих концов равны $\\sqrt{16+9}=5$ ✓",
    "en": "$$x_M=\\frac{-3+5}{2}=1,\\qquad y_M=\\frac{7+1}{2}=4 .$$\n\n**Answer:** $(1,4)$.\n\n**Check:** the distances from $(1,4)$ to both endpoints equal $\\sqrt{16+9}=5$ ✓"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Найдите угловой коэффициент прямой, проходящей через точки $(2,3)$ и $(6,11)$.",
    "en": "Find the slope of the line through $(2,3)$ and $(6,11)$."
   },
   "hint": {
    "ru": "$k=\\dfrac{\\Delta y}{\\Delta x}$.",
    "en": "$k=\\dfrac{\\Delta y}{\\Delta x}$."
   },
   "sol": {
    "ru": "$$k=\\frac{11-3}{6-2}=\\frac84=2 .$$\n\n**Ответ:** $k=2$.\n\n**Уравнение прямой:** $y-3=2(x-2)$, то есть $y=2x-1$. Проверка: при $x=6$ получаем $y=11$ ✓",
    "en": "$$k=\\frac{11-3}{6-2}=\\frac84=2 .$$\n\n**Answer:** $k=2$.\n\n**The line:** $y-3=2(x-2)$, i.e. $y=2x-1$. Check: at $x=6$ we get $y=11$ ✓"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Напишите уравнение прямой, проходящей через точку $(0,5)$ с угловым коэффициентом $-2$.",
    "en": "Write the equation of the line through $(0,5)$ with slope $-2$."
   },
   "hint": {
    "ru": "$y=kx+b$, где $b$ — ордината точки пересечения с осью $Oy$.",
    "en": "$y=kx+b$, where $b$ is the $y$-intercept."
   },
   "sol": {
    "ru": "Точка $(0,5)$ лежит на оси $Oy$, значит $b=5$. С учётом $k=-2$ получаем $$y=-2x+5 .$$\n\n**Ответ:** $y=-2x+5$.\n\n**Проверка:** при $x=1$ имеем $y=3$; шаг вправо на единицу опускает прямую на две единицы, как и должно быть при $k=-2$ ✓",
    "en": "The point $(0,5)$ lies on the $y$-axis, so $b=5$. With $k=-2$, $$y=-2x+5 .$$\n\n**Answer:** $y=-2x+5$.\n\n**Check:** at $x=1$ we get $y=3$; a step of one to the right drops the line by two, as $k=-2$ requires ✓"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Лежит ли точка $(3,4)$ на окружности $x^{2}+y^{2}=25$?",
    "en": "Does the point $(3,4)$ lie on the circle $x^{2}+y^{2}=25$?"
   },
   "hint": {
    "ru": "Подставьте координаты.",
    "en": "Substitute the coordinates."
   },
   "sol": {
    "ru": "Подставим: $$3^{2}+4^{2}=9+16=25 \\quad\\checkmark$$\n\nРавенство выполнено, значит точка лежит на окружности.\n\n**Ответ:** да.\n\n**Замечание.** Если бы получилось меньше $25$, точка лежала бы внутри круга, если больше — вне его.",
    "en": "Substitute: $$3^{2}+4^{2}=9+16=25 \\quad\\checkmark$$\n\nThe equation holds, so the point is on the circle.\n\n**Answer:** yes.\n\n**Remark.** A value below $25$ would put the point inside the disc, a value above it outside."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Найдите точку пересечения прямых $y=2x+1$ и $y=-x+7$.",
    "en": "Find the intersection point of the lines $y=2x+1$ and $y=-x+7$."
   },
   "hint": {
    "ru": "Приравняйте правые части.",
    "en": "Set the right-hand sides equal."
   },
   "sol": {
    "ru": "Приравняем: $$2x+1=-x+7\\quad\\Longrightarrow\\quad 3x=6\\quad\\Longrightarrow\\quad x=2 .$$\n\nТогда $y=2\\cdot2+1=5$.\n\n**Проверка** во втором уравнении: $-2+7=5$ ✓\n\n**Ответ:** $(2,5)$.",
    "en": "Equate them: $$2x+1=-x+7\\quad\\Longrightarrow\\quad 3x=6\\quad\\Longrightarrow\\quad x=2 .$$\n\nThen $y=2\\cdot2+1=5$.\n\n**Check** in the second equation: $-2+7=5$ ✓\n\n**Answer:** $(2,5)$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Напишите уравнение прямой, проходящей через точки $(1,2)$ и $(5,10)$.",
    "en": "Write the equation of the line through $(1,2)$ and $(5,10)$."
   },
   "hint": {
    "ru": "Сначала найдите угловой коэффициент.",
    "en": "Find the slope first."
   },
   "sol": {
    "ru": "Угловой коэффициент: $$k=\\frac{10-2}{5-1}=\\frac84=2 .$$\n\nУравнение через точку $(1,2)$: $$y-2=2(x-1)\\quad\\Longrightarrow\\quad y=2x .$$\n\n**Проверка:** при $x=5$ получаем $y=10$ ✓\n\n**Ответ:** $y=2x$ (прямая проходит через начало координат).",
    "en": "The slope is $$k=\\frac{10-2}{5-1}=\\frac84=2 .$$\n\nThrough the point $(1,2)$: $$y-2=2(x-1)\\quad\\Longrightarrow\\quad y=2x .$$\n\n**Check:** at $x=5$ we get $y=10$ ✓\n\n**Answer:** $y=2x$ — the line passes through the origin."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите площадь треугольника с вершинами $(1,1)$, $(4,1)$, $(1,5)$.",
    "en": "Find the area of the triangle with vertices $(1,1)$, $(4,1)$, $(1,5)$."
   },
   "hint": {
    "ru": "Две стороны параллельны осям.",
    "en": "Two sides are parallel to the axes."
   },
   "sol": {
    "ru": "Сторона от $(1,1)$ до $(4,1)$ горизонтальна и имеет длину $3$; сторона от $(1,1)$ до $(1,5)$ вертикальна и имеет длину $4$. Угол между ними прямой, значит $$S=\\frac12\\cdot3\\cdot4=6 .$$\n\n**Ответ:** $6$.\n\n**Проверка формулой площади через координаты:** $$S=\\frac12\\left|3\\cdot4-0\\cdot0\\right|=6 \\quad\\checkmark$$",
    "en": "The side from $(1,1)$ to $(4,1)$ is horizontal of length $3$; the side from $(1,1)$ to $(1,5)$ is vertical of length $4$. They meet at a right angle, so $$S=\\frac12\\cdot3\\cdot4=6 .$$\n\n**Answer:** $6$.\n\n**Check by the coordinate area formula:** $$S=\\frac12\\left|3\\cdot4-0\\cdot0\\right|=6 \\quad\\checkmark$$"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите расстояние от начала координат до прямой $3x+4y-10=0$.",
    "en": "Find the distance from the origin to the line $3x+4y-10=0$."
   },
   "hint": {
    "ru": "$d=\\dfrac{\\left|ax_0+by_0+c\\right|}{\\sqrt{a^{2}+b^{2}}}$.",
    "en": "$d=\\dfrac{\\left|ax_0+by_0+c\\right|}{\\sqrt{a^{2}+b^{2}}}$."
   },
   "sol": {
    "ru": "Подставим $\\left(x_0,y_0\\right)=(0,0)$: $$d=\\frac{\\left|3\\cdot0+4\\cdot0-10\\right|}{\\sqrt{3^{2}+4^{2}}}=\\frac{10}{5}=2 .$$\n\n**Ответ:** $2$.\n\n**Проверка.** Ближайшая точка прямой к началу координат лежит на перпендикуляре, то есть на прямой $y=\\tfrac43x$. Подставив в уравнение: $3x+\\tfrac{16}{3}x=10$, откуда $x=1{,}2$ и $y=1{,}6$; расстояние равно $\\sqrt{1{,}44+2{,}56}=2$ ✓",
    "en": "Substitute $\\left(x_0,y_0\\right)=(0,0)$: $$d=\\frac{\\left|3\\cdot0+4\\cdot0-10\\right|}{\\sqrt{3^{2}+4^{2}}}=\\frac{10}{5}=2 .$$\n\n**Answer:** $2$.\n\n**Check.** The nearest point of the line lies on the perpendicular $y=\\tfrac43x$. Substituting: $3x+\\tfrac{16}{3}x=10$, so $x=1.2$, $y=1.6$, and the distance is $\\sqrt{1.44+2.56}=2$ ✓"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Напишите уравнение окружности с центром $(3,4)$, проходящей через начало координат.",
    "en": "Write the equation of the circle with centre $(3,4)$ passing through the origin."
   },
   "hint": {
    "ru": "Радиус — это расстояние от центра до начала координат.",
    "en": "The radius is the distance from the centre to the origin."
   },
   "sol": {
    "ru": "Радиус равен расстоянию от центра до точки $(0,0)$: $$R=\\sqrt{3^{2}+4^{2}}=5 .$$\n\nЗначит уравнение $$(x-3)^{2}+(y-4)^{2}=25 .$$\n\n**Проверка:** подставив $(0,0)$, получаем $9+16=25$ ✓\n\n**В общем виде:** раскрыв скобки, $x^{2}+y^{2}-6x-8y=0$.",
    "en": "The radius is the distance from the centre to $(0,0)$: $$R=\\sqrt{3^{2}+4^{2}}=5 .$$\n\nSo the equation is $$(x-3)^{2}+(y-4)^{2}=25 .$$\n\n**Check:** substituting $(0,0)$ gives $9+16=25$ ✓\n\n**Expanded form:** $x^{2}+y^{2}-6x-8y=0$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что четырёхугольник с вершинами $(1,2)$, $(4,3)$, $(5,6)$, $(2,5)$ — параллелограмм.",
    "en": "Prove that the quadrilateral with vertices $(1,2)$, $(4,3)$, $(5,6)$, $(2,5)$ is a parallelogram."
   },
   "hint": {
    "ru": "Достаточно проверить, что диагонали делятся пополам.",
    "en": "It suffices to check that the diagonals bisect each other."
   },
   "sol": {
    "ru": "Обозначим вершины $A(1,2)$, $B(4,3)$, $C(5,6)$, $D(2,5)$.\n\n**Середина диагонали $AC$:** $$\\left(\\frac{1+5}{2},\\ \\frac{2+6}{2}\\right)=(3,4).$$\n\n**Середина диагонали $BD$:** $$\\left(\\frac{4+2}{2},\\ \\frac{3+5}{2}\\right)=(3,4).$$\n\nСередины совпали, значит диагонали делятся точкой пересечения пополам — а это признак параллелограмма. $\\blacksquare$\n\n**Проверка через векторы:** $$\\overrightarrow{AB}=(3,1),\\qquad \\overrightarrow{DC}=(3,1) ,$$ векторы равны, значит $AB\\parallel DC$ и $AB=DC$ ✓",
    "en": "Label the vertices $A(1,2)$, $B(4,3)$, $C(5,6)$, $D(2,5)$.\n\n**Midpoint of the diagonal $AC$:** $$\\left(\\frac{1+5}{2},\\ \\frac{2+6}{2}\\right)=(3,4).$$\n\n**Midpoint of the diagonal $BD$:** $$\\left(\\frac{4+2}{2},\\ \\frac{3+5}{2}\\right)=(3,4).$$\n\nThe midpoints coincide, so the diagonals bisect each other — the parallelogram test. $\\blacksquare$\n\n**Check with vectors:** $$\\overrightarrow{AB}=(3,1),\\qquad \\overrightarrow{DC}=(3,1) ,$$ equal vectors, so $AB\\parallel DC$ and $AB=DC$ ✓"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "При каком $k$ точки $(1,2)$, $(3,k)$ и $(5,10)$ лежат на одной прямой?",
    "en": "For which $k$ are the points $(1,2)$, $(3,k)$ and $(5,10)$ collinear?"
   },
   "hint": {
    "ru": "Угловые коэффициенты должны совпадать.",
    "en": "The slopes must agree."
   },
   "sol": {
    "ru": "Прямая через крайние точки имеет угловой коэффициент $$k_0=\\frac{10-2}{5-1}=2 ,$$ и её уравнение $y=2x$ (проверка: при $x=1$ выходит $2$ ✓).\n\nТочка $(3,k)$ лежит на ней тогда и только тогда, когда $$k=2\\cdot3=6 .$$\n\n**Ответ:** $k=6$.\n\n**Другой путь.** Точки коллинеарны, когда площадь треугольника на них равна нулю: $$\\frac12\\left|(3-1)(10-2)-(5-1)(k-2)\\right|=0\\ \\Longrightarrow\\ 16=4(k-2)\\ \\Longrightarrow\\ k=6 \\quad\\checkmark$$",
    "en": "The line through the outer points has slope $$k_0=\\frac{10-2}{5-1}=2 ,$$ with equation $y=2x$ (check: at $x=1$ it gives $2$ ✓).\n\nThe point $(3,k)$ lies on it exactly when $$k=2\\cdot3=6 .$$\n\n**Answer:** $k=6$.\n\n**Another route.** Points are collinear when the triangle they form has zero area: $$\\frac12\\left|(3-1)(10-2)-(5-1)(k-2)\\right|=0\\ \\Longrightarrow\\ 16=4(k-2)\\ \\Longrightarrow\\ k=6 \\quad\\checkmark$$"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите точку, симметричную $(2,3)$ относительно оси $Ox$ и относительно прямой $y=x$.",
    "en": "Find the reflections of $(2,3)$ in the $x$-axis and in the line $y=x$."
   },
   "hint": {
    "ru": "Отражение относительно $Ox$ меняет знак ординаты.",
    "en": "Reflecting in the $x$-axis flips the sign of the $y$-coordinate."
   },
   "sol": {
    "ru": "**Относительно оси $Ox$.** Абсцисса сохраняется, ордината меняет знак: $$(2,3)\\ \\mapsto\\ (2,-3).$$\n\n**Относительно прямой $y=x$.** Координаты меняются местами: $$(2,3)\\ \\mapsto\\ (3,2).$$\n\n**Почему.** Середина отрезка между $(2,3)$ и $(3,2)$ — это $\\left(2{,}5;\\ 2{,}5\\right)$, она лежит на прямой $y=x$; а вектор $(1,-1)$ перпендикулярен направляющему вектору $(1,1)$ этой прямой ✓\n\n**Ответ:** $(2,-3)$ и $(3,2)$.",
    "en": "**In the $x$-axis.** The abscissa stays, the ordinate flips sign: $$(2,3)\\ \\mapsto\\ (2,-3).$$\n\n**In the line $y=x$.** The coordinates swap: $$(2,3)\\ \\mapsto\\ (3,2).$$\n\n**Why.** The midpoint of the segment from $(2,3)$ to $(3,2)$ is $(2.5,\\,2.5)$, which lies on $y=x$; and the vector $(1,-1)$ is perpendicular to the direction $(1,1)$ of that line ✓\n\n**Answer:** $(2,-3)$ and $(3,2)$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Напишите уравнение окружности, для которой отрезок с концами $(1,2)$ и $(7,10)$ — диаметр.",
    "en": "Write the equation of the circle having the segment from $(1,2)$ to $(7,10)$ as a diameter."
   },
   "hint": {
    "ru": "Центр — середина диаметра.",
    "en": "The centre is the midpoint of the diameter."
   },
   "sol": {
    "ru": "**Центр** — середина отрезка: $$\\left(\\frac{1+7}{2},\\ \\frac{2+10}{2}\\right)=(4,6).$$\n\n**Радиус** — половина длины диаметра: $$d=\\sqrt{6^{2}+8^{2}}=10\\quad\\Longrightarrow\\quad R=5 .$$\n\n**Уравнение:** $$(x-4)^{2}+(y-6)^{2}=25 .$$\n\n**Проверка:** точка $(1,2)$ даёт $9+16=25$ ✓\n\n**Полезный факт.** Точка $M$ лежит на этой окружности тогда и только тогда, когда отрезок виден из неё под прямым углом.",
    "en": "**The centre** is the midpoint: $$\\left(\\frac{1+7}{2},\\ \\frac{2+10}{2}\\right)=(4,6).$$\n\n**The radius** is half the diameter: $$d=\\sqrt{6^{2}+8^{2}}=10\\quad\\Longrightarrow\\quad R=5 .$$\n\n**The equation:** $$(x-4)^{2}+(y-6)^{2}=25 .$$\n\n**Check:** the point $(1,2)$ gives $9+16=25$ ✓\n\n**A useful fact.** A point $M$ lies on this circle exactly when the segment subtends a right angle at $M$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите множество точек, равноудалённых от $A(0,0)$ и $B(4,0)$.",
    "en": "Find the set of points equidistant from $A(0,0)$ and $B(4,0)$."
   },
   "hint": {
    "ru": "Приравняйте квадраты расстояний.",
    "en": "Equate the squared distances."
   },
   "sol": {
    "ru": "Пусть $M(x,y)$. Условие $MA=MB$ равносильно равенству квадратов: $$x^{2}+y^{2}=(x-4)^{2}+y^{2} .$$\n\nСлагаемые $x^{2}$ и $y^{2}$ сокращаются: $$0=-8x+16\\quad\\Longrightarrow\\quad x=2 .$$\n\n**Ответ:** вертикальная прямая $x=2$ — серединный перпендикуляр к отрезку $AB$.\n\n**Замечание.** Так и получается общий факт: множество точек, равноудалённых от двух данных, — серединный перпендикуляр к соединяющему их отрезку.",
    "en": "Let $M(x,y)$. The condition $MA=MB$ is equivalent to equal squares: $$x^{2}+y^{2}=(x-4)^{2}+y^{2} .$$\n\nThe $x^{2}$ and $y^{2}$ terms cancel: $$0=-8x+16\\quad\\Longrightarrow\\quad x=2 .$$\n\n**Answer:** the vertical line $x=2$ — the perpendicular bisector of $AB$.\n\n**Remark.** This is the general fact: the points equidistant from two given points form the perpendicular bisector of the segment joining them."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Найдите на оси $Ox$ точку, равноудалённую от $(1,2)$ и $(5,4)$.",
    "en": "Find the point on the $x$-axis equidistant from $(1,2)$ and $(5,4)$."
   },
   "hint": {
    "ru": "Точка имеет вид $(x,0)$.",
    "en": "The point has the form $(x,0)$."
   },
   "sol": {
    "ru": "Пусть искомая точка $M(x,0)$. Приравняем квадраты расстояний: $$(x-1)^{2}+4=(x-5)^{2}+16 .$$\n\nРаскроем: $$x^{2}-2x+1+4=x^{2}-10x+25+16 ,$$ то есть $$-2x+5=-10x+41\\quad\\Longrightarrow\\quad 8x=36\\quad\\Longrightarrow\\quad x=4{,}5 .$$\n\n**Проверка:** $$(4{,}5-1)^{2}+4=12{,}25+4=16{,}25 ,$$ $$(4{,}5-5)^{2}+16=0{,}25+16=16{,}25 \\quad\\checkmark$$\n\n**Ответ:** $(4{,}5;\\ 0)$.",
    "en": "Let the point be $M(x,0)$. Equate the squared distances: $$(x-1)^{2}+4=(x-5)^{2}+16 .$$\n\nExpanding, $$x^{2}-2x+5=x^{2}-10x+41 ,$$ so $$8x=36\\quad\\Longrightarrow\\quad x=4.5 .$$\n\n**Check:** $$(4.5-1)^{2}+4=16.25 ,\\qquad (4.5-5)^{2}+16=16.25 \\quad\\checkmark$$\n\n**Answer:** $(4.5,\\ 0)$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Найдите расстояние между параллельными прямыми $3x+4y-5=0$ и $3x+4y+15=0$.",
    "en": "Find the distance between the parallel lines $3x+4y-5=0$ and $3x+4y+15=0$."
   },
   "hint": {
    "ru": "Возьмите любую точку одной прямой и посчитайте расстояние до другой.",
    "en": "Take any point on one line and measure to the other."
   },
   "sol": {
    "ru": "**Способ 1.** Возьмём точку на первой прямой: при $y=-1$ получаем $3x-4-5=0$, то есть $x=3$; точка $(3,-1)$.\n\nРасстояние до второй прямой: $$d=\\frac{\\left|3\\cdot3+4\\cdot(-1)+15\\right|}{\\sqrt{9+16}}=\\frac{\\left|9-4+15\\right|}{5}=\\frac{20}{5}=4 .$$\n\n**Способ 2 (общая формула).** Для прямых $ax+by+c_1=0$ и $ax+by+c_2=0$ $$d=\\frac{\\left|c_1-c_2\\right|}{\\sqrt{a^{2}+b^{2}}}=\\frac{\\left|-5-15\\right|}{5}=4 \\quad\\checkmark$$\n\n**Ответ:** $4$.\n\n**Важно:** перед применением формулы коэффициенты при $x$ и $y$ у обеих прямых должны совпадать — иначе их надо предварительно уравнять.",
    "en": "**Method 1.** Take a point on the first line: at $y=-1$ we get $3x-9=0$, so $x=3$; the point $(3,-1)$.\n\nIts distance to the second line is $$d=\\frac{\\left|3\\cdot3+4\\cdot(-1)+15\\right|}{\\sqrt{9+16}}=\\frac{20}{5}=4 .$$\n\n**Method 2 (general formula).** For lines $ax+by+c_1=0$ and $ax+by+c_2=0$, $$d=\\frac{\\left|c_1-c_2\\right|}{\\sqrt{a^{2}+b^{2}}}=\\frac{20}{5}=4 \\quad\\checkmark$$\n\n**Answer:** $4$.\n\n**Important:** before using the formula the coefficients of $x$ and $y$ must match in both equations — otherwise rescale first."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите формулу деления отрезка: точка $M$, делящая отрезок $AB$ в отношении $AM:MB=m:n$, имеет координаты $$M\\left(\\frac{n\\,x_A+m\\,x_B}{m+n},\\ \\frac{n\\,y_A+m\\,y_B}{m+n}\\right).$$",
    "en": "Prove the section formula: the point $M$ dividing $AB$ in the ratio $AM:MB=m:n$ has coordinates $$M\\left(\\frac{n\\,x_A+m\\,x_B}{m+n},\\ \\frac{n\\,y_A+m\\,y_B}{m+n}\\right).$$"
   },
   "hint": {
    "ru": "Спроецируйте на ось $Ox$ и воспользуйтесь теоремой Фалеса.",
    "en": "Project onto the $x$-axis and use the intercept theorem."
   },
   "sol": {
    "ru": "**Через векторы.** Условие $AM:MB=m:n$ означает $$\\overrightarrow{AM}=\\frac{m}{m+n}\\,\\overrightarrow{AB} .$$\n\nЗначит радиус-вектор точки $M$ равен $$\\vec M=\\vec A+\\frac{m}{m+n}\\left(\\vec B-\\vec A\\right)=\\frac{(m+n)\\vec A+m\\vec B-m\\vec A}{m+n}=\\frac{n\\vec A+m\\vec B}{m+n} .$$\n\nПокоординатно это и есть требуемая формула. $\\blacksquare$\n\n**Частные случаи.**\n\n$m=n$ даёт середину: среднее арифметическое координат.\n\n$m:n=2:1$ даёт центроид на медиане: $$\\frac{1\\cdot\\vec A+2\\cdot\\vec M_a}{3} ,$$ откуда и получается знаменитая формула центроида $\\vec G=\\dfrac{\\vec A+\\vec B+\\vec C}{3}$.\n\n**Мнемоника:** коэффициенты «перекрещиваются» — при $A$ стоит $n$, при $B$ стоит $m$.",
    "en": "**With vectors.** The condition $AM:MB=m:n$ says $$\\overrightarrow{AM}=\\frac{m}{m+n}\\,\\overrightarrow{AB} .$$\n\nSo the position vector of $M$ is $$\\vec M=\\vec A+\\frac{m}{m+n}\\left(\\vec B-\\vec A\\right)=\\frac{n\\vec A+m\\vec B}{m+n} .$$\n\nCoordinatewise this is the stated formula. $\\blacksquare$\n\n**Special cases.**\n\n$m=n$ gives the midpoint: the average of the coordinates.\n\n$m:n=2:1$ gives the centroid along a median: $$\\frac{\\vec A+2\\vec M_a}{3} ,$$ from which the familiar $\\vec G=\\dfrac{\\vec A+\\vec B+\\vec C}{3}$ follows.\n\n**Mnemonic:** the coefficients cross over — $A$ carries $n$ and $B$ carries $m$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите координатным методом, что серединные перпендикуляры к сторонам треугольника пересекаются в одной точке.",
    "en": "Prove by coordinates that the perpendicular bisectors of the sides of a triangle are concurrent."
   },
   "hint": {
    "ru": "Запишите условие «равноудалённости» через квадраты расстояний.",
    "en": "Write \"equidistant\" through squared distances."
   },
   "sol": {
    "ru": "Пусть вершины имеют координаты $A\\left(x_1,y_1\\right)$, $B\\left(x_2,y_2\\right)$, $C\\left(x_3,y_3\\right)$, и пусть $$f_A(M)=MA^{2},\\quad f_B(M)=MB^{2},\\quad f_C(M)=MC^{2} .$$\n\n**Шаг 1: серединный перпендикуляр — это линия уровня.** Уравнение $f_A(M)=f_B(M)$ раскрывается так: $$\\left(x-x_1\\right)^{2}+\\left(y-y_1\\right)^{2}=\\left(x-x_2\\right)^{2}+\\left(y-y_2\\right)^{2} .$$ Квадраты $x^{2}$ и $y^{2}$ сокращаются, и остаётся **линейное** уравнение — то есть прямая. Это и есть серединный перпендикуляр к $AB$ (он состоит из точек, равноудалённых от $A$ и $B$).\n\n**Шаг 2: две прямые пересекаются.** Серединные перпендикуляры к $AB$ и к $BC$ перпендикулярны непараллельным прямым $AB$ и $BC$ (вершины не лежат на одной прямой), значит сами не параллельны и пересекаются в некоторой точке $O$.\n\n**Шаг 3: третий перпендикуляр проходит через $O$.** В точке $O$ выполнено $$f_A(O)=f_B(O)\\quad\\text{и}\\quad f_B(O)=f_C(O) ,$$ значит $f_A(O)=f_C(O)$, то есть $O$ лежит и на серединном перпендикуляре к $AC$. $\\blacksquare$\n\n**Следствие.** Точка $O$ равноудалена от всех трёх вершин, значит она — центр описанной окружности, и такая окружность существует и единственна.",
    "en": "Let the vertices be $A\\left(x_1,y_1\\right)$, $B\\left(x_2,y_2\\right)$, $C\\left(x_3,y_3\\right)$, and set $$f_A(M)=MA^{2},\\quad f_B(M)=MB^{2},\\quad f_C(M)=MC^{2} .$$\n\n**Step 1: a perpendicular bisector is a level set.** The equation $f_A(M)=f_B(M)$ reads $$\\left(x-x_1\\right)^{2}+\\left(y-y_1\\right)^{2}=\\left(x-x_2\\right)^{2}+\\left(y-y_2\\right)^{2} .$$ The $x^{2}$ and $y^{2}$ terms cancel, leaving a **linear** equation — a line. It is the perpendicular bisector of $AB$ (the points equidistant from $A$ and $B$).\n\n**Step 2: two of them meet.** The bisectors of $AB$ and $BC$ are perpendicular to the non-parallel lines $AB$ and $BC$ (the vertices are not collinear), hence are themselves non-parallel and meet at some point $O$.\n\n**Step 3: the third passes through $O$.** At $O$ we have $$f_A(O)=f_B(O)\\quad\\text{and}\\quad f_B(O)=f_C(O) ,$$ so $f_A(O)=f_C(O)$, i.e. $O$ lies on the perpendicular bisector of $AC$ as well. $\\blacksquare$\n\n**Corollary.** The point $O$ is equidistant from all three vertices, so it is the circumcentre — the circumcircle exists and is unique."
   }
  },
  {
   "src": "Областной тур · уровень / Regional-round level",
   "lvl": 3,
   "q": {
    "ru": "При каких $k$ прямая $y=kx$ пересекает окружность $(x-5)^{2}+y^{2}=9$ в двух точках?",
    "en": "For which $k$ does the line $y=kx$ meet the circle $(x-5)^{2}+y^{2}=9$ in two points?"
   },
   "hint": {
    "ru": "Сравните расстояние от центра до прямой с радиусом.",
    "en": "Compare the distance from the centre to the line with the radius."
   },
   "sol": {
    "ru": "Центр окружности — точка $(5,0)$, радиус $R=3$. Запишем прямую в общем виде: $kx-y=0$.\n\n**Расстояние от центра до прямой:** $$d=\\frac{\\left|k\\cdot5-0\\right|}{\\sqrt{k^{2}+1}}=\\frac{5|k|}{\\sqrt{k^{2}+1}} .$$\n\n**Условие двух точек пересечения:** $d<R$, то есть $$\\frac{5|k|}{\\sqrt{k^{2}+1}}<3 .$$\n\nОбе части неотрицательны — возведём в квадрат: $$25k^{2}<9\\left(k^{2}+1\\right)\\quad\\Longrightarrow\\quad 16k^{2}<9\\quad\\Longrightarrow\\quad |k|<\\frac34 .$$\n\n**Ответ:** $-\\dfrac34<k<\\dfrac34$.\n\n**Крайние значения** $k=\\pm\\tfrac34$ дают касание, а при $|k|>\\tfrac34$ общих точек нет.\n\n**Проверка:** при $k=0$ прямая $y=0$ пересекает окружность в точках $(2,0)$ и $(8,0)$ ✓",
    "en": "The centre is $(5,0)$ and the radius $R=3$. Write the line as $kx-y=0$.\n\n**Distance from the centre:** $$d=\\frac{\\left|5k\\right|}{\\sqrt{k^{2}+1}} .$$\n\n**Two intersection points** means $d<R$: $$\\frac{5|k|}{\\sqrt{k^{2}+1}}<3 .$$\n\nBoth sides are non-negative, so square: $$25k^{2}<9\\left(k^{2}+1\\right)\\quad\\Longrightarrow\\quad 16k^{2}<9\\quad\\Longrightarrow\\quad |k|<\\frac34 .$$\n\n**Answer:** $-\\dfrac34<k<\\dfrac34$.\n\n**The endpoints** $k=\\pm\\tfrac34$ give tangency, and for $|k|>\\tfrac34$ there are no common points.\n\n**Check:** at $k=0$ the line $y=0$ meets the circle at $(2,0)$ and $(8,0)$ ✓"
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Найдите площадь четырёхугольника с вершинами $(0,0)$, $(4,0)$, $(5,3)$, $(1,4)$.",
    "en": "Find the area of the quadrilateral with vertices $(0,0)$, $(4,0)$, $(5,3)$, $(1,4)$."
   },
   "hint": {
    "ru": "Формула площади по координатам («шнурки»).",
    "en": "The shoelace formula."
   },
   "sol": {
    "ru": "Вершины перечислены по обходу против часовой стрелки. Применим формулу «шнурков»: $$2S=\\sum_{i}\\left(x_iy_{i+1}-x_{i+1}y_i\\right).$$\n\nПосчитаем по звеньям:\n\n$(0,0)\\to(4,0)$: $\\ 0\\cdot0-4\\cdot0=0$;\n\n$(4,0)\\to(5,3)$: $\\ 4\\cdot3-5\\cdot0=12$;\n\n$(5,3)\\to(1,4)$: $\\ 5\\cdot4-1\\cdot3=17$;\n\n$(1,4)\\to(0,0)$: $\\ 1\\cdot0-0\\cdot4=0$.\n\nСумма равна $29$, значит $$S=\\frac{29}{2}=14{,}5 .$$\n\n**Ответ:** $14{,}5$.\n\n**Проверка разбиением.** Диагональ от $(0,0)$ до $(5,3)$ делит четырёхугольник на треугольники площадей $$\\frac12\\left|4\\cdot3-5\\cdot0\\right|=6\\qquad\\text{и}\\qquad \\frac12\\left|5\\cdot4-1\\cdot3\\right|=8{,}5 ,$$ в сумме $14{,}5$ ✓",
    "en": "The vertices are listed counterclockwise. Apply the shoelace formula $$2S=\\sum_{i}\\left(x_iy_{i+1}-x_{i+1}y_i\\right).$$\n\nEdge by edge:\n\n$(0,0)\\to(4,0)$: $\\ 0\\cdot0-4\\cdot0=0$;\n\n$(4,0)\\to(5,3)$: $\\ 4\\cdot3-5\\cdot0=12$;\n\n$(5,3)\\to(1,4)$: $\\ 5\\cdot4-1\\cdot3=17$;\n\n$(1,4)\\to(0,0)$: $\\ 1\\cdot0-0\\cdot4=0$.\n\nThe sum is $29$, so $$S=\\frac{29}{2}=14.5 .$$\n\n**Answer:** $14.5$.\n\n**Check by splitting.** The diagonal from $(0,0)$ to $(5,3)$ cuts it into triangles of areas $$\\frac12\\left|4\\cdot3-5\\cdot0\\right|=6\\qquad\\text{and}\\qquad \\frac12\\left|5\\cdot4-1\\cdot3\\right|=8.5 ,$$ summing to $14.5$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите координатами, что диагонали ромба перпендикулярны.",
    "en": "Prove by coordinates that the diagonals of a rhombus are perpendicular."
   },
   "hint": {
    "ru": "Скалярное произведение диагоналей — разность квадратов сторон.",
    "en": "The dot product of the diagonals is a difference of squared side lengths."
   },
   "sol": {
    "ru": "Пусть ромб задан вершинами $A$, $B$, $C$, $D$ и векторами $$\\vec u=\\overrightarrow{AB},\\qquad \\vec v=\\overrightarrow{AD} ,$$ причём $|\\vec u|=|\\vec v|$ (все стороны равны).\n\n**Диагонали.** $$\\overrightarrow{AC}=\\vec u+\\vec v,\\qquad \\overrightarrow{DB}=\\vec u-\\vec v .$$\n\n**Скалярное произведение.** $$\\left(\\vec u+\\vec v\\right)\\cdot\\left(\\vec u-\\vec v\\right)=|\\vec u|^{2}-|\\vec v|^{2}=0 ,$$ поскольку длины равны.\n\nСкалярное произведение ненулевых векторов равно нулю ровно тогда, когда они перпендикулярны, значит $$AC\\perp BD . \\qquad\\blacksquare$$\n\n**Обратное тоже верно:** если в параллелограмме диагонали перпендикулярны, то $|\\vec u|=|\\vec v|$, то есть это ромб.\n\n**Заодно:** для прямоугольника аналогичный подсчёт даёт равенство диагоналей.",
    "en": "Let the rhombus have vertices $A$, $B$, $C$, $D$ and put $$\\vec u=\\overrightarrow{AB},\\qquad \\vec v=\\overrightarrow{AD} ,$$ with $|\\vec u|=|\\vec v|$ (all sides equal).\n\n**The diagonals.** $$\\overrightarrow{AC}=\\vec u+\\vec v,\\qquad \\overrightarrow{DB}=\\vec u-\\vec v .$$\n\n**Their dot product.** $$\\left(\\vec u+\\vec v\\right)\\cdot\\left(\\vec u-\\vec v\\right)=|\\vec u|^{2}-|\\vec v|^{2}=0 ,$$ because the lengths agree.\n\nA dot product of non-zero vectors vanishes exactly when they are perpendicular, so $$AC\\perp BD . \\qquad\\blacksquare$$\n\n**The converse holds too:** perpendicular diagonals in a parallelogram force $|\\vec u|=|\\vec v|$, i.e. a rhombus.\n\n**Also:** the analogous computation for a rectangle gives equal diagonals."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Напишите уравнение касательной к окружности $x^{2}+y^{2}=25$ в точке $(3,4)$.",
    "en": "Write the equation of the tangent to the circle $x^{2}+y^{2}=25$ at the point $(3,4)$."
   },
   "hint": {
    "ru": "Касательная перпендикулярна радиусу.",
    "en": "The tangent is perpendicular to the radius."
   },
   "sol": {
    "ru": "Радиус в точку касания — вектор $(3,4)$; касательная ему перпендикулярна.\n\n**Способ 1 (через нормаль).** Прямая с нормальным вектором $(3,4)$, проходящая через $(3,4)$: $$3(x-3)+4(y-4)=0\\quad\\Longrightarrow\\quad 3x+4y=25 .$$\n\n**Способ 2 (через угловой коэффициент).** Радиус имеет наклон $\\tfrac43$, значит касательная — наклон $-\\tfrac34$: $$y-4=-\\frac34(x-3)\\quad\\Longrightarrow\\quad 3x+4y=25 \\quad\\checkmark$$\n\n**Проверка:** расстояние от центра $(0,0)$ до этой прямой равно $\\dfrac{25}{5}=5=R$ ✓\n\n**Ответ:** $3x+4y=25$.\n\n**Общее правило:** касательная к $x^{2}+y^{2}=R^{2}$ в точке $\\left(x_0,y_0\\right)$ имеет уравнение $x_0x+y_0y=R^{2}$.",
    "en": "The radius to the contact point is the vector $(3,4)$; the tangent is perpendicular to it.\n\n**Method 1 (normal vector).** The line with normal $(3,4)$ through $(3,4)$: $$3(x-3)+4(y-4)=0\\quad\\Longrightarrow\\quad 3x+4y=25 .$$\n\n**Method 2 (slopes).** The radius has slope $\\tfrac43$, so the tangent has slope $-\\tfrac34$: $$y-4=-\\frac34(x-3)\\quad\\Longrightarrow\\quad 3x+4y=25 \\quad\\checkmark$$\n\n**Check:** the distance from $(0,0)$ to this line is $\\dfrac{25}{5}=5=R$ ✓\n\n**Answer:** $3x+4y=25$.\n\n**General rule:** the tangent to $x^{2}+y^{2}=R^{2}$ at $\\left(x_0,y_0\\right)$ is $x_0x+y_0y=R^{2}$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите формулу площади треугольника по координатам вершин: $$S=\\frac12\\left|\\left(x_2-x_1\\right)\\left(y_3-y_1\\right)-\\left(x_3-x_1\\right)\\left(y_2-y_1\\right)\\right| .$$",
    "en": "Prove the coordinate area formula for a triangle: $$S=\\frac12\\left|\\left(x_2-x_1\\right)\\left(y_3-y_1\\right)-\\left(x_3-x_1\\right)\\left(y_2-y_1\\right)\\right| .$$"
   },
   "hint": {
    "ru": "Перенесите начало координат в первую вершину и посчитайте через основание и высоту.",
    "en": "Move the origin to the first vertex and use base times height."
   },
   "sol": {
    "ru": "Перенесём начало координат в вершину $A$: положим $$\\vec u=\\left(x_2-x_1,\\ y_2-y_1\\right),\\qquad \\vec v=\\left(x_3-x_1,\\ y_3-y_1\\right).$$ Задача сводится к площади треугольника, построенного на векторах $\\vec u$ и $\\vec v$.\n\n**Основание.** Возьмём за основание вектор $\\vec u$; его длина $|\\vec u|$, а прямая, на которой он лежит, имеет уравнение $$u_2\\,x-u_1\\,y=0 .$$\n\n**Высота.** Расстояние от конца вектора $\\vec v$ до этой прямой равно $$h=\\frac{\\left|u_2v_1-u_1v_2\\right|}{\\sqrt{u_1^{2}+u_2^{2}}}=\\frac{\\left|u_1v_2-u_2v_1\\right|}{|\\vec u|} .$$\n\n**Площадь.** $$S=\\frac12|\\vec u|\\,h=\\frac12\\left|u_1v_2-u_2v_1\\right| ,$$ то есть в исходных обозначениях $$S=\\frac12\\left|\\left(x_2-x_1\\right)\\left(y_3-y_1\\right)-\\left(x_3-x_1\\right)\\left(y_2-y_1\\right)\\right| . \\qquad\\blacksquare$$\n\n**Проверка** на треугольнике $(0,0)$, $(4,0)$, $(0,3)$: $$S=\\frac12\\left|4\\cdot3-0\\cdot0\\right|=6 \\quad\\checkmark$$\n\n**Замечание.** Выражение под модулем — это ориентированная удвоенная площадь; его знак говорит, обходятся ли вершины против часовой стрелки (плюс) или по часовой (минус).",
    "en": "Move the origin to $A$: set $$\\vec u=\\left(x_2-x_1,\\ y_2-y_1\\right),\\qquad \\vec v=\\left(x_3-x_1,\\ y_3-y_1\\right),$$ reducing to the area of the triangle on the vectors $\\vec u$ and $\\vec v$.\n\n**Base.** Take $\\vec u$ as base; its length is $|\\vec u|$ and the line carrying it is $$u_2\\,x-u_1\\,y=0 .$$\n\n**Height.** The distance from the tip of $\\vec v$ to that line is $$h=\\frac{\\left|u_1v_2-u_2v_1\\right|}{|\\vec u|} .$$\n\n**Area.** $$S=\\frac12|\\vec u|\\,h=\\frac12\\left|u_1v_2-u_2v_1\\right| ,$$ i.e. in the original notation $$S=\\frac12\\left|\\left(x_2-x_1\\right)\\left(y_3-y_1\\right)-\\left(x_3-x_1\\right)\\left(y_2-y_1\\right)\\right| . \\qquad\\blacksquare$$\n\n**Check** on $(0,0)$, $(4,0)$, $(0,3)$: $$S=\\frac12\\left|4\\cdot3-0\\cdot0\\right|=6 \\quad\\checkmark$$\n\n**Remark.** The expression inside the absolute value is twice the signed area; its sign says whether the vertices are listed counterclockwise (plus) or clockwise (minus)."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 3,
   "q": {
    "ru": "Найдите множество точек, из которых отрезок с концами $(0,0)$ и $(4,0)$ виден под прямым углом.",
    "en": "Find the set of points from which the segment with endpoints $(0,0)$ and $(4,0)$ subtends a right angle."
   },
   "hint": {
    "ru": "Скалярное произведение векторов к концам равно нулю.",
    "en": "The dot product of the vectors to the endpoints is zero."
   },
   "sol": {
    "ru": "Пусть $M(x,y)$, $A(0,0)$, $B(4,0)$. Угол $AMB$ прямой тогда и только тогда, когда $$\\overrightarrow{MA}\\cdot\\overrightarrow{MB}=0 .$$\n\n**Считаем.** $$\\overrightarrow{MA}=(-x,-y),\\qquad \\overrightarrow{MB}=(4-x,-y) ,$$ значит $$-x(4-x)+y^{2}=0\\quad\\Longrightarrow\\quad x^{2}-4x+y^{2}=0 .$$\n\n**Выделим квадрат.** $$(x-2)^{2}+y^{2}=4 .$$\n\nЭто окружность с центром $(2,0)$ и радиусом $2$ — то есть окружность, построенная на отрезке $AB$ как на диаметре.\n\n**Ответ:** окружность $(x-2)^{2}+y^{2}=4$ **без двух точек** $(0,0)$ и $(4,0)$ (в них угол не определён).\n\n**Это и есть теорема Фалеса** в координатной записи.",
    "en": "Let $M(x,y)$, $A(0,0)$, $B(4,0)$. The angle $AMB$ is right exactly when $$\\overrightarrow{MA}\\cdot\\overrightarrow{MB}=0 .$$\n\n**Compute.** $$\\overrightarrow{MA}=(-x,-y),\\qquad \\overrightarrow{MB}=(4-x,-y) ,$$ so $$-x(4-x)+y^{2}=0\\quad\\Longrightarrow\\quad x^{2}-4x+y^{2}=0 .$$\n\n**Complete the square.** $$(x-2)^{2}+y^{2}=4 .$$\n\nThis is the circle with centre $(2,0)$ and radius $2$ — the circle on $AB$ as diameter.\n\n**Answer:** the circle $(x-2)^{2}+y^{2}=4$ **minus the two points** $(0,0)$ and $(4,0)$, where the angle is undefined.\n\n**This is Thales’ theorem** written in coordinates."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите формулу «шнурков» для площади произвольного простого многоугольника с вершинами $\\left(x_1,y_1\\right),\\dots,\\left(x_n,y_n\\right)$: $$S=\\frac12\\left|\\sum_{i=1}^{n}\\left(x_iy_{i+1}-x_{i+1}y_i\\right)\\right| ,$$ где $\\left(x_{n+1},y_{n+1}\\right)=\\left(x_1,y_1\\right)$.",
    "en": "Prove the shoelace formula for the area of an arbitrary simple polygon with vertices $\\left(x_1,y_1\\right),\\dots,\\left(x_n,y_n\\right)$: $$S=\\frac12\\left|\\sum_{i=1}^{n}\\left(x_iy_{i+1}-x_{i+1}y_i\\right)\\right| ,$$ where $\\left(x_{n+1},y_{n+1}\\right)=\\left(x_1,y_1\\right)$."
   },
   "hint": {
    "ru": "Индукция по числу вершин: отрежьте «ухо» — треугольник у одной вершины.",
    "en": "Induct on the number of vertices: cut off an \"ear\" — a triangle at one vertex."
   },
   "sol": {
    "ru": "Обозначим через $$T(P)=\\frac12\\sum_{i=1}^{n}\\left(x_iy_{i+1}-x_{i+1}y_i\\right)$$ **ориентированную** площадь многоугольника $P$ (со знаком: плюс при обходе против часовой стрелки).\n\n**Шаг 1: база — треугольник.** Для $n=3$ сумма равна $$x_1y_2-x_2y_1+x_2y_3-x_3y_2+x_3y_1-x_1y_3 ,$$ и это в точности $$\\left(x_2-x_1\\right)\\left(y_3-y_1\\right)-\\left(x_3-x_1\\right)\\left(y_2-y_1\\right)$$ (проверяется раскрытием скобок), то есть удвоенная площадь треугольника со знаком ✓\n\n**Шаг 2: аддитивность.** Пусть многоугольник $P$ разрезан диагональю $\\left(x_a,y_a\\right)\\!-\\!\\left(x_b,y_b\\right)$ на два многоугольника $P_1$ и $P_2$. При сложении $T(P_1)+T(P_2)$ звенья вдоль разреза входят дважды — по разу в каждом направлении: $$\\left(x_ay_b-x_by_a\\right)+\\left(x_by_a-x_ay_b\\right)=0 .$$ Значит эти вклады взаимно уничтожаются, а остальные звенья складываются ровно в обход границы $P$: $$T(P_1)+T(P_2)=T(P) .$$\n\n**Шаг 3: индукция.** Всякий простой многоугольник с $n\\ge4$ вершинами имеет «ухо» — вершину, диагональ у которой лежит целиком внутри (теорема о существовании уха). Отрезав его, получаем треугольник и многоугольник с $n-1$ вершиной; по предположению индукции для обоих формула верна, а по шагу 2 она верна и для $P$.\n\nВзяв модуль, получаем обычную (неориентированную) площадь. $\\blacksquare$\n\n**Проверка** на единичном квадрате $(0,0),(1,0),(1,1),(0,1)$: $$\\frac12\\left|0+1+1+0-\\left(0+0+0+0\\right)\\right| ,$$ а по звеньям: $0\\cdot0-1\\cdot0=0$, $1\\cdot1-1\\cdot0=1$, $1\\cdot1-0\\cdot1=1$, $0\\cdot0-0\\cdot1=0$; сумма $2$, площадь $1$ ✓\n\n**Практично:** формула работает и для невыпуклых многоугольников — важно лишь, чтобы граница не самопересекалась.",
    "en": "Write $$T(P)=\\frac12\\sum_{i=1}^{n}\\left(x_iy_{i+1}-x_{i+1}y_i\\right)$$ for the **signed** area of the polygon $P$ (positive for a counterclockwise traversal).\n\n**Step 1: base case, a triangle.** For $n=3$ the sum is $$x_1y_2-x_2y_1+x_2y_3-x_3y_2+x_3y_1-x_1y_3 ,$$ which expands to exactly $$\\left(x_2-x_1\\right)\\left(y_3-y_1\\right)-\\left(x_3-x_1\\right)\\left(y_2-y_1\\right),$$ twice the signed area of the triangle ✓\n\n**Step 2: additivity.** Suppose $P$ is cut by a diagonal $\\left(x_a,y_a\\right)\\!-\\!\\left(x_b,y_b\\right)$ into $P_1$ and $P_2$. In $T(P_1)+T(P_2)$ the edge along the cut appears twice, once in each direction: $$\\left(x_ay_b-x_by_a\\right)+\\left(x_by_a-x_ay_b\\right)=0 .$$ These contributions cancel, and the remaining edges assemble exactly into the boundary of $P$: $$T(P_1)+T(P_2)=T(P) .$$\n\n**Step 3: induction.** Every simple polygon with $n\\ge4$ vertices has an \"ear\" — a vertex whose diagonal lies entirely inside (the two-ears theorem). Cutting it off leaves a triangle and a polygon with $n-1$ vertices; the formula holds for both by induction, hence for $P$ by Step 2.\n\nTaking absolute values gives the ordinary (unsigned) area. $\\blacksquare$\n\n**Check** on the unit square $(0,0),(1,0),(1,1),(0,1)$: edge by edge $0$, $1$, $1$, $0$; the sum is $2$ and the area $1$ ✓\n\n**Practical note:** the formula works for non-convex polygons too — all that matters is that the boundary does not cross itself."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Пусть $A$, $B$, $C$ — фиксированные точки. Докажите, что множество точек $P$ с $$PA^{2}+PB^{2}+PC^{2}=\\text{const}$$ — окружность с центром в центроиде треугольника $ABC$ (или пустое множество, или одна точка).",
    "en": "Let $A$, $B$, $C$ be fixed points. Prove that the set of points $P$ with $$PA^{2}+PB^{2}+PC^{2}=\\text{const}$$ is a circle centred at the centroid of $ABC$ (or empty, or a single point)."
   },
   "hint": {
    "ru": "Поместите начало координат в центроид.",
    "en": "Put the origin at the centroid."
   },
   "sol": {
    "ru": "Поместим начало координат в центроид $G$. Тогда $$\\vec A+\\vec B+\\vec C=\\vec 0 .$$\n\n**Считаем сумму квадратов.** Для произвольной точки $P$ с радиус-вектором $\\vec p$ $$PA^{2}=\\left|\\vec p-\\vec A\\right|^{2}=|\\vec p|^{2}-2\\,\\vec p\\cdot\\vec A+\\left|\\vec A\\right|^{2} ,$$ и аналогично для $B$ и $C$. Складывая три равенства, $$PA^{2}+PB^{2}+PC^{2}=3|\\vec p|^{2}-2\\,\\vec p\\cdot\\underbrace{\\left(\\vec A+\\vec B+\\vec C\\right)}_{=\\vec 0}+\\left(\\left|\\vec A\\right|^{2}+\\left|\\vec B\\right|^{2}+\\left|\\vec C\\right|^{2}\\right).$$\n\nСредний член исчезает, и, обозначив $$Q=GA^{2}+GB^{2}+GC^{2}=\\left|\\vec A\\right|^{2}+\\left|\\vec B\\right|^{2}+\\left|\\vec C\\right|^{2} ,$$ получаем **формулу Лейбница** $$PA^{2}+PB^{2}+PC^{2}=3\\,PG^{2}+Q .$$\n\n**Вывод.** Условие $PA^{2}+PB^{2}+PC^{2}=k$ равносильно $$PG^{2}=\\frac{k-Q}{3} .$$\n\nЕсли $k>Q$ — это окружность с центром $G$ и радиусом $\\sqrt{\\tfrac{k-Q}{3}}$; если $k=Q$ — единственная точка $G$; если $k<Q$ — решений нет. $\\blacksquare$\n\n**Следствие.** Минимум суммы $PA^{2}+PB^{2}+PC^{2}$ достигается ровно в центроиде и равен $Q$.\n\n**Проверка** для треугольника $(0,0)$, $(3,0)$, $(0,3)$: центроид $(1,1)$, $$Q=2+ (4+1)+(1+4)=12 ,$$ и, скажем, в точке $(0,0)$ сумма равна $0+9+9=18=3\\cdot2+12$ ✓ (ведь $PG^{2}=2$).",
    "en": "Place the origin at the centroid $G$, so that $$\\vec A+\\vec B+\\vec C=\\vec 0 .$$\n\n**Compute the sum of squares.** For a point $P$ with position vector $\\vec p$, $$PA^{2}=\\left|\\vec p-\\vec A\\right|^{2}=|\\vec p|^{2}-2\\,\\vec p\\cdot\\vec A+\\left|\\vec A\\right|^{2} ,$$ and likewise for $B$ and $C$. Adding the three, $$PA^{2}+PB^{2}+PC^{2}=3|\\vec p|^{2}-2\\,\\vec p\\cdot\\underbrace{\\left(\\vec A+\\vec B+\\vec C\\right)}_{=\\vec 0}+\\left(\\left|\\vec A\\right|^{2}+\\left|\\vec B\\right|^{2}+\\left|\\vec C\\right|^{2}\\right).$$\n\nThe middle term vanishes, and writing $$Q=GA^{2}+GB^{2}+GC^{2} ,$$ we obtain **Leibniz’s formula** $$PA^{2}+PB^{2}+PC^{2}=3\\,PG^{2}+Q .$$\n\n**Conclusion.** The condition $PA^{2}+PB^{2}+PC^{2}=k$ is equivalent to $$PG^{2}=\\frac{k-Q}{3} .$$\n\nIf $k>Q$ this is a circle centred at $G$ of radius $\\sqrt{\\tfrac{k-Q}{3}}$; if $k=Q$ it is the single point $G$; if $k<Q$ it is empty. $\\blacksquare$\n\n**Corollary.** The minimum of $PA^{2}+PB^{2}+PC^{2}$ is attained exactly at the centroid and equals $Q$.\n\n**Check** for $(0,0)$, $(3,0)$, $(0,3)$: the centroid is $(1,1)$, $Q=12$, and at $P=(0,0)$ the sum is $0+9+9=18=3\\cdot2+12$ ✓ (since $PG^{2}=2$)."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что окружность, проходящая через три неколлинеарные точки, задаётся уравнением $$\\begin{vmatrix}x^{2}+y^{2}&x&y&1\\\\ x_1^{2}+y_1^{2}&x_1&y_1&1\\\\ x_2^{2}+y_2^{2}&x_2&y_2&1\\\\ x_3^{2}+y_3^{2}&x_3&y_3&1\\end{vmatrix}=0 .$$",
    "en": "Prove that the circle through three non-collinear points is given by $$\\begin{vmatrix}x^{2}+y^{2}&x&y&1\\\\ x_1^{2}+y_1^{2}&x_1&y_1&1\\\\ x_2^{2}+y_2^{2}&x_2&y_2&1\\\\ x_3^{2}+y_3^{2}&x_3&y_3&1\\end{vmatrix}=0 .$$"
   },
   "hint": {
    "ru": "Разложите определитель по первой строке.",
    "en": "Expand the determinant along the first row."
   },
   "sol": {
    "ru": "**Шаг 1: что за уравнение получается.** Разложим определитель по первой строке: $$A\\left(x^{2}+y^{2}\\right)-Bx+Cy-D=0 ,$$ где $A$, $B$, $C$, $D$ — миноры, зависящие только от трёх данных точек. Это уравнение вида $$A\\left(x^{2}+y^{2}\\right)+\\alpha x+\\beta y+\\gamma=0 ,$$ то есть уравнение окружности при $A\\ne0$ (и прямой при $A=0$).\n\n**Шаг 2: $A\\ne0$.** Минор $A$ равен $$\\begin{vmatrix}x_1&y_1&1\\\\ x_2&y_2&1\\\\ x_3&y_3&1\\end{vmatrix} ,$$ а это удвоенная ориентированная площадь треугольника на трёх точках. Точки не лежат на одной прямой, значит площадь ненулевая, и $A\\ne0$ ✓\n\n**Шаг 3: три точки удовлетворяют уравнению.** Подставив $\\left(x,y\\right)=\\left(x_1,y_1\\right)$, получим определитель с двумя одинаковыми строками — он равен нулю ✓ То же для двух других точек.\n\n**Шаг 4: единственность.** Окружность через три неколлинеарные точки единственна (её центр — точка пересечения серединных перпендикуляров), значит найденное уравнение задаёт именно её. $\\blacksquare$\n\n**Пример.** Для точек $(0,0)$, $(4,0)$, $(0,3)$ раскрытие даёт $$x^{2}+y^{2}-4x-3y=0 ,$$ то есть окружность с центром $\\left(2;\\ 1{,}5\\right)$ и радиусом $2{,}5$ — как и должно быть у прямоугольного треугольника с гипотенузой $5$ ✓\n\n**Замечание.** При $A=0$ определитель задаёт прямую через три коллинеарные точки — «окружность бесконечного радиуса».",
    "en": "**Step 1: what equation this is.** Expand along the first row: $$A\\left(x^{2}+y^{2}\\right)+\\alpha x+\\beta y+\\gamma=0 ,$$ where $A,\\alpha,\\beta,\\gamma$ are minors depending only on the three given points. For $A\\ne0$ this is the equation of a circle (and of a line when $A=0$).\n\n**Step 2: $A\\ne0$.** The minor $A$ equals $$\\begin{vmatrix}x_1&y_1&1\\\\ x_2&y_2&1\\\\ x_3&y_3&1\\end{vmatrix} ,$$ twice the signed area of the triangle on the three points. They are not collinear, so the area is non-zero and $A\\ne0$ ✓\n\n**Step 3: the three points satisfy it.** Substituting $\\left(x,y\\right)=\\left(x_1,y_1\\right)$ produces a determinant with two equal rows, hence zero ✓ Likewise for the other two.\n\n**Step 4: uniqueness.** The circle through three non-collinear points is unique (its centre is the meeting point of the perpendicular bisectors), so this equation describes exactly that circle. $\\blacksquare$\n\n**Example.** For $(0,0)$, $(4,0)$, $(0,3)$ the expansion gives $$x^{2}+y^{2}-4x-3y=0 ,$$ the circle with centre $(2,\\ 1.5)$ and radius $2.5$ — as it must be for a right triangle with hypotenuse $5$ ✓\n\n**Remark.** When $A=0$ the determinant describes the line through three collinear points — a \"circle of infinite radius\"."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите координатами, что для медиан треугольника $$m_a^{2}+m_b^{2}+m_c^{2}=\\frac34\\left(a^{2}+b^{2}+c^{2}\\right).$$",
    "en": "Prove by coordinates that the medians of a triangle satisfy $$m_a^{2}+m_b^{2}+m_c^{2}=\\frac34\\left(a^{2}+b^{2}+c^{2}\\right).$$"
   },
   "hint": {
    "ru": "Поместите начало координат в центроид и воспользуйтесь тем, что $AG=\\tfrac23m_a$.",
    "en": "Put the origin at the centroid and use $AG=\\tfrac23m_a$."
   },
   "sol": {
    "ru": "Поместим начало координат в центроид $G$, так что $$\\vec A+\\vec B+\\vec C=\\vec0 .$$\n\n**Медианы через расстояния до центроида.** Центроид делит медиану в отношении $2:1$, поэтому $$\\left|\\vec A\\right|=GA=\\frac23m_a ,$$ и аналогично для $B$, $C$. Значит $$m_a^{2}+m_b^{2}+m_c^{2}=\\frac94\\left(\\left|\\vec A\\right|^{2}+\\left|\\vec B\\right|^{2}+\\left|\\vec C\\right|^{2}\\right).$$\n\n**Стороны через те же векторы.** $$a^{2}=\\left|\\vec B-\\vec C\\right|^{2}=\\left|\\vec B\\right|^{2}+\\left|\\vec C\\right|^{2}-2\\,\\vec B\\cdot\\vec C ,$$ и аналогично для $b^{2}$, $c^{2}$. Складывая, $$a^{2}+b^{2}+c^{2}=2\\left(\\left|\\vec A\\right|^{2}+\\left|\\vec B\\right|^{2}+\\left|\\vec C\\right|^{2}\\right)-2\\left(\\vec A\\cdot\\vec B+\\vec B\\cdot\\vec C+\\vec C\\cdot\\vec A\\right).$$\n\n**Убираем скалярные произведения.** Возведём равенство $\\vec A+\\vec B+\\vec C=\\vec0$ в квадрат: $$\\left|\\vec A\\right|^{2}+\\left|\\vec B\\right|^{2}+\\left|\\vec C\\right|^{2}+2\\left(\\vec A\\cdot\\vec B+\\vec B\\cdot\\vec C+\\vec C\\cdot\\vec A\\right)=0 ,$$ откуда $$2\\left(\\vec A\\cdot\\vec B+\\vec B\\cdot\\vec C+\\vec C\\cdot\\vec A\\right)=-\\left(\\left|\\vec A\\right|^{2}+\\left|\\vec B\\right|^{2}+\\left|\\vec C\\right|^{2}\\right).$$\n\nПодставим: обозначив $Q=\\left|\\vec A\\right|^{2}+\\left|\\vec B\\right|^{2}+\\left|\\vec C\\right|^{2}$, получаем $$a^{2}+b^{2}+c^{2}=2Q+Q=3Q .$$\n\n**Собираем.** $$m_a^{2}+m_b^{2}+m_c^{2}=\\frac94Q=\\frac94\\cdot\\frac{a^{2}+b^{2}+c^{2}}{3}=\\frac34\\left(a^{2}+b^{2}+c^{2}\\right). \\qquad\\blacksquare$$\n\n**Проверка** на равностороннем треугольнике со стороной $1$: медиана равна $\\tfrac{\\sqrt3}{2}$, слева $3\\cdot\\tfrac34=\\tfrac94$, справа $\\tfrac34\\cdot3=\\tfrac94$ ✓",
    "en": "Put the origin at the centroid $G$, so that $$\\vec A+\\vec B+\\vec C=\\vec0 .$$\n\n**Medians via distances to the centroid.** The centroid divides a median $2:1$, so $$\\left|\\vec A\\right|=GA=\\frac23m_a ,$$ and likewise for $B$, $C$. Hence $$m_a^{2}+m_b^{2}+m_c^{2}=\\frac94\\left(\\left|\\vec A\\right|^{2}+\\left|\\vec B\\right|^{2}+\\left|\\vec C\\right|^{2}\\right).$$\n\n**Sides via the same vectors.** $$a^{2}=\\left|\\vec B-\\vec C\\right|^{2}=\\left|\\vec B\\right|^{2}+\\left|\\vec C\\right|^{2}-2\\,\\vec B\\cdot\\vec C ,$$ and similarly for $b^{2}$, $c^{2}$. Adding, $$a^{2}+b^{2}+c^{2}=2Q-2\\left(\\vec A\\cdot\\vec B+\\vec B\\cdot\\vec C+\\vec C\\cdot\\vec A\\right),\\qquad Q=\\left|\\vec A\\right|^{2}+\\left|\\vec B\\right|^{2}+\\left|\\vec C\\right|^{2} .$$\n\n**Remove the dot products.** Squaring $\\vec A+\\vec B+\\vec C=\\vec0$: $$Q+2\\left(\\vec A\\cdot\\vec B+\\vec B\\cdot\\vec C+\\vec C\\cdot\\vec A\\right)=0 ,$$ so $2\\left(\\vec A\\cdot\\vec B+\\vec B\\cdot\\vec C+\\vec C\\cdot\\vec A\\right)=-Q$ and $$a^{2}+b^{2}+c^{2}=2Q+Q=3Q .$$\n\n**Combine.** $$m_a^{2}+m_b^{2}+m_c^{2}=\\frac94Q=\\frac94\\cdot\\frac{a^{2}+b^{2}+c^{2}}{3}=\\frac34\\left(a^{2}+b^{2}+c^{2}\\right). \\qquad\\blacksquare$$\n\n**Check** on the equilateral triangle of side $1$: each median is $\\tfrac{\\sqrt3}{2}$, the left side is $\\tfrac94$ and the right $\\tfrac34\\cdot3=\\tfrac94$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что уравнение $$Ax^{2}+Bxy+Cy^{2}+Dx+Ey+F=0$$ задаёт окружность тогда и только тогда, когда $B=0$, $A=C\\ne0$ и $D^{2}+E^{2}-4AF>0$; найдите центр и радиус.",
    "en": "Prove that $$Ax^{2}+Bxy+Cy^{2}+Dx+Ey+F=0$$ describes a circle if and only if $B=0$, $A=C\\ne0$ and $D^{2}+E^{2}-4AF>0$; find the centre and radius."
   },
   "hint": {
    "ru": "Уравнение окружности после раскрытия скобок имеет строго определённый вид.",
    "en": "Expanding a circle equation produces a very specific shape."
   },
   "sol": {
    "ru": "**Необходимость.** Окружность с центром $\\left(x_0,y_0\\right)$ и радиусом $R>0$ задаётся уравнением $$\\left(x-x_0\\right)^{2}+\\left(y-y_0\\right)^{2}=R^{2} .$$ Раскрыв скобки и домножив на произвольное $A\\ne0$, получаем $$Ax^{2}+Ay^{2}-2Ax_0x-2Ay_0y+A\\left(x_0^{2}+y_0^{2}-R^{2}\\right)=0 .$$ Здесь коэффициент при $xy$ равен нулю, а коэффициенты при $x^{2}$ и $y^{2}$ совпадают ✓\n\n**Достаточность и формулы.** Пусть $B=0$ и $A=C\\ne0$. Поделим на $A$: $$x^{2}+y^{2}+\\frac DA x+\\frac EA y+\\frac FA=0 .$$\n\nВыделим полные квадраты: $$\\left(x+\\frac{D}{2A}\\right)^{2}+\\left(y+\\frac{E}{2A}\\right)^{2}=\\frac{D^{2}}{4A^{2}}+\\frac{E^{2}}{4A^{2}}-\\frac FA=\\frac{D^{2}+E^{2}-4AF}{4A^{2}} .$$\n\nПравая часть должна быть положительной — это и есть условие $D^{2}+E^{2}-4AF>0$. Тогда $$\\text{центр}\\ \\left(-\\frac{D}{2A},\\ -\\frac{E}{2A}\\right),\\qquad R=\\frac{\\sqrt{D^{2}+E^{2}-4AF}}{2|A|} . \\qquad\\blacksquare$$\n\n**Вырожденные случаи.** Если $D^{2}+E^{2}-4AF=0$, уравнению удовлетворяет ровно одна точка (окружность нулевого радиуса); если выражение отрицательно — ни одной.\n\n**Пример.** $x^{2}+y^{2}-6x+8y-11=0$: центр $(3,-4)$, $$R=\\frac{\\sqrt{36+64+44}}{2}=\\frac{\\sqrt{144}}{2}=6 \\quad\\checkmark$$",
    "en": "**Necessity.** The circle with centre $\\left(x_0,y_0\\right)$ and radius $R>0$ satisfies $$\\left(x-x_0\\right)^{2}+\\left(y-y_0\\right)^{2}=R^{2} .$$ Expanding and multiplying by any $A\\ne0$, $$Ax^{2}+Ay^{2}-2Ax_0x-2Ay_0y+A\\left(x_0^{2}+y_0^{2}-R^{2}\\right)=0 ,$$ where the $xy$ coefficient is zero and the $x^{2}$, $y^{2}$ coefficients agree ✓\n\n**Sufficiency and the formulas.** Suppose $B=0$ and $A=C\\ne0$. Divide by $A$: $$x^{2}+y^{2}+\\frac DA x+\\frac EA y+\\frac FA=0 .$$\n\nComplete the squares: $$\\left(x+\\frac{D}{2A}\\right)^{2}+\\left(y+\\frac{E}{2A}\\right)^{2}=\\frac{D^{2}+E^{2}-4AF}{4A^{2}} .$$\n\nThe right side must be positive — exactly the condition $D^{2}+E^{2}-4AF>0$. Then $$\\text{centre}\\ \\left(-\\frac{D}{2A},\\ -\\frac{E}{2A}\\right),\\qquad R=\\frac{\\sqrt{D^{2}+E^{2}-4AF}}{2|A|} . \\qquad\\blacksquare$$\n\n**Degenerate cases.** If $D^{2}+E^{2}-4AF=0$ exactly one point satisfies the equation (a circle of zero radius); if the expression is negative, none does.\n\n**Example.** $x^{2}+y^{2}-6x+8y-11=0$: centre $(3,-4)$ and $$R=\\frac{\\sqrt{36+64+44}}{2}=6 \\quad\\checkmark$$"
   }
  }
 ]
};
