import React from "react";
import clsx from "clsx";
import FieldInputArgument from "../../../../../../shared/components/FieldInputArgument/FieldInputArgument";
import { FieldArgument } from "../../../../../../shared/interfaces/datasets.interface";
import { FieldSchema } from "../../../../../../shared/interfaces/options.interface";
import { DataTransform } from "../../../../../../shared/helpers/DataTransform";

interface FieldOptionProps {
  option: FieldSchema;
  isSelected: boolean;
  allArguments: { [key: string]: FieldArgument };
  handleChangeArguments: ({
    value,
    field,
  }: {
    value: FieldArgument;
    field: string;
  }) => void;
  handleChangeOptionSelected: (field: string) => void;
}

const FieldOptionDiv = ({
  option,
  handleChangeArguments,
  isSelected,
  handleChangeOptionSelected,
  allArguments,
}: FieldOptionProps) => {
  const optionCLass = () => {
    return clsx(
      "h-max px-4 py-2 rounded-md flex flex-col cursor-pointer gap-2",
      { "bg-secondColor text-white": isSelected },
      { "bg-slate-200 text-black": !isSelected }
    );
  };

  return (
    <div
      className={optionCLass()}
      onClick={() => handleChangeOptionSelected(option.name)}
    >
      <p className="mb-0 pointer-events-none text-center text-lg">
        {option.name}
      </p>

      {isSelected && option.arguments.length > 0 && (
        <div className="grid grid-cols-1 justify-between gap-4 esm:grid-cols-1">
          {option.arguments.map((arg, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-1 !text-lg arguments-container">
                <p className="mb-0 font-fontBold w-max whitespace-nowrap">
                  {DataTransform.titlePipe(arg.argument)}:
                </p>
                <FieldInputArgument
                  handleChangeArguments={handleChangeArguments}
                  allArguments={allArguments}
                  arg={arg}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default FieldOptionDiv;
