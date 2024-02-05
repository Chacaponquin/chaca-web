import Markdown from "markdown-to-jsx"
import clsx from "clsx"
import { Code, H1, H2, H3, Img, List, ListItem, P, Pre, Strong } from "./components"

interface Props {
  content: string
  className?: string
}

export default function MDView({ content, className = "" }: Props) {
  const CLASS = clsx("flex w-full text-base font-fontDoc", className)

  return (
    <div className={CLASS}>
      <Markdown
        className="w-full flex flex-col"
        options={{
          overrides: {
            img: { component: Img },
            ul: { component: List },
            li: {
              component: ListItem,
            },
            h1: { component: H1 },
            h3: { component: H3 },
            h2: { component: H2 },
            code: {
              component: Code,
            },
            pre: {
              component: Pre,
            },
            p: {
              component: P,
            },
            strong: {
              component: Strong,
            },
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  )
}
