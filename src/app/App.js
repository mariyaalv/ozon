import { Progress } from "../controllers/Progress.js";
import { Controls } from "../controllers/Controls.js";
import { Theme } from "../controllers/Theme.js";

export default class App {
  constructor() {
    this.root = document.documentElement;

    this.themeToggleButton = document.getElementById("theme-toggle");
    this.themeIcon = document.getElementById("theme-icon");

    this.progressContainer = document.getElementById("progress-bar-container");

    this.inputValueContainer = document.getElementById("input-value-container");
    this.animateSwitchContainer = document.getElementById(
      "animate-switch-container"
    );
    this.hideSwitchContainer = document.getElementById("hide-switch-container");

    this.theme = null;
    this.progressBar = null;
    this.controls = null;
  }

  initTheme() {
    this.theme = new Theme({
      root: this.root,
      themeToggleButton: this.themeToggleButton,
      themeIcon: this.themeIcon,
    });
    this.theme.initTheme();
  }

  initProgressBar() {
    this.progressBar = new Progress({
      container: this.progressContainer,
    });
    this.progressBar.init();
  }

  initControls() {
    this.controls = new Controls({
      containers: {
        inputValue: this.inputValueContainer,
        animateSwitch: this.animateSwitchContainer,
        hideSwitch: this.hideSwitchContainer,
      },
      progressBar: this.progressBar.getInstance(),
    });
    this.controls.init();
  }

  render() {
    this.initTheme();
    this.initProgressBar();
    this.initControls();
  }
}
