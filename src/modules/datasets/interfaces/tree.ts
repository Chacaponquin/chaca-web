import { IsArrayConfig, IsKeyConfig } from "./field-config"
import { SubOption, Schema } from "@modules/schemas/interfaces/schema"

export interface NodeProps<T> {
  name: string
  dataType: T
  isPossibleNull?: number
  isArray?: IsArrayConfig
  isKey?: IsKeyConfig
}

export interface SearchProps {
  findOption: (p: string, o: string) => SubOption
  findParent: (p: string) => Schema
  searchRefField: (ref: Array<string>) => Array<string>
  fieldRoute: Array<string>
}

export interface StringInfProps {
  findOption: (p: string, o: string) => SubOption
  findParent: (p: string) => Schema
  searchRefField: (ref: Array<string>) => Array<string>
}
