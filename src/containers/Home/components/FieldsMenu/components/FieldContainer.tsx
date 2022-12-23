import { useContext, Fragment } from "react";
import { ArrowRight, Config } from "../../../../../shared/assets/icons";
import { DATA_TYPES } from "../../../../../shared/constant/DATA_TYPES";
import {
  DatasetField,
  FieldDataType,
} from "../../../../../shared/interfaces/datasets.interface";
import clsx from "clsx";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";

const Point = () => {
  return <div className="bg-principal-bg w-[8px] h-[8px] rounded-full"></div>;
};

const FieldContainer = ({
  margin,
  field,
}: {
  field: DatasetField<FieldDataType>;
  margin: number;
}) => {
  const { selectField, handleSelectField, selectedDataset } =
    useContext(DatasetsContext);

  const divClass = () => {
    return clsx(
      "flex flex-col w-full cursor-pointer transition-all duration-300 hover:bg-slate-100 px-2",
      {
        "bg-slate-100": selectField && selectField.id === field.id,
      }
    );
  };

  const handleSelect = () => {
    handleSelectField(selectedDataset.id, field.id);
  };

  return (
    <div className={divClass()} onClick={handleSelect}>
      <div className={`flex items-center justify-between py-1 ml-${margin}`}>
        <div className="flex items-center">
          {field.dataType.type === DATA_TYPES.MIXED ? (
            <ArrowRight size={20} />
          ) : (
            <Point />
          )}

          <p className="ml-3">{field.name}</p>
        </div>

        <div className="">
          <Config size={18} />
        </div>
      </div>

      {field.dataType.type === DATA_TYPES.MIXED && (
        <Fragment>
          {field.dataType.object.map((s) => (
            <FieldContainer field={s} margin={margin + 4} />
          ))}
        </Fragment>
      )}
    </div>
  );
};

export default FieldContainer;
