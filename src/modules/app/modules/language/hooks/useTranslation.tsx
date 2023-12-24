import { useContext, useMemo } from "react"
import { LanguageStringConfig, LanguageObject, Translation } from "../interfaces"
import { LanguageContext } from "../context"

export default function useTranslation<T>(input: LanguageObject<T>) {
  const { language } = useContext(LanguageContext)

  const object: Translation<T> = useMemo(() => {
    let translation: Translation<T> = {} as Translation<T>

    for (const [key, object] of Object.entries<LanguageStringConfig>(input)) {
      translation = { ...translation, [key]: object[language] }
    }

    return translation
  }, [language, input])

  return object
}
