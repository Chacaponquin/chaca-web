import { Slider } from "primereact/slider"

interface Props {
  value: number
  step: number
  min: number
  max: number
  onChange(v: number): void
}

export default function ChacaSlider({ value, step, min, max, onChange }: Props) {
  function handleChange(v: number) {
    onChange(v)
  }

  return (
    <Slider
      value={value}
      orientation="horizontal"
      min={min}
      max={max}
      step={step}
      style={{ width: `100%` }}
      onChange={(e) => handleChange(Number(e.value.toString()))}
    />
  )
}
