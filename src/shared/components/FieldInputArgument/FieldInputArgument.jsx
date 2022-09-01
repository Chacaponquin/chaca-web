import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import React, { useEffect, useState } from "react";
import { Calendar } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";
import { titlePipe } from "../../helpers/titlePipe";
import { FIELDS_INPUT_TYPES } from "../../helpers/datasetsUtils";
import CustomArrayInput from "./components/CustomArrayInput";

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

export default FieldInputArgument;
