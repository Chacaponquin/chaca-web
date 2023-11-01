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
    "hover:border-purple-6 border-2 border-scale-5 rounded-sm outline-none focus:border-purple-6 resize-none transition-all duration-300",
    "bg-white dark:bg-scale-9",
    textClass,
    paddingClass,
    className,
    `py-2`,
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
