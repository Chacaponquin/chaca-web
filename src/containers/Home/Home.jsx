import React, { useState } from "react";
import { useQuery } from "../../shared/hooks/useQuery";
import { apiRoutes } from "../../shared/routes/api/apiRoutes";
import { dataMap } from "./helpers/dataMap";
import { usePost } from "../../shared/hooks/usePost";
import { toast } from "react-toastify";
import DatasetForm from "./components/DatasetForm";
import LoaderContainer from "../../shared/components/Loader/LoaderContainer";

import "./home.css";
import CreationModal from "./components/CreationModal/CreationModal";

const Home = () => {
  const [fieldsOptions, setFieldsOptions] = useState([]);
  const [openCreationModal, setOpenCreationModal] = useState(false);
  const [datasets, setDatasets] = useState([
    {
      id: Date.now(),
      name: "First DataSet",
      fields: [
        { id: 7497433, name: "", type: null, dataType: null },
        { id: 7497443, name: "", type: null, dataType: null },
        { id: 749749, name: "", type: null, dataType: null },
      ],
      limit: 50,
    },
  ]);

  const { loading: getFieldsLoading } = useQuery({
    url: apiRoutes.GET_FIELDS,
    onCompleted: (data) => setFieldsOptions(dataMap(data.fields)),
    onError: (error) => console.log(error),
  });

  const [createData, { loading: createDataLoading }] = usePost({
    onCompleted: (data) => console.log(data),
    onError: (error) =>
      toast.error("Hubo un error en la creacion de los datasets"),
    url: apiRoutes.CREATE_DATA,
    body: { datasets: datasets, config: {} },
  });

  const handleNewField = (dataSetID) => {
    const newDatasets = datasets.map((el) => {
      if (el.id === dataSetID) {
        return {
          ...el,
          fields: [
            ...el.fields,
            { id: Date.now(), name: "", type: null, dataType: null },
          ],
        };
      }

      return el;
    });

    setDatasets(newDatasets);
  };

  const handleChangeFieldName = (datasetID, fieldID, value) => {
    const newDatasets = datasets.map((dat) => {
      if (dat.id === datasetID) {
        const newFields = dat.fields.map((f) => {
          if (f.id === fieldID) f.name = value;

          return f;
        });

        dat.fields = newFields;
      }

      return dat;
    });

    setDatasets(newDatasets);
  };

  const handleDeleteField = (datasetID, fieldID) => {
    const newDatasets = datasets.map((dat) => {
      if (dat.id === datasetID) {
        const newFields = dat.fields.filter((f) => f.id !== fieldID);

        dat.fields = newFields;
      }

      return dat;
    });

    setDatasets(newDatasets);
  };

  const handleSelectType = (
    datasetID,
    { fieldID, type, parent, dataType, args }
  ) => {
    const newDatasets = datasets.map((dat) => {
      if (dat.id === datasetID) {
        const newFields = dat.fields.map((f) => {
          if (f.id === fieldID) {
            f.type = { parent, type: type };
            f.dataType = dataType;
            f.args = args;
          }

          return f;
        });

        dat.fields = newFields;
      }

      return dat;
    });

    setDatasets(newDatasets);
  };

  const handleChangeLimit = (datasetID, value) => {
    const newDatasets = datasets.map((dat) => {
      if (dat.id === datasetID) {
        dat.limit = value;
      }

      return dat;
    });

    setDatasets(newDatasets);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      createData();
    } catch (error) {
      toast.error("Hubo un error en la creacion de los datasets");
    }
  };

  const handleOpenCreationModal = () => {
    try {
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

  if (getFieldsLoading || createDataLoading) {
    return (
      <div className="top-0 fixed flex justify-center items-center left-0 h-screen w-full bg-white">
        <LoaderContainer
          loading={getFieldsLoading || createDataLoading}
          className="w-[220px] esm:w-[120px]"
          children={<div></div>}
        />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {openCreationModal && <CreationModal handleSubmit={handleSubmit} />}

      <div className="flex flex-col items-center gap-3">
        <h1 className=" hidden font-fontExtraBold text-6xl text-center">
          Let´s Create Your Datasets
        </h1>
        <div className="flex items-center">
          <div></div>

          {datasets.map((dat, i) => (
            <DatasetForm
              {...dat}
              key={i}
              handleChangeFieldName={handleChangeFieldName}
              handleNewField={handleNewField}
              handleDeleteField={handleDeleteField}
              handleSelectType={handleSelectType}
              handleChangeLimit={handleChangeLimit}
              fieldsOptions={fieldsOptions}
            />
          ))}

          <div></div>
        </div>

        <div className="flex justify-center">
          <button
            className="px-10 py-3 text-2xl font-fontBold bg-principalColor text-white rounded-md w-max"
            onClick={handleOpenCreationModal}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
