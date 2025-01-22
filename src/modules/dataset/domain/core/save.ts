import { SaveFieldDTO } from "@modules/dataset/dto/write/save/field"
import { Schema } from "./schema"

interface Props {
  version: string
  schemas: SaveSchema[]
}

export interface SaveSchema {
  posX: number
  posY: number
  limit: number
  fields: SaveFieldDTO[]
  name: string
  id: string
}

export interface ISaveDataset {
  version: string
  schemas: SaveSchema[]
}

export class SaveDataset {
  private readonly version: string
  private readonly schemas: SaveSchema[]

  constructor({ schemas, version }: Props) {
    this.version = version
    this.schemas = schemas
  }

  json(): string {
    return JSON.stringify({
      version: this.version,
      schemas: this.schemas,
    })
  }
}

export interface LoadDataset {
  schema: Schema
  posX: number
  posY: number
}
