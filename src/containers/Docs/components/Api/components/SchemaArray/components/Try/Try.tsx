import { MOVIE_SCHEMA_BODY } from "@containers/Docs/components/Api/shared/domain"
import { TryRoute } from "@containers/Docs/shared/components"

export default function Try() {
  return (
    <TryRoute
      body={MOVIE_SCHEMA_BODY}
      method="post"
      result="json"
      params={[{ param: "count", value: "10" }]}
      url="api/schema"
    />
  )
}
