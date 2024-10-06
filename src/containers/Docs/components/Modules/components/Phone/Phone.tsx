import { CALL_DURATION, NUMBER, PREFIX } from "@modules/docs/domain/core/sections/modules/phone"
import { MethodSection } from "../../shared/components"
import { NUMBER_CODE } from "./domain/number"
import { useNumberParams } from "./hooks"
import { PREFIX_CODE } from "./domain/prefix"
import { CALL_DURATION_CODE, CALL_DURATION_PARAMS } from "./domain/call-duration"
import { SectionProvider } from "../../shared/context"
import { PHONE } from "@modules/docs/domain/core/sections/modules"

export default function Phone() {
  const { NUMBER_PARAMS } = useNumberParams()

  return (
    <SectionProvider section={PHONE} result="json">
      <MethodSection title={NUMBER} code={NUMBER_CODE} params={NUMBER_PARAMS} />

      <MethodSection title={PREFIX} code={PREFIX_CODE} params={[]} />

      <MethodSection
        title={CALL_DURATION}
        code={CALL_DURATION_CODE}
        params={CALL_DURATION_PARAMS}
      />
    </SectionProvider>
  )
}
