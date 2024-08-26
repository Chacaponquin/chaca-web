import { Dataset } from "@modules/datasets/domain/core"
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

  const CLASS = clsx(
    "flex flex-col",
    "rounded",
    "bg-scale-4",
    "cursor-grab",
    "stroke-white",
    "text-white",
    "relative",
    // "animate-jump-in animate-once animate-duration-400 animate-ease-in-out",

    { "outline outline-[2px] outline-purple-6": selected },
  )

  return (
    <article className={CLASS} id={dataset.id} onClick={handleClickCard}>
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

      <div className="flex flex-col gap-y-0.5 min-w-[230px] p-1.5">
        {dataset.nodes.map((field, i) => (
          <Field
            key={i}
            field={field}
            datasetHasKeys={dataset.hasKeyField()}
            margin={0}
            datasetId={dataset.id}
            parentfieldId={dataset.id}
          />
        ))}
      </div>
    </article>
  )
}
