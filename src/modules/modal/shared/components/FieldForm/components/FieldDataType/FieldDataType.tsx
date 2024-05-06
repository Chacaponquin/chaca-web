import { ChacaSelect } from "@form/components"
import { useDatatypes } from "@modules/datasets/hooks"
import { DATA_TYPES } from "@modules/schemas/constants"
import { FormInputSection } from "../../../../shared/components"
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

interface Props {
  label: string
  handleChangeDataType(i: string): void
  dataType: DATA_TYPES
  fieldId: string
  datasetId: string
}

export default function FieldDataType({
  label,
  handleChangeDataType,
  dataType,
  datasetId,
  fieldId,
}: Props) {
  const { PLACEHOLDER } = useTranslation({ PLACEHOLDER: { en: "Datatype", es: "Tipo de dato" } })

  const { DATA_TYPES_ARRAY } = useDatatypes({ fieldId, datasetId })
  const found = DATA_TYPES_ARRAY.find((d) => d.default.type === dataType)

  return (
    <FormInputSection vertical={true} labelText={label}>
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
    </FormInputSection>
  )
}
