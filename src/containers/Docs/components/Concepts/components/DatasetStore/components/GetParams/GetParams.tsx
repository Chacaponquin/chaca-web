import { MiniCode, Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

const params: Param[] = [
  {
    name: "route",
    description: {
      es: (
        <>
          Ruta del campo del cual se quieren obtener los valores. Esta ruta indica la profundidad en
          la que se encuentra el campo separando los nombres por <MiniCode>.</MiniCode>. Por
          ejemplo: <MiniCode>User.id</MiniCode>
        </>
      ),
      en: (
        <>
          Field path from which you want to get the values. This path indicates the field location,
          separating the names by <MiniCode>.</MiniCode>. For example: <MiniCode>User.id</MiniCode>
        </>
      ),
    },
    params: [],
    required: true,
    types: [COMMON_TYPES.STRING],
  },
  {
    name: "config",
    description: {
      es: "Configuración para la búsqueda de valores",
      en: "Search values configuration",
    },
    params: [
      {
        name: "where",
        required: false,
        description: {
          en: (
            <>
              Function that is executed for all documents generated from the schema. This receives
              an object with all the fields of the generated schema and returns a{" "}
              <MiniCode>boolean</MiniCode> that indicates if the document satisfies the conditions
              to extract the value. Similar to <MiniCode>Array.filter</MiniCode>
            </>
          ),
          es: (
            <>
              Función que se ejecuta para todos los documentos generados del schema. Esta recibe un
              objeto con todos los campos del schema generados y devuelve un{" "}
              <MiniCode>boolean</MiniCode> que indica si el documento cumple las condiciones para
              extraer el valor. Similar a <MiniCode>Array.filter</MiniCode>
            </>
          ),
        },
        params: [],
        types: ["GetStoreWhere = (fields: any) => boolean"],
      },
    ],
    required: false,
    types: ["GetStoreConfig"],
  },
]

export default function GetParams() {
  return <Params params={params} />
}
