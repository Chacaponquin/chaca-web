import clsx from "clsx"
import { useFilters } from "../../../../modules/form/hooks"
import { ChacaFormProps } from "../../interfaces/chacaForm.interface"
import { useId } from "react"

interface ChacaTextInputProps extends ChacaFormProps<string> {
  placeholder?: string
  size?: number | "full"
  type?: "email" | "password" | "text"
  name?: string
}

export default function ChacaTextInput({
  placeholder = "",
  dimension = "normal",
  onChange,
  className = "",
  size = "full",
  value,
  type = "text",
  name = "",
  id,
}: ChacaTextInputProps) {
  const { textClass, paddingClass } = useFilters({ dimension })

  const inputClass = clsx(
    "py-[2px] transition-all duration-300 rounded-sm px-3 outline-none transition-all duration-300 hover:border-principalColor border-2 border-grayColor focus:border-principalColor",
    className,
    textClass,
    paddingClass,
  )

  const inputId = id ? id : useId()

  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => {
        if (onChange) onChange(e.target.value)
      }}
      className={inputClass}
      style={{
        width: size === "full" ? `100%` : `${size}px`,
      }}
      value={value === undefined ? "" : value}
      name={name}
      id={inputId}
    />
  )
}
