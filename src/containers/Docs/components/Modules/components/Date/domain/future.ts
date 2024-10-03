import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { REF_DATE } from "../shared/domain/ref-date"
import { YEARS } from "../shared/domain/years"

export const FUTURE_CODE = `
modules.date.future() // '2022-11-19T05:52:49.100Z'
modules.date.future({ years: 10, refDate: '2020-01-01T00:00:00.000Z' }) // '2020-12-13T22:45:10.252Z'
`

export const FUTURE_PARAMS: Param[] = [REF_DATE, YEARS]
