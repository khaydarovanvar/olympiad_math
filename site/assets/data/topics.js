/* Every topic of the Grades 7-11 olympiad library, with its resources.
   Titles, categories, tips, card labels and descriptions carry all three
   languages — Russian, English and Uzbek; resource titles are proper names
   and stay as they are.  Uzbek uses the modern Latin script.
   Edit here and the home, library and topic pages all follow.

   Author: Anvarbek Khaydarov, mathematics teacher, Uzbekistan. */
var TOPICS = [
 {
  "n": 1,
  "title": {
   "en": "Divisibility & GCD/LCM",
   "ru": "Делимость, НОД и НОК",
   "uz": "Boʻlinuvchanlik, EKUB va EKUK"
  },
  "cat": {
   "en": "Number Theory",
   "ru": "Теория чисел",
   "uz": "Sonlar nazariyasi"
  },
  "catKey": "nt",
  "color": "#1E6FB8",
  "tint": "#E8F1FA",
  "tip": {
   "en": "Start here. Divisibility is the foundation of all number theory. Master the Euclidean algorithm — it appears in at least one problem at every round of the Uzbekistan olympiad.",
   "ru": "Начните отсюда. Делимость — фундамент всей теории чисел. Освойте алгоритм Евклида: он встречается хотя бы в одной задаче на каждом туре олимпиады Узбекистана.",
   "uz": "Shu yerdan boshlang. Boʻlinuvchanlik — butun sonlar nazariyasining poydevori. Yevklid algoritmini puxta oʻzlashtiring: u Oʻzbekiston olimpiadasining har bir turida hech boʻlmaganda bitta masalada uchraydi."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "Introduction to Number Theory — AoPS (Crawford)",
      "desc": {
       "en": "Covers GCD, LCM, divisibility and Euclidean algorithm with hundreds of practice problems.",
       "ru": "Охватывает НОД, НОК, делимость и алгоритм Евклида; сотни тренировочных задач.",
       "uz": "EKUB, EKUK, boʻlinuvchanlik va Yevklid algoritmini yuzlab mashq masalasi bilan qamrab oladi."
      },
      "url": "https://artofproblemsolving.com/store/book/intro-number-theory",
      "price": "paid",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Olympiad Number Theory — Justin Stevens (FREE)",
      "desc": {
       "en": "Free 100-page PDF. Chapters 1-2 cover divisibility and GCD/LCM with competition examples.",
       "ru": "Бесплатный PDF на 100 страниц. Главы 1–2 — делимость и НОД/НОК с олимпиадными примерами.",
       "uz": "Bepul 100 betlik PDF. 1–2-boblar boʻlinuvchanlik va EKUB/EKUK ni musobaqa misollari bilan beradi."
      },
      "url": "https://s3.amazonaws.com/aops-cdn.artofproblemsolving.com/resources/articles/olympiad-number-theory.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Euclidean Algorithm",
      "desc": {
       "en": "Clear explanation with proofs, examples, and competition problem links.",
       "ru": "Ясное изложение с доказательствами, примерами и ссылками на олимпиадные задачи.",
       "uz": "Isbotlar, misollar va musobaqa masalalariga havolalar bilan aniq tushuntirish."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Euclidean_algorithm",
      "price": "free",
      "star": false
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: GCD and LCM",
      "desc": {
       "en": "Definitions, properties, theorems, and worked problems.",
       "ru": "Определения, свойства, теоремы и разобранные задачи.",
       "uz": "Taʼriflar, xossalar, teoremalar va tahlil qilingan masalalar."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Greatest_common_divisor",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "video",
    "cards": [
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Khan Academy: GCD & LCM",
      "desc": {
       "en": "Step-by-step visual lessons on GCD and LCM. Great for beginners.",
       "ru": "Пошаговые наглядные уроки по НОД и НОК. Отлично для начинающих.",
       "uz": "EKUB va EKUK boʻyicha qadamma-qadam koʻrgazmali darslar. Boshlovchilar uchun ideal."
      },
      "url": "https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-factors-and-multiples",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Number Theory Basics",
      "desc": {
       "en": "AoPS covers divisibility rules, Euclidean algorithm, and GCD/LCM with olympiad examples.",
       "ru": "AoPS разбирает признаки делимости, алгоритм Евклида и НОД/НОК с олимпиадными примерами.",
       "uz": "AoPS boʻlinish alomatlari, Yevklid algoritmi va EKUB/EKUK ni olimpiada misollari bilan beradi."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "3Blue1Brown: Why does Euclidean algorithm work?",
      "desc": {
       "en": "Beautiful visual explanation. Highly recommended for deeper understanding.",
       "ru": "Красивое наглядное объяснение. Настоятельно рекомендуем для глубокого понимания.",
       "uz": "Goʻzal koʻrgazmali tushuntirish. Chuqurroq tushunish uchun tavsiya etiladi."
      },
      "url": "https://www.youtube.com/watch?v=Jwf6ncRmhPg",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Numberphile — GCD and prime factorization",
      "desc": {
       "en": "Fun accessible exploration of GCD concepts.",
       "ru": "Увлекательный и доступный разбор идеи НОД.",
       "uz": "EKUB tushunchasining qiziqarli va yengil tadqiqi."
      },
      "url": "https://www.youtube.com/@numberphile",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "pdf",
    "cards": [
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Olympiad Number Theory (Justin Stevens)",
      "desc": {
       "en": "Pages 1-25 on divisibility and GCD/LCM with 50+ worked competition examples.",
       "ru": "Страницы 1–25: делимость и НОД/НОК, более 50 разобранных олимпиадных примеров.",
       "uz": "1–25-betlar boʻlinuvchanlik va EKUB/EKUK ga bagʻishlangan, 50 dan ortiq tahlil qilingan musobaqa misoli bilan."
      },
      "url": "https://s3.amazonaws.com/aops-cdn.artofproblemsolving.com/resources/articles/olympiad-number-theory.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Mathnet.uz — Official Uzbekistan Olympiad Guide",
      "desc": {
       "en": "Ministry PDF with GCD/LCM problems from Bukhara viloyat and republic rounds.",
       "ru": "Министерский PDF с задачами на НОД/НОК с областных и республиканских туров Бухары.",
       "uz": "Vazirlik PDF fayli: Buxoro viloyati va respublika bosqichlaridan EKUB/EKUK masalalari."
      },
      "url": "https://mathnet.uz/Uploads/Resurs/5/8f3d6b15-a28c-44de-a194-87060d2e487b_.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "OlympiadUSA — Grade 7-8 Past Papers",
      "desc": {
       "en": "Past exam papers including GCD/LCM problems at grade 7-8 level.",
       "ru": "Задачи прошлых туров, включая НОД/НОК на уровне 7–8 классов.",
       "uz": "7–8-sinf darajasidagi EKUB/EKUK masalalari kirgan oʻtgan yillar variantlari."
      },
      "url": "https://olympiadusa.org/wp-content/uploads/2025/02/january-grade-7-8-past-exams-questions-and-solutions-olympiadusa-org.pdf",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Evan Chen — MONT Handout",
      "desc": {
       "en": "Comprehensive free handout on number theory including divisibility.",
       "ru": "Подробный бесплатный конспект по теории чисел, включая делимость.",
       "uz": "Sonlar nazariyasi boʻyicha bepul va toʻliq tarqatma, boʻlinuvchanlik ham bor."
      },
      "url": "https://web.evanchen.cc/handouts/MONT/MONT.pdf",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "online",
    "cards": [
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Brilliant.org — Number Theory Course",
      "desc": {
       "en": "Interactive lessons on GCD/LCM with auto-graded problems. Free tier available.",
       "ru": "Интерактивные уроки по НОД/НОК с автоматической проверкой. Есть бесплатный уровень.",
       "uz": "EKUB/EKUK boʻyicha interaktiv darslar va avtomatik tekshiriladigan masalalar. Bepul qismi bor."
      },
      "url": "https://brilliant.org/courses/number-theory/",
      "price": "paid",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "AoPS: Divisibility Rules Wiki",
      "desc": {
       "en": "Competition problems tagged GCD/LCM with community solutions.",
       "ru": "Олимпиадные задачи с меткой НОД/НОК и решениями сообщества.",
       "uz": "EKUB/EKUK tegi qoʻyilgan musobaqa masalalari va hamjamiyat yechimlari."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Divisibility_rules",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Cut the Knot — GCD Problems",
      "desc": {
       "en": "Classic math puzzle site with in-depth GCD/LCM explorations.",
       "ru": "Классический сайт математических головоломок с глубокими разборами НОД/НОК.",
       "uz": "Klassik matematik boshqotirma sayti, EKUB/EKUK ni chuqur tahlil qiladi."
      },
      "url": "https://www.cut-the-knot.org/blue/GCD.shtml",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "NRICH — Divisibility Problems",
      "desc": {
       "en": "UK math enrichment with curated GCD/LCM competition problems.",
       "ru": "Британский проект с подборкой олимпиадных задач на НОД/НОК.",
       "uz": "Britaniya matematika toʻgaragi: tanlangan EKUB/EKUK musobaqa masalalari."
      },
      "url": "https://nrich.maths.org",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "uzbek",
    "cards": [
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "olympiad.maktab.uz — Al-Xorazmiy Materials",
      "desc": {
       "en": "Official Uzbekistan olympiad platform. Al-Xorazmiy district-round grade 7-8 papers.",
       "ru": "Официальная олимпиадная платформа Узбекистана. Районные туры Аль-Хорезми, 7–8 классы.",
       "uz": "Oʻzbekistonning rasmiy olimpiada platformasi. Al-Xorazmiy tuman bosqichi, 7–8-sinf variantlari."
      },
      "url": "https://olympiad.maktab.uz/Site/OlympiadMaterials",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Mathnet.uz — Official Resource Portal",
      "desc": {
       "en": "Ministry of Higher Education portal with structured olympiad guides.",
       "ru": "Портал Министерства высшего образования со структурированными олимпиадными руководствами.",
       "uz": "Oliy taʼlim vazirligi portali, tizimli olimpiada qoʻllanmalari bilan."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Qiziqarli Matematika (A.Yunusov) — ziyouz.com",
      "desc": {
       "en": "Classic Uzbek book with interesting math and olympiad problems including divisibility.",
       "ru": "Классическая узбекская книга с занимательными и олимпиадными задачами, включая делимость.",
       "uz": "Klassik oʻzbek kitobi: qiziqarli matematika va olimpiada masalalari, boʻlinuvchanlik ham bor."
      },
      "url": "https://www.ziyouz.com/books/kollej_va_otm_darsliklari/matematika/Qiziqarli%20matematika%20va%20olimpiada%20masalalari%20(A.Yunusov%20va%20b.).pdf",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "info-master.uz — Al-Xorazmiy tests",
      "desc": {
       "en": "Online test platform with Al-Xorazmiy olympiad tests for 7-8 sinf by topic.",
       "ru": "Платформа онлайн-тестов с заданиями Аль-Хорезми для 7–8 классов по темам.",
       "uz": "Onlayn test platformasi: 7–8-sinf uchun Al-Xorazmiy olimpiada testlari mavzular boʻyicha."
      },
      "url": "https://info-master.uz/2023/01/al-xorazmiy-olimpiadasi-matematika-%E2%84%961/",
      "price": "free",
      "star": false
     }
    ]
   }
  ]
 },
 {
  "n": 2,
  "title": {
   "en": "Prime Numbers",
   "ru": "Простые числа",
   "uz": "Tub sonlar"
  },
  "cat": {
   "en": "Number Theory",
   "ru": "Теория чисел",
   "uz": "Sonlar nazariyasi"
  },
  "catKey": "nt",
  "color": "#1E6FB8",
  "tint": "#E8F1FA",
  "tip": {
   "en": "Prime factorization is used to count divisors, compute GCDs, and solve over a third of all number theory problems. Know how to factorize any number up to 1000 quickly.",
   "ru": "Разложение на простые множители нужно, чтобы считать делители, находить НОД и решать больше трети всех задач по теории чисел. Научитесь быстро раскладывать любое число до 1000.",
   "uz": "Tub koʻpaytuvchilarga ajratish boʻluvchilar sonini sanashda, EKUB topishda va sonlar nazariyasi masalalarining uchdan bir qismidan koʻpini yechishda ishlatiladi. 1000 gacha boʻlgan istalgan sonni tez ajrata olishni oʻrganing."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "Introduction to Number Theory — AoPS",
      "desc": {
       "en": "Chapters on primes, fundamental theorem, and sieve with hundreds of graded problems.",
       "ru": "Главы о простых числах, основной теореме и решете; сотни задач по возрастанию сложности.",
       "uz": "Tub sonlar, arifmetikaning asosiy teoremasi va elak boʻyicha boblar, yuzlab darajalangan masala bilan."
      },
      "url": "https://artofproblemsolving.com/store/book/intro-number-theory",
      "price": "paid",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Prime Factorization",
      "desc": {
       "en": "Unique factorization theorem, applications, and competition problem links.",
       "ru": "Теорема о единственности разложения, приложения и ссылки на олимпиадные задачи.",
       "uz": "Yagona ajratish teoremasi, uning tatbiqlari va musobaqa masalalariga havolalar."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Prime_factorization",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Sieve of Eratosthenes",
      "desc": {
       "en": "Find all primes up to N efficiently with proof of correctness.",
       "ru": "Как быстро найти все простые до N, с доказательством корректности.",
       "uz": "N gacha boʻlgan barcha tub sonlarni samarali topish, toʻgʻriligi isboti bilan."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Sieve_of_Eratosthenes",
      "price": "free",
      "star": false
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "USSR Olympiad Problem Book — Shkliarsky",
      "desc": {
       "en": "Classic Soviet olympiad book with outstanding number theory and prime problems.",
       "ru": "Классический советский олимпиадный сборник с превосходными задачами о простых числах.",
       "uz": "Klassik sovet olimpiada kitobi: sonlar nazariyasi va tub sonlar boʻyicha ajoyib masalalar."
      },
      "url": "https://www.abebooks.com/9780486277097",
      "price": "paid",
      "star": false
     }
    ]
   },
   {
    "id": "video",
    "cards": [
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "3Blue1Brown — Why do primes make spirals?",
      "desc": {
       "en": "Stunning visual exploration of primes. Builds deep intuition.",
       "ru": "Впечатляющий наглядный разбор простых чисел. Развивает глубокую интуицию.",
       "uz": "Tub sonlarning hayratlanarli koʻrgazmali tadqiqi. Chuqur sezgi shakllantiradi."
      },
      "url": "https://www.youtube.com/watch?v=EK32jo7i5LQ",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Khan Academy: Prime Numbers & Factorization",
      "desc": {
       "en": "Beginner-to-intermediate series on prime factorization with applications.",
       "ru": "Курс от начального до среднего уровня о разложении на простые множители и его применениях.",
       "uz": "Tub koʻpaytuvchilarga ajratish boʻyicha boshlangʻichdan oʻrta darajagacha turkum, tatbiqlari bilan."
      },
      "url": "https://www.khanacademy.org/math/pre-algebra/pre-algebra-factors-multiples",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Numberphile — Mersenne Primes",
      "desc": {
       "en": "Fun videos about special primes. Great motivation for students.",
       "ru": "Увлекательные видео об особых простых числах. Отличная мотивация для учеников.",
       "uz": "Maxsus tub sonlar haqidagi qiziqarli videolar. Oʻquvchilar uchun zoʻr ragʻbat."
      },
      "url": "https://www.youtube.com/@numberphile",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Fundamental Theorem",
      "desc": {
       "en": "Olympiad-focused video on the Fundamental Theorem of Arithmetic.",
       "ru": "Олимпиадное видео об основной теореме арифметики.",
       "uz": "Arifmetikaning asosiy teoremasi boʻyicha olimpiadaga yoʻnaltirilgan video."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "pdf",
    "cards": [
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Olympiad NT — Justin Stevens (FREE)",
      "desc": {
       "en": "Chapters on prime factorization with competition problems from AMC to IMO.",
       "ru": "Главы о разложении на множители с задачами от AMC до IMO.",
       "uz": "Tub koʻpaytuvchilarga ajratish boblari, AMC dan IMO gacha boʻlgan musobaqa masalalari bilan."
      },
      "url": "https://s3.amazonaws.com/aops-cdn.artofproblemsolving.com/resources/articles/olympiad-number-theory.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Evan Chen — MONT Handout (FREE)",
      "desc": {
       "en": "Comprehensive free handout. Section on primes is rigorous and accessible.",
       "ru": "Подробный бесплатный конспект. Раздел о простых числах строгий и понятный.",
       "uz": "Toʻliq bepul tarqatma. Tub sonlar boʻlimi qatʼiy va tushunarli yozilgan."
      },
      "url": "https://web.evanchen.cc/handouts/MONT/MONT.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Mathnet.uz — Uzbekistan Olympiad Guide",
      "desc": {
       "en": "Republic and international olympiad problems including prime-related topics.",
       "ru": "Задачи республиканских и международных олимпиад, включая темы о простых числах.",
       "uz": "Respublika va xalqaro olimpiada masalalari, tub sonlarga oid mavzular ham bor."
      },
      "url": "https://mathnet.uz/Uploads/Resurs/5/8f3d6b15-a28c-44de-a194-87060d2e487b_.pdf",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "AMC 8 Past Papers — Prime sections",
      "desc": {
       "en": "AMC 8 is perfect for school-to-district level. Many problems involve primes.",
       "ru": "AMC 8 идеально подходит для школьного и районного уровня. Много задач о простых числах.",
       "uz": "AMC 8 maktab–tuman darajasi uchun ideal. Koʻp masalada tub sonlar qatnashadi."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/AMC_8_Problems_and_Solutions",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "online",
    "cards": [
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Prime Pages (primes.utm.edu)",
      "desc": {
       "en": "Ultimate reference on prime numbers: records, proofs, and primality tools.",
       "ru": "Исчерпывающий справочник о простых числах: рекорды, доказательства, инструменты проверки.",
       "uz": "Tub sonlar boʻyicha eng toʻliq maʼlumotnoma: rekordlar, isbotlar va tublik testlari."
      },
      "url": "https://primes.utm.edu",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Brilliant.org — Primes Course",
      "desc": {
       "en": "Interactive course with visual explanations of sieve and prime counting.",
       "ru": "Интерактивный курс с наглядным объяснением решета и подсчёта простых чисел.",
       "uz": "Elak va tub sonlarni sanash koʻrgazmali tushuntirilgan interaktiv kurs."
      },
      "url": "https://brilliant.org/courses/number-theory/",
      "price": "paid",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "NRICH: Prime Number Challenges",
      "desc": {
       "en": "Curated competition-quality prime problems for ages 11-16.",
       "ru": "Отобранные олимпиадные задачи о простых числах для 11–16 лет.",
       "uz": "11–16 yosh uchun tanlangan, musobaqa sifatidagi tub son masalalari."
      },
      "url": "https://nrich.maths.org",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Project Euler (Problems 1-10)",
      "desc": {
       "en": "Computational prime problems. Good for programming-inclined students.",
       "ru": "Вычислительные задачи о простых числах. Хорошо для тех, кто программирует.",
       "uz": "Hisoblashga oid tub son masalalari. Dasturlashga qiziquvchilar uchun yaxshi."
      },
      "url": "https://projecteuler.net/archives",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "uzbek",
    "cards": [
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "olympiad.maktab.uz — Respublika bosqichi",
      "desc": {
       "en": "Republic-level problems involving prime numbers from recent years.",
       "ru": "Задачи республиканского уровня о простых числах за последние годы.",
       "uz": "Soʻnggi yillardagi respublika bosqichining tub sonlarga oid masalalari."
      },
      "url": "https://olympiad.maktab.uz/Site/OlympiadMaterials",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Mathnet.uz — Sonlar Nazariyasi",
      "desc": {
       "en": "Official Uzbek math olympiad guide. Prime problems with solutions.",
       "ru": "Официальное руководство по олимпиадам Узбекистана. Задачи о простых числах с решениями.",
       "uz": "Rasmiy oʻzbek matematika olimpiadasi qoʻllanmasi. Tub son masalalari yechimlari bilan."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "bilimlar.uz — Olimpiada savollari",
      "desc": {
       "en": "Grade 7-11 math olympiad problems organized by topic.",
       "ru": "Олимпиадные задачи по математике для 7–11 классов, разложенные по темам.",
       "uz": "7–11-sinflar uchun matematika olimpiadasi masalalari, mavzular boʻyicha tartiblangan."
      },
      "url": "https://bilimlar.uz",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Scribd: Al-Xorazmiy 7-8 sinf papers",
      "desc": {
       "en": "Al-Xorazmiy olympiad papers. Search 'matematika Al-Xorazmiy' for current papers.",
       "ru": "Материалы олимпиады Аль-Хорезми. Ищите «matematika Al-Xorazmiy» для свежих вариантов.",
       "uz": "Al-Xorazmiy olimpiadasi variantlari. Joriy variantlar uchun «matematika Al-Xorazmiy» deb qidiring."
      },
      "url": "https://www.scribd.com/document/781793973",
      "price": "paid",
      "star": false
     }
    ]
   }
  ]
 },
 {
  "n": 3,
  "title": {
   "en": "Modular Arithmetic",
   "ru": "Арифметика остатков",
   "uz": "Qoldiqlar arifmetikasi"
  },
  "cat": {
   "en": "Number Theory",
   "ru": "Теория чисел",
   "uz": "Sonlar nazariyasi"
  },
  "catKey": "nt",
  "color": "#1E6FB8",
  "tint": "#E8F1FA",
  "tip": {
   "en": "Knowing last-digit cycles (2,3,7,9 have period 4) instantly solves a huge class of olympiad problems. Modular arithmetic is essential for at least 2 problems in every Uzbekistan Republic-level paper.",
   "ru": "Знание циклов последних цифр (у 2, 3, 7 и 9 период равен 4) мгновенно решает целый класс олимпиадных задач. Остатки нужны как минимум для двух задач в каждом республиканском варианте.",
   "uz": "Oxirgi raqam sikllarini bilish (2, 3, 7, 9 uchun davr 4 ga teng) olimpiada masalalarining katta sinfini bir zumda yechadi. Qoldiqlar arifmetikasi Oʻzbekiston respublika bosqichining har bir variantida kamida ikkita masala uchun zarur."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Modular Arithmetic",
      "desc": {
       "en": "Complete reference: notation, properties, congruences, Fermat/Euler theorems.",
       "ru": "Полный справочник: обозначения, свойства, сравнения, теоремы Ферма и Эйлера.",
       "uz": "Toʻliq maʼlumotnoma: belgilashlar, xossalar, taqqoslamalar, Ferma va Eyler teoremalari."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Modular_arithmetic",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Fermat's Little Theorem",
      "desc": {
       "en": "Proof, statement, and many competition applications.",
       "ru": "Доказательство, формулировка и множество олимпиадных применений.",
       "uz": "Isbot, taʼrif va koʻplab musobaqa tatbiqlari."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Fermat%27s_Little_Theorem",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Chinese Remainder Theorem",
      "desc": {
       "en": "Statement, proof, and worked competition examples of CRT.",
       "ru": "Формулировка, доказательство и разобранные олимпиадные примеры китайской теоремы об остатках.",
       "uz": "Xitoy qoldiqlar teoremasining taʼrifi, isboti va tahlil qilingan musobaqa misollari."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Chinese_Remainder_Theorem",
      "price": "free",
      "star": false
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "Introduction to Number Theory — AoPS (Ch.5-8)",
      "desc": {
       "en": "Modular arithmetic chapters with hundreds of competition problems.",
       "ru": "Главы об арифметике остатков с сотнями олимпиадных задач.",
       "uz": "Qoldiqlar arifmetikasi boblari, yuzlab musobaqa masalasi bilan."
      },
      "url": "https://artofproblemsolving.com/store/book/intro-number-theory",
      "price": "paid",
      "star": false
     }
    ]
   },
   {
    "id": "video",
    "cards": [
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Modular Arithmetic",
      "desc": {
       "en": "Full competition lesson on modular arithmetic including last digit tricks.",
       "ru": "Полноценный олимпиадный урок по остаткам, включая приёмы с последними цифрами.",
       "uz": "Qoldiqlar arifmetikasi boʻyicha toʻliq musobaqa darsi, oxirgi raqam usullari bilan."
      },
      "url": "https://www.youtube.com/watch?v=pLgM7N3UiJo",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Khan Academy: Modular Arithmetic",
      "desc": {
       "en": "Clear beginner introduction with interactive exercises.",
       "ru": "Понятное введение для начинающих с интерактивными упражнениями.",
       "uz": "Interaktiv mashqlar bilan boshlovchilar uchun aniq kirish."
      },
      "url": "https://www.khanacademy.org/computing/computer-science/cryptography",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "blackpenredpen — Last digit of large powers",
      "desc": {
       "en": "Fast clear videos on finding last digits of powers using cycles.",
       "ru": "Быстрые и ясные видео о нахождении последних цифр степеней через циклы.",
       "uz": "Sikllar yordamida darajalarning oxirgi raqamini topish boʻyicha tez va aniq videolar."
      },
      "url": "https://www.youtube.com/@blackpenredpen",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Michael Penn — Olympiad number theory",
      "desc": {
       "en": "University-level but clear videos on modular arithmetic applications.",
       "ru": "Университетский, но понятный курс видео о применениях арифметики остатков.",
       "uz": "Universitet darajasidagi, ammo tushunarli videolar: qoldiqlar arifmetikasining tatbiqlari."
      },
      "url": "https://www.youtube.com/@MichaelPennMath",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "pdf",
    "cards": [
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Evan Chen — MONT Handout (FREE)",
      "desc": {
       "en": "Modular arithmetic chapter is especially well-written for olympiad prep.",
       "ru": "Глава об остатках написана особенно удачно для подготовки к олимпиадам.",
       "uz": "Qoldiqlar arifmetikasi bobi olimpiadaga tayyorgarlik uchun ayniqsa yaxshi yozilgan."
      },
      "url": "https://web.evanchen.cc/handouts/MONT/MONT.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Olympiad NT — Justin Stevens (FREE)",
      "desc": {
       "en": "Dedicated modular arithmetic chapter with Wilson's theorem and CRT.",
       "ru": "Отдельная глава об остатках с теоремой Вильсона и китайской теоремой об остатках.",
       "uz": "Qoldiqlar arifmetikasiga bagʻishlangan alohida bob, Vilson teoremasi va XQT bilan."
      },
      "url": "https://s3.amazonaws.com/aops-cdn.artofproblemsolving.com/resources/articles/olympiad-number-theory.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Mathnet.uz — Uzbekistan Olympiad Guide",
      "desc": {
       "en": "Republic-level problems involving modular arithmetic with solutions.",
       "ru": "Задачи республиканского уровня на остатки с решениями.",
       "uz": "Respublika darajasidagi qoldiqlar arifmetikasi masalalari, yechimlari bilan."
      },
      "url": "https://mathnet.uz/Uploads/Resurs/5/8f3d6b15-a28c-44de-a194-87060d2e487b_.pdf",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "AMC/AIME past papers — Number Theory",
      "desc": {
       "en": "Many AIME problems involve modular arithmetic at district-to-regional level.",
       "ru": "Многие задачи AIME используют остатки на районном и областном уровне.",
       "uz": "Koʻplab AIME masalalari tuman–viloyat darajasida qoldiqlar arifmetikasiga tayanadi."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/AIME_Problems_and_Solutions",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "online",
    "cards": [
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Brilliant.org — Modular Arithmetic",
      "desc": {
       "en": "Interactive lessons from basics to CRT with visual representations.",
       "ru": "Интерактивные уроки от основ до китайской теоремы об остатках, с наглядными схемами.",
       "uz": "Asoslardan XQT gacha koʻrgazmali tasvirlar bilan interaktiv darslar."
      },
      "url": "https://brilliant.org/wiki/modular-arithmetic/",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "AoPS Forum — Modular Arithmetic",
      "desc": {
       "en": "Hundreds of tagged competition problems with community explanations.",
       "ru": "Сотни олимпиадных задач с метками и объяснениями сообщества.",
       "uz": "Teg qoʻyilgan yuzlab musobaqa masalasi va hamjamiyat izohlari."
      },
      "url": "https://artofproblemsolving.com/community/c3h118n",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Cut the Knot — Modular Arithmetic",
      "desc": {
       "en": "Deep explorations including Fermat's Little Theorem applications.",
       "ru": "Глубокие разборы, включая применения малой теоремы Ферма.",
       "uz": "Chuqur tadqiqlar, jumladan Ferma kichik teoremasining tatbiqlari."
      },
      "url": "https://www.cut-the-knot.org/blue/Modulo.shtml",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "UKMT Junior Math Challenge",
      "desc": {
       "en": "UK Junior challenges have excellent modular arithmetic problems.",
       "ru": "В британских юниорских турах отличные задачи на остатки.",
       "uz": "Britaniya kichik yoshdagilar musobaqasida qoldiqlar arifmetikasi boʻyicha aʼlo masalalar bor."
      },
      "url": "https://www.ukmt.org.uk/competitions/solo/junior-mathematical-challenge/archive",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "uzbek",
    "cards": [
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "olympiad.maktab.uz — Matematika 7-8",
      "desc": {
       "en": "Filter by matematika + 7-8 sinf for modular-type problems from all rounds.",
       "ru": "Отфильтруйте по «matematika» и 7–8 классам, чтобы найти задачи на остатки со всех туров.",
       "uz": "Barcha bosqichlardagi qoldiqlarga oid masalalar uchun matematika + 7–8-sinf boʻyicha filtrlang."
      },
      "url": "https://olympiad.maktab.uz/Site/OlympiadMaterials",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Mathnet.uz — Sonlar Nazariyasi",
      "desc": {
       "en": "Modular arithmetic problems in the number theory section.",
       "ru": "Задачи на остатки в разделе теории чисел.",
       "uz": "Sonlar nazariyasi boʻlimidagi qoldiqlar arifmetikasi masalalari."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Fizika, Matematika va Informatika journal",
      "desc": {
       "en": "Official journal publishing olympiad problems including modular arithmetic.",
       "ru": "Официальный журнал, публикующий олимпиадные задачи, в том числе на остатки.",
       "uz": "Olimpiada masalalarini, jumladan qoldiqlar arifmetikasini chop etuvchi rasmiy jurnal."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "bilimlar.uz",
      "desc": {
       "en": "Uzbek-language olympiad problem sets organized by grade and topic.",
       "ru": "Олимпиадные задачи на узбекском, разложенные по классам и темам.",
       "uz": "Sinf va mavzu boʻyicha tartiblangan oʻzbek tilidagi olimpiada masalalari toʻplamlari."
      },
      "url": "https://bilimlar.uz",
      "price": "free",
      "star": false
     }
    ]
   }
  ]
 },
 {
  "n": 4,
  "title": {
   "en": "Diophantine Equations",
   "ru": "Диофантовы уравнения",
   "uz": "Diofant tenglamalari"
  },
  "cat": {
   "en": "Number Theory",
   "ru": "Теория чисел",
   "uz": "Sonlar nazariyasi"
  },
  "catKey": "nt",
  "color": "#1E6FB8",
  "tint": "#E8F1FA",
  "tip": {
   "en": "Parity and mod arguments quickly eliminate impossible cases. The factoring trick (xy = x+y+k → (x-1)(y-1) = k+1) solves dozens of olympiad problems. Always try small cases first.",
   "ru": "Чётность и остатки быстро отсекают невозможные случаи. Приём с разложением ($xy=x+y+k$ превращается в $(x-1)(y-1)=k+1$) решает десятки олимпиадных задач. Всегда начинайте с малых случаев.",
   "uz": "Juftlik va qoldiq boʻyicha mulohazalar imkonsiz hollarni tezda yoʻqotadi. Koʻpaytuvchilarga ajratish usuli (xy = x+y+k → (x−1)(y−1) = k+1) oʻnlab olimpiada masalasini yechadi. Har doim avval kichik hollarni sinab koʻring."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Diophantine Equations",
      "desc": {
       "en": "Overview of linear, quadratic, and complex Diophantine equations.",
       "ru": "Обзор линейных, квадратичных и более сложных диофантовых уравнений.",
       "uz": "Chiziqli, kvadratik va murakkab Diofant tenglamalari haqida umumiy sharh."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Diophantine_equation",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Simon's Favourite Factoring Trick",
      "desc": {
       "en": "The (x-a)(y-b)=c technique for 1/x+1/y=1/n and hundreds of similar problems.",
       "ru": "Приём $(x-a)(y-b)=c$ для $1/x+1/y=1/n$ и сотен похожих задач.",
       "uz": "1/x+1/y=1/n va shunga oʻxshash yuzlab masalani yechadigan (x−a)(y−b)=c usuli."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Simon%27s_Favorite_Factoring_Trick",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Olympiad NT — Justin Stevens (FREE)",
      "desc": {
       "en": "Dedicated Diophantine chapter including Pell's equation and parametric solutions.",
       "ru": "Отдельная глава о диофантовых уравнениях, включая уравнение Пелля и параметрические решения.",
       "uz": "Diofant tenglamalariga bagʻishlangan bob, Pell tenglamasi va parametrik yechimlar bilan."
      },
      "url": "https://s3.amazonaws.com/aops-cdn.artofproblemsolving.com/resources/articles/olympiad-number-theory.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "Number Theory: Structures — Andreescu",
      "desc": {
       "en": "Full chapter on Diophantine equations from AMC to IMO level.",
       "ru": "Целая глава о диофантовых уравнениях — от уровня AMC до IMO.",
       "uz": "Diofant tenglamalari boʻyicha toʻliq bob, AMC dan IMO darajasigacha."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": false
     }
    ]
   },
   {
    "id": "video",
    "cards": [
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Linear Diophantine",
      "desc": {
       "en": "How to solve ax+by=c — when solutions exist and finding the general solution.",
       "ru": "Как решать $ax+by=c$: когда решения есть и как найти общее решение.",
       "uz": "ax+by=c ni qanday yechish — yechim qachon mavjud va umumiy yechim qanday topiladi."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "PatrickJMT — Diophantine Equations",
      "desc": {
       "en": "Clear step-by-step video on solving linear and quadratic Diophantine equations.",
       "ru": "Понятное пошаговое видео о линейных и квадратичных диофантовых уравнениях.",
       "uz": "Chiziqli va kvadratik Diofant tenglamalarini yechish boʻyicha qadamma-qadam video."
      },
      "url": "https://www.youtube.com/@patrickjmt",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "blackpenredpen — Pell's Equation",
      "desc": {
       "en": "Introduction to x²-Dy²=1 with olympiad examples.",
       "ru": "Введение в уравнение $x^2-Dy^2=1$ с олимпиадными примерами.",
       "uz": "x²−Dy²=1 ga kirish, olimpiada misollari bilan."
      },
      "url": "https://www.youtube.com/@blackpenredpen",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "MathDoctorBob — Number Theory",
      "desc": {
       "en": "Accessible videos on Diophantine equations with full proofs.",
       "ru": "Доступные видео о диофантовых уравнениях с полными доказательствами.",
       "uz": "Diofant tenglamalari haqida tushunarli videolar, toʻliq isbotlari bilan."
      },
      "url": "https://www.youtube.com/@MathDoctorBob",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "pdf",
    "cards": [
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Evan Chen — MONT (FREE)",
      "desc": {
       "en": "Section on Diophantine equations is rigorous and well-structured.",
       "ru": "Раздел о диофантовых уравнениях строгий и хорошо выстроенный.",
       "uz": "Diofant tenglamalari boʻlimi qatʼiy va yaxshi tuzilgan."
      },
      "url": "https://web.evanchen.cc/handouts/MONT/MONT.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Mathnet.uz — Uzbekistan Olympiad Guide",
      "desc": {
       "en": "Integer equation problems from Republic-level Uzbekistan olympiad.",
       "ru": "Задачи на уравнения в целых числах с республиканского тура Узбекистана.",
       "uz": "Oʻzbekiston respublika olimpiadasidan butun sonli tenglama masalalari."
      },
      "url": "https://mathnet.uz/Uploads/Resurs/5/8f3d6b15-a28c-44de-a194-87060d2e487b_.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "OlympiadUSA Past Papers",
      "desc": {
       "en": "Grade 7-8 past exams including integer equation problems.",
       "ru": "Задачи прошлых туров для 7–8 классов, включая уравнения в целых числах.",
       "uz": "7–8-sinf oʻtgan yillar imtihonlari, butun sonli tenglama masalalari bilan."
      },
      "url": "https://olympiadusa.org",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "IMO Problems Collection (Scribd)",
      "desc": {
       "en": "Classic international olympiad problems. Many feature Diophantine equations.",
       "ru": "Классические задачи международных олимпиад. Многие — на диофантовы уравнения.",
       "uz": "Klassik xalqaro olimpiada masalalari. Koʻpida Diofant tenglamalari uchraydi."
      },
      "url": "https://www.scribd.com/document/356897836/Math-Olympiad-Problems-Collection-v2-pdf",
      "price": "paid",
      "star": false
     }
    ]
   },
   {
    "id": "online",
    "cards": [
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "AoPS: Diophantine Problem Archive",
      "desc": {
       "en": "Hundreds of tagged problems with community solutions.",
       "ru": "Сотни размеченных задач с решениями сообщества.",
       "uz": "Teg qoʻyilgan yuzlab masala, hamjamiyat yechimlari bilan."
      },
      "url": "https://artofproblemsolving.com/community",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Brilliant.org — Diophantine Equations",
      "desc": {
       "en": "Interactive problems on linear and Pythagorean Diophantine equations.",
       "ru": "Интерактивные задачи на линейные и пифагоровы диофантовы уравнения.",
       "uz": "Chiziqli va Pifagor Diofant tenglamalari boʻyicha interaktiv masalalar."
      },
      "url": "https://brilliant.org/wiki/diophantine-equations-linear/",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Cut the Knot — Integer Solutions",
      "desc": {
       "en": "Classic explorations of integer equations, Pythagorean triples, and Pell.",
       "ru": "Классические разборы уравнений в целых числах, пифагоровых троек и уравнения Пелля.",
       "uz": "Butun sonli tenglamalar, Pifagor uchliklari va Pell tenglamasining klassik tadqiqi."
      },
      "url": "https://www.cut-the-knot.org/do_you_know/Pell.shtml",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "NRICH — Diophantine Challenges",
      "desc": {
       "en": "Competition-quality integer equation problems for junior olympiad level.",
       "ru": "Задачи олимпиадного качества на уравнения в целых числах для младших классов.",
       "uz": "Kichik olimpiada darajasidagi, musobaqa sifatidagi butun sonli tenglama masalalari."
      },
      "url": "https://nrich.maths.org",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "uzbek",
    "cards": [
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "olympiad.maktab.uz — Respublika bosqichi",
      "desc": {
       "en": "Republic-level papers often include a Diophantine-type problem.",
       "ru": "В республиканских вариантах часто встречается задача диофантова типа.",
       "uz": "Respublika bosqichi variantlarida koʻpincha Diofant turidagi masala boʻladi."
      },
      "url": "https://olympiad.maktab.uz/Site/OlympiadMaterials",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Mathnet.uz — Algebra section",
      "desc": {
       "en": "Integer equation problems from viloyat and republic rounds.",
       "ru": "Задачи на уравнения в целых числах с областных и республиканских туров.",
       "uz": "Viloyat va respublika bosqichlaridan butun sonli tenglama masalalari."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Ziyouz.com — Mathematics Library",
      "desc": {
       "en": "Uzbek-language math books including number theory problem collections.",
       "ru": "Книги по математике на узбекском, включая сборники задач по теории чисел.",
       "uz": "Oʻzbek tilidagi matematika kitoblari, jumladan sonlar nazariyasi masalalari toʻplamlari."
      },
      "url": "https://www.ziyouz.com/books/kollej_va_otm_darsliklari/matematika/",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "TASIMO — Tashkent International Math Olympiad",
      "desc": {
       "en": "Past TASIMO papers include Diophantine-type problems at advanced level.",
       "ru": "Прошлые варианты TASIMO содержат диофантовы задачи повышенного уровня.",
       "uz": "Oʻtgan TASIMO variantlarida yuqori darajadagi Diofant turidagi masalalar bor."
      },
      "url": "https://imogeometry.blogspot.com/p/geometry-solved-problem-collections.html",
      "price": "free",
      "star": false
     }
    ]
   }
  ]
 },
 {
  "n": 5,
  "title": {
   "en": "Identities & Factoring",
   "ru": "Тождества и разложение на множители",
   "uz": "Ayniyatlar va koʻpaytuvchilarga ajratish"
  },
  "cat": {
   "en": "Algebra",
   "ru": "Алгебра",
   "uz": "Algebra"
  },
  "catKey": "alg",
  "color": "#0F7A5E",
  "tint": "#E3F5EE",
  "tip": {
   "en": "Sophie Germain identity (a⁴+4b⁴) appears in multiple olympiads every year. Memorize the top 10 identities and practice recognizing when to apply each one.",
   "ru": "Тождество Софи Жермен ($a^4+4b^4$) встречается на нескольких олимпиадах каждый год. Выучите десяток главных тождеств и тренируйтесь узнавать, какое из них применить.",
   "uz": "Sofi Jermen ayniyati (a⁴+4b⁴) har yili bir nechta olimpiadada uchraydi. Eng kerakli oʻnta ayniyatni yod oling va ularning qaysi biri qachon ishlashini tanib olishni mashq qiling."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Algebraic Identities",
      "desc": {
       "en": "Complete list of key identities with proofs and competition examples.",
       "ru": "Полный список ключевых тождеств с доказательствами и олимпиадными примерами.",
       "uz": "Asosiy ayniyatlarning toʻliq roʻyxati, isbotlari va musobaqa misollari bilan."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Algebraic_identity",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Sophie Germain Identity",
      "desc": {
       "en": "Statement, proof, and competition applications.",
       "ru": "Формулировка, доказательство и олимпиадные применения.",
       "uz": "Taʼrif, isbot va musobaqadagi tatbiqlari."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Sophie_Germain_Identity",
      "price": "free",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "Introduction to Algebra — AoPS (Rusczyk)",
      "desc": {
       "en": "Gold standard competition algebra textbook. All key identities and factoring.",
       "ru": "Эталонный учебник олимпиадной алгебры. Все ключевые тождества и разложения.",
       "uz": "Musobaqa algebrasining eng yaxshi darsligi. Barcha asosiy ayniyatlar va ajratish usullari."
      },
      "url": "https://artofproblemsolving.com/store/book/intro-algebra",
      "price": "paid",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "Algebra — I.M. Gelfand",
      "desc": {
       "en": "Classic Soviet algebra book with beautiful explanations of identities.",
       "ru": "Классический советский учебник алгебры с прекрасными объяснениями тождеств.",
       "uz": "Klassik sovet algebra kitobi, ayniyatlarning goʻzal tushuntirishlari bilan."
      },
      "url": "https://www.abebooks.com/servlet/SearchResults?kn=algebra+gelfand",
      "price": "paid",
      "star": false
     }
    ]
   },
   {
    "id": "video",
    "cards": [
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Factoring",
      "desc": {
       "en": "Factoring higher-degree polynomials, Sophie Germain, sum/difference of cubes.",
       "ru": "Разложение многочленов высших степеней, тождество Софи Жермен, сумма и разность кубов.",
       "uz": "Yuqori darajali koʻphadlarni ajratish, Sofi Jermen, kublar yigʻindisi va ayirmasi."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "PatrickJMT — Factoring Polynomials",
      "desc": {
       "en": "Step-by-step factoring techniques applicable to olympiad algebra.",
       "ru": "Пошаговые приёмы разложения на множители, применимые в олимпиадной алгебре.",
       "uz": "Olimpiada algebrasiga mos, qadamma-qadam ajratish usullari."
      },
      "url": "https://www.youtube.com/@patrickjmt",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "3Blue1Brown — Essence of Algebra",
      "desc": {
       "en": "Deep visual approach to why algebraic identities work.",
       "ru": "Глубокий наглядный подход к тому, почему работают алгебраические тождества.",
       "uz": "Algebraik ayniyatlar nima uchun ishlashiga chuqur koʻrgazmali yondashuv."
      },
      "url": "https://www.youtube.com/@3blue1brown",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Professor Leonard — Algebra Fundamentals",
      "desc": {
       "en": "Clear explanations of identities and their geometric interpretations.",
       "ru": "Ясные объяснения тождеств и их геометрического смысла.",
       "uz": "Ayniyatlar va ularning geometrik talqinini aniq tushuntirish."
      },
      "url": "https://www.youtube.com/@ProfessorLeonard",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "pdf",
    "cards": [
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Olympiad Algebra Book — Parvardi (AoPS)",
      "desc": {
       "en": "1220 polynomial and algebra problems for olympiad students.",
       "ru": "1220 задач по многочленам и алгебре для олимпиадников.",
       "uz": "Olimpiada oʻquvchilari uchun 1220 ta koʻphad va algebra masalasi."
      },
      "url": "https://artofproblemsolving.com/community/c6h601134",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Mathnet.uz — Algebra problems",
      "desc": {
       "en": "Factoring and identity problems from viloyat and republic olympiad rounds.",
       "ru": "Задачи на разложение и тождества с областных и республиканских туров.",
       "uz": "Viloyat va respublika bosqichlaridan ajratish va ayniyat masalalari."
      },
      "url": "https://mathnet.uz/Uploads/Resurs/5/8f3d6b15-a28c-44de-a194-87060d2e487b_.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "OlympiadUSA Grade 7-8 past papers",
      "desc": {
       "en": "Algebra problems including factoring and identity application.",
       "ru": "Задачи по алгебре, включая разложение на множители и применение тождеств.",
       "uz": "Algebra masalalari, jumladan ajratish va ayniyatlarni qoʻllash."
      },
      "url": "https://olympiadusa.org/wp-content/uploads/2025/02/january-grade-7-8-past-exams-questions-and-solutions-olympiadusa-org.pdf",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "AMC 8 and AMC 10 Past Papers",
      "desc": {
       "en": "Excellent source of identity and factoring problems at competition level.",
       "ru": "Отличный источник задач на тождества и разложение олимпиадного уровня.",
       "uz": "Musobaqa darajasidagi ayniyat va ajratish masalalarining aʼlo manbasi."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/AMC_8_Problems_and_Solutions",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "online",
    "cards": [
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Brilliant.org — Algebra Fundamentals",
      "desc": {
       "en": "Interactive algebra course: identities, factoring, olympiad problems.",
       "ru": "Интерактивный курс алгебры: тождества, разложение, олимпиадные задачи.",
       "uz": "Interaktiv algebra kursi: ayniyatlar, ajratish, olimpiada masalalari."
      },
      "url": "https://brilliant.org/courses/algebra-fundamentals/",
      "price": "paid",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "AoPS Community — Algebra Forum",
      "desc": {
       "en": "Thousands of algebra competition problems with multiple solution approaches.",
       "ru": "Тысячи олимпиадных задач по алгебре с несколькими способами решения.",
       "uz": "Minglab algebra musobaqa masalasi, bir nechta yechim usuli bilan."
      },
      "url": "https://artofproblemsolving.com/community/c5",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Cut the Knot — Algebra Identities",
      "desc": {
       "en": "Deep explorations with visual proofs.",
       "ru": "Глубокие разборы с наглядными доказательствами.",
       "uz": "Koʻrgazmali isbotlar bilan chuqur tadqiqlar."
      },
      "url": "https://www.cut-the-knot.org/arithmetic/algebra.shtml",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "NRICH — Algebraic Identities",
      "desc": {
       "en": "UK competition-quality algebra problems involving factoring.",
       "ru": "Британские задачи олимпиадного качества на разложение на множители.",
       "uz": "Britaniya musobaqalari darajasidagi, ajratishga oid algebra masalalari."
      },
      "url": "https://nrich.maths.org",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "uzbek",
    "cards": [
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "olympiad.maktab.uz — Algebra topshiriqlari",
      "desc": {
       "en": "Al-Xorazmiy and main olympiad algebra problems for grades 7-8.",
       "ru": "Задачи по алгебре с Аль-Хорезми и основной олимпиады для 7–8 классов.",
       "uz": "7–8-sinflar uchun Al-Xorazmiy va asosiy olimpiadaning algebra masalalari."
      },
      "url": "https://olympiad.maktab.uz/Site/OlympiadMaterials",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Mathnet.uz — Algebra bo'limi",
      "desc": {
       "en": "Algebra section of the official Uzbekistan olympiad guide with solutions.",
       "ru": "Раздел алгебры официального руководства по олимпиадам Узбекистана с решениями.",
       "uz": "Oʻzbekiston olimpiadasi rasmiy qoʻllanmasining algebra boʻlimi, yechimlari bilan."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "diplomishlari.uz — Al-Xorazmiy tests",
      "desc": {
       "en": "Online test platform with 7-8 sinf algebra sections.",
       "ru": "Платформа онлайн-тестов с разделами алгебры для 7–8 классов.",
       "uz": "Onlayn test platformasi: 7–8-sinf algebra boʻlimlari bilan."
      },
      "url": "https://diplomishlari.uz",
      "price": "paid",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Ziyouz.com — Algebra kitoblari",
      "desc": {
       "en": "Uzbek algebra textbooks and olympiad collections for free download.",
       "ru": "Узбекские учебники алгебры и олимпиадные сборники для свободного скачивания.",
       "uz": "Oʻzbek algebra darsliklari va olimpiada toʻplamlarini bepul yuklab olish."
      },
      "url": "https://www.ziyouz.com/books/kollej_va_otm_darsliklari/matematika/",
      "price": "free",
      "star": false
     }
    ]
   }
  ]
 },
 {
  "n": 6,
  "title": {
   "en": "Inequalities",
   "ru": "Неравенства",
   "uz": "Tengsizliklar"
  },
  "cat": {
   "en": "Algebra",
   "ru": "Алгебра",
   "uz": "Algebra"
  },
  "catKey": "alg",
  "color": "#0F7A5E",
  "tint": "#E3F5EE",
  "tip": {
   "en": "Always check the equality case — it confirms your AM-GM application is correct and tells you where the minimum/maximum is achieved. If equality can't be achieved, your bound may be wrong.",
   "ru": "Всегда проверяйте случай равенства — он подтверждает, что AM–GM применено верно, и показывает, где достигается минимум или максимум. Если равенство недостижимо, оценка, скорее всего, неточна.",
   "uz": "Har doim tenglik holatini tekshiring: u oʻrta qiymatlar tengsizligini toʻgʻri qoʻllaganingizni tasdiqlaydi va eng kichik yoki eng katta qiymat qayerda erishilishini koʻrsatadi. Agar tenglikka erishib boʻlmasa, bahoyingiz notoʻgʻri boʻlishi mumkin."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: AM-GM Inequality",
      "desc": {
       "en": "Full proof, when equality holds, and 50+ competition applications.",
       "ru": "Полное доказательство, случай равенства и более 50 олимпиадных применений.",
       "uz": "Toʻliq isbot, tenglik qachon boʻlishi va 50 dan ortiq musobaqa tatbiqi."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/AM-GM_Inequality",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Cauchy-Schwarz Inequality",
      "desc": {
       "en": "Statement, proof, and competition applications.",
       "ru": "Формулировка, доказательство и олимпиадные применения.",
       "uz": "Taʼrif, isbot va musobaqadagi tatbiqlari."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Cauchy-Schwarz_Inequality",
      "price": "free",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "Secrets in Inequalities Vol.1 — Pham Kim Hung",
      "desc": {
       "en": "The classic olympiad inequalities book. Covers AM-GM and Cauchy-Schwarz.",
       "ru": "Классическая книга об олимпиадных неравенствах. Разбирает AM–GM и Коши–Буняковского.",
       "uz": "Klassik olimpiada tengsizliklari kitobi. Oʻrta qiymatlar va Koshi–Bunyakovskiyni qamraydi."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "Old and New Inequalities — Andreescu",
      "desc": {
       "en": "Competition inequality book widely used for olympiad preparation.",
       "ru": "Сборник по неравенствам, широко используемый при подготовке к олимпиадам.",
       "uz": "Olimpiadaga tayyorgarlikda keng qoʻllaniladigan tengsizliklar kitobi."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": false
     }
    ]
   },
   {
    "id": "video",
    "cards": [
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Art of Problem Solving — AM-GM and Cauchy",
      "desc": {
       "en": "Competition-focused explanations of the two most important inequality tools.",
       "ru": "Олимпиадные объяснения двух главных инструментов работы с неравенствами.",
       "uz": "Ikkita eng muhim tengsizlik quroli musobaqaga yoʻnaltirilgan holda tushuntirilgan."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Michael Penn — Olympiad Inequalities",
      "desc": {
       "en": "Clear videos on AM-GM, Cauchy-Schwarz with competition examples.",
       "ru": "Понятные видео об AM–GM и Коши–Буняковском с олимпиадными примерами.",
       "uz": "Oʻrta qiymatlar va Koshi–Bunyakovskiy boʻyicha aniq videolar, musobaqa misollari bilan."
      },
      "url": "https://www.youtube.com/@MichaelPennMath",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "3Blue1Brown — AM-GM Geometric Proof",
      "desc": {
       "en": "Beautiful visual proof of AM-GM using areas.",
       "ru": "Красивое наглядное доказательство AM–GM через площади.",
       "uz": "Yuzalar orqali oʻrta qiymatlar tengsizligining goʻzal koʻrgazmali isboti."
      },
      "url": "https://www.youtube.com/@3blue1brown",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Po-Shen Loh — Inequalities Lecture",
      "desc": {
       "en": "CMU/IMO coach lectures on inequality techniques. Advanced but inspiring.",
       "ru": "Лекции тренера сборной по приёмам работы с неравенствами. Сложно, но вдохновляет.",
       "uz": "CMU/IMO murabbiyining tengsizlik usullari boʻyicha maʼruzalari. Murakkab, ammo ilhomlantiruvchi."
      },
      "url": "https://www.youtube.com/@poshenloh",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "pdf",
    "cards": [
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Evan Chen — Olympiad Inequalities Notes (FREE)",
      "desc": {
       "en": "Free notes on inequalities: AM-GM to rearrangement.",
       "ru": "Бесплатный конспект по неравенствам: от AM–GM до перестановочного.",
       "uz": "Tengsizliklar boʻyicha bepul konspekt: oʻrta qiymatlardan qayta tartiblashgacha."
      },
      "url": "https://web.evanchen.cc/olympiad.html",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Inequalities Olympiad Approach — Handout",
      "desc": {
       "en": "Free handout covering AM-GM, Cauchy-Schwarz, Jensen, and SOS.",
       "ru": "Бесплатный конспект: AM–GM, Коши–Буняковский, неравенство Йенсена и метод SOS.",
       "uz": "Oʻrta qiymatlar, Koshi–Bunyakovskiy, Yensen va SOS ni qamrovchi bepul tarqatma."
      },
      "url": "https://artofproblemsolving.com/community/c6h27244",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Mathnet.uz — Tengsizliklar",
      "desc": {
       "en": "Uzbekistan olympiad guide section on inequalities with viloyat/republic problems.",
       "ru": "Раздел о неравенствах в руководстве по олимпиадам Узбекистана с задачами всех туров.",
       "uz": "Oʻzbekiston olimpiadasi qoʻllanmasining tengsizliklar boʻlimi, viloyat va respublika masalalari bilan."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "OlympiadUSA Past Papers — Algebra",
      "desc": {
       "en": "Inequality problems from junior olympiad at grade 7-8 level.",
       "ru": "Задачи на неравенства с юниорской олимпиады уровня 7–8 классов.",
       "uz": "7–8-sinf darajasidagi kichik olimpiadadan tengsizlik masalalari."
      },
      "url": "https://olympiadusa.org",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "online",
    "cards": [
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "AoPS: Inequalities Forum",
      "desc": {
       "en": "Huge archive of competition inequality problems with solutions.",
       "ru": "Огромный архив олимпиадных задач на неравенства с решениями.",
       "uz": "Musobaqa tengsizliklarining katta arxivi, yechimlari bilan."
      },
      "url": "https://artofproblemsolving.com/community/c5h3",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Brilliant.org — Inequalities",
      "desc": {
       "en": "Interactive inequality problems from basics to olympiad level.",
       "ru": "Интерактивные задачи на неравенства от основ до олимпиадного уровня.",
       "uz": "Asoslardan olimpiada darajasigacha interaktiv tengsizlik masalalari."
      },
      "url": "https://brilliant.org/wiki/am-gm-inequality/",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Cut the Knot — Inequalities",
      "desc": {
       "en": "Mathematical explorations with visual proofs.",
       "ru": "Математические разборы с наглядными доказательствами.",
       "uz": "Koʻrgazmali isbotlar bilan matematik tadqiqlar."
      },
      "url": "https://www.cut-the-knot.org/do_you_know/amgm.shtml",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "NRICH — Inequality Challenges",
      "desc": {
       "en": "Competition-quality inequality problems for grades 7-10.",
       "ru": "Задачи на неравенства олимпиадного качества для 7–10 классов.",
       "uz": "7–10-sinflar uchun musobaqa sifatidagi tengsizlik masalalari."
      },
      "url": "https://nrich.maths.org",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "uzbek",
    "cards": [
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "olympiad.maktab.uz",
      "desc": {
       "en": "Inequality problems in algebra sections of all olympiad levels.",
       "ru": "Задачи на неравенства в разделах алгебры на всех уровнях олимпиады.",
       "uz": "Barcha bosqichlarning algebra boʻlimlaridagi tengsizlik masalalari."
      },
      "url": "https://olympiad.maktab.uz/Site/OlympiadMaterials",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Mathnet.uz — Tengsizliklar bo'limi",
      "desc": {
       "en": "Official inequality problems from Uzbekistan olympiad with solutions.",
       "ru": "Официальные задачи на неравенства с олимпиад Узбекистана с решениями.",
       "uz": "Oʻzbekiston olimpiadasining rasmiy tengsizlik masalalari, yechimlari bilan."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Fizika, Matematika va Informatika journal",
      "desc": {
       "en": "Regular problems including inequalities in this official journal.",
       "ru": "Регулярные задачи, включая неравенства, в этом официальном журнале.",
       "uz": "Ushbu rasmiy jurnalda muntazam chiqadigan masalalar, jumladan tengsizliklar."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Ziyouz.com",
      "desc": {
       "en": "Uzbek-language olympiad problems including inequality problems.",
       "ru": "Олимпиадные задачи на узбекском, включая задачи на неравенства.",
       "uz": "Oʻzbek tilidagi olimpiada masalalari, jumladan tengsizlik masalalari."
      },
      "url": "https://www.ziyouz.com",
      "price": "free",
      "star": false
     }
    ]
   }
  ]
 },
 {
  "n": 7,
  "title": {
   "en": "Sequences & Series",
   "ru": "Последовательности и суммы",
   "uz": "Ketma-ketliklar va yigʻindilar"
  },
  "cat": {
   "en": "Algebra",
   "ru": "Алгебра",
   "uz": "Algebra"
  },
  "catKey": "alg",
  "color": "#0F7A5E",
  "tint": "#E3F5EE",
  "tip": {
   "en": "Telescoping is the most powerful series trick for olympiads. When you see a sum, always ask: can I write each term as f(n+1) − f(n)?",
   "ru": "Телескопирование — самый сильный приём для сумм на олимпиадах. Увидев сумму, всегда спрашивайте себя: можно ли записать каждое слагаемое как $f(n+1)-f(n)$?",
   "uz": "Teleskoplash — olimpiadalardagi eng kuchli yigʻindi usuli. Yigʻindini koʻrganingizda har doim soʻrang: har bir hadni f(n+1) − f(n) koʻrinishida yoza olamanmi?"
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Arithmetic Sequences",
      "desc": {
       "en": "Full treatment with competition problems and proof techniques.",
       "ru": "Полное изложение с олимпиадными задачами и приёмами доказательства.",
       "uz": "Musobaqa masalalari va isbot usullari bilan toʻliq bayon."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Arithmetic_sequence",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Telescoping Series",
      "desc": {
       "en": "The telescoping technique explained with many worked examples.",
       "ru": "Приём телескопирования с большим числом разобранных примеров.",
       "uz": "Teleskoplash usuli koʻplab tahlil qilingan misollar bilan tushuntirilgan."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Telescoping_series",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Geometric Sequences",
      "desc": {
       "en": "Geometric sequences, infinite sums, and competition applications.",
       "ru": "Геометрические прогрессии, бесконечные суммы и олимпиадные применения.",
       "uz": "Geometrik progressiyalar, cheksiz yigʻindilar va musobaqadagi tatbiqlari."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Geometric_sequence",
      "price": "free",
      "star": false
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "Introduction to Algebra — AoPS",
      "desc": {
       "en": "Covers sequences, series, and recursive formulas at competition level.",
       "ru": "Последовательности, ряды и рекуррентные формулы олимпиадного уровня.",
       "uz": "Musobaqa darajasida ketma-ketliklar, qatorlar va rekurrent formulalar."
      },
      "url": "https://artofproblemsolving.com/store/book/intro-algebra",
      "price": "paid",
      "star": false
     }
    ]
   },
   {
    "id": "video",
    "cards": [
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Khan Academy — Sequences and Series",
      "desc": {
       "en": "Complete video course on arithmetic and geometric sequences.",
       "ru": "Полный видеокурс об арифметических и геометрических прогрессиях.",
       "uz": "Arifmetik va geometrik progressiyalar boʻyicha toʻliq video kurs."
      },
      "url": "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:sequences",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "3Blue1Brown — Essence of Sequences",
      "desc": {
       "en": "Visual exploration of convergence and geometric series.",
       "ru": "Наглядный разбор сходимости и геометрических рядов.",
       "uz": "Yaqinlashish va geometrik qatorning koʻrgazmali tadqiqi."
      },
      "url": "https://www.youtube.com/@3blue1brown",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "PatrickJMT — Telescoping Sums",
      "desc": {
       "en": "Clear step-by-step video on evaluating telescoping sums.",
       "ru": "Понятное пошаговое видео о вычислении телескопических сумм.",
       "uz": "Teleskopik yigʻindilarni hisoblash boʻyicha qadamma-qadam video."
      },
      "url": "https://www.youtube.com/@patrickjmt",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Sequences",
      "desc": {
       "en": "How sequences appear in math olympiads with competition examples.",
       "ru": "Как последовательности появляются на олимпиадах, с примерами задач.",
       "uz": "Ketma-ketliklar matematika olimpiadalarida qanday uchrashi, musobaqa misollari bilan."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "pdf",
    "cards": [
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Qiziqarli Matematika — Yunusov (Uzbek, FREE)",
      "desc": {
       "en": "Uzbek-language book with interesting problems including number sequences.",
       "ru": "Книга на узбекском с занимательными задачами, включая числовые последовательности.",
       "uz": "Oʻzbek tilidagi kitob, qiziqarli masalalar, jumladan sonli ketma-ketliklar bilan."
      },
      "url": "https://www.ziyouz.com/books/kollej_va_otm_darsliklari/matematika/Qiziqarli%20matematika%20va%20olimpiada%20masalalari%20(A.Yunusov%20va%20b.).pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Mathnet.uz — Sequence problems",
      "desc": {
       "en": "Recursive and closed-form sequence problems from Uzbekistan olympiad rounds.",
       "ru": "Задачи на рекуррентные и явные формулы с туров олимпиады Узбекистана.",
       "uz": "Oʻzbekiston olimpiada bosqichlaridan rekurrent va oshkor koʻrinishdagi ketma-ketlik masalalari."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Fibonacci and Recursive Sequences — AoPS Handout",
      "desc": {
       "en": "Free handout on Fibonacci numbers, linear recurrences, and olympiad applications.",
       "ru": "Бесплатный конспект о числах Фибоначчи, линейных рекуррентах и их применениях.",
       "uz": "Fibonachchi sonlari, chiziqli rekurrentlar va olimpiada tatbiqlari boʻyicha bepul tarqatma."
      },
      "url": "https://artofproblemsolving.com/community/c5h482124",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "OlympiadUSA Grade 7-8 Past Exams",
      "desc": {
       "en": "Includes sequence and series problems at school-to-district level.",
       "ru": "Содержит задачи на последовательности и ряды школьного и районного уровня.",
       "uz": "Maktab–tuman darajasidagi ketma-ketlik va qator masalalari bor."
      },
      "url": "https://olympiadusa.org",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "online",
    "cards": [
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Brilliant.org — Sequences and Series",
      "desc": {
       "en": "Interactive course from arithmetic/geometric to recurrences.",
       "ru": "Интерактивный курс от арифметической и геометрической прогрессий до рекуррент.",
       "uz": "Arifmetik va geometrik progressiyadan rekurrentlargacha interaktiv kurs."
      },
      "url": "https://brilliant.org/courses/sequences-and-series/",
      "price": "paid",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "OEIS — Online Encyclopedia of Integer Sequences",
      "desc": {
       "en": "Look up any integer sequence. Great for exploration and discovery.",
       "ru": "Поиск по любой целочисленной последовательности. Отлично для исследований.",
       "uz": "Istalgan butun sonli ketma-ketlikni qidiring. Tadqiq va kashfiyot uchun zoʻr."
      },
      "url": "https://oeis.org",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "AoPS — Sequence Problems",
      "desc": {
       "en": "Competition problems on sequences and series with community solutions.",
       "ru": "Олимпиадные задачи на последовательности и ряды с решениями сообщества.",
       "uz": "Ketma-ketlik va qatorlar boʻyicha musobaqa masalalari, hamjamiyat yechimlari bilan."
      },
      "url": "https://artofproblemsolving.com/community/c5",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Cut the Knot — Sequences",
      "desc": {
       "en": "Mathematical explorations of sequences including telescoping and recursive.",
       "ru": "Математические разборы последовательностей, включая телескопические и рекуррентные.",
       "uz": "Ketma-ketliklarning matematik tadqiqi, jumladan teleskoplash va rekurrentlar."
      },
      "url": "https://www.cut-the-knot.org",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "uzbek",
    "cards": [
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "olympiad.maktab.uz",
      "desc": {
       "en": "Sequence and progression problems in Al-Xorazmiy and main olympiad papers.",
       "ru": "Задачи на последовательности и прогрессии в вариантах Аль-Хорезми и основной олимпиады.",
       "uz": "Al-Xorazmiy va asosiy olimpiada variantlaridagi ketma-ketlik va progressiya masalalari."
      },
      "url": "https://olympiad.maktab.uz/Site/OlympiadMaterials",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Mathnet.uz",
      "desc": {
       "en": "Sequence problems from viloyat and Republic rounds with solutions.",
       "ru": "Задачи на последовательности с областных и республиканских туров с решениями.",
       "uz": "Viloyat va respublika bosqichlaridan ketma-ketlik masalalari, yechimlari bilan."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "soff.uz — Matematika test 7-8 sinf",
      "desc": {
       "en": "Online math tests for grades 7-8 including algebra and sequence questions.",
       "ru": "Онлайн-тесты по математике для 7–8 классов, включая алгебру и последовательности.",
       "uz": "7–8-sinflar uchun onlayn matematika testlari, algebra va ketma-ketlik savollari bilan."
      },
      "url": "https://soff.uz/product/algebra-matematika-test-7-8-sinf-uchun",
      "price": "paid",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Ziyouz.com — Math books",
      "desc": {
       "en": "Uzbek math books including chapters on progressions and sequences.",
       "ru": "Узбекские учебники с главами о прогрессиях и последовательностях.",
       "uz": "Progressiya va ketma-ketliklar boblari bor oʻzbek matematika kitoblari."
      },
      "url": "https://www.ziyouz.com",
      "price": "free",
      "star": false
     }
    ]
   }
  ]
 },
 {
  "n": 8,
  "title": {
   "en": "Word Problems & Systems",
   "ru": "Текстовые задачи и системы",
   "uz": "Matnli masalalar va sistemalar"
  },
  "cat": {
   "en": "Algebra",
   "ru": "Алгебра",
   "uz": "Algebra"
  },
  "catKey": "alg",
  "color": "#0F7A5E",
  "tint": "#E3F5EE",
  "tip": {
   "en": "Define variables clearly before writing any equation. For symmetric systems, introduce s=x+y and p=xy — this reduces many hard systems to a simple quadratic.",
   "ru": "Чётко определите переменные, прежде чем писать хоть одно уравнение. Для симметричных систем вводите $s=x+y$ и $p=xy$ — это сводит многие трудные системы к простому квадратному уравнению.",
   "uz": "Tenglama yozishdan oldin nomaʼlumlarni aniq belgilang. Simmetrik sistemalar uchun s = x+y va p = xy ni kiriting — bu koʻp qiyin sistemani oddiy kvadrat tenglamaga keltiradi."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Systems of Equations",
      "desc": {
       "en": "Techniques for 2- and 3-variable systems including symmetric cases.",
       "ru": "Приёмы для систем с двумя и тремя переменными, включая симметричные случаи.",
       "uz": "Ikki va uch nomaʼlumli sistemalar usullari, simmetrik hollar bilan."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/System_of_equations",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Vieta's Formulas",
      "desc": {
       "en": "Key tool for symmetric systems using sum/product of roots.",
       "ru": "Ключевой инструмент для симметричных систем через сумму и произведение корней.",
       "uz": "Ildizlarning yigʻindisi va koʻpaytmasiga tayanadigan, simmetrik sistemalar uchun asosiy qurol."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Vieta%27s_formulas",
      "price": "free",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "Introduction to Algebra — AoPS",
      "desc": {
       "en": "Comprehensive treatment of word problems, mixture/rate/time, and systems.",
       "ru": "Подробное изложение текстовых задач на смеси, скорость и время, а также систем.",
       "uz": "Matnli masalalar, aralashma/tezlik/vaqt va sistemalarning toʻliq bayoni."
      },
      "url": "https://artofproblemsolving.com/store/book/intro-algebra",
      "price": "paid",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "Art and Craft of Problem Solving — Zeitz",
      "desc": {
       "en": "Outstanding chapter on algebraic word problems and modeling.",
       "ru": "Выдающаяся глава об алгебраических текстовых задачах и составлении модели.",
       "uz": "Algebraik matnli masalalar va modellashtirish boʻyicha ajoyib bob."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": false
     }
    ]
   },
   {
    "id": "video",
    "cards": [
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Khan Academy — Systems of Equations",
      "desc": {
       "en": "Complete video course: substitution, elimination, graphing.",
       "ru": "Полный видеокурс: подстановка, сложение, графический способ.",
       "uz": "Toʻliq video kurs: oʻrniga qoʻyish, yoʻqotish, grafik usul."
      },
      "url": "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Word Problems",
      "desc": {
       "en": "How to set up and solve competition-style word problems.",
       "ru": "Как составлять и решать текстовые задачи олимпиадного типа.",
       "uz": "Musobaqa uslubidagi matnli masalalarni qanday tuzish va yechish."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "PatrickJMT — Nonlinear Systems",
      "desc": {
       "en": "Solving non-linear systems of equations step by step.",
       "ru": "Решение нелинейных систем уравнений шаг за шагом.",
       "uz": "Chiziqli boʻlmagan tenglamalar sistemasini qadamma-qadam yechish."
      },
      "url": "https://www.youtube.com/@patrickjmt",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "MathDoctorBob — Applied Algebra",
      "desc": {
       "en": "Word problem modeling and system-solving at competition level.",
       "ru": "Составление модели и решение систем на олимпиадном уровне.",
       "uz": "Musobaqa darajasida matnli masalalarni modellashtirish va sistemalarni yechish."
      },
      "url": "https://www.youtube.com/@MathDoctorBob",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "pdf",
    "cards": [
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "OlympiadUSA Grade 7-8 Past Exams",
      "desc": {
       "en": "Word problems and systems at school-to-district level with solutions.",
       "ru": "Текстовые задачи и системы школьного и районного уровня с решениями.",
       "uz": "Maktab–tuman darajasidagi matnli masalalar va sistemalar, yechimlari bilan."
      },
      "url": "https://olympiadusa.org/wp-content/uploads/2025/02/january-grade-7-8-past-exams-questions-and-solutions-olympiadusa-org.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Mathnet.uz — Algebra problems",
      "desc": {
       "en": "Word problems from viloyat and republic rounds involving systems.",
       "ru": "Текстовые задачи с областных и республиканских туров, сводящиеся к системам.",
       "uz": "Viloyat va respublika bosqichlaridan sistemalarga oid matnli masalalar."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "AMC 8 Past Papers",
      "desc": {
       "en": "Great source of word problems at school-to-district olympiad level.",
       "ru": "Отличный источник текстовых задач школьного и районного олимпиадного уровня.",
       "uz": "Maktab–tuman olimpiadasi darajasidagi matnli masalalarning yaxshi manbasi."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/AMC_8_Problems_and_Solutions",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Qiziqarli Matematika — Yunusov",
      "desc": {
       "en": "Uzbek book with word problems including mixture and rate problems.",
       "ru": "Узбекская книга с текстовыми задачами, включая задачи на смеси и движение.",
       "uz": "Oʻzbek kitobi: matnli masalalar, jumladan aralashma va tezlik masalalari."
      },
      "url": "https://www.ziyouz.com/books/kollej_va_otm_darsliklari/matematika/Qiziqarli%20matematika%20va%20olimpiada%20masalalari%20(A.Yunusov%20va%20b.).pdf",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "online",
    "cards": [
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Brilliant.org — Word Problems",
      "desc": {
       "en": "Interactive problems from basic to advanced, including systems and optimization.",
       "ru": "Интерактивные задачи от простых до сложных, включая системы и оптимизацию.",
       "uz": "Oddiydan murakkabgacha interaktiv masalalar, sistemalar va optimallashtirish bilan."
      },
      "url": "https://brilliant.org",
      "price": "paid",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "AoPS — Algebra Competition Problems",
      "desc": {
       "en": "Thousands of word problems and system problems from competition archives.",
       "ru": "Тысячи текстовых задач и задач на системы из олимпиадных архивов.",
       "uz": "Musobaqa arxivlaridan minglab matnli masala va sistema masalasi."
      },
      "url": "https://artofproblemsolving.com/community/c5",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "NRICH — Word Problems",
      "desc": {
       "en": "UK enrichment problems involving systems and mathematical modeling.",
       "ru": "Британские задачи на системы и математическое моделирование.",
       "uz": "Sistemalar va matematik modellashtirishga oid britaniya toʻgarak masalalari."
      },
      "url": "https://nrich.maths.org",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "MathOlymp.com",
      "desc": {
       "en": "Curated olympiad word problems searchable by topic and level.",
       "ru": "Отобранные олимпиадные текстовые задачи с поиском по теме и уровню.",
       "uz": "Mavzu va daraja boʻyicha qidiriladigan tanlangan olimpiada matnli masalalari."
      },
      "url": "https://matholymp.com",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "uzbek",
    "cards": [
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "olympiad.maktab.uz",
      "desc": {
       "en": "Word problems common at all levels. Filter by matematika 7-8 sinf.",
       "ru": "Текстовые задачи встречаются на всех уровнях. Фильтруйте по «matematika», 7–8 классы.",
       "uz": "Matnli masalalar barcha darajada uchraydi. Matematika 7–8-sinf boʻyicha filtrlang."
      },
      "url": "https://olympiad.maktab.uz/Site/OlympiadMaterials",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Mathnet.uz — Masalalar to'plami",
      "desc": {
       "en": "Problem collections from Uzbekistan olympiads organized by topic.",
       "ru": "Сборники задач с олимпиад Узбекистана, разложенные по темам.",
       "uz": "Oʻzbekiston olimpiadalaridan mavzular boʻyicha tartiblangan masala toʻplamlari."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "bilimlar.uz — Grade 7-8",
      "desc": {
       "en": "Uzbek-language problem sets for grades 7-8 including word problems.",
       "ru": "Наборы задач на узбекском для 7–8 классов, включая текстовые задачи.",
       "uz": "7–8-sinflar uchun oʻzbek tilidagi masalalar toʻplami, matnli masalalar bilan."
      },
      "url": "https://bilimlar.uz",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "info-master.uz",
      "desc": {
       "en": "Uzbek math resources and tests including word problems.",
       "ru": "Узбекские материалы и тесты по математике, включая текстовые задачи.",
       "uz": "Oʻzbek matematika resurslari va testlari, matnli masalalar bilan."
      },
      "url": "https://info-master.uz",
      "price": "free",
      "star": false
     }
    ]
   }
  ]
 },
 {
  "n": 9,
  "title": {
   "en": "Triangles & Congruence",
   "ru": "Треугольники и равенство",
   "uz": "Uchburchaklar va tenglik"
  },
  "cat": {
   "en": "Geometry",
   "ru": "Геометрия",
   "uz": "Geometriya"
  },
  "catKey": "geo",
  "color": "#B0451F",
  "tint": "#FBEDE6",
  "tip": {
   "en": "Always draw a big, accurate diagram first. Label all known angles and sides. Most olympiad geometry proofs require adding one auxiliary construction — the right line changes everything.",
   "ru": "Сначала всегда рисуйте большой и аккуратный чертёж. Отметьте все известные углы и стороны. Большинство олимпиадных доказательств требует одного дополнительного построения — верная линия меняет всё.",
   "uz": "Avvalo katta va aniq chizma chizing. Barcha maʼlum burchak va tomonlarni belgilang. Olimpiada geometriyasidagi isbotlarning koʻpi bitta qoʻshimcha yasashni talab qiladi — toʻgʻri tanlangan chiziq hamma narsani oʻzgartiradi."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "Geometry Revisited — Coxeter & Greitzer",
      "desc": {
       "en": "Classic olympiad geometry book. Chapters 1-2 cover triangles and similarity beautifully.",
       "ru": "Классическая книга по олимпиадной геометрии. Главы 1–2 прекрасно разбирают треугольники и подобие.",
       "uz": "Klassik olimpiada geometriyasi kitobi. 1–2-boblar uchburchak va oʻxshashlikni goʻzal beradi."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "Introduction to Geometry — AoPS",
      "desc": {
       "en": "Competition geometry textbook covering congruence, similarity, and special triangles.",
       "ru": "Учебник олимпиадной геометрии: равенство, подобие и особые треугольники.",
       "uz": "Tenglik, oʻxshashlik va maxsus uchburchaklarni qamrovchi musobaqa geometriyasi darsligi."
      },
      "url": "https://artofproblemsolving.com/store/book/intro-geometry",
      "price": "paid",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Triangle Congruence and Similarity",
      "desc": {
       "en": "All criteria with proofs and competition examples.",
       "ru": "Все признаки с доказательствами и олимпиадными примерами.",
       "uz": "Barcha alomatlar isbotlari va musobaqa misollari bilan."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Congruent_triangles",
      "price": "free",
      "star": false
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Cevian Lines",
      "desc": {
       "en": "Ceva's theorem, medians, altitudes, and angle bisectors.",
       "ru": "Теорема Чевы, медианы, высоты и биссектрисы.",
       "uz": "Cheva teoremasi, medianalar, balandliklar va bissektrisalar."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Cevian",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "video",
    "cards": [
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Triangle Geometry",
      "desc": {
       "en": "Congruence, similarity, and special triangle constructions for competition.",
       "ru": "Равенство, подобие и особые построения в треугольнике для олимпиад.",
       "uz": "Musobaqa uchun tenglik, oʻxshashlik va maxsus uchburchak yasashlari."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Khan Academy — Triangles and Congruence",
      "desc": {
       "en": "Complete beginner-to-intermediate course on triangle congruence and similarity.",
       "ru": "Полный курс от начального до среднего уровня о равенстве и подобии треугольников.",
       "uz": "Uchburchaklar tengligi va oʻxshashligi boʻyicha boshlangʻichdan oʻrtagacha toʻliq kurs."
      },
      "url": "https://www.khanacademy.org/math/geometry/hs-geo-congruence",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "3Blue1Brown — Triangle Geometry",
      "desc": {
       "en": "Visual explorations of triangle properties.",
       "ru": "Наглядные разборы свойств треугольника.",
       "uz": "Uchburchak xossalarining koʻrgazmali tadqiqi."
      },
      "url": "https://www.youtube.com/@3blue1brown",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Numberphile — Triangle Mysteries",
      "desc": {
       "en": "Fun videos on interesting triangle properties.",
       "ru": "Увлекательные видео о любопытных свойствах треугольников.",
       "uz": "Uchburchakning qiziqarli xossalari haqidagi videolar."
      },
      "url": "https://www.youtube.com/@numberphile",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "pdf",
    "cards": [
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "150 Nice Geometry Problems — Parvardi (FREE)",
      "desc": {
       "en": "150 competition geometry problems with solutions. Many triangle-focused.",
       "ru": "150 олимпиадных задач по геометрии с решениями. Многие — о треугольниках.",
       "uz": "150 ta musobaqa geometriyasi masalasi, yechimlari bilan. Koʻpi uchburchaklarga oid."
      },
      "url": "https://artofproblemsolving.com/community/c6h1116",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Evan Chen — EGMO (FREE book)",
      "desc": {
       "en": "Free book-length PDF. Triangle chapter is outstanding for olympiad prep.",
       "ru": "Бесплатный PDF размером с книгу. Глава о треугольниках выдающаяся.",
       "uz": "Kitob hajmidagi bepul PDF. Uchburchak bobi olimpiadaga tayyorgarlik uchun aʼlo."
      },
      "url": "https://web.evanchen.cc/geombook.html",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Mathnet.uz — Geometriya",
      "desc": {
       "en": "Uzbekistan olympiad geometry problems involving triangles with solutions.",
       "ru": "Задачи по геометрии треугольника с олимпиад Узбекистана с решениями.",
       "uz": "Oʻzbekiston olimpiadasining uchburchaklarga oid geometriya masalalari, yechimlari bilan."
      },
      "url": "https://mathnet.uz/Uploads/Resurs/5/8f3d6b15-a28c-44de-a194-87060d2e487b_.pdf",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "imogeometry.blogspot.com",
      "desc": {
       "en": "14,642 olympiad geometry problems with AoPS links.",
       "ru": "14 642 олимпиадные задачи по геометрии со ссылками на AoPS.",
       "uz": "AoPS havolalari bilan 14 642 ta olimpiada geometriyasi masalasi."
      },
      "url": "https://imogeometry.blogspot.com/p/geometry-solved-problem-collections.html",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "online",
    "cards": [
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "GeoGebra — Interactive Geometry",
      "desc": {
       "en": "Free dynamic geometry software. Draw any triangle construction and explore.",
       "ru": "Бесплатная динамическая геометрия. Постройте любую конструкцию и исследуйте её.",
       "uz": "Bepul dinamik geometriya dasturi. Istalgan uchburchak yasashini chizib tekshiring."
      },
      "url": "https://www.geogebra.org/geometry",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "AoPS — Geometry Forum",
      "desc": {
       "en": "Competition geometry problems with community solutions.",
       "ru": "Олимпиадные задачи по геометрии с решениями сообщества.",
       "uz": "Musobaqa geometriyasi masalalari, hamjamiyat yechimlari bilan."
      },
      "url": "https://artofproblemsolving.com/community/c4",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Brilliant.org — Geometry Fundamentals",
      "desc": {
       "en": "Interactive geometry course covering congruence, similarity, special triangles.",
       "ru": "Интерактивный курс геометрии: равенство, подобие, особые треугольники.",
       "uz": "Tenglik, oʻxshashlik va maxsus uchburchaklarni qamrovchi interaktiv geometriya kursi."
      },
      "url": "https://brilliant.org/courses/geometry-fundamentals/",
      "price": "paid",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Cut the Knot — Triangle Problems",
      "desc": {
       "en": "Deep mathematical explorations with visual proofs.",
       "ru": "Глубокие математические разборы с наглядными доказательствами.",
       "uz": "Koʻrgazmali isbotlar bilan chuqur matematik tadqiqlar."
      },
      "url": "https://www.cut-the-knot.org/triangle.shtml",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "uzbek",
    "cards": [
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "olympiad.maktab.uz — Geometriya",
      "desc": {
       "en": "Geometry problems from all levels for grades 7-8.",
       "ru": "Задачи по геометрии всех уровней для 7–8 классов.",
       "uz": "7–8-sinflar uchun barcha darajadagi geometriya masalalari."
      },
      "url": "https://olympiad.maktab.uz/Site/OlympiadMaterials",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Mathnet.uz — Geometriya bo'limi",
      "desc": {
       "en": "Triangle problems from viloyat and republic rounds with full solutions.",
       "ru": "Задачи о треугольниках с областных и республиканских туров с полными решениями.",
       "uz": "Viloyat va respublika bosqichlaridan uchburchak masalalari, toʻliq yechimlari bilan."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "imogeometry — TASIMO problems",
      "desc": {
       "en": "TASIMO geometry problems with solutions. Advanced level.",
       "ru": "Задачи по геометрии TASIMO с решениями. Повышенный уровень.",
       "uz": "TASIMO geometriya masalalari, yechimlari bilan. Yuqori daraja."
      },
      "url": "https://imogeometry.blogspot.com",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Ziyouz.com — Geometriya kitoblari",
      "desc": {
       "en": "Uzbek geometry textbooks and supplementary problem collections.",
       "ru": "Узбекские учебники геометрии и дополнительные сборники задач.",
       "uz": "Oʻzbek geometriya darsliklari va qoʻshimcha masalalar toʻplamlari."
      },
      "url": "https://www.ziyouz.com",
      "price": "free",
      "star": false
     }
    ]
   }
  ]
 },
 {
  "n": 10,
  "title": {
   "en": "Area Tricks",
   "ru": "Площади и метод площадей",
   "uz": "Yuzalar va yuzalar usuli"
  },
  "cat": {
   "en": "Geometry",
   "ru": "Геометрия",
   "uz": "Geometriya"
  },
  "catKey": "geo",
  "color": "#B0451F",
  "tint": "#FBEDE6",
  "tip": {
   "en": "Compute the same area in two different ways — this is one of the most powerful olympiad techniques across ALL topics, not just geometry.",
   "ru": "Посчитайте одну и ту же площадь двумя способами — это один из самых сильных олимпиадных приёмов во ВСЕХ темах, а не только в геометрии.",
   "uz": "Bitta yuzani ikki xil usulda hisoblang — bu faqat geometriyada emas, BARCHA mavzularda ishlaydigan eng kuchli olimpiada usullaridan biri."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Pick's Theorem",
      "desc": {
       "en": "Statement, proof, and competition applications for lattice polygons.",
       "ru": "Формулировка, доказательство и олимпиадные применения для решётчатых многоугольников.",
       "uz": "Tugunli koʻpburchaklar uchun taʼrif, isbot va musobaqadagi tatbiqlari."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Pick%27s_Theorem",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Shoelace Theorem",
      "desc": {
       "en": "Computing polygon areas using vertex coordinates.",
       "ru": "Вычисление площади многоугольника по координатам вершин.",
       "uz": "Uchlarning koordinatalari orqali koʻpburchak yuzasini hisoblash."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Shoelace_Theorem",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Heron's Formula",
      "desc": {
       "en": "Proof, applications, and competition problems.",
       "ru": "Доказательство, применения и олимпиадные задачи.",
       "uz": "Isbot, tatbiqlari va musobaqa masalalari."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Heron%27s_formula",
      "price": "free",
      "star": false
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "Introduction to Geometry — AoPS",
      "desc": {
       "en": "Area section covers all formulas plus clever two-area tricks.",
       "ru": "Раздел о площадях: все формулы плюс приёмы подсчёта площади двумя способами.",
       "uz": "Yuzalar boʻlimi barcha formulalarni va ikki xil hisoblash usulini qamraydi."
      },
      "url": "https://artofproblemsolving.com/store/book/intro-geometry",
      "price": "paid",
      "star": false
     }
    ]
   },
   {
    "id": "video",
    "cards": [
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Area Problems",
      "desc": {
       "en": "Competition-focused video on area methods, Heron's formula, and Pick's theorem.",
       "ru": "Олимпиадное видео о методе площадей, формуле Герона и формуле Пика.",
       "uz": "Yuzalar usuli, Geron formulasi va Pik teoremasi boʻyicha musobaqaga yoʻnaltirilgan video."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Khan Academy — Area and Perimeter",
      "desc": {
       "en": "Comprehensive area course from triangles to composite shapes.",
       "ru": "Подробный курс о площадях — от треугольников до составных фигур.",
       "uz": "Uchburchakdan murakkab shakllargacha yuzalar boʻyicha toʻliq kurs."
      },
      "url": "https://www.khanacademy.org/math/geometry/hs-geo-foundations",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "3Blue1Brown — Area and Geometry",
      "desc": {
       "en": "Visual explorations of area calculations.",
       "ru": "Наглядные разборы вычисления площадей.",
       "uz": "Yuza hisoblashning koʻrgazmali tadqiqi."
      },
      "url": "https://www.youtube.com/@3blue1brown",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "MathOlympiad — Area Tricks",
      "desc": {
       "en": "Olympiad-specific area techniques including dissection and two-ways method.",
       "ru": "Олимпиадные приёмы работы с площадями, включая разрезания и метод двух подсчётов.",
       "uz": "Olimpiadaga xos yuza usullari, jumladan qirqish va ikki xil hisoblash."
      },
      "url": "https://www.youtube.com/@mathsolympiad",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "pdf",
    "cards": [
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "150 Geometry Problems — Parvardi (FREE)",
      "desc": {
       "en": "Many area-based competition problems with full solutions.",
       "ru": "Много олимпиадных задач на площади с полными решениями.",
       "uz": "Yuzaga asoslangan koʻplab musobaqa masalasi, toʻliq yechimlari bilan."
      },
      "url": "https://artofproblemsolving.com/community/c6h1116",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Evan Chen — EGMO (FREE)",
      "desc": {
       "en": "Full treatment of area methods in olympiad geometry.",
       "ru": "Полное изложение метода площадей в олимпиадной геометрии.",
       "uz": "Olimpiada geometriyasida yuzalar usulining toʻliq bayoni."
      },
      "url": "https://web.evanchen.cc/geombook.html",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Mathnet.uz — Area problems",
      "desc": {
       "en": "Area problems from Uzbekistan olympiad rounds with solutions.",
       "ru": "Задачи на площади с туров олимпиады Узбекистана с решениями.",
       "uz": "Oʻzbekiston olimpiada bosqichlaridan yuza masalalari, yechimlari bilan."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "OlympiadUSA Past Papers",
      "desc": {
       "en": "Area problems at grade 7-8 level from past exams.",
       "ru": "Задачи на площади уровня 7–8 классов из прошлых туров.",
       "uz": "Oʻtgan imtihonlardan 7–8-sinf darajasidagi yuza masalalari."
      },
      "url": "https://olympiadusa.org",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "online",
    "cards": [
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "GeoGebra — Area Explorer",
      "desc": {
       "en": "Interactive area calculations visually for any polygon.",
       "ru": "Наглядное интерактивное вычисление площади любого многоугольника.",
       "uz": "Istalgan koʻpburchak yuzasini koʻrgazmali va interaktiv hisoblash."
      },
      "url": "https://www.geogebra.org",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "AoPS — Area Competition Problems",
      "desc": {
       "en": "Hundreds of area problems from competition archives.",
       "ru": "Сотни задач на площади из олимпиадных архивов.",
       "uz": "Musobaqa arxivlaridan yuzlab yuza masalasi."
      },
      "url": "https://artofproblemsolving.com/community/c4",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Brilliant.org — Area & Perimeter",
      "desc": {
       "en": "Interactive lessons on area formulas in competitions.",
       "ru": "Интерактивные уроки о формулах площади в олимпиадных задачах.",
       "uz": "Musobaqalardagi yuza formulalari boʻyicha interaktiv darslar."
      },
      "url": "https://brilliant.org/courses/geometry-fundamentals/",
      "price": "paid",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "NRICH — Area Puzzles",
      "desc": {
       "en": "Engaging area and dissection puzzles for grades 7-8.",
       "ru": "Увлекательные задачи на площади и разрезания для 7–8 классов.",
       "uz": "7–8-sinflar uchun qiziqarli yuza va qirqish boshqotirmalari."
      },
      "url": "https://nrich.maths.org",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "uzbek",
    "cards": [
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "olympiad.maktab.uz — Geometriya masalalari",
      "desc": {
       "en": "Area problems from viloyat and republic olympiad papers for grades 7-8.",
       "ru": "Задачи на площади с областных и республиканских туров для 7–8 классов.",
       "uz": "7–8-sinflar uchun viloyat va respublika olimpiada variantlaridan yuza masalalari."
      },
      "url": "https://olympiad.maktab.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Mathnet.uz",
      "desc": {
       "en": "Area and geometry problems from official Uzbekistan olympiad guide.",
       "ru": "Задачи на площади и геометрию из официального руководства по олимпиадам Узбекистана.",
       "uz": "Oʻzbekiston olimpiadasi rasmiy qoʻllanmasidan yuza va geometriya masalalari."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "bilimlar.uz",
      "desc": {
       "en": "Grade 7-8 geometry problems in Uzbek language.",
       "ru": "Задачи по геометрии для 7–8 классов на узбекском языке.",
       "uz": "Oʻzbek tilidagi 7–8-sinf geometriya masalalari."
      },
      "url": "https://bilimlar.uz",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Ziyouz.com — Geometriya",
      "desc": {
       "en": "Uzbek geometry books and supplementary resources.",
       "ru": "Узбекские книги по геометрии и дополнительные материалы.",
       "uz": "Oʻzbek geometriya kitoblari va qoʻshimcha resurslar."
      },
      "url": "https://www.ziyouz.com",
      "price": "free",
      "star": false
     }
    ]
   }
  ]
 },
 {
  "n": 11,
  "title": {
   "en": "Circles",
   "ru": "Окружности",
   "uz": "Aylanalar"
  },
  "cat": {
   "en": "Geometry",
   "ru": "Геометрия",
   "uz": "Geometriya"
  },
  "catKey": "geo",
  "color": "#B0451F",
  "tint": "#FBEDE6",
  "tip": {
   "en": "Power of a Point is the single most powerful circle tool. When two chords, secants, or tangents interact at a point, write the power equation immediately.",
   "ru": "Степень точки — самый мощный инструмент работы с окружностями. Как только в одной точке встречаются хорды, секущие или касательные, сразу выписывайте равенство степеней.",
   "uz": "Nuqtaning darajasi — aylanalar boʻyicha eng kuchli yagona qurol. Ikki vatar, kesuvchi yoki urinma bitta nuqtada uchrashsa, darhol daraja tenglamasini yozing."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Power of a Point",
      "desc": {
       "en": "Full treatment with proof, all three cases, and competition problems.",
       "ru": "Полное изложение с доказательством, разбором всех трёх случаев и олимпиадными задачами.",
       "uz": "Isbot, uchala hol va musobaqa masalalari bilan toʻliq bayon."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Power_of_a_Point_Theorem",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Inscribed Angle Theorem",
      "desc": {
       "en": "All angle theorems for circles: inscribed, central, tangent-chord.",
       "ru": "Все теоремы об углах окружности: вписанный, центральный, угол между касательной и хордой.",
       "uz": "Aylanaga oid barcha burchak teoremalari: ichki chizilgan, markaziy, urinma–vatar."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Inscribed_angle",
      "price": "free",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "Geometry Revisited — Coxeter & Greitzer",
      "desc": {
       "en": "Classic chapter on circles and cyclic quadrilaterals. Essential reading.",
       "ru": "Классическая глава об окружностях и вписанных четырёхугольниках. Обязательное чтение.",
       "uz": "Aylanalar va ichki chizilgan toʻrtburchaklar boʻyicha klassik bob. Oʻqish shart."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Cyclic Quadrilateral and Ptolemy",
      "desc": {
       "en": "Properties and Ptolemy's theorem with competition problems.",
       "ru": "Свойства и теорема Птолемея с олимпиадными задачами.",
       "uz": "Xossalari va Ptolemey teoremasi, musobaqa masalalari bilan."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Cyclic_quadrilateral",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "video",
    "cards": [
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Circle Theorems",
      "desc": {
       "en": "Power of a point, inscribed angles, tangent properties with competition examples.",
       "ru": "Степень точки, вписанные углы и свойства касательной с олимпиадными примерами.",
       "uz": "Nuqtaning darajasi, ichki chizilgan burchaklar, urinma xossalari — musobaqa misollari bilan."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Khan Academy — Circle Theorems",
      "desc": {
       "en": "Complete circle theorem course from central to inscribed quadrilaterals.",
       "ru": "Полный курс теорем об окружности — от центральных углов до вписанных четырёхугольников.",
       "uz": "Markaziy burchakdan ichki chizilgan toʻrtburchakkacha aylana teoremalarining toʻliq kursi."
      },
      "url": "https://www.khanacademy.org/math/geometry/hs-geo-circles",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "3Blue1Brown — Circle Geometry",
      "desc": {
       "en": "Beautiful explorations of circle geometry and optimization.",
       "ru": "Красивые разборы геометрии окружности и задач на оптимизацию.",
       "uz": "Aylana geometriyasi va optimallashtirishning goʻzal tadqiqi."
      },
      "url": "https://www.youtube.com/@3blue1brown",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "MathOlympiad — Circle Competition Problems",
      "desc": {
       "en": "Olympiad-level circle problems solved step by step.",
       "ru": "Олимпиадные задачи об окружностях, разобранные шаг за шагом.",
       "uz": "Olimpiada darajasidagi aylana masalalari qadamma-qadam yechilgan."
      },
      "url": "https://www.youtube.com/@mathsolympiad",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "pdf",
    "cards": [
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Evan Chen — EGMO circle chapter (FREE)",
      "desc": {
       "en": "Comprehensive free book chapter on circle geometry for olympiads.",
       "ru": "Подробная бесплатная глава о геометрии окружности для олимпиад.",
       "uz": "Olimpiadalar uchun aylana geometriyasi boʻyicha bepul va toʻliq bob."
      },
      "url": "https://web.evanchen.cc/geombook.html",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "imogeometry — Circle problems",
      "desc": {
       "en": "Thousands of competition circle problems organized by topic.",
       "ru": "Тысячи олимпиадных задач об окружностях, разложенных по темам.",
       "uz": "Mavzular boʻyicha tartiblangan minglab musobaqa aylana masalasi."
      },
      "url": "https://imogeometry.blogspot.com/p/geometry-solved-problem-collections.html",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Mathnet.uz — Aylana masalalari",
      "desc": {
       "en": "Circle problems from viloyat and republic olympiad papers.",
       "ru": "Задачи об окружностях с областных и республиканских туров.",
       "uz": "Viloyat va respublika olimpiada variantlaridan aylana masalalari."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "150 Geometry Problems — Parvardi",
      "desc": {
       "en": "Circle-focused competition problems with full solutions.",
       "ru": "Олимпиадные задачи об окружностях с полными решениями.",
       "uz": "Aylanaga bagʻishlangan musobaqa masalalari, toʻliq yechimlari bilan."
      },
      "url": "https://artofproblemsolving.com/community/c6h1116",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "online",
    "cards": [
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "GeoGebra — Circle Theorems",
      "desc": {
       "en": "Interactive demonstrations. Drag points to see theorems hold dynamically.",
       "ru": "Интерактивные демонстрации. Двигайте точки и смотрите, как теоремы сохраняются.",
       "uz": "Interaktiv koʻrgazmalar. Nuqtalarni surib, teoremalar bajarilishini kuzating."
      },
      "url": "https://www.geogebra.org",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "AoPS — Geometry/Circle Forum",
      "desc": {
       "en": "Competition circle problems with community solutions.",
       "ru": "Олимпиадные задачи об окружностях с решениями сообщества.",
       "uz": "Musobaqa aylana masalalari, hamjamiyat yechimlari bilan."
      },
      "url": "https://artofproblemsolving.com/community/c4",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Brilliant.org — Circle Geometry",
      "desc": {
       "en": "Interactive course including power of a point.",
       "ru": "Интерактивный курс, включающий степень точки.",
       "uz": "Nuqtaning darajasi ham kirgan interaktiv kurs."
      },
      "url": "https://brilliant.org/courses/geometry-fundamentals/",
      "price": "paid",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Cut the Knot — Circle Theorems",
      "desc": {
       "en": "Classical explorations of circle geometry with proofs.",
       "ru": "Классические разборы геометрии окружности с доказательствами.",
       "uz": "Aylana geometriyasining klassik tadqiqi, isbotlari bilan."
      },
      "url": "https://www.cut-the-knot.org/geometry.shtml",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "uzbek",
    "cards": [
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "olympiad.maktab.uz",
      "desc": {
       "en": "Circle geometry problems from all levels of Uzbekistan olympiad.",
       "ru": "Задачи о геометрии окружности со всех уровней олимпиады Узбекистана.",
       "uz": "Oʻzbekiston olimpiadasining barcha darajalaridan aylana geometriyasi masalalari."
      },
      "url": "https://olympiad.maktab.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Mathnet.uz — Geometriya",
      "desc": {
       "en": "Circle problems from viloyat and republic rounds with solutions.",
       "ru": "Задачи об окружностях с областных и республиканских туров с решениями.",
       "uz": "Viloyat va respublika bosqichlaridan aylana masalalari, yechimlari bilan."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "imogeometry — TASIMO",
      "desc": {
       "en": "TASIMO competition problems include advanced circle geometry.",
       "ru": "Задачи TASIMO включают геометрию окружности повышенного уровня.",
       "uz": "TASIMO musobaqa masalalarida yuqori darajadagi aylana geometriyasi bor."
      },
      "url": "https://imogeometry.blogspot.com",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Ziyouz.com — Geometriya",
      "desc": {
       "en": "Uzbek-language geometry resources including circle theorems.",
       "ru": "Материалы по геометрии на узбекском, включая теоремы об окружности.",
       "uz": "Oʻzbek tilidagi geometriya resurslari, aylana teoremalari bilan."
      },
      "url": "https://www.ziyouz.com",
      "price": "free",
      "star": false
     }
    ]
   }
  ]
 },
 {
  "n": 12,
  "title": {
   "en": "Coordinate Geometry",
   "ru": "Координатный метод",
   "uz": "Koordinatalar usuli"
  },
  "cat": {
   "en": "Geometry",
   "ru": "Геометрия",
   "uz": "Geometriya"
  },
  "catKey": "geo",
  "color": "#B0451F",
  "tint": "#FBEDE6",
  "tip": {
   "en": "Choose coordinates wisely — place one vertex at origin and one side along the x-axis. This eliminates variables and makes everything much cleaner.",
   "ru": "Выбирайте координаты с умом: поместите одну вершину в начало координат, а сторону — на ось абсцисс. Это убирает лишние переменные и делает выкладки заметно чище.",
   "uz": "Koordinatalarni oqilona tanlang: bitta uchni koordinatalar boshiga, bitta tomonni Ox oʻqiga joylashtiring. Bu oʻzgaruvchilar sonini kamaytiradi va hisobni ancha toza qiladi."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Coordinate Geometry",
      "desc": {
       "en": "Distance, midpoint, slope, line equations, and circle equations.",
       "ru": "Расстояние, середина, угловой коэффициент, уравнения прямой и окружности.",
       "uz": "Masofa, oʻrta nuqta, burchak koeffitsiyenti, toʻgʻri chiziq va aylana tenglamalari."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Coordinate_geometry",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Shoelace Theorem",
      "desc": {
       "en": "Computing polygon areas from vertex coordinates.",
       "ru": "Вычисление площади многоугольника по координатам его вершин.",
       "uz": "Uchlarning koordinatalari boʻyicha koʻpburchak yuzasini hisoblash."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Shoelace_Theorem",
      "price": "free",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "Introduction to Geometry — AoPS",
      "desc": {
       "en": "Coordinate geometry chapter at competition level.",
       "ru": "Глава о координатной геометрии олимпиадного уровня.",
       "uz": "Musobaqa darajasidagi koordinatalar geometriyasi bobi."
      },
      "url": "https://artofproblemsolving.com/store/book/intro-geometry",
      "price": "paid",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "Challenging Problems in Geometry — Posamentier",
      "desc": {
       "en": "Excellent problems including many requiring coordinate methods.",
       "ru": "Превосходные задачи, многие из которых требуют координатного метода.",
       "uz": "Aʼlo masalalar, koʻpi koordinatalar usulini talab qiladi."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": false
     }
    ]
   },
   {
    "id": "video",
    "cards": [
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Khan Academy — Analytic Geometry",
      "desc": {
       "en": "Full coordinate geometry course: lines, distance, circles, conics.",
       "ru": "Полный курс координатной геометрии: прямые, расстояния, окружности, конические сечения.",
       "uz": "Koordinatalar geometriyasining toʻliq kursi: toʻgʻri chiziqlar, masofa, aylanalar, konus kesimlari."
      },
      "url": "https://www.khanacademy.org/math/geometry/hs-geo-analytic-geometry",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Coordinate Methods",
      "desc": {
       "en": "When and how to use coordinates in competition geometry.",
       "ru": "Когда и как применять координаты в олимпиадной геометрии.",
       "uz": "Musobaqa geometriyasida koordinatalarni qachon va qanday ishlatish kerak."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "3Blue1Brown — Essence of Linear Algebra",
      "desc": {
       "en": "Deep geometric understanding of coordinates and transformations.",
       "ru": "Глубокое геометрическое понимание координат и преобразований.",
       "uz": "Koordinatalar va almashtirishlarni chuqur geometrik tushunish."
      },
      "url": "https://www.youtube.com/@3blue1brown",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "PatrickJMT — Analytic Geometry",
      "desc": {
       "en": "Step-by-step coordinate geometry problems including circles and loci.",
       "ru": "Пошаговые задачи по координатной геометрии, включая окружности и геометрические места.",
       "uz": "Koordinatalar geometriyasi masalalari qadamma-qadam, aylanalar va geometrik oʻrinlar bilan."
      },
      "url": "https://www.youtube.com/@patrickjmt",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "pdf",
    "cards": [
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Evan Chen — EGMO coordinate chapter (FREE)",
      "desc": {
       "en": "When and how to use coordinates effectively in olympiads.",
       "ru": "Когда и как эффективно применять координаты на олимпиадах.",
       "uz": "Olimpiadalarda koordinatalarni qachon va qanday samarali ishlatish kerak."
      },
      "url": "https://web.evanchen.cc/geombook.html",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Mathnet.uz — Koordinatalar",
      "desc": {
       "en": "Coordinate geometry problems from Uzbekistan olympiad rounds.",
       "ru": "Задачи по координатной геометрии с туров олимпиады Узбекистана.",
       "uz": "Oʻzbekiston olimpiada bosqichlaridan koordinatalar geometriyasi masalalari."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "AMC 10/12 coordinate geometry problems",
      "desc": {
       "en": "AMC papers feature coordinate geometry at district-to-regional level.",
       "ru": "В вариантах AMC координатная геометрия встречается на районном и областном уровне.",
       "uz": "AMC variantlarida tuman–viloyat darajasidagi koordinatalar geometriyasi uchraydi."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/AMC_10_Problems_and_Solutions",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "OlympiadUSA Past Papers",
      "desc": {
       "en": "Coordinate geometry problems at grade 7-8 level.",
       "ru": "Задачи по координатной геометрии уровня 7–8 классов.",
       "uz": "7–8-sinf darajasidagi koordinatalar geometriyasi masalalari."
      },
      "url": "https://olympiadusa.org",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "online",
    "cards": [
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "GeoGebra — Analytic Geometry",
      "desc": {
       "en": "Interactive coordinate geometry — plot points, lines, circles instantly.",
       "ru": "Интерактивная координатная геометрия: точки, прямые и окружности мгновенно.",
       "uz": "Interaktiv koordinatalar geometriyasi — nuqta, chiziq va aylanani bir zumda chizing."
      },
      "url": "https://www.geogebra.org",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Desmos — Graphing Calculator",
      "desc": {
       "en": "Free online graphing calculator. Great for visualizing coordinate problems.",
       "ru": "Бесплатный онлайн-график. Отлично подходит для наглядных координатных задач.",
       "uz": "Bepul onlayn grafik kalkulyator. Koordinata masalalarini koʻrish uchun zoʻr."
      },
      "url": "https://www.desmos.com/calculator",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "AoPS — Coordinate Geometry Problems",
      "desc": {
       "en": "Competition problems using coordinate methods.",
       "ru": "Олимпиадные задачи, решаемые координатным методом.",
       "uz": "Koordinatalar usulidan foydalanadigan musobaqa masalalari."
      },
      "url": "https://artofproblemsolving.com/community/c4",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Brilliant.org — Analytic Geometry",
      "desc": {
       "en": "Interactive coordinate geometry course.",
       "ru": "Интерактивный курс координатной геометрии.",
       "uz": "Interaktiv koordinatalar geometriyasi kursi."
      },
      "url": "https://brilliant.org",
      "price": "paid",
      "star": false
     }
    ]
   },
   {
    "id": "uzbek",
    "cards": [
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "olympiad.maktab.uz",
      "desc": {
       "en": "Coordinate geometry in the geometry sections of Uzbekistan papers.",
       "ru": "Координатная геометрия в геометрических разделах узбекских вариантов.",
       "uz": "Oʻzbekiston variantlarining geometriya boʻlimlaridagi koordinatalar geometriyasi."
      },
      "url": "https://olympiad.maktab.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Mathnet.uz",
      "desc": {
       "en": "Coordinate geometry problems from official Uzbekistan olympiad guide.",
       "ru": "Задачи по координатной геометрии из официального руководства по олимпиадам Узбекистана.",
       "uz": "Oʻzbekiston olimpiadasi rasmiy qoʻllanmasidan koordinatalar geometriyasi masalalari."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "bilimlar.uz",
      "desc": {
       "en": "Grade 7-8 geometry including coordinate methods.",
       "ru": "Геометрия для 7–8 классов, включая координатные методы.",
       "uz": "7–8-sinf geometriyasi, koordinatalar usuli bilan."
      },
      "url": "https://bilimlar.uz",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Ziyouz.com — Analitik geometriya",
      "desc": {
       "en": "Uzbek analytic geometry textbooks and supplementary materials.",
       "ru": "Узбекские учебники аналитической геометрии и дополнительные материалы.",
       "uz": "Oʻzbek analitik geometriya darsliklari va qoʻshimcha materiallar."
      },
      "url": "https://www.ziyouz.com",
      "price": "free",
      "star": false
     }
    ]
   }
  ]
 },
 {
  "n": 13,
  "title": {
   "en": "Counting Principles",
   "ru": "Комбинаторика: как считать",
   "uz": "Kombinatorika: qanday sanash kerak"
  },
  "cat": {
   "en": "Combinatorics",
   "ru": "Комбинаторика",
   "uz": "Kombinatorika"
  },
  "catKey": "comb",
  "color": "#5B4FC7",
  "tint": "#EDECFD",
  "tip": {
   "en": "Overcounting + correcting often beats counting directly. Draw a Venn diagram before applying inclusion-exclusion. Stars and bars is your go-to for distributing identical objects.",
   "ru": "Посчитать с избытком и вычесть лишнее часто проще, чем считать напрямую. Перед формулой включений-исключений нарисуйте диаграмму. Шары и перегородки — главный приём для раздачи одинаковых предметов.",
   "uz": "Ortiqcha sanab, soʻng tuzatish koʻpincha toʻgʻridan-toʻgʻri sanashdan afzal. Qoʻshish va ayirish formulasini qoʻllashdan oldin Venn diagrammasini chizing. Bir xil buyumlarni taqsimlashda «shar va toʻsiq» usuli asosiy quroldir."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "Introduction to Counting & Probability — AoPS",
      "desc": {
       "en": "The best competition counting book. Permutations, combinations, inclusion-exclusion.",
       "ru": "Лучшая книга по олимпиадным подсчётам. Перестановки, сочетания, включения-исключения.",
       "uz": "Sanash boʻyicha eng yaxshi musobaqa kitobi. Oʻrinlashtirish, guruhlash, qoʻshish–ayirish."
      },
      "url": "https://artofproblemsolving.com/store/book/intro-counting",
      "price": "paid",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Counting — Intro to Intermediate",
      "desc": {
       "en": "Multiplication/addition principles, permutations, combinations, Binomial theorem.",
       "ru": "Правила суммы и произведения, перестановки, сочетания, бином Ньютона.",
       "uz": "Koʻpaytirish va qoʻshish qoidalari, oʻrinlashtirish, guruhlash, Nyuton binomi."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Combinatorics/Olympiad",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Inclusion-Exclusion Principle",
      "desc": {
       "en": "Statement, proof, and competition applications.",
       "ru": "Формулировка, доказательство и олимпиадные применения.",
       "uz": "Taʼrif, isbot va musobaqadagi tatbiqlari."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Inclusion-Exclusion_Principle",
      "price": "free",
      "star": false
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "A Path to Combinatorics — Andreescu & Feng",
      "desc": {
       "en": "Excellent olympiad combinatorics book covering counting methods.",
       "ru": "Отличная книга по олимпиадной комбинаторике с обзором методов подсчёта.",
       "uz": "Sanash usullarini qamrovchi aʼlo olimpiada kombinatorikasi kitobi."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": false
     }
    ]
   },
   {
    "id": "video",
    "cards": [
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Counting",
      "desc": {
       "en": "Multiplication principle, permutations, combinations, overcounting.",
       "ru": "Правило произведения, перестановки, сочетания и борьба с двойным счётом.",
       "uz": "Koʻpaytirish qoidasi, oʻrinlashtirish, guruhlash, ortiqcha sanash."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Khan Academy — Counting and Combinatorics",
      "desc": {
       "en": "From basics to combinations and permutations with practice.",
       "ru": "От основ до сочетаний и перестановок, с тренировкой.",
       "uz": "Asoslardan guruhlash va oʻrinlashtirishgacha, mashqlari bilan."
      },
      "url": "https://www.khanacademy.org/math/statistics-probability/counting-permutations-and-combinations",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "3Blue1Brown — How to Count",
      "desc": {
       "en": "Deep intuitive approach to combinatorial thinking.",
       "ru": "Глубокий интуитивный подход к комбинаторному мышлению.",
       "uz": "Kombinator fikrlashga chuqur va sezgiga asoslangan yondashuv."
      },
      "url": "https://www.youtube.com/@3blue1brown",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Po-Shen Loh — Combinatorics Lecture",
      "desc": {
       "en": "Advanced but inspiring lecture by US IMO coach.",
       "ru": "Сложная, но вдохновляющая лекция тренера сборной США.",
       "uz": "AQSh IMO murabbiyining murakkab, ammo ilhomlantiruvchi maʼruzasi."
      },
      "url": "https://www.youtube.com/@poshenloh",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "pdf",
    "cards": [
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Mathnet.uz — Kombinatorika",
      "desc": {
       "en": "Combinatorics problems from Uzbekistan olympiad papers with solutions.",
       "ru": "Задачи по комбинаторике из вариантов олимпиады Узбекистана с решениями.",
       "uz": "Oʻzbekiston olimpiada variantlaridan kombinatorika masalalari, yechimlari bilan."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "AMC 8 and 10 Past Papers",
      "desc": {
       "en": "Excellent source of counting and probability problems at competition level.",
       "ru": "Отличный источник задач на подсчёты и вероятность олимпиадного уровня.",
       "uz": "Musobaqa darajasidagi sanash va ehtimollik masalalarining aʼlo manbasi."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/AMC_8_Problems_and_Solutions",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Challenging Problems — Yaglom & Yaglom",
      "desc": {
       "en": "Classic Soviet book with outstanding combinatorics problems.",
       "ru": "Классическая советская книга с выдающимися задачами по комбинаторике.",
       "uz": "Klassik sovet kitobi, kombinatorika boʻyicha ajoyib masalalar bilan."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "JMO 2025 Grade 7-8 Paper (Scribd)",
      "desc": {
       "en": "Junior Math Olympiad 2025 paper for grades 7-8 covering combinatorics.",
       "ru": "Вариант юниорской олимпиады 2025 года для 7–8 классов с задачами по комбинаторике.",
       "uz": "7–8-sinflar uchun 2025-yilgi Kichik matematika olimpiadasi varianti, kombinatorika bilan."
      },
      "url": "https://www.scribd.com/document/841297123/JMO-2025-7-8-question-paper",
      "price": "paid",
      "star": false
     }
    ]
   },
   {
    "id": "online",
    "cards": [
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Brilliant.org — Combinatorics",
      "desc": {
       "en": "Interactive counting course from basic principles to advanced techniques.",
       "ru": "Интерактивный курс подсчётов — от базовых правил до продвинутых приёмов.",
       "uz": "Asosiy prinsiplardan murakkab usullargacha interaktiv sanash kursi."
      },
      "url": "https://brilliant.org/courses/counting/",
      "price": "paid",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "AoPS — Combinatorics Forum",
      "desc": {
       "en": "Thousands of competition counting problems with solutions.",
       "ru": "Тысячи олимпиадных задач на подсчёты с решениями.",
       "uz": "Minglab musobaqa sanash masalasi, yechimlari bilan."
      },
      "url": "https://artofproblemsolving.com/community/c6",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "NRICH — Combinatorics Challenges",
      "desc": {
       "en": "Competition-quality counting problems for grades 7-10.",
       "ru": "Задачи на подсчёты олимпиадного качества для 7–10 классов.",
       "uz": "7–10-sinflar uchun musobaqa sifatidagi sanash masalalari."
      },
      "url": "https://nrich.maths.org",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Cut the Knot — Combinatorics",
      "desc": {
       "en": "Classical combinatorics problems with deep mathematical explanations.",
       "ru": "Классические комбинаторные задачи с глубокими математическими объяснениями.",
       "uz": "Klassik kombinatorika masalalari, chuqur matematik tushuntirishlari bilan."
      },
      "url": "https://www.cut-the-knot.org/do_you_know/Combinatorics.shtml",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "uzbek",
    "cards": [
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "olympiad.maktab.uz",
      "desc": {
       "en": "Combinatorics problems in Uzbekistan olympiad papers for grades 7-8.",
       "ru": "Задачи по комбинаторике в вариантах олимпиады Узбекистана для 7–8 классов.",
       "uz": "7–8-sinflar uchun Oʻzbekiston olimpiada variantlaridagi kombinatorika masalalari."
      },
      "url": "https://olympiad.maktab.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Mathnet.uz — Kombinatorika",
      "desc": {
       "en": "Combinatorics section of the official Uzbekistan olympiad guide.",
       "ru": "Раздел комбинаторики официального руководства по олимпиадам Узбекистана.",
       "uz": "Oʻzbekiston olimpiadasi rasmiy qoʻllanmasining kombinatorika boʻlimi."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Qiziqarli Matematika — Yunusov",
      "desc": {
       "en": "Uzbek book with interesting counting and combinatorics puzzles.",
       "ru": "Узбекская книга с занимательными задачами на подсчёты и комбинаторику.",
       "uz": "Oʻzbek kitobi: sanash va kombinatorika boʻyicha qiziqarli boshqotirmalar."
      },
      "url": "https://www.ziyouz.com",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "bilimlar.uz — Kombinatorika",
      "desc": {
       "en": "Uzbek-language combinatorics problems for olympiad preparation.",
       "ru": "Задачи по комбинаторике на узбекском для подготовки к олимпиадам.",
       "uz": "Olimpiadaga tayyorgarlik uchun oʻzbek tilidagi kombinatorika masalalari."
      },
      "url": "https://bilimlar.uz",
      "price": "free",
      "star": false
     }
    ]
   }
  ]
 },
 {
  "n": 14,
  "title": {
   "en": "Pigeonhole Principle",
   "ru": "Принцип Дирихле",
   "uz": "Dirixle prinsipi"
  },
  "cat": {
   "en": "Combinatorics",
   "ru": "Комбинаторика",
   "uz": "Kombinatorika"
  },
  "catKey": "comb",
  "color": "#5B4FC7",
  "tint": "#EDECFD",
  "tip": {
   "en": "The hardest part is choosing the right partition (the 'holes'). Once you have the right partition, the argument writes itself. Practice by identifying pigeons and holes in 20+ problems.",
   "ru": "Самое трудное — выбрать правильное разбиение, то есть «клетки». Как только разбиение найдено, доказательство пишется само. Потренируйтесь находить «предметы» и «клетки» в двух десятках задач.",
   "uz": "Eng qiyini — toʻgʻri boʻlinishni («kataklarni») tanlash. Toʻgʻri boʻlinish topilsa, mulohaza oʻzi yozilib ketadi. Yigirmatadan ortiq masalada «kaptar» va «katak» nima ekanini aniqlashni mashq qiling."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Pigeonhole Principle",
      "desc": {
       "en": "Full coverage: basic, generalized, and infinite pigeonhole with competition examples.",
       "ru": "Полный охват: простой, обобщённый и бесконечный принцип Дирихле с олимпиадными примерами.",
       "uz": "Toʻliq qamrov: oddiy, umumlashgan va cheksiz Dirixle prinsipi, musobaqa misollari bilan."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Pigeonhole_Principle",
      "price": "free",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "Problem Solving Strategies — Arthur Engel",
      "desc": {
       "en": "Chapter 11 is entirely pigeonhole principle with dozens of competition problems.",
       "ru": "Глава 11 целиком посвящена принципу Дирихле; десятки олимпиадных задач.",
       "uz": "11-bob butunlay Dirixle prinsipiga bagʻishlangan, oʻnlab musobaqa masalasi bilan."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "Intermediate Counting & Probability — AoPS",
      "desc": {
       "en": "Dedicated chapter on pigeonhole principle with competition problems.",
       "ru": "Отдельная глава о принципе Дирихле с олимпиадными задачами.",
       "uz": "Dirixle prinsipiga bagʻishlangan alohida bob, musobaqa masalalari bilan."
      },
      "url": "https://artofproblemsolving.com/store/book/intermediate-counting",
      "price": "paid",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Ramsey Theory (intro)",
      "desc": {
       "en": "Introduction to Ramsey theory which builds on pigeonhole.",
       "ru": "Введение в теорию Рамсея, выросшую из принципа Дирихле.",
       "uz": "Dirixle prinsipiga tayanadigan Ramsey nazariyasiga kirish."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Ramsey_theory",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "video",
    "cards": [
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Pigeonhole",
      "desc": {
       "en": "Competition pigeonhole videos with worked olympiad problems.",
       "ru": "Олимпиадные видео о принципе Дирихле с разобранными задачами.",
       "uz": "Dirixle prinsipi boʻyicha musobaqa videolari, tahlil qilingan olimpiada masalalari bilan."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "3Blue1Brown — Pigeonhole Applications",
      "desc": {
       "en": "Visual explanations of pigeonhole and its surprising consequences.",
       "ru": "Наглядные объяснения принципа Дирихле и его неожиданных следствий.",
       "uz": "Dirixle prinsipi va uning kutilmagan natijalarining koʻrgazmali tushuntirishi."
      },
      "url": "https://www.youtube.com/@3blue1brown",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Numberphile — Pigeonhole Principle",
      "desc": {
       "en": "Fun exploration of what pigeonhole proves and its surprising uses.",
       "ru": "Увлекательный разбор того, что доказывает принцип Дирихле и где он применяется.",
       "uz": "Dirixle prinsipi nimani isbotlashi va qayerda kutilmaganda ishlashi haqida."
      },
      "url": "https://www.youtube.com/@numberphile",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "MathOlympiad — Pigeonhole Problems",
      "desc": {
       "en": "Olympiad problems with explanation of how to find the right partition.",
       "ru": "Олимпиадные задачи с объяснением, как подобрать правильное разбиение.",
       "uz": "Olimpiada masalalari, toʻgʻri boʻlinishni qanday topish tushuntirilgan holda."
      },
      "url": "https://www.youtube.com/@mathsolympiad",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "pdf",
    "cards": [
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Pigeonhole Principle Handout — AoPS (FREE)",
      "desc": {
       "en": "30+ pigeonhole problems from AMC to olympiad level with solutions.",
       "ru": "Более 30 задач на принцип Дирихле — от AMC до олимпиадного уровня — с решениями.",
       "uz": "AMC dan olimpiada darajasigacha 30 dan ortiq Dirixle masalasi, yechimlari bilan."
      },
      "url": "https://artofproblemsolving.com/community/c6h123",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Mathnet.uz — Kombinatorika (pigeonhole)",
      "desc": {
       "en": "Pigeonhole problems from Uzbekistan olympiad papers.",
       "ru": "Задачи на принцип Дирихле из вариантов олимпиады Узбекистана.",
       "uz": "Oʻzbekiston olimpiada variantlaridan Dirixle prinsipiga oid masalalar."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "IMO Shortlist — Combinatorics",
      "desc": {
       "en": "International olympiad combinatorics shortlist includes classic pigeonhole.",
       "ru": "В шорт-листе международной олимпиады по комбинаторике есть классический Дирихле.",
       "uz": "Xalqaro olimpiada kombinatorika shortlistida klassik Dirixle masalalari bor."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/IMO_Shortlist",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Challenging Problems — Yaglom",
      "desc": {
       "en": "Classic Soviet book with excellent combinatorics including pigeonhole.",
       "ru": "Классическая советская книга с отличной комбинаторикой, включая принцип Дирихле.",
       "uz": "Klassik sovet kitobi, kombinatorika va Dirixle prinsipi boʻyicha aʼlo masalalar bilan."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": false
     }
    ]
   },
   {
    "id": "online",
    "cards": [
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Brilliant.org — Pigeonhole Principle",
      "desc": {
       "en": "Interactive pigeonhole course with guided problem solving.",
       "ru": "Интерактивный курс о принципе Дирихле с разбором задач.",
       "uz": "Yoʻnaltirilgan masala yechish bilan interaktiv Dirixle kursi."
      },
      "url": "https://brilliant.org/wiki/pigeonhole-principle/",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "AoPS — Pigeonhole Problems Archive",
      "desc": {
       "en": "All competition problems tagged with pigeonhole principle.",
       "ru": "Все олимпиадные задачи с меткой «принцип Дирихле».",
       "uz": "Dirixle prinsipi tegi qoʻyilgan barcha musobaqa masalalari."
      },
      "url": "https://artofproblemsolving.com/community/c6",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Cut the Knot — Pigeonhole",
      "desc": {
       "en": "Classical pigeonhole problems with detailed proofs.",
       "ru": "Классические задачи на принцип Дирихле с подробными доказательствами.",
       "uz": "Klassik Dirixle masalalari, batafsil isbotlari bilan."
      },
      "url": "https://www.cut-the-knot.org/do_you_know/Pigeonhole.shtml",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "NRICH — Pigeonhole Challenges",
      "desc": {
       "en": "Competition-quality pigeonhole problems for grades 7-12.",
       "ru": "Задачи на принцип Дирихле олимпиадного качества для 7–12 классов.",
       "uz": "7–12-sinflar uchun musobaqa sifatidagi Dirixle masalalari."
      },
      "url": "https://nrich.maths.org",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "uzbek",
    "cards": [
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "olympiad.maktab.uz",
      "desc": {
       "en": "Olympiad problems requiring pigeonhole from district to republic level.",
       "ru": "Олимпиадные задачи на принцип Дирихле — от районного до республиканского уровня.",
       "uz": "Tumandan respublikagacha Dirixle prinsipini talab qiladigan olimpiada masalalari."
      },
      "url": "https://olympiad.maktab.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Mathnet.uz",
      "desc": {
       "en": "Combinatorics and pigeonhole problems from official Uzbekistan guide.",
       "ru": "Задачи по комбинаторике и принципу Дирихле из официального руководства Узбекистана.",
       "uz": "Oʻzbekiston rasmiy qoʻllanmasidan kombinatorika va Dirixle masalalari."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Qiziqarli Matematika",
      "desc": {
       "en": "Classic Uzbek book with pigeonhole-type logical puzzles.",
       "ru": "Классическая узбекская книга с логическими задачами дирихлевского типа.",
       "uz": "Klassik oʻzbek kitobi, Dirixle turidagi mantiqiy boshqotirmalar bilan."
      },
      "url": "https://www.ziyouz.com",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "bilimlar.uz",
      "desc": {
       "en": "Uzbek olympiad materials including combinatorics for grades 7-8.",
       "ru": "Узбекские олимпиадные материалы, включая комбинаторику для 7–8 классов.",
       "uz": "7–8-sinflar uchun oʻzbek olimpiada materiallari, kombinatorika bilan."
      },
      "url": "https://bilimlar.uz",
      "price": "free",
      "star": false
     }
    ]
   }
  ]
 },
 {
  "n": 15,
  "title": {
   "en": "Logic & Proofs",
   "ru": "Логика, доказательства и инварианты",
   "uz": "Mantiq, isbotlar va invariantlar"
  },
  "cat": {
   "en": "Combinatorics",
   "ru": "Комбинаторика",
   "uz": "Kombinatorika"
  },
  "catKey": "comb",
  "color": "#5B4FC7",
  "tint": "#EDECFD",
  "tip": {
   "en": "Always start a proof by stating what you will prove. Label base case and inductive step clearly. For contradiction, write your assumption explicitly at the top.",
   "ru": "Начинайте доказательство с того, что именно вы собираетесь доказать. Чётко обозначайте базу и переход индукции. В доказательстве от противного явно выписывайте предположение в самом начале.",
   "uz": "Isbotni har doim nimani isbotlayotganingizni aytishdan boshlang. Bazani va induksiya qadamini aniq belgilang. Teskarisini faraz qilganda farazingizni eng boshida ochiq yozing."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "How to Prove It — Daniel Velleman",
      "desc": {
       "en": "Best introduction to proof writing: direct, contradiction, induction, quantifiers.",
       "ru": "Лучшее введение в написание доказательств: прямое, от противного, индукция, кванторы.",
       "uz": "Isbot yozishga eng yaxshi kirish: bevosita, teskarisini faraz qilish, induksiya, kvantorlar."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Mathematical Induction",
      "desc": {
       "en": "Full coverage of weak and strong induction with competition examples.",
       "ru": "Полный разбор обычной и сильной индукции с олимпиадными примерами.",
       "uz": "Kuchsiz va kuchli induksiyaning toʻliq bayoni, musobaqa misollari bilan."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematical_induction",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики",
       "uz": "🌐 Viki"
      },
      "title": "AoPS: Proof by Contradiction",
      "desc": {
       "en": "How contradiction works, classic examples, and competition applications.",
       "ru": "Как работает доказательство от противного, классические примеры и применения.",
       "uz": "Teskarisini faraz qilish qanday ishlaydi, klassik misollar va musobaqadagi tatbiqlari."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Proof_by_contradiction",
      "price": "free",
      "star": false
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "Art and Craft of Problem Solving — Zeitz",
      "desc": {
       "en": "Outstanding on proof strategies. Chapter on 'Supremacy of Strategy' is essential.",
       "ru": "Выдающаяся книга о стратегиях доказательства. Глава о выборе стратегии обязательна.",
       "uz": "Isbot strategiyalari boʻyicha ajoyib kitob. «Strategiyaning ustunligi» bobi shart."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": false
     }
    ]
   },
   {
    "id": "video",
    "cards": [
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Writing Proofs",
      "desc": {
       "en": "How to write clear, rigorous proofs for olympiad problems.",
       "ru": "Как писать ясные и строгие доказательства олимпиадных задач.",
       "uz": "Olimpiada masalalari uchun aniq va qatʼiy isbotni qanday yozish kerak."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "3Blue1Brown — Proofs and Mathematical Thinking",
      "desc": {
       "en": "Visualizing why proofs work. Builds mathematical intuition.",
       "ru": "Наглядное объяснение того, почему доказательства работают. Развивает интуицию.",
       "uz": "Isbotlar nima uchun ishlashini koʻrsatish. Matematik sezgini shakllantiradi."
      },
      "url": "https://www.youtube.com/@3blue1brown",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Michael Penn — Olympiad Proof Techniques",
      "desc": {
       "en": "Induction, contradiction, and contrapositive with clear examples.",
       "ru": "Индукция, доказательство от противного и контрапозиция с понятными примерами.",
       "uz": "Induksiya, teskarisini faraz qilish va kontrapozitsiya aniq misollar bilan."
      },
      "url": "https://www.youtube.com/@MichaelPennMath",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Numberphile — Mathematical Proofs",
      "desc": {
       "en": "Accessible explanations of famous proofs (infinite primes, √2 irrational).",
       "ru": "Доступные разборы знаменитых доказательств (бесконечность простых, иррациональность √2).",
       "uz": "Mashhur isbotlarning tushunarli bayoni (tub sonlar cheksizligi, √2 irratsionalligi)."
      },
      "url": "https://www.youtube.com/@numberphile",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "pdf",
    "cards": [
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Evan Chen — Introduction to Proofs (FREE)",
      "desc": {
       "en": "Free handout by top olympiad coach on proof writing.",
       "ru": "Бесплатный конспект ведущего олимпиадного тренера о написании доказательств.",
       "uz": "Yetakchi olimpiada murabbiyining isbot yozish boʻyicha bepul tarqatmasi."
      },
      "url": "https://web.evanchen.cc/olympiad.html",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Mathematical Induction Handout — AoPS (FREE)",
      "desc": {
       "en": "25+ induction problems from trivial to olympiad level.",
       "ru": "Более 25 задач на индукцию — от простейших до олимпиадного уровня.",
       "uz": "Eng oddiydan olimpiada darajasigacha 25 dan ortiq induksiya masalasi."
      },
      "url": "https://artofproblemsolving.com/community/c6h482",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Mathnet.uz — Isbot usullari",
      "desc": {
       "en": "Proof methods covered in Uzbekistan olympiad guide.",
       "ru": "Методы доказательства в руководстве по олимпиадам Узбекистана.",
       "uz": "Oʻzbekiston olimpiada qoʻllanmasida keltirilgan isbot usullari."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "IMO Problems and Proofs",
      "desc": {
       "en": "Full IMO problems with model solutions. Shows what a complete proof looks like.",
       "ru": "Полные задачи IMO с образцовыми решениями. Видно, как выглядит законченное доказательство.",
       "uz": "Toʻliq IMO masalalari namunaviy yechimlari bilan. Toʻliq isbot qanday boʻlishini koʻrsatadi."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/International_Mathematical_Olympiad",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "online",
    "cards": [
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "AoPS — Olympiad Proof Problems",
      "desc": {
       "en": "Competition problems requiring written proofs at every level.",
       "ru": "Олимпиадные задачи, требующие письменного доказательства, на всех уровнях.",
       "uz": "Har bir darajada yozma isbot talab qiladigan musobaqa masalalari."
      },
      "url": "https://artofproblemsolving.com/community",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Brilliant.org — Logic and Proofs",
      "desc": {
       "en": "Interactive introduction to logical thinking and formal proofs.",
       "ru": "Интерактивное введение в логическое мышление и формальные доказательства.",
       "uz": "Mantiqiy fikrlash va formal isbotlarga interaktiv kirish."
      },
      "url": "https://brilliant.org/courses/logic-and-proof/",
      "price": "paid",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Cut the Knot — Proofs",
      "desc": {
       "en": "Hundreds of beautiful mathematical proofs organized by topic.",
       "ru": "Сотни красивых математических доказательств, разложенных по темам.",
       "uz": "Mavzular boʻyicha tartiblangan yuzlab goʻzal matematik isbot."
      },
      "url": "https://www.cut-the-knot.org/proofs/index.shtml",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "NRICH — Proof Challenges",
      "desc": {
       "en": "Competition proof problems for grades 7-12.",
       "ru": "Задачи на доказательство олимпиадного качества для 7–12 классов.",
       "uz": "7–12-sinflar uchun isbotga asoslangan musobaqa masalalari."
      },
      "url": "https://nrich.maths.org",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "uzbek",
    "cards": [
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "olympiad.maktab.uz",
      "desc": {
       "en": "Proof-based problems in republic and international rounds.",
       "ru": "Задачи на доказательство в республиканских и международных турах.",
       "uz": "Respublika va xalqaro bosqichlardagi isbot talab qiladigan masalalar."
      },
      "url": "https://olympiad.maktab.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Mathnet.uz — Isbot va mantiq",
      "desc": {
       "en": "Proof and logic problems from official Uzbekistan math olympiad guide.",
       "ru": "Задачи на логику и доказательства из официального руководства по олимпиадам Узбекистана.",
       "uz": "Oʻzbekiston matematika olimpiadasi rasmiy qoʻllanmasidan isbot va mantiq masalalari."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Qiziqarli Matematika",
      "desc": {
       "en": "Logic puzzles and proof-based problems in Uzbek language.",
       "ru": "Логические головоломки и задачи на доказательство на узбекском языке.",
       "uz": "Oʻzbek tilidagi mantiqiy boshqotirmalar va isbotga asoslangan masalalar."
      },
      "url": "https://www.ziyouz.com",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "TASIMO — Proof-based Olympiad",
      "desc": {
       "en": "Tashkent International Math Olympiad requires full written proofs.",
       "ru": "Ташкентская международная олимпиада требует полных письменных доказательств.",
       "uz": "Toshkent xalqaro matematika olimpiadasi toʻliq yozma isbot talab qiladi."
      },
      "url": "https://imogeometry.blogspot.com",
      "price": "free",
      "star": false
     }
    ]
   }
  ]
 },
 {
  "n": 16,
  "title": {
   "en": "Mock Olympiad",
   "ru": "Пробная олимпиада",
   "uz": "Sinov olimpiadasi"
  },
  "cat": {
   "en": "Mixed Review",
   "ru": "Повторение",
   "uz": "Takrorlash"
  },
  "catKey": "mix",
  "color": "#8A6D1F",
  "tint": "#F7F0DE",
  "tip": {
   "en": "Simulate real exam conditions: phone away, 45 minutes timed. Read all problems first, then start with the one you're most confident about. Full solutions after time is up.",
   "ru": "Смоделируйте настоящий тур: телефон убран, время засечено. Сначала прочитайте все задачи, потом начинайте с той, в которой уверены больше всего. Решения — только после того, как время вышло.",
   "uz": "Haqiqiy imtihon sharoitini yarating: telefon uzoqda, vaqt 45 daqiqa. Avval barcha masalalarni oʻqing, keyin oʻzingiz eng ishonadiganidan boshlang. Toʻliq yechimlarni vaqt tugagach yozing."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "Problem Solving Strategies — Arthur Engel",
      "desc": {
       "en": "The definitive olympiad book. 700+ problems with strategies for all topics.",
       "ru": "Главная олимпиадная книга. Более 700 задач со стратегиями по всем темам.",
       "uz": "Olimpiada boʻyicha eng asosiy kitob. Barcha mavzular uchun strategiyalar va 700+ masala."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "Mathematical Olympiad in China (2007-2008)",
      "desc": {
       "en": "Outstanding collection covering all four areas with solutions.",
       "ru": "Выдающийся сборник по всем четырём разделам с решениями.",
       "uz": "Toʻrtala sohani qamrovchi ajoyib toʻplam, yechimlari bilan."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "Mathematical Circles (Russian Experience)",
      "desc": {
       "en": "Mixed problem book with great pedagogy. Used in Russian math circles at this level.",
       "ru": "Сборник смешанных задач с прекрасной методикой. Используется в математических кружках.",
       "uz": "Aralash masalalar kitobi, aʼlo metodikasi bilan. Rus matematika toʻgaraklarida ishlatiladi."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": false
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга",
       "uz": "📚 Kitob"
      },
      "title": "USSR Olympiad Problem Book — Shkliarsky",
      "desc": {
       "en": "Classic collection. Excellent for mixed practice at republic level.",
       "ru": "Классический сборник. Отлично подходит для смешанной практики республиканского уровня.",
       "uz": "Klassik toʻplam. Respublika darajasida aralash mashq uchun aʼlo."
      },
      "url": "https://www.abebooks.com/9780486277097",
      "price": "paid",
      "star": false
     }
    ]
   },
   {
    "id": "video",
    "cards": [
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Full Solutions",
      "desc": {
       "en": "AoPS YouTube has many full olympiad problem solution videos.",
       "ru": "На YouTube-канале AoPS много видеоразборов олимпиадных задач целиком.",
       "uz": "AoPS YouTube kanalida olimpiada masalalari yechimi boʻyicha koʻplab toʻliq video bor."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "3Blue1Brown — Problem Solving Shorts",
      "desc": {
       "en": "Visual approach to problem solving across all four topic areas.",
       "ru": "Наглядный подход к решению задач по всем четырём разделам.",
       "uz": "Toʻrtala mavzu boʻyicha masala yechishga koʻrgazmali yondashuv."
      },
      "url": "https://www.youtube.com/@3blue1brown",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Michael Penn — Mixed Olympiad Problems",
      "desc": {
       "en": "Olympiad-level solutions across number theory, algebra, and combinatorics.",
       "ru": "Решения олимпиадного уровня по теории чисел, алгебре и комбинаторике.",
       "uz": "Sonlar nazariyasi, algebra va kombinatorika boʻyicha olimpiada darajasidagi yechimlar."
      },
      "url": "https://www.youtube.com/@MichaelPennMath",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube",
       "uz": "▶ YouTube"
      },
      "title": "Po-Shen Loh — Math Olympiad Camp",
      "desc": {
       "en": "Full mixed olympiad training from the US IMO coach.",
       "ru": "Полный курс смешанной олимпиадной подготовки от тренера сборной США.",
       "uz": "AQSh IMO murabbiyidan toʻliq aralash olimpiada mashgʻulotlari."
      },
      "url": "https://www.youtube.com/@poshenloh",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "pdf",
    "cards": [
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Mathnet.uz — Full Uzbekistan Olympiad Guide (FREE)",
      "desc": {
       "en": "Complete guide: tuman, viloyat, respublika. All topics covered with solutions.",
       "ru": "Полное руководство: туман, вилоят, республика. Все темы с решениями.",
       "uz": "Toʻliq qoʻllanma: tuman, viloyat, respublika. Barcha mavzular yechimlari bilan."
      },
      "url": "https://mathnet.uz/Uploads/Resurs/5/8f3d6b15-a28c-44de-a194-87060d2e487b_.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "OlympiadUSA Grade 7-8 Past Exams (FREE)",
      "desc": {
       "en": "Full past exam papers with solutions.",
       "ru": "Полные варианты прошлых туров с решениями.",
       "uz": "Oʻtgan yillarning toʻliq imtihon variantlari, yechimlari bilan."
      },
      "url": "https://olympiadusa.org/wp-content/uploads/2025/02/january-grade-7-8-past-exams-questions-and-solutions-olympiadusa-org.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "Al-Xorazmiy 7-8 sinf papers (Scribd)",
      "desc": {
       "en": "Official Al-Xorazmiy olympiad papers. Mixed problems across all topics.",
       "ru": "Официальные варианты олимпиады Аль-Хорезми. Смешанные задачи по всем темам.",
       "uz": "Rasmiy Al-Xorazmiy olimpiadasi variantlari. Barcha mavzular boʻyicha aralash masalalar."
      },
      "url": "https://www.scribd.com/document/808101628",
      "price": "paid",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF",
       "uz": "📄 PDF"
      },
      "title": "IMO Problems Collection",
      "desc": {
       "en": "All IMO problems 1959-2003. Use as inspiration for republic+ level.",
       "ru": "Все задачи IMO с 1959 по 2003 год. Ориентир для республиканского уровня и выше.",
       "uz": "1959–2003-yillardagi barcha IMO masalalari. Respublika va undan yuqori daraja uchun ilhom."
      },
      "url": "https://www.scribd.com/document/356897836",
      "price": "paid",
      "star": false
     }
    ]
   },
   {
    "id": "online",
    "cards": [
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "AoPS — Problem Search by Competition",
      "desc": {
       "en": "Search by competition (AMC, AIME, USAMO, IMO) and topic.",
       "ru": "Поиск по соревнованию (AMC, AIME, USAMO, IMO) и по теме.",
       "uz": "Musobaqa (AMC, AIME, USAMO, IMO) va mavzu boʻyicha qidiring."
      },
      "url": "https://artofproblemsolving.com/community",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "Brilliant.org — Full Courses",
      "desc": {
       "en": "Complete olympiad preparation across all four topic areas.",
       "ru": "Полная подготовка к олимпиаде по всем четырём разделам.",
       "uz": "Toʻrtala mavzu boʻyicha olimpiadaga toʻliq tayyorgarlik."
      },
      "url": "https://brilliant.org",
      "price": "paid",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "NRICH — All Competitions",
      "desc": {
       "en": "Mixed competition problems from UKMT and other UK competitions.",
       "ru": "Смешанные задачи с UKMT и других британских соревнований.",
       "uz": "UKMT va boshqa britaniya musobaqalaridan aralash masalalar."
      },
      "url": "https://nrich.maths.org",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт",
       "uz": "🌍 Sayt"
      },
      "title": "matholymp.com — Tutorials",
      "desc": {
       "en": "Tutorials in elementary math for olympiad students covering all topics.",
       "ru": "Пособия по элементарной математике для олимпиадников по всем темам.",
       "uz": "Olimpiada oʻquvchilari uchun elementar matematika boʻyicha barcha mavzularni qamrovchi darsliklar."
      },
      "url": "https://matholymp.com",
      "price": "free",
      "star": false
     }
    ]
   },
   {
    "id": "uzbek",
    "cards": [
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "olympiad.maktab.uz — Barcha materiallar",
      "desc": {
       "en": "ALL Uzbekistan olympiad materials: Al-Xorazmiy, asosiy, nufuzli xalqaro.",
       "ru": "ВСЕ олимпиадные материалы Узбекистана: Аль-Хорезми, основная, международные.",
       "uz": "Oʻzbekiston olimpiadasining BARCHA materiallari: Al-Xorazmiy, asosiy, nufuzli xalqaro."
      },
      "url": "https://olympiad.maktab.uz/Site/OlympiadMaterials",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "Mathnet.uz — To'liq qo'llanma",
      "desc": {
       "en": "Complete Uzbekistan olympiad preparation guide from official ministry portal.",
       "ru": "Полное руководство по подготовке к олимпиадам Узбекистана с официального портала.",
       "uz": "Vazirlikning rasmiy portalidan Oʻzbekiston olimpiadasiga toʻliq tayyorgarlik qoʻllanmasi."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "AKHIMO — Al-Khorezmi International Olympiad",
      "desc": {
       "en": "International competition held in Uzbekistan. Past problems on website.",
       "ru": "Международное соревнование, проводимое в Узбекистане. Прошлые задачи на сайте.",
       "uz": "Oʻzbekistonda oʻtkaziladigan xalqaro musobaqa. Oʻtgan masalalar saytda."
      },
      "url": "https://akhimo.urdu.uz",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский",
       "uz": "🇺🇿 Oʻzbekcha"
      },
      "title": "TASIMO — Tashkent International Olympiad",
      "desc": {
       "en": "Tashkent-hosted international olympiad. Problems with solutions on AoPS.",
       "ru": "Международная олимпиада в Ташкенте. Задачи с решениями на AoPS.",
       "uz": "Toshkentda oʻtkaziladigan xalqaro olimpiada. Masalalar va yechimlar AoPS da."
      },
      "url": "https://imogeometry.blogspot.com/p/geometry-solved-problem-collections.html",
      "price": "free",
      "star": false
     }
    ]
   }
  ]
 }
];
