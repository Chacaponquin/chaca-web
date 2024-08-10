import { ChacaSelect } from "@form/components"
import { useDatatypes } from "@modules/datasets/hooks"
import { DATA_TYPES } from "@modules/schemas/constants"
import { useTranslation } from "@modules/app/modules/language/hooks"
import {
  CustomInfo,
  EnumInfo,
  MixedInfo,
  PickInfo,
  ProbabilityInfo,
  RefInfo,
  SchemaValueInfo,
  SequenceInfo,
  SequentialInfo,
} from "@modules/datasets/components"
import { Fragment } from "react"
import { FormSection } from "@modules/modal/components"

interface Props {
  label: string
  handleChangeDataType(i: string): void
  datatype: DATA_TYPES
  fieldId: string
  datasetId: string
}

export default function FieldDatatype({
  label,
  handleChangeDataType,
  datatype,
  datasetId,
  fieldId,
}: Props) {
  const { PLACEHOLDER } = useTranslation({ PLACEHOLDER: { en: "Datatype", es: "Tipo de dato" } })

  const { DATA_TYPES_ARRAY } = useDatatypes({ fieldId, datasetId })
  const found = DATA_TYPES_ARRAY.find((d) => d.default.type === datatype)

  return (
    <FormSection vertical={true} labelText={label} className="mb-4">
      {found && (
        <ChacaSelect
          placeholder={PLACEHOLDER}
          options={DATA_TYPES_ARRAY.filter((d) => d.condition)}
          labelKey="title"
          valueKey="id"
          value={found.id}
          size="base"
          onChange={(v) => handleChangeDataType(v as string)}
        />
      )}

      {found && (
        <Fragment>
          {found.default.type === DATA_TYPES.CUSTOM && <CustomInfo />}
          {found.default.type === DATA_TYPES.ENUM && <EnumInfo />}
          {found.default.type === DATA_TYPES.MIXED && <MixedInfo />}
          {found.default.type === DATA_TYPES.PICK && <PickInfo />}
          {found.default.type === DATA_TYPES.PROBABILITY && <ProbabilityInfo />}
          {found.default.type === DATA_TYPES.REF && <RefInfo />}
          {found.default.type === DATA_TYPES.SEQUENCE && <SequenceInfo />}
          {found.default.type === DATA_TYPES.SEQUENTIAL && <SequentialInfo />}
          {found.default.type === DATA_TYPES.SINGLE_VALUE && <SchemaValueInfo />}
        </Fragment>
      )}
    </FormSection>
  )
}
