import { useParams } from "@containers/Docs/components/Api/shared/hooks"
import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"

export default function QueryParams() {
  const { COUNT_PARAM } = useParams()

  const params: Param[] = [COUNT_PARAM]

  return <Params params={params} />
}
