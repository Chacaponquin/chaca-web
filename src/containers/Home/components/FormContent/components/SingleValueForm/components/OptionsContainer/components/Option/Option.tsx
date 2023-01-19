import { useState } from "react"
import { Config } from "@modules/shared/assets/icons"
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
  const [openArgs, setOpenArgs] = useState(isSelected)

  const handleChangeOpenArguments = () => {
    if (isSelected) setOpenArgs(!openArgs)
  }

  const divClass = clsx(
    "w-full rounded flex items-center flex-col py-2 px-4 bg-slate-100 box-content",
    {
      "border-principalColor border-2 border-solid": isSelected,
    },
  )

  return (
    <div className={divClass}>
      <div className='flex items-center w-full justify-between '>
        <div className='flex items-center'>
          <ChacaRadioButton value={isSelected} onChange={() => handleSelectOption()} />

          <p className='text-base ml-4 font-fontBold'>{option.name}</p>
        </div>

        <button className='cursor-pointer' onClick={handleChangeOpenArguments}>
          <Config size={20} />
        </button>
      </div>

      {openArgs && isSelected && args.length > 0 && <OptionArguments args={args} field={field} />}
    </div>
  )
}

export default Option
