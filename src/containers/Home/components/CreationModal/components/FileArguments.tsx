import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import FieldInputArgument from "../../../../../shared/components/FieldInputArgument/FieldInputArgument";
import { AppConfigContext } from "../../../../../shared/context/AppConfigContext";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { DataTransform } from "../../../../../shared/helpers/DataTransform";
import { FieldArgument } from "../../../../../shared/interfaces/datasets.interface";
import { ArgumentSchema } from "../../../../../shared/interfaces/options.interface";
import { CONFIG_ACTIONS } from "../../../constants/ACTION_TYPES";

const FileArguments = () => {
  const [fileArguments, setFileArguments] = useState<ArgumentSchema[]>([]);
  const { config, configDispatch } = useContext(DatasetsContext);
  const { fileConfig } = useContext(AppConfigContext);

  useEffect(() => {
    const fileFound = fileConfig.find(
      (el) => el.fileType === config.file.fileType
    );

    if (fileFound) {
      setFileArguments(fileFound.arguments);
    }
  }, [config, fileConfig]);

  const handleChangeArguments = ({
    value,
    field,
  }: {
    value: FieldArgument;
    field: string;
  }) => {
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
        <div className="flex items-center gap-3 whitespace-nowrap" key={i}>
          <p className="mb-0">{DataTransform.titlePipe(el.argument)}:</p>
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
