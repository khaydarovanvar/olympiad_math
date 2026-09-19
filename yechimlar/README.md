# Yechimlar · Решения

Uzbek + Russian worked solutions for four papers, 90 + 20 problems in all.

| Fayl | Mazmuni |
|---|---|
| `Matematika-9-yechimlar-UZ-RU.pdf` | 2025/2026 tuman (shahar) bosqichi, 9-sinf — 30 masala |
| `Matematika-10-yechimlar-UZ-RU.pdf` | 2025/2026 tuman (shahar) bosqichi, 10-sinf — 30 masala |
| `Matematika-11-yechimlar-UZ-RU.pdf` | 2025/2026 tuman (shahar) bosqichi, 11-sinf — 30 masala |
| `20-masala-yechimlar-UZ-RU.pdf` | Matematikadan 20 ta masala (RU/UZ varaqasi) — 20 masala |

Har bir masala uchun: javob, oʻzbekcha toʻliq yechim, ruscha toʻliq yechim.
Har bir faylning boshida javoblar jadvali bor.

Для каждой задачи: ответ, полное решение на узбекском и на русском.
В начале каждого файла — таблица ответов.

## Qayta yigʻish · Пересборка

```
cd yechimlar/manba
python3 render.py g09.py g09.html
node topdf.js g09
```

Formulalar KaTeX bilan teriladi (`site/assets/vendor/katex`), PDF Chromium orqali
chop etiladi. Barcha sonli javoblar dastur bilan tekshirilgan.
