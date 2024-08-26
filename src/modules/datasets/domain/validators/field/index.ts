import { Validator } from "@modules/app/domain"
import { SequentialValuesValidator } from "./SequentialValuesValidator"
import { RefFieldValidator } from "./RefFieldValidator"
import { EnumValuesValidator } from "./EnumValuesValidator"
import { PickValuesValidator } from "./PickValuesValidator"
import { ProbabilityValuesValidator } from "./ProbabilityValuesValidator"
import { Dataset } from "../../core"
import { FieldDatatype } from "@modules/datasets/domain/core/datatype"
import { CustomFieldValidator } from "./CustomFieldValidator"
import { FieldNameValidator } from "./FieldNameValidator"
import { NoDuplicateLevelField } from "./NoDuplicateLevelField"

interface Props {
  name: string
  parentfieldId: string
  datasetId: string
  id: string | null
  datatype: FieldDatatype
  datasets: Dataset[]
}

export class FieldValidator extends Validator {
  constructor({ datasetId, parentfieldId, datasets, datatype, id, name }: Props) {
    super([
      new FieldNameValidator({ name: name }),
      new NoDuplicateLevelField({
        fieldId: id,
        datasetId: datasetId,
        datasets: datasets,
        name: name,
        parentId: parentfieldId,
      }),
      new CustomFieldValidator({ type: datatype }),
      new SequentialValuesValidator({ type: datatype }),
      new RefFieldValidator({ type: datatype }),
      new EnumValuesValidator({ type: datatype }),
      new PickValuesValidator({ type: datatype }),
      new ProbabilityValuesValidator({ type: datatype }),
    ])
  }
}
