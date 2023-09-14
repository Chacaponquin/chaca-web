import { ChacaSimpleButton } from "@form/components"
import { useLanguage } from "@modules/app/modules/language/hooks"

export default function DatasetsButtons({
  handleCreateAllDatasets,
  handleAddDataset,
}: {
  handleCreateAllDatasets: () => void
  handleAddDataset: () => void
}) {
  const { ADD_DATASET, EXPORT_ALL } = useLanguage({
    ADD_DATASET: { en: "Add Dataset", es: "Añadir Dataset" },
    EXPORT_ALL: { en: "Export All", es: "Exportar Todo" },
  })

  return (
    <div className="w-full flex justify-end py-3 dark:bg-darkColorLight gap-x-4 px-6 esm:px-4">
      <ChacaSimpleButton
        color="primary"
        text={ADD_DATASET}
        size="medium"
        onClick={handleAddDataset}
      />

      <ChacaSimpleButton
        color="secondary"
        text={EXPORT_ALL}
        size="medium"
        onClick={handleCreateAllDatasets}
      />
    </div>
  )
}
