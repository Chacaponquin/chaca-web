import { Argument } from "../../../../../../../shared/interfaces/options.interface";
import { useContext, Fragment, useCallback } from "react";
import { DatasetsContext } from "../../../../../../../shared/context/DatasetsContext";
import {
  DatasetField,
  FieldArgument,
  SingleValueDataType,
} from "../../../../../../../shared/interfaces/datasets.interface";
import { DATASETS_ACTIONS } from "../../../../../constants/ACTION_TYPES";
import { DATA_TYPES } from "../../../../../../../shared/constant/DATA_TYPES";
import { ARGUMENT_TYPE } from "../../../../../../../shared/constant/ARGUMENT_TYPE";
import { Dropdown } from "primereact/dropdown";
import { DataTransform } from "../../../../../../../shared/helpers/DataTransform";
import { InputNumber } from "primereact/inputnumber";
import BooleanInput from "../../../../../../../shared/components/FieldInputArgument/components/BooleanInput";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";

const OptionArguments = ({
  args,
  field,
}: {
  args: Argument[];
  field: DatasetField<SingleValueDataType>;
}) => {
  return (
    <div className="grid grid-cols-2 gap-x-5 w-full px-5 mt-1">
      {args.map((a, i) => (
        <FieldArgumentContainer key={i} arg={a} field={field} />
      ))}
    </div>
  );
};

const FieldArgumentContainer = ({
  arg,
  field,
}: {
  arg: Argument;
  field: DatasetField<SingleValueDataType>;
}) => {
  const { datasetDispatch, selectedDataset } = useContext(DatasetsContext);

  const handleChangeArgumentValue = (value: FieldArgument) => {
    datasetDispatch({
      type: DATASETS_ACTIONS.CHANGE_FIELD_DATATYPE,
      payload: {
        datasetID: selectedDataset.id,
        fieldID: field.id,
        dataType: {
          type: DATA_TYPES.SINGLE_VALUE,
          fieldType: {
            ...field.dataType.fieldType,
            args: { ...field.dataType.fieldType.args, [arg.argument]: value },
          },
        },
      },
    });
  };

  return (
    <div className="flex py-1 gap-1 items-center">
      <p className="mb-0 text-sm">{arg.argument}: </p>
      <ArgumentFilter
        arg={arg}
        handleChangeArgumentValue={handleChangeArgumentValue}
        value={field.dataType.fieldType.args[arg.argument]}
      />
    </div>
  );
};

const ArgumentFilter = ({
  arg,
  value,
  handleChangeArgumentValue,
}: {
  arg: Argument;
  value: FieldArgument;
  handleChangeArgumentValue: (v: FieldArgument) => void;
}) => {
  const filterArgument = useCallback(() => {
    const textClass = "text-sm";

    switch (arg.inputType) {
      case ARGUMENT_TYPE.SELECT: {
        return (
          <Dropdown
            options={arg.selectValues as string[]}
            placeholder={`Select ${DataTransform.titlePipe(arg.argument)}`}
            onChange={(e) => {
              handleChangeArgumentValue(e.value);
            }}
            className={textClass}
            value={value}
          />
        );
      }
      case ARGUMENT_TYPE.NUMBER: {
        return (
          <InputNumber
            step={1}
            onChange={(e) => {
              handleChangeArgumentValue(e.value || value);
            }}
            value={value as number}
            className={textClass}
          />
        );
      }

      case ARGUMENT_TYPE.FLOAT: {
        return (
          <InputNumber
            step={0.1}
            onChange={(e) => {
              handleChangeArgumentValue(e.value || value);
            }}
            className={textClass}
            value={value as number}
          />
        );
      }

      case ARGUMENT_TYPE.BOOLEAN: {
        return (
          <BooleanInput
            onChange={(value) => {
              handleChangeArgumentValue(value);
            }}
          />
        );
      }

      case ARGUMENT_TYPE.DATE: {
        return (
          <Calendar
            dateFormat="dd/mm/yy"
            value={value as Date}
            onChange={(e) => handleChangeArgumentValue(e.value as Date)}
            className={textClass}
          />
        );
      }

      case ARGUMENT_TYPE.TEXT: {
        return (
          <InputText
            value={value as string}
            onChange={(e) => handleChangeArgumentValue(e.target.value)}
            className={textClass}
          />
        );
      }

      default:
        return <Fragment></Fragment>;
    }
  }, [arg, handleChangeArgumentValue, value]);

  return <Fragment>{filterArgument()}</Fragment>;
};

export default OptionArguments;
