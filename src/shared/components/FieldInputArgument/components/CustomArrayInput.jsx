import { Dropdown } from "primereact/dropdown";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FIELDS_INPUT_TYPES } from "../../../helpers/datasetsUtils";
import FilterDataType from "./FilterDataType";

const CustomArrayInput = ({ handleChangeArguments, arg }) => {
  const [arrayValues, setArrayValues] = useState(["Hello"]);
  const [selectTypes, setSelectTypes] = useState([FIELDS_INPUT_TYPES.TEXT]);

  const handleChangeSelect = (index, value) => {
    setSelectTypes(
      selectTypes.map((el, i) => {
        if (i === index) el = value;

        return el;
      })
    );
  };

  const handleChangeInputValue = (index, value) => {
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
    setSelectTypes([...selectTypes, FIELDS_INPUT_TYPES.TEXT]);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col items-center gap-1">
        {arrayValues.map((el, i) => {
          return (
            <div className="grid grid-cols-2 items-center gap-1" key={i}>
              <FilterDataType
                value={arrayValues[i]}
                handleChange={handleChangeInputValue}
                i={i}
                type={selectTypes[i]}
              />

              <Dropdown
                options={Object.values(FIELDS_INPUT_TYPES).filter(
                  (el) =>
                    el !== FIELDS_INPUT_TYPES.CUSTOM_ARRAY &&
                    el !== FIELDS_INPUT_TYPES.SELECT
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
