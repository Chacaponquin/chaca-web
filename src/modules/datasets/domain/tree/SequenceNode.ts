import { ExportDatasetFieldDTO } from "@modules/datasets/dto/dataset"
import { SequenceDataType } from "@modules/datasets/interfaces/dataset-field"
import { Field } from "./Field"
import { ExportSequenceDataType } from "@modules/datasets/dto/field"

export class SequenceNode extends Field<SequenceDataType, ExportSequenceDataType> {
  stringInf(): string {
    return `sequence`
  }

  exportObject(): ExportDatasetFieldDTO<ExportSequenceDataType> {
    return {
      name: this.name,
      dataType: this.dataType,
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}
