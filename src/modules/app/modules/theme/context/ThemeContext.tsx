import { createContext, useState, useEffect } from "react"
import { THEME } from "../constants"
import { useLocalStorage } from "@modules/app/hooks"
import { STORAGE_KEYS } from "@modules/app/constants"

type Props = {
  theme: THEME
  handleChangeTheme(t: THEME): void
}

export const ThemeContext = createContext<Props>({
  theme: THEME.LIGHT,
} as Props)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { get, set } = useLocalStorage()

  const [theme, setTheme] = useState<THEME>(THEME.LIGHT)

  useEffect(() => {
    const saveTheme = get(STORAGE_KEYS.THEME)

    if (saveTheme) {
      setTheme(saveTheme as THEME)
    } else {
      setTheme(THEME.DARK)
    }
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(THEME.LIGHT)
    root.classList.remove(THEME.DARK)
    root.classList.add(theme)

    set(STORAGE_KEYS.THEME, theme)
  }, [theme])

  function handleChangeTheme(newTheme: THEME) {
    setTheme(newTheme)
  }

  const data: Props = { theme, handleChangeTheme }

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}
