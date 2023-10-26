import { useFetch } from "@modules/app/modules/http/hooks"
import { FileConfigOption } from "../interfaces/config.iterface"
import { API_ROUTES } from "@modules/app/constants/ROUTES"
import { ApiFileOptionResponse } from "../dto/api"
import { FetchFunctionsProps } from "@modules/app/modules/http/interfaces/fetch"
import { v4 as uuid } from "uuid"

export default function useConfigServices() {
  const { get } = useFetch()

  async function getFileOptions(
    props: FetchFunctionsProps<Array<FileConfigOption>>,
  ): Promise<void> {
    return get<Array<ApiFileOptionResponse>>({
      url: API_ROUTES.GET_FILE_OPTIONS,
      onError: props.onError,
      onFinally: props.onFinally,
      onSuccess: (data) => {
        const result: Array<FileConfigOption> = data.map((d) => ({
          id: uuid(),
          arguments: d.arguments,
          fileType: d.fileType,
          title: d.title,
        }))

        if (props.onSuccess) {
          props.onSuccess(result)
        }
      },
    })
  }

  return { getFileOptions }
}
