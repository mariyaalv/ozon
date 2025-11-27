# Progress Bar

Для тестового в озон я сделала круговой прогресс-бар на чистом JS с кастомными элементами. Он умеет крутиться, заполняться и выглядеть симпатично.

## Что внутри

- **ProgressBar** — кастомный элемент, рисуется через SVG
- **ProgressFacade** — простая обертка для удобного API
- **Input/Switch** — базовые компоненты для контролов

## Фичи

- Анимация вращения (можно настроить скорость)
- Плавное заполнение от 0 до текущего значения
- Градиенты (можно передавать разное количество цветов)
- Настройка размеров, толщины обводки, цветов
- Скрытие/показ
- Базовая смена темы

## Как запустить

Просто откройте страничку на github pages.

## Использование

```javascript
import { ProgressFacade } from "./components/ProgressFacade/index.js";

  const progressBar = ProgressFacade.createProgressBar({
    value: 75,
    animate: false,
    hide: false,
    gradientColors: ["#0090FF", "#005BFF", "#001CFF"],
    backgroundColor: "#e0e0e0",
    strokeWidth: 10,
    radius: 45,
    rotationSpeed: 2,
  });

// Меняем значение
progressBar.setValue(50);

// Включаем/выключаем вращение
progressBar.setAnimate(true);
```

## Параметры

| Параметр | Тип | По умолчанию | Описание |
|----------|-----|--------------|----------|
| `value` | number | 0 | Значение прогресса (0-100) |
| `animate` | boolean | true | Вращение прогресс-бара |
| `hide` | boolean | false | Скрыть элемент |
| `gradientColors` | array | ["#005bff"] | Цвета круга заполнения |
| `backgroundColor` | string | "#e0e0e0" | Цвет фона |
| `strokeWidth` | number | 10 | Толщина линии |
| `radius` | number | 40 | Радиус круга |
| `rotationSpeed` | number | 2 | Скорость вращения |

## Структура

```
├── assets/               # тут шрифты и картинки
├── helpers/              # для функций помогаторов
├── components/
│   ├── Input/            # инпут
│   ├── Switch/           # переключатель
│   ├── ProgressBar/      # сам прогресс-бар
│   └── ProgressFacade/   # API обертка
├── index.html
├── script.js
└── main.css
```