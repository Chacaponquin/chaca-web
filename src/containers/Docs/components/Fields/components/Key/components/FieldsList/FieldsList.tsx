import { DocSubSection } from "@modules/docs/domain/core/base"
import { CUSTOM, REF, SEQUENCE } from "@modules/docs/domain/core/sections/field-types"
import { Link, List, ListItem, P } from "@markdown/components/Markdown/components"

interface Field {
  title: string
  section: DocSubSection
}

export default function FieldsList() {
  const fields: Field[] = [
    { section: CUSTOM, title: "Custom" },
    { section: SEQUENCE, title: "Sequence" },
    { section: REF, title: "Reference" },
  ]

  return (
    <List>
      {fields.map((f, index) => (
        <ListItem key={index}>
          <P>
            <Link to={f.section.redirect}>{f.title}</Link>
          </P>
        </ListItem>
      ))}
    </List>
  )
}
