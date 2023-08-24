import { ChacaCheckbox, ChacaNumberInput } from "@form/components"
import { IsArrayConfig } from "@modules/datasets/interfaces/field_config.interface"
import { useId } from "react"

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
  const minId = useId()
  const maxId = useId()
  const arrayId = useId()

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <ChacaCheckbox id={arrayId} handleChange={handleChangeIsArray} check={isArray !== null} />
        <label htmlFor={arrayId} className="mb-0 text-lg">
          Is Array
        </label>
      </div>

      {isArray !== null && (
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <label className="mb-0" htmlFor={minId}>
              Min:
            </label>
            <ChacaNumberInput
              value={isArray.min}
              min={0}
              size={90}
              max={isArray.max}
              step={1}
              onChange={(v) => handleChangeMinIsArray(v)}
              dimension="large"
              id={minId}
            />
          </div>

          <div className="flex items-center gap-1">
            <label className="mb-0" htmlFor={maxId}>
              Max:
            </label>
            <ChacaNumberInput
              id={maxId}
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
