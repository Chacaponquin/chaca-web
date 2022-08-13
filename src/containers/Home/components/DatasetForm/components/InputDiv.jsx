import React, { useState } from "react";
import { inputClass } from "../../../helpers/classes";
import { DATASETS_ACTIONS } from "../../../helpers/reducer/ActionTypes";
import FieldTypeButton from "./FieldTypeButton";
import Icon from "supercons";
import FieldMenu from "./FieldMenu";

const InputDiv = ({ handleOpenModal, field, datasetID, dispatch }) => {
  const [openConfig, setOpenConfig] = useState(false);

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <input
          type="text"
          className={inputClass}
          placeholder="Field Name..."
          onChange={(e) =>
            dispatch({
              type: DATASETS_ACTIONS.CHANGE_FIELD_NAME,
              payload: { datasetID, value: e.target.value, fieldID: field.id },
            })
          }
        />

        <FieldTypeButton field={field} handleOpenModal={handleOpenModal} />

        <div
          className="cursor-pointer"
          onClick={() => setOpenConfig(!openConfig)}
        >
          <Icon glyph="controls" size={25} />
        </div>
      </div>

      {openConfig && <FieldMenu datasetID={datasetID} field={field} />}
    </div>
  );
};

export default InputDiv;
