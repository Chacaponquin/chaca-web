import React, { useState } from "react";

import { DATASETS_ACTIONS } from "../../../helpers/reducer/ActionTypes";
import FieldTypeButton from "./FieldTypeButton";
import Icon from "supercons";
import FieldMenu from "./FieldMenu";
import { InputText } from "primereact/inputtext";

const InputDiv = ({ handleOpenModal, field, datasetID, dispatch }) => {
  const [openConfig, setOpenConfig] = useState(false);

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <InputText
          placeholder="Field Name..."
          onChange={(e) =>
            dispatch({
              type: DATASETS_ACTIONS.CHANGE_FIELD_NAME,
              payload: { datasetID, value: e.target.value, fieldID: field.id },
            })
          }
          className="min-w-[200px]"
          value={field.name}
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
