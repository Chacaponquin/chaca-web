import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { useFunctionParams } from "@containers/Docs/shared/hooks"

export default function WhereParams() {
  const { CURRENT_FIELDS_PARAM, DATASET_STORE_PARAM } = useFunctionParams()

  const params: Param[] = [
    CURRENT_FIELDS_PARAM,
    {
      name: "refFields",
      description: {
        es: "Objeto con los campos generados del documento a referenciar",
        en: "Object with the generated fields of the document to be referenced",
      },
      params: [],
      required: false,
      types: ["any"],
    },
    DATASET_STORE_PARAM,
  ]

  return <Params params={params} />
}
