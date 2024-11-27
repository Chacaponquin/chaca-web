import { Info } from "@modules/modal/components"
import { P } from "@modules/modal/components/Info/components"

export default function LoopInfo() {
  return (
    <Info position="right">
      <P>
        Si está habilitado una vez que se acaben los valores secuenciales se empezará nuevamente por
        el primero de los valores
      </P>
    </Info>
  )
}
