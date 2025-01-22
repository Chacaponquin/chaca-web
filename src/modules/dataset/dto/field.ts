import { FieldDatatype } from "../domain/core/datatype"
import { IsArrayConfig, IsKeyConfig, PossibleNullConfig } from "../domain/core/field-config"

export interface FieldProps {
  id: string
  name: string
  possibleNull: PossibleNullConfig
  isArray: IsArrayConfig
  datatype: FieldDatatype
  isKey: IsKeyConfig
}
