import { Calendar } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import React from "react";
import { FIELDS_INPUT_TYPES } from "../../../helpers/datasetsUtils";

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

export default FilterDataType;
