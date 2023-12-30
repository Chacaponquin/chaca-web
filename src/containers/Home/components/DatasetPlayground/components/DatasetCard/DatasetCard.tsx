import { Dataset } from "@modules/datasets/domain/tree"
import { CardHeader, Field } from "./components"
import { useDatasetCard } from "./hooks"
import clsx from "clsx"
import { useDatasets } from "@modules/datasets/hooks"

export interface CardProps {
  handleCreateDataset(dataset: Dataset): void
  dataset: Dataset
}

interface Props {
  id: string
  data: CardProps
}

export default function DatasetCard({ data: { dataset, handleCreateDataset } }: Props) {
  const { selectedDataset } = useDatasets()

  const {
    handleEditDataset,
    handleDeleteDataset,
    handleCreateDataset: handleCreateDatasetHook,
    handleClickCard,
  } = useDatasetCard({
    dataset: dataset,
    handleCreateDataset: handleCreateDataset,
  })

  const CARD_CLASS = clsx(
    "bg-scale-4 flex flex-col min-w-[380px] rounded-lg text-white stroke-white cursor-grab",
    { "outline outline-4 outline-purple-6": selectedDataset?.id === dataset.id },
  )

  return (
    <div className={CARD_CLASS} id={dataset.id} onClick={handleClickCard}>
      <CardHeader
        handleDeleteDataset={handleDeleteDataset}
        handleEditDataset={handleEditDataset}
        handleExportDataset={handleCreateDatasetHook}
        name={dataset.name}
        limit={dataset.limit}
      />

      <div className="flex flex-col py-2 max-h-[350px] overflow-y-auto">
        {dataset.nodes.map((field, i) => (
          <Field key={i} field={field} datasetHasKeys={dataset.hasKeyField()} />
        ))}
      </div>
    </div>
  )
}
