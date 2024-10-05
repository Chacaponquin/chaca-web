import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export const USERNAME_CODE = `
modules.internet.username() // 'juan527134'
modules.internet.username({ firstName: 'pedro', lastName: 'Scott' }) // 'pedro_scott'
`

export const USERNAME_PARAMS: Param[] = [
  {
    name: "firstName",
    description: "Nombre del usuario",
    required: false,
    params: [],
    types: [COMMON_TYPES.STRING],
  },
  {
    name: "lastName",
    description: "Apellido del usuario",
    required: false,
    params: [],
    types: [COMMON_TYPES.STRING],
  },
]
