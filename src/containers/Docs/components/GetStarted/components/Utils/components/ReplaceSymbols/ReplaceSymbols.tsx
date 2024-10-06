import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { Method } from "../../shared/components"
import {
  List,
  ListItem,
  MiniCode,
  P,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { REPLACE_SYMBOLS } from "@modules/docs/domain/core/sections/get-started/utils"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

const code = `
chaca.utils.replaceSymbols('#####') // '98441'
chaca.utils.replaceSymbols('?????') // 'ZYRQQ'
chaca.utils.replaceSymbols('***$$') // '4Z3pa'
chaca.utils.replaceSymbols('Your pin is: #?*#?*') // 'Your pin is: 0T85L1'
`

export default function ReplaceSymbols() {
  const params: Param[] = [
    {
      name: "text",
      description: "Cadena de texto a tranformar",
      params: [],
      required: true,
      types: [COMMON_TYPES.STRING],
    },
  ]

  return (
    <Method params={params} code={code} title={REPLACE_SYMBOLS}>
      <>
        <P>En una cadena de texto remplaza los siguientes símbolos por unos valores específicos:</P>

        <List>
          <ListItem>
            <P>
              <MiniCode>#</MiniCode>: es remplazado por un número entre 0 - 9.
            </P>
          </ListItem>

          <ListItem>
            <P>
              <MiniCode>?</MiniCode>: es remplazado por una letra mayúscula entre A - Z.
            </P>
          </ListItem>

          <ListItem>
            <P>
              <MiniCode>$</MiniCode>: es remplazado por una letra minúscula entre a - z.
            </P>
          </ListItem>

          <ListItem>
            <P>
              <MiniCode>*</MiniCode>: es remplazado por una letra o un número de forma aleatoria.
            </P>
          </ListItem>
        </List>
      </>
    </Method>
  )
}
