import React, { useState } from "react";
import Icon from "supercons";
import { inputClass } from "../helpers/classes";
import { InputNumber } from "primereact/inputnumber";
import Modal from "./Modal";

const DatasetForm = ({
  id,
  name,
  fields,
  limit,
  handleChangeFieldName,
  handleDeleteField,
  handleNewField,
  handleSelectType,
  handleChangeLimit,
  fieldsOptions,
}) => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (id) => {
    setOpenModal(id);
  };

  const handleCloseModal = () => setOpenModal(null);

  return (
    <div className="flex flex-col rounded-md bg-white shadow-md py-5 px-7">
      {openModal && (
        <Modal
          datasetID={id}
          fieldID={openModal}
          fieldsOptions={fieldsOptions}
          handleCloseModal={handleCloseModal}
          handleSelectType={handleSelectType}
        />
      )}

      <h1 className="font-fontBold text-3xl text-center mb-5">{name}</h1>

      <div className="flex items-center gap-3 justify-center mb-3">
        <p className="mb-0 text-lg font-fontBold">Cant:</p>
        <InputNumber
          value={limit}
          onValueChange={(e) => handleChangeLimit(id, e.value)}
          min={1}
          max={100}
        />
      </div>

      <form action="" className="flex flex-col gap-3">
        {fields.map((field, i) => (
          <InputDiv
            datasetID={id}
            handleOpenModal={handleOpenModal}
            key={i}
            field={field}
            handleChangeFieldName={handleChangeFieldName}
            handleDeleteField={handleDeleteField}
          />
        ))}

        <AddFieldButton handleNewField={handleNewField} datasetID={id} />
      </form>
    </div>
  );
};

const AddFieldButton = ({ handleNewField, datasetID }) => {
  return (
    <div className="w-full flex justify-end">
      <button
        className="text-white px-4 rounded-md py-2 bg-secondColor items-center flex gap-3"
        onClick={() => handleNewField(datasetID)}
        type="button"
      >
        <Icon glyph="plus" size={25} />
        <p className="mb-0 text-base">Add Field</p>
      </button>
    </div>
  );
};

const InputDiv = ({
  handleOpenModal,
  field,
  handleChangeFieldName,
  handleDeleteField,
  datasetID,
}) => {
  return (
    <div className="flex items-center gap-3">
      <input
        type="text"
        className={inputClass}
        placeholder="Field"
        onChange={(e) =>
          handleChangeFieldName(datasetID, field.id, e.target.value)
        }
      />

      <FieldTypeButton field={field} handleOpenModal={handleOpenModal} />

      <button
        onClick={() => handleDeleteField(datasetID, field.id)}
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
          className="bg-principal-bg text-white py-2 px-7 text-base rounded-md w-full"
          type="button"
          onClick={() => handleOpenModal(field.id)}
        >
          {field.type.type}
        </button>
      ) : (
        <button
          className="bg-principalColor text-white py-2 px-7 text-base rounded-md w-full"
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
