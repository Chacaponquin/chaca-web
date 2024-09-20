import H4 from "../../../H4/H4"
import MiniCode from "../../../MiniCode/MiniCode"
import { Param } from "../../domain"
import { Required, SubParams } from "./components"

interface Props {
  name: string
  description: React.ReactNode
  required: boolean
  params: Param[]
  types: string[]
}

export default function Card({ description, name, required, params, types }: Props) {
  return (
    <article className="flex flex-col bg-scale-3 rounded">
      <header className="flex items-center gap-x-3.5 dark:bg-scale-2 px-4 py-2 rounded">
        <H4>{name}</H4>

        {required && <Required />}

        <MiniCode size="xs">{types.join("|")}</MiniCode>
      </header>

      <p className="my-1 text-white text-sm px-4 py-1.5 leading-6">{description}</p>

      {params.length > 0 && <SubParams params={params} name={name} />}
    </article>
  )
}
