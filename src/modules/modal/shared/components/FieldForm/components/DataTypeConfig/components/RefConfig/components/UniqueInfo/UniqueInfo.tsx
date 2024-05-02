import { Info } from "@modules/modal/shared/shared/components"
import { MiniCode, P } from "@modules/modal/shared/shared/components/Info/components"

export default function UniqueInfo() {
  return (
    <Info position="right">
      <P>
        Si está habilitado la referencia escogida para este campo será único y no se repetirá en
        cualquier otro documento de este <MiniCode>Dataset</MiniCode>
      </P>
    </Info>
  )
}
