import { FieldDatatype } from "../interfaces/dataset-field"
import { IsArrayConfig, IsKeyConfig, PossibleNullConfig } from "../interfaces/field-config"

export interface FieldProps {
  id: string
  name: string
  isPossibleNull: PossibleNullConfig
  isArray: IsArrayConfig
  datatype: FieldDatatype
  isKey: IsKeyConfig
}
