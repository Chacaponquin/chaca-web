import { Argument } from "@modules/schemas/interfaces/argument.interface"
import { DatasetField, SingleValueDataType } from "@modules/datasets/interfaces/datasets.interface"
import { FieldArgumentContainer } from "./components"

const OptionArguments = ({
  args,
  field,
}: {
  args: Argument[]
  field: DatasetField<SingleValueDataType>
}) => {
  return (
    <div className='grid grid-cols-1 2xl:grid-cols-2 gap-x-5 w-full px-5 mt-1'>
      {args.map((a, i) => (
        <FieldArgumentContainer key={i} arg={a} field={field} />
      ))}
    </div>
  )
}

export default OptionArguments
