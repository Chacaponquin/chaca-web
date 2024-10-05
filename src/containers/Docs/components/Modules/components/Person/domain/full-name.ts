import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { LANGUAGE_ARGUMENT } from "../shared/domain/language"
import { SEX_ARGUMENT } from "../shared/domain/sex"

export const FULL_NAME_CODE = `
modules.person.fullName() // Schema
modules.person.fullName() // 'Juan Rodriguez Perez'
`

export const FULL_NAME_PARAMS: Param[] = [LANGUAGE_ARGUMENT, SEX_ARGUMENT]
