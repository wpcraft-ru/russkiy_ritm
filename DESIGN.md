# DESIGN.md

> Дизайн-система для AI-агентов. Формат: Markdown + YAML frontmatter.
> Все токены и правила в одном месте — агент читает и применяет.

---

## Context

- **Проект:** Русский Ритм — Школа социальных танцев в Анапе
- **Платформа:** Статический HTML-сайт (будет) / AstroJS прототипы
- **Workflow:** При проработке дизайна любой страницы — детали сохраняются в RFC `./docs/rfc/` в формате md
- **Конвенция:** Каждый RFC-файл описывает один page design с деталями, секциями, текстами
- **Прототипирование:** HTML-прототипы собираются на **AstroJS + DaisyUI** в папке `./docs/prototypes/<slug>/`
- **Design source of truth:** `DESIGN.md` — единый источник токенов для AI-агентов

---

## Overview

- **Стиль:** Современный лендинг — тёмная палитра, яркие акценты, чистая типографика
- **Настроение:** Энергичное, профессиональное, гостеприимное
- **Для кого:** смотри MARKETING.md — целевая аудитория

## Design Tokens

### Colors

```yaml
colors:
  primary: "#E53935"     # основной акцент — страстный красный (CTA, выделения)
  primary-hover: "#C62828"       # hover primary (темнее primary на ~15%)
  secondary: "#FF8F00"           # вторичный акцент — янтарный/золотой
  success: "#43A047"
  warning: "#FFA000"
  danger: "#E53935"
  background: "#1A1A2E"       # тёмный charcoal — основной фон
  surface: "#16213E"     # тёмно-синий — фон карточек и секций
  surface-alt: "#0F3460" # более светлый — для hover и акцентов
  text-primary: "#FFFFFF"        # белый — заголовки
  text-secondary: "#E0E0E0"      # светло-серый — тело текста
  text-tertiary: "#9E9E9E"       # серый — meta, muted
  border: "#FFFFFF"              # белый бордер 1px (на тёмном фоне)
  border-light: "#3A3A5C"       # тёмный приглушённый бордер
  cta-text: "#FFFFFF"            # текст на CTA-кнопках
```

### Typography

```yaml
typography:
  font-heading: "Poppins, sans-serif"
  font-body: "Poppins, sans-serif"
  font-mono: "JetBrains Mono, monospace"
  font-data: "JetBrains Mono, monospace"

  h1:
    fontFamily: "{typography.font-heading}"
    fontSize: "64px"
    fontWeight: 700
    lineHeight: 1.05

  h2:
    fontFamily: "{typography.font-heading}"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: 1.1

  h3:
    fontFamily: "{typography.font-heading}"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: 1.2

  body:
    fontFamily: "{typography.font-body}"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6

  body-lg:
    fontFamily: "{typography.font-body}"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55

  small:
    fontFamily: "{typography.font-body}"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5

  meta:
    fontFamily: "{typography.font-mono}"
    fontSize: "12px"
    fontWeight: 400

  cta-link:
    fontFamily: "{typography.font-mono}"
    fontSize: "13px"
    fontWeight: 400

  data-number:
    fontFamily: "{typography.font-data}"
    fontSize: "24px"
    fontWeight: 700

  card-title:
    fontFamily: "{typography.font-body}"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.2
```

### Spacing

```yaml
spacing:
  2xs: "2px"
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "32px"
  3xl: "48px"
```

### Border Radius

```yaml
rounded:
  none: "0px"
  sm: "4px"
  md: "8px"
  lg: "10px"
  xl: "16px"
```

### Shadows

```yaml
shadows:
  none: "none"
  sm: "0 1px 2px rgba(0,0,0,0.05)"
```

## Layout

- **Max width:** 1200px (контент), 1440px (дизайн-макет)
- **Padding:** 48px горизонтальный (десктоп), 28px (блоки)
- **Grid:** flexbox, gap по токенам spacing
- **Breakpoints:**
  - Mobile: ≤ 640px
  - Tablet: ≤ 1024px
  - Desktop: > 1024px
- **Mobile-first:** стили пишутся для мобильных, затем расширяются

### Секция-padding

```yaml
section-padding:
  desktop: "28px"
  mobile: "16px"
```

## Components

### Button Primary (CTA)

```yaml
button-primary:
  backgroundColor: "{colors.primary}"
  textColor: "#FFFFFF"
  borderRadius: "0px"
  borderWidth: "1px"
  borderColor: "{colors.border}"
  padding: "12px 20px"
  fontSize: "16px"
  fontWeight: 600
  fontFamily: "{typography.font-body}"
  transition: "all 0.15s ease"
  hover:
    backgroundColor: "{colors.primary-hover}"
```

### Card

```yaml
card:
  backgroundColor: "{colors.surface}"
  borderColor: "{colors.border}"
  borderWidth: "1px"
  borderRadius: "0px"
  padding: "{spacing.xl}"
  gap: "{spacing.md}"
```

### Section Frame

```yaml
section:
  background-dark: "{colors.background}"
  background-darker: "{colors.surface}"
  borderColor: "{colors.border-light}"
  borderWidth: "1px"
  padding: "28px"
  gap: "14px"
```

## Page Patterns

### Landing Page Structure (9 блоков)

| # | Блок | Фон | Содержимое |
|---|------|-----|------------|
| 1 | Hero | background (#1A1A2E) | h1 + subtitle + meta-tags + буллеты + CTA |
| 2 | О нас | surface (#16213E) | h2 + 3 карточки + CTA |
| 3 | Продукты/Услуги | background (#1A1A2E) | h2 + 3 категории + CTA |
| 4 | Ключевая фишка | surface (#16213E) | h2 + 4 stat-блока + CTA |
| 5 | События/Процесс | background (#1A1A2E) | h2 + 3 карточки + CTA |
| 6 | Галерея | surface (#16213E) | h2 + сетка фото + CTA |
| 7 | Отзывы | background (#1A1A2E) | h2 + stats + цитаты + CTA |
| 8 | FAQ | surface (#16213E) | h2 + аккордеон вопросов |
| 9 | Контакты + Форма | background (#1A1A2E) | h2 + контакты + форма |

### Hero Section

- h1, 64px (моб 40px), fontWeight 700, lineHeight 1.05
- Subtitle, 18px, цвет text-secondary
- Meta-tags: JetBrains Mono, 12px, цвет text-tertiary, формат `[VALUE / VALUE]`
- CTA: кнопка primary
- Фон: background

### Card Grid

- 3 колонки на десктопе, stack на мобильных
- Карточки с белым бордером 1px, без скруглений
- gap: 12px

### Meta Labels

- JetBrains Mono, 12px, цвет text-tertiary
- Формат: `[KEYWORD / KEYWORD]` или `[METADATA / VALUE]`

## Interaction States

| State | Description |
|-------|-------------|
| Default | Обычный вид |
| Hover | `cursor: pointer`, визуальный feedback |
| Focus | Accessibility ring — `outline: 2px solid {colors.primary}` |
| Disabled | `opacity: 0.5`, `cursor: not-allowed` |

Транзиции: `transition: all 0.15s ease`

## Accessibility

- **Контраст:** WCAG AA минимум (4.5:1 текст, 3:1 UI)
- **Focus visible:** Все интерактивные элементы — видимый фокус
- **Семантика:** Правильные HTML-теги
- **Alt text:** У всех изображений
- **Touch targets:** Минимум 44×44px

## Do's and Don'ts

### ✅ Do

- Использовать белый бордер 1px без скруглений на тёмном фоне
- Чередовать background / surface фон секций
- Использовать {{FONT_FAMILY}} для заголовков и тела
- Meta-информацию в JetBrains Mono
- Сохранять page design RFCs в `./docs/rfc/`

### ❌ Don't

- Использовать скругления на карточках и кнопках
- Использовать цвета вне палитры
- Добавлять inline styles
- Использовать `!important`
- Использовать светлые фоны — сайт тёмный
