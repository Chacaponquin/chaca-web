import { Fragment } from "react"
import { Loader } from "./components"
import { ExampleCode } from "@markdown/components/Markdown/components/Code/components"

interface Props {
  loading: boolean
  response: string
}

export default function Response({ loading, response }: Props) {
  return (
    <Fragment>
      {loading && <Loader />}
      {!loading && <ExampleCode language="json" code={response} />}
    </Fragment>
  )
}
