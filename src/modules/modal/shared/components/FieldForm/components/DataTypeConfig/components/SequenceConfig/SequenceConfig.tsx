import { ChacaNumberInput } from "@form/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { FormInputSection } from "@modules/modal/shared/shared/components"
import { useId } from "react"
import { StartsWithInfo, StepInfo } from "./components"

interface Props {
  startsWith: number
  step: number
  handleChangeSequenceStartsWith(v: number): void
  handleChangeSequenceStep(v: number): void
}

export default function SequenceConfig({
  startsWith,
  step,
  handleChangeSequenceStartsWith,
  handleChangeSequenceStep,
}: Props) {
  const { START, STEP } = useTranslation({
    START: { en: "Starts with", es: "Empieza" },
    STEP: { en: "Step", es: "Salto" },
  })

  const startId = useId()
  const stepId = useId()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-2 w-full">
      <FormInputSection labelText={START} vertical={false} id={startId} info={<StartsWithInfo />}>
        <ChacaNumberInput
          value={startsWith}
          onChange={handleChangeSequenceStartsWith}
          min={0.1}
          id={stepId}
          size="sm"
        />
      </FormInputSection>

      <FormInputSection vertical={false} id={stepId} labelText={STEP} info={<StepInfo />}>
        <ChacaNumberInput
          value={step}
          size="sm"
          onChange={handleChangeSequenceStep}
          min={0.1}
          id={stepId}
        />
      </FormInputSection>
    </div>
  )
}
