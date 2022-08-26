import React, { useContext, useState } from "react";
import { DATASETS_ACTIONS } from "../../helpers/reducer/ActionTypes";
import OptionsButton from "../OptionsButton";
import DataTypeSelect from "./components/DataTypeSelect";
import { DatasetsContext } from "../../../../shared/context/DatasetsContext";
import SingleValueForm from "./components/SingleValueForm";
import MixedForm from "./components/MixedForm";
import RefForm from "./components/RefForm";
import { DATA_TYPES } from "../../../../shared/helpers/datasetsUtils";

const Modal = ({
  datasetID,
  fieldID,
  fieldsOptions = [],
  handleCloseModal,
}) => {
  const { dispatch, datasets } = useContext(DatasetsContext);

  const [typeInfo, setTypeInfo] = useState({
    fieldID: fieldID,
    parent: fieldsOptions[0],
    type: fieldsOptions[0].fields[0],
    dataType: { type: DATA_TYPES.SINGLE_VALUE },
    args: {},
  });

  const handleChangeArguments = ({ value, field }) => {
    const { args } = typeInfo;

    let newData = { ...typeInfo, args: { ...args, [field]: value } };

    setTypeInfo(newData);
  };

  const handleChangeOptionSelected = (field) => {
    if (typeInfo.type.name !== field.name)
      setTypeInfo({ ...typeInfo, args: {}, type: field });
  };

  const handleChangeDataType = (obj) => {
    setTypeInfo({ ...typeInfo, dataType: obj });
  };

  const handleSelectFieldType = () => {
    const { parent, type, ...rest } = typeInfo;

    dispatch({
      type: DATASETS_ACTIONS.SELECT_FIELD_TYPE,
      payload: { datasetID, parent: parent.name, type: type.name, ...rest },
    });

    handleCloseModal();
  };

  const handleChangeParentSelected = (parent) => {
    setTypeInfo({ ...typeInfo, parent, type: parent.fields[0], args: {} });
  };

  return (
    <div className="w-screen h-screen fixed bg-black/50 flex justify-center items-center z-50 top-0 left-0">
      <div className="flex flex-col bg-white w-[95%] rounded-md py-5 px-8 gap-3">
        <DataTypeSelect
          selectedDataType={typeInfo.dataType.type}
          handleChangeDataType={handleChangeDataType}
        />

        <div className="flex sm:flex-row flex-col gap-3 justify-start w-full h-[500px]">
          {typeInfo.dataType.type === DATA_TYPES.SINGLE_VALUE && (
            <SingleValueForm
              fieldsOptions={fieldsOptions}
              handleChangeArguments={handleChangeArguments}
              handleChangeOptionSelected={handleChangeOptionSelected}
              handleChangeParentSelected={handleChangeParentSelected}
              typeInfo={typeInfo}
            />
          )}

          {typeInfo.dataType.type === DATA_TYPES.MIXED && <MixedForm />}

          {typeInfo.dataType.type === DATA_TYPES.REF && datasets.length > 1 && (
            <RefForm
              typeInfoDataType={typeInfo.dataType}
              datasetID={datasetID}
              handleChangeDataType={handleChangeDataType}
            />
          )}
        </div>

        <OptionsButton
          handleCancel={handleCloseModal}
          handleSubmit={handleSelectFieldType}
          submitText={"Save"}
        />
      </div>
    </div>
  );
};

export default Modal;
