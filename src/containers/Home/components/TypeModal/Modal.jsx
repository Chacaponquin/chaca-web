import React, { useContext, useState } from "react";
import { DATASETS_ACTIONS } from "../../helpers/reducer/ActionTypes";
import OptionsButton from "../OptionsButton";
import DataTypeSelect from "./components/DataTypeSelect";
import { DatasetsContext } from "../../../../shared/context/DatasetsContext";
import SingleValueForm from "./components/SingleValueForm";
import MixedForm from "./components/MixedForm";
import RefForm from "./components/RefForm";
import {
  CUSTOM_CODE,
  DATA_TYPES,
} from "../../../../shared/helpers/datasetsUtils";
import CustomForm from "./components/CustomForm";
import { useEffect } from "react";

const Modal = ({ fieldID, fieldsOptions = [], handleCloseModal }) => {
  const { dispatch, datasets, selectedDataset } = useContext(DatasetsContext);

  const [fieldInfo, setFieldInfo] = useState({
    fieldID,
    dataType: {
      type: DATA_TYPES.SINGLE_VALUE,
      fieldType: {
        type: fieldsOptions[0].fields[0],
        parent: fieldsOptions[0],
        args: {},
      },
    },
  });

  useEffect(() => {
    for (const dat of datasets) {
      for (const field of dat.fields) {
        if (field.id === fieldID) {
          if (field.dataType) {
            setFieldInfo((prev) => ({ ...prev, dataType: field.dataType }));
          }
        }
      }
    }
  }, [datasets, fieldID]);

  const handleChangeDataType = (obj) => {
    let saveObj = obj;

    if (obj.type === DATA_TYPES.SINGLE_VALUE) {
      if (!obj.fieldType) {
        saveObj = {
          ...obj,
          fieldType: {
            type: fieldsOptions[0].fields[0],
            parent: fieldsOptions[0],
            args: {},
          },
        };
      }
    } else if (obj.type === DATA_TYPES.CUSTOM) {
      if (!obj.code) {
        saveObj = {
          ...obj,
          code: "function getValue(){\n\treturn 'Buenas'\n}",
          codeType: CUSTOM_CODE.JAVASCRIPT,
        };
      }
    }

    setFieldInfo({ ...fieldInfo, dataType: saveObj });
  };

  const handleSelectFieldType = () => {
    dispatch({
      type: DATASETS_ACTIONS.CHANGE_FIELD_DATATYPE,
      payload: {
        datasetID: selectedDataset.id,
        dataType: fieldInfo.dataType,
        fieldID: fieldInfo.fieldID,
      },
    });

    handleCloseModal();
  };

  return (
    <div className="w-screen h-screen fixed bg-black/50 flex justify-center items-center z-[70] top-0 left-0">
      <div className="flex flex-col bg-white w-[95%] rounded-md py-5 px-8 gap-3">
        <DataTypeSelect
          selectedDataType={fieldInfo.dataType.type}
          handleChangeDataType={handleChangeDataType}
        />

        <div className="flex sm:flex-row flex-col gap-3 justify-start w-full h-[500px]">
          {fieldInfo.dataType.type === DATA_TYPES.SINGLE_VALUE && (
            <SingleValueForm
              fieldInfo={fieldInfo}
              fieldsOptions={fieldsOptions}
              handleChangeDataType={handleChangeDataType}
            />
          )}

          {fieldInfo.dataType.type === DATA_TYPES.MIXED && <MixedForm />}

          {fieldInfo.dataType.type === DATA_TYPES.REF &&
            datasets.length > 1 && (
              <RefForm
                typeInfoDataType={fieldInfo.dataType}
                handleChangeDataType={handleChangeDataType}
              />
            )}

          {fieldInfo.dataType.type === DATA_TYPES.CUSTOM && (
            <CustomForm
              handleChangeDataType={handleChangeDataType}
              dataType={fieldInfo.dataType}
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
