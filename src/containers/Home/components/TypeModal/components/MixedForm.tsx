import React from "react";

const MixedForm = () => {
  const objectData = () => {
    return "";
  };

  return (
    <div>
      <div className="flex flex-col px-10 py-5 rounded-md bg-slate-100">
        <div className="text-3xl font-fontBold text-secondColor">{"{"}</div>
        <div>{objectData()}</div>
        <div className="text-3xl font-fontBold text-secondColor">{"}"}</div>
      </div>
    </div>
  );
};

export default MixedForm;
