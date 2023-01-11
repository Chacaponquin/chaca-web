import { useState } from "react"
import { Config } from "../../../../../../../shared/assets/icons"
import ChacaRadioButton from "../../../../../../../shared/components/ChacaRadioButton/ChacaRadioButton"
import OptionArguments from "./OptionArguments"
import clsx from "clsx"
import { Argument, SubOption } from "../../../../../../../shared/interfaces/options.interface"
import {
  DatasetField,
  SingleValueDataType,
} from "../../../../../../../shared/interfaces/datasets.interface"

const Option = ({
  option,
  args,
  handleSelectOption,
  isSelected,
  field,
}: {
  handleSelectOption: () => void
  option: SubOption
  args: Argument[]
  isSelected: boolean
  field: DatasetField<SingleValueDataType>
}) => {
  const [openArgs, setOpenArgs] = useState(isSelected)

  const handleChangeOpenArguments = () => {
    if (isSelected) setOpenArgs(!openArgs)
  }

  const divClass = () => {
    return clsx(
      "w-full rounded-md flex items-center flex-col py-2 px-4",
      {
        "bg-principalColor text-white fill-white": isSelected,
      },
      { "bg-slate-100 text-block fill-black": !isSelected },
    )
  }

  return (
    <div className={divClass()}>
      <div className='flex items-center w-full justify-between '>
        <div className='flex items-center'>
          <ChacaRadioButton value={isSelected} onChange={() => handleSelectOption()} />

          <p className='text-base ml-4'>{option.name}</p>
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
