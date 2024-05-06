import { useContext, useMemo, ReactNode } from "react"
import { TranslationConfig, TranslationInput, Translation } from "../interfaces"
import { LanguageContext } from "../context"

export default function useTranslationComponent<T>(input: TranslationInput<T, ReactNode>) {
  const { language } = useContext(LanguageContext)

  const object: Translation<T, ReactNode> = useMemo(() => {
    let translation: Translation<T, ReactNode> = {} as Translation<T, ReactNode>

    for (const [key, object] of Object.entries<TranslationConfig<ReactNode>>(input)) {
      translation = { ...translation, [key]: object[language] }
    }

    return translation
  }, [language, input])

  return object
}
