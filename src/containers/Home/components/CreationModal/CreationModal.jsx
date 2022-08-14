import React, { useContext } from "react";
import Icon from "supercons";
import CSVIcon from "./assets/CSVIcon";
import JSONIcon from "./assets/JSONIcon";
import clsx from "clsx";
import OptionsButton from "../OptionsButton";
import { DatasetsContext } from "../../../../shared/context/DatasetsContext";
import { FILE_TYPE } from "../../helpers/datasetsUtils";
import { CONFIG_ACTIONS } from "../../helpers/reducer/ActionTypes";
import { JSONTree } from "react-json-tree";
import { dataMapToJsonTree } from "./helpers/dataMapToJsonTree";
import { Checkbox } from "primereact/checkbox";

const CreationModal = ({ handleSubmit, handleCloseCreateModal, loading }) => {
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

  const theme = {
    scheme: "monokai",
    base00: "#272822",
    base01: "#383830",
    base02: "#49483e",
    base03: "#000000",
    base04: "#000000",
    base05: "#f8f8f2",
    base06: "#f5f4f1",
    base07: "#f9f8f5",
    base08: "#f92672",
    base09: "#fd971f",
    base0A: "#f4bf75",
    base0B: "#00CC99",
    base0C: "#a1efe4",
    base0D: "#66d9ef",
    base0E: "#ae81ff",
    base0F: "#cc6633",
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
  return (
    <div className="fixed bg-black/50 w-screen min-h-screen top-0 left-0 flex items-center justify-center z-50">
      <div className="bg-white py-6 px-10 rounded-md w-[85%] min-h-[95%] flex flex-col gap-5 esm:w-[95%]">
        <div className="w-full flex">
          <div className="w-[70%] flex flex-col">
            <h1 className="text-2xl font-fontBold">Example Data:</h1>
            <JSONTree
              data={dataMapToJsonTree(datasets, fieldsOptions)}
              hideRoot={true}
              theme={{ extend: theme }}
              labelRenderer={([key]) => (
                <h1 className="font-fontBold text-lg">{key}:</h1>
              )}
              shouldExpandNode={() => true}
              valueRenderer={(value) => (
                <p className="inline font-fontBold">{value}</p>
              )}
            />
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
          loading={loading}
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
    <div className="flex flex-col w-[30%] gap-4">
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
