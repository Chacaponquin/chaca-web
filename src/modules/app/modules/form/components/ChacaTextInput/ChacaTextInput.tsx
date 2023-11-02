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
    "py-[2px] transition-all duration-300 rounded-sm px-3 outline-none transition-all duration-300",
    "bg-white dark:bg-scale-5",
    "hover:border-purple-6 border-2 border-scale-5 focus:border-purple-6",
    "dark:border-scale-3 dark:focus:border-scale-9 dark:hover:border-scale-9",
    "dark:text-scale-12",
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
