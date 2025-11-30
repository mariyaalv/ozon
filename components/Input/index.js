const DEFAULT_ATTRIBUTES = {
  type: "text",
  class: "inputClassName",
};

export class Input {
  constructor(attributes, callbacks = {}) {
    this.attrs = { ...DEFAULT_ATTRIBUTES, ...attributes };
    this.callbacks = callbacks;

    this.render();
    this.init();
  }

  render() {
    this.inputEl = document.createElement("input");
  }

  init() {
    Object.entries(this.attrs).forEach(([name, value]) => {
      if (value) {
        this.inputEl.setAttribute(name, value);
      }
    });

    this.addInputEventListeners();
  }

  addClassName(className) {
    this.inputEl.classList.add(className);
  }

  removeClassName(className) {
    this.inputEl.classList.remove(className);
  }

  toggleClassName(className) {
    this.inputEl.classList.toggle(className);
  }

  setValue(value) {
    this.inputEl.value = value;
  }

  addInputEventListeners() {
    this.inputEl.addEventListener("input", (event) => {
      if (this.callbacks.onInput) {
        this.callbacks.onInput(event);
      }
    });
  }

  getElement() {
    return this.inputEl;
  }
}
