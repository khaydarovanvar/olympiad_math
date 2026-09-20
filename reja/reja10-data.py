# -*- coding: utf-8 -*-
T = lambda uz, ru: (uz, ru)

CHROME = dict(
 title=T('20 kunda tuman bosqichiga · 10-sinf', 'К районному этапу за 20 дней · 10 класс'),
 eyebrow=T('Fan olimpiadalari · tuman (shahar) bosqichi · 10-sinf',
           'Предметные олимпиады · районный (городской) этап · 10 класс'),
 h1=T('20 kunda tuman bosqichiga', 'К районному этапу за 20 дней'),
 sub=T('10-sinf matematika — kun-ba-kun tayyorgarlik rejasi, mavzular izohi va '
       'oʻtgan yillar savollari.',
       'Математика, 10 класс — план подготовки по дням, разбор тем и задачи прошлых лет.'),
 spec=[T('<b>30</b> savol', '<b>30</b> задач'), T('<b>90</b> daqiqa', '<b>90</b> минут'),
       T('<b>50</b> ball', '<b>50</b> баллов'),
       T('1–20 yopiq · 21–30 ochiq', '1–20 закрытые · 21–30 открытые')],
 h2a=T('Imtihon aslida nimani soʻraydi', 'Что спрашивают на самом деле'),
 h2b=T('Kun-ba-kun reja', 'План по дням'),
 h2c=T('Imtihon kuni taktikasi', 'Тактика в день экзамена'),
 note=T('Uchta haqiqiy variantdagi <b>90 ta savol</b> mavzu boʻyicha ajratildi: '
        '2025/26 tuman bosqichining ikki varianti (A va B) hamda 2024-yil. '
        '<b>9-sinfdan asosiy farq:</b> '
        'funksiyalar va funksional tenglamalar ulushi $3{,}4\\,\\%$ dan $8{,}9\\,\\%$ ga, '
        'trigonometriya esa $1{,}1\\,\\%$ dan $4{,}4\\,\\%$ ga koʻtarilgan — ularga alohida '
        'kun ajratilgan. Chiziq rangi mavzu qaysi bosqichda oʻtilishini koʻrsatadi.',
        '<b>90 задач</b> из трёх реальных вариантов (два варианта районного этапа '
        '2025/26 — A и B — и 2024) разбиты по темам. '
        '<b>Главное отличие от 9 класса:</b> доля функций и функциональных уравнений выросла '
        'с $3{,}4\\,\\%$ до $8{,}9\\,\\%$, а тригонометрии — с $1{,}1\\,\\%$ до $4{,}4\\,\\%$; '
        'под них отведены отдельные дни. Цвет полосы показывает, на каком этапе изучается тема.'),
 mashq=T('Mashq uchun savollar', 'Задачи для отработки'),
 namuna=T('Namuna', 'Пример'),
 src=T('<b>Manbalar:</b> 10-sinf tuman (shahar) bosqichi variantlari — 2025/2026, 2024/2025 '
       'va 2024-yil. Savol raqamlari shu variantlarga tegishli. Reja: Anvarbek Khaydarov.',
       '<b>Источники:</b> варианты районного (городского) этапа, 10 класс — 2025/2026, '
       '2024/2025 и 2024 год. Номера задач относятся к этим вариантам. '
       'План: Анварбек Хайдаров.'),
)

WEIGHTS = [
 (T('Algebra va ayniyatlar', 'Алгебра и тождества'), 26, 28.9, 'alg'),
 (T('Sonlar nazariyasi', 'Теория чисел'), 18, 20.0, 'nt'),
 (T('Geometriya', 'Геометрия'), 16, 17.8, 'geo'),
 (T('Kombinatorika va ehtimollik', 'Комбинаторика и вероятность'), 10, 11.1, 'comb'),
 (T('Funksiyalar', 'Функции'), 8, 8.9, 'comb'),
 (T('Ketma-ketliklar', 'Последовательности'), 6, 6.7, 'comb'),
 (T('Trigonometriya', 'Тригонометрия'), 4, 4.4, 'rev'),
 (T('Matn masalalari', 'Текстовые задачи'), 2, 2.2, 'rev'),
]

PHASES = [
 dict(key='alg', kunlar=T('1–5-kun', 'дни 1–5'),
   nom=T('1-bosqich · Algebra poydevori', 'Этап 1 · Фундамент алгебры'),
   izoh=T('<b>28,9 %</b> — eng katta blok. 10-sinfda algebraga logarifm, koʻphadlar va '
          'Nyuton ayniyatlari qoʻshiladi, shuning uchun 9-sinfdagidan kengroq.',
          '<b>28,9 %</b> — самый большой блок. В 10 классе к алгебре добавляются логарифмы, '
          'многочлены и тождества Ньютона, поэтому он шире, чем в 9 классе.')),
 dict(key='nt', kunlar=T('6–9-kun', 'дни 6–9'),
   nom=T('2-bosqich · Sonlar nazariyasi', 'Этап 2 · Теория чисел'),
   izoh=T('<b>20 %</b>. 9-sinfdagiga qaraganda biroz kam, lekin 2025/26 variantida 9 ta '
          'savol bergan — yiliga sezilarli tebranadi, shuning uchun toʻliq oʻtiladi.',
          '<b>20 %</b>. Немного меньше, чем в 9 классе, но в варианте 2025/26 дал 9 задач — '
          'доля заметно колеблется по годам, поэтому блок проходится полностью.')),
 dict(key='geo', kunlar=T('10–13-kun', 'дни 10–13'),
   nom=T('3-bosqich · Geometriya', 'Этап 3 · Геометрия'),
   izoh=T('<b>17,8 %</b>. Planimetriya, lekin 9-sinfdan farqli oʻlaroq koordinata usuli va '
          'yuzalar nisbati koʻproq soʻraladi.',
          '<b>17,8 %</b>. Планиметрия, но в отличие от 9 класса чаще спрашивают '
          'координатный метод и отношения площадей.')),
 dict(key='comb', kunlar=T('14–17-kun', 'дни 14–17'),
   nom=T('4-bosqich · Funksiyalar, ketma-ketliklar, kombinatorika',
         'Этап 4 · Функции, последовательности, комбинаторика'),
   izoh=T('<b>26,7 %</b> — birgalikda algebradan ham katta. Funksional tenglamalar va '
          'ehtimollik aynan 10-sinfda paydo boʻladi va deyarli hammasi 21–30 blokida.',
          '<b>26,7 %</b> — вместе больше, чем алгебра. Функциональные уравнения и вероятность '
          'появляются именно в 10 классе и почти все — в блоке 21–30.')),
 dict(key='rev', kunlar=T('18–20-kun', 'дни 18–20'),
   nom=T('5-bosqich · Trigonometriya va sinov', 'Этап 5 · Тригонометрия и пробники'),
   izoh=T('Trigonometriya yopiladi, soʻng ikkita toʻliq sinov imtihoni 90 daqiqada '
          'oʻtkaziladi va xato daftari boʻyicha zaif mavzular takrorlanadi.',
          'Закрывается тригонометрия, затем два полных пробных экзамена по 90 минут '
          'и повторение слабых тем по тетради ошибок.')),
]

D = lambda **k: k
KUNLAR = [

D(n=1, ph='alg',
 mavzu=T('Ayniyatlar va simmetrik ifodalar', 'Тождества и симметрические выражения'),
 nega=T('Uch yilda 6 marta: $x+y+z$, $x^2+y^2+z^2$ berilib, yuqori darajalar soʻraladi.',
        'За три года 6 раз: даны $x+y+z$, $x^2+y^2+z^2$, а спрашивают высшие степени.'),
 gap=[T('$(a+b+c)^2=a^2+b^2+c^2+2(ab+bc+ca)$ — $e_1$ va $e_2$ ni bogʻlaydi',
        '$(a+b+c)^2=a^2+b^2+c^2+2(ab+bc+ca)$ — связывает $e_1$ и $e_2$'),
      T('$a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$',
        '$a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$'),
      T('<b>Nyuton ayniyati:</b> $p_k=e_1p_{k-1}-e_2p_{k-2}+e_3p_{k-3}$ — yuqori darajalarga '
        'zinapoya',
        '<b>Тождество Ньютона:</b> $p_k=e_1p_{k-1}-e_2p_{k-2}+e_3p_{k-3}$ — лестница '
        'к высшим степеням'),
      T('$(a-b)^2+(b-c)^2+(c-a)^2$ va $(a+b)^2+\\dots$ — qoʻshib/ayirib $\\sum ab$ topiladi',
        '$(a-b)^2+(b-c)^2+(c-a)^2$ и $(a+b)^2+\\dots$ — сложением/вычитанием находят $\\sum ab$')],
 misol=T('<b>2025/26-B №26.</b> $x+y+z=1$, $\\sum x^2=2$, $\\sum x^3=3$. Unda $e_1=1$, '
         '$e_2=-\\tfrac12$, $e_3=\\tfrac16$, va Nyuton boʻyicha '
         '$p_4=e_1p_3-e_2p_2+e_3p_1=3+1+\\tfrac16=\\tfrac{25}{6}$.',
         '<b>2025/26-B №26.</b> $x+y+z=1$, $\\sum x^2=2$, $\\sum x^3=3$. Тогда $e_1=1$, '
         '$e_2=-\\tfrac12$, $e_3=\\tfrac16$, и по Ньютону '
         '$p_4=e_1p_3-e_2p_2+e_3p_1=3+1+\\tfrac16=\\tfrac{25}{6}$.'),
 mashq=['2025/26-B №26', '2025/26-B №2', '2024 №13', '2024 №24', '2025/26-A №7']),

D(n=2, ph='alg',
 mavzu=T('Kvadrat tenglama, Viyet va parametr', 'Квадратное уравнение, Виет и параметр'),
 nega=T('Viyet + parametr har yili 2–3 savol; «yagona yechim» shartida ODZ unutiladi.',
        'Виет и параметр — 2–3 задачи каждый год; в условии «единственное решение» забывают ОДЗ.'),
 gap=[T('$x_1+x_2=-\\tfrac{b}{a}$, $x_1x_2=\\tfrac{c}{a}$ — ildizlarni topmasdan ishlang',
        '$x_1+x_2=-\\tfrac{b}{a}$, $x_1x_2=\\tfrac{c}{a}$ — работайте, не находя корней'),
      T('Ildizlar <b>oʻzlari orqali</b> berilsa, Viyetdan ikki tenglama tuziladi',
        'Если корни заданы <b>через параметры</b>, из Виета получаются два уравнения'),
      T('<b>Parametr:</b> kasrli tenglamada ODZ ($x\\ne$ maxraj nollari) yechimni kamaytiradi',
        '<b>Параметр:</b> в дробном уравнении ОДЗ ($x\\ne$ нули знаменателя) убирает решения'),
      T('$D$ toʻla kvadrat ⟺ ildizlar ratsional; $D=0$ ⟺ karrali ildiz',
        '$D$ — полный квадрат ⟺ корни рациональны; $D=0$ ⟺ кратный корень')],
 misol=T('<b>2024 №15.</b> $x_1=p+2q$, $x_2=4p+7q$ — $x^2+px+q=0$ ildizlari. '
         'Yigʻindidan $5p+9q=-p$, yaʼni $2p+3q=0$; koʻpaytmadan $\\tfrac{q^2}{2}=q$. '
         '$p\\ne0$ boʻlgani uchun $q=2$, $p=-3$, demak $p+q=-1$.',
         '<b>2024 №15.</b> $x_1=p+2q$, $x_2=4p+7q$ — корни $x^2+px+q=0$. '
         'Из суммы $5p+9q=-p$, то есть $2p+3q=0$; из произведения $\\tfrac{q^2}{2}=q$. '
         'Так как $p\\ne0$, получаем $q=2$, $p=-3$, значит $p+q=-1$.'),
 mashq=['2024 №15', '2024 №2', '2024 №26', '2025/26-A №7', '2025/26-A №22']),

D(n=3, ph='alg',
 mavzu=T('Modul, butun va kasr qism', 'Модуль, целая и дробная часть'),
 nega=T('Butun qism 10-sinfda kuchayadi: uch yilda 4 ta savol, koʻpi ochiq blokda.',
        'Целая часть в 10 классе усиливается: 4 задачи за три года, чаще в открытом блоке.'),
 gap=[T('$x=[x]+\\{x\\}$, $0\\le\\{x\\}<1$ — $[\\,\\cdot\\,]=n$ deb belgilab, qoʻsh '
        'tengsizlik yeching',
        '$x=[x]+\\{x\\}$, $0\\le\\{x\\}<1$ — обозначьте $[\\,\\cdot\\,]=n$ и решайте '
        'двойное неравенство'),
      T('$\\{n-\\sqrt n\\}+\\{n+\\sqrt n\\}=1$, agar $n$ toʻla kvadrat boʻlmasa; aks holda $0$',
        '$\\{n-\\sqrt n\\}+\\{n+\\sqrt n\\}=1$, если $n$ не полный квадрат; иначе $0$'),
      T('$|u|=|v|\\iff u=\\pm v$; modulli tenglamada hollarni <b>oraliqlarga</b> boʻling',
        '$|u|=|v|\\iff u=\\pm v$; в уравнении с модулем разбивайте на <b>промежутки</b>'),
      T('$\\lfloor x\\rfloor$ qatnashgan tenglamada $x$ ni $n$ orqali ifodalab, '
        '$n\\le x<n+1$ ni tekshiring',
        'В уравнении с $\\lfloor x\\rfloor$ выразите $x$ через $n$ и проверьте $n\\le x<n+1$')],
 misol=T('<b>2025/26-B №3.</b> $n$ toʻla kvadrat boʻlmasa $\\{n-\\sqrt n\\}+\\{n+\\sqrt n\\}=1$. '
         '$n=2\\dots2025$ — $2024$ ta son, ulardan $2^2\\dots45^2$ — $44$ tasi kvadrat. '
         'Yigʻindi $2024-44=1980$.',
         '<b>2025/26-B №3.</b> Если $n$ не полный квадрат, то '
         '$\\{n-\\sqrt n\\}+\\{n+\\sqrt n\\}=1$. Среди $n=2\\dots2025$ ($2024$ чисел) '
         'полных квадратов $2^2\\dots45^2$ — их $44$. Сумма $2024-44=1980$.'),
 mashq=['2025/26-B №3', '2025/26-B №25', '2024 №20', '2024 №23']),

D(n=4, ph='alg',
 mavzu=T('Tengsizliklar, AM–GM va ekstremum', 'Неравенства, AM–GM и экстремум'),
 nega=T('«Eng kichik qiymatni toping» — ochiq blokning odatdagi savoli.',
        '«Найдите наименьшее значение» — типичная задача открытого блока.'),
 gap=[T('<b>AM–GM:</b> $a+\\tfrac{k}{a}\\ge2\\sqrt k$, tenglik $a=\\sqrt k$ da',
        '<b>AM–GM:</b> $a+\\tfrac{k}{a}\\ge2\\sqrt k$, равенство при $a=\\sqrt k$'),
      T('Shartlarni <b>bitta oʻzgaruvchiga</b> keltiring — soʻng AM–GM yoki parabola uchi',
        'Сведите условия <b>к одной переменной</b> — затем AM–GM или вершина параболы'),
      T('Qoʻsh tengsizlik $A\\le x^2\\le B$ — ikkita tengsizlikning kesishmasi',
        'Двойное неравенство $A\\le x^2\\le B$ — пересечение двух неравенств'),
      T('Kasrli va ildizli tengsizlikda ODZ birinchi, maxrajni koʻpaytirish — hech qachon',
        'В дробных и иррациональных неравенствах сначала ОДЗ, умножать на знаменатель — никогда')],
 misol=T('<b>2024 №21.</b> $ab=6$, $bc=15$ dan $a=\\tfrac6b$, $c=\\tfrac{15}b$. Unda '
         '$a+b+2c=b+\\tfrac{36}{b}\\ge2\\sqrt{36}=12$, tenglik $b=6$ da.',
         '<b>2024 №21.</b> Из $ab=6$, $bc=15$: $a=\\tfrac6b$, $c=\\tfrac{15}b$. Тогда '
         '$a+b+2c=b+\\tfrac{36}{b}\\ge2\\sqrt{36}=12$, равенство при $b=6$.'),
 mashq=['2024 №21', '2024 №4', '2024 №11', '2025/26-A №9', '2025/26-B №22', '2025/26-B №15']),

D(n=5, ph='alg',
 mavzu=T('Logarifm, koʻrsatkich va koʻphadlar', 'Логарифмы, степени и многочлены'),
 nega=T('10-sinfda qoʻshiladigan yangi mavzu; koʻphadlarga boʻlinish ochiq blokda uchraydi.',
        'Новая тема 10 класса; делимость многочленов встречается в открытом блоке.'),
 gap=[T('$\\log_a(xy)=\\log_a x+\\log_a y$, $\\log_a x^k=k\\log_a x$, '
        '$\\log_a b=\\tfrac{\\log_c b}{\\log_c a}$',
        '$\\log_a(xy)=\\log_a x+\\log_a y$, $\\log_a x^k=k\\log_a x$, '
        '$\\log_a b=\\tfrac{\\log_c b}{\\log_c a}$'),
      T('<b>Kub ayniyati:</b> $(a-b)^3=a^3-b^3-3ab(a-b)$ — $r-\\tfrac1r$ tipidagi masalalar uchun',
        '<b>Тождество куба:</b> $(a-b)^3=a^3-b^3-3ab(a-b)$ — для задач вида $r-\\tfrac1r$'),
      T('<b>Koʻphadga boʻlinish:</b> $x^2-x+1=0$ ildizi $\\omega$ uchun $\\omega^3=-1$ — '
        'darajalarni qisqartiring',
        '<b>Делимость многочленов:</b> для корня $\\omega$ уравнения $x^2-x+1=0$ имеем '
        '$\\omega^3=-1$ — так понижают степени'),
      T('Koʻphadni yoyishda kerakli daraja koeffitsiyenti — multinomial hadni sanash',
        'При раскрытии многочлена коэффициент нужной степени — подсчёт мультиномиального члена')],
 misol=T('<b>2025/26-B №7.</b> $\\sqrt[3]{r}-\\tfrac1{\\sqrt[3]{r}}=1$. Kubga koʻtarsak '
         '$r-\\tfrac1r-3=1$, yaʼni $r-\\tfrac1r=4$. Unda '
         '$r^3-\\tfrac1{r^3}=4^3+3\\cdot4=76$.',
         '<b>2025/26-B №7.</b> $\\sqrt[3]{r}-\\tfrac1{\\sqrt[3]{r}}=1$. Возведя в куб, '
         '$r-\\tfrac1r-3=1$, то есть $r-\\tfrac1r=4$. Тогда '
         '$r^3-\\tfrac1{r^3}=4^3+3\\cdot4=76$.'),
 mashq=['2025/26-B №7', '2025/26-B №19', '2025/26-A №5', '2025/26-A №21', '2025/26-A №29', '2024 №1']),

D(n=6, ph='nt',
 mavzu=T('Boʻlinish, raqamlar va qoldiqlar', 'Делимость, цифры и остатки'),
 nega=T('Yulduzchali sonlar va raqamli shartlar — har yili 1–2 savol.',
        'Числа со звёздочками и условия на цифры — 1–2 задачи каждый год.'),
 gap=[T('$72=8\\cdot9$ — alohida $8$ ga (oxirgi $3$ raqam) va $9$ ga (raqamlar yigʻindisi) tekshiring',
        '$72=8\\cdot9$ — проверяйте отдельно на $8$ (три последние цифры) и на $9$ (сумма цифр)'),
      T('$11$ ga boʻlinish: navbatlashuvchi yigʻindi $0$ yoki $\\pm11$ ga karrali',
        'Делимость на $11$: знакочередующаяся сумма кратна $0$ или $\\pm11$'),
      T('Oxirgi raqam davri $4$; oxirgi ikki raqam — $\\mathrm{mod}\\ 100$, davr $20$',
        'Период последней цифры $4$; две последние — $\\mathrm{mod}\\ 100$, период $20$'),
      T('Ketma-ket $k$ ta sonning koʻpaytmasi $k!$ ga boʻlinadi',
        'Произведение $k$ последовательных чисел делится на $k!$')],
 misol=T('<b>2024 №19.</b> $n(n+1)(n+2)$ har doim $6$ ga boʻlinadi; $12$ ga boʻlinishi uchun '
         'qoʻshimcha $4\\mid$ koʻpaytma kerak — bu $n\\not\\equiv1\\ (\\mathrm{mod}\\ 4)$ '
         'boʻlganda bajariladi. $n=1\\dots98$ dan $98-24=74$ ta.',
         '<b>2024 №19.</b> $n(n+1)(n+2)$ всегда делится на $6$; для делимости на $12$ нужно '
         'дополнительно $4\\mid$ произведение — это выполняется при '
         '$n\\not\\equiv1\\ (\\mathrm{mod}\\ 4)$. Из $n=1\\dots98$ таких $98-24=74$.'),
 mashq=['2024 №19', '2024 №29', '2024 №17', '2025/26-A №1', '2025/26-B №28']),

D(n=7, ph='nt',
 mavzu=T('Boʻluvchilar, tub sonlar, EKUB', 'Делители, простые числа, НОД'),
 nega=T('«Nechta boʻluvchisi bor» — uch yilda 5 marta, shu jumladan kvadrat va kub boʻluvchilar.',
        '«Сколько делителей» — 5 раз за три года, в том числе квадратные и кубические делители.'),
 gap=[T('$\\tau(n)=\\prod(\\alpha_i+1)$; toʻla kvadrat boʻluvchilar — $\\alpha_i$ juft',
        '$\\tau(n)=\\prod(\\alpha_i+1)$; квадратные делители — $\\alpha_i$ чётные'),
      T('Kvadrat <b>yoki</b> kub boʻluvchilar — qoʻshish-ayirish: $|A|+|B|-|A\\cap B|$ '
        '(kesishma — $6$-darajalar)',
        'Квадратные <b>или</b> кубические делители — включения-исключения: $|A|+|B|-|A\\cap B|$ '
        '(пересечение — шестые степени)'),
      T('<b>EKUB hiylasi:</b> $d\\mid A$ va $d\\mid B$ boʻlsa, $d\\mid \\alpha A+\\beta B$ — '
        'oʻzgaruvchini yoʻqotadigan kombinatsiya tuzing',
        '<b>Приём для НОД:</b> если $d\\mid A$ и $d\\mid B$, то $d\\mid \\alpha A+\\beta B$ — '
        'составьте комбинацию, убивающую переменную'),
      T('$v_p(n!)=\\lfloor n/p\\rfloor+\\lfloor n/p^2\\rfloor+\\cdots$ (Lежandr)',
        '$v_p(n!)=\\lfloor n/p\\rfloor+\\lfloor n/p^2\\rfloor+\\cdots$ (Лежандр)')],
 misol=T('<b>2025/26-B №16.</b> $d=\\mathrm{EKUB}(30m+n,\\ 15n+2m)$ boʻlsin. Unda '
         '$d\\mid 15(30m+n)-(15n+2m)=448m$ va $d\\mid 30(15n+2m)-2(30m+n)=448n$. '
         '$\\gcd(m,n)=1$ boʻlgani uchun $d\\mid448$ — eng kattasi $448$.',
         '<b>2025/26-B №16.</b> Пусть $d=\\mathrm{НОД}(30m+n,\\ 15n+2m)$. Тогда '
         '$d\\mid 15(30m+n)-(15n+2m)=448m$ и $d\\mid 30(15n+2m)-2(30m+n)=448n$. '
         'Так как $\\gcd(m,n)=1$, то $d\\mid448$ — наибольшее $448$.'),
 mashq=['2025/26-B №16', '2025/26-B №10', '2025/26-A №6', '2025/26-A №8', '2025/26-A №11']),

D(n=8, ph='nt',
 mavzu=T('Diofant tenglamalari', 'Диофантовы уравнения'),
 nega=T('Har yili 1–2 ta; 10-sinfda koʻproq «nechta butun juftlik» koʻrinishida.',
        '1–2 каждый год; в 10 классе чаще в виде «сколько целых пар».'),
 gap=[T('Bitta oʻzgaruvchini ajrating: $y=\\dfrac{f(x)}{g(x)}$ — soʻng butun qism ajratish',
        'Выразите одну переменную: $y=\\dfrac{f(x)}{g(x)}$ — затем выделите целую часть'),
      T('<b>Simon hiylasi:</b> $(\;)(\;)=N$ ga keltirib, $N$ ning boʻluvchilarini saralang',
        '<b>Приём Симона:</b> приведите к $(\;)(\;)=N$ и переберите делители $N$'),
      T('<b>Qoldiq bilan cheklash:</b> $\\mathrm{mod}\\ 3,4,8$ boʻyicha qarama-qarshilik',
        '<b>Ограничение остатками:</b> противоречие по $\\mathrm{mod}\\ 3,4,8$'),
      T('<b>Chegaralash:</b> kvadratni toʻldirib, $n^2\\le\\text{const}$ ga keltiring',
        '<b>Оценка:</b> выделив квадрат, сведите к $n^2\\le\\text{const}$')],
 misol=T('<b>2024 №27.</b> $\\dfrac{35+2n}{3n+1}$ butun. $3$ ga koʻpaytiramiz: '
         '$\\dfrac{105+6n}{3n+1}=2+\\dfrac{103}{3n+1}$. Demak $(3n+1)\\mid103$, '
         '$103$ tub: $3n+1\\in\\{1;103\\}$ — natural $n$ uchun $3n+1=103$, $n=34$ — <b>1 ta</b>.',
         '<b>2024 №27.</b> $\\dfrac{35+2n}{3n+1}$ целое. Умножим на $3$: '
         '$\\dfrac{105+6n}{3n+1}=2+\\dfrac{103}{3n+1}$. Значит $(3n+1)\\mid103$, а $103$ '
         'простое: $3n+1\\in\\{1;103\\}$ — для натурального $n$ подходит $n=34$ — <b>1</b>.'),
 mashq=['2024 №27', '2025/26-B №12', '2025/26-B №17', '2025/26-A №26', '2025/26-A №16']),

D(n=9, ph='nt',
 mavzu=T('Sonlar nazariyasi — aralash mashq', 'Теория чисел — смешанная практика'),
 nega=T('Blokni mustahkamlash; ochiq savollarga urgʻu.',
        'Закрепление блока; упор на открытые задачи.'),
 gap=[T('50 daqiqada 15 ta aralash savol', '15 смешанных задач за 50 минут'),
      T('Har bir savolda avval <b>qaysi vosita</b> kerakligini ayting',
        'К каждой задаче сначала назовите <b>инструмент</b>'),
      T('Xato daftaridagi 6–8-kun xatolari qayta ishlanadi',
        'Прорабатываются ошибки дней 6–8 из тетради ошибок'),
      T('Ogʻzaki: $100$ gacha tub sonlar, $2$ ning darajalari $2^{12}$ gacha',
        'Устно: простые до $100$, степени двойки до $2^{12}$')],
 misol=T('', ''),
 mashq=['2025/26-A №1, 2, 4, 6, 8, 11, 16, 24, 26', '2025/26-B №10, 12, 16, 17, 28']),

D(n=10, ph='geo',
 mavzu=T('Uchburchak: yuz formulalari va metrik munosabatlar',
         'Треугольник: формулы площади и метрические соотношения'),
 nega=T('Har yili 2–3 savol; $S=\\tfrac{abc}{4R}$ va balandlik munosabatlari eng koʻp keraklisi.',
        '2–3 задачи каждый год; чаще всего нужны $S=\\tfrac{abc}{4R}$ и соотношения с высотой.'),
 gap=[T('$S=\\tfrac12ab\\sin\\gamma=\\sqrt{p(p-a)(p-b)(p-c)}=pr=\\tfrac{abc}{4R}$',
        '$S=\\tfrac12ab\\sin\\gamma=\\sqrt{p(p-a)(p-b)(p-c)}=pr=\\tfrac{abc}{4R}$'),
      T('<b>Toʻgʻri burchakli uchburchakda:</b> $h^2=pq$, $a^2=c\\cdot p$, $S=\\tfrac12 ch$',
        '<b>В прямоугольном треугольнике:</b> $h^2=pq$, $a^2=c\\cdot p$, $S=\\tfrac12 ch$'),
      T('Sinuslar teoremasi $\\tfrac{a}{\\sin\\alpha}=2R$ — burchak berilganda $R$ ni beradi',
        'Теорема синусов $\\tfrac{a}{\\sin\\alpha}=2R$ — даёт $R$, когда известен угол'),
      T('Kosinuslar teoremasi — uchinchi tomon yoki burchakni topishda',
        'Теорема косинусов — для третьей стороны или угла')],
 misol=T('<b>2024 №30.</b> $h=6$, proyeksiyalar ayirmasi $p-q=5$ va $pq=h^2=36$. '
         'Unda $(p+q)^2=25+144=169$, $c=p+q=13$, demak $S=\\tfrac12\\cdot13\\cdot6=39$.',
         '<b>2024 №30.</b> $h=6$, разность проекций $p-q=5$ и $pq=h^2=36$. '
         'Тогда $(p+q)^2=25+144=169$, $c=p+q=13$, значит $S=\\tfrac12\\cdot13\\cdot6=39$.'),
 mashq=['2024 №30', '2024 №16', '2025/26-B №5', '2025/26-A №18']),

D(n=11, ph='geo',
 mavzu=T('Oʻxshashlik va yuzalar nisbati', 'Подобие и отношения площадей'),
 nega=T('10-sinfning eng xarakterli geometriya savoli: parallel chiziqlar va yuzalar.',
        'Самая характерная геометрическая задача 10 класса: параллельные прямые и площади.'),
 gap=[T('Oʻxshash figuralarda $\\dfrac{S_1}{S_2}=k^2$',
        'У подобных фигур $\\dfrac{S_1}{S_2}=k^2$'),
      T('Asosga parallel chiziq oʻxshash uchburchak kesadi: $\\dfrac{S_{\\text{kichik}}}'
        '{S_{ABC}}=\\left(\\dfrac{CK}{CA}\\right)^2$',
        'Прямая, параллельная основанию, отсекает подобный треугольник: '
        '$\\dfrac{S_{\\text{мал}}}{S_{ABC}}=\\left(\\dfrac{CK}{CA}\\right)^2$'),
      T('Bir xil balandlikdagi uchburchaklar yuzalari asoslarga proporsional',
        'Площади треугольников с общей высотой пропорциональны основаниям'),
      T('Ichki nuqtadan parallel chiziqlar: $\\sqrt{S}=\\sqrt{S_1}+\\sqrt{S_2}+\\sqrt{S_3}$',
        'Параллельные через внутреннюю точку: $\\sqrt{S}=\\sqrt{S_1}+\\sqrt{S_2}+\\sqrt{S_3}$')],
 misol=T('<b>2025/26-B №27.</b> Ichki nuqtadan asoslarga parallel chiziqlar yuzalari '
         '$2$, $6$, $18$ boʻlgan uchburchaklarni hosil qiladi. Unda '
         '$\\sqrt{S}=\\sqrt2+\\sqrt6+\\sqrt{18}$, demak '
         '$S=\\left(4\\sqrt2+\\sqrt6\\right)^2=38+16\\sqrt3$.',
         '<b>2025/26-B №27.</b> Прямые через внутреннюю точку отсекают треугольники '
         'с площадями $2$, $6$, $18$. Тогда $\\sqrt{S}=\\sqrt2+\\sqrt6+\\sqrt{18}$, '
         'значит $S=\\left(4\\sqrt2+\\sqrt6\\right)^2=38+16\\sqrt3$.'),
 mashq=['2025/26-B №27', '2024 №12', '2025/26-A №17', '2025/26-A №27']),

D(n=12, ph='geo',
 mavzu=T('Aylana va ichki chizilgan figuralar', 'Окружность и вписанные фигуры'),
 nega=T('Har yili 1–2 savol; trapetsiyaga ichki chizilgan aylana takrorlanadi.',
        '1–2 задачи каждый год; повторяется окружность, вписанная в трапецию.'),
 gap=[T('Ichki chizilgan burchak $=\\tfrac12$ yoy; diametrga tayansa $90^\\circ$',
        'Вписанный угол $=\\tfrac12$ дуги; опирающийся на диаметр — $90^\\circ$'),
      T('<b>Trapetsiyaga aylana ichki chizilsa:</b> $a+c=b+d$ va $h=2r$',
        '<b>Если в трапецию вписана окружность:</b> $a+c=b+d$ и $h=2r$'),
      T('Teng yonli trapetsiyada $AB=CD=\\tfrac{a+b}{2}$ (aylana ichki chizilganda)',
        'В равнобедренной трапеции $AB=CD=\\tfrac{a+b}{2}$ (при вписанной окружности)'),
      T('Nuqtaning darajasi $PA\\cdot PB=PC\\cdot PD$; urinma $PT^2=PA\\cdot PB$',
        'Степень точки $PA\\cdot PB=PC\\cdot PD$; касательная $PT^2=PA\\cdot PB$')],
 misol=T('<b>2024 №22.</b> $r=3$, demak $h=6$. Bitta asos balandlikdan $2$ marta uzun: '
         '$a=12$. Aylana ichki chizilgani uchun $a+b=2\\cdot\\text{yon tomon}$ va '
         'oʻrta chiziq $=\\tfrac{a+b}{2}$; $S=\\tfrac{a+b}{2}\\cdot h$ dan $S=54$.',
         '<b>2024 №22.</b> $r=3$, значит $h=6$. Одно основание вдвое длиннее высоты: '
         '$a=12$. Так как окружность вписана, $a+b=2\\cdot\\text{боковая}$, а средняя '
         'линия $=\\tfrac{a+b}{2}$; из $S=\\tfrac{a+b}{2}\\cdot h$ получаем $S=54$.'),
 mashq=['2024 №22', '2024 №9', '2024 №25', '2025/26-A №23']),

D(n=13, ph='geo',
 mavzu=T('Koordinata usuli va geometrik ekstremum', 'Координатный метод и геометрический экстремум'),
 nega=T('«Aylana ustida $ax+by$ ning eng katta qiymati» — 10-sinfning yangi savoli.',
        '«Наибольшее значение $ax+by$ на окружности» — новая задача 10 класса.'),
 gap=[T('$x^2+y^2=2x+6y+6$ — toʻla kvadrat ajratib, markaz va radiusni toping',
        '$x^2+y^2=2x+6y+6$ — выделите полный квадрат и найдите центр и радиус'),
      T('<b>Aylanada $ax+by$ ning maksimumi:</b> $ax_0+by_0+R\\sqrt{a^2+b^2}$',
        '<b>Максимум $ax+by$ на окружности:</b> $ax_0+by_0+R\\sqrt{a^2+b^2}$'),
      T('Parabola uchi $x_0=-\\tfrac{b}{2a}$; masofa $\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$',
        'Вершина параболы $x_0=-\\tfrac{b}{2a}$; расстояние $\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$'),
      T('Chiziqlar bilan chegaralangan sohada maksimal toʻgʻri toʻrtburchak — '
        'yuzni bitta oʻzgaruvchiga keltiring',
        'Максимальный прямоугольник в области — сведите площадь к одной переменной')],
 misol=T('<b>2025/26-B №15.</b> $x^2+y^2=2x+6y+6$ ni $(x-1)^2+(y-3)^2=16$ shaklga keltiramiz: '
         'markaz $(1;3)$, $R=4$. Unda $4x+3y$ ning maksimumi '
         '$4\\cdot1+3\\cdot3+4\\sqrt{16+9}=13+20=33$.',
         '<b>2025/26-B №15.</b> Приводим $x^2+y^2=2x+6y+6$ к $(x-1)^2+(y-3)^2=16$: '
         'центр $(1;3)$, $R=4$. Тогда максимум $4x+3y$ равен '
         '$4\\cdot1+3\\cdot3+4\\sqrt{16+9}=13+20=33$.'),
 mashq=['2025/26-B №15', '2025/26-B №29', '2024 №2', '2025/26-A №10']),

D(n=14, ph='comb',
 mavzu=T('Funksiyalar va funksional tenglamalar', 'Функции и функциональные уравнения'),
 nega=T('<b>10-sinfning asosiy yangiligi:</b> $8{,}9\\,\\%$, 9-sinfdagidan $2{,}5$ barobar koʻp.',
        '<b>Главное новшество 10 класса:</b> $8{,}9\\,\\%$ — в $2{,}5$ раза больше, чем в 9 классе.'),
 gap=[T('<b>Qiymat qoʻyish:</b> $x=0$, $x=1$, $x=-x$ — noaniq koeffitsiyentni ochadi',
        '<b>Подстановка:</b> $x=0$, $x=1$, $x=-x$ — раскрывает неизвестный коэффициент'),
      T('$f(x)+f(-x)$ yoki $f(x)+f\\!\\left(\\tfrac1x\\right)$ — oʻzgarmas chiqadi',
        '$f(x)+f(-x)$ или $f(x)+f\\!\\left(\\tfrac1x\\right)$ — оказывается постоянной'),
      T('<b>Toq funksiya:</b> $f(-x)=-f(x)$, demak $f(0)=0$ — parametr shundan topiladi',
        '<b>Нечётная функция:</b> $f(-x)=-f(x)$, значит $f(0)=0$ — отсюда параметр'),
      T('$f(m+1,n)=f(m,n)+m$ tipidagi rekurrensiya — ikki yoʻnalishda «yigʻib» oshkor '
        'formula chiqariladi',
        'Рекуррентность вида $f(m+1,n)=f(m,n)+m$ — «суммированием» по двум направлениям '
        'получают явную формулу')],
 misol=T('<b>2024 №18.</b> $f(0)\\bigl(f(x)+2\\bigr)=4x-1$. $x=0$ qoʻysak '
         '$f(0)^2+2f(0)+1=0$, yaʼni $f(0)=-1$. Unda $-(f(x)+2)=4x-1$, '
         '$f(x)=-4x-1$ va $f(-1)=3$.',
         '<b>2024 №18.</b> $f(0)\\bigl(f(x)+2\\bigr)=4x-1$. Подставив $x=0$: '
         '$f(0)^2+2f(0)+1=0$, то есть $f(0)=-1$. Тогда $-(f(x)+2)=4x-1$, '
         '$f(x)=-4x-1$ и $f(-1)=3$.'),
 mashq=['2024 №18', '2024 №6', '2025/26-B №4', '2025/26-B №13', '2025/26-B №14',
        '2025/26-B №21', '2025/26-B №24', '2025/26-A №12']),

D(n=15, ph='comb',
 mavzu=T('Ketma-ketliklar va progressiyalar', 'Последовательности и прогрессии'),
 nega=T('$6{,}7\\,\\%$; progressiyada «chetdan teng uzoqlik» xossasi eng koʻp ishlatiladi.',
        '$6{,}7\\,\\%$; чаще всего используется свойство равноудалённых членов прогрессии.'),
 gap=[T('AP: $a_k+a_{n+1-k}=a_1+a_n$ — indekslar yigʻindisi teng boʻlsa, hadlar yigʻindisi ham teng',
        'АП: $a_k+a_{n+1-k}=a_1+a_n$ — при равных суммах индексов равны и суммы членов'),
      T('GP: $b_k\\cdot b_{n+1-k}=b_1b_n$ — koʻpaytmalar uchun xuddi shunday',
        'ГП: $b_k\\cdot b_{n+1-k}=b_1b_n$ — то же самое для произведений'),
      T('$a_3^2+a_5^2=(a_3+a_5)^2-2a_3a_5$ — progressiyani simmetrik ifodaga bogʻlang',
        '$a_3^2+a_5^2=(a_3+a_5)^2-2a_3a_5$ — свяжите прогрессию с симметрическим выражением'),
      T('Teleskoplash: $a_k=(k^2+1)k!$ kabi hadlarni $f(k+1)-f(k)$ shaklida yozing',
        'Телескопирование: члены вида $a_k=(k^2+1)k!$ записывайте как $f(k+1)-f(k)$')],
 misol=T('<b>2024 №7.</b> GP da $b_1b_3b_{11}=8$. Indekslar yigʻindisi $1+3+11=15$, '
         'va $b_2b_8$ uchun $2+8=10$. $b_1b_3b_{11}=b_5^3=8$ dan $b_5=2$; '
         '$b_2b_8=b_5^2=4$.',
         '<b>2024 №7.</b> В ГП $b_1b_3b_{11}=8$. Сумма индексов $1+3+11=15$, '
         'а для $b_2b_8$ это $2+8=10$. Из $b_1b_3b_{11}=b_5^3=8$ следует $b_5=2$; '
         'тогда $b_2b_8=b_5^2=4$.'),
 mashq=['2024 №7', '2024 №14', '2025/26-A №3', '2025/26-A №13', '2025/26-A №25', '2025/26-B №23']),

D(n=16, ph='comb',
 mavzu=T('Sanash: kombinatorika', 'Подсчёт: комбинаторика'),
 nega=T('$11{,}1\\,\\%$ — guruhlarga ajratish va «yonma-yon boʻlmasin» tipidagi savollar.',
        '$11{,}1\\,\\%$ — разбиение на группы и задачи вида «не рядом друг с другом».'),
 gap=[T('Bir xil hajmli $k$ ta guruhga ajratish: $\\dfrac{n!}{(m!)^k\\,k!}$ — '
        'guruhlar farqlanmasa $k!$ ga boʻling',
        'Разбиение на $k$ групп одинакового размера: $\\dfrac{n!}{(m!)^k\\,k!}$ — '
        'делите на $k!$, если группы неразличимы'),
      T('<b>«Yonma-yon boʻlmasin»:</b> avval qolganlarini joylashtiring, soʻng '
        '«boʻshliqlarga» qoʻying',
        '<b>«Не рядом»:</b> сначала расставьте остальных, затем вставляйте в «промежутки»'),
      T('Nyuton binomi: $\\sum_k C_n^k a^k=(1+a)^n$ — yigʻindini yopiq shaklga keltiradi',
        'Бином Ньютона: $\\sum_k C_n^k a^k=(1+a)^n$ — сворачивает сумму'),
      T('Har biriga kamida bitta: $x_i\\ge1$ da avval $1$ dan ayiring',
        'Каждому хотя бы один: при $x_i\\ge1$ сначала вычтите по единице')],
 misol=T('<b>2025/26-B №1.</b> $\\displaystyle\\sum_{k=0}^{2025}\\frac{2025!\\,(-1)^k2^k}'
         '{k!\\,(2025-k)!}=\\sum_k C_{2025}^k(-2)^k=(1-2)^{2025}=-1$.',
         '<b>2025/26-B №1.</b> $\\displaystyle\\sum_{k=0}^{2025}\\frac{2025!\\,(-1)^k2^k}'
         '{k!\\,(2025-k)!}=\\sum_k C_{2025}^k(-2)^k=(1-2)^{2025}=-1$.'),
 mashq=['2025/26-B №1', '2025/26-B №6', '2025/26-B №8', '2025/26-B №11', '2025/26-A №15',
        '2025/26-A №28', '2025/26-A №30']),

D(n=17, ph='comb',
 mavzu=T('Ehtimollik va invariantlar', 'Вероятность и инварианты'),
 nega=T('9-sinfda umuman yoʻq edi — 10-sinfda uch yilda 3 ta savol, hammasi ochiq blokda.',
        'В 9 классе этого не было вовсе — в 10 классе 3 задачи за три года, все в открытом блоке.'),
 gap=[T('$P=\\dfrac{\\text{qulay hollar}}{\\text{barcha hollar}}$; geometrik ehtimollikda — '
        'yuzalar nisbati',
        '$P=\\dfrac{\\text{благоприятные}}{\\text{все}}$; в геометрической вероятности — '
        'отношение площадей'),
      T('Ikki tasodifiy son va $|x-y|\\le d$ sharti — kvadrat ichidagi tasma yuzasi',
        'Два случайных числа и условие $|x-y|\\le d$ — площадь полосы внутри квадрата'),
      T('<b>Invariant:</b> har bir amalda oʻzgarmaydigan kattalikni toping (odatda juftlik)',
        '<b>Инвариант:</b> найдите величину, не меняющуюся при каждой операции (обычно чётность)'),
      T('Bosqichli tasodifiy jarayon — holatlar boʻyicha daraxt yoki takrorlanuvchi formula',
        'Пошаговый случайный процесс — дерево состояний или рекуррентная формула')],
 misol=T('<b>2025/26-B №18.</b> Har bir yurishda aynan $7$ ta tanga aylantiriladi — '
         'gerb tomoni yuqoriga qaragan tangalar sonining <b>juftligi</b> har safar '
         'oʻzgaradi. $100$ — juft, $0$ — juft, demak juft sondagi yurish kerak; '
         'eng kamida $16$.',
         '<b>2025/26-B №18.</b> За один ход переворачивают ровно $7$ монет — '
         '<b>чётность</b> числа монет гербом вверх меняется каждый раз. '
         '$100$ чётно и $0$ чётно, значит нужно чётное число ходов; минимум $16$.'),
 mashq=['2025/26-B №18', '2025/26-B №20', '2025/26-B №30']),

D(n=18, ph='rev',
 mavzu=T('Trigonometriya va matn masalalari', 'Тригонометрия и текстовые задачи'),
 nega=T('Trigonometriya $4{,}4\\,\\%$ — 9-sinfdagidan $4$ barobar koʻp; soddalashtirish savollari.',
        'Тригонометрия $4{,}4\\,\\%$ — в $4$ раза больше, чем в 9 классе; задачи на упрощение.'),
 gap=[T('$\\sin^2\\alpha+\\cos^2\\alpha=1$, $\\sin2\\alpha=2\\sin\\alpha\\cos\\alpha$, '
        '$\\cos2\\alpha=1-2\\sin^2\\alpha$',
        '$\\sin^2\\alpha+\\cos^2\\alpha=1$, $\\sin2\\alpha=2\\sin\\alpha\\cos\\alpha$, '
        '$\\cos2\\alpha=1-2\\sin^2\\alpha$'),
      T('<b>$\\tan$ orqali:</b> $\\sin2\\alpha=\\dfrac{2\\tan\\alpha}{1+\\tan^2\\alpha}$ — '
        '$\\tan$ berilganda darhol shu formula',
        '<b>Через $\\tan$:</b> $\\sin2\\alpha=\\dfrac{2\\tan\\alpha}{1+\\tan^2\\alpha}$ — '
        'если дан $\\tan$, сразу эта формула'),
      T('Keltirish: $\\sin(180^\\circ-\\alpha)=\\sin\\alpha$, $\\cos(-\\alpha)=\\cos\\alpha$',
        'Приведение: $\\sin(180^\\circ-\\alpha)=\\sin\\alpha$, $\\cos(-\\alpha)=\\cos\\alpha$'),
      T('$y=\\dfrac{k}{\\sin x+c}$ ning sohasi: $\\sin x\\in[-1;1]$ dan maxrajning '
        'chegaralarini oling',
        'Область $y=\\dfrac{k}{\\sin x+c}$: из $\\sin x\\in[-1;1]$ берите границы знаменателя')],
 misol=T('<b>2024 №8.</b> $\\tan t=\\sqrt{11}$. Unda '
         '$\\sin2t=\\dfrac{2\\tan t}{1+\\tan^2t}=\\dfrac{2\\sqrt{11}}{12}=\\dfrac{\\sqrt{11}}{6}$.',
         '<b>2024 №8.</b> $\\tan t=\\sqrt{11}$. Тогда '
         '$\\sin2t=\\dfrac{2\\tan t}{1+\\tan^2t}=\\dfrac{2\\sqrt{11}}{12}=\\dfrac{\\sqrt{11}}{6}$.'),
 mashq=['2024 №3', '2024 №8', '2024 №10', '2024 №6', '2025/26-B №9', '2024 №5', '2025/26-A №19']),

D(n=19, ph='rev',
 mavzu=T('Sinov imtihoni №1 — 2024-yil varianti', 'Пробный экзамен №1 — вариант 2024 года'),
 nega=T('Birinchi toʻliq repetitsiya: vaqt, tartib va javoblar varaqasi bilan.',
        'Первая полная репетиция: со временем, порядком и бланком ответов.'),
 gap=[T('<b>90 daqiqa, 30 savol, 50 ball</b> — haqiqiy sharoitda, telefonsiz',
        '<b>90 минут, 30 задач, 50 баллов</b> — в реальных условиях, без телефона'),
      T('Vaqt taqsimoti: 1–10 (20 daq) → 11–20 (30 daq) → 21–30 (35 daq) → 5 daq tekshirish',
        'Распределение времени: 1–10 (20 мин) → 11–20 (30 мин) → 21–30 (35 мин) → 5 мин проверка'),
      T('Imtihondan soʻng darhol tahlil: har bir xato qaysi kun mavzusiga tegishli',
        'Сразу после — разбор: к теме какого дня относится каждая ошибка'),
      T('Ball hisoblanadi va 20-kundagi natija bilan solishtiriladi',
        'Подсчитывается балл и сравнивается с результатом дня 20')],
 misol=T('', ''),
 mashq=['2024 — 30 savol']),

D(n=20, ph='rev',
 mavzu=T('Sinov imtihoni №2 va zaif nuqtalarni yopish',
         'Пробный экзамен №2 и закрытие слабых мест'),
 nega=T('Oxirgi kun: ikkinchi repetitsiya va faqat zaif mavzular takrori.',
        'Последний день: вторая репетиция и повторение только слабых тем.'),
 gap=[T('2025/26-B varianti — yana 90 daqiqa', 'Вариант 2025/26-B — снова 90 минут'),
      T('Xato daftaridagi eng koʻp takrorlangan <b>3 ta</b> mavzu qayta koʻriladi',
        'Пересматриваются <b>3</b> самые частые темы из тетради ошибок'),
      T('Formulalar varaqasi: bir betga sigʻadigan 30 ta formula yozib chiqiladi',
        'Лист формул: выписываются 30 формул, умещающихся на одну страницу'),
      T('Imtihon kuni: uyqu, soat, qora ruchka, doirachani <b>toʻliq</b> boʻyash',
        'В день экзамена: сон, часы, чёрная ручка, кружок закрашивать <b>полностью</b>')],
 misol=T('', ''),
 mashq=['2025/26-B — 30 savol', '2025/26-A — uy uchun']),
]

TACTICS = [
 (T('Ball taqsimoti', 'Распределение баллов'),
  T('Savollar kitobiga koʻra: 1–10 — 0,9 balldan (9 ball), 11–20 — 1,5 balldan (15 ball), '
    '21–30 — 2,6 balldan (26 ball). Jami 50 ball, 90 daqiqa.',
    'Согласно книге заданий: 1–10 — по 0,9 балла (9), 11–20 — по 1,5 (15), '
    '21–30 — по 2,6 (26). Итого 50 баллов, 90 минут.')),
 (T('Ochiq savollar — ballning yarmidan koʻpi', 'Открытые задачи — больше половины баллов'),
  T('21–30 bloki 26 ball beradi, yaʼni <b>52 %</b>. 10-sinfda bu blokda ehtimollik, '
    'funksional tenglama va kombinatorika toʻplangan — aynan shularni tashlab '
    'ketmaslik kerak.',
    'Блок 21–30 даёт 26 баллов, то есть <b>52 %</b>. В 10 классе именно там собраны '
    'вероятность, функциональные уравнения и комбинаторика — их и нельзя пропускать.')),
 (T('Birinchi oʻtish — faqat «koʻrgan zahoti» yechiladiganlar',
    'Первый проход — только то, что решается сразу'),
  T('Birinchi 20 daqiqada 1–10 ni oling. Bitta savolga 2 daqiqadan koʻp ketsa — '
    'belgilab qoʻying va oʻting.',
    'За первые 20 минут закройте 1–10. Если на задачу уходит больше 2 минут — '
    'отметьте её и идите дальше.')),
 (T('Yopiq savolda boʻsh qoldirmang', 'В закрытых задачах не оставляйте пропусков'),
  T('Kitobda notoʻgʻri javob uchun ball ayirish koʻrsatilmagan, shuning uchun 1–20 da '
    'har bir doiracha boʻyalgan boʻlsin. Variantlarni oʻrniga qoʻyib tekshirish — '
    'koʻpincha yechishdan tez.',
    'В книге заданий вычет баллов за неверный ответ не указан, поэтому в 1–20 должен быть '
    'закрашен каждый кружок. Подстановка вариантов часто быстрее решения.')),
 (T('Ochiq savolda faqat javob yoziladi', 'В открытых задачах пишется только ответ'),
  T('Qisqa javob talab qilinadi, shuning uchun yechim chiroyli boʻlishi shart emas — '
    'son toʻgʻri boʻlsa yetarli. Kasr javoblarni qisqartirib yozing.',
    'Требуется краткий ответ, поэтому решение не обязано быть красивым — достаточно верного '
    'числа. Дробные ответы записывайте в сокращённом виде.')),
 (T('Oxirgi 5 daqiqa — faqat tekshirish', 'Последние 5 минут — только проверка'),
  T('Javoblar varaqasidagi raqamlar mos tushganini, doirachalar toʻliq boʻyalganini va '
    'oʻlchov birliklarini tekshiring.',
    'Проверьте совпадение номеров в бланке, полноту закраски кружков и единицы измерения.')),
]
