import { DatasetError } from "../../errors/dataset"
import { FieldDatatype } from "./datatype"
import { IsArrayConfig, IsKeyConfig, PossibleNullConfig } from "./field-config"
import { SaveFieldDTO } from "../../dto/save"
import { SchemaSearcher } from "@modules/modules/domain/core/search"

export interface NodeProps {
  name: string
  id: string
  datatype: FieldDatatype
  possibleNull: PossibleNullConfig
  isArray: IsArrayConfig
  isKey: IsKeyConfig
}

export interface SearchProps {
  searchRefField(ref: string[]): string[]
  fieldRoute: string[]
}

export type ExportFieldsProps = SearchProps & { errors: DatasetError[] }

export interface StringInfProps {
  searchRefField(ref: string[]): string[]
}

export interface CreateFromSaveProps {
  searcher: SchemaSearcher
  props: SaveFieldDTO
}
