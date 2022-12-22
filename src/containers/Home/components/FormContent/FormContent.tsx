import { useContext, useState } from "react";
import FieldInfoHeader from "./components/FieldInfoHeader";
import SidePanel from "./components/SidePanel";
import { AppConfigContext } from "../../../../shared/context/AppConfigContext";
import { DATA_TYPES } from "../../../../shared/constant/DATA_TYPES";
import { IFieldInfo } from "./interfaces/field.interface";
import { FieldDataType } from "../../../../shared/interfaces/datasets.interface";

const FormContent = () => {
  const [docsOpen, setDocsOpen] = useState(false);
  const { schemas } = useContext(AppConfigContext);

  const [fieldInfo, setFieldInfo] = useState<IFieldInfo<FieldDataType>>({
    fieldID: "1",
    dataType: {
      type: DATA_TYPES.SINGLE_VALUE,
      fieldType: {
        type: schemas[0].options[0].name,
        parent: schemas[0].parent,
        args: {},
      },
    },
  });

  return (
    <div className="flex flex-col w-full h-screen bg-red-500">
      <FieldInfoHeader />

      <div className="h-full w-full flex">
        <SidePanel />
      </div>
    </div>
  );
};

export default FormContent;
