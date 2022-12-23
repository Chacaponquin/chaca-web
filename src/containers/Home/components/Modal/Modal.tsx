import React from "react";
import { MODAL_ACTIONS } from "../../constants/MODAL_ACTIONS";
import AddFieldForm from "./components/AddFieldForm";

const Modal = ({
  action,
  handleCloseModal,
}: {
  action: MODAL_ACTIONS;
  handleCloseModal: () => void;
}) => {
  return (
    <div className="w-full fixed top-0 left-0 h-screen bg-slate-500/50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-md px-10 py-5 shadow-md w-[500px]">
        {action === MODAL_ACTIONS.ADD_FIELD && (
          <AddFieldForm handleCloseModal={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default Modal;
