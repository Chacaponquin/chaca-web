import clsx from "clsx";
import React, { useContext } from "react";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { DATA_TYPES } from "../../../helpers/datasetsUtils";

const DataTypeSelect = ({ selectedDataType, handleChangeDataType }) => {
  const { datasets } = useContext(DatasetsContext);

  const divClass = (dat) =>
    clsx(
      "px-12 py-2 text-2xl rounded-lg font-fontExtraBold esm:px-7 esm:text-lg",
      { "bg-secondColor text-white": selectedDataType === dat },
      { "bg-slate-200 text-black": !(selectedDataType === dat) },
      {
        hidden:
          (dat === DATA_TYPES.REF && datasets.length < 2) ||
          dat === DATA_TYPES.MIXED,
      }
    );

  return (
    <div className="w-full h-[15%] flex items-center justify-center gap-5 overflow-auto">
      {Object.values(DATA_TYPES).map((dat, i) => (
        <div
          className={divClass(dat)}
          key={i}
          onClick={() => handleChangeDataType({ type: dat })}
        >
          {dat}
        </div>
      ))}
    </div>
  );
};

export default DataTypeSelect;
