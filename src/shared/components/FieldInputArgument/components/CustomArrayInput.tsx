import { Dropdown } from "primereact/dropdown";
import { useEffect } from "react";
import { useState } from "react";
import { ARGUMENT_TYPE } from "../../../constant/ARGUMENT_TYPE";
import { FieldArgument } from "../../../interfaces/datasets.interface";
import FilterDataType from "./FilterDataType";
import { v4 as uuid } from "uuid";
import { ArgumentSchema } from "../../../interfaces/options.interface";

const CustomArrayInput = ({
  handleChangeArguments,
  arg,
}: {
  arg: ArgumentSchema;
  handleChangeArguments: ({
    value,
    field,
  }: {
    value: FieldArgument;
    field: string;
  }) => void;
}) => {
  const [arrayValues, setArrayValues] = useState<FieldArgument[]>(["Hello"]);
  const [selectTypes, setSelectTypes] = useState<ARGUMENT_TYPE[]>([
    ARGUMENT_TYPE.TEXT,
  ]);

  const handleChangeSelect = (index: number, value: ARGUMENT_TYPE) => {
    setSelectTypes(
      selectTypes.map((el, i) => {
        if (i === index) el = value;

        return el;
      })
    );
  };

  const handleChangeInputValue = (index: number, value: FieldArgument) => {
    setArrayValues(
      arrayValues.map((el, i) => {
        if (index === i) el = value;

        return el;
      })
    );
  };

  useEffect(() => {
    handleChangeArguments({
      field: arg.argument,
      value: arrayValues,
    });
  }, [arrayValues, arg]);

  const handleNewElement = () => {
    setArrayValues([...arrayValues, "Hello"]);
    setSelectTypes([...selectTypes, ARGUMENT_TYPE.TEXT]);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col items-center gap-1">
        {arrayValues.map((el, i) => {
          return (
            <div className="grid grid-cols-2 items-center gap-1" key={uuid()}>
              <FilterDataType
                value={arrayValues[i]}
                handleChange={handleChangeInputValue}
                i={i}
                type={selectTypes[i]}
              />

              <Dropdown
                options={Object.values(ARGUMENT_TYPE).filter(
                  (el) =>
                    el !== ARGUMENT_TYPE.CUSTOM_ARRAY &&
                    el !== ARGUMENT_TYPE.SELECT
                )}
                placeholder="Select DataType"
                value={selectTypes[i]}
                onChange={(e) => handleChangeSelect(i, e.value)}
              ></Dropdown>
            </div>
          );
        })}
      </div>

      <div className="flex w-full justify-end">
        <button
          className="px-3 py-1 text-black bg-white rounded-md text-base"
          onClick={handleNewElement}
        >
          New Element
        </button>
      </div>
    </div>
  );
};
export default CustomArrayInput;
