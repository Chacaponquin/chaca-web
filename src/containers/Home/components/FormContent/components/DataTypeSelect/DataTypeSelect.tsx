import { useContext, Fragment } from "react";
import { DATA_TYPES } from "../../../../../../shared/constant/DATA_TYPES";
import { v4 as uuid } from "uuid";
import clsx from "clsx";
import { DatasetsContext } from "../../../../../../shared/context/DatasetsContext";
import { DATASETS_ACTIONS } from "../../../../constants/ACTION_TYPES";
import { AppConfigContext } from "../../../../../../shared/context/AppConfigContext";
import { CODE_TYPES } from "../../../../../../shared/constant/CODE_TYPES";

const DataTypeSelect = () => {
  const { selectField, datasetDispatch, selectedDataset } =
    useContext(DatasetsContext);
  const { schemas } = useContext(AppConfigContext);

  const barClass = (select: boolean) => {
    return clsx(
      "h-[5px] w-full rounded-full bg-secondColor mt-1 transition-all duration-300",
      { "opacity-100": select },
      { "opacity-0": !select }
    );
  };

  const textClass = (select: boolean) => {
    return clsx(
      "mb-0 w-full text-center font-fontBold text-lg pointer-events-none transition-all duration-300",
      { "text-black": select },
      { "text-slate-400": !select }
    );
  };

  const handleChangeDataType = (dataType: DATA_TYPES) => {
    if (selectField) {
      if (dataType === DATA_TYPES.SINGLE_VALUE) {
        datasetDispatch({
          type: DATASETS_ACTIONS.CHANGE_FIELD_DATATYPE,
          payload: {
            datasetID: selectedDataset.id,
            fieldID: selectField.id,
            dataType: {
              type: dataType,
              fieldType: {
                parent: schemas[0].parent,
                type: schemas[0].options[0].name,
                args: {},
              },
            },
          },
        });
      } else if (dataType === DATA_TYPES.REF) {
        datasetDispatch({
          type: DATASETS_ACTIONS.CHANGE_FIELD_DATATYPE,
          payload: {
            datasetID: selectedDataset.id,
            fieldID: selectField.id,
            dataType: { type: dataType, ref: [] },
          },
        });
      } else if (dataType === DATA_TYPES.CUSTOM) {
        datasetDispatch({
          type: DATASETS_ACTIONS.CHANGE_FIELD_DATATYPE,
          payload: {
            datasetID: selectedDataset.id,
            fieldID: selectField.id,
            dataType: {
              type: dataType,
              codeType: CODE_TYPES.JAVASCRIPT,
              code: "",
            },
          },
        });
      }
    }
  };

  return (
    <div className="bg-white flex w-full py-2 h-max justify-center gap-3 mt-4">
      {Object.values(DATA_TYPES)
        .filter((el) => el !== DATA_TYPES.MIXED)
        .map((el) => (
          <Fragment key={uuid()}>
            <button
              className="px-3 font-fontBold uppercase flex flex-col w-[150px] cursor-pointer"
              onClick={() => handleChangeDataType(el)}
            >
              <p
                className={textClass(
                  selectField ? selectField.info.dataType.type === el : false
                )}
              >
                {el}
              </p>
              <div
                className={barClass(
                  selectField ? selectField.info.dataType.type === el : false
                )}
              ></div>
            </button>
          </Fragment>
        ))}
    </div>
  );
};

export default DataTypeSelect;
