import { DATA_TYPES } from "@modules/schemas/constants"
import {
  CustomConfig,
  EnumConfig,
  PickConfig,
  ProbabilityConfig,
  RefConfig,
  SchemaValueConfig,
  SequenceConfig,
  SequentialConfig,
} from "./components"
import {
  ArrayValue,
  FieldDatatype,
  ProbabilityValue,
  RefWhere,
} from "@modules/datasets/interfaces/dataset-field"
import {
  ChangeSequentialFieldProps,
  SelectFieldSchemaOptionProps,
  UpdateArgumentsProps,
  UpdateCustomProps,
} from "@modules/modal/shared/interfaces"
import { Argument } from "@modules/schemas/domain/argument"

interface Props {
  id: string
  datasetId: string
  dataType: FieldDatatype
  handleSelectFieldSchema(v: string): void
  handleSelectFieldSchemaOption(p: SelectFieldSchemaOptionProps): void
  handleUpdateCustomField(p: UpdateCustomProps): void
  handleUpdateFieldSchemaArguments(p: UpdateArgumentsProps): void
  handleChangeSequentialValues(props: ChangeSequentialFieldProps): void
  handleChangeEnumValues(v: ArrayValue[]): void
  handleChangeSequenceStartsWith(v: number): void
  handleChangeSequenceStep(v: number): void
  handleChangeRefField(r: string): void
  handleAddFieldSchemaArgument(argument: Argument): void
  handleDeleteFieldSchemaArgument(argument: string): void
  handleChangePickValues(values: ArrayValue[]): void
  handleChangePickCount(c: number): void
  handleChangeProbabilityValues(values: ProbabilityValue[]): void
  handleChangeRefUnique(value: boolean): void
  handleChangeRefWhere(value: RefWhere): void
}

export default function DataTypeConfig({
  id,
  datasetId,
  dataType,
  handleSelectFieldSchema,
  handleSelectFieldSchemaOption,
  handleUpdateCustomField,
  handleUpdateFieldSchemaArguments,
  handleChangeSequentialValues,
  handleChangeEnumValues,
  handleChangeSequenceStartsWith,
  handleChangeSequenceStep,
  handleChangeRefField,
  handleAddFieldSchemaArgument,
  handleDeleteFieldSchemaArgument,
  handleChangePickValues,
  handleChangePickCount,
  handleChangeProbabilityValues,
  handleChangeRefUnique,
  handleChangeRefWhere,
}: Props) {
  return (
    <section className="">
      {dataType.type === DATA_TYPES.ENUM && (
        <EnumConfig values={dataType.values} handleChangeEnumValues={handleChangeEnumValues} />
      )}

      {dataType.type === DATA_TYPES.CUSTOM && (
        <CustomConfig code={dataType.code} handleUpdateCustomField={handleUpdateCustomField} />
      )}

      {dataType.type === DATA_TYPES.REF && (
        <RefConfig
          refField={dataType.ref}
          datasetId={datasetId}
          unique={dataType.unique}
          where={dataType.where}
          handleChangeRefField={handleChangeRefField}
          id={id}
          handleChangeRefUnique={handleChangeRefUnique}
          handleChangeRefWhere={handleChangeRefWhere}
        />
      )}

      {dataType.type === DATA_TYPES.SEQUENCE && (
        <SequenceConfig
          startsWith={dataType.startsWith}
          step={dataType.step}
          handleChangeSequenceStartsWith={handleChangeSequenceStartsWith}
          handleChangeSequenceStep={handleChangeSequenceStep}
        />
      )}

      {dataType.type === DATA_TYPES.SEQUENTIAL && (
        <SequentialConfig
          handleChangeSequentialValues={handleChangeSequentialValues}
          values={dataType.values}
          loop={dataType.loop}
        />
      )}

      {dataType.type === DATA_TYPES.SINGLE_VALUE && (
        <SchemaValueConfig
          args={dataType.args}
          option={dataType.option}
          schema={dataType.schema}
          handleSelectFieldSchema={handleSelectFieldSchema}
          handleSelectFieldSchemaOption={handleSelectFieldSchemaOption}
          handleUpdateFieldSchemaArguments={handleUpdateFieldSchemaArguments}
          handleAddFieldSchemaArgument={handleAddFieldSchemaArgument}
          handleDeleteFieldSchemaArgument={handleDeleteFieldSchemaArgument}
        />
      )}

      {dataType.type === DATA_TYPES.PROBABILITY && (
        <ProbabilityConfig
          values={dataType.values}
          handleChangeProbabilityValues={handleChangeProbabilityValues}
        />
      )}

      {dataType.type === DATA_TYPES.PICK && (
        <PickConfig
          count={dataType.count}
          handleChangePickValues={handleChangePickValues}
          values={dataType.values}
          handleChangePickCount={handleChangePickCount}
        />
      )}
    </section>
  )
}
