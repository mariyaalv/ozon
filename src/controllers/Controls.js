import { Input } from "../components/Input/index.js";
import { Switch } from "../components/Switch/index.js";

export class Controls {
  constructor({ containers, progressBar }) {
    this.inputValueContainer = containers.inputValue;
    this.animateSwitchContainer = containers.animateSwitch;
    this.hideSwitchContainer = containers.hideSwitch;
    this.progressBar = progressBar;
  }

  init() {
    const inputValueElement = new Input(
      {
        type: "number",
        placeholder: "0-100",
        name: "input-value",
        value: 75,
      },
      {
        onInput: (event) => {
          const value = parseInt(event.target.value, 10);
          const clampedValue = Math.min(100, Math.max(0, value));
          event.target.value = clampedValue;
          this.progressBar.setValue(clampedValue);
        },
      }
    );

    const animateSwitchElement = new Switch(
      { name: "animate-switch" },
      {
        onChange: (event) => {
          this.progressBar.setAnimate(event.target.checked);
        },
      }
    );

    const hideSwitchElement = new Switch(
      { name: "hide-switch" },
      {
        onChange: (event) => {
          this.progressBar.setVisibility(!event.target.checked);
        },
      }
    );

    this.inputValueContainer.appendChild(inputValueElement.getElement());
    this.animateSwitchContainer.appendChild(animateSwitchElement.getElement());
    this.hideSwitchContainer.appendChild(hideSwitchElement.getElement());
  }
}
