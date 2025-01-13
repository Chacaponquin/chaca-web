import { UTILS } from "@modules/docs/domain/core/sections/get-started"
import { Link } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

const NUMBER_PARAMS: Param[] = [
  {
    name: "format",
    description: {
      es: (
        <>
          Formato del número telefónico utilizando la estructura de símbolos{" "}
          <Link to={UTILS.replaceSymbolsUrl}>utils.replaceSymbols</Link>
        </>
      ),
      en: (
        <>
          Phone number format using the{" "}
          <Link to={UTILS.replaceSymbolsUrl}>utils.replaceSymbols</Link> symbol structure
        </>
      ),
    },
    params: [],
    required: false,
    types: [COMMON_TYPES.STRING],
  },
]

export default function useNumberParams() {
  return { NUMBER_PARAMS }
}
