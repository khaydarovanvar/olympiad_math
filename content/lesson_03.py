# -*- coding: utf-8 -*-
"""Topic 3 — Modular arithmetic."""

LESSON = {
 'n': 3,
 'cat': 'nt',
 'title': {'ru': 'Арифметика остатков', 'en': 'Modular arithmetic'},
 'sub': {'ru': 'Сравнения превращают громоздкие вычисления в короткие: последние цифры, циклы степеней и малая теорема Ферма.',
         'en': 'Congruences turn heavy computations into short ones: last digits, cycles of powers and Fermat\'s little theorem.'},
 'goals': {
  'ru': [
   r'Понимать запись $a\equiv b\pmod m$ и свободно складывать, вычитать и умножать сравнения.',
   r'Знать, что делить сравнение нельзя, и уметь обойти это ограничение.',
   r'Находить последние цифры больших степеней через цикличность.',
   r'Применять малую теорему Ферма и осознанно выбирать модуль в задаче.',
  ],
  'en': [
   r'Understand the notation $a\equiv b\pmod m$ and add, subtract and multiply congruences freely.',
   r'Know that a congruence may not simply be divided, and know how to work around it.',
   r'Find the last digits of large powers using cycles.',
   r"Apply Fermat's little theorem and choose a modulus deliberately."],
  },

 'sections': [

  {'h': {'ru': 'Сравнения', 'en': 'Congruences'},
   'blocks': [
    {'t': 'def',
     'name': {'ru': 'Сравнение по модулю', 'en': 'Congruence modulo m'},
     'text': {
      'ru': r'Пусть $m>0$ — целое. Пишут $$a\equiv b \pmod m$$ и говорят «$a$ сравнимо с $b$ по модулю $m$», если $m\mid(a-b)$ — равносильно, если $a$ и $b$ дают одинаковый остаток при делении на $m$.',
      'en': r'Let $m>0$ be an integer. We write $$a\equiv b \pmod m$$ and say "$a$ is congruent to $b$ modulo $m$" if $m\mid(a-b)$ — equivalently, if $a$ and $b$ leave the same remainder on division by $m$.'}},

    {'t': 'note',
     'text': {
      'ru': r'Примеры: $17\equiv2\pmod5$, $-3\equiv4\pmod 7$, $100\equiv0\pmod{25}$. Сравнение — это способ сказать «меня интересует только остаток», и потому оно так удобно.',
      'en': r'Examples: $17\equiv2\pmod5$, $-3\equiv4\pmod 7$, $100\equiv0\pmod{25}$. A congruence is a way of saying "only the remainder matters to me", which is exactly why it is so convenient.'}},

    {'t': 'thm',
     'name': {'ru': 'Что можно делать со сравнениями', 'en': 'What you may do with congruences'},
     'text': {
      'ru': r'Если $a\equiv b$ и $c\equiv d$ по модулю $m$, то $$a+c\equiv b+d,\qquad a-c\equiv b-d,\qquad ac\equiv bd \pmod m,$$ и, как следствие, $a^{k}\equiv b^{k}\pmod m$ для любого натурального $k$.',
      'en': r'If $a\equiv b$ and $c\equiv d$ modulo $m$, then $$a+c\equiv b+d,\qquad a-c\equiv b-d,\qquad ac\equiv bd \pmod m,$$ and consequently $a^{k}\equiv b^{k}\pmod m$ for every positive integer $k$.'}},

    {'t': 'proof',
     'text': {
      'ru': r'По условию $m\mid a-b$ и $m\mid c-d$. Тогда $m$ делит сумму $(a-b)+(c-d)=(a+c)-(b+d)$, что и есть первое утверждение; для разности так же. Для произведения запишем $$ac-bd=ac-bc+bc-bd=c(a-b)+b(c-d),$$ и оба слагаемых делятся на $m$. Степени получаются повторным применением правила для произведения. $\blacksquare$',
      'en': r'By hypothesis $m\mid a-b$ and $m\mid c-d$. Then $m$ divides the sum $(a-b)+(c-d)=(a+c)-(b+d)$, which is the first claim; the difference is the same. For the product write $$ac-bd=ac-bc+bc-bd=c(a-b)+b(c-d),$$ and both terms are divisible by $m$. Powers follow by applying the product rule repeatedly. $\blacksquare$'}},

    {'t': 'warn',
     'text': {
      'ru': r'**Делить сравнение нельзя.** Из $6\equiv 0\pmod 6$ и $2\ne0\pmod 6$ видно, что из $2\cdot3\equiv2\cdot0$ не следует $3\equiv0$. Сокращать на $c$ разрешено только когда $\gcd(c,m)=1$; тогда из $ca\equiv cb$ действительно следует $a\equiv b$.',
      'en': r'**You may not divide a congruence.** From $6\equiv 0\pmod 6$ and $2\not\equiv0\pmod 6$ we see that $2\cdot3\equiv2\cdot0$ does not give $3\equiv0$. Cancelling $c$ is allowed only when $\gcd(c,m)=1$; then $ca\equiv cb$ really does give $a\equiv b$.'}},

    {'t': 'ex',
     'q': {'ru': r'Найдите остаток от деления $2^{100}$ на $7$.',
           'en': r'Find the remainder of $2^{100}$ on division by $7$.'},
     'steps': {
      'ru': [r'$2^3=8\equiv1\pmod 7$ — нашли короткий цикл.',
             r'$100=3\cdot33+1$, поэтому $2^{100}=\left(2^{3}\right)^{33}\cdot2$.',
             r'$\left(2^{3}\right)^{33}\equiv1^{33}=1$, значит $2^{100}\equiv2\pmod 7$.'],
      'en': [r'$2^3=8\equiv1\pmod 7$ — a short cycle.',
             r'$100=3\cdot33+1$, so $2^{100}=\left(2^{3}\right)^{33}\cdot2$.',
             r'$\left(2^{3}\right)^{33}\equiv1^{33}=1$, hence $2^{100}\equiv2\pmod 7$.']},
     'ans': {'ru': r'Остаток $2$', 'en': r'The remainder is $2$'}},
   ]},

  {'h': {'ru': 'Последние цифры и циклы степеней', 'en': 'Last digits and cycles of powers'},
   'blocks': [
    {'t': 'p',
     'text': {
      'ru': r'Последняя цифра числа — это его остаток по модулю $10$; две последние цифры — остаток по модулю $100$. Степени любого числа по фиксированному модулю рано или поздно начинают повторяться, и обычно очень быстро.',
      'en': r'The last digit of a number is its remainder modulo $10$; the last two digits are the remainder modulo $100$. The powers of any number, to a fixed modulus, start repeating sooner or later — and usually very soon.'}},

    {'t': 'table',
     'head': {'ru': ['Основание', 'Цикл последних цифр', 'Длина'],
              'en': ['Base', 'Cycle of last digits', 'Length']},
     'rows': {
      'ru': [
       [r'$2$', r'$2,4,8,6$', r'$4$'],
       [r'$3$', r'$3,9,7,1$', r'$4$'],
       [r'$7$', r'$7,9,3,1$', r'$4$'],
       [r'$8$', r'$8,4,2,6$', r'$4$'],
       [r'$4$', r'$4,6$', r'$2$'],
       [r'$9$', r'$9,1$', r'$2$'],
       [r'$5,6$', r'$5$; $6$', r'$1$'],
      ],
      'en': [
       [r'$2$', r'$2,4,8,6$', r'$4$'],
       [r'$3$', r'$3,9,7,1$', r'$4$'],
       [r'$7$', r'$7,9,3,1$', r'$4$'],
       [r'$8$', r'$8,4,2,6$', r'$4$'],
       [r'$4$', r'$4,6$', r'$2$'],
       [r'$9$', r'$9,1$', r'$2$'],
       [r'$5,6$', r'$5$; $6$', r'$1$'],
      ]}},

    {'t': 'idea',
     'name': {'ru': 'Как пользоваться циклом', 'en': 'How to use a cycle'},
     'text': {
      'ru': r'Если цикл имеет длину $L$, то показатель нужен только **по модулю $L$**. Осторожно с нулевым остатком: если показатель делится на $L$, берут **последний** элемент цикла, а не первый.',
      'en': r'If the cycle has length $L$, only the exponent **modulo $L$** matters. Take care with a zero remainder: if the exponent is a multiple of $L$, take the **last** element of the cycle, not the first.'}},

    {'t': 'ex',
     'q': {'ru': r'Найдите последнюю цифру числа $7^{2025}$.',
           'en': r'Find the last digit of $7^{2025}$.'},
     'steps': {
      'ru': [r'Цикл для $7$: $7,9,3,1$ — длина $4$.',
             r'$2025=4\cdot506+1$, остаток $1$.',
             r'Значит последняя цифра совпадает с первой в цикле: $7$.'],
      'en': [r'The cycle for $7$ is $7,9,3,1$ — length $4$.',
             r'$2025=4\cdot506+1$, remainder $1$.',
             r'So the last digit is the first entry of the cycle: $7$.']},
     'ans': {'ru': r'$7$', 'en': r'$7$'}},

    {'t': 'ex',
     'q': {'ru': r'Найдите две последние цифры числа $3^{2025}$.',
           'en': r'Find the last two digits of $3^{2025}$.'},
     'steps': {
      'ru': [r'Работаем по модулю $100$. Считаем: $3^4=81$, $3^5=243\equiv43$.',
             r'$3^{10}\equiv43^2=1849\equiv49$, значит $3^{20}\equiv49^2=2401\equiv1\pmod{100}$.',
             r'$2025=20\cdot101+5$, поэтому $3^{2025}\equiv3^{5}\equiv43\pmod{100}$.'],
      'en': [r'Work modulo $100$. Compute $3^4=81$ and $3^5=243\equiv43$.',
             r'$3^{10}\equiv43^2=1849\equiv49$, so $3^{20}\equiv49^2=2401\equiv1\pmod{100}$.',
             r'$2025=20\cdot101+5$, hence $3^{2025}\equiv3^{5}\equiv43\pmod{100}$.']},
     'ans': {'ru': r'$43$', 'en': r'$43$'}},
   ]},

  {'h': {'ru': 'Малая теорема Ферма', 'en': "Fermat's little theorem"},
   'blocks': [
    {'t': 'thm',
     'name': {'ru': 'Малая теорема Ферма', 'en': "Fermat's little theorem"},
     'text': {
      'ru': r'Пусть $p$ — простое и $p\nmid a$. Тогда $$a^{p-1}\equiv1\pmod p.$$ Без условия $p\nmid a$ верна форма $a^{p}\equiv a\pmod p$ для **любого** целого $a$.',
      'en': r'Let $p$ be prime with $p\nmid a$. Then $$a^{p-1}\equiv1\pmod p.$$ Without the condition $p\nmid a$ the form $a^{p}\equiv a\pmod p$ holds for **every** integer $a$.'}},

    {'t': 'proof',
     'text': {
      'ru': r'Рассмотрим числа $a,2a,3a,\ldots,(p-1)a$ и их остатки по модулю $p$. Все остатки ненулевые (иначе $p\mid ka$, но $p\nmid a$ и $p\nmid k$). Все они различны: если $ia\equiv ja$, то $p\mid a(i-j)$, значит $p\mid i-j$, а $|i-j|<p$ даёт $i=j$. Итак, наши $p-1$ остатков — это в точности $1,2,\ldots,p-1$ в каком-то порядке. Перемножим: $$a\cdot2a\cdots(p-1)a\equiv1\cdot2\cdots(p-1)\pmod p,$$ то есть $a^{p-1}(p-1)!\equiv(p-1)!$. Число $(p-1)!$ взаимно просто с $p$, поэтому на него можно сократить: $a^{p-1}\equiv1$. $\blacksquare$',
      'en': r'Consider the numbers $a,2a,3a,\ldots,(p-1)a$ and their remainders modulo $p$. No remainder is zero (otherwise $p\mid ka$, but $p\nmid a$ and $p\nmid k$). They are pairwise distinct: if $ia\equiv ja$ then $p\mid a(i-j)$, so $p\mid i-j$, and $|i-j|<p$ forces $i=j$. So our $p-1$ remainders are exactly $1,2,\ldots,p-1$ in some order. Multiply them: $$a\cdot2a\cdots(p-1)a\equiv1\cdot2\cdots(p-1)\pmod p,$$ that is $a^{p-1}(p-1)!\equiv(p-1)!$. Since $(p-1)!$ is coprime to $p$ we may cancel it: $a^{p-1}\equiv1$. $\blacksquare$'}},

    {'t': 'ex',
     'q': {'ru': r'Найдите остаток от деления $3^{100}$ на $7$.',
           'en': r'Find the remainder of $3^{100}$ on division by $7$.'},
     'steps': {
      'ru': [r'$7$ простое и $7\nmid3$, значит $3^{6}\equiv1\pmod 7$.',
             r'$100=6\cdot16+4$, поэтому $3^{100}\equiv3^{4}$.',
             r'$3^4=81=7\cdot11+4\equiv4\pmod 7$.'],
      'en': [r'$7$ is prime and $7\nmid3$, so $3^{6}\equiv1\pmod 7$.',
             r'$100=6\cdot16+4$, hence $3^{100}\equiv3^{4}$.',
             r'$3^4=81=7\cdot11+4\equiv4\pmod 7$.']},
     'ans': {'ru': r'Остаток $4$', 'en': r'The remainder is $4$'}},

    {'t': 'note',
     'text': {
      'ru': r'Ферма даёт показатель $p-1$, но настоящий период может быть **меньше**: он всегда делит $p-1$. Так, $2^3\equiv1\pmod 7$, хотя Ферма обещает лишь $2^6\equiv1$. Ищите короткий цикл руками — считать станет легче.',
      'en': r'Fermat gives the exponent $p-1$, but the true period may be **shorter**: it always divides $p-1$. For instance $2^3\equiv1\pmod 7$, although Fermat only promises $2^6\equiv1$. Look for the short cycle by hand — the arithmetic gets easier.'}},
   ]},

  {'h': {'ru': 'Как выбирать модуль', 'en': 'Choosing the modulus'},
   'blocks': [
    {'t': 'p',
     'text': {
      'ru': r'Главный вопрос любой задачи «докажите, что решений нет» — **по какому модулю смотреть**. Выбор не случаен: модуль подбирают так, чтобы у одной части уравнения было мало возможных остатков, а у другой нужного остатка не было вовсе.',
      'en': r'The central question in any "prove there are no solutions" problem is **which modulus to look at**. The choice is not random: pick a modulus for which one side of the equation has few possible remainders and the other side never hits them.'}},

    {'t': 'table',
     'head': {'ru': ['Что в задаче', 'Модуль', 'Почему'],
              'en': ['What appears', 'Modulus', 'Why']},
     'rows': {
      'ru': [
       [r'квадраты', r'$4$ или $8$', r'$n^2\equiv0,1\pmod4$; нечётный квадрат $\equiv1\pmod8$'],
       [r'сумма двух квадратов', r'$4$', r'даёт только $0,1,2$ — никогда $3$'],
       [r'кубы', r'$9$', r'$n^3\equiv0,\pm1\pmod9$'],
       [r'степени двойки', r'$3$ или $7$', r'короткие циклы $2$ и $3$'],
       [r'десятичная запись', r'$9$ или $11$', r'сумма цифр, знакочередующаяся сумма'],
       [r'простое $p$ в показателе', r'$p$', r'малая теорема Ферма'],
      ],
      'en': [
       [r'squares', r'$4$ or $8$', r'$n^2\equiv0,1\pmod4$; an odd square is $\equiv1\pmod8$'],
       [r'a sum of two squares', r'$4$', r'gives only $0,1,2$ — never $3$'],
       [r'cubes', r'$9$', r'$n^3\equiv0,\pm1\pmod9$'],
       [r'powers of two', r'$3$ or $7$', r'short cycles of length $2$ and $3$'],
       [r'decimal digits', r'$9$ or $11$', r'digit sum, alternating digit sum'],
       [r'a prime $p$ in an exponent', r'$p$', r"Fermat's little theorem"],
      ]}},

    {'t': 'ex',
     'q': {'ru': r'Докажите, что уравнение $x^2+y^2=2023$ не имеет решений в целых числах.',
           'en': r'Prove that the equation $x^2+y^2=2023$ has no integer solutions.'},
     'steps': {
      'ru': [r'Квадрат целого даёт по модулю $4$ остаток $0$ или $1$.',
             r'Значит сумма двух квадратов даёт остаток $0$, $1$ или $2$ — но не $3$.',
             r'$2023=4\cdot505+3$, то есть $2023\equiv3\pmod 4$. Решений нет.'],
      'en': [r'A square leaves remainder $0$ or $1$ modulo $4$.',
             r'So a sum of two squares leaves $0$, $1$ or $2$ — never $3$.',
             r'$2023=4\cdot505+3$, that is $2023\equiv3\pmod 4$. There are no solutions.']},
     'ans': {'ru': r'Решений нет', 'en': r'No solutions'}},

    {'t': 'idea',
     'name': {'ru': 'Приём: подставить малое вместо большого', 'en': 'The move: swap a big number for a small one'},
     'text': {
      'ru': r'Прежде чем возводить в степень, замените основание на его остаток. Вместо $15^{15}\pmod{13}$ считайте $2^{15}\pmod{13}$ — арифметика становится устной.',
      'en': r'Before taking a power, replace the base by its remainder. Instead of $15^{15}\pmod{13}$ compute $2^{15}\pmod{13}$ — the arithmetic becomes mental.'}},
   ]},
 ],

 'problems': [

  {'src': 'Разминка / Warm-up', 'lvl': 1,
   'q': {'ru': r'Найдите последнюю цифру числа $2^{2025}$.', 'en': r'Find the last digit of $2^{2025}$.'},
   'hint': {'ru': r'Цикл $2,4,8,6$.', 'en': r'The cycle is $2,4,8,6$.'},
   'sol': {'ru': r'Длина цикла $4$; $2025=4\cdot506+1$, остаток $1$, значит последняя цифра — первая в цикле. **Ответ:** $2$.',
           'en': r'The cycle has length $4$; $2025=4\cdot506+1$ with remainder $1$, so the last digit is the first entry of the cycle. **Answer:** $2$.'}},

  {'src': 'Разминка / Warm-up', 'lvl': 1,
   'q': {'ru': r'Найдите остаток от деления $15^{15}$ на $13$.',
         'en': r'Find the remainder of $15^{15}$ on division by $13$.'},
   'hint': {'ru': r'Сначала уменьшите основание.', 'en': r'Reduce the base first.'},
   'sol': {'ru': r'$15\equiv2\pmod{13}$, значит $15^{15}\equiv2^{15}$. По Ферма $2^{12}\equiv1$, поэтому $2^{15}=2^{12}\cdot2^{3}\equiv8$. **Ответ:** $8$.',
           'en': r'$15\equiv2\pmod{13}$, so $15^{15}\equiv2^{15}$. By Fermat $2^{12}\equiv1$, hence $2^{15}=2^{12}\cdot2^{3}\equiv8$. **Answer:** $8$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Докажите, что точный квадрат никогда не оканчивается цифрой $2,3,7$ или $8$.',
         'en': r'Prove that a perfect square never ends in $2,3,7$ or $8$.'},
   'hint': {'ru': r'Переберите последнюю цифру основания.',
            'en': r'Run through the last digit of the base.'},
   'sol': {'ru': r'Последняя цифра квадрата зависит только от последней цифры числа. Перебирая $0,\ldots,9$, получаем последние цифры квадратов: $0,1,4,9,6,5,6,9,4,1$. Множество возможных цифр — $\{0,1,4,5,6,9\}$; цифр $2,3,7,8$ среди них нет. $\blacksquare$',
           'en': r'The last digit of a square depends only on the last digit of the number. Running through $0,\ldots,9$ gives the last digits of the squares: $0,1,4,9,6,5,6,9,4,1$. The possible digits are $\{0,1,4,5,6,9\}$, and $2,3,7,8$ are not among them. $\blacksquare$'}},

  {'src': 'Классическая задача / Classic', 'lvl': 1,
   'q': {'ru': r'Найдите остаток от деления $1!+2!+3!+\cdots+100!$ на $12$.',
         'en': r'Find the remainder of $1!+2!+3!+\cdots+100!$ on division by $12$.'},
   'hint': {'ru': r'Начиная с какого $n$ факториал делится на $12$?',
            'en': r'From which $n$ onwards is $n!$ divisible by $12$?'},
   'sol': {'ru': r'При $n\ge4$ факториал $n!$ содержит множители $3$ и $4$, значит делится на $12$ и не влияет на остаток. Остаётся $$1!+2!+3!=1+2+6=9.$$ **Ответ:** $9$.',
           'en': r'For $n\ge4$ the factorial $n!$ contains the factors $3$ and $4$, so it is divisible by $12$ and does not affect the remainder. What is left is $$1!+2!+3!=1+2+6=9.$$ **Answer:** $9$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Найдите две последние цифры числа $7^{2024}$.',
         'en': r'Find the last two digits of $7^{2024}$.'},
   'hint': {'ru': r'Найдите наименьшее $k$ с $7^k\equiv1\pmod{100}$.',
            'en': r'Find the smallest $k$ with $7^k\equiv1\pmod{100}$.'},
   'sol': {'ru': r'Считаем по модулю $100$: $7^2=49$, $7^4=49^2=2401\equiv1$. Значит период равен $4$. Так как $2024=4\cdot506$, получаем $7^{2024}\equiv1\pmod{100}$. **Ответ:** последние две цифры — $01$.',
           'en': r'Work modulo $100$: $7^2=49$ and $7^4=49^2=2401\equiv1$. So the period is $4$. Since $2024=4\cdot506$ we get $7^{2024}\equiv1\pmod{100}$. **Answer:** the last two digits are $01$.'}},

  {'src': 'IMO 1964, задача 1 / IMO 1964, Problem 1', 'lvl': 2,
   'q': {'ru': r'(a) Найдите все натуральные $n$, при которых $7\mid 2^n-1$. (b) Докажите, что $7\nmid 2^n+1$ ни при каком натуральном $n$.',
         'en': r'(a) Find all positive integers $n$ for which $7\mid 2^n-1$. (b) Prove that $7\nmid 2^n+1$ for every positive integer $n$.'},
   'hint': {'ru': r'Выпишите $2^n\pmod 7$ — цикл очень короткий.',
            'en': r'Write out $2^n\pmod 7$ — the cycle is very short.'},
   'sol': {'ru': r'Степени двойки по модулю $7$: $2^1\equiv2$, $2^2\equiv4$, $2^3\equiv1$, дальше всё повторяется с периодом $3$. Значит $2^n\pmod 7$ принимает только значения $2,4,1$. (a) $2^n\equiv1$ тогда и только тогда, когда $n$ делится на $3$. (b) $2^n\equiv-1\equiv6$ невозможно, так как $6$ не входит в множество $\{1,2,4\}$. $\blacksquare$',
           'en': r'The powers of two modulo $7$ are $2^1\equiv2$, $2^2\equiv4$, $2^3\equiv1$, and then everything repeats with period $3$. So $2^n\pmod 7$ takes only the values $2,4,1$. (a) $2^n\equiv1$ exactly when $3\mid n$. (b) $2^n\equiv-1\equiv6$ is impossible, since $6$ is not in $\{1,2,4\}$. $\blacksquare$'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Докажите, что $7\mid 3^{2n+1}+2^{n+2}$ при любом целом $n\ge0$.',
         'en': r'Prove that $7\mid 3^{2n+1}+2^{n+2}$ for every integer $n\ge0$.'},
   'hint': {'ru': r'Приведите обе степени к основанию $2$ по модулю $7$.',
            'en': r'Bring both powers to base $2$ modulo $7$.'},
   'sol': {'ru': r'Запишем $3^{2n+1}=3\cdot9^{n}$ и $2^{n+2}=4\cdot2^{n}$. По модулю $7$ имеем $9\equiv2$, поэтому $$3^{2n+1}+2^{n+2}\equiv3\cdot2^{n}+4\cdot2^{n}=7\cdot2^{n}\equiv0\pmod 7.$$ $\blacksquare$ *Проверка:* при $n=1$ получаем $27+8=35=5\cdot7$ ✓',
           'en': r'Write $3^{2n+1}=3\cdot9^{n}$ and $2^{n+2}=4\cdot2^{n}$. Modulo $7$ we have $9\equiv2$, so $$3^{2n+1}+2^{n+2}\equiv3\cdot2^{n}+4\cdot2^{n}=7\cdot2^{n}\equiv0\pmod 7.$$ $\blacksquare$ *Check:* for $n=1$ this is $27+8=35=5\cdot7$ ✓'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Докажите, что сумма квадратов трёх последовательных целых чисел никогда не является точным квадратом.',
         'en': r'Prove that the sum of the squares of three consecutive integers is never a perfect square.'},
   'hint': {'ru': r'Посчитайте сумму и посмотрите на модуль $3$.',
            'en': r'Compute the sum and look modulo $3$.'},
   'sol': {'ru': r'Сумма равна $$(n-1)^2+n^2+(n+1)^2=3n^2+2.$$ По модулю $3$ это даёт остаток $2$. Но квадрат целого числа даёт по модулю $3$ только остатки $0$ или $1$ (проверяется подстановкой $n=3k,3k\pm1$). Значит $3n^2+2$ квадратом быть не может. $\blacksquare$',
           'en': r'The sum equals $$(n-1)^2+n^2+(n+1)^2=3n^2+2.$$ Modulo $3$ this leaves remainder $2$. But a square leaves only $0$ or $1$ modulo $3$ (check $n=3k,3k\pm1$). So $3n^2+2$ cannot be a square. $\blacksquare$'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Докажите, что $n^2\equiv1\pmod 8$ для любого нечётного $n$.',
         'en': r'Prove that $n^2\equiv1\pmod 8$ for every odd $n$.'},
   'hint': {'ru': r'Запишите $n=2k+1$ и разложите на множители.',
            'en': r'Write $n=2k+1$ and factor.'},
   'sol': {'ru': r'Пусть $n=2k+1$. Тогда $$n^2-1=(n-1)(n+1)=2k\cdot(2k+2)=4k(k+1).$$ Из двух последовательных чисел $k$ и $k+1$ одно чётно, значит $k(k+1)$ чётно и $4k(k+1)$ делится на $8$. $\blacksquare$',
           'en': r'Let $n=2k+1$. Then $$n^2-1=(n-1)(n+1)=2k\cdot(2k+2)=4k(k+1).$$ One of the consecutive integers $k$ and $k+1$ is even, so $k(k+1)$ is even and $4k(k+1)$ is divisible by $8$. $\blacksquare$'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Докажите, что $13\mid 2^{70}+3^{70}$.',
         'en': r'Prove that $13\mid 2^{70}+3^{70}$.'},
   'hint': {'ru': r'Найдите короткие циклы для $2$ и для $3$ по модулю $13$.',
            'en': r'Find the short cycles of $2$ and of $3$ modulo $13$.'},
   'sol': {'ru': r'По модулю $13$: $3^3=27\equiv1$, значит период тройки равен $3$; из $70=3\cdot23+1$ получаем $3^{70}\equiv3$. Для двойки $2^{12}\equiv1$ по Ферма, и $70=12\cdot5+10$, поэтому $2^{70}\equiv2^{10}=1024$. Так как $1024=13\cdot78+10$, имеем $2^{70}\equiv10$. Итого $$2^{70}+3^{70}\equiv10+3=13\equiv0\pmod{13}.$$ $\blacksquare$',
           'en': r'Modulo $13$: $3^3=27\equiv1$, so the period of $3$ is $3$; from $70=3\cdot23+1$ we get $3^{70}\equiv3$. For $2$, Fermat gives $2^{12}\equiv1$, and $70=12\cdot5+10$, so $2^{70}\equiv2^{10}=1024$. Since $1024=13\cdot78+10$ we have $2^{70}\equiv10$. Altogether $$2^{70}+3^{70}\equiv10+3=13\equiv0\pmod{13}.$$ $\blacksquare$'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Найдите последнюю цифру числа $7^{7^{7}}$.',
         'en': r'Find the last digit of $7^{7^{7}}$.'},
   'hint': {'ru': r'Показатель нужен только по модулю $4$.',
            'en': r'Only the exponent modulo $4$ matters.'},
   'sol': {'ru': r'Цикл последних цифр семёрки — $7,9,3,1$, длина $4$. Значит нужен остаток числа $7^7$ по модулю $4$. Так как $7\equiv-1\pmod4$, получаем $7^{7}\equiv(-1)^{7}=-1\equiv3\pmod 4$. Остаток $3$ — берём третий элемент цикла. **Ответ:** $3$.',
           'en': r'The cycle of last digits of $7$ is $7,9,3,1$, of length $4$. So we need $7^7$ modulo $4$. Since $7\equiv-1\pmod4$ we get $7^{7}\equiv(-1)^{7}=-1\equiv3\pmod 4$. Remainder $3$, so take the third entry of the cycle. **Answer:** $3$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Докажите, что число $\underbrace{11\ldots1}_{n}$ при $n>1$ не является точным квадратом.',
         'en': r'Prove that the number $\underbrace{11\ldots1}_{n}$ is not a perfect square for $n>1$.'},
   'hint': {'ru': r'Две последние цифры дают остаток по модулю $4$.',
            'en': r'The last two digits give the remainder modulo $4$.'},
   'sol': {'ru': r'При $n>1$ число оканчивается на $11$, а остаток по модулю $4$ определяется двумя последними цифрами: $11=4\cdot2+3$, значит число $\equiv3\pmod 4$. Но квадрат целого даёт по модулю $4$ только $0$ или $1$. Противоречие. $\blacksquare$',
           'en': r'For $n>1$ the number ends in $11$, and the remainder modulo $4$ is decided by the last two digits: $11=4\cdot2+3$, so the number is $\equiv3\pmod 4$. But a square is $0$ or $1$ modulo $4$. Contradiction. $\blacksquare$'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Докажите, что при $n\ge2$ число $2^{2^{n}}+1$ оканчивается цифрой $7$.',
         'en': r'Prove that for $n\ge2$ the number $2^{2^{n}}+1$ ends in the digit $7$.'},
   'hint': {'ru': r'Показатель $2^n$ при $n\ge2$ делится на $4$.',
            'en': r'For $n\ge2$ the exponent $2^n$ is a multiple of $4$.'},
   'sol': {'ru': r'Цикл последних цифр двойки — $2,4,8,6$ длины $4$. При $n\ge2$ показатель $2^{n}$ делится на $4$, значит остаток равен нулю и берётся **последний** элемент цикла: $2^{2^{n}}$ оканчивается на $6$. Тогда $2^{2^{n}}+1$ оканчивается на $7$. $\blacksquare$ *Проверка:* $2^4+1=17$, $2^8+1=257$, $2^{16}+1=65537$ ✓',
           'en': r'The cycle of last digits of $2$ is $2,4,8,6$, of length $4$. For $n\ge2$ the exponent $2^{n}$ is a multiple of $4$, so the remainder is zero and we take the **last** entry of the cycle: $2^{2^{n}}$ ends in $6$. Hence $2^{2^{n}}+1$ ends in $7$. $\blacksquare$ *Check:* $2^4+1=17$, $2^8+1=257$, $2^{16}+1=65537$ ✓'}},

  {'src': 'Классическая задача / Classic', 'lvl': 2,
   'q': {'ru': r'Докажите, что уравнение $x^3+y^3+z^3=2020$ не имеет решений в целых числах.',
         'en': r'Prove that the equation $x^3+y^3+z^3=2020$ has no integer solutions.'},
   'hint': {'ru': r'Посмотрите на кубы по модулю $9$.', 'en': r'Look at cubes modulo $9$.'},
   'sol': {'ru': r'**Шаг 1. Какие остатки бывают у куба по модулю $9$.** Любое целое $x$ сравнимо с одним из чисел $0,\pm1,\pm2,\pm3,\pm4$ по модулю $9$. Возведём в куб: $$0^3=0,\quad(\pm1)^3=\pm1,\quad(\pm2)^3=\pm8\equiv\mp1,\quad(\pm3)^3=\pm27\equiv0,\quad(\pm4)^3=\pm64\equiv\pm1.$$ Значит **куб любого целого числа сравним с $0$, $1$ или $-1$ по модулю $9$** — других вариантов нет.\n\n**Шаг 2. Сумма трёх кубов.** Каждое из трёх слагаемых даёт $0$, $1$ или $-1$, поэтому их сумма лежит в промежутке от $-3$ до $3$, то есть $$x^3+y^3+z^3\equiv-3,-2,-1,0,1,2\ \text{или}\ 3\pmod 9.$$ В привычной записи остатков это множество $\{0,1,2,3,6,7,8\}$; остатки $4$ и $5$ **недостижимы**.\n\n**Шаг 3. Считаем правую часть.** Сумма цифр $2020$ равна $2+0+2+0=4$, значит $2020\equiv4\pmod 9$ (можно и напрямую: $2020=9\cdot224+4$).\n\n**Вывод.** Левая часть никогда не даёт остатка $4$, а правая даёт его всегда. Противоречие, решений нет. $\blacksquare$\n\n*Замечание.* Тот же счёт показывает, что ни одно число вида $9k\pm4$ не представимо суммой трёх кубов. А вот для остальных остатков вопрос очень труден: представление $33=8866128975287528^3+(-8778405442862239)^3+(-2736111468807040)^3$ нашли только в 2019 году.',
           'en': r'**Step 1. Which remainders can a cube have modulo $9$.** Every integer $x$ is congruent to one of $0,\pm1,\pm2,\pm3,\pm4$ modulo $9$. Cube them: $$0^3=0,\quad(\pm1)^3=\pm1,\quad(\pm2)^3=\pm8\equiv\mp1,\quad(\pm3)^3=\pm27\equiv0,\quad(\pm4)^3=\pm64\equiv\pm1.$$ So **the cube of any integer is congruent to $0$, $1$ or $-1$ modulo $9$** — there is nothing else.\n\n**Step 2. A sum of three cubes.** Each of the three terms contributes $0$, $1$ or $-1$, so the sum lies between $-3$ and $3$: $$x^3+y^3+z^3\equiv-3,-2,-1,0,1,2\ \text{or}\ 3\pmod 9.$$ Written as ordinary remainders that is $\{0,1,2,3,6,7,8\}$; the remainders $4$ and $5$ are **out of reach**.\n\n**Step 3. The right-hand side.** The digit sum of $2020$ is $2+0+2+0=4$, so $2020\equiv4\pmod 9$ (or directly: $2020=9\cdot224+4$).\n\n**Conclusion.** The left side never leaves remainder $4$ and the right side always does. Contradiction, so there are no solutions. $\blacksquare$\n\n*Remark.* The same count shows that no number of the form $9k\pm4$ is a sum of three cubes. For the other remainders the question is genuinely hard: the representation $33=8866128975287528^3+(-8778405442862239)^3+(-2736111468807040)^3$ was only found in 2019.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 3,
   'q': {'ru': r'Докажите, что $641\mid 2^{32}+1$.',
         'en': r'Prove that $641\mid 2^{32}+1$.'},
   'hint': {'ru': r'Заметьте, что $641=5\cdot2^7+1=2^4+5^4$.',
            'en': r'Note that $641=5\cdot2^7+1=2^4+5^4$.'},
   'sol': {'ru': r'Обозначим $p=641$ и воспользуемся двумя его записями. Из $641=5\cdot2^{7}+1$ следует $$5\cdot2^{7}\equiv-1\pmod{641},$$ а возведя в четвёртую степень, $5^{4}\cdot2^{28}\equiv1$. Из $641=2^{4}+5^{4}$ следует $5^{4}\equiv-2^{4}$. Подставим: $$-2^{4}\cdot2^{28}\equiv1,\quad\text{то есть}\quad -2^{32}\equiv1,\quad 2^{32}\equiv-1\pmod{641}.$$ Значит $641\mid 2^{32}+1$. $\blacksquare$ *Исторически* именно так Эйлер опроверг гипотезу Ферма о том, что все числа $2^{2^{n}}+1$ простые.',
           'en': r'Write $p=641$ and use its two forms. From $641=5\cdot2^{7}+1$ we get $$5\cdot2^{7}\equiv-1\pmod{641},$$ and raising to the fourth power, $5^{4}\cdot2^{28}\equiv1$. From $641=2^{4}+5^{4}$ we get $5^{4}\equiv-2^{4}$. Substituting, $$-2^{4}\cdot2^{28}\equiv1,\quad\text{that is}\quad -2^{32}\equiv1,\quad 2^{32}\equiv-1\pmod{641}.$$ So $641\mid 2^{32}+1$. $\blacksquare$ *Historically* this is how Euler refuted Fermat\'s guess that every $2^{2^{n}}+1$ is prime.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 3,
   'q': {'ru': r'Докажите, что $n^5-n$ делится на $30$, пользуясь малой теоремой Ферма.',
         'en': r'Prove that $n^5-n$ is divisible by $30$, using Fermat\'s little theorem.'},
   'hint': {'ru': r'$30=2\cdot3\cdot5$, и для каждого простого работает форма $a^p\equiv a$.',
            'en': r'$30=2\cdot3\cdot5$, and for each prime the form $a^p\equiv a$ applies.'},
   'sol': {'ru': r'По малой теореме Ферма в форме $a^{p}\equiv a\pmod p$: при $p=5$ сразу $n^5\equiv n\pmod 5$, значит $5\mid n^5-n$. Далее, $n^5-n=n(n^4-1)=n(n^2-1)(n^2+1)$, и множитель $n(n^2-1)=(n-1)n(n+1)$ — произведение трёх последовательных чисел, поэтому делится на $2$ и на $3$. Так как $2,3,5$ попарно взаимно просты, произведение делится на $30$. $\blacksquare$',
           'en': r"By Fermat's little theorem in the form $a^{p}\equiv a\pmod p$: with $p=5$ we get $n^5\equiv n\pmod 5$ at once, so $5\mid n^5-n$. Next, $n^5-n=n(n^4-1)=n(n^2-1)(n^2+1)$, and the factor $n(n^2-1)=(n-1)n(n+1)$ is a product of three consecutive integers, hence divisible by $2$ and by $3$. As $2,3,5$ are pairwise coprime, the product is divisible by $30$. $\blacksquare$"}},

  {'src': 'Классическая задача / Classic', 'lvl': 3,
   'q': {'ru': r'Найдите остаток от деления $2^{2^{2025}}$ на $13$.',
         'en': r'Find the remainder of $2^{2^{2025}}$ on division by $13$.'},
   'hint': {'ru': r'Сначала найдите период двойки по модулю $13$, затем считайте показатель по модулю этого периода.',
            'en': r'First find the period of $2$ modulo $13$, then reduce the exponent modulo that period.'},
   'sol': {'ru': r'По модулю $13$: $2^{12}\equiv1$ (Ферма), и меньший период проверяется прямо: $2^6=64\equiv12\equiv-1$, значит период ровно $12$. Нужен остаток числа $2^{2025}$ по модулю $12$. Так как $2^{2025}$ делится на $4$, запишем $2^{2025}=4\cdot2^{2023}$; по модулю $3$ имеем $2\equiv-1$, поэтому $2^{2025}\equiv(-1)^{2025}=-1\equiv2\pmod 3$. Числа, кратные $4$ и сравнимые с $2$ по модулю $3$: это $8\pmod{12}$. Значит $2^{2025}\equiv8\pmod{12}$, и $$2^{2^{2025}}\equiv2^{8}=256=13\cdot19+9\equiv9\pmod{13}.$$ **Ответ:** $9$.',
           'en': r'Modulo $13$: $2^{12}\equiv1$ (Fermat), and a shorter period is ruled out directly since $2^6=64\equiv12\equiv-1$, so the period is exactly $12$. We need $2^{2025}$ modulo $12$. As $2^{2025}$ is a multiple of $4$, write $2^{2025}=4\cdot2^{2023}$; modulo $3$ we have $2\equiv-1$, so $2^{2025}\equiv(-1)^{2025}=-1\equiv2\pmod 3$. A multiple of $4$ that is $\equiv2\pmod3$ is $\equiv8\pmod{12}$. Hence $2^{2025}\equiv8\pmod{12}$ and $$2^{2^{2025}}\equiv2^{8}=256=13\cdot19+9\equiv9\pmod{13}.$$ **Answer:** $9$.'}},

  {'src': 'Классическая задача / Classic', 'lvl': 3,
   'q': {'ru': r'Докажите, что для любого простого $p>5$ число $\underbrace{11\ldots1}_{p-1}$ делится на $p$.',
         'en': r'Prove that for every prime $p>5$ the number $\underbrace{11\ldots1}_{p-1}$ is divisible by $p$.'},
   'hint': {'ru': r'$\underbrace{11\ldots1}_{k}=\dfrac{10^{k}-1}{9}$ и малая теорема Ферма.',
            'en': r'$\underbrace{11\ldots1}_{k}=\dfrac{10^{k}-1}{9}$ and Fermat.'},
   'sol': {'ru': r'Обозначим $R_{k}=\dfrac{10^{k}-1}{9}$. Так как $p>5$, число $p$ не делит $10$, значит по малой теореме Ферма $$10^{\,p-1}\equiv1\pmod p,\qquad\text{то есть}\qquad p\mid 10^{\,p-1}-1.$$ Кроме того $p>5$ означает $p\ne3$, поэтому $\gcd(p,9)=1$. Из $p\mid 9R_{p-1}$ и взаимной простоты $p$ и $9$ следует $p\mid R_{p-1}$. $\blacksquare$ *Пример:* $p=7$ даёт $111111=7\cdot15873$ ✓',
           'en': r'Write $R_{k}=\dfrac{10^{k}-1}{9}$. Since $p>5$, $p$ does not divide $10$, so by Fermat $$10^{\,p-1}\equiv1\pmod p,\qquad\text{that is}\qquad p\mid 10^{\,p-1}-1.$$ Also $p>5$ means $p\ne3$, so $\gcd(p,9)=1$. From $p\mid 9R_{p-1}$ and the coprimality of $p$ and $9$ it follows that $p\mid R_{p-1}$. $\blacksquare$ *Example:* $p=7$ gives $111111=7\cdot15873$ ✓'}},

  {'src': 'Классическая задача / Classic', 'lvl': 3,
   'q': {'ru': r'Докажите, что $n^2+n+1$ не делится на $5$ ни при каком целом $n$.',
         'en': r'Prove that $n^2+n+1$ is never divisible by $5$.'},
   'hint': {'ru': r'Переберите пять остатков.', 'en': r'Run through the five remainders.'},
   'sol': {'ru': r'Достаточно проверить $n\equiv0,1,2,3,4\pmod 5$: $$0+0+1=1,\quad1+1+1=3,\quad4+2+1=7\equiv2,\quad9+3+1=13\equiv3,\quad16+4+1=21\equiv1.$$ Ни в одном случае не получается $0$, значит $5\nmid n^2+n+1$. $\blacksquare$',
           'en': r'It is enough to check $n\equiv0,1,2,3,4\pmod 5$: $$0+0+1=1,\quad1+1+1=3,\quad4+2+1=7\equiv2,\quad9+3+1=13\equiv3,\quad16+4+1=21\equiv1.$$ None gives $0$, so $5\nmid n^2+n+1$. $\blacksquare$'}},

  {'src': 'Классическая задача / Classic', 'lvl': 3,
   'q': {'ru': r'Найдите все целые $n$, при которых $n^2+n+1$ делится на $7$.',
         'en': r'Find all integers $n$ for which $n^2+n+1$ is divisible by $7$.'},
   'hint': {'ru': r'Переберите семь остатков.', 'en': r'Run through the seven remainders.'},
   'sol': {'ru': r'Проверяем $n\equiv0,\ldots,6\pmod 7$: значения $n^2+n+1$ равны $$1,\;3,\;7\equiv0,\;13\equiv6,\;21\equiv0,\;31\equiv3,\;43\equiv1.$$ Нуль получается при $n\equiv2$ и $n\equiv4\pmod 7$. **Ответ:** $n\equiv2$ или $n\equiv4\pmod 7$. *Проверка:* $n=2$ даёт $7$ ✓, $n=4$ даёт $21=3\cdot7$ ✓',
           'en': r'Check $n\equiv0,\ldots,6\pmod 7$: the values of $n^2+n+1$ are $$1,\;3,\;7\equiv0,\;13\equiv6,\;21\equiv0,\;31\equiv3,\;43\equiv1.$$ Zero occurs for $n\equiv2$ and $n\equiv4\pmod 7$. **Answer:** $n\equiv2$ or $n\equiv4\pmod 7$. *Check:* $n=2$ gives $7$ ✓ and $n=4$ gives $21=3\cdot7$ ✓'}},
 ],
}
