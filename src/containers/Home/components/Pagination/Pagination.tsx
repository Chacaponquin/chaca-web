import { useContext } from "react";
import { DatasetsContext } from "../../../../shared/context/DatasetsContext";
import clsx from "clsx";
import ArrowRight from "../../../../shared/assets/icons/ArrowRight";
import ArrowLeft from "../../../../shared/assets/icons/ArrowLeft";

const Pagination = () => {
  const { datasets, selectedDataset, handleNextDat, handlePrevDat } =
    useContext(DatasetsContext);

  const optionClass = (id: string) => {
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
          <ArrowLeft />
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
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
