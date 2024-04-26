import { DATA_TYPES } from "@modules/schemas/constants"
import { Field } from "./Field"
import { SingleValueDataType } from "@modules/datasets/interfaces/dataset-field"
import { SearchProps } from "@modules/datasets/interfaces/tree"
import { ExportSingleValueDataType } from "@modules/datasets/dto/field"
import { ExportDatasetFieldDTO } from "@modules/datasets/dto/dataset"

export class SchemaValueNode extends Field<SingleValueDataType, ExportSingleValueDataType> {
  stringInf({ findOption, findParent }: SearchProps): string {
    const schema = this.dataType.fieldType.schema
    const option = this.dataType.fieldType.option

    const module = findParent(schema)
    const moduleOption = findOption(schema, option)

    return `${module.showName}.${moduleOption.showName}`
  }

  exportObject({
    findOption,
    findParent,
  }: SearchProps): ExportDatasetFieldDTO<ExportSingleValueDataType> {
    const schemaId = this.dataType.fieldType.schema
    const optionId = this.dataType.fieldType.option

    const module = findParent(schemaId)
    const option = findOption(schemaId, optionId)

    return {
      name: this.name,
      dataType: {
        type: DATA_TYPES.SINGLE_VALUE,
        fieldType: {
          args: this.dataType.fieldType.args,
          option: option.name,
          schema: module.name,
        },
      },
      isArray: this.isArray,
      isKey: this.isKey,
      isPossibleNull: this.isPossibleNull,
    }
  }
}
