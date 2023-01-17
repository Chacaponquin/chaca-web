import { Private } from "@shared/assets/icons"
import { DatasetsContext, UserContext } from "@shared/context"
import { useLanguage } from "@shared/hooks"
import { InputSwitch } from "primereact/inputswitch"
import { useContext } from "react"
import { CONFIG_ACTIONS } from "@containers/Home/constants/ACTION_TYPES"

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
        <InputSwitch
          checked={config.saveSchema}
          onChange={(e) => {
            configDispatch({
              type: CONFIG_ACTIONS.CHANGE_SAVE_SCHEMA,
              payload: { value: e.value },
            })
          }}
        />
      ) : (
        <Private size={20} />
      )}
    </div>
  )
}
