import { useContext } from "react";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import {
  DatasetField,
  FieldDataType,
} from "../../../../../shared/interfaces/datasets.interface";
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

  const { selectedDataset } = useContext(DatasetsContext);

  const handleEditField = () => {
    handleOpenModal({ type: MODAL_ACTIONS.EDIT_FIELD, fieldID: field.id });
  };

  const handleAddField = () => {
    handleOpenModal({
      type: MODAL_ACTIONS.ADD_FIELD,
      location: [...selectedDataset.getFieldLocation(field.id), field.name],
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
    </div>
  );
};

export default FieldConfigMenu;
