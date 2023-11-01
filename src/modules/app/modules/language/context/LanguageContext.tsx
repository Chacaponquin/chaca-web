import { createContext, useState, useEffect } from "react"
import { Languages } from "../interfaces"
import { ReactElement } from "react-markdown/lib/react-markdown"

type LanguageContextProps = {
  language: Languages
}

const LanguageContext = createContext<LanguageContextProps>({ language: "en" })

function LanguageProvider({ children }: { children: ReactElement }) {
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
