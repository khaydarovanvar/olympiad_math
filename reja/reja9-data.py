# -*- coding: utf-8 -*-
"""Uzbek + Russian content for the 20-day grade-9 plan. T(uz, ru)."""
T = lambda uz, ru: (uz, ru)

CHROME = dict(
 eyebrow=T('Fan olimpiadalari · tuman (shahar) bosqichi',
           'Предметные олимпиады · районный (городской) этап'),
 h1=T('20 kunda tuman bosqichiga', 'К районному этапу за 20 дней'),
 sub=T('9-sinf matematika — kun-ba-kun tayyorgarlik rejasi, mavzular izohi va '
       'oʻtgan yillar savollari.',
       'Математика, 9 класс — план подготовки по дням, разбор тем и задачи прошлых лет.'),
 spec=[T('<b>30</b> savol', '<b>30</b> задач'), T('<b>90</b> daqiqa', '<b>90</b> минут'),
       T('<b>50</b> ball', '<b>50</b> баллов'),
       T('1–20 yopiq · 21–30 ochiq', '1–20 закрытые · 21–30 открытые')],
 h2a=T('Imtihon aslida nimani soʻraydi', 'Что спрашивают на самом деле'),
 h2b=T('Kun-ba-kun reja', 'План по дням'),
 h2c=T('Imtihon kuni taktikasi', 'Тактика в день экзамена'),
 note=T('Uchta haqiqiy variantdagi <b>89 ta savol</b> mavzu boʻyicha ajratildi: '
        '2025/26, 2024/25 va 2024-yil tuman bosqichi. Reja shu nisbatga qarab tuzilgan — '
        'algebra va sonlar nazariyasi birgalikda savollarning yarmidan koʻpini beradi. '
        'Chiziq rangi mavzu qaysi bosqichda oʻtilishini koʻrsatadi.',
        '<b>89 задач</b> из трёх реальных вариантов (2025/26, 2024/25 и 2024) разбиты по темам. '
        'План построен по этим долям — алгебра и теория чисел вместе дают больше половины '
        'задач. Цвет полосы показывает, на каком этапе изучается тема.'),
 mashq=T('Mashq uchun savollar', 'Задачи для отработки'),
 namuna=T('Namuna', 'Пример'),
 src=T('<b>Manbalar:</b> 9-sinf tuman (shahar) bosqichi variantlari — 2025/2026, 2024/2025 '
       'va 2024-yil. Savol raqamlari shu variantlarga tegishli. Reja: Anvarbek Xaydarov.',
       '<b>Источники:</b> варианты районного (городского) этапа, 9 класс — 2025/2026, '
       '2024/2025 и 2024 год. Номера задач относятся к этим вариантам. '
       'План: Анварбек Хайдаров.'),
)

WEIGHTS = [
 (T('Algebra va ayniyatlar', 'Алгебра и тождества'), 28, 31.5, 'alg'),
 (T('Sonlar nazariyasi', 'Теория чисел'), 22, 24.7, 'nt'),
 (T('Geometriya', 'Геометрия'), 18, 20.2, 'geo'),
 (T('Kombinatorika', 'Комбинаторика'), 9, 10.1, 'comb'),
 (T('Ketma-ketliklar', 'Последовательности'), 5, 5.6, 'comb'),
 (T('Funksiyalar', 'Функции'), 3, 3.4, 'comb'),
 (T('Matn masalalari, foiz', 'Текстовые задачи, проценты'), 3, 3.4, 'rev'),
 (T('Trigonometriya', 'Тригонометрия'), 1, 1.1, 'rev'),
]

PHASES = [
 dict(key='alg', kunlar=T('1–6-kun', 'дни 1–6'),
   nom=T('1-bosqich · Algebra poydevori', 'Этап 1 · Фундамент алгебры'),
   izoh=T('Uch yillik savollarning <b>31,5 %</b> i shu yerdan. Koʻpaytuvchilarga ajratish va '
          'Viyet formulalari boshqa mavzularda ham qayta-qayta ishlatiladi, shuning uchun '
          'birinchi boʻlib shu blok beriladi.',
          '<b>31,5 %</b> задач за три года. Разложение на множители и формулы Виета '
          'используются и в других темах, поэтому этот блок идёт первым.')),
 dict(key='nt', kunlar=T('7–11-kun', 'дни 7–11'),
   nom=T('2-bosqich · Sonlar nazariyasi', 'Этап 2 · Теория чисел'),
   izoh=T('<b>24,7 %</b>. Oxirgi ikki yilda bu blok algebradan ham koʻproq savol bergan '
          '(2025/26 da 9 ta, 2024/25 da 9 ta) — eʼtiborni kamaytirmang.',
          '<b>24,7 %</b>. В последние два года этот блок дал даже больше задач, чем алгебра '
          '(по 9 в 2025/26 и 2024/25) — не снижайте внимания.')),
 dict(key='geo', kunlar=T('12–15-kun', 'дни 12–15'),
   nom=T('3-bosqich · Geometriya', 'Этап 3 · Геометрия'),
   izoh=T('<b>20,2 %</b>. Deyarli barcha savollar planimetriya: uchburchak, toʻrtburchak, '
          'aylana. Fazoviy geometriya tuman bosqichida uchramadi.',
          '<b>20,2 %</b>. Почти всё — планиметрия: треугольник, четырёхугольник, окружность. '
          'Стереометрия на районном этапе не встречалась.')),
 dict(key='comb', kunlar=T('16–17-kun', 'дни 16–17'),
   nom=T('4-bosqich · Kombinatorika va ketma-ketliklar',
         'Этап 4 · Комбинаторика и последовательности'),
   izoh=T('<b>15,1 %</b> (kombinatorika 10,1 % + ketma-ketlik va funksiya 9 %). Bu savollar '
          'koʻpincha ochiq turdagi 21–30 blokida — ball ogʻirligi yuqori.',
          '<b>15,1 %</b> (комбинаторика 10,1 % + последовательности и функции 9 %). '
          'Эти задачи чаще всего в открытом блоке 21–30 — вес в баллах высокий.')),
 dict(key='rev', kunlar=T('18–20-kun', 'дни 18–20'),
   nom=T('5-bosqich · Yakuniy takror va sinov', 'Этап 5 · Итоговое повторение и пробники'),
   izoh=T('Kichik mavzular yopiladi, soʻng ikkita toʻliq sinov imtihoni 90 daqiqada '
          'oʻtkaziladi. Xato daftari shu kunlarda eng katta foyda beradi.',
          'Закрываются мелкие темы, затем два полных пробных экзамена по 90 минут. '
          'Тетрадь ошибок именно в эти дни приносит больше всего пользы.')),
]

D = lambda **k: k
KUNLAR = [

D(n=1, ph='alg',
 mavzu=T('Ayniyatlar va koʻpaytuvchilarga ajratish', 'Тождества и разложение на множители'),
 nega=T('Har uchala yilda ham 1–8-savollar orasida albatta uchraydi.',
        'Во всех трёх годах обязательно встречается среди задач 1–8.'),
 gap=[T('<b>Qisqa koʻpaytirish:</b> (a±b)², a²−b², (a±b)³, a³±b³',
        '<b>Формулы сокращённого умножения:</b> (a±b)², a²−b², (a±b)³, a³±b³'),
      T('<b>Uch had:</b> a³+b³+c³−3abc = (a+b+c)(a²+b²+c²−ab−bc−ca)',
        '<b>Три куба:</b> a³+b³+c³−3abc = (a+b+c)(a²+b²+c²−ab−bc−ca)'),
      T('<b>Guruhlash va Simon hiylasi:</b> xy+ax+by+ab = (x+b)(y+a) — nomaʼlumni qavsga '
        'yigʻib, oʻng tomonni koʻpaytuvchilarga ajratish',
        '<b>Группировка и приём Симона:</b> xy+ax+by+ab = (x+b)(y+a) — собрать неизвестное '
        'в скобку, правую часть разложить на множители'),
      T('<b>Butun qism ajratish:</b> (n²−3)/(n−2) = n+2 + 1/(n−2)',
        '<b>Выделение целой части:</b> (n²−3)/(n−2) = n+2 + 1/(n−2)')],
 misol=T('<b>2024/25 №9.</b> 4a − 7b + 28ab = 2020. Simon hiylasi: 4a(7b+1) − (7b+1) = 2019, '
         'yaʼni (4a−1)(7b+1) = 2019 = 3·673. 4a−1 = 3 → a = 1, 7b+1 = 673 → b = 96, ab = <b>96</b>.',
         '<b>2024/25 №9.</b> 4a − 7b + 28ab = 2020. Приём Симона: 4a(7b+1) − (7b+1) = 2019, '
         'то есть (4a−1)(7b+1) = 2019 = 3·673. 4a−1 = 3 → a = 1, 7b+1 = 673 → b = 96, ab = <b>96</b>.'),
 mashq=['2024 №1', '2024 №4', '2024 №8', '2025/26 №4', '2024/25 №9', '2024/25 №29']),

D(n=2, ph='alg',
 mavzu=T('Kvadrat tenglama, Viyet teoremasi, parametr', 'Квадратное уравнение, Виет, параметр'),
 nega=T('Viyet uch yilda 5 marta: ildizlar yigʻindisi/koʻpaytmasi orqali simmetrik ifodalar.',
        'Виет за три года 5 раз: симметрические выражения через сумму и произведение корней.'),
 gap=[T('x₁+x₂ = −b/a, x₁x₂ = c/a', 'x₁+x₂ = −b/a, x₁x₂ = c/a'),
      T('x₁²+x₂² = (x₁+x₂)² − 2x₁x₂; x₁⁴+x₂⁴ = (x₁²+x₂²)² − 2(x₁x₂)²',
        'x₁²+x₂² = (x₁+x₂)² − 2x₁x₂; x₁⁴+x₂⁴ = (x₁²+x₂²)² − 2(x₁x₂)²'),
      T('<b>Umumiy ildiz:</b> ikki tenglamani ayirib, chiziqli tenglama hosil qilish',
        '<b>Общий корень:</b> вычесть уравнения и получить линейное'),
      T('<b>Parametr:</b> D &gt; 0, D = 0, D &lt; 0 hollari; «yagona yechim» — ODZ ni unutmang',
        '<b>Параметр:</b> случаи D &gt; 0, D = 0, D &lt; 0; «единственное решение» — не забудьте ОДЗ')],
 misol=T('<b>2025/26 №13.</b> x²+2x−1 = 0 uchun x₁+x₂ = −2, x₁x₂ = −1. '
         'x₁²+x₂² = 4+2 = 6, soʻng x₁⁴+x₂⁴ = 6² − 2·1 = <b>34</b>.',
         '<b>2025/26 №13.</b> Для x²+2x−1 = 0: x₁+x₂ = −2, x₁x₂ = −1. '
         'x₁²+x₂² = 4+2 = 6, затем x₁⁴+x₂⁴ = 6² − 2·1 = <b>34</b>.'),
 mashq=['2025/26 №13', '2024 №2', '2024 №14', '2024 №29', '2024/25 №10']),

D(n=3, ph='alg',
 mavzu=T('Modul va irratsional ifodalar', 'Модуль и иррациональные выражения'),
 nega=T('Modul va ildiz har yili 2–3 savol; koʻpi oson, lekin ODZ da xato qilinadi.',
        'Модуль и корни — 2–3 задачи каждый год; чаще лёгкие, но ошибаются в ОДЗ.'),
 gap=[T('|u| = |v| ⟺ u = ±v; |x−a| — sonlar oʻqidagi masofa',
        '|u| = |v| ⟺ u = ±v; |x−a| — расстояние на числовой оси'),
      T('<b>Ichma-ich ildiz:</b> √(a ± 2√b) = √x ± √y, bunda x+y = a, xy = b',
        '<b>Вложенный корень:</b> √(a ± 2√b) = √x ± √y, где x+y = a, xy = b'),
      T('<b>Qoʻshmaga koʻpaytirish:</b> 1/(√a+√b) = (√a−√b)/(a−b)',
        '<b>Умножение на сопряжённое:</b> 1/(√a+√b) = (√a−√b)/(a−b)'),
      T('Ildizli tengsizlikda ODZ + ikkala tomon manfiy emasligini tekshirish',
        'В иррациональном неравенстве проверяйте ОДЗ и неотрицательность обеих частей')],
 misol=T('<b>2025/26 №10.</b> √(4+2√3) = √3+1 va √(49+8√3) = 1+4√3, '
         'demak (4(√3+1) − (1+4√3))² = 3² = <b>9</b>.',
         '<b>2025/26 №10.</b> √(4+2√3) = √3+1 и √(49+8√3) = 1+4√3, '
         'значит (4(√3+1) − (1+4√3))² = 3² = <b>9</b>.'),
 mashq=['2025/26 №6', '2025/26 №10', '2024 №5', '2024 №18', '2024 №25', '2024/25 №13']),

D(n=4, ph='alg',
 mavzu=T('Nisbat, proporsiya va simmetrik ifodalar',
         'Отношения, пропорции и симметрические выражения'),
 nega=T('«a/b = c/d = k» tipidagi savol uch yilda 6 marta uchradi.',
        'Задачи вида «a/b = c/d = k» встретились за три года 6 раз.'),
 gap=[T('a/b = c/d = k ⟹ a = kb, c = kd — hammasini bitta harfga keltiring',
        'a/b = c/d = k ⟹ a = kb, c = kd — сведите всё к одной букве'),
      T('<b>Har bir kasrga 1 qoʻshish hiylasi:</b> (a+b+c)/d + 1 = S/d, bunda S = a+b+c+d',
        '<b>Приём «прибавить 1»:</b> (a+b+c)/d + 1 = S/d, где S = a+b+c+d'),
      T('S = 0 holi alohida tekshiriladi — koʻpincha ikkinchi javobni shu beradi',
        'Случай S = 0 проверяется отдельно — часто именно он даёт второй ответ'),
      T('Geometrik progressiya: a/b = b/c = c/d ⟹ b² = ac, bc = ad',
        'Геометрическая прогрессия: a/b = b/c = c/d ⟹ b² = ac, bc = ad')],
 misol=T('<b>2025/26 №15.</b> Har bir nisbatga 1 qoʻshsak S/a = S/b = S/c = S/d = r+1. '
         'S ≠ 0 da a = b = c = d va r = 3; S = 0 da r = −1. Yigʻindi <b>2</b>.',
         '<b>2025/26 №15.</b> Прибавив 1 к каждому отношению: S/a = S/b = S/c = S/d = r+1. '
         'При S ≠ 0 получаем a = b = c = d и r = 3; при S = 0 будет r = −1. Сумма <b>2</b>.'),
 mashq=['2025/26 №7', '2025/26 №15', '2025/26 №20', '2024 №6', '2024 №27', '2024/25 №17']),

D(n=5, ph='alg',
 mavzu=T('Tengsizliklar va eng katta/kichik qiymat',
         'Неравенства и наибольшее/наименьшее значение'),
 nega=T('Har yili 1–2 savol; ayniqsa kvadrat uchhadning minimumi.',
        '1–2 задачи каждый год; особенно минимум квадратного трёхчлена.'),
 gap=[T('Kvadrat tengsizlik: ildizlarni topib, oraliqlar usuli bilan ishora jadvali',
        'Квадратное неравенство: найти корни и построить таблицу знаков методом интервалов'),
      T('Kasrli tengsizlikda maxrajni <b>koʻpaytirmang</b> — ishorani yoʻqotasiz',
        'В дробном неравенстве <b>не умножайте</b> на знаменатель — потеряете знак'),
      T('<b>AM–GM:</b> a+b ≥ 2√(ab), tenglik a = b da',
        '<b>AM–GM:</b> a+b ≥ 2√(ab), равенство при a = b'),
      T('Kvadrat uchhadning minimumi: t = −b/(2a); almashtirish (t = x²) bilan darajani tushiring',
        'Минимум квадратного трёхчлена: t = −b/(2a); заменой (t = x²) понижайте степень')],
 misol=T('<b>2024 №7.</b> x − 1 ≥ 2024/(x+1). Maxrajni shunchaki koʻpaytirib boʻlmaydi: '
         'x+1 &gt; 0 da x² ≥ 2025 ⟹ x ≥ 45, x+1 &lt; 0 da esa ishora almashib x² ≤ 2025 ⟹ '
         '−45 ≤ x &lt; −1. Eng kichik butun yechim — <b>−45</b>.',
         '<b>2024 №7.</b> x − 1 ≥ 2024/(x+1). Просто умножить на знаменатель нельзя: '
         'при x+1 &gt; 0 получаем x² ≥ 2025 ⟹ x ≥ 45, а при x+1 &lt; 0 знак меняется: '
         'x² ≤ 2025 ⟹ −45 ≤ x &lt; −1. Наименьшее целое решение — <b>−45</b>.'),
 mashq=['2024 №7', '2024 №18', '2024/25 №22', '2025/26 №1']),

D(n=6, ph='alg',
 mavzu=T('Algebra — aralash mashq va xato tahlili', 'Алгебра — смешанная практика и разбор ошибок'),
 nega=T('Blokni mustahkamlash: 1–5-kun mavzulari aralash tartibda beriladi.',
        'Закрепление блока: темы дней 1–5 даются вперемешку.'),
 gap=[T('60 daqiqada 20 ta aralash algebra savoli (vaqt nazorati bilan)',
        '20 смешанных задач по алгебре за 60 минут (с контролем времени)'),
      T('Har bir xato uchun <b>xato daftari</b>ga yozuv: qaysi gʻoya yetishmadi',
        'На каждую ошибку — запись в <b>тетрадь ошибок</b>: какой идеи не хватило'),
      T('Notoʻgʻri javoblar qayta yechiladi — ertasi kuni emas, oʻsha kuni',
        'Неверные задачи перерешиваются — не назавтра, а в тот же день'),
      T('Tez hisob mashqi: 2, 3, 5, 9, 11 ga boʻlinish alomatlari ogʻzaki',
        'Устный счёт: признаки делимости на 2, 3, 5, 9, 11')],
 misol=T('', ''),
 mashq=['2024 №1–8', '2025/26 №1, 6, 7, 10, 13, 14, 15', '2024/25 №1, 13, 17, 22']),

D(n=7, ph='nt',
 mavzu=T('Boʻlinish alomatlari va raqamlar bilan ishlash', 'Признаки делимости и работа с цифрами'),
 nega=T('Raqamli savollar («abcd» koʻrinishidagi) har yili 2–3 ta.',
        'Задачи с цифрами (вида «abcd») — 2–3 каждый год.'),
 gap=[T('Sonni yoyib yozish: abc = 100a + 10b + c', 'Развёрнутая запись: abc = 100a + 10b + c'),
      T('3 va 9 ga — raqamlar yigʻindisi; 11 ga — navbatlashuvchi yigʻindi',
        'На 3 и 9 — сумма цифр; на 11 — знакочередующаяся сумма'),
      T('7 ga: 10ᵏ ning qoldiqlari 1, 3, 2, 6, 4, 5 davr bilan takrorlanadi',
        'На 7: остатки 10ᵏ повторяются с периодом 1, 3, 2, 6, 4, 5'),
      T('4 va 8 ga — oxirgi ikki/uch raqam; 5 va 25 ga — oxirgi raqamlar',
        'На 4 и 8 — две/три последние цифры; на 5 и 25 — последние цифры')],
 misol=T('<b>2025/26 №23.</b> 10ᵏ ning 7 ga qoldiqlarini qoʻyib, '
         'N ≡ 3A + 5 (mod 7) chiqadi → A = 3, B ning eng kichigi 1, A+B = <b>4</b>.',
         '<b>2025/26 №23.</b> Подставив остатки 10ᵏ по модулю 7, получаем '
         'N ≡ 3A + 5 (mod 7) → A = 3, наименьшее B = 1, A+B = <b>4</b>.'),
 mashq=['2025/26 №5', '2025/26 №23', '2025/26 №28', '2024 №11', '2024 №24', '2024/25 №15']),

D(n=8, ph='nt',
 mavzu=T('Qoldiqlar va modular arifmetika', 'Остатки и модульная арифметика'),
 nega=T('Darajaning oxirgi raqamlari — eng barqaror mavzu, har yili bor.',
        'Последние цифры степеней — самая устойчивая тема, есть каждый год.'),
 gap=[T('a ≡ b (mod m) bilan ishlash: qoʻshish, koʻpaytirish, daraja',
        'Работа с a ≡ b (mod m): сложение, умножение, возведение в степень'),
      T('Oxirgi raqam — mod 10, davri 4; oxirgi ikki raqam — mod 100, davri 20',
        'Последняя цифра — mod 10, период 4; две последние — mod 100, период 20'),
      T('Katta darajani bosqichma-bosqich kvadratga koʻtarish',
        'Большую степень возводить в квадрат пошагово'),
      T('Faktoriallar yigʻindisi: 10! dan keyin oxirgi ikki raqam oʻzgarmaydi',
        'Сумма факториалов: после 10! две последние цифры не меняются')],
 misol=T('<b>2025/26 №18.</b> 3²⁰ ≡ 1 (mod 100) va 2025 = 20·101 + 5, '
         'demak 3²⁰²⁵ ≡ 3⁵ = 243 ≡ <b>43</b>.',
         '<b>2025/26 №18.</b> 3²⁰ ≡ 1 (mod 100) и 2025 = 20·101 + 5, '
         'значит 3²⁰²⁵ ≡ 3⁵ = 243 ≡ <b>43</b>.'),
 mashq=['2025/26 №8', '2025/26 №18', '2025/26 №22', '2024 №12', '2024/25 №8']),

D(n=9, ph='nt',
 mavzu=T('Tub sonlar, boʻluvchilar soni, Lежandr formulasi',
         'Простые числа, количество делителей, формула Лежандра'),
 nega=T('«Nechta boʻluvchisi bor» va «n! nechta nolga tugaydi» — takrorlanuvchi juftlik.',
        '«Сколько делителей» и «сколькими нулями оканчивается n!» — повторяющаяся пара.'),
 gap=[T('n = p₁^α₁···p_k^α_k ⟹ boʻluvchilar soni (α₁+1)···(α_k+1)',
        'n = p₁^α₁···p_k^α_k ⟹ число делителей (α₁+1)···(α_k+1)'),
      T('Aynan 3 ta boʻluvchi ⟺ n = p² (tub sonning kvadrati)',
        'Ровно 3 делителя ⟺ n = p² (квадрат простого)'),
      T('<b>Lежandr:</b> v_p(n!) = ⌊n/p⌋ + ⌊n/p²⌋ + ⌊n/p³⌋ + ···',
        '<b>Лежандр:</b> v_p(n!) = ⌊n/p⌋ + ⌊n/p²⌋ + ⌊n/p³⌋ + ···'),
      T('Nollar soni = min(v₂, v₅), odatda v₅ ga teng',
        'Число нулей = min(v₂, v₅), обычно равно v₅')],
 misol=T('<b>2025/26 №17.</b> Ikki xonali sonlar koʻpaytmasi = 99!/9!. '
         'v₃(99!) = 33+11+3+1 = 48, v₃(9!) = 4, demak n = <b>44</b>.',
         '<b>2025/26 №17.</b> Произведение двузначных чисел = 99!/9!. '
         'v₃(99!) = 33+11+3+1 = 48, v₃(9!) = 4, значит n = <b>44</b>.'),
 mashq=['2025/26 №4', '2025/26 №17', '2024 №12', '2024/25 №2', '2024/25 №11', '2024/25 №23']),

D(n=10, ph='nt',
 mavzu=T('Diofant tenglamalari', 'Диофантовы уравнения'),
 nega=T('Har yili 1–2 ta, koʻpincha ochiq (2,6 ball) blokida.',
        '1–2 каждый год, чаще в открытом блоке (2,6 балла).'),
 gap=[T('Koʻpaytuvchilarga ajratib, (·)(·) = N shaklga keltirish va N ning boʻluvchilarini saralash',
        'Разложить на множители до вида (·)(·) = N и перебрать делители N'),
      T('<b>Juftlik va qoldiq bilan cheklash:</b> mod 3, mod 4, mod 8 boʻyicha qarama-qarshilik',
        '<b>Ограничение чётностью и остатками:</b> противоречие по mod 3, mod 4, mod 8'),
      T('ax + by = c: yechim bor ⟺ EKUB(a,b) | c; umumiy yechim a→a+b/d, b→b−a/d',
        'ax + by = c: решение есть ⟺ НОД(a,b) | c; общее решение a→a+b/d, b→b−a/d'),
      T('Chicken McNugget: 2a+3b, 13a+31b tipidagi «ifodalab boʻlmaydigan sonlar»',
        'Задача Фробениуса: «непредставимые числа» вида 2a+3b, 13a+31b')],
 misol=T('<b>2025/26 №19.</b> p²−1 = 2q² → (p−1)(p+1) = 2q². p toq boʻlgani uchun chap tomon '
         '8 ga boʻlinadi ⟹ q juft ⟹ q = 2, p = 3. Yagona juftlik — <b>1 ta</b>.',
         '<b>2025/26 №19.</b> p²−1 = 2q² → (p−1)(p+1) = 2q². Так как p нечётно, левая часть '
         'делится на 8 ⟹ q чётно ⟹ q = 2, p = 3. Единственная пара — <b>1</b>.'),
 mashq=['2025/26 №19', '2025/26 №24', '2024/25 №7', '2024/25 №9', '2024/25 №18']),

D(n=11, ph='nt',
 mavzu=T('Sonlar nazariyasi — aralash mashq', 'Теория чисел — смешанная практика'),
 nega=T('Blokni mustahkamlash; ochiq savollarga urgʻu.',
        'Закрепление блока; упор на открытые задачи.'),
 gap=[T('50 daqiqada 15 ta aralash savol', '15 смешанных задач за 50 минут'),
      T('Har bir savolda avval <b>qaysi vosita</b> kerakligini aytish — keyin yechish',
        'К каждой задаче сначала назвать <b>инструмент</b> — потом решать'),
      T('Xato daftaridagi 7–10-kun xatolari qayta ishlanadi',
        'Прорабатываются ошибки дней 7–10 из тетради ошибок'),
      T('Ogʻzaki: 100 gacha tub sonlar, 2–15 ning kvadratlari, 2 ning darajalari 2¹⁰ gacha',
        'Устно: простые до 100, квадраты 2–15, степени двойки до 2¹⁰')],
 misol=T('', ''),
 mashq=['2025/26 №2, 5, 8, 17, 18, 19, 23, 28', '2024/25 №2, 7, 8, 9, 11, 15, 18']),

D(n=12, ph='geo',
 mavzu=T('Uchburchak: burchak, mediana, bissektrisa, balandlik',
         'Треугольник: углы, медиана, биссектриса, высота'),
 nega=T('Geometriya savollarining yarmi uchburchakka oid.',
        'Половина геометрических задач — о треугольнике.'),
 gap=[T('Burchaklar yigʻindisi 180°; tashqi burchak = qoʻshni boʻlmagan ikkitasining yigʻindisi',
        'Сумма углов 180°; внешний угол = сумме двух несмежных'),
      T('<b>Gipotenuzaga mediana</b> = gipotenuzaning yarmi',
        '<b>Медиана к гипотенузе</b> = половине гипотенузы'),
      T('<b>Bissektrisa xossasi:</b> AL/LB = CA/CB',
        '<b>Свойство биссектрисы:</b> AL/LB = CA/CB'),
      T('Teng yonli uchburchakda asosga tushirilgan balandlik — mediana ham, bissektrisa ham',
        'В равнобедренном треугольнике высота к основанию — и медиана, и биссектриса')],
 misol=T('<b>2024 №15.</b> Balandliklar kesishmasi H uchun CH = 2R·cos C, '
         'va AB = 2R·sin C. √3·AB = CH shartidan √3·sin C = cos C, '
         'yaʼni tg C = 1/√3 ⟹ ∠ACB = <b>30°</b>.',
         '<b>2024 №15.</b> Для точки пересечения высот H: CH = 2R·cos C, а AB = 2R·sin C. '
         'Из условия √3·AB = CH получаем √3·sin C = cos C, то есть tg C = 1/√3 ⟹ '
         '∠ACB = <b>30°</b>.'),
 mashq=['2024 №15', '2024 №17', '2024/25 №3', '2024/25 №6', '2024/25 №14', '2024/25 №16']),

D(n=13, ph='geo',
 mavzu=T('Toʻrtburchaklar va yuzalar', 'Четырёхугольники и площади'),
 nega=T('Trapetsiya va toʻgʻri toʻrtburchak — har yili 1–2 savol.',
        'Трапеция и прямоугольник — 1–2 задачи каждый год.'),
 gap=[T('Trapetsiya oʻrta chizigʻi = (a+b)/2; yuzi = oʻrta chiziq × balandlik',
        'Средняя линия трапеции = (a+b)/2; площадь = средняя линия × высота'),
      T('<b>Diagonallari perpendikulyar teng yonli trapetsiya:</b> h = (a+b)/2, S = ((a+b)/2)²',
        '<b>Равнобедренная трапеция с перпендикулярными диагоналями:</b> h = (a+b)/2, S = ((a+b)/2)²'),
      T('<b>Diagonallar boʻlgan 4 uchburchak:</b> [AOB]·[COD] = [BOC]·[AOD]',
        '<b>Четыре треугольника от диагоналей:</b> [AOB]·[COD] = [BOC]·[AOD]'),
      T('Varinyon: tomonlar oʻrtalari parallelogramm, yuzi asl figuraning yarmi',
        'Вариньон: середины сторон дают параллелограмм площадью в половину исходной')],
 misol=T('<b>2025/26 №9.</b> Asoslari 12 va 8, diagonallari perpendikulyar teng yonli '
         'trapetsiya: h = (12+8)/2 = 10, S = 10·10 = <b>100</b>.',
         '<b>2025/26 №9.</b> Равнобедренная трапеция с основаниями 12 и 8 и перпендикулярными '
         'диагоналями: h = (12+8)/2 = 10, S = 10·10 = <b>100</b>.'),
 mashq=['2025/26 №9', '2025/26 №27', '2024 №23', '2024 №28', '2024/25 №24']),

D(n=14, ph='geo',
 mavzu=T('Aylana: ichki burchak, urinma, urinuvchi aylanalar',
         'Окружность: вписанный угол, касательная, касающиеся окружности'),
 nega=T('Aylana savollari koʻpincha ochiq blokda (2,6 ball) turadi.',
        'Задачи на окружность чаще в открытом блоке (2,6 балла).'),
 gap=[T('Ichki chizilgan burchak = tayanch yoyning yarmi; diametrga tayansa 90° (Fales)',
        'Вписанный угол = половине дуги; опирающийся на диаметр — 90° (Фалес)'),
      T('<b>Urinma–vatar burchagi</b> ham yoyning yarmiga teng',
        '<b>Угол между касательной и хордой</b> тоже равен половине дуги'),
      T('Nuqtaning aylanaga nisbatan darajasi: PA·PB = PC·PD',
        'Степень точки относительно окружности: PA·PB = PC·PD'),
      T('Burchakka ichki chizilgan aylana: markazdan uchgacha masofa r/sin(α/2)',
        'Окружность, вписанная в угол: расстояние от центра до вершины r/sin(α/2)')],
 misol=T('<b>2025/26 №21.</b> Yoylarni 12x, 4x, 6x, 162° deb belgilab, yigʻindisi 360° dan '
         'x = 9°. Keyin ∠ABC = (54° + 162°)/2 = <b>108°</b>.',
         '<b>2025/26 №21.</b> Обозначив дуги 12x, 4x, 6x, 162°, из суммы 360° получаем '
         'x = 9°. Затем ∠ABC = (54° + 162°)/2 = <b>108°</b>.'),
 mashq=['2025/26 №11', '2025/26 №21', '2025/26 №27', '2024 №19', '2024 №26']),

D(n=15, ph='geo',
 mavzu=T('Koordinata usuli, burish va aralash mashq',
         'Координатный метод, поворот и смешанная практика'),
 nega=T('Qiyin geometriya savolini koordinata yoki burish bilan «algebraga» aylantirish.',
        'Трудную геометрию превращаем в алгебру координатами или поворотом.'),
 gap=[T('Koordinata kiritish: toʻgʻri burchakni (0;0) ga qoʻying, tomonlarni oʻqlarga',
        'Ввод координат: прямой угол в (0;0), стороны вдоль осей'),
      T('<b>Burish hiylasi:</b> kvadrat ichidagi nuqta masalalari 90° burish bilan yechiladi',
        '<b>Приём поворота:</b> задачи о точке внутри квадрата решаются поворотом на 90°'),
      T('Pifagor teoremasiga teskari teorema bilan toʻgʻri burchakni aniqlash',
        'Прямой угол устанавливается обратной теоремой Пифагора'),
      T('Stuart teoremasi: cheviana uzunligi (aylana va uchburchak masalalarida)',
        'Теорема Стюарта: длина чевианы (в задачах об окружности и треугольнике)')],
 misol=T('<b>2025/26 №30.</b> M kvadrat ichida, MA=1, MB=2, MC=3. B atrofida 90° burib, '
         'MM′ = 2√2, M′C = 1, MC = 3 → 8+1 = 9 ⟹ toʻgʻri burchak; ∠AMB = 45°+90° = <b>135°</b>.',
         '<b>2025/26 №30.</b> M внутри квадрата, MA=1, MB=2, MC=3. Повернув на 90° вокруг B: '
         'MM′ = 2√2, M′C = 1, MC = 3 → 8+1 = 9 ⟹ прямой угол; ∠AMB = 45°+90° = <b>135°</b>.'),
 mashq=['2025/26 №3', '2025/26 №30', '2024 №16', '2024 №19', '2024 №28']),

D(n=16, ph='comb',
 mavzu=T('Sanash: koʻpaytirish qoidasi, oʻrin almashtirish, tanlash',
         'Подсчёт: правило произведения, перестановки, сочетания'),
 nega=T('Kombinatorika 10,1 %, va deyarli hammasi ochiq blokda.',
        'Комбинаторика — 10,1 %, и почти вся в открытом блоке.'),
 gap=[T('Koʻpaytirish va qoʻshish qoidalari; <b>teskarisini sanash</b> (dopolnenie)',
        'Правила произведения и суммы; <b>подсчёт дополнения</b>'),
      T('P_n = n!, C(n,k) = n!/(k!(n−k)!)', 'P_n = n!, C(n,k) = n!/(k!(n−k)!)'),
      T('<b>Toʻsiqlar va sharlar:</b> x₁+···+x_k = n ning yechimlari C(n+k−1, k−1)',
        '<b>Шары и перегородки:</b> число решений x₁+···+x_k = n равно C(n+k−1, k−1)'),
      T('Boʻluvchilarni taqsimlash: xyz = 2⁸·3⁴ ⟹ C(10,2)·C(6,2)',
        'Распределение делителей: xyz = 2⁸·3⁴ ⟹ C(10,2)·C(6,2)')],
 misol=T('<b>2025/26 №24.</b> xyz = 12⁴ = 2⁸·3⁴. Ikkilik darajani 3 ga taqsimlash C(10,2) = 45, '
         'uchlik C(6,2) = 15, jami 45·15 = <b>675</b>.',
         '<b>2025/26 №24.</b> xyz = 12⁴ = 2⁸·3⁴. Распределение степени двойки: C(10,2) = 45, '
         'тройки: C(6,2) = 15, всего 45·15 = <b>675</b>.'),
 mashq=['2025/26 №24', '2025/26 №26', '2025/26 №29', '2024 №30', '2024/25 №21', '2024/25 №25']),

D(n=17, ph='comb',
 mavzu=T('Ketma-ketliklar, progressiyalar va funksiyalar',
         'Последовательности, прогрессии и функции'),
 nega=T('Progressiya + rekurrent + funksional almashtirish = 9 % savol.',
        'Прогрессии + рекуррентность + функциональная замена = 9 % задач.'),
 gap=[T('AP: a_n = a₁+(n−1)d, S_n = (a₁+a_n)n/2; chetdan teng uzoqlikdagi hadlar yigʻindisi bir xil',
        'АП: a_n = a₁+(n−1)d, S_n = (a₁+a_n)n/2; суммы равноудалённых от концов членов равны'),
      T('GP: b_n = b₁qⁿ⁻¹, |q| &lt; 1 da S = b₁/(1−q)',
        'ГП: b_n = b₁qⁿ⁻¹, при |q| &lt; 1 сумма S = b₁/(1−q)'),
      T('<b>Davriylik:</b> rekurrent munosabatda dastlabki 6–7 hadni yozing — davr koʻrinadi',
        '<b>Периодичность:</b> выпишите 6–7 первых членов рекуррентности — период проявится'),
      T('<b>Funksional almashtirish:</b> f(x)+f(−x) yoki f(x)+f(1/x) yigʻindisini oling',
        '<b>Функциональная замена:</b> возьмите сумму f(x)+f(−x) или f(x)+f(1/x)')],
 misol=T('<b>2025/26 №12.</b> u = 2ˣ belgilansa f(x)+f(−x) = 6 — x ga bogʻliq emas. '
         'f(t) = 3 boʻlsa f(−t) = 6−3 = <b>3</b>.',
         '<b>2025/26 №12.</b> При замене u = 2ˣ получаем f(x)+f(−x) = 6 — не зависит от x. '
         'Если f(t) = 3, то f(−t) = 6−3 = <b>3</b>.'),
 mashq=['2025/26 №12', '2025/26 №16', '2025/26 №20', '2024 №10', '2024 №13',
        '2024/25 №5', '2024/25 №26', '2024/25 №27']),

D(n=18, ph='rev',
 mavzu=T('Kichik mavzular: trigonometriya, foiz, matn masalalari',
         'Мелкие темы: тригонометрия, проценты, текстовые задачи'),
 nega=T('Alohida-alohida kam, lekin birgalikda 8 % — arzon ballar.',
        'По отдельности мало, но вместе 8 % — дешёвые баллы.'),
 gap=[T('sin²α+cos²α = 1, sin2α = 2 sin α cos α, tg α = sin α / cos α',
        'sin²α+cos²α = 1, sin2α = 2 sin α cos α, tg α = sin α / cos α'),
      T('<b>Ketma-ket chegirma:</b> 15 % va 5 % = 0,85·0,95 — qoʻshib 20 % <b>emas</b>',
        '<b>Последовательные скидки:</b> 15 % и 5 % = 0,85·0,95 — <b>не</b> 20 % в сумме'),
      T('Ish unumdorligi: butun ishni 1 deb oling, 1/t — bir soatlik unum',
        'Производительность: примите всю работу за 1, 1/t — выработка за час'),
      T('Aralashma: oʻrtacha narx chetlardan teng uzoqlikda boʻlsa — teng miqdorda',
        'Смесь: если средняя цена равноудалена от крайних — количества равны')],
 misol=T('<b>2025/26 №25.</b> tg α + sin α = 1 dan c = s/(1−s); qaytma tenglamaga keltirib '
         'sin 2α = 2(√2−1), demak (sin 2α + 2)² = (2√2)² = <b>8</b>.',
         '<b>2025/26 №25.</b> Из tg α + sin α = 1 следует c = s/(1−s); сведя к возвратному '
         'уравнению, sin 2α = 2(√2−1), значит (sin 2α + 2)² = (2√2)² = <b>8</b>.'),
 mashq=['2025/26 №25', '2024 №3', '2024 №20', '2024/25 №12', '20 masala: 5, 7, 8, 13, 14']),

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
 gap=[T('2024/25 varianti — yana 90 daqiqa', 'Вариант 2024/25 — снова 90 минут'),
      T('Xato daftaridagi eng koʻp takrorlangan <b>3 ta</b> mavzu qayta koʻriladi',
        'Пересматриваются <b>3</b> самые частые темы из тетради ошибок'),
      T('Formulalar varaqasi: bir betga sigʻadigan 25 ta formula yozib chiqiladi',
        'Лист формул: выписываются 25 формул, умещающихся на одну страницу'),
      T('Imtihon kuni: uyqu, soat, qora ruchka, doirachani <b>toʻliq</b> boʻyash',
        'В день экзамена: сон, часы, чёрная ручка, кружок закрашивать <b>полностью</b>')],
 misol=T('', ''),
 mashq=['2024/25 — 30 savol', '2025/26 — uy uchun']),
]

TACTICS = [
 (T('Ball taqsimoti', 'Распределение баллов'),
  T('Savollar kitobiga koʻra: 1–10 — 0,9 balldan (9 ball), 11–20 — 1,5 balldan (15 ball), '
    '21–30 — 2,6 balldan (26 ball). Jami 50 ball, 90 daqiqa.',
    'Согласно книге заданий: 1–10 — по 0,9 балла (9), 11–20 — по 1,5 (15), '
    '21–30 — по 2,6 (26). Итого 50 баллов, 90 минут.')),
 (T('Ochiq savollar — ballning yarmidan koʻpi', 'Открытые задачи — больше половины баллов'),
  T('21–30 bloki 26 ball beradi, yaʼni <b>52 %</b>. Faqat 1–20 ni mukammal ishlagan oʻquvchi '
    '24 balldan oshmaydi. Shuning uchun oxirgi 10 savolga kamida 35 daqiqa qoldiring.',
    'Блок 21–30 даёт 26 баллов, то есть <b>52 %</b>. Ученик, идеально решивший только 1–20, '
    'не наберёт больше 24. Поэтому на последние 10 задач оставьте минимум 35 минут.')),
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
