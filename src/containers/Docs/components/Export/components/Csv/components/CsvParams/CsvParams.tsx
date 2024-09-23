import { useParams } from "@containers/Docs/components/Export/shared/hooks"
import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"

export default function CsvParams() {
  const { ZIP_PARAM } = useParams()

  const params: Param[] = [
    {
      name: "ext",
      description: "Configuración del formato de archivo",
      types: ["'csv'"],
      params: [],
      required: true,
    },
    ZIP_PARAM,
  ]

  return <Params params={params} />
}
