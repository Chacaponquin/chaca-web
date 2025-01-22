import { FetchFunctionsProps } from "@modules/app/modules/http/domain/fetch"
import { FileConfigOption } from "../domain/core"
import { ApiFileOptionResponse } from "../dto/api"
import { Http } from "@modules/app/modules/http/services/http"
import { Id } from "@modules/shared/domain/id"
import { API_ROUTES } from "@modules/app/constants/api-routes"

export function getFileOptions(props: FetchFunctionsProps<FileConfigOption[]>): void {
  Http.get<ApiFileOptionResponse[]>({
    url: API_ROUTES.GET_FILE_OPTIONS,
    onError: props.onError,
    onFinally: props.onFinally,
    onSuccess: (data) => {
      const result: FileConfigOption[] = data.map((d) => ({
        id: Id.generate(),
        arguments: d.arguments,
        type: d.type,
        title: d.title,
      }))

      props.onSuccess(result)
    },
  })
}
