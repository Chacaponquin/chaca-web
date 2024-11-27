import { Validator } from "@modules/app/domain/validator"
import { Schema } from "../../core"
import { DatasetNameValidator } from "./name-validator"
import { NoDuplicateSchema } from "./no-duplicate"

interface Props {
  dataset: Schema[]
  name: string
  schemaId: string
}

export class SchemaValidator extends Validator {
  constructor({ schemaId, dataset, name }: Props) {
    super([
      new DatasetNameValidator({ name: name }),
      new NoDuplicateSchema({ dataset: dataset, name: name, id: schemaId }),
    ])
  }
}
