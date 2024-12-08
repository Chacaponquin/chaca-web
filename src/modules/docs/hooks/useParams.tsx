import { Link, MiniCode } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"
import { DATASET, SCHEMA } from "../domain/core/sections/concepts"

export default function useParams() {
  const ZIP_PARAM: Param = {
    name: "zip",
    required: false,
    description: (
      <>
        Indica si los archivos creados se comprimirán en un archivo <MiniCode>zip</MiniCode>. El
        archivo tendrá como nombre el definido en la propiedad <MiniCode>filename</MiniCode>
      </>
    ),
    params: [],
    types: [COMMON_TYPES.BOOLEAN],
    default: "false",
  }

  const INDENT: Param = {
    name: "indent",
    required: false,
    description: "Tamaño de indentación a utilizar (en espacios)",
    default: "3",
    params: [],
    types: [COMMON_TYPES.NUMBER],
  }

  const SEPARATE: Param = {
    name: "separate",
    description: (
      <>
        Los datos de cada <Link to={SCHEMA.redirect}>schema</Link> del{" "}
        <Link to={DATASET.redirect}>dataset</Link> van a ser definidos en archivos separados. Este
        parámetro solo tiene efecto en caso de que se exporte un{" "}
        <Link to={DATASET.redirect}>dataset</Link>
      </>
    ),
    params: [],
    required: false,
    default: "false",
    types: [COMMON_TYPES.BOOLEAN],
  }

  const DECLARATION_ONLY: (d: string) => Param = (d: string) => {
    return {
      name: "declarationOnly",
      description: d,
      params: [],
      required: false,
      default: "false",
      types: [COMMON_TYPES.BOOLEAN],
    }
  }

  const SKIP_INVALID: Param = {
    name: "skipInvalid",
    description: (
      <>
        Los tipos de dato que no pueden ser exportados no serán considerados. En caso de que sea{" "}
        <MiniCode size="sm">false</MiniCode> se lanzará una excepción
      </>
    ),
    params: [],
    required: false,
    default: "false",
    types: [COMMON_TYPES.BOOLEAN],
  }

  function EXT(ext: string): Param {
    return {
      name: "ext",
      description: "Configuración del formato de archivo",
      types: [`'${ext}'`],
      params: [],
      required: true,
    }
  }

  return { ZIP_PARAM, EXT, SKIP_INVALID, DECLARATION_ONLY, SEPARATE, INDENT }
}
