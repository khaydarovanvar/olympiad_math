/* Every topic of the Grades 7-11 olympiad library, with its resources.
   Titles, categories, tips, card labels and descriptions carry both
   languages; resource titles are proper names and stay as they are.
   Edit here and the home, library and topic pages all follow. */
var TOPICS = [
 {
  "n": 1,
  "title": {
   "en": "Divisibility & GCD/LCM",
   "ru": "Делимость, НОД и НОК"
  },
  "cat": {
   "en": "Number Theory",
   "ru": "Теория чисел"
  },
  "catKey": "nt",
  "color": "#1E6FB8",
  "tint": "#E8F1FA",
  "tip": {
   "en": "Start here. Divisibility is the foundation of all number theory. Master the Euclidean algorithm — it appears in at least one problem at every round of the Uzbekistan olympiad.",
   "ru": "Начните отсюда. Делимость — фундамент всей теории чисел. Освойте алгоритм Евклида: он встречается хотя бы в одной задаче на каждом туре олимпиады Узбекистана."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "Introduction to Number Theory — AoPS (Crawford)",
      "desc": {
       "en": "Covers GCD, LCM, divisibility and Euclidean algorithm with hundreds of practice problems.",
       "ru": "Охватывает НОД, НОК, делимость и алгоритм Евклида; сотни тренировочных задач."
      },
      "url": "https://artofproblemsolving.com/store/book/intro-number-theory",
      "price": "paid",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Olympiad Number Theory — Justin Stevens (FREE)",
      "desc": {
       "en": "Free 100-page PDF. Chapters 1-2 cover divisibility and GCD/LCM with competition examples.",
       "ru": "Бесплатный PDF на 100 страниц. Главы 1–2 — делимость и НОД/НОК с олимпиадными примерами."
      },
      "url": "https://s3.amazonaws.com/aops-cdn.artofproblemsolving.com/resources/articles/olympiad-number-theory.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Euclidean Algorithm",
      "desc": {
       "en": "Clear explanation with proofs, examples, and competition problem links.",
       "ru": "Ясное изложение с доказательствами, примерами и ссылками на олимпиадные задачи."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Euclidean_algorithm",
      "price": "free",
      "star": false
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: GCD and LCM",
      "desc": {
       "en": "Definitions, properties, theorems, and worked problems.",
       "ru": "Определения, свойства, теоремы и разобранные задачи."
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
       "ru": "▶ YouTube"
      },
      "title": "Khan Academy: GCD & LCM",
      "desc": {
       "en": "Step-by-step visual lessons on GCD and LCM. Great for beginners.",
       "ru": "Пошаговые наглядные уроки по НОД и НОК. Отлично для начинающих."
      },
      "url": "https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-factors-and-multiples",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Number Theory Basics",
      "desc": {
       "en": "AoPS covers divisibility rules, Euclidean algorithm, and GCD/LCM with olympiad examples.",
       "ru": "AoPS разбирает признаки делимости, алгоритм Евклида и НОД/НОК с олимпиадными примерами."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "3Blue1Brown: Why does Euclidean algorithm work?",
      "desc": {
       "en": "Beautiful visual explanation. Highly recommended for deeper understanding.",
       "ru": "Красивое наглядное объяснение. Настоятельно рекомендуем для глубокого понимания."
      },
      "url": "https://www.youtube.com/watch?v=Jwf6ncRmhPg",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "Numberphile — GCD and prime factorization",
      "desc": {
       "en": "Fun accessible exploration of GCD concepts.",
       "ru": "Увлекательный и доступный разбор идеи НОД."
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
       "ru": "📄 PDF"
      },
      "title": "Olympiad Number Theory (Justin Stevens)",
      "desc": {
       "en": "Pages 1-25 on divisibility and GCD/LCM with 50+ worked competition examples.",
       "ru": "Страницы 1–25: делимость и НОД/НОК, более 50 разобранных олимпиадных примеров."
      },
      "url": "https://s3.amazonaws.com/aops-cdn.artofproblemsolving.com/resources/articles/olympiad-number-theory.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Mathnet.uz — Official Uzbekistan Olympiad Guide",
      "desc": {
       "en": "Ministry PDF with GCD/LCM problems from Bukhara viloyat and republic rounds.",
       "ru": "Министерский PDF с задачами на НОД/НОК с областных и республиканских туров Бухары."
      },
      "url": "https://mathnet.uz/Uploads/Resurs/5/8f3d6b15-a28c-44de-a194-87060d2e487b_.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "OlympiadUSA — Grade 7-8 Past Papers",
      "desc": {
       "en": "Past exam papers including GCD/LCM problems at grade 7-8 level.",
       "ru": "Задачи прошлых туров, включая НОД/НОК на уровне 7–8 классов."
      },
      "url": "https://olympiadusa.org/wp-content/uploads/2025/02/january-grade-7-8-past-exams-questions-and-solutions-olympiadusa-org.pdf",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Evan Chen — MONT Handout",
      "desc": {
       "en": "Comprehensive free handout on number theory including divisibility.",
       "ru": "Подробный бесплатный конспект по теории чисел, включая делимость."
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
       "ru": "🌍 Сайт"
      },
      "title": "Brilliant.org — Number Theory Course",
      "desc": {
       "en": "Interactive lessons on GCD/LCM with auto-graded problems. Free tier available.",
       "ru": "Интерактивные уроки по НОД/НОК с автоматической проверкой. Есть бесплатный уровень."
      },
      "url": "https://brilliant.org/courses/number-theory/",
      "price": "paid",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "AoPS: Divisibility Rules Wiki",
      "desc": {
       "en": "Competition problems tagged GCD/LCM with community solutions.",
       "ru": "Олимпиадные задачи с меткой НОД/НОК и решениями сообщества."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Divisibility_rules",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "Cut the Knot — GCD Problems",
      "desc": {
       "en": "Classic math puzzle site with in-depth GCD/LCM explorations.",
       "ru": "Классический сайт математических головоломок с глубокими разборами НОД/НОК."
      },
      "url": "https://www.cut-the-knot.org/blue/GCD.shtml",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "NRICH — Divisibility Problems",
      "desc": {
       "en": "UK math enrichment with curated GCD/LCM competition problems.",
       "ru": "Британский проект с подборкой олимпиадных задач на НОД/НОК."
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
       "ru": "🇺🇿 Узбекский"
      },
      "title": "olympiad.maktab.uz — Al-Xorazmiy Materials",
      "desc": {
       "en": "Official Uzbekistan olympiad platform. Al-Xorazmiy district-round grade 7-8 papers.",
       "ru": "Официальная олимпиадная платформа Узбекистана. Районные туры Аль-Хорезми, 7–8 классы."
      },
      "url": "https://olympiad.maktab.uz/Site/OlympiadMaterials",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Mathnet.uz — Official Resource Portal",
      "desc": {
       "en": "Ministry of Higher Education portal with structured olympiad guides.",
       "ru": "Портал Министерства высшего образования со структурированными олимпиадными руководствами."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Qiziqarli Matematika (A.Yunusov) — ziyouz.com",
      "desc": {
       "en": "Classic Uzbek book with interesting math and olympiad problems including divisibility.",
       "ru": "Классическая узбекская книга с занимательными и олимпиадными задачами, включая делимость."
      },
      "url": "https://www.ziyouz.com/books/kollej_va_otm_darsliklari/matematika/Qiziqarli%20matematika%20va%20olimpiada%20masalalari%20(A.Yunusov%20va%20b.).pdf",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "info-master.uz — Al-Xorazmiy tests",
      "desc": {
       "en": "Online test platform with Al-Xorazmiy olympiad tests for 7-8 sinf by topic.",
       "ru": "Платформа онлайн-тестов с заданиями Аль-Хорезми для 7–8 классов по темам."
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
   "ru": "Простые числа"
  },
  "cat": {
   "en": "Number Theory",
   "ru": "Теория чисел"
  },
  "catKey": "nt",
  "color": "#1E6FB8",
  "tint": "#E8F1FA",
  "tip": {
   "en": "Prime factorization is used to count divisors, compute GCDs, and solve over a third of all number theory problems. Know how to factorize any number up to 1000 quickly.",
   "ru": "Разложение на простые множители нужно, чтобы считать делители, находить НОД и решать больше трети всех задач по теории чисел. Научитесь быстро раскладывать любое число до 1000."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "Introduction to Number Theory — AoPS",
      "desc": {
       "en": "Chapters on primes, fundamental theorem, and sieve with hundreds of graded problems.",
       "ru": "Главы о простых числах, основной теореме и решете; сотни задач по возрастанию сложности."
      },
      "url": "https://artofproblemsolving.com/store/book/intro-number-theory",
      "price": "paid",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Prime Factorization",
      "desc": {
       "en": "Unique factorization theorem, applications, and competition problem links.",
       "ru": "Теорема о единственности разложения, приложения и ссылки на олимпиадные задачи."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Prime_factorization",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Sieve of Eratosthenes",
      "desc": {
       "en": "Find all primes up to N efficiently with proof of correctness.",
       "ru": "Как быстро найти все простые до N, с доказательством корректности."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Sieve_of_Eratosthenes",
      "price": "free",
      "star": false
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "USSR Olympiad Problem Book — Shkliarsky",
      "desc": {
       "en": "Classic Soviet olympiad book with outstanding number theory and prime problems.",
       "ru": "Классический советский олимпиадный сборник с превосходными задачами о простых числах."
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
       "ru": "▶ YouTube"
      },
      "title": "3Blue1Brown — Why do primes make spirals?",
      "desc": {
       "en": "Stunning visual exploration of primes. Builds deep intuition.",
       "ru": "Впечатляющий наглядный разбор простых чисел. Развивает глубокую интуицию."
      },
      "url": "https://www.youtube.com/watch?v=EK32jo7i5LQ",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "Khan Academy: Prime Numbers & Factorization",
      "desc": {
       "en": "Beginner-to-intermediate series on prime factorization with applications.",
       "ru": "Курс от начального до среднего уровня о разложении на простые множители и его применениях."
      },
      "url": "https://www.khanacademy.org/math/pre-algebra/pre-algebra-factors-multiples",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "Numberphile — Mersenne Primes",
      "desc": {
       "en": "Fun videos about special primes. Great motivation for students.",
       "ru": "Увлекательные видео об особых простых числах. Отличная мотивация для учеников."
      },
      "url": "https://www.youtube.com/@numberphile",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Fundamental Theorem",
      "desc": {
       "en": "Olympiad-focused video on the Fundamental Theorem of Arithmetic.",
       "ru": "Олимпиадное видео об основной теореме арифметики."
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
       "ru": "📄 PDF"
      },
      "title": "Olympiad NT — Justin Stevens (FREE)",
      "desc": {
       "en": "Chapters on prime factorization with competition problems from AMC to IMO.",
       "ru": "Главы о разложении на множители с задачами от AMC до IMO."
      },
      "url": "https://s3.amazonaws.com/aops-cdn.artofproblemsolving.com/resources/articles/olympiad-number-theory.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Evan Chen — MONT Handout (FREE)",
      "desc": {
       "en": "Comprehensive free handout. Section on primes is rigorous and accessible.",
       "ru": "Подробный бесплатный конспект. Раздел о простых числах строгий и понятный."
      },
      "url": "https://web.evanchen.cc/handouts/MONT/MONT.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Mathnet.uz — Uzbekistan Olympiad Guide",
      "desc": {
       "en": "Republic and international olympiad problems including prime-related topics.",
       "ru": "Задачи республиканских и международных олимпиад, включая темы о простых числах."
      },
      "url": "https://mathnet.uz/Uploads/Resurs/5/8f3d6b15-a28c-44de-a194-87060d2e487b_.pdf",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "AMC 8 Past Papers — Prime sections",
      "desc": {
       "en": "AMC 8 is perfect for school-to-district level. Many problems involve primes.",
       "ru": "AMC 8 идеально подходит для школьного и районного уровня. Много задач о простых числах."
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
       "ru": "🌍 Сайт"
      },
      "title": "Prime Pages (primes.utm.edu)",
      "desc": {
       "en": "Ultimate reference on prime numbers: records, proofs, and primality tools.",
       "ru": "Исчерпывающий справочник о простых числах: рекорды, доказательства, инструменты проверки."
      },
      "url": "https://primes.utm.edu",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "Brilliant.org — Primes Course",
      "desc": {
       "en": "Interactive course with visual explanations of sieve and prime counting.",
       "ru": "Интерактивный курс с наглядным объяснением решета и подсчёта простых чисел."
      },
      "url": "https://brilliant.org/courses/number-theory/",
      "price": "paid",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "NRICH: Prime Number Challenges",
      "desc": {
       "en": "Curated competition-quality prime problems for ages 11-16.",
       "ru": "Отобранные олимпиадные задачи о простых числах для 11–16 лет."
      },
      "url": "https://nrich.maths.org",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "Project Euler (Problems 1-10)",
      "desc": {
       "en": "Computational prime problems. Good for programming-inclined students.",
       "ru": "Вычислительные задачи о простых числах. Хорошо для тех, кто программирует."
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
       "ru": "🇺🇿 Узбекский"
      },
      "title": "olympiad.maktab.uz — Respublika bosqichi",
      "desc": {
       "en": "Republic-level problems involving prime numbers from recent years.",
       "ru": "Задачи республиканского уровня о простых числах за последние годы."
      },
      "url": "https://olympiad.maktab.uz/Site/OlympiadMaterials",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Mathnet.uz — Sonlar Nazariyasi",
      "desc": {
       "en": "Official Uzbek math olympiad guide. Prime problems with solutions.",
       "ru": "Официальное руководство по олимпиадам Узбекистана. Задачи о простых числах с решениями."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "bilimlar.uz — Olimpiada savollari",
      "desc": {
       "en": "Grade 7-11 math olympiad problems organized by topic.",
       "ru": "Олимпиадные задачи по математике для 7–11 классов, разложенные по темам."
      },
      "url": "https://bilimlar.uz",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Scribd: Al-Xorazmiy 7-8 sinf papers",
      "desc": {
       "en": "Al-Xorazmiy olympiad papers. Search 'matematika Al-Xorazmiy' for current papers.",
       "ru": "Материалы олимпиады Аль-Хорезми. Ищите «matematika Al-Xorazmiy» для свежих вариантов."
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
   "ru": "Арифметика остатков"
  },
  "cat": {
   "en": "Number Theory",
   "ru": "Теория чисел"
  },
  "catKey": "nt",
  "color": "#1E6FB8",
  "tint": "#E8F1FA",
  "tip": {
   "en": "Knowing last-digit cycles (2,3,7,9 have period 4) instantly solves a huge class of olympiad problems. Modular arithmetic is essential for at least 2 problems in every Uzbekistan Republic-level paper.",
   "ru": "Знание циклов последних цифр (у 2, 3, 7 и 9 период равен 4) мгновенно решает целый класс олимпиадных задач. Остатки нужны как минимум для двух задач в каждом республиканском варианте."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Modular Arithmetic",
      "desc": {
       "en": "Complete reference: notation, properties, congruences, Fermat/Euler theorems.",
       "ru": "Полный справочник: обозначения, свойства, сравнения, теоремы Ферма и Эйлера."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Modular_arithmetic",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Fermat's Little Theorem",
      "desc": {
       "en": "Proof, statement, and many competition applications.",
       "ru": "Доказательство, формулировка и множество олимпиадных применений."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Fermat%27s_Little_Theorem",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Chinese Remainder Theorem",
      "desc": {
       "en": "Statement, proof, and worked competition examples of CRT.",
       "ru": "Формулировка, доказательство и разобранные олимпиадные примеры китайской теоремы об остатках."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Chinese_Remainder_Theorem",
      "price": "free",
      "star": false
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "Introduction to Number Theory — AoPS (Ch.5-8)",
      "desc": {
       "en": "Modular arithmetic chapters with hundreds of competition problems.",
       "ru": "Главы об арифметике остатков с сотнями олимпиадных задач."
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
       "ru": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Modular Arithmetic",
      "desc": {
       "en": "Full competition lesson on modular arithmetic including last digit tricks.",
       "ru": "Полноценный олимпиадный урок по остаткам, включая приёмы с последними цифрами."
      },
      "url": "https://www.youtube.com/watch?v=pLgM7N3UiJo",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "Khan Academy: Modular Arithmetic",
      "desc": {
       "en": "Clear beginner introduction with interactive exercises.",
       "ru": "Понятное введение для начинающих с интерактивными упражнениями."
      },
      "url": "https://www.khanacademy.org/computing/computer-science/cryptography",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "blackpenredpen — Last digit of large powers",
      "desc": {
       "en": "Fast clear videos on finding last digits of powers using cycles.",
       "ru": "Быстрые и ясные видео о нахождении последних цифр степеней через циклы."
      },
      "url": "https://www.youtube.com/@blackpenredpen",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "Michael Penn — Olympiad number theory",
      "desc": {
       "en": "University-level but clear videos on modular arithmetic applications.",
       "ru": "Университетский, но понятный курс видео о применениях арифметики остатков."
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
       "ru": "📄 PDF"
      },
      "title": "Evan Chen — MONT Handout (FREE)",
      "desc": {
       "en": "Modular arithmetic chapter is especially well-written for olympiad prep.",
       "ru": "Глава об остатках написана особенно удачно для подготовки к олимпиадам."
      },
      "url": "https://web.evanchen.cc/handouts/MONT/MONT.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Olympiad NT — Justin Stevens (FREE)",
      "desc": {
       "en": "Dedicated modular arithmetic chapter with Wilson's theorem and CRT.",
       "ru": "Отдельная глава об остатках с теоремой Вильсона и китайской теоремой об остатках."
      },
      "url": "https://s3.amazonaws.com/aops-cdn.artofproblemsolving.com/resources/articles/olympiad-number-theory.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Mathnet.uz — Uzbekistan Olympiad Guide",
      "desc": {
       "en": "Republic-level problems involving modular arithmetic with solutions.",
       "ru": "Задачи республиканского уровня на остатки с решениями."
      },
      "url": "https://mathnet.uz/Uploads/Resurs/5/8f3d6b15-a28c-44de-a194-87060d2e487b_.pdf",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "AMC/AIME past papers — Number Theory",
      "desc": {
       "en": "Many AIME problems involve modular arithmetic at district-to-regional level.",
       "ru": "Многие задачи AIME используют остатки на районном и областном уровне."
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
       "ru": "🌍 Сайт"
      },
      "title": "Brilliant.org — Modular Arithmetic",
      "desc": {
       "en": "Interactive lessons from basics to CRT with visual representations.",
       "ru": "Интерактивные уроки от основ до китайской теоремы об остатках, с наглядными схемами."
      },
      "url": "https://brilliant.org/wiki/modular-arithmetic/",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "AoPS Forum — Modular Arithmetic",
      "desc": {
       "en": "Hundreds of tagged competition problems with community explanations.",
       "ru": "Сотни олимпиадных задач с метками и объяснениями сообщества."
      },
      "url": "https://artofproblemsolving.com/community/c3h118n",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "Cut the Knot — Modular Arithmetic",
      "desc": {
       "en": "Deep explorations including Fermat's Little Theorem applications.",
       "ru": "Глубокие разборы, включая применения малой теоремы Ферма."
      },
      "url": "https://www.cut-the-knot.org/blue/Modulo.shtml",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "UKMT Junior Math Challenge",
      "desc": {
       "en": "UK Junior challenges have excellent modular arithmetic problems.",
       "ru": "В британских юниорских турах отличные задачи на остатки."
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
       "ru": "🇺🇿 Узбекский"
      },
      "title": "olympiad.maktab.uz — Matematika 7-8",
      "desc": {
       "en": "Filter by matematika + 7-8 sinf for modular-type problems from all rounds.",
       "ru": "Отфильтруйте по «matematika» и 7–8 классам, чтобы найти задачи на остатки со всех туров."
      },
      "url": "https://olympiad.maktab.uz/Site/OlympiadMaterials",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Mathnet.uz — Sonlar Nazariyasi",
      "desc": {
       "en": "Modular arithmetic problems in the number theory section.",
       "ru": "Задачи на остатки в разделе теории чисел."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Fizika, Matematika va Informatika journal",
      "desc": {
       "en": "Official journal publishing olympiad problems including modular arithmetic.",
       "ru": "Официальный журнал, публикующий олимпиадные задачи, в том числе на остатки."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "bilimlar.uz",
      "desc": {
       "en": "Uzbek-language olympiad problem sets organized by grade and topic.",
       "ru": "Олимпиадные задачи на узбекском, разложенные по классам и темам."
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
   "ru": "Диофантовы уравнения"
  },
  "cat": {
   "en": "Number Theory",
   "ru": "Теория чисел"
  },
  "catKey": "nt",
  "color": "#1E6FB8",
  "tint": "#E8F1FA",
  "tip": {
   "en": "Parity and mod arguments quickly eliminate impossible cases. The factoring trick (xy = x+y+k → (x-1)(y-1) = k+1) solves dozens of olympiad problems. Always try small cases first.",
   "ru": "Чётность и остатки быстро отсекают невозможные случаи. Приём с разложением ($xy=x+y+k$ превращается в $(x-1)(y-1)=k+1$) решает десятки олимпиадных задач. Всегда начинайте с малых случаев."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Diophantine Equations",
      "desc": {
       "en": "Overview of linear, quadratic, and complex Diophantine equations.",
       "ru": "Обзор линейных, квадратичных и более сложных диофантовых уравнений."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Diophantine_equation",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Simon's Favourite Factoring Trick",
      "desc": {
       "en": "The (x-a)(y-b)=c technique for 1/x+1/y=1/n and hundreds of similar problems.",
       "ru": "Приём $(x-a)(y-b)=c$ для $1/x+1/y=1/n$ и сотен похожих задач."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Simon%27s_Favorite_Factoring_Trick",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Olympiad NT — Justin Stevens (FREE)",
      "desc": {
       "en": "Dedicated Diophantine chapter including Pell's equation and parametric solutions.",
       "ru": "Отдельная глава о диофантовых уравнениях, включая уравнение Пелля и параметрические решения."
      },
      "url": "https://s3.amazonaws.com/aops-cdn.artofproblemsolving.com/resources/articles/olympiad-number-theory.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "Number Theory: Structures — Andreescu",
      "desc": {
       "en": "Full chapter on Diophantine equations from AMC to IMO level.",
       "ru": "Целая глава о диофантовых уравнениях — от уровня AMC до IMO."
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
       "ru": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Linear Diophantine",
      "desc": {
       "en": "How to solve ax+by=c — when solutions exist and finding the general solution.",
       "ru": "Как решать $ax+by=c$: когда решения есть и как найти общее решение."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "PatrickJMT — Diophantine Equations",
      "desc": {
       "en": "Clear step-by-step video on solving linear and quadratic Diophantine equations.",
       "ru": "Понятное пошаговое видео о линейных и квадратичных диофантовых уравнениях."
      },
      "url": "https://www.youtube.com/@patrickjmt",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "blackpenredpen — Pell's Equation",
      "desc": {
       "en": "Introduction to x²-Dy²=1 with olympiad examples.",
       "ru": "Введение в уравнение $x^2-Dy^2=1$ с олимпиадными примерами."
      },
      "url": "https://www.youtube.com/@blackpenredpen",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "MathDoctorBob — Number Theory",
      "desc": {
       "en": "Accessible videos on Diophantine equations with full proofs.",
       "ru": "Доступные видео о диофантовых уравнениях с полными доказательствами."
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
       "ru": "📄 PDF"
      },
      "title": "Evan Chen — MONT (FREE)",
      "desc": {
       "en": "Section on Diophantine equations is rigorous and well-structured.",
       "ru": "Раздел о диофантовых уравнениях строгий и хорошо выстроенный."
      },
      "url": "https://web.evanchen.cc/handouts/MONT/MONT.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Mathnet.uz — Uzbekistan Olympiad Guide",
      "desc": {
       "en": "Integer equation problems from Republic-level Uzbekistan olympiad.",
       "ru": "Задачи на уравнения в целых числах с республиканского тура Узбекистана."
      },
      "url": "https://mathnet.uz/Uploads/Resurs/5/8f3d6b15-a28c-44de-a194-87060d2e487b_.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "OlympiadUSA Past Papers",
      "desc": {
       "en": "Grade 7-8 past exams including integer equation problems.",
       "ru": "Задачи прошлых туров для 7–8 классов, включая уравнения в целых числах."
      },
      "url": "https://olympiadusa.org",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "IMO Problems Collection (Scribd)",
      "desc": {
       "en": "Classic international olympiad problems. Many feature Diophantine equations.",
       "ru": "Классические задачи международных олимпиад. Многие — на диофантовы уравнения."
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
       "ru": "🌍 Сайт"
      },
      "title": "AoPS: Diophantine Problem Archive",
      "desc": {
       "en": "Hundreds of tagged problems with community solutions.",
       "ru": "Сотни размеченных задач с решениями сообщества."
      },
      "url": "https://artofproblemsolving.com/community",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "Brilliant.org — Diophantine Equations",
      "desc": {
       "en": "Interactive problems on linear and Pythagorean Diophantine equations.",
       "ru": "Интерактивные задачи на линейные и пифагоровы диофантовы уравнения."
      },
      "url": "https://brilliant.org/wiki/diophantine-equations-linear/",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "Cut the Knot — Integer Solutions",
      "desc": {
       "en": "Classic explorations of integer equations, Pythagorean triples, and Pell.",
       "ru": "Классические разборы уравнений в целых числах, пифагоровых троек и уравнения Пелля."
      },
      "url": "https://www.cut-the-knot.org/do_you_know/Pell.shtml",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "NRICH — Diophantine Challenges",
      "desc": {
       "en": "Competition-quality integer equation problems for junior olympiad level.",
       "ru": "Задачи олимпиадного качества на уравнения в целых числах для младших классов."
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
       "ru": "🇺🇿 Узбекский"
      },
      "title": "olympiad.maktab.uz — Respublika bosqichi",
      "desc": {
       "en": "Republic-level papers often include a Diophantine-type problem.",
       "ru": "В республиканских вариантах часто встречается задача диофантова типа."
      },
      "url": "https://olympiad.maktab.uz/Site/OlympiadMaterials",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Mathnet.uz — Algebra section",
      "desc": {
       "en": "Integer equation problems from viloyat and republic rounds.",
       "ru": "Задачи на уравнения в целых числах с областных и республиканских туров."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Ziyouz.com — Mathematics Library",
      "desc": {
       "en": "Uzbek-language math books including number theory problem collections.",
       "ru": "Книги по математике на узбекском, включая сборники задач по теории чисел."
      },
      "url": "https://www.ziyouz.com/books/kollej_va_otm_darsliklari/matematika/",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "TASIMO — Tashkent International Math Olympiad",
      "desc": {
       "en": "Past TASIMO papers include Diophantine-type problems at advanced level.",
       "ru": "Прошлые варианты TASIMO содержат диофантовы задачи повышенного уровня."
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
   "ru": "Тождества и разложение на множители"
  },
  "cat": {
   "en": "Algebra",
   "ru": "Алгебра"
  },
  "catKey": "alg",
  "color": "#0F7A5E",
  "tint": "#E3F5EE",
  "tip": {
   "en": "Sophie Germain identity (a⁴+4b⁴) appears in multiple olympiads every year. Memorize the top 10 identities and practice recognizing when to apply each one.",
   "ru": "Тождество Софи Жермен ($a^4+4b^4$) встречается на нескольких олимпиадах каждый год. Выучите десяток главных тождеств и тренируйтесь узнавать, какое из них применить."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Algebraic Identities",
      "desc": {
       "en": "Complete list of key identities with proofs and competition examples.",
       "ru": "Полный список ключевых тождеств с доказательствами и олимпиадными примерами."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Algebraic_identity",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Sophie Germain Identity",
      "desc": {
       "en": "Statement, proof, and competition applications.",
       "ru": "Формулировка, доказательство и олимпиадные применения."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Sophie_Germain_Identity",
      "price": "free",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "Introduction to Algebra — AoPS (Rusczyk)",
      "desc": {
       "en": "Gold standard competition algebra textbook. All key identities and factoring.",
       "ru": "Эталонный учебник олимпиадной алгебры. Все ключевые тождества и разложения."
      },
      "url": "https://artofproblemsolving.com/store/book/intro-algebra",
      "price": "paid",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "Algebra — I.M. Gelfand",
      "desc": {
       "en": "Classic Soviet algebra book with beautiful explanations of identities.",
       "ru": "Классический советский учебник алгебры с прекрасными объяснениями тождеств."
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
       "ru": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Factoring",
      "desc": {
       "en": "Factoring higher-degree polynomials, Sophie Germain, sum/difference of cubes.",
       "ru": "Разложение многочленов высших степеней, тождество Софи Жермен, сумма и разность кубов."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "PatrickJMT — Factoring Polynomials",
      "desc": {
       "en": "Step-by-step factoring techniques applicable to olympiad algebra.",
       "ru": "Пошаговые приёмы разложения на множители, применимые в олимпиадной алгебре."
      },
      "url": "https://www.youtube.com/@patrickjmt",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "3Blue1Brown — Essence of Algebra",
      "desc": {
       "en": "Deep visual approach to why algebraic identities work.",
       "ru": "Глубокий наглядный подход к тому, почему работают алгебраические тождества."
      },
      "url": "https://www.youtube.com/@3blue1brown",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "Professor Leonard — Algebra Fundamentals",
      "desc": {
       "en": "Clear explanations of identities and their geometric interpretations.",
       "ru": "Ясные объяснения тождеств и их геометрического смысла."
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
       "ru": "📄 PDF"
      },
      "title": "Olympiad Algebra Book — Parvardi (AoPS)",
      "desc": {
       "en": "1220 polynomial and algebra problems for olympiad students.",
       "ru": "1220 задач по многочленам и алгебре для олимпиадников."
      },
      "url": "https://artofproblemsolving.com/community/c6h601134",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Mathnet.uz — Algebra problems",
      "desc": {
       "en": "Factoring and identity problems from viloyat and republic olympiad rounds.",
       "ru": "Задачи на разложение и тождества с областных и республиканских туров."
      },
      "url": "https://mathnet.uz/Uploads/Resurs/5/8f3d6b15-a28c-44de-a194-87060d2e487b_.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "OlympiadUSA Grade 7-8 past papers",
      "desc": {
       "en": "Algebra problems including factoring and identity application.",
       "ru": "Задачи по алгебре, включая разложение на множители и применение тождеств."
      },
      "url": "https://olympiadusa.org/wp-content/uploads/2025/02/january-grade-7-8-past-exams-questions-and-solutions-olympiadusa-org.pdf",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "AMC 8 and AMC 10 Past Papers",
      "desc": {
       "en": "Excellent source of identity and factoring problems at competition level.",
       "ru": "Отличный источник задач на тождества и разложение олимпиадного уровня."
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
       "ru": "🌍 Сайт"
      },
      "title": "Brilliant.org — Algebra Fundamentals",
      "desc": {
       "en": "Interactive algebra course: identities, factoring, olympiad problems.",
       "ru": "Интерактивный курс алгебры: тождества, разложение, олимпиадные задачи."
      },
      "url": "https://brilliant.org/courses/algebra-fundamentals/",
      "price": "paid",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "AoPS Community — Algebra Forum",
      "desc": {
       "en": "Thousands of algebra competition problems with multiple solution approaches.",
       "ru": "Тысячи олимпиадных задач по алгебре с несколькими способами решения."
      },
      "url": "https://artofproblemsolving.com/community/c5",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "Cut the Knot — Algebra Identities",
      "desc": {
       "en": "Deep explorations with visual proofs.",
       "ru": "Глубокие разборы с наглядными доказательствами."
      },
      "url": "https://www.cut-the-knot.org/arithmetic/algebra.shtml",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "NRICH — Algebraic Identities",
      "desc": {
       "en": "UK competition-quality algebra problems involving factoring.",
       "ru": "Британские задачи олимпиадного качества на разложение на множители."
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
       "ru": "🇺🇿 Узбекский"
      },
      "title": "olympiad.maktab.uz — Algebra topshiriqlari",
      "desc": {
       "en": "Al-Xorazmiy and main olympiad algebra problems for grades 7-8.",
       "ru": "Задачи по алгебре с Аль-Хорезми и основной олимпиады для 7–8 классов."
      },
      "url": "https://olympiad.maktab.uz/Site/OlympiadMaterials",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Mathnet.uz — Algebra bo'limi",
      "desc": {
       "en": "Algebra section of the official Uzbekistan olympiad guide with solutions.",
       "ru": "Раздел алгебры официального руководства по олимпиадам Узбекистана с решениями."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "diplomishlari.uz — Al-Xorazmiy tests",
      "desc": {
       "en": "Online test platform with 7-8 sinf algebra sections.",
       "ru": "Платформа онлайн-тестов с разделами алгебры для 7–8 классов."
      },
      "url": "https://diplomishlari.uz",
      "price": "paid",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Ziyouz.com — Algebra kitoblari",
      "desc": {
       "en": "Uzbek algebra textbooks and olympiad collections for free download.",
       "ru": "Узбекские учебники алгебры и олимпиадные сборники для свободного скачивания."
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
   "ru": "Неравенства"
  },
  "cat": {
   "en": "Algebra",
   "ru": "Алгебра"
  },
  "catKey": "alg",
  "color": "#0F7A5E",
  "tint": "#E3F5EE",
  "tip": {
   "en": "Always check the equality case — it confirms your AM-GM application is correct and tells you where the minimum/maximum is achieved. If equality can't be achieved, your bound may be wrong.",
   "ru": "Всегда проверяйте случай равенства — он подтверждает, что AM–GM применено верно, и показывает, где достигается минимум или максимум. Если равенство недостижимо, оценка, скорее всего, неточна."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: AM-GM Inequality",
      "desc": {
       "en": "Full proof, when equality holds, and 50+ competition applications.",
       "ru": "Полное доказательство, случай равенства и более 50 олимпиадных применений."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/AM-GM_Inequality",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Cauchy-Schwarz Inequality",
      "desc": {
       "en": "Statement, proof, and competition applications.",
       "ru": "Формулировка, доказательство и олимпиадные применения."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Cauchy-Schwarz_Inequality",
      "price": "free",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "Secrets in Inequalities Vol.1 — Pham Kim Hung",
      "desc": {
       "en": "The classic olympiad inequalities book. Covers AM-GM and Cauchy-Schwarz.",
       "ru": "Классическая книга об олимпиадных неравенствах. Разбирает AM–GM и Коши–Буняковского."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "Old and New Inequalities — Andreescu",
      "desc": {
       "en": "Competition inequality book widely used for olympiad preparation.",
       "ru": "Сборник по неравенствам, широко используемый при подготовке к олимпиадам."
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
       "ru": "▶ YouTube"
      },
      "title": "Art of Problem Solving — AM-GM and Cauchy",
      "desc": {
       "en": "Competition-focused explanations of the two most important inequality tools.",
       "ru": "Олимпиадные объяснения двух главных инструментов работы с неравенствами."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "Michael Penn — Olympiad Inequalities",
      "desc": {
       "en": "Clear videos on AM-GM, Cauchy-Schwarz with competition examples.",
       "ru": "Понятные видео об AM–GM и Коши–Буняковском с олимпиадными примерами."
      },
      "url": "https://www.youtube.com/@MichaelPennMath",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "3Blue1Brown — AM-GM Geometric Proof",
      "desc": {
       "en": "Beautiful visual proof of AM-GM using areas.",
       "ru": "Красивое наглядное доказательство AM–GM через площади."
      },
      "url": "https://www.youtube.com/@3blue1brown",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "Po-Shen Loh — Inequalities Lecture",
      "desc": {
       "en": "CMU/IMO coach lectures on inequality techniques. Advanced but inspiring.",
       "ru": "Лекции тренера сборной по приёмам работы с неравенствами. Сложно, но вдохновляет."
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
       "ru": "📄 PDF"
      },
      "title": "Evan Chen — Olympiad Inequalities Notes (FREE)",
      "desc": {
       "en": "Free notes on inequalities: AM-GM to rearrangement.",
       "ru": "Бесплатный конспект по неравенствам: от AM–GM до перестановочного."
      },
      "url": "https://web.evanchen.cc/olympiad.html",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Inequalities Olympiad Approach — Handout",
      "desc": {
       "en": "Free handout covering AM-GM, Cauchy-Schwarz, Jensen, and SOS.",
       "ru": "Бесплатный конспект: AM–GM, Коши–Буняковский, неравенство Йенсена и метод SOS."
      },
      "url": "https://artofproblemsolving.com/community/c6h27244",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Mathnet.uz — Tengsizliklar",
      "desc": {
       "en": "Uzbekistan olympiad guide section on inequalities with viloyat/republic problems.",
       "ru": "Раздел о неравенствах в руководстве по олимпиадам Узбекистана с задачами всех туров."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "OlympiadUSA Past Papers — Algebra",
      "desc": {
       "en": "Inequality problems from junior olympiad at grade 7-8 level.",
       "ru": "Задачи на неравенства с юниорской олимпиады уровня 7–8 классов."
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
       "ru": "🌍 Сайт"
      },
      "title": "AoPS: Inequalities Forum",
      "desc": {
       "en": "Huge archive of competition inequality problems with solutions.",
       "ru": "Огромный архив олимпиадных задач на неравенства с решениями."
      },
      "url": "https://artofproblemsolving.com/community/c5h3",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "Brilliant.org — Inequalities",
      "desc": {
       "en": "Interactive inequality problems from basics to olympiad level.",
       "ru": "Интерактивные задачи на неравенства от основ до олимпиадного уровня."
      },
      "url": "https://brilliant.org/wiki/am-gm-inequality/",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "Cut the Knot — Inequalities",
      "desc": {
       "en": "Mathematical explorations with visual proofs.",
       "ru": "Математические разборы с наглядными доказательствами."
      },
      "url": "https://www.cut-the-knot.org/do_you_know/amgm.shtml",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "NRICH — Inequality Challenges",
      "desc": {
       "en": "Competition-quality inequality problems for grades 7-10.",
       "ru": "Задачи на неравенства олимпиадного качества для 7–10 классов."
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
       "ru": "🇺🇿 Узбекский"
      },
      "title": "olympiad.maktab.uz",
      "desc": {
       "en": "Inequality problems in algebra sections of all olympiad levels.",
       "ru": "Задачи на неравенства в разделах алгебры на всех уровнях олимпиады."
      },
      "url": "https://olympiad.maktab.uz/Site/OlympiadMaterials",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Mathnet.uz — Tengsizliklar bo'limi",
      "desc": {
       "en": "Official inequality problems from Uzbekistan olympiad with solutions.",
       "ru": "Официальные задачи на неравенства с олимпиад Узбекистана с решениями."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Fizika, Matematika va Informatika journal",
      "desc": {
       "en": "Regular problems including inequalities in this official journal.",
       "ru": "Регулярные задачи, включая неравенства, в этом официальном журнале."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Ziyouz.com",
      "desc": {
       "en": "Uzbek-language olympiad problems including inequality problems.",
       "ru": "Олимпиадные задачи на узбекском, включая задачи на неравенства."
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
   "ru": "Последовательности и суммы"
  },
  "cat": {
   "en": "Algebra",
   "ru": "Алгебра"
  },
  "catKey": "alg",
  "color": "#0F7A5E",
  "tint": "#E3F5EE",
  "tip": {
   "en": "Telescoping is the most powerful series trick for olympiads. When you see a sum, always ask: can I write each term as f(n+1) − f(n)?",
   "ru": "Телескопирование — самый сильный приём для сумм на олимпиадах. Увидев сумму, всегда спрашивайте себя: можно ли записать каждое слагаемое как $f(n+1)-f(n)$?"
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Arithmetic Sequences",
      "desc": {
       "en": "Full treatment with competition problems and proof techniques.",
       "ru": "Полное изложение с олимпиадными задачами и приёмами доказательства."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Arithmetic_sequence",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Telescoping Series",
      "desc": {
       "en": "The telescoping technique explained with many worked examples.",
       "ru": "Приём телескопирования с большим числом разобранных примеров."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Telescoping_series",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Geometric Sequences",
      "desc": {
       "en": "Geometric sequences, infinite sums, and competition applications.",
       "ru": "Геометрические прогрессии, бесконечные суммы и олимпиадные применения."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Geometric_sequence",
      "price": "free",
      "star": false
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "Introduction to Algebra — AoPS",
      "desc": {
       "en": "Covers sequences, series, and recursive formulas at competition level.",
       "ru": "Последовательности, ряды и рекуррентные формулы олимпиадного уровня."
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
       "ru": "▶ YouTube"
      },
      "title": "Khan Academy — Sequences and Series",
      "desc": {
       "en": "Complete video course on arithmetic and geometric sequences.",
       "ru": "Полный видеокурс об арифметических и геометрических прогрессиях."
      },
      "url": "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:sequences",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "3Blue1Brown — Essence of Sequences",
      "desc": {
       "en": "Visual exploration of convergence and geometric series.",
       "ru": "Наглядный разбор сходимости и геометрических рядов."
      },
      "url": "https://www.youtube.com/@3blue1brown",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "PatrickJMT — Telescoping Sums",
      "desc": {
       "en": "Clear step-by-step video on evaluating telescoping sums.",
       "ru": "Понятное пошаговое видео о вычислении телескопических сумм."
      },
      "url": "https://www.youtube.com/@patrickjmt",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Sequences",
      "desc": {
       "en": "How sequences appear in math olympiads with competition examples.",
       "ru": "Как последовательности появляются на олимпиадах, с примерами задач."
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
       "ru": "📄 PDF"
      },
      "title": "Qiziqarli Matematika — Yunusov (Uzbek, FREE)",
      "desc": {
       "en": "Uzbek-language book with interesting problems including number sequences.",
       "ru": "Книга на узбекском с занимательными задачами, включая числовые последовательности."
      },
      "url": "https://www.ziyouz.com/books/kollej_va_otm_darsliklari/matematika/Qiziqarli%20matematika%20va%20olimpiada%20masalalari%20(A.Yunusov%20va%20b.).pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Mathnet.uz — Sequence problems",
      "desc": {
       "en": "Recursive and closed-form sequence problems from Uzbekistan olympiad rounds.",
       "ru": "Задачи на рекуррентные и явные формулы с туров олимпиады Узбекистана."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Fibonacci and Recursive Sequences — AoPS Handout",
      "desc": {
       "en": "Free handout on Fibonacci numbers, linear recurrences, and olympiad applications.",
       "ru": "Бесплатный конспект о числах Фибоначчи, линейных рекуррентах и их применениях."
      },
      "url": "https://artofproblemsolving.com/community/c5h482124",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "OlympiadUSA Grade 7-8 Past Exams",
      "desc": {
       "en": "Includes sequence and series problems at school-to-district level.",
       "ru": "Содержит задачи на последовательности и ряды школьного и районного уровня."
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
       "ru": "🌍 Сайт"
      },
      "title": "Brilliant.org — Sequences and Series",
      "desc": {
       "en": "Interactive course from arithmetic/geometric to recurrences.",
       "ru": "Интерактивный курс от арифметической и геометрической прогрессий до рекуррент."
      },
      "url": "https://brilliant.org/courses/sequences-and-series/",
      "price": "paid",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "OEIS — Online Encyclopedia of Integer Sequences",
      "desc": {
       "en": "Look up any integer sequence. Great for exploration and discovery.",
       "ru": "Поиск по любой целочисленной последовательности. Отлично для исследований."
      },
      "url": "https://oeis.org",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "AoPS — Sequence Problems",
      "desc": {
       "en": "Competition problems on sequences and series with community solutions.",
       "ru": "Олимпиадные задачи на последовательности и ряды с решениями сообщества."
      },
      "url": "https://artofproblemsolving.com/community/c5",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "Cut the Knot — Sequences",
      "desc": {
       "en": "Mathematical explorations of sequences including telescoping and recursive.",
       "ru": "Математические разборы последовательностей, включая телескопические и рекуррентные."
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
       "ru": "🇺🇿 Узбекский"
      },
      "title": "olympiad.maktab.uz",
      "desc": {
       "en": "Sequence and progression problems in Al-Xorazmiy and main olympiad papers.",
       "ru": "Задачи на последовательности и прогрессии в вариантах Аль-Хорезми и основной олимпиады."
      },
      "url": "https://olympiad.maktab.uz/Site/OlympiadMaterials",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Mathnet.uz",
      "desc": {
       "en": "Sequence problems from viloyat and Republic rounds with solutions.",
       "ru": "Задачи на последовательности с областных и республиканских туров с решениями."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "soff.uz — Matematika test 7-8 sinf",
      "desc": {
       "en": "Online math tests for grades 7-8 including algebra and sequence questions.",
       "ru": "Онлайн-тесты по математике для 7–8 классов, включая алгебру и последовательности."
      },
      "url": "https://soff.uz/product/algebra-matematika-test-7-8-sinf-uchun",
      "price": "paid",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Ziyouz.com — Math books",
      "desc": {
       "en": "Uzbek math books including chapters on progressions and sequences.",
       "ru": "Узбекские учебники с главами о прогрессиях и последовательностях."
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
   "ru": "Текстовые задачи и системы"
  },
  "cat": {
   "en": "Algebra",
   "ru": "Алгебра"
  },
  "catKey": "alg",
  "color": "#0F7A5E",
  "tint": "#E3F5EE",
  "tip": {
   "en": "Define variables clearly before writing any equation. For symmetric systems, introduce s=x+y and p=xy — this reduces many hard systems to a simple quadratic.",
   "ru": "Чётко определите переменные, прежде чем писать хоть одно уравнение. Для симметричных систем вводите $s=x+y$ и $p=xy$ — это сводит многие трудные системы к простому квадратному уравнению."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Systems of Equations",
      "desc": {
       "en": "Techniques for 2- and 3-variable systems including symmetric cases.",
       "ru": "Приёмы для систем с двумя и тремя переменными, включая симметричные случаи."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/System_of_equations",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Vieta's Formulas",
      "desc": {
       "en": "Key tool for symmetric systems using sum/product of roots.",
       "ru": "Ключевой инструмент для симметричных систем через сумму и произведение корней."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Vieta%27s_formulas",
      "price": "free",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "Introduction to Algebra — AoPS",
      "desc": {
       "en": "Comprehensive treatment of word problems, mixture/rate/time, and systems.",
       "ru": "Подробное изложение текстовых задач на смеси, скорость и время, а также систем."
      },
      "url": "https://artofproblemsolving.com/store/book/intro-algebra",
      "price": "paid",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "Art and Craft of Problem Solving — Zeitz",
      "desc": {
       "en": "Outstanding chapter on algebraic word problems and modeling.",
       "ru": "Выдающаяся глава об алгебраических текстовых задачах и составлении модели."
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
       "ru": "▶ YouTube"
      },
      "title": "Khan Academy — Systems of Equations",
      "desc": {
       "en": "Complete video course: substitution, elimination, graphing.",
       "ru": "Полный видеокурс: подстановка, сложение, графический способ."
      },
      "url": "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Word Problems",
      "desc": {
       "en": "How to set up and solve competition-style word problems.",
       "ru": "Как составлять и решать текстовые задачи олимпиадного типа."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "PatrickJMT — Nonlinear Systems",
      "desc": {
       "en": "Solving non-linear systems of equations step by step.",
       "ru": "Решение нелинейных систем уравнений шаг за шагом."
      },
      "url": "https://www.youtube.com/@patrickjmt",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "MathDoctorBob — Applied Algebra",
      "desc": {
       "en": "Word problem modeling and system-solving at competition level.",
       "ru": "Составление модели и решение систем на олимпиадном уровне."
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
       "ru": "📄 PDF"
      },
      "title": "OlympiadUSA Grade 7-8 Past Exams",
      "desc": {
       "en": "Word problems and systems at school-to-district level with solutions.",
       "ru": "Текстовые задачи и системы школьного и районного уровня с решениями."
      },
      "url": "https://olympiadusa.org/wp-content/uploads/2025/02/january-grade-7-8-past-exams-questions-and-solutions-olympiadusa-org.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Mathnet.uz — Algebra problems",
      "desc": {
       "en": "Word problems from viloyat and republic rounds involving systems.",
       "ru": "Текстовые задачи с областных и республиканских туров, сводящиеся к системам."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "AMC 8 Past Papers",
      "desc": {
       "en": "Great source of word problems at school-to-district olympiad level.",
       "ru": "Отличный источник текстовых задач школьного и районного олимпиадного уровня."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/AMC_8_Problems_and_Solutions",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Qiziqarli Matematika — Yunusov",
      "desc": {
       "en": "Uzbek book with word problems including mixture and rate problems.",
       "ru": "Узбекская книга с текстовыми задачами, включая задачи на смеси и движение."
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
       "ru": "🌍 Сайт"
      },
      "title": "Brilliant.org — Word Problems",
      "desc": {
       "en": "Interactive problems from basic to advanced, including systems and optimization.",
       "ru": "Интерактивные задачи от простых до сложных, включая системы и оптимизацию."
      },
      "url": "https://brilliant.org",
      "price": "paid",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "AoPS — Algebra Competition Problems",
      "desc": {
       "en": "Thousands of word problems and system problems from competition archives.",
       "ru": "Тысячи текстовых задач и задач на системы из олимпиадных архивов."
      },
      "url": "https://artofproblemsolving.com/community/c5",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "NRICH — Word Problems",
      "desc": {
       "en": "UK enrichment problems involving systems and mathematical modeling.",
       "ru": "Британские задачи на системы и математическое моделирование."
      },
      "url": "https://nrich.maths.org",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "MathOlymp.com",
      "desc": {
       "en": "Curated olympiad word problems searchable by topic and level.",
       "ru": "Отобранные олимпиадные текстовые задачи с поиском по теме и уровню."
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
       "ru": "🇺🇿 Узбекский"
      },
      "title": "olympiad.maktab.uz",
      "desc": {
       "en": "Word problems common at all levels. Filter by matematika 7-8 sinf.",
       "ru": "Текстовые задачи встречаются на всех уровнях. Фильтруйте по «matematika», 7–8 классы."
      },
      "url": "https://olympiad.maktab.uz/Site/OlympiadMaterials",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Mathnet.uz — Masalalar to'plami",
      "desc": {
       "en": "Problem collections from Uzbekistan olympiads organized by topic.",
       "ru": "Сборники задач с олимпиад Узбекистана, разложенные по темам."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "bilimlar.uz — Grade 7-8",
      "desc": {
       "en": "Uzbek-language problem sets for grades 7-8 including word problems.",
       "ru": "Наборы задач на узбекском для 7–8 классов, включая текстовые задачи."
      },
      "url": "https://bilimlar.uz",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "info-master.uz",
      "desc": {
       "en": "Uzbek math resources and tests including word problems.",
       "ru": "Узбекские материалы и тесты по математике, включая текстовые задачи."
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
   "ru": "Треугольники и равенство"
  },
  "cat": {
   "en": "Geometry",
   "ru": "Геометрия"
  },
  "catKey": "geo",
  "color": "#B0451F",
  "tint": "#FBEDE6",
  "tip": {
   "en": "Always draw a big, accurate diagram first. Label all known angles and sides. Most olympiad geometry proofs require adding one auxiliary construction — the right line changes everything.",
   "ru": "Сначала всегда рисуйте большой и аккуратный чертёж. Отметьте все известные углы и стороны. Большинство олимпиадных доказательств требует одного дополнительного построения — верная линия меняет всё."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "Geometry Revisited — Coxeter & Greitzer",
      "desc": {
       "en": "Classic olympiad geometry book. Chapters 1-2 cover triangles and similarity beautifully.",
       "ru": "Классическая книга по олимпиадной геометрии. Главы 1–2 прекрасно разбирают треугольники и подобие."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "Introduction to Geometry — AoPS",
      "desc": {
       "en": "Competition geometry textbook covering congruence, similarity, and special triangles.",
       "ru": "Учебник олимпиадной геометрии: равенство, подобие и особые треугольники."
      },
      "url": "https://artofproblemsolving.com/store/book/intro-geometry",
      "price": "paid",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Triangle Congruence and Similarity",
      "desc": {
       "en": "All criteria with proofs and competition examples.",
       "ru": "Все признаки с доказательствами и олимпиадными примерами."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Congruent_triangles",
      "price": "free",
      "star": false
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Cevian Lines",
      "desc": {
       "en": "Ceva's theorem, medians, altitudes, and angle bisectors.",
       "ru": "Теорема Чевы, медианы, высоты и биссектрисы."
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
       "ru": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Triangle Geometry",
      "desc": {
       "en": "Congruence, similarity, and special triangle constructions for competition.",
       "ru": "Равенство, подобие и особые построения в треугольнике для олимпиад."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "Khan Academy — Triangles and Congruence",
      "desc": {
       "en": "Complete beginner-to-intermediate course on triangle congruence and similarity.",
       "ru": "Полный курс от начального до среднего уровня о равенстве и подобии треугольников."
      },
      "url": "https://www.khanacademy.org/math/geometry/hs-geo-congruence",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "3Blue1Brown — Triangle Geometry",
      "desc": {
       "en": "Visual explorations of triangle properties.",
       "ru": "Наглядные разборы свойств треугольника."
      },
      "url": "https://www.youtube.com/@3blue1brown",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "Numberphile — Triangle Mysteries",
      "desc": {
       "en": "Fun videos on interesting triangle properties.",
       "ru": "Увлекательные видео о любопытных свойствах треугольников."
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
       "ru": "📄 PDF"
      },
      "title": "150 Nice Geometry Problems — Parvardi (FREE)",
      "desc": {
       "en": "150 competition geometry problems with solutions. Many triangle-focused.",
       "ru": "150 олимпиадных задач по геометрии с решениями. Многие — о треугольниках."
      },
      "url": "https://artofproblemsolving.com/community/c6h1116",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Evan Chen — EGMO (FREE book)",
      "desc": {
       "en": "Free book-length PDF. Triangle chapter is outstanding for olympiad prep.",
       "ru": "Бесплатный PDF размером с книгу. Глава о треугольниках выдающаяся."
      },
      "url": "https://web.evanchen.cc/geombook.html",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Mathnet.uz — Geometriya",
      "desc": {
       "en": "Uzbekistan olympiad geometry problems involving triangles with solutions.",
       "ru": "Задачи по геометрии треугольника с олимпиад Узбекистана с решениями."
      },
      "url": "https://mathnet.uz/Uploads/Resurs/5/8f3d6b15-a28c-44de-a194-87060d2e487b_.pdf",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "imogeometry.blogspot.com",
      "desc": {
       "en": "14,642 olympiad geometry problems with AoPS links.",
       "ru": "14 642 олимпиадные задачи по геометрии со ссылками на AoPS."
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
       "ru": "🌍 Сайт"
      },
      "title": "GeoGebra — Interactive Geometry",
      "desc": {
       "en": "Free dynamic geometry software. Draw any triangle construction and explore.",
       "ru": "Бесплатная динамическая геометрия. Постройте любую конструкцию и исследуйте её."
      },
      "url": "https://www.geogebra.org/geometry",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "AoPS — Geometry Forum",
      "desc": {
       "en": "Competition geometry problems with community solutions.",
       "ru": "Олимпиадные задачи по геометрии с решениями сообщества."
      },
      "url": "https://artofproblemsolving.com/community/c4",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "Brilliant.org — Geometry Fundamentals",
      "desc": {
       "en": "Interactive geometry course covering congruence, similarity, special triangles.",
       "ru": "Интерактивный курс геометрии: равенство, подобие, особые треугольники."
      },
      "url": "https://brilliant.org/courses/geometry-fundamentals/",
      "price": "paid",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "Cut the Knot — Triangle Problems",
      "desc": {
       "en": "Deep mathematical explorations with visual proofs.",
       "ru": "Глубокие математические разборы с наглядными доказательствами."
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
       "ru": "🇺🇿 Узбекский"
      },
      "title": "olympiad.maktab.uz — Geometriya",
      "desc": {
       "en": "Geometry problems from all levels for grades 7-8.",
       "ru": "Задачи по геометрии всех уровней для 7–8 классов."
      },
      "url": "https://olympiad.maktab.uz/Site/OlympiadMaterials",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Mathnet.uz — Geometriya bo'limi",
      "desc": {
       "en": "Triangle problems from viloyat and republic rounds with full solutions.",
       "ru": "Задачи о треугольниках с областных и республиканских туров с полными решениями."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "imogeometry — TASIMO problems",
      "desc": {
       "en": "TASIMO geometry problems with solutions. Advanced level.",
       "ru": "Задачи по геометрии TASIMO с решениями. Повышенный уровень."
      },
      "url": "https://imogeometry.blogspot.com",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Ziyouz.com — Geometriya kitoblari",
      "desc": {
       "en": "Uzbek geometry textbooks and supplementary problem collections.",
       "ru": "Узбекские учебники геометрии и дополнительные сборники задач."
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
   "ru": "Площади и метод площадей"
  },
  "cat": {
   "en": "Geometry",
   "ru": "Геометрия"
  },
  "catKey": "geo",
  "color": "#B0451F",
  "tint": "#FBEDE6",
  "tip": {
   "en": "Compute the same area in two different ways — this is one of the most powerful olympiad techniques across ALL topics, not just geometry.",
   "ru": "Посчитайте одну и ту же площадь двумя способами — это один из самых сильных олимпиадных приёмов во ВСЕХ темах, а не только в геометрии."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Pick's Theorem",
      "desc": {
       "en": "Statement, proof, and competition applications for lattice polygons.",
       "ru": "Формулировка, доказательство и олимпиадные применения для решётчатых многоугольников."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Pick%27s_Theorem",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Shoelace Theorem",
      "desc": {
       "en": "Computing polygon areas using vertex coordinates.",
       "ru": "Вычисление площади многоугольника по координатам вершин."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Shoelace_Theorem",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Heron's Formula",
      "desc": {
       "en": "Proof, applications, and competition problems.",
       "ru": "Доказательство, применения и олимпиадные задачи."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Heron%27s_formula",
      "price": "free",
      "star": false
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "Introduction to Geometry — AoPS",
      "desc": {
       "en": "Area section covers all formulas plus clever two-area tricks.",
       "ru": "Раздел о площадях: все формулы плюс приёмы подсчёта площади двумя способами."
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
       "ru": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Area Problems",
      "desc": {
       "en": "Competition-focused video on area methods, Heron's formula, and Pick's theorem.",
       "ru": "Олимпиадное видео о методе площадей, формуле Герона и формуле Пика."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "Khan Academy — Area and Perimeter",
      "desc": {
       "en": "Comprehensive area course from triangles to composite shapes.",
       "ru": "Подробный курс о площадях — от треугольников до составных фигур."
      },
      "url": "https://www.khanacademy.org/math/geometry/hs-geo-foundations",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "3Blue1Brown — Area and Geometry",
      "desc": {
       "en": "Visual explorations of area calculations.",
       "ru": "Наглядные разборы вычисления площадей."
      },
      "url": "https://www.youtube.com/@3blue1brown",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "MathOlympiad — Area Tricks",
      "desc": {
       "en": "Olympiad-specific area techniques including dissection and two-ways method.",
       "ru": "Олимпиадные приёмы работы с площадями, включая разрезания и метод двух подсчётов."
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
       "ru": "📄 PDF"
      },
      "title": "150 Geometry Problems — Parvardi (FREE)",
      "desc": {
       "en": "Many area-based competition problems with full solutions.",
       "ru": "Много олимпиадных задач на площади с полными решениями."
      },
      "url": "https://artofproblemsolving.com/community/c6h1116",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Evan Chen — EGMO (FREE)",
      "desc": {
       "en": "Full treatment of area methods in olympiad geometry.",
       "ru": "Полное изложение метода площадей в олимпиадной геометрии."
      },
      "url": "https://web.evanchen.cc/geombook.html",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Mathnet.uz — Area problems",
      "desc": {
       "en": "Area problems from Uzbekistan olympiad rounds with solutions.",
       "ru": "Задачи на площади с туров олимпиады Узбекистана с решениями."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "OlympiadUSA Past Papers",
      "desc": {
       "en": "Area problems at grade 7-8 level from past exams.",
       "ru": "Задачи на площади уровня 7–8 классов из прошлых туров."
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
       "ru": "🌍 Сайт"
      },
      "title": "GeoGebra — Area Explorer",
      "desc": {
       "en": "Interactive area calculations visually for any polygon.",
       "ru": "Наглядное интерактивное вычисление площади любого многоугольника."
      },
      "url": "https://www.geogebra.org",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "AoPS — Area Competition Problems",
      "desc": {
       "en": "Hundreds of area problems from competition archives.",
       "ru": "Сотни задач на площади из олимпиадных архивов."
      },
      "url": "https://artofproblemsolving.com/community/c4",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "Brilliant.org — Area & Perimeter",
      "desc": {
       "en": "Interactive lessons on area formulas in competitions.",
       "ru": "Интерактивные уроки о формулах площади в олимпиадных задачах."
      },
      "url": "https://brilliant.org/courses/geometry-fundamentals/",
      "price": "paid",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "NRICH — Area Puzzles",
      "desc": {
       "en": "Engaging area and dissection puzzles for grades 7-8.",
       "ru": "Увлекательные задачи на площади и разрезания для 7–8 классов."
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
       "ru": "🇺🇿 Узбекский"
      },
      "title": "olympiad.maktab.uz — Geometriya masalalari",
      "desc": {
       "en": "Area problems from viloyat and republic olympiad papers for grades 7-8.",
       "ru": "Задачи на площади с областных и республиканских туров для 7–8 классов."
      },
      "url": "https://olympiad.maktab.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Mathnet.uz",
      "desc": {
       "en": "Area and geometry problems from official Uzbekistan olympiad guide.",
       "ru": "Задачи на площади и геометрию из официального руководства по олимпиадам Узбекистана."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "bilimlar.uz",
      "desc": {
       "en": "Grade 7-8 geometry problems in Uzbek language.",
       "ru": "Задачи по геометрии для 7–8 классов на узбекском языке."
      },
      "url": "https://bilimlar.uz",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Ziyouz.com — Geometriya",
      "desc": {
       "en": "Uzbek geometry books and supplementary resources.",
       "ru": "Узбекские книги по геометрии и дополнительные материалы."
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
   "ru": "Окружности"
  },
  "cat": {
   "en": "Geometry",
   "ru": "Геометрия"
  },
  "catKey": "geo",
  "color": "#B0451F",
  "tint": "#FBEDE6",
  "tip": {
   "en": "Power of a Point is the single most powerful circle tool. When two chords, secants, or tangents interact at a point, write the power equation immediately.",
   "ru": "Степень точки — самый мощный инструмент работы с окружностями. Как только в одной точке встречаются хорды, секущие или касательные, сразу выписывайте равенство степеней."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Power of a Point",
      "desc": {
       "en": "Full treatment with proof, all three cases, and competition problems.",
       "ru": "Полное изложение с доказательством, разбором всех трёх случаев и олимпиадными задачами."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Power_of_a_Point_Theorem",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Inscribed Angle Theorem",
      "desc": {
       "en": "All angle theorems for circles: inscribed, central, tangent-chord.",
       "ru": "Все теоремы об углах окружности: вписанный, центральный, угол между касательной и хордой."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Inscribed_angle",
      "price": "free",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "Geometry Revisited — Coxeter & Greitzer",
      "desc": {
       "en": "Classic chapter on circles and cyclic quadrilaterals. Essential reading.",
       "ru": "Классическая глава об окружностях и вписанных четырёхугольниках. Обязательное чтение."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Cyclic Quadrilateral and Ptolemy",
      "desc": {
       "en": "Properties and Ptolemy's theorem with competition problems.",
       "ru": "Свойства и теорема Птолемея с олимпиадными задачами."
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
       "ru": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Circle Theorems",
      "desc": {
       "en": "Power of a point, inscribed angles, tangent properties with competition examples.",
       "ru": "Степень точки, вписанные углы и свойства касательной с олимпиадными примерами."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "Khan Academy — Circle Theorems",
      "desc": {
       "en": "Complete circle theorem course from central to inscribed quadrilaterals.",
       "ru": "Полный курс теорем об окружности — от центральных углов до вписанных четырёхугольников."
      },
      "url": "https://www.khanacademy.org/math/geometry/hs-geo-circles",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "3Blue1Brown — Circle Geometry",
      "desc": {
       "en": "Beautiful explorations of circle geometry and optimization.",
       "ru": "Красивые разборы геометрии окружности и задач на оптимизацию."
      },
      "url": "https://www.youtube.com/@3blue1brown",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "MathOlympiad — Circle Competition Problems",
      "desc": {
       "en": "Olympiad-level circle problems solved step by step.",
       "ru": "Олимпиадные задачи об окружностях, разобранные шаг за шагом."
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
       "ru": "📄 PDF"
      },
      "title": "Evan Chen — EGMO circle chapter (FREE)",
      "desc": {
       "en": "Comprehensive free book chapter on circle geometry for olympiads.",
       "ru": "Подробная бесплатная глава о геометрии окружности для олимпиад."
      },
      "url": "https://web.evanchen.cc/geombook.html",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "imogeometry — Circle problems",
      "desc": {
       "en": "Thousands of competition circle problems organized by topic.",
       "ru": "Тысячи олимпиадных задач об окружностях, разложенных по темам."
      },
      "url": "https://imogeometry.blogspot.com/p/geometry-solved-problem-collections.html",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Mathnet.uz — Aylana masalalari",
      "desc": {
       "en": "Circle problems from viloyat and republic olympiad papers.",
       "ru": "Задачи об окружностях с областных и республиканских туров."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "150 Geometry Problems — Parvardi",
      "desc": {
       "en": "Circle-focused competition problems with full solutions.",
       "ru": "Олимпиадные задачи об окружностях с полными решениями."
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
       "ru": "🌍 Сайт"
      },
      "title": "GeoGebra — Circle Theorems",
      "desc": {
       "en": "Interactive demonstrations. Drag points to see theorems hold dynamically.",
       "ru": "Интерактивные демонстрации. Двигайте точки и смотрите, как теоремы сохраняются."
      },
      "url": "https://www.geogebra.org",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "AoPS — Geometry/Circle Forum",
      "desc": {
       "en": "Competition circle problems with community solutions.",
       "ru": "Олимпиадные задачи об окружностях с решениями сообщества."
      },
      "url": "https://artofproblemsolving.com/community/c4",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "Brilliant.org — Circle Geometry",
      "desc": {
       "en": "Interactive course including power of a point.",
       "ru": "Интерактивный курс, включающий степень точки."
      },
      "url": "https://brilliant.org/courses/geometry-fundamentals/",
      "price": "paid",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "Cut the Knot — Circle Theorems",
      "desc": {
       "en": "Classical explorations of circle geometry with proofs.",
       "ru": "Классические разборы геометрии окружности с доказательствами."
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
       "ru": "🇺🇿 Узбекский"
      },
      "title": "olympiad.maktab.uz",
      "desc": {
       "en": "Circle geometry problems from all levels of Uzbekistan olympiad.",
       "ru": "Задачи о геометрии окружности со всех уровней олимпиады Узбекистана."
      },
      "url": "https://olympiad.maktab.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Mathnet.uz — Geometriya",
      "desc": {
       "en": "Circle problems from viloyat and republic rounds with solutions.",
       "ru": "Задачи об окружностях с областных и республиканских туров с решениями."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "imogeometry — TASIMO",
      "desc": {
       "en": "TASIMO competition problems include advanced circle geometry.",
       "ru": "Задачи TASIMO включают геометрию окружности повышенного уровня."
      },
      "url": "https://imogeometry.blogspot.com",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Ziyouz.com — Geometriya",
      "desc": {
       "en": "Uzbek-language geometry resources including circle theorems.",
       "ru": "Материалы по геометрии на узбекском, включая теоремы об окружности."
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
   "ru": "Координатный метод"
  },
  "cat": {
   "en": "Geometry",
   "ru": "Геометрия"
  },
  "catKey": "geo",
  "color": "#B0451F",
  "tint": "#FBEDE6",
  "tip": {
   "en": "Choose coordinates wisely — place one vertex at origin and one side along the x-axis. This eliminates variables and makes everything much cleaner.",
   "ru": "Выбирайте координаты с умом: поместите одну вершину в начало координат, а сторону — на ось абсцисс. Это убирает лишние переменные и делает выкладки заметно чище."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Coordinate Geometry",
      "desc": {
       "en": "Distance, midpoint, slope, line equations, and circle equations.",
       "ru": "Расстояние, середина, угловой коэффициент, уравнения прямой и окружности."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Coordinate_geometry",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Shoelace Theorem",
      "desc": {
       "en": "Computing polygon areas from vertex coordinates.",
       "ru": "Вычисление площади многоугольника по координатам его вершин."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Shoelace_Theorem",
      "price": "free",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "Introduction to Geometry — AoPS",
      "desc": {
       "en": "Coordinate geometry chapter at competition level.",
       "ru": "Глава о координатной геометрии олимпиадного уровня."
      },
      "url": "https://artofproblemsolving.com/store/book/intro-geometry",
      "price": "paid",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "Challenging Problems in Geometry — Posamentier",
      "desc": {
       "en": "Excellent problems including many requiring coordinate methods.",
       "ru": "Превосходные задачи, многие из которых требуют координатного метода."
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
       "ru": "▶ YouTube"
      },
      "title": "Khan Academy — Analytic Geometry",
      "desc": {
       "en": "Full coordinate geometry course: lines, distance, circles, conics.",
       "ru": "Полный курс координатной геометрии: прямые, расстояния, окружности, конические сечения."
      },
      "url": "https://www.khanacademy.org/math/geometry/hs-geo-analytic-geometry",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Coordinate Methods",
      "desc": {
       "en": "When and how to use coordinates in competition geometry.",
       "ru": "Когда и как применять координаты в олимпиадной геометрии."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "3Blue1Brown — Essence of Linear Algebra",
      "desc": {
       "en": "Deep geometric understanding of coordinates and transformations.",
       "ru": "Глубокое геометрическое понимание координат и преобразований."
      },
      "url": "https://www.youtube.com/@3blue1brown",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "PatrickJMT — Analytic Geometry",
      "desc": {
       "en": "Step-by-step coordinate geometry problems including circles and loci.",
       "ru": "Пошаговые задачи по координатной геометрии, включая окружности и геометрические места."
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
       "ru": "📄 PDF"
      },
      "title": "Evan Chen — EGMO coordinate chapter (FREE)",
      "desc": {
       "en": "When and how to use coordinates effectively in olympiads.",
       "ru": "Когда и как эффективно применять координаты на олимпиадах."
      },
      "url": "https://web.evanchen.cc/geombook.html",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Mathnet.uz — Koordinatalar",
      "desc": {
       "en": "Coordinate geometry problems from Uzbekistan olympiad rounds.",
       "ru": "Задачи по координатной геометрии с туров олимпиады Узбекистана."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "AMC 10/12 coordinate geometry problems",
      "desc": {
       "en": "AMC papers feature coordinate geometry at district-to-regional level.",
       "ru": "В вариантах AMC координатная геометрия встречается на районном и областном уровне."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/AMC_10_Problems_and_Solutions",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "OlympiadUSA Past Papers",
      "desc": {
       "en": "Coordinate geometry problems at grade 7-8 level.",
       "ru": "Задачи по координатной геометрии уровня 7–8 классов."
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
       "ru": "🌍 Сайт"
      },
      "title": "GeoGebra — Analytic Geometry",
      "desc": {
       "en": "Interactive coordinate geometry — plot points, lines, circles instantly.",
       "ru": "Интерактивная координатная геометрия: точки, прямые и окружности мгновенно."
      },
      "url": "https://www.geogebra.org",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "Desmos — Graphing Calculator",
      "desc": {
       "en": "Free online graphing calculator. Great for visualizing coordinate problems.",
       "ru": "Бесплатный онлайн-график. Отлично подходит для наглядных координатных задач."
      },
      "url": "https://www.desmos.com/calculator",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "AoPS — Coordinate Geometry Problems",
      "desc": {
       "en": "Competition problems using coordinate methods.",
       "ru": "Олимпиадные задачи, решаемые координатным методом."
      },
      "url": "https://artofproblemsolving.com/community/c4",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "Brilliant.org — Analytic Geometry",
      "desc": {
       "en": "Interactive coordinate geometry course.",
       "ru": "Интерактивный курс координатной геометрии."
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
       "ru": "🇺🇿 Узбекский"
      },
      "title": "olympiad.maktab.uz",
      "desc": {
       "en": "Coordinate geometry in the geometry sections of Uzbekistan papers.",
       "ru": "Координатная геометрия в геометрических разделах узбекских вариантов."
      },
      "url": "https://olympiad.maktab.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Mathnet.uz",
      "desc": {
       "en": "Coordinate geometry problems from official Uzbekistan olympiad guide.",
       "ru": "Задачи по координатной геометрии из официального руководства по олимпиадам Узбекистана."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "bilimlar.uz",
      "desc": {
       "en": "Grade 7-8 geometry including coordinate methods.",
       "ru": "Геометрия для 7–8 классов, включая координатные методы."
      },
      "url": "https://bilimlar.uz",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Ziyouz.com — Analitik geometriya",
      "desc": {
       "en": "Uzbek analytic geometry textbooks and supplementary materials.",
       "ru": "Узбекские учебники аналитической геометрии и дополнительные материалы."
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
   "ru": "Комбинаторика: как считать"
  },
  "cat": {
   "en": "Combinatorics",
   "ru": "Комбинаторика"
  },
  "catKey": "comb",
  "color": "#5B4FC7",
  "tint": "#EDECFD",
  "tip": {
   "en": "Overcounting + correcting often beats counting directly. Draw a Venn diagram before applying inclusion-exclusion. Stars and bars is your go-to for distributing identical objects.",
   "ru": "Посчитать с избытком и вычесть лишнее часто проще, чем считать напрямую. Перед формулой включений-исключений нарисуйте диаграмму. Шары и перегородки — главный приём для раздачи одинаковых предметов."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "Introduction to Counting & Probability — AoPS",
      "desc": {
       "en": "The best competition counting book. Permutations, combinations, inclusion-exclusion.",
       "ru": "Лучшая книга по олимпиадным подсчётам. Перестановки, сочетания, включения-исключения."
      },
      "url": "https://artofproblemsolving.com/store/book/intro-counting",
      "price": "paid",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Counting — Intro to Intermediate",
      "desc": {
       "en": "Multiplication/addition principles, permutations, combinations, Binomial theorem.",
       "ru": "Правила суммы и произведения, перестановки, сочетания, бином Ньютона."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Combinatorics/Olympiad",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Inclusion-Exclusion Principle",
      "desc": {
       "en": "Statement, proof, and competition applications.",
       "ru": "Формулировка, доказательство и олимпиадные применения."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Inclusion-Exclusion_Principle",
      "price": "free",
      "star": false
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "A Path to Combinatorics — Andreescu & Feng",
      "desc": {
       "en": "Excellent olympiad combinatorics book covering counting methods.",
       "ru": "Отличная книга по олимпиадной комбинаторике с обзором методов подсчёта."
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
       "ru": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Counting",
      "desc": {
       "en": "Multiplication principle, permutations, combinations, overcounting.",
       "ru": "Правило произведения, перестановки, сочетания и борьба с двойным счётом."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "Khan Academy — Counting and Combinatorics",
      "desc": {
       "en": "From basics to combinations and permutations with practice.",
       "ru": "От основ до сочетаний и перестановок, с тренировкой."
      },
      "url": "https://www.khanacademy.org/math/statistics-probability/counting-permutations-and-combinations",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "3Blue1Brown — How to Count",
      "desc": {
       "en": "Deep intuitive approach to combinatorial thinking.",
       "ru": "Глубокий интуитивный подход к комбинаторному мышлению."
      },
      "url": "https://www.youtube.com/@3blue1brown",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "Po-Shen Loh — Combinatorics Lecture",
      "desc": {
       "en": "Advanced but inspiring lecture by US IMO coach.",
       "ru": "Сложная, но вдохновляющая лекция тренера сборной США."
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
       "ru": "📄 PDF"
      },
      "title": "Mathnet.uz — Kombinatorika",
      "desc": {
       "en": "Combinatorics problems from Uzbekistan olympiad papers with solutions.",
       "ru": "Задачи по комбинаторике из вариантов олимпиады Узбекистана с решениями."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "AMC 8 and 10 Past Papers",
      "desc": {
       "en": "Excellent source of counting and probability problems at competition level.",
       "ru": "Отличный источник задач на подсчёты и вероятность олимпиадного уровня."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/AMC_8_Problems_and_Solutions",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Challenging Problems — Yaglom & Yaglom",
      "desc": {
       "en": "Classic Soviet book with outstanding combinatorics problems.",
       "ru": "Классическая советская книга с выдающимися задачами по комбинаторике."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "JMO 2025 Grade 7-8 Paper (Scribd)",
      "desc": {
       "en": "Junior Math Olympiad 2025 paper for grades 7-8 covering combinatorics.",
       "ru": "Вариант юниорской олимпиады 2025 года для 7–8 классов с задачами по комбинаторике."
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
       "ru": "🌍 Сайт"
      },
      "title": "Brilliant.org — Combinatorics",
      "desc": {
       "en": "Interactive counting course from basic principles to advanced techniques.",
       "ru": "Интерактивный курс подсчётов — от базовых правил до продвинутых приёмов."
      },
      "url": "https://brilliant.org/courses/counting/",
      "price": "paid",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "AoPS — Combinatorics Forum",
      "desc": {
       "en": "Thousands of competition counting problems with solutions.",
       "ru": "Тысячи олимпиадных задач на подсчёты с решениями."
      },
      "url": "https://artofproblemsolving.com/community/c6",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "NRICH — Combinatorics Challenges",
      "desc": {
       "en": "Competition-quality counting problems for grades 7-10.",
       "ru": "Задачи на подсчёты олимпиадного качества для 7–10 классов."
      },
      "url": "https://nrich.maths.org",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "Cut the Knot — Combinatorics",
      "desc": {
       "en": "Classical combinatorics problems with deep mathematical explanations.",
       "ru": "Классические комбинаторные задачи с глубокими математическими объяснениями."
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
       "ru": "🇺🇿 Узбекский"
      },
      "title": "olympiad.maktab.uz",
      "desc": {
       "en": "Combinatorics problems in Uzbekistan olympiad papers for grades 7-8.",
       "ru": "Задачи по комбинаторике в вариантах олимпиады Узбекистана для 7–8 классов."
      },
      "url": "https://olympiad.maktab.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Mathnet.uz — Kombinatorika",
      "desc": {
       "en": "Combinatorics section of the official Uzbekistan olympiad guide.",
       "ru": "Раздел комбинаторики официального руководства по олимпиадам Узбекистана."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Qiziqarli Matematika — Yunusov",
      "desc": {
       "en": "Uzbek book with interesting counting and combinatorics puzzles.",
       "ru": "Узбекская книга с занимательными задачами на подсчёты и комбинаторику."
      },
      "url": "https://www.ziyouz.com",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "bilimlar.uz — Kombinatorika",
      "desc": {
       "en": "Uzbek-language combinatorics problems for olympiad preparation.",
       "ru": "Задачи по комбинаторике на узбекском для подготовки к олимпиадам."
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
   "ru": "Принцип Дирихле"
  },
  "cat": {
   "en": "Combinatorics",
   "ru": "Комбинаторика"
  },
  "catKey": "comb",
  "color": "#5B4FC7",
  "tint": "#EDECFD",
  "tip": {
   "en": "The hardest part is choosing the right partition (the 'holes'). Once you have the right partition, the argument writes itself. Practice by identifying pigeons and holes in 20+ problems.",
   "ru": "Самое трудное — выбрать правильное разбиение, то есть «клетки». Как только разбиение найдено, доказательство пишется само. Потренируйтесь находить «предметы» и «клетки» в двух десятках задач."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Pigeonhole Principle",
      "desc": {
       "en": "Full coverage: basic, generalized, and infinite pigeonhole with competition examples.",
       "ru": "Полный охват: простой, обобщённый и бесконечный принцип Дирихле с олимпиадными примерами."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Pigeonhole_Principle",
      "price": "free",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "Problem Solving Strategies — Arthur Engel",
      "desc": {
       "en": "Chapter 11 is entirely pigeonhole principle with dozens of competition problems.",
       "ru": "Глава 11 целиком посвящена принципу Дирихле; десятки олимпиадных задач."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "Intermediate Counting & Probability — AoPS",
      "desc": {
       "en": "Dedicated chapter on pigeonhole principle with competition problems.",
       "ru": "Отдельная глава о принципе Дирихле с олимпиадными задачами."
      },
      "url": "https://artofproblemsolving.com/store/book/intermediate-counting",
      "price": "paid",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Ramsey Theory (intro)",
      "desc": {
       "en": "Introduction to Ramsey theory which builds on pigeonhole.",
       "ru": "Введение в теорию Рамсея, выросшую из принципа Дирихле."
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
       "ru": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Pigeonhole",
      "desc": {
       "en": "Competition pigeonhole videos with worked olympiad problems.",
       "ru": "Олимпиадные видео о принципе Дирихле с разобранными задачами."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "3Blue1Brown — Pigeonhole Applications",
      "desc": {
       "en": "Visual explanations of pigeonhole and its surprising consequences.",
       "ru": "Наглядные объяснения принципа Дирихле и его неожиданных следствий."
      },
      "url": "https://www.youtube.com/@3blue1brown",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "Numberphile — Pigeonhole Principle",
      "desc": {
       "en": "Fun exploration of what pigeonhole proves and its surprising uses.",
       "ru": "Увлекательный разбор того, что доказывает принцип Дирихле и где он применяется."
      },
      "url": "https://www.youtube.com/@numberphile",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "MathOlympiad — Pigeonhole Problems",
      "desc": {
       "en": "Olympiad problems with explanation of how to find the right partition.",
       "ru": "Олимпиадные задачи с объяснением, как подобрать правильное разбиение."
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
       "ru": "📄 PDF"
      },
      "title": "Pigeonhole Principle Handout — AoPS (FREE)",
      "desc": {
       "en": "30+ pigeonhole problems from AMC to olympiad level with solutions.",
       "ru": "Более 30 задач на принцип Дирихле — от AMC до олимпиадного уровня — с решениями."
      },
      "url": "https://artofproblemsolving.com/community/c6h123",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Mathnet.uz — Kombinatorika (pigeonhole)",
      "desc": {
       "en": "Pigeonhole problems from Uzbekistan olympiad papers.",
       "ru": "Задачи на принцип Дирихле из вариантов олимпиады Узбекистана."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "IMO Shortlist — Combinatorics",
      "desc": {
       "en": "International olympiad combinatorics shortlist includes classic pigeonhole.",
       "ru": "В шорт-листе международной олимпиады по комбинаторике есть классический Дирихле."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/IMO_Shortlist",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Challenging Problems — Yaglom",
      "desc": {
       "en": "Classic Soviet book with excellent combinatorics including pigeonhole.",
       "ru": "Классическая советская книга с отличной комбинаторикой, включая принцип Дирихле."
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
       "ru": "🌍 Сайт"
      },
      "title": "Brilliant.org — Pigeonhole Principle",
      "desc": {
       "en": "Interactive pigeonhole course with guided problem solving.",
       "ru": "Интерактивный курс о принципе Дирихле с разбором задач."
      },
      "url": "https://brilliant.org/wiki/pigeonhole-principle/",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "AoPS — Pigeonhole Problems Archive",
      "desc": {
       "en": "All competition problems tagged with pigeonhole principle.",
       "ru": "Все олимпиадные задачи с меткой «принцип Дирихле»."
      },
      "url": "https://artofproblemsolving.com/community/c6",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "Cut the Knot — Pigeonhole",
      "desc": {
       "en": "Classical pigeonhole problems with detailed proofs.",
       "ru": "Классические задачи на принцип Дирихле с подробными доказательствами."
      },
      "url": "https://www.cut-the-knot.org/do_you_know/Pigeonhole.shtml",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "NRICH — Pigeonhole Challenges",
      "desc": {
       "en": "Competition-quality pigeonhole problems for grades 7-12.",
       "ru": "Задачи на принцип Дирихле олимпиадного качества для 7–12 классов."
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
       "ru": "🇺🇿 Узбекский"
      },
      "title": "olympiad.maktab.uz",
      "desc": {
       "en": "Olympiad problems requiring pigeonhole from district to republic level.",
       "ru": "Олимпиадные задачи на принцип Дирихле — от районного до республиканского уровня."
      },
      "url": "https://olympiad.maktab.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Mathnet.uz",
      "desc": {
       "en": "Combinatorics and pigeonhole problems from official Uzbekistan guide.",
       "ru": "Задачи по комбинаторике и принципу Дирихле из официального руководства Узбекистана."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Qiziqarli Matematika",
      "desc": {
       "en": "Classic Uzbek book with pigeonhole-type logical puzzles.",
       "ru": "Классическая узбекская книга с логическими задачами дирихлевского типа."
      },
      "url": "https://www.ziyouz.com",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "bilimlar.uz",
      "desc": {
       "en": "Uzbek olympiad materials including combinatorics for grades 7-8.",
       "ru": "Узбекские олимпиадные материалы, включая комбинаторику для 7–8 классов."
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
   "ru": "Логика, доказательства и инварианты"
  },
  "cat": {
   "en": "Combinatorics",
   "ru": "Комбинаторика"
  },
  "catKey": "comb",
  "color": "#5B4FC7",
  "tint": "#EDECFD",
  "tip": {
   "en": "Always start a proof by stating what you will prove. Label base case and inductive step clearly. For contradiction, write your assumption explicitly at the top.",
   "ru": "Начинайте доказательство с того, что именно вы собираетесь доказать. Чётко обозначайте базу и переход индукции. В доказательстве от противного явно выписывайте предположение в самом начале."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "How to Prove It — Daniel Velleman",
      "desc": {
       "en": "Best introduction to proof writing: direct, contradiction, induction, quantifiers.",
       "ru": "Лучшее введение в написание доказательств: прямое, от противного, индукция, кванторы."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Mathematical Induction",
      "desc": {
       "en": "Full coverage of weak and strong induction with competition examples.",
       "ru": "Полный разбор обычной и сильной индукции с олимпиадными примерами."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematical_induction",
      "price": "free",
      "star": true
     },
     {
      "kind": "wiki",
      "label": {
       "en": "🌐 Wiki",
       "ru": "🌐 Вики"
      },
      "title": "AoPS: Proof by Contradiction",
      "desc": {
       "en": "How contradiction works, classic examples, and competition applications.",
       "ru": "Как работает доказательство от противного, классические примеры и применения."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Proof_by_contradiction",
      "price": "free",
      "star": false
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "Art and Craft of Problem Solving — Zeitz",
      "desc": {
       "en": "Outstanding on proof strategies. Chapter on 'Supremacy of Strategy' is essential.",
       "ru": "Выдающаяся книга о стратегиях доказательства. Глава о выборе стратегии обязательна."
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
       "ru": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Writing Proofs",
      "desc": {
       "en": "How to write clear, rigorous proofs for olympiad problems.",
       "ru": "Как писать ясные и строгие доказательства олимпиадных задач."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "3Blue1Brown — Proofs and Mathematical Thinking",
      "desc": {
       "en": "Visualizing why proofs work. Builds mathematical intuition.",
       "ru": "Наглядное объяснение того, почему доказательства работают. Развивает интуицию."
      },
      "url": "https://www.youtube.com/@3blue1brown",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "Michael Penn — Olympiad Proof Techniques",
      "desc": {
       "en": "Induction, contradiction, and contrapositive with clear examples.",
       "ru": "Индукция, доказательство от противного и контрапозиция с понятными примерами."
      },
      "url": "https://www.youtube.com/@MichaelPennMath",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "Numberphile — Mathematical Proofs",
      "desc": {
       "en": "Accessible explanations of famous proofs (infinite primes, √2 irrational).",
       "ru": "Доступные разборы знаменитых доказательств (бесконечность простых, иррациональность √2)."
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
       "ru": "📄 PDF"
      },
      "title": "Evan Chen — Introduction to Proofs (FREE)",
      "desc": {
       "en": "Free handout by top olympiad coach on proof writing.",
       "ru": "Бесплатный конспект ведущего олимпиадного тренера о написании доказательств."
      },
      "url": "https://web.evanchen.cc/olympiad.html",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Mathematical Induction Handout — AoPS (FREE)",
      "desc": {
       "en": "25+ induction problems from trivial to olympiad level.",
       "ru": "Более 25 задач на индукцию — от простейших до олимпиадного уровня."
      },
      "url": "https://artofproblemsolving.com/community/c6h482",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Mathnet.uz — Isbot usullari",
      "desc": {
       "en": "Proof methods covered in Uzbekistan olympiad guide.",
       "ru": "Методы доказательства в руководстве по олимпиадам Узбекистана."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "IMO Problems and Proofs",
      "desc": {
       "en": "Full IMO problems with model solutions. Shows what a complete proof looks like.",
       "ru": "Полные задачи IMO с образцовыми решениями. Видно, как выглядит законченное доказательство."
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
       "ru": "🌍 Сайт"
      },
      "title": "AoPS — Olympiad Proof Problems",
      "desc": {
       "en": "Competition problems requiring written proofs at every level.",
       "ru": "Олимпиадные задачи, требующие письменного доказательства, на всех уровнях."
      },
      "url": "https://artofproblemsolving.com/community",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "Brilliant.org — Logic and Proofs",
      "desc": {
       "en": "Interactive introduction to logical thinking and formal proofs.",
       "ru": "Интерактивное введение в логическое мышление и формальные доказательства."
      },
      "url": "https://brilliant.org/courses/logic-and-proof/",
      "price": "paid",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "Cut the Knot — Proofs",
      "desc": {
       "en": "Hundreds of beautiful mathematical proofs organized by topic.",
       "ru": "Сотни красивых математических доказательств, разложенных по темам."
      },
      "url": "https://www.cut-the-knot.org/proofs/index.shtml",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "NRICH — Proof Challenges",
      "desc": {
       "en": "Competition proof problems for grades 7-12.",
       "ru": "Задачи на доказательство олимпиадного качества для 7–12 классов."
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
       "ru": "🇺🇿 Узбекский"
      },
      "title": "olympiad.maktab.uz",
      "desc": {
       "en": "Proof-based problems in republic and international rounds.",
       "ru": "Задачи на доказательство в республиканских и международных турах."
      },
      "url": "https://olympiad.maktab.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Mathnet.uz — Isbot va mantiq",
      "desc": {
       "en": "Proof and logic problems from official Uzbekistan math olympiad guide.",
       "ru": "Задачи на логику и доказательства из официального руководства по олимпиадам Узбекистана."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Qiziqarli Matematika",
      "desc": {
       "en": "Logic puzzles and proof-based problems in Uzbek language.",
       "ru": "Логические головоломки и задачи на доказательство на узбекском языке."
      },
      "url": "https://www.ziyouz.com",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "TASIMO — Proof-based Olympiad",
      "desc": {
       "en": "Tashkent International Math Olympiad requires full written proofs.",
       "ru": "Ташкентская международная олимпиада требует полных письменных доказательств."
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
   "ru": "Пробная олимпиада"
  },
  "cat": {
   "en": "Mixed Review",
   "ru": "Повторение"
  },
  "catKey": "mix",
  "color": "#8A6D1F",
  "tint": "#F7F0DE",
  "tip": {
   "en": "Simulate real exam conditions: phone away, 45 minutes timed. Read all problems first, then start with the one you're most confident about. Full solutions after time is up.",
   "ru": "Смоделируйте настоящий тур: телефон убран, время засечено. Сначала прочитайте все задачи, потом начинайте с той, в которой уверены больше всего. Решения — только после того, как время вышло."
  },
  "groups": [
   {
    "id": "theory",
    "cards": [
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "Problem Solving Strategies — Arthur Engel",
      "desc": {
       "en": "The definitive olympiad book. 700+ problems with strategies for all topics.",
       "ru": "Главная олимпиадная книга. Более 700 задач со стратегиями по всем темам."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "Mathematical Olympiad in China (2007-2008)",
      "desc": {
       "en": "Outstanding collection covering all four areas with solutions.",
       "ru": "Выдающийся сборник по всем четырём разделам с решениями."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": true
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "Mathematical Circles (Russian Experience)",
      "desc": {
       "en": "Mixed problem book with great pedagogy. Used in Russian math circles at this level.",
       "ru": "Сборник смешанных задач с прекрасной методикой. Используется в математических кружках."
      },
      "url": "https://artofproblemsolving.com/wiki/index.php/Mathematics_books",
      "price": "paid",
      "star": false
     },
     {
      "kind": "book",
      "label": {
       "en": "📚 Book",
       "ru": "📚 Книга"
      },
      "title": "USSR Olympiad Problem Book — Shkliarsky",
      "desc": {
       "en": "Classic collection. Excellent for mixed practice at republic level.",
       "ru": "Классический сборник. Отлично подходит для смешанной практики республиканского уровня."
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
       "ru": "▶ YouTube"
      },
      "title": "Art of Problem Solving — Full Solutions",
      "desc": {
       "en": "AoPS YouTube has many full olympiad problem solution videos.",
       "ru": "На YouTube-канале AoPS много видеоразборов олимпиадных задач целиком."
      },
      "url": "https://www.youtube.com/@ArtofProblemSolving",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "3Blue1Brown — Problem Solving Shorts",
      "desc": {
       "en": "Visual approach to problem solving across all four topic areas.",
       "ru": "Наглядный подход к решению задач по всем четырём разделам."
      },
      "url": "https://www.youtube.com/@3blue1brown",
      "price": "free",
      "star": true
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "Michael Penn — Mixed Olympiad Problems",
      "desc": {
       "en": "Olympiad-level solutions across number theory, algebra, and combinatorics.",
       "ru": "Решения олимпиадного уровня по теории чисел, алгебре и комбинаторике."
      },
      "url": "https://www.youtube.com/@MichaelPennMath",
      "price": "free",
      "star": false
     },
     {
      "kind": "video",
      "label": {
       "en": "▶ YouTube",
       "ru": "▶ YouTube"
      },
      "title": "Po-Shen Loh — Math Olympiad Camp",
      "desc": {
       "en": "Full mixed olympiad training from the US IMO coach.",
       "ru": "Полный курс смешанной олимпиадной подготовки от тренера сборной США."
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
       "ru": "📄 PDF"
      },
      "title": "Mathnet.uz — Full Uzbekistan Olympiad Guide (FREE)",
      "desc": {
       "en": "Complete guide: tuman, viloyat, respublika. All topics covered with solutions.",
       "ru": "Полное руководство: туман, вилоят, республика. Все темы с решениями."
      },
      "url": "https://mathnet.uz/Uploads/Resurs/5/8f3d6b15-a28c-44de-a194-87060d2e487b_.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "OlympiadUSA Grade 7-8 Past Exams (FREE)",
      "desc": {
       "en": "Full past exam papers with solutions.",
       "ru": "Полные варианты прошлых туров с решениями."
      },
      "url": "https://olympiadusa.org/wp-content/uploads/2025/02/january-grade-7-8-past-exams-questions-and-solutions-olympiadusa-org.pdf",
      "price": "free",
      "star": true
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "Al-Xorazmiy 7-8 sinf papers (Scribd)",
      "desc": {
       "en": "Official Al-Xorazmiy olympiad papers. Mixed problems across all topics.",
       "ru": "Официальные варианты олимпиады Аль-Хорезми. Смешанные задачи по всем темам."
      },
      "url": "https://www.scribd.com/document/808101628",
      "price": "paid",
      "star": false
     },
     {
      "kind": "pdf",
      "label": {
       "en": "📄 PDF",
       "ru": "📄 PDF"
      },
      "title": "IMO Problems Collection",
      "desc": {
       "en": "All IMO problems 1959-2003. Use as inspiration for republic+ level.",
       "ru": "Все задачи IMO с 1959 по 2003 год. Ориентир для республиканского уровня и выше."
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
       "ru": "🌍 Сайт"
      },
      "title": "AoPS — Problem Search by Competition",
      "desc": {
       "en": "Search by competition (AMC, AIME, USAMO, IMO) and topic.",
       "ru": "Поиск по соревнованию (AMC, AIME, USAMO, IMO) и по теме."
      },
      "url": "https://artofproblemsolving.com/community",
      "price": "free",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "Brilliant.org — Full Courses",
      "desc": {
       "en": "Complete olympiad preparation across all four topic areas.",
       "ru": "Полная подготовка к олимпиаде по всем четырём разделам."
      },
      "url": "https://brilliant.org",
      "price": "paid",
      "star": true
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "NRICH — All Competitions",
      "desc": {
       "en": "Mixed competition problems from UKMT and other UK competitions.",
       "ru": "Смешанные задачи с UKMT и других британских соревнований."
      },
      "url": "https://nrich.maths.org",
      "price": "free",
      "star": false
     },
     {
      "kind": "site",
      "label": {
       "en": "🌍 Website",
       "ru": "🌍 Сайт"
      },
      "title": "matholymp.com — Tutorials",
      "desc": {
       "en": "Tutorials in elementary math for olympiad students covering all topics.",
       "ru": "Пособия по элементарной математике для олимпиадников по всем темам."
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
       "ru": "🇺🇿 Узбекский"
      },
      "title": "olympiad.maktab.uz — Barcha materiallar",
      "desc": {
       "en": "ALL Uzbekistan olympiad materials: Al-Xorazmiy, asosiy, nufuzli xalqaro.",
       "ru": "ВСЕ олимпиадные материалы Узбекистана: Аль-Хорезми, основная, международные."
      },
      "url": "https://olympiad.maktab.uz/Site/OlympiadMaterials",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "Mathnet.uz — To'liq qo'llanma",
      "desc": {
       "en": "Complete Uzbekistan olympiad preparation guide from official ministry portal.",
       "ru": "Полное руководство по подготовке к олимпиадам Узбекистана с официального портала."
      },
      "url": "https://mathnet.uz",
      "price": "free",
      "star": true
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "AKHIMO — Al-Khorezmi International Olympiad",
      "desc": {
       "en": "International competition held in Uzbekistan. Past problems on website.",
       "ru": "Международное соревнование, проводимое в Узбекистане. Прошлые задачи на сайте."
      },
      "url": "https://akhimo.urdu.uz",
      "price": "free",
      "star": false
     },
     {
      "kind": "uz",
      "label": {
       "en": "🇺🇿 Uzbek",
       "ru": "🇺🇿 Узбекский"
      },
      "title": "TASIMO — Tashkent International Olympiad",
      "desc": {
       "en": "Tashkent-hosted international olympiad. Problems with solutions on AoPS.",
       "ru": "Международная олимпиада в Ташкенте. Задачи с решениями на AoPS."
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
