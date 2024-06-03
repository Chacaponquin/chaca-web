import { FieldDatatype } from "./dataset-field"
import { IsArrayConfig, IsKeyConfig, PossibleNullConfig } from "./field-config"
import { SubOption, Schema } from "@modules/schemas/interfaces/schema"

export interface NodeProps {
  name: string
  id: string
  dataType: FieldDatatype
  isPossibleNull: PossibleNullConfig
  isArray: IsArrayConfig
  isKey: IsKeyConfig
}

export interface SearchProps {
  findOption(p: string, o: string): SubOption
  findParent(p: string): Schema
  searchRefField(ref: string[]): string[]
  fieldRoute: string[]
}

export interface StringInfProps {
  findOption(p: string, o: string): SubOption
  findParent(p: string): Schema
  searchRefField(ref: string[]): string[]
}

export interface SaveProps {
  findOption(p: string, o: string): SubOption
  findParent(p: string): Schema
}
