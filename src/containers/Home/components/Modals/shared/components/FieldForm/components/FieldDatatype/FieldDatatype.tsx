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
import { FormSection } from "@modules/modal/components"
import { FieldDatatype as IFieldDatatype } from "@modules/datasets/interfaces/dataset-field"

interface Props {
  label: string
  handleChangeDataType(i: string): void
  datatype: IFieldDatatype
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

  return (
    <FormSection vertical={true} labelText={label} className="mb-4">
      <ChacaSelect
        placeholder={PLACEHOLDER}
        options={DATA_TYPES_ARRAY.filter((d) => d.condition)}
        label={(o) => o.title}
        value={(o) => o.default.type === datatype.type}
        onChange={(v) => handleChangeDataType(v.id)}
        size="base"
      />

      {datatype.type === DATA_TYPES.CUSTOM && <CustomInfo />}
      {datatype.type === DATA_TYPES.ENUM && <EnumInfo />}
      {datatype.type === DATA_TYPES.MIXED && <MixedInfo />}
      {datatype.type === DATA_TYPES.PICK && <PickInfo />}
      {datatype.type === DATA_TYPES.PROBABILITY && <ProbabilityInfo />}
      {datatype.type === DATA_TYPES.REF && <RefInfo />}
      {datatype.type === DATA_TYPES.SEQUENCE && <SequenceInfo />}
      {datatype.type === DATA_TYPES.SEQUENTIAL && <SequentialInfo />}
      {datatype.type === DATA_TYPES.SINGLE_VALUE && <SchemaValueInfo />}
    </FormSection>
  )
}
