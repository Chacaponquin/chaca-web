import { ArgumentObject } from "@modules/datasets/interfaces/dataset_field.interface"
import { UpdateArgumentsProps } from "@modules/modal/components/shared/interfaces/form.interfaces"
import { useSchemaServices } from "@modules/schemas/services"
import { ArgumentFilter } from "@modules/schemas/components"
import { Fragment } from "react"

interface OptionArgumentsProps {
  module: string
  option: string
  args: ArgumentObject
  handleUpdateFieldSchemaArguments: (p: UpdateArgumentsProps) => void
}

export default function OptionArguments({
  module,
  option,
  args,
  handleUpdateFieldSchemaArguments,
}: OptionArgumentsProps) {
  const { findType } = useSchemaServices()
  const foundOption = findType(module, option)

  return (
    <Fragment>
      {foundOption.arguments.map((a, i) => (
        <div key={i}>
          <ArgumentFilter
            arg={a}
            value={args[a.argument]}
            handleChangeArgumentValue={(v) => {
              handleUpdateFieldSchemaArguments({ argumentName: a.argument, value: v })
            }}
          />
        </div>
      ))}
    </Fragment>
  )
}
