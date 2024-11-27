import { Validator } from "@modules/app/domain/validator1"
import { SequentialValuesValidator } from "./SequentialValuesValidator"
import { RefFieldValidator } from "./RefFieldValidator"
import { EnumValuesValidator } from "./EnumValuesValidator"
import { PickValuesValidator } from "./PickValuesValidator"
import { ProbabilityValuesValidator } from "./ProbabilityValuesValidator"
import { Schema } from "../../core"
import { FieldDatatype } from "@modules/dataset/domain/core/datatype"
import { CustomFieldValidator } from "./CustomFieldValidator"
import { FieldNameValidator } from "./FieldNameValidator"
import { NoDuplicateLevelField } from "./NoDuplicateLevelField"

interface Props {
  name: string
  parentfieldId: string
  schemaId: string
  id: string | null
  datatype: FieldDatatype
  dataset: Schema[]
}

export class FieldValidator extends Validator {
  constructor({ schemaId, parentfieldId, dataset, datatype, id, name }: Props) {
    super([
      new FieldNameValidator({ name: name }),
      new NoDuplicateLevelField({
        fieldId: id,
        schemaId: schemaId,
        dataset: dataset,
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
