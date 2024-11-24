import { MOVIE_SCHEMA_BODY } from "@containers/Docs/components/Api/shared/domain"
import { TryRoute } from "@containers/Docs/shared/components"

export default function Try() {
  const body = MOVIE_SCHEMA_BODY

  return <TryRoute result="json" body={body} method="post" params={[]} url="api/v1/schema" />
}
