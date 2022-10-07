import { Checkbox } from "primereact/checkbox";
import { InputNumber } from "primereact/inputnumber";
import { useContext } from "react";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { DATASETS_ACTIONS } from "../../../helpers/reducer/ACTION_TYPES";
import clsx from "clsx";
import { motion } from "framer-motion";
import { DatasetField } from "../../../../../shared/interfaces/datasets.interface";
import Delete from "../../../../../shared/assets/icons/Delete";

const FieldMenu = ({ field }: { field: DatasetField }) => {
  const { datasetDispatch, selectedDataset } = useContext(DatasetsContext);

  const textClass = "text-base pointer-events-none";
  const divClass =
    "flex gap-4 px-4 py-2 transition-all duration-300 hover:bg-slate-200 w-full rounded-md";

  const arrayDivContainerClass = clsx("flex flex-col rounded-md", {
    "bg-slate-200": field.isArray,
  });

  return (
    <motion.div className="flex bg-white w-full py-1 rounded-md flex-col gap-1">
      <div className={arrayDivContainerClass}>
        <div className={divClass + " !gap-16 !items-start"}>
          <div className="flex items-center gap-4">
            <Checkbox
              onChange={(e) => {
                datasetDispatch({
                  type: DATASETS_ACTIONS.CHANGE_TO_ARRAY_TYPE,
                  payload: {
                    datasetID: selectedDataset.id,
                    fieldID: field.id,
                    value: e.checked,
                  },
                });
              }}
              checked={field.isArray ? true : false}
            />
            <p className={textClass}>Array</p>
          </div>

          {field.isArray && (
            <div className="flex items-center gap-5 esm:flex-col esm:gap-1">
              <div className="flex items-center gap-1">
                <p className="mb-0 text-base">Min:</p>
                <InputNumber
                  className="!text-sm"
                  value={field.isArray.min}
                  min={1}
                  max={field.isArray.max}
                  onChange={(e) => {
                    if (field.isArray)
                      datasetDispatch({
                        type: DATASETS_ACTIONS.CHANGE_ARRAY_LIMITS,
                        payload: {
                          datasetID: selectedDataset.id,
                          fieldID: field.id,
                          min: e.value || 0,
                          max: field.isArray.max,
                        },
                      });
                  }}
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="mb-0 text-base">Max:</p>
                <InputNumber
                  className="!text-sm"
                  value={field.isArray.max}
                  min={field.isArray.min}
                  max={150}
                  onChange={(e) => {
                    if (field.isArray)
                      datasetDispatch({
                        type: DATASETS_ACTIONS.CHANGE_ARRAY_LIMITS,
                        payload: {
                          datasetID: selectedDataset.id,
                          fieldID: field.id,
                          min: field.isArray.min,
                          max: e.value || field.isArray.max,
                        },
                      });
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={divClass + "items-center"}>
        <Checkbox
          onChange={(e) =>
            datasetDispatch({
              type: DATASETS_ACTIONS.CHANGE_POSIBLE_NULL,
              payload: {
                datasetID: selectedDataset.id,
                fieldID: field.id,
                value: e.checked,
              },
            })
          }
          value={field.isPosibleNull}
          checked={field.isPosibleNull}
        />
        <p className={textClass}>Posible Null</p>
      </div>

      <div className={divClass + " -translate-x-[4px] items-center"}>
        <button
          onClick={() =>
            datasetDispatch({
              type: DATASETS_ACTIONS.DELETE_FIELD,
              payload: { datasetID: selectedDataset.id, fieldID: field.id },
            })
          }
        >
          <Delete size={25} />
        </button>

        <h1 className={textClass}>Delete Field</h1>
      </div>
    </motion.div>
  );
};
export default FieldMenu;
