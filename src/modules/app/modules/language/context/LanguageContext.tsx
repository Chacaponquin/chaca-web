import { createContext, useState, useEffect } from "react"
import { Languages } from "../interfaces"

interface Props {
  language: Languages
}

const LanguageContext = createContext<Props>({ language: "en" })

function LanguageProvider({ children }: { children: React.ReactElement }) {
  const [language, setLanguage] = useState<Languages>("en")

  useEffect(() => {
    const navigatorLanguage = window.navigator.language
    if (navigatorLanguage.includes("en")) {
      setLanguage("en")
    } else if (navigatorLanguage.includes("es")) {
      setLanguage("es")
    } else {
      setLanguage("en")
    }
  }, [window.navigator.language])

  return <LanguageContext.Provider value={{ language }}>{children}</LanguageContext.Provider>
}

export { LanguageContext, LanguageProvider }
