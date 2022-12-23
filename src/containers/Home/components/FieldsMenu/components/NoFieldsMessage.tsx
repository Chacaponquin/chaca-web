import { ChacaSimpleButton } from "../../../../../shared/components/ChacaButton/ChacaButton";
import { MODAL_ACTIONS } from "../../../constants/MODAL_ACTIONS";

const NoFieldsMessage = ({
  handleOpenModal,
}: {
  handleOpenModal: (a: MODAL_ACTIONS) => void;
}) => {
  const handleNewField = () => {
    handleOpenModal(MODAL_ACTIONS.ADD_FIELD);
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <img src="./images/Bored.svg" alt="" className="w-[200px] my-5" />
      <p className="text-xl text-slate-500 font-fontBold">Not fields found</p>

      <ChacaSimpleButton
        onClick={handleNewField}
        text="Add Field"
        color="secondary"
        size="medium"
        className="mt-2"
      />
    </div>
  );
};

export default NoFieldsMessage;
