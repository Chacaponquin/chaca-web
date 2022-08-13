import React, { useContext } from "react";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { DATA_TYPES } from "../../../helpers/datasetsUtils";

const FieldTypeButton = ({ field, handleOpenModal }) => {
  const { datasets } = useContext(DatasetsContext);

  const filterFildes = () => {
    let value = "";

    for (const dat of datasets) {
      value = "";

      if (dat.id === field.dataType.datasetID) {
        value += dat.name;
        for (const f of dat.fields) {
          if (f.id === field.dataType.fieldRef) {
            value += "/" + f.name;
            break;
          }
        }

        break;
      }
    }

    return "" + value;
  };

  return (
    <>
      {field.type ? (
        <button
          className="bg-principal-bg text-white py-2 px-6 text-base rounded-md w-full"
          type="button"
          onClick={() => handleOpenModal(field.id)}
        >
          {field.dataType.type === DATA_TYPES.SINGLE_VALUE && field.type.type}
          {field.dataType.type === DATA_TYPES.REF && filterFildes()}
          {field.dataType.type === DATA_TYPES.ARRAY && "[ ]"}
        </button>
      ) : (
        <button
          className="bg-principalColor text-white py-2 px-6 text-base rounded-md w-full"
          type="button"
          onClick={() => handleOpenModal(field.id)}
        >
          Type
        </button>
      )}
    </>
  );
};

export default FieldTypeButton;
