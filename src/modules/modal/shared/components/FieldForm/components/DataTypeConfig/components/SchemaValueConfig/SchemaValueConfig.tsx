import { ChacaSelect } from "@form/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import {
  SelectFieldSchemaOptionProps,
  UpdateArgumentsProps,
} from "@modules/modal/shared/interfaces"
import { useSchemas } from "@modules/schemas/hooks"
import { OptionArguments } from "./components"
import { useMemo } from "react"
import { Argument } from "@modules/schemas/interfaces/argument"
import clsx from "clsx"
import { FormInputSection } from "@modules/modal/shared/shared/components"
import { ArgumentObject } from "@modules/datasets/interfaces/dataset-field"

interface Props {
  args: ArgumentObject
  schema: string
  option: string
  handleSelectFieldSchema(v: string): void
  handleSelectFieldSchemaOption(p: SelectFieldSchemaOptionProps): void
  handleUpdateFieldSchemaArguments(p: UpdateArgumentsProps): void
  handleAddFieldSchemaArgument(argument: Argument): void
  handleDeleteFieldSchemaArgument(argument: string): void
}

export default function SchemaValueConfig({
  args,
  option,
  schema,
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

  const foundOptions = useMemo(() => findParentOptions(schema), [findParentOptions, schema])

  function handleSelectModule(m: string) {
    handleSelectFieldSchema(m)
  }

  function handleSelectModuleOption(option: string) {
    handleSelectFieldSchemaOption({ option: option, parent: schema })
  }

  const CLASS = clsx("grid grid-cols-2 esm:grid-cols-1", "rounded", "gap-x-4 gap-y-3", "mb-5")

  return (
    <div className={CLASS}>
      <FormInputSection vertical={true} labelText={MODULE_TEXT}>
        <ChacaSelect
          options={schemas}
          labelKey="name"
          valueKey="name"
          placeholder={MODULE_TEXT}
          value={schema}
          onChange={handleSelectModule}
          size="base"
        />
      </FormInputSection>

      <FormInputSection vertical={true} labelText={OPTION_TEXT}>
        <ChacaSelect
          value={option}
          options={foundOptions}
          labelKey="name"
          valueKey="name"
          placeholder={OPTION_TEXT}
          onChange={handleSelectModuleOption}
          size="base"
        />
      </FormInputSection>

      <OptionArguments
        module={schema}
        option={option}
        args={args}
        handleUpdateFieldSchemaArguments={handleUpdateFieldSchemaArguments}
        handleAddFieldSchemaArgument={handleAddFieldSchemaArgument}
        handleDeleteFieldSchemaArgument={handleDeleteFieldSchemaArgument}
      />
    </div>
  )
}
