import { useContext } from "react";
import { InputNumber } from "primereact/inputnumber";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import clsx from "clsx";
import { DATASETS_ACTIONS } from "../../../constants/ACTION_TYPES";
import { UserContext } from "../../../../../shared/context/UserContext";
import { AppConfigContext } from "../../../../../shared/context/AppConfigContext";

const ConfigMenu = ({
  handleAddDatasetField,
  handleDeleteDataset,
}: {
  handleAddDatasetField: () => void;
  handleDeleteDataset: () => void;
}) => {
  const { selectedDataset, datasetDispatch } = useContext(DatasetsContext);
  const { actualUser } = useContext(UserContext);
  const { noUserLimits } = useContext(AppConfigContext);

  const commonClass = (c: string) => {
    return clsx(
      "w-full px-4 py-2 cursor-pointer transition-all duration-300 hover:bg-slate-200 flex items-center",
      c
    );
  };

  const textDivClass = () => {
    return commonClass(commonClass("flex items-center text-sm text-center"));
  };

  return (
    <div className="absolute flex flex-col -translate-x-0 translate-y-5 rounded-md bg-white shadow-md">
      <div className={commonClass("gap-5")}>
        <p className="mb-0 text-sm">Documents:</p>
        <InputNumber
          className="!text-sm w-[60px]"
          min={1}
          max={
            actualUser
              ? actualUser.limitDocuments
              : noUserLimits.LIMIT_DOCUMENTS
          }
          value={selectedDataset.limit}
          onChange={(e) => {
            datasetDispatch({
              type: DATASETS_ACTIONS.CHANGE_DATASET_LIMIT,
              payload: {
                datasetID: selectedDataset.id,
                newLimit: e.value || selectedDataset.limit,
              },
            });
          }}
        />
      </div>

      <div className={textDivClass()} onClick={handleAddDatasetField}>
        New Field
      </div>

      <div className={textDivClass()} onClick={handleDeleteDataset}>
        Delete
      </div>

      <div className={textDivClass()}>Export</div>
    </div>
  );
};

export default ConfigMenu;
