import { InputSwitch } from "primereact/inputswitch"
import { useContext } from "react"
import { Private } from "../../../../../../shared/assets/icons"
import { DatasetsContext, UserContext } from "../../../../../../shared/context"
import { useLanguage } from "@shared/hooks"
import { CONFIG_ACTIONS } from "../../../../constants/ACTION_TYPES"

export default function SaveModelForm() {
  const { SAVE_SCHEMA_TEXT } = useLanguage({
    SAVE_SCHEMA_TEXT: { en: "Save Model", es: "Guardar Modelo" },
  })

  const { actualUser } = useContext(UserContext)
  const { configDispatch, config } = useContext(DatasetsContext)

  return (
    <div className='flex items-center gap-2 justify-between'>
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
        <Private size={23} />
      )}
    </div>
  )
}
