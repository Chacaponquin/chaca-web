import { ChacaSlider } from "@form/components"
import { Information } from "./components"
import { Field } from "@modules/dataset/domain/core"
import { CheckField, ConfigContainer } from "@modules/modal/components"

interface Props {
  handleChangePossibleNull(v: boolean): void
  valueNull: number
  handleChangePossibleNullValue(v: number): void
}

export default function PossibleNullConfig({
  handleChangePossibleNull,
  valueNull,
  handleChangePossibleNullValue,
}: Props) {
  return (
    <ConfigContainer>
      <CheckField
        check={valueNull > 0}
        onChange={handleChangePossibleNull}
        text="Possible null"
        info={<Information />}
      />

      {valueNull > 0 && (
        <div className="flex gap-3 items-center">
          <ChacaSlider
            min={Field.MIN_POSSIBLE_NULL}
            max={Field.MAX_POSSIBLE_NULL}
            onChange={handleChangePossibleNullValue}
            step={1}
            value={valueNull}
          />

          <p className="mb-0 text-sm">{valueNull}%</p>
        </div>
      )}
    </ConfigContainer>
  )
}
