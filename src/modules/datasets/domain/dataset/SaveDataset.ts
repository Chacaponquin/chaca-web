import { SaveFieldDTO } from "@modules/datasets/dto/dataset"
import { Dataset } from "./Dataset"

interface Props {
  version: string
  datasets: SaveDataset[]
}

export interface SaveDataset {
  posX: number
  posY: number
  limit: number
  fields: SaveFieldDTO[]
  name: string
  id: string
}

export interface ISaveDatasets {
  version: string
  datasets: SaveDataset[]
}

export class SaveDatasets {
  private readonly version: string
  private readonly datasets: SaveDataset[]

  constructor({ datasets, version }: Props) {
    this.version = version
    this.datasets = datasets
  }

  json(): string {
    return JSON.stringify({
      version: this.version,
      datasets: this.datasets,
    })
  }
}

export interface LoadDataset {
  dataset: Dataset
  posX: number
  posY: number
}
