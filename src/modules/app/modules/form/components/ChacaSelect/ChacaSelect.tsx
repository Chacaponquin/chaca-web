import { useMemo, useState } from "react"
import clsx from "clsx"
import { Size } from "../../domain"
import ChacaPopover from "../ChacaPopover/ChacaPopover"
import { PopoverItem, PopoverList } from "../ChacaPopover/components"
import { ArrowDown } from "@modules/app/modules/icon/components"

interface Props<T> {
  placeholder: string
  options: T[]
  size: Size
  id: string
  label(o: T): string
  onChange(value: T): void
  value(o: T): boolean
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
    "rounded",
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

  const selectedOption = useMemo(() => {
    return options.find((o) => value(o))
  }, [options, value])

  return (
    <ChacaPopover
      parent={
        <button className={PARENT_CLASS} type="button">
          <p className="pointer-events-none overflow-x-auto no-scroll">
            {selectedOption ? label(selectedOption) : placeholder}
          </p>

          <div className="stroke-black dark:stroke-white">
            <ArrowDown size={18} />
          </div>
        </button>
      }
      open={openOptions}
      onClickOutside={() => setOpenOptions(false)}
      position="bottom"
    >
      <PopoverList height={300}>
        {options.map((o, index) => (
          <PopoverItem
            key={index}
            text={label(o)}
            onClick={() => handleSelectOption(o)}
            selected={value(o)}
            size={size}
          />
        ))}
      </PopoverList>
    </ChacaPopover>
  )
}
