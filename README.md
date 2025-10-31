[![CI | Lint | SonarQube](https://github.com/Dmitry-Khodanitsky/connect-four/actions/workflows/CI.yml/badge.svg)](https://github.com/Dmitry-Khodanitsky/connect-four/actions/workflows/CI.yml)

# Connect Four

### Проект-игра "Четыре в ряд", реализованная на React.

<img src="src/assets/screenshots/gamefeild.png" alt="Скриншот игрового поля" width="50%" />

**Деплой:** [https://connect-four-delta.vercel.app/](https://connect-four-delta.vercel.app/)

### Как запустить

- Установить зависимости: `make install` # или npm install / yarn install
- Запуск в dev-режиме: `make dev` # или npm run dev / yarn dev
- Сборка: `make build` # или npm run build / yarn build

### На что обратить внимание при ревью

- **Чистая архитектура UI**: UI-компоненты разделены по обязанностям, с фокусом на переиспользуемости и читаемости.
- **Выделенная игровая логика**: Игровая логика (правила, валидации) полностью вынесена из компонентов в директорию src/game-logic/.
- **Кастомные хуки**: useGame для управления состоянием игры и useModal для модальных окон.
- **Анимации и UX**: Реализованы с использованием Lottie (JSON-анимации) и framer-motion для плавных переходов.
- **Сборка и проверка качества**: GitHub Workflows для CI (линт/сборка) и CD на Vercel.

### Технологии

- **React + Vite**
- **CSS**
- **Lottie-анимация (JSON)**
- **Framer Motion**

Структура ключевых директорий:

- `src/components/` — UI-компоненты (доска, ячейки, меню, панели статуса/счета).
- `src/game-logic/` — логика игры (правила, валидаторы ходов).
- `src/shared/` — хуки, стили, константы, анимации.
