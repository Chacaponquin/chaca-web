const path = require("path")
module.exports = {
  webpack: {
    alias: {
      "@containers": path.resolve(__dirname, "src/containers"),
      "@form": path.resolve(
        __dirname,
        "src/modules/shared/modules/form",
      ),
      "@modules": path.resolve(__dirname, "src/modules"),
    },
  },
}
