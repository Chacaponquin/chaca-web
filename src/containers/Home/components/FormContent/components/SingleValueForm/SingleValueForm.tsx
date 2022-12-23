import {
  DatasetField,
  SingleValueDataType,
} from "../../../../../../shared/interfaces/datasets.interface";

import SchemaSelect from "./components/SchemaSelect";
import OptionsContainer from "./components/OptionsContainer";
import { useHome } from "../../../../hooks/useHome";

const SingleValueForm = ({
  field,
}: {
  field: DatasetField<SingleValueDataType>;
}) => {
  const { findParent } = useHome();

  return (
    <div className="flex w-full h-full flex-col bg-white gap-3">
      <SchemaSelect field={field} />
      <OptionsContainer
        options={findParent(field.dataType.fieldType.parent).options}
        field={field}
      />
    </div>
  );
};

export default SingleValueForm;
