import { ChacaSlider } from "@form/components"
import { CheckField } from "@modules/modal/shared/shared/components"

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
    <section className="flex justify-between items-center">
      <CheckField check={valueNull > 0} onChange={handleChangePossibleNull} text="Possible null" />

      {valueNull > 0 && (
        <div className="flex gap-4 items-center">
          <ChacaSlider
            min={1}
            max={100}
            onChange={handleChangePossibleNullValue}
            size={200}
            value={valueNull}
          />
          <p className="mb-0">{valueNull}%</p>
        </div>
      )}
    </section>
  )
}
