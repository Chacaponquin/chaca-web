import { useContext, useMemo } from "react"
import { LanguageFunctionConfig, LanguageFunctionObject, ReturnFunctionObject } from "../interfaces"
import { LanguageContext } from "../context"

export default function useLanguageFunc<R>(
  languageObject: LanguageFunctionObject<R>,
): ReturnFunctionObject<R> {
  const { language } = useContext(LanguageContext)

  const object: ReturnFunctionObject<R> = useMemo(() => {
    let returnObject = {} as ReturnFunctionObject<R>

    for (const [key, object] of Object.entries<LanguageFunctionConfig<never>>(languageObject)) {
      returnObject = { ...returnObject, [key]: object[language] }
    }

    return returnObject
  }, [language])

  return object
}
