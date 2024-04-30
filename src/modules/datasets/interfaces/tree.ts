import { FieldDataType } from "./dataset-field"
import { IsArrayConfig, IsKeyConfig } from "./field-config"
import { SubOption, Schema } from "@modules/schemas/interfaces/schema"

export interface NodeProps {
  name: string
  dataType: FieldDataType
  isPossibleNull?: number
  isArray?: IsArrayConfig
  isKey?: IsKeyConfig
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
  searchRefField(ref: Array<string>): string[]
}
