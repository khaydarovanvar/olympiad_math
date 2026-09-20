# -*- coding: utf-8 -*-
T = lambda uz, ru: (uz, ru)
I = lambda **k: k

CHROME = dict(
 title=T('Olimpiada formulalari · 11-sinf', 'Формулы олимпиады · 11 класс'),
 eyebrow=T('11-sinf · tuman (shahar) bosqichi', '11 класс · районный (городской) этап'),
 h1=T('Olimpiada formulalari va teoremalari', 'Формулы и теоремы олимпиады'),
 sub=T('20 kunlik rejaning nazariy qismi: kerak boʻladigan formulalar, teoremalar va '
       'lemmalar — har biri qayerda uchraganiga havola bilan.',
       'Теоретическая часть 20-дневного плана: нужные формулы, теоремы и леммы — '
       'каждая со ссылкой на задачу, где она встретилась.'),
 spec=None,
 misol=T('Misol', 'Пример'), uchragan=T('Uchragan', 'Встречалась'),
 formula=T('ta formula va teorema', 'формул и теорем'),
 src=T('<b>Misollar manbasi:</b> 11-sinf tuman bosqichi variantlari — 2025/2026 va 2024. '
       'Tuzuvchi: Anvarbek Khaydarov.',
       '<b>Источник примеров:</b> варианты районного этапа, 11 класс — 2025/2026 и 2024. '
       'Составитель: Анварбек Хайдаров.'),
)
BADGE = {'teorema': T('Teorema', 'Теорема'), 'lemma': T('Lemma', 'Лемма')}

SECTIONS = [

dict(key='alg', kod='A', ulush='30,0 %',
 nom=T('Algebra va logarifm', 'Алгебра и логарифмы'),
 izoh=T('Eng katta blok. 11-sinfda logarifm deyarli har variantda $2$ ta savol beradi.',
        'Самый большой блок. В 11 классе логарифмы дают по $2$ задачи почти в каждом варианте.'),
 items=[

I(nom=T('Qisqa koʻpaytirish va kublar', 'Сокращённое умножение и кубы'),
  tex=r'a^2-b^2=(a-b)(a+b),\qquad a^3\pm b^3=(a\pm b)(a^2\mp ab+b^2)',
  nega=T('Kub ayniyatlari kub ildizli ifodalarni soddalashtirishning asosiy vositasi.',
         'Тождества с кубами — главный инструмент упрощения выражений с кубическими корнями.')),

I(nom=T('Kub ildizli maxrajni ratsionallashtirish',
        'Рационализация знаменателя с кубическими корнями'),
  tex=r'\frac{1}{\sqrt[3]{a}+\sqrt[3]{b}}=\frac{\sqrt[3]{a^2}-\sqrt[3]{ab}+\sqrt[3]{b^2}}{a+b}',
  nega=T('$\\sqrt[3]{a}=x$, $\\sqrt[3]{b}=y$ deb belgilang — maxraj $x+y$, '
         'va $x^3+y^3=(x+y)(x^2-xy+y^2)$ ayniyati ishlaydi.',
         'Обозначьте $\\sqrt[3]{a}=x$, $\\sqrt[3]{b}=y$ — знаменатель станет $x+y$, '
         'и сработает тождество $x^3+y^3=(x+y)(x^2-xy+y^2)$.'),
  ref='2024 №21'),

I(nom=T('Oʻnli kasrni ildiz ostidan chiqarish', 'Вынесение из-под корня десятичной дроби'),
  tex=r'\sqrt{1{,}125}=\sqrt{\tfrac98}=\tfrac{3}{2\sqrt2},\qquad '
      r'\sqrt{1{,}62}=\sqrt{\tfrac{81}{50}}=\tfrac{9}{5\sqrt2}',
  nega=T('Avval oddiy kasrga oʻting, soʻng surat va maxrajni alohida ildizdan chiqaring — '
         'hamma had bitta $\\sqrt2$ ga keladi.',
         'Сначала перейдите к обыкновенной дроби, затем извлекайте корень из числителя '
         'и знаменателя отдельно — все слагаемые сведутся к одному $\\sqrt2$.'),
  ref='2024 №1'),

I(nom=T('Ichma-ich ildiz', 'Вложенный корень'),
  tex=r'\sqrt{a\pm2\sqrt{b}}=\sqrt{x}\pm\sqrt{y},\quad x+y=a,\ xy=b',
  nega=T('$x,y$ — $t^2-at+b=0$ ning ildizlari. Natijani kvadratga koʻtarib tekshiring.',
         '$x,y$ — корни $t^2-at+b=0$. Проверяйте результат возведением в квадрат.')),

I(nom=T('Ildizli tenglamada almashtirish', 'Замена в иррациональном уравнении'),
  tex=r'a^2+a+11=6\sqrt{a^2+a+2}\ \Longrightarrow\ t=\sqrt{a^2+a+2}:\ t^2+9=6t',
  nega=T('**Usul:** ildiz ostidagi ifodani $t$ deb belgilang va qolganini $t^2$ orqali yozing. '
         'Koʻpincha toʻla kvadrat chiqadi — bitta ildiz.',
         '**Приём:** обозначьте подкоренное через $t$ и остальное выразите через $t^2$. '
         'Часто получается полный квадрат — один корень.'),
  misol=T('$(t-3)^2=0\\Rightarrow t=3$, demak $a^2+a-7=0$ va '
          '$a-\\tfrac7a=\\tfrac{a^2-7}{a}=\\tfrac{-a}{a}=-1$.',
          '$(t-3)^2=0\\Rightarrow t=3$, значит $a^2+a-7=0$ и '
          '$a-\\tfrac7a=\\tfrac{a^2-7}{a}=-1$.'),
  ref='2024 №22'),

I(nom=T('Logarifm xossalari', 'Свойства логарифма'),
  tex=r'\log_a(xy)=\log_a x+\log_a y,\qquad \log_a x^k=k\log_a x,\qquad a^{\log_a x}=x',
  tex2=r'\log_a b=\frac{\log_c b}{\log_c a}=\frac{1}{\log_b a},\qquad '
       r'\log_{a^k}b=\frac1k\log_a b',
  nega=T('Oxirgi ikkitasi asoslar har xil boʻlganda kerak: hammasini **bitta asosga** keltiring.',
         'Последние два нужны при разных основаниях: приводите всё **к одному основанию**.'),
  ref='2024 №10'),

I(nom=T('Logarifmik tengsizlik: asos oʻzgaruvchi', 'Логарифмическое неравенство: переменное основание'),
  tur='teorema',
  tex=r'\log_x A<\log_x B\iff\begin{cases}x>1:& A<B\\ 0<x<1:& A>B\end{cases}',
  nega=T('**Ikki holni ham yozing.** Asos $1$ dan katta boʻlsa funksiya oʻsuvchi, '
         'kichik boʻlsa kamayuvchi — ishora almashadi. ODZ: $x>0$, $x\\ne1$.',
         '**Выпишите оба случая.** При основании больше $1$ функция возрастает, '
         'меньше — убывает, знак меняется. ОДЗ: $x>0$, $x\\ne1$.'),
  misol=T('$\\log_x\\tfrac{19}{8}<\\log_x\\tfrac{11}{5}$: $\\tfrac{19}{8}>\\tfrac{11}{5}$, '
          'demak katta sonning logarifmi kichik — faqat $0<x<1$ da.',
          '$\\log_x\\tfrac{19}{8}<\\log_x\\tfrac{11}{5}$: так как $\\tfrac{19}{8}>\\tfrac{11}{5}$, '
          'логарифм большего меньше — только при $0<x<1$.'),
  ref='2024 №6'),

I(nom=T('Koʻpaytma nolga teng', 'Произведение равно нулю'),
  tex=r'f_1(x)f_2(x)\cdots f_k(x)=0\iff \bigcup_i\{f_i(x)=0\}\ \cap\ \text{ODZ}',
  nega=T('Har bir koʻpaytuvchini alohida nolga tenglang, **soʻng** ODZ bilan filtrlang. '
         'Logarifm qatnashsa $x>0$ sharti bir necha ildizni oʻchiradi.',
         'Приравняйте каждый множитель к нулю, **затем** отфильтруйте по ОДЗ. '
         'Если есть логарифм, условие $x>0$ убирает часть корней.'),
  ref='2024 №11'),

I(nom=T('Kasrli tengsizlik', 'Дробное неравенство'),
  tex=(r'\frac{A}{B}>c\ \Longrightarrow\ \text{ikki hol: }B>0\ \text{va}\ B<0',
      r'\frac{A}{B}>c\ \Longrightarrow\ \text{два случая: }B>0\ \text{и}\ B<0'),
  nega=T('Maxrajni koʻpaytirmang — ishorani yoʻqotasiz. Ikki holni alohida yechib, '
         'javoblarni birlashtiring.',
         'Не умножайте на знаменатель — потеряете знак. Решайте два случая отдельно '
         'и объединяйте ответы.'),
  misol=T('$3x-1<\\tfrac{2024}{3x+1}$: $3x+1>0$ da $9x^2-1<2024$, '
          '$3x+1<0$ da ishora almashadi — eng katta butun $x$ shundan chiqadi.',
          '$3x-1<\\tfrac{2024}{3x+1}$: при $3x+1>0$ имеем $9x^2-1<2024$, '
          'при $3x+1<0$ знак меняется — отсюда наибольшее целое $x$.'),
  ref='2024 №3'),

I(nom=T('Irratsional tengsizlik', 'Иррациональное неравенство'),
  tex=r'\sqrt{A}+\sqrt{B}\ge c\ \Longrightarrow\ \text{ODZ}:\ A\ge0,\ B\ge0',
  nega=T('ODZ koʻpincha yechimni **deyarli toʻliq** beradi. Butun yechimlar soʻralsa, '
         'ODZ dagi butun sonlarni birma-bir qoʻyib tekshirish eng tez yoʻl.',
         'ОДЗ часто даёт ответ **почти полностью**. Если спрашивают целые решения, '
         'быстрее всего подставить целые из ОДЗ по одному.'),
  misol=T('$\\sqrt{28-x^2}+\\sqrt{-x}\\ge4$: ODZ $-\\sqrt{28}\\le x\\le0$, '
          'butun $x\\in\\{-5,\\dots,0\\}$ — oltitasini tekshiring.',
          '$\\sqrt{28-x^2}+\\sqrt{-x}\\ge4$: ОДЗ $-\\sqrt{28}\\le x\\le0$, '
          'целые $x\\in\\{-5,\\dots,0\\}$ — проверьте шесть значений.'),
  ref='2024 №18'),

I(nom=T('Simmetrik juftlik', 'Симметричная пара'),
  tex=r'x(x-y)=y(x+y)=1\ \Longrightarrow\ x^2-y^2=xy+y^2-\dots',
  nega=T('Ikki tenglikni **ayiring va qoʻshing**: $x^2-xy$ va $xy+y^2$ dan '
         '$x^2-y^2$ hamda $xy$ chiqadi. Soʻng '
         '$x^4-y^4=(x^2-y^2)(x^2+y^2)$ bilan koʻtariling.',
         '**Вычтите и сложите** два равенства: из $x^2-xy$ и $xy+y^2$ получатся '
         '$x^2-y^2$ и $xy$. Затем поднимайтесь через '
         '$x^4-y^4=(x^2-y^2)(x^2+y^2)$.'),
  ref='2024 №13'),

I(nom=T('$a+\\tfrac{k}{a}$ tipidagi ifodalar', 'Выражения вида $a+\\tfrac{k}{a}$'),
  tex=r'\left(a-\tfrac{k}{a}\right)^2=a^2+\tfrac{k^2}{a^2}-2k,\qquad '
      r'a^3-\tfrac{k^3}{a^3}=\left(a-\tfrac ka\right)^3+3k\left(a-\tfrac ka\right)',
  nega=T('Kvadratga yoki kubga koʻtarish bilan darajani oshiring — ildizlarni topish shart emas.',
         'Повышайте степень возведением в квадрат или куб — находить корни не нужно.')),

I(nom=T('Butun va kasr qism', 'Целая и дробная часть'),
  tex=r'x=[x]+\{x\},\qquad [x]\in\mathbb{Z},\qquad 0\le\{x\}<1',
  nega=T('$[\\,\\cdot\\,]=n$ deb belgilang, $\\{\\,\\cdot\\,\\}$ ni $n$ orqali ifodalang '
         'va $0\\le\\{\\,\\cdot\\,\\}<1$ dan $n$ ning chegarasini toping.',
         'Обозначьте $[\\,\\cdot\\,]=n$, выразите $\\{\\,\\cdot\\,\\}$ через $n$ '
         'и из $0\\le\\{\\,\\cdot\\,\\}<1$ найдите границы $n$.'),
  misol=T('$20[u]=24\\{u\\}$: $\\{u\\}=\\tfrac{5n}{6}$, va $0\\le\\tfrac{5n}{6}<1$ dan '
          '$n$ ning mumkin qiymatlari sanoqli.',
          '$20[u]=24\\{u\\}$: $\\{u\\}=\\tfrac{5n}{6}$, и из $0\\le\\tfrac{5n}{6}<1$ '
          'возможных $n$ конечное число.'),
  ref='2024 №29'),

I(nom=T('Parametr: «yagona ildiz»', 'Параметр: «единственный корень»'),
  tex=r'\frac{x^2-3px+2p^2}{x+2p-6}=0',
  nega=T('**Ikki sabab:** $D=0$ (karrali ildiz) **yoki** ODZ ikkita ildizdan bittasini '
         'oʻchirgan. Ikkinchisi unutiladi — javobning yarmi shunda.',
         '**Две причины:** $D=0$ (кратный корень) **или** ОДЗ убирает один из двух корней. '
         'Второе забывают — а там половина ответа.'),
  ref='2024 №28'),

I(nom=T('Diskriminant va butun ildizlar', 'Дискриминант и целые корни'),
  tex=(r'D=b^2-4ac\ \text{---}\ \square\ \Longrightarrow\ \text{ildizlar ratsional}',
      r'D=b^2-4ac\ \text{---}\ \square\ \Longrightarrow\ \text{корни рациональны}'),
  nega=T('Ikki tenglama bir vaqtda butun ildizli boʻlsa, ularning diskriminantlari '
         'ayirmasi kichik son boʻladi — $m^2-n^2=k$ ni yeching.',
         'Если два уравнения одновременно имеют целые корни, разность их дискриминантов — '
         'малое число; решайте $m^2-n^2=k$.'),
  ref='2025/26-A №17'),

I(nom=T('Teleskopik koʻpaytma', 'Телескопическое произведение'),
  tex=r'\prod_{n=2}^{N}\left(n-\frac1n\right)=\prod_{n=2}^{N}\frac{(n-1)(n+1)}{n}'
      r'=\frac{(N-1)!\cdot\frac{(N+1)!}{2}}{N!}',
  nega=T('Har bir hadni $\\dfrac{(n-1)(n+1)}{n}$ shaklida yozing — uchta faktorial '
         'chiqadi va qisqaradi.',
         'Запишите каждый член как $\\dfrac{(n-1)(n+1)}{n}$ — получатся три факториала, '
         'которые сокращаются.'),
  misol=T('$N=60$ da natija $\\dfrac{61!}{120}=\\dfrac{61!}{5!}$, demak $a+b=66$.',
          'При $N=60$ результат $\\dfrac{61!}{120}=\\dfrac{61!}{5!}$, значит $a+b=66$.'),
  ref='2025/26-A №26'),

I(nom=T('Koʻpaytuvchilarni qayta guruhlash', 'Перегруппировка множителей'),
  tex=r'(4-x)(2-x)(x+4)(x+2)=\left(16-x^2\right)\left(4-x^2\right)',
  nega=T('Juftlarni shunday tanlangki, koʻpaytma $x^2$ ga bogʻliq boʻlsin. '
         'Soʻng $t=x^2\\ge0$ almashtirish bilan parabola uchini toping.',
         'Подбирайте пары так, чтобы произведение зависело от $x^2$. '
         'Затем заменой $t=x^2\\ge0$ находите вершину параболы.'),
  misol=T('$t^2-20t+64$ ning minimumi $t=10$ da $-36$.',
          'Минимум $t^2-20t+64$ при $t=10$ равен $-36$.'),
  ref='2025/26-A №22'),

I(nom=T('Sonlarni tartiblash', 'Упорядочивание чисел'),
  tex=r'x<-1\ \Longrightarrow\ x^3<x<0<x^2',
  nega=T('$x^3-x=x(x-1)(x+1)$ ning ishorasiga qarang. $-1<x<0$ da tartib boshqacha — '
         'oraliqni albatta tekshiring.',
         'Смотрите на знак $x^3-x=x(x-1)(x+1)$. При $-1<x<0$ порядок другой — '
         'обязательно проверяйте промежуток.'),
  ref='2025/26-A №5'),

I(nom=T('Ratsional ifodani soddalashtirish', 'Упрощение рационального выражения'),
  tex=r'\frac{a+2b}{a-2b}=3\ \Longrightarrow\ a=4b\ \Longrightarrow\ \frac{a+3b}{a-3b}=7',
  nega=T('Bitta nisbat berilsa, bitta harfni ikkinchisi orqali ifodalang — '
         'qolgan hamma narsa sonli boʻlib qoladi.',
         'Если дано одно отношение, выразите одну букву через другую — '
         'всё остальное станет числовым.'),
  ref='2025/26-A №1'),

I(nom=T('Qoʻsh tengsizlikni teskarilash', 'Обращение двойного неравенства'),
  tex=r'\frac18<\frac{1}{\sqrt x}\le\frac13\ \Longrightarrow\ 3\le\sqrt x<8',
  nega=T('Musbat sonlar uchun teskari qiymatga oʻtganda **ishora almashadi** va '
         'chegaralar oʻrin almashtiradi.',
         'Для положительных чисел при переходе к обратным величинам **знак меняется** '
         'и границы меняются местами.'),
  ref='2025/26-A №13'),
]),
]

SECTIONS.append(dict(key='nt', kod='B', ulush='18,3 %',
 nom=T('Sonlar nazariyasi', 'Теория чисел'),
 izoh=T('Qoldiqlar, raqamli masalalar va tub sonlar. 11-sinfda katta darajani modul '
        'boʻyicha qisqartirish har yili uchraydi.',
        'Остатки, задачи с цифрами и простые числа. В 11 классе сокращение большой степени '
        'по модулю встречается каждый год.'),
 items=[

I(nom=T('Modular arifmetika', 'Модульная арифметика'),
  tex=r'a\equiv b,\ c\equiv d\ (\mathrm{mod}\ m)\ \Longrightarrow\ a\pm c\equiv b\pm d,'
      r'\quad ac\equiv bd,\quad a^k\equiv b^k',
  nega=T('Boʻlishga ruxsat yoʻq. Katta darajani bosqichma-bosqich kvadratga koʻtaring.',
         'Делить нельзя. Большую степень возводите в квадрат пошагово.')),

I(nom=T('Binom bilan qoldiq topish', 'Остаток через бином'), tur='lemma',
  tex=r'5^{n}-3^{n}=(4+1)^n-(4-1)^n',
  nega=T('Kichik modul boʻyicha $4^k$ hadlar yoʻqoladi va faqat birinchi ikki had qoladi: '
         '$2\\left(\\binom{n}{1}4+\\binom{n}{3}4^3+\\cdots\\right)$. '
         '$\\mathrm{mod}\\ 34$ boʻyicha bu juda tez hisoblanadi.',
         'По малому модулю слагаемые с $4^k$ исчезают, остаются первые: '
         '$2\\left(\\binom{n}{1}4+\\binom{n}{3}4^3+\\cdots\\right)$. '
         'По $\\mathrm{mod}\\ 34$ это считается очень быстро.'),
  ref='2024 №20'),

I(nom=T('Toʻqqizliklardan iborat sonlar', 'Числа из девяток'), tur='lemma',
  tex=r'\underbrace{99\dots9}_{k}=10^{k}-1\ \equiv\ -1\ (\mathrm{mod}\ 10^{j}),\quad k\ge j',
  nega=T('$\\mathrm{mod}\\ 1000$ boʻyicha uchtadan koʻp toʻqqizli har bir koʻpaytuvchi '
         '$-1$ ga teng. Koʻpaytmada faqat dastlabki bir nechta va $(-1)$ ning darajasi qoladi.',
         'По $\\mathrm{mod}\\ 1000$ каждый множитель более чем из трёх девяток равен $-1$. '
         'В произведении остаются лишь первые несколько и степень $(-1)$.'),
  ref='2024 №17'),

I(nom=T('Tub sonlar va $\\mathrm{mod}\\ 3$', 'Простые числа и $\\mathrm{mod}\\ 3$'), tur='lemma',
  tex=r'p>3\ \Longrightarrow\ p^2\equiv1\ (\mathrm{mod}\ 3)',
  nega=T('Demak $p^4+3\\equiv1\\ (\\mathrm{mod}\\ 3)$ — bu tub boʻlishiga xalaqit bermaydi, '
         'lekin $p=3$ ni sinash kerak: $3^4+3=84$ tub emas, $p=2$: $2^4+3=19$ tub ✓ '
         '**Kichik tub sonlarni har doim alohida tekshiring.**',
         'Значит $p^4+3\\equiv1\\ (\\mathrm{mod}\\ 3)$ — это не мешает простоте, но нужно '
         'проверить $p=3$: $3^4+3=84$ не простое, а $p=2$: $2^4+3=19$ простое ✓ '
         '**Малые простые всегда проверяйте отдельно.**'),
  ref='2024 №2'),

I(nom=T('Boʻlinish alomatlari', 'Признаки делимости'),
  tex=T(r'3,9:\ \textstyle\sum\text{raqamlar};\qquad 11:\ \pm\textstyle\sum\text{raqamlar}',
        r'3,9:\ \textstyle\sum\text{цифр};\qquad 11:\ \pm\textstyle\sum\text{цифр}'),
  nega=T('Murakkab boʻluvchini oʻzaro tub koʻpaytuvchilarga ajrating: $72=8\\cdot9$.',
         'Разложите составной делитель на взаимно простые: $72=8\\cdot9$.')),

I(nom=T('Raqam sharti bilan sanash', 'Подсчёт с условием на цифру'),
  tex=r'\overline{abc}\ \vdots\ 9,\ c=9\ \Longrightarrow\ a+b\equiv0\ (\mathrm{mod}\ 9)',
  nega=T('Shartni raqamlar tenglamasiga aylantiring, soʻng mumkin boʻlgan $(a,b)$ '
         'juftliklarini sanang.',
         'Переведите условие в уравнение на цифры, затем считайте возможные пары $(a,b)$.'),
  ref='2024 №9'),

I(nom=T('Kub va raqamlar yigʻindisi', 'Куб и сумма цифр'),
  tex=r'\overline{aabc}=(a+b+c)^3,\qquad 1000\le n^3\le9999\ \Longrightarrow\ 10\le n\le21',
  nega=T('Kub toʻrt xonali boʻlgani uchun asos $10\\dots21$ — bor-yoʻgʻi $12$ ta variant. '
         'Har birini yozib, raqamlar yigʻindisi bilan solishtiring.',
         'Так как куб четырёхзначный, основание $10\\dots21$ — всего $12$ вариантов. '
         'Выпишите каждый и сравните с суммой цифр.'),
  ref='2024 №26'),

I(nom=T('Raqamlar koʻpaytmasi bilan iteratsiya', 'Итерация с произведением цифр'), tur='lemma',
  tex=(r'n\mapsto P(n)+c\ \Longrightarrow\ \text{davriy}',
      r'n\mapsto P(n)+c\ \Longrightarrow\ \text{периодично}'),
  nega=T('Bunday jarayon albatta davrga tushadi, chunki qiymatlar chegaralangan. '
         'Dastlabki $6$–$8$ qadamni yozing, davrni toping va indeksni davrga boʻling.',
         'Такой процесс обязательно зацикливается, так как значения ограничены. '
         'Выпишите первые $6$–$8$ шагов, найдите цикл и делите индекс на его длину.'),
  misol=T('$36\\to31\\to16\\to19\\to22\\to17\\to20\\to13\\to16$ — davr '
          '$16,19,22,17,20,13$, uzunligi $6$.',
          '$36\\to31\\to16\\to19\\to22\\to17\\to20\\to13\\to16$ — цикл '
          '$16,19,22,17,20,13$ длины $6$.'),
  ref='2024 №30'),

I(nom=T('Boʻluvchilar soni', 'Количество делителей'), tur='teorema',
  tex=r'\tau(n)=(\alpha_1+1)\cdots(\alpha_k+1)',
  nega=T('Toʻla kvadrat boʻluvchilar — barcha $\\alpha_i$ ni juftga cheklab sanaladi.',
         'Квадратные делители считаются ограничением всех $\\alpha_i$ чётными значениями.'),
  misol=T('$9800=2^3\\cdot5^2\\cdot7^2$: $2\\cdot2\\cdot2=8$ ta toʻla kvadrat boʻluvchi.',
          '$9800=2^3\\cdot5^2\\cdot7^2$: $2\\cdot2\\cdot2=8$ квадратных делителей.'),
  ref='2025/26-A №3'),

I(nom=T('Kasr natural boʻlishi sharti', 'Условие натуральности дроби'),
  tex=r'\frac{6^a15^b}{9^b10^c}=2^{\,a-c}3^{\,a-b}5^{\,b-c}',
  nega=T('Tub asoslarga yoying va har bir daraja manfiy emasligini talab qiling — '
         'tartiblash masalasi shu bilan yopiladi.',
         'Разложите по простым основаниям и потребуйте неотрицательности каждого показателя — '
         'задача на упорядочивание этим и закрывается.'),
  ref='2025/26-A №15'),

I(nom=T('Maxsus tub sonlar', 'Особые простые числа'),
  tex=r'\overline{ab}\ \text{tub va}\ a\ \text{tub}',
  nega=T('Bir xonali tub sonlar $2,3,5,7$ — faqat shu toʻrtta boshlanish. '
         'Har biri uchun ikki xonali tub sonlarni sanang.',
         'Однозначные простые — $2,3,5,7$, других начал нет. '
         'Для каждого перечислите двузначные простые.'),
  misol=T('$23,29,31,37,53,59,71,73,79$ — jami $9$ ta.',
          '$23,29,31,37,53,59,71,73,79$ — всего $9$.'),
  ref='2025/26-A №16'),

I(nom=T('Barcha raqamlari juft sonlar', 'Числа со всеми чётными цифрами'), tur='lemma',
  tex=(r'\text{4 xonali}:\ 4\cdot5^3=500\ \text{ta}',
      r'\text{4-значных}:\ 4\cdot5^3=500'),
  nega=T('Ketma-ket sonlar orasidagi eng katta «boʻshliq» minglar xonasi oshganda '
         'paydo boʻladi: $\\overline{2888}$ dan $\\overline{4000}$ gacha $1111$ ta son.',
         'Наибольший «промежуток» между такими числами возникает при смене тысяч: '
         'от $\\overline{2888}$ до $\\overline{4000}$ — $1111$ чисел.'),
  ref='2025/26-A №30'),
]))

SECTIONS.append(dict(key='geo', kod='C', ulush='18,3 %',
 nom=T('Geometriya', 'Геометрия'),
 izoh=T('Planimetriya. 11-sinfda vektorlar va aylanaga ichki chizilgan toʻrtburchak '
        'qoʻshiladi.',
        'Планиметрия. В 11 классе добавляются векторы и вписанный четырёхугольник.'),
 items=[

I(nom=T('Uchburchak burchaklari va tashqi burchak', 'Углы треугольника и внешний угол'),
  tex=(r'\alpha+\beta+\gamma=180^\circ,\qquad \angle_{\text{tashqi}}=\alpha+\beta',
      r'\alpha+\beta+\gamma=180^\circ,\qquad \angle_{\text{внеш}}=\alpha+\beta'),
  nega=T('Bissektrisa bilan: $\\angle AKB$ — $\\triangle BKC$ ning tashqi burchagi, '
         'demak $\\angle AKB=\\angle C+\\tfrac{\\angle B}{2}$.',
         'С биссектрисой: $\\angle AKB$ — внешний угол $\\triangle BKC$, '
         'значит $\\angle AKB=\\angle C+\\tfrac{\\angle B}{2}$.'),
  ref='2024 №4'),

I(nom=T('Sinuslar teoremasi', 'Теорема синусов'), tur='teorema',
  tex=r'\frac{a}{\sin\alpha}=\frac{b}{\sin\beta}=\frac{c}{\sin\gamma}=2R',
  nega=T('$R$ berilganda tomonlarni burchaklar orqali toping, soʻng '
         '$S=\\tfrac12ab\\sin\\gamma$.',
         'Если дан $R$, находите стороны через углы, затем $S=\\tfrac12ab\\sin\\gamma$.'),
  misol=T('Burchaklari $15^\\circ,60^\\circ,105^\\circ$ va $R$ berilgan uchburchakda '
          'tomonlar $2R\\sin\\alpha$ orqali, yuz esa ular bilan hisoblanadi.',
          'В треугольнике с углами $15^\\circ,60^\\circ,105^\\circ$ и данным $R$ стороны '
          'равны $2R\\sin\\alpha$, а через них находится площадь.'),
  ref='2024 №12'),

I(nom=T('Kosinuslar teoremasi', 'Теорема косинусов'), tur='teorema',
  tex=r'c^2=a^2+b^2-2ab\cos\gamma',
  nega=T('Kvadrat va burchak berilgan masalalarda uchinchi kesmani topadi.',
         'Находит третий отрезок в задачах с квадратом и данным углом.'),
  ref='2024 №15'),

I(nom=T('Yuz formulalari', 'Формулы площади'),
  tex=r'S=\tfrac12ab\sin\gamma=\tfrac{abc}{4R}=pr=\sqrt{p(p-a)(p-b)(p-c)}',
  nega=T('Burchak va $R$ berilganda birinchi ikkitasi eng qulay.',
         'Если даны угол и $R$, удобнее всего первые две.')),

I(nom=T('Ichki chizilgan toʻrtburchak', 'Вписанный четырёхугольник'), tur='teorema',
  tex=(r'\alpha+\gamma=180^\circ,\qquad \text{vatar}=2R\sin\tfrac{\text{yoy}}{2}',
      r'\alpha+\gamma=180^\circ,\qquad \text{хорда}=2R\sin\tfrac{\text{дуга}}{2}'),
  nega=T('Teng vatarlar teng yoylarga tayanadi. Yoylar yigʻindisi $360^\\circ$ — '
         'uchta tomon maʼlum boʻlsa, toʻrtinchi yoy shundan chiqadi.',
         'Равные хорды стягивают равные дуги. Сумма дуг $360^\\circ$ — если известны '
         'три стороны, четвёртая дуга находится отсюда.'),
  misol=T('$R=16$, uchta tomon $8$: $\\sin\\tfrac{\\theta}{2}=\\tfrac14$, '
          'toʻrtinchi yoy $360^\\circ-3\\theta$.',
          '$R=16$, три стороны по $8$: $\\sin\\tfrac{\\theta}{2}=\\tfrac14$, '
          'четвёртая дуга $360^\\circ-3\\theta$.'),
  ref='2024 №25'),

I(nom=T('Ichki chizilgan burchak va Fales', 'Вписанный угол и Фалес'), tur='teorema',
  tex=(r'\angle ABC=\tfrac12\overset{\frown}{AC},\qquad \text{diametr}\Rightarrow90^\circ',
      r'\angle ABC=\tfrac12\overset{\frown}{AC},\qquad \text{диаметр}\Rightarrow90^\circ'),
  nega=T('Diametrga tayangan burchak toʻgʻri — Pifagor bilan birga ishlatiladi.',
         'Угол, опирающийся на диаметр, прямой — работает вместе с Пифагором.'),
  ref='2025/26-A №27'),

I(nom=T('Nuqtaning aylanaga nisbatan darajasi', 'Степень точки относительно окружности'),
  tur='teorema',
  tex=r'PA\cdot PB=PC\cdot PD',
  nega=T('Diametr ustidagi nuqtadan vatargacha masofani topishda: '
         'koordinata usuli ham xuddi shunday tez ishlaydi.',
         'Для нахождения расстояния от точки на диаметре до хорды; '
         'координатный метод работает так же быстро.'),
  ref='2025/26-A №27'),

I(nom=T('Vektorlar yigʻindisi', 'Сумма векторов'), tur='lemma',
  tex=r'\left|\vec u+\vec v\right|^2=|\vec u|^2+|\vec v|^2+2|\vec u||\vec v|\cos\varphi',
  nega=T('$|\\vec{OA}|=|\\vec{OB}|=|\\vec{OC}|=R$ va $\\vec{OA}+\\vec{OB}=\\vec{OC}$ '
         'boʻlsa, kvadratga koʻtarib $\\cos\\varphi=-\\tfrac12$ chiqadi.',
         'Если $|\\vec{OA}|=|\\vec{OB}|=|\\vec{OC}|=R$ и $\\vec{OA}+\\vec{OB}=\\vec{OC}$, '
         'возведение в квадрат даёт $\\cos\\varphi=-\\tfrac12$.'),
  misol=T('$2R^2+2R^2\\cos\\varphi=R^2\\Rightarrow\\varphi=120^\\circ$.',
          '$2R^2+2R^2\\cos\\varphi=R^2\\Rightarrow\\varphi=120^\\circ$.'),
  ref='2024 №19'),

I(nom=T('Kvadrat va koordinata usuli', 'Квадрат и координатный метод'),
  tex=r'A(0;0),\ B(a;0),\ C(a;a),\ D(0;a)',
  nega=T('Kvadrat masalalarida koordinata kiritish deyarli har doim eng tez yoʻl. '
         'Bissektrisa $45^\\circ$ ostida — $y=x$.',
         'В задачах с квадратом ввод координат почти всегда самый быстрый путь. '
         'Биссектриса под $45^\\circ$ — прямая $y=x$.'),
  ref='2025/26-A №19'),

I(nom=T('Teng yonli uchburchak hosil boʻlishi', 'Возникновение равнобедренного треугольника'),
  tur='lemma',
  tex=r'\angle DCE=\angle DEC\ \Longrightarrow\ DE=DC',
  nega=T('Uchburchakda ikki burchak teng boʻlsa, ularga qarama-qarshi tomonlar teng. '
         'Kvadrat tomoni bilan birga bu yangi teng yonli uchburchak beradi.',
         'Если в треугольнике два угла равны, равны и противолежащие стороны. '
         'Вместе со стороной квадрата это даёт новый равнобедренный треугольник.'),
  misol=T('$DE=DC=AD$ va $\\angle ADE=168^\\circ$ dan $\\angle DAE=6^\\circ$.',
          'Из $DE=DC=AD$ и $\\angle ADE=168^\\circ$ следует $\\angle DAE=6^\\circ$.'),
  ref='2025/26-A №23'),

I(nom=T('Aylanalar yuzalari nisbati', 'Отношение площадей кругов'),
  tex=r'\frac{S_1}{S_2}=\left(\frac{d_1}{d_2}\right)^2',
  nega=T('Diametrlar nisbati berilsa, yuzalar nisbati uning kvadrati. '
         'Boʻyalgan qismni ayirma sifatida yozing.',
         'Если дано отношение диаметров, отношение площадей — его квадрат. '
         'Закрашенную часть записывайте как разность.'),
  misol=T('$AB:BC=3:2$, $AC=5k$: boʻyalmagan $\\tfrac{9+4}{25}=52\\,\\%$.',
          '$AB:BC=3:2$, $AC=5k$: незакрашено $\\tfrac{9+4}{25}=52\\,\\%$.'),
  ref='2025/26-A №14'),

I(nom=T('Segmentga ichki chizilgan kvadrat', 'Квадрат, вписанный в сегмент'),
  tex=(r'h=R-R\cos\tfrac{\alpha}{2},\qquad \text{yarim vatar}=R\sin\tfrac{\alpha}{2}',
      r'h=R-R\cos\tfrac{\alpha}{2},\qquad \text{полухорда}=R\sin\tfrac{\alpha}{2}'),
  nega=T('Markazdan kvadratning yuqori uchigacha masofani $R$ deb yozing va '
         'Pifagor bilan tomonni toping.',
         'Запишите расстояние от центра до верхней вершины квадрата как $R$ '
         'и найдите сторону по Пифагору.'),
  ref='2024 №27'),

I(nom=T('Bissektrisa va nisbat', 'Биссектриса и отношение'), tur='teorema',
  tex=r'\frac{AL}{LB}=\frac{CA}{CB}',
  nega=T('Toʻgʻri toʻrtburchakda $90^\\circ$ ning bissektrisasi $45^\\circ$ beradi — '
         'teng yonli toʻgʻri burchakli uchburchak hosil boʻladi.',
         'В прямоугольнике биссектриса угла $90^\\circ$ даёт $45^\\circ$ — '
         'возникает равнобедренный прямоугольный треугольник.'),
  ref='2025/26-A №19'),

I(nom=T('Uchburchak tengsizligi', 'Неравенство треугольника'),
  tex=r'|b-c|<a<b+c',
  nega=T('Yasash mumkinligini tekshirishda eng katta tomonni qolganlari bilan solishtiring.',
         'Проверяя возможность построения, сравнивайте наибольшую сторону с остальными.')),
]))

SECTIONS.append(dict(key='trig', kod='D', ulush='8,3 %',
 nom=T('Trigonometriya', 'Тригонометрия'),
 izoh=T('<b>Uch sinf ichida eng yuqori ulush.</b> Asosan keltirish formulalari, '
        'ifodani soddalashtirish va bitta ochiq savol.',
        '<b>Больше, чем в 9 и 10 классах.</b> В основном формулы приведения, '
        'упрощение выражений и одна открытая задача.'),
 items=[

I(nom=T('Asosiy ayniyatlar', 'Основные тождества'),
  tex=r'\sin^2\alpha+\cos^2\alpha=1,\qquad \tan\alpha=\frac{\sin\alpha}{\cos\alpha},'
      r'\qquad 1+\tan^2\alpha=\frac{1}{\cos^2\alpha}',
  nega=T('Uchinchisi $\\tan$ berilganda $\\cos$ ni topishning eng tez yoʻli.',
         'Третье — самый быстрый способ найти $\\cos$, когда дан $\\tan$.')),

I(nom=T('Keltirish formulalari', 'Формулы приведения'),
  tex=r'\sin(180^\circ-\alpha)=\sin\alpha,\qquad \cos(180^\circ-\alpha)=-\cos\alpha',
  tex2=r'\cos(90^\circ+\alpha)=-\sin\alpha,\qquad \sin(90^\circ+\alpha)=\cos\alpha,'
       r'\qquad \cos(-\alpha)=\cos\alpha',
  nega=T('**Qoida:** $90^\\circ$ va $270^\\circ$ da funksiya **nomi oʻzgaradi**, '
         '$180^\\circ$ va $360^\\circ$ da oʻzgarmaydi; ishora esa boshlangʻich '
         'burchakning choragiga qarab olinadi.',
         '**Правило:** при $90^\\circ$ и $270^\\circ$ **имя функции меняется**, '
         'при $180^\\circ$ и $360^\\circ$ — нет; знак берётся по четверти исходного угла.'),
  misol=T('$\\cos130^\\circ=-\\sin40^\\circ$, $\\sin160^\\circ=\\sin20^\\circ$, '
          '$\\cos(-110^\\circ)=-\\sin20^\\circ$ — hammasi juftlashib qisqaradi.',
          '$\\cos130^\\circ=-\\sin40^\\circ$, $\\sin160^\\circ=\\sin20^\\circ$, '
          '$\\cos(-110^\\circ)=-\\sin20^\\circ$ — всё попарно сокращается.'),
  ref='2024 №5'),

I(nom=T('Katta burchakni qisqartirish', 'Сокращение большого угла'),
  tex=r'2024^\circ=5\cdot360^\circ+224^\circ',
  nega=T('Avval $360^\\circ$ ga boʻlib qoldiqni oling, soʻng chorakni aniqlang. '
         '$224^\\circ$ — uchinchi chorak, demak $\\cos<0$.',
         'Сначала возьмите остаток от деления на $360^\\circ$, затем определите четверть. '
         '$224^\\circ$ — третья четверть, значит $\\cos<0$.'),
  ref='2024 №14'),

I(nom=T('Ildiz ostidan chiqishda modul', 'Модуль при извлечении корня'), tur='lemma',
  tex=r'\sqrt{\cos^{-2}\alpha}=\left|\frac{1}{\cos\alpha}\right|',
  nega=T('**11-sinfdagi eng koʻp xato.** Ildiz manfiy emas, shuning uchun modul paydo '
         'boʻladi; modulni ochishda burchak qaysi chorakda yotishini tekshiring.',
         '**Самая частая ошибка в 11 классе.** Корень неотрицателен, поэтому возникает '
         'модуль; раскрывая его, проверяйте четверть угла.'),
  ref='2024 №14'),

I(nom=T('Ikkilangan burchak', 'Двойной угол'),
  tex=r'\sin2\alpha=2\sin\alpha\cos\alpha,\qquad \cos2\alpha=1-2\sin^2\alpha=2\cos^2\alpha-1',
  tex2=r'\sin2\alpha=\frac{2\tan\alpha}{1+\tan^2\alpha}',
  nega=T('Ikkinchi qator $\\tan$ berilganda darhol javobga olib boradi.',
         'Вторая строка приводит к ответу сразу, если дан $\\tan$.')),

I(nom=T('Qiymatlar jadvali', 'Таблица значений'),
  tex=r'\sin30^\circ=\tfrac12,\ \sin45^\circ=\tfrac{\sqrt2}{2},\ \sin60^\circ=\tfrac{\sqrt3}{2}',
  tex2=r'\tan\tfrac{2\pi}{3}=-\sqrt3,\qquad \sin\left(-\tfrac{3\pi}{4}\right)=-\tfrac{\sqrt2}{2}',
  nega=T('Radianlarni gradusga oʻtkazing: $\\tfrac{2\\pi}{3}=120^\\circ$, '
         '$\\tfrac{3\\pi}{4}=135^\\circ$ — soʻng keltirish formulalari.',
         'Переводите радианы в градусы: $\\tfrac{2\\pi}{3}=120^\\circ$, '
         '$\\tfrac{3\\pi}{4}=135^\\circ$ — затем формулы приведения.'),
  ref='2024 №3'),

I(nom=T('Burchakni $\\cos$ orqali topish', 'Нахождение угла через $\\cos$'),
  tex=r'2\sqrt3\cos A=2\cos B=\sqrt3\ \Longrightarrow\ \cos A=\tfrac12,\ \cos B=\tfrac{\sqrt3}{2}',
  nega=T('Ikkita burchak topilgach uchinchisi $180^\\circ$ dan ayirish bilan chiqadi.',
         'Найдя два угла, третий получаете вычитанием из $180^\\circ$.'),
  ref='2024 №8'),

I(nom=T('$\\tan t+\\sin t=1$ tipidagi tenglama', 'Уравнение вида $\\tan t+\\sin t=1$'),
  tex=r'\frac{s}{c}+s=1\ \Longrightarrow\ c=\frac{s}{1-s},\qquad s^2+c^2=1',
  nega=T('$u=1-s$ almashtirish bilan **qaytma** tenglamaga keling: '
         '$u^4-2u^3+u^2-2u+1=0$; $u^2$ ga boʻlib $v=u+\\tfrac1u$ qoʻying, '
         '$v^2-2v-1=0$ chiqadi.',
         'Заменой $u=1-s$ приведите к **возвратному** уравнению '
         '$u^4-2u^3+u^2-2u+1=0$; разделив на $u^2$ и положив $v=u+\\tfrac1u$, '
         'получите $v^2-2v-1=0$.'),
  misol=T('$v=1+\\sqrt2$, va $\\sin2t=2(v-2)=2(\\sqrt2-1)$, demak '
          '$(\\sin2t+2)^2=(2\\sqrt2)^2=8$.',
          '$v=1+\\sqrt2$, и $\\sin2t=2(v-2)=2(\\sqrt2-1)$, значит '
          '$(\\sin2t+2)^2=(2\\sqrt2)^2=8$.'),
  ref='2024 №23'),

I(nom=T('Manfiy boʻlmagan hadlar yigʻindisi', 'Сумма неотрицательных слагаемых'), tur='lemma',
  tex=(r'(1-\sin x)+\sqrt{3y-x}=0\ \Longrightarrow\ \text{ikkalasi ham}\ 0',
      r'(1-\sin x)+\sqrt{3y-x}=0\ \Longrightarrow\ \text{оба равны}\ 0'),
  nega=T('$1-\\sin x\\ge0$ va ildiz $\\ge0$; yigʻindi nolga teng boʻlsa har biri nol. '
         'Bu tenglamani bir zumda yechadi.',
         '$1-\\sin x\\ge0$ и корень $\\ge0$; если сумма равна нулю, каждое равно нулю. '
         'Это решает уравнение мгновенно.'),
  misol=T('$\\sin x=1$ va $3y=x$; $0\\le x\\le\\pi$ da $x=\\tfrac{\\pi}{2}$, '
          '$y=\\tfrac{\\pi}{6}$, javob $2$.',
          '$\\sin x=1$ и $3y=x$; при $0\\le x\\le\\pi$: $x=\\tfrac{\\pi}{2}$, '
          '$y=\\tfrac{\\pi}{6}$, ответ $2$.'),
  ref='2025/26-A №12'),

I(nom=T('Trigonometriya geometriyada', 'Тригонометрия в геометрии'),
  tex=r'S=\tfrac12ab\sin\gamma,\qquad a=2R\sin\alpha,\qquad c^2=a^2+b^2-2ab\cos\gamma',
  nega=T('Burchaklari gʻalati ($15^\\circ$, $105^\\circ$) uchburchakda sinuslar '
         'teoremasi orqali tomonlarni chiqaring.',
         'В треугольнике с «неудобными» углами ($15^\\circ$, $105^\\circ$) находите '
         'стороны через теорему синусов.'),
  ref='2024 №12'),
]))

SECTIONS.append(dict(key='comb', kod='E', ulush='10,0 %',
 nom=T('Funksiyalar va ketma-ketliklar', 'Функции и последовательности'),
 izoh=T('Juftlik, davriylik va almashtirish; progressiyalar va rekurrent ketma-ketliklar.',
        'Чётность, периодичность и замена; прогрессии и рекуррентные последовательности.'),
 items=[

I(nom=T('Juft va toq funksiya', 'Чётная и нечётная функция'),
  tex=(r'\text{juft}:\ f(-x)=f(x)\ \Longrightarrow\ \text{toq darajalar koeffitsiyenti}=0',
      r'\text{чёт}:\ f(-x)=f(x)\ \Longrightarrow\ \text{коэффиц. нечётных степеней}=0'),
  nega=T('$f(x)=2x^4+(a-11)x^3+1$ juft boʻlishi uchun $a-11=0$, yaʼni $a=11$. '
         'Shundan keyin $f(1)$ oson.',
         'Чтобы $f(x)=2x^4+(a-11)x^3+1$ была чётной, нужно $a-11=0$, то есть $a=11$. '
         'После этого $f(1)$ находится легко.'),
  ref='2024 №7'),

I(nom=T('Davriylik', 'Периодичность'), tur='lemma',
  tex=r'f(x)=1-f(x-1)\ \Longrightarrow\ f(x)=f(x-2)',
  nega=T('Shartni **ikki marta** qoʻllang — davr $2$ chiqadi. Soʻng argumentlar '
         'ayirmasining juftligiga qarang.',
         'Примените условие **дважды** — получится период $2$. Затем смотрите на чётность '
         'разности аргументов.'),
  misol=T('$f(4)=6$ va $10-4=6$ juft, demak $f(10)=6$.',
          '$f(4)=6$, а $10-4=6$ чётно, значит $f(10)=6$.'),
  ref='2025/26-A №11'),

I(nom=T('Argumentni almashtirish', 'Замена аргумента'),
  tex=r'f(g(x))=h(x),\ u=g(x)\ \Longrightarrow\ f(u)=h\!\left(g^{-1}(u)\right)',
  nega=T('$f(1-x)=1-x^2$ da $u=1-x$, demak $x=1-u$ va '
         '$f(u)=1-(1-u)^2=2u-u^2$ — endi istalgan qiymatni qoʻying.',
         'В $f(1-x)=1-x^2$ положите $u=1-x$, тогда $x=1-u$ и '
         '$f(u)=1-(1-u)^2=2u-u^2$ — теперь подставляйте любое значение.'),
  misol=T('$f(-1)+f(0)+f(1)=(-3)+0+1=-2$.',
          '$f(-1)+f(0)+f(1)=(-3)+0+1=-2$.'),
  ref='2024 №16'),

I(nom=T('Arifmetik progressiya', 'Арифметическая прогрессия'),
  tex=r'a_n=a_1+(n-1)d,\qquad a_{m-k}+a_m+a_{m+k}=3a_m',
  nega=T('Uchta hadning yigʻindisi oʻrtadagisining uch barobari — bitta had darhol topiladi.',
         'Сумма трёх членов равна утроенному среднему — один член находится сразу.'),
  misol=T('$a_5+a_8+a_{11}=12\\Rightarrow a_8=4$; $a_7+a_{10}+a_{13}=18\\Rightarrow a_{10}=6$, '
          'demak $d=1$.',
          '$a_5+a_8+a_{11}=12\\Rightarrow a_8=4$; $a_7+a_{10}+a_{13}=18\\Rightarrow a_{10}=6$, '
          'значит $d=1$.'),
  ref='2025/26-A №6'),

I(nom=T('AP dan GP ga oʻtish', 'Переход от АП к ГП'),
  tex=r'a,\ a+d,\ a+2d+p,\ a+3d+q\ \text{--- GP}',
  nega=T('Dastlabki uchta had uchun $(a+d)^2=a(a+2d+p)$, oxirgi uchtasi uchun yana bitta '
         'tenglama. Sistemani yechib $d$ va $a$ topiladi.',
         'Для первых трёх членов $(a+d)^2=a(a+2d+p)$, для последних трёх — ещё одно '
         'уравнение. Решая систему, находят $d$ и $a$.'),
  misol=T('$d^2=3a$ va soddalashtirilgan ikkinchi tenglamadan $d=-9$, $a=27$; '
          'uchinchi had $9$.',
          'Из $d^2=3a$ и упрощённого второго уравнения $d=-9$, $a=27$; третий член $9$.'),
  ref='2025/26-A №20'),

I(nom=T('Rekurrent ketma-ketlik davriyligi', 'Периодичность рекуррентной последовательности'),
  tur='lemma',
  tex=T(r'x_n=\frac{x_{n-1}+1}{x_{n-2}}\ \Longrightarrow\ \text{davr}=5',
        r'x_n=\frac{x_{n-1}+1}{x_{n-2}}\ \Longrightarrow\ \text{период}=5'),
  nega=T('Dastlabki $6$–$7$ hadni yozing: $x_6=x_1$ va $x_7=x_2$ boʻlsa davr $5$. '
         'Soʻng indeksni $5$ ga boʻlib qoldiqqa qarang.',
         'Выпишите первые $6$–$7$ членов: если $x_6=x_1$ и $x_7=x_2$, период равен $5$. '
         'Затем делите индекс на $5$ и смотрите остаток.'),
  misol=T('$x_1=20$, $x_2=101$: $2025=5\\cdot405$, demak $x_{2025}=x_5=\\tfrac{21}{101}$.',
          '$x_1=20$, $x_2=101$: $2025=5\\cdot405$, значит $x_{2025}=x_5=\\tfrac{21}{101}$.'),
  ref='2025/26-A №28'),

I(nom=T('Geometrik progressiya', 'Геометрическая прогрессия'),
  tex=r'b_n=b_1q^{\,n-1},\qquad b_n^2=b_{n-1}b_{n+1},\qquad |q|<1:\ S=\frac{b_1}{1-q}',
  nega=T('Xarakteristik xossa uchta ketma-ket hadni bogʻlaydi — GP ekanini isbotlashda ishlatiladi.',
         'Характеристическое свойство связывает три соседних члена — используется '
         'для доказательства, что это ГП.')),

I(nom=T('Asosiy yigʻindilar', 'Основные суммы'),
  tex=r'\sum_{k=1}^{n}k=\frac{n(n+1)}{2},\qquad \sum_{k=1}^{n}(2k-1)=n^2',
  nega=T('Oxirgi raqam masalalarida uzun yigʻindini shu formulalar bilan qisqartiring.',
         'В задачах на последнюю цифру сворачивайте длинную сумму этими формулами.'),
  ref='2025/26-A №21'),

I(nom=T('Teleskoplash', 'Телескопирование'),
  tex=r'\sum\bigl(f(k+1)-f(k)\bigr)=f(n+1)-f(1),\qquad '
      r'\prod\frac{(k-1)(k+1)}{k}',
  nega=T('Yigʻindi uchun ayirma, koʻpaytma uchun nisbat shaklini izlang.',
         'Для суммы ищите форму разности, для произведения — отношения.'),
  ref='2025/26-A №26'),

I(nom=T('Funksiya qiymatlar sohasi', 'Область значений функции'),
  tex=r'y=\frac{k}{\sin x+c}\ \Longrightarrow\ \sin x\in[-1;1]',
  nega=T('Maxrajning chegaralarini oling; kasr kamayuvchi boʻlgani uchun chegaralar '
         'oʻrin almashadi.',
         'Возьмите границы знаменателя; так как дробь убывает, границы меняются местами.')),
]))

SECTIONS.append(dict(key='comb', kod='F', ulush='15,0 %',
 nom=T('Sanash va matn masalalari', 'Подсчёт и текстовые задачи'),
 izoh=T('Kombinatorika $8{,}3\\,\\%$ va matn masalalari $6{,}7\\,\\%$ — 11-sinfda matn '
        'masalalari 9- va 10-sinfdagidan koʻproq.',
        'Комбинаторика $8{,}3\\,\\%$ и текстовые задачи $6{,}7\\,\\%$ — текстовых в 11 классе '
        'больше, чем в 9 и 10.'),
 items=[

I(nom=T('Teskarisini sanash', 'Подсчёт дополнения'),
  tex=(r'N_{\text{kerakli}}=N_{\text{jami}}-N_{\text{teskari}}',
      r'N_{\text{нужных}}=N_{\text{всех}}-N_{\text{противоп.}}'),
  nega=T('«Kamida bitta» shartida «umuman yoʻq» ni sanash deyarli har doim tezroq.',
         'При условии «хотя бы один» считать «ни одного» почти всегда быстрее.'),
  misol=T('Toʻrt xonali sonlar $9000$ ta; barcha raqamlari toq boʻlganlari $5^4=625$, '
          'demak kamida bitta juft raqamlisi $8375$ ta.',
          'Четырёхзначных чисел $9000$; со всеми нечётными цифрами $5^4=625$, '
          'значит с хотя бы одной чётной — $8375$.'),
  ref='2024 №24'),

I(nom=T('Koʻpaytirish qoidasi', 'Правило произведения'),
  tex=r'N=n_1\cdot n_2\cdots n_k',
  nega=T('Raqamlar yigʻindisi berilgan sonlarni sanashda — '
         '«toʻsiqlar va sharlar»: $x_1+\\dots+x_k=n$ uchun $C_{n+k-1}^{\\,k-1}$.',
         'При подсчёте чисел с данной суммой цифр — «шары и перегородки»: '
         'для $x_1+\\dots+x_k=n$ это $C_{n+k-1}^{\\,k-1}$.'),
  ref='2025/26-A №8'),

I(nom=T('Dirixle prinsipi', 'Принцип Дирихле'), tur='teorema',
  tex=T(r'\text{«kafolatlash»}\ \Longrightarrow\ \text{eng yomon hol}+1',
        r'\text{«гарантировать»}\ \Longrightarrow\ \text{худший случай}+1'),
  nega=T('Barcha rangdan bittadan kerak boʻlsa: eng koʻp ikkita rangning **hammasini** '
         'olib, $+1$ qoʻshing.',
         'Если нужен хотя бы один каждого цвета: возьмите **все** шары двух самых частых '
         'цветов и прибавьте $1$.'),
  misol=T('$10+6+5$: eng yomoni $16$, demak $17$ ta shar kerak.',
          '$10+6+5$: худший случай $16$, значит нужно $17$ шаров.'),
  ref='2025/26-A №18'),

I(nom=T('Qoʻshish-ayirish prinsipi', 'Принцип включений-исключений'), tur='teorema',
  tex=(r'2x+3y=\textstyle\sum\text{tanlovlar},\qquad x+y=N',
      r'2x+3y=\textstyle\sum\text{выборов},\qquad x+y=N'),
  nega=T('«Har bir oʻquvchi kamida ikkita» shartida tanlovlar sonini **ikki xil** sanang — '
         'sistema chiqadi.',
         'В условии «каждый выбрал не меньше двух» посчитайте выборы **двумя способами** — '
         'получится система.'),
  misol=T('$14+15+16=45$ va $x+y=20$ dan $y=5$.',
          'Из $14+15+16=45$ и $x+y=20$ следует $y=5$.'),
  ref='2025/26-A №24'),

I(nom=T('Monoton jarayon', 'Монотонный процесс'), tur='lemma',
  tex=T(r'\text{hisob faqat ortadi}\ \Longrightarrow\ 0\le a\le A,\ 0\le b\le B',
        r'\text{счёт только растёт}\ \Longrightarrow\ 0\le a\le A,\ 0\le b\le B'),
  nega=T('Futbol hisobi kabi kamaymaydigan kattaliklarda oraliq qiymat yakuniydan '
         'oshmaydi — variantlar soni koʻpaytma bilan chiqadi.',
         'В невозрастающих величинах вроде футбольного счёта промежуточное значение '
         'не превосходит итогового — число вариантов даётся произведением.'),
  misol=T('$3{:}2$ uchun $4\\cdot3=12$ ta mumkin boʻlgan birinchi boʻlim hisobi.',
          'Для $3{:}2$ получается $4\\cdot3=12$ возможных счетов первого тайма.'),
  ref='2025/26-A №9'),

I(nom=T('Ball tizimi va tengsizlik', 'Система баллов и неравенство'),
  tex=r'B=3c-(n-c)=4c-n',
  nega=T('Toʻgʻri va notoʻgʻri javoblar sonini bitta oʻzgaruvchiga keltiring, '
         'soʻng tengsizlikni yeching va butun qismini oling.',
         'Сведите число верных и неверных ответов к одной переменной, затем решите '
         'неравенство и возьмите целую часть.'),
  misol=T('$4c-15<17\\Rightarrow c<8$, demak eng koʻpi bilan $7$ ta.',
          '$4c-15<17\\Rightarrow c<8$, значит не более $7$.'),
  ref='2025/26-A №10'),

I(nom=T('Hafta kunlari — $\\mathrm{mod}\\ 7$', 'Дни недели — $\\mathrm{mod}\\ 7$'),
  tex=(r'\text{haftalik norma}=25+6\cdot4=49',
      r'\text{недельная норма}=25+6\cdot4=49'),
  nega=T('Avval haftalik meʼyorni hisoblab toʻliq haftalar sonini toping, '
         'soʻng qolganini kun-ba-kun sanang.',
         'Сначала вычислите недельную норму и число полных недель, '
         'затем остаток считайте по дням.'),
  ref='2025/26-A №7'),

I(nom=T('Chiziqli sistemalar', 'Линейные системы'),
  tex=r'\begin{cases}q+4k=10\\ q+6k=13\end{cases}\ \Longrightarrow\ 2k=3',
  nega=T('Savol faqat ayirma yoki yigʻindini soʻrasa, tenglamalarni **ayirish** kifoya.',
         'Если спрашивают только разность или сумму, достаточно **вычесть** уравнения.'),
  ref='2025/26-A №2'),

I(nom=T('Ortiqcha va yetishmovchilik', 'Избыток и недостаток'),
  tex=r'A=n+7,\qquad 2n=A+16',
  nega=T('«Bittadan berilsa ortadi, ikkitadan berilsa yetmaydi» — ikki tenglama, '
         'bitta nomaʼlum yoʻqoladi.',
         '«По одному — остаётся, по два — не хватает» — два уравнения, одна неизвестная '
         'исключается.'),
  ref='2025/26-A №4'),
]))

_N = sum(len(x['items']) for x in SECTIONS)
_E = sum(1 for x in SECTIONS for i in x['items'] if i.get('misol'))
CHROME['spec'] = [
 T('<b>%d</b> ta formula' % _N, '<b>%d</b> формул' % _N),
 T('<b>%d</b> tasi misol bilan' % _E, '<b>%d</b> с примером' % _E),
 T('%d boʻlim' % len(SECTIONS), '%d разделов' % len(SECTIONS)),
 T('manba: 2 ta variant', 'источник: 2 варианта'),
]
