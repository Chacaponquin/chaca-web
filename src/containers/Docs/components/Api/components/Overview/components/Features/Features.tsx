import { DocSubSection } from "@modules/docs/domain/core/base"
import {
  DATASET,
  MODULE_VALUE,
  SCHEMA_ARRAY,
  SCHEMA_OBJECT,
  TRANSFORM_DATASET,
  TRANSFORM_SCHEMA,
} from "@modules/docs/domain/core/sections/api"
import { Link, List, ListItem, P } from "@markdown/components/Markdown/components"
import { useLanguage } from "@modules/app/modules/language/hooks"

interface Item {
  text: { en: string; es: string }
  section: DocSubSection
}

const items: Item[] = [
  {
    section: MODULE_VALUE,
    text: {
      es: "Generar un valor proveniente de un módulo",
      en: "Generate a module value",
    },
  },
  {
    section: SCHEMA_OBJECT,
    text: { es: "Generar un objeto al definir un schema", en: "Generate a schema object" },
  },
  {
    section: SCHEMA_ARRAY,
    text: {
      es: "Generar un arreglo de objetos al definir un schema",
      en: "Generate a schema documents array",
    },
  },
  { section: DATASET, text: { en: "Generate dataset data", es: "Generar datos de un dataset" } },
  {
    section: TRANSFORM_SCHEMA,
    text: { en: "Transform schema data", es: "Transformar datos de un schema" },
  },
  {
    section: TRANSFORM_DATASET,
    text: { en: "Transform dataset data", es: "Transformar datos de un dataset" },
  },
]

export default function Features() {
  const { language } = useLanguage()

  return (
    <List>
      {items.map((i, index) => (
        <ListItem key={index}>
          <P>
            <Link to={i.section.redirect}>{i.text[language]}</Link>
          </P>
        </ListItem>
      ))}
    </List>
  )
}
