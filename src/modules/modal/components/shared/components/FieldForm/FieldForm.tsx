import { useLanguage } from "@modules/app/modules/language/hooks"
import {
  ArrayConfig,
  FieldName,
  PossibleNullConfig,
  FieldDataType,
  DataTypeConfig,
  KeyConfig,
} from "./components"
import { FieldActions } from "../../interfaces/form.interfaces"
import { useDatasetServices } from "@modules/datasets/services"

type FieldFormProps = FieldActions & { datasetId: string }

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
  datasetId,
}: FieldFormProps) {
  const { FIELD_NAME_TEXT, DATA_TYPE_TEXT } = useLanguage({
    FIELD_NAME_TEXT: { en: "Field name", es: "Nombre del campo" },
    DATA_TYPE_TEXT: { en: "Data type", es: "Tipo" },
  })

  const { fieldCanBeKey, fieldCanBeArray, fieldCanBeNull } = useDatasetServices()
  const canBeArray = fieldCanBeArray(field)
  const canBeKey = fieldCanBeKey(field)
  const canBeNull = fieldCanBeNull(field)

  return (
    <div className="flex flex-col gap-y-3">
      <FieldName name={field.name} text={FIELD_NAME_TEXT} handleChangeName={handleChangeName} />

      <FieldDataType
        label={DATA_TYPE_TEXT}
        handleChangeDataType={handleChangeDataType}
        dataType={field.dataType.type}
      />

      <DataTypeConfig
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
      />

      <section className="flex flex-col gap-3">
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
