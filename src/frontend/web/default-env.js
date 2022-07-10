const COLOR_WHITE = "#f9f9f9"
const COLOR_BLACK = "#333333"
const COLOR_FOREGROUND = COLOR_WHITE
const COLOR_BACKGROUND = COLOR_BLACK
const COLOR_BACKGROUND_OVER_FOREGROUND_5_PERCENT = "#efefef"
const COLOR_BACKGROUND_OVER_FOREGROUND_10_PERCENT = "#e5e5e5"
const COLOR_BACKGROUND_OVER_FOREGROUND_15_PERCENT = "#eaeaea"
const COLOR_BACKGROUND_OVER_FOREGROUND_30_PERCENT = "#dbdbdb"

const COLOR_INFO = "#54c6eb"
const COLOR_SUCCESS = "#5dd39e"
const COLOR_WARNING = "#ffd972"
const COLOR_ERROR = "#ff6b6c"
const COLOR_PRIMARY = "#0068ff"
const COLOR_PRIMARY_FOCUS = "#0050c4"
const COLOR_PRIMARY_CONTENT = COLOR_FOREGROUND
const COLOR_SECONDARY = "#3bedba"
const COLOR_SECONDARY_FOCUS = "#2fbd94"
const COLOR_SECONDARY_CONTENT = COLOR_BACKGROUND
const COLOR_ACENT = COLOR_PRIMARY
const COLOR_ACENT_FOCUS = COLOR_PRIMARY_FOCUS
const COLOR_ACENT_CONTENT = COLOR_PRIMARY_CONTENT
const COLOR_NEUTRAL = COLOR_FOREGROUND
const COLOR_NEUTRAL_FOCUS = COLOR_BACKGROUND_OVER_FOREGROUND_30_PERCENT
const COLOR_NEUTRAL_CONTENT = COLOR_BACKGROUND
const COLOR_BASE_100 = COLOR_BACKGROUND_OVER_FOREGROUND_5_PERCENT
const COLOR_BASE_200 = COLOR_BACKGROUND_OVER_FOREGROUND_10_PERCENT
const COLOR_BASE_300 = COLOR_BACKGROUND_OVER_FOREGROUND_15_PERCENT
const COLOR_BASE_CONTENT = COLOR_BACKGROUND

// The export type must accomplish the structure defined in `global.d.ts`
module.exports = {
  // ===================================================================
  // Basic Configuration.
  // ===================================================================

  READY: "false",
  // BACKEND_USERS_HOST
  // BACKEND_PIZZAS_HOST

  // ===================================================================
  // Screens.
  // ===================================================================

  // Values in pixels.
  SCREEN_SM: "640",
  SCREEN_MD: "768",
  SCREEN_LG: "1024",
  SCREEN_XL: "1280",
  SCREEN_2XL: "1536",

  // ===================================================================
  // Colors.
  // ===================================================================
  // Must accomplish the following regex: `#[0-9a-f]{6}`.

  // DaisyUI.
  COLOR_INFO,
  COLOR_SUCCESS,
  COLOR_WARNING,
  COLOR_ERROR,
  COLOR_PRIMARY,
  COLOR_PRIMARY_FOCUS,
  COLOR_PRIMARY_CONTENT,
  COLOR_SECONDARY,
  COLOR_SECONDARY_FOCUS,
  COLOR_SECONDARY_CONTENT,
  COLOR_ACENT,
  COLOR_ACENT_FOCUS,
  COLOR_ACENT_CONTENT,
  COLOR_NEUTRAL,
  COLOR_NEUTRAL_FOCUS,
  COLOR_NEUTRAL_CONTENT,
  COLOR_BASE_100,
  COLOR_BASE_200,
  COLOR_BASE_300,
  COLOR_BASE_CONTENT,
}
