import React from "react"
import { HttpMethod } from "../../shared/components"
import { useEnv } from "@modules/app/modules/env/hooks"
import { ExampleCode } from "../Code/components"

interface Props {
  children: React.ReactNode
  method: string
  url: string
}

export default function ApiRoute({ method, url }: Props) {
  const { API_ROUTE } = useEnv()

  const showUrl = `${API_ROUTE}/${url}`

  return (
    <div className="flex items-center w-full gap-x-3 overflow-x-auto mb-2">
      <HttpMethod method={method} />
      <ExampleCode code={showUrl} />
    </div>
  )
}
