import { DATA_TYPES } from "@modules/schemas/constants"
import { FieldDataType } from "../interfaces/dataset_field"
import { IsArrayConfig } from "../interfaces/field_config"

export interface FieldForm {
  id: string
  name: string
  isPossibleNull: number
  isArray: IsArrayConfig
  dataType: FieldDataType
  isKey: boolean
}

export interface Datatype {
  title: string
  dataType: DATA_TYPES
  id: number
  default: FieldDataType
  condition: boolean
}
