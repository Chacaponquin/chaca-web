import { RefDataType } from "@modules/datasets/interfaces/dataset-field"
import { Field } from "./Field"
import { SearchProps } from "@modules/datasets/interfaces/tree"
import { DATA_TYPES } from "@modules/schemas/constants"
import { EmptyRefFieldError } from "@modules/datasets/errors"
import { ExportRefDataType } from "@modules/datasets/dto/field"
import { ExportDatasetFieldDTO } from "@modules/datasets/dto/dataset"

export class RefNode extends Field<RefDataType, ExportRefDataType> {
  stringInf(): string {
    return `ref`
  }

  exportObject({ searchRefField }: SearchProps): ExportDatasetFieldDTO<ExportRefDataType> {
    if (this.dataType.ref.length > 1) {
      const locationNames = searchRefField(this.dataType.ref)

      return {
        name: this.name,
        dataType: {
          type: DATA_TYPES.REF,
          ref: locationNames.join("."),
          unique: this.dataType.unique,
          where: this.dataType.where,
        },
        isArray: this.isArray,
        isKey: this.isKey,
        isPossibleNull: this.isPossibleNull,
      }
    } else {
      throw new EmptyRefFieldError()
    }
  }
}
