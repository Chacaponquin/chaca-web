import { ChacaSimpleButton } from "../../../../../../../shared/components/ChacaButton/ChacaButton";

const ModalButtons = ({
  handleNext,
  handleCancel,
  nextText,
}: {
  nextText: string;
  handleCancel: () => void;
  handleNext: () => void;
}) => {
  return (
    <div className="flex gap-5 justify-end mt-5">
      <ChacaSimpleButton
        color="primary"
        size="large"
        onClick={handleNext}
        text={nextText}
      />

      <ChacaSimpleButton
        color="cancel"
        size="large"
        onClick={handleCancel}
        text="Cancel"
      />
    </div>
  );
};

export default ModalButtons;
