import { ThemeContext } from "../context"
import { useContext } from "react"

export default function useThemeServices() {
  const { theme } = useContext(ThemeContext)

  return { theme }
}
