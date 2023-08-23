import { ChacaNumberInput } from "@form/components"

export default function SequenceConfig({
  startsWith,
  step,
  handleChangeSequenceStartsWith,
  handleChangeSequenceStep,
}: {
  startsWith: number
  step: number
  handleChangeSequenceStartsWith: (v: number) => void
  handleChangeSequenceStep: (v: number) => void
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <label htmlFor="" className="whitespace-nowrap text-lg">
          Starts with:
        </label>
        <ChacaNumberInput
          value={startsWith}
          size={140}
          dimension="large"
          onChange={handleChangeSequenceStartsWith}
          min={0.1}
        />
      </div>

      <div className="flex items-center gap-3">
        <label htmlFor="" className="whitespace-nowrap text-lg">
          Step:
        </label>
        <ChacaNumberInput
          value={step}
          size={140}
          dimension="large"
          onChange={handleChangeSequenceStep}
          min={0.1}
        />
      </div>
    </div>
  )
}
