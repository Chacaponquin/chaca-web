import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"

export default function KeyParams() {
  const params: Param[] = [
    {
      name: "field",
      description: {
        es: "Definición del tipo de campo",
        en: "Field type that will return the value",
      },
      params: [],
      required: true,
      types: ["KeyFieldProps = SequenceField | CustomField | RefField"],
    },
  ]

  return <Params params={params} />
}
