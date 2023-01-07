import { Dropdown } from "primereact/dropdown";
import { useContext, useMemo } from "react";
import { FILE_TYPE } from "../../../../../shared/constant/FILE_TYPE";
import { AppConfigContext } from "../../../../../shared/context/AppConfigContext";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { CONFIG_ACTIONS } from "../../../constants/ACTION_TYPES";
import ModalButtons from "../shared/components/ModalButtons";
import ModalTitle from "../shared/components/ModalTitle";
import { InputSwitch } from "primereact/inputswitch";
import { UserContext } from "../../../../../shared/context/UserContext";
import { Private } from "../../../../../shared/assets/icons";
import ArgumentFilter from "../../../../../shared/components/ArgumentFilter/ArgumentFilter";
import { DataTransform } from "../../../../../shared/helpers/DataTransform";

const ExportSelectDatasetForm = ({
  handleCloseModal,
  handleCreateSelectDataset,
}: {
  handleCloseModal: () => void;
  handleCreateSelectDataset: () => void;
}) => {
  const { fileConfig } = useContext(AppConfigContext);
  const { configDispatch, config } = useContext(DatasetsContext);
  const { actualUser } = useContext(UserContext);

  const fileArguments = useMemo(() => {
    const fileFound = fileConfig.find(
      (el) => el.fileType === config.file.fileType
    );

    if (fileFound) return fileFound.arguments;
    else return [];
  }, [fileConfig, config.file.fileType]);

  const handleChangeFileArgument = (argument: string, value: any) => {
    configDispatch({
      type: CONFIG_ACTIONS.CHANGE_FILE_ARGUMENTS,
      payload: { field: argument, value },
    });
  };

  return (
    <div className="flex flex-col w-full">
      <ModalTitle
        handleCloseModal={handleCloseModal}
        titleText="Export Dataset"
      />

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <label htmlFor="" className="font-fontBold text-lg">
            Format:
          </label>
          <Dropdown
            options={fileConfig.map((f) => f.fileType)}
            value={config.file.fileType}
            onChange={(e) => {
              configDispatch({
                type: CONFIG_ACTIONS.CHANGE_FILE_TYPE,
                payload: {
                  value: e.value as FILE_TYPE,
                },
              });
            }}
          />
        </div>

        <div className="flex flex-col mt-2 gap-2">
          {fileArguments.map((a, i) => (
            <div className="flex items-center justify-between gap-2" key={i}>
              <label
                htmlFor=""
                className="font-fontBold text-lg whitespace-nowrap"
              >
                {DataTransform.titlePipe(a.argument)}:
              </label>
              <ArgumentFilter
                arg={a}
                handleChangeArgumentValue={(v) =>
                  handleChangeFileArgument(a.argument, v)
                }
                value={config.file.arguments[a.argument]}
              />
            </div>
          ))}

          <div className="flex items-center gap-2 justify-between">
            <label htmlFor="" className="font-fontBold text-lg">
              Save Schema:
            </label>
            {actualUser ? (
              <InputSwitch
                checked={true}
                onChange={(e) => {
                  configDispatch({
                    type: CONFIG_ACTIONS.CHANGE_SAVE_SCHEMA,
                    payload: { value: e.value },
                  });
                }}
              />
            ) : (
              <Private size={23} />
            )}
          </div>
        </div>
      </div>

      <ModalButtons
        handleCancel={handleCloseModal}
        handleNext={handleCreateSelectDataset}
        nextText="Export"
        type="edit"
      />
    </div>
  );
};

export default ExportSelectDatasetForm;
