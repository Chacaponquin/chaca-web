import { Markdown } from "@modules/shared/modules/markdown/components"
import { Location } from "./components"
import clsx from "clsx"

interface Props {
  content: string
  location: Array<string>
}

export default function Doc({ content, location }: Props) {
  const CLASS = clsx(
    "flex-col flex",
    "w-full min-h-screen max-h-screen",
    "pt-[65px] pb-5 px-10 esm:px-6",
    "overflow-y-auto",
  )

  return (
    <article className={CLASS}>
      <Location location={location} />
      <Markdown content={content} />
    </article>
  )
}
