import { SectionTitle } from "@modules/docs/domain/core/base"
import { Code, H2, Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"

interface Props {
  params: Param[]
  title: SectionTitle
  code: string | null
}

export default function MethodSection({ params, code, title }: Props) {
  return (
    <>
      <H2 title={title} code />

      {params.length > 0 && <Params params={params} />}

      {code && <Code title={`Examples`} code={code} language="typescript" />}
    </>
  )
}
