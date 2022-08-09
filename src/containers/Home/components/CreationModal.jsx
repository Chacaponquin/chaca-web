import React from "react";

const CreationModal = ({ handleSubmit }) => {
  return (
    <div className="fixed bg-black/50 w-full h-screen top-0 left-0 flex items-center justify-center">
      <div className="bg-white p-4 rounded-md">
        <div className="flex justify-end w-full">
          <button
            className="px-5 py-2 font-fontBold text-xl bg-principal-bg text-white"
            onClick={handleSubmit}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreationModal;
