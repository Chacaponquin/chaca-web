import { MethodSection } from "../../shared/components"
import { CARDINAL_DIRECTION_CODE } from "./domain/cardinal"
import { COUNTRY_CODE, COUNTRY_PARAMS } from "./domain/country"
import { COUNTRY_CODE_CODE } from "./domain/country-code"
import { TIME_ZONE_CODE } from "./domain/time-zone"
import { ZIP_CODE, ZIP_PARAMS } from "./domain/zip"

export default function Address() {
  return (
    <>
      <MethodSection apiId="zip_code" method="zipCode" params={ZIP_PARAMS} code={ZIP_CODE} />

      <MethodSection apiId="time_zone" method="timeZone" params={[]} code={TIME_ZONE_CODE} />

      <MethodSection
        apiId="cardinal_direction"
        method="cardinalDirection"
        params={[]}
        code={CARDINAL_DIRECTION_CODE}
      />

      <MethodSection apiId="country" method="country" params={COUNTRY_PARAMS} code={COUNTRY_CODE} />

      <MethodSection
        apiId="country_code"
        method="countryCode"
        params={[]}
        code={COUNTRY_CODE_CODE}
      />
    </>
  )
}
