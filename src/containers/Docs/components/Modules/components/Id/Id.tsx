import { MONGODB_ID, UUID } from "@modules/docs/domain/core/sections/modules/id"
import { MethodSection } from "../../shared/components"
import { MONGODB_ID_CODE } from "./domain/mongo-id"
import { UUID_CODE } from "./domain/uuid"

export default function Id() {
  return (
    <>
      <MethodSection title={UUID} code={UUID_CODE} params={[]} />

      <MethodSection code={MONGODB_ID_CODE} params={[]} title={MONGODB_ID} />
    </>
  )
}
