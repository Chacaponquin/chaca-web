import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { ARGUMENT_TYPE } from "../../../constant/ARGUMENT_TYPE";
import { FieldArgument } from "../../../interfaces/datasets.interface";
import BooleanInput from "./BooleanInput";

interface FilterDataProps {
  type: ARGUMENT_TYPE;
  handleChange: (i: number, value: string | number | boolean | Date) => void;
  i: number;
  value: FieldArgument;
}

const FilterDataType = ({ value, handleChange, type, i }: FilterDataProps) => {
  switch (type) {
    case ARGUMENT_TYPE.TEXT:
      return (
        <InputText
          value={value as string}
          onChange={(e) => handleChange(i, e.target.value)}
        />
      );
    case ARGUMENT_TYPE.NUMBER:
      return (
        <InputNumber
          onChange={(e) => handleChange(i, e.value!)}
          value={value as number}
          step={1}
        />
      );
    case ARGUMENT_TYPE.DATE:
      return (
        <Calendar
          value={value as Date}
          onChange={(e) => handleChange(i, e.value as Date)}
        />
      );
    case ARGUMENT_TYPE.FLOAT:
      return (
        <InputNumber
          onChange={(e) => handleChange(i, e.value!)}
          value={value as number}
          step={0.1}
        />
      );
    case ARGUMENT_TYPE.BOOLEAN:
      return <BooleanInput onChange={(value) => handleChange(i, value)} />;
    default:
      return <></>;
  }
};

export default FilterDataType;
