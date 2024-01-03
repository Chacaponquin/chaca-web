import { useState, useEffect, Fragment } from "react"
import clsx from "clsx"
import { useFilters } from "@form/hooks"
import { ChacaFormProps } from "../../interfaces/form"
import { Size } from "../../interfaces/dimension"
import { Option, Select } from "./components"
import { ChacaDropdown } from ".."

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Props<T> extends ChacaFormProps<any> {
  size?: Size
  placeholder: string
  options: Array<T>
  labelKey: keyof T
  valueKey: keyof T
  height?: number
  color?: "dark" | "light"
}

interface SelectOptions {
  label: string
  value: string
}

export default function ChacaSelect<T>({
  valueKey,
  labelKey,
  onChange,
  options,
  placeholder,
  value,
  dimension = "normal",
  height = 300,
  color = "light",
}: Props<T>) {
  const { paddingClass, textClass } = useFilters({ dimension })

  const [openOptions, setOpenOptions] = useState(false)

  const [selectIndex, setSelectIndex] = useState<null | number>(null)
  const [selectOptions, setSelectOptions] = useState<Array<SelectOptions>>([])

  useEffect(() => {
    setSelectOptions([])

    options.forEach((o) => {
      setSelectOptions((prev) => [
        ...prev,
        { label: o[labelKey] as string, value: o[valueKey] as string },
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

  function handleSelectOption(index: number) {
    setSelectIndex(index)

    if (onChange) {
      onChange(selectOptions[index].value)
    }
  }

  const PARENT_CLASS = clsx(
    "w-full cursor-pointer rounded-sm gap-5 whitespace-nowrap",
    "transition-all duration-300",
    "flex items-center justify-between",
    "text-black dark:text-white",
    "border-2 border-scale-11",
    "dark:border-scale-3 dark:focus:border-scale-9 dark:hover:border-scale-9",

    { "bg-white dark:bg-scale-3": color === "dark", "bg-white dark:bg-scale-5": color === "light" },

    { "border-purple-6": openOptions, "hover:border-purple-6": !openOptions },

    textClass,
    paddingClass,
  )

  function handleChangeOpenOptions() {
    setOpenOptions((prev) => !prev)
  }

  const SELECTED_CLASS = clsx("bg-white dark:bg-scale-5 shadow-lg")

  return (
    <ChacaDropdown
      header={
        <Select
          text={selectIndex !== null ? selectOptions[selectIndex].label : placeholder}
          className={PARENT_CLASS}
          onClick={handleChangeOpenOptions}
        />
      }
      className={SELECTED_CLASS}
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
