import { MiniCode, P, Strong, Table, Td, Th } from "@markdown/components/Markdown/components"
import { useLanguage, useTranslation } from "@modules/app/modules/language/hooks"

interface Code {
  code: number
  description: { en: React.ReactNode; es: React.ReactNode }
}

const codes: Code[] = [
  {
    code: 200,
    description: { es: "Todo funcionó de forma correcta", en: "Todo funcionó de forma correcta" },
  },
  {
    code: 400,
    description: {
      es: "La petición fue inaceptable debido a un parámetro faltando o erroneo",
      en: "The request was unacceptable due to a missing or incorrect parameter",
    },
  },
  { code: 401, description: { es: "Token de acceso inválido", en: "Invalid access token" } },
  {
    code: 403,
    description: {
      es: "Permiso requerido para acceder al recurso",
      en: "Permission required to access the resource",
    },
  },
  { code: 404, description: { es: "Recurso no encontrado", en: "Resource not found" } },
  {
    code: 429,
    description: { es: "Límite de peticiones sobrepasado", en: "Request limit exceeded" },
  },
  {
    code: 500,
    description: {
      es: "Algún error ocurrió en la ejecución del proceso",
      en: "An error occurred during the execution of the process.",
    },
  },
]

export default function CodesTable() {
  const { language } = useLanguage()

  const { CODE, DESCRIPTION } = useTranslation({
    CODE: { en: "Code", es: "Código" },
    DESCRIPTION: { en: "Description", es: "Descripción" },
  })

  return (
    <Table>
      <thead className="">
        <Th>
          <P>
            <Strong>{CODE}</Strong>
          </P>
        </Th>
        <Th>
          <P>
            <Strong>{DESCRIPTION}</Strong>
          </P>
        </Th>
      </thead>

      <tbody>
        {codes.map((c, index) => (
          <tr key={index}>
            <Td>
              <P>
                <MiniCode size="sm">{c.code}</MiniCode>
              </P>
            </Td>

            <Td>
              <P>{c.description[language]}</P>
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
