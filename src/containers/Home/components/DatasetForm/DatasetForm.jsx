import React, { useContext, useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import Modal from "../TypeModal/Modal";
import { DATASETS_ACTIONS } from "../../helpers/reducer/ActionTypes";
import { DatasetsContext } from "../../../../shared/context/DatasetsContext";
import { UserContext } from "../../../../shared/context/UserContext";
import InputDiv from "./components/InputDiv";
import AddFieldButton from "./components/AddFieldButton";
import Icon from "supercons";
import { InputText } from "primereact/inputtext";
import { toast } from "react-toastify";

const DatasetForm = ({ id, name, fields, limit, fieldsOptions }) => {
  const { noUserLimits, dispatch } = useContext(DatasetsContext);
  const { actualUser } = useContext(UserContext);
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (id) => {
    setOpenModal(id);
  };

  const handleCloseModal = () => setOpenModal(null);

  return (
    <div className="flex flex-col rounded-md bg-white shadow-md py-5 px-7 h-max border-2">
      {openModal && (
        <Modal
          datasetID={id}
          fieldID={openModal}
          fieldsOptions={fieldsOptions}
          handleCloseModal={handleCloseModal}
        />
      )}

      <DatasetDivHeader name={name} datasetID={id} />

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

const DatasetDivHeader = ({ name, datasetID }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");

  const { dispatch } = useContext(DatasetsContext);

  const handleChangeDatasetName = () => {
    setNewName("");

    if (newName !== "") {
      dispatch({
        type: DATASETS_ACTIONS.CHANGE_DATASET_NAME,
        payload: {
          datasetID: datasetID,
          value: newName,
        },
      });

      setIsEditing(false);
    } else toast.error("No puede dejar el nombre del dataset vacio");
  };

  return (
    <div className="flex justify-center gap-3 mb-4">
      {!isEditing ? (
        <h1 className="font-fontBold text-3xl text-center mb-0 flex items-center">
          {name}
        </h1>
      ) : (
        <InputText
          placeholder="Dataset Name..."
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      )}

      {isEditing ? (
        <button
          className="px-3 rounded-md text-lg py-1 text-white bg-principalColor"
          onClick={handleChangeDatasetName}
        >
          Save
        </button>
      ) : (
        <button
          className="py-1 px-2 border-2 border-secondColor flex justify-center items-center text-secondColor rounded-md hover:text-white hover:bg-secondColor transition-all duration-300"
          onClick={() => setIsEditing(true)}
        >
          <Icon glyph="edit" size={25} />
        </button>
      )}
    </div>
  );
};

export default DatasetForm;
