import { ArgumentFilter } from "@modules/modules/components"
import { Fragment, useState } from "react"
import { Enable, Name } from "./components"
import { UpdateArgumentsProps } from "@containers/Home/components/Modals/shared/domain/field"
import { Argument as IArgument } from "@modules/modules/domain/core/argument"
import { ArgumentObject } from "@modules/dataset/domain/core/datatype"

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
  const [enabled, setEnabled] = useState(argument.argument in args)

  function handleChangeEnabled(value: boolean): void {
    setEnabled(value)

    if (value) {
      handleAddFieldSchemaArgument(argument)
    } else {
      handleDeleteFieldSchemaArgument(argument.argument)
    }
  }

  return (
    <div className="flex gap-x-3 items-center max-w-[500px] w-full">
      <Enable enabled={enabled} handleChange={handleChangeEnabled} />

      {argument.argument in args ? (
        <Fragment>
          <Name text={`${argument.showName}:`} />

          <ArgumentFilter
            arg={argument}
            value={args[argument.argument]}
            handleChangeArgumentValue={(v) => {
              handleUpdateFieldSchemaArguments({ name: argument.argument, value: v })
            }}
          />
        </Fragment>
      ) : (
        <Name text={argument.showName} />
      )}
    </div>
  )
}
