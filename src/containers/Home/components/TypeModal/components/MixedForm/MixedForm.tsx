import React, { useState, useEffect } from "react";
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
    setSelectField(f);
  };

  useEffect(() => {
    handleChangeDataType({
      ...fieldInfo,
      type: DATA_TYPES.MIXED,
      object: fieldInfo.dataType.object.map((el) => {
        if (el.id === selectField.id) {
          el = selectField;
        }

        return el;
      }),
    });
  }, [selectField]);

  return (
    <div className="flex w-full">
      <FormData
        selectField={selectField}
        handleChangeSelectField={handleChangeSelectField}
      />
      <ObjectData
        fieldInfo={fieldInfo}
        handleChangeSelectField={handleChangeSelectField}
        handleChangeDataType={handleChangeDataType}
      />
    </div>
  );
};

export default MixedForm;
