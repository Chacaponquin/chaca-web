export interface Param {
  name: string
  description: React.ReactNode
  required: boolean
  params: Param[]
  types: string[]
  default?: string
  alias?: string
}
