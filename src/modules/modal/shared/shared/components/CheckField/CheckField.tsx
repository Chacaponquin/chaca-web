import { ChacaCheckbox } from "@form/components"
import { useId } from "react"

export default function CheckField({
  text,
  check,
  onChange,
}: {
  text: string
  check: boolean
  onChange: (v: boolean) => void
}) {
  const inputId = useId()

  return (
    <div className="flex gap-3 items-center">
      <ChacaCheckbox id={inputId} handleChange={onChange} check={check} />
      <label htmlFor={inputId} className="text-lg mb-0">
        {text}
      </label>
    </div>
  )
}
