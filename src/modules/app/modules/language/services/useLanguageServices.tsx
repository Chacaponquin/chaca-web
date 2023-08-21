import { useContext } from "react"
import { LanguageContext } from "../context"

export default function useLanguageService() {
  const { language } = useContext(LanguageContext)

  return { language }
}
