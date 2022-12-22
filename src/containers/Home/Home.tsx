import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import "./home.css";
import { DatasetsContext } from "../../shared/context/DatasetsContext";
import { UserContext } from "../../shared/context/UserContext";
import { useEffect } from "react";
import FieldsMenu from "./components/FieldsMenu/FieldsMenu";
import FormContent from "./components/FormContent/FormContent";
import SingleValueForm from "./components/FormContent/components/SingleValueForm/SingleValueForm";
import { DATA_TYPES } from "../../shared/constant/DATA_TYPES";
import {
  CustomDataType,
  DatasetField,
  RefDataType,
  SingleValueDataType,
} from "../../shared/interfaces/datasets.interface";
import CustomForm from "./components/FormContent/components/CustomForm/CustomForm";
import RefForm from "./components/FormContent/components/RefForm/RefForm";

const Home = () => {
  const { datasets, config, selectField } = useContext(DatasetsContext);
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
        {selectField === null ? (
          <NoSelectField />
        ) : (
          <React.Fragment>
            {selectField.info.dataType.type === DATA_TYPES.SINGLE_VALUE && (
              <SingleValueForm
                field={
                  selectField.getNodeObject() as DatasetField<SingleValueDataType>
                }
              />
            )}
            {selectField.info.dataType.type === DATA_TYPES.CUSTOM && (
              <CustomForm
                field={
                  selectField.getNodeObject() as DatasetField<CustomDataType>
                }
              />
            )}
            {selectField.info.dataType.type === DATA_TYPES.REF && (
              <RefForm
                field={selectField.getNodeObject() as DatasetField<RefDataType>}
              />
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

const NoSelectField = () => {
  return <div>No selected field</div>;
};

export default Home;
