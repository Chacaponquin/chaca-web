import { useContext } from "react";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { AppConfigContext } from "../../../../../shared/context/AppConfigContext";
import { DATA_TYPES } from "../../../../../shared/constant/DATA_TYPES";
import { DATASETS_ACTIONS } from "../../../constants/ACTION_TYPES";
import { ModalAddFieldProps } from "../../../interfaces/modal.interface";
import ModalTitle from "../shared/components/ModalTitle";
import ModalButtons from "../shared/components/ModalButtons";
import FieldForm from "../shared/components/FieldForm";
import { useFieldForm } from "../shared/hooks/useFieldForm";
import { FieldNode } from "../../../../../shared/helpers/DatasetTree";
import { SingleValueDataType } from "../../../../../shared/interfaces/datasets.interface";

const AddFieldForm = ({
  props,
  handleCloseModal,
}: {
  props: ModalAddFieldProps;
  handleCloseModal: () => void;
}) => {
  const { datasetDispatch, handleDeleteSelectField } =
    useContext(DatasetsContext);

  const { schemas } = useContext(AppConfigContext);
  const fieldActions = useFieldForm(
    new FieldNode<SingleValueDataType>("", {
      dataType: {
        fieldType: {
          args: {},
          parent: schemas[0].parent,
          type: schemas[0].options[1].name,
        },
        type: DATA_TYPES.SINGLE_VALUE,
      },
      isArray: null,
      isPosibleNull: 0,
    }).getNodeObject()
  );

  const handleAddField = () => {
    datasetDispatch({
      type: DATASETS_ACTIONS.ADD_NEW_FIELD,
      payload: {
        fieldName: fieldActions.field.name,
        fieldInfo: fieldActions.field,
        location: props.location,
      },
    });

    handleDeleteSelectField();
    handleCloseModal();
  };

  return (
    <div className="flex flex-col w-full">
      <ModalTitle titleText="New Field" handleCloseModal={handleCloseModal} />

      <FieldForm {...fieldActions} />

      <ModalButtons
        type="edit"
        nextText="Add Field"
        handleCancel={handleCloseModal}
        handleNext={handleAddField}
      />
    </div>
  );
};

export default AddFieldForm;
