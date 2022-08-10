import React, { useReducer, useState } from "react";
import { useQuery } from "../../shared/hooks/useQuery";
import { apiRoutes } from "../../shared/routes/api/apiRoutes";
import { dataMap } from "./helpers/dataMap";
import { usePost } from "../../shared/hooks/usePost";
import { toast } from "react-toastify";
import DatasetForm from "./components/DatasetForm";
import LoaderContainer from "../../shared/components/Loader/LoaderContainer";
import Icon from "supercons";
import clsx from "clsx";

import "./home.css";
import CreationModal from "./components/CreationModal/CreationModal";
import { datasetsReducer } from "./helpers/reducer/datasetsReducer";
import { createInitialDataset } from "./helpers/reducer/createInitialFunctions";
import { DATASETS_ACTIONS } from "./helpers/reducer/ActionTypes";

const Home = () => {
  const [datasets, dispatch] = useReducer(datasetsReducer, [
    createInitialDataset(0),
  ]);

  const [fieldsOptions, setFieldsOptions] = useState([]);
  const [openCreationModal, setOpenCreationModal] = useState(false);

  const { loading: getFieldsLoading } = useQuery({
    url: apiRoutes.GET_FIELDS,
    onCompleted: (data) => setFieldsOptions(dataMap(data.fields)),
    onError: (error) => console.log(error),
  });

  const [createData, { loading: createDataLoading }] = usePost({
    onCompleted: (data) => console.log(data),
    onError: (error) =>
      toast.error("Hubo un error en la creacion de los datasets"),
    url: apiRoutes.CREATE_DATA,
    body: { datasets: datasets, config: {} },
  });

  const handleCloseCreateModal = () => {
    setOpenCreationModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createData();
  };

  const handleOpenCreationModal = () => {
    try {
      for (let x = 0; x < datasets.length; x++) {
        const fields = datasets[x].fields;

        for (let i = 0; i < fields.length; i++) {
          let error = null;

          if (!fields[i].name)
            error = "No puede quedarse ningun campo sin nombre";
          else if (!fields[i].type)
            error = "Todos los campos deben tener un tipo de dato";
          else if (
            fields.find(
              (el) => el.id !== fields[i].id && fields[i].name === el.name
            )
          )
            error = "No puede haber dos campos con los mismos nombres";

          if (error) throw new Error(error);
        }
      }

      setOpenCreationModal(true);
    } catch (error) {
      toast.error(error.message, { autoClose: true });
    }
  };

  if (getFieldsLoading || createDataLoading) {
    return (
      <div className="top-0 fixed flex justify-center items-center left-0 h-screen w-full bg-white">
        <LoaderContainer
          loading={getFieldsLoading || createDataLoading}
          className="w-[220px] esm:w-[120px]"
          children={<div></div>}
        />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center gap-3">
      {openCreationModal && (
        <CreationModal
          handleSubmit={handleSubmit}
          handleCloseCreateModal={handleCloseCreateModal}
        />
      )}

      <DatasetsOptions
        handleOpenCreationModal={handleOpenCreationModal}
        isCreateAvailable={datasets.length < 3}
        dispatch={dispatch}
      />

      <div className="flex flex-col items-center gap-3 w-full">
        <div className="flex items-center">
          <div className="flex gap-7 flex-wrap w-full justify-center px-5">
            {datasets.map((dat, i) => (
              <DatasetForm
                {...dat}
                key={i}
                dispatch={dispatch}
                fieldsOptions={fieldsOptions}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const DatasetsOptions = ({
  handleOpenCreationModal,
  dispatch,
  isCreateAvailable,
}) => {
  const addDatasetButtonClass = clsx(
    "px-10 py-3 text-2xl font-fontBold rounded-md w-max flex gap-3",
    { "bg-slate-200 text-black": !isCreateAvailable },
    { "bg-secondColor text-white": isCreateAvailable }
  );

  return (
    <div className="flex justify-center gap-4 w-full">
      <button
        className="px-10 py-3 text-2xl font-fontBold bg-principalColor text-white rounded-md w-max"
        onClick={handleOpenCreationModal}
      >
        Create
      </button>

      <button
        className={addDatasetButtonClass}
        onClick={() => dispatch({ type: DATASETS_ACTIONS.CREATE_NEW_DATASET })}
        disabled={isCreateAvailable ? false : true}
      >
        {isCreateAvailable ? <Icon glyph="plus" /> : <Icon glyph="private" />}

        <p className="mb-0 font-fontBold">Add Dataset</p>
      </button>
    </div>
  );
};

export default Home;
