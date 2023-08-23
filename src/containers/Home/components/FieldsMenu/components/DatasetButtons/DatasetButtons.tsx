import { ChacaSimpleButton } from "@form/components"

export default function DatasetButtons() {
  return (
    <div className="flex justify-end mt-2 gap-4 px-3">
      <ChacaSimpleButton color="primary" size="small" text="Nuevo Campo" />
      <ChacaSimpleButton text="Exportar" color="secondary" size="small" />
    </div>
  )
}
