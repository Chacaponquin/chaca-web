import { Info } from "@modules/modal/shared/shared/components"
import {
  List,
  ListItem,
  MiniCode,
  P,
} from "@modules/modal/shared/shared/components/Info/components"

export default function Information() {
  return (
    <Info position="right">
      <P>Indica si el valor a retornar será un arreglo del tipo de dato seleccionado</P>
      <List>
        <ListItem>
          <MiniCode>min</MiniCode> es la longitud mínima que puede tener el arreglo
        </ListItem>
        <ListItem>
          <MiniCode>max</MiniCode> es la longitud máxima que puede tener el arreglo
        </ListItem>
      </List>
    </Info>
  )
}
