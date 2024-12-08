import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { useFunctionParams } from "@containers/Docs/shared/hooks"

export default function Props() {
  const { CURRENT_FIELDS_PARAM, DATASET_STORE_PARAM } = useFunctionParams()

  const params: Param[] = [CURRENT_FIELDS_PARAM, DATASET_STORE_PARAM]

  return <Params params={params} />
}
