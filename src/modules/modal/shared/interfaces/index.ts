import { ArrayValue, ProbabilityValue, RefWhere } from "@modules/datasets/interfaces/dataset-field"
import { FieldForm } from "@modules/modal/interfaces"
import { Argument } from "@modules/schemas/interfaces/argument"

export interface SelectFieldSchemaOptionProps {
  option: string
  parent: string
}

export interface UpdateArgumentsProps {
  name: string
  value: unknown
}

export interface UpdateRefProps {
  currentLocation: Array<string>
  currentfieldId: string
}

export interface UpdateCustomProps {
  code: string
}

export interface ChangeSequentialFieldProps {
  values: ArrayValue[]
  loop: boolean
}

export interface FieldActions {
  field: FieldForm
  handleChangeName(name: string): void
  handleChangeIsArray(v: boolean): void
  handleChangeMaxIsArray(v: number | null): void
  handleChangeMinIsArray(v: number | null): void
  handleChangePossibleNull(v: boolean): void
  handleChangePossibleNullValue(v: number): void
  handleChangeDataType(v: string): void
  handleSelectFieldSchema(v: string): void
  handleSelectFieldSchemaOption(p: SelectFieldSchemaOptionProps): void
  handleUpdateFieldSchemaArguments(p: UpdateArgumentsProps): void
  handleUpdateRefField(p: UpdateRefProps): void
  handleUpdateCustomField(p: UpdateCustomProps): void
  handleChangeIsKey(v: boolean): void
  handleChangeSequenceStep(v: number): void
  handleChangeSequenceStartsWith(v: number): void
  handleChangeRef(ref: string): void
  handleAddFieldSchemaArgument(argument: Argument): void
  handleDeleteFieldSchemaArgument(argument: string): void
  handleChangeSequentialValues(props: ChangeSequentialFieldProps): void
  handleChangeEnumValues(v: ArrayValue[]): void
  handleChangePickValues(values: ArrayValue[]): void
  handleChangePickCount(count: number): void
  handleChangeProbabilityValues(values: ProbabilityValue[]): void
  handleChangeRefUnique(value: boolean): void
  handleChangeRefWhere(value: RefWhere): void
}
