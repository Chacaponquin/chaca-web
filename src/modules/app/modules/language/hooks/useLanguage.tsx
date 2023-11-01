import { useContext, useMemo } from "react"
import { LanguageStringConfig, LanguageObject, ReturnLanguageObject } from "../interfaces"
import { LanguageContext } from "../context"

export default function useLanguage<T>(languageObject: LanguageObject<T>) {
  const { language } = useContext(LanguageContext)

  const object: ReturnLanguageObject<T> = useMemo(() => {
    let returnObject: ReturnLanguageObject<T> = {} as ReturnLanguageObject<T>

    for (const [key, object] of Object.entries<LanguageStringConfig>(languageObject)) {
      returnObject = { ...returnObject, [key]: object[language] }
    }

    return returnObject
  }, [language])

  return object
}
