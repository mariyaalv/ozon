import { ProgressBar } from "../components/ProgressBar/index.js";

export class Progress {
  constructor({ container }) {
    this.container = container;
    this.progressBar = null;
  }

  init() {
    const progressBar = new ProgressBar({
      value: 75,
      animate: false,
      hide: false,
      gradientColors: ["#0090FF", "#005BFF", "#001CFF"],
      backgroundColor: "#e0e0e0",
      strokeWidth: 10,
      radius: 45,
      rotationSpeed: 2,
    });

    this.progressBar = progressBar;
    this.container.appendChild(progressBar);
  }

  getInstance() {
    return this.progressBar;
  }
}
