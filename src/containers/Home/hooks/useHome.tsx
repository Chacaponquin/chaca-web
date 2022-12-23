import { useCallback, useContext, useEffect, useState } from "react";
import { AppConfigContext } from "../../../shared/context/AppConfigContext";
import { DatasetsContext } from "../../../shared/context/DatasetsContext";
import { UserContext } from "../../../shared/context/UserContext";
import {
  Schema,
  SubOption,
} from "../../../shared/interfaces/options.interface";
import { toast } from "react-toastify";
import { MODAL_ACTIONS } from "../constants/MODAL_ACTIONS";

export const useHome = () => {
  const { schemas } = useContext(AppConfigContext);

  const { datasets, config, selectField } = useContext(DatasetsContext);
  const { socket } = useContext(UserContext);

  const [openModal, setOpenModal] = useState<null | MODAL_ACTIONS>(null);

  const [createDataLoading, setCreateDataLoading] = useState(false);
  const [openCreationModal, setOpenCreationModal] = useState(false);

  const [porcent, setPorcent] = useState(0);

  const handleCloseCreateModal = () => {
    setOpenCreationModal(false);
  };

  const handleOpenModal = (action: MODAL_ACTIONS) => {
    setOpenModal(action);
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

  const findParent = useCallback(
    (p: string): Schema => {
      return schemas.find((el) => el.parent === p)!;
    },
    [schemas]
  );

  const findType = useCallback(
    (p: string, t: string): SubOption => {
      const foundParent = schemas.find((el) => el.parent === p)!;
      return foundParent.options.find((el) => el.name === t)!;
    },
    [schemas]
  );

  return { openModal, handleOpenModal, handleCloseModal, findParent, findType };
};
