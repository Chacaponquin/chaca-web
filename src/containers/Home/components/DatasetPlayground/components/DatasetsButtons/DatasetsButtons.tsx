import { ChacaSimpleButton } from "@form/components"
import { useTranslation } from "@modules/app/modules/language/hooks"

interface Props {
  handleCreateAllDatasets(): void
  handleAddDataset(): void
}

export default function DatasetsButtons({ handleCreateAllDatasets, handleAddDataset }: Props) {
  const { ADD_DATASET, EXPORT_ALL } = useTranslation({
    ADD_DATASET: { en: "Add Dataset", es: "Añadir Dataset" },
    EXPORT_ALL: { en: "Export All", es: "Exportar Todo" },
  })

  return (
    <div className="w-max flex justify-end py-3 gap-x-4 px-6 esm:px-4 z-10 absolute top-0 right-0">
      <ChacaSimpleButton
        color="primary"
        id="create-dataset-button"
        text={ADD_DATASET}
        size="base"
        onClick={handleAddDataset}
      />

      <ChacaSimpleButton
        color="secondary"
        text={EXPORT_ALL}
        size="base"
        onClick={handleCreateAllDatasets}
      />
    </div>
  )
}
