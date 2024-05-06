import { useTranslationComponent } from "@modules/app/modules/language/hooks"
import { Info } from "@modules/modal/shared/shared/components"
import { MiniCode, P } from "@modules/modal/shared/shared/components/Info/components"

export default function Information() {
  const { INFO, WARNING } = useTranslationComponent({
    INFO: {
      en: (
        <P>
          Value between <MiniCode>0</MiniCode> and <MiniCode>100</MiniCode> that indicates the
          probability that the field has the value <MiniCode>null</MiniCode>
        </P>
      ),
      es: (
        <P>
          Valor entre <MiniCode>0</MiniCode> y <MiniCode>100</MiniCode> que indica las
          probabilidades de que el campo tenga valor <MiniCode>null</MiniCode>
        </P>
      ),
    },

    WARNING: {
      en: (
        <P>
          The more the value is decreased, the less likely it is that the returned value will be{" "}
          <MiniCode>null</MiniCode>
        </P>
      ),
      es: (
        <P>
          Mientras más se disminuye el valor menos probabilidades existen de que el valor retornado
          sea <MiniCode>null</MiniCode>
        </P>
      ),
    },
  })

  return (
    <Info position="right">
      {INFO}
      {WARNING}
    </Info>
  )
}
