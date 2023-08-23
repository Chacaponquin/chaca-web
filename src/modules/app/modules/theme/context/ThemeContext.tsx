import { createContext, useState, ReactElement, useEffect } from "react"
import { THEME } from "../constants/THEME"

type ThemeContextProps = {
  theme: THEME
  handleChangeTheme: (t: THEME) => void
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: THEME.LIGHT,
} as ThemeContextProps)

const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState<THEME>(THEME.LIGHT)

  useEffect(() => {
    const saveTheme = localStorage.getItem("theme")

    if (saveTheme) {
      setTheme(saveTheme as THEME)
    } else {
      setTheme(THEME.DARK)
    }
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light")
    root.classList.remove("dark")
    root.classList.add(theme)

    localStorage.setItem("theme", theme)
  }, [theme])

  const handleChangeTheme = (newTheme: THEME) => {
    setTheme(newTheme)
  }

  const data = { theme, handleChangeTheme }

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider }
