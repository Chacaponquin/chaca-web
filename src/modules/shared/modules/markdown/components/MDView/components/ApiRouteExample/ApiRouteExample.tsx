import { useEffect, useState } from "react"
import beautify from "js-beautify"
import clsx from "clsx"
import { HttpMethod } from "../../shared/components"

import "./api_route_example.css"
import { useEnv } from "@modules/app/modules/env/hooks"
import { ExampleCode } from "../Code/components"

type Options = "response" | "body"

interface Props {
  url: string
  method: string
  code: unknown
  body?: never
}

export default function ApiRouteExample({ url, method, code = "", body }: Props) {
  const { API_ROUTE } = useEnv()

  const [showCode, setShowCode] = useState(typeof code === "string" ? code : JSON.stringify(code))
  const [selectedOption, setSelectedOption] = useState<Options>("response")

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

  function BUTTON_CLASS(o: Options): string {
    return clsx({ selected: o === selectedOption })
  }

  function handleChangeOption(o: Options) {
    setSelectedOption(o)
  }

  return (
    <div className="md_api_route_example">
      <div className="request">
        <HttpMethod method={method} />
        <div className="url">
          <ExampleCode code={showUrl} />
        </div>
      </div>

      {body && (
        <div className="view-options">
          <button
            className={BUTTON_CLASS("response")}
            onClick={() => handleChangeOption("response")}
          >
            Response
          </button>

          {body && (
            <button className={BUTTON_CLASS("body")} onClick={() => handleChangeOption("body")}>
              Body
            </button>
          )}
        </div>
      )}

      <div className="code">
        <ExampleCode code={showCode} />
      </div>
    </div>
  )
}
