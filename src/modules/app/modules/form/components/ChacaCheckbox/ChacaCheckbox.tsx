import { Checkbox } from "primereact/checkbox"
import { useId } from "react"

interface Props {
  check: boolean
  id?: string
  handleChange: (v: boolean) => void
}

export default function ChacaCheckbox({ check, handleChange, id }: Props) {
  const inputId = id || useId()

  return <Checkbox id={inputId} checked={check} onChange={(e) => handleChange(e.checked)} />
}
