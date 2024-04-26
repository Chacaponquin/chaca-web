import { SequentialDataType } from "@modules/datasets/interfaces/dataset-field"
import { Field } from "./Field"
import { EmptySequentialFieldError } from "@modules/datasets/errors"
import { SearchProps } from "@modules/datasets/interfaces/tree"
import { ExportDatasetFieldDTO } from "@modules/datasets/dto/dataset"
import { ExportSequentialDataType } from "@modules/datasets/dto/field"
import { ValueMapper } from "./ValueMapper"

export class SequentialNode extends Field<SequentialDataType, ExportSequentialDataType> {
  stringInf(): string {
    return `sequential`
  }

  exportObject(props: SearchProps): ExportDatasetFieldDTO<ExportSequentialDataType> {
    if (this.dataType.values.length === 0) {
      throw new EmptySequentialFieldError(this.getRouteString(props.fieldRoute))
    }

    const mapper = new ValueMapper()

    return {
      name: this.name,
      dataType: {
        ...this.dataType,
        values: this.dataType.values.map((v) => mapper.map(v)),
      },
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}
