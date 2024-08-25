import { useFetch } from "@modules/app/modules/http/hooks"
import { FileConfigOption } from "../domain/core"
import { API_ROUTES } from "@modules/app/constants/ROUTES"
import { ApiFileOptionResponse } from "../dto/api"
import { FetchFunctionsProps } from "@modules/app/modules/http/interfaces/fetch"
import { Id } from "@modules/shared/domain/id"

export default function useConfigServices() {
  const { get } = useFetch()

  async function getFileOptions(
    props: FetchFunctionsProps<Array<FileConfigOption>>,
  ): Promise<void> {
    return get<ApiFileOptionResponse[]>({
      url: API_ROUTES.GET_FILE_OPTIONS,
      onError: props.onError,
      onFinally: props.onFinally,
      onSuccess: (data) => {
        const result: FileConfigOption[] = data.map((d) => ({
          id: Id.generate(),
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
