import { ChacaCheckbox } from "@form/components"
import { Label } from "@modules/modal/components/shared/shared/components"
import { Slider } from "primereact/slider"
import { useId } from "react"

export default function PossibleNullConfig({
  handleChangePossibleNull,
  valueNull,
  handleChangePossibleNullValue,
}: {
  handleChangePossibleNull: (v: boolean) => void
  valueNull: number
  handleChangePossibleNullValue: (v: number) => void
}) {
  const nullId = useId()

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <ChacaCheckbox
          check={valueNull > 0 ? true : false}
          handleChange={handleChangePossibleNull}
          id={nullId}
        />
        <Label text="Possible null" htmlFor={nullId} />
      </div>

      {valueNull > 0 && (
        <div className="flex gap-4 items-center">
          <Slider
            value={valueNull}
            orientation="horizontal"
            min={1}
            max={100}
            step={1}
            className="w-[200px]"
            onChange={(e) => handleChangePossibleNullValue(Number(e.value.toString()))}
          />

          <p className="mb-0">{valueNull}%</p>
        </div>
      )}
    </div>
  )
}
