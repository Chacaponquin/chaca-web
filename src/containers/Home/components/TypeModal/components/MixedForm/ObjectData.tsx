import React, { useContext } from "react";
import { InputText } from "primereact/inputtext";
import { IFieldInfo } from "../../Modal";
import {
  DatasetField,
  FieldDataType,
  MixedDataType,
  SingleValueDataType,
} from "../../../../../../shared/interfaces/datasets.interface";
import Plus from "../../../../../../shared/assets/icons/Plus";
import { DATA_TYPES } from "../../../../../../shared/constant/DATA_TYPES";
import { CreateIntialData } from "../../../../helpers/CreateData";
import { AppConfigContext } from "../../../../../../shared/context/AppConfigContext";
import { DataTransform } from "../../../../../../shared/helpers/DataTransform";
import clsx from "clsx";

const ObjectData = ({
  fieldInfo,
  handleChangeSelectField,
  handleChangeDataType,
  selectField,
}: {
  fieldInfo: IFieldInfo<MixedDataType>;
  handleChangeSelectField: (f: DatasetField<SingleValueDataType>) => void;
  handleChangeDataType: (obj: FieldDataType) => void;
  selectField: DatasetField<SingleValueDataType>;
}) => {
  const { schemas } = useContext(AppConfigContext);

  const typeClass = (id: string) => {
    return clsx(
      "py-1 px-5 rounded-md cursor-pointer whitespace-nowrap",
      {
        "bg-principal-bg text-white": selectField.id === id,
      },
      { "bg-white text-black": selectField.id !== id }
    );
  };

  const showType = (dat: DatasetField<SingleValueDataType>) => {
    return `${DataTransform.titlePipe(dat.dataType.fieldType.parent)} / ${
      dat.dataType.fieldType.type
    } ${dat.isArray ? "[ ]" : ""}`;
  };

  const handleAddField = () => {
    const actualObjects = fieldInfo.dataType.object;
    actualObjects.push(new CreateIntialData(schemas).createField());

    handleChangeDataType({ type: DATA_TYPES.MIXED, object: actualObjects });
  };

  const handleChangeFieldName = (fID: string, value: string) => {
    const actualObjects = fieldInfo.dataType.object;
    const retObj = actualObjects.map((el) => {
      if (el.id === fID) {
        el.name = value;
      }

      return el;
    });

    handleChangeDataType({
      ...fieldInfo,
      type: DATA_TYPES.MIXED,
      object: retObj,
    });
  };

  return (
    <div className="flex flex-col px-10 py-5 rounded-md bg-slate-100 h-full overflow-y-auto w-full esm:px-4">
      <div className="text-2xl esm:text-xl font-fontBold text-secondColor">
        {"{"}
      </div>

      <div className="pl-7 flex flex-col gap-2 esm:pl-5">
        {fieldInfo.dataType.object.map((el, i) => (
          <div className={"flex gap-2 items-center text-base"} key={el.id}>
            <InputText
              className="w-[150px]"
              value={el.name}
              onChange={(e) => handleChangeFieldName(el.id, e.target.value)}
            />
            <p className="mb-0 text-lg font-fontBold">:</p>
            <div
              className={typeClass(el.id)}
              onClick={() => handleChangeSelectField(el)}
            >
              {showType(el)}
            </div>
          </div>
        ))}
      </div>

      <div className="text-2xl font-fontBold text-secondColor esm:text-xl">
        {"}"}
      </div>

      <div className="w-full flex justify-end">
        <button
          className="rounded-md flex items-center bg-white px-4 py-2 gap-3"
          onClick={handleAddField}
        >
          <Plus size={20} />
          <p className="mb-0 font-fontBold">Add Field</p>
        </button>
      </div>
    </div>
  );
};

export default ObjectData;
