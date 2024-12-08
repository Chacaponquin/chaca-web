import { TryRoute } from "@containers/Docs/shared/components"
import { Code, H2, Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { useContext } from "react"
import { SectionContext } from "../../context"
import { ModuleSubSectionTitle } from "@modules/docs/domain/core/sections/modules/module-section"

interface Props {
  params: Param[]
  title: ModuleSubSectionTitle
  code: string | null
}

export default function MethodSection({ params, code, title }: Props) {
  const { result, section } = useContext(SectionContext)

  return (
    <>
      <H2 title={{ id: title.id, title: { en: title.title, es: title.title } }} code />

      {params.length > 0 && <Params params={params} />}

      {code && <Code title="Examples" code={code} language="typescript" />}

      <TryRoute
        result={result}
        method="post"
        url={section.methodUrl(title.id)}
        body="{}"
        params={[]}
        disableBody={params.length === 0}
        initFetch={true}
      />
    </>
  )
}
