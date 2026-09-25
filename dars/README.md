# Dars · Урок

Birlashgan olimpiada darslari — bir nechta sinf bitta xonada.

## 1-dars · Koʻpaytmaga keltiring (9–11-sinf birga)

Boʻlinish masalalarining toʻrtta harakati, 90 daqiqa, 14 ta masala.

| Fayl | Nima |
|---|---|
| `Birlashgan-dars-9-10-11-dars-UZ-RU.pdf` | oʻqituvchi uchun: reja, harakatlar, toʻliq yechimlar |
| `Birlashgan-dars-9-10-11-masalalar-UZ-RU.pdf` | oʻquvchi uchun: 14 ta masala, yechish uchun joy bilan |

Har bir fayl avval oʻzbekcha, keyin toʻliq ruscha.

**Nega uch sinf birga oʻqiydi.** Sonlar nazariyasi uchala variantda ham
savollarning beshdan biri: 9-sinfda 24,7 %, 10-sinfda 20,0 %, 11-sinfda 18,3 %.
Va bu savollarning deyarli hammasi toʻrtta harakatga tushadi, harakatlarning
hech biri 9-sinf algebrasidan nariga chiqmaydi. Demak nazariya bitta, masala
turlicha — qiyinlik mavzudan emas, masaladan keladi.

Masalalarning 9 tasi haqiqiy variantlardan olingan va manbasi yozib qoʻyilgan;
qolgan 5 tasi shu dars uchun yozilgan. Hamma javob yozilishidan oldin
kompyuterda tekshirilgan.

## Maʼlumotnoma · Sonlar nazariyasi (9–11-sinf)

Darsning orqasida turadigan toʻliq matn: hamma taʼrif, teorema va xossa —
oʻn bittasi qisqa isbot bilan — har biri ishlangan misol bilan; soʻngra toʻrt
darajadagi 32 ta masala va ularning batafsil yechimi.

| Fayl | Nima |
|---|---|
| `Sonlar-nazariyasi-9-10-11.html` | bitta sahifa, tilni almashtirgich bilan (oʻzbekcha ⇄ ruscha) |
| `Sonlar-nazariyasi-9-10-11-UZ-RU.pdf` | 40 bet: avval toʻliq oʻzbekcha, keyin toʻliq ruscha |

Nazariya yetti boʻlim: **A** boʻlinish · **B** tub sonlar va boʻluvchilar ·
**C** EKUB va EKUK · **D** qoldiqlar · **E** koʻpaytmaga keltirish ·
**F** faktorial va tub darajalari · **G** sanash va baholash. Har bir masala
tagida qaysi boʻlim kerakligi yozilgan, yechimlar oxirida shu raqamlar boʻyicha.

Masalalarning 11 tasi haqiqiy variantlardan (manbasi yozib qoʻyilgan), qolgani
shu maʼlumotnoma uchun yozilgan. Hamma javob yozilishidan oldin kompyuterda
(sympy) tekshirilgan.

## Qayta yigʻish

```
python3 build-dars.py dars01-data.py Birlashgan-dars-9-10-11
python3 build-nazariya.py nazariya-data.py Sonlar-nazariyasi-9-10-11
```

`reja/katex-inline.css` va `reja/topdf.js` dan foydalanadi.
