import { ChacaCheckbox, ChacaNumberInput } from "@form/components"
import { IsArrayConfig } from "@modules/datasets/interfaces/field_config.interface"

export default function ArrayConfig({
  handleChangeIsArray,
  handleChangeMaxIsArray,
  handleChangeMinIsArray,
  isArray,
}: {
  isArray: IsArrayConfig
  handleChangeIsArray: (v: boolean) => void
  handleChangeMinIsArray: (v: number) => void
  handleChangeMaxIsArray: (v: number) => void
}) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <ChacaCheckbox handleChange={handleChangeIsArray} check={isArray !== null} />
        <p className="mb-0 text-lg">Is Array</p>
      </div>

      {isArray !== null && (
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <p className="mb-0">Min:</p>
            <ChacaNumberInput
              value={isArray.min}
              min={0}
              size={90}
              max={isArray.max}
              step={1}
              onChange={(v) => handleChangeMinIsArray(v)}
              dimension="large"
            />
          </div>

          <div className="flex items-center gap-1">
            <p className="mb-0">Max:</p>
            <ChacaNumberInput
              value={isArray.max}
              min={isArray.min}
              max={1000}
              step={1}
              size={90}
              onChange={(v) => handleChangeMaxIsArray(v)}
              dimension="large"
            />
          </div>
        </div>
      )}
    </div>
  )
}
