import { ArrayValue } from "@modules/datasets/interfaces/dataset-field"
import { ChangeSequentialFieldProps } from "@modules/modal/shared/interfaces"
import { CheckField } from "@modules/modal/shared/shared/components"
import { ValuesForm } from "../../shared/components"
import { LoopInfo } from "./components"

interface Props {
  values: ArrayValue[]
  loop: boolean
  handleChangeSequentialValues(props: ChangeSequentialFieldProps): void
}

export default function SequentialConfig({ values, handleChangeSequentialValues, loop }: Props) {
  return (
    <div className="flex flex-col gap-1 mb-5">
      <ValuesForm
        values={values}
        handleChangeValues={(v) => handleChangeSequentialValues({ values: v, loop: loop })}
      />

      <CheckField
        text="Loop"
        check={loop}
        onChange={(v) => handleChangeSequentialValues({ values: values, loop: v })}
        info={<LoopInfo />}
      />
    </div>
  )
}
