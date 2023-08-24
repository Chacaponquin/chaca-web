import { CheckField } from "@modules/modal/components/shared/shared/components"
import { Slider } from "primereact/slider"

export default function PossibleNullConfig({
  handleChangePossibleNull,
  valueNull,
  handleChangePossibleNullValue,
}: {
  handleChangePossibleNull: (v: boolean) => void
  valueNull: number
  handleChangePossibleNullValue: (v: number) => void
}) {
  return (
    <div className="flex justify-between items-center">
      <CheckField check={valueNull > 0} onChange={handleChangePossibleNull} text="Possible null" />

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
