import React from "react";
import { useContext } from "react";
import { DatasetsContext } from "../../../../shared/context/DatasetsContext";
import clsx from "clsx";
import Icon from "supercons";

const Pagination = () => {
  const { datasets, selectedDataset, handleNextDat, handlePrevDat } =
    useContext(DatasetsContext);

  const optionClass = (id) => {
    return clsx(
      "w-[10px] h-[10px] rounded-full ",
      { "bg-principalColor": id === selectedDataset.id },
      { "bg-slate-200": id !== selectedDataset.id }
    );
  };

  return (
    <div className="flex justify-center lg:hidden">
      <div className="flex items-center gap-3">
        <button
          className="transition-all duration-300 hover:scale-110"
          onClick={handlePrevDat}
        >
          <Icon glyph="view-back" size={50} />
        </button>

        <div className="flex items-center gap-4">
          {datasets.map((el, i) => (
            <div key={i} className={optionClass(el.id)}></div>
          ))}
        </div>

        <button
          className="transition-all duration-300 hover:scale-110"
          onClick={handleNextDat}
        >
          <Icon glyph="view-forward" size={50} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
