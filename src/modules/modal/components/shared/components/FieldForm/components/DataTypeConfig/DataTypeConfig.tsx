import { DATA_TYPES } from "@modules/schemas/constants"
import {
  CustomConfig,
  EnumConfig,
  RefConfig,
  SchemaValueConfig,
  SequenceConfig,
  SequentialConfig,
} from "./components"
import { FieldDataType } from "@modules/datasets/interfaces/dataset_field.interface"
import {
  SelectFieldSchemaOptionProps,
  UpdateArgumentsProps,
  UpdateCustomProps,
} from "@modules/modal/components/shared/interfaces/form.interfaces"

interface Props {
  datasetId: string
  dataType: FieldDataType
  handleSelectFieldSchema: (v: string) => void
  handleSelectFieldSchemaOption: (p: SelectFieldSchemaOptionProps) => void
  handleUpdateCustomField: (p: UpdateCustomProps) => void
  handleUpdateFieldSchemaArguments: (p: UpdateArgumentsProps) => void
  handleChangeSequentialValues: (v: string) => void
  handleChangeEnumValues: (v: string) => void
  handleChangeSequenceStartsWith: (v: number) => void
  handleChangeSequenceStep: (v: number) => void
  handleChangeRefField: (r: string) => void
  id: string
}

export default function DataTypeConfig({
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
  id,
}: Props) {
  return (
    <section>
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
          handleChangeRefField={handleChangeRefField}
          id={id}
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
        />
      )}
      {dataType.type === DATA_TYPES.SINGLE_VALUE && (
        <SchemaValueConfig
          fieldType={dataType.fieldType}
          handleSelectFieldSchema={handleSelectFieldSchema}
          handleSelectFieldSchemaOption={handleSelectFieldSchemaOption}
          handleUpdateFieldSchemaArguments={handleUpdateFieldSchemaArguments}
        />
      )}
    </section>
  )
}
