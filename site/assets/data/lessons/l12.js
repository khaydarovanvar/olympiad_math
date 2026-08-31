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
  }
 ]
};
