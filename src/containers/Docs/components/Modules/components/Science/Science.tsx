import { PERIODIC_TABLE_ELEMENT, UNIT } from "@modules/docs/domain/core/sections/modules/science"
import { MethodSection } from "../../shared/components"
import {
  PERIODIC_TABLE_ELEMENT_CODE,
  PERIODIC_TABLE_ELEMENT_PARAMS,
} from "./domain/periodic-table-element"
import { UNIT_CODE, UNIT_PARAMS } from "./domain/unit"
import { SectionProvider } from "../../shared/context"
import { SCIENCE } from "@modules/docs/domain/core/sections/modules"

export default function Science() {
  return (
    <SectionProvider section={SCIENCE} result="json">
      <MethodSection
        title={PERIODIC_TABLE_ELEMENT}
        code={PERIODIC_TABLE_ELEMENT_CODE}
        params={PERIODIC_TABLE_ELEMENT_PARAMS}
      />

      <MethodSection title={UNIT} code={UNIT_CODE} params={UNIT_PARAMS} />
    </SectionProvider>
  )
}
