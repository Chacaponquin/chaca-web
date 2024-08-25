import { ArgumentObject } from "@modules/datasets/interfaces/dataset-field"
import { UpdateArgumentsProps } from "@containers/Home/components/Modals/shared/domain/field"
import { Fragment } from "react"
import { Argument } from "./components"
import { Argument as IArgument } from "@modules/schemas/domain/argument"
import { SchemaOption } from "@modules/schemas/domain/schema"

interface Props {
  option: SchemaOption
  args: ArgumentObject
  handleUpdateFieldSchemaArguments(p: UpdateArgumentsProps): void
  handleAddFieldSchemaArgument(argument: IArgument): void
  handleDeleteFieldSchemaArgument(argument: string): void
}

export default function OptionArguments({
  option,
  args,
  handleUpdateFieldSchemaArguments,
  handleAddFieldSchemaArgument,
  handleDeleteFieldSchemaArgument,
}: Props) {
  return (
    <Fragment>
      {option.arguments.map((a) => (
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
