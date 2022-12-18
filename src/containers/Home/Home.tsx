import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import DatasetForm from "./components/DatasetForm/DatasetForm";
import "./home.css";
import CreationModal from "./components/CreationModal/CreationModal";
import { DatasetsContext } from "../../shared/context/DatasetsContext";
import { UserContext } from "../../shared/context/UserContext";
import { useEffect } from "react";
import { validateDatasetsData } from "./helpers/validateDatasetsData";
import DatasetBar from "./components/DatasetsBar/DatasetBar";
import Pagination from "./components/Pagination/Pagination";
import { DATASETS_ACTIONS } from "./helpers/reducer/ACTION_TYPES";
import { AppConfigContext } from "../../shared/context/AppConfigContext";
import FieldsMenu from "./components/FieldsMenu/FieldsMenu";
import FormContent from "./components/FormContent/FormContent";

const Home = () => {
  const { datasets, config, selectedDataset } = useContext(DatasetsContext);
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

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (socket.connected) {
      setCreateDataLoading(true);

      socket.emit("createDatasets", {
        datasets,
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
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex w-full">
      <FieldsMenu />
      <FormContent />

      <div className="gap-16 hidden overflow-y-auto">
        {openCreationModal && (
          <CreationModal
            handleSubmit={handleSubmit}
            handleCloseCreateModal={handleCloseCreateModal}
            loading={createDataLoading}
            porcent={porcent}
          />
        )}

        {selectedDataset && (
          <React.Fragment>
            <DatasetBar handleOpenCreationModal={handleOpenCreationModal} />
            <DatasetForm {...selectedDataset} />
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Home;
