import { OtherOptionsSection } from "@containers/Auth/shared/components"
import { Message } from "./components"

interface Props {
  loading: boolean
}

export default function OtherOptions({ loading }: Props) {
  return (
    <div className="mt-10 flex flex-col">
      <Message />
      <OtherOptionsSection loading={loading} />
    </div>
  )
}
