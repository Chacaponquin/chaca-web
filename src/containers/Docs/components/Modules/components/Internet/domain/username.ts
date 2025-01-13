import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const USERNAME_CODE = `
modules.internet.username() // 'juan527134'
modules.internet.username({ firstName: 'pedro', lastName: 'Scott' }) // 'pedro_scott'
`

export const USERNAME_PARAMS: Param[] = [
  {
    name: "firstName",
    description: { es: "Nombre del usuario", en: "User first name" },
    required: false,
    params: [],
    types: [COMMON_TYPES.STRING],
  },
  {
    name: "lastName",
    description: { es: "Apellido del usuario", en: "User last name" },
    required: false,
    params: [],
    types: [COMMON_TYPES.STRING],
  },
]
