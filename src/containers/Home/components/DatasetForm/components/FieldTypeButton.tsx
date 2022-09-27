import { DATA_TYPES } from "../../../../../shared/constant/DATA_TYPES";
import { DatasetField } from "../../../../../shared/interfaces/datasets.interface";

const FieldTypeButton = ({
  field,
  handleOpenModal,
}: {
  field: DatasetField;
  handleOpenModal: (id: string) => void;
}) => {
  const pipeText = () => {
    let text = "";

    if (field.dataType.type === DATA_TYPES.REF) text += `REF`;
    else if (field.dataType.type === DATA_TYPES.CUSTOM) text += "Custom";
    else if (field.dataType.type === DATA_TYPES.SINGLE_VALUE)
      text += field.dataType.fieldType.type;

    return (text += field.isArray ? "[ ]" : "");
  };

  return (
    <div className="px-6">
      {field.dataType ? (
        <button
          className="bg-principal-bg text-white py-2 px-10 text-lg rounded-md w-[180px] whitespace-nowrap esm:px-5 esm:text-base esm:w-[150px]"
          type="button"
          onClick={() => handleOpenModal(field.id)}
        >
          {pipeText()}
        </button>
      ) : (
        <button
          className="bg-principalColor text-white py-2 px-10 text-lg rounded-md w-[180px] esm:px-5 esm:text-base esm:w-[150px]"
          type="button"
          onClick={() => handleOpenModal(field.id)}
        >
          Type
        </button>
      )}
    </div>
  );
};

export default FieldTypeButton;
