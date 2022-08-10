import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import React, { useEffect, useState } from "react";
import { FIELDS_INPUT_TYPES } from "../../../helpers/datasetsUtils";
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
      <div className="flex items-center gap-2">
        <p className="mb-0 font-fontBold">{titlePipe(arg.argument)}:</p>

        <Dropdown
          options={arg.selectValues}
          placeholder={`Select ${arg.argument}`}
          onChange={(e) => {
            handleChangeArguments({
              value: e.value,
              field: arg.argument,
            });
          }}
          value={value}
        ></Dropdown>
      </div>
    );
  else if (arg.inputType === FIELDS_INPUT_TYPES.NUMBER)
    return (
      <div className="flex items-center gap-2">
        <p className="mb-0 font-fontBold">{titlePipe(arg.argument)}:</p>

        <InputNumber
          value={value ? value : 1}
          onValueChange={(e) => {
            handleChangeArguments({
              value: e.value,
              field: arg.argument,
            });
          }}
          min={1}
          max={100}
        />
      </div>
    );

  return <></>;
};

export default FieldInputArgument;
