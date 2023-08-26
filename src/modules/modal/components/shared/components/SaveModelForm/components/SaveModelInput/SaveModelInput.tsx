import { useLanguage } from "@modules/app/modules/language/hooks"
import { ChacaSwitchButton } from "@form/components"
import { useConfigServices } from "@modules/config/services"
import { useDatasetServices } from "@modules/datasets/services"
import { useUserServices } from "@modules/user/services"
import { FormInputSection } from "@modules/modal/components/shared/shared/components"
import { useId } from "react"
import { PrivateMessage } from "./components"

export default function SaveModelInput() {
  const { actualUser } = useUserServices()
  const { config } = useDatasetServices()
  const { SAVE_SCHEMA_TEXT } = useLanguage({
    SAVE_SCHEMA_TEXT: { en: "Save Model", es: "Guardar Modelo" },
  })

  const { changeSaveSchema } = useConfigServices()

  const saveId = useId()

  return (
    <FormInputSection labelText={SAVE_SCHEMA_TEXT} id={saveId}>
      {actualUser ? (
        <ChacaSwitchButton
          value={config.saveSchema !== null}
          onChange={(value) => {
            changeSaveSchema(value)
          }}
        />
      ) : (
        <PrivateMessage />
      )}
    </FormInputSection>
  )
}
