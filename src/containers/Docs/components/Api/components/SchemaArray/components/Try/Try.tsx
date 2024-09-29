import { TryRoute } from "@containers/Docs/components/Api/shared/components"
import { MOVIE_SCHEMA_BODY } from "@containers/Docs/components/Api/shared/domain"

export default function Try() {
  return (
    <TryRoute
      body={MOVIE_SCHEMA_BODY}
      method="post"
      params={[{ param: "count", value: "10" }]}
      url="api/schema"
    />
  )
}
