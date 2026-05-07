# Site Template — AI-powered landing page builder

Универсальный шаблон для создания лендингов через AI-ассистента.

## Как использовать

### 1. Копируй шаблон в новый проект

```bash
cp -r template/ ../my-new-site/
cd ../my-new-site
```

### 2. Заполни переменные

Замени все `{{VARIABLE}}` в файлах `.template` на реальные значения.
Пример скрипта:

```bash
# project identity
PROJECT_NAME="Мой Проект"
PROJECT_SLUG="my-project"
PROJECT_ONE_LINER="Лучший сервис в городе"

# design tokens
PRIMARY_COLOR_HEX="#E53935"
PRIMARY_OKLCH="oklch(55% 0.22 25)"
BG_DARK="oklch(15% 0.01 30)"
BG_SURFACE="oklch(20% 0.015 35)"
BASE_CONTENT="oklch(92% 0.01 70)"

# fonts (Google Fonts)
FONT_FAMILY="Poppins"
FONT_URL="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"

# find and rename .template files
find . -name '*.template' | while read f; do
  out="${f%.template}"
  sed -i '' \
    -e "s|{{PROJECT_NAME}}|$PROJECT_NAME|g" \
    -e "s|{{PROJECT_SLUG}}|$PROJECT_SLUG|g" \
    ... \
    "$f"
  mv "$f" "$out"
done
```

### 3. Переименуй `_slug_` в свой slug

```bash
mv docs/prototypes/_slug_ "docs/prototypes/$PROJECT_SLUG"
```

### 4. Запусти прототип

```bash
cd "docs/prototypes/$PROJECT_SLUG" && npm install && npm run dev
```

### 5. Наполни контентом

Дай AI-ассистенту ссылки на Яндекс.Карты / 2ГИС / сайт заведения и скажи:
> «На основании вводной информации сгенерируй сайт по шаблону проекта»

---

## Структура шаблона

```
├── .gitignore
├── .github/workflows/deploy.yml              # GitHub Pages deploy
├── AGENTS.md                                  # правила для AI-агентов
├── DESIGN.md                                  # дизайн-токены
├── MARKETING.md                               # маркетинговая стратегия
├── Makefile                                   # команды запуска
├── .agents/
│   ├── CONTEXT.md                             # контекст проекта
│   ├── teammates/                             # роли AI-агентов
│   └── skills/                                # скиллы AI-агентов
└── docs/
    ├── prototypes/_slug_/                     # AstroJS + DaisyUI прототип
    │   ├── package.json
    │   ├── astro.config.mjs
    │   └── src/
    │       ├── assets/app.css
    │       ├── layouts/Layout.astro
    │       └── pages/index.astro
    └── rfc/                                   # сюда сложатся RFC файлы
```

## Переменные для замены

| Переменная | Описание | Пример |
|-----------|----------|--------|
| `{{PROJECT_NAME}}` | Название проекта | `Chili Karaoke Bar` |
| `{{PROJECT_SLUG}}` | URL-slug проекта | `chili` |
| `{{PROJECT_ONE_LINER}}` | Описание в одну строку | `Караоке-бар в Анапе` |
| `{{PRIMARY_HEX}}` | Основной цвет HEX | `#E53935` |
| `{{PRIMARY_OKLCH}}` | Основной цвет OKLCH | `oklch(55% 0.22 25)` |
| `{{BG_DARK_OKLCH}}` | Тёмный фон OKLCH | `oklch(15% 0.01 30)` |
| `{{BG_SURFACE_OKLCH}}` | Фон карточек OKLCH | `oklch(20% 0.015 35)` |
| `{{TEXT_CONTENT_OKLCH}}` | Цвет текста OKLCH | `oklch(92% 0.01 70)` |
| `{{FONT_FAMILY}}` | Шрифт (без fallback) | `Poppins` |
| `{{FONT_URL}}` | URL Google Fonts | `https://...` |
| `{{GITHUB_USER}}` | GitHub username | `aiiddqd` |
| `{{GITHUB_REPO}}` | GitHub repo name | `chili` |
| `{{PHONE}}` | Телефон | `+7 (938) 502-33-22` |

## Что делает AI-ассистент

1. Собирает данные заведения (Яндекс.Карты, 2ГИС, сайт)
2. Создаёт RFC в `docs/rfc/{{PROJECT_SLUG}}-homepage.md`
3. Генерирует контент для всех секций
4. Подбирает дизайн-токены под бренд
5. Собирает прототип на AstroJS + DaisyUI
6. Наполняет MARKETING.md SEO-ключами
