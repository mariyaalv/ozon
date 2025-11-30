import {
  createGradient,
  createProgressBarMarkup,
} from "./progressBarMarkup.js";
import {
  MIN_PROGRESS,
  MAX_PROGRESS,
  FULL_CIRCLE,
  STROKE_TRANSITION,
  NO_TRANSITION,
} from "./consts.js";

const DEFAULT_OPTIONS = {
  value: 0,
  animate: true,
  hide: false,
  gradientColors: ["#005bff"],
  backgroundColor: "#e0e0e0",
  strokeWidth: 10,
  radius: 40,
  rotationSpeed: 2,
};

export class ProgressBar extends HTMLElement {
  static instanceCounter = 0;

  constructor(options = {}) {
    super();
    this.instanceId = ++ProgressBar.instanceCounter;

    this.options = {
      ...DEFAULT_OPTIONS,
      ...options,
    };

    this.#init();
  }

  #init() {
    this.id = `progress-bar-${this.instanceId}`;
    this.classList.add("progressBar");

    this.#render();

    this.#updateProgress(this.options.value);
    this.setVisibility(!this.options.hide);

    if (this.options.animate) {
      this.#startRotation();
    }
  }

  #render() {
    const { radius, strokeWidth, gradientColors, backgroundColor } =
      this.options;

    const diameter = (radius + strokeWidth) * 2;
    const center = diameter / 2;

    const gradientId = `progress-gradient-${this.instanceId}`;

    const gradientMarkup = createGradient(gradientId, gradientColors);

    this.innerHTML = createProgressBarMarkup({
      diameter,
      gradientMarkup,
      center,
      radius,
      backgroundColor,
      strokeWidth,
      gradientId,
    });

    this.svg = this.querySelector("svg");
    this.progressCircle = this.querySelector(".progress-bar-progress");
  }

  #updateProgress(value) {
    const clampedValue = Math.min(MAX_PROGRESS, Math.max(MIN_PROGRESS, value));

    const circleLength = FULL_CIRCLE * this.options.radius;

    const offset = circleLength * (1 - clampedValue / MAX_PROGRESS);

    this.progressCircle.style.transition = this.options.animate
      ? STROKE_TRANSITION
      : NO_TRANSITION;

    this.progressCircle.style.strokeDasharray = `${circleLength}`;
    this.progressCircle.style.strokeDashoffset = offset;
  }

  setAnimate(animate) {
    this.options.animate = animate;
    if (animate) {
      this.#startRotation();
    } else {
      this.#stopRotation();
    }
  }

  #startRotation() {
    this.classList.add("progress-rotating");
    this.classList.remove("progress-paused");
    this.svg.style.animationDuration = `${this.options.rotationSpeed}s`;
  }

  #stopRotation() {
    this.classList.add("progress-paused");
  }

  setVisibility(visible) {
    this.options.hide = !visible;
    this.classList.toggle("progressBarHidden", !visible);
  }

  setValue(value) {
    this.#updateProgress(value);
  }
}

customElements.define("progress-bar", ProgressBar);
