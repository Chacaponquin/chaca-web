import { FieldDatatype } from "@modules/datasets/domain/core/datatype"

export interface Datatype {
  title: string
  default: FieldDatatype
  condition: boolean
  id: string
}
