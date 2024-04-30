import { IsArrayConfig } from "@modules/datasets/interfaces/field-config"
import { FieldDataType } from "../../datasets/interfaces/datasets"
import { MODAL_ACTIONS } from "../constants/MODAL_ACTIONS"
import { Dataset, Field } from "@modules/datasets/domain/tree"
import { Config } from "@modules/config/interfaces"
import { ExportDatatypeDTO } from "@modules/datasets/dto/field"

export interface FieldForm {
  id: string
  name: string
  isPossibleNull: number
  isArray: IsArrayConfig
  dataType: FieldDataType
  isKey: boolean
}

export type ModalEditDataset = {
  type: MODAL_ACTIONS.EDIT_DATASET
  dataset: Dataset
}

export type ModalAddFieldProps = {
  type: MODAL_ACTIONS.ADD_FIELD
  parentfieldId: string
  datasetId: string
}

export type ModalDeleteDataset = {
  type: MODAL_ACTIONS.DELETE_DATASET
  datasetName: string
  datasetId: string
}

export type ModalEditField = {
  type: MODAL_ACTIONS.EDIT_FIELD
  field: Field<ExportDatatypeDTO>
  parentfieldId: string
  datasetId: string
}

export type ModalExportSelectDataset = {
  type: MODAL_ACTIONS.EXPORT_SELECT_DATASET
  handleCreateSelectDataset(props: { config: Config }): void
}

export type ModalExportAllDatasets = {
  type: MODAL_ACTIONS.EXPORT_ALL_DATASETS
  handleCreateAllDatasets(props: { config: Config; datasets: Dataset[] }): void
}

export type ModalProps =
  | ModalAddFieldProps
  | ModalEditField
  | ModalDeleteDataset
  | ModalExportSelectDataset
  | ModalExportAllDatasets
  | ModalEditDataset
