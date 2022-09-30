import React, { useContext, useState } from "react";
import { DATASETS_ACTIONS } from "../../../helpers/reducer/ACTION_TYPES";
import FieldTypeButton from "./FieldTypeButton";
import FieldMenu from "./FieldMenu";
import { InputText } from "primereact/inputtext";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { motion } from "framer-motion";
import clsx from "clsx";
import { DatasetField } from "../../../../../shared/interfaces/datasets.interface";
import Config from "../../../../../shared/assets/icons/Config";

interface InputDivProps {
  handleOpenModal: (id: string) => void;
  field: DatasetField;
  datasetID: string;
}

const InputDiv = ({ handleOpenModal, field, datasetID }: InputDivProps) => {
  const { selectedDataset, datasetDispatch } = useContext(DatasetsContext);
  const [openConfig, setOpenConfig] = useState(false);

  const contClass = () => {
    return clsx(
      "flex flex-col w-full border-2 rounded-md border-separate py-1 px-4 mb-2",
      { "border-secondColor": openConfig }
    );
  };

  return (
    <motion.tr className={contClass()}>
      <motion.table className="table-auto w-full">
        <tbody>
          <tr>
            <td className="w-full">
              <InputText
                placeholder="Field Name..."
                onChange={(e) =>
                  datasetDispatch({
                    type: DATASETS_ACTIONS.CHANGE_FIELD_NAME,
                    payload: {
                      datasetID: selectedDataset.id,
                      value: e.target.value,
                      fieldID: field.id,
                    },
                  })
                }
                className="w-full max-w-[150px] text-lg font-fontBold !border-0 esm:text-base"
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
                <Config size={23} />
              </div>
            </td>
          </tr>
        </tbody>
      </motion.table>

      {openConfig && <FieldMenu field={field} />}
    </motion.tr>
  );
};

export default InputDiv;
