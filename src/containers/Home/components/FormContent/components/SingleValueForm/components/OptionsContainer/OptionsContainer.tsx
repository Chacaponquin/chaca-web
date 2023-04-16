import { DatasetField, SingleValueDataType } from "@modules/datasets/interfaces/datasets.interface"
import { Option } from "./components"
import { useOptionsContainer } from "./hooks"
import { SubOption } from "@modules/schemas/interfaces/schema.interface"

const OptionsContainer = ({
  options,
  field,
}: {
  options: SubOption[]
  field: DatasetField<SingleValueDataType>
}) => {
  const { handleSelectOption, optionArguments, selectOption } = useOptionsContainer(field)

  return (
    <div className='flex flex-col w-full items-center px-5'>
      <div className='gap-1 flex flex-col w-full max-w-[800px]'>
        {options.map((o) => (
          <Option
            option={o}
            key={o.id}
            args={optionArguments}
            field={field}
            handleSelectOption={() => handleSelectOption(o)}
            isSelected={selectOption === o.id}
          />
        ))}
      </div>
    </div>
  )
}

export default OptionsContainer
