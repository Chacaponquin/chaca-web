import { CodesCard, MiniCode, P } from "@markdown/components/Markdown/components"
import { CodeSection } from "@markdown/components/Markdown/components/CodesCard/domain"
import { Language } from "prism-react-renderer"
import { DatasetDefinition } from "./components"
import { useEffect, useState } from "react"
import { useFetch } from "@modules/app/modules/http/hooks"
import { API_ROUTES } from "@modules/app/constants/ROUTES"
import { TransformDTO, TransformResult } from "./dto/transform"

interface Props {
  language: Language
  extension: string
}

export default function DatasetResult({ extension, language }: Props) {
  const { post } = useFetch()
  const [sections, setSections] = useState<CodeSection[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    post<TransformResult[], TransformDTO>({
      url: API_ROUTES.API.TRANSFORM_DATASET,
      body: {
        filename: "Data",
        dataset: {
          User: {
            schema: {
              id: { type: "sequence" },
              username: { type: "module", module: "internet.username" },
              email: { type: "module", module: "internet.email" },
            },
            count: 3,
          },
          Product: {
            schema: {
              id: { type: "sequence" },
              title: { type: "module", module: "lorem.words" },
              price: {
                type: "module",
                module: "datatype.float",
                params: { precision: 2, min: 0.2, max: 100 },
              },
            },
            count: 5,
          },
        },
        format: extension,
      },
      onFinally() {
        setLoading(false)
      },
      onSuccess(data) {
        setSections(
          data.map((r) => {
            return { code: r.code, title: { en: r.file, es: r.file }, language: language }
          }),
        )
      },
    })
  }, [language])

  return (
    <>
      <P>
        Por ejemplo, al exportar el siguiente dataset en formato <MiniCode>{extension}</MiniCode> se
        crean los siguientes archivos.
      </P>

      <DatasetDefinition extension={extension} />

      {sections.length > 0 && <CodesCard sections={sections} loading={loading} />}
    </>
  )
}
