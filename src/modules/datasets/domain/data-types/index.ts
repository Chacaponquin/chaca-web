import { FieldDatatype } from "@modules/datasets/interfaces/dataset-field"

export interface Datatype {
  title: string
  default: FieldDatatype
  condition: boolean
  id: string
}
