import { MiniCode, Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"

export default function ObjectParams() {
  const params: Param[] = [
    {
      name: "type",
      description: { es: "Definición del tipo de campo", en: "Field type definition" },
      params: [],
      required: true,
      types: ["FieldTypes"],
    },
    {
      name: "isArray",
      description: {
        es: "Indica si el valor generado es un arreglo de valores con tipo de campo definido",
        en: "Indicates if the generated value is an array of values with a defined field type",
      },
      params: [],
      required: false,
      types: ["IsArrayConfig"],
    },
    {
      name: "possibleNull",
      description: {
        es: (
          <>
            Indica la probabilidad de que el valor generado sea <MiniCode size="sm">null</MiniCode>
          </>
        ),
        en: (
          <>
            Indicates the probability that the generated value is{" "}
            <MiniCode size="sm">null</MiniCode>
          </>
        ),
      },
      params: [],
      required: false,
      types: ["PossibleNullConfig"],
    },
  ]

  return <Params params={params} />
}
