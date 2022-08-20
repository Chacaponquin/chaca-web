import React from "react";
import clsx from "clsx";
import { titlePipe } from "../../../../../shared/helpers/titlePipe";
import FieldInputArgument from "../../../../../shared/components/FieldInputArgument/FieldInputArgument";

const FieldOptionDiv = ({
  field,
  handleChangeArguments,
  isSelected,
  handleChangeOptionSelected,
  allArguments,
}) => {
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
      onClick={() => handleChangeOptionSelected(field)}
    >
      <p className="mb-0 pointer-events-none text-center text-lg">
        {field.name}
      </p>

      <div className="grid grid-cols-2 justify-between gap-4 esm:grid-cols-1">
        {isSelected &&
          field.arguments.map((arg, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-1 !text-base arguments-container">
                <p className="mb-0 font-fontBold w-max">
                  {titlePipe(arg.argument)}:
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
    </div>
  );
};

export default FieldOptionDiv;
