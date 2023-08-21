import { useContext } from "react"
import {
  LanguageConfig,
  LanguageObject,
  Languages,
  ReturnLanguageObject,
} from "../interfaces/language.interface"
import { LanguageContext } from "../context"

export function useLanguage<T>(languageObject: LanguageObject<T>) {
  const { language } = useContext(LanguageContext)

  function filterLanguage(
    languageObject: LanguageObject<T>,
    language: Languages,
  ): ReturnLanguageObject<T> {
    let returnObject: ReturnLanguageObject<T> = {} as ReturnLanguageObject<T>

    for (const [key, object] of Object.entries<LanguageConfig>(languageObject)) {
      returnObject = { ...returnObject, [key]: object[language] }
    }

    return returnObject
  }

  return filterLanguage(languageObject, language)
}
