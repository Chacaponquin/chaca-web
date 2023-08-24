import { ChacaCheckbox } from "@form/components"
import { Label } from "@modules/modal/components/shared/shared/components"
import { useId } from "react"

export default function KeyConfig({
  isKey,
  handleChangeIsKey,
}: {
  isKey: boolean
  handleChangeIsKey: (v: boolean) => void
}) {
  const keyId = useId()

  return (
    <div className="flex gap-3 items-center">
      <ChacaCheckbox handleChange={handleChangeIsKey} id={keyId} check={isKey} />
      <Label text="Key" htmlFor={keyId} />
    </div>
  )
}
