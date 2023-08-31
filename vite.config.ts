import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")

  return {
    plugins: [react()],
    define: {
      "process.env": env,
    },
    resolve: {
      alias: [
        { find: "@containers", replacement: path.resolve(__dirname, "src/containers") },
        { find: "@form", replacement: path.resolve(__dirname, "src/modules/app/modules/form") },
        { find: "@modules", replacement: path.resolve(__dirname, "src/modules") },
      ],
    },
  }
})
