import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default function useTheme() {
  const { theme, handleChangeTheme } = useContext(ThemeContext)

  return { theme, handleChangeTheme }
}
