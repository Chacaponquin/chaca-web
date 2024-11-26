import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { REF_DATE } from "../shared/domain/ref-date"
import { YEARS } from "../shared/domain/years"

export const PAST_CODE = `
modules.date.past() // '2021-12-03T05:40:44.408Z'
modules.date.past()({ years: 10, refDate: '2020-01-01T00:00:00.000Z' }) // '2017-08-18T02:59:12.350Z'
`

export const PAST_PARAMS: Param[] = [REF_DATE, YEARS]
