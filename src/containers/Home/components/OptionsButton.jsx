import React from "react";

const OptionsButton = ({ submitText, handleSubmit, handleCancel }) => {
  return (
    <div className="w-full flex justify-end gap-3 esm:justify-center">
      <button
        className="px-8 text-xl py-3 bg-principal-bg text-white font-fontBold rounded-md"
        onClick={handleSubmit}
      >
        {submitText}
      </button>
      <button
        className="px-8 text-xl py-3 bg-slate-200 text-black font-fontBold rounded-md"
        onClick={handleCancel}
      >
        Cancel
      </button>
    </div>
  );
};

export default OptionsButton;
