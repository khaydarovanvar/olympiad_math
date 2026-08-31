/* Topic 9 — generated from content/lesson_09.py, do not edit by hand. */
window.LESSONS = window.LESSONS || {};
window.LESSONS[9] = {
 "n": 9,
 "cat": "geo",
 "title": {
  "ru": "Треугольники и равенство",
  "en": "Triangles and congruence"
 },
 "sub": {
  "ru": "Углы, три признака равенства, равнобедренный треугольник, средняя линия, подобие и медианы.",
  "en": "Angles, the three congruence criteria, isosceles triangles, midlines, similarity and medians."
 },
 "goals": {
  "ru": [
   "Считать углы, пользуясь суммой углов и теоремой о внешнем угле.",
   "Доказывать равенство треугольников по трём признакам и оформлять такое доказательство.",
   "Пользоваться свойствами равнобедренного треугольника, средней линии и подобия.",
   "Владеть приёмом удвоения медианы и знать свойство точки пересечения медиан."
  ],
  "en": [
   "Chase angles using the angle sum and the exterior angle theorem.",
   "Prove triangles congruent by the three criteria, and write such a proof properly.",
   "Use the properties of isosceles triangles, midlines and similarity.",
   "Master the median-doubling trick and know the centroid property."
  ]
 },
 "sections": [
  {
   "h": {
    "ru": "Углы: с чего всё начинается",
    "en": "Angles: where it all starts"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Сумма углов треугольника",
      "en": "The angle sum of a triangle"
     },
     "text": {
      "ru": "Сумма углов любого треугольника равна $180^\\circ$.",
      "en": "The angles of any triangle add up to $180^\\circ$."
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 400 250\" role=\"img\" aria-label=\"Triangle with a line through the apex parallel to the base\">\n<path class=\"dsh\" d=\"M40 70 H360\"/>\n<path class=\"ln\" d=\"M60 210 L340 210 L200 70 Z\"/>\n<circle class=\"pt\" cx=\"60\" cy=\"210\" r=\"3.5\"/><circle class=\"pt\" cx=\"340\" cy=\"210\" r=\"3.5\"/>\n<circle class=\"pt\" cx=\"200\" cy=\"70\" r=\"3.5\"/>\n<text x=\"44\" y=\"230\">A</text><text x=\"344\" y=\"230\">B</text><text x=\"194\" y=\"52\">C</text>\n<text class=\"acc\" x=\"86\" y=\"197\">&#945;</text><text class=\"acc\" x=\"308\" y=\"197\">&#946;</text>\n<text class=\"acc\" x=\"194\" y=\"96\">&#947;</text>\n<text class=\"acc\" x=\"166\" y=\"88\">&#945;</text><text class=\"acc\" x=\"226\" y=\"88\">&#946;</text>\n</svg>",
     "cap": {
      "ru": "Через вершину $C$ проведена прямая, параллельная $AB$. Накрест лежащие углы при параллельных дают $\\alpha$ и $\\beta$ рядом с $\\gamma$ — вместе развёрнутый угол.",
      "en": "Through the vertex $C$ draw a line parallel to $AB$. Alternate angles at the parallels put $\\alpha$ and $\\beta$ next to $\\gamma$ — together a straight angle."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Проведём через вершину $C$ прямую, параллельную стороне $AB$ (рисунок выше). Прямая $AC$ пересекает две параллельные, поэтому угол $A$ и угол между проведённой прямой и $CA$ — накрест лежащие и потому равны $\\alpha$. Точно так же второй угол при $C$ равен $\\beta$.\n\nТри угла при вершине $C$ лежат на одной прямой и составляют развёрнутый угол: $$\\alpha+\\gamma+\\beta=180^\\circ . \\qquad\\blacksquare$$",
      "en": "Through the vertex $C$ draw a line parallel to the side $AB$ (see the figure). The line $AC$ crosses two parallels, so the angle $A$ and the angle between the new line and $CA$ are alternate angles and both equal $\\alpha$. In the same way the second angle at $C$ equals $\\beta$.\n\nThe three angles at $C$ lie along one line and make a straight angle: $$\\alpha+\\gamma+\\beta=180^\\circ . \\qquad\\blacksquare$$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Теорема о внешнем угле",
      "en": "The exterior angle theorem"
     },
     "text": {
      "ru": "Внешний угол треугольника равен сумме двух внутренних углов, не смежных с ним.",
      "en": "An exterior angle of a triangle equals the sum of the two interior angles not adjacent to it."
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 400 250\" role=\"img\" aria-label=\"Exterior angle of a triangle\">\n<path class=\"ln\" d=\"M50 200 L250 200 L150 70 Z\"/>\n<path class=\"dsh\" d=\"M250 200 H370\"/>\n<circle class=\"pt\" cx=\"50\" cy=\"200\" r=\"3.5\"/><circle class=\"pt\" cx=\"250\" cy=\"200\" r=\"3.5\"/>\n<circle class=\"pt\" cx=\"150\" cy=\"70\" r=\"3.5\"/><circle class=\"pt\" cx=\"370\" cy=\"200\" r=\"3.5\"/>\n<text x=\"36\" y=\"220\">A</text><text x=\"242\" y=\"220\">B</text><text x=\"144\" y=\"52\">C</text>\n<text x=\"366\" y=\"220\">D</text>\n<text class=\"acc\" x=\"76\" y=\"188\">&#945;</text><text class=\"acc\" x=\"146\" y=\"98\">&#947;</text>\n<text class=\"acc\" x=\"264\" y=\"186\">&#945;+&#947;</text>\n</svg>",
     "cap": {
      "ru": "Внешний угол $\\angle CBD$ дополняет угол $B$ до $180^\\circ$ — ровно столько же дополняют его $\\alpha$ и $\\gamma$.",
      "en": "The exterior angle $\\angle CBD$ completes angle $B$ to $180^\\circ$ — and so do $\\alpha$ and $\\gamma$ together."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Пусть углы треугольника равны $\\alpha,\\beta,\\gamma$. Внешний угол при вершине $B$ смежен с углом $\\beta$, поэтому равен $180^\\circ-\\beta$. Но по теореме о сумме углов $\\alpha+\\gamma=180^\\circ-\\beta$. Значит внешний угол равен $\\alpha+\\gamma$. $\\blacksquare$",
      "en": "Let the angles be $\\alpha,\\beta,\\gamma$. The exterior angle at $B$ is supplementary to $\\beta$, hence equals $180^\\circ-\\beta$. But the angle sum gives $\\alpha+\\gamma=180^\\circ-\\beta$. So the exterior angle equals $\\alpha+\\gamma$. $\\blacksquare$"
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Счёт углов",
      "en": "Angle chasing"
     },
     "text": {
      "ru": "Половина планиметрических задач решается «счётом углов»: обозначьте один неизвестный угол буквой и выразите через него все остальные. Работают всего четыре факта: сумма углов треугольника, внешний угол, вертикальные углы равны, и углы при параллельных прямых (накрест лежащие равны, односторонние дают $180^\\circ$).",
      "en": "Half of all plane-geometry problems fall to \"angle chasing\": name one unknown angle and express every other through it. Four facts do the work: the angle sum, the exterior angle, vertical angles are equal, and the angles at parallel lines (alternate ones equal, co-interior ones adding to $180^\\circ$)."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Углы треугольника относятся как $2:3:4$. Найдите их.",
      "en": "The angles of a triangle are in the ratio $2:3:4$. Find them."
     },
     "steps": {
      "ru": [
       "Пусть углы равны $2x$, $3x$ и $4x$.",
       "Сумма: $2x+3x+4x=180^\\circ$, то есть $9x=180^\\circ$.",
       "Значит $x=20^\\circ$."
      ],
      "en": [
       "Let the angles be $2x$, $3x$ and $4x$.",
       "Their sum: $2x+3x+4x=180^\\circ$, so $9x=180^\\circ$.",
       "Hence $x=20^\\circ$."
      ]
     },
     "ans": {
      "ru": "$40^\\circ$, $60^\\circ$, $80^\\circ$.",
      "en": "$40^\\circ$, $60^\\circ$, $80^\\circ$."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Три признака равенства",
    "en": "The three congruence criteria"
   },
   "blocks": [
    {
     "t": "def",
     "name": {
      "ru": "Равные треугольники",
      "en": "Congruent triangles"
     },
     "text": {
      "ru": "Два треугольника **равны**, если их можно совместить наложением, — то есть если соответственные стороны и соответственные углы равны. Проверять все шесть элементов не нужно: достаточно трёх, но не любых.",
      "en": "Two triangles are **congruent** if one can be laid on the other — that is, if corresponding sides and corresponding angles are equal. There is no need to check all six elements: three suffice, but not any three."
     }
    },
    {
     "t": "ul",
     "items": {
      "ru": [
       "**СУС** (сторона–угол–сторона): две стороны и угол **между ними**.",
       "**УСУ** (угол–сторона–угол): сторона и два прилежащих к ней угла.",
       "**ССС** (три стороны).",
       "Для прямоугольных треугольников добавляется удобный признак: **по катету и гипотенузе**."
      ],
      "en": [
       "**SAS** (side–angle–side): two sides and the angle **between them**.",
       "**ASA** (angle–side–angle): a side and the two angles at its ends.",
       "**SSS** (three sides).",
       "For right triangles there is a convenient extra one: **leg and hypotenuse**."
      ]
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Признака «две стороны и угол **не** между ними» не существует. Постройте угол $30^\\circ$, отложите на одной его стороне отрезок $10$, а из его конца проведите окружность радиуса $6$ — она пересечёт вторую сторону угла в **двух** точках, и получатся два **разных** треугольника с одинаковыми двумя сторонами и углом. Это классическая ловушка.",
      "en": "There is no \"two sides and an angle **not** between them\" criterion. Draw an angle of $30^\\circ$, mark a segment of length $10$ on one arm, and from its end draw a circle of radius $6$ — it meets the other arm in **two** points, giving two **different** triangles with the same two sides and angle. This is the classic trap."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Как оформлять доказательство",
      "en": "How to write such a proof"
     },
     "text": {
      "ru": "Хорошее доказательство равенства выглядит так:\n\n**1)** назовите пару треугольников, которые собираетесь сравнивать;\n**2)** выпишите **три** равенства, каждое со ссылкой на условие или уже доказанное;\n**3)** назовите признак;\n**4)** выпишите то, что вам нужно, как следствие равенства треугольников.\n\nПоследний шаг забывают чаще всего — а ведь именно ради него всё и делалось.",
      "en": "A good congruence proof looks like this:\n\n**1)** name the pair of triangles you are comparing;\n**2)** write out **three** equalities, each justified by the hypothesis or by something already proved;\n**3)** name the criterion;\n**4)** write down what you actually need, as a consequence of the congruence.\n\nThe last step is the one most often forgotten — even though it is the whole point."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "На сторонах угла с вершиной $O$ отложены отрезки $OA=OB$ и $OC=OD$, причём точки $A,C$ лежат на одной стороне, а $B,D$ — на другой. Докажите, что $AD=BC$.",
      "en": "On the arms of an angle with vertex $O$ we mark $OA=OB$ and $OC=OD$, with $A,C$ on one arm and $B,D$ on the other. Prove that $AD=BC$."
     },
     "steps": {
      "ru": [
       "Сравним треугольники $OAD$ и $OBC$.",
       "$OA=OB$ — по условию.",
       "$OD=OC$ — по условию.",
       "$\\angle AOD=\\angle BOC$ — это один и тот же угол при вершине $O$.",
       "Значит треугольники равны по признаку **СУС**.",
       "Из равенства треугольников следует равенство соответственных сторон: $AD=BC$."
      ],
      "en": [
       "Compare the triangles $OAD$ and $OBC$.",
       "$OA=OB$ — by hypothesis.",
       "$OD=OC$ — by hypothesis.",
       "$\\angle AOD=\\angle BOC$ — it is one and the same angle at $O$.",
       "So the triangles are congruent by **SAS**.",
       "Congruent triangles have equal corresponding sides, hence $AD=BC$."
      ]
     },
     "ans": {
      "ru": "$AD=BC$. $\\blacksquare$",
      "en": "$AD=BC$. $\\blacksquare$"
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Равнобедренный треугольник",
    "en": "The isosceles triangle"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Свойство и признак",
      "en": "Property and converse"
     },
     "text": {
      "ru": "В треугольнике **углы при основании равны тогда и только тогда, когда равны боковые стороны**. Более того, в равнобедренном треугольнике медиана, высота и биссектриса, проведённые к основанию, — это один и тот же отрезок.",
      "en": "In a triangle the **base angles are equal if and only if the two sides are equal**. Moreover, in an isosceles triangle the median, the altitude and the angle bisector to the base are one and the same segment."
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 400 250\" role=\"img\" aria-label=\"Isosceles triangle with the median to the base\">\n<path class=\"ln\" d=\"M200 55 L80 210 L320 210 Z\"/>\n<path class=\"lnc\" d=\"M200 55 V210\"/>\n<path class=\"ln\" d=\"M135.3 128.7 L144.7 136.3\" /><path class=\"ln\" d=\"M255.3 136.3 L264.7 128.7\"/>\n<path class=\"ln\" d=\"M200 198 H212 V210\"/>\n<circle class=\"pt\" cx=\"200\" cy=\"55\" r=\"3.5\"/><circle class=\"pt\" cx=\"80\" cy=\"210\" r=\"3.5\"/>\n<circle class=\"pt\" cx=\"320\" cy=\"210\" r=\"3.5\"/><circle class=\"ptc\" cx=\"200\" cy=\"210\" r=\"3.5\"/>\n<text x=\"194\" y=\"38\">A</text><text x=\"62\" y=\"230\">B</text><text x=\"326\" y=\"230\">C</text>\n<text class=\"acc\" x=\"194\" y=\"232\">M</text>\n</svg>",
     "cap": {
      "ru": "Треугольник $ABC$ с $AB=AC$; отрезок $AM$ — сразу медиана, высота и биссектриса.",
      "en": "A triangle $ABC$ with $AB=AC$; the segment $AM$ is at once median, altitude and bisector."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Пусть $AB=AC$ и $M$ — середина $BC$. Сравним треугольники $ABM$ и $ACM$:\n\n$AB=AC$ (условие), $BM=CM$ (середина), $AM$ — общая сторона.\n\nПо признаку **ССС** треугольники равны. Отсюда сразу:\n\n$\\angle B=\\angle C$ — углы при основании равны;\n$\\angle BAM=\\angle CAM$ — значит $AM$ биссектриса;\n$\\angle AMB=\\angle AMC$, а в сумме они дают $180^\\circ$, значит каждый равен $90^\\circ$ — значит $AM$ высота. $\\blacksquare$",
      "en": "Let $AB=AC$ and let $M$ be the midpoint of $BC$. Compare the triangles $ABM$ and $ACM$:\n\n$AB=AC$ (hypothesis), $BM=CM$ (midpoint), $AM$ is common.\n\nBy **SSS** the triangles are congruent. At once:\n\n$\\angle B=\\angle C$ — the base angles are equal;\n$\\angle BAM=\\angle CAM$ — so $AM$ is a bisector;\n$\\angle AMB=\\angle AMC$, and together they make $180^\\circ$, so each is $90^\\circ$ — so $AM$ is an altitude. $\\blacksquare$"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Обратное тоже верно и доказывается так же: если $\\angle B=\\angle C$, то треугольники $ABM$ и $ACM$ равны по **УСУ**, откуда $AB=AC$. Эта пара утверждений — рабочая лошадка всей планиметрии: **равные углы дают равные стороны, и наоборот**.",
      "en": "The converse holds and is proved the same way: if $\\angle B=\\angle C$ then $ABM$ and $ACM$ are congruent by **ASA**, so $AB=AC$. This pair of statements is the workhorse of plane geometry: **equal angles give equal sides, and back again**."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "В равнобедренном треугольнике угол при вершине равен $40^\\circ$. Найдите углы при основании и угол между боковой стороной и высотой, опущенной на основание.",
      "en": "An isosceles triangle has apex angle $40^\\circ$. Find the base angles, and the angle between a leg and the altitude to the base."
     },
     "steps": {
      "ru": [
       "Углы при основании равны; обозначим каждый через $\\beta$.",
       "Сумма углов: $40^\\circ+2\\beta=180^\\circ$, значит $\\beta=70^\\circ$.",
       "Высота к основанию совпадает с биссектрисой, поэтому она делит угол при вершине пополам.",
       "Угол между боковой стороной и высотой равен $\\tfrac{40^\\circ}{2}=20^\\circ$."
      ],
      "en": [
       "The base angles are equal; call each $\\beta$.",
       "Angle sum: $40^\\circ+2\\beta=180^\\circ$, so $\\beta=70^\\circ$.",
       "The altitude to the base coincides with the bisector, so it halves the apex angle.",
       "The angle between a leg and the altitude is $\\tfrac{40^\\circ}{2}=20^\\circ$."
      ]
     },
     "ans": {
      "ru": "Углы при основании по $70^\\circ$; искомый угол равен $20^\\circ$.",
      "en": "The base angles are $70^\\circ$ each; the required angle is $20^\\circ$."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Средняя линия и подобие",
    "en": "Midlines and similarity"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Средняя линия треугольника",
      "en": "The midline of a triangle"
     },
     "text": {
      "ru": "Отрезок, соединяющий середины двух сторон треугольника, **параллелен третьей стороне и равен её половине**.",
      "en": "The segment joining the midpoints of two sides of a triangle is **parallel to the third side and half its length**."
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 400 250\" role=\"img\" aria-label=\"Midline of a triangle\">\n<path class=\"ln\" d=\"M200 50 L60 215 L340 215 Z\"/>\n<path class=\"lnc\" d=\"M130 132.5 H270\"/>\n<circle class=\"pt\" cx=\"200\" cy=\"50\" r=\"3.5\"/><circle class=\"pt\" cx=\"60\" cy=\"215\" r=\"3.5\"/>\n<circle class=\"pt\" cx=\"340\" cy=\"215\" r=\"3.5\"/>\n<circle class=\"ptc\" cx=\"130\" cy=\"132.5\" r=\"3.5\"/><circle class=\"ptc\" cx=\"270\" cy=\"132.5\" r=\"3.5\"/>\n<text x=\"194\" y=\"34\">A</text><text x=\"42\" y=\"235\">B</text><text x=\"346\" y=\"235\">C</text>\n<text class=\"acc\" x=\"104\" y=\"130\">M</text><text class=\"acc\" x=\"282\" y=\"130\">N</text>\n</svg>",
     "cap": {
      "ru": "$M$ и $N$ — середины сторон $AB$ и $AC$; тогда $MN\\parallel BC$ и $MN=\\tfrac12BC$.",
      "en": "$M$ and $N$ are the midpoints of $AB$ and $AC$; then $MN\\parallel BC$ and $MN=\\tfrac12BC$."
     }
    },
    {
     "t": "def",
     "name": {
      "ru": "Подобие",
      "en": "Similarity"
     },
     "text": {
      "ru": "Треугольники **подобны**, если их углы соответственно равны, а стороны пропорциональны: $$\\frac{A_1B_1}{AB}=\\frac{B_1C_1}{BC}=\\frac{C_1A_1}{CA}=k .$$ Число $k$ называют **коэффициентом подобия**.",
      "en": "Triangles are **similar** if their angles are equal in pairs and their sides proportional: $$\\frac{A_1B_1}{AB}=\\frac{B_1C_1}{BC}=\\frac{C_1A_1}{CA}=k .$$ The number $k$ is the **ratio of similarity**."
     }
    },
    {
     "t": "ul",
     "items": {
      "ru": [
       "**Признак по двум углам.** Если два угла одного треугольника равны двум углам другого, треугольники подобны. На практике используется чаще всех остальных вместе взятых.",
       "**Признак по двум сторонам и углу между ними.**",
       "**Признак по трём сторонам.**",
       "**Площади** подобных треугольников относятся как $k^{2}$, а не как $k$."
      ],
      "en": [
       "**Two angles.** If two angles of one triangle equal two angles of another, the triangles are similar. In practice this is used more than all the others together.",
       "**Two sides and the angle between them.**",
       "**Three sides.**",
       "**Areas** of similar triangles are in the ratio $k^{2}$, not $k$."
      ]
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Доказательство теоремы о средней линии.** Треугольники $AMN$ и $ABC$ имеют общий угол $A$, а прилежащие к нему стороны пропорциональны: $$\\frac{AM}{AB}=\\frac{AN}{AC}=\\frac12 .$$ Значит они подобны с коэффициентом $\\tfrac12$ (признак по двум сторонам и углу между ними). Отсюда $MN=\\tfrac12BC$, а из равенства соответственных углов $\\angle AMN=\\angle ABC$ следует $MN\\parallel BC$. $\\blacksquare$",
      "en": "**Proof of the midline theorem.** The triangles $AMN$ and $ABC$ share the angle $A$, and the sides at that angle are proportional: $$\\frac{AM}{AB}=\\frac{AN}{AC}=\\frac12 .$$ So they are similar with ratio $\\tfrac12$ (two sides and the included angle). Hence $MN=\\tfrac12BC$, and the equal corresponding angles $\\angle AMN=\\angle ABC$ give $MN\\parallel BC$. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Прямая, параллельная основанию треугольника, отсекает от него треугольник, площадь которого в $9$ раз меньше. В каком отношении эта прямая делит боковую сторону, считая от вершины?",
      "en": "A line parallel to the base of a triangle cuts off a triangle of one ninth the area. In what ratio does it divide a lateral side, counting from the apex?"
     },
     "steps": {
      "ru": [
       "Отсечённый треугольник подобен исходному: у них общий угол при вершине, а углы при секущей прямой равны углам при основании (соответственные углы при параллельных).",
       "Отношение площадей равно квадрату коэффициента: $k^{2}=\\tfrac19$.",
       "Значит $k=\\tfrac13$.",
       "Отрезок от вершины до секущей составляет $\\tfrac13$ стороны, оставшийся — $\\tfrac23$."
      ],
      "en": [
       "The small triangle is similar to the original: they share the apex angle, and the angles at the cutting line equal the base angles (corresponding angles at parallels).",
       "The ratio of areas is the square of the ratio of sides: $k^{2}=\\tfrac19$.",
       "So $k=\\tfrac13$.",
       "The piece from the apex to the line is $\\tfrac13$ of the side, the rest is $\\tfrac23$."
      ]
     },
     "ans": {
      "ru": "В отношении $1:2$, считая от вершины.",
      "en": "In the ratio $1:2$, counting from the apex."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Медианы и приём удвоения",
    "en": "Medians and the doubling trick"
   },
   "blocks": [
    {
     "t": "idea",
     "name": {
      "ru": "Удвоение медианы",
      "en": "Doubling the median"
     },
     "text": {
      "ru": "Если в задаче есть медиана, продлите её за середину стороны на такую же длину. Получится **параллелограмм** — и медиана превратится в его диагональ, а две стороны треугольника окажутся рядом, в одном треугольнике. Это самый частый приём в задачах с медианами.",
      "en": "Whenever a median appears, extend it beyond the midpoint by its own length. The result is a **parallelogram** — the median becomes one of its diagonals, and the two sides of the triangle end up side by side in one triangle. This is the commonest move in median problems."
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 400 340\" role=\"img\" aria-label=\"Doubling a median to build a parallelogram\">\n<path class=\"ln\" d=\"M160 40 L60 170 L300 170 Z\"/>\n<path class=\"lnc\" d=\"M160 40 L200 300\"/>\n<path class=\"dsh\" d=\"M60 170 L200 300 L300 170\"/>\n<circle class=\"pt\" cx=\"160\" cy=\"40\" r=\"3.5\"/><circle class=\"pt\" cx=\"60\" cy=\"170\" r=\"3.5\"/>\n<circle class=\"pt\" cx=\"300\" cy=\"170\" r=\"3.5\"/>\n<circle class=\"ptc\" cx=\"180\" cy=\"170\" r=\"3.5\"/><circle class=\"ptc\" cx=\"200\" cy=\"300\" r=\"3.5\"/>\n<text x=\"154\" y=\"24\">A</text><text x=\"40\" y=\"188\">B</text><text x=\"306\" y=\"188\">C</text>\n<text class=\"acc\" x=\"184\" y=\"158\">M</text><text class=\"acc\" x=\"206\" y=\"316\">D</text>\n</svg>",
     "cap": {
      "ru": "Медиана $AM$ продлена до точки $D$ так, что $MD=AM$. Тогда $ABDC$ — параллелограмм: диагонали делят друг друга пополам.",
      "en": "The median $AM$ is extended to $D$ with $MD=AM$. Then $ABDC$ is a parallelogram: its diagonals bisect each other."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Докажите, что медиана треугольника меньше полусуммы двух прилежащих сторон: $$AM<\\frac{AB+AC}{2}.$$",
      "en": "Prove that a median of a triangle is less than half the sum of the two sides at its vertex: $$AM<\\frac{AB+AC}{2}.$$"
     },
     "steps": {
      "ru": [
       "Продлим $AM$ за точку $M$ до точки $D$ так, что $MD=AM$ (рисунок выше).",
       "В четырёхугольнике $ABDC$ диагонали $AD$ и $BC$ пересекаются в точке $M$ и делятся ею пополам, значит $ABDC$ — параллелограмм.",
       "Отсюда $CD=AB$ (противоположные стороны параллелограмма).",
       "Рассмотрим треугольник $ACD$. По неравенству треугольника $$AD<AC+CD=AC+AB .$$",
       "Но $AD=2AM$, поэтому $2AM<AB+AC$."
      ],
      "en": [
       "Extend $AM$ beyond $M$ to a point $D$ with $MD=AM$ (see the figure).",
       "In the quadrilateral $ABDC$ the diagonals $AD$ and $BC$ meet at $M$ and bisect each other, so $ABDC$ is a parallelogram.",
       "Hence $CD=AB$ (opposite sides of a parallelogram).",
       "Consider the triangle $ACD$. The triangle inequality gives $$AD<AC+CD=AC+AB .$$",
       "But $AD=2AM$, so $2AM<AB+AC$."
      ]
     },
     "ans": {
      "ru": "$AM<\\dfrac{AB+AC}{2}$. $\\blacksquare$",
      "en": "$AM<\\dfrac{AB+AC}{2}$. $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Точка пересечения медиан",
      "en": "The centroid"
     },
     "text": {
      "ru": "Три медианы треугольника пересекаются в одной точке и делятся ею в отношении $2:1$, считая от вершины. Эту точку называют **центроидом** (или центром тяжести) треугольника.",
      "en": "The three medians of a triangle meet at one point and are divided by it in the ratio $2:1$, counting from the vertex. That point is the **centroid** (or centre of mass) of the triangle."
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 400 250\" role=\"img\" aria-label=\"The three medians meet at one point\">\n<path class=\"ln\" d=\"M170 40 L50 215 L350 215 Z\"/>\n<path class=\"lnc\" d=\"M170 40 L200 215\"/><path class=\"lnc\" d=\"M50 215 L260 127.5\"/>\n<path class=\"lnc\" d=\"M350 215 L110 127.5\"/>\n<circle class=\"pt\" cx=\"170\" cy=\"40\" r=\"3.5\"/><circle class=\"pt\" cx=\"50\" cy=\"215\" r=\"3.5\"/>\n<circle class=\"pt\" cx=\"350\" cy=\"215\" r=\"3.5\"/>\n<circle class=\"ptc\" cx=\"190\" cy=\"156.7\" r=\"4.5\"/>\n<text x=\"164\" y=\"24\">A</text><text x=\"32\" y=\"235\">B</text><text x=\"356\" y=\"235\">C</text>\n<text class=\"acc\" x=\"198\" y=\"152\">G</text>\n</svg>",
     "cap": {
      "ru": "Все три медианы проходят через одну точку $G$, причём $AG:GM=2:1$.",
      "en": "All three medians pass through one point $G$, with $AG:GM=2:1$."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Полное доказательство разобрано в задаче 17 ниже. Идея короткая: две медианы пересекаются в точке, делящей каждую в отношении $2:1$ (это даёт средняя линия), а такая точка на каждой медиане ровно одна — значит третья медиана проходит через неё же.",
      "en": "The full proof is problem 17 below. The idea is short: two medians meet at a point dividing each in the ratio $2:1$ (the midline gives this), and each median has exactly one such point — so the third median passes through it too."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Прямоугольный треугольник",
    "en": "The right triangle"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Теорема Пифагора",
      "en": "The Pythagorean theorem"
     },
     "text": {
      "ru": "В прямоугольном треугольнике квадрат гипотенузы равен сумме квадратов катетов: $$a^{2}+b^{2}=c^{2}.$$",
      "en": "In a right triangle the square of the hypotenuse equals the sum of the squares of the legs: $$a^{2}+b^{2}=c^{2}.$$"
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 400 250\" role=\"img\" aria-label=\"Right triangle with the altitude to the hypotenuse\">\n<path class=\"ln\" d=\"M50 210 L350 210 L134 60 Z\"/>\n<path class=\"lnc\" d=\"M134 60 V210\"/>\n<path class=\"ln\" d=\"M134 198 H146 V210\"/>\n<path class=\"ln\" d=\"M120 72 L131 80 L123 91\"/>\n<circle class=\"pt\" cx=\"50\" cy=\"210\" r=\"3.5\"/><circle class=\"pt\" cx=\"350\" cy=\"210\" r=\"3.5\"/>\n<circle class=\"pt\" cx=\"134\" cy=\"60\" r=\"3.5\"/><circle class=\"ptc\" cx=\"134\" cy=\"210\" r=\"3.5\"/>\n<text x=\"34\" y=\"230\">B</text><text x=\"356\" y=\"230\">C</text><text x=\"126\" y=\"44\">A</text>\n<text class=\"acc\" x=\"126\" y=\"232\">H</text>\n</svg>",
     "cap": {
      "ru": "Высота $AH$ разбивает прямоугольный треугольник на два, каждый из которых подобен исходному.",
      "en": "The altitude $AH$ splits a right triangle into two, each similar to the original."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Пусть в треугольнике $ABC$ угол $A$ прямой, и $AH$ — высота к гипотенузе $BC$.\n\nТреугольники $ABH$ и $CBA$ имеют общий угол $B$ и по прямому углу ($\\angle AHB=\\angle CAB=90^\\circ$), значит подобны. Отсюда $$\\frac{AB}{CB}=\\frac{BH}{AB}\\quad\\Longrightarrow\\quad AB^{2}=CB\\cdot BH .$$ Точно так же треугольники $ACH$ и $BCA$ подобны, откуда $$AC^{2}=CB\\cdot CH .$$ Складываем: $$AB^{2}+AC^{2}=CB\\cdot(BH+CH)=CB\\cdot CB=CB^{2}. \\qquad\\blacksquare$$",
      "en": "Let $ABC$ have a right angle at $A$, and let $AH$ be the altitude to the hypotenuse $BC$.\n\nThe triangles $ABH$ and $CBA$ share the angle $B$ and each has a right angle ($\\angle AHB=\\angle CAB=90^\\circ$), so they are similar. Hence $$\\frac{AB}{CB}=\\frac{BH}{AB}\\quad\\Longrightarrow\\quad AB^{2}=CB\\cdot BH .$$ In the same way $ACH$ and $BCA$ are similar, giving $$AC^{2}=CB\\cdot CH .$$ Adding, $$AB^{2}+AC^{2}=CB\\cdot(BH+CH)=CB\\cdot CB=CB^{2}. \\qquad\\blacksquare$$"
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Что ещё даёт эта картинка",
      "en": "What else the picture gives"
     },
     "text": {
      "ru": "Из тех же подобий получаются две формулы, полезные в задачах: $$AH^{2}=BH\\cdot CH\\qquad\\text{и}\\qquad AH=\\frac{AB\\cdot AC}{BC}.$$ Первую называют соотношением для высоты, вторая — просто два способа посчитать площадь.",
      "en": "The same similarities give two formulas worth having: $$AH^{2}=BH\\cdot CH\\qquad\\text{and}\\qquad AH=\\frac{AB\\cdot AC}{BC}.$$ The first is the altitude relation; the second is just two ways of computing the area."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Тройки целых чисел, для которых теорема Пифагора выполняется, называют **пифагоровыми**. Самые нужные наизусть: $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$ и все их кратные, например $(6,8,10)$.",
      "en": "Triples of integers satisfying the Pythagorean relation are called **Pythagorean**. Worth memorising: $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$, and all their multiples, such as $(6,8,10)$."
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
    "ru": "Один из углов треугольника равен $80^\\circ$, а два других относятся как $2:3$. Найдите эти углы.",
    "en": "One angle of a triangle is $80^\\circ$ and the other two are in the ratio $2:3$. Find them."
   },
   "hint": {
    "ru": "Сумма двух оставшихся углов известна.",
    "en": "The sum of the remaining two angles is known."
   },
   "sol": {
    "ru": "Сумма двух оставшихся углов равна $180^\\circ-80^\\circ=100^\\circ$. Пусть они равны $2x$ и $3x$; тогда $5x=100^\\circ$ и $x=20^\\circ$.\n\n**Ответ:** $40^\\circ$ и $60^\\circ$ (вместе с данным $80^\\circ$).",
    "en": "The remaining two angles add up to $180^\\circ-80^\\circ=100^\\circ$. Let them be $2x$ and $3x$; then $5x=100^\\circ$ and $x=20^\\circ$.\n\n**Answer:** $40^\\circ$ and $60^\\circ$ (together with the given $80^\\circ$)."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Внешний угол треугольника равен $110^\\circ$, а один из внутренних углов, не смежных с ним, равен $45^\\circ$. Найдите все углы треугольника.",
    "en": "An exterior angle of a triangle is $110^\\circ$ and one of the interior angles not adjacent to it is $45^\\circ$. Find all the angles of the triangle."
   },
   "hint": {
    "ru": "Внешний угол равен сумме двух несмежных внутренних.",
    "en": "The exterior angle equals the sum of the two non-adjacent interior angles."
   },
   "sol": {
    "ru": "По теореме о внешнем угле $110^\\circ=45^\\circ+\\gamma$, откуда $\\gamma=65^\\circ$.\n\nУгол, смежный с внешним, равен $180^\\circ-110^\\circ=70^\\circ$.\n\n**Проверка:** $45^\\circ+65^\\circ+70^\\circ=180^\\circ$ ✓ **Ответ:** $45^\\circ$, $65^\\circ$, $70^\\circ$.",
    "en": "By the exterior angle theorem $110^\\circ=45^\\circ+\\gamma$, so $\\gamma=65^\\circ$.\n\nThe angle adjacent to the exterior one is $180^\\circ-110^\\circ=70^\\circ$.\n\n**Check:** $45^\\circ+65^\\circ+70^\\circ=180^\\circ$ ✓ **Answer:** $45^\\circ$, $65^\\circ$, $70^\\circ$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Периметр треугольника равен $30$. Чему равен периметр треугольника, вершинами которого служат середины его сторон?",
    "en": "A triangle has perimeter $30$. What is the perimeter of the triangle whose vertices are the midpoints of its sides?"
   },
   "hint": {
    "ru": "Каждая сторона нового треугольника — средняя линия.",
    "en": "Each side of the new triangle is a midline."
   },
   "sol": {
    "ru": "Каждая сторона серединного треугольника — средняя линия исходного, а значит равна половине соответствующей стороны. Поэтому и периметр вдвое меньше: $$P_{\\text{нов}}=\\frac{30}{2}=15 .$$ **Ответ:** $15$.\n\n*Замечание.* Серединный треугольник подобен исходному с коэффициентом $\\tfrac12$, поэтому его площадь в $4$ раза меньше.",
    "en": "Each side of the medial triangle is a midline of the original and hence half the corresponding side. So the perimeter is halved too: $$P_{\\text{new}}=\\frac{30}{2}=15 .$$ **Answer:** $15$.\n\n*Remark.* The medial triangle is similar to the original with ratio $\\tfrac12$, so its area is four times smaller."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Найдите угол между биссектрисами острых углов прямоугольного треугольника.",
    "en": "Find the angle between the bisectors of the two acute angles of a right triangle."
   },
   "hint": {
    "ru": "Сумма острых углов равна $90^\\circ$.",
    "en": "The acute angles add up to $90^\\circ$."
   },
   "sol": {
    "ru": "Пусть острые углы равны $\\beta$ и $\\gamma$, причём $\\beta+\\gamma=90^\\circ$. Биссектрисы отсекают половины: $\\tfrac\\beta2$ и $\\tfrac\\gamma2$.\n\nВ треугольнике, образованном двумя биссектрисами и стороной между вершинами $B$ и $C$, сумма двух известных углов равна $$\\frac\\beta2+\\frac\\gamma2=\\frac{\\beta+\\gamma}{2}=45^\\circ .$$ Значит третий угол равен $180^\\circ-45^\\circ=135^\\circ$.\n\n**Ответ:** $135^\\circ$ (второй, смежный с ним угол между биссектрисами равен $45^\\circ$).",
    "en": "Let the acute angles be $\\beta$ and $\\gamma$ with $\\beta+\\gamma=90^\\circ$. The bisectors cut off $\\tfrac\\beta2$ and $\\tfrac\\gamma2$.\n\nIn the triangle formed by the two bisectors and the side between $B$ and $C$, the two known angles add up to $$\\frac\\beta2+\\frac\\gamma2=\\frac{\\beta+\\gamma}{2}=45^\\circ .$$ So the third angle is $180^\\circ-45^\\circ=135^\\circ$.\n\n**Answer:** $135^\\circ$ (the other, supplementary angle between the bisectors is $45^\\circ$)."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Катеты прямоугольного треугольника равны $6$ и $8$. Найдите гипотенузу и высоту, проведённую к ней.",
    "en": "The legs of a right triangle are $6$ and $8$. Find the hypotenuse and the altitude to it."
   },
   "hint": {
    "ru": "Площадь можно посчитать двумя способами.",
    "en": "The area can be computed in two ways."
   },
   "sol": {
    "ru": "По теореме Пифагора $$c=\\sqrt{6^{2}+8^{2}}=\\sqrt{100}=10 .$$\n\nПлощадь треугольника считаем двумя способами: через катеты и через гипотенузу с высотой: $$S=\\frac{6\\cdot8}{2}=24,\\qquad S=\\frac{c\\cdot h}{2}=\\frac{10h}{2}=5h .$$ Значит $5h=24$ и $h=4{,}8$.\n\n**Ответ:** гипотенуза $10$, высота $4{,}8$.",
    "en": "By Pythagoras $$c=\\sqrt{6^{2}+8^{2}}=\\sqrt{100}=10 .$$\n\nCompute the area in two ways — from the legs, and from the hypotenuse with its altitude: $$S=\\frac{6\\cdot8}{2}=24,\\qquad S=\\frac{c\\cdot h}{2}=\\frac{10h}{2}=5h .$$ So $5h=24$ and $h=4.8$.\n\n**Answer:** the hypotenuse is $10$ and the altitude $4.8$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "В треугольнике $ABC$ известно, что $AB=AC$ и точка $M$ — середина $BC$. Докажите, что $AM\\perp BC$.",
    "en": "In a triangle $ABC$ we have $AB=AC$ and $M$ is the midpoint of $BC$. Prove that $AM\\perp BC$."
   },
   "hint": {
    "ru": "Сравните треугольники $ABM$ и $ACM$.",
    "en": "Compare the triangles $ABM$ and $ACM$."
   },
   "sol": {
    "ru": "Сравним треугольники $ABM$ и $ACM$:\n\n$AB=AC$ — по условию;\n$BM=CM$ — так как $M$ середина $BC$;\n$AM$ — общая сторона.\n\nПо признаку **ССС** треугольники равны, значит $\\angle AMB=\\angle AMC$.\n\nЭти два угла смежные, поэтому их сумма равна $180^\\circ$. Из равенства и суммы получаем $$\\angle AMB=\\angle AMC=90^\\circ,$$ то есть $AM\\perp BC$. $\\blacksquare$",
    "en": "Compare the triangles $ABM$ and $ACM$:\n\n$AB=AC$ — by hypothesis;\n$BM=CM$ — since $M$ is the midpoint of $BC$;\n$AM$ is common.\n\nBy **SSS** they are congruent, so $\\angle AMB=\\angle AMC$.\n\nThese two angles are supplementary, so they add to $180^\\circ$. Equal and adding to $180^\\circ$ forces $$\\angle AMB=\\angle AMC=90^\\circ,$$ that is $AM\\perp BC$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что медиана прямоугольного треугольника, проведённая к гипотенузе, равна её половине.",
    "en": "Prove that the median to the hypotenuse of a right triangle equals half the hypotenuse."
   },
   "hint": {
    "ru": "Удвойте медиану — получится прямоугольник.",
    "en": "Double the median — a rectangle appears."
   },
   "sol": {
    "ru": "Пусть в треугольнике $ABC$ угол $A$ прямой, $M$ — середина гипотенузы $BC$. Продлим медиану $AM$ за точку $M$ на такую же длину до точки $D$.\n\nВ четырёхугольнике $ABDC$ диагонали $AD$ и $BC$ делятся точкой пересечения $M$ пополам, значит $ABDC$ — параллелограмм. Но один его угол — угол $A$ — прямой, а в параллелограмме противоположные углы равны и соседние в сумме дают $180^\\circ$; значит **все** углы прямые, и $ABDC$ — прямоугольник.\n\nУ прямоугольника диагонали равны: $AD=BC$. Но $AD=2AM$, поэтому $$AM=\\frac{BC}{2}. \\qquad\\blacksquare$$\n\n*Следствие.* Точка $M$ равноудалена от всех трёх вершин, то есть является центром описанной окружности прямоугольного треугольника, а гипотенуза — её диаметром.",
    "en": "Let $ABC$ have a right angle at $A$ and let $M$ be the midpoint of the hypotenuse $BC$. Extend the median $AM$ beyond $M$ by its own length to a point $D$.\n\nIn the quadrilateral $ABDC$ the diagonals $AD$ and $BC$ bisect each other at $M$, so $ABDC$ is a parallelogram. But one of its angles — the angle $A$ — is right, and in a parallelogram opposite angles are equal while adjacent ones add to $180^\\circ$; so **every** angle is right and $ABDC$ is a rectangle.\n\nA rectangle has equal diagonals: $AD=BC$. Since $AD=2AM$, $$AM=\\frac{BC}{2}. \\qquad\\blacksquare$$\n\n*Corollary.* The point $M$ is equidistant from all three vertices, so it is the circumcentre of the right triangle and the hypotenuse is a diameter of its circumcircle."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Биссектрисы углов $B$ и $C$ треугольника $ABC$ пересекаются в точке $I$. Докажите, что $$\\angle BIC=90^\\circ+\\frac{\\angle A}{2}.$$",
    "en": "The bisectors of the angles $B$ and $C$ of a triangle $ABC$ meet at $I$. Prove that $$\\angle BIC=90^\\circ+\\frac{\\angle A}{2}.$$"
   },
   "hint": {
    "ru": "Посчитайте углы треугольника $BIC$.",
    "en": "Chase the angles of the triangle $BIC$."
   },
   "sol": {
    "ru": "Обозначим углы треугольника через $\\alpha,\\beta,\\gamma$, так что $\\alpha+\\beta+\\gamma=180^\\circ$.\n\nВ треугольнике $BIC$ угол при вершине $B$ равен половине угла $B$ исходного треугольника, то есть $\\tfrac\\beta2$; аналогично угол при $C$ равен $\\tfrac\\gamma2$. Значит $$\\angle BIC=180^\\circ-\\frac\\beta2-\\frac\\gamma2=180^\\circ-\\frac{\\beta+\\gamma}{2}.$$ Но $\\beta+\\gamma=180^\\circ-\\alpha$, поэтому $$\\angle BIC=180^\\circ-\\frac{180^\\circ-\\alpha}{2}=180^\\circ-90^\\circ+\\frac\\alpha2=90^\\circ+\\frac{\\alpha}{2}. \\qquad\\blacksquare$$\n\n*Проверка:* в равностороннем треугольнике $\\alpha=60^\\circ$ и $\\angle BIC=120^\\circ$ — действительно так.",
    "en": "Write the angles as $\\alpha,\\beta,\\gamma$, so $\\alpha+\\beta+\\gamma=180^\\circ$.\n\nIn the triangle $BIC$ the angle at $B$ is half the original angle $B$, that is $\\tfrac\\beta2$, and likewise the angle at $C$ is $\\tfrac\\gamma2$. Hence $$\\angle BIC=180^\\circ-\\frac\\beta2-\\frac\\gamma2=180^\\circ-\\frac{\\beta+\\gamma}{2}.$$ But $\\beta+\\gamma=180^\\circ-\\alpha$, so $$\\angle BIC=180^\\circ-\\frac{180^\\circ-\\alpha}{2}=180^\\circ-90^\\circ+\\frac\\alpha2=90^\\circ+\\frac{\\alpha}{2}. \\qquad\\blacksquare$$\n\n*Check:* in an equilateral triangle $\\alpha=60^\\circ$ and $\\angle BIC=120^\\circ$ — which is right."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что в треугольнике против большей стороны лежит больший угол.",
    "en": "Prove that in a triangle the larger angle lies opposite the larger side."
   },
   "hint": {
    "ru": "Отложите на большей стороне отрезок, равный меньшей, и получите равнобедренный треугольник.",
    "en": "Mark off on the larger side a segment equal to the smaller one, creating an isosceles triangle."
   },
   "sol": {
    "ru": "Пусть в треугольнике $ABC$ выполнено $AC>AB$; докажем, что $\\angle B>\\angle C$.\n\n**Построение.** На стороне $AC$ отложим точку $D$ так, что $AD=AB$ (это возможно, потому что $AB<AC$, и точка $D$ окажется **внутри** отрезка $AC$).\n\n**Шаг 1.** Треугольник $ABD$ равнобедренный, значит $$\\angle ABD=\\angle ADB .$$\n\n**Шаг 2.** Угол $\\angle ADB$ — внешний угол треугольника $BDC$ при вершине $D$, поэтому по теореме о внешнем угле $$\\angle ADB=\\angle DBC+\\angle C>\\angle C .$$\n\n**Шаг 3.** С другой стороны, точка $D$ лежит внутри угла $B$, поэтому $$\\angle B=\\angle ABD+\\angle DBC>\\angle ABD .$$\n\nСоединяя: $$\\angle B>\\angle ABD=\\angle ADB>\\angle C . \\qquad\\blacksquare$$\n\n*Обратное утверждение* (против большего угла лежит большая сторона) доказывается от противного: если бы стороны были равны, углы были бы равны, а если бы противолежащая сторона была меньше — по доказанному угол был бы меньше.",
    "en": "Suppose $AC>AB$ in a triangle $ABC$; we prove $\\angle B>\\angle C$.\n\n**Construction.** On the side $AC$ take the point $D$ with $AD=AB$ (possible because $AB<AC$, and then $D$ lies **inside** the segment $AC$).\n\n**Step 1.** The triangle $ABD$ is isosceles, so $$\\angle ABD=\\angle ADB .$$\n\n**Step 2.** The angle $\\angle ADB$ is an exterior angle of the triangle $BDC$ at $D$, so by the exterior angle theorem $$\\angle ADB=\\angle DBC+\\angle C>\\angle C .$$\n\n**Step 3.** On the other hand $D$ lies inside the angle $B$, so $$\\angle B=\\angle ABD+\\angle DBC>\\angle ABD .$$\n\nPutting these together, $$\\angle B>\\angle ABD=\\angle ADB>\\angle C . \\qquad\\blacksquare$$\n\n*The converse* (the larger side lies opposite the larger angle) follows by contradiction: equal sides would give equal angles, and a smaller opposite side would, by what we proved, give a smaller angle."
   }
  },
  {
   "src": "Теорема Вивиани / Viviani, classic",
   "lvl": 2,
   "q": {
    "ru": "Точка $P$ лежит внутри равностороннего треугольника. Докажите, что сумма расстояний от $P$ до трёх сторон не зависит от положения точки и равна высоте треугольника.",
    "en": "A point $P$ lies inside an equilateral triangle. Prove that the sum of the distances from $P$ to the three sides does not depend on $P$ and equals the altitude of the triangle."
   },
   "hint": {
    "ru": "Разбейте треугольник на три и посчитайте площади.",
    "en": "Split the triangle into three and add up the areas."
   },
   "sol": {
    "ru": "Пусть сторона треугольника равна $a$, высота равна $h$, а расстояния от точки $P$ до сторон равны $d_1,d_2,d_3$.\n\nСоединим $P$ с тремя вершинами. Треугольник разбивается на три треугольника, у каждого из которых основание — сторона исходного (длины $a$), а высота — соответствующее расстояние.\n\nСкладываем площади: $$S=\\frac{a\\,d_1}{2}+\\frac{a\\,d_2}{2}+\\frac{a\\,d_3}{2}=\\frac{a}{2}\\left(d_1+d_2+d_3\\right).$$ С другой стороны, $$S=\\frac{a\\,h}{2}.$$ Приравнивая и сокращая на $\\tfrac a2>0$, получаем $$d_1+d_2+d_3=h . \\qquad\\blacksquare$$\n\n*Замечание.* В доказательстве использовано только то, что все три стороны **равны** — поэтому для неравностороннего треугольника утверждение неверно.",
    "en": "Let the side be $a$, the altitude $h$, and let the distances from $P$ to the sides be $d_1,d_2,d_3$.\n\nJoin $P$ to the three vertices. The triangle splits into three triangles, each with a side of the original (of length $a$) as base and the corresponding distance as height.\n\nAdd the areas: $$S=\\frac{a\\,d_1}{2}+\\frac{a\\,d_2}{2}+\\frac{a\\,d_3}{2}=\\frac{a}{2}\\left(d_1+d_2+d_3\\right).$$ On the other hand $$S=\\frac{a\\,h}{2}.$$ Equating and dividing by $\\tfrac a2>0$, $$d_1+d_2+d_3=h . \\qquad\\blacksquare$$\n\n*Remark.* The proof used only that all three sides are **equal** — which is why the statement fails for a non-equilateral triangle."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "В треугольнике $ABC$ проведена биссектриса $AD$ угла $A$. Известно, что $AB=6$, $AC=8$, $BC=7$. Найдите $BD$ и $DC$.",
    "en": "In a triangle $ABC$ the bisector $AD$ of the angle $A$ is drawn. Given $AB=6$, $AC=8$, $BC=7$, find $BD$ and $DC$."
   },
   "hint": {
    "ru": "Биссектриса делит противоположную сторону в отношении прилежащих сторон.",
    "en": "A bisector divides the opposite side in the ratio of the adjacent sides."
   },
   "sol": {
    "ru": "**Свойство биссектрисы.** $$\\frac{BD}{DC}=\\frac{AB}{AC}=\\frac68=\\frac34 .$$\n\n*Почему так.* Опустим из $B$ и $C$ перпендикуляры на прямую $AD$; получатся два подобных прямоугольных треугольника (углы при $A$ равны, потому что $AD$ биссектриса), и отношение расстояний от $B$ и $C$ до прямой $AD$ равно $AB:AC$. С другой стороны, треугольники $ABD$ и $ACD$ имеют общую высоту из $A$, поэтому отношение их площадей равно $BD:DC$; а считая площади через сторону $AD$ и те самые перпендикуляры, получаем то же отношение $AB:AC$.\n\n**Счёт.** Пусть $BD=3t$ и $DC=4t$. Тогда $7t=BC=7$, значит $t=1$.\n\n**Ответ:** $BD=3$, $DC=4$.",
    "en": "**The bisector property.** $$\\frac{BD}{DC}=\\frac{AB}{AC}=\\frac68=\\frac34 .$$\n\n*Why.* Drop perpendiculars from $B$ and $C$ to the line $AD$; two similar right triangles appear (the angles at $A$ are equal because $AD$ bisects), so the ratio of the distances from $B$ and $C$ to the line $AD$ equals $AB:AC$. On the other hand the triangles $ABD$ and $ACD$ share the altitude from $A$, so the ratio of their areas is $BD:DC$; computing those areas from the side $AD$ and those same perpendiculars gives the same ratio $AB:AC$.\n\n**Compute.** Put $BD=3t$ and $DC=4t$. Then $7t=BC=7$, so $t=1$.\n\n**Answer:** $BD=3$, $DC=4$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что если две медианы треугольника равны, то треугольник равнобедренный.",
    "en": "Prove that if two medians of a triangle are equal then the triangle is isosceles."
   },
   "hint": {
    "ru": "Воспользуйтесь тем, что центроид делит каждую медиану в отношении $2:1$.",
    "en": "Use that the centroid divides each median in the ratio $2:1$."
   },
   "sol": {
    "ru": "Пусть $BM$ и $CN$ — медианы к сторонам $AC$ и $AB$, причём $BM=CN$, а $G$ — точка их пересечения (центроид).\n\n**Шаг 1.** Центроид делит каждую медиану в отношении $2:1$ от вершины, поэтому $$BG=\\tfrac23BM=\\tfrac23CN=CG,\\qquad GM=\\tfrac13BM=\\tfrac13CN=GN .$$\n\n**Шаг 2.** Сравним треугольники $BGN$ и $CGM$:\n\n$BG=CG$ (шаг 1), $GN=GM$ (шаг 1), $\\angle BGN=\\angle CGM$ — вертикальные углы.\n\nПо признаку **СУС** треугольники равны, значит $BN=CM$.\n\n**Шаг 3.** Но $BN=\\tfrac12AB$ (так как $N$ — середина $AB$) и $CM=\\tfrac12AC$. Значит $$\\tfrac12AB=\\tfrac12AC\\quad\\Longrightarrow\\quad AB=AC . \\qquad\\blacksquare$$",
    "en": "Let $BM$ and $CN$ be the medians to $AC$ and $AB$ with $BM=CN$, and let $G$ be their intersection (the centroid).\n\n**Step 1.** The centroid divides each median in the ratio $2:1$ from the vertex, so $$BG=\\tfrac23BM=\\tfrac23CN=CG,\\qquad GM=\\tfrac13BM=\\tfrac13CN=GN .$$\n\n**Step 2.** Compare the triangles $BGN$ and $CGM$:\n\n$BG=CG$ (Step 1), $GN=GM$ (Step 1), $\\angle BGN=\\angle CGM$ — vertical angles.\n\nBy **SAS** they are congruent, so $BN=CM$.\n\n**Step 3.** But $BN=\\tfrac12AB$ (as $N$ is the midpoint of $AB$) and $CM=\\tfrac12AC$. Hence $$\\tfrac12AB=\\tfrac12AC\\quad\\Longrightarrow\\quad AB=AC . \\qquad\\blacksquare$$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "В прямоугольном треугольнике высота, проведённая к гипотенузе, делит её на отрезки $9$ и $16$. Найдите катеты и эту высоту.",
    "en": "In a right triangle the altitude to the hypotenuse divides it into segments of $9$ and $16$. Find the legs and the altitude."
   },
   "hint": {
    "ru": "$h^{2}=BH\\cdot CH$ и $AB^{2}=BC\\cdot BH$.",
    "en": "$h^{2}=BH\\cdot CH$ and $AB^{2}=BC\\cdot BH$."
   },
   "sol": {
    "ru": "Гипотенуза равна $BC=9+16=25$.\n\n**Высота.** Из соотношения $h^{2}=BH\\cdot CH$ получаем $$h=\\sqrt{9\\cdot16}=\\sqrt{144}=12 .$$\n\n**Катеты.** Из $AB^{2}=BC\\cdot BH=25\\cdot9=225$ следует $AB=15$; из $AC^{2}=BC\\cdot CH=25\\cdot16=400$ следует $AC=20$.\n\n**Проверка:** $15^{2}+20^{2}=225+400=625=25^{2}$ ✓ Кроме того, $\\tfrac{15\\cdot20}{25}=12$ — совпадает с найденной высотой ✓\n\n**Ответ:** катеты $15$ и $20$, высота $12$. (Это тройка $(3,4,5)$, увеличенная в $5$ раз.)",
    "en": "The hypotenuse is $BC=9+16=25$.\n\n**The altitude.** From $h^{2}=BH\\cdot CH$, $$h=\\sqrt{9\\cdot16}=\\sqrt{144}=12 .$$\n\n**The legs.** From $AB^{2}=BC\\cdot BH=25\\cdot9=225$ we get $AB=15$; from $AC^{2}=BC\\cdot CH=25\\cdot16=400$ we get $AC=20$.\n\n**Check:** $15^{2}+20^{2}=225+400=625=25^{2}$ ✓ Also $\\tfrac{15\\cdot20}{25}=12$, matching the altitude ✓\n\n**Answer:** the legs are $15$ and $20$, the altitude $12$. (This is the $(3,4,5)$ triple scaled by $5$.)"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "В треугольнике $ABC$ точка $M$ — середина стороны $BC$, и известно, что $AM=\\tfrac12BC$. Докажите, что угол $A$ прямой.",
    "en": "In a triangle $ABC$ the point $M$ is the midpoint of $BC$ and $AM=\\tfrac12BC$. Prove that the angle $A$ is right."
   },
   "hint": {
    "ru": "Два треугольника оказываются равнобедренными.",
    "en": "Two triangles turn out to be isosceles."
   },
   "sol": {
    "ru": "Так как $M$ — середина, $BM=CM=\\tfrac12BC$, а по условию и $AM=\\tfrac12BC$. Значит $$AM=BM=CM .$$\n\n**Треугольник $ABM$** равнобедренный ($AM=BM$), поэтому углы при основании $AB$ равны: $$\\angle BAM=\\angle ABM=\\beta .$$\n\n**Треугольник $ACM$** равнобедренный ($AM=CM$), поэтому $$\\angle CAM=\\angle ACM=\\gamma .$$\n\nТеперь посчитаем сумму углов треугольника $ABC$. Его угол при вершине $A$ равен $\\angle BAM+\\angle CAM=\\beta+\\gamma$, а углы при $B$ и $C$ равны $\\beta$ и $\\gamma$. Значит $$(\\beta+\\gamma)+\\beta+\\gamma=180^\\circ\\quad\\Longrightarrow\\quad 2(\\beta+\\gamma)=180^\\circ\\quad\\Longrightarrow\\quad \\beta+\\gamma=90^\\circ .$$ Но $\\angle A=\\beta+\\gamma$, поэтому $\\angle A=90^\\circ$. $\\blacksquare$\n\n*Замечание.* Это обратное утверждение к задаче 7: точка $M$ равноудалена от всех трёх вершин, то есть $A$ лежит на окружности с диаметром $BC$.",
    "en": "Since $M$ is the midpoint, $BM=CM=\\tfrac12BC$, and by hypothesis $AM=\\tfrac12BC$ as well. Hence $$AM=BM=CM .$$\n\n**The triangle $ABM$** is isosceles ($AM=BM$), so its base angles are equal: $$\\angle BAM=\\angle ABM=\\beta .$$\n\n**The triangle $ACM$** is isosceles ($AM=CM$), so $$\\angle CAM=\\angle ACM=\\gamma .$$\n\nNow add up the angles of $ABC$. Its angle at $A$ is $\\angle BAM+\\angle CAM=\\beta+\\gamma$, and the angles at $B$ and $C$ are $\\beta$ and $\\gamma$. So $$(\\beta+\\gamma)+\\beta+\\gamma=180^\\circ\\quad\\Longrightarrow\\quad 2(\\beta+\\gamma)=180^\\circ\\quad\\Longrightarrow\\quad \\beta+\\gamma=90^\\circ .$$ Since $\\angle A=\\beta+\\gamma$, the angle $A$ is right. $\\blacksquare$\n\n*Remark.* This is the converse of problem 7: the point $M$ is equidistant from all three vertices, so $A$ lies on the circle with diameter $BC$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "В треугольнике $ABC$ угол $A$ равен $60^\\circ$. Докажите, что $$BC^{2}=AB^{2}+AC^{2}-AB\\cdot AC .$$",
    "en": "In a triangle $ABC$ the angle $A$ equals $60^\\circ$. Prove that $$BC^{2}=AB^{2}+AC^{2}-AB\\cdot AC .$$"
   },
   "hint": {
    "ru": "Опустите высоту из $B$ на прямую $AC$ и вспомните, что в прямоугольном треугольнике с углом $60^\\circ$ меньший катет вдвое меньше гипотенузы.",
    "en": "Drop the altitude from $B$ to the line $AC$, and recall that in a right triangle with a $60^\\circ$ angle the shorter leg is half the hypotenuse."
   },
   "sol": {
    "ru": "Обозначим $c=AB$, $b=AC$ и опустим из вершины $B$ перпендикуляр $BH$ на прямую $AC$.\n\n**Шаг 1: находим $AH$ и $BH$.** В прямоугольном треугольнике $ABH$ угол при $A$ равен $60^\\circ$, значит угол при $B$ равен $30^\\circ$. Катет, лежащий против угла $30^\\circ$, вдвое меньше гипотенузы, поэтому $$AH=\\frac{c}{2}.$$ Тогда по теореме Пифагора $$BH^{2}=c^{2}-\\frac{c^{2}}{4}=\\frac{3c^{2}}{4}.$$\n\n**Шаг 2: считаем $BC$.** Точка $H$ лежит на луче $AC$, поэтому $HC=b-\\tfrac{c}{2}$ (со знаком: если $H$ вышла за точку $C$, то $HC$ отрицательно, но в квадрат это не влияет). В прямоугольном треугольнике $BHC$ $$BC^{2}=BH^{2}+HC^{2}=\\frac{3c^{2}}{4}+\\left(b-\\frac c2\\right)^{2}.$$\n\n**Шаг 3: раскрываем.** $$BC^{2}=\\frac{3c^{2}}{4}+b^{2}-bc+\\frac{c^{2}}{4}=b^{2}+c^{2}-bc . \\qquad\\blacksquare$$\n\n*Замечание.* Это частный случай теоремы косинусов $a^{2}=b^{2}+c^{2}-2bc\\cos A$ при $\\cos60^\\circ=\\tfrac12$. Симметричный факт: при $\\angle A=120^\\circ$ получается $BC^{2}=AB^{2}+AC^{2}+AB\\cdot AC$.",
    "en": "Write $c=AB$, $b=AC$, and drop the perpendicular $BH$ from $B$ to the line $AC$.\n\n**Step 1: find $AH$ and $BH$.** In the right triangle $ABH$ the angle at $A$ is $60^\\circ$, so the angle at $B$ is $30^\\circ$. The leg opposite a $30^\\circ$ angle is half the hypotenuse, so $$AH=\\frac{c}{2}.$$ Then by Pythagoras $$BH^{2}=c^{2}-\\frac{c^{2}}{4}=\\frac{3c^{2}}{4}.$$\n\n**Step 2: compute $BC$.** The point $H$ lies on the ray $AC$, so $HC=b-\\tfrac{c}{2}$ (signed: if $H$ falls beyond $C$ this is negative, which the square does not mind). In the right triangle $BHC$, $$BC^{2}=BH^{2}+HC^{2}=\\frac{3c^{2}}{4}+\\left(b-\\frac c2\\right)^{2}.$$\n\n**Step 3: expand.** $$BC^{2}=\\frac{3c^{2}}{4}+b^{2}-bc+\\frac{c^{2}}{4}=b^{2}+c^{2}-bc . \\qquad\\blacksquare$$\n\n*Remark.* This is the special case $\\cos60^\\circ=\\tfrac12$ of the law of cosines $a^{2}=b^{2}+c^{2}-2bc\\cos A$. Symmetrically, $\\angle A=120^\\circ$ gives $BC^{2}=AB^{2}+AC^{2}+AB\\cdot AC$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что три медианы треугольника пересекаются в одной точке, и что эта точка делит каждую медиану в отношении $2:1$, считая от вершины.",
    "en": "Prove that the three medians of a triangle meet at one point, and that this point divides each median in the ratio $2:1$ counting from the vertex."
   },
   "svg": "<svg viewBox=\"0 0 400 250\" role=\"img\" aria-label=\"The three medians meet at one point\">\n<path class=\"ln\" d=\"M170 40 L50 215 L350 215 Z\"/>\n<path class=\"lnc\" d=\"M170 40 L200 215\"/><path class=\"lnc\" d=\"M50 215 L260 127.5\"/>\n<path class=\"lnc\" d=\"M350 215 L110 127.5\"/>\n<circle class=\"pt\" cx=\"170\" cy=\"40\" r=\"3.5\"/><circle class=\"pt\" cx=\"50\" cy=\"215\" r=\"3.5\"/>\n<circle class=\"pt\" cx=\"350\" cy=\"215\" r=\"3.5\"/>\n<circle class=\"ptc\" cx=\"190\" cy=\"156.7\" r=\"4.5\"/>\n<text x=\"164\" y=\"24\">A</text><text x=\"32\" y=\"235\">B</text><text x=\"356\" y=\"235\">C</text>\n<text class=\"acc\" x=\"198\" y=\"152\">G</text>\n</svg>",
   "hint": {
    "ru": "Рассмотрите две медианы и среднюю линию, соединяющую середины двух сторон.",
    "en": "Take two medians and the midline joining the midpoints of two sides."
   },
   "sol": {
    "ru": "**Шаг 1: две медианы.** Пусть $M$ — середина $BC$, $N$ — середина $AC$, и медианы $AM$ и $BN$ пересекаются в точке $G$.\n\nОтрезок $MN$ соединяет середины сторон $BC$ и $AC$, то есть является средней линией: $$MN\\parallel AB\\qquad\\text{и}\\qquad MN=\\tfrac12AB .$$\n\n**Шаг 2: подобие.** Треугольники $AGB$ и $MGN$ подобны: углы $\\angle GAB$ и $\\angle GMN$ — накрест лежащие при параллельных $AB$ и $MN$ и секущей $AM$, углы $\\angle GBA$ и $\\angle GNM$ — накрест лежащие при секущей $BN$.\n\nКоэффициент подобия равен отношению соответственных сторон: $$\\frac{MN}{AB}=\\frac12 .$$ Значит $$\\frac{GM}{GA}=\\frac{GN}{GB}=\\frac12,$$ то есть точка $G$ делит каждую из медиан $AM$ и $BN$ в отношении $2:1$ от вершины.\n\n**Шаг 3: третья медиана.** Проведём теперь медианы $AM$ и $CK$ (где $K$ — середина $AB$). По тому же рассуждению они пересекаются в точке, делящей $AM$ в отношении $2:1$ от вершины $A$. Но такая точка на отрезке $AM$ ровно одна — та самая $G$. Значит медиана $CK$ тоже проходит через $G$.\n\nИтак, все три медианы проходят через одну точку и делятся ею в отношении $2:1$. $\\blacksquare$",
    "en": "**Step 1: two medians.** Let $M$ be the midpoint of $BC$ and $N$ the midpoint of $AC$, and let the medians $AM$ and $BN$ meet at $G$.\n\nThe segment $MN$ joins the midpoints of $BC$ and $AC$, so it is a midline: $$MN\\parallel AB\\qquad\\text{and}\\qquad MN=\\tfrac12AB .$$\n\n**Step 2: similarity.** The triangles $AGB$ and $MGN$ are similar: $\\angle GAB$ and $\\angle GMN$ are alternate angles at the parallels $AB$ and $MN$ cut by $AM$, and $\\angle GBA$ and $\\angle GNM$ are alternate angles for the transversal $BN$.\n\nThe ratio of similarity is the ratio of corresponding sides: $$\\frac{MN}{AB}=\\frac12 .$$ Hence $$\\frac{GM}{GA}=\\frac{GN}{GB}=\\frac12,$$ so $G$ divides each of the medians $AM$ and $BN$ in the ratio $2:1$ from the vertex.\n\n**Step 3: the third median.** Now take the medians $AM$ and $CK$ (with $K$ the midpoint of $AB$). The same argument makes them meet at a point dividing $AM$ in the ratio $2:1$ from $A$. But the segment $AM$ has exactly one such point — namely $G$. So the median $CK$ passes through $G$ as well.\n\nHence all three medians pass through one point and are divided by it in the ratio $2:1$. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Обозначим медианы треугольника через $m_a,m_b,m_c$, а его периметр через $P$. Докажите, что $$\\frac34P\\ <\\ m_a+m_b+m_c\\ <\\ P .$$",
    "en": "Write $m_a,m_b,m_c$ for the medians of a triangle and $P$ for its perimeter. Prove that $$\\frac34P\\ <\\ m_a+m_b+m_c\\ <\\ P .$$"
   },
   "hint": {
    "ru": "Сверху — удвоение медианы; снизу — неравенство треугольника в треугольниках с вершиной в центроиде.",
    "en": "For the upper bound double the median; for the lower one apply the triangle inequality in the triangles at the centroid."
   },
   "sol": {
    "ru": "Обозначим стороны через $a=BC$, $b=CA$, $c=AB$, так что $P=a+b+c$.\n\n**Верхняя оценка.** В разобранном примере доказано, что $$m_a<\\frac{b+c}{2},\\qquad m_b<\\frac{c+a}{2},\\qquad m_c<\\frac{a+b}{2}.$$ Складываем: $$m_a+m_b+m_c<\\frac{(b+c)+(c+a)+(a+b)}{2}=\\frac{2(a+b+c)}{2}=P .$$\n\n**Нижняя оценка.** Пусть $G$ — точка пересечения медиан. Она делит каждую медиану в отношении $2:1$ от вершины, поэтому $$AG=\\tfrac23m_a,\\qquad BG=\\tfrac23m_b,\\qquad CG=\\tfrac23m_c .$$\n\nПрименим неравенство треугольника в трёх треугольниках с вершиной $G$: $$AG+BG>AB=c,\\qquad BG+CG>BC=a,\\qquad CG+AG>CA=b .$$ Складываем все три: $$2\\left(AG+BG+CG\\right)>a+b+c=P .$$ Подставляя выражения через медианы, $$2\\cdot\\frac23\\left(m_a+m_b+m_c\\right)>P\\quad\\Longrightarrow\\quad \\frac43\\left(m_a+m_b+m_c\\right)>P,$$ откуда $$m_a+m_b+m_c>\\frac34P . \\qquad\\blacksquare$$\n\n*Проверка на равностороннем треугольнике со стороной $1$:* каждая медиана равна $\\tfrac{\\sqrt3}{2}\\approx0{,}866$, сумма $\\approx2{,}598$; периметр $3$, а $\\tfrac34P=2{,}25$. Действительно $2{,}25<2{,}598<3$ ✓",
    "en": "Write $a=BC$, $b=CA$, $c=AB$, so $P=a+b+c$.\n\n**Upper bound.** The worked example proved $$m_a<\\frac{b+c}{2},\\qquad m_b<\\frac{c+a}{2},\\qquad m_c<\\frac{a+b}{2}.$$ Adding, $$m_a+m_b+m_c<\\frac{(b+c)+(c+a)+(a+b)}{2}=\\frac{2(a+b+c)}{2}=P .$$\n\n**Lower bound.** Let $G$ be the centroid. It divides each median in the ratio $2:1$ from the vertex, so $$AG=\\tfrac23m_a,\\qquad BG=\\tfrac23m_b,\\qquad CG=\\tfrac23m_c .$$\n\nApply the triangle inequality in the three triangles at $G$: $$AG+BG>AB=c,\\qquad BG+CG>BC=a,\\qquad CG+AG>CA=b .$$ Adding all three, $$2\\left(AG+BG+CG\\right)>a+b+c=P .$$ Substituting the medians, $$2\\cdot\\frac23\\left(m_a+m_b+m_c\\right)>P\\quad\\Longrightarrow\\quad \\frac43\\left(m_a+m_b+m_c\\right)>P,$$ hence $$m_a+m_b+m_c>\\frac34P . \\qquad\\blacksquare$$\n\n*Check on the equilateral triangle of side $1$:* each median is $\\tfrac{\\sqrt3}{2}\\approx0.866$ and their sum $\\approx2.598$; the perimeter is $3$ and $\\tfrac34P=2.25$. Indeed $2.25<2.598<3$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "На сторонах $AB$ и $AC$ треугольника $ABC$ вне его построены равные отрезки $AB=AD$ и $AC=AE$ так, что $\\angle BAE=\\angle DAC$. Докажите, что $BE=DC$.",
    "en": "On the sides $AB$ and $AC$ of a triangle $ABC$, segments $AD=AB$ and $AE=AC$ are built outside it so that $\\angle BAE=\\angle DAC$. Prove that $BE=DC$."
   },
   "hint": {
    "ru": "Найдите два равных треугольника; углы при $A$ отличаются на один и тот же угол.",
    "en": "Find two congruent triangles; the angles at $A$ differ by the same angle."
   },
   "sol": {
    "ru": "Сравним треугольники $ABE$ и $ADC$.\n\n**Стороны.** $AB=AD$ — по условию; $AE=AC$ — по условию.\n\n**Углы.** $\\angle BAE=\\angle DAC$ — по условию.\n\nПо признаку **СУС** треугольники $ABE$ и $ADC$ равны, значит соответственные стороны равны: $$BE=DC . \\qquad\\blacksquare$$\n\n*Как это выглядит в жизни.* Если на сторонах $AB$ и $AC$ построить **квадраты** (или равносторонние треугольники) во внешнюю сторону, то углы $\\angle BAE$ и $\\angle DAC$ автоматически окажутся равными: каждый равен $\\angle A+90^\\circ$ (соответственно $\\angle A+60^\\circ$). Поэтому доказанное утверждение сразу даёт классический факт: отрезки, соединяющие вершину квадрата на одной стороне с противоположной вершиной треугольника, равны между собой.",
    "en": "Compare the triangles $ABE$ and $ADC$.\n\n**Sides.** $AB=AD$ — by hypothesis; $AE=AC$ — by hypothesis.\n\n**Angle.** $\\angle BAE=\\angle DAC$ — by hypothesis.\n\nBy **SAS** the triangles $ABE$ and $ADC$ are congruent, so their corresponding sides are equal: $$BE=DC . \\qquad\\blacksquare$$\n\n*Where this shows up.* If **squares** (or equilateral triangles) are erected outwards on the sides $AB$ and $AC$, the angles $\\angle BAE$ and $\\angle DAC$ are automatically equal: each is $\\angle A+90^\\circ$ (respectively $\\angle A+60^\\circ$). So the statement just proved gives the classical fact that the segments joining the outer vertex of a square on one side to the opposite vertex of the triangle are equal."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что биссектриса, проведённая из вершины $A$ треугольника $ABC$, лежит между медианой и высотой, проведёнными из той же вершины.",
    "en": "Prove that the bisector from the vertex $A$ of a triangle $ABC$ lies between the median and the altitude drawn from the same vertex."
   },
   "hint": {
    "ru": "Пусть $AB<AC$; сравните, куда попадают основания трёх чевиан на стороне $BC$.",
    "en": "Assume $AB<AC$ and compare where the three cevians land on $BC$."
   },
   "sol": {
    "ru": "Если $AB=AC$, все три отрезка совпадают, и утверждать нечего. Пусть $AB<AC$; обозначим $c=AB$, $b=AC$, $a=BC$, а основания высоты, биссектрисы и медианы на стороне $BC$ — через $H$, $L$ и $M$ соответственно. Докажем, что $L$ лежит строго между $H$ и $M$, то есть $$BH<BL<BM .$$\n\n**Шаг 1: где $L$.** По свойству биссектрисы $\\dfrac{BL}{LC}=\\dfrac{c}{b}$, откуда $$BL=\\frac{ac}{b+c}.$$ Так как $c<b$, имеем $\\dfrac{c}{b+c}<\\dfrac12$, значит $$BL<\\frac a2=BM .$$ Итак, $L$ ближе к $B$, чем середина $M$.\n\n**Шаг 2: где $H$.** Из прямоугольных треугольников $ABH$ и $ACH$ по теореме Пифагора $$AB^{2}-BH^{2}=AH^{2}=AC^{2}-CH^{2},$$ то есть $c^{2}-BH^{2}=b^{2}-(a-BH)^{2}$. Раскрывая, $$c^{2}-BH^{2}=b^{2}-a^{2}+2a\\,BH-BH^{2}\\quad\\Longrightarrow\\quad BH=\\frac{a^{2}+c^{2}-b^{2}}{2a}.$$\n\n**Шаг 3: сравниваем $BH$ и $BL$.** $$BL-BH=\\frac{ac}{b+c}-\\frac{a^{2}+c^{2}-b^{2}}{2a}=\\frac{ac}{b+c}-\\frac{a^{2}-(b-c)(b+c)}{2a}.$$ Приведём к общему знаменателю $2a(b+c)$: $$BL-BH=\\frac{2a^{2}c-(b+c)a^{2}+(b-c)(b+c)^{2}}{2a(b+c)}=\\frac{a^{2}(c-b)+(b-c)(b+c)^{2}}{2a(b+c)}=\\frac{(b-c)\\Bigl[(b+c)^{2}-a^{2}\\Bigr]}{2a(b+c)}.$$ Здесь $b-c>0$, а $(b+c)^{2}-a^{2}=(b+c-a)(b+c+a)>0$ по неравенству треугольника. Значит $BL-BH>0$, то есть $BH<BL$.\n\n**Вывод.** $BH<BL<BM$, то есть биссектриса лежит строго между высотой и медианой. $\\blacksquare$",
    "en": "If $AB=AC$ all three segments coincide and there is nothing to prove. So assume $AB<AC$; write $c=AB$, $b=AC$, $a=BC$, and let $H$, $L$, $M$ be the feet on $BC$ of the altitude, the bisector and the median. We show that $L$ lies strictly between $H$ and $M$, that is $$BH<BL<BM .$$\n\n**Step 1: where $L$ is.** The bisector property gives $\\dfrac{BL}{LC}=\\dfrac{c}{b}$, so $$BL=\\frac{ac}{b+c}.$$ As $c<b$ we have $\\dfrac{c}{b+c}<\\dfrac12$, hence $$BL<\\frac a2=BM .$$ So $L$ is nearer to $B$ than the midpoint $M$.\n\n**Step 2: where $H$ is.** From the right triangles $ABH$ and $ACH$, Pythagoras gives $$AB^{2}-BH^{2}=AH^{2}=AC^{2}-CH^{2},$$ that is $c^{2}-BH^{2}=b^{2}-(a-BH)^{2}$. Expanding, $$c^{2}-BH^{2}=b^{2}-a^{2}+2a\\,BH-BH^{2}\\quad\\Longrightarrow\\quad BH=\\frac{a^{2}+c^{2}-b^{2}}{2a}.$$\n\n**Step 3: compare $BH$ and $BL$.** $$BL-BH=\\frac{ac}{b+c}-\\frac{a^{2}+c^{2}-b^{2}}{2a}=\\frac{ac}{b+c}-\\frac{a^{2}-(b-c)(b+c)}{2a}.$$ Over the common denominator $2a(b+c)$, $$BL-BH=\\frac{2a^{2}c-(b+c)a^{2}+(b-c)(b+c)^{2}}{2a(b+c)}=\\frac{a^{2}(c-b)+(b-c)(b+c)^{2}}{2a(b+c)}=\\frac{(b-c)\\Bigl[(b+c)^{2}-a^{2}\\Bigr]}{2a(b+c)}.$$ Here $b-c>0$, and $(b+c)^{2}-a^{2}=(b+c-a)(b+c+a)>0$ by the triangle inequality. So $BL-BH>0$, that is $BH<BL$.\n\n**Conclusion.** $BH<BL<BM$: the bisector lies strictly between the altitude and the median. $\\blacksquare$"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Точка $P$ лежит внутри треугольника $ABC$ с периметром $P_{\\triangle}$. Докажите, что $$\\frac{P_{\\triangle}}{2}\\ <\\ PA+PB+PC\\ <\\ P_{\\triangle}.$$",
    "en": "A point $P$ lies inside a triangle $ABC$ of perimeter $P_{\\triangle}$. Prove that $$\\frac{P_{\\triangle}}{2}\\ <\\ PA+PB+PC\\ <\\ P_{\\triangle}.$$"
   },
   "hint": {
    "ru": "Снизу — три неравенства треугольника. Сверху — продлите $AP$ до пересечения со стороной $BC$.",
    "en": "For the lower bound use three triangle inequalities. For the upper one extend $AP$ to meet the side $BC$."
   },
   "sol": {
    "ru": "Обозначим стороны $a=BC$, $b=CA$, $c=AB$, так что $P_{\\triangle}=a+b+c$.\n\n**Нижняя оценка.** Точка $P$ не лежит ни на одной из сторон, поэтому в каждом из треугольников $APB$, $BPC$, $CPA$ неравенство треугольника строгое: $$PA+PB>c,\\qquad PB+PC>a,\\qquad PC+PA>b .$$ Складывая все три, получаем $$2\\left(PA+PB+PC\\right)>a+b+c=P_{\\triangle},$$ то есть $PA+PB+PC>\\tfrac{P_{\\triangle}}{2}$.\n\n**Вспомогательное утверждение.** Для точки $P$ внутри треугольника $$PA+PB<CA+CB .$$ *Доказательство.* Продлим луч $AP$ до пересечения со стороной $BC$ в точке $K$ (он обязательно её пересечёт, так как $P$ внутри). Тогда в треугольнике $BPK$ $$PB<PK+KB,$$ поэтому $$PA+PB<PA+PK+KB=AK+KB .$$ Далее в треугольнике $ACK$ $$AK<AC+CK,$$ откуда $$AK+KB<AC+CK+KB=AC+CB .$$ Соединяя, получаем требуемое. $\\square$\n\n**Верхняя оценка.** Применим вспомогательное утверждение трижды — к парам вершин $(A,B)$, $(B,C)$ и $(C,A)$: $$PA+PB<b+a,\\qquad PB+PC<c+b,\\qquad PC+PA<a+c .$$ Складываем: $$2\\left(PA+PB+PC\\right)<2(a+b+c)=2P_{\\triangle},$$ то есть $PA+PB+PC<P_{\\triangle}$. $\\blacksquare$\n\n*Проверка.* Для центра равностороннего треугольника со стороной $1$ каждое расстояние равно $\\tfrac{1}{\\sqrt3}\\approx0{,}577$, сумма $\\approx1{,}73$; периметр $3$, половина периметра $1{,}5$. Действительно $1{,}5<1{,}73<3$ ✓",
    "en": "Write $a=BC$, $b=CA$, $c=AB$, so $P_{\\triangle}=a+b+c$.\n\n**Lower bound.** The point $P$ lies on none of the sides, so in each of the triangles $APB$, $BPC$, $CPA$ the triangle inequality is strict: $$PA+PB>c,\\qquad PB+PC>a,\\qquad PC+PA>b .$$ Adding all three, $$2\\left(PA+PB+PC\\right)>a+b+c=P_{\\triangle},$$ that is $PA+PB+PC>\\tfrac{P_{\\triangle}}{2}$.\n\n**A lemma.** For a point $P$ inside the triangle, $$PA+PB<CA+CB .$$ *Proof.* Extend the ray $AP$ until it meets the side $BC$ at a point $K$ (it must, since $P$ is inside). In the triangle $BPK$, $$PB<PK+KB,$$ so $$PA+PB<PA+PK+KB=AK+KB .$$ Next, in the triangle $ACK$, $$AK<AC+CK,$$ hence $$AK+KB<AC+CK+KB=AC+CB .$$ Combining gives the claim. $\\square$\n\n**Upper bound.** Apply the lemma three times — to the vertex pairs $(A,B)$, $(B,C)$ and $(C,A)$: $$PA+PB<b+a,\\qquad PB+PC<c+b,\\qquad PC+PA<a+c .$$ Adding, $$2\\left(PA+PB+PC\\right)<2(a+b+c)=2P_{\\triangle},$$ that is $PA+PB+PC<P_{\\triangle}$. $\\blacksquare$\n\n*Check.* For the centre of an equilateral triangle of side $1$ each distance is $\\tfrac{1}{\\sqrt3}\\approx0.577$ and their sum $\\approx1.73$; the perimeter is $3$ and half of it is $1.5$. Indeed $1.5<1.73<3$ ✓"
   }
  }
 ]
};
