import { ChacaCheckbox } from "@form/components"

interface Props {
  enabled: boolean
  handleChange(v: boolean): void
}

export default function Enable({ enabled, handleChange }: Props) {
  return <ChacaCheckbox check={enabled} handleChange={handleChange} size="sm" />
}
