import { DocLayout } from "@containers/Docs/shared/components"
import { GETTING_STARTED } from "@modules/docs/domain/core/sections/guides"
import { Markdown } from "@modules/shared/modules/markdown/components"
import { H1 } from "@modules/shared/modules/markdown/components/MDView/components"

export default function Start() {
  return (
    <DocLayout selected={GETTING_STARTED}>
      <Markdown>
        <H1>Getting started</H1>
      </Markdown>
    </DocLayout>
  )
}
