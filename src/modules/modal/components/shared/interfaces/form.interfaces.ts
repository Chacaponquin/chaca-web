import { FieldForm } from "@modules/datasets/dto/field"

export interface SelectFieldSchemaOptionProps {
  optionName: string
  parent: string
}

export interface UpdateArgumentsProps {
  argumentName: string
  value: unknown
}

export interface UpdateRefProps {
  currentLocation: Array<string>
  currentFieldID: string
}

export interface UpdateCustomProps {
  code: string
}

export interface FieldActions {
  field: FieldForm
  handleChangeName(name: string): void
  handleChangeIsArray(v: boolean): void
  handleChangeMaxIsArray(v: number | null): void
  handleChangeMinIsArray(v: number | null): void
  handleChangePossibleNull(v: boolean): void
  handleChangePossibleNullValue(v: number): void
  handleChangeDataType(v: number): void
  handleSelectFieldSchema(v: string): void
  handleSelectFieldSchemaOption(p: SelectFieldSchemaOptionProps): void
  handleUpdateFieldSchemaArguments(p: UpdateArgumentsProps): void
  handleUpdateRefField(p: UpdateRefProps): void
  handleUpdateCustomField(p: UpdateCustomProps): void
  handleChangeIsKey(v: boolean): void
  handleChangeSequentialValues(v: string): void
  handleChangeEnumValues(v: string): void
  handleChangeSequenceStep(v: number): void
  handleChangeSequenceStartsWith(v: number): void
  handleChangeRef: (ref: string) => void
}
