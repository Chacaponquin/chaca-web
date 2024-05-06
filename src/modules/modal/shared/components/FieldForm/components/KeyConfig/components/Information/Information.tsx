import { useTranslationComponent } from "@modules/app/modules/language/hooks"
import { Info } from "@modules/modal/shared/shared/components"
import {
  List,
  ListItem,
  MiniCode,
  P,
} from "@modules/modal/shared/shared/components/Info/components"

export default function Information() {
  const { WARNING, KEY_INFO } = useTranslationComponent({
    WARNING: {
      en: (
        <P>
          Indicates if the field is a key in the Dataset. Similar to the concept of{" "}
          <MiniCode>PRIMARY KEY</MiniCode> in SQL
        </P>
      ),
      es: (
        <P>
          Indica si el campo es llave del Dataset. Similar al concepto de{" "}
          <MiniCode>PRIMARY KEY</MiniCode> en SQL
        </P>
      ),
    },

    KEY_INFO: {
      en: (
        <P>
          Only <MiniCode>key</MiniCode> fields can be referenced
        </P>
      ),
      es: (
        <P>
          Solo los campos <MiniCode>key</MiniCode> pueden ser referenciados
        </P>
      ),
    },
  })

  return (
    <Info position="right">
      {WARNING}

      <List>
        <ListItem>{KEY_INFO}</ListItem>
      </List>
    </Info>
  )
}
