import jsonImporter from "node-sass-json-importer"

import defaultEnv from "./default-env.js" // eslint-disable-line import/extensions

const isReady = process.env.NODE_ENV !== "development" && defaultEnv.READY === "true"

const baseConfig = {
  env: defaultEnv,
  pageExtensions: ["tsx"],
  sassOptions: {
    importer: jsonImporter(),
  },
  pwa: {
    disable: !isReady,
    dest: "public",
    dynamicStartUrl: false,
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: isReady,
    reactRemoveProperties: true,
  },
}

export default baseConfig // eslint-disable-line import/no-unused-modules
