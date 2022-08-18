import React, { useContext } from "react";
import OptionsButton from "../OptionsButton";
import { DatasetsContext } from "../../../../shared/context/DatasetsContext";
import { CONFIG_ACTIONS } from "../../helpers/reducer/ActionTypes";
import { dataMapToJsonTree } from "./helpers/dataMapToJsonTree";
import { Checkbox } from "primereact/checkbox";
import JSONTreeCont from "../../../../shared/components/JsonTree/JSONTreeCont";
import CreationLoading from "./components/CreationLoading";
import { Dropdown } from "primereact/dropdown";
import FileArguments from "./components/FileArguments";

const CreationModal = ({
  handleSubmit,
  handleCloseCreateModal,
  loading,
  porcent,
}) => {
  const { datasets, fieldsOptions } = useContext(DatasetsContext);

  return (
    <div className="fixed bg-black/50 w-screen min-h-screen top-0 left-0 flex items-center justify-center z-50">
      {loading && <CreationLoading porcent={porcent} />}

      <div className="bg-white py-6 px-10 rounded-md w-[90%] min-h-[95%] flex flex-col gap-5 esm:w-[95%]">
        <div className="w-full flex esm:flex-col-reverse esm:gap-4">
          <div className="w-[70%] esm:w-full flex flex-col">
            <h1 className="text-3xl font-fontBold">Example Data:</h1>

            <JSONTreeCont data={dataMapToJsonTree(datasets, fieldsOptions)} />
          </div>

          <ConfigFormSection />
        </div>

        <OptionsButton
          handleCancel={handleCloseCreateModal}
          handleSubmit={handleSubmit}
          submitText={"Create"}
        />
      </div>
    </div>
  );
};

const ConfigFormSection = () => {
  const divClass = "flex items-center gap-3";
  const textClass = "mb-0 font-fontRegular text-xl esm:text-lg";

  const { configDispatch, config, fileConfigOptions } =
    useContext(DatasetsContext);

  return (
    <div className="flex flex-col w-[30%] gap-2 esm:w-full">
      <h1 className="font-fontBold text-3xl">Options:</h1>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-fontBold text-xl">Formato:</h1>
          <Dropdown
            options={fileConfigOptions.map((f) => f.fileType)}
            value={config.file.fileType}
            onChange={(e) => {
              configDispatch({
                type: CONFIG_ACTIONS.CHANGE_FILE_TYPE,
                payload: {
                  value: {
                    fileType: e.value,
                    arguments: {},
                  },
                },
              });
            }}
          />
        </div>

        <div className="flex flex-col gap-3">
          <FileArguments />

          <div className={divClass}>
            <Checkbox
              onChange={(e) => {
                configDispatch({
                  type: CONFIG_ACTIONS.CHANGE_SAVE_SCHEMA,
                  payload: { value: e.checked },
                });
              }}
              checked={config.saveSchema}
            />
            <p className={textClass}>Save Schema</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreationModal;
