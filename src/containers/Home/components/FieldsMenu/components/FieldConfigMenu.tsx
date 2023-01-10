import { useContext } from "react";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import {
  DatasetField,
  FieldDataType,
} from "../../../../../shared/interfaces/datasets.interface";
import { DATASETS_ACTIONS } from "../../../constants/ACTION_TYPES";
import { MODAL_ACTIONS } from "../../../constants/MODAL_ACTIONS";
import { ModalProps } from "../../../interfaces/modal.interface";

const FieldConfigMenu = ({
  handleOpenModal,
  field,
}: {
  handleOpenModal: (props: ModalProps) => void;
  field: DatasetField<FieldDataType>;
}) => {
  const divClass =
    "cursor-pointer duration-300 w-full transition-all px-3 py-1 hover:bg-slate-200 text-sm";

  const { selectedDataset, datasetDispatch } = useContext(DatasetsContext);

  const handleEditField = () => {
    handleOpenModal({ type: MODAL_ACTIONS.EDIT_FIELD, field, location: [] });
  };

  const handleAddField = () => {
    handleOpenModal({
      type: MODAL_ACTIONS.ADD_FIELD,
      parentFieldID: field.id,
    });
  };

  const handleDeleteField = () => {
    datasetDispatch({
      type: DATASETS_ACTIONS.DELETE_FIELD,
      payload: { fieldID: field.id, datasetID: selectedDataset.id },
    });
  };

  return (
    <div className="absolute bg-white shadow-md rounded-sm -translate-x-[85px] w-[100px]">
      <div className={divClass} onClick={handleEditField}>
        Edit
      </div>
      <div className={divClass} onClick={handleAddField}>
        Add Field
      </div>
      <div className={divClass} onClick={handleDeleteField}>
        Delete
      </div>
    </div>
  );
};

export default FieldConfigMenu;
