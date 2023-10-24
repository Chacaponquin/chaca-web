import { useContext } from "react"
import { LanguageContext } from "../context"

export default function useLanguageContext() {
  const { language } = useContext(LanguageContext)

  return { language }
}
