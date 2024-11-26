import { DocSubSection } from "@modules/docs/domain/core/base"
import {
  ENUM,
  PICK,
  PROBABILITY,
  SEQUENCE,
  SEQUENTIAL,
} from "@modules/docs/domain/core/sections/field-types"
import { Link, List, ListItem, P } from "@markdown/components/Markdown/components"

interface FieldItem {
  title: string
  section: DocSubSection
}

export default function FieldsList() {
  const fields: FieldItem[] = [
    { section: SEQUENCE, title: "Sequence" },
    { section: SEQUENTIAL, title: "Sequential" },
    { section: PICK, title: "Pick" },
    { section: ENUM, title: "Enum" },
    { section: PROBABILITY, title: "Probability" },
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
