import { ChacaNumberInput } from "@form/components"
import { FormInputSection } from "@modules/modal/shared/shared/components"
import { useId } from "react"

interface Props {
  startsWith: number
  step: number
  handleChangeSequenceStartsWith: (v: number) => void
  handleChangeSequenceStep: (v: number) => void
}

export default function SequenceConfig({
  startsWith,
  step,
  handleChangeSequenceStartsWith,
  handleChangeSequenceStep,
}: Props) {
  const startId = useId()
  const stepId = useId()

  return (
    <div className="flex items-center justify-between gap-3 w-full">
      <FormInputSection labelText={"Starts with"} id={startId}>
        <ChacaNumberInput
          value={startsWith}
          size={"full"}
          dimension="large"
          onChange={handleChangeSequenceStartsWith}
          min={0.1}
          id={stepId}
        />
      </FormInputSection>

      <FormInputSection id={stepId} labelText={"Step"}>
        <ChacaNumberInput
          value={step}
          size={"full"}
          dimension="large"
          onChange={handleChangeSequenceStep}
          min={0.1}
          id={stepId}
        />
      </FormInputSection>
    </div>
  )
}
