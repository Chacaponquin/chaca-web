import {
  DatasetField,
  SingleValueDataType,
} from "../../../../../../shared/interfaces/datasets.interface";
import DataTypeSelect from "./components/DataTypeSelect";
import SchemaSelect from "./components/SchemaSelect";
import { useContext, useCallback } from "react";
import { AppConfigContext } from "../../../../../../shared/context/AppConfigContext";
import { RadioButton } from "primereact/radiobutton";
import { Config } from "../../../../../../shared/assets/icons";
import { Schema } from "../../../../../../shared/interfaces/options.interface";

const SingleValueForm = ({
  field,
}: {
  field: DatasetField<SingleValueDataType>;
}) => {
  const { schemas } = useContext(AppConfigContext);

  const findParent = useCallback(
    (p: string): Schema => {
      return schemas.find((el) => el.parent === p)!;
    },
    [schemas]
  );

  return (
    <div className="flex w-[70%] h-full flex-col bg-white gap-3">
      <DataTypeSelect />
      <SchemaSelect />

      <div className="flex flex-col gap-1 px-3">
        {findParent(field.dataType.fieldType.parent).options.map((el, i) => (
          <div
            className="bg-principal-bg w-full rounded-md flex items-center flex-col"
            key={i}
          >
            <div className="flex items-center w-full justify-between py-3 px-4">
              <div className="flex text-white items-center">
                <RadioButton />
                <p className="text-base ml-4">Buenas</p>
              </div>

              <div className="fill-white cursor-pointer">
                <Config size={25} />
              </div>
            </div>

            <div className="flex flex-col w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleValueForm;
