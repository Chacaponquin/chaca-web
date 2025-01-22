import { FieldDatatype } from "./datatype"
import { IsArrayConfig, IsKeyConfig, PossibleNullConfig } from "./field-config"

export interface FieldProps {
  id: string
  name: string
  possibleNull: PossibleNullConfig
  isArray: IsArrayConfig
  datatype: FieldDatatype
  isKey: IsKeyConfig
}
