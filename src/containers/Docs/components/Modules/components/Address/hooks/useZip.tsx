import { UTILS } from "@modules/docs/domain/core/sections/get-started"
import { Link } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

const ZIP_PARAMS: Param[] = [
  {
    name: "format",
    description: {
      es: (
        <>
          Formato del código utilizando la definición de{" "}
          <Link to={UTILS.replaceSymbolsUrl}>utils.replaceSymbols</Link>
        </>
      ),
      en: (
        <>
          Code format using the definition of{" "}
          <Link to={UTILS.replaceSymbolsUrl}>utils.replaceSymbols</Link>
        </>
      ),
    },
    params: [],
    required: false,
    types: [COMMON_TYPES.STRING],
  },
]

export default function useZip() {
  return { ZIP_PARAMS }
}
