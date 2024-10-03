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
      <MethodSection
        apiId="soon"
        code={SOON_CODE}
        method="soon"
        params={SOON_PARAMS}
        title="Soon"
      />

      <MethodSection
        apiId="past"
        code={PAST_CODE}
        method="past"
        params={PAST_PARAMS}
        title="Past"
      />

      <MethodSection
        apiId="future"
        code={FUTURE_CODE}
        params={FUTURE_PARAMS}
        method="future"
        title="Future"
      />

      <MethodSection apiId="month" code={MONTH_CODE} method="month" params={[]} title="Month" />

      <MethodSection
        apiId="weekday"
        code={WEEK_DAY_CODE}
        params={[]}
        method="weekDay"
        title="Week day"
      />

      <MethodSection
        apiId="birthdate"
        code={BIRTHDATE_CODE}
        params={BIRTHDATE_PARAMS}
        method="birthdate"
        title="Birthdate"
      />

      <MethodSection
        apiId="between"
        code={BETWEEN_CODE}
        params={BETWEEN_PARAMS}
        method="between"
        title="Between"
      />

      <MethodSection
        apiId="time_ago"
        code={TIME_AGO_CODE}
        method="timeAgo"
        params={TIME_AGO_PARAMS}
        title="Time ago"
      />
    </>
  )
}
