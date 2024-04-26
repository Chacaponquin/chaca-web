import { FieldDataType } from "@modules/datasets/interfaces/dataset-field"

export interface Datatype {
  id: string
  title: string
  default: FieldDataType
  condition: boolean
}
