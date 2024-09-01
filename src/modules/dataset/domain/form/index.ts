import { FieldDatatype } from "@modules/dataset/domain/core/datatype"
import {
  IsArrayConfig,
  IsKeyConfig,
  PossibleNullConfig,
} from "@modules/dataset/domain/core/field-config"

export interface FieldForm {
  id: string
  name: string
  isPossibleNull: PossibleNullConfig
  isArray: IsArrayConfig
  datatype: FieldDatatype
  isKey: IsKeyConfig
}
