import { DatasetField, SingleValueDataType } from "@modules/datasets/interfaces/datasets.interface"
import { Argument } from "@modules/schemas/interfaces/schema.interface"
import ArgumentFilter from "@shared/components/ArgumentFilter/ArgumentFilter"
import { useFieldArgument } from "./hooks"

export default function FieldArgumentContainer({
  arg,
  field,
}: {
  arg: Argument
  field: DatasetField<SingleValueDataType>
}) {
  const { handleChangeArgumentValue } = useFieldArgument(field, arg)

  return (
    <div className='flex py-1 gap-1 items-center'>
      <p className='mb-0 text-base'>{arg.argument}: </p>
      <ArgumentFilter
        arg={arg}
        handleChangeArgumentValue={handleChangeArgumentValue}
        value={field.dataType.fieldType.args[arg.argument]}
      />
    </div>
  )
}
