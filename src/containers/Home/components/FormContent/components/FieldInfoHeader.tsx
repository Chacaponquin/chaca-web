import React from "react";
import { Delete } from "../../../../../shared/assets/icons";

const FieldInfoHeader = () => {
  const text = ["Dataset", "buenas", "tardes"];

  return (
    <div className="w-full bg-white py-3 flex justify-between items-center px-5">
      <div className="flex gap-3">
        {text.map((el, i) => (
          <>
            <p className="mb-0 text-lg font-fontBold">{el}</p>
            <p className="mb-0 text-lg font-fontBold">{">"}</p>
          </>
        ))}
      </div>

      <div>
        <button className="py-1 px-5 text-lg font-fontBold text-white bg-dangerColor rounded-md flex items-center fill-white">
          <Delete size={20} />
          <p className="mb-0 ml-2">Delete</p>
        </button>
      </div>
    </div>
  );
};

export default FieldInfoHeader;
