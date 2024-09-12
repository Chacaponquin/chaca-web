import { Param } from "./domain"
import { Card } from "./components"

interface Props {
  params: Param[]
}

export default function Params({ params }: Props) {
  return (
    <div className="flex flex-col mt-2 border-[1px] border-scale-7 rounded mb-4">
      {params.map((p, index) => (
        <Card
          key={index}
          description={p.description}
          name={p.name}
          params={p.params}
          required={p.required}
          types={p.types}
        />
      ))}
    </div>
  )
}
