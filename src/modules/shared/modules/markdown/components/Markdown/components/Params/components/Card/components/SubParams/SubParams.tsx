import { useState } from "react"
import { Param } from "../../../../domain"
import Card from "../../Card"
import { Header } from "./components"

interface Props {
  params: Param[]
  name: string
}

export default function SubParams({ params, name }: Props) {
  const [open, setOpen] = useState(true)

  function handleChange() {
    setOpen((prev) => !prev)
  }

  return (
    <div className="w-full px-4 mb-3">
      <div className="w-full flex flex-col border-[1px] border-scale-7 rounded">
        <Header handleChange={handleChange} open={open} name={name} />

        {open && (
          <div className="flex flex-col">
            {params.map((p, index) => (
              <Card
                key={index}
                types={p.types}
                name={p.name}
                params={p.params}
                required={p.required}
                description={p.description}
                default={p.default}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
