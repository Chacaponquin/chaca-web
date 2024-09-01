import { FieldDatatype } from "@modules/dataset/domain/core/datatype"

export interface Datatype {
  title: string
  default: FieldDatatype
  condition: boolean
  id: string
}
