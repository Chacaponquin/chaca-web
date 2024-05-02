import { Validator } from "@modules/app/domain"
import { FieldNameValidator } from "./FieldNameValidator"
import { NoDuplicateLevelField } from "./NoDuplicateLevelField"
import { SequentialValuesValidator } from "./SequentialValuesValidator"
import { RefFieldValidator } from "./RefFieldValidator"
import { EnumValuesValidator } from "./EnumValuesValidator"
import { PickValuesValidator } from "./PickValuesValidator"
import { ProbabilityValuesValidator } from "./ProbabilityValuesValidator"
import { Dataset } from "../tree"
import { FieldDataType } from "@modules/datasets/interfaces/dataset-field"
import { CustomFieldValidator } from "./CustomFieldValidator"

interface Props {
  name: string
  parentfieldId: string
  datasetId: string
  id: string | null
  dataType: FieldDataType
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
