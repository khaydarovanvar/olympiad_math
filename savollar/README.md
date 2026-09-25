# Savollar · Задачи

Every past paper we hold, in one PDF: **Otgan-yillar-savollari-9-10-11.pdf**
(22 pages, 8 papers, grades 9–11).

The pages are the originals, not a re-typesetting — exact wording, exact
figures. The build trims the browser print header and footer off the papers
that were saved from a web page, puts everything on one A4 sheet size, stamps a
running label in the bottom margin, and adds a cover, a contents page and PDF
bookmarks.

| Sinf | Variant | Sahifa | Format |
|---|---|---|---|
| 9 | 2024 | 2 | 1–10: 0,9 ball · 11–20: 1,5 · 21–30: 2,6 |
| 9 | 2025/26-A | 3 | 1–20 yopiq · 21–30 ochiq |
| 9 | 2025/26-B | 2 | 1–30 yopiq |
| 10 | 2024 | 2 | 1–10: 0,9 ball · 11–20: 1,5 · 21–30: 2,6 |
| 10 | 2025/26-A | 3 | 1–20 yopiq · 21–30 ochiq |
| 10 | 2025/26-B | 3 | 1–30 yopiq |
| 11 | 2024 | 2 | 1–10: 0,9 ball · 11–20: 1,5 · 21–30: 2,6 |
| 11 | 2025/26-A | 3 | 1–20 yopiq · 21–30 ochiq |

**A va B** — oʻsha 2025/26 tuman (shahar) bosqichining ikki xil varianti;
ikkalasining muqovasida ham 2025–2026-oʻquv yili yozilgan. A da 20 ta yopiq va
10 ta ochiq savol, B da esa 30 tasi ham yopiq.

## Toʻliq boʻlmagan joyi

**9-sinf, 2025/26-B** — qoʻlda faqat 3 sahifa bor, 4-sahifasi yoʻq, shuning
uchun **30-savol tushib qolgan**. Qolgan yettita variant toʻliq.
**11-sinf uchun B varianti umuman yoʻq.**

## Mavzular xaritasi

Sakkizta variantning **hamma savoli** (239 ta) oʻqib chiqilib mavzuga
ajratildi: **Mavzular-xaritasi-9-10-11.html** (tilni almashtirgich bilan) va
**Mavzular-xaritasi-9-10-11-UZ-RU.pdf** (31 bet, avval oʻzbekcha, keyin
ruscha).

| Mavzu | Savol | Ulush |
|---|---|---|
| Algebra va ayniyatlar | 67 | 28,0 % |
| Sonlar nazariyasi | 56 | 23,4 % |
| Geometriya | 44 | 18,4 % |
| Kombinatorika va ehtimollik | 23 | 9,6 % |
| Ketma-ketliklar | 16 | 6,7 % |
| Funksiyalar | 14 | 5,9 % |
| Trigonometriya | 10 | 4,2 % |
| Matn masalalari | 9 | 3,8 % |

Hujjatda: umumiy manzara (mavzu × sinf jadvali), eng koʻp takrorlangan 12 ta
kichik mavzu, 42 ta kichik mavzu — har birida qaysi variantning qaysi savoli
ekani va qanday yechilishi haqida bir qator maslahat, soʻngra sakkizta
variantning savolma-savol xaritasi.

**Sanoq qoidasi:** savol qaysi koʻnikma bilan yechilsa, oʻsha mavzuga
kiritilgan. Shuning uchun `[x]`, `{x}` bilan tenglamalar — sonlar nazariyasida,
“nechta toʻrt xonali sonda …” turidagi savollar — kombinatorikada.

```
python3 build-mavzular.py mavzular-data.py Mavzular-xaritasi-9-10-11
```

## Qayta yigʻish · Пересборка


```
python3 build.py
```

Manbalar `manba/` ichida. Javoblar va toʻliq yechimlar alohida:
`../yechimlar/`. Reja va formulalar: `../reja/`.
