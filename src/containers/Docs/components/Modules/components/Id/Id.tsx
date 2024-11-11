import { MONGODB_ID, NANOID, UUID, CUID, ULID } from "@modules/docs/domain/core/sections/modules/id"
import { MethodSection } from "../../shared/components"
import { MONGODB_ID_CODE } from "./domain/mongo-id"
import { UUID_CODE } from "./domain/uuid"
import { SectionProvider } from "../../shared/context"
import { ID } from "@modules/docs/domain/core/sections/modules"
import { NANOID_CODE, NANOID_PARAMS } from "./domain/nanoid"
import { CUID_CODE } from "./domain/cuid"
import { ULID_CODE } from "./domain/ulid"

export default function Id() {
  return (
    <SectionProvider section={ID} result="json">
      <MethodSection title={UUID} code={UUID_CODE} params={[]} />

      <MethodSection code={MONGODB_ID_CODE} params={[]} title={MONGODB_ID} />

      <MethodSection code={NANOID_CODE} params={NANOID_PARAMS} title={NANOID} />

      <MethodSection code={CUID_CODE} params={[]} title={CUID} />

      <MethodSection code={ULID_CODE} params={[]} title={ULID} />
    </SectionProvider>
  )
}
