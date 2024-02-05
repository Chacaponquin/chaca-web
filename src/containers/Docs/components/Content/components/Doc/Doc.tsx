import { Markdown } from "@modules/shared/modules/markdown/components"
import { Location } from "./components"

interface Props {
  content: string
  location: Array<string>
}

export default function Doc({ content, location }: Props) {
  return (
    <div className="w-full flex-col h-full flex pt-2 pb-5">
      <Location location={location} />
      <Markdown content={content} />
    </div>
  )
}
