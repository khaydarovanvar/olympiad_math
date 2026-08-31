# -*- coding: utf-8 -*-
"""Topic 14 — The pigeonhole principle."""

_boxes = []
for i in range(4):
    _boxes.append('<rect class="ln" x="%d" y="40" width="70" height="80" rx="6" fill="none"/>' % (20 + i * 90))
_dots = [(48, 80), (75, 80), (138, 80), (228, 80), (255, 80), (318, 80)]
_boxes += ['<circle class="ptc" cx="%d" cy="%d" r="8"/>' % p for p in _dots]
FIG_HOLES = ('<svg viewBox="0 0 380 150" role="img" aria-label="Six objects in four boxes">'
             '%s<text class="sm" x="190" y="142" text-anchor="middle">'
             '6 &gt; 4</text></svg>' % ''.join(_boxes))

FIG_SQUARE = r'''<svg viewBox="0 0 260 260" role="img" aria-label="Five points in a square cut into four cells">
<rect class="ln" x="20" y="20" width="220" height="220" fill="none"/>
<path class="dsh" d="M130 20 V240 M20 130 H240"/>
<circle class="ptc" cx="62" cy="70" r="5"/><circle class="ptc" cx="98" cy="104" r="5"/>
<circle class="ptc" cx="188" cy="62" r="5"/><circle class="ptc" cx="70" cy="190" r="5"/>
<circle class="ptc" cx="192" cy="196" r="5"/>
<text class="sm" x="130" y="256" text-anchor="middle">2</text>
<text class="sm" x="8" y="134">2</text>
</svg>'''

LESSON = {
 'n': 14,
 'cat': 'comb',
 'title': {'ru': 'Принцип Дирихле', 'en': 'The pigeonhole principle'},
 'sub': {'ru': 'Самое простое утверждение в математике — и одно из самых сильных: как выбрать «клетки» так, чтобы задача решилась сама.',
         'en': 'The simplest statement in mathematics and one of the most powerful: how to choose the "boxes" so the problem solves itself.'},
 'goals': {
  'ru': [
   r'Знать простую и обобщённую формулировки принципа Дирихле.',
   r'Придумывать «клетки» — остатки, области, наборы признаков.',
   r'Применять принцип в задачах о делимости, геометрии и знакомствах.',
   r'Пользоваться усиленным вариантом — рассуждением о среднем значении.',
  ],
  'en': [
   r'Know the simple and the generalised form of the pigeonhole principle.',
   r'Invent the "boxes" — remainders, regions, sets of features.',
   r'Apply the principle to divisibility, geometry and acquaintance problems.',
   r'Use the strengthened form — the averaging argument.',
  ]},

 'sections': [

  # ------------------------------------------------------------------ 1
  {'h': {'ru': 'Формулировка', 'en': 'The statement'},
   'blocks': [
    {'t': 'thm',
     'name': {'ru': 'Принцип Дирихле', 'en': 'The pigeonhole principle'},
     'text': {
      'ru': r'Если $n$ предметов разложены по $k$ ящикам и $n>k$, то найдётся ящик, в котором лежит **хотя бы два** предмета.',
      'en': r'If $n$ objects are placed into $k$ boxes and $n>k$, then some box contains **at least two** objects.'}},

    {'t': 'fig', 'svg': FIG_HOLES,
     'cap': {'ru': 'Шесть предметов и четыре ящика: как ни раскладывай, где-то окажется больше одного.',
             'en': 'Six objects and four boxes: however they are placed, some box gets more than one.'}},

    {'t': 'proof',
     'text': {
      'ru': r'От противного. Пусть в каждом ящике не более одного предмета. Тогда всего предметов не больше $k$, что противоречит условию $n>k$. $\blacksquare$',
      'en': r'By contradiction. Suppose every box holds at most one object. Then there are at most $k$ objects in all, contradicting $n>k$. $\blacksquare$'}},

    {'t': 'thm',
     'name': {'ru': 'Обобщённый принцип', 'en': 'The generalised principle'},
     'text': {
      'ru': r'Если $n$ предметов разложены по $k$ ящикам, то найдётся ящик, в котором **не менее** $\left\lceil\dfrac nk\right\rceil$ предметов, и найдётся ящик, в котором **не более** $\left\lfloor\dfrac nk\right\rfloor$.',
      'en': r'If $n$ objects are placed into $k$ boxes, then some box holds **at least** $\left\lceil\dfrac nk\right\rceil$ objects, and some box holds **at most** $\left\lfloor\dfrac nk\right\rfloor$.'}},

    {'t': 'proof',
     'text': {
      'ru': r'Снова от противного. Пусть в каждом ящике не более $m$ предметов, где $m=\left\lceil\tfrac nk\right\rceil-1$. Тогда $$n\le km=k\left(\left\lceil\frac nk\right\rceil-1\right)<k\cdot\frac nk+k-k=n,$$ где мы воспользовались тем, что $\left\lceil x\right\rceil<x+1$. Получилось $n<n$ — противоречие. $\blacksquare$',
      'en': r'Again by contradiction. Suppose every box holds at most $m$ objects with $m=\left\lceil\tfrac nk\right\rceil-1$. Then $$n\le km=k\left(\left\lceil\frac nk\right\rceil-1\right)<k\cdot\frac nk+k-k=n,$$ using $\left\lceil x\right\rceil<x+1$. So $n<n$ — a contradiction. $\blacksquare$'}},

    {'t': 'idea',
     'name': {'ru': 'Почему это работает', 'en': 'Why this works'},
     'text': {
      'ru': r'Утверждение звучит тривиально — и в этом его сила. Оно позволяет доказать **существование** объекта, ни разу его не предъявив. Схема решения всегда одна и та же:\n\n**1)** назовите, что будет «предметами»;\n**2)** придумайте «ящики»;\n**3)** проверьте, что предметов больше, чем ящиков;\n**4)** переведите вывод «два предмета в одном ящике» обратно на язык задачи.\n\nВся трудность — в шаге **2**. Всё остальное — арифметика.',
      'en': r'The statement sounds trivial — and that is its strength. It proves the **existence** of an object without ever exhibiting one. The plan is always the same:\n\n**1)** say what the "objects" are;\n**2)** invent the "boxes";\n**3)** check that objects outnumber boxes;\n**4)** translate "two objects in one box" back into the language of the problem.\n\nAll the difficulty is in step **2**. The rest is arithmetic.'}},

    {'t': 'ex',
     'q': {'ru': r'В ящике лежат носки трёх цветов. Сколько носков нужно вынуть наугад, чтобы наверняка получить пару одного цвета? А чтобы наверняка получить две пары?',
           'en': r'A drawer holds socks of three colours. How many must be taken at random to be sure of one matching pair? And of two matching pairs?'},
     'steps': {
      'ru': [r'**Одна пара.** Предметы — вынутые носки, ящики — три цвета.',
             r'Трёх носков может не хватить: они могут оказаться всех трёх цветов.',
             r'Четыре носка при трёх цветах — по принципу Дирихле два попадут в один цвет.',
             r'**Две пары.** Возьмём $6$ носков. В худшем случае цвета распределятся как $4+1+1$ — тогда пар всего две (из четвёрки), этого хватает.',
             r'Проверим, что пяти мало: распределение $3+1+1$ даёт только одну пару. Значит нужно шесть.'],
      'en': [r'**One pair.** The objects are the socks taken out, the boxes are the three colours.',
             r'Three socks may fail: they can be one of each colour.',
             r'Four socks into three colours — by the pigeonhole principle two share a colour.',
             r'**Two pairs.** Take $6$ socks. In the worst case the colours split as $4+1+1$ — that still yields two pairs from the four, which is enough.',
             r'Check that five is not enough: a split $3+1+1$ gives only one pair. So six are needed.']},
     'ans': {'ru': r'$4$ носка для одной пары и $6$ для двух.',
             'en': r'$4$ socks for one pair and $6$ for two.'}},
   ]},

  # ------------------------------------------------------------------ 2
  {'h': {'ru': 'Клетки — это остатки', 'en': 'The boxes are remainders'},
   'blocks': [
    {'t': 'idea',
     'text': {
      'ru': r'В задачах о делимости «ящиками» почти всегда служат **остатки**. Остатков по модулю $m$ ровно $m$ штук, поэтому среди любых $m+1$ чисел найдутся два с одинаковым остатком — а значит, их **разность** делится на $m$.\n\nЭто и есть перевод с шага 4: «два предмета в одном ящике» означает «разность делится на $m$».',
      'en': r'In divisibility problems the "boxes" are almost always **remainders**. There are exactly $m$ remainders modulo $m$, so among any $m+1$ numbers two share a remainder — and hence their **difference** is divisible by $m$.\n\nThat is the step-4 translation: "two objects in one box" means "the difference is divisible by $m$".'}},

    {'t': 'ex',
     'q': {'ru': r'Докажите, что среди любых семи целых чисел найдутся два, разность которых делится на $6$.',
           'en': r'Prove that among any seven integers there are two whose difference is divisible by $6$.'},
     'steps': {
      'ru': [r'Предметы — семь данных чисел.',
             r'Ящики — шесть возможных остатков при делении на $6$: $0,1,2,3,4,5$.',
             r'$7>6$, значит по принципу Дирихле два числа попадут в один ящик, то есть дадут одинаковый остаток.',
             r'Если $a\equiv b\pmod6$, то $6\mid a-b$.'],
      'en': [r'The objects are the seven given numbers.',
             r'The boxes are the six possible remainders on division by $6$: $0,1,2,3,4,5$.',
             r'Since $7>6$, two numbers land in one box, that is they share a remainder.',
             r'And $a\equiv b\pmod6$ means $6\mid a-b$.']},
     'ans': {'ru': r'Такие два числа обязательно найдутся. $\blacksquare$',
             'en': r'Two such numbers must exist. $\blacksquare$'}},

    {'t': 'ex',
     'q': {'ru': r'Докажите, что существует число вида $\underbrace{11\ldots1}_{k}$, делящееся на $2023$.',
           'en': r'Prove that some number of the form $\underbrace{11\ldots1}_{k}$ is divisible by $2023$.'},
     'steps': {
      'ru': [r'Рассмотрим $2024$ числа $$R_1=1,\quad R_2=11,\quad \dots,\quad R_{2024}=\underbrace{11\ldots1}_{2024}.$$',
             r'Ящики — остатки по модулю $2023$; их ровно $2023$.',
             r'Чисел $2024>2023$, значит два из них дают одинаковый остаток: $R_i\equiv R_j$ при $i>j$.',
             r'Тогда $2023$ делит разность $$R_i-R_j=\underbrace{11\ldots1}_{i-j}\underbrace{00\ldots0}_{j}=R_{\,i-j}\cdot10^{\,j}.$$',
             r'Разложим $2023=7\cdot17^{2}$: среди простых множителей нет ни $2$, ни $5$, поэтому $\gcd(2023,10)=1$, а значит и $\gcd\left(2023,10^{j}\right)=1$.',
             r'Следовательно $2023$ делит именно $R_{\,i-j}$ — число из одних единиц.'],
      'en': [r'Consider the $2024$ numbers $$R_1=1,\quad R_2=11,\quad \dots,\quad R_{2024}=\underbrace{11\ldots1}_{2024}.$$',
             r'The boxes are the remainders modulo $2023$, and there are exactly $2023$ of them.',
             r'Since $2024>2023$, two of the numbers share a remainder: $R_i\equiv R_j$ with $i>j$.',
             r'Then $2023$ divides the difference $$R_i-R_j=\underbrace{11\ldots1}_{i-j}\underbrace{00\ldots0}_{j}=R_{\,i-j}\cdot10^{\,j}.$$',
             r'Factor $2023=7\cdot17^{2}$: neither $2$ nor $5$ occurs, so $\gcd(2023,10)=1$ and hence $\gcd\left(2023,10^{j}\right)=1$.',
             r'Therefore $2023$ divides $R_{\,i-j}$ itself — a number made of ones.']},
     'ans': {'ru': r'Такое число существует. $\blacksquare$ *Замечание:* тот же довод работает для любого $n$, взаимно простого с $10$.',
             'en': r'Such a number exists. $\blacksquare$ *Remark:* the same argument works for any $n$ coprime to $10$.'}},
   ]},

  # ------------------------------------------------------------------ 3
  {'h': {'ru': 'Клетки — это области', 'en': 'The boxes are regions'},
   'blocks': [
    {'t': 'idea',
     'text': {
      'ru': r'В геометрических задачах «ящиками» служат **части фигуры**. Разрежьте фигуру на куски малого размера, и точки, попавшие в один кусок, окажутся близко друг к другу.\n\nГлавное — правильно выбрать разрез: кусков должно быть меньше, чем точек, а сами куски — достаточно мелкими, чтобы полученная оценка расстояния была нужной.',
      'en': r'In geometry problems the "boxes" are **pieces of the figure**. Cut the figure into small pieces, and points landing in one piece are close to each other.\n\nThe art is in the cut: there must be fewer pieces than points, and the pieces must be small enough for the resulting distance bound to be the one you want.'}},

    {'t': 'ex',
     'q': {'ru': r'В квадрате со стороной $2$ отмечены пять точек. Докажите, что какие-то две из них находятся на расстоянии не больше $\sqrt2$.',
           'en': r'Five points are marked in a square of side $2$. Prove that two of them are at distance at most $\sqrt2$.'},
     'steps': {
      'ru': [r'Разрежем квадрат на четыре одинаковых квадрата со стороной $1$.',
             r'Предметы — пять точек, ящики — четыре маленьких квадрата. $5>4$, значит две точки попали в один квадратик.',
             r'Наибольшее расстояние между двумя точками квадрата со стороной $1$ — это его диагональ, то есть $\sqrt2$.',
             r'Значит расстояние между найденными двумя точками не превосходит $\sqrt2$.'],
      'en': [r'Cut the square into four equal squares of side $1$.',
             r'The objects are the five points, the boxes the four small squares. As $5>4$, two points land in one small square.',
             r'The largest distance between two points of a unit square is its diagonal, $\sqrt2$.',
             r'So the two points found are at distance at most $\sqrt2$.']},
     'ans': {'ru': r'Такие две точки найдутся. $\blacksquare$',
             'en': r'Two such points exist. $\blacksquare$'}},

    {'t': 'fig', 'svg': FIG_SQUARE,
     'cap': {'ru': 'Квадрат со стороной $2$ разрезан на четыре единичных; пять точек не могут разойтись по четырём клеткам.',
             'en': 'A square of side $2$ cut into four unit cells; five points cannot spread over four cells.'}},

    {'t': 'warn',
     'text': {
      'ru': r'Аккуратность с границами. Точка может попасть ровно на линию разреза — тогда она принадлежит сразу двум кускам. Это не мешает: договоритесь заранее, к какому куску относить такие точки (например, к левому нижнему), и рассуждение останется верным. Главное — сказать об этом в решении одной строкой.',
      'en': r'Mind the boundaries. A point may land exactly on a cutting line, belonging to two pieces at once. This does no harm: agree in advance which piece such points go to (say, the lower-left one) and the argument stands. Just say so in one line of the solution.'}},

    {'t': 'ex',
     'q': {'ru': r'В квадрате со стороной $1$ отмечено $51$ точка. Докажите, что какие-то три из них лежат внутри круга радиуса $\tfrac17$.',
           'en': r'Fifty-one points are marked in a unit square. Prove that some three of them lie inside a circle of radius $\tfrac17$.'},
     'steps': {
      'ru': [r'Разрежем квадрат на $25$ одинаковых квадратиков со стороной $\tfrac15$.',
             r'Точек $51$, клеток $25$, и $51>2\cdot25=50$. По обобщённому принципу Дирихле в какой-то клетке окажется не менее $\left\lceil\tfrac{51}{25}\right\rceil=3$ точек.',
             r'Все точки такой клетки лежат в круге, описанном около неё. Его радиус равен половине диагонали квадратика: $$R=\frac12\cdot\frac{\sqrt2}{5}=\frac{\sqrt2}{10}.$$',
             r'Сравним с $\tfrac17$: $$\frac{\sqrt2}{10}\approx0{,}1414<0{,}1429\approx\frac17 .$$',
             r'Значит три точки лежат в круге радиуса $\tfrac{\sqrt2}{10}$, а он целиком помещается в круг радиуса $\tfrac17$.'],
      'en': [r'Cut the square into $25$ equal cells of side $\tfrac15$.',
             r'There are $51$ points and $25$ cells, and $51>2\cdot25=50$. By the generalised principle some cell holds at least $\left\lceil\tfrac{51}{25}\right\rceil=3$ points.',
             r'All points of a cell lie in its circumscribed circle, whose radius is half the diagonal: $$R=\frac12\cdot\frac{\sqrt2}{5}=\frac{\sqrt2}{10}.$$',
             r'Compare with $\tfrac17$: $$\frac{\sqrt2}{10}\approx0.1414<0.1429\approx\frac17 .$$',
             r'So three points lie in a circle of radius $\tfrac{\sqrt2}{10}$, which fits inside one of radius $\tfrac17$.']},
     'ans': {'ru': r'Такие три точки найдутся. $\blacksquare$',
             'en': r'Three such points exist. $\blacksquare$'}},
   ]},

  # ------------------------------------------------------------------ 4
  {'h': {'ru': 'Клетки — это признаки', 'en': 'The boxes are features'},
   'blocks': [
    {'t': 'idea',
     'text': {
      'ru': r'Иногда «ящик» — это не остаток и не область, а **набор характеристик** объекта: чётность координат, цвет, степень вершины, разложение на множители. Если характеристик мало, а объектов много, два объекта окажутся одинаковыми по всем характеристикам — и это даст нужный вывод.',
      'en': r'Sometimes a "box" is neither a remainder nor a region but a **set of features** of the object: the parity of its coordinates, its colour, the degree of a vertex, a factorisation. If there are few feature-patterns and many objects, two objects agree on every feature — and that gives the conclusion.'}},

    {'t': 'ex',
     'q': {'ru': r'На плоскости отмечены пять точек с целыми координатами. Докажите, что середина какого-то из отрезков между ними тоже имеет целые координаты.',
           'en': r'Five points with integer coordinates are marked in the plane. Prove that the midpoint of some segment between two of them also has integer coordinates.'},
     'steps': {
      'ru': [r'Середина отрезка с концами $\left(x_1,y_1\right)$ и $\left(x_2,y_2\right)$ имеет координаты $\left(\tfrac{x_1+x_2}{2},\tfrac{y_1+y_2}{2}\right)$.',
             r'Они целые тогда и только тогда, когда $x_1+x_2$ и $y_1+y_2$ чётны, то есть когда $x_1,x_2$ одинаковой чётности и $y_1,y_2$ тоже.',
             r'Ящики — четыре пары чётностей: $(\text{чёт},\text{чёт})$, $(\text{чёт},\text{нечёт})$, $(\text{нечёт},\text{чёт})$, $(\text{нечёт},\text{нечёт})$.',
             r'Точек пять, ящиков четыре, значит две точки попадут в один ящик.',
             r'У них совпадают чётности обеих координат — а это ровно условие целочисленности середины.'],
      'en': [r'The midpoint of a segment with ends $\left(x_1,y_1\right)$ and $\left(x_2,y_2\right)$ is $\left(\tfrac{x_1+x_2}{2},\tfrac{y_1+y_2}{2}\right)$.',
             r'These are integers exactly when $x_1+x_2$ and $y_1+y_2$ are even, that is when $x_1,x_2$ have the same parity and so do $y_1,y_2$.',
             r'The boxes are the four parity patterns: $(\text{even},\text{even})$, $(\text{even},\text{odd})$, $(\text{odd},\text{even})$, $(\text{odd},\text{odd})$.',
             r'With five points and four boxes, two points share a box.',
             r'They agree in the parity of both coordinates — exactly the condition for an integer midpoint.']},
     'ans': {'ru': r'Такая пара точек найдётся. $\blacksquare$',
             'en': r'Such a pair exists. $\blacksquare$'}},

    {'t': 'thm',
     'name': {'ru': 'Задача о шести знакомых', 'en': 'The party of six'},
     'text': {
      'ru': r'В любой компании из шести человек найдутся либо трое попарно знакомых, либо трое попарно незнакомых.',
      'en': r'In any group of six people there are either three mutual acquaintances or three mutual strangers.'}},

    {'t': 'proof',
     'text': {
      'ru': r'Возьмём одного человека — назовём его $A$. Остальных пятеро, и с каждым из них $A$ либо знаком, либо нет. Два варианта, пять человек: по обобщённому принципу Дирихле найдётся вариант, встречающийся не менее $\left\lceil\tfrac52\right\rceil=3$ раз.\n\nПусть для определённости $A$ знаком по крайней мере с тремя людьми; обозначим троих из них $B$, $C$, $D$. (Случай «незнаком с тремя» разбирается дословно так же с заменой слова «знаком» на «незнаком».)\n\n**Случай 1.** Какие-то двое из $B,C,D$ знакомы между собой — скажем, $B$ и $C$. Тогда $A$, $B$, $C$ попарно знакомы, и тройка найдена.\n\n**Случай 2.** Никакие двое из $B,C,D$ не знакомы. Тогда $B$, $C$, $D$ попарно незнакомы — и тройка снова найдена.\n\nДругих случаев нет. $\blacksquare$\n\n*Замечание.* Для пяти человек утверждение неверно: рассадите пятерых по кругу и объявите знакомыми только соседей — тогда ни трёх попарно знакомых, ни трёх попарно незнакомых не найдётся. Поэтому число шесть здесь точное.',
      'en': r'Take one person and call them $A$. The other five are each either known to $A$ or not. Two options, five people: by the generalised principle one option occurs at least $\left\lceil\tfrac52\right\rceil=3$ times.\n\nSay $A$ knows at least three of them, and call three of these $B$, $C$, $D$. (The "does not know three" case runs word for word the same, with "knows" replaced by "does not know".)\n\n**Case 1.** Two of $B,C,D$ know each other — say $B$ and $C$. Then $A$, $B$, $C$ are mutual acquaintances, and we are done.\n\n**Case 2.** No two of $B,C,D$ know each other. Then $B$, $C$, $D$ are mutual strangers — done again.\n\nThere are no other cases. $\blacksquare$\n\n*Remark.* For five people the statement fails: seat five in a circle and declare only neighbours acquainted — then there are neither three mutual acquaintances nor three mutual strangers. So six is exactly the right number.'}},
   ]},

  # ------------------------------------------------------------------ 5
  {'h': {'ru': 'Усиленный вариант: рассуждение о среднем', 'en': 'The strengthened form: averaging'},
   'blocks': [
    {'t': 'thm',
     'name': {'ru': 'Принцип среднего', 'en': 'The averaging principle'},
     'text': {
      'ru': r'Если сумма $n$ чисел равна $S$, то среди них есть число, **не меньшее** $\dfrac Sn$, и есть число, **не большее** $\dfrac Sn$.',
      'en': r'If $n$ numbers add up to $S$, then one of them is **at least** $\dfrac Sn$ and one is **at most** $\dfrac Sn$.'}},

    {'t': 'proof',
     'text': {
      'ru': r'Если бы все числа были строго меньше $\tfrac Sn$, их сумма была бы строго меньше $n\cdot\tfrac Sn=S$ — противоречие. Второе утверждение доказывается так же. $\blacksquare$',
      'en': r'If every number were strictly less than $\tfrac Sn$, their sum would be strictly less than $n\cdot\tfrac Sn=S$ — a contradiction. The second statement is proved the same way. $\blacksquare$'}},

    {'t': 'idea',
     'text': {
      'ru': r'Это тот же принцип Дирихле, только с числами вместо предметов. Он особенно полезен, когда нужно доказать существование объекта «не хуже среднего»: например, что найдётся строка таблицы с большой суммой, или сектор круга с большим числом точек.\n\nТипичная формулировка: «докажите, что найдётся $\dots$, для которого величина не меньше $\dots$». Почти всегда достаточно посчитать сумму по всем объектам и поделить на их количество.',
      'en': r'This is the pigeonhole principle again, with numbers instead of objects. It is especially useful for proving that something "no worse than average" exists: a row of a table with a large sum, say, or a sector of a disc with many points.\n\nThe typical wording is "prove that there is a $\dots$ for which the quantity is at least $\dots$". Almost always it suffices to sum over all the objects and divide by their number.'}},

    {'t': 'ex',
     'q': {'ru': r'В таблице $10\times10$ расставлены числа так, что сумма всех чисел равна $1000$. Докажите, что найдётся строка, сумма чисел которой не меньше $100$.',
           'en': r'A $10\times10$ table is filled with numbers adding up to $1000$. Prove that some row has a sum of at least $100$.'},
     'steps': {
      'ru': [r'Обозначим суммы строк через $s_1,\dots,s_{10}$.',
             r'Каждое число таблицы попадает ровно в одну строку, поэтому $$s_1+s_2+\dots+s_{10}=1000 .$$',
             r'Это сумма десяти чисел, равная $1000$; их среднее равно $\tfrac{1000}{10}=100$.',
             r'По принципу среднего одно из чисел $s_i$ не меньше $100$.'],
      'en': [r'Write $s_1,\dots,s_{10}$ for the row sums.',
             r'Each entry lies in exactly one row, so $$s_1+s_2+\dots+s_{10}=1000 .$$',
             r'These are ten numbers adding to $1000$, so their average is $\tfrac{1000}{10}=100$.',
             r'By the averaging principle some $s_i$ is at least $100$.']},
     'ans': {'ru': r'Такая строка найдётся. $\blacksquare$ (Точно так же найдётся строка с суммой не больше $100$.)',
             'en': r'Such a row exists. $\blacksquare$ (Equally, some row has sum at most $100$.)'}},
   ]},
 ],

 # ==================================================================== problems
 'problems': [

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'В классе $30$ учеников. Докажите, что найдутся трое, родившиеся в один месяц.',
         'en': r'A class has $30$ pupils. Prove that three of them were born in the same month.'},
   'hint': {'ru': r'Обобщённый принцип: $30$ предметов, $12$ ящиков.',
            'en': r'The generalised principle: $30$ objects, $12$ boxes.'},
   'sol': {'ru': r'Предметы — ученики, ящики — двенадцать месяцев.\n\nПо обобщённому принципу Дирихле найдётся месяц, в который родились не менее $$\left\lceil\frac{30}{12}\right\rceil=\left\lceil2{,}5\right\rceil=3$$ учеников. $\blacksquare$\n\n*Замечание.* Для двоих хватило бы $13$ учеников, для четверых понадобилось бы $37$: чтобы гарантировать $k$ человек в одном месяце, нужно $12(k-1)+1$ учеников.',
           'en': r'The objects are the pupils, the boxes the twelve months.\n\nBy the generalised principle some month has at least $$\left\lceil\frac{30}{12}\right\rceil=\left\lceil2.5\right\rceil=3$$ pupils born in it. $\blacksquare$\n\n*Remark.* Two would need only $13$ pupils, four would need $37$: to force $k$ people into one month you need $12(k-1)+1$ pupils.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'В коробке лежат $10$ красных, $8$ синих и $6$ зелёных шаров. Сколько шаров нужно вынуть наугад, чтобы наверняка среди них оказались четыре шара одного цвета?',
         'en': r'A box holds $10$ red, $8$ blue and $6$ green balls. How many must be drawn at random to be sure of four balls of one colour?'},
   'hint': {'ru': r'Посмотрите на самый неудачный расклад.',
            'en': r'Look at the worst possible draw.'},
   'sol': {'ru': r'**Худший случай.** Можно вынуть по три шара каждого цвета — всего $3\cdot3=9$ шаров — и не получить четвёрки одного цвета. Значит девяти шаров недостаточно.\n\n**Десять шаров хватает.** Если бы среди десяти вынутых каждого цвета было не более трёх, всего было бы не более $9$ шаров — противоречие. Значит какого-то цвета не менее четырёх.\n\n(Проверим, что такой набор вообще возможен: каждого цвета в коробке хотя бы четыре шара, так что условие осмысленно.)\n\n**Ответ:** $10$ шаров.',
           'en': r'**The worst case.** One can draw three of each colour — $3\cdot3=9$ balls — without getting four of any colour. So nine are not enough.\n\n**Ten suffice.** If among ten drawn balls every colour appeared at most three times, there would be at most $9$ balls — a contradiction. So some colour appears at least four times.\n\n(And such a draw is possible at all: the box holds at least four of each colour, so the question makes sense.)\n\n**Answer:** $10$ balls.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Докажите, что среди любых восьми целых чисел найдутся два, разность которых делится на $7$.',
         'en': r'Prove that among any eight integers there are two whose difference is divisible by $7$.'},
   'hint': {'ru': r'Остатки по модулю $7$.', 'en': r'Remainders modulo $7$.'},
   'sol': {'ru': r'Ящики — семь остатков при делении на $7$: $0,1,2,3,4,5,6$. Предметы — восемь данных чисел.\n\nТак как $8>7$, по принципу Дирихле два числа $a$ и $b$ дают одинаковый остаток, то есть $a\equiv b\pmod7$. Тогда $7$ делит $a-b$. $\blacksquare$\n\n*Обобщение.* Среди любых $m+1$ целых чисел найдутся два, разность которых делится на $m$. Число $m+1$ здесь точное: числа $1,2,\dots,m$ дают попарно различные остатки, и ни одна их разность на $m$ не делится.',
           'en': r'The boxes are the seven remainders modulo $7$: $0,1,2,3,4,5,6$. The objects are the eight given numbers.\n\nSince $8>7$, two numbers $a$ and $b$ share a remainder, that is $a\equiv b\pmod7$, and then $7$ divides $a-b$. $\blacksquare$\n\n*Generalisation.* Among any $m+1$ integers two have a difference divisible by $m$. The bound $m+1$ is sharp: the numbers $1,2,\dots,m$ have pairwise different remainders and no difference of theirs is divisible by $m$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'В равностороннем треугольнике со стороной $1$ отмечены пять точек. Докажите, что какие-то две находятся на расстоянии не больше $\tfrac12$.',
         'en': r'Five points are marked in an equilateral triangle of side $1$. Prove that two of them are at distance at most $\tfrac12$.'},
   'hint': {'ru': r'Разрежьте треугольник средними линиями.',
            'en': r'Cut the triangle by its midlines.'},
   'sol': {'ru': r'Проведём три средние линии. Они разрежут треугольник на **четыре** равносторонних треугольника со стороной $\tfrac12$ каждый.\n\nПредметы — пять точек, ящики — четыре маленьких треугольника. Так как $5>4$, две точки попадут в один треугольник (точки на границах отнесём к любому из содержащих их кусков, зафиксировав правило заранее).\n\nВ равностороннем треугольнике наибольшее расстояние между точками равно его стороне, то есть $\tfrac12$. Значит найденные две точки удалены не более чем на $\tfrac12$. $\blacksquare$',
           'en': r'Draw the three midlines. They cut the triangle into **four** equilateral triangles of side $\tfrac12$.\n\nThe objects are the five points, the boxes the four small triangles. As $5>4$, two points land in one triangle (points on a boundary are assigned to one of the pieces containing them by a rule fixed in advance).\n\nIn an equilateral triangle the greatest distance between points is its side, here $\tfrac12$. So the two points found are at distance at most $\tfrac12$. $\blacksquare$'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Докажите, что в любой компании найдутся двое, имеющие одинаковое число знакомых внутри этой компании.',
         'en': r'Prove that in any group two people have the same number of acquaintances within the group.'},
   'hint': {'ru': r'Числа знакомых лежат от $0$ до $n-1$, но крайние значения не могут встретиться одновременно.',
            'en': r'The counts lie between $0$ and $n-1$, but the two extremes cannot occur together.'},
   'sol': {'ru': r'Пусть в компании $n\ge2$ человек. Число знакомых каждого — целое от $0$ до $n-1$, то есть $n$ возможных значений при $n$ людях. Этого мало для прямого применения принципа Дирихле, поэтому заметим важное:\n\n**Значения $0$ и $n-1$ не могут встретиться одновременно.** Если кто-то знаком со всеми ($n-1$ знакомых), то у каждого есть хотя бы один знакомый, и значения $0$ ни у кого быть не может. Наоборот, если кто-то ни с кем не знаком, то никто не может быть знаком со всеми.\n\nЗначит фактически используется не более $n-1$ значений: либо $\{0,1,\dots,n-2\}$, либо $\{1,2,\dots,n-1\}$.\n\nТеперь предметов $n$, а ящиков не более $n-1$, и по принципу Дирихле два человека имеют одинаковое число знакомых. $\blacksquare$\n\n*На языке графов:* в любом графе с $n\ge2$ вершинами найдутся две вершины одинаковой степени.',
           'en': r'Let the group have $n\ge2$ people. Each person’s number of acquaintances is an integer from $0$ to $n-1$ — $n$ possible values for $n$ people, too many for the principle to bite directly. So note something important:\n\n**The values $0$ and $n-1$ cannot both occur.** If someone knows everybody ($n-1$ acquaintances), then everyone has at least one acquaintance and nobody can have $0$. Conversely, if someone knows nobody, then nobody can know everybody.\n\nSo at most $n-1$ values actually occur: either $\{0,1,\dots,n-2\}$ or $\{1,2,\dots,n-1\}$.\n\nNow there are $n$ objects and at most $n-1$ boxes, so two people have equal counts. $\blacksquare$\n\n*In graph language:* every graph with $n\ge2$ vertices has two vertices of equal degree.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Из чисел $1,2,\dots,100$ выбрали $51$ число. Докажите, что среди выбранных найдутся два, сумма которых равна $101$.',
         'en': r'Fifty-one numbers are chosen from $1,2,\dots,100$. Prove that two of them add up to $101$.'},
   'hint': {'ru': r'Разбейте все сто чисел на пары с суммой $101$.',
            'en': r'Split the hundred numbers into pairs summing to $101$.'},
   'sol': {'ru': r'Разобьём числа от $1$ до $100$ на пары с суммой $101$: $$\{1,100\},\ \{2,99\},\ \{3,98\},\ \dots,\ \{50,51\}.$$ Пар ровно $50$, и каждое число попадает ровно в одну пару.\n\nПредметы — $51$ выбранное число, ящики — эти $50$ пар. Так как $51>50$, два выбранных числа лежат в одной паре — а значит, их сумма равна $101$. $\blacksquare$\n\n*Точность оценки.* Для $50$ чисел утверждение неверно: возьмите $1,2,\dots,50$ — никакие два из них не дают в сумме $101$.',
           'en': r'Split the numbers $1$ to $100$ into pairs summing to $101$: $$\{1,100\},\ \{2,99\},\ \{3,98\},\ \dots,\ \{50,51\}.$$ There are exactly $50$ pairs, and every number lies in exactly one.\n\nThe objects are the $51$ chosen numbers, the boxes these $50$ pairs. Since $51>50$, two chosen numbers lie in one pair — so they add up to $101$. $\blacksquare$\n\n*Sharpness.* For $50$ numbers the statement fails: take $1,2,\dots,50$, no two of which sum to $101$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Из чисел $1,2,\dots,2n$ выбрали $n+1$ число. Докажите, что среди выбранных найдутся два, одно из которых делится на другое.',
         'en': r'From $1,2,\dots,2n$ choose $n+1$ numbers. Prove that one of the chosen numbers divides another.'},
   'hint': {'ru': r'Запишите каждое число в виде $2^{k}\cdot m$ с нечётным $m$.',
            'en': r'Write each number as $2^{k}\cdot m$ with $m$ odd.'},
   'sol': {'ru': r'**Ящики.** Каждое натуральное число однозначно записывается в виде $$a=2^{k}\cdot m,\qquad k\ge0,\quad m\ \text{нечётно}.$$ Назовём $m$ **нечётной частью** числа $a$. Для чисел из отрезка $[1,2n]$ нечётная часть — это одно из чисел $$1,3,5,\dots,2n-1,$$ то есть одно из $n$ значений.\n\n**Применяем принцип.** Предметы — $n+1$ выбранное число, ящики — $n$ возможных нечётных частей. По принципу Дирихле найдутся два выбранных числа с одинаковой нечётной частью: $$a=2^{i}m,\qquad b=2^{j}m,\qquad i\ne j .$$\n\n**Вывод.** Пусть для определённости $i<j$. Тогда $$b=a\cdot2^{\,j-i},$$ то есть $a$ делит $b$. $\blacksquare$\n\n*Точность оценки.* Для $n$ чисел утверждение неверно: возьмите $n+1, n+2,\dots,2n$. Ни одно из них не делится на другое, потому что удвоение наименьшего из них уже выходит за $2n$.',
           'en': r'**The boxes.** Every positive integer is written uniquely as $$a=2^{k}\cdot m,\qquad k\ge0,\quad m\ \text{odd}.$$ Call $m$ the **odd part** of $a$. For numbers in $[1,2n]$ the odd part is one of $$1,3,5,\dots,2n-1,$$ that is one of $n$ values.\n\n**Apply the principle.** The objects are the $n+1$ chosen numbers, the boxes the $n$ possible odd parts. So two chosen numbers share an odd part: $$a=2^{i}m,\qquad b=2^{j}m,\qquad i\ne j .$$\n\n**Conclusion.** Say $i<j$. Then $$b=a\cdot2^{\,j-i},$$ so $a$ divides $b$. $\blacksquare$\n\n*Sharpness.* For $n$ numbers the statement fails: take $n+1, n+2,\dots,2n$. None divides another, since doubling the smallest of them already exceeds $2n$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Из чисел $1,2,\dots,2n$ выбрали $n+1$ число. Докажите, что среди выбранных найдутся два взаимно простых.',
         'en': r'From $1,2,\dots,2n$ choose $n+1$ numbers. Prove that two of them are coprime.'},
   'hint': {'ru': r'Разбейте отрезок на пары соседних чисел.',
            'en': r'Split the range into pairs of consecutive numbers.'},
   'sol': {'ru': r'**Ящики.** Разобьём числа $1,2,\dots,2n$ на $n$ пар соседних: $$\{1,2\},\ \{3,4\},\ \{5,6\},\ \dots,\ \{2n-1,2n\}.$$\n\n**Применяем принцип.** Выбрано $n+1$ число, а пар $n$, поэтому какие-то два выбранных числа лежат в одной паре — то есть являются **соседними**: $a$ и $a+1$.\n\n**Соседние числа взаимно просты.** Пусть $d$ делит и $a$, и $a+1$. Тогда $d$ делит их разность $(a+1)-a=1$, значит $d=1$.\n\nЗначит найденные два числа взаимно просты. $\blacksquare$\n\n*Точность оценки.* Для $n$ чисел утверждение неверно: возьмите все чётные числа $2,4,\dots,2n$ — любые два из них делятся на $2$.',
           'en': r'**The boxes.** Split $1,2,\dots,2n$ into $n$ pairs of consecutive numbers: $$\{1,2\},\ \{3,4\},\ \{5,6\},\ \dots,\ \{2n-1,2n\}.$$\n\n**Apply the principle.** With $n+1$ numbers chosen and $n$ pairs, two chosen numbers lie in one pair — that is, they are **consecutive**: $a$ and $a+1$.\n\n**Consecutive numbers are coprime.** If $d$ divides both $a$ and $a+1$ then $d$ divides $(a+1)-a=1$, so $d=1$.\n\nHence the two numbers found are coprime. $\blacksquare$\n\n*Sharpness.* For $n$ numbers the statement fails: take all the even numbers $2,4,\dots,2n$, any two of which share the factor $2$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Докажите, что существует число, записываемое только цифрами $0$ и $1$ и делящееся на $2025$.',
         'en': r'Prove that some number written only with the digits $0$ and $1$ is divisible by $2025$.'},
   'hint': {'ru': r'Рассмотрите числа $1,11,111,\dots$ и их остатки, а потом умножьте на подходящую степень десяти.',
            'en': r'Look at $1,11,111,\dots$ and their remainders, then multiply by a suitable power of ten.'},
   'sol': {'ru': r'Разложим $2025=81\cdot25=3^{4}\cdot5^{2}$.\n\n**Шаг 1: числа из одних единиц.** Рассмотрим $2026$ чисел $$R_1=1,\ R_2=11,\ \dots,\ R_{2026}=\underbrace{11\ldots1}_{2026},$$ и их остатки по модулю $81$. Остатков $81$, чисел больше, значит два дают одинаковый остаток: $R_i\equiv R_j$ при $i>j$. Тогда $$81\ \big|\ R_i-R_j=R_{\,i-j}\cdot10^{\,j}.$$ Число $81=3^{4}$ взаимно просто с $10$, поэтому $81\mid R_{\,i-j}$. Обозначим $N=R_{\,i-j}$ — это число из одних единиц, кратное $81$.\n\n**Шаг 2: добираем множитель $25$.** Рассмотрим число $$M=N\cdot100 .$$ Оно записывается теми же единицами и двумя нулями в конце, то есть только цифрами $0$ и $1$. При этом $M$ делится на $81$ (так как на него делится $N$) и на $100$, а значит и на $25$.\n\nЧисла $81$ и $25$ взаимно просты, поэтому $M$ делится на их произведение $2025$. $\blacksquare$\n\n*Замечание.* Тот же приём работает для любого $n$: сначала «набираем» ту часть $n$, которая взаимно проста с $10$, приписыванием единиц, а потом ту часть, что состоит из двоек и пятёрок, — приписыванием нулей.',
           'en': r'Factor $2025=81\cdot25=3^{4}\cdot5^{2}$.\n\n**Step 1: repunits.** Consider the $2026$ numbers $$R_1=1,\ R_2=11,\ \dots,\ R_{2026}=\underbrace{11\ldots1}_{2026},$$ and their remainders modulo $81$. There are $81$ remainders and more numbers, so two share one: $R_i\equiv R_j$ with $i>j$. Then $$81\ \big|\ R_i-R_j=R_{\,i-j}\cdot10^{\,j}.$$ Since $81=3^{4}$ is coprime to $10$, we get $81\mid R_{\,i-j}$. Write $N=R_{\,i-j}$ — a repunit divisible by $81$.\n\n**Step 2: bring in the factor $25$.** Consider $$M=N\cdot100 .$$ It is written with the same ones and two trailing zeros, so only with the digits $0$ and $1$. It is divisible by $81$ (because $N$ is) and by $100$, hence by $25$.\n\nAs $81$ and $25$ are coprime, $M$ is divisible by their product $2025$. $\blacksquare$\n\n*Remark.* The same trick works for any $n$: first pick up the part of $n$ coprime to $10$ by appending ones, then the part made of twos and fives by appending zeros.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'В компании из шести человек любые двое либо знакомы, либо нет. Докажите, что найдутся трое попарно знакомых или трое попарно незнакомых.',
         'en': r'In a group of six people any two are either acquainted or not. Prove that there are three mutual acquaintances or three mutual strangers.'},
   'hint': {'ru': r'Возьмите одного человека и посмотрите на пятерых остальных.',
            'en': r'Take one person and look at the other five.'},
   'sol': {'ru': r'Возьмём произвольного человека $A$. С каждым из остальных пятерых он либо знаком, либо нет — два варианта на пять человек.\n\nПо обобщённому принципу Дирихле один из вариантов встречается не менее $\left\lceil\tfrac52\right\rceil=3$ раз. Разберём случай, когда $A$ **знаком** по крайней мере с тремя (второй случай получается заменой слова «знаком» на «незнаком» во всём рассуждении).\n\nПусть $A$ знаком с $B$, $C$, $D$.\n\n**Случай 1.** Какие-то двое из $B,C,D$ знакомы между собой — пусть это $B$ и $C$. Тогда $A$, $B$, $C$ попарно знакомы: искомая тройка найдена.\n\n**Случай 2.** Никакие двое из $B,C,D$ не знакомы. Тогда сами $B$, $C$, $D$ образуют тройку попарно незнакомых.\n\nВ обоих случаях утверждение верно. $\blacksquare$\n\n*Точность.* Для пяти человек утверждение неверно: рассадим пятерых по кругу и объявим знакомыми ровно соседей. Тогда любые трое включают двух несоседей (незнакомых) и двух соседей (знакомых), так что ни одной однородной тройки нет.\n\n*Название.* На языке теории Рамсея доказанное означает $R(3,3)=6$.',
           'en': r'Take any person $A$. With each of the other five they are either acquainted or not — two options across five people.\n\nBy the generalised principle one option occurs at least $\left\lceil\tfrac52\right\rceil=3$ times. Take the case where $A$ **knows** at least three (the other case is the same argument with "knows" replaced throughout by "does not know").\n\nSay $A$ knows $B$, $C$, $D$.\n\n**Case 1.** Two of $B,C,D$ know each other — say $B$ and $C$. Then $A$, $B$, $C$ are mutual acquaintances: done.\n\n**Case 2.** No two of $B,C,D$ know each other. Then $B$, $C$, $D$ themselves are three mutual strangers.\n\nEither way the claim holds. $\blacksquare$\n\n*Sharpness.* For five people it fails: seat five in a circle and let exactly the neighbours be acquainted. Any three then contain two non-neighbours (strangers) and two neighbours (acquaintances), so no homogeneous triple exists.\n\n*The name.* In Ramsey theory this says $R(3,3)=6$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'В квадрате со стороной $1$ расположено $101$ точка. Докажите, что какие-то три из них лежат в треугольнике площади не больше $\tfrac1{100}$.',
         'en': r'A unit square contains $101$ points. Prove that some three of them lie in a triangle of area at most $\tfrac1{100}$.'},
   'hint': {'ru': r'Разрежьте квадрат на $50$ горизонтальных полос.',
            'en': r'Cut the square into $50$ horizontal strips.'},
   'sol': {'ru': r'Разрежем квадрат на $50$ горизонтальных полос высотой $\tfrac1{50}$ каждая.\n\nПредметов $101$, полос $50$, и $101>2\cdot50=100$. По обобщённому принципу Дирихле в какой-то полосе окажется не менее $\left\lceil\tfrac{101}{50}\right\rceil=3$ точек.\n\nВозьмём три такие точки и рассмотрим треугольник с вершинами в них. Он целиком лежит в полосе размером $1\times\tfrac1{50}$.\n\n**Оценим площадь.** Примем за основание ту сторону треугольника, которая имеет наибольшую горизонтальную протяжённость; её длина не превосходит... удобнее оценить иначе. Треугольник вписан в прямоугольник $1\times\tfrac1{50}$, а площадь треугольника, лежащего внутри прямоугольника, не превосходит **половины** площади этого прямоугольника. Значит $$S\le\frac12\cdot1\cdot\frac1{50}=\frac1{100}. \qquad\blacksquare$$\n\n*Почему треугольник в прямоугольнике не больше половины.* Проведём через вершину, лежащую между двумя другими по горизонтали, вертикальную прямую. Она делит треугольник на два, у каждого из которых основание вертикально и не длиннее высоты прямоугольника, а высота не превосходит соответствующей части ширины. Сумма их площадей не больше $\tfrac12\cdot\text{высота}\cdot\text{ширина}$.',
           'en': r'Cut the square into $50$ horizontal strips of height $\tfrac1{50}$.\n\nThere are $101$ points and $50$ strips, and $101>2\cdot50=100$. By the generalised principle some strip holds at least $\left\lceil\tfrac{101}{50}\right\rceil=3$ points.\n\nTake three such points and the triangle they span. It lies entirely inside a $1\times\tfrac1{50}$ rectangle.\n\n**Bound the area.** A triangle contained in a rectangle has area at most **half** the rectangle’s area. Hence $$S\le\frac12\cdot1\cdot\frac1{50}=\frac1{100}. \qquad\blacksquare$$\n\n*Why a triangle in a rectangle is at most half.* Draw the vertical line through the vertex that lies horizontally between the other two. It splits the triangle into two, each with a vertical base no longer than the rectangle’s height and a horizontal height no larger than its share of the width. Their areas add up to at most $\tfrac12\cdot\text{height}\cdot\text{width}$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Даны десять различных двузначных чисел. Докажите, что из них можно выбрать два непересекающихся непустых подмножества с одинаковой суммой.',
         'en': r'Ten distinct two-digit numbers are given. Prove that two disjoint non-empty subsets of them have equal sums.'},
   'hint': {'ru': r'Сравните число подмножеств с числом возможных сумм.',
            'en': r'Compare the number of subsets with the number of possible sums.'},
   'sol': {'ru': r'**Считаем предметы.** У множества из десяти чисел ровно $2^{10}-1=1023$ непустых подмножества.\n\n**Считаем ящики.** Сумма элементов любого подмножества не меньше наименьшего двузначного числа, то есть $10$, и не больше суммы десяти наибольших двузначных чисел: $$90+91+\dots+99=\frac{90+99}{2}\cdot10=945 .$$ Значит сумма принимает одно из значений $10,11,\dots,945$ — всего $936$ значений.\n\n**Принцип Дирихле.** $1023>936$, поэтому найдутся два **различных** подмножества $A\ne B$ с одинаковой суммой.\n\n**Делаем их непересекающимися.** Выбросим из обоих их общую часть: положим $$A^{\prime}=A\setminus B,\qquad B^{\prime}=B\setminus A .$$ Суммы уменьшились на одну и ту же величину (сумму общей части), поэтому по-прежнему равны. Множества $A^{\prime}$ и $B^{\prime}$ не пересекаются по построению.\n\nОстаётся проверить, что они непусты. Если бы, скажем, $A^{\prime}$ было пустым, то $A\subseteq B$, а из равенства сумм следовало бы, что сумма элементов $B\setminus A$ равна нулю. Но все числа положительны, значит $B\setminus A$ пусто и $A=B$ — противоречие с $A\ne B$. $\blacksquare$',
           'en': r'**Count the objects.** A ten-element set has exactly $2^{10}-1=1023$ non-empty subsets.\n\n**Count the boxes.** The sum of a subset is at least the smallest two-digit number, $10$, and at most the sum of the ten largest two-digit numbers: $$90+91+\dots+99=\frac{90+99}{2}\cdot10=945 .$$ So the sum takes one of the values $10,11,\dots,945$ — $936$ values in all.\n\n**Pigeonhole.** As $1023>936$, two **different** subsets $A\ne B$ have equal sums.\n\n**Make them disjoint.** Remove their common part from both: $$A^{\prime}=A\setminus B,\qquad B^{\prime}=B\setminus A .$$ Both sums dropped by the same amount (the sum of the common part), so they are still equal, and $A^{\prime}$, $B^{\prime}$ are disjoint by construction.\n\nIt remains to check they are non-empty. If, say, $A^{\prime}$ were empty then $A\subseteq B$, and equality of sums would force the elements of $B\setminus A$ to add to zero. But all the numbers are positive, so $B\setminus A$ is empty and $A=B$ — contradicting $A\ne B$. $\blacksquare$'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Каждая клетка таблицы $3\times7$ покрашена в белый или чёрный цвет. Докажите, что найдётся прямоугольник (со сторонами по линиям таблицы), все четыре угловые клетки которого одного цвета.',
         'en': r'Each cell of a $3\times7$ table is coloured white or black. Prove that there is a rectangle (with sides along the grid) whose four corner cells all have the same colour.'},
   'hint': {'ru': r'В каждом столбце три клетки и два цвета — значит, есть повторение.',
            'en': r'Each column has three cells and two colours — so some colour repeats.'},
   'sol': {'ru': r'**Шаг 1: в каждом столбце есть одноцветная пара.** В столбце три клетки и два цвета, поэтому по принципу Дирихле какие-то две клетки столбца одного цвета.\n\nПоставим каждому столбцу в соответствие такую пару: запишем её как (цвет; номера двух строк).\n\n**Шаг 2: сколько таких пометок бывает.** Цветов два. Пар строк из трёх: $\dbinom32=3$, а именно $\{1,2\}$, $\{1,3\}$, $\{2,3\}$. Итого различных пометок $$2\cdot3=6 .$$\n\n**Шаг 3: применяем принцип.** Столбцов семь, пометок шесть, и $7>6$ — значит два столбца получили одинаковую пометку.\n\nЭто означает: в этих двух столбцах **одни и те же две строки** содержат клетки **одного и того же цвета**. Четыре такие клетки и образуют углы искомого прямоугольника. $\blacksquare$\n\n*Точность.* Для таблицы $3\times6$ утверждение уже неверно: можно взять по одному столбцу каждой из шести пометок, и одноцветного прямоугольника не возникнет.',
           'en': r'**Step 1: every column has a monochromatic pair.** A column has three cells and two colours, so by the pigeonhole principle two of its cells share a colour.\n\nLabel each column by such a pair: record it as (colour; the two row numbers).\n\n**Step 2: how many labels there are.** Two colours; and $\dbinom32=3$ pairs of rows, namely $\{1,2\}$, $\{1,3\}$, $\{2,3\}$. So there are $$2\cdot3=6$$ different labels.\n\n**Step 3: apply the principle.** There are seven columns and six labels, and $7>6$ — so two columns carry the same label.\n\nThat means: in those two columns the **same two rows** hold cells of the **same colour**. Those four cells are the corners of the required rectangle. $\blacksquare$\n\n*Sharpness.* For a $3\times6$ table the statement already fails: take one column of each of the six labels and no monochromatic rectangle appears.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Докажите, что среди любых $n+1$ чисел, выбранных из $\{1,2,\dots,3n\}$, найдутся два, разность которых не превосходит $2$.',
         'en': r'Prove that among any $n+1$ numbers chosen from $\{1,2,\dots,3n\}$ there are two whose difference is at most $2$.'},
   'hint': {'ru': r'Разбейте отрезок на тройки подряд идущих чисел.',
            'en': r'Split the range into blocks of three consecutive numbers.'},
   'sol': {'ru': r'Разобьём числа $1,2,\dots,3n$ на $n$ блоков по три подряд идущих: $$\{1,2,3\},\ \{4,5,6\},\ \dots,\ \{3n-2,3n-1,3n\}.$$\n\nПредметы — $n+1$ выбранное число, ящики — $n$ блоков. Так как $n+1>n$, два выбранных числа попали в один блок.\n\nВнутри блока разность наибольшего и наименьшего чисел равна $2$, поэтому разность любых двух чисел блока не превосходит $2$. $\blacksquare$\n\n*Точность оценки.* Для $n$ чисел утверждение неверно: возьмите $1,4,7,\dots,3n-2$ — по одному из каждого блока. Разность любых двух из них не меньше $3$.',
           'en': r'Split $1,2,\dots,3n$ into $n$ blocks of three consecutive numbers: $$\{1,2,3\},\ \{4,5,6\},\ \dots,\ \{3n-2,3n-1,3n\}.$$\n\nThe objects are the $n+1$ chosen numbers, the boxes the $n$ blocks. Since $n+1>n$, two chosen numbers land in one block.\n\nInside a block the largest and smallest differ by $2$, so any two of its numbers differ by at most $2$. $\blacksquare$\n\n*Sharpness.* For $n$ numbers the statement fails: take $1,4,7,\dots,3n-2$, one from each block; any two of them differ by at least $3$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 3,
   'q': {'ru': r'Даны $100$ целых чисел. Докажите, что среди них можно выбрать несколько подряд идущих (в данном порядке), сумма которых делится на $100$.',
         'en': r'One hundred integers are given. Prove that some block of consecutive ones (in the given order) has a sum divisible by $100$.'},
   'hint': {'ru': r'Рассмотрите частичные суммы $S_1,\dots,S_{100}$ и их остатки.',
            'en': r'Look at the partial sums $S_1,\dots,S_{100}$ and their remainders.'},
   'sol': {'ru': r'Пусть числа равны $a_1,a_2,\dots,a_{100}$. Рассмотрим **частичные суммы** $$S_1=a_1,\quad S_2=a_1+a_2,\quad \dots,\quad S_{100}=a_1+\dots+a_{100}.$$\n\n**Случай 1: какая-то $S_i$ делится на $100$.** Тогда искомый блок — это первые $i$ чисел, и всё доказано.\n\n**Случай 2: ни одна $S_i$ не делится на $100$.** Тогда каждая из ста сумм $S_1,\dots,S_{100}$ даёт при делении на $100$ один из **ненулевых** остатков $1,2,\dots,99$ — всего $99$ возможностей.\n\nПредметов сто, ящиков девяносто девять, и по принципу Дирихле найдутся $i<j$ с $$S_i\equiv S_j\pmod{100}.$$\n\nТогда $100$ делит разность $$S_j-S_i=a_{i+1}+a_{i+2}+\dots+a_j ,$$ то есть сумму подряд идущих чисел с номерами от $i+1$ до $j$. Этот блок непуст, потому что $i<j$. $\blacksquare$\n\n*Обобщение.* Тот же довод показывает: среди любых $n$ целых чисел найдётся блок подряд идущих с суммой, кратной $n$.\n\n*Точность.* Для $n-1$ чисел утверждение неверно: возьмите $n-1$ единиц — суммы блоков равны $1,2,\dots,n-1$, и ни одна не делится на $n$.',
           'en': r'Let the numbers be $a_1,a_2,\dots,a_{100}$ and form the **partial sums** $$S_1=a_1,\quad S_2=a_1+a_2,\quad \dots,\quad S_{100}=a_1+\dots+a_{100}.$$\n\n**Case 1: some $S_i$ is divisible by $100$.** Then the block is the first $i$ numbers and we are done.\n\n**Case 2: no $S_i$ is.** Then each of the hundred sums $S_1,\dots,S_{100}$ leaves one of the **non-zero** remainders $1,2,\dots,99$ modulo $100$ — $99$ possibilities.\n\nWith a hundred objects and ninety-nine boxes, the pigeonhole principle gives $i<j$ with $$S_i\equiv S_j\pmod{100}.$$\n\nThen $100$ divides the difference $$S_j-S_i=a_{i+1}+a_{i+2}+\dots+a_j ,$$ the sum of the consecutive numbers from $i+1$ to $j$. That block is non-empty because $i<j$. $\blacksquare$\n\n*Generalisation.* The same argument shows: among any $n$ integers some block of consecutive ones has a sum divisible by $n$.\n\n*Sharpness.* For $n-1$ numbers it fails: take $n-1$ ones — the block sums are $1,2,\dots,n-1$ and none is divisible by $n$.'}},

  {'src': 'Теорема Эрдёша–Секереша / Erdős–Szekeres', 'lvl': 3,
   'q': {'ru': r'Дана последовательность из $n^{2}+1$ попарно различных чисел. Докажите, что из неё можно выбрать подпоследовательность длины $n+1$, которая либо строго возрастает, либо строго убывает.',
         'en': r'A sequence of $n^{2}+1$ pairwise distinct numbers is given. Prove that it contains a subsequence of length $n+1$ that is either strictly increasing or strictly decreasing.'},
   'hint': {'ru': r'Каждому члену сопоставьте пару чисел: длины наибольших возрастающей и убывающей подпоследовательностей, **оканчивающихся** на нём.',
            'en': r'To each term attach a pair: the lengths of the longest increasing and longest decreasing subsequences **ending** at it.'},
   'sol': {'ru': r'Обозначим последовательность через $a_1,a_2,\dots,a_N$, где $N=n^{2}+1$.\n\n**Пометки.** Каждому члену $a_i$ сопоставим пару чисел $$\left(u_i,\ d_i\right),$$ где $u_i$ — длина самой длинной строго **возрастающей** подпоследовательности, оканчивающейся на $a_i$, а $d_i$ — длина самой длинной строго **убывающей**, оканчивающейся на $a_i$. Обе величины не меньше $1$ (сам член образует подпоследовательность длины один).\n\n**Ключевое наблюдение: пометки различны.** Пусть $i<j$. Числа различны, поэтому либо $a_i<a_j$, либо $a_i>a_j$.\n\n*Если $a_i<a_j$,* то любую возрастающую подпоследовательность, оканчивающуюся на $a_i$, можно продлить членом $a_j$, поэтому $u_j\ge u_i+1>u_i$.\n\n*Если $a_i>a_j$,* то точно так же $d_j\ge d_i+1>d_i$.\n\nВ обоих случаях пары $\left(u_i,d_i\right)$ и $\left(u_j,d_j\right)$ различаются. Значит **все $N$ пометок попарно различны**.\n\n**Применяем принцип Дирихле.** Предположим, что утверждение неверно: и возрастающих, и убывающих подпоследовательностей длины $n+1$ не существует. Тогда для всех $i$ $$1\le u_i\le n,\qquad 1\le d_i\le n ,$$ и различных пар $\left(u_i,d_i\right)$ бывает не более $n\cdot n=n^{2}$.\n\nНо пометок $N=n^{2}+1$ штук, и все они различны — противоречие.\n\nЗначит найдётся либо возрастающая, либо убывающая подпоследовательность длины $n+1$. $\blacksquare$\n\n*Точность оценки.* Для $n^{2}$ чисел утверждение неверно. Возьмём при $n=3$ последовательность $$3,2,1,\ 6,5,4,\ 9,8,7 .$$ Возрастающая подпоследовательность берёт не более одного члена из каждой тройки, значит её длина не больше $3$; убывающая целиком лежит внутри одной тройки, значит тоже не длиннее $3$.',
           'en': r'Write the sequence as $a_1,a_2,\dots,a_N$ with $N=n^{2}+1$.\n\n**Labels.** To each term $a_i$ attach the pair $$\left(u_i,\ d_i\right),$$ where $u_i$ is the length of the longest strictly **increasing** subsequence ending at $a_i$ and $d_i$ that of the longest strictly **decreasing** one ending at $a_i$. Both are at least $1$ (the term alone is a subsequence of length one).\n\n**The key observation: the labels are distinct.** Let $i<j$. The numbers differ, so either $a_i<a_j$ or $a_i>a_j$.\n\n*If $a_i<a_j$,* any increasing subsequence ending at $a_i$ extends by $a_j$, so $u_j\ge u_i+1>u_i$.\n\n*If $a_i>a_j$,* the same reasoning gives $d_j\ge d_i+1>d_i$.\n\nEither way the pairs $\left(u_i,d_i\right)$ and $\left(u_j,d_j\right)$ differ. So **all $N$ labels are pairwise distinct**.\n\n**Apply the principle.** Suppose the claim fails: there is no increasing and no decreasing subsequence of length $n+1$. Then for every $i$ $$1\le u_i\le n,\qquad 1\le d_i\le n ,$$ and there are at most $n\cdot n=n^{2}$ possible pairs.\n\nBut there are $N=n^{2}+1$ labels, all distinct — a contradiction.\n\nHence an increasing or a decreasing subsequence of length $n+1$ exists. $\blacksquare$\n\n*Sharpness.* For $n^{2}$ numbers it fails. At $n=3$ take $$3,2,1,\ 6,5,4,\ 9,8,7 .$$ An increasing subsequence takes at most one term from each block, so its length is at most $3$; a decreasing one lies inside a single block, so it is no longer than $3$ either.'}},

  {'src': 'Теорема Дирихле о приближениях / Dirichlet approximation', 'lvl': 3,
   'q': {'ru': r'Пусть $\alpha$ — вещественное число и $N$ — натуральное. Докажите, что найдутся целые $p$ и $q$ с $1\le q\le N$, для которых $$\left|\alpha-\frac pq\right|<\frac1{qN}.$$',
         'en': r'Let $\alpha$ be real and $N$ a positive integer. Prove that there are integers $p$ and $q$ with $1\le q\le N$ such that $$\left|\alpha-\frac pq\right|<\frac1{qN}.$$'},
   'hint': {'ru': r'Разбейте отрезок $[0,1)$ на $N$ равных частей и посмотрите на дробные части чисел $k\alpha$.',
            'en': r'Split $[0,1)$ into $N$ equal parts and look at the fractional parts of $k\alpha$.'},
   'sol': {'ru': r'Обозначим через $\{x\}$ дробную часть числа $x$, то есть $\{x\}=x-\lfloor x\rfloor\in[0,1)$.\n\n**Предметы.** Рассмотрим $N+1$ число $$\{0\cdot\alpha\},\ \{1\cdot\alpha\},\ \{2\cdot\alpha\},\ \dots,\ \{N\alpha\} .$$ Все они лежат в промежутке $[0,1)$.\n\n**Ящики.** Разобьём $[0,1)$ на $N$ полуинтервалов равной длины: $$\left[0,\tfrac1N\right),\ \left[\tfrac1N,\tfrac2N\right),\ \dots,\ \left[\tfrac{N-1}{N},1\right).$$\n\n**Принцип Дирихле.** Чисел $N+1$, промежутков $N$, значит два числа попали в один промежуток: найдутся $0\le i<j\le N$ с $$\left|\{j\alpha\}-\{i\alpha\}\right|<\frac1N$$ (строгое неравенство — потому что длина промежутка равна $\tfrac1N$, а концы в него входят не оба).\n\n**Переписываем.** По определению дробной части $$\{j\alpha\}-\{i\alpha\}=(j-i)\alpha-\left(\lfloor j\alpha\rfloor-\lfloor i\alpha\rfloor\right).$$ Положим $$q=j-i,\qquad p=\lfloor j\alpha\rfloor-\lfloor i\alpha\rfloor .$$ Оба числа целые, и $1\le q\le N$, поскольку $0\le i<j\le N$.\n\nПолученное неравенство принимает вид $$\left|q\alpha-p\right|<\frac1N .$$\n\n**Делим на $q>0$.** $$\left|\alpha-\frac pq\right|<\frac1{qN}. \qquad\blacksquare$$\n\n*Следствие.* Если $\alpha$ иррационально, то, беря всё большие $N$, получаем бесконечно много различных дробей $\tfrac pq$ с $$\left|\alpha-\frac pq\right|<\frac1{q^{2}}$$ (ведь $q\le N$ даёт $\tfrac1{qN}\le\tfrac1{q^{2}}$). Именно этот факт лежит в основе теории приближения иррациональных чисел рациональными.',
           'en': r'Write $\{x\}$ for the fractional part of $x$, so $\{x\}=x-\lfloor x\rfloor\in[0,1)$.\n\n**The objects.** Consider the $N+1$ numbers $$\{0\cdot\alpha\},\ \{1\cdot\alpha\},\ \{2\cdot\alpha\},\ \dots,\ \{N\alpha\} ,$$ all lying in $[0,1)$.\n\n**The boxes.** Split $[0,1)$ into $N$ half-open intervals of equal length: $$\left[0,\tfrac1N\right),\ \left[\tfrac1N,\tfrac2N\right),\ \dots,\ \left[\tfrac{N-1}{N},1\right).$$\n\n**Pigeonhole.** With $N+1$ numbers and $N$ intervals, two numbers land in one interval: there are $0\le i<j\le N$ with $$\left|\{j\alpha\}-\{i\alpha\}\right|<\frac1N$$ (strictly, because the interval has length $\tfrac1N$ and does not contain both endpoints).\n\n**Rewrite.** By definition of the fractional part, $$\{j\alpha\}-\{i\alpha\}=(j-i)\alpha-\left(\lfloor j\alpha\rfloor-\lfloor i\alpha\rfloor\right).$$ Put $$q=j-i,\qquad p=\lfloor j\alpha\rfloor-\lfloor i\alpha\rfloor .$$ Both are integers and $1\le q\le N$, since $0\le i<j\le N$.\n\nThe inequality becomes $$\left|q\alpha-p\right|<\frac1N .$$\n\n**Divide by $q>0$.** $$\left|\alpha-\frac pq\right|<\frac1{qN}. \qquad\blacksquare$$\n\n*Corollary.* If $\alpha$ is irrational then, letting $N$ grow, one gets infinitely many distinct fractions $\tfrac pq$ with $$\left|\alpha-\frac pq\right|<\frac1{q^{2}}$$ (since $q\le N$ gives $\tfrac1{qN}\le\tfrac1{q^{2}}$). This fact underlies the whole theory of approximating irrationals by rationals.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 3,
   'q': {'ru': r'Докажите, что существует натуральная степень тройки, десятичная запись которой оканчивается на $001$.',
         'en': r'Prove that some positive power of three ends in the digits $001$.'},
   'hint': {'ru': r'Достаточно найти $k$ с $3^{k}\equiv1\pmod{1000}$.',
            'en': r'It suffices to find $k$ with $3^{k}\equiv1\pmod{1000}$.'},
   'sol': {'ru': r'Оканчиваться на $001$ — значит давать остаток $1$ при делении на $1000$. Достаточно найти натуральное $k$ с $$3^{k}\equiv1\pmod{1000}.$$\n\n**Предметы и ящики.** Рассмотрим $1001$ число $$3^{1},\ 3^{2},\ \dots,\ 3^{1001}$$ и их остатки по модулю $1000$. Остатков ровно $1000$, а чисел больше, значит по принципу Дирихле найдутся показатели $a<b$ с $$3^{a}\equiv3^{b}\pmod{1000}.$$\n\n**Сокращаем.** Разность делится на $1000$: $$1000\ \big|\ 3^{b}-3^{a}=3^{a}\left(3^{\,b-a}-1\right).$$ Число $1000=2^{3}\cdot5^{3}$ взаимно просто с тройкой, а значит и со степенью $3^{a}$. Поэтому $$1000\ \big|\ 3^{\,b-a}-1,$$ то есть $3^{k}\equiv1\pmod{1000}$ при $k=b-a\ge1$.\n\nЗначит $3^{k}$ оканчивается на $001$. $\blacksquare$\n\n*Что это за $k$ на самом деле.* Наименьшее такое значение равно $100$: действительно, $3^{100}$ оканчивается на $001$. Но принцип Дирихле доказал существование, ничего не вычисляя, — в этом и состоит его сила.\n\n*Обобщение.* Тот же довод показывает: для любых взаимно простых $a$ и $m$ найдётся $k\ge1$ с $a^{k}\equiv1\pmod m$. Это существование **порядка** элемента — отправная точка всей теории вычетов.',
           'en': r'Ending in $001$ means leaving remainder $1$ on division by $1000$. So it suffices to find a positive $k$ with $$3^{k}\equiv1\pmod{1000}.$$\n\n**Objects and boxes.** Consider the $1001$ numbers $$3^{1},\ 3^{2},\ \dots,\ 3^{1001}$$ and their remainders modulo $1000$. There are exactly $1000$ remainders and more numbers, so by the pigeonhole principle there are exponents $a<b$ with $$3^{a}\equiv3^{b}\pmod{1000}.$$\n\n**Cancel.** The difference is divisible by $1000$: $$1000\ \big|\ 3^{b}-3^{a}=3^{a}\left(3^{\,b-a}-1\right).$$ Since $1000=2^{3}\cdot5^{3}$ is coprime to three, and hence to $3^{a}$, we get $$1000\ \big|\ 3^{\,b-a}-1,$$ that is $3^{k}\equiv1\pmod{1000}$ with $k=b-a\ge1$.\n\nSo $3^{k}$ ends in $001$. $\blacksquare$\n\n*What $k$ actually is.* The smallest such value is $100$: indeed $3^{100}$ ends in $001$. But the pigeonhole principle proved existence without computing anything — that is exactly its strength.\n\n*Generalisation.* The same argument shows that for coprime $a$ and $m$ there is a $k\ge1$ with $a^{k}\equiv1\pmod m$. This is the existence of the **order** of an element — the starting point of the whole theory of residues.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 3,
   'q': {'ru': r'В круге радиуса $1$ отмечено семь точек. Докажите, что какие-то две из них находятся на расстоянии не больше $1$.',
         'en': r'Seven points are marked in a disc of radius $1$. Prove that two of them are at distance at most $1$.'},
   'hint': {'ru': r'Разрежьте круг на шесть секторов по $60^\circ$ и оцените расстояние между двумя точками одного сектора.',
            'en': r'Cut the disc into six $60^\circ$ sectors and bound the distance between two points of one sector.'},
   'sol': {'ru': r'**Лемма.** Если точки $P$ и $Q$ лежат в круге радиуса $1$ с центром $O$ и угол $\angle POQ\le60^\circ$, то $PQ\le1$.\n\n*Доказательство.* Обозначим $x=OP$ и $y=OQ$; по условию $0\le x,y\le1$. Если одна из точек совпала с центром, то $PQ$ равно $x$ или $y$ и не превосходит $1$. Иначе по теореме косинусов $$PQ^{2}=x^{2}+y^{2}-2xy\cos\angle POQ .$$ Из $\angle POQ\le60^\circ$ следует $\cos\angle POQ\ge\tfrac12$, поэтому $$PQ^{2}\le x^{2}+y^{2}-xy .$$ Пусть для определённости $x\ge y$. Тогда $$x^{2}+y^{2}-xy=x^{2}-y\left(x-y\right)\le x^{2}\le1 ,$$ так как $y\ge0$ и $x-y\ge0$. Значит $PQ\le1$. $\square$\n\n**Разрез.** Разобьём круг на шесть равных секторов с углом $60^\circ$ лучами из центра. Точки, попавшие на разделяющий луч, отнесём к одному из двух соседних секторов по заранее выбранному правилу; центр отнесём к любому одному сектору.\n\n**Принцип Дирихле.** Точек семь, секторов шесть, и $7>6$ — значит какие-то две точки попали в один сектор.\n\n**Заключение.** Для двух точек одного сектора угол между направлениями на них из центра не превосходит $60^\circ$, поэтому по лемме расстояние между ними не больше $1$. $\blacksquare$\n\n*Замечание о точности.* Для **пяти** точек утверждение неверно: вершины правильного пятиугольника, вписанного в граничную окружность, попарно удалены на $2\sin36^\circ\approx1{,}176>1$. Наш разрез на шесть секторов доказывает утверждение для семи точек; для шести оно тоже верно, но требует более тонкого рассуждения.',
           'en': r'**Lemma.** If $P$ and $Q$ lie in a disc of radius $1$ centred at $O$ and $\angle POQ\le60^\circ$, then $PQ\le1$.\n\n*Proof.* Write $x=OP$ and $y=OQ$, so $0\le x,y\le1$. If one of the points is the centre then $PQ$ equals $x$ or $y$ and is at most $1$. Otherwise the law of cosines gives $$PQ^{2}=x^{2}+y^{2}-2xy\cos\angle POQ .$$ From $\angle POQ\le60^\circ$ we get $\cos\angle POQ\ge\tfrac12$, hence $$PQ^{2}\le x^{2}+y^{2}-xy .$$ Say $x\ge y$. Then $$x^{2}+y^{2}-xy=x^{2}-y\left(x-y\right)\le x^{2}\le1 ,$$ since $y\ge0$ and $x-y\ge0$. So $PQ\le1$. $\square$\n\n**The cut.** Split the disc into six equal $60^\circ$ sectors by rays from the centre. Points falling on a dividing ray are assigned to one of the two neighbouring sectors by a rule fixed in advance; the centre goes to any one sector.\n\n**Pigeonhole.** Seven points, six sectors, $7>6$ — so two points share a sector.\n\n**Conclusion.** For two points of one sector the angle between the directions from the centre is at most $60^\circ$, so by the lemma their distance is at most $1$. $\blacksquare$\n\n*Sharpness.* For **five** points the statement fails: the vertices of a regular pentagon inscribed in the boundary circle are pairwise $2\sin36^\circ\approx1.176>1$ apart. Our cut into six sectors proves the claim for seven points; it also holds for six, but that needs a finer argument.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 3,
   'q': {'ru': r'Внутри квадрата со стороной $1$ расположено несколько кругов, сумма длин граничных окружностей которых равна $10$. Докажите, что найдётся прямая, пересекающая по крайней мере четыре из этих кругов.',
         'en': r'Several discs lie inside a unit square, the total circumference of their boundaries being $10$. Prove that some line meets at least four of the discs.'},
   'hint': {'ru': r'Спроецируйте круги на сторону квадрата и посчитайте суммарную длину проекций.',
            'en': r'Project the discs onto a side of the square and add up the lengths of the projections.'},
   'sol': {'ru': r'**Проекции.** Спроецируем все круги на нижнюю сторону квадрата (то есть на отрезок длины $1$). Проекция круга диаметра $d$ — это отрезок длины ровно $d$.\n\nЕсли длина граничной окружности круга равна $c$, то его диаметр равен $d=\dfrac{c}{\pi}$. Значит суммарная длина всех проекций равна $$\sum d_i=\frac{1}{\pi}\sum c_i=\frac{10}{\pi}.$$\n\n**Оценка.** $\pi<3{,}15$, поэтому $$\frac{10}{\pi}>\frac{10}{3{,}15}>3{,}17>3 .$$ Итак, суммарная длина проекций строго больше $3$.\n\n**Рассуждение о среднем.** Все проекции лежат внутри отрезка длины $1$. Пусть $f(t)$ — количество проекций, покрывающих точку $t$ этого отрезка. Тогда $$\int_0^1 f(t)\,dt=\sum d_i>3 ,$$ потому что интеграл по отрезку от «кратности покрытия» равен сумме длин покрывающих отрезков.\n\nЕсли бы во всех точках было $f(t)\le3$, то интеграл не превзошёл бы $3\cdot1=3$. Значит найдётся точка $t_0$, в которой $f\left(t_0\right)\ge4$.\n\n*Без интеграла.* То же можно сказать так: если каждая точка отрезка покрыта не более чем тремя проекциями, то суммарная длина проекций не больше $3$ (каждая из трёх «слоёв» покрытия имеет длину не больше $1$). Раз суммарная длина больше $3$, какая-то точка покрыта хотя бы четырьмя проекциями.\n\n**Заключение.** Проведём через точку $t_0$ прямую, перпендикулярную стороне, на которую мы проецировали. Она пересекает каждый круг, чья проекция накрывает $t_0$, — а таких кругов не менее четырёх. $\blacksquare$\n\n*Замечание.* Это типичное «рассуждение о среднем»: мы не указали прямую явно, но доказали, что она существует, сравнив суммарную длину с длиной отрезка.',
           'en': r'**Projections.** Project every disc onto the bottom side of the square, a segment of length $1$. The projection of a disc of diameter $d$ is a segment of length exactly $d$.\n\nIf the boundary circle has length $c$ then the diameter is $d=\dfrac{c}{\pi}$, so the total length of the projections is $$\sum d_i=\frac{1}{\pi}\sum c_i=\frac{10}{\pi}.$$\n\n**A bound.** Since $\pi<3.15$, $$\frac{10}{\pi}>\frac{10}{3.15}>3.17>3 .$$ So the projections have total length strictly greater than $3$.\n\n**The averaging argument.** All the projections lie inside a segment of length $1$. Let $f(t)$ be the number of projections covering the point $t$. Then $$\int_0^1 f(t)\,dt=\sum d_i>3 ,$$ since integrating the covering multiplicity gives the total length of the covering segments.\n\nIf $f(t)\le3$ everywhere, the integral would be at most $3\cdot1=3$. So there is a point $t_0$ with $f\left(t_0\right)\ge4$.\n\n*Without integration.* The same in words: if every point of the segment were covered by at most three projections, the total length of the projections would be at most $3$ (each of the three "layers" has length at most $1$). As the total exceeds $3$, some point is covered by at least four.\n\n**Conclusion.** Draw through $t_0$ the line perpendicular to the side we projected onto. It meets every disc whose projection covers $t_0$ — and there are at least four of them. $\blacksquare$\n\n*Remark.* This is a typical averaging argument: the line is never exhibited, but its existence follows from comparing a total length with the length of the segment.'}},
 ],
}
