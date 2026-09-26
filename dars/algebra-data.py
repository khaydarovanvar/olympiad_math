# -*- coding: utf-8 -*-
"""Algebra va ayniyatlar — 9, 10 va 11-sinf uchun toʻliq maʼlumotnoma.

Sakkizta tuman bosqichi variantida algebra savollarning 28,0 % ini beradi
(67 ta savol) — eng katta blok. Bundan tashqari algebra qolgan hamma
mavzuning tili: koʻpaytuvchilarga ajratish, Viyet va nisbatlar geometriyada
ham, sonlar nazariyasida ham qayta-qayta ishlatiladi.

Hamma son qiymati yozilishidan oldin kompyuterda (sympy) tekshirilgan.

$...$ — KaTeX.
"""

T = lambda uz, ru: (uz, ru)

CHROME = dict(
 title=T('Algebra va ayniyatlar · 9–11-sinf', 'Алгебра и тождества · 9–11 классы'),
 eyebrow=T('Olimpiadaga tayyorgarlik · tuman (shahar) bosqichi',
           'Подготовка к олимпиаде · районный (городской) этап'),
 h1=T('Algebra va ayniyatlar', 'Алгебра и тождества'),
 sub=T('Taʼriflar, ayniyatlar va usullar — har biri ishlangan misol bilan. '
       'Soʻngra toʻrt darajadagi 32 ta masala va ularning batafsil yechimi; '
       '24 tasi haqiqiy variantlardan.',
       'Определения, тождества и приёмы — каждое с разобранным примером. '
       'Затем 32 задачи четырёх уровней с подробными решениями; 24 из них — '
       'из настоящих вариантов.'),
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

BOLIMLAR = []

# ================================================ A · Ayniy almashtirishlar ==
BOLIMLAR.append(dict(kod='A', hue='alg',
 nom=T('Ayniy almashtirishlar', 'Тождественные преобразования'),
 izoh=T('Har bir variantning birinchi savoli deyarli har doim shu yerdan. '
        'Yetti-sakkizta ayniyat butun blokni yopadi.',
        'Первая задача каждого варианта почти всегда отсюда. Семь-восемь '
        'тождеств закрывают весь блок.'),
 items=[

 I('formula', T('Qisqa koʻpaytirish formulalari', 'Формулы сокращённого умножения'),
   T('$(a\\pm b)^2=a^2\\pm2ab+b^2$; $\;a^2-b^2=(a-b)(a+b)$;<br>'
     '$a^3\\pm b^3=(a\\pm b)(a^2\\mp ab+b^2)$;<br>'
     '$(a+b+c)^2=a^2+b^2+c^2+2(ab+bc+ca)$.',
     '$(a\\pm b)^2=a^2\\pm2ab+b^2$; $\;a^2-b^2=(a-b)(a+b)$;<br>'
     '$a^3\\pm b^3=(a\\pm b)(a^2\\mp ab+b^2)$;<br>'
     '$(a+b+c)^2=a^2+b^2+c^2+2(ab+bc+ca)$.'),
   T('$\\dfrac{9a^2-24a+16}{9a^2-16}=\\dfrac{(3a-4)^2}{(3a-4)(3a+4)}='
     '\\dfrac{3a-4}{3a+4}$ — 9-masalaning birinchi qadami aynan shu.',
     '$\\dfrac{9a^2-24a+16}{9a^2-16}=\\dfrac{(3a-4)^2}{(3a-4)(3a+4)}='
     '\\dfrac{3a-4}{3a+4}$ — именно с этого начинается задача 9.')),

 I('usul', T('Toʻliq kvadrat ajratish', 'Выделение полного квадрата'),
   T('$ax^2+bx+c=a\\left(x+\\dfrac{b}{2a}\\right)^2+c-\\dfrac{b^2}{4a}$. '
     'Bu — ekstremum topishning, parabola uchini aniqlashning va '
     'tengsizlikni isbotlashning bir xil vositasi.',
     '$ax^2+bx+c=a\\left(x+\\dfrac{b}{2a}\\right)^2+c-\\dfrac{b^2}{4a}$. Это '
     'один и тот же инструмент для поиска экстремума, вершины параболы и '
     'доказательства неравенства.'),
   T('$x^2+y^2\\ge2xy$ tengsizligi $(x-y)^2\\ge0$ dan darhol chiqadi — '
     'bu eng koʻp ishlatiladigan baholash.',
     'Неравенство $x^2+y^2\\ge2xy$ сразу следует из $(x-y)^2\\ge0$ — это '
     'самая употребимая оценка.')),

 I('usul', T('Guruhlash va sunʼiy had qoʻshish',
             'Группировка и добавление искусственного слагаемого'),
   T('Ifodani koʻpaytuvchilarga ajratish uchun hadlarni guruhlang yoki bir '
     'hadni qoʻshib-ayiring: $x^4+4=x^4+4x^2+4-4x^2=(x^2+2)^2-(2x)^2$.',
     'Чтобы разложить выражение на множители, группируйте слагаемые или '
     'прибавьте и вычтите одно: $x^4+4=(x^2+2)^2-(2x)^2$.'),
   T('$x^4+4=(x^2-2x+2)(x^2+2x+2)$ — Sofi Jermen ayniyati; olimpiadada '
     '“tub emasligini koʻrsating” turidagi savollarda chiqadi.',
     '$x^4+4=(x^2-2x+2)(x^2+2x+2)$ — тождество Софи Жермен; встречается в '
     'задачах «докажите, что число составное».')),

 I('usul', T('Almashtirish kiritish', 'Введение замены'),
   T('Takrorlanayotgan blokni bitta harf bilan belgilang. '
     '$t=x^2+x$, $t=\\sqrt{a}$, $t=x+\\dfrac1x$ — eng koʻp uchraydigan '
     'uchta almashtirish.',
     'Обозначьте повторяющийся блок одной буквой. Три самые частые замены: '
     '$t=x^2+x$, $t=\\sqrt{a}$, $t=x+\\dfrac1x$.'),
   T('$a^2+a+11=6\\sqrt{a^2+a+2}$ da $t=a^2+a+2$ deb olsak, $t+9=6\\sqrt t$, '
     'yaʼni $(\\sqrt t-3)^2=0$ — 21-masala bir qatorda hal boʻladi.',
     'В уравнении $a^2+a+11=6\\sqrt{a^2+a+2}$ замена $t=a^2+a+2$ даёт '
     '$t+9=6\\sqrt t$, то есть $(\\sqrt t-3)^2=0$ — задача 21 решается в '
     'одну строку.')),

 I('formula', T('$x+\\dfrac1x$ va uning darajalari', '$x+\\dfrac1x$ и её степени'),
   T('$t=x+\\dfrac1x$ boʻlsa: $x^2+\\dfrac1{x^2}=t^2-2$, '
     '$x^3+\\dfrac1{x^3}=t^3-3t$. Ayirma uchun $u=x-\\dfrac1x$ da '
     '$x^2+\\dfrac1{x^2}=u^2+2$, $x^3-\\dfrac1{x^3}=u^3+3u$.',
     'Если $t=x+\\dfrac1x$, то $x^2+\\dfrac1{x^2}=t^2-2$ и '
     '$x^3+\\dfrac1{x^3}=t^3-3t$. Для разности при $u=x-\\dfrac1x$: '
     '$x^2+\\dfrac1{x^2}=u^2+2$, $x^3-\\dfrac1{x^3}=u^3+3u$.'),
   T('$\\sqrt[3]{r}-\\dfrac1{\\sqrt[3]{r}}=1$ boʻlsa, avval '
     '$r-\\dfrac1r=1^3+3\\cdot1=4$, soʻngra '
     '$r^3-\\dfrac1{r^3}=4^3+3\\cdot4=76$ (23-masala).',
     'Если $\\sqrt[3]{r}-\\dfrac1{\\sqrt[3]{r}}=1$, то сначала '
     '$r-\\dfrac1r=4$, затем $r^3-\\dfrac1{r^3}=4^3+12=76$ (задача 23).'),
   T('$u^3=x^3-3x+\\dfrac3x-\\dfrac1{x^3}=\\left(x^3-\\dfrac1{x^3}\\right)-3u$.',
     '$u^3=\\left(x^3-\\dfrac1{x^3}\\right)-3u$.')),

 I('usul', T('Nolga teng yigʻindi hiylasi', 'Приём нулевой суммы'),
   T('$a+b+c=0$ boʻlsa, $a^3+b^3+c^3=3abc$. Teskarisi ham foydali: '
     '$a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$.',
     'Если $a+b+c=0$, то $a^3+b^3+c^3=3abc$. Полезно и обратное: '
     '$a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$.'),
   T('Bu ayniyat “uchta had yigʻindisi nolga teng” koʻrinishidagi har qanday '
     'shartni darhol koʻpaytmaga aylantiradi.',
     'Это тождество мгновенно превращает любое условие вида «сумма трёх '
     'слагаемых равна нулю» в произведение.'),
   T('$c=-(a+b)$ ni qoʻyib ochib chiqing: $a^3+b^3-(a+b)^3=-3ab(a+b)=3abc$.',
     'Подставьте $c=-(a+b)$ и раскройте: $a^3+b^3-(a+b)^3=-3ab(a+b)=3abc$.')),
]))

# ========================================================= B · Ildiz va daraja ==
BOLIMLAR.append(dict(kod='B', hue='nt',
 nom=T('Ildizlar va darajalar', 'Корни и степени'),
 izoh=T('Ichma-ich ildiz, kub ildiz va qoʻshma koʻpaytuvchi — uchtasi bilan '
        'variantdagi hamma ildizli savol yechiladi.',
        'Вложенные радикалы, кубические корни и сопряжённый множитель — этими '
        'тремя приёмами решается любая задача с корнями.'),
 items=[

 I('formula', T('Daraja qoidalari', 'Свойства степеней'),
   T('$a^m a^n=a^{m+n}$, $\;(a^m)^n=a^{mn}$, '
     '$\;a^{-n}=\\dfrac1{a^n}$, $\;a^{m/n}=\\sqrt[n]{a^m}$ ($a>0$).',
     '$a^m a^n=a^{m+n}$, $\;(a^m)^n=a^{mn}$, $\;a^{-n}=\\dfrac1{a^n}$, '
     '$\;a^{m/n}=\\sqrt[n]{a^m}$ (при $a>0$).'),
   T('$16^a\\cdot9^a=6^b\\cdot8^2$ ni bir xil asoslarga keltiramiz: '
     '$2^{4a}3^{2a}=2^{b+6}3^{b}$, demak $2a=b$ va $4a=b+6$ — sistema chiqadi.',
     'Приводим $16^a\\cdot9^a=6^b\\cdot8^2$ к одинаковым основаниям: '
     '$2^{4a}3^{2a}=2^{b+6}3^{b}$, значит $2a=b$ и $4a=b+6$ — получается '
     'система.')),

 I('usul', T('Ichma-ich ildizni ochish', 'Раскрытие вложенного радикала'),
   T('$\\sqrt{A\\pm2\\sqrt B}$ koʻrinishidagi ifodani '
     '$\\sqrt{(\\sqrt x\\pm\\sqrt y)^2}$ deb yozishga urinib koʻring: '
     '$x+y=A$, $xy=B$.',
     'Выражение вида $\\sqrt{A\\pm2\\sqrt B}$ попробуйте записать как '
     '$\\sqrt{(\\sqrt x\\pm\\sqrt y)^2}$: $x+y=A$, $xy=B$.'),
   T('$\\sqrt{4+2\\sqrt3}=\\sqrt{(\\sqrt3+1)^2}=\\sqrt3+1$ va '
     '$\\sqrt{49+8\\sqrt3}=\\sqrt{(4\\sqrt3+1)^2}=4\\sqrt3+1$ — 12-masala '
     'shu ikki qadamdan iborat.',
     '$\\sqrt{4+2\\sqrt3}=\\sqrt3+1$ и $\\sqrt{49+8\\sqrt3}=4\\sqrt3+1$ — '
     'задача 12 состоит из этих двух шагов.'),
   T('$(\\sqrt x+\\sqrt y)^2=x+y+2\\sqrt{xy}$ — demak $x+y=A$, $xy=B$ '
     'sistemasini yechish yetarli.',
     'Так как $(\\sqrt x+\\sqrt y)^2=x+y+2\\sqrt{xy}$, достаточно решить '
     'систему $x+y=A$, $xy=B$.')),

 I('usul', T('Qoʻshma koʻpaytuvchi', 'Сопряжённый множитель'),
   T('Maxrajdagi ildizdan qutulish uchun qoʻshmasiga koʻpaytiring: '
     '$\\dfrac{1}{\\sqrt a-\\sqrt b}=\\dfrac{\\sqrt a+\\sqrt b}{a-b}$. Kub '
     'ildiz uchun $\\dfrac{1}{\\sqrt[3]a-\\sqrt[3]b}='
     '\\dfrac{\\sqrt[3]{a^2}+\\sqrt[3]{ab}+\\sqrt[3]{b^2}}{a-b}$.',
     'Чтобы избавиться от корня в знаменателе, умножьте на сопряжённое: '
     '$\\dfrac{1}{\\sqrt a-\\sqrt b}=\\dfrac{\\sqrt a+\\sqrt b}{a-b}$. Для '
     'кубического корня $\\dfrac{1}{\\sqrt[3]a-\\sqrt[3]b}='
     '\\dfrac{\\sqrt[3]{a^2}+\\sqrt[3]{ab}+\\sqrt[3]{b^2}}{a-b}$.'),
   T('$\\dfrac{c-8}{\\sqrt[3]{c^2}+2\\sqrt[3]c+4}$ da surat '
     '$c-8=\\left(\\sqrt[3]c-2\\right)\\left(\\sqrt[3]{c^2}+2\\sqrt[3]c+4'
     '\\right)$ — kasr darhol qisqaradi.',
     'В дроби $\\dfrac{c-8}{\\sqrt[3]{c^2}+2\\sqrt[3]c+4}$ числитель '
     'раскладывается как '
     '$\\left(\\sqrt[3]c-2\\right)\\left(\\sqrt[3]{c^2}+2\\sqrt[3]c+4\\right)$ '
     '— дробь сразу сокращается.')),

 I('xossa', T('Aniqlanish sohasi', 'Область определения'),
   T('$\\sqrt{f}$ uchun $f\\ge0$; $\\dfrac1f$ uchun $f\\ne0$; '
     '$\\log_a f$ uchun $f>0$, $a>0$, $a\\ne1$. Ildizli tenglama yoki '
     'tengsizlikda <b>avval</b> sohani yozing.',
     'Для $\\sqrt{f}$ нужно $f\\ge0$; для $\\dfrac1f$ — $f\\ne0$; для '
     '$\\log_a f$ — $f>0$, $a>0$, $a\\ne1$. В уравнении или неравенстве с '
     'корнем <b>сначала</b> выпишите ОДЗ.'),
   T('$\\sqrt{28-x^2}+\\sqrt{-x}\\ge4$ da soha $-\\sqrt{28}\\le x\\le0$, '
     'yaʼni butun $x$ lar faqat $-5,\\dots,0$ — endi ularni birma-bir '
     'tekshirish yetarli (16-masala).',
     'В неравенстве $\\sqrt{28-x^2}+\\sqrt{-x}\\ge4$ область — '
     '$-\\sqrt{28}\\le x\\le0$, то есть целые $x$ только $-5,\\dots,0$ — '
     'дальше достаточно перебора (задача 16).')),

 I('usul', T('Ikkala tomonni kvadratga koʻtarish',
             'Возведение обеих частей в квадрат'),
   T('$\\sqrt{f}=g$ tenglama $f=g^2$ <b>va</b> $g\\ge0$ sistemasiga teng '
     'kuchli. Tengsizlikda ikkala tomon manfiy boʻlmaganda kvadratga '
     'koʻtarish mumkin.',
     'Уравнение $\\sqrt{f}=g$ равносильно системе $f=g^2$ <b>и</b> $g\\ge0$. '
     'Неравенство можно возводить в квадрат, когда обе части неотрицательны.'),
   T('$z+\\sqrt{z+\\tfrac12+\\sqrt{z+\\tfrac14}}=2025$ da '
     '$t=\\sqrt{z+\\tfrac14}$ almashtirish ichki ildizni yoʻqotadi: '
     'ildiz ostida $(t+\\tfrac12)^2$ hosil boʻladi (26-masala).',
     'В уравнении $z+\\sqrt{z+\\tfrac12+\\sqrt{z+\\tfrac14}}=2025$ замена '
     '$t=\\sqrt{z+\\tfrac14}$ убирает внутренний корень: под корнем '
     'получается $(t+\\tfrac12)^2$ (задача 26).')),

 I('natija', T('Arifmetik ildizning ishorasi', 'Знак арифметического корня'),
   T('$\\sqrt{a^2}=|a|$, $\;\\sqrt[3]{a^3}=a$. Juft darajali ildiz har doim '
     'manfiy emas — bu “ildiz ostidan chiqarish” xatosining oldini oladi.',
     '$\\sqrt{a^2}=|a|$, $\;\\sqrt[3]{a^3}=a$. Корень чётной степени всегда '
     'неотрицателен — это спасает от ошибки при вынесении из-под корня.'),
   T('$\\cos(-2024^\\circ)\\cdot\\sqrt{\\cos^{-2}2024^\\circ}='
     '\\dfrac{\\cos2024^\\circ}{|\\cos2024^\\circ|}$ — javob faqat ishoraga '
     'bogʻliq.',
     '$\\cos(-2024^\\circ)\\cdot\\sqrt{\\cos^{-2}2024^\\circ}='
     '\\dfrac{\\cos2024^\\circ}{|\\cos2024^\\circ|}$ — ответ зависит только '
     'от знака.')),
]))

# ================================================ C · Kvadrat tenglama va Viyet ==
BOLIMLAR.append(dict(kod='C', hue='geo',
 nom=T('Kvadrat tenglama va Viyet', 'Квадратное уравнение и Виет'),
 izoh=T('Ildizlarni topmasdan ular orqali ishlash — blokning butun mohiyati.',
        'Работать через корни, не находя их, — в этом весь смысл блока.'),
 items=[

 I('formula', T('Viyet formulalari', 'Формулы Виета'),
   T('$ax^2+bx+c=0$ uchun $x_1+x_2=-\\dfrac ba$, $\;x_1x_2=\\dfrac ca$. '
     'Kub tenglama $ax^3+bx^2+cx+d=0$ uchun: $\\sum x_i=-\\dfrac ba$, '
     '$\\sum x_ix_j=\\dfrac ca$, $x_1x_2x_3=-\\dfrac da$.',
     'Для $ax^2+bx+c=0$: $x_1+x_2=-\\dfrac ba$, $\;x_1x_2=\\dfrac ca$. Для '
     'кубического $ax^3+bx^2+cx+d=0$: $\\sum x_i=-\\dfrac ba$, '
     '$\\sum x_ix_j=\\dfrac ca$, $x_1x_2x_3=-\\dfrac da$.'),
   T('$x^2+2x-1=0$ uchun $s=-2$, $p=-1$; u holda '
     '$x_1^2+x_2^2=s^2-2p=6$ va $x_1^4+x_2^4=6^2-2p^2=34$ (11-masala).',
     'Для $x^2+2x-1=0$ имеем $s=-2$, $p=-1$; тогда $x_1^2+x_2^2=s^2-2p=6$ и '
     '$x_1^4+x_2^4=6^2-2p^2=34$ (задача 11).'),
   T('$a(x-x_1)(x-x_2)=ax^2-a(x_1+x_2)x+ax_1x_2$ ni berilgan koʻphad bilan '
     'solishtiring.',
     'Сравните $a(x-x_1)(x-x_2)=ax^2-a(x_1+x_2)x+ax_1x_2$ с данным '
     'многочленом.')),

 I('formula', T('Simmetrik ifodalarni $s$ va $p$ orqali yozish',
                'Симметрические выражения через $s$ и $p$'),
   T('$x_1^2+x_2^2=s^2-2p$; $\;x_1^3+x_2^3=s^3-3ps$; '
     '$\;x_1^4+x_2^4=(s^2-2p)^2-2p^2$; '
     '$\;\\dfrac1{x_1}+\\dfrac1{x_2}=\\dfrac sp$; '
     '$\;(x_1-x_2)^2=s^2-4p$.',
     '$x_1^2+x_2^2=s^2-2p$; $\;x_1^3+x_2^3=s^3-3ps$; '
     '$\;x_1^4+x_2^4=(s^2-2p)^2-2p^2$; '
     '$\;\\dfrac1{x_1}+\\dfrac1{x_2}=\\dfrac sp$; '
     '$\;(x_1-x_2)^2=s^2-4p$.'),
   T('$2x^2-5x+3=0$ da $s=2{,}5$, $p=1{,}5$, demak '
     '$x_1+x_2+x_1x_2=4$ — javob ildizlarni topmasdan chiqadi.',
     'Для $2x^2-5x+3=0$: $s=2{,}5$, $p=1{,}5$, значит '
     '$x_1+x_2+x_1x_2=4$ — ответ получен без нахождения корней.')),

 I('xossa', T('Diskriminant', 'Дискриминант'),
   T('$D=b^2-4ac$. $D>0$ — ikkita ildiz, $D=0$ — bitta (ikki karrali), '
     '$D<0$ — haqiqiy ildiz yoʻq. Ildizlar <b>butun</b> boʻlishi uchun $D$ '
     'toʻla kvadrat boʻlishi kerak (zaruriy shart).',
     '$D=b^2-4ac$. При $D>0$ — два корня, при $D=0$ — один (двукратный), при '
     '$D<0$ — действительных корней нет. Чтобы корни были <b>целыми</b>, $D$ '
     'обязан быть полным квадратом.'),
   T('$x^2+ax+b=0$ va $x^2+ax+b+1=0$ ikkalasi ham butun ildizli boʻlsin '
     'desak, $a^2-4b$ va $a^2-4b-4$ — ikkalasi toʻla kvadrat. Ikki toʻla '
     'kvadratning farqi $4$ boʻlsa, ular faqat $4$ va $0$ (29-masala).',
     'Если оба уравнения $x^2+ax+b=0$ и $x^2+ax+b+1=0$ имеют целые корни, то '
     '$a^2-4b$ и $a^2-4b-4$ — полные квадраты. Разность двух полных '
     'квадратов равна $4$ только для пары $4$ и $0$ (задача 29).')),

 I('usul', T('Ikkita tenglamaning umumiy ildizi', 'Общий корень двух уравнений'),
   T('Ikkala tenglamani <b>ayiring</b>: umumiy ildiz hosil boʻlgan (odatda '
     'chiziqli) tenglamani ham qanoatlantiradi.',
     '<b>Вычтите</b> одно уравнение из другого: общий корень удовлетворяет и '
     'полученному (обычно линейному) уравнению.'),
   T('$x^2+ax+2024b=0$ va $x^2+bx+2024a=0$ ni ayirsak, '
     '$(a-b)x+2024(b-a)=0$, demak $a\\ne b$ da $x=2024$ (17-masala).',
     'Вычитая $x^2+bx+2024a=0$ из $x^2+ax+2024b=0$, получаем '
     '$(a-b)x+2024(b-a)=0$, значит при $a\\ne b$ имеем $x=2024$ (задача 17).')),

 I('teorema', T('Koʻphadni ildizi boʻyicha ajratish',
                'Разложение многочлена по корню'),
   T('Bezu teoremasi: $P(x)$ ni $(x-c)$ ga boʻlgandagi qoldiq $P(c)$ ga '
     'teng. Demak $(x-c)\\mid P(x)$ boʻlishi uchun $P(c)=0$ boʻlishi shart.',
     'Теорема Безу: остаток от деления $P(x)$ на $(x-c)$ равен $P(c)$. '
     'Значит $(x-c)\\mid P(x)$ тогда и только тогда, когда $P(c)=0$.'),
   T('$P(x)$ koʻphad $x^2-x+1$ ga boʻlinsa, uning ildizlari — $60^\\circ$ '
     'birlik ildizlari: $\\omega^3=-1$, $\\omega^2=\\omega-1$. Shuni qoʻyib, '
     'koeffitsiyentlar uchun sistema hosil qilamiz (24-masala).',
     'Если многочлен $P(x)$ делится на $x^2-x+1$, его корни — корни из '
     'единицы: $\\omega^3=-1$, $\\omega^2=\\omega-1$. Подставив их, получаем '
     'систему на коэффициенты (задача 24).'),
   T('$P(x)=(x-c)Q(x)+r$ da $x=c$ qoʻysak, $r=P(c)$.',
     'Подставив $x=c$ в $P(x)=(x-c)Q(x)+r$, получаем $r=P(c)$.')),

 I('usul', T('Parametr: yagona yechim', 'Параметр: единственное решение'),
   T('Kasr koʻrinishidagi tenglamada “yagona yechim” ikki holda boʻladi: '
     'surat ikki karrali ildizga ega; yoki ikkita ildizdan biri maxrajni '
     'nolga aylantiradi va chiqib ketadi.',
     'У дробного уравнения «единственное решение» бывает в двух случаях: у '
     'числителя двукратный корень; либо один из двух корней обращает '
     'знаменатель в нуль и выпадает.'),
   T('$\\dfrac{x^2-3px+2p^2}{x+2p-6}=0$ da surat $(x-p)(x-2p)$; '
     '$p=0$ da ildiz bitta, $p=2$ va $p=1{,}5$ da bittasi chiqib ketadi — '
     'jami uchta qiymat (30-masala).',
     'В уравнении $\\dfrac{x^2-3px+2p^2}{x+2p-6}=0$ числитель равен '
     '$(x-p)(x-2p)$; при $p=0$ корень один, при $p=2$ и $p=1{,}5$ один корень '
     'выпадает — всего три значения (задача 30).')),
]))

# ============================================================ D · Tengsizliklar ==
BOLIMLAR.append(dict(kod='D', hue='comb',
 nom=T('Tengsizliklar', 'Неравенства'),
 izoh=T('Variantda ikki xil savol boʻladi: tengsizlikni yechish (intervallar '
        'usuli) va ifodani baholash (AM–GM). Ikkalasi ham shu yerda.',
        'В варианте два типа задач: решить неравенство (метод интервалов) и '
        'оценить выражение (AM–GM). Оба здесь.'),
 items=[

 I('usul', T('Intervallar usuli', 'Метод интервалов'),
   T('Hamma hadni bir tomonga oʻtkazing, koʻpaytuvchilarga ajrating, nollarni '
     'sonlar oʻqiga qoʻying va eng oʻngdan boshlab ishoralarni joylang. Juft '
     'karrali ildizda ishora <b>oʻzgarmaydi</b>.',
     'Перенесите всё в одну часть, разложите на множители, отметьте нули на '
     'прямой и расставьте знаки справа налево. В корне чётной кратности знак '
     '<b>не меняется</b>.'),
   T('$(x-8)(8x^2+8)(8x+8)\\le0$ da $8x^2+8>0$ har doim, demak tengsizlik '
     '$(x-8)(x+1)\\le0$ ga teng kuchli: $-1\\le x\\le8$.',
     'В $(x-8)(8x^2+8)(8x+8)\\le0$ множитель $8x^2+8$ всегда положителен, '
     'поэтому неравенство равносильно $(x-8)(x+1)\\le0$: $-1\\le x\\le8$.')),

 I('usul', T('Ikki tomonlama tengsizlik', 'Двойное неравенство'),
   T('$f\\le g\\le h$ ni ikkita tengsizlikka ajrating va yechimlar '
     '<b>kesishmasini</b> oling.',
     'Разбейте $f\\le g\\le h$ на два неравенства и возьмите '
     '<b>пересечение</b> решений.'),
   T('$5x-20\\le x^2\\le8x$: birinchisi $x^2-5x+20\\ge0$ — har doim '
     'bajariladi ($D<0$); ikkinchisi $x(x-8)\\le0$, demak $0\\le x\\le8$.',
     '$5x-20\\le x^2\\le8x$: первое даёт $x^2-5x+20\\ge0$ — выполняется '
     'всегда ($D<0$); второе $x(x-8)\\le0$, значит $0\\le x\\le8$.')),

 I('teorema', T('AM–GM tengsizligi', 'Неравенство AM–GM'),
   T('Musbat sonlar uchun '
     '$\\dfrac{a_1+\\cdots+a_n}{n}\\ge\\sqrt[n]{a_1\\cdots a_n}$, tenglik '
     'faqat hamma son teng boʻlganda. Ikkita son uchun: $a+b\\ge2\\sqrt{ab}$.',
     'Для положительных чисел '
     '$\\dfrac{a_1+\\cdots+a_n}{n}\\ge\\sqrt[n]{a_1\\cdots a_n}$, равенство — '
     'только при равенстве всех чисел. Для двух: $a+b\\ge2\\sqrt{ab}$.'),
   T('$ac=6$, $bc=15$ shartida $a+b+2c=\\dfrac{21}{c}+2c\\ge2\\sqrt{42}$ — '
     'minimum $c=\\sqrt{10{,}5}$ da (20-masala).',
     'При $ac=6$, $bc=15$: $a+b+2c=\\dfrac{21}{c}+2c\\ge2\\sqrt{42}$ — '
     'минимум при $c=\\sqrt{10{,}5}$ (задача 20).'),
   T('Ikkita son uchun $(\\sqrt a-\\sqrt b)^2\\ge0$ ni ochib yozing.',
     'Для двух чисел раскройте $(\\sqrt a-\\sqrt b)^2\\ge0$.')),

 I('usul', T('Ildizli tengsizlik', 'Иррациональное неравенство'),
   T('$\\sqrt f\\ge g$: agar $g<0$ boʻlsa, soha ichidagi hamma $x$ yechim; '
     'agar $g\\ge0$ boʻlsa, $f\\ge g^2$. Har doim soha bilan birga yozing.',
     '$\\sqrt f\\ge g$: если $g<0$, подходят все $x$ из ОДЗ; если $g\\ge0$, '
     'то $f\\ge g^2$. Всегда выписывайте вместе с ОДЗ.'),
   T('Butun yechimlar soni soʻralsa, sohani topib, butun sonlarni birma-bir '
     'tekshirish eng tez yoʻl — ularning soni odatda oʻntadan kam.',
     'Если спрашивают число целых решений, быстрее всего найти ОДЗ и '
     'перебрать целые точки — их обычно меньше десяти.')),

 I('usul', T('Kvadrat uchhadning ishorasi', 'Знак квадратного трёхчлена'),
   T('$a>0$ va $D<0$ boʻlsa, $ax^2+bx+c>0$ har doim. Parametrli masalalarda '
     'shu shartni yozish koʻpincha butun yechim boʻladi.',
     'Если $a>0$ и $D<0$, то $ax^2+bx+c>0$ при всех $x$. В задачах с '
     'параметром запись этого условия часто и есть всё решение.'),
   T('$6x^2-ax-a^2<0$ ni koʻpaytmaga keltiramiz: '
     '$(3x+a)(2x-a)<0$, yaʼni $-\\dfrac a3<x<\\dfrac a2$; bu oraliqda aynan '
     'yettita butun son boʻlishi $a$ ni topadi.',
     'Разложим $6x^2-ax-a^2<0$: $(3x+a)(2x-a)<0$, то есть '
     '$-\\dfrac a3<x<\\dfrac a2$; требование ровно семи целых точек в этом '
     'промежутке и определяет $a$.')),

 I('usul', T('Kvadratlar yigʻindisi bilan baholash',
             'Оценка через сумму квадратов'),
   T('Agar tenglama yoki sistemani $\\sum(\\ldots)^2=0$ koʻrinishiga '
     'keltirish mumkin boʻlsa, har bir qavs alohida nolga teng — sistema '
     'darhol yechiladi.',
     'Если уравнение или систему удаётся привести к виду $\\sum(\\ldots)^2=0$, '
     'каждая скобка равна нулю по отдельности — система решается сразу.'),
   T('Bu usul ayniqsa “nechta yechim bor” turidagi sistemalarda ishlaydi: '
     'kvadratlar yigʻindisi nolga teng boʻlsa, yechim yagona.',
     'Приём особенно хорош для систем вида «сколько решений»: если сумма '
     'квадратов равна нулю, решение единственно.')),
]))

# ================================================================= E · Modul ==
BOLIMLAR.append(dict(kod='E', hue='trig',
 nom=T('Modul', 'Модуль'),
 izoh=T('Har variantda bitta-ikkita modulli savol bor. Ularning koʻpi '
        'modulni ochmasdan, geometrik maʼnosi bilan yechiladi.',
        'В каждом варианте одна-две задачи с модулем. Большинство решается '
        'без раскрытия — через геометрический смысл.'),
 items=[

 I('tarif', T('Modulning taʼrifi va maʼnosi', 'Определение и смысл модуля'),
   T('$|a|=a$ agar $a\\ge0$, aks holda $-a$. Geometrik maʼnosi: $|x-c|$ — '
     '$x$ nuqtadan $c$ gacha boʻlgan <b>masofa</b>.',
     '$|a|=a$ при $a\\ge0$ и $-a$ иначе. Геометрический смысл: $|x-c|$ — '
     '<b>расстояние</b> от $x$ до $c$.'),
   T('$|x+6|=|x+10|$ — “$-6$ dan va $-10$ dan bir xil uzoqlikdagi nuqta”, '
     'yaʼni oʻrta nuqta $x=-8$ (10-savol darajasi).',
     '$|x+6|=|x+10|$ — «точка, равноудалённая от $-6$ и $-10$», то есть '
     'середина $x=-8$.')),

 I('usul', T('Oraliqlarga ajratish', 'Разбиение на промежутки'),
   T('Modul ostidagi ifodalarning nollari sonlar oʻqini oraliqlarga boʻladi. '
     'Har bir oraliqda modul oddiy qavsga aylanadi — tenglama chiziqli '
     'boʻlib qoladi.',
     'Нули подмодульных выражений разбивают прямую на промежутки. На каждом '
     'модуль превращается в обычную скобку — уравнение становится линейным.'),
   T('$(x-1)|x|=|x|+1$ da $x\\ge0$ va $x<0$ hollarini alohida qarash '
     'yetarli.',
     'В $(x-1)|x|=|x|+1$ достаточно отдельно разобрать $x\\ge0$ и $x<0$.')),

 I('usul', T('Modulni bitta harf deb olish', 'Замена модуля одной буквой'),
   T('Agar bir xil modul bir necha marta uchrasa, uni $u=|f|\\ge0$ deb '
     'belgilang — tenglama modulsiz boʻlib qoladi.',
     'Если один и тот же модуль встречается несколько раз, обозначьте его '
     '$u=|f|\\ge0$ — уравнение станет без модуля.'),
   T('$3\\left|x^2-(2-x)^2+1\\right|=10-|8x-6|$ da ichkarisi '
     '$4x-3$ ga soddalashadi, demak $3u=10-2u$, $u=2$ (22-masala).',
     'В $3\\left|x^2-(2-x)^2+1\\right|=10-|8x-6|$ внутренность упрощается до '
     '$4x-3$, поэтому $3u=10-2u$, $u=2$ (задача 22).')),

 I('xossa', T('Modul bilan bogʻliq tengsizliklar', 'Неравенства с модулем'),
   T('$|f|\\le a$ ($a\\ge0$) $\\Leftrightarrow$ $-a\\le f\\le a$; '
     '$|f|\\ge a$ $\\Leftrightarrow$ $f\\le-a$ yoki $f\\ge a$. '
     'Uchburchak tengsizligi: $|a+b|\\le|a|+|b|$.',
     '$|f|\\le a$ (при $a\\ge0$) $\\Leftrightarrow$ $-a\\le f\\le a$; '
     '$|f|\\ge a$ $\\Leftrightarrow$ $f\\le-a$ или $f\\ge a$. Неравенство '
     'треугольника: $|a+b|\\le|a|+|b|$.'),
   T('$|x-1|+|x-5|=4$ tenglamaning yechimi butun $[1;5]$ kesma — chunki '
     'yigʻindi ikki nuqta orasidagi masofadan kichik boʻla olmaydi.',
     'Решение уравнения $|x-1|+|x-5|=4$ — весь отрезок $[1;5]$, поскольку '
     'сумма не может быть меньше расстояния между точками.')),

 I('usul', T('Modulli tenglamada ildizlar soni',
             'Число корней уравнения с модулем'),
   T('“Nechta ildiz bor” savolida grafik chizish eng tez yoʻl: '
     '$y=|f(x)|$ grafigi $y=f(x)$ ning manfiy qismini yuqoriga qaytaradi.',
     'В вопросе «сколько корней» быстрее всего нарисовать график: $y=|f(x)|$ '
     'отражает отрицательную часть $y=f(x)$ вверх.'),
   T('$(3x-1)(3|x|-1)=3$ da $x\\ge0$ uchun kvadrat tenglama, $x<0$ uchun '
     'boshqa kvadrat tenglama chiqadi; har birining ildizlari shartga mos '
     'kelishini tekshirish kerak.',
     'В $(3x-1)(3|x|-1)=3$ при $x\\ge0$ получается одно квадратное уравнение, '
     'при $x<0$ — другое; корни каждого нужно проверить на соответствие '
     'условию.')),
]))

# ================================= F · Sistemalar va simmetrik ifodalar ==
BOLIMLAR.append(dict(kod='F', hue='alg',
 nom=T('Sistemalar va simmetrik ifodalar', 'Системы и симметрические выражения'),
 izoh=T('Nomaʼlumlarni alohida topish deyarli hech qachon kerak emas — '
        'simmetrik yigʻindilar yetadi.',
        'Находить неизвестные по отдельности почти никогда не нужно — хватает '
        'симметрических сумм.'),
 items=[

 I('usul', T('$s$ va $p$ almashtirish', 'Замена через $s$ и $p$'),
   T('Simmetrik sistemada $s=x+y$, $p=xy$ kiriting. U holda '
     '$x^2+y^2=s^2-2p$, $x^3+y^3=s^3-3ps$, $(x-y)^2=s^2-4p$.',
     'В симметричной системе введите $s=x+y$, $p=xy$. Тогда '
     '$x^2+y^2=s^2-2p$, $x^3+y^3=s^3-3ps$, $(x-y)^2=s^2-4p$.'),
   T('$\\dfrac{x-y}{x+y}=7$, $\\dfrac{xy}{x+y}=-84$ da $s$ orqali '
     '$x-y=7s$, $xy=-84s$; $(x-y)^2=s^2-4xy$ dan $49s^2=s^2+336s$, demak '
     '$s=7$ (14-masala).',
     'При $\\dfrac{x-y}{x+y}=7$, $\\dfrac{xy}{x+y}=-84$ через $s$: $x-y=7s$, '
     '$xy=-84s$; из $(x-y)^2=s^2-4xy$ получаем $49s^2=s^2+336s$, значит '
     '$s=7$ (задача 14).')),

 I('teorema', T('Nyuton ayniyatlari', 'Формулы Ньютона'),
   T('$p_k=x^k+y^k+z^k$ va $e_1=x+y+z$, $e_2=xy+yz+zx$, $e_3=xyz$ boʻlsa: '
     '$p_1=e_1$, $p_2=e_1p_1-2e_2$, $p_3=e_1p_2-e_2p_1+3e_3$, '
     '$p_4=e_1p_3-e_2p_2+e_3p_1$.',
     'Если $p_k=x^k+y^k+z^k$ и $e_1=x+y+z$, $e_2=xy+yz+zx$, $e_3=xyz$, то '
     '$p_1=e_1$, $p_2=e_1p_1-2e_2$, $p_3=e_1p_2-e_2p_1+3e_3$, '
     '$p_4=e_1p_3-e_2p_2+e_3p_1$.'),
   T('$p_1=1$, $p_2=2$, $p_3=3$ berilsa: $e_1=1$, $e_2=-\\tfrac12$, '
     '$e_3=\\tfrac16$, demak $p_4=\\tfrac{25}{6}$ (27-masala).',
     'При $p_1=1$, $p_2=2$, $p_3=3$: $e_1=1$, $e_2=-\\tfrac12$, '
     '$e_3=\\tfrac16$, значит $p_4=\\tfrac{25}{6}$ (задача 27).'),
   T('Har bir ildiz $x^3-e_1x^2+e_2x-e_3=0$ ni qanoatlantiradi; uchalasini '
     '$x^{k-3}$ ga koʻpaytirib qoʻshing.',
     'Каждый корень удовлетворяет $x^3-e_1x^2+e_2x-e_3=0$; умножьте на '
     '$x^{k-3}$ и сложите по трём корням.')),

 I('usul', T('Tenglamalarni qoʻshish va ayirish', 'Сложение и вычитание уравнений'),
   T('Simmetrik sistemada tenglamalarni qoʻshib-ayirish nomaʼlumlar sonini '
     'kamaytiradi; koʻpincha $x+y$ va $x-y$ uchun alohida sistema hosil '
     'boʻladi.',
     'В симметричной системе сложение и вычитание уравнений уменьшает число '
     'неизвестных; часто получается отдельная система на $x+y$ и $x-y$.'),
   T('$x(1+y)=1$ va $y(1-x)=1$ ni qoʻshsak $x+y=2$; bundan tashqari '
     '$1+y=\\tfrac1x$ va $1-x=\\tfrac1y$ — 18-masalada javob shu ikki '
     'tenglikdan chiqadi.',
     'Складывая $x(1+y)=1$ и $y(1-x)=1$, получаем $x+y=2$; кроме того '
     '$1+y=\\tfrac1x$ и $1-x=\\tfrac1y$ — в задаче 18 ответ следует из этих '
     'двух равенств.')),

 I('usul', T('Nomaʼlumni yoʻqotish', 'Исключение неизвестного'),
   T('Bitta nomaʼlumni ikkinchisi orqali ifodalab qoʻying yoki butun '
     'sistemani qoʻshib, <b>bitta</b> yangi tenglama oling — bu hamma '
     'nomaʼlumni topishdan tezroq.',
     'Выразите одно неизвестное через другое или сложите всю систему и '
     'получите <b>одно</b> новое уравнение — это быстрее, чем находить все '
     'неизвестные.'),
   T('Savolda koʻpincha $2x+3y+4z$ kabi <b>birikma</b> soʻraladi, yaʼni '
     'har bir nomaʼlumning oʻzi kerak emas.',
     'В вопросе обычно спрашивают <b>комбинацию</b> вида $2x+3y+4z$, то есть '
     'сами неизвестные не нужны.')),

 I('usul', T('Umumiy yigʻindini belgilash', 'Обозначение общей суммы'),
   T('$\\dfrac{a}{b+c+d}$ koʻrinishidagi kasrlar boʻlsa, $S=a+b+c+d$ deb '
     'belgilang: maxraj $S-a$ boʻladi va hamma kasr bir xil koʻrinishga '
     'keladi.',
     'Если встречаются дроби вида $\\dfrac{a}{b+c+d}$, обозначьте '
     '$S=a+b+c+d$: знаменатель станет $S-a$, и все дроби примут один вид.'),
   T('$\\sum\\dfrac{a}{S-a}=1$ dan $\\sum\\dfrac{S}{S-a}=5$, yaʼni '
     '$\\sum\\dfrac1{S-a}=\\dfrac5S$ — 25-masalaning kaliti shu.',
     'Из $\\sum\\dfrac{a}{S-a}=1$ следует $\\sum\\dfrac{S}{S-a}=5$, то есть '
     '$\\sum\\dfrac1{S-a}=\\dfrac5S$ — в этом ключ к задаче 25.'),
   T('Har bir kasrga $1$ qoʻshing: '
     '$\\dfrac{a}{S-a}+1=\\dfrac{S}{S-a}$, hammasi $4$ ta, demak yigʻindi '
     '$1+4=5$.',
     'Прибавьте к каждой дроби $1$: $\\dfrac{a}{S-a}+1=\\dfrac{S}{S-a}$; '
     'дробей четыре, поэтому сумма равна $1+4=5$.')),

 I('usul', T('Ikki nomaʼlumli shartni koeffitsiyent boʻyicha tenglash',
             'Приравнивание по коэффициентам'),
   T('Agar tenglik $a$ va $b$ ning <b>ixtiyoriy</b> (yoki turli) qiymatlarida '
     'bajarilishi kerak boʻlsa, mos hadlar oldidagi koeffitsiyentlarni '
     'tenglang.',
     'Если равенство должно выполняться при <b>любых</b> (или различных) '
     'значениях $a$ и $b$, приравняйте коэффициенты при соответствующих '
     'членах.'),
   T('$2a^3+(1+\\sqrt3)ab+2b^3=\\dfrac{5+3\\sqrt3}{54}$ ni $s=a+b$, $p=ab$ '
     'orqali yozsak, $p$ oldidagi koeffitsiyent nolga teng boʻlishi kerak: '
     '$-6s+(1+\\sqrt3)=0$ (28-masala).',
     'Записав $2a^3+(1+\\sqrt3)ab+2b^3=\\dfrac{5+3\\sqrt3}{54}$ через '
     '$s=a+b$, $p=ab$, требуем нулевой коэффициент при $p$: '
     '$-6s+(1+\\sqrt3)=0$ (задача 28).')),
]))

# ============================== G · Nisbat, logarifm, teleskop ==
BOLIMLAR.append(dict(kod='G', hue='geo',
 nom=T('Nisbat, logarifm va teleskop', 'Отношения, логарифмы и телескопирование'),
 izoh=T('Uchta kichik, lekin har variantda uchraydigan mavzu — va uchalasi '
        'ham bitta-bitta standart harakatga tushadi.',
        'Три небольшие, но встречающиеся в каждом варианте темы — и каждая '
        'сводится к одному стандартному приёму.'),
 items=[

 I('usul', T('Nisbatlar zanjiri', 'Цепочка отношений'),
   T('$\\dfrac ab=\\dfrac cd=k$ boʻlsa, $a=bk$, $c=dk$ deb yozing — hamma '
     'harf bitta $k$ orqali ifodalanadi.',
     'Если $\\dfrac ab=\\dfrac cd=k$, запишите $a=bk$, $c=dk$ — все буквы '
     'выразятся через одно $k$.'),
   T('$\\dfrac ab=\\dfrac bc=\\dfrac cd$ boʻlsa, $b=ak$, $c=ak^2$, '
     '$d=ak^3$ — geometrik progressiya hosil boʻladi.',
     'Если $\\dfrac ab=\\dfrac bc=\\dfrac cd$, то $b=ak$, $c=ak^2$, '
     '$d=ak^3$ — получается геометрическая прогрессия.')),

 I('usul', T('Teng nisbatlar xossasi', 'Свойство равных отношений'),
   T('$\\dfrac{a_1}{b_1}=\\cdots=\\dfrac{a_n}{b_n}=k$ boʻlsa, '
     '$\\dfrac{a_1+\\cdots+a_n}{b_1+\\cdots+b_n}=k$ (maxrajlar yigʻindisi '
     'nolga teng boʻlmaganda). <b>Nol holatini alohida qarang</b> — javob '
     'koʻpincha oʻsha yerda yashiringan.',
     'Если $\\dfrac{a_1}{b_1}=\\cdots=\\dfrac{a_n}{b_n}=k$, то '
     '$\\dfrac{a_1+\\cdots+a_n}{b_1+\\cdots+b_n}=k$ (когда сумма '
     'знаменателей не равна нулю). <b>Случай нуля разбирайте отдельно</b> — '
     'часто ответ прячется именно там.'),
   T('$\\dfrac{a+b+c}{d}=\\dfrac{a+b+d}{c}=\\dfrac{a+c+d}{b}='
     '\\dfrac{b+c+d}{a}=r$ da $S\\ne0$ boʻlsa $r=3$, $S=0$ boʻlsa $r=-1$ — '
     'ikkala qiymat ham javobga kiradi (32-masala).',
     'В условии $\\dfrac{a+b+c}{d}=\\cdots=r$ при $S\\ne0$ получаем $r=3$, а '
     'при $S=0$ — $r=-1$; в ответ входят оба значения (задача 32).'),
   T('Har bir $a_i=kb_i$ ni qoʻshing: $\\sum a_i=k\\sum b_i$.',
     'Сложите равенства $a_i=kb_i$: $\\sum a_i=k\\sum b_i$.')),

 I('formula', T('Logarifm qoidalari', 'Свойства логарифмов'),
   T('$\\log_a(xy)=\\log_a x+\\log_a y$; $\;\\log_a x^k=k\\log_a x$; '
     '$\;\\log_a x=\\dfrac{\\log_b x}{\\log_b a}$; '
     '$\;a^{\\log_a x}=x$; $\;\\log_a b\\cdot\\log_b a=1$.',
     '$\\log_a(xy)=\\log_a x+\\log_a y$; $\;\\log_a x^k=k\\log_a x$; '
     '$\;\\log_a x=\\dfrac{\\log_b x}{\\log_b a}$; $\;a^{\\log_a x}=x$; '
     '$\;\\log_a b\\cdot\\log_b a=1$.'),
   T('$\\log_3(x^2y^2)=2\\log_3 y+6$ da chap tomon '
     '$2\\log_3 x+2\\log_3 y$, demak $2\\log_3 x=6$ va $x=27$.',
     'В $\\log_3(x^2y^2)=2\\log_3 y+6$ левая часть равна '
     '$2\\log_3 x+2\\log_3 y$, значит $2\\log_3 x=6$ и $x=27$.')),

 I('xossa', T('Logarifmik tengsizlikda asos', 'Основание в логарифмическом неравенстве'),
   T('$\\log_a f<\\log_a g$: agar $a>1$ boʻlsa $f<g$; agar $0<a<1$ boʻlsa '
     '$f>g$ (ishora <b>oʻzgaradi</b>). Ikkala holni ham yozing.',
     '$\\log_a f<\\log_a g$: при $a>1$ следует $f<g$, при $0<a<1$ — $f>g$ '
     '(знак <b>меняется</b>). Разбирайте оба случая.'),
   T('$\\log_x\\tfrac{19}{8}<\\log_x\\tfrac{11}{5}$ da '
     '$\\tfrac{19}{8}=2{,}375>2{,}2=\\tfrac{11}{5}$, demak tengsizlik faqat '
     '$0<x<1$ da bajariladi.',
     'В $\\log_x\\tfrac{19}{8}<\\log_x\\tfrac{11}{5}$ имеем '
     '$\\tfrac{19}{8}>\\tfrac{11}{5}$, поэтому неравенство выполняется только '
     'при $0<x<1$.')),

 I('usul', T('Teleskopik yigʻindi va koʻpaytma',
             'Телескопическая сумма и произведение'),
   T('Har bir hadni ikkita qismning ayirmasi (yoki nisbati) koʻrinishida '
     'yozing — qoʻshnilar qisqaradi va faqat chekka hadlar qoladi.',
     'Запишите каждое слагаемое как разность (или отношение) двух частей — '
     'соседние сократятся и останутся только крайние.'),
   T('$\\prod_{k\\ge0}\\left(1+x^{2^k}\\right)=\\dfrac1{1-x}$ ($|x|<1$): '
     'bu koʻpaytmani $(1-x)$ ga koʻpaytirsak, har qadamda '
     '$1-x^{2^{k+1}}$ hosil boʻladi. $x=\\tfrac15$ da javob '
     '$\\tfrac54$ (31-masala).',
     '$\\prod_{k\\ge0}\\left(1+x^{2^k}\\right)=\\dfrac1{1-x}$ (при $|x|<1$): '
     'умножая на $(1-x)$, на каждом шаге получаем $1-x^{2^{k+1}}$. При '
     '$x=\\tfrac15$ ответ $\\tfrac54$ (задача 31).'),
   T('$(1-x)(1+x)=1-x^2$, keyin $(1-x^2)(1+x^2)=1-x^4$ va hokazo.',
     '$(1-x)(1+x)=1-x^2$, затем $(1-x^2)(1+x^2)=1-x^4$ и так далее.')),

 I('formula', T('Nyuton binomi', 'Бином Ньютона'),
   T('$(a+b)^n=\\sum_{k=0}^{n}\\dbinom{n}{k}a^{n-k}b^k$. Koʻphadning '
     'berilgan darajasi oldidagi koeffitsiyentni topish uchun shu darajani '
     'beradigan <b>hamma</b> yoʻlni sanang.',
     '$(a+b)^n=\\sum_{k=0}^{n}\\dbinom{n}{k}a^{n-k}b^k$. Чтобы найти '
     'коэффициент при данной степени, переберите <b>все</b> способы её '
     'получить.'),
   T('$\\left(x^3-2025x+1\\right)^3$ da $x^6$ faqat ikkita $x^3$ va bitta '
     '$1$ dan chiqadi, demak koeffitsiyent $\\dbinom32=3$ (24-masala '
     'darajasi).',
     'В $\\left(x^3-2025x+1\\right)^3$ степень $x^6$ получается только из '
     'двух множителей $x^3$ и одного $1$, поэтому коэффициент равен '
     '$\\dbinom32=3$.')),

 I('usul', T('Butun ildiz talabidan foydalanish',
             'Использование требования целого корня'),
   T('“Ildizlari butun” sharti diskriminantni toʻla kvadrat boʻlishga '
     'majbur qiladi; “ifoda butun son” sharti esa boʻlinish talabini beradi '
     '— ikkala holda ham masala sonlar nazariyasiga aylanadi.',
     'Условие «корни целые» заставляет дискриминант быть полным квадратом, а '
     'условие «выражение целое» даёт требование делимости — в обоих случаях '
     'задача превращается в теоретико-числовую.'),
   T('$\\dfrac{n^2-3}{n-2}=n+2+\\dfrac{1}{n-2}$ — butun boʻlishi uchun '
     '$(n-2)\\mid1$, demak $n=1$ yoki $n=3$.',
     '$\\dfrac{n^2-3}{n-2}=n+2+\\dfrac{1}{n-2}$ — для целочисленности нужно '
     '$(n-2)\\mid1$, то есть $n=1$ или $n=3$.')),
]))


# ================================================================ Masalalar ==
def P(savol, javob, yechim, bolim, manba='', rasm=None):
    return dict(savol=savol, javob=javob, yechim=yechim, bolim=bolim,
                manba=manba, rasm=rasm)


DARAJALAR = [
 dict(kod='oson', nom=T('Oson', 'Лёгкие'), hue='easy',
  izoh=T('Bitta ayniyat yoki bitta formula. Har bir oʻquvchi shu yerdan '
         'boshlaydi.',
         'Одно тождество или одна формула. Каждый ученик начинает отсюда.'),
  items=[

  P(T('$(x+3)^2-(x-3)^2$ ifodani soddalashtiring.',
      'Упростите выражение $(x+3)^2-(x-3)^2$.'),
    T('$12x$', '$12x$'),
    T('Ayirmani kvadratlar ayirmasi sifatida yozamiz: '
      '$\\big((x+3)-(x-3)\\big)\\big((x+3)+(x-3)\\big)=6\\cdot2x=12x$.',
      'Запишем как разность квадратов: '
      '$\\big((x+3)-(x-3)\\big)\\big((x+3)+(x-3)\\big)=6\\cdot2x=12x$.'), 'A'),

  P(T('$x^2-5x+6=0$ tenglama ildizlarining yigʻindisi va koʻpaytmasini '
      'toping.',
      'Найдите сумму и произведение корней уравнения $x^2-5x+6=0$.'),
    T('$x_1+x_2=5$, $x_1x_2=6$', '$x_1+x_2=5$, $x_1x_2=6$'),
    T('Viyet formulalari: $x_1+x_2=-\\dfrac{-5}{1}=5$, '
      '$x_1x_2=\\dfrac61=6$. (Ildizlarning oʻzi $2$ va $3$.)',
      'По формулам Виета: $x_1+x_2=5$, $x_1x_2=6$. (Сами корни — $2$ и $3$.)'),
    'C'),

  P(T('$a+\\dfrac1a=3$ boʻlsa, $a^2+\\dfrac1{a^2}$ ni toping.',
      'Пусть $a+\\dfrac1a=3$. Найдите $a^2+\\dfrac1{a^2}$.'),
    T('$7$', '$7$'),
    T('Ikkala tomonni kvadratga koʻtaramiz: '
      '$\\left(a+\\dfrac1a\\right)^2=a^2+2+\\dfrac1{a^2}=9$, demak '
      '$a^2+\\dfrac1{a^2}=7$.',
      'Возведём обе части в квадрат: '
      '$\\left(a+\\dfrac1a\\right)^2=a^2+2+\\dfrac1{a^2}=9$, значит '
      '$a^2+\\dfrac1{a^2}=7$.'), 'A'),

  P(T('$\\sqrt{7+4\\sqrt3}$ ni soddalashtiring.',
      'Упростите $\\sqrt{7+4\\sqrt3}$.'),
    T('$2+\\sqrt3$', '$2+\\sqrt3$'),
    T('$7+4\\sqrt3=4+2\\cdot2\\sqrt3+3=\\left(2+\\sqrt3\\right)^2$, demak '
      'ildiz $2+\\sqrt3$ ga teng (musbat).',
      '$7+4\\sqrt3=\\left(2+\\sqrt3\\right)^2$, поэтому корень равен '
      '$2+\\sqrt3$ (он положителен).'), 'B'),

  P(T('$|x-4|=6$ tenglama ildizlarining yigʻindisini toping.',
      'Найдите сумму корней уравнения $|x-4|=6$.'),
    T('$8$', '$8$'),
    T('$x-4=6$ yoki $x-4=-6$, demak $x=10$ yoki $x=-2$; yigʻindi $8$. '
      '(Geometrik: ildizlar $4$ dan bir xil uzoqlikda, shuning uchun '
      'yigʻindi $2\\cdot4$.)',
      '$x-4=6$ или $x-4=-6$, то есть $x=10$ или $x=-2$; сумма равна $8$. '
      '(Геометрически: корни равноудалены от $4$, поэтому сумма равна '
      '$2\\cdot4$.)'), 'E'),

  P(T('$x^2-7x+10<0$ tengsizlikning butun yechimlarini toping.',
      'Найдите целые решения неравенства $x^2-7x+10<0$.'),
    T('$x=3$ va $x=4$', '$x=3$ и $x=4$'),
    T('$(x-2)(x-5)<0$, demak $2<x<5$. Butun yechimlar: $3$ va $4$.',
      '$(x-2)(x-5)<0$, значит $2<x<5$. Целые решения: $3$ и $4$.'), 'D'),

  P(T('$\\log_2 8+\\log_3\\dfrac19$ ni hisoblang.',
      'Вычислите $\\log_2 8+\\log_3\\dfrac19$.'),
    T('$1$', '$1$'),
    T('$\\log_2 8=3$ (chunki $2^3=8$), $\\log_3\\dfrac19=-2$ (chunki '
      '$3^{-2}=\\tfrac19$). Yigʻindi $3-2=1$.',
      '$\\log_2 8=3$ (так как $2^3=8$), $\\log_3\\dfrac19=-2$ (так как '
      '$3^{-2}=\\tfrac19$). Сумма равна $1$.'), 'G'),

  P(T('$a=5$, $b=2$ boʻlsa, $a^3-b^3$ ni koʻpaytuvchilarga ajratib '
      'hisoblang.',
      'При $a=5$, $b=2$ вычислите $a^3-b^3$, разложив на множители.'),
    T('$117$', '$117$'),
    T('$a^3-b^3=(a-b)\\left(a^2+ab+b^2\\right)=3\\cdot(25+10+4)='
      '3\\cdot39=117$.',
      '$a^3-b^3=(a-b)\\left(a^2+ab+b^2\\right)=3\\cdot39=117$.'), 'A'),
 ]),

 dict(kod='orta', nom=T('Oʻrtacha', 'Средние'), hue='med',
  izoh=T('Ikkita qadam yoki bitta hiyla. Sakkiztasi ham haqiqiy '
         'variantlardan olingan.',
         'Два шага или один приём. Все восемь взяты из настоящих вариантов.'),
  items=[

  P(T('Ifodani soddalashtiring: $\\dfrac{9a^2-24a+16}{9a^2-16}\\cdot'
      '\\dfrac{9a^2+24a+16}{9a^2+16}$',
      'Упростите: $\\dfrac{9a^2-24a+16}{9a^2-16}\\cdot'
      '\\dfrac{9a^2+24a+16}{9a^2+16}$'),
    T('$\\dfrac{9a^2-16}{9a^2+16}$', '$\\dfrac{9a^2-16}{9a^2+16}$'),
    T('Birinchi kasr: surat $(3a-4)^2$, maxraj $(3a-4)(3a+4)$, demak u '
      '$\\dfrac{3a-4}{3a+4}$ ga teng.<br>'
      'Ikkinchi kasrning surati $(3a+4)^2$.<br>'
      'Koʻpaytma: $\\dfrac{3a-4}{3a+4}\\cdot\\dfrac{(3a+4)^2}{9a^2+16}='
      '\\dfrac{(3a-4)(3a+4)}{9a^2+16}=\\dfrac{9a^2-16}{9a^2+16}$.',
      'Первая дробь: числитель $(3a-4)^2$, знаменатель $(3a-4)(3a+4)$, то '
      'есть она равна $\\dfrac{3a-4}{3a+4}$.<br>'
      'Числитель второй дроби равен $(3a+4)^2$.<br>'
      'Произведение: $\\dfrac{(3a-4)(3a+4)}{9a^2+16}='
      '\\dfrac{9a^2-16}{9a^2+16}$.'),
    'A', '9-sinf · 2024 №1'),

  P(T('Tenglamaning eng katta ildizini toping: '
      '$2x^2-x\\left(\\sqrt5+2\\right)=-\\sqrt5$',
      'Найдите наибольший корень уравнения: '
      '$2x^2-x\\left(\\sqrt5+2\\right)=-\\sqrt5$'),
    T('$0{,}5\\sqrt5$', '$0{,}5\\sqrt5$'),
    T('Standart koʻrinishga keltiramiz: '
      '$2x^2-\\left(\\sqrt5+2\\right)x+\\sqrt5=0$.<br>'
      'Diskriminant: $\\left(\\sqrt5+2\\right)^2-8\\sqrt5=9+4\\sqrt5-8\\sqrt5='
      '9-4\\sqrt5=\\left(\\sqrt5-2\\right)^2$ — toʻla kvadrat.<br>'
      'Ildizlar: $x=\\dfrac{\\left(\\sqrt5+2\\right)\\pm\\left(\\sqrt5-2'
      '\\right)}{4}$, yaʼni $x=\\dfrac{2\\sqrt5}{4}=\\dfrac{\\sqrt5}{2}$ va '
      '$x=\\dfrac44=1$.<br>'
      '$\\dfrac{\\sqrt5}{2}\\approx1{,}118>1$, demak javob $0{,}5\\sqrt5$.',
      'Приведём к стандартному виду: '
      '$2x^2-\\left(\\sqrt5+2\\right)x+\\sqrt5=0$.<br>'
      'Дискриминант: $9-4\\sqrt5=\\left(\\sqrt5-2\\right)^2$ — полный '
      'квадрат.<br>'
      'Корни: $x=\\dfrac{\\sqrt5}{2}$ и $x=1$.<br>'
      'Так как $\\dfrac{\\sqrt5}{2}\\approx1{,}118>1$, ответ $0{,}5\\sqrt5$.'),
    'C', '9-sinf · 2024 №2'),

  P(T('$x_1$ va $x_2$ sonlari $x^2+2x-1=0$ tenglamaning yechimlari boʻlsa, '
      '$x_1^4+x_2^4$ yigʻindining qiymatini toping.',
      'Числа $x_1$ и $x_2$ — корни уравнения $x^2+2x-1=0$. Найдите '
      '$x_1^4+x_2^4$.'),
    T('$34$', '$34$'),
    T('Viyet: $s=x_1+x_2=-2$, $p=x_1x_2=-1$.<br>'
      '$x_1^2+x_2^2=s^2-2p=4+2=6$.<br>'
      '$x_1^4+x_2^4=\\left(x_1^2+x_2^2\\right)^2-2\\left(x_1x_2\\right)^2='
      '36-2=34$.',
      'Виет: $s=-2$, $p=-1$.<br>'
      '$x_1^2+x_2^2=s^2-2p=6$.<br>'
      '$x_1^4+x_2^4=6^2-2\\cdot1=34$.'),
    'C', '9-sinf · 2025/26-A №13'),

  P(T('Ifodaning qiymatini toping: '
      '$\\left(4\\sqrt{4+2\\sqrt3}-\\sqrt{49+8\\sqrt3}\\right)^2$',
      'Найдите значение выражения: '
      '$\\left(4\\sqrt{4+2\\sqrt3}-\\sqrt{49+8\\sqrt3}\\right)^2$'),
    T('$9$', '$9$'),
    T('Ikkala ildizni ham ochamiz.<br>'
      '$4+2\\sqrt3=3+2\\sqrt3+1=\\left(\\sqrt3+1\\right)^2$, demak '
      '$\\sqrt{4+2\\sqrt3}=\\sqrt3+1$ va '
      '$4\\sqrt{4+2\\sqrt3}=4\\sqrt3+4$.<br>'
      '$49+8\\sqrt3=48+8\\sqrt3+1=\\left(4\\sqrt3\\right)^2+2\\cdot4\\sqrt3'
      '\\cdot1+1=\\left(4\\sqrt3+1\\right)^2$, demak ildiz $4\\sqrt3+1$.<br>'
      'Ayirma: $\\left(4\\sqrt3+4\\right)-\\left(4\\sqrt3+1\\right)=3$, '
      'kvadrati $9$.',
      'Раскроем оба радикала.<br>'
      '$4+2\\sqrt3=\\left(\\sqrt3+1\\right)^2$, поэтому '
      '$4\\sqrt{4+2\\sqrt3}=4\\sqrt3+4$.<br>'
      '$49+8\\sqrt3=\\left(4\\sqrt3+1\\right)^2$, поэтому корень равен '
      '$4\\sqrt3+1$.<br>'
      'Разность равна $3$, квадрат — $9$.'),
    'B', '9-sinf · 2025/26-A №10'),

  P(T('Agar $f(x)=x^2+kx+110$ va $f(1)=f(20)$ boʻlsa, $f(10)$ ning qiymatini '
      'toping.',
      'Пусть $f(x)=x^2+kx+110$ и $f(1)=f(20)$. Найдите $f(10)$.'),
    T('$0$', '$0$'),
    T('$f(1)=f(20)$ boʻlsa, parabola uchi shu ikki nuqta orasidagi oʻrtada: '
      '$-\\dfrac k2=\\dfrac{1+20}{2}=10{,}5$, demak $k=-21$.<br>'
      '$f(10)=100-210+110=0$.<br>'
      '<i>Tekshirish:</i> $f(1)=1-21+110=90$ va $f(20)=400-420+110=90$ ✓',
      'Из $f(1)=f(20)$ следует, что вершина параболы посередине: '
      '$-\\dfrac k2=10{,}5$, значит $k=-21$.<br>'
      '$f(10)=100-210+110=0$.<br>'
      '<i>Проверка:</i> $f(1)=90$ и $f(20)=90$ ✓'),
    'C', '9-sinf · 2025/26-B №10'),

  P(T('Agar $x$ va $y$ sonlar $\\dfrac{x-y}{x+y}=7$ va '
      '$\\dfrac{xy}{x+y}=-84$ shartlarni qanoatlantirsa, $(x+y)+(x-y)+xy$ '
      'ifodaning qiymati topilsin.',
      'Числа $x$ и $y$ удовлетворяют условиям $\\dfrac{x-y}{x+y}=7$ и '
      '$\\dfrac{xy}{x+y}=-84$. Найдите значение $(x+y)+(x-y)+xy$.'),
    T('$-532$', '$-532$'),
    T('$s=x+y$ deb belgilaymiz. Shartdan $x-y=7s$ va $xy=-84s$.<br>'
      'Ayniyat: $(x-y)^2=(x+y)^2-4xy$, demak '
      '$49s^2=s^2+336s$.<br>'
      '$48s^2=336s$ va $s\\ne0$ (aks holda maxraj nol), shuning uchun '
      '$s=7$.<br>'
      'U holda $x-y=49$, $xy=-588$ va yigʻindi '
      '$7+49-588=-532$.',
      'Обозначим $s=x+y$. Тогда $x-y=7s$ и $xy=-84s$.<br>'
      'Из тождества $(x-y)^2=(x+y)^2-4xy$ получаем $49s^2=s^2+336s$.<br>'
      '$48s^2=336s$, и $s\\ne0$ (иначе знаменатель нулевой), значит '
      '$s=7$.<br>'
      'Тогда $x-y=49$, $xy=-588$ и сумма равна $7+49-588=-532$.'),
    'F', '10-sinf · 2025/26-B №2'),

  P(T('Agar $(a-b)^2+(b-c)^2+(c-a)^2=6$ va $(a+b)^2+(b+c)^2+(c+a)^2=18$ '
      'boʻlsa, $(a+b)(b+c)+(b+c)(c+a)+(c+a)(a+b)$ ni toping.',
      'Пусть $(a-b)^2+(b-c)^2+(c-a)^2=6$ и $(a+b)^2+(b+c)^2+(c+a)^2=18$. '
      'Найдите $(a+b)(b+c)+(b+c)(c+a)+(c+a)(a+b)$.'),
    T('$15$', '$15$'),
    T('Ikkala shartni ochib yozamiz. $Q=a^2+b^2+c^2$, $R=ab+bc+ca$ '
      'deylik:<br>'
      '$2Q-2R=6$ va $2Q+2R=18$.<br>'
      'Bundan $Q=6$, $R=3$.<br>'
      'Endi $u=a+b$, $v=b+c$, $w=c+a$ deb olamiz: '
      '$u+v+w=2(a+b+c)$ va $(a+b+c)^2=Q+2R=12$.<br>'
      '$(u+v+w)^2=u^2+v^2+w^2+2(uv+vw+wu)$, yaʼni '
      '$4\\cdot12=18+2X$.<br>'
      'Demak $X=\\dfrac{48-18}{2}=15$.',
      'Раскроем оба условия. Пусть $Q=a^2+b^2+c^2$, $R=ab+bc+ca$:<br>'
      '$2Q-2R=6$ и $2Q+2R=18$, откуда $Q=6$, $R=3$.<br>'
      'Положим $u=a+b$, $v=b+c$, $w=c+a$: тогда $u+v+w=2(a+b+c)$ и '
      '$(a+b+c)^2=Q+2R=12$.<br>'
      'Из $(u+v+w)^2=u^2+v^2+w^2+2X$ получаем $48=18+2X$, значит $X=15$.'),
    'F', '10-sinf · 2024 №13'),

  P(T('Tengsizlikning butun yechimlari sonini toping: '
      '$\\sqrt{28-x^2}+\\sqrt{-x}\\ge4$',
      'Найдите число целых решений неравенства: '
      '$\\sqrt{28-x^2}+\\sqrt{-x}\\ge4$'),
    T('$5$ ta', '$5$'),
    T('<b>Soha.</b> $-x\\ge0$ va $28-x^2\\ge0$, demak '
      '$-\\sqrt{28}\\le x\\le0$, yaʼni butun $x$ lar: '
      '$-5,-4,-3,-2,-1,0$ (chunki $\\sqrt{28}\\approx5{,}29$).<br>'
      '<b>Tekshiramiz.</b><br>'
      '$x=0$: $\\sqrt{28}\\approx5{,}29\\ge4$ ✓<br>'
      '$x=-1$: $\\sqrt{27}+1\\approx6{,}20$ ✓<br>'
      '$x=-2$: $\\sqrt{24}+\\sqrt2\\approx6{,}31$ ✓<br>'
      '$x=-3$: $\\sqrt{19}+\\sqrt3\\approx6{,}09$ ✓<br>'
      '$x=-4$: $\\sqrt{12}+2\\approx5{,}46$ ✓<br>'
      '$x=-5$: $\\sqrt3+\\sqrt5\\approx3{,}97<4$ ✗<br>'
      'Demak beshta butun yechim bor.',
      '<b>ОДЗ.</b> Нужно $-x\\ge0$ и $28-x^2\\ge0$, то есть '
      '$-\\sqrt{28}\\le x\\le0$; целые $x$: $-5,\\ldots,0$.<br>'
      '<b>Проверка.</b> При $x=0,-1,-2,-3,-4$ левая часть равна примерно '
      '$5{,}29$; $6{,}20$; $6{,}31$; $6{,}09$; $5{,}46$ — все $\\ge4$ ✓<br>'
      'При $x=-5$: $\\sqrt3+\\sqrt5\\approx3{,}97<4$ ✗<br>'
      'Итого пять целых решений.'),
    'D', '11-sinf · 2024 №18'),
 ]),
]

DARAJALAR += [
 dict(kod='qiyin', nom=T('Qiyin', 'Трудные'), hue='hard',
  izoh=T('Toʻgʻri almashtirishni yoki toʻgʻri ayniyatni <b>tanlash</b> kerak. '
         'Sakkiztasi ham haqiqiy variantlardan.',
         'Нужно <b>выбрать</b> верную замену или верное тождество. Все восемь '
         '— из настоящих вариантов.'),
  items=[

  P(T('$x^2+ax+2024b=0$ va $x^2+bx+2024a=0$ tenglamalarning bitta ildizi '
      'umumiy. Agar $a\\ne b$ boʻlsa, umumiy ildiz nechaga teng boʻlishi '
      'mumkin?',
      'Уравнения $x^2+ax+2024b=0$ и $x^2+bx+2024a=0$ имеют общий корень. Чему '
      'может быть равен этот корень, если $a\\ne b$?'),
    T('$2024$', '$2024$'),
    T('Umumiy ildiz $x_0$ ikkala tenglamani ham qanoatlantiradi. Ularni '
      '<b>ayiramiz</b>:<br>'
      '$\\left(x_0^2+ax_0+2024b\\right)-\\left(x_0^2+bx_0+2024a\\right)=0$<br>'
      '$(a-b)x_0+2024(b-a)=0$<br>'
      '$(a-b)\\left(x_0-2024\\right)=0$.<br>'
      '$a\\ne b$ boʻlgani uchun $x_0=2024$.<br>'
      '<i>Bunday $a$, $b$ haqiqatan mavjud:</i> $x_0=2024$ ni birinchi '
      'tenglamaga qoʻysak, $2024^2+2024a+2024b=0$, yaʼni $a+b=-2024$ — '
      'masalan $a=0$, $b=-2024$.',
      'Общий корень $x_0$ удовлетворяет обоим уравнениям. <b>Вычтем</b> их:<br>'
      '$(a-b)x_0+2024(b-a)=0$, то есть $(a-b)\\left(x_0-2024\\right)=0$.<br>'
      'Так как $a\\ne b$, получаем $x_0=2024$.<br>'
      '<i>Такие $a$, $b$ действительно есть:</i> подстановка даёт '
      '$a+b=-2024$, например $a=0$, $b=-2024$.'),
    'C', '9-sinf · 2024 №14'),

  P(T('$x$ va $y$ sonlari $x(1+y)=y(1-x)=1$ tenglikni qanoatlantiradi. '
      '$(x-x^2)(y+y^2)(x+y)$ ifodaning qiymatini toping.',
      'Числа $x$ и $y$ удовлетворяют равенству $x(1+y)=y(1-x)=1$. Найдите '
      'значение выражения $(x-x^2)(y+y^2)(x+y)$.'),
    T('$2$', '$2$'),
    T('Shartdan $1+y=\\dfrac1x$ va $1-x=\\dfrac1y$ (bunda $x,y\\ne0$).<br>'
      'Ikkala tenglikni ochib qoʻshsak: $x+xy=1$ va $y-xy=1$, yigʻindisi '
      '$x+y=2$.<br>'
      'Endi ifodani koʻpaytuvchilarga ajratamiz:<br>'
      '$x-x^2=x(1-x)=x\\cdot\\dfrac1y=\\dfrac xy$,<br>'
      '$y+y^2=y(1+y)=y\\cdot\\dfrac1x=\\dfrac yx$.<br>'
      'Ularning koʻpaytmasi $\\dfrac xy\\cdot\\dfrac yx=1$, demak butun ifoda '
      '$1\\cdot(x+y)=2$.',
      'Из условия $1+y=\\dfrac1x$ и $1-x=\\dfrac1y$ (при $x,y\\ne0$).<br>'
      'Раскрыв и сложив: $x+xy=1$ и $y-xy=1$, сумма даёт $x+y=2$.<br>'
      'Разложим выражение:<br>'
      '$x-x^2=x(1-x)=\\dfrac xy$, $\;y+y^2=y(1+y)=\\dfrac yx$.<br>'
      'Их произведение равно $1$, поэтому всё выражение равно $x+y=2$.'),
    'F', '9-sinf · 2024 №21'),

  P(T('$x$ va $y$ sonlari $x(x-y)=y(x+y)=1$ tenglikni qanoatlantiradi. '
      '$xy\\left(x^4-y^4\\right)$ ifodaning qiymatini toping.',
      'Числа $x$ и $y$ удовлетворяют равенству $x(x-y)=y(x+y)=1$. Найдите '
      'значение $xy\\left(x^4-y^4\\right)$.'),
    T('$2$', '$2$'),
    T('Shartni ochamiz: $x^2-xy=1$ va $xy+y^2=1$.<br>'
      '<b>Qoʻshamiz:</b> $x^2+y^2=2$.<br>'
      '<b>Ayiramiz:</b> $x^2-2xy-y^2=0$, demak $x^2-y^2=2xy$.<br>'
      'Endi $x^4-y^4=\\left(x^2-y^2\\right)\\left(x^2+y^2\\right)=2xy\\cdot2='
      '4xy$, shuning uchun '
      '$xy\\left(x^4-y^4\\right)=4x^2y^2$.<br>'
      '$x^2=1+xy$ va $y^2=1-xy$ (yuqoridagi ikkita tenglikdan), ularni '
      'koʻpaytirsak $x^2y^2=1-x^2y^2$, yaʼni $x^2y^2=\\dfrac12$.<br>'
      'Javob: $4\\cdot\\dfrac12=2$.',
      'Раскроем условие: $x^2-xy=1$ и $xy+y^2=1$.<br>'
      '<b>Сложив:</b> $x^2+y^2=2$. <b>Вычтя:</b> $x^2-2xy-y^2=0$, то есть '
      '$x^2-y^2=2xy$.<br>'
      'Тогда $x^4-y^4=2xy\\cdot2=4xy$ и '
      '$xy\\left(x^4-y^4\\right)=4x^2y^2$.<br>'
      'Из $x^2=1+xy$, $y^2=1-xy$ получаем $x^2y^2=1-x^2y^2$, значит '
      '$x^2y^2=\\dfrac12$ и ответ $2$.'),
    'F', '11-sinf · 2024 №13'),

  P(T('$a$, $b$, $c$ musbat sonlar $ac=6$ va $bc=15$ tengliklarni '
      'qanoatlantiradi. $a+b+2c$ ifodaning eng kichik qiymatini toping.',
      'Положительные числа $a$, $b$, $c$ удовлетворяют равенствам $ac=6$ и '
      '$bc=15$. Найдите наименьшее значение выражения $a+b+2c$.'),
    T('$2\\sqrt{42}$', '$2\\sqrt{42}$'),
    T('$a=\\dfrac6c$, $b=\\dfrac{15}{c}$, demak '
      '$a+b+2c=\\dfrac{21}{c}+2c$.<br>'
      'AM–GM: $\\dfrac{21}{c}+2c\\ge2\\sqrt{\\dfrac{21}{c}\\cdot2c}='
      '2\\sqrt{42}$.<br>'
      'Tenglik $\\dfrac{21}{c}=2c$, yaʼni $c=\\sqrt{10{,}5}$ da erishiladi — '
      'bu musbat, demak minimum haqiqatan $2\\sqrt{42}\\approx12{,}96$.',
      '$a=\\dfrac6c$, $b=\\dfrac{15}{c}$, поэтому '
      '$a+b+2c=\\dfrac{21}{c}+2c$.<br>'
      'По AM–GM $\\dfrac{21}{c}+2c\\ge2\\sqrt{42}$.<br>'
      'Равенство при $\\dfrac{21}{c}=2c$, то есть $c=\\sqrt{10{,}5}>0$, '
      'поэтому минимум равен $2\\sqrt{42}\\approx12{,}96$.'),
    'D', '10-sinf · 2024 №21'),

  P(T('Agar $a^2+a+11=6\\sqrt{a^2+a+2}$ boʻlsa, $a-\\dfrac7a$ ifodaning '
      'qiymatini toping.',
      'Пусть $a^2+a+11=6\\sqrt{a^2+a+2}$. Найдите значение $a-\\dfrac7a$.'),
    T('$-1$', '$-1$'),
    T('<b>Almashtirish.</b> $t=a^2+a+2$ deb olamiz ($t\\ge0$). U holda chap '
      'tomon $t+9$:<br>'
      '$t+9=6\\sqrt t\;\\Longrightarrow\;t-6\\sqrt t+9=0\;'
      '\\Longrightarrow\;\\left(\\sqrt t-3\\right)^2=0$, demak $t=9$.<br>'
      'Yaʼni $a^2+a+2=9$, ya\u02bcni $a^2+a-7=0$, bundan $a^2-7=-a$.<br>'
      'Endi $a-\\dfrac7a=\\dfrac{a^2-7}{a}=\\dfrac{-a}{a}=-1$.<br>'
      '<i>Eslatma:</i> $a\\ne0$, chunki $a=0$ shartni qanoatlantirmaydi.',
      '<b>Замена.</b> Пусть $t=a^2+a+2\\ge0$. Тогда левая часть равна '
      '$t+9$:<br>'
      '$t+9=6\\sqrt t\\Rightarrow\\left(\\sqrt t-3\\right)^2=0$, значит '
      '$t=9$.<br>'
      'Отсюда $a^2+a-7=0$, то есть $a^2-7=-a$.<br>'
      'Тогда $a-\\dfrac7a=\\dfrac{a^2-7}{a}=-1$.<br>'
      '<i>Замечание:</i> $a\\ne0$, так как $a=0$ условию не удовлетворяет.'),
    'A', '11-sinf · 2024 №22'),

  P(T('Tenglamaning barcha ildizlari yigʻindisini toping: '
      '$3\\cdot\\left|x^2-(2-x)^2+1\\right|=10-|8x-6|$',
      'Найдите сумму всех корней уравнения: '
      '$3\\cdot\\left|x^2-(2-x)^2+1\\right|=10-|8x-6|$'),
    T('$\\dfrac32$', '$\\dfrac32$'),
    T('<b>Modul ostini soddalashtiramiz:</b> '
      '$x^2-(2-x)^2=x^2-\\left(4-4x+x^2\\right)=4x-4$, demak ichkarisi '
      '$4x-3$.<br>'
      'Oʻng tomonda esa $|8x-6|=2|4x-3|$.<br>'
      '$u=|4x-3|\\ge0$ deb belgilaymiz: $3u=10-2u$, demak $u=2$.<br>'
      '$|4x-3|=2$: $x=\\dfrac54$ yoki $x=\\dfrac14$.<br>'
      'Yigʻindi: $\\dfrac54+\\dfrac14=\\dfrac32$.',
      '<b>Упростим подмодульное выражение:</b> $x^2-(2-x)^2=4x-4$, то есть '
      'внутри стоит $4x-3$.<br>'
      'Справа $|8x-6|=2|4x-3|$.<br>'
      'Положим $u=|4x-3|\\ge0$: $3u=10-2u$, значит $u=2$.<br>'
      'Из $|4x-3|=2$: $x=\\dfrac54$ или $x=\\dfrac14$; сумма равна '
      '$\\dfrac32$.'),
    'E', '9-sinf · 2025/26-B №13'),

  P(T('$r$ haqiqiy son uchun $\\sqrt[3]{r}-\\dfrac1{\\sqrt[3]{r}}=1$ boʻlsa, '
      '$r^3-\\dfrac1{r^3}$ ning qiymatini toping.',
      'Для действительного $r$ выполняется '
      '$\\sqrt[3]{r}-\\dfrac1{\\sqrt[3]{r}}=1$. Найдите $r^3-\\dfrac1{r^3}$.'),
    T('$76$', '$76$'),
    T('$u=x-\\dfrac1x$ boʻlsa, $x^3-\\dfrac1{x^3}=u^3+3u$ — shu formulani '
      '<b>ikki marta</b> qoʻllaymiz.<br>'
      '<b>1-qadam.</b> $x=\\sqrt[3]{r}$, $u=1$: '
      '$r-\\dfrac1r=x^3-\\dfrac1{x^3}=1^3+3\\cdot1=4$.<br>'
      '<b>2-qadam.</b> Endi $x=r$, $u=4$: '
      '$r^3-\\dfrac1{r^3}=4^3+3\\cdot4=64+12=76$.',
      'Если $u=x-\\dfrac1x$, то $x^3-\\dfrac1{x^3}=u^3+3u$ — применим эту '
      'формулу <b>дважды</b>.<br>'
      '<b>Шаг 1.</b> При $x=\\sqrt[3]{r}$, $u=1$: $r-\\dfrac1r=1+3=4$.<br>'
      '<b>Шаг 2.</b> При $x=r$, $u=4$: $r^3-\\dfrac1{r^3}=64+12=76$.'),
    'A', '10-sinf · 2025/26-B №7'),

  P(T('$\\left(x^3-2025x+1\\right)^3$ koʻphad ochib chiqilganda $x^6$ '
      'oldidagi koeffitsiyentni toping.',
      'Найдите коэффициент при $x^6$ в разложении '
      '$\\left(x^3-2025x+1\\right)^3$.'),
    T('$3$', '$3$'),
    T('Koʻpaytma uchta bir xil qavsdan iborat; har bir qavsdan bitta had '
      'olamiz va darajalar yigʻindisi $6$ boʻlishini talab qilamiz. '
      'Mumkin boʻlgan darajalar: $3$, $1$, $0$.<br>'
      '$3+3+0=6$ ✓ — ikkita qavsdan $x^3$, bittasidan $1$;<br>'
      '$3+1+1=5$ ✗, $\;1+1+1=3$ ✗, $\;3+3+1=7$ ✗.<br>'
      'Demak yagona hol: $x^3\\cdot x^3\\cdot1$, va uni tanlash usullari soni '
      '$\\dbinom32=3$.<br>'
      'Koeffitsiyent: $3\\cdot1\\cdot1\\cdot1=3$.',
      'Произведение состоит из трёх одинаковых скобок; из каждой берём по '
      'слагаемому так, чтобы сумма степеней была $6$. Возможные степени: '
      '$3$, $1$, $0$.<br>'
      'Подходит только $3+3+0=6$ — из двух скобок $x^3$, из одной $1$; число '
      'способов $\\dbinom32=3$.<br>'
      'Коэффициент равен $3$.'),
    'G', '10-sinf · 2025/26-A №21'),
 ]),

 dict(kod='ancha', nom=T('Ancha qiyin', 'Потруднее'), hue='vhard',
  izoh=T('Ikkita usulni birga ishlatish yoki butunlay boshqa tomondan qarash '
         'kerak. 11-sinf shu qatorda ishlaydi.',
         'Нужно соединить два приёма или посмотреть на задачу совсем с другой '
         'стороны. 11 класс работает в этом ряду.'),
  items=[

  P(T('$a$, $b$, $c$, $d$ — haqiqiy sonlar '
      '$\\dfrac{a}{b+c+d}+\\dfrac{b}{c+d+a}+\\dfrac{c}{d+a+b}+'
      '\\dfrac{d}{a+b+c}=1$ tenglikni qanoatlantirsa, '
      '$\\dfrac{a^2}{b+c+d}+\\dfrac{b^2}{c+d+a}+\\dfrac{c^2}{d+a+b}+'
      '\\dfrac{d^2}{a+b+c}$ ni toping.',
      'Действительные числа $a$, $b$, $c$, $d$ удовлетворяют равенству '
      '$\\dfrac{a}{b+c+d}+\\dfrac{b}{c+d+a}+\\dfrac{c}{d+a+b}+'
      '\\dfrac{d}{a+b+c}=1$. Найдите '
      '$\\dfrac{a^2}{b+c+d}+\\dfrac{b^2}{c+d+a}+\\dfrac{c^2}{d+a+b}+'
      '\\dfrac{d^2}{a+b+c}$.'),
    T('$0$', '$0$'),
    T('$S=a+b+c+d$ deb belgilaymiz; maxrajlar $S-a$, $S-b$, $S-c$, $S-d$ '
      'boʻladi.<br>'
      '<b>1-qadam.</b> Har bir kasrga $1$ qoʻshamiz: '
      '$\\dfrac{a}{S-a}+1=\\dfrac{S}{S-a}$. Toʻrtta kasr uchun '
      '$S\\sum\\dfrac1{S-a}=1+4=5$, demak '
      '$\\sum\\dfrac1{S-a}=\\dfrac5S$ (bu yerda $S\\ne0$: agar $S=0$ '
      'boʻlsa, chap tomon $\\sum\\dfrac{a}{-a}=-4\\ne1$).<br>'
      '<b>2-qadam.</b> Kerakli yigʻindini shunday oʻzgartiramiz:<br>'
      '$\\dfrac{a^2}{S-a}=\\dfrac{a^2-S^2+S^2}{S-a}='
      '\\dfrac{-(S-a)(S+a)}{S-a}+\\dfrac{S^2}{S-a}=-(S+a)+\\dfrac{S^2}{S-a}$.'
      '<br>'
      'Toʻrttasini qoʻshamiz: '
      '$-\\left(4S+S\\right)+S^2\\cdot\\dfrac5S=-5S+5S=0$.',
      'Обозначим $S=a+b+c+d$; знаменатели равны $S-a$, $S-b$, $S-c$, '
      '$S-d$.<br>'
      '<b>Шаг 1.</b> Прибавим к каждой дроби $1$: '
      '$\\dfrac{a}{S-a}+1=\\dfrac{S}{S-a}$, поэтому '
      '$S\\sum\\dfrac1{S-a}=5$ и $\\sum\\dfrac1{S-a}=\\dfrac5S$ (здесь '
      '$S\\ne0$: при $S=0$ левая часть равна $-4\\ne1$).<br>'
      '<b>Шаг 2.</b> Преобразуем искомую сумму:<br>'
      '$\\dfrac{a^2}{S-a}=-(S+a)+\\dfrac{S^2}{S-a}$.<br>'
      'Сложив четыре такие записи: $-5S+S^2\\cdot\\dfrac5S=0$.'),
    'F', '9-sinf · 2024 №27'),

  P(T('$z+\\sqrt{z+\\tfrac12+\\sqrt{z+\\tfrac14}}=2025$ tenglamani yeching.',
      'Решите уравнение $z+\\sqrt{z+\\tfrac12+\\sqrt{z+\\tfrac14}}=2025$.'),
    T('$z=1980$', '$z=1980$'),
    T('<b>Almashtirish.</b> $t=\\sqrt{z+\\tfrac14}\\ge0$, demak '
      '$z=t^2-\\tfrac14$.<br>'
      'Ichki ifoda: '
      '$z+\\tfrac12+t=t^2+t+\\tfrac14=\\left(t+\\tfrac12\\right)^2$ — '
      'toʻla kvadrat!<br>'
      'Shuning uchun $\\sqrt{\;\\cdot\;}=t+\\tfrac12$ ($t\\ge0$ boʻlgani '
      'uchun modul ochiladi).<br>'
      'Tenglama: $t^2-\\tfrac14+t+\\tfrac12=2025$, yaʼni '
      '$\\left(t+\\tfrac12\\right)^2=2025$, demak $t+\\tfrac12=45$ va '
      '$t=44{,}5$.<br>'
      '$z=t^2-\\tfrac14=1980{,}25-0{,}25=1980$.<br>'
      '<i>Tekshirish:</i> $\\sqrt{1980+0{,}25}=44{,}5$, '
      '$\\sqrt{1980+0{,}5+44{,}5}=\\sqrt{2025}=45$ va $1980+45=2025$ ✓',
      '<b>Замена.</b> $t=\\sqrt{z+\\tfrac14}\\ge0$, тогда '
      '$z=t^2-\\tfrac14$.<br>'
      'Внутреннее выражение: '
      '$z+\\tfrac12+t=\\left(t+\\tfrac12\\right)^2$ — полный квадрат!<br>'
      'Поэтому корень равен $t+\\tfrac12$.<br>'
      'Уравнение принимает вид $\\left(t+\\tfrac12\\right)^2=2025$, значит '
      '$t=44{,}5$ и $z=1980$.<br>'
      '<i>Проверка:</i> $\\sqrt{1980{,}25}=44{,}5$, '
      '$\\sqrt{2025}=45$, $1980+45=2025$ ✓'),
    'B', '9-sinf · 2024 №25'),

  P(T('Agar $x+y+z=1$, $x^2+y^2+z^2=2$ va $x^3+y^3+z^3=3$ boʻlsa, '
      '$x^4+y^4+z^4$ ning qiymati topilsin.',
      'Пусть $x+y+z=1$, $x^2+y^2+z^2=2$ и $x^3+y^3+z^3=3$. Найдите '
      '$x^4+y^4+z^4$.'),
    T('$\\dfrac{25}{6}$', '$\\dfrac{25}{6}$'),
    T('Simmetrik yigʻindilarni topamiz: $e_1=x+y+z=1$.<br>'
      '$x^2+y^2+z^2=e_1^2-2e_2$ dan $2=1-2e_2$, demak '
      '$e_2=-\\dfrac12$.<br>'
      'Nyuton: $p_3=e_1p_2-e_2p_1+3e_3$, yaʼni '
      '$3=1\\cdot2+\\dfrac12\\cdot1+3e_3$, demak '
      '$3e_3=\\dfrac12$ va $e_3=\\dfrac16$.<br>'
      'Yana Nyuton: $p_4=e_1p_3-e_2p_2+e_3p_1='
      '3+\\dfrac12\\cdot2+\\dfrac16=3+1+\\dfrac16=\\dfrac{25}{6}$.',
      'Найдём симметрические суммы: $e_1=1$.<br>'
      'Из $x^2+y^2+z^2=e_1^2-2e_2$: $2=1-2e_2$, значит '
      '$e_2=-\\dfrac12$.<br>'
      'По Ньютону $p_3=e_1p_2-e_2p_1+3e_3$: $3=2+\\dfrac12+3e_3$, значит '
      '$e_3=\\dfrac16$.<br>'
      'Снова по Ньютону: $p_4=3+1+\\dfrac16=\\dfrac{25}{6}$.'),
    'F', '10-sinf · 2025/26-B №26'),

  P(T('$a$ va $b$ har xil haqiqiy sonlar uchun '
      '$2a^3+\\left(1+\\sqrt3\\right)ab+2b^3=\\dfrac{5+3\\sqrt3}{54}$ boʻlsa, '
      '$(6a+6b-1)^6$ ning qiymatini toping.',
      'Для различных действительных $a$ и $b$ выполняется '
      '$2a^3+\\left(1+\\sqrt3\\right)ab+2b^3=\\dfrac{5+3\\sqrt3}{54}$. '
      'Найдите значение $(6a+6b-1)^6$.'),
    T('$27$', '$27$'),
    T('$s=a+b$, $p=ab$ deb olamiz. $a^3+b^3=s^3-3ps$, demak chap tomon '
      '$2s^3-6ps+\\left(1+\\sqrt3\\right)p=2s^3+p\\left(1+\\sqrt3-6s'
      '\\right)$.<br>'
      'Shart $a$ va $b$ ning <b>har xil</b> qiymatlarida bajarilishi kerak, '
      'yaʼni bitta $s$ uchun turli $p$ larda ham — bu faqat $p$ oldidagi '
      'koeffitsiyent nol boʻlganda mumkin:<br>'
      '$1+\\sqrt3-6s=0\;\\Longrightarrow\;s=\\dfrac{1+\\sqrt3}{6}$.<br>'
      '<b>Tekshiramiz.</b> $\\left(1+\\sqrt3\\right)^3=1+3\\sqrt3+9+3\\sqrt3='
      '10+6\\sqrt3$, demak '
      '$2s^3=\\dfrac{2\\left(10+6\\sqrt3\\right)}{216}='
      '\\dfrac{5+3\\sqrt3}{54}$ ✓ — aynan oʻng tomon.<br>'
      'Endi $6s-1=\\left(1+\\sqrt3\\right)-1=\\sqrt3$, shuning uchun '
      '$(6a+6b-1)^6=\\left(\\sqrt3\\right)^6=27$.',
      'Положим $s=a+b$, $p=ab$. Так как $a^3+b^3=s^3-3ps$, левая часть равна '
      '$2s^3+p\\left(1+\\sqrt3-6s\\right)$.<br>'
      'Равенство должно выполняться для <b>различных</b> $a$ и $b$, то есть '
      'при разных $p$ — это возможно только при нулевом коэффициенте при '
      '$p$:<br>$s=\\dfrac{1+\\sqrt3}{6}$.<br>'
      '<b>Проверка.</b> $\\left(1+\\sqrt3\\right)^3=10+6\\sqrt3$, поэтому '
      '$2s^3=\\dfrac{5+3\\sqrt3}{54}$ ✓<br>'
      'Тогда $6s-1=\\sqrt3$ и $(6a+6b-1)^6=27$.'),
    'F', '9-sinf · 2025/26-B №29'),

  P(T('$x^2+ax+b=0$ va $x^2+ax+b+1=0$ kvadrat tenglamalar ikkalasi ham butun '
      'ildizlarga ega boʻladigan va $0\\le b\\le10$ shartni qanoatlantiradigan '
      'barcha $(a;b)$ butun juftliklar sonini toping.',
      'Найдите число всех целых пар $(a;b)$, при которых оба уравнения '
      '$x^2+ax+b=0$ и $x^2+ax+b+1=0$ имеют целые корни и $0\\le b\\le10$.'),
    T('$6$ ta', '$6$'),
    T('Ildizlar butun boʻlishi uchun diskriminantlar toʻla kvadrat '
      'boʻlsin:<br>'
      '$a^2-4b=k^2$ va $a^2-4b-4=m^2$, bunda $k,m\\ge0$ butun.<br>'
      'Ayiramiz: $k^2-m^2=4$, yaʼni $(k-m)(k+m)=4$. $k$ va $m$ bir xil '
      'juftlikda boʻlgani uchun ikkala koʻpaytuvchi juft: '
      '$k-m=k+m=2$, demak $k=2$, $m=0$.<br>'
      'U holda $a^2-4b=4$, yaʼni $a^2=4b+4$ — $a$ juft: $a=2c$ va '
      '$b=c^2-1$.<br>'
      '$0\\le b\\le10$ dan $1\\le c^2\\le11$, demak '
      '$c\\in\\{\\pm1,\\pm2,\\pm3\\}$ (bunda $c=0$ $b=-1$ berib, shartni '
      'buzadi).<br>'
      'Ildizlar $-c\\pm1$ — butun ✓<br>'
      'Javob: oltita juftlik, yaʼni $(\\pm2;0)$, $(\\pm4;3)$, '
      '$(\\pm6;8)$.',
      'Чтобы корни были целыми, дискриминанты должны быть полными '
      'квадратами: $a^2-4b=k^2$ и $a^2-4b-4=m^2$.<br>'
      'Вычитая: $(k-m)(k+m)=4$; так как $k$ и $m$ одной чётности, оба '
      'множителя равны $2$, откуда $k=2$, $m=0$.<br>'
      'Тогда $a^2=4b+4$, то есть $a=2c$ и $b=c^2-1$.<br>'
      'Из $0\\le b\\le10$: $c\\in\\{\\pm1,\\pm2,\\pm3\\}$; корни $-c\\pm1$ — '
      'целые ✓<br>'
      'Ответ: шесть пар — $(\\pm2;0)$, $(\\pm4;3)$, $(\\pm6;8)$.'),
    'C', '11-sinf · 2025/26-A №17'),

  P(T('$\\dfrac{x^2-3px+2p^2}{x+2p-6}=0$ tenglama faqat bitta ildizga ega '
      'boʻladigan $p$ parametrning nechta qiymati mavjud?',
      'При скольких значениях параметра $p$ уравнение '
      '$\\dfrac{x^2-3px+2p^2}{x+2p-6}=0$ имеет ровно один корень?'),
    T('$3$ ta: $p=0$, $p=1{,}5$, $p=2$',
      '$3$: $p=0$, $p=1{,}5$, $p=2$'),
    T('Surat koʻpaytuvchilarga ajraladi: $x^2-3px+2p^2=(x-p)(x-2p)$, demak '
      '“nomzod” ildizlar $x=p$ va $x=2p$.<br>'
      'Maxraj nolga teng boʻladigan nuqta: $x=6-2p$ — bu qiymat ildiz '
      'boʻlolmaydi.<br>'
      'Bitta ildiz qolishi uchun uch hol bor:<br>'
      '<b>1)</b> $p=2p$, yaʼni $p=0$ — ikkala nomzod ham $x=0$ ga '
      'qoʻshiladi; maxraj $6\\ne0$ ✓<br>'
      '<b>2)</b> $p=6-2p$, yaʼni $p=2$ — nomzodlar $2$ va $4$, ulardan $2$ '
      'chiqib ketadi, $4$ qoladi ✓<br>'
      '<b>3)</b> $2p=6-2p$, yaʼni $p=1{,}5$ — nomzodlar $1{,}5$ va $3$, '
      'ulardan $3$ chiqib ketadi ✓<br>'
      'Ikkala nomzod birdan chiqib ketishi mumkin emas (u holda 1) va 2) '
      'birga bajarilishi kerak edi).<br>'
      'Javob: uchta qiymat.',
      'Числитель раскладывается: $(x-p)(x-2p)$, поэтому «кандидаты» — $x=p$ и '
      '$x=2p$. Знаменатель обращается в нуль при $x=6-2p$ — это значение '
      'корнем быть не может.<br>'
      'Ровно один корень остаётся в трёх случаях:<br>'
      '<b>1)</b> $p=0$ — оба кандидата совпадают с $x=0$, знаменатель '
      '$6\\ne0$ ✓<br>'
      '<b>2)</b> $p=2$ — кандидаты $2$ и $4$, первый выпадает ✓<br>'
      '<b>3)</b> $p=1{,}5$ — кандидаты $1{,}5$ и $3$, второй выпадает ✓<br>'
      'Оба кандидата выпасть одновременно не могут.<br>'
      'Ответ: три значения.'),
    'C', '11-sinf · 2024 №28'),

  P(T('Agar $T=\\left(1+\\dfrac1{5^2}\\right)\\left(1+\\dfrac1{5^4}\\right)'
      '\\left(1+\\dfrac1{5^8}\\right)\\left(1+\\dfrac1{5^{16}}\\right)\\cdot'
      '\\ldots$ boʻlsa, $\\sqrt[5]{9^{12T}}$ ning qiymatini toping.',
      'Пусть $T=\\left(1+\\dfrac1{5^2}\\right)\\left(1+\\dfrac1{5^4}\\right)'
      '\\left(1+\\dfrac1{5^8}\\right)\\left(1+\\dfrac1{5^{16}}\\right)\\cdot'
      '\\ldots$ Найдите значение $\\sqrt[5]{9^{12T}}$.'),
    T('$243$', '$243$'),
    T('<b>Teleskopik koʻpaytma.</b> $|x|<1$ uchun '
      '$\\prod_{k\\ge0}\\left(1+x^{2^k}\\right)=\\dfrac1{1-x}$: '
      'koʻpaytmani $(1-x)$ ga koʻpaytirsak, har qadamda '
      '$1-x^{2^{k+1}}$ hosil boʻladi va limitda $1$ ga intiladi.<br>'
      '$x=\\dfrac15$ da: $\\left(1+\\tfrac15\\right)T=\\dfrac{1}{1-\\tfrac15}='
      '\\dfrac54$ (chunki bizning koʻpaytmamiz $k=1$ dan boshlanadi, yaʼni '
      '$\\left(1+\\tfrac15\\right)$ hadi yoʻq).<br>'
      'Demak $T=\\dfrac{5/4}{6/5}=\\dfrac{25}{24}$.<br>'
      '$12T=\\dfrac{25}{2}$, shuning uchun '
      '$9^{12T}=3^{25}$ va $\\sqrt[5]{3^{25}}=3^5=243$.',
      '<b>Телескопическое произведение.</b> При $|x|<1$ '
      '$\\prod_{k\\ge0}\\left(1+x^{2^k}\\right)=\\dfrac1{1-x}$: умножение на '
      '$(1-x)$ на каждом шаге даёт $1-x^{2^{k+1}}\\to1$.<br>'
      'При $x=\\dfrac15$ наше произведение начинается с $k=1$, то есть без '
      'множителя $\\left(1+\\tfrac15\\right)$:<br>'
      '$T=\\dfrac{5/4}{6/5}=\\dfrac{25}{24}$.<br>'
      'Тогда $12T=\\dfrac{25}{2}$, $9^{12T}=3^{25}$ и '
      '$\\sqrt[5]{3^{25}}=243$.'),
    'G', '10-sinf · 2025/26-B №19'),

  P(T('$0$ dan farqli $a$, $b$, $c$, $d$ haqiqiy sonlar uchun '
      '$\\dfrac{a+b+c}{d}=\\dfrac{a+b+d}{c}=\\dfrac{a+c+d}{b}='
      '\\dfrac{b+c+d}{a}=r$ boʻlsa, $r$ ning qabul qilishi mumkin boʻlgan '
      'barcha qiymatlari yigʻindisini toping.',
      'Для отличных от нуля действительных $a$, $b$, $c$, $d$ выполняется '
      '$\\dfrac{a+b+c}{d}=\\dfrac{a+b+d}{c}=\\dfrac{a+c+d}{b}='
      '\\dfrac{b+c+d}{a}=r$. Найдите сумму всех возможных значений $r$.'),
    T('$2$', '$2$'),
    T('$S=a+b+c+d$ deb belgilaymiz; har bir kasr '
      '$\\dfrac{S-d}{d}=r$ koʻrinishida.<br>'
      '<b>1-hol: $S\\ne0$.</b> $\\dfrac{S}{d}=r+1$, xuddi shunday hamma '
      'harf uchun, demak $a=b=c=d=\\dfrac{S}{r+1}$. U holda $S=4a$ va '
      '$r=\\dfrac{3a}{a}=3$.<br>'
      '<b>2-hol: $S=0$.</b> U holda har bir suratda '
      '$a+b+c=S-d=-d$, demak $r=\\dfrac{-d}{d}=-1$. Bunday sonlar bor: '
      'masalan $1,1,-1,-1$.<br>'
      'Javob: $3+(-1)=2$.<br>'
      '<i>Eslatma:</i> ikkinchi holni unutish — bu masaladagi eng koʻp '
      'uchraydigan xato.',
      'Обозначим $S=a+b+c+d$; каждая дробь имеет вид '
      '$\\dfrac{S-d}{d}=r$.<br>'
      '<b>Случай 1: $S\\ne0$.</b> Тогда $\\dfrac{S}{d}=r+1$ и так для всех '
      'букв, значит $a=b=c=d$ и $r=3$.<br>'
      '<b>Случай 2: $S=0$.</b> Тогда каждый числитель равен $-d$ и $r=-1$; '
      'пример: $1,1,-1,-1$.<br>'
      'Ответ: $3+(-1)=2$.<br>'
      '<i>Замечание:</i> забыть второй случай — самая частая ошибка в этой '
      'задаче.'),
    'G', '9-sinf · 2025/26-A №15'),
 ]),
]
