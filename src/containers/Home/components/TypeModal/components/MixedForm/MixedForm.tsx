import React, { useState } from "react";
import { DATA_TYPES } from "../../../../../../shared/constant/DATA_TYPES";
import {
  DatasetField,
  FieldDataType,
  MixedDataType,
  SingleValueDataType,
} from "../../../../../../shared/interfaces/datasets.interface";
import { IFieldInfo } from "../../Modal";
import FormData from "./FormData";
import ObjectData from "./ObjectData";

const MixedForm = ({
  handleChangeDataType,
  fieldInfo,
}: {
  handleChangeDataType: (obj: FieldDataType) => void;
  fieldInfo: IFieldInfo<MixedDataType>;
}) => {
  const [selectField, setSelectField] = useState<
    DatasetField<SingleValueDataType>
  >(fieldInfo.dataType.object[0]);

  const handleChangeSelectField = (f: DatasetField<SingleValueDataType>) => {
    handleChangeDataType({
      ...fieldInfo,
      type: DATA_TYPES.MIXED,
      object: fieldInfo.dataType.object.map((el, i) => {
        if (el.id === f.id) {
          el = f;
        }

        return el;
      }),
    });

    setSelectField(f);
  };

  return (
    <div className="flex w-full xl:flex-row flex-col-reverse">
      <FormData
        selectField={selectField}
        handleChangeSelectField={handleChangeSelectField}
      />
      <ObjectData
        selectField={selectField}
        fieldInfo={fieldInfo}
        handleChangeSelectField={handleChangeSelectField}
        handleChangeDataType={handleChangeDataType}
      />
    </div>
  );
};

export default MixedForm;
