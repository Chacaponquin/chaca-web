import { ChacaNumberInput } from "@form/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { FormInputSection } from "@modules/modal/shared/shared/components"
import { useId } from "react"

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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
      <FormInputSection labelText={START} vertical={false} id={startId}>
        <ChacaNumberInput
          value={startsWith}
          onChange={handleChangeSequenceStartsWith}
          min={0.1}
          id={stepId}
          size="sm"
        />
      </FormInputSection>

      <FormInputSection vertical={false} id={stepId} labelText={STEP}>
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
