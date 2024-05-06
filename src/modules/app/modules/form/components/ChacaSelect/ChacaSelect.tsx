import { useState, useEffect } from "react"
import clsx from "clsx"
import { ChacaFormProps, Size } from "../../interfaces"
import { Option, Select } from "./components"
import { ChacaDropdown } from ".."

interface Props<T> extends ChacaFormProps<unknown> {
  size: Size
  placeholder: string
  options: T[]
  labelKey: keyof T
  valueKey: keyof T
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
  size,
}: Props<T>) {
  const [openOptions, setOpenOptions] = useState(false)

  const [selectIndex, setSelectIndex] = useState<number | null>(null)
  const [selectOptions, setSelectOptions] = useState<SelectOptions[]>([])

  useEffect(() => {
    setSelectOptions(
      options.map((o) => {
        return { label: o[labelKey] as string, value: o[valueKey] as string }
      }),
    )
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
    onChange(selectOptions[index].value)
  }

  const PARENT_CLASS = clsx(
    "cursor-pointer",
    "w-full",
    "gap-5",
    "transition-all duration-300",
    "rounded-sm",
    "whitespace-nowrap",
    "flex items-center justify-between",
    "text-black dark:text-white",
    "border-2 border-gray-300",
    "dark:border-scale-3 dark:focus:border-scale-9 dark:hover:border-scale-9",
    "bg-white dark:bg-scale-5",

    { "border-purple-6": openOptions, "hover:border-purple-6": !openOptions },

    {
      "text-sm": size === "sm",
      "text-base": size === "base",
      "text-lg": size === "lg",
    },

    {
      "px-3 py-1": size === "sm",
      "px-4 py-1.5": size === "base",
      "px-5 py-1.5": size === "lg",
    },
  )

  const SELECTED_CLASS = clsx("bg-white dark:bg-scale-5", "shadow-lg")

  function handleChangeOpenOptions() {
    setOpenOptions((prev) => !prev)
  }

  return (
    <ChacaDropdown
      full={true}
      header={
        <Select
          text={selectIndex !== null ? selectOptions[selectIndex].label : placeholder}
          className={PARENT_CLASS}
          onClick={handleChangeOpenOptions}
        />
      }
      className={SELECTED_CLASS}
      height={300}
    >
      {options.map((_, index) => (
        <Option
          key={index}
          text={selectOptions[index]?.label}
          onClick={() => handleSelectOption(index)}
          selected={index === selectIndex}
          size={size}
        />
      ))}
    </ChacaDropdown>
  )
}
