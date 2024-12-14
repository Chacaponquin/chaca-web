import { ChacaSelect } from "@form/components"
import { useDatatypes } from "@modules/dataset/hooks"
import { DATA_TYPES } from "@modules/modules/domain/constants"
import { useTranslation } from "@modules/app/modules/language/hooks"
import {
  CustomInfo,
  EnumInfo,
  MixedInfo,
  PickInfo,
  ProbabilityInfo,
  RefInfo,
  ModuleValueInfo,
  SequenceInfo,
  SequentialInfo,
} from "@modules/dataset/components"
import { FieldDatatype as IFieldDatatype } from "@modules/dataset/domain/core/datatype"
import { FormSection } from "../../../../shared/components"

interface Props {
  label: string
  handleChangeDatatype(i: string): void
  datatype: IFieldDatatype
  fieldId: string
  schemaId: string
}

export default function FieldDatatype({
  label,
  handleChangeDatatype,
  datatype,
  schemaId,
  fieldId,
}: Props) {
  const { PLACEHOLDER } = useTranslation({ PLACEHOLDER: { en: "Datatype", es: "Tipo de dato" } })
  const { DATA_TYPES_ARRAY } = useDatatypes({ fieldId, schemaId })

  return (
    <FormSection vertical={true} labelText={label} className="mb-4">
      <ChacaSelect
        placeholder={PLACEHOLDER}
        options={DATA_TYPES_ARRAY.filter((d) => d.condition)}
        label={(o) => o.title}
        value={(o) => o.default.type === datatype.type}
        onChange={(v) => handleChangeDatatype(v.id)}
        size="base"
        id="field-type-select"
      />

      {datatype.type === DATA_TYPES.CUSTOM && <CustomInfo />}
      {datatype.type === DATA_TYPES.ENUM && <EnumInfo />}
      {datatype.type === DATA_TYPES.MIXED && <MixedInfo />}
      {datatype.type === DATA_TYPES.PICK && <PickInfo />}
      {datatype.type === DATA_TYPES.PROBABILITY && <ProbabilityInfo />}
      {datatype.type === DATA_TYPES.REF && <RefInfo />}
      {datatype.type === DATA_TYPES.SEQUENCE && <SequenceInfo />}
      {datatype.type === DATA_TYPES.SEQUENTIAL && <SequentialInfo />}
      {datatype.type === DATA_TYPES.MODULE_VALUE && <ModuleValueInfo />}
    </FormSection>
  )
}
