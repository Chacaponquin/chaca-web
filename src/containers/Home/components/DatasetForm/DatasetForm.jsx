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

const DatasetForm = ({ id, name, fields, fieldsOptions }) => {
  const { dispatch } = useContext(DatasetsContext);
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (id) => {
    setOpenModal(id);
  };

  const handleCloseModal = () => setOpenModal(null);

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex flex-col rounded-md h-max w-full">
        {openModal && (
          <Modal
            fieldID={openModal}
            fieldsOptions={fieldsOptions}
            handleCloseModal={handleCloseModal}
          />
        )}

        <DatasetDivHeader name={name} datasetID={id} />

        <table className="table-auto w-full" cellSpacing={5}>
          <tbody>
            {fields.map((field, i) => (
              <InputDiv
                datasetID={id}
                handleOpenModal={handleOpenModal}
                key={i}
                field={field}
                dispatch={dispatch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const InputCantDoc = () => {
  const { selectedDataset, dispatch, noUserLimits } =
    useContext(DatasetsContext);
  const { actualUser } = useContext(UserContext);

  return (
    <div className="flex items-center gap-3 justify-center">
      <p className="mb-0 text-lg font-fontBold">Cant:</p>
      <InputNumber
        value={selectedDataset.limit}
        onValueChange={(e) => {
          dispatch({
            type: DATASETS_ACTIONS.CHANGE_DATASET_LIMIT,
            payload: {
              datasetID: selectedDataset.id,
              value: e.value,
            },
          });
        }}
        min={1}
        max={
          actualUser ? actualUser.limitDocuments : noUserLimits.LIMIT_DOCUMENTS
        }
        className="w-[100px]"
      />
    </div>
  );
};

const DatasetDivHeader = ({ name, datasetID }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const { dispatch } = useContext(DatasetsContext);

  const handleChangeDatasetName = () => {
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
    <div className="flex gap-3 justify-between md:items-center items-end mb-3">
      <div className="flex md:items-center gap-3 md:flex-row flex-col items-start">
        <div className="flex items-center gap-3 ">
          {!isEditing ? (
            <h1 className="font-fontBold text-3xl text-center mb-0 flex items-center whitespace-nowrap ">
              {name}
            </h1>
          ) : (
            <InputText
              placeholder="Dataset Name..."
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-[150px] text-lg"
            />
          )}

          {isEditing ? (
            <button
              className="px-6 rounded-md text-lg py-1 text-white bg-principalColor transition-all duration-300 hover:bg-principalColor/70"
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

        <InputCantDoc />
      </div>

      <AddFieldButton dispatch={dispatch} datasetID={datasetID} />
    </div>
  );
};

export default DatasetForm;
