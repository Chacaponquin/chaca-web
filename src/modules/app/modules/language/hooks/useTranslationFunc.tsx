import { useContext, useMemo } from "react"
import { LanguageFunctionConfig, LanguageFunctionObject, ReturnFunctionObject } from "../interfaces"
import { LanguageContext } from "../context"

export default function useTranslationFunc<R>(
  input: LanguageFunctionObject<R>,
): ReturnFunctionObject<R> {
  const { language } = useContext(LanguageContext)

  const object: ReturnFunctionObject<R> = useMemo(() => {
    let translation = {} as ReturnFunctionObject<R>

    for (const [key, object] of Object.entries<LanguageFunctionConfig<never>>(input)) {
      translation = { ...translation, [key]: object[language] }
    }

    return translation
  }, [language, input])

  return object
}
