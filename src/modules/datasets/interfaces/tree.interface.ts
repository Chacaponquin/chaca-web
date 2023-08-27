import { FieldName } from "../value-object"
import { IsArrayConfig, IsKeyConfig } from "./field_config.interface"

export interface NodeProps<T> {
  name: FieldName
  dataType: T
  isPosibleNull?: number
  isArray?: IsArrayConfig
  isKey?: IsKeyConfig
}
