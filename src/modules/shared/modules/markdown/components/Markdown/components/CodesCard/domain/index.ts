import { TranslationConfig } from "@modules/app/modules/language/interfaces"
import { Language } from "prism-react-renderer"

export interface CodeSection {
  code: string
  title: TranslationConfig<string>
  language: Language
}
