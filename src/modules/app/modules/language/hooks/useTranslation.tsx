import { useContext, useMemo } from "react"
import { TranslationConfig, TranslationInput, Translation } from "../interfaces"
import { LanguageContext } from "../context"

export default function useTranslation<T>(input: TranslationInput<T, string>) {
  const { language } = useContext(LanguageContext)

  const object: Translation<T, string> = useMemo(() => {
    let translation: Translation<T, string> = {} as Translation<T, string>

    for (const [key, object] of Object.entries<TranslationConfig<string>>(input)) {
      translation = { ...translation, [key]: object[language] }
    }

    return translation
  }, [language, input])

  return object
}
