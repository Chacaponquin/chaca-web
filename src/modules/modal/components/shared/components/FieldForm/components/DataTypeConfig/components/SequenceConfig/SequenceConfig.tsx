import { ChacaNumberInput } from "@form/components"
import { FormInputSection } from "@modules/modal/components/shared/shared/components"
import { useId } from "react"

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
  const startId = useId()
  const stepId = useId()

  return (
    <div className="flex items-center justify-between gap-3">
      <FormInputSection labelText={"Starts with"} id={startId}>
        <ChacaNumberInput
          value={startsWith}
          size={140}
          dimension="large"
          onChange={handleChangeSequenceStartsWith}
          min={0.1}
          id={stepId}
        />
      </FormInputSection>

      <FormInputSection id={stepId} labelText={"Step"}>
        <ChacaNumberInput
          value={step}
          size={140}
          dimension="large"
          onChange={handleChangeSequenceStep}
          min={0.1}
          id={stepId}
        />
      </FormInputSection>
    </div>
  )
}
