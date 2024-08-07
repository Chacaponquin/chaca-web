import { ChacaCheckbox } from "@form/components"
import { useId } from "react"

interface Props {
  text: string
  check: boolean
  onChange(v: boolean): void
  children?: React.ReactNode
  info?: React.ReactNode
}

export default function CheckField({ text, check, onChange, children, info }: Props) {
  const inputId = useId()

  return (
    <div className="flex gap-3 items-center">
      <ChacaCheckbox id={inputId} handleChange={onChange} check={check} size="sm" />

      <label htmlFor={inputId} className="text-base mb-0">
        {text}
      </label>

      {info}

      {check && children}
    </div>
  )
}
