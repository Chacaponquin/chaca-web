import Markdown from "markdown-to-jsx"
import clsx from "clsx"
import {
  Code,
  H1,
  H2,
  H3,
  H4,
  Img,
  List,
  ListItem,
  P,
  Pre,
  Strong,
  Table,
  Td,
  Th,
} from "./components"

interface Props {
  content: string
}

export default function MDView({ content }: Props) {
  const CLASS = clsx("flex w-full")

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
            h4: { component: H4 },
            h5: { component: H4 },
            h6: { component: H4 },
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
            table: { component: Table },
            th: { component: Th },
            td: { component: Td },
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  )
}
