import { useContext, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Bars, Plus } from "../../../../../shared/assets/icons";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { DATASETS_ACTIONS } from "../../../constants/ACTION_TYPES";
import ConfigMenu from "./ConfigMenu";

const DatasetsHeader = () => {
  const [openConfig, setOpenConfig] = useState(false);

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

      <div className="flex flex-col items-end">
        <button onClick={() => setOpenConfig(!openConfig)}>
          <Bars size={18} />
        </button>

        {openConfig && <ConfigMenu />}
      </div>
    </div>
  );
};

export default DatasetsHeader;
