import { API_ROUTES } from "@modules/app/constants/ROUTES"
import { useFetch } from "@modules/app/modules/http/hooks"
import { FetchFunctionsProps } from "@modules/app/modules/http/interfaces/fetch"
import { Schema } from "../domain/core/schema"
import { SchemaResponse } from "../dto"
import { Id } from "@modules/shared/domain/id"

interface GetSchemasResponse {
  schemas: Schema[]
  version: string
}

export default function useSchemasServices() {
  const { get } = useFetch()

  async function getSchemas(
    props: FetchFunctionsProps<GetSchemasResponse> & { version: string },
  ): Promise<void> {
    get<SchemaResponse>({
      url: API_ROUTES.GET_SCHEMAS(props.version),
      onError: props.onError,
      onFinally: props.onFinally,
      onSuccess(data) {
        const result: Schema[] = data.schemas.map((d) => ({
          name: d.name,
          options: d.options.map((o) => ({
            id: o.id,
            name: o.name,
            arguments: o.arguments.map((a) => {
              return {
                argument: a.argument,
                config: a.config,
                id: Id.generate(),
                showName: a.showName,
              }
            }),
          })),
          id: d.id,
        }))

        if (props.onSuccess) {
          props.onSuccess({ schemas: result, version: data.version })
        }
      },
    })
  }

  return { getSchemas }
}
