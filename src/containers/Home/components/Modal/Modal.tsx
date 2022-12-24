import { MODAL_ACTIONS } from "../../constants/MODAL_ACTIONS";
import { ModalProps } from "../../interfaces/modal.interface";
import AddFieldForm from "./components/AddFieldForm";

const Modal = ({
  props,
  handleCloseModal,
}: {
  props: ModalProps;
  handleCloseModal: () => void;
}) => {
  return (
    <div className="w-full fixed top-0 left-0 h-screen bg-slate-500/50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-md px-10 py-5 shadow-md w-[500px]">
        {props.type === MODAL_ACTIONS.ADD_FIELD && (
          <AddFieldForm handleCloseModal={handleCloseModal} props={props} />
        )}
      </div>
    </div>
  );
};

export default Modal;
