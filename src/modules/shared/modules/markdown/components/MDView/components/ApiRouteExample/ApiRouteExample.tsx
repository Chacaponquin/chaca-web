import { useEffect, useState } from "react"
import beautify from "js-beautify"
import { useEnv } from "@modules/app/modules/env/hooks"
import { ExampleCode } from "../Code/components"
import { Header, Options } from "./components"
import { Options as IOptions } from "./interfaces"

interface Props {
  url: string
  method: string
  code: unknown
  body?: never
}

export default function ApiRouteExample({ url, method, code = "", body }: Props) {
  const { API_ROUTE } = useEnv()

  const [showCode, setShowCode] = useState(typeof code === "string" ? code : JSON.stringify(code))
  const [selectedOption, setSelectedOption] = useState<IOptions>("response")

  useEffect(() => {
    if (selectedOption === "response") {
      const c = beautify.js(typeof code === "string" ? String(code) : JSON.stringify(code), {})
      setShowCode(c)
    } else if (selectedOption === "body") {
      const c = beautify.js(JSON.stringify(body))
      setShowCode(c)
    }
  }, [selectedOption])

  const showUrl = `${API_ROUTE}/${url}`

  function handleChangeOption(o: IOptions) {
    setSelectedOption(o)
  }

  return (
    <div className="flex flex-col mb-5">
      <Header method={method} url={showUrl} />
      {body && (
        <Options
          handleChangeOption={handleChangeOption}
          selectedOption={selectedOption}
          body={body}
        />
      )}
      <ExampleCode code={showCode} />
    </div>
  )
}
