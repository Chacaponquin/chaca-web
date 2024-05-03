import {
  List,
  ListItem,
  MiniCode,
  P,
} from "@modules/modal/shared/shared/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"

export default function CustomInfo() {
  return (
    <TypeInfo type="default" header="Custom field">
      <P>
        Ejecuta una función escrita en Javascript al generarse cada documento que retorne un valor
      </P>
      <List>
        <ListItem>
          <P>
            En caso de que la función retorne <MiniCode>undefined</MiniCode> el valor del campo en
            ese documento será <MiniCode>null</MiniCode>
          </P>
        </ListItem>
      </List>
    </TypeInfo>
  )
}
