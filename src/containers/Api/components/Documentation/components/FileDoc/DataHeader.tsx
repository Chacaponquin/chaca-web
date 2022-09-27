import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const DataHeader = ({ name, route }: { name: string; route: string }) => {
  const [isCopy, setIsCopy] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsCopy(false);
    }, 3000);
  }, [isCopy]);

  const handleCopy = () => {
    setIsCopy(true);
    navigator.clipboard.writeText(route);
  };

  return (
    <div className="flex md:gap-7 gap-3 md:items-center items-start md:flex-row flex-col ">
      <h1
        className={
          "font-fontBold md:text-2xl esm:text-xl sm:text-xl whitespace-nowrap px-5 rounded-md py-2 bg-principal-bg text-white"
        }
      >
        {name}
      </h1>

      <div className="flex gap-4 items-center esm:hidden">
        <div
          className={
            "text-black font-fontCodeBold xl:text-base bg-slate-100 px-4 py-2 rounded-md text-sm whitespace-nowrap"
          }
        >
          GET {route}
        </div>

        <div className="flex items-center gap-2 xl:flex-row flex-col esm:hidden">
          <button
            className="w-[50px] h-[50px] rounded-full flex items-center justify-center transition-all duration-200 hover:bg-slate-100"
            onClick={handleCopy}
          >
            <Icon glyph="copy" size={32} />
          </button>

          {isCopy && (
            <div className="px-3 py-1 bg-principalColor/30 rounded-md text-principalColor text-base">
              Copied
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataHeader;
