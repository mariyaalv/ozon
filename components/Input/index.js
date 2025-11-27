const DEFAULT_ATTRIBUTES = {
  type: "text",
  class: "inputClassName",
};

export class Input extends HTMLInputElement {
  constructor(attributes, callbacks = {}) {
    super();

    this.attrs = { ...DEFAULT_ATTRIBUTES, ...attributes};
    this.callbacks = callbacks;

    this.init();
  }

  init() {
    Object.entries(this.attrs).forEach(([name, value]) => {
      if (value) {
        this.setAttribute(name, value);
      }
    });

    this.addInputEventListeners();
  }

  addClassName(className) {
    this.classList.add(className);
  }

  removeClassName(className) {
    this.classList.remove(className);
  }

  toggleClassName(className) {
    this.classList.toggle(className);
  }

  setValue(value) {
    this.value = value;
  }

  addInputEventListeners() {
    this.addEventListener("input", (event) => {
      if (this.callbacks.onInput) {
        this.callbacks.onInput(event);
      }
    });
  }
}

customElements.define("custom-input", Input, { extends: "input" });
