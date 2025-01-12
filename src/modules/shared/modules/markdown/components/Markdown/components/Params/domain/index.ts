import { TranslationConfig } from "@modules/app/modules/language/interfaces"

export interface Param {
  name: string
  description: TranslationConfig<React.ReactNode>
  required: boolean
  params: Param[]
  types: string[]
  default?: string
  alias?: string
}
