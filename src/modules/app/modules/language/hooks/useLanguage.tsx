import { useContext } from "react"
import { LanguageContext } from "../context"

export default function useLanguage() {
  const { language } = useContext(LanguageContext)

  return { language }
}
