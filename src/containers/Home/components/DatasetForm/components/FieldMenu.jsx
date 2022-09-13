import { Checkbox } from "primereact/checkbox";
import { InputNumber } from "primereact/inputnumber";
import React, { useContext } from "react";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { DATASETS_ACTIONS } from "../../../helpers/reducer/ActionTypes";
import Icon from "supercons";
import clsx from "clsx";
import { motion } from "framer-motion";

const FieldMenu = ({ datasetID, field }) => {
  const { dispatch } = useContext(DatasetsContext);

  const textClass = "text-base pointer-events-none";
  const divClass =
    "flex items-center gap-4 px-4 py-2 transition-all duration-300 hover:bg-slate-200 w-full rounded-md";

  const arrayDivContainerClass = clsx("flex flex-col rounded-md", {
    "bg-slate-200": field.isArray,
  });

  return (
    <motion.div
      className="flex bg-white w-full py-1 rounded-md flex-col gap-1"
      transition={{ duration: 0.3, type: "spring" }}
      animate={{ height: "auto", opacity: 1 }}
      initial={{ height: 0, opacity: 0 }}
      exit={{ height: 0, opacity: 0 }}
    >
      <div className={arrayDivContainerClass}>
        <div className={divClass + " !gap-16"}>
          <div className="flex items-center gap-4">
            <Checkbox
              onChange={(e) => {
                dispatch({
                  type: DATASETS_ACTIONS.CHANGE_TO_ARRAY_TYPE,
                  payload: {
                    datasetID,
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
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1">
                <p className="mb-0 text-base">Min:</p>
                <InputNumber
                  className="!text-sm"
                  value={field.isArray.min}
                  min={0}
                  max={field.isArray.max}
                  onChange={(e) => {
                    dispatch({
                      type: DATASETS_ACTIONS.CHANGE_ARRAY_LIMITS,
                      payload: {
                        datasetID,
                        fieldID: field.id,
                        min: e.value,
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
                  max={100}
                  onChange={(e) => {
                    dispatch({
                      type: DATASETS_ACTIONS.CHANGE_ARRAY_LIMITS,
                      payload: {
                        datasetID,
                        fieldID: field.id,
                        min: field.isArray.min,
                        max: e.value,
                      },
                    });
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={divClass}>
        <Checkbox
          onChange={(e) =>
            dispatch({
              type: DATASETS_ACTIONS.CHANGE_POSIBLE_NULL,
              payload: {
                datasetID,
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

      <div
        className={divClass + " -translate-x-[4px]"}
        onClick={() =>
          dispatch({
            type: DATASETS_ACTIONS.DELETE_FIELD,
            payload: { datasetID, fieldID: field.id },
          })
        }
      >
        <Icon glyph="delete" size={28} />
        <h1 className={textClass}>Delete Field</h1>
      </div>
    </motion.div>
  );
};
export default FieldMenu;
