import { X } from "../../../../../../../shared/assets/icons";

const ModalTitle = ({
  titleText,
  handleCloseModal,
}: {
  titleText: string;
  handleCloseModal: () => void;
}) => {
  return (
    <div className="mb-4 flex justify-between items-center">
      <h1 className="font-fontExtraBold text-3xl">{titleText}</h1>
      <button onClick={handleCloseModal}>
        <X size={20} />
      </button>
    </div>
  );
};

export default ModalTitle;
