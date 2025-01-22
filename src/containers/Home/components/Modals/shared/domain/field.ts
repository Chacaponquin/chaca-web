import { FieldForm } from "@modules/dataset/domain/form"
import { ArrayValue, ProbabilityValue, RefWhere } from "@modules/dataset/domain/core/datatype"
import { Argument } from "@modules/modules/domain/core/module-argument"
import { Module } from "@modules/modules/domain/core/module"
import { ModuleSection } from "@modules/modules/domain/core/module-section"

export interface UpdateArgumentsProps {
  name: string
  value: unknown
}

export interface UpdateRefProps {
  currentLocation: string[]
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
  handleChangeDatatype(v: string): void
  handleSelectModuleSection(v: ModuleSection): void
  handleSelectModule(p: Module): void
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
