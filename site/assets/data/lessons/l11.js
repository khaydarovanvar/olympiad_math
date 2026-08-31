/* Topic 11 — generated from content/lesson_11.py, do not edit by hand. */
window.LESSONS = window.LESSONS || {};
window.LESSONS[11] = {
 "n": 11,
 "cat": "geo",
 "title": {
  "ru": "Окружности",
  "en": "Circles"
 },
 "sub": {
  "ru": "Вписанный угол, касательные, вписанные и описанные четырёхугольники, степень точки и теорема Птолемея.",
  "en": "Inscribed angles, tangents, cyclic and tangential quadrilaterals, the power of a point and Ptolemy’s theorem."
 },
 "goals": {
  "ru": [
   "Уверенно применять теорему о вписанном угле и её следствия.",
   "Пользоваться свойствами касательной: перпендикулярность радиусу и равенство отрезков касательных.",
   "Узнавать вписанные четырёхугольники и доказывать, что четыре точки лежат на одной окружности.",
   "Применять степень точки: пересекающиеся хорды, секущая и касательная."
  ],
  "en": [
   "Apply the inscribed angle theorem and its corollaries with confidence.",
   "Use the tangent properties: perpendicularity to the radius, and equal tangent segments.",
   "Recognise cyclic quadrilaterals and prove that four points lie on one circle.",
   "Use the power of a point: intersecting chords, and a secant with a tangent."
  ]
 },
 "sections": [
  {
   "h": {
    "ru": "Вписанный угол",
    "en": "The inscribed angle"
   },
   "blocks": [
    {
     "t": "def",
     "name": {
      "ru": "Центральный и вписанный углы",
      "en": "Central and inscribed angles"
     },
     "text": {
      "ru": "**Центральный угол** — угол с вершиной в центре окружности. **Вписанный угол** — угол, вершина которого лежит на окружности, а стороны пересекают её. Говорят, что угол **опирается** на дугу, заключённую между его сторонами.",
      "en": "A **central angle** has its vertex at the centre of the circle. An **inscribed angle** has its vertex on the circle and both arms meeting it. The angle is said to **subtend** the arc cut off between its arms."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Теорема о вписанном угле",
      "en": "The inscribed angle theorem"
     },
     "text": {
      "ru": "Вписанный угол равен половине центрального угла, опирающегося на ту же дугу.",
      "en": "An inscribed angle is half the central angle subtending the same arc."
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 400 280\" role=\"img\" aria-label=\"Inscribed angle and the central angle on the same arc\">\n<circle class=\"ln\" cx=\"200\" cy=\"140\" r=\"100\"/>\n<path class=\"ln\" d=\"M166 46 L106 174 M166 46 L294 174\"/>\n<path class=\"lnc\" d=\"M106 174 L200 140 L294 174\"/>\n<circle class=\"pt\" cx=\"200\" cy=\"140\" r=\"3.5\"/><circle class=\"pt\" cx=\"166\" cy=\"46\" r=\"3.5\"/>\n<circle class=\"pt\" cx=\"106\" cy=\"174\" r=\"3.5\"/><circle class=\"pt\" cx=\"294\" cy=\"174\" r=\"3.5\"/>\n<text x=\"158\" y=\"32\">A</text><text x=\"84\" y=\"188\">B</text><text x=\"300\" y=\"188\">C</text>\n<text x=\"208\" y=\"134\">O</text>\n<text class=\"acc\" x=\"160\" y=\"76\">&#945;</text><text class=\"acc\" x=\"188\" y=\"168\">2&#945;</text>\n</svg>",
     "cap": {
      "ru": "Вписанный угол $\\angle BAC=\\alpha$ и центральный угол $\\angle BOC=2\\alpha$ опираются на одну и ту же дугу $BC$.",
      "en": "The inscribed angle $\\angle BAC=\\alpha$ and the central angle $\\angle BOC=2\\alpha$ subtend the same arc $BC$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Разберём основной случай, когда центр $O$ лежит **внутри** угла $BAC$. Проведём диаметр из точки $A$ через центр $O$ и обозначим через $D$ его второй конец. Пусть $$\\angle BAO=\\alpha_1,\\qquad \\angle CAO=\\alpha_2,\\qquad\\text{так что }\\ \\angle BAC=\\alpha_1+\\alpha_2 .$$\n\n**Треугольник $OAB$ равнобедренный:** $OA=OB=R$, значит $\\angle OBA=\\angle OAB=\\alpha_1$. Угол $\\angle BOD$ — внешний угол этого треугольника при вершине $O$, поэтому $$\\angle BOD=\\alpha_1+\\alpha_1=2\\alpha_1 .$$\n\n**Точно так же** из треугольника $OAC$ получаем $\\angle COD=2\\alpha_2$.\n\nСкладывая, $$\\angle BOC=\\angle BOD+\\angle COD=2\\left(\\alpha_1+\\alpha_2\\right)=2\\,\\angle BAC . \\qquad\\blacksquare$$\n\nОстальные случаи (центр на стороне угла или вне его) разбираются так же — с одной такой парой вместо двух или с разностью вместо суммы.",
      "en": "Take the main case, with the centre $O$ **inside** the angle $BAC$. Draw the diameter from $A$ through $O$ and call its far end $D$. Put $$\\angle BAO=\\alpha_1,\\qquad \\angle CAO=\\alpha_2,\\qquad\\text{so that }\\ \\angle BAC=\\alpha_1+\\alpha_2 .$$\n\n**The triangle $OAB$ is isosceles:** $OA=OB=R$, so $\\angle OBA=\\angle OAB=\\alpha_1$. The angle $\\angle BOD$ is the exterior angle of that triangle at $O$, hence $$\\angle BOD=\\alpha_1+\\alpha_1=2\\alpha_1 .$$\n\n**In the same way** the triangle $OAC$ gives $\\angle COD=2\\alpha_2$.\n\nAdding, $$\\angle BOC=\\angle BOD+\\angle COD=2\\left(\\alpha_1+\\alpha_2\\right)=2\\,\\angle BAC . \\qquad\\blacksquare$$\n\nThe other cases (the centre on an arm, or outside the angle) go the same way — with one such pair instead of two, or with a difference instead of a sum."
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Три следствия, которые решают задачи",
      "en": "Three corollaries that solve problems"
     },
     "text": {
      "ru": "**1)** Вписанные углы, опирающиеся на **одну и ту же дугу**, равны. Это самый частый инструмент в задачах на окружности.\n\n**2)** Угол, опирающийся на **диаметр**, прямой (центральный угол развёрнутый, значит вписанный равен $90^\\circ$).\n\n**3)** Обратно: если отрезок $BC$ виден из точки $A$ под прямым углом, то $A$ лежит на окружности с диаметром $BC$.",
      "en": "**1)** Inscribed angles subtending the **same arc** are equal. This is the commonest tool in circle problems.\n\n**2)** An angle subtending a **diameter** is right (the central angle is straight, so the inscribed one is $90^\\circ$).\n\n**3)** Conversely: if a segment $BC$ is seen from a point $A$ at a right angle, then $A$ lies on the circle with diameter $BC$."
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 400 280\" role=\"img\" aria-label=\"An angle subtended by a diameter is right\">\n<circle class=\"ln\" cx=\"200\" cy=\"140\" r=\"100\"/>\n<path class=\"lnc\" d=\"M100 140 H300\"/>\n<path class=\"ln\" d=\"M150 53 L100 140 M150 53 L300 140\"/>\n<path class=\"ln\" d=\"M156 65 L167 59 L173 70\"/>\n<circle class=\"pt\" cx=\"200\" cy=\"140\" r=\"3\"/><circle class=\"pt\" cx=\"100\" cy=\"140\" r=\"3.5\"/>\n<circle class=\"pt\" cx=\"300\" cy=\"140\" r=\"3.5\"/><circle class=\"pt\" cx=\"150\" cy=\"53\" r=\"3.5\"/>\n<text x=\"76\" y=\"136\">B</text><text x=\"306\" y=\"136\">C</text><text x=\"142\" y=\"38\">A</text>\n<text x=\"196\" y=\"160\">O</text>\n</svg>",
     "cap": {
      "ru": "$BC$ — диаметр, поэтому $\\angle BAC=90^\\circ$ при любом положении точки $A$ на окружности.",
      "en": "$BC$ is a diameter, so $\\angle BAC=90^\\circ$ wherever $A$ sits on the circle."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Хорда окружности радиуса $10$ удалена от центра на $6$. Найдите её длину.",
      "en": "A chord of a circle of radius $10$ is at distance $6$ from the centre. Find its length."
     },
     "steps": {
      "ru": [
       "Перпендикуляр, опущенный из центра на хорду, делит её пополам: получается два равных прямоугольных треугольника.",
       "В таком треугольнике гипотенуза — радиус $10$, один катет — расстояние $6$.",
       "Второй катет равен $\\sqrt{10^{2}-6^{2}}=\\sqrt{64}=8$ — это половина хорды.",
       "Значит хорда равна $16$."
      ],
      "en": [
       "The perpendicular from the centre to a chord bisects it, giving two congruent right triangles.",
       "In such a triangle the hypotenuse is the radius $10$ and one leg is the distance $6$.",
       "The other leg is $\\sqrt{10^{2}-6^{2}}=\\sqrt{64}=8$ — half the chord.",
       "So the chord is $16$."
      ]
     },
     "ans": {
      "ru": "$16$.",
      "en": "$16$."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Все углы, связанные с окружностью",
    "en": "Every angle a circle can make"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Вписанный угол — частный случай общего правила. Ниже собраны все четыре положения вершины относительно окружности; в каждом случае угол выражается через дуги, и все четыре формулы — одна формула с разными знаками.",
      "en": "The inscribed angle is a special case of one general rule. Below are all four possible positions of the vertex relative to the circle; in each case the angle is expressed through arcs, and the four formulas are really one formula with different signs."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Четыре положения вершины",
      "en": "Four positions of the vertex"
     },
     "text": {
      "ru": "Пусть две прямые пересекают окружность и высекают на ней дуги $\\alpha$ и $\\beta$ (дуга $\\alpha$ заключена внутри угла, дуга $\\beta$ — внутри вертикального угла). Тогда угол между прямыми равен:\n\n- **вершина в центре:** $\\alpha$;\n- **вершина на окружности:** $\\dfrac{\\alpha}{2}$;\n- **вершина внутри окружности:** $\\dfrac{\\alpha+\\beta}{2}$;\n- **вершина вне окружности:** $\\dfrac{\\left|\\alpha-\\beta\\right|}{2}$.",
      "en": "Let two lines cut the circle and intercept arcs $\\alpha$ and $\\beta$ ($\\alpha$ inside the angle, $\\beta$ inside the vertical angle). The angle between the lines is:\n\n- **vertex at the centre:** $\\alpha$;\n- **vertex on the circle:** $\\dfrac{\\alpha}{2}$;\n- **vertex inside the circle:** $\\dfrac{\\alpha+\\beta}{2}$;\n- **vertex outside the circle:** $\\dfrac{\\left|\\alpha-\\beta\\right|}{2}$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Оба нецентральных случая сводятся к вписанному углу теоремой о внешнем угле треугольника.\n\n**Вершина внутри.** Пусть хорды $AB$ и $CD$ пересекаются в точке $P$, и рассматривается угол $\\angle APC$. Проведём хорду $AD$. В треугольнике $APD$ угол $\\angle APC$ — внешний при вершине $P$, значит $$\\angle APC=\\angle PAD+\\angle PDA=\\angle BAD+\\angle ADC .$$ Оба слагаемых — вписанные углы, они равны половинам дуг $BD$ и $AC$. Значит $$\\angle APC=\\frac{\\smallsmile AC+\\smallsmile BD}{2} \\quad\\checkmark$$\n\n**Вершина снаружи.** Пусть секущие из точки $P$ пересекают окружность в парах $A,B$ и $C,D$ (ближние точки — $A$ и $C$). Проведём хорду $AD$. Теперь **вписанный** угол $\\angle BAD$ является внешним для треугольника $APD$, поэтому $$\\angle BAD=\\angle APD+\\angle ADP ,$$ откуда $$\\angle APD=\\angle BAD-\\angle ADC=\\frac{\\smallsmile BD}{2}-\\frac{\\smallsmile AC}{2} \\quad\\checkmark\\qquad\\blacksquare$$\n\nОдин и тот же приём — «переведи угол в вписанный через внешний угол треугольника» — работает в обоих случаях; разница лишь в том, по какую сторону оказывается вершина.",
      "en": "Both non-central cases reduce to the inscribed angle via the exterior angle theorem.\n\n**Vertex inside.** Let the chords $AB$ and $CD$ meet at $P$ and consider $\\angle APC$. Draw the chord $AD$. In the triangle $APD$ the angle $\\angle APC$ is exterior at $P$, so $$\\angle APC=\\angle BAD+\\angle ADC .$$ Both terms are inscribed angles, equal to half the arcs $BD$ and $AC$. Hence $$\\angle APC=\\frac{\\smallsmile AC+\\smallsmile BD}{2} \\quad\\checkmark$$\n\n**Vertex outside.** Let two secants from $P$ meet the circle in the pairs $A,B$ and $C,D$ (with $A$ and $C$ nearer to $P$). Draw the chord $AD$. Now the **inscribed** angle $\\angle BAD$ is exterior to the triangle $APD$, so $$\\angle BAD=\\angle APD+\\angle ADP ,$$ giving $$\\angle APD=\\frac{\\smallsmile BD}{2}-\\frac{\\smallsmile AC}{2} \\quad\\checkmark\\qquad\\blacksquare$$\n\nOne and the same move — turn the angle into an inscribed one through the exterior angle theorem — settles both cases; only the side on which the vertex falls differs."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Угол между касательной и хордой — предельный случай «вершины на окружности», когда вторая точка пересечения сливается с первой; отсюда его величина $\\tfrac12\\smallsmile$. Угол между двумя касательными — предельный случай «вершины снаружи»: $$\\angle=\\frac{\\smallsmile_{\\text{дальняя}}-\\smallsmile_{\\text{ближняя}}}{2}=180^{\\circ}-\\smallsmile_{\\text{ближняя}} .$$",
      "en": "The tangent–chord angle is the limiting case of \"vertex on the circle\" when the second intersection merges with the first; hence its value $\\tfrac12\\smallsmile$. The angle between two tangents is the limiting case of \"vertex outside\": $$\\angle=\\frac{\\smallsmile_{\\text{far}}-\\smallsmile_{\\text{near}}}{2}=180^{\\circ}-\\smallsmile_{\\text{near}} .$$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Признак четырёх точек на окружности",
      "en": "When four points are concyclic"
     },
     "text": {
      "ru": "Точки $A$, $B$, $C$, $D$ лежат на одной окружности тогда и только тогда, когда выполнено любое из условий:\n\n- $C$ и $D$ лежат по одну сторону от прямой $AB$ и $\\angle ACB=\\angle ADB$ (**отрезок виден под равными углами**);\n- $ABCD$ — выпуклый четырёхугольник и $\\angle A+\\angle C=180^{\\circ}$;\n- прямые $AB$ и $CD$ пересекаются в точке $P$, и $PA\\cdot PB=PC\\cdot PD$.",
      "en": "Points $A$, $B$, $C$, $D$ lie on one circle if and only if any of the following holds:\n\n- $C$ and $D$ are on the same side of the line $AB$ and $\\angle ACB=\\angle ADB$ (**a segment subtending equal angles**);\n- $ABCD$ is a convex quadrilateral with $\\angle A+\\angle C=180^{\\circ}$;\n- the lines $AB$ and $CD$ meet at $P$ and $PA\\cdot PB=PC\\cdot PD$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Докажем первый критерий; остальные сводятся к нему.\n\n**Необходимость** — это теорема о вписанном угле: оба угла опираются на одну дугу $AB$ ✓\n\n**Достаточность.** Проведём окружность через $A$, $B$, $C$ (она существует и единственна). Пусть точка $D$ ей не принадлежит. Луч $AD$ пересекает окружность в некоторой точке $D_1$, лежащей по ту же сторону от $AB$.\n\nЕсли $D$ **внутри** окружности, то вершина $D$ угла $\\angle ADB$ лежит внутри, и по формуле для внутренней вершины $$\\angle ADB=\\frac{\\smallsmile AB+\\smallsmile\\left(\\dots\\right)}{2}>\\frac{\\smallsmile AB}{2}=\\angle ACB ,$$ то есть угол строго больше. Если $D$ **снаружи**, точно так же получается строго меньший угол.\n\nЗначит равенство $\\angle ADB=\\angle ACB$ возможно только тогда, когда $D$ лежит на окружности ✓ $\\blacksquare$",
      "en": "We prove the first criterion; the others reduce to it.\n\n**Necessity** is the inscribed angle theorem: both angles subtend the same arc $AB$ ✓\n\n**Sufficiency.** Draw the circle through $A$, $B$, $C$ (it exists and is unique) and suppose $D$ is not on it.\n\nIf $D$ is **inside** the circle then the vertex of $\\angle ADB$ lies inside, and by the interior-vertex formula $$\\angle ADB>\\frac{\\smallsmile AB}{2}=\\angle ACB ,$$ so the angle is strictly larger. If $D$ is **outside**, the same computation makes it strictly smaller.\n\nHence $\\angle ADB=\\angle ACB$ forces $D$ onto the circle ✓ $\\blacksquare$"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "**Поиск вписанного четырёхугольника — главный приём планиметрии.** Увидев на чертеже два равных угла, опирающихся на общий отрезок, или два прямых угла, опирающихся на общий отрезок (тогда все четыре точки лежат на окружности с диаметром этого отрезка), немедленно проводите окружность: она свяжет между собой углы, которые иначе никак не связаны.",
      "en": "**Spotting a cyclic quadrilateral is the central move in plane geometry.** Whenever a figure shows two equal angles subtending a common segment, or two right angles on a common segment (then all four points lie on the circle with that segment as diameter), draw the circle at once: it links angles that are otherwise unrelated."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Касательная",
    "en": "Tangents"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Касательная и радиус",
      "en": "Tangent and radius"
     },
     "text": {
      "ru": "Прямая является касательной к окружности тогда и только тогда, когда она перпендикулярна радиусу, проведённому в точку касания.",
      "en": "A line is tangent to a circle if and only if it is perpendicular to the radius drawn to the point of contact."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Отрезки касательных",
      "en": "Tangent segments"
     },
     "text": {
      "ru": "Отрезки двух касательных, проведённых к окружности из одной точки, равны. Более того, прямая, соединяющая эту точку с центром, делит угол между касательными пополам.",
      "en": "The two tangent segments from a point to a circle are equal. Moreover, the line from that point to the centre bisects the angle between the tangents."
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 400 280\" role=\"img\" aria-label=\"Two tangents drawn from an external point\">\n<circle class=\"ln\" cx=\"150\" cy=\"140\" r=\"70\"/>\n<path class=\"dsh\" d=\"M150 140 L340 140 M150 140 L176 75 M150 140 L176 205\"/>\n<path class=\"lnc\" d=\"M340 140 L176 75 M340 140 L176 205\"/>\n<circle class=\"pt\" cx=\"150\" cy=\"140\" r=\"3.5\"/><circle class=\"pt\" cx=\"340\" cy=\"140\" r=\"3.5\"/>\n<circle class=\"ptc\" cx=\"176\" cy=\"75\" r=\"3.5\"/><circle class=\"ptc\" cx=\"176\" cy=\"205\" r=\"3.5\"/>\n<text x=\"132\" y=\"156\">O</text><text x=\"348\" y=\"146\">P</text>\n<text class=\"acc\" x=\"164\" y=\"60\">M</text><text class=\"acc\" x=\"164\" y=\"224\">N</text>\n</svg>",
     "cap": {
      "ru": "Касательные $PM$ и $PN$ равны, а прямая $OP$ — ось симметрии картинки.",
      "en": "The tangents $PM$ and $PN$ are equal, and the line $OP$ is the axis of symmetry of the picture."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Сравним прямоугольные треугольники $OMP$ и $ONP$:\n\n$OM=ON=R$ — радиусы;\n$OP$ — общая гипотенуза;\n$\\angle OMP=\\angle ONP=90^\\circ$ — по предыдущей теореме.\n\nПо признаку равенства прямоугольных треугольников (по гипотенузе и катету) они равны. Отсюда $PM=PN$ и $\\angle MPO=\\angle NPO$. $\\blacksquare$",
      "en": "Compare the right triangles $OMP$ and $ONP$:\n\n$OM=ON=R$ — radii;\n$OP$ — a common hypotenuse;\n$\\angle OMP=\\angle ONP=90^\\circ$ — by the previous theorem.\n\nBy the hypotenuse–leg criterion they are congruent. Hence $PM=PN$ and $\\angle MPO=\\angle NPO$. $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Угол между касательной и хордой",
      "en": "The tangent–chord angle"
     },
     "text": {
      "ru": "Угол между касательной и хордой, проведённой из точки касания, равен вписанному углу, опирающемуся на эту хорду с другой стороны.",
      "en": "The angle between a tangent and a chord drawn from the point of contact equals the inscribed angle subtending that chord from the other side."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Пусть $PT$ — касательная в точке $T$, $TB$ — хорда, а $A$ — точка на большей дуге $TB$. Проведём диаметр $TD$. Тогда $\\angle DTP=90^\\circ$, а угол $\\angle TBD=90^\\circ$, потому что он опирается на диаметр.\n\nВ треугольнике $TBD$ сумма острых углов равна $90^\\circ$, поэтому $$\\angle BTD=90^\\circ-\\angle TDB .$$ Отсюда $$\\angle BTP=90^\\circ-\\angle BTD=\\angle TDB .$$ Но $\\angle TDB$ и $\\angle TAB$ — вписанные углы, опирающиеся на одну и ту же дугу $TB$, значит они равны. Следовательно $\\angle BTP=\\angle TAB$. $\\blacksquare$",
      "en": "Let $PT$ be the tangent at $T$, let $TB$ be a chord and let $A$ be a point on the major arc $TB$. Draw the diameter $TD$. Then $\\angle DTP=90^\\circ$, and $\\angle TBD=90^\\circ$ because it subtends a diameter.\n\nIn the triangle $TBD$ the acute angles add to $90^\\circ$, so $$\\angle BTD=90^\\circ-\\angle TDB ,$$ hence $$\\angle BTP=90^\\circ-\\angle BTD=\\angle TDB .$$ But $\\angle TDB$ and $\\angle TAB$ are inscribed angles on the same arc $TB$, hence equal. Therefore $\\angle BTP=\\angle TAB$. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Из точки $P$ проведены две касательные к окружности радиуса $5$, угол между ними равен $60^\\circ$. Найдите длину касательной и расстояние от $P$ до центра.",
      "en": "Two tangents to a circle of radius $5$ are drawn from a point $P$, meeting at an angle of $60^\\circ$. Find the length of a tangent and the distance from $P$ to the centre."
     },
     "steps": {
      "ru": [
       "Прямая $OP$ делит угол между касательными пополам, поэтому в прямоугольном треугольнике $OMP$ угол при вершине $P$ равен $30^\\circ$.",
       "Катет $OM=5$ лежит против угла $30^\\circ$, значит гипотенуза вдвое больше: $OP=10$.",
       "Второй катет: $PM=\\sqrt{10^{2}-5^{2}}=\\sqrt{75}=5\\sqrt3$."
      ],
      "en": [
       "The line $OP$ bisects the angle between the tangents, so in the right triangle $OMP$ the angle at $P$ is $30^\\circ$.",
       "The leg $OM=5$ lies opposite the $30^\\circ$ angle, so the hypotenuse is twice as long: $OP=10$.",
       "The other leg: $PM=\\sqrt{10^{2}-5^{2}}=\\sqrt{75}=5\\sqrt3$."
      ]
     },
     "ans": {
      "ru": "$PM=5\\sqrt3\\approx8{,}66$ и $OP=10$.",
      "en": "$PM=5\\sqrt3\\approx8.66$ and $OP=10$."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Вписанные четырёхугольники",
    "en": "Cyclic quadrilaterals"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Критерий вписанности",
      "en": "The cyclic criterion"
     },
     "text": {
      "ru": "Выпуклый четырёхугольник вписан в окружность **тогда и только тогда**, когда суммы его противоположных углов равны $180^\\circ$: $$\\angle A+\\angle C=\\angle B+\\angle D=180^\\circ .$$",
      "en": "A convex quadrilateral is cyclic **if and only if** its opposite angles add up to $180^\\circ$: $$\\angle A+\\angle C=\\angle B+\\angle D=180^\\circ .$$"
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 400 280\" role=\"img\" aria-label=\"A cyclic quadrilateral\">\n<circle class=\"ln\" cx=\"200\" cy=\"140\" r=\"100\"/>\n<path class=\"lnc\" d=\"M102 157 L183 42 L287 90 L250 227 Z\"/>\n<circle class=\"pt\" cx=\"102\" cy=\"157\" r=\"3.5\"/><circle class=\"pt\" cx=\"183\" cy=\"42\" r=\"3.5\"/>\n<circle class=\"pt\" cx=\"287\" cy=\"90\" r=\"3.5\"/><circle class=\"pt\" cx=\"250\" cy=\"227\" r=\"3.5\"/>\n<text x=\"78\" y=\"164\">B</text><text x=\"176\" y=\"28\">A</text>\n<text x=\"296\" y=\"86\">D</text><text x=\"252\" y=\"248\">C</text>\n</svg>",
     "cap": {
      "ru": "Четырёхугольник $ABDC$ вписан в окружность; суммы противоположных углов равны $180^\\circ$.",
      "en": "The quadrilateral $ABDC$ is inscribed in a circle; its opposite angles add up to $180^\\circ$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "**Необходимость.** Углы $A$ и $C$ — вписанные и опираются на две дуги, которые вместе составляют всю окружность, то есть $360^\\circ$. По теореме о вписанном угле каждый из них равен половине своей дуги, поэтому $$\\angle A+\\angle C=\\frac{360^\\circ}{2}=180^\\circ .$$\n\n**Достаточность.** Пусть в четырёхугольнике $ABCD$ выполнено $\\angle A+\\angle C=180^\\circ$. Проведём окружность через три точки $A$, $B$, $D$ (через три точки, не лежащие на одной прямой, окружность проходит ровно одна). Если бы точка $C$ не лежала на этой окружности, то луч $DC$ пересекал бы окружность в некоторой другой точке $C^{\\ast}$. Для вписанного четырёхугольника $ABDC^{\\ast}$ по доказанному $\\angle A+\\angle C^{\\ast}=180^\\circ$, значит $\\angle C^{\\ast}=\\angle C$. Но углы $\\angle BCD$ и $\\angle BC^{\\ast}D$ — это углы, под которыми отрезок $BD$ виден из двух разных точек одного луча, и они различны (у одного из треугольников угол является внешним для другого). Противоречие. $\\blacksquare$",
      "en": "**Necessity.** The angles $A$ and $C$ are inscribed and subtend two arcs which together make the whole circle, that is $360^\\circ$. Each is half its arc, so $$\\angle A+\\angle C=\\frac{360^\\circ}{2}=180^\\circ .$$\n\n**Sufficiency.** Suppose $\\angle A+\\angle C=180^\\circ$ in a quadrilateral $ABCD$. Draw the circle through the three points $A$, $B$, $D$ (exactly one circle passes through three non-collinear points). If $C$ were not on it, the ray $DC$ would meet the circle at some other point $C^{\\ast}$. For the cyclic quadrilateral $ABDC^{\\ast}$ we have $\\angle A+\\angle C^{\\ast}=180^\\circ$, so $\\angle C^{\\ast}=\\angle C$. But $\\angle BCD$ and $\\angle BC^{\\ast}D$ are the angles under which $BD$ is seen from two different points of one ray, and they differ (one is an exterior angle of the triangle containing the other). Contradiction. $\\blacksquare$"
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Как доказать, что четыре точки лежат на окружности",
      "en": "How to prove four points concyclic"
     },
     "text": {
      "ru": "Три рабочих способа, в порядке частоты:\n\n**1)** Показать, что сумма противоположных углов равна $180^\\circ$.\n\n**2)** Показать, что отрезок виден из двух точек, лежащих **по одну сторону** от него, под равными углами: если $\\angle ACB=\\angle ADB$, то $A,B,C,D$ лежат на одной окружности.\n\n**3)** Показать, что все четыре точки видны из некоторой точки под прямым углом на общий отрезок — тогда они лежат на окружности с этим отрезком в качестве диаметра.",
      "en": "Three working methods, in order of frequency:\n\n**1)** Show that a pair of opposite angles adds to $180^\\circ$.\n\n**2)** Show that a segment is seen at equal angles from two points **on the same side** of it: if $\\angle ACB=\\angle ADB$ then $A,B,C,D$ are concyclic.\n\n**3)** Show that all four points see one common segment at a right angle — then they lie on the circle with that segment as diameter."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Приём номер три особенно полезен в задачах с высотами. Например, если $BH_1$ и $CH_2$ — высоты треугольника $ABC$, то точки $H_1$ и $H_2$ видят отрезок $BC$ под прямым углом, значит $B$, $C$, $H_1$, $H_2$ лежат на одной окружности с диаметром $BC$.",
      "en": "Method three is especially useful with altitudes. For instance, if $BH_1$ and $CH_2$ are altitudes of a triangle $ABC$, then $H_1$ and $H_2$ see the segment $BC$ at a right angle, so $B$, $C$, $H_1$, $H_2$ lie on one circle with diameter $BC$."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Степень точки",
    "en": "The power of a point"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Пересекающиеся хорды",
      "en": "Intersecting chords"
     },
     "text": {
      "ru": "Если хорды $AB$ и $CD$ пересекаются в точке $P$ внутри окружности, то $$PA\\cdot PB=PC\\cdot PD .$$",
      "en": "If chords $AB$ and $CD$ meet at a point $P$ inside a circle, then $$PA\\cdot PB=PC\\cdot PD .$$"
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 400 280\" role=\"img\" aria-label=\"Two chords meeting inside a circle\">\n<circle class=\"ln\" cx=\"200\" cy=\"140\" r=\"100\"/>\n<path class=\"lnc\" d=\"M113 90 L287 190\"/><path class=\"lnc\" d=\"M113 190 L277 76\"/>\n<circle class=\"pt\" cx=\"113\" cy=\"90\" r=\"3.5\"/><circle class=\"pt\" cx=\"287\" cy=\"190\" r=\"3.5\"/>\n<circle class=\"pt\" cx=\"113\" cy=\"190\" r=\"3.5\"/><circle class=\"pt\" cx=\"277\" cy=\"76\" r=\"3.5\"/>\n<circle class=\"ptc\" cx=\"192\" cy=\"135\" r=\"4\"/>\n<text x=\"92\" y=\"84\">A</text><text x=\"292\" y=\"200\">B</text>\n<text x=\"92\" y=\"204\">C</text><text x=\"284\" y=\"70\">D</text>\n<text class=\"acc\" x=\"196\" y=\"152\">P</text>\n</svg>",
     "cap": {
      "ru": "Хорды $AB$ и $CD$ пересекаются в точке $P$: произведения отрезков равны.",
      "en": "The chords $AB$ and $CD$ meet at $P$: the products of the pieces are equal."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Сравним треугольники $APC$ и $DPB$.\n\n$\\angle APC=\\angle DPB$ — вертикальные углы.\n\n$\\angle CAP=\\angle BDP$ — это вписанные углы $\\angle CAB$ и $\\angle CDB$, опирающиеся на одну и ту же дугу $CB$.\n\nПо двум углам треугольники подобны, поэтому $$\\frac{PA}{PD}=\\frac{PC}{PB}\\quad\\Longrightarrow\\quad PA\\cdot PB=PC\\cdot PD . \\qquad\\blacksquare$$",
      "en": "Compare the triangles $APC$ and $DPB$.\n\n$\\angle APC=\\angle DPB$ — vertical angles.\n\n$\\angle CAP=\\angle BDP$ — these are the inscribed angles $\\angle CAB$ and $\\angle CDB$ on the same arc $CB$.\n\nTwo angles make the triangles similar, so $$\\frac{PA}{PD}=\\frac{PC}{PB}\\quad\\Longrightarrow\\quad PA\\cdot PB=PC\\cdot PD . \\qquad\\blacksquare$$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Секущая и касательная",
      "en": "Secant and tangent"
     },
     "text": {
      "ru": "Пусть из точки $P$ вне окружности проведены касательная $PT$ и секущая, пересекающая окружность в точках $A$ и $B$. Тогда $$PT^{2}=PA\\cdot PB .$$",
      "en": "From a point $P$ outside a circle draw a tangent $PT$ and a secant meeting the circle at $A$ and $B$. Then $$PT^{2}=PA\\cdot PB .$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Сравним треугольники $PTA$ и $PBT$.\n\nУгол при вершине $P$ у них общий.\n\n$\\angle PTA=\\angle PBT$: слева — угол между касательной $PT$ и хордой $TA$, справа — вписанный угол, опирающийся на ту же хорду; они равны по теореме об угле между касательной и хордой.\n\nЗначит треугольники подобны, и $$\\frac{PT}{PB}=\\frac{PA}{PT}\\quad\\Longrightarrow\\quad PT^{2}=PA\\cdot PB . \\qquad\\blacksquare$$",
      "en": "Compare the triangles $PTA$ and $PBT$.\n\nThey share the angle at $P$.\n\n$\\angle PTA=\\angle PBT$: on the left the tangent–chord angle between $PT$ and the chord $TA$, on the right the inscribed angle on the same chord; the tangent–chord theorem makes them equal.\n\nSo the triangles are similar and $$\\frac{PT}{PB}=\\frac{PA}{PT}\\quad\\Longrightarrow\\quad PT^{2}=PA\\cdot PB . \\qquad\\blacksquare$$"
     }
    },
    {
     "t": "idea",
     "name": {
      "ru": "Одно число вместо трёх теорем",
      "en": "One number instead of three theorems"
     },
     "text": {
      "ru": "Все три утверждения — одно и то же. **Степенью точки $P$** относительно окружности с центром $O$ и радиусом $R$ называют число $$\\deg(P)=OP^{2}-R^{2}.$$ Для любой прямой через $P$, пересекающей окружность в точках $X$ и $Y$, произведение $\\overline{PX}\\cdot\\overline{PY}$ (со знаками) равно степени точки. Внутри окружности степень отрицательна, снаружи положительна, на окружности равна нулю, а для касательной $PT^{2}=\\deg(P)$.",
      "en": "All three statements are one. The **power of a point $P$** with respect to a circle of centre $O$ and radius $R$ is the number $$\\operatorname{pow}(P)=OP^{2}-R^{2}.$$ For any line through $P$ meeting the circle at $X$ and $Y$, the signed product $\\overline{PX}\\cdot\\overline{PY}$ equals the power. Inside the circle it is negative, outside positive, on the circle zero, and for a tangent $PT^{2}=\\operatorname{pow}(P)$."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Хорды $AB$ и $CD$ пересекаются в точке $P$, причём $AP=4$, $PB=6$ и $CP=3$. Найдите $PD$ и длину хорды $CD$.",
      "en": "Chords $AB$ and $CD$ meet at $P$ with $AP=4$, $PB=6$ and $CP=3$. Find $PD$ and the length of the chord $CD$."
     },
     "steps": {
      "ru": [
       "По теореме о пересекающихся хордах $PA\\cdot PB=PC\\cdot PD$.",
       "Подставляем: $4\\cdot6=3\\cdot PD$, то есть $24=3\\,PD$.",
       "Значит $PD=8$.",
       "Хорда $CD=CP+PD=3+8=11$."
      ],
      "en": [
       "The intersecting chords theorem gives $PA\\cdot PB=PC\\cdot PD$.",
       "Substituting: $4\\cdot6=3\\cdot PD$, that is $24=3\\,PD$.",
       "So $PD=8$.",
       "The chord $CD=CP+PD=3+8=11$."
      ]
     },
     "ans": {
      "ru": "$PD=8$, $CD=11$.",
      "en": "$PD=8$, $CD=11$."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Вписанная и описанная окружности треугольника",
    "en": "The incircle and circumcircle of a triangle"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "В любой треугольник можно вписать окружность, и около любого треугольника можно описать окружность — и то и другое единственным образом.",
      "en": "Every triangle has an inscribed circle and a circumscribed circle, and each of them is unique."
     }
    },
    {
     "t": "ul",
     "items": {
      "ru": [
       "**Центр вписанной окружности** — точка пересечения биссектрис; она равноудалена от сторон, и это расстояние есть радиус $r$.",
       "**Центр описанной окружности** — точка пересечения серединных перпендикуляров; она равноудалена от вершин, и это расстояние есть радиус $R$.",
       "$S=pr$, где $p$ — полупериметр: разбейте треугольник на три, соединив центр с вершинами.",
       "$S=\\dfrac{abc}{4R}$ — вторая формула площади через радиус описанной окружности."
      ],
      "en": [
       "**The incentre** is the meeting point of the bisectors; it is equidistant from the sides, and that distance is the inradius $r$.",
       "**The circumcentre** is the meeting point of the perpendicular bisectors; it is equidistant from the vertices, and that distance is the circumradius $R$.",
       "$S=pr$, where $p$ is the semiperimeter: split the triangle into three by joining the centre to the vertices.",
       "$S=\\dfrac{abc}{4R}$ — a second area formula, through the circumradius."
      ]
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Отрезки касательных к вписанной окружности",
      "en": "Tangent lengths to the incircle"
     },
     "text": {
      "ru": "Если вписанная окружность касается сторон треугольника, то отрезок от вершины $A$ до точки касания равен $p-a$, где $a=BC$ и $p$ — полупериметр.",
      "en": "If the incircle touches the sides of a triangle, the segment from the vertex $A$ to a point of contact equals $p-a$, where $a=BC$ and $p$ is the semiperimeter."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Обозначим длины отрезков касательных из вершин через $x$ (из $A$), $y$ (из $B$), $z$ (из $C$) — из каждой вершины выходят два равных отрезка касательных.\n\nТогда стороны выражаются так: $$a=BC=y+z,\\qquad b=CA=z+x,\\qquad c=AB=x+y .$$ Складывая, $$a+b+c=2(x+y+z)\\quad\\Longrightarrow\\quad x+y+z=p .$$ Отсюда $$x=p-(y+z)=p-a . \\qquad\\blacksquare$$\n\n**Следствие для прямоугольного треугольника.** Если угол $C$ прямой, то отрезки касательных из $C$ равны $r$ (получается квадрат со стороной $r$ в углу), то есть $z=r$. Тогда $$r=z=p-c=\\frac{a+b+c}{2}-c=\\frac{a+b-c}{2}.$$",
      "en": "Write $x$, $y$, $z$ for the tangent lengths from $A$, $B$, $C$ — each vertex sends out two equal tangent segments.\n\nThe sides are then $$a=BC=y+z,\\qquad b=CA=z+x,\\qquad c=AB=x+y .$$ Adding, $$a+b+c=2(x+y+z)\\quad\\Longrightarrow\\quad x+y+z=p ,$$ hence $$x=p-(y+z)=p-a . \\qquad\\blacksquare$$\n\n**Corollary for a right triangle.** If the angle $C$ is right, the tangent segments from $C$ equal $r$ (a square of side $r$ sits in the corner), so $z=r$. Then $$r=z=p-c=\\frac{a+b+c}{2}-c=\\frac{a+b-c}{2}.$$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Теорема синусов",
      "en": "The law of sines"
     },
     "text": {
      "ru": "В любом треугольнике $$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}=2R .$$",
      "en": "In any triangle $$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}=2R .$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Проведём через вершину $B$ диаметр описанной окружности и обозначим через $B^{\\prime}$ его второй конец. Угол $\\angle BCB^{\\prime}$ опирается на диаметр, значит равен $90^\\circ$.\n\nУглы $\\angle BB^{\\prime}C$ и $\\angle BAC$ — вписанные и опираются на одну и ту же дугу $BC$, поэтому $\\angle BB^{\\prime}C=A$.\n\nВ прямоугольном треугольнике $BCB^{\\prime}$ катет $BC=a$ лежит против угла $A$, а гипотенуза равна $2R$, значит $$a=2R\\sin A\\quad\\Longrightarrow\\quad \\frac{a}{\\sin A}=2R .$$ То же рассуждение для двух других вершин завершает доказательство. $\\blacksquare$",
      "en": "Through the vertex $B$ draw the diameter of the circumcircle and call its far end $B^{\\prime}$. The angle $\\angle BCB^{\\prime}$ subtends a diameter, hence equals $90^\\circ$.\n\nThe angles $\\angle BB^{\\prime}C$ and $\\angle BAC$ are inscribed on the same arc $BC$, so $\\angle BB^{\\prime}C=A$.\n\nIn the right triangle $BCB^{\\prime}$ the leg $BC=a$ lies opposite the angle $A$ and the hypotenuse is $2R$, so $$a=2R\\sin A\\quad\\Longrightarrow\\quad \\frac{a}{\\sin A}=2R .$$ The same argument at the other two vertices finishes the proof. $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Формулы вписанной и вневписанных окружностей",
      "en": "Formulas for the incircle and the excircles"
     },
     "text": {
      "ru": "Пусть $p$ — полупериметр, $S$ — площадь. Тогда $$r=\\frac{S}{p},\\qquad r=\\left(p-a\\right)\\tan\\frac{A}{2},\\qquad R=\\frac{abc}{4S} .$$ Вневписанная окружность, касающаяся стороны $a$, имеет радиус $$r_a=\\frac{S}{p-a},$$ и выполняется $$\\frac1r=\\frac1{r_a}+\\frac1{r_b}+\\frac1{r_c} .$$",
      "en": "Let $p$ be the semiperimeter and $S$ the area. Then $$r=\\frac{S}{p},\\qquad r=\\left(p-a\\right)\\tan\\frac{A}{2},\\qquad R=\\frac{abc}{4S} .$$ The excircle touching the side $a$ has radius $$r_a=\\frac{S}{p-a},$$ and $$\\frac1r=\\frac1{r_a}+\\frac1{r_b}+\\frac1{r_c} .$$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Формула $r=\\dfrac{S}{p}$ получается разбиением треугольника на три с вершиной в центре $I$ и высотами $r$.\n\nВторая формула — из прямоугольного треугольника, образованного центром $I$, вершиной $A$ и точкой касания на стороне $AB$: касательная из $A$ имеет длину $p-a$, а угол при вершине равен $\\tfrac{A}{2}$, поэтому $r=\\left(p-a\\right)\\tan\\tfrac{A}{2}$ ✓\n\nДля вневписанной окружности с центром $I_a$ разобьём фигуру иначе: $$S=S_{ABI_a}+S_{ACI_a}-S_{BCI_a}=\\frac{c\\,r_a}{2}+\\frac{b\\,r_a}{2}-\\frac{a\\,r_a}{2}=r_a\\cdot\\frac{b+c-a}{2}=r_a\\left(p-a\\right) \\quad\\checkmark$$\n\nПоследнее равенство проверяется подстановкой: $$\\frac1{r_a}+\\frac1{r_b}+\\frac1{r_c}=\\frac{\\left(p-a\\right)+\\left(p-b\\right)+\\left(p-c\\right)}{S}=\\frac{3p-2p}{S}=\\frac{p}{S}=\\frac1r \\quad\\checkmark\\qquad\\blacksquare$$",
      "en": "The formula $r=\\dfrac{S}{p}$ comes from splitting the triangle into three with apex $I$ and altitude $r$.\n\nThe second comes from the right triangle formed by $I$, the vertex $A$ and the point of tangency on $AB$: the tangent length from $A$ is $p-a$ and the half-angle is $\\tfrac{A}{2}$, so $r=\\left(p-a\\right)\\tan\\tfrac{A}{2}$ ✓\n\nFor the excircle with centre $I_a$ split the figure differently: $$S=S_{ABI_a}+S_{ACI_a}-S_{BCI_a}=r_a\\cdot\\frac{b+c-a}{2}=r_a\\left(p-a\\right) \\quad\\checkmark$$\n\nThe last identity is a substitution: $$\\frac1{r_a}+\\frac1{r_b}+\\frac1{r_c}=\\frac{\\left(p-a\\right)+\\left(p-b\\right)+\\left(p-c\\right)}{S}=\\frac{p}{S}=\\frac1r \\quad\\checkmark\\qquad\\blacksquare$$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Формула Эйлера и неравенство $R\\ge2r$",
      "en": "The formula of Euler and the inequality $R\\ge2r$"
     },
     "text": {
      "ru": "Расстояние между центрами вписанной и описанной окружностей удовлетворяет $$OI^{2}=R^{2}-2Rr .$$ Отсюда сразу следует $R\\ge2r$, с равенством только в равностороннем треугольнике.",
      "en": "The distance between the incentre and the circumcentre satisfies $$OI^{2}=R^{2}-2Rr .$$ Hence $R\\ge2r$ at once, with equality only for the equilateral triangle."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Продолжим биссектрису $AI$ до пересечения с описанной окружностью в точке $M$ — середине дуги $BC$.\n\n**Ключевая лемма (о трилистнике):** $MI=MB=MC$. Действительно, $$\\angle MBI=\\angle MBC+\\angle CBI=\\frac{A}{2}+\\frac{B}{2},$$ поскольку $\\angle MBC$ опирается на ту же дугу $MC$, что и $\\angle MAC=\\tfrac{A}{2}$. С другой стороны, $\\angle MIB$ — внешний угол треугольника $ABI$ при вершине $I$, значит $$\\angle MIB=\\frac{A}{2}+\\frac{B}{2}.$$ Углы равны, поэтому треугольник $MBI$ равнобедренный и $MI=MB$ ✓\n\nТеперь применим степень точки $I$ относительно описанной окружности: она равна $OI^{2}-R^{2}$ и одновременно $-AI\\cdot IM$ (точка внутри, знак отрицательный). Значит $$R^{2}-OI^{2}=AI\\cdot IM=AI\\cdot MB .$$\n\nОсталось вычислить оба множителя. Из прямоугольного треугольника с катетом $r$ и углом $\\tfrac{A}{2}$ при вершине $A$ получаем $AI=\\dfrac{r}{\\sin\\frac{A}{2}}$. По теореме синусов в описанной окружности $MB=2R\\sin\\dfrac{A}{2}$.\n\nПеремножим: $$AI\\cdot MB=\\frac{r}{\\sin\\frac{A}{2}}\\cdot2R\\sin\\frac{A}{2}=2Rr \\quad\\checkmark$$\n\nЗначит $R^{2}-OI^{2}=2Rr$, то есть $OI^{2}=R^{2}-2Rr$ ✓ Так как левая часть неотрицательна, $R^{2}\\ge2Rr$ и $R\\ge2r$; равенство означает $O=I$, то есть равносторонний треугольник $\\blacksquare$",
      "en": "Extend the bisector $AI$ to meet the circumcircle at $M$, the midpoint of the arc $BC$.\n\n**Key lemma (the trillium lemma):** $MI=MB=MC$. Indeed $$\\angle MBI=\\angle MBC+\\angle CBI=\\frac{A}{2}+\\frac{B}{2},$$ since $\\angle MBC$ subtends the same arc $MC$ as $\\angle MAC=\\tfrac{A}{2}$. On the other hand $\\angle MIB$ is exterior to the triangle $ABI$ at $I$, so $$\\angle MIB=\\frac{A}{2}+\\frac{B}{2}.$$ The angles agree, so $MBI$ is isosceles and $MI=MB$ ✓\n\nNow use the power of $I$ with respect to the circumcircle: it equals $OI^{2}-R^{2}$, and also $-AI\\cdot IM$ (the point is inside, hence the sign). So $$R^{2}-OI^{2}=AI\\cdot MB .$$\n\nBoth factors are easy. The right triangle with leg $r$ and half-angle $\\tfrac{A}{2}$ at $A$ gives $AI=\\dfrac{r}{\\sin\\frac{A}{2}}$, and the law of sines in the circumcircle gives $MB=2R\\sin\\dfrac{A}{2}$.\n\nMultiplying, $$AI\\cdot MB=2Rr \\quad\\checkmark$$\n\nHence $OI^{2}=R^{2}-2Rr$ ✓ The left side is non-negative, so $R\\ge2r$; equality means $O=I$, i.e. an equilateral triangle $\\blacksquare$"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Лемма о трилистнике («середина дуги равноудалена от двух вершин и от центра вписанной окружности») — один из самых частых вспомогательных фактов на олимпиадах. Стоит запомнить её отдельно от доказательства формулы Эйлера.",
      "en": "The trillium lemma (\"the arc midpoint is equidistant from two vertices and from the incentre\") is one of the most frequently used auxiliary facts at olympiads. It is worth remembering separately from the formula of Euler."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Птолемей, радикальная ось и окружность девяти точек",
    "en": "Ptolemy, the radical axis and the nine-point circle"
   },
   "blocks": [
    {
     "t": "thm",
     "name": {
      "ru": "Теорема Птолемея",
      "en": "Ptolemy theorem"
     },
     "text": {
      "ru": "Для вписанного четырёхугольника $ABCD$ $$AC\\cdot BD=AB\\cdot CD+BC\\cdot AD ,$$ то есть произведение диагоналей равно сумме произведений противоположных сторон. Для произвольного четырёхугольника выполняется **неравенство** $AC\\cdot BD\\le AB\\cdot CD+BC\\cdot AD$, с равенством лишь в случае вписанного.",
      "en": "For a cyclic quadrilateral $ABCD$ $$AC\\cdot BD=AB\\cdot CD+BC\\cdot AD ,$$ so the product of the diagonals equals the sum of the products of opposite sides. For an arbitrary quadrilateral the **inequality** $AC\\cdot BD\\le AB\\cdot CD+BC\\cdot AD$ holds, with equality only in the cyclic case."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Отметим на диагонали $AC$ такую точку $K$, что $$\\angle ABK=\\angle DBC .$$\n\n**Первая пара подобных треугольников.** В треугольниках $ABK$ и $DBC$ равны углы при вершине $B$ (по построению) и углы $\\angle BAK=\\angle BAC=\\angle BDC$ (вписанные, опираются на дугу $BC$). Значит $\\triangle ABK\\sim\\triangle DBC$, откуда $$\\frac{AK}{DC}=\\frac{AB}{DB}\\quad\\Longrightarrow\\quad AK\\cdot BD=AB\\cdot CD .$$\n\n**Вторая пара.** Прибавив к обеим частям равенства $\\angle ABK=\\angle DBC$ угол $\\angle KBD$, получаем $\\angle ABD=\\angle KBC$. Кроме того, $\\angle ADB=\\angle ACB=\\angle KCB$ (опираются на дугу $AB$). Значит $\\triangle ABD\\sim\\triangle KBC$, откуда $$\\frac{KC}{AD}=\\frac{BC}{BD}\\quad\\Longrightarrow\\quad KC\\cdot BD=BC\\cdot AD .$$\n\nСложим два полученных равенства: $$\\left(AK+KC\\right)BD=AB\\cdot CD+BC\\cdot AD .$$ Точка $K$ лежит на отрезке $AC$, поэтому $AK+KC=AC$ ✓ $\\blacksquare$",
      "en": "Mark on the diagonal $AC$ the point $K$ with $$\\angle ABK=\\angle DBC .$$\n\n**First pair of similar triangles.** In $ABK$ and $DBC$ the angles at $B$ agree by construction, and $\\angle BAK=\\angle BAC=\\angle BDC$ (inscribed on the arc $BC$). So $\\triangle ABK\\sim\\triangle DBC$ and $$\\frac{AK}{DC}=\\frac{AB}{DB}\\quad\\Longrightarrow\\quad AK\\cdot BD=AB\\cdot CD .$$\n\n**Second pair.** Adding $\\angle KBD$ to both sides of $\\angle ABK=\\angle DBC$ gives $\\angle ABD=\\angle KBC$. Also $\\angle ADB=\\angle ACB=\\angle KCB$ (inscribed on the arc $AB$). So $\\triangle ABD\\sim\\triangle KBC$ and $$\\frac{KC}{AD}=\\frac{BC}{BD}\\quad\\Longrightarrow\\quad KC\\cdot BD=BC\\cdot AD .$$\n\nAdd the two results: $$\\left(AK+KC\\right)BD=AB\\cdot CD+BC\\cdot AD ,$$ and $K$ lies on the segment $AC$, so $AK+KC=AC$ ✓ $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Точка $P$ лежит на дуге $BC$ описанной окружности равностороннего треугольника $ABC$. Докажите, что $PA=PB+PC$.",
      "en": "A point $P$ lies on the arc $BC$ of the circumcircle of an equilateral triangle $ABC$. Prove that $PA=PB+PC$."
     },
     "steps": {
      "ru": [
       "Четырёхугольник $ABPC$ вписанный (все четыре точки на окружности), его диагонали — $AP$ и $BC$.",
       "По теореме Птолемея $$AP\\cdot BC=AB\\cdot PC+AC\\cdot PB .$$",
       "Треугольник равносторонний, поэтому $AB=AC=BC=a$: $$AP\\cdot a=a\\cdot PC+a\\cdot PB .$$",
       "Разделим на $a>0$: $AP=PB+PC$ ✓",
       "Обратите внимание, насколько коротким стало решение: без Птолемея пришлось бы поворачивать треугольник на $60^{\\circ}$."
      ],
      "en": [
       "The quadrilateral $ABPC$ is cyclic and its diagonals are $AP$ and $BC$.",
       "Ptolemy gives $$AP\\cdot BC=AB\\cdot PC+AC\\cdot PB .$$",
       "The triangle is equilateral, so $AB=AC=BC=a$: $$AP\\cdot a=a\\cdot PC+a\\cdot PB .$$",
       "Divide by $a>0$: $AP=PB+PC$ ✓",
       "Note how short this is: without Ptolemy one would have to rotate the triangle by $60^{\\circ}$."
      ]
     },
     "ans": {
      "ru": "$PA=PB+PC$ по теореме Птолемея.",
      "en": "$PA=PB+PC$, by Ptolemy."
     }
    },
    {
     "t": "def",
     "name": {
      "ru": "Степень точки",
      "en": "The power of a point"
     },
     "text": {
      "ru": "**Степенью точки $P$ относительно окружности** с центром $O$ и радиусом $R$ называется число $$\\operatorname{pow}(P)=OP^{2}-R^{2}.$$ Она отрицательна внутри окружности, равна нулю на ней и положительна снаружи.",
      "en": "The **power of a point $P$** with respect to a circle of centre $O$ and radius $R$ is the number $$\\operatorname{pow}(P)=OP^{2}-R^{2}.$$ It is negative inside the circle, zero on it and positive outside."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Единая формулировка",
      "en": "One statement for all cases"
     },
     "text": {
      "ru": "Для любой прямой через $P$, пересекающей окружность в точках $A$ и $B$, произведение $\\overline{PA}\\cdot\\overline{PB}$ **ориентированных** длин равно $\\operatorname{pow}(P)$ и не зависит от выбора прямой. Если прямая касается окружности в точке $T$, то $\\operatorname{pow}(P)=PT^{2}$.",
      "en": "For every line through $P$ meeting the circle at $A$ and $B$, the product $\\overline{PA}\\cdot\\overline{PB}$ of **signed** lengths equals $\\operatorname{pow}(P)$ and does not depend on the line. If the line touches the circle at $T$ then $\\operatorname{pow}(P)=PT^{2}$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Проведём через $P$ прямую, проходящую **через центр**: она пересекает окружность в точках, удалённых от $P$ на $\\left|OP-R\\right|$ и $OP+R$ (для внешней точки). Произведение равно $$\\left(OP-R\\right)\\left(OP+R\\right)=OP^{2}-R^{2} \\quad\\checkmark$$\n\nДля произвольной прямой воспользуемся уже доказанными теоремами о пересекающихся хордах (вершина внутри) и о двух секущих (вершина снаружи): в обоих случаях произведение одно и то же для всех прямых через $P$. Значит оно равно значению, найденному для прямой через центр ✓ $\\blacksquare$",
      "en": "Take the line through $P$ that passes **through the centre**: it meets the circle at distances $\\left|OP-R\\right|$ and $OP+R$ from $P$ (for an exterior point). Their product is $$\\left(OP-R\\right)\\left(OP+R\\right)=OP^{2}-R^{2} \\quad\\checkmark$$\n\nFor an arbitrary line use the already proved theorems on intersecting chords (interior vertex) and on two secants (exterior vertex): in both cases the product is the same for all lines through $P$. So it equals the value computed for the line through the centre ✓ $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Радикальная ось",
      "en": "The radical axis"
     },
     "text": {
      "ru": "Геометрическое место точек, имеющих равные степени относительно двух неконцентрических окружностей, есть **прямая**, перпендикулярная линии центров. Она называется радикальной осью пары окружностей.",
      "en": "The locus of points having equal powers with respect to two non-concentric circles is a **line**, perpendicular to the line of centres. It is called the radical axis of the pair."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Введём координаты, направив ось $Ox$ по линии центров: пусть $O_1=(0,0)$, $O_2=(d,0)$ с $d\\ne0$, радиусы $R_1$ и $R_2$.\n\nУсловие равенства степеней для точки $\\left(x,y\\right)$: $$x^{2}+y^{2}-R_1^{2}=\\left(x-d\\right)^{2}+y^{2}-R_2^{2}.$$\n\nКвадраты $x^{2}$ и $y^{2}$ сокращаются — это и есть суть дела: $$0=-2dx+d^{2}-R_2^{2}+R_1^{2}\\quad\\Longrightarrow\\quad x=\\frac{d^{2}+R_1^{2}-R_2^{2}}{2d}.$$\n\nПолучилось уравнение вертикальной прямой, то есть прямой, перпендикулярной линии центров ✓ $\\blacksquare$\n\n**Следствие (радикальный центр).** Для трёх попарно неконцентрических окружностей три радикальные оси либо параллельны, либо пересекаются в одной точке: если точка лежит на двух из них, её степени относительно всех трёх окружностей равны, значит она лежит и на третьей.",
      "en": "Set up coordinates with $Ox$ along the line of centres: $O_1=(0,0)$, $O_2=(d,0)$ with $d\\ne0$, radii $R_1$ and $R_2$.\n\nEqual powers at $\\left(x,y\\right)$ means $$x^{2}+y^{2}-R_1^{2}=\\left(x-d\\right)^{2}+y^{2}-R_2^{2}.$$\n\nThe squares $x^{2}$ and $y^{2}$ cancel — that is the whole point: $$x=\\frac{d^{2}+R_1^{2}-R_2^{2}}{2d}.$$\n\nThis is the equation of a vertical line, i.e. one perpendicular to the line of centres ✓ $\\blacksquare$\n\n**Corollary (the radical centre).** For three pairwise non-concentric circles the three radical axes are either parallel or concurrent: a point on two of them has equal powers with respect to all three circles, hence lies on the third as well."
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Если окружности пересекаются, радикальная ось — это прямая, содержащая их общую хорду (в точках пересечения обе степени равны нулю). Если касаются — общая касательная в точке касания. Приём «радикальная ось» решает задачи вида «докажите, что три прямые пересекаются в одной точке» в одну строку.",
      "en": "If the circles intersect, the radical axis is the line of their common chord (at the intersection points both powers vanish). If they are tangent, it is the common tangent at the point of contact. The radical-axis argument settles \"prove these three lines concur\" problems in a single line."
     }
    },
    {
     "t": "thm",
     "name": {
      "ru": "Окружность девяти точек",
      "en": "The nine-point circle"
     },
     "text": {
      "ru": "В любом треугольнике одна окружность проходит через девять точек: три середины сторон, три основания высот и три середины отрезков от вершин до ортоцентра. Её радиус равен $\\dfrac{R}{2}$, а центр — середина отрезка $OH$.",
      "en": "In every triangle one circle passes through nine points: the three midpoints of the sides, the three feet of the altitudes and the three midpoints of the segments from the vertices to the orthocentre. Its radius is $\\dfrac{R}{2}$ and its centre is the midpoint of $OH$."
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Обозначим через $M_a,M_b,M_c$ середины сторон, через $H_a,H_b,H_c$ основания высот, через $N_a,N_b,N_c$ середины отрезков $AH$, $BH$, $CH$.\n\n**Шаг 1.** Отрезок $M_bM_c$ — средняя линия треугольника $ABC$, значит $M_bM_c\\parallel BC$. Отрезок $N_bN_c$ — средняя линия треугольника $HBC$, значит тоже параллелен $BC$ и равен ему по длине в том же отношении: $M_bM_c=N_bN_c=\\tfrac12 BC$. Следовательно $M_bM_cN_bN_c$ — параллелограмм.\n\n**Шаг 2.** Кроме того, $M_bN_b$ — средняя линия, параллельная $AH$, а $AH\\perp BC$. Значит соседние стороны нашего параллелограмма перпендикулярны — это **прямоугольник**. Его вершины лежат на окружности с диаметром $M_bN_b$.\n\n**Шаг 3.** Такое же рассуждение с другой парой индексов даёт прямоугольник $M_aM_cN_aN_c$, вписанный в окружность с диаметром $M_aN_a$. Две окружности имеют общие точки $M_c$ и $N_c$ и общий центр — середину каждого из диаметров $M_bN_b$ и $M_aN_a$; значит это одна и та же окружность, и на ней лежат все шесть точек $M_a,M_b,M_c,N_a,N_b,N_c$.\n\n**Шаг 4.** Наконец, $\\angle M_aH_aN_a=90^{\\circ}$, поскольку $H_a$ — основание высоты, а $M_aN_a$ — диаметр этой окружности. Точка, из которой диаметр виден под прямым углом, лежит на окружности ✓ Аналогично для $H_b$ и $H_c$ $\\blacksquare$\n\nРадиус равен половине $R$, потому что треугольник середин сторон подобен исходному с коэффициентом $\\tfrac12$.",
      "en": "Write $M_a,M_b,M_c$ for the midpoints of the sides, $H_a,H_b,H_c$ for the feet of the altitudes, and $N_a,N_b,N_c$ for the midpoints of $AH$, $BH$, $CH$.\n\n**Step 1.** $M_bM_c$ is a midline of $ABC$, so $M_bM_c\\parallel BC$ with length $\\tfrac12 BC$. $N_bN_c$ is a midline of $HBC$, so it too is parallel to $BC$ with length $\\tfrac12 BC$. Hence $M_bM_cN_bN_c$ is a parallelogram.\n\n**Step 2.** Moreover $M_bN_b\\parallel AH$ and $AH\\perp BC$, so adjacent sides of the parallelogram are perpendicular: it is a **rectangle**, and its vertices lie on the circle with diameter $M_bN_b$.\n\n**Step 3.** The same argument with another pair of indices gives the rectangle $M_aM_cN_aN_c$ inscribed in the circle with diameter $M_aN_a$. The two circles share the points $M_c$ and $N_c$ and have the same centre — the midpoint of each of the diameters $M_bN_b$ and $M_aN_a$ — so they are one circle, carrying all six points $M_a,M_b,M_c,N_a,N_b,N_c$.\n\n**Step 4.** Finally $\\angle M_aH_aN_a=90^{\\circ}$, because $H_a$ is the foot of an altitude and $M_aN_a$ is a diameter of that circle. A point seeing a diameter at a right angle lies on the circle ✓ Similarly for $H_b$ and $H_c$ $\\blacksquare$\n\nThe radius is half of $R$ because the medial triangle is similar to the original with ratio $\\tfrac12$."
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
    "ru": "Вписанный угол опирается на дугу в $70^\\circ$. Чему равен этот угол? А если вписанный угол равен $35^\\circ$, какова дуга?",
    "en": "An inscribed angle subtends an arc of $70^\\circ$. How large is the angle? And if an inscribed angle is $35^\\circ$, how large is its arc?"
   },
   "hint": {
    "ru": "Вписанный угол — половина дуги.",
    "en": "An inscribed angle is half its arc."
   },
   "sol": {
    "ru": "Вписанный угол равен половине дуги, на которую он опирается.\n\nЕсли дуга равна $70^\\circ$, то угол равен $35^\\circ$.\n\nЕсли угол равен $35^\\circ$, то дуга равна $70^\\circ$.\n\n**Ответ:** $35^\\circ$ и $70^\\circ$ соответственно.",
    "en": "An inscribed angle is half the arc it subtends.\n\nIf the arc is $70^\\circ$ the angle is $35^\\circ$.\n\nIf the angle is $35^\\circ$ the arc is $70^\\circ$.\n\n**Answer:** $35^\\circ$ and $70^\\circ$ respectively."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Четырёхугольник $ABCD$ вписан в окружность, причём $\\angle A=70^\\circ$ и $\\angle B=95^\\circ$. Найдите $\\angle C$ и $\\angle D$.",
    "en": "A quadrilateral $ABCD$ is inscribed in a circle with $\\angle A=70^\\circ$ and $\\angle B=95^\\circ$. Find $\\angle C$ and $\\angle D$."
   },
   "hint": {
    "ru": "Противоположные углы дают $180^\\circ$.",
    "en": "Opposite angles add to $180^\\circ$."
   },
   "sol": {
    "ru": "В любом вписанном четырёхугольнике суммы противоположных углов равны $180^\\circ$: $$\\angle C=180^\\circ-\\angle A=180^\\circ-70^\\circ=110^\\circ,$$ $$\\angle D=180^\\circ-\\angle B=180^\\circ-95^\\circ=85^\\circ .$$\n\n**Проверка:** сумма всех углов $70+95+110+85=360^\\circ$ ✓ **Ответ:** $\\angle C=110^\\circ$, $\\angle D=85^\\circ$.",
    "en": "In any cyclic quadrilateral opposite angles add to $180^\\circ$: $$\\angle C=180^\\circ-\\angle A=180^\\circ-70^\\circ=110^\\circ,$$ $$\\angle D=180^\\circ-\\angle B=180^\\circ-95^\\circ=85^\\circ .$$\n\n**Check:** all four angles add to $70+95+110+85=360^\\circ$ ✓ **Answer:** $\\angle C=110^\\circ$, $\\angle D=85^\\circ$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Хорды $AB$ и $CD$ пересекаются в точке $P$. Известно, что $AP=9$, $PB=4$ и $CP=PD$. Найдите длину хорды $CD$.",
    "en": "Chords $AB$ and $CD$ meet at $P$ with $AP=9$, $PB=4$ and $CP=PD$. Find the length of the chord $CD$."
   },
   "hint": {
    "ru": "$PC\\cdot PD=PA\\cdot PB$, а $PC=PD$.",
    "en": "$PC\\cdot PD=PA\\cdot PB$, and $PC=PD$."
   },
   "sol": {
    "ru": "По теореме о пересекающихся хордах $$PC\\cdot PD=PA\\cdot PB=9\\cdot4=36 .$$ Так как $PC=PD$, получаем $PC^{2}=36$, откуда $PC=PD=6$.\n\nЗначит $CD=6+6=12$.\n\n**Ответ:** $CD=12$. *Замечание:* точка $P$ оказалась серединой хорды $CD$, а найденное значение $6$ — это среднее геометрическое чисел $9$ и $4$.",
    "en": "The intersecting chords theorem gives $$PC\\cdot PD=PA\\cdot PB=9\\cdot4=36 .$$ Since $PC=PD$ we get $PC^{2}=36$, so $PC=PD=6$.\n\nHence $CD=6+6=12$.\n\n**Answer:** $CD=12$. *Remark:* $P$ turned out to be the midpoint of $CD$, and the value $6$ is the geometric mean of $9$ and $4$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Катеты прямоугольного треугольника равны $8$ и $15$. Найдите радиусы вписанной и описанной окружностей.",
    "en": "The legs of a right triangle are $8$ and $15$. Find the inradius and the circumradius."
   },
   "hint": {
    "ru": "$R=\\dfrac c2$ и $r=\\dfrac{a+b-c}{2}$.",
    "en": "$R=\\dfrac c2$ and $r=\\dfrac{a+b-c}{2}$."
   },
   "sol": {
    "ru": "Гипотенуза равна $$c=\\sqrt{8^{2}+15^{2}}=\\sqrt{64+225}=\\sqrt{289}=17 .$$\n\n**Описанная окружность.** Её центр — середина гипотенузы, поэтому $$R=\\frac{c}{2}=8{,}5 .$$\n\n**Вписанная окружность.** По формуле для прямоугольного треугольника $$r=\\frac{a+b-c}{2}=\\frac{8+15-17}{2}=\\frac{6}{2}=3 .$$\n\n**Проверка через $S=pr$:** $S=\\tfrac{8\\cdot15}{2}=60$, $p=\\tfrac{8+15+17}{2}=20$, и $\\tfrac{S}{p}=\\tfrac{60}{20}=3$ ✓",
    "en": "The hypotenuse is $$c=\\sqrt{8^{2}+15^{2}}=\\sqrt{64+225}=\\sqrt{289}=17 .$$\n\n**Circumcircle.** Its centre is the midpoint of the hypotenuse, so $$R=\\frac{c}{2}=8.5 .$$\n\n**Incircle.** The right-triangle formula gives $$r=\\frac{a+b-c}{2}=\\frac{8+15-17}{2}=\\frac{6}{2}=3 .$$\n\n**Check via $S=pr$:** $S=\\tfrac{8\\cdot15}{2}=60$, $p=\\tfrac{8+15+17}{2}=20$, and $\\tfrac{S}{p}=\\tfrac{60}{20}=3$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "Из точки $P$, удалённой от центра окружности на $13$, проведена касательная длины $12$. Найдите радиус окружности.",
    "en": "From a point $P$ at distance $13$ from the centre of a circle, a tangent of length $12$ is drawn. Find the radius."
   },
   "hint": {
    "ru": "Радиус перпендикулярен касательной в точке касания.",
    "en": "The radius is perpendicular to the tangent at the point of contact."
   },
   "sol": {
    "ru": "Пусть $T$ — точка касания. Радиус $OT$ перпендикулярен касательной, поэтому треугольник $OTP$ прямоугольный с прямым углом при $T$.\n\nВ нём гипотенуза $OP=13$, катет $PT=12$, значит $$R=OT=\\sqrt{13^{2}-12^{2}}=\\sqrt{169-144}=\\sqrt{25}=5 .$$\n\n**Ответ:** $R=5$. *Проверка через степень точки:* $PT^{2}=OP^{2}-R^{2}$ даёт $144=169-25$ ✓",
    "en": "Let $T$ be the point of contact. The radius $OT$ is perpendicular to the tangent, so the triangle $OTP$ is right-angled at $T$.\n\nIts hypotenuse is $OP=13$ and one leg is $PT=12$, so $$R=OT=\\sqrt{13^{2}-12^{2}}=\\sqrt{169-144}=\\sqrt{25}=5 .$$\n\n**Answer:** $R=5$. *Check via the power of a point:* $PT^{2}=OP^{2}-R^{2}$ gives $144=169-25$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 1,
   "q": {
    "ru": "В окружности проведён диаметр $BC$ и отмечена точка $A$ на окружности так, что $\\angle ABC=25^\\circ$. Найдите $\\angle ACB$ и дугу $AC$.",
    "en": "A circle has a diameter $BC$, and a point $A$ on the circle satisfies $\\angle ABC=25^\\circ$. Find $\\angle ACB$ and the arc $AC$."
   },
   "hint": {
    "ru": "Угол, опирающийся на диаметр, прямой.",
    "en": "An angle subtending a diameter is right."
   },
   "sol": {
    "ru": "Угол $\\angle BAC$ опирается на диаметр, поэтому равен $90^\\circ$.\n\nВ треугольнике $ABC$ сумма углов равна $180^\\circ$, значит $$\\angle ACB=180^\\circ-90^\\circ-25^\\circ=65^\\circ .$$\n\nУгол $\\angle ABC=25^\\circ$ — вписанный и опирается на дугу $AC$, поэтому эта дуга равна $2\\cdot25^\\circ=50^\\circ$.\n\n**Ответ:** $\\angle ACB=65^\\circ$, дуга $AC$ равна $50^\\circ$.",
    "en": "The angle $\\angle BAC$ subtends a diameter, hence equals $90^\\circ$.\n\nThe angle sum of the triangle $ABC$ gives $$\\angle ACB=180^\\circ-90^\\circ-25^\\circ=65^\\circ .$$\n\nThe angle $\\angle ABC=25^\\circ$ is inscribed on the arc $AC$, so that arc is $2\\cdot25^\\circ=50^\\circ$.\n\n**Answer:** $\\angle ACB=65^\\circ$, and the arc $AC$ is $50^\\circ$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Две окружности радиусов $r_1$ и $r_2$ касаются друг друга внешним образом. Найдите длину отрезка их общей внешней касательной между точками касания.",
    "en": "Two circles of radii $r_1$ and $r_2$ touch each other externally. Find the length of the segment of their common external tangent between the points of contact."
   },
   "hint": {
    "ru": "Опустите перпендикуляр из меньшего центра на радиус большего.",
    "en": "Drop a perpendicular from the smaller centre onto the radius of the larger."
   },
   "sol": {
    "ru": "Пусть $O_1$ и $O_2$ — центры, а $A$ и $B$ — точки касания общей внешней касательной. Радиусы $O_1A$ и $O_2B$ перпендикулярны этой касательной, значит параллельны друг другу, и $O_1ABO_2$ — прямоугольная трапеция.\n\nОпустим из центра $O_2$ перпендикуляр $O_2K$ на прямую $O_1A$. Тогда $ABO_2K$ — прямоугольник, поэтому $$KA=r_2,\\qquad O_2K=AB .$$\n\nВ прямоугольном треугольнике $O_1KO_2$: $$O_1K=r_1-r_2,\\qquad O_1O_2=r_1+r_2$$ (окружности касаются внешне, значит расстояние между центрами равно сумме радиусов).\n\nПо теореме Пифагора $$AB^{2}=O_1O_2^{2}-O_1K^{2}=\\left(r_1+r_2\\right)^{2}-\\left(r_1-r_2\\right)^{2}=4r_1r_2 .$$\n\n**Ответ:** $AB=2\\sqrt{r_1r_2}$.\n\n*Пример.* Для окружностей радиусов $1$ и $4$ отрезок равен $2\\sqrt4=4$.",
    "en": "Let $O_1$ and $O_2$ be the centres and $A$, $B$ the points of contact of the common external tangent. The radii $O_1A$ and $O_2B$ are perpendicular to the tangent, hence parallel to each other, so $O_1ABO_2$ is a right trapezium.\n\nDrop a perpendicular $O_2K$ from $O_2$ onto the line $O_1A$. Then $ABO_2K$ is a rectangle, so $$KA=r_2,\\qquad O_2K=AB .$$\n\nIn the right triangle $O_1KO_2$, $$O_1K=r_1-r_2,\\qquad O_1O_2=r_1+r_2$$ (touching externally means the centres are $r_1+r_2$ apart).\n\nPythagoras gives $$AB^{2}=O_1O_2^{2}-O_1K^{2}=\\left(r_1+r_2\\right)^{2}-\\left(r_1-r_2\\right)^{2}=4r_1r_2 .$$\n\n**Answer:** $AB=2\\sqrt{r_1r_2}$.\n\n*Example.* For radii $1$ and $4$ the segment is $2\\sqrt4=4$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что если две окружности пересекаются, то линия их центров перпендикулярна общей хорде и делит её пополам.",
    "en": "Prove that if two circles intersect, the line of their centres is perpendicular to the common chord and bisects it."
   },
   "hint": {
    "ru": "Обе точки пересечения равноудалены от каждого центра.",
    "en": "Both intersection points are equidistant from each centre."
   },
   "sol": {
    "ru": "Пусть окружности с центрами $O_1$ и $O_2$ пересекаются в точках $A$ и $B$.\n\n**Шаг 1.** Точка $O_1$ равноудалена от $A$ и $B$: $O_1A=O_1B=r_1$ (оба отрезка — радиусы первой окружности). Значит $O_1$ лежит на серединном перпендикуляре к отрезку $AB$.\n\n**Шаг 2.** Точно так же $O_2A=O_2B=r_2$, поэтому и $O_2$ лежит на серединном перпендикуляре к $AB$.\n\n**Шаг 3.** Через две различные точки проходит ровно одна прямая, значит прямая $O_1O_2$ **совпадает** с серединным перпендикуляром к $AB$.\n\nА серединный перпендикуляр по определению перпендикулярен отрезку и проходит через его середину. $\\blacksquare$\n\n*Замечание.* Этот же довод показывает, что вся картинка симметрична относительно прямой $O_1O_2$.",
    "en": "Let circles with centres $O_1$ and $O_2$ meet at $A$ and $B$.\n\n**Step 1.** The point $O_1$ is equidistant from $A$ and $B$: $O_1A=O_1B=r_1$ (both are radii of the first circle). So $O_1$ lies on the perpendicular bisector of $AB$.\n\n**Step 2.** Likewise $O_2A=O_2B=r_2$, so $O_2$ lies on that perpendicular bisector too.\n\n**Step 3.** Exactly one line passes through two distinct points, so the line $O_1O_2$ **is** the perpendicular bisector of $AB$.\n\nAnd a perpendicular bisector is by definition perpendicular to the segment and passes through its midpoint. $\\blacksquare$\n\n*Remark.* The same argument shows the whole picture is symmetric about the line $O_1O_2$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "В треугольнике $ABC$ проведены высоты $BH_1$ и $CH_2$. Докажите, что точки $B$, $C$, $H_1$, $H_2$ лежат на одной окружности, и что $\\angle AH_2H_1=\\angle ACB$.",
    "en": "A triangle $ABC$ has altitudes $BH_1$ and $CH_2$. Prove that $B$, $C$, $H_1$, $H_2$ lie on one circle and that $\\angle AH_2H_1=\\angle ACB$."
   },
   "hint": {
    "ru": "Отрезок $BC$ виден из точек $H_1$ и $H_2$ под прямым углом.",
    "en": "The segment $BC$ is seen from $H_1$ and from $H_2$ at a right angle."
   },
   "sol": {
    "ru": "**Окружность.** Высота $BH_1$ перпендикулярна стороне $AC$, поэтому $\\angle BH_1C=90^\\circ$. Высота $CH_2$ перпендикулярна $AB$, поэтому $\\angle BH_2C=90^\\circ$.\n\nТаким образом, отрезок $BC$ виден из точек $H_1$ и $H_2$ под прямым углом. Значит обе точки лежат на окружности с диаметром $BC$ — вместе с $B$ и $C$. $\\square$\n\n**Равенство углов.** Четырёхугольник $BH_2H_1C$ вписан в эту окружность, поэтому его противоположные углы дают $180^\\circ$: $$\\angle BH_2H_1+\\angle H_1CB=180^\\circ .$$ Но угол $\\angle AH_2H_1$ смежный с $\\angle BH_2H_1$ (точки $A$, $H_2$, $B$ лежат на одной прямой), поэтому $$\\angle AH_2H_1=180^\\circ-\\angle BH_2H_1=\\angle H_1CB=\\angle ACB . \\qquad\\blacksquare$$\n\n*Замечание.* Отсюда следует, что треугольник $AH_2H_1$ подобен треугольнику $ACB$ — это ключевой факт в задачах об ортоцентрическом треугольнике.",
    "en": "**The circle.** The altitude $BH_1$ is perpendicular to $AC$, so $\\angle BH_1C=90^\\circ$. The altitude $CH_2$ is perpendicular to $AB$, so $\\angle BH_2C=90^\\circ$.\n\nThus the segment $BC$ is seen at a right angle from both $H_1$ and $H_2$, so both lie on the circle with diameter $BC$ — together with $B$ and $C$. $\\square$\n\n**The equal angles.** The quadrilateral $BH_2H_1C$ is inscribed in that circle, so its opposite angles add to $180^\\circ$: $$\\angle BH_2H_1+\\angle H_1CB=180^\\circ .$$ But $\\angle AH_2H_1$ is supplementary to $\\angle BH_2H_1$ (the points $A$, $H_2$, $B$ are collinear), so $$\\angle AH_2H_1=180^\\circ-\\angle BH_2H_1=\\angle H_1CB=\\angle ACB . \\qquad\\blacksquare$$\n\n*Remark.* It follows that the triangle $AH_2H_1$ is similar to $ACB$ — the key fact in problems about the orthic triangle."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Из внешней точки $P$ проведены касательная $PT$ и секущая через центр окружности, пересекающая её в точках $A$ и $B$. Известно, что $PA=4$ и $PB=9$. Найдите $PT$ и радиус окружности.",
    "en": "From an external point $P$ a tangent $PT$ and a secant through the centre are drawn, the secant meeting the circle at $A$ and $B$ with $PA=4$ and $PB=9$. Find $PT$ and the radius."
   },
   "hint": {
    "ru": "$PT^{2}=PA\\cdot PB$, а $AB$ — диаметр.",
    "en": "$PT^{2}=PA\\cdot PB$, and $AB$ is a diameter."
   },
   "sol": {
    "ru": "**Касательная.** По теореме о секущей и касательной $$PT^{2}=PA\\cdot PB=4\\cdot9=36\\quad\\Longrightarrow\\quad PT=6 .$$\n\n**Радиус.** Секущая проходит через центр, значит $AB$ — диаметр: $$AB=PB-PA=9-4=5\\quad\\Longrightarrow\\quad R=2{,}5 .$$\n\n**Проверка через степень точки.** Центр $O$ — середина $AB$, поэтому $$OP=PA+\\frac{AB}{2}=4+2{,}5=6{,}5,$$ и $$OP^{2}-R^{2}=6{,}5^{2}-2{,}5^{2}=42{,}25-6{,}25=36=PT^{2}\\ \\checkmark$$\n\n**Ответ:** $PT=6$, $R=2{,}5$.",
    "en": "**The tangent.** The secant–tangent theorem gives $$PT^{2}=PA\\cdot PB=4\\cdot9=36\\quad\\Longrightarrow\\quad PT=6 .$$\n\n**The radius.** The secant passes through the centre, so $AB$ is a diameter: $$AB=PB-PA=9-4=5\\quad\\Longrightarrow\\quad R=2.5 .$$\n\n**Check via the power of a point.** The centre $O$ is the midpoint of $AB$, so $$OP=PA+\\frac{AB}{2}=4+2.5=6.5,$$ and $$OP^{2}-R^{2}=6.5^{2}-2.5^{2}=42.25-6.25=36=PT^{2}\\ \\checkmark$$\n\n**Answer:** $PT=6$, $R=2.5$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "В окружность радиуса $R$ вписан треугольник со сторонами $13$, $14$, $15$. Найдите $R$ и радиус вписанной окружности $r$.",
    "en": "A triangle with sides $13$, $14$, $15$ is inscribed in a circle of radius $R$. Find $R$ and the inradius $r$."
   },
   "hint": {
    "ru": "$S=\\dfrac{abc}{4R}$ и $S=pr$.",
    "en": "$S=\\dfrac{abc}{4R}$ and $S=pr$."
   },
   "sol": {
    "ru": "Полупериметр $p=\\dfrac{13+14+15}{2}=21$, и по формуле Герона $$S=\\sqrt{21\\cdot8\\cdot7\\cdot6}=\\sqrt{7056}=84 .$$\n\n**Описанная окружность.** Из $S=\\dfrac{abc}{4R}$ получаем $$R=\\frac{abc}{4S}=\\frac{13\\cdot14\\cdot15}{4\\cdot84}=\\frac{2730}{336}=\\frac{65}{8}=8{,}125 .$$\n\n**Вписанная окружность.** Из $S=pr$ получаем $$r=\\frac{S}{p}=\\frac{84}{21}=4 .$$\n\n**Ответ:** $R=\\tfrac{65}{8}$ и $r=4$. *Замечание:* здесь $R>2r$, что согласуется с неравенством Эйлера $R\\ge2r$, верным для любого треугольника.",
    "en": "The semiperimeter is $p=\\dfrac{13+14+15}{2}=21$, and Heron’s formula gives $$S=\\sqrt{21\\cdot8\\cdot7\\cdot6}=\\sqrt{7056}=84 .$$\n\n**Circumradius.** From $S=\\dfrac{abc}{4R}$, $$R=\\frac{abc}{4S}=\\frac{13\\cdot14\\cdot15}{4\\cdot84}=\\frac{2730}{336}=\\frac{65}{8}=8.125 .$$\n\n**Inradius.** From $S=pr$, $$r=\\frac{S}{p}=\\frac{84}{21}=4 .$$\n\n**Answer:** $R=\\tfrac{65}{8}$ and $r=4$. *Remark:* here $R>2r$, in agreement with Euler’s inequality $R\\ge2r$, valid for every triangle."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что если в четырёхугольник можно вписать окружность, то суммы его противоположных сторон равны: $$AB+CD=BC+AD .$$",
    "en": "Prove that if a circle can be inscribed in a quadrilateral then its opposite sides have equal sums: $$AB+CD=BC+AD .$$"
   },
   "hint": {
    "ru": "Отрезки касательных из каждой вершины равны.",
    "en": "The two tangent segments from each vertex are equal."
   },
   "sol": {
    "ru": "Пусть вписанная окружность касается сторон $AB$, $BC$, $CD$, $DA$ в точках $K$, $L$, $M$, $N$.\n\nИз каждой вершины к окружности проведены два отрезка касательных, и они равны. Обозначим их: $$AK=AN=w,\\qquad BK=BL=x,\\qquad CL=CM=y,\\qquad DM=DN=z .$$\n\nТеперь выразим стороны: $$AB=w+x,\\quad BC=x+y,\\quad CD=y+z,\\quad DA=z+w .$$\n\nСкладываем противоположные: $$AB+CD=(w+x)+(y+z)=w+x+y+z,$$ $$BC+AD=(x+y)+(z+w)=w+x+y+z .$$ Обе суммы равны $w+x+y+z$. $\\blacksquare$\n\n*Замечание.* Верно и обратное (теорема Пито): если в выпуклом четырёхугольнике суммы противоположных сторон равны, то в него можно вписать окружность. Для параллелограмма условие даёт $2AB=2BC$, поэтому вписать окружность можно только в ромб.",
    "en": "Let the incircle touch $AB$, $BC$, $CD$, $DA$ at $K$, $L$, $M$, $N$.\n\nFrom each vertex two tangent segments are drawn, and they are equal. Write $$AK=AN=w,\\qquad BK=BL=x,\\qquad CL=CM=y,\\qquad DM=DN=z .$$\n\nThe sides are then $$AB=w+x,\\quad BC=x+y,\\quad CD=y+z,\\quad DA=z+w .$$\n\nAdding the opposite ones, $$AB+CD=(w+x)+(y+z)=w+x+y+z,$$ $$BC+AD=(x+y)+(z+w)=w+x+y+z ,$$ and both equal $w+x+y+z$. $\\blacksquare$\n\n*Remark.* The converse is also true (Pitot’s theorem): a convex quadrilateral whose opposite sides have equal sums has an incircle. For a parallelogram the condition reads $2AB=2BC$, so only a rhombus can have one."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Точка $M$ лежит на дуге $BC$ описанной окружности равностороннего треугольника $ABC$ (на дуге, не содержащей $A$). Докажите, что $MB+MC=MA$.",
    "en": "A point $M$ lies on the arc $BC$ of the circumcircle of an equilateral triangle $ABC$ (the arc not containing $A$). Prove that $MB+MC=MA$."
   },
   "hint": {
    "ru": "Отложите на отрезке $MA$ точку $K$ так, что $MK=MB$, и посмотрите на треугольник $MBK$.",
    "en": "Mark a point $K$ on $MA$ with $MK=MB$ and look at the triangle $MBK$."
   },
   "sol": {
    "ru": "**Построение.** На отрезке $MA$ отметим точку $K$ так, что $MK=MB$.\n\n**Шаг 1: треугольник $MBK$ равносторонний.** Угол $\\angle BMA$ — вписанный и опирается на дугу $AB$, на которую опирается и угол $\\angle BCA=60^\\circ$. Значит $\\angle BMK=\\angle BMA=60^\\circ$. Треугольник $MBK$ равнобедренный ($MK=MB$) с углом $60^\\circ$ при вершине, следовательно он равносторонний, и $$BK=MB,\\qquad \\angle MBK=60^\\circ .$$\n\n**Шаг 2: два равных треугольника.** Сравним $\\triangle MBC$ и $\\triangle KBA$.\n\n$BM=BK$ — из шага 1;\n$BC=BA$ — стороны равностороннего треугольника;\n$\\angle MBC=\\angle KBA$: действительно, $$\\angle MBC=\\angle MBK-\\angle CBK=60^\\circ-\\angle CBK,\\qquad \\angle KBA=\\angle ABC-\\angle CBK=60^\\circ-\\angle CBK .$$\n\nПо признаку **СУС** треугольники равны, значит $$MC=KA .$$\n\n**Шаг 3: складываем.** $$MA=MK+KA=MB+MC . \\qquad\\blacksquare$$\n\n*Замечание.* Это частный случай теоремы Птолемея для вписанного четырёхугольника $ABMC$: $$MA\\cdot BC=MB\\cdot AC+MC\\cdot AB,$$ и после сокращения на общую сторону получается то же равенство.",
    "en": "**Construction.** On the segment $MA$ mark the point $K$ with $MK=MB$.\n\n**Step 1: the triangle $MBK$ is equilateral.** The angle $\\angle BMA$ is inscribed on the arc $AB$, the same arc as $\\angle BCA=60^\\circ$. So $\\angle BMK=\\angle BMA=60^\\circ$. The triangle $MBK$ is isosceles ($MK=MB$) with a $60^\\circ$ apex angle, hence equilateral, and $$BK=MB,\\qquad \\angle MBK=60^\\circ .$$\n\n**Step 2: two congruent triangles.** Compare $\\triangle MBC$ and $\\triangle KBA$.\n\n$BM=BK$ — from Step 1;\n$BC=BA$ — sides of the equilateral triangle;\n$\\angle MBC=\\angle KBA$: indeed $$\\angle MBC=\\angle MBK-\\angle CBK=60^\\circ-\\angle CBK,\\qquad \\angle KBA=\\angle ABC-\\angle CBK=60^\\circ-\\angle CBK .$$\n\nBy **SAS** they are congruent, so $$MC=KA .$$\n\n**Step 3: add up.** $$MA=MK+KA=MB+MC . \\qquad\\blacksquare$$\n\n*Remark.* This is a special case of Ptolemy’s theorem for the cyclic quadrilateral $ABMC$: $$MA\\cdot BC=MB\\cdot AC+MC\\cdot AB,$$ and cancelling the common side gives the same equality."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Окружность вписана в треугольник со сторонами $a=13$, $b=14$, $c=15$ и касается стороны $a$ в точке $X$. Найдите расстояния от точки $X$ до концов этой стороны.",
    "en": "The incircle of a triangle with sides $a=13$, $b=14$, $c=15$ touches the side $a$ at $X$. Find the distances from $X$ to the ends of that side."
   },
   "hint": {
    "ru": "Отрезок от вершины до точки касания равен $p$ минус противолежащая сторона.",
    "en": "The tangent length from a vertex equals $p$ minus the opposite side."
   },
   "sol": {
    "ru": "Обозначим стороны так: $a=BC=13$, $b=CA=14$, $c=AB=15$; тогда $$p=\\frac{13+14+15}{2}=21 .$$\n\nПо доказанной формуле длина отрезка от вершины до точки касания равна $p$ минус противолежащая сторона: $$BX=p-b=21-14=7,\\qquad CX=p-c=21-15=6 .$$\n\n**Проверка:** $BX+CX=7+6=13=a$ ✓\n\n**Ответ:** $BX=7$ и $CX=6$.",
    "en": "Write $a=BC=13$, $b=CA=14$, $c=AB=15$; then $$p=\\frac{13+14+15}{2}=21 .$$\n\nBy the formula proved above, the tangent length from a vertex is $p$ minus the opposite side: $$BX=p-b=21-14=7,\\qquad CX=p-c=21-15=6 .$$\n\n**Check:** $BX+CX=7+6=13=a$ ✓\n\n**Answer:** $BX=7$ and $CX=6$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Две окружности пересекаются в точках $A$ и $B$. Через точку $A$ проведена прямая, вторично пересекающая окружности в точках $C$ и $D$. Докажите, что величина угла $\\angle CBD$ не зависит от выбора этой прямой.",
    "en": "Two circles meet at $A$ and $B$. A line through $A$ meets the circles again at $C$ and $D$. Prove that the angle $\\angle CBD$ does not depend on the choice of that line."
   },
   "hint": {
    "ru": "Посчитайте углы $\\angle BCA$ и $\\angle BDA$ как вписанные.",
    "en": "Compute $\\angle BCA$ and $\\angle BDA$ as inscribed angles."
   },
   "sol": {
    "ru": "Пусть $C$ лежит на первой окружности, $D$ — на второй, и точка $A$ находится между ними на секущей.\n\n**Шаг 1.** В первой окружности угол $\\angle BCA=\\angle BCD$ — вписанный и опирается на хорду $AB$. Все такие углы, вершины которых лежат на одной дуге, равны; обозначим эту величину через $\\beta_1$. Она определяется только самой хордой $AB$ и первой окружностью, а не положением точки $C$.\n\n**Шаг 2.** Точно так же во второй окружности $\\angle BDA=\\angle BDC=\\beta_2$ — постоянная величина.\n\n**Шаг 3.** В треугольнике $BCD$ сумма углов равна $180^\\circ$, поэтому $$\\angle CBD=180^\\circ-\\beta_1-\\beta_2 .$$ Правая часть не зависит от секущей. $\\blacksquare$\n\n*Следствие.* Все получающиеся треугольники $BCD$ подобны между собой: у них все три угла постоянны.",
    "en": "Let $C$ be on the first circle and $D$ on the second, with $A$ between them on the line.\n\n**Step 1.** In the first circle the angle $\\angle BCA=\\angle BCD$ is inscribed on the chord $AB$. All such angles with vertex on one arc are equal; call the value $\\beta_1$. It depends only on the chord $AB$ and the first circle, not on where $C$ is.\n\n**Step 2.** Likewise in the second circle $\\angle BDA=\\angle BDC=\\beta_2$ is constant.\n\n**Step 3.** The angle sum of the triangle $BCD$ gives $$\\angle CBD=180^\\circ-\\beta_1-\\beta_2 ,$$ and the right side does not depend on the line. $\\blacksquare$\n\n*Corollary.* All the resulting triangles $BCD$ are similar to one another: all three of their angles are fixed."
   }
  },
  {
   "src": "Теорема Птолемея / Ptolemy, classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите теорему Птолемея: для вписанного в окружность четырёхугольника $ABCD$ $$AC\\cdot BD=AB\\cdot CD+BC\\cdot AD .$$",
    "en": "Prove Ptolemy’s theorem: for a cyclic quadrilateral $ABCD$, $$AC\\cdot BD=AB\\cdot CD+BC\\cdot AD .$$"
   },
   "hint": {
    "ru": "Отметьте на диагонали $AC$ точку $K$ так, что $\\angle ABK=\\angle CBD$.",
    "en": "Mark on the diagonal $AC$ the point $K$ with $\\angle ABK=\\angle CBD$."
   },
   "sol": {
    "ru": "**Построение.** На диагонали $AC$ отметим точку $K$ так, что $$\\angle ABK=\\angle CBD .$$ (Такая точка есть: луч из $B$ под нужным углом пересекает отрезок $AC$, потому что этот угол меньше $\\angle ABC$.)\n\n**Первая пара подобных треугольников.** Сравним $\\triangle ABK$ и $\\triangle DBC$:\n\n$\\angle ABK=\\angle DBC$ — по построению;\n$\\angle BAK=\\angle BAC=\\angle BDC$ — вписанные углы на одну дугу $BC$.\n\nЗначит треугольники подобны по двум углам, и $$\\frac{AK}{DC}=\\frac{AB}{DB}\\quad\\Longrightarrow\\quad AK\\cdot DB=AB\\cdot DC . \\tag{1}$$\n\n**Вторая пара подобных треугольников.** Заметим, что $$\\angle KBC=\\angle ABC-\\angle ABK=\\angle ABC-\\angle DBC=\\angle ABD .$$ Сравним $\\triangle KBC$ и $\\triangle ABD$:\n\n$\\angle KBC=\\angle ABD$ — только что показано;\n$\\angle BCK=\\angle BCA=\\angle BDA$ — вписанные углы на одну дугу $AB$.\n\nЗначит эти треугольники тоже подобны, и $$\\frac{KC}{AD}=\\frac{BC}{BD}\\quad\\Longrightarrow\\quad KC\\cdot BD=BC\\cdot AD . \\tag{2}$$\n\n**Складываем.** Точка $K$ лежит на отрезке $AC$, поэтому $AK+KC=AC$. Сложив $(1)$ и $(2)$: $$\\left(AK+KC\\right)\\cdot BD=AB\\cdot DC+BC\\cdot AD,$$ то есть $$AC\\cdot BD=AB\\cdot CD+BC\\cdot AD . \\qquad\\blacksquare$$\n\n*Проверка на прямоугольнике.* Для прямоугольника со сторонами $m$ и $n$ обе диагонали равны $\\sqrt{m^{2}+n^{2}}$, и теорема даёт $m^{2}+n^{2}=m\\cdot m+n\\cdot n$ — тождество, то есть теорема Пифагора.",
    "en": "**Construction.** On the diagonal $AC$ mark the point $K$ with $$\\angle ABK=\\angle CBD .$$ (Such a point exists: the ray from $B$ at that angle meets the segment $AC$, since the angle is smaller than $\\angle ABC$.)\n\n**First pair of similar triangles.** Compare $\\triangle ABK$ and $\\triangle DBC$:\n\n$\\angle ABK=\\angle DBC$ — by construction;\n$\\angle BAK=\\angle BAC=\\angle BDC$ — inscribed angles on the arc $BC$.\n\nSo they are similar, and $$\\frac{AK}{DC}=\\frac{AB}{DB}\\quad\\Longrightarrow\\quad AK\\cdot DB=AB\\cdot DC . \\tag{1}$$\n\n**Second pair.** Note that $$\\angle KBC=\\angle ABC-\\angle ABK=\\angle ABC-\\angle DBC=\\angle ABD .$$ Compare $\\triangle KBC$ and $\\triangle ABD$:\n\n$\\angle KBC=\\angle ABD$ — just shown;\n$\\angle BCK=\\angle BCA=\\angle BDA$ — inscribed angles on the arc $AB$.\n\nThese are similar too, giving $$\\frac{KC}{AD}=\\frac{BC}{BD}\\quad\\Longrightarrow\\quad KC\\cdot BD=BC\\cdot AD . \\tag{2}$$\n\n**Add.** The point $K$ lies on $AC$, so $AK+KC=AC$. Adding $(1)$ and $(2)$, $$\\left(AK+KC\\right)\\cdot BD=AB\\cdot DC+BC\\cdot AD,$$ that is $$AC\\cdot BD=AB\\cdot CD+BC\\cdot AD . \\qquad\\blacksquare$$\n\n*Check on a rectangle.* For a rectangle with sides $m$ and $n$ both diagonals are $\\sqrt{m^{2}+n^{2}}$, and the theorem reads $m^{2}+n^{2}=m\\cdot m+n\\cdot n$ — an identity, namely the Pythagorean theorem."
   }
  },
  {
   "src": "Лемма о трезубце / The trident lemma, classic",
   "lvl": 3,
   "q": {
    "ru": "Биссектриса угла $A$ треугольника $ABC$ вторично пересекает описанную окружность в точке $M$, а $I$ — центр вписанной окружности. Докажите, что $$MB=MC=MI .$$",
    "en": "The bisector of the angle $A$ of a triangle $ABC$ meets the circumcircle again at $M$, and $I$ is the incentre. Prove that $$MB=MC=MI .$$"
   },
   "hint": {
    "ru": "Посчитайте угол $\\angle MBI$ и угол $\\angle MIB$ — оба через половины углов $A$ и $B$.",
    "en": "Compute $\\angle MBI$ and $\\angle MIB$ — both come out as halves of $A$ and $B$."
   },
   "sol": {
    "ru": "Обозначим углы треугольника через $\\alpha$, $\\beta$, $\\gamma$.\n\n**Шаг 1: $MB=MC$.** Углы $\\angle BAM$ и $\\angle CAM$ равны (это половинки угла $A$), а вписанные углы измеряются половинами дуг, значит дуги $BM$ и $CM$ равны. Равным дугам отвечают равные хорды, поэтому $$MB=MC .$$ (Другими словами, $M$ — середина дуги $BC$.)\n\n**Шаг 2: считаем $\\angle MBI$.** Точка $I$ лежит на биссектрисе угла $B$, поэтому $\\angle IBC=\\tfrac\\beta2$. Далее, $$\\angle MBC=\\angle MAC=\\frac\\alpha2$$ — вписанные углы на одну дугу $MC$. Складывая, $$\\angle MBI=\\angle MBC+\\angle CBI=\\frac\\alpha2+\\frac\\beta2 .$$\n\n**Шаг 3: считаем $\\angle MIB$.** Угол $\\angle MIB$ — внешний угол треугольника $ABI$ при вершине $I$ (точки $A$, $I$, $M$ лежат на одной прямой), поэтому он равен сумме двух несмежных внутренних: $$\\angle MIB=\\angle IAB+\\angle IBA=\\frac\\alpha2+\\frac\\beta2 .$$\n\n**Шаг 4: вывод.** Углы $\\angle MBI$ и $\\angle MIB$ равны, значит треугольник $MBI$ равнобедренный с основанием $BI$, и $$MB=MI .$$\n\nВместе с шагом 1 получаем $MB=MC=MI$. $\\blacksquare$\n\n*Название* «лемма о трезубце» — от картинки: из точки $M$ выходят три равных отрезка $MB$, $MI$, $MC$. Лемма постоянно используется в задачах с вписанной окружностью.",
    "en": "Write $\\alpha$, $\\beta$, $\\gamma$ for the angles of the triangle.\n\n**Step 1: $MB=MC$.** The angles $\\angle BAM$ and $\\angle CAM$ are equal (halves of $A$), and inscribed angles measure half their arcs, so the arcs $BM$ and $CM$ are equal. Equal arcs carry equal chords, hence $$MB=MC .$$ (In other words $M$ is the midpoint of the arc $BC$.)\n\n**Step 2: compute $\\angle MBI$.** The point $I$ lies on the bisector of $B$, so $\\angle IBC=\\tfrac\\beta2$. Also $$\\angle MBC=\\angle MAC=\\frac\\alpha2$$ — inscribed angles on the arc $MC$. Adding, $$\\angle MBI=\\angle MBC+\\angle CBI=\\frac\\alpha2+\\frac\\beta2 .$$\n\n**Step 3: compute $\\angle MIB$.** The angle $\\angle MIB$ is the exterior angle of the triangle $ABI$ at $I$ (the points $A$, $I$, $M$ are collinear), so it equals the sum of the two non-adjacent interior angles: $$\\angle MIB=\\angle IAB+\\angle IBA=\\frac\\alpha2+\\frac\\beta2 .$$\n\n**Step 4: conclude.** The angles $\\angle MBI$ and $\\angle MIB$ are equal, so the triangle $MBI$ is isosceles on the base $BI$, giving $$MB=MI .$$\n\nTogether with Step 1 this is $MB=MC=MI$. $\\blacksquare$\n\n*The name* \"trident lemma\" comes from the picture: three equal segments $MB$, $MI$, $MC$ leave the point $M$. The lemma is used constantly in incircle problems."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Пусть $H$ — точка пересечения высот треугольника $ABC$. Докажите, что точка, симметричная $H$ относительно стороны $BC$, лежит на описанной окружности треугольника.",
    "en": "Let $H$ be the orthocentre of a triangle $ABC$. Prove that the reflection of $H$ in the side $BC$ lies on the circumcircle."
   },
   "hint": {
    "ru": "Сначала докажите, что $\\angle BHC=180^\\circ-\\angle A$.",
    "en": "First prove that $\\angle BHC=180^\\circ-\\angle A$."
   },
   "sol": {
    "ru": "Обозначим углы треугольника через $\\alpha$, $\\beta$, $\\gamma$.\n\n**Шаг 1: находим $\\angle BHC$.** Пусть высота из $B$ падает на $AC$, а высота из $C$ — на $AB$.\n\nВ прямоугольном треугольнике, образованном высотой из $B$ и стороной $BC$, угол при вершине $B$ равен $$\\angle HBC=90^\\circ-\\gamma$$ (в треугольнике с прямым углом на стороне $AC$ второй острый угол равен $\\gamma$). Симметрично $$\\angle HCB=90^\\circ-\\beta .$$\n\nВ треугольнике $BHC$ $$\\angle BHC=180^\\circ-\\left(90^\\circ-\\gamma\\right)-\\left(90^\\circ-\\beta\\right)=\\beta+\\gamma=180^\\circ-\\alpha .$$\n\n**Шаг 2: отражение.** Пусть $H^{\\prime}$ — точка, симметричная $H$ относительно прямой $BC$. Осевая симметрия сохраняет расстояния и углы, а точки $B$ и $C$ остаются на месте, поэтому треугольник $BH^{\\prime}C$ равен треугольнику $BHC$ и $$\\angle BH^{\\prime}C=\\angle BHC=180^\\circ-\\alpha .$$\n\n**Шаг 3: вписанный четырёхугольник.** Точки $A$ и $H^{\\prime}$ лежат по разные стороны от прямой $BC$ (высоты пересекаются внутри для остроугольного треугольника, и отражение уводит $H$ за сторону). В четырёхугольнике $ABH^{\\prime}C$ противоположные углы при вершинах $A$ и $H^{\\prime}$ дают $$\\alpha+\\left(180^\\circ-\\alpha\\right)=180^\\circ .$$\n\nПо критерию вписанности четырёхугольник $ABH^{\\prime}C$ вписан в окружность — а окружность, проходящая через $A$, $B$, $C$, единственна, и это описанная окружность треугольника. Значит $H^{\\prime}$ лежит на ней. $\\blacksquare$\n\n*Следствие.* Тем же приёмом доказывается, что точка, симметричная $H$ относительно **середины** стороны $BC$, — это точка, диаметрально противоположная вершине $A$.",
    "en": "Write $\\alpha$, $\\beta$, $\\gamma$ for the angles.\n\n**Step 1: compute $\\angle BHC$.** Let the altitude from $B$ meet $AC$ and the altitude from $C$ meet $AB$.\n\nIn the right triangle formed by the altitude from $B$ and the side $BC$, the angle at $B$ is $$\\angle HBC=90^\\circ-\\gamma$$ (in a triangle with the right angle on $AC$, the other acute angle is $\\gamma$). Symmetrically $$\\angle HCB=90^\\circ-\\beta .$$\n\nIn the triangle $BHC$, $$\\angle BHC=180^\\circ-\\left(90^\\circ-\\gamma\\right)-\\left(90^\\circ-\\beta\\right)=\\beta+\\gamma=180^\\circ-\\alpha .$$\n\n**Step 2: the reflection.** Let $H^{\\prime}$ be the reflection of $H$ in the line $BC$. A reflection preserves distances and angles and fixes $B$ and $C$, so the triangle $BH^{\\prime}C$ is congruent to $BHC$ and $$\\angle BH^{\\prime}C=\\angle BHC=180^\\circ-\\alpha .$$\n\n**Step 3: a cyclic quadrilateral.** The points $A$ and $H^{\\prime}$ lie on opposite sides of the line $BC$ (for an acute triangle the altitudes meet inside, and the reflection sends $H$ across the side). In the quadrilateral $ABH^{\\prime}C$ the opposite angles at $A$ and $H^{\\prime}$ add to $$\\alpha+\\left(180^\\circ-\\alpha\\right)=180^\\circ .$$\n\nBy the cyclic criterion $ABH^{\\prime}C$ is inscribed in a circle — and the circle through $A$, $B$, $C$ is unique, namely the circumcircle. So $H^{\\prime}$ lies on it. $\\blacksquare$\n\n*Corollary.* The same trick shows that the reflection of $H$ in the **midpoint** of $BC$ is the point diametrically opposite $A$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Пусть $O$ — центр описанной окружности треугольника $ABC$, $H$ — точка пересечения его высот, а $M$ — середина стороны $BC$. Докажите, что $$AH=2\\,OM .$$",
    "en": "Let $O$ be the circumcentre of a triangle $ABC$, $H$ its orthocentre and $M$ the midpoint of $BC$. Prove that $$AH=2\\,OM .$$"
   },
   "hint": {
    "ru": "Рассмотрите точку $A^{\\prime}$, диаметрально противоположную $A$, и докажите, что $BHCA^{\\prime}$ — параллелограмм.",
    "en": "Consider the antipode $A^{\\prime}$ of $A$ and show that $BHCA^{\\prime}$ is a parallelogram."
   },
   "sol": {
    "ru": "Пусть $A^{\\prime}$ — точка описанной окружности, диаметрально противоположная вершине $A$.\n\n**Шаг 1: $BH\\parallel A^{\\prime}C$.** Отрезок $BH$ лежит на высоте из вершины $B$, поэтому $BH\\perp AC$. С другой стороны, угол $\\angle ACA^{\\prime}$ опирается на диаметр $AA^{\\prime}$, значит равен $90^\\circ$, то есть $A^{\\prime}C\\perp AC$. Две прямые, перпендикулярные одной и той же прямой, параллельны: $$BH\\parallel A^{\\prime}C .$$\n\n**Шаг 2: $CH\\parallel A^{\\prime}B$.** Точно так же $CH\\perp AB$ и $A^{\\prime}B\\perp AB$ (угол $\\angle ABA^{\\prime}$ тоже опирается на диаметр), значит $$CH\\parallel A^{\\prime}B .$$\n\n**Шаг 3: параллелограмм.** В четырёхугольнике $BHCA^{\\prime}$ обе пары противоположных сторон параллельны, значит это параллелограмм. Его диагонали $BC$ и $HA^{\\prime}$ делятся точкой пересечения пополам. Но середина $BC$ — это точка $M$, следовательно $M$ — и середина отрезка $HA^{\\prime}$.\n\n**Шаг 4: средняя линия.** Рассмотрим треугольник $AHA^{\\prime}$. Точка $O$ — середина стороны $AA^{\\prime}$ (это центр окружности, а $AA^{\\prime}$ — диаметр), точка $M$ — середина стороны $HA^{\\prime}$ (шаг 3). Значит $OM$ — средняя линия этого треугольника, и $$OM=\\frac{AH}{2},\\qquad\\text{то есть}\\qquad AH=2\\,OM . \\qquad\\blacksquare$$\n\n*Попутно* мы получили, что $OM\\parallel AH$, а вместе с этим — известный факт: точки $O$, $G$ и $H$ лежат на одной прямой (прямой Эйлера), причём $OH=3\\,OG$.",
    "en": "Let $A^{\\prime}$ be the point of the circumcircle diametrically opposite $A$.\n\n**Step 1: $BH\\parallel A^{\\prime}C$.** The segment $BH$ lies on the altitude from $B$, so $BH\\perp AC$. On the other hand $\\angle ACA^{\\prime}$ subtends the diameter $AA^{\\prime}$ and hence is $90^\\circ$, so $A^{\\prime}C\\perp AC$. Two lines perpendicular to the same line are parallel: $$BH\\parallel A^{\\prime}C .$$\n\n**Step 2: $CH\\parallel A^{\\prime}B$.** Likewise $CH\\perp AB$ and $A^{\\prime}B\\perp AB$ ($\\angle ABA^{\\prime}$ also subtends the diameter), so $$CH\\parallel A^{\\prime}B .$$\n\n**Step 3: a parallelogram.** In the quadrilateral $BHCA^{\\prime}$ both pairs of opposite sides are parallel, so it is a parallelogram, and its diagonals $BC$ and $HA^{\\prime}$ bisect each other. The midpoint of $BC$ is $M$, so $M$ is also the midpoint of $HA^{\\prime}$.\n\n**Step 4: a midline.** Consider the triangle $AHA^{\\prime}$. The point $O$ is the midpoint of $AA^{\\prime}$ (it is the centre and $AA^{\\prime}$ a diameter), and $M$ is the midpoint of $HA^{\\prime}$ (Step 3). So $OM$ is a midline of that triangle and $$OM=\\frac{AH}{2},\\qquad\\text{that is}\\qquad AH=2\\,OM . \\qquad\\blacksquare$$\n\n*Along the way* we also got $OM\\parallel AH$, and with it the known fact that $O$, $G$ and $H$ are collinear (the Euler line), with $OH=3\\,OG$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Четырёхугольник $ABCD$ вписан в окружность, и его диагонали перпендикулярны. Докажите, что расстояние от центра окружности до стороны $AB$ равно половине противоположной стороны $CD$.",
    "en": "A cyclic quadrilateral $ABCD$ has perpendicular diagonals. Prove that the distance from the centre of the circle to the side $AB$ equals half the opposite side $CD$."
   },
   "hint": {
    "ru": "Расстояние от центра до хорды $AB$ равно $R\\cos$ вписанного угла... точнее: проведите серединный перпендикуляр к $AB$ и посчитайте дуги.",
    "en": "Drop the perpendicular from the centre to $AB$ and count arcs."
   },
   "sol": {
    "ru": "Пусть $O$ — центр окружности радиуса $R$, диагонали пересекаются в точке $P$, и $\\angle APB=90^\\circ$. Пусть $N$ — середина хорды $AB$; тогда $ON\\perp AB$, и $ON$ — искомое расстояние.\n\n**Шаг 1: дуги.** Обозначим дуги (в градусах) $$\\overset{\\frown}{AB}=2u,\\qquad \\overset{\\frown}{BC}=2v,\\qquad \\overset{\\frown}{CD}=2w,\\qquad \\overset{\\frown}{DA}=2t,$$ так что $u+v+w+t=180^\\circ$.\n\nУгол между пересекающимися хордами равен полусумме двух дуг, которые они высекают: $$\\angle APB=\\frac{\\overset{\\frown}{AB}+\\overset{\\frown}{CD}}{2}=u+w .$$ Условие перпендикулярности даёт $$u+w=90^\\circ .$$\n\n**Шаг 2: расстояние до хорды.** В прямоугольном треугольнике $ONA$ гипотенуза $OA=R$, а центральный угол $\\angle AON$ равен половине центрального угла $\\angle AOB=2u$, то есть $\\angle AON=u$. Значит $$ON=R\\cos u .$$\n\n**Шаг 3: длина хорды $CD$.** Хорда стягивает центральный угол $\\overset{\\frown}{CD}=2w$, поэтому $$CD=2R\\sin w .$$\n\n**Шаг 4: сравнение.** Из шага 1 $w=90^\\circ-u$, поэтому $\\sin w=\\cos u$ и $$\\frac{CD}{2}=R\\sin w=R\\cos u=ON . \\qquad\\blacksquare$$\n\n*Замечание.* Тот же результат означает, что прямая $ON$, продолженная за $N$, проходит через середину стороны $CD$ — это теорема Брахмагупты для вписанных четырёхугольников с перпендикулярными диагоналями.",
    "en": "Let $O$ be the centre of the circle of radius $R$, let the diagonals meet at $P$ with $\\angle APB=90^\\circ$, and let $N$ be the midpoint of the chord $AB$; then $ON\\perp AB$ and $ON$ is the distance in question.\n\n**Step 1: the arcs.** Write the arcs (in degrees) as $$\\overset{\\frown}{AB}=2u,\\qquad \\overset{\\frown}{BC}=2v,\\qquad \\overset{\\frown}{CD}=2w,\\qquad \\overset{\\frown}{DA}=2t,$$ so $u+v+w+t=180^\\circ$.\n\nThe angle between two intersecting chords is half the sum of the two arcs they cut off: $$\\angle APB=\\frac{\\overset{\\frown}{AB}+\\overset{\\frown}{CD}}{2}=u+w ,$$ and perpendicularity gives $$u+w=90^\\circ .$$\n\n**Step 2: distance to a chord.** In the right triangle $ONA$ the hypotenuse is $OA=R$, and the angle $\\angle AON$ is half the central angle $\\angle AOB=2u$, that is $\\angle AON=u$. Hence $$ON=R\\cos u .$$\n\n**Step 3: the length of $CD$.** That chord subtends the central angle $\\overset{\\frown}{CD}=2w$, so $$CD=2R\\sin w .$$\n\n**Step 4: compare.** Step 1 gives $w=90^\\circ-u$, so $\\sin w=\\cos u$ and $$\\frac{CD}{2}=R\\sin w=R\\cos u=ON . \\qquad\\blacksquare$$\n\n*Remark.* The same result says that the line $ON$, extended beyond $N$, passes through the midpoint of $CD$ — Brahmagupta’s theorem for cyclic quadrilaterals with perpendicular diagonals."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Радиус окружности равен $5$, а хорда удалена от центра на $3$. Найдите длину хорды.",
    "en": "A circle has radius $5$ and a chord at distance $3$ from the centre. Find the length of the chord."
   },
   "hint": {
    "ru": "Перпендикуляр из центра делит хорду пополам.",
    "en": "The perpendicular from the centre bisects the chord."
   },
   "sol": {
    "ru": "Перпендикуляр, опущенный из центра на хорду, делит её пополам. Получается прямоугольный треугольник с гипотенузой $R=5$ и катетом $3$: $$\\frac{\\ell}{2}=\\sqrt{5^{2}-3^{2}}=\\sqrt{16}=4 .$$\n\nЗначит $\\ell=8$.\n\n**Ответ:** $8$.",
    "en": "The perpendicular from the centre to the chord bisects it, giving a right triangle with hypotenuse $R=5$ and one leg $3$: $$\\frac{\\ell}{2}=\\sqrt{5^{2}-3^{2}}=\\sqrt{16}=4 .$$\n\nHence $\\ell=8$.\n\n**Answer:** $8$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Центральный угол равен $80^\\circ$. Чему равен вписанный угол, опирающийся на ту же дугу?",
    "en": "A central angle measures $80^\\circ$. What is the inscribed angle on the same arc?"
   },
   "hint": {
    "ru": "Вписанный угол вдвое меньше центрального.",
    "en": "An inscribed angle is half the central angle."
   },
   "sol": {
    "ru": "Вписанный угол, опирающийся на ту же дугу, что и центральный, вдвое меньше: $$\\frac{80^\\circ}{2}=40^\\circ .$$\n\n**Ответ:** $40^\\circ$.\n\n**Следствие.** Все вписанные углы, опирающиеся на одну дугу, равны между собой — на этом держится половина задач про окружности.",
    "en": "An inscribed angle on the same arc as a central angle is half of it: $$\\frac{80^\\circ}{2}=40^\\circ .$$\n\n**Answer:** $40^\\circ$.\n\n**Consequence.** All inscribed angles on the same arc are equal — half of all circle problems rest on this."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Радиус окружности равен $6$. Найдите длину дуги в $60^\\circ$ и площадь соответствующего сектора.",
    "en": "A circle has radius $6$. Find the length of a $60^\\circ$ arc and the area of the corresponding sector."
   },
   "hint": {
    "ru": "$60^\\circ$ — это шестая часть окружности.",
    "en": "$60^\\circ$ is one sixth of the full circle."
   },
   "sol": {
    "ru": "Угол в $60^\\circ$ составляет $\\dfrac{60}{360}=\\dfrac16$ полного оборота.\n\n**Дуга:** $$\\ell=\\frac16\\cdot2\\pi R=\\frac16\\cdot12\\pi=2\\pi .$$\n\n**Сектор:** $$S=\\frac16\\cdot\\pi R^{2}=\\frac16\\cdot36\\pi=6\\pi .$$\n\n**Ответ:** $\\ell=2\\pi$, $S=6\\pi$.",
    "en": "A $60^\\circ$ angle is $\\dfrac{60}{360}=\\dfrac16$ of a full turn.\n\n**The arc:** $$\\ell=\\frac16\\cdot2\\pi R=\\frac16\\cdot12\\pi=2\\pi .$$\n\n**The sector:** $$S=\\frac16\\cdot\\pi R^{2}=\\frac16\\cdot36\\pi=6\\pi .$$\n\n**Answer:** $\\ell=2\\pi$, $S=6\\pi$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Из точки, удалённой от центра окружности на $10$, проведена касательная длиной $8$. Найдите радиус.",
    "en": "From a point at distance $10$ from the centre of a circle a tangent of length $8$ is drawn. Find the radius."
   },
   "hint": {
    "ru": "Радиус перпендикулярен касательной в точке касания.",
    "en": "The radius is perpendicular to the tangent at the point of contact."
   },
   "sol": {
    "ru": "Радиус, проведённый в точку касания, перпендикулярен касательной. Значит центр, точка касания и внешняя точка образуют прямоугольный треугольник с гипотенузой $10$ и катетом $8$: $$R=\\sqrt{10^{2}-8^{2}}=\\sqrt{36}=6 .$$\n\n**Ответ:** $6$.",
    "en": "The radius to the point of contact is perpendicular to the tangent, so the centre, the contact point and the external point form a right triangle with hypotenuse $10$ and one leg $8$: $$R=\\sqrt{10^{2}-8^{2}}=\\sqrt{36}=6 .$$\n\n**Answer:** $6$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "Вписанный угол опирается на диаметр. Чему он равен?",
    "en": "An inscribed angle subtends a diameter. How large is it?"
   },
   "hint": {
    "ru": "Дуга, отвечающая диаметру, — полуокружность.",
    "en": "The arc cut off by a diameter is a semicircle."
   },
   "sol": {
    "ru": "Диаметр делит окружность на две дуги по $180^\\circ$. Вписанный угол равен половине дуги, на которую опирается: $$\\frac{180^\\circ}{2}=90^\\circ .$$\n\n**Ответ:** $90^\\circ$ — прямой.\n\n**Это теорема Фалеса**, и обратное тоже верно: если из точки отрезок виден под прямым углом, эта точка лежит на окружности с этим отрезком в качестве диаметра.",
    "en": "A diameter splits the circle into two arcs of $180^\\circ$. An inscribed angle is half its arc: $$\\frac{180^\\circ}{2}=90^\\circ .$$\n\n**Answer:** $90^\\circ$ — a right angle.\n\n**This is Thales’ theorem**, and the converse holds too: if a segment subtends a right angle at a point, that point lies on the circle with the segment as diameter."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 1,
   "q": {
    "ru": "В окружности радиуса $10$ проведена хорда длиной $12$. Найдите расстояние от центра до хорды.",
    "en": "A circle of radius $10$ has a chord of length $12$. Find the distance from the centre to the chord."
   },
   "hint": {
    "ru": "Половина хорды, радиус и расстояние образуют прямоугольный треугольник.",
    "en": "Half the chord, the radius and the distance form a right triangle."
   },
   "sol": {
    "ru": "Половина хорды равна $6$; вместе с радиусом $10$ и искомым расстоянием $d$ она образует прямоугольный треугольник: $$d=\\sqrt{10^{2}-6^{2}}=\\sqrt{64}=8 .$$\n\n**Ответ:** $8$.\n\n**Замечание.** Чем ближе хорда к центру, тем она длиннее; самая длинная хорда — диаметр, у него $d=0$.",
    "en": "Half the chord is $6$; together with the radius $10$ and the unknown distance $d$ it forms a right triangle: $$d=\\sqrt{10^{2}-6^{2}}=\\sqrt{64}=8 .$$\n\n**Answer:** $8$.\n\n**Remark.** The closer a chord is to the centre the longer it is; the longest chord is a diameter, with $d=0$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Хорды $AB$ и $CD$ пересекаются в точке $P$, причём $AP=6$, $PB=4$ и $CP=3$. Найдите $PD$.",
    "en": "Chords $AB$ and $CD$ meet at $P$ with $AP=6$, $PB=4$ and $CP=3$. Find $PD$."
   },
   "hint": {
    "ru": "Произведения отрезков пересекающихся хорд равны.",
    "en": "The products of the segments of intersecting chords are equal."
   },
   "sol": {
    "ru": "Для пересекающихся хорд $$AP\\cdot PB=CP\\cdot PD .$$\n\nПодставим: $$6\\cdot4=3\\cdot PD\\quad\\Longrightarrow\\quad PD=\\frac{24}{3}=8 .$$\n\n**Ответ:** $8$.\n\n**Почему так.** Треугольники $APC$ и $DPB$ подобны: углы при $P$ вертикальные, а $\\angle CAP=\\angle BDP$ как вписанные, опирающиеся на дугу $BC$.",
    "en": "For intersecting chords $$AP\\cdot PB=CP\\cdot PD .$$\n\nSubstituting, $$6\\cdot4=3\\cdot PD\\quad\\Longrightarrow\\quad PD=\\frac{24}{3}=8 .$$\n\n**Answer:** $8$.\n\n**Why.** Triangles $APC$ and $DPB$ are similar: the angles at $P$ are vertical, and $\\angle CAP=\\angle BDP$ as inscribed angles on the arc $BC$."
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Четырёхугольник вписан в окружность, и его угол $A$ равен $110^\\circ$. Найдите угол $C$.",
    "en": "A quadrilateral is inscribed in a circle with angle $A$ equal to $110^\\circ$. Find angle $C$."
   },
   "hint": {
    "ru": "Противоположные углы вписанного четырёхугольника дополняют друг друга.",
    "en": "Opposite angles of a cyclic quadrilateral are supplementary."
   },
   "sol": {
    "ru": "Углы $A$ и $C$ опираются на дополняющие друг друга дуги, вместе составляющие всю окружность. Значит $$\\angle A+\\angle C=\\frac{360^\\circ}{2}=180^\\circ ,$$ откуда $$\\angle C=180^\\circ-110^\\circ=70^\\circ .$$\n\n**Ответ:** $70^\\circ$.",
    "en": "The angles $A$ and $C$ stand on complementary arcs which together make the whole circle, so $$\\angle A+\\angle C=\\frac{360^\\circ}{2}=180^\\circ ,$$ giving $$\\angle C=180^\\circ-110^\\circ=70^\\circ .$$\n\n**Answer:** $70^\\circ$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Угол между касательной и хордой, проведённой из точки касания, равен $50^\\circ$. Найдите дугу, заключённую внутри этого угла.",
    "en": "The angle between a tangent and a chord drawn from the point of contact is $50^\\circ$. Find the arc enclosed by this angle."
   },
   "hint": {
    "ru": "Угол между касательной и хордой равен половине дуги.",
    "en": "A tangent–chord angle is half its arc."
   },
   "sol": {
    "ru": "Угол между касательной и хордой измеряется половиной заключённой внутри него дуги: $$50^\\circ=\\frac{\\smile}{2}\\quad\\Longrightarrow\\quad \\smile=100^\\circ .$$\n\n**Ответ:** $100^\\circ$.\n\n**Проверка предельным случаем.** Если хорда становится диаметром, угол между ней и касательной равен $90^\\circ$, а дуга — $180^\\circ$ ✓",
    "en": "A tangent–chord angle is measured by half the arc it encloses: $$50^\\circ=\\frac{\\smile}{2}\\quad\\Longrightarrow\\quad \\smile=100^\\circ .$$\n\n**Answer:** $100^\\circ$.\n\n**Check by a limiting case.** When the chord becomes a diameter, the tangent–chord angle is $90^\\circ$ and the arc $180^\\circ$ ✓"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Радиусы двух окружностей равны $3$ и $5$, а расстояние между центрами равно $10$. Как они расположены?",
    "en": "Two circles have radii $3$ and $5$, and their centres are $10$ apart. How are they positioned?"
   },
   "hint": {
    "ru": "Сравните расстояние с суммой и разностью радиусов.",
    "en": "Compare the distance with the sum and the difference of the radii."
   },
   "sol": {
    "ru": "Сравним расстояние между центрами $d=10$ с суммой и разностью радиусов: $$r_1+r_2=8,\\qquad \\left|r_1-r_2\\right|=2 .$$\n\nТак как $d=10>8=r_1+r_2$, окружности лежат **одна вне другой** и не имеют общих точек.\n\n**Ответ:** окружности не пересекаются и не касаются; у них четыре общие касательные.\n\n**Полная классификация.**\n\n$d>r_1+r_2$ — вне друг друга;\n\n$d=r_1+r_2$ — внешнее касание;\n\n$\\left|r_1-r_2\\right|<d<r_1+r_2$ — две точки пересечения;\n\n$d=\\left|r_1-r_2\\right|$ — внутреннее касание;\n\n$d<\\left|r_1-r_2\\right|$ — одна внутри другой.",
    "en": "Compare the centre distance $d=10$ with the sum and difference of the radii: $$r_1+r_2=8,\\qquad \\left|r_1-r_2\\right|=2 .$$\n\nSince $d=10>8=r_1+r_2$, the circles lie **outside each other** with no common points.\n\n**Answer:** they neither meet nor touch; there are four common tangents.\n\n**The full classification.**\n\n$d>r_1+r_2$ — external to each other;\n\n$d=r_1+r_2$ — externally tangent;\n\n$\\left|r_1-r_2\\right|<d<r_1+r_2$ — two intersection points;\n\n$d=\\left|r_1-r_2\\right|$ — internally tangent;\n\n$d<\\left|r_1-r_2\\right|$ — one inside the other."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "В окружность радиуса $R$ вписан равносторонний треугольник. Найдите его сторону.",
    "en": "An equilateral triangle is inscribed in a circle of radius $R$. Find its side."
   },
   "hint": {
    "ru": "Центральный угол, опирающийся на сторону, равен $120^\\circ$.",
    "en": "The central angle subtending a side is $120^\\circ$."
   },
   "sol": {
    "ru": "Три вершины делят окружность на три равные дуги по $120^\\circ$, значит каждая сторона стягивает центральный угол в $120^\\circ$.\n\nВ равнобедренном треугольнике с боковыми сторонами $R$ и углом $120^\\circ$ между ними по теореме косинусов $$a^{2}=R^{2}+R^{2}-2R^{2}\\cos120^\\circ=2R^{2}+R^{2}=3R^{2} ,$$ откуда $$a=R\\sqrt3 .$$\n\n**Ответ:** $R\\sqrt3$.\n\n**Проверка через теорему синусов:** $a=2R\\sin60^\\circ=2R\\cdot\\dfrac{\\sqrt3}{2}=R\\sqrt3$ ✓",
    "en": "The three vertices split the circle into three equal arcs of $120^\\circ$, so each side subtends a central angle of $120^\\circ$.\n\nIn the isosceles triangle with legs $R$ and included angle $120^\\circ$ the law of cosines gives $$a^{2}=R^{2}+R^{2}-2R^{2}\\cos120^\\circ=2R^{2}+R^{2}=3R^{2} ,$$ hence $$a=R\\sqrt3 .$$\n\n**Answer:** $R\\sqrt3$.\n\n**Check by the law of sines:** $a=2R\\sin60^\\circ=R\\sqrt3$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что две касательные, проведённые к окружности из одной внешней точки, равны.",
    "en": "Prove that the two tangents drawn to a circle from one external point are equal."
   },
   "hint": {
    "ru": "Сравните два прямоугольных треугольника.",
    "en": "Compare two right triangles."
   },
   "sol": {
    "ru": "Пусть из точки $P$ проведены касательные, касающиеся окружности с центром $O$ в точках $A$ и $B$.\n\nРадиусы в точки касания перпендикулярны касательным, значит треугольники $OAP$ и $OBP$ прямоугольные. У них:\n\nобщая гипотенуза $OP$;\n\nравные катеты $OA=OB=R$.\n\nЗначит $\\triangle OAP=\\triangle OBP$, откуда $$PA=PB . \\qquad\\blacksquare$$\n\n**Заодно** получаем: $\\angle APO=\\angle BPO$, то есть прямая $PO$ — биссектриса угла между касательными, и она же серединный перпендикуляр к отрезку $AB$.",
    "en": "Let tangents from $P$ touch the circle with centre $O$ at $A$ and $B$.\n\nThe radii to the contact points are perpendicular to the tangents, so triangles $OAP$ and $OBP$ are right-angled with:\n\nthe common hypotenuse $OP$;\n\nequal legs $OA=OB=R$.\n\nHence $\\triangle OAP\\cong\\triangle OBP$ and $$PA=PB . \\qquad\\blacksquare$$\n\n**Along the way** we get $\\angle APO=\\angle BPO$: the line $PO$ bisects the angle between the tangents and is also the perpendicular bisector of $AB$."
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Хорда длиной $10$ стягивает дугу в $60^\\circ$. Найдите радиус окружности.",
    "en": "A chord of length $10$ subtends an arc of $60^\\circ$. Find the radius of the circle."
   },
   "hint": {
    "ru": "Треугольник из двух радиусов и хорды равносторонний.",
    "en": "The triangle formed by two radii and the chord is equilateral."
   },
   "sol": {
    "ru": "Соединим концы хорды с центром. Получится равнобедренный треугольник с углом при вершине $60^\\circ$ — а такой треугольник равносторонний.\n\nЗначит хорда равна радиусу: $$R=10 .$$\n\n**Ответ:** $10$.\n\n**Общая формула:** хорда, стягивающая дугу $\\alpha$, равна $$\\ell=2R\\sin\\frac{\\alpha}{2} ,$$ и при $\\alpha=60^\\circ$ это даёт $\\ell=2R\\cdot\\tfrac12=R$ ✓",
    "en": "Join the ends of the chord to the centre: an isosceles triangle with apex angle $60^\\circ$ — hence equilateral.\n\nSo the chord equals the radius: $$R=10 .$$\n\n**Answer:** $10$.\n\n**The general formula:** a chord subtending an arc $\\alpha$ has length $$\\ell=2R\\sin\\frac{\\alpha}{2} ,$$ and at $\\alpha=60^\\circ$ this gives $\\ell=R$ ✓"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "Диаметр окружности равен $26$, а хорда — $24$. Найдите расстояние от центра до хорды и расстояние от хорды до ближайшей параллельной ей касательной.",
    "en": "A circle has diameter $26$ and a chord of length $24$. Find the distance from the centre to the chord, and the distance from the chord to the nearer parallel tangent."
   },
   "hint": {
    "ru": "Радиус равен $13$.",
    "en": "The radius is $13$."
   },
   "sol": {
    "ru": "Радиус равен $R=13$, половина хорды — $12$.\n\n**Расстояние до центра:** $$d=\\sqrt{13^{2}-12^{2}}=\\sqrt{169-144}=5 .$$\n\n**До касательной.** Касательная, параллельная хорде и лежащая с той же стороны, удалена от центра ровно на $R=13$. Значит расстояние от хорды до неё равно $$13-5=8 .$$\n\n**Ответ:** $5$ и $8$.\n\n**Проверка:** до противоположной касательной было бы $13+5=18$, и сумма $8+18=26$ — как раз диаметр ✓",
    "en": "The radius is $R=13$ and half the chord is $12$.\n\n**Distance to the centre:** $$d=\\sqrt{13^{2}-12^{2}}=\\sqrt{169-144}=5 .$$\n\n**To the tangent.** The tangent parallel to the chord on the same side is exactly $R=13$ from the centre, so the distance from the chord to it is $$13-5=8 .$$\n\n**Answer:** $5$ and $8$.\n\n**Check:** to the opposite tangent it would be $13+5=18$, and $8+18=26$ — the diameter ✓"
   }
  },
  {
   "src": "Школьный тур · уровень / School-round level",
   "lvl": 2,
   "q": {
    "ru": "В окружность радиуса $4$ вписан правильный шестиугольник. Найдите его периметр и площадь.",
    "en": "A regular hexagon is inscribed in a circle of radius $4$. Find its perimeter and area."
   },
   "hint": {
    "ru": "Шестиугольник распадается на шесть равносторонних треугольников.",
    "en": "The hexagon splits into six equilateral triangles."
   },
   "sol": {
    "ru": "Соединим центр со всеми вершинами: шестиугольник распадётся на шесть треугольников с двумя сторонами $R$ и углом $60^\\circ$ между ними, то есть на шесть **равносторонних** треугольников со стороной $R=4$.\n\n**Периметр:** $$P=6\\cdot4=24 .$$\n\n**Площадь:** площадь одного равностороннего треугольника со стороной $4$ равна $\\dfrac{4^{2}\\sqrt3}{4}=4\\sqrt3$, значит $$S=6\\cdot4\\sqrt3=24\\sqrt3\\approx41{,}57 .$$\n\n**Ответ:** $P=24$, $S=24\\sqrt3$.\n\n**Проверка:** площадь круга равна $16\\pi\\approx50{,}3$ — шестиугольник должен быть чуть меньше ✓",
    "en": "Join the centre to all vertices: the hexagon splits into six triangles with two sides $R$ and a $60^\\circ$ angle between them — six **equilateral** triangles of side $R=4$.\n\n**Perimeter:** $$P=6\\cdot4=24 .$$\n\n**Area:** one equilateral triangle of side $4$ has area $\\dfrac{4^{2}\\sqrt3}{4}=4\\sqrt3$, so $$S=6\\cdot4\\sqrt3=24\\sqrt3\\approx41.57 .$$\n\n**Answer:** $P=24$, $S=24\\sqrt3$.\n\n**Check:** the disc has area $16\\pi\\approx50.3$ — the hexagon should be a little smaller ✓"
   }
  },
  {
   "src": "Районный тур · уровень / District-round level",
   "lvl": 2,
   "q": {
    "ru": "Докажите, что равные хорды одной окружности одинаково удалены от центра, и наоборот.",
    "en": "Prove that equal chords of a circle are equidistant from the centre, and conversely."
   },
   "hint": {
    "ru": "Перпендикуляр из центра делит хорду пополам.",
    "en": "The perpendicular from the centre bisects a chord."
   },
   "sol": {
    "ru": "Пусть хорда длиной $\\ell$ удалена от центра на $d$. Перпендикуляр из центра делит её пополам, и по теореме Пифагора $$\\left(\\frac{\\ell}{2}\\right)^{2}+d^{2}=R^{2} ,$$ то есть $$d=\\sqrt{R^{2}-\\frac{\\ell^{2}}{4}} .$$\n\nЭто равенство связывает $\\ell$ и $d$ **взаимно однозначно**: правая часть строго убывает по $\\ell$ на промежутке $0<\\ell\\le2R$.\n\nЗначит $$\\ell_1=\\ell_2\\quad\\Longleftrightarrow\\quad d_1=d_2 . \\qquad\\blacksquare$$\n\n**Заодно:** более длинная хорда ближе к центру, и наоборот.",
    "en": "Let a chord of length $\\ell$ be at distance $d$ from the centre. The perpendicular from the centre bisects it, and Pythagoras gives $$\\left(\\frac{\\ell}{2}\\right)^{2}+d^{2}=R^{2} ,$$ that is $$d=\\sqrt{R^{2}-\\frac{\\ell^{2}}{4}} .$$\n\nThis relates $\\ell$ and $d$ **bijectively**: the right side is strictly decreasing in $\\ell$ on $0<\\ell\\le2R$.\n\nHence $$\\ell_1=\\ell_2\\quad\\Longleftrightarrow\\quad d_1=d_2 . \\qquad\\blacksquare$$\n\n**Along the way:** a longer chord lies closer to the centre, and vice versa."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите теорему о вписанном угле: вписанный угол равен половине центрального, опирающегося на ту же дугу.",
    "en": "Prove the inscribed angle theorem: an inscribed angle is half the central angle on the same arc."
   },
   "hint": {
    "ru": "Сначала случай, когда одна сторона угла проходит через центр.",
    "en": "Start with the case where one side of the angle passes through the centre."
   },
   "sol": {
    "ru": "Пусть вписанный угол $\\angle BAC$ опирается на дугу $BC$, а $O$ — центр.\n\n**Случай 1: центр лежит на стороне угла**, скажем на $AB$. Треугольник $AOC$ равнобедренный ($OA=OC=R$), значит $\\angle OAC=\\angle OCA=\\alpha$. Внешний угол $\\angle BOC$ этого треугольника при вершине $O$ равен сумме двух других: $$\\angle BOC=\\alpha+\\alpha=2\\alpha=2\\angle BAC . \\qquad\\checkmark$$\n\n**Случай 2: центр внутри угла.** Проведём диаметр $AD$. Он разбивает угол на два, к каждому из которых применим случай 1: $$\\angle BAD=\\tfrac12\\angle BOD,\\qquad \\angle DAC=\\tfrac12\\angle DOC .$$ Складывая, получаем требуемое ✓\n\n**Случай 3: центр вне угла.** Снова проведём диаметр $AD$; теперь углы вычитаются: $$\\angle BAC=\\angle BAD-\\angle CAD=\\tfrac12\\angle BOD-\\tfrac12\\angle COD=\\tfrac12\\angle BOC \\quad\\checkmark$$\n\n$\\blacksquare$\n\n**Следствия.** Углы, опирающиеся на одну дугу, равны; угол, опирающийся на диаметр, прямой; противоположные углы вписанного четырёхугольника дополняют друг друга до $180^\\circ$.",
    "en": "Let the inscribed angle $\\angle BAC$ stand on the arc $BC$, with $O$ the centre.\n\n**Case 1: the centre lies on a side**, say on $AB$. Triangle $AOC$ is isosceles ($OA=OC=R$), so $\\angle OAC=\\angle OCA=\\alpha$. The exterior angle $\\angle BOC$ at $O$ equals the sum of the two remote angles: $$\\angle BOC=\\alpha+\\alpha=2\\alpha=2\\angle BAC . \\qquad\\checkmark$$\n\n**Case 2: the centre is inside the angle.** Draw the diameter $AD$. It splits the angle into two, each covered by Case 1: $$\\angle BAD=\\tfrac12\\angle BOD,\\qquad \\angle DAC=\\tfrac12\\angle DOC .$$ Adding gives the claim ✓\n\n**Case 3: the centre is outside the angle.** Draw the diameter $AD$ again; now the angles subtract: $$\\angle BAC=\\angle BAD-\\angle CAD=\\tfrac12\\angle BOD-\\tfrac12\\angle COD=\\tfrac12\\angle BOC \\quad\\checkmark$$\n\n$\\blacksquare$\n\n**Consequences.** Angles on the same arc are equal; an angle on a diameter is right; opposite angles of a cyclic quadrilateral are supplementary."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите теорему о степени точки: для любой прямой через точку $P$, пересекающей окружность в точках $X$ и $Y$, произведение $PX\\cdot PY$ одно и то же.",
    "en": "Prove the power-of-a-point theorem: for every line through $P$ meeting a circle at $X$ and $Y$, the product $PX\\cdot PY$ is the same."
   },
   "hint": {
    "ru": "Найдите подобные треугольники, используя равные вписанные углы.",
    "en": "Find similar triangles using equal inscribed angles."
   },
   "sol": {
    "ru": "Пусть через $P$ проведены две прямые, пересекающие окружность в точках $A,B$ и $C,D$.\n\n**Случай 1: $P$ внутри окружности.** Треугольники $APC$ и $DPB$ подобны: углы при $P$ вертикальные, а $$\\angle CAP=\\angle BDP $$ как вписанные углы, опирающиеся на одну дугу $BC$. Из подобия $$\\frac{PA}{PD}=\\frac{PC}{PB}\\quad\\Longrightarrow\\quad PA\\cdot PB=PC\\cdot PD . \\qquad\\checkmark$$\n\n**Случай 2: $P$ вне окружности.** Треугольники $PAC$ и $PDB$ подобны: угол при $P$ общий, а $$\\angle PAC=\\angle PDB $$ (углы $\\angle BAC$ и $\\angle BDC$ опираются на одну дугу; при переходе к смежному углу равенство сохраняется). Значит снова $$PA\\cdot PB=PC\\cdot PD . \\qquad\\checkmark$$\n\n**Случай касательной.** Если прямая касается окружности в точке $T$, то точки $X$ и $Y$ сливаются, и произведение превращается в $PT^{2}$; подобие $\\triangle PTA\\sim\\triangle PBT$ (по углу между касательной и хордой) даёт $$PT^{2}=PA\\cdot PB . \\qquad\\checkmark$$\n\n$\\blacksquare$\n\n**Формула через центр.** Если $O$ — центр, $R$ — радиус, $d=PO$, то степень точки равна $$\\left|d^{2}-R^{2}\\right| ,$$ и она отрицательна внутри окружности, положительна снаружи и равна нулю на ней.",
    "en": "Let two lines through $P$ meet the circle at $A,B$ and at $C,D$.\n\n**Case 1: $P$ inside the circle.** Triangles $APC$ and $DPB$ are similar: the angles at $P$ are vertical and $$\\angle CAP=\\angle BDP $$ as inscribed angles on the same arc $BC$. Similarity gives $$\\frac{PA}{PD}=\\frac{PC}{PB}\\quad\\Longrightarrow\\quad PA\\cdot PB=PC\\cdot PD . \\qquad\\checkmark$$\n\n**Case 2: $P$ outside.** Triangles $PAC$ and $PDB$ are similar: the angle at $P$ is common, and $$\\angle PAC=\\angle PDB $$ (the angles $\\angle BAC$ and $\\angle BDC$ stand on one arc, and passing to the supplement preserves the equality). Again $$PA\\cdot PB=PC\\cdot PD . \\qquad\\checkmark$$\n\n**Tangent case.** If the line touches the circle at $T$ then $X$ and $Y$ merge and the product becomes $PT^{2}$; the similarity $\\triangle PTA\\sim\\triangle PBT$ (by the tangent–chord angle) gives $$PT^{2}=PA\\cdot PB . \\qquad\\checkmark$$\n\n$\\blacksquare$\n\n**Formula through the centre.** With $O$ the centre, $R$ the radius and $d=PO$, the power of the point equals $$\\left|d^{2}-R^{2}\\right| ,$$ negative inside the circle, positive outside and zero on it."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что угол между касательной и хордой, проведённой из точки касания, равен половине заключённой в нём дуги.",
    "en": "Prove that the angle between a tangent and a chord from the point of contact equals half the enclosed arc."
   },
   "hint": {
    "ru": "Проведите диаметр из точки касания.",
    "en": "Draw the diameter from the point of contact."
   },
   "sol": {
    "ru": "Пусть касательная касается окружности в точке $T$, а $TA$ — хорда; обозначим искомый угол $\\varphi$.\n\n**Построение.** Проведём диаметр $TD$. Радиус $OT$ перпендикулярен касательной, поэтому $$\\varphi=90^\\circ-\\angle ATD .$$\n\n**Угол $ATD$.** Он вписанный и опирается на диаметр... точнее, угол $\\angle TAD$ прямой (опирается на диаметр $TD$), значит в треугольнике $TAD$ $$\\angle ATD=90^\\circ-\\angle ADT .$$\n\n**Собираем.** $$\\varphi=90^\\circ-\\left(90^\\circ-\\angle ADT\\right)=\\angle ADT .$$\n\nНо $\\angle ADT$ — вписанный угол, опирающийся на дугу $TA$ (ту самую, что лежит внутри угла $\\varphi$), значит он равен половине этой дуги. Следовательно и $$\\varphi=\\frac{\\smile TA}{2} . \\qquad\\blacksquare$$\n\n**Проверка.** Если хорда — диаметр, то $\\varphi=90^\\circ$, а дуга равна $180^\\circ$ ✓\n\n**Применение.** Это ключ к доказательству равенства $PT^{2}=PA\\cdot PB$ для касательной и секущей.",
    "en": "Let the tangent touch the circle at $T$ and let $TA$ be a chord; call the angle in question $\\varphi$.\n\n**Construction.** Draw the diameter $TD$. The radius $OT$ is perpendicular to the tangent, so $$\\varphi=90^\\circ-\\angle ATD .$$\n\n**The angle $ATD$.** The angle $\\angle TAD$ is right (it stands on the diameter $TD$), so in triangle $TAD$ $$\\angle ATD=90^\\circ-\\angle ADT .$$\n\n**Putting it together.** $$\\varphi=90^\\circ-\\left(90^\\circ-\\angle ADT\\right)=\\angle ADT .$$\n\nBut $\\angle ADT$ is an inscribed angle on the arc $TA$ — the very arc inside the angle $\\varphi$ — hence half of it. Therefore $$\\varphi=\\frac{\\smile TA}{2} . \\qquad\\blacksquare$$\n\n**Check.** If the chord is a diameter then $\\varphi=90^\\circ$ and the arc is $180^\\circ$ ✓\n\n**Use.** This is the key to proving $PT^{2}=PA\\cdot PB$ for a tangent and a secant."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Две хорды пересекаются внутри окружности. Докажите, что угол между ними равен полусумме двух дуг, заключённых между сторонами угла и его продолжениями.",
    "en": "Two chords meet inside a circle. Prove that the angle between them equals half the sum of the two arcs cut off by the angle and its vertical partner."
   },
   "hint": {
    "ru": "Проведите вспомогательную хорду и примените теорему о внешнем угле.",
    "en": "Draw an auxiliary chord and use the exterior angle theorem."
   },
   "sol": {
    "ru": "Пусть хорды $AB$ и $CD$ пересекаются в точке $P$, и нас интересует угол $\\angle APC$.\n\n**Построение.** Проведём хорду $BC$.\n\n**Внешний угол.** В треугольнике $BPC$ угол $\\angle APC$ — внешний при вершине $P$, значит он равен сумме двух не смежных с ним внутренних: $$\\angle APC=\\angle PBC+\\angle PCB=\\angle ABC+\\angle DCB .$$\n\n**Вписанные углы.** Угол $\\angle ABC$ опирается на дугу $AC$, а $\\angle DCB$ — на дугу $BD$, поэтому $$\\angle ABC=\\frac{\\smile AC}{2},\\qquad \\angle DCB=\\frac{\\smile BD}{2} .$$\n\n**Итог.** $$\\angle APC=\\frac{\\smile AC+\\smile BD}{2} . \\qquad\\blacksquare$$\n\n**Проверка предельным случаем.** Если $P$ стремится к центру, обе дуги стремятся к дугам, отвечающим центральному углу, и формула превращается в «угол равен дуге» ✓\n\n**Родственный факт.** Для секущих, пересекающихся **вне** окружности, угол равен **полуразности** дуг.",
    "en": "Let the chords $AB$ and $CD$ meet at $P$, and consider the angle $\\angle APC$.\n\n**Construction.** Draw the chord $BC$.\n\n**Exterior angle.** In triangle $BPC$ the angle $\\angle APC$ is exterior at $P$, hence equal to the sum of the two remote interior angles: $$\\angle APC=\\angle PBC+\\angle PCB=\\angle ABC+\\angle DCB .$$\n\n**Inscribed angles.** The angle $\\angle ABC$ stands on the arc $AC$ and $\\angle DCB$ on the arc $BD$, so $$\\angle ABC=\\frac{\\smile AC}{2},\\qquad \\angle DCB=\\frac{\\smile BD}{2} .$$\n\n**Conclusion.** $$\\angle APC=\\frac{\\smile AC+\\smile BD}{2} . \\qquad\\blacksquare$$\n\n**Limiting check.** As $P$ approaches the centre both arcs tend to the arcs of the central angle, and the formula becomes \"the angle equals its arc\" ✓\n\n**Companion fact.** For secants meeting **outside** the circle the angle equals half the **difference** of the arcs."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Из внешней точки проведены две секущие. Докажите, что угол между ними равен полуразности заключённых дуг.",
    "en": "Two secants are drawn from an external point. Prove that the angle between them equals half the difference of the intercepted arcs."
   },
   "hint": {
    "ru": "Снова проведите вспомогательную хорду и используйте внешний угол треугольника.",
    "en": "Again draw an auxiliary chord and use the exterior angle of a triangle."
   },
   "sol": {
    "ru": "Пусть секущие из точки $P$ пересекают окружность в точках $A,B$ (ближняя $A$) и $C,D$ (ближняя $C$).\n\n**Построение.** Проведём хорду $AD$.\n\n**Внешний угол.** В треугольнике $PAD$ угол $\\angle DAB$ — внешний при вершине $A$, значит $$\\angle DAB=\\angle APD+\\angle ADP\\quad\\Longrightarrow\\quad \\angle APD=\\angle DAB-\\angle ADC .$$\n\n**Вписанные углы.** Угол $\\angle DAB$ опирается на дугу $BD$ (дальнюю), а $\\angle ADC$ — на дугу $AC$ (ближнюю): $$\\angle DAB=\\frac{\\smile BD}{2},\\qquad \\angle ADC=\\frac{\\smile AC}{2} .$$\n\n**Итог.** $$\\angle APD=\\frac{\\smile BD-\\smile AC}{2} . \\qquad\\blacksquare$$\n\n**Проверка.** Если точка $P$ уходит очень далеко, обе дуги почти совпадают, и угол стремится к нулю ✓ Если же $P$ приближается к окружности, ближняя дуга стягивается в точку, и угол стремится к половине дальней дуги — то есть к углу между касательной и хордой ✓\n\n**Единое правило.** Внутри окружности — полусумма, снаружи — полуразность, на самой окружности — половина дуги.",
    "en": "Let the secants from $P$ meet the circle at $A,B$ (with $A$ nearer) and at $C,D$ (with $C$ nearer).\n\n**Construction.** Draw the chord $AD$.\n\n**Exterior angle.** In triangle $PAD$ the angle $\\angle DAB$ is exterior at $A$, so $$\\angle DAB=\\angle APD+\\angle ADP\\quad\\Longrightarrow\\quad \\angle APD=\\angle DAB-\\angle ADC .$$\n\n**Inscribed angles.** $\\angle DAB$ stands on the far arc $BD$ and $\\angle ADC$ on the near arc $AC$: $$\\angle DAB=\\frac{\\smile BD}{2},\\qquad \\angle ADC=\\frac{\\smile AC}{2} .$$\n\n**Conclusion.** $$\\angle APD=\\frac{\\smile BD-\\smile AC}{2} . \\qquad\\blacksquare$$\n\n**Checks.** If $P$ recedes far away the two arcs nearly coincide and the angle tends to zero ✓ If $P$ approaches the circle the near arc shrinks to a point and the angle tends to half the far arc — the tangent–chord angle ✓\n\n**One rule.** Inside the circle, half the sum; outside, half the difference; on the circle, half the arc."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что множество точек, имеющих равные степени относительно двух неконцентрических окружностей (радикальная ось), — это прямая, перпендикулярная линии центров.",
    "en": "Prove that the set of points having equal power with respect to two non-concentric circles (the radical axis) is a line perpendicular to the line of centres."
   },
   "hint": {
    "ru": "Запишите условие в координатах, взяв ось $Ox$ вдоль линии центров.",
    "en": "Write the condition in coordinates with the $x$-axis along the line of centres."
   },
   "sol": {
    "ru": "Введём координаты так, чтобы центры лежали на оси $Ox$: $$O_1(0,0),\\ R_1\\qquad\\text{и}\\qquad O_2(c,0),\\ R_2,\\qquad c\\ne0 .$$\n\n**Степень точки.** Для точки $M(x,y)$ степень относительно первой окружности равна $$MO_1^{2}-R_1^{2}=x^{2}+y^{2}-R_1^{2} ,$$ относительно второй — $$MO_2^{2}-R_2^{2}=(x-c)^{2}+y^{2}-R_2^{2} .$$\n\n**Приравниваем.** $$x^{2}+y^{2}-R_1^{2}=(x-c)^{2}+y^{2}-R_2^{2} .$$\n\nСлагаемые $x^{2}$ и $y^{2}$ сокращаются: $$-R_1^{2}=-2cx+c^{2}-R_2^{2}\\quad\\Longrightarrow\\quad 2cx=c^{2}+R_1^{2}-R_2^{2} ,$$ то есть $$x=\\frac{c^{2}+R_1^{2}-R_2^{2}}{2c} .$$\n\nЭто уравнение вида $x=\\text{const}$ — вертикальная прямая, то есть прямая, **перпендикулярная линии центров** $Ox$. $\\blacksquare$\n\n**Частные случаи.** Если окружности пересекаются, радикальная ось проходит через обе точки пересечения (там обе степени равны нулю). Если они касаются — через точку касания.\n\n**Почему нужна неконцентричность.** При $c=0$ уравнение вырождается: либо решений нет, либо ими становится вся плоскость (если ещё и $R_1=R_2$).",
    "en": "Choose coordinates with the centres on the $x$-axis: $$O_1(0,0),\\ R_1\\qquad\\text{and}\\qquad O_2(c,0),\\ R_2,\\qquad c\\ne0 .$$\n\n**Power of a point.** For $M(x,y)$ the power with respect to the first circle is $$MO_1^{2}-R_1^{2}=x^{2}+y^{2}-R_1^{2} ,$$ and with respect to the second $$MO_2^{2}-R_2^{2}=(x-c)^{2}+y^{2}-R_2^{2} .$$\n\n**Equate.** $$x^{2}+y^{2}-R_1^{2}=(x-c)^{2}+y^{2}-R_2^{2} .$$\n\nThe terms $x^{2}$ and $y^{2}$ cancel: $$-R_1^{2}=-2cx+c^{2}-R_2^{2}\\quad\\Longrightarrow\\quad 2cx=c^{2}+R_1^{2}-R_2^{2} ,$$ that is $$x=\\frac{c^{2}+R_1^{2}-R_2^{2}}{2c} .$$\n\nThis is an equation $x=\\text{const}$ — a vertical line, i.e. a line **perpendicular to the line of centres**. $\\blacksquare$\n\n**Special cases.** If the circles intersect, the radical axis passes through both intersection points (where both powers vanish). If they are tangent, it passes through the point of contact.\n\n**Why non-concentric.** At $c=0$ the equation degenerates: either there is no solution, or (if also $R_1=R_2$) the whole plane qualifies."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что радиус вписанной окружности прямоугольного треугольника с катетами $a,b$ и гипотенузой $c$ равен $r=\\dfrac{a+b-c}{2}$.",
    "en": "Prove that the inradius of a right triangle with legs $a,b$ and hypotenuse $c$ equals $r=\\dfrac{a+b-c}{2}$."
   },
   "hint": {
    "ru": "У прямого угла получается квадрат со стороной $r$.",
    "en": "At the right angle the picture contains a square of side $r$."
   },
   "sol": {
    "ru": "Пусть прямой угол при вершине $C$, а вписанная окружность касается катетов в точках $X$ (на $CB$) и $Y$ (на $CA$), а гипотенузы — в точке $Z$.\n\n**Квадрат у прямого угла.** Отрезки $CX$ и $CY$ — касательные из вершины $C$, значит они равны; радиусы в точки касания перпендикулярны сторонам, а угол $C$ прямой. Получается квадрат со стороной $r$: $$CX=CY=r .$$\n\n**Равные касательные из других вершин.** $$BX=BZ,\\qquad AY=AZ .$$\n\n**Считаем гипотенузу.** $$c=AZ+ZB=AY+BX=(b-r)+(a-r)=a+b-2r ,$$ откуда $$r=\\frac{a+b-c}{2} . \\qquad\\blacksquare$$\n\n**Проверка** на треугольнике $3,4,5$: $$r=\\frac{3+4-5}{2}=1 ,$$ и по формуле $r=\\dfrac Sp=\\dfrac66=1$ ✓\n\n**Следствие.** Для прямоугольного треугольника $r+R=\\dfrac{a+b-c}{2}+\\dfrac c2=\\dfrac{a+b}{2}$.",
    "en": "Let the right angle be at $C$, with the incircle touching the legs at $X$ (on $CB$) and $Y$ (on $CA$), and the hypotenuse at $Z$.\n\n**A square at the right angle.** The segments $CX$ and $CY$ are tangents from $C$, hence equal; the radii to the contact points are perpendicular to the sides and the angle $C$ is right. This makes a square of side $r$: $$CX=CY=r .$$\n\n**Equal tangents from the other vertices.** $$BX=BZ,\\qquad AY=AZ .$$\n\n**Compute the hypotenuse.** $$c=AZ+ZB=AY+BX=(b-r)+(a-r)=a+b-2r ,$$ hence $$r=\\frac{a+b-c}{2} . \\qquad\\blacksquare$$\n\n**Check** on the $3,4,5$ triangle: $$r=\\frac{3+4-5}{2}=1 ,$$ and the formula $r=\\dfrac Sp=\\dfrac66=1$ agrees ✓\n\n**Corollary.** For a right triangle $r+R=\\dfrac{a+b-c}{2}+\\dfrac c2=\\dfrac{a+b}{2}$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что длины касательных, проведённых из вершин треугольника к его вписанной окружности, равны $p-a$, $p-b$, $p-c$.",
    "en": "Prove that the tangent lengths from the vertices of a triangle to its incircle are $p-a$, $p-b$, $p-c$."
   },
   "hint": {
    "ru": "Обозначьте касательные $x,y,z$ и составьте систему.",
    "en": "Call the tangent lengths $x,y,z$ and set up a system."
   },
   "sol": {
    "ru": "Обозначим длины касательных из вершин $A$, $B$, $C$ через $x$, $y$, $z$. Из равенства касательных, проведённых из одной точки, каждая сторона распадается на две такие касательные: $$a=BC=y+z,\\qquad b=CA=z+x,\\qquad c=AB=x+y .$$\n\n**Складываем.** $$a+b+c=2(x+y+z)\\quad\\Longrightarrow\\quad x+y+z=p .$$\n\n**Вычитаем.** $$x=(x+y+z)-(y+z)=p-a ,$$ и точно так же $$y=p-b,\\qquad z=p-c . \\qquad\\blacksquare$$\n\n**Проверка** на треугольнике $13,14,15$: $p=21$, значит касательные равны $21-13=8$, $21-14=7$, $21-15=6$, и суммы по сторонам дают $7+6=13$ ✓, $8+6=14$ ✓, $8+7=15$ ✓\n\n**Полезно помнить:** точка касания вписанной окружности со стороной $a$ делит её на отрезки $p-b$ и $p-c$.",
    "en": "Call the tangent lengths from $A$, $B$, $C$ by $x$, $y$, $z$. Since tangents from one point are equal, each side splits into two such tangents: $$a=BC=y+z,\\qquad b=CA=z+x,\\qquad c=AB=x+y .$$\n\n**Add.** $$a+b+c=2(x+y+z)\\quad\\Longrightarrow\\quad x+y+z=p .$$\n\n**Subtract.** $$x=(x+y+z)-(y+z)=p-a ,$$ and likewise $$y=p-b,\\qquad z=p-c . \\qquad\\blacksquare$$\n\n**Check** on the $13,14,15$ triangle: $p=21$, so the tangents are $8$, $7$, $6$, and the sides come out as $7+6=13$ ✓, $8+6=14$ ✓, $8+7=15$ ✓\n\n**Worth remembering:** the incircle touches the side $a$ dividing it into pieces $p-b$ and $p-c$."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что четырёхугольник вписан в окружность тогда и только тогда, когда суммы его противоположных углов равны $180^\\circ$.",
    "en": "Prove that a quadrilateral is cyclic if and only if its opposite angles are supplementary."
   },
   "hint": {
    "ru": "В обратную сторону — от противного, сравнив с описанной окружностью треугольника.",
    "en": "For the converse, argue by contradiction using the circumcircle of a triangle."
   },
   "sol": {
    "ru": "**Прямое утверждение.** Пусть $ABCD$ вписан. Угол $A$ опирается на дугу $BCD$, угол $C$ — на дугу $BAD$; вместе эти дуги составляют всю окружность. Значит $$\\angle A+\\angle C=\\frac{\\smile BCD+\\smile BAD}{2}=\\frac{360^\\circ}{2}=180^\\circ . \\qquad\\checkmark$$\n\n**Обратное утверждение.** Пусть $\\angle A+\\angle C=180^\\circ$. Через три точки $A$, $B$, $D$ проходит единственная окружность $\\omega$. Докажем, что $C$ лежит на ней.\n\nПусть луч $BC$ пересекает $\\omega$ во второй точке $C_1$. Четырёхугольник $ABC_1D$ вписан, значит по прямому утверждению $$\\angle A+\\angle BC_1D=180^\\circ .$$ Сравнивая с условием, получаем $$\\angle BC_1D=\\angle BCD .$$\n\nНо если бы $C$ лежала строго внутри окружности, угол $\\angle BCD$ был бы **больше** угла $\\angle BC_1D$ (угол между хордами внутри окружности равен полусумме дуг, а вписанный — половине одной дуги); если бы строго снаружи — **меньше** (полуразность). Значит $C=C_1$, то есть $C$ лежит на $\\omega$. $\\blacksquare$\n\n**Практическая польза.** Это самый ходовой признак «четыре точки лежат на окружности» — наряду с признаком равных углов, опирающихся на один отрезок.",
    "en": "**Forward direction.** Let $ABCD$ be cyclic. The angle $A$ stands on the arc $BCD$ and the angle $C$ on the arc $BAD$; together these arcs make the whole circle. Hence $$\\angle A+\\angle C=\\frac{\\smile BCD+\\smile BAD}{2}=\\frac{360^\\circ}{2}=180^\\circ . \\qquad\\checkmark$$\n\n**Converse.** Suppose $\\angle A+\\angle C=180^\\circ$. A unique circle $\\omega$ passes through $A$, $B$, $D$; we show $C$ lies on it.\n\nLet the ray $BC$ meet $\\omega$ again at $C_1$. The quadrilateral $ABC_1D$ is cyclic, so by the forward direction $$\\angle A+\\angle BC_1D=180^\\circ ,$$ and comparing with the hypothesis, $$\\angle BC_1D=\\angle BCD .$$\n\nBut if $C$ lay strictly inside the circle, the angle $\\angle BCD$ would be **larger** than $\\angle BC_1D$ (an angle between chords inside a circle is half the sum of two arcs, an inscribed angle only half of one); if strictly outside, it would be **smaller** (half a difference). Hence $C=C_1$ and $C$ lies on $\\omega$. $\\blacksquare$\n\n**Practical value.** This is the workhorse test for \"four points are concyclic\", alongside the equal-angles-on-a-segment test."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что основания трёх высот треугольника, середины его сторон и середины отрезков от вершин до ортоцентра лежат на одной окружности (окружность девяти точек).",
    "en": "Prove that the feet of the three altitudes, the midpoints of the sides, and the midpoints of the segments from the vertices to the orthocentre all lie on one circle (the nine-point circle)."
   },
   "hint": {
    "ru": "Рассмотрите гомотетию с центром в ортоцентре и коэффициентом $\\tfrac12$.",
    "en": "Consider the homothety with centre the orthocentre and ratio $\\tfrac12$."
   },
   "sol": {
    "ru": "Пусть $H$ — ортоцентр, $O$ — центр описанной окружности радиуса $R$.\n\n**Шаг 1: гомотетия.** Рассмотрим гомотетию $h$ с центром $H$ и коэффициентом $\\tfrac12$. Она переводит вершину $A$ в середину отрезка $AH$, и то же для $B$ и $C$. Значит образ описанной окружности — окружность радиуса $\\tfrac R2$ с центром в середине $OH$; обозначим её $\\omega_9$.\n\nПо построению три середины отрезков $AH$, $BH$, $CH$ лежат на $\\omega_9$ ✓\n\n**Шаг 2: середины сторон.** Известно (свойство ортоцентра), что точка, симметричная $H$ относительно середины стороны $BC$, лежит на описанной окружности — это точка, диаметрально противоположная $A$. Значит середина $BC$ — образ этой точки описанной окружности при $h$, то есть лежит на $\\omega_9$ ✓\n\n**Шаг 3: основания высот.** Известно также, что точка, симметричная $H$ относительно **прямой** $BC$, лежит на описанной окружности. Основание высоты — середина отрезка между $H$ и этой точкой, то есть снова её образ при $h$. Значит и основания высот лежат на $\\omega_9$ ✓\n\nВсе девять точек лежат на одной окружности радиуса $\\tfrac R2$ с центром в середине отрезка $OH$. $\\blacksquare$\n\n**Дополнение.** Центр этой окружности лежит на прямой Эйлера, ровно посередине между $O$ и $H$.\n\n**Проверка на равностороннем треугольнике.** Там $O=H$, все девять точек сводятся к шести (середины сторон совпадают с основаниями высот), и они действительно лежат на окружности вдвое меньшего радиуса ✓",
    "en": "Let $H$ be the orthocentre and $O$ the circumcentre, with circumradius $R$.\n\n**Step 1: a homothety.** Consider the homothety $h$ with centre $H$ and ratio $\\tfrac12$. It sends $A$ to the midpoint of $AH$, and similarly for $B$ and $C$. So the image of the circumcircle is a circle of radius $\\tfrac R2$ centred at the midpoint of $OH$; call it $\\omega_9$.\n\nBy construction the three midpoints of $AH$, $BH$, $CH$ lie on $\\omega_9$ ✓\n\n**Step 2: the midpoints of the sides.** A known property of the orthocentre: the reflection of $H$ in the midpoint of $BC$ lies on the circumcircle — it is the point diametrically opposite $A$. Hence the midpoint of $BC$ is the image under $h$ of a point of the circumcircle, so it lies on $\\omega_9$ ✓\n\n**Step 3: the feet of the altitudes.** Likewise the reflection of $H$ in the **line** $BC$ lies on the circumcircle. The foot of the altitude is the midpoint between $H$ and that point, i.e. again its image under $h$. So the feet lie on $\\omega_9$ ✓\n\nAll nine points lie on one circle of radius $\\tfrac R2$ centred at the midpoint of $OH$. $\\blacksquare$\n\n**Addendum.** Its centre lies on the Euler line, exactly halfway between $O$ and $H$.\n\n**Check on an equilateral triangle.** There $O=H$, the nine points collapse to six (midpoints coincide with feet), and they do lie on a circle of half the radius ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите формулу Эйлера $OI^{2}=R^{2}-2Rr$ и выведите из неё неравенство $R\\ge2r$.",
    "en": "Prove Euler’s formula $OI^{2}=R^{2}-2Rr$ and deduce the inequality $R\\ge2r$."
   },
   "hint": {
    "ru": "Продлите биссектрису $AI$ до пересечения с описанной окружностью и примените степень точки.",
    "en": "Extend the bisector $AI$ to meet the circumcircle and use the power of a point."
   },
   "sol": {
    "ru": "Пусть $I$ — центр вписанной окружности, $O$ — центр описанной, а биссектриса угла $A$ пересекает описанную окружность вторично в точке $M$.\n\n**Шаг 1: степень точки $I$.** Так как $I$ лежит внутри окружности, её степень равна $$R^{2}-OI^{2}=IA\\cdot IM .$$ (Прямая $AM$ проходит через $I$ и пересекает окружность в $A$ и $M$.)\n\n**Шаг 2: чему равно $IM$.** Классическое «лемма о трилистнике»: $MI=MB=MC$. Действительно, $$\\angle MBI=\\angle MBC+\\angle CBI=\\frac{\\angle A}{2}+\\frac{\\angle B}{2} $$ (первое — вписанный угол на дугу $MC$, равной дуге $MB$), а $$\\angle MIB=\\angle IAB+\\angle IBA=\\frac{\\angle A}{2}+\\frac{\\angle B}{2} $$ как внешний угол треугольника $ABI$. Значит треугольник $MBI$ равнобедренный и $MI=MB$.\n\nПо теореме синусов в описанной окружности $$MB=2R\\sin\\frac{\\angle A}{2}\\quad\\Longrightarrow\\quad IM=2R\\sin\\frac{A}{2} .$$\n\n**Шаг 3: чему равно $IA$.** Опустим перпендикуляр из $I$ на сторону $AB$; его длина равна $r$, а угол при $A$ в получившемся прямоугольном треугольнике равен $\\tfrac A2$: $$IA=\\frac{r}{\\sin\\frac A2} .$$\n\n**Шаг 4: собираем.** $$R^{2}-OI^{2}=IA\\cdot IM=\\frac{r}{\\sin\\frac A2}\\cdot2R\\sin\\frac A2=2Rr ,$$ то есть $$OI^{2}=R^{2}-2Rr . \\qquad\\blacksquare$$\n\n**Неравенство Эйлера.** Левая часть неотрицательна, значит $$R^{2}-2Rr\\ \\ge\\ 0\\quad\\Longrightarrow\\quad R\\ \\ge\\ 2r ,$$ причём равенство достигается ровно при $OI=0$, то есть когда центры совпадают — у равностороннего треугольника. $\\blacksquare$\n\n**Проверка** на треугольнике $3,4,5$: $R=2{,}5$, $r=1$, и $$OI^{2}=6{,}25-5=1{,}25 ,$$ то есть $OI\\approx1{,}118$; при этом $2{,}5\\ge2$ ✓",
    "en": "Let $I$ be the incentre, $O$ the circumcentre, and let the bisector of angle $A$ meet the circumcircle again at $M$.\n\n**Step 1: the power of $I$.** Since $I$ is inside the circle, its power is $$R^{2}-OI^{2}=IA\\cdot IM $$ (the line $AM$ passes through $I$ and meets the circle at $A$ and $M$).\n\n**Step 2: the length $IM$.** The classical \"incentre–arc lemma\": $MI=MB=MC$. Indeed $$\\angle MBI=\\angle MBC+\\angle CBI=\\frac{\\angle A}{2}+\\frac{\\angle B}{2} $$ (the first being an inscribed angle on the arc $MC$, equal to arc $MB$), while $$\\angle MIB=\\angle IAB+\\angle IBA=\\frac{\\angle A}{2}+\\frac{\\angle B}{2} $$ as an exterior angle of triangle $ABI$. So triangle $MBI$ is isosceles and $MI=MB$.\n\nBy the law of sines in the circumcircle $$MB=2R\\sin\\frac{\\angle A}{2}\\quad\\Longrightarrow\\quad IM=2R\\sin\\frac{A}{2} .$$\n\n**Step 3: the length $IA$.** Drop a perpendicular from $I$ to $AB$; it has length $r$, and the angle at $A$ in the resulting right triangle is $\\tfrac A2$: $$IA=\\frac{r}{\\sin\\frac A2} .$$\n\n**Step 4: combine.** $$R^{2}-OI^{2}=IA\\cdot IM=\\frac{r}{\\sin\\frac A2}\\cdot2R\\sin\\frac A2=2Rr ,$$ that is $$OI^{2}=R^{2}-2Rr . \\qquad\\blacksquare$$\n\n**Euler’s inequality.** The left side is non-negative, so $$R^{2}-2Rr\\ \\ge\\ 0\\quad\\Longrightarrow\\quad R\\ \\ge\\ 2r ,$$ with equality exactly when $OI=0$, i.e. the centres coincide — the equilateral case. $\\blacksquare$\n\n**Check** on the $3,4,5$ triangle: $R=2.5$, $r=1$, so $$OI^{2}=6.25-5=1.25 ,$$ i.e. $OI\\approx1.118$; and $2.5\\ge2$ ✓"
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите теорему Симсона: основания перпендикуляров, опущенных из точки $P$ описанной окружности треугольника на его стороны, лежат на одной прямой.",
    "en": "Prove Simson’s theorem: the feet of the perpendiculars from a point $P$ on the circumcircle of a triangle to its sides are collinear."
   },
   "hint": {
    "ru": "Найдите несколько вписанных четырёхугольников с диаметрами $PA$, $PB$, $PC$.",
    "en": "Find cyclic quadrilaterals with diameters $PA$, $PB$, $PC$."
   },
   "sol": {
    "ru": "Пусть $P$ лежит на описанной окружности треугольника $ABC$, а $X$, $Y$, $Z$ — основания перпендикуляров из $P$ на прямые $BC$, $CA$, $AB$. Для определённости пусть $P$ лежит на дуге $BC$, не содержащей $A$.\n\n**Шаг 1: вспомогательные окружности.** Углы $\\angle PZB$ и $\\angle PXB$ прямые, значит точки $Z$ и $X$ лежат на окружности с диаметром $PB$; следовательно $PZBX$ — вписанный четырёхугольник. Точно так же $\\angle PYC=\\angle PXC=90^\\circ$ даёт вписанный четырёхугольник $PYCX$ (окружность с диаметром $PC$).\n\n**Шаг 2: считаем углы у точки $X$.** Из первого вписанного четырёхугольника $$\\angle PXZ=\\angle PBZ $$ (углы на одну дугу $PZ$). Из второго $$\\angle PXY=\\angle PCY $$ (углы на одну дугу $PY$).\n\n**Шаг 3: ключевое равенство.** Углы $\\angle PBZ$ и $\\angle PCY$ — это углы, под которыми видны из $B$ и из $C$ отрезки, связанные с $P$; так как $ABPC$ вписан, $$\\angle PBZ=\\angle PBA_{\\text{внеш}}=\\angle PCA=\\angle PCY $$ (противоположные углы вписанного четырёхугольника дополняют друг друга, и переход к смежному углу переводит одно в другое).\n\nЗначит $$\\angle PXZ=\\angle PXY .$$\n\n**Шаг 4: вывод.** Лучи $XZ$ и $XY$ образуют с лучом $XP$ равные углы и лежат по разные стороны от него, значит они дополняют друг друга до прямой: точки $Z$, $X$, $Y$ лежат на одной прямой. $\\blacksquare$\n\n**Эта прямая называется прямой Симсона** точки $P$.\n\n**Обратное тоже верно:** если три основания перпендикуляров коллинеарны, точка лежит на описанной окружности.\n\n**Крайний случай.** Если $P$ совпадает с вершиной, прямая Симсона превращается в высоту из этой вершины.",
    "en": "Let $P$ lie on the circumcircle of triangle $ABC$, and let $X$, $Y$, $Z$ be the feet of the perpendiculars from $P$ to the lines $BC$, $CA$, $AB$. Say $P$ lies on the arc $BC$ not containing $A$.\n\n**Step 1: auxiliary circles.** The angles $\\angle PZB$ and $\\angle PXB$ are right, so $Z$ and $X$ lie on the circle with diameter $PB$: the quadrilateral $PZBX$ is cyclic. Likewise $\\angle PYC=\\angle PXC=90^\\circ$ makes $PYCX$ cyclic (circle with diameter $PC$).\n\n**Step 2: angles at $X$.** From the first cyclic quadrilateral $$\\angle PXZ=\\angle PBZ $$ (angles on the arc $PZ$). From the second $$\\angle PXY=\\angle PCY $$ (angles on the arc $PY$).\n\n**Step 3: the key equality.** Since $ABPC$ is cyclic, $$\\angle PBZ=\\angle PCA=\\angle PCY $$ (opposite angles of a cyclic quadrilateral are supplementary, and passing to the adjacent angle converts one into the other).\n\nHence $$\\angle PXZ=\\angle PXY .$$\n\n**Step 4: conclusion.** The rays $XZ$ and $XY$ make equal angles with the ray $XP$ and lie on opposite sides of it, so together they form a straight line: $Z$, $X$, $Y$ are collinear. $\\blacksquare$\n\n**This line is called the Simson line** of $P$.\n\n**The converse holds too:** if the three feet are collinear, the point lies on the circumcircle.\n\n**Extreme case.** If $P$ coincides with a vertex, the Simson line becomes the altitude from that vertex."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите теорему о бабочке: через середину $M$ хорды $PQ$ проведены две другие хорды $AB$ и $CD$; прямые $AD$ и $BC$ пересекают $PQ$ в точках $X$ и $Y$. Тогда $MX=MY$.",
    "en": "Prove the butterfly theorem: through the midpoint $M$ of a chord $PQ$ two other chords $AB$ and $CD$ are drawn; the lines $AD$ and $BC$ meet $PQ$ at $X$ and $Y$. Then $MX=MY$."
   },
   "hint": {
    "ru": "Опустите перпендикуляры из центра на хорды $AD$ и $BC$ и найдите подобные треугольники.",
    "en": "Drop perpendiculars from the centre to the chords $AD$ and $BC$ and find similar triangles."
   },
   "sol": {
    "ru": "Обозначим $O$ — центр окружности, $a=MX$, $b=MY$, и пусть $PM=MQ=m$.\n\n**Шаг 1: подобие.** Треугольники $AMD$ и $CMB$ имеют равные углы: $$\\angle MAD=\\angle BAD=\\angle BCD=\\angle MCB $$ (вписанные углы на дугу $BD$), и $$\\angle AMD=\\angle CMB $$ (вертикальные). Значит $$\\triangle AMD\\sim\\triangle CMB .$$\n\n**Шаг 2: переносим подобие на отрезки хорды.** Опустим из $O$ перпендикуляры на хорды $AD$ и $BC$; их основания $E$ и $F$ — середины этих хорд. Треугольники $MEX$ и $MFY$ подобны: угол при $M$ у них равен (из шага 1 следует $\\angle MXE=\\angle MYF$, так как соответственные углы подобных треугольников), а углы при $E$ и $F$ прямые... точнее, подобие $\\triangle AMD\\sim\\triangle CMB$ даёт равенство соответственных отрезков к серединам: $$\\frac{ME}{MF}=\\frac{MD}{MB} .$$\n\n**Шаг 3: степень точки.** Четырёхугольники $OEXM$ и $OFYM$ вписанные (у каждого два прямых угла: при $E$ (или $F$) и при $M$, если считать $OM\\perp PQ$ — а это так, ведь $M$ — середина хорды $PQ$). Значит $$\\angle MOX=\\angle MEX,\\qquad \\angle MOY=\\angle MFY ,$$ и из шага 2 эти углы равны, откуда $$\\angle MOX=\\angle MOY .$$\n\n**Шаг 4: вывод.** Треугольники $OMX$ и $OMY$ имеют общий катет $OM$, прямые углы при $M$ и равные углы при $O$, значит они равны, и $$MX=MY . \\qquad\\blacksquare$$\n\n**Почему «бабочка».** Треугольники $AMD$ и $CMB$ вместе напоминают крылья бабочки, а хорда $PQ$ — её тело.\n\n**Существенно**, что $M$ — именно **середина** $PQ$: для произвольной точки утверждение неверно.",
    "en": "Let $O$ be the centre, $a=MX$, $b=MY$, and $PM=MQ=m$.\n\n**Step 1: similarity.** Triangles $AMD$ and $CMB$ have equal angles: $$\\angle MAD=\\angle BAD=\\angle BCD=\\angle MCB $$ (inscribed angles on the arc $BD$) and $$\\angle AMD=\\angle CMB $$ (vertical). So $$\\triangle AMD\\sim\\triangle CMB .$$\n\n**Step 2: transfer to the chord midpoints.** Drop perpendiculars from $O$ to the chords $AD$ and $BC$; their feet $E$ and $F$ are the midpoints of these chords. The similarity of Step 1 gives the corresponding ratio $$\\frac{ME}{MF}=\\frac{MD}{MB} ,$$ and the corresponding angles at $X$ and $Y$ are equal: $\\angle MXE=\\angle MYF$.\n\n**Step 3: two cyclic quadrilaterals.** Since $M$ is the midpoint of $PQ$, we have $OM\\perp PQ$. Hence $OEXM$ has right angles at $E$ and $M$, so it is cyclic; likewise $OFYM$. Therefore $$\\angle MOX=\\angle MEX,\\qquad \\angle MOY=\\angle MFY ,$$ and by Step 2 these are equal, so $$\\angle MOX=\\angle MOY .$$\n\n**Step 4: conclusion.** Triangles $OMX$ and $OMY$ share the leg $OM$, have right angles at $M$ and equal angles at $O$, hence are congruent and $$MX=MY . \\qquad\\blacksquare$$\n\n**Why \"butterfly\".** Triangles $AMD$ and $CMB$ together look like a pair of wings, with the chord $PQ$ as the body.\n\n**It matters** that $M$ is the **midpoint** of $PQ$: for a general point the statement is false."
   }
  },
  {
   "src": "Классическая задача / Classic",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что радикальные оси трёх попарно неконцентрических окружностей, центры которых не лежат на одной прямой, пересекаются в одной точке (радикальный центр).",
    "en": "Prove that the radical axes of three pairwise non-concentric circles with non-collinear centres meet at one point (the radical centre)."
   },
   "hint": {
    "ru": "Возьмите точку пересечения двух осей и посчитайте её степени.",
    "en": "Take the intersection of two axes and compare its powers."
   },
   "sol": {
    "ru": "Обозначим окружности $\\omega_1,\\omega_2,\\omega_3$ и через $\\operatorname{pow}_i(M)$ — степень точки $M$ относительно $\\omega_i$.\n\n**Шаг 1: оси пересекаются.** Радикальная ось пары $(\\omega_1,\\omega_2)$ перпендикулярна прямой $O_1O_2$, а ось пары $(\\omega_2,\\omega_3)$ — прямой $O_2O_3$. Центры не лежат на одной прямой, значит прямые $O_1O_2$ и $O_2O_3$ не параллельны, а тогда и перпендикулярные им оси не параллельны и пересекаются в некоторой точке $M$.\n\n**Шаг 2: считаем степени.** Точка $M$ лежит на первой оси, значит $$\\operatorname{pow}_1(M)=\\operatorname{pow}_2(M) .$$ Она лежит и на второй, значит $$\\operatorname{pow}_2(M)=\\operatorname{pow}_3(M) .$$\n\nПо транзитивности $$\\operatorname{pow}_1(M)=\\operatorname{pow}_3(M) ,$$ то есть $M$ лежит и на радикальной оси пары $(\\omega_1,\\omega_3)$.\n\nЗначит все три оси проходят через $M$. $\\blacksquare$\n\n**Как это применяют.** Классический приём: чтобы доказать, что три прямые пересекаются в одной точке, достаточно предъявить три окружности, для которых эти прямые — радикальные оси.\n\n**Пример.** Если три окружности попарно пересекаются, их общие хорды (продолженные) пересекаются в одной точке.\n\n**Замечание.** Если центры лежат на одной прямой, все три оси перпендикулярны ей, то есть параллельны, и общей точки может не быть.",
    "en": "Write $\\omega_1,\\omega_2,\\omega_3$ for the circles and $\\operatorname{pow}_i(M)$ for the power of $M$ with respect to $\\omega_i$.\n\n**Step 1: two axes meet.** The radical axis of $(\\omega_1,\\omega_2)$ is perpendicular to $O_1O_2$, and that of $(\\omega_2,\\omega_3)$ to $O_2O_3$. The centres are not collinear, so $O_1O_2$ and $O_2O_3$ are not parallel; hence neither are the two axes, and they meet at some point $M$.\n\n**Step 2: compare powers.** As $M$ lies on the first axis, $$\\operatorname{pow}_1(M)=\\operatorname{pow}_2(M) ,$$ and as it lies on the second, $$\\operatorname{pow}_2(M)=\\operatorname{pow}_3(M) .$$\n\nBy transitivity $$\\operatorname{pow}_1(M)=\\operatorname{pow}_3(M) ,$$ so $M$ also lies on the radical axis of $(\\omega_1,\\omega_3)$.\n\nAll three axes pass through $M$. $\\blacksquare$\n\n**How it is used.** A classic device: to prove three lines are concurrent, exhibit three circles for which they are the radical axes.\n\n**Example.** If three circles pairwise intersect, their common chords (extended) are concurrent.\n\n**Remark.** If the centres are collinear, all three axes are perpendicular to that line, hence parallel, and there may be no common point."
   }
  }
 ]
};
