# -*- coding: utf-8 -*-
I = lambda **k: k

SECTIONS = [

dict(key='alg', kod='A', nom='Algebra va ayniyatlar', ulush='31,5 %',
 izoh='Savollarning eng katta qismi. Bu boʻlimdagi ayniyatlar sonlar nazariyasi va '
      'geometriya masalalarida ham qurol boʻlib xizmat qiladi.',
 items=[

I(nom='Qisqa koʻpaytirish formulalari',
  tex=r'(a\pm b)^2=a^2\pm 2ab+b^2,\qquad a^2-b^2=(a-b)(a+b)',
  tex2=r'(a\pm b)^3=a^3\pm 3a^2b+3ab^2\pm b^3,\qquad a^3\pm b^3=(a\pm b)(a^2\mp ab+b^2)',
  nega='Olimpiadada eng koʻp ishlatiladigan toʻrtlik. $a^2-b^2$ ni koʻrganingizda '
       'darhol koʻpaytuvchilarga ajrating — bu deyarli har doim keyingi qadamni ochadi.',
  misol=r'$22^2+44^2+66^2=22^2(1+4+9)=484\cdot14=2^3\cdot7\cdot11^2$, eng katta tub boʻluvchi $11$.',
  ref='2025/26 №4'),

I(nom='Uch hadning kvadrati',
  tex=r'(a+b+c)^2=a^2+b^2+c^2+2(ab+bc+ca)',
  nega='Bundan foydali natija: $a^2+b^2+c^2=(a+b+c)^2-2(ab+bc+ca)$ — '
       'simmetrik ifodalarni Viyet orqali hisoblashda kerak boʻladi.'),

I(nom='Uch kub ayniyati',
  tex=r'a^3+b^3+c^3-3abc=(a+b+c)\left(a^2+b^2+c^2-ab-bc-ca\right)',
  nega='**Muhim natija:** agar $a+b+c=0$ boʻlsa, $a^3+b^3+c^3=3abc$. '
       'Shartida yigʻindi nolga teng boʻlgan masalalarda birinchi navbatda shuni sinang.'),

I(nom='Sofi Jermen ayniyati',
  tex=r'a^4+4b^4=\left(a^2+2b^2-2ab\right)\left(a^2+2b^2+2ab\right)',
  nega='«Koʻpaytuvchilarga ajralmaydi» koʻrinadigan ifodani ajratadi. Sonlar nazariyasida '
       '$n^4+4$ tipidagi sonning tub emasligini isbotlashda ishlatiladi.'),

I(nom='Simon hiylasi (SFFT)',
  tex=r'xy+ax+by=(x+b)(y+a)-ab',
  nega='Ikki nomaʼlumli tenglamani $(\;)(\;)=N$ shakliga keltiradi, '
       'soʻng $N$ ning boʻluvchilari saralanadi. Diofant masalalarining yarmi shu bilan yechiladi.',
  misol=r'$4a-7b+28ab=2020$. Guruhlaymiz: $4a(7b+1)-(7b+1)=2019$, yaʼni '
        r'$(4a-1)(7b+1)=2019=3\cdot673$. Bundan $a=1,\ b=96$, demak $ab=96$.',
  ref='2024/25 №9'),

I(nom='Butun qismni ajratish',
  tex=r'\frac{n^2-3}{n-2}=n+2+\frac{1}{n-2}',
  nega='Kasr butun boʻlishi uchun maxraj qoldiqni boʻlishi kerak. '
       'Umumiy usul: suratni maxrajga boʻlib, $\\text{butun}+\\dfrac{\\text{qoldiq}}{\\text{maxraj}}$ yozing.',
  misol=r'$(n-2)\mid 1$ dan $n-2=\pm1$, yaʼni $n=3$ yoki $n=1$ — $2$ ta qiymat.',
  ref='2025/26 №2'),

I(nom='Bezu teoremasi', tur='teorema',
  tex=r'P(x)\ \text{ni}\ (x-a)\ \text{ga boʻlgandagi qoldiq}\ =P(a)',
  nega='**Natija:** $(x-a)\\mid P(x)\\iff P(a)=0$. Koʻphadni koʻpaytuvchilarga ajratishda '
       'ildizni taxmin qilib, shu teorema bilan tekshiriladi.'),

I(nom='Viyet teoremasi — kvadrat tenglama', tur='teorema',
  tex=r'ax^2+bx+c=0\ \Longrightarrow\ x_1+x_2=-\frac{b}{a},\qquad x_1x_2=\frac{c}{a}',
  nega='Ildizlarni **topmasdan** simmetrik ifodalarni hisoblash imkonini beradi — '
       'olimpiadada deyarli har doim shu kerak.'),

I(nom='Simmetrik ifodalar',
  tex=r'x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2',
  tex2=r'x_1^3+x_2^3=(x_1+x_2)^3-3x_1x_2(x_1+x_2),\qquad x_1^4+x_2^4=\left(x_1^2+x_2^2\right)^2-2(x_1x_2)^2',
  nega='Ketma-ket qoʻllang: avval kvadratlar yigʻindisini, keyin uni yana shu ayniyatga qoʻying.',
  misol=r'$x^2+2x-1=0$: $x_1+x_2=-2$, $x_1x_2=-1$. Unda $x_1^2+x_2^2=4+2=6$ va '
        r'$x_1^4+x_2^4=36-2=34$.',
  ref='2025/26 №13'),

I(nom='Diskriminant va ildizlar soni',
  tex=r'D=b^2-4ac:\quad D>0\ \text{(2 ta)},\quad D=0\ \text{(1 ta)},\quad D<0\ \text{(yoʻq)}',
  nega='**Butun ildizlar uchun** $D$ toʻla kvadrat boʻlishi shart. Parametrli masalalarda '
       'aynan shu shart yechimni beradi.',
  misol=r'$x^2+ax+b=0$ va $x^2+ax+b+1=0$ ikkalasi butun ildizli: $m^2-n^2=4$ dan $m=2,\ n=0$, '
        r'demak $a^2=4(b+1)$ va $b\in\{0;3;8\}$ — $6$ ta juftlik.',
  ref='2024/25 №17'),

I(nom='Ikki tenglamaning umumiy ildizi',
  tex=r'\begin{aligned}x^2+px+q&=0\\ x^2+rx+s&=0\end{aligned}\ \Longrightarrow\ (p-r)x+(q-s)=0',
  nega='Tenglamalarni ayiring — kvadrat had qisqaradi va chiziqli tenglama qoladi. '
       'Umumiy ildiz $x=\\dfrac{s-q}{p-r}$.',
  ref='2024 №14'),

I(nom='Modul: asosiy xossalar',
  tex=r'|u|=|v|\iff u=\pm v,\qquad |x-a|=\text{sonlar oʻqida}\ x\ \text{dan}\ a\ \text{gacha masofa}',
  nega='$|x+6|=|x+10|$ — «$-6$ va $-10$ dan teng uzoqlikdagi nuqta», yaʼni ularning oʻrtasi. '
       'Bu yerda hisoblashning hojati yoʻq.',
  misol=r'$x=\dfrac{-6+(-10)}{2}=-8$.',
  ref='2025/26 №6'),

I(nom='Ichma-ich ildizni ochish',
  tex=r'\sqrt{a\pm2\sqrt{b}}=\sqrt{x}\pm\sqrt{y},\quad \text{bunda}\ x+y=a,\ xy=b',
  nega='$x$ va $y$ — $t^2-at+b=0$ tenglamaning ildizlari. Har doim natijani kvadratga '
       'koʻtarib tekshiring.',
  misol=r'$\sqrt{4+2\sqrt3}=\sqrt3+1$, $\sqrt{49+8\sqrt3}=1+4\sqrt3$, demak '
        r'$\left(4(\sqrt3+1)-(1+4\sqrt3)\right)^2=3^2=9$.',
  ref='2025/26 №10'),

I(nom='Qoʻshmaga koʻpaytirish',
  tex=r'\frac{1}{\sqrt{a}+\sqrt{b}}=\frac{\sqrt a-\sqrt b}{a-b},\qquad '
      r'\frac{1}{\sqrt{k+1}+\sqrt{k}}=\sqrt{k+1}-\sqrt{k}',
  nega='Ikkinchi shakl teleskoplash uchun: shunday hadlar yigʻindisida oʻrtadagi hammasi qisqaradi.'),

I(nom='Proporsiya xossalari',
  tex=r'\frac{a}{b}=\frac{c}{d}\ \Longrightarrow\ \frac{a\pm b}{b}=\frac{c\pm d}{d},\qquad '
      r'\frac{a}{b}=\frac{c}{d}=\frac{e}{f}=k\ \Longrightarrow\ \frac{a+c+e}{b+d+f}=k',
  nega='Ikkinchisi — «birlashtirilgan nisbat»; maxrajlar yigʻindisi nolga teng boʻlmasligi shart.'),

I(nom='Nisbatlarga 1 qoʻshish hiylasi',
  tex=r'\frac{a+b+c}{d}=r\ \Longrightarrow\ \frac{a+b+c+d}{d}=r+1',
  nega='Toʻrtta bir xil koʻrinishdagi nisbat berilganda hammasiga $1$ qoʻshing: '
       'surat bir xil $S=a+b+c+d$ boʻlib qoladi. Soʻng **$S=0$ holini alohida** tekshiring — '
       'ikkinchi javob odatda shundan chiqadi.',
  misol=r'$S\ne0$ da $a=b=c=d$ va $r=3$; $S=0$ da $r=-1$. Yigʻindi $3+(-1)=2$.',
  ref='2025/26 №15'),

I(nom='Oʻrta arifmetik va oʻrta geometrik (AM–GM)', tur='teorema',
  tex=r'\frac{a+b}{2}\ge\sqrt{ab},\qquad \frac{a_1+\dots+a_n}{n}\ge\sqrt[n]{a_1\cdots a_n}\quad(a_i>0)',
  nega='Tenglik faqat $a_1=\\dots=a_n$ da. **Natija:** $a+\\dfrac1a\\ge2$ va '
       '$\\left(a+\\dfrac1a\\right)$ ning eng kichik qiymati $2$.'),

I(nom='Kvadrat uchhadning eng katta/kichik qiymati',
  tex=r'f(t)=at^2+bt+c\ \text{ning uchi}\ t_0=-\frac{b}{2a},\qquad f(t_0)=c-\frac{b^2}{4a}',
  nega='$a>0$ da minimum, $a<0$ da maksimum. Almashtirish ($t=x^2$) bilan darajani tushiring — '
       'lekin yangi oʻzgaruvchining **sohasini** ($t\\ge0$) unutmang.',
  misol=r'$(4-x)(2-x)(x+4)(x+2)=(16-x^2)(4-x^2)$; $t=x^2$ da $t^2-20t+64$, '
        r'minimum $t=10$ da $-36$.',
  ref='2025/26 №22 (11-sinf)'),

I(nom='Oraliqlar usuli',
  tex=r'(x-x_1)(x-x_2)\cdots(x-x_n)\ \gtrless\ 0',
  nega='Ildizlarni oʻqqa qoʻying, eng oʻngdan «+» bilan boshlang va har bir oddiy ildizda '
       'ishorani almashtiring (juft karrali ildizda **almashmaydi**). '
       'Kasrli tengsizlikda maxrajni koʻpaytirmang — ishorani yoʻqotasiz.',
  misol=r'$x-1\ge\dfrac{2024}{x+1}$: $x+1>0$ da $x^2\ge2025\Rightarrow x\ge45$; '
        r'$x+1<0$ da ishora almashib $-45\le x<-1$. Eng kichik butun yechim $-45$.',
  ref='2024 №7'),
]),

dict(key='nt', kod='B', nom='Sonlar nazariyasi', ulush='24,7 %',
 izoh='Oxirgi ikki yilda eng koʻp savol shu boʻlimdan. Asosan boʻlinish, qoldiqlar, '
      'boʻluvchilar soni va Diofant tenglamalari.',
 items=[

I(nom='Boʻlinish alomatlari',
  tex=r'\begin{array}{ll} 2,5,10 & \text{oxirgi raqam}\\ 4,25 & \text{oxirgi ikki raqam}\\'
      r' 8,125 & \text{oxirgi uch raqam}\\ 3,9 & \text{raqamlar yigʻindisi}\\'
      r' 11 & \text{navbatlashuvchi yigʻindi}\end{array}',
  nega='$7$ ga boʻlinish uchun alohida alomat oʻrniga $10^k$ ning qoldiqlaridan foydalaning: '
       '$1,3,2,6,4,5$ — soʻng davr takrorlanadi.'),

I(nom='Sonni yoyib yozish',
  tex=r'\overline{abc}=100a+10b+c,\qquad \overline{ab}=10a+b',
  nega='Raqamli masalada **birinchi qadam** har doim shu. Soʻng shartni $a,b,c$ '
       'haqidagi tenglamaga aylantiring.',
  misol=r'$\overline{abcd}\cdot4=\overline{dcba}$: $a$ juft va $a\le2$ dan $a=2$; '
        r'$4d\equiv2\ (\mathrm{mod}\ 10)$ va $d\ge8$ dan $d=8$; qolgani $13b-2c=-1$ '
        r'$\Rightarrow 2178\cdot4=8712$.',
  ref='2025/26 №28'),

I(nom='Boʻlish algoritmi',
  tex=r'a=bq+r,\qquad 0\le r<b',
  nega='**Qoldiq bilan berilgan shartlar hiylasi:** qoldiq boʻluvchidan $1$ ga kam boʻlsa, '
       '$a+1$ boʻluvchiga boʻlinadi.',
  misol=r'$n$: $10$ ga $9$, $11$ ga $10$, $12$ ga $11$ qoldiq $\Rightarrow$ '
        r'$n+1$ soni $\mathrm{EKUK}(10,11,12)=660$ ga karrali, eng kichigi $n=659$.',
  ref='2025/26 №8'),

I(nom='EKUB va EKUK bogʻlanishi',
  tex=r'\mathrm{EKUB}(a,b)\cdot\mathrm{EKUK}(a,b)=a\cdot b',
  nega='Yevklid algoritmi: $\\gcd(a,b)=\\gcd(b,\\ a\\bmod b)$. '
       '**Foydali lemma:** $\\gcd(n,n+1)=1$ — ketma-ket sonlar har doim oʻzaro tub.'),

I(nom='Arifmetikaning asosiy teoremasi', tur='teorema',
  tex=r'n=p_1^{\alpha_1}p_2^{\alpha_2}\cdots p_k^{\alpha_k}\quad\text{— yagona tarzda}',
  nega='Tub koʻpaytuvchilarga yoyish **yagona** boʻlgani uchun ikki tomondagi darajalarni '
       'tenglashtirish mumkin — koʻrsatkichli tenglamalar shu bilan yechiladi.',
  misol=r'$16^a9^a=6^b8^2$: $2^{4a}3^{2a}=2^{b+6}3^b$ dan $4a=b+6$, $2a=b$, '
        r'demak $a=3,\ b=6$, $a+b=9$.',
  ref='2025/26 №4 (10-sinf)'),

I(nom='Boʻluvchilar soni', tur='teorema',
  tex=r'\tau(n)=(\alpha_1+1)(\alpha_2+1)\cdots(\alpha_k+1)',
  nega='**Natijalar:** $\\tau(n)$ toq $\\iff n$ toʻla kvadrat. Aynan $3$ ta boʻluvchi '
       '$\\iff n=p^2$. Toʻla kvadrat boʻluvchilar soni — barcha $\\alpha_i$ ni '
       'juftga cheklab sanaladi.',
  misol=r'$9800=2^3\cdot5^2\cdot7^2$ ning toʻla kvadrat boʻluvchilari: '
        r'$\alpha\in\{0;2\}$ har bir tub uchun $\Rightarrow 2\cdot2\cdot2=8$ ta.',
  ref='2024/25 №3 (11-sinf)'),

I(nom='Lежandr formulasi', tur='teorema',
  tex=r'v_p(n!)=\left\lfloor\frac{n}{p}\right\rfloor+\left\lfloor\frac{n}{p^2}\right\rfloor'
      r'+\left\lfloor\frac{n}{p^3}\right\rfloor+\cdots',
  nega='$n!$ dagi $p$ ning darajasi. **Nollar soni** $=v_5(n!)$ (chunki $v_2>v_5$). '
       'Boʻlinma uchun ayiring: $v_p(m!/n!)=v_p(m!)-v_p(n!)$.',
  misol=r'Ikki xonali sonlar koʻpaytmasi $=\dfrac{99!}{9!}$; '
        r'$v_3(99!)=33+11+3+1=48$, $v_3(9!)=4$, demak $3^{44}$ ga boʻlinadi.',
  ref='2025/26 №17'),

I(nom='Modular arifmetika qoidalari',
  tex=r'a\equiv b,\ c\equiv d\ (\mathrm{mod}\ m)\ \Longrightarrow\ '
      r'a\pm c\equiv b\pm d,\quad ac\equiv bd,\quad a^k\equiv b^k',
  nega='**Boʻlishga ruxsat yoʻq** — faqat qoldiqni qisqartirish mumkin, u ham '
       '$\\gcd$ shartida. Katta darajani bosqichma-bosqich kvadratga koʻtaring.'),

I(nom='Oxirgi raqam davrlari',
  tex=r'\begin{array}{ll}2,3,7,8:&\text{davr }4\\ 4,9:&\text{davr }2\\ '
      r'0,1,5,6:&\text{oʻzgarmaydi}\end{array}',
  nega='$k^{n}$ ning oxirgi raqami $n\\bmod4$ ga qarab aniqlanadi. '
       '**Muhim:** $n\\equiv1\\ (\\mathrm{mod}\\ 4)$ va $n>1$ boʻlsa $k^n\\equiv k\\ (\\mathrm{mod}\\ 10)$ — '
       'katta yigʻindilarni shu bilan qisqartiring.',
  misol=r'$1^{2025}+2^{2025}+\dots+2025^{2025}\equiv1+2+\dots+2025=2051325$, oxirgi raqam $5$.',
  ref='2025/26 №21 (11-sinf)'),

I(nom='Oxirgi ikkita raqam',
  tex=r'3^{20}\equiv1\ (\mathrm{mod}\ 100),\qquad 2^{20}\equiv76,\qquad 7^{4}\equiv1',
  nega='$\\mathrm{mod}\\ 100$ da $10$ bilan oʻzaro tub sonlar uchun davr $20$ ni boʻladi. '
       'Darajani $20$ ga boʻlib, qoldiqqa qarang.',
  misol=r'$2025=20\cdot101+5$, demak $3^{2025}\equiv3^5=243\equiv43$.',
  ref='2025/26 №18'),

I(nom='Kvadratlarning qoldiqlari', tur='lemma',
  tex=r'n^2\equiv0,1\ (\mathrm{mod}\ 3),\qquad n^2\equiv0,1\ (\mathrm{mod}\ 4),'
      r'\qquad n^2\equiv0,1,4\ (\mathrm{mod}\ 8)',
  nega='«Bunday son toʻla kvadrat boʻla olmaydi» yoki «yechim yoʻq» tipidagi masalalar '
       'shu bilan yopiladi. Toʻla kvadrat hech qachon $2,3\\ (\\mathrm{mod}\\ 4)$ '
       'qoldiq bermaydi.'),

I(nom='Ketma-ket sonlar koʻpaytmasi', tur='lemma',
  tex=r'k\ \text{ta ketma-ket butun sonning koʻpaytmasi}\ k!\ \text{ga boʻlinadi}',
  nega='Masalan $(n-1)n(n+1)$ har doim $6$ ga boʻlinadi. Koʻphadning barcha '
       'qiymatlari uchun umumiy boʻluvchi izlaganda birinchi qurol.',
  misol=r'$F(n)=n^5+3n^3-4n=(n-1)n(n+1)(n^2+4)$ har doim $24$ ga boʻlinadi, '
        r'va $\gcd(F(2),F(3))=\gcd(48,312)=24$.',
  ref='2025/26 №24 (10-sinf)'),

I(nom='Kichik Ferma teoremasi', tur='teorema',
  tex=r'p\ \text{tub va}\ p\nmid a\ \Longrightarrow\ a^{p-1}\equiv1\ (\mathrm{mod}\ p)',
  nega='Har qanday $a$ uchun esa $a^p\\equiv a\\ (\\mathrm{mod}\\ p)$. '
       'Katta darajalarni tub modul boʻyicha qisqartirishning eng tez yoʻli.'),

I(nom='Diofant tenglamasi — chiziqli',
  tex=r'ax+by=c\ \text{yechimga ega}\iff \gcd(a,b)\mid c',
  nega='Bitta yechim $(x_0,y_0)$ topilsa, qolganlari '
       '$x=x_0+\\dfrac{b}{d}t,\\ y=y_0-\\dfrac{a}{d}t$. '
       '**Natural** yechimlar soni chegaralangan — shu bilan sanaladi.',
  misol=r'$13a+31b=N$: bir yechimdan ikkinchisiga $a\to a+31$, $b\to b-13$. '
        r'Uchta yechim uchun $b\ge27$ kerak, eng kichik $N=13+31\cdot27=850$.',
  ref='2025/26 №26 (10-sinf)'),

I(nom='Koʻpaytuvchilarga ajratish usuli',
  tex=r'(\;\cdot\;)(\;\cdot\;)=N\ \Longrightarrow\ N\ \text{ning boʻluvchilarini saralash}',
  nega='Diofant masalasining asosiy usuli. Ajratgandan soʻng **juftlik va qoldiq** '
       'bilan variantlarni qisqartiring.',
  misol=r'$p^2-2q^2=1\Rightarrow(p-1)(p+1)=2q^2$. $p$ toq boʻlgani uchun chap tomon '
        r'$8$ ga boʻlinadi $\Rightarrow q$ juft $\Rightarrow q=2,\ p=3$ — yagona juftlik.',
  ref='2025/26 №19'),

I(nom='Frobenius soni (Chicken McNugget)', tur='teorema',
  tex=r'\gcd(a,b)=1\ \Longrightarrow\ \text{ifodalab boʻlmaydigan eng katta son}\ =ab-a-b',
  nega='Bunday sonlar soni $\\dfrac{(a-1)(b-1)}{2}$. '
       '«$2a+3b$ koʻrinishida yozib boʻlmaydigan nechta son bor?» degan savol shu.',
  ref='2024/25 №7'),
]),

dict(key='geo', kod='C', nom='Geometriya', ulush='20,2 %',
 izoh='Tuman bosqichida faqat planimetriya: uchburchak, toʻrtburchak va aylana. '
      'Fazoviy geometriya uch yilda bir marta ham uchramadi.',
 items=[

I(nom='Uchburchak burchaklari',
  tex=r'\alpha+\beta+\gamma=180^\circ,\qquad \text{tashqi burchak}=\text{qoʻshni boʻlmagan ikkitasining yigʻindisi}',
  nega='Tashqi burchak xossasi — burchak masalalarining yarmini yechadi. '
       '**Qavariq $n$-burchak:** ichki burchaklar yigʻindisi $(n-2)\\cdot180^\\circ$, '
       'tashqi burchaklar yigʻindisi har doim $360^\\circ$.',
  misol=r'Qavariq koʻpburchakda eng koʻpi bilan nechta toʻgʻri burchak? Toʻgʻri ichki '
        r'burchakka $90^\circ$ tashqi burchak mos keladi, $90k\le360$ dan $k\le4$ — kvadrat.',
  ref='2025/26 №3'),

I(nom='Uchburchak tengsizligi',
  tex=r'|b-c|<a<b+c',
  nega='«Bunday uchburchak yasash mumkinmi?» savollarida ishlatiladi. Kesmalar berilganda '
       'eng katta tomonni qolgan ikkitasining yigʻindisi bilan solishtiring.',
  misol=r'$1,4,9,\dots,64$ kvadratlaridan nechta uchburchak? Faqat $6$ ta uchlik mos keladi: '
        r'$(16,25,36)$ dan boshlab.',
  ref='2025/26 №18 (10-sinf)'),

I(nom='Pifagor teoremasi va teskarisi', tur='teorema',
  tex=r'c^2=a^2+b^2\iff \gamma=90^\circ',
  nega='**Teskarisi alohida qurol:** uzunliklar berilganda $a^2+b^2=c^2$ ni tekshirib, '
       'toʻgʻri burchak borligini **isbotlash** mumkin.',
  misol=r'Burishdan soʻng $MM\'=2\sqrt2$, $M\'C=1$, $MC=3$: $8+1=9$, demak '
        r'$\angle MM\'C=90^\circ$ va $\angle AMB=45^\circ+90^\circ=135^\circ$.',
  ref='2025/26 №30'),

I(nom='Gipotenuzaga tushirilgan mediana', tur='lemma',
  tex=r'\gamma=90^\circ\ \Longrightarrow\ m_c=\frac{c}{2}=R',
  nega='Toʻgʻri burchakli uchburchakda gipotenuzaning oʻrtasi — tashqi chizilgan aylana '
       'markazi. Trapetsiya masalalarida yon tomonlarni davom ettirib shu holga keltiriladi.',
  misol=r'Trapetsiyada $\angle A=30^\circ,\ \angle D=60^\circ$ — yigʻindisi $90^\circ$, '
        r'demak yon tomonlar $P$ da toʻgʻri burchak hosil qiladi va asoslar oʻrtalarini '
        r'tutashtiruvchi kesma $\dfrac{a-b}{2}$ ga teng.',
  ref='2025/26 №14 (10-sinf)'),

I(nom='Bissektrisa xossasi', tur='teorema',
  tex=r'\frac{AL}{LB}=\frac{CA}{CB}',
  nega='Bissektrisa qarama-qarshi tomonni qoʻshni tomonlarga proporsional boʻladi. '
       'Medianalar esa $2:1$ nisbatda kesishadi (ogʻirlik markazi).'),

I(nom='Mediana uzunligi',
  tex=r'm_a^2=\frac{2b^2+2c^2-a^2}{4}',
  nega='Uchinchi tomon yoki yuzni topish kerak boʻlganda mediana berilgan boʻlsa. '
       'Muqobil: medianani ikki barobarga uzaytirib, parallelogramm hosil qiling.',
  ref='2024 №17'),

I(nom='Yuz formulalari',
  tex=r'S=\frac12 a h_a=\frac12 ab\sin\gamma=\sqrt{p(p-a)(p-b)(p-c)}',
  tex2=r'S=pr=\frac{abc}{4R},\qquad p=\frac{a+b+c}{2}',
  nega='$S=pr$ ichki chizilgan aylana radiusini, $S=\\dfrac{abc}{4R}$ esa tashqi '
       'chizilgan aylana radiusini topish uchun.'),

I(nom='Sinuslar va kosinuslar teoremalari', tur='teorema',
  tex=r'\frac{a}{\sin\alpha}=\frac{b}{\sin\beta}=\frac{c}{\sin\gamma}=2R',
  tex2=r'c^2=a^2+b^2-2ab\cos\gamma',
  nega='**Ehtiyot boʻling:** sinuslar teoremasi burchakni ikki xil beradi ($\\alpha$ va '
       '$180^\\circ-\\alpha$) — qaysi biri mos kelishini uchburchak burchaklari '
       'yigʻindisi bilan tekshiring.',
  misol=r'$\sin\angle ABC=\sin63^\circ$ dan $63^\circ$ yoki $117^\circ$; '
        r'$104^\circ+117^\circ>180^\circ$ boʻlgani uchun $\angle ABC=63^\circ$.',
  ref='2025/26 №25 (11-sinf)'),

I(nom='Oʻrta chiziq',
  tex=r'\text{uchburchakda}\ =\frac{a}{2},\qquad \text{trapetsiyada}\ =\frac{a+b}{2}',
  nega='Trapetsiya yuzi $=$ oʻrta chiziq $\\times$ balandlik. '
       'Uchburchakning oʻrta chizigʻi uchinchi tomonga parallel.'),

I(nom='Oʻxshashlik', tur='teorema',
  tex=r'\triangle ABC\sim\triangle A_1B_1C_1\ \Longrightarrow\ \frac{S}{S_1}=k^2',
  nega='Alomatlari: ikki burchak boʻyicha; ikki tomon va ular orasidagi burchak; uch tomon. '
       'Olimpiadada **ikki burchak** eng koʻp ishlatiladi.',
  misol=r'$\angle MEB=\angle EAC$ va $\angle B=\angle C$ dan $\triangle MBE\sim\triangle ECA$, '
        r'demak $MB=\dfrac{EC\cdot BE}{CA}=\dfrac{2\cdot1}{4}=0{,}5$.',
  ref='2025/26 №27 (10-sinf)'),

I(nom='Ichki chizilgan burchak', tur='teorema',
  tex=r'\angle ABC=\tfrac12\overset{\frown}{AC}',
  nega='**Natijalar:** bir yoyga tayangan burchaklar teng; diametrga tayangan burchak '
       '$90^\\circ$ (Fales teoremasi).'),

I(nom='Urinma–vatar burchagi', tur='teorema',
  tex=r'\angle(\text{urinma},\,\text{vatar})=\tfrac12\overset{\frown}{\text{vatar}}',
  nega='Ichki chizilgan burchak bilan bir xil qoida. Aylana masalalarida **hamma narsani '
       'yoylar orqali** yozing — soʻng yoylar yigʻindisi $360^\\circ$ tenglamasini tuzing.',
  misol=r'Yoylar $12x,4x,6x,162^\circ$; yigʻindisi $360^\circ$ dan $x=9^\circ$, '
        r'soʻng $\angle ABC=\tfrac12(54^\circ+162^\circ)=108^\circ$.',
  ref='2025/26 №21'),

I(nom='Nuqtaning aylanaga nisbatan darajasi', tur='teorema',
  tex=r'PA\cdot PB=PC\cdot PD,\qquad PT^2=PA\cdot PB\ (\text{urinma})',
  nega='Kesishuvchi vatarlar va sekushchiylar uchun bir xil. Urinma holi — '
       'uzunlikni topishning eng tez yoʻli.'),

I(nom='Ichki va tashqi chizilgan toʻrtburchak', tur='teorema',
  tex=r'\text{ichki}:\ \alpha+\gamma=180^\circ,\qquad \text{tashqi (Piton)}:\ a+c=b+d',
  nega='Teskarisi ham oʻrinli — shu bilan toʻrtburchakning aylanaga ichki chizilganini '
       '**isbotlash** mumkin.'),

I(nom='Diagonallar hosil qilgan toʻrt uchburchak', tur='lemma',
  tex=r'[AOB]\cdot[COD]=[BOC]\cdot[AOD]',
  nega='Bir xil balandlikdagi uchburchaklar yuzalari asoslarga proporsional boʻlgani uchun. '
       'Qarama-qarshi uchburchaklar — faqat bitta umumiy uchga ega boʻlganlari.',
  misol=r'$16\cdot24=12\cdot S$ dan $S=32$.',
  ref='2025/26 №17 (10-sinf)'),

I(nom='Teng yonli trapetsiya, diagonallari perpendikulyar', tur='lemma',
  tex=r'h=\frac{a+b}{2},\qquad S=\left(\frac{a+b}{2}\right)^2',
  nega='Diagonallar kesishmasida hosil boʻlgan uchburchaklar teng yonli **toʻgʻri burchakli** '
       'boʻladi, shuning uchun balandlik oʻrta chiziqqa teng.',
  misol=r'Asoslari $12$ va $8$: $h=10$, $S=100$.',
  ref='2025/26 №9'),

I(nom='Varinyon parallelogrammi', tur='teorema',
  tex=r'\text{tomonlar oʻrtalari}\ \Longrightarrow\ \text{parallelogramm},\quad S_V=\tfrac12 S',
  nega='Tomonlari diagonallarga parallel va ularning yarmiga teng. '
       'Toʻrtburchak masalalarida oʻrtalar berilgan boʻlsa — birinchi urinish.'),

I(nom='Burish usuli',
  tex=r'\text{kvadrat ichidagi nuqta}\ \Longrightarrow\ 90^\circ\ \text{ga burish}',
  nega='Uchta masofa berilgan masalalarda uchalasini **bitta uchburchakka** yigʻadi. '
       'Teng tomonli uchburchakda $60^\\circ$ ga buriladi.',
  misol=r'$MA=1,\ MB=2,\ MC=3$: $B$ atrofida $90^\circ$ burib, $\angle AMB=135^\circ$.',
  ref='2025/26 №30'),
]),

dict(key='comb', kod='D', nom='Kombinatorika va ketma-ketliklar', ulush='19,1 %',
 izoh='Deyarli hammasi ochiq turdagi 21–30 savollar blokida, yaʼni $2{,}6$ balldan.',
 items=[

I(nom='Koʻpaytirish va qoʻshish qoidalari',
  tex=r'\text{bosqichma-bosqich}\Rightarrow\times,\qquad \text{kesishmaydigan hollar}\Rightarrow+',
  nega='**Teskarisini sanash** koʻpincha tezroq: «kamida bitta» shartida '
       '«umuman yoʻq» ni sanab, umumiydan ayiring.',
  misol=r'$1$ dan $8888$ gacha $8$ raqami bor sonlar: $8$ siz sonlar '
        r'$8+72+648+5103=5831$, demak javob $8888-5831=3057$.',
  ref='2025/26 №28 (10-sinf)'),

I(nom='Oʻrin almashtirish va tanlash',
  tex=r'P_n=n!,\qquad A_n^k=\frac{n!}{(n-k)!},\qquad C_n^k=\frac{n!}{k!\,(n-k)!}',
  nega='Tartib muhimmi? — ha boʻlsa $A$, yoʻq boʻlsa $C$. '
       '$C_n^k=C_n^{n-k}$ va Paskal: $C_n^k=C_{n-1}^{k-1}+C_{n-1}^{k}$.'),

I(nom='Toʻsiqlar va sharlar', tur='teorema',
  tex=r'x_1+x_2+\dots+x_k=n,\ x_i\ge0\ \Longrightarrow\ C_{n+k-1}^{\,k-1}\ \text{ta yechim}',
  nega='$x_i\\ge1$ sharti boʻlsa, avval har biridan $1$ ayiring. '
       'Boʻluvchilarni taqsimlashda tub sonlar **mustaqil** taqsimlanadi.',
  misol=r'$xyz=12^4=2^8 3^4$: $C_{10}^2\cdot C_6^2=45\cdot15=675$ ta tartiblangan uchlik.',
  ref='2025/26 №24'),

I(nom='Qoʻshish-ayirish prinsipi', tur='teorema',
  tex=r'|A\cup B\cup C|=|A|+|B|+|C|-|AB|-|BC|-|CA|+|ABC|',
  nega='«Har bir oʻquvchi kamida ikkita» tipidagi shartda tanlovlar sonini ikki xil '
       'sanang: $2x+3y$ va $x+y=N$.',
  misol=r'$14+15+16=45$ va $x+y=20$ dan $2(20-y)+3y=45$, demak uchchalasini '
        r'tanlaganlar $y=5$.',
  ref='2025/26 №24 (11-sinf)'),

I(nom='Dirixle prinsipi', tur='teorema',
  tex=r'n\ \text{ta buyum}\ m\ \text{ta qutida},\ n>m\ \Longrightarrow\ '
      r'\text{biror qutida}\ \ge\left\lceil\tfrac{n}{m}\right\rceil\ \text{ta}',
  nega='«Kafolatlash» soʻzi boʻlsa — eng yomon holatni yozing. '
       'Barcha rangdan bittadan kerak boʻlsa: eng koʻp ikkita rangning **hammasini** '
       'olib, $+1$ qoʻshing.',
  misol=r'$10$ koʻk, $6$ yashil, $5$ qizil: eng yomoni $10+6=16$, demak $17$ ta shar kerak.',
  ref='2025/26 №18 (11-sinf)'),

I(nom='Arifmetik progressiya',
  tex=r'a_n=a_1+(n-1)d,\qquad S_n=\frac{a_1+a_n}{2}\,n',
  nega='**Ishlatiladigan xossa:** chetdan teng uzoqlikdagi hadlar yigʻindisi bir xil, '
       '$a_k+a_{n+1-k}=a_1+a_n$. Uchta hadning yigʻindisi oʻrtadagisining uch barobari.',
  misol=r'$a_5+a_8+a_{11}=3a_8=12\Rightarrow a_8=4$; '
        r'$a_7+a_{10}+a_{13}=3a_{10}=18\Rightarrow a_{10}=6$, demak $d=1$.',
  ref='2025/26 №6 (11-sinf)'),

I(nom='Geometrik progressiya',
  tex=r'b_n=b_1q^{\,n-1},\qquad S_n=b_1\frac{q^n-1}{q-1},\qquad |q|<1:\ S=\frac{b_1}{1-q}',
  nega='**Xarakteristik xossa:** $b_n^2=b_{n-1}b_{n+1}$. '
       'Davriy oʻnli kasrni oddiy kasrga aylantirish ham shu formula bilan.'),

I(nom='Asosiy yigʻindilar',
  tex=r'1+2+\dots+n=\frac{n(n+1)}{2},\qquad 1+3+5+\dots+(2n-1)=n^2',
  tex2=r'1^2+\dots+n^2=\frac{n(n+1)(2n+1)}{6},\qquad 1^3+\dots+n^3=\left(\frac{n(n+1)}{2}\right)^2',
  nega='Toq sonlar yigʻindisi $n^2$ — masala shartida $1+3+\\dots+(2n-1)$ koʻrinsa, '
       'darhol $n^2$ deb yozing.',
  misol=r'$\dfrac{n-1}{2n}=\dfrac{45}{n^2}$ dan $n(n-1)=90$, demak $n=10$.',
  ref='2025/26 №14'),

I(nom='Teleskoplash',
  tex=r'\sum_{k=1}^{n}\bigl(f(k)-f(k+1)\bigr)=f(1)-f(n+1)',
  nega='Hadni ayirma shaklida yozing: $\\dfrac{1}{k(k+1)}=\\dfrac1k-\\dfrac1{k+1}$, '
       '$\\dfrac{1}{k(k+m)}=\\dfrac1m\\left(\\dfrac1k-\\dfrac1{k+m}\\right)$.'),

I(nom='Rekurrent ketma-ketlikning davriyligi', tur='lemma',
  tex=r'x_n=\frac{x_{n-1}+1}{x_{n-2}}\ \Longrightarrow\ \text{davr }5',
  nega='**Usul:** dastlabki $6$–$7$ hadni yozing. Agar $x_{k}=x_1$ va $x_{k+1}=x_2$ '
       'boʻlsa, davr $k-1$ ga teng. Soʻng indeksni davrga boʻlib, qoldiqqa qarang.',
  misol=r'$x_1=20,\ x_2=101$: $x_6=x_1$, demak davr $5$ va '
        r'$x_{2025}=x_5=\dfrac{21}{101}$.',
  ref='2025/26 №28 (11-sinf)'),

I(nom='Funksional almashtirish',
  tex=r'f(x)+f(-x)\quad\text{yoki}\quad f(x)+f\!\left(\tfrac1x\right)\ \text{ni hisoblang}',
  nega='$f(t)$ berilib $f(-t)$ soʻralsa — yigʻindini oling, u koʻpincha **oʻzgarmas** chiqadi. '
       'Ikkinchi usul: $f(g(x))$ berilgan boʻlsa, $g(x)=u$ almashtirish.',
  misol=r'$u=2^x$ da $f(x)+f(-x)=6$; $f(t)=3$ boʻlsa $f(-t)=3$.',
  ref='2025/26 №12'),
]),

dict(key='rev', kod='E', nom='Kichik mavzular', ulush='4,5 %',
 izoh='Alohida-alohida kam uchraydi, lekin birgalikda 2 ballgacha beradi — arzon ballar.',
 items=[

I(nom='Trigonometrik asosiy ayniyatlar',
  tex=r'\sin^2\alpha+\cos^2\alpha=1,\qquad \tan\alpha=\frac{\sin\alpha}{\cos\alpha}',
  tex2=r'\sin2\alpha=2\sin\alpha\cos\alpha,\qquad \cos2\alpha=\cos^2\alpha-\sin^2\alpha=1-2\sin^2\alpha',
  nega='Keltirish: $\\sin(180^\\circ-\\alpha)=\\sin\\alpha$, $\\cos(180^\\circ-\\alpha)=-\\cos\\alpha$. '
       'Sinuslar teoremasidagi ikki xil javob aynan shundan kelib chiqadi.',
  misol=r'$\tan\alpha+\sin\alpha=1$ dan qaytma tenglama orqali $\sin2\alpha=2(\sqrt2-1)$, '
        r'demak $(\sin2\alpha+2)^2=8$.',
  ref='2025/26 №25'),

I(nom='Ketma-ket foizlar',
  tex=r'15\%\ \text{va}\ 5\%\ \text{chegirma}\ \Longrightarrow\ 0{,}85\cdot0{,}95=0{,}8075',
  nega='**Qoʻshib $20\\%$ emas!** Umumiy chegirma $19{,}25\\%$. '
       'Oshirish uchun $1+p$, kamaytirish uchun $1-p$ koʻpaytuvchisi.',
  misol=r'$4\,800\,000\cdot0{,}85\cdot0{,}95+120\,000=3\,996\,000$ soʻm.',
  ref='20 masala №5'),

I(nom='Ish unumdorligi',
  tex=r'\text{butun ish}=1,\qquad \text{unum}=\frac1t,\qquad \text{birgalikda}\ \frac1{t_1}+\frac1{t_2}',
  nega='Har doim butun ishni $1$ deb oling — shunda tenglama kasrlar bilan ishlaydi '
       'va javob tez chiqadi.',
  misol=r'$4\left(\tfrac1{12}+\tfrac1{18}\right)=\tfrac59$ bajarildi; qolgan $\tfrac49$ ni '
        r'ikkinchi ishchi $\tfrac{4/9}{1/18}=8$ soatda tugatadi.',
  ref='20 masala №8'),

I(nom='Aralashma — tarozi qoidasi',
  tex=r'\frac{m_1}{m_2}=\frac{c_2-c}{c-c_1}',
  nega='Oʻrtacha narx chetlardan **teng uzoqlikda** boʻlsa, miqdorlar ham teng boʻladi.',
  misol=r'$60\,000$ va $84\,000$ ning oʻrtasi $72\,000$, demak $15$ kg aralashma '
        r'$7{,}5+7{,}5$ kg dan iborat.',
  ref='20 masala №7'),

I(nom='Butun va kasr qism',
  tex=r'x=[x]+\{x\},\qquad [x]\in\mathbb{Z},\qquad 0\le\{x\}<1',
  nega='**Usul:** $[\\,\\cdot\\,]=n$ deb belgilang, $x$ ni $n$ orqali ifodalang va '
       '$n\\le\\text{ifoda}<n+1$ qoʻsh tengsizligini yeching.',
  misol=r'$[3x+1]=2x-\tfrac12$: $n=2x-\tfrac12$ dan $x=\tfrac{2n+1}{4}$, '
        r'tengsizlikdan $n\in\{-3;-2\}$, ildizlar yigʻindisi $-2$.',
  ref='2025/26 №29 (11-sinf)'),
]),
]
