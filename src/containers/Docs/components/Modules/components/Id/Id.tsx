import { MethodSection } from "../../shared/components"
import { MONGODB_ID_CODE } from "./domain/mongo-id"
import { UUID_CODE } from "./domain/uuid"

export default function Id() {
  return (
    <>
      <MethodSection method="uuid" apiId="uuid" code={UUID_CODE} params={[]} title="Uuid" />

      <MethodSection
        method="mongodbId"
        apiId="mongodb_id"
        code={MONGODB_ID_CODE}
        params={[]}
        title="Mongodb id"
      />
    </>
  )
}
