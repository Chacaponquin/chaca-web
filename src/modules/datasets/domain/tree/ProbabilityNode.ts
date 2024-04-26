import { ProbabilityDataType } from "@modules/datasets/interfaces/dataset-field"
import { Field } from "./Field"
import { ExportProbabilityDataType } from "@modules/datasets/dto/field"
import { ExportDatasetFieldDTO } from "@modules/datasets/dto/dataset"
import { DATA_TYPES } from "@modules/schemas/constants"
import { ValueMapper } from "./ValueMapper"

export class ProbabilityNode extends Field<ProbabilityDataType, ExportProbabilityDataType> {
  stringInf(): string {
    return `probability`
  }

  exportObject(): ExportDatasetFieldDTO<ExportProbabilityDataType> {
    const mapper = new ValueMapper()

    return {
      name: this.name,
      isArray: this.isArray,
      isPossibleNull: this.isPossibleNull,
      isKey: this.isKey,
      dataType: {
        type: DATA_TYPES.PROBABILITY,
        values: this.dataType.values.map((v) => {
          return { chance: mapper.map(v.chance), value: mapper.map(v.value) }
        }),
      },
    }
  }
}
