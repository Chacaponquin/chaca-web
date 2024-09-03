import { useEffect, useState } from "react"
import { Button, Request, Response } from "./components"
import { useFetch } from "@modules/app/modules/http/hooks"

export default function GenerateValueApi() {
  const { post } = useFetch()

  const url = "/api/id/uuid"

  const [loading, setLoading] = useState(true)
  const [response, setResponse] = useState("")

  useEffect(() => {
    post<string, undefined>({
      url: url,
      onFinally() {
        setLoading(false)
      },
      body: undefined,
      onError() {
        setResponse("")
      },
      onSuccess(data) {
        setResponse(JSON.stringify(data))
      },
    })
  }, [])

  function handleClick() {
    setLoading(true)

    post<string, undefined>({
      url: url,
      onFinally() {
        setLoading(false)
      },
      body: undefined,
      onError() {
        setResponse("")
      },
      onSuccess(data) {
        setResponse(JSON.stringify(data))
      },
    })
  }

  return (
    <div className="w-full my-5 flex flex-col border-[1px] border-scale-7 rounded">
      <header className="flex py-3 px-4 items-center w-full justify-between border-b-[1px] border-b-scale-7">
        <Request method="POST" url={url} />
        <Button handleClick={handleClick} loading={loading} />
      </header>

      <Response loading={loading} response={response} />
    </div>
  )
}
