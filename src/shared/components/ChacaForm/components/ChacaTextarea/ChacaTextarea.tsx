import { useFilters } from "../../hooks"
import { ChacaFormProps } from "../../interfaces/chacaForm.interface"
import { useMemo } from "react"
import clsx from "clsx"

interface ChacaTextareaProps extends ChacaFormProps<string> {
  placeholder: string
  size?: "full" | number
  height: "small" | "normal" | "large"
}

export default function ChacaTextarea({
  dimension = "normal",
  onChange,
  placeholder,
  value,
  className = "",
  size = "full",
  height,
}: ChacaTextareaProps) {
  const { textClass, paddingClass } = useFilters({ dimension })

  const h = useMemo(() => {
    let retHeight: number
    switch (height) {
      case "large":
        retHeight = 120
        break
      case "normal":
        retHeight = 100
        break
      case "small":
        retHeight = 80
        break
      default:
        retHeight = 80
        break
    }

    return retHeight
  }, [height])

  const textareaClass = clsx(
    "hover:border-principalColor border-2 rounded-sm outline-none focus:border-principalColor resize-none",
    textClass,
    paddingClass,
    className,
    `py-[5px]`,
  )

  return (
    <textarea
      className={textareaClass}
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        onChange(e.target.value)
      }}
      style={{ width: size === "full" ? `100%` : `${size}px`, height: `${h}px` }}
    ></textarea>
  )
}
