import { useContext, useState } from "react";
import { SubOption } from "../../../../../../../shared/interfaces/options.interface";
import { v4 as uuid } from "uuid";
import { RadioButton } from "primereact/radiobutton";
import { Config } from "../../../../../../../shared/assets/icons";
import clsx from "clsx";
import {
  DatasetField,
  SingleValueDataType,
} from "../../../../../../../shared/interfaces/datasets.interface";
import { DatasetsContext } from "../../../../../../../shared/context/DatasetsContext";
import { DATASETS_ACTIONS } from "../../../../../helpers/reducer/ACTION_TYPES";
import { DATA_TYPES } from "../../../../../../../shared/constant/DATA_TYPES";
import OptionArguments from "./OptionArguments";
import { useHome } from "../../../../../hooks/useHome";

const OptionsContainer = ({
  options,
  field,
}: {
  options: SubOption[];
  field: DatasetField<SingleValueDataType>;
}) => {
  return (
    <div className="flex flex-col gap-1 px-5">
      {options.map((o, i) => (
        <Option
          option={o}
          key={uuid()}
          field={field}
          isSelected={field.dataType.fieldType.type === o.name}
        />
      ))}
    </div>
  );
};

const Option = ({
  option,
  field,
  isSelected,
}: {
  option: SubOption;
  field: DatasetField<SingleValueDataType>;
  isSelected: boolean;
}) => {
  const { findType } = useHome();
  const { selectedDataset, datasetDispatch } = useContext(DatasetsContext);
  const [openArguments, setOpenArguments] = useState(isSelected);

  const handleSelectOption = () => {
    datasetDispatch({
      type: DATASETS_ACTIONS.CHANGE_FIELD_DATATYPE,
      payload: {
        datasetID: selectedDataset.id,
        fieldID: field.id,
        dataType: {
          type: DATA_TYPES.SINGLE_VALUE,
          fieldType: {
            args: {},
            parent: field.dataType.fieldType.parent,
            type: option.name,
          },
        },
      },
    });
  };

  const divClass = () => {
    return clsx(
      "w-full rounded-md flex items-center flex-col py-2 px-4",
      {
        "bg-slate-300": isSelected,
      },
      { "bg-slate-200": !isSelected }
    );
  };

  return (
    <div className={divClass()} key={uuid()}>
      <div className="flex items-center w-full justify-between">
        <div className="flex text-black items-center">
          <RadioButton
            checked={isSelected}
            onChange={(e) => {
              handleSelectOption();
            }}
          />
          <p className="text-base ml-4">{option.name}</p>
        </div>

        <button
          className="fill-black cursor-pointer"
          onClick={() => setOpenArguments(!openArguments)}
        >
          <Config size={20} />
        </button>
      </div>

      {openArguments && (
        <OptionArguments
          args={
            findType(
              field.dataType.fieldType.parent,
              field.dataType.fieldType.type
            ).arguments
          }
        />
      )}
    </div>
  );
};

export default OptionsContainer;
