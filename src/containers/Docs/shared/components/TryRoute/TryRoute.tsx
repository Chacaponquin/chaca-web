import { Body, Button, Params, Request, Response } from "./components"
import { useMemo, useState } from "react"
import { RequestParam, TryResult } from "./domain"
import { useFetch } from "@modules/app/modules/http/hooks"
import { HttpMethod } from "../../domain/constants/http"

interface Props {
  body?: string
  params: RequestParam[]
  url: string
  method: HttpMethod
  result: TryResult
}

export default function TryRoute({
  url: iurl,
  method,
  body: ibody,
  params: iparams,
  result,
}: Props) {
  const { instance } = useFetch()

  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState("")

  const [body, setBody] = useState<string | undefined>(ibody)
  const [params, setParams] = useState<RequestParam[]>(iparams)

  const url = useMemo(() => {
    const all = [iurl, ...params.map((p) => p.value)]

    return all.join("/")
  }, [params])

  function handleChangeBody(b: string) {
    setBody(b)
  }

  function handleChangeParam(index: number, value: string) {
    setParams((prev) => {
      return prev.map((p, i) => {
        return i === index ? { value: value, param: p.param } : p
      })
    })
  }

  function handleClick() {
    const b = JSON.parse(body ? body : "{}")

    try {
      setLoading(true)

      instance
        .post(url, b)
        .then((r) => {
          const data = JSON.stringify(r.data, undefined, 4)

          setResponse(data)
        })
        .finally(() => setLoading(false))
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <div className="w-full my-4 flex flex-col border-[1px] border-scale-7 rounded">
      <header className="flex py-3 px-4 items-center w-full justify-between border-b-[1px] border-b-scale-7">
        <Request method={method} url={url} />
        <Button handleClick={handleClick} loading={loading} />
      </header>

      <div className="flex flex-col w-full gap-y-2 py-2">
        {body && <Body body={body} handleChangeBody={handleChangeBody} />}

        {params.length > 0 && (
          <Params loading={loading} params={params} handleChangeParam={handleChangeParam} />
        )}

        {response && <Response loading={loading} response={response} result={result} />}
      </div>
    </div>
  )
}
