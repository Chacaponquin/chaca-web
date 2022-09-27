import { InputText } from "primereact/inputtext";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { DATASETS_ACTIONS } from "../../../helpers/reducer/ACTION_TYPES";
import AddFieldButton from "./AddFieldButton";

const DatasetDivHeader = ({
  name,
  datasetID,
}: {
  name: string;
  datasetID: string;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const { datasetDispatch } = useContext(DatasetsContext);

  const handleChangeDatasetName = () => {
    if (newName !== "") {
      datasetDispatch({
        type: DATASETS_ACTIONS.CHANGE_DATASET_NAME,
        payload: {
          datasetID: datasetID,
          value: newName,
        },
      });

      setIsEditing(false);
    } else toast.error("No puede dejar el nombre del dataset vacio");
  };

  return (
    <div className="flex gap-3 justify-between md:items-center items-end mb-3">
      <div className="flex md:items-center gap-3 md:flex-row flex-col items-start">
        <div className="flex items-center gap-3 ">
          {!isEditing ? (
            <h1 className="font-fontBold text-3xl text-center mb-0 flex items-center whitespace-nowrap ">
              {name}
            </h1>
          ) : (
            <InputText
              placeholder="Dataset Name..."
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-[150px] text-lg"
            />
          )}

          {isEditing ? (
            <button
              className="px-6 rounded-md text-lg py-1 text-white bg-principalColor transition-all duration-300 hover:bg-principalColor/70"
              onClick={handleChangeDatasetName}
            >
              Save
            </button>
          ) : (
            <button
              className="py-1 px-2 border-2 border-secondColor flex justify-center items-center text-secondColor rounded-md hover:text-white hover:bg-secondColor transition-all duration-300"
              onClick={() => setIsEditing(true)}
            >
              <Icon glyph="edit" size={25} />
            </button>
          )}
        </div>
      </div>

      <AddFieldButton />
    </div>
  );
};

export default DatasetDivHeader;
