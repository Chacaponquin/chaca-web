import { TryRoute } from "@containers/Docs/components/Api/shared/components"
import { MOVIE_SCHEMA_BODY } from "@containers/Docs/components/Api/shared/domain"

export default function Try() {
  const body = MOVIE_SCHEMA_BODY

  return <TryRoute body={body} method="post" params={[]} url="api/schema" />
}
