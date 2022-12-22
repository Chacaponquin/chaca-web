import { useContext } from "react";
import { Dropdown } from "primereact/dropdown";
import { Config, Plus } from "../../../../../shared/assets/icons";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";

const DatasetsHeader = () => {
  const { datasets, handleSelectDataset, selectedDataset } =
    useContext(DatasetsContext);

  return (
    <div className="pt-4 mb-2 w-full bg-white flex items-center justify-between">
      <div className="gap-1 flex items-center">
        <button>
          <Plus size={18} />
        </button>
        <Dropdown
          className="w-[190px] text-sm"
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
