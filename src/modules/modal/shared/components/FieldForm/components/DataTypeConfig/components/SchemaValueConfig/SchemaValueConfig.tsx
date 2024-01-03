import { ChacaSelect } from "@form/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { SchemaValueTypeObject } from "@modules/datasets/interfaces/dataset-field"
import {
  SelectFieldSchemaOptionProps,
  UpdateArgumentsProps,
} from "@modules/modal/shared/interfaces"
import { useSchemas } from "@modules/schemas/hooks"
import { OptionArguments } from "./components"
import { useMemo } from "react"
import { Argument } from "@modules/schemas/interfaces/argument"

interface Props {
  fieldType: SchemaValueTypeObject
  handleSelectFieldSchema(v: string): void
  handleSelectFieldSchemaOption(p: SelectFieldSchemaOptionProps): void
  handleUpdateFieldSchemaArguments(p: UpdateArgumentsProps): void
  handleAddFieldSchemaArgument(argument: Argument): void
  handleDeleteFieldSchemaArgument(argument: string): void
}

export default function SchemaValueConfig({
  fieldType,
  handleSelectFieldSchema,
  handleSelectFieldSchemaOption,
  handleUpdateFieldSchemaArguments,
  handleAddFieldSchemaArgument,
  handleDeleteFieldSchemaArgument,
}: Props) {
  const { schemas, findParentOptions } = useSchemas()
  const { MODULE_TEXT, OPTION_TEXT } = useTranslation({
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
    <div className="grid grid-cols-2 esm:grid-cols-1 gap-x-4 gap-y-3 bg-scale-12 dark:bg-scale-5 px-5 py-3 rounded">
      <ChacaSelect
        options={schemas}
        labelKey="name"
        valueKey="id"
        placeholder={MODULE_TEXT}
        value={fieldType.schema}
        onChange={handleSelectModule}
        color="dark"
      />

      <ChacaSelect
        value={fieldType.option}
        options={foundOptions}
        labelKey="name"
        valueKey="id"
        placeholder={OPTION_TEXT}
        onChange={handleSelectModuleOption}
        color="dark"
      />

      <OptionArguments
        module={fieldType.schema}
        option={fieldType.option}
        args={fieldType.args}
        handleUpdateFieldSchemaArguments={handleUpdateFieldSchemaArguments}
        handleAddFieldSchemaArgument={handleAddFieldSchemaArgument}
        handleDeleteFieldSchemaArgument={handleDeleteFieldSchemaArgument}
      />
    </div>
  )
}
