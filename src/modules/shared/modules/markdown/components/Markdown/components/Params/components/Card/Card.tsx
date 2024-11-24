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
  alias?: string
  default?: string
}

export default function Card({
  description,
  name,
  required,
  params,
  types,
  alias,
  default: idefault,
}: Props) {
  return (
    <article className="flex flex-col bg-scale-3 rounded">
      <header className="flex items-center justify-between dark:bg-scale-2 px-4 py-2 rounded gap-x-3">
        <section className="flex items-center gap-x-3.5">
          {alias ? (
            <H4>
              {name} ({alias})
            </H4>
          ) : (
            <H4>{name}</H4>
          )}

          {required && <Required />}

          {types.length > 0 && <MiniCode size="xs">{types.join(" | ")}</MiniCode>}
        </section>

        <section>
          {idefault !== undefined && (
            <p className="text-white text-xs">
              Default: <MiniCode size="xs">{idefault}</MiniCode>
            </p>
          )}
        </section>
      </header>

      <p className="my-1 text-white text-sm px-4 py-1.5 leading-6">{description}</p>

      {params.length > 0 && <SubParams params={params} name={name} />}
    </article>
  )
}
