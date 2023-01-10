import { DatasetField, FieldDataType } from "../../../shared/interfaces/datasets.interface"
import { MODAL_ACTIONS } from "../constants/MODAL_ACTIONS"

export type ModalAddFieldProps = {
  type: MODAL_ACTIONS.ADD_FIELD
  parentFieldID: string
}

export type ModalAddDataset = {
  type: MODAL_ACTIONS.ADD_DATASET
}

export type ModalDeleteDataset = {
  type: MODAL_ACTIONS.DELETE_DATASET
  datasetName: string
}

export type ModalEditField = {
  type: MODAL_ACTIONS.EDIT_FIELD
  field: DatasetField<FieldDataType>
  location: string[]
}

export type ModalExportSelectDataset = {
  type: MODAL_ACTIONS.EXPORT_SELECT_DATASET
}

export type ModalExportAllDatasets = {
  type: MODAL_ACTIONS.EXPORT_ALL_DATASETS
}

export type ModalProps =
  | ModalAddFieldProps
  | ModalAddDataset
  | ModalEditField
  | ModalDeleteDataset
  | ModalExportSelectDataset
  | ModalExportAllDatasets
