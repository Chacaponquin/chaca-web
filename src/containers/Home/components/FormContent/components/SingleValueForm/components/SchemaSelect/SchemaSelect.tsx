import { useContext } from "react"
import { AppConfigContext } from "@modules/shared/context"
import { DatasetField, SingleValueDataType } from "@modules/datasets/interfaces/datasets.interface"
import { ChacaSelect } from "@form"
import { useLanguage } from "@modules/shared/hooks"
import { useSchemaSelect } from "./hooks"

const SchemaSelect = ({ field }: { field: DatasetField<SingleValueDataType> }) => {
  const { SCHEMA_TEXT } = useLanguage({ SCHEMA_TEXT: { en: "Schema", es: "Esquema" } })
  const { schemas } = useContext(AppConfigContext)
  const { handleSelectSchema } = useSchemaSelect(field)

  return (
    <div className='flex px-5 w-full'>
      <p className='mb-0 font-fontBold text-xl mr-4'>{SCHEMA_TEXT}:</p>
      <ChacaSelect
        value={field.dataType.fieldType.parent}
        onChange={(value) => handleSelectSchema(value as string)}
        placeholder={"Select a Schema"}
        options={schemas}
        labelKey='parent'
        valueKey='parent'
        size={200}
      />
    </div>
  )
}

export default SchemaSelect
