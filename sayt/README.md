# Sayt · Сайт

Butun toʻplamni bitta joyga yigʻadigan statik sayt: hech qanday server yoki
qurilma kerak emas, `index.html` ni ochsa boʻladi.

| Sahifa | Nima |
|---|---|
| `index.html` | bosh sahifa: mavzular ulushi va yuklab olish |
| `savollar.html` | **oʻtgan yillar savollari** — 239 tasi, sinf va mavzu boʻyicha filtr bilan; 94 tasining toʻliq matni |
| `mavzular.html` | mavzular xaritasi (`savollar/build-mavzular.py` dan) |
| `sonlar-nazariyasi.html` | maʼlumotnoma (`dars/` dan) |
| `geometriya.html` | maʼlumotnoma (`dars/` dan) |

Til almashtirgichi menyuda, tanlov `localStorage` da saqlanadi va hamma
sahifada bir xil ishlaydi.

`assets/` — KaTeX (bir marta, hamma sahifa shundan oladi) va sayt uslublari.
`yuklab/` — toʻrtta PDF, shu jumladan variantlarning asl varaqalari.

## Qayta yigʻish

```
python3 build-sayt.py
```

Yasovchi avval `dars/build-nazariya.py` va `savollar/build-mavzular.py` ni
ishga tushiradi, soʻngra ular yasagan sahifalardan ichiga solingan KaTeX ni
olib tashlab, tepasiga sayt menyusini qoʻyadi.
