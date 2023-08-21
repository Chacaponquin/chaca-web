import { createContext, useState, ReactElement } from "react"
import { THEME } from "../constants/THEME"

type ThemeContextProps = {
  theme: THEME
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: THEME.LIGHT,
})

const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState<THEME>(THEME.LIGHT)

  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider }
