import { useState } from "react"
import Markdown from "markdown-to-jsx"
import LoaderContainer from "@shared/components/Loader/LoaderContainer"
import { useQuery } from "@shared/hooks"
import ExampleCode from "@shared/components/ExampleCode/ExampleCode"

const GuideContainer = ({ route }: { route: string }) => {
  const [content, setContent] = useState("")

  const { loading, error } = useQuery<string>({
    url: route,
    onCompleted: (data) => {
      setContent(data)
    },
  })

  return (
    <LoaderContainer loading={loading} className='w-[60px] esm:w-[40px]'>
      <div className='flex w-full text-lg'>
        <Markdown
          className='w-full flex flex-col'
          options={{
            overrides: {
              img: { props: { className: "mb-3" } },
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
    </LoaderContainer>
  )
}

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

export default GuideContainer
