import { DATA_TYPES } from "@modules/schemas/constants"
import { FieldDataType } from "../interfaces/dataset_field.interface"
import { IsArrayConfig } from "../interfaces/field_config.interface"

export interface FieldForm {
  id: string
  name: string
  isPosibleNull: number
  isArray: IsArrayConfig
  dataType: FieldDataType
  isKey: boolean
}

export interface DataTypeInf {
  title: string
  dataType: DATA_TYPES
  id: number
  default: FieldDataType
}
