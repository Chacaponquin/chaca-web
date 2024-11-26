import { DocSubSection } from "@modules/docs/domain/core/base"
import {
  CSV,
  JAVA,
  JS,
  JSON,
  POSTGRES,
  PYTHON,
  TYPESCRIPT,
  YAML,
} from "@modules/docs/domain/core/sections/export"
import { Link, List, ListItem, P } from "@markdown/components/Markdown/components"

interface Format {
  title: string
  section: DocSubSection
}

export default function FormatsList() {
  const formats: Format[] = [
    { title: "Java", section: JAVA },
    { title: "CSV", section: CSV },
    { title: "Typescript", section: TYPESCRIPT },
    { section: JSON, title: "JSON" },
    { title: "Javascript", section: JS },
    { title: "Yaml", section: YAML },
    { section: POSTGRES, title: "PostgreSQL" },
    { title: "Python", section: PYTHON },
  ]

  return (
    <List>
      {formats.map((f, index) => (
        <ListItem key={index}>
          <P>
            <Link to={f.section.redirect}>{f.title}</Link>
          </P>
        </ListItem>
      ))}
    </List>
  )
}
