import { ArgumentObject } from "@modules/dataset/domain/core/datatype"
import { UpdateArgumentsProps } from "@containers/Home/components/Modals/shared/domain/field"
import { Fragment } from "react"
import { Argument } from "./components"
import { Argument as IArgument } from "@modules/modules/domain/core/argument"
import { Module } from "@modules/modules/domain/core/schema"

interface Props {
  module: Module
  args: ArgumentObject
  handleUpdateFieldSchemaArguments(p: UpdateArgumentsProps): void
  handleAddFieldSchemaArgument(argument: IArgument): void
  handleDeleteFieldSchemaArgument(argument: string): void
}

export default function OptionArguments({
  module,
  args,
  handleUpdateFieldSchemaArguments,
  handleAddFieldSchemaArgument,
  handleDeleteFieldSchemaArgument,
}: Props) {
  return (
    <Fragment>
      {module.arguments.map((a) => (
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
