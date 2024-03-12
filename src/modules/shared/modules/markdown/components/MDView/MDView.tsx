import Markdown from "markdown-to-jsx"
import clsx from "clsx"
import {
  A,
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
  ApiRoute,
  ApiRouteExample,
  PostSchemaArrayOne,
  PostSchemaExampleOne,
  PostSchemaExampleSecond,
  Info,
  Danger,
  Tip,
} from "./components"

interface Props {
  content: string
}

export default function MDView({ content }: Props) {
  const CLASS = clsx("flex w-full")

  return (
    <div className={CLASS}>
      <Markdown
        className="w-full flex flex-col dark:text-white text-black"
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
            a: { component: A },
            ApiRoute: { component: ApiRoute },
            ApiRouteExample: { component: ApiRouteExample },
            PostSchemaArrayOne: { component: PostSchemaArrayOne },
            PostSchemaExampleOne: { component: PostSchemaExampleOne },
            PostSchemaExampleSecond: { component: PostSchemaExampleSecond },
            Info: { component: Info },
            Danger: { component: Danger },
            Tip: { component: Tip },
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  )
}
