const path = require("path")
module.exports = {
  webpack: {
    alias: {
      "@shared": path.resolve(__dirname, "src/shared"),
      "@containers": path.resolve(__dirname, "src/containers"),
      "@form": path.resolve(__dirname, "src/shared/components/ChacaForm/components/index.ts"),
    },
  },
}
