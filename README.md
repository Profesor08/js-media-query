# CSS Media query in JS

#### Basic Usage

```javascript
window.addEventListener("resize", () => {
  if (Media.min(992)) {
    console.log("Screen size is equals or bigger than 992px");
  } else {
    console.log("Screen size is lower than 992px");
  }
});
```

#### Update Global breakpoints

```javascript
Media.setBreakpoints({
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
});
```
