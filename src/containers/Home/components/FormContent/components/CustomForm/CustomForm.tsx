import { useContext } from "react";
import Editor from "@monaco-editor/react";
import {
  CustomDataType,
  DatasetField,
} from "../../../../../../shared/interfaces/datasets.interface";
import LoaderContainer from "../../../../../../shared/components/Loader/LoaderContainer";
import { DatasetsContext } from "../../../../../../shared/context/DatasetsContext";
import { DATASETS_ACTIONS } from "../../../../constants/ACTION_TYPES";
import { DATA_TYPES } from "../../../../../../shared/constant/DATA_TYPES";

const CustomForm = ({ field }: { field: DatasetField<CustomDataType> }) => {
  const { datasetDispatch, selectedDataset } = useContext(DatasetsContext);

  const handleChange = (c: string | undefined) => {
    datasetDispatch({
      type: DATASETS_ACTIONS.CHANGE_FIELD_DATATYPE,
      payload: {
        datasetID: selectedDataset.id,
        fieldID: field.id,
        dataType: {
          type: DATA_TYPES.CUSTOM,
          code: c || field.dataType.code,
        },
      },
    });
  };

  return (
    <div className="w-full flex px-5">
      <div className="w-full py-3 rounded border-2">
        <Editor
          height={`550px`}
          options={{
            minimap: { enabled: false },
            fontSize: 15,
            glyphMargin: false,
            folding: false,
          }}
          width={"100%"}
          onChange={handleChange}
          className="code-container w-full"
          language="javascript"
          defaultValue={field.dataType.code}
          loading={
            <LoaderContainer
              className={"w-[100px] esm:w-[60px]"}
              loading={true}
              children={<></>}
            />
          }
        />
      </div>
    </div>
  );
};

export default CustomForm;
