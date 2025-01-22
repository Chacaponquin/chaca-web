import {
  IsArrayConfig,
  IsKeyConfig,
  PossibleNullConfig,
} from "@modules/dataset/domain/core/field-config"
import { SaveFieldDatatype } from "./field-datatype"

export type SaveFieldDTO = {
  name: string
  datatype: SaveFieldDatatype
  possibleNull: PossibleNullConfig
  isArray: IsArrayConfig
  isKey: IsKeyConfig
  id: string
}
