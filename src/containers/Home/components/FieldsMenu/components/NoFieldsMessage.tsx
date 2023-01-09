import { MODAL_ACTIONS } from "../../../constants/MODAL_ACTIONS";
import { ModalProps } from "../../../interfaces/modal.interface";
import { useContext } from "react";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { ChacaSimpleButton } from "../../../../../shared/components/ChacaButton";

const NoFieldsMessage = ({
  handleOpenModal,
}: {
  handleOpenModal: (a: ModalProps) => void;
}) => {
  const { selectedDataset } = useContext(DatasetsContext);

  const handleNewField = () => {
    handleOpenModal({
      type: MODAL_ACTIONS.ADD_FIELD,
      location: [selectedDataset.name],
    });
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <img src="./images/Bored.svg" alt="" className="w-[200px] my-5" />
      <p className="text-xl text-slate-500 font-fontBold">Not fields found</p>

      <ChacaSimpleButton
        onClick={handleNewField}
        text="Add Field"
        color="primary"
        size="medium"
        className="mt-2"
      />
    </div>
  );
};

export default NoFieldsMessage;
