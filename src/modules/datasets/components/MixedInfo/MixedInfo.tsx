import { MiniCode, P } from "@modules/modal/shared/shared/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"

export default function MixedInfo() {
  return (
    <TypeInfo type="default" header="Object field">
      <P>
        Retorna un objeto con campos que pueden configurarse de la misma forma que un{" "}
        <MiniCode>Dataset</MiniCode>
      </P>
    </TypeInfo>
  )
}
