import { HttpMethod } from "../../../../shared/components"
import { ExampleCode } from "../../../Code/components"

interface Props {
  url: string
  method: string
}

export default function Header({ method, url }: Props) {
  return (
    <header className="flex items-center gap-3 mb-1">
      <HttpMethod method={method} />
      <ExampleCode code={url} />
    </header>
  )
}
