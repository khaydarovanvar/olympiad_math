# -*- coding: utf-8 -*-
"""Topic 11 — Circles."""

FIG_INSC = r'''<svg viewBox="0 0 400 280" role="img" aria-label="Inscribed angle and the central angle on the same arc">
<circle class="ln" cx="200" cy="140" r="100"/>
<path class="ln" d="M166 46 L106 174 M166 46 L294 174"/>
<path class="lnc" d="M106 174 L200 140 L294 174"/>
<circle class="pt" cx="200" cy="140" r="3.5"/><circle class="pt" cx="166" cy="46" r="3.5"/>
<circle class="pt" cx="106" cy="174" r="3.5"/><circle class="pt" cx="294" cy="174" r="3.5"/>
<text x="158" y="32">A</text><text x="84" y="188">B</text><text x="300" y="188">C</text>
<text x="208" y="134">O</text>
<text class="acc" x="160" y="76">&#945;</text><text class="acc" x="188" y="168">2&#945;</text>
</svg>'''

FIG_SEMI = r'''<svg viewBox="0 0 400 280" role="img" aria-label="An angle subtended by a diameter is right">
<circle class="ln" cx="200" cy="140" r="100"/>
<path class="lnc" d="M100 140 H300"/>
<path class="ln" d="M150 53 L100 140 M150 53 L300 140"/>
<path class="ln" d="M156 65 L167 59 L173 70"/>
<circle class="pt" cx="200" cy="140" r="3"/><circle class="pt" cx="100" cy="140" r="3.5"/>
<circle class="pt" cx="300" cy="140" r="3.5"/><circle class="pt" cx="150" cy="53" r="3.5"/>
<text x="76" y="136">B</text><text x="306" y="136">C</text><text x="142" y="38">A</text>
<text x="196" y="160">O</text>
</svg>'''

FIG_TANG = r'''<svg viewBox="0 0 400 280" role="img" aria-label="Two tangents drawn from an external point">
<circle class="ln" cx="150" cy="140" r="70"/>
<path class="dsh" d="M150 140 L340 140 M150 140 L176 75 M150 140 L176 205"/>
<path class="lnc" d="M340 140 L176 75 M340 140 L176 205"/>
<circle class="pt" cx="150" cy="140" r="3.5"/><circle class="pt" cx="340" cy="140" r="3.5"/>
<circle class="ptc" cx="176" cy="75" r="3.5"/><circle class="ptc" cx="176" cy="205" r="3.5"/>
<text x="132" y="156">O</text><text x="348" y="146">P</text>
<text class="acc" x="164" y="60">M</text><text class="acc" x="164" y="224">N</text>
</svg>'''

FIG_CYCLIC = r'''<svg viewBox="0 0 400 280" role="img" aria-label="A cyclic quadrilateral">
<circle class="ln" cx="200" cy="140" r="100"/>
<path class="lnc" d="M102 157 L183 42 L287 90 L250 227 Z"/>
<circle class="pt" cx="102" cy="157" r="3.5"/><circle class="pt" cx="183" cy="42" r="3.5"/>
<circle class="pt" cx="287" cy="90" r="3.5"/><circle class="pt" cx="250" cy="227" r="3.5"/>
<text x="78" y="164">B</text><text x="176" y="28">A</text>
<text x="296" y="86">D</text><text x="252" y="248">C</text>
</svg>'''

FIG_CHORDS = r'''<svg viewBox="0 0 400 280" role="img" aria-label="Two chords meeting inside a circle">
<circle class="ln" cx="200" cy="140" r="100"/>
<path class="lnc" d="M113 90 L287 190"/><path class="lnc" d="M113 190 L277 76"/>
<circle class="pt" cx="113" cy="90" r="3.5"/><circle class="pt" cx="287" cy="190" r="3.5"/>
<circle class="pt" cx="113" cy="190" r="3.5"/><circle class="pt" cx="277" cy="76" r="3.5"/>
<circle class="ptc" cx="192" cy="135" r="4"/>
<text x="92" y="84">A</text><text x="292" y="200">B</text>
<text x="92" y="204">C</text><text x="284" y="70">D</text>
<text class="acc" x="196" y="152">P</text>
</svg>'''

LESSON = {
 'n': 11,
 'cat': 'geo',
 'title': {'ru': 'Окружности', 'en': 'Circles'},
 'sub': {'ru': 'Вписанный угол, касательные, вписанные и описанные четырёхугольники, степень точки и теорема Птолемея.',
         'en': 'Inscribed angles, tangents, cyclic and tangential quadrilaterals, the power of a point and Ptolemy’s theorem.'},
 'goals': {
  'ru': [
   r'Уверенно применять теорему о вписанном угле и её следствия.',
   r'Пользоваться свойствами касательной: перпендикулярность радиусу и равенство отрезков касательных.',
   r'Узнавать вписанные четырёхугольники и доказывать, что четыре точки лежат на одной окружности.',
   r'Применять степень точки: пересекающиеся хорды, секущая и касательная.',
  ],
  'en': [
   r'Apply the inscribed angle theorem and its corollaries with confidence.',
   r'Use the tangent properties: perpendicularity to the radius, and equal tangent segments.',
   r'Recognise cyclic quadrilaterals and prove that four points lie on one circle.',
   r'Use the power of a point: intersecting chords, and a secant with a tangent.',
  ]},

 'sections': [

  # ------------------------------------------------------------------ 1
  {'h': {'ru': 'Вписанный угол', 'en': 'The inscribed angle'},
   'blocks': [
    {'t': 'def',
     'name': {'ru': 'Центральный и вписанный углы', 'en': 'Central and inscribed angles'},
     'text': {
      'ru': r'**Центральный угол** — угол с вершиной в центре окружности. **Вписанный угол** — угол, вершина которого лежит на окружности, а стороны пересекают её. Говорят, что угол **опирается** на дугу, заключённую между его сторонами.',
      'en': r'A **central angle** has its vertex at the centre of the circle. An **inscribed angle** has its vertex on the circle and both arms meeting it. The angle is said to **subtend** the arc cut off between its arms.'}},

    {'t': 'thm',
     'name': {'ru': 'Теорема о вписанном угле', 'en': 'The inscribed angle theorem'},
     'text': {
      'ru': r'Вписанный угол равен половине центрального угла, опирающегося на ту же дугу.',
      'en': r'An inscribed angle is half the central angle subtending the same arc.'}},

    {'t': 'fig', 'svg': FIG_INSC,
     'cap': {'ru': 'Вписанный угол $\\angle BAC=\\alpha$ и центральный угол $\\angle BOC=2\\alpha$ опираются на одну и ту же дугу $BC$.',
             'en': 'The inscribed angle $\\angle BAC=\\alpha$ and the central angle $\\angle BOC=2\\alpha$ subtend the same arc $BC$.'}},

    {'t': 'proof',
     'text': {
      'ru': r'Разберём основной случай, когда центр $O$ лежит **внутри** угла $BAC$. Проведём диаметр из точки $A$ через центр $O$ и обозначим через $D$ его второй конец. Пусть $$\angle BAO=\alpha_1,\qquad \angle CAO=\alpha_2,\qquad\text{так что }\ \angle BAC=\alpha_1+\alpha_2 .$$\n\n**Треугольник $OAB$ равнобедренный:** $OA=OB=R$, значит $\angle OBA=\angle OAB=\alpha_1$. Угол $\angle BOD$ — внешний угол этого треугольника при вершине $O$, поэтому $$\angle BOD=\alpha_1+\alpha_1=2\alpha_1 .$$\n\n**Точно так же** из треугольника $OAC$ получаем $\angle COD=2\alpha_2$.\n\nСкладывая, $$\angle BOC=\angle BOD+\angle COD=2\left(\alpha_1+\alpha_2\right)=2\,\angle BAC . \qquad\blacksquare$$\n\nОстальные случаи (центр на стороне угла или вне его) разбираются так же — с одной такой парой вместо двух или с разностью вместо суммы.',
      'en': r'Take the main case, with the centre $O$ **inside** the angle $BAC$. Draw the diameter from $A$ through $O$ and call its far end $D$. Put $$\angle BAO=\alpha_1,\qquad \angle CAO=\alpha_2,\qquad\text{so that }\ \angle BAC=\alpha_1+\alpha_2 .$$\n\n**The triangle $OAB$ is isosceles:** $OA=OB=R$, so $\angle OBA=\angle OAB=\alpha_1$. The angle $\angle BOD$ is the exterior angle of that triangle at $O$, hence $$\angle BOD=\alpha_1+\alpha_1=2\alpha_1 .$$\n\n**In the same way** the triangle $OAC$ gives $\angle COD=2\alpha_2$.\n\nAdding, $$\angle BOC=\angle BOD+\angle COD=2\left(\alpha_1+\alpha_2\right)=2\,\angle BAC . \qquad\blacksquare$$\n\nThe other cases (the centre on an arm, or outside the angle) go the same way — with one such pair instead of two, or with a difference instead of a sum.'}},

    {'t': 'idea',
     'name': {'ru': 'Три следствия, которые решают задачи', 'en': 'Three corollaries that solve problems'},
     'text': {
      'ru': r'**1)** Вписанные углы, опирающиеся на **одну и ту же дугу**, равны. Это самый частый инструмент в задачах на окружности.\n\n**2)** Угол, опирающийся на **диаметр**, прямой (центральный угол развёрнутый, значит вписанный равен $90^\circ$).\n\n**3)** Обратно: если отрезок $BC$ виден из точки $A$ под прямым углом, то $A$ лежит на окружности с диаметром $BC$.',
      'en': r'**1)** Inscribed angles subtending the **same arc** are equal. This is the commonest tool in circle problems.\n\n**2)** An angle subtending a **diameter** is right (the central angle is straight, so the inscribed one is $90^\circ$).\n\n**3)** Conversely: if a segment $BC$ is seen from a point $A$ at a right angle, then $A$ lies on the circle with diameter $BC$.'}},

    {'t': 'fig', 'svg': FIG_SEMI,
     'cap': {'ru': '$BC$ — диаметр, поэтому $\\angle BAC=90^\\circ$ при любом положении точки $A$ на окружности.',
             'en': '$BC$ is a diameter, so $\\angle BAC=90^\\circ$ wherever $A$ sits on the circle.'}},

    {'t': 'ex',
     'q': {'ru': r'Хорда окружности радиуса $10$ удалена от центра на $6$. Найдите её длину.',
           'en': r'A chord of a circle of radius $10$ is at distance $6$ from the centre. Find its length.'},
     'steps': {
      'ru': [r'Перпендикуляр, опущенный из центра на хорду, делит её пополам: получается два равных прямоугольных треугольника.',
             r'В таком треугольнике гипотенуза — радиус $10$, один катет — расстояние $6$.',
             r'Второй катет равен $\sqrt{10^{2}-6^{2}}=\sqrt{64}=8$ — это половина хорды.',
             r'Значит хорда равна $16$.'],
      'en': [r'The perpendicular from the centre to a chord bisects it, giving two congruent right triangles.',
             r'In such a triangle the hypotenuse is the radius $10$ and one leg is the distance $6$.',
             r'The other leg is $\sqrt{10^{2}-6^{2}}=\sqrt{64}=8$ — half the chord.',
             r'So the chord is $16$.']},
     'ans': {'ru': r'$16$.', 'en': r'$16$.'}},
   ]},

  # ------------------------------------------------------------------ 2
  {'h': {'ru': 'Касательная', 'en': 'Tangents'},
   'blocks': [
    {'t': 'thm',
     'name': {'ru': 'Касательная и радиус', 'en': 'Tangent and radius'},
     'text': {
      'ru': r'Прямая является касательной к окружности тогда и только тогда, когда она перпендикулярна радиусу, проведённому в точку касания.',
      'en': r'A line is tangent to a circle if and only if it is perpendicular to the radius drawn to the point of contact.'}},

    {'t': 'thm',
     'name': {'ru': 'Отрезки касательных', 'en': 'Tangent segments'},
     'text': {
      'ru': r'Отрезки двух касательных, проведённых к окружности из одной точки, равны. Более того, прямая, соединяющая эту точку с центром, делит угол между касательными пополам.',
      'en': r'The two tangent segments from a point to a circle are equal. Moreover, the line from that point to the centre bisects the angle between the tangents.'}},

    {'t': 'fig', 'svg': FIG_TANG,
     'cap': {'ru': 'Касательные $PM$ и $PN$ равны, а прямая $OP$ — ось симметрии картинки.',
             'en': 'The tangents $PM$ and $PN$ are equal, and the line $OP$ is the axis of symmetry of the picture.'}},

    {'t': 'proof',
     'text': {
      'ru': r'Сравним прямоугольные треугольники $OMP$ и $ONP$:\n\n$OM=ON=R$ — радиусы;\n$OP$ — общая гипотенуза;\n$\angle OMP=\angle ONP=90^\circ$ — по предыдущей теореме.\n\nПо признаку равенства прямоугольных треугольников (по гипотенузе и катету) они равны. Отсюда $PM=PN$ и $\angle MPO=\angle NPO$. $\blacksquare$',
      'en': r'Compare the right triangles $OMP$ and $ONP$:\n\n$OM=ON=R$ — radii;\n$OP$ — a common hypotenuse;\n$\angle OMP=\angle ONP=90^\circ$ — by the previous theorem.\n\nBy the hypotenuse–leg criterion they are congruent. Hence $PM=PN$ and $\angle MPO=\angle NPO$. $\blacksquare$'}},

    {'t': 'thm',
     'name': {'ru': 'Угол между касательной и хордой', 'en': 'The tangent–chord angle'},
     'text': {
      'ru': r'Угол между касательной и хордой, проведённой из точки касания, равен вписанному углу, опирающемуся на эту хорду с другой стороны.',
      'en': r'The angle between a tangent and a chord drawn from the point of contact equals the inscribed angle subtending that chord from the other side.'}},

    {'t': 'proof',
     'text': {
      'ru': r'Пусть $PT$ — касательная в точке $T$, $TB$ — хорда, а $A$ — точка на большей дуге $TB$. Проведём диаметр $TD$. Тогда $\angle DTP=90^\circ$, а угол $\angle TBD=90^\circ$, потому что он опирается на диаметр.\n\nВ треугольнике $TBD$ сумма острых углов равна $90^\circ$, поэтому $$\angle BTD=90^\circ-\angle TDB .$$ Отсюда $$\angle BTP=90^\circ-\angle BTD=\angle TDB .$$ Но $\angle TDB$ и $\angle TAB$ — вписанные углы, опирающиеся на одну и ту же дугу $TB$, значит они равны. Следовательно $\angle BTP=\angle TAB$. $\blacksquare$',
      'en': r'Let $PT$ be the tangent at $T$, let $TB$ be a chord and let $A$ be a point on the major arc $TB$. Draw the diameter $TD$. Then $\angle DTP=90^\circ$, and $\angle TBD=90^\circ$ because it subtends a diameter.\n\nIn the triangle $TBD$ the acute angles add to $90^\circ$, so $$\angle BTD=90^\circ-\angle TDB ,$$ hence $$\angle BTP=90^\circ-\angle BTD=\angle TDB .$$ But $\angle TDB$ and $\angle TAB$ are inscribed angles on the same arc $TB$, hence equal. Therefore $\angle BTP=\angle TAB$. $\blacksquare$'}},

    {'t': 'ex',
     'q': {'ru': r'Из точки $P$ проведены две касательные к окружности радиуса $5$, угол между ними равен $60^\circ$. Найдите длину касательной и расстояние от $P$ до центра.',
           'en': r'Two tangents to a circle of radius $5$ are drawn from a point $P$, meeting at an angle of $60^\circ$. Find the length of a tangent and the distance from $P$ to the centre.'},
     'steps': {
      'ru': [r'Прямая $OP$ делит угол между касательными пополам, поэтому в прямоугольном треугольнике $OMP$ угол при вершине $P$ равен $30^\circ$.',
             r'Катет $OM=5$ лежит против угла $30^\circ$, значит гипотенуза вдвое больше: $OP=10$.',
             r'Второй катет: $PM=\sqrt{10^{2}-5^{2}}=\sqrt{75}=5\sqrt3$.'],
      'en': [r'The line $OP$ bisects the angle between the tangents, so in the right triangle $OMP$ the angle at $P$ is $30^\circ$.',
             r'The leg $OM=5$ lies opposite the $30^\circ$ angle, so the hypotenuse is twice as long: $OP=10$.',
             r'The other leg: $PM=\sqrt{10^{2}-5^{2}}=\sqrt{75}=5\sqrt3$.']},
     'ans': {'ru': r'$PM=5\sqrt3\approx8{,}66$ и $OP=10$.',
             'en': r'$PM=5\sqrt3\approx8.66$ and $OP=10$.'}},
   ]},

  # ------------------------------------------------------------------ 3
  {'h': {'ru': 'Вписанные четырёхугольники', 'en': 'Cyclic quadrilaterals'},
   'blocks': [
    {'t': 'thm',
     'name': {'ru': 'Критерий вписанности', 'en': 'The cyclic criterion'},
     'text': {
      'ru': r'Выпуклый четырёхугольник вписан в окружность **тогда и только тогда**, когда суммы его противоположных углов равны $180^\circ$: $$\angle A+\angle C=\angle B+\angle D=180^\circ .$$',
      'en': r'A convex quadrilateral is cyclic **if and only if** its opposite angles add up to $180^\circ$: $$\angle A+\angle C=\angle B+\angle D=180^\circ .$$'}},

    {'t': 'fig', 'svg': FIG_CYCLIC,
     'cap': {'ru': 'Четырёхугольник $ABDC$ вписан в окружность; суммы противоположных углов равны $180^\\circ$.',
             'en': 'The quadrilateral $ABDC$ is inscribed in a circle; its opposite angles add up to $180^\\circ$.'}},

    {'t': 'proof',
     'text': {
      'ru': r'**Необходимость.** Углы $A$ и $C$ — вписанные и опираются на две дуги, которые вместе составляют всю окружность, то есть $360^\circ$. По теореме о вписанном угле каждый из них равен половине своей дуги, поэтому $$\angle A+\angle C=\frac{360^\circ}{2}=180^\circ .$$\n\n**Достаточность.** Пусть в четырёхугольнике $ABCD$ выполнено $\angle A+\angle C=180^\circ$. Проведём окружность через три точки $A$, $B$, $D$ (через три точки, не лежащие на одной прямой, окружность проходит ровно одна). Если бы точка $C$ не лежала на этой окружности, то луч $DC$ пересекал бы окружность в некоторой другой точке $C^{\ast}$. Для вписанного четырёхугольника $ABDC^{\ast}$ по доказанному $\angle A+\angle C^{\ast}=180^\circ$, значит $\angle C^{\ast}=\angle C$. Но углы $\angle BCD$ и $\angle BC^{\ast}D$ — это углы, под которыми отрезок $BD$ виден из двух разных точек одного луча, и они различны (у одного из треугольников угол является внешним для другого). Противоречие. $\blacksquare$',
      'en': r'**Necessity.** The angles $A$ and $C$ are inscribed and subtend two arcs which together make the whole circle, that is $360^\circ$. Each is half its arc, so $$\angle A+\angle C=\frac{360^\circ}{2}=180^\circ .$$\n\n**Sufficiency.** Suppose $\angle A+\angle C=180^\circ$ in a quadrilateral $ABCD$. Draw the circle through the three points $A$, $B$, $D$ (exactly one circle passes through three non-collinear points). If $C$ were not on it, the ray $DC$ would meet the circle at some other point $C^{\ast}$. For the cyclic quadrilateral $ABDC^{\ast}$ we have $\angle A+\angle C^{\ast}=180^\circ$, so $\angle C^{\ast}=\angle C$. But $\angle BCD$ and $\angle BC^{\ast}D$ are the angles under which $BD$ is seen from two different points of one ray, and they differ (one is an exterior angle of the triangle containing the other). Contradiction. $\blacksquare$'}},

    {'t': 'idea',
     'name': {'ru': 'Как доказать, что четыре точки лежат на окружности', 'en': 'How to prove four points concyclic'},
     'text': {
      'ru': r'Три рабочих способа, в порядке частоты:\n\n**1)** Показать, что сумма противоположных углов равна $180^\circ$.\n\n**2)** Показать, что отрезок виден из двух точек, лежащих **по одну сторону** от него, под равными углами: если $\angle ACB=\angle ADB$, то $A,B,C,D$ лежат на одной окружности.\n\n**3)** Показать, что все четыре точки видны из некоторой точки под прямым углом на общий отрезок — тогда они лежат на окружности с этим отрезком в качестве диаметра.',
      'en': r'Three working methods, in order of frequency:\n\n**1)** Show that a pair of opposite angles adds to $180^\circ$.\n\n**2)** Show that a segment is seen at equal angles from two points **on the same side** of it: if $\angle ACB=\angle ADB$ then $A,B,C,D$ are concyclic.\n\n**3)** Show that all four points see one common segment at a right angle — then they lie on the circle with that segment as diameter.'}},

    {'t': 'note',
     'text': {
      'ru': r'Приём номер три особенно полезен в задачах с высотами. Например, если $BH_1$ и $CH_2$ — высоты треугольника $ABC$, то точки $H_1$ и $H_2$ видят отрезок $BC$ под прямым углом, значит $B$, $C$, $H_1$, $H_2$ лежат на одной окружности с диаметром $BC$.',
      'en': r'Method three is especially useful with altitudes. For instance, if $BH_1$ and $CH_2$ are altitudes of a triangle $ABC$, then $H_1$ and $H_2$ see the segment $BC$ at a right angle, so $B$, $C$, $H_1$, $H_2$ lie on one circle with diameter $BC$.'}},
   ]},

  # ------------------------------------------------------------------ 4
  {'h': {'ru': 'Степень точки', 'en': 'The power of a point'},
   'blocks': [
    {'t': 'thm',
     'name': {'ru': 'Пересекающиеся хорды', 'en': 'Intersecting chords'},
     'text': {
      'ru': r'Если хорды $AB$ и $CD$ пересекаются в точке $P$ внутри окружности, то $$PA\cdot PB=PC\cdot PD .$$',
      'en': r'If chords $AB$ and $CD$ meet at a point $P$ inside a circle, then $$PA\cdot PB=PC\cdot PD .$$'}},

    {'t': 'fig', 'svg': FIG_CHORDS,
     'cap': {'ru': 'Хорды $AB$ и $CD$ пересекаются в точке $P$: произведения отрезков равны.',
             'en': 'The chords $AB$ and $CD$ meet at $P$: the products of the pieces are equal.'}},

    {'t': 'proof',
     'text': {
      'ru': r'Сравним треугольники $APC$ и $DPB$.\n\n$\angle APC=\angle DPB$ — вертикальные углы.\n\n$\angle CAP=\angle BDP$ — это вписанные углы $\angle CAB$ и $\angle CDB$, опирающиеся на одну и ту же дугу $CB$.\n\nПо двум углам треугольники подобны, поэтому $$\frac{PA}{PD}=\frac{PC}{PB}\quad\Longrightarrow\quad PA\cdot PB=PC\cdot PD . \qquad\blacksquare$$',
      'en': r'Compare the triangles $APC$ and $DPB$.\n\n$\angle APC=\angle DPB$ — vertical angles.\n\n$\angle CAP=\angle BDP$ — these are the inscribed angles $\angle CAB$ and $\angle CDB$ on the same arc $CB$.\n\nTwo angles make the triangles similar, so $$\frac{PA}{PD}=\frac{PC}{PB}\quad\Longrightarrow\quad PA\cdot PB=PC\cdot PD . \qquad\blacksquare$$'}},

    {'t': 'thm',
     'name': {'ru': 'Секущая и касательная', 'en': 'Secant and tangent'},
     'text': {
      'ru': r'Пусть из точки $P$ вне окружности проведены касательная $PT$ и секущая, пересекающая окружность в точках $A$ и $B$. Тогда $$PT^{2}=PA\cdot PB .$$',
      'en': r'From a point $P$ outside a circle draw a tangent $PT$ and a secant meeting the circle at $A$ and $B$. Then $$PT^{2}=PA\cdot PB .$$'}},

    {'t': 'proof',
     'text': {
      'ru': r'Сравним треугольники $PTA$ и $PBT$.\n\nУгол при вершине $P$ у них общий.\n\n$\angle PTA=\angle PBT$: слева — угол между касательной $PT$ и хордой $TA$, справа — вписанный угол, опирающийся на ту же хорду; они равны по теореме об угле между касательной и хордой.\n\nЗначит треугольники подобны, и $$\frac{PT}{PB}=\frac{PA}{PT}\quad\Longrightarrow\quad PT^{2}=PA\cdot PB . \qquad\blacksquare$$',
      'en': r'Compare the triangles $PTA$ and $PBT$.\n\nThey share the angle at $P$.\n\n$\angle PTA=\angle PBT$: on the left the tangent–chord angle between $PT$ and the chord $TA$, on the right the inscribed angle on the same chord; the tangent–chord theorem makes them equal.\n\nSo the triangles are similar and $$\frac{PT}{PB}=\frac{PA}{PT}\quad\Longrightarrow\quad PT^{2}=PA\cdot PB . \qquad\blacksquare$$'}},

    {'t': 'idea',
     'name': {'ru': 'Одно число вместо трёх теорем', 'en': 'One number instead of three theorems'},
     'text': {
      'ru': r'Все три утверждения — одно и то же. **Степенью точки $P$** относительно окружности с центром $O$ и радиусом $R$ называют число $$\deg(P)=OP^{2}-R^{2}.$$ Для любой прямой через $P$, пересекающей окружность в точках $X$ и $Y$, произведение $\overline{PX}\cdot\overline{PY}$ (со знаками) равно степени точки. Внутри окружности степень отрицательна, снаружи положительна, на окружности равна нулю, а для касательной $PT^{2}=\deg(P)$.',
      'en': r'All three statements are one. The **power of a point $P$** with respect to a circle of centre $O$ and radius $R$ is the number $$\operatorname{pow}(P)=OP^{2}-R^{2}.$$ For any line through $P$ meeting the circle at $X$ and $Y$, the signed product $\overline{PX}\cdot\overline{PY}$ equals the power. Inside the circle it is negative, outside positive, on the circle zero, and for a tangent $PT^{2}=\operatorname{pow}(P)$.'}},

    {'t': 'ex',
     'q': {'ru': r'Хорды $AB$ и $CD$ пересекаются в точке $P$, причём $AP=4$, $PB=6$ и $CP=3$. Найдите $PD$ и длину хорды $CD$.',
           'en': r'Chords $AB$ and $CD$ meet at $P$ with $AP=4$, $PB=6$ and $CP=3$. Find $PD$ and the length of the chord $CD$.'},
     'steps': {
      'ru': [r'По теореме о пересекающихся хордах $PA\cdot PB=PC\cdot PD$.',
             r'Подставляем: $4\cdot6=3\cdot PD$, то есть $24=3\,PD$.',
             r'Значит $PD=8$.',
             r'Хорда $CD=CP+PD=3+8=11$.'],
      'en': [r'The intersecting chords theorem gives $PA\cdot PB=PC\cdot PD$.',
             r'Substituting: $4\cdot6=3\cdot PD$, that is $24=3\,PD$.',
             r'So $PD=8$.',
             r'The chord $CD=CP+PD=3+8=11$.']},
     'ans': {'ru': r'$PD=8$, $CD=11$.', 'en': r'$PD=8$, $CD=11$.'}},
   ]},

  # ------------------------------------------------------------------ 5
  {'h': {'ru': 'Вписанная и описанная окружности треугольника', 'en': 'The incircle and circumcircle of a triangle'},
   'blocks': [
    {'t': 'p',
     'text': {
      'ru': r'В любой треугольник можно вписать окружность, и около любого треугольника можно описать окружность — и то и другое единственным образом.',
      'en': r'Every triangle has an inscribed circle and a circumscribed circle, and each of them is unique.'}},

    {'t': 'ul',
     'items': {
      'ru': [
       r'**Центр вписанной окружности** — точка пересечения биссектрис; она равноудалена от сторон, и это расстояние есть радиус $r$.',
       r'**Центр описанной окружности** — точка пересечения серединных перпендикуляров; она равноудалена от вершин, и это расстояние есть радиус $R$.',
       r'$S=pr$, где $p$ — полупериметр: разбейте треугольник на три, соединив центр с вершинами.',
       r'$S=\dfrac{abc}{4R}$ — вторая формула площади через радиус описанной окружности.',
      ],
      'en': [
       r'**The incentre** is the meeting point of the bisectors; it is equidistant from the sides, and that distance is the inradius $r$.',
       r'**The circumcentre** is the meeting point of the perpendicular bisectors; it is equidistant from the vertices, and that distance is the circumradius $R$.',
       r'$S=pr$, where $p$ is the semiperimeter: split the triangle into three by joining the centre to the vertices.',
       r'$S=\dfrac{abc}{4R}$ — a second area formula, through the circumradius.',
      ]}},

    {'t': 'thm',
     'name': {'ru': 'Отрезки касательных к вписанной окружности', 'en': 'Tangent lengths to the incircle'},
     'text': {
      'ru': r'Если вписанная окружность касается сторон треугольника, то отрезок от вершины $A$ до точки касания равен $p-a$, где $a=BC$ и $p$ — полупериметр.',
      'en': r'If the incircle touches the sides of a triangle, the segment from the vertex $A$ to a point of contact equals $p-a$, where $a=BC$ and $p$ is the semiperimeter.'}},

    {'t': 'proof',
     'text': {
      'ru': r'Обозначим длины отрезков касательных из вершин через $x$ (из $A$), $y$ (из $B$), $z$ (из $C$) — из каждой вершины выходят два равных отрезка касательных.\n\nТогда стороны выражаются так: $$a=BC=y+z,\qquad b=CA=z+x,\qquad c=AB=x+y .$$ Складывая, $$a+b+c=2(x+y+z)\quad\Longrightarrow\quad x+y+z=p .$$ Отсюда $$x=p-(y+z)=p-a . \qquad\blacksquare$$\n\n**Следствие для прямоугольного треугольника.** Если угол $C$ прямой, то отрезки касательных из $C$ равны $r$ (получается квадрат со стороной $r$ в углу), то есть $z=r$. Тогда $$r=z=p-c=\frac{a+b+c}{2}-c=\frac{a+b-c}{2}.$$',
      'en': r'Write $x$, $y$, $z$ for the tangent lengths from $A$, $B$, $C$ — each vertex sends out two equal tangent segments.\n\nThe sides are then $$a=BC=y+z,\qquad b=CA=z+x,\qquad c=AB=x+y .$$ Adding, $$a+b+c=2(x+y+z)\quad\Longrightarrow\quad x+y+z=p ,$$ hence $$x=p-(y+z)=p-a . \qquad\blacksquare$$\n\n**Corollary for a right triangle.** If the angle $C$ is right, the tangent segments from $C$ equal $r$ (a square of side $r$ sits in the corner), so $z=r$. Then $$r=z=p-c=\frac{a+b+c}{2}-c=\frac{a+b-c}{2}.$$'}},

    {'t': 'thm',
     'name': {'ru': 'Теорема синусов', 'en': 'The law of sines'},
     'text': {
      'ru': r'В любом треугольнике $$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}=2R .$$',
      'en': r'In any triangle $$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}=2R .$$'}},

    {'t': 'proof',
     'text': {
      'ru': r'Проведём через вершину $B$ диаметр описанной окружности и обозначим через $B^{\prime}$ его второй конец. Угол $\angle BCB^{\prime}$ опирается на диаметр, значит равен $90^\circ$.\n\nУглы $\angle BB^{\prime}C$ и $\angle BAC$ — вписанные и опираются на одну и ту же дугу $BC$, поэтому $\angle BB^{\prime}C=A$.\n\nВ прямоугольном треугольнике $BCB^{\prime}$ катет $BC=a$ лежит против угла $A$, а гипотенуза равна $2R$, значит $$a=2R\sin A\quad\Longrightarrow\quad \frac{a}{\sin A}=2R .$$ То же рассуждение для двух других вершин завершает доказательство. $\blacksquare$',
      'en': r'Through the vertex $B$ draw the diameter of the circumcircle and call its far end $B^{\prime}$. The angle $\angle BCB^{\prime}$ subtends a diameter, hence equals $90^\circ$.\n\nThe angles $\angle BB^{\prime}C$ and $\angle BAC$ are inscribed on the same arc $BC$, so $\angle BB^{\prime}C=A$.\n\nIn the right triangle $BCB^{\prime}$ the leg $BC=a$ lies opposite the angle $A$ and the hypotenuse is $2R$, so $$a=2R\sin A\quad\Longrightarrow\quad \frac{a}{\sin A}=2R .$$ The same argument at the other two vertices finishes the proof. $\blacksquare$'}},
   ]},
 ],

 # ==================================================================== problems
 'problems': [

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Вписанный угол опирается на дугу в $70^\circ$. Чему равен этот угол? А если вписанный угол равен $35^\circ$, какова дуга?',
         'en': r'An inscribed angle subtends an arc of $70^\circ$. How large is the angle? And if an inscribed angle is $35^\circ$, how large is its arc?'},
   'hint': {'ru': r'Вписанный угол — половина дуги.', 'en': r'An inscribed angle is half its arc.'},
   'sol': {'ru': r'Вписанный угол равен половине дуги, на которую он опирается.\n\nЕсли дуга равна $70^\circ$, то угол равен $35^\circ$.\n\nЕсли угол равен $35^\circ$, то дуга равна $70^\circ$.\n\n**Ответ:** $35^\circ$ и $70^\circ$ соответственно.',
           'en': r'An inscribed angle is half the arc it subtends.\n\nIf the arc is $70^\circ$ the angle is $35^\circ$.\n\nIf the angle is $35^\circ$ the arc is $70^\circ$.\n\n**Answer:** $35^\circ$ and $70^\circ$ respectively.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Четырёхугольник $ABCD$ вписан в окружность, причём $\angle A=70^\circ$ и $\angle B=95^\circ$. Найдите $\angle C$ и $\angle D$.',
         'en': r'A quadrilateral $ABCD$ is inscribed in a circle with $\angle A=70^\circ$ and $\angle B=95^\circ$. Find $\angle C$ and $\angle D$.'},
   'hint': {'ru': r'Противоположные углы дают $180^\circ$.',
            'en': r'Opposite angles add to $180^\circ$.'},
   'sol': {'ru': r'В любом вписанном четырёхугольнике суммы противоположных углов равны $180^\circ$: $$\angle C=180^\circ-\angle A=180^\circ-70^\circ=110^\circ,$$ $$\angle D=180^\circ-\angle B=180^\circ-95^\circ=85^\circ .$$\n\n**Проверка:** сумма всех углов $70+95+110+85=360^\circ$ ✓ **Ответ:** $\angle C=110^\circ$, $\angle D=85^\circ$.',
           'en': r'In any cyclic quadrilateral opposite angles add to $180^\circ$: $$\angle C=180^\circ-\angle A=180^\circ-70^\circ=110^\circ,$$ $$\angle D=180^\circ-\angle B=180^\circ-95^\circ=85^\circ .$$\n\n**Check:** all four angles add to $70+95+110+85=360^\circ$ ✓ **Answer:** $\angle C=110^\circ$, $\angle D=85^\circ$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Хорды $AB$ и $CD$ пересекаются в точке $P$. Известно, что $AP=9$, $PB=4$ и $CP=PD$. Найдите длину хорды $CD$.',
         'en': r'Chords $AB$ and $CD$ meet at $P$ with $AP=9$, $PB=4$ and $CP=PD$. Find the length of the chord $CD$.'},
   'hint': {'ru': r'$PC\cdot PD=PA\cdot PB$, а $PC=PD$.',
            'en': r'$PC\cdot PD=PA\cdot PB$, and $PC=PD$.'},
   'sol': {'ru': r'По теореме о пересекающихся хордах $$PC\cdot PD=PA\cdot PB=9\cdot4=36 .$$ Так как $PC=PD$, получаем $PC^{2}=36$, откуда $PC=PD=6$.\n\nЗначит $CD=6+6=12$.\n\n**Ответ:** $CD=12$. *Замечание:* точка $P$ оказалась серединой хорды $CD$, а найденное значение $6$ — это среднее геометрическое чисел $9$ и $4$.',
           'en': r'The intersecting chords theorem gives $$PC\cdot PD=PA\cdot PB=9\cdot4=36 .$$ Since $PC=PD$ we get $PC^{2}=36$, so $PC=PD=6$.\n\nHence $CD=6+6=12$.\n\n**Answer:** $CD=12$. *Remark:* $P$ turned out to be the midpoint of $CD$, and the value $6$ is the geometric mean of $9$ and $4$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Катеты прямоугольного треугольника равны $8$ и $15$. Найдите радиусы вписанной и описанной окружностей.',
         'en': r'The legs of a right triangle are $8$ and $15$. Find the inradius and the circumradius.'},
   'hint': {'ru': r'$R=\dfrac c2$ и $r=\dfrac{a+b-c}{2}$.',
            'en': r'$R=\dfrac c2$ and $r=\dfrac{a+b-c}{2}$.'},
   'sol': {'ru': r'Гипотенуза равна $$c=\sqrt{8^{2}+15^{2}}=\sqrt{64+225}=\sqrt{289}=17 .$$\n\n**Описанная окружность.** Её центр — середина гипотенузы, поэтому $$R=\frac{c}{2}=8{,}5 .$$\n\n**Вписанная окружность.** По формуле для прямоугольного треугольника $$r=\frac{a+b-c}{2}=\frac{8+15-17}{2}=\frac{6}{2}=3 .$$\n\n**Проверка через $S=pr$:** $S=\tfrac{8\cdot15}{2}=60$, $p=\tfrac{8+15+17}{2}=20$, и $\tfrac{S}{p}=\tfrac{60}{20}=3$ ✓',
           'en': r'The hypotenuse is $$c=\sqrt{8^{2}+15^{2}}=\sqrt{64+225}=\sqrt{289}=17 .$$\n\n**Circumcircle.** Its centre is the midpoint of the hypotenuse, so $$R=\frac{c}{2}=8.5 .$$\n\n**Incircle.** The right-triangle formula gives $$r=\frac{a+b-c}{2}=\frac{8+15-17}{2}=\frac{6}{2}=3 .$$\n\n**Check via $S=pr$:** $S=\tfrac{8\cdot15}{2}=60$, $p=\tfrac{8+15+17}{2}=20$, and $\tfrac{S}{p}=\tfrac{60}{20}=3$ ✓'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Из точки $P$, удалённой от центра окружности на $13$, проведена касательная длины $12$. Найдите радиус окружности.',
         'en': r'From a point $P$ at distance $13$ from the centre of a circle, a tangent of length $12$ is drawn. Find the radius.'},
   'hint': {'ru': r'Радиус перпендикулярен касательной в точке касания.',
            'en': r'The radius is perpendicular to the tangent at the point of contact.'},
   'sol': {'ru': r'Пусть $T$ — точка касания. Радиус $OT$ перпендикулярен касательной, поэтому треугольник $OTP$ прямоугольный с прямым углом при $T$.\n\nВ нём гипотенуза $OP=13$, катет $PT=12$, значит $$R=OT=\sqrt{13^{2}-12^{2}}=\sqrt{169-144}=\sqrt{25}=5 .$$\n\n**Ответ:** $R=5$. *Проверка через степень точки:* $PT^{2}=OP^{2}-R^{2}$ даёт $144=169-25$ ✓',
           'en': r'Let $T$ be the point of contact. The radius $OT$ is perpendicular to the tangent, so the triangle $OTP$ is right-angled at $T$.\n\nIts hypotenuse is $OP=13$ and one leg is $PT=12$, so $$R=OT=\sqrt{13^{2}-12^{2}}=\sqrt{169-144}=\sqrt{25}=5 .$$\n\n**Answer:** $R=5$. *Check via the power of a point:* $PT^{2}=OP^{2}-R^{2}$ gives $144=169-25$ ✓'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'В окружности проведён диаметр $BC$ и отмечена точка $A$ на окружности так, что $\angle ABC=25^\circ$. Найдите $\angle ACB$ и дугу $AC$.',
         'en': r'A circle has a diameter $BC$, and a point $A$ on the circle satisfies $\angle ABC=25^\circ$. Find $\angle ACB$ and the arc $AC$.'},
   'hint': {'ru': r'Угол, опирающийся на диаметр, прямой.',
            'en': r'An angle subtending a diameter is right.'},
   'sol': {'ru': r'Угол $\angle BAC$ опирается на диаметр, поэтому равен $90^\circ$.\n\nВ треугольнике $ABC$ сумма углов равна $180^\circ$, значит $$\angle ACB=180^\circ-90^\circ-25^\circ=65^\circ .$$\n\nУгол $\angle ABC=25^\circ$ — вписанный и опирается на дугу $AC$, поэтому эта дуга равна $2\cdot25^\circ=50^\circ$.\n\n**Ответ:** $\angle ACB=65^\circ$, дуга $AC$ равна $50^\circ$.',
           'en': r'The angle $\angle BAC$ subtends a diameter, hence equals $90^\circ$.\n\nThe angle sum of the triangle $ABC$ gives $$\angle ACB=180^\circ-90^\circ-25^\circ=65^\circ .$$\n\nThe angle $\angle ABC=25^\circ$ is inscribed on the arc $AC$, so that arc is $2\cdot25^\circ=50^\circ$.\n\n**Answer:** $\angle ACB=65^\circ$, and the arc $AC$ is $50^\circ$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Две окружности радиусов $r_1$ и $r_2$ касаются друг друга внешним образом. Найдите длину отрезка их общей внешней касательной между точками касания.',
         'en': r'Two circles of radii $r_1$ and $r_2$ touch each other externally. Find the length of the segment of their common external tangent between the points of contact.'},
   'hint': {'ru': r'Опустите перпендикуляр из меньшего центра на радиус большего.',
            'en': r'Drop a perpendicular from the smaller centre onto the radius of the larger.'},
   'sol': {'ru': r'Пусть $O_1$ и $O_2$ — центры, а $A$ и $B$ — точки касания общей внешней касательной. Радиусы $O_1A$ и $O_2B$ перпендикулярны этой касательной, значит параллельны друг другу, и $O_1ABO_2$ — прямоугольная трапеция.\n\nОпустим из центра $O_2$ перпендикуляр $O_2K$ на прямую $O_1A$. Тогда $ABO_2K$ — прямоугольник, поэтому $$KA=r_2,\qquad O_2K=AB .$$\n\nВ прямоугольном треугольнике $O_1KO_2$: $$O_1K=r_1-r_2,\qquad O_1O_2=r_1+r_2$$ (окружности касаются внешне, значит расстояние между центрами равно сумме радиусов).\n\nПо теореме Пифагора $$AB^{2}=O_1O_2^{2}-O_1K^{2}=\left(r_1+r_2\right)^{2}-\left(r_1-r_2\right)^{2}=4r_1r_2 .$$\n\n**Ответ:** $AB=2\sqrt{r_1r_2}$.\n\n*Пример.* Для окружностей радиусов $1$ и $4$ отрезок равен $2\sqrt4=4$.',
           'en': r'Let $O_1$ and $O_2$ be the centres and $A$, $B$ the points of contact of the common external tangent. The radii $O_1A$ and $O_2B$ are perpendicular to the tangent, hence parallel to each other, so $O_1ABO_2$ is a right trapezium.\n\nDrop a perpendicular $O_2K$ from $O_2$ onto the line $O_1A$. Then $ABO_2K$ is a rectangle, so $$KA=r_2,\qquad O_2K=AB .$$\n\nIn the right triangle $O_1KO_2$, $$O_1K=r_1-r_2,\qquad O_1O_2=r_1+r_2$$ (touching externally means the centres are $r_1+r_2$ apart).\n\nPythagoras gives $$AB^{2}=O_1O_2^{2}-O_1K^{2}=\left(r_1+r_2\right)^{2}-\left(r_1-r_2\right)^{2}=4r_1r_2 .$$\n\n**Answer:** $AB=2\sqrt{r_1r_2}$.\n\n*Example.* For radii $1$ and $4$ the segment is $2\sqrt4=4$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Докажите, что если две окружности пересекаются, то линия их центров перпендикулярна общей хорде и делит её пополам.',
         'en': r'Prove that if two circles intersect, the line of their centres is perpendicular to the common chord and bisects it.'},
   'hint': {'ru': r'Обе точки пересечения равноудалены от каждого центра.',
            'en': r'Both intersection points are equidistant from each centre.'},
   'sol': {'ru': r'Пусть окружности с центрами $O_1$ и $O_2$ пересекаются в точках $A$ и $B$.\n\n**Шаг 1.** Точка $O_1$ равноудалена от $A$ и $B$: $O_1A=O_1B=r_1$ (оба отрезка — радиусы первой окружности). Значит $O_1$ лежит на серединном перпендикуляре к отрезку $AB$.\n\n**Шаг 2.** Точно так же $O_2A=O_2B=r_2$, поэтому и $O_2$ лежит на серединном перпендикуляре к $AB$.\n\n**Шаг 3.** Через две различные точки проходит ровно одна прямая, значит прямая $O_1O_2$ **совпадает** с серединным перпендикуляром к $AB$.\n\nА серединный перпендикуляр по определению перпендикулярен отрезку и проходит через его середину. $\blacksquare$\n\n*Замечание.* Этот же довод показывает, что вся картинка симметрична относительно прямой $O_1O_2$.',
           'en': r'Let circles with centres $O_1$ and $O_2$ meet at $A$ and $B$.\n\n**Step 1.** The point $O_1$ is equidistant from $A$ and $B$: $O_1A=O_1B=r_1$ (both are radii of the first circle). So $O_1$ lies on the perpendicular bisector of $AB$.\n\n**Step 2.** Likewise $O_2A=O_2B=r_2$, so $O_2$ lies on that perpendicular bisector too.\n\n**Step 3.** Exactly one line passes through two distinct points, so the line $O_1O_2$ **is** the perpendicular bisector of $AB$.\n\nAnd a perpendicular bisector is by definition perpendicular to the segment and passes through its midpoint. $\blacksquare$\n\n*Remark.* The same argument shows the whole picture is symmetric about the line $O_1O_2$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'В треугольнике $ABC$ проведены высоты $BH_1$ и $CH_2$. Докажите, что точки $B$, $C$, $H_1$, $H_2$ лежат на одной окружности, и что $\angle AH_2H_1=\angle ACB$.',
         'en': r'A triangle $ABC$ has altitudes $BH_1$ and $CH_2$. Prove that $B$, $C$, $H_1$, $H_2$ lie on one circle and that $\angle AH_2H_1=\angle ACB$.'},
   'hint': {'ru': r'Отрезок $BC$ виден из точек $H_1$ и $H_2$ под прямым углом.',
            'en': r'The segment $BC$ is seen from $H_1$ and from $H_2$ at a right angle.'},
   'sol': {'ru': r'**Окружность.** Высота $BH_1$ перпендикулярна стороне $AC$, поэтому $\angle BH_1C=90^\circ$. Высота $CH_2$ перпендикулярна $AB$, поэтому $\angle BH_2C=90^\circ$.\n\nТаким образом, отрезок $BC$ виден из точек $H_1$ и $H_2$ под прямым углом. Значит обе точки лежат на окружности с диаметром $BC$ — вместе с $B$ и $C$. $\square$\n\n**Равенство углов.** Четырёхугольник $BH_2H_1C$ вписан в эту окружность, поэтому его противоположные углы дают $180^\circ$: $$\angle BH_2H_1+\angle H_1CB=180^\circ .$$ Но угол $\angle AH_2H_1$ смежный с $\angle BH_2H_1$ (точки $A$, $H_2$, $B$ лежат на одной прямой), поэтому $$\angle AH_2H_1=180^\circ-\angle BH_2H_1=\angle H_1CB=\angle ACB . \qquad\blacksquare$$\n\n*Замечание.* Отсюда следует, что треугольник $AH_2H_1$ подобен треугольнику $ACB$ — это ключевой факт в задачах об ортоцентрическом треугольнике.',
           'en': r'**The circle.** The altitude $BH_1$ is perpendicular to $AC$, so $\angle BH_1C=90^\circ$. The altitude $CH_2$ is perpendicular to $AB$, so $\angle BH_2C=90^\circ$.\n\nThus the segment $BC$ is seen at a right angle from both $H_1$ and $H_2$, so both lie on the circle with diameter $BC$ — together with $B$ and $C$. $\square$\n\n**The equal angles.** The quadrilateral $BH_2H_1C$ is inscribed in that circle, so its opposite angles add to $180^\circ$: $$\angle BH_2H_1+\angle H_1CB=180^\circ .$$ But $\angle AH_2H_1$ is supplementary to $\angle BH_2H_1$ (the points $A$, $H_2$, $B$ are collinear), so $$\angle AH_2H_1=180^\circ-\angle BH_2H_1=\angle H_1CB=\angle ACB . \qquad\blacksquare$$\n\n*Remark.* It follows that the triangle $AH_2H_1$ is similar to $ACB$ — the key fact in problems about the orthic triangle.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Из внешней точки $P$ проведены касательная $PT$ и секущая через центр окружности, пересекающая её в точках $A$ и $B$. Известно, что $PA=4$ и $PB=9$. Найдите $PT$ и радиус окружности.',
         'en': r'From an external point $P$ a tangent $PT$ and a secant through the centre are drawn, the secant meeting the circle at $A$ and $B$ with $PA=4$ and $PB=9$. Find $PT$ and the radius.'},
   'hint': {'ru': r'$PT^{2}=PA\cdot PB$, а $AB$ — диаметр.',
            'en': r'$PT^{2}=PA\cdot PB$, and $AB$ is a diameter.'},
   'sol': {'ru': r'**Касательная.** По теореме о секущей и касательной $$PT^{2}=PA\cdot PB=4\cdot9=36\quad\Longrightarrow\quad PT=6 .$$\n\n**Радиус.** Секущая проходит через центр, значит $AB$ — диаметр: $$AB=PB-PA=9-4=5\quad\Longrightarrow\quad R=2{,}5 .$$\n\n**Проверка через степень точки.** Центр $O$ — середина $AB$, поэтому $$OP=PA+\frac{AB}{2}=4+2{,}5=6{,}5,$$ и $$OP^{2}-R^{2}=6{,}5^{2}-2{,}5^{2}=42{,}25-6{,}25=36=PT^{2}\ \checkmark$$\n\n**Ответ:** $PT=6$, $R=2{,}5$.',
           'en': r'**The tangent.** The secant–tangent theorem gives $$PT^{2}=PA\cdot PB=4\cdot9=36\quad\Longrightarrow\quad PT=6 .$$\n\n**The radius.** The secant passes through the centre, so $AB$ is a diameter: $$AB=PB-PA=9-4=5\quad\Longrightarrow\quad R=2.5 .$$\n\n**Check via the power of a point.** The centre $O$ is the midpoint of $AB$, so $$OP=PA+\frac{AB}{2}=4+2.5=6.5,$$ and $$OP^{2}-R^{2}=6.5^{2}-2.5^{2}=42.25-6.25=36=PT^{2}\ \checkmark$$\n\n**Answer:** $PT=6$, $R=2.5$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'В окружность радиуса $R$ вписан треугольник со сторонами $13$, $14$, $15$. Найдите $R$ и радиус вписанной окружности $r$.',
         'en': r'A triangle with sides $13$, $14$, $15$ is inscribed in a circle of radius $R$. Find $R$ and the inradius $r$.'},
   'hint': {'ru': r'$S=\dfrac{abc}{4R}$ и $S=pr$.', 'en': r'$S=\dfrac{abc}{4R}$ and $S=pr$.'},
   'sol': {'ru': r'Полупериметр $p=\dfrac{13+14+15}{2}=21$, и по формуле Герона $$S=\sqrt{21\cdot8\cdot7\cdot6}=\sqrt{7056}=84 .$$\n\n**Описанная окружность.** Из $S=\dfrac{abc}{4R}$ получаем $$R=\frac{abc}{4S}=\frac{13\cdot14\cdot15}{4\cdot84}=\frac{2730}{336}=\frac{65}{8}=8{,}125 .$$\n\n**Вписанная окружность.** Из $S=pr$ получаем $$r=\frac{S}{p}=\frac{84}{21}=4 .$$\n\n**Ответ:** $R=\tfrac{65}{8}$ и $r=4$. *Замечание:* здесь $R>2r$, что согласуется с неравенством Эйлера $R\ge2r$, верным для любого треугольника.',
           'en': r'The semiperimeter is $p=\dfrac{13+14+15}{2}=21$, and Heron’s formula gives $$S=\sqrt{21\cdot8\cdot7\cdot6}=\sqrt{7056}=84 .$$\n\n**Circumradius.** From $S=\dfrac{abc}{4R}$, $$R=\frac{abc}{4S}=\frac{13\cdot14\cdot15}{4\cdot84}=\frac{2730}{336}=\frac{65}{8}=8.125 .$$\n\n**Inradius.** From $S=pr$, $$r=\frac{S}{p}=\frac{84}{21}=4 .$$\n\n**Answer:** $R=\tfrac{65}{8}$ and $r=4$. *Remark:* here $R>2r$, in agreement with Euler’s inequality $R\ge2r$, valid for every triangle.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Докажите, что если в четырёхугольник можно вписать окружность, то суммы его противоположных сторон равны: $$AB+CD=BC+AD .$$',
         'en': r'Prove that if a circle can be inscribed in a quadrilateral then its opposite sides have equal sums: $$AB+CD=BC+AD .$$'},
   'hint': {'ru': r'Отрезки касательных из каждой вершины равны.',
            'en': r'The two tangent segments from each vertex are equal.'},
   'sol': {'ru': r'Пусть вписанная окружность касается сторон $AB$, $BC$, $CD$, $DA$ в точках $K$, $L$, $M$, $N$.\n\nИз каждой вершины к окружности проведены два отрезка касательных, и они равны. Обозначим их: $$AK=AN=w,\qquad BK=BL=x,\qquad CL=CM=y,\qquad DM=DN=z .$$\n\nТеперь выразим стороны: $$AB=w+x,\quad BC=x+y,\quad CD=y+z,\quad DA=z+w .$$\n\nСкладываем противоположные: $$AB+CD=(w+x)+(y+z)=w+x+y+z,$$ $$BC+AD=(x+y)+(z+w)=w+x+y+z .$$ Обе суммы равны $w+x+y+z$. $\blacksquare$\n\n*Замечание.* Верно и обратное (теорема Пито): если в выпуклом четырёхугольнике суммы противоположных сторон равны, то в него можно вписать окружность. Для параллелограмма условие даёт $2AB=2BC$, поэтому вписать окружность можно только в ромб.',
           'en': r'Let the incircle touch $AB$, $BC$, $CD$, $DA$ at $K$, $L$, $M$, $N$.\n\nFrom each vertex two tangent segments are drawn, and they are equal. Write $$AK=AN=w,\qquad BK=BL=x,\qquad CL=CM=y,\qquad DM=DN=z .$$\n\nThe sides are then $$AB=w+x,\quad BC=x+y,\quad CD=y+z,\quad DA=z+w .$$\n\nAdding the opposite ones, $$AB+CD=(w+x)+(y+z)=w+x+y+z,$$ $$BC+AD=(x+y)+(z+w)=w+x+y+z ,$$ and both equal $w+x+y+z$. $\blacksquare$\n\n*Remark.* The converse is also true (Pitot’s theorem): a convex quadrilateral whose opposite sides have equal sums has an incircle. For a parallelogram the condition reads $2AB=2BC$, so only a rhombus can have one.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Точка $M$ лежит на дуге $BC$ описанной окружности равностороннего треугольника $ABC$ (на дуге, не содержащей $A$). Докажите, что $MB+MC=MA$.',
         'en': r'A point $M$ lies on the arc $BC$ of the circumcircle of an equilateral triangle $ABC$ (the arc not containing $A$). Prove that $MB+MC=MA$.'},
   'hint': {'ru': r'Отложите на отрезке $MA$ точку $K$ так, что $MK=MB$, и посмотрите на треугольник $MBK$.',
            'en': r'Mark a point $K$ on $MA$ with $MK=MB$ and look at the triangle $MBK$.'},
   'sol': {'ru': r'**Построение.** На отрезке $MA$ отметим точку $K$ так, что $MK=MB$.\n\n**Шаг 1: треугольник $MBK$ равносторонний.** Угол $\angle BMA$ — вписанный и опирается на дугу $AB$, на которую опирается и угол $\angle BCA=60^\circ$. Значит $\angle BMK=\angle BMA=60^\circ$. Треугольник $MBK$ равнобедренный ($MK=MB$) с углом $60^\circ$ при вершине, следовательно он равносторонний, и $$BK=MB,\qquad \angle MBK=60^\circ .$$\n\n**Шаг 2: два равных треугольника.** Сравним $\triangle MBC$ и $\triangle KBA$.\n\n$BM=BK$ — из шага 1;\n$BC=BA$ — стороны равностороннего треугольника;\n$\angle MBC=\angle KBA$: действительно, $$\angle MBC=\angle MBK-\angle CBK=60^\circ-\angle CBK,\qquad \angle KBA=\angle ABC-\angle CBK=60^\circ-\angle CBK .$$\n\nПо признаку **СУС** треугольники равны, значит $$MC=KA .$$\n\n**Шаг 3: складываем.** $$MA=MK+KA=MB+MC . \qquad\blacksquare$$\n\n*Замечание.* Это частный случай теоремы Птолемея для вписанного четырёхугольника $ABMC$: $$MA\cdot BC=MB\cdot AC+MC\cdot AB,$$ и после сокращения на общую сторону получается то же равенство.',
           'en': r'**Construction.** On the segment $MA$ mark the point $K$ with $MK=MB$.\n\n**Step 1: the triangle $MBK$ is equilateral.** The angle $\angle BMA$ is inscribed on the arc $AB$, the same arc as $\angle BCA=60^\circ$. So $\angle BMK=\angle BMA=60^\circ$. The triangle $MBK$ is isosceles ($MK=MB$) with a $60^\circ$ apex angle, hence equilateral, and $$BK=MB,\qquad \angle MBK=60^\circ .$$\n\n**Step 2: two congruent triangles.** Compare $\triangle MBC$ and $\triangle KBA$.\n\n$BM=BK$ — from Step 1;\n$BC=BA$ — sides of the equilateral triangle;\n$\angle MBC=\angle KBA$: indeed $$\angle MBC=\angle MBK-\angle CBK=60^\circ-\angle CBK,\qquad \angle KBA=\angle ABC-\angle CBK=60^\circ-\angle CBK .$$\n\nBy **SAS** they are congruent, so $$MC=KA .$$\n\n**Step 3: add up.** $$MA=MK+KA=MB+MC . \qquad\blacksquare$$\n\n*Remark.* This is a special case of Ptolemy’s theorem for the cyclic quadrilateral $ABMC$: $$MA\cdot BC=MB\cdot AC+MC\cdot AB,$$ and cancelling the common side gives the same equality.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Окружность вписана в треугольник со сторонами $a=13$, $b=14$, $c=15$ и касается стороны $a$ в точке $X$. Найдите расстояния от точки $X$ до концов этой стороны.',
         'en': r'The incircle of a triangle with sides $a=13$, $b=14$, $c=15$ touches the side $a$ at $X$. Find the distances from $X$ to the ends of that side.'},
   'hint': {'ru': r'Отрезок от вершины до точки касания равен $p$ минус противолежащая сторона.',
            'en': r'The tangent length from a vertex equals $p$ minus the opposite side.'},
   'sol': {'ru': r'Обозначим стороны так: $a=BC=13$, $b=CA=14$, $c=AB=15$; тогда $$p=\frac{13+14+15}{2}=21 .$$\n\nПо доказанной формуле длина отрезка от вершины до точки касания равна $p$ минус противолежащая сторона: $$BX=p-b=21-14=7,\qquad CX=p-c=21-15=6 .$$\n\n**Проверка:** $BX+CX=7+6=13=a$ ✓\n\n**Ответ:** $BX=7$ и $CX=6$.',
           'en': r'Write $a=BC=13$, $b=CA=14$, $c=AB=15$; then $$p=\frac{13+14+15}{2}=21 .$$\n\nBy the formula proved above, the tangent length from a vertex is $p$ minus the opposite side: $$BX=p-b=21-14=7,\qquad CX=p-c=21-15=6 .$$\n\n**Check:** $BX+CX=7+6=13=a$ ✓\n\n**Answer:** $BX=7$ and $CX=6$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Две окружности пересекаются в точках $A$ и $B$. Через точку $A$ проведена прямая, вторично пересекающая окружности в точках $C$ и $D$. Докажите, что величина угла $\angle CBD$ не зависит от выбора этой прямой.',
         'en': r'Two circles meet at $A$ and $B$. A line through $A$ meets the circles again at $C$ and $D$. Prove that the angle $\angle CBD$ does not depend on the choice of that line.'},
   'hint': {'ru': r'Посчитайте углы $\angle BCA$ и $\angle BDA$ как вписанные.',
            'en': r'Compute $\angle BCA$ and $\angle BDA$ as inscribed angles.'},
   'sol': {'ru': r'Пусть $C$ лежит на первой окружности, $D$ — на второй, и точка $A$ находится между ними на секущей.\n\n**Шаг 1.** В первой окружности угол $\angle BCA=\angle BCD$ — вписанный и опирается на хорду $AB$. Все такие углы, вершины которых лежат на одной дуге, равны; обозначим эту величину через $\beta_1$. Она определяется только самой хордой $AB$ и первой окружностью, а не положением точки $C$.\n\n**Шаг 2.** Точно так же во второй окружности $\angle BDA=\angle BDC=\beta_2$ — постоянная величина.\n\n**Шаг 3.** В треугольнике $BCD$ сумма углов равна $180^\circ$, поэтому $$\angle CBD=180^\circ-\beta_1-\beta_2 .$$ Правая часть не зависит от секущей. $\blacksquare$\n\n*Следствие.* Все получающиеся треугольники $BCD$ подобны между собой: у них все три угла постоянны.',
           'en': r'Let $C$ be on the first circle and $D$ on the second, with $A$ between them on the line.\n\n**Step 1.** In the first circle the angle $\angle BCA=\angle BCD$ is inscribed on the chord $AB$. All such angles with vertex on one arc are equal; call the value $\beta_1$. It depends only on the chord $AB$ and the first circle, not on where $C$ is.\n\n**Step 2.** Likewise in the second circle $\angle BDA=\angle BDC=\beta_2$ is constant.\n\n**Step 3.** The angle sum of the triangle $BCD$ gives $$\angle CBD=180^\circ-\beta_1-\beta_2 ,$$ and the right side does not depend on the line. $\blacksquare$\n\n*Corollary.* All the resulting triangles $BCD$ are similar to one another: all three of their angles are fixed.'}},

  {'src': 'Теорема Птолемея / Ptolemy, classic', 'lvl': 3,
   'q': {'ru': r'Докажите теорему Птолемея: для вписанного в окружность четырёхугольника $ABCD$ $$AC\cdot BD=AB\cdot CD+BC\cdot AD .$$',
         'en': r'Prove Ptolemy’s theorem: for a cyclic quadrilateral $ABCD$, $$AC\cdot BD=AB\cdot CD+BC\cdot AD .$$'},
   'hint': {'ru': r'Отметьте на диагонали $AC$ точку $K$ так, что $\angle ABK=\angle CBD$.',
            'en': r'Mark on the diagonal $AC$ the point $K$ with $\angle ABK=\angle CBD$.'},
   'sol': {'ru': r'**Построение.** На диагонали $AC$ отметим точку $K$ так, что $$\angle ABK=\angle CBD .$$ (Такая точка есть: луч из $B$ под нужным углом пересекает отрезок $AC$, потому что этот угол меньше $\angle ABC$.)\n\n**Первая пара подобных треугольников.** Сравним $\triangle ABK$ и $\triangle DBC$:\n\n$\angle ABK=\angle DBC$ — по построению;\n$\angle BAK=\angle BAC=\angle BDC$ — вписанные углы на одну дугу $BC$.\n\nЗначит треугольники подобны по двум углам, и $$\frac{AK}{DC}=\frac{AB}{DB}\quad\Longrightarrow\quad AK\cdot DB=AB\cdot DC . \tag{1}$$\n\n**Вторая пара подобных треугольников.** Заметим, что $$\angle KBC=\angle ABC-\angle ABK=\angle ABC-\angle DBC=\angle ABD .$$ Сравним $\triangle KBC$ и $\triangle ABD$:\n\n$\angle KBC=\angle ABD$ — только что показано;\n$\angle BCK=\angle BCA=\angle BDA$ — вписанные углы на одну дугу $AB$.\n\nЗначит эти треугольники тоже подобны, и $$\frac{KC}{AD}=\frac{BC}{BD}\quad\Longrightarrow\quad KC\cdot BD=BC\cdot AD . \tag{2}$$\n\n**Складываем.** Точка $K$ лежит на отрезке $AC$, поэтому $AK+KC=AC$. Сложив $(1)$ и $(2)$: $$\left(AK+KC\right)\cdot BD=AB\cdot DC+BC\cdot AD,$$ то есть $$AC\cdot BD=AB\cdot CD+BC\cdot AD . \qquad\blacksquare$$\n\n*Проверка на прямоугольнике.* Для прямоугольника со сторонами $m$ и $n$ обе диагонали равны $\sqrt{m^{2}+n^{2}}$, и теорема даёт $m^{2}+n^{2}=m\cdot m+n\cdot n$ — тождество, то есть теорема Пифагора.',
           'en': r'**Construction.** On the diagonal $AC$ mark the point $K$ with $$\angle ABK=\angle CBD .$$ (Such a point exists: the ray from $B$ at that angle meets the segment $AC$, since the angle is smaller than $\angle ABC$.)\n\n**First pair of similar triangles.** Compare $\triangle ABK$ and $\triangle DBC$:\n\n$\angle ABK=\angle DBC$ — by construction;\n$\angle BAK=\angle BAC=\angle BDC$ — inscribed angles on the arc $BC$.\n\nSo they are similar, and $$\frac{AK}{DC}=\frac{AB}{DB}\quad\Longrightarrow\quad AK\cdot DB=AB\cdot DC . \tag{1}$$\n\n**Second pair.** Note that $$\angle KBC=\angle ABC-\angle ABK=\angle ABC-\angle DBC=\angle ABD .$$ Compare $\triangle KBC$ and $\triangle ABD$:\n\n$\angle KBC=\angle ABD$ — just shown;\n$\angle BCK=\angle BCA=\angle BDA$ — inscribed angles on the arc $AB$.\n\nThese are similar too, giving $$\frac{KC}{AD}=\frac{BC}{BD}\quad\Longrightarrow\quad KC\cdot BD=BC\cdot AD . \tag{2}$$\n\n**Add.** The point $K$ lies on $AC$, so $AK+KC=AC$. Adding $(1)$ and $(2)$, $$\left(AK+KC\right)\cdot BD=AB\cdot DC+BC\cdot AD,$$ that is $$AC\cdot BD=AB\cdot CD+BC\cdot AD . \qquad\blacksquare$$\n\n*Check on a rectangle.* For a rectangle with sides $m$ and $n$ both diagonals are $\sqrt{m^{2}+n^{2}}$, and the theorem reads $m^{2}+n^{2}=m\cdot m+n\cdot n$ — an identity, namely the Pythagorean theorem.'}},

  {'src': 'Лемма о трезубце / The trident lemma, classic', 'lvl': 3,
   'q': {'ru': r'Биссектриса угла $A$ треугольника $ABC$ вторично пересекает описанную окружность в точке $M$, а $I$ — центр вписанной окружности. Докажите, что $$MB=MC=MI .$$',
         'en': r'The bisector of the angle $A$ of a triangle $ABC$ meets the circumcircle again at $M$, and $I$ is the incentre. Prove that $$MB=MC=MI .$$'},
   'hint': {'ru': r'Посчитайте угол $\angle MBI$ и угол $\angle MIB$ — оба через половины углов $A$ и $B$.',
            'en': r'Compute $\angle MBI$ and $\angle MIB$ — both come out as halves of $A$ and $B$.'},
   'sol': {'ru': r'Обозначим углы треугольника через $\alpha$, $\beta$, $\gamma$.\n\n**Шаг 1: $MB=MC$.** Углы $\angle BAM$ и $\angle CAM$ равны (это половинки угла $A$), а вписанные углы измеряются половинами дуг, значит дуги $BM$ и $CM$ равны. Равным дугам отвечают равные хорды, поэтому $$MB=MC .$$ (Другими словами, $M$ — середина дуги $BC$.)\n\n**Шаг 2: считаем $\angle MBI$.** Точка $I$ лежит на биссектрисе угла $B$, поэтому $\angle IBC=\tfrac\beta2$. Далее, $$\angle MBC=\angle MAC=\frac\alpha2$$ — вписанные углы на одну дугу $MC$. Складывая, $$\angle MBI=\angle MBC+\angle CBI=\frac\alpha2+\frac\beta2 .$$\n\n**Шаг 3: считаем $\angle MIB$.** Угол $\angle MIB$ — внешний угол треугольника $ABI$ при вершине $I$ (точки $A$, $I$, $M$ лежат на одной прямой), поэтому он равен сумме двух несмежных внутренних: $$\angle MIB=\angle IAB+\angle IBA=\frac\alpha2+\frac\beta2 .$$\n\n**Шаг 4: вывод.** Углы $\angle MBI$ и $\angle MIB$ равны, значит треугольник $MBI$ равнобедренный с основанием $BI$, и $$MB=MI .$$\n\nВместе с шагом 1 получаем $MB=MC=MI$. $\blacksquare$\n\n*Название* «лемма о трезубце» — от картинки: из точки $M$ выходят три равных отрезка $MB$, $MI$, $MC$. Лемма постоянно используется в задачах с вписанной окружностью.',
           'en': r'Write $\alpha$, $\beta$, $\gamma$ for the angles of the triangle.\n\n**Step 1: $MB=MC$.** The angles $\angle BAM$ and $\angle CAM$ are equal (halves of $A$), and inscribed angles measure half their arcs, so the arcs $BM$ and $CM$ are equal. Equal arcs carry equal chords, hence $$MB=MC .$$ (In other words $M$ is the midpoint of the arc $BC$.)\n\n**Step 2: compute $\angle MBI$.** The point $I$ lies on the bisector of $B$, so $\angle IBC=\tfrac\beta2$. Also $$\angle MBC=\angle MAC=\frac\alpha2$$ — inscribed angles on the arc $MC$. Adding, $$\angle MBI=\angle MBC+\angle CBI=\frac\alpha2+\frac\beta2 .$$\n\n**Step 3: compute $\angle MIB$.** The angle $\angle MIB$ is the exterior angle of the triangle $ABI$ at $I$ (the points $A$, $I$, $M$ are collinear), so it equals the sum of the two non-adjacent interior angles: $$\angle MIB=\angle IAB+\angle IBA=\frac\alpha2+\frac\beta2 .$$\n\n**Step 4: conclude.** The angles $\angle MBI$ and $\angle MIB$ are equal, so the triangle $MBI$ is isosceles on the base $BI$, giving $$MB=MI .$$\n\nTogether with Step 1 this is $MB=MC=MI$. $\blacksquare$\n\n*The name* "trident lemma" comes from the picture: three equal segments $MB$, $MI$, $MC$ leave the point $M$. The lemma is used constantly in incircle problems.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 3,
   'q': {'ru': r'Пусть $H$ — точка пересечения высот треугольника $ABC$. Докажите, что точка, симметричная $H$ относительно стороны $BC$, лежит на описанной окружности треугольника.',
         'en': r'Let $H$ be the orthocentre of a triangle $ABC$. Prove that the reflection of $H$ in the side $BC$ lies on the circumcircle.'},
   'hint': {'ru': r'Сначала докажите, что $\angle BHC=180^\circ-\angle A$.',
            'en': r'First prove that $\angle BHC=180^\circ-\angle A$.'},
   'sol': {'ru': r'Обозначим углы треугольника через $\alpha$, $\beta$, $\gamma$.\n\n**Шаг 1: находим $\angle BHC$.** Пусть высота из $B$ падает на $AC$, а высота из $C$ — на $AB$.\n\nВ прямоугольном треугольнике, образованном высотой из $B$ и стороной $BC$, угол при вершине $B$ равен $$\angle HBC=90^\circ-\gamma$$ (в треугольнике с прямым углом на стороне $AC$ второй острый угол равен $\gamma$). Симметрично $$\angle HCB=90^\circ-\beta .$$\n\nВ треугольнике $BHC$ $$\angle BHC=180^\circ-\left(90^\circ-\gamma\right)-\left(90^\circ-\beta\right)=\beta+\gamma=180^\circ-\alpha .$$\n\n**Шаг 2: отражение.** Пусть $H^{\prime}$ — точка, симметричная $H$ относительно прямой $BC$. Осевая симметрия сохраняет расстояния и углы, а точки $B$ и $C$ остаются на месте, поэтому треугольник $BH^{\prime}C$ равен треугольнику $BHC$ и $$\angle BH^{\prime}C=\angle BHC=180^\circ-\alpha .$$\n\n**Шаг 3: вписанный четырёхугольник.** Точки $A$ и $H^{\prime}$ лежат по разные стороны от прямой $BC$ (высоты пересекаются внутри для остроугольного треугольника, и отражение уводит $H$ за сторону). В четырёхугольнике $ABH^{\prime}C$ противоположные углы при вершинах $A$ и $H^{\prime}$ дают $$\alpha+\left(180^\circ-\alpha\right)=180^\circ .$$\n\nПо критерию вписанности четырёхугольник $ABH^{\prime}C$ вписан в окружность — а окружность, проходящая через $A$, $B$, $C$, единственна, и это описанная окружность треугольника. Значит $H^{\prime}$ лежит на ней. $\blacksquare$\n\n*Следствие.* Тем же приёмом доказывается, что точка, симметричная $H$ относительно **середины** стороны $BC$, — это точка, диаметрально противоположная вершине $A$.',
           'en': r'Write $\alpha$, $\beta$, $\gamma$ for the angles.\n\n**Step 1: compute $\angle BHC$.** Let the altitude from $B$ meet $AC$ and the altitude from $C$ meet $AB$.\n\nIn the right triangle formed by the altitude from $B$ and the side $BC$, the angle at $B$ is $$\angle HBC=90^\circ-\gamma$$ (in a triangle with the right angle on $AC$, the other acute angle is $\gamma$). Symmetrically $$\angle HCB=90^\circ-\beta .$$\n\nIn the triangle $BHC$, $$\angle BHC=180^\circ-\left(90^\circ-\gamma\right)-\left(90^\circ-\beta\right)=\beta+\gamma=180^\circ-\alpha .$$\n\n**Step 2: the reflection.** Let $H^{\prime}$ be the reflection of $H$ in the line $BC$. A reflection preserves distances and angles and fixes $B$ and $C$, so the triangle $BH^{\prime}C$ is congruent to $BHC$ and $$\angle BH^{\prime}C=\angle BHC=180^\circ-\alpha .$$\n\n**Step 3: a cyclic quadrilateral.** The points $A$ and $H^{\prime}$ lie on opposite sides of the line $BC$ (for an acute triangle the altitudes meet inside, and the reflection sends $H$ across the side). In the quadrilateral $ABH^{\prime}C$ the opposite angles at $A$ and $H^{\prime}$ add to $$\alpha+\left(180^\circ-\alpha\right)=180^\circ .$$\n\nBy the cyclic criterion $ABH^{\prime}C$ is inscribed in a circle — and the circle through $A$, $B$, $C$ is unique, namely the circumcircle. So $H^{\prime}$ lies on it. $\blacksquare$\n\n*Corollary.* The same trick shows that the reflection of $H$ in the **midpoint** of $BC$ is the point diametrically opposite $A$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 3,
   'q': {'ru': r'Пусть $O$ — центр описанной окружности треугольника $ABC$, $H$ — точка пересечения его высот, а $M$ — середина стороны $BC$. Докажите, что $$AH=2\,OM .$$',
         'en': r'Let $O$ be the circumcentre of a triangle $ABC$, $H$ its orthocentre and $M$ the midpoint of $BC$. Prove that $$AH=2\,OM .$$'},
   'hint': {'ru': r'Рассмотрите точку $A^{\prime}$, диаметрально противоположную $A$, и докажите, что $BHCA^{\prime}$ — параллелограмм.',
            'en': r'Consider the antipode $A^{\prime}$ of $A$ and show that $BHCA^{\prime}$ is a parallelogram.'},
   'sol': {'ru': r'Пусть $A^{\prime}$ — точка описанной окружности, диаметрально противоположная вершине $A$.\n\n**Шаг 1: $BH\parallel A^{\prime}C$.** Отрезок $BH$ лежит на высоте из вершины $B$, поэтому $BH\perp AC$. С другой стороны, угол $\angle ACA^{\prime}$ опирается на диаметр $AA^{\prime}$, значит равен $90^\circ$, то есть $A^{\prime}C\perp AC$. Две прямые, перпендикулярные одной и той же прямой, параллельны: $$BH\parallel A^{\prime}C .$$\n\n**Шаг 2: $CH\parallel A^{\prime}B$.** Точно так же $CH\perp AB$ и $A^{\prime}B\perp AB$ (угол $\angle ABA^{\prime}$ тоже опирается на диаметр), значит $$CH\parallel A^{\prime}B .$$\n\n**Шаг 3: параллелограмм.** В четырёхугольнике $BHCA^{\prime}$ обе пары противоположных сторон параллельны, значит это параллелограмм. Его диагонали $BC$ и $HA^{\prime}$ делятся точкой пересечения пополам. Но середина $BC$ — это точка $M$, следовательно $M$ — и середина отрезка $HA^{\prime}$.\n\n**Шаг 4: средняя линия.** Рассмотрим треугольник $AHA^{\prime}$. Точка $O$ — середина стороны $AA^{\prime}$ (это центр окружности, а $AA^{\prime}$ — диаметр), точка $M$ — середина стороны $HA^{\prime}$ (шаг 3). Значит $OM$ — средняя линия этого треугольника, и $$OM=\frac{AH}{2},\qquad\text{то есть}\qquad AH=2\,OM . \qquad\blacksquare$$\n\n*Попутно* мы получили, что $OM\parallel AH$, а вместе с этим — известный факт: точки $O$, $G$ и $H$ лежат на одной прямой (прямой Эйлера), причём $OH=3\,OG$.',
           'en': r'Let $A^{\prime}$ be the point of the circumcircle diametrically opposite $A$.\n\n**Step 1: $BH\parallel A^{\prime}C$.** The segment $BH$ lies on the altitude from $B$, so $BH\perp AC$. On the other hand $\angle ACA^{\prime}$ subtends the diameter $AA^{\prime}$ and hence is $90^\circ$, so $A^{\prime}C\perp AC$. Two lines perpendicular to the same line are parallel: $$BH\parallel A^{\prime}C .$$\n\n**Step 2: $CH\parallel A^{\prime}B$.** Likewise $CH\perp AB$ and $A^{\prime}B\perp AB$ ($\angle ABA^{\prime}$ also subtends the diameter), so $$CH\parallel A^{\prime}B .$$\n\n**Step 3: a parallelogram.** In the quadrilateral $BHCA^{\prime}$ both pairs of opposite sides are parallel, so it is a parallelogram, and its diagonals $BC$ and $HA^{\prime}$ bisect each other. The midpoint of $BC$ is $M$, so $M$ is also the midpoint of $HA^{\prime}$.\n\n**Step 4: a midline.** Consider the triangle $AHA^{\prime}$. The point $O$ is the midpoint of $AA^{\prime}$ (it is the centre and $AA^{\prime}$ a diameter), and $M$ is the midpoint of $HA^{\prime}$ (Step 3). So $OM$ is a midline of that triangle and $$OM=\frac{AH}{2},\qquad\text{that is}\qquad AH=2\,OM . \qquad\blacksquare$$\n\n*Along the way* we also got $OM\parallel AH$, and with it the known fact that $O$, $G$ and $H$ are collinear (the Euler line), with $OH=3\,OG$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 3,
   'q': {'ru': r'Четырёхугольник $ABCD$ вписан в окружность, и его диагонали перпендикулярны. Докажите, что расстояние от центра окружности до стороны $AB$ равно половине противоположной стороны $CD$.',
         'en': r'A cyclic quadrilateral $ABCD$ has perpendicular diagonals. Prove that the distance from the centre of the circle to the side $AB$ equals half the opposite side $CD$.'},
   'hint': {'ru': r'Расстояние от центра до хорды $AB$ равно $R\cos$ вписанного угла... точнее: проведите серединный перпендикуляр к $AB$ и посчитайте дуги.',
            'en': r'Drop the perpendicular from the centre to $AB$ and count arcs.'},
   'sol': {'ru': r'Пусть $O$ — центр окружности радиуса $R$, диагонали пересекаются в точке $P$, и $\angle APB=90^\circ$. Пусть $N$ — середина хорды $AB$; тогда $ON\perp AB$, и $ON$ — искомое расстояние.\n\n**Шаг 1: дуги.** Обозначим дуги (в градусах) $$\overset{\frown}{AB}=2u,\qquad \overset{\frown}{BC}=2v,\qquad \overset{\frown}{CD}=2w,\qquad \overset{\frown}{DA}=2t,$$ так что $u+v+w+t=180^\circ$.\n\nУгол между пересекающимися хордами равен полусумме двух дуг, которые они высекают: $$\angle APB=\frac{\overset{\frown}{AB}+\overset{\frown}{CD}}{2}=u+w .$$ Условие перпендикулярности даёт $$u+w=90^\circ .$$\n\n**Шаг 2: расстояние до хорды.** В прямоугольном треугольнике $ONA$ гипотенуза $OA=R$, а центральный угол $\angle AON$ равен половине центрального угла $\angle AOB=2u$, то есть $\angle AON=u$. Значит $$ON=R\cos u .$$\n\n**Шаг 3: длина хорды $CD$.** Хорда стягивает центральный угол $\overset{\frown}{CD}=2w$, поэтому $$CD=2R\sin w .$$\n\n**Шаг 4: сравнение.** Из шага 1 $w=90^\circ-u$, поэтому $\sin w=\cos u$ и $$\frac{CD}{2}=R\sin w=R\cos u=ON . \qquad\blacksquare$$\n\n*Замечание.* Тот же результат означает, что прямая $ON$, продолженная за $N$, проходит через середину стороны $CD$ — это теорема Брахмагупты для вписанных четырёхугольников с перпендикулярными диагоналями.',
           'en': r'Let $O$ be the centre of the circle of radius $R$, let the diagonals meet at $P$ with $\angle APB=90^\circ$, and let $N$ be the midpoint of the chord $AB$; then $ON\perp AB$ and $ON$ is the distance in question.\n\n**Step 1: the arcs.** Write the arcs (in degrees) as $$\overset{\frown}{AB}=2u,\qquad \overset{\frown}{BC}=2v,\qquad \overset{\frown}{CD}=2w,\qquad \overset{\frown}{DA}=2t,$$ so $u+v+w+t=180^\circ$.\n\nThe angle between two intersecting chords is half the sum of the two arcs they cut off: $$\angle APB=\frac{\overset{\frown}{AB}+\overset{\frown}{CD}}{2}=u+w ,$$ and perpendicularity gives $$u+w=90^\circ .$$\n\n**Step 2: distance to a chord.** In the right triangle $ONA$ the hypotenuse is $OA=R$, and the angle $\angle AON$ is half the central angle $\angle AOB=2u$, that is $\angle AON=u$. Hence $$ON=R\cos u .$$\n\n**Step 3: the length of $CD$.** That chord subtends the central angle $\overset{\frown}{CD}=2w$, so $$CD=2R\sin w .$$\n\n**Step 4: compare.** Step 1 gives $w=90^\circ-u$, so $\sin w=\cos u$ and $$\frac{CD}{2}=R\sin w=R\cos u=ON . \qquad\blacksquare$$\n\n*Remark.* The same result says that the line $ON$, extended beyond $N$, passes through the midpoint of $CD$ — Brahmagupta’s theorem for cyclic quadrilaterals with perpendicular diagonals.'}},
 ],
}
