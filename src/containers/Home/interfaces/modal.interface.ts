import { FieldNode } from "../../../shared/helpers/DatasetTree";
import { MODAL_ACTIONS } from "../constants/MODAL_ACTIONS";

export type ModalAddFieldProps = {
  type: MODAL_ACTIONS.ADD_FIELD;
  location: string[];
};

export type ModalAddDataset = {
  type: MODAL_ACTIONS.ADD_DATASET;
};

export type ModalDeleteDataset = {
  type: MODAL_ACTIONS.DELETE_DATASET;
  datasetName: string;
};

export type ModalEditField = {
  type: MODAL_ACTIONS.EDIT_FIELD;
  field: FieldNode;
  location: string[];
};

export type ModalExportSelectDataset = {
  type: MODAL_ACTIONS.EXPORT_SELECT_DATASET;
};

export type ModalProps =
  | ModalAddFieldProps
  | ModalAddDataset
  | ModalEditField
  | ModalDeleteDataset
  | ModalExportSelectDataset;
