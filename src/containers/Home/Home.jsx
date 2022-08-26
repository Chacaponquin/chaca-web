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
    console.log(datasets);
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
    <div className="w-full flex h-full gap-8 flex-col overflow-x-hidden esm:px-5">
      <div className="flex gap-16 h-full">
        {openCreationModal && (
          <CreationModal
            handleSubmit={handleSubmit}
            handleCloseCreateModal={handleCloseCreateModal}
            loading={createDataLoading}
            porcent={porcent}
          />
        )}
        <DatasetBar handleOpenCreationModal={handleOpenCreationModal} />
        <DatasetForm {...selectedDataset} fieldsOptions={fieldsOptions} />
      </div>

      {datasets.length > 1 && <Pagination />}
    </div>
  );
};

export default Home;
