declare module "node-sass-json-importer" {
  export default function (): () => any
}

declare module "cookie-cutter" {
  function get(cookieName): string | undefined
  function set(cookieName: string, cookieValue: string | null)
}

// default.env.js
declare module "*.js" {
  interface DefaultEnv {
    [key: string]: string
  }
  export default object as DefaultEnv
}
