import { Dataset } from "@modules/datasets/domain/dataset"

export interface ShowDataset {
  dataset: Dataset
  positionX: number
  positionY: number
}

export interface ChangeDatasetCardProps {
  datasetId: string
  x: number
  y: number
}
