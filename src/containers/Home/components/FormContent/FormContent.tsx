import { useContext, useState, Fragment } from "react";
import FieldInfoHeader from "./components/FieldInfoHeader";
import SidePanel from "./components/SidePanel/SidePanel";
import { DATA_TYPES } from "../../../../shared/constant/DATA_TYPES";
import {
  CustomDataType,
  DatasetField,
  RefDataType,
  SingleValueDataType,
} from "../../../../shared/interfaces/datasets.interface";
import { DatasetsContext } from "../../../../shared/context/DatasetsContext";
import CustomForm from "./components/CustomForm/CustomForm";
import RefForm from "./components/RefForm/RefForm";
import SingleValueForm from "./components/SingleValueForm/SingleValueForm";
import clsx from "clsx";

const FormContent = () => {
  const [docsOpen, setDocsOpen] = useState(true);
  const { selectField } = useContext(DatasetsContext);

  const containerClass = () => {
    return clsx("h-full w-full flex", { "justify-center": !docsOpen });
  };

  const handleCloseDocs = () => {
    setDocsOpen(false);
  };

  return (
    <div className={"flex flex-col w-full h-screen"}>
      <FieldInfoHeader />

      <div className={containerClass()}>
        <div className="w-[70%] h-full flex">
          <div className="gap-16 overflow-y-auto h-full bg-white w-full flex">
            {selectField === null ? (
              <NoSelectField />
            ) : (
              <Fragment>
                {selectField.info.dataType.type === DATA_TYPES.SINGLE_VALUE && (
                  <SingleValueForm
                    field={
                      selectField.getNodeObject() as DatasetField<SingleValueDataType>
                    }
                  />
                )}
                {selectField.info.dataType.type === DATA_TYPES.CUSTOM && (
                  <CustomForm
                    field={
                      selectField.getNodeObject() as DatasetField<CustomDataType>
                    }
                  />
                )}
                {selectField.info.dataType.type === DATA_TYPES.REF && (
                  <RefForm
                    field={
                      selectField.getNodeObject() as DatasetField<RefDataType>
                    }
                  />
                )}
              </Fragment>
            )}
          </div>
        </div>

        <SidePanel docsOpen={docsOpen} handleCloseDocs={handleCloseDocs} />
      </div>
    </div>
  );
};

const NoSelectField = () => {
  return <div>No selected field</div>;
};

export default FormContent;
