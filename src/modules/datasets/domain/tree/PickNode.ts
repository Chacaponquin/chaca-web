import { ExportPickDataType } from "@modules/datasets/dto/field"
import { Field } from "./Field"
import { PickDataType } from "@modules/datasets/interfaces/dataset-field"
import { ExportDatasetFieldDTO } from "@modules/datasets/dto/dataset"
import { DATA_TYPES } from "@modules/schemas/constants"
import { ValueMapper } from "./ValueMapper"

export class PickNode extends Field<PickDataType, ExportPickDataType> {
  stringInf(): string {
    return `pick`
  }

  public exportObject(): ExportDatasetFieldDTO<ExportPickDataType> {
    const mapper = new ValueMapper()

    return {
      name: this.name,
      dataType: {
        count: this.dataType.count,
        type: DATA_TYPES.PICK,
        values: this.dataType.values.map((v) => mapper.map(v)),
      },
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}
