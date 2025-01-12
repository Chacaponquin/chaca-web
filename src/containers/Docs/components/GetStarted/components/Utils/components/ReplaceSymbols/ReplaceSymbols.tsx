import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { Method } from "../../shared/components"
import { List, ListItem, MiniCode, P } from "@markdown/components/Markdown/components"
import { REPLACE_SYMBOLS } from "@modules/docs/domain/core/sections/get-started/utils"
import { COMMON_TYPES } from "@markdown/domain/constants"

const code = `
chaca.utils.replaceSymbols('#####') // '98441'
chaca.utils.replaceSymbols('?????') // 'ZYRQQ'
chaca.utils.replaceSymbols('***$$') // '4Z3pa'
chaca.utils.replaceSymbols('Your pin is: #?*#?*') // 'Your pin is: 0T85L1'
chaca.utils.replaceSymbols('#####', { banned: ["3", "7", "8"] }) // '91220'
`

export default function ReplaceSymbols() {
  const params: Param[] = [
    {
      name: "text",
      description: { es: "Cadena de texto a tranformar", en: "String to transform" },
      params: [],
      required: true,
      types: [COMMON_TYPES.STRING],
    },
    {
      name: "props",
      required: false,
      description: {
        es: "Configuración para reemplazar los símbolos",
        en: "Configuration for replacing symbols",
      },
      params: [
        {
          name: "banned",
          description: {
            es: "Caracteres que no pueden aparecer en la cadena de texto",
            en: "Characters that cannot appear on the string",
          },
          params: [],
          required: false,
          default: "[]",
          types: [COMMON_TYPES.ARRAY_STRING],
        },
        {
          name: "symbols",
          description: {
            es: "Objeto con la definición de otros símbolos junto con los valores que pueden sustituirlos en la cadena de texto",
            en: "Object with the definition of other symbols and values that can replace them in the string",
          },
          params: [],
          required: false,
          default: "{}",
          types: ["Record<string, string[]>"],
        },
      ],
      types: ["ReplaceSymbolsProps"],
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
