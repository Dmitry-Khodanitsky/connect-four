[![CI](https://github.com/Dmitry-Khodanitsky/connect-four/actions/workflows/CI.yml/badge.svg?event=status)](https://github.com/Dmitry-Khodanitsky/connect-four/actions/workflows/CI.yml)
[![Deployment](https://img.shields.io/badge/deployment-vercel-black)](https://connect-four-delta.vercel.app/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2-61dafb)](https://reactjs.org/)

# 🎮 Connect Four

### Игра "Четыре в ряд", реализованная на React и TS.

<img src="src/assets/screenshots/gamefeild.png" alt="Скриншот игрового поля" width="50%" />

### 🚀 Поиграть: [https://connect-four-delta.vercel.app/](https://connect-four-delta.vercel.app/)

### 🏃‍♂️ Как запустить

- Установить зависимости: `make install` или `npm install` / `yarn install`
- Запуск в dev-режиме: `make dev` или `npm run dev` / `yarn dev`
- Сборка: `make build` или `npm run build` / `yarn build`

### 🔍 На что обратить внимание при ревью

- **Архитектура** - разделение логики и UI компонентов
- **Типизация** - полное покрытие TypeScript
- **Кастомные хуки**: useGame для управления состоянием игры и useModal для модальных окон.
- **Анимации и UX**: Реализованы с использованием Lottie (JSON-анимации) и framer-motion для плавных переходов.
- **Сборка и проверка качества**: GitHub Workflows для CI (линт/сборка) и CD на Vercel.

### 🛠️ Технологии

- **TypeScript**
- **React + Vite**
- **CSS**
- **Lottie-анимация (JSON)**
- **Framer Motion**

### 📄 Ключевые директории:

- `src/components/` — UI-компоненты (доска, ячейки, меню, панели статуса/счета).
- `src/screens/` - экраны главного меню и игрового поля.
- `src/game-logic/` — логика игры, правила, валидаторы ходов.
- `src/shared/` — хуки, стили, константы, типы, анимации.
