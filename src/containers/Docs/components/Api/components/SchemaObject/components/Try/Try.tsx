import { MOVIE_SCHEMA } from "@containers/Docs/components/Api/shared/domain/movie"
import { TryRoute } from "@containers/Docs/shared/components"

export default function Try() {
  const body = JSON.stringify(MOVIE_SCHEMA, undefined, 3)

  return <TryRoute result="json" body={body} method="post" params={[]} url="api/v1/schema" />
}
