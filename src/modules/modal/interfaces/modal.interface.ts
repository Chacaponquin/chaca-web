import { SubOption } from "@modules/schemas/interfaces/schema.interface"
import { DatasetField, FieldDataType } from "../../datasets/interfaces/datasets.interface"
import { MODAL_ACTIONS } from "../constants/MODAL_ACTIONS"
import { Dataset } from "@modules/datasets/domain/tree"

export type ModalEditDataset = {
  type: MODAL_ACTIONS.EDIT_DATASET
  dataset: Dataset
}

export type ModalAddFieldProps = {
  type: MODAL_ACTIONS.ADD_FIELD
  parentFieldID: string
  datasetId: string
}

export type ModalAdminDeleteApiDocSubSection = {
  type: MODAL_ACTIONS.ADMIN_DELETE_API_DOC_SUB_SECTION
  handleDeleteApiDocSubSection: () => void
  subSectionName: string
}

export type ModalDeleteDataset = {
  type: MODAL_ACTIONS.DELETE_DATASET
  datasetName: string
}

export type ModalEditField = {
  type: MODAL_ACTIONS.EDIT_FIELD
  field: DatasetField<FieldDataType>
  parentFieldID: string
  datasetId: string
}

export type ModalExportSelectDataset = {
  type: MODAL_ACTIONS.EXPORT_SELECT_DATASET
  handleCreateSelectDataset: () => void
}

export type ModalExportAllDatasets = {
  type: MODAL_ACTIONS.EXPORT_ALL_DATASETS
  handleCreateAllDatasets: () => void
}

export type ModalTestEndpoint = {
  type: MODAL_ACTIONS.TEST_ENDPOINT
  option: SubOption
}

export type ModalProps =
  | ModalAddFieldProps
  | ModalEditField
  | ModalDeleteDataset
  | ModalExportSelectDataset
  | ModalExportAllDatasets
  | ModalTestEndpoint
  | ModalEditDataset
  | ModalAdminDeleteApiDocSubSection
