import { ChacaNumberInput } from "@form/components"
import { IsArrayConfig } from "@modules/datasets/interfaces/field-config"
import { CheckField } from "@modules/modal/shared/shared/components"
import { useId } from "react"

interface Props {
  isArray: IsArrayConfig
  handleChangeIsArray: (v: boolean) => void
  handleChangeMinIsArray: (v: number) => void
  handleChangeMaxIsArray: (v: number) => void
}

export default function ArrayConfig({
  handleChangeIsArray,
  handleChangeMaxIsArray,
  handleChangeMinIsArray,
  isArray,
}: Props) {
  const minId = useId()
  const maxId = useId()

  return (
    <div className="flex justify-between items-center">
      <CheckField onChange={handleChangeIsArray} check={isArray !== null} text="Is Array" />

      {isArray !== null && (
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
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
              dimension="small"
              id={minId}
            />
          </div>

          <div className="flex items-center gap-2">
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
              dimension="small"
            />
          </div>
        </div>
      )}
    </div>
  )
}
