# Русский Ритм — школа социальных танцев в Анапе

Сальса, бачата, кизомба для взрослых. Лендинг на AstroJS + DaisyUI.

## О проекте

- **Школа:** Русский Ритм
- **Город:** Анапа, Строительный пер., 28
- **Рейтинг:** ⭐ 4.9 (Яндекс.Карты, 24 оценки) · Хорошее место 2026
- **Контакты:** +7 (952) 878-22-45 (Анна), +7 (953) 105-10-02 (Александр)
- **VK:** [vk.com/ritmoruso_anapa](https://vk.com/ritmoruso_anapa)
- **Часы:** Пн–Пт, 19:00–22:00
- **Направления:** Сальса, Бачата, Кизомба, Руэда, Lady Style, УрбанКиз

## Быстрый старт

```bash
# Установка
cd docs/prototypes/russkiy-ritm && npm install

# Dev-сервер
npm run dev -- --host 0.0.0.0

# Билд
npm run build
```

## Деплой на GitHub Pages

1. В `astro.config.mjs` замени `GITHUB_USER` и `GITHUB_REPO` на реальные значения.
2. Включи GitHub Pages в Settings репозитория → Source: **GitHub Actions**.
3. Пуш в `main` запускает деплой автоматически (`.github/workflows/deploy.yml`).

## Структура

```
├── .gitignore
├── .github/workflows/deploy.yml        # GitHub Pages deploy
├── AGENTS.md                            # правила для AI-агентов
├── DESIGN.md                            # дизайн-токены
├── MARKETING.md                         # маркетинговая стратегия
├── Makefile                             # команды запуска
├── .agents/                             # навыки и роли AI-агентов
└── docs/
    ├── rfc/
    │   └── russkiy-ritm-homepage.md     # page design RFC
    └── prototypes/
        ├── _slug_/                      # reusable шаблон прототипа
        └── russkiy-ritm/                # прототип Русский Ритм
            ├── astro.config.mjs
            ├── package.json
            ├── public/                  # статика (фото, иконки)
            │   ├── *.jpg / *.png        # фото для галереи
            │   └── ...
            └── src/
                ├── assets/app.css
                ├── layouts/Layout.astro
                └── pages/index.astro
```

## Как добавить фото и карту

### Фото (секция Галерея)
1. Положи `.jpg` / `.png` в `docs/prototypes/<slug>/public/`
2. В `src/pages/index.astro` найди секцию `ГАЛЕРЕЯ` (блок #7 в шаблоне)
3. Замени `<p class="...">[ФОТО N]</p>` на `<img src="/имя-файла.jpg" alt="Описание" class="aspect-[4/3] w-full object-cover" loading="lazy" />`
4. Заполни `<figcaption>` осмысленной подписью

### Яндекс.Карта (секция Карта)
1. Найди нужный адрес на [yandex.ru/maps](https://yandex.ru/maps) и скопируй координаты
2. В `index.astro` найди секцию `КАРТА` (блок #8 в шаблоне)
3. Замени `[LON]` и `[LAT]` в URL iframe на реальные координаты
4. Чтобы добавить маркер — допиши `&pt=LON,LAT,pm2rdm` в URL
5. Заполни адрес и ориентиры в тексте
            ├── package.json
            └── src/
                ├── assets/app.css
                ├── layouts/Layout.astro
                └── pages/index.astro
```

## Что уже сделано

- ✅ RFC с 9 секциями лендинга
- ✅ Наполнен MARKETING.md (ICP, боли, SEO-ключи, пиллары)
- ✅ Настроены дизайн-токены в DESIGN.md и app.css
- ✅ Полноценный прототип на AstroJS + DaisyUI
- ✅ Workflow для GitHub Pages
- ✅ FAQ, отзывы, расписание, цены — из реальных источников
