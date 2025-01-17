import { RouteExample } from "@containers/Docs/components/Api/shared/components"
import { DEFAULT_API_SCHEMA } from "@containers/Docs/components/Api/shared/domain/default-api-schema"
import { FetchCodeBuilder } from "@containers/Docs/shared/domain/helpers/fetch-code-builder"

const props = {
  url: "schema/transform",
  body: { schema: DEFAULT_API_SCHEMA, filename: "Movie", format: "json" },
}

const curl = FetchCodeBuilder.curl(props)

const axios = FetchCodeBuilder.axios(props)

export default function Example() {
  return <RouteExample axios={axios} curl={curl} />
}
