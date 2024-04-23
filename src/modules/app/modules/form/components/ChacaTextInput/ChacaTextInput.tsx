import clsx from "clsx"
import { ChacaFormProps } from "../../interfaces"

interface Props extends ChacaFormProps<string> {
  placeholder?: string
  type: "email" | "password" | "text"
  name: string
  disabled: boolean
}

export default function ChacaTextInput({
  placeholder = "",
  onChange,
  value,
  type,
  name,
  id,
  disabled,
  size,
}: Props) {
  const CLASS = clsx(
    "transition-all duration-300",
    "rounded-sm",
    "border-2",
    "outline-none",
    "bg-white dark:bg-scale-5",
    "hover:border-purple-6 border-scale-11 focus:border-purple-6",
    "dark:border-scale-3 dark:focus:border-scale-9 dark:hover:border-scale-9",
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

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    onChange(e.target.value)
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      className={CLASS}
      style={{}}
      value={value}
      name={name}
      id={id}
      disabled={disabled}
    />
  )
}
