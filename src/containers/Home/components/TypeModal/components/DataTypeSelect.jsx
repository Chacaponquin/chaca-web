import clsx from "clsx";
import React from "react";
import { DATA_TYPES } from "../../../helpers/datasetsUtils";

const DataTypeSelect = ({ selectedDataType, handleChangeDataType }) => {
  const divClass = (dat) =>
    clsx(
      "px-12 py-2 text-2xl rounded-2xl font-fontExtraBold",
      { "bg-secondColor text-white": selectedDataType === dat },
      { "bg-slate-200 text-black": !(selectedDataType === dat) }
    );

  return (
    <div className="w-full h-[15%] flex items-center justify-center gap-5 overflow-auto">
      {Object.values(DATA_TYPES).map((dat, i) => (
        <div
          className={divClass(dat)}
          key={i}
          onClick={() => handleChangeDataType(dat)}
        >
          {dat}
        </div>
      ))}
    </div>
  );
};

export default DataTypeSelect;
