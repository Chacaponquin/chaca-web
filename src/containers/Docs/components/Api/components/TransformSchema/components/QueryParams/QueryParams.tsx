import { useParams } from "@containers/Docs/components/Api/shared/hooks"
import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function QueryParams() {
  const { COUNT_PARAM } = useParams()

  return <Params params={[COUNT_PARAM]} />
}
