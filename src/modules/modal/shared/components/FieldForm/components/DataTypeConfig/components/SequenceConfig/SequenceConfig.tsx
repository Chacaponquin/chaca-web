import { ChacaNumberInput } from "@form/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { FormInputSection } from "@modules/modal/shared/shared/components"
import { StartsWithInfo, StepInfo } from "./components"
import { SequenceNode } from "@modules/datasets/domain/tree/Field"

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

  return (
    <div className="grid grid-cols-1 exsm:grid-cols-2 gap-x-7 gap-y-2 w-full">
      <FormInputSection labelText={START} vertical={false} info={<StartsWithInfo />}>
        <ChacaNumberInput
          value={startsWith}
          onChange={handleChangeSequenceStartsWith}
          min={SequenceNode.MIN_STARTS_WITH}
          size="sm"
        />
      </FormInputSection>

      <FormInputSection vertical={false} labelText={STEP} info={<StepInfo />}>
        <ChacaNumberInput
          value={step}
          size="sm"
          onChange={handleChangeSequenceStep}
          min={SequenceNode.MIN_STEP}
        />
      </FormInputSection>
    </div>
  )
}
