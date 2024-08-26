import { useTranslation } from "@modules/app/modules/language/hooks"
import {
  ArrayConfig,
  FieldName,
  PossibleNullConfig,
  FieldDatatype,
  DatatypeConfig,
  KeyConfig,
} from "./components"
import { Field } from "@modules/datasets/domain/core"
import { FieldActions } from "../../domain/field"

type Props = FieldActions & { datasetId: string }

export default function FieldForm({
  field,
  datasetId,
  handleChangeIsArray,
  handleChangeMaxIsArray,
  handleChangeMinIsArray,
  handleChangeName,
  handleChangePossibleNull,
  handleChangePossibleNullValue,
  handleChangeDatatype,
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
  handleChangePickValues,
  handleChangePickCount,
  handleChangeProbabilityValues,
  handleChangeRefUnique,
  handleChangeRefWhere,
}: Props) {
  const { FIELD_NAME_TEXT, DATA_TYPE_TEXT } = useTranslation({
    FIELD_NAME_TEXT: { en: "Fieldname", es: "Nombre del campo" },
    DATA_TYPE_TEXT: { en: "Datatype", es: "Tipo" },
  })

  const { canBeArray, canBeKey, canBeNull } = Field.possibleConfig({
    type: field.datatype.type,
    isKey: field.isKey,
  })

  return (
    <div className="flex flex-col">
      <FieldName name={field.name} text={FIELD_NAME_TEXT} handleChangeName={handleChangeName} />

      <FieldDatatype
        label={DATA_TYPE_TEXT}
        handleChangeDatatype={handleChangeDatatype}
        datatype={field.datatype}
        fieldId={field.id}
        datasetId={datasetId}
      />

      <DatatypeConfig
        id={field.id}
        datasetId={datasetId}
        handleSelectFieldSchema={handleSelectFieldSchema}
        handleSelectFieldSchemaOption={handleSelectFieldSchemaOption}
        datatype={field.datatype}
        handleUpdateCustomField={handleUpdateCustomField}
        handleUpdateFieldSchemaArguments={handleUpdateFieldSchemaArguments}
        handleChangeSequentialValues={handleChangeSequentialValues}
        handleChangeEnumValues={handleChangeEnumValues}
        handleChangeSequenceStartsWith={handleChangeSequenceStartsWith}
        handleChangeSequenceStep={handleChangeSequenceStep}
        handleChangeRefField={handleChangeRef}
        handleAddFieldSchemaArgument={handleAddFieldSchemaArgument}
        handleDeleteFieldSchemaArgument={handleDeleteFieldSchemaArgument}
        handleChangePickValues={handleChangePickValues}
        handleChangePickCount={handleChangePickCount}
        handleChangeProbabilityValues={handleChangeProbabilityValues}
        handleChangeRefUnique={handleChangeRefUnique}
        handleChangeRefWhere={handleChangeRefWhere}
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
