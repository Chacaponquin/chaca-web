import { useContext } from "react";
import { DatasetsContext } from "../../../../shared/context/DatasetsContext";
import { ModalProps } from "../../interfaces/modal.interface";
import DatasetsHeader from "./components/DatasetsHeader";
import FieldContainer from "./components/FieldContainer";
import NoFieldsMessage from "./components/NoFieldsMessage";

const FieldsMenu = ({
  handleOpenModal,
}: {
  handleOpenModal: (a: ModalProps) => void;
}) => {
  const { selectedDataset } = useContext(DatasetsContext);

  return (
    <div className="h-screen min-w-[300px] max-w-[300px] bg-white border-2 flex flex-col justify-between">
      <div className="flex flex-col w-full">
        <DatasetsHeader handleOpenModal={handleOpenModal} />

        <div className="h-full bg-white w-full flex flex-col">
          {selectedDataset && selectedDataset.fields.length > 0 ? (
            selectedDataset.fields.map((f) => (
              <FieldContainer
                key={f.id}
                margin={0}
                field={f}
                handleOpenModal={handleOpenModal}
              />
            ))
          ) : (
            <NoFieldsMessage handleOpenModal={handleOpenModal} />
          )}
        </div>
      </div>

      <div className="w-full px-3 py-2">
        <button className="px-3 py-1 text-white font-fontBold rounded-sm bg-secondColor text-lg w-full transition-all duration-300 hover:opacity-70">
          Export All
        </button>
      </div>
    </div>
  );
};

export default FieldsMenu;
