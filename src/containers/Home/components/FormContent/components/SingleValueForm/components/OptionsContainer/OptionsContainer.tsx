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
    <div className='flex flex-col w-full gap-1 px-5'>
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
  )
}

export default OptionsContainer
