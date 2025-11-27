import { ProgressBar } from "../ProgressBar/index.js";

export class ProgressFacade {
  static createProgressBar(options = {}) {
    const progressBar = new ProgressBar(options);

    return {
      setValue: (value) => progressBar.setValue(value),
      setAnimate: (animate) => progressBar.setAnimate(animate),
      setVisibility: (visible) => progressBar.setVisibility(visible),
      getElement: () => progressBar,
    };
  }
}
