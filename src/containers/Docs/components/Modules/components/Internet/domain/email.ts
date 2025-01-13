import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export const EMAIL_CODE = `
modules.internet.email() // 'juan527120@gmail.com'
modules.internet.email({ firstName: 'pedro', lastName: 'Scott', provider: 'yahoo.com' }) // "pedro_scott@yahoo.com"
`

export const EMAIL_PARAMS: Param[] = [
  {
    name: "firstName",
    description: {
      es: "Primer nombre del usuario dueño del correo",
      en: "First name of the email owner",
    },
    params: [],
    required: false,
    types: [COMMON_TYPES.STRING],
  },
  {
    name: "lastName",
    description: {
      es: "Apellidos del usuario dueño del correo",
      en: "Last name of the email owner",
    },
    params: [],
    required: false,
    types: [COMMON_TYPES.STRING],
  },
  {
    name: "provider",
    description: { es: "Proveedor del email", en: "Email provider" },
    params: [],
    required: false,
    types: [COMMON_TYPES.STRING],
  },
]
