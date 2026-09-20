# -*- coding: utf-8 -*-
T = lambda uz, ru: (uz, ru)

CHROME = dict(
 title=T('20 kunda tuman bosqichiga · 11-sinf', 'К районному этапу за 20 дней · 11 класс'),
 eyebrow=T('Fan olimpiadalari · tuman (shahar) bosqichi · 11-sinf',
           'Предметные олимпиады · районный (городской) этап · 11 класс'),
 h1=T('20 kunda tuman bosqichiga', 'К районному этапу за 20 дней'),
 sub=T('11-sinf matematika — kun-ba-kun tayyorgarlik rejasi, mavzular izohi va '
       'oʻtgan yillar savollari.',
       'Математика, 11 класс — план подготовки по дням, разбор тем и задачи прошлых лет.'),
 spec=[T('<b>30</b> savol', '<b>30</b> задач'), T('<b>90</b> daqiqa', '<b>90</b> минут'),
       T('<b>50</b> ball', '<b>50</b> баллов'),
       T('1–20 yopiq · 21–30 ochiq', '1–20 закрытые · 21–30 открытые')],
 h2a=T('Imtihon aslida nimani soʻraydi', 'Что спрашивают на самом деле'),
 h2b=T('Kun-ba-kun reja', 'План по дням'),
 h2c=T('Imtihon kuni taktikasi', 'Тактика в день экзамена'),
 note=T('Ikkita haqiqiy variantdagi <b>60 ta savol</b> mavzu boʻyicha ajratildi: '
        '2025/26 va 2024-yil tuman bosqichi. <b>Diqqat:</b> 9- va 10-sinfdan farqli '
        'oʻlaroq, bu yerda 2025/26 ning B varianti qoʻlda yoʻq — shuning uchun tahlil ikki '
        'variantga '
        'asoslangan va nisbatlar biroz kengroq tebranishi mumkin. '
        '<b>11-sinfning oʻziga xosligi:</b> trigonometriya $8{,}3\\,\\%$ — uch sinf ichida '
        'eng yuqorisi, va logarifm deyarli har variantda uchraydi.',
        '<b>60 задач</b> из двух реальных вариантов (2025/26 и 2024) разбиты по темам. '
        '<b>Внимание:</b> в отличие от 9 и 10 классов, варианта B 2025/26 под рукой нет — '
        'поэтому анализ опирается на два года, и доли могут колебаться шире. '
        '<b>Особенность 11 класса:</b> тригонометрия $8{,}3\\,\\%$ — больше, чем в 9 и 10, '
        'а логарифмы встречаются почти в каждом варианте.'),
 mashq=T('Mashq uchun savollar', 'Задачи для отработки'),
 namuna=T('Namuna', 'Пример'),
 src=T('<b>Manbalar:</b> 11-sinf tuman (shahar) bosqichi variantlari — 2025/2026 va '
       '2024-yil. Reja: Anvarbek Khaydarov.',
       '<b>Источники:</b> варианты районного (городского) этапа, 11 класс — 2025/2026 '
       'и 2024 год. План: Анварбек Хайдаров.'),
)

WEIGHTS = [
 (T('Algebra va ayniyatlar', 'Алгебра и тождества'), 18, 30.0, 'alg'),
 (T('Sonlar nazariyasi', 'Теория чисел'), 11, 18.3, 'nt'),
 (T('Geometriya', 'Геометрия'), 11, 18.3, 'geo'),
 (T('Kombinatorika', 'Комбинаторика'), 5, 8.3, 'comb'),
 (T('Trigonometriya', 'Тригонометрия'), 5, 8.3, 'trig'),
 (T('Matn masalalari', 'Текстовые задачи'), 4, 6.7, 'comb'),
 (T('Ketma-ketliklar', 'Последовательности'), 3, 5.0, 'comb'),
 (T('Funksiyalar', 'Функции'), 3, 5.0, 'comb'),
]

PHASES = [
 dict(key='alg', kunlar=T('1–6-kun', 'дни 1–6'),
   nom=T('1-bosqich · Algebra va logarifm', 'Этап 1 · Алгебра и логарифмы'),
   izoh=T('<b>30 %</b> — eng katta blok. 11-sinfda logarifmik tenglama va tengsizliklar, '
          'kub ildizli ifodalar va parametr qoʻshiladi.',
          '<b>30 %</b> — самый большой блок. В 11 классе добавляются логарифмические '
          'уравнения и неравенства, выражения с кубическими корнями и параметр.')),
 dict(key='nt', kunlar=T('7–9-kun', 'дни 7–9'),
   nom=T('2-bosqich · Sonlar nazariyasi', 'Этап 2 · Теория чисел'),
   izoh=T('<b>18,3 %</b>. Qoldiqlar va raqamli masalalar; katta darajalarni modul boʻyicha '
          'qisqartirish 11-sinfda deyarli har yili soʻraladi.',
          '<b>18,3 %</b>. Остатки и задачи с цифрами; сокращение больших степеней по модулю '
          'в 11 классе спрашивают почти каждый год.')),
 dict(key='geo', kunlar=T('10–13-kun', 'дни 10–13'),
   nom=T('3-bosqich · Geometriya', 'Этап 3 · Геометрия'),
   izoh=T('<b>18,3 %</b>. Planimetriya, lekin 11-sinfda vektorlar va aylanaga ichki '
          'chizilgan toʻrtburchak ham uchraydi.',
          '<b>18,3 %</b>. Планиметрия, но в 11 классе встречаются также векторы '
          'и вписанный четырёхугольник.')),
 dict(key='trig', kunlar=T('14–15-kun', 'дни 14–15'),
   nom=T('4-bosqich · Trigonometriya', 'Этап 4 · Тригонометрия'),
   izoh=T('<b>8,3 %</b> — uch sinf ichida eng yuqori ulush. Keltirish formulalari va '
          'ifodani soddalashtirish — har ikkala variantda ham bor.',
          '<b>8,3 %</b> — больше, чем в 9 и 10 классах. Формулы приведения и упрощение '
          'выражений есть в обоих вариантах.')),
 dict(key='comb', kunlar=T('16–18-kun', 'дни 16–18'),
   nom=T('5-bosqich · Funksiyalar, ketma-ketliklar, sanash',
         'Этап 5 · Функции, последовательности, подсчёт'),
   izoh=T('<b>25 %</b> birgalikda (funksiya, ketma-ketlik, kombinatorika va matn masalalari). '
          'Bu savollarning koʻpi ochiq blokda.',
          '<b>25 %</b> вместе (функции, последовательности, комбинаторика и текстовые задачи). '
          'Большая часть — в открытом блоке.')),
 dict(key='rev', kunlar=T('19–20-kun', 'дни 19–20'),
   nom=T('6-bosqich · Sinov imtihonlari', 'Этап 6 · Пробные экзамены'),
   izoh=T('Ikkita toʻliq sinov 90 daqiqada, soʻng xato daftari boʻyicha zaif mavzular takrori.',
          'Два полных пробника по 90 минут, затем повторение слабых тем по тетради ошибок.')),
]

D = lambda **k: k
KUNLAR = [

D(n=1, ph='alg',
 mavzu=T('Radikallar va ildizli ifodalarni soddalashtirish',
         'Радикалы и упрощение иррациональных выражений'),
 nega=T('Ikkala variantda ham 1-savol aynan shu — «ishonchli» birinchi ball.',
        'В обоих вариантах задача №1 именно такая — «надёжный» первый балл.'),
 gap=[T('Oʻnli kasrni oddiy kasrga: $1{,}125=\\tfrac98$, $1{,}62=\\tfrac{81}{50}$, '
        '$4{,}5=\\tfrac92$ — soʻng ildiz ostidan chiqaring',
        'Десятичную дробь в обыкновенную: $1{,}125=\\tfrac98$, $1{,}62=\\tfrac{81}{50}$, '
        '$4{,}5=\\tfrac92$ — затем выносите из-под корня'),
      T('$\\sqrt{a\\pm2\\sqrt b}=\\sqrt x\\pm\\sqrt y$, bunda $x+y=a$, $xy=b$',
        '$\\sqrt{a\\pm2\\sqrt b}=\\sqrt x\\pm\\sqrt y$, где $x+y=a$, $xy=b$'),
      T('<b>Kub ildizlar:</b> $a^3-b^3=(a-b)(a^2+ab+b^2)$ va '
        '$a^3+b^3=(a+b)(a^2-ab+b^2)$ — maxrajni ratsionallashtiradi',
        '<b>Кубические корни:</b> $a^3-b^3=(a-b)(a^2+ab+b^2)$ и '
        '$a^3+b^3=(a+b)(a^2-ab+b^2)$ — рационализируют знаменатель'),
      T('Ildiz ostidagi ifodani $t$ deb belgilang: $a^2+a+2=t^2$ tipidagi almashtirish',
        'Обозначьте подкоренное через $t$: замена вида $a^2+a+2=t^2$')],
 misol=T('<b>2024 №1.</b> $2\\sqrt{1{,}125}-5\\sqrt{1{,}62}+3\\sqrt{4{,}5}$. '
         'Kasrlarga: $2\\cdot\\tfrac{3}{2\\sqrt2}-5\\cdot\\tfrac{9}{5\\sqrt2}+3\\cdot\\tfrac{3}{\\sqrt2}$ '
         '$=\\tfrac{3-9+9}{\\sqrt2}\\cdot\\!$ — hammasi $\\sqrt2$ orqali, natija $1{,}5\\sqrt2$.',
         '<b>2024 №1.</b> $2\\sqrt{1{,}125}-5\\sqrt{1{,}62}+3\\sqrt{4{,}5}$. '
         'Переведя в дроби, всё выражается через $\\sqrt2$, и получается $1{,}5\\sqrt2$.'),
 mashq=['2024 №1', '2024 №21', '2024 №22', '2025/26-A №13']),

D(n=2, ph='alg',
 mavzu=T('Logarifm: xossalar, tenglama va tengsizlik',
         'Логарифмы: свойства, уравнения и неравенства'),
 nega=T('11-sinfning belgisi: ikkala variantda ham $2$ tadan logarifm savoli bor.',
        'Признак 11 класса: в обоих вариантах по $2$ задачи на логарифмы.'),
 gap=[T('$\\log_a(xy)=\\log_a x+\\log_a y$, $\\log_a x^k=k\\log_a x$, '
        '$\\log_a b=\\tfrac{1}{\\log_b a}$',
        '$\\log_a(xy)=\\log_a x+\\log_a y$, $\\log_a x^k=k\\log_a x$, '
        '$\\log_a b=\\tfrac{1}{\\log_b a}$'),
      T('<b>Asosi oʻzgaruvchi boʻlsa ikki hol:</b> $x>1$ da tengsizlik ishorasi saqlanadi, '
        '$0<x<1$ da almashadi',
        '<b>Если основание — переменная, два случая:</b> при $x>1$ знак сохраняется, '
        'при $0<x<1$ меняется'),
      T('ODZ: asos $>0$ va $\\ne1$, logarifm ostidagi ifoda $>0$',
        'ОДЗ: основание $>0$ и $\\ne1$, подлогарифмическое выражение $>0$'),
      T('Koʻpaytuvchilar koʻpaytmasi nolga teng — har bir koʻpaytuvchini alohida yeching, '
        'soʻng ODZ bilan filtrlang',
        'Произведение множителей равно нулю — решайте каждый отдельно, затем фильтруйте по ОДЗ')],
 misol=T('<b>2024 №6.</b> $\\log_x\\tfrac{19}{8}<\\log_x\\tfrac{11}{5}$. '
         '$\\tfrac{19}{8}=2{,}375>\\tfrac{11}{5}=2{,}2$, demak katta sonning logarifmi '
         'kichik — bu faqat $0<x<1$ da boʻladi. Javob $(0;1)$.',
         '<b>2024 №6.</b> $\\log_x\\tfrac{19}{8}<\\log_x\\tfrac{11}{5}$. '
         'Так как $\\tfrac{19}{8}=2{,}375>\\tfrac{11}{5}=2{,}2$, логарифм большего числа '
         'меньше — это возможно лишь при $0<x<1$. Ответ $(0;1)$.'),
 mashq=['2024 №6', '2024 №10', '2024 №11', '2025/26-A №26']),

D(n=3, ph='alg',
 mavzu=T('Tengsizliklar: kasrli va irratsional', 'Неравенства: дробные и иррациональные'),
 nega=T('Har ikkala variantda ham bor; maxrajni koʻpaytirish — eng koʻp uchraydigan xato.',
        'Есть в обоих вариантах; умножение на знаменатель — самая частая ошибка.'),
 gap=[T('Kasrli tengsizlikda maxrajning <b>ishorasi</b> boʻyicha ikki holga boʻling',
        'В дробном неравенстве разбивайте на два случая по <b>знаку</b> знаменателя'),
      T('$\\sqrt{A}+\\sqrt{B}\\ge c$ — avval ODZ, soʻng kvadratga koʻtarish; '
        'har bir qadamda manfiy emaslikni tekshiring',
        '$\\sqrt{A}+\\sqrt{B}\\ge c$ — сначала ОДЗ, затем возведение в квадрат; '
        'на каждом шаге проверяйте неотрицательность'),
      T('ODZ koʻpincha yechimni **deyarli toʻliq** aniqlaydi — avval uni toping',
        'ОДЗ часто определяет ответ **почти полностью** — находите его первым'),
      T('Butun yechimlarni sanashda chegaralarni alohida tekshiring',
        'При подсчёте целых решений отдельно проверяйте границы')],
 misol=T('<b>2024 №18.</b> $\\sqrt{28-x^2}+\\sqrt{-x}\\ge4$. ODZ: $-x\\ge0$ va '
         '$28-x^2\\ge0$, yaʼni $-\\sqrt{28}\\le x\\le0$ — butun $x$: $-5\\dots0$. '
         'Har birini qoʻyib tekshirish tez kechadi.',
         '<b>2024 №18.</b> $\\sqrt{28-x^2}+\\sqrt{-x}\\ge4$. ОДЗ: $-x\\ge0$ и '
         '$28-x^2\\ge0$, то есть $-\\sqrt{28}\\le x\\le0$ — целые $x$: $-5\\dots0$. '
         'Прямая подстановка каждого быстрее всего.'),
 mashq=['2024 №18', '2024 №3', '2025/26-A №13', '2025/26-A №10']),

D(n=4, ph='alg',
 mavzu=T('Simmetrik sistemalar va ayniyatlar', 'Симметричные системы и тождества'),
 nega=T('$x(x-y)=y(x+y)=1$ tipidagi juftlik ikkala variantda ham uchradi.',
        'Пары вида $x(x-y)=y(x+y)=1$ встретились в обоих вариантах.'),
 gap=[T('Ikki tenglikni <b>ayiring va qoʻshing</b>: $x^2-y^2$ va $xy$ chiqadi',
        '<b>Вычтите и сложите</b> два равенства: получатся $x^2-y^2$ и $xy$'),
      T('$x^4-y^4=(x^2-y^2)(x^2+y^2)$ — bosqichma-bosqich koʻtaring',
        '$x^4-y^4=(x^2-y^2)(x^2+y^2)$ — поднимайтесь по шагам'),
      T('$a+\\tfrac{k}{a}$ berilganda $a^2+\\tfrac{k^2}{a^2}$ kvadratga koʻtarish bilan',
        'Если дано $a+\\tfrac{k}{a}$, то $a^2+\\tfrac{k^2}{a^2}$ — возведением в квадрат'),
      T('Ildiz ostidagi ifodani $t$ deb belgilab kvadrat tenglamaga keltiring',
        'Обозначьте подкоренное через $t$ и сведите к квадратному уравнению')],
 misol=T('<b>2024 №22.</b> $a^2+a+11=6\\sqrt{a^2+a+2}$. '
         '$t=\\sqrt{a^2+a+2}$ deb olsak $t^2+9=6t$, yaʼni $(t-3)^2=0$, $t=3$. '
         'Unda $a^2+a+2=9$, $a^2+a-7=0$, demak $a-\\tfrac7a=\\tfrac{a^2-7}{a}=\\tfrac{-a}{a}=-1$.',
         '<b>2024 №22.</b> $a^2+a+11=6\\sqrt{a^2+a+2}$. '
         'Положив $t=\\sqrt{a^2+a+2}$, получаем $t^2+9=6t$, то есть $(t-3)^2=0$, $t=3$. '
         'Тогда $a^2+a-7=0$, значит $a-\\tfrac7a=\\tfrac{a^2-7}{a}=-1$.'),
 mashq=['2024 №22', '2024 №13', '2025/26-A №1', '2025/26-A №22']),

D(n=5, ph='alg',
 mavzu=T('Butun qism va parametr', 'Целая часть и параметр'),
 nega=T('Butun qism ikkala variantda ochiq blokda; parametr — «yagona ildiz» shartida.',
        'Целая часть в обоих вариантах в открытом блоке; параметр — в условии «единственный корень».'),
 gap=[T('$x=[x]+\\{x\\}$; $[\\,\\cdot\\,]=n$ deb belgilab $0\\le\\{x\\}<1$ dan '
        '$n$ ning chegarasini toping',
        '$x=[x]+\\{x\\}$; обозначив $[\\,\\cdot\\,]=n$, из $0\\le\\{x\\}<1$ найдите границы $n$'),
      T('$20[u]=24\\{u\\}$ tipida: $\\{u\\}=\\tfrac{5n}{6}$ va $0\\le\\tfrac{5n}{6}<1$ — '
        '$n$ sanoqli',
        'В задачах вида $20[u]=24\\{u\\}$: $\\{u\\}=\\tfrac{5n}{6}$ и $0\\le\\tfrac{5n}{6}<1$ — '
        '$n$ конечное число значений'),
      T('<b>Kasrli tenglamada «yagona ildiz»:</b> $D=0$ **yoki** ODZ ikkitadan bittasini '
        'oʻchirgan hol',
        '<b>«Единственный корень» в дробном уравнении:</b> $D=0$ **или** случай, когда '
        'ОДЗ убирает один из двух корней'),
      T('Parametrli masalada har bir holni alohida yozing va javoblarni **birlashtiring**',
        'В задаче с параметром выписывайте каждый случай отдельно и **объединяйте** ответы')],
 misol=T('<b>2024 №29.</b> $20[u]=24\\{u\\}$. $[u]=n$ da $\\{u\\}=\\tfrac{5n}{6}$, '
         'va $0\\le\\tfrac{5n}{6}<1$ dan $n\\in\\{0;1\\}$ emas — $n=0$ yoki '
         '$n$ manfiy emas; har bir $n$ uchun $u=n+\\tfrac{5n}{6}=\\tfrac{11n}{6}$.',
         '<b>2024 №29.</b> $20[u]=24\\{u\\}$. При $[u]=n$ имеем $\\{u\\}=\\tfrac{5n}{6}$, '
         'и из $0\\le\\tfrac{5n}{6}<1$ находим допустимые $n$; для каждого '
         '$u=n+\\tfrac{5n}{6}=\\tfrac{11n}{6}$.'),
 mashq=['2024 №29', '2024 №28', '2025/26-A №29', '2025/26-A №17']),

D(n=6, ph='alg',
 mavzu=T('Algebra — aralash mashq va xato tahlili',
         'Алгебра — смешанная практика и разбор ошибок'),
 nega=T('Blokni mustahkamlash: 1–5-kun mavzulari aralash tartibda.',
        'Закрепление блока: темы дней 1–5 вперемешку.'),
 gap=[T('60 daqiqada 20 ta aralash algebra savoli', '20 смешанных задач по алгебре за 60 минут'),
      T('Har bir xato uchun <b>xato daftari</b>ga yozuv', 'На каждую ошибку — запись в <b>тетрадь ошибок</b>'),
      T('Notoʻgʻri javoblar oʻsha kuni qayta yechiladi', 'Неверные задачи перерешиваются в тот же день'),
      T('Ogʻzaki: logarifm qiymatlari, $2$ va $3$ ning darajalari',
        'Устно: значения логарифмов, степени $2$ и $3$')],
 misol=T('', ''),
 mashq=['2024 №1, 3, 6, 10, 11, 13, 18, 21, 22', '2025/26-A №1, 5, 13, 17, 22, 26, 29']),

D(n=7, ph='nt',
 mavzu=T('Qoldiqlar va katta darajalar', 'Остатки и большие степени'),
 nega=T('Ikkala variantda ham katta darajani modul boʻyicha qisqartirish savoli bor.',
        'В обоих вариантах есть задача на сокращение большой степени по модулю.'),
 gap=[T('$a\\equiv b\\ (\\mathrm{mod}\\ m)$ bilan ishlash; boʻlishga ruxsat yoʻq',
        'Работа с $a\\equiv b\\ (\\mathrm{mod}\\ m)$; делить нельзя'),
      T('<b>Binom bilan:</b> $5^{n}-3^{n}$ ni $(4+1)^n-(4-1)^n$ shaklida yozing — '
        'kichik modul boʻyicha koʻp had yoʻqoladi',
        '<b>Через бином:</b> запишите $5^{n}-3^{n}$ как $(4+1)^n-(4-1)^n$ — '
        'по малому модулю большинство слагаемых исчезает'),
      T('$\\underbrace{99\\dots9}_{k}=10^k-1$ — koʻpaytmani $\\mathrm{mod}\\ 1000$ '
        'boʻyicha qisqartiring',
        '$\\underbrace{99\\dots9}_{k}=10^k-1$ — сокращайте произведение по $\\mathrm{mod}\\ 1000$'),
      T('Oxirgi raqam davri $4$; oxirgi uch raqam — $\\mathrm{mod}\\ 1000$',
        'Период последней цифры $4$; три последние — $\\mathrm{mod}\\ 1000$')],
 misol=T('<b>2024 №17.</b> $9\\cdot99\\cdot999\\cdots$ da toʻrtinchi koʻpaytuvchidan '
         'boshlab har biri $\\equiv-1\\ (\\mathrm{mod}\\ 1000)$. '
         'Faqat dastlabki uchtasi va $(-1)$ ning darajasi qoladi.',
         '<b>2024 №17.</b> В $9\\cdot99\\cdot999\\cdots$ начиная с четвёртого множителя '
         'каждый $\\equiv-1\\ (\\mathrm{mod}\\ 1000)$. Остаются только первые три '
         'и степень $(-1)$.'),
 mashq=['2024 №17', '2024 №20', '2025/26-A №21', '2025/26-A №30']),

D(n=8, ph='nt',
 mavzu=T('Raqamli masalalar va tub sonlar', 'Задачи с цифрами и простые числа'),
 nega=T('«$\\overline{abc}$ shunday sonlar nechta» — har ikkala variantda ham bor.',
        '«Сколько таких чисел $\\overline{abc}$» — есть в обоих вариантах.'),
 gap=[T('$\\overline{abc}=100a+10b+c$; shartni $a,b,c$ tenglamasiga aylantiring',
        '$\\overline{abc}=100a+10b+c$; переведите условие в уравнение на $a,b,c$'),
      T('<b>Tub sonlar va $\\mathrm{mod}\\ 3$:</b> $p>3$ boʻlsa $p^2\\equiv1$, '
        'demak $p^4+3\\equiv1+3=4\\equiv1$ — koʻpincha $p=2$ yoki $p=3$ qoladi',
        '<b>Простые и $\\mathrm{mod}\\ 3$:</b> при $p>3$ имеем $p^2\\equiv1$, '
        'значит $p^4+3\\equiv1$ — обычно остаются лишь $p=2$ или $p=3$'),
      T('$\\overline{aabc}=(a+b+c)^3$ tipida: kub $1000\\dots9999$ oraligʻida boʻlgani uchun '
        'asos $10\\dots21$ — sanoqli variant',
        'В задачах вида $\\overline{aabc}=(a+b+c)^3$: куб лежит в $1000\\dots9999$, '
        'поэтому основание $10\\dots21$ — конечный перебор'),
      T('Raqamlar koʻpaytmasi bilan iteratsiya — birinchi $5$–$6$ qadamni yozing, '
        'davr koʻrinadi',
        'Итерация с произведением цифр — выпишите первые $5$–$6$ шагов, проявится цикл')],
 misol=T('<b>2024 №30.</b> $36\\to3\\cdot6+13=31\\to3\\cdot1+13=16\\to1\\cdot6+13=19'
         '\\to1\\cdot9+13=22\\to2\\cdot2+13=17\\to1\\cdot7+13=20\\to0+13=13'
         '\\to3+13=16$ — davr $16,19,22,17,20,13$ (uzunligi $6$).',
         '<b>2024 №30.</b> $36\\to31\\to16\\to19\\to22\\to17\\to20\\to13\\to16$ — '
         'цикл $16,19,22,17,20,13$ длины $6$.'),
 mashq=['2024 №30', '2024 №26', '2024 №2', '2024 №9', '2025/26-A №16', '2025/26-A №15']),

D(n=9, ph='nt',
 mavzu=T('Boʻluvchilar va sonlar nazariyasi — aralash',
         'Делители и теория чисел — смешанная практика'),
 nega=T('Blokni mustahkamlash; boʻluvchilar soni formulasi qayta ishlanadi.',
        'Закрепление блока; отрабатывается формула числа делителей.'),
 gap=[T('$\\tau(n)=\\prod(\\alpha_i+1)$; toʻla kvadrat boʻluvchilar — $\\alpha_i$ juft',
        '$\\tau(n)=\\prod(\\alpha_i+1)$; квадратные делители — $\\alpha_i$ чётные'),
      T('Kasr natural boʻlishi uchun tub darajalar manfiy emas boʻlishi kerak',
        'Чтобы дробь была натуральной, показатели простых должны быть неотрицательны'),
      T('40 daqiqada 12 ta aralash savol', '12 смешанных задач за 40 минут'),
      T('Xato daftaridagi 7–8-kun xatolari qayta ishlanadi',
        'Прорабатываются ошибки дней 7–8')],
 misol=T('', ''),
 mashq=['2025/26-A №3', '2025/26-A №15', '2025/26-A №16', '2024 №2', '2024 №9']),

D(n=10, ph='geo',
 mavzu=T('Uchburchak: burchaklar va bissektrisa', 'Треугольник: углы и биссектриса'),
 nega=T('Burchak masalalari har ikkala variantda; bissektrisa sharti 2024 da.',
        'Задачи на углы в обоих вариантах; условие с биссектрисой — в 2024.'),
 gap=[T('Tashqi burchak $=$ qoʻshni boʻlmagan ikki ichki burchak yigʻindisi',
        'Внешний угол $=$ сумме двух несмежных внутренних'),
      T('<b>Bissektrisa bilan:</b> $\\angle AKB$ — $\\triangle BKC$ ning tashqi burchagi, '
        'demak $\\angle AKB=\\angle C+\\tfrac{\\angle B}{2}$',
        '<b>С биссектрисой:</b> $\\angle AKB$ — внешний угол $\\triangle BKC$, '
        'значит $\\angle AKB=\\angle C+\\tfrac{\\angle B}{2}$'),
      T('Teng yonli uchburchakda asosga tushirilgan balandlik — mediana va bissektrisa ham',
        'В равнобедренном треугольнике высота к основанию — также медиана и биссектриса'),
      T('$\\cos$ qiymatlaridan burchakni toping, soʻng uchinchisini $180^\\circ$ dan ayiring',
        'Находите углы по значениям $\\cos$, третий — вычитанием из $180^\\circ$')],
 misol=T('<b>2024 №4.</b> $\\angle AKB=2\\angle ABK$ va $\\angle AKB=\\angle C+\\tfrac{B}{2}$, '
         '$\\angle ABK=\\tfrac{B}{2}$. Demak $\\angle C+\\tfrac{B}{2}=B$, yaʼni '
         '$\\angle C=\\tfrac{B}{2}$; $A=180^\\circ-B-C$ dan $C-A$ hisoblanadi.',
         '<b>2024 №4.</b> $\\angle AKB=2\\angle ABK$ и $\\angle AKB=\\angle C+\\tfrac{B}{2}$, '
         '$\\angle ABK=\\tfrac{B}{2}$. Значит $\\angle C=\\tfrac{B}{2}$; '
         'из $A=180^\\circ-B-C$ находим $C-A$.'),
 mashq=['2024 №4', '2024 №8', '2024 №12', '2025/26-A №25']),

D(n=11, ph='geo',
 mavzu=T('Aylana va ichki chizilgan toʻrtburchak', 'Окружность и вписанный четырёхугольник'),
 nega=T('Ikkala variantda ham bor; $R$ berilgan holat takrorlanadi.',
        'Есть в обоих вариантах; повторяется случай с заданным $R$.'),
 gap=[T('Sinuslar teoremasi $\\tfrac{a}{\\sin\\alpha}=2R$ — $R$ va burchaklardan tomonlar',
        'Теорема синусов $\\tfrac{a}{\\sin\\alpha}=2R$ — из $R$ и углов находятся стороны'),
      T('<b>Ichki chizilgan toʻrtburchak:</b> $\\alpha+\\gamma=180^\\circ$; '
        'markazdagi burchaklar yigʻindisi $360^\\circ$',
        '<b>Вписанный четырёхугольник:</b> $\\alpha+\\gamma=180^\\circ$; '
        'сумма центральных углов $360^\\circ$'),
      T('Vatar $=2R\\sin\\tfrac{\\text{yoy}}{2}$ — teng vatarlar teng yoylarga tayanadi',
        'Хорда $=2R\\sin\\tfrac{\\text{дуга}}{2}$ — равные хорды стягивают равные дуги'),
      T('Fales: diametrga tayangan burchak $90^\\circ$; nuqtaning darajasi $PA\\cdot PB$',
        'Фалес: угол на диаметре $90^\\circ$; степень точки $PA\\cdot PB$')],
 misol=T('<b>2024 №25.</b> $R=16$, uchta tomon $8$. $8=2\\cdot16\\sin\\tfrac{\\theta}{2}$ dan '
         '$\\sin\\tfrac{\\theta}{2}=\\tfrac14$ — har bir tomon bir xil yoyga tayanadi. '
         'Toʻrtinchi yoy $=360^\\circ-3\\theta$, undan toʻrtinchi tomon topiladi.',
         '<b>2024 №25.</b> $R=16$, три стороны по $8$. Из $8=2\\cdot16\\sin\\tfrac{\\theta}{2}$ '
         'следует $\\sin\\tfrac{\\theta}{2}=\\tfrac14$ — каждая сторона стягивает одну дугу. '
         'Четвёртая дуга $=360^\\circ-3\\theta$, отсюда четвёртая сторона.'),
 mashq=['2024 №25', '2024 №12', '2024 №27', '2025/26-A №27', '2025/26-A №14']),

D(n=12, ph='geo',
 mavzu=T('Kvadrat, toʻgʻri toʻrtburchak va koordinata usuli',
         'Квадрат, прямоугольник и координатный метод'),
 nega=T('Kvadrat ichidagi/tashqarisidagi nuqta — ikkala variantda ham uchraydi.',
        'Точка внутри или вне квадрата — встречается в обоих вариантах.'),
 gap=[T('Kvadratni koordinataga qoʻying: $A(0;0)$, tomonlar oʻqlar boʻylab',
        'Поместите квадрат в координаты: $A(0;0)$, стороны вдоль осей'),
      T('<b>Teng yonli uchburchak hosil boʻlsa</b> ($DE=DC$ kabi), asosdagi burchaklar '
        'teng — $\\angle=\\tfrac{180^\\circ-\\text{uchdagi}}{2}$',
        '<b>Если возникает равнобедренный треугольник</b> (как $DE=DC$), углы при основании '
        'равны: $\\angle=\\tfrac{180^\\circ-\\text{при вершине}}{2}$'),
      T('Kosinuslar teoremasi — burchak va ikki tomon berilganda uchinchisini beradi',
        'Теорема косинусов — даёт третью сторону по двум сторонам и углу'),
      T('Bissektrisa $45^\\circ$ ostida — $y=x$ toʻgʻri chizigʻi',
        'Биссектриса под $45^\\circ$ — это прямая $y=x$')],
 misol=T('<b>2025/26-A №23.</b> $\\angle DCE=51^\\circ$, $\\angle CDE=78^\\circ$ dan '
         '$\\angle DEC=51^\\circ$, demak $DE=DC=AD$. $E$ kvadratdan tashqarida boʻlgani uchun '
         '$\\angle ADE=90^\\circ+78^\\circ=168^\\circ$, va $\\angle DAE=6^\\circ$.',
         '<b>2025/26-A №23.</b> Из $\\angle DCE=51^\\circ$, $\\angle CDE=78^\\circ$ следует '
         '$\\angle DEC=51^\\circ$, значит $DE=DC=AD$. Так как $E$ вне квадрата, '
         '$\\angle ADE=168^\\circ$, и $\\angle DAE=6^\\circ$.'),
 mashq=['2025/26-A №23', '2025/26-A №19', '2024 №15', '2024 №27']),

D(n=13, ph='geo',
 mavzu=T('Vektorlar va yuzalar', 'Векторы и площади'),
 nega=T('Vektor sharti 11-sinfda paydo boʻladi (2024 №19); yuz formulalari har yili.',
        'Векторное условие появляется в 11 классе (2024 №19); формулы площади — каждый год.'),
 gap=[T('$\\vec{OA}+\\vec{OB}=\\vec{OC}$ va $|OA|=|OB|=|OC|=R$ — romb hosil boʻladi, '
        'demak uchburchak teng tomonli',
        '$\\vec{OA}+\\vec{OB}=\\vec{OC}$ и $|OA|=|OB|=|OC|=R$ — получается ромб, '
        'значит треугольник равносторонний'),
      T('Vektorlar yigʻindisi — parallelogramm qoidasi; diagonal uzunligi kosinuslar teoremasi bilan',
        'Сумма векторов — правило параллелограмма; длина диагонали — по теореме косинусов'),
      T('$S=\\tfrac12ab\\sin\\gamma$ va $S=\\tfrac{abc}{4R}$',
        '$S=\\tfrac12ab\\sin\\gamma$ и $S=\\tfrac{abc}{4R}$'),
      T('Segmentga ichki chizilgan kvadrat — markazdan masofani $R$ orqali yozing',
        'Квадрат, вписанный в сегмент — выразите расстояние от центра через $R$')],
 misol=T('<b>2024 №19.</b> $|\\vec{OA}|=|\\vec{OB}|=|\\vec{OC}|=R$ va '
         '$\\vec{OA}+\\vec{OB}=\\vec{OC}$. Kvadratga koʻtarsak '
         '$R^2+R^2+2R^2\\cos\\angle AOB=R^2$, demak $\\cos\\angle AOB=-\\tfrac12$, '
         'yaʼni $\\angle AOB=120^\\circ$.',
         '<b>2024 №19.</b> $|\\vec{OA}|=|\\vec{OB}|=|\\vec{OC}|=R$ и '
         '$\\vec{OA}+\\vec{OB}=\\vec{OC}$. Возведя в квадрат: '
         '$2R^2+2R^2\\cos\\angle AOB=R^2$, откуда $\\cos\\angle AOB=-\\tfrac12$, '
         'то есть $\\angle AOB=120^\\circ$.'),
 mashq=['2024 №19', '2024 №12', '2024 №27', '2025/26-A №14']),

D(n=14, ph='trig',
 mavzu=T('Trigonometriya: keltirish va soddalashtirish',
         'Тригонометрия: приведение и упрощение'),
 nega=T('<b>11-sinfning eng oʻsgan mavzusi:</b> $8{,}3\\,\\%$ — 9-sinfdagidan $7$ barobar koʻp.',
        '<b>Самая выросшая тема 11 класса:</b> $8{,}3\\,\\%$ — в $7$ раз больше, чем в 9 классе.'),
 gap=[T('$\\sin(180^\\circ-\\alpha)=\\sin\\alpha$, $\\cos(180^\\circ-\\alpha)=-\\cos\\alpha$, '
        '$\\cos(-\\alpha)=\\cos\\alpha$',
        '$\\sin(180^\\circ-\\alpha)=\\sin\\alpha$, $\\cos(180^\\circ-\\alpha)=-\\cos\\alpha$, '
        '$\\cos(-\\alpha)=\\cos\\alpha$'),
      T('<b>Katta burchakni qisqartiring:</b> $2024^\\circ=5\\cdot360^\\circ+224^\\circ$ — '
        'soʻng chorakni aniqlang',
        '<b>Сокращайте большой угол:</b> $2024^\\circ=5\\cdot360^\\circ+224^\\circ$ — '
        'затем определите четверть'),
      T('$\\sqrt{\\cos^{-2}\\alpha}=\\left|\\tfrac{1}{\\cos\\alpha}\\right|$ — '
        '<b>modul</b>ni unutmang, ishora chorakka bogʻliq',
        '$\\sqrt{\\cos^{-2}\\alpha}=\\left|\\tfrac{1}{\\cos\\alpha}\\right|$ — '
        'не забывайте <b>модуль</b>, знак зависит от четверти'),
      T('Qoʻshni burchaklarni juftlab guruhlang: $\\sin40^\\circ$ va $\\cos130^\\circ$ '
        'bir-birini yoʻqotadi',
        'Группируйте углы парами: $\\sin40^\\circ$ и $\\cos130^\\circ$ взаимно уничтожаются')],
 misol=T('<b>2024 №5.</b> $\\cos130^\\circ=-\\sin40^\\circ$ va $\\sin160^\\circ=\\sin20^\\circ$, '
         '$\\cos(-110^\\circ)=-\\sin20^\\circ$. Demak '
         '$2\\sin40^\\circ-2\\sin40^\\circ+\\sin20^\\circ+\\sin20^\\circ=2\\sin20^\\circ$.',
         '<b>2024 №5.</b> $\\cos130^\\circ=-\\sin40^\\circ$, $\\sin160^\\circ=\\sin20^\\circ$, '
         '$\\cos(-110^\\circ)=-\\sin20^\\circ$. Значит '
         '$2\\sin40^\\circ-2\\sin40^\\circ+\\sin20^\\circ+\\sin20^\\circ=2\\sin20^\\circ$.'),
 mashq=['2024 №5', '2024 №14', '2024 №8', '2025/26-A №12']),

D(n=15, ph='trig',
 mavzu=T('Trigonometrik tenglamalar', 'Тригонометрические уравнения'),
 nega=T('$\\tan t+\\sin t=1$ tipidagi savol ikkala variantda ham ochiq blokda.',
        'Задача вида $\\tan t+\\sin t=1$ в обоих вариантах в открытом блоке.'),
 gap=[T('$\\tan\\alpha=\\tfrac{\\sin\\alpha}{\\cos\\alpha}$ — umumiy maxrajga keltiring',
        '$\\tan\\alpha=\\tfrac{\\sin\\alpha}{\\cos\\alpha}$ — приведите к общему знаменателю'),
      T('$\\sin^2+\\cos^2=1$ bilan bitta funksiyaga keltirib, almashtirish kiriting',
        'С помощью $\\sin^2+\\cos^2=1$ сведите к одной функции и сделайте замену'),
      T('<b>Qaytma tenglama:</b> $u^4-2u^3+u^2-2u+1=0$ ni $u^2$ ga boʻlib, '
        '$v=u+\\tfrac1u$ almashtirish',
        '<b>Возвратное уравнение:</b> разделите $u^4-2u^3+u^2-2u+1=0$ на $u^2$ '
        'и сделайте замену $v=u+\\tfrac1u$'),
      T('Manfiy boʻlmagan ikki hadning yigʻindisi nol — <b>ikkalasi ham nol</b>',
        'Сумма двух неотрицательных равна нулю — <b>оба равны нулю</b>')],
 misol=T('<b>2025/26-A №12.</b> $1-\\sin x+\\sqrt{3y-x}=0$: ikkala qoʻshiluvchi manfiy emas, '
         'demak $\\sin x=1$ va $3y=x$. $0\\le x\\le\\pi$ da $x=\\tfrac{\\pi}{2}$, '
         '$y=\\tfrac{\\pi}{6}$, va $\\tfrac{6(x-y)}{\\pi}=2$.',
         '<b>2025/26-A №12.</b> $1-\\sin x+\\sqrt{3y-x}=0$: оба слагаемых неотрицательны, '
         'значит $\\sin x=1$ и $3y=x$. При $0\\le x\\le\\pi$: $x=\\tfrac{\\pi}{2}$, '
         '$y=\\tfrac{\\pi}{6}$, и $\\tfrac{6(x-y)}{\\pi}=2$.'),
 mashq=['2025/26-A №12', '2024 №23', '2024 №8', '2024 №5']),

D(n=16, ph='comb',
 mavzu=T('Funksiyalar: juftlik, davriylik, almashtirish',
         'Функции: чётность, периодичность, замена'),
 nega=T('Har ikkala variantda $2$–$3$ savol; davriylik $f(x)=1-f(x-1)$ tipida.',
        'В обоих вариантах $2$–$3$ задачи; периодичность вида $f(x)=1-f(x-1)$.'),
 gap=[T('<b>Juft funksiya:</b> toq darajali hadlar koeffitsiyenti nolga teng',
        '<b>Чётная функция:</b> коэффициенты при нечётных степенях равны нулю'),
      T('<b>Davriylik:</b> $f(x)=1-f(x-1)$ ni ikki marta qoʻllang — $f(x)=f(x-2)$, davr $2$',
        '<b>Периодичность:</b> примените $f(x)=1-f(x-1)$ дважды — $f(x)=f(x-2)$, период $2$'),
      T('$f(g(x))$ berilsa, $g(x)=u$ almashtirish bilan $f(u)$ ni toping',
        'Если дано $f(g(x))$, заменой $g(x)=u$ находите $f(u)$'),
      T('Yigʻindi soʻralsa, alohida qiymatlarni topmasdan **qoʻshib** koʻring',
        'Если спрашивают сумму, попробуйте **сложить**, не находя значения по отдельности')],
 misol=T('<b>2024 №16.</b> $f(1-x)=1-x^2$. $u=1-x$ desak $x=1-u$ va '
         '$f(u)=1-(1-u)^2=2u-u^2$. Unda $f(-1)+f(0)+f(1)=(-3)+0+1=-2$.',
         '<b>2024 №16.</b> $f(1-x)=1-x^2$. Положив $u=1-x$, получим $x=1-u$ и '
         '$f(u)=1-(1-u)^2=2u-u^2$. Тогда $f(-1)+f(0)+f(1)=(-3)+0+1=-2$.'),
 mashq=['2024 №16', '2024 №7', '2025/26-A №11', '2025/26-A №5']),

D(n=17, ph='comb',
 mavzu=T('Ketma-ketliklar va progressiyalar', 'Последовательности и прогрессии'),
 nega=T('Progressiya va rekurrent ketma-ketlik 2025/26 da $3$ ta savol berdi.',
        'Прогрессии и рекуррентные последовательности дали $3$ задачи в 2025/26-A.'),
 gap=[T('AP: $a_{m-k}+a_m+a_{m+k}=3a_m$ — uchta hadning yigʻindisi oʻrtadagisining uch barobari',
        'АП: $a_{m-k}+a_m+a_{m+k}=3a_m$ — сумма трёх членов равна утроенному среднему'),
      T('AP dan GP ga oʻtish: $(a+d)^2=a(a+2d+p)$ va oxirgi uchta had uchun ikkinchi tenglama',
        'Переход от АП к ГП: $(a+d)^2=a(a+2d+p)$ и второе уравнение для последних трёх членов'),
      T('<b>Rekurrent davriylik:</b> dastlabki $6$–$7$ hadni yozing — davr koʻrinadi, '
        'soʻng indeksni davrga boʻling',
        '<b>Периодичность рекуррентности:</b> выпишите первые $6$–$7$ членов — проявится '
        'период, затем делите индекс на него'),
      T('$\\prod\\left(n-\\tfrac1n\\right)=\\prod\\tfrac{(n-1)(n+1)}{n}$ — '
        'teleskoplanadi va faktorialga aylanadi',
        '$\\prod\\left(n-\\tfrac1n\\right)=\\prod\\tfrac{(n-1)(n+1)}{n}$ — '
        'телескопируется и сворачивается в факториал')],
 misol=T('<b>2025/26-A №28.</b> $x_1=20$, $x_2=101$, $x_n=\\tfrac{x_{n-1}+1}{x_{n-2}}$. '
         'Dastlabki hadlarni yozsak $x_6=x_1$ va $x_7=x_2$ — davr $5$. '
         '$2025=5\\cdot405$, demak $x_{2025}=x_5=\\tfrac{21}{101}$.',
         '<b>2025/26-A №28.</b> $x_1=20$, $x_2=101$, $x_n=\\tfrac{x_{n-1}+1}{x_{n-2}}$. '
         'Выписав первые члены: $x_6=x_1$ и $x_7=x_2$ — период $5$. '
         '$2025=5\\cdot405$, значит $x_{2025}=x_5=\\tfrac{21}{101}$.'),
 mashq=['2025/26-A №28', '2025/26-A №6', '2025/26-A №20', '2025/26-A №26']),

D(n=18, ph='comb',
 mavzu=T('Sanash va matn masalalari', 'Подсчёт и текстовые задачи'),
 nega=T('Matn masalalari 11-sinfda $6{,}7\\,\\%$ — 9- va 10-sinfdagidan koʻproq.',
        'Текстовых задач в 11 классе $6{,}7\\,\\%$ — больше, чем в 9 и 10.'),
 gap=[T('<b>Teskarisini sanash:</b> «kamida bitta juft raqam» — «hammasi toq» ni ayiring',
        '<b>Подсчёт дополнения:</b> «хотя бы одна чётная цифра» — вычтите «все нечётные»'),
      T('Dirixle: «kafolatlash» soʻzi boʻlsa eng yomon holatni yozing',
        'Дирихле: при слове «гарантировать» распишите худший случай'),
      T('Ball tizimi: $3c-(n-c)$ kabi ifoda tuzib, tengsizlik yeching',
        'Система баллов: составьте выражение вида $3c-(n-c)$ и решите неравенство'),
      T('Hafta kunlari — $\\mathrm{mod}\\ 7$; haftalik meʼyorni hisoblab, qoldiqni kun-ba-kun',
        'Дни недели — $\\mathrm{mod}\\ 7$; посчитайте недельную норму, остаток — по дням')],
 misol=T('<b>2024 №24.</b> Toʻrt xonali sonlar $9000$ ta. Barcha raqamlari toq boʻlganlari: '
         'birinchi $5$, qolgan uchtasi $5$ tadan $=5^4=625$. '
         'Demak kamida bitta juft raqamli $9000-625=8375$ ta.',
         '<b>2024 №24.</b> Четырёхзначных чисел $9000$. Все цифры нечётные: первая $5$ '
         'вариантов, остальные три по $5$, итого $5^4=625$. '
         'Значит с хотя бы одной чётной цифрой $9000-625=8375$.'),
 mashq=['2024 №24', '2025/26-A №8', '2025/26-A №9', '2025/26-A №18', '2025/26-A №24',
        '2025/26-A №2', '2025/26-A №7', '2025/26-A №10']),

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
 nega=T('Oxirgi kun: 2025/26 varianti va faqat zaif mavzular takrori.',
        'Последний день: вариант 2025/26 и повторение только слабых тем.'),
 gap=[T('2025/26 varianti — yana 90 daqiqa', 'Вариант 2025/26 — снова 90 минут'),
      T('Xato daftaridagi eng koʻp takrorlangan <b>3 ta</b> mavzu qayta koʻriladi',
        'Пересматриваются <b>3</b> самые частые темы из тетради ошибок'),
      T('Formulalar varaqasi: logarifm va trigonometriya alohida boʻlimda',
        'Лист формул: логарифмы и тригонометрия — отдельным разделом'),
      T('Imtihon kuni: uyqu, soat, qora ruchka, doirachani <b>toʻliq</b> boʻyash',
        'В день экзамена: сон, часы, чёрная ручка, кружок закрашивать <b>полностью</b>')],
 misol=T('', ''),
 mashq=['2025/26 — 30 savol']),
]

TACTICS = [
 (T('Ball taqsimoti', 'Распределение баллов'),
  T('Savollar kitobiga koʻra: 1–10 — 0,9 balldan (9 ball), 11–20 — 1,5 balldan (15 ball), '
    '21–30 — 2,6 balldan (26 ball). Jami 50 ball, 90 daqiqa.',
    'Согласно книге заданий: 1–10 — по 0,9 балла (9), 11–20 — по 1,5 (15), '
    '21–30 — по 2,6 (26). Итого 50 баллов, 90 минут.')),
 (T('Ochiq savollar — ballning yarmidan koʻpi', 'Открытые задачи — больше половины баллов'),
  T('21–30 bloki 26 ball, yaʼni <b>52 %</b>. 11-sinfda bu blokda butun qism, '
    'trigonometrik tenglama va ichki chizilgan toʻrtburchak toʻplangan.',
    'Блок 21–30 даёт 26 баллов, то есть <b>52 %</b>. В 11 классе там собраны целая часть, '
    'тригонометрические уравнения и вписанный четырёхугольник.')),
 (T('Birinchi oʻtish — faqat «koʻrgan zahoti» yechiladiganlar',
    'Первый проход — только то, что решается сразу'),
  T('Birinchi 20 daqiqada 1–10 ni oling. Bitta savolga 2 daqiqadan koʻp ketsa — '
    'belgilab qoʻying va oʻting.',
    'За первые 20 минут закройте 1–10. Если на задачу уходит больше 2 минут — '
    'отметьте её и идите дальше.')),
 (T('Yopiq savolda boʻsh qoldirmang', 'В закрытых задачах не оставляйте пропусков'),
  T('Kitobda notoʻgʻri javob uchun ball ayirish koʻrsatilmagan, shuning uchun 1–20 da '
    'har bir doiracha boʻyalgan boʻlsin.',
    'В книге заданий вычет баллов за неверный ответ не указан, поэтому в 1–20 должен быть '
    'закрашен каждый кружок.')),
 (T('Trigonometriyada chorakni tekshiring', 'В тригонометрии проверяйте четверть'),
  T('Ildiz ostidan chiqqan ifodada <b>modul</b> paydo boʻladi — ishora burchak qaysi '
    'chorakda yotishiga bogʻliq. 11-sinfda eng koʻp xato aynan shu yerda.',
    'При извлечении корня возникает <b>модуль</b> — знак зависит от четверти угла. '
    'В 11 классе именно здесь больше всего ошибок.')),
 (T('Oxirgi 5 daqiqa — faqat tekshirish', 'Последние 5 минут — только проверка'),
  T('Javoblar varaqasidagi raqamlar mos tushganini va doirachalar toʻliq boʻyalganini tekshiring.',
    'Проверьте совпадение номеров в бланке и полноту закраски кружков.')),
]
