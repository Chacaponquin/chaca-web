import {
  CARDINAL_DIRECTION,
  COUNTRY,
  TIME_ZONE,
  ZIP_CODE,
  COUNTRY_CODE as DOMAIN_COUNTRY_CODE,
  ORDINAL_DIRECTION,
  LONGITUDE,
  LATITUDE,
} from "@modules/docs/domain/core/sections/modules/address"
import { MethodSection } from "../../shared/components"
import { CARDINAL_DIRECTION_CODE } from "./domain/cardinal"
import { COUNTRY_CODE, COUNTRY_PARAMS } from "./domain/country"
import { COUNTRY_CODE_CODE } from "./domain/country-code"
import { TIME_ZONE_CODE } from "./domain/time-zone"
import { ZIP_CODE_CODE } from "./domain/zip"
import { useZip } from "./hooks"
import { SectionProvider } from "../../shared/context"
import { ADDRESS } from "@modules/docs/domain/core/sections/modules"
import { ORDINAL_DIRECTION_CODE } from "./domain/ordinal-direction"
import { LONGITUDE_CODE, LONGITUDE_PARAMS } from "./domain/longitude"
import { LATITUDE_CODE, LATITUDE_PARAMS } from "./domain/latitude"

export default function Address() {
  const { ZIP_PARAMS } = useZip()

  return (
    <SectionProvider section={ADDRESS} result="json">
      <MethodSection title={ZIP_CODE} params={ZIP_PARAMS} code={ZIP_CODE_CODE} />

      <MethodSection title={TIME_ZONE} params={[]} code={TIME_ZONE_CODE} />

      <MethodSection title={CARDINAL_DIRECTION} params={[]} code={CARDINAL_DIRECTION_CODE} />

      <MethodSection title={COUNTRY} params={COUNTRY_PARAMS} code={COUNTRY_CODE} />

      <MethodSection title={DOMAIN_COUNTRY_CODE} params={[]} code={COUNTRY_CODE_CODE} />

      <MethodSection title={ORDINAL_DIRECTION} params={[]} code={ORDINAL_DIRECTION_CODE} />

      <MethodSection title={LONGITUDE} params={LONGITUDE_PARAMS} code={LONGITUDE_CODE} />

      <MethodSection title={LATITUDE} code={LATITUDE_CODE} params={LATITUDE_PARAMS} />
    </SectionProvider>
  )
}
