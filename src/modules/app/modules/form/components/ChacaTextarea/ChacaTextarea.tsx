import { useFilters } from "../../../../modules/form/hooks"
import { ChacaFormProps } from "../../interfaces/form"
import { useMemo } from "react"
import clsx from "clsx"

interface ChacaTextareaProps extends ChacaFormProps<string> {
  placeholder?: string
  size?: "full" | number
  height: "small" | "normal" | "large"
  name?: string
}

export default function ChacaTextarea({
  dimension = "normal",
  onChange,
  placeholder = "",
  value,
  className = "",
  size = "full",
  height,
  name = "",
}: ChacaTextareaProps) {
  const { textClass, paddingClass } = useFilters({ dimension })

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

  const textareaClass = clsx(
    "rounded-sm outline-none resize-none transition-all duration-300",
    "bg-white dark:bg-scale-5",
    "border-2 dark:border-scale-3 dark:focus:border-scale-9 dark:hover:border-scale-9 hover:border-purple-6 focus:border-purple-6 border-scale-11",
    "dark:text-scale-12",
    textClass,
    paddingClass,
    className,
  )

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <textarea
      className={textareaClass}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      style={{ width: size === "full" ? `100%` : `${size}px`, height: `${h}px` }}
      name={name}
    ></textarea>
  )
}
