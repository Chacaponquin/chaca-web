import { useFilters } from "../../../../modules/form/hooks"
import { ChacaFormProps } from "../../interfaces/chacaForm.interface"
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
    "hover:border-principalColor border-2 border-grayColor rounded-sm outline-none focus:border-principalColor resize-none transition-all duration-300",
    textClass,
    paddingClass,
    className,
    `py-2`,
  )

  return (
    <textarea
      className={textareaClass}
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        if (onChange) onChange(e.target.value)
      }}
      style={{ width: size === "full" ? `100%` : `${size}px`, height: `${h}px` }}
      name={name}
    ></textarea>
  )
}
