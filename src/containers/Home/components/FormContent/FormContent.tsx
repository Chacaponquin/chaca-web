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
import DataTypeSelect from "./components/DataTypeSelect/DataTypeSelect";
import { ModalProps } from "../../interfaces/modal.interface";

const FormContent = ({
  handleOpenModal,
}: {
  handleOpenModal: (props: ModalProps) => void;
}) => {
  const [docsOpen, setDocsOpen] = useState(true);
  const { selectField } = useContext(DatasetsContext);

  const containerClass = () => {
    return clsx("w-full flex flex-grow", {
      "justify-center": !docsOpen,
    });
  };

  const formClass = () => {
    return clsx("", {
      "w-[60%]": docsOpen,
      "w-[70%]": !docsOpen,
    });
  };

  const handleCloseDocs = () => {
    setDocsOpen(false);
  };

  return (
    <div className="flex flex-col w-full h-screen">
      {selectField !== null && (
        <FieldInfoHeader
          handleOpenModal={handleOpenModal}
          selectField={selectField}
        />
      )}

      <div className={containerClass()}>
        <div className={formClass()}>
          <div className="gap-2 overflow-y-auto bg-white w-full flex flex-col">
            {selectField === null ? (
              <NoSelectField />
            ) : (
              <Fragment>
                <DataTypeSelect />

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
                    docsOpen={docsOpen}
                  />
                )}
              </Fragment>
            )}
          </div>
        </div>

        {selectField && docsOpen && (
          <SidePanel handleCloseDocs={handleCloseDocs} field={selectField} />
        )}
      </div>
    </div>
  );
};

const NoSelectField = () => {
  return (
    <div className="flex items-center justify-center">No selected field</div>
  );
};

export default FormContent;
