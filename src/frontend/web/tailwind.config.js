const daisyUI = require("daisyui")

const defaultEnv = require("./default-env")
const styles = require("./styles")

module.exports = {
  preserveHtmlElements: false,
  mode: "jit",
  plugins: [daisyUI],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: `${defaultEnv.SCREEN_SM}px`,
      md: `${defaultEnv.SCREEN_MD}px`,
      lg: `${defaultEnv.SCREEN_LG}px`,
      xl: `${defaultEnv.SCREEN_XL}px`,
      "2xl": `${defaultEnv.SCREEN_2XL}px`,
    },
  },
  daisyui: {
    themes: [
      {
        default: styles.colors,
      },
    ],
  },
}
