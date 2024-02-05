import { Home } from "@modules/app/modules/icon/components"
import { Card } from "./components"

interface Props {
  location: Array<string>
}

export default function Location({ location }: Props) {
  return (
    <header className="flex pt-4 mb-8 items-center gap-x-6">
      <div className="dark:fill-white fill-black">
        <Home size={24} />
      </div>

      {location.map((loc, index) => (
        <Card key={index} name={loc} isDoc={index === location.length - 1} />
      ))}
    </header>
  )
}
