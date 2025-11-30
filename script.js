import { Input } from "./components/Input/index.js";
import { Switch } from "./components/Switch/index.js";
import { ProgressFacade } from "./components/ProgressFacade/index.js";
import { getThemeIconPath } from "./helpers/getThemeIconPath.js";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeToggleButton = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const progressContainer = document.getElementById("progress-bar-container");
  const inputValueContainer = document.getElementById("input-value-container");
  const animateSwitchContainer = document.getElementById(
    "animate-switch-container"
  );
  const hideSwitchContainer = document.getElementById("hide-switch-container");

  const updateThemeIcon = (theme) => {
    themeIcon.src = getThemeIconPath(theme);
  };

  themeToggleButton.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", next);
    updateThemeIcon(next);
  });

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
        progressBar.setValue(clampedValue);
      },
    }
  );

  const animateSwitchElement = new Switch(
    {
      name: "animate-switch",
    },
    {
      onChange: (event) => {
        progressBar.setAnimate(event.target.checked);
      },
    }
  );

  const hideSwitchElement = new Switch(
    {
      name: "hide-switch",
    },
    {
      onChange: (event) => {
        progressBar.setVisibility(!event.target.checked);
      },
    }
  );

  inputValueContainer.appendChild(inputValueElement.getElement());
  animateSwitchContainer.appendChild(animateSwitchElement.getElement());
  hideSwitchContainer.appendChild(hideSwitchElement.getElement());
  progressContainer.appendChild(progressBar.getElement());
});
