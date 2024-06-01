import {
  IsArrayConfig,
  IsKeyConfig,
  PossibleNullConfig,
} from "@modules/datasets/interfaces/field-config"
import { FieldDatatype } from "../../datasets/interfaces/datasets"
import { MODAL_ACTIONS } from "../constants/MODAL_ACTIONS"
import { Dataset, Field } from "@modules/datasets/domain/tree"
import { Config, ImageFormats } from "@modules/config/interfaces"

export interface FieldForm {
  id: string
  name: string
  isPossibleNull: PossibleNullConfig
  isArray: IsArrayConfig
  dataType: FieldDatatype
  isKey: IsKeyConfig
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
  field: Field
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

export type ModalExportImage = {
  type: MODAL_ACTIONS.EXPORT_IMAGE
  next: ExportImageFunc
}

export type ModalDeleteAllDatasets = {
  type: MODAL_ACTIONS.DELETE_ALL_DATASETS
}

export type ExportImageFunc = (props: { filename: string; format: ImageFormats }) => void

export type ModalProps =
  | ModalAddFieldProps
  | ModalEditField
  | ModalDeleteDataset
  | ModalExportSelectDataset
  | ModalExportAllDatasets
  | ModalEditDataset
  | ModalExportImage
  | ModalDeleteAllDatasets
