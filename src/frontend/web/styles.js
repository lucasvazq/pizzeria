const defaultEnv = require("./default-env")

module.exports = {
  colors: {
    // DaisyUI colors names.
    //
    // Documentation:
    // - https://github.com/saadeghi/daisyui/blob/master/src/colors/colorNames.js
    info: defaultEnv.COLOR_INFO,
    success: defaultEnv.COLOR_SUCCESS,
    warning: defaultEnv.COLOR_WARNING,
    error: defaultEnv.COLOR_ERROR,
    primary: defaultEnv.COLOR_PRIMARY,
    "primary-focus": defaultEnv.COLOR_PRIMARY_FOCUS,
    "primary-content": defaultEnv.COLOR_PRIMARY_CONTENT,
    secondary: defaultEnv.COLOR_SECONDARY,
    "secondary-focus": defaultEnv.COLOR_SECONDARY_FOCUS,
    "secondary-content": defaultEnv.COLOR_SECONDARY_CONTENT,
    accent: defaultEnv.COLOR_ACENT,
    "accent-focus": defaultEnv.COLOR_ACENT_FOCUS,
    "accent-content": defaultEnv.COLOR_ACENT_CONTENT,
    neutral: defaultEnv.COLOR_NEUTRAL,
    "neutral-focus": defaultEnv.COLOR_NEUTRAL_FOCUS,
    "neutral-content": defaultEnv.COLOR_NEUTRAL_CONTENT,
    "base-100": defaultEnv.COLOR_BASE_100,
    "base-200": defaultEnv.COLOR_BASE_200,
    "base-300": defaultEnv.COLOR_BASE_300,
    "base-content": defaultEnv.COLOR_BASE_CONTENT,
  },
}
