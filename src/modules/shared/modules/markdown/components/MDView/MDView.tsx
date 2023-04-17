import Markdown from "markdown-to-jsx"
import ListItem from "../ListItem/ListItem"
import Code from "../Code/Code"

export default function MDView({
  content,
  className = "",
}: {
  content: string
  className?: string
}) {
  return (
    <div className={`flex w-full text-base font-fontDoc'` + className}>
      <Markdown
        className='w-full flex flex-col'
        options={{
          overrides: {
            img: { props: { className: "mb-2 w-full" } },
            ul: { props: { className: "ml-3 list-disc flex flex-col mb-4" } },
            li: {
              component: ListItem,
            },
            h1: { props: { className: "text-3xl font-fontTitle mb-2 text-black" } },
            h3: { props: { className: "text-xl font-bold mt-3 text-black font-fontDoc" } },
            h2: { props: { className: "text-xl mb-1 font-bold text-black font-fontDoc" } },
            code: {
              component: Code,
              props: {
                className: "bg-slate-100 border-2 rounded-sm px-1 mt-3 py-2 font-fontCodeRegular",
              },
            },
            pre: {
              props: { className: "mt-2 mb-4" },
            },
            p: {
              props: { className: "text-grayStrongColor font-fontDoc" },
            },
            strong: {
              props: { className: "text-black font-bold font-fontDoc" },
            },
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  )
}
