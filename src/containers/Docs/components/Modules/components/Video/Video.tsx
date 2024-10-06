import { OVERVIEW } from "@modules/docs/domain/core/sections/api"
import { VIDEO } from "@modules/docs/domain/core/sections/modules"
import { Info, Link, P } from "@modules/shared/modules/markdown/components/Markdown/components"
import { MethodSection } from "../../shared/components"
import { SectionProvider } from "../../shared/context"

export default function Video() {
  return (
    <SectionProvider section={VIDEO} result="video">
      <Info>
        <P>
          Estos módulos no están disponibles en la librería, solo están disponibles al utilizar la{" "}
          <Link to={OVERVIEW.redirect}>API REST</Link>.
        </P>
      </Info>

      {VIDEO.titles.map((t, index) => (
        <MethodSection key={index} code={null} params={[]} title={t} />
      ))}
    </SectionProvider>
  )
}
