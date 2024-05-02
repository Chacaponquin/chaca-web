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
      <P>
        Indica si el campo es llave del Dataset. Similar al concepto de{" "}
        <MiniCode>PRIMARY KEY</MiniCode> en SQL
      </P>
      <List>
        <ListItem>
          Solo los campos <MiniCode>key</MiniCode> pueden ser referenciados
        </ListItem>
      </List>
    </Info>
  )
}
