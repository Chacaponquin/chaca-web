import React, { useContext, useState } from "react";
import { DATASETS_ACTIONS } from "../../constants/ACTION_TYPES";
import OptionsButton from "../OptionsButton";
import DataTypeSelect from "./components/SingleValueForm/DataTypeSelect";
import { DatasetsContext } from "../../../../shared/context/DatasetsContext";
import SingleValueForm from "./components/SingleValueForm/SingleValueForm";
import MixedForm from "./components/MixedForm/MixedForm";
import RefForm from "./components/RefForm/RefForm";
import CustomForm from "./components/CustomForm/CustomForm";
import { useEffect } from "react";
import { AppConfigContext } from "../../../../shared/context/AppConfigContext";
import { DATA_TYPES } from "../../../../shared/constant/DATA_TYPES";
import {
  Dataset,
  FieldDataType,
  MixedDataType,
} from "../../../../shared/interfaces/datasets.interface";

export interface IFieldInfo<T = FieldDataType> {
  fieldID: string;
  dataType: T;
}

const Modal = ({
  fieldID,
  handleCloseModal,
}: {
  fieldID: string;
  handleCloseModal: () => void;
}) => {
  const { datasetDispatch, datasets, selectedDataset } =
    useContext(DatasetsContext);
  const { schemas } = useContext(AppConfigContext);

  const [toRef, setToRef] = useState<Dataset[]>([]);
  const [fieldInfo, setFieldInfo] = useState<IFieldInfo>({
    fieldID,
    dataType: {
      type: DATA_TYPES.SINGLE_VALUE,
      fieldType: {
        type: schemas[0].options[0].name,
        parent: schemas[0].parent,
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
          setFieldInfo((prev) => ({ ...prev, dataType: field.dataType }));
        }
      }
    }
  }, [datasets, fieldID, selectedDataset]);

  const handleChangeDataType = (obj: FieldDataType) => {
    setFieldInfo({ ...fieldInfo, dataType: obj });
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
    <div className="w-screen min-h-screen fixed bg-black/50 flex justify-center items-center z-[70] top-0 left-0 pt-4 overflow-y-auto">
      <div className="flex flex-col bg-white w-[95%] rounded-md py-5 px-8 gap-2 overflow-y-auto">
        <DataTypeSelect
          selectedDataType={fieldInfo.dataType.type}
          handleChangeDataType={handleChangeDataType}
          toRef={toRef}
        />

        <div className="flex sm:flex-row flex-col gap-3 justify-start w-full h-[500px] overflow-y-auto no-scroll">
          {fieldInfo.dataType.type === DATA_TYPES.SINGLE_VALUE && (
            <SingleValueForm
              fieldInfo={fieldInfo}
              handleChangeDataType={handleChangeDataType}
            />
          )}

          {fieldInfo.dataType.type === DATA_TYPES.MIXED && (
            <MixedForm
              handleChangeDataType={handleChangeDataType}
              fieldInfo={fieldInfo as IFieldInfo<MixedDataType>}
            />
          )}

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
