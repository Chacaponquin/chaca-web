import React, { useState } from "react";
import clsx from "clsx";
import { DATA_TYPES } from "../../helpers/datasetsUtils";
import { DATASETS_ACTIONS } from "../../helpers/reducer/ActionTypes";
import OptionsButton from "../OptionsButton";
import FieldOptionDiv from "./components/FieldOptionDiv";
import ParentDiv from "./components/ParentDiv";
import DataTypeSelect from "./components/DataTypeSelect";

const Modal = ({
  datasetID,
  fieldID,
  fieldsOptions = [],
  dispatch,
  handleCloseModal,
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

    const filterArguments = args.filter((el) => el.field !== field);

    filterArguments.push({ field, value });

    let newData = { ...typeInfo, args: filterArguments };

    setTypeInfo(newData);
  };

  const handleChangeOptionSelected = (field) => {
    if (typeInfo.type.name !== field.name)
      setTypeInfo({ ...typeInfo, args: [], type: field });
  };

  const handleChangeDataType = (dat) => {
    setTypeInfo({ ...typeInfo, dataType: dat });
  };

  const selectFieldType = () => {
    const { parent, type, ...rest } = typeInfo;

    dispatch({
      type: DATASETS_ACTIONS.SELECT_FIELD_TYPE,
      payload: { datasetID, parent: parent.name, type: type.name, ...rest },
    });

    handleCloseModal();
  };

  const handleChangeParentSelected = (parent) => {
    setTypeInfo({ ...typeInfo, parent, type: parent.fields[0], args: [] });
  };

  const parentClass = (id) => {
    return clsx("px-5 py-2 text-xl rounded-md text-center", {
      "bg-principalColor text-white ": id === typeInfo.parent.id,
      "bg-slate-100 text-black": id !== typeInfo.parent.id,
    });
  };

  return (
    <div className="w-full h-screen fixed bg-black/50 flex justify-center items-center z-50 top-0 left-0">
      <div className="flex flex-col bg-white w-[90%] lg:w-[80%] rounded-lg py-5 px-8 sm:h-[80%] h-[90%]">
        <DataTypeSelect
          selectedDataType={typeInfo.dataType}
          handleChangeDataType={handleChangeDataType}
        />

        <div className="flex sm:flex-row flex-col gap-3 justify-start w-full h-[75%]">
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
                  handleChangeOptionSelected={handleChangeOptionSelected}
                  handleChangeArguments={handleChangeArguments}
                  allArguments={typeInfo.args}
                />
              ))}
          </div>
        </div>

        <OptionsButton
          handleCancel={handleCloseModal}
          handleSubmit={selectFieldType}
          submitText={"Save"}
        />
      </div>
    </div>
  );
};

export default Modal;
