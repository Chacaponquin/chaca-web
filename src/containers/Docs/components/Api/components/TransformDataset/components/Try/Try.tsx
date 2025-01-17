import { USER_PRODUCT_DATASET } from "@containers/Docs/components/Api/shared/domain/dataset-schema"
import { TryRoute } from "@containers/Docs/shared/components"

export default function Try() {
  const body = JSON.stringify(
    { dataset: USER_PRODUCT_DATASET, filename: "Dataset", format: "json" },
    undefined,
    3,
  )

  return (
    <TryRoute
      result="json"
      body={body}
      url="api/v1/dataset/transform"
      method="post"
      initFetch
      params={[]}
    />
  )
}
