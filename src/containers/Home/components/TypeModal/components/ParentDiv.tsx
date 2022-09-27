import React from "react";
import clsx from "clsx";
import { DataTransform } from "../../../../../shared/helpers/DataTransform";


const ParentDiv = ({
  parent,
  handleChangeParentSelected,
  isSelected,
}: {
  isSelected: boolean;
  parent: string;
  handleChangeParentSelected: (parent: string) => void;
}) => {
  const parentClass = () => {
    return clsx("px-5 py-2 text-xl rounded-md text-center h-max w-full", {
      "bg-secondColor text-white ": isSelected,
      "bg-slate-100 text-black": !isSelected,
    });
  };

  return (
    <div
      className={parentClass()}
      onClick={() => handleChangeParentSelected(parent)}
    >
      <p className="mb-0 capitalize font-fontBold pointer-events-none whitespace-nowrap">
        {DataTransform.titlePipe(parent)}
      </p>
    </div>
  );
};

export default ParentDiv;
