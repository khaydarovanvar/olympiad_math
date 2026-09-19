# -*- coding: utf-8 -*-
GRADE = 11
TITLE_UZ = "MATEMATIKA · 11-sinf — yechimlar"
TITLE_RU = "МАТЕМАТИКА · 11 класс — решения"
P = [

dict(n=1, pts='0,9', ans='C) $7$',
uz=r'''Shartdan $a$ ni $b$ orqali ifodalaymiz:
$$\frac{a+2b}{a-2b}=3 \ \Longrightarrow\ a+2b=3(a-2b) \ \Longrightarrow\ a+2b=3a-6b \ \Longrightarrow\ 8b=2a \ \Longrightarrow\ a=4b .$$
($a-2b\ne0$ boʻlishi kerak; $a=4b$ da $a-2b=2b\ne0$ agar $b\ne0$ ✓)

Endi izlanayotgan ifodaga qoʻyamiz:
$$\frac{a+3b}{a-3b}=\frac{4b+3b}{4b-3b}=\frac{7b}{b}=7 .$$

**Tekshirish.** $b=1,\ a=4$: $\frac{4+2}{4-2}=3$ ✓ va $\frac{4+3}{4-3}=7$ ✓''',
ru=r'''Из условия выразим $a$ через $b$:
$$\frac{a+2b}{a-2b}=3 \ \Longrightarrow\ a+2b=3(a-2b) \ \Longrightarrow\ a+2b=3a-6b \ \Longrightarrow\ 8b=2a \ \Longrightarrow\ a=4b .$$
(Требуется $a-2b\ne0$; при $a=4b$ имеем $a-2b=2b\ne0$, если $b\ne0$ ✓)

Подставляем в искомое выражение:
$$\frac{a+3b}{a-3b}=\frac{4b+3b}{4b-3b}=\frac{7b}{b}=7 .$$

**Проверка.** При $b=1,\ a=4$: $\frac{4+2}{4-2}=3$ ✓ и $\frac{4+3}{4-3}=7$ ✓'''),

dict(n=2, pts='0,9', ans='D) $4$',
uz=r'''Quti massasini $q$, bitta kitobniki $k$ deylik:
$$\begin{cases} q+4k=10,\\ q+6k=13 .\end{cases}$$

Ikkinchi tenglamadan birinchisini ayiramiz:
$$2k=3 \ \Longrightarrow\ k=1{,}5\ \text{kg}.$$

Birinchi tenglamaga qoʻyamiz:
$$q=10-4\cdot1{,}5=10-6=4\ \text{kg}.$$

**Tekshirish.** $4+6\cdot1{,}5=4+9=13$ ✓''',
ru=r'''Пусть $q$ — масса коробки, $k$ — масса одной книги:
$$\begin{cases} q+4k=10,\\ q+6k=13 .\end{cases}$$

Вычтем первое уравнение из второго:
$$2k=3 \ \Longrightarrow\ k=1{,}5\ \text{кг}.$$

Подставим в первое:
$$q=10-4\cdot1{,}5=10-6=4\ \text{кг}.$$

**Проверка.** $4+6\cdot1{,}5=4+9=13$ ✓'''),

dict(n=3, pts='0,9', ans='B) $8$',
uz=r'''$9800$ ni tub koʻpaytuvchilarga ajratamiz:
$$9800=98\cdot100=\left(2\cdot7^2\right)\cdot\left(2^2\cdot5^2\right)=2^3\cdot5^2\cdot7^2 .$$

Boʻluvchi $d=2^{\alpha}5^{\beta}7^{\gamma}$ **toʻla kvadrat** boʻlishi uchun barcha darajalar juft boʻlishi kerak:
$$\alpha\in\{0;2\}\ (\alpha\le3),\qquad \beta\in\{0;2\},\qquad \gamma\in\{0;2\}.$$

Variantlar soni:
$$2\cdot2\cdot2=8 .$$

**Roʻyxat:** $1,\ 4,\ 25,\ 49,\ 100,\ 196,\ 1225,\ 4900$ — hammasi toʻla kvadrat ($1^2,2^2,5^2,7^2,10^2,14^2,35^2,70^2$) ✓''',
ru=r'''Разложим $9800$ на простые множители:
$$9800=98\cdot100=\left(2\cdot7^2\right)\cdot\left(2^2\cdot5^2\right)=2^3\cdot5^2\cdot7^2 .$$

Чтобы делитель $d=2^{\alpha}5^{\beta}7^{\gamma}$ был **полным квадратом**, все показатели должны быть чётными:
$$\alpha\in\{0;2\}\ (\alpha\le3),\qquad \beta\in\{0;2\},\qquad \gamma\in\{0;2\}.$$

Количество вариантов:
$$2\cdot2\cdot2=8 .$$

**Список:** $1,\ 4,\ 25,\ 49,\ 100,\ 196,\ 1225,\ 4900$ — все полные квадраты ($1^2,2^2,5^2,7^2,10^2,14^2,35^2,70^2$) ✓'''),

dict(n=4, pts='0,9', ans='A) $23$',
uz=r'''Bolalar sonini $n$, olmalar sonini $A$ deylik.

**Birinchi shart:** har biriga bittadan berilsa, $7$ ta ortadi:
$$A=n+7 .$$

**Ikkinchi shart:** har biriga ikkitadan berish uchun $16$ ta yetmaydi:
$$2n=A+16 .$$

Birinchisini ikkinchisiga qoʻyamiz:
$$2n=n+7+16 \ \Longrightarrow\ n=23 .$$

**Tekshirish.** $A=30$. Bittadan: $30-23=7$ ortadi ✓ Ikkitadan: $46-30=16$ yetmaydi ✓''',
ru=r'''Пусть $n$ — число детей, $A$ — число яблок.

**Первое условие:** если раздать по одному, останется $7$:
$$A=n+7 .$$

**Второе условие:** чтобы раздать по два, не хватает $16$:
$$2n=A+16 .$$

Подставим первое во второе:
$$2n=n+7+16 \ \Longrightarrow\ n=23 .$$

**Проверка.** $A=30$. По одному: $30-23=7$ останется ✓ По два: $46-30=16$ не хватает ✓'''),

dict(n=5, pts='0,9', ans='A) $x^3<x<x^2$',
uz=r'''$x<-1$, demak $x$ manfiy va $|x|>1$.

**Ishoralar.** $x<0$, $x^2>0$, $x^3<0$ (toq daraja manfiy sonda manfiy). Demak $x^2$ — eng kattasi.

**$x$ va $x^3$ ni solishtiramiz.**
$$x^3-x=x\left(x^2-1\right)=x(x-1)(x+1).$$
$x<-1$ da: $x<0$, $x-1<0$, $x+1<0$ — uchta manfiy koʻpaytuvchi, koʻpaytma manfiy:
$$x^3-x<0 \ \Longrightarrow\ x^3<x .$$

Demak
$$x^3<x<0<x^2 .$$

**Misol:** $x=-2$: $x^3=-8<x=-2<x^2=4$ ✓''',
ru=r'''$x<-1$, значит, $x$ отрицательно и $|x|>1$.

**Знаки.** $x<0$, $x^2>0$, $x^3<0$ (нечётная степень отрицательного числа отрицательна). Значит, $x^2$ — наибольшее.

**Сравним $x$ и $x^3$.**
$$x^3-x=x\left(x^2-1\right)=x(x-1)(x+1).$$
При $x<-1$: $x<0$, $x-1<0$, $x+1<0$ — три отрицательных множителя, произведение отрицательно:
$$x^3-x<0 \ \Longrightarrow\ x^3<x .$$

Итак,
$$x^3<x<0<x^2 .$$

**Пример:** $x=-2$: $x^3=-8<x=-2<x^2=4$ ✓'''),

dict(n=6, pts='0,9', ans='D) $9$',
uz=r'''Arifmetik progressiyada uchta ketma-ket «bir xil qadamli» hadning yigʻindisi oʻrtadagisining uch barobariga teng, chunki $a_{m-3}+a_m+a_{m+3}=3a_m$.

**Birinchi shart:** $a_5+a_8+a_{11}=3a_8=12$, demak
$$a_8=4 .$$

**Ikkinchi shart:** $a_7+a_{10}+a_{13}=3a_{10}=18$, demak
$$a_{10}=6 .$$

**Ayirma:**
$$d=\frac{a_{10}-a_8}{10-8}=\frac{6-4}{2}=1 .$$

Endi $a_k=5$ ni topamiz. $a_8=4$, $d=1$, shuning uchun
$$a_k=a_8+(k-8)\cdot1=4+k-8=k-4 .$$
$$k-4=5 \ \Longrightarrow\ k=9 .$$
**Tekshirish.** $a_9=a_8+d=4+1=5$ ✓''',
ru=r'''В арифметической прогрессии сумма трёх членов с одинаковым шагом равна утроенному среднему: $a_{m-3}+a_m+a_{m+3}=3a_m$.

**Первое условие:** $a_5+a_8+a_{11}=3a_8=12$, значит,
$$a_8=4 .$$

**Второе условие:** $a_7+a_{10}+a_{13}=3a_{10}=18$, значит,
$$a_{10}=6 .$$

**Разность:**
$$d=\frac{a_{10}-a_8}{10-8}=\frac{6-4}{2}=1 .$$

Найдём $k$ из $a_k=5$. Так как $a_8=4$ и $d=1$,
$$a_k=a_8+(k-8)\cdot1=4+k-8=k-4 .$$
$$k-4=5 \ \Longrightarrow\ k=9 .$$
**Проверка.** $a_9=a_8+d=4+1=5$ ✓'''),

dict(n=7, pts='0,9', ans='C) Shanba · Суббота',
uz=r'''**Bir haftada oʻqiladigan betlar:**
$$25+6\cdot4=25+24=49\ \text{bet}.$$

**Necha hafta toʻliq oʻtadi?**
$$5\ \text{hafta}:\ 5\cdot49=245\ \text{bet}.$$
Qoldi: $290-245=45$ bet. ($6$ hafta $294>290$ — koʻp.)

**Oltinchi hafta (kun-ba-kun).** $36$-kun — yana dushanba:
- **Dushanba:** $245+25=270$, qoldi $20$
- **Seshanba:** $274$, qoldi $16$
- **Chorshanba:** $278$, qoldi $12$
- **Payshanba:** $282$, qoldi $8$
- **Juma:** $286$, qoldi $4$
- **Shanba:** $286+4=290$ ✓ — kitob tugadi.

**Javob: shanba kuni.**''',
ru=r'''**Страниц за неделю:**
$$25+6\cdot4=25+24=49\ \text{страниц}.$$

**Сколько полных недель проходит?**
$$5\ \text{недель}:\ 5\cdot49=245\ \text{страниц}.$$
Осталось: $290-245=45$ страниц. ($6$ недель дали бы $294>290$ — слишком много.)

**Шестая неделя (по дням).** $36$-й день — снова понедельник:
- **Понедельник:** $245+25=270$, осталось $20$
- **Вторник:** $274$, осталось $16$
- **Среда:** $278$, осталось $12$
- **Четверг:** $282$, осталось $8$
- **Пятница:** $286$, осталось $4$
- **Суббота:** $286+4=290$ ✓ — книга дочитана.

**Ответ: в субботу.**'''),

dict(n=8, pts='0,9', ans='B) $10$',
uz=r'''$2000$ va $3000$ orasidagi sonlar — bu $\overline{2bcd}$ koʻrinishidagi toʻrt xonali sonlar ($2001\le n\le2999$).

Birinchi raqam $2$, shuning uchun
$$2+b+c+d=5 \ \Longrightarrow\ b+c+d=3 ,\qquad 0\le b,c,d\le9 .$$

$b+c+d=3$ tenglamaning manfiy boʻlmagan butun yechimlari soni («toʻsiqlar va sharlar»):
$$\binom{3+2}{2}=\binom52=10 .$$
Har bir raqam $9$ dan oshmaydi — $3$ dan katta boʻlolmaydi, shuning uchun qoʻshimcha cheklov ishlamaydi.

**Roʻyxat:** $2003,\,2012,\,2021,\,2030,\,2102,\,2111,\,2120,\,2201,\,2210,\,2300$ — $10$ ta ✓''',
ru=r'''Числа между $2000$ и $3000$ — это четырёхзначные числа вида $\overline{2bcd}$ ($2001\le n\le2999$).

Первая цифра равна $2$, поэтому
$$2+b+c+d=5 \ \Longrightarrow\ b+c+d=3 ,\qquad 0\le b,c,d\le9 .$$

Число неотрицательных целых решений уравнения $b+c+d=3$ («шары и перегородки»):
$$\binom{3+2}{2}=\binom52=10 .$$
Ограничение «цифра не больше $9$» не работает, так как каждая цифра не превосходит $3$.

**Список:** $2003,\,2012,\,2021,\,2030,\,2102,\,2111,\,2120,\,2201,\,2210,\,2300$ — ровно $10$ ✓'''),

dict(n=9, pts='0,9', ans='A) $12$',
uz=r'''Yakuniy hisob $3{:}2$. Birinchi boʻlimdagi hisob $(a;b)$ boʻlsin.

Futbolda urilgan gollar soni faqat **ortadi**, shuning uchun birinchi boʻlimdagi hisob yakuniy hisobdan oshib keta olmaydi:
$$0\le a\le3,\qquad 0\le b\le2 .$$

Bundan tashqari, har qanday shunday $(a;b)$ juftligiga erishish mumkin: avval $a$ va $b$ ta gol istalgan tartibda, keyin qolganlari ikkinchi boʻlimda.

Variantlar soni:
$$4\cdot3=12 .$$''',
ru=r'''Итоговый счёт $3{:}2$. Пусть счёт в первом тайме равен $(a;b)$.

Количество забитых мячей только **растёт**, поэтому счёт первого тайма не может превзойти итоговый:
$$0\le a\le3,\qquad 0\le b\le2 .$$

Кроме того, любая такая пара $(a;b)$ достижима: сначала забиваются $a$ и $b$ мячей в любом порядке, остальные — во втором тайме.

Количество вариантов:
$$4\cdot3=12 .$$'''),

dict(n=10, pts='0,9', ans='A) $7$',
uz=r'''Toʻgʻri javoblar sonini $c$ deylik. Asad $15$ ta savolga javob bergani uchun notoʻgʻri javoblar soni $15-c$; qolgan $5$ ta savol boʻsh qolgan va ball bermaydi.

**Toʻplangan ball:**
$$B=3c-(15-c)=4c-15 .$$

**Shart:** $B<17$:
$$4c-15<17 \ \Longrightarrow\ 4c<32 \ \Longrightarrow\ c<8 .$$
$c$ butun, demak $c\le7$.

**Erishilishi.** $c=7$ da $B=4\cdot7-15=13<17$ ✓ ($c=8$ da $B=17$ — «$17$ dan past» shartini buzadi.)

**Javob: eng koʻpi bilan $7$ ta.**''',
ru=r'''Пусть $c$ — число правильных ответов. Асад ответил на $15$ вопросов, значит, неправильных $15-c$; остальные $5$ вопросов остались пустыми и баллов не дают.

**Набранный балл:**
$$B=3c-(15-c)=4c-15 .$$

**Условие** $B<17$:
$$4c-15<17 \ \Longrightarrow\ 4c<32 \ \Longrightarrow\ c<8 .$$
Так как $c$ целое, $c\le7$.

**Достижимость.** При $c=7$ имеем $B=4\cdot7-15=13<17$ ✓ (при $c=8$ получилось бы $B=17$, что нарушает условие «ниже $17$»).

**Ответ: не более $7$.**'''),

dict(n=11, pts='1,5', ans='A) $6$',
uz=r'''Shartni ikki marta qoʻllaymiz:
$$f(x)=1-f(x-1),\qquad f(x-1)=1-f(x-2).$$
Ikkinchisini birinchisiga qoʻyamiz:
$$f(x)=1-\left(1-f(x-2)\right)=f(x-2).$$

Demak funksiya **davri $2$** ga teng: argument $2$ ga oʻzgarganda qiymat oʻzgarmaydi.

$10-4=6$ — juft son, shuning uchun
$$f(10)=f(8)=f(6)=f(4)=6 .$$

**Tekshirish.** $f(5)=1-f(4)=1-6=-5$, $f(6)=1-f(5)=1-(-5)=6$ ✓ — qiymatlar $6,-5,6,-5,\dots$ tarzida navbatlashadi.''',
ru=r'''Применим условие дважды:
$$f(x)=1-f(x-1),\qquad f(x-1)=1-f(x-2).$$
Подставим второе в первое:
$$f(x)=1-\left(1-f(x-2)\right)=f(x-2).$$

Значит, функция **периодична с периодом $2$**: при изменении аргумента на $2$ значение не меняется.

Разность $10-4=6$ чётна, поэтому
$$f(10)=f(8)=f(6)=f(4)=6 .$$

**Проверка.** $f(5)=1-f(4)=1-6=-5$, $f(6)=1-f(5)=1-(-5)=6$ ✓ — значения чередуются: $6,-5,6,-5,\dots$'''),

dict(n=12, pts='1,5', ans='C) $2$',
uz=r'''Tenglamani qayta yozamiz:
$$\left(1-\sin x\right)+\sqrt{3y-x}=0 .$$

Ikkala qoʻshiluvchining ishorasini baholaymiz:
- $\sin x\le1$ har doim, demak $1-\sin x\ge0$;
- ildiz aniqlangan boʻlsa, $\sqrt{3y-x}\ge0$.

**Manfiy boʻlmagan ikki sonning yigʻindisi nolga teng boʻlsa, ikkalasi ham nolga teng:**
$$1-\sin x=0 \quad\text{va}\quad \sqrt{3y-x}=0 .$$

**Birinchisidan:** $\sin x=1$. $0\le x\le\pi$ oraligʻida bu faqat
$$x=\frac{\pi}{2}.$$

**Ikkinchisidan:** $3y=x=\dfrac{\pi}{2}$, demak $y=\dfrac{\pi}{6}$.

**Izlanayotgan ifoda:**
$$\frac{6(x-y)}{\pi}=\frac{6\left(\frac{\pi}{2}-\frac{\pi}{6}\right)}{\pi}=\frac{6\cdot\frac{\pi}{3}}{\pi}=\frac{2\pi}{\pi}=2 .$$''',
ru=r'''Перепишем уравнение:
$$\left(1-\sin x\right)+\sqrt{3y-x}=0 .$$

Оценим знаки слагаемых:
- всегда $\sin x\le1$, значит, $1-\sin x\ge0$;
- если корень определён, то $\sqrt{3y-x}\ge0$.

**Если сумма двух неотрицательных чисел равна нулю, то оба равны нулю:**
$$1-\sin x=0 \quad\text{и}\quad \sqrt{3y-x}=0 .$$

**Из первого:** $\sin x=1$. На отрезке $0\le x\le\pi$ это только
$$x=\frac{\pi}{2}.$$

**Из второго:** $3y=x=\dfrac{\pi}{2}$, значит, $y=\dfrac{\pi}{6}$.

**Искомое выражение:**
$$\frac{6(x-y)}{\pi}=\frac{6\left(\frac{\pi}{2}-\frac{\pi}{6}\right)}{\pi}=\frac{6\cdot\frac{\pi}{3}}{\pi}=\frac{2\pi}{\pi}=2 .$$'''),

dict(n=13, pts='1,5', ans='B) $5$',
uz=r'''**Birinchi tengsizlikni soddalashtiramiz.** $x>0$ boʻlgani uchun
$$\frac{\sqrt x}{x}=\frac{\sqrt x}{\left(\sqrt x\right)^2}=\frac{1}{\sqrt x}.$$
Demak
$$\frac18<\frac{1}{\sqrt x}\le\frac13 .$$
Teskari qiymatga oʻtamiz (musbat sonlar uchun tengsizlik ishorasi almashadi):
$$3\le\sqrt x<8 \ \Longrightarrow\ 9\le x<64 .$$

**Ikkinchi tengsizlik.** Xuddi shunday $\dfrac{\sqrt y}{y}=\dfrac{1}{\sqrt y}$, va
$$\frac25<1-\frac{1}{\sqrt y}\le\frac12 .$$
$-1$ ga koʻpaytirib $1$ qoʻshamiz:
$$\frac12\le\frac{1}{\sqrt y}<\frac35 \ \Longrightarrow\ \frac53<\sqrt y\le2 \ \Longrightarrow\ \frac{25}{9}<y\le4 .$$

**Minimallashtirish.** $x-y$ eng kichik boʻlishi uchun $x$ eng kichik, $y$ eng katta boʻlishi kerak:
$$x_{\min}=9\ (\text{erishiladi}),\qquad y_{\max}=4\ (\text{erishiladi}).$$
$$\left(x-y\right)_{\min}=9-4=5 .$$

**Tekshirish.** $x=9$: $\frac{1}{\sqrt9}=\frac13$ ✓ ($\frac18<\frac13\le\frac13$). $y=4$: $1-\frac12=\frac12$ ✓ ($\frac25<\frac12\le\frac12$).''',
ru=r'''**Упростим первое неравенство.** Так как $x>0$,
$$\frac{\sqrt x}{x}=\frac{\sqrt x}{\left(\sqrt x\right)^2}=\frac{1}{\sqrt x}.$$
Значит,
$$\frac18<\frac{1}{\sqrt x}\le\frac13 .$$
Переходим к обратным величинам (для положительных чисел знак неравенства меняется):
$$3\le\sqrt x<8 \ \Longrightarrow\ 9\le x<64 .$$

**Второе неравенство.** Аналогично $\dfrac{\sqrt y}{y}=\dfrac{1}{\sqrt y}$, и
$$\frac25<1-\frac{1}{\sqrt y}\le\frac12 .$$
Умножим на $-1$ и прибавим $1$:
$$\frac12\le\frac{1}{\sqrt y}<\frac35 \ \Longrightarrow\ \frac53<\sqrt y\le2 \ \Longrightarrow\ \frac{25}{9}<y\le4 .$$

**Минимизация.** Чтобы $x-y$ было наименьшим, берём наименьшее $x$ и наибольшее $y$:
$$x_{\min}=9\ (\text{достигается}),\qquad y_{\max}=4\ (\text{достигается}).$$
$$\left(x-y\right)_{\min}=9-4=5 .$$

**Проверка.** При $x=9$: $\frac{1}{\sqrt9}=\frac13$ ✓ ($\frac18<\frac13\le\frac13$). При $y=4$: $1-\frac12=\frac12$ ✓ ($\frac25<\frac12\le\frac12$).'''),

dict(n=14, pts='1,5', ans='D) $52\,\%$',
uz=r'''$AB:BC=3:2$, demak $AB=3k$, $BC=2k$ va
$$AC=AB+BC=5k .$$

**Aylanalar yuzalari** (radius = diametrning yarmi):
$$S_{AC}=\pi\left(\frac{5k}{2}\right)^2=\frac{25\pi k^2}{4},$$
$$S_{AB}=\pi\left(\frac{3k}{2}\right)^2=\frac{9\pi k^2}{4},\qquad
S_{BC}=\pi\left(\frac{2k}{2}\right)^2=\pi k^2=\frac{4\pi k^2}{4}.$$

Rasmda ikkita kichik aylana **boʻyalmagan**, qolgan qismi boʻyalgan. Demak boʻyalmagan yuza:
$$S_{AB}+S_{BC}=\frac{9\pi k^2}{4}+\frac{4\pi k^2}{4}=\frac{13\pi k^2}{4}.$$

**Foiz:**
$$\frac{S_{AB}+S_{BC}}{S_{AC}}=\frac{13\pi k^2/4}{25\pi k^2/4}=\frac{13}{25}=0{,}52=52\,\% .$$

**Eslatma.** Ikki kichik aylana yuzalari yigʻindisi kattasidan kichik ($13<25$) — bu ularning $AC$ ichiga sigʻishini tasdiqlaydi.''',
ru=r'''Так как $AB:BC=3:2$, положим $AB=3k$, $BC=2k$, тогда
$$AC=AB+BC=5k .$$

**Площади кругов** (радиус — половина диаметра):
$$S_{AC}=\pi\left(\frac{5k}{2}\right)^2=\frac{25\pi k^2}{4},$$
$$S_{AB}=\pi\left(\frac{3k}{2}\right)^2=\frac{9\pi k^2}{4},\qquad
S_{BC}=\pi\left(\frac{2k}{2}\right)^2=\pi k^2=\frac{4\pi k^2}{4}.$$

На рисунке два маленьких круга **не закрашены**, остальная часть закрашена. Значит, незакрашенная площадь равна
$$S_{AB}+S_{BC}=\frac{9\pi k^2}{4}+\frac{4\pi k^2}{4}=\frac{13\pi k^2}{4}.$$

**Проценты:**
$$\frac{S_{AB}+S_{BC}}{S_{AC}}=\frac{13\pi k^2/4}{25\pi k^2/4}=\frac{13}{25}=0{,}52=52\,\% .$$

**Замечание.** Сумма площадей двух малых кругов меньше площади большого ($13<25$) — это подтверждает, что они помещаются внутри.'''),

dict(n=15, pts='1,5', ans='A) $c<b<a$',
uz=r'''Kasrni tub asoslarga yoyamiz:
$$\frac{6^{a}\cdot15^{b}}{9^{b}\cdot10^{c}}
=\frac{\left(2\cdot3\right)^{a}\left(3\cdot5\right)^{b}}{\left(3^2\right)^{b}\left(2\cdot5\right)^{c}}
=\frac{2^{a}3^{a}\cdot3^{b}5^{b}}{3^{2b}\cdot2^{c}5^{c}}
=2^{\,a-c}\cdot3^{\,a+b-2b}\cdot5^{\,b-c}
=2^{\,a-c}\cdot3^{\,a-b}\cdot5^{\,b-c}.$$

Bu son **natural** boʻlishi uchun barcha darajalar manfiy boʻlmasligi kerak:
$$a-c\ge0,\qquad a-b\ge0,\qquad b-c\ge0 .$$
Yaʼni $a\ge b\ge c$.

$a,b,c$ **turli** natural sonlar boʻlgani uchun tengliklar mumkin emas:
$$a>b>c \quad\Longleftrightarrow\quad c<b<a .$$

**Misol:** $a=3,\ b=2,\ c=1$: $\dfrac{6^3\cdot15^2}{9^2\cdot10}=\dfrac{216\cdot225}{81\cdot10}=\dfrac{48600}{810}=60$ — natural ✓''',
ru=r'''Разложим дробь по простым основаниям:
$$\frac{6^{a}\cdot15^{b}}{9^{b}\cdot10^{c}}
=\frac{\left(2\cdot3\right)^{a}\left(3\cdot5\right)^{b}}{\left(3^2\right)^{b}\left(2\cdot5\right)^{c}}
=\frac{2^{a}3^{a}\cdot3^{b}5^{b}}{3^{2b}\cdot2^{c}5^{c}}
=2^{\,a-c}\cdot3^{\,a+b-2b}\cdot5^{\,b-c}
=2^{\,a-c}\cdot3^{\,a-b}\cdot5^{\,b-c}.$$

Чтобы это число было **натуральным**, все показатели должны быть неотрицательны:
$$a-c\ge0,\qquad a-b\ge0,\qquad b-c\ge0 ,$$
то есть $a\ge b\ge c$.

Так как $a,b,c$ — **различные** натуральные числа, равенства невозможны:
$$a>b>c \quad\Longleftrightarrow\quad c<b<a .$$

**Пример:** $a=3,\ b=2,\ c=1$: $\dfrac{6^3\cdot15^2}{9^2\cdot10}=\dfrac{216\cdot225}{81\cdot10}=\dfrac{48600}{810}=60$ — натуральное ✓'''),

dict(n=16, pts='1,5', ans='C) $9$',
uz=r'''Ikki xonali son $\overline{ab}$ da birlar xonasidagi raqamni olib tashlasak, $a$ qoladi. Demak shart:
$$\overline{ab}\ \text{— tub},\qquad a\ \text{— tub}.$$

Bir xonali tub sonlar: $a\in\{2;3;5;7\}$. Har biri uchun ikki xonali tub sonlarni yozamiz:

- $a=2$: $23,\ 29$ — $2$ ta ($21=3\cdot7$, $22,24,26,28$ juft, $25=5^2$, $27=3^3$)
- $a=3$: $31,\ 37$ — $2$ ta
- $a=5$: $53,\ 59$ — $2$ ta
- $a=7$: $71,\ 73,\ 79$ — $3$ ta

Jami:
$$2+2+2+3=9 .$$
**Roʻyxat:** $23,\ 29,\ 31,\ 37,\ 53,\ 59,\ 71,\ 73,\ 79$.''',
ru=r'''Если у двузначного числа $\overline{ab}$ убрать цифру единиц, останется $a$. Значит, условие:
$$\overline{ab}\ \text{— простое},\qquad a\ \text{— простое}.$$

Однозначные простые: $a\in\{2;3;5;7\}$. Для каждого выпишем двузначные простые:

- $a=2$: $23,\ 29$ — $2$ штуки ($21=3\cdot7$, $22,24,26,28$ чётные, $25=5^2$, $27=3^3$)
- $a=3$: $31,\ 37$ — $2$
- $a=5$: $53,\ 59$ — $2$
- $a=7$: $71,\ 73,\ 79$ — $3$

Всего:
$$2+2+2+3=9 .$$
**Список:** $23,\ 29,\ 31,\ 37,\ 53,\ 59,\ 71,\ 73,\ 79$.'''),

dict(n=17, pts='1,5', ans='C) $6$',
uz=r'''Ikkala tenglama ham butun ildizlarga ega boʻlsa, ularning diskriminantlari toʻla kvadrat:
$$D_1=a^2-4b=m^2,\qquad D_2=a^2-4(b+1)=n^2 ,$$
bunda $m,n\ge0$ butun sonlar.

**Ayirma.**
$$m^2-n^2=4 \ \Longrightarrow\ (m-n)(m+n)=4 .$$
$m$ va $n$ bir xil juftlikda ($m^2-n^2$ juft), shuning uchun $m-n$ va $m+n$ ikkalasi ham juft:
$$m-n=2,\quad m+n=2 \ \Longrightarrow\ m=2,\ n=0 .$$

**Shart.** $D_2=0$, yaʼni $a^2=4b+4$, va $D_1=4$ ✓ Demak
$$a^2=4(b+1) \ \Longrightarrow\ a=\pm2\sqrt{b+1}.$$
$a$ butun boʻlishi uchun $b+1$ toʻla kvadrat boʻlishi kerak. $0\le b\le10$ da
$$b+1\in\{1,4,9\} \ \Longrightarrow\ b\in\{0;3;8\}.$$

**Juftliklar.**
$$b=0:\ a=\pm2;\qquad b=3:\ a=\pm4;\qquad b=8:\ a=\pm6 .$$
Jami $6$ ta juftlik.

**Tekshirish ($a=4,\ b=3$):** $x^2+4x+3=(x+1)(x+3)$ ✓ butun ildizlar; $x^2+4x+4=(x+2)^2$ ✓''',
ru=r'''Если оба уравнения имеют целые корни, их дискриминанты — полные квадраты:
$$D_1=a^2-4b=m^2,\qquad D_2=a^2-4(b+1)=n^2 ,$$
где $m,n\ge0$ — целые.

**Разность.**
$$m^2-n^2=4 \ \Longrightarrow\ (m-n)(m+n)=4 .$$
Числа $m$ и $n$ одной чётности (так как $m^2-n^2$ чётно), поэтому $m-n$ и $m+n$ оба чётны:
$$m-n=2,\quad m+n=2 \ \Longrightarrow\ m=2,\ n=0 .$$

**Условие.** $D_2=0$, то есть $a^2=4b+4$, и $D_1=4$ ✓ Значит,
$$a^2=4(b+1) \ \Longrightarrow\ a=\pm2\sqrt{b+1}.$$
Чтобы $a$ было целым, $b+1$ должно быть полным квадратом. При $0\le b\le10$
$$b+1\in\{1,4,9\} \ \Longrightarrow\ b\in\{0;3;8\}.$$

**Пары.**
$$b=0:\ a=\pm2;\qquad b=3:\ a=\pm4;\qquad b=8:\ a=\pm6 .$$
Всего $6$ пар.

**Проверка ($a=4,\ b=3$):** $x^2+4x+3=(x+1)(x+3)$ ✓ целые корни; $x^2+4x+4=(x+2)^2$ ✓'''),

dict(n=18, pts='1,5', ans='D) $17$',
uz=r'''Sumkada $10$ ta koʻk, $6$ ta yashil va $5$ ta qizil shar — jami $21$ ta.

**«Kafolatlash» degani — eng yomon holatni koʻrib chiqish.** Har bir rangdan kamida bittasi stolda boʻlishi kafolatlanishi kerak, demak eng yomon holatda uchinchi rang imkon qadar kech chiqadi.

Eng yomon ssenariy: avval **eng koʻp sonli ikki rangning hammasi** olinadi:
$$10\ (\text{koʻk})+6\ (\text{yashil})=16\ \text{shar}.$$
Bu $16$ ta shar orasida qizil yoʻq, demak $16$ ta yetarli emas.

Lekin $17$-shar albatta qizil boʻladi (koʻk va yashillar tugagan), shuning uchun $17$ ta shar barcha uch rangni kafolatlaydi.

**Javob: $17$.**

(Eʼtibor bering, biz $10+6$ ni tanladik — bu eng katta ikkita son; $10+5=15$ yoki $6+5=11$ kamroq, demak eng yomoni aynan $16$.)''',
ru=r'''В сумке $10$ синих, $6$ зелёных и $5$ красных шаров — всего $21$.

**«Гарантировать» — значит рассмотреть худший случай.** Нужно гарантировать хотя бы один шар каждого цвета, поэтому в худшем случае третий цвет появляется как можно позже.

Худший сценарий: сначала вынуты **все шары двух самых многочисленных цветов**:
$$10\ (\text{синих})+6\ (\text{зелёных})=16\ \text{шаров}.$$
Среди этих $16$ нет ни одного красного, значит, $16$ недостаточно.

Но $17$-й шар обязательно окажется красным (синие и зелёные закончились), поэтому $17$ шаров гарантируют все три цвета.

**Ответ: $17$.**

(Заметим, что мы взяли $10+6$ — два наибольших числа; $10+5=15$ и $6+5=11$ меньше, так что худший случай именно $16$.)'''),

dict(n=19, pts='1,5', ans='C) $3{:}1$',
uz=r'''Koordinatalar kiritamiz: $A(0;0)$, $B(w;0)$, $C(w;h)$, $D(0;h)$.

**Bissektrisa.** $\angle BAD=90^\circ$ (toʻgʻri toʻrtburchak), uning bissektrisasi $45^\circ$ burchak ostida, yaʼni $y=x$ toʻgʻri chiziq. U $BC$ tomonni ($x=w$) $P(w;w)$ nuqtada kesadi (demak $w\le h$).

**Uzunliklar.**
$$AP=\sqrt{w^2+w^2}=w\sqrt2 ,$$
$$PD=\sqrt{w^2+(h-w)^2},\qquad PC=h-w .$$

**Shartni qoʻllaymiz:** $AP:PD=4:3$, yaʼni $3\,AP=4\,PD$:
$$3w\sqrt2=4\sqrt{w^2+(h-w)^2}.$$
Kvadratga koʻtaramiz:
$$18w^2=16\left(w^2+(h-w)^2\right) \ \Longrightarrow\ 2w^2=16(h-w)^2 \ \Longrightarrow\ (h-w)^2=\frac{w^2}{8}.$$
$h>w$ boʻlgani uchun
$$h-w=\frac{w}{2\sqrt2}.$$

**Izlanayotgan nisbat.**
$$PD=\sqrt{w^2+\frac{w^2}{8}}=w\sqrt{\frac98}=\frac{3w}{2\sqrt2},\qquad PC=h-w=\frac{w}{2\sqrt2}.$$
$$\frac{PD}{PC}=\frac{3w/(2\sqrt2)}{w/(2\sqrt2)}=3 .$$

**Javob: $PD:PC=3:1$.**''',
ru=r'''Введём координаты: $A(0;0)$, $B(w;0)$, $C(w;h)$, $D(0;h)$.

**Биссектриса.** $\angle BAD=90^\circ$ (прямоугольник), её биссектриса идёт под углом $45^\circ$, то есть это прямая $y=x$. Она пересекает сторону $BC$ ($x=w$) в точке $P(w;w)$ (значит, $w\le h$).

**Длины.**
$$AP=\sqrt{w^2+w^2}=w\sqrt2 ,$$
$$PD=\sqrt{w^2+(h-w)^2},\qquad PC=h-w .$$

**Применяем условие** $AP:PD=4:3$, то есть $3\,AP=4\,PD$:
$$3w\sqrt2=4\sqrt{w^2+(h-w)^2}.$$
Возведём в квадрат:
$$18w^2=16\left(w^2+(h-w)^2\right) \ \Longrightarrow\ 2w^2=16(h-w)^2 \ \Longrightarrow\ (h-w)^2=\frac{w^2}{8}.$$
Так как $h>w$,
$$h-w=\frac{w}{2\sqrt2}.$$

**Искомое отношение.**
$$PD=\sqrt{w^2+\frac{w^2}{8}}=w\sqrt{\frac98}=\frac{3w}{2\sqrt2},\qquad PC=h-w=\frac{w}{2\sqrt2}.$$
$$\frac{PD}{PC}=\frac{3w/(2\sqrt2)}{w/(2\sqrt2)}=3 .$$

**Ответ: $PD:PC=3:1$.**'''),

dict(n=20, pts='1,5', ans='B) $9$',
uz=r'''Arifmetik progressiyani $a,\ a+d,\ a+2d,\ a+3d$ deb yozamiz. Shartga koʻra
$$a,\quad a+d,\quad a+2d+3,\quad a+3d+8$$
geometrik progressiya.

**Birinchi shart** (dastlabki uchta had):
$$(a+d)^2=a\left(a+2d+3\right) \ \Longrightarrow\ a^2+2ad+d^2=a^2+2ad+3a \ \Longrightarrow\ d^2=3a .$$
Demak $a=\dfrac{d^2}{3}$.

**Ikkinchi shart** (oxirgi uchta had):
$$\left(a+2d+3\right)^2=\left(a+d\right)\left(a+3d+8\right).$$
$a=\frac{d^2}{3}$ ni qoʻyamiz:
$$a+d=\frac{d^2+3d}{3}=\frac{d(d+3)}{3},\qquad a+2d+3=\frac{d^2+6d+9}{3}=\frac{(d+3)^2}{3},$$
$$a+3d+8=\frac{d^2+9d+24}{3}.$$
Tenglama:
$$\frac{(d+3)^4}{9}=\frac{d(d+3)\left(d^2+9d+24\right)}{9}.$$
$d=-3$ boʻlsa $a=3$ va progressiya $3,0,-3,-6\to3,0,0,2$ — geometrik emas. Demak $d\ne-3$, $(d+3)$ ga qisqartiramiz:
$$(d+3)^3=d\left(d^2+9d+24\right),$$
$$d^3+9d^2+27d+27=d^3+9d^2+24d \ \Longrightarrow\ 3d=-27 \ \Longrightarrow\ d=-9 .$$

Unda $a=\dfrac{81}{3}=27$, va uchinchi had:
$$a+2d=27-18=9 .$$

**Tekshirish.** AP: $27,\ 18,\ 9,\ 0$. Oʻzgartirilgan: $27,\ 18,\ 12,\ 8$ — maxraji $\frac23$ boʻlgan geometrik progressiya ✓''',
ru=r'''Запишем арифметическую прогрессию как $a,\ a+d,\ a+2d,\ a+3d$. По условию
$$a,\quad a+d,\quad a+2d+3,\quad a+3d+8$$
— геометрическая прогрессия.

**Первое условие** (первые три члена):
$$(a+d)^2=a\left(a+2d+3\right) \ \Longrightarrow\ a^2+2ad+d^2=a^2+2ad+3a \ \Longrightarrow\ d^2=3a .$$
Значит, $a=\dfrac{d^2}{3}$.

**Второе условие** (последние три члена):
$$\left(a+2d+3\right)^2=\left(a+d\right)\left(a+3d+8\right).$$
Подставим $a=\frac{d^2}{3}$:
$$a+d=\frac{d^2+3d}{3}=\frac{d(d+3)}{3},\qquad a+2d+3=\frac{d^2+6d+9}{3}=\frac{(d+3)^2}{3},$$
$$a+3d+8=\frac{d^2+9d+24}{3}.$$
Уравнение принимает вид
$$\frac{(d+3)^4}{9}=\frac{d(d+3)\left(d^2+9d+24\right)}{9}.$$
При $d=-3$ получилось бы $a=3$ и последовательность $3,0,0,2$ — не геометрическая. Значит, $d\ne-3$, и можно сократить на $(d+3)$:
$$(d+3)^3=d\left(d^2+9d+24\right),$$
$$d^3+9d^2+27d+27=d^3+9d^2+24d \ \Longrightarrow\ 3d=-27 \ \Longrightarrow\ d=-9 .$$

Тогда $a=\dfrac{81}{3}=27$, и третий член равен
$$a+2d=27-18=9 .$$

**Проверка.** АП: $27,\ 18,\ 9,\ 0$. После изменения: $27,\ 18,\ 12,\ 8$ — геометрическая прогрессия со знаменателем $\frac23$ ✓'''),
]

P += [

dict(n=21, pts='2,6', ans='$5$',
uz=r'''Faqat oxirgi raqamlar bilan ishlaymiz, yaʼni $10$ moduli boʻyicha.

**1) $k^{2025}$ ning oxirgi raqami.** $k^n$ ning oxirgi raqami $n$ ga qarab $4$ davr bilan takrorlanadi ($k$ ning $10$ bilan oʻzaro tubligiga bogʻliq emas, chunki $\lambda(10)=4$ va $2025\equiv1\ (\mathrm{mod}\ 4)$, hamda $2025>1$). Shuning uchun
$$k^{2025}\equiv k\ (\mathrm{mod}\ 10)$$
har bir $k$ uchun.

**Tekshirish.** $2^{2025}$: $2025=4\cdot506+1$, davr $2,4,8,6$ — birinchisi $2$ ✓ $\quad 5^{2025}$ oxiri $5$ ✓ $\quad 6^{2025}$ oxiri $6$ ✓

**2) Yigʻindi.** Demak
$$1^{2025}+2^{2025}+\dots+2025^{2025}\equiv 1+2+\dots+2025\ (\mathrm{mod}\ 10).$$

**3) Hisoblaymiz.**
$$1+2+\dots+2025=\frac{2025\cdot2026}{2}=2025\cdot1013=2051325 .$$

Oxirgi raqam — $5$.''',
ru=r'''Работаем только с последними цифрами, то есть по модулю $10$.

**1) Последняя цифра $k^{2025}$.** Последняя цифра $k^n$ повторяется с периодом $4$ по $n$ (так как $\lambda(10)=4$, а $2025\equiv1\ (\mathrm{mod}\ 4)$ и $2025>1$). Поэтому
$$k^{2025}\equiv k\ (\mathrm{mod}\ 10)$$
для любого $k$.

**Проверка.** $2^{2025}$: $2025=4\cdot506+1$, цикл $2,4,8,6$ — первый элемент $2$ ✓ $\quad 5^{2025}$ оканчивается на $5$ ✓ $\quad 6^{2025}$ — на $6$ ✓

**2) Сумма.** Значит,
$$1^{2025}+2^{2025}+\dots+2025^{2025}\equiv 1+2+\dots+2025\ (\mathrm{mod}\ 10).$$

**3) Вычисляем.**
$$1+2+\dots+2025=\frac{2025\cdot2026}{2}=2025\cdot1013=2051325 .$$

Последняя цифра — $5$.'''),

dict(n=22, pts='2,6', ans='$-36$',
uz=r'''Koʻpaytuvchilarni **ataylab qayta guruhlaymiz** — juft-juft qilib, ularning koʻpaytmasi $x^2$ ga bogʻliq boʻlsin:
$$\left(4-x\right)\left(x+4\right)=16-x^2,\qquad \left(2-x\right)\left(x+2\right)=4-x^2 .$$
Demak ifoda
$$\left(16-x^2\right)\left(4-x^2\right).$$

$t=x^2\ge0$ almashtirishini kiritamiz:
$$f(t)=\left(16-t\right)\left(4-t\right)=t^2-20t+64 .$$

Bu parabola, shoxlari yuqoriga qaragan, uchi
$$t_0=\frac{20}{2}=10 .$$
$t_0=10\ge0$ — ruxsat etilgan sohada yotadi ✓

**Minimal qiymat:**
$$f(10)=100-200+64=-36 .$$

Bu $x^2=10$, yaʼni $x=\pm\sqrt{10}$ da erishiladi.

**Tekshirish.** $x=\sqrt{10}$: $\left(16-10\right)\left(4-10\right)=6\cdot(-6)=-36$ ✓''',
ru=r'''**Специально перегруппируем** множители попарно так, чтобы произведения зависели от $x^2$:
$$\left(4-x\right)\left(x+4\right)=16-x^2,\qquad \left(2-x\right)\left(x+2\right)=4-x^2 .$$
Значит, выражение равно
$$\left(16-x^2\right)\left(4-x^2\right).$$

Сделаем замену $t=x^2\ge0$:
$$f(t)=\left(16-t\right)\left(4-t\right)=t^2-20t+64 .$$

Это парабола с ветвями вверх, её вершина
$$t_0=\frac{20}{2}=10 .$$
Значение $t_0=10\ge0$ лежит в допустимой области ✓

**Минимальное значение:**
$$f(10)=100-200+64=-36 .$$

Оно достигается при $x^2=10$, то есть $x=\pm\sqrt{10}$.

**Проверка.** При $x=\sqrt{10}$: $\left(16-10\right)\left(4-10\right)=6\cdot(-6)=-36$ ✓'''),

dict(n=23, pts='2,6', ans=r'$6^\circ$',
uz=r'''**1) $\triangle CDE$ ni tahlil qilamiz.**
$$\angle DEC=180^\circ-\angle DCE-\angle CDE=180^\circ-51^\circ-78^\circ=51^\circ .$$
Demak $\angle DCE=\angle DEC=51^\circ$, yaʼni uchburchak **teng yonli** va $D$ uchidan chiquvchi tomonlar teng:
$$DE=DC .$$

**2) $DE$ ni kvadrat tomoni bilan solishtiramiz.** $ABCD$ kvadratda $DC=AD$, shuning uchun
$$DE=DC=AD .$$
Yaʼni $\triangle ADE$ ham teng yonli, asosi $AE$.

**3) $\angle ADE$ ni topamiz.** Kvadratda $\angle ADC=90^\circ$. $E$ nuqta kvadratdan **tashqarida** olingan, yaʼni $DC$ toʻgʻri chizigʻining $A$ ga nisbatan qarama-qarshi tomonida. Shuning uchun $\angle ADE$ burchagi $\angle ADC$ va $\angle CDE$ larning yigʻindisi:
$$\angle ADE=\angle ADC+\angle CDE=90^\circ+78^\circ=168^\circ .$$

**4) Asosidagi burchak.** $\triangle ADE$ teng yonli ($AD=DE$), shuning uchun
$$\angle DAE=\angle DEA=\frac{180^\circ-168^\circ}{2}=\frac{12^\circ}{2}=6^\circ .$$

**Sonli tekshirish.** $D(0;0),\ C(1;0),\ A(0;1)$, $E=\left(\cos(-78^\circ);\sin(-78^\circ)\right)$ da $\angle DCE=51^\circ$, $\angle CDE=78^\circ$ va $\angle DAE\approx6^\circ$ ✓''',
ru=r'''**1) Исследуем $\triangle CDE$.**
$$\angle DEC=180^\circ-\angle DCE-\angle CDE=180^\circ-51^\circ-78^\circ=51^\circ .$$
Значит, $\angle DCE=\angle DEC=51^\circ$, то есть треугольник **равнобедренный**, и стороны, выходящие из $D$, равны:
$$DE=DC .$$

**2) Сравним $DE$ со стороной квадрата.** В квадрате $ABCD$ имеем $DC=AD$, поэтому
$$DE=DC=AD .$$
Значит, $\triangle ADE$ тоже равнобедренный с основанием $AE$.

**3) Находим $\angle ADE$.** В квадрате $\angle ADC=90^\circ$. Точка $E$ взята **вне** квадрата, то есть по другую сторону от прямой $DC$, чем $A$. Поэтому угол $\angle ADE$ равен сумме:
$$\angle ADE=\angle ADC+\angle CDE=90^\circ+78^\circ=168^\circ .$$

**4) Угол при основании.** Треугольник $ADE$ равнобедренный ($AD=DE$), поэтому
$$\angle DAE=\angle DEA=\frac{180^\circ-168^\circ}{2}=\frac{12^\circ}{2}=6^\circ .$$

**Численная проверка.** При $D(0;0),\ C(1;0),\ A(0;1)$ и $E=\left(\cos(-78^\circ);\sin(-78^\circ)\right)$ получаем $\angle DCE=51^\circ$, $\angle CDE=78^\circ$ и $\angle DAE\approx6^\circ$ ✓'''),

dict(n=24, pts='2,6', ans='$5$',
uz=r'''Aynan **ikkita** sport turini tanlaganlar sonini $x$, **uchchalasini** tanlaganlar sonini $y$ deylik. Har bir oʻquvchi kamida ikkitasini tanlaydi, shuning uchun boshqa variant yoʻq:
$$x+y=20 .$$

**Tanlovlarni sanaymiz.** Har bir sport turi boʻyicha roʻyxatdagi oʻquvchilar sonini qoʻshamiz:
$$14+15+16=45 .$$
Boshqa tomondan, aynan ikkitasini tanlagan har bir oʻquvchi bu yigʻindiga $2$ marta, uchchalasini tanlagan esa $3$ marta hisoblanadi:
$$2x+3y=45 .$$

**Sistemani yechamiz.** Birinchisidan $x=20-y$:
$$2(20-y)+3y=45 \ \Longrightarrow\ 40+y=45 \ \Longrightarrow\ y=5 .$$

Demak uchchala sport turini $5$ nafar oʻquvchi tanlagan (va $15$ nafari aynan ikkitasini).

**Tekshirish.** $2\cdot15+3\cdot5=30+15=45$ ✓''',
ru=r'''Пусть $x$ — число учеников, выбравших ровно **два** вида спорта, а $y$ — выбравших **все три**. Каждый ученик выбирает не менее двух, других вариантов нет:
$$x+y=20 .$$

**Считаем выборы.** Сложим количества по каждому виду спорта:
$$14+15+16=45 .$$
С другой стороны, каждый ученик, выбравший ровно два вида, учтён в этой сумме $2$ раза, а выбравший три — $3$ раза:
$$2x+3y=45 .$$

**Решаем систему.** Из первого $x=20-y$:
$$2(20-y)+3y=45 \ \Longrightarrow\ 40+y=45 \ \Longrightarrow\ y=5 .$$

Значит, все три вида спорта выбрали $5$ учеников (а ровно два — $15$).

**Проверка.** $2\cdot15+3\cdot5=30+15=45$ ✓'''),

dict(n=25, pts='2,6', ans=r'$13^\circ$',
uz=r'''**1) $\triangle ACD$ da uchinchi burchak.**
$$\angle DAC=180^\circ-\angle ADC-\angle DCA=180^\circ-63^\circ-41^\circ=76^\circ .$$

**2) $CD$ ni $AC$ orqali ifodalaymiz** (sinuslar teoremasi $\triangle ACD$ da):
$$\frac{CD}{\sin\angle DAC}=\frac{AC}{\sin\angle ADC} \ \Longrightarrow\ CD=AC\cdot\frac{\sin76^\circ}{\sin63^\circ}.$$

**3) $\triangle ABC$ da sinuslar teoremasi.** $AB=CD$ va $\angle ACB=104^\circ$:
$$\frac{AB}{\sin\angle ACB}=\frac{AC}{\sin\angle ABC} \ \Longrightarrow\ \sin\angle ABC=\frac{AC\cdot\sin104^\circ}{AB}.$$
$AB=CD$ ni qoʻyamiz:
$$\sin\angle ABC=\frac{AC\sin104^\circ}{AC\cdot\frac{\sin76^\circ}{\sin63^\circ}}=\frac{\sin104^\circ\cdot\sin63^\circ}{\sin76^\circ}.$$

**4) Soddalashtirish.** $\sin104^\circ=\sin\left(180^\circ-104^\circ\right)=\sin76^\circ$, shuning uchun
$$\sin\angle ABC=\sin63^\circ .$$
Demak $\angle ABC=63^\circ$ yoki $\angle ABC=117^\circ$. Ikkinchisi mumkin emas, chunki $\triangle ABC$ da allaqachon $104^\circ$ bor:
$$104^\circ+117^\circ>180^\circ .$$
Demak $\angle ABC=63^\circ$.

**5) Yakun.**
$$\angle BAC=180^\circ-104^\circ-63^\circ=13^\circ .$$''',
ru=r'''**1) Третий угол в $\triangle ACD$.**
$$\angle DAC=180^\circ-\angle ADC-\angle DCA=180^\circ-63^\circ-41^\circ=76^\circ .$$

**2) Выразим $CD$ через $AC$** (теорема синусов в $\triangle ACD$):
$$\frac{CD}{\sin\angle DAC}=\frac{AC}{\sin\angle ADC} \ \Longrightarrow\ CD=AC\cdot\frac{\sin76^\circ}{\sin63^\circ}.$$

**3) Теорема синусов в $\triangle ABC$.** Здесь $AB=CD$ и $\angle ACB=104^\circ$:
$$\frac{AB}{\sin\angle ACB}=\frac{AC}{\sin\angle ABC} \ \Longrightarrow\ \sin\angle ABC=\frac{AC\cdot\sin104^\circ}{AB}.$$
Подставим $AB=CD$:
$$\sin\angle ABC=\frac{AC\sin104^\circ}{AC\cdot\frac{\sin76^\circ}{\sin63^\circ}}=\frac{\sin104^\circ\cdot\sin63^\circ}{\sin76^\circ}.$$

**4) Упрощение.** Так как $\sin104^\circ=\sin\left(180^\circ-104^\circ\right)=\sin76^\circ$,
$$\sin\angle ABC=\sin63^\circ .$$
Значит, $\angle ABC=63^\circ$ или $\angle ABC=117^\circ$. Второе невозможно, ведь в $\triangle ABC$ уже есть угол $104^\circ$:
$$104^\circ+117^\circ>180^\circ .$$
Итак, $\angle ABC=63^\circ$.

**5) Итог.**
$$\angle BAC=180^\circ-104^\circ-63^\circ=13^\circ .$$'''),

dict(n=26, pts='2,6', ans='$66$',
uz=r'''Har bir koʻpaytuvchini umumiy maxrajga keltiramiz:
$$n-\frac1n=\frac{n^2-1}{n}=\frac{(n-1)(n+1)}{n}.$$

Demak $n=2$ dan $60$ gacha koʻpaytma:
$$\prod_{n=2}^{60}\frac{(n-1)(n+1)}{n}
=\frac{\displaystyle\prod_{n=2}^{60}(n-1)\cdot\prod_{n=2}^{60}(n+1)}{\displaystyle\prod_{n=2}^{60}n}.$$

Har bir koʻpaytmani faktorial orqali yozamiz:
$$\prod_{n=2}^{60}(n-1)=1\cdot2\cdots59=59! ,$$
$$\prod_{n=2}^{60}(n+1)=3\cdot4\cdots61=\frac{61!}{2!}=\frac{61!}{2},$$
$$\prod_{n=2}^{60}n=2\cdot3\cdots60=60! .$$

Birlashtiramiz:
$$\frac{59!\cdot\frac{61!}{2}}{60!}=\frac{59!}{60!}\cdot\frac{61!}{2}=\frac{1}{60}\cdot\frac{61!}{2}=\frac{61!}{120}=\frac{61!}{5!}.$$

Demak $a=61$, $b=5$, va
$$a+b=61+5=66 .$$
**Tekshirish.** $5!=120$ ✓ va koʻpaytma haqiqatan $\frac{61!}{120}$ ga teng.''',
ru=r'''Приведём каждый множитель к общему знаменателю:
$$n-\frac1n=\frac{n^2-1}{n}=\frac{(n-1)(n+1)}{n}.$$

Значит, произведение от $n=2$ до $60$ равно
$$\prod_{n=2}^{60}\frac{(n-1)(n+1)}{n}
=\frac{\displaystyle\prod_{n=2}^{60}(n-1)\cdot\prod_{n=2}^{60}(n+1)}{\displaystyle\prod_{n=2}^{60}n}.$$

Запишем каждое произведение через факториалы:
$$\prod_{n=2}^{60}(n-1)=1\cdot2\cdots59=59! ,$$
$$\prod_{n=2}^{60}(n+1)=3\cdot4\cdots61=\frac{61!}{2!}=\frac{61!}{2},$$
$$\prod_{n=2}^{60}n=2\cdot3\cdots60=60! .$$

Объединяем:
$$\frac{59!\cdot\frac{61!}{2}}{60!}=\frac{59!}{60!}\cdot\frac{61!}{2}=\frac{1}{60}\cdot\frac{61!}{2}=\frac{61!}{120}=\frac{61!}{5!}.$$

Значит, $a=61$, $b=5$, и
$$a+b=61+5=66 .$$
**Проверка.** $5!=120$ ✓, и произведение действительно равно $\frac{61!}{120}$.'''),

dict(n=27, pts='2,6', ans=r'$\sqrt{79}$',
uz=r'''$AC=16$ — diametr, $PC=3$, demak
$$AP=16-3=13 .$$

**1) $\angle ABC=90^\circ$.** $B$ nuqta aylanada, $AC$ esa diametr — Fales teoremasi boʻyicha $\angle ABC$ toʻgʻri burchak.

**2) Koordinatalar kiritamiz.** $A(0;0)$, $C(16;0)$, markaz $(8;0)$, radius $8$. $B(x;y)$ uchun:
$$\text{aylanada:}\quad (x-8)^2+y^2=64,$$
$$AB=12:\quad x^2+y^2=144 .$$
Birinchisini yoyamiz: $x^2-16x+64+y^2=64$, yaʼni $x^2+y^2=16x$. Ikkinchisi bilan taqqoslaymiz:
$$16x=144 \ \Longrightarrow\ x=9,\qquad y^2=144-81=63 .$$

**3) $BP$ ni hisoblaymiz.** $P(13;0)$:
$$BP^2=(13-9)^2+y^2=16+63=79 \ \Longrightarrow\ BP=\sqrt{79}\approx8{,}888 .$$

**Muqobil yoʻl (Styuart teoremasi).** $BC^2=AC^2-AB^2=256-144=112$, va $\triangle ABC$ da $BP$ chevianasi uchun
$$AB^2\cdot PC+BC^2\cdot AP-BP^2\cdot AC=AC\cdot AP\cdot PC ,$$
$$144\cdot3+112\cdot13-16\,BP^2=16\cdot13\cdot3 ,$$
$$432+1456-16\,BP^2=624 \ \Longrightarrow\ 16\,BP^2=1264 \ \Longrightarrow\ BP^2=79 \quad\checkmark$$''',
ru=r'''$AC=16$ — диаметр, $PC=3$, поэтому
$$AP=16-3=13 .$$

**1) $\angle ABC=90^\circ$.** Точка $B$ лежит на окружности, $AC$ — диаметр, значит, по теореме Фалеса угол $\angle ABC$ прямой.

**2) Введём координаты.** $A(0;0)$, $C(16;0)$, центр $(8;0)$, радиус $8$. Для $B(x;y)$:
$$\text{на окружности:}\quad (x-8)^2+y^2=64,$$
$$AB=12:\quad x^2+y^2=144 .$$
Раскроем первое: $x^2-16x+64+y^2=64$, то есть $x^2+y^2=16x$. Сравнивая со вторым:
$$16x=144 \ \Longrightarrow\ x=9,\qquad y^2=144-81=63 .$$

**3) Вычисляем $BP$.** Точка $P(13;0)$:
$$BP^2=(13-9)^2+y^2=16+63=79 \ \Longrightarrow\ BP=\sqrt{79}\approx8{,}888 .$$

**Альтернативный путь (теорема Стюарта).** $BC^2=AC^2-AB^2=256-144=112$, и для чевианы $BP$ в $\triangle ABC$
$$AB^2\cdot PC+BC^2\cdot AP-BP^2\cdot AC=AC\cdot AP\cdot PC ,$$
$$144\cdot3+112\cdot13-16\,BP^2=16\cdot13\cdot3 ,$$
$$432+1456-16\,BP^2=624 \ \Longrightarrow\ 16\,BP^2=1264 \ \Longrightarrow\ BP^2=79 \quad\checkmark$$'''),

dict(n=28, pts='2,6', ans=r'$\frac{21}{101}$',
uz=r'''Dastlabki hadlarni ketma-ket hisoblaymiz:
$$x_1=20,\qquad x_2=101 ,$$
$$x_3=\frac{x_2+1}{x_1}=\frac{102}{20}=\frac{51}{10},$$
$$x_4=\frac{x_3+1}{x_2}=\frac{\frac{51}{10}+1}{101}=\frac{\frac{61}{10}}{101}=\frac{61}{1010},$$
$$x_5=\frac{x_4+1}{x_3}=\frac{\frac{61}{1010}+1}{\frac{51}{10}}=\frac{\frac{1071}{1010}}{\frac{51}{10}}=\frac{1071}{1010}\cdot\frac{10}{51}=\frac{1071}{5151}=\frac{21}{101},$$
$$x_6=\frac{x_5+1}{x_4}=\frac{\frac{21}{101}+1}{\frac{61}{1010}}=\frac{\frac{122}{101}}{\frac{61}{1010}}=\frac{122}{101}\cdot\frac{1010}{61}=\frac{122\cdot10}{61}=20=x_1 .$$
$$x_7=\frac{x_6+1}{x_5}=\frac{21}{\frac{21}{101}}=101=x_2 .$$

$x_6=x_1$ va $x_7=x_2$ boʻlgani uchun rekurrent munosabat butun ketma-ketlikni takrorlaydi: **davr $5$** ga teng.

**Indeksni qisqartiramiz.** $2025=5\cdot405$, yaʼni $2025\equiv0\ (\mathrm{mod}\ 5)$, bu esa $5$-oʻringa mos keladi:
$$x_{2025}=x_5=\frac{21}{101}.$$''',
ru=r'''Вычислим несколько первых членов подряд:
$$x_1=20,\qquad x_2=101 ,$$
$$x_3=\frac{x_2+1}{x_1}=\frac{102}{20}=\frac{51}{10},$$
$$x_4=\frac{x_3+1}{x_2}=\frac{\frac{51}{10}+1}{101}=\frac{\frac{61}{10}}{101}=\frac{61}{1010},$$
$$x_5=\frac{x_4+1}{x_3}=\frac{\frac{61}{1010}+1}{\frac{51}{10}}=\frac{\frac{1071}{1010}}{\frac{51}{10}}=\frac{1071}{1010}\cdot\frac{10}{51}=\frac{1071}{5151}=\frac{21}{101},$$
$$x_6=\frac{x_5+1}{x_4}=\frac{\frac{21}{101}+1}{\frac{61}{1010}}=\frac{\frac{122}{101}}{\frac{61}{1010}}=\frac{122}{101}\cdot\frac{1010}{61}=\frac{122\cdot10}{61}=20=x_1 .$$
$$x_7=\frac{x_6+1}{x_5}=\frac{21}{\frac{21}{101}}=101=x_2 .$$

Так как $x_6=x_1$ и $x_7=x_2$, рекуррентное соотношение повторяет всю последовательность: **период равен $5$**.

**Сокращаем индекс.** $2025=5\cdot405$, то есть $2025\equiv0\ (\mathrm{mod}\ 5)$, что соответствует пятому месту:
$$x_{2025}=x_5=\frac{21}{101}.$$'''),

dict(n=29, pts='2,6', ans='$-2$',
uz=r'''$\left[3x+1\right]=2x-\dfrac12$ tenglamada chap tomon **butun son**, demak oʻng tomon ham butun.

$n=2x-\dfrac12$ deb belgilaymiz ($n$ — butun). Unda
$$x=\frac{n+\frac12}{2}=\frac{2n+1}{4}.$$

**Butun qism shartini yozamiz.** $\left[3x+1\right]=n$ degani
$$n\le 3x+1<n+1 .$$
$x$ ni qoʻyamiz:
$$3x+1=\frac{3(2n+1)}{4}+1=\frac{6n+3+4}{4}=\frac{6n+7}{4}.$$
Demak
$$n\le\frac{6n+7}{4}<n+1 .$$

**Chap tengsizlik:**
$$4n\le6n+7 \ \Longrightarrow\ -7\le2n \ \Longrightarrow\ n\ge-3{,}5 \ \Longrightarrow\ n\ge-3 .$$

**Oʻng tengsizlik:**
$$6n+7<4n+4 \ \Longrightarrow\ 2n<-3 \ \Longrightarrow\ n<-1{,}5 \ \Longrightarrow\ n\le-2 .$$

Demak $n\in\{-3;-2\}$, va mos ildizlar:
$$n=-3:\ x=\frac{-6+1}{4}=-\frac54 ,\qquad n=-2:\ x=\frac{-4+1}{4}=-\frac34 .$$

**Tekshirish.** $x=-\frac54$: $3x+1=-\frac{15}{4}+1=-\frac{11}{4}=-2{,}75$, $\left[-2{,}75\right]=-3$; $2x-\frac12=-\frac52-\frac12=-3$ ✓
$x=-\frac34$: $3x+1=-\frac54=-1{,}25$, $\left[-1{,}25\right]=-2$; $2x-\frac12=-\frac32-\frac12=-2$ ✓

**Ildizlar yigʻindisi:**
$$-\frac54-\frac34=-2 .$$''',
ru=r'''В уравнении $\left[3x+1\right]=2x-\dfrac12$ левая часть — **целое число**, значит, и правая целая.

Обозначим $n=2x-\dfrac12$ ($n$ целое). Тогда
$$x=\frac{n+\frac12}{2}=\frac{2n+1}{4}.$$

**Запишем условие целой части.** Равенство $\left[3x+1\right]=n$ означает
$$n\le 3x+1<n+1 .$$
Подставим $x$:
$$3x+1=\frac{3(2n+1)}{4}+1=\frac{6n+3+4}{4}=\frac{6n+7}{4}.$$
Значит,
$$n\le\frac{6n+7}{4}<n+1 .$$

**Левое неравенство:**
$$4n\le6n+7 \ \Longrightarrow\ -7\le2n \ \Longrightarrow\ n\ge-3{,}5 \ \Longrightarrow\ n\ge-3 .$$

**Правое неравенство:**
$$6n+7<4n+4 \ \Longrightarrow\ 2n<-3 \ \Longrightarrow\ n<-1{,}5 \ \Longrightarrow\ n\le-2 .$$

Итак, $n\in\{-3;-2\}$, и соответствующие корни:
$$n=-3:\ x=\frac{-6+1}{4}=-\frac54 ,\qquad n=-2:\ x=\frac{-4+1}{4}=-\frac34 .$$

**Проверка.** $x=-\frac54$: $3x+1=-\frac{11}{4}=-2{,}75$, $\left[-2{,}75\right]=-3$; $2x-\frac12=-3$ ✓
$x=-\frac34$: $3x+1=-1{,}25$, $\left[-1{,}25\right]=-2$; $2x-\frac12=-2$ ✓

**Сумма корней:**
$$-\frac54-\frac34=-2 .$$'''),

dict(n=30, pts='2,6', ans='$1111$',
uz=r'''Masala teskari tomondan qaraladi: ketma-ket toʻrt xonali sonlar toʻplami toʻxtaydigan joy — bu **barcha raqamlari juft** boʻlgan son (unda toq raqam yoʻq).

Demak savol: barcha raqamlari juft boʻlgan ikkita ketma-ket toʻrt xonali son orasidagi **eng katta bўshliq** qancha?

**Barcha raqamlari juft boʻlgan toʻrt xonali sonlar:** birinchi raqam $\in\{2;4;6;8\}$, qolgan uchtasi $\in\{0;2;4;6;8\}$.

**Bўshliqlarni tahlil qilamiz.** Eng uzun bўshliq minglar xonasi oshganda paydo boʻladi. Masalan, barcha raqamlari juft boʻlgan eng katta «$2$ bilan boshlanadigan» son — $2888$, keyingisi esa $4000$:
$$2889,\ 2890,\ \dots,\ 3999 .$$
Bu oraliqda
$$3999-2889+1=1111$$
ta son bor, va ularning **har birida** kamida bitta toq raqam mavjud ✓

Xuddi shunday bўshliqlar: $6889\ldots7999$ va $8889\ldots9999$ — ham $1111$ tadan.

**Bundan uzunrogʻi yoʻq.** Har qanday $1112$ ta ketma-ket toʻrt xonali son ichida minglar xonasi oʻzgarmaydigan kamida bitta toʻliq «yuzlik blok» boʻladi, unda esa barcha raqamlari juft son albatta uchraydi (masalan, $\overline{d000}$ yoki $\overline{d200}$ koʻrinishidagilar).

**Javob: $1111$.**''',
ru=r'''Задача рассматривается «от противного»: набор идущих подряд четырёхзначных чисел обрывается на числе, **все цифры которого чётны** (в нём нет нечётной цифры).

Значит, вопрос такой: каков **наибольший промежуток** между двумя соседними четырёхзначными числами со всеми чётными цифрами?

**Числа со всеми чётными цифрами:** первая цифра $\in\{2;4;6;8\}$, остальные три $\in\{0;2;4;6;8\}$.

**Анализ промежутков.** Самый длинный промежуток возникает при смене тысяч. Например, наибольшее такое число, начинающееся с $2$, — это $2888$, а следующее — $4000$:
$$2889,\ 2890,\ \dots,\ 3999 .$$
В этом промежутке
$$3999-2889+1=1111$$
чисел, и в **каждом** из них есть хотя бы одна нечётная цифра ✓

Такие же промежутки: $6889\ldots7999$ и $8889\ldots9999$ — тоже по $1111$.

**Длиннее не бывает.** Среди любых $1112$ подряд идущих четырёхзначных чисел найдётся полный «блок сотен» без смены тысяч, а в нём обязательно встретится число со всеми чётными цифрами (например, вида $\overline{d000}$ или $\overline{d200}$).

**Ответ: $1111$.**'''),
]
