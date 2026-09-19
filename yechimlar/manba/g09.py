# -*- coding: utf-8 -*-
GRADE = 9
TITLE_UZ = "MATEMATIKA · 9-sinf — yechimlar"
TITLE_RU = "МАТЕМАТИКА · 9 класс — решения"
P = [

dict(n=1, pts='0,9', ans='C) $1$',
uz=r'''**Surat.** $1$ dan $2027$ gacha boʻlgan toq sonlar ishoralari navbatma-navbat olingan. Ularning soni $\frac{2027-1}{2}+1=1014$ ta — juft son, shuning uchun hammasini juftlab guruhlaymiz:
$$(1-3)+(5-7)+\dots+(2025-2027).$$
Har bir qavs $-2$ ga teng, qavslar soni $1014:2=507$. Demak surat $507\cdot(-2)=-1014$.

**Maxraj.** Xuddi shunday guruhlaymiz:
$$(1-2)+(3-4)+\dots+(2027-2028).$$
Har bir qavs $-1$, qavslar soni $2028:2=1014$. Demak maxraj $-1014$.

**Natija.** $\dfrac{-1014}{-1014}=1$.''',
ru=r'''**Числитель.** Нечётные числа от $1$ до $2027$ со знакочередованием. Их количество $\frac{2027-1}{2}+1=1014$ — число чётное, поэтому сгруппируем их по два:
$$(1-3)+(5-7)+\dots+(2025-2027).$$
Каждая скобка равна $-2$, скобок $1014:2=507$. Значит, числитель равен $507\cdot(-2)=-1014$.

**Знаменатель.** Группируем так же:
$$(1-2)+(3-4)+\dots+(2027-2028).$$
Каждая скобка равна $-1$, скобок $2028:2=1014$. Значит, знаменатель равен $-1014$.

**Ответ.** $\dfrac{-1014}{-1014}=1$.'''),

dict(n=2, pts='0,9', ans='B) $2$',
uz=r'''Butun qismni ajratamiz. $n^2-3=(n-2)(n+2)+1$ ekanini tekshiramiz:
$$(n-2)(n+2)+1=n^2-4+1=n^2-3 \quad\checkmark$$
Demak
$$\frac{n^2-3}{n-2}=n+2+\frac{1}{n-2}.$$
$n$ butun boʻlgani uchun $n+2$ ham butun. Butun ifoda hosil boʻlishi uchun $\dfrac{1}{n-2}$ butun boʻlishi kerak, yaʼni $n-2$ soni $1$ ning boʻluvchisi:
$$n-2=1 \Rightarrow n=3,\qquad n-2=-1 \Rightarrow n=1.$$
**Tekshirish.** $n=3$: $\frac{9-3}{1}=6$ ✓ $\quad n=1$: $\frac{1-3}{-1}=2$ ✓

Demak $2$ ta qiymat.''',
ru=r'''Выделим целую часть. Проверим, что $n^2-3=(n-2)(n+2)+1$:
$$(n-2)(n+2)+1=n^2-4+1=n^2-3 \quad\checkmark$$
Значит,
$$\frac{n^2-3}{n-2}=n+2+\frac{1}{n-2}.$$
Так как $n$ целое, $n+2$ тоже целое. Чтобы всё выражение было целым, нужно, чтобы $\dfrac{1}{n-2}$ было целым, то есть $n-2$ — делитель единицы:
$$n-2=1 \Rightarrow n=3,\qquad n-2=-1 \Rightarrow n=1.$$
**Проверка.** $n=3$: $\frac{9-3}{1}=6$ ✓ $\quad n=1$: $\frac{1-3}{-1}=2$ ✓

Итого $2$ значения.'''),

dict(n=3, pts='0,9', ans='D) $4$',
uz=r'''Qavariq koʻpburchakning **tashqi** burchaklari yigʻindisi har doim $360^\circ$ ga teng.

Agar ichki burchak $90^\circ$ boʻlsa, unga mos tashqi burchak ham $180^\circ-90^\circ=90^\circ$ boʻladi.

Aytaylik, koʻpburchakda $k$ ta toʻgʻri burchak bor. Qolgan tashqi burchaklar musbat, shuning uchun
$$90^\circ\cdot k\le 360^\circ \quad\Longrightarrow\quad k\le 4.$$
$k=4$ ga erishiladi: kvadrat (yoki ixtiyoriy toʻgʻri toʻrtburchak) — unda toʻrtala burchak ham toʻgʻri.

Eʼtibor bering, $k=4$ boʻlganda tashqi burchaklar yigʻindisi allaqachon $360^\circ$ ni beradi, demak boshqa uch umuman boʻlishi mumkin emas — koʻpburchak aynan toʻrtburchak boʻladi.''',
ru=r'''Сумма **внешних** углов выпуклого многоугольника всегда равна $360^\circ$.

Если внутренний угол равен $90^\circ$, то соответствующий внешний угол тоже равен $180^\circ-90^\circ=90^\circ$.

Пусть в многоугольнике $k$ прямых углов. Остальные внешние углы положительны, поэтому
$$90^\circ\cdot k\le 360^\circ \quad\Longrightarrow\quad k\le 4.$$
Значение $k=4$ достигается: квадрат (или любой прямоугольник) — там все четыре угла прямые.

Заметим, что при $k=4$ сумма внешних углов уже составляет $360^\circ$, поэтому других вершин быть не может — многоугольник обязан быть четырёхугольником.'''),

dict(n=4, pts='0,9', ans='A) $11$',
uz=r'''Umumiy koʻpaytuvchini qavsdan chiqaramiz. $44=2\cdot22$, $66=3\cdot22$, shuning uchun
$$22^2+44^2+66^2=22^2\left(1^2+2^2+3^2\right)=22^2\cdot 14.$$
Endi tub koʻpaytuvchilarga ajratamiz:
$$22^2\cdot14=(2\cdot11)^2\cdot(2\cdot7)=2^2\cdot11^2\cdot2\cdot7=2^3\cdot7\cdot11^2.$$
**Tekshirish.** $2^3\cdot7\cdot121=8\cdot7\cdot121=6776$, va $484+1936+4356=6776$ ✓

Tub boʻluvchilar: $2,\;7,\;11$. Eng kattasi — $11$.''',
ru=r'''Вынесем общий множитель. Так как $44=2\cdot22$ и $66=3\cdot22$,
$$22^2+44^2+66^2=22^2\left(1^2+2^2+3^2\right)=22^2\cdot 14.$$
Разложим на простые множители:
$$22^2\cdot14=(2\cdot11)^2\cdot(2\cdot7)=2^2\cdot11^2\cdot2\cdot7=2^3\cdot7\cdot11^2.$$
**Проверка.** $2^3\cdot7\cdot121=8\cdot7\cdot121=6776$, и $484+1936+4356=6776$ ✓

Простые делители: $2,\;7,\;11$. Наибольший — $11$.'''),

dict(n=5, pts='0,9', ans='A) $6$',
uz=r'''**Muhim kuzatuv.** Sonning raqamlari yigʻindisi $6$ ga teng boʻlsa, u $3$ ga boʻlinadi (chunki $3$ ga boʻlinish alomati aynan raqamlar yigʻindisiga qarab aniqlanadi, $6\;\vdots\;3$). Demak «$3$ ga boʻlinadi» sharti qoʻshimcha cheklov qoʻymaydi.

Endi raqamlari yigʻindisi $6$ boʻlgan ikki xonali sonlarni sanaymiz. $\overline{ab}$ da $a+b=6$, $a\ge1$:
$$15,\;24,\;33,\;42,\;51,\;60.$$
Jami $6$ ta.''',
ru=r'''**Ключевое замечание.** Если сумма цифр числа равна $6$, то число делится на $3$ (признак делимости на $3$ как раз по сумме цифр, а $6\;\vdots\;3$). Значит, условие «делится на $3$» не даёт дополнительного ограничения.

Теперь считаем двузначные числа с суммой цифр $6$. Для $\overline{ab}$ имеем $a+b=6$, $a\ge1$:
$$15,\;24,\;33,\;42,\;51,\;60.$$
Всего $6$ чисел.'''),

dict(n=6, pts='0,9', ans='A) $-8$',
uz=r'''**1-usul (algebraik).** $|u|=|v|$ tenglik $u=v$ yoki $u=-v$ ga teng kuchli.

$x+6=x+10$ — bu $6=10$ ni beradi, yechim yoʻq.

$x+6=-(x+10)$ $\Rightarrow$ $x+6=-x-10$ $\Rightarrow$ $2x=-16$ $\Rightarrow$ $x=-8$.

**2-usul (geometrik).** $|x+6|=|x-(-6)|$ — bu $x$ nuqtadan $-6$ gacha boʻlgan masofa, $|x+10|$ esa $-10$ gacha boʻlgan masofa. Ular teng boʻlsa, $x$ — $-6$ va $-10$ nuqtalarning oʻrtasi:
$$x=\frac{-6+(-10)}{2}=-8.$$
**Tekshirish.** $|-8+6|=2$, $|-8+10|=2$ ✓''',
ru=r'''**1-й способ (алгебраический).** Равенство $|u|=|v|$ равносильно $u=v$ или $u=-v$.

$x+6=x+10$ даёт $6=10$ — решений нет.

$x+6=-(x+10)$ $\Rightarrow$ $x+6=-x-10$ $\Rightarrow$ $2x=-16$ $\Rightarrow$ $x=-8$.

**2-й способ (геометрический).** $|x+6|=|x-(-6)|$ — расстояние от точки $x$ до $-6$, а $|x+10|$ — расстояние до $-10$. Если они равны, то $x$ — середина между $-6$ и $-10$:
$$x=\frac{-6+(-10)}{2}=-8.$$
**Проверка.** $|-8+6|=2$, $|-8+10|=2$ ✓'''),

dict(n=7, pts='0,9', ans=r'B) $\frac{1}{35}$',
uz=r'''$\dfrac{a}{b}=6$ dan $a=6b$, $\dfrac{c}{d}=6$ dan $c=6d$.

Har bir koʻpaytuvchini alohida hisoblaymiz:
$$\frac{b}{a+b}=\frac{b}{6b+b}=\frac{b}{7b}=\frac{1}{7},$$
$$\frac{d}{c-d}=\frac{d}{6d-d}=\frac{d}{5d}=\frac{1}{5}.$$
Eʼtibor bering, $b\ne0$ va $d\ne0$ boʻlgani uchun qisqartirish oʻrinli.

Koʻpaytma: $\dfrac{1}{7}\cdot\dfrac{1}{5}=\dfrac{1}{35}$.''',
ru=r'''Из $\dfrac{a}{b}=6$ получаем $a=6b$, из $\dfrac{c}{d}=6$ получаем $c=6d$.

Вычислим каждый множитель отдельно:
$$\frac{b}{a+b}=\frac{b}{6b+b}=\frac{b}{7b}=\frac{1}{7},$$
$$\frac{d}{c-d}=\frac{d}{6d-d}=\frac{d}{5d}=\frac{1}{5}.$$
Сокращение законно, так как $b\ne0$ и $d\ne0$.

Произведение: $\dfrac{1}{7}\cdot\dfrac{1}{5}=\dfrac{1}{35}$.'''),

dict(n=8, pts='0,9', ans='A) $659$',
uz=r'''Shartlarni yozamiz:
$$n\equiv 9\ (\mathrm{mod}\ 10),\qquad n\equiv 10\ (\mathrm{mod}\ 11),\qquad n\equiv 11\ (\mathrm{mod}\ 12).$$
Har bir holda qoldiq boʻluvchidan aynan $1$ ga kam. Demak **har uchala holda ham** $n+1$ boʻluvchiga qoldiqsiz boʻlinadi:
$$n+1\ \vdots\ 10,\qquad n+1\ \vdots\ 11,\qquad n+1\ \vdots\ 12.$$
Shuning uchun $n+1$ soni $\mathrm{EKUK}(10,11,12)$ ga boʻlinadi.
$$10=2\cdot5,\quad 11=11,\quad 12=2^2\cdot3 \;\Longrightarrow\; \mathrm{EKUK}=2^2\cdot3\cdot5\cdot11=660.$$
Eng kichik natural yechim: $n+1=660$, yaʼni $n=659$.

**Tekshirish.** $659=10\cdot65+9$ ✓, $659=11\cdot59+10$ ✓, $659=12\cdot54+11$ ✓''',
ru=r'''Запишем условия:
$$n\equiv 9\ (\mathrm{mod}\ 10),\qquad n\equiv 10\ (\mathrm{mod}\ 11),\qquad n\equiv 11\ (\mathrm{mod}\ 12).$$
В каждом случае остаток ровно на $1$ меньше делителя. Значит, **во всех трёх случаях** $n+1$ делится нацело:
$$n+1\ \vdots\ 10,\qquad n+1\ \vdots\ 11,\qquad n+1\ \vdots\ 12.$$
Поэтому $n+1$ делится на $\mathrm{HOK}(10,11,12)$.
$$10=2\cdot5,\quad 11=11,\quad 12=2^2\cdot3 \;\Longrightarrow\; \mathrm{HOK}=2^2\cdot3\cdot5\cdot11=660.$$
Наименьшее натуральное решение: $n+1=660$, то есть $n=659$.

**Проверка.** $659=10\cdot65+9$ ✓, $659=11\cdot59+10$ ✓, $659=12\cdot54+11$ ✓'''),

dict(n=9, pts='0,9', ans='C) $100$',
uz=r'''$ABCD$ teng yonli trapetsiya, $BC=8$, $AD=12$, diagonallari $AC\perp BD$.

Diagonallarning kesishish nuqtasini $O$ deylik. Teng yonli trapetsiyada $\angle OAD=\angle ODA$, demak $\triangle AOD$ teng yonli; unda $\angle AOD=90^\circ$ boʻlgani uchun u **teng yonli toʻgʻri burchakli** uchburchak. Xuddi shunday $\triangle BOC$ ham teng yonli toʻgʻri burchakli.

Teng yonli toʻgʻri burchakli uchburchakda gipotenuzaga tushirilgan balandlik gipotenuzaning yarmiga teng. Shuning uchun $O$ dan $AD$ gacha boʻlgan masofa $\frac{12}{2}=6$, $O$ dan $BC$ gacha boʻlgan masofa $\frac{8}{2}=4$. Trapetsiyaning balandligi:
$$h=6+4=10=\frac{AD+BC}{2}.$$
Yuzi:
$$S=\frac{AD+BC}{2}\cdot h=10\cdot10=100.$$
**Umumiy qoida.** Diagonallari perpendikulyar boʻlgan teng yonli trapetsiyaning balandligi oʻrta chizigʻiga teng, yuzi esa $S=\left(\frac{a+b}{2}\right)^2$.''',
ru=r'''$ABCD$ — равнобедренная трапеция, $BC=8$, $AD=12$, диагонали $AC\perp BD$.

Пусть $O$ — точка пересечения диагоналей. В равнобедренной трапеции $\angle OAD=\angle ODA$, значит, $\triangle AOD$ равнобедренный; так как $\angle AOD=90^\circ$, он **равнобедренный прямоугольный**. Аналогично $\triangle BOC$ тоже равнобедренный прямоугольный.

В равнобедренном прямоугольном треугольнике высота к гипотенузе равна половине гипотенузы. Поэтому расстояние от $O$ до $AD$ равно $\frac{12}{2}=6$, а до $BC$ равно $\frac{8}{2}=4$. Высота трапеции:
$$h=6+4=10=\frac{AD+BC}{2}.$$
Площадь:
$$S=\frac{AD+BC}{2}\cdot h=10\cdot10=100.$$
**Общее правило.** У равнобедренной трапеции с перпендикулярными диагоналями высота равна средней линии, а площадь равна $S=\left(\frac{a+b}{2}\right)^2$.'''),

dict(n=10, pts='0,9', ans='D) $9$',
uz=r'''Ichma-ich joylashgan ildizlarni **toʻliq kvadrat** shaklida yozamiz.

$4+2\sqrt3$: $(\sqrt3+1)^2=3+2\sqrt3+1=4+2\sqrt3$ ✓, demak
$$\sqrt{4+2\sqrt3}=\sqrt3+1 .$$

$49+8\sqrt3$: $(a+b\sqrt3)^2=a^2+3b^2+2ab\sqrt3$ koʻrinishida izlaymiz. $2ab=8\Rightarrow ab=4$ va $a^2+3b^2=49$. $a=1,\ b=4$: $1+48=49$ ✓, demak
$$\sqrt{49+8\sqrt3}=1+4\sqrt3 .$$

Endi qavs ichini hisoblaymiz:
$$4\left(\sqrt3+1\right)-\left(1+4\sqrt3\right)=4\sqrt3+4-1-4\sqrt3=3 .$$
Javob: $3^2=9$.''',
ru=r'''Запишем подкоренные выражения в виде **полного квадрата**.

$4+2\sqrt3$: так как $(\sqrt3+1)^2=3+2\sqrt3+1=4+2\sqrt3$ ✓, то
$$\sqrt{4+2\sqrt3}=\sqrt3+1 .$$

$49+8\sqrt3$: ищем в виде $(a+b\sqrt3)^2=a^2+3b^2+2ab\sqrt3$. Из $2ab=8$ следует $ab=4$, и $a^2+3b^2=49$. Подходит $a=1,\ b=4$: $1+48=49$ ✓, значит,
$$\sqrt{49+8\sqrt3}=1+4\sqrt3 .$$

Вычисляем скобку:
$$4\left(\sqrt3+1\right)-\left(1+4\sqrt3\right)=4\sqrt3+4-1-4\sqrt3=3 .$$
Ответ: $3^2=9$.'''),

dict(n=11, pts='1,5', ans='C) $36$',
uz=r'''Burchak $60^\circ$, uning yarmi $\alpha=30^\circ$. Burchakka ichki chizilgan aylananing markazi bissektrisada yotadi va markazdan burchak uchigacha boʻlgan masofa
$$d=\frac{r}{\sin 30^\circ}=2r$$
(chunki markazdan tomonga tushirilgan perpendikulyar radiusga teng va u $\alpha$ burchakli toʻgʻri burchakli uchburchakning kateti).

Kichik aylana uchun $d_1=2r=24$, katta aylana uchun $d_2=2R$. Ikkala markaz ham bir nurda yotadi, aylanalar **tashqi** urinadi, demak markazlar orasidagi masofa radiuslar yigʻindisiga teng:
$$2R-2r=R+r \quad\Longrightarrow\quad R=3r=3\cdot12=36 .$$
**Tekshirish.** $d_1=24$, $d_2=72$, $d_2-d_1=48=12+36$ ✓''',
ru=r'''Угол равен $60^\circ$, его половина $\alpha=30^\circ$. Центр вписанной в угол окружности лежит на биссектрисе, а расстояние от центра до вершины угла равно
$$d=\frac{r}{\sin 30^\circ}=2r$$
(перпендикуляр из центра к стороне равен радиусу и является катетом прямоугольного треугольника с углом $\alpha$).

Для малой окружности $d_1=2r=24$, для большой $d_2=2R$. Оба центра лежат на одном луче, окружности касаются **внешним** образом, значит, расстояние между центрами равно сумме радиусов:
$$2R-2r=R+r \quad\Longrightarrow\quad R=3r=3\cdot12=36 .$$
**Проверка.** $d_1=24$, $d_2=72$, $d_2-d_1=48=12+36$ ✓'''),

dict(n=12, pts='1,5', ans='B) $3$',
uz=r'''$u=2^{x}$ belgilash kiritamiz. Unda $2^{x+2}=4u$, $2^{1-x}=\dfrac{2}{u}$, $2^{-x}=\dfrac1u$, va
$$f(x)=\frac{4u+\frac2u}{u+\frac1u}=\frac{4u^2+2}{u^2+1}.$$
$x\to-x$ almashtirishda $u\to\dfrac1u$, shuning uchun
$$f(-x)=\frac{\frac{4}{u^2}+2}{\frac{1}{u^2}+1}=\frac{4+2u^2}{1+u^2}.$$
Endi yigʻindini olamiz — bu asosiy hiyla:
$$f(x)+f(-x)=\frac{4u^2+2+2u^2+4}{u^2+1}=\frac{6u^2+6}{u^2+1}=6 .$$
Demak yigʻindi $x$ ga umuman bogʻliq emas. $f(t)=3$ boʻlsa,
$$f(-t)=6-3=3 .$$''',
ru=r'''Введём обозначение $u=2^{x}$. Тогда $2^{x+2}=4u$, $2^{1-x}=\dfrac{2}{u}$, $2^{-x}=\dfrac1u$, и
$$f(x)=\frac{4u+\frac2u}{u+\frac1u}=\frac{4u^2+2}{u^2+1}.$$
При замене $x\to-x$ имеем $u\to\dfrac1u$, поэтому
$$f(-x)=\frac{\frac{4}{u^2}+2}{\frac{1}{u^2}+1}=\frac{4+2u^2}{1+u^2}.$$
Теперь складываем — в этом весь приём:
$$f(x)+f(-x)=\frac{4u^2+2+2u^2+4}{u^2+1}=\frac{6u^2+6}{u^2+1}=6 .$$
Сумма вообще не зависит от $x$. Значит, при $f(t)=3$
$$f(-t)=6-3=3 .$$'''),

dict(n=13, pts='1,5', ans='A) $34$',
uz=r'''Viyet teoremasi: $x_1+x_2=-2$, $x_1x_2=-1$.

**Kvadratlar yigʻindisi:**
$$x_1^2+x_2^2=\left(x_1+x_2\right)^2-2x_1x_2=(-2)^2-2\cdot(-1)=4+2=6 .$$

**Toʻrtinchi darajalar yigʻindisi:** endi $x_1^2$ va $x_2^2$ uchun xuddi shu ayniyatni qoʻllaymiz:
$$x_1^4+x_2^4=\left(x_1^2+x_2^2\right)^2-2\left(x_1x_2\right)^2=6^2-2\cdot(-1)^2=36-2=34 .$$''',
ru=r'''По теореме Виета: $x_1+x_2=-2$, $x_1x_2=-1$.

**Сумма квадратов:**
$$x_1^2+x_2^2=\left(x_1+x_2\right)^2-2x_1x_2=(-2)^2-2\cdot(-1)=4+2=6 .$$

**Сумма четвёртых степеней:** применяем то же тождество к $x_1^2$ и $x_2^2$:
$$x_1^4+x_2^4=\left(x_1^2+x_2^2\right)^2-2\left(x_1x_2\right)^2=6^2-2\cdot(-1)^2=36-2=34 .$$'''),

dict(n=14, pts='1,5', ans='B) $10$',
uz=r'''**Chap tomon.** Barcha kasrlarning maxraji bir xil — $n^2$:
$$\frac{(n-1)+(n-2)+\dots+2+1}{n^2}=\frac{\frac{n(n-1)}{2}}{n^2}=\frac{n-1}{2n}.$$

**Oʻng tomon.** Maxrajda dastlabki $n$ ta toq son yigʻindisi turibdi:
$$1+3+5+\dots+(2n-1)=n^2 .$$
Demak oʻng tomon $\dfrac{45}{n^2}$.

**Tenglama.**
$$\frac{n-1}{2n}=\frac{45}{n^2}\ \Longrightarrow\ n^2(n-1)=90n\ \Longrightarrow\ n(n-1)=90 .$$
$$n^2-n-90=0\ \Longrightarrow\ n=\frac{1\pm\sqrt{1+360}}{2}=\frac{1\pm19}{2}.$$
$n=10$ yoki $n=-9$. Shart boʻyicha $n$ musbat butun, demak $n=10$ — yagona yechim, ularning yigʻindisi ham $10$.

**Tekshirish.** $\frac{9}{20}=\frac{45}{100}$ ✓''',
ru=r'''**Левая часть.** У всех дробей один знаменатель $n^2$:
$$\frac{(n-1)+(n-2)+\dots+2+1}{n^2}=\frac{\frac{n(n-1)}{2}}{n^2}=\frac{n-1}{2n}.$$

**Правая часть.** В знаменателе стоит сумма первых $n$ нечётных чисел:
$$1+3+5+\dots+(2n-1)=n^2 .$$
Значит, правая часть равна $\dfrac{45}{n^2}$.

**Уравнение.**
$$\frac{n-1}{2n}=\frac{45}{n^2}\ \Longrightarrow\ n^2(n-1)=90n\ \Longrightarrow\ n(n-1)=90 .$$
$$n^2-n-90=0\ \Longrightarrow\ n=\frac{1\pm\sqrt{1+360}}{2}=\frac{1\pm19}{2}.$$
Получаем $n=10$ или $n=-9$. По условию $n$ — натуральное, значит, $n=10$ — единственное, и их сумма тоже $10$.

**Проверка.** $\frac{9}{20}=\frac{45}{100}$ ✓'''),

dict(n=15, pts='1,5', ans='C) $2$',
uz=r'''$S=a+b+c+d$ deylik. Har bir tenglikning ikkala tomoniga $1$ qoʻshamiz:
$$\frac{a+b+c}{d}+1=\frac{a+b+c+d}{d}=\frac{S}{d},$$
va xuddi shunday qolganlari uchun ham. Demak
$$\frac{S}{a}=\frac{S}{b}=\frac{S}{c}=\frac{S}{d}=r+1 .$$

**1-hol: $S\ne0$.** Unda $a=b=c=d$ (barchasi $\frac{S}{r+1}$ ga teng). Bu holda
$$r=\frac{a+a+a}{a}=3 .$$

**2-hol: $S=0$.** Unda $a+b+c=-d$, shuning uchun
$$r=\frac{a+b+c}{d}=\frac{-d}{d}=-1 .$$
Bunday sonlar mavjud, masalan $a=b=1,\ c=d=-1$: $S=0$ va har bir nisbat $-1$ ✓

Demak $r\in\{3;-1\}$, yigʻindi $3+(-1)=2$.''',
ru=r'''Обозначим $S=a+b+c+d$. Прибавим к обеим частям каждого равенства единицу:
$$\frac{a+b+c}{d}+1=\frac{a+b+c+d}{d}=\frac{S}{d},$$
и так же для остальных. Получаем
$$\frac{S}{a}=\frac{S}{b}=\frac{S}{c}=\frac{S}{d}=r+1 .$$

**Случай 1: $S\ne0$.** Тогда $a=b=c=d$ (все равны $\frac{S}{r+1}$), и
$$r=\frac{a+a+a}{a}=3 .$$

**Случай 2: $S=0$.** Тогда $a+b+c=-d$, поэтому
$$r=\frac{a+b+c}{d}=\frac{-d}{d}=-1 .$$
Такие числа существуют, например $a=b=1,\ c=d=-1$: тогда $S=0$ и каждое отношение равно $-1$ ✓

Итак, $r\in\{3;-1\}$, сумма равна $3+(-1)=2$.'''),

dict(n=16, pts='1,5', ans=r'A) $2^{45}$',
uz=r'''Shartni $n=2^{k-1}$ da qoʻllaymiz:
$$f\left(2^{k}\right)=f\left(2\cdot 2^{k-1}\right)=2^{k-1}\,f\left(2^{k-1}\right).$$
Bu rekurrent munosabatni $k=10$ dan $k=1$ gacha ketma-ket qoʻllaymiz:
$$f\left(2^{10}\right)=2^{9}\cdot2^{8}\cdots2^{1}\cdot2^{0}\cdot f(1).$$
$f(1)=1$, demak
$$f\left(2^{10}\right)=2^{\,0+1+2+\dots+9}=2^{\frac{9\cdot10}{2}}=2^{45}.$$
**Boshidan tekshirish.** $f(2)=f(2\cdot1)=1\cdot f(1)=1=2^0$ ✓, $f(4)=2f(2)=2=2^1$ ✓, $f(8)=4f(4)=8=2^3$ ✓ — daraja koʻrsatkichlari $0,1,3,6,10,\dots$ yaʼni $\frac{(k-1)k}{2}$; $k=10$ da $45$ ✓''',
ru=r'''Применим условие при $n=2^{k-1}$:
$$f\left(2^{k}\right)=f\left(2\cdot 2^{k-1}\right)=2^{k-1}\,f\left(2^{k-1}\right).$$
Применяем это рекуррентное соотношение последовательно от $k=10$ до $k=1$:
$$f\left(2^{10}\right)=2^{9}\cdot2^{8}\cdots2^{1}\cdot2^{0}\cdot f(1).$$
Так как $f(1)=1$,
$$f\left(2^{10}\right)=2^{\,0+1+2+\dots+9}=2^{\frac{9\cdot10}{2}}=2^{45}.$$
**Проверка с начала.** $f(2)=f(2\cdot1)=1\cdot f(1)=1=2^0$ ✓, $f(4)=2f(2)=2=2^1$ ✓, $f(8)=4f(4)=8=2^3$ ✓ — показатели $0,1,3,6,10,\dots$, то есть $\frac{(k-1)k}{2}$; при $k=10$ получаем $45$ ✓'''),

dict(n=17, pts='1,5', ans='C) $44$',
uz=r'''Barcha ikki xonali sonlar koʻpaytmasi
$$10\cdot11\cdot12\cdots99=\frac{99!}{9!}.$$
Izlanayotgan $n$ — bu koʻpaytmadagi $3$ ning eng katta darajasi, yaʼni $v_3\!\left(\frac{99!}{9!}\right)=v_3(99!)-v_3(9!)$.

**Lежандр formulasi** boʻyicha
$$v_3(99!)=\left\lfloor\frac{99}{3}\right\rfloor+\left\lfloor\frac{99}{9}\right\rfloor+\left\lfloor\frac{99}{27}\right\rfloor+\left\lfloor\frac{99}{81}\right\rfloor=33+11+3+1=48 ,$$
$$v_3(9!)=\left\lfloor\frac{9}{3}\right\rfloor+\left\lfloor\frac{9}{9}\right\rfloor=3+1=4 .$$
Demak
$$n=48-4=44 .$$''',
ru=r'''Произведение всех двузначных чисел равно
$$10\cdot11\cdot12\cdots99=\frac{99!}{9!}.$$
Искомое $n$ — наибольшая степень тройки в этом произведении, то есть $v_3\!\left(\frac{99!}{9!}\right)=v_3(99!)-v_3(9!)$.

По **формуле Лежандра**
$$v_3(99!)=\left\lfloor\frac{99}{3}\right\rfloor+\left\lfloor\frac{99}{9}\right\rfloor+\left\lfloor\frac{99}{27}\right\rfloor+\left\lfloor\frac{99}{81}\right\rfloor=33+11+3+1=48 ,$$
$$v_3(9!)=\left\lfloor\frac{9}{3}\right\rfloor+\left\lfloor\frac{9}{9}\right\rfloor=3+1=4 .$$
Значит,
$$n=48-4=44 .$$'''),

dict(n=18, pts='1,5', ans='B) $43$',
uz=r'''Oxirgi ikkita raqam — bu $3^{2025}\ \mathrm{mod}\ 100$.

$3$ ning $100$ moduli boʻyicha darajalarini kuzatamiz:
$$3^1=3,\ 3^2=9,\ 3^4=81,\ 3^5=243\equiv43,\ 3^{10}\equiv43^2=1849\equiv49,\ 3^{20}\equiv49^2=2401\equiv1 .$$
Demak davr $20$ ga teng: $3^{20}\equiv1\ (\mathrm{mod}\ 100)$.

$2025=20\cdot101+5$, shuning uchun
$$3^{2025}=\left(3^{20}\right)^{101}\cdot3^{5}\equiv 1^{101}\cdot243\equiv 43\ (\mathrm{mod}\ 100).$$
Oxirgi ikkita raqam — $43$.''',
ru=r'''Две последние цифры — это $3^{2025}\ \mathrm{mod}\ 100$.

Посмотрим на степени тройки по модулю $100$:
$$3^1=3,\ 3^2=9,\ 3^4=81,\ 3^5=243\equiv43,\ 3^{10}\equiv43^2=1849\equiv49,\ 3^{20}\equiv49^2=2401\equiv1 .$$
Значит, период равен $20$: $3^{20}\equiv1\ (\mathrm{mod}\ 100)$.

Так как $2025=20\cdot101+5$,
$$3^{2025}=\left(3^{20}\right)^{101}\cdot3^{5}\equiv 1^{101}\cdot243\equiv 43\ (\mathrm{mod}\ 100).$$
Последние две цифры — $43$.'''),

dict(n=19, pts='1,5', ans='A) $1$',
uz=r'''Tenglamani koʻpaytuvchilarga ajratamiz:
$$p^2-1=2q^2 \quad\Longrightarrow\quad (p-1)(p+1)=2q^2 .$$

**$p$ toq.** Agar $p=2$ boʻlsa, $4-2q^2=1$, yaʼni $2q^2=3$ — butun yechim yoʻq. Demak $p$ toq tub son.

**$8$ ga boʻlinish.** $p$ toq boʻlgani uchun $p-1$ va $p+1$ — ketma-ket **juft** sonlar, ulardan biri albatta $4$ ga boʻlinadi. Demak ularning koʻpaytmasi $8$ ga boʻlinadi:
$$8\mid 2q^2 \quad\Longrightarrow\quad 4\mid q^2 \quad\Longrightarrow\quad q\ \text{juft}.$$
$q$ tub va juft boʻlsa, $q=2$.

**Yakun.** $q=2$ da $p^2=1+2\cdot4=9$, $p=3$ — tub ✓

Yagona juftlik $(p;q)=(3;2)$, demak $1$ ta.''',
ru=r'''Разложим уравнение на множители:
$$p^2-1=2q^2 \quad\Longrightarrow\quad (p-1)(p+1)=2q^2 .$$

**$p$ нечётно.** Если $p=2$, то $4-2q^2=1$, то есть $2q^2=3$ — целых решений нет. Значит, $p$ — нечётное простое.

**Делимость на $8$.** Так как $p$ нечётно, $p-1$ и $p+1$ — последовательные **чётные** числа, и одно из них обязательно делится на $4$. Значит, их произведение делится на $8$:
$$8\mid 2q^2 \quad\Longrightarrow\quad 4\mid q^2 \quad\Longrightarrow\quad q\ \text{чётно}.$$
Простое чётное число одно: $q=2$.

**Итог.** При $q=2$ получаем $p^2=1+2\cdot4=9$, $p=3$ — простое ✓

Единственная пара $(p;q)=(3;2)$, то есть $1$.'''),

dict(n=20, pts='1,5', ans='D) $132$',
uz=r'''$\dfrac{a}{b}=\dfrac{b}{c}=\dfrac{c}{d}$ sharti $a,b,c,d$ **geometrik progressiya** ekanini bildiradi. Uning maxrajini $k$ deylik:
$$b=ak,\qquad c=ak^2,\qquad d=ak^3 .$$

Berilganlarni yozamiz:
$$a+d=a\left(1+k^3\right)=12,\qquad ad=a^2k^3=11 .$$

Endi izlanayotgan ifodani shu ikki miqdor orqali ifodalaymiz:
$$b^3+c^3=a^3k^3+a^3k^6=a^3k^3\left(1+k^3\right).$$
Buni ataylab ikkiga ajratamiz:
$$a^3k^3\left(1+k^3\right)=\underbrace{\left(a^2k^3\right)}_{=\,ad\,=\,11}\cdot\underbrace{\Bigl(a\left(1+k^3\right)\Bigr)}_{=\,a+d\,=\,12}=11\cdot12=132 .$$

**Eslatma.** Geometrik progressiyada $bc=ad=11$, shuning uchun javobni $b^3+c^3=(b+c)^3-3bc(b+c)$ orqali ham topish mumkin.''',
ru=r'''Условие $\dfrac{a}{b}=\dfrac{b}{c}=\dfrac{c}{d}$ означает, что $a,b,c,d$ — **геометрическая прогрессия**. Обозначим её знаменатель через $k$:
$$b=ak,\qquad c=ak^2,\qquad d=ak^3 .$$

Запишем данные:
$$a+d=a\left(1+k^3\right)=12,\qquad ad=a^2k^3=11 .$$

Выразим искомое через эти две величины:
$$b^3+c^3=a^3k^3+a^3k^6=a^3k^3\left(1+k^3\right).$$
Специально разбиваем это на два множителя:
$$a^3k^3\left(1+k^3\right)=\underbrace{\left(a^2k^3\right)}_{=\,ad\,=\,11}\cdot\underbrace{\Bigl(a\left(1+k^3\right)\Bigr)}_{=\,a+d\,=\,12}=11\cdot12=132 .$$

**Замечание.** В геометрической прогрессии $bc=ad=11$, поэтому ответ можно получить и через $b^3+c^3=(b+c)^3-3bc(b+c)$.'''),
]

P += [

dict(n=21, pts='2,6', ans=r'$108^\circ$',
uz=r'''Yoylar bilan ishlaymiz. $A,B,C,D$ nuqtalar aylanada shu tartibda yotadi. Yoylarni belgilaymiz:
$$\overset{\frown}{AB}=\beta_1,\quad \overset{\frown}{BC}=\beta_2,\quad \overset{\frown}{CD}=\beta_3,\quad \overset{\frown}{DA}=\beta_4,\qquad \beta_1+\beta_2+\beta_3+\beta_4=360^\circ .$$
Nisbat boʻyicha $\angle BAT=6x$, $\angle BAC=2x$, $\angle CAD=3x$ deb olamiz.

**Urinma va vatar orasidagi burchak** yoyning yarmiga teng:
$$\angle BAT=\tfrac12\beta_1 \ \Longrightarrow\ \beta_1=12x .$$

**Ichki chizilgan burchaklar** ham tayanch yoyning yarmiga teng:
$$\angle BAC=\tfrac12\beta_2 \ \Longrightarrow\ \beta_2=4x,\qquad \angle CAD=\tfrac12\beta_3 \ \Longrightarrow\ \beta_3=6x .$$
$$\angle ACD=\tfrac12\beta_4=81^\circ \ \Longrightarrow\ \beta_4=162^\circ .$$

**Yoylar yigʻindisi:**
$$12x+4x+6x+162^\circ=360^\circ \ \Longrightarrow\ 22x=198^\circ \ \Longrightarrow\ x=9^\circ .$$

Demak $\beta_1=108^\circ,\ \beta_2=36^\circ,\ \beta_3=54^\circ,\ \beta_4=162^\circ$ (yigʻindi $360^\circ$ ✓).

$\angle ABC$ — $B$ dagi ichki chizilgan burchak, u $B$ ni oʻz ichiga olmagan $\overset{\frown}{CDA}$ yoyga tayanadi:
$$\angle ABC=\tfrac12\left(\beta_3+\beta_4\right)=\tfrac12\left(54^\circ+162^\circ\right)=108^\circ .$$''',
ru=r'''Будем работать с дугами. Точки $A,B,C,D$ лежат на окружности в этом порядке. Обозначим дуги:
$$\overset{\frown}{AB}=\beta_1,\quad \overset{\frown}{BC}=\beta_2,\quad \overset{\frown}{CD}=\beta_3,\quad \overset{\frown}{DA}=\beta_4,\qquad \beta_1+\beta_2+\beta_3+\beta_4=360^\circ .$$
По отношению положим $\angle BAT=6x$, $\angle BAC=2x$, $\angle CAD=3x$.

**Угол между касательной и хордой** равен половине дуги:
$$\angle BAT=\tfrac12\beta_1 \ \Longrightarrow\ \beta_1=12x .$$

**Вписанные углы** тоже равны половине дуги, на которую опираются:
$$\angle BAC=\tfrac12\beta_2 \ \Longrightarrow\ \beta_2=4x,\qquad \angle CAD=\tfrac12\beta_3 \ \Longrightarrow\ \beta_3=6x .$$
$$\angle ACD=\tfrac12\beta_4=81^\circ \ \Longrightarrow\ \beta_4=162^\circ .$$

**Сумма дуг:**
$$12x+4x+6x+162^\circ=360^\circ \ \Longrightarrow\ 22x=198^\circ \ \Longrightarrow\ x=9^\circ .$$

Итак, $\beta_1=108^\circ,\ \beta_2=36^\circ,\ \beta_3=54^\circ,\ \beta_4=162^\circ$ (сумма $360^\circ$ ✓).

$\angle ABC$ — вписанный угол при $B$, опирающийся на дугу $\overset{\frown}{CDA}$, не содержащую $B$:
$$\angle ABC=\tfrac12\left(\beta_3+\beta_4\right)=\tfrac12\left(54^\circ+162^\circ\right)=108^\circ .$$'''),

dict(n=22, pts='2,6', ans='$7$',
uz=r'''Yigʻindini umumiy koʻrinishda yozamiz: koeffitsiyentlar $1,4,7,10,\dots,67$ — ayirmasi $3$ boʻlgan arifmetik progressiya, yaʼni $3k+1$, va
$$S=\sum_{k=0}^{22}(3k+1)2^{k}=3\sum_{k=0}^{22}k\,2^{k}+\sum_{k=0}^{22}2^{k}.$$

**Ikkinchi yigʻindi:** $\displaystyle\sum_{k=0}^{22}2^{k}=2^{23}-1$.

**Birinchi yigʻindi.** Maʼlum formula: $\displaystyle\sum_{k=0}^{n}k\,2^{k}=(n-1)2^{\,n+1}+2$. $n=22$ da
$$\sum_{k=0}^{22}k\,2^{k}=21\cdot2^{23}+2 .$$

**Birlashtiramiz:**
$$S=3\left(21\cdot2^{23}+2\right)+2^{23}-1=63\cdot2^{23}+2^{23}+5=64\cdot2^{23}+5=2^{29}+5 .$$

**Oxirgi raqam.** $2$ ning darajalari oxirgi raqamlari $2,4,8,6$ davr bilan takrorlanadi. $29=4\cdot7+1$, demak $2^{29}$ ning oxirgi raqami $2$. Shuning uchun $S$ ning oxirgi raqami
$$2+5=7 .$$''',
ru=r'''Запишем сумму в общем виде: коэффициенты $1,4,7,10,\dots,67$ образуют арифметическую прогрессию с разностью $3$, то есть равны $3k+1$, и
$$S=\sum_{k=0}^{22}(3k+1)2^{k}=3\sum_{k=0}^{22}k\,2^{k}+\sum_{k=0}^{22}2^{k}.$$

**Вторая сумма:** $\displaystyle\sum_{k=0}^{22}2^{k}=2^{23}-1$.

**Первая сумма.** Известная формула: $\displaystyle\sum_{k=0}^{n}k\,2^{k}=(n-1)2^{\,n+1}+2$. При $n=22$
$$\sum_{k=0}^{22}k\,2^{k}=21\cdot2^{23}+2 .$$

**Объединяем:**
$$S=3\left(21\cdot2^{23}+2\right)+2^{23}-1=63\cdot2^{23}+2^{23}+5=64\cdot2^{23}+5=2^{29}+5 .$$

**Последняя цифра.** Последние цифры степеней двойки повторяются с периодом $2,4,8,6$. Так как $29=4\cdot7+1$, последняя цифра $2^{29}$ равна $2$. Поэтому последняя цифра $S$ равна
$$2+5=7 .$$'''),

dict(n=23, pts='2,6', ans='$4$',
uz=r'''$N=\overline{BAA2025AAB}$ — oʻn xonali son. Uni yoyib yozamiz:
$$N=B\cdot10^9+A\cdot10^8+A\cdot10^7+2\cdot10^6+0\cdot10^5+2\cdot10^4+5\cdot10^3+A\cdot10^2+A\cdot10+B .$$

$10$ ning darajalari $7$ moduli boʻyicha $6$ davr bilan takrorlanadi:
$$10^0\equiv1,\ 10^1\equiv3,\ 10^2\equiv2,\ 10^3\equiv6,\ 10^4\equiv4,\ 10^5\equiv5,\ 10^6\equiv1,\ 10^7\equiv3,\ 10^8\equiv2,\ 10^9\equiv6 .$$

Oʻrniga qoʻyamiz:
$$N\equiv 6B+2A+3A+2\cdot1+0+2\cdot4+5\cdot6+2A+3A+1\cdot B\ (\mathrm{mod}\ 7)$$
$$\equiv 7B+10A+40 \equiv 0+3A+5\ (\mathrm{mod}\ 7).$$
($7B\equiv0$, $10A\equiv3A$, $40=35+5\equiv5$.)

**Shart.** $3A+5\equiv0\ (\mathrm{mod}\ 7)$, yaʼni $3A\equiv2\ (\mathrm{mod}\ 7)$. $3\cdot3=9\equiv2$, demak $A\equiv3\ (\mathrm{mod}\ 7)$. Raqamlar orasida $A=3$ yoki $A=10$ — faqat $A=3$ mos.

**$B$.** $B$ ga hech qanday cheklov yoʻq, faqat $N$ ning birinchi raqami boʻlgani uchun $B\ge1$. Eng kichigi $B=1$.

$$A+B=3+1=4 .$$
**Tekshirish.** $1332025331:7=190289333$ ✓''',
ru=r'''$N=\overline{BAA2025AAB}$ — десятизначное число. Распишем его:
$$N=B\cdot10^9+A\cdot10^8+A\cdot10^7+2\cdot10^6+0\cdot10^5+2\cdot10^4+5\cdot10^3+A\cdot10^2+A\cdot10+B .$$

Степени десятки по модулю $7$ повторяются с периодом $6$:
$$10^0\equiv1,\ 10^1\equiv3,\ 10^2\equiv2,\ 10^3\equiv6,\ 10^4\equiv4,\ 10^5\equiv5,\ 10^6\equiv1,\ 10^7\equiv3,\ 10^8\equiv2,\ 10^9\equiv6 .$$

Подставляем:
$$N\equiv 6B+2A+3A+2\cdot1+0+2\cdot4+5\cdot6+2A+3A+1\cdot B\ (\mathrm{mod}\ 7)$$
$$\equiv 7B+10A+40 \equiv 0+3A+5\ (\mathrm{mod}\ 7).$$
($7B\equiv0$, $10A\equiv3A$, $40=35+5\equiv5$.)

**Условие.** $3A+5\equiv0\ (\mathrm{mod}\ 7)$, то есть $3A\equiv2\ (\mathrm{mod}\ 7)$. Так как $3\cdot3=9\equiv2$, получаем $A\equiv3\ (\mathrm{mod}\ 7)$. Среди цифр подходит только $A=3$.

**Цифра $B$.** На $B$ ограничений нет, кроме того, что это первая цифра числа, значит $B\ge1$. Наименьшее $B=1$.

$$A+B=3+1=4 .$$
**Проверка.** $1332025331:7=190289333$ ✓'''),

dict(n=24, pts='2,6', ans='$675$',
uz=r'''Avval $12^4$ ni tub koʻpaytuvchilarga ajratamiz:
$$12^4=\left(2^2\cdot3\right)^4=2^{8}\cdot3^{4}.$$

$xyz=2^{8}3^{4}$ boʻlishi uchun har bir tub sonning darajasini $x,y,z$ orasida taqsimlash kerak, va $2$ hamda $3$ **bir-biridan mustaqil** taqsimlanadi.

**Ikkilik darajalar.** $x=2^{\alpha_1}\cdots,\ y=2^{\alpha_2}\cdots,\ z=2^{\alpha_3}\cdots$ boʻlsa,
$$\alpha_1+\alpha_2+\alpha_3=8,\qquad \alpha_i\ge0 .$$
Bunday yechimlar soni «toʻsiqlar va sharlar» usuli boʻyicha
$$\binom{8+2}{2}=\binom{10}{2}=45 .$$

**Uchlik darajalar.** Xuddi shunday $\beta_1+\beta_2+\beta_3=4$:
$$\binom{4+2}{2}=\binom{6}{2}=15 .$$

**Koʻpaytirish qoidasi boʻyicha**
$$45\cdot15=675 .$$
(Uchliklar tartiblangan, yaʼni $(1;2;3)$ va $(1;3;2)$ alohida sanaladi — shart shuni talab qiladi.)''',
ru=r'''Сначала разложим $12^4$ на простые множители:
$$12^4=\left(2^2\cdot3\right)^4=2^{8}\cdot3^{4}.$$

Чтобы $xyz=2^{8}3^{4}$, нужно распределить степень каждого простого между $x,y,z$, причём $2$ и $3$ распределяются **независимо**.

**Степени двойки.** Если $x=2^{\alpha_1}\cdots,\ y=2^{\alpha_2}\cdots,\ z=2^{\alpha_3}\cdots$, то
$$\alpha_1+\alpha_2+\alpha_3=8,\qquad \alpha_i\ge0 .$$
Число таких решений по методу «шаров и перегородок» равно
$$\binom{8+2}{2}=\binom{10}{2}=45 .$$

**Степени тройки.** Аналогично $\beta_1+\beta_2+\beta_3=4$:
$$\binom{4+2}{2}=\binom{6}{2}=15 .$$

**По правилу произведения**
$$45\cdot15=675 .$$
(Тройки упорядочены, то есть $(1;2;3)$ и $(1;3;2)$ считаются разными — этого требует условие.)'''),

dict(n=25, pts='2,6', ans='$8$',
uz=r'''$s=\sin\alpha$, $c=\cos\alpha$ deylik; $0<\alpha<\frac{\pi}{2}$ boʻlgani uchun $s,c>0$.

Shartni umumiy maxrajga keltiramiz:
$$\frac{s}{c}+s=1 \ \Longrightarrow\ s+sc=c \ \Longrightarrow\ s=c(1-s) \ \Longrightarrow\ c=\frac{s}{1-s}.$$

Buni $s^2+c^2=1$ ga qoʻyamiz:
$$s^2+\frac{s^2}{(1-s)^2}=1 \ \Longrightarrow\ s^2\left[(1-s)^2+1\right]=(1-s)^2 .$$

$u=1-s$ (demak $s=1-u$, $0<u<1$) almashtirishini bajaramiz:
$$(1-u)^2\left(u^2+1\right)=u^2 .$$
Qavslarni ochamiz:
$$u^4-2u^3+u^2-2u+1=0 .$$
Bu **qaytma** tenglama. $u^2$ ga boʻlamiz:
$$u^2+\frac{1}{u^2}-2\left(u+\frac1u\right)+1=0 .$$
$v=u+\dfrac1u$ belgilasak, $u^2+\dfrac1{u^2}=v^2-2$, va
$$v^2-2v-1=0 \ \Longrightarrow\ v=1\pm\sqrt2 .$$
$0<u<1$ boʻlgani uchun $v=u+\frac1u>2$, demak $v=1+\sqrt2$.

Endi izlanayotgan ifodani $v$ orqali yozamiz:
$$\sin2\alpha=2sc=2s\cdot\frac{s}{1-s}=\frac{2s^2}{1-s}=\frac{2(1-u)^2}{u}=2\left(\frac1u-2+u\right)=2(v-2)=2\left(\sqrt2-1\right).$$
Shuning uchun
$$\left(\sin2\alpha+2\right)^2=\left(2\sqrt2-2+2\right)^2=\left(2\sqrt2\right)^2=8 .$$
**Sonli tekshirish.** $\alpha\approx0{,}48815$ rad: $\tan\alpha+\sin\alpha\approx0{,}5299+0{,}4691\approx1$ ✓, $\sin2\alpha\approx0{,}8284\approx2\sqrt2-2$ ✓''',
ru=r'''Обозначим $s=\sin\alpha$, $c=\cos\alpha$; так как $0<\alpha<\frac{\pi}{2}$, то $s,c>0$.

Приведём условие к общему знаменателю:
$$\frac{s}{c}+s=1 \ \Longrightarrow\ s+sc=c \ \Longrightarrow\ s=c(1-s) \ \Longrightarrow\ c=\frac{s}{1-s}.$$

Подставим в $s^2+c^2=1$:
$$s^2+\frac{s^2}{(1-s)^2}=1 \ \Longrightarrow\ s^2\left[(1-s)^2+1\right]=(1-s)^2 .$$

Сделаем замену $u=1-s$ (тогда $s=1-u$, $0<u<1$):
$$(1-u)^2\left(u^2+1\right)=u^2 .$$
Раскрывая скобки:
$$u^4-2u^3+u^2-2u+1=0 .$$
Это **возвратное** уравнение. Разделим на $u^2$:
$$u^2+\frac{1}{u^2}-2\left(u+\frac1u\right)+1=0 .$$
Положив $v=u+\dfrac1u$, имеем $u^2+\dfrac1{u^2}=v^2-2$, и
$$v^2-2v-1=0 \ \Longrightarrow\ v=1\pm\sqrt2 .$$
Так как $0<u<1$, то $v=u+\frac1u>2$, значит $v=1+\sqrt2$.

Теперь выразим искомое через $v$:
$$\sin2\alpha=2sc=2s\cdot\frac{s}{1-s}=\frac{2s^2}{1-s}=\frac{2(1-u)^2}{u}=2\left(\frac1u-2+u\right)=2(v-2)=2\left(\sqrt2-1\right).$$
Поэтому
$$\left(\sin2\alpha+2\right)^2=\left(2\sqrt2-2+2\right)^2=\left(2\sqrt2\right)^2=8 .$$
**Численная проверка.** При $\alpha\approx0{,}48815$ рад: $\tan\alpha+\sin\alpha\approx0{,}5299+0{,}4691\approx1$ ✓, $\sin2\alpha\approx0{,}8284\approx2\sqrt2-2$ ✓'''),

dict(n=26, pts='2,6', ans='$75$',
uz=r'''$\overline{abc}$ uch xonali son, $a\ge1$. Shart: $abc\le10$ va $a+b+c\ge11$.

**1-hol: raqamlar orasida $0$ bor.** Unda koʻpaytma $0\le10$ — birinchi shart avtomatik bajariladi. Qolgan ikki raqamning yigʻindisi $\ge11$ boʻlishi kerak.

*$b=0$.* $a+c\ge11$, $1\le a\le9$, $0\le c\le9$. Har bir $a$ uchun mos $c$ lar soni $9-(11-a)+1=a-1$ (bu $a\ge2$ da musbat):
$$\sum_{a=2}^{9}(a-1)=1+2+\dots+8=36 .$$

*$c=0$.* Xuddi shunday $a+b\ge11$ dan $36$ ta.

Bu ikki hol kesishmaydi: $b=c=0$ boʻlsa $a\ge11$ kerak boʻlar edi — mumkin emas.

Jami: $36+36=72$.

**2-hol: barcha raqamlar noldan farqli.** Unda $abc\ge1$ va $abc\le10$. Raqamlar toʻplamlarini koʻrib chiqamiz:
- $\{1,1,k\}$: koʻpaytma $k\le10$, yigʻindi $2+k\ge11 \Rightarrow k\ge9$. Faqat $k=9$ mos (koʻpaytma $9\le10$ ✓). Sonlar: $119,\ 191,\ 911$ — $3$ ta.
- $\{1,2,k\}$: $2k\le10\Rightarrow k\le5$, lekin $3+k\ge11\Rightarrow k\ge8$ — ziddiyat.
- $\{1,3,k\}$: $3k\le10\Rightarrow k\le3$, lekin $k\ge7$ — ziddiyat.
- Qolgan barcha holatlarda koʻpaytma yanada katta, yigʻindi esa yetarli emas.

Jami: $3$ ta.

**Umumiy javob:** $72+3=75$.''',
ru=r'''Пусть $\overline{abc}$ — трёхзначное число, $a\ge1$. Условие: $abc\le10$ и $a+b+c\ge11$.

**Случай 1: среди цифр есть $0$.** Тогда произведение равно $0\le10$ — первое условие выполнено автоматически. Нужно, чтобы сумма двух оставшихся цифр была $\ge11$.

*$b=0$.* $a+c\ge11$, $1\le a\le9$, $0\le c\le9$. Для каждого $a$ количество подходящих $c$ равно $9-(11-a)+1=a-1$ (положительно при $a\ge2$):
$$\sum_{a=2}^{9}(a-1)=1+2+\dots+8=36 .$$

*$c=0$.* Аналогично из $a+b\ge11$ получаем $36$.

Эти случаи не пересекаются: при $b=c=0$ потребовалось бы $a\ge11$ — невозможно.

Итого: $36+36=72$.

**Случай 2: все цифры ненулевые.** Тогда $1\le abc\le10$. Переберём наборы цифр:
- $\{1,1,k\}$: произведение $k\le10$, сумма $2+k\ge11 \Rightarrow k\ge9$. Подходит только $k=9$ (произведение $9\le10$ ✓). Числа: $119,\ 191,\ 911$ — $3$ штуки.
- $\{1,2,k\}$: $2k\le10\Rightarrow k\le5$, но $3+k\ge11\Rightarrow k\ge8$ — противоречие.
- $\{1,3,k\}$: $3k\le10\Rightarrow k\le3$, но $k\ge7$ — противоречие.
- Во всех остальных наборах произведение ещё больше, а суммы не хватает.

Итого: $3$.

**Общий ответ:** $72+3=75$.'''),

dict(n=27, pts='2,6', ans='$2$',
uz=r'''Aylananing radiusini $r$, markazini $O$ ($O\in AD$) deylik.

**1) $AB$ ga urinish.** $\angle A=90^\circ$, demak $AB\perp AD$. $O$ dan $AB$ gacha boʻlgan masofa $OA$ ga teng, shuning uchun
$$OA=r .$$

**2) $BC$ ga urinish.** $BC\parallel AD$, ular orasidagi masofa — trapetsiyaning balandligi $h$. $O$ nuqta $AD$ da yotgani uchun $O$ dan $BC$ gacha boʻlgan masofa ham $h$ ga teng, demak
$$h=r .$$
Ayni paytda $h=AB$, yaʼni $AB=r$.

**3) $CD$ ga urinish.** $D$ uchida burchak $30^\circ$. $O$ dan $CD$ gacha boʻlgan masofa
$$OD\cdot\sin 30^\circ=\frac{OD}{2}=r \ \Longrightarrow\ OD=2r .$$

**4) Asoslar.**
$$AD=OA+OD=r+2r=3r .$$
$C$ dan $AD$ ga perpendikulyar tushiramiz; hosil boʻlgan toʻgʻri burchakli uchburchakda balandlik $h=r$ va oʻtkir burchak $30^\circ$, demak gorizontal kesma
$$\frac{h}{\tan 30^\circ}=r\sqrt3 ,$$
va
$$BC=AD-r\sqrt3=3r-r\sqrt3 .$$

**5) Oʻrta chiziq.**
$$\frac{AD+BC}{2}=\frac{3r+3r-r\sqrt3}{2}=\frac{r\left(6-\sqrt3\right)}{2}=6-\sqrt3 .$$
Bundan $r=2$.

**Tekshirish.** $r=2$: $AD=6$, $BC=6-2\sqrt3$, oʻrta chiziq $\frac{12-2\sqrt3}{2}=6-\sqrt3$ ✓''',
ru=r'''Пусть $r$ — радиус окружности, $O$ — её центр ($O\in AD$).

**1) Касание $AB$.** Так как $\angle A=90^\circ$, то $AB\perp AD$. Расстояние от $O$ до $AB$ равно $OA$, поэтому
$$OA=r .$$

**2) Касание $BC$.** $BC\parallel AD$, расстояние между ними — высота трапеции $h$. Так как $O$ лежит на $AD$, расстояние от $O$ до $BC$ тоже равно $h$, значит,
$$h=r .$$
При этом $h=AB$, то есть $AB=r$.

**3) Касание $CD$.** Угол при вершине $D$ равен $30^\circ$. Расстояние от $O$ до $CD$ равно
$$OD\cdot\sin 30^\circ=\frac{OD}{2}=r \ \Longrightarrow\ OD=2r .$$

**4) Основания.**
$$AD=OA+OD=r+2r=3r .$$
Опустим из $C$ перпендикуляр на $AD$; в полученном прямоугольном треугольнике высота $h=r$ и острый угол $30^\circ$, поэтому горизонтальный отрезок равен
$$\frac{h}{\tan 30^\circ}=r\sqrt3 ,$$
и
$$BC=AD-r\sqrt3=3r-r\sqrt3 .$$

**5) Средняя линия.**
$$\frac{AD+BC}{2}=\frac{3r+3r-r\sqrt3}{2}=\frac{r\left(6-\sqrt3\right)}{2}=6-\sqrt3 .$$
Отсюда $r=2$.

**Проверка.** При $r=2$: $AD=6$, $BC=6-2\sqrt3$, средняя линия $\frac{12-2\sqrt3}{2}=6-\sqrt3$ ✓'''),

dict(n=28, pts='2,6', ans='$18$',
uz=r'''$\overline{abcd}\cdot4=\overline{dcba}$.

**1) $a$ ni topamiz.** $\overline{dcba}$ ham toʻrt xonali, demak $\overline{abcd}\cdot4<10000$, yaʼni $\overline{abcd}<2500$ va $a\le2$. Ayni paytda $\overline{dcba}=4\cdot(\dots)$ — **juft** son, uning oxirgi raqami $a$, demak $a$ juft. Shuning uchun
$$a=2 .$$

**2) $d$ ni topamiz.** $\overline{abcd}\ge2000$, demak $\overline{dcba}\ge8000$ va $d\ge8$. Ikkinchi tomondan $4d$ ning oxirgi raqami $a=2$ boʻlishi kerak: $4d\equiv2\ (\mathrm{mod}\ 10)$ dan $d\in\{3;8\}$. Ikkalasini birlashtirsak
$$d=8 .$$

**3) $b$ va $c$.** Endi $\overline{2bc8}\cdot4=\overline{8cb2}$:
$$4\left(2000+100b+10c+8\right)=8000+100c+10b+2 ,$$
$$8000+400b+40c+32=8002+100c+10b ,$$
$$390b-60c=-30 \ \Longrightarrow\ 13b-2c=-1 \ \Longrightarrow\ 2c=13b+1 .$$
$c$ raqam boʻlgani uchun $2c\le18$, demak $13b+1\le18$, yaʼni $b\le1$. $b=0$ da $c=0{,}5$ — raqam emas; $b=1$ da $c=7$ ✓

**Son:** $2178$. **Tekshirish:** $2178\cdot4=8712$ ✓

Raqamlar yigʻindisi: $2+1+7+8=18$.''',
ru=r'''$\overline{abcd}\cdot4=\overline{dcba}$.

**1) Находим $a$.** Число $\overline{dcba}$ тоже четырёхзначное, значит, $\overline{abcd}\cdot4<10000$, то есть $\overline{abcd}<2500$ и $a\le2$. При этом $\overline{dcba}$ — **чётное** число (оно кратно $4$), а его последняя цифра равна $a$, значит, $a$ чётна. Поэтому
$$a=2 .$$

**2) Находим $d$.** Так как $\overline{abcd}\ge2000$, то $\overline{dcba}\ge8000$ и $d\ge8$. С другой стороны, последняя цифра $4d$ должна равняться $a=2$: из $4d\equiv2\ (\mathrm{mod}\ 10)$ получаем $d\in\{3;8\}$. Вместе это даёт
$$d=8 .$$

**3) Цифры $b$ и $c$.** Теперь $\overline{2bc8}\cdot4=\overline{8cb2}$:
$$4\left(2000+100b+10c+8\right)=8000+100c+10b+2 ,$$
$$8000+400b+40c+32=8002+100c+10b ,$$
$$390b-60c=-30 \ \Longrightarrow\ 13b-2c=-1 \ \Longrightarrow\ 2c=13b+1 .$$
Так как $c$ — цифра, $2c\le18$, значит, $13b+1\le18$, то есть $b\le1$. При $b=0$ получаем $c=0{,}5$ — не цифра; при $b=1$ выходит $c=7$ ✓

**Число:** $2178$. **Проверка:** $2178\cdot4=8712$ ✓

Сумма цифр: $2+1+7+8=18$.'''),

dict(n=29, pts='2,6', ans='$50$',
uz=r'''Rasmdagi toʻrtburchak $6\times2$ katakdan iborat; gorizontal chiziqlar $y=0,1,2$, vertikal chiziqlar $x=0,1,\dots,6$, hamda ikkita **zigzag** siniq chiziq:
$$(0;1)\to(1;2)\to(2;1)\to(3;2)\to(4;1)\to(5;2)\to(6;1)$$
va uning pastdagi aksi.

Barcha uchburchaklar toʻgʻri burchakli va teng yonli. Ularni oʻlchamiga qarab guruhlaymiz.

**1) Katetlari $1$ ga teng (eng kichiklari).** Har bir birlik katakda aynan bitta diagonal bor, u katakni $2$ ta shunday uchburchakka ajratadi. Kataklar soni $12$, demak
$$12\cdot2=24\ \text{ta}.$$

**2) Katetlari $\sqrt2$, gipotenuzasi $2$.** Bular ikkita kichik uchburchakdan yigʻiladi (romb yarmi yoki vertikal chiziqqa tayangan uchburchak). Ular
$$16\ \text{ta}.$$

**3) Katetlari $2$, gipotenuzasi $2\sqrt2$.** Ular
$$8\ \text{ta}.$$

**4) Katetlari $2\sqrt2$, gipotenuzasi $4$ (eng kattalari).** Ular
$$2\ \text{ta}.$$

**Jami:**
$$24+16+8+2=50 .$$''',
ru=r'''Прямоугольник на рисунке состоит из $6\times2$ клеток; горизонтальные прямые $y=0,1,2$, вертикальные $x=0,1,\dots,6$, а также две **зигзагообразные** ломаные:
$$(0;1)\to(1;2)\to(2;1)\to(3;2)\to(4;1)\to(5;2)\to(6;1)$$
и её отражение снизу.

Все треугольники прямоугольные и равнобедренные. Сгруппируем их по размеру.

**1) Катеты равны $1$ (самые маленькие).** В каждой единичной клетке проведена ровно одна диагональ, она делит клетку на $2$ таких треугольника. Клеток $12$, значит,
$$12\cdot2=24\ \text{шт.}$$

**2) Катеты $\sqrt2$, гипотенуза $2$.** Они складываются из двух маленьких (половина ромба либо треугольник, опирающийся на вертикальную прямую). Их
$$16\ \text{шт.}$$

**3) Катеты $2$, гипотенуза $2\sqrt2$.** Их
$$8\ \text{шт.}$$

**4) Катеты $2\sqrt2$, гипотенуза $4$ (самые большие).** Их
$$2\ \text{шт.}$$

**Всего:**
$$24+16+8+2=50 .$$'''),

dict(n=30, pts='2,6', ans=r'$135^\circ$',
uz=r'''**Burish usuli.** $ABCD$ kvadratni $B$ nuqta atrofida $90^\circ$ ga shunday buramizki, $A$ nuqta $C$ ga oʻtsin. $M$ nuqta $M'$ ga oʻtsin.

Burish uzunliklarni saqlaydi, shuning uchun:
$$BM'=BM=2,\qquad M'C=MA=1,\qquad \angle MBM'=90^\circ .$$

**1) $MM'$ ni topamiz.** $\triangle BMM'$ — teng yonli toʻgʻri burchakli ($BM=BM'=2$, ular orasidagi burchak $90^\circ$):
$$MM'=2\sqrt2,\qquad \angle BM'M=45^\circ .$$

**2) $\triangle MM'C$ ni tekshiramiz.** Tomonlari $MM'=2\sqrt2$, $M'C=1$, $MC=3$:
$$\left(2\sqrt2\right)^2+1^2=8+1=9=3^2 .$$
Pifagor teoremasiga teskari teorema boʻyicha bu uchburchak $M'$ uchida toʻgʻri burchakli:
$$\angle MM'C=90^\circ .$$

**3) Yakun.**
$$\angle BM'C=\angle BM'M+\angle MM'C=45^\circ+90^\circ=135^\circ .$$
Burish $\angle AMB$ burchakni $\angle CM'B$ ga oʻtkazadi, demak
$$\angle AMB=135^\circ .$$
**Sonli tekshirish.** Kvadrat tomoni $\approx2{,}798$ da $MA=1,\ MB=2,\ MC=3$ va $\angle AMB\approx135^\circ$ ✓''',
ru=r'''**Метод поворота.** Повернём квадрат $ABCD$ вокруг точки $B$ на $90^\circ$ так, чтобы $A$ перешла в $C$. Пусть $M$ перейдёт в $M'$.

Поворот сохраняет длины, поэтому:
$$BM'=BM=2,\qquad M'C=MA=1,\qquad \angle MBM'=90^\circ .$$

**1) Находим $MM'$.** Треугольник $BMM'$ равнобедренный прямоугольный ($BM=BM'=2$, угол между ними $90^\circ$):
$$MM'=2\sqrt2,\qquad \angle BM'M=45^\circ .$$

**2) Исследуем $\triangle MM'C$.** Его стороны: $MM'=2\sqrt2$, $M'C=1$, $MC=3$:
$$\left(2\sqrt2\right)^2+1^2=8+1=9=3^2 .$$
По теореме, обратной теореме Пифагора, этот треугольник прямоугольный с прямым углом при $M'$:
$$\angle MM'C=90^\circ .$$

**3) Итог.**
$$\angle BM'C=\angle BM'M+\angle MM'C=45^\circ+90^\circ=135^\circ .$$
Поворот переводит угол $\angle AMB$ в $\angle CM'B$, поэтому
$$\angle AMB=135^\circ .$$
**Численная проверка.** При стороне квадрата $\approx2{,}798$ выполняется $MA=1,\ MB=2,\ MC=3$ и $\angle AMB\approx135^\circ$ ✓'''),
]
