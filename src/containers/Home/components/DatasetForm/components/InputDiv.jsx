import React, { useContext, useState } from "react";
import { DATASETS_ACTIONS } from "../../../helpers/reducer/ActionTypes";
import FieldTypeButton from "./FieldTypeButton";
import Icon from "supercons";
import FieldMenu from "./FieldMenu";
import { InputText } from "primereact/inputtext";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";

const InputDiv = ({ handleOpenModal, field, datasetID, dispatch }) => {
  const { selectedDataset } = useContext(DatasetsContext);

  const [openConfig, setOpenConfig] = useState(false);

  return (
    <tr className="flex flex-col w-full border-2 rounded-md border-separate py-1 px-4 mb-2">
      <table className="table-auto w-full">
        <tbody>
          <tr>
            <td className="w-full">
              <InputText
                placeholder="Field Name..."
                onChange={(e) =>
                  dispatch({
                    type: DATASETS_ACTIONS.CHANGE_FIELD_NAME,
                    payload: {
                      datasetID: selectedDataset.id,
                      value: e.target.value,
                      fieldID: field.id,
                    },
                  })
                }
                className="w-[150px] text-lg font-fontBold !border-0 esm:text-base"
                value={field.name}
              />
            </td>

            <td>
              <FieldTypeButton
                field={field}
                handleOpenModal={handleOpenModal}
              />
            </td>

            <td>
              <div
                className="cursor-pointer"
                onClick={() => setOpenConfig(!openConfig)}
              >
                <Icon glyph="controls" size={25} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {openConfig && <FieldMenu datasetID={datasetID} field={field} />}
    </tr>
  );
};

export default InputDiv;
