import { MOVIE_SCHEMA } from "@containers/Docs/components/Api/shared/domain/movie-schema"
import { TryRoute } from "@containers/Docs/shared/components"

export default function Try() {
  const body = JSON.stringify(
    { schema: MOVIE_SCHEMA, filename: "Schema", format: "json" },
    undefined,
    3,
  )

  return (
    <TryRoute
      result="json"
      body={body}
      url="api/v1/schema/transform"
      method="post"
      initFetch
      params={[{ param: "count", value: "10" }]}
    />
  )
}
