import { ExportCustomDataType } from "@modules/datasets/dto/field"
import { Field } from "./Field"
import { CustomDataType } from "@modules/datasets/interfaces/dataset-field"
import { ExportDatasetFieldDTO } from "@modules/datasets/dto/dataset"

export class CustomNode extends Field<CustomDataType, ExportCustomDataType> {
  stringInf(): string {
    return `custom`
  }

  exportObject(): ExportDatasetFieldDTO<ExportCustomDataType> {
    return {
      name: this.name,
      dataType: this.dataType,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}
