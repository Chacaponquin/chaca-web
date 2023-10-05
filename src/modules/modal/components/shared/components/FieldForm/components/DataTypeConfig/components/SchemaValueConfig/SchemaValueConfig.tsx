import { ChacaSelect } from "@form/components"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { SchemaValueTypeObject } from "@modules/datasets/interfaces/dataset_field.interface"
import {
  SelectFieldSchemaOptionProps,
  UpdateArgumentsProps,
} from "@modules/modal/components/shared/interfaces/form.interfaces"
import { useSchemaServices } from "@modules/schemas/services"
import { OptionArguments } from "./components"
import { useMemo } from "react"

export default function SchemaValueConfig({
  fieldType,
  handleSelectFieldSchema,
  handleSelectFieldSchemaOption,
  handleUpdateFieldSchemaArguments,
}: {
  fieldType: SchemaValueTypeObject
  handleSelectFieldSchema: (v: string) => void
  handleSelectFieldSchemaOption: (p: SelectFieldSchemaOptionProps) => void
  handleUpdateFieldSchemaArguments: (p: UpdateArgumentsProps) => void
}) {
  const { schemas, findParentOptions } = useSchemaServices()
  const { MODULE_TEXT, OPTION_TEXT } = useLanguage({
    MODULE_TEXT: { en: "Module", es: "Módulo" },
    OPTION_TEXT: { en: "Option", es: "Opción" },
  })

  const foundOptions = useMemo(
    () => findParentOptions(fieldType.schema),
    [findParentOptions, fieldType],
  )

  function handleSelectModule(m: string) {
    handleSelectFieldSchema(m)
  }

  function handleSelectModuleOption(o: string) {
    handleSelectFieldSchemaOption({ optionName: o, parent: fieldType.schema })
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
      <ChacaSelect
        options={schemas}
        labelKey="name"
        valueKey="id"
        placeholder={MODULE_TEXT}
        value={fieldType.schema}
        onChange={handleSelectModule}
      />

      <ChacaSelect
        value={fieldType.option}
        options={foundOptions}
        labelKey="name"
        valueKey="id"
        placeholder={OPTION_TEXT}
        onChange={handleSelectModuleOption}
      />

      <OptionArguments
        module={fieldType.schema}
        option={fieldType.option}
        args={fieldType.args}
        handleUpdateFieldSchemaArguments={handleUpdateFieldSchemaArguments}
      />
    </div>
  )
}
