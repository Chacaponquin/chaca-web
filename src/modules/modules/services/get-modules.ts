import { Id } from "@modules/shared/domain/id"
import { ModuleSectionResponse } from "../dto/read/module-section"
import { ModuleSection } from "../domain/core/module-section"
import { Http } from "@modules/app/modules/http/services/http"
import { API_ROUTES } from "@modules/app/constants/api-routes"
import { FetchFunctionsProps } from "@modules/app/modules/http/domain/fetch"

export function getModules(
  props: FetchFunctionsProps<{ modules: ModuleSection[]; version: string }> & { version: string },
): void {
  Http.get<ModuleSectionResponse>({
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

      props.onSuccess({ modules: result, version: data.version })
    },
  })
}
