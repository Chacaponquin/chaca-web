import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import React, { useEffect, useState } from "react";
import { Calendar } from "primereact/calendar";
import BooleanInput from "./components/BooleanInput";
import { ArgumentSchema } from "../../interfaces/options.interface";
import { FieldArgument } from "../../interfaces/datasets.interface";
import { ARGUMENT_TYPE } from "../../constant/ARGUMENT_TYPE";
import { DataTransform } from "../../helpers/DataTransform";
import { InputText } from "primereact/inputtext";

interface ArgumentProps {
  arg: ArgumentSchema;
  handleChangeArguments: ({
    value,
    field,
  }: {
    value: FieldArgument;
    field: string;
  }) => void;
  allArguments: { [key: string]: FieldArgument };
}

const FieldInputArgument = ({
  arg,
  handleChangeArguments,
  allArguments = {},
}: ArgumentProps) => {
  const [value, setValue] = useState<FieldArgument>("");

  useEffect(() => {
    const keys = Object.keys(allArguments);
    for (const key of keys) {
      if (key === arg.argument) {
        setValue(allArguments[key]);
      }
    }
  }, [arg, allArguments]);

  if (arg.inputType === ARGUMENT_TYPE.SELECT)
    return (
      <Dropdown
        options={arg.selectValues as string[]}
        placeholder={`Select ${DataTransform.titlePipe(arg.argument)}`}
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
    arg.inputType === ARGUMENT_TYPE.NUMBER ||
    arg.inputType === ARGUMENT_TYPE.FLOAT
  )
    return (
      <InputNumber
        value={value ? (value as number) : 1}
        onChange={(e) => {
          handleChangeArguments({
            value: e.value!,
            field: arg.argument,
          });
        }}
        min={arg.inputType === ARGUMENT_TYPE.FLOAT ? 0.1 : 1}
        max={1000}
        step={arg.inputType === ARGUMENT_TYPE.NUMBER ? 1 : 0.1}
      />
    );
  else if (arg.inputType === ARGUMENT_TYPE.TEXT) {
    return (
      <InputText
        value={value as string}
        onChange={(e) => {
          handleChangeArguments({
            value: e.target.value as string,
            field: arg.argument,
          });
        }}
      />
    );
  } else if (arg.inputType === ARGUMENT_TYPE.BOOLEAN)
    return (
      <BooleanInput
        onChange={(value) => {
          handleChangeArguments({
            value: value,
            field: arg.argument,
          });
        }}
      />
    );
  else if (arg.inputType === ARGUMENT_TYPE.DATE) {
    return (
      <Calendar
        dateFormat="dd/mm/yy"
        value={value as Date}
        onChange={(e) => {
          handleChangeArguments({
            value: e.value as Date,
            field: arg.argument,
          });
        }}
      ></Calendar>
    );
  }

  return <></>;
};

export default FieldInputArgument;
