import { Adventage } from "../../interfaces"
import { Card } from "./components"

interface Props {
  cards: Array<Adventage>
}

export default function Cards({ cards }: Props) {
  return (
    <div className="gap-x-10 gap-y-7 mt-5 grid lg:grid-cols-2 grid-cols-1">
      {cards.map((a, index) => (
        <Card key={index} content={a.content} title={a.title} icon={a.icon} />
      ))}
    </div>
  )
}
