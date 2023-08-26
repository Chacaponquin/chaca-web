import { FormContent, SaveModelInput } from "./components"
import { useConfigServices } from "@modules/config/services"

export default function SaveModelForm() {
  const { config } = useConfigServices()

  return (
    <div className="flex items-center flex-col">
      <SaveModelInput />
      {config.saveSchema && <FormContent saveSchemaForm={config.saveSchema} />}
    </div>
  )
}
