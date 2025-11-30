export const createGradient = (gradientId, colors) => {
  let offset = 0;

  const stops = colors
    .map((color) => {
      const stop = `<stop offset="${offset}%" stop-color="${color}" />`;
      offset += 100 / colors.length;
      return stop;
    })
    .join("");

  return `
    <defs>
      <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="0%">
        ${stops}
      </linearGradient>
    </defs>
  `;
};

export const createProgressBarMarkup = ({
  diameter,
  gradientMarkup,
  center,
  radius,
  backgroundColor,
  strokeWidth,
  gradientId,
}) => {
  return `
    <div class="progress-bar-container">
      <svg width="${diameter}" height="${diameter}" viewBox="0 0 ${diameter} ${diameter}">
        ${gradientMarkup}
        <circle
          class="progress-bar-bg"
          cx="${center}"
          cy="${center}"
          r="${radius}"
          fill="none"
          stroke="${backgroundColor}"
          stroke-width="${strokeWidth}"
        ></circle>
        <circle
          class="progress-bar-progress"
          cx="${center}"
          cy="${center}"
          r="${radius}"
          fill="none"
          stroke="url(#${gradientId})"
          stroke-width="${strokeWidth}"
          stroke-linecap="butt"
          transform="rotate(-90 ${center} ${center})"
        ></circle>
      </svg>
    </div>
  `;
};
