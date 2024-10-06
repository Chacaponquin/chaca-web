import { WORD } from "@modules/docs/domain/core/sections/modules"
import { SectionProvider } from "../../shared/context"

export default function Word() {
  return (
    <SectionProvider section={WORD} result="json">
      <></>
    </SectionProvider>
  )
}
