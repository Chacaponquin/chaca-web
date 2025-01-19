import { API_ROUTES } from "@modules/app/constants/ROUTES"
import { useFetch } from "@modules/app/modules/http/hooks"
import { FetchFunctionsProps } from "@modules/app/modules/http/interfaces/fetch"
import { ModuleSection } from "../domain/core/schema"
import { ModuleSectionResponse } from "../dto"
import { Id } from "@modules/shared/domain/id"

interface GetModulesResponse {
  modules: ModuleSection[]
  version: string
}

export default function useModulesServices() {
  const { get } = useFetch()

  async function getModules(
    props: FetchFunctionsProps<GetModulesResponse> & { version: string },
  ): Promise<void> {
    get<ModuleSectionResponse>({
      url: API_ROUTES.GET_MODULES(props.version),
      onError: props.onError,
      onFinally: props.onFinally,
      onSuccess(data) {
        const result: ModuleSection[] = data.modules.map((d) => ({
          name: d.name,
          modules: d.options.map((o) => ({
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
          props.onSuccess({ modules: result, version: data.version })
        }
      },
    })
  }

  return { getModules }
}
