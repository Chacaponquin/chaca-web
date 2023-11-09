import { ArgumentObject } from "@modules/datasets/interfaces/dataset-field"
import { UpdateArgumentsProps } from "@modules/modal/shared/interfaces"
import { useSchemas } from "@modules/schemas/hooks"
import { ArgumentFilter } from "@modules/schemas/components"
import { Fragment } from "react"

interface Props {
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
}: Props) {
  const { findType } = useSchemas()
  const foundOption = findType(module, option)

  return (
    <Fragment>
      {foundOption.arguments.map((a, i) => (
        <div key={i} className="flex gap-x-2 items-center">
          <p className="text-base">{a.argument}:</p>

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
