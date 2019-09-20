# CSS Media query in JS

[![npm](https://img.shields.io/npm/v/js-media-query.svg?style=flat-square)](https://www.npmjs.com/package/js-media-query)
![npm](https://img.shields.io/npm/dw/js-media-query.svg?style=flat-square)

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Events](#events)
- [Examples](#examples)
  - [Basic Usage](#basic-usage)
  - [Using with default breakpoints](#using-with-default-breakpoints)
  - [Using with custom breakpoints](#using-with-custom-breakpoints)
  - [Event listening](#event-listening)

## Installation

```
npm install js-media-query
```

## Usage

```javascript
import Media from "js-media-query";
```

```javascript
import { up, sm, md } from "js-media-query";
```

See [Examples](#examples)

## API

| Method           | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| `query`          | Check media query matching                                       |
| `min`            | Minimum breakpoint width                                         |
| `max`            | Maximum breakpoint width                                         |
| `up`             | Minimum breakpoint width                                         |
| `down`           | Maximum breakpoint width                                         |
| `between`        | Check if screen between the from and to breakpoints              |
| `isTouch`        | Check if is touck device                                         |
| `isMouse`        | Check if is non-touch device                                     |
| `xs`             | Check if screen is bigger or equal to xs class defined breapoint |
| `sm`             | Check if screen is bigger or equal to sm class defined breapoint |
| `md`             | Check if screen is bigger or equal to md class defined breapoint |
| `lg`             | Check if screen is bigger or equal to lg class defined breapoint |
| `xl`             | Check if screen is bigger or equal to xl class defined breapoint |
| `setBreakpoints` | Set Local class breapoints                                       |

## Events

#### `on(event, callback, media)`

| Prop       | Value                    | Required | Description                                                   |
| ---------- | ------------------------ | :------: | ------------------------------------------------------------- |
| `event`    | `in` , `out` , `changed` |   yes    | Event type                                                    |
| `callback` | `function`               |   yes    | Callback function reference                                   |
| `media`    | `function`               |   yes    | Function reference what return result of required media query |

#### `off(event, callback?, media?)`

| Prop       | Value                    | Required | Description                                                   |
| ---------- | ------------------------ | :------: | ------------------------------------------------------------- |
| `event`    | `in` , `out` , `changed` |   yes    | Event type                                                    |
| `callback` | `function`               |   yes    | Callback function reference                                   |
| `media`    | `function`               |   yes    | Function reference what return result of required media query |

## Examples

#### Basic Usage

```javascript
import { min } from "js-media-query";

window.addEventListener("resize", () => {
  if (min(992)) {
    console.log("Screen size is equals or bigger than 992px");
  } else {
    console.log("Screen size is lower than 992px");
  }
});
```

#### Using with default breakpoints

```javascript
import Media from "js-media-query";

if (Media.sm()) {
  // Your code
}
```

#### Using with custom breakpoints

```javascript
import { Media } from "js-media-query";

const media = new Media({
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
});

if (media.md()) {
  // Execute code if screen size is bigger or equals to 768px
}
```

#### Event listening

```javascript
import { Media } from "js-media-query";

const media = new Media();

const changedHandler = () => {
  console.log("changed");
};

const mediaFn = () => media.up(768);

// Add event listener
media.on("changed", changedHandler, mediaFn);

// Remove all event listeners of event type
media.off("changed");

// Remove event listener of event type
media.off("changed", changedHandler);

// Remove event listener of event type on with specific media function
media.off("changed", changedHandler, mediaFn);
```

#### `@media (min-width: 768px) AND (max-width: 992px)`

```javascript
Media.between(768, 992); // true | false
```

#### `@media (pointer: coarse)`

```javascript
Media.isTouch(); // true | false
```

#### `@media (min-width: 992px)`

```javascript
Media.min(992); // true | false
```

#### `@media (max-width: 991px)`

```javascript
Media.down(991); // true | false
```

#### `@media (min-width: 1200px)`

```javascript
Media.xl(); // true | false
```
