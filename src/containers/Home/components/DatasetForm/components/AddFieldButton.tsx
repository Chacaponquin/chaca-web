import { InputNumber } from "primereact/inputnumber";
import { useState, useContext } from "react";
import File from "../../../../../shared/assets/icons/File";
import Menu from "../../../../../shared/assets/icons/Menu";
import Plus from "../../../../../shared/assets/icons/Plus";
import { AppConfigContext } from "../../../../../shared/context/AppConfigContext";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { UserContext } from "../../../../../shared/context/UserContext";
import { DATASETS_ACTIONS } from "../../../helpers/reducer/ACTION_TYPES";

const AddFieldButton = () => {
  const [openOptions, setOpenOptions] = useState(false);

  return (
    <div className="w-full flex justify-end items-center">
      <div className="flex flex-col">
        <div
          className="flex justify-center items-center w-[40px] h-[40px] rounded-full hover:bg-slate-100 transition-all duration-300 cursor-pointer"
          onClick={() => setOpenOptions(!openOptions)}
        >
          <Menu size={25} />
        </div>

        {openOptions && (
          <div className="absolute px-8 py-4 shadow-md rounded-md bg-white flex flex-col gap-3 -translate-x-[80%] translate-y-[35px] text-base">
            <AddField />
            <InputCantDoc />
          </div>
        )}
      </div>
    </div>
  );
};

const AddField = () => {
  const { datasetDispatch, selectedDataset } = useContext(DatasetsContext);
  const { fieldsOptions } = useContext(AppConfigContext);

  return (
    <button
      className="items-center flex gap-3"
      onClick={() =>
        datasetDispatch({
          type: DATASETS_ACTIONS.ADD_NEW_FIELD,
          payload: { datasetID: selectedDataset.id, options: fieldsOptions },
        })
      }
      type="button"
    >
      <Plus size={20} />
      <p className="mb-0 whitespace-nowrap">Add Field</p>
    </button>
  );
};

const InputCantDoc = () => {
  const { selectedDataset, datasetDispatch } = useContext(DatasetsContext);
  const { actualUser } = useContext(UserContext);
  const { noUserLimits } = useContext(AppConfigContext);

  return (
    <div className="flex items-center gap-3 justify-center">
      <File size={20} />
      <InputNumber
        value={selectedDataset.limit}
        onValueChange={(e) => {
          datasetDispatch({
            type: DATASETS_ACTIONS.CHANGE_DATASET_LIMIT,
            payload: {
              datasetID: selectedDataset.id,
              value: e.value || 50,
            },
          });
        }}
        min={1}
        max={
          actualUser ? actualUser.limitDocuments : noUserLimits.LIMIT_DOCUMENTS
        }
        className="w-[100px]"
      />
    </div>
  );
};

export default AddFieldButton;
