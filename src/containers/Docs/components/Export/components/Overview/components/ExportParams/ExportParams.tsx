import { useExportParams } from "@containers/Docs/shared/hooks"
import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"

export default function ExportParams() {
  const { FILE_CONFIG_PARAM } = useExportParams()

  const params: Param[] = [
    {
      name: "data",
      description: { es: "Datos a exportar", en: "Data to export" },
      params: [],
      required: true,
      types: ["any"],
    },
    FILE_CONFIG_PARAM,
  ]

  return <Params params={params} />
}
