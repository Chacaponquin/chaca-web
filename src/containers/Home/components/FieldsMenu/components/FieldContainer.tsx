import React from "react";
import { ArrowRight, Config } from "../../../../../shared/assets/icons";
import { DATA_TYPES } from "../../../../../shared/constant/DATA_TYPES";
import {
  DatasetField,
  FieldDataType,
} from "../../../../../shared/interfaces/datasets.interface";

const FieldContainer = ({
  margin,
  field,
}: {
  field: DatasetField<FieldDataType>;
  margin: number;
}) => {
  return (
    <div className="flex flex-col">
      <div className={`flex items-center justify-between py-1 ml-${margin}`}>
        <div className="flex items-center">
          <ArrowRight size={20} />
          <p className="ml-2">{field.name}</p>
        </div>

        <div className="">
          <Config size={18} />
        </div>
      </div>

      {field.dataType.type === DATA_TYPES.MIXED && (
        <React.Fragment>
          {field.dataType.object.map((s) => (
            <FieldContainer field={s} margin={margin + 4} />
          ))}
        </React.Fragment>
      )}
    </div>
  );
};

export default FieldContainer;
