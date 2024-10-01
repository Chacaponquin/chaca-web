import { IsArrayConfig } from "@modules/dataset/domain/core/field-config"
import { Config, Information } from "./components"
import { USER_LIMITS } from "@modules/user/constants"
import { CheckField, ConfigContainer } from "../../../../shared/components"

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
      <CheckField
        onChange={handleChangeIsArray}
        check={isArray !== null}
        text="Is array"
        info={<Information />}
      />

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
            max={USER_LIMITS.LIMIT_ARRAY_VALUES}
          />
        </div>
      )}
    </ConfigContainer>
  )
}
