import { CheckField } from "../../../../shared/components"
import { Information } from "./components"

interface Props {
  isKey: boolean
  handleChangeIsKey(v: boolean): void
}

export default function KeyConfig({ isKey, handleChangeIsKey }: Props) {
  return <CheckField check={isKey} onChange={handleChangeIsKey} text="Key" info={<Information />} />
}
