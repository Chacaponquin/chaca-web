import { Info } from "@modules/modal/shared/shared/components"
import { MiniCode, P } from "@modules/modal/shared/shared/components/Info/components"

export default function Information() {
  return (
    <Info position="right">
      <P>
        Valor entre <MiniCode>0</MiniCode> y <MiniCode>100</MiniCode> que indica las probabilidades
        de que el campo tenga valor <MiniCode>null</MiniCode>
      </P>
      <P>
        Mientras más se disminuya el valor menos probabilidades existen de que el valor sea{" "}
        <MiniCode>null</MiniCode>
      </P>
    </Info>
  )
}
