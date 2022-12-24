import { InputText } from "primereact/inputtext";
import React, { useContext, useState } from "react";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { DATASETS_ACTIONS } from "../../../constants/ACTION_TYPES";
import ModalButtons from "../shared/components/ModalButtons";
import ModalTitle from "../shared/components/ModalTitle";

const AddDatasetForm = ({
  handleCloseModal,
}: {
  handleCloseModal: () => void;
}) => {
  const { datasetDispatch } = useContext(DatasetsContext);
  const [datasetName, setDatasetName] = useState("");

  const handleAddDataset = () => {
    datasetDispatch({
      type: DATASETS_ACTIONS.CREATE_NEW_DATASET,
      payload: { datasetName },
    });
    handleCloseModal();
  };

  return (
    <div className="flex flex-col w-full">
      <ModalTitle titleText="New Dataset" handleCloseModal={handleCloseModal} />

      <div className="flex flex-col">
        <label htmlFor="" className="font-fontBold text-lg">
          Dataset name:
        </label>
        <InputText
          className="w-full"
          placeholder="Field name..."
          value={datasetName}
          onChange={(e) => setDatasetName(e.target.value)}
        />
      </div>

      <ModalButtons
        nextText="Create Dataset"
        handleCancel={handleCloseModal}
        handleNext={handleAddDataset}
      />
    </div>
  );
};

export default AddDatasetForm;
