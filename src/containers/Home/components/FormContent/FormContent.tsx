import { useState } from "react";
import { Config } from "../../../../shared/assets/icons";
import { RadioButton } from "primereact/radiobutton";
import FieldInfoHeader from "./components/FieldInfoHeader";
import SidePanel from "./components/SidePanel";
import SchemaSelect from "./components/SchemaSelect";
import DataTypeSelect from "./components/DataTypeSelect";

const FormContent = () => {
  const [docsOpen, setDocsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full h-screen bg-red-500">
      <FieldInfoHeader />

      <div className="h-full w-full flex">
        <div className="flex w-[70%] h-full flex-col bg-white gap-3">
          <DataTypeSelect />
          <SchemaSelect />

          <div className="flex flex-col gap-1 px-3">
            {[1, 2, 3].map((el, i) => (
              <div
                className="py-3 px-4 bg-principal-bg w-full rounded-md flex items-center justify-between"
                key={i}
              >
                <div className="flex text-white items-center">
                  <RadioButton />
                  <p className="text-lg ml-4">Buenas</p>
                </div>

                <div className="fill-white cursor-pointer">
                  <Config size={25} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <SidePanel />
      </div>
    </div>
  );
};

export default FormContent;
