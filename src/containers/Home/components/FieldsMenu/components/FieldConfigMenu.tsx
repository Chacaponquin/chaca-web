import React from "react";

const FieldConfigMenu = () => {
  const divClass =
    "cursor-pointer duration-300 w-full transition-all px-3 py-1 hover:bg-slate-200 text-sm";

  return (
    <div className="absolute bg-white shadow-md rounded-sm -translate-x-[85px] w-[100px]">
      <div className={divClass}>Edit</div>
      <div className={divClass}>Add Field</div>
    </div>
  );
};

export default FieldConfigMenu;
