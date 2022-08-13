import React, { useContext, useState } from "react";
import { apiRoutes } from "../../shared/routes/api/apiRoutes";
import { usePost } from "../../shared/hooks/usePost";
import { toast } from "react-toastify";
import DatasetForm from "./components/DatasetForm/DatasetForm";
import LoaderContainer from "../../shared/components/Loader/LoaderContainer";
import Icon from "supercons";
import clsx from "clsx";
import "./home.css";
import CreationModal from "./components/CreationModal/CreationModal";
import { DatasetsContext } from "../../shared/context/DatasetsContext";
import { DATASETS_ACTIONS } from "./helpers/reducer/ActionTypes";
import { UserContext } from "../../shared/context/UserContext";
import { DATA_TYPES } from "./helpers/datasetsUtils";
import { returnDataMap } from "./helpers/dataMap";

const Home = () => {
  const {
    datasets,
    dispatch,
    config,
    noUserLimits,
    fieldsOptions,
    getFieldsLoading,
  } = useContext(DatasetsContext);
  const { actualUser } = useContext(UserContext);

  const [openCreationModal, setOpenCreationModal] = useState(false);
  const [createData, { loading: createDataLoading }] = usePost({
    onCompleted: (data) => {
      window.open(`${process.env.REACT_APP_API_URL}/${data.downUrl}`);
    },
    onError: (error) => {
      console.log(error);
      toast.error("Hubo un error en la creacion de los datasets");
    },
    url: apiRoutes.CREATE_DATA,
    body: { datasets: returnDataMap(datasets), config },
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
      for (const dat of datasets) {
        for (const field of dat.fields) {
          if (field.dataType.type === DATA_TYPES.REF) {
            if (!field.dataType.fieldRef)
              throw new Error(
                "Loas campos referenica deben tener un campo al que se pueda referenciar"
              );
          }
        }
      }

      for (const dat of datasets) {
        let cont = 0;
        for (let j = 0; j < datasets.length; j++) {
          if (datasets[j].name === dat) cont++;
        }

        if (cont >= 2)
          throw Error("No puede haber datasets con los mismos nombres");
      }

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

  if (getFieldsLoading) {
    return (
      <div className="top-0 fixed flex justify-center items-center left-0 h-screen w-full bg-white">
        <LoaderContainer
          loading={getFieldsLoading}
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
          loading={createDataLoading}
        />
      )}

      <DatasetsOptions
        handleOpenCreationModal={handleOpenCreationModal}
        isCreateAvailable={
          datasets.length <
          (actualUser ? actualUser.limitDatasets : noUserLimits.LIMIT_DATASETS)
        }
        dispatch={dispatch}
      />

      <div className="flex flex-col items-center gap-3 w-full">
        <div className="flex items-center">
          <div className="flex gap-7 flex-wrap w-full justify-center px-5">
            {datasets.map((dat, i) => (
              <DatasetForm {...dat} key={i} fieldsOptions={fieldsOptions} />
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
    "px-10 py-3 text-2xl font-fontBold rounded-md w-max flex gap-3 esm:text-lg items-center esm:px-7 esm:py-2",
    { "bg-slate-200 text-black": !isCreateAvailable },
    { "bg-secondColor text-white": isCreateAvailable }
  );

  return (
    <div className="flex justify-center gap-4 w-full flex-wrap">
      <button
        className="px-10 py-3 text-2xl font-fontBold bg-principalColor text-white rounded-md w-max esm:text-lg esm:px-7 esm:py-2"
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
