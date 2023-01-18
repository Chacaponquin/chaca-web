import { Private } from "@shared/assets/icons"
import { DatasetsContext, UserContext } from "@shared/context"
import { useLanguage } from "@shared/hooks"
import { useContext } from "react"
import { CONFIG_ACTIONS } from "@containers/Home/constants"
import { ChacaSwitchButton } from "@form"

export default function SaveModelInput() {
  const { SAVE_SCHEMA_TEXT } = useLanguage({
    SAVE_SCHEMA_TEXT: { en: "Save Model", es: "Guardar Modelo" },
  })

  const { actualUser } = useContext(UserContext)
  const { configDispatch, config } = useContext(DatasetsContext)

  return (
    <div className='flex items-center gap-2 justify-between w-full'>
      <label htmlFor='' className='font-fontBold text-lg'>
        {SAVE_SCHEMA_TEXT}:
      </label>
      {actualUser ? (
        <ChacaSwitchButton
          value={config.saveSchema !== null}
          onChange={(value) => {
            configDispatch({
              type: CONFIG_ACTIONS.CHANGE_SAVE_SCHEMA,
              payload: {
                value: value
                  ? {
                      description: "",
                      name: "Buenas",
                      tags: [],
                    }
                  : null,
              },
            })
          }}
        />
      ) : (
        <Private size={20} />
      )}
    </div>
  )
}
