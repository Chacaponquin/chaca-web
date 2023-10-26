import { FieldName } from "../value-object"
import { IsArrayConfig, IsKeyConfig } from "./field_config.interface"
import { SubOption, Schema } from "@modules/schemas/interfaces/schema"

export interface NodeProps<T> {
  name: FieldName
  dataType: T
  isPossibleNull?: number
  isArray?: IsArrayConfig
  isKey?: IsKeyConfig
}

export interface SearchProps {
  findOption: (p: string, o: string) => SubOption
  findParent: (p: string) => Schema
  searchRefField: (ref: Array<string>) => Array<string>
}
