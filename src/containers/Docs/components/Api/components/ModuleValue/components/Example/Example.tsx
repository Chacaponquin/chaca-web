import { RouteExample } from "@containers/Docs/components/Api/shared/components"
import { FetchCodeBuilder } from "@containers/Docs/shared/domain/helpers/fetch-code-builder"

const props = {
  url: "module/internet/email",
  body: { firstName: "Juan" },
}

const curl = FetchCodeBuilder.curl(props)

const axios = FetchCodeBuilder.axios(props)

export default function Example() {
  return <RouteExample axios={axios} curl={curl} />
}
