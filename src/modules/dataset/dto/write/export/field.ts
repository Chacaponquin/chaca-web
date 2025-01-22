import {
  IsArrayConfig,
  IsKeyConfig,
  PossibleNullConfig,
} from "@modules/dataset/domain/core/field-config"
import { ExportDatatypeDTO } from "./field-datatype"

export type ExportDatasetFieldDTO = {
  name: string
  datatype: ExportDatatypeDTO
  possibleNull: PossibleNullConfig
  isArray: IsArrayConfig
  isKey: IsKeyConfig
}
