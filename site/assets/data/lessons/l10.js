/* Topic 10 — generated from content/lesson_10.py, do not edit by hand. */
window.LESSONS = window.LESSONS || {};
window.LESSONS[10] = {
 "n": 10,
 "cat": "geo",
 "title": {
  "ru": "Площади и метод площадей",
  "en": "Areas and the area method"
 },
 "sub": {
  "ru": "Формулы площади, отношения площадей как главный инструмент, теорема Чевы и формула Пика.",
  "en": "Area formulas, ratios of areas as the main tool, Ceva’s theorem and Pick’s formula."
 },
 "goals": {
  "ru": [
   "Знать формулы площади треугольника, параллелограмма, трапеции и формулу Герона.",
   "Находить отношения площадей через общую высоту и через общий угол.",
   "Доказывать геометрические утверждения методом площадей, включая теорему Чевы.",
   "Считать площадь многоугольника на клетчатой бумаге по формуле Пика."
  ],
  "en": [
   "Know the area formulas for triangle, parallelogram and trapezium, and Heron’s formula.",
   "Find ratios of areas using a common height and using a common angle.",
   "Prove geometric statements by the area method, Ceva’s theorem included.",
   "Compute the area of a lattice polygon by Pick’s formula."
  ]
 },
 "sections": [
  {
   "h": {
    "ru": "Формулы, которые надо знать",
    "en": "The formulas to know"
   },
   "blocks": [
    {
     "t": "table",
     "head": {
      "ru": [
       "Фигура",
       "Площадь",
       "Когда удобно"
      ],
      "en": [
       "Figure",
       "Area",
       "When it is handy"
      ]
     },
     "rows": {
      "ru": [
       [
        "треугольник",
        "$S=\\dfrac{a\\,h_a}{2}$",
        "известны сторона и высота к ней"
       ],
       [
        "треугольник",
        "$S=\\dfrac{1}{2}ab\\sin\\gamma$",
        "известны две стороны и угол между ними"
       ],
       [
        "треугольник",
        "$S=\\sqrt{p(p-a)(p-b)(p-c)}$",
        "известны три стороны ($p$ — полупериметр)"
       ],
       [
        "треугольник",
        "$S=pr$",
        "известен радиус вписанной окружности"
       ],
       [
        "параллелограмм",
        "$S=a\\,h_a=ab\\sin\\gamma$",
        "всегда"
       ],
       [
        "трапеция",
        "$S=\\dfrac{a+b}{2}\\,h$",
        "средняя линия, умноженная на высоту"
       ],
       [
        "ромб, любой четырёхугольник",
        "$S=\\dfrac{1}{2}d_1d_2\\sin\\varphi$",
        "известны диагонали и угол между ними"
       ]
      ],
      "en": [
       [
        "triangle",
        "$S=\\dfrac{a\\,h_a}{2}$",
        "a side and its altitude are known"
       ],
       [
        "triangle",
        "$S=\\dfrac{1}{2}ab\\sin\\gamma$",
        "two sides and the angle between them"
       ],
       [
        "triangle",
        "$S=\\sqrt{p(p-a)(p-b)(p-c)}$",
        "three sides ($p$ is the semiperimeter)"
       ],
       [
        "triangle",
        "$S=pr$",
        "the inradius is known"
       ],
       [
        "parallelogram",
        "$S=a\\,h_a=ab\\sin\\gamma$",
        "always"
       ],
       [
        "trapezium",
        "$S=\\dfrac{a+b}{2}\\,h$",
        "midline times height"
       ],
       [
        "rhombus, any quadrilateral",
        "$S=\\dfrac{1}{2}d_1d_2\\sin\\varphi$",
        "the diagonals and the angle between them"
       ]
      ]
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Формула $S=\\tfrac12d_1d_2\\sin\\varphi$ верна для **любого** четырёхугольника, диагонали которого пересекаются, — не только для ромба. Для ромба и квадрата $\\varphi=90^\\circ$, поэтому $S=\\tfrac12d_1d_2$.",
      "en": "The formula $S=\\tfrac12d_1d_2\\sin\\varphi$ holds for **any** quadrilateral whose diagonals meet — not only for a rhombus. For a rhombus or a square $\\varphi=90^\\circ$, so $S=\\tfrac12d_1d_2$."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите площадь треугольника со сторонами $13$, $14$ и $15$.",
      "en": "Find the area of a triangle with sides $13$, $14$ and $15$."
     },
     "steps": {
      "ru": [
       "Полупериметр: $p=\\dfrac{13+14+15}{2}=21$.",
       "По формуле Герона $$S=\\sqrt{21\\,(21-13)(21-14)(21-15)}=\\sqrt{21\\cdot8\\cdot7\\cdot6}.$$",
       "Считаем под корнем: $21\\cdot6=126$, $8\\cdot7=56$, и $126\\cdot56=7056$.",
       "$\\sqrt{7056}=84$, потому что $84^{2}=7056$."
      ],
      "en": [
       "Semiperimeter: $p=\\dfrac{13+14+15}{2}=21$.",
       "Heron’s formula gives $$S=\\sqrt{21\\,(21-13)(21-14)(21-15)}=\\sqrt{21\\cdot8\\cdot7\\cdot6}.$$",
       "Under the root: $21\\cdot6=126$, $8\\cdot7=56$, and $126\\cdot56=7056$.",
       "$\\sqrt{7056}=84$, since $84^{2}=7056$."
      ]
     },
     "ans": {
      "ru": "$S=84$.",
      "en": "$S=84$."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Отношения площадей — главный инструмент",
    "en": "Ratios of areas — the main tool"
   },
   "blocks": [
    {
     "t": "idea",
     "text": {
      "ru": "В олимпиадной задаче площадь редко нужно **вычислять**. Гораздо чаще нужно **сравнить** две площади. Для этого хватает двух правил, и оба следуют прямо из формулы $S=\\tfrac12ah$.",
      "en": "In an olympiad problem an area rarely needs to be **computed**. Far more often two areas need to be **compared**. Two rules suffice, and both follow straight from $S=\\tfrac12ah$."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Правило общей высоты",
      "en": "The common-height rule"
     },
     "text": {
      "ru": "Если у двух треугольников основания лежат на одной прямой, а вершина общая, то их площади относятся как основания: $$\\frac{S_{ABD}}{S_{ADC}}=\\frac{BD}{DC}.$$",
      "en": "If two triangles have their bases on one line and share the opposite vertex, their areas are in the ratio of the bases: $$\\frac{S_{ABD}}{S_{ADC}}=\\frac{BD}{DC}.$$"
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 400 260\" role=\"img\" aria-label=\"Two triangles with a common apex and bases on one line\">\n<path class=\"dsh\" d=\"M200 50 V214\"/>\n<path class=\"ln\" d=\"M50 210 L350 210 L200 50 Z\"/>\n<path class=\"lnc\" d=\"M200 50 L180 210\"/>\n<circle class=\"pt\" cx=\"200\" cy=\"50\" r=\"3.5\"/><circle class=\"pt\" cx=\"50\" cy=\"210\" r=\"3.5\"/>\n<circle class=\"pt\" cx=\"350\" cy=\"210\" r=\"3.5\"/><circle class=\"ptc\" cx=\"180\" cy=\"210\" r=\"3.5\"/>\n<text x=\"194\" y=\"34\">A</text><text x=\"34\" y=\"230\">B</text><text x=\"356\" y=\"230\">C</text>\n<text class=\"acc\" x=\"172\" y=\"232\">D</text><text class=\"sm\" x=\"208\" y=\"140\">h</text>\n</svg>",
     "cap": {
      "ru": "У треугольников $ABD$ и $ADC$ одна и та же высота $h$ из вершины $A$, поэтому их площади относятся как $BD:DC$.",
      "en": "The triangles $ABD$ and $ADC$ have the same altitude $h$ from $A$, so their areas are in the ratio $BD:DC$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Высота из вершины $A$ к прямой $BC$ — одна и та же для обоих треугольников; обозначим её $h$. Тогда $$S_{ABD}=\\frac{BD\\cdot h}{2},\\qquad S_{ADC}=\\frac{DC\\cdot h}{2},$$ и при делении $h$ сокращается. $\\blacksquare$",
      "en": "The altitude from $A$ to the line $BC$ is the same for both triangles; call it $h$. Then $$S_{ABD}=\\frac{BD\\cdot h}{2},\\qquad S_{ADC}=\\frac{DC\\cdot h}{2},$$ and dividing cancels $h$. $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Правило общего угла",
      "en": "The common-angle rule"
     },
     "text": {
      "ru": "Если точки $M$ и $N$ лежат на сторонах $AB$ и $AC$ треугольника $ABC$, то $$\\frac{S_{AMN}}{S_{ABC}}=\\frac{AM}{AB}\\cdot\\frac{AN}{AC}.$$",
      "en": "If $M$ and $N$ lie on the sides $AB$ and $AC$ of a triangle $ABC$, then $$\\frac{S_{AMN}}{S_{ABC}}=\\frac{AM}{AB}\\cdot\\frac{AN}{AC}.$$"
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 400 260\" role=\"img\" aria-label=\"Two triangles sharing an angle\">\n<path class=\"ln\" d=\"M60 215 L350 215 L250 55 Z\"/>\n<path class=\"lnc\" d=\"M195 215 L155 130\"/>\n<circle class=\"pt\" cx=\"60\" cy=\"215\" r=\"3.5\"/><circle class=\"pt\" cx=\"350\" cy=\"215\" r=\"3.5\"/>\n<circle class=\"pt\" cx=\"250\" cy=\"55\" r=\"3.5\"/>\n<circle class=\"ptc\" cx=\"195\" cy=\"215\" r=\"3.5\"/><circle class=\"ptc\" cx=\"155\" cy=\"130\" r=\"3.5\"/>\n<text x=\"44\" y=\"235\">A</text><text x=\"356\" y=\"235\">B</text><text x=\"256\" y=\"42\">C</text>\n<text class=\"acc\" x=\"188\" y=\"237\">M</text><text class=\"acc\" x=\"126\" y=\"126\">N</text>\n</svg>",
     "cap": {
      "ru": "Треугольники $AMN$ и $ABC$ имеют общий угол $A$; отношение площадей равно произведению отношений сторон, прилежащих к этому углу.",
      "en": "The triangles $AMN$ and $ABC$ share the angle $A$; the ratio of areas is the product of the ratios of the sides at that angle."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Воспользуемся формулой $S=\\tfrac12\\,xy\\sin\\alpha$, где $x,y$ — стороны при угле $\\alpha$: $$\\frac{S_{AMN}}{S_{ABC}}=\\frac{\\frac12\\,AM\\cdot AN\\sin A}{\\frac12\\,AB\\cdot AC\\sin A}=\\frac{AM}{AB}\\cdot\\frac{AN}{AC},$$ поскольку $\\sin A$ сокращается. $\\blacksquare$\n\n*Без синусов* это можно получить в два шага: сначала сравнить $S_{AMN}$ и $S_{ABN}$ (общая вершина $N$, основания на прямой $AB$), потом $S_{ABN}$ и $S_{ABC}$ (общая вершина $B$, основания на прямой $AC$).",
      "en": "Use $S=\\tfrac12\\,xy\\sin\\alpha$ where $x,y$ are the sides at the angle $\\alpha$: $$\\frac{S_{AMN}}{S_{ABC}}=\\frac{\\frac12\\,AM\\cdot AN\\sin A}{\\frac12\\,AB\\cdot AC\\sin A}=\\frac{AM}{AB}\\cdot\\frac{AN}{AC},$$ since $\\sin A$ cancels. $\\blacksquare$\n\n*Without sines* the same follows in two steps: compare $S_{AMN}$ with $S_{ABN}$ (common vertex $N$, bases on the line $AB$), then $S_{ABN}$ with $S_{ABC}$ (common vertex $B$, bases on the line $AC$)."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "На сторонах $AB$ и $AC$ треугольника $ABC$ отмечены точки $M$ и $N$ так, что $AM:MB=1:2$ и $AN:NC=3:1$. Какую долю площади треугольника $ABC$ составляет площадь треугольника $AMN$?",
      "en": "Points $M$ and $N$ on the sides $AB$ and $AC$ of a triangle $ABC$ satisfy $AM:MB=1:2$ and $AN:NC=3:1$. What fraction of the area of $ABC$ is the area of $AMN$?"
     },
     "steps": {
      "ru": [
       "Из $AM:MB=1:2$ следует $AM:AB=1:3$.",
       "Из $AN:NC=3:1$ следует $AN:AC=3:4$.",
       "По правилу общего угла $$\\frac{S_{AMN}}{S_{ABC}}=\\frac13\\cdot\\frac34=\\frac14 .$$"
      ],
      "en": [
       "From $AM:MB=1:2$ we get $AM:AB=1:3$.",
       "From $AN:NC=3:1$ we get $AN:AC=3:4$.",
       "By the common-angle rule $$\\frac{S_{AMN}}{S_{ABC}}=\\frac13\\cdot\\frac34=\\frac14 .$$"
      ]
     },
     "ans": {
      "ru": "Ровно четверть.",
      "en": "Exactly one quarter."
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Отношение $AM:MB=1:2$ и отношение $AM:AB=1:2$ — **разные** вещи. В первом случае $AM$ составляет треть стороны, во втором — половину. Половина ошибок в задачах на площади рождается именно здесь: выписывайте отношение к **целой** стороне отдельной строкой.",
      "en": "The ratio $AM:MB=1:2$ and the ratio $AM:AB=1:2$ are **different** things. In the first, $AM$ is a third of the side; in the second, a half. Half of all area-problem mistakes are born here: write the ratio to the **whole** side on its own line."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Метод площадей",
    "en": "The area method"
   },
   "blocks": [
    {
     "t": "idea",
     "text": {
      "ru": "**Метод площадей** — это доказательство геометрического факта через сравнение площадей. Схема обычно такая: одну и ту же площадь считают двумя способами, либо разбивают фигуру на части и складывают. Метод особенно хорош там, где прямой счёт углов не идёт.",
      "en": "The **area method** proves a geometric fact by comparing areas. The pattern is usually one of two: compute the same area in two ways, or split a figure into pieces and add. It is at its best where angle chasing stalls."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Медианы делят треугольник на шесть равновеликих частей",
      "en": "The medians cut a triangle into six equal-area pieces"
     },
     "text": {
      "ru": "Три медианы разбивают треугольник на шесть треугольников, площади которых равны между собой и составляют $\\tfrac16$ площади исходного.",
      "en": "The three medians split a triangle into six triangles of equal area, each one sixth of the whole."
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 400 260\" role=\"img\" aria-label=\"The three medians cut a triangle into six equal-area pieces\">\n<path class=\"ln\" d=\"M200 40 L50 220 L350 220 Z\"/>\n<path class=\"lnc\" d=\"M200 40 L200 220\"/><path class=\"lnc\" d=\"M50 220 L275 130\"/>\n<path class=\"lnc\" d=\"M350 220 L125 130\"/>\n<circle class=\"pt\" cx=\"200\" cy=\"40\" r=\"3.5\"/><circle class=\"pt\" cx=\"50\" cy=\"220\" r=\"3.5\"/>\n<circle class=\"pt\" cx=\"350\" cy=\"220\" r=\"3.5\"/>\n<circle class=\"ptc\" cx=\"200\" cy=\"220\" r=\"3.5\"/><circle class=\"ptc\" cx=\"275\" cy=\"130\" r=\"3.5\"/>\n<circle class=\"ptc\" cx=\"125\" cy=\"130\" r=\"3.5\"/><circle class=\"ptc\" cx=\"200\" cy=\"160\" r=\"4.5\"/>\n<text x=\"194\" y=\"26\">A</text><text x=\"32\" y=\"240\">B</text><text x=\"356\" y=\"240\">C</text>\n<text class=\"acc\" x=\"194\" y=\"242\">M</text><text class=\"acc\" x=\"284\" y=\"126\">N</text>\n<text class=\"acc\" x=\"98\" y=\"126\">K</text><text class=\"acc\" x=\"208\" y=\"156\">G</text>\n</svg>",
     "cap": {
      "ru": "Медианы $AM$, $BN$ и $CK$ пересекаются в точке $G$ и разбивают треугольник на шесть равновеликих частей.",
      "en": "The medians $AM$, $BN$ and $CK$ meet at $G$ and cut the triangle into six pieces of equal area."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Обозначим $S=S_{ABC}$ и пусть $G$ — точка пересечения медиан.\n\n**Шаг 1.** Медиана $AM$ делит треугольник на две части равной площади $\\tfrac S2$: у треугольников $ABM$ и $AMC$ основания $BM=MC$ и общая высота из $A$.\n\n**Шаг 2.** В треугольнике $ABM$ отрезок $GM$ отсекает треугольник $BGM$. Треугольники $ABG$ и $BGM$ имеют общую вершину $B$ и основания $AG$ и $GM$ на одной прямой, причём $AG:GM=2:1$. Значит $$S_{ABG}=2\\,S_{BGM},$$ и вместе они дают $\\tfrac S2$. Отсюда $$S_{BGM}=\\frac{S}{6},\\qquad S_{ABG}=\\frac{S}{3}.$$\n\n**Шаг 3.** То же рассуждение в треугольнике $AMC$ даёт $S_{CGM}=\\tfrac S6$, и точно так же для двух других медиан получаются ещё четыре треугольника площади $\\tfrac S6$.\n\nШесть частей, каждая площади $\\tfrac S6$, в сумме дают $S$ — значит других частей нет. $\\blacksquare$",
      "en": "Write $S=S_{ABC}$ and let $G$ be the centroid.\n\n**Step 1.** The median $AM$ halves the area: the triangles $ABM$ and $AMC$ have equal bases $BM=MC$ and a common altitude from $A$, so each has area $\\tfrac S2$.\n\n**Step 2.** Inside $ABM$, the segment $GM$ cuts off the triangle $BGM$. The triangles $ABG$ and $BGM$ share the vertex $B$ and have bases $AG$ and $GM$ on one line with $AG:GM=2:1$. Hence $$S_{ABG}=2\\,S_{BGM},$$ and together they make $\\tfrac S2$. Therefore $$S_{BGM}=\\frac{S}{6},\\qquad S_{ABG}=\\frac{S}{3}.$$\n\n**Step 3.** The same argument in $AMC$ gives $S_{CGM}=\\tfrac S6$, and likewise the other two medians produce four more triangles of area $\\tfrac S6$.\n\nSix pieces of area $\\tfrac S6$ add up to $S$ — so there are no others. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Диагонали трапеции $ABCD$ (где $BC\\parallel AD$) пересекаются в точке $O$. Известно, что $S_{BOC}=4$ и $S_{AOD}=9$. Найдите площадь трапеции.",
      "en": "The diagonals of a trapezium $ABCD$ (with $BC\\parallel AD$) meet at $O$. Given $S_{BOC}=4$ and $S_{AOD}=9$, find the area of the trapezium."
     },
     "steps": {
      "ru": [
       "Треугольники $BOC$ и $AOD$ подобны: углы при $O$ вертикальные, а $\\angle OBC=\\angle ODA$ — накрест лежащие при $BC\\parallel AD$.",
       "Отношение площадей равно квадрату коэффициента: $\\dfrac49=k^{2}$, значит $k=\\dfrac23$ и $\\dfrac{OC}{OA}=\\dfrac{OB}{OD}=\\dfrac23$.",
       "Теперь боковые треугольники. У $BOC$ и $AOB$ общая вершина $B$, а основания $OC$ и $OA$ лежат на одной прямой, поэтому $$\\frac{S_{AOB}}{S_{BOC}}=\\frac{OA}{OC}=\\frac32\\quad\\Longrightarrow\\quad S_{AOB}=6 .$$",
       "Точно так же $S_{COD}=6$.",
       "Складываем все четыре части: $4+9+6+6=25$."
      ],
      "en": [
       "The triangles $BOC$ and $AOD$ are similar: the angles at $O$ are vertical, and $\\angle OBC=\\angle ODA$ are alternate angles at $BC\\parallel AD$.",
       "The ratio of areas is the square of the ratio of sides: $\\dfrac49=k^{2}$, so $k=\\dfrac23$ and $\\dfrac{OC}{OA}=\\dfrac{OB}{OD}=\\dfrac23$.",
       "Now the side triangles. $BOC$ and $AOB$ share the vertex $B$, and the bases $OC$ and $OA$ lie on one line, so $$\\frac{S_{AOB}}{S_{BOC}}=\\frac{OA}{OC}=\\frac32\\quad\\Longrightarrow\\quad S_{AOB}=6 .$$",
       "In the same way $S_{COD}=6$.",
       "Adding the four pieces: $4+9+6+6=25$."
      ]
     },
     "ans": {
      "ru": "$S_{ABCD}=25$. *Общая формула:* $S=\\left(\\sqrt{S_1}+\\sqrt{S_2}\\right)^{2}$.",
      "en": "$S_{ABCD}=25$. *General formula:* $S=\\left(\\sqrt{S_1}+\\sqrt{S_2}\\right)^{2}$."
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 400 260\" role=\"img\" aria-label=\"A trapezium and its diagonals\">\n<path class=\"ln\" d=\"M60 220 L360 220 L300 70 L140 70 Z\"/>\n<path class=\"lnc\" d=\"M60 220 L300 70\"/><path class=\"lnc\" d=\"M140 70 L360 220\"/>\n<circle class=\"pt\" cx=\"60\" cy=\"220\" r=\"3.5\"/><circle class=\"pt\" cx=\"360\" cy=\"220\" r=\"3.5\"/>\n<circle class=\"pt\" cx=\"300\" cy=\"70\" r=\"3.5\"/><circle class=\"pt\" cx=\"140\" cy=\"70\" r=\"3.5\"/>\n<circle class=\"ptc\" cx=\"216\" cy=\"122\" r=\"4\"/>\n<text x=\"44\" y=\"240\">A</text><text x=\"364\" y=\"240\">D</text>\n<text x=\"306\" y=\"58\">C</text><text x=\"130\" y=\"58\">B</text>\n<text class=\"acc\" x=\"224\" y=\"118\">O</text>\n</svg>",
     "cap": {
      "ru": "Диагонали трапеции разбивают её на четыре треугольника; два «боковых» всегда равновелики.",
      "en": "The diagonals cut a trapezium into four triangles; the two \"side\" ones always have equal area."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Теорема Чевы",
    "en": "Ceva’s theorem"
   },
   "blocks": [
    {
     "t": "def",
     "name": {
      "ru": "Чевиана",
      "en": "Cevian"
     },
     "text": {
      "ru": "**Чевианой** называют отрезок, соединяющий вершину треугольника с точкой на противоположной стороне. Медиана, биссектриса и высота — частные случаи чевианы.",
      "en": "A **cevian** is a segment from a vertex of a triangle to a point on the opposite side. Medians, bisectors and altitudes are all cevians."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Теорема Чевы",
      "en": "Ceva’s theorem"
     },
     "text": {
      "ru": "Пусть точки $D$, $E$, $F$ лежат на сторонах $BC$, $CA$, $AB$ треугольника $ABC$. Чевианы $AD$, $BE$, $CF$ пересекаются в одной точке тогда и только тогда, когда $$\\frac{BD}{DC}\\cdot\\frac{CE}{EA}\\cdot\\frac{AF}{FB}=1 .$$",
      "en": "Let $D$, $E$, $F$ lie on the sides $BC$, $CA$, $AB$ of a triangle $ABC$. The cevians $AD$, $BE$, $CF$ meet at one point if and only if $$\\frac{BD}{DC}\\cdot\\frac{CE}{EA}\\cdot\\frac{AF}{FB}=1 .$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Необходимость.** Пусть чевианы пересекаются в точке $P$.\n\nПрименим правило общей высоты дважды к отношению $BD:DC$. Треугольники $ABD$ и $ACD$ имеют общую вершину $A$, поэтому $$\\frac{S_{ABD}}{S_{ACD}}=\\frac{BD}{DC}.$$ Треугольники $PBD$ и $PCD$ имеют общую вершину $P$, поэтому $$\\frac{S_{PBD}}{S_{PCD}}=\\frac{BD}{DC}.$$\n\nЕсли две дроби равны, то и дробь из разностей равна тому же (при ненулевом знаменателе): $$\\frac{S_{ABD}-S_{PBD}}{S_{ACD}-S_{PCD}}=\\frac{BD}{DC}.$$ Но $S_{ABD}-S_{PBD}=S_{ABP}$ и $S_{ACD}-S_{PCD}=S_{ACP}$, поэтому $$\\frac{S_{ABP}}{S_{ACP}}=\\frac{BD}{DC}.$$\n\nСовершенно так же $$\\frac{S_{BCP}}{S_{BAP}}=\\frac{CE}{EA},\\qquad \\frac{S_{CAP}}{S_{CBP}}=\\frac{AF}{FB}.$$\n\nПеремножим все три равенства. Справа получится искомое произведение, а слева каждая площадь встретится один раз в числителе и один раз в знаменателе, так что всё сократится и останется $1$. $\\blacksquare$\n\n**Достаточность.** Пусть произведение равно $1$. Проведём чевианы $AD$ и $BE$; они пересекаются в некоторой точке $P$. Проведём через $P$ отрезок $CF^{\\ast}$ (где $F^{\\ast}$ на $AB$). По доказанной части $$\\frac{BD}{DC}\\cdot\\frac{CE}{EA}\\cdot\\frac{AF^{\\ast}}{F^{\\ast}B}=1 .$$ Сравнивая с условием, получаем $\\dfrac{AF^{\\ast}}{F^{\\ast}B}=\\dfrac{AF}{FB}$. Но точка на отрезке $AB$ с заданным отношением ровно одна, значит $F^{\\ast}=F$, и все три чевианы проходят через $P$. $\\blacksquare$",
      "en": "**Necessity.** Suppose the cevians meet at a point $P$.\n\nApply the common-height rule twice to the ratio $BD:DC$. The triangles $ABD$ and $ACD$ share the vertex $A$, so $$\\frac{S_{ABD}}{S_{ACD}}=\\frac{BD}{DC}.$$ The triangles $PBD$ and $PCD$ share the vertex $P$, so $$\\frac{S_{PBD}}{S_{PCD}}=\\frac{BD}{DC}.$$\n\nWhen two fractions are equal, the fraction of their differences equals the same value (the denominator being non-zero): $$\\frac{S_{ABD}-S_{PBD}}{S_{ACD}-S_{PCD}}=\\frac{BD}{DC}.$$ But $S_{ABD}-S_{PBD}=S_{ABP}$ and $S_{ACD}-S_{PCD}=S_{ACP}$, so $$\\frac{S_{ABP}}{S_{ACP}}=\\frac{BD}{DC}.$$\n\nIn exactly the same way $$\\frac{S_{BCP}}{S_{BAP}}=\\frac{CE}{EA},\\qquad \\frac{S_{CAP}}{S_{CBP}}=\\frac{AF}{FB}.$$\n\nMultiply the three equalities. The right side is the required product, while on the left every area occurs once in a numerator and once in a denominator, so everything cancels and $1$ remains. $\\blacksquare$\n\n**Sufficiency.** Suppose the product equals $1$. Draw the cevians $AD$ and $BE$; they meet at some point $P$. Draw through $P$ the segment $CF^{\\ast}$ (with $F^{\\ast}$ on $AB$). By the part just proved, $$\\frac{BD}{DC}\\cdot\\frac{CE}{EA}\\cdot\\frac{AF^{\\ast}}{F^{\\ast}B}=1 .$$ Comparing with the hypothesis gives $\\dfrac{AF^{\\ast}}{F^{\\ast}B}=\\dfrac{AF}{FB}$. But a segment $AB$ has exactly one point with a given ratio, so $F^{\\ast}=F$ and all three cevians pass through $P$. $\\blacksquare$"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Теорема Чевы мгновенно доказывает три классических факта о пересечении в одной точке. Для **медиан** все три отношения равны $1$. Для **биссектрис** по свойству биссектрисы $$\\frac{BD}{DC}\\cdot\\frac{CE}{EA}\\cdot\\frac{AF}{FB}=\\frac{c}{b}\\cdot\\frac{a}{c}\\cdot\\frac{b}{a}=1 .$$ Для **высот** отношения выражаются через тангенсы и тоже дают единицу.",
      "en": "Ceva’s theorem instantly proves three classical concurrency facts. For the **medians** all three ratios are $1$. For the **bisectors**, the bisector property gives $$\\frac{BD}{DC}\\cdot\\frac{CE}{EA}\\cdot\\frac{AF}{FB}=\\frac{c}{b}\\cdot\\frac{a}{c}\\cdot\\frac{b}{a}=1 .$$ For the **altitudes** the ratios come out in terms of tangents and multiply to one as well."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Клетчатая бумага и формула Пика",
    "en": "Lattice paper and Pick’s formula"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Формула Пика",
      "en": "Pick’s formula"
     },
     "text": {
      "ru": "Пусть все вершины многоугольника лежат в узлах клетчатой бумаги со стороной клетки $1$. Обозначим через $I$ количество узлов **строго внутри** многоугольника, а через $B$ — количество узлов **на границе**. Тогда $$S=I+\\frac{B}{2}-1 .$$",
      "en": "Let every vertex of a polygon sit on a unit lattice. Write $I$ for the number of lattice points **strictly inside** the polygon and $B$ for the number **on its boundary**. Then $$S=I+\\frac{B}{2}-1 .$$"
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 390 335\" role=\"img\" aria-label=\"A lattice polygon for Pick formula\"><path class=\"lnc\" d=\"M 85 250 L 305 250 L 360 140 L 195 30 L 85 85 Z\"/><circle class=\"pt\" cx=\"30\" cy=\"305\" r=\"2.2\"/><circle class=\"pt\" cx=\"30\" cy=\"250\" r=\"2.2\"/><circle class=\"pt\" cx=\"30\" cy=\"195\" r=\"2.2\"/><circle class=\"pt\" cx=\"30\" cy=\"140\" r=\"2.2\"/><circle class=\"pt\" cx=\"30\" cy=\"85\" r=\"2.2\"/><circle class=\"pt\" cx=\"30\" cy=\"30\" r=\"2.2\"/><circle class=\"pt\" cx=\"85\" cy=\"305\" r=\"2.2\"/><circle class=\"ptc\" cx=\"85\" cy=\"250\" r=\"3.6\"/><circle class=\"ptc\" cx=\"85\" cy=\"195\" r=\"3.6\"/><circle class=\"ptc\" cx=\"85\" cy=\"140\" r=\"3.6\"/><circle class=\"ptc\" cx=\"85\" cy=\"85\" r=\"3.6\"/><circle class=\"pt\" cx=\"85\" cy=\"30\" r=\"2.2\"/><circle class=\"pt\" cx=\"140\" cy=\"305\" r=\"2.2\"/><circle class=\"ptc\" cx=\"140\" cy=\"250\" r=\"3.6\"/><circle class=\"pt\" cx=\"140\" cy=\"195\" r=\"2.2\"/><circle class=\"pt\" cx=\"140\" cy=\"140\" r=\"2.2\"/><circle class=\"pt\" cx=\"140\" cy=\"85\" r=\"2.2\"/><circle class=\"pt\" cx=\"140\" cy=\"30\" r=\"2.2\"/><circle class=\"pt\" cx=\"195\" cy=\"305\" r=\"2.2\"/><circle class=\"ptc\" cx=\"195\" cy=\"250\" r=\"3.6\"/><circle class=\"pt\" cx=\"195\" cy=\"195\" r=\"2.2\"/><circle class=\"pt\" cx=\"195\" cy=\"140\" r=\"2.2\"/><circle class=\"pt\" cx=\"195\" cy=\"85\" r=\"2.2\"/><circle class=\"ptc\" cx=\"195\" cy=\"30\" r=\"3.6\"/><circle class=\"pt\" cx=\"250\" cy=\"305\" r=\"2.2\"/><circle class=\"ptc\" cx=\"250\" cy=\"250\" r=\"3.6\"/><circle class=\"pt\" cx=\"250\" cy=\"195\" r=\"2.2\"/><circle class=\"pt\" cx=\"250\" cy=\"140\" r=\"2.2\"/><circle class=\"pt\" cx=\"250\" cy=\"85\" r=\"2.2\"/><circle class=\"pt\" cx=\"250\" cy=\"30\" r=\"2.2\"/><circle class=\"pt\" cx=\"305\" cy=\"305\" r=\"2.2\"/><circle class=\"ptc\" cx=\"305\" cy=\"250\" r=\"3.6\"/><circle class=\"pt\" cx=\"305\" cy=\"195\" r=\"2.2\"/><circle class=\"pt\" cx=\"305\" cy=\"140\" r=\"2.2\"/><circle class=\"pt\" cx=\"305\" cy=\"85\" r=\"2.2\"/><circle class=\"pt\" cx=\"305\" cy=\"30\" r=\"2.2\"/><circle class=\"pt\" cx=\"360\" cy=\"305\" r=\"2.2\"/><circle class=\"pt\" cx=\"360\" cy=\"250\" r=\"2.2\"/><circle class=\"pt\" cx=\"360\" cy=\"195\" r=\"2.2\"/><circle class=\"ptc\" cx=\"360\" cy=\"140\" r=\"3.6\"/><circle class=\"pt\" cx=\"360\" cy=\"85\" r=\"2.2\"/><circle class=\"pt\" cx=\"360\" cy=\"30\" r=\"2.2\"/></svg>",
     "cap": {
      "ru": "Здесь $B=10$ (жирные узлы на границе) и $I=11$, поэтому $S=11+5-1=15$.",
      "en": "Here $B=10$ (the bold points on the boundary) and $I=11$, so $S=11+5-1=15$."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Считая $B$, не забывайте узлы, лежащие **на сторонах**, а не только вершины. Сторона из точки $(x_1,y_1)$ в $(x_2,y_2)$ содержит ровно $\\gcd\\left(|x_2-x_1|,\\,|y_2-y_1|\\right)$ узлов, если считать один из концов. На рисунке нижняя сторона длины $4$ даёт четыре таких узла, левая сторона длины $3$ — три, а три оставшиеся стороны — по одному.",
      "en": "When counting $B$, remember the points **on the sides**, not just the vertices. A side from $(x_1,y_1)$ to $(x_2,y_2)$ contains exactly $\\gcd\\left(|x_2-x_1|,\\,|y_2-y_1|\\right)$ lattice points if one endpoint is counted. In the figure the bottom side of length $4$ contributes four, the left side of length $3$ contributes three, and the other three sides one each."
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Формула Пика — самый быстрый способ найти площадь «кривого» многоугольника на клетчатой бумаге: считать надо только точки. Второй способ — **достроение до прямоугольника**: описать вокруг фигуры прямоугольник и вычесть площади угловых прямоугольных треугольников. Полезно уметь оба и сверять ответы.",
      "en": "Pick’s formula is the fastest way to find the area of an awkward lattice polygon: you only count points. The other way is **completing to a rectangle**: circumscribe a rectangle and subtract the corner right triangles. It pays to know both and check one against the other."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Из формулы Пика следует, что площадь любого многоугольника с вершинами в узлах — число, кратное $\\tfrac12$. В частности, **правильный треугольник нельзя расположить так, чтобы все три его вершины попали в узлы решётки** — иначе его площадь $\\tfrac{\\sqrt3}{4}a^{2}$ была бы рациональной, а $a^{2}$ для решётки целое.",
      "en": "Pick’s formula shows that the area of any lattice polygon is a multiple of $\\tfrac12$. In particular, **an equilateral triangle cannot have all three vertices at lattice points** — otherwise its area $\\tfrac{\\sqrt3}{4}a^{2}$ would be rational, while $a^{2}$ is an integer for a lattice segment."
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
    "ru": "Основания трапеции равны $8$ и $12$, а высота равна $5$. Найдите её площадь и длину средней линии.",
    "en": "A trapezium has bases $8$ and $12$ and height $5$. Find its area and the length of its midline."
   },
   "hint": {
    "ru": "$S=\\dfrac{a+b}{2}h$.",
    "en": "$S=\\dfrac{a+b}{2}h$."
   },
   "sol": {
    "ru": "Средняя линия равна полусумме оснований: $$m=\\frac{8+12}{2}=10 .$$ Площадь равна средней линии, умноженной на высоту: $$S=10\\cdot5=50 .$$ **Ответ:** $S=50$, средняя линия $10$.",
    "en": "The midline is the average of the bases: $$m=\\frac{8+12}{2}=10 .$$ The area is the midline times the height: $$S=10\\cdot5=50 .$$ **Answer:** $S=50$, midline $10$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Диагонали ромба равны $10$ и $24$. Найдите его площадь и сторону.",
    "en": "The diagonals of a rhombus are $10$ and $24$. Find its area and its side."
   },
   "hint": {
    "ru": "Диагонали ромба перпендикулярны и делятся пополам.",
    "en": "The diagonals of a rhombus are perpendicular and bisect each other."
   },
   "sol": {
    "ru": "**Площадь.** Диагонали ромба перпендикулярны, поэтому $$S=\\frac{d_1d_2}{2}=\\frac{10\\cdot24}{2}=120 .$$\n\n**Сторона.** Диагонали делят друг друга пополам, значит каждая сторона — гипотенуза прямоугольного треугольника с катетами $5$ и $12$: $$a=\\sqrt{5^{2}+12^{2}}=\\sqrt{169}=13 .$$ **Ответ:** $S=120$, сторона $13$.",
    "en": "**Area.** The diagonals are perpendicular, so $$S=\\frac{d_1d_2}{2}=\\frac{10\\cdot24}{2}=120 .$$\n\n**Side.** The diagonals bisect each other, so each side is the hypotenuse of a right triangle with legs $5$ and $12$: $$a=\\sqrt{5^{2}+12^{2}}=\\sqrt{169}=13 .$$ **Answer:** $S=120$, side $13$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Докажите, что медиана делит треугольник на две части равной площади.",
    "en": "Prove that a median divides a triangle into two parts of equal area."
   },
   "hint": {
    "ru": "Общая высота из вершины.",
    "en": "A common altitude from the vertex."
   },
   "sol": {
    "ru": "Пусть $AM$ — медиана треугольника $ABC$, то есть $BM=MC$. Треугольники $ABM$ и $AMC$ имеют основания $BM$ и $MC$ на одной прямой $BC$ и общую вершину $A$, значит и общую высоту $h$ из вершины $A$. Тогда $$S_{ABM}=\\frac{BM\\cdot h}{2}=\\frac{MC\\cdot h}{2}=S_{AMC}. \\qquad\\blacksquare$$\n\n*Замечание.* Делит площадь пополам именно **медиана**: произвольная прямая через точку пересечения медиан этим свойством, вообще говоря, не обладает.",
    "en": "Let $AM$ be a median of a triangle $ABC$, so $BM=MC$. The triangles $ABM$ and $AMC$ have bases $BM$ and $MC$ on the line $BC$ and share the vertex $A$, hence share the altitude $h$ from $A$. Then $$S_{ABM}=\\frac{BM\\cdot h}{2}=\\frac{MC\\cdot h}{2}=S_{AMC}. \\qquad\\blacksquare$$\n\n*Remark.* Note that this is a property of the median specifically — a general line through the centroid does **not** split the area equally."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Точка $D$ делит сторону $BC$ треугольника $ABC$ в отношении $BD:DC=2:3$. Площадь треугольника $ABC$ равна $45$. Найдите площади треугольников $ABD$ и $ADC$.",
    "en": "A point $D$ divides the side $BC$ of a triangle $ABC$ in the ratio $BD:DC=2:3$. The area of $ABC$ is $45$. Find the areas of $ABD$ and $ADC$."
   },
   "hint": {
    "ru": "Правило общей высоты.",
    "en": "The common-height rule."
   },
   "sol": {
    "ru": "Треугольники $ABD$ и $ADC$ имеют общую вершину $A$, а их основания лежат на прямой $BC$. По правилу общей высоты $$\\frac{S_{ABD}}{S_{ADC}}=\\frac{BD}{DC}=\\frac23 .$$ Значит площади относятся как $2:3$, а вместе дают $45$. Разделим $45$ на $2+3=5$ частей: одна часть равна $9$.\n\n**Ответ:** $S_{ABD}=2\\cdot9=18$ и $S_{ADC}=3\\cdot9=27$.",
    "en": "The triangles $ABD$ and $ADC$ share the vertex $A$ and have bases on the line $BC$. The common-height rule gives $$\\frac{S_{ABD}}{S_{ADC}}=\\frac{BD}{DC}=\\frac23 .$$ So the areas are in the ratio $2:3$ and add to $45$. Split $45$ into $2+3=5$ parts: one part is $9$.\n\n**Answer:** $S_{ABD}=2\\cdot9=18$ and $S_{ADC}=3\\cdot9=27$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Найдите площадь треугольника со сторонами $5$, $12$ и $13$ двумя способами: по формуле Герона и без неё.",
    "en": "Find the area of a triangle with sides $5$, $12$ and $13$ in two ways: by Heron’s formula and without it."
   },
   "hint": {
    "ru": "Проверьте, не прямоугольный ли он.",
    "en": "Check whether it is right-angled."
   },
   "sol": {
    "ru": "**Без формулы Герона.** Проверим: $5^{2}+12^{2}=25+144=169=13^{2}$. Значит треугольник прямоугольный с катетами $5$ и $12$, и $$S=\\frac{5\\cdot12}{2}=30 .$$\n\n**По формуле Герона.** $p=\\dfrac{5+12+13}{2}=15$, поэтому $$S=\\sqrt{15\\cdot10\\cdot3\\cdot2}=\\sqrt{900}=30 .$$ Ответы совпали ✓ **Ответ:** $S=30$.",
    "en": "**Without Heron.** Check: $5^{2}+12^{2}=25+144=169=13^{2}$. So the triangle is right-angled with legs $5$ and $12$, and $$S=\\frac{5\\cdot12}{2}=30 .$$\n\n**By Heron.** $p=\\dfrac{5+12+13}{2}=15$, so $$S=\\sqrt{15\\cdot10\\cdot3\\cdot2}=\\sqrt{900}=30 .$$ The two agree ✓ **Answer:** $S=30$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Найдите площадь многоугольника, изображённого на рисунке к разделу о формуле Пика, вторым способом — достроением до прямоугольника — и сравните с ответом $15$.",
    "en": "Find the area of the polygon in the Pick’s-formula figure by the second method — completing to a rectangle — and compare with the answer $15$."
   },
   "hint": {
    "ru": "Вершины многоугольника: $(1,1),(5,1),(6,3),(3,5),(1,4)$.",
    "en": "The vertices are $(1,1),(5,1),(6,3),(3,5),(1,4)$."
   },
   "sol": {
    "ru": "Опишем вокруг многоугольника прямоугольник с противоположными вершинами $(1,1)$ и $(6,5)$: его размеры $5\\times4$, площадь $20$.\n\nТеперь вычтем всё лишнее. Обходя границу, отсекаем:\n\n$\\bullet$ треугольник с вершинами $(5,1),(6,1),(6,3)$ — катеты $1$ и $2$, площадь $1$;\n$\\bullet$ треугольник $(6,3),(6,5),(3,5)$ — катеты $2$ и $3$, площадь $3$;\n$\\bullet$ треугольник $(3,5),(1,5),(1,4)$ — катеты $2$ и $1$, площадь $1$.\n\nБольше ничего не остаётся: стороны $(1,1)$–$(5,1)$ и $(1,4)$–$(1,1)$ лежат на сторонах прямоугольника.\n\nЗначит $$S=20-1-3-1=15 .$$ Совпадает с ответом по формуле Пика ✓",
    "en": "Circumscribe the rectangle with opposite corners $(1,1)$ and $(6,5)$: it is $5\\times4$, of area $20$.\n\nNow subtract the excess. Going round the boundary we cut off:\n\n$\\bullet$ the triangle $(5,1),(6,1),(6,3)$ — legs $1$ and $2$, area $1$;\n$\\bullet$ the triangle $(6,3),(6,5),(3,5)$ — legs $2$ and $3$, area $3$;\n$\\bullet$ the triangle $(3,5),(1,5),(1,4)$ — legs $2$ and $1$, area $1$.\n\nNothing else is left: the sides $(1,1)$–$(5,1)$ and $(1,4)$–$(1,1)$ lie along the rectangle.\n\nHence $$S=20-1-3-1=15 ,$$ agreeing with Pick’s formula ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Середины сторон выпуклого четырёхугольника площади $S$ соединены последовательно. Докажите, что получился параллелограмм, и найдите его площадь.",
    "en": "The midpoints of the sides of a convex quadrilateral of area $S$ are joined in order. Prove that the result is a parallelogram, and find its area."
   },
   "hint": {
    "ru": "Проведите диагональ и посмотрите на средние линии.",
    "en": "Draw a diagonal and look at the midlines."
   },
   "sol": {
    "ru": "Пусть $ABCD$ — четырёхугольник, а $M,N,P,Q$ — середины сторон $AB$, $BC$, $CD$, $DA$.\n\n**Параллелограмм.** В треугольнике $ABC$ отрезок $MN$ — средняя линия, поэтому $$MN\\parallel AC,\\qquad MN=\\tfrac12AC .$$ В треугольнике $ACD$ отрезок $QP$ — тоже средняя линия, поэтому $$QP\\parallel AC,\\qquad QP=\\tfrac12AC .$$ Значит $MN$ и $QP$ параллельны и равны, а четырёхугольник с парой параллельных равных сторон — параллелограмм. (Это параллелограмм Вариньона.)\n\n**Площадь.** Посчитаем четыре угловых треугольника. Треугольник $BMN$ подобен треугольнику $BAC$ с коэффициентом $\\tfrac12$, поэтому $$S_{BMN}=\\tfrac14S_{ABC},$$ и аналогично $$S_{DPQ}=\\tfrac14S_{ACD},\\qquad S_{AMQ}=\\tfrac14S_{ABD},\\qquad S_{CNP}=\\tfrac14S_{CBD}.$$\n\nСложим. Первые два дают $\\tfrac14\\left(S_{ABC}+S_{ACD}\\right)=\\tfrac14S$ (диагональ $AC$ делит четырёхугольник на эти два треугольника), вторые два — $\\tfrac14\\left(S_{ABD}+S_{CBD}\\right)=\\tfrac14S$ (диагональ $BD$). Итого угловые треугольники занимают $\\tfrac12S$.\n\nЗначит $$S_{MNPQ}=S-\\frac S2=\\frac S2 . \\qquad\\blacksquare$$",
    "en": "Let $ABCD$ be the quadrilateral and let $M,N,P,Q$ be the midpoints of $AB$, $BC$, $CD$, $DA$.\n\n**A parallelogram.** In the triangle $ABC$ the segment $MN$ is a midline, so $$MN\\parallel AC,\\qquad MN=\\tfrac12AC .$$ In the triangle $ACD$ the segment $QP$ is also a midline, so $$QP\\parallel AC,\\qquad QP=\\tfrac12AC .$$ Hence $MN$ and $QP$ are parallel and equal, and a quadrilateral with one such pair of sides is a parallelogram. (This is the Varignon parallelogram.)\n\n**Area.** Count the four corner triangles. The triangle $BMN$ is similar to $BAC$ with ratio $\\tfrac12$, so $$S_{BMN}=\\tfrac14S_{ABC},$$ and likewise $$S_{DPQ}=\\tfrac14S_{ACD},\\qquad S_{AMQ}=\\tfrac14S_{ABD},\\qquad S_{CNP}=\\tfrac14S_{CBD}.$$\n\nAdd them. The first two give $\\tfrac14\\left(S_{ABC}+S_{ACD}\\right)=\\tfrac14S$ (the diagonal $AC$ splits the quadrilateral into those two triangles); the other two give $\\tfrac14\\left(S_{ABD}+S_{CBD}\\right)=\\tfrac14S$ (the diagonal $BD$). So the corner triangles take up $\\tfrac12S$.\n\nTherefore $$S_{MNPQ}=S-\\frac S2=\\frac S2 . \\qquad\\blacksquare$$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Точка $P$ лежит внутри параллелограмма $ABCD$ площади $S$. Докажите, что $$S_{PAB}+S_{PCD}=\\frac S2 .$$",
    "en": "A point $P$ lies inside a parallelogram $ABCD$ of area $S$. Prove that $$S_{PAB}+S_{PCD}=\\frac S2 .$$"
   },
   "hint": {
    "ru": "Стороны $AB$ и $CD$ параллельны и равны; сложите расстояния от $P$ до них.",
    "en": "The sides $AB$ and $CD$ are parallel and equal; add the distances from $P$ to them."
   },
   "sol": {
    "ru": "Обозначим $a=AB=CD$ и пусть $h$ — расстояние между параллельными прямыми $AB$ и $CD$; тогда $S=a\\,h$.\n\nПусть $h_1$ — расстояние от точки $P$ до прямой $AB$, а $h_2$ — до прямой $CD$. Так как $P$ лежит между этими двумя параллельными прямыми, $$h_1+h_2=h .$$\n\nТеперь считаем площади: $$S_{PAB}=\\frac{a\\,h_1}{2},\\qquad S_{PCD}=\\frac{a\\,h_2}{2}.$$ Складываем: $$S_{PAB}+S_{PCD}=\\frac{a\\left(h_1+h_2\\right)}{2}=\\frac{a\\,h}{2}=\\frac S2 . \\qquad\\blacksquare$$\n\n*Замечание.* Ответ не зависит от положения точки $P$ — только от того, что она внутри. То же верно и для второй пары сторон: $S_{PBC}+S_{PDA}=\\tfrac S2$.",
    "en": "Write $a=AB=CD$ and let $h$ be the distance between the parallel lines $AB$ and $CD$; then $S=a\\,h$.\n\nLet $h_1$ be the distance from $P$ to the line $AB$ and $h_2$ the distance to $CD$. Since $P$ lies between these two parallels, $$h_1+h_2=h .$$\n\nNow the areas: $$S_{PAB}=\\frac{a\\,h_1}{2},\\qquad S_{PCD}=\\frac{a\\,h_2}{2},$$ and adding, $$S_{PAB}+S_{PCD}=\\frac{a\\left(h_1+h_2\\right)}{2}=\\frac{a\\,h}{2}=\\frac S2 . \\qquad\\blacksquare$$\n\n*Remark.* The answer does not depend on where $P$ is, only that it is inside. The same holds for the other pair of sides: $S_{PBC}+S_{PDA}=\\tfrac S2$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите свойство биссектрисы методом площадей: если $AD$ — биссектриса треугольника $ABC$, то $$\\frac{BD}{DC}=\\frac{AB}{AC}.$$",
    "en": "Prove the bisector property by the area method: if $AD$ is a bisector of a triangle $ABC$ then $$\\frac{BD}{DC}=\\frac{AB}{AC}.$$"
   },
   "hint": {
    "ru": "Посчитайте отношение $S_{ABD}:S_{ADC}$ двумя способами.",
    "en": "Compute the ratio $S_{ABD}:S_{ADC}$ in two ways."
   },
   "sol": {
    "ru": "Обозначим $\\alpha=\\tfrac12\\angle A$ — половину угла при вершине $A$.\n\n**Первый способ.** Треугольники $ABD$ и $ADC$ имеют общую вершину $A$ и основания на прямой $BC$, поэтому по правилу общей высоты $$\\frac{S_{ABD}}{S_{ADC}}=\\frac{BD}{DC}.$$\n\n**Второй способ.** Посчитаем те же площади через стороны и угол между ними. В треугольнике $ABD$ стороны $AB$ и $AD$ образуют угол $\\alpha$; в треугольнике $ADC$ стороны $AD$ и $AC$ образуют тот же угол $\\alpha$ (ведь $AD$ — биссектриса). Значит $$S_{ABD}=\\frac12\\,AB\\cdot AD\\sin\\alpha,\\qquad S_{ADC}=\\frac12\\,AD\\cdot AC\\sin\\alpha,$$ откуда $$\\frac{S_{ABD}}{S_{ADC}}=\\frac{AB}{AC}$$ — множители $AD$ и $\\sin\\alpha$ сокращаются.\n\n**Сравнение.** Два выражения для одного и того же отношения дают $$\\frac{BD}{DC}=\\frac{AB}{AC}. \\qquad\\blacksquare$$",
    "en": "Write $\\alpha=\\tfrac12\\angle A$ for half the angle at $A$.\n\n**First computation.** The triangles $ABD$ and $ADC$ share the vertex $A$ and have bases on the line $BC$, so the common-height rule gives $$\\frac{S_{ABD}}{S_{ADC}}=\\frac{BD}{DC}.$$\n\n**Second computation.** Compute the same areas from sides and the included angle. In $ABD$ the sides $AB$ and $AD$ meet at the angle $\\alpha$; in $ADC$ the sides $AD$ and $AC$ meet at the same $\\alpha$ (because $AD$ bisects). So $$S_{ABD}=\\frac12\\,AB\\cdot AD\\sin\\alpha,\\qquad S_{ADC}=\\frac12\\,AD\\cdot AC\\sin\\alpha,$$ whence $$\\frac{S_{ABD}}{S_{ADC}}=\\frac{AB}{AC},$$ the factors $AD$ and $\\sin\\alpha$ cancelling.\n\n**Compare.** Two expressions for one ratio give $$\\frac{BD}{DC}=\\frac{AB}{AC}. \\qquad\\blacksquare$$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "В треугольнике $ABC$ площади $S$ на сторонах $AB$, $BC$, $CA$ отмечены точки $M$, $N$, $K$, делящие каждую сторону в отношении $1:2$ (считая по обходу $A\\to B\\to C\\to A$). Найдите площадь треугольника $MNK$.",
    "en": "In a triangle $ABC$ of area $S$, points $M$, $N$, $K$ on the sides $AB$, $BC$, $CA$ divide each side in the ratio $1:2$ (going round $A\\to B\\to C\\to A$). Find the area of the triangle $MNK$."
   },
   "hint": {
    "ru": "Вычтите из $S$ три угловых треугольника.",
    "en": "Subtract the three corner triangles from $S$."
   },
   "sol": {
    "ru": "Пусть $AM:MB=1:2$, $BN:NC=1:2$, $CK:KA=1:2$. Тогда $$AM=\\tfrac13AB,\\quad MB=\\tfrac23AB,\\quad BN=\\tfrac13BC,\\quad NC=\\tfrac23BC,\\quad CK=\\tfrac13CA,\\quad KA=\\tfrac23CA .$$\n\n**Угловой треугольник при вершине $B$** — это $MBN$; по правилу общего угла $$\\frac{S_{MBN}}{S}=\\frac{MB}{AB}\\cdot\\frac{BN}{BC}=\\frac23\\cdot\\frac13=\\frac29 .$$\n\nПо симметрии то же самое верно для треугольников $NCK$ и $KAM$: каждый занимает $\\tfrac29$ площади.\n\n**Вычитаем.** Три угловых треугольника попарно не пересекаются и вместе с $MNK$ покрывают весь треугольник, поэтому $$\\frac{S_{MNK}}{S}=1-3\\cdot\\frac29=1-\\frac69=\\frac13 .$$\n\n**Ответ:** $S_{MNK}=\\dfrac S3$.",
    "en": "Let $AM:MB=1:2$, $BN:NC=1:2$, $CK:KA=1:2$. Then $$AM=\\tfrac13AB,\\quad MB=\\tfrac23AB,\\quad BN=\\tfrac13BC,\\quad NC=\\tfrac23BC,\\quad CK=\\tfrac13CA,\\quad KA=\\tfrac23CA .$$\n\n**The corner triangle at $B$** is $MBN$; the common-angle rule gives $$\\frac{S_{MBN}}{S}=\\frac{MB}{AB}\\cdot\\frac{BN}{BC}=\\frac23\\cdot\\frac13=\\frac29 .$$\n\nBy symmetry the same holds for $NCK$ and $KAM$: each takes $\\tfrac29$ of the area.\n\n**Subtract.** The three corner triangles are disjoint and together with $MNK$ cover the whole triangle, so $$\\frac{S_{MNK}}{S}=1-3\\cdot\\frac29=1-\\frac69=\\frac13 .$$\n\n**Answer:** $S_{MNK}=\\dfrac S3$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Диагонали выпуклого четырёхугольника $ABCD$ пересекаются в точке $O$. Докажите, что $$S_{AOB}\\cdot S_{COD}=S_{BOC}\\cdot S_{AOD}.$$",
    "en": "The diagonals of a convex quadrilateral $ABCD$ meet at $O$. Prove that $$S_{AOB}\\cdot S_{COD}=S_{BOC}\\cdot S_{AOD}.$$"
   },
   "hint": {
    "ru": "Все четыре площади выразите через отрезки диагоналей и угол между ними.",
    "en": "Express all four areas through the pieces of the diagonals and the angle between them."
   },
   "sol": {
    "ru": "Обозначим $$OA=p,\\quad OB=q,\\quad OC=r,\\quad OD=s,$$ и пусть $\\varphi$ — угол между диагоналями в точке $O$.\n\nВ каждом из четырёх треугольников известны две стороны и угол между ними — это либо $\\varphi$, либо смежный с ним угол, а у смежных углов синусы равны. Значит $$S_{AOB}=\\tfrac12pq\\sin\\varphi,\\quad S_{BOC}=\\tfrac12qr\\sin\\varphi,\\quad S_{COD}=\\tfrac12rs\\sin\\varphi,\\quad S_{AOD}=\\tfrac12sp\\sin\\varphi .$$\n\nТеперь перемножаем: $$S_{AOB}\\cdot S_{COD}=\\tfrac14pq\\,rs\\sin^{2}\\varphi,\\qquad S_{BOC}\\cdot S_{AOD}=\\tfrac14qr\\,sp\\sin^{2}\\varphi .$$ Оба произведения равны $\\tfrac14pqrs\\sin^{2}\\varphi$. $\\blacksquare$\n\n*Следствие.* Если $BC\\parallel AD$ (трапеция), то $S_{AOB}=S_{COD}$, и тогда каждая из них равна $\\sqrt{S_{BOC}\\cdot S_{AOD}}$ — то самое геометрическое среднее, которое мы использовали в примере выше.",
    "en": "Write $$OA=p,\\quad OB=q,\\quad OC=r,\\quad OD=s,$$ and let $\\varphi$ be the angle between the diagonals at $O$.\n\nIn each of the four triangles we know two sides and the angle between them — either $\\varphi$ or its supplement, and supplementary angles have equal sines. So $$S_{AOB}=\\tfrac12pq\\sin\\varphi,\\quad S_{BOC}=\\tfrac12qr\\sin\\varphi,\\quad S_{COD}=\\tfrac12rs\\sin\\varphi,\\quad S_{AOD}=\\tfrac12sp\\sin\\varphi .$$\n\nMultiplying, $$S_{AOB}\\cdot S_{COD}=\\tfrac14pq\\,rs\\sin^{2}\\varphi,\\qquad S_{BOC}\\cdot S_{AOD}=\\tfrac14qr\\,sp\\sin^{2}\\varphi ,$$ and both equal $\\tfrac14pqrs\\sin^{2}\\varphi$. $\\blacksquare$\n\n*Corollary.* If $BC\\parallel AD$ (a trapezium) then $S_{AOB}=S_{COD}$, and each equals $\\sqrt{S_{BOC}\\cdot S_{AOD}}$ — the geometric mean used in the worked example above."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Найдите площадь многоугольника с вершинами в узлах решётки $(0,0)$, $(4,1)$, $(3,4)$, $(1,3)$ — сначала по формуле Пика, затем достроением до прямоугольника.",
    "en": "Find the area of the lattice polygon with vertices $(0,0)$, $(4,1)$, $(3,4)$, $(1,3)$ — first by Pick’s formula, then by completing to a rectangle."
   },
   "hint": {
    "ru": "На сторонах узлов, кроме вершин, нет: все соответствующие НОД равны единице.",
    "en": "The sides contain no lattice points besides the vertices: all the relevant gcds are one."
   },
   "sol": {
    "ru": "**По формуле Пика.** Разности координат по сторонам: $(4,1)$, $(-1,3)$, $(-2,-1)$, $(-1,-3)$. Все соответствующие НОД равны $1$, значит на сторонах нет узлов кроме вершин, и $$B=4 .$$\n\nВнутренние узлы удобно искать по неравенствам, задающим внутренность. Стороны лежат на прямых $$4y=x,\\qquad 3x+y=13,\\qquad x-2y+5=0,\\qquad y=3x,$$ и внутренность задаётся условиями $4y>x$, $3x+y<13$, $x-2y+5>0$, $y<3x$. Перебирая точки с координатами от $1$ до $3$, получаем восемь узлов: $$(1,1),\\ (1,2),\\ (2,1),\\ (2,2),\\ (2,3),\\ (3,1),\\ (3,2),\\ (3,3),$$ то есть $I=8$.\n\nПо формуле $$S=I+\\frac B2-1=8+2-1=9 .$$\n\n**Достроением.** Опишем квадрат с вершинами $(0,0)$ и $(4,4)$, площадь $16$. Вычтем четыре угловых прямоугольных треугольника:\n\n$(0,0),(4,0),(4,1)$ — катеты $4$ и $1$, площадь $2$;\n$(4,1),(4,4),(3,4)$ — катеты $3$ и $1$, площадь $1{,}5$;\n$(3,4),(0,4),(1,3)$ — катеты $3$ и $1$, площадь $1{,}5$;\n$(0,4),(0,0),(1,3)$ — основание $4$ на оси $Oy$ и высота $1$, площадь $2$.\n\nИтого $16-2-1{,}5-1{,}5-2=9$ ✓\n\n**Ответ:** $S=9$.",
    "en": "**By Pick.** The side vectors are $(4,1)$, $(-1,3)$, $(-2,-1)$, $(-1,-3)$. All the corresponding gcds equal $1$, so the sides carry no lattice points besides the vertices and $$B=4 .$$\n\nInterior points are easiest to find from the inequalities cutting out the interior. The sides lie on the lines $$4y=x,\\qquad 3x+y=13,\\qquad x-2y+5=0,\\qquad y=3x,$$ and the interior is where $4y>x$, $3x+y<13$, $x-2y+5>0$ and $y<3x$. Running through the points with coordinates between $1$ and $3$ leaves eight: $$(1,1),\\ (1,2),\\ (2,1),\\ (2,2),\\ (2,3),\\ (3,1),\\ (3,2),\\ (3,3),$$ so $I=8$.\n\nPick’s formula gives $$S=I+\\frac B2-1=8+2-1=9 .$$\n\n**By completion.** Circumscribe the square with corners $(0,0)$ and $(4,4)$, of area $16$. Subtract the four corner right triangles:\n\n$(0,0),(4,0),(4,1)$ — legs $4$ and $1$, area $2$;\n$(4,1),(4,4),(3,4)$ — legs $3$ and $1$, area $1.5$;\n$(3,4),(0,4),(1,3)$ — legs $3$ and $1$, area $1.5$;\n$(0,4),(0,0),(1,3)$ — base $4$ and height $1$, area $2$.\n\nAltogether $16-2-1.5-1.5-2=9$ ✓\n\n**Answer:** $S=9$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Площадь треугольника $ABC$ равна $1$. Точка $M$ — середина стороны $BC$, а точка $N$ на стороне $AC$ такова, что $AN:NC=1:3$. Найдите площадь треугольника $AMN$... точнее, найдите площадь четырёхугольника, отсекаемого прямой $MN$ от треугольника со стороны вершины $C$.",
    "en": "A triangle $ABC$ has area $1$. The point $M$ is the midpoint of $BC$, and $N$ on $AC$ satisfies $AN:NC=1:3$. Find the area of the piece cut off by the line $MN$ on the side of the vertex $C$."
   },
   "hint": {
    "ru": "Отсекается треугольник $MCN$; примените правило общего угла к углу $C$.",
    "en": "The piece is the triangle $MCN$; apply the common-angle rule at $C$."
   },
   "sol": {
    "ru": "Прямая $MN$ отсекает от треугольника $ABC$ треугольник $MCN$ с вершиной $C$.\n\nВыпишем отношения к целым сторонам: $$\\frac{CM}{CB}=\\frac12,\\qquad \\frac{CN}{CA}=\\frac34$$ (из $AN:NC=1:3$ следует, что $NC$ составляет три четверти стороны $AC$).\n\nПо правилу общего угла $$\\frac{S_{MCN}}{S_{ABC}}=\\frac{CM}{CB}\\cdot\\frac{CN}{CA}=\\frac12\\cdot\\frac34=\\frac38 .$$\n\n**Ответ:** отсечённый треугольник имеет площадь $\\tfrac38$, а оставшийся четырёхугольник $ABMN$ — площадь $1-\\tfrac38=\\tfrac58$.",
    "en": "The line $MN$ cuts off from $ABC$ the triangle $MCN$ at the vertex $C$.\n\nWrite the ratios to the whole sides: $$\\frac{CM}{CB}=\\frac12,\\qquad \\frac{CN}{CA}=\\frac34$$ (from $AN:NC=1:3$ the piece $NC$ is three quarters of $AC$).\n\nThe common-angle rule gives $$\\frac{S_{MCN}}{S_{ABC}}=\\frac{CM}{CB}\\cdot\\frac{CN}{CA}=\\frac12\\cdot\\frac34=\\frac38 .$$\n\n**Answer:** the cut-off triangle has area $\\tfrac38$, and the remaining quadrilateral $ABMN$ has area $1-\\tfrac38=\\tfrac58$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что площадь выпуклого четырёхугольника не превосходит половины произведения его диагоналей, и выясните, когда достигается равенство.",
    "en": "Prove that the area of a convex quadrilateral does not exceed half the product of its diagonals, and find when equality holds."
   },
   "hint": {
    "ru": "$S=\\tfrac12d_1d_2\\sin\\varphi$ и $\\sin\\varphi\\le1$.",
    "en": "$S=\\tfrac12d_1d_2\\sin\\varphi$ and $\\sin\\varphi\\le1$."
   },
   "sol": {
    "ru": "Пусть диагонали $AC$ и $BD$ пересекаются в точке $O$ под углом $\\varphi$, и пусть $$OA=p,\\ OC=r,\\ OB=q,\\ OD=s .$$ Как в задаче выше, каждый из четырёх треугольников имеет площадь вида $\\tfrac12\\,xy\\sin\\varphi$, поэтому $$S=\\tfrac12\\left(pq+qr+rs+sp\\right)\\sin\\varphi=\\tfrac12\\left(p+r\\right)\\left(q+s\\right)\\sin\\varphi=\\tfrac12\\,d_1d_2\\sin\\varphi,$$ где $d_1=AC=p+r$ и $d_2=BD=q+s$ (мы сгруппировали: $pq+qr+rs+sp=q(p+r)+s(p+r)$).\n\nТак как $\\sin\\varphi\\le1$, получаем $$S\\le\\frac{d_1d_2}{2}.$$\n\n**Равенство** достигается тогда и только тогда, когда $\\sin\\varphi=1$, то есть $\\varphi=90^\\circ$ — диагонали перпендикулярны. $\\blacksquare$\n\n*Пример.* У квадрата со стороной $1$ диагонали равны $\\sqrt2$, и $\\tfrac12\\cdot\\sqrt2\\cdot\\sqrt2=1$ — действительно площадь квадрата.",
    "en": "Let the diagonals $AC$ and $BD$ meet at $O$ at an angle $\\varphi$, and write $$OA=p,\\ OC=r,\\ OB=q,\\ OD=s .$$ As in the previous problem each of the four triangles has area $\\tfrac12\\,xy\\sin\\varphi$, so $$S=\\tfrac12\\left(pq+qr+rs+sp\\right)\\sin\\varphi=\\tfrac12\\left(p+r\\right)\\left(q+s\\right)\\sin\\varphi=\\tfrac12\\,d_1d_2\\sin\\varphi,$$ where $d_1=AC=p+r$ and $d_2=BD=q+s$ (grouping $pq+qr+rs+sp=q(p+r)+s(p+r)$).\n\nSince $\\sin\\varphi\\le1$, $$S\\le\\frac{d_1d_2}{2}.$$\n\n**Equality** holds exactly when $\\sin\\varphi=1$, that is $\\varphi=90^\\circ$ — the diagonals are perpendicular. $\\blacksquare$\n\n*Example.* A unit square has diagonals $\\sqrt2$, and $\\tfrac12\\cdot\\sqrt2\\cdot\\sqrt2=1$ — indeed its area."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите теорему Чевы: чевианы $AD$, $BE$, $CF$ треугольника $ABC$ пересекаются в одной точке тогда и только тогда, когда $$\\frac{BD}{DC}\\cdot\\frac{CE}{EA}\\cdot\\frac{AF}{FB}=1 .$$",
    "en": "Prove Ceva’s theorem: the cevians $AD$, $BE$, $CF$ of a triangle $ABC$ are concurrent if and only if $$\\frac{BD}{DC}\\cdot\\frac{CE}{EA}\\cdot\\frac{AF}{FB}=1 .$$"
   },
   "hint": {
    "ru": "Отношение $BD:DC$ выразите через площади двумя способами и вычтите.",
    "en": "Express $BD:DC$ through areas in two ways and subtract."
   },
   "sol": {
    "ru": "**Необходимость.** Пусть чевианы пересекаются в точке $P$.\n\nПо правилу общей высоты (вершина $A$, основания на $BC$): $$\\frac{S_{ABD}}{S_{ACD}}=\\frac{BD}{DC}.$$ По тому же правилу (вершина $P$, основания на $BC$): $$\\frac{S_{PBD}}{S_{PCD}}=\\frac{BD}{DC}.$$\n\nОбозначим общее значение через $k$. Тогда $S_{ABD}=k\\,S_{ACD}$ и $S_{PBD}=k\\,S_{PCD}$; вычитая, $$S_{ABD}-S_{PBD}=k\\left(S_{ACD}-S_{PCD}\\right).$$ Но точка $P$ лежит на отрезке $AD$, поэтому $S_{ABD}-S_{PBD}=S_{ABP}$ и $S_{ACD}-S_{PCD}=S_{ACP}$. Значит $$\\frac{S_{ABP}}{S_{ACP}}=\\frac{BD}{DC}.$$\n\nТочно так же $$\\frac{S_{BCP}}{S_{BAP}}=\\frac{CE}{EA},\\qquad \\frac{S_{CAP}}{S_{CBP}}=\\frac{AF}{FB}.$$\n\nПеремножаем три равенства: $$\\frac{BD}{DC}\\cdot\\frac{CE}{EA}\\cdot\\frac{AF}{FB}=\\frac{S_{ABP}}{S_{ACP}}\\cdot\\frac{S_{BCP}}{S_{BAP}}\\cdot\\frac{S_{CAP}}{S_{CBP}}=1,$$ поскольку каждая из трёх площадей ($S_{ABP}$, $S_{BCP}$, $S_{CAP}$) встречается ровно один раз в числителе и один раз в знаменателе.\n\n**Достаточность.** Пусть произведение равно $1$. Чевианы $AD$ и $BE$ не параллельны (обе идут внутрь треугольника), значит пересекаются в некоторой точке $P$. Проведём отрезок из $C$ через $P$ до пересечения с $AB$ в точке $F^{\\ast}$. По уже доказанному $$\\frac{BD}{DC}\\cdot\\frac{CE}{EA}\\cdot\\frac{AF^{\\ast}}{F^{\\ast}B}=1 .$$ Сравнивая с условием, получаем $$\\frac{AF^{\\ast}}{F^{\\ast}B}=\\frac{AF}{FB}.$$ Функция, сопоставляющая точке отрезка $AB$ отношение $AX:XB$, строго возрастает, поэтому такая точка одна: $F^{\\ast}=F$. Значит чевиана $CF$ проходит через $P$. $\\blacksquare$",
    "en": "**Necessity.** Suppose the cevians meet at $P$.\n\nThe common-height rule (vertex $A$, bases on $BC$) gives $$\\frac{S_{ABD}}{S_{ACD}}=\\frac{BD}{DC},$$ and the same rule (vertex $P$, bases on $BC$) gives $$\\frac{S_{PBD}}{S_{PCD}}=\\frac{BD}{DC}.$$\n\nCall the common value $k$. Then $S_{ABD}=k\\,S_{ACD}$ and $S_{PBD}=k\\,S_{PCD}$; subtracting, $$S_{ABD}-S_{PBD}=k\\left(S_{ACD}-S_{PCD}\\right).$$ Since $P$ lies on the segment $AD$, we have $S_{ABD}-S_{PBD}=S_{ABP}$ and $S_{ACD}-S_{PCD}=S_{ACP}$. Hence $$\\frac{S_{ABP}}{S_{ACP}}=\\frac{BD}{DC}.$$\n\nIn the same way $$\\frac{S_{BCP}}{S_{BAP}}=\\frac{CE}{EA},\\qquad \\frac{S_{CAP}}{S_{CBP}}=\\frac{AF}{FB}.$$\n\nMultiplying the three, $$\\frac{BD}{DC}\\cdot\\frac{CE}{EA}\\cdot\\frac{AF}{FB}=\\frac{S_{ABP}}{S_{ACP}}\\cdot\\frac{S_{BCP}}{S_{BAP}}\\cdot\\frac{S_{CAP}}{S_{CBP}}=1,$$ because each of the three areas ($S_{ABP}$, $S_{BCP}$, $S_{CAP}$) appears exactly once in a numerator and once in a denominator.\n\n**Sufficiency.** Suppose the product is $1$. The cevians $AD$ and $BE$ are not parallel (both go into the triangle), so they meet at some $P$. Draw the segment from $C$ through $P$ meeting $AB$ at $F^{\\ast}$. By what is proved, $$\\frac{BD}{DC}\\cdot\\frac{CE}{EA}\\cdot\\frac{AF^{\\ast}}{F^{\\ast}B}=1 ,$$ and comparing with the hypothesis, $$\\frac{AF^{\\ast}}{F^{\\ast}B}=\\frac{AF}{FB}.$$ The map sending a point of $AB$ to the ratio $AX:XB$ is strictly increasing, so such a point is unique: $F^{\\ast}=F$. Hence the cevian $CF$ passes through $P$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Пользуясь теоремой Чевы, докажите, что биссектрисы треугольника пересекаются в одной точке.",
    "en": "Using Ceva’s theorem, prove that the bisectors of a triangle are concurrent."
   },
   "hint": {
    "ru": "Каждое отношение известно по свойству биссектрисы.",
    "en": "Each ratio is given by the bisector property."
   },
   "sol": {
    "ru": "Обозначим стороны треугольника через $a=BC$, $b=CA$, $c=AB$. Пусть биссектрисы из вершин $A$, $B$, $C$ пересекают противоположные стороны в точках $D$, $E$, $F$ соответственно.\n\nПо свойству биссектрисы (доказанному выше методом площадей):\n\nиз вершины $A$: $\\ \\dfrac{BD}{DC}=\\dfrac{AB}{AC}=\\dfrac{c}{b}$;\n\nиз вершины $B$: $\\ \\dfrac{CE}{EA}=\\dfrac{BC}{BA}=\\dfrac{a}{c}$;\n\nиз вершины $C$: $\\ \\dfrac{AF}{FB}=\\dfrac{CA}{CB}=\\dfrac{b}{a}$.\n\nПеремножаем: $$\\frac{BD}{DC}\\cdot\\frac{CE}{EA}\\cdot\\frac{AF}{FB}=\\frac{c}{b}\\cdot\\frac{a}{c}\\cdot\\frac{b}{a}=1 .$$\n\nПо обратной части теоремы Чевы три чевианы пересекаются в одной точке. $\\blacksquare$\n\n*Эта точка* — центр вписанной окружности: она равноудалена от всех трёх сторон, поскольку лежит на каждой биссектрисе.\n\n*Тот же приём* доказывает и концентричность медиан: там все три отношения равны $1$, и произведение, очевидно, равно единице.",
    "en": "Write $a=BC$, $b=CA$, $c=AB$, and let the bisectors from $A$, $B$, $C$ meet the opposite sides at $D$, $E$, $F$.\n\nBy the bisector property (proved above by the area method):\n\nfrom $A$: $\\ \\dfrac{BD}{DC}=\\dfrac{AB}{AC}=\\dfrac{c}{b}$;\n\nfrom $B$: $\\ \\dfrac{CE}{EA}=\\dfrac{BC}{BA}=\\dfrac{a}{c}$;\n\nfrom $C$: $\\ \\dfrac{AF}{FB}=\\dfrac{CA}{CB}=\\dfrac{b}{a}$.\n\nMultiplying, $$\\frac{BD}{DC}\\cdot\\frac{CE}{EA}\\cdot\\frac{AF}{FB}=\\frac{c}{b}\\cdot\\frac{a}{c}\\cdot\\frac{b}{a}=1 .$$\n\nBy the converse part of Ceva’s theorem the three cevians are concurrent. $\\blacksquare$\n\n*That point* is the incentre: lying on each bisector, it is equidistant from all three sides.\n\n*The same argument* proves the medians concurrent: there all three ratios are $1$ and the product is trivially one."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "На сторонах $BC$, $CA$, $AB$ треугольника $ABC$ отмечены точки $D$, $E$, $F$ так, что $$BD:DC=CE:EA=AF:FB=1:2 .$$ Чевианы $AD$, $BE$, $CF$ попарно пересекаются и образуют внутри треугольник. Докажите, что его площадь составляет ровно $\\tfrac17$ площади треугольника $ABC$.",
    "en": "On the sides $BC$, $CA$, $AB$ of a triangle $ABC$ mark $D$, $E$, $F$ with $$BD:DC=CE:EA=AF:FB=1:2 .$$ The cevians $AD$, $BE$, $CF$ meet pairwise and enclose a triangle. Prove that its area is exactly $\\tfrac17$ of the area of $ABC$."
   },
   "hint": {
    "ru": "Отношение площадей не меняется при аффинном преобразовании — возьмите удобные координаты.",
    "en": "Ratios of areas are unchanged by an affine map — choose convenient coordinates."
   },
   "sol": {
    "ru": "**Почему можно взять любой треугольник.** Отношение площадей не меняется при аффинном преобразовании, а любой треугольник переводится аффинным преобразованием в любой другой; при этом точки, делящие стороны в отношении $1:2$, переходят в такие же точки. Поэтому достаточно проверить утверждение для одного удобного треугольника.\n\n**Координаты.** Возьмём $$A=(0,0),\\qquad B=(1,0),\\qquad C=(0,1),$$ так что $S_{ABC}=\\tfrac12$.\n\nТочки деления: $$D=B+\\tfrac13(C-B)=\\left(\\tfrac23,\\tfrac13\\right),\\qquad E=C+\\tfrac13(A-C)=\\left(0,\\tfrac23\\right),\\qquad F=A+\\tfrac13(B-A)=\\left(\\tfrac13,0\\right).$$\n\n**Уравнения чевиан.** $$AD:\\ y=\\tfrac12x,\\qquad BE:\\ x+\\tfrac32y=1,\\qquad CF:\\ 3x+y=1 .$$ (Проверьте: $BE$ проходит через $(1,0)$ и $(0,\\tfrac23)$; $CF$ — через $(0,1)$ и $(\\tfrac13,0)$.)\n\n**Три вершины внутреннего треугольника.**\n\n$AD\\cap BE$: подставляя $y=\\tfrac x2$ в $x+\\tfrac32y=1$, получаем $x+\\tfrac34x=1$, то есть $x=\\tfrac47$ и $$P=\\left(\\tfrac47,\\tfrac27\\right).$$\n\n$AD\\cap CF$: подставляя $y=\\tfrac x2$ в $3x+y=1$, получаем $\\tfrac72x=1$, то есть $x=\\tfrac27$ и $$Q=\\left(\\tfrac27,\\tfrac17\\right).$$\n\n$BE\\cap CF$: из $y=1-3x$ и $x+\\tfrac32(1-3x)=1$ получаем $-\\tfrac72x=-\\tfrac12$, то есть $x=\\tfrac17$ и $$R=\\left(\\tfrac17,\\tfrac47\\right).$$\n\n**Площадь.** По формуле площади через координаты $$S_{PQR}=\\frac12\\Bigl|x_P\\left(y_Q-y_R\\right)+x_Q\\left(y_R-y_P\\right)+x_R\\left(y_P-y_Q\\right)\\Bigr|.$$ Подставляем: $$=\\frac12\\left|\\frac47\\cdot\\left(\\frac17-\\frac47\\right)+\\frac27\\cdot\\left(\\frac47-\\frac27\\right)+\\frac17\\cdot\\left(\\frac27-\\frac17\\right)\\right| =\\frac12\\left|\\frac{-12+4+1}{49}\\right|=\\frac12\\cdot\\frac{7}{49}=\\frac1{14}.$$\n\n**Отношение.** $$\\frac{S_{PQR}}{S_{ABC}}=\\frac{1/14}{1/2}=\\frac17 . \\qquad\\blacksquare$$\n\n*Замечание.* Это частный случай теоремы Рауса. Для отношения $1:n$ на каждой стороне внутренний треугольник занимает долю $\\dfrac{(n-1)^{2}}{n^{2}+n+1}$; при $n=2$ получается $\\tfrac17$, а при $n=1$ — ноль, ведь тогда чевианы становятся медианами и пересекаются в одной точке.",
    "en": "**Why any triangle will do.** Ratios of areas are unchanged by affine maps, and any triangle can be carried onto any other by one; points dividing the sides in the ratio $1:2$ go to points dividing them the same way. So it suffices to check one convenient triangle.\n\n**Coordinates.** Take $$A=(0,0),\\qquad B=(1,0),\\qquad C=(0,1),$$ so $S_{ABC}=\\tfrac12$.\n\nThe division points are $$D=B+\\tfrac13(C-B)=\\left(\\tfrac23,\\tfrac13\\right),\\qquad E=C+\\tfrac13(A-C)=\\left(0,\\tfrac23\\right),\\qquad F=A+\\tfrac13(B-A)=\\left(\\tfrac13,0\\right).$$\n\n**The cevian lines.** $$AD:\\ y=\\tfrac12x,\\qquad BE:\\ x+\\tfrac32y=1,\\qquad CF:\\ 3x+y=1 .$$ (Check: $BE$ passes through $(1,0)$ and $(0,\\tfrac23)$; $CF$ through $(0,1)$ and $(\\tfrac13,0)$.)\n\n**The three inner vertices.**\n\n$AD\\cap BE$: putting $y=\\tfrac x2$ into $x+\\tfrac32y=1$ gives $x+\\tfrac34x=1$, so $x=\\tfrac47$ and $$P=\\left(\\tfrac47,\\tfrac27\\right).$$\n\n$AD\\cap CF$: putting $y=\\tfrac x2$ into $3x+y=1$ gives $\\tfrac72x=1$, so $x=\\tfrac27$ and $$Q=\\left(\\tfrac27,\\tfrac17\\right).$$\n\n$BE\\cap CF$: from $y=1-3x$ and $x+\\tfrac32(1-3x)=1$ we get $-\\tfrac72x=-\\tfrac12$, so $x=\\tfrac17$ and $$R=\\left(\\tfrac17,\\tfrac47\\right).$$\n\n**Area.** The coordinate area formula gives $$S_{PQR}=\\frac12\\Bigl|x_P\\left(y_Q-y_R\\right)+x_Q\\left(y_R-y_P\\right)+x_R\\left(y_P-y_Q\\right)\\Bigr|$$ $$=\\frac12\\left|\\frac47\\cdot\\left(\\frac17-\\frac47\\right)+\\frac27\\cdot\\left(\\frac47-\\frac27\\right)+\\frac17\\cdot\\left(\\frac27-\\frac17\\right)\\right| =\\frac12\\left|\\frac{-12+4+1}{49}\\right|=\\frac12\\cdot\\frac{7}{49}=\\frac1{14}.$$\n\n**The ratio.** $$\\frac{S_{PQR}}{S_{ABC}}=\\frac{1/14}{1/2}=\\frac17 . \\qquad\\blacksquare$$\n\n*Remark.* This is a special case of Routh’s theorem. For the ratio $1:n$ on each side the inner triangle takes the fraction $\\dfrac{(n-1)^{2}}{n^{2}+n+1}$; at $n=2$ this is $\\tfrac17$, and at $n=1$ it is zero — the cevians are then medians and meet at a point."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что треугольник с вершинами в узлах клетчатой бумаги не может быть равносторонним.",
    "en": "Prove that a triangle with all three vertices at lattice points cannot be equilateral."
   },
   "hint": {
    "ru": "Сравните формулу Пика с формулой площади равностороннего треугольника.",
    "en": "Compare Pick’s formula with the area formula for an equilateral triangle."
   },
   "sol": {
    "ru": "Предположим, что такой треугольник существует, и пусть его сторона равна $a$.\n\n**Шаг 1: площадь рациональна.** По формуле Пика $$S=I+\\frac B2-1,$$ где $I$ и $B$ — целые числа. Значит $S$ — число вида «целое или полуцелое», в частности **рациональное**.\n\n**Шаг 2: $a^{2}$ — целое.** Вершины лежат в узлах, поэтому разность координат любых двух вершин — пара целых чисел $(p,q)$, и по теореме Пифагора $$a^{2}=p^{2}+q^{2}\\in\\mathbb{Z}.$$\n\n**Шаг 3: противоречие.** Площадь равностороннего треугольника равна $$S=\\frac{\\sqrt3}{4}a^{2}.$$ Отсюда $$\\sqrt3=\\frac{4S}{a^{2}}.$$ В правой части — отношение рационального числа к целому (ненулевому), то есть **рациональное** число. Но $\\sqrt3$ иррационально.\n\n*Почему $\\sqrt3$ иррационально.* Если бы $\\sqrt3=\\tfrac mn$ с несократимой дробью, то $m^{2}=3n^{2}$, откуда $3\\mid m$; записав $m=3k$, получаем $9k^{2}=3n^{2}$, то есть $n^{2}=3k^{2}$ и $3\\mid n$ — противоречие с несократимостью.\n\nПолучено противоречие, значит равностороннего треугольника с вершинами в узлах не существует. $\\blacksquare$\n\n*Замечание.* Тот же довод показывает, что в узлах решётки нельзя разместить и правильный пятиугольник, шестиугольник и вообще любой правильный $n$-угольник, кроме квадрата.",
    "en": "Suppose such a triangle exists and let its side be $a$.\n\n**Step 1: the area is rational.** Pick’s formula gives $$S=I+\\frac B2-1$$ with $I$ and $B$ integers. So $S$ is an integer or a half-integer — in particular **rational**.\n\n**Step 2: $a^{2}$ is an integer.** The vertices are lattice points, so the difference of the coordinates of any two of them is a pair of integers $(p,q)$, and Pythagoras gives $$a^{2}=p^{2}+q^{2}\\in\\mathbb{Z}.$$\n\n**Step 3: contradiction.** The area of an equilateral triangle is $$S=\\frac{\\sqrt3}{4}a^{2},$$ hence $$\\sqrt3=\\frac{4S}{a^{2}}.$$ The right side is a rational number divided by a non-zero integer, hence **rational**. But $\\sqrt3$ is irrational.\n\n*Why $\\sqrt3$ is irrational.* If $\\sqrt3=\\tfrac mn$ in lowest terms then $m^{2}=3n^{2}$, so $3\\mid m$; writing $m=3k$ gives $9k^{2}=3n^{2}$, that is $n^{2}=3k^{2}$ and $3\\mid n$ — contradicting lowest terms.\n\nThe contradiction shows no equilateral lattice triangle exists. $\\blacksquare$\n\n*Remark.* The same argument rules out a regular pentagon, hexagon, and indeed any regular $n$-gon on the lattice except the square."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Площадь параллелограмма равна $48$, одна из его сторон равна $8$. Найдите высоту, проведённую к этой стороне. Чему равна высота к соседней стороне, если она равна $12$?",
    "en": "A parallelogram has area $48$ and one side of length $8$. Find the altitude to that side. What is the altitude to the neighbouring side if that side is $12$?"
   },
   "hint": {
    "ru": "$S=a\\,h_a$ для параллелограмма — без деления на два.",
    "en": "For a parallelogram $S=a\\,h_a$ — with no division by two."
   },
   "sol": {
    "ru": "Для параллелограмма $S=a\\,h_a$, поэтому $$h_{8}=\\frac{48}{8}=6 .$$ Для соседней стороны точно так же $$h_{12}=\\frac{48}{12}=4 .$$\n\n**Ответ:** $6$ и $4$.\n\n*Замечание.* Обратите внимание: большей стороне отвечает меньшая высота, и их произведение — одна и та же площадь. Отсюда полезное следствие: $a\\,h_a=b\\,h_b$, то есть высоты обратно пропорциональны сторонам.",
    "en": "For a parallelogram $S=a\\,h_a$, so $$h_{8}=\\frac{48}{8}=6 ,$$ and for the neighbouring side $$h_{12}=\\frac{48}{12}=4 .$$\n\n**Answer:** $6$ and $4$.\n\n*Remark.* Note that the longer side gets the shorter altitude, their product being the same area. Hence the useful fact $a\\,h_a=b\\,h_b$: the altitudes are inversely proportional to the sides."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Точка $G$ — точка пересечения медиан треугольника $ABC$ площади $S$. Докажите, что $$S_{AGB}=S_{BGC}=S_{CGA}=\\frac S3 .$$",
    "en": "Let $G$ be the centroid of a triangle $ABC$ of area $S$. Prove that $$S_{AGB}=S_{BGC}=S_{CGA}=\\frac S3 .$$"
   },
   "hint": {
    "ru": "Каждый из этих треугольников состоит из двух шестых частей.",
    "en": "Each of these triangles is made of two of the six equal pieces."
   },
   "sol": {
    "ru": "**Способ 1 (через шесть частей).** Медианы разбивают треугольник на шесть частей площади $\\tfrac S6$ каждая (это доказано в разделе выше). Треугольник $AGB$ состоит ровно из двух таких частей — тех, что примыкают к стороне $AB$ и разделены медианой из вершины $C$. Значит $$S_{AGB}=2\\cdot\\frac S6=\\frac S3 ,$$ и то же верно для двух других треугольников.\n\n**Способ 2 (напрямую).** Пусть $M$ — середина $BC$. Треугольники $AGB$ и $GBM$ имеют общую вершину $B$, а их основания $AG$ и $GM$ лежат на одной прямой с $AG:GM=2:1$, поэтому $$S_{AGB}=2\\,S_{GBM}.$$ Точно так же $S_{AGC}=2\\,S_{GCM}$. Кроме того, $S_{GBM}=S_{GCM}$ (общая вершина $G$, равные основания $BM=MC$); обозначим это общее значение через $x$. Тогда $$S_{BGC}=2x,\\qquad S_{AGB}=2x,\\qquad S_{AGC}=2x,$$ и их сумма равна $S$, откуда $x=\\tfrac S6$ и каждая из трёх площадей равна $\\tfrac S3$. $\\blacksquare$\n\n*Именно поэтому* точку $G$ называют центром тяжести: три равные массы, помещённые в вершины, уравновешиваются в ней.",
    "en": "**Method 1 (via the six pieces).** The medians cut the triangle into six pieces of area $\\tfrac S6$ each (proved in the section above). The triangle $AGB$ consists of exactly two of them — the two adjacent to the side $AB$, separated by the median from $C$. So $$S_{AGB}=2\\cdot\\frac S6=\\frac S3 ,$$ and likewise for the other two.\n\n**Method 2 (directly).** Let $M$ be the midpoint of $BC$. The triangles $AGB$ and $GBM$ share the vertex $B$ and have bases $AG$ and $GM$ on one line with $AG:GM=2:1$, so $$S_{AGB}=2\\,S_{GBM}.$$ Similarly $S_{AGC}=2\\,S_{GCM}$. Moreover $S_{GBM}=S_{GCM}$ (common vertex $G$, equal bases $BM=MC$); call this common value $x$. Then $$S_{BGC}=2x,\\qquad S_{AGB}=2x,\\qquad S_{AGC}=2x,$$ and their sum is $S$, so $x=\\tfrac S6$ and each of the three areas is $\\tfrac S3$. $\\blacksquare$\n\n*This is exactly why* $G$ is called the centre of mass: three equal masses at the vertices balance there."
   }
  }
 ]
};
