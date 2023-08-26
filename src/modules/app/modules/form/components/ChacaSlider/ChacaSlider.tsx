import { Slider } from "primereact/slider"
import clsx from "clsx"

interface ChacaSliderProps {
  value: number
  size: number
  step?: number
  min: number
  max: number
  onChange?: (v: number) => void
}

export default function ChacaSlider({
  value,
  size,
  step = 1,
  min,
  max,
  onChange,
}: ChacaSliderProps) {
  const className = clsx(`w-[${size}px]`)

  function handleChange(v: number) {
    if (onChange) {
      onChange(v)
    }
  }

  return (
    <Slider
      value={value}
      orientation="horizontal"
      min={min}
      max={max}
      step={step}
      className={className}
      onChange={(e) => handleChange(Number(e.value.toString()))}
    />
  )
}
