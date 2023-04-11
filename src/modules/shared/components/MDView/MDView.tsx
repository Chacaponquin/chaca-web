import Markdown from "markdown-to-jsx"
import ExampleCode from "../ExampleCode/ExampleCode"

const ListItem = ({ children }: { children: JSX.Element }) => {
  return (
    <div className='flex items-start'>
      <div className='pr-4'>
        <div className='translate-y-[12px] w-[6px] h-[6px] rounded-full bg-black'></div>
      </div>

      <div className='text-grayStrongColor'>{children}</div>
    </div>
  )
}

const Code = ({ children, className }: { children: string; className: string }) => {
  const languageClass = className.split(" ").find((c) => c.startsWith("lang-")) as string
  const language = languageClass.replace("lang-", "")

  return <ExampleCode code={children} language={language} />
}

export default function MDView({
  content,
  className = "",
}: {
  content: string
  className?: string
}) {
  return (
    <div className={`flex w-full text-base '` + className}>
      <Markdown
        className='w-full flex flex-col'
        options={{
          overrides: {
            img: { props: { className: "mb-2 w-full" } },
            ul: { props: { className: "ml-3 list-disc flex flex-col mb-4" } },
            li: {
              component: ListItem,
            },
            h1: { props: { className: "text-4xl font-fontExtraBold mb-2 text-black" } },
            h3: { props: { className: "text-xl font-fontBold mt-3 text-black" } },
            h2: { props: { className: "text-2xl font-fontBold text-black" } },
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
              props: { className: "text-grayStrongColor" },
            },
            strong: {
              props: { className: "text-black" },
            },
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  )
}
