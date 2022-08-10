import React from "react";
import clsx from "clsx";
import FieldInputArgument from "./FieldInputArgument";

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
      <p className="mb-0 pointer-events-none">{field.name}</p>

      {isSelected &&
        field.arguments &&
        field.arguments.length &&
        field.arguments.map((arg, i) => (
          <FieldInputArgument
            key={i}
            handleChangeArguments={handleChangeArguments}
            allArguments={allArguments}
            arg={arg}
          />
        ))}
    </div>
  );
};

export default FieldOptionDiv;
