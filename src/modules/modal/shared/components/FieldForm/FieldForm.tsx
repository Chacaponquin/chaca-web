import { useTranslation } from "@modules/app/modules/language/hooks"
import {
  ArrayConfig,
  FieldName,
  PossibleNullConfig,
  FieldDataType,
  DataTypeConfig,
  KeyConfig,
} from "./components"
import { FieldActions } from "../../interfaces"
import { Field } from "@modules/datasets/domain/tree"

type Props = FieldActions & { datasetId: string }

export default function FieldForm({
  field,
  handleChangeIsArray,
  handleChangeMaxIsArray,
  handleChangeMinIsArray,
  handleChangeName,
  handleChangePossibleNull,
  handleChangePossibleNullValue,
  handleChangeDataType,
  handleSelectFieldSchema,
  handleSelectFieldSchemaOption,
  handleUpdateCustomField,
  handleUpdateFieldSchemaArguments,
  handleChangeIsKey,
  handleChangeSequentialValues,
  handleChangeEnumValues,
  handleChangeSequenceStartsWith,
  handleChangeSequenceStep,
  handleChangeRef,
  handleAddFieldSchemaArgument,
  handleDeleteFieldSchemaArgument,
  datasetId,
}: Props) {
  const { FIELD_NAME_TEXT, DATA_TYPE_TEXT } = useTranslation({
    FIELD_NAME_TEXT: { en: "Field name", es: "Nombre del campo" },
    DATA_TYPE_TEXT: { en: "Data type", es: "Tipo" },
  })

  const { canBeArray, canBeKey, canBeNull } = Field.possibleConfig({
    type: field.dataType.type,
    isKey: field.isKey,
  })

  return (
    <div className="flex flex-col gap-y-3">
      <FieldName name={field.name} text={FIELD_NAME_TEXT} handleChangeName={handleChangeName} />

      <FieldDataType
        label={DATA_TYPE_TEXT}
        handleChangeDataType={handleChangeDataType}
        dataType={field.dataType.type}
        fieldId={field.id}
        datasetId={datasetId}
      />

      <DataTypeConfig
        id={field.id}
        datasetId={datasetId}
        handleSelectFieldSchema={handleSelectFieldSchema}
        handleSelectFieldSchemaOption={handleSelectFieldSchemaOption}
        dataType={field.dataType}
        handleUpdateCustomField={handleUpdateCustomField}
        handleUpdateFieldSchemaArguments={handleUpdateFieldSchemaArguments}
        handleChangeSequentialValues={handleChangeSequentialValues}
        handleChangeEnumValues={handleChangeEnumValues}
        handleChangeSequenceStartsWith={handleChangeSequenceStartsWith}
        handleChangeSequenceStep={handleChangeSequenceStep}
        handleChangeRefField={handleChangeRef}
        handleAddFieldSchemaArgument={handleAddFieldSchemaArgument}
        handleDeleteFieldSchemaArgument={handleDeleteFieldSchemaArgument}
      />

      <section className="flex flex-col gap-3 mt-1">
        {canBeArray && (
          <ArrayConfig
            isArray={field.isArray}
            handleChangeIsArray={handleChangeIsArray}
            handleChangeMaxIsArray={handleChangeMaxIsArray}
            handleChangeMinIsArray={handleChangeMinIsArray}
          />
        )}

        {canBeNull && (
          <PossibleNullConfig
            handleChangePossibleNull={handleChangePossibleNull}
            handleChangePossibleNullValue={handleChangePossibleNullValue}
            valueNull={field.isPossibleNull}
          />
        )}

        {canBeKey && <KeyConfig handleChangeIsKey={handleChangeIsKey} isKey={field.isKey} />}
      </section>
    </div>
  )
}
