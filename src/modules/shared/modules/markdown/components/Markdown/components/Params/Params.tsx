import { Param } from "./domain"
import { Card } from "./components"

interface Props {
  params: Param[]
}

export default function Params({ params }: Props) {
  return (
    <div className="flex flex-col my-3 border-[1px] border-scale-7 rounded">
      {params.map((p, index) => (
        <Card
          key={index}
          description={p.description}
          name={p.name}
          params={p.params}
          required={p.required}
          types={p.types}
          alias={p.alias}
        />
      ))}
    </div>
  )
}
