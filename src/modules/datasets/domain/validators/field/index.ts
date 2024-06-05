import { Validator } from "@modules/app/domain"
import { SequentialValuesValidator } from "./SequentialValuesValidator"
import { RefFieldValidator } from "./RefFieldValidator"
import { EnumValuesValidator } from "./EnumValuesValidator"
import { PickValuesValidator } from "./PickValuesValidator"
import { ProbabilityValuesValidator } from "./ProbabilityValuesValidator"
import { Dataset } from "../../dataset"
import { FieldDatatype } from "@modules/datasets/interfaces/dataset-field"
import { CustomFieldValidator } from "./CustomFieldValidator"
import { FieldNameValidator } from "./FieldNameValidator"
import { NoDuplicateLevelField } from "./NoDuplicateLevelField"

interface Props {
  name: string
  parentfieldId: string
  datasetId: string
  id: string | null
  dataType: FieldDatatype
  datasets: Dataset[]
}

export class FieldValidator extends Validator {
  constructor({ datasetId, parentfieldId, datasets, dataType, id, name }: Props) {
    super([
      new FieldNameValidator({ name: name }),
      new NoDuplicateLevelField({
        fieldId: id,
        datasetId: datasetId,
        datasets: datasets,
        name: name,
        parentId: parentfieldId,
      }),
      new CustomFieldValidator({ type: dataType }),
      new SequentialValuesValidator({ type: dataType }),
      new RefFieldValidator({ type: dataType }),
      new EnumValuesValidator({ type: dataType }),
      new PickValuesValidator({ type: dataType }),
      new ProbabilityValuesValidator({ type: dataType }),
    ])
  }
}
