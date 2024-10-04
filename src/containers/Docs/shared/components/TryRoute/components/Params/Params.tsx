import { ChacaTextInput } from "@form/components"
import { RequestParam } from "../../domain"
import { Section } from "../../shared/components"
import { useTranslation } from "@modules/app/modules/language/hooks"

interface Props {
  params: RequestParam[]
  handleChangeParam(index: number, value: string): void
  loading: boolean
}

export default function Params({ handleChangeParam, params, loading }: Props) {
  const { LABEL } = useTranslation({ LABEL: { en: "Params", es: "Parámetros" } })

  return (
    <Section title={LABEL}>
      <div className="grid grid-cols-2 w-full gap-y-1 gap-x-5 px-1 py-2">
        {params.map((p, index) => (
          <div key={index} className="flex items-center gap-x-3">
            <label htmlFor={p.param} className="text-sm text-white">
              {p.param}:
            </label>

            <ChacaTextInput
              id={p.param}
              value={p.value}
              disabled={loading}
              name={p.param}
              onChange={(v) => handleChangeParam(index, v)}
              size="sm"
              type="text"
            />
          </div>
        ))}
      </div>
    </Section>
  )
}
