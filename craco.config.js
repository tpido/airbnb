const path = require("path");
const CracoLessPlugin = require("craco-less");

let resolve = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],

  webpack: {
    alias: {
      "@": resolve("src"),
      assets: resolve("src/assets"),
    },
  },
};
