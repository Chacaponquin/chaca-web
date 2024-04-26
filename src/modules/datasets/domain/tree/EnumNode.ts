import { EnumDataType } from "@modules/datasets/interfaces/dataset-field"
import { Field } from "./Field"
import { SearchProps } from "@modules/datasets/interfaces/tree"
import { EmptyEnumFieldError } from "@modules/datasets/errors"
import { ExportEnumDataType } from "@modules/datasets/dto/field"
import { ExportDatasetFieldDTO } from "@modules/datasets/dto/dataset"
import { ValueMapper } from "./ValueMapper"

export class EnumNode extends Field<EnumDataType, ExportEnumDataType> {
  stringInf(): string {
    return `enum`
  }

  exportObject(props: SearchProps): ExportDatasetFieldDTO<ExportEnumDataType> {
    if (this.dataType.values.length === 0) {
      throw new EmptyEnumFieldError(this.getRouteString(props.fieldRoute))
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
