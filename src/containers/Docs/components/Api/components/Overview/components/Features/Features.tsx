import { DocSubSection } from "@modules/docs/domain/core/base"
import { MODULE_VALUE, SCHEMA_ARRAY, SCHEMA_OBJECT } from "@modules/docs/domain/core/sections/api"
import {
  Link,
  List,
  ListItem,
  P,
} from "@modules/shared/modules/markdown/components/Markdown/components"

interface Item {
  text: string
  section: DocSubSection
}

export default function Features() {
  const items: Item[] = [
    { section: MODULE_VALUE, text: "Generar un valor proveniente de un módulo" },
    { section: SCHEMA_OBJECT, text: "Generar un objeto al definir un schema" },
    { section: SCHEMA_ARRAY, text: "Generar un arreglo de objetos al definir un schema" },
  ]

  return (
    <List>
      {items.map((i, index) => (
        <ListItem key={index}>
          <P>
            <Link to={i.section.redirect}>{i.text}</Link>
          </P>
        </ListItem>
      ))}
    </List>
  )
}
