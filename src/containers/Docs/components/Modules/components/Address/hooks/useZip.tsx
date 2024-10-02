import { UTILS } from "@modules/docs/domain/core/sections/get-started"
import { Link } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export default function useZip() {
  const ZIP_PARAMS: Param[] = [
    {
      name: "format",
      description: (
        <>
          Formato del código utilizando la definición de{" "}
          <Link to={UTILS.buildUrl(UTILS.replaceSymbolsId)}>utils.replaceSymbols</Link>
        </>
      ),
      params: [],
      required: false,
      types: [COMMON_TYPES.STRING],
    },
  ]

  return { ZIP_PARAMS }
}
