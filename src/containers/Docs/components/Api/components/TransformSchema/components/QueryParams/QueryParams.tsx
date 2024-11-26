import { useParams } from "@containers/Docs/components/Api/shared/hooks"
import { Params } from "@markdown/components/Markdown/components"

export default function QueryParams() {
  const { COUNT_PARAM } = useParams()

  return <Params params={[COUNT_PARAM]} />
}
