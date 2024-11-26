import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"

interface Props {
  params: Param[]
}

export default function ExportParams({ params: iparams }: Props) {
  function transform(p: Param): Param {
    return { ...p, name: `--${p.name}`, alias: p.alias ? `-${p.alias}` : undefined }
  }

  return <Params params={iparams.map((p) => transform(p))} />
}
