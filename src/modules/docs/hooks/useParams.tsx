import { Link, MiniCode } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"
import { DATASET, SCHEMA } from "../domain/core/sections/concepts"
import { TranslationConfig } from "@modules/app/modules/language/interfaces"

export default function useParams() {
  const ZIP_PARAM: Param = {
    name: "zip",
    required: false,
    description: {
      es: (
        <>
          Indica si los archivos creados se comprimirán en un archivo <MiniCode>zip</MiniCode>. El
          archivo tendrá como nombre el definido en la propiedad <MiniCode>filename</MiniCode>
        </>
      ),
      en: (
        <>
          Indicates if the created files will be compressed into a <MiniCode>zip</MiniCode> file.
          The file will have the name defined in the <MiniCode>filename</MiniCode> property
        </>
      ),
    },
    params: [],
    types: [COMMON_TYPES.BOOLEAN],
    default: "false",
  }

  const INDENT: Param = {
    name: "indent",
    required: false,
    description: {
      es: "Tamaño de indentación a utilizar (en espacios)",
      en: "Indentation size to use (in spaces)",
    },
    default: "3",
    params: [],
    types: [COMMON_TYPES.NUMBER],
  }

  const SEPARATE: Param = {
    name: "separate",
    description: {
      es: (
        <>
          Los datos de cada <Link to={SCHEMA.redirect}>schema</Link> del{" "}
          <Link to={DATASET.redirect}>dataset</Link> van a ser definidos en archivos separados.
        </>
      ),
      en: (
        <>
          The data for each <Link to={SCHEMA.redirect}>schema</Link> of the{" "}
          <Link to={DATASET.redirect}>dataset</Link> will be defined in separate files.
        </>
      ),
    },
    params: [],
    required: false,
    default: "false",
    types: [COMMON_TYPES.BOOLEAN],
  }

  const DECLARATION_ONLY: (d: TranslationConfig<string>) => Param = (
    d: TranslationConfig<string>,
  ) => {
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
    description: {
      es: (
        <>
          Los tipos de dato que no pueden ser exportados no serán considerados. En caso de que sea{" "}
          <MiniCode size="sm">false</MiniCode> se lanzará una excepción
        </>
      ),
      en: (
        <>
          Data types that cannot be exported will not be considered. If{" "}
          <MiniCode size="sm">false</MiniCode> an exception will be thrown
        </>
      ),
    },
    params: [],
    required: false,
    default: "false",
    types: [COMMON_TYPES.BOOLEAN],
  }

  function EXT(ext: string): Param {
    return {
      name: "ext",
      description: { es: "Configuración del formato de archivo", en: "File format configuration" },
      types: [`'${ext}'`],
      params: [],
      required: true,
    }
  }

  return { ZIP_PARAM, EXT, SKIP_INVALID, DECLARATION_ONLY, SEPARATE, INDENT }
}
