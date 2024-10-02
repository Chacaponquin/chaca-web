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
  code: string
}

export default function MethodSection({ method, params, code }: Props) {
  return (
    <>
      <H2>
        <MiniCode>{method}</MiniCode>
      </H2>

      {params.length > 0 && <Params params={params} />}

      <Code title="" code={code} language="typescript" />
    </>
  )
}
