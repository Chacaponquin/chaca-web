import { Checkbox } from "primereact/checkbox";
import React, { useContext } from "react";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { DATASETS_ACTIONS } from "../../../helpers/reducer/ActionTypes";
import Icon from "supercons";
import { DATA_TYPES } from "../../../helpers/datasetsUtils";

const FieldMenu = ({ datasetID, field }) => {
  const { dispatch } = useContext(DatasetsContext);

  const textClass = "text-base pointer-events-none";
  const divClass =
    "flex items-center gap-4 px-4 py-1 transition-all duration-300 hover:bg-slate-200 w-full rounded-md";

  return (
    <div className="flex bg-white w-full py-1 rounded-md flex-col gap-1">
      <div className={divClass}>
        <Checkbox
          onChange={(e) => {
            dispatch({
              type: DATASETS_ACTIONS.CHANGE_TO_ARRAY_TYPE,
              payload: {
                datasetID,
                fieldID: field.id,
                value: e.checked,
                limit: 10,
              },
            });
          }}
          checked={field.dataType.type === DATA_TYPES.ARRAY}
        />
        <p className={textClass}>Array</p>
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
    </div>
  );
};
export default FieldMenu;
