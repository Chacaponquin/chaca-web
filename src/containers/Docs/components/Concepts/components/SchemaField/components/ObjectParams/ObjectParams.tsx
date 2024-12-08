import { MiniCode, Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"

export default function ObjectParams() {
  const params: Param[] = [
    {
      name: "type",
      description: "Definición del tipo de campo",
      params: [],
      required: true,
      types: ["FieldTypes"],
    },
    {
      name: "isArray",
      description:
        "Indica si el valor generado es un arreglo de valores con tipo de campo definido",
      params: [],
      required: false,
      types: ["IsArrayConfig"],
    },
    {
      name: "possibleNull",
      description: (
        <>
          Indica la probabilidad de que el valor generado sea <MiniCode size="sm">null</MiniCode>
        </>
      ),
      params: [],
      required: false,
      types: ["PossibleNullConfig"],
    },
  ]

  return <Params params={params} />
}
