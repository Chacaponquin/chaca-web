import { Fragment } from "react"
import { ExampleCode, MiniCode } from "./components"

interface Props {
  children: string
  className: string
}

export default function Code({ children, className = "" }: Props) {
  const languageClass = className.split(" ").find((c) => c.startsWith("lang-")) as string
  const language = languageClass ? languageClass.replace("lang-", "") : undefined

  return (
    <Fragment>
      {language ? (
        <ExampleCode code={children} language={language} />
      ) : (
        <MiniCode content={children} />
      )}
    </Fragment>
  )
}
