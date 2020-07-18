export const animationConfig = {
  timelineBase: {
    duration: 800,
    easing: "easeInOutCirc",
  },
  waveEffectForward: {
    targets: ".js-anime-wave-effect",
    scale: 50,
  },
  waveEffectBackward: {
    targets: ".js-anime-wave-effect",
    scale: 1,
  },
  formEffectForward: {
    targets: ".js-anime-search-form",
    opacity: [0, 1],
    duration: 100,
  },
  formEffectBackward: {
    targets: ".js-anime-search-form",
    opacity: [1, 0],
    duration: 100,
  },
};
