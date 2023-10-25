import { useState, useEffect, Fragment } from "react"
import clsx from "clsx"
import { useFilters } from "@form/hooks"
import { ChacaFormProps } from "../../interfaces/chacaForm.interface"
import { Size } from "../../interfaces/dimension.interface"
import { Option, Select } from "./components"
import { ChacaDropdown } from ".."

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ChacaObjectSelectProps<T> extends ChacaFormProps<any> {
  size?: Size
  placeholder: string
  options: Array<T>
  labelKey: keyof T
  valueKey: keyof T
  height?: number
}

type Props<T> = ChacaObjectSelectProps<T>

interface SelectOptions {
  label: string
  value: string
}

export default function ChacaSelect<T>(props: Props<T>) {
  const { onChange, options, placeholder, value, dimension = "normal", height = 300 } = props

  const { paddingClass, textClass } = useFilters({ dimension })

  const [openOptions, setOpenOptions] = useState(false)

  const [selectIndex, setSelectIndex] = useState<null | number>(null)
  const [selectOptions, setSelectOptions] = useState<Array<SelectOptions>>([])

  useEffect(() => {
    setSelectOptions([])

    options.forEach((o) => {
      const customProps = props as ChacaObjectSelectProps<T>

      setSelectOptions((prev) => [
        ...prev,
        { label: o[customProps.labelKey] as string, value: o[customProps.valueKey] as string },
      ])
    })
  }, [options])

  useEffect(() => {
    selectOptions.forEach((o, index) => {
      if (o.value === value) {
        setSelectIndex(index)
      }
    })
  }, [value, selectOptions])

  const handleSelectOption = (index: number) => {
    setSelectIndex(index)

    if (onChange) {
      onChange(selectOptions[index].value)
    }
  }

  const parentClass = clsx(
    "w-full flex items-center text-black dark:text-white border-solid transition-all duration-300 justify-between bg-white dark:bg-darkColorLight py-[2px] border-2 border-grayColor cursor-pointer rounded-sm gap-5 whitespace-nowrap",
    { "border-principalColor": openOptions, "hover:border-principalColor": !openOptions },
    textClass,
    paddingClass,
  )

  function handleChangeOpenOptions() {
    setOpenOptions((prev) => !prev)
  }

  return (
    <ChacaDropdown
      header={
        <Select
          text={selectIndex !== null ? selectOptions[selectIndex].label : placeholder}
          className={parentClass}
          onClick={handleChangeOpenOptions}
        />
      }
      className="bg-white dark:bg-darkColorLight shadow-lg"
      height={height}
    >
      <Fragment>
        {options.map((_, index) => (
          <Option
            key={index}
            text={selectOptions[index]?.label}
            onClick={() => handleSelectOption(index)}
            selected={index === selectIndex}
            textClass={textClass}
            paddingClass={paddingClass}
          />
        ))}
      </Fragment>
    </ChacaDropdown>
  )
}
