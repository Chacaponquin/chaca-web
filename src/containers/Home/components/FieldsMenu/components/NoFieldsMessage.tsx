import { useContext } from "react";
import { AppConfigContext } from "../../../../../shared/context/AppConfigContext";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { DATASETS_ACTIONS } from "../../../helpers/reducer/ACTION_TYPES";

const NoFieldsMessage = () => {
  const { datasetDispatch, selectedDataset } = useContext(DatasetsContext);
  const { schemas } = useContext(AppConfigContext);

  const handleNewField = () => {
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
