import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { LENGTH } from "../shared/domain/length"
import { PREFIX } from "../shared/domain/prefix"

export const OCTAL_CODE = `
modules.datatype.octal() // '0o3'
modules.datatype.octal({ length: 10 }) // '0o1526216210'
modules.datatype.octal({ prefix: '0o' }) // '0o7'
modules.datatype.octal({ length: 10, prefix: 'oct_' }) // 'oct_1542153414'
`

export const OCTAL_PARAMS: Param[] = [LENGTH, PREFIX]
