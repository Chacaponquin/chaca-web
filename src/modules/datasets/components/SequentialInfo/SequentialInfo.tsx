import {
  List,
  ListItem,
  MiniCode,
  P,
} from "@modules/modal/shared/shared/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"

export default function SequentialInfo() {
  return (
    <TypeInfo header="Sequential field">
      <P>
        Asigna cada uno de los valores definidos de forma secuencial para cada documento del{" "}
        <MiniCode>Dataset</MiniCode>
      </P>

      <List>
        <ListItem>
          <P>
            La cantidad de valores definidos debe ser igual o mayor a la cantidad de documentos a
            generar del <MiniCode>Dataset</MiniCode>
          </P>
        </ListItem>

        <ListItem>
          <P>
            Si se desea eliminar esta restricción se puede activar <MiniCode>loop</MiniCode> para
            que al acabarse los valores definidos se empiece por el primero nuevamente
          </P>
        </ListItem>
      </List>
    </TypeInfo>
  )
}
