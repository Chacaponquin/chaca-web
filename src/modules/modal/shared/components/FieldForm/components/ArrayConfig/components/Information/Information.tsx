import { useTranslation, useTranslationComponent } from "@modules/app/modules/language/hooks"
import { Info } from "@modules/modal/shared/shared/components"
import {
  List,
  ListItem,
  MiniCode,
  P,
} from "@modules/modal/shared/shared/components/Info/components"

export default function Information() {
  const { INFO } = useTranslation({
    INFO: {
      en: "Indicates whether the value to be returned will be an array of the selected data type",
      es: "Indica si el valor a retornar será un arreglo del tipo de dato seleccionado",
    },
  })

  const { MIN, MAX } = useTranslationComponent({
    MIN: {
      en: (
        <P>
          <MiniCode>min</MiniCode> is the minimum length that the array can have
        </P>
      ),
      es: (
        <P>
          <MiniCode>min</MiniCode> es la longitud mínima que puede tener el arreglo
        </P>
      ),
    },

    MAX: {
      en: (
        <P>
          <MiniCode>max</MiniCode> is the maximum length that the array can have
        </P>
      ),
      es: (
        <P>
          <MiniCode>max</MiniCode> es la longitud máxima que puede tener el arreglo
        </P>
      ),
    },
  })

  return (
    <Info position="right">
      <P>{INFO}</P>

      <List>
        <ListItem>{MIN}</ListItem>
        <ListItem>{MAX}</ListItem>
      </List>
    </Info>
  )
}
