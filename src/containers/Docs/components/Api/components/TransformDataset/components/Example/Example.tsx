import { RouteExample } from "@containers/Docs/components/Api/shared/components"
import { DEFAULT_API_DATASET } from "@containers/Docs/components/Api/shared/domain/default-api-dataset"
import { FetchCodeBuilder } from "@containers/Docs/shared/domain/helpers/fetch-code-builder"

const props = {
  url: "dataset/transform",
  body: { dataset: DEFAULT_API_DATASET, filename: "Dataset", format: "json" },
}

const curl = FetchCodeBuilder.curl(props)

const axios = FetchCodeBuilder.axios(props)

export default function Example() {
  return <RouteExample axios={axios} curl={curl} />
}
