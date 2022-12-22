import { useContext } from "react";
import { DatasetsContext } from "../../../../shared/context/DatasetsContext";
import DatasetsHeader from "./components/DatasetsHeader";
import { v4 as uuid } from "uuid";
import FieldContainer from "./components/FieldContainer";
import { DATASETS_ACTIONS } from "../../helpers/reducer/ACTION_TYPES";
import { AppConfigContext } from "../../../../shared/context/AppConfigContext";

const FieldsMenu = () => {
  const { selectedDataset } = useContext(DatasetsContext);

  return (
    <div className="h-screen w-[330px] bg-white px-2 border-2">
      <DatasetsHeader />

      <div className="h-full bg-white w-full flex flex-col">
        {selectedDataset.fields.length > 0 ? (
          selectedDataset.fields.map((f) => (
            <FieldContainer key={uuid()} margin={0} field={f} />
          ))
        ) : (
          <NoFieldsMessage />
        )}
      </div>
    </div>
  );
};

const NoFieldsMessage = () => {
  const { datasetDispatch, selectedDataset } = useContext(DatasetsContext);
  const { schemas } = useContext(AppConfigContext);

  return (
    <div className="flex justify-center flex-col items-center">
      <img src="./images/Bored.svg" alt="" className="w-[200px] my-5" />
      <p className="text-xl text-slate-500 font-fontBold">Not fields found</p>
      <button
        className="mt-2 py-1 px-4 bg-secondColor text-white font-fontBold text-base transition-all duration-300 hover:opacity-70 cursor-pointer rounded-sm"
        onClick={() => {
          datasetDispatch({
            type: DATASETS_ACTIONS.ADD_NEW_FIELD,
            payload: {
              fieldName: "Buenas",
              schemas,
              location: [selectedDataset.name],
            },
          });
        }}
      >
        Add Field
      </button>
    </div>
  );
};

export default FieldsMenu;
