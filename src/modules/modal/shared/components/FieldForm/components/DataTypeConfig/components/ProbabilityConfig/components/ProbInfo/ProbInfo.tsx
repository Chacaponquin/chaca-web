import { Info } from "@modules/modal/shared/shared/components"
import { P } from "@modules/modal/shared/shared/components/Info/components"

export default function ProbInfo() {
  return (
    <Info position="right">
      <P>El valor de la probabilidad debe encontrarse entre 0 y 1</P>
    </Info>
  )
}
