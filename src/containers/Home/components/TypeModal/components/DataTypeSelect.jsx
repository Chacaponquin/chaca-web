import clsx from "clsx";
import React, { useContext } from "react";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { DATA_TYPES } from "../../../../../shared/helpers/datasetsUtils";
import { titlePipe } from "../../../../../shared/helpers/titlePipe";

const DataTypeSelect = ({ selectedDataType, handleChangeDataType }) => {
  const { datasets } = useContext(DatasetsContext);

  const divClass = (dat) =>
    clsx(
      "px-12 py-2 text-2xl rounded-lg font-fontExtraBold esm:px-7 esm:text-lg uppercase whitespace-nowrap transition-all duration-300 hover:scale-105",
      { "bg-secondColor text-white": selectedDataType === dat },
      { "bg-slate-200 text-black": !(selectedDataType === dat) },
      {
        hidden:
          (dat === DATA_TYPES.REF && datasets.length < 2) ||
          dat === DATA_TYPES.MIXED,
      }
    );

  return (
    <div className="w-full h-[80px] esm:h-[65px] flex items-center justify-center gap-5 overflow-auto">
      {Object.values(DATA_TYPES).map((dat, i) => (
        <button
          className={divClass(dat)}
          key={i}
          onClick={() => handleChangeDataType({ type: dat })}
        >
          {titlePipe(dat)}
        </button>
      ))}
    </div>
  );
};

export default DataTypeSelect;
