import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import DatasetForm from "./components/DatasetForm/DatasetForm";
import LoaderContainer from "../../shared/components/Loader/LoaderContainer";
import "./home.css";
import CreationModal from "./components/CreationModal/CreationModal";
import { DatasetsContext } from "../../shared/context/DatasetsContext";
import { UserContext } from "../../shared/context/UserContext";
import { returnDataMap } from "./helpers/dataMap";
import { useEffect } from "react";
import { validateDatasetsData } from "./helpers/validateDatasetsData";
import DatasetBar from "./components/DatasetsBar/DatasetBar";
import Pagination from "./components/Pagination/Pagination";
import { DATASETS_ACTIONS } from "./helpers/reducer/ActionTypes";

const Home = () => {
  const { datasets, config, fieldsOptions, getFieldsLoading, selectedDataset } =
    useContext(DatasetsContext);
  const { socket } = useContext(UserContext);
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
      toast.error("Error en la conexión");
      setCreateDataLoading(false);
    }
  };

  const handleOpenCreationModal = () => {
    try {
      validateDatasetsData(datasets);
      setOpenCreationModal(true);
    } catch (error) {
      toast.error(error.message);
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
    <div className="w-full flex h-max lg:h-full gap-8 flex-col overflow-x-hidden form-content">
      <div className="flex gap-16 h-full overflow-y-auto ">
        {openCreationModal && (
          <CreationModal
            handleSubmit={handleSubmit}
            handleCloseCreateModal={handleCloseCreateModal}
            loading={createDataLoading}
            porcent={porcent}
          />
        )}

        {selectedDataset && (
          <>
            <DatasetBar handleOpenCreationModal={handleOpenCreationModal} />
            <DatasetForm {...selectedDataset} fieldsOptions={fieldsOptions} />
          </>
        )}
      </div>

      <DatasetsOptions handleOpenCreationModal={handleOpenCreationModal} />
    </div>
  );
};

const DatasetsOptions = ({ handleOpenCreationModal }) => {
  const { dispatch, datasets } = useContext(DatasetsContext);

  return (
    <div className="flex flex-col gap-4">
      {datasets.length > 1 && <Pagination />}

      <div className="flex items-center flex-wrap justify-end lg:hidden text-xl gap-4">
        <button
          className="flex items-center px-10 py-2 text-white bg-principalColor rounded-md transition-all duration-300 hover:opacity-70"
          onClick={() =>
            dispatch({ type: DATASETS_ACTIONS.CREATE_NEW_DATASET })
          }
        >
          <p className="mb-0 font-fontBold">New Dataset</p>
        </button>

        <button
          className="bg-principal-bg text-white font-fontBold px-10 py-2 rounded-md transition-all duration-300 hover:opacity-70"
          onClick={handleOpenCreationModal}
        >
          Export
        </button>
      </div>
    </div>
  );
};

export default Home;
