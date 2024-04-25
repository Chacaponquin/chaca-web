import { ArgumentFilter } from "@modules/schemas/components"
import { Fragment, useState } from "react"
import { Enable, Name } from "./components"
import { UpdateArgumentsProps } from "@modules/modal/shared/interfaces"
import { Argument as IArgument } from "@modules/schemas/interfaces/argument"
import { ArgumentObject } from "@modules/datasets/interfaces/dataset-field"

interface Props {
  handleUpdateFieldSchemaArguments(p: UpdateArgumentsProps): void
  handleAddFieldSchemaArgument(argument: IArgument): void
  handleDeleteFieldSchemaArgument(argument: string): void
  argument: IArgument
  args: ArgumentObject
}

export default function Argument({
  handleUpdateFieldSchemaArguments,
  argument,
  args,
  handleAddFieldSchemaArgument,
  handleDeleteFieldSchemaArgument,
}: Props) {
  const [enabled, setEnabled] = useState(false)

  function handleChangeEnabled(value: boolean): void {
    setEnabled(value)

    if (value) {
      handleAddFieldSchemaArgument(argument)
    } else {
      handleDeleteFieldSchemaArgument(argument.argument)
    }
  }

  return (
    <div className="flex gap-x-2 items-center max-w-[500px] w-full">
      <Enable enabled={enabled} handleChange={handleChangeEnabled} />

      {argument.argument in args ? (
        <Fragment>
          <Name text={`${argument.argument}:`} />

          <ArgumentFilter
            arg={argument}
            value={args[argument.argument]}
            handleChangeArgumentValue={(v) => {
              handleUpdateFieldSchemaArguments({ argumentName: argument.argument, value: v })
            }}
          />
        </Fragment>
      ) : (
        <Name text={argument.argument} />
      )}
    </div>
  )
}
