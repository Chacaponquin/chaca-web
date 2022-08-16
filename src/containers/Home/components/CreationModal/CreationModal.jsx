import React, { useContext } from "react";
import Icon from "supercons";
import CSVIcon from "./assets/CSVIcon";
import JSONIcon from "./assets/JSONIcon";
import clsx from "clsx";
import OptionsButton from "../OptionsButton";
import { DatasetsContext } from "../../../../shared/context/DatasetsContext";
import { FILE_TYPE } from "../../helpers/datasetsUtils";
import { CONFIG_ACTIONS } from "../../helpers/reducer/ActionTypes";
import { dataMapToJsonTree } from "./helpers/dataMapToJsonTree";
import { Checkbox } from "primereact/checkbox";
import JSONTreeCont from "../../../../shared/components/JsonTree/JSONTreeCont";
import CreationLoading from "./components/CreationLoading";

const CreationModal = ({
  handleSubmit,
  handleCloseCreateModal,
  loading,
  porcent,
}) => {
  const { configDispatch, config, datasets, fieldsOptions } =
    useContext(DatasetsContext);

  const formatOptions = [
    { format: FILE_TYPE.JSON, icon: JSONIcon },
    { format: FILE_TYPE.CSV, icon: CSVIcon },
  ];

  const handleSelectFormat = (value) => {
    configDispatch({
      type: CONFIG_ACTIONS.CHANGE_FILE_TYPE,
      payload: {
        value: value,
      },
    });
  };

  const typeButton = (format) => {
    return clsx(
      "flex items-center gap-3 px-6 py-2 rounded-md",
      {
        "bg-principalColor !text-white fill-white": format === config.fileType,
      },
      { "bg-slate-200 text-black": format !== config.fileType }
    );
  };

  console.log(porcent);
  return (
    <div className="fixed bg-black/50 w-screen min-h-screen top-0 left-0 flex items-center justify-center z-50">
      {loading && <CreationLoading porcent={porcent} />}

      <div className="bg-white py-6 px-10 rounded-md w-[85%] min-h-[95%] flex flex-col gap-5 esm:w-[95%]">
        <div className="w-full flex esm:flex-col esm:gap-2">
          <div className="w-[70%] esm:w-full flex flex-col">
            <h1 className="text-2xl font-fontBold">Example Data:</h1>

            <JSONTreeCont data={dataMapToJsonTree(datasets, fieldsOptions)} />
          </div>

          <ConfigFormSection />
        </div>

        <div className="flex items-center gap-4 justify-center flex-wrap">
          {formatOptions.map((el, i) => (
            <button
              key={i}
              className={typeButton(el.format)}
              onClick={() => handleSelectFormat(el.format)}
            >
              <el.icon />
              <p className="mb-0 text-base">{el.format}</p>
            </button>
          ))}

          <button className={typeButton("Buenas")} disabled={true}>
            <Icon glyph="private-outline" size={25} />
            <p className="text-base mb-0">Code</p>
          </button>
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

  const { configDispatch, config } = useContext(DatasetsContext);

  return (
    <div className="flex flex-col w-[30%] gap-2 esm:w-full">
      <h1 className="font-fontBold text-2xl">Options:</h1>
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
  );
};

export default CreationModal;
