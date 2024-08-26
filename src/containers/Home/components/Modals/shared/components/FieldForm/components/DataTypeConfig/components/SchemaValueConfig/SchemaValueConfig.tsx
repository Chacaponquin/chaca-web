import { ChacaSelect } from "@form/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { UpdateArgumentsProps } from "@containers/Home/components/Modals/shared/domain/field"
import { useSchemas } from "@modules/schemas/hooks"
import { OptionArguments } from "./components"
import { Argument } from "@modules/schemas/domain/core/argument"
import clsx from "clsx"
import { ArgumentObject } from "@modules/datasets/domain/core/datatype"
import { FormSection } from "@modules/modal/components"
import { Schema, SchemaOption } from "@modules/schemas/domain/core/schema"

interface Props {
  args: ArgumentObject
  schema: Schema
  option: SchemaOption
  handleSelectFieldSchema(v: Schema): void
  handleSelectFieldSchemaOption(p: SchemaOption): void
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
  const { schemas } = useSchemas()
  const { MODULE_TEXT, OPTION_TEXT } = useTranslation({
    MODULE_TEXT: { en: "Module", es: "Módulo" },
    OPTION_TEXT: { en: "Option", es: "Opción" },
  })

  const CLASS = clsx("grid grid-cols-2 esm:grid-cols-1", "rounded", "gap-x-4 gap-y-3", "mb-5")

  return (
    <div className={CLASS}>
      <FormSection vertical={true} labelText={MODULE_TEXT}>
        <ChacaSelect
          options={schemas}
          label={(s) => s.name}
          placeholder={MODULE_TEXT}
          value={(s) => s === schema}
          onChange={handleSelectFieldSchema}
          size="base"
        />
      </FormSection>

      <FormSection vertical={true} labelText={OPTION_TEXT}>
        <ChacaSelect
          value={(o) => o === option}
          options={schema.options}
          label={(o) => o.name}
          placeholder={OPTION_TEXT}
          onChange={handleSelectFieldSchemaOption}
          size="base"
        />
      </FormSection>

      <OptionArguments
        option={option}
        args={args}
        handleUpdateFieldSchemaArguments={handleUpdateFieldSchemaArguments}
        handleAddFieldSchemaArgument={handleAddFieldSchemaArgument}
        handleDeleteFieldSchemaArgument={handleDeleteFieldSchemaArgument}
      />
    </div>
  )
}
