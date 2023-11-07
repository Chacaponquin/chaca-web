import { DATA_TYPES } from "@modules/schemas/constants"
import { FieldDataType } from "../interfaces/dataset-field"
import { IsArrayConfig } from "../interfaces/field-config"
import { FieldName } from "../value-object"

export interface FieldProps {
  id: string
  name: FieldName
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
