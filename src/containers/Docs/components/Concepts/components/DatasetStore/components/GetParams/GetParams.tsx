import { MiniCode, Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"
import { Fragment } from "react"

export default function GetParams() {
  const params: Param[] = [
    {
      name: "route",
      description: (
        <Fragment>
          Ruta del campo del cual se quieren obtener los valores. Esta ruta indica la profundidad en
          la que se encuentra el campo separando los nombres por <MiniCode>.</MiniCode>. Por
          ejemplo: <MiniCode>User.id</MiniCode>
        </Fragment>
      ),
      params: [],
      required: true,
      types: [COMMON_TYPES.STRING],
    },
    {
      name: "config",
      description: "Configuración para la búsqueda de valores",
      params: [
        {
          name: "where",
          required: false,
          description: (
            <Fragment>
              Función que se ejecuta para todos los documentos generados del schema. Esta recibe un
              objeto con todos los campos del schema generados y devuelve un{" "}
              <MiniCode>boolean</MiniCode> que indica si el documento cumple las condiciones para
              extraer el valor. Similar a <MiniCode>Array.filter</MiniCode>
            </Fragment>
          ),
          params: [],
          types: ["GetStoreWhere = (fields: any) => boolean"],
        },
      ],
      required: false,
      types: ["GetStoreConfig"],
    },
  ]

  return <Params params={params} />
}
