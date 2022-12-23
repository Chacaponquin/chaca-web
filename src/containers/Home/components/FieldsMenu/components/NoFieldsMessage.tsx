import { useContext } from "react";
import { AppConfigContext } from "../../../../../shared/context/AppConfigContext";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { DATASETS_ACTIONS } from "../../../constants/ACTION_TYPES";
import { MODAL_ACTIONS } from "../../../constants/MODAL_ACTIONS";

const NoFieldsMessage = ({
  handleOpenModal,
}: {
  handleOpenModal: (a: MODAL_ACTIONS) => void;
}) => {
  const { datasetDispatch, selectedDataset } = useContext(DatasetsContext);
  const { schemas } = useContext(AppConfigContext);

  const handleNewField = () => {
    handleOpenModal(MODAL_ACTIONS.ADD_FIELD);

    datasetDispatch({
      type: DATASETS_ACTIONS.ADD_NEW_FIELD,
      payload: {
        fieldName: "Buenas",
        schemas,
        location: [selectedDataset.name],
      },
    });
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <img src="./images/Bored.svg" alt="" className="w-[200px] my-5" />
      <p className="text-xl text-slate-500 font-fontBold">Not fields found</p>
      <button
        className="mt-2 py-1 px-4 bg-secondColor text-white font-fontBold text-base transition-all duration-300 hover:opacity-70 cursor-pointer rounded-sm"
        onClick={handleNewField}
      >
        Add Field
      </button>
    </div>
  );
};

export default NoFieldsMessage;
