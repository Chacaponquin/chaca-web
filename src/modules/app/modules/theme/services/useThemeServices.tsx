import { ThemeContext } from "../context"
import { useContext } from "react"

export default function useThemeServices() {
  const { theme, handleChangeTheme } = useContext(ThemeContext)

  return { theme, handleChangeTheme }
}
