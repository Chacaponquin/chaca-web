import React from "react";
import LoaderContainer from "../../../shared/components/Loader/LoaderContainer";

const OptionsButton = ({
  submitText,
  handleSubmit,
  handleCancel,
  loading = false,
}) => {
  return (
    <div className="w-full flex justify-end gap-3 esm:justify-center">
      <button
        className="px-8 text-xl py-3 bg-principal-bg text-white font-fontBold rounded-md"
        onClick={handleSubmit}
      >
        {submitText}
      </button>
      <LoaderContainer className="w-[55px]" loading={loading}>
        <button
          className="px-8 text-xl py-3 bg-slate-200 text-black font-fontBold rounded-md"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </LoaderContainer>
    </div>
  );
};

export default OptionsButton;
