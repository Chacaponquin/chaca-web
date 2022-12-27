import { useContext, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Bars, Plus } from "../../../../../shared/assets/icons";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import ConfigMenu from "./ConfigMenu";
import { ModalProps } from "../../../interfaces/modal.interface";
import { MODAL_ACTIONS } from "../../../constants/MODAL_ACTIONS";

const DatasetsHeader = ({
  handleOpenModal,
}: {
  handleOpenModal: (props: ModalProps) => void;
}) => {
  const [openConfig, setOpenConfig] = useState(false);

  const { datasets, handleSelectDataset, selectedDataset } =
    useContext(DatasetsContext);

  const handleNewDataset = () => {
    handleOpenModal({ type: MODAL_ACTIONS.ADD_DATASET });
    setOpenConfig(false);
  };

  const handleAddDatasetField = () => {
    handleOpenModal({
      type: MODAL_ACTIONS.ADD_FIELD,
      location: [selectedDataset.name],
    });
    setOpenConfig(false);
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
          value={selectedDataset ? selectedDataset.id : null}
        />
      </div>

      <div className="flex flex-col items-end">
        <button onClick={() => setOpenConfig(!openConfig)}>
          <Bars size={18} />
        </button>

        {openConfig && (
          <ConfigMenu handleAddDatasetField={handleAddDatasetField} />
        )}
      </div>
    </div>
  );
};

export default DatasetsHeader;
