import { SectionTitle } from "@modules/docs/domain/core/base"
import { COMMAND_LINE } from "@modules/docs/domain/core/sections/get-started"
import {
  EXPORT_CSV,
  EXPORT_JAVA,
  EXPORT_JS,
  EXPORT_JSON,
  EXPORT_POSTGRES,
  EXPORT_PYTHON,
  EXPORT_TS,
  EXPORT_YAML,
} from "@modules/docs/domain/core/sections/get-started/command-line"
import { Link, List, ListItem, P } from "@markdown/components/Markdown/components"

export default function Sections() {
  const sections: SectionTitle[] = [
    EXPORT_CSV,
    EXPORT_JAVA,
    EXPORT_JSON,
    EXPORT_JS,
    EXPORT_PYTHON,
    EXPORT_TS,
    EXPORT_YAML,
    EXPORT_POSTGRES,
  ]

  return (
    <List>
      {sections.map((s, index) => (
        <ListItem key={index}>
          <P>
            <Link to={COMMAND_LINE.buildUrl(s.id)}>{s.title}</Link>
          </P>
        </ListItem>
      ))}
    </List>
  )
}
