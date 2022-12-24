import React from "react";
import { ChacaSimpleButton } from "../../../../../../shared/components/ChacaButton/ChacaButton";

const ModalButtons = ({
  nextText,
  handleCancel,
  handleNext,
}: {
  handleNext: () => void;
  handleCancel: () => void;
  nextText: string;
}) => {
  return (
    <div className="flex w-full justify-end gap-5 mt-5">
      <ChacaSimpleButton
        color="primary"
        size="medium"
        text={nextText}
        onClick={handleNext}
      />

      <ChacaSimpleButton
        color="cancel"
        size="medium"
        text={"Cancel"}
        onClick={handleCancel}
      />
    </div>
  );
};

export default ModalButtons;
