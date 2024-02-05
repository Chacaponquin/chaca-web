import { Markdown } from "@modules/shared/modules/markdown/components"

interface Props {
  content: string
}

export default function Doc({ content }: Props) {
  return (
    <div className="w-full h-full flex">
      <Markdown content={content} />
    </div>
  )
}
