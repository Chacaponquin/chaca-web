import React from "react";
import Icon from "supercons";
import { DATASETS_ACTIONS } from "../../../helpers/reducer/ActionTypes";

const AddFieldButton = ({ dispatch, datasetID }) => {
  return (
    <div className="w-full flex justify-end">
      <button
        className="text-white px-4 rounded-md py-2 bg-secondColor items-center flex gap-3"
        onClick={() =>
          dispatch({
            type: DATASETS_ACTIONS.ADD_NEW_FIELD,
            payload: { datasetID },
          })
        }
        type="button"
      >
        <Icon glyph="plus" size={25} />
        <p className="mb-0 text-base">Add Field</p>
      </button>
    </div>
  );
};

export default AddFieldButton;
