import React from "react";
import { DATA_TYPES } from "../../../../../shared/constant/DATA_TYPES";

const DataTypeSelect = () => {
  return (
    <div className="bg-white flex w-full py-2 h-max justify-center gap-5">
      {Object.values(DATA_TYPES).map((el, i) => (
        <div
          key={i}
          className="px-7 py-2 text-white font-fontBold uppercase bg-principal-bg"
        >
          {el}
        </div>
      ))}
    </div>
  );
};

export default DataTypeSelect;
