import { ChacaIconButton, ChacaSelect } from "@form/components"
import { Edit } from "@modules/app/modules/icon/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { useDatasets } from "@modules/datasets/hooks"
import { RefWhere } from "@modules/datasets/interfaces/dataset-field"
import { useCode } from "@modules/modal/hooks"
import { CheckField, FormInputSection } from "@modules/modal/shared/shared/components"
import { useId } from "react"

interface RefConfigProps {
  refField: string[]
  datasetId: string
  unique: boolean
  where: RefWhere
  handleChangeRefField(r: string): void
  id: string
  handleChangeRefUnique(value: boolean): void
  handleChangeRefWhere(value: RefWhere): void
}

export default function RefConfig({
  refField,
  datasetId,
  handleChangeRefField,
  id,
  handleChangeRefUnique,
  handleChangeRefWhere,
  unique,
  where,
}: RefConfigProps) {
  const fieldRefId = useId()

  const { searchPossibleFieldsToRef } = useDatasets()
  const { handleOpen } = useCode()

  const { REF_TEXT, PLACEHOLDER } = useTranslation({
    REF_TEXT: { en: "Reference field", es: "Referencia" },
    PLACEHOLDER: { en: "Select a field", es: "Selecciona un campo" },
    EDIT_WHERE: { en: "Edit code", es: "Editar código" },
  })

  const possibleFields = searchPossibleFieldsToRef({ datasetId, fieldId: id })

  function handleChangeWhere(value: boolean) {
    if (value) {
      handleChangeRefWhere("")
    } else {
      handleChangeRefWhere(null)
    }
  }

  function handleClick() {
    if (where !== null) {
      handleOpen({
        code: where,
        handleChange(v) {
          handleChangeRefWhere(v)
        },
        language: "javascript",
      })
    }
  }

  return (
    <div className="flex flex-col gap-y-3">
      <FormInputSection vertical={false} id={fieldRefId} labelText={REF_TEXT}>
        <ChacaSelect
          size="base"
          id={fieldRefId}
          options={possibleFields}
          labelKey="locationNames"
          valueKey="locationIds"
          placeholder={PLACEHOLDER}
          value={refField.join(".")}
          onChange={handleChangeRefField}
        />
      </FormInputSection>

      <CheckField check={unique} text="Unique" onChange={handleChangeRefUnique} />

      <CheckField check={where !== null} onChange={handleChangeWhere} text="Where">
        <ChacaIconButton
          size="sm"
          color="cancel"
          text="Edit Playground"
          onClick={handleClick}
          icon={<Edit size={20} />}
        />
      </CheckField>
    </div>
  )
}
