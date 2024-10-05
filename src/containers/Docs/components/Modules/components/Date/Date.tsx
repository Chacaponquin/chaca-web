import {
  PAST,
  SOON,
  BETWEEN,
  BIRTHDATE,
  FUTURE,
  MONTH,
  TIME_AGO,
  WEEK_DAY,
} from "@modules/docs/domain/core/sections/modules/date"
import { MethodSection } from "../../shared/components"
import { BETWEEN_CODE, BETWEEN_PARAMS } from "./domain/between"
import { BIRTHDATE_CODE, BIRTHDATE_PARAMS } from "./domain/birthdate"
import { FUTURE_CODE, FUTURE_PARAMS } from "./domain/future"
import { MONTH_CODE } from "./domain/month"
import { PAST_CODE, PAST_PARAMS } from "./domain/past"
import { SOON_CODE, SOON_PARAMS } from "./domain/soon"
import { TIME_AGO_CODE, TIME_AGO_PARAMS } from "./domain/time-ago"
import { WEEK_DAY_CODE } from "./domain/week-day"

export default function Date() {
  return (
    <>
      <MethodSection title={SOON} code={SOON_CODE} params={SOON_PARAMS} />

      <MethodSection title={PAST} code={PAST_CODE} params={PAST_PARAMS} />

      <MethodSection code={FUTURE_CODE} params={FUTURE_PARAMS} title={FUTURE} />

      <MethodSection title={MONTH} code={MONTH_CODE} params={[]} />

      <MethodSection title={WEEK_DAY} code={WEEK_DAY_CODE} params={[]} />

      <MethodSection title={BIRTHDATE} code={BIRTHDATE_CODE} params={BIRTHDATE_PARAMS} />

      <MethodSection title={BETWEEN} code={BETWEEN_CODE} params={BETWEEN_PARAMS} />

      <MethodSection title={TIME_AGO} code={TIME_AGO_CODE} params={TIME_AGO_PARAMS} />
    </>
  )
}
