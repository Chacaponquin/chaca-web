import { DocSubSection } from "@modules/docs/domain/core/base"
import {
  ADDRESS,
  ANIMAL,
  COLOR,
  DATATYPE,
  DATE,
  FINANCE,
  ID,
  IMAGE,
  INTERNET,
  LOREM,
  PERSON,
  PHONE,
  SCIENCE,
  SYSTEM,
  VEHICLE,
  VIDEO,
  WORD,
} from "@modules/docs/domain/core/sections/modules"
import { Link, List, ListItem, P } from "@markdown/components/Markdown/components"
import { useLanguage } from "@modules/app/modules/language/hooks"

export default function SectionsList() {
  const { language } = useLanguage()

  const sections: DocSubSection[] = [
    ADDRESS,
    ANIMAL,
    COLOR,
    DATATYPE,
    DATE,
    FINANCE,
    ID,
    IMAGE,
    INTERNET,
    LOREM,
    PERSON,
    PHONE,
    SCIENCE,
    SYSTEM,
    VEHICLE,
    VIDEO,
    WORD,
  ]

  return (
    <List>
      {sections.map((s, index) => (
        <ListItem key={index}>
          <P>
            <Link to={s.redirect}>{s.title[language]}</Link>
          </P>
        </ListItem>
      ))}
    </List>
  )
}
