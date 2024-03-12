import { IsArrayConfig } from "@modules/datasets/interfaces/field-config"
import { CheckField, ConfigContainer } from "@modules/modal/shared/shared/components"
import { Config } from "./components"

interface Props {
  isArray: IsArrayConfig
  handleChangeIsArray(v: boolean): void
  handleChangeMinIsArray(v: number): void
  handleChangeMaxIsArray(v: number): void
}

export default function ArrayConfig({
  handleChangeIsArray,
  handleChangeMaxIsArray,
  handleChangeMinIsArray,
  isArray,
}: Props) {
  return (
    <ConfigContainer>
      <CheckField onChange={handleChangeIsArray} check={isArray !== null} text="Is Array" />

      {isArray !== null && (
        <div className="flex items-center gap-6">
          <Config
            onChange={(v) => handleChangeMinIsArray(v)}
            min={0}
            value={isArray.min}
            max={isArray.max}
            text="Min"
          />

          <Config
            text="Max"
            value={isArray.max}
            min={isArray.min}
            onChange={(v) => handleChangeMaxIsArray(v)}
            max={1000}
          />
        </div>
      )}
    </ConfigContainer>
  )
}
