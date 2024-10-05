import {
  CARDINAL_DIRECTION,
  COUNTRY,
  TIME_ZONE,
  ZIP_CODE,
  COUNTRY_CODE as DOMAIN_COUNTRY_CODE,
} from "@modules/docs/domain/core/sections/modules/address"
import { MethodSection } from "../../shared/components"
import { CARDINAL_DIRECTION_CODE } from "./domain/cardinal"
import { COUNTRY_CODE, COUNTRY_PARAMS } from "./domain/country"
import { COUNTRY_CODE_CODE } from "./domain/country-code"
import { TIME_ZONE_CODE } from "./domain/time-zone"
import { ZIP_CODE_CODE } from "./domain/zip"
import { useZip } from "./hooks"

export default function Address() {
  const { ZIP_PARAMS } = useZip()

  return (
    <>
      <MethodSection title={ZIP_CODE} params={ZIP_PARAMS} code={ZIP_CODE_CODE} />

      <MethodSection title={TIME_ZONE} params={[]} code={TIME_ZONE_CODE} />

      <MethodSection title={CARDINAL_DIRECTION} params={[]} code={CARDINAL_DIRECTION_CODE} />

      <MethodSection title={COUNTRY} params={COUNTRY_PARAMS} code={COUNTRY_CODE} />

      <MethodSection title={DOMAIN_COUNTRY_CODE} params={[]} code={COUNTRY_CODE_CODE} />
    </>
  )
}
