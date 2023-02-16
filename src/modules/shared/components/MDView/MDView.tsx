import Markdown from "markdown-to-jsx"
import ExampleCode from "../ExampleCode/ExampleCode"

const ListItem = ({ children }: { children: JSX.Element }) => {
  return (
    <div className='flex items-start'>
      <div className='pr-2'>
        <div className='translate-y-[10px] w-[8px] h-[8px] rounded-full bg-black'></div>
      </div>

      <div>{children}</div>
    </div>
  )
}

const Code = ({ children }: { children: string }) => {
  return <ExampleCode code={children} />
}

export default function MDView({
  content,
  className = "",
}: {
  content: string
  className?: string
}) {
  return (
    <div className={`flex w-full text-lg '` + className}>
      <Markdown
        className='w-full flex flex-col'
        options={{
          overrides: {
            img: { props: { className: "mb-2 w-full" } },
            ul: { props: { className: "list-disc flex flex-col gap-2" } },
            li: {
              component: ListItem,
            },
            h3: { props: { className: "text-xl font-fontBold mt-3" } },
            h2: { props: { className: "text-2xl font-fontBold" } },
            code: {
              component: Code,
              props: {
                className: "bg-slate-100 border-2 rounded-sm px-1 mt-3 py-2 font-fontCodeRegular",
              },
            },
            pre: {
              props: { className: "mt-2 mb-4" },
            },
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  )
}
