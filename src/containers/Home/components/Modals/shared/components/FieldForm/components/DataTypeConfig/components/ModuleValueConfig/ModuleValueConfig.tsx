import { ChacaSelect } from "@form/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { UpdateArgumentsProps } from "@containers/Home/components/Modals/shared/domain/field"
import { useModules } from "@modules/modules/hooks"
import { OptionArguments } from "./components"
import { Argument } from "@modules/modules/domain/core/argument"
import clsx from "clsx"
import { ArgumentObject } from "@modules/dataset/domain/core/datatype"
import { FormSection } from "@modules/modal/components"
import { ModuleSection, Module } from "@modules/modules/domain/core/schema"

interface Props {
  args: ArgumentObject
  section: ModuleSection
  module: Module
  handleSelectFieldSchema(v: ModuleSection): void
  handleSelectFieldSchemaOption(p: Module): void
  handleUpdateFieldSchemaArguments(p: UpdateArgumentsProps): void
  handleAddFieldSchemaArgument(argument: Argument): void
  handleDeleteFieldSchemaArgument(argument: string): void
}

export default function ModuleValueConfig({
  args,
  module,
  section,
  handleSelectFieldSchema,
  handleSelectFieldSchemaOption,
  handleUpdateFieldSchemaArguments,
  handleAddFieldSchemaArgument,
  handleDeleteFieldSchemaArgument,
}: Props) {
  const { modules } = useModules()
  const { MODULE_TEXT, OPTION_TEXT } = useTranslation({
    MODULE_TEXT: { en: "Module", es: "Módulo" },
    OPTION_TEXT: { en: "Option", es: "Opción" },
  })

  const CLASS = clsx("grid grid-cols-2 esm:grid-cols-1", "rounded", "gap-x-4 gap-y-3", "mb-5")

  return (
    <div className={CLASS}>
      <FormSection vertical={true} labelText={MODULE_TEXT}>
        <ChacaSelect
          options={modules}
          label={(s) => s.name}
          placeholder={MODULE_TEXT}
          value={(s) => s === section}
          onChange={handleSelectFieldSchema}
          size="base"
        />
      </FormSection>

      <FormSection vertical={true} labelText={OPTION_TEXT}>
        <ChacaSelect
          value={(o) => o === module}
          options={section.options}
          label={(o) => o.name}
          placeholder={OPTION_TEXT}
          onChange={handleSelectFieldSchemaOption}
          size="base"
        />
      </FormSection>

      <OptionArguments
        module={module}
        args={args}
        handleUpdateFieldSchemaArguments={handleUpdateFieldSchemaArguments}
        handleAddFieldSchemaArgument={handleAddFieldSchemaArgument}
        handleDeleteFieldSchemaArgument={handleDeleteFieldSchemaArgument}
      />
    </div>
  )
}
