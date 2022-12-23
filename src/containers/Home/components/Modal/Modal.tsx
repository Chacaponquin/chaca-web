import React from "react";

const Modal = () => {
  return (
    <div className="w-full fixed top-0 left-0 h-screen bg-slate-500/50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-md px-10 py-5 shadow-md w-max"></div>
    </div>
  );
};

export default Modal;
