import { DATA_TYPES } from "@modules/schemas/constants"
import { Field } from "./Field"
import { NodesUtils } from "./NodesUtils"
import { SearchProps } from "@modules/datasets/interfaces/tree"
import { ExportMixedDataType } from "@modules/datasets/dto/field"
import { MixedDataType } from "@modules/datasets/interfaces/dataset-field"
import { ExportDatasetFieldDTO } from "@modules/datasets/dto/dataset"

export class MixedNode extends Field<MixedDataType, ExportMixedDataType> {
  readonly utils = new NodesUtils(this)

  stringInf(): string {
    return `mixed`
  }

  exportObject(props: SearchProps): ExportDatasetFieldDTO<ExportMixedDataType> {
    return {
      name: this.name,
      dataType: {
        type: DATA_TYPES.MIXED,
        object: this.utils.exportFields(props),
      },
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}
