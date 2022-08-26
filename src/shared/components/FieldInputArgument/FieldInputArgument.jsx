import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import React, { useEffect, useState } from "react";
import { Calendar } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";
import { titlePipe } from "../../helpers/titlePipe";
import { FIELDS_INPUT_TYPES } from "../../helpers/datasetsUtils";
import { InputText } from "primereact/inputtext";

const FieldInputArgument = ({
  arg,
  handleChangeArguments,
  allArguments = {},
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const keys = Object.keys(allArguments);
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === arg.argument) {
        setValue(Object.values(allArguments)[i]);
      }
    }
  }, [arg, allArguments]);

  if (arg.inputType === FIELDS_INPUT_TYPES.SELECT)
    return (
      <Dropdown
        options={arg.selectValues}
        placeholder={`Select ${titlePipe(arg.argument)}`}
        onChange={(e) => {
          handleChangeArguments({
            value: e.value,
            field: arg.argument,
          });
        }}
        value={value}
      ></Dropdown>
    );
  else if (
    arg.inputType === FIELDS_INPUT_TYPES.NUMBER ||
    arg.inputType === FIELDS_INPUT_TYPES.FLOAT
  )
    return (
      <InputNumber
        value={value ? value : 1}
        onChange={(e) => {
          handleChangeArguments({
            value: e.value,
            field: arg.argument,
          });
        }}
        min={arg.inputType === FIELDS_INPUT_TYPES.FLOAT ? 0.1 : 1}
        max={1000}
        step={arg.inputType === FIELDS_INPUT_TYPES.NUMBER ? 1 : 0.1}
      />
    );
  else if (arg.inputType === FIELDS_INPUT_TYPES.BOOLEAN)
    return (
      <Checkbox
        onChange={(e) => {
          handleChangeArguments({
            value: e.checked,
            field: arg.argument,
          });
        }}
        checked={value}
      />
    );
  else if (arg.inputType === FIELDS_INPUT_TYPES.DATE) {
    return (
      <Calendar
        dateFormat="dd/mm/yy"
        value={value}
        onChange={(e) => {
          handleChangeArguments({
            value: e.value,
            field: arg.argument,
          });
        }}
      ></Calendar>
    );
  } else if (arg.inputType === FIELDS_INPUT_TYPES.CUSTOM_ARRAY) {
    return (
      <CustomArrayInput
        arg={arg}
        handleChangeArguments={handleChangeArguments}
      />
    );
  }

  return <></>;
};

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

const FilterDataType = ({ value, handleChange, type, i }) => {
  switch (type) {
    case FIELDS_INPUT_TYPES.TEXT:
      return (
        <InputText
          value={value}
          onChange={(e) => handleChange(i, e.target.value)}
        />
      );
    case FIELDS_INPUT_TYPES.NUMBER:
      return (
        <InputNumber
          onChange={(e) => handleChange(i, e.value)}
          value={value}
          step={1}
        />
      );
    case FIELDS_INPUT_TYPES.DATE:
      return (
        <Calendar value={value} onChange={(e) => handleChange(i, e.value)} />
      );
    case FIELDS_INPUT_TYPES.FLOAT:
      return (
        <InputNumber
          onChange={(e) => handleChange(i, e.value)}
          value={value}
          step={0.1}
        />
      );
    case FIELDS_INPUT_TYPES.BOOLEAN:
      return (
        <Checkbox
          onChange={(e) => handleChange(i, e.checked)}
          checked={value}
        />
      );
    default:
      return <></>;
  }
};

export default FieldInputArgument;
