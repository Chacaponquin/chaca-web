import { Checkbox } from "primereact/checkbox"

export default function ChacaCheckbox({
  check,
  handleChange,
}: {
  check: boolean
  handleChange: (v: boolean) => void
}) {
  return <Checkbox checked={check} onChange={(e) => handleChange(e.checked)} />
}
