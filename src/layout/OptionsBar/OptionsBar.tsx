import React from "react";
import { Code, Home } from "../../shared/assets/icons";

const OptionsBar = () => {
  const divClass =
    "flex flex-col bg-white items-center py-1 cursor-pointer rounded-sm";
  const textClass = "text-sm";
  const iconSize = 25;

  return (
    <div className="top-0 left-0 w-[110px] h-screen bg-black">
      <div className="flex flex-col px-2 py-2 gap-1">
        <div className={divClass}>
          <Home size={iconSize} />
          <p className={textClass}>Home</p>
        </div>

        <div className={divClass}>
          <Code size={iconSize} />
          <p className={textClass}>Api</p>
        </div>
      </div>
    </div>
  );
};

export default OptionsBar;
