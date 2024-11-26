import { UTILS } from "@modules/docs/domain/core/sections/get-started"
import { Link } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function useNumberParams() {
  const NUMBER_PARAMS: Param[] = [
    {
      name: "format",
      description: (
        <>
          Formato del número telefónico utilizando la estructura de símbolos{" "}
          <Link to={UTILS.replaceSymbolsUrl}>utils.replaceSymbols</Link>
        </>
      ),
      params: [],
      required: false,
      types: [COMMON_TYPES.STRING],
    },
  ]

  return { NUMBER_PARAMS }
}
