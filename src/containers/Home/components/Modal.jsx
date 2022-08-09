import React, { useState } from "react";
import clsx from "clsx";
import { DATA_TYPES, FIELDS_INPUT_TYPES } from "../helpers/datasetsUtils";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";

const titlePipe = (name) => {
  let newName = name.toLowerCase();

  return newName[0].toUpperCase() + newName.substring(1);
};

const Modal = ({
  datasetID,
  fieldID,
  fieldsOptions = [],
  handleCloseModal,
  handleSelectType,
}) => {
  const [typeInfo, setTypeInfo] = useState({
    fieldID: fieldID,
    parent: fieldsOptions[0],
    type: fieldsOptions[0].fields[0],
    dataType: DATA_TYPES.SINGLE_VALUE,
    args: [],
  });

  const handleChangeArguments = ({ value, field }) => {
    const { args } = typeInfo;

    const findArgument = args.find(
      (el) => el.field === field && el.value === value
    );

    if (!findArgument) {
      let newArgs = [...args, { field, value }];
      let newData = { ...typeInfo, args: newArgs };

      setTypeInfo(newData);
    }
  };

  const handleChangeOptionSelected = (field) => {
    if (typeInfo.type.name !== field.name)
      setTypeInfo({ ...typeInfo, args: [], type: field });
  };

  const selectFieldType = () => {
    const { parent, type, ...rest } = typeInfo;

    handleSelectType(datasetID, {
      parent: parent.name,
      type: type.name,
      ...rest,
    });

    handleCloseModal();
  };

  const handleChangeParentSelected = (parent) => {
    setTypeInfo({ ...typeInfo, parent, type: parent.fields[0] });
  };

  const parentClass = (id) => {
    return clsx("px-5 py-2 text-xl rounded-md text-center", {
      "bg-principalColor text-white ": id === typeInfo.parent.id,
      "bg-slate-100 text-black": id !== typeInfo.parent.id,
    });
  };

  const optionCLass = (option) => {
    return clsx(
      "h-max px-4 py-2 bg-secondColor rounded-md text-white flex flex-col cursor-pointer",
      { "bg-secondColor text-white": option.name === typeInfo.type.name },
      { "bg-slate-200 text-black": typeInfo.type.name !== option.name }
    );
  };

  return (
    <div className="w-full h-screen fixed bg-black/50 flex justify-center items-center z-50 top-0 left-0">
      <div className="flex flex-col bg-white w-[90%] sm:w-[80%] rounded-lg py-5 px-8 sm:h-[80%] h-[90%]">
        <div className="flex sm:flex-row flex-col gap-3 justify-start w-full h-[90%]">
          <div className="flex sm:flex-col gap-3 sm:h-full overflow-auto sm:w-[25%] w-full">
            {fieldsOptions.map((el, i) => (
              <ParentDiv
                key={i}
                parent={el}
                handleChangeParentSelected={handleChangeParentSelected}
                parentClass={parentClass}
              />
            ))}
          </div>

          <div className="sm:h-full grid xl:grid-cols-3 grid-cols-2 esm:grid-cols-1 overflow-auto gap-3 w-full sm:w-[75%]">
            {typeInfo.parent &&
              typeInfo.parent.fields.map((el, i) => (
                <FieldOptionDiv
                  field={el}
                  key={i}
                  isSelected={el.name === typeInfo.type.name}
                  optionClass={optionCLass}
                  handleChangeOptionSelected={handleChangeOptionSelected}
                  handleChangeArguments={handleChangeArguments}
                />
              ))}
          </div>
        </div>

        <div className="w-full flex justify-end gap-3 esm:justify-center">
          <button
            className="px-8 text-xl py-3 bg-principal-bg text-white font-fontBold rounded-md"
            onClick={selectFieldType}
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

const FieldOptionDiv = ({
  field,
  optionClass,
  handleChangeArguments,
  isSelected,
  handleChangeOptionSelected,
}) => {
  return (
    <div
      className={optionClass(field)}
      onClick={() => handleChangeOptionSelected(field)}
    >
      <p className="mb-0 pointer-events-none">{field.name}</p>

      {isSelected &&
        field.arguments &&
        field.arguments.length &&
        field.arguments.map((arg, i) => {
          if (arg.inputType === FIELDS_INPUT_TYPES.SELECT)
            return (
              <div className="flex items-center gap-2" key={i}>
                <p className="mb-0 font-fontBold">{titlePipe(arg.argument)}:</p>

                <Dropdown
                  options={arg.selectValues}
                  placeholder={`Select ${arg.argument}`}
                  onChange={(e) => {
                    handleChangeArguments({
                      value: e.value,
                      field: arg.argument,
                    });
                  }}
                ></Dropdown>
              </div>
            );
          else if (arg.inputType === FIELDS_INPUT_TYPES.NUMBER)
            return (
              <div className="flex items-center gap-2" key={i}>
                <p className="mb-0 font-fontBold">{titlePipe(arg.argument)}:</p>

                <InputNumber
                  value={25}
                  onValueChange={(e) => {
                    handleChangeArguments({
                      value: e.value,
                      field: arg.argument,
                    });
                  }}
                  min={1}
                  max={100}
                />
              </div>
            );
          else return <div></div>;
        })}
    </div>
  );
};

const ParentDiv = ({ parentClass, parent, handleChangeParentSelected }) => {
  return (
    <div
      className={parentClass(parent.id)}
      onClick={() => handleChangeParentSelected(parent)}
    >
      <p className="mb-0 capitalize font-fontBold pointer-events-none">
        {titlePipe(parent.name)}
      </p>
    </div>
  );
};

export default Modal;
