import { Size } from "../../domain"
import LibSelect, { components } from "react-select"
import MenuOption from "./components/MenuOption/MenuOption"
import { useMemo } from "react"
import clsx from "clsx"
import Indicator from "./components/Indicator/Indicator"

interface p<T> {
  placeholder: string
  options: T[]
  size: Size
  id: string
  label(o: T): string
  onChange(value: T): void
  value(data: T): boolean
}

export default function ChacaSelect<T>({
  label,
  onChange,
  options,
  placeholder,
  value: ivalue,
  size,
}: p<T>) {
  const value = useMemo(() => options.find((o) => ivalue(o)), [options, ivalue])

  return (
    <LibSelect
      className="w-full"
      components={{
        IndicatorsContainer: (p) => (
          <components.IndicatorsContainer {...p} className="">
            <Indicator />
          </components.IndicatorsContainer>
        ),
        Option: (p) => (
          <components.Option {...p} className="px-1 dark:bg-scale-5 rounded">
            <MenuOption size={size} selected={value === p.data} label={label(p.data)} />
          </components.Option>
        ),
        IndicatorSeparator: () => null,
        SingleValue: (p) => (
          <components.SingleValue
            {...p}
            className={clsx("p-0", "text-black dark:text-white", {
              "text-sm": size === "sm",
              "text-base": size === "base",
              "text-lg": size === "lg",
            })}
          >
            {value ? label(value) : placeholder}
          </components.SingleValue>
        ),
      }}
      onChange={(value) => {
        onChange(value as T)
      }}
      styles={{
        placeholder: (base) => {
          return { ...base, padding: "0px" }
        },
        control: (base) => {
          return {
            ...base,
            borderColor: "inherit",
            minHeight: undefined,
            ":hover": { borderColor: "inherit" },
          }
        },
        option(base) {
          return { ...base, padding: "0px" }
        },
        menuList: (base) => {
          return {
            ...base,
            display: "flex",
            flexDirection: "column",
            gap: undefined,
          }
        },
        singleValue(base) {
          return { ...base, padding: "0px" }
        },
      }}
      classNames={{
        menuList: () => "py-1 rounded-md dark:bg-scale-5 gap-y-1",
        menu: () => "rounded-md mt-1 dark:bg-transparent shadow-md",
        control: () => {
          return clsx(
            "transition-all duration-200",
            "dark:border-scale-3 dark:hover:border-scale-9",
            "hover:border-purple-6",
            "bg-white dark:bg-scale-5",
            "border-2",
            "cursor-pointer",
            "shadow-none",
            "rounded-md",

            {
              "px-3 py-1": size === "sm",
              "px-4 py-1.5": size === "base",
              "px-5 py-1.5": size === "lg",
            },
          )
        },
        valueContainer: () => "p-0",
      }}
      isSearchable={false}
      isClearable={false}
      value={value}
      options={options}
      placeholder={placeholder}
    />
  )
}
