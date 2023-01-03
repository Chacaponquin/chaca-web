import { MODAL_ACTIONS } from "../../constants/MODAL_ACTIONS";
import { ModalProps } from "../../interfaces/modal.interface";
import AddDatasetForm from "./components/AddDatasetForm";
import AddFieldForm from "./components/AddFieldForm";
import DeleteDatasetForm from "./components/DeleteDatasetForm";
import EditFieldForm from "./components/EditFieldForm";
import ExportSelectDatasetForm from "./components/ExportSelectDatasetForm";

const Modal = ({
  props,
  handleCloseModal,
}: {
  props: ModalProps;
  handleCloseModal: () => void;
}) => {
  return (
    <div className="w-full fixed top-0 left-0 h-screen bg-slate-500/50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-md px-10 py-5 shadow-md min-w-[500px]">
        {props.type === MODAL_ACTIONS.ADD_FIELD && (
          <AddFieldForm handleCloseModal={handleCloseModal} props={props} />
        )}
        {props.type === MODAL_ACTIONS.ADD_DATASET && (
          <AddDatasetForm handleCloseModal={handleCloseModal} />
        )}
        {props.type === MODAL_ACTIONS.DELETE_DATASET && (
          <DeleteDatasetForm handleCloseModal={handleCloseModal} />
        )}
        {props.type === MODAL_ACTIONS.EDIT_FIELD && (
          <EditFieldForm handleCloseModal={handleCloseModal} props={props} />
        )}
        {props.type === MODAL_ACTIONS.EXPORT_SELECT_DATASET && (
          <ExportSelectDatasetForm handleCloseModal={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default Modal;
