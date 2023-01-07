import { useContext, useEffect, useState } from "react";
import { DatasetsContext } from "../../../shared/context/DatasetsContext";
import { UserContext } from "../../../shared/context/UserContext";
import { toast } from "react-toastify";
import { ModalProps } from "../interfaces/modal.interface";
import { SOCKET_EVENTS } from "../constants/SOCKET_EVENTS";

export const useHome = () => {
  const { datasets, config, selectedDataset } = useContext(DatasetsContext);
  const { socket } = useContext(UserContext);

  const [openModal, setOpenModal] = useState<null | ModalProps>(null);

  const [createDataLoading, setCreateDataLoading] = useState(false);

  const [porcent, setPorcent] = useState(0);

  const handleOpenModal = (props: ModalProps) => {
    setOpenModal(props);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  useEffect(() => {
    socket.on(SOCKET_EVENTS.GET_DOWN_URL, (args) => {
      window.open(`${process.env.REACT_APP_API_URL}/${args.downUrl}`);
      setCreateDataLoading(false);
    });

    socket.on(SOCKET_EVENTS.DOCUMENT_CREATED, (data) => {
      setPorcent(Number(data.porcent) || 0);
    });

    socket.on(SOCKET_EVENTS.CREATE_DATASET_ERROR, (error) => {
      toast.error("Hubo un error en la creacion de los datasets");
      setCreateDataLoading(false);
    });

    return () => {
      socket.off(SOCKET_EVENTS.GET_DOWN_URL);
      socket.off(SOCKET_EVENTS.CREATE_DATASET_ERROR);
    };
  }, [socket]);

  const handleCreateAllDatasets = async () => {
    if (socket.connected) {
      setCreateDataLoading(true);

      socket.emit(SOCKET_EVENTS.CREATE_DATASETS, {
        datasets: datasets.map((d) => d.getDatasetObject),
        config,
      });
    } else {
      toast.error("Error en la conexión");
      setCreateDataLoading(false);
    }
  };

  const handleCreateSelectDataset = () => {
    if (socket.connected) {
      setCreateDataLoading(true);

      socket.emit(SOCKET_EVENTS.CREATE_DATASETS, {
        datasets: [selectedDataset.getDatasetObject()],
        config,
      });
    }
  };

  return {
    openModal,
    handleOpenModal,
    handleCloseModal,
    porcent,
    handleCreateSelectDataset,
    handleCreateAllDatasets,
    createDataLoading,
  };
};
