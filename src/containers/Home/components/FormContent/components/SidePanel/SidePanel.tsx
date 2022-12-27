import { DATA_TYPES } from "../../../../../../shared/constant/DATA_TYPES";
import { FieldNode } from "../../../../../../shared/helpers/DatasetTree";
import {
  FieldDataType,
  SingleValueDataType,
} from "../../../../../../shared/interfaces/datasets.interface";
import { useUtils } from "../../../../hooks/useUtils";
import CustomFormDocs from "./components/CustomFormDocs";
import SidePanelHeader from "./components/SidePanelHeader";
import SingleValueDocs from "./components/SingleValueDocs";

const SidePanel = ({
  field,
  handleCloseDocs,
}: {
  field: FieldNode<FieldDataType>;
  handleCloseDocs: () => void;
}) => {
  const { findParent, findType } = useUtils();

  return (
    <div
      className={
        "flex h-full bg-white transition-all duration-300 flex-col px-5 py-3 border-l-2 w-[40%]"
      }
    >
      <SidePanelHeader
        title="Documentation"
        handleCloseDocs={handleCloseDocs}
      />

      {field.info.dataType.type === DATA_TYPES.SINGLE_VALUE && (
        <SingleValueDocs
          option={findType(
            (field as FieldNode<SingleValueDataType>).info.dataType.fieldType
              .parent,
            (field as FieldNode<SingleValueDataType>).info.dataType.fieldType
              .type
          )}
          parent={findParent(
            (field as FieldNode<SingleValueDataType>).info.dataType.fieldType
              .parent
          )}
        />
      )}

      {field.info.dataType.type === DATA_TYPES.CUSTOM && <CustomFormDocs />}
    </div>
  );
};

export default SidePanel;
