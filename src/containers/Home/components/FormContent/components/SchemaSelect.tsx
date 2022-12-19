import { Dropdown } from "primereact/dropdown";
import { useContext } from "react";
import { AppConfigContext } from "../../../../../shared/context/AppConfigContext";

const SchemaSelect = () => {
  const { schemas } = useContext(AppConfigContext);

  return (
    <div className="flex px-3">
      <p className="mb-0 font-fontBold text-xl mr-4">Schema:</p>
      <Dropdown
        className="w-[200px]"
        optionLabel="parent"
        options={schemas}
        placeholder={"Select a Schema"}
        optionValue="id"
      />
    </div>
  );
};

export default SchemaSelect;
