import React, { useContext, useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import Modal from "../TypeModal/Modal";
import { DATASETS_ACTIONS } from "../../helpers/reducer/ActionTypes";
import { DatasetsContext } from "../../../../shared/context/DatasetsContext";
import { UserContext } from "../../../../shared/context/UserContext";
import InputDiv from "./components/InputDiv";
import AddFieldButton from "./components/AddFieldButton";

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

export default DatasetForm;
