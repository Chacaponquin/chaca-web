import { useContext } from "react";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { DATASETS_ACTIONS } from "../../../constants/ACTION_TYPES";
import { ModalEditField } from "../../../interfaces/modal.interface";
import FieldForm from "../shared/components/FieldForm";
import ModalButtons from "../shared/components/ModalButtons";
import ModalTitle from "../shared/components/ModalTitle";
import { useFieldForm } from "../shared/hooks/useFieldForm";

const EditFieldForm = ({
  handleCloseModal,
  props,
}: {
  handleCloseModal: () => void;
  props: ModalEditField;
}) => {
  const { datasetDispatch, selectedDataset } = useContext(DatasetsContext);

  const fieldActions = useFieldForm({
    id: props.field.id,
    name: props.field.name,
    dataType: props.field.info.dataType,
    isArray: props.field.info.isArray,
    isPosibleNull: props.field.info.isPosibleNull,
  });

  const handleEditField = () => {
    datasetDispatch({
      type: DATASETS_ACTIONS.EDIT_FIELD,
      payload: {
        field: fieldActions.field,
        location: props.location,
        datasetID: selectedDataset.id,
      },
    });

    handleCloseModal();
  };

  return (
    <div className="w-full flex flex-col">
      <ModalTitle titleText="Edit Field" handleCloseModal={handleCloseModal} />
      <FieldForm {...fieldActions} />
      <ModalButtons
        handleCancel={handleCloseModal}
        handleNext={handleEditField}
        nextText="Edit Field"
        type="edit"
      />
    </div>
  );
};

export default EditFieldForm;
