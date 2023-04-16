import { useContext } from "react"
import { AppConfigContext } from "../../context/AppConfigContext"
import {
  LanguageConfig,
  LanguageObject,
  Languages,
  ReturnLanguageObject,
} from "../../interfaces/language.interface"

export function useLanguage<T>(languageObject: LanguageObject<T>) {
  const { language } = useContext(AppConfigContext)

  function filterLanguage(
    languageObject: LanguageObject<T>,
    language: Languages,
  ): ReturnLanguageObject<T> {
    let returnObject: ReturnLanguageObject<T> = {} as ReturnLanguageObject<T>

    for (const [key, object] of Object.entries(languageObject)) {
      const o = object as LanguageConfig
      returnObject = { ...returnObject, [key]: o[language] }
    }

    return returnObject
  }

  return filterLanguage(languageObject, language)
}
