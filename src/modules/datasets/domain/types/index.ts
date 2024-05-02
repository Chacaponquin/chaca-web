import { FieldDataType } from "@modules/datasets/interfaces/dataset-field"

export interface Datatype {
  title: string
  default: FieldDataType
  condition: boolean
  info: React.FC
  id: string
}
