import { USER_PRODUCT_DATASET } from "@containers/Docs/components/Api/shared/domain/dataset"
import { TryRoute } from "@containers/Docs/shared/components"

export default function Try() {
  const body = JSON.stringify(USER_PRODUCT_DATASET, undefined, 3)

  return (
    <TryRoute result="json" body={body} url="api/v1/dataset" method="post" initFetch params={[]} />
  )
}
