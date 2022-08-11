import React, { useContext } from "react";
import Icon from "supercons";
import CSVIcon from "./assets/CSVIcon";
import JSONIcon from "./assets/JSONIcon";
import clsx from "clsx";
import OptionsButton from "../OptionsButton";
import { DatasetsContext } from "../../../../shared/context/DatasetsContext";
import { FILE_TYPE } from "../../helpers/datasetsUtils";
import { CONFIG_ACTIONS } from "../../helpers/reducer/ActionTypes";

const CreationModal = ({ handleSubmit, handleCloseCreateModal, loading }) => {
  const { configDispatch, config } = useContext(DatasetsContext);

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
  return (
    <div className="fixed bg-black/50 w-full h-screen top-0 left-0 flex items-center justify-center z-50">
      <div className="bg-white py-6 px-7 rounded-md w-[80%] h-[80%] flex flex-col gap-3 esm:w-[95%]">
        <div className="flex items-center gap-5 justify-center">
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

export default CreationModal;
