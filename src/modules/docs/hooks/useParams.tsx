import { MiniCode } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

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

  function EXT(ext: string): Param {
    return {
      name: "ext",
      description: "Configuración del formato de archivo",
      types: [`'${ext}'`],
      params: [],
      required: true,
    }
  }

  return { ZIP_PARAM, EXT }
}
