const container = document.querySelector(".examples");

let store = [];

function set(newStore, fn) {
  let needsUpdate = false;

  if (store.length !== newStore.length) {
    needsUpdate = true;
  } else {
    for (let i = 0; i < store.length; i++) {
      if (
        store[i][0] !== newStore[i][0] ||
        store[i][1] !== newStore[i][1] ||
        store[i][2] !== newStore[i][2]
      ) {
        needsUpdate = true;
        break;
      }
    }
  }

  if (needsUpdate) {
    store = newStore;
    fn(store);
  }
}

function update() {
  const newStore = [];

  newStore.push([
    "@media (pointer: coarse)",
    "Media.query(`(pointer: coarse)`)",
    Media.query(`(pointer: coarse)`),
  ]);

  newStore.push([
    "@media (min-width: 992px)",
    "Media.min(992)",
    Media.min(992),
  ]);

  newStore.push([
    "@media (max-width: 991px)",
    "Media.max(991)",
    Media.max(991),
  ]);

  newStore.push(["@media (up-width: 992px)", "Media.up(992)", Media.up(992)]);

  newStore.push([
    "@media (down-width: 991px)",
    "Media.down(991)",
    Media.down(991),
  ]);

  newStore.push([
    "@media (pointer: coarse)",
    "Media.isTouch()",
    Media.isTouch(),
  ]);

  newStore.push(["@media (pointer: fine)", "Media.isMouse()", Media.isMouse()]);

  newStore.push(["@media (min-width: 0px)", "Media.xs()", Media.xs()]);
  newStore.push(["@media (min-width: 576px)", "Media.sm()", Media.sm()]);
  newStore.push(["@media (min-width: 768px)", "Media.md()", Media.md()]);
  newStore.push(["@media (min-width: 992px)", "Media.lg()", Media.lg()]);
  newStore.push(["@media (min-width: 1200px)", "Media.xl()", Media.xl()]);

  set(newStore, function(store) {
    render(store);
  });
}

function template(css, js, result) {
  const className = "example is-" + (result ? "positive" : "negative");

  return (
    // prettier-ignore
    '<div class="' + className + '">' +
      '<pre>' +
        '// CSS Media query\n' + 
        css + '\n' +
        '\n' +
        '// JS Media query\n' +
        js + ' // <span class="result">' + result + '</span>\n' +
      '</pre>' +
    '</div>'
  );
}

function render(store) {
  if (container instanceof HTMLElement) {
    const templates = [];

    store.forEach(function(item) {
      templates.push(template(item[0], item[1], item[2]));
    });

    container.innerHTML = templates.join("");
  }
}

function windowResizeHandler() {
  update();
}

if (container instanceof HTMLElement) {
  update();
  window.addEventListener("resize", windowResizeHandler);
}
