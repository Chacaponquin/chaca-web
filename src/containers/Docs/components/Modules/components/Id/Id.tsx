import { MONGODB_ID, UUID } from "@modules/docs/domain/core/sections/modules/id"
import { MethodSection } from "../../shared/components"
import { MONGODB_ID_CODE } from "./domain/mongo-id"
import { UUID_CODE } from "./domain/uuid"
import { SectionProvider } from "../../shared/context"
import { ID } from "@modules/docs/domain/core/sections/modules"

export default function Id() {
  return (
    <SectionProvider section={ID} result="json">
      <MethodSection title={UUID} code={UUID_CODE} params={[]} />

      <MethodSection code={MONGODB_ID_CODE} params={[]} title={MONGODB_ID} />
    </SectionProvider>
  )
}
