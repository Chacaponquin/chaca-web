import React, { useState } from "react";
import clsx from "clsx";

const titlePipe = (name) => {
  let newName = name.toLowerCase();

  return newName[0].toUpperCase() + newName.substring(1);
};

const Modal = ({
  fieldID,
  fieldsOptions = [],
  handleCloseModal,
  handleSelectType,
}) => {
  const [parentSelect, setParentSelect] = useState(fieldsOptions[0]);

  const [optionSelected, setOptionSelected] = useState(null);

  const parentClass = (id) => {
    return clsx("px-5 py-3 text-2xl rounded-md text-center", {
      "bg-principalColor text-white ": id === parentSelect.id,
      "bg-slate-100 text-black": id !== parentSelect.id,
    });
  };

  const optionCLass = (option) => {
    return clsx(
      "h-max px-4 py-2 bg-secondColor rounded-md text-white",
      { "bg-secondColor text-white": option === optionSelected },
      { "bg-slate-200 text-black": optionSelected !== option }
    );
  };

  return (
    <div className="w-full h-screen fixed bg-black/50 flex justify-center items-center z-50 top-0">
      <div className="flex flex-col bg-white w-[80%] rounded-lg py-5 px-8 h-max-[80%]">
        <div className="flex justify-start w-full">
          <div className="flex flex-col gap-3 h-full overflow-auto w-[25%]">
            {fieldsOptions.map((el, i) => (
              <ParentDiv
                key={i}
                el={el}
                setParentSelect={setParentSelect}
                parentClass={parentClass}
              />
            ))}
          </div>

          <div className="h-full grid grid-cols-4 overflow-auto gap-3 p-4 w-[75%]">
            {parentSelect &&
              parentSelect.fields.map((el, i) => (
                <FieldOptionDiv
                  field={el}
                  key={i}
                  optionClass={optionCLass}
                  setOptionSelected={setOptionSelected}
                />
              ))}
          </div>
        </div>

        <div className="w-full flex justify-end gap-3">
          <button
            className="px-8 text-xl py-3 bg-principal-bg text-white font-fontBold rounded-md"
            onClick={() =>
              handleSelectType({
                fieldID: fieldID,
                parent: parentSelect.name,
                type: optionSelected,
              })
            }
          >
            Save
          </button>
          <button
            className="px-8 text-xl py-3 bg-slate-200 text-black font-fontBold rounded-md"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const FieldOptionDiv = ({ field, optionClass, setOptionSelected }) => {
  return (
    <div
      className={optionClass(field)}
      onClick={() => setOptionSelected(field)}
    >
      <p className="mb-0 pointer-events-none"> {field}</p>
    </div>
  );
};

const ParentDiv = ({ parentClass, el, setParentSelect }) => {
  return (
    <div className={parentClass(el.id)} onClick={() => setParentSelect(el)}>
      <p className="mb-0 capitalize font-fontBold pointer-events-none">
        {titlePipe(el.name)}
      </p>
    </div>
  );
};

export default Modal;
