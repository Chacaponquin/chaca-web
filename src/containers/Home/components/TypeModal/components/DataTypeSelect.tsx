import clsx from "clsx";
import { DATA_TYPES } from "../../../../../shared/constant/DATA_TYPES";
import { DataTransform } from "../../../../../shared/helpers/DataTransform";
import { FieldDataType } from "../../../../../shared/interfaces/datasets.interface";

const DataTypeSelect = ({
  selectedDataType,
  handleChangeDataType,
  showRef,
}: {
  showRef: boolean;
  handleChangeDataType: (obj: FieldDataType) => void;
  selectedDataType: DATA_TYPES;
}) => {
  const divClass = (dat: DATA_TYPES) =>
    clsx(
      "px-12 py-2 text-2xl rounded-lg font-fontExtraBold esm:px-7 esm:text-lg uppercase whitespace-nowrap transition-all duration-300 hover:scale-105",
      { "bg-principal-bg text-white": selectedDataType === dat },
      { "bg-slate-200 text-black": !(selectedDataType === dat) },
      {
        hidden: dat === DATA_TYPES.REF && showRef,
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
          {DataTransform.titlePipe(dat)}
        </button>
      ))}
    </div>
  );
};

export default DataTypeSelect;
