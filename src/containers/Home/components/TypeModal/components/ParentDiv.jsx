import React from "react";
import clsx from "clsx";
import { titlePipe } from "../../../../../shared/helpers/titlePipe";

const ParentDiv = ({ parent, handleChangeParentSelected, isSelected }) => {
  const parentClass = () => {
    return clsx("px-5 py-2 text-xl rounded-md text-center", {
      "bg-principalColor text-white ": isSelected,
      "bg-slate-100 text-black": !isSelected,
    });
  };

  return (
    <div
      className={parentClass()}
      onClick={() => handleChangeParentSelected(parent)}
    >
      <p className="mb-0 capitalize font-fontBold pointer-events-none">
        {titlePipe(parent.name)}
      </p>
    </div>
  );
};

export default ParentDiv;
