import { API_ROUTES } from "@modules/app/constants/ROUTES"
import { useFetch } from "@modules/app/modules/http/hooks"
import { FetchFunctionsProps } from "@modules/app/modules/http/interfaces/fetch"
import { Schema } from "../interfaces/schema"
import { ApiSchemaResponse } from "../dto"
import { v4 as uuid } from "uuid"

export default function useSchemasServices() {
  const { get } = useFetch()

  async function getSchemas(props: FetchFunctionsProps<Array<Schema>>): Promise<void> {
    get<Array<ApiSchemaResponse>>({
      url: API_ROUTES.GET_SCHEMAS,
      onError: props.onError,
      onFinally: props.onFinally,
      onSuccess: (data) => {
        const result: Array<Schema> = data.map((d) => ({
          id: uuid(),
          name: d.name,
          options: d.options.map((o) => ({
            id: uuid(),
            name: o.name,
            arguments: o.arguments.map((a) => {
              return { ...a, id: uuid() }
            }),
            showName: o.showName,
          })),
          showName: d.showName,
        }))

        if (props.onSuccess) {
          props.onSuccess(result)
        }
      },
    })
  }

  return { getSchemas }
}
