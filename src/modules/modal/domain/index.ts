import {
  IsArrayConfig,
  IsKeyConfig,
  PossibleNullConfig,
} from "@modules/datasets/interfaces/field-config"
import { FieldDatatype } from "../../datasets/interfaces/datasets"

export interface FieldForm {
  id: string
  name: string
  isPossibleNull: PossibleNullConfig
  isArray: IsArrayConfig
  dataType: FieldDatatype
  isKey: IsKeyConfig
}

export abstract class ModalProps {}
