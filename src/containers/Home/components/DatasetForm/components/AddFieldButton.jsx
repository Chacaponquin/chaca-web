import React from "react";
import Icon from "supercons";
import { DATASETS_ACTIONS } from "../../../helpers/reducer/ActionTypes";

const AddFieldButton = ({ dispatch, datasetID }) => {
  return (
    <div className="w-full flex justify-end">
      <button
        className="text-white px-7 rounded-full py-2 bg-secondColor items-center flex gap-3 esm:px-2"
        onClick={() =>
          dispatch({
            type: DATASETS_ACTIONS.ADD_NEW_FIELD,
            payload: { datasetID },
          })
        }
        type="button"
      >
        <Icon glyph="plus" size={28} />
        <p className="mb-0 text-lg whitespace-nowrap esm:hidden ">Add Field</p>
      </button>
    </div>
  );
};

export default AddFieldButton;
