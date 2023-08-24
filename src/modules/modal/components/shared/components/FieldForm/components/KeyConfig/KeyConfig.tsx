import { CheckField } from "@modules/modal/components/shared/shared/components"

export default function KeyConfig({
  isKey,
  handleChangeIsKey,
}: {
  isKey: boolean
  handleChangeIsKey: (v: boolean) => void
}) {
  return <CheckField check={isKey} onChange={handleChangeIsKey} text="Key" />
}
