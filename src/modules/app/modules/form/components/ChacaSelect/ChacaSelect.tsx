import { useMemo, useState } from "react"
import clsx from "clsx"
import { Size } from "../../domain"
import { Option, Select } from "./components"
import { ChacaDropdown } from ".."

interface Props<T> {
  placeholder: string
  options: T[]
  label(o: T): string
  onChange(value: T): void
  size: Size
  value(o: T): boolean
  id?: string
}

export default function ChacaSelect<T>({
  label,
  onChange,
  options,
  placeholder,
  value,
  size,
}: Props<T>) {
  const [openOptions, setOpenOptions] = useState(false)

  function handleSelectOption(v: T) {
    onChange(v)
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

  const selectedOption = useMemo(() => {
    return options.find((o) => value(o))
  }, [options, value])

  return (
    <ChacaDropdown
      full={true}
      header={
        <Select
          text={selectedOption ? label(selectedOption) : placeholder}
          className={PARENT_CLASS}
          onClick={handleChangeOpenOptions}
        />
      }
      className={SELECTED_CLASS}
      height={300}
    >
      {options.map((o, index) => (
        <Option
          key={index}
          text={label(o)}
          onClick={() => handleSelectOption(o)}
          selected={value(o)}
          size={size}
        />
      ))}
    </ChacaDropdown>
  )
}
