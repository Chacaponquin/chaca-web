import { DatasetUseCase } from "./base-use-case"
import { DATA_TYPES } from "@modules/modules/domain/constants"
import { DeleteReceiveRef } from "./delete-receive-ref"
import { FieldProps } from "@modules/dataset/domain/core/field-props"
import { Schema } from "@modules/dataset/domain/core/schema"
import { RefNode } from "@modules/dataset/domain/core/field"

interface ExecuteProps {
  schemaId: string
  form: FieldProps
  next(dataset: Schema[]): void
}

export class EditField extends DatasetUseCase<ExecuteProps> {
  constructor(dataset: Schema[], private readonly deleteRefs: DeleteReceiveRef) {
    super(dataset)
  }

  execute({ schemaId, form, next }: ExecuteProps): Schema[] {
    const result = [] as Schema[]

    for (const dataset of this.dataset) {
      if (dataset.id === schemaId) {
        const found = dataset.findFieldById(form.id)

        if (found) {
          if (found instanceof RefNode && form.datatype.type !== DATA_TYPES.REF) {
            this.deleteRefs.execute({ dataset: this.dataset, id: found.id })
          }

          dataset.findNodeByIdAndEdit(form)
        }
      }

      result.push(dataset)
    }

    next(result)

    return result
  }
}
