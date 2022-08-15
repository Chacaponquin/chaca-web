import React from "react";
import clsx from "clsx";
import FieldInputArgument from "./FieldInputArgument";
import { titlePipe } from "../helpers/titlePipe";

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

      {isSelected &&
        field.arguments &&
        field.arguments.length &&
        field.arguments.map((arg, i) => (
          <React.Fragment key={i}>
            <div className="grid grid-rows-1 auto-cols-auto items-center gap-1 !text-sm arguments-container">
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
  );
};

export default FieldOptionDiv;
