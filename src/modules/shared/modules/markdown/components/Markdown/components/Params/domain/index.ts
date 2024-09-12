export interface Param {
  name: string
  description: string
  required: boolean
  params: Param[]
  types: string[]
  default?: string
}
