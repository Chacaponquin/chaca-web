import { ChacaButton, ChacaSelect } from "@form/components"
import { Edit } from "@modules/app/modules/icon/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { RefWhere } from "@modules/dataset/domain/core/datatype"
import { UniqueInfo, WhereInfo } from "./components"
import { useRefConfig } from "./hooks"
import {
  CheckField,
  FormSection,
} from "@containers/Home/components/Modals/shared/shared/components"

interface RefConfigProps {
  refField: string[]
  schemaId: string
  unique: boolean
  where: RefWhere
  id: string
  handleChangeRefUnique(value: boolean): void
  handleChangeRefWhere(value: RefWhere): void
  handleChangeRefField(r: string): void
}

export default function RefConfig({
  refField,
  schemaId,
  handleChangeRefField,
  id,
  handleChangeRefUnique,
  handleChangeRefWhere,
  unique,
  where,
}: RefConfigProps) {
  const { handleChangeWhere, handleClick, possibleFields } = useRefConfig({
    schemaId: schemaId,
    fieldId: id,
    handleChangeRefWhere: handleChangeRefWhere,
    where: where,
  })

  const { REF_TEXT, PLACEHOLDER, EDIT_WHERE } = useTranslation({
    REF_TEXT: { en: "Reference field", es: "Referencia" },
    PLACEHOLDER: { en: "Select a field", es: "Selecciona un campo" },
    EDIT_WHERE: { en: "Edit code", es: "Editar código" },
  })

  return (
    <div className="flex flex-col gap-y-3 mb-5">
      <FormSection vertical={false} labelText={REF_TEXT}>
        <ChacaSelect
          size="base"
          options={possibleFields}
          label={(f) => f.locationNames}
          placeholder={PLACEHOLDER}
          value={(o) => o.locationIds === refField.join(".")}
          onChange={(v) => handleChangeRefField(v.locationIds)}
        />
      </FormSection>

      <CheckField
        check={unique}
        text="Unique"
        onChange={handleChangeRefUnique}
        info={<UniqueInfo />}
      />

      <CheckField
        check={where !== null}
        onChange={handleChangeWhere}
        text="Where"
        info={<WhereInfo />}
      >
        <ChacaButton
          size="sm"
          color="cancel"
          text={EDIT_WHERE}
          onClick={handleClick}
          icon={
            <i className="dark:fill-white fill-black">
              <Edit size={20} />
            </i>
          }
        />
      </CheckField>
    </div>
  )
}
