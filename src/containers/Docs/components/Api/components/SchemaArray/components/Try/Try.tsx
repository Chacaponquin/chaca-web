import { MOVIE_SCHEMA } from "@containers/Docs/components/Api/shared/domain/movie-schema"
import { TryRoute } from "@containers/Docs/shared/components"

export default function Try() {
  const body = JSON.stringify(MOVIE_SCHEMA, undefined, 3)

  return (
    <TryRoute
      body={body}
      method="post"
      result="json"
      params={[{ param: "count", value: "10" }]}
      url="api/v1/schema"
    />
  )
}
