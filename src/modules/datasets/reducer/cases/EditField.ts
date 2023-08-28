import { Dataset } from "@modules/datasets/domain/tree"
import { DatasetUseCase } from "./DatasetUseCase"
import { FieldForm } from "@modules/datasets/dto/field"
import { FieldName } from "@modules/datasets/value-object"

interface ExecuteProps {
  datasetId: string
  form: FieldForm
}

export class EditField extends DatasetUseCase<ExecuteProps> {
  execute({ datasetId, form }: ExecuteProps): Array<Dataset> {
    const newDatasets = this.datasets.map((d) => {
      if (d.id === datasetId) {
        const findField = d.findFieldByID(form.id)

        if (findField) {
          findField.setName(new FieldName(form.name))
          findField.setIsArray(form.isArray)
          findField.setIsPossibleNull(form.isPosibleNull)
        }
      }

      return d
    })

    return newDatasets
  }
}
