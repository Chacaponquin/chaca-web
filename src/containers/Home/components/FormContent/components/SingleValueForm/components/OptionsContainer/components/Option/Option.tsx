import { ChacaRadioButton } from "@form"
import OptionArguments from "../OptionArguments/OptionArguments"
import clsx from "clsx"
import { Argument } from "@modules/schemas/interfaces/argument.interface"
import { SubOption } from "@modules/schemas/interfaces/schema.interface"
import { DatasetField, SingleValueDataType } from "@modules/datasets/interfaces/datasets.interface"

interface OptionProps {
  handleSelectOption: () => void
  option: SubOption
  args: Argument[]
  isSelected: boolean
  field: DatasetField<SingleValueDataType>
}

const Option = ({ option, args, handleSelectOption, isSelected, field }: OptionProps) => {
  const divClass = clsx(
    "w-full py-1 rounded-sm flex items-center flex-col px-4 bg-white border-2 border-solid",
    {
      "border-principalColor ": isSelected,
      "border-grayColor": !isSelected,
    },
  )

  return (
    <div className={divClass}>
      <div className='flex items-center w-full justify-between '>
        <div className='flex items-center'>
          <ChacaRadioButton value={isSelected} onChange={() => handleSelectOption()} />

          <p className='text-base ml-4 font-fontBold'>{option.name}</p>
        </div>
      </div>

      {isSelected && args.length > 0 && <OptionArguments args={args} field={field} />}
    </div>
  )
}

export default Option
