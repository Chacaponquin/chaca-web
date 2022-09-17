import { Dropdown } from "primereact/dropdown";
import React, { useContext } from "react";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { CONFIG_ACTIONS } from "../../../helpers/reducer/ActionTypes";
import FileArguments from "./FileArguments";
import { UserContext } from "../../../../../shared/context/UserContext";
import Icon from "supercons";
import BooleanInput from "../../../../../shared/components/FieldInputArgument/components/BooleanInput";

const ConfigFormSection = () => {
  const divClass = "flex items-center gap-3";
  const textClass = "mb-0 font-fontRegular whitespace-nowrap";

  const { configDispatch, config, fileConfigOptions } =
    useContext(DatasetsContext);

  return (
    <div className="flex flex-col w-full gap-2 esm:w-full">
      <h1 className="font-fontBold text-4xl esm:text-3xl uppercase text-transparent bg-clip-text bg-gradient-to-br from-principalColor to-secondColor whitespace-nowrap mb-3">
        Options:
      </h1>

      <div className="flex flex-col gap-4 text-xl">
        <div className="flex gap-2">
          <h1 className="font-fontBold">Formato:</h1>
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

        <div className="flex flex-col gap-4">
          <FileArguments />

          <div className={divClass}>
            <p className={textClass}>Save Schema:</p>
            <NoUserPrivateConfig>
              <BooleanInput
                onChange={(value) => {
                  configDispatch({
                    type: CONFIG_ACTIONS.CHANGE_SAVE_SCHEMA,
                    payload: { value },
                  });
                }}
              />
            </NoUserPrivateConfig>
          </div>
        </div>
      </div>
    </div>
  );
};

const NoUserPrivateConfig = ({ children }) => {
  const { actualUser } = useContext(UserContext);

  return (
    <>
      {!actualUser ? (
        <div>
          <Icon glyph="private-outline" />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default ConfigFormSection;
