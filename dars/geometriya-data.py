# -*- coding: utf-8 -*-
"""Geometriya — 9, 10 va 11-sinf uchun toʻliq maʼlumotnoma.

Sakkizta tuman bosqichi variantida geometriya savollarning 18,4 % ini beradi
(44 ta savol). Ularning hammasi shu yerdagi taʼrif, teorema va oʻlchovlarga
tayanadi: har biri qisqa isbot va ishlangan misol bilan, soʻngra toʻrt
darajadagi 32 ta masala va ularning batafsil yechimi.

Hamma son qiymati yozilishidan oldin kompyuterda tekshirilgan.

$...$ — KaTeX. Chizmalar — ichki SVG.
"""

T = lambda uz, ru: (uz, ru)

CHROME = dict(
 title=T('Geometriya · 9–11-sinf', 'Геометрия · 9–11 классы'),
 eyebrow=T('Olimpiadaga tayyorgarlik · tuman (shahar) bosqichi',
           'Подготовка к олимпиаде · районный (городской) этап'),
 h1=T('Geometriya', 'Геометрия'),
 sub=T('Taʼriflar, teoremalar va isbotlar — har biri chizma va ishlangan '
       'misol bilan. Soʻngra toʻrt darajadagi 32 ta masala va ularning '
       'batafsil yechimi.',
       'Определения, теоремы и доказательства — каждое с чертежом и '
       'разобранным примером. Затем 32 задачи четырёх уровней и подробные '
       'решения.'),
)


def I(tur, nom, bayon, misol, isbot=None, rasm=None):
    return dict(tur=tur, nom=nom, bayon=bayon, misol=misol, isbot=isbot, rasm=rasm)


TUR = {
 'tarif':   T('taʼrif', 'определение'),
 'teorema': T('teorema', 'теорема'),
 'xossa':   T('xossa', 'свойство'),
 'natija':  T('natija', 'следствие'),
 'usul':    T('usul', 'приём'),
 'formula': T('formula', 'формула'),
}

# --------------------------------------------------------------- chizmalar --
INK, ACC, SOFT = '#0f1a21', '#a34430', '#8fa3ad'


def FIG(vb, body, w=320):
    return ('<svg class="fig" viewBox="%s" width="%d" '
            'xmlns="http://www.w3.org/2000/svg" fill="none" stroke="%s" '
            'stroke-width="1.3" stroke-linejoin="round">%s</svg>'
            % (vb, w, INK, body))


def txt(x, y, s, fill=INK, size=12.5):
    return ('<text x="%s" y="%s" fill="%s" stroke="none" font-size="%s" '
            'font-family="Georgia,serif" font-style="italic">%s</text>'
            % (x, y, fill, size, s))


BOLIMLAR = []

# ================================================ A · Burchaklar va uchburchak ==
BOLIMLAR.append(dict(kod='A', hue='geo',
 nom=T('Burchaklar va uchburchak', 'Углы и треугольник'),
 izoh=T('Variantdagi geometriya savollarining deyarli yarmi — burchak sanash. '
        'Shu bobdagi beshta faktdan nariga chiqmaydi.',
        'Почти половина геометрических задач варианта — счёт углов. Дальше '
        'пяти фактов этой главы они не уходят.'),
 items=[

 I('xossa', T('Vertikal, qoʻshni va parallel chiziq burchaklari',
              'Вертикальные, смежные углы и углы при параллельных'),
   T('Vertikal burchaklar teng, qoʻshni burchaklar yigʻindisi $180^\\circ$. '
     'Ikki parallel chiziq kesuvchi bilan kesilganda: <b>ichki almashinuvchi</b> '
     'burchaklar teng, <b>mos</b> burchaklar teng, <b>bir tomonli</b> '
     'burchaklar yigʻindisi $180^\\circ$.',
     'Вертикальные углы равны, смежные дают $180^\\circ$. При пересечении двух '
     'параллельных секущей: <b>накрест лежащие</b> углы равны, '
     '<b>соответственные</b> равны, <b>односторонние</b> дают $180^\\circ$.'),
   T('Trapetsiyada yon tomon ikkita parallel asosni kesadi, shuning uchun '
     '$\\angle A + \\angle D = 180^\\circ$ — trapetsiya masalalarining '
     'yarmi shu bittagina tenglikdan boshlanadi.',
     'В трапеции боковая сторона пересекает два параллельных основания, '
     'поэтому $\\angle A + \\angle D = 180^\\circ$ — с одного этого равенства '
     'начинается половина задач про трапецию.')),

 I('teorema', T('Uchburchak burchaklari yigʻindisi', 'Сумма углов треугольника'),
   T('Uchburchak burchaklari yigʻindisi $180^\\circ$. Qavariq $n$ burchakda '
     'ichki burchaklar yigʻindisi $(n-2)\\cdot180^\\circ$.',
     'Сумма углов треугольника равна $180^\\circ$. В выпуклом $n$-угольнике '
     'сумма внутренних углов равна $(n-2)\\cdot180^\\circ$.'),
   T('Burchaklari $2:3:7$ nisbatda boʻlsa, $12x=180^\\circ$, $x=15^\\circ$ — '
     'burchaklar $30^\\circ, 45^\\circ, 105^\\circ$.',
     'Если углы относятся как $2:3:7$, то $12x=180^\\circ$, $x=15^\\circ$ — '
     'углы равны $30^\\circ, 45^\\circ, 105^\\circ$.'),
   T('$C$ uchidan $AB$ ga parallel chiziq oʻtkazamiz; ichki almashinuvchi '
     'burchaklar $A$ va $B$ ni shu chiziqqa koʻchiradi, uchtasi birga '
     'yoyilgan burchakni beradi.',
     'Через вершину $C$ проведём прямую, параллельную $AB$; накрест лежащие '
     'углы переносят $A$ и $B$ на эту прямую, и три угла вместе дают '
     'развёрнутый.'),
   FIG('0 0 220 96',
       '<polygon points="20,80 200,80 130,20"/>'
       '<line x1="70" y1="20" x2="190" y2="20" stroke="%s" stroke-dasharray="4 3"/>'
       % SOFT
       + txt(12, 92, 'A') + txt(200, 92, 'B') + txt(128, 14, 'C'))),

 I('teorema', T('Tashqi burchak', 'Внешний угол'),
   T('Uchburchakning tashqi burchagi unga qoʻshni boʻlmagan ikkita ichki '
     'burchak yigʻindisiga teng.',
     'Внешний угол треугольника равен сумме двух внутренних, не смежных с ним.'),
   T('Ikkita uchburchak bitta nuqtada uchrashganda burchaklarni bittadan '
     'ikkinchisiga koʻchirish uchun ishlatiladi: “$\\angle 1 = \\angle 2 + '
     '\\angle 3$” deb yozib, nomaʼlumlar sonini kamaytiramiz.',
     'Используется, чтобы переносить углы из одного треугольника в другой: '
     'записав «$\\angle 1 = \\angle 2 + \\angle 3$», уменьшаем число '
     'неизвестных.'),
   T('$180^\\circ - \\gamma = \\alpha + \\beta$, chunki uchala burchak '
     'yigʻindisi $180^\\circ$.',
     '$180^\\circ - \\gamma = \\alpha + \\beta$, так как сумма трёх углов '
     'равна $180^\\circ$.')),

 I('xossa', T('Teng yonli uchburchak', 'Равнобедренный треугольник'),
   T('$AB=AC$ boʻlsa, $\\angle B=\\angle C$ va teskarisi ham oʻrinli. '
     'Uchidan tushirilgan bissektrisa, mediana, balandlik va oʻrta '
     'perpendikulyar — <b>bitta kesma</b>.',
     'Если $AB=AC$, то $\\angle B=\\angle C$, и обратно. Биссектриса, медиана, '
     'высота и серединный перпендикуляр из вершины — <b>один и тот же '
     'отрезок</b>.'),
   T('Chizmada teng yonli uchburchak koʻrinmasa ham, uni <b>yasash</b> '
     'mumkin: ikkita teng burchak topilsa, ularning qarshisidagi tomonlar '
     'teng — bu olimpiada masalalarining eng koʻp ishlatiladigan harakati.',
     'Даже если равнобедренного треугольника на чертеже нет, его можно '
     '<b>получить</b>: нашлись два равных угла — значит, равны и '
     'противолежащие стороны. Это самый частый приём в олимпиадных задачах.')),

 I('teorema', T('Uchburchak tengsizligi va tomon–burchak tartibi',
                'Неравенство треугольника и порядок сторон и углов'),
   T('Ixtiyoriy ikki tomon yigʻindisi uchinchisidan katta: $a+b>c$. Katta '
     'tomon qarshisida katta burchak yotadi.',
     'Сумма любых двух сторон больше третьей: $a+b>c$. Против большей стороны '
     'лежит больший угол.'),
   T('Uzunliklari $1^2, 2^2, \\dots, 8^2$ boʻlgan kesmalardan uchburchak '
     'yasash — $a+b>c$ ni tekshirish masalasi; kvadratlar juda tez oʻsgani '
     'uchun mos uchliklar juda kam.',
     'Построение треугольника из отрезков длин $1^2, 2^2, \\dots, 8^2$ — это '
     'проверка $a+b>c$; квадраты растут так быстро, что подходящих троек '
     'очень мало.')),

 I('usul', T('Burchak sanash', 'Счёт углов'),
   T('Bitta nomaʼlum burchakni $x$ deb belgilang va chizmadagi hamma '
     'burchakni $x$ orqali yozib chiqing. Teng yonli uchburchak, parallel '
     'chiziq va tashqi burchak — uchta koʻchirish vositasi.',
     'Обозначьте один неизвестный угол через $x$ и выразите через него все '
     'углы чертежа. Равнобедренный треугольник, параллельность и внешний '
     'угол — три средства переноса.'),
   T('$\\angle A:\\angle B:\\angle C = 2:3:7$ va $BD$ mediana boʻlsa, '
     '$\\angle ABD$ ni topish uchun avval $30^\\circ, 45^\\circ, 105^\\circ$ '
     'ni yozib olamiz, keyin medianadan hosil boʻlgan ikki uchburchakni '
     'qaraymiz (32 ta masaladan 16-si).',
     'Если $\\angle A:\\angle B:\\angle C = 2:3:7$ и $BD$ — медиана, то для '
     '$\\angle ABD$ сначала выписываем $30^\\circ, 45^\\circ, 105^\\circ$, а '
     'затем смотрим на два треугольника, образованных медианой (задача 16).')),
]))

# ====================================== B · Bissektrisa, mediana, balandlik ==
BOLIMLAR.append(dict(kod='B', hue='alg',
 nom=T('Bissektrisa, mediana, balandlik', 'Биссектриса, медиана, высота'),
 izoh=T('Uchburchakdagi uchta chiziq va ularning uchta markazi. Har bir '
        'variantda shu bobdan kamida bitta savol bor.',
        'Три линии треугольника и три их центра. В каждом варианте есть хотя '
        'бы одна задача отсюда.'),
 items=[

 I('teorema', T('Bissektrisa xossasi', 'Свойство биссектрисы'),
   T('$AL$ — $\\angle A$ ning bissektrisasi, $L\\in BC$. U holda '
     '$\\dfrac{BL}{LC}=\\dfrac{AB}{AC}$.',
     '$AL$ — биссектриса угла $A$, $L\\in BC$. Тогда '
     '$\\dfrac{BL}{LC}=\\dfrac{AB}{AC}$.'),
   T('$AB=6$, $AC=9$, $BC=10$ boʻlsa, $BL:LC=6:9=2:3$, demak $BL=4$, $LC=6$.',
     'Если $AB=6$, $AC=9$, $BC=10$, то $BL:LC=6:9=2:3$, значит $BL=4$, $LC=6$.'),
   T('$ABL$ va $ALC$ uchburchaklarning $A$ dan tushirilgan balandligi umumiy, '
     'shuning uchun yuzalari nisbati $BL:LC$. Ikkinchi tomondan, yuzalarni '
     '$\\tfrac12\\cdot AB\\cdot AL\\sin\\tfrac{A}{2}$ va '
     '$\\tfrac12\\cdot AC\\cdot AL\\sin\\tfrac{A}{2}$ deb yozsak, nisbat '
     '$AB:AC$ chiqadi.',
     'У треугольников $ABL$ и $ALC$ общая высота из $A$, поэтому отношение '
     'площадей равно $BL:LC$. С другой стороны, записав площади как '
     '$\\tfrac12\\cdot AB\\cdot AL\\sin\\tfrac{A}{2}$ и '
     '$\\tfrac12\\cdot AC\\cdot AL\\sin\\tfrac{A}{2}$, получаем отношение '
     '$AB:AC$.'),
   FIG('0 0 240 110',
       '<polygon points="20,90 220,90 80,16"/>'
       '<line x1="80" y1="16" x2="140" y2="90" stroke="%s"/>' % ACC
       + txt(12, 103, 'B') + txt(220, 103, 'C') + txt(74, 12, 'A')
       + txt(134, 104, 'L', ACC))),

 I('formula', T('Bissektrisa uzunligi', 'Длина биссектрисы'),
   T('$AL^2 = AB\\cdot AC - BL\\cdot LC$.',
     '$AL^2 = AB\\cdot AC - BL\\cdot LC$.'),
   T('Yuqoridagi misolda $AL^2 = 6\\cdot9 - 4\\cdot6 = 30$, ya\u02bcni '
     '$AL=\\sqrt{30}$.',
     'В примере выше $AL^2 = 6\\cdot9 - 4\\cdot6 = 30$, то есть '
     '$AL=\\sqrt{30}$.'),
   T('$AL$ ni tashqi chizilgan aylanagacha davom ettiring: hosil boʻlgan '
     'nuqta $K$ uchun $ABL\\sim AKC$, demak $AB\\cdot AC = AL\\cdot AK = '
     'AL(AL+LK)$, va $AL\\cdot LK = BL\\cdot LC$ (nuqtaning aylanaga '
     'nisbatan darajasi).',
     'Продолжите $AL$ до описанной окружности: для полученной точки $K$ '
     'имеем $ABL\\sim AKC$, значит $AB\\cdot AC = AL\\cdot AK = AL(AL+LK)$, '
     'а $AL\\cdot LK = BL\\cdot LC$ (степень точки).')),

 I('teorema', T('Ichki chizilgan aylana markazi', 'Центр вписанной окружности'),
   T('Uchala bissektrisa bitta nuqtada — ichki chizilgan aylana markazi $I$ '
     'da kesishadi, va $\\angle BIC = 90^\\circ + \\dfrac{\\angle A}{2}$.',
     'Все три биссектрисы пересекаются в одной точке — центре вписанной '
     'окружности $I$, причём $\\angle BIC = 90^\\circ + '
     '\\dfrac{\\angle A}{2}$.'),
   T('$\\angle A = 50^\\circ$ boʻlsa, $\\angle BIC = 115^\\circ$. Bu formula '
     '“ikkita bissektrisa kesishdi” degan har qanday masalani bitta qatorda '
     'hal qiladi.',
     'Если $\\angle A = 50^\\circ$, то $\\angle BIC = 115^\\circ$. Эта '
     'формула решает в одну строку любую задачу, где «пересеклись две '
     'биссектрисы».'),
   T('$\\angle IBC+\\angle ICB = \\tfrac{B+C}{2} = \\tfrac{180^\\circ-A}{2}$, '
     'demak $\\angle BIC = 180^\\circ - \\tfrac{180^\\circ-A}{2} = '
     '90^\\circ+\\tfrac{A}{2}$.',
     '$\\angle IBC+\\angle ICB = \\tfrac{B+C}{2} = '
     '\\tfrac{180^\\circ-A}{2}$, значит $\\angle BIC = 180^\\circ - '
     '\\tfrac{180^\\circ-A}{2} = 90^\\circ+\\tfrac{A}{2}$.')),

 I('teorema', T('Medianalar va ogʻirlik markazi', 'Медианы и центр тяжести'),
   T('Uchala mediana bitta nuqtada kesishadi va uni uchidan hisoblaganda '
     '$2:1$ nisbatda boʻladi. Mediana uchburchakni <b>teng yuzli</b> ikkiga '
     'ajratadi.',
     'Три медианы пересекаются в одной точке и делятся ею в отношении $2:1$, '
     'считая от вершины. Медиана делит треугольник на <b>две равновеликие</b> '
     'части.'),
   T('Ogʻirlik markazi uchburchakni yuzi teng oltita uchburchakka ajratadi — '
     'yuzalar nisbati soʻralgan masalalarda shu fakt yetadi.',
     'Центр тяжести делит треугольник на шесть равновеликих треугольников — '
     'в задачах на отношение площадей этого достаточно.')),

 I('formula', T('Mediana uzunligi', 'Длина медианы'),
   T('$m_a^2 = \\dfrac{2b^2+2c^2-a^2}{4}$. Bunga teng kuchli va qulayroq '
     'harakat: medianani <b>ikki baravar uzaytiring</b> — parallelogramm '
     'hosil boʻladi.',
     '$m_a^2 = \\dfrac{2b^2+2c^2-a^2}{4}$. Равносильный и более удобный '
     'приём: <b>удвойте медиану</b> — получится параллелограмм.'),
   T('Tomonlari $15$ va $13$, uchinchi tomoniga tushirilgan medianasi $7$ '
     'boʻlgan uchburchak yuzi: medianani ikki baravar uzaytirsak, tomonlari '
     '$15$, $13$, $14$ boʻlgan <b>oʻsha yuzli</b> uchburchak chiqadi, uning '
     'yuzi Geron boʻyicha $84$ (masala 9).',
     'Площадь треугольника со сторонами $15$ и $13$ и медианой $7$ к третьей '
     'стороне: удвоив медиану, получаем треугольник со сторонами $15$, $13$, '
     '$14$ <b>той же площади</b>, а его площадь по Герону равна $84$ '
     '(задача 9).')),

 I('teorema', T('Balandliklar va ortomarkaz', 'Высоты и ортоцентр'),
   T('Uchala balandlik (yoki ularning davomlari) bitta nuqtada — ortomarkaz '
     '$H$ da kesishadi. Bunda $AH = 2\\,OM_a$, bu yerda $O$ — tashqi '
     'chizilgan aylana markazi, $M_a$ — $BC$ ning oʻrtasi.',
     'Три высоты (или их продолжения) пересекаются в ортоцентре $H$. При этом '
     '$AH = 2\\,OM_a$, где $O$ — центр описанной окружности, $M_a$ — середина '
     '$BC$.'),
   T('$\\sqrt3\\,AB = CH$ shartidan $\\angle ACB$ ni topish mumkin: '
     '$CH = 2\\,OM_c = 2R\\cos C$ va $AB = 2R\\sin C$, demak '
     '$\\sqrt3\\sin C=\\cos C$, $\\operatorname{tg} C = '
     '\\tfrac{1}{\\sqrt3}$, $C=30^\\circ$.',
     'Из условия $\\sqrt3\\,AB = CH$ находится $\\angle ACB$: '
     '$CH = 2\\,OM_c = 2R\\cos C$ и $AB = 2R\\sin C$, значит '
     '$\\sqrt3\\sin C=\\cos C$, $\\operatorname{tg} C = '
     '\\tfrac{1}{\\sqrt3}$, $C=30^\\circ$.')),

 I('usul', T('Bissektrisa va parallel', 'Биссектриса и параллельность'),
   T('Bissektrisaga parallel chiziq oʻtkazilsa yoki bissektrisa qandaydir '
     'kesmaga perpendikulyar boʻlsa — deyarli har doim <b>teng yonli '
     'uchburchak</b> paydo boʻladi.',
     'Если провести прямую, параллельную биссектрисе, или если биссектриса '
     'перпендикулярна какому-то отрезку — почти всегда возникает '
     '<b>равнобедренный треугольник</b>.'),
   T('Bissektrisa mediana bilan perpendikulyar kesishsa, ular ajratgan '
     'uchburchak teng yonli boʻladi — 14-masala aynan shunga quriladi.',
     'Если биссектриса перпендикулярна медиане, то отсечённый ими '
     'треугольник равнобедренный — на этом и построена задача 14.')),
]))

# ================================== C · Toʻgʻri burchakli uchburchak ==
BOLIMLAR.append(dict(kod='C', hue='nt',
 nom=T('Toʻgʻri burchakli uchburchak', 'Прямоугольный треугольник'),
 izoh=T('Toʻrtta munosabat — Pifagor, balandlik, mediana va $30^\\circ$ '
        'qoidasi. Ular bilan hisoblash masalalarining koʻpi bitta '
        'tenglamaga tushadi.',
        'Четыре соотношения — Пифагор, высота, медиана и правило '
        '$30^\\circ$. С ними большинство вычислительных задач сводится к '
        'одному уравнению.'),
 items=[

 I('teorema', T('Pifagor teoremasi', 'Теорема Пифагора'),
   T('$a^2+b^2=c^2$, va teskarisi: agar $a^2+b^2=c^2$ boʻlsa, uchburchak '
     'toʻgʻri burchakli.',
     '$a^2+b^2=c^2$, и обратно: если $a^2+b^2=c^2$, то треугольник '
     'прямоугольный.'),
   T('Eslab qolish arzon boʻlgan uchliklar: $(3,4,5)$, $(5,12,13)$, '
     '$(8,15,17)$, $(7,24,25)$, $(20,21,29)$ va ularning karralilari.',
     'Тройки, которые стоит помнить: $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, '
     '$(7,24,25)$, $(20,21,29)$ и кратные им.')),

 I('teorema', T('Balandlik munosabatlari', 'Соотношения с высотой'),
   T('Gipotenuzaga tushirilgan balandlik $h$ uni $p$ va $q$ boʻlaklarga '
     'ajratsa: $h^2=pq$, $a^2=pc$, $b^2=qc$, $ab=ch$.',
     'Если высота $h$ к гипотенузе делит её на отрезки $p$ и $q$, то '
     '$h^2=pq$, $a^2=pc$, $b^2=qc$, $ab=ch$.'),
   T('Katetlari $6$ va $8$ boʻlsa, $c=10$ va $h=\\dfrac{6\\cdot8}{10}=4{,}8$. '
     'Teskarisi ham ishlaydi: $h=6$ va $p-q=5$ berilsa, $pq=36$ dan '
     '$p=9,\;q=4$, demak $c=13$ va $S=\\tfrac12\\cdot13\\cdot6=39$ '
     '(15-masala).',
     'Если катеты $6$ и $8$, то $c=10$ и $h=\\dfrac{6\\cdot8}{10}=4{,}8$. '
     'Работает и обратно: при $h=6$ и $p-q=5$ из $pq=36$ получаем '
     '$p=9,\;q=4$, значит $c=13$ и $S=\\tfrac12\\cdot13\\cdot6=39$ '
     '(задача 15).'),
   T('$ACH$ va $ABC$ uchburchaklar oʻxshash (umumiy burchak va toʻgʻri '
     'burchak), shundan $b^2=qc$; xuddi shunday $a^2=pc$; ikkalasini '
     'qoʻshsak Pifagor chiqadi.',
     'Треугольники $ACH$ и $ABC$ подобны (общий угол и прямой угол), отсюда '
     '$b^2=qc$; аналогично $a^2=pc$; сложив, получаем Пифагора.'),
   FIG('0 0 260 110',
       '<polygon points="20,90 240,90 92,16"/>'
       '<line x1="92" y1="16" x2="92" y2="90" stroke="%s"/>' % ACC
       + '<path d="M 92 78 L 104 78 L 104 90" stroke="%s" stroke-width="1"/>' % SOFT
       + txt(12, 103, 'A') + txt(240, 103, 'B') + txt(86, 12, 'C')
       + txt(88, 104, 'H', ACC) + txt(52, 104, 'q', SOFT) + txt(160, 104, 'p', SOFT)
       + txt(96, 60, 'h', ACC))),

 I('xossa', T('Gipotenuzaga tushirilgan mediana', 'Медиана к гипотенузе'),
   T('Gipotenuzaga tushirilgan mediana gipotenuzaning yarmiga teng: '
     '$m_c=\\dfrac{c}{2}$. Demak gipotenuzaning oʻrtasi — tashqi chizilgan '
     'aylana markazi, $R=\\dfrac{c}{2}$.',
     'Медиана к гипотенузе равна её половине: $m_c=\\dfrac{c}{2}$. Значит '
     'середина гипотенузы — центр описанной окружности, $R=\\dfrac{c}{2}$.'),
   T('Bu xossa teskari tomonga ham ishlaydi: agar mediana oʻzi tortgan '
     'tomonning yarmiga teng boʻlsa, burchak toʻgʻri. Bundan tashqari, '
     '$MA=MB=MC$ tengligi darhol <b>ikkita teng yonli uchburchak</b> beradi '
     '— 14-masalada kalit shu.',
     'Свойство работает и в обратную сторону: если медиана равна половине '
     'стороны, к которой проведена, угол прямой. Кроме того, равенство '
     '$MA=MB=MC$ сразу даёт <b>два равнобедренных треугольника</b> — в '
     'задаче 14 это и есть ключ.')),

 I('xossa', T('$30^\\circ$, $45^\\circ$ va $60^\\circ$', '$30^\\circ$, $45^\\circ$ и $60^\\circ$'),
   T('$30^\\circ$ qarshisidagi katet gipotenuzaning yarmi. Tomonlar '
     'nisbati: $30$–$60$–$90$ uchun $1:\\sqrt3:2$, $45$–$45$–$90$ uchun '
     '$1:1:\\sqrt2$.',
     'Катет против $30^\\circ$ равен половине гипотенузы. Отношения сторон: '
     'для $30$–$60$–$90$ это $1:\\sqrt3:2$, для $45$–$45$–$90$ — '
     '$1:1:\\sqrt2$.'),
   T('Burchagi $120^\\circ$ boʻlgan teng yonli uchburchakda balandlik uni '
     'ikkita $30$–$60$–$90$ uchburchakka ajratadi, shuning uchun asos yon '
     'tomondan $\\sqrt3$ marta uzun (13-masala).',
     'В равнобедренном треугольнике с углом $120^\\circ$ высота разбивает '
     'его на два треугольника $30$–$60$–$90$, поэтому основание в $\\sqrt3$ '
     'раз длиннее боковой стороны (задача 13).')),

 I('usul', T('Ikkita tenglama qoidasi', 'Правило двух уравнений'),
   T('Toʻgʻri burchakli uchburchakdagi deyarli har qanday hisoblash '
     'masalasi ikkita tenglamaga tushadi: $a^2+b^2=c^2$ va $ab=ch$. '
     'Ulardan $(a+b)^2 = c^2+2ch$ chiqadi.',
     'Почти любая вычислительная задача о прямоугольном треугольнике '
     'сводится к двум уравнениям: $a^2+b^2=c^2$ и $ab=ch$. Из них следует '
     '$(a+b)^2 = c^2+2ch$.'),
   T('$c=8$, $h=1\\tfrac1{16}$ boʻlsa, $(a+b)^2 = 64+2\\cdot8\\cdot'
     '\\tfrac{17}{16}=81$, demak $a+b=9$ va perimetr $17$ (10-masala) — '
     'katetlarning oʻzini topish shart emas.',
     'При $c=8$, $h=1\\tfrac1{16}$ имеем $(a+b)^2 = 64+2\\cdot8\\cdot'
     '\\tfrac{17}{16}=81$, значит $a+b=9$ и периметр $17$ (задача 10) — сами '
     'катеты находить не нужно.')),
]))

# =========================================================== D · Aylana ==
BOLIMLAR.append(dict(kod='D', hue='comb',
 nom=T('Aylana', 'Окружность'),
 izoh=T('Sakkizta variantda aylana bilan bogʻliq $8$ ta savol bor. '
        'Ularning hammasi ichki chizilgan burchak va nuqtaning darajasi '
        'atrofida aylanadi.',
        'В восьми вариантах $8$ задач про окружность. Все они вращаются '
        'вокруг вписанного угла и степени точки.'),
 items=[

 I('teorema', T('Ichki chizilgan burchak', 'Вписанный угол'),
   T('Ichki chizilgan burchak oʻzi tayangan yoyning yarmiga teng, demak u '
     'mos markaziy burchakning yarmi. Bir yoyga tayangan hamma ichki '
     'chizilgan burchak teng.',
     'Вписанный угол равен половине дуги, на которую опирается, то есть '
     'половине соответствующего центрального угла. Все вписанные углы, '
     'опирающиеся на одну дугу, равны.'),
   T('Ichki chizilgan burchak $35^\\circ$ boʻlsa, markaziy burchak '
     '$70^\\circ$ (4-masala). Teskari yoʻnalish ham muhim: bir tomonni bir '
     'xil burchak ostida koʻradigan nuqtalar bitta aylanada yotadi.',
     'Если вписанный угол $35^\\circ$, то центральный равен $70^\\circ$ '
     '(задача 4). Важно и обратное: точки, из которых отрезок виден под '
     'одним углом, лежат на одной окружности.'),
   T('Markazdan uchgacha radius oʻtkazing: hosil boʻlgan teng yonli '
     'uchburchakda tashqi burchak ikkita teng burchak yigʻindisiga teng — '
     'shu darhol “ikki barobar” munosabatini beradi.',
     'Проведите радиус в вершину: в получившемся равнобедренном '
     'треугольнике внешний угол равен сумме двух равных — это и даёт '
     'отношение «вдвое».'),
   FIG('0 0 230 130',
       '<circle cx="90" cy="65" r="55"/>'
       '<line x1="46" y1="98" x2="134" y2="98"/>'
       '<line x1="46" y1="98" x2="90" y2="10"/><line x1="134" y1="98" x2="90" y2="10"/>'
       '<line x1="46" y1="98" x2="90" y2="65" stroke="%s"/>'
       '<line x1="134" y1="98" x2="90" y2="65" stroke="%s"/>' % (ACC, ACC)
       + txt(36, 112, 'A') + txt(136, 112, 'B') + txt(84, 8, 'C')
       + txt(96, 62, 'O', ACC)
       + txt(150, 40, '\u2220C = \u00bd \u2220AOB', SOFT, 11.5))),

 I('natija', T('Diametr va toʻrtburchak', 'Диаметр и четырёхугольник'),
   T('Diametrga tayangan burchak toʻgʻri. Aylanaga ichki chizilgan '
     'toʻrtburchakda qarama-qarshi burchaklar yigʻindisi $180^\\circ$, va '
     'teskarisi ham oʻrinli.',
     'Угол, опирающийся на диаметр, прямой. У вписанного четырёхугольника '
     'сумма противоположных углов равна $180^\\circ$, и обратно.'),
   T('$\\angle ABC=\\angle ADC=90^\\circ$ boʻlsa, $B$ va $D$ nuqtalar '
     '$AC$ diametrli aylanada yotadi — 19-masala shu bitta kuzatuvdan '
     'yechiladi.',
     'Если $\\angle ABC=\\angle ADC=90^\\circ$, то $B$ и $D$ лежат на '
     'окружности с диаметром $AC$ — из одного этого наблюдения решается '
     'задача 19.')),

 I('teorema', T('Urinma va vatar burchagi', 'Угол между касательной и хордой'),
   T('Urinma bilan vatar orasidagi burchak shu vatarga tayangan, '
     'qarshi yoydagi ichki chizilgan burchakka teng (yaʼni kesilgan '
     'yoyning yarmiga).',
     'Угол между касательной и хордой равен вписанному углу, опирающемуся '
     'на эту хорду из другой дуги (то есть половине отсекаемой дуги).'),
   T('Urinma chizilgan har qanday masalada birinchi harakat — shu burchakni '
     'aylana ichidagi burchakka koʻchirish (32-masala aynan shunday '
     'yechiladi).',
     'В любой задаче с касательной первый шаг — перенести этот угол внутрь '
     'окружности (именно так решается задача 32).')),

 I('teorema', T('Nuqtaning aylanaga nisbatan darajasi', 'Степень точки относительно окружности'),
   T('$P$ nuqtadan oʻtgan ikkita chiziq aylanani $A,B$ va $C,D$ '
     'nuqtalarda kessa: $PA\\cdot PB = PC\\cdot PD$. Agar $PT$ urinma '
     'boʻlsa, $PT^2 = PA\\cdot PB$.',
     'Если две прямые через $P$ пересекают окружность в точках $A,B$ и '
     '$C,D$, то $PA\\cdot PB = PC\\cdot PD$. Если $PT$ — касательная, то '
     '$PT^2 = PA\\cdot PB$.'),
   T('Urinma $PT=12$ va sekans $PA=8$ boʻlsa, $PB=\\dfrac{144}{8}=18$, '
     'demak vatar $AB=10$ (masala 31).',
     'Если касательная $PT=12$ и секущая $PA=8$, то '
     '$PB=\\dfrac{144}{8}=18$, значит хорда $AB=10$ (задача 31).'),
   T('$PAC$ va $PDB$ uchburchaklar oʻxshash: $\\angle P$ umumiy, '
     '$\\angle PAC=\\angle PDB$ (bir yoyga tayangan yoki ichki chizilgan '
     'toʻrtburchakning tashqi burchagi).',
     'Треугольники $PAC$ и $PDB$ подобны: угол $P$ общий, а '
     '$\\angle PAC=\\angle PDB$ (углы на одну дугу либо внешний угол '
     'вписанного четырёхугольника).'),
   FIG('0 0 260 120',
       '<circle cx="165" cy="60" r="48"/>'
       '<line x1="20" y1="95" x2="240" y2="34" stroke="%s"/>' % ACC
       + '<line x1="20" y1="95" x2="150" y2="107"/>'
       + '<circle cx="119" cy="72" r="2.5" fill="%s" stroke="none"/>' % ACC
       + '<circle cx="209" cy="47" r="2.5" fill="%s" stroke="none"/>' % ACC
       + txt(8, 104, 'P') + txt(112, 88, 'A', ACC) + txt(212, 40, 'B', ACC)
       + txt(146, 118, 'T'))),

 I('teorema', T('Ptolemey teoremasi', 'Теорема Птолемея'),
   T('Aylanaga ichki chizilgan $ABCD$ toʻrtburchak uchun '
     '$AC\\cdot BD = AB\\cdot CD + BC\\cdot AD$.',
     'Для вписанного четырёхугольника $ABCD$ выполняется '
     '$AC\\cdot BD = AB\\cdot CD + BC\\cdot AD$.'),
   T('$ABC$ teng tomonli uchburchak tashqi chizilgan aylanada va $M$ — '
     '$BC$ yoyidagi nuqta boʻlsa, Ptolemeydan $MA = MB + MC$ chiqadi '
     '(masala 30).',
     'Если $ABC$ — равносторонний треугольник, вписанный в окружность, а '
     '$M$ — точка дуги $BC$, то из Птолемея следует $MA = MB + MC$ '
     '(задача 30).')),

 I('xossa', T('Urinmalar va urinuvchi aylanalar', 'Касательные и касающиеся окружности'),
   T('Bitta nuqtadan oʻtkazilgan ikkita urinma teng va markazgacha boʻlgan '
     'chiziq ular orasidagi burchakni teng ikkiga boʻladi. Ikkita aylana '
     'urinsa, markazlar va urinish nuqtasi bir toʻgʻri chiziqda yotadi: '
     'tashqi urinishda $d=R+r$, ichki urinishda $d=R-r$.',
     'Две касательные из одной точки равны, а прямая к центру делит угол '
     'между ними пополам. Если две окружности касаются, центры и точка '
     'касания лежат на одной прямой: при внешнем касании $d=R+r$, при '
     'внутреннем $d=R-r$.'),
   T('Burchak ichiga chizilgan aylananing markazi bissektrisada yotadi va '
     'uchgacha boʻlgan masofa $\\dfrac{r}{\\sin\\frac{\\alpha}{2}}$ — '
     '20-masalada butun yechim shu ikki jumladan iborat.',
     'Центр окружности, вписанной в угол, лежит на биссектрисе, а '
     'расстояние до вершины равно $\\dfrac{r}{\\sin\\frac{\\alpha}{2}}$ — в '
     'задаче 20 всё решение состоит из этих двух фраз.')),

 I('formula', T('Ichki va tashqi chizilgan aylana radiusi', 'Радиусы вписанной и описанной окружностей'),
   T('$R=\\dfrac{abc}{4S}$, $\;r=\\dfrac{S}{p}$, bu yerda $p$ — '
     'yarim perimetr. Toʻgʻri burchakli uchburchak uchun '
     '$r=\\dfrac{a+b-c}{2}$.',
     '$R=\\dfrac{abc}{4S}$, $\;r=\\dfrac{S}{p}$, где $p$ — полупериметр. '
     'Для прямоугольного треугольника $r=\\dfrac{a+b-c}{2}$.'),
   T('Tomonlari $13,14,15$ boʻlgan uchburchakda $S=84$, demak '
     '$r=\\dfrac{84}{21}=4$ va $R=\\dfrac{13\\cdot14\\cdot15}{4\\cdot84}='
     '\\dfrac{65}{8}$.',
     'В треугольнике со сторонами $13,14,15$ имеем $S=84$, значит '
     '$r=\\dfrac{84}{21}=4$ и $R=\\dfrac{13\\cdot14\\cdot15}{4\\cdot84}='
     '\\dfrac{65}{8}$.')),
]))

# ================================================= E · Yuz va oʻxshashlik ==
BOLIMLAR.append(dict(kod='E', hue='geo',
 nom=T('Yuz va oʻxshashlik', 'Площадь и подобие'),
 izoh=T('Yuzalar nisbati — olimpiada geometriyasining eng kuchli quroli: '
        'uzunliklarni topmasdan turib javob beradi.',
        'Отношение площадей — самый сильный инструмент олимпиадной '
        'геометрии: он даёт ответ, не находя длин.'),
 items=[

 I('formula', T('Yuz formulalari', 'Формулы площади'),
   T('$S=\\tfrac12 a h_a = \\tfrac12 ab\\sin C = \\dfrac{abc}{4R} = pr = '
     '\\sqrt{p(p-a)(p-b)(p-c)}$ (Geron).',
     '$S=\\tfrac12 a h_a = \\tfrac12 ab\\sin C = \\dfrac{abc}{4R} = pr = '
     '\\sqrt{p(p-a)(p-b)(p-c)}$ (Герон).'),
   T('Tomonlari $13,14,15$: $p=21$, $S=\\sqrt{21\\cdot8\\cdot7\\cdot6}=84$. '
     'Bu uchburchak variantlarda eng koʻp uchraydigan “butun sonli” '
     'uchburchak (6-masala).',
     'Стороны $13,14,15$: $p=21$, $S=\\sqrt{21\\cdot8\\cdot7\\cdot6}=84$. '
     'Это самый частый «целочисленный» треугольник в вариантах (задача 6).')),

 I('teorema', T('Umumiy balandlik qoidasi', 'Правило общей высоты'),
   T('Balandligi umumiy boʻlgan ikkita uchburchakning yuzalari asoslariga '
     'proporsional. Xususan, $BC$ dagi $L$ nuqta uchun '
     '$\\dfrac{S_{ABL}}{S_{ALC}}=\\dfrac{BL}{LC}$.',
     'Площади двух треугольников с общей высотой пропорциональны '
     'основаниям. В частности, для точки $L$ на $BC$ '
     '$\\dfrac{S_{ABL}}{S_{ALC}}=\\dfrac{BL}{LC}$.'),
   T('Diagonallari $O$ da kesishgan toʻrtburchakda shu qoidani ikki marta '
     'qoʻllasak, $S_{AOB}\\cdot S_{COD}=S_{BOC}\\cdot S_{AOD}$ chiqadi — '
     '18-masalaning butun yechimi shu.',
     'Применив это правило дважды в четырёхугольнике с диагоналями, '
     'пересекающимися в $O$, получаем '
     '$S_{AOB}\\cdot S_{COD}=S_{BOC}\\cdot S_{AOD}$ — в этом всё решение '
     'задачи 18.'),
   None,
   FIG('0 0 240 104',
       '<polygon points="20,88 220,88 90,14"/>'
       '<line x1="90" y1="14" x2="130" y2="88" stroke="%s"/>' % ACC
       + txt(12, 100, 'B') + txt(220, 100, 'C') + txt(84, 10, 'A')
       + txt(124, 100, 'L', ACC)
       + txt(60, 100, 'BL', SOFT, 11) + txt(166, 100, 'LC', SOFT, 11))),

 I('teorema', T('Oʻxshashlik', 'Подобие'),
   T('Ikki burchagi teng boʻlgan uchburchaklar oʻxshash. Oʻxshashlik '
     'koeffitsiyenti $k$ boʻlsa, uzunliklar $k$ marta, <b>yuzalar '
     '$k^2$</b> marta farq qiladi.',
     'Треугольники с двумя равными углами подобны. Если коэффициент подобия '
     '$k$, то длины отличаются в $k$ раз, а <b>площади — в $k^2$</b>.'),
   T('Uchburchak ichidagi nuqtadan tomonlarga parallel chiziqlar '
     'oʻtkazilganda hosil boʻlgan uchta kichik uchburchak asl uchburchakka '
     'oʻxshash, shuning uchun $\\sqrt{S_1}+\\sqrt{S_2}+\\sqrt{S_3}='
     '\\sqrt{S}$ (23-masala).',
     'При проведении через точку внутри треугольника прямых, параллельных '
     'сторонам, три маленьких треугольника подобны исходному, поэтому '
     '$\\sqrt{S_1}+\\sqrt{S_2}+\\sqrt{S_3}=\\sqrt{S}$ (задача 23).'),
   T('Uchta kichik uchburchakning asoslari birgalikda katta uchburchak '
     'tomonini beradi: $k_1+k_2+k_3=1$, va $k_i=\\sqrt{S_i/S}$.',
     'Основания трёх маленьких треугольников вместе составляют сторону '
     'большого: $k_1+k_2+k_3=1$, где $k_i=\\sqrt{S_i/S}$.')),

 I('teorema', T('Fales teoremasi va oʻrta chiziq', 'Теорема Фалеса и средняя линия'),
   T('Parallel chiziqlar kesuvchilarda proporsional kesmalar ajratadi. '
     'Uchburchakning oʻrta chizigʻi uchinchi tomonga parallel va uning '
     'yarmiga teng.',
     'Параллельные прямые отсекают на секущих пропорциональные отрезки. '
     'Средняя линия треугольника параллельна третьей стороне и равна её '
     'половине.'),
   T('Diagonallari oʻrtalari yoki tomonlari oʻrtalari tutashtirilgan har '
     'qanday masalada birinchi harakat — oʻrta chiziqni koʻrish '
     '(19, 26-masalalar).',
     'В любой задаче, где соединяют середины сторон или диагоналей, первый '
     'шаг — увидеть среднюю линию (задачи 19 и 26).')),

 I('usul', T('Yuz orqali nisbat topish', 'Отношение через площадь'),
   T('Kesma qanday nisbatda boʻlinganini bilish uchun uzunlik oʻrniga '
     '<b>yuzani</b> hisoblang: koʻpincha yuzalar berilgan boʻladi va nisbat '
     'darhol chiqadi.',
     'Чтобы узнать, в каком отношении делится отрезок, считайте не длину, а '
     '<b>площадь</b>: часто площади даны, и отношение получается сразу.'),
   T('$AC$ dagi $S$ nuqta uchun $\\dfrac{AS}{SC} = '
     '\\dfrac{S_{ABS}}{S_{SBC}} = \\dfrac{S_{ASD}}{S_{SDC}}$ — 26-masala '
     'shu ikki tenglikdan tuzilgan.',
     'Для точки $S$ на $AC$ верно $\\dfrac{AS}{SC} = '
     '\\dfrac{S_{ABS}}{S_{SBC}} = \\dfrac{S_{ASD}}{S_{SDC}}$ — на этих двух '
     'равенствах и построена задача 26.')),
]))

# ============================================ F · Toʻrtburchak va trapetsiya ==
BOLIMLAR.append(dict(kod='F', hue='trig',
 nom=T('Toʻrtburchak va trapetsiya', 'Четырёхугольник и трапеция'),
 izoh=T('Eng katta kichik mavzu: sakkizta variantda $14$ ta savol. '
        'Trapetsiya, parallelogramm va kvadrat — deyarli har variantda.',
        'Самая большая подтема: $14$ задач в восьми вариантах. Трапеция, '
        'параллелограмм и квадрат — почти в каждом варианте.'),
 items=[

 I('xossa', T('Parallelogramm', 'Параллелограмм'),
   T('Qarama-qarshi tomonlari va burchaklari teng, diagonallari kesishish '
     'nuqtasida teng ikkiga boʻlinadi. Alomatlari: ikkita tomon parallel va '
     'teng; yoki diagonallar bir-birini teng boʻladi. Diagonallar uchun '
     '$d_1^2+d_2^2 = 2(a^2+b^2)$.',
     'Противоположные стороны и углы равны, диагонали точкой пересечения '
     'делятся пополам. Признаки: две стороны параллельны и равны; или '
     'диагонали делят друг друга пополам. Для диагоналей '
     '$d_1^2+d_2^2 = 2(a^2+b^2)$.'),
   T('Perimetri $36$, bir tomoni $8$ boʻlsa, ikkinchisi $10$ (5-masala '
     'darajasi). Diagonallar formulasi esa medianani ikki baravar '
     'uzaytirish usulining boshqacha yozuvi.',
     'Если периметр $36$ и одна сторона $8$, то другая равна $10$ (уровень '
     'задачи 5). А формула диагоналей — это другая запись приёма с '
     'удвоением медианы.')),

 I('formula', T('Trapetsiya oʻrta chizigʻi va diagonallari',
                'Средняя линия и диагонали трапеции'),
   T('Oʻrta chiziq $m=\\dfrac{a+b}{2}$. Diagonallar oʻrtalarini '
     'tutashtiruvchi kesma $\\dfrac{|a-b|}{2}$ ga teng va asoslarga '
     'parallel.',
     'Средняя линия $m=\\dfrac{a+b}{2}$. Отрезок, соединяющий середины '
     'диагоналей, равен $\\dfrac{|a-b|}{2}$ и параллелен основаниям.'),
   T('Oʻrta chizigʻi $14$, diagonallar oʻrtalari orasidagi masofa $8$ '
     'boʻlsa: $a+b=28$, $a-b=16$, demak katta asos $22$.',
     'Если средняя линия $14$, а расстояние между серединами диагоналей '
     '$8$, то $a+b=28$, $a-b=16$, значит большее основание равно $22$.'),
   None,
   FIG('0 0 250 108',
       '<polygon points="30,88 230,88 180,20 90,20"/>'
       '<line x1="60" y1="54" x2="205" y2="54" stroke="%s"/>' % ACC
       + '<line x1="30" y1="88" x2="180" y2="20" stroke="%s" stroke-dasharray="4 3"/>' % SOFT
       + '<line x1="230" y1="88" x2="90" y2="20" stroke="%s" stroke-dasharray="4 3"/>' % SOFT
       + txt(22, 101, 'A') + txt(230, 101, 'B') + txt(180, 15, 'C') + txt(84, 15, 'D')
       + txt(212, 50, 'm', ACC))),

 I('teorema', T('Ichki va tashqi chizilgan toʻrtburchak',
                'Вписанный и описанный четырёхугольник'),
   T('Aylana <b>ichiga</b> chizilgan boʻlishi uchun: qarama-qarshi '
     'burchaklar yigʻindisi $180^\\circ$. Aylana <b>tashqarisiga</b> '
     'chizilgan (yaʼni aylana toʻrtburchakning ichida, tomonlarga urinadi) '
     'boʻlishi uchun: $a+c=b+d$ (Pito teoremasi).',
     'Четырёхугольник вписан в окружность тогда и только тогда, когда сумма '
     'противоположных углов равна $180^\\circ$. Окружность вписана в него '
     'тогда и только тогда, когда $a+c=b+d$ (теорема Пито).'),
   T('Teng yonli trapetsiyani har doim aylanaga ichki chizish mumkin; '
     'aylana ichki chizilishi uchun esa $a+b=2c$ boʻlishi kerak, bu yerda '
     '$c$ — yon tomon.',
     'Равнобокую трапецию всегда можно вписать в окружность; а вписать '
     'окружность в неё можно тогда, когда $a+b=2c$, где $c$ — боковая '
     'сторона.')),

 I('xossa', T('Perpendikulyar diagonallar', 'Перпендикулярные диагонали'),
   T('Diagonallari perpendikulyar toʻrtburchak yuzi '
     '$S=\\tfrac12 d_1 d_2$. Diagonallari perpendikulyar <b>teng yonli '
     'trapetsiya</b> uchun esa balandlik oʻrta chiziqqa teng va '
     '$S=\\left(\\dfrac{a+b}{2}\\right)^2$.',
     'Площадь четырёхугольника с перпендикулярными диагоналями равна '
     '$S=\\tfrac12 d_1 d_2$. А у <b>равнобокой трапеции</b> с '
     'перпендикулярными диагоналями высота равна средней линии и '
     '$S=\\left(\\dfrac{a+b}{2}\\right)^2$.'),
   T('Asoslari $12$ va $8$ boʻlgan bunday trapetsiya yuzi '
     '$\\left(\\tfrac{12+8}{2}\\right)^2=100$ (12-masala).',
     'Площадь такой трапеции с основаниями $12$ и $8$ равна '
     '$\\left(\\tfrac{12+8}{2}\\right)^2=100$ (задача 12).')),

 I('teorema', T('Varinyon parallelogrammi', 'Параллелограмм Вариньона'),
   T('Ixtiyoriy toʻrtburchak tomonlarining oʻrtalari parallelogramm hosil '
     'qiladi; uning tomonlari diagonallarga parallel va yuzi asl '
     'toʻrtburchak yuzining yarmi.',
     'Середины сторон произвольного четырёхугольника образуют '
     'параллелограмм; его стороны параллельны диагоналям, а площадь равна '
     'половине площади исходного четырёхугольника.'),
   T('Oʻrta chiziq teoremasidan: $MN$ va $QP$ ikkalasi ham $AC$ ga parallel '
     'va $\\tfrac12 AC$ ga teng.',
     'Из теоремы о средней линии: и $MN$, и $QP$ параллельны $AC$ и равны '
     '$\\tfrac12 AC$.')),

 I('xossa', T('Kvadrat ichidagi nuqta', 'Точка внутри квадрата'),
   T('Kvadrat ichidagi ixtiyoriy $M$ nuqta uchun $MA^2+MC^2 = MB^2+MD^2$ '
     '(“Britaniya bayrogʻi” teoremasi). Kvadrat bilan bogʻliq masalalarda '
     'ikkinchi kuchli harakat — <b>$90^\\circ$ ga burish</b>.',
     'Для любой точки $M$ внутри квадрата $MA^2+MC^2 = MB^2+MD^2$ (теорема '
     '«британского флага»). Второй сильный приём в задачах о квадрате — '
     '<b>поворот на $90^\\circ$</b>.'),
   T('$MA=1$, $MB=2$, $MC=3$ boʻlsa, burish usuli $\\angle AMB=135^\\circ$ '
     'ni beradi (25-masala).',
     'Если $MA=1$, $MB=2$, $MC=3$, то поворот даёт $\\angle AMB=135^\\circ$ '
     '(задача 25).'),
   T('$M$ dan tomonlarga perpendikulyarlar tushiring: toʻrtta toʻgʻri '
     'burchakli uchburchakda Pifagorni yozib, ikki tomonga qoʻshsak, '
     'ikkala yigʻindi ham $x^2+y^2+(a-x)^2+(a-y)^2$ ga teng chiqadi.',
     'Опустите из $M$ перпендикуляры на стороны: записав Пифагора в четырёх '
     'прямоугольных треугольниках, обе суммы получаем равными '
     '$x^2+y^2+(a-x)^2+(a-y)^2$.')),
]))

# ================================ G · Sinuslar, kosinuslar, koordinata ==
BOLIMLAR.append(dict(kod='G', hue='alg',
 nom=T('Sinuslar va kosinuslar teoremasi, koordinata',
       'Теоремы синусов и косинусов, координаты'),
 izoh=T('Burchak sanash yetmay qolganda ishga tushadigan hisob vositalari. '
        '10 va 11-sinfda deyarli har variantda kerak boʻladi.',
        'Вычислительные средства на случай, когда счёта углов не хватает. В '
        '10 и 11 классе нужны почти в каждом варианте.'),
 items=[

 I('teorema', T('Sinuslar teoremasi', 'Теорема синусов'),
   T('$\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}=2R$.',
     '$\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}=2R$.'),
   T('Burchagi $120^\\circ$, yuzi $\\sqrt3$ boʻlgan teng yonli uchburchakda '
     'yon tomon $2$, asos $2\\sqrt3$, demak '
     '$R=\\dfrac{2\\sqrt3}{2\\sin120^\\circ}=2$ (13-masala).',
     'В равнобедренном треугольнике с углом $120^\\circ$ и площадью '
     '$\\sqrt3$ боковая сторона равна $2$, основание $2\\sqrt3$, значит '
     '$R=\\dfrac{2\\sqrt3}{2\\sin120^\\circ}=2$ (задача 13).'),
   T('Diametr $BA\'$ oʻtkazing: $\\angle A\'=\\angle A$ (bir yoy) va '
     '$\\angle BCA\'=90^\\circ$, demak $a = BC = 2R\\sin A$.',
     'Проведите диаметр $BA\'$: $\\angle A\'=\\angle A$ (одна дуга) и '
     '$\\angle BCA\'=90^\\circ$, значит $a = BC = 2R\\sin A$.')),

 I('teorema', T('Kosinuslar teoremasi', 'Теорема косинусов'),
   T('$c^2=a^2+b^2-2ab\\cos C$. $C=90^\\circ$ da Pifagor teoremasiga '
     'aylanadi.',
     '$c^2=a^2+b^2-2ab\\cos C$. При $C=90^\\circ$ превращается в теорему '
     'Пифагора.'),
   T('$120^\\circ$ li burchak berilganda $\\cos120^\\circ=-\\tfrac12$, '
     'demak $c^2=a^2+b^2+ab$ — bu koʻrinish variantlarda tez-tez '
     'uchraydi.',
     'При угле $120^\\circ$ имеем $\\cos120^\\circ=-\\tfrac12$, поэтому '
     '$c^2=a^2+b^2+ab$ — эта форма часто встречается в вариантах.'),
   T('$C$ dan $AB$ ga balandlik tushiring va ikkala toʻgʻri burchakli '
     'uchburchakda Pifagorni yozing; proyeksiya $b\\cos C$ ga teng.',
     'Опустите высоту из $C$ на $AB$ и запишите Пифагора в обоих '
     'прямоугольных треугольниках; проекция равна $b\\cos C$.')),

 I('formula', T('Yuz va burchak', 'Площадь и угол'),
   T('$S=\\tfrac12 ab\\sin C$. Diagonallari $d_1,d_2$ va ular orasidagi '
     'burchak $\\varphi$ boʻlgan toʻrtburchak uchun '
     '$S=\\tfrac12 d_1 d_2\\sin\\varphi$.',
     '$S=\\tfrac12 ab\\sin C$. Для четырёхугольника с диагоналями '
     '$d_1,d_2$ и углом $\\varphi$ между ними $S=\\tfrac12 d_1 '
     'd_2\\sin\\varphi$.'),
   T('Perimetri $36$, yuzi $54$ boʻlgan toʻgʻri toʻrtburchakda '
     '$d^2=a^2+b^2=18^2-2\\cdot54=216$, demak '
     '$54=\\tfrac12\\cdot216\\sin\\varphi$ va $\\varphi=30^\\circ$ '
     '(11-masala).',
     'В прямоугольнике с периметром $36$ и площадью $54$ имеем '
     '$d^2=a^2+b^2=18^2-2\\cdot54=216$, значит '
     '$54=\\tfrac12\\cdot216\\sin\\varphi$ и $\\varphi=30^\\circ$ '
     '(задача 11).')),

 I('formula', T('Koordinatalar', 'Координаты'),
   T('Masofa $\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$; oʻrta nuqta '
     '$\\left(\\tfrac{x_1+x_2}{2};\\tfrac{y_1+y_2}{2}\\right)$; '
     'uchburchak yuzi $\\tfrac12|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)|$.',
     'Расстояние $\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$; середина '
     '$\\left(\\tfrac{x_1+x_2}{2};\\tfrac{y_1+y_2}{2}\\right)$; площадь '
     'треугольника $\\tfrac12|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)|$.'),
   T('Kvadrat, toʻgʻri burchak yoki “$OY$ oʻqi” tilga olingan har qanday '
     'masalada koordinata kiritish — eng tez yoʻl: 29-masalada bitta '
     'chizmaning oʻrniga ikkita tenglama yetadi.',
     'В любой задаче, где упомянуты квадрат, прямой угол или «ось $OY$», '
     'ввести координаты — самый быстрый путь: в задаче 29 вместо чертежа '
     'хватает двух уравнений.')),

 I('xossa', T('Vektorlar', 'Векторы'),
   T('$\\vec{OA}+\\vec{OB}$ — $OA$ va $OB$ tomonli parallelogrammning '
     'diagonali. Agar $|\\vec{OA}|=|\\vec{OB}|$ boʻlsa, bu parallelogramm '
     'romb, demak diagonal burchakni teng ikkiga boʻladi.',
     '$\\vec{OA}+\\vec{OB}$ — диагональ параллелограмма со сторонами $OA$ и '
     '$OB$. Если $|\\vec{OA}|=|\\vec{OB}|$, то это ромб, и диагональ делит '
     'угол пополам.'),
   T('$\\vec{OA}+\\vec{OB}=\\vec{OC}$ va uchalasi radius boʻlsa, romb '
     'ikkita teng tomonli uchburchakdan iborat boʻladi, demak '
     '$\\angle AOB=120^\\circ$.',
     'Если $\\vec{OA}+\\vec{OB}=\\vec{OC}$ и все три — радиусы, то ромб '
     'состоит из двух равносторонних треугольников, значит '
     '$\\angle AOB=120^\\circ$.')),
]))


# ================================================================ Masalalar ==
def P(savol, javob, yechim, bolim, manba='', rasm=None):
    """bolim — qaysi nazariya boʻlimi kerak; manba — haqiqiy variant."""
    return dict(savol=savol, javob=javob, yechim=yechim, bolim=bolim,
                manba=manba, rasm=rasm)


DARAJALAR = [
 dict(kod='oson', nom=T('Oson', 'Лёгкие'), hue='easy',
  izoh=T('Bitta formula yoki bitta taʼrif. Har bir oʻquvchi shu yerdan '
         'boshlaydi.',
         'Одна формула или одно определение. Каждый ученик начинает отсюда.'),
  items=[

  P(T('Uchburchak burchaklari $2:3:7$ nisbatda. Eng katta burchakni toping.',
      'Углы треугольника относятся как $2:3:7$. Найдите наибольший угол.'),
    T('$105^\\circ$', '$105^\\circ$'),
    T('Burchaklarni $2x, 3x, 7x$ deb olamiz. Yigʻindisi $180^\\circ$, demak '
      '$12x=180^\\circ$ va $x=15^\\circ$. Burchaklar: $30^\\circ$, '
      '$45^\\circ$, $105^\\circ$ — eng kattasi $7x=105^\\circ$.',
      'Обозначим углы $2x, 3x, 7x$. Их сумма $180^\\circ$, значит '
      '$12x=180^\\circ$ и $x=15^\\circ$. Углы: $30^\\circ$, $45^\\circ$, '
      '$105^\\circ$ — наибольший равен $7x=105^\\circ$.'), 'A'),

  P(T('Teng yonli uchburchakning asosidagi burchagi $50^\\circ$. Uchidagi '
      'burchakni toping.',
      'Угол при основании равнобедренного треугольника равен $50^\\circ$. '
      'Найдите угол при вершине.'),
    T('$80^\\circ$', '$80^\\circ$'),
    T('Asosdagi ikkala burchak teng, demak ular birga $100^\\circ$ beradi. '
      'Uchidagi burchak $180^\\circ-100^\\circ=80^\\circ$.',
      'Оба угла при основании равны, вместе они дают $100^\\circ$. Угол при '
      'вершине равен $180^\\circ-100^\\circ=80^\\circ$.'), 'A'),

  P(T('Toʻgʻri burchakli uchburchakning katetlari $6$ va $8$. Gipotenuzaga '
      'tushirilgan balandlikni toping.',
      'Катеты прямоугольного треугольника равны $6$ и $8$. Найдите высоту, '
      'опущенную на гипотенузу.'),
    T('$4{,}8$', '$4{,}8$'),
    T('Gipotenuza $c=\\sqrt{36+64}=10$. Yuzni ikki xil yozamiz: '
      '$\\tfrac12\\cdot6\\cdot8=\\tfrac12\\cdot10\\cdot h$, demak '
      '$h=\\dfrac{48}{10}=4{,}8$.',
      'Гипотенуза $c=\\sqrt{36+64}=10$. Запишем площадь двумя способами: '
      '$\\tfrac12\\cdot6\\cdot8=\\tfrac12\\cdot10\\cdot h$, значит '
      '$h=\\dfrac{48}{10}=4{,}8$.'), 'C'),

  P(T('Aylanaga ichki chizilgan burchak $35^\\circ$. Shu yoyga tayangan '
      'markaziy burchakni toping.',
      'Вписанный угол равен $35^\\circ$. Найдите центральный угол, '
      'опирающийся на ту же дугу.'),
    T('$70^\\circ$', '$70^\\circ$'),
    T('Ichki chizilgan burchak markaziy burchakning yarmiga teng, demak '
      'markaziy burchak $2\\cdot35^\\circ=70^\\circ$.',
      'Вписанный угол равен половине центрального, значит центральный равен '
      '$2\\cdot35^\\circ=70^\\circ$.'), 'D'),

  P(T('Trapetsiya asoslari $8$ va $14$. Oʻrta chizigʻini toping.',
      'Основания трапеции равны $8$ и $14$. Найдите среднюю линию.'),
    T('$11$', '$11$'),
    T('Oʻrta chiziq asoslarning oʻrta arifmetigiga teng: '
      '$m=\\dfrac{8+14}{2}=11$.',
      'Средняя линия равна среднему арифметическому оснований: '
      '$m=\\dfrac{8+14}{2}=11$.'), 'F'),

  P(T('Tomonlari $13$, $14$, $15$ boʻlgan uchburchakning yuzini toping.',
      'Найдите площадь треугольника со сторонами $13$, $14$, $15$.'),
    T('$84$', '$84$'),
    T('Geron formulasi: $p=\\dfrac{13+14+15}{2}=21$, demak '
      '$S=\\sqrt{21\\cdot8\\cdot7\\cdot6}=\\sqrt{7056}=84$. '
      '(Bu uchburchakni eslab qolgan maʼqul: $S=84$, $r=4$, '
      '$R=\\tfrac{65}{8}$.)',
      'Формула Герона: $p=\\dfrac{13+14+15}{2}=21$, значит '
      '$S=\\sqrt{21\\cdot8\\cdot7\\cdot6}=\\sqrt{7056}=84$. (Этот '
      'треугольник стоит запомнить: $S=84$, $r=4$, $R=\\tfrac{65}{8}$.)'),
    'E'),

  P(T('Toʻgʻri burchakli uchburchakning gipotenuzasi $10$. Gipotenuzaga '
      'tushirilgan medianani toping.',
      'Гипотенуза прямоугольного треугольника равна $10$. Найдите медиану, '
      'проведённую к гипотенузе.'),
    T('$5$', '$5$'),
    T('Gipotenuzaning oʻrtasi — tashqi chizilgan aylananing markazi, demak '
      'undan uchala uchgacha masofa bir xil va $R=\\dfrac{c}{2}=5$.',
      'Середина гипотенузы — центр описанной окружности, поэтому расстояния '
      'до всех вершин одинаковы и равны $R=\\dfrac{c}{2}=5$.'), 'C'),

  P(T('Parallelogrammning bir burchagi $110^\\circ$. Qolgan burchaklarini '
      'toping.',
      'Один из углов параллелограмма равен $110^\\circ$. Найдите остальные '
      'углы.'),
    T('$70^\\circ$, $110^\\circ$, $70^\\circ$', '$70^\\circ$, $110^\\circ$, $70^\\circ$'),
    T('Qarama-qarshi burchaklar teng, qoʻshni burchaklar yigʻindisi '
      '$180^\\circ$ (bir tomonli burchaklar). Demak burchaklar '
      '$110^\\circ$, $70^\\circ$, $110^\\circ$, $70^\\circ$.',
      'Противоположные углы равны, соседние в сумме дают $180^\\circ$ '
      '(односторонние углы). Значит углы равны $110^\\circ$, $70^\\circ$, '
      '$110^\\circ$, $70^\\circ$.'), 'F'),
 ]),

 dict(kod='orta', nom=T('Oʻrtacha', 'Средние'), hue='med',
  izoh=T('Ikkita qadam yoki bitta hiyla. Variantdagi odatiy geometriya '
         'savoli shu darajada — sakkiztasi ham haqiqiy variantlardan.',
         'Два шага или один приём. Типичная геометрическая задача варианта — '
         'этого уровня; все восемь взяты из настоящих вариантов.'),
  items=[

  P(T('Uchburchakning ikkita tomoni $15$ va $13$ ga teng, uchinchi tomoniga '
      'tushirilgan mediana esa $7$ ga teng. Uchburchak yuzini toping.',
      'Две стороны треугольника равны $15$ и $13$, а медиана к третьей '
      'стороне равна $7$. Найдите площадь треугольника.'),
    T('$84$', '$84$'),
    T('<b>Medianani ikki baravar uzaytiramiz.</b> $BC$ ning oʻrtasi $M$ '
      'boʻlsin va $AM$ ni $AM=MD$ boʻladigan qilib davom ettiramiz. U holda '
      '$ABDC$ — parallelogramm, demak $BD=AC=13$ va $AD=2\\cdot7=14$.<br>'
      'Hosil boʻlgan $ABD$ uchburchakning tomonlari $15$, $13$, $14$, va '
      'uning yuzi asl uchburchak yuziga <b>teng</b> (mediana yuzni teng '
      'ikkiga boʻladi, parallelogrammning ikkala yarmi ham teng).<br>'
      'Geron: $p=21$, $S=\\sqrt{21\\cdot6\\cdot8\\cdot7}=84$.<br>'
      'Tekshirish: mediana formulasi $m^2=\\dfrac{2\\cdot15^2+2\\cdot13^2-a^2}{4}$ '
      'dan $a^2=592$, va Geron shu $a$ bilan ham $84$ beradi.',
      '<b>Удваиваем медиану.</b> Пусть $M$ — середина $BC$; продолжим $AM$ '
      'так, что $AM=MD$. Тогда $ABDC$ — параллелограмм, значит $BD=AC=13$ и '
      '$AD=2\\cdot7=14$.<br>'
      'У полученного треугольника $ABD$ стороны $15$, $13$, $14$, а его '
      'площадь <b>равна</b> площади исходного (медиана делит площадь '
      'пополам, обе половины параллелограмма равны).<br>'
      'Герон: $p=21$, $S=\\sqrt{21\\cdot6\\cdot8\\cdot7}=84$.<br>'
      'Проверка: из формулы медианы '
      '$m^2=\\dfrac{2\\cdot15^2+2\\cdot13^2-a^2}{4}$ получаем $a^2=592$, и '
      'Герон с этим $a$ тоже даёт $84$.'),
    'B', '9-sinf · 2024 №17'),

  P(T('Gipotenuzasi $8$ ga, gipotenuzaga tushirilgan balandligi '
      '$1\\tfrac1{16}$ ga teng boʻlgan toʻgʻri burchakli uchburchakning '
      'perimetrini toping.',
      'Найдите периметр прямоугольного треугольника, у которого гипотенуза '
      'равна $8$, а высота к ней — $1\\tfrac1{16}$.'),
    T('$17$', '$17$'),
    T('Ikkita tenglama yozamiz: $a^2+b^2=c^2=64$ va $ab=ch=8\\cdot'
      '\\tfrac{17}{16}=\\tfrac{17}{2}$.<br>'
      'U holda $(a+b)^2=a^2+b^2+2ab=64+17=81$, demak $a+b=9$.<br>'
      'Perimetr $=a+b+c=9+8=17$. Katetlarning oʻzini topish shart emas.',
      'Запишем два уравнения: $a^2+b^2=c^2=64$ и $ab=ch=8\\cdot'
      '\\tfrac{17}{16}=\\tfrac{17}{2}$.<br>'
      'Тогда $(a+b)^2=a^2+b^2+2ab=64+17=81$, значит $a+b=9$.<br>'
      'Периметр $=a+b+c=9+8=17$. Сами катеты находить не нужно.'),
    'C', '9-sinf · 2024 №19'),

  P(T('Perimetri $36$ ga va yuzi $54$ ga teng boʻlgan toʻgʻri '
      'toʻrtburchakning diagonallari orasidagi oʻtkir burchakni toping.',
      'Найдите острый угол между диагоналями прямоугольника с периметром '
      '$36$ и площадью $54$.'),
    T('$30^\\circ$', '$30^\\circ$'),
    T('$a+b=18$ va $ab=54$. Diagonal kvadrati: '
      '$d^2=a^2+b^2=(a+b)^2-2ab=324-108=216$.<br>'
      'Diagonallari $d_1=d_2=d$ va ular orasidagi burchak $\\varphi$ '
      'boʻlgan toʻrtburchak yuzi $S=\\tfrac12 d^2\\sin\\varphi$, demak '
      '$54=\\tfrac12\\cdot216\\cdot\\sin\\varphi$ va '
      '$\\sin\\varphi=\\tfrac12$.<br>'
      'Oʻtkir burchak: $\\varphi=30^\\circ$.',
      '$a+b=18$ и $ab=54$. Квадрат диагонали: '
      '$d^2=a^2+b^2=(a+b)^2-2ab=324-108=216$.<br>'
      'Площадь четырёхугольника с диагоналями $d_1=d_2=d$ и углом '
      '$\\varphi$ между ними равна $S=\\tfrac12 d^2\\sin\\varphi$, значит '
      '$54=\\tfrac12\\cdot216\\cdot\\sin\\varphi$ и '
      '$\\sin\\varphi=\\tfrac12$.<br>'
      'Острый угол: $\\varphi=30^\\circ$.'),
    'G', '9-sinf · 2024 №23'),

  P(T('Asoslari $12$ va $8$ ga teng boʻlgan teng yonli trapetsiyaning '
      'diagonallari oʻzaro perpendikulyar. Trapetsiya yuzini toping.',
      'Диагонали равнобокой трапеции с основаниями $12$ и $8$ '
      'перпендикулярны. Найдите площадь трапеции.'),
    T('$100$', '$100$'),
    T('Diagonallari perpendikulyar teng yonli trapetsiyada balandlik oʻrta '
      'chiziqqa teng.<br>'
      'Isboti: $C$ dan $AB$ ga parallel chiziq oʻtkazib, diagonallarni bitta '
      'nuqtaga koʻchirsak, katetlari $\\tfrac{a+b}{2}$ boʻlgan teng yonli '
      'toʻgʻri burchakli uchburchak hosil boʻladi, uning balandligi ham '
      '$\\tfrac{a+b}{2}$.<br>'
      'Demak $h=m=\\dfrac{12+8}{2}=10$ va $S=m\\cdot h=10\\cdot10=100$.',
      'У равнобокой трапеции с перпендикулярными диагоналями высота равна '
      'средней линии.<br>'
      'Доказательство: проведя через $C$ прямую, параллельную диагонали, '
      'получаем равнобедренный прямоугольный треугольник с катетами '
      '$\\tfrac{a+b}{2}$, его высота тоже равна $\\tfrac{a+b}{2}$.<br>'
      'Значит $h=m=\\dfrac{12+8}{2}=10$ и $S=m\\cdot h=10\\cdot10=100$.'),
    'F', '9-sinf · 2025/26-A №9'),

  P(T('Burchaklaridan biri $120^\\circ$, yuzi esa $\\sqrt3$ ga teng boʻlgan '
      'teng yonli uchburchakka tashqi chizilgan aylana radiusini toping.',
      'Найдите радиус окружности, описанной около равнобедренного '
      'треугольника с углом $120^\\circ$ и площадью $\\sqrt3$.'),
    T('$2$', '$2$'),
    T('Yon tomonlar $a$ boʻlsin. Ular orasidagi burchak $120^\\circ$, demak '
      '$S=\\tfrac12a^2\\sin120^\\circ=\\tfrac{\\sqrt3}{4}a^2=\\sqrt3$, '
      'bundan $a^2=4$, $a=2$.<br>'
      'Asos: balandlik uchburchakni ikkita $30$–$60$–$90$ uchburchakka '
      'ajratadi, shuning uchun asos $a\\sqrt3=2\\sqrt3$.<br>'
      'Sinuslar teoremasi: '
      '$R=\\dfrac{2\\sqrt3}{2\\sin120^\\circ}=\\dfrac{2\\sqrt3}{\\sqrt3}=2$.',
      'Пусть боковые стороны равны $a$. Угол между ними $120^\\circ$, значит '
      '$S=\\tfrac12a^2\\sin120^\\circ=\\tfrac{\\sqrt3}{4}a^2=\\sqrt3$, '
      'откуда $a^2=4$, $a=2$.<br>'
      'Основание: высота делит треугольник на два треугольника '
      '$30$–$60$–$90$, поэтому основание равно $a\\sqrt3=2\\sqrt3$.<br>'
      'Теорема синусов: '
      '$R=\\dfrac{2\\sqrt3}{2\\sin120^\\circ}=\\dfrac{2\\sqrt3}{\\sqrt3}=2$.'),
    'G', '10-sinf · 2024 №16'),

  P(T('$ABC$ uchburchakda $\\angle ACB=90^\\circ$, $AL$ — bissektrisa, '
      '$CM$ — mediana ($L\\in BC$, $M\\in AB$). Agar $AL\\perp CM$ boʻlsa, '
      '$\\angle ABC$ necha gradusga teng?',
      'В треугольнике $ABC$ угол $ACB$ прямой, $AL$ — биссектриса, $CM$ — '
      'медиана ($L\\in BC$, $M\\in AB$). Если $AL\\perp CM$, найдите '
      '$\\angle ABC$.'),
    T('$30^\\circ$', '$30^\\circ$'),
    T('$\\angle A=2\\alpha$ deb belgilaymiz.<br>'
      '$CM$ — gipotenuzaga tushirilgan mediana, demak $MA=MC$ va $AMC$ '
      'uchburchak teng yonli: $\\angle MCA=\\angle MAC=2\\alpha$.<br>'
      '$AL$ va $CM$ ning kesishish nuqtasi $P$ boʻlsin. $APC$ uchburchakda '
      '$\\angle PAC=\\alpha$ (bissektrisaning yarmi), $\\angle ACP=2\\alpha$ '
      'va $\\angle APC=90^\\circ$.<br>'
      'Demak $\\alpha+2\\alpha=90^\\circ$, $\\alpha=30^\\circ$ va '
      '$\\angle A=60^\\circ$.<br>'
      'Javob: $\\angle ABC=90^\\circ-60^\\circ=30^\\circ$.',
      'Обозначим $\\angle A=2\\alpha$.<br>'
      '$CM$ — медиана к гипотенузе, значит $MA=MC$ и треугольник $AMC$ '
      'равнобедренный: $\\angle MCA=\\angle MAC=2\\alpha$.<br>'
      'Пусть $P$ — точка пересечения $AL$ и $CM$. В треугольнике $APC$: '
      '$\\angle PAC=\\alpha$ (половина биссектрисы), $\\angle ACP=2\\alpha$ '
      'и $\\angle APC=90^\\circ$.<br>'
      'Значит $\\alpha+2\\alpha=90^\\circ$, $\\alpha=30^\\circ$ и '
      '$\\angle A=60^\\circ$.<br>'
      'Ответ: $\\angle ABC=90^\\circ-60^\\circ=30^\\circ$.'),
    'C', '9-sinf · 2025/26-B №14'),

  P(T('Toʻgʻri burchakli uchburchakning toʻgʻri burchagidan chiquvchi '
      'balandligi $6$ ga, katetlarning gipotenuzadagi proyeksiyalari farqi '
      'esa $5$ ga teng. Uchburchak yuzini toping.',
      'Высота прямоугольного треугольника из прямого угла равна $6$, а '
      'разность проекций катетов на гипотенузу равна $5$. Найдите площадь '
      'треугольника.'),
    T('$39$', '$39$'),
    T('Proyeksiyalar $p$ va $q$ boʻlsin. $h^2=pq$ dan $pq=36$, shartdan '
      '$p-q=5$.<br>'
      'U holda $p$ va $q$ — $t^2-5t-36=0$ tenglamaning ildizlari boʻladi '
      '(agar $p>q$): $t=9$ va $t=-4$, demak $p=9$, $q=4$.<br>'
      'Gipotenuza $c=p+q=13$, yuzi $S=\\tfrac12 ch=\\tfrac12\\cdot13\\cdot6=39$.',
      'Пусть проекции равны $p$ и $q$. Из $h^2=pq$ получаем $pq=36$, по '
      'условию $p-q=5$.<br>'
      'Тогда $p$ и $q$ — корни уравнения $t^2-5t-36=0$ (при $p>q$): $t=9$ и '
      '$t=-4$, значит $p=9$, $q=4$.<br>'
      'Гипотенуза $c=p+q=13$, площадь $S=\\tfrac12 ch='
      '\\tfrac12\\cdot13\\cdot6=39$.'),
    'C', '10-sinf · 2024 №30'),

  P(T('$ABC$ uchburchakda $\\angle A:\\angle B:\\angle C = 2:3:7$ va $BD$ — '
      'mediana ($D\\in AC$). $\\angle ABD$ ni toping.',
      'В треугольнике $ABC$ углы относятся как $\\angle A:\\angle B:\\angle '
      'C = 2:3:7$, а $BD$ — медиана ($D\\in AC$). Найдите $\\angle ABD$.'),
    T('$15^\\circ$', '$15^\\circ$'),
    T('Burchaklar: $\\angle A=30^\\circ$, $\\angle B=45^\\circ$, '
      '$\\angle C=105^\\circ$.<br>'
      '$B$ dan $AC$ ga $BH$ balandlik tushiramiz. $\\angle C=105^\\circ$ '
      'oʻtmas, shuning uchun $H$ nuqta $AC$ ning tashqarisida emas, balki '
      '$A$ tomonda yotadi va $ABH$ toʻgʻri burchakli uchburchakda '
      '$\\angle A=30^\\circ$, demak $BH=\\tfrac12 AB$ va '
      '$AH=\\tfrac{\\sqrt3}{2}AB$.<br>'
      'Sinuslar teoremasi bilan tomonlarni yozamiz: $AC=\\sin45^\\circ$, '
      '$AB=\\sin105^\\circ$ (bu yerda $2R=1$). U holda '
      '$AD=\\tfrac12\\sin45^\\circ$ va bevosita hisoblash '
      '$\\angle ABD=15^\\circ$ ni beradi.<br>'
      'Qisqaroq yoʻl: $\\angle ABD=\\varphi$ desak, $ABD$ va $DBC$ '
      'uchburchaklarda sinuslar teoremasi va $AD=DC$ dan '
      '$\\dfrac{\\sin\\varphi}{\\sin 30^\\circ} = '
      '\\dfrac{\\sin(45^\\circ-\\varphi)}{\\sin105^\\circ}$, bu tenglama '
      '$\\varphi=15^\\circ$ da bajariladi.',
      'Углы: $\\angle A=30^\\circ$, $\\angle B=45^\\circ$, '
      '$\\angle C=105^\\circ$.<br>'
      'Опустим из $B$ высоту $BH$ на $AC$. Так как $\\angle C=105^\\circ$ '
      'тупой, точка $H$ лежит со стороны $A$, и в прямоугольном '
      'треугольнике $ABH$ угол $A$ равен $30^\\circ$, значит '
      '$BH=\\tfrac12 AB$ и $AH=\\tfrac{\\sqrt3}{2}AB$.<br>'
      'По теореме синусов выразим стороны: $AC=\\sin45^\\circ$, '
      '$AB=\\sin105^\\circ$ (здесь $2R=1$). Тогда '
      '$AD=\\tfrac12\\sin45^\\circ$, и прямой подсчёт даёт '
      '$\\angle ABD=15^\\circ$.<br>'
      'Короче: если $\\angle ABD=\\varphi$, то из теоремы синусов в '
      'треугольниках $ABD$ и $DBC$ и равенства $AD=DC$ следует '
      '$\\dfrac{\\sin\\varphi}{\\sin 30^\\circ} = '
      '\\dfrac{\\sin(45^\\circ-\\varphi)}{\\sin105^\\circ}$, что выполняется '
      'при $\\varphi=15^\\circ$.'),
    'G', '9-sinf · 2025/26-B №16'),
 ]),
]

DARAJALAR += [
 dict(kod='qiyin', nom=T('Qiyin', 'Трудные'), hue='hard',
  izoh=T('Toʻgʻri qoʻshimcha yasashni yoki toʻgʻri munosabatni <b>tanlash</b> '
         'kerak. Bu masalalarning hammasi haqiqiy variantlardan.',
         'Нужно <b>выбрать</b> верное дополнительное построение или верное '
         'соотношение. Все эти задачи — из настоящих вариантов.'),
  items=[

  P(T('Radiusi $16$ ga teng boʻlgan aylanaga ichki chizilgan qavariq '
      'toʻrtburchakning uchta tomoni $8$ ga teng. Uning toʻrtinchi tomonini '
      'toping.',
      'Три стороны выпуклого четырёхугольника, вписанного в окружность '
      'радиуса $16$, равны $8$. Найдите его четвёртую сторону.'),
    T('$22$', '$22$'),
    T('Vatar va markaziy burchak bogʻlanishi: uzunligi $\\ell$ boʻlgan vatar '
      '$\\ell=2R\\sin\\tfrac{\\theta}{2}$, bu yerda $\\theta$ — mos '
      'markaziy burchak.<br>'
      '$8=32\\sin\\tfrac{\\theta}{2}$ dan $\\sin\\tfrac{\\theta}{2}='
      '\\tfrac14$. Uchta teng vatarning markaziy burchaklari yigʻindisi '
      '$3\\theta$, toʻrtinchisiniki $360^\\circ-3\\theta$.<br>'
      'Demak toʻrtinchi tomon '
      '$=2R\\sin\\dfrac{360^\\circ-3\\theta}{2}=32\\sin(180^\\circ-'
      '\\tfrac{3\\theta}{2})=32\\sin\\tfrac{3\\theta}{2}$.<br>'
      '$\\alpha=\\tfrac{\\theta}{2}$ deb belgilaymiz, $\\sin\\alpha='
      '\\tfrac14$. Uch karrali burchak formulasi: '
      '$\\sin3\\alpha=3\\sin\\alpha-4\\sin^3\\alpha='
      '\\tfrac34-\\tfrac{4}{64}=\\tfrac{11}{16}$.<br>'
      'Javob: $32\\cdot\\tfrac{11}{16}=22$.',
      'Связь хорды и центрального угла: хорда длины $\\ell$ равна '
      '$\\ell=2R\\sin\\tfrac{\\theta}{2}$, где $\\theta$ — соответствующий '
      'центральный угол.<br>'
      'Из $8=32\\sin\\tfrac{\\theta}{2}$ получаем '
      '$\\sin\\tfrac{\\theta}{2}=\\tfrac14$. Сумма центральных углов трёх '
      'равных хорд равна $3\\theta$, у четвёртой — $360^\\circ-3\\theta$.<br>'
      'Значит четвёртая сторона равна '
      '$2R\\sin\\dfrac{360^\\circ-3\\theta}{2}=32\\sin\\tfrac{3\\theta}{2}$.'
      '<br>Положим $\\alpha=\\tfrac{\\theta}{2}$, тогда $\\sin\\alpha='
      '\\tfrac14$ и $\\sin3\\alpha=3\\sin\\alpha-4\\sin^3\\alpha='
      '\\tfrac34-\\tfrac{1}{16}=\\tfrac{11}{16}$.<br>'
      'Ответ: $32\\cdot\\tfrac{11}{16}=22$.'),
    'D', '11-sinf · 2024 №25'),

  P(T('$ABCD$ toʻrtburchakning diagonallari uni toʻrtta uchburchakka '
      'ajratadi. Qarama-qarshi ikkita uchburchakning yuzlari $16$ va $24$, '
      'uchinchisiniki $12$. Toʻrtinchisining yuzini toping.',
      'Диагонали четырёхугольника $ABCD$ разбивают его на четыре '
      'треугольника. Площади двух противоположных равны $16$ и $24$, '
      'площадь третьего равна $12$. Найдите площадь четвёртого.'),
    T('$32$', '$32$'),
    T('Diagonallar $O$ da kesishsin. $AOB$ va $BOC$ uchburchaklarning $B$ '
      'dan tushirilgan balandligi umumiy, demak '
      '$\\dfrac{S_{AOB}}{S_{BOC}}=\\dfrac{AO}{OC}$.<br>'
      'Xuddi shunday $\\dfrac{S_{AOD}}{S_{DOC}}=\\dfrac{AO}{OC}$.<br>'
      'Ikkala nisbat teng boʻlgani uchun '
      '$S_{AOB}\\cdot S_{DOC}=S_{BOC}\\cdot S_{AOD}$ — yaʼni '
      '<b>qarama-qarshi uchburchaklar yuzlarining koʻpaytmalari teng</b>.<br>'
      'Demak $16\\cdot24=12\\cdot x$ va $x=\\dfrac{384}{12}=32$.',
      'Пусть диагонали пересекаются в $O$. У треугольников $AOB$ и $BOC$ '
      'общая высота из $B$, поэтому '
      '$\\dfrac{S_{AOB}}{S_{BOC}}=\\dfrac{AO}{OC}$.<br>'
      'Аналогично $\\dfrac{S_{AOD}}{S_{DOC}}=\\dfrac{AO}{OC}$.<br>'
      'Так как отношения равны, $S_{AOB}\\cdot S_{DOC}=S_{BOC}\\cdot '
      'S_{AOD}$ — <b>произведения площадей противоположных треугольников '
      'равны</b>.<br>'
      'Значит $16\\cdot24=12\\cdot x$ и $x=\\dfrac{384}{12}=32$.'),
    'E', '10-sinf · 2025/26-A №17'),

  P(T('$ABCD$ qavariq toʻrtburchakda $\\angle ABC=\\angle ADC=90^\\circ$. '
      '$E$ va $F$ nuqtalar mos ravishda $AC$ va $BD$ diagonallarining '
      'oʻrtalari. $\\angle EFB$ burchakni toping.',
      'В выпуклом четырёхугольнике $ABCD$ углы $ABC$ и $ADC$ прямые. Точки '
      '$E$ и $F$ — середины диагоналей $AC$ и $BD$. Найдите угол $EFB$.'),
    T('$90^\\circ$', '$90^\\circ$'),
    T('$\\angle ABC=90^\\circ$ boʻlgani uchun $B$ nuqta $AC$ diametrli '
      'aylanada yotadi; xuddi shunday $\\angle ADC=90^\\circ$ boʻlgani '
      'uchun $D$ ham shu aylanada yotadi.<br>'
      'Bu aylananing markazi — $AC$ ning oʻrtasi, yaʼni $E$. Demak '
      '$EB=ED=\\tfrac12 AC$ (ikkalasi ham radius).<br>'
      '$EBD$ uchburchak teng yonli, $F$ esa uning asosi $BD$ ning oʻrtasi. '
      'Teng yonli uchburchakda asosga tushirilgan mediana ayni paytda '
      'balandlik ham, demak $EF\\perp BD$.<br>'
      'Javob: $\\angle EFB=90^\\circ$.',
      'Так как $\\angle ABC=90^\\circ$, точка $B$ лежит на окружности с '
      'диаметром $AC$; так как $\\angle ADC=90^\\circ$, на ней же лежит и '
      '$D$.<br>'
      'Центр этой окружности — середина $AC$, то есть $E$. Значит '
      '$EB=ED=\\tfrac12 AC$ (оба — радиусы).<br>'
      'Треугольник $EBD$ равнобедренный, а $F$ — середина основания $BD$. В '
      'равнобедренном треугольнике медиана к основанию является и высотой, '
      'значит $EF\\perp BD$.<br>'
      'Ответ: $\\angle EFB=90^\\circ$.'),
    'D', '9-sinf · 2024 №28'),

  P(T('$60^\\circ$ li burchakka bir-biriga tashqi urinuvchi ikkita aylana '
      'ichki chizilgan. Kichigining radiusi $12$ ga teng boʻlsa, '
      'kattasining radiusini toping.',
      'В угол $60^\\circ$ вписаны две касающиеся внешним образом '
      'окружности. Радиус меньшей равен $12$. Найдите радиус большей.'),
    T('$36$', '$36$'),
    T('Ikkala aylananing markazi burchak bissektrisasida yotadi. Radiusi '
      '$\\rho$ boʻlgan aylana markazidan uchgacha boʻlgan masofa '
      '$\\dfrac{\\rho}{\\sin30^\\circ}=2\\rho$.<br>'
      'Demak uchdan markazlargacha masofalar $2r=24$ va $2R$.<br>'
      'Aylanalar tashqi urinadi, demak markazlar orasidagi masofa $R+r$:<br>'
      '$2R-2r=R+r\;\\Rightarrow\;R=3r=36$.',
      'Центры обеих окружностей лежат на биссектрисе угла. Расстояние от '
      'вершины до центра окружности радиуса $\\rho$ равно '
      '$\\dfrac{\\rho}{\\sin30^\\circ}=2\\rho$.<br>'
      'Значит расстояния от вершины до центров равны $2r=24$ и $2R$.<br>'
      'Окружности касаются внешне, поэтому расстояние между центрами равно '
      '$R+r$:<br>$2R-2r=R+r\;\\Rightarrow\;R=3r=36$.'),
    'D', '9-sinf · 2025/26-A №11'),

  P(T('Teng yonli $ABC$ uchburchakning ($AB=AC$) asosi $CB$ da $E$ nuqta, '
      'yon tomoni $AB$ da esa $M$ nuqta shunday tanlanganki, '
      '$\\angle B=\\angle C=\\angle AEM$. Agar $BE=1$, $CE=2$ va $AC=4$ '
      'boʻlsa, $MA$ kesmaning uzunligini toping.',
      'На основании $CB$ равнобедренного треугольника $ABC$ ($AB=AC$) взята '
      'точка $E$, а на боковой стороне $AB$ — точка $M$, причём '
      '$\\angle B=\\angle C=\\angle AEM$. Известно, что $BE=1$, $CE=2$ и '
      '$AC=4$. Найдите $MA$.'),
    T('$MA=3{,}5$', '$MA=3{,}5$'),
    T('$\\angle AEB$ — yoyilgan burchakning bir qismi: '
      '$\\angle AEC=180^\\circ-\\angle AEB$.<br>'
      'Ikkinchi tomondan $\\angle AEB=\\angle AEM+\\angle MEB=\\angle B+'
      '\\angle MEB$, demak '
      '$\\angle AEC=180^\\circ-\\angle B-\\angle MEB$.<br>'
      '$MEB$ uchburchakda esa $\\angle EMB=180^\\circ-\\angle B-'
      '\\angle MEB$. Demak $\\angle AEC=\\angle EMB$.<br>'
      'Bundan tashqari $\\angle ACE=\\angle EBM$ (asosdagi burchaklar). '
      'Demak $\\triangle AEC\\sim\\triangle EMB$ (mos uchlar '
      '$A\\!\\to\\!E$, $E\\!\\to\\!M$, $C\\!\\to\\!B$).<br>'
      'Nisbatdan: $\\dfrac{AC}{EB}=\\dfrac{CE}{BM}$, yaʼni '
      '$\\dfrac{4}{1}=\\dfrac{2}{BM}$ va $BM=\\dfrac12$.<br>'
      '$AB=AC=4$, demak $MA=4-\\tfrac12=3{,}5$.',
      'Угол $AEB$ — часть развёрнутого: '
      '$\\angle AEC=180^\\circ-\\angle AEB$.<br>'
      'С другой стороны, $\\angle AEB=\\angle AEM+\\angle MEB=\\angle B+'
      '\\angle MEB$, поэтому $\\angle AEC=180^\\circ-\\angle B-'
      '\\angle MEB$.<br>'
      'А в треугольнике $MEB$: $\\angle EMB=180^\\circ-\\angle B-'
      '\\angle MEB$. Значит $\\angle AEC=\\angle EMB$.<br>'
      'Кроме того, $\\angle ACE=\\angle EBM$ (углы при основании). Значит '
      '$\\triangle AEC\\sim\\triangle EMB$ (соответствие вершин '
      '$A\\!\\to\\!E$, $E\\!\\to\\!M$, $C\\!\\to\\!B$).<br>'
      'Из отношения: $\\dfrac{AC}{EB}=\\dfrac{CE}{BM}$, то есть '
      '$\\dfrac{4}{1}=\\dfrac{2}{BM}$ и $BM=\\dfrac12$.<br>'
      '$AB=AC=4$, поэтому $MA=4-\\tfrac12=3{,}5$.'),
    'E', '10-sinf · 2025/26-A №27'),

  P(T('$ABCD$ toʻgʻri toʻrtburchakda $\\angle BAD$ ning bissektrisasi $BC$ '
      'tomonni $P$ nuqtada kesadi. Agar $AP:PD=4:3$ boʻlsa, $PD:PC$ '
      'nisbatni toping.',
      'В прямоугольнике $ABCD$ биссектриса угла $BAD$ пересекает сторону '
      '$BC$ в точке $P$. Известно, что $AP:PD=4:3$. Найдите $PD:PC$.'),
    T('$3:1$', '$3:1$'),
    T('$\\angle BAD=90^\\circ$, demak bissektrisa $45^\\circ$ li burchak '
      'hosil qiladi va $ABP$ uchburchak teng yonli toʻgʻri burchakli: '
      '$BP=AB$.<br>'
      '$AB=a$, $BC=b$ deb belgilaymiz. U holda $BP=a$, $PC=b-a$, '
      '$AP=a\\sqrt2$ va $PD=\\sqrt{PC^2+CD^2}=\\sqrt{(b-a)^2+a^2}$.<br>'
      'Shartdan $\\dfrac{AP^2}{PD^2}=\\dfrac{16}{9}$:<br>'
      '$9\\cdot2a^2=16\\big((b-a)^2+a^2\\big)\;\\Rightarrow\;'
      '2a^2=16(b-a)^2\;\\Rightarrow\;(b-a)^2=\\dfrac{a^2}{8}$.<br>'
      'Demak $PC=b-a=\\dfrac{a}{2\\sqrt2}$ va '
      '$PD=\\sqrt{\\dfrac{a^2}{8}+a^2}=\\dfrac{3a}{2\\sqrt2}$.<br>'
      'Javob: $PD:PC=3:1$.',
      '$\\angle BAD=90^\\circ$, поэтому биссектриса даёт угол $45^\\circ$ и '
      'треугольник $ABP$ — прямоугольный равнобедренный: $BP=AB$.<br>'
      'Обозначим $AB=a$, $BC=b$. Тогда $BP=a$, $PC=b-a$, $AP=a\\sqrt2$ и '
      '$PD=\\sqrt{PC^2+CD^2}=\\sqrt{(b-a)^2+a^2}$.<br>'
      'Из условия $\\dfrac{AP^2}{PD^2}=\\dfrac{16}{9}$:<br>'
      '$9\\cdot2a^2=16\\big((b-a)^2+a^2\\big)\;\\Rightarrow\;'
      '2a^2=16(b-a)^2\;\\Rightarrow\;(b-a)^2=\\dfrac{a^2}{8}$.<br>'
      'Значит $PC=b-a=\\dfrac{a}{2\\sqrt2}$ и '
      '$PD=\\sqrt{\\dfrac{a^2}{8}+a^2}=\\dfrac{3a}{2\\sqrt2}$.<br>'
      'Ответ: $PD:PC=3:1$.'),
    'F', '11-sinf · 2025/26-A №19'),

  P(T('$ABC$ uchburchak ichidagi biror nuqtadan tomonlarga parallel '
      'toʻgʻri chiziqlar oʻtkazilganda yuzalari $2$, $6$ va $18$ ga teng '
      'boʻlgan uchta uchburchak hosil boʻladi. $ABC$ uchburchakning yuzini '
      'toping.',
      'Через точку внутри треугольника $ABC$ проведены прямые, параллельные '
      'сторонам; образовались три треугольника с площадями $2$, $6$ и $18$. '
      'Найдите площадь треугольника $ABC$.'),
    T('$38+16\\sqrt3$', '$38+16\\sqrt3$'),
    T('Uchala kichik uchburchak $ABC$ ga <b>oʻxshash</b> (tomonlari asl '
      'tomonlarga parallel).<br>'
      'Oʻxshashlik koeffitsiyentlari $k_1,k_2,k_3$ boʻlsin. Kichik '
      'uchburchaklarning $BC$ ga parallel tomonlari birgalikda aynan $BC$ '
      'ni beradi (parallelogrammlarning qarama-qarshi tomonlari tufayli), '
      'demak $k_1+k_2+k_3=1$.<br>'
      'Yuzalar $k^2$ marta farq qilgani uchun '
      '$k_i=\\sqrt{\\dfrac{S_i}{S}}$, va shuning uchun '
      '$\\sqrt{S}=\\sqrt{S_1}+\\sqrt{S_2}+\\sqrt{S_3}$.<br>'
      '$\\sqrt{S}=\\sqrt2+\\sqrt6+\\sqrt{18}=\\sqrt2+\\sqrt6+3\\sqrt2='
      '4\\sqrt2+\\sqrt6$.<br>'
      '$S=(4\\sqrt2+\\sqrt6)^2=32+2\\cdot4\\sqrt{12}+6=38+16\\sqrt3$.',
      'Все три маленьких треугольника <b>подобны</b> $ABC$ (их стороны '
      'параллельны исходным).<br>'
      'Пусть коэффициенты подобия равны $k_1,k_2,k_3$. Стороны маленьких '
      'треугольников, параллельные $BC$, вместе составляют ровно $BC$ '
      '(из-за противоположных сторон параллелограммов), поэтому '
      '$k_1+k_2+k_3=1$.<br>'
      'Так как площади отличаются в $k^2$ раз, '
      '$k_i=\\sqrt{\\dfrac{S_i}{S}}$, и значит '
      '$\\sqrt{S}=\\sqrt{S_1}+\\sqrt{S_2}+\\sqrt{S_3}$.<br>'
      '$\\sqrt{S}=\\sqrt2+\\sqrt6+3\\sqrt2=4\\sqrt2+\\sqrt6$.<br>'
      '$S=(4\\sqrt2+\\sqrt6)^2=32+8\\sqrt{12}+6=38+16\\sqrt3$.'),
    'E', '10-sinf · 2025/26-B №27',
    FIG('0 0 250 125',
        '<polygon points="20,110 230,110 120,16"/>'
        '<line x1="62.6" y1="70" x2="183.1" y2="70" stroke="%s"/>'
        '<line x1="67.4" y1="110" x2="144.9" y2="37.2" stroke="%s"/>'
        '<line x1="85.1" y1="48.8" x2="156.8" y2="110" stroke="%s"/>'
        % (SOFT, SOFT, SOFT)
        + '<polygon points="110,70 62.6,70 85.1,48.8" fill="#f1e3dd" stroke="%s"/>' % ACC
        + '<polygon points="110,70 183.1,70 144.9,37.2" fill="#f1e3dd" stroke="%s"/>' % ACC
        + '<polygon points="110,70 67.4,110 156.8,110" fill="#f1e3dd" stroke="%s"/>' % ACC
        + txt(76, 66, '2', ACC, 11) + txt(150, 60, '6', ACC, 11)
        + txt(106, 104, '18', ACC, 11)
        + txt(12, 122, 'B') + txt(230, 122, 'C') + txt(114, 12, 'A'))),

  P(T('Balandligi $\\sqrt{19}+2$ ga, yoyi $120^\\circ$ ga teng boʻlgan '
      'segmentga kvadrat ichki chizilgan (kvadratning bir tomoni vatarda '
      'yotadi, ikkita uchi yoyda). Kvadrat yuzini toping.',
      'В сегмент с высотой $\\sqrt{19}+2$ и дугой $120^\\circ$ вписан '
      'квадрат (одна сторона на хорде, две вершины на дуге). Найдите '
      'площадь квадрата.'),
    T('$36$', '$36$'),
    T('<b>Radiusni topamiz.</b> Yoyi $120^\\circ$ boʻlgan vatarning '
      'markazdan uzoqligi $R\\cos60^\\circ=\\tfrac{R}{2}$, demak segment '
      'balandligi $R-\\tfrac{R}{2}=\\tfrac{R}{2}$.<br>'
      'Shartdan $\\tfrac{R}{2}=\\sqrt{19}+2$, yaʼni $R=2\\sqrt{19}+4$.<br>'
      '<b>Koordinata kiritamiz.</b> Vatarni $y=0$ chizigʻiga qoʻyamiz, '
      'markaz $\\left(0;-\\tfrac{R}{2}\\right)$ da. Kvadrat tomoni $s$ '
      'boʻlsa, uning yuqori uchlari '
      '$\\left(\\pm\\tfrac{s}{2};\\,s\\right)$ va ular aylanada yotadi:<br>'
      '$\\dfrac{s^2}{4}+\\left(s+\\dfrac{R}{2}\\right)^2=R^2 '
      '\;\\Longrightarrow\; 5s^2+4Rs-3R^2=0$.<br>'
      'Musbat ildiz: $s=\\dfrac{R(\\sqrt{76}-4)}{10}='
      '\\dfrac{R(2\\sqrt{19}-4)}{10}$.<br>'
      '$R=2\\sqrt{19}+4$ ni qoʻysak, surat '
      '$(2\\sqrt{19}+4)(2\\sqrt{19}-4)=76-16=60$, demak $s=6$.<br>'
      'Kvadrat yuzi $s^2=36$.',
      '<b>Найдём радиус.</b> Хорда с дугой $120^\\circ$ удалена от центра на '
      '$R\\cos60^\\circ=\\tfrac{R}{2}$, поэтому высота сегмента равна '
      '$R-\\tfrac{R}{2}=\\tfrac{R}{2}$.<br>'
      'По условию $\\tfrac{R}{2}=\\sqrt{19}+2$, то есть '
      '$R=2\\sqrt{19}+4$.<br>'
      '<b>Введём координаты.</b> Поместим хорду на прямую $y=0$, центр — в '
      '$\\left(0;-\\tfrac{R}{2}\\right)$. Если сторона квадрата равна $s$, '
      'то его верхние вершины $\\left(\\pm\\tfrac{s}{2};\\,s\\right)$ лежат '
      'на окружности:<br>'
      '$\\dfrac{s^2}{4}+\\left(s+\\dfrac{R}{2}\\right)^2=R^2 '
      '\;\\Longrightarrow\; 5s^2+4Rs-3R^2=0$.<br>'
      'Положительный корень: $s=\\dfrac{R(2\\sqrt{19}-4)}{10}$.<br>'
      'Подставив $R=2\\sqrt{19}+4$, в числителе получаем '
      '$(2\\sqrt{19}+4)(2\\sqrt{19}-4)=76-16=60$, значит $s=6$.<br>'
      'Площадь квадрата равна $s^2=36$.'),
    'G', '11-sinf · 2024 №27',
    FIG('0 0 240 115',
        '<path d="M 42.1 65 A 90 90 0 0 1 197.9 65" stroke="%s"/>' % INK
        + '<line x1="42.1" y1="65" x2="197.9" y2="65"/>'
        + '<rect x="98.75" y="22.5" width="42.5" height="42.5" '
          'fill="#f1e3dd" stroke="%s"/>' % ACC
        + '<line x1="120" y1="20" x2="120" y2="65" stroke="%s" '
          'stroke-dasharray="3 3"/>' % SOFT
        + txt(126, 40, 'h', SOFT, 11) + txt(146, 48, 's', ACC, 11))),
 ]),

 dict(kod='ancha', nom=T('Ancha qiyin', 'Потруднее'), hue='vhard',
  izoh=T('Burish, yuzalar tenglamasi yoki koordinata — bittasini tanlab '
         'oxirigacha olib borish kerak. 11-sinf shu qatorda ishlaydi.',
         'Поворот, уравнение через площади или координаты — нужно выбрать '
         'одно и довести до конца. 11 класс работает в этом ряду.'),
  items=[

  P(T('$M$ nuqta $ABCD$ kvadratning ichida olingan. $MA=1$, $MB=2$ va '
      '$MC=3$ boʻlsa, $\\angle AMB$ necha gradusga teng?',
      'Точка $M$ взята внутри квадрата $ABCD$. Известно, что $MA=1$, $MB=2$ '
      'и $MC=3$. Найдите угол $AMB$.'),
    T('$135^\\circ$', '$135^\\circ$'),
    T('<b>Burish usuli.</b> Butun chizmani $B$ nuqta atrofida $90^\\circ$ '
      'ga buramiz, shunday qilib $A$ nuqta $C$ ga oʻtsin. $M$ nuqta biror '
      '$M\'$ ga oʻtadi.<br>'
      'Burishda uzunliklar saqlanadi, demak $M\'C=MA=1$ va $M\'B=MB=2$. '
      'Bundan tashqari $\\angle MBM\'=90^\\circ$, shuning uchun $MBM\'$ '
      'teng yonli toʻgʻri burchakli uchburchak va '
      '$MM\'=2\\sqrt2$, $\\angle BM\'M=45^\\circ$.<br>'
      '$MM\'C$ uchburchakni qaraymiz: $MM\'=2\\sqrt2$, $M\'C=1$, $MC=3$. '
      'Tekshiramiz: $(2\\sqrt2)^2+1^2=8+1=9=3^2$ — demak u '
      '<b>toʻgʻri burchakli</b> va $\\angle MM\'C=90^\\circ$.<br>'
      'Endi $\\angle AMB=\\angle CM\'B$ (burishda saqlanadi) '
      '$=\\angle BM\'M+\\angle MM\'C=45^\\circ+90^\\circ=135^\\circ$.<br>'
      'Tekshirish: kvadrat tomoni taxminan $2{,}798$, $M\\approx(0{,}863;\\,'
      '0{,}505)$ — hisoblash aynan $135^\\circ$ beradi.',
      '<b>Приём поворота.</b> Повернём весь чертёж вокруг $B$ на '
      '$90^\\circ$ так, чтобы $A$ перешла в $C$. Точка $M$ перейдёт в '
      'некоторую $M\'$.<br>'
      'Поворот сохраняет длины, значит $M\'C=MA=1$ и $M\'B=MB=2$. Кроме '
      'того, $\\angle MBM\'=90^\\circ$, поэтому $MBM\'$ — прямоугольный '
      'равнобедренный, $MM\'=2\\sqrt2$ и $\\angle BM\'M=45^\\circ$.<br>'
      'Рассмотрим треугольник $MM\'C$: $MM\'=2\\sqrt2$, $M\'C=1$, $MC=3$. '
      'Проверяем: $(2\\sqrt2)^2+1^2=9=3^2$ — он <b>прямоугольный</b>, и '
      '$\\angle MM\'C=90^\\circ$.<br>'
      'Теперь $\\angle AMB=\\angle CM\'B=\\angle BM\'M+\\angle MM\'C='
      '45^\\circ+90^\\circ=135^\\circ$.<br>'
      'Проверка: сторона квадрата примерно $2{,}798$, '
      '$M\\approx(0{,}863;\\,0{,}505)$ — вычисление даёт ровно '
      '$135^\\circ$.'),
    'F', '9-sinf · 2025/26-A №30',
    FIG('0 0 200 200',
        '<rect x="20" y="20" width="150" height="150"/>'
        + '<line x1="66.3" y1="142.9" x2="20" y2="170" stroke="%s"/>' % ACC
        + '<line x1="66.3" y1="142.9" x2="170" y2="170" stroke="%s"/>' % ACC
        + '<line x1="66.3" y1="142.9" x2="170" y2="20" stroke="%s"/>' % ACC
        + '<circle cx="66.3" cy="142.9" r="2.5" fill="%s" stroke="none"/>' % ACC
        + txt(10, 183, 'A') + txt(170, 183, 'B') + txt(172, 18, 'C')
        + txt(10, 18, 'D') + txt(56, 138, 'M', ACC)
        + txt(33, 150, '1', INK, 12) + txt(115, 149, '2', INK, 12)
        + txt(126, 89, '3', INK, 12), 180)),

  P(T('$ABCD$ toʻrtburchak tomonlarining oʻrtalari mos ravishda '
      '$M, N, P, Q$ nuqtalar boʻlsin ($M\\in AB$, $N\\in BC$, $P\\in CD$, '
      '$Q\\in DA$). $AC$ diagonalda $S$ nuqta shunday tanlanganki, '
      '$QSPD$, $AMSQ$ va $MBNS$ toʻrtburchaklarning yuzalari mos ravishda '
      '$22$, $24$ va $32$ ga teng. $AS:SC$ nisbatni toping.',
      'Пусть $M, N, P, Q$ — середины сторон $AB$, $BC$, $CD$, $DA$ '
      'четырёхугольника $ABCD$. На диагонали $AC$ выбрана точка $S$ так, '
      'что площади четырёхугольников $QSPD$, $AMSQ$ и $MBNS$ равны '
      'соответственно $22$, $24$ и $32$. Найдите отношение $AS:SC$.'),
    T('$AS:SC=4:5$', '$AS:SC=4:5$'),
    T('$S$ nuqta $AC$ da yotgani uchun toʻrtburchak toʻrtta uchburchakka '
      'ajraladi: $[ABS]=p$, $[SBC]=q$, $[SCD]=r$, $[SDA]=s$ deb '
      'belgilaymiz.<br>'
      '<b>Har bir berilgan yuzni shular orqali yozamiz.</b> $M$ — $AB$ ning '
      'oʻrtasi, demak $[AMS]=\\tfrac12[ABS]=\\tfrac{p}{2}$; xuddi shunday '
      '$[ASQ]=\\tfrac{s}{2}$. Demak $[AMSQ]=\\tfrac{p+s}{2}=24$.<br>'
      'Shu yoʻl bilan $[MBNS]=\\tfrac{p+q}{2}=32$ va '
      '$[QSPD]=\\tfrac{s+r}{2}=22$.<br>'
      'Yaʼni $p+s=48$, $p+q=64$, $s+r=44$.<br>'
      '<b>Toʻrtinchi tenglama</b> — $S$ ning $AC$ da yotishidan: '
      '$\\dfrac{AS}{SC}=\\dfrac{p}{q}=\\dfrac{s}{r}$, demak $pr=qs$.<br>'
      'Nisbatni $k$ desak, $q=\\tfrac{p}{k}$, $r=\\tfrac{s}{k}$:<br>'
      '$p\\left(1+\\tfrac1k\\right)=64$, '
      '$s\\left(1+\\tfrac1k\\right)=44$, demak '
      '$\\dfrac{p}{s}=\\dfrac{16}{11}$.<br>'
      '$p+s=48$ bilan birga: $p=\\tfrac{256}{9}$, $s=\\tfrac{176}{9}$. U '
      'holda $1+\\tfrac1k=\\dfrac{64\\cdot9}{256}=\\dfrac94$, yaʼni '
      '$\\tfrac1k=\\tfrac54$.<br>'
      'Javob: $k=\\dfrac{AS}{SC}=\\dfrac45$.',
      'Так как $S$ лежит на $AC$, четырёхугольник разбивается на четыре '
      'треугольника: обозначим $[ABS]=p$, $[SBC]=q$, $[SCD]=r$, '
      '$[SDA]=s$.<br>'
      '<b>Выразим каждую данную площадь.</b> $M$ — середина $AB$, поэтому '
      '$[AMS]=\\tfrac12[ABS]=\\tfrac{p}{2}$; аналогично '
      '$[ASQ]=\\tfrac{s}{2}$. Значит $[AMSQ]=\\tfrac{p+s}{2}=24$.<br>'
      'Так же получаем $[MBNS]=\\tfrac{p+q}{2}=32$ и '
      '$[QSPD]=\\tfrac{s+r}{2}=22$.<br>'
      'То есть $p+s=48$, $p+q=64$, $s+r=44$.<br>'
      '<b>Четвёртое уравнение</b> — из того, что $S$ лежит на $AC$: '
      '$\\dfrac{AS}{SC}=\\dfrac{p}{q}=\\dfrac{s}{r}$, значит $pr=qs$.<br>'
      'Обозначив отношение через $k$, получаем $q=\\tfrac{p}{k}$, '
      '$r=\\tfrac{s}{k}$:<br>'
      '$p\\left(1+\\tfrac1k\\right)=64$, '
      '$s\\left(1+\\tfrac1k\\right)=44$, откуда '
      '$\\dfrac{p}{s}=\\dfrac{16}{11}$.<br>'
      'Вместе с $p+s=48$: $p=\\tfrac{256}{9}$, $s=\\tfrac{176}{9}$. Тогда '
      '$1+\\tfrac1k=\\dfrac{64\\cdot9}{256}=\\dfrac94$, то есть '
      '$\\tfrac1k=\\tfrac54$.<br>'
      'Ответ: $k=\\dfrac{AS}{SC}=\\dfrac45$.'),
    'E', '9-sinf · 2025/26-B №24'),

  P(T('$ABCD$ qavariq toʻrtburchakning $AC$ diagonali oʻrtasidan barcha '
      'tomonlargacha boʻlgan masofalar bir xil va $4{,}8$ ga teng. '
      'Toʻrtburchakning $BD$ diagonali $12$ ga teng boʻlsa, uning yuzini '
      'toping.',
      'Расстояния от середины диагонали $AC$ выпуклого четырёхугольника '
      '$ABCD$ до всех его сторон одинаковы и равны $4{,}8$. Диагональ $BD$ '
      'равна $12$. Найдите площадь четырёхугольника.'),
    T('$96$', '$96$'),
    T('$O$ — $AC$ ning oʻrtasi. $O$ hamma tomondan bir xil uzoqlikda, demak '
      'u ichki chizilgan aylananing markazi.<br>'
      '$O$ nuqta $AB$ va $AD$ tomonlardan teng uzoqlikda boʻlgani uchun '
      '$AO$ — $\\angle A$ ning bissektrisasi; xuddi shunday $CO$ — '
      '$\\angle C$ ning bissektrisasi. Demak $AC$ — <b>simmetriya oʻqi</b>, '
      'yaʼni $AB=AD$ va $CB=CD$: toʻrtburchak — <b>deltoid</b>, '
      '$AC\\perp BD$ va $O$ ular kesishgan nuqta.<br>'
      '$AO=OC=m$ va $BO=OD=6$ deb belgilaymiz. $AOB$ toʻgʻri burchakli '
      'uchburchakda $O$ dan gipotenuza $AB$ gacha boʻlgan masofa '
      '$\\dfrac{m\\cdot6}{\\sqrt{m^2+36}}=4{,}8$.<br>'
      '$36m^2=23{,}04(m^2+36)\\Rightarrow 12{,}96\\,m^2=829{,}44'
      '\\Rightarrow m^2=64,\; m=8$.<br>'
      'Demak $AC=16$ va $S=\\tfrac12 AC\\cdot BD=\\tfrac12\\cdot16\\cdot12'
      '=96$.',
      '$O$ — середина $AC$. Точка $O$ равноудалена от всех сторон, значит '
      'это центр вписанной окружности.<br>'
      'Так как $O$ равноудалена от $AB$ и $AD$, луч $AO$ — биссектриса угла '
      '$A$; аналогично $CO$ — биссектриса угла $C$. Значит $AC$ — '
      '<b>ось симметрии</b>, то есть $AB=AD$ и $CB=CD$: четырёхугольник — '
      '<b>дельтоид</b>, $AC\\perp BD$, и $O$ — точка их пересечения.<br>'
      'Обозначим $AO=OC=m$, $BO=OD=6$. В прямоугольном треугольнике $AOB$ '
      'расстояние от $O$ до гипотенузы $AB$ равно '
      '$\\dfrac{6m}{\\sqrt{m^2+36}}=4{,}8$.<br>'
      '$36m^2=23{,}04(m^2+36)\\Rightarrow m^2=64,\; m=8$.<br>'
      'Значит $AC=16$ и $S=\\tfrac12 AC\\cdot BD=\\tfrac12\\cdot16\\cdot12'
      '=96$.'),
    'F', '10-sinf · 2024 №25'),

  P(T('$A$, $B$, $C$ nuqtalar bir toʻgʻri chiziqda yotadi va $AB:BC=3:2$. '
      '$AB$, $BC$ va $AC$ kesmalar diametr boʻlgan uchta aylana chizilgan '
      '(kichik ikkitasi kattasining ichida). Rasmda kichik ikkita doira '
      'boʻyalmagan, qolgan qism boʻyalgan. Boʻyalmagan qism katta doiraning '
      'necha foizini tashkil qiladi?',
      'Точки $A$, $B$, $C$ лежат на одной прямой и $AB:BC=3:2$. Построены три '
      'окружности с диаметрами $AB$, $BC$ и $AC$ (две меньшие лежат внутри '
      'большей). На рисунке два меньших круга не закрашены, остальная часть '
      'закрашена. Сколько процентов большого круга составляет незакрашенная '
      'часть?'),
    T('$52\\,\\%$', '$52\\,\\%$'),
    T('$AB=3k$, $BC=2k$ deb olamiz, demak $AC=5k$ va radiuslar '
      '$R=2{,}5k$, $r_1=1{,}5k$, $r_2=k$.<br>'
      'Katta doira yuzi $\\pi R^2=6{,}25\\pi k^2$.<br>'
      '<b>Boʻyalmagan qism</b> — ikkita kichik doira: '
      '$\\pi r_1^2+\\pi r_2^2=2{,}25\\pi k^2+\\pi k^2=3{,}25\\pi k^2$.<br>'
      'Ulush: $\\dfrac{3{,}25}{6{,}25}=0{,}52$, yaʼni $52\\,\\%$ '
      '(boʻyalgan qism esa $48\\,\\%$).<br>'
      '<i>Diqqat:</i> javob $k$ ga bogʻliq emas — faqat $3:2$ nisbat muhim. '
      'Umumiy holda ulush $\\dfrac{p^2+q^2}{(p+q)^2}$ ga teng, bu yerda '
      '$p:q$ — berilgan nisbat.',
      'Пусть $AB=3k$, $BC=2k$, тогда $AC=5k$ и радиусы равны $R=2{,}5k$, '
      '$r_1=1{,}5k$, $r_2=k$.<br>'
      'Площадь большого круга $\\pi R^2=6{,}25\\pi k^2$.<br>'
      '<b>Незакрашенная часть</b> — два меньших круга: '
      '$\\pi r_1^2+\\pi r_2^2=2{,}25\\pi k^2+\\pi k^2=3{,}25\\pi k^2$.<br>'
      'Доля: $\\dfrac{3{,}25}{6{,}25}=0{,}52$, то есть $52\\,\\%$ '
      '(закрашенная часть — $48\\,\\%$).<br>'
      '<i>Замечание:</i> ответ не зависит от $k$ — важно только отношение '
      '$3:2$. В общем случае доля равна $\\dfrac{p^2+q^2}{(p+q)^2}$, где '
      '$p:q$ — данное отношение.'),
    'D', '11-sinf · 2025/26-A №14',
    FIG('0 0 250 130',
        '<circle cx="120" cy="65" r="100" fill="#e2dad6" stroke="%s"/>' % INK
        + '<circle cx="80" cy="65" r="60" fill="#ffffff" stroke="%s"/>' % ACC
        + '<circle cx="180" cy="65" r="40" fill="#ffffff" stroke="%s"/>' % ACC
        + '<line x1="20" y1="65" x2="220" y2="65" stroke="%s"/>' % INK
        + txt(8, 80, 'A') + txt(136, 80, 'B') + txt(224, 80, 'C'), 250)),

  P(T('Uzunligi $16$ ga teng $AC$ diametrda $P$ nuqta olingan, bunda '
      '$PC=3$. Aylanadagi $B$ nuqta uchun $AB=12$ boʻlsa, $BP$ kesmaning '
      'uzunligini toping.',
      'На диаметре $AC$ длины $16$ взята точка $P$, причём $PC=3$. Для '
      'точки $B$ окружности известно, что $AB=12$. Найдите длину $BP$.'),
    T('$\\sqrt{79}$', '$\\sqrt{79}$'),
    T('$AC$ diametr, demak $\\angle ABC=90^\\circ$ va '
      '$BC=\\sqrt{16^2-12^2}=\\sqrt{112}$.<br>'
      '$B$ dan $AC$ ga $BH$ balandlik tushiramiz. Toʻgʻri burchakli '
      'uchburchakdagi munosabatdan '
      '$AH=\\dfrac{AB^2}{AC}=\\dfrac{144}{16}=9$ va '
      '$BH^2=AB^2-AH^2=144-81=63$.<br>'
      '$AP=16-3=13$, demak $HP=13-9=4$.<br>'
      '$BHP$ toʻgʻri burchakli uchburchakda '
      '$BP^2=BH^2+HP^2=63+16=79$.<br>'
      'Javob: $BP=\\sqrt{79}$.<br>'
      '<i>Koordinatada ham xuddi shu:</i> $A(0;0)$, $C(16;0)$, markaz '
      '$(8;0)$; $B=(9;\\sqrt{63})$, $P=(13;0)$ va '
      '$BP^2=4^2+63=79$.',
      'Так как $AC$ — диаметр, $\\angle ABC=90^\\circ$ и '
      '$BC=\\sqrt{16^2-12^2}=\\sqrt{112}$.<br>'
      'Опустим из $B$ высоту $BH$ на $AC$. Из соотношений в прямоугольном '
      'треугольнике $AH=\\dfrac{AB^2}{AC}=\\dfrac{144}{16}=9$ и '
      '$BH^2=AB^2-AH^2=144-81=63$.<br>'
      '$AP=16-3=13$, значит $HP=13-9=4$.<br>'
      'В прямоугольном треугольнике $BHP$: $BP^2=BH^2+HP^2=63+16=79$.<br>'
      'Ответ: $BP=\\sqrt{79}$.<br>'
      '<i>В координатах то же самое:</i> $A(0;0)$, $C(16;0)$, центр '
      '$(8;0)$; $B=(9;\\sqrt{63})$, $P=(13;0)$ и $BP^2=4^2+63=79$.'),
    'C', '11-sinf · 2025/26-A №27'),

  P(T('$ABC$ uchburchakda $AB=6$, $AC=9$, $BC=10$. $\\angle A$ ning '
      'bissektrisasi $BC$ ni $L$ nuqtada kesadi. $AL$ ning uzunligini '
      'toping.',
      'В треугольнике $ABC$ известно, что $AB=6$, $AC=9$, $BC=10$. '
      'Биссектриса угла $A$ пересекает $BC$ в точке $L$. Найдите $AL$.'),
    T('$AL=\\sqrt{30}$', '$AL=\\sqrt{30}$'),
    T('<b>1-qadam.</b> Bissektrisa xossasi: '
      '$\\dfrac{BL}{LC}=\\dfrac{AB}{AC}=\\dfrac{6}{9}=\\dfrac23$, va '
      '$BL+LC=10$, demak $BL=4$, $LC=6$.<br>'
      '<b>2-qadam.</b> $AL$ ni tashqi chizilgan aylanagacha davom '
      'ettiramiz, kesishish nuqtasi $K$ boʻlsin. $\\angle BAK=\\angle KAC$ '
      'va $\\angle ABL=\\angle AKC$ (bir yoyga tayangan), demak '
      '$\\triangle ABL\\sim\\triangle AKC$:<br>'
      '$\\dfrac{AB}{AK}=\\dfrac{AL}{AC}\;\\Rightarrow\;'
      'AB\\cdot AC=AL\\cdot AK=AL(AL+LK)$.<br>'
      '<b>3-qadam.</b> Nuqtaning aylanaga nisbatan darajasi: '
      '$AL\\cdot LK=BL\\cdot LC=24$.<br>'
      'Demak $AL^2=AB\\cdot AC-BL\\cdot LC=54-24=30$ va '
      '$AL=\\sqrt{30}$.',
      '<b>Шаг 1.</b> Свойство биссектрисы: '
      '$\\dfrac{BL}{LC}=\\dfrac{6}{9}=\\dfrac23$ и $BL+LC=10$, значит '
      '$BL=4$, $LC=6$.<br>'
      '<b>Шаг 2.</b> Продолжим $AL$ до описанной окружности, точка '
      'пересечения — $K$. Имеем $\\angle BAK=\\angle KAC$ и '
      '$\\angle ABL=\\angle AKC$ (углы на одну дугу), значит '
      '$\\triangle ABL\\sim\\triangle AKC$:<br>'
      '$AB\\cdot AC=AL\\cdot AK=AL(AL+LK)$.<br>'
      '<b>Шаг 3.</b> Степень точки: $AL\\cdot LK=BL\\cdot LC=24$.<br>'
      'Значит $AL^2=AB\\cdot AC-BL\\cdot LC=54-24=30$ и $AL=\\sqrt{30}$.'),
    'B'),

  P(T('$ABC$ teng tomonli uchburchak aylanaga ichki chizilgan. $M$ nuqta '
      '$BC$ yoyida (uchburchakni oʻz ichiga olmagan yoyda) yotadi va '
      '$MB=3$, $MC=5$. $MA$ ni toping va $MA=MB+MC$ tengligini isbotlang.',
      'Равносторонний треугольник $ABC$ вписан в окружность. Точка $M$ '
      'лежит на дуге $BC$, не содержащей $A$, причём $MB=3$, $MC=5$. '
      'Найдите $MA$ и докажите равенство $MA=MB+MC$.'),
    T('$MA=8$', '$MA=8$'),
    T('$ABMC$ — aylanaga ichki chizilgan toʻrtburchak (uchlari shu '
      'tartibda). Ptolemey teoremasi:<br>'
      '$MA\\cdot BC=MB\\cdot AC+MC\\cdot AB$.<br>'
      'Uchburchak teng tomonli, demak $AB=BC=CA=a$:<br>'
      '$MA\\cdot a=a\\,(MB+MC)\;\\Longrightarrow\;MA=MB+MC$.<br>'
      'Bu — <b>har qanday</b> $M$ uchun oʻrinli boʻlgan tenglik; berilgan '
      'sonlarda $MA=3+5=8$.<br>'
      '<i>Ptolemeysiz:</i> $MA$ da $MB$ ga teng $MX$ kesma ajratsak, '
      '$\\angle BMA=60^\\circ$ boʻlgani uchun $BMX$ teng tomonli '
      'uchburchak boʻladi, va $\\triangle BMC\\cong\\triangle BXA$ dan '
      '$XA=MC$ chiqadi.',
      '$ABMC$ — вписанный четырёхугольник (вершины в этом порядке). По '
      'теореме Птолемея:<br>'
      '$MA\\cdot BC=MB\\cdot AC+MC\\cdot AB$.<br>'
      'Треугольник равносторонний, поэтому $AB=BC=CA=a$:<br>'
      '$MA\\cdot a=a\\,(MB+MC)\;\\Longrightarrow\;MA=MB+MC$.<br>'
      'Это равенство верно для <b>любой</b> точки $M$ дуги; при данных '
      'числах $MA=3+5=8$.<br>'
      '<i>Без Птолемея:</i> отложим на $MA$ отрезок $MX=MB$; так как '
      '$\\angle BMA=60^\\circ$, треугольник $BMX$ равносторонний, а из '
      '$\\triangle BMC\\cong\\triangle BXA$ следует $XA=MC$.'),
    'D'),

  P(T('$P$ nuqtadan aylanaga $PT$ urinma oʻtkazilgan va $PT=12$. Shu '
      'nuqtadan oʻtgan sekans aylanani $A$ va $B$ nuqtalarda kesadi, bunda '
      '$PA=8$ ($A$ — yaqinrogʻi). $AB$ vatarning uzunligini toping.',
      'Из точки $P$ проведена касательная $PT=12$ к окружности. Секущая из '
      'той же точки пересекает окружность в точках $A$ и $B$, причём '
      '$PA=8$ ($A$ ближе). Найдите длину хорды $AB$.'),
    T('$AB=10$', '$AB=10$'),
    T('Nuqtaning aylanaga nisbatan darajasi: $PT^2=PA\\cdot PB$.<br>'
      '$144=8\\cdot PB\;\\Rightarrow\;PB=18$.<br>'
      '$A$ nuqta $P$ va $B$ orasida, demak $AB=PB-PA=18-8=10$.<br>'
      '<i>Nega shunday:</i> $PTA$ va $PBT$ uchburchaklar oʻxshash — '
      '$\\angle P$ umumiy, $\\angle PTA=\\angle PBT$ (urinma va vatar '
      'burchagi ichki chizilgan burchakka teng).',
      'Степень точки относительно окружности: $PT^2=PA\\cdot PB$.<br>'
      '$144=8\\cdot PB\;\\Rightarrow\;PB=18$.<br>'
      'Точка $A$ лежит между $P$ и $B$, поэтому $AB=PB-PA=18-8=10$.<br>'
      '<i>Почему так:</i> треугольники $PTA$ и $PBT$ подобны — угол $P$ '
      'общий, а $\\angle PTA=\\angle PBT$ (угол между касательной и хордой '
      'равен вписанному).'),
    'D'),
 ]),
]
