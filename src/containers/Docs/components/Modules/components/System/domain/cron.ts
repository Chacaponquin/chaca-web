import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export const CRON_CODE = `
modules.system.cron() // '45 23 * * 6'
modules.system.cron({ includeYear: true }) // '45 23 * * 6 2067'
modules.system.cron({ includeYear: false }) // '45 23 * * 6'
modules.system.cron({ includeNonStandard: false }) // '45 23 * * 6'
modules.system.cron({ includeNonStandard: true }) // '@yearly'
`

export const CRON_PARAMS: Param[] = [
  {
    name: "includeYear",
    description: "Incluir un año en la expresión generada",
    params: [],
    required: false,
    types: [COMMON_TYPES.BOOLEAN],
    default: "false",
  },
  {
    name: "includeNonStandard",
    description: "Añade @yearly, @monthly, @dayly y otras etiquetas en la expresión generada",
    params: [],
    required: false,
    types: [COMMON_TYPES.BOOLEAN],
    default: "false",
  },
]
