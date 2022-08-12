import React, { useContext, useState } from "react";
import Icon from "supercons";
import { inputClass } from "../helpers/classes";
import { InputNumber } from "primereact/inputnumber";
import Modal from "./TypeModal/Modal";
import { DATASETS_ACTIONS } from "../helpers/reducer/ActionTypes";
import { Checkbox } from "primereact/checkbox";
import { DATA_TYPES } from "../helpers/datasetsUtils";
import { DatasetsContext } from "../../../shared/context/DatasetsContext";
import { UserContext } from "../../../shared/context/UserContext";

const DatasetForm = ({ id, name, fields, limit, fieldsOptions }) => {
  const { noUserLimits, dispatch } = useContext(DatasetsContext);
  const { actualUser } = useContext(UserContext);
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (id) => {
    setOpenModal(id);
  };

  const handleCloseModal = () => setOpenModal(null);

  return (
    <div className="flex flex-col rounded-md bg-white shadow-md py-5 px-7 h-max">
      {openModal && (
        <Modal
          datasetID={id}
          fieldID={openModal}
          fieldsOptions={fieldsOptions}
          handleCloseModal={handleCloseModal}
        />
      )}

      <h1 className="font-fontBold text-3xl text-center mb-5">{name}</h1>

      <div className="flex items-center gap-3 justify-center mb-3">
        <p className="mb-0 text-lg font-fontBold">Cant:</p>
        <InputNumber
          value={limit}
          onValueChange={(e) => {
            dispatch({
              type: DATASETS_ACTIONS.CHANGE_DATASET_LIMIT,
              payload: {
                datasetID: id,
                value: e.value,
              },
            });
          }}
          min={1}
          max={
            actualUser
              ? actualUser.limitDocuments
              : noUserLimits.LIMIT_DOCUMENTS
          }
        />
      </div>

      <form action="" className="flex flex-col gap-3">
        {fields.map((field, i) => (
          <InputDiv
            datasetID={id}
            handleOpenModal={handleOpenModal}
            key={i}
            field={field}
            dispatch={dispatch}
          />
        ))}

        <AddFieldButton dispatch={dispatch} datasetID={id} />
      </form>
    </div>
  );
};

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

const InputDiv = ({ handleOpenModal, field, datasetID, dispatch }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
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
        <p className="mb-0 text-sm">Posible Null</p>
      </div>

      <input
        type="text"
        className={inputClass}
        placeholder="Field"
        onChange={(e) =>
          dispatch({
            type: DATASETS_ACTIONS.CHANGE_FIELD_NAME,
            payload: { datasetID, value: e.target.value, fieldID: field.id },
          })
        }
      />

      <FieldTypeButton field={field} handleOpenModal={handleOpenModal} />

      <button
        onClick={() =>
          dispatch({
            type: DATASETS_ACTIONS.DELETE_FIELD,
            payload: { datasetID, fieldID: field.id },
          })
        }
        type="button"
      >
        <Icon glyph="view-close" size={20} />
      </button>
    </div>
  );
};

const FieldTypeButton = ({ field, handleOpenModal }) => {
  return (
    <>
      {field.type ? (
        <button
          className="bg-principal-bg text-white py-2 px-4 text-base rounded-md w-full"
          type="button"
          onClick={() => handleOpenModal(field.id)}
        >
          {field.type.type}
          {field.dataType === DATA_TYPES.ARRAY && "[ ]"}
        </button>
      ) : (
        <button
          className="bg-principalColor text-white py-2 px-4 text-base rounded-md w-full"
          type="button"
          onClick={() => handleOpenModal(field.id)}
        >
          Type
        </button>
      )}
    </>
  );
};

export default DatasetForm;
