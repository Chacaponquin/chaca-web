import { MethodSection } from "../../shared/components"
import { CARDINAL_DIRECTION_CODE } from "./domain/cardinal"
import { COUNTRY_CODE, COUNTRY_PARAMS } from "./domain/country"
import { COUNTRY_CODE_CODE } from "./domain/country-code"
import { TIME_ZONE_CODE } from "./domain/time-zone"
import { ZIP_CODE } from "./domain/zip"
import { useZip } from "./hooks"

export default function Address() {
  const { ZIP_PARAMS } = useZip()

  return (
    <>
      <MethodSection
        title="Zip code"
        apiId="zip_code"
        method="zipCode"
        params={ZIP_PARAMS}
        code={ZIP_CODE}
      />

      <MethodSection
        title="Time zone"
        apiId="time_zone"
        method="timeZone"
        params={[]}
        code={TIME_ZONE_CODE}
      />

      <MethodSection
        title="Cardinal direction"
        apiId="cardinal_direction"
        method="cardinalDirection"
        params={[]}
        code={CARDINAL_DIRECTION_CODE}
      />

      <MethodSection
        title="Country"
        apiId="country"
        method="country"
        params={COUNTRY_PARAMS}
        code={COUNTRY_CODE}
      />

      <MethodSection
        title="Country code"
        apiId="country_code"
        method="countryCode"
        params={[]}
        code={COUNTRY_CODE_CODE}
      />
    </>
  )
}
