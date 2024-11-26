import { MiniCode, P } from "@markdown/components/Markdown/components"

interface Props {
  format: string
  extension: string
}

export default function Header({ extension, format }: Props) {
  return (
    <P>
      Para exportar datos en archivos con extensión <MiniCode>{extension}</MiniCode> se puede
      definir <MiniCode>{format}</MiniCode> en la propiedad <MiniCode>format</MiniCode> o puede
      configurar un objeto con los siguientes parámetros.
    </P>
  )
}
