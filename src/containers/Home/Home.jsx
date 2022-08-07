import React, { useState } from "react";
import { useQuery } from "../../shared/hooks/useQuery";
import { apiRoutes } from "../../shared/routes/api/apiRoutes";
import Icon from "supercons";
import { inputClass } from "./helpers/classes";
import Modal from "./components/Modal";
import { dataMap } from "./helpers/dataMap";
import { usePost } from "../../shared/hooks/usePost";

const Home = () => {
  const [fieldsOptions, setFieldsOptions] = useState([]);

  const [datasets, setDatasets] = useState([
    { id: Date.now(), name: "First DataSet" },
  ]);

  const [createDataBody, setCreateDataBody] = useState([]);

  const [openModal, setOpenModal] = useState(null);

  const [fields, setFields] = useState([
    { id: 7497433, name: "", type: null },
    { id: 7497443, name: "", type: null },
    { id: 749749, name: "", type: null },
  ]);

  const { loading } = useQuery({
    url: apiRoutes.GET_FIELDS,
    onCompleted: (data) => setFieldsOptions(dataMap(data.fields)),
    onError: (error) => console.log(error),
  });

  const [createData, { loading: createDataLoading }] = usePost({
    onCompleted: (data) => console.log(data),
    onError: (error) => console.log(error),
    url: apiRoutes.CREATE_DATA,
    body: createDataBody,
  });

  const handleNewField = () => {
    setFields([...fields, { id: Date.now() }]);
  };

  const handleOpenModal = (id) => {
    setOpenModal(id);
  };

  const handleChangeFieldName = (id, value) => {
    const newFields = fields.map((f) => {
      if (f.id === id) f.name = value;

      return f;
    });

    setFields(newFields);
  };

  const handleCloseModal = () => setOpenModal(null);

  const handleDeleteField = (id) => {
    const newFields = fields.filter((el) => el.id !== id);
    setFields(newFields);
  };

  const handleSelectType = ({ fieldID, type, parent }) => {
    const field = fields.find((el) => el.id === fieldID);

    setCreateDataBody([...createDataBody, { field, parent, type }]);
    setOpenModal(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(createDataBody);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {openModal && (
        <Modal
          fieldID={openModal}
          fieldsOptions={fieldsOptions}
          handleCloseModal={handleCloseModal}
          handleSelectType={handleSelectType}
        />
      )}

      <div>
        <h1 className="font-fontExtraBold text-4xl text-center">Hello There</h1>

        <div></div>

        <div className="flex items-center">
          <div></div>

          <div className="flex flex-col rounded-md bg-white shadow-md py-5 px-7">
            <div className="w-full flex justify-end py-3">
              <button>
                <Icon glyph="view-close" />
              </button>
            </div>

            <form
              action=""
              className="flex flex-col gap-3"
              onSubmit={handleSubmit}
            >
              {fields.map((field, i) => (
                <InputDiv
                  handleOpenModal={handleOpenModal}
                  key={i}
                  field={field}
                  handleChangeFieldName={handleChangeFieldName}
                  handleDeleteField={handleDeleteField}
                />
              ))}

              <AddFieldButton handleNewField={handleNewField} />

              <button
                className="font-fontBold bg-principalColor py-2 px-4 w-full text-white text-2xl rounded-md"
                type="submit"
              >
                Create
              </button>
            </form>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

const AddFieldButton = ({ handleNewField }) => {
  return (
    <div className="w-full flex justify-end">
      <button
        className="text-white px-4 rounded-md py-2 bg-secondColor items-center flex gap-3"
        onClick={handleNewField}
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
}) => {
  return (
    <div className="flex items-center gap-3">
      <input
        type="text"
        className={inputClass}
        placeholder="Field"
        onChange={(e) => handleChangeFieldName(field.id, e.target.value)}
      />

      <button
        className="bg-principalColor text-white py-2 px-7 text-base rounded-md"
        type="button"
        onClick={() => handleOpenModal(field.id)}
      >
        Type
      </button>

      <button onClick={() => handleDeleteField(field.id)} type="button">
        <Icon glyph="view-close" size={20} />
      </button>
    </div>
  );
};

export default Home;
