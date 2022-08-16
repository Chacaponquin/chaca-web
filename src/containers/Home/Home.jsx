import React, { useContext, useState } from "react";
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
import { returnDataMap } from "./helpers/dataMap";
import { useEffect } from "react";
import { validateDatasetsData } from "./helpers/validateDatasetsData";

const Home = () => {
  const {
    datasets,
    dispatch,
    config,
    noUserLimits,
    fieldsOptions,
    getFieldsLoading,
  } = useContext(DatasetsContext);
  const { actualUser, socket } = useContext(UserContext);
  const [createDataLoading, setCreateDataLoading] = useState(false);
  const [openCreationModal, setOpenCreationModal] = useState(false);

  const [porcent, setPorcent] = useState(0);

  const handleCloseCreateModal = () => {
    setOpenCreationModal(false);
  };

  useEffect(() => {
    socket.on("getDownUrl", (args) => {
      window.open(`${process.env.REACT_APP_API_URL}/${args.downUrl}`);
      setCreateDataLoading(false);
    });

    socket.on("documentCreated", (data) => {
      setPorcent(Number(data.porcent) || 0);
    });

    socket.on("createDatasetsError", (error) => {
      console.log(error);
      toast.error("Hubo un error en la creacion de los datasets");
      setCreateDataLoading(false);
    });

    return () => {
      socket.off("getDownUrl");
      socket.off("createDatasetsError");
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (socket.connected) {
      setCreateDataLoading(true);

      socket.emit("createDatasets", {
        datasets: returnDataMap(datasets),
        config,
      });
    } else {
      toast.error("Revisa tu internet");
      setCreateDataLoading(false);
    }
  };

  const handleOpenCreationModal = () => {
    try {
      validateDatasetsData(datasets);
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
    <div className="w-full flex flex-col items-center justify-center gap-3 pb-40">
      {openCreationModal && (
        <CreationModal
          handleSubmit={handleSubmit}
          handleCloseCreateModal={handleCloseCreateModal}
          loading={createDataLoading}
          porcent={porcent}
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
    <div className="w-full flex-wrap fixed bottom-0  bg-transparent shadow-xl py-3 px-10">
      <div className="py-4 flex items-center shadow-xl rounded-md justify-center gap-4 w-full bg-white">
        <button
          className="px-10 py-3 text-2xl font-fontBold bg-principalColor text-white rounded-md w-max esm:text-lg esm:px-7 esm:py-2"
          onClick={handleOpenCreationModal}
        >
          Create
        </button>

        <button
          className={addDatasetButtonClass}
          onClick={() =>
            dispatch({ type: DATASETS_ACTIONS.CREATE_NEW_DATASET })
          }
          disabled={isCreateAvailable ? false : true}
        >
          {isCreateAvailable ? <Icon glyph="plus" /> : <Icon glyph="private" />}

          <p className="mb-0 font-fontBold hidden">Add Dataset</p>
        </button>
      </div>
    </div>
  );
};

export default Home;
