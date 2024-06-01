import { Dataset } from "@modules/datasets/domain/tree"
import { CardHeader, Field } from "./components"
import { useDatasetCard } from "./hooks"
import clsx from "clsx"

export interface CardProps {
  dataset: Dataset
}

interface Props {
  id: string
  data: CardProps
}

export default function DatasetCard({ data: { dataset } }: Props) {
  const {
    handleEditDataset,
    handleDeleteDataset,
    handleCreateDataset,
    handleClickCard,
    handleCloneDataset,
    selected,
    handleAddField,
  } = useDatasetCard({
    dataset: dataset,
  })

  const CARD_CLASS = clsx(
    "flex flex-col",
    "rounded-lg",
    "bg-scale-4",
    "cursor-grab",
    "stroke-white",
    "text-white",
    "relative",
    "animate-jump-in animate-once animate-duration-400 animate-ease-in-out",

    { "outline outline-4 outline-purple-6": selected },
  )

  return (
    <div className={CARD_CLASS} id={dataset.id} onClick={handleClickCard}>
      <CardHeader
        handleDeleteDataset={handleDeleteDataset}
        handleEditDataset={handleEditDataset}
        handleExportDataset={handleCreateDataset}
        name={dataset.name}
        limit={dataset.limit}
        nameId={dataset.slug}
        handleCloneDataset={handleCloneDataset}
        handleAddField={handleAddField}
      />

      <div className="flex flex-col py-2 min-w-[380px]">
        {dataset.nodes.map((field, i) => (
          <Field key={i} field={field} datasetHasKeys={dataset.hasKeyField()} />
        ))}
      </div>
    </div>
  )
}
