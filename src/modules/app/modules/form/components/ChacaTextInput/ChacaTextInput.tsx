import clsx from "clsx"
import { useFilters } from "../../../../modules/form/hooks"
import { ChacaFormProps } from "../../interfaces/chacaForm.interface"
import { useId } from "react"

interface ChacaTextInputProps extends ChacaFormProps<string> {
  placeholder?: string
  size?: number | "full"
  type?: "email" | "password" | "text"
  name?: string
  disabled?: boolean
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
  disabled = false,
}: ChacaTextInputProps) {
  const inputId = id ? id : useId()

  const { textClass, paddingClass } = useFilters({ dimension })

  const inputClass = clsx(
    "py-[2px] transition-all duration-300 rounded-sm px-3 outline-none transition-all duration-300 hover:border-principalColor border-2 border-grayColor focus:border-principalColor",
    "bg-white dark:bg-darkColor",
    className,
    textClass,
    paddingClass,
  )

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      className={inputClass}
      style={{
        width: size === "full" ? `100%` : `${size}px`,
      }}
      value={value ? value : ""}
      name={name}
      id={inputId}
      disabled={disabled}
    />
  )
}
