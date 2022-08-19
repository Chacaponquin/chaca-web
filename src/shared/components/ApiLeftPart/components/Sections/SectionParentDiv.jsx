import React from "react";
import { useState } from "react";
import clsx from "clsx";
import Icon from "supercons";

const SectionParentDiv = ({ children, text }) => {
  const [seeOptions, setSeeOptions] = useState(false);

  const parentDivClass = () => {
    return clsx(
      "text-2xl px-8 py-2 w-full rounded-md flex cursor-pointer justify-between mb-2 transition-all duration-300",
      {
        "bg-slate-200": seeOptions,
      }
    );
  };

  const iconClass = () => {
    return clsx("transition-all duration-300", { "rotate-90": seeOptions });
  };

  const handleOpenOptions = () => {
    setSeeOptions(!seeOptions);
  };

  return (
    <div>
      <div className={"px-4 flex esm:px-1"} onClick={handleOpenOptions}>
        <div className={parentDivClass()}>
          <h1 className="font-fontBold">{text}</h1>
          <div className={iconClass()}>
            <Icon glyph="view-forward" />
          </div>
        </div>
      </div>

      {seeOptions && children}
    </div>
  );
};

export default SectionParentDiv;
