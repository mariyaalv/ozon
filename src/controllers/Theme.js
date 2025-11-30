import { getThemeIconPath } from "../helpers/getThemeIconPath.js";

export class Theme {
  constructor({ root, themeToggleButton, themeIcon }) {
    this.root = root;
    this.themeToggleButton = themeToggleButton;
    this.themeIcon = themeIcon;
  }

  initTheme() {
    const updateThemeIcon = (theme) => {
      this.themeIcon.src = getThemeIconPath(theme);
    };

    this.themeToggleButton.addEventListener("click", () => {
      const current = this.root.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";

      this.root.setAttribute("data-theme", next);
      updateThemeIcon(next);
    });
  }
}
