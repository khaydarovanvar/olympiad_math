# -*- coding: utf-8 -*-
GRADE = 10
TITLE_UZ = "MATEMATIKA · 10-sinf — yechimlar"
TITLE_RU = "МАТЕМАТИКА · 10 класс — решения"
P = [

dict(n=1, pts='0,9', ans='A) $8$',
uz=r'''Butun yigʻindini hisoblash shart emas — faqat **oxirgi raqamlar** bilan ishlaymiz.
$$2^2=4,\quad 3^3=27,\quad 4^4=256,\quad 5^5=3125,\quad 6^6=46656 .$$
Oxirgi raqamlar: $4,\;7,\;6,\;5,\;6$. Ularning yigʻindisi
$$4+7+6+5+6=28 ,$$
uning oxirgi raqami — $8$.

**Eslatma.** $5$ ning har qanday natural darajasi $5$ ga, $6$ niki esa $6$ ga tugaydi; $4^4=(4^2)^2=16^2$ — $6$ ga tugaydi.''',
ru=r'''Всю сумму считать не нужно — работаем только с **последними цифрами**.
$$2^2=4,\quad 3^3=27,\quad 4^4=256,\quad 5^5=3125,\quad 6^6=46656 .$$
Последние цифры: $4,\;7,\;6,\;5,\;6$. Их сумма
$$4+7+6+5+6=28 ,$$
последняя цифра которой — $8$.

**Замечание.** Любая натуральная степень $5$ оканчивается на $5$, а $6$ — на $6$; $4^4=(4^2)^2=16^2$ оканчивается на $6$.'''),

dict(n=2, pts='0,9', ans='B) $2$',
uz=r'''$0{,}9<x<9{,}5$ shartni qanoatlantiruvchi natural sonlar:
$$x=1,2,3,4,5,6,7,8,9 .$$
Ularning yigʻindisi
$$1+2+\dots+9=\frac{9\cdot10}{2}=45 .$$
Tub koʻpaytuvchilarga ajratamiz:
$$45=3^2\cdot5 .$$
**Turli** tub boʻluvchilar: $3$ va $5$ — jami $2$ ta.

(Diqqat: savol boʻluvchilar sonini emas, aynan turli **tub** boʻluvchilar sonini soʻraydi.)''',
ru=r'''Натуральные числа, удовлетворяющие $0{,}9<x<9{,}5$:
$$x=1,2,3,4,5,6,7,8,9 .$$
Их сумма
$$1+2+\dots+9=\frac{9\cdot10}{2}=45 .$$
Разложим на простые множители:
$$45=3^2\cdot5 .$$
**Различных** простых делителей два: $3$ и $5$.

(Внимание: спрашивается количество различных **простых** делителей, а не количество делителей вообще.)'''),

dict(n=3, pts='0,9', ans='B) $2$',
uz=r'''$x,\;2,\;x+2y,\;4$ — arifmetik progressiya, demak ketma-ket hadlar ayirmasi bir xil.

**1-tenglama** (1- va 2-, 2- va 3-hadlar):
$$2-x=(x+2y)-2 \ \Longrightarrow\ 4=2x+2y \ \Longrightarrow\ x+y=2 .$$

**2-tenglama** (2- va 3-, 3- va 4-hadlar):
$$(x+2y)-2=4-(x+2y) \ \Longrightarrow\ 2(x+2y)=6 \ \Longrightarrow\ x+2y=3 .$$

Ikkinchisidan birinchisini ayiramiz: $y=1$, demak $x=1$.

**Tekshirish.** Progressiya: $1,\;2,\;3,\;4$ — ayirma $1$ ✓
$$x^2+y^2=1+1=2 .$$''',
ru=r'''$x,\;2,\;x+2y,\;4$ — арифметическая прогрессия, значит, разности соседних членов одинаковы.

**Первое уравнение** (1-й и 2-й, 2-й и 3-й члены):
$$2-x=(x+2y)-2 \ \Longrightarrow\ 4=2x+2y \ \Longrightarrow\ x+y=2 .$$

**Второе уравнение** (2-й и 3-й, 3-й и 4-й члены):
$$(x+2y)-2=4-(x+2y) \ \Longrightarrow\ 2(x+2y)=6 \ \Longrightarrow\ x+2y=3 .$$

Вычитая первое из второго: $y=1$, значит, $x=1$.

**Проверка.** Прогрессия $1,\;2,\;3,\;4$ — разность $1$ ✓
$$x^2+y^2=1+1=2 .$$'''),

dict(n=4, pts='0,9', ans='A) $9$',
uz=r'''Ikkala tomonni bir xil tub asoslarga keltiramiz.

**Chap tomon:**
$$16^{a}\cdot9^{a}=\left(2^4\right)^{a}\left(3^2\right)^{a}=2^{4a}\cdot3^{2a}.$$

**Oʻng tomon:**
$$6^{b}\cdot8^{2}=\left(2\cdot3\right)^{b}\cdot2^{6}=2^{\,b+6}\cdot3^{\,b}.$$

Tub sonlarga yoyilma **yagona** boʻlgani uchun darajalarni tenglashtiramiz:
$$\begin{cases}4a=b+6,\\ 2a=b.\end{cases}$$
Ikkinchisini birinchisiga qoʻyamiz: $4a=2a+6$, demak $a=3$ va $b=6$.

**Tekshirish.** $16^3\cdot9^3=144^3=2985984$ va $6^6\cdot64=46656\cdot64=2985984$ ✓
$$a+b=3+6=9 .$$''',
ru=r'''Приведём обе части к одинаковым простым основаниям.

**Левая часть:**
$$16^{a}\cdot9^{a}=\left(2^4\right)^{a}\left(3^2\right)^{a}=2^{4a}\cdot3^{2a}.$$

**Правая часть:**
$$6^{b}\cdot8^{2}=\left(2\cdot3\right)^{b}\cdot2^{6}=2^{\,b+6}\cdot3^{\,b}.$$

Разложение на простые множители **единственно**, поэтому приравниваем показатели:
$$\begin{cases}4a=b+6,\\ 2a=b.\end{cases}$$
Подставляя второе в первое: $4a=2a+6$, значит, $a=3$ и $b=6$.

**Проверка.** $16^3\cdot9^3=144^3=2985984$ и $6^6\cdot64=46656\cdot64=2985984$ ✓
$$a+b=3+6=9 .$$'''),

dict(n=5, pts='0,9', ans='D) $27$',
uz=r'''$x>0,\ y>0$ boʻlgani uchun barcha logarifmlar aniqlangan.

Oʻng tomondagi $2\log_3 y$ ni bitta logarifmga yigʻamiz:
$$2\log_3 y=\log_3 y^2 .$$
Tenglama:
$$\log_3\left(x^2y^2\right)=\log_3 y^2+6 .$$
$\log_3 y^2$ ni chap tomonga oʻtkazamiz va logarifmlar ayirmasini boʻlinma logarifmi sifatida yozamiz:
$$\log_3\frac{x^2y^2}{y^2}=6 \ \Longrightarrow\ \log_3 x^2=6 .$$
Demak
$$x^2=3^6=729 \ \Longrightarrow\ x=27$$
($x>0$ boʻlgani uchun manfiy ildiz olinmaydi).

Eʼtibor bering: javob $y$ ga bogʻliq emas.''',
ru=r'''Так как $x>0,\ y>0$, все логарифмы определены.

Свернём $2\log_3 y$ в один логарифм:
$$2\log_3 y=\log_3 y^2 .$$
Уравнение принимает вид
$$\log_3\left(x^2y^2\right)=\log_3 y^2+6 .$$
Перенесём $\log_3 y^2$ влево и запишем разность логарифмов как логарифм частного:
$$\log_3\frac{x^2y^2}{y^2}=6 \ \Longrightarrow\ \log_3 x^2=6 .$$
Значит,
$$x^2=3^6=729 \ \Longrightarrow\ x=27$$
(отрицательный корень отбрасываем, так как $x>0$).

Заметим, что ответ не зависит от $y$.'''),

dict(n=6, pts='0,9', ans='B) $38$',
uz=r'''**Qaysi sonlarda aynan $3$ ta boʻluvchi bor?**

$n=p_1^{\alpha_1}\cdots p_k^{\alpha_k}$ boʻlsa, boʻluvchilar soni $\left(\alpha_1+1\right)\cdots\left(\alpha_k+1\right)$.

$3$ — tub son, shuning uchun bu koʻpaytma faqat bitta koʻpaytuvchidan iborat boʻlishi mumkin: $\alpha_1+1=3$, yaʼni $\alpha_1=2$ va $k=1$. Demak
$$n=p^2,\qquad p\ \text{— tub son}.$$

Dastlabki uchtasi:
$$2^2=4,\qquad 3^2=9,\qquad 5^2=25 .$$
(Boʻluvchilari: $4$ da $1,2,4$; $9$ da $1,3,9$; $25$ da $1,5,25$ ✓)

Yigʻindi: $4+9+25=38$.''',
ru=r'''**У каких чисел ровно $3$ делителя?**

Если $n=p_1^{\alpha_1}\cdots p_k^{\alpha_k}$, то количество делителей равно $\left(\alpha_1+1\right)\cdots\left(\alpha_k+1\right)$.

Число $3$ простое, поэтому это произведение может состоять лишь из одного сомножителя: $\alpha_1+1=3$, то есть $\alpha_1=2$ и $k=1$. Значит,
$$n=p^2,\qquad p\ \text{— простое}.$$

Первые три таких числа:
$$2^2=4,\qquad 3^2=9,\qquad 5^2=25 .$$
(Делители: у $4$ — $1,2,4$; у $9$ — $1,3,9$; у $25$ — $1,5,25$ ✓)

Сумма: $4+9+25=38$.'''),

dict(n=7, pts='0,9', ans='A) $4$',
uz=r'''Viyet teoremasi $2x^2-5x+3=0$ uchun:
$$x_1+x_2=\frac{5}{2},\qquad x_1x_2=\frac{3}{2}.$$

Izlanayotgan ifodani qayta guruhlaymiz:
$$x_2+x_1\cdot x_2+x_1=\left(x_1+x_2\right)+x_1x_2=\frac52+\frac32=\frac82=4 .$$

**Tekshirish.** $2x^2-5x+3=(2x-3)(x-1)$, ildizlar $x=1{,}5$ va $x=1$. Unda
$$1+1{,}5\cdot1+1{,}5=1+1{,}5+1{,}5=4 \quad\checkmark$$''',
ru=r'''По теореме Виета для $2x^2-5x+3=0$:
$$x_1+x_2=\frac{5}{2},\qquad x_1x_2=\frac{3}{2}.$$

Перегруппируем искомое выражение:
$$x_2+x_1\cdot x_2+x_1=\left(x_1+x_2\right)+x_1x_2=\frac52+\frac32=\frac82=4 .$$

**Проверка.** $2x^2-5x+3=(2x-3)(x-1)$, корни $x=1{,}5$ и $x=1$. Тогда
$$1+1{,}5\cdot1+1{,}5=1+1{,}5+1{,}5=4 \quad\checkmark$$'''),

dict(n=8, pts='0,9', ans='B) $16$',
uz=r'''$24=2^3\cdot3$. Endi $p$ ning qiymatiga qarab uch holni koʻramiz.

**1) $p\ne2$ va $p\ne3$.** Unda $24p=2^3\cdot3\cdot p$ — uchta turli tub son:
$$d(24p)=(3+1)(1+1)(1+1)=4\cdot2\cdot2=16 .$$

**2) $p=2$.** $24\cdot2=48=2^4\cdot3$:
$$d=(4+1)(1+1)=10 .$$

**3) $p=3$.** $24\cdot3=72=2^3\cdot3^2$:
$$d=(3+1)(2+1)=12 .$$

Eng kattasi — $16$ (masalan $p=5$: $120=2^3\cdot3\cdot5$, boʻluvchilari $16$ ta).''',
ru=r'''$24=2^3\cdot3$. Рассмотрим три случая в зависимости от $p$.

**1) $p\ne2$ и $p\ne3$.** Тогда $24p=2^3\cdot3\cdot p$ — три различных простых:
$$d(24p)=(3+1)(1+1)(1+1)=4\cdot2\cdot2=16 .$$

**2) $p=2$.** $24\cdot2=48=2^4\cdot3$:
$$d=(4+1)(1+1)=10 .$$

**3) $p=3$.** $24\cdot3=72=2^3\cdot3^2$:
$$d=(3+1)(2+1)=12 .$$

Наибольшее значение — $16$ (например, $p=5$: $120=2^3\cdot3\cdot5$, делителей $16$).'''),

dict(n=9, pts='0,9', ans='B) $35$',
uz=r'''Koʻpaytuvchilarni birma-bir tahlil qilamiz.

**$8x^2+8=8\left(x^2+1\right)>0$** — har qanday haqiqiy $x$ da qatʼiy musbat. Demak tengsizlikning ishorasi unga bogʻliq emas va uni qisqartirish mumkin:
$$(x-8)(8x+8)\le0 \ \Longleftrightarrow\ 8(x-8)(x+1)\le0 \ \Longleftrightarrow\ (x-8)(x+1)\le0 .$$

Parabola shoxlari yuqoriga qaragan, ildizlari $-1$ va $8$, shuning uchun
$$-1\le x\le 8 .$$

Butun yechimlar: $-1,0,1,2,\dots,8$. Ularning yigʻindisi:
$$-1+\left(0+1+2+\dots+8\right)=-1+\frac{8\cdot9}{2}=-1+36=35 .$$''',
ru=r'''Разберём множители по очереди.

**$8x^2+8=8\left(x^2+1\right)>0$** — строго положителен при любом действительном $x$. Значит, знак неравенства от него не зависит, и на него можно сократить:
$$(x-8)(8x+8)\le0 \ \Longleftrightarrow\ 8(x-8)(x+1)\le0 \ \Longleftrightarrow\ (x-8)(x+1)\le0 .$$

Ветви параболы направлены вверх, корни $-1$ и $8$, поэтому
$$-1\le x\le 8 .$$

Целые решения: $-1,0,1,2,\dots,8$. Их сумма:
$$-1+\left(0+1+2+\dots+8\right)=-1+\frac{8\cdot9}{2}=-1+36=35 .$$'''),

dict(n=10, pts='0,9', ans='C) $9$',
uz=r'''Uchburchakning uchlari — chiziqlarning juft-juft kesishish nuqtalari.

**$OY$ oʻqi ($x=0$) va $y=x$:** $(0;0)$.

**$OY$ oʻqi va $y=-x+6$:** $x=0\Rightarrow y=6$, yaʼni $(0;6)$.

**$y=x$ va $y=-x+6$:** $x=-x+6\Rightarrow x=3$, yaʼni $(3;3)$.

Asos sifatida $OY$ oʻqidagi kesmani olamiz: uning uzunligi $6$. Uchinchi uchning bu oʻqdan uzoqligi — uning abssissasi, yaʼni $3$.
$$S=\frac12\cdot6\cdot3=9 .$$''',
ru=r'''Вершины треугольника — попарные точки пересечения прямых.

**Ось $OY$ ($x=0$) и $y=x$:** $(0;0)$.

**Ось $OY$ и $y=-x+6$:** при $x=0$ имеем $y=6$, то есть $(0;6)$.

**$y=x$ и $y=-x+6$:** $x=-x+6\Rightarrow x=3$, то есть $(3;3)$.

За основание возьмём отрезок на оси $OY$: его длина $6$. Расстояние от третьей вершины до этой оси — её абсцисса, то есть $3$.
$$S=\frac12\cdot6\cdot3=9 .$$'''),

dict(n=11, pts='1,5', ans='D) $2024$',
uz=r'''$d$ — $2025!$ ning boʻluvchisi va $d>2024!$ boʻlsin. Har bir boʻluvchiga uning **juftini** mos qoʻyamiz:
$$e=\frac{2025!}{d}.$$
$e$ ham $2025!$ ning boʻluvchisi, va bu moslik oʻzaro bir qiymatli.

Shartni $e$ orqali yozamiz:
$$d>2024! \ \Longleftrightarrow\ \frac{2025!}{e}>2024! \ \Longleftrightarrow\ e<\frac{2025!}{2024!}=2025 .$$

Demak masala: $2025!$ ning $2025$ dan kichik nechta boʻluvchisi bor?

$2025!=1\cdot2\cdots2025$ koʻpaytmada $1$ dan $2025$ gacha boʻlgan **har bir** son koʻpaytuvchi sifatida qatnashadi, shuning uchun ularning barchasi $2025!$ ning boʻluvchisi. Yaʼni mos keladigan $e$ lar:
$$e=1,2,3,\dots,2024 .$$
Jami $2024$ ta.''',
ru=r'''Пусть $d$ — делитель $2025!$ и $d>2024!$. Сопоставим каждому делителю его **пару**:
$$e=\frac{2025!}{d}.$$
Число $e$ тоже делитель $2025!$, и соответствие взаимно однозначно.

Перепишем условие через $e$:
$$d>2024! \ \Longleftrightarrow\ \frac{2025!}{e}>2024! \ \Longleftrightarrow\ e<\frac{2025!}{2024!}=2025 .$$

Итак, задача сводится к вопросу: сколько у $2025!$ делителей, меньших $2025$?

В произведении $2025!=1\cdot2\cdots2025$ участвует **каждое** число от $1$ до $2025$, поэтому все они являются делителями $2025!$. Значит, подходящие $e$ — это
$$e=1,2,3,\dots,2024 .$$
Всего $2024$.'''),

dict(n=12, pts='1,5', ans='C) $3$',
uz=r'''Umumiy xossani isbotlaymiz: ixtiyoriy $a>0$ va $t=\lg x$ uchun
$$\frac{1}{1+a^{\,t}}+\frac{1}{1+a^{-t}}=\frac{1}{1+a^{\,t}}+\frac{a^{\,t}}{a^{\,t}+1}=\frac{1+a^{\,t}}{1+a^{\,t}}=1 .$$

Endi $\lg\dfrac1x=-\lg x$ ekanini eslaymiz. Demak $f\!\left(\frac1x\right)$ dagi har bir had $f(x)$ dagi mos hadning «juft»i boʻladi:
$$f(x)+f\!\left(\frac1x\right)=\underbrace{\left(\frac{1}{1+2^{\lg x}}+\frac{1}{1+2^{-\lg x}}\right)}_{=\,1}
+\underbrace{\left(\frac{1}{1+4^{\lg x}}+\frac{1}{1+4^{-\lg x}}\right)}_{=\,1}
+\underbrace{\left(\frac{1}{1+8^{\lg x}}+\frac{1}{1+8^{-\lg x}}\right)}_{=\,1}=3 .$$

Javob $x$ ga bogʻliq emas: $3$.''',
ru=r'''Докажем общее свойство: для любого $a>0$ и $t=\lg x$
$$\frac{1}{1+a^{\,t}}+\frac{1}{1+a^{-t}}=\frac{1}{1+a^{\,t}}+\frac{a^{\,t}}{a^{\,t}+1}=\frac{1+a^{\,t}}{1+a^{\,t}}=1 .$$

Вспомним, что $\lg\dfrac1x=-\lg x$. Значит, каждое слагаемое в $f\!\left(\frac1x\right)$ является «парой» к соответствующему слагаемому $f(x)$:
$$f(x)+f\!\left(\frac1x\right)=\underbrace{\left(\frac{1}{1+2^{\lg x}}+\frac{1}{1+2^{-\lg x}}\right)}_{=\,1}
+\underbrace{\left(\frac{1}{1+4^{\lg x}}+\frac{1}{1+4^{-\lg x}}\right)}_{=\,1}
+\underbrace{\left(\frac{1}{1+8^{\lg x}}+\frac{1}{1+8^{-\lg x}}\right)}_{=\,1}=3 .$$

Ответ не зависит от $x$: $3$.'''),

dict(n=13, pts='1,5', ans='D) $9$',
uz=r'''**Yigʻindidan foydalanamiz.** Arifmetik progressiyada
$$S_{10}=\frac{a_1+a_{10}}{2}\cdot10=5\left(a_1+a_{10}\right)=140 \ \Longrightarrow\ a_1+a_{10}=28 .$$

Progressiyada chetdan teng uzoqlikdagi hadlar yigʻindisi bir xil:
$$a_2+a_9=a_1+a_{10}=28 .$$

**Viyet boʻyicha** $a_2$ va $a_9$ — quyidagi kvadrat tenglamaning ildizlari:
$$t^2-28t+147=0 \ \Longrightarrow\ t=\frac{28\pm\sqrt{784-588}}{2}=\frac{28\pm14}{2}.$$
Demak $\{a_2;a_9\}=\{7;21\}$.

Progressiya **oʻsuvchi**, shuning uchun $a_2=7$, $a_9=21$. Ayirmasi:
$$d=\frac{a_9-a_2}{9-2}=\frac{21-7}{7}=2 .$$
$$a_3=a_2+d=7+2=9 .$$
**Tekshirish.** $a_1=5$, $a_{10}=23$, $S_{10}=\frac{5+23}{2}\cdot10=140$ ✓, $a_2a_9=7\cdot21=147$ ✓''',
ru=r'''**Используем сумму.** В арифметической прогрессии
$$S_{10}=\frac{a_1+a_{10}}{2}\cdot10=5\left(a_1+a_{10}\right)=140 \ \Longrightarrow\ a_1+a_{10}=28 .$$

В прогрессии суммы членов, равноудалённых от концов, одинаковы:
$$a_2+a_9=a_1+a_{10}=28 .$$

**По теореме Виета** $a_2$ и $a_9$ — корни квадратного уравнения
$$t^2-28t+147=0 \ \Longrightarrow\ t=\frac{28\pm\sqrt{784-588}}{2}=\frac{28\pm14}{2}.$$
Значит, $\{a_2;a_9\}=\{7;21\}$.

Прогрессия **возрастающая**, поэтому $a_2=7$, $a_9=21$. Разность:
$$d=\frac{a_9-a_2}{9-2}=\frac{21-7}{7}=2 .$$
$$a_3=a_2+d=7+2=9 .$$
**Проверка.** $a_1=5$, $a_{10}=23$, $S_{10}=\frac{5+23}{2}\cdot10=140$ ✓, $a_2a_9=7\cdot21=147$ ✓'''),

dict(n=14, pts='1,5', ans='C) $22$',
uz=r'''$ABCD$ trapetsiyada $AD=a$ (katta asos), $BC=b$, $\angle A=30^\circ$, $\angle D=60^\circ$. Diqqat qiling:
$$\angle A+\angle D=90^\circ .$$

$B$ va $C$ nuqtalardan oʻtuvchi tomonlarni davom ettiramiz: $AB$ va $DC$ nurlari biror $P$ nuqtada kesishadi va $\triangle APD$ da
$$\angle APD=180^\circ-30^\circ-60^\circ=90^\circ .$$

Demak $A$ va $D$ — gipotenuzasi $AD$ boʻlgan toʻgʻri burchakli uchburchakning uchlari, $P$ esa toʻgʻri burchak uchi. $AD$ ning oʻrtasi $M$ uchun
$$PM=\frac{AD}{2}=\frac{a}{2}$$
(toʻgʻri burchakli uchburchakda gipotenuzaga oʻtkazilgan mediana gipotenuzaning yarmi).

Xuddi shu mulohaza $\triangle BPC$ ga ham qoʻllanadi ($BC\parallel AD$, burchaklar oʻsha-oʻsha): $BC$ ning oʻrtasi $N$ uchun
$$PN=\frac{BC}{2}=\frac{b}{2}.$$

$P$, $N$, $M$ nuqtalar bir toʻgʻri chiziqda yotadi, shuning uchun
$$MN=PM-PN=\frac{a-b}{2}=8 \ \Longrightarrow\ a-b=16 .$$

Oʻrta chiziq:
$$\frac{a+b}{2}=14 \ \Longrightarrow\ a+b=28 .$$

Sistemani yechamiz: $a=22$, $b=6$. Katta asos — $22$.''',
ru=r'''В трапеции $ABCD$ пусть $AD=a$ (большее основание), $BC=b$, $\angle A=30^\circ$, $\angle D=60^\circ$. Обратим внимание:
$$\angle A+\angle D=90^\circ .$$

Продлим боковые стороны: лучи $AB$ и $DC$ пересекутся в некоторой точке $P$, и в $\triangle APD$
$$\angle APD=180^\circ-30^\circ-60^\circ=90^\circ .$$

Значит, $A$ и $D$ — концы гипотенузы прямоугольного треугольника с прямым углом при $P$. Для середины $M$ отрезка $AD$
$$PM=\frac{AD}{2}=\frac{a}{2}$$
(медиана к гипотенузе равна её половине).

То же рассуждение применимо к $\triangle BPC$ ($BC\parallel AD$, углы те же): для середины $N$ отрезка $BC$
$$PN=\frac{BC}{2}=\frac{b}{2}.$$

Точки $P$, $N$, $M$ лежат на одной прямой, поэтому
$$MN=PM-PN=\frac{a-b}{2}=8 \ \Longrightarrow\ a-b=16 .$$

Средняя линия:
$$\frac{a+b}{2}=14 \ \Longrightarrow\ a+b=28 .$$

Решая систему: $a=22$, $b=6$. Большее основание равно $22$.'''),

dict(n=15, pts='1,5', ans='D) $6$',
uz=r'''Yoshlarni $a<b<c<d$ deylik. Ular orasida $\binom42=6$ ta juftlik bor va **barcha** $6$ ta ayirma turlicha.

**Quyi baho.** Yoshlarni $0$ dan boshlab siljitamiz: $a=0$ deb olamiz (ayirmalar oʻzgarmaydi). Barcha $6$ ta ayirma turli musbat butun sonlar, eng kattasi — $d-a$. Oltita turli musbat butun son ichida eng kattasi kamida $6$ boʻladi, chunki $1,2,3,4,5$ — bor-yoʻgʻi beshta qiymat. Demak
$$d-a\ge6 .$$

**Erishilishi.** $\{0;1;4;6\}$ toʻplamini olamiz. Ayirmalar:
$$1-0=1,\quad 4-0=4,\quad 6-0=6,\quad 4-1=3,\quad 6-1=5,\quad 6-4=2 .$$
Bular $1,2,3,4,5,6$ — hammasi turlicha ✓

Demak eng kichik mumkin boʻlgan farq — $6$. (Masalan, yoshlari $10,11,14,16$ boʻlgan kishilar.)''',
ru=r'''Пусть возрасты равны $a<b<c<d$. Пар $\binom42=6$, и **все** $6$ разностей различны.

**Оценка снизу.** Сдвинем возрасты так, чтобы $a=0$ (разности не изменятся). Все $6$ разностей — различные натуральные числа, наибольшая из них $d-a$. Среди шести различных натуральных чисел наибольшее не меньше $6$, ведь $1,2,3,4,5$ — всего пять значений. Значит,
$$d-a\ge6 .$$

**Достижимость.** Возьмём набор $\{0;1;4;6\}$. Разности:
$$1-0=1,\quad 4-0=4,\quad 6-0=6,\quad 4-1=3,\quad 6-1=5,\quad 6-4=2 .$$
Это $1,2,3,4,5,6$ — все различны ✓

Итак, наименьшая возможная разница равна $6$. (Например, возрасты $10,11,14,16$.)'''),

dict(n=16, pts='1,5', ans='D) $146$',
uz=r'''Ifodani hadma-had boʻlamiz:
$$\frac{n^3-2n^2-12}{n}=n^2-2n-\frac{12}{n}.$$
$n^2-2n$ butun, shuning uchun butun qiymat olish uchun $n$ soni $12$ ning boʻluvchisi boʻlishi kerak:
$$n\in\{1,2,3,4,6,12\}.$$
Har birini tekshiramiz (natija **natural**, yaʼni musbat butun boʻlishi kerak):

- $n=1$: $1-2-12=-13$ ✗
- $n=2$: $4-4-6=-6$ ✗
- $n=3$: $9-6-4=-1$ ✗
- $n=4$: $16-8-3=5$ ✓
- $n=6$: $36-12-2=22$ ✓
- $n=12$: $144-24-1=119$ ✓

Barcha natural qiymatlar yigʻindisi:
$$5+22+119=146 .$$''',
ru=r'''Разделим выражение почленно:
$$\frac{n^3-2n^2-12}{n}=n^2-2n-\frac{12}{n}.$$
Слагаемое $n^2-2n$ целое, поэтому для целого значения нужно, чтобы $n$ было делителем $12$:
$$n\in\{1,2,3,4,6,12\}.$$
Проверяем каждое (результат должен быть **натуральным**, то есть положительным целым):

- $n=1$: $1-2-12=-13$ ✗
- $n=2$: $4-4-6=-6$ ✗
- $n=3$: $9-6-4=-1$ ✗
- $n=4$: $16-8-3=5$ ✓
- $n=6$: $36-12-2=22$ ✓
- $n=12$: $144-24-1=119$ ✓

Сумма всех натуральных значений:
$$5+22+119=146 .$$'''),

dict(n=17, pts='1,5', ans='B) $32$',
uz=r'''Diagonallar $O$ nuqtada kesishsin. Toʻrtta uchburchak hosil boʻladi:
$$\triangle AOB,\ \triangle BOC,\ \triangle COD,\ \triangle DOA .$$
«Faqat bitta umumiy uchga ega» — bu **qarama-qarshi** uchburchaklar, masalan $\triangle AOB$ va $\triangle COD$ (ular faqat $O$ ni baham koʻradi), qoʻshnilari esa butun bir tomonni baham koʻradi.

**Asosiy xossa.** Bir xil balandlikka ega uchburchaklarning yuzalari asoslariga proporsional:
$$\frac{[AOB]}{[BOC]}=\frac{AO}{OC},\qquad \frac{[AOD]}{[COD]}=\frac{AO}{OC}.$$
Demak
$$\frac{[AOB]}{[BOC]}=\frac{[AOD]}{[COD]} \ \Longrightarrow\ [AOB]\cdot[COD]=[BOC]\cdot[AOD].$$
Yaʼni **qarama-qarshi uchburchaklar yuzalari koʻpaytmasi teng**.

Shart boʻyicha qarama-qarshi juftlikdagilar $16$ va $24$, uchinchisi $12$, izlanayotgani $S$:
$$16\cdot24=12\cdot S \ \Longrightarrow\ S=\frac{384}{12}=32 .$$''',
ru=r'''Пусть диагонали пересекаются в точке $O$. Образуются четыре треугольника:
$$\triangle AOB,\ \triangle BOC,\ \triangle COD,\ \triangle DOA .$$
«Имеют лишь одну общую вершину» — это **противоположные** треугольники, например $\triangle AOB$ и $\triangle COD$ (у них общая только точка $O$), тогда как соседние имеют общую целую сторону.

**Ключевое свойство.** Площади треугольников с одинаковой высотой пропорциональны основаниям:
$$\frac{[AOB]}{[BOC]}=\frac{AO}{OC},\qquad \frac{[AOD]}{[COD]}=\frac{AO}{OC}.$$
Значит,
$$\frac{[AOB]}{[BOC]}=\frac{[AOD]}{[COD]} \ \Longrightarrow\ [AOB]\cdot[COD]=[BOC]\cdot[AOD].$$
То есть **произведения площадей противоположных треугольников равны**.

По условию противоположная пара — $16$ и $24$, третий треугольник $12$, искомый $S$:
$$16\cdot24=12\cdot S \ \Longrightarrow\ S=\frac{384}{12}=32 .$$'''),

dict(n=18, pts='1,5', ans='C) $6$',
uz=r'''Kesmalar: $1,4,9,16,25,36,49,64$. Uchburchak yasash uchun **uchburchak tengsizligi** bajarilishi kerak: eng katta tomon qolgan ikkitasining yigʻindisidan kichik boʻlsin.

$a<b<c$ boʻlsin; $a+b>c$ shartini tekshiramiz. Kichik kesmalar tez «ortda qoladi»:
- $1$ ni oʻz ichiga olganlar: $1+b>c$ — $b$ va $c$ kvadratlar orasidagi farq kamida $2b+1>1$, demak hech biri mos emas.
- $4$ bilan: $4+9=13<16$, $4+16=20<25$, $4+25=29<36$, $4+36=40<49$, $4+49=53<64$ — mos emas.
- $9$ bilan: $9+16=25\not>25$ ✗, $9+25=34<36$ ✗, $9+36=45<49$ ✗, $9+49=58<64$ ✗.
- $16$ bilan: $16+25=41>36$ ✓, $16+36=52>49$ ✓, $16+49=65>64$ ✓ (lekin $16+25=41<49$ ✗, $16+36=52<64$ ✗).
- $25$ bilan: $25+36=61>49$ ✓, $25+49=74>64$ ✓ ($25+36=61<64$ ✗).
- $36$ bilan: $36+49=85>64$ ✓.

Mos uchliklar:
$$(16;25;36),\ (16;36;49),\ (16;49;64),\ (25;36;49),\ (25;49;64),\ (36;49;64).$$
Jami $6$ ta. Ularning barchasida tomonlar turlicha ✓''',
ru=r'''Отрезки: $1,4,9,16,25,36,49,64$. Для построения треугольника нужно **неравенство треугольника**: наибольшая сторона меньше суммы двух других.

Пусть $a<b<c$; проверяем $a+b>c$. Маленькие отрезки быстро «отстают»:
- С $1$: разность соседних квадратов не меньше $2b+1>1$, поэтому ни одна тройка не подходит.
- С $4$: $4+9=13<16$, $4+16=20<25$, $4+25=29<36$, $4+36=40<49$, $4+49=53<64$ — не подходит.
- С $9$: $9+16=25\not>25$ ✗, $9+25=34<36$ ✗, $9+36=45<49$ ✗, $9+49=58<64$ ✗.
- С $16$: $16+25=41>36$ ✓, $16+36=52>49$ ✓, $16+49=65>64$ ✓ (но $16+25=41<49$ ✗, $16+36=52<64$ ✗).
- С $25$: $25+36=61>49$ ✓, $25+49=74>64$ ✓ ($25+36=61<64$ ✗).
- С $36$: $36+49=85>64$ ✓.

Подходящие тройки:
$$(16;25;36),\ (16;36;49),\ (16;49;64),\ (25;36;49),\ (25;49;64),\ (36;49;64).$$
Всего $6$. Во всех стороны различны ✓'''),

dict(n=19, pts='1,5', ans=r'A) $\frac{80}{11}$',
uz=r'''**Millarning burchak tezliklari.** Minut mili bir daqiqada $6^\circ$, soat mili $\dfrac{360^\circ}{12\cdot60}=0{,}5^\circ$ aylanadi. Minut mili soat milidan
$$6^\circ-0{,}5^\circ=5{,}5^\circ$$
tezroq siljiydi.

**Boshlangʻich holat ($5{:}20$).**
Minut mili: $20\cdot6^\circ=120^\circ$.
Soat mili: $5\cdot30^\circ+20\cdot0{,}5^\circ=150^\circ+10^\circ=160^\circ$.

Ular orasidagi farq $160^\circ-120^\circ=40^\circ$ — minut mili orqada.

**Quvib yetish vaqti.**
$$t=\frac{40^\circ}{5{,}5^\circ/\text{daq}}=\frac{40}{5{,}5}=\frac{80}{11}\ \text{daqiqa}\approx7\tfrac{3}{11}\ \text{daq}.$$

**Tekshirish.** $t=\frac{80}{11}$ da minut mili $120+6\cdot\frac{80}{11}=\frac{1320+480}{11}=\frac{1800}{11}$, soat mili $160+0{,}5\cdot\frac{80}{11}=\frac{1760+40}{11}=\frac{1800}{11}$ ✓''',
ru=r'''**Угловые скорости стрелок.** Минутная стрелка проходит $6^\circ$ в минуту, часовая — $\dfrac{360^\circ}{12\cdot60}=0{,}5^\circ$. Минутная опережает часовую на
$$6^\circ-0{,}5^\circ=5{,}5^\circ$$
в минуту.

**Начальное положение ($5{:}20$).**
Минутная стрелка: $20\cdot6^\circ=120^\circ$.
Часовая: $5\cdot30^\circ+20\cdot0{,}5^\circ=150^\circ+10^\circ=160^\circ$.

Разница $160^\circ-120^\circ=40^\circ$ — минутная отстаёт.

**Время догона.**
$$t=\frac{40^\circ}{5{,}5^\circ/\text{мин}}=\frac{40}{5{,}5}=\frac{80}{11}\ \text{минуты}\approx7\tfrac{3}{11}\ \text{мин}.$$

**Проверка.** При $t=\frac{80}{11}$ минутная стрелка на $120+6\cdot\frac{80}{11}=\frac{1800}{11}$, часовая на $160+0{,}5\cdot\frac{80}{11}=\frac{1800}{11}$ ✓'''),

dict(n=20, pts='1,5', ans=r'D) $36^\circ$',
uz=r'''$P$ nuqtani $\overrightarrow{BC}$ vektorga siljitamiz: hosil boʻlgan nuqtani $Q$ deylik, yaʼni $\overrightarrow{PQ}=\overrightarrow{BC}=\overrightarrow{AD}$.

Unda $ABPQ\!D$ konfiguratsiyada:
- $BPQC$ — parallelogramm ($\overrightarrow{BP}$ ni $\overrightarrow{BC}$ ga siljitdik), demak $CQ=BP$ va $CQ\parallel BP$;
- $APQD$ ham parallelogramm, demak $DQ=AP$ va $DQ\parallel AP$.

Endi $\triangle CDQ$ ni koʻramiz: uning tomonlari $DQ=AP$, $CQ=BP$, $DC=AB$ — yaʼni $\triangle CDQ$ uchburchak $\triangle BAP$ uchburchakka **teng** (uch tomoni boʻyicha).

Bundan $\angle DQC=\angle APB$. Ikkinchi tomondan $\angle CPD$ ham oʻsha toʻrtburchakda, va
$$\angle APB+\angle CPD=180^\circ$$
sharti $DQCP$ toʻrtburchak **aylanaga ichki chizilgan** ekanini bildiradi ($\angle DQC+\angle DPC=180^\circ$).

Ichki chizilgan toʻrtburchakda bir yoyga tayangan burchaklar teng:
$$\angle PDC=\angle PQC .$$
Lekin $PQ\parallel BC$ va $QC\parallel PB$, shuning uchun $\angle PQC=\angle QPB=\angle PBC$ (aylanma burchaklar).

Demak
$$\angle PDC=\angle PBC=36^\circ .$$''',
ru=r'''Сдвинем точку $P$ на вектор $\overrightarrow{BC}$: полученную точку назовём $Q$, то есть $\overrightarrow{PQ}=\overrightarrow{BC}=\overrightarrow{AD}$.

Тогда в полученной конфигурации:
- $BPQC$ — параллелограмм (мы сдвинули $\overrightarrow{BP}$ на $\overrightarrow{BC}$), поэтому $CQ=BP$ и $CQ\parallel BP$;
- $APQD$ — тоже параллелограмм, поэтому $DQ=AP$ и $DQ\parallel AP$.

Рассмотрим $\triangle CDQ$: его стороны равны $DQ=AP$, $CQ=BP$, $DC=AB$ — значит, $\triangle CDQ$ **равен** $\triangle BAP$ (по трём сторонам).

Отсюда $\angle DQC=\angle APB$. С другой стороны, условие
$$\angle APB+\angle CPD=180^\circ$$
означает, что $\angle DQC+\angle DPC=180^\circ$, то есть четырёхугольник $DQCP$ **вписан в окружность**.

Во вписанном четырёхугольнике углы, опирающиеся на одну дугу, равны:
$$\angle PDC=\angle PQC .$$
Но $PQ\parallel BC$ и $QC\parallel PB$, поэтому $\angle PQC=\angle QPB=\angle PBC$ (накрест лежащие углы).

Итак,
$$\angle PDC=\angle PBC=36^\circ .$$'''),
]

P += [

dict(n=21, pts='2,6', ans='$3$',
uz=r'''$\left(x^3-2025x+1\right)^3$ ni yoyganda har bir had koʻrinishi
$$\frac{3!}{i!\,j!\,k!}\left(x^3\right)^{i}\left(-2025x\right)^{j}\cdot1^{k},\qquad i+j+k=3 .$$
Bu hadning darajasi $3i+j$. Bizga $3i+j=6$ kerak.

$i,j\ge0$ va $i+j\le3$ shartlari bilan barcha variantlarni koʻramiz:
- $i=2,\ j=0$: $3\cdot2+0=6$ ✓ (unda $k=1$)
- $i=1,\ j=3$: $3+3=6$, lekin $i+j=4>3$ ✗
- $i=0,\ j=6$: $j=6>3$ ✗

Demak yagona had: $i=2,\ j=0,\ k=1$, koeffitsiyenti
$$\frac{3!}{2!\,0!\,1!}\cdot1^2\cdot1=3 .$$

**Sodda tushuntirish.** $x^6$ ni olish uchun uchta qavsdan ikkitasidan $x^3$, bittasidan $1$ olish kerak. $1$ ni qaysi qavsdan olishni $3$ xil tanlash mumkin, demak koeffitsiyent $3$.''',
ru=r'''При раскрытии $\left(x^3-2025x+1\right)^3$ каждое слагаемое имеет вид
$$\frac{3!}{i!\,j!\,k!}\left(x^3\right)^{i}\left(-2025x\right)^{j}\cdot1^{k},\qquad i+j+k=3 .$$
Его степень равна $3i+j$. Нам нужно $3i+j=6$.

Переберём варианты при $i,j\ge0$ и $i+j\le3$:
- $i=2,\ j=0$: $3\cdot2+0=6$ ✓ (тогда $k=1$)
- $i=1,\ j=3$: $3+3=6$, но $i+j=4>3$ ✗
- $i=0,\ j=6$: $j=6>3$ ✗

Значит, слагаемое единственно: $i=2,\ j=0,\ k=1$, его коэффициент
$$\frac{3!}{2!\,0!\,1!}\cdot1^2\cdot1=3 .$$

**Простое объяснение.** Чтобы получить $x^6$, надо из двух скобок взять $x^3$, а из одной — единицу. Выбрать скобку с единицей можно $3$ способами, поэтому коэффициент равен $3$.'''),

dict(n=22, pts='2,6', ans='$9$',
uz=r'''Kvadrat uchhadni koʻpaytuvchilarga ajratamiz:
$$6x^2-ax-a^2=(3x+a)(2x-a).$$
**Tekshirish:** $(3x+a)(2x-a)=6x^2-3ax+2ax-a^2=6x^2-ax-a^2$ ✓

Ildizlari: $x=-\dfrac{a}{3}$ va $x=\dfrac{a}{2}$. $a$ natural boʻlgani uchun $-\dfrac a3<\dfrac a2$, va parabola shoxlari yuqoriga qaragan, demak
$$6x^2-ax-a^2<0 \quad\Longleftrightarrow\quad -\frac{a}{3}<x<\frac{a}{2}.$$

Endi shu oraliqdagi butun sonlar soni aynan $7$ ta boʻlishini talab qilamiz. Oraliq uzunligi $\dfrac a2+\dfrac a3=\dfrac{5a}{6}$, demak $a\approx8{-}9$ atrofida izlash kerak. Tekshiramiz:

- $a=7$: $\left(-\tfrac73;\;3{,}5\right)$, butunlar $-2,\dots,3$ — $6$ ta
- $a=8$: $\left(-\tfrac83;\;4\right)$, butunlar $-2,\dots,3$ — $6$ ta
- $a=9$: $\left(-3;\;4{,}5\right)$, butunlar $-2,-1,0,1,2,3,4$ — **$7$ ta** ✓
- $a=10$: $\left(-\tfrac{10}3;\;5\right)$, butunlar $-3,\dots,4$ — $8$ ta

Javob: $a=9$.

(Eʼtibor bering, $a=9$ da $x=-3$ chegara nuqtasi — tengsizlik **qatʼiy**, shuning uchun $-3$ hisobga olinmaydi.)''',
ru=r'''Разложим квадратный трёхчлен на множители:
$$6x^2-ax-a^2=(3x+a)(2x-a).$$
**Проверка:** $(3x+a)(2x-a)=6x^2-3ax+2ax-a^2=6x^2-ax-a^2$ ✓

Корни: $x=-\dfrac{a}{3}$ и $x=\dfrac{a}{2}$. Так как $a$ натурально, $-\dfrac a3<\dfrac a2$, а ветви параболы направлены вверх, поэтому
$$6x^2-ax-a^2<0 \quad\Longleftrightarrow\quad -\frac{a}{3}<x<\frac{a}{2}.$$

Требуется, чтобы целых чисел в этом промежутке было ровно $7$. Длина промежутка равна $\dfrac a2+\dfrac a3=\dfrac{5a}{6}$, значит, искать нужно около $a\approx8{-}9$. Проверяем:

- $a=7$: $\left(-\tfrac73;\;3{,}5\right)$, целые $-2,\dots,3$ — $6$ штук
- $a=8$: $\left(-\tfrac83;\;4\right)$, целые $-2,\dots,3$ — $6$ штук
- $a=9$: $\left(-3;\;4{,}5\right)$, целые $-2,-1,0,1,2,3,4$ — **$7$ штук** ✓
- $a=10$: $\left(-\tfrac{10}3;\;5\right)$, целые $-3,\dots,4$ — $8$ штук

Ответ: $a=9$.

(Обратите внимание: при $a=9$ точка $x=-3$ является границей, а неравенство **строгое**, поэтому $-3$ не учитывается.)'''),

dict(n=23, pts='2,6', ans='$24$',
uz=r'''$\angle ABD=\angle DBC=\beta$ deylik ($BD$ — bissektrisa), demak $\angle B=2\beta$.

$AC=BC$ boʻlgani uchun uchburchak teng yonli va asosi $AB$, shuning uchun
$$\angle A=\angle B=2\beta .$$

**1) $\triangle ABD$ da sinuslar teoremasi.** Bu uchburchakda $\angle A=2\beta$, $\angle ABD=\beta$, demak
$$\frac{AD}{\sin\beta}=\frac{BD}{\sin\angle A}=\frac{BD}{\sin 2\beta}
\ \Longrightarrow\ BD=AD\cdot\frac{\sin2\beta}{\sin\beta}=AD\cdot\frac{2\sin\beta\cos\beta}{\sin\beta}=2\,AD\cos\beta .$$

**2) $\triangle BDM$ toʻgʻri burchakli.** Shart boʻyicha $DM\perp BD$, yaʼni $\angle BDM=90^\circ$. Bu uchburchakda $\angle DBM=\angle ABD=\beta$ ($M$ nuqta $BA$ toʻgʻri chiziqda), demak $BD$ — kateti, $BM$ — gipotenuzasi:
$$BM=\frac{BD}{\cos\beta}.$$

**3) Birlashtiramiz:**
$$BM=\frac{2\,AD\cos\beta}{\cos\beta}=2\,AD=2\cdot12=24 .$$

Ajoyib tomoni shundaki, javob $\beta$ ga — yaʼni uchburchakning shakliga — umuman bogʻliq emas.''',
ru=r'''Пусть $\angle ABD=\angle DBC=\beta$ ($BD$ — биссектриса), тогда $\angle B=2\beta$.

Так как $AC=BC$, треугольник равнобедренный с основанием $AB$, поэтому
$$\angle A=\angle B=2\beta .$$

**1) Теорема синусов в $\triangle ABD$.** В нём $\angle A=2\beta$, $\angle ABD=\beta$, значит,
$$\frac{AD}{\sin\beta}=\frac{BD}{\sin\angle A}=\frac{BD}{\sin 2\beta}
\ \Longrightarrow\ BD=AD\cdot\frac{\sin2\beta}{\sin\beta}=AD\cdot\frac{2\sin\beta\cos\beta}{\sin\beta}=2\,AD\cos\beta .$$

**2) $\triangle BDM$ прямоугольный.** По условию $DM\perp BD$, то есть $\angle BDM=90^\circ$. В этом треугольнике $\angle DBM=\angle ABD=\beta$ (точка $M$ лежит на прямой $BA$), значит, $BD$ — катет, $BM$ — гипотенуза:
$$BM=\frac{BD}{\cos\beta}.$$

**3) Объединяем:**
$$BM=\frac{2\,AD\cos\beta}{\cos\beta}=2\,AD=2\cdot12=24 .$$

Примечательно, что ответ вообще не зависит от $\beta$, то есть от формы треугольника.'''),

dict(n=24, pts='2,6', ans='$24$',
uz=r'''Avval $F(n)$ ni koʻpaytuvchilarga ajratamiz:
$$F(n)=n^5+3n^3-4n=n\left(n^4+3n^2-4\right)=n\left(n^2+4\right)\left(n^2-1\right)=\left(n-1\right)n\left(n+1\right)\left(n^2+4\right).$$

**1) EKUB $24$ ga boʻlinadi.** $(n-1)n(n+1)$ — ketma-ket uchta butun sonning koʻpaytmasi, shuning uchun u $6$ ga boʻlinadi. Bundan tashqari $4\mid F(n)$ ekanini koʻrsatamiz:
- $n$ juft boʻlsa, $n^2+4$ ham juft va $n$ juft — koʻpaytmada kamida $2\cdot2=4$;
- $n$ toq boʻlsa, $n-1$ va $n+1$ — ketma-ket juft sonlar, ularning koʻpaytmasi $8$ ga boʻlinadi.

Demak har doim $F(n)\ \vdots\ 8$ yoki $\vdots\ 4$, va $\vdots\ 3$; aniqrogʻi, har bir holda $F(n)\ \vdots\ 24$.

**2) EKUB aynan $24$.** Chegaraviy qiymatni beradigan hadlarni hisoblaymiz:
$$F(2)=1\cdot2\cdot3\cdot8=48,\qquad F(3)=2\cdot3\cdot4\cdot13=312 .$$
$$\mathrm{EKUB}(48;312)=24 .$$
EKUB $24$ dan katta boʻla olmaydi, chunki u $48$ va $312$ ning umumiy boʻluvchisi; $1$-banddan u $24$ ga boʻlinadi. Demak
$$\mathrm{EKUB}\bigl(F(2);F(3);\dots;F(20)\bigr)=24 .$$
**Tekshirish.** $F(4)=3\cdot4\cdot5\cdot20=1200=24\cdot50$ ✓, $F(5)=4\cdot5\cdot6\cdot29=3480=24\cdot145$ ✓''',
ru=r'''Сначала разложим $F(n)$ на множители:
$$F(n)=n^5+3n^3-4n=n\left(n^4+3n^2-4\right)=n\left(n^2+4\right)\left(n^2-1\right)=\left(n-1\right)n\left(n+1\right)\left(n^2+4\right).$$

**1) НОД делится на $24$.** Произведение $(n-1)n(n+1)$ — три последовательных целых числа, поэтому оно делится на $6$. Покажем, что $4\mid F(n)$:
- если $n$ чётно, то $n^2+4$ тоже чётно, и вместе с чётным $n$ даёт множитель $2\cdot2=4$;
- если $n$ нечётно, то $n-1$ и $n+1$ — последовательные чётные, их произведение делится на $8$.

Значит, в каждом случае $F(n)\ \vdots\ 24$.

**2) НОД равен ровно $24$.** Вычислим граничные члены:
$$F(2)=1\cdot2\cdot3\cdot8=48,\qquad F(3)=2\cdot3\cdot4\cdot13=312 .$$
$$\mathrm{НОД}(48;312)=24 .$$
Больше $24$ НОД быть не может, так как он делит $48$ и $312$; из пункта 1 он делится на $24$. Значит,
$$\mathrm{НОД}\bigl(F(2);F(3);\dots;F(20)\bigr)=24 .$$
**Проверка.** $F(4)=3\cdot4\cdot5\cdot20=1200=24\cdot50$ ✓, $F(5)=4\cdot5\cdot6\cdot29=3480=24\cdot145$ ✓'''),

dict(n=25, pts='2,6', ans='$63$',
uz=r'''$n$ soni $n+1$ marta yozilgan. Dastlabki $n$ ta blokdagi hadlar soni:
$$T(n)=\sum_{k=1}^{n}(k+1)=\frac{n(n+1)}{2}+n=\frac{n(n+3)}{2}.$$

$2025$-oʻrin qaysi blokka tushishini topamiz:
$$\frac{n(n+3)}{2}\ge2025 \ \Longleftrightarrow\ n^2+3n\ge4050 .$$
$$n=62:\quad T(62)=\frac{62\cdot65}{2}=2015<2025 ,$$
$$n=63:\quad T(63)=\frac{63\cdot66}{2}=2079\ge2025 .$$

Demak $63$ soni $2016$-oʻrindan $2079$-oʻringacha turadi, va $2025$-oʻrin shu oraliqda:
$$2016\le 2025\le 2079 \quad\checkmark$$

**Javob: $63$.**

**Eslatma.** Agar shartni harfma-harf «yozuvdagi belgilar» sifatida tushunilsa (yaʼni $10$ dan katta sonlar ikkita belgi egallaydi), $2025$-belgi $54$ sonining ikkinchi raqami, yaʼni $4$ boʻladi. Olimpiada kalitida odatda birinchi talqin — $63$ — qabul qilinadi.''',
ru=r'''Число $n$ записано $n+1$ раз. Количество членов в первых $n$ блоках:
$$T(n)=\sum_{k=1}^{n}(k+1)=\frac{n(n+1)}{2}+n=\frac{n(n+3)}{2}.$$

Найдём, в какой блок попадает $2025$-е место:
$$\frac{n(n+3)}{2}\ge2025 \ \Longleftrightarrow\ n^2+3n\ge4050 .$$
$$n=62:\quad T(62)=\frac{62\cdot65}{2}=2015<2025 ,$$
$$n=63:\quad T(63)=\frac{63\cdot66}{2}=2079\ge2025 .$$

Значит, число $63$ занимает места с $2016$-го по $2079$-е, и $2025$-е место попадает в этот диапазон:
$$2016\le 2025\le 2079 \quad\checkmark$$

**Ответ: $63$.**

**Замечание.** Если понимать условие буквально как «символы записи» (то есть числа больше $9$ занимают по два знака), то $2025$-м символом окажется вторая цифра числа $54$, то есть $4$. В ключе олимпиады обычно принимается первая трактовка — $63$.'''),

dict(n=26, pts='2,6', ans='$850$',
uz=r'''$N=13a+31b$, $a,b$ — natural sonlar ($\ge1$).

**Qachon ikkinchi ifodalanish paydo boʻladi?** Agar $(a;b)$ bitta yechim boʻlsa, boshqasi
$$13(a+31)+31(b-13)=13a+403+31b-403=N$$
koʻrinishida boʻladi. Yaʼni $a$ ni $31$ ga oshirib, $b$ ni $13$ ga kamaytiramiz. Barcha yechimlar aynan shu koʻrinishda (chunki $\gcd(13;31)=1$).

**Uchta ifodalanish uchun** kamida uchta yechim kerak:
$$(a;\,b),\quad (a+31;\,b-13),\quad (a+62;\,b-26).$$
Hammasi natural boʻlishi uchun
$$a\ge1 \quad\text{va}\quad b-26\ge1 \ \Longrightarrow\ b\ge27 .$$

**Minimallashtiramiz.** $N=13a+31b$ eng kichik boʻlishi uchun $a$ va $b$ eng kichik olinadi:
$$a=1,\qquad b=27 \ \Longrightarrow\ N=13+31\cdot27=13+837=850 .$$

**Tekshirish.** $850$ ning barcha ifodalanishlari:
$$850=13\cdot1+31\cdot27=13\cdot32+31\cdot14=13\cdot63+31\cdot1 .$$
Uchta ✓ Undan kichik hech bir son uchta ifodaga ega emas.''',
ru=r'''$N=13a+31b$, где $a,b$ — натуральные ($\ge1$).

**Как возникает второе представление?** Если $(a;b)$ — одно решение, то другое имеет вид
$$13(a+31)+31(b-13)=13a+403+31b-403=N ,$$
то есть $a$ увеличивается на $31$, а $b$ уменьшается на $13$. Все решения имеют именно такой вид (так как $\gcd(13;31)=1$).

**Для трёх представлений** нужно как минимум три решения:
$$(a;\,b),\quad (a+31;\,b-13),\quad (a+62;\,b-26).$$
Чтобы все они были натуральными:
$$a\ge1 \quad\text{и}\quad b-26\ge1 \ \Longrightarrow\ b\ge27 .$$

**Минимизируем.** Для наименьшего $N=13a+31b$ берём наименьшие $a$ и $b$:
$$a=1,\qquad b=27 \ \Longrightarrow\ N=13+31\cdot27=13+837=850 .$$

**Проверка.** Все представления числа $850$:
$$850=13\cdot1+31\cdot27=13\cdot32+31\cdot14=13\cdot63+31\cdot1 .$$
Ровно три ✓ Ни одно меньшее число трёх представлений не имеет.'''),

dict(n=27, pts='2,6', ans='$3{,}5$',
uz=r'''$ABC$ teng yonli, asosi $BC$, demak $AB=AC=4$ va $\angle B=\angle C$. $E\in BC$, $BE=1$, $CE=2$ (yaʼni $BC=3$), $M\in AB$ va $\angle AEM=\angle B$.

**1) Burchaklarni hisoblaymiz.** $\angle AEB$ — $\triangle AEC$ ning $E$ uchidagi tashqi burchagi, shuning uchun
$$\angle AEB=\angle C+\angle CAE .$$

**2) $\angle MEB$ ni topamiz.** $M$ va $A$ nuqtalar $BC$ ning bir tomonida, $EM$ nur $EA$ va $EB$ nurlari orasida yotadi:
$$\angle MEB=\angle AEB-\angle AEM=\left(\angle C+\angle CAE\right)-\angle B=\angle CAE$$
(chunki $\angle B=\angle C$).

**3) Oʻxshashlik.** $\triangle MBE$ va $\triangle ECA$ uchburchaklarni solishtiramiz:
$$\angle MEB=\angle EAC \quad\text{(2-banddan)},\qquad \angle MBE=\angle B=\angle C=\angle ECA .$$
Ikki burchak boʻyicha $\triangle MBE\sim\triangle ECA$.

**4) Nisbatlar.** Mos tomonlar:
$$\frac{MB}{EC}=\frac{BE}{CA} \ \Longrightarrow\ MB=\frac{EC\cdot BE}{CA}=\frac{2\cdot1}{4}=\frac12 .$$

**5) Yakun.**
$$MA=AB-MB=4-0{,}5=3{,}5 .$$
**Sonli tekshirish.** $B(0;0)$, $C(3;0)$, $A(1{,}5;\sqrt{13{,}75})$, $E(1;0)$ da $\angle AEM=\angle B$ shartidan $MB\approx0{,}5$, $MA\approx3{,}5$ ✓''',
ru=r'''$ABC$ равнобедренный с основанием $BC$, значит, $AB=AC=4$ и $\angle B=\angle C$. Точка $E\in BC$, $BE=1$, $CE=2$ (то есть $BC=3$), $M\in AB$ и $\angle AEM=\angle B$.

**1) Считаем углы.** $\angle AEB$ — внешний угол $\triangle AEC$ при вершине $E$, поэтому
$$\angle AEB=\angle C+\angle CAE .$$

**2) Находим $\angle MEB$.** Точки $M$ и $A$ по одну сторону от $BC$, луч $EM$ лежит между лучами $EA$ и $EB$:
$$\angle MEB=\angle AEB-\angle AEM=\left(\angle C+\angle CAE\right)-\angle B=\angle CAE$$
(так как $\angle B=\angle C$).

**3) Подобие.** Сравним $\triangle MBE$ и $\triangle ECA$:
$$\angle MEB=\angle EAC \quad\text{(из п. 2)},\qquad \angle MBE=\angle B=\angle C=\angle ECA .$$
По двум углам $\triangle MBE\sim\triangle ECA$.

**4) Отношения.** Соответственные стороны:
$$\frac{MB}{EC}=\frac{BE}{CA} \ \Longrightarrow\ MB=\frac{EC\cdot BE}{CA}=\frac{2\cdot1}{4}=\frac12 .$$

**5) Итог.**
$$MA=AB-MB=4-0{,}5=3{,}5 .$$
**Численная проверка.** При $B(0;0)$, $C(3;0)$, $A(1{,}5;\sqrt{13{,}75})$, $E(1;0)$ из условия $\angle AEM=\angle B$ получаем $MB\approx0{,}5$, $MA\approx3{,}5$ ✓'''),

dict(n=28, pts='2,6', ans='$3057$',
uz=r'''**Teskarisini sanash osonroq:** $1$ dan $8888$ gacha boʻlgan sonlar ichida $8$ raqami **umuman uchramaydiganlari** nechta?

Qulaylik uchun $0$ dan $8887$ gacha boʻlgan sonlarni koʻramiz (bu $8888$ ta son; $0$ ni qoʻshdik, $8888$ ni chiqardik — $0$ da $8$ yoʻq, $8888$ da esa bor, shuning uchun «$8$ siz» sonlar soni oʻzgarmaydi, lekin sanash oson boʻladi).

Har bir sonni toʻrt xonali qilib yozamiz (oldiga nollar qoʻyib): $\overline{d_3d_2d_1d_0}$, $0\le \overline{d_3d_2d_1d_0}\le8887$.

Buni toʻgʻridan-toʻgʻri sanash noqulay, shuning uchun bosqichma-bosqich yuramiz. $8$ siz sonlarni uzunligi boʻyicha sanaymiz:

- **bir xonali** ($1..9$): $8$ dan boshqa — $8$ ta;
- **ikki xonali** ($10..99$): birinchi raqam $8$ ta variant ($1..9$, $8$ siz), ikkinchisi $9$ ta ($0..9$, $8$ siz) — $8\cdot9=72$ ta;
- **uch xonali** ($100..999$): $8\cdot9\cdot9=648$ ta;
- **toʻrt xonali** $1000..8887$: bu oraliqni ikkiga boʻlamiz.
  - $1000..7999$ da birinchi raqam $\in\{1,\dots,7\}$ — $7$ ta variant, qolganlari $9$ tadan: $7\cdot9^3=5103$ ta;
  - $8000..8887$ da birinchi raqam $8$ — bunday sonlarda $8$ bor, mos emas: $0$ ta.

Jami $8$ siz sonlar:
$$8+72+648+5103=5831 .$$

**Javob:**
$$8888-5831=3057 .$$''',
ru=r'''**Проще посчитать дополнение:** сколько чисел от $1$ до $8888$ **вообще не содержат** цифру $8$?

Считаем по количеству разрядов.

- **однозначные** ($1..9$): все кроме $8$ — $8$ чисел;
- **двузначные** ($10..99$): первая цифра $8$ вариантов ($1..9$ без $8$), вторая $9$ вариантов ($0..9$ без $8$) — $8\cdot9=72$;
- **трёхзначные** ($100..999$): $8\cdot9\cdot9=648$;
- **четырёхзначные** $1000..8888$: разобьём промежуток.
  - $1000..7999$: первая цифра $\in\{1,\dots,7\}$ — $7$ вариантов, остальные по $9$: $7\cdot9^3=5103$;
  - $8000..8888$: первая цифра $8$ — такие числа содержат $8$, не подходят: $0$.

Всего чисел без восьмёрки:
$$8+72+648+5103=5831 .$$

**Ответ:**
$$8888-5831=3057 .$$'''),

dict(n=29, pts='2,6', ans='$-480$',
uz=r'''$x^2-x+1=0$ tenglamaning ildizini $\omega$ deylik. Unda
$$\omega^2=\omega-1 .$$
Bundan
$$\omega^3=\omega\cdot\omega^2=\omega^2-\omega=(\omega-1)-\omega=-1 .$$
Demak $\omega^6=1$ — $\omega$ birning primitiv $6$-darajali ildizi.

Endi kerakli darajalarni soddalashtiramiz:
$$\omega^9=\left(\omega^3\right)^3=(-1)^3=-1,$$
$$\omega^{10}=\omega^9\cdot\omega=-\omega,$$
$$\omega^{11}=\omega^9\cdot\omega^2=-\omega^2=-(\omega-1)=1-\omega .$$

Koʻphadga qoʻyamiz. $P(x)=20x^{11}+bx^{10}+cx^{9}+4$ qoldiqsiz boʻlinsa, $P(\omega)=0$:
$$20\left(1-\omega\right)+b\left(-\omega\right)+c\left(-1\right)+4=0 ,$$
$$\left(20-c+4\right)-\left(20+b\right)\omega=0 ,$$
$$\left(24-c\right)-\left(20+b\right)\omega=0 .$$

$\omega$ haqiqiy son emas (diskriminant $1-4<0$), shuning uchun $1$ va $\omega$ ratsional sonlar ustida chiziqli erkli. Demak ikkala koeffitsiyent ham nolga teng:
$$24-c=0 \ \Longrightarrow\ c=24 ,\qquad 20+b=0 \ \Longrightarrow\ b=-20 .$$

$$bc=(-20)\cdot24=-480 .$$''',
ru=r'''Пусть $\omega$ — корень уравнения $x^2-x+1=0$. Тогда
$$\omega^2=\omega-1 .$$
Отсюда
$$\omega^3=\omega\cdot\omega^2=\omega^2-\omega=(\omega-1)-\omega=-1 .$$
Значит, $\omega^6=1$ — $\omega$ является первообразным корнем $6$-й степени из единицы.

Упростим нужные степени:
$$\omega^9=\left(\omega^3\right)^3=(-1)^3=-1,$$
$$\omega^{10}=\omega^9\cdot\omega=-\omega,$$
$$\omega^{11}=\omega^9\cdot\omega^2=-\omega^2=-(\omega-1)=1-\omega .$$

Подставим в многочлен. Если $P(x)=20x^{11}+bx^{10}+cx^{9}+4$ делится нацело, то $P(\omega)=0$:
$$20\left(1-\omega\right)+b\left(-\omega\right)+c\left(-1\right)+4=0 ,$$
$$\left(20-c+4\right)-\left(20+b\right)\omega=0 ,$$
$$\left(24-c\right)-\left(20+b\right)\omega=0 .$$

Число $\omega$ не действительное (дискриминант $1-4<0$), поэтому $1$ и $\omega$ линейно независимы над рациональными числами. Значит, оба коэффициента равны нулю:
$$24-c=0 \ \Longrightarrow\ c=24 ,\qquad 20+b=0 \ \Longrightarrow\ b=-20 .$$

$$bc=(-20)\cdot24=-480 .$$'''),

dict(n=30, pts='2,6', ans='$144$',
uz=r'''$a_n$ — $\{1,2,\dots,n\}$ toʻplamning ketma-ket elementlarsiz qism toʻplamlari soni.

**Rekurrent munosabat.** Eng katta element $n$ ni koʻramiz:
- $n$ **kirmasa** — qolgani $\{1,\dots,n-1\}$ ning shunday qism toʻplami: $a_{n-1}$ ta;
- $n$ **kirsa** — unda $n-1$ kira olmaydi, qolgani $\{1,\dots,n-2\}$ ning qism toʻplami: $a_{n-2}$ ta.

Bu ikki hol kesishmaydi va hammasini qamrab oladi:
$$a_n=a_{n-1}+a_{n-2}.$$

**Boshlangʻich qiymatlar.**
$$a_0=1\ (\varnothing),\qquad a_1=2\ (\varnothing,\{1\}).$$

Ketma-ket hisoblaymiz:
$$a_2=3,\ a_3=5,\ a_4=8,\ a_5=13,\ a_6=21,\ a_7=34,\ a_8=55,\ a_9=89,\ a_{10}=144 .$$

Bu Fibonachchi sonlari: $a_n=F_{n+2}$, va $a_{10}=F_{12}=144$.

**Javob: $144$** (boʻsh toʻplam va bir elementli toʻplamlar ham hisobga olingan).''',
ru=r'''Пусть $a_n$ — количество подмножеств $\{1,2,\dots,n\}$ без двух последовательных элементов.

**Рекуррентное соотношение.** Рассмотрим наибольший элемент $n$:
- если $n$ **не входит** — остаток является таким подмножеством $\{1,\dots,n-1\}$: $a_{n-1}$ штук;
- если $n$ **входит** — тогда $n-1$ войти не может, остаток является подмножеством $\{1,\dots,n-2\}$: $a_{n-2}$ штук.

Эти случаи не пересекаются и покрывают всё:
$$a_n=a_{n-1}+a_{n-2}.$$

**Начальные значения.**
$$a_0=1\ (\varnothing),\qquad a_1=2\ (\varnothing,\{1\}).$$

Считаем последовательно:
$$a_2=3,\ a_3=5,\ a_4=8,\ a_5=13,\ a_6=21,\ a_7=34,\ a_8=55,\ a_9=89,\ a_{10}=144 .$$

Это числа Фибоначчи: $a_n=F_{n+2}$, и $a_{10}=F_{12}=144$.

**Ответ: $144$** (пустое множество и одноэлементные множества тоже учтены).'''),
]
