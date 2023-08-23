import { ChacaCheckbox } from "@form/components"

export default function KeyConfig({
  isKey,
  handleChangeIsKey,
}: {
  isKey: boolean
  handleChangeIsKey: (v: boolean) => void
}) {
  return (
    <div className="flex gap-3 items-center">
      <ChacaCheckbox handleChange={handleChangeIsKey} check={isKey} />
      <p className="mb-0 text-lg">Key</p>
    </div>
  )
}
