import { ChacaNumberInput } from "@form/components"
import { useId } from "react"

interface Props {
  text: string
  value: number
  min: number
  max: number
  onChange(v: number): void
}

export default function Config({ text, max, min, onChange, value }: Props) {
  const id = useId()

  return (
    <div className="flex items-center gap-2 w-[130px]">
      <label className="mb-0" htmlFor={id}>
        {text}:
      </label>

      <ChacaNumberInput
        value={value}
        min={min}
        max={max}
        step={1}
        onChange={onChange}
        size="sm"
        id={id}
      />
    </div>
  )
}
