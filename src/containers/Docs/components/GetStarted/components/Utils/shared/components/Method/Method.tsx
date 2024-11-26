import { SectionTitle } from "@modules/docs/domain/core/base"
import { Code, H2, Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"

interface Props {
  title: SectionTitle
  children: React.ReactNode
  params: Param[]
  code: string | null
}

export default function Method({ title, params, code, children }: Props) {
  return (
    <>
      <H2 title={title} code />

      {children}

      {params.length > 0 && <Params params={params} />}

      {code && <Code code={code} language="typescript" title="Examples" />}
    </>
  )
}
