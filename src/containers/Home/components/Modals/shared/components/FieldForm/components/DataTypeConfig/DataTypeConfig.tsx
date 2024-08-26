import { DATA_TYPES } from "@modules/schemas/domain/constants"
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
} from "@modules/datasets/domain/core/datatype"
import {
  ChangeSequentialFieldProps,
  UpdateArgumentsProps,
  UpdateCustomProps,
} from "@containers/Home/components/Modals/shared/domain/field"
import { Argument } from "@modules/schemas/domain/core/argument"
import { Schema, SchemaOption } from "@modules/schemas/domain/core/schema"

interface Props {
  id: string
  datasetId: string
  datatype: FieldDatatype
  handleSelectFieldSchema(v: Schema): void
  handleSelectFieldSchemaOption(p: SchemaOption): void
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

export default function DatatypeConfig({
  id,
  datasetId,
  datatype,
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
      {datatype.type === DATA_TYPES.ENUM && (
        <EnumConfig values={datatype.values} handleChangeEnumValues={handleChangeEnumValues} />
      )}

      {datatype.type === DATA_TYPES.CUSTOM && (
        <CustomConfig code={datatype.code} handleUpdateCustomField={handleUpdateCustomField} />
      )}

      {datatype.type === DATA_TYPES.REF && (
        <RefConfig
          refField={datatype.ref}
          datasetId={datasetId}
          unique={datatype.unique}
          where={datatype.where}
          handleChangeRefField={handleChangeRefField}
          id={id}
          handleChangeRefUnique={handleChangeRefUnique}
          handleChangeRefWhere={handleChangeRefWhere}
        />
      )}

      {datatype.type === DATA_TYPES.SEQUENCE && (
        <SequenceConfig
          startsWith={datatype.startsWith}
          step={datatype.step}
          handleChangeSequenceStartsWith={handleChangeSequenceStartsWith}
          handleChangeSequenceStep={handleChangeSequenceStep}
        />
      )}

      {datatype.type === DATA_TYPES.SEQUENTIAL && (
        <SequentialConfig
          handleChangeSequentialValues={handleChangeSequentialValues}
          values={datatype.values}
          loop={datatype.loop}
        />
      )}

      {datatype.type === DATA_TYPES.SINGLE_VALUE && (
        <SchemaValueConfig
          args={datatype.args}
          option={datatype.option}
          schema={datatype.schema}
          handleSelectFieldSchema={handleSelectFieldSchema}
          handleSelectFieldSchemaOption={handleSelectFieldSchemaOption}
          handleUpdateFieldSchemaArguments={handleUpdateFieldSchemaArguments}
          handleAddFieldSchemaArgument={handleAddFieldSchemaArgument}
          handleDeleteFieldSchemaArgument={handleDeleteFieldSchemaArgument}
        />
      )}

      {datatype.type === DATA_TYPES.PROBABILITY && (
        <ProbabilityConfig
          values={datatype.values}
          handleChangeProbabilityValues={handleChangeProbabilityValues}
        />
      )}

      {datatype.type === DATA_TYPES.PICK && (
        <PickConfig
          count={datatype.count}
          handleChangePickValues={handleChangePickValues}
          values={datatype.values}
          handleChangePickCount={handleChangePickCount}
        />
      )}
    </section>
  )
}
