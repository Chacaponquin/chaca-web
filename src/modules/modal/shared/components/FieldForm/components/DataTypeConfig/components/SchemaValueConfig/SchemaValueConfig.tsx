import { ChacaSelect } from "@form/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { SchemaValueTypeObject } from "@modules/datasets/interfaces/dataset-field"
import {
  SelectFieldSchemaOptionProps,
  UpdateArgumentsProps,
} from "@modules/modal/shared/interfaces"
import { useSchemas } from "@modules/schemas/hooks"
import { OptionArguments } from "./components"
import { useId, useMemo } from "react"
import { Argument } from "@modules/schemas/interfaces/argument"
import clsx from "clsx"
import { FormInputSection } from "@modules/modal/shared/shared/components"

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
  const moduleId = useId()
  const optionId = useId()

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

  function handleSelectModuleOption(option: string) {
    handleSelectFieldSchemaOption({ option: option, parent: fieldType.schema })
  }

  const CLASS = clsx("grid grid-cols-2 esm:grid-cols-1", "rounded", "gap-x-4 gap-y-3")

  return (
    <div className={CLASS}>
      <FormInputSection vertical={true} id={moduleId} labelText={MODULE_TEXT}>
        <ChacaSelect
          options={schemas}
          labelKey="name"
          valueKey="id"
          placeholder={MODULE_TEXT}
          value={fieldType.schema}
          onChange={handleSelectModule}
          size="base"
          id={moduleId}
        />
      </FormInputSection>

      <FormInputSection vertical={true} id={optionId} labelText={OPTION_TEXT}>
        <ChacaSelect
          value={fieldType.option}
          options={foundOptions}
          labelKey="name"
          valueKey="id"
          placeholder={OPTION_TEXT}
          onChange={handleSelectModuleOption}
          size="base"
          id={optionId}
        />
      </FormInputSection>

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
