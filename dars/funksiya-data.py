# -*- coding: utf-8 -*-
"""Funksiyalar — 9, 10 va 11-sinf uchun toʻliq maʼlumotnoma.

Sakkizta tuman bosqichi variantida funksiyalar savollarning 5,9 % ini beradi
(14 ta savol). Ularning yarmidan koʻpi funksional tenglama: formulani emas,
bir necha qiymatni topish talab qilinadi. Shuning uchun bu yerda asosiy
eʼtibor almashtirish, simmetriya va rekurrent qadam usullariga qaratilgan.

Hamma son qiymati yozilishidan oldin kompyuterda tekshirilgan.

$...$ — KaTeX.
"""

T = lambda uz, ru: (uz, ru)

CHROME = dict(
 title=T('Funksiyalar · 9–11-sinf', 'Функции · 9–11 классы'),
 eyebrow=T('Olimpiadaga tayyorgarlik · tuman (shahar) bosqichi',
           'Подготовка к олимпиаде · районный (городской) этап'),
 h1=T('Funksiyalar', 'Функции'),
 sub=T('Aniqlanish va qiymatlar sohasi, funksional tenglamalar, juftlik va '
       'toqlik, kompozitsiya, rekurrent qadam — har biri ishlangan misol '
       'bilan. Soʻngra toʻrt darajadagi 28 ta masala va batafsil yechim; '
       '15 tasi haqiqiy variantlardan.',
       'Область определения и область значений, функциональные уравнения, '
       'чётность и нечётность, композиция, рекуррентный шаг — каждое с '
       'разобранным примером. Затем 28 задач четырёх уровней с подробными '
       'решениями; 15 из них — из настоящих вариантов.'),
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

# ============================================ A · Funksiya va uning sohalari ==
BOLIMLAR.append(dict(kod='A', hue='alg',
 nom=T('Funksiya, aniqlanish va qiymatlar sohasi',
       'Функция, область определения и область значений'),
 izoh=T('Variantlarda eng koʻp uchraydigan xato — qiymatlar sohasini '
        '«chetlarini qoʻyib» topishga urinish. Toʻgʻri yoʻl: ichkaridan '
        'tashqariga qarab qadam-baqadam baholash.',
        'Самая частая ошибка в вариантах — искать область значений '
        '«подстановкой концов». Верный путь: оценивать шаг за шагом изнутри '
        'наружу.'),
 items=[

 I('tarif', T('Funksiya', 'Функция'),
   T('$f\\colon X\\to Y$ — har bir $x\\in X$ ga aniq bitta $f(x)\\in Y$ ni '
     'mos qoʻyuvchi qoida. $X$ — <i>aniqlanish sohasi</i> $D(f)$, '
     '$\\{f(x):x\\in X\\}$ — <i>qiymatlar sohasi</i> $E(f)$.',
     '$f\\colon X\\to Y$ — правило, сопоставляющее каждому $x\\in X$ ровно '
     'одно $f(x)\\in Y$. $X$ — <i>область определения</i> $D(f)$, '
     '$\\{f(x):x\\in X\\}$ — <i>область значений</i> $E(f)$.'),
   T('Olimpiadada «funksiya berilgan» degani koʻpincha formula emas, '
     '<b>shart</b> berilgan degani: masalan $f(2n)=n\\,f(n)$. Bunda formulani '
     'qidirmaslik, kerakli bitta qiymatga yetib borish kifoya '
     '(20-masala).',
     'На олимпиаде «дана функция» часто значит, что дана не формула, а '
     '<b>условие</b>: например $f(2n)=n\\,f(n)$. Тогда формулу искать не '
     'надо — достаточно дойти до нужного одного значения (задача 20).')),

 I('usul', T('Qiymatlar sohasini ichkaridan tashqariga topish',
             'Область значений — изнутри наружу'),
   T('Ifodani eng ichki qismidan boshlab baholang, har qadamda '
     'kesmani yangilang. Har bir qadam <b>monoton</b> boʻlsa, kesmaning '
     'chetlari chetlarga oʻtadi.',
     'Оценивайте выражение начиная с самой внутренней части, обновляя '
     'отрезок на каждом шаге. Если шаг <b>монотонен</b>, концы отрезка '
     'переходят в концы.'),
   T('$y=\\dfrac{12}{\\sin x+5}$: $\\sin x\\in[-1;1]$, demak maxraj '
     '$\\in[4;6]$, va $\\dfrac{12}{t}$ kamayuvchi boʻlgani uchun '
     '$y\\in\\left[\\dfrac{12}{6};\\dfrac{12}{4}\\right]=[2;3]$ '
     '(13-masala).',
     '$y=\\dfrac{12}{\\sin x+5}$: $\\sin x\\in[-1;1]$, значит знаменатель '
     '$\\in[4;6]$, а так как $\\dfrac{12}{t}$ убывает, '
     '$y\\in[2;3]$ (задача 13).')),

 I('usul', T('Kasrni «butun + qoldiq» koʻrinishiga keltirish',
             'Выделение целой части у дроби'),
   T('$\\dfrac{ax+b}{cx+d}$ tipidagi ifodani $A+\\dfrac{B}{cx+d}$ shaklida '
     'yozing: shundan keyin qiymatlar sohasi bir qarashda koʻrinadi.',
     'Выражение вида $\\dfrac{ax+b}{cx+d}$ приведите к виду '
     '$A+\\dfrac{B}{cx+d}$ — тогда область значений видна сразу.'),
   T('$f(x)=\\dfrac12-\\dfrac{1}{2^x+1}$ da $2^x+1\\in(1;+\\infty)$, demak '
     '$\\dfrac{1}{2^x+1}\\in(0;1)$ va '
     '$f(x)\\in\\left(-\\dfrac12;\\dfrac12\\right)$ — chetlari '
     '<b>olinmaydi</b> (15-masala).',
     'В $f(x)=\\dfrac12-\\dfrac{1}{2^x+1}$ имеем $2^x+1\\in(1;+\\infty)$, '
     'значит $\\dfrac{1}{2^x+1}\\in(0;1)$ и '
     '$f(x)\\in\\left(-\\dfrac12;\\dfrac12\\right)$ — концы '
     '<b>не достигаются</b> (задача 15).')),

 I('xossa', T('Ochiq yoki yopiq? — chegarani tekshirish',
              'Открытый или закрытый? — проверка границы'),
   T('Chegaraviy qiymat <b>erishiladi</b>mi degan savolga javob: shu qiymatni '
     'beradigan $x$ mavjudmi? $2^x=0$ boʻlmaydi — demak chegaraga '
     'yetilmaydi; $\\sin x=1$ boʻladi — demak yetiladi.',
     'Ответ на вопрос «достигается ли граница»: существует ли $x$, дающий это '
     'значение? $2^x=0$ невозможно — граница не достигается; $\\sin x=1$ '
     'возможно — достигается.'),
   T('Shu sababli $\\dfrac{12}{\\sin x+5}$ uchun javob <b>yopiq</b> $[2;3]$, '
     '$\\dfrac12-\\dfrac1{2^x+1}$ uchun esa <b>ochiq</b> '
     '$\\left(-\\dfrac12;\\dfrac12\\right)$.',
     'Поэтому для $\\dfrac{12}{\\sin x+5}$ ответ <b>закрытый</b> $[2;3]$, '
     'а для $\\dfrac12-\\dfrac1{2^x+1}$ — <b>открытый</b> '
     '$\\left(-\\dfrac12;\\dfrac12\\right)$.')),

 I('usul', T('Ikki nomanfiy qoʻshiluvchi yigʻindisi nolga teng',
             'Сумма двух неотрицательных равна нулю'),
   T('$A+B=0$ va $A\\ge0$, $B\\ge0$ boʻlsa, <b>ikkalasi ham</b> nolga teng. '
     'Bu ildiz, modul va $1-\\sin x$ kabi ifodalar uchrasa darhol ishlaydi.',
     'Если $A+B=0$ и $A\\ge0$, $B\\ge0$, то <b>оба</b> равны нулю. Приём '
     'срабатывает, как только видны корень, модуль или выражение вида '
     '$1-\\sin x$.'),
   T('$1-\\sin x+\\sqrt{3y-x}=0$: $1-\\sin x\\ge0$ va ildiz $\\ge0$, demak '
     '$\\sin x=1$, $3y=x$. Shundan $x=\\dfrac{\\pi}{2}$, '
     '$y=\\dfrac{\\pi}{6}$ (23-masala).',
     '$1-\\sin x+\\sqrt{3y-x}=0$: оба слагаемых неотрицательны, значит '
     '$\\sin x=1$ и $3y=x$, откуда $x=\\dfrac{\\pi}{2}$, '
     '$y=\\dfrac{\\pi}{6}$ (задача 23).')),
]))

# ======================================== B · Funksional tenglama: almashtirish
BOLIMLAR.append(dict(kod='B', hue='alg',
 nom=T('Funksional tenglama: almashtirish usuli',
       'Функциональное уравнение: метод подстановки'),
 izoh=T('Variantlardagi funksiya savollarining eng katta guruhi. '
        '$f(\\text{ifoda})=\\ldots$ koʻrinishidagi shartdan $f$ ning oʻzini '
        'tiklash — bitta almashtirish yetarli.',
        'Самая большая группа задач о функциях в вариантах. Из условия вида '
        '$f(\\text{выражение})=\\ldots$ восстановить саму $f$ — хватает одной '
        'подстановки.'),
 items=[

 I('usul', T('Argumentni yangi harf bilan belgilash',
             'Обозначить аргумент новой буквой'),
   T('$f\\bigl(g(x)\\bigr)=h(x)$ berilgan boʻlsa, $u=g(x)$ deb oling, '
     '$x$ ni $u$ orqali ifodalang va $h$ ga qoʻying: '
     '$f(u)=h\\bigl(g^{-1}(u)\\bigr)$.',
     'Если дано $f\\bigl(g(x)\\bigr)=h(x)$, положите $u=g(x)$, выразите $x$ '
     'через $u$ и подставьте: $f(u)=h\\bigl(g^{-1}(u)\\bigr)$.'),
   T('$f(1-x)=1-x^2$: $u=1-x\\Rightarrow x=1-u$, demak '
     '$f(u)=1-(1-u)^2=2u-u^2$. Endi istalgan qiymat bir qatorda '
     '(8-masala).',
     '$f(1-x)=1-x^2$: $u=1-x\\Rightarrow x=1-u$, значит '
     '$f(u)=1-(1-u)^2=2u-u^2$. Теперь любое значение — в одну строку '
     '(задача 8).'),
   T('$g$ oʻzaro bir qiymatli boʻlsa almashtirish teskari qadamga ega, '
     'demak olingan formula <b>butun</b> aniqlanish sohasida oʻrinli.',
     'Если $g$ взаимно однозначна, подстановка обратима, поэтому полученная '
     'формула верна на <b>всей</b> области определения.')),

 I('usul', T('Formulani tiklamay, kerakli qiymatni topish',
             'Найти нужное значение, не восстанавливая формулу'),
   T('Faqat bitta $f(a)$ soʻralsa, $g(x)=a$ tenglamani yechib, mos $x$ ni '
     'shartga qoʻying — formulani tiklash shart emas.',
     'Если нужно одно $f(a)$, решите $g(x)=a$ и подставьте найденный $x$ в '
     'условие — восстанавливать формулу незачем.'),
   T('$f(1-2x)=1-2x^2$ da $f\\left(\\tfrac12\\right)$ kerak: '
     '$1-2x=\\tfrac12\\Rightarrow x=\\tfrac14$, demak '
     '$f\\left(\\tfrac12\\right)=1-2\\cdot\\tfrac1{16}=\\tfrac78$ '
     '(7-masala).',
     'В $f(1-2x)=1-2x^2$ нужно $f\\left(\\tfrac12\\right)$: '
     '$1-2x=\\tfrac12\\Rightarrow x=\\tfrac14$, значит '
     '$f\\left(\\tfrac12\\right)=1-2\\cdot\\tfrac1{16}=\\tfrac78$ '
     '(задача 7).')),

 I('usul', T('Maxsus qiymat qoʻyish: $x=0$, $x=1$, $x=y$',
             'Подстановка частных значений: $x=0$, $x=1$, $x=y$'),
   T('Tenglikda nomaʼlum <b>son</b> ($f(0)$ kabi) qatnashsa, avval shu sonni '
     'chiqaradigan qiymatni qoʻying.',
     'Если в равенстве участвует неизвестное <b>число</b> (вроде $f(0)$), '
     'сначала подставьте значение, которое его выделяет.'),
   T('$f(0)\\bigl(f(x)+2\\bigr)=4x-1$ da $x=0$: '
     '$f(0)^2+2f(0)+1=0\\Rightarrow\\bigl(f(0)+1\\bigr)^2=0$, demak '
     '$f(0)=-1$ va $f(x)=-4x-1$ (11-masala).',
     'В $f(0)\\bigl(f(x)+2\\bigr)=4x-1$ при $x=0$: '
     '$\\bigl(f(0)+1\\bigr)^2=0$, значит $f(0)=-1$ и $f(x)=-4x-1$ '
     '(задача 11).')),

 I('usul', T('Ikki oʻzgaruvchili tenglikda $x=y$ qoʻyish',
             'В равенстве с двумя переменными положить $x=y$'),
   T('$F(x,y)$ koʻrinishidagi ayniyatda $x=y$ qoʻyilsa, koʻpincha bitta '
     'nomaʼlum funksiya darhol topiladi.',
     'В тождестве вида $F(x,y)$ подстановка $x=y$ часто сразу даёт одну из '
     'неизвестных функций.'),
   T('$\\sin x+\\cos y=f(x)+f(y)+g(x)-g(y)$ da $x=y$: '
     '$\\sin x+\\cos x=2f(x)$, demak '
     '$f(x)=\\dfrac{\\sin x+\\cos x}{2}$ — soʻng $g$ ham chiqadi '
     '(22-masala).',
     'В $\\sin x+\\cos y=f(x)+f(y)+g(x)-g(y)$ при $x=y$: '
     '$\\sin x+\\cos x=2f(x)$, то есть '
     '$f(x)=\\dfrac{\\sin x+\\cos x}{2}$ — затем находится и $g$ '
     '(задача 22).')),

 I('usul', T('Ikkita tenglama tuzib, sistema yechish',
             'Составить систему из двух уравнений'),
   T('$f(x)$ va $f\\bigl(g(x)\\bigr)$ birga qatnashsa, $x\\to g(x)$ '
     'almashtirishni yana bir bor qoʻllang: ikkita chiziqli tenglama '
     'hosil boʻladi.',
     'Если вместе встречаются $f(x)$ и $f\\bigl(g(x)\\bigr)$, примените '
     'подстановку $x\\to g(x)$ ещё раз: получатся два линейных уравнения.'),
   T('$2f(x)+3f\\left(\\dfrac1x\\right)=x$ da $x\\to\\dfrac1x$: '
     '$2f\\left(\\dfrac1x\\right)+3f(x)=\\dfrac1x$. Ikki tenglikdan '
     '$f(x)$ topiladi (16-masala).',
     'В $2f(x)+3f\\left(\\dfrac1x\\right)=x$ заменим $x\\to\\dfrac1x$: '
     '$2f\\left(\\dfrac1x\\right)+3f(x)=\\dfrac1x$. Из двух равенств '
     'находим $f(x)$ (задача 16).')),
]))

# ================================================== C · Juftlik va simmetriya ==
BOLIMLAR.append(dict(kod='C', hue='nt',
 nom=T('Juft va toq funksiyalar, simmetriya',
       'Чётные и нечётные функции, симметрия'),
 izoh=T('Bir nechta variant savoli «$f(t)$ maʼlum, $f(-t)$ ni toping» '
        'koʻrinishida. Bunda $f(x)+f(-x)$ yoki $f(x)\\cdot f(-x)$ ni '
        'hisoblash — deyarli har doim oʻzgarmas chiqadi.',
        'Несколько задач вариантов имеют вид «известно $f(t)$, найдите '
        '$f(-t)$». Тогда считайте $f(x)+f(-x)$ или $f(x)\\cdot f(-x)$ — почти '
        'всегда получается константа.'),
 items=[

 I('tarif', T('Juft va toq funksiya', 'Чётная и нечётная функция'),
   T('$f$ — <b>juft</b>, agar $f(-x)=f(x)$; <b>toq</b>, agar '
     '$f(-x)=-f(x)$ (aniqlanish sohasi nolga nisbatan simmetrik boʻlishi '
     'shart).',
     '$f$ — <b>чётная</b>, если $f(-x)=f(x)$; <b>нечётная</b>, если '
     '$f(-x)=-f(x)$ (область определения обязана быть симметричной '
     'относительно нуля).'),
   T('Koʻphad juft boʻlishi uchun hamma <b>toq</b> darajali koeffitsiyent '
     'nolga teng boʻlishi kerak: $2x^4+(a-11)x^3+1$ juft boʻlsa, '
     '$a=11$ (9-masala).',
     'Многочлен чётен тогда и только тогда, когда все коэффициенты при '
     '<b>нечётных</b> степенях равны нулю: если $2x^4+(a-11)x^3+1$ чётен, '
     'то $a=11$ (задача 9).')),

 I('teorema', T('Toq funksiya nolda nolga teng',
                'Нечётная функция в нуле равна нулю'),
   T('Agar $f$ toq boʻlsa va $0\\in D(f)$ boʻlsa, $f(0)=0$.',
     'Если $f$ нечётна и $0\\in D(f)$, то $f(0)=0$.'),
   T('$f(x)=\\dfrac1a-\\dfrac1{a^x+1}$ toq boʻlsa, $f(0)=\\dfrac1a-\\dfrac12=0$, '
     'demak $a=2$ — parametr bir qatorda topiladi (15-masala).',
     'Если $f(x)=\\dfrac1a-\\dfrac1{a^x+1}$ нечётна, то '
     '$f(0)=\\dfrac1a-\\dfrac12=0$, значит $a=2$ — параметр найден в одну '
     'строку (задача 15).'),
   T('$f(-0)=-f(0)$, yaʼni $f(0)=-f(0)$, demak $2f(0)=0$.',
     '$f(-0)=-f(0)$, то есть $f(0)=-f(0)$, откуда $2f(0)=0$.')),

 I('usul', T('$f(x)+f(-x)$ — oʻzgarmasni qidiring',
             '$f(x)+f(-x)$ — ищите константу'),
   T('$f$ da $2^x$ va $2^{-x}$ birga qatnashsa, $f(x)+f(-x)$ ni hisoblang: '
     'surat va maxraj bir xil koʻpaytuvchiga qisqaradi.',
     'Если в $f$ вместе встречаются $2^x$ и $2^{-x}$, вычислите '
     '$f(x)+f(-x)$: числитель и знаменатель сокращаются на общий множитель.'),
   T('$f(x)=\\dfrac{2^{x+2}+2^{1-x}}{2^x+2^{-x}}$ uchun '
     '$f(x)+f(-x)=\\dfrac{6\\left(2^x+2^{-x}\\right)}{2^x+2^{-x}}=6$, demak '
     '$f(t)=3\\Rightarrow f(-t)=3$ (10-masala).',
     'Для $f(x)=\\dfrac{2^{x+2}+2^{1-x}}{2^x+2^{-x}}$ имеем '
     '$f(x)+f(-x)=6$, поэтому из $f(t)=3$ следует $f(-t)=3$ '
     '(задача 10).'),
   T('Surat: $4\\cdot2^x+2\\cdot2^{-x}$ va $4\\cdot2^{-x}+2\\cdot2^x$; '
     'qoʻshsak $6\\cdot2^x+6\\cdot2^{-x}$ — maxraj bilan bir xil '
     'koʻpaytuvchi.',
     'Числители: $4\\cdot2^x+2\\cdot2^{-x}$ и $4\\cdot2^{-x}+2\\cdot2^x$; '
     'их сумма $6\\left(2^x+2^{-x}\\right)$ — тот же множитель, что в '
     'знаменателе.')),

 I('formula', T('Asosiy juftlik ayniyati', 'Базовое тождество чётности'),
   T('Har qanday $t>0$, $t\\ne1$ uchun '
     '$\\dfrac{1}{1+t^{u}}+\\dfrac{1}{1+t^{-u}}=1$.',
     'Для любых $t>0$, $t\\ne1$: '
     '$\\dfrac{1}{1+t^{u}}+\\dfrac{1}{1+t^{-u}}=1$.'),
   T('Shuning uchun uchta shunday kasrdan tuzilgan $f$ uchun '
     '$f(x)+f\\left(\\dfrac1x\\right)=3$ — $\\lg\\dfrac1x=-\\lg x$ '
     'boʻlgani uchun (14-masala).',
     'Поэтому для $f$, составленной из трёх таких дробей, '
     '$f(x)+f\\left(\\dfrac1x\\right)=3$, так как $\\lg\\dfrac1x=-\\lg x$ '
     '(задача 14).'),
   T('$\\dfrac{1}{1+t^{-u}}=\\dfrac{t^{u}}{t^{u}+1}$, va '
     '$\\dfrac{1}{1+t^{u}}+\\dfrac{t^{u}}{1+t^{u}}=1$.',
     '$\\dfrac{1}{1+t^{-u}}=\\dfrac{t^{u}}{t^{u}+1}$, и '
     '$\\dfrac{1}{1+t^{u}}+\\dfrac{t^{u}}{1+t^{u}}=1$.')),

 I('usul', T('Simmetrik juftlab yigʻish', 'Суммирование симметричными парами'),
   T('$f(x)+f(c-x)=k$ oʻzgarmas boʻlsa, '
     '$f(0)+f(1)+\\cdots+f(c)$ yigʻindisi juftlab hisoblanadi.',
     'Если $f(x)+f(c-x)=k$ — константа, то сумма '
     '$f(0)+f(1)+\\cdots+f(c)$ считается разбиением на пары.'),
   T('Bu usul «$f\\left(\\tfrac1{2025}\\right)+\\cdots+'
     'f\\left(\\tfrac{2024}{2025}\\right)$» tipidagi savollarni bir qatorga '
     'aylantiradi (21-masala).',
     'Приём превращает задачи вида '
     '«$f\\left(\\tfrac1{2025}\\right)+\\cdots+'
     'f\\left(\\tfrac{2024}{2025}\\right)$» в одну строку (задача 21).')),
]))

# ======================================= D · Kompozitsiya va teskari funksiya ==
BOLIMLAR.append(dict(kod='D', hue='comb',
 nom=T('Kompozitsiya va teskari funksiya',
       'Композиция и обратная функция'),
 izoh=T('Jadval bilan berilgan funksiyalar savoli aynan shu boʻlimga tegishli: '
        'qiymatni topish emas, <b>qaysi</b> katak mos kelishini aniqlash '
        'kerak.',
        'Задача с функциями, заданными таблицей, относится именно сюда: надо '
        'не вычислить значение, а понять, <b>какая</b> клетка подходит.'),
 items=[

 I('tarif', T('Kompozitsiya', 'Композиция'),
   T('$(g\\circ f)(x)=g\\bigl(f(x)\\bigr)$ — avval $f$, keyin $g$. '
     'Tartib muhim: odatda $g\\circ f\\ne f\\circ g$.',
     '$(g\\circ f)(x)=g\\bigl(f(x)\\bigr)$ — сначала $f$, потом $g$. Порядок '
     'важен: обычно $g\\circ f\\ne f\\circ g$.'),
   T('$h(x)=g\\bigl(f(x)\\bigr)$ jadvalida $h(2)=0$ boʻlsa, $g$ ning qaysi '
     'kataki $0$ ga teng ekanini qarang: $g(3)=0$, demak $f(2)=3$. '
     'Jadvalni shunday «teskari oʻqish» — asosiy usul (18-masala).',
     'Если в таблице $h(x)=g\\bigl(f(x)\\bigr)$ дано $h(2)=0$, посмотрите, в '
     'какой клетке $g$ стоит $0$: $g(3)=0$, значит $f(2)=3$. Такое '
     '«обратное чтение» таблицы и есть основной приём (задача 18).')),

 I('usul', T('Jadvalni teskari oʻqish', 'Обратное чтение таблицы'),
   T('$h(a)=b$ va $h=g\\circ f$ boʻlsa, $g$ jadvalida $b$ qiymatini '
     'qidiring: uning argumenti $f(a)$ ga teng.',
     'Если $h(a)=b$ и $h=g\\circ f$, найдите значение $b$ в таблице $g$: '
     'его аргумент и есть $f(a)$.'),
   T('Bu yoʻl bilan jadvaldagi soʻroq belgilari zanjir boʻyicha '
     'toʻldiriladi: avval $f$ ning nomaʼlum kataklari, soʻng $g$ '
     'niki (18-masala).',
     'Так вопросительные знаки в таблице заполняются по цепочке: сначала '
     'неизвестные клетки $f$, потом $g$ (задача 18).')),

 I('usul', T('Chiziqli funksiyani ikki nuqtadan tiklash',
             'Восстановление линейной функции по двум точкам'),
   T('$q(x)=kx+m$ noma’lum boʻlsa, ikkita qiymat yetarli: $k$ va $m$ uchun '
     'ikkita chiziqli tenglama.',
     'Если $q(x)=kx+m$ неизвестна, хватает двух значений: два линейных '
     'уравнения на $k$ и $m$.'),
   T('$p(x)=q(30x)+33$, $q(5)=16$, $p(5)=629$: ikkinchisidan '
     '$q(150)=596$, demak $k=\\dfrac{596-16}{150-5}=4$ va $m=-4$; '
     'shundan $p(x)=120x+29$ (19-masala).',
     '$p(x)=q(30x)+33$, $q(5)=16$, $p(5)=629$: из второго $q(150)=596$, '
     'значит $k=\\dfrac{596-16}{145}=4$ и $m=-4$; отсюда '
     '$p(x)=120x+29$ (задача 19).')),

 I('tarif', T('Teskari funksiya', 'Обратная функция'),
   T('$f$ oʻzaro bir qiymatli boʻlsa, $f^{-1}$ shartlar bilan aniqlanadi: '
     '$f^{-1}\\bigl(f(x)\\bigr)=x$ va $f\\bigl(f^{-1}(y)\\bigr)=y$.',
     'Если $f$ взаимно однозначна, то $f^{-1}$ определяется условиями '
     '$f^{-1}\\bigl(f(x)\\bigr)=x$ и $f\\bigl(f^{-1}(y)\\bigr)=y$.'),
   T('$f^{-1}$ grafigi $f$ grafigining $y=x$ toʻgʻri chiziqqa nisbatan '
     'simmetrik aksi; shu sababli kesishish nuqtalari koʻpincha aynan '
     '$y=x$ ustida yotadi.',
     'График $f^{-1}$ симметричен графику $f$ относительно прямой $y=x$; '
     'поэтому точки пересечения часто лежат именно на $y=x$.')),
]))

# ============================================ E · Chiziqli va kvadrat funksiya ==
BOLIMLAR.append(dict(kod='E', hue='alg',
 nom=T('Chiziqli va kvadrat funksiyalar',
       'Линейная и квадратичная функции'),
 izoh=T('Grafik savollari kamdan-kam, lekin eng katta yoki eng kichik qiymat '
        'soʻralsa, toʻliq kvadrat ajratish eng ishonchli yoʻl.',
        'Задач на график мало, но если спрашивают наибольшее или наименьшее '
        'значение, надёжнее всего выделить полный квадрат.'),
 items=[

 I('formula', T('Uchi va eng katta/kichik qiymat', 'Вершина и экстремум'),
   T('$f(x)=ax^2+bx+c=a\\left(x+\\dfrac{b}{2a}\\right)^2+'
     'c-\\dfrac{b^2}{4a}$. Uchi $x_0=-\\dfrac{b}{2a}$; $a>0$ da eng kichik, '
     '$a<0$ da eng katta qiymat.',
     '$f(x)=ax^2+bx+c=a\\left(x+\\dfrac{b}{2a}\\right)^2+c-\\dfrac{b^2}{4a}$. '
     'Вершина $x_0=-\\dfrac{b}{2a}$; при $a>0$ — минимум, при $a<0$ — '
     'максимум.'),
   T('Kesmada eng katta qiymat qidirilsa, <b>uch va ikkala chet</b> — '
     'uchtasini ham solishtiring.',
     'Если экстремум ищется на отрезке, сравнивайте <b>вершину и оба '
     'конца</b> — все три значения.')),

 I('xossa', T('Parabolaning simmetriyasi', 'Симметрия параболы'),
   T('$f(x_1)=f(x_2)$ va $x_1\\ne x_2$ boʻlsa, uch '
     '$x_0=\\dfrac{x_1+x_2}{2}$ da. Bu ildizlar haqida hech narsa '
     'bilmasdan ishlaydi.',
     'Если $f(x_1)=f(x_2)$ при $x_1\\ne x_2$, то вершина в '
     '$x_0=\\dfrac{x_1+x_2}{2}$. Работает, ничего не зная о корнях.'),
   T('$f(2)=f(8)$ boʻlsa, uch $x_0=5$; demak $f(1)=f(9)$, $f(4)=f(6)$ '
     'va hokazo.',
     'Если $f(2)=f(8)$, то $x_0=5$; значит $f(1)=f(9)$, $f(4)=f(6)$ и т. д.')),

 I('usul', T('Chiziqli funksiyani shartdan aniqlash',
             'Определение линейной функции из условия'),
   T('«$f$ chiziqli» degan shart berilsa, darhol $f(x)=kx+m$ deb yozing '
     'va shartni koeffitsiyentlar uchun tenglamaga aylantiring.',
     'Если сказано «$f$ линейна», сразу пишите $f(x)=kx+m$ и превращайте '
     'условие в уравнения на коэффициенты.'),
   T('$f(x+1)-f(x)=k$ — chiziqli funksiyaning ayirmasi oʻzgarmas; '
     'teskarisi ham toʻgʻri.',
     '$f(x+1)-f(x)=k$ — разность линейной функции постоянна; верно и '
     'обратное.')),

 I('usul', T('Koeffitsiyentlarni tenglashtirish',
             'Приравнивание коэффициентов'),
   T('Ikki koʻphad <b>barcha</b> $x$ larda teng boʻlsa, bir xil darajali '
     'koeffitsiyentlari teng.',
     'Если два многочлена равны при <b>всех</b> $x$, то равны их '
     'коэффициенты при одинаковых степенях.'),
   T('$f(x)=ax^2+bx+c$ va $f(x+1)-f(x)=4x+2$ boʻlsa, '
     '$2ax+a+b=4x+2$, demak $a=2$, $b=0$ (17-masala).',
     'Если $f(x)=ax^2+bx+c$ и $f(x+1)-f(x)=4x+2$, то $2ax+a+b=4x+2$, '
     'значит $a=2$, $b=0$ (задача 17).')),
]))

# ==================================== F · Rekurrent va davriy funksiyalar ======
BOLIMLAR.append(dict(kod='F', hue='seq',
 nom=T('Rekurrent qadam va davriylik', 'Рекуррентный шаг и периодичность'),
 izoh=T('«$f(x)=1-f(x-1)$, $f(4)=6$, $f(10)$?» — bunday savolda formulani '
        'emas, <b>davrni</b> qidiring: qadamni ikki-uch marta qoʻllash '
        'kifoya.',
        '«$f(x)=1-f(x-1)$, $f(4)=6$, найти $f(10)$» — здесь ищут не формулу, '
        'а <b>период</b>: достаточно применить шаг два-три раза.'),
 items=[

 I('usul', T('Qadamni ikki marta qoʻllash', 'Применить шаг дважды'),
   T('$f(x)=c-f(x-1)$ koʻrinishidagi shartda '
     '$f(x)=c-\\bigl(c-f(x-2)\\bigr)=f(x-2)$ — funksiya davri $2$.',
     'В условии вида $f(x)=c-f(x-1)$ имеем '
     '$f(x)=c-\\bigl(c-f(x-2)\\bigr)=f(x-2)$ — период равен $2$.'),
   T('$f(4)=6$ boʻlsa, $10-4=6$ juft, demak $f(10)=f(4)=6$ '
     '(12-masala).',
     'Если $f(4)=6$, то $10-4=6$ чётно, значит $f(10)=f(4)=6$ '
     '(задача 12).'),
   T('$f(x)+f(x-1)=c$ ni ikki qoʻshni indeks uchun yozib ayiring: '
     '$f(x)-f(x-2)=0$.',
     'Запишите $f(x)+f(x-1)=c$ для двух соседних индексов и вычтите: '
     '$f(x)-f(x-2)=0$.')),

 I('teorema', T('Davr va qoldiq', 'Период и остаток'),
   T('$f$ ning davri $p$ boʻlsa, $f(n)$ faqat $n\\bmod p$ ga bogʻliq.',
     'Если период $f$ равен $p$, то $f(n)$ зависит только от $n\\bmod p$.'),
   T('Davri $2$ boʻlgan funksiyada $f(2025)$ ni bilish uchun $2025$ toq '
     'ekani yetarli.',
     'У функции с периодом $2$ для $f(2025)$ достаточно знать, что $2025$ '
     'нечётно.')),

 I('usul', T('Zanjirni koʻpaytmaga aylantirish',
             'Свернуть цепочку в произведение'),
   T('$f(2n)=n\\,f(n)$ kabi <b>koʻpaytiruvchi</b> qadamda zanjirni yozib '
     'chiqing: hamma koʻpaytuvchilar birga yigʻiladi.',
     'При <b>мультипликативном</b> шаге вроде $f(2n)=n\\,f(n)$ выпишите '
     'цепочку: все множители собираются вместе.'),
   T('$f\\left(2^k\\right)=2^{k-1}f\\left(2^{k-1}\\right)$, demak '
     '$f\\left(2^{10}\\right)=2^{9}\\cdot2^{8}\\cdots2^{1}\\cdot f(2)='
     '2^{1+2+\\cdots+9}=2^{45}$ (20-masala).',
     '$f\\left(2^k\\right)=2^{k-1}f\\left(2^{k-1}\\right)$, поэтому '
     '$f\\left(2^{10}\\right)=2^{1+2+\\cdots+9}=2^{45}$ (задача 20).'),
   T('$n=2^{k-1}$ qoʻysak $f(2^k)=2^{k-1}f(2^{k-1})$; $k=1$ da '
     '$f(2)=1\\cdot f(1)=1$. Darajalar yigʻindisi '
     '$1+2+\\cdots+9=45$.',
     'Подставив $n=2^{k-1}$, получаем $f(2^k)=2^{k-1}f(2^{k-1})$; при $k=1$ '
     '$f(2)=f(1)=1$. Сумма показателей $1+2+\\cdots+9=45$.')),

 I('usul', T('Ikki oʻzgaruvchili rekurrentni yopiq koʻrinishga keltirish',
             'Свести двумерную рекурренту к замкнутому виду'),
   T('$f(m+1;n)=f(m;n)+m$ va $f(m;n+1)=f(m;n)-n$ boʻlsa, avval bitta '
     'oʻzgaruvchi boʻyicha, keyin ikkinchisi boʻyicha yigʻing.',
     'Если $f(m+1;n)=f(m;n)+m$ и $f(m;n+1)=f(m;n)-n$, суммируйте сначала по '
     'одной переменной, затем по другой.'),
   T('Natijada $f(m;n)=\\dfrac{m(m-1)}{2}-\\dfrac{n(n-1)}{2}$ — endi '
     '$f(p;q)=2025$ sof sonlar nazariyasi masalasiga aylanadi '
     '(25-masala).',
     'В итоге $f(m;n)=\\dfrac{m(m-1)}{2}-\\dfrac{n(n-1)}{2}$ — и '
     '$f(p;q)=2025$ превращается в чисто теоретико-числовую задачу '
     '(задача 25).')),
]))

# ========================================= G · Natural argumentli funksiyalar ==
BOLIMLAR.append(dict(kod='G', hue='nt',
 nom=T('Natural argumentli funksiyalar', 'Функции натурального аргумента'),
 izoh=T('$f\\colon\\mathbb{N}\\to\\mathbb{N}$ turidagi shartlarda qiymatlarni '
        'kichik $n$ lardan boshlab yozib chiqish — eng tez yoʻl.',
        'В условиях вида $f\\colon\\mathbb{N}\\to\\mathbb{N}$ быстрее всего '
        'выписать значения начиная с малых $n$.'),
 items=[

 I('usul', T('Kichik qiymatlardan jadval tuzish',
             'Таблица малых значений'),
   T('$f(1),f(2),f(3),\\ldots$ ni ketma-ket hisoblang: qonuniyat '
     'odatda uchinchi-toʻrtinchi qadamda koʻrinadi.',
     'Вычисляйте $f(1),f(2),f(3),\\ldots$ подряд: закономерность обычно '
     'видна уже на третьем-четвёртом шаге.'),
   T('$f(2n)=n f(n)$, $f(1)=1$: $f(2)=1$, $f(4)=2$, $f(8)=8$, '
     '$f(16)=64$ — darajalar $0,1,3,6$, yaʼni uchburchak sonlar '
     '(20-masala).',
     '$f(2n)=nf(n)$, $f(1)=1$: $f(2)=1$, $f(4)=2$, $f(8)=8$, $f(16)=64$ — '
     'показатели $0,1,3,6$, то есть треугольные числа (задача 20).')),

 I('usul', T('Multiplikativlik', 'Мультипликативность'),
   T('$f(mn)=f(m)f(n)$ boʻlsa, $f$ ni tub sonlardagi qiymatlari toʻliq '
     'aniqlaydi.',
     'Если $f(mn)=f(m)f(n)$, то $f$ полностью определяется значениями на '
     'простых числах.'),
   T('$f(1)$ ni topish uchun $m=n=1$ qoʻying: $f(1)=f(1)^2$, demak '
     '$f(1)=1$ (agar $f\\not\\equiv0$).',
     'Чтобы найти $f(1)$, положите $m=n=1$: $f(1)=f(1)^2$, значит $f(1)=1$ '
     '(если $f\\not\\equiv0$).')),

 I('usul', T('Yechimlar sonini koʻpaytuvchilarga ajratishga keltirish',
             'Свести число решений к разложению на множители'),
   T('$\\dfrac{m(m-1)}{2}-\\dfrac{n(n-1)}{2}=N$ tenglamani '
     '$(m-n)(m+n-1)=2N$ koʻrinishiga keltiring — endi bu boʻluvchilarni '
     'sanash masalasi.',
     'Уравнение $\\dfrac{m(m-1)}{2}-\\dfrac{n(n-1)}{2}=N$ приведите к виду '
     '$(m-n)(m+n-1)=2N$ — это уже задача о подсчёте делителей.'),
   T('$m-n$ va $m+n-1$ ning yigʻindisi $2m-1$ — toq, demak ular har doim '
     'har xil juftlikda; $2N=4050=2\\cdot3^4\\cdot5^2$ da $2$ bitta boʻlgani '
     'uchun barcha ajratishlar yaroqli (25-masala).',
     'Сумма $m-n$ и $m+n-1$ равна $2m-1$ — нечётна, значит они всегда разной '
     'чётности; в $2N=4050=2\\cdot3^4\\cdot5^2$ двойка одна, поэтому годятся '
     'все разложения (задача 25).'),
   T('$m=\\dfrac{a+b+1}{2}$, $n=\\dfrac{b-a+1}{2}$, bunda $ab=2N$. '
     '$n\\ge1$ sharti $a<b$ ni beradi, demak yaroqli ajratishlar soni '
     '$\\dfrac{d(2N)}{2}$.',
     '$m=\\dfrac{a+b+1}{2}$, $n=\\dfrac{b-a+1}{2}$, где $ab=2N$. Условие '
     '$n\\ge1$ даёт $a<b$, поэтому подходящих разложений '
     '$\\dfrac{d(2N)}{2}$.')),
]))


def P(savol, javob, yechim, bolim, manba='', rasm=None):
    return dict(savol=savol, javob=javob, yechim=yechim, bolim=bolim,
                manba=manba, rasm=rasm)


DARAJALAR = [
 dict(kod='oson', nom=T('Oson', 'Лёгкие'), hue='easy',
  izoh=T('Bitta almashtirish yoki bitta taʼrif.',
         'Одна подстановка или одно определение.'),
  items=[

  P(T('$f(x)=3x-5$ boʻlsa, $f(4)$ ni toping.',
      'Пусть $f(x)=3x-5$. Найдите $f(4)$.'),
    T('$7$', '$7$'),
    T('$f(4)=12-5=7$.', '$f(4)=12-5=7$.'), 'A'),

  P(T('$f(x)=x^2+1$ va $g(x)=2x$ boʻlsa, $f\\bigl(g(3)\\bigr)$ ni toping.',
      'Пусть $f(x)=x^2+1$ и $g(x)=2x$. Найдите $f\\bigl(g(3)\\bigr)$.'),
    T('$37$', '$37$'),
    T('$g(3)=6$, demak $f(6)=36+1=37$.',
      '$g(3)=6$, значит $f(6)=36+1=37$.'), 'D'),

  P(T('$f(x)=\\dfrac{1}{x-2}$ funksiyaning aniqlanish sohasini toping.',
      'Найдите область определения функции $f(x)=\\dfrac{1}{x-2}$.'),
    T('$x\\ne2$', '$x\\ne2$'),
    T('Maxraj nolga teng boʻlmasligi kerak: $x-2\\ne0$.',
      'Знаменатель не должен обращаться в нуль: $x-2\\ne0$.'), 'A'),

  P(T('$f(x)=x^3-x$ juftmi, toqmi?',
      'Чётна или нечётна функция $f(x)=x^3-x$?'),
    T('Toq', 'Нечётна'),
    T('$f(-x)=-x^3+x=-\\left(x^3-x\\right)=-f(x)$.',
      '$f(-x)=-x^3+x=-f(x)$.'), 'C'),

  P(T('$y=2+\\sqrt{x}$ funksiyaning qiymatlar sohasini toping.',
      'Найдите область значений функции $y=2+\\sqrt{x}$.'),
    T('$[2;+\\infty)$', '$[2;+\\infty)$'),
    T('$\\sqrt{x}\\ge0$ va $x=0$ da tenglik boʻladi, demak '
      '$y\\ge2$ va $y=2$ erishiladi.',
      '$\\sqrt{x}\\ge0$, причём при $x=0$ достигается равенство, поэтому '
      '$y\\ge2$ и значение $2$ достигается.'), 'A'),

  P(T('$f(x+1)=x^2$ boʻlsa, $f(3)$ ni toping.',
      'Пусть $f(x+1)=x^2$. Найдите $f(3)$.'),
    T('$4$', '$4$'),
    T('$x+1=3\\Rightarrow x=2$, demak $f(3)=2^2=4$.',
      '$x+1=3\\Rightarrow x=2$, значит $f(3)=4$.'), 'B'),
 ]),

 dict(kod='orta', nom=T('Oʻrtacha', 'Средние'), hue='med',
  izoh=T('Variantlardagi asosiy daraja: bitta gʻoya, soʻng toza hisob.',
         'Основной уровень вариантов: одна идея, затем аккуратный счёт.'),
  items=[

  P(T('$f(1-2x)=1-2x^2$ boʻlsa, '
      '$f\\left(-\\dfrac12\\right)+f(0)+f\\left(\\dfrac12\\right)$ '
      'yigʻindini hisoblang.',
      'Пусть $f(1-2x)=1-2x^2$. Вычислите '
      '$f\\left(-\\dfrac12\\right)+f(0)+f\\left(\\dfrac12\\right)$.'),
    T('$1\\dfrac14$', '$1\\dfrac14$'),
    T('<b>Almashtirish.</b> $u=1-2x\\Rightarrow x=\\dfrac{1-u}{2}$, demak '
      '$f(u)=1-2\\cdot\\dfrac{(1-u)^2}{4}=1-\\dfrac{(1-u)^2}{2}$.<br>'
      '$f\\left(-\\tfrac12\\right)=1-\\dfrac{(1{,}5)^2}{2}=1-1{,}125='
      '-\\dfrac18$;<br>'
      '$f(0)=1-\\dfrac12=\\dfrac12$;<br>'
      '$f\\left(\\tfrac12\\right)=1-\\dfrac{(0{,}5)^2}{2}=\\dfrac78$.<br>'
      'Yigʻindi: $-\\dfrac18+\\dfrac12+\\dfrac78=\\dfrac{-1+4+7}{8}='
      '\\dfrac{10}{8}=1\\dfrac14$.',
      '<b>Подстановка.</b> $u=1-2x\\Rightarrow x=\\dfrac{1-u}{2}$, поэтому '
      '$f(u)=1-\\dfrac{(1-u)^2}{2}$.<br>'
      '$f\\left(-\\tfrac12\\right)=-\\dfrac18$, $f(0)=\\dfrac12$, '
      '$f\\left(\\tfrac12\\right)=\\dfrac78$.<br>'
      'Сумма: $\\dfrac{-1+4+7}{8}=\\dfrac54=1\\dfrac14$.'),
    'B', '9-sinf · 2024 №13'),

  P(T('Agar $f(1-x)=1-x^2$ boʻlsa, $f(-1)+f(0)+f(1)$ yigʻindini toping.',
      'Пусть $f(1-x)=1-x^2$. Найдите $f(-1)+f(0)+f(1)$.'),
    T('$-2$', '$-2$'),
    T('$u=1-x\\Rightarrow x=1-u$, demak '
      '$f(u)=1-(1-u)^2=2u-u^2$.<br>'
      '$f(-1)=-2-1=-3$, $f(0)=0$, $f(1)=2-1=1$.<br>'
      'Yigʻindi $-3+0+1=-2$.<br>'
      '<i>Tekshirish:</i> $f(1-x)=2(1-x)-(1-x)^2=(1-x)\\bigl(2-(1-x)\\bigr)='
      '(1-x)(1+x)=1-x^2$ ✓',
      '$u=1-x\\Rightarrow x=1-u$, поэтому $f(u)=2u-u^2$.<br>'
      '$f(-1)=-3$, $f(0)=0$, $f(1)=1$; сумма равна $-2$.<br>'
      '<i>Проверка:</i> $f(1-x)=(1-x)(1+x)=1-x^2$ ✓'),
    'B', '11-sinf · 2024 №16'),

  P(T('$f(x)=2x^4+(a-11)x^3+1$ funksiya juft funksiya boʻlsa, $f(1)$ ning '
      'qiymatini toping.',
      'Функция $f(x)=2x^4+(a-11)x^3+1$ чётна. Найдите $f(1)$.'),
    T('$3$', '$3$'),
    T('Juft funksiyada toq darajali had boʻlmaydi: '
      '$f(-x)=2x^4-(a-11)x^3+1$, va $f(-x)=f(x)$ '
      'shartidan $2(a-11)x^3=0$ barcha $x$ da, demak $a=11$.<br>'
      'U holda $f(x)=2x^4+1$ va $f(1)=2+1=3$.',
      'У чётной функции нет членов нечётной степени: из $f(-x)=f(x)$ следует '
      '$2(a-11)x^3=0$ при всех $x$, значит $a=11$.<br>'
      'Тогда $f(x)=2x^4+1$ и $f(1)=3$.'),
    'C', '11-sinf · 2024 №7'),

  P(T('Berilgan $f(x)=\\dfrac{2^{x+2}+2^{1-x}}{2^{x}+2^{-x}}$ funksiya uchun '
      '$f(t)=3$ boʻlsa, $f(-t)$ ning qiymatini toping.',
      'Для функции $f(x)=\\dfrac{2^{x+2}+2^{1-x}}{2^{x}+2^{-x}}$ известно, '
      'что $f(t)=3$. Найдите $f(-t)$.'),
    T('$3$', '$3$'),
    T('<b>Simmetriya.</b> Surat: $2^{x+2}+2^{1-x}=4\\cdot2^x+2\\cdot2^{-x}$, '
      'maxraj $2^x+2^{-x}$.<br>'
      '$f(-x)=\\dfrac{4\\cdot2^{-x}+2\\cdot2^{x}}{2^{-x}+2^{x}}$ — maxraj '
      'oʻzgarmaydi.<br>'
      '$f(x)+f(-x)=\\dfrac{6\\cdot2^x+6\\cdot2^{-x}}{2^x+2^{-x}}=6$.<br>'
      'Demak $f(-t)=6-f(t)=6-3=3$.<br>'
      '<i>Izoh:</i> javob $t$ ga bogʻliq emas — bu tekshirish uchun yaxshi '
      'belgi.',
      '<b>Симметрия.</b> Числитель $4\\cdot2^x+2\\cdot2^{-x}$, знаменатель '
      '$2^x+2^{-x}$.<br>'
      'При замене $x\\to-x$ знаменатель не меняется, а сумма числителей '
      'равна $6\\left(2^x+2^{-x}\\right)$, поэтому $f(x)+f(-x)=6$.<br>'
      'Значит $f(-t)=6-3=3$.'),
    'C', '9-sinf · 2025/26-A №12'),

  P(T('$f(x)$ funksiya uchun $f(0)\\cdot\\bigl(f(x)+2\\bigr)=4x-1$ tenglik '
      'oʻrinli boʻlsa, $f(-1)$ ni toping.',
      'Для функции $f(x)$ выполнено $f(0)\\cdot\\bigl(f(x)+2\\bigr)=4x-1$. '
      'Найдите $f(-1)$.'),
    T('$3$', '$3$'),
    T('<b>$x=0$ qoʻyamiz:</b> $f(0)\\bigl(f(0)+2\\bigr)=-1$, yaʼni '
      '$f(0)^2+2f(0)+1=0$, demak $\\bigl(f(0)+1\\bigr)^2=0$ va '
      '$f(0)=-1$.<br>'
      'Endi $-1\\cdot\\bigl(f(x)+2\\bigr)=4x-1$, demak '
      '$f(x)=-4x-1$.<br>'
      '$f(-1)=4-1=3$.<br>'
      '<i>Tekshirish:</i> $f(0)=-1$ ✓ va '
      '$-1\\cdot(-4x-1+2)=4x-1$ ✓',
      '<b>Подставим $x=0$:</b> $\\bigl(f(0)+1\\bigr)^2=0$, значит '
      '$f(0)=-1$.<br>'
      'Тогда $-\\bigl(f(x)+2\\bigr)=4x-1$, откуда $f(x)=-4x-1$ и '
      '$f(-1)=3$.<br>'
      '<i>Проверка:</i> $f(0)=-1$ ✓'),
    'B', '10-sinf · 2024 №18'),

  P(T('$f$ funksiya uchun $f(x)=1-f(x-1)$ va $f(4)=6$ boʻlsa, $f(10)$ ning '
      'qiymatini toping.',
      'Для функции $f$ выполнено $f(x)=1-f(x-1)$ и $f(4)=6$. Найдите '
      '$f(10)$.'),
    T('$6$', '$6$'),
    T('<b>Davr $2$.</b> $f(x)=1-f(x-1)$ va '
      '$f(x-1)=1-f(x-2)$, demak '
      '$f(x)=1-\\bigl(1-f(x-2)\\bigr)=f(x-2)$.<br>'
      '$10-4=6$ — juft, demak $f(10)=f(8)=f(6)=f(4)=6$.<br>'
      '<i>Tekshirish:</i> $f(5)=1-6=-5$, $f(6)=1-(-5)=6$ ✓',
      '<b>Период $2$.</b> Из $f(x)=1-f(x-1)$ и $f(x-1)=1-f(x-2)$ следует '
      '$f(x)=f(x-2)$.<br>'
      'Так как $10-4=6$ чётно, $f(10)=f(4)=6$.<br>'
      '<i>Проверка:</i> $f(5)=-5$, $f(6)=6$ ✓'),
    'F', '11-sinf · 2025/26-A №11'),

  P(T('$y=\\dfrac{12}{\\sin x+5}$ funksiyaning qiymatlari sohasini toping.',
      'Найдите область значений функции $y=\\dfrac{12}{\\sin x+5}$.'),
    T('$[2;3]$', '$[2;3]$'),
    T('<b>Ichkaridan tashqariga.</b> $\\sin x\\in[-1;1]$, demak '
      '$\\sin x+5\\in[4;6]$ — ikkala chet ham erishiladi '
      '($\\sin x=\\pm1$ boʻladi).<br>'
      '$t\\mapsto\\dfrac{12}{t}$ musbat $t$ larda kamayuvchi, shuning uchun '
      'chetlar oʻrin almashadi:<br>'
      '$y\\in\\left[\\dfrac{12}{6};\\dfrac{12}{4}\\right]=[2;3]$.<br>'
      '<i>Xato ogohlantirishi:</i> $\\dfrac{12}{4}=3$ va $\\dfrac{12}{6}=2$ — '
      'ularni almashtirib yubormang.',
      '<b>Изнутри наружу.</b> $\\sin x\\in[-1;1]$, значит знаменатель '
      '$\\in[4;6]$, и оба конца достигаются.<br>'
      'Функция $\\dfrac{12}{t}$ на положительных $t$ убывает, поэтому концы '
      'меняются местами: $y\\in[2;3]$.'),
    'A', '10-sinf · 2024 №6'),

  P(T('Agar $f(x)=\\dfrac{1}{1+2^{\\lg x}}+\\dfrac{1}{1+4^{\\lg x}}+'
      '\\dfrac{1}{1+8^{\\lg x}}$ boʻlsa, '
      '$f(x)+f\\!\\left(\\dfrac1x\\right)$ yigʻindining qiymatini toping.',
      'Пусть $f(x)=\\dfrac{1}{1+2^{\\lg x}}+\\dfrac{1}{1+4^{\\lg x}}+'
      '\\dfrac{1}{1+8^{\\lg x}}$. Найдите '
      '$f(x)+f\\!\\left(\\dfrac1x\\right)$.'),
    T('$3$', '$3$'),
    T('<b>Kalit ayniyat.</b> Har qanday $s$ uchun '
      '$\\dfrac{1}{1+s}+\\dfrac{1}{1+\\frac1s}='
      '\\dfrac{1}{1+s}+\\dfrac{s}{s+1}=1$.<br>'
      '$\\lg\\dfrac1x=-\\lg x$, demak $f\\left(\\dfrac1x\\right)$ da har bir '
      'kasrning asosi teskarisiga aylanadi:<br>'
      '$2^{-\\lg x}=\\dfrac{1}{2^{\\lg x}}$ va hokazo.<br>'
      'Uchta juft, har biri $1$ beradi: '
      '$f(x)+f\\left(\\dfrac1x\\right)=3$.<br>'
      '<i>Tekshirish:</i> $x=1$ da $\\lg x=0$, hamma kasr '
      '$\\dfrac12$, demak $f(1)=\\dfrac32$ va yigʻindi $3$ ✓',
      '<b>Ключевое тождество.</b> Для любого $s>0$: '
      '$\\dfrac{1}{1+s}+\\dfrac{1}{1+\\frac1s}=1$.<br>'
      'Так как $\\lg\\dfrac1x=-\\lg x$, каждое основание переходит в '
      'обратное, и три пары дают $3$.<br>'
      '<i>Проверка:</i> при $x=1$ имеем $f(1)=\\dfrac32$, сумма равна $3$ ✓'),
    'C', '10-sinf · 2025/26-A №12'),
 ]),
]

DARAJALAR += [
 dict(kod='qiyin', nom=T('Qiyin', 'Трудные'), hue='hard',
  izoh=T('Bir nechta qadam yoki nostandart almashtirish.',
         'Несколько шагов или нестандартная подстановка.'),
  items=[

  P(T('Haqiqiy musbat $a$ son uchun $f(x)=\\dfrac1a-\\dfrac{1}{a^{x}+1}$ '
      'funksiya toq funksiya boʻlsa, ushbu funksiyaning qiymatlar '
      'toʻplamini aniqlang.',
      'Функция $f(x)=\\dfrac1a-\\dfrac{1}{a^{x}+1}$ ($a>0$) нечётна. '
      'Определите её область значений.'),
    T('$\\left(-\\dfrac12;\\dfrac12\\right)$',
      '$\\left(-\\dfrac12;\\dfrac12\\right)$'),
    T('<b>1. Parametrni topamiz.</b> Toq funksiya nolda nolga teng: '
      '$f(0)=\\dfrac1a-\\dfrac12=0$, demak $a=2$.<br>'
      '<b>2. Tekshiramiz.</b> $f(x)=\\dfrac12-\\dfrac{1}{2^x+1}$ va '
      '$f(-x)=\\dfrac12-\\dfrac{1}{2^{-x}+1}='
      '\\dfrac12-\\dfrac{2^x}{1+2^x}$.<br>'
      '$f(x)+f(-x)=1-\\dfrac{1+2^x}{1+2^x}=0$ ✓ — haqiqatan toq.<br>'
      '<b>3. Qiymatlar sohasi.</b> $2^x\\in(0;+\\infty)$, demak '
      '$2^x+1\\in(1;+\\infty)$ va '
      '$\\dfrac{1}{2^x+1}\\in(0;1)$.<br>'
      'Shundan $f(x)=\\dfrac12-\\dfrac{1}{2^x+1}\\in'
      '\\left(-\\dfrac12;\\dfrac12\\right)$.<br>'
      'Chetlari <b>olinmaydi</b>: $2^x$ hech qachon $0$ ham, $+\\infty$ ham '
      'boʻlmaydi.',
      '<b>1. Параметр.</b> Нечётная функция в нуле равна нулю: '
      '$\\dfrac1a-\\dfrac12=0$, значит $a=2$.<br>'
      '<b>2. Проверка.</b> $f(x)+f(-x)=1-\\dfrac{1+2^x}{1+2^x}=0$ ✓<br>'
      '<b>3. Область значений.</b> $2^x+1\\in(1;+\\infty)$, поэтому '
      '$\\dfrac{1}{2^x+1}\\in(0;1)$ и '
      '$f(x)\\in\\left(-\\dfrac12;\\dfrac12\\right)$ — концы не '
      'достигаются.'),
    'C', '10-sinf · 2025/26-B №4'),

  P(T('$2f(x)+3f\\left(\\dfrac1x\\right)=x$ ($x\\ne0$) boʻlsa, $f(x)$ ni '
      'toping.',
      'Пусть $2f(x)+3f\\left(\\dfrac1x\\right)=x$ при $x\\ne0$. Найдите '
      '$f(x)$.'),
    T('$f(x)=\\dfrac{3}{5x}-\\dfrac{2x}{5}$',
      '$f(x)=\\dfrac{3}{5x}-\\dfrac{2x}{5}$'),
    T('<b>Sistema tuzamiz.</b> Berilgan:<br>'
      '$2f(x)+3f\\left(\\tfrac1x\\right)=x$ — (1).<br>'
      '$x\\to\\dfrac1x$ almashtirsak: '
      '$2f\\left(\\tfrac1x\\right)+3f(x)=\\dfrac1x$ — (2).<br>'
      '$(1)\\cdot2-(2)\\cdot3$: '
      '$4f(x)-9f(x)=2x-\\dfrac3x$, yaʼni '
      '$-5f(x)=2x-\\dfrac3x$.<br>'
      '$f(x)=\\dfrac{3}{5x}-\\dfrac{2x}{5}$.<br>'
      '<i>Tekshirish ($x=1$):</i> $f(1)=\\dfrac35-\\dfrac25=\\dfrac15$, va '
      '$2\\cdot\\dfrac15+3\\cdot\\dfrac15=1$ ✓',
      '<b>Система.</b> (1) $2f(x)+3f\\left(\\tfrac1x\\right)=x$; заменой '
      '$x\\to\\dfrac1x$ получаем (2) '
      '$2f\\left(\\tfrac1x\\right)+3f(x)=\\dfrac1x$.<br>'
      '$2\\cdot(1)-3\\cdot(2)$ даёт $-5f(x)=2x-\\dfrac3x$, откуда '
      '$f(x)=\\dfrac{3}{5x}-\\dfrac{2x}{5}$.<br>'
      '<i>Проверка при $x=1$:</i> $f(1)=\\dfrac15$ и '
      '$2\\cdot\\tfrac15+3\\cdot\\tfrac15=1$ ✓'),
    'B'),

  P(T('$f(x)=ax^2+bx+c$ kvadrat uchhad uchun barcha $x$ larda '
      '$f(x+1)-f(x)=4x+2$ va $f(0)=5$ boʻlsa, $f(3)$ ni toping.',
      'Для квадратного трёхчлена $f(x)=ax^2+bx+c$ при всех $x$ выполнено '
      '$f(x+1)-f(x)=4x+2$ и $f(0)=5$. Найдите $f(3)$.'),
    T('$23$', '$23$'),
    T('$f(x+1)-f(x)=a(2x+1)+b=2ax+(a+b)$.<br>'
      'Koeffitsiyentlarni tenglashtiramiz: $2a=4\\Rightarrow a=2$ va '
      '$a+b=2\\Rightarrow b=0$.<br>'
      '$f(0)=c=5$, demak $f(x)=2x^2+5$ va $f(3)=18+5=23$.<br>'
      '<i>Tekshirish:</i> $f(1)-f(0)=7-5=2=4\\cdot0+2$ ✓',
      '$f(x+1)-f(x)=2ax+(a+b)$; отсюда $a=2$, $b=0$, а $c=f(0)=5$.<br>'
      'Значит $f(x)=2x^2+5$ и $f(3)=23$.<br>'
      '<i>Проверка:</i> $f(1)-f(0)=2$ ✓'),
    'E'),

  P(T('$f$ va $g$ funksiyalar jadval bilan berilgan; baʼzi qiymatlar '
      'oʻrniga «?» qoʻyilgan. $h(x)=g\\bigl(f(x)\\bigr)$. '
      '$g(2)+h(4)$ ni hisoblang.',
      'Функции $f$ и $g$ заданы таблицей, часть значений заменена на «?». '
      'Пусть $h(x)=g\\bigl(f(x)\\bigr)$. Вычислите $g(2)+h(4)$.'),
    T('$16$', '$16$'),
    T('Jadval:<br>'
      '$x$: $0,1,2,3,4,5$<br>'
      '$f$: $5,\\,?,\\,?,\\,7,\\,1,\\,2$<br>'
      '$g$: $?,\\,7,\\,?,\\,0,\\,10,\\,8$<br>'
      '$h$: $?,\\,8,\\,0,\\,5,\\,?,\\,9$<br>'
      '<b>1. $g(2)$.</b> $h(5)=g\\bigl(f(5)\\bigr)=g(2)$, chunki $f(5)=2$. '
      'Jadvalda $h(5)=9$, demak $\\boxed{g(2)=9}$.<br>'
      '<b>2. $h(4)$.</b> $f(4)=1$, demak '
      '$h(4)=g\\bigl(f(4)\\bigr)=g(1)=7$.<br>'
      '<b>Javob:</b> $9+7=16$.<br>'
      '<i>Izoh:</i> qolgan «?» lar ham shu usul bilan toʻldiriladi: '
      '$h(1)=8=g(5)\\Rightarrow f(1)=5$; $h(2)=0=g(3)\\Rightarrow f(2)=3$; '
      '$h(3)=g(7)=5$ — bular javobga taʼsir qilmaydi.',
      'Таблица:<br>'
      '$x$: $0,1,2,3,4,5$<br>'
      '$f$: $5,\\,?,\\,?,\\,7,\\,1,\\,2$<br>'
      '$g$: $?,\\,7,\\,?,\\,0,\\,10,\\,8$<br>'
      '$h$: $?,\\,8,\\,0,\\,5,\\,?,\\,9$<br>'
      '<b>1. $g(2)$.</b> Так как $f(5)=2$, то $h(5)=g(2)$, а $h(5)=9$, '
      'значит $g(2)=9$.<br>'
      '<b>2. $h(4)$.</b> $f(4)=1$, поэтому $h(4)=g(1)=7$.<br>'
      '<b>Ответ:</b> $9+7=16$.'),
    'D', '10-sinf · 2025/26-B №13'),

  P(T('$p$ va $q$ funksiyalar uchun $p(x)=q(30x)+33$ tenglik oʻrinli. Agar '
      '$q(5)=16$, $p(5)=629$ boʻlib, $q$ — chiziqli funksiya boʻlsa, $p(x)$ '
      'ning formulasini toping.',
      'Для функций $p$ и $q$ выполнено $p(x)=q(30x)+33$. Известно, что '
      '$q(5)=16$, $p(5)=629$ и $q$ линейна. Найдите формулу $p(x)$.'),
    T('$p(x)=120x+29$', '$p(x)=120x+29$'),
    T('<b>1. Ikkinchi nuqta.</b> $p(5)=q(150)+33=629$, demak '
      '$q(150)=596$.<br>'
      '<b>2. Chiziqli funksiyani tiklaymiz.</b> $q(x)=kx+m$ uchun '
      '$k=\\dfrac{596-16}{150-5}=\\dfrac{580}{145}=4$, va '
      '$16=4\\cdot5+m\\Rightarrow m=-4$.<br>'
      'Demak $q(x)=4x-4$.<br>'
      '<b>3. $p$ ni yigʻamiz.</b> '
      '$p(x)=q(30x)+33=4\\cdot30x-4+33=120x+29$.<br>'
      '<i>Tekshirish:</i> $p(5)=600+29=629$ ✓ va '
      '$q(5)=20-4=16$ ✓',
      '<b>1. Вторая точка.</b> $p(5)=q(150)+33=629$, значит $q(150)=596$.<br>'
      '<b>2. Линейная функция.</b> $k=\\dfrac{580}{145}=4$, '
      '$m=16-20=-4$, то есть $q(x)=4x-4$.<br>'
      '<b>3. Сборка.</b> $p(x)=120x-4+33=120x+29$.<br>'
      '<i>Проверка:</i> $p(5)=629$ ✓'),
    'D', '10-sinf · 2025/26-B №14'),

  P(T('Ixtiyoriy $n$ natural son uchun $f(2n)=n\\,f(n)$ shart bajariladi va '
      '$f(1)=1$. $f\\left(2^{10}\\right)$ ning qiymatini toping.',
      'Для любого натурального $n$ выполнено $f(2n)=n\\,f(n)$, причём '
      '$f(1)=1$. Найдите $f\\left(2^{10}\\right)$.'),
    T('$2^{45}$', '$2^{45}$'),
    T('<b>Zanjirni yozamiz.</b> $n=2^{k-1}$ qoʻysak: '
      '$f\\left(2^{k}\\right)=2^{k-1}f\\left(2^{k-1}\\right)$.<br>'
      'Boshlanish: $f(2)=f(2\\cdot1)=1\\cdot f(1)=1=2^0$.<br>'
      'Keyin $f(4)=2\\cdot1=2$, $f(8)=4\\cdot2=8$, '
      '$f(16)=8\\cdot8=64$ — darajalar $0,1,3,6,\\ldots$<br>'
      '<b>Umumiy koʻrinish.</b> '
      '$f\\left(2^{10}\\right)=2^{9}\\cdot2^{8}\\cdots2^{1}\\cdot f(2)='
      '2^{1+2+\\cdots+9}$.<br>'
      '$1+2+\\cdots+9=\\dfrac{9\\cdot10}{2}=45$, demak '
      '$f\\left(2^{10}\\right)=2^{45}$.<br>'
      '<i>Tekshirish:</i> $f\\left(2^k\\right)=2^{\\frac{(k-1)k}{2}}$; '
      '$k=4$ da $2^{6}=64$ ✓',
      '<b>Цепочка.</b> Подставив $n=2^{k-1}$, получаем '
      '$f\\left(2^{k}\\right)=2^{k-1}f\\left(2^{k-1}\\right)$, а '
      '$f(2)=f(1)=1$.<br>'
      'Тогда $f(4)=2$, $f(8)=8$, $f(16)=64$, и вообще '
      '$f\\left(2^{10}\\right)=2^{1+2+\\cdots+9}=2^{45}$.<br>'
      '<i>Проверка:</i> $f\\left(2^k\\right)=2^{(k-1)k/2}$; при $k=4$ это '
      '$64$ ✓'),
    'F', '9-sinf · 2025/26-A №16'),

  P(T('$f(x)=\\dfrac{4^x}{4^x+2}$ boʻlsa, '
      '$f\\left(\\dfrac{1}{2025}\\right)+f\\left(\\dfrac{2}{2025}\\right)+'
      '\\cdots+f\\left(\\dfrac{2024}{2025}\\right)$ yigʻindini toping.',
      'Пусть $f(x)=\\dfrac{4^x}{4^x+2}$. Найдите сумму '
      '$f\\left(\\dfrac{1}{2025}\\right)+\\cdots+'
      'f\\left(\\dfrac{2024}{2025}\\right)$.'),
    T('$1012$', '$1012$'),
    T('<b>Juftlab qoʻshamiz.</b> '
      '$f(x)+f(1-x)=\\dfrac{4^x}{4^x+2}+\\dfrac{4^{1-x}}{4^{1-x}+2}$.<br>'
      'Ikkinchi kasrning surat va maxrajini $4^{x}$ ga koʻpaytiramiz: '
      '$\\dfrac{4}{4+2\\cdot4^{x}}=\\dfrac{2}{2+4^{x}}$.<br>'
      'Demak $f(x)+f(1-x)=\\dfrac{4^x+2}{4^x+2}=1$.<br>'
      '<b>Yigʻindi.</b> $\\dfrac{k}{2025}$ va '
      '$\\dfrac{2025-k}{2025}$ juftlari $1012$ ta, har biri $1$ beradi.<br>'
      'Javob: $1012$.<br>'
      '<i>Tekshirish:</i> $2024$ ta had, $1012$ ta juft ✓ '
      'markaziy had yoʻq, chunki $2025$ toq.',
      '<b>Разбиение на пары.</b> Умножив числитель и знаменатель второй '
      'дроби на $4^{x}$, получаем '
      '$f(1-x)=\\dfrac{2}{2+4^{x}}$, поэтому $f(x)+f(1-x)=1$.<br>'
      '<b>Сумма.</b> Пар вида $\\dfrac{k}{2025}$ и $\\dfrac{2025-k}{2025}$ '
      'ровно $1012$, каждая даёт $1$.<br>'
      'Ответ: $1012$.'),
    'C'),

  P(T('$f\\colon\\mathbb{R}\\to\\mathbb{R}$ va '
      '$g\\colon\\mathbb{R}\\to\\mathbb{R}$ funksiyalar uchun barcha '
      '$x,y\\in\\mathbb{R}$ larda '
      '$\\sin x+\\cos y=f(x)+f(y)+g(x)-g(y)$ tenglik oʻrinli. '
      '$g\\left(\\dfrac{5\\pi}{4}\\right)=1$ boʻlsa, $g(\\pi)$ ni '
      'hisoblang.',
      'Для функций $f,g\\colon\\mathbb{R}\\to\\mathbb{R}$ при всех '
      '$x,y$ выполнено $\\sin x+\\cos y=f(x)+f(y)+g(x)-g(y)$. Известно, что '
      '$g\\left(\\dfrac{5\\pi}{4}\\right)=1$. Вычислите $g(\\pi)$.'),
    T('$\\dfrac32$', '$\\dfrac32$'),
    T('<b>1. $x=y$ qoʻyamiz.</b> Oʻng tomonda $g$ qisqaradi: '
      '$\\sin x+\\cos x=2f(x)$, demak '
      '$f(x)=\\dfrac{\\sin x+\\cos x}{2}$.<br>'
      '<b>2. $g$ ni chiqaramiz.</b> Asl tenglikka qoʻyamiz:<br>'
      '$g(x)-g(y)=\\sin x+\\cos y-'
      '\\dfrac{\\sin x+\\cos x}{2}-\\dfrac{\\sin y+\\cos y}{2}$<br>'
      '$\\qquad=\\dfrac{\\sin x-\\cos x}{2}-'
      '\\dfrac{\\sin y-\\cos y}{2}$.<br>'
      'Oʻng tomon $x$ ga va $y$ ga alohida ajraladi, demak '
      '$g(x)=\\dfrac{\\sin x-\\cos x}{2}+C$.<br>'
      '<b>3. $C$ ni topamiz.</b> '
      '$\\sin\\dfrac{5\\pi}{4}=\\cos\\dfrac{5\\pi}{4}=-\\dfrac{\\sqrt2}{2}$, '
      'demak ularning ayirmasi $0$ va '
      '$g\\left(\\dfrac{5\\pi}{4}\\right)=C=1$.<br>'
      '<b>4. Javob.</b> '
      '$g(\\pi)=\\dfrac{\\sin\\pi-\\cos\\pi}{2}+1='
      '\\dfrac{0+1}{2}+1=\\dfrac32$.',
      '<b>1. Положим $x=y$:</b> $\\sin x+\\cos x=2f(x)$, то есть '
      '$f(x)=\\dfrac{\\sin x+\\cos x}{2}$.<br>'
      '<b>2. Находим $g$:</b> подстановка даёт '
      '$g(x)-g(y)=\\dfrac{\\sin x-\\cos x}{2}-'
      '\\dfrac{\\sin y-\\cos y}{2}$, значит '
      '$g(x)=\\dfrac{\\sin x-\\cos x}{2}+C$.<br>'
      '<b>3. Константа:</b> в точке $\\dfrac{5\\pi}{4}$ синус и косинус '
      'равны, поэтому $C=1$.<br>'
      '<b>4. Ответ:</b> $g(\\pi)=\\dfrac{0-(-1)}{2}+1=\\dfrac32$.'),
    'B', '10-sinf · 2025/26-B №24'),
 ]),
]

DARAJALAR += [
 dict(kod='ancha', nom=T('Ancha qiyin', 'Потруднее'), hue='vhard',
  izoh=T('Variantlarning oxirgi savollari darajasi.',
         'Уровень последних задач варианта.'),
  items=[

  P(T('$1-\\sin x+\\sqrt{3y-x}=0$ tenglik orqali '
      '$\\dfrac{6(x-y)}{\\pi}$ ning qiymatini toping, bunda '
      '$0\\le x\\le\\pi$.',
      'Из равенства $1-\\sin x+\\sqrt{3y-x}=0$ при $0\\le x\\le\\pi$ '
      'найдите значение $\\dfrac{6(x-y)}{\\pi}$.'),
    T('$2$', '$2$'),
    T('<b>Ikki nomanfiy son yigʻindisi.</b> '
      '$1-\\sin x\\ge0$ (chunki $\\sin x\\le1$) va $\\sqrt{3y-x}\\ge0$. '
      'Ularning yigʻindisi $0$ boʻlishi uchun <b>ikkalasi ham</b> nol '
      'boʻlishi shart.<br>'
      '$\\sin x=1$ va $0\\le x\\le\\pi$, demak $x=\\dfrac{\\pi}{2}$.<br>'
      '$3y-x=0$, demak $y=\\dfrac{x}{3}=\\dfrac{\\pi}{6}$.<br>'
      '$x-y=\\dfrac{\\pi}{2}-\\dfrac{\\pi}{6}=\\dfrac{\\pi}{3}$, demak '
      '$\\dfrac{6}{\\pi}\\cdot\\dfrac{\\pi}{3}=2$.',
      '<b>Сумма двух неотрицательных.</b> $1-\\sin x\\ge0$ и '
      '$\\sqrt{3y-x}\\ge0$, а их сумма равна нулю — значит оба нуля.<br>'
      'Из $\\sin x=1$ и $0\\le x\\le\\pi$ следует $x=\\dfrac{\\pi}{2}$, а '
      'из $3y=x$ — $y=\\dfrac{\\pi}{6}$.<br>'
      '$x-y=\\dfrac{\\pi}{3}$, поэтому $\\dfrac{6(x-y)}{\\pi}=2$.'),
    'A', '11-sinf · 2025/26-A №12'),

  P(T('$f(x)+2f\\left(\\dfrac{x+2}{x-1}\\right)=x$ boʻlsa ($x\\ne1$), '
      '$f(4)$ ni toping.',
      'Пусть $f(x)+2f\\left(\\dfrac{x+2}{x-1}\\right)=x$ при $x\\ne1$. '
      'Найдите $f(4)$.'),
    T('$0$', '$0$'),
    T('<b>1. Almashtirish oʻz-oʻziga teskari.</b> '
      '$g(x)=\\dfrac{x+2}{x-1}$ uchun<br>'
      '$g\\bigl(g(x)\\bigr)=\\dfrac{\\frac{x+2}{x-1}+2}'
      '{\\frac{x+2}{x-1}-1}=\\dfrac{(x+2)+2(x-1)}{(x+2)-(x-1)}='
      '\\dfrac{3x}{3}=x$.<br>'
      'Demak $g$ ikki qiymatni juftlaydi, uchinchisi paydo boʻlmaydi.<br>'
      '<b>2. Ikkita tenglama.</b> $g(4)=\\dfrac{6}{3}=2$ va '
      '$g(2)=\\dfrac{4}{1}=4$, shuning uchun<br>'
      '$(1)\\ f(4)+2f(2)=4$,<br>'
      '$(2)\\ f(2)+2f(4)=2$.<br>'
      '<b>3. Sistemani yechamiz.</b> $(1)$ dan $f(4)=4-2f(2)$; buni '
      '$(2)$ ga qoʻyamiz:<br>'
      '$f(2)+2\\bigl(4-2f(2)\\bigr)=2\\Rightarrow-3f(2)=-6\\Rightarrow '
      'f(2)=2$.<br>'
      'Demak $f(4)=4-2\\cdot2=0$.<br>'
      '<i>Tekshirish:</i> $(1)$: $0+4=4$ ✓, $(2)$: $2+0=2$ ✓',
      '<b>1. Подстановка инволютивна.</b> Для $g(x)=\\dfrac{x+2}{x-1}$<br>'
      '$g\\bigl(g(x)\\bigr)=\\dfrac{(x+2)+2(x-1)}{(x+2)-(x-1)}=x$,<br>'
      'поэтому два значения образуют пару и третье не появляется.<br>'
      '<b>2. Два уравнения.</b> $g(4)=2$ и $g(2)=4$, значит '
      '$f(4)+2f(2)=4$ и $f(2)+2f(4)=2$.<br>'
      '<b>3. Решение.</b> Из первого $f(4)=4-2f(2)$; подставляя во второе, '
      '$-3f(2)=-6$, то есть $f(2)=2$ и $f(4)=0$.<br>'
      '<i>Проверка:</i> $0+4=4$ ✓, $2+0=2$ ✓'),
    'B'),

  P(T('$f\\colon\\mathbb{N}^2\\to\\mathbb{N}$ funksiya uchun $f(2;1)=1$ '
      'boʻlib, $f(m+1;n)=f(m;n)+m$ va $f(m;n+1)=f(m;n)-n$ tengliklar '
      'oʻrinli. $f(p;q)=2025$ tenglama nechta yechimga ega?',
      'Для функции $f\\colon\\mathbb{N}^2\\to\\mathbb{N}$ выполнено '
      '$f(2;1)=1$, $f(m+1;n)=f(m;n)+m$ и $f(m;n+1)=f(m;n)-n$. Сколько '
      'решений имеет уравнение $f(p;q)=2025$?'),
    T('$15$ ta', '$15$'),
    T('<b>1. Yopiq koʻrinish.</b> $n=1$ da birinchi shartni '
      '$m=2,3,\\ldots$ boʻyicha yigʻamiz:<br>'
      '$f(m;1)=f(2;1)+\\bigl(2+3+\\cdots+(m-1)\\bigr)='
      '1+\\left(\\dfrac{m(m-1)}{2}-1\\right)=\\dfrac{m(m-1)}{2}$.<br>'
      'Ikkinchi shartni $n$ boʻyicha yigʻamiz: '
      '$f(m;n)=f(m;1)-\\bigl(1+2+\\cdots+(n-1)\\bigr)$, demak<br>'
      '$$f(m;n)=\\frac{m(m-1)}{2}-\\frac{n(n-1)}{2}.$$'
      '<b>2. Tenglamani ajratamiz.</b> $f(p;q)=2025$ dan '
      '$p(p-1)-q(q-1)=4050$, yaʼni<br>'
      '$$(p-q)(p+q-1)=4050.$$'
      '<b>3. Juftlikni tekshiramiz.</b> '
      '$(p-q)+(p+q-1)=2p-1$ — toq, demak koʻpaytuvchilar har doim har '
      'xil juftlikda. $4050=2\\cdot3^4\\cdot5^2$ da $2$ aynan bitta, '
      'shuning uchun <b>har qanday</b> ajratishda biri juft, biri toq — '
      'shart avtomatik bajariladi.<br>'
      '<b>4. Sanaymiz.</b> $a=p-q$, $b=p+q-1$, $ab=4050$. U holda '
      '$p=\\dfrac{a+b+1}{2}$, $q=\\dfrac{b-a+1}{2}$; '
      '$q\\ge1$ sharti $b>a$ ga teng.<br>'
      '$d(4050)=(1+1)(4+1)(2+1)=30$ va $4050$ toʻla kvadrat emas, demak '
      '$a<b$ boʻlgan juftliklar soni $\\dfrac{30}{2}=15$.<br>'
      '<b>Javob: $15$ ta.</b>',
      '<b>1. Замкнутый вид.</b> Суммируя первое соотношение по $m$ при '
      '$n=1$: $f(m;1)=\\dfrac{m(m-1)}{2}$; затем суммируя второе по $n$:<br>'
      '$$f(m;n)=\\frac{m(m-1)}{2}-\\frac{n(n-1)}{2}.$$'
      '<b>2. Разложение.</b> $f(p;q)=2025$ даёт '
      '$(p-q)(p+q-1)=4050$.<br>'
      '<b>3. Чётность.</b> Сумма множителей равна $2p-1$ — нечётна, а в '
      '$4050=2\\cdot3^4\\cdot5^2$ ровно одна двойка, поэтому условие '
      'выполняется при любом разложении.<br>'
      '<b>4. Подсчёт.</b> $p=\\dfrac{a+b+1}{2}$, '
      '$q=\\dfrac{b-a+1}{2}$, и $q\\ge1$ равносильно $a<b$. '
      'Так как $d(4050)=30$ и $4050$ не полный квадрат, подходящих пар '
      '$\\dfrac{30}{2}=15$.<br>'
      '<b>Ответ: $15$.</b>'),
    'G', '10-sinf · 2025/26-B №21'),

  P(T('$f$ funksiya barcha haqiqiy $x,y$ lar uchun '
      '$f(x+y)=f(x)+f(y)+xy$ shartni qanoatlantiradi va $f(1)=1$. '
      '$f(10)$ ni toping.',
      'Функция $f$ при всех действительных $x,y$ удовлетворяет условию '
      '$f(x+y)=f(x)+f(y)+xy$, причём $f(1)=1$. Найдите $f(10)$.'),
    T('$55$', '$55$'),
    T('<b>Qadamni yozamiz.</b> $y=1$: '
      '$f(x+1)=f(x)+f(1)+x=f(x)+x+1$.<br>'
      'Demak $f(n+1)-f(n)=n+1$, va $f(1)=1$:<br>'
      '$f(n)=1+2+\\cdots+n=\\dfrac{n(n+1)}{2}$.<br>'
      '$f(10)=\\dfrac{10\\cdot11}{2}=55$.<br>'
      '<i>Tekshirish:</i> '
      '$f(x)=\\dfrac{x^2+x}{2}$ uchun '
      '$f(x)+f(y)+xy=\\dfrac{x^2+y^2+2xy+x+y}{2}='
      '\\dfrac{(x+y)^2+(x+y)}{2}=f(x+y)$ ✓',
      '<b>Шаг.</b> При $y=1$: $f(x+1)=f(x)+x+1$, поэтому '
      '$f(n)=1+2+\\cdots+n=\\dfrac{n(n+1)}{2}$ и $f(10)=55$.<br>'
      '<i>Проверка:</i> для $f(x)=\\dfrac{x^2+x}{2}$ имеем '
      '$f(x)+f(y)+xy=\\dfrac{(x+y)^2+(x+y)}{2}=f(x+y)$ ✓'),
    'B'),

  P(T('$f(x)=x^2-4x+7$ funksiyaning $[0;3]$ kesmadagi eng katta va eng '
      'kichik qiymatlarini toping.',
      'Найдите наибольшее и наименьшее значения функции '
      '$f(x)=x^2-4x+7$ на отрезке $[0;3]$.'),
    T('eng katta $7$, eng kichik $3$', 'наибольшее $7$, наименьшее $3$'),
    T('<b>Toʻliq kvadrat.</b> $f(x)=(x-2)^2+3$; uch $x_0=2\\in[0;3]$.<br>'
      'Uchdagi qiymat $f(2)=3$ — eng kichik ($a>0$).<br>'
      'Chetlar: $f(0)=7$, $f(3)=1+3=4$.<br>'
      'Demak eng katta qiymat $f(0)=7$, eng kichik $f(2)=3$.<br>'
      '<i>Xato ogohlantirishi:</i> faqat chetlarni solishtirish $4$ va $7$ '
      'ni beradi — uch unutilsa eng kichik qiymat notoʻgʻri chiqadi.',
      '<b>Полный квадрат.</b> $f(x)=(x-2)^2+3$; вершина $x_0=2\\in[0;3]$, '
      'значение $3$ — минимум.<br>'
      'Концы: $f(0)=7$, $f(3)=4$.<br>'
      'Наибольшее $7$, наименьшее $3$.<br>'
      '<i>Осторожно:</i> сравнение только концов даёт $4$ и $7$ — вершину '
      'терять нельзя.'),
    'E'),

  P(T('$f(x)$ — koʻphad boʻlib, barcha $x$ larda '
      '$f(x)\\cdot f\\left(\\dfrac1x\\right)=f(x)+f\\left(\\dfrac1x\\right)$ '
      '($x\\ne0$) va $f(2)=9$. $f(3)$ ni toping.',
      '$f(x)$ — многочлен, при всех $x\\ne0$ выполнено '
      '$f(x)\\cdot f\\left(\\dfrac1x\\right)=f(x)+f\\left(\\dfrac1x\\right)$, '
      'и $f(2)=9$. Найдите $f(3)$.'),
    T('$28$', '$28$'),
    T('<b>Maʼlum koʻrinish.</b> Bunday koʻphadlar faqat '
      '$f(x)=1\\pm x^{n}$ koʻrinishida boʻladi.<br>'
      'Tekshirish: $f(x)=1+x^n$ boʻlsa '
      '$f\\left(\\dfrac1x\\right)=1+x^{-n}$, va<br>'
      'koʻpaytma $=1+x^n+x^{-n}+1$, yigʻindi $=2+x^n+x^{-n}$ — teng ✓<br>'
      '<b>Darajani topamiz.</b> $f(2)=1+2^n=9\\Rightarrow2^n=8'
      '\\Rightarrow n=3$.<br>'
      '$f(x)=1+x^3$, demak $f(3)=1+27=28$.<br>'
      '<i>Tekshirish:</i> $f(x)=1-x^n$ varianti $1-2^n=9$ ni bermaydi '
      '(musbat daraja uchun).',
      '<b>Известный вид.</b> Такие многочлены — только $f(x)=1\\pm x^{n}$; '
      'подстановка это подтверждает.<br>'
      'Из $1+2^n=9$ следует $n=3$, то есть $f(x)=1+x^3$ и $f(3)=28$.<br>'
      '<i>Проверка:</i> вариант $1-x^n$ уравнению $1-2^n=9$ не '
      'удовлетворяет.'),
    'E'),
 ]),
]
