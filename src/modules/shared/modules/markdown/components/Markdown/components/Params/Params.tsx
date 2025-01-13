import { Param } from "./domain"
import { Card } from "./components"
import { useLanguage } from "@modules/app/modules/language/hooks"

interface Props {
  params: Param[]
}

export default function Params({ params }: Props) {
  const { language } = useLanguage()

  return (
    <div className="flex flex-col my-3 border-[1px] border-scale-7 rounded">
      {params.map((p, index) => (
        <Card
          key={index}
          description={p.description[language]}
          name={p.name}
          params={p.params}
          required={p.required}
          types={p.types}
          alias={p.alias}
          default={p.default}
        />
      ))}
    </div>
  )
}
