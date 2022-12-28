import { Fragment, useContext, useMemo } from "react";
import { Change, Delete } from "../../../../../shared/assets/icons";
import { v4 as uuid } from "uuid";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { ChacaIconButton } from "../../../../../shared/components/ChacaButton/ChacaButton";
import { ModalProps } from "../../../interfaces/modal.interface";
import { DATASETS_ACTIONS } from "../../../constants/ACTION_TYPES";
import { FieldNode } from "../../../../../shared/helpers/DatasetTree";
import { FieldDataType } from "../../../../../shared/interfaces/datasets.interface";
import { MODAL_ACTIONS } from "../../../constants/MODAL_ACTIONS";

const FieldInfoHeader = ({
  handleOpenModal,
  selectField,
}: {
  selectField: FieldNode<FieldDataType>;
  handleOpenModal: (props: ModalProps) => void;
}) => {
  const { selectedDataset, datasetDispatch } = useContext(DatasetsContext);

  const handleEdit = () => {
    handleOpenModal({
      type: MODAL_ACTIONS.EDIT_FIELD,
      fieldID: selectField.id,
    });
  };

  const handleDelete = () => {
    datasetDispatch({
      type: DATASETS_ACTIONS.DELETE_FIELD,
      payload: { datasetID: selectedDataset.id, fieldID: selectField!.id },
    });
  };

  const location = useMemo(
    () => [
      ...selectedDataset.getFieldLocation(selectField.id),
      selectField.name,
    ],
    [selectField, selectedDataset]
  );

  return (
    <div className="w-full bg-white py-2 flex justify-between items-center px-5 border-b-2">
      <div className="flex gap-3 text-lg">
        {location.map((el, i) => (
          <Fragment key={uuid()}>
            <p className="mb-0 font-fontBold">{el}</p>
            {i !== location.length - 1 && (
              <p className="mb-0 font-fontBold">{">"}</p>
            )}
          </Fragment>
        ))}
      </div>

      <div className="flex gap-3 items-center">
        <ChacaIconButton
          icon={<Change size={19} />}
          color={"primary"}
          size={"small"}
          text={"Edit"}
          onClick={handleEdit}
        />

        <ChacaIconButton
          icon={<Delete size={19} />}
          color={"danger"}
          size={"small"}
          text={"Delete"}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default FieldInfoHeader;
