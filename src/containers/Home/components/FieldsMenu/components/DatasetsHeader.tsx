import { useContext } from "react";
import { Dropdown } from "primereact/dropdown";
import { Config, Plus } from "../../../../../shared/assets/icons";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { DATASETS_ACTIONS } from "../../../helpers/reducer/ACTION_TYPES";

const DatasetsHeader = () => {
  const { datasets, handleSelectDataset, selectedDataset, datasetDispatch } =
    useContext(DatasetsContext);

  const handleNewDataset = () => {
    datasetDispatch({
      type: DATASETS_ACTIONS.CREATE_NEW_DATASET,
      payload: { datasetName: "Que pasa wey" },
    });
  };

  return (
    <div className="pt-3 mb-2 w-full bg-white flex items-center justify-between px-2">
      <div className="gap-1 flex items-center">
        <button onClick={handleNewDataset}>
          <Plus size={18} />
        </button>
        <Dropdown
          className="w-[170px] !text-sm"
          placeholder="Select a Dataset"
          options={datasets}
          optionValue={"id"}
          optionLabel={"name"}
          onChange={(e) => {
            handleSelectDataset(e.value);
          }}
          value={selectedDataset.id}
        />
      </div>

      <button>
        <Config size={18} />
      </button>
    </div>
  );
};

export default DatasetsHeader;
