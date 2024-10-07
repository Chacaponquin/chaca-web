import { useParams } from "@modules/docs/hooks"
import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"

export default function CsvParams() {
  const { ZIP_PARAM, EXT } = useParams()

  const params: Param[] = [EXT("csv"), ZIP_PARAM]

  return <Params params={params} />
}
