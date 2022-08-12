import React from "react";
import LoaderContainer from "../../../shared/components/Loader/LoaderContainer";

const OptionsButton = ({
  submitText,
  handleSubmit,
  handleCancel,
  loading = false,
}) => {
  return (
    <div className="w-full flex justify-end gap-3 esm:justify-center items-center">
      <LoaderContainer className="w-[40px] mr-5" loading={loading}>
        <button
          className="px-8 text-xl py-3 bg-principal-bg text-white font-fontBold rounded-md"
          onClick={handleSubmit}
        >
          {submitText}
        </button>
      </LoaderContainer>

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
