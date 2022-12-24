import { useContext, useEffect, useState } from "react";
import { DatasetsContext } from "../../../shared/context/DatasetsContext";
import { UserContext } from "../../../shared/context/UserContext";
import { toast } from "react-toastify";
import { ModalProps } from "../interfaces/modal.interface";

export const useHome = () => {
  const { datasets, config } = useContext(DatasetsContext);
  const { socket } = useContext(UserContext);

  const [openModal, setOpenModal] = useState<null | ModalProps>(null);

  const [createDataLoading, setCreateDataLoading] = useState(false);
  const [openCreationModal, setOpenCreationModal] = useState(false);

  const [porcent, setPorcent] = useState(0);

  const handleCloseCreateModal = () => {
    setOpenCreationModal(false);
  };

  const handleOpenModal = (props: ModalProps) => {
    setOpenModal(props);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
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
      setOpenCreationModal(true);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return {
    openModal,
    handleOpenModal,
    handleCloseModal,
    porcent,
  };
};
