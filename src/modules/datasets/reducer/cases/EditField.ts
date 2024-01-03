import { Dataset } from "@modules/datasets/domain/tree"
import { DatasetUseCase } from "./DatasetUseCase"
import { FieldProps } from "@modules/datasets/dto/field"

interface ExecuteProps {
  datasetId: string
  form: FieldProps
  next(datasets: Array<Dataset>): void
}

export class EditField extends DatasetUseCase<ExecuteProps> {
  execute({ datasetId, form, next }: ExecuteProps): Array<Dataset> {
    const newDatasets = this.datasets.map((d) => {
      if (d.id === datasetId) {
        const findField = d.findFieldById(form.id)

        if (findField) {
          findField.setName(form.name)
          findField.setIsArray(form.isArray)
          findField.setIsPossibleNull(form.isPossibleNull)
          findField.setIsKey(form.isKey)
          findField.setDatatype(form.dataType)
        }
      }

      return d
    })

    next(newDatasets)

    return newDatasets
  }
}
