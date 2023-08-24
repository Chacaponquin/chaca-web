import { Checkbox } from "primereact/checkbox"
import { useId } from "react"

export default function ChacaCheckbox({
  check,
  handleChange,
  id,
}: {
  check: boolean
  id?: string
  handleChange: (v: boolean) => void
}) {
  const inputId = id || useId()

  return <Checkbox id={inputId} checked={check} onChange={(e) => handleChange(e.checked)} />
}
