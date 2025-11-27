import { Input } from "../Input/index.js";

const DEFAULT_ATTRIBUTES = {
  type: "checkbox",
  class: "toggleCheckbox",
  checked: false,
};

export class Switch extends Input {
  constructor(attributes, callbacks = {}) {
    const defaultAttributes = {
      ...DEFAULT_ATTRIBUTES,
      ...attributes,
    };

    super(defaultAttributes, callbacks);
  }

  init() {
    super.init();

    if (this.checked) {
      this.addClassName("toggleChecked");
    }

    this.addSwitchEventListeners();
  }

  addSwitchEventListeners() {
    this.addEventListener("change", (event) => {
      const isChecked = event.target.checked;

      this.setAttribute("checked", isChecked);
      this.toggleClassName("toggleChecked");

      if (this.callbacks.onChange) {
        this.callbacks.onChange(event);
      }
    });
  }
}

customElements.define("custom-switch", Switch, { extends: "input" });
