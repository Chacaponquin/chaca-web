import React, { useState } from "react";
import Icon from "supercons";
import CSVIcon from "./assets/CSVIcon";
import JSONIcon from "./assets/JSONIcon";
import clsx from "clsx";

const CreationModal = ({ handleSubmit }) => {
  const formatOptions = [
    { format: "JSON", icon: JSONIcon },
    { format: "CSV", icon: CSVIcon },
  ];

  const [selectedFormat, setSelectedFormat] = useState(null);

  const handleSelectFormat = (format) => {
    setSelectedFormat(format);
  };

  const typeButton = (format) => {
    return clsx(
      "flex items-center gap-3 px-6 py-2 rounded-md",
      {
        "bg-principalColor !text-white fill-white": format === selectedFormat,
      },
      { "bg-slate-200 text-black": format !== selectedFormat }
    );
  };
  return (
    <div className="fixed bg-black/50 w-full h-screen top-0 left-0 flex items-center justify-center">
      <div className="bg-white p-4 rounded-md w-[80%] h-[80%] flex flex-col gap-3">
        <div className="flex items-center gap-5 justify-end">
          {formatOptions.map((el, i) => (
            <div
              key={i}
              className={typeButton(el.format)}
              onClick={() => handleSelectFormat(el.format)}
            >
              <el.icon />
              <p className="mb-0 text-base">{el.format}</p>
            </div>
          ))}

          <div className={typeButton("Buenas")}>
            <Icon glyph="private-outline" />
          </div>
        </div>

        <div className="flex justify-end w-full">
          <button
            className="px-5 py-2 font-fontBold text-xl bg-principal-bg text-white"
            onClick={handleSubmit}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreationModal;
