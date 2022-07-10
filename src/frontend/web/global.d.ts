// Must accomplish the variables defined in `default_env.js`.
// Can't define the interface items as `[key: string]: string`.
declare namespace NodeJS {
  export interface Dict {
    // Basic Configuration.
    READY: string
    BACKEND_USERS_HOST: string
    BACKEND_PIZZAS_HOST: string

    // Screens.
    SCREEN_SM: string
    SCREEN_MD: string
    SCREEN_LG: string
    SCREEN_XL: string
    SCREEN_2XL: string

    // Colors.
    COLOR_INFO: string
    COLOR_SUCCESS: string
    COLOR_WARNING: string
    COLOR_ERROR: string
    COLOR_PRIMARY: string
    COLOR_PRIMARY_FOCUS: string
    COLOR_PRIMARY_CONTENT: string
    COLOR_SECONDARY: string
    COLOR_SECONDARY_FOCUS: string
    COLOR_SECONDARY_CONTENT: string
    COLOR_ACENT: string
    COLOR_ACENT_FOCUS: string
    COLOR_ACENT_CONTENT: string
    COLOR_NEUTRAL: string
    COLOR_NEUTRAL_FOCUS: string
    COLOR_NEUTRAL_CONTENT: string
    COLOR_BASE_100: string
    COLOR_BASE_200: string
    COLOR_BASE_300: string
    COLOR_BASE_CONTENT: string
  }
}
