import { useContext } from "react";
import { DatasetsContext } from "../../../../shared/context/DatasetsContext";
import DatasetsHeader from "./components/DatasetsHeader";
import FieldContainer from "./components/FieldContainer";
import NoFieldsMessage from "./components/NoFieldsMessage";

const FieldsMenu = () => {
  const { selectedDataset } = useContext(DatasetsContext);

  return (
    <div className="h-screen w-[330px] bg-white border-2">
      <DatasetsHeader />

      <div className="h-full bg-white w-full flex flex-col">
        {selectedDataset.fields.length > 0 ? (
          selectedDataset.fields.map((f) => (
            <FieldContainer key={f.id} margin={0} field={f} />
          ))
        ) : (
          <NoFieldsMessage />
        )}
      </div>
    </div>
  );
};

export default FieldsMenu;
