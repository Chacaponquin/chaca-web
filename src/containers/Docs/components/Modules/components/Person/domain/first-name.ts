import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { LANGUAGE_ARGUMENT } from "../shared/domain/language"
import { SEX_ARGUMENT } from "../shared/domain/sex"

export const FIRST_NAME_CODE = `
modules.person.firstName() // 'Juan'
`

export const FIRST_NAME_PARAMS: Param[] = [LANGUAGE_ARGUMENT, SEX_ARGUMENT]
