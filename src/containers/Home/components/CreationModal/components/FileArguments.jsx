import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { titlePipe } from "../../../../../shared/helpers/titlePipe";
import { CONFIG_ACTIONS } from "../../../helpers/reducer/ActionTypes";
import FieldInputArgument from "../../FieldInputArgument";

const FileArguments = () => {
  const [fileArguments, setFileArguments] = useState([]);
  const { fileConfigOptions, config, configDispatch } =
    useContext(DatasetsContext);

  useEffect(() => {
    const fileFound = fileConfigOptions.find(
      (el) => el.fileType === config.file.fileType
    );

    if (fileFound) {
      setFileArguments(fileFound.arguments);
    }
  }, [config, fileConfigOptions]);

  const handleChangeArguments = ({ value, field }) => {
    configDispatch({
      type: CONFIG_ACTIONS.CHANGE_FILE_ARGUMENTS,
      payload: {
        value,
        field,
      },
    });
  };

  return (
    <>
      {fileArguments.map((el, i) => (
        <div className="flex items-center gap-3" key={i}>
          <p>{titlePipe(el.argument)}:</p>
          <FieldInputArgument
            arg={el}
            handleChangeArguments={handleChangeArguments}
            allArguments={config.file.arguments}
          />
        </div>
      ))}
    </>
  );
};

export default FileArguments;
