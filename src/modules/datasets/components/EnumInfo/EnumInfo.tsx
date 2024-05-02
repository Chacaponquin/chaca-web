import { List, ListItem, P } from "@modules/modal/shared/shared/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"

export default function EnumInfo() {
  return (
    <TypeInfo header="Enum field">
      <P>Retorna uno de todos los posibles valores definidos</P>
      <List>
        <ListItem>
          <P>Se debe definir al menos 1 valor para que pueda ser seleccionado</P>
        </ListItem>
      </List>
    </TypeInfo>
  )
}
