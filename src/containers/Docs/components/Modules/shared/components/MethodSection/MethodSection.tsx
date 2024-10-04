import {
  Code,
  H2,
  MiniCode,
  Params,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"

interface Props {
  apiId: string
  method: string
  params: Param[]
  title: string
  code?: string
}

export default function MethodSection({ method, params, code, title }: Props) {
  return (
    <>
      <H2>
        <MiniCode size="xl">{method}</MiniCode>
      </H2>

      {params.length > 0 && <Params params={params} />}

      {code && <Code title={`${title} examples`} code={code} language="typescript" />}
    </>
  )
}
