import { ChacaCheckbox } from "@form/components"
import { useId } from "react"

interface Props {
  text: string
  check: boolean
  onChange(v: boolean): void
}

export default function CheckField({ text, check, onChange }: Props) {
  const inputId = useId()

  return (
    <div className="flex gap-3 items-center">
      <ChacaCheckbox id={inputId} handleChange={onChange} check={check} size="sm" />

      <label htmlFor={inputId} className="text-lg mb-0">
        {text}
      </label>
    </div>
  )
}
