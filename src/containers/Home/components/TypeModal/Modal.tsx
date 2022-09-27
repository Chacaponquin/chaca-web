import React, { useContext, useState } from "react";
import { DATASETS_ACTIONS } from "../../helpers/reducer/ACTION_TYPES";
import OptionsButton from "../OptionsButton";
import DataTypeSelect from "./components/DataTypeSelect";
import { DatasetsContext } from "../../../../shared/context/DatasetsContext";
import SingleValueForm from "./components/SingleValueForm";
import MixedForm from "./components/MixedForm";
import RefForm from "./components/RefForm";
import CustomForm from "./components/CustomForm";
import { useEffect } from "react";
import { AppConfigContext } from "../../../../shared/context/AppConfigContext";
import { DATA_TYPES } from "../../../../shared/constant/DATA_TYPES";
import {
  Dataset,
  FieldDataType,
} from "../../../../shared/interfaces/datasets.interface";
import { CODE_TYPES } from "../../../../shared/constant/CODE_TYPES";

const Modal = ({
  fieldID,
  handleCloseModal,
}: {
  fieldID: string;
  handleCloseModal: () => void;
}) => {
  const { datasetDispatch, datasets, selectedDataset } =
    useContext(DatasetsContext);
  const { fieldsOptions } = useContext(AppConfigContext);

  const [toRef, setToRef] = useState<Dataset[]>([]);
  const [fieldInfo, setFieldInfo] = useState<{
    fieldID: string;
    dataType: FieldDataType;
  }>({
    fieldID,
    dataType: {
      type: DATA_TYPES.SINGLE_VALUE,
      fieldType: {
        type: fieldsOptions[0].fields[0].name,
        parent: fieldsOptions[0].parent,
        args: {},
      },
    },
  });

  useEffect(() => {
    setToRef(
      datasets.filter((d) => {
        let availible = true;

        if (d.id === selectedDataset.id) availible = false;
        else {
          d.fields = d.fields.filter((f) => {
            return f.dataType.type !== DATA_TYPES.REF && f.name && !f.isArray;
          });

          if (d.fields.length === 0) availible = false;
        }

        return availible;
      })
    );

    for (const dat of datasets) {
      for (const field of dat.fields) {
        if (field.id === fieldID) {
          if (field.dataType) {
            setFieldInfo((prev) => ({ ...prev, dataType: field.dataType }));
          }
        }
      }
    }
  }, [datasets, fieldID, selectedDataset]);

  const handleChangeDataType = (obj: FieldDataType) => {
    let saveObj: FieldDataType = obj;

    if (obj.type === DATA_TYPES.SINGLE_VALUE) {
      if (!obj.fieldType) {
        saveObj = {
          ...obj,
          fieldType: {
            type: fieldsOptions[0].fields[0].name,
            parent: fieldsOptions[0].parent,
            args: {},
          },
        };
      }
    } else if (obj.type === DATA_TYPES.CUSTOM) {
      if (!obj.code) {
        saveObj = {
          ...obj,
          code: "function getValue(){\n\treturn 'Buenas'\n}",
          codeType: CODE_TYPES.JAVASCRIPT,
        };
      }
    }

    setFieldInfo({ ...fieldInfo, dataType: saveObj });
  };

  const handleSelectFieldType = () => {
    datasetDispatch({
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
          showRef={toRef.length !== 0}
        />

        <div className="flex sm:flex-row flex-col gap-3 justify-start w-full h-[500px]">
          {fieldInfo.dataType.type === DATA_TYPES.SINGLE_VALUE && (
            <SingleValueForm
              fieldInfo={fieldInfo}
              handleChangeDataType={handleChangeDataType}
            />
          )}

          {fieldInfo.dataType.type === DATA_TYPES.MIXED && <MixedForm />}

          {fieldInfo.dataType.type === DATA_TYPES.REF &&
            datasets.length > 1 && (
              <RefForm
                typeInfoDataType={fieldInfo.dataType}
                handleChangeDataType={handleChangeDataType}
                toRef={toRef}
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
