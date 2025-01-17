import { RouteExample } from "@containers/Docs/components/Api/shared/components"
import { DEFAULT_API_SCHEMA } from "@containers/Docs/components/Api/shared/domain/default-api-schema"
import { FetchCodeBuilder } from "@containers/Docs/shared/domain/helpers/fetch-code-builder"

const props = {
  url: "schema/10",
  body: DEFAULT_API_SCHEMA,
}

const axios = FetchCodeBuilder.axios(props)

const curl = FetchCodeBuilder.curl(props)

export default function Example() {
  return <RouteExample axios={axios} curl={curl} />
}
