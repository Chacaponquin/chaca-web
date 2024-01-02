import { ArgumentObject } from "@modules/datasets/interfaces/dataset-field"
import { UpdateArgumentsProps } from "@modules/modal/shared/interfaces"
import { useSchemas } from "@modules/schemas/hooks"
import { Fragment } from "react"
import { Argument } from "./components"
import { Argument as IArgument } from "@modules/schemas/interfaces/argument"

interface Props {
  module: string
  option: string
  args: ArgumentObject
  handleUpdateFieldSchemaArguments(p: UpdateArgumentsProps): void
  handleAddFieldSchemaArgument(argument: IArgument): void
  handleDeleteFieldSchemaArgument(argument: string): void
}

export default function OptionArguments({
  module,
  option,
  args,
  handleUpdateFieldSchemaArguments,
  handleAddFieldSchemaArgument,
  handleDeleteFieldSchemaArgument,
}: Props) {
  const { findType } = useSchemas()
  const foundOption = findType(module, option)

  return (
    <Fragment>
      {foundOption.arguments.map((a) => (
        <Argument
          key={a.id}
          handleUpdateFieldSchemaArguments={handleUpdateFieldSchemaArguments}
          args={args}
          argument={a}
          handleAddFieldSchemaArgument={handleAddFieldSchemaArgument}
          handleDeleteFieldSchemaArgument={handleDeleteFieldSchemaArgument}
        />
      ))}
    </Fragment>
  )
}
