import { useContext } from "react";
import { Dropdown } from "primereact/dropdown";
import { Config } from "../../../../../shared/assets/icons";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";

const DatasetsHeader = () => {
  const { datasets } = useContext(DatasetsContext);

  return (
    <div className="pt-4 mb-2 w-full bg-white flex items-center justify-between">
      <Dropdown
        className="w-[190px] text-sm"
        placeholder="Select a Dataset"
        options={datasets}
        optionValue={"id"}
        optionLabel={"name"}
      />
      <Config size={18} />
    </div>
  );
};

export default DatasetsHeader;
