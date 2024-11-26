import { MiniCode, P, Strong, Table, Td, Th } from "@markdown/components/Markdown/components"

interface Code {
  code: number
  description: React.ReactNode
}

export default function CodesTable() {
  const codes: Code[] = [
    { code: 200, description: "Todo funcionó de forma correcta" },
    {
      code: 400,
      description: "La petición fue inaceptable debido a un parámetro faltando o erroneo",
    },
    { code: 401, description: "Token de acceso inválido" },
    { code: 403, description: "Permiso requerido para acceder al recurso" },
    { code: 404, description: "Recurso no encontrado" },
    { code: 429, description: "Límite de peticiones sobrepasado" },
    { code: 500, description: "Algún error ocurrió en la ejecución del proceso" },
  ]

  return (
    <Table>
      <thead className="">
        <Th>
          <P>
            <Strong>Código</Strong>
          </P>
        </Th>
        <Th>
          <P>
            <Strong>Descripción</Strong>
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
              <P>{c.description}</P>
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
