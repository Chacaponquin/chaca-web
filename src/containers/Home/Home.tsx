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
    <div className="w-full flex h-max lg:h-full gap-8 flex-col overflow-x-hidden form-content">
      <div className="flex gap-16 h-full overflow-y-auto">
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

      <DatasetsOptions handleOpenCreationModal={handleOpenCreationModal} />
    </div>
  );
};

const DatasetsOptions = ({
  handleOpenCreationModal,
}: {
  handleOpenCreationModal: () => void;
}) => {
  const { datasetDispatch, datasets } = useContext(DatasetsContext);
  const { fieldsOptions } = useContext(AppConfigContext);

  return (
    <div className="flex flex-col gap-4">
      {datasets.length > 1 && <Pagination />}

      <div className="flex items-center flex-wrap justify-end lg:hidden text-xl gap-4">
        <button
          className="flex items-center px-10 py-2 text-white bg-principalColor rounded-md transition-all duration-300 hover:opacity-70"
          onClick={() =>
            datasetDispatch({
              type: DATASETS_ACTIONS.CREATE_NEW_DATASET,
              payload: { options: fieldsOptions },
            })
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
