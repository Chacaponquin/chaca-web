import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import React, { useEffect, useState } from "react";
import { FIELDS_INPUT_TYPES } from "../../../helpers/datasetsUtils";
import { Calendar } from "primereact/calendar";
import { titlePipe } from "../helpers/titlePipe";

const FieldInputArgument = ({
  arg,
  handleChangeArguments,
  allArguments = [],
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const found = allArguments.find((el) => el.field === arg.argument);

    if (found) setValue(found.value);
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
        onValueChange={(e) => {
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
  }

  return <></>;
};

export default FieldInputArgument;
