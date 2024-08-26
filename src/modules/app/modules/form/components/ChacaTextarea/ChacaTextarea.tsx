import { ChacaFormProps } from "../../domain"
import { useMemo } from "react"
import clsx from "clsx"

interface Props extends ChacaFormProps<string> {
  placeholder?: string
  height: "small" | "normal" | "large"
  name: string
}

export default function ChacaTextarea({
  onChange,
  placeholder = "",
  value,
  height,
  name,
  size,
  id,
}: Props) {
  const h = useMemo(() => {
    let retHeight: number

    switch (height) {
      case "large":
        retHeight = 150
        break
      case "normal":
        retHeight = 120
        break
      case "small":
        retHeight = 100
        break
      default:
        retHeight = 100
        break
    }

    return retHeight
  }, [height])

  const CLASS = clsx(
    "w-full",
    "transition-all duration-300",
    "resize-none",
    "outline-none",
    "rounded",
    "bg-white dark:bg-scale-5",
    "border-2 dark:border-scale-3 border-gray-300",
    "dark:hover:border-scale-9 hover:border-purple-6",
    "dark:focus:border-scale-9 focus:border-purple-6",
    "dark:text-scale-12",

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

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    onChange(e.target.value)
  }

  return (
    <textarea
      className={CLASS}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      id={id}
      style={{ height: `${h}px` }}
      name={name}
    ></textarea>
  )
}
