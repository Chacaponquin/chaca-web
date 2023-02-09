import { SubOption } from "@modules/schemas/interfaces/schema.interface"
import { ModalTitle } from "../../shared/components"
import { useState } from "react"
import { OptionArgumentsSection, RequestResult, RequestSection } from "./components"
import { ArgumentsObject } from "@modules/schemas/interfaces/argument.interface"
import { schemasServices } from "@modules/schemas/services"
import { useLazyQuery } from "@modules/shared/hooks"
import prettier from "prettier"
import tsparser from "prettier/parser-typescript"

export default function TestEndpointForm({ option }: { option: SubOption }) {
  const { optionApiRoute } = schemasServices()

  const [request, { loading }] = useLazyQuery<unknown>()

  const [requestURL, setRequestURL] = useState(optionApiRoute(option.route))
  const [args, setArgs] = useState<ArgumentsObject>({})
  const [requestResult, setRequestResult] = useState<undefined | string>(undefined)

  const handleChangeArguments = (key: string, value: unknown) => {
    setArgs({ ...args, [key]: value })

    setRequestURL(builRequestURL())
  }

  const builRequestURL = (): string => {
    let initialRoute = optionApiRoute(option.route) + "?"

    Object.entries(args).forEach(([key, value], i) => {
      initialRoute += `${key}=${value}`

      if (i !== Object.keys(args).length - 1) {
        initialRoute += `&`
      }
    })

    return initialRoute
  }

  const handleMakeRequest = () => {
    request({
      url: requestURL,
      onCompleted: (data) => {
        try {
          const jsonData = JSON.stringify(data)
          const formatData = prettier.format(jsonData, {
            parser: "typescript",
            plugins: [tsparser],
          })

          setRequestResult(formatData)
        } catch (error) {
          console.log(error)
        }
      },
    })
  }

  return (
    <div className='flex flex-col min-w-[600px] max-w-[600px] '>
      <ModalTitle titleText='Test Endpoint' />

      <RequestSection url={requestURL} handleSubmit={handleMakeRequest} />

      <div className='flex gap-y-2 flex-col w-full'>
        {option.arguments.length > 0 && (
          <OptionArgumentsSection
            optionArguments={option.arguments}
            args={args}
            handleChangeArguments={handleChangeArguments}
          />
        )}
        <RequestResult loading={loading} result={requestResult} />
      </div>
    </div>
  )
}
